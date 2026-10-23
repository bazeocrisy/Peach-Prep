#!/usr/bin/env python3
"""Read-only git object reader (no git binary). Extracts a commit's tree to a dir.
usage: gitread.py GITDIR COMMIT OUTDIR [prefix...]
       gitread.py GITDIR COMMIT --log   (print commit header)
"""
import sys, os, zlib, struct, glob

GD = sys.argv[1]
OBJ = os.path.join(GD, 'objects')

packs = []
for idxp in glob.glob(os.path.join(OBJ, 'pack', '*.idx')):
    with open(idxp, 'rb') as f:
        d = f.read()
    assert d[:4] == b'\xfftOc'
    fan = struct.unpack('>256I', d[8:8 + 1024])
    n = fan[255]
    o = 8 + 1024
    shas = [d[o + 20 * i:o + 20 * i + 20] for i in range(n)]
    o += 20 * n + 4 * n
    offs = list(struct.unpack('>%dI' % n, d[o:o + 4 * n]))
    o += 4 * n
    big = d[o:]
    for i, v in enumerate(offs):
        if v & 0x80000000:
            j = v & 0x7fffffff
            offs[i] = struct.unpack('>Q', big[8 * j:8 * j + 8])[0]
    with open(idxp[:-4] + '.pack', 'rb') as f:
        pk = f.read()
    packs.append((dict(zip(shas, offs)), pk))

TYPES = {1: 'commit', 2: 'tree', 3: 'blob', 4: 'tag'}


def apply_delta(base, delta):
    i = 0

    def varint():
        nonlocal i
        r = s = 0
        while True:
            b = delta[i]; i += 1
            r |= (b & 0x7f) << s; s += 7
            if not b & 0x80:
                return r
    varint(); varint()
    out = bytearray()
    while i < len(delta):
        c = delta[i]; i += 1
        if c & 0x80:
            off = sz = 0
            for k in range(4):
                if c & (1 << k):
                    off |= delta[i] << (8 * k); i += 1
            for k in range(3):
                if c & (1 << (4 + k)):
                    sz |= delta[i] << (8 * k); i += 1
            if sz == 0:
                sz = 0x10000
            out += base[off:off + sz]
        else:
            out += delta[i:i + c]; i += c
    return bytes(out)


def read_packed(pk, off):
    o = off
    b = pk[o]; o += 1
    t = (b >> 4) & 7
    while b & 0x80:
        b = pk[o]; o += 1
    if t == 6:
        b = pk[o]; o += 1
        n = b & 0x7f
        while b & 0x80:
            b = pk[o]; o += 1
            n = ((n + 1) << 7) | (b & 0x7f)
        bt, bd = read_packed(pk, off - n)
        return bt, apply_delta(bd, zlib.decompressobj().decompress(pk[o:]))
    if t == 7:
        ref = pk[o:o + 20]; o += 20
        bt, bd = read_obj(ref.hex())
        return bt, apply_delta(bd, zlib.decompressobj().decompress(pk[o:]))
    return TYPES[t], zlib.decompressobj().decompress(pk[o:])


def read_obj(sha):
    p = os.path.join(OBJ, sha[:2], sha[2:])
    if os.path.exists(p):
        raw = zlib.decompress(open(p, 'rb').read())
        hdr, _, body = raw.partition(b'\0')
        return hdr.split()[0].decode(), body
    bs = bytes.fromhex(sha)
    for m, pk in packs:
        if bs in m:
            return read_packed(pk, m[bs])
    raise KeyError(sha)


def resolve(prefix):
    if len(prefix) == 40:
        return prefix
    c = set()
    for p in glob.glob(os.path.join(OBJ, prefix[:2], prefix[2:] + '*')):
        c.add(prefix[:2] + os.path.basename(p))
    for m, _ in packs:
        for s in m:
            if s.hex().startswith(prefix):
                c.add(s.hex())
    assert len(c) == 1, c
    return c.pop()


def walk(tree, path, out, prefixes):
    _, d = read_obj(tree)
    i = 0
    while i < len(d):
        sp = d.index(b' ', i); nul = d.index(b'\0', sp)
        mode = d[i:sp].decode(); name = d[sp + 1:nul].decode()
        sha = d[nul + 1:nul + 21].hex(); i = nul + 21
        rel = path + name
        if mode == '40000':
            walk(sha, rel + '/', out, prefixes)
        elif mode == '160000':
            continue
        else:
            if prefixes and not any(rel.startswith(p) for p in prefixes):
                continue
            t, body = read_obj(sha)
            fp = os.path.join(out, rel)
            os.makedirs(os.path.dirname(fp), exist_ok=True)
            open(fp, 'wb').write(body)


commit = resolve(sys.argv[2])
t, body = read_obj(commit)
if sys.argv[3] == '--log':
    print(body.decode(errors='replace'))
    sys.exit()
tree = body.split(b'\n')[0].split()[1].decode()
walk(tree, '', sys.argv[3], sys.argv[4:])
print('extracted', commit, 'tree', tree)

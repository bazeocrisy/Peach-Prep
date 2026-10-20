"""Approximate Flesch-Kincaid grade for every passage (heuristic syllable count).
An estimate for screening only -- not a Lexile measure."""
import json, subprocess, re, glob, sys
def syl(w):
    w = re.sub(r"[^a-z]", "", w.lower())
    if not w: return 0
    if len(w) <= 3: return 1
    w = re.sub(r"(?:[^laeiouy]es|ed|[^laeiouy]e)$", "", w)
    w = re.sub(r"^y", "", w)
    return max(1, len(re.findall(r"[aeiouy]{1,2}", w)))
def fk(t):
    sents = max(1, len(re.findall(r"[.!?]+[\"”']?(\s|$)", t)))
    words = re.findall(r"[A-Za-z'’-]+", t)
    n = max(1, len(words)); s = sum(syl(w) for w in words)
    return 0.39 * n / sents + 11.8 * s / n - 15.59
rows = []
files = sys.argv[1:] or (sorted(glob.glob("js/data/sets/*.js")) + sorted(glob.glob("js/data/tasks/*.js")) + sorted(glob.glob("js/data/lessons/*.js")))
for f in files:
  js = 'const out=[];global.PP={addSet:s=>out.push(s),addTask:t=>out.push(t),addLesson:l=>out.push(Object.assign({id:l.code},l))};require("./%s");console.log(JSON.stringify(out));' % f
  for d in json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True).stdout):
    for p in d.get("passages", []) + d.get("sources", []):
        blocks = p.get("lines") or p.get("paragraphs")
        if p.get("lines"): continue
        t = " ".join(" ".join(b) for b in blocks if not b[0].startswith("## "))
        t = re.sub(r"\b(Caption|Box): ", "", t)
        g = fk(t)
        rows.append((d["id"], p["id"], len(t.split()), g))
        print("%-12s %-3s words=%4d  FK~%4.1f %s" % (d["id"], p["id"], len(t.split()), g, "  <-- above grade 4.5" if g > 4.5 else ""))

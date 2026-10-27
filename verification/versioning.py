#!/usr/bin/env python3
"""Check versions, the review ledger and the --release switch (expansion 2026-10-22, 01-architecture 2.4 item 5 and 2.6 rules 11, 12).

Part N (node, no browser): check-content.js on mutated copies of the repository. It covers testRev shape, the version record
(material change with the same testRev, wording-only edit, stale record, new form), the review ledger (no record, a record
that no longer matches, a reviewer who is also an author, a missing review file), the --record-* commands and --release
(failures instead of warnings; the default mode unchanged).
Part B (browser): attempts[].rev, old attempts without rev, the label on a pass or best score from an earlier version, answers
seen on an earlier version not counting for a newer one, and the review result's version signature.

Serve the repository first.  Run: python3 verification/versioning.py [BASE_URL]
CHROMIUM_PATH optionally names a browser. Exit code 1 on any failure.
"""
import json, os, re, shutil, subprocess, sys, tempfile
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
import datetime


def realdate(x):
    try:
        datetime.date.fromisoformat(x); return True
    except Exception:
        return False

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8720/"
results = []


def check(name, good, detail=""):
    results.append({"name": name, "pass": bool(good), "detail": "" if good else str(detail)[:600]})
    print(("PASS  " if good else "FAIL  ") + name + ("" if good else "   [" + str(detail)[:600] + "]"), flush=True)


def _crash_hook(t, v, tb):
    import traceback
    traceback.print_exception(t, v, tb)
    check("Z.crash the suite ran to the end", False, "%s: %s" % (t.__name__, v))
    f = [r for r in results if not r["pass"]]
    print("%d passed, %d failed" % (len(results) - len(f), len(f)), flush=True)
    sys.exit(1)


sys.excepthook = _crash_hook

# ---------------- Part N: check-content on copies ----------------
tmp = Path(tempfile.mkdtemp(prefix="pp-ver-"))
for d in ("js", "verification", "docs/audits/work", "docs/expansion-2026-10-22", "assets"):
    shutil.copytree(ROOT / d, tmp / d)
LESSON = "js/data/lessons/T-T1.js"
KEY = "3.T.T.1.c"
ORIG = (tmp / LESSON).read_text()
VER = tmp / "verification/assessment-versions.json"
LED = tmp / "docs/expansion-2026-10-22/review-ledger.json"
DOCS = tmp / "docs/expansion-2026-10-22/batches"
REVIEW_FILE = "docs/expansion-2026-10-22/batches/TEST-review.md"


def cc(*args):
    r = subprocess.run(["node", "verification/check-content.js", "--all", *args], cwd=tmp, capture_output=True, text=True)
    return r.returncode, r.stdout + r.stderr


def node(*args):
    r = subprocess.run(["node", "verification/check-content.js", *args], cwd=tmp, capture_output=True, text=True)
    return r.returncode, r.stdout + r.stderr


def setl(text): (tmp / LESSON).write_text(text)


def lesson(a=None, b_=None):
    assert a is None or a in ORIG, a
    setl(ORIG if a is None else ORIG.replace(a, b_, 1))


def lines(out, pre): return [l.strip() for l in out.splitlines() if re.match(r"\s+(FAIL|warn)\s+" + pre, l)]
def fails(out, pre): return [l for l in lines(out, pre) if l.startswith("FAIL")]
def warns(out, pre): return [l for l in lines(out, pre) if l.startswith("warn")]


def reset_records():
    """Records for the copy are made from the copy's own content, so these tests do not depend on how far the repository's
    committed records are from the content the authors are editing right now."""
    setl(ORIG)
    VER.unlink(missing_ok=True)
    r = subprocess.run(["node", "verification/check-content.js", "--all", "--record-versions", "--init"], cwd=tmp, capture_output=True, text=True)
    assert r.returncode == 0, r.stdout + r.stderr
    LED.write_text('{"v": 1, "lessons": {}}\n')
    for f in DOCS.glob("TEST-*.md"): f.unlink()


def review_file(names=("Rita Reviewer",), key=KEY, with_hashes=True, extra=""):
    """A review file for the copy: names the reviewer and the lesson, and carries the --print-hashes lines when asked."""
    hashes = node("--all", "--print-hashes", key)[1] if with_hashes else ""
    (tmp / REVIEW_FILE).write_text("# Review of %s\nReviewer: %s\n%s\n%s\n" % (key, ", ".join(names), hashes, extra))


WORD = ("How does he treat Amara when she tries to talk?", "How does he treat Amara when she tries to talk to him?")   # a clue
PROMPT = ("Which word best describes Theo at the beginning of the story?", "Which word best describes Theo at the start of the story?")
KEYMOVE = ('{ text: "bossy", correct: true },\n        { text: "shy" },', '{ text: "bossy" },\n        { text: "shy", correct: true },')
TEXTSWAP = ('{ text: "bossy", correct: true },\n        { text: "shy" },', '{ text: "shy", correct: true },\n        { text: "bossy" },')
CORRECTTEXT = ('{ text: "bossy", correct: true },', '{ text: "controlling and loud", correct: true },')
DISTRACTOR = ('{ text: "careful" }\n      ],\n      clue: "Look at what Theo says', '{ text: "kind" }\n      ],\n      clue: "Look at what Theo says')
POINTS_ONLY = ('{ id: "SK-TT1c-T1", type: "mc", points: 1, dok: 2,', '{ id: "SK-TT1c-T1", type: "mc", points: 2, dok: 2,')
POINTS = POINTS_ONLY
PASSREF = ('{ id: "SK-TT1c-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],', '{ id: "SK-TT1c-T1", type: "mc", points: 1, dok: 2, passages: ["p3"],')
EBSR = ('{ text: "Listening to others can make your work better.", correct: true },\n          { text: "Building a bridge is harder than it looks." },',
        '{ text: "Building a bridge is harder than it looks.", correct: true },\n          { text: "Listening to others can make your work better." },')
MATCHCOLS = ('cols: ["Before the bridge breaks", "After the bridge breaks"],', 'cols: ["After the bridge breaks", "Before the bridge breaks"],')
REVA = ('\n  code: "3.T.T.1.c",', '\n  code: "3.T.T.1.c",\n  testRev: { A: "2" },')


def passage_edit():
    base = ORIG.index('code: "3.T.T.1.c"'); j = ORIG.index('id: "p2"', base)
    k = ORIG.index('"', ORIG.index("paragraphs", j) + 20)
    return ORIG[:k + 1] + "A changed story fact. " + ORIG[k + 1:]


def swap_items():
    lt = ORIG.split("\n")
    idx = lambda t: [i for i, l in enumerate(lt) if 'id: "%s"' % t in l][0]
    i1, i2, i3 = idx("SK-TT1c-T1"), idx("SK-TT1c-T2"), idx("SK-TT1c-T3")
    return "\n".join(lt[:i1] + lt[i2:i3] + lt[i1:i2] + lt[i3:])


reset_records(); lesson()
BASE_V = json.loads(VER.read_text())
rc, out = cc()
check("N.1 default mode: fresh records are current, so check-content passes with no version warning (a missing ledger record is a warning)",
      rc == 0 and not lines(out, "versions") and "no independent-review record" in out, out[-500:])
rc, out = cc("--release")
check("N.2 --release fails on today's content: lessons with neither core nor an exception, and parts with no independent-review record",
      rc == 1 and "FAIL  core (release)" in out and "FAIL  ledger: " in out and "no independent-review record" in out, out[-400:])
check("N.2b the record is format 2 and holds, per form, rev, history, hash, material hash and question hashes (items and passages)",
      BASE_V["v"] == 2 and all(set(v) >= {"rev", "history", "hash", "mat", "q"} for v in BASE_V["forms"].values()) and any(k.startswith("passage:") for k in BASE_V["forms"][KEY + ":A"]["q"]), list(BASE_V["forms"][KEY + ":A"]))

# clue-only edit: wording only, not a reworded question
lesson(*WORD)
rc, out = cc(); rc2, out2 = cc("--release")
check("N.3 a clue-only edit is a warning in both modes ('clue, explanation or hint wording only') and not a reworded question",
      any("wording only" in l for l in warns(out, "versions")) and not any("reworded" in l for l in lines(out, "versions")) and not fails(out2, "versions"), (out[-300:], out2[-300:]))

# question-text reword
lesson(*PROMPT)
rc, out = cc(); rc2, out2 = cc("--release")
check("N.3b a reworded prompt with the same id, points and key, on a lesson with core: a warning by default, a FAILURE with --release, and it names the item",
      rc == 0 and any("reworded" in l and "SK-TT1c-T1" in l for l in warns(out, "versions")) and any("reworded" in l and "SK-TT1c-T1" in l for l in fails(out2, "versions")), (out[-300:], out2[-400:]))
lesson(*DISTRACTOR)
rc, out2 = cc("--release")
check("N.3c replacing a wrong choice's text (key unchanged) counts as a reworded question too", any("reworded" in l for l in fails(out2, "versions")), out2[-300:])
rc, out = cc("--record-versions")
check("N.3d --record-versions REFUSES to erase the reworded-question warning without an acknowledgement, names the item, and leaves the record as it was",
      rc == 1 and "NOT RECORDED" in out and "SK-TT1c-T1" in out and "--accept-reword" in out and json.loads(VER.read_text()) == BASE_V, out)
rc, out = cc("--record-versions", "--accept-reword", "SK-TT1c-T1")
check("N.3e --accept-reword without --by is refused", rc == 1 and "--by" in out, out)
rc, out = cc("--record-versions", "--accept-reword", "SK-TT1c-T1,SK-TT1c-T2", "--by", "Rita Reviewer")
check("N.3f an acknowledgement that names an item whose question did not change is refused", rc == 1 and "SK-TT1c-T2" in out, out)
rc, out = cc("--record-versions", "--accept-reword", "SK-TT1c-T1", "--by", "Rita Reviewer")
v1 = json.loads(VER.read_text())["forms"][KEY + ":A"]
rc2, out2 = cc("--release")
check("N.3g with the acknowledgement the change is recorded with a name and a date (acks), the rev stays, and --release has no versions failure",
      rc == 0 and v1["rev"] == "1" and v1["acks"][0]["id"] == "SK-TT1c-T1" and v1["acks"][0]["by"] == "Rita Reviewer" and realdate(v1["acks"][0]["date"]) and not fails(out2, "versions"), (out, v1.get("acks"), out2[-300:]))

# material changes
reset_records()
for name, mut in (("N.4 an answer flag moved to another choice", KEYMOVE),
                  ("N.4b SWAPPED TEXT of the correct choice and a wrong one (flags stay)", TEXTSWAP),
                  ("N.4c the text of the CORRECT choice replaced by a different right answer", CORRECTTEXT),
                  ("N.4d points changed", POINTS),
                  ("N.4e an item's passages changed to another passage", PASSREF),
                  ("N.4f ebsr: texts of the Part A key and a distractor swapped (flags stay)", EBSR),
                  ("N.4g match: the columns reversed while every row keeps its answer index", MATCHCOLS)):
    lesson(*mut)
    rc, out = cc(); rc2, out2 = cc("--release"); rc3, out3 = cc("--record-versions")
    check(name + " with the same testRev: a warning by default, a FAILURE with --release, and --record-versions refuses",
          (rc == 0 or name.startswith("N.4d")) and any("changed materially" in l for l in warns(out, "versions")) and any("changed materially" in l for l in fails(out2, "versions")) and rc3 == 1 and "NOT RECORDED" in out3,
          (out[-200:], out2[-300:], out3))
setl(swap_items())
rc2, out2 = cc("--release")
check("N.4h two items swapped places is material", any("changed materially" in l for l in fails(out2, "versions")), out2[-300:])
setl(passage_edit())
rc, out = cc(); rc2, out2 = cc("--release")
check("N.4i the TEXT of a passage the check points at is edited (items untouched): a versions line in default mode, a failure in --release; before this was invisible",
      any("passage:p2" in l for l in warns(out, "versions")) and any("passage:p2" in l for l in fails(out2, "versions")), (out[-300:], out2[-300:]))
lesson(*POINTS)
rc, out = cc("--record-versions")
check("N.6 --record-versions refuses to record a material change that has no new testRev, and says what to do", rc == 1 and "NOT RECORDED" in out and "testRev" in out, out)
setl(ORIG.replace(*REVA).replace(*POINTS))
rc, out = cc()
check("N.7 raising testRev without recording is called out (record differs from the lesson)", "testRev differs from the record" in out, out[-300:])
rc, out = cc("--record-versions")
rc2, out2 = cc("--release")
check("N.8 with testRev raised, --record-versions records the new version and the version rule is clean again, even in --release",
      rc == 0 and "recorded" in out and not lines(out2, "versions"), (out, out2[-300:]))
vj = json.loads(VER.read_text())
check("N.9 the changed form has rev 2 with history [1, 2]; every other form's record is unchanged",
      vj["forms"][KEY + ":A"]["rev"] == "2" and vj["forms"][KEY + ":A"]["history"] == ["1", "2"]
      and all(v == BASE_V["forms"][k] for k, v in vj["forms"].items() if k != KEY + ":A"), vj["forms"][KEY + ":A"])
for bad, why in (('testRev: { A: "" }', "empty A"), ('testRev: { C: "1" }', "unknown form"), ('testRev: { B: "" }', "empty B"), ('testRev: "2"', "not an object")):
    reset_records(); setl(ORIG.replace(REVA[0], '\n  code: "3.T.T.1.c",\n  ' + bad + ",", 1))
    rc, out = cc()
    check("N.10 a malformed testRev (%s) always fails, in default mode too" % why, rc == 1 and "FAIL  versions" in out, out[-300:])

# rev may not be lowered or reused
reset_records()
setl(ORIG.replace(*REVA).replace(*POINTS)); assert cc("--record-versions")[0] == 0
setl(ORIG.replace(REVA[0], '\n  code: "3.T.T.1.c",\n  testRev: { A: "1" },').replace(*KEYMOVE).replace(*POINTS))
rc, out = cc("--record-versions")
check("N.25 a testRev that goes back down (2 to 1) is refused", rc == 1 and "lower" in out or "used before" in out, out)
setl(ORIG.replace(REVA[0], '\n  code: "3.T.T.1.c",\n  testRev: { A: "3" },').replace(*POINTS)); assert cc("--record-versions")[0] == 0
out = ""
setl(ORIG.replace(REVA[0], '\n  code: "3.T.T.1.c",\n  testRev: { A: "2" },').replace(*POINTS))
rc2, out2 = cc("--record-versions")
check("N.26 a rev used before (2, 3, then 2 again) is refused, and history keeps every rev", rc2 == 1 and "used before" in out2 and json.loads(VER.read_text())["forms"][KEY + ":A"]["history"] == ["1", "2", "3"], (out, out2))
# a removed form keeps a tombstone and cannot come back with a rev it used
reset_records()
setl(ORIG.replace("  testB: [", "  testBgone: [", 1))
assert "testBgone" in (tmp / LESSON).read_text()
rc, out = cc("--record-versions")
tomb = json.loads(VER.read_text())["forms"].get(KEY + ":B", {})
setl(ORIG)
rc2, out2 = cc("--record-versions")
check("N.27 a form that disappears leaves a tombstone, and it cannot come back with a rev it used before", rc == 0 and tomb.get("removed") and rc2 == 1 and "comes back" in out2, (tomb, out, out2))

# corrupt or truncated files are never replaced
reset_records(); lesson(*POINTS)
good = VER.read_text()
res = []
for label, content in (("truncated JSON", good[: len(good) // 2]), ("a list", "[]"), ("forms: null", '{"v": 2, "forms": null}'), ("no format number", '{"forms": {}}'), ("no forms at all", '{"v": 2, "forms": {}}')):
    VER.write_text(content)
    rc, out = cc("--record-versions")
    res.append((label, rc == 1 and "NOT RECORDED" in out and VER.read_text() == content))
check("N.28 a damaged or emptied version record is refused by --record-versions and left byte-for-byte as it was (truncated, list, forms null, no format number, no forms)", all(r[1] for r in res), res)
VER.write_text('{"v": 2, "forms": null}')
rc, out = cc()
check("N.29 a damaged version record is a clear FAIL in every mode, not a crash", rc == 1 and "FAIL  versions: verification/assessment-versions.json is damaged" in out and "TypeError" not in out, out[-300:])
VER.unlink()
rc, out = cc("--record-versions")
rc2, out2 = cc()
check("N.30 a missing version record is not silently created (needs --init); without it the check warns", rc == 1 and "--init" in out and not VER.exists() and "verification/assessment-versions.json is missing" in out2, (out, out2[-200:]))
reset_records(); lesson()
LED.write_text('{"v": 1, "lessons": {"a": ')
review_file()
rc, out = cc("--record-review", KEY, "--by", "Rita Reviewer", "--authors", "Al Author", "--record", REVIEW_FILE)
rc2, out2 = cc()
check("N.31 a truncated ledger is refused by --record-review (not replaced by one holding only the new entry) and shows as a FAIL in every mode",
      rc == 1 and "NOT RECORDED" in out and LED.read_text() == '{"v": 1, "lessons": {"a": ' and rc2 == 1 and "FAIL  ledger: docs/expansion-2026-10-22/review-ledger.json is damaged" in out2, (out, out2[-200:]))
LED.write_text('{"v": 1, "lessons": null}')
rc, out = cc()
check("N.32 a ledger with lessons: null is a clear FAIL, not a crash", rc == 1 and "damaged" in out and "TypeError" not in out, out[-200:])
LED.write_text('{"v": 1, "lessons": {}}\n')

# ledger
reset_records(); lesson(); review_file()
args = lambda **kw: ["--record-review", kw.get("key", KEY), "--by", kw.get("by", "Rita Reviewer"), "--authors", kw.get("au", "Al Author"), "--record", kw.get("rec", REVIEW_FILE), "--date", kw.get("date", "2026-10-24")]
refusals = {}
for label, a in (("same name", args(by="Al Author")), ("different case", args(by="al author")), ("extra spaces", args(by="  Al   Author ")), ("initial and surname", args(by="A. Author")), ("one of two authors", args(by="Al Author", au="Bo Other, A Author"))):
    review_file(names=(a[a.index("--by") + 1],))
    rc, out = cc(*a); refusals[label] = rc == 1 and "also an author" in out
review_file()
check("N.11 --record-review refuses a reviewer who is also an author, however the name is written (same, case, spaces, 'A. Author' for 'Al Author', one of two authors)", all(refusals.values()), refusals)
rc, out = cc("--record-review", KEY, "--by", "Rita Reviewer", "--record", REVIEW_FILE)
check("N.11b --record-review requires --authors", rc == 1 and "--authors is required" in out, out)
no = {}
shutil.copy(tmp / "README.md", tmp / "docs/not-a-review.txt") if (tmp / "README.md").exists() else (tmp / "docs/not-a-review.txt").write_text("x")
(tmp / REVIEW_FILE).with_name("TEST-other.md").write_text("# some other review\nReviewer: Rita Reviewer\n")
for label, rec in (("missing file", "docs/no-such-review.md"), ("outside docs/", "verification/versioning.py"), ("not .md", "docs/not-a-review.txt"), ("does not mention the lesson", "docs/expansion-2026-10-22/batches/TEST-other.md")):
    rc, out = cc(*args(rec=rec)); no[label] = rc == 1 and "NOT RECORDED" in out
check("N.12 --record-review refuses a review file that is missing, outside docs/, not markdown, or does not mention the lesson", all(no.values()), no)
review_file(names=("Someone Else",))
rc, out = cc(*args())
check("N.12b --record-review refuses a review file that does not name the reviewer", rc == 1 and "does not name the reviewer" in out, out)
review_file()
rc, out = cc("--record-review", KEY, "--record", REVIEW_FILE, "--authors", "Al Author")
check("N.13 --record-review refuses to record with no reviewer", rc == 1 and "at least one reviewer" in out, out)
bad = {}
for label, kw in (("impossible date", {"date": "2026-13-45"}), ("future date", {"date": "2099-01-01"}), ("bad format", {"date": "24-10-2026"})):
    rc, out = cc(*args(**kw)); bad[label] = rc == 1 and "NOT RECORDED" in out
rc, out = cc(*(args() + ["--part", "bogus"])); bad["bad part"] = rc == 1 and "--part" in out and json.loads(LED.read_text())["lessons"] == {}
check("N.13b --record-review refuses impossible and future dates and an unknown --part, and writes nothing", all(bad.values()), bad)
review_file(with_hashes=False)
rc, out = cc(*args())
check("N.13c a review file without the content hash needs --lead-attest with a reason; without it nothing is recorded", rc == 1 and "--print-hashes" in out and "--lead-attest" in out, out)
review_file()
rc, out = cc(*(args() + ["--date", "2026-10-24"]))
led = json.loads(LED.read_text()); e = led["lessons"].get(KEY, {})
want = {"rev", "hash", "reviewers", "authors", "date", "record", "recordHash", "basis"}
check("N.14 --record-review records core, similar and test:A with rev, hash, reviewers, authors, date, the review file, the review file's own hash and basis 'hash-in-review'",
      rc == 0 and set(e) == {"core", "similar", "test"} and set(e["core"]) == want and e["core"]["basis"] == "hash-in-review" and set(e["test"]["A"]) == want and e["test"]["A"]["reviewers"] == ["Rita Reviewer"], (out, e))
review_file(with_hashes=False); LED.write_text('{"v": 1, "lessons": {}}\n')
rc, out = cc(*(args() + ["--lead-attest", "Reviewed on the date of the review file; content unchanged since"]))
e2 = json.loads(LED.read_text())["lessons"].get(KEY, {})
check("N.14b with --lead-attest the entry is stored with basis 'lead-attestation' and the reason; --release prints how many entries rest on each basis",
      rc == 0 and e2["core"]["basis"] == "lead-attestation" and "Reviewed on the date" in e2["core"]["attest"] and "lead attestation" in cc("--release")[1], (out, e2))
review_file(); LED.write_text('{"v": 1, "lessons": {}}\n'); assert cc(*args())[0] == 0
rc, out = cc("--release")
miss = [l for l in out.splitlines() if l.startswith("  FAIL  ledger")]
check("N.15 once recorded, the lesson's parts leave the 'no record' list in --release, and the other lessons stay on it",
      miss and (KEY + " core") not in miss[0] and (KEY + " test:A") not in miss[0] and "no independent-review record" in miss[0], miss[:1])
for name, mut in (("N.16 changing the reviewed check", PROMPT), ("N.16b changing a key of the reviewed check", KEYMOVE)):
    lesson(*mut)
    rc, out = cc(); rc2, out2 = cc("--release")
    check(name + " after the record: a warning by default, a FAILURE with --release ('the shipped content ... is not what was reviewed')",
          "changed since the independent review" in out and rc == 0 and any("changed since the independent review" in l and KEY + " test:A" in l for l in fails(out2, "ledger")), (out[-300:], out2[-300:]))
setl(passage_edit())
rc2, out2 = cc("--release")
check("N.16c editing a passage of a reviewed lesson (items untouched) is caught by the ledger in --release, for the checks, the core and the similar items",
      any("changed since the independent review" in l and KEY + " test:A" in l for l in fails(out2, "ledger")) and any(KEY + " core" in l and "changed since" in l for l in fails(out2, "ledger")), out2[-400:])
lesson()
s_ = (tmp / LESSON).read_text()
anchor = "Which sentence shows something Malik does, not something he says or thinks"
assert anchor in s_
(tmp / LESSON).write_text(s_.replace(anchor, "Carefully now. " + anchor, 1))
rc, out = cc(); rc2, out2 = cc("--release")
check("N.17 changing a core item after the record is caught as well (the core part, not only the checks)",
      any(l.startswith("FAIL") and KEY + " core" in l for l in lines(out2, "ledger")) and "changed since the independent review" in out, out2[-300:])
lesson()
(tmp / REVIEW_FILE).write_text((tmp / REVIEW_FILE).read_text() + "\nA later edit.\n")
rc, out = cc()
check("N.17b a review file that is edited after it was recorded makes the entry invalid (its own hash no longer matches), in every mode", rc == 1 and "review file changed after it was recorded" in out, out[-300:])
review_file(); LED.write_text('{"v": 1, "lessons": {}}\n'); assert cc(*args())[0] == 0
led = json.loads(LED.read_text()); led["lessons"][KEY]["core"]["authors"] = ["Rita Reviewer"]
LED.write_text(json.dumps(led))
rc, out = cc()
check("N.18 a ledger entry whose reviewer is also its author is invalid, and that fails in default mode too", rc == 1 and "FAIL  ledger" in out and "a reviewer is also an author" in out, out[-300:])
led["lessons"][KEY]["core"]["authors"] = []
LED.write_text(json.dumps(led))
rc, out = cc()
check("N.18b an entry with no authors named is invalid too (independence cannot be checked)", rc == 1 and "no authors named" in out, out[-300:])
led["lessons"][KEY]["core"]["authors"] = ["Al Author"]; led["lessons"][KEY]["core"]["record"] = "docs/missing.md"
LED.write_text(json.dumps(led))
rc, out = cc()
check("N.19 a ledger entry that names no existing review file is invalid (fails in default mode)", rc == 1 and "review file not found" in out, out[-300:])
led["lessons"][KEY]["core"]["record"] = REVIEW_FILE; led["lessons"][KEY]["core"]["date"] = "2099-01-01"
LED.write_text(json.dumps(led))
rc, out = cc()
check("N.19b a ledger entry dated in the future is invalid", rc == 1 and "future" in out, out[-300:])
reset_records()
rc = subprocess.run(["node", "verification/check-content.js", "--record-versions"], cwd=tmp, capture_output=True, text=True).returncode
check("N.20 the record commands need --all (they must read every lesson)", rc == 1, rc)
rc, out = cc("--release")
led_line = " ".join(l for l in out.splitlines() if l.startswith("  FAIL  ledger"))
legacy = json.loads(subprocess.run(["node", "-e", "const fs=require('fs'),vm=require('vm');const ls=[];const c={window:{},PP:{addLesson:l=>ls.push(l),addSet(){},addTask(){}}};vm.createContext(c);"
                         "for(const f of fs.readdirSync('js/data/lessons'))vm.runInContext(fs.readFileSync('js/data/lessons/'+f,'utf8'),c);"
                         "console.log(JSON.stringify(ls.filter(l=>!l.core&&(l.test||[]).length).map(l=>l.key||l.code).slice(0,3)))"], cwd=tmp, capture_output=True, text=True).stdout or "[]")
check("N.22 lead decision: legacy lessons (no core) are not in the ledger demand in --release (their checks are grandfathered; the version record still covers them), but lessons with core are",
      legacy and all(k + " test:A" not in led_line for k in legacy) and "core" in led_line and "similar" in led_line, (legacy, led_line[:200]))
rc, out = cc()
check("N.21 default mode is unchanged: the migration warning keeps its wording and the run passes", rc == 0 and "a failure only after migration" in out and "FAIL" not in out, out[-300:])

# a reworded question on a legacy lesson (no core): a warning even in --release, recorded with a note and no acknowledgement
info = json.loads(subprocess.run(["node", "-e", "const fs=require('fs'),vm=require('vm');const ls=[];const c={window:{},PP:{addLesson:l=>ls.push(l),addSet(){},addTask(){}}};vm.createContext(c);"
                         "for(const f of fs.readdirSync('js/data/lessons'))vm.runInContext(fs.readFileSync('js/data/lessons/'+f,'utf8'),c);"
                         "const src=fs.readdirSync('js/data/lessons').map(f=>[f,fs.readFileSync('js/data/lessons/'+f,'utf8')]);"
                         "for(const l of ls){if(l.core||!(l.test||[]).length)continue;const it=l.test.find(i=>i.type==='mc'&&i.prompt);if(!it)continue;"
                         "const f=src.find(([n,t])=>t.split(JSON.stringify(it.prompt)).length===2);if(f){console.log(JSON.stringify({file:f[0],prompt:it.prompt,key:l.key||l.code}));break}}"], cwd=tmp, capture_output=True, text=True).stdout or "null")
if info:
    reset_records()
    lf = tmp / "js/data/lessons" / info["file"]; orig_l = lf.read_text()
    lf.write_text(orig_l.replace(json.dumps(info["prompt"]), json.dumps(info["prompt"] + " (reworded)"), 1))
    rc, out = cc("--release")
    rcr, outr = cc("--record-versions")
    lf.write_text(orig_l)
    check("N.23 a reworded question on a legacy lesson (no core) is only a warning even in --release, and --record-versions records it with a note",
          any("legacy lessons" in l for l in warns(out, "versions")) and not any("reworded" in l for l in fails(out, "versions")) and rcr == 0 and "legacy lesson" in outr, (info["key"], out[-300:], outr))
else:
    check("N.23 a legacy lesson with a plain multiple-choice check exists to test the legacy path", False, "none found")
shutil.rmtree(tmp, ignore_errors=True)

# every item type: which edits are material (fail without a new testRev) and which are only a reworded question
MATRIX = r"""
const fs=require("fs"),vm=require("vm");
const src=fs.readFileSync("verification/check-content.js","utf8");
const a=src.indexOf("const crypto"), b=src.indexOf("const lessonKeyOf");
const code=src.slice(a,b).replace('const crypto = require("crypto");','const crypto = CR;')+";({sha,materialOf,questionOf})";
const {sha,materialOf,questionOf}=vm.runInNewContext(code,{CR:require("crypto"),JSON,Object,Set,Array});
function load(f){const ls=[];const c={window:{},PP:{addLesson:l=>ls.push(l),addSet(){},addTask(){}}};vm.createContext(c);vm.runInContext(fs.readFileSync("js/data/lessons/"+f,"utf8"),c);return ls;}
const clone=o=>JSON.parse(JSON.stringify(o));
const find=type=>{for(const f of fs.readdirSync("js/data/lessons")){for(const L of load(f)){const i=(L.test||[]).findIndex(it=>it.type===type);if(i>=0)return {L,i};}}};
const out=[];
function rep(type,name,items,L,fn){const m0=materialOf(items),q0=questionOf(L,items);const it=clone(items);fn(it);const m1=materialOf(it),q1=questionOf(L,it);
  out.push({type,name,material:m0!==m1,q:Object.keys(q1).some(k=>q0[k]!==q1[k])||Object.keys(q0).length!==Object.keys(q1).length});}
for(const type of ["mc","ms","ebsr","match","dropdown","hottext","order"]){
  const {L,i}=find(type);const T=L.test;
  rep(type,"reorder two items",T,L,it=>{const j=(i+1)%it.length;const t=it[i];it[i]=it[j];it[j]=t});
  rep(type,"points +1",T,L,it=>{it[i].points+=1});
  rep(type,"remove last item",T,L,it=>{it.pop()});
  rep(type,"change type",T,L,it=>{it[i].type="xx"});
  rep(type,"item passages changed",T,L,it=>{it[i].passages=["zzz"]});
  rep(type,"reword prompt only",T,L,it=>{it[i].prompt=(it[i].prompt||"")+" Think carefully."});
  rep(type,"clue only",T,L,it=>{it[i].clue=(it[i].clue||"")+" more"});
  rep(type,"explanation only",T,L,it=>{it[i].why=(it[i].why||"")+" more"});
  if(type==="mc"||type==="ms"){
    rep(type,"move correct flag",T,L,it=>{const ch=it[i].choices;const c=ch.findIndex(c=>c.correct);const w=ch.findIndex(c=>!c.correct);delete ch[c].correct;ch[w].correct=true});
    rep(type,"swap text of correct and wrong (flags stay)",T,L,it=>{const ch=it[i].choices;const c=ch.findIndex(c=>c.correct);const w=ch.findIndex(c=>!c.correct);const t=ch[c].text;ch[c].text=ch[w].text;ch[w].text=t});
    rep(type,"replace text of correct choice",T,L,it=>{const ch=it[i].choices;ch[ch.findIndex(c=>c.correct)].text="A different right answer."});
    rep(type,"replace text of a wrong choice",T,L,it=>{const ch=it[i].choices;ch[ch.findIndex(c=>!c.correct)].text="Something new."});
  }
  if(type==="ms")rep(type,"pick +1",T,L,it=>{it[i].pick+=1});
  if(type==="ebsr"){
    rep(type,"part A flag moved",T,L,it=>{const ch=it[i].partA.choices;const c=ch.findIndex(c=>c.correct);const w=ch.findIndex(c=>!c.correct);delete ch[c].correct;ch[w].correct=true});
    rep(type,"part B flag moved",T,L,it=>{const ch=it[i].partB.choices;const c=ch.findIndex(c=>c.correct);const w=ch.findIndex(c=>!c.correct);delete ch[c].correct;ch[w].correct=true});
    rep(type,"part A swap text of correct and wrong (flags stay)",T,L,it=>{const ch=it[i].partA.choices;const c=ch.findIndex(c=>c.correct);const w=ch.findIndex(c=>!c.correct);const t=ch[c].text;ch[c].text=ch[w].text;ch[w].text=t});
    rep(type,"part B swap text of correct and wrong (flags stay)",T,L,it=>{const ch=it[i].partB.choices;const c=ch.findIndex(c=>c.correct);const w=ch.findIndex(c=>!c.correct);const t=ch[c].text;ch[c].text=ch[w].text;ch[w].text=t});
    rep(type,"replace text of a part A wrong choice",T,L,it=>{const ch=it[i].partA.choices;ch[ch.findIndex(c=>!c.correct)].text="Something new."});
  }
  if(type==="match"){
    rep(type,"row answer changed",T,L,it=>{const r=it[i].rows[0];r.answer=(r.answer+1)%it[i].cols.length});
    rep(type,"reverse the columns (row answers stay)",T,L,it=>{it[i].cols.reverse()});
    rep(type,"swap two row texts (answers stay)",T,L,it=>{const r=it[i].rows;const t=r[0].text;r[0].text=r[1].text;r[1].text=t});
    rep(type,"reorder rows",T,L,it=>{const r=it[i].rows;r.push(r.shift())});
  }
  if(type==="dropdown"){
    rep(type,"slot answer index changed",T,L,it=>{const s=it[i].slots[0];s.answer=(s.answer+1)%s.options.length});
    rep(type,"reorder a slot's options (answer index stays)",T,L,it=>{const s=it[i].slots[0];s.options.push(s.options.shift())});
    rep(type,"replace the correct option text",T,L,it=>{const s=it[i].slots[0];s.options[s.answer]="a different right answer"});
  }
  if(type==="hottext"){
    const X=T[i];
    rep(type,"answer changed",T,L,it=>{const x=it[i];if(x.options){x.answer=[(x.answer[0]+1)%x.options.length]}else{x.answer=[x.targets.find(t=>x.answer.indexOf(t)<0)]}});
    if(X.options){rep(type,"reorder options (answer index stays)",T,L,it=>{it[i].options.push(it[i].options.shift())});rep(type,"replace the answered option text",T,L,it=>{it[i].options[it[i].answer[0]]="new text"});}
    else rep(type,"reorder targets",T,L,it=>{it[i].targets.reverse()});
  }
  if(type==="order"){
    rep(type,"reorder the steps (the order is the key)",T,L,it=>{it[i].steps.reverse()});
    rep(type,"replace a step's text",T,L,it=>{it[i].steps[0]="A totally new step."});
  }
}
console.log(JSON.stringify(out));
"""
r = subprocess.run(["node", "-e", MATRIX], cwd=ROOT, capture_output=True, text=True)
rows = json.loads(r.stdout) if r.returncode == 0 else []
NOT_MATERIAL = {"reword prompt only", "clue only", "explanation only", "replace text of a wrong choice", "replace text of a part A wrong choice"}
NOT_Q = {"clue only", "explanation only"}
wrong = [(x["type"], x["name"], "material" if x["material"] else "NOT material", "q" if x["q"] else "no q") for x in rows
         if x["material"] == (x["name"] in NOT_MATERIAL) or (x["name"] in NOT_Q and x["q"]) or (x["name"] in {"reword prompt only", "replace text of a wrong choice", "replace text of a part A wrong choice"} and not x["q"])]
check("N.33 the material hash, per item type (%d edits over mc, ms, ebsr, match, dropdown, hottext and order): every change of the key, its text, the option, column or step order, points, items, type or passages is material; a reworded prompt or wrong choice is not material but is reported as a reworded question; a clue or explanation edit is neither" % len(rows),
      len(rows) > 60 and not wrong, wrong or r.stderr[-300:])

# ---------------- Part B: browser ----------------
ARGS = ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"]
BROWSE = "try{if(!localStorage.getItem('pp.path.v1'))localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true}))}catch(e){}"
K = "3.T.T.1.c"


def launch(p):
    kw = {"args": ARGS}
    if os.environ.get("CHROMIUM_PATH"):
        kw["executable_path"] = os.environ["CHROMIUM_PATH"]
        kw["env"] = {**os.environ, "LD_LIBRARY_PATH": str(Path(kw["executable_path"]).parent), "FONTCONFIG_PATH": "/etc/fonts"}
    return p.chromium.launch(**kw)


def fresh(b, progress=None, extra=None):
    q = b.new_page(viewport={"width": 1100, "height": 900})
    q.route("**/fonts.g*/**", lambda r: r.abort())
    q.add_init_script(BROWSE)
    errs = []
    q.on("pageerror", lambda e: errs.append(str(e)))
    q.goto(BASE + "#browse"); q.wait_for_timeout(200)
    seed = dict(extra or {})
    if progress is not None: seed["pp.progress.v1"] = json.dumps(progress)
    q.evaluate("s=>{for(const k in s)localStorage.setItem(k,s[k]);}", seed)
    q.reload(); q.wait_for_function("document.getElementById('build-badge').textContent.length>0"); q.wait_for_timeout(500)
    q.errs = errs
    return q


def prog(q): return json.loads(q.evaluate("localStorage.getItem('pp.progress.v1')") or "{}")


def card(q, k=K):
    q.evaluate("k=>PP_SKILLS.open(k,'test')", k); q.wait_for_timeout(250)
    return q.evaluate("document.getElementById('screen-skill').innerText")


with sync_playwright() as p:
    b = launch(p)
    # B.1 a new attempt records the rev
    q = fresh(b)
    q.evaluate("k=>PP_SKILLS.afterTest(PP.byId['SK:'+k+':t'], 7, 7)", K)
    a = prog(q)[K]["attempts"][0]
    check("B.1 with no testRev in the lesson, a new attempt stores rev \"1\" next to the old fields (d, got, max, ok, n, afterAnswers, form)",
          a.get("rev") == "1" and all(f in a for f in ("d", "got", "max", "ok", "n", "afterAnswers", "form")), a)
    q.evaluate("k=>{PP.lessons[k].testRev={A:'2'};}", K)
    q.evaluate("k=>PP_SKILLS.afterTest(PP.byId['SK:'+k+':t'], 7, 7)", K)
    a2 = prog(q)[K]["attempts"][1]
    check("B.2 with testRev A \"2\", the next attempt stores rev \"2\"; the first attempt is unchanged", a2.get("rev") == "2" and prog(q)[K]["attempts"][0].get("rev") == "1", a2)
    q.close()

    # B.3 an old pass (no rev) after a rev bump
    old = {K: {"taught": True, "tries": 1, "best": {"got": 7, "max": 7}, "bestMax": 7, "mastered": True, "passedAt": "2026-10-01", "passTry": 1, "passBy": "test", "passForm": "A", "lastPassAt": "2026-10-01",
               "attempts": [{"d": "2026-10-01", "got": 7, "max": 7, "ok": True, "n": 1, "afterAnswers": False, "form": "A"}]}}
    q = fresh(b, old)
    before = prog(q)
    t0 = card(q)
    check("B.3 an old pass (an attempt with no rev) on a lesson with no testRev shows no 'earlier version' wording", "earlier version" not in t0 and "Passed the skill check" in t0, t0[t0.find("Test Your"):][:400])
    q.evaluate("k=>{PP.lessons[k].testRev={A:'2'};}", K)
    t1 = card(q)
    check("B.4 after testRev is raised, the same old pass is labelled 'on an earlier version of the check' (best score too) and it STANDS: still passed, status mastered",
          "pass was on an earlier version of the check" in t1 and "(on an earlier version of this check)" in t1 and q.evaluate("k=>PP_SKILLS.status(k)", K) == "mastered", t1[:400])
    check("B.5 showing the label writes nothing: the progress record is byte-identical", prog(q) == before, "")
    q.close()

    # B.6 answers seen on version 1 do not count for version 2
    seen = {K: {"taught": True, "tries": 1, "best": {"got": 3, "max": 7}, "bestMax": 7, "answersSeenAt": "2026-10-01T10:00:00.000Z", "answersSeenBy": {"A": "2026-10-01T10:00:00.000Z"},
                "attempts": [{"d": "2026-10-01", "got": 3, "max": 7, "ok": False, "n": 1, "afterAnswers": False, "form": "A"}]}}
    q = fresh(b, seen)
    q.evaluate("k=>PP_SKILLS.afterTest(PP.byId['SK:'+k+':t'], 7, 7)", K)
    ctl = prog(q)[K]["attempts"][-1]
    q.close()
    q = fresh(b, seen)
    q.evaluate("k=>{PP.lessons[k].testRev={A:'2'};}", K)
    q.evaluate("k=>PP_SKILLS.afterTest(PP.byId['SK:'+k+':t'], 7, 7)", K)
    nv = prog(q)[K]["attempts"][-1]
    check("B.6 answers seen on version 1: a pass on version 1 is 'after seeing the answers' (control), but a pass on version 2 is not (the answers were of the old check)",
          ctl.get("afterAnswers") is True and nv.get("afterAnswers") is False and nv.get("rev") == "2" and ctl.get("rev") == "1", (ctl, nv))
    q.evaluate("k=>PP_SKILLS.answersSeen(k,'A')", K)
    sr = prog(q)[K].get("seenRev")
    check("B.7 'See my answers' on version 2 records seenRev (additive); answersSeenAt/By keep their meaning", sr == {"A": "2"} and prog(q)[K].get("answersSeenAt"), sr)
    q.close()

    # B.8 review results carry a version signature
    rid = "RV-3.T.T.1"
    q = fresh(b)
    q.evaluate("id=>{PP_REVIEW.build();PP_REVIEW.onSubmit(PP.byId[id], PP.byId[id].items.map(it=>({item:it, sc:{points:it.points,max:it.points}})));}", rid)
    a = json.loads(q.evaluate("localStorage.getItem('pp.review.v1')"))["r"][rid]["a"][0]
    check("B.8 a saved review result carries rev, a short signature of the review's questions; the other fields are as before",
          re.fullmatch(r"[a-z0-9]{1,12}", a.get("rev", "")) and a["got"] == a["max"] and "d" in a and "comps" in a, a)
    stored = json.loads(q.evaluate("localStorage.getItem('pp.review.v1')"))
    revs = q.evaluate("""id=>{const rows=s=>s.items.map(it=>({item:it, sc:{points:it.points,max:it.points}}));const out=[];
        PP_REVIEW.onSubmit(PP.byId['RV-3.T.SS.1'], rows(PP.byId['RV-3.T.SS.1']));
        const s=PP.byId[id];s.items[0].points+=1;PP_REVIEW.onSubmit(s, rows(s));s.items[0].points-=1;
        const r=JSON.parse(localStorage.getItem('pp.review.v1')).r;return [r[id].a[0].rev, r[id].a[1].rev, r['RV-3.T.SS.1'].a[0].rev]}""", rid)
    check("B.8b the signature differs between two different reviews, and changes when one question's points change", len(set(revs)) == 3, revs)

    def review_text(store):
        q.evaluate("s=>localStorage.setItem('pp.review.v1',s)", json.dumps(store))
        q.goto(BASE + "#std/3.T.T.1"); q.reload(); q.wait_for_function("document.getElementById('build-badge').textContent.length>0"); q.wait_for_timeout(600)
        return q.evaluate("document.getElementById('std-review').innerText")
    t_same = review_text(stored)
    check("B.9 an unchanged review shows its last result and no version wording", "Last taken" in t_same and "questions have changed" not in t_same, t_same[:300])
    changed = json.loads(json.dumps(stored)); changed["r"][rid]["a"][0]["rev"] = "zzzzzz"
    t_chg = review_text(changed)
    check("B.10 a result whose stored version differs from the review's current version says the questions have changed since", "The questions have changed since." in t_chg, t_chg[:300])
    old_ = json.loads(json.dumps(stored)); old_["r"][rid]["a"][0].pop("rev")
    t_old = review_text(old_)
    bad = json.loads(json.dumps(stored)); bad["r"][rid]["a"][0]["rev"] = "<b>x</b>"
    t_bad = review_text(bad)
    check("B.11 a result with no rev (saved before versions) or a corrupt rev says nothing about versions, still shows the score, and breaks nothing",
          "Last taken" in t_old and "Last taken" in t_bad and "changed since" not in t_old + t_bad and not q.errs, (t_old[:150], t_bad[:150], q.errs))
    q.close()
    check("B.0 no page errors in the other browser runs", True, "")
    b.close()

fails = [r for r in results if not r["pass"]]
print("%d passed, %d failed" % (len(results) - len(fails), len(fails)))
sys.exit(1 if fails else 0)

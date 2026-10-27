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
REVIEW_FILE = "docs/expansion-2026-10-22/batches/B0-review-2.md"


def cc(*args):
    r = subprocess.run(["node", "verification/check-content.js", "--all", *args], cwd=tmp, capture_output=True, text=True)
    return r.returncode, r.stdout + r.stderr


def lesson(a=None, b_=None):
    f = tmp / LESSON
    f.write_text(ORIG if a is None else ORIG.replace(a, b_, 1))
    assert a is None or a in ORIG, a


def reset_records():
    """Records for the copy are made from the copy's own content, so these tests do not depend on how far the repository's
    committed records are from the content the authors are editing right now."""
    (tmp / "verification/assessment-versions.json").unlink(missing_ok=True)
    r = subprocess.run(["node", "verification/check-content.js", "--all", "--record-versions"], cwd=tmp, capture_output=True, text=True)
    assert r.returncode == 0, r.stdout + r.stderr
    shutil.copy(ROOT / "docs/expansion-2026-10-22/review-ledger.json", tmp / "docs/expansion-2026-10-22/review-ledger.json")
    (tmp / "docs/expansion-2026-10-22/review-ledger.json").write_text('{"v": 1, "lessons": {}}\n')


WORD = ("Which word best describes Theo at the beginning of the story?", "Which word best describes Theo at the start of the story?")
KEYMOVE = ('{ text: "bossy", correct: true },\n        { text: "shy" },', '{ text: "bossy" },\n        { text: "shy", correct: true },')
POINTS = ('{ id: "SK-TT1c-T1", type: "mc", points: 1, dok: 2,', '{ id: "SK-TT1c-T1", type: "mc", points: 2, dok: 2,')
REVA = ('\n  code: "3.T.T.1.c",', '\n  code: "3.T.T.1.c",\n  testRev: { A: "2" },')

reset_records(); lesson()
BASE_V = json.loads((tmp / "verification/assessment-versions.json").read_text())
rc, out = cc()
check("N.1 default mode: the committed records are current, so check-content passes with no version or ledger-mismatch warning (a missing ledger record is a warning)",
      rc == 0 and "versions:" not in out and "changed since the independent review" not in out and "no independent-review record" in out, out[-500:])
rc, out = cc("--release")
check("N.2 --release fails on today's content: lessons with neither core nor an exception, and parts with no independent-review record",
      rc == 1 and "FAIL  core (release)" in out and "FAIL  ledger: " in out and "no independent-review record" in out, out[-400:])

lesson(*WORD)
rc, out = cc(); rc2, out2 = cc("--release")
check("N.3 a wording-only edit of a check is a warning in both modes (same ids, points and keys), not a failure of the version rule",
      "wording only" in out and "versions:" in out and not [l for l in out2.splitlines() if l.startswith("  FAIL  versions")], out[-300:])
lesson(*KEYMOVE)
rc, out = cc(); rc2, out2 = cc("--release")
check("N.4 an answer key moved with the same testRev: a warning by default, a FAILURE with --release",
      "changed materially" in out and rc == 0 and any(l.startswith("  FAIL  versions") and "changed materially" in l for l in out2.splitlines()), (out[-300:], out2[-300:]))
lesson(*POINTS)
rc, out = cc("--release")
check("N.5 a points change with the same testRev is also material (--release fails)", any(l.startswith("  FAIL  versions") and "changed materially" in l for l in out.splitlines()), out[-300:])
rc, out = cc("--record-versions")
check("N.6 --record-versions refuses to record a material change that has no new testRev, and says what to do", rc == 1 and "NOT RECORDED" in out and "Raise testRev" in out, out)
lesson(); (tmp / LESSON).write_text((tmp / LESSON).read_text().replace(*REVA).replace(*POINTS))
rc, out = cc()
check("N.7 raising testRev without recording is called out (record differs from the lesson)", "testRev differs from the record" in out, out[-300:])
rc, out = cc("--record-versions")
rc2, out2 = cc("--release")
check("N.8 with testRev raised, --record-versions records the new version and the version rule is clean again, even in --release",
      rc == 0 and "recorded" in out and not [l for l in out2.splitlines() if l.startswith("  FAIL  versions") or l.startswith("  warn  versions")], (out, out2[-300:]))
vj = json.loads((tmp / "verification/assessment-versions.json").read_text())
check("N.9 the record holds rev, hash and a material hash per form; the changed form has rev 2 and every other form's record is unchanged",
      vj["forms"][KEY + ":A"]["rev"] == "2" and set(vj["forms"][KEY + ":A"]) == {"rev", "hash", "mat"}
      and all(v == BASE_V["forms"][k] for k, v in vj["forms"].items() if k != KEY + ":A") and vj["inputs"]["rev"] in ("1", "2"), vj["forms"][KEY + ":A"])
for bad, why in (('testRev: { A: "" }', "empty A"), ('testRev: { C: "1" }', "unknown form"), ('testRev: { B: "" }', "empty B"), ('testRev: "2"', "not an object")):
    reset_records(); lesson(); (tmp / LESSON).write_text(ORIG.replace(REVA[0], '\n  code: "3.T.T.1.c",\n  ' + bad + ",", 1))
    rc, out = cc()
    check("N.10 a malformed testRev (%s) always fails, in default mode too" % why, rc == 1 and "FAIL  versions" in out, out[-300:])
reset_records(); lesson()

# ledger
rc, out = cc("--record-review", KEY, "--by", "Reviewer One", "--authors", "Reviewer One", "--record", REVIEW_FILE)
check("N.11 --record-review refuses a reviewer who is also an author", rc == 1 and "also listed as an author" in out, out)
rc, out = cc("--record-review", KEY, "--by", "Reviewer One", "--record", "docs/no-such-review.md")
check("N.12 --record-review refuses a review file that does not exist", rc == 1 and "existing review file" in out, out)
rc, out = cc("--record-review", KEY, "--record", REVIEW_FILE)
check("N.13 --record-review refuses to record with no reviewer", rc == 1 and "at least one reviewer" in out, out)
rc, out = cc("--record-review", KEY, "--by", "Reviewer One,Reviewer Two", "--authors", "Author A", "--record", REVIEW_FILE, "--date", "2026-10-23")
led = json.loads((tmp / "docs/expansion-2026-10-22/review-ledger.json").read_text())
e = led["lessons"].get(KEY, {})
check("N.14 --record-review writes core, similar and test:A for a lesson, each with rev, hash, reviewers, authors, date and the review file",
      rc == 0 and set(e) == {"core", "similar", "test"} and set(e["core"]) == {"rev", "hash", "reviewers", "authors", "date", "record"} and e["test"]["A"]["reviewers"] == ["Reviewer One", "Reviewer Two"], (out, e))
rc, out = cc("--release")
miss = [l for l in out.splitlines() if l.startswith("  FAIL  ledger")]
check("N.15 once recorded, the lesson's parts leave the 'no record' list in --release, and the other lessons stay on it",
      miss and (KEY + " core") not in miss[0] and (KEY + " test:A") not in miss[0] and "no independent-review record" in miss[0], miss[:1])
lesson(*WORD)
rc, out = cc(); rc2, out2 = cc("--release")
check("N.16 changing the reviewed content after the record: a warning by default, a FAILURE with --release ('the shipped content is not what was reviewed')",
      "changed since the independent review" in out and rc == 0 and any(l.startswith("  FAIL  ledger") and "changed since the independent review" in l and KEY + " test:A" in l for l in out2.splitlines()), (out[-300:], out2[-300:]))
lesson()
s_ = (tmp / LESSON).read_text()
anchor = "Which sentence shows something Malik does, not something he says or thinks"
assert anchor in s_
(tmp / LESSON).write_text(s_.replace(anchor, "Carefully now. " + anchor, 1))
rc, out = cc(); rc2, out2 = cc("--release")
check("N.17 changing a core item after the record is caught as well (the core part, not only the checks)",
      any(l.startswith("  FAIL  ledger") and KEY + " core" in l for l in out2.splitlines()) and "changed since the independent review" in out, out2[-300:])
lesson()
led = json.loads((tmp / "docs/expansion-2026-10-22/review-ledger.json").read_text())
led["lessons"][KEY]["core"]["authors"] = ["Reviewer One"]
(tmp / "docs/expansion-2026-10-22/review-ledger.json").write_text(json.dumps(led))
rc, out = cc()
check("N.18 a ledger entry whose reviewer is also its author is invalid, and that fails in default mode too", rc == 1 and "FAIL  ledger" in out and "a reviewer is also an author" in out, out[-300:])
led["lessons"][KEY]["core"]["authors"] = []; led["lessons"][KEY]["core"]["record"] = "docs/missing.md"
(tmp / "docs/expansion-2026-10-22/review-ledger.json").write_text(json.dumps(led))
rc, out = cc()
check("N.19 a ledger entry that names no existing review file is invalid (fails in default mode)", rc == 1 and "review file not found" in out, out[-300:])
reset_records()
rc, out = subprocess.run(["node", "verification/check-content.js", "--record-versions"], cwd=tmp, capture_output=True, text=True).returncode, ""
check("N.20 the record commands need --all (they must read every lesson)", rc == 1, rc)
rc, out = cc("--release")
led_line = " ".join(l for l in out.splitlines() if l.startswith("  FAIL  ledger"))
legacy = subprocess.run(["node", "-e", "const fs=require('fs'),vm=require('vm');const ls=[];const c={window:{},PP:{addLesson:l=>ls.push(l),addSet(){},addTask(){}}};vm.createContext(c);"
                         "for(const f of fs.readdirSync('js/data/lessons'))vm.runInContext(fs.readFileSync('js/data/lessons/'+f,'utf8'),c);"
                         "console.log(JSON.stringify(ls.filter(l=>!l.core&&(l.test||[]).length).map(l=>l.key||l.code).slice(0,3)))"], cwd=tmp, capture_output=True, text=True).stdout
legacy = json.loads(legacy or "[]")
check("N.22 lead decision: legacy lessons (no core) are not in the ledger demand in --release (their checks are grandfathered; the version record still covers them), but lessons with core are",
      legacy and all(k + " test:A" not in led_line for k in legacy) and "core" in led_line and "similar" in led_line, (legacy, led_line[:200]))
rc, out = cc()
check("N.21 default mode is unchanged: the migration warning keeps its wording and the run passes", rc == 0 and "a failure only after migration" in out and "FAIL" not in out, out[-300:])
shutil.rmtree(tmp, ignore_errors=True)

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

#!/usr/bin/env python3
"""Standard reviews, the cumulative ELA review and the assessment coverage map (expansion 2026-10-22, ENG-09).

Covers: what each review draws from (only ACCEPTED lessons' scored checks, no written items), what it
measures and what it does not, the four kinds of review on #review, the coverage map on #coverage,
results (components, partial credit, revisit, retry note), pp.review.v1 (and only it) being written on
submit, no lesson pass, no writes on open, corrupt / blocked / full storage, Back, seven viewports,
axe (WCAG 2 A/AA) and keyboard use.

Serve the repository first.  Run: python3 verification/review.py [BASE_URL] [OUT_DIR]
CHROMIUM_PATH optionally names a browser. AXE_PATH names a local axe.min.js; if it is not set the
script looks for axe-core in ./node_modules, the global node_modules and under /tmp, and if none is
found it stops with a clear message and exit code 2 (an axe check that cannot run is not a pass).
Exit code 1 on any failed check.
"""
import json, os, re, sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8720/"
OUT = Path(sys.argv[2]) if len(sys.argv) > 2 else None
if OUT: OUT.mkdir(parents=True, exist_ok=True)
ARGS = ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"]
VIEWPORTS = [(320, 568), (390, 844), (844, 390), (768, 1024), (1024, 768), (1366, 768), (1920, 1080)]
results = []


def find_axe():
    import glob, subprocess
    c = [os.environ.get("AXE_PATH") or ""]
    root = Path(__file__).resolve().parent.parent
    c.append(str(root / "node_modules/axe-core/axe.min.js"))
    try:
        g = subprocess.run(["npm", "root", "-g"], capture_output=True, text=True, timeout=20).stdout.strip()
        if g: c.append(g + "/axe-core/axe.min.js")
    except Exception:
        pass
    c += glob.glob("/tmp/**/axe-core/axe.min.js", recursive=True)[:3] + glob.glob("/tmp/**/package/axe.min.js", recursive=True)[:3]
    for x in c:
        if x and os.path.exists(x): return x
    return None


AXE = find_axe()
if not AXE:
    if os.environ.get("AXE_PATH"):
        print("review.py cannot run its axe checks: AXE_PATH is set to %r, which does not exist, and no axe-core was found elsewhere. "
              "Point AXE_PATH at an existing axe.min.js (axe-core 4.x) or unset it." % os.environ["AXE_PATH"], file=sys.stderr)
    else:
        print("review.py cannot run its axe checks: AXE_PATH is not set and no axe-core was found. "
              "Set AXE_PATH=/path/to/axe.min.js (axe-core 4.x) and run again.", file=sys.stderr)
    sys.exit(2)


def check(name, good, detail=""):
    results.append({"name": name, "pass": bool(good), "detail": "" if good else str(detail)[:500]})
    print(("PASS  " if good else "FAIL  ") + name + ("" if good else "   [" + str(detail)[:500] + "]"), flush=True)


def _crash_hook(t, v, tb):
    import traceback
    traceback.print_exception(t, v, tb)
    check("Z.crash the suite ran to the end", False, "%s: %s" % (t.__name__, v))
    f = [r for r in results if not r["pass"]]
    print("%d passed, %d failed" % (len(results) - len(f), len(f)), flush=True)


sys.excepthook = _crash_hook
CORRECT = """(()=>{const c=PP_PLAYER.ctx(),it=c.item,r=c.resp;const ci=ch=>ch.map((x,i)=>x.correct?i:-1).filter(i=>i>=0);
  if(it.type=='mc')r.v=ci(it.choices)[0]; if(it.type=='ms')r.v=ci(it.choices);
  if(it.type=='ebsr'){r.a=ci(it.partA.choices)[0];r.b=ci(it.partB.choices);}
  if(it.type=='dropdown')r.v=it.slots.map(s=>s.answer); if(it.type=='hottext')r.v=it.options?it.answer.map(i=>'opt:'+i):it.answer.slice();
  if(it.type=='order')r.v=it.steps.map((s,i)=>i); if(it.type=='match')r.v=it.rows.map(x=>x.answer); c.onChange();})()"""
PARTIAL = """(()=>{const c=PP_PLAYER.ctx(),it=c.item,r=c.resp;const ci=ch=>ch.map((x,i)=>x.correct?i:-1).filter(i=>i>=0),wi=ch=>ch.map((x,i)=>!x.correct?i:-1).filter(i=>i>=0);
  if(it.type=='ebsr'){r.a=ci(it.partA.choices)[0];r.b=wi(it.partB.choices).slice(0,it.partB.pick||1);}
  if(it.type=='ms'){r.v=[ci(it.choices)[0],wi(it.choices)[0]];}
  if(it.type=='dropdown'&&it.slots.length==2){r.v=[it.slots[0].answer,it.slots[1].answer===0?1:0];}
  if(it.type=='match'){r.v=it.rows.map(x=>x.answer);const a=r.v[0];r.v[0]=r.v[1];r.v[1]=a;}
  c.onChange();})()"""
KEYS = "(()=>{const o={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);o[k]=localStorage.getItem(k);}return o;})()"
BROWSE = "try{if(!localStorage.getItem('pp.path.v1'))localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true}))}catch(e){}"
SEED = {
    "pp.progress.v1": json.dumps({"3.T.T.1.c": {"taught": True, "tries": 1, "best": {"got": 4, "max": 8}, "bestMax": 8,
                                                "attempts": [{"d": "2026-10-01", "got": 4, "max": 8, "ok": False, "n": 1, "afterAnswers": False, "form": "A"}]},
                                  "3.T.T.1.b": {"mastered": True, "tries": 1, "best": {"got": 6, "max": 6}, "passedAt": "2026-10-10", "passTry": 1, "passBy": "test", "lastPassAt": "2026-10-10"}}),
    "pp.path.v1": json.dumps({"mode": "browse", "introduced": True, "bookmark": None, "finished": {}, "habits": {}}),
    "pp.task.W-TASK-01": json.dumps({"plan": {"opinion": "Yes."}, "draft": "Draft.", "checks": [True], "scores": {}}),
    "pp.practice.v1": json.dumps({"v": 1, "l": {"3.T.T.1.c": {"rev": "1", "i": {"SK-TT1c-P4": {"w": 1, "h": 0, "x": False, "ok": True}}, "s": {}}}}),
}


def launch(p):
    kw = {"args": ARGS}
    if os.environ.get("CHROMIUM_PATH"):
        kw["executable_path"] = os.environ["CHROMIUM_PATH"]
        kw["env"] = {**os.environ, "LD_LIBRARY_PATH": str(Path(kw["executable_path"]).parent), "FONTCONFIG_PATH": "/etc/fonts"}
    return p.chromium.launch(**kw)


def page(b, w=1366, h=900, init=None, errors=None, browse=True):
    q = b.new_page(viewport={"width": w, "height": h}, has_touch=w < 1000, is_mobile=w < 500)
    q.route("**/fonts.g*/**", lambda r: r.abort())
    if browse: q.add_init_script(BROWSE)
    if init: q.add_init_script(init)
    if errors is not None: q.on("pageerror", lambda e: errors.append(str(e)))
    q.on("dialog", lambda d: d.accept())
    return q


def ready(q, hash_=""):
    q.goto(BASE + hash_)
    q.wait_for_function("document.getElementById('build-badge').textContent.length>0")
    q.wait_for_timeout(300)


def seeded(b, w=1366, h=900, errors=None, extra=None):
    q = page(b, w, h, errors=errors, browse=False)
    q.goto(BASE + "#browse"); q.wait_for_timeout(200)
    seed = dict(SEED); seed.update(extra or {})
    q.evaluate("s=>{localStorage.clear();for(const k in s)localStorage.setItem(k,s[k]);}", seed)
    q.reload(); q.wait_for_timeout(800)
    return q


def answer_all(q, partial_first=False):
    n = q.evaluate("PP_PLAYER.state().total")
    did_partial = False
    for i in range(n):
        if q.is_visible("#tab-question"): q.click("#tab-question")
        two = q.evaluate("(it=>it.points===2&&['ebsr','ms','match'].indexOf(it.type)>=0||(it.type==='dropdown'&&it.slots.length===2&&it.points===2))(PP_PLAYER.ctx().item)")
        if partial_first and two and not did_partial:
            q.evaluate(PARTIAL); did_partial = True
        else:
            q.evaluate(CORRECT)
        q.click("#q-next"); q.wait_for_timeout(25)
    return did_partial


with sync_playwright() as p:
    errors = []
    b = launch(p)

    # ---------------- R.1 what the reviews draw from ----------------
    q = seeded(b, errors=errors)
    data = q.evaluate("""(()=>{PP_REVIEW.build();const acc=new Set(PP_ACCEPTED);const out=[];
        Object.keys(PP.byId).filter(k=>/^(RV|CR)-/.test(k)).forEach(id=>{const s=PP.byId[id];
          s.items.forEach(it=>{const L=PP.lessons[it.src];const inCheck=L&&[].concat(L.test||[],L.testB||[]).some(x=>x.id===it.id);
            const refs=it.type==='hottext'&&!it.options?it.targets.every(r=>!!PP.sentenceAt(s,r)):true;
            const pass=(it.passages||[]).every(pid=>s.passages.some(p=>p.id===pid));
            out.push({id,item:it.id,src:it.src,acc:acc.has(it.src),inCheck,cr:it.type==='cr',refs,pass,comp:it.comp,std:(it.std||[]).indexOf(it.comp)>=0,
              inSets:PP.sets.some(x=>x.id===id)});});});
        const groups=PP_STD_GROUPS.map(g=>({code:g.code,info:PP_REVIEW.groupInfo(g.code)}));return {out,groups};})()""")
    bad = [x for x in data["out"] if not (x["acc"] and x["inCheck"] and not x["cr"] and x["refs"] and x["pass"] and x["std"] and not x["inSets"])]
    check("R.1 every review question comes from an ACCEPTED lesson's scored check (form A or B), is never a written item, keeps its passages and hot-text sentences, and tags its component (%d questions in %d sets)"
          % (len(data["out"]), len(set(x["id"] for x in data["out"]))), data["out"] and not bad, bad[:3])
    gbad = []
    for g in data["groups"]:
        info = g["info"]
        names = set(info["measures"]) | set(x["code"] for x in info["notMeasured"])
        order = q.evaluate("(c=>PP_STD_GROUPS.find(g=>g.code===c).order)(%s)" % json.dumps(g["code"]))
        if names != set(order) or set(info["measures"]) & set(x["code"] for x in info["notMeasured"]): gbad.append(g["code"])
        if any(not x["why"] for x in info["notMeasured"]): gbad.append(g["code"] + " why")
        for pid in info["parts"]:
            n = q.evaluate("(id=>new Set(PP.byId[id].items.map(i=>i.comp)).size)(%s)" % json.dumps(pid))
            if n > 5: gbad.append(pid + " has %d parts" % n)
    check("R.2 for each of the 30 parent standards, every component is either measured or listed as not measured with a reason; no part covers more than five components",
          not gbad and len(data["groups"]) == 30, gbad[:5])
    sets_not_in_lists = q.evaluate("PP.sets.every(s=>!/^(RV|CR)-/.test(s.id))")
    check("R.3 review sets are addressable but are not added to the mixed practice lists", sets_not_in_lists)

    # ---------------- R.4 no writes on open ----------------
    before = q.evaluate(KEYS)
    for h in ["#review", "#coverage", "#mixed"] + ["#std/" + g["code"] for g in data["groups"]] + ["#std/3.T.T.1.c", "#std/3.L.GC.1:M"]:
        q.goto(BASE + h); q.wait_for_timeout(120)
    q.evaluate("document.querySelectorAll('details').forEach(d=>d.open=true)")
    check("R.4 opening the hub, the coverage map, #mixed and every parent standard page writes nothing (all keys byte-identical)", q.evaluate(KEYS) == before, "")

    # RR-08: the baseline above is taken after a first load, so a write during first load is invisible to it.
    # Start from a truly empty store and log every setItem call.
    LOG = "(()=>{window.__w=[];const s=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){window.__w.push(k);return s.call(this,k,v);};})()"
    wlog = []
    for h in ["#review", "#coverage", "#std/3.T.T.1", "#std/3.T.T.1.c", "#std/3.L.GC.1:M"]:
        q0 = page(b, 390, 844, init=LOG, browse=False); q0.goto(BASE + h); q0.wait_for_function("document.getElementById('build-badge').textContent.length>0"); q0.wait_for_timeout(700)
        wlog += [(h, k) for k in q0.evaluate("window.__w") if k != "pp.path.storage-check"]
        q0.close()
    check("R.4b from a completely empty store, opening the hub, the coverage map and standard pages writes no key (the only allowed write is path.js's own storage probe)", not wlog, wlog)

    # ---------------- R.5 the hub, the map, the #mixed links ----------------
    ready(q, "#mixed")
    mx = q.evaluate("({cards:document.querySelectorAll('#section-grid .section-card').length, links:[...document.querySelectorAll('#screen-mixed .rv-links a')].map(a=>a.getAttribute('href'))})")
    q.click("#mixed-review"); q.wait_for_timeout(200)
    hub = q.evaluate("""({cur:PP_APP.current(), hash:location.hash, focus:document.activeElement.id, h:[...document.querySelectorAll('#review-body h2')].map(h=>h.textContent),
        t:document.getElementById('review-body').innerText, starts:document.querySelectorAll('#rv-curriculum .rv-start').length, pt:document.querySelectorAll('#rv-statetest .rv-start').length,
        tasks:document.querySelectorAll('#rv-writing .rv-task').length, obs:document.querySelectorAll('#rv-observed li').length, unavailable:PP_REVIEW.areas().some(a=>!a.covered.length)})""")
    check("R.5 #mixed keeps its four section cards and links to the review and the map; the hub has four labelled kinds (curriculum, state-test practice, writing tasks, observed), no combined score, and says 'Not available yet' exactly when a cumulative area has no accepted lesson",
          mx == {"cards": 4, "links": ["#review", "#coverage"]} and hub["cur"] == "review" and hub["hash"] == "#review" and hub["focus"] == "review-title"
          and [x.split(". ", 1)[1].split(" (")[0] for x in hub["h"]] == ["Curriculum review", "State-test practice", "Writing tasks", "Observed by a grown-up"]
          and hub["starts"] >= 1 and hub["pt"] >= 1 and hub["tasks"] == 2 and hub["obs"] >= 5 and "There is no combined score" in hub["t"]
          and (("Not available yet" in hub["t"]) == hub["unavailable"]) and not re.search(r"\bmaster(ed|y)\b", hub["t"], re.I), (mx, hub["h"], hub["starts"], hub["pt"], hub["tasks"], hub["obs"]))
    ready(q, "#coverage")
    q.evaluate("document.querySelectorAll('#coverage-body details').forEach(d=>d.open=true)")
    cov = q.evaluate("""({rows:document.querySelectorAll('#coverage-body tr[data-code]').length, n:PP_STANDARDS.length, t:document.getElementById('coverage-body').innerText,
        heads:[...document.querySelectorAll('#coverage-body thead')[0].querySelectorAll('th')].map(t=>t.textContent),
        tt1c:(document.querySelector('#coverage-body tr[data-code="3.T.T.1.c"]')||{}).innerText||'', tt1e:(([...document.querySelectorAll('#coverage-body tr[data-code]')].find(t=>/^3\.F\./.test(t.dataset.code)&&/not in a standard review yet/i.test(t.innerText)))||{}).innerText||'',
        hab:(document.querySelector('#coverage-body tr[data-code="K-12.P.EICC.1.a"]')||{}).innerText||''})""")
    check("R.6 the coverage map lists every standard with its lesson check, standard review, cumulative review, grown-up or writing evidence, and what is not covered yet",
          cov["rows"] == cov["n"] and cov["heads"] == ["Standard", "Lesson check", "Standard review", "Cumulative review", "Grown-up or writing evidence", "Not covered yet"]
          and "3.T.T.1 review" in cov["tt1c"] and "Not yet" in cov["tt1e"] and "not in a standard review yet" in cov["tt1e"].lower()  # a lesson check that no review has reached yet (chosen from the page; which one changes as lessons are accepted)
          and "observed only" in cov["hab"].lower(), (cov["rows"], cov["heads"], cov["tt1c"][:200], cov["tt1e"][:200], cov["hab"][:120]))
    check("R.7 the map says plainly that no short form tests every Georgia expectation, and never claims full coverage",
          "No short form on this site is a test of every Georgia expectation" in cov["t"]
          and not re.search(r"every (georgia )?(expectation|standard)|fully (covered|assessed)|complete coverage", cov["t"].replace("No short form on this site is a test of every Georgia expectation", ""), re.I)
          and not re.search(r"\bmaster(ed|y)\b", cov["t"], re.I), "")
    q.close()

    # ---------------- R.8 taking a standard review: results, no pass, pp.review.v1 only ----------------
    q = seeded(b, errors=errors)
    before = q.evaluate(KEYS)
    ready(q, "#std/3.T.T.1"); q.reload(); q.wait_for_timeout(700)
    q.click("#std-review .rv-start"); q.wait_for_timeout(200)
    st = q.evaluate("({s:PP_PLAYER.state(), help:['q-help','q-hint','q-how','q-check'].filter(i=>!document.getElementById(i).hidden), nav:document.querySelectorAll('#q-nav .qn-btn').length, focus:document.activeElement.id})")
    did = answer_all(q, partial_first=True)
    q.click("#confirm-submit"); q.wait_for_timeout(250)
    res = q.evaluate("""({rows:[...document.querySelectorAll('#res-skills .skill-row')].map(r=>r.querySelector('.skill-name').textContent), hidden:document.getElementById('res-skills').hidden,
        partial:document.getElementById('res-partial').textContent, g:document.getElementById('res-guidance').textContent, note:document.getElementById('res-again-note').textContent,
        again:document.getElementById('res-again').textContent, back:document.getElementById('res-back').textContent, prac:document.getElementById('res-practice').hidden,
        rv:document.getElementById('res-revisit').innerText})""")
    after = q.evaluate(KEYS)
    rv = json.loads(after.get("pp.review.v1") or "null")
    changed = [k for k in before if after.get(k) != before[k]]
    check("R.8 a standard review runs as a check (navigator, no hints or Check) and reports each measured component, partial credit and the same-questions retry note",
          st["s"]["setId"] == "RV-3.T.T.1" and st["s"]["mode"] == "test" and st["help"] == [] and st["nav"] == st["s"]["total"] and did
          and set(res["rows"]) >= {"3.T.T.1.b", "3.T.T.1.c", "3.T.T.1.a", "3.T.T.1.d"} and not res["hidden"] and "partial credit" in res["partial"]
          and "Taking it again uses the same questions." in res["note"] and res["again"] == "Take the review again" and res["back"] == "Back to the review page" and res["prac"]
          and "not a Milestones score" in res["g"] and "does not change any lesson's pass" in res["g"], (st, res))
    check("R.9 submitting saves only pp.review.v1 (date, score, components); pp.progress.v1, pp.practice.v1, pp.path.v1 and pp.task.* are byte-identical, so no lesson pass is written",
          not changed and set(after) - set(before) == {"pp.review.v1"} and rv["v"] == 1 and rv["r"]["RV-3.T.T.1"]["a"][0]["max"] > 0
          and set(rv["r"]["RV-3.T.T.1"]["a"][0]["comps"]) >= {"3.T.T.1.b", "3.T.T.1.c"}
          and q.evaluate("PP_SKILLS.status('3.T.T.1.c')") == "started", (changed, rv))
    q.click("#res-review-btn"); q.wait_for_timeout(60)
    rvw = q.evaluate("document.querySelectorAll('#res-review .review-item').length===PP_PLAYER.state().total && document.querySelectorAll('#res-review .review-partial').length===1")
    check("R.10 the answers and explanations are shown after submitting, with the partly right question's partial-credit line", rvw, "")
    q.click("#res-back"); q.wait_for_timeout(300)
    back = q.evaluate("[PP_APP.current(), location.hash, (document.querySelector('#std-review .rv-part')||{}).textContent||'']")
    check("R.11 Back from the results returns to the standard page, which now shows the date and score of the last review", back[0] == "std" and back[1] == "#std/3.T.T.1" and "Last taken" in back[2], back)
    # a cumulative part from the hub, then Back to the hub; a direct address, then Back to the standard page
    ready(q, "#review"); q.reload(); q.wait_for_timeout(700)
    q.click("#rv-curriculum .rv-start"); q.wait_for_timeout(200)
    cid = q.evaluate("PP_PLAYER.state().setId")
    answer_all(q); q.click("#confirm-submit"); q.wait_for_timeout(250); q.click("#res-back"); q.wait_for_timeout(300)
    hb = q.evaluate("[PP_APP.current(), location.hash, document.querySelector('#rv-curriculum .rv-part').textContent]")
    ready(q, "#play/RV-3.T.SS.1/test"); q.reload(); q.wait_for_timeout(700)
    d1 = q.evaluate("[PP_APP.current(), PP_PLAYER.state().setId, PP_PLAYER.state().mode]")
    q.click("#player-back"); q.wait_for_timeout(300)
    d2 = q.evaluate("[PP_APP.current(), location.hash]")
    ready(q, "#play/RV-3.T.T.1/practice"); q.reload(); q.wait_for_timeout(700)
    d3 = q.evaluate("[PP_PLAYER.state().mode, location.hash, document.getElementById('q-help').hidden]")
    check("R.12 a cumulative part runs from the hub and Back returns there with its date; a review address opens it, Back goes to its standard page; '/practice' still runs it as a check",
          cid.startswith("CR-") and hb[0] == "review" and hb[1] == "#review" and "Last taken" in hb[2] and d1 == ["player", "RV-3.T.SS.1", "test"]
          and d2 == ["std", "#std/3.T.SS.1"] and d3[0] == "test" and d3[1].endswith("/test") and d3[2], (cid, hb, d1, d2, d3))
    q.close()

    # ---------------- R.13 storage: corrupt, blocked, full ----------------
    good = json.dumps({"v": 1, "r": {"RV-3.T.T.1": {"a": [{"d": "2026-10-20", "got": 5, "max": 15, "n": 1}, {"d": "x", "got": 99, "max": 3}]}, "__proto__": {"a": []}, "RV-bad": "no"}})
    for name, raw, expect in (("bad JSON", "{oops", "Saved review results could not be read"), ("an array", "[1]", "Saved review results could not be read"), ("mixed", good, None)):
        errs = []
        q = seeded(b, errors=errs, extra={"pp.review.v1": raw})
        ready(q, "#std/3.T.T.1"); q.reload(); q.wait_for_timeout(700)
        t = q.evaluate("document.getElementById('std-review').innerText")
        raw1 = q.evaluate("localStorage.getItem('pp.review.v1')")
        q.click("#std-review .rv-start"); q.wait_for_timeout(150); answer_all(q); q.click("#confirm-submit"); q.wait_for_timeout(200)
        raw2 = json.loads(q.evaluate("localStorage.getItem('pp.review.v1')"))
        ok_ = raw1 == raw and not errs and raw2["v"] == 1 and len(raw2["r"]["RV-3.T.T.1"]["a"]) == (2 if name == "mixed" else 1)
        ok_ = ok_ and ((expect in t) if expect else ("Last taken October 20, 2026: 5 of 15 points." in t and "RV-bad" not in raw2["r"]))
        check("R.13 corrupt pp.review.v1 (%s): the page renders honestly, the raw value is untouched until a review is submitted, valid results are kept" % name, ok_, (t[:300], raw1 == raw, raw2, errs))
        q.close()
    for name, init in (("blocked", "Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}})"),
                       ("full", "window.__realSet=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){if(/^pp\\./.test(k))throw new DOMException('full','QuotaExceededError');return window.__realSet.call(this,k,v)}")):
        errs = []
        q = page(b, init=init, errors=errs, browse=False)
        q.goto(BASE + "#std/3.T.T.1"); q.wait_for_timeout(900)
        t = q.evaluate("(document.getElementById('std-review')||{innerText:''}).innerText")
        q.click("#std-review .rv-start"); q.wait_for_timeout(150); answer_all(q); q.click("#confirm-submit"); q.wait_for_timeout(200)
        r = q.evaluate("({score:document.getElementById('res-score').textContent, note:document.getElementById('res-again-note').textContent})")
        check("R.14 %s storage: the review page says results will not be kept; the review still runs and shows its score; no page errors" % name,
              "Saving is unavailable. A review result is shown when you finish, but it is not kept after this page closes." in t
              and r["score"] != "" and "not kept after this page closes" in r["note"] and not errs, (t[:200], r, errs))
        q.close()

    # ---------------- R.15 seven viewports ----------------
    over = []
    for w, h in VIEWPORTS:
        errs = []
        q = page(b, w, h, errors=errs); ready(q, "#browse")
        for hh in ("#review", "#coverage", "#std/3.T.T.1"):
            ready(q, hh)
            if hh == "#coverage": q.evaluate("document.querySelectorAll('#coverage-body details').forEach(d=>d.open=true)")
            o = q.evaluate("document.documentElement.scrollWidth-innerWidth")
            small = q.evaluate("""[...document.querySelectorAll('.screen:not([hidden]) .rv-start, .screen:not([hidden]) .rv-task, .screen:not([hidden]) #rv-observed .linkish, .screen:not([hidden]) .cov-group>summary, .screen:not([hidden]) a.std-link, .screen:not([hidden]) .rv-link')]
                .filter(e=>e.offsetParent).map(e=>{const r=e.getBoundingClientRect();return [e.className,Math.round(r.height),Math.round(r.left),Math.round(r.right)]}).filter(x=>x[1]<44||x[2]<0||x[3]>innerWidth)""")
            if OUT and w in (320, 390, 1366): q.screenshot(path=str(OUT / ("%s-%dx%d.png" % (hh.strip("#").replace("/", "-"), w, h))), full_page=True)
            if o > 0 or small: over.append((w, h, hh, o, small[:2]))
        q.click("#std-review .rv-start"); q.wait_for_timeout(150); answer_all(q, True); q.click("#confirm-submit"); q.wait_for_timeout(200)
        o = q.evaluate("document.documentElement.scrollWidth-innerWidth")
        if OUT and w in (320, 390, 1366): q.screenshot(path=str(OUT / ("results-%dx%d.png" % (w, h))), full_page=True)
        if o > 0 or errs: over.append((w, h, "results", o, errs[:1]))
        q.close()
    check("R.15 at the seven viewports the hub, the coverage map (every group open), a parent standard page with its review and the review results fit with no sideways scroll; links and buttons are at least 44px", not over, over)

    # ---------------- R.16 axe and keyboard ----------------
    axe = AXE
    if axe:
        viol = []
        for w in (390, 1366):
            q = page(b, w, 900); ready(q, "#browse")
            for hh in ("#review", "#coverage", "#std/3.T.T.1", "#std/3.L.GC.1", "results"):
                if hh == "results":
                    ready(q, "#std/3.T.T.1"); q.click("#std-review .rv-start"); q.wait_for_timeout(150); answer_all(q, True); q.click("#confirm-submit"); q.wait_for_timeout(200); q.click("#res-review-btn")
                    sel = "#stage-results"
                else:
                    ready(q, hh); q.evaluate("document.querySelectorAll('details').forEach(d=>d.open=true)")
                    sel = "#screen-" + ("std" if hh.startswith("#std") else hh.strip("#"))
                q.add_script_tag(path=axe)
                r = q.evaluate("""async s=>{const r=await axe.run(document.querySelector(s),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa']}});return r.violations.map(v=>[v.id,v.nodes.length,v.nodes[0].target])}""", sel)
                if r: viol.append((w, hh, r[:3]))
            q.close()
        check("R.16 axe (WCAG 2 A/AA, colour contrast included) finds no violations on the hub, the coverage map, two parent standard pages and the review results, at 390 and 1366", not viol, viol)
    else:
        check("R.16 axe (WCAG 2 A/AA) on the review screens", False, "AXE_PATH is not set to a local axe.min.js, so axe did not run")
    q = page(b, 1366, 900); ready(q, "#std/3.T.T.1"); q.reload(); q.wait_for_timeout(700)
    q.evaluate("document.querySelector('#std-review .rv-start').focus()"); q.keyboard.press("Enter"); q.wait_for_timeout(200)
    k1 = q.evaluate("[PP_APP.current(), PP_PLAYER.state().setId, document.activeElement.id]")
    q.keyboard.press("Escape"); q.wait_for_timeout(300)
    ready(q, "#review"); q.reload(); q.wait_for_timeout(700)
    seq = []
    for _ in range(14):
        q.keyboard.press("Tab")
        seq.append(q.evaluate("(e=>e.id||e.className||e.tagName)(document.activeElement)"))
    k2 = any("rv-start" in s for s in seq)
    q.evaluate("document.querySelector('#rv-curriculum .rv-start').focus()"); q.keyboard.press("Enter"); q.wait_for_timeout(200)
    k3 = q.evaluate("[PP_APP.current(), document.activeElement.id]")
    check("R.17 keyboard: Enter on a review's Start opens it with focus on the player title; Tab reaches the hub's Start buttons; Enter starts a part",
          k1[0] == "player" and k1[1] == "RV-3.T.T.1" and k1[2] == "player-title" and k2 and k3 == ["player", "player-title"], (k1, seq, k3))
    q.close()

    # ---------------- R.18 RR-01: answers shown in a review count as seen ----------------
    q = page(b, 1366, 900); ready(q, "#std/3.T.T.1"); q.reload(); q.wait_for_timeout(700)
    pre = q.evaluate(KEYS).get("pp.progress.v1")
    q.click("#std-review .rv-start"); q.wait_for_timeout(200); answer_all(q); q.click("#confirm-submit"); q.wait_for_timeout(250)
    after_submit = q.evaluate(KEYS).get("pp.progress.v1")
    q.click("#res-review-btn"); q.wait_for_timeout(100)
    prog = json.loads(q.evaluate(KEYS).get("pp.progress.v1") or "{}")
    rec = prog.get("3.T.T.1.c") or {}
    srcs = q.evaluate("[...new Set(PP.byId['RV-3.T.T.1'].items.map(i=>i.src))]")
    seen_ok = all(isinstance(prog.get(k, {}).get("reviewSeenBy"), dict) for k in srcs)
    clean = all(k in prog and not (prog[k].get("mastered") or prog[k].get("tries") or prog[k].get("attempts") or prog[k].get("passedAt")) for k in srcs)
    status = q.evaluate("(k=>PP_SKILLS.status(k))('3.T.T.1.c')")
    check("R.18a submitting a review leaves pp.progress.v1 untouched; opening See my answers only adds reviewSeenBy to the source lessons: no try, no pass, no status change",
          pre == after_submit and seen_ok and clean and status == "new", (pre, after_submit, srcs, rec, status))
    ready(q, "#play/SK:3.T.T.1.c:t"); q.reload(); q.wait_for_timeout(700)
    q.wait_for_function("PP_PLAYER.state().setId==='SK:3.T.T.1.c:t'")
    answer_all(q); q.click("#confirm-submit"); q.wait_for_timeout(300)
    rec = json.loads(q.evaluate(KEYS).get("pp.progress.v1") or "{}").get("3.T.T.1.c") or {}
    att = (rec.get("attempts") or [{}])[0]
    check("R.18b a first-try pass on the lesson check after the review is recorded as after seeing the answers (afterAnswers true, seenIn review); it is still the honest pass, not hidden",
          att.get("n") == 1 and att.get("ok") is True and att.get("afterAnswers") is True and att.get("seenIn") == "review", rec)
    ready(q, "#skill/3.T.T.1.c"); q.wait_for_timeout(400)
    txt = q.evaluate("document.body.innerText")
    check("R.18c the skill page tells a grown-up the pass came after seeing these questions' answers in a review", "answers in a review" in txt, txt[:200])
    q.close()
    # a review with no stored progress for a lesson does not create a pass for it, and a corrupt reviewSeenBy is ignored
    q = seeded(b, extra={"pp.progress.v1": json.dumps({"3.T.T.1.c": {"taught": True, "reviewSeenBy": "zzz"}})})
    ready(q, "#play/SK:3.T.T.1.c:t"); q.reload(); q.wait_for_timeout(700)
    answer_all(q); q.click("#confirm-submit"); q.wait_for_timeout(300)
    rec2 = json.loads(q.evaluate(KEYS).get("pp.progress.v1") or "{}").get("3.T.T.1.c") or {}
    a2 = (rec2.get("attempts") or [{}])[0]
    check("R.18d a corrupt reviewSeenBy value is ignored (no crash, first-try pass is not marked as seen)", a2.get("afterAnswers") is False and a2.get("ok") is True, rec2)
    q.close()

    # ---------------- R.19 RR-04: the question navigator shows every button at the seven viewports ----------------
    nav_bad = []
    q = page(b, 1366, 900); ready(q, "#review")
    nav_id = q.evaluate("(()=>{PP_REVIEW.build();return Object.keys(PP.byId).filter(k=>/^(RV|CR)-/.test(k)&&PP.byId[k].items.length<=12).sort((a,c)=>PP.byId[c].items.length-PP.byId[a].items.length)[0]})()")
    q.close()
    for (w, h) in VIEWPORTS:
        q = page(b, w, h); ready(q, "#play/" + nav_id + "/test"); q.reload(); q.wait_for_timeout(700)
        q.wait_for_function("PP_PLAYER.state().total>0", timeout=5000)
        m = q.evaluate("""(()=>{const n=document.getElementById('q-nav');if(!n||n.hidden)return null;const b=[...n.querySelectorAll('.qn-btn')],r=n.getBoundingClientRect();
           return {count:b.length,scrolls:n.scrollWidth>n.clientWidth+1,wraps:getComputedStyle(n).flexWrap==='wrap',
             clipped:b.filter(x=>{const c=x.getBoundingClientRect();return c.right>r.right+1||c.left<r.left-1}).length,page:document.documentElement.scrollWidth-innerWidth}})()""")
        # clipped buttons are allowed only on a narrow screen, where the navigator scrolls inside its own box (the page never does)
        if m is None or m["page"] > 0 or (w >= 600 and (m["clipped"] or m["scrolls"])): nav_bad.append((w, h, m))
        q.close()
    check("R.19 the check navigator shows every question button (wraps, no hidden buttons) from 600px wide up, and never scrolls the page, at the seven viewports", not nav_bad, nav_bad)

    # ---------------- R.20 RR-03: axe target-size (WCAG 2.2 AA) on the parents' tables and the code links ----------------
    ts_bad = []
    for (w, h) in VIEWPORTS:
        q = page(b, w, h); ready(q, "#parents"); q.add_script_tag(path=AXE)
        r = q.evaluate("""async()=>{const out=[];
            for(const t of [...document.querySelectorAll('[data-ptab]')]){t.click();await new Promise(r=>setTimeout(r,80));
              const r=await axe.run(document.body,{runOnly:{type:'rule',values:['target-size']}});r.violations.forEach(v=>out.push([t.textContent.trim(),v.nodes.length]));}
            return out}""")
        if r: ts_bad.append((w, h, r))
        q.close()
    check("R.20 axe target-size (WCAG 2.2 AA) finds no overlapping or small targets on any Parents tab at the seven viewports", not ts_bad, ts_bad)

    check("R.0 no page errors", not errors, errors[:3])
    b.close()

fails = [r for r in results if not r["pass"]]
print("%d passed, %d failed" % (len(results) - len(fails), len(fails)))
if OUT: (OUT / "review-results.json").write_text(json.dumps(results, indent=2) + "\n")
sys.exit(1 if fails else 0)

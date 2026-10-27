#!/usr/bin/env python3
"""Peach Prep browser harness. Drives the real UI in Chromium.

Usage:  python3 verification/guard.py [BASE_URL]   (default http://127.0.0.1:8350/)
Serve first:  node verification/serve.js . 8350
Exit code 1 on any failure. Font CDN requests are blocked on purpose
(the build sandbox cannot reach them), so they are not counted.

Entry mode: since the Learning Path, a fresh visitor gets the first-visit
choice screen (#screen-choose), not the browse home. This suite tests the
browse home on purpose, so every page it opens gets the same browse-mode
init script as launch-ux-regression.py: it seeds pp.path.v1 =
{mode:'browse',introduced:true} only when the key is missing, and never
overwrites a value a check has set. First-visit behaviour (no seed at all)
is covered by verification/first-visit.py and verification/path.py.
"""
import sys, json, re
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8350/"
results = []

# Same init script as launch-ux-regression.py (see the docstring above).
# Init scripts also run on about:blank, which has no storage origin, hence the try.
BROWSE_SEED = "try { if(!localStorage.getItem('pp.path.v1'))localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true})); } catch(e) { /* no storage origin, e.g. about:blank */ }"
def newpage(browser, **kw):
    q = browser.new_page(**kw); q.add_init_script(BROWSE_SEED); return q

def print_results():
    fails = [r for r in results if not r[0]]
    for good, name, detail in results:
        print(("PASS  " if good else "FAIL  ") + name + ("" if good else "   [" + detail + "]"))
    print("%d passed, %d failed" % (len(results) - len(fails), len(fails)))
    return fails

# On an uncaught exception, show how far the run got before the traceback (exit code stays 1).
_default_hook = sys.excepthook
def _crash_hook(t, v, tb):
    print("guard crashed; results gathered so far:", flush=True)
    print_results(); sys.stdout.flush()
    _default_hook(t, v, tb)
sys.excepthook = _crash_hook

def ok(name, cond, detail=""):
    results.append((bool(cond), name, str(detail)[:200]))

CORRECT = """(()=>{const c=PP_PLAYER.ctx(),it=c.item,r=c.resp;
  const ci=ch=>ch.map((x,i)=>x.correct?i:-1).filter(i=>i>=0);
  if(it.type=='mc')r.v=ci(it.choices)[0];
  if(it.type=='ms')r.v=ci(it.choices);
  if(it.type=='ebsr'){r.a=ci(it.partA.choices)[0];r.b=ci(it.partB.choices);}
  if(it.type=='dropdown')r.v=it.slots.map(s=>s.answer);
  if(it.type=='hottext')r.v=it.options?it.answer.map(i=>'opt:'+i):it.answer.slice();
  if(it.type=='order')r.v=it.steps.map((s,i)=>i);
  if(it.type=='match')r.v=it.rows.map(x=>x.answer);
  c.onChange();})()"""
WRONG = """(()=>{const c=PP_PLAYER.ctx(),it=c.item,r=c.resp;
  const wi=ch=>ch.map((x,i)=>!x.correct?i:-1).filter(i=>i>=0);
  if(it.type=='mc')r.v=wi(it.choices)[0];
  if(it.type=='ms')r.v=wi(it.choices).slice(0,it.pick);
  if(it.type=='ebsr'){r.a=wi(it.partA.choices)[0];r.b=wi(it.partB.choices).slice(0,it.partB.pick||1);}
  if(it.type=='dropdown')r.v=it.slots.map(s=>s.answer===0?1:0);
  if(it.type=='hottext'){const t=it.options?it.options.map((o,i)=>'opt:'+i):it.targets;const a=it.options?it.answer.map(i=>'opt:'+i):it.answer;r.v=t.filter(x=>a.indexOf(x)<0).slice(0,it.pick||a.length);}
  if(it.type=='order'){r.v=it.steps.map((s,i)=>i).reverse();}
  if(it.type=='match')r.v=it.rows.map(x=>x.answer===0?1:0);
  c.onChange();})()"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = newpage(b, viewport={"width": 1366, "height": 900})
    pg.route("**/fonts.g*/**", lambda r: r.abort())
    errors = []
    pg.on("pageerror", lambda e: errors.append(str(e)))
    dialogs = []
    def _dlg(d):
        dialogs.append(d.message); d.accept()
    pg.on("dialog", _dlg)
    pg.goto(BASE); pg.wait_for_timeout(600)

    # ---------- 1. Home ----------
    h = pg.evaluate("""({title:document.title, cards:document.querySelectorAll('#section-grid .section-card').length,
      rows:document.querySelectorAll('#skill-list .skill-line').length, want:PP_CATALOG.reduce((a,c)=>a+c.groups.reduce((b,g)=>b+g.skills.filter(k=>PP.lessons[k]||k.indexOf('task:')===0).length,0),0),
      std:PP_STANDARDS.length, cards:document.querySelectorAll('#cat-cards .cat-card').length, scards:document.querySelectorAll('#section-grid .section-card').length,
      covered:PP_STANDARDS.filter(s=>s.tested!=='embedded').every(s=>PP_SKILLS.lessonFor(s.code)),
      foot:document.querySelector('.site-foot').textContent, build:document.getElementById('build-badge').textContent,
      sets:PP.sets.filter(s=>s.section!=='skill').length, tasks:PP.tasks.length, manifest:PP_MANIFEST})""")
    ok("1.1 home: five category cards and every catalog skill as a tappable line", h["cards"] == 5 and h["rows"] == h["want"] and h["rows"] > 90, (h["cards"], h["rows"], h["want"]))
    ok("1.1c every non-habit Georgia standard has a lesson", h["covered"])
    ok("1.1b mixed practice screen has the four section cards", h["scards"] == 4, h["scards"])
    ok("1.2 every manifest set loaded", h["sets"] == len(h["manifest"]["sets"]), h)
    lc = pg.evaluate("({n:Object.keys(PP.lessons).length})")
    ok("1.2b every manifest lesson file loaded", lc["n"] > 0, lc)
    ok("1.3 every manifest task loaded", h["tasks"] == len(h["manifest"].get("tasks", [])), h)
    ok("1.4 not-affiliated disclaimer on Home", "not affiliated" in h["foot"] and "Georgia Department of Education" in h["foot"])
    ok("1.5 build badge shown", h["build"].startswith("Peach Prep"), h["build"])

    # ---------- 2. Engine scoring on every item ----------
    sc = pg.evaluate("""(()=>{const T=PP_ITEMS, out=[];
      PP.sets.forEach(s=>s.items.forEach(it=>{
        if(it.type==='cr')return;   /* expansion 2026-10-22: a constructed response is never scored (practice-own.py covers it) */
        const ci=ch=>ch.map((x,i)=>x.correct?i:-1).filter(i=>i>=0);
        const r=T[it.type].blank(it);
        const blank=T[it.type].score(it,r).points;
        if(it.type=='mc')r.v=ci(it.choices)[0];
        if(it.type=='ms')r.v=ci(it.choices);
        if(it.type=='ebsr'){r.a=ci(it.partA.choices)[0];r.b=ci(it.partB.choices);}
        if(it.type=='dropdown')r.v=it.slots.map(x=>x.answer);
        if(it.type=='hottext')r.v=it.options?it.answer.map(i=>'opt:'+i):it.answer.slice();
        if(it.type=='order')r.v=it.steps.map((x,i)=>i);
        if(it.type=='match')r.v=it.rows.map(x=>x.answer);
        const full=T[it.type].score(it,r);
        let partial=null;
        if(it.type=='ebsr'&&it.points==2){const r2={a:r.a,b:[]};const wb=it.partB.choices.map((x,i)=>!x.correct?i:-1).filter(i=>i>=0);r2.b=wb.slice(0,it.partB.pick||1);partial=T.ebsr.score(it,r2).points;}
        out.push({id:s.id+' '+it.id,blank,full:full.points,max:full.max,pts:it.points,partial,
          ans:!!T[it.type].answerText(it,s), desc:!!T[it.type].describe(it,r,s), nt:!!T[it.type].narrowText(it,r,s)});
      }));return out;})()""")
    bad = [x["id"] for x in sc if x["full"] != x["pts"] or x["max"] != x["pts"]]
    ok("2.1 the correct response earns full points on every item (%d items)" % len(sc), not bad, bad[:5])
    bad = [x["id"] for x in sc if x["blank"] != 0]
    ok("2.2 an empty response earns 0 on every item", not bad, bad[:5])
    bad = [x["id"] for x in sc if x["partial"] is not None and x["partial"] != 1]
    ok("2.3 two-part items give 1 point for Part A only", not bad, bad[:5])
    bad = [x["id"] for x in sc if not (x["ans"] and x["desc"] and x["nt"])]
    ok("2.4 every item can describe its answer, the child's answer and a review hint", not bad, bad[:5])
    blank_place = pg.evaluate("""(()=>{const T=PP_ITEMS,out=[];PP.sets.forEach(s=>s.items.forEach(it=>{if(it.type==='cr')return;
        const r=T[it.type].blank(it); const t=T[it.type].narrowText(it,r,s);
        if(/Look in\\s*[.,]|Look in\\s+and|\\(\\s*\\)/.test(t)) out.push(s.id+' '+it.id+': '+t);}));return out;})()""")
    ok("2.5 no review hint has an empty place name", not blank_place, blank_place[:3])

    # ---------- 3. Practice mode on every item ----------
    hint_fail, right_fail, wrong_fail, leak_fail, own_hint_fail = [], [], [], [], []
    # a skill's check sets (SK:<k>:t, and form B SK:<k>:tB, PP-004) never run in practice mode (PP-003 A3); they are covered in sections 4, 11.2 and 14
    # expansion 2026-10-22 (ENG-03): a core lesson's "Practice on my own" sets (s.own) run here too, item by item, with the
    # same 3.1, 3.2 and 3.4 assertions. They have no Help me ladder by design (01-architecture.md §2.2.1), so 3.3 stays on
    # the ladder sets and 3.3b asserts the own-mode hints: each authored hint in order, nothing narrowed, outlined or revealed.
    for s in pg.evaluate("PP.sets.filter(s=>!(s.kind=='skill'&&(s.part=='t'||s.part=='tB'))).map(s=>s.id)"):
        own = pg.evaluate("!!PP.byId[%s].own" % json.dumps(s))
        pg.evaluate("PP_PLAYER.start(%s,'practice',{pos:0})" % json.dumps(s)); pg.wait_for_timeout(80)
        n = pg.evaluate("PP_PLAYER.state().total")
        for i in range(n):
            if own:
                iid = pg.evaluate("PP_PLAYER.ctx().item.id")
                cr = pg.evaluate("PP_PLAYER.ctx().item.type==='cr'")
                if not cr:
                    pg.evaluate(WRONG); pg.click("#q-check"); pg.wait_for_timeout(30)
                    fb = pg.evaluate("({cls:document.getElementById('q-feedback').className, txt:document.getElementById('q-feedback').textContent, why:PP_PLAYER.ctx().item.why, how:!document.getElementById('teach-panel').hidden})")   # question-first: Teach Me must not open by itself
                    if "is-try" not in fb["cls"]: wrong_fail.append(s + " " + iid)
                    if (fb["why"] and fb["why"][:40] in fb["txt"]) or fb["how"]: leak_fail.append(s + " " + iid)
                want = pg.evaluate("(it=>(it.hints&&it.hints.length?it.hints:[it.clue]))(PP_PLAYER.ctx().item)")
                seen = []
                pg.click("#q-teach"); pg.wait_for_timeout(30)   # question-first: hints live inside Teach Me (docs/question-first/TEST-CHANGES.md)
                for k in range(len(want)):
                    pg.click("#teach-hint"); pg.wait_for_timeout(20)
                    seen.append(pg.evaluate("""({steps:[...document.querySelectorAll('#teach-hints .help-step .help-text')].map(x=>x.textContent),
                        ruled:document.querySelectorAll('#q-body .is-ruled-out').length, outline:document.querySelectorAll('#q-body .is-hint').length,
                        how:!!document.querySelector('#teach-cards [data-unit=answer]'), picked:JSON.stringify(PP_PLAYER.ctx().resp)})"""))
                last = seen[-1] if seen else None
                if not (last and last["steps"] == want and all(x["ruled"] == 0 and x["outline"] == 0 and not x["how"] for x in seen)
                        and [len(x["steps"]) for x in seen] == list(range(1, len(want) + 1))
                        and pg.evaluate("document.getElementById('teach-hint').disabled")):
                    own_hint_fail.append(s + " " + iid + " " + json.dumps([len(want), [len(x["steps"]) for x in seen], last and {k: last[k] for k in ("ruled", "outline", "how")}]))
                pg.click("#teach-back"); pg.wait_for_timeout(60)
                if cr:
                    pg.evaluate("(()=>{const c=PP_PLAYER.ctx();c.resp.text='My answer.';c.onChange();})()"); pg.click("#q-check"); pg.wait_for_timeout(30)
                    good = pg.evaluate("document.getElementById('q-status').textContent.indexOf('Written and checked')>=0 && !document.getElementById('q-cr').hidden")
                else:
                    pg.evaluate(CORRECT); pg.click("#q-check"); pg.wait_for_timeout(30)
                    good = "is-right" in pg.evaluate("document.getElementById('q-feedback').className")
                if not good: right_fail.append(s + " " + iid)
                pg.click("#q-next"); pg.wait_for_timeout(40)
                continue
            iid = pg.evaluate("PP_PLAYER.ctx().item.id")
            # a wrong answer: feedback says try again and does not reveal
            pg.evaluate(WRONG); pg.click("#q-check"); pg.wait_for_timeout(30)
            fb = pg.evaluate("({cls:document.getElementById('q-feedback').className, txt:document.getElementById('q-feedback').textContent, why:PP_PLAYER.ctx().item.why})")
            if "is-try" not in fb["cls"]: wrong_fail.append(s + " " + iid)
            if fb["why"] and fb["why"][:40] in fb["txt"]: leak_fail.append(s + " " + iid)
            # help 1..3
            pg.click("#q-help"); pg.wait_for_timeout(20)
            h1 = pg.evaluate("({steps:document.querySelectorAll('#q-help-steps .help-step').length, clue:PP_PLAYER.ctx().item.clue, txt:document.getElementById('q-help-steps').textContent})")
            pg.click("#q-help"); pg.wait_for_timeout(20)
            h2 = pg.evaluate("""(()=>{const c=PP_PLAYER.ctx(),it=c.item;
               const ruled=[...document.querySelectorAll('#q-body .is-ruled-out')].map(b=>b.dataset.i||b.dataset.ref);
               let rightRuled=false;
               if(it.type=='mc'||it.type=='ms'){const ci=it.choices.map((x,i)=>x.correct?String(i):null).filter(x=>x!==null);rightRuled=ruled.some(r=>ci.indexOf(r)>=0);}
               if(it.type=='hottext'){const a=it.options?it.answer.map(i=>'opt:'+i):it.answer;rightRuled=ruled.some(r=>a.indexOf(r)>=0);}
               const left=[...document.querySelectorAll('#q-body .choice, #q-body .hot-option')].filter(b=>!b.classList.contains('is-ruled-out')&&!b.closest('.part:first-child'));
               let need=0; if(it.type=='mc')need=1; if(it.type=='ms')need=it.pick; if(it.type=='hottext')need=it.answer.length;
               const tooNarrow = need>0 && left.length<=need;
               const reviewLeak = (()=>{const t=PP_ITEMS[it.type].narrowText(it,c.resp,c.set);const a=PP_ITEMS[it.type].answerText(it,c.set);
                  return it.type=='hottext' && a && t.indexOf(a.replace(/^\u201c|\u201d$/g,''))>=0;})();
               const emptyPlace=/Look in\\s*[.,]/.test(document.getElementById('q-help-steps').textContent);
               return {steps:document.querySelectorAll('#q-help-steps .help-step').length, rightRuled, tooNarrow, reviewLeak, emptyPlace};})()""")
            pg.click("#q-help"); pg.wait_for_timeout(20)
            h3 = pg.evaluate("({steps:document.querySelectorAll('#q-help-steps .help-step').length, hints:document.querySelectorAll('#q-body .is-hint').length, dis:document.getElementById('q-help').disabled, check:!document.getElementById('q-check').hidden})")
            if not (h1["steps"] == 1 and h1["clue"] in h1["txt"] and h2["steps"] == 2 and not h2["rightRuled"] and not h2["tooNarrow"] and not h2["reviewLeak"] and not h2["emptyPlace"]
                    and h3["steps"] == 3 and h3["hints"] > 0 and h3["dis"] and h3["check"]):
                hint_fail.append(s + " " + iid + " " + json.dumps([h1["steps"], h2, h3]))
            # the child still enters it
            pg.evaluate(CORRECT); pg.click("#q-check"); pg.wait_for_timeout(30)
            fb = pg.evaluate("document.getElementById('q-feedback').className")
            if "is-right" not in fb: right_fail.append(s + " " + iid)
            pg.click("#q-next"); pg.wait_for_timeout(40)
        done = pg.evaluate("!document.getElementById('stage-done').hidden")
        if not done: right_fail.append(s + " did not reach the done panel")
    ok("3.1 a wrong Check says try again (every item)", not wrong_fail, wrong_fail[:5])
    ok("3.2 a wrong Check never shows the walk-through", not leak_fail, leak_fail[:5])
    ok("3.3 Help me: clue, then narrowing that never rules out the answer, then walk-through; child still answers", not hint_fail, hint_fail[:3])
    ok("3.3b Practice on my own: every authored hint in order, one per press, with nothing narrowed, outlined or revealed (every own item)", not own_hint_fail, own_hint_fail[:3])
    ok("3.4 the correct answer after help is accepted, and every set reaches its done panel", not right_fail, right_fail[:5])

    # ---------- 4. Test mode ----------
    t_fail = []
    # a skill's Practice Together (:p) and Try It Yourself (:y) sets never run as a test (PP-003 RD-4, 13.2);
    # their items are scored in section 3. Every set that can be a test is run here.
    for s in pg.evaluate("PP.sets.filter(s=>!(s.kind=='skill'&&s.part!=='t'&&s.part!=='tB')).map(s=>s.id)"):
        for mode in ("right", "wrong"):
            pg.evaluate("PP_PLAYER.start('%s','test')" % s); pg.wait_for_timeout(80)
            n = pg.evaluate("PP_PLAYER.state().total")
            for i in range(n):
                vis = pg.evaluate("['q-help','q-check'].filter(id=>document.getElementById(id).offsetParent!==null).length + document.querySelectorAll('#q-help-steps .help-step, #q-feedback:not([hidden])').length")
                if vis: t_fail.append(s + " help/check visible in test")
                pg.evaluate(CORRECT if mode == "right" else WRONG); pg.click("#q-next"); pg.wait_for_timeout(25)
            pg.click("#confirm-submit"); pg.wait_for_timeout(80)
            r = pg.evaluate("({score:+document.getElementById('res-score').textContent, of:document.getElementById('res-of').textContent, max:PP.byId['%s'].items.reduce((a,i)=>a+i.points,0), rows:document.querySelectorAll('#res-skills .skill-row').length})" % s)
            if mode == "right" and r["score"] != r["max"]: t_fail.append(s + " all-right scored %s/%s" % (r["score"], r["max"]))
            if mode == "wrong" and r["score"] != 0: t_fail.append(s + " all-wrong scored %s" % r["score"])
            if r["rows"] < 1: t_fail.append(s + " no skill rows")
            if mode == "wrong":
                pg.click("#res-review-btn"); pg.wait_for_timeout(40)
                v = pg.evaluate("""(()=>{const it=document.querySelector('#res-review .review-item:not(.is-right)');
                  const b=it.querySelector('.show-how'); const ans=it.querySelector('.review-answer');
                  const h0=ans.hidden; b.click(); const h1=ans.hidden; b.click(); b.click();
                  return {h0,h1,h3:ans.hidden,steps:it.querySelectorAll('.help-step').length,dis:b.disabled};})()""")
                if not (v["h0"] and v["h1"] and not v["h3"] and v["steps"] == 3 and v["dis"]): t_fail.append(s + " show-me-how " + json.dumps(v))
    # leaving a test in progress asks first
    s0 = pg.evaluate("PP.sets[0].id")
    # the first set that can run as a test (a skill's :p/:y sets cannot, PP-003 RD-4)
    s0t = pg.evaluate("PP.sets.find(s=>!(s.kind=='skill'&&s.part!=='t')).id")
    pg.evaluate("PP_PLAYER.start('%s','test')" % s0t); pg.wait_for_timeout(80)
    pg.evaluate(CORRECT); pg.wait_for_timeout(20)
    n0 = len(dialogs)
    pg.evaluate("PP_APP.goHome()"); pg.wait_for_timeout(60)
    ok("4.2 leaving a test in progress asks first", len(dialogs) == n0 + 1 and "Leave this test" in dialogs[-1], dialogs[-1:] )
    pg.evaluate("PP_PLAYER.start('%s','test')" % s0t); pg.wait_for_timeout(80)
    skip = pg.evaluate("!document.getElementById('q-next').disabled")
    ok("4.3 a test question can be skipped, like the real test", skip)
    pg.evaluate("PP_PLAYER.abandon()")
    # reload keeps the place
    pg.evaluate("PP_PLAYER.start('%s','practice')" % s0); pg.wait_for_timeout(80)
    pg.reload(); pg.wait_for_timeout(700)
    here = pg.evaluate("({screen:PP_APP.current(), set:PP_PLAYER.state().setId})")
    ok("4.4 a reload returns to the same practice set", here["screen"] == "player" and here["set"] == s0, here)
    pg.evaluate("PP_PARENTS.open('standards')"); pg.wait_for_timeout(80)
    pg.evaluate("PP_PLAYER.start('%s','practice')" % s0); pg.wait_for_timeout(80)
    pg.click("#player-back"); pg.wait_for_timeout(80)
    back = pg.evaluate("({screen:PP_APP.current(), tab:PP_PARENTS.tab()})")
    ok("4.5 Back from a set opened in the parent guide returns to the guide", back["screen"] == "parents" and back["tab"] == "standards", back)
    ok("4.1 tests: no hints, full marks when right, 0 when wrong, skill rows, Show me how holds the answer to step 3", not t_fail, t_fail[:5])

    # ---------- 5. Parent guide ----------
    pg.evaluate("PP_PARENTS.open()"); pg.wait_for_timeout(150)
    pt = pg.evaluate("""({txt:document.getElementById('ptab-test').textContent,
      rows:document.querySelectorAll('#ptab-test table').length})""")
    ok("5.1 the test tab shows 60 points, 49 items, 41 scored", all(x in pt["txt"] for x in ["60 points", "49", "41"]), pt["txt"][:120])
    ok("5.2 the test tab links official sources and says not affiliated", "Blueprint" in pt["txt"] and "not affiliated" in pt["txt"])
    pg.click("[data-ptab=standards]"); pg.wait_for_timeout(100)
    st = pg.evaluate("""({count:document.getElementById('std-count').textContent, n:document.querySelectorAll('#std-list details.std').length,
       total:PP_STANDARDS.length})""")
    ok("5.3 every standard is listed", st["n"] == st["total"] and st["total"] > 100, st)
    pg.check(".filter-check input"); pg.wait_for_timeout(60)
    tested = pg.evaluate("""({n:document.querySelectorAll('#std-list details.std').length,
       want:PP_STANDARDS.filter(s=>['reading','writing','both'].indexOf(s.tested)>=0).length,
       badges:[...document.querySelectorAll('#std-list .std-badge')].every(b=>b.textContent==='On the test')})""")
    ok("5.4 'only what is on the test' shows exactly the assessed standards", tested["n"] == tested["want"] and tested["badges"], tested)
    ald = pg.evaluate("""(()=>{const d=document.querySelector('#std-list details.std[data-code="3.T.T.1.c"]'); if(!d) return null; d.open=true;
       return {proficient:d.textContent.indexOf('What Proficient work looks like')>=0, bullet:(PP_ALDS.standards['3.T.T.1'].Proficient[0]||'').slice(0,30), txt:d.textContent};})()""")
    ok("5.5 a tested standard shows GaDOE's Proficient descriptors verbatim", ald and ald["proficient"] and ald["bullet"] in ald["txt"], (ald or {}).get("bullet"))
    gum = pg.evaluate("""PP_STANDARDS.filter(s=>s.gum).every(s=>(s.level==='M'||s.level==='R')?s.tested==='writing':s.tested==='no')""")
    ok("5.6 grammar-chart rows: Master/Reinforce on the test (writing part only, per the blueprint), Introduce/Continue not", gum)
    pg.uncheck(".filter-check input")
    pg.click("[data-ptab=essay]"); pg.wait_for_timeout(60)
    es = pg.evaluate("({items:document.querySelectorAll('#ptab-essay .check-ul li').length, traits:document.querySelectorAll('#ptab-essay .trait').length})")
    ok("5.7 essay tab: 3 rubric traits and the 11-line Writer's Checklist", es["traits"] == 3 and es["items"] == 11, es)

    # ---------- 6. Writing tasks ----------
    for tid in pg.evaluate("PP.tasks.map(t=>t.id)"):
        pg.evaluate("localStorage.clear(); PP_WRITING.start('%s')" % tid); pg.wait_for_timeout(100)
        pg.click("[data-wtab=plan]"); pg.fill("#pl-opinion", "I think yes.");
        pg.click("[data-wtab=write]"); pg.fill("#w-draft", "First paragraph here.\n\nSecond paragraph here.")
        stats = pg.text_content("#w-stats")
        pg.reload(); pg.wait_for_timeout(500)
        pg.evaluate("PP_WRITING.start('%s')" % tid); pg.wait_for_timeout(100)
        kept = pg.evaluate("({o:document.getElementById('pl-opinion').value, d:document.getElementById('w-draft').value})")
        ok("6.1 %s: plan and draft are kept after a reload" % tid, kept["o"] == "I think yes." and "Second paragraph" in kept["d"], kept)
        ok("6.2 %s: word and paragraph count" % tid, "6 words" in stats and "2 paragraphs" in stats, stats)
        pg.click("[data-wtab=check]")
        ok("6.3 %s: the official checklist has 11 lines" % tid, pg.evaluate("document.querySelectorAll('#w-check .check-boxes li').length") == 11)
        pg.click("[data-wtab=score]")
        for k, v in (("purpose", 3), ("evidence", 2), ("conventions", 2)):
            pg.check("input[name=sc-%s][value='%d']" % (k, v))
        ok("6.4 %s: rubric total adds to 7 of 8" % tid, "7 of 8" in pg.text_content(".score-total"))
        ok("6.5 %s: a model essay is available to parents" % tid, pg.evaluate("!!document.querySelector('#w-score details.model')"))
    pg.evaluate("localStorage.clear()")

    # ---------- 9. Skills: home list, Teach / Learn / Practice / Test ----------
    pg.evaluate("localStorage.clear()"); pg.goto(BASE); pg.wait_for_timeout(700)
    pg.fill("#skill-search", "pronoun"); pg.wait_for_timeout(60)
    srch = pg.evaluate("""[...document.querySelectorAll('#skill-list .skill-line')].map(b=>{const L=PP.lessons[b.dataset.code];
       return [b.textContent].concat((L.codes||[L.code]).map(c=>{const s=PP_STANDARDS.find(x=>x.code===c);return [s.code,s.display,s.plain,s.text,s.gum||''].join(' ')})).join(' ').toLowerCase();})""")
    ok("9.1 search narrows the list to matching skills", 0 < len(srch) < 20 and all("pronoun" in t for t in srch), len(srch))
    pg.fill("#skill-search", ""); pg.click("[data-filter=test]"); pg.wait_for_timeout(60)
    ft = pg.evaluate("""(()=>{const lines=[...document.querySelectorAll('#skill-list .skill-line')];
       const T=c=>{const s=PP_STANDARDS.find(x=>x.code===c);return s&&['reading','writing','both'].indexOf(s.tested)>=0};
       const bad=lines.filter(b=>{const k=b.dataset.code;if(k.indexOf('task:')===0)return false;const L=PP.lessons[k];return !(L.codes||[L.code]).some(T)}).map(b=>b.dataset.code);
       const covered=PP_STANDARDS.filter(s=>T(s.code)).every(s=>lines.some(b=>{const L=PP.lessons[b.dataset.code];return L&&(L.codes||[L.code]).indexOf(s.code)>=0}));
       return {n:lines.length,bad,covered};})()""")
    ok("9.2 'On the test' shows only tested skills, and every tested standard is there", not ft["bad"] and ft["covered"] and ft["n"] > 60, ft)
    pg.click("[data-filter=all]")
    lessons = pg.evaluate("Object.keys(PP.lessons)")
    ok("9.3 lessons are loaded", len(lessons) >= 1, len(lessons))
    # every lesson, every step renders
    step_fail = []
    for code in lessons:
        sts = pg.evaluate("(c=>{PP_SKILLS.open(c);return [...document.querySelectorAll('#sk-steps .step-btn')].map(b=>b.dataset.step)})(%s)" % json.dumps(code))
        if len(sts) < 4: step_fail.append(code + " only %d steps" % len(sts))
        for st in sts:
            r = pg.evaluate("""(c=>{PP_SKILLS.open(c,'%s');const p=document.getElementById('sk-panel');
              return {cur:PP_APP.current(), sel:(document.querySelector('#sk-steps [aria-selected=true]')||{}).dataset, len:p.textContent.length,
                      btn:!!p.querySelector('#sk-start-practice,#sk-start-try,#sk-start-test,.flu-w,.trace-sheet,.write-checklist,.learn-next')||'%s'=='teach'};})('%s')""" % (st, st, code.replace("'", "\\'")))
            if r["cur"] != "skill" or not r["sel"] or r["sel"].get("step") != st or r["len"] < 80 or not r["btn"]:
                step_fail.append(code + " " + st + " " + json.dumps(r))
    ok("9.4 every lesson renders every step (five for quiz skills)", not step_fail, step_fail[:4])
    # one full journey on a quiz lesson
    # expansion 2026-10-22: this journey asserts the legacy Try It Yourself (Help me unlocks after one wrong try), so it picks a
    # lesson without core. On a core lesson that behaviour intentionally changes (hints and Show me how from the start, set
    # picker). ENG-04: the same journey also runs on a core lesson (checks "9.5a-core" ... "9.10-core", same steps and intent:
    # help is opt-in and never automatic), and if no lesson without core is left the legacy names FAIL instead of vanishing.
    def own_set_through(sid):
        pg.evaluate("PP_PLAYER.start(%s,'try',{pos:0})" % json.dumps(sid)); pg.wait_for_timeout(60)
        for i in range(pg.evaluate("PP_PLAYER.state().total")):
            if pg.evaluate("PP_PLAYER.ctx().item.type==='cr'"):
                pg.evaluate("(()=>{const c=PP_PLAYER.ctx();c.resp.text='My answer.';c.onChange();})()"); pg.click("#q-check")
            elif not pg.evaluate("PP_PLAYER.state().solved[PP_PLAYER.state().pos]"):
                pg.evaluate(CORRECT); pg.click("#q-check")
            pg.click("#q-next"); pg.wait_for_timeout(20)
    def journey(qcode, core):
        sx = "-core" if core else ""
        nm = lambda n, t: n + sx + " " + t + (" [core lesson %s]" % qcode if core else "")
        pg.evaluate("PP_SKILLS.open('%s')" % qcode); pg.wait_for_timeout(60)
        pg.click("[data-step=learn]"); pg.wait_for_timeout(40)
        for _ in range(12):
            bs = pg.query_selector_all(".learn-next:not([hidden])")
            if not bs: break
            bs[0].click()
        pg.click("[data-step=practice]"); pg.click("#sk-start-practice"); pg.wait_for_timeout(80)
        for i in range(pg.evaluate("PP_PLAYER.state().total")):
            pg.evaluate(CORRECT); pg.click("#q-check"); pg.click("#q-next"); pg.wait_for_timeout(20)
        dn = pg.evaluate("({done:!document.getElementById('stage-done').hidden, t:document.getElementById('done-test').textContent})")
        pg.click("#done-test"); pg.wait_for_timeout(80)
        if core:
            pick = pg.evaluate("({cur:PP_APP.current(), step:PP_SKILLS.step(), sets:document.querySelectorAll('#sk-panel .own-set').length})")
            pg.click("#sk-start-try"); pg.wait_for_timeout(80)
        intry = pg.evaluate("({s:PP_PLAYER.state(), help:!document.getElementById('q-help').hidden, hint:!document.getElementById('q-teach').hidden, how:!document.getElementById('q-hint')&&!document.getElementById('q-how'), steps:document.querySelectorAll('#q-help-steps .help-step').length, open:!document.getElementById('teach-panel').hidden})")   # question-first: Teach Me replaces the hint and Show me how buttons
        if core:
            ok(nm("9.5a", "Practice Together leads to the Try step's set picker; on my own, Help me is absent and Teach Me is offered (hints and the answer are inside it), nothing shown yet"),
               dn["done"] and "on my own" in dn["t"].lower() and pick == {"cur": "skill", "step": "try", "sets": 3} and intry["s"]["setId"] == "SK:%s:y" % qcode
               and not intry["help"] and intry["hint"] and intry["how"] and intry["steps"] == 0 and not intry["open"], (dn, pick, intry))
        else:
            ok("9.5a Practice Together leads to Try It Yourself, where Help me starts hidden", dn["done"] and "yourself" in dn["t"].lower() and intry["s"]["setId"] == "SK:%s:y" % qcode and not intry["help"], (dn, intry))
        pg.evaluate(WRONG); pg.click("#q-check"); pg.wait_for_timeout(30)
        if core:
            w = pg.evaluate("({hint:!document.getElementById('q-teach').hidden, steps:document.querySelectorAll('#q-help-steps .help-step').length, open:!document.getElementById('teach-panel').hidden, outline:document.querySelectorAll('#q-body .is-hint').length})")
            ok(nm("9.5b", "after one wrong try, help stays opt-in: Teach Me is offered but nothing is shown or outlined on its own"), w == {"hint": True, "steps": 0, "open": False, "outline": 0}, w)
        else:
            ok("9.5b in Try It Yourself, Help me unlocks after one wrong try", pg.evaluate("!document.getElementById('q-help').hidden"))
        pg.evaluate(CORRECT); pg.click("#q-check"); pg.click("#q-next"); pg.wait_for_timeout(20)
        if core:
            for i in range(1, intry["s"]["total"]):
                if pg.evaluate("PP_PLAYER.ctx().item.type==='cr'"):
                    pg.evaluate("(()=>{const c=PP_PLAYER.ctx();c.resp.text='My answer.';c.onChange();})()"); pg.click("#q-check")
                else:
                    pg.evaluate(CORRECT); pg.click("#q-check")
                pg.click("#q-next"); pg.wait_for_timeout(20)
            own_set_through("SK:%s:y2" % qcode); own_set_through("SK:%s:y3" % qcode)
            want_t = pg.evaluate("PP_SKILLS.checkSetId(%s)" % json.dumps(qcode))
        else:
            for i in range(1, intry["s"]["total"]):
                pg.evaluate(CORRECT); pg.click("#q-check"); pg.click("#q-next"); pg.wait_for_timeout(20)
            want_t = "SK:%s:t" % qcode
        dn2 = pg.evaluate("document.getElementById('done-test').textContent")
        pg.click("#done-test"); pg.wait_for_timeout(80)
        intest = pg.evaluate("PP_PLAYER.state()")
        ok(nm("9.5", ("set 3 of Practice on my own finishes and 'Take the skill check' opens the check the site picks" if core else "Try It Yourself finishes and 'Take the skill check' opens the separate test set")) if core
           else "9.5 Try It Yourself finishes and 'Take the skill check' opens the separate test set",
           "skill check" in dn2 and intest["setId"] == want_t and intest["mode"] == "test", (dn2, intest["setId"], want_t))
        for i in range(intest["total"]):
            pg.evaluate(WRONG); pg.click("#q-next"); pg.wait_for_timeout(20)
        pg.click("#confirm-submit"); pg.wait_for_timeout(60)
        g1 = pg.text_content("#res-guidance")
        pg.click("#res-again"); pg.wait_for_timeout(60)
        for i in range(pg.evaluate("PP_PLAYER.state().total")):
            pg.evaluate(CORRECT); pg.click("#q-next"); pg.wait_for_timeout(20)
        pg.click("#confirm-submit"); pg.wait_for_timeout(60)
        g2 = pg.text_content("#res-guidance")
        ok(nm("9.6", "a failed check says how many points pass it; a passing check says it passed") if core else "9.6 a failed check says how many points pass it; a passing check says it passed",
           "points to pass" in g1 and "passed the skill check" in g2, (g1, g2))
        pg.click("#res-back"); pg.wait_for_timeout(80)
        bk = pg.evaluate("({cur:PP_APP.current(), code:PP_SKILLS.current(), step:PP_SKILLS.step(), done:document.querySelectorAll('#sk-steps .step-btn.is-done').length})")
        ok(nm("9.7", "Back from a skill test returns to the skill's Test step, with all five steps checked") if core else "9.7 Back from a skill test returns to the skill's Test step, with all five steps checked",
           bk["cur"] == "skill" and bk["code"] == qcode and bk["step"] == "test" and bk["done"] == 5, bk)
        h0 = pg.evaluate("location.hash"); pg.go_back(); pg.wait_for_timeout(250)
        h1 = pg.evaluate("[PP_APP.current(), location.hash]")
        same = h1[0] == "skill" and pg.evaluate("PP_SKILLS.current()") == qcode
        ok(nm("9.7b", "one phone Back from there leaves that skill (no duplicate history entry)") if core else "9.7b one phone Back from there leaves that skill (no duplicate history entry)", not same, (h0, h1))
        pg.go_forward(); pg.wait_for_timeout(250)
        pg.click("#skill-back"); pg.wait_for_timeout(80)
        hm = pg.evaluate("""(c=>({cur:PP_APP.current(), focus:document.activeElement.dataset.code, txt:document.activeElement.getAttribute('aria-label')||''}))('%s')""" % qcode)
        ok(nm("9.8", "All skills returns home on that skill's row, now marked Passed the skill check") if core else "9.8 All skills returns home on that skill's row, now marked Passed the skill check",
           hm["cur"] == "home" and hm["focus"] == qcode and "Passed the skill check" in hm["txt"], hm)
        pg.reload(); pg.wait_for_timeout(700)
        kept = pg.evaluate("PP_SKILLS.status('%s')" % qcode)
        ok(nm("9.9", "progress is kept on the device after a reload") if core else "9.9 progress is kept on the device after a reload", kept == "mastered", kept)
        pg.goto(BASE + "#skill/" + qcode + "/learn"); pg.wait_for_timeout(700)
        ok(nm("9.10", "a skill page address opens that skill and step") if core else "9.10 a skill page address opens that skill and step", pg.evaluate("PP_APP.current()=='skill' && PP_SKILLS.step()=='learn'"))
    qcode = next((c for c in lessons if pg.evaluate("!!PP.byId['SK:%s:t'] && !!PP.byId['SK:%s:y'] && !PP.lessons['%s'].core" % (c, c, c))), None)
    if qcode: journey(qcode, False)
    else:
        for n in ("9.5a", "9.5b", "9.5", "9.6", "9.7", "9.7b", "9.8", "9.9", "9.10"):
            ok(n + " legacy journey: a quiz lesson without core is needed for this check (none is left; retire or rewrite it)", False, "no lesson without core")
    ccode = next((c for c in lessons if pg.evaluate("!!PP.byId['SK:%s:t'] && !!PP.lessons['%s'].core && PP.byId['SK:%s:y'].items[0].type!=='cr'" % (c, c, c))), None)
    if ccode: journey(ccode, True)
    else: ok("9.5-core a quiz lesson with core exists for the core journey", False, "no core lesson")
    # pending and habit pages
    pend = pg.evaluate("PP_STANDARDS.filter(s=>!PP_SKILLS.lessonFor(s.code)).map(s=>s.code)")
    pf = []
    for c in pend:
        r = pg.evaluate("""(c=>{PP_SKILLS.open(c);return {cur:PP_APP.current(), steps:!document.getElementById('sk-steps').hidden, t:document.getElementById('sk-panel').textContent}})('%s')""" % c)
        if r["cur"] != "skill" or r["steps"] or len(r["t"]) < 60: pf.append(c)
    ok("9.11 standards without a lesson open an honest page (no empty steps)", not pf, pf[:4])
    # fluency timer
    flu = next((c for c in lessons if pg.evaluate("!!(PP.lessons['%s'].activity&&PP.lessons['%s'].activity.kind=='fluency')" % (c, c))), None)
    if flu:
        pg.evaluate("PP_SKILLS.open('%s','practice')" % flu); pg.wait_for_timeout(60)
        pg.click("text=Start the minute")
        ws = pg.query_selector_all(".flu-w"); ws[2].click(); ws[5].click(); ws[5].click()
        pg.evaluate("(()=>{const n=Date.now.bind(Date);Date.now=()=>n()+61000;})()"); pg.wait_for_timeout(500)
        pg.query_selector_all(".flu-w")[99].click(); pg.wait_for_timeout(60)
        fr = pg.text_content(".flu-out")
        ok("9.12 fluency timer: one minute, 100 words read, 1 missed = 99 words correct per minute, 99% accuracy", "99 words correct per minute" in fr and "99% accuracy" in fr, fr[:120])
        pg.evaluate("(()=>{const n=Date.now.bind(Date);Date.now=()=>n()-61000;})()")
    chk_code = next((c for c in lessons if pg.evaluate("!!PP.lessons['%s'].check" % c)), None)
    if chk_code:
        pg.evaluate("PP_SKILLS.open('%s','test')" % chk_code); pg.wait_for_timeout(60)
        d0 = pg.evaluate("document.querySelector('#sk-panel .btn-primary').disabled")
        for cb in pg.query_selector_all("#sk-panel input[type=checkbox]"): cb.check()
        d1 = pg.evaluate("document.querySelector('#sk-panel .btn-primary').disabled")
        pg.click("text=Mark as checked by a grown-up"); pg.wait_for_timeout(40)
        ok("9.13 grown-up check: 'Checked by a grown-up' only after every line is checked", d0 and not d1 and pg.evaluate("PP_SKILLS.status('%s')" % chk_code) == "mastered"
           and "Checked by a grown-up" in pg.text_content("#sk-panel"), (d0, d1))
    curs = pg.evaluate("document.fonts.load('20px \"PP Cursive\"').then(f=>f.length>0)")
    ok("9.14 the cursive font loads from the site itself", curs)
    pg.evaluate("localStorage.clear()")

    # ---------- 10. 2.1: clue words, cheat sheet, habits ----------
    ck = next((c for c in lessons if pg.evaluate("(k=>!!(PP.byId['SK:'+k+':p']&&PP.byId['SK:'+k+':p'].clueWords&&PP.byId['SK:'+k+':p'].passages.length))(%s)" % json.dumps(c))), None)
    if ck:
        pg.evaluate("PP_PLAYER.start(%s,'practice')" % json.dumps("SK:" + ck + ":p")); pg.wait_for_timeout(80)
        c0 = pg.evaluate("({vis:!document.getElementById('clue-toggle').hidden, marks:document.querySelectorAll('#passage-pane-body mark.clue-w').length})")
        pg.evaluate("document.getElementById('player-grid').dataset.pane='passage'")
        pg.click("#clue-toggle"); pg.wait_for_timeout(30)
        c1 = pg.evaluate("document.getElementById('passage-pane').classList.contains('show-clues')")
        ok("10.1 Show clue words highlights the clue words in a practice passage", c0["vis"] and c0["marks"] > 0 and c1, (ck, c0, c1))
        pg.evaluate("PP_PLAYER.abandon()")
        if pg.evaluate("!!PP.byId[%s]" % json.dumps("SK:" + ck + ":t")):
            pg.evaluate("PP_PLAYER.start(%s,'test')" % json.dumps("SK:" + ck + ":t")); pg.wait_for_timeout(80)
            ok("10.2 the clue-word button is off in tests", pg.evaluate("document.getElementById('clue-toggle').hidden"))
            pg.evaluate("PP_PLAYER.abandon()")
    pg.evaluate("PP_APP.openClues()"); pg.wait_for_timeout(80)
    cs = pg.evaluate("({rows:document.querySelectorAll('#clue-sheet tbody tr').length, scr:PP_APP.current()})")
    ok("10.3 the Clue Word Cheat Sheet shows the six structures", cs["scr"] == "clues" and cs["rows"] == 6, cs)
    pg.evaluate("PP_APP.openHabits()"); pg.wait_for_timeout(80)
    hb = pg.evaluate("({n:document.querySelectorAll('#habit-list .skill-line').length, want:PP_STANDARDS.filter(s=>s.tested==='embedded').length})")
    ok("10.4 Everyday habits lists every K-12 practice", hb["n"] == hb["want"] and hb["n"] > 50, hb)
    pg.evaluate("PP_APP.goHome()"); pg.wait_for_timeout(80)
    un = pg.evaluate("({t:(document.getElementById('up-next-btn')||{}).textContent||''})")
    ok("10.5 Up next names a skill with its id", bool(re.match(r"^[A-Z]{1,2}\d+ · ", un["t"])), un)

    # ---------- 11. PP-003: honest progress, dated attempts, grown-up checks, fluency notes ----------
    PROG = "JSON.parse(localStorage.getItem('pp.progress.v1')||'null')"
    def sit(code, right):
        """Take one skill check through the UI: every answer right or every answer wrong."""
        pg.evaluate("PP_PLAYER.start(%s,'test')" % json.dumps("SK:" + code + ":t")); pg.wait_for_timeout(60)
        for i in range(pg.evaluate("PP_PLAYER.state().total")):
            pg.evaluate(CORRECT if right else WRONG); pg.click("#q-next"); pg.wait_for_timeout(15)
        pg.click("#confirm-submit"); pg.wait_for_timeout(60)
        return pg.text_content("#res-guidance")
    def fresh(seed=None):
        pg.evaluate("localStorage.clear()")
        if seed is not None: pg.evaluate("s=>localStorage.setItem('pp.progress.v1',s)", json.dumps(seed))
        pg.goto(BASE + "#"); pg.reload(); pg.wait_for_timeout(700)
    def row_label(code):
        return pg.evaluate("(c=>{const b=document.querySelector('#skill-list .skill-line[data-code=\"'+c+'\"]');return b?{aria:b.getAttribute('aria-label'),review:!!b.querySelector('.sl-review')}:null})(%s)" % json.dumps(code))
    quiz = pg.evaluate("Object.keys(PP.lessons).filter(k=>PP.byId['SK:'+k+':t']&&PP_SKILLS.skillId(k))")
    A, B, C, D = quiz[0], quiz[1], quiz[2], quiz[3]
    # 11.1 opening a lesson from the list writes nothing
    fresh()
    pg.click('#skill-list .skill-line[data-code="%s"]' % A); pg.wait_for_timeout(100)
    ok("11.1 opening a lesson from the skill list writes no progress", pg.evaluate("PP_APP.current()") in ("skill", "player") and pg.evaluate(PROG) is None, pg.evaluate(PROG))
    # 11.2 the test items cannot be run as hinted practice
    pg.goto(BASE + "#play/SK:%s:t/practice" % A); pg.wait_for_timeout(400)
    lp = pg.evaluate("({s:PP_PLAYER.state(), help:document.getElementById('q-help').offsetParent!==null, hash:location.hash})")
    for i in range(lp["s"]["total"]):
        pg.evaluate(CORRECT); pg.click("#q-next"); pg.wait_for_timeout(15)
    pg.click("#confirm-submit"); pg.wait_for_timeout(60)
    pg.evaluate("PP_SKILLS.recordPractice(%s,'t')" % json.dumps(A))
    ra = (pg.evaluate(PROG) or {}).get(A, {})
    ok("11.2 #play/SK:<k>:t/practice runs as a check (no Help me) and never records practice", lp["s"]["mode"] == "test" and not lp["help"] and lp["hash"].endswith("/test")
       and not ra.get("practiced") and ra.get("tries") == 1, (lp, ra))
    # 11.3 a first pass stores the new dated fields; old fields keep their meaning
    fresh()
    sit(B, False)
    pg.click("#res-review-btn"); pg.wait_for_timeout(40)              # the child sees the answers
    seen = (pg.evaluate(PROG) or {}).get(B, {})
    g2 = sit(B, True)
    rb = pg.evaluate(PROG)[B]
    ymd = re.compile(r"^\d{4}-\d{2}-\d{2}$")
    ok("11.3 a pass stores passedAt, passTry, passBy, lastPassAt and one attempt per try; mastered/best/tries unchanged in meaning",
       rb.get("mastered") is True and rb.get("tries") == 2 and rb["best"]["got"] == rb["best"]["max"] and ymd.match(rb.get("passedAt", "")) and rb.get("passTry") == 2
       and rb.get("passBy") == "test" and rb.get("lastPassAt") == rb.get("passedAt") and len(rb.get("attempts", [])) == 2
       and [a["ok"] for a in rb["attempts"]] == [False, True] and [a["n"] for a in rb["attempts"]] == [1, 2] and "✓ Passed" in g2, rb)
    ok("11.4 See my answers is recorded, and the next pass is flagged afterAnswers", bool(seen.get("answersSeenAt")) and rb["attempts"][0]["afterAnswers"] is False and rb["attempts"][1]["afterAnswers"] is True, rb.get("attempts"))
    pg.evaluate("PP_SKILLS.open(%s,'test')" % json.dumps(B)); pg.wait_for_timeout(60)
    card = pg.text_content("#sk-panel")
    ok("11.5 the skill page shows the pass honestly: date, 'Passed on try 2', 'after seeing the answers'", "Passed the skill check on " in card and "passed on try 2." in card
       and "same questions each time" in card and "passed after seeing the answers on an earlier try." in card, card[:300])
    sit(C, True)
    rc = pg.evaluate(PROG)[C]
    ok("11.6 a first-try pass without seeing answers: passTry 1, afterAnswers false", rc.get("passTry") == 1 and rc["attempts"][0]["afterAnswers"] is False and not rc.get("answersSeenAt"), rc)
    # 11.7 fail after a pass: still passed, last attempt failed, review suggested
    sit(C, False)
    rc = pg.evaluate(PROG)[C]
    pg.evaluate("PP_APP.goHome()"); pg.wait_for_timeout(100)
    lc = row_label(C)
    ok("11.7 a fail after a pass keeps the pass, logs ok:false, and shows 'review'", rc.get("mastered") is True and rc["best"]["got"] == rc["best"]["max"] and rc["attempts"][-1]["ok"] is False
       and lc and lc["review"] and "Review suggested" in lc["aria"], (rc, lc))
    # 11.8 an old (2.1-style) saved record still loads intact
    legacy = {D: {"taught": True, "tries": 2, "best": {"got": 7, "max": 7}, "mastered": True}, "_ui": {"lastCat": "reading"}}
    chk_code2 = next((c for c in lessons if pg.evaluate("!!PP.lessons['%s'].check&&!PP.byId['SK:%s:t']" % (c, c))), None)
    if chk_code2: legacy[chk_code2] = {"checks": [True] * 5, "mastered": True}
    fresh(legacy)
    st = pg.evaluate(PROG)
    ld, lr = row_label(D), (row_label(chk_code2) if chk_code2 else {"aria": "Checked by a grown-up", "review": False})
    ok("11.8 a 2.1 record loads intact: old fields unchanged, legacyUndated + firstSeenPassedAt added, no invented passedAt",
       all(st[D][k] == v for k, v in legacy[D].items()) and st[D].get("legacyUndated") is True and ymd.match(st[D].get("firstSeenPassedAt", "")) and "passedAt" not in st[D]
       and st["_ui"] == legacy["_ui"] and pg.evaluate("PP_SKILLS.status(%s)" % json.dumps(D)) == "mastered", st)
    ok("11.9 old passes are labelled honestly: 'Passed the skill check' for a check, 'Checked by a grown-up' for a hands-on check, no review yet",
       ld and "Passed the skill check" in ld["aria"] and not ld["review"] and "Checked by a grown-up" in lr["aria"] and "Passed the skill check" not in lr["aria"], (ld, lr))
    # 11.10 review suggested by date; rendering never writes
    from datetime import date, timedelta
    old = (date.today() - timedelta(days=10)).isoformat(); new = (date.today() - timedelta(days=2)).isoformat()
    seed = {A: {"tries": 1, "best": {"got": 6, "max": 6}, "mastered": True, "passedAt": old, "passTry": 1, "passBy": "test", "lastPassAt": old,
                "attempts": [{"d": old, "got": 6, "max": 6, "ok": True, "n": 1, "afterAnswers": False}]},
            B: {"tries": 1, "best": {"got": 6, "max": 6}, "mastered": True, "passedAt": new, "passTry": 1, "passBy": "test", "lastPassAt": new,
                "attempts": [{"d": new, "got": 6, "max": 6, "ok": True, "n": 1, "afterAnswers": False}]}}
    fresh(seed)
    s0 = pg.evaluate("localStorage.getItem('pp.progress.v1')")
    ra, rb2 = row_label(A), row_label(B)
    pg.evaluate("PP_SKILLS.open(%s,'test')" % json.dumps(A)); pg.wait_for_timeout(60)
    ca = pg.text_content("#sk-panel")
    pl = pg.text_content("#home-progress")
    ok("11.10 'review' shows 10 days after a pass, not 2 days after; the page says so; rendering changes nothing stored",
       ra["review"] and not rb2["review"] and "Review suggested" in ca and "10 days" in ca and "due for a review" in pl
       and pg.evaluate("localStorage.getItem('pp.progress.v1')") == s0, (ra, rb2, ca[:200], pl))
    # 11.11 grown-up check-off is stored and shown apart from a scored check
    if chk_code:
        fresh()
        pg.evaluate("PP_SKILLS.open('%s','test')" % chk_code); pg.wait_for_timeout(60)
        w0 = pg.evaluate(PROG)
        for cb in pg.query_selector_all("#sk-panel input[type=checkbox]"): cb.check()
        pg.click("#sk-grownup-check"); pg.wait_for_timeout(40)
        rg = pg.evaluate(PROG)[chk_code]; panel = pg.text_content("#sk-panel")
        pg.evaluate("PP_APP.goHome()"); pg.wait_for_timeout(100)
        lg = row_label(chk_code)
        ok("11.11 grown-up check: passBy 'grownup', mastered kept for counts, labelled 'Checked by a grown-up' (not 'Passed the skill check')",
           w0 is None and rg.get("mastered") is True and rg.get("passBy") == "grownup" and ymd.match(rg.get("passedAt", "")) and "Checked by a grown-up" in panel
           and "not a scored skill check" in panel and lg and "Checked by a grown-up" in lg["aria"] and "Passed the skill check" not in lg["aria"], (w0, rg, lg))
    # 11.12 fluency: labelled a home tool; softened verdict; grown-up observations saved with the reading
    if flu:
        fresh()
        pg.evaluate("PP_SKILLS.open('%s','practice')" % flu); pg.wait_for_timeout(60)
        note = pg.text_content(".fluency")
        pg.click("text=Start the minute")
        ws = pg.query_selector_all(".flu-w"); ws[2].click(); ws[5].click(); ws[5].click()
        pg.evaluate("(()=>{const n=Date.now.bind(Date);Date.now=()=>n()+61000;})()"); pg.wait_for_timeout(500)
        pg.query_selector_all(".flu-w")[99].click(); pg.wait_for_timeout(60)
        fo = pg.text_content(".flu-out")
        pg.check(".fo-expr input[value='2']"); pg.check(".fo-pauses input[value='sometimes']"); pg.check(".fo-retell input[value='partly']")
        pg.wait_for_timeout(40)
        pg.evaluate("(()=>{const n=Date.now.bind(Date);Date.now=()=>n()-61000;})()")
        fl = pg.evaluate(PROG)[flu]["fluency"][-1]
        hist = pg.text_content(".flu-hist-box")
        ok("11.12 fluency timer says it is a home practice tool, not a test or screener", "home practice tool" in note and "not a school reading test" in note, note[:200])
        ok("11.13 fluency verdict is for this one reading and notes passages differ", "For this one reading" in fo and "Passages differ in difficulty" in fo and "Right on track" not in fo, fo[:300])
        ok("11.14 grown-up observations (expression 1-3, pauses, self-corrections from the second tap, retell) are saved with the reading and shown as 'Grown-up observed'",
           fl.get("wcpm") == 99 and fl.get("obs") == {"selfFix": 1, "expr": 2, "pauses": "sometimes", "retell": "partly"} and ymd.match(fl.get("d", ""))
           and "Grown-up observed" in hist and "1 self-correction" in hist and "expression and phrasing 2 of 3" in hist, (fl, hist[-200:]))
    # 11.15 no 'mastered' / 'mastery' left in what parents and children read (Georgia's GUM 'Master' labels allowed)
    fresh()
    sit(A, False); res1 = pg.evaluate("document.body.innerText")
    pg.click("#res-again"); pg.wait_for_timeout(60); sit(A, True); res2 = pg.evaluate("document.body.innerText")
    texts = {"results-fail": res1, "results-pass": res2}
    pg.evaluate("PP_APP.goHome()"); pg.wait_for_timeout(100); texts["home"] = pg.evaluate("document.body.innerText")
    pg.click("[data-filter=todo]"); pg.wait_for_timeout(60); texts["home-filter"] = pg.evaluate("document.body.innerText"); pg.click("[data-filter=all]")
    for st_ in ("test", "try"):
        pg.evaluate("PP_SKILLS.open(%s,'%s')" % (json.dumps(A), st_)); pg.wait_for_timeout(60)
        pg.evaluate("document.querySelectorAll('details').forEach(d=>d.open=true)")
        texts["skill " + st_] = pg.evaluate("document.body.innerText")
    if chk_code:
        pg.evaluate("PP_SKILLS.open('%s','test')" % chk_code); pg.wait_for_timeout(60); texts["grown-up check"] = pg.evaluate("document.body.innerText")
    for t in ("test", "standards", "essay", "plan"):
        pg.evaluate("PP_PARENTS.open('%s')" % t); pg.wait_for_timeout(80)
        pg.evaluate("document.querySelectorAll('details').forEach(d=>d.open=true)")
        texts["parents " + t] = pg.evaluate("document.querySelector('#ptab-%s').innerText" % t)
    GUM = re.compile(r"3\.L\.GC\.1 · Master|Master by the end of grade 3|Continue \(not yet mastered\)|Master and Reinforce|grade 3 row: Master|Master, Reinforce|[Gg]rammar chart:? Master\b|Master ?/ ?Reinforce")
    left = []
    for k, t in texts.items():
        for m in re.finditer(r"\bmaster(ed|y)?\b", GUM.sub("", t), re.I):
            left.append(k + ": " + GUM.sub("", t)[max(0, m.start() - 40):m.end() + 20].replace("\n", " "))
    ok("11.15 no 'mastered' or 'mastery' in home, skill, results or parent text (GUM 'Master' labels allowed)", not left, left[:6])
    ok("11.16 the parent plan says a skill check is not a Georgia Milestones score", "not a Georgia Milestones score" in texts["parents plan"] and "Checked by a grown-up" in texts["parents plan"])
    ok("11.17 the skill page says a passed check is not a Milestones score, near the Proficient descriptors", "not a Milestones score or achievement level" in texts["skill test"], "")
    # 11.18 cursive word gaps are about one lowercase o (3.F.H.4.b)
    cw = pg.evaluate("""(async()=>{PP_SKILLS.open('3.F.H.4.b','teach'); await document.fonts.ready; await new Promise(r=>setTimeout(r,200));
      const m=el=>{const cs=getComputedStyle(el);const s=document.createElement('span');s.style.cssText='position:absolute;visibility:hidden;white-space:pre;font:'+cs.font+';word-spacing:'+cs.wordSpacing;
        document.body.appendChild(s);s.textContent='o';const o=s.getBoundingClientRect().width;s.textContent='a a';const w1=s.getBoundingClientRect().width;s.textContent='aa';const w2=s.getBoundingClientRect().width;s.remove();return (w1-w2)/o;};
      const a=m(document.querySelector('#sk-panel .cursive')); PP_SKILLS.open('3.F.H.4.b','practice'); await new Promise(r=>setTimeout(r,100));
      return [a, m(document.querySelector('.trace-row'))];})()""") if pg.evaluate("!!PP.lessons['3.F.H.4.b']") else [1, 1]
    ok("11.18 cursive word gap is about one lowercase o wide in the model and on the tracing sheet", all(0.8 <= x <= 1.25 for x in cw), cw)
    pg.evaluate("localStorage.clear()")

    # ---------- 12. PP-003 UX fixes (docs/audits/PP-003-UX-FUNCTIONAL-AUDIT.md D1, D4, D5, D7, D8, D9, D15, D16) ----------
    def page12(w, h, phone):
        q = newpage(b, viewport={"width": w, "height": h}, is_mobile=phone, has_touch=phone)
        q.route("**/fonts.g*/**", lambda r: r.abort())
        q.on("pageerror", lambda e: errors.append("[12 %d] %s" % (w, e)))
        q.on("dialog", lambda d: d.accept())
        return q
    def goto12(q, hash_=""):
        q.goto(BASE + hash_); q.wait_for_function("document.getElementById('build-badge').textContent.length > 0"); q.wait_for_timeout(200)
    HEAD = """(()=>{const h=document.querySelector('#sk-panel .panel-h').getBoundingClientRect(), s=document.getElementById('sk-steps').getBoundingClientRect();
        return {step:PP_SKILLS.step(), top:Math.round(h.top), bottom:Math.round(h.bottom), bar:Math.round(s.bottom), vh:innerHeight, y:Math.round(scrollY)};})()"""
    land_fail = []
    for w, hgt, phone in ((390, 844, True), (1366, 900, False)):
        q = page12(w, hgt, phone)
        for code in ("3.T.T.1.b", "3.F.F.1.b"):
            goto12(q, "#skill/" + code)
            if q.evaluate("PP_APP.current()") != "skill": continue
            steps = q.evaluate("[...document.querySelectorAll('#sk-steps .step-btn')].map(b=>b.dataset.step)")
            for i, s_ in enumerate(steps[:-1]):
                q.evaluate("(s=>PP_SKILLS.open(%s,s))('%s')" % (json.dumps(code), s_))
                q.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)"); q.wait_for_timeout(40)
                q.click("#sk-panel .step-next"); q.wait_for_timeout(80)
                v = q.evaluate(HEAD)
                # the heading sits just below the sticky step bar (or lower, only when the page is too short to scroll)
                if not (v["step"] == steps[i + 1] and v["bar"] - 1 <= v["top"] and v["bottom"] <= v["vh"] and (v["top"] <= v["bar"] + 40 or v["y"] == 0 or v["y"] >= q.evaluate("document.documentElement.scrollHeight-innerHeight") - 1)):
                    land_fail.append("%d %s Next %s->%s %s" % (w, code, s_, steps[i + 1], json.dumps(v)))
            # a step tab pressed from the bottom of a long step
            q.evaluate("PP_SKILLS.open(%s,'teach')" % json.dumps(code))
            q.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)"); q.wait_for_timeout(40)
            q.click('#sk-steps [data-step="%s"]' % steps[-1]); q.wait_for_timeout(80)
            v = q.evaluate(HEAD)
            if not (v["bar"] - 1 <= v["top"] and v["bottom"] <= v["vh"]): land_fail.append("%d %s tab teach->%s %s" % (w, code, steps[-1], json.dumps(v)))
        q.close()
    ok("12.1 D1: Next and the step tabs land with the step heading visible just below the sticky step bar (390 and 1366)", not land_fail, land_fail[:3])

    q = page12(390, 844, True)
    H = lambda: q.evaluate("location.hash") if q.url.startswith("http") else "LEFT"
    # D4: a practice set opened from a section, then the in-page Back, then the phone's Back
    goto12(q, "#mixed")
    q.click('#section-grid button[data-section="reading"]'); q.wait_for_timeout(150)
    sid = q.evaluate("PP.sets.find(s=>s.section==='reading').id")
    q.click('#set-grid button[data-set="%s"][data-mode="practice"]' % sid); q.wait_for_timeout(150)
    q.click("#player-back"); q.wait_for_timeout(250); h1 = H()
    q.go_back(); q.wait_for_timeout(250); h2 = H()
    # D4: the section's own Back button, then the phone's Back
    goto12(q, "#clues"); q.evaluate("PP_APP.openMixed()"); q.wait_for_timeout(80)
    q.click('#section-grid button[data-section="reading"]'); q.wait_for_timeout(150)
    q.click('#screen-section [data-go="mixed"]'); q.wait_for_timeout(250); h3 = H()
    q.go_back(); q.wait_for_timeout(250); h4 = H()
    # D4: an essay opened from Home, then its Back, then the phone's Back
    goto12(q, "#clues"); q.evaluate("PP_APP.goHome()"); q.wait_for_timeout(80)
    tid = q.evaluate("PP.tasks[0].id")
    q.click('#skill-list .skill-line[data-code="task:%s"]' % tid); q.wait_for_timeout(150)
    q.click("#write-back"); q.wait_for_timeout(250); h5 = [H(), q.evaluate("PP_APP.current()")]
    q.go_back(); q.wait_for_timeout(250); h6 = H()
    ok("12.2 D4: after the in-page Back from a set, a section or an essay, one phone Back moves on (no dead press)",
       h1 == "#reading" and h2 == "#mixed" and h3 == "#mixed" and h4 == "#clues" and h5 == ["", "home"] and h6 == "#clues", (h1, h2, h3, h4, h5, h6))

    # D5: Forward or reload onto a finished practice or test shows "you finished this", never question 1
    def stage():
        return q.evaluate("['work','confirm','results','done','again'].filter(s=>document.getElementById('stage-'+s)&&!document.getElementById('stage-'+s).hidden)[0]||null")
    goto12(q, "#skill/3.T.T.1.b/practice")
    q.click("#sk-start-practice"); q.wait_for_timeout(150)
    for i in range(q.evaluate("PP_PLAYER.state().total")):
        q.evaluate(CORRECT); q.evaluate("document.getElementById('q-check').click(); document.getElementById('q-next').click()"); q.wait_for_timeout(30)
    p0 = q.evaluate("localStorage.getItem('pp.progress.v1')")
    s0 = stage(); q.go_back(); q.wait_for_timeout(250); q.go_forward(); q.wait_for_timeout(300)
    s1 = [stage(), H(), q.evaluate("(document.getElementById('again-start')||{}).textContent||''")]
    q.reload(); q.wait_for_timeout(800); s2 = stage()
    p1 = q.evaluate("localStorage.getItem('pp.progress.v1')")
    q.evaluate("(document.getElementById('again-start')||{click(){}}).click()"); q.wait_for_timeout(150)
    s3 = [stage(), q.evaluate("PP_PLAYER.state().pos")]
    q.evaluate("PP_PLAYER.start('SK:3.T.T.1.b:t','test')"); q.wait_for_timeout(150)
    for i in range(q.evaluate("PP_PLAYER.state().total")):
        q.evaluate(CORRECT); q.evaluate("document.getElementById('q-next').click()"); q.wait_for_timeout(25)
    q.click("#confirm-submit"); q.wait_for_timeout(120)
    p2 = q.evaluate("localStorage.getItem('pp.progress.v1')")
    q.reload(); q.wait_for_timeout(800)
    s4 = [stage(), q.evaluate("(document.getElementById('again-line')||{}).textContent||''")]
    p3 = q.evaluate("localStorage.getItem('pp.progress.v1')")
    ok("12.3 D5: Forward or reload on a finished practice or test shows a 'you finished this' screen (not question 1); Start again starts at question 1; nothing stored changes",
       s0 == "done" and s1[0] == "again" and s1[1].startswith("#play/") and "again" in s1[2].lower() and s2 == "again" and s3 == ["work", 0]
       and s4[0] == "again" and "Your score was" in s4[1] and p0 == p1 and p2 == p3, (s0, s1, s2, s3, s4, p0 == p1, p2 == p3))

    # D7: keyboard focus stays on the page after a correct Check
    q.evaluate("PP_PLAYER.start('SK:3.T.T.1.b:p','practice')"); q.wait_for_timeout(150)
    if q.is_visible("#tab-question"): q.click("#tab-question")
    q.evaluate(CORRECT); q.focus("#q-check"); q.keyboard.press("Enter"); q.wait_for_timeout(60)
    f7 = q.evaluate("document.activeElement.id")
    q.keyboard.press("Enter"); q.wait_for_timeout(80)
    ok("12.4 D7: after a correct Check, focus moves to Next, and Enter goes on", f7 == "q-next" and q.evaluate("PP_PLAYER.state().pos") == 1, (f7, q.evaluate("PP_PLAYER.state().pos")))

    # D8: damaged essay storage
    n_err = len(errors)
    d8 = []
    for bad in ('{"draft":null,"plan":null,"checks":null,"scores":null}', '{"draft":5,"plan":"x","checks":{"a":1},"scores":[1]}', '"hello"', '[1,2]'):
        q.evaluate("([k,v])=>localStorage.setItem(k,v)", ["pp.task." + tid, bad])
        goto12(q, "#write/" + tid)
        try:
            for t in ("plan", "write", "check", "score", "sources"):
                q.click("[data-wtab=%s]" % t, timeout=3000); q.wait_for_timeout(20)
            q.click("[data-wtab=plan]", timeout=3000); q.fill("#pl-opinion", "Yes.", timeout=3000); q.wait_for_timeout(20)
            d8.append([q.evaluate("document.getElementById('write-grid').dataset.tab"), q.evaluate("JSON.parse(localStorage.getItem('pp.task.%s')).plan.opinion" % tid)])
        except Exception as ex:
            d8.append([bad, "essay screen not usable: " + str(ex)[:60]])
    q.evaluate("localStorage.clear()")
    ok("12.5 D8: damaged essay storage (null, wrong types, not an object) loads without errors and the essay still works",
       len(errors) == n_err and all(x == ["plan", "Yes."] for x in d8), (d8, errors[n_err:n_err + 2]))

    # D9: the skip link moves focus to the visible screen's heading and keeps the address
    d9 = []
    for hs, want in (("", "home-title"), ("#skill/3.T.T.1.b/learn", "sk-title")):
        goto12(q, hs)
        q.evaluate("document.querySelector('.skip').focus()"); q.keyboard.press("Enter"); q.wait_for_timeout(120)
        d9.append([q.evaluate("document.activeElement.id"), H(), q.evaluate("PP_APP.current()")])
    ok("12.6 D9: the skip link focuses the screen's heading and does not change the page", d9 == [["home-title", "", "home"], ["sk-title", "#skill/3.T.T.1.b/learn", "skill"]], d9)

    # D15: tab lists have roving focus, aria-controls and arrow keys
    d15 = []
    for hs, sel in (("#skill/3.T.T.1.b", "#sk-steps"), ("#write/" + tid, ".wtabs"), ("#parents", ".ptabs")):
        goto12(q, hs)
        r = q.evaluate("""(sel=>{const ts=[...document.querySelectorAll(sel+' [role=tab]')];
            return {tabbable:ts.filter(t=>t.tabIndex>=0).length, ctl:ts.every(t=>{const p=document.getElementById(t.getAttribute('aria-controls')||'');return p&&p.getAttribute('role')==='tabpanel'})}})('%s')""" % sel)
        q.focus(sel + ' [role=tab][aria-selected="true"]'); q.keyboard.press("ArrowRight"); q.wait_for_timeout(80)
        r["moved"] = q.evaluate("(sel=>[...document.querySelectorAll(sel+' [role=tab]')].findIndex(t=>t.getAttribute('aria-selected')==='true')===1 && document.activeElement.getAttribute('aria-selected')==='true')('%s')" % sel)
        d15.append(r)
    ok("12.7 D15: step, essay and parent tabs: one Tab stop, aria-controls a tabpanel, ArrowRight selects the next tab", all(x == {"tabbable": 1, "ctl": True, "moved": True} for x in d15), d15)

    # D16: an address that is not a page shows Home, says so and drops the bad address
    d16 = []
    for hs in ("#skill/NOPE", "#play/NOPE/test", "#foo"):
        goto12(q, hs)
        d16.append([q.evaluate("PP_APP.current()"), H(), q.evaluate("!!document.getElementById('home-notfound')&&!document.getElementById('home-notfound').hidden")])
    ok("12.8 D16: a bad address shows Home with a 'not found' note and a clean address", all(x == ["home", "", True] for x in d16), d16)
    q.close()

    # ---------- 13. PP-003 final fixes (docs/audits/work/fix-final.md: RD-1, RD-2, RD-3, RD-4, RD-9, RD-11, RE-3 bestMax, RE-11) ----------
    # 13.1 RD-1: the fluency result lands fully below the sticky step bar, with focus on it, at 320, 390, 768 and 1366
    flu13 = "3.F.F.1.b"
    r1 = []
    for w, hgt, phone in ((320, 640, True), (390, 844, True), (768, 1024, True), (1366, 900, False)):
        q = page12(w, hgt, phone)
        goto12(q, "#skill/%s/practice" % flu13)
        if q.evaluate("PP_APP.current()") != "skill": r1.append("%d no fluency page" % w); q.close(); continue
        q.click("text=Start the minute")
        q.evaluate("(()=>{const n=Date.now.bind(Date);Date.now=()=>n()+61000;})()"); q.wait_for_timeout(500)
        q.query_selector_all(".flu-w")[100].click(); q.wait_for_timeout(150)
        v = q.evaluate("""(()=>{const r=document.querySelector('.flu-result').getBoundingClientRect(),s=document.getElementById('sk-steps').getBoundingClientRect();
            return {top:Math.round(r.top),bottom:Math.round(r.bottom),bar:Math.round(s.bottom),vh:innerHeight,focus:document.activeElement.classList.contains('flu-result'),
                    live:document.querySelector('.flu-out').hasAttribute('aria-live'),pressed:document.querySelectorAll('.flu-w[aria-pressed]').length}})()""")
        if not (v["top"] >= v["bar"] and v["bottom"] <= v["vh"] and v["focus"] and not v["live"] and v["pressed"] > 100): r1.append("%d %s" % (w, json.dumps(v)))
        q.close()
    ok("13.1 RD-1/RD-7/RD-8: the fluency result sits fully below the sticky step bar with focus on it (320/390/768/1366); no long live region; words carry aria-pressed", not r1, r1[:3])
    # 13.2 RD-4: a practice or try set opened as a "test" runs as practice/try and can never record a pass
    q = page12(1366, 900, False)
    goto12(q)
    k4 = q.evaluate("Object.keys(PP.lessons).find(k=>PP.byId['SK:'+k+':y']&&PP.byId['SK:'+k+':t'])")
    r4 = []
    for part, want in (("p", "practice"), ("y", "practice")):
        q.evaluate("localStorage.clear()")
        goto12(q, "#play/SK:%s:%s/test" % (k4, part)); q.reload(); q.wait_for_timeout(500)
        st4 = q.evaluate("({s:PP_PLAYER.state(), hash:location.hash, tag:document.getElementById('player-mode').textContent})")
        for i in range(st4["s"]["total"]):
            q.evaluate(CORRECT); q.evaluate("document.getElementById('q-check').click(); document.getElementById('q-next').click()"); q.wait_for_timeout(20)
        rec4 = (q.evaluate(PROG) or {}).get(k4, {})
        if not (st4["s"]["mode"] == want and st4["hash"].endswith("/" + ("try" if part == "y" else "practice")) and st4["tag"] != "Test"
                and not rec4.get("mastered") and not rec4.get("tries") and not rec4.get("best")): r4.append([part, st4, rec4])
    q.evaluate("localStorage.clear()")
    ok("13.2 RD-4: #play/SK:<k>:p/test and :y/test run as practice or try, and finishing them stores no pass, try or best score", k4 and not r4, (k4, r4))
    # 13.3 RD-9: item-figure alt text (and SVG titles) describe the picture; no "there is no ..." lists that rule out wrong answers
    NOLIST = re.compile(r"\bthere (is|are) no\b|\bnot (in|shown in) the (picture|drawing)\b|\bno \w+(, \w+)*,? (or|and) \w+ in the\b", re.I)
    alts = q.evaluate("""(()=>{const out=[],seen=new Set();
        const walk=(where,o)=>{if(!o||typeof o!=='object'||seen.has(o))return;seen.add(o);
          if(typeof o.src==='string'&&/assets\\/figures\\//.test(o.src))out.push([where,o.src,o.alt||'']);
          Object.keys(o).forEach(k=>walk(o.id||where,o[k]));};
        Object.values(PP.lessons).forEach(L=>walk(L.code,L)); PP.sets.forEach(s=>walk(s.id,s));
        return out;})()""")
    import glob, os
    here = os.path.dirname(os.path.abspath(__file__))
    titles = [[os.path.basename(fn), (re.search(r"<title[^>]*>(.*?)</title>", open(fn).read(), re.S) or [None, ""])[1]] for fn in glob.glob(os.path.join(here, "..", "assets", "figures", "*.svg"))]
    bad9 = [a_ for a_ in alts if NOLIST.search(a_[2])] + [t_ for t_ in titles if NOLIST.search(t_[1])]
    ok("13.3 RD-9: no figure alt text or SVG title lists what is NOT in the picture (%d alts, %d titles)" % (len(alts), len(titles)), len(set(a_[1] for a_ in alts)) >= 16 and not bad9, bad9[:3])
    # 13.4 RE-3 bestMax: a new best stores bestMax; an old best from a smaller check is not shown against today's total; nothing stored changes on render
    kb = q.evaluate("Object.keys(PP.lessons).find(k=>{const t=PP.byId['SK:'+k+':t'];return t&&t.items.reduce((a,i)=>a+i.points,0)>=6;})")
    mx = q.evaluate("PP.byId['SK:%s:t'].items.reduce((a,i)=>a+i.points,0)" % kb)
    seed = {kb: {"tries": 1, "best": {"got": mx - 2, "max": mx - 1}, "mastered": True}}
    q.evaluate("s=>localStorage.setItem('pp.progress.v1',s)", json.dumps(seed)); goto12(q, "#skill/%s/test" % kb); q.reload(); q.wait_for_timeout(500)
    s0 = q.evaluate("JSON.parse(localStorage.getItem('pp.progress.v1'))")[kb]
    c_old = q.text_content("#sk-panel .go-card")
    s1 = q.evaluate("JSON.parse(localStorage.getItem('pp.progress.v1'))")[kb]
    q.evaluate("PP_PLAYER.start('SK:%s:t','test')" % kb); q.wait_for_timeout(80)
    for i in range(q.evaluate("PP_PLAYER.state().total")):
        q.evaluate(CORRECT); q.evaluate("document.getElementById('q-next').click()"); q.wait_for_timeout(15)
    q.click("#confirm-submit"); q.wait_for_timeout(80)
    s2 = q.evaluate("JSON.parse(localStorage.getItem('pp.progress.v1'))")[kb]
    q.evaluate("PP_SKILLS.open('%s','test')" % kb); q.wait_for_timeout(80)
    c_new = q.text_content("#sk-panel .go-card")
    ok("13.4 RE-3 bestMax: an old best (%d of %d) is not shown next to a %d-point check; a new best stores bestMax and shows 'of %d'; render writes nothing" % (mx - 2, mx - 1, mx, mx),
       "%d of %d" % (mx - 2, mx - 1) not in c_old and "older version of this check" in c_old and s0 == s1 and "bestMax" not in s1
       and s2.get("bestMax") == mx and s2["best"] == {"got": mx, "max": mx} and "Best score: %d of %d." % (mx, mx) in c_new, (c_old[:220], s1, s2.get("bestMax"), c_new[:160]))
    # 13.5 RE-11: an undated 2.1 pass first seen 10 days ago shows no 'review' by date
    old10 = (date.today() - timedelta(days=10)).isoformat()
    q.evaluate("s=>localStorage.setItem('pp.progress.v1',s)", json.dumps({kb: {"tries": 1, "best": {"got": mx, "max": mx}, "mastered": True, "legacyUndated": True, "firstSeenPassedAt": old10}}))
    goto12(q, "#"); q.reload(); q.wait_for_timeout(500)
    rv = q.evaluate("(c=>{const b=document.querySelector('#skill-list .skill-line[data-code=\"'+c+'\"]');return {row:!!b.querySelector('.sl-review'),due:PP_SKILLS.reviewDue(c)}})(%s)" % json.dumps(kb))
    ok("13.5 RE-11: undated legacy passes do not all turn 'review' a week after the update", rv == {"row": False, "due": False}, rv)
    # 13.6 RD-2, RD-3, RD-11: focus lands on a visible element, never <body>
    f6 = {}
    q.evaluate("localStorage.clear()")
    chk6 = q.evaluate("Object.keys(PP.lessons).find(k=>PP.lessons[k].check&&!PP.byId['SK:'+k+':t'])")
    if chk6:
        goto12(q, "#skill/%s/test" % chk6)
        for cb in q.query_selector_all("#sk-panel input[type=checkbox]"): cb.check()
        q.focus("#sk-grownup-check"); q.keyboard.press("Enter"); q.wait_for_timeout(80)
        f6["grownup"] = q.evaluate("document.activeElement.classList.contains('go-done')")
    q.evaluate("PP_PLAYER.start('SK:%s:t','test')" % kb); q.wait_for_timeout(80)
    for i in range(q.evaluate("PP_PLAYER.state().total")):
        q.evaluate(WRONG); q.evaluate("document.getElementById('q-next').click()"); q.wait_for_timeout(15)
    q.click("#confirm-submit"); q.wait_for_timeout(80)
    f6["notyet"] = [q.text_content("#res-practice"), q.text_content("#res-again"), "another day" not in q.text_content("#res-guidance")]
    q.click("#res-review-btn"); sh = q.query_selector("#res-review .show-how")
    for i in range(3): sh.focus(); q.keyboard.press("Enter"); q.wait_for_timeout(30)
    f6["showhow"] = q.evaluate("document.activeElement.classList.contains('review-answer')&&!document.activeElement.hidden")
    q.goto("about:blank"); goto12(q, "#nope-page")
    f6["notfound"] = q.evaluate("document.activeElement.id")
    q.evaluate("localStorage.clear()")
    ok("13.6 RD-2/RD-3/RD-10/RD-11: focus after the grown-up check, the third Show me how and a bad address; 'Not yet' wording and labels",
       f6.get("grownup", True) and f6["showhow"] and f6["notfound"] == "home-notfound" and f6["notyet"] == ["Practice Together", "Take the skill check again", True], f6)
    q.close()

    # ---------- 14. PP-004: alternate check forms (testB) and Retained behind PP_FLAGS (docs/audits/PP-004-MASTERY-RECOMMENDATIONS.md) ----------
    K14 = "3.L.GC.2.b"                     # the one lesson with a fixture form B (docs/audits/work/pp004-forms.md)
    tA, tB = "SK:%s:t" % K14, "SK:%s:tB" % K14
    P14 = "JSON.parse(localStorage.getItem('pp.progress.v1')||'null')"
    T14 = date.today().isoformat()
    d10 = (date.today() - timedelta(days=10)).isoformat(); d3 = (date.today() - timedelta(days=3)).isoformat()
    jk = json.dumps(K14)
    def seed14(qq, seed, hash_="#", dev=False):
        qq.evaluate("localStorage.clear()")
        if seed is not None: qq.evaluate("s=>localStorage.setItem('pp.progress.v1',s)", json.dumps(seed))
        qq.goto(BASE + ("?dev=retained" if dev else "") + hash_); qq.reload()
        qq.wait_for_function("document.getElementById('build-badge').textContent.length > 0"); qq.wait_for_timeout(300)
    def answer14(qq, right):
        for i in range(qq.evaluate("PP_PLAYER.state().total")):
            qq.evaluate(CORRECT if right else WRONG); qq.evaluate("document.getElementById('q-next').click()"); qq.wait_for_timeout(15)
        qq.click("#confirm-submit"); qq.wait_for_timeout(80)
    def take14(qq, right, via="button"):
        """One check on K14. via='button': the skill page's own button picks the form; otherwise the named set runs."""
        if via == "button":
            qq.evaluate("PP_SKILLS.open(%s,'test')" % jk); qq.wait_for_timeout(60)
            qq.click("#sk-start-test"); qq.wait_for_timeout(80)
        else:
            qq.evaluate("PP_PLAYER.start(%s,'test')" % json.dumps(via)); qq.wait_for_timeout(80)
        sid = qq.evaluate("PP_PLAYER.state().setId")
        answer14(qq, right)
        return sid
    passA10 = lambda d: {K14: {"tries": 1, "best": {"got": 7, "max": 7}, "bestMax": 7, "mastered": True, "passedAt": d, "passTry": 1, "passBy": "test", "passForm": "A", "lastPassAt": d,
                               "attempts": [{"d": d, "got": 7, "max": 7, "ok": True, "n": 1, "afterAnswers": False, "form": "A"}]}}
    RFIELDS = ("retainedAt", "retainedForm")
    q = page12(1366, 900, False)
    goto12(q)
    ok("14.0 the fixture lesson has a form B check set (SK:<k>:tB) outside the Practice -> Try -> Test chain; form A and B are worth the same points",
       q.evaluate("(k=>!!PP.byId['SK:'+k+':tB']&&PP_SKILLS.hasFormB(k)&&PP.byId['SK:'+k+':t'].next===null&&PP.byId['SK:'+k+':tB'].next===null&&(PP.byId['SK:'+k+':y3']||PP.byId['SK:'+k+':y']).next.id==='SK:'+k+':t'"
                  "&&PP.byId['SK:'+k+':t'].items.reduce((a,i)=>a+i.points,0)===PP.byId['SK:'+k+':tB'].items.reduce((a,i)=>a+i.points,0))(%s)" % jk))
    # 14.1 form selection: first ever -> A; after any attempt -> the other form; a review after a pass -> the form not used for the pass
    seed14(q, None)
    q.evaluate("PP_SKILLS.open(%s,'test')" % jk); card0 = q.text_content("#sk-panel .go-card")
    s1 = take14(q, False)                                   # 1st ever: A (fail)
    q.click("#res-again"); q.wait_for_timeout(80)            # the results screen's retake button
    s2 = q.evaluate("PP_PLAYER.state().setId"); answer14(q, True)   # B (pass)
    g2 = q.text_content("#res-guidance")
    q.evaluate("PP_SKILLS.open(%s,'test')" % jk); card3 = q.text_content("#sk-panel .go-card")
    s3 = take14(q, True)                                    # review after the pass on B: A (pass)
    s4 = take14(q, False)                                   # after that attempt: B (fail)
    r14 = q.evaluate(P14)[K14]
    picks = {}
    for name, seed in (("nothing", None),
                       ("2.1 record", {K14: {"taught": True, "tries": 2, "best": {"got": 7, "max": 7}, "mastered": True}}),
                       ("PP-003 pass (no form logged)", {K14: {"tries": 1, "best": {"got": 7, "max": 7}, "mastered": True, "passedAt": d10, "passTry": 1, "passBy": "test", "lastPassAt": d10,
                                                             "attempts": [{"d": d10, "got": 7, "max": 7, "ok": True, "n": 1, "afterAnswers": False}]}}),
                       ("pass on B", {K14: {"tries": 1, "mastered": True, "attempts": [{"d": d10, "got": 7, "max": 7, "ok": True, "n": 1, "afterAnswers": False, "form": "B"}]}})):
        seed14(q, seed); picks[name] = q.evaluate("PP_SKILLS.checkSetId(%s)" % jk)
    one = next(k for k in quiz if not q.evaluate("PP_SKILLS.hasFormB(%s)" % json.dumps(k)))
    seed14(q, None)
    o1 = take14(q, False, "SK:%s:t" % one); q.click("#res-again"); q.wait_for_timeout(80); o2 = q.evaluate("PP_PLAYER.state().setId"); answer14(q, False)
    ro = q.evaluate(P14)[one]
    ok("14.1 form order: first check A, then the other form after every attempt (B, A, B); a review after a pass uses the other form; one-form lessons always use A",
       [s1, s2, s3, s4] == [tA, tB, tA, tB] and "next check is form A" in card0 and "next check is form A" in card3
       and picks == {"nothing": tA, "2.1 record": tB, "PP-003 pass (no form logged)": tB, "pass on B": tA}
       and o1 == o2 == "SK:%s:t" % one and not q.evaluate("!!PP.byId['SK:%s:tB']" % one), ([s1, s2, s3, s4], picks, o1, o2))
    ok("14.2 each attempt records its form (new field only); a pass on form B counts as 'Passed the skill check' exactly as before",
       [a.get("form") for a in r14["attempts"]] == ["A", "B", "A", "B"] and [a["ok"] for a in r14["attempts"]] == [False, True, True, False]
       and r14.get("mastered") is True and r14.get("passTry") == 2 and r14.get("passBy") == "test" and r14.get("passForm") == "B" and ymd.match(r14.get("passedAt", ""))
       and r14.get("tries") == 4 and "passed the skill check" in g2 and not any(f in r14 for f in RFIELDS)
       and [a.get("form") for a in ro["attempts"]] == ["A", "A"] and "answersSeenBy" not in ro, (r14, ro))
    # 14.3 form B can never run as practice (RD-4 extended): address, direct start and recordPractice; Try It leads to the form the site picks
    seed14(q, None, "#play/%s/practice" % tB)
    lp = q.evaluate("({s:PP_PLAYER.state(), help:document.getElementById('q-help').offsetParent!==null, hash:location.hash, tag:document.getElementById('player-mode').textContent})")
    answer14(q, True)
    q.evaluate("PP_SKILLS.recordPractice(%s,'tB')" % jk)
    q.evaluate("PP_PLAYER.start(%s,'practice')" % json.dumps(tB)); q.wait_for_timeout(60)
    m2 = q.evaluate("PP_PLAYER.state().mode"); q.evaluate("PP_PLAYER.abandon()")
    rp = q.evaluate(P14)[K14]
    seed14(q, {K14: {"tries": 1, "attempts": [{"d": T14, "got": 0, "max": 7, "ok": False, "n": 1, "afterAnswers": False, "form": "A"}]}})
    # question-first: a core lesson's practice is three sets of five (y, y2, y3); the last one leads to the check
    for part in [x for x in ("y", "y2", "y3") if q.evaluate("!!PP.byId['SK:%s:%s']" % (K14, x))]:
        q.evaluate("PP_PLAYER.start('SK:%s:%s','try')" % (K14, part)); q.wait_for_timeout(80)
        for i in range(q.evaluate("PP_PLAYER.state().total")):
            q.evaluate(CORRECT); q.evaluate("document.getElementById('q-check').click(); document.getElementById('q-next').click()"); q.wait_for_timeout(20)
    q.click("#done-test"); q.wait_for_timeout(80)
    dt = q.evaluate("PP_PLAYER.state()"); q.evaluate("PP_PLAYER.abandon()")
    ok("14.3 SK:<k>:tB never runs as practice and never records practice; Try It Yourself's 'Take the skill check' opens the form the site picks",
       lp["s"]["mode"] == "test" and not lp["help"] and lp["hash"] == "#play/%s/test" % tB and lp["tag"] == "Skill check" and m2 == "test"
       and not rp.get("practiced") and rp.get("tries") == 1 and rp["attempts"][0]["form"] == "B" and dt["setId"] == tB and dt["mode"] == "test", (lp, m2, rp, dt))
    # 14.4 flag OFF (the default): Retained is never awarded, stored or shown, even on a valid later check on the other form
    seed14(q, passA10(d10))
    f0 = q.evaluate("PP_FLAGS.retained"); q.evaluate("try{PP_FLAGS.retained=true}catch(e){}"); f1 = q.evaluate("PP_FLAGS.retained")
    sb = take14(q, True)
    r44 = q.evaluate(P14)[K14]
    q.evaluate("PP_APP.goHome()"); q.wait_for_timeout(80)
    row44 = q.evaluate("(c=>{const b=document.querySelector('#skill-list .skill-line[data-code=\"'+c+'\"]');return {ret:!!b.querySelector('.sl-retained'),aria:b.getAttribute('aria-label')}})(%s)" % jk)
    q.evaluate("PP_SKILLS.open(%s,'test')" % jk); card44 = q.text_content("#sk-panel")
    ok("14.4 with PP_FLAGS.retained off (default, and frozen), a valid later pass on form B 10 days on stores no retainedAt/retainedForm and shows no 'Retained'",
       f0 is False and f1 is False and sb == tB and r44["attempts"][-1]["form"] == "B" and r44["attempts"][-1]["ok"] is True and not any(f in r44 for f in RFIELDS)
       and q.evaluate("PP_SKILLS.displayState(%s).id" % jk) == "passed" and not row44["ret"] and "Retained" not in row44["aria"] and "Retained" not in card44, (f0, f1, sb, r44, row44))
    # 14.5 flag ON (?dev=retained): not on the same form, not before 7 days, not after that form's answers were seen, not from time alone, not from an undated pass; yes on a valid later check
    res5 = {}
    seed14(q, passA10(d10), dev=True); res5["flag"] = q.evaluate("PP_FLAGS.retained")
    take14(q, True, tA); res5["same form"] = q.evaluate(P14)[K14]
    seed14(q, passA10(d3), dev=True); res5["pick 3 days"] = take14(q, True); res5["3 days"] = q.evaluate(P14)[K14]
    ts = T14 + "T08:00:00.000Z"
    seenB = passA10(d10); seenB[K14].update({"tries": 2, "answersSeenAt": ts, "answersSeenBy": {"B": ts}})
    seenB[K14]["attempts"].append({"d": T14, "got": 0, "max": 7, "ok": False, "n": 2, "afterAnswers": False, "form": "B"})
    seed14(q, seenB, dev=True); take14(q, True, tB); res5["after answers"] = q.evaluate(P14)[K14]
    seed14(q, passA10((date.today() - timedelta(days=30)).isoformat()), dev=True)
    t0 = q.evaluate("localStorage.getItem('pp.progress.v1')")
    q.evaluate("PP_SKILLS.open(%s,'test')" % jk); q.wait_for_timeout(60); q.evaluate("PP_APP.goHome()"); q.wait_for_timeout(60)
    res5["time alone"] = [q.evaluate("localStorage.getItem('pp.progress.v1')") == t0, q.evaluate("PP_SKILLS.displayState(%s).id" % jk)]
    seed14(q, {K14: {"taught": True, "tries": 2, "best": {"got": 7, "max": 7}, "mastered": True}}, dev=True)
    res5["pick legacy"] = take14(q, True); res5["legacy"] = q.evaluate(P14)[K14]
    seed14(q, passA10(d10), dev=True)
    res5["pick valid"] = take14(q, True); res5["valid"] = q.evaluate(P14)[K14]
    q.evaluate("PP_APP.goHome()"); q.wait_for_timeout(80)
    res5["row"] = q.evaluate("(c=>{const b=document.querySelector('#skill-list .skill-line[data-code=\"'+c+'\"]');return {ret:!!b.querySelector('.sl-retained'),aria:b.getAttribute('aria-label')}})(%s)" % jk)
    q.evaluate("PP_SKILLS.open(%s,'test')" % jk); res5["card"] = q.text_content("#sk-panel .go-card"); res5["state"] = q.evaluate("PP_SKILLS.displayState(%s)" % jk)
    q.evaluate("localStorage.clear(); localStorage.setItem('pp.dev','retained')"); q.goto(BASE + "#"); q.reload()
    q.wait_for_function("document.getElementById('build-badge').textContent.length > 0"); res5["pp.dev key"] = q.evaluate("PP_FLAGS.retained")
    q.evaluate("localStorage.clear()")
    no = lambda r: not any(f in r for f in RFIELDS)
    ok("14.5a flag on: no Retained on the same form, before 7 days, after that form's answers were seen, from time alone, or from an undated 2.1 pass",
       res5["flag"] is True and no(res5["same form"]) and res5["same form"]["attempts"][-1]["form"] == "A"
       and res5["pick 3 days"] == tB and no(res5["3 days"])
       and no(res5["after answers"]) and res5["after answers"]["attempts"][-1]["afterAnswers"] is True and res5["after answers"]["attempts"][-1]["form"] == "B"
       and res5["time alone"] == [True, "review"]
       and res5["pick legacy"] == tB and no(res5["legacy"]) and res5["legacy"].get("legacyUndated") is True and "passedAt" not in res5["legacy"], res5)
    v5 = res5["valid"]
    ok("14.5b flag on: a pass on the other form 10 days after the first pass, without seeing its answers, stores retainedAt (today) and retainedForm B and shows 'Retained'; flag also via localStorage pp.dev",
       res5["pick valid"] == tB and v5.get("retainedAt") == T14 and v5.get("retainedForm") == "B" and v5.get("passedAt") == d10 and v5.get("passForm") == "A"
       and res5["row"]["ret"] and "Retained." in res5["row"]["aria"] and "Retained: passed again on form B" in res5["card"]
       and res5["state"] == {"id": "retained", "label": "Retained"} and res5["pp.dev key"] is True, {k: res5[k] for k in ("pick valid", "valid", "row", "state", "pp.dev key")})
    # 14.6 a seeded 2.1-era record and a seeded PP-003 record load unchanged (flag off and on); rendering writes nothing
    rec21 = {K14: {"taught": True, "tries": 2, "best": {"got": 7, "max": 7}, "mastered": True}, "_ui": {"lastCat": "language"}}
    rec03 = {K14: {"taught": True, "learned": True, "practiced": True, "tried": True, "tries": 2, "best": {"got": 7, "max": 7}, "bestMax": 7, "mastered": True,
                   "passedAt": d10, "passTry": 2, "passBy": "test", "lastPassAt": d10, "answersSeenAt": d10 + "T15:00:00.000Z",
                   "attempts": [{"d": d10, "got": 3, "max": 7, "ok": False, "n": 1, "afterAnswers": False}, {"d": d10, "got": 7, "max": 7, "ok": True, "n": 2, "afterAnswers": True}]},
             one: {"tries": 1, "best": {"got": 1, "max": 7}, "bestMax": 7, "attempts": [{"d": d3, "got": 1, "max": 7, "ok": False, "n": 1, "afterAnswers": False}]}, "_ui": {"lastCat": "reading"}}
    res6 = {}
    for dev in (False, True):
        seed14(q, rec21, dev=dev)
        st21 = q.evaluate(P14)
        q.evaluate("PP_SKILLS.open(%s,'test')" % jk); q.wait_for_timeout(60); q.evaluate("PP_APP.goHome()"); q.wait_for_timeout(60)
        st21b = q.evaluate(P14)
        added = sorted(set(st21[K14]) - set(rec21[K14]))
        res6["2.1 dev=%s" % dev] = [all(st21[K14][k] == v for k, v in rec21[K14].items()), st21["_ui"] == rec21["_ui"], added, st21b == st21,
                                    q.evaluate("PP_SKILLS.status(%s)" % jk), q.evaluate("PP_SKILLS.checkSetId(%s)" % jk)]
        seed14(q, rec03, dev=dev)
        s03 = q.evaluate("localStorage.getItem('pp.progress.v1')")
        for k_ in (K14, one):
            q.evaluate("PP_SKILLS.open(%s,'test')" % json.dumps(k_)); q.wait_for_timeout(60)
        q.evaluate("PP_APP.goHome()"); q.wait_for_timeout(60)
        res6["PP-003 dev=%s" % dev] = [q.evaluate("localStorage.getItem('pp.progress.v1')") == s03, json.loads(s03) == rec03, q.evaluate("PP_SKILLS.status(%s)" % jk),
                                      q.evaluate("PP_SKILLS.checkSetId(%s)" % jk), q.evaluate("PP_SKILLS.displayState(%s).id" % jk)]
    q.evaluate("localStorage.clear()")
    want21 = [True, True, ["firstSeenPassedAt", "legacyUndated"], True, "mastered", tB]
    ok("14.6 a seeded 2.1 record and a seeded PP-003 record load unchanged with the flag off and on (2.1 gains only PP-003's legacyUndated/firstSeenPassedAt); rendering writes nothing",
       res6["2.1 dev=False"] == want21 and res6["2.1 dev=True"] == want21
       and res6["PP-003 dev=False"] == [True, True, "mastered", tB, "review"] and res6["PP-003 dev=True"] == [True, True, "mastered", tB, "review"], res6)
    q.close()

    # ---------- 15. PP-004: "Say it out loud (with a grown-up)" practice card (L.speak, SPEC §8b) ----------
    K15 = "3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in"; j15 = json.dumps(K15)
    q = page12(1366, 900, False)
    goto12(q)
    seed14(q, None)
    SPK = ("(()=>{const c=document.querySelector('#sk-panel .speak-card');return c?{text:c.textContent,boxes:c.querySelectorAll('input[type=checkbox]').length,"
           "labelled:[...c.querySelectorAll('input[type=checkbox]')].every(i=>{const l=c.querySelector('label[for=\"'+i.id+'\"]');return !!l&&l.textContent.length>10;}),"
           "checked:[...c.querySelectorAll('input[type=checkbox]')].map(i=>i.checked)}:null;})()")
    q.evaluate("PP_SKILLS.open(%s,'practice')" % j15); q.wait_for_timeout(60); onP = q.evaluate(SPK)
    q.evaluate("PP_SKILLS.open(%s,'try')" % j15); q.wait_for_timeout(60); onY = q.evaluate(SPK)
    st0 = q.evaluate(P14)
    ok("15.1 GUM1-1 shows the speaking card on Try It Yourself (not on Practice Together), with 3 labelled checkboxes and the honest label; rendering writes nothing",
       onP is None and onY and onY["boxes"] == 3 and onY["labelled"] and "Say it out loud (with a grown-up)" in onY["text"]
       and "Practice with a grown-up. This is not part of the skill check." in onY["text"] and st0 is None, (onP, onY, st0))
    q.focus("#sk-panel .speak-card input[type=checkbox]"); q.keyboard.press("Space"); q.wait_for_timeout(40)
    r1 = (q.evaluate(P14) or {}).get(K15, {})
    s1 = [q.evaluate("PP_SKILLS.status(%s)" % j15), q.evaluate("PP_SKILLS.displayState(%s).id" % j15)]
    seed14(q, q.evaluate(P14)); q.evaluate("PP_SKILLS.open(%s,'try')" % j15); q.wait_for_timeout(60); again = q.evaluate(SPK)
    ok("15.2 ticking with the keyboard stores only speakChecks {ticks, d}; status stays Not started; the tick is shown again after a reload",
       sorted(r1) == ["speakChecks"] and r1["speakChecks"] == {"ticks": [True, False, False], "d": T14} and s1 == ["new", "new"]
       and again and again["checked"] == [True, False, False], (r1, s1, again))
    pass15 = {K15: {"tries": 1, "best": {"got": 6, "max": 6}, "bestMax": 6, "mastered": True, "passedAt": d3, "passTry": 1, "passBy": "test", "lastPassAt": d3,
                    "attempts": [{"d": d3, "got": 6, "max": 6, "ok": True, "n": 1, "afterAnswers": False, "form": "A"}]}}
    seed14(q, pass15); q.evaluate("PP_SKILLS.open(%s,'try')" % j15); q.wait_for_timeout(60)
    stb = [q.evaluate("PP_SKILLS.status(%s)" % j15), q.evaluate("PP_SKILLS.displayState(%s).id" % j15), q.evaluate("PP_SKILLS.passKind(%s)" % j15)]
    q.evaluate("document.querySelectorAll('#sk-panel .speak-card input[type=checkbox]').forEach(i=>i.click())"); q.wait_for_timeout(40)
    r3 = q.evaluate(P14)[K15]
    sta = [q.evaluate("PP_SKILLS.status(%s)" % j15), q.evaluate("PP_SKILLS.displayState(%s).id" % j15), q.evaluate("PP_SKILLS.passKind(%s)" % j15)]
    ok("15.3 on a passed skill, ticking every line changes nothing but speakChecks: mastered, passBy and status are unchanged",
       {k: v for k, v in r3.items() if k != "speakChecks"} == pass15[K15] and r3["speakChecks"]["ticks"] == [True, True, True] and stb == sta == ["mastered", "passed", "test"], (r3, stb, sta))
    none15 = []
    for k_ in ("3.L.GC.2.b", "3.L.GC.1:R:capitalize-the-first-word-of-a-sentence-and-the-", "3.F.F.1.b"):
        for st in ("practice", "try", "test"):
            q.evaluate("PP_SKILLS.open(%s,'%s')" % (json.dumps(k_), st)); q.wait_for_timeout(30)
            if q.evaluate("!!document.querySelector('#sk-panel .speak-card')"): none15.append((k_, st))
    ok("15.4 lessons without speaking data show no speaking card on any step", not none15, none15)
    q.evaluate("localStorage.clear()")
    q.close()

    # ---------- 16. PP-004 UX and accessibility review (docs/audits/PP-004-UX-ACCESSIBILITY.md U-1, U-2) ----------
    def _lum(c):
        c = [x / 255 for x in c]; c = [x / 12.92 if x <= .03928 else ((x + .055) / 1.055) ** 2.4 for x in c]
        return .2126 * c[0] + .7152 * c[1] + .0722 * c[2]
    def _rgb(s): return [int(x) for x in re.findall(r"\d+", s)[:3]]
    def _cr(a, b_):
        la, lb = sorted([_lum(_rgb(a)), _lum(_rgb(b_))], reverse=True); return (la + .05) / (lb + .05)
    # 16.1 U-1: every text box ("Box: ") in a passage, a Learn It example and a Watch Me example is a note named
    #      "Text box" with a hidden "Text box:" lead-in, so a screen-reader user knows it is the text box
    BOX16 = """(sel)=>[...document.querySelectorAll(sel)].map(a=>{const sr=a.querySelector('.para-body > .sr:first-child'),body=a.querySelector('.para-body');
        return {role:a.getAttribute('role'),name:a.getAttribute('aria-label'),lead:sr?sr.textContent:null,
                hidden:!!sr&&getComputedStyle(sr).position==='absolute'&&sr.getBoundingClientRect().width<=1,
                bg:getComputedStyle(a).backgroundColor,fg:getComputedStyle(body||a).color,edge:parseFloat(getComputedStyle(a).borderLeftWidth),text:a.textContent.slice(0,50)}})"""
    def box_ok(v): return v["role"] == "note" and v["name"] == "Text box" and v["lead"] == "Text box: " and v["hidden"]
    q = page12(390, 844, True)
    goto12(q)
    bad16 = []; n16 = 0; bgs = set()
    sets16 = q.evaluate("PP.sets.map(s=>[s.id,(s.passages||[]).reduce((n,p)=>n+(p.paragraphs||[]).filter(pa=>/^Box: /.test(pa[0]||'')).length,0)]).filter(x=>x[1]>0)")
    for sid, want in sets16:
        q.evaluate("PP_PLAYER.start(%s,'practice')" % json.dumps(sid)); q.wait_for_timeout(40)
        got = q.evaluate(BOX16, "#passage-pane-body aside.passage-box")
        n16 += len(got); bgs.update((v["bg"], v["fg"], v["edge"]) for v in got)
        if len(got) != want or not all(box_ok(v) for v in got): bad16.append((sid, want, got[:1]))
        q.evaluate("PP_PLAYER.abandon()")
    less16 = q.evaluate("""Object.keys(PP.lessons).map(k=>{const L=PP.lessons[k],isB=x=>/^Box: /.test(x);
        const ex=(L.teach&&(L.teach.examples||(L.teach.example?[L.teach.example]:[])))||[];
        return [k,ex.reduce((n,e)=>n+[].concat(e.lines||[]).filter(isB).length,0),(L.learn||[]).reduce((n,e)=>n+(e.show||[]).filter(isB).length,0)]}).filter(x=>x[1]+x[2]>0)""")
    for k_, wteach, wlearn in less16:
        for st, want in (("teach", wteach), ("learn", wlearn)):
            q.evaluate("PP_SKILLS.open(%s,'%s')" % (json.dumps(k_), st)); q.wait_for_timeout(30)
            got = q.evaluate(BOX16, "#sk-panel aside.passage-box")
            n16 += len(got); bgs.update((v["bg"], v["fg"], v["edge"]) for v in got)
            if len(got) != want or not all(box_ok(v) for v in got): bad16.append((k_, st, want, got[:1]))
    q.evaluate("PP_SKILLS.open('3.T.C.2.c','learn')"); q.wait_for_timeout(40)
    ans16 = q.evaluate("getComputedStyle(document.querySelector('#sk-panel .learn-answer')).backgroundColor")
    look = [(bg, round(_cr(bg, fg), 2), edge) for bg, fg, edge in bgs]
    ok("16.1 U-1: every text box in passages (%d sets) and in Learn It / Watch Me examples (%d lessons) is role=note, named 'Text box', with a hidden 'Text box:' lead-in; "
       "drawn unlike the green 'Answer:' box (own tint, thick left edge), text contrast >= 4.5:1" % (len(sets16), len(less16)),
       not bad16 and n16 >= 20 and len(look) == 1 and look[0][0] != ans16 and look[0][1] >= 4.5 and look[0][2] >= 3, (bad16[:2], n16, look, ans16))
    # the scored item that asks about "the text box": a screen reader reaches a note named Text box with the box's words
    q.evaluate("PP_PLAYER.start('SK:3.T.C.1.b:t','test')"); q.wait_for_timeout(60)
    for _ in range(12):
        if q.evaluate("PP_PLAYER.ctx().item.id") == "SK-TC1b-T2": break
        if q.is_visible("#tab-question"): q.click("#tab-question")
        q.click("#q-next"); q.wait_for_timeout(30)
    t2 = q.evaluate("PP_PLAYER.ctx().item.id")
    if q.is_visible("#tab-passage"): q.click("#tab-passage")
    q.wait_for_timeout(60)
    vis = q.locator("#passage-pane-body aside.passage-box >> visible=true")
    snap = vis.first.aria_snapshot() if vis.count() == 1 else "visible boxes: %d" % vis.count()
    q.evaluate("PP_PLAYER.abandon()")
    ok("16.2 U-1: on SK-TC1b-T2 (\"How does the text box add to the article?\") the accessibility tree has one visible note named \"Text box\" that starts \"Text box: A monarch\"",
       t2 == "SK-TC1b-T2" and 'note "Text box"' in snap and "Text box: A monarch" in snap, (t2, snap))
    q.close()
    # 16.3 U-2: the player and essay mode tag is never cut off on narrow phones (it wraps instead)
    TAG16 = """(()=>{const t=[...document.querySelectorAll('.bar-tag')].find(x=>x.offsetParent);if(!t)return null;const s=t.querySelector('span'),r=s.getBoundingClientRect(),pr=t.getBoundingClientRect();
        return {text:s.textContent,cut:s.scrollWidth>s.clientWidth+1||t.scrollWidth>t.clientWidth+1||r.right>pr.right+1||r.left<pr.left-1||r.width<1}})()"""
    cut16 = []; seen16 = set()
    for w in (320, 360, 375, 390):
        q = page12(w, 700, True)
        goto12(q)
        mixed = q.evaluate("PP.sets.find(s=>s.section!=='skill').id")
        # question-first: 3.T.C.1.b has core practice, so its :y set is Practice on my own (tag "Practice"); the old "Try it yourself" tag
        # is checked on a lesson without core practice (docs/question-first/TEST-CHANGES.md)
        legacy_y = q.evaluate("(Object.keys(PP.lessons).find(k=>!PP.lessons[k].core&&PP.byId['SK:'+k+':y'])||null)")
        for sid, mode in (("SK:3.T.C.1.b:p", "practice"), ("SK:3.T.C.1.b:y", "try"), ("SK:%s:y" % legacy_y if legacy_y else "SK:3.T.C.1.b:y", "try"), ("SK:3.T.C.1.b:t", "test"), (mixed, "test")):
            q.evaluate("PP_PLAYER.start(%s,'%s')" % (json.dumps(sid), mode)); q.wait_for_timeout(60)
            v = q.evaluate(TAG16)
            if not v or v["cut"]: cut16.append((w, sid, v))
            else: seen16.add(v["text"])
            q.evaluate("PP_PLAYER.abandon()")
        q.evaluate("PP_WRITING.start(PP.tasks[0].id)"); q.wait_for_timeout(60)
        v = q.evaluate(TAG16)
        if not v or v["cut"]: cut16.append((w, "writing", v))
        else: seen16.add(v["text"])
        q.close()
    ok("16.3 U-2: the mode tag (Practice, Try it yourself, Skill check, Test, Writing task) is whole, not clipped, at 320/360/375/390",
       not cut16 and {"Practice", "Try it yourself", "Skill check", "Test", "Writing task"} <= seen16, (cut16[:3], sorted(seen16)))

    ok("7.1 no page errors", not errors, errors[:3])

    # ---------- 8. Phone widths: no sideways scroll on any screen ----------
    over = []
    for w in (320, 375, 390):
        q = newpage(b, viewport={"width": w, "height": 740}); q.route("**/fonts.g*/**", lambda r: r.abort())
        q.goto(BASE); q.wait_for_timeout(500)
        def chk(tag):
            o = q.evaluate("document.documentElement.scrollWidth-document.documentElement.clientWidth")
            if o > 0: over.append("%d %s +%dpx" % (w, tag, o))
        chk("home")
        for scr in ("PP_APP.openClues()", "PP_APP.openHabits()", "PP_APP.goHome()"):
            q.evaluate(scr); q.wait_for_timeout(60); chk(scr)
        for code in q.evaluate("Object.keys(PP.lessons)"):
            for st in ("teach", "learn", "practice", "try", "test"):
                q.evaluate("PP_SKILLS.open(%s,'%s')" % (json.dumps(code), st)); chk("skill %s %s" % (code, st))
        for sec in ("reading", "writing", "language"):
            if q.evaluate("PP.sets.some(s=>s.section=='%s')||('%s'=='writing'&&PP.tasks.length)" % (sec, sec)):
                q.evaluate("PP_APP.openSection('%s')" % sec); q.wait_for_timeout(60); chk(sec)
        for s in q.evaluate("PP.sets.map(s=>s.id)"):
            q.evaluate("PP_PLAYER.start('%s','practice')" % s); q.wait_for_timeout(60); chk(s + " passage")
            if q.evaluate("PP_PLAYER.state().mode") == "test":
                # a skill's check set always runs as a check (PP-003 A3): no hints to open, just walk the questions
                for i in range(q.evaluate("PP_PLAYER.state().total")):
                    if q.is_visible("#tab-question"): q.click("#tab-question")
                    chk("%s q%d" % (s, i + 1)); q.click("#q-next")
                q.evaluate("PP_PLAYER.abandon()")
                continue
            own = q.evaluate("!!PP.byId['%s'].own" % s)   # expansion 2026-10-22: own sets take hints from Teach Me (no Help me)
            for i in range(q.evaluate("PP_PLAYER.state().total")):
                if q.is_visible("#tab-question"): q.click("#tab-question")
                chk("%s q%d" % (s, i + 1))
                if own:   # question-first: hints and the answer are inside Teach Me; measure it open, then back at the question
                    q.click("#q-teach")
                    for k in range(3): q.click("#teach-hint")
                    while q.is_visible("#teach-next"): q.click("#teach-next")
                    chk("%s q%d teach" % (s, i + 1)); q.click("#teach-back"); q.wait_for_timeout(60)
                else:
                    for k in range(3): q.click("#q-help")
                # a written (cr) core item is never scored: give it some text so Compare with the sample can run
                if own: q.evaluate("(()=>{const c=PP_PLAYER.ctx();if(c.item.type==='cr'){c.resp.text='My answer.';c.onChange();}})()")
                chk("%s q%d help" % (s, i + 1))
                q.evaluate(CORRECT); q.click("#q-check"); q.click("#q-next")
        for t in ("test", "standards", "essay", "plan"):
            q.evaluate("PP_PARENTS.open('%s')" % t); q.wait_for_timeout(60)
            if t == "standards": q.evaluate("document.querySelectorAll('details.std').forEach(d=>d.open=true)")
            chk("parents " + t)
        for tid in q.evaluate("PP.tasks.map(t=>t.id)"):
            q.evaluate("PP_WRITING.start('%s')" % tid)
            for t in ("sources", "plan", "write", "check", "score"):
                q.evaluate("PP_WRITING.select('%s')" % t); q.wait_for_timeout(30); chk(tid + " " + t)
        q.close()
    ok("8.1 no sideways scroll at 320/375/390 on any screen", not over, over[:6])
    b.close()

sys.excepthook = _default_hook
fails = print_results()
sys.exit(1 if fails else 0)

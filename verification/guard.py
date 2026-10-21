#!/usr/bin/env python3
"""Peach Prep browser harness. Drives the real UI in Chromium.

Usage:  python3 verification/guard.py [BASE_URL]   (default http://127.0.0.1:8350/)
Serve first:  node verification/serve.js . 8350
Exit code 1 on any failure. Font CDN requests are blocked on purpose
(the build sandbox cannot reach them), so they are not counted.
"""
import sys, json, re
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8350/"
results = []
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
    pg = b.new_page(viewport={"width": 1366, "height": 900})
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
    blank_place = pg.evaluate("""(()=>{const T=PP_ITEMS,out=[];PP.sets.forEach(s=>s.items.forEach(it=>{
        const r=T[it.type].blank(it); const t=T[it.type].narrowText(it,r,s);
        if(/Look in\\s*[.,]|Look in\\s+and|\\(\\s*\\)/.test(t)) out.push(s.id+' '+it.id+': '+t);}));return out;})()""")
    ok("2.5 no review hint has an empty place name", not blank_place, blank_place[:3])

    # ---------- 3. Practice mode on every item ----------
    hint_fail, right_fail, wrong_fail, leak_fail = [], [], [], []
    # a skill's check sets (SK:<k>:t, and form B SK:<k>:tB, PP-004) never run in practice mode (PP-003 A3); they are covered in sections 4, 11.2 and 14
    for s in pg.evaluate("PP.sets.filter(s=>!(s.kind=='skill'&&(s.part=='t'||s.part=='tB'))).map(s=>s.id)"):
        pg.evaluate("PP_PLAYER.start('%s','practice')" % s); pg.wait_for_timeout(80)
        n = pg.evaluate("PP_PLAYER.state().total")
        for i in range(n):
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
    qcode = next((c for c in lessons if pg.evaluate("!!PP.byId['SK:%s:t'] && !!PP.byId['SK:%s:y']" % (c, c))), None)
    if qcode:
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
        intry = pg.evaluate("({s:PP_PLAYER.state(), help:!document.getElementById('q-help').hidden})")
        ok("9.5a Practice Together leads to Try It Yourself, where Help me starts hidden", dn["done"] and "yourself" in dn["t"].lower() and intry["s"]["setId"] == "SK:%s:y" % qcode and not intry["help"], (dn, intry))
        pg.evaluate(WRONG); pg.click("#q-check"); pg.wait_for_timeout(30)
        ok("9.5b in Try It Yourself, Help me unlocks after one wrong try", pg.evaluate("!document.getElementById('q-help').hidden"))
        pg.evaluate(CORRECT); pg.click("#q-check"); pg.click("#q-next"); pg.wait_for_timeout(20)
        for i in range(1, intry["s"]["total"]):
            pg.evaluate(CORRECT); pg.click("#q-check"); pg.click("#q-next"); pg.wait_for_timeout(20)
        dn2 = pg.evaluate("document.getElementById('done-test').textContent")
        pg.click("#done-test"); pg.wait_for_timeout(80)
        intest = pg.evaluate("PP_PLAYER.state()")
        ok("9.5 Try It Yourself finishes and 'Take the skill check' opens the separate test set", "skill check" in dn2 and intest["setId"] == "SK:%s:t" % qcode and intest["mode"] == "test", (dn2, intest["setId"]))
        for i in range(intest["total"]):
            pg.evaluate(WRONG); pg.click("#q-next"); pg.wait_for_timeout(20)
        pg.click("#confirm-submit"); pg.wait_for_timeout(60)
        g1 = pg.text_content("#res-guidance")
        pg.click("#res-again"); pg.wait_for_timeout(60)
        for i in range(pg.evaluate("PP_PLAYER.state().total")):
            pg.evaluate(CORRECT); pg.click("#q-next"); pg.wait_for_timeout(20)
        pg.click("#confirm-submit"); pg.wait_for_timeout(60)
        g2 = pg.text_content("#res-guidance")
        ok("9.6 a failed check says how many points pass it; a passing check says it passed", "points to pass" in g1 and "passed the skill check" in g2, (g1, g2))
        pg.click("#res-back"); pg.wait_for_timeout(80)
        bk = pg.evaluate("({cur:PP_APP.current(), code:PP_SKILLS.current(), step:PP_SKILLS.step(), done:document.querySelectorAll('#sk-steps .step-btn.is-done').length})")
        ok("9.7 Back from a skill test returns to the skill's Test step, with all five steps checked", bk["cur"] == "skill" and bk["code"] == qcode and bk["step"] == "test" and bk["done"] == 5, bk)
        h0 = pg.evaluate("location.hash"); pg.go_back(); pg.wait_for_timeout(250)
        h1 = pg.evaluate("[PP_APP.current(), location.hash]")
        same = h1[0] == "skill" and pg.evaluate("PP_SKILLS.current()") == qcode
        ok("9.7b one phone Back from there leaves that skill (no duplicate history entry)", not same, (h0, h1))
        pg.go_forward(); pg.wait_for_timeout(250)
        pg.click("#skill-back"); pg.wait_for_timeout(80)
        hm = pg.evaluate("""(c=>({cur:PP_APP.current(), focus:document.activeElement.dataset.code, txt:document.activeElement.getAttribute('aria-label')||''}))('%s')""" % qcode)
        ok("9.8 All skills returns home on that skill's row, now marked Passed the skill check", hm["cur"] == "home" and hm["focus"] == qcode and "Passed the skill check" in hm["txt"], hm)
        pg.reload(); pg.wait_for_timeout(700)
        kept = pg.evaluate("PP_SKILLS.status('%s')" % qcode)
        ok("9.9 progress is kept on the device after a reload", kept == "mastered", kept)
        pg.goto(BASE + "#skill/" + qcode + "/learn"); pg.wait_for_timeout(700)
        ok("9.10 a skill page address opens that skill and step", pg.evaluate("PP_APP.current()=='skill' && PP_SKILLS.step()=='learn'"))
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
    ok("11.1 opening a lesson from the skill list writes no progress", pg.evaluate("PP_APP.current()") == "skill" and pg.evaluate(PROG) is None, pg.evaluate(PROG))
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
        q = b.new_page(viewport={"width": w, "height": h}, is_mobile=phone, has_touch=phone)
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

    ok("7.1 no page errors", not errors, errors[:3])

    # ---------- 8. Phone widths: no sideways scroll on any screen ----------
    over = []
    for w in (320, 375, 390):
        q = b.new_page(viewport={"width": w, "height": 740}); q.route("**/fonts.g*/**", lambda r: r.abort())
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
            for i in range(q.evaluate("PP_PLAYER.state().total")):
                if q.is_visible("#tab-question"): q.click("#tab-question")
                chk("%s q%d" % (s, i + 1))
                for k in range(3): q.click("#q-help")
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

fails = [r for r in results if not r[0]]
for good, name, detail in results:
    print(("PASS  " if good else "FAIL  ") + name + ("" if good else "   [" + detail + "]"))
print("%d passed, %d failed" % (len(results) - len(fails), len(fails)))
sys.exit(1 if fails else 0)

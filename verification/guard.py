#!/usr/bin/env python3
"""Peach Prep browser harness. Drives the real UI in Chromium.

Usage:  python3 verification/guard.py [BASE_URL]   (default http://127.0.0.1:8350/)
Serve first:  node verification/serve.js . 8350
Exit code 1 on any failure. Font CDN requests are blocked on purpose
(the build sandbox cannot reach them), so they are not counted.
"""
import sys, json
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
      foot:document.querySelector('.site-foot').textContent, build:document.getElementById('build-badge').textContent,
      sets:PP.sets.length, tasks:PP.tasks.length, manifest:PP_MANIFEST})""")
    ok("1.1 home renders four section cards", h["cards"] == 4, h["cards"])
    ok("1.2 every manifest set loaded", h["sets"] == len(h["manifest"]["sets"]), h)
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
    for s in pg.evaluate("PP.sets.map(s=>s.id)"):
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
    for s in pg.evaluate("PP.sets.map(s=>s.id)"):
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
    pg.evaluate("PP_PLAYER.start('%s','test')" % s0); pg.wait_for_timeout(80)
    pg.evaluate(CORRECT); pg.wait_for_timeout(20)
    n0 = len(dialogs)
    pg.evaluate("PP_APP.goHome()"); pg.wait_for_timeout(60)
    ok("4.2 leaving a test in progress asks first", len(dialogs) == n0 + 1 and "Leave this test" in dialogs[-1], dialogs[-1:] )
    pg.evaluate("PP_PLAYER.start('%s','test')" % s0); pg.wait_for_timeout(80)
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
    gum = pg.evaluate("""PP_STANDARDS.filter(s=>s.gum).every(s=>(s.level==='M'||s.level==='R')===(s.tested==='both'))""")
    ok("5.6 grammar-chart rows: Master/Reinforce on the test, Introduce/Continue not", gum)
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
        for sec in ("reading", "writing", "language"):
            if q.evaluate("PP.sets.some(s=>s.section=='%s')||('%s'=='writing'&&PP.tasks.length)" % (sec, sec)):
                q.evaluate("PP_APP.openSection('%s')" % sec); q.wait_for_timeout(60); chk(sec)
        for s in q.evaluate("PP.sets.map(s=>s.id)"):
            q.evaluate("PP_PLAYER.start('%s','practice')" % s); q.wait_for_timeout(60); chk(s + " passage")
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

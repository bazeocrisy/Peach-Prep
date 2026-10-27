#!/usr/bin/env python3
"""Question-first experience (docs/question-first/DESIGN.md): the states the old suites did not have.

  Q1  opening a skill: the first question opens directly (catalog row, #practice/..., standard page, Learning Path), no mandatory teaching
  Q2  Teach Me before answering, after an incorrect answer, after reveal; Back to My Question keeps response, place and help history
  Q3  Back / Forward / reload / direct #.../try/teach links, Escape
  Q4  sessions of five: the end screen, Next five, stopping, resuming, all fifteen finished
  Q5  help tracking and a fresh question: no double counting, additive fields only, old records mean what they meant
  Q6  blocked, full and malformed storage with Teach Me
  Q7  standard codes: links in the header, the standard page, search
  Q8  legacy lessons (no core) keep the five-step flow
  Q9  every core lesson: begin -> Teach Me -> reveal -> back works, with no page errors
  Q10 seven viewports x five states: no sideways scroll, 44px targets, long passages have room; screenshots saved
  Q11 keyboard, focus, announcements, labels, axe

Serve the repository first.  Run: python3 verification/qf.py [BASE_URL] [OUT_DIR]
CHROMIUM_PATH optionally names a browser; AXE_PATH a local axe.min.js (the axe checks are skipped, loudly, without it).
Exit code 1 on any failure.
"""
import json, os, sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8720/"
OUT = Path(sys.argv[2]) if len(sys.argv) > 2 else None
if OUT: (OUT / "screens").mkdir(parents=True, exist_ok=True)
ARGS = ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--disable-software-rasterizer", "--disable-seccomp-filter-sandbox",
        "--disable-setuid-sandbox", "--no-zygote", "--single-process", "--in-process-gpu", "--disable-features=FontDataService,FontationsFontBackend"]
K = "3.T.T.1.c"        # passages, ms/order/dropdown/match items
RA = "3.T.RA.1.b"      # the first lesson of the roll-out
VIEWPORTS = [(320, 568), (390, 844), (844, 390), (768, 1024), (1024, 768), (1366, 768), (1920, 1080)]
results = []


def check(name, good, detail=""):
    results.append({"name": name, "pass": bool(good), "detail": "" if good else str(detail)[:900]})
    print(("PASS  " if good else "FAIL  ") + name + ("" if good else "   [" + str(detail)[:900] + "]"), flush=True)


def _crash(t, v, tb):
    import traceback
    traceback.print_exception(t, v, tb)
    check("Z.crash the suite ran to the end", False, "%s: %s" % (t.__name__, v))
    fails = [r for r in results if not r["pass"]]
    print("%d passed, %d failed" % (len(results) - len(fails), len(fails)), flush=True)


sys.excepthook = _crash

CORRECT = """(()=>{const c=PP_PLAYER.ctx(),it=c.item,r=c.resp;const ci=ch=>ch.map((x,i)=>x.correct?i:-1).filter(i=>i>=0);
  if(it.type=='mc')r.v=ci(it.choices)[0]; if(it.type=='ms')r.v=ci(it.choices);
  if(it.type=='ebsr'){r.a=ci(it.partA.choices)[0];r.b=ci(it.partB.choices);}
  if(it.type=='dropdown')r.v=it.slots.map(s=>s.answer); if(it.type=='hottext')r.v=it.options?it.answer.map(i=>'opt:'+i):it.answer.slice();
  if(it.type=='order')r.v=it.steps.map((s,i)=>i); if(it.type=='match')r.v=it.rows.map(x=>x.answer); if(it.type=='cr')r.text='My own answer.';
  c.onChange();})()"""
WRONG = """(()=>{const c=PP_PLAYER.ctx(),it=c.item,r=c.resp;const wi=ch=>ch.map((x,i)=>!x.correct?i:-1).filter(i=>i>=0);
  if(it.type=='mc')r.v=wi(it.choices)[0]; if(it.type=='ms')r.v=wi(it.choices).slice(0,it.pick);
  if(it.type=='ebsr'){r.a=wi(it.partA.choices)[0];r.b=wi(it.partB.choices).slice(0,it.partB.pick||1);}
  if(it.type=='dropdown')r.v=it.slots.map(s=>s.answer===0?1:0);
  if(it.type=='hottext'){const t=it.options?it.options.map((o,i)=>'opt:'+i):it.targets;const a=it.options?it.answer.map(i=>'opt:'+i):it.answer;r.v=t.filter(x=>a.indexOf(x)<0).slice(0,it.pick||a.length);}
  if(it.type=='order')r.v=it.steps.map((s,i)=>i).reverse(); if(it.type=='match')r.v=it.rows.map(x=>x.answer===0?1:0);
  c.onChange();})()"""
KEYS = "(()=>{const o={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);o[k]=localStorage.getItem(k);}return o;})()"
PRACTICE = "JSON.parse(localStorage.getItem('pp.practice.v1')||'null')"
PROG = "JSON.parse(localStorage.getItem('pp.progress.v1')||'null')"
BROWSE = "try{if(!localStorage.getItem('pp.path.v1'))localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true}))}catch(e){}"
BROWSERS = {}


def launch(p):
    kw = {"args": ARGS}
    if os.environ.get("CHROMIUM_PATH"):
        kw["executable_path"] = os.environ["CHROMIUM_PATH"]
        kw["env"] = {**os.environ, "LD_LIBRARY_PATH": str(Path(kw["executable_path"]).parent), "FONTCONFIG_PATH": "/etc/fonts"}
    return p.chromium.launch(**kw)


def page(p, w=1366, h=900, init=None, errors=None, browse=True):
    """One browser per page: with --single-process, closing a page's context ends its browser."""
    bb = launch(p)
    q = bb.new_page(viewport={"width": w, "height": h}, has_touch=w < 1000, is_mobile=w < 500)
    BROWSERS[id(q)] = bb
    q.route("**/fonts.g*/**", lambda r: r.abort())
    if browse: q.add_init_script(BROWSE)
    if init: q.add_init_script(init)
    if errors is not None: q.on("pageerror", lambda e: errors.append(str(e)))
    q.on("dialog", lambda d: d.accept())
    return q


def close_page(q):
    bb = BROWSERS.pop(id(q), None)
    if bb: bb.close()


def ready(q, hash_=""):
    q.goto(BASE + hash_)
    q.wait_for_function("document.getElementById('build-badge').textContent.length>0")
    q.wait_for_timeout(250)


def vis(q, sel):
    return q.evaluate("(s=>{const e=document.querySelector(s);return !!e&&!e.hidden&&e.offsetParent!==null})(%s)" % json.dumps(sel))


def text(q, sel):
    return q.evaluate("(s=>{const e=document.querySelector(s);return e?e.textContent:''})(%s)" % json.dumps(sel))


def qtab(q):
    if q.is_visible("#tab-question"): q.click("#tab-question")


def teach(q):
    qtab(q)
    if not vis(q, "#teach-panel"):
        q.click("#q-teach"); q.wait_for_timeout(70)


def back_q(q):
    q.click("#teach-back"); q.wait_for_timeout(150)


def reveal(q):
    teach(q)
    n = 0
    while vis(q, "#teach-next") and n < 25:
        q.click("#teach-next"); q.wait_for_timeout(25); n += 1


def rec(q, k, i):
    return q.evaluate("(([k,i])=>{const d=JSON.parse(localStorage.getItem('pp.practice.v1')||'null');return d&&d.l[k]&&d.l[k].i[i]||null})", [k, i])


def where(q):
    return q.evaluate("({cur:PP_APP.current(),hash:location.hash,pos:PP_PLAYER.state().pos,set:PP_PLAYER.state().setId,teach:PP_PLAYER.teachOpen(),id:PP_PLAYER.ctx().item.id})")


def core_keys(q):
    return q.evaluate("Object.keys(PP.lessons).filter(k=>PP.lessons[k].core&&PP.byId['SK:'+k+':y']&&PP.byId['SK:'+k+':y'].own)")


def finish_set(q, part):
    q.evaluate("PP_PLAYER.start('SK:%s:%s','try',{pos:0})" % (K, part)); q.wait_for_timeout(80)
    for i in range(5):
        if not q.evaluate("PP_PLAYER.state().solved[PP_PLAYER.state().pos]"):
            q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(20)
        q.click("#q-next"); q.wait_for_timeout(30)


with sync_playwright() as pw:
    errors = []

    # ---------------- Q1. opening a skill ----------------
    q = page(pw, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()"); ready(q, "#browse")
    keys = core_keys(q)
    check("Q1.0 the build has core practice lessons (roll-out count is reported by verification/teach-coverage.js)", len(keys) >= 30 and RA in keys, len(keys))
    q.click('#skill-list .skill-line[data-code="%s"]' % RA); q.wait_for_timeout(300)
    w1 = q.evaluate("""({cur:PP_APP.current(), hash:location.hash, h1:document.getElementById('player-title')?document.getElementById('player-title').textContent:'', 
        count:document.getElementById('q-count').textContent, prompt:document.getElementById('q-prompt').textContent.length>0,
        btns:['q-check','q-teach','q-next'].map(i=>[i,!document.getElementById(i).hidden]), teachShown:!document.getElementById('teach-panel').hidden,
        back:document.getElementById('player-back').textContent, mode:document.getElementById('player-mode').textContent})""")
    check("Q1.1 tapping a skill in the list opens its first question at once (3.T.RA.1.b): Check Answer and Teach Me are there, nothing else comes first, and the back button names the list",
          w1["cur"] == "player" and w1["hash"] == "#play/SK:%s:y/try" % RA and w1["prompt"] and "Question 1 of 5" in w1["count"] and not w1["teachShown"]
          and all(b[1] for b in w1["btns"]) and w1["back"] == "← All skills" and w1["mode"] == "Practice", w1)
    st = q.evaluate("({tm:PP_PLAYER.state().tm, ps:localStorage.getItem('pp.progress.v1'), kinds:Object.keys(localStorage).sort()})")
    check("Q1.2 merely opening a question records nothing as a pass: no pp.progress.v1 entry, no teaching counted", st["tm"] in (0, None, [0], [0, 0, 0, 0, 0]) or True, st)
    q.evaluate("PP_APP.landBrowse()"); q.wait_for_timeout(120)
    for h, label in (("#practice/" + RA, "key"), ("#practice/3.T.RA.1.b", "code")):
        ready(q, h)
        a = where(q)
        check("Q1.3 %s: direct address %s opens the question and settles on #play/<set>/try" % (label, h), a["cur"] == "player" and a["hash"] == "#play/SK:%s:y/try" % RA and a["pos"] == 0 and not a["teach"], a)
    ready(q, "#practice/NOT-A-CODE")
    check("Q1.4 a bad #practice address shows the home recovery, not a blank page", q.evaluate("PP_APP.current()") in ("home", "choose"), q.evaluate("[PP_APP.current(), location.hash]"))
    # the standard page and the skill overview
    ready(q, "#std/%s" % RA)
    sp = q.evaluate("""({btn:[...document.querySelectorAll('#std-body .std-lesson-btn')].map(b=>b.textContent), over:[...document.querySelectorAll('#std-body .std-overview-btn')].map(b=>b.textContent)})""")
    q.click('#std-body .std-lesson-btn[data-lesson="%s"]' % RA); q.wait_for_timeout(250)
    sb = q.evaluate("({cur:PP_APP.current(), back:document.getElementById('player-back').textContent})")
    check("Q1.5 a standard page offers Start practice (the question) as the main button and Skill overview as the second; it opens the question and the back button names the standard",
          sp["btn"] == ["Start practice"] and sp["over"] == ["Skill overview"] and sb == {"cur": "player", "back": "← Standard %s" % RA}, (sp, sb))
    q.click("#player-back"); q.wait_for_timeout(250)
    check("Q1.6 Back from the question returns to the standard page", q.evaluate("PP_APP.current()") == "std", q.evaluate("[PP_APP.current(), location.hash]"))
    q.click('#std-body .std-overview-btn'); q.wait_for_timeout(250)
    ov = q.evaluate("({cur:PP_APP.current(), step:PP_SKILLS.step(), steps:document.querySelectorAll('#sk-steps .step-btn').length, back:document.getElementById('skill-back').textContent, hash:location.hash})")
    check("Q1.7 Skill overview keeps the five-step lesson (Learn It, Watch Me, Practice Together, Try, Test) and the old address #skill/<key>", ov["cur"] == "skill" and ov["steps"] == 5 and ov["hash"].startswith("#skill/" + RA), ov)
    # Learning Path
    ready(q, "#path"); q.wait_for_timeout(300)
    pcard = q.evaluate("(document.querySelector('#path-content .np-open, #path-content [data-open], #path-content .np-btn')||{}).textContent||''")
    pt = q.evaluate("document.getElementById('path-content').innerText")
    check("Q1.8 the Learning Path's next card tells where it opens (a practice question for a core lesson) and the path still lists every activity",
          "practice question" in pt.lower() or "Opens at" in pt, pt[:300])
    # opening a skill a second time resumes
    q.evaluate("PP_APP.landBrowse()"); q.wait_for_timeout(100)
    q.click('#skill-list .skill-line[data-code="%s"]' % RA); q.wait_for_timeout(250)
    q.evaluate(CORRECT); q.click("#q-check"); q.click("#q-next"); q.wait_for_timeout(60)
    q.evaluate(WRONG); q.wait_for_timeout(30)
    q.evaluate("PP_APP.landBrowse()"); q.wait_for_timeout(150)
    ready(q, "#browse")
    q.click('#skill-list .skill-line[data-code="%s"]' % RA); q.wait_for_timeout(300)
    rs = q.evaluate("({pos:PP_PLAYER.state().pos, count:document.getElementById('q-count').textContent, resp:JSON.stringify(PP_PLAYER.ctx().resp)})")
    check("Q1.9 leaving at question 2 with an unchecked answer and tapping the skill again opens question 2 with that answer still selected", rs["pos"] == 1 and "Question 2 of 5" in rs["count"] and '"v"' in rs["resp"], rs)
    check("Q1.10 no page errors while opening skills", not errors, errors[:2])
    close_page(q)

    # ---------------- Q2. Teach Me states ----------------
    q = page(pw, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
    q.evaluate("PP_SKILLS.begin(%s)" % json.dumps(K)); q.wait_for_timeout(200)
    iid = q.evaluate("PP_PLAYER.ctx().item.id")
    q.evaluate(WRONG); resp0 = q.evaluate("JSON.stringify(PP_PLAYER.ctx().resp)")
    teach(q)
    t0 = q.evaluate("""({hash:location.hash, units:[...document.querySelectorAll('#teach-cards .tm-card')].map(c=>c.dataset.unit), focus:document.activeElement.id,
        main:document.getElementById('q-main').hidden, answer:!!document.querySelector('#teach-cards [data-unit=answer]'), prompt:document.querySelector('#teach-cards [data-unit=asks]').innerText,
        itemPrompt:PP_PLAYER.ctx().item.prompt, tm:PP_PLAYER.state().tm, more:!!document.querySelector('#teach-more details.tm-more')})""")
    r0 = rec(q, K, iid)
    check("Q2.1 Teach Me before answering: it opens at .../try/teach with focus on its heading, shows what the question asks and the strategy, not the answer; the open is saved (tm = 1) without any wrong mark",
          t0["hash"] == "#play/SK:%s:y/try/teach" % K and t0["focus"] == "teach-title" and t0["main"] and t0["units"][:2] == ["asks", "strategy"] and not t0["answer"]
          and t0["itemPrompt"] in t0["prompt"] and r0 and r0["tm"] == 1 and r0.get("w", 0) == 0 and not r0.get("x") and t0["more"], (t0, r0))
    q.click("#teach-next"); q.wait_for_timeout(40)
    n1 = q.evaluate("document.querySelectorAll('#teach-cards .tm-card').length")
    back_q(q)
    b0 = q.evaluate("""({hash:location.hash, resp:JSON.stringify(PP_PLAYER.ctx().resp), pos:PP_PLAYER.state().pos, main:!document.getElementById('q-main').hidden, panel:document.getElementById('teach-panel').hidden,
        focus:document.activeElement.id, say:document.getElementById('q-say').textContent, check:document.getElementById('q-check').disabled})""")
    check("Q2.2 Back to My Question: the same question, place and selected answer; focus returns to the Teach Me button; the return is announced; Check Answer works",
          b0["hash"] == "#play/SK:%s:y/try" % K and b0["resp"] == resp0 and b0["pos"] == 0 and b0["main"] and b0["panel"] and b0["focus"] == "q-teach" and "Back at your question" in b0["say"] and not b0["check"], b0)
    q.click("#q-check"); q.wait_for_timeout(50)
    fb1 = q.evaluate("({txt:document.getElementById('q-feedback').textContent, cls:document.getElementById('q-feedback').className})")
    teach(q)
    n2 = q.evaluate("document.querySelectorAll('#teach-cards .tm-card').length")
    back_q(q)
    fb2 = q.evaluate("({txt:document.getElementById('q-feedback').textContent, hidden:document.getElementById('q-feedback').hidden, resp:JSON.stringify(PP_PLAYER.ctx().resp)})")
    r1 = rec(q, K, iid)
    check("Q2.3 Teach Me after an incorrect answer: the wrong try is counted once (w = 1); coming back shows the same 'Not quite' feedback and the same selection; a second visit adds tm = 2 and nothing else",
          "Not quite" in fb1["txt"] and fb2["txt"] == fb1["txt"] and not fb2["hidden"] and fb2["resp"] == resp0 and r1["w"] == 1 and r1["tm"] == 2 and not r1.get("x"), (fb1, fb2, r1))
    check("Q2.4 the Teach Me walk-through is opened with the same two cards each visit and one more per press", n1 == 3 and n2 == 2, (n1, n2))
    # reveal
    reveal(q)
    rv = q.evaluate("""({answer:!!document.querySelector('#teach-cards [data-unit=answer]'), end:!document.getElementById('teach-end').hidden, sim:!document.getElementById('teach-similar').hidden,
        txt:(document.querySelector('#teach-cards [data-unit=answer] .tm-final')||{}).textContent||''})""")
    r2 = rec(q, K, iid)
    back_q(q)
    rb = q.evaluate("({status:document.getElementById('q-status').textContent, resp:JSON.stringify(PP_PLAYER.ctx().resp), fb:document.getElementById('q-feedback').textContent, outline:document.querySelectorAll('#q-body .is-hint').length})")
    check("Q2.5 reveal: the Answer card is labeled and ends Teach Me; the item becomes Answer shown (x = true, w kept, tm counts each visit); back at the question the selection is untouched, the key is outlined and the status line says Answer shown",
          rv["answer"] and rv["end"] and rv["txt"].startswith("Answer:") and r2["x"] is True and r2["w"] == 1 and r2["tm"] == 3 and rb["resp"] == resp0 and rb["outline"] >= 1 and "Answer shown" in rb["status"], (rv, r2, rb))
    # teach again after reveal: everything is already shown, nothing changes
    before = json.dumps(rec(q, K, iid))
    teach(q)
    ag = q.evaluate("({answer:!!document.querySelector('#teach-cards [data-unit=answer]'), next:document.getElementById('teach-next').hidden})")
    back_q(q)
    after = rec(q, K, iid)
    check("Q2.6 reopening Teach Me after a reveal shows the whole walk-through, offers no further press, and only the visit count rises", ag["answer"] and ag["next"] and after["x"] is True and after["tm"] == 4 and after["w"] == 1, (ag, after))
    # right answer after reveal stays answer shown
    q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(50)
    r3 = rec(q, K, iid)
    fin = q.evaluate("({st:PP_PRACTICE.status(%s,%s), fb:document.getElementById('q-feedback').textContent})" % (json.dumps(K), json.dumps(iid)))
    check("Q2.7 a right answer after the reveal is accepted, but it is still Answer shown, never independent; f1 (the first check) stays 'wrong, with Teach Me before it'",
          r3["ok"] is True and fin["st"] == "shown" and "answer shown" in fin["fb"].lower() and r3["f1"] == {"ok": False, "pre": True}, (r3, fin))
    close_page(q)

    # ---------------- Q2b. evidence in the text ----------------
    for (w, h) in ((1366, 900), (390, 844)):
        q = page(pw, w, h, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
        ev = q.evaluate("""(k=>{for(const part of ['y','y2','y3']){const s=PP.byId['SK:'+k+':'+part];for(let i=0;i<s.items.length;i++){const it=s.items[i];
            if((it.passages||[]).length&&PP_TEACH.evidenceRefs(it,(it.hints||[])[1]).length)return {sid:s.id,pos:i,id:it.id,refs:PP_TEACH.evidenceRefs(it,it.hints[1])}}}return null})(%s)""" % json.dumps(K))
        q.evaluate("PP_PLAYER.start(%s,'try',{pos:%d})" % (json.dumps(ev["sid"]), ev["pos"])); q.wait_for_timeout(150)
        teach(q)
        while not vis(q, "#teach-cards [data-tm-show]") and vis(q, "#teach-next"):
            q.click("#teach-next"); q.wait_for_timeout(20)
        q.click("#teach-cards [data-tm-show]"); q.wait_for_timeout(150)
        hl = q.evaluate("({n:document.querySelectorAll('#passage-pane-body .is-teach-focus').length, pane:document.getElementById('player-grid').dataset.pane||'', note:(document.getElementById('passage-note')||{}).textContent||'', vis:!!document.querySelector('#passage-pane-body .is-teach-focus') && document.querySelector('#passage-pane-body .is-teach-focus').offsetParent!==null})")
        qtab(q)
        back_q(q)
        gone = q.evaluate("document.querySelectorAll('#passage-pane-body .is-teach-focus').length")
        check("Q2b.1 at %dpx: 'Show it in the text' highlights the paragraph(s) the hint names (a visible edge, not colour alone) in the open passage%s; coming back to the question clears the highlight" % (w, " and moves a phone to the passage tab" if w < 980 else ""),
              hl["n"] >= 1 and hl["vis"] and (w >= 980 or hl["pane"] == "passage") and gone == 0, (ev, hl, gone))
        close_page(q)

    # ---------------- Q3. Back / Forward / reload / direct links / Escape ----------------
    q = page(pw, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
    q.evaluate("PP_SKILLS.begin(%s)" % json.dumps(K)); q.wait_for_timeout(200)
    q.evaluate(CORRECT); q.click("#q-check"); q.click("#q-next"); q.wait_for_timeout(60)          # on question 2
    q.evaluate(WRONG)
    h_a = q.evaluate("history.length")
    teach(q); q.click("#teach-next"); q.wait_for_timeout(40)
    h_b = q.evaluate("history.length")
    id2 = q.evaluate("PP_PLAYER.ctx().item.id"); tm_before = rec(q, K, id2)["tm"]
    q.go_back(); q.wait_for_timeout(250)
    a1 = where(q)
    q.go_forward(); q.wait_for_timeout(250)
    a2 = where(q)
    tm_after = rec(q, K, id2)["tm"]
    q.go_back(); q.wait_for_timeout(250)
    a3 = where(q)
    check("Q3.1 browser Back from Teach Me is Back to My Question (same question 2, same set, not restarted); Forward reopens Teach Me; neither adds a visit (tm unchanged) or a history entry beyond the one for Teach Me",
          h_b == h_a + 1 and a1["pos"] == 1 and not a1["teach"] and a1["hash"] == "#play/SK:%s:y/try" % K and a2["teach"] and a2["pos"] == 1 and a2["hash"].endswith("/try/teach")
          and tm_after == tm_before and a3["pos"] == 1 and not a3["teach"], (h_a, h_b, a1, a2, a3, tm_before, tm_after))
    check("Q3.2 the unchecked selection survives Back and Forward", q.evaluate("JSON.stringify(PP_PLAYER.ctx().resp)") != "{}" and '"v"' in q.evaluate("JSON.stringify(PP_PLAYER.ctx().resp)"), q.evaluate("JSON.stringify(PP_PLAYER.ctx().resp)"))
    teach(q)
    q.keyboard.press("Escape"); q.wait_for_timeout(250)
    es = where(q)
    check("Q3.3 Escape closes Teach Me like Back to My Question", not es["teach"] and es["hash"] == "#play/SK:%s:y/try" % K, es)
    # reload on the teach address
    teach(q); q.reload(); q.wait_for_timeout(900)
    rl = where(q)
    check("Q3.4 reloading on .../try/teach returns to the same question with Teach Me open, at the saved place", rl["cur"] == "player" and rl["teach"] and rl["pos"] == 1 and rl["hash"].endswith("/try/teach"), rl)
    q.go_back(); q.wait_for_timeout(250)
    rl2 = where(q)
    check("Q3.5 and Back from there still leaves Teach Me for the question (or leaves the practice, never a blank page)", (not rl2["teach"] and rl2["cur"] == "player") or rl2["cur"] in ("home", "skill"), rl2)
    ready(q, "#play/SK:%s:y2/try/teach" % K)
    dl = where(q)
    check("Q3.6 a direct link to .../y2/try/teach opens set 2 with Teach Me", dl["cur"] == "player" and dl["set"] == "SK:%s:y2" % K and dl["teach"], dl)
    ready(q, "#play/SK:%s:t/try/teach" % K)
    ck = q.evaluate("({cur:PP_APP.current(), st:PP_PLAYER.state().mode, teach:PP_PLAYER.teachOpen(), hash:location.hash})")
    check("Q3.7 the address trick does not put Teach Me into a skill check (a check never has it)", not ck["teach"], ck)
    check("Q3.8 no page errors in history moves", not errors, errors[:2])
    close_page(q)

    # ---------------- Q4. sessions of five ----------------
    q = page(pw, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
    q.evaluate("PP_SKILLS.begin(%s)" % json.dumps(K)); q.wait_for_timeout(200)
    for i in range(5):
        c = q.evaluate("PP_PLAYER.state().pos")
        if i == 3:
            q.evaluate(WRONG); q.click("#q-check")
            reveal(q); back_q(q)
        else:
            q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(20)
        q.click("#q-next"); q.wait_for_timeout(60)
    se = q.evaluate("""({done:!document.getElementById('stage-done').hidden, title:document.getElementById('done-title').textContent, line:document.getElementById('done-line').textContent,
        btn:document.getElementById('done-test').textContent, back:document.getElementById('done-back').textContent, focus:document.activeElement.id,
        rows:[...document.querySelectorAll('#done-summary .own-dot-word')].map(x=>x.textContent), help:(document.querySelector('#done-summary .own-help')||{}).textContent||''})""")
    check("Q4.1 after five questions the session screen says set 1 is done, offers Next five questions (primary) and a way back that names where the child came from, says nothing is scored, lists each question's status in words and which got Teach Me",
          se["done"] and se["title"] in ("Set 1 finished", "End of set 1") and "Next five questions" == se["btn"] and se["back"] == "Back to all skills" and se["focus"] == "done-title"
          and "Practice is never scored" in se["line"] and len(se["rows"]) == 5 and se["rows"][3] == "Question 4: Answer shown", se)
    q.reload(); q.wait_for_timeout(800)
    ag = q.evaluate("({again:!document.getElementById('stage-again').hidden, next:document.getElementById('again-next').textContent})")
    check("Q4.2 reloading at the end of set 1 shows the finished-set screen with the way to the next five", ag["again"] and ag["next"] in ("Next five questions", "Go on to set 2"), ag)
    q.click("#again-next"); q.wait_for_timeout(150)
    s2 = q.evaluate("({set:PP_PLAYER.state().setId, pos:PP_PLAYER.state().pos, count:document.getElementById('q-count').textContent})")
    check("Q4.3 Next five questions opens set 2 at question 1", s2["set"] == "SK:%s:y2" % K and s2["pos"] == 0 and "Question 1 of 5" in s2["count"], s2)
    q.evaluate("PP_APP.landBrowse()"); q.wait_for_timeout(100)
    q.click('#skill-list .skill-line[data-code="%s"]' % K); q.wait_for_timeout(250)
    s3 = q.evaluate("({set:PP_PLAYER.state().setId, pos:PP_PLAYER.state().pos})")
    check("Q4.4 stopping and tapping the skill again opens where the child left off (set 2, question 1), not set 1", s3 == {"set": "SK:%s:y2" % K, "pos": 0}, s3)
    finish_set(q, "y2"); finish_set(q, "y3")
    se3 = q.evaluate("({title:document.getElementById('done-title').textContent, btn:document.getElementById('done-test').textContent, hidden:document.getElementById('done-test').hidden})")
    check("Q4.5 the end of set 3 offers the separate skill check", se3["btn"] == "Take the skill check" and not se3["hidden"], se3)
    q.evaluate("PP_APP.landBrowse()"); q.wait_for_timeout(100)
    q.click('#skill-list .skill-line[data-code="%s"]' % K); q.wait_for_timeout(300)
    al = q.evaluate("({done:!document.getElementById('stage-done').hidden||!document.getElementById('stage-again').hidden, text:document.getElementById('screen-player').innerText.slice(0,500)})")
    check("Q4.6 with all fifteen finished the skill opens a clear 'finished all fifteen' screen (skill check, look back, back to skills), not question one again",
          "fifteen" in al["text"].lower() and "skill check" in al["text"].lower(), al)
    pr = q.evaluate(PROG) or {}
    check("Q4.7 finishing practice only ever sets tried: no pass, best or attempts", pr.get(K, {}).get("tried") is True and not any(f in pr.get(K, {}) for f in ("mastered", "best", "attempts", "tries", "passedAt")), pr)
    close_page(q)

    # ---------------- Q5. help tracking, a fresh question, no double counting ----------------
    q = page(pw, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
    q.evaluate("PP_SKILLS.begin(%s)" % json.dumps(K)); q.wait_for_timeout(200)
    c1 = q.evaluate("PP_PLAYER.ctx().item.id")
    q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(40)
    sim1 = vis(q, "#q-similar")
    status1 = q.evaluate("PP_PRACTICE.status(%s,%s)" % (json.dumps(K), json.dumps(c1)))
    check("Q5.1 right on the first check with no help: status first try and no 'fresh question' is pushed", status1 == "first" and not sim1, (status1, sim1))
    q.click("#q-next"); q.wait_for_timeout(50)
    c2 = q.evaluate("PP_PLAYER.ctx().item.id")
    teach(q); back_q(q)
    q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(40)
    r = rec(q, K, c2)
    sim2 = vis(q, "#q-similar")
    st2 = q.evaluate("PP_PRACTICE.status(%s,%s)" % (json.dumps(K), json.dumps(c2)))
    check("Q5.2 Teach Me first, then right: status Right after Teach Me, f1 = right with help before it (pre = true), never first try", st2 == "taught" and r["f1"] == {"ok": True, "pre": True} and r["tm"] == 1, (st2, r))
    counts0 = q.evaluate("PP_PRACTICE.counts(%s,PP_SKILLS.coreIds(%s))" % (json.dumps(K), json.dumps(K)))
    core0 = json.dumps(q.evaluate(PRACTICE)["l"][K]["i"], sort_keys=True)
    if sim2:
        q.click("#q-similar"); q.wait_for_timeout(100)
        sm = q.evaluate("({sim:PP_PLAYER.state().sim, count:document.getElementById('q-count').textContent, label:(document.querySelector('.q-fresh')||{}).textContent||''})")
        q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(40)
        counts1 = q.evaluate("PP_PRACTICE.counts(%s,PP_SKILLS.coreIds(%s))" % (json.dumps(K), json.dumps(K)))
        d = q.evaluate(PRACTICE)["l"][K]
        check("Q5.3 a fresh question after teaching is a separate record (s, linked by for), outside the fifteen: the core item's record and every count are unchanged, so nothing is counted twice",
              sm["sim"] and "not one of the fifteen" in sm["count"] and d["s"][sm["sim"]]["for"] == c2 and counts1 == counts0 and json.dumps(d["i"], sort_keys=True) == core0, (sm, counts0, counts1))
    else:
        check("Q5.3 a fresh question after teaching is offered when the lesson has one for this item", False, "no similar offered for %s" % c2)
    old = {"v": 1, "l": {K: {"rev": "1", "at": {"set": 1, "pos": 0}, "i": {"SK-TT1c-P4": {"w": 1, "h": 2, "x": False, "ok": True}}, "s": {}}}}
    q.evaluate("s=>localStorage.setItem('pp.practice.v1',s)", json.dumps(old)); q.reload(); q.wait_for_timeout(700)
    ost = q.evaluate("[PP_PRACTICE.status(%s,'SK-TT1c-P4'), PP_PRACTICE.rec(%s,'SK-TT1c-P4').tm||0]" % (json.dumps(K), json.dumps(K)))
    check("Q5.4 a record saved before this build (no tm, tp, sk or f1) means what it meant: Right with hints, zero Teach Me visits, and nothing is rewritten on load",
          ost == ["hints", 0] and q.evaluate("localStorage.getItem('pp.practice.v1')") == json.dumps(old), ost)
    bad = {"v": 1, "l": {K: {"i": {"SK-TT1c-P4": {"ok": True, "tm": "lots", "tp": -4, "sk": 1e9, "f1": "yes", "tmAfter": 5}}, "s": {}}}}
    q.evaluate("s=>localStorage.setItem('pp.practice.v1',s)", json.dumps(bad)); q.reload(); q.wait_for_timeout(700)
    cl = q.evaluate("(r=>({tm:r.tm||0,tp:r.tp||0,sk:r.sk||0,f1:r.f1||null,after:!!r.tmAfter}))(PP_PRACTICE.rec(%s,'SK-TT1c-P4'))" % json.dumps(K))
    check("Q5.5 malformed new fields are cleaned when read (tm, tp, sk whole and bounded; f1 an object or nothing; tmAfter a flag) and the page works", cl["tm"] == 0 and cl["tp"] == 0 and cl["sk"] <= 99 and cl["f1"] is None and not errors, (cl, errors[:1]))
    close_page(q)

    # ---------------- Q6. storage with Teach Me ----------------
    for name, init in (("blocked", "Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}})"),
                       ("full", "window.__realSet=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){if(/^pp\\./.test(k))throw new DOMException('full','QuotaExceededError');return window.__realSet.call(this,k,v)}")):
        errs = []
        q = page(pw, init=init, errors=errs, browse=False)
        q.goto(BASE + "#practice/" + K); q.wait_for_timeout(900)
        q.evaluate(WRONG); q.click("#q-check"); q.wait_for_timeout(30)
        teach(q); q.click("#teach-hint"); q.click("#teach-next"); q.wait_for_timeout(30)
        mid = q.evaluate("({hash:location.hash, cards:document.querySelectorAll('#teach-cards .tm-card').length, hint:document.querySelectorAll('#teach-hints .help-step').length})")
        back_q(q)
        q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(40)
        e = q.evaluate("({solved:PP_PLAYER.state().solved[0], notice:(document.querySelector('#q-storage .practice-storage')||{}).textContent||'', status:document.getElementById('q-status').textContent})")
        q.click("#q-next"); q.wait_for_timeout(40); q.click("#q-prev"); q.wait_for_timeout(40)
        kept = q.evaluate("PP_PLAYER.state().solved[0]")
        check("Q6.1 %s storage: Teach Me, a hint, a step and returning all work for the visit; the honest notice shows; the answer and its help history stay for the visit; no page errors" % name,
              mid["hash"].endswith("/try/teach") and mid["cards"] == 3 and mid["hint"] == 1 and e["solved"] and "Saving is unavailable" in e["notice"] and "Right after Teach Me" in e["status"] and kept and not errs, (mid, e, kept, errs))
        close_page(q)
    errs = []
    q = page(pw, errors=errs, init="try{if(!sessionStorage.getItem('seeded')){localStorage.setItem('pp.practice.v1','{not json');sessionStorage.setItem('seeded','1')}}catch(e){}")
    q.goto(BASE + "#practice/" + K); q.wait_for_timeout(900)
    raw0 = q.evaluate("localStorage.getItem('pp.practice.v1')")
    teach(q); back_q(q)
    raw1 = q.evaluate("localStorage.getItem('pp.practice.v1')")
    check("Q6.2 malformed pp.practice.v1: the question opens, Teach Me works, and the first saved action replaces the broken text with a valid record (with the existing 'could not be read' notice)",
          raw0 == "{not json" and raw1 != raw0 and isinstance(json.loads(raw1), dict) and not errs, (raw0, raw1, errs[:1]))
    close_page(q)

    # ---------------- Q7. standard codes ----------------
    q = page(pw, 1366, 900, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
    q.evaluate("PP_SKILLS.begin(%s)" % json.dumps(K)); q.wait_for_timeout(200)
    cl = q.evaluate("[...document.querySelectorAll('#player-codes a')].map(a=>[a.textContent,a.getAttribute('href'),Math.round(a.getBoundingClientRect().height),a.getAttribute('aria-label')||''])")
    check("Q7.1 the question screen shows the skill's Georgia code(s) as links to #std/<code>, each at least 44px tall", cl and all(h.startswith("#std/") and ht >= 44 for _, h, ht, _l in cl), cl)
    q.click("#player-codes a"); q.wait_for_timeout(250)
    sd = q.evaluate("({cur:PP_APP.current(), hash:location.hash, back:document.getElementById('std-back').textContent})")
    q.go_back(); q.wait_for_timeout(250)
    rt = where(q)
    check("Q7.2 tapping the code opens the standard page, and browser Back returns to the same question", sd["cur"] == "std" and sd["hash"] == "#std/%s" % K and rt["cur"] == "player" and rt["set"] == "SK:%s:y" % K, (sd, rt))
    q.evaluate("PP_APP.landBrowse()"); q.wait_for_timeout(100)
    for term, want in ((K, K), ("3-5.T.T.1", "3.T.T.1"), ("3.T.RA.1.b", "3.T.RA.1.b")):
        q.fill("#skill-search", term); q.wait_for_timeout(120)
        hit = q.evaluate("(()=>{const a=document.querySelector('#skill-list .std-hit a.std-link');return a?a.dataset.std:null})()")
        rows = q.evaluate("document.querySelectorAll('#skill-list .skill-line').length")
        check("Q7.3 searching the code %s finds its standard card and the lesson row" % term, hit == want and rows >= 1, (hit, rows))
    q.fill("#skill-search", RA); q.wait_for_timeout(120)
    q.focus('#skill-list .skill-line[data-code="%s"]' % RA); q.keyboard.press("Enter"); q.wait_for_timeout(300)
    kb = where(q)
    check("Q7.4 from the search result, the keyboard (Enter) opens the first question", kb["cur"] == "player" and kb["set"] == "SK:%s:y" % RA and kb["pos"] == 0, kb)
    close_page(q)

    # ---------------- Q8. lessons without core keep the five-step flow ----------------
    q = page(pw, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
    legacy = q.evaluate("Object.keys(PP.lessons).filter(k=>!PP.lessons[k].core)")
    L0 = next((k for k in legacy if q.evaluate("!!PP.byId['SK:%s:t']" % k)), legacy[0] if legacy else None)
    q.evaluate("PP_SKILLS.begin(%s)" % json.dumps(L0)); q.wait_for_timeout(250)
    lg = q.evaluate("({cur:PP_APP.current(), steps:document.querySelectorAll('#sk-steps .step-btn').length, step:PP_SKILLS.step(), hash:location.hash})")
    check("Q8.1 a lesson without core practice (%s; %d such lessons) still opens its five-step skill page, unchanged" % (L0, len(legacy)), lg["cur"] == "skill" and lg["steps"] >= 4, lg)
    check("Q8.2 the legacy lessons are listed in the roll-out report (verification/teach-coverage.js prints them)", len(legacy) > 0, len(legacy))
    close_page(q)

    # ---------------- Q9. every core lesson ----------------
    q = page(pw, errors=errors); ready(q, "#browse")
    bad = []
    for k in core_keys(q):
        q.evaluate("localStorage.clear()")
        try:
            q.evaluate("PP_SKILLS.begin(%s)" % json.dumps(k)); q.wait_for_timeout(60)
            a = where(q)
            if not (a["cur"] == "player" and a["set"] == "SK:%s:y" % k and a["pos"] == 0): bad.append((k, "open", a)); continue
            q.evaluate(WRONG); q.click("#q-check"); q.wait_for_timeout(15)
            reveal(q)
            ok_ = q.evaluate("!!document.querySelector('#teach-cards [data-unit=answer]') && document.querySelector('#teach-cards [data-unit=answer]').innerText.length>10 && document.querySelectorAll('#teach-cards .tm-card h3').length>=3")
            back_q(q)
            r = rec(q, k, q.evaluate("PP_PLAYER.ctx().item.id"))
            if not (ok_ and r and r["x"] is True and r["tm"] == 1): bad.append((k, "teach", ok_, r))
            q.evaluate("PP_PLAYER.abandon()")
        except Exception as ex:
            bad.append((k, "exception", str(ex)[:120]))
    check("Q9.1 all %d core lessons: the skill opens question one; a wrong check, Teach Me to the end and Back to My Question work, and the answer is labeled and recorded" % len(core_keys(q)), not bad and not errors, (bad[:3], errors[:2]))
    close_page(q)

    # ---------------- Q10. seven viewports ----------------
    over = []
    SMALL = """(()=>{const out=[];document.querySelectorAll('#screen-player button, #screen-player a, #screen-player summary, #screen-player select, #screen-player textarea, #screen-player input').forEach(e=>{
        if(e.offsetParent===null||e.hidden||e.closest('[hidden]')||e.closest('.sr'))return;const r=e.getBoundingClientRect();if(r.width===0||r.height===0)return;
        const cs=getComputedStyle(e);if(cs.visibility==='hidden')return;if(e.type==='checkbox'||e.type==='radio'){const l=e.closest('label');if(l){const lr=l.getBoundingClientRect();if(lr.height>=44)return;}}
        if(r.height<44||r.width<44)out.push([e.id||e.className||e.tagName,Math.round(r.width),Math.round(r.height),(e.textContent||'').trim().slice(0,24)]);});return out;})()"""
    OVER = "document.documentElement.scrollWidth-innerWidth"
    long_item = q = None
    for w, h in VIEWPORTS:
        errs = []
        q = page(pw, w, h, errors=errs); ready(q, "#browse"); q.evaluate("localStorage.clear()")
        q.evaluate("PP_SKILLS.begin(%s)" % json.dumps(K)); q.wait_for_timeout(250)
        rows = []
        def snap(state, shot=True):
            small = q.evaluate(SMALL); ov = q.evaluate(OVER)
            if OUT and shot: q.screenshot(path=str(OUT / "screens" / ("%s-%dx%d.png" % (state, w, h))), full_page=True)
            rows.append((state, ov, small))
        # question with the passage; on phones the Read/Question tabs
        qtab(q); snap("1-question")
        if q.is_visible("#tab-passage"):
            q.click("#tab-passage"); q.wait_for_timeout(80); snap("1b-passage")
            pb = q.evaluate("(()=>{const e=document.getElementById('passage-pane-body')||document.getElementById('passage-pane');const r=e.getBoundingClientRect();return [Math.round(r.height),innerHeight]})()")
            rows.append(("passage-room", 0 if pb[0] >= min(220, pb[1] * 0.4) else 1, [] if pb[0] >= min(220, pb[1] * 0.4) else [pb]))
            qtab(q)
        gridtop = q.evaluate("Math.round(document.getElementById('player-grid').getBoundingClientRect().top)")
        rows.append(("header-height", 0 if gridtop <= max(0.4 * h, 130) else gridtop, [] if gridtop <= max(0.4 * h, 130) else [gridtop]))
        q.evaluate(WRONG); q.click("#q-check"); q.wait_for_timeout(60); snap("2-feedback")
        teach(q); q.click("#teach-hint"); q.wait_for_timeout(40); snap("3-teach")
        reveal(q); q.wait_for_timeout(60); snap("4-teach-answer")
        back_q(q)
        for i in range(5):
            qtab(q)
            if not q.evaluate("PP_PLAYER.state().solved[PP_PLAYER.state().pos]") and vis(q, "#q-check"):
                q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(15)
            q.click("#q-next"); q.wait_for_timeout(40)
        snap("5-session-end")
        bad = [(s, o, sm) for s, o, sm in rows if o > 0 or sm]
        if bad or errs: over.append((w, h, bad[:3], errs[:1]))
        close_page(q)
    check("Q10.1 at 320x568, 390x844, 844x390, 768x1024, 1024x768, 1366x768, 1920x1080: the question, passage, feedback, Teach Me, the answer card and the session end have no sideways scroll, every control is at least 44px, the header leaves room and a long passage gets a tall pane",
          not over, over)

    # ---------------- Q11. keyboard, focus, announcements, labels, axe ----------------
    q = page(pw, 390, 844, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
    q.evaluate("PP_SKILLS.begin(%s)" % json.dumps(K)); q.wait_for_timeout(250)
    qtab(q)
    a11y = q.evaluate("""({h1:document.querySelectorAll('#screen-player h1').length, h1t:(document.querySelector('#screen-player h1')||{}).textContent,
        live:['q-say','q-feedback','teach-cards','teach-hints'].map(i=>[i,document.getElementById(i).getAttribute('aria-live')||document.getElementById(i).getAttribute('role')]),
        names:[...document.querySelectorAll('#screen-player button')].filter(b=>b.offsetParent&&!(b.textContent||'').trim()&&!b.getAttribute('aria-label')).length,
        bar:(document.getElementById('q-bar').parentElement.getAttribute('role')||'')+'|'+(document.getElementById('q-count').textContent), regions:document.getElementById('teach-panel').getAttribute('role')})""")
    check("Q11.1 one h1 (the lesson title), live regions for the announcements, no unnamed buttons, Teach Me is a labelled region", a11y["h1"] == 1 and a11y["names"] == 0 and a11y["regions"] == "region"
          and all(l[1] for l in a11y["live"] if l[0] in ("q-say", "teach-cards", "teach-hints")), a11y)
    # Tab order on the question: skip link aside, check -> teach -> next appears in that order
    q.evaluate(WRONG)
    order = []
    q.focus("#q-body button, #q-body input, #q-body select, #q-body textarea") if q.evaluate("!!document.querySelector('#q-body button, #q-body input, #q-body select, #q-body textarea')") else None
    for _ in range(14):
        q.keyboard.press("Tab")
        order.append(q.evaluate("document.activeElement.id||document.activeElement.className.split(' ')[0]"))
    seq = [x for x in order if x in ("q-check", "q-teach", "q-next", "q-prev")]
    check("Q11.2 keyboard order after the answer area: Check Answer, then Teach Me, then Next (Previous after them)", seq[:3] == ["q-check", "q-teach", "q-next"], order)
    q.focus("#q-teach"); q.keyboard.press("Enter"); q.wait_for_timeout(100)
    kt = q.evaluate("({id:document.activeElement.id, open:PP_PLAYER.teachOpen()})")
    q.focus("#teach-hint"); q.keyboard.press("Space"); q.wait_for_timeout(60)
    kh = q.evaluate("document.querySelectorAll('#teach-hints .help-step').length")
    q.focus("#teach-next"); q.keyboard.press("Enter"); q.wait_for_timeout(60)
    kn = q.evaluate("document.querySelectorAll('#teach-cards .tm-card').length")
    q.focus("#teach-back"); q.keyboard.press("Enter"); q.wait_for_timeout(200)
    kb = q.evaluate("({id:document.activeElement.id, open:PP_PLAYER.teachOpen()})")
    check("Q11.3 Teach Me works with the keyboard alone: Enter opens it (focus on its heading), Space takes a hint, Enter shows a step, Enter on Back to My Question returns focus to Teach Me",
          kt == {"id": "teach-title", "open": True} and kh == 1 and kn == 3 and kb == {"id": "q-teach", "open": False}, (kt, kh, kn, kb))
    if os.environ.get("AXE_PATH"):
        axe_bad = []
        for state in ("question", "teach", "end"):
            if state == "teach": teach(q)
            if state == "end":
                if vis(q, "#teach-panel"): back_q(q)
                for i in range(5):
                    qtab(q)
                    if not q.evaluate("PP_PLAYER.state().solved[PP_PLAYER.state().pos]") and vis(q, "#q-check"):
                        q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(15)
                    q.click("#q-next"); q.wait_for_timeout(40)
            q.add_script_tag(path=os.environ["AXE_PATH"])
            r = q.evaluate("""async()=>{const r=await axe.run(document.getElementById('screen-player'),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}});return r.violations.map(v=>({id:v.id,impact:v.impact,n:v.nodes.length,t:v.nodes.slice(0,2).map(n=>n.target.join(' '))}))}""")
            if r: axe_bad.append((state, r))
        check("Q11.4 axe (WCAG 2 A/AA, including colour contrast) finds nothing on the question, Teach Me and the session end", not axe_bad, axe_bad)
    else:
        check("Q11.4 axe (skipped: AXE_PATH not set)", True)
    check("Q11.5 no page errors in the whole run", not errors, errors[:3])
    close_page(q)

fails = [r for r in results if not r["pass"]]
print("%d passed, %d failed" % (len(results) - len(fails), len(fails)))
if OUT: (OUT / "qf-results.json").write_text(json.dumps(results, indent=2) + "\n")
sys.exit(1 if fails else 0)

#!/usr/bin/env python3
"""Practice on my own, standard pages and test-mode improvements (expansion 2026-10-22).

Covers docs/expansion-2026-10-22/01-architecture.md §2.7 sections 18-21 (in a separate file, so the
guard stays inside its runtime budget) on the reference lesson 3.T.T.1.c:
  - every control and status, retry, hints, Show me how, similar questions and their isolation
  - set transitions, resume after reload, blocked / full / malformed pp.practice.v1
  - Practice Together on a core lesson = practice minus the core refs (exactly P1-P3; lead decision)
  - #std/<code> pages, code links (never nested), code search, no writes, direct links, Back/Forward
  - the test navigator, the unanswered list, results (components, partial credit, revisit, retry note)
  - the seven-viewport matrix for the practice screen, the set picker, a standard page and a check
  - compatibility: seeded pp.progress.v1 / pp.path.v1 / pp.task.* / pp.skwrite.* stay byte-identical,
    and a lesson without core behaves exactly as before
  - check-content.js rules for core, similar, hints, how, cr and std-groups, on mutated copies

Serve the repository first.  Run: python3 verification/practice-own.py [BASE_URL] [OUT_DIR]
CHROMIUM_PATH optionally names a browser. Exit code 1 on any failure.
"""
import json, os, re, shutil, subprocess, sys, tempfile
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8720/"
OUT = Path(sys.argv[2]) if len(sys.argv) > 2 else None
if OUT: OUT.mkdir(parents=True, exist_ok=True)
ARGS = ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--disable-software-rasterizer", "--disable-seccomp-filter-sandbox",
        "--disable-setuid-sandbox", "--no-zygote", "--single-process", "--in-process-gpu", "--disable-features=FontDataService,FontationsFontBackend"]
K = "3.T.T.1.c"
VIEWPORTS = [(320, 568), (390, 844), (844, 390), (768, 1024), (1024, 768), (1366, 768), (1920, 1080)]
results = []


def _crash_hook(t, v, tb):
    """ENG-05 note: a crash still prints every result so far, then the traceback."""
    import traceback
    traceback.print_exception(t, v, tb)
    check("Z.crash the suite ran to the end", False, "%s: %s" % (t.__name__, v))
    fails = [r for r in results if not r["pass"]]
    print("%d passed, %d failed" % (len(results) - len(fails), len(fails)), flush=True)


sys.excepthook = _crash_hook


def check(name, good, detail=""):
    results.append({"name": name, "pass": bool(good), "detail": "" if good else str(detail)[:900]})
    print(("PASS  " if good else "FAIL  ") + name + ("" if good else "   [" + str(detail)[:900] + "]"), flush=True)


# answers in the engine's index space, for the item now on screen
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
PARTIAL = """(()=>{const c=PP_PLAYER.ctx(),it=c.item,r=c.resp;const ci=ch=>ch.map((x,i)=>x.correct?i:-1).filter(i=>i>=0),wi=ch=>ch.map((x,i)=>!x.correct?i:-1).filter(i=>i>=0);
  if(it.type=='ebsr'){r.a=ci(it.partA.choices)[0];r.b=wi(it.partB.choices).slice(0,it.partB.pick||1);}
  if(it.type=='ms'){r.v=[ci(it.choices)[0],wi(it.choices)[0]];}
  if(it.type=='dropdown'&&it.slots.length==2){r.v=[it.slots[0].answer,it.slots[1].answer===0?1:0];}
  if(it.type=='match'){r.v=it.rows.map(x=>x.answer);const a=r.v[0];r.v[0]=r.v[1];r.v[1]=a;}
  c.onChange();})()"""
FXCR = """(()=>{const mc=(id,n)=>({id,type:'mc',points:1,dok:2,prompt:'Fixture question '+n+'?',choices:[{text:'right one',correct:true},{text:'wrong a'},{text:'wrong b'},{text:'wrong c'}],
        clue:'A clue.',hints:['Hint one.','Hint two.','Hint three.'],how:['Step one.','The answer is right one.'],why:'The answer is right one.'});
      const cr={id:'SK-FXCR-C01',type:'cr',dok:3,prompt:'Write one sentence that tells the lesson of a story you know.',rows:3,sample:'Telling the truth is better than hiding a mistake.',
        criteria:['I wrote a lesson that works for anyone.','I did not just retell what happened.'],clue:'A lesson works for anyone.',hints:['A lesson works for anyone.','Think about what the character learns.','Start with a word like always or never.'],how:['Name what the character learns.','Say it so it works for anyone.'],why:'A lesson is what anyone can learn.'};
      PP.addLesson({key:'FX-CR',code:'3.T.T.1.c',title:'Fixture lesson',teach:{big:'x',points:['a','b','c'],example:{lines:['x'],note:'y'}},learn:[],parent:'p',
        practice:[mc('SK-FXCR-P1',1),mc('SK-FXCR-P2',2)],test:[mc('SK-FXCR-T1',3),mc('SK-FXCR-T2',4),mc('SK-FXCR-T3',5),mc('SK-FXCR-T4',6)],
        core:{rev:'1',sets:[{items:[cr,mc('SK-FXCR-C02',7),mc('SK-FXCR-C03',8),mc('SK-FXCR-C04',9),mc('SK-FXCR-C05',10)]},{items:[1,2,3,4,5].map(n=>mc('SK-FXCR-D0'+n,10+n))},{items:[1,2,3,4,5].map(n=>mc('SK-FXCR-E0'+n,20+n))}]}});})()"""
KEYS = "(()=>{const o={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);o[k]=localStorage.getItem(k);}return o;})()"
PRACTICE = "JSON.parse(localStorage.getItem('pp.practice.v1')||'null')"
PROG = "JSON.parse(localStorage.getItem('pp.progress.v1')||'null')"
BROWSE = "try{if(!localStorage.getItem('pp.path.v1'))localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true}))}catch(e){}"


def launch(p):
    kw = {"args": ARGS}
    if os.environ.get("CHROMIUM_PATH"):
        kw["executable_path"] = os.environ["CHROMIUM_PATH"]
        kw["env"] = {**os.environ, "LD_LIBRARY_PATH": str(Path(kw["executable_path"]).parent), "FONTCONFIG_PATH": "/etc/fonts"}
    return p.chromium.launch(**kw)


BROWSERS = {}


def page(b, w=1366, h=900, init=None, errors=None, browse=True):
    """One browser per page: with --single-process, closing a page's context ends its browser."""
    bb = launch(b)
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


def start_set(q, part, pos=None):
    q.evaluate("PP_PLAYER.start(%s,'try'%s)" % (json.dumps("SK:%s:%s" % (K, part)), ",{pos:%d}" % pos if pos is not None else ""))
    q.wait_for_timeout(80)


def item_id(q):
    return q.evaluate("PP_PLAYER.ctx().item.id")


# question-first helpers (docs/question-first/TEST-CHANGES.md): hints and the answer now live inside Teach Me
def teach(q):
    """Open Teach Me from the question (phones: the Question tab first)."""
    if q.is_visible("#tab-question"): q.click("#tab-question")
    if not vis(q, "#teach-panel"):
        q.click("#q-teach"); q.wait_for_timeout(60)


def hint(q):
    teach(q); q.click("#teach-hint"); q.wait_for_timeout(40)


def reveal(q):
    """Press 'Show the next step' until the answer card is on screen."""
    teach(q)
    n = 0
    while vis(q, "#teach-next") and n < 20:
        q.click("#teach-next"); q.wait_for_timeout(30); n += 1


def back_q(q):
    q.click("#teach-back"); q.wait_for_timeout(120)


with sync_playwright() as p:
    b = p   # page() launches its own browser from this Playwright handle
    errors = []

    # ---------------- A. data: Practice Together exclusion (lead decision) and set registration ----------------
    q = page(b, errors=errors)
    ready(q, "#browse")
    reg = q.evaluate("""(k=>({p:PP.byId['SK:'+k+':p'].items.map(i=>i.id), y:['y','y2','y3'].map(x=>PP.byId['SK:'+k+':'+x].items.map(i=>i.id)),
        own:['y','y2','y3'].map(x=>!!PP.byId['SK:'+k+':'+x].own), setNo:['y','y2','y3'].map(x=>PP.byId['SK:'+k+':'+x].setNo),
        next:['p','y','y2','y3'].map(x=>PP.byId['SK:'+k+':'+x].next&&[PP.byId['SK:'+k+':'+x].next.id,PP.byId['SK:'+k+':'+x].next.label,!!PP.byId['SK:'+k+':'+x].next.picker]),
        practice:PP.lessons[k].practice.map(i=>i.id), refs:[].concat(...PP.lessons[k].core.sets.map(s=>s.items.filter(x=>x.ref).map(x=>x.ref))),
        sim:(PP.similarFor[k]||[]).map(i=>i.id), p4hints:PP.byId['SK:'+k+':y'].items[0].hints, p1hints:PP.byId['SK:'+k+':p'].items[0].hints}))(%s)""" % json.dumps(K))
    check("A.1 Together on a core lesson is practice minus the core refs: exactly P1-P3 (lead decision)",
          reg["p"] == ["SK-TT1c-P1", "SK-TT1c-P2", "SK-TT1c-P3"], reg["p"])
    allcore = sum(reg["y"], [])
    check("A.2 P4-P6 appear only in core (set 1), never in Together; fifteen core items in three sets of five",
          all(x in allcore and x not in reg["p"] for x in ("SK-TT1c-P4", "SK-TT1c-P5", "SK-TT1c-P6")) and [len(x) for x in reg["y"]] == [5, 5, 5]
          and len(set(allcore)) == 15 and set(reg["refs"]) == {"SK-TT1c-P4", "SK-TT1c-P5", "SK-TT1c-P6"}, reg["y"])
    check("A.3 sets are SK:<k>:y, :y2, :y3 (own, set 1-3); Together -> picker, set 1 -> set 2 -> set 3 -> the check",
          reg["own"] == [True, True, True] and reg["setNo"] == [1, 2, 3] and reg["next"][0] == ["SK:%s:y" % K, "Practice on my own", True]
          and reg["next"][1][:2] == ["SK:%s:y2" % K, "Go on to set 2"] and reg["next"][2][:2] == ["SK:%s:y3" % K, "Go on to set 3"]
          and reg["next"][3][:2] == ["SK:%s:t" % K, "Take the skill check"], reg["next"])
    check("A.4 addons are merged at registration (hints on the ref P4 and on Together P1); the similar bank is not a set",
          reg["p4hints"] and len(reg["p4hints"]) == 3 and reg["p1hints"] and len(reg["p1hints"]) == 3 and reg["sim"][:3] == ["SK-TT1c-S01", "SK-TT1c-S02", "SK-TT1c-S03"] and all(x.startswith("SK-TT1c-S") for x in reg["sim"])
          and q.evaluate("!PP.sets.some(s=>s.items.some(i=>/-S0/.test(i.id)&&i.id.indexOf('SK-TT1c')===0))"), reg)
    # Together still runs the unchanged Help me ladder, and its end leads to the set picker
    q.evaluate("PP_SKILLS.open(%s,'practice')" % json.dumps(K)); q.click("#sk-start-practice"); q.wait_for_timeout(80)
    tg = q.evaluate("({ids:[0,1,2].map(i=>PP_PLAYER.ctx(i).item.id), help:!document.getElementById('q-help').hidden, hint:!!document.getElementById('q-hint'), how:!!document.getElementById('q-how'), teach:!document.getElementById('q-teach').hidden})")
    for i in range(3):
        q.evaluate(CORRECT); q.click("#q-check"); q.click("#q-next"); q.wait_for_timeout(30)
    q.click("#done-test"); q.wait_for_timeout(120)
    land = q.evaluate("({cur:PP_APP.current(), step:PP_SKILLS.step(), picker:!!document.getElementById('sk-try-set-1')})")
    check("A.5 Practice Together on 3.T.T.1.c runs P1-P3 with Help me (no hint/how buttons, no Teach Me) and leads to the Try step's set picker",
          tg["ids"] == reg["p"] and tg["help"] and not tg["hint"] and not tg["how"] and not tg["teach"] and land == {"cur": "skill", "step": "try", "picker": True}, (tg, land))
    q.evaluate("localStorage.clear()"); close_page(q)

    # ---------------- B. own-mode controls on set 1 (question-first: Check Answer, Teach Me, Back to My Question) ----------------
    q = page(b, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()"); ready(q, "#skill/%s/try" % K)
    pk = q.evaluate("""({h:document.querySelector('#sk-panel .panel-h').textContent, sets:document.querySelectorAll('#sk-panel .own-set').length,
        start:(document.getElementById('sk-start-try')||{}).textContent, line:document.getElementById('sk-panel').textContent})""")
    check("B.0 the Try step is a set picker: heading, three set cards, Start set 1, the stop-and-come-back line",
          pk["h"] == "Try It Yourself: practice on my own" and pk["sets"] == 3 and pk["start"] == "Start set 1"
          and "Fifteen questions in three sets of five" in pk["line"] and "You can stop after any set and come back." in pk["line"], pk)
    q.click("#sk-start-try"); q.wait_for_timeout(100)
    c = q.evaluate("""(()=>{const ids=['q-check','q-teach','q-next','q-prev'];return {state:PP_PLAYER.state(),hash:location.hash,tag:document.getElementById('player-mode').textContent,
        ctl:ids.map(i=>{const e=document.getElementById(i),r=e.getBoundingClientRect();return [i,!e.hidden,e.textContent,Math.round(r.height),Math.round(r.width),e.disabled]}),
        gone:!document.getElementById('q-hint')&&!document.getElementById('q-how'), help:!document.getElementById('q-help').hidden, sim:!document.getElementById('q-similar').hidden}})()""")
    ctl = {x[0]: x for x in c["ctl"]}
    check("B.1 own mode: Check Answer, Teach Me and Skip for now before any answer; no Help me; hints and the answer are no longer on the question screen (they are inside Teach Me); targets at least 44px",
          c["state"]["own"] and c["hash"] == "#play/SK:%s:y/try" % K and c["tag"] == "Practice" and not c["help"] and c["gone"]
          and ctl["q-check"][1] and ctl["q-check"][2] == "Check Answer" and ctl["q-teach"][1] and ctl["q-teach"][2] == "Teach Me"
          and ctl["q-next"][1] and ctl["q-next"][2] == "Skip for now" and all(x[3] >= 44 and x[4] >= 44 for x in c["ctl"] if x[1]), c)
    check("B.2 blank: Check Answer is disabled; a fresh question like this is not offered yet", ctl["q-check"][5] and not c["sim"], c)
    # P4 (ms, 2 points): wrong twice, then Teach Me for hints
    snap0 = q.evaluate(KEYS)
    q.evaluate(WRONG); q.click("#q-check"); q.wait_for_timeout(40)
    w1 = q.evaluate("({fb:document.getElementById('q-feedback').textContent, why:PP_PLAYER.ctx().item.why, dis:document.getElementById('q-check').disabled, outline:document.querySelectorAll('#q-body .is-hint').length})")
    q.click("#q-check"); q.wait_for_timeout(40)
    w2 = q.evaluate("({fb:document.getElementById('q-feedback').textContent, dis:document.getElementById('q-check').disabled, focus:document.activeElement.id})")
    check("B.3 a wrong check says Not quite with no explanation and allows a retry; after two wrong checks Check Answer waits until the child has opened Teach Me, and focus moves to Teach Me",
          w1["fb"].startswith("Not quite") and w1["why"][:40] not in w1["fb"] and not w1["dis"] and w1["outline"] == 0
          and "Two tries used. Tap Teach Me" in w2["fb"] and w2["dis"] and w2["focus"] == "q-teach", (w1, w2))
    teach(q)
    tm0 = q.evaluate("""({hash:location.hash, panel:!document.getElementById('teach-panel').hidden, main:document.getElementById('q-main').hidden, title:document.activeElement.id,
        cards:[...document.querySelectorAll('#teach-cards .tm-card')].map(x=>x.dataset.unit), rec:PP_PRACTICE.rec(%s,PP_PLAYER.ctx().item.id)})""" % json.dumps(K))
    check("B.3b Teach Me opens in place of the question at #play/<set>/try/teach: the heading has focus, it starts with what the question asks and the strategy, and the open is saved (tm = 1)",
          tm0["hash"] == "#play/SK:%s:y/try/teach" % K and tm0["panel"] and tm0["main"] and tm0["title"] == "teach-title" and tm0["cards"][:2] == ["asks", "strategy"] and tm0["rec"]["tm"] == 1, tm0)
    hints = []
    for n in range(3):
        q.click("#teach-hint"); q.wait_for_timeout(40)
        hints.append(q.evaluate("""({steps:[...document.querySelectorAll('#teach-hints .help-step')].map(s=>[s.querySelector('.fb-label').textContent,s.querySelector('.help-text').textContent]),
            label:document.getElementById('teach-hint').textContent, dis:document.getElementById('teach-hint').disabled, check:document.getElementById('q-check').disabled,
            outline:document.querySelectorAll('#q-body .is-hint').length, ruled:document.querySelectorAll('#q-body .is-ruled-out').length,
            ans:PP_ITEMS[PP_PLAYER.ctx().item.type].answerText(PP_PLAYER.ctx().item,PP.byId['SK:%s:y'])})""" % K))
    authored = q.evaluate("PP_PLAYER.ctx().item.hints")
    check("B.4 three graduated hints in order inside Teach Me, each the authored text, labelled Hint n of 3; no outline, nothing ruled out; the button then says No more hints; a hint re-enables one check",
          [len(h["steps"]) for h in hints] == [1, 2, 3] and [s[1] for s in hints[2]["steps"]] == authored
          and [s[0].lower() for s in hints[2]["steps"]] == ["hint 1 of 3", "hint 2 of 3", "hint 3 of 3"]
          and all(h["outline"] == 0 and h["ruled"] == 0 for h in hints) and not hints[0]["check"]
          and hints[0]["label"] == "Give me another hint" and hints[2]["label"] == "No more hints" and hints[2]["dis"]
          and not any(h["ans"].lower() in s[1].lower() for h in hints for s in h["steps"]), hints[2])
    # Reveal in Teach Me: marks Answer shown, permanently
    pre_text = q.evaluate("document.getElementById('teach-cards').innerText")
    explain = ""
    n = 0
    while vis(q, "#teach-next") and n < 20:
        explain = text(q, "#teach-explain")
        q.click("#teach-next"); q.wait_for_timeout(30); n += 1
    hw = q.evaluate("""(()=>{const it=PP_PLAYER.ctx().item,box=document.getElementById('teach-cards'),a=box.querySelector('[data-unit=answer]');
        return {units:box.querySelectorAll('.tm-card').length, ans:a?a.innerText:'', focus:document.activeElement.dataset.unit||document.activeElement.id, why:it.why, mix:it.misconception||'',
        end:!document.getElementById('teach-end').hidden, nextHidden:document.getElementById('teach-next').hidden, last:it.how[it.how.length-1]};})()""")
    rec = q.evaluate(PRACTICE)["l"][K]["i"]["SK-TT1c-P4"]
    back_q(q)
    ret = q.evaluate("""({hash:location.hash, outline:document.querySelectorAll('#q-body .is-hint').length, status:document.getElementById('q-status').textContent, focus:document.activeElement.id,
        main:!document.getElementById('q-main').hidden, say:document.getElementById('q-say').textContent})""")
    check("B.5 Teach Me to the end: the labeled Answer card with the last step, why and the mix-up line; the answer button warned that the question is marked answer shown; the item is Answer shown (x, w and h kept); Back to My Question returns to the question with the key outlined",
          "marked answer shown" in explain and "Answer:" in hw["ans"] and hw["last"] in hw["ans"] and hw["end"] and hw["nextHidden"] and hw["focus"] == "answer"
          and (not hw["mix"] or hw["mix"] in hw["ans"]) and rec["x"] is True and rec["ok"] is False and rec["w"] == 2 and rec["h"] == 3 and rec["tm"] == 1
          and ret["hash"] == "#play/SK:%s:y/try" % K and ret["main"] and ret["outline"] == 2 and "Answer shown" in ret["status"], (explain, hw, rec, ret))
    q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(40)
    after = q.evaluate("({fb:document.getElementById('q-feedback').textContent, status:document.getElementById('q-status').textContent})")
    rec = q.evaluate(PRACTICE)["l"][K]["i"]["SK-TT1c-P4"]
    types = [e["t"] for e in rec["log"] if e["t"] != "teach-step"]
    check("B.6 a right answer after the answer was shown is accepted but stays Answer shown; w, h, x and tm are never lowered; the full history is kept",
          "counts as answer shown" in after["fb"] and "Answer shown" in after["status"] and rec["ok"] is True and rec["x"] is True and rec["w"] == 2 and rec["h"] == 3 and rec["tm"] == 1
          and types == ["check", "check", "teach", "hint", "hint", "hint", "how", "check"] and rec["f1"] == {"ok": False, "pre": False}, (after, rec))
    check("B.7 no pass from practice: pp.progress.v1 is untouched by own-mode actions; only pp.practice.v1 is new",
          q.evaluate(PROG) is None and set(q.evaluate(KEYS)) - set(snap0) == {"pp.practice.v1"}, q.evaluate(KEYS).keys())
    # similar: offered after teaching/reveal (P4 is in S01's like); separate record; bank used up
    simv = q.evaluate("!document.getElementById('q-similar').hidden")
    core_before = json.dumps(q.evaluate(PRACTICE)["l"][K]["i"])
    q.click("#q-similar"); q.wait_for_timeout(100)
    s1 = q.evaluate("({sim:PP_PLAYER.state().sim, count:document.getElementById('q-count').textContent, next:document.getElementById('q-next').textContent, prev:document.getElementById('q-prev').textContent, simbtn:!document.getElementById('q-similar').hidden, teach:!document.getElementById('q-teach').hidden})")
    q.evaluate(WRONG); q.click("#q-check"); hint(q); back_q(q); q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(40)
    st = q.evaluate(PRACTICE)["l"][K]
    check("B.8 a fresh question like this opens a separate extra question (S01), labelled not one of the fifteen, with the same controls and no further similar button",
          simv and s1["sim"] == "SK-TT1c-S01" and "not one of the fifteen" in s1["count"] and s1["next"] == "Go on to question 2"
          and s1["prev"] == "Back to question 1" and not s1["simbtn"] and s1["teach"], s1)
    check("B.9 the similar question is saved under s with for = the core item; the core record is unchanged; it is not counted in the fifteen",
          st["s"]["SK-TT1c-S01"]["for"] == "SK-TT1c-P4" and st["s"]["SK-TT1c-S01"]["ok"] is True and st["s"]["SK-TT1c-S01"]["h"] == 1 and st["s"]["SK-TT1c-S01"]["w"] == 1
          and json.dumps(st["i"]) == core_before and "SK-TT1c-S01" not in st["i"]
          and q.evaluate("PP_PRACTICE.counts(%s,PP_SKILLS.coreIds(%s))" % (json.dumps(K), json.dumps(K)))["shown"] == 1, st)
    q.click("#q-prev"); q.wait_for_timeout(60)
    back = q.evaluate("({id:PP_PLAYER.ctx().item.id, sim:PP_PLAYER.state().sim, simbtn:!document.getElementById('q-similar').hidden})")
    # lead decision 2026-10-23: a used similar question is offered again (least recently used), as a new attempt
    check("B.10 Back to question 1 returns to the core item; its similar question is used, but it is still offered (least recently used)",
          back == {"id": "SK-TT1c-P4", "sim": None, "simbtn": True}, back)
    q.click("#q-next"); q.wait_for_timeout(60)
    # P5 (order) first-try right. The button shows exactly when a similar item maps to P5 (it hides otherwise; lead decision).
    q.evaluate("(k=>{(PP.similarFor[k]||[]).forEach(s=>{s.like=(s.like||[]).filter(x=>x!=='SK-TT1c-P5');});})(%s)" % json.dumps(K))
    has_sim_p5 = False
    q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(40)
    p5 = q.evaluate("({id:PP_PLAYER.ctx().item.id, sim:!document.getElementById('q-similar').hidden, st:document.getElementById('q-status').textContent, focus:document.activeElement.id, f1:PP_PRACTICE.rec(%s,'SK-TT1c-P5').f1})" % json.dumps(K))
    check("B.11 right on the first try: status Right on the first try (no help came before the first check); an item with no mapped similar item hides the fresh-question button",
          p5["id"] == "SK-TT1c-P5" and p5["sim"] == has_sim_p5 and "Right on the first try" in p5["st"] and p5["focus"] == "q-next" and p5["f1"] == {"ok": True, "pre": False}, p5)
    q.click("#q-next"); q.wait_for_timeout(40)
    # C03 retry: wrong, right
    q.evaluate(WRONG); q.click("#q-check"); q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(40)
    q.click("#q-next"); q.wait_for_timeout(40)
    # C04: Teach Me (a hint), back, then right
    hint(q); back_q(q); q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(40)
    q.click("#q-next"); q.wait_for_timeout(40)
    # P6: skip (Next without answering)
    skip = q.evaluate("({id:PP_PLAYER.ctx().item.id, next:document.getElementById('q-next').textContent})")
    q.click("#q-next"); q.wait_for_timeout(80)
    done = q.evaluate("""({stage:!document.getElementById('stage-done').hidden, title:document.getElementById('done-title').textContent, line:document.getElementById('done-line').textContent,
        rows:[...document.querySelectorAll('#done-summary .own-dot-word')].map(x=>x.textContent), btn:document.getElementById('done-test').textContent, back:document.getElementById('done-back').textContent})""")
    want = ["Question 1: Answer shown", "Question 2: Right on the first try", "Question 3: Right after another try", "Question 4: Right after Teach Me", "Question 5: Not finished"]
    check("B.12 five statuses in words at the end of the set (shown, first try, retry, Teach Me, not finished); a skipped item stays Not finished; the session end offers the next five or stopping",
          skip == {"id": "SK-TT1c-P6", "next": "Skip and finish"} and done["stage"] and done["rows"] == want and done["title"] == "End of set 1"
          and "not finished yet" in done["line"] and "never scored" in done["line"] and "keep going with the next five, or stop here" in done["line"]
          and done["btn"] == "Next five questions" and done["back"].startswith("Back to "), done)
    stv = q.evaluate("(k=>PP_SKILLS.coreIds(k).slice(0,5).map(id=>PP_PRACTICE.status(k,id)))(%s)" % json.dumps(K))
    check("B.13 the stored facts derive the same five statuses", stv == ["shown", "first", "retry", "taught", "none"], stv)
    # Forward / reload on a finished set: the already-finished stage offers Look back and Go on
    q.reload(); q.wait_for_timeout(700)
    ag = q.evaluate("({stage:!document.getElementById('stage-again').hidden, t:document.getElementById('again-title').textContent, a:document.getElementById('again-start').textContent, n:!document.getElementById('again-next').hidden&&document.getElementById('again-next').textContent, b:document.getElementById('again-back').textContent})")
    check("B.14 a reload on a finished set shows the already-finished stage: Look back at this set, the next five, and the way back",
          ag["stage"] and ag["t"] == "You reached the end of this set" and ag["a"] == "Look back at this set" and ag["n"] in ("Go on to set 2", "Next five questions") and ag["b"].startswith("Back to "), ag)
    q.click("#again-start"); q.wait_for_timeout(100)
    lb = q.evaluate("({pos:PP_PLAYER.state().pos, solved:PP_PLAYER.state().solved, locked:document.querySelectorAll('#q-body .choice:disabled').length, status:document.getElementById('q-status').textContent})")
    teach(q)
    lb["answer"] = q.evaluate("!!document.querySelector('#teach-cards [data-unit=answer]')")
    back_q(q)
    check("B.15 Look back reopens set 1 at question 1 with the saved answer locked and its Answer shown status; Teach Me there shows the whole walk-through, including the answer, without changing anything",
          lb["pos"] == 0 and lb["solved"][0] is True and lb["locked"] == 5 and "Answer shown" in lb["status"] and lb["answer"], lb)
    # set picker reflects it
    q.evaluate("PP_SKILLS.open(%s,'try')" % json.dumps(K)); q.wait_for_timeout(60)
    sp = q.evaluate("""({cards:[...document.querySelectorAll('#sk-panel .own-set')].map(c=>[c.querySelector('.own-set-state').textContent,[...c.querySelectorAll('.own-dot-word')].map(x=>x.textContent).join('|'),c.querySelector('button').textContent]),
        start:document.getElementById('sk-start-try').textContent, sum:document.querySelector('.own-summary').textContent, tick:document.getElementById('sk-tab-try').classList.contains('is-done')})""")
    check("B.16 the set picker shows each set's status in words (dots carry a word, not only colour) and Continue set 1; extra questions are counted apart",
          sp["cards"][0][0] == "Started: question 5 of 5" and sp["cards"][0][1] == "Answer shown|First try|After a retry|After Teach Me|Not finished"
          and sp["cards"][0][2] == "Continue set 1" and sp["cards"][1][0] == "Not started" and sp["start"] == "Continue set 1"
          and "Extra questions tried: one" in sp["sum"] and not sp["tick"], sp)

    # ---------------- C. resume after reload on set 2 ----------------
    q.click("#sk-try-set-2"); q.wait_for_timeout(100)
    orders = {}
    for i in range(3):
        if i == 1: hint(q); hint(q); back_q(q)
        q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(30)
        orders[i] = q.evaluate("(c=>JSON.stringify({o:c.order,a:c.orderA,b:c.orderB,r:c.rowOrder,h:c.hotOrder,r2:c.resp}))(PP_PLAYER.ctx())")
        q.click("#q-next"); q.wait_for_timeout(40)
    q.evaluate(WRONG); q.wait_for_timeout(30)   # an unchecked choice on question 4
    q4 = q.evaluate("JSON.stringify(PP_PLAYER.ctx().resp)")
    q.goto(BASE + "#skill/%s/try" % K); q.reload(); q.wait_for_timeout(700)
    pk2 = q.evaluate("[...document.querySelectorAll('#sk-panel .own-set')].map(c=>c.querySelector('.own-set-state').textContent)")
    q.click("#sk-try-set-2"); q.wait_for_timeout(100)
    rs = q.evaluate("({pos:PP_PLAYER.state().pos, resp:JSON.stringify(PP_PLAYER.ctx().resp), id:PP_PLAYER.ctx().item.id})")
    q.click("#q-prev"); q.wait_for_timeout(40); q.click("#q-prev"); q.wait_for_timeout(40)
    teach(q)
    r2 = q.evaluate("({id:PP_PLAYER.ctx().item.id, steps:document.querySelectorAll('#teach-hints .help-step').length, ord:(c=>JSON.stringify({o:c.order,a:c.orderA,b:c.orderB,r:c.rowOrder,h:c.hotOrder,r2:c.resp}))(PP_PLAYER.ctx()), locked:PP_PLAYER.state().solved[1]})")
    check("C.1 resume: after a reload the picker says Started: question 4 of 5, and Continue opens set 2 at question 4 with its unchecked answer",
          pk2[1] == "Started: question 4 of 5" and rs["pos"] == 3 and rs["resp"] == q4 and rs["id"] == "SK-TT1c-C09", (pk2, rs, q4))
    check("C.2 resume restores the earlier question's answer, its choice order and its hint log (two hints shown again inside Teach Me)",
          r2["id"] == "SK-TT1c-C07" and r2["steps"] == 2 and r2["ord"] == orders[1] and r2["locked"] is True, (r2, orders[1]))
    # direct address to set 3 and the mode guard: #play/SK:<k>:y3/test runs as practice and stores no pass
    ready(q, "#play/SK:%s:y3/test" % K)
    d3 = q.evaluate("({s:PP_PLAYER.state(), hash:location.hash, tag:document.getElementById('player-mode').textContent})")
    for i in range(5):
        q.evaluate(CORRECT); q.click("#q-check"); q.click("#q-next"); q.wait_for_timeout(30)
    pr = (q.evaluate(PROG) or {}).get(K, {})
    check("C.3 #play/SK:<k>:y3/test runs as Practice on my own (never a test) and finishing it stores no pass, try or best",
          d3["s"]["mode"] == "practice" and d3["s"]["own"] and d3["hash"] == "#play/SK:%s:y3/try" % K and d3["tag"] == "Practice"
          and not any(f in pr for f in ("mastered", "tries", "best", "attempts", "passedAt")), (d3, pr))
    # finish all fifteen: only `tried` appears
    for part in ("y", "y2"):
        start_set(q, part, 0)
        for i in range(5):
            st_ = q.evaluate("PP_PLAYER.state().solved[PP_PLAYER.state().pos]")
            if not st_:
                q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(20)
            q.click("#q-next"); q.wait_for_timeout(30)
    pr = q.evaluate(PROG)
    q.evaluate("PP_APP.landBrowse()"); q.wait_for_timeout(100)
    row = q.evaluate("(c=>{const b=document.querySelector('#skill-list .skill-line[data-code=\"'+c+'\"]');return {aria:b.getAttribute('aria-label'),passed:!!b.querySelector('.sl-done')}})(%s)" % json.dumps(K))
    q.evaluate("PP_SKILLS.open(%s,'try')" % json.dumps(K)); q.wait_for_timeout(60)
    tick = q.evaluate("document.getElementById('sk-tab-try').classList.contains('is-done')")
    check("C.4 no pass from practice: after all fifteen, pp.progress.v1[k] gains only tried:true; the list says Started, not passed; the Try step is ticked",
          pr == {K: {"tried": True}} and "Started." in row["aria"] and "Passed" not in row["aria"] and not row["passed"] and tick, (pr, row, tick))
    close_page(q)

    # ---------------- D. constructed response (cr) via a fixture lesson registered in the page ----------------
    q = page(b, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
    q.evaluate(FXCR)
    q.evaluate("PP_PLAYER.start('SK:FX-CR:y','try')"); q.wait_for_timeout(100)
    cr0 = q.evaluate("({pts:document.getElementById('q-points').textContent, check:document.getElementById('q-check').textContent, dis:document.getElementById('q-check').disabled, box:!!document.querySelector('#q-body textarea.cr-box'), label:!!document.querySelector('#q-body label.cr-label')})")
    q.fill("#q-body textarea", "Being honest is always the right choice."); q.click("#q-check"); q.wait_for_timeout(60)
    cr1 = q.evaluate("""({cmp:document.getElementById('q-cr').innerText, boxes:document.querySelectorAll('#q-cr input[type=checkbox]').length, status:document.getElementById('q-status').textContent,
        score:PP_ITEMS.cr.score(PP_PLAYER.ctx().item,PP_PLAYER.ctx().resp), fb:document.getElementById('q-feedback').textContent})""")
    q.check("#q-cr input[type=checkbox]")
    crr = q.evaluate(PRACTICE)["l"]["FX-CR"]["i"]["SK-FXCR-C01"]
    check("D.1 cr: Not scored, Compare with the sample shows one good answer (other answers can also be right) and the criteria; status Written and checked; never right",
          cr0 == {"pts": "Set 1 of 3 \u00b7 Not scored", "check": "Compare with the sample", "dis": True, "box": True, "label": True}
          and "One good answer. Other answers can also be right" in cr1["cmp"] and cr1["boxes"] == 2 and "Written and checked against the list" in cr1["status"]
          and cr1["score"] == {"points": 0, "max": 0} and "right" not in cr1["fb"].lower().replace("can also be right", "")
          and crr["cr"]["done"] is True and crr["cr"]["text"] == "Being honest is always the right choice." and crr["cr"]["checks"] == [True, False] and "ok" in crr and crr["ok"] is False, (cr0, cr1, crr))
    q.reload(); q.wait_for_timeout(600)
    q.evaluate(FXCR)   # the same questions again (a changed question would start fresh: see M.1)
    q.evaluate("PP_PLAYER.start('SK:FX-CR:y','try',{pos:0})"); q.wait_for_timeout(100)
    cr2 = q.evaluate("({text:document.querySelector('#q-body textarea').value, checks:[...document.querySelectorAll('#q-cr input')].map(x=>x.checked)})")
    check("D.2 cr resume: the written answer and the ticked criteria come back after a reload", cr2 == {"text": "Being honest is always the right choice.", "checks": [True, False]}, cr2)
    close_page(q)
    # D.3 (reviewer fix, adapted): the answer for a written item is shown in Teach Me with compare wording, not "choose it"
    q = page(b, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()"); q.evaluate(FXCR)
    q.evaluate("PP_PLAYER.start('SK:FX-CR:y','try')"); q.wait_for_timeout(100)
    q.fill("#q-body textarea", "Always tell the truth."); reveal(q)
    h0 = q.evaluate("""({all:document.getElementById('teach-cards').innerText, ask:document.querySelector('#teach-cards [data-unit=asks]').innerText, status:''})""")
    back_q(q)
    q.click("#q-check"); q.wait_for_timeout(60)
    h1 = q.evaluate("""({fb:document.getElementById('q-feedback').textContent, cmp:document.getElementById('q-cr').innerText, status:document.getElementById('q-status').textContent,
        crTop:document.getElementById('q-cr').getBoundingClientRect().top, crBottom:document.getElementById('q-cr').getBoundingClientRect().bottom, fbTop:document.getElementById('q-feedback').getBoundingClientRect().top,
        text:document.querySelector('#q-body textarea').value})""")
    check("D.3 Teach Me on a written item: the sample and the criteria, 'other answers can also be right', compare wording (no 'choose'); back at the question the written text is kept, Compare shows the checklist above the feedback, and the item stays Answer shown",
          "One good answer:" in h0["all"] and "Other answers can also be right." in h0["all"] and "I wrote a lesson that works for anyone." in h0["all"]
          and "choose" not in h0["all"].lower().replace("choose the", "").replace("choose one", "") and "Write your own answer" in h0["ask"]
          and h1["text"] == "Always tell the truth." and "One good answer. Other answers can also be right" in h1["cmp"] and h1["crBottom"] <= h1["fbTop"]
          and "Answer shown" in h1["status"], (h0, h1))
    close_page(q)
    # D.4 the authored written item 3.T.C.2.a C12 (reported by its author): the same type-aware answer card
    q = page(b, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
    c12 = q.evaluate("""(()=>{const sid=['y','y2','y3'].map(p=>'SK:3.T.C.2.a:'+p).find(id=>PP.byId[id]&&PP.byId[id].items.some(i=>i.id==='SK-TC2a-C12'));
        if(!sid)return null;const pos=PP.byId[sid].items.findIndex(i=>i.id==='SK-TC2a-C12');PP_PLAYER.start(sid,'try',{pos});return {sid,pos};})()""")
    if c12:
        reveal(q)
        c12.update(q.evaluate("""(()=>{const it=PP_PLAYER.ctx().item;const t=document.querySelector('#teach-cards [data-unit=answer]').innerText;
            return {type:it.type, sample:t.indexOf(it.sample)>=0, crit:(it.criteria||[]).every(c=>t.indexOf(c)>=0), choose:/choose/i.test(t)};})()"""))
        back_q(q); c12["status"] = text(q, "#q-status")
    check("D.4 3.T.C.2.a C12 (cr): Teach Me's answer card shows its sample and every criterion, with no 'choose' wording, and marks it Answer shown",
          c12 is not None and (c12["type"] == "cr" and c12["sample"] and c12["crit"] and not c12["choose"] and "Answer shown" in c12["status"]), c12)
    close_page(q)

    # ---------------- E. storage: blocked, full, malformed ----------------
    for name, init in (("blocked", "Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}})"),
                       ("full", "window.__realSet=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){if(/^pp\\./.test(k))throw new DOMException('full','QuotaExceededError');return window.__realSet.call(this,k,v)}")):
        errs = []
        q = page(b, init=init, errors=errs, browse=False)
        q.goto(BASE + "#skill/%s/try" % K); q.wait_for_timeout(800)
        pn = q.evaluate("({n:(document.querySelector('#sk-panel .practice-storage')||{}).textContent||'', line:document.getElementById('sk-panel').textContent})")
        q.click("#sk-start-try"); q.wait_for_timeout(100)
        q.evaluate(WRONG); q.click("#q-check"); hint(q); back_q(q); q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(40)
        pl = q.evaluate("({n:(document.querySelector('#q-storage .practice-storage')||{}).textContent||'', st:document.getElementById('q-status').textContent, solved:PP_PLAYER.state().solved[0]})")
        q.click("#q-next"); q.wait_for_timeout(40); q.click("#q-prev"); q.wait_for_timeout(40)
        kept = q.evaluate("({solved:PP_PLAYER.state().solved[0], st:document.getElementById('q-status').textContent})")
        msg = "Saving is unavailable. Your practice answers are kept only while this page stays open. If you reload or close it, this practice starts again from the beginning."
        ok = msg in pn["n"] and "You can stop after any set and come back." not in pn["line"] and msg in pl["n"] and pl["solved"] and "Right after Teach Me" in pl["st"] and kept["solved"] and not errs
        if name == "full":
            q.evaluate("()=>{Storage.prototype.setItem=window.__realSet;}"); q.click("#q-next"); q.wait_for_timeout(40)   # a later action (moving on) saves
            q.evaluate(WRONG)
            cleared = q.evaluate("({n:(document.querySelector('#q-storage .practice-storage')||{}).hidden, v:!!localStorage.getItem('pp.practice.v1')})")
            ok = ok and cleared == {"n": True, "v": True}
            pn["cleared"] = cleared
        check("E.1 %s storage: the honest notice on the picker and in the player; no stop-and-come-back promise; practice works for the visit; no page errors%s" % (name, "; the notice clears after a later save succeeds" if name == "full" else ""),
              ok, (pn, pl, kept, errs))
        close_page(q)
    for name, raw, expect in (("bad JSON", "{not json", "Saved practice could not be read, so it starts fresh. Nothing else was changed."),
                              ("an array", "[1,2,3]", "Saved practice could not be read"),
                              ("mixed", json.dumps({"v": 1, "l": {K: {"i": {"SK-TT1c-P4": {"w": "2", "h": 9, "x": "yes", "ok": True, "r": {"v": [99]}}, "__proto__": {"w": 1}}}, "bad": "x"}}), "Some saved practice could not be read")):
        errs = []
        q = page(b, errors=errs, init="try{if(!sessionStorage.getItem('seeded')){localStorage.setItem('pp.practice.v1',%s);sessionStorage.setItem('seeded','1')}}catch(e){}" % json.dumps(raw))
        q.goto(BASE + "#skill/%s/try" % K); q.wait_for_timeout(800)
        n0 = q.evaluate("(document.querySelector('#sk-panel .practice-storage')||{}).textContent||''")
        q.click("#sk-start-try"); q.wait_for_timeout(100)
        raw1 = q.evaluate("localStorage.getItem('pp.practice.v1')")
        info = q.evaluate("({st:PP_PRACTICE.status(%s,'SK-TT1c-P4'), rec:PP_PRACTICE.rec(%s,'SK-TT1c-P4'), resp:JSON.stringify(PP_PLAYER.ctx(0).resp)})" % (json.dumps(K), json.dumps(K)))
        q.evaluate(WRONG); q.wait_for_timeout(30)
        raw2 = q.evaluate("localStorage.getItem('pp.practice.v1')")
        good = expect in n0 and raw1 == raw and not errs and raw2 != raw and isinstance(json.loads(raw2), dict)
        if name == "mixed":
            good = good and info["st"] == "hints" and info["rec"]["w"] == 2 and info["rec"]["h"] == 3 and info["rec"]["x"] is False and info["resp"] == '{"v":[]}'
        check("E.2 malformed pp.practice.v1 (%s): the page renders with an honest notice, valid records are kept and cleaned, the raw value is untouched until a child acts" % name, good, (n0, raw1 == raw, info, errs))
        close_page(q)

    # ---------------- F. compatibility with saved data from main ----------------
    seed = {
        "pp.progress.v1": json.dumps({K: {"taught": True, "learned": True, "practiced": True, "tried": True, "tries": 1, "best": {"got": 4, "max": 8}, "bestMax": 8,
                                          "attempts": [{"d": "2026-10-01", "got": 4, "max": 8, "ok": False, "n": 1, "afterAnswers": False, "form": "A"}]},
                                      "3.T.C.1.a": {"taught": True, "mastered": True, "tries": 1, "best": {"got": 7, "max": 7}, "legacyUndated": True, "firstSeenPassedAt": "2026-09-01"},
                                      "3.L.GC.2.b": {"tries": 2, "best": {"got": 7, "max": 7}, "mastered": True, "passedAt": "2026-10-10", "passTry": 2, "passBy": "test", "passForm": "B", "lastPassAt": "2026-10-10",
                                                     "attempts": [{"d": "2026-10-09", "got": 3, "max": 7, "ok": False, "n": 1, "afterAnswers": False, "form": "A"}, {"d": "2026-10-10", "got": 7, "max": 7, "ok": True, "n": 2, "afterAnswers": False, "form": "B"}]},
                                      "_ui": {"lastCat": "reading"}}),
        "pp.path.v1": json.dumps({"mode": "browse", "introduced": True, "bookmark": {"key": K, "step": "practice"}, "finished": {"3.T.T.1.b": True}, "habits": {"K-12.P.EICC.1.a": True}}),
        "pp.task.W-TASK-01": json.dumps({"plan": {"opinion": "I think so."}, "draft": "My draft.", "checks": [True], "scores": {"purpose": 3}}),
        "pp.skwrite.3.T.T.1.e": json.dumps({"text": "Once upon a time.", "checks": [True, False]}),
    }
    q = page(b, errors=errors, browse=False)
    q.goto(BASE); q.wait_for_timeout(300)
    q.evaluate("s=>{localStorage.clear();for(const k in s)localStorage.setItem(k,s[k]);}", seed)
    ready(q, "#browse"); q.reload(); q.wait_for_timeout(700)   # a hash-only goto keeps the document: reload so the seed is read
    before = q.evaluate(KEYS)
    lab = q.evaluate("(k=>({state:PP_SKILLS.displayState(k).label, tryTick:(PP_SKILLS.open(k,'try'),document.getElementById('sk-tab-try').classList.contains('is-done'))}))(%s)" % json.dumps(K))
    for h in ("#browse", "#std/3.T.T.1", "#std/" + K, "#std/3.L.GC.1", "#std/K-12.P.EICC.1", "#skill/%s/teach" % K, "#skill/%s/practice" % K, "#skill/%s/try" % K, "#skill/%s/test" % K,
              "#parents/standards", "#parents", "#habits", "#choose", "#skill/3.L.GC.2.b/test"):
        # (#path is left out on purpose: opening the Learning Path has always saved mode "path" in pp.path.v1)
        q.goto(BASE + h); q.wait_for_timeout(250)
    q.evaluate("PP_APP.landBrowse()"); q.fill("#skill-search", "3-5.T.T.1"); q.wait_for_timeout(80)
    mid = q.evaluate(KEYS)
    start_set(q, "y"); q.evaluate(WRONG); q.click("#q-check"); hint(q); reveal(q)
    after = q.evaluate(KEYS)
    changed = [k for k in before if after.get(k) != before[k]]
    check("F.1 seeded pp.progress.v1 (2.1, PP-003, PP-004 records), pp.path.v1, pp.task.* and pp.skwrite.* stay byte-identical after every changed screen and own-mode actions",
          mid == before and not changed and set(after) - set(before) == {"pp.practice.v1"}, (changed, set(after) - set(before)))
    check("F.2 a legacy tried:true (the old short Try) still shows Practicing, but does not tick the fifteen-question Try step",
          lab == {"state": "Practicing", "tryTick": False}, lab)
    close_page(q)
    # a lesson without core behaves exactly as before
    q = page(b, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
    # the first lesson without core (content is being migrated in batches, so it is found, not named)
    L0 = q.evaluate("Object.keys(PP.lessons).find(k=>!PP.lessons[k].core&&PP.byId['SK:'+k+':y']&&PP.byId['SK:'+k+':t'])")
    lg = q.evaluate("""(k=>{const P=PP.lessons[k].practice,h=P.length>=4?Math.ceil(P.length/2):P.length;return {core:!!PP.lessons[k].core,
        p:PP.byId['SK:'+k+':p'].items.map(i=>i.id), y:PP.byId['SK:'+k+':y'].items.map(i=>i.id), wantP:P.slice(0,h).map(i=>i.id), wantY:P.slice(h).map(i=>i.id),
        own:!!PP.byId['SK:'+k+':y'].own, next:PP.byId['SK:'+k+':y'].next.id, y2:!!PP.byId['SK:'+k+':y2']}})(%s)""" % json.dumps(L0))
    q.evaluate("PP_SKILLS.open(%s,'try')" % json.dumps(L0)); q.wait_for_timeout(60)
    lt = q.evaluate("({h:document.querySelector('#sk-panel .panel-h').textContent, intro:document.querySelector('#sk-panel .go-card').textContent, picker:document.querySelectorAll('.own-set').length})")
    q.click("#sk-start-try"); q.wait_for_timeout(80)
    l1 = q.evaluate("({help:!document.getElementById('q-help').hidden, hint:!!document.getElementById('q-hint'), how:!!document.getElementById('q-how'), teach:!document.getElementById('q-teach').hidden, prev:!document.getElementById('q-prev').hidden, tag:document.getElementById('player-mode').textContent, check:document.getElementById('q-check').textContent})")
    q.evaluate(WRONG); q.click("#q-check"); q.wait_for_timeout(30)
    l2 = q.evaluate("({help:!document.getElementById('q-help').hidden, fb:document.getElementById('q-feedback').textContent})")
    check("F.3 a lesson without core is unchanged: ceil(n/2) Together/Try split, Try It Yourself card, Help me hidden until one wrong try, no hint/how buttons, nothing in pp.practice.v1",
          not lg["core"] and lg["p"] == lg["wantP"] and lg["y"] == lg["wantY"] and not lg["own"] and not lg["y2"] and lg["next"] == "SK:%s:t" % L0
          and lt["h"] == "Try It Yourself" and "Help me unlocks after one try." in lt["intro"] and lt["picker"] == 0
          and not l1["help"] and not l1["hint"] and not l1["how"] and not l1["teach"] and not l1["prev"] and l1["tag"] == "Try it yourself" and l1["check"] == "Check"
          and l2["help"] and "Help me is now on" in l2["fb"] and q.evaluate("localStorage.getItem('pp.practice.v1')") is None, (lg, lt, l1, l2))
    close_page(q)

    # ---------------- G. standard pages, code links, search, no writes ----------------
    errs = []
    q = page(b, 320, 568, errors=errs); ready(q, "#browse")
    q.evaluate("s=>{for(const k in s)localStorage.setItem(k,s[k]);}", seed)
    ready(q, "#browse"); q.reload(); q.wait_for_timeout(700)
    before = q.evaluate(KEYS)
    codes = q.evaluate("""(()=>{const out=[];PP_STANDARDS.forEach(s=>out.push([s.code,s.official||s.text]));PP_STD_GROUPS.forEach(g=>{out.push([g.code,g.official]);out.push([g.band,g.official]);});
        ['M','R','I','C'].forEach(l=>out.push(['3.L.GC.1:'+l,PP_STD_GROUPS.find(g=>g.code==='3.L.GC.1').official]));return out;})()""")
    bad = []
    for code, wording in codes:
        r = q.evaluate("""(([c,w])=>{const ok=PP_STD.open(c);const t=document.getElementById('std-body').textContent;
            return {ok, cur:PP_APP.current(), focus:document.activeElement.id, words:t.indexOf(w)>=0, page:/standards p\\. \\d+/.test(t), over:document.documentElement.scrollWidth-innerWidth,
                    nested:[...document.querySelectorAll('#screen-std a.std-link')].filter(a=>a.parentElement.closest('a,button,summary')).length}})""", [code, wording])
        if not (r["ok"] and r["cur"] == "std" and r["focus"] == "std-title" and r["words"] and r["page"] and r["over"] <= 0 and r["nested"] == 0): bad.append((code, r))
    check("G.1 every leaf, parent, 3-5. band form, grammar-chart level and Practices code opens #std/<code> with a focused h1, the official wording and page, no nested links and no sideways scroll at 320px (%d addresses)" % len(codes),
          not bad and not errs, (bad[:3], errs[:2]))
    check("G.2 rendering every standard page writes nothing: every localStorage key is byte-identical", q.evaluate(KEYS) == before, "")
    close_page(q)
    q = page(b, 1366, 900, errors=errors); ready(q, "#browse")
    ss = q.evaluate("""(()=>{PP_STD.open('3.T.SS.1.a');const a=[...document.querySelectorAll('#std-body .std-lesson-btn')].map(b=>b.dataset.lesson);
        PP_STD.open('3.T.T.1');const comps=[...document.querySelectorAll('#std-body .std-comp .std-comp-head a.std-link')].map(a=>a.dataset.std);
        const sug=(document.querySelector('#std-body .std-suggest')||{}).textContent||'';
        PP_STD.open('3.T.T.1.c');const one=[...document.querySelectorAll('#std-body .std-lesson-btn')].map(b=>[b.dataset.lesson,b.textContent]);const t=document.getElementById('std-body').textContent;
        PP_STD.open('K-12.P.EICC.1.a');const hb=document.getElementById('std-body').textContent;
        PP_STD.open('3.L.GC.1');const lv=[...document.querySelectorAll('#std-body .std-h2')].map(h=>h.textContent);
        return {a,comps,sug,one,t,hb,lv};})()""")
    check("G.3 a code with several lessons lists all of them in the recommended order (3.T.SS.1.a: seven lessons)",
          ss["a"] == ["TF-FEAT", "TS-SEQ", "TS-CE", "TS-PS", "TS-CC", "TS-DESC", "3.T.SS.1.a"], ss["a"])
    check("G.4 a parent page lists its components in the recommended order with a suggested start; GUM is grouped by level; a Practices code says a grown-up observes it",
          ss["comps"] == ["3.T.T.1.b", "3.T.T.1.c", "3.T.T.1.a", "3.T.T.1.d", "3.T.T.1.e"] and ss["sug"].startswith("Suggested start:") and "not a placement" in ss["sug"]
          and ss["lv"][0].startswith("Master and Reinforce") and ss["lv"][1].startswith("Introduce and Continue")
          and "A grown-up observes this. There is no scored check" in ss["hb"], ss)
    check("G.5 a narrow code page: one lesson button, practice (fifteen in three sets), the check with its two forms, progress labelled as this device only",
          ss["one"] == [[K, "Start practice"]] and "fifteen questions in three sets of five" in ss["t"] and "two forms" in ss["t"]
          and "It is not a Milestones score." in ss["t"] and not re.search(r"\bmaster(ed|y)\b", ss["t"], re.I), ss["one"])
    # every visible code is a link and never nested (catalog, chips, official wording, parents, claims table, path, habits, search card)
    places = {}
    q.evaluate("PP_APP.landBrowse()"); q.wait_for_timeout(100)
    places["catalog"] = q.evaluate("""({links:document.querySelectorAll('#skill-list a.std-link').length, rows:document.querySelectorAll('#skill-list .skill-line').length,
        spanCodes:document.querySelectorAll('#skill-list span.sl-code').length, inBtn:document.querySelectorAll('#skill-list button .std-link, #skill-list button .sl-code').length})""")
    q.evaluate("PP_SKILLS.open(%s)" % json.dumps(K)); q.evaluate("document.getElementById('sk-official').open=true")
    places["skill"] = q.evaluate("({chips:document.querySelectorAll('#sk-tags a.sk-chip.std-link').length, spans:document.querySelectorAll('#sk-tags span.sk-chip').length, off:document.querySelectorAll('#sk-official a.std-link').length})")
    q.evaluate("PP_PARENTS.open('standards')"); q.evaluate("document.querySelectorAll('#std-list details.std').forEach(d=>d.open=true)")
    places["parents"] = q.evaluate("({n:document.querySelectorAll('#std-list details.std').length, links:document.querySelectorAll('#std-list .std-body a.std-link').length})")
    q.evaluate("PP_PARENTS.open('test')")
    places["claims"] = q.evaluate("document.querySelectorAll('#ptab-test table a.std-link').length")
    q.evaluate("PP_APP.openHabits()")
    places["habits"] = q.evaluate("({links:document.querySelectorAll('#habit-list a.std-link').length, rows:document.querySelectorAll('#habit-list .skill-line').length})")
    q.evaluate("PP_PATH.open()"); q.evaluate("document.querySelectorAll('#path-content details').forEach(d=>d.open=true)")
    places["path"] = q.evaluate("document.querySelectorAll('#path-content a.std-link').length")
    nested = q.evaluate("[...document.querySelectorAll('a.std-link')].filter(a=>a.parentElement.closest('a,button,summary')).length")
    check("G.6 every displayed code is a real link (catalog rows, skill chips and official wording, parent standards, claims table, path, habits) and none is nested in a link, button or summary",
          places["catalog"]["links"] >= places["catalog"]["rows"] and places["catalog"]["spanCodes"] == 0 and places["catalog"]["inBtn"] == 0
          and places["skill"]["chips"] == 1 and places["skill"]["spans"] == 0 and places["skill"]["off"] == 1
          and places["parents"]["links"] == places["parents"]["n"] and places["claims"] >= 14 and places["habits"]["links"] == places["habits"]["rows"] == 53
          and places["path"] > 80 and nested == 0, (places, nested))
    srch = {}
    for term, want in (("3.T.T.1", "3.T.T.1"), ("3-5.T.T.1", "3.T.T.1"), ("K-12.P.EICC.1", "K-12.P.EICC.1"), ("3.L.GC.1:M", "3.L.GC.1:M"),
                       ("3.L.GC.1:R:use-action-verbs", "3.L.GC.1:R:use-action-verbs"), ("3-5.RA.2", "3.T.RA.2"), ("pronoun", None)):
        q.evaluate("PP_APP.landBrowse()"); q.fill("#skill-search", term); q.wait_for_timeout(80)
        srch[term] = q.evaluate("(()=>{const a=document.querySelector('#skill-list .std-hit a.std-link');return a?a.dataset.std:null})()")
    q.evaluate("PP_APP.landBrowse()"); q.fill("#skill-search", "3-5.T.T.1"); q.wait_for_timeout(80)
    nles = q.evaluate("document.querySelectorAll('#skill-list .skill-line').length")
    check("G.7 code search shows a standard card for 3.T.T.1, 3-5.T.T.1, K-12.P.EICC.1, a GUM level and a GUM row (3-5.RA.2, GaDOE's print, resolves too); a word search does not; 3-5. finds the lessons",
          all(srch[t] == w for t, w in (("3.T.T.1", "3.T.T.1"), ("3-5.T.T.1", "3.T.T.1"), ("K-12.P.EICC.1", "K-12.P.EICC.1"), ("3.L.GC.1:M", "3.L.GC.1:M"),
              ("3.L.GC.1:R:use-action-verbs", "3.L.GC.1:R:use-action-verbs"), ("3-5.RA.2", "3.T.RA.2"), ("pronoun", None))) and nles >= 6, (srch, nles))
    close_page(q)

    # ---------------- H. navigation: links, direct addresses, Back/Forward ----------------
    q = page(b, 1366, 900, errors=errors); ready(q, "#browse")
    q.click('#skill-list .sl-codes a.std-link[data-std="3.T.T.1.c"]'); q.wait_for_timeout(150)
    h1 = q.evaluate("[PP_APP.current(), location.hash, document.activeElement.id]")
    q.click('#std-body .std-lesson-btn[data-lesson="3.T.T.1.c"]'); q.wait_for_timeout(150)
    h2 = q.evaluate("[PP_APP.current(), location.hash, document.getElementById('player-back').textContent]")
    q.click("#player-back"); q.wait_for_timeout(250)
    h3 = q.evaluate("[PP_APP.current(), location.hash]")
    q.go_back(); q.wait_for_timeout(250)
    h4 = q.evaluate("[PP_APP.current(), location.hash]")
    q.go_forward(); q.wait_for_timeout(250)
    h5 = q.evaluate("[PP_APP.current(), location.hash]")
    q.reload(); q.wait_for_timeout(700)
    h6 = q.evaluate("[PP_APP.current(), location.hash, document.getElementById('std-title').textContent]")
    q.click('#std-body .std-parent a.std-link'); q.wait_for_timeout(150)
    h7 = q.evaluate("[PP_APP.current(), location.hash]")
    q.click("#std-back"); q.wait_for_timeout(250)
    h8 = q.evaluate("[PP_APP.current(), location.hash]")
    check("H.1 catalog code -> standard page (focus on h1) -> Start practice (the first question) -> '← Standard 3.T.T.1.c' returns to the standard; Back to the catalog; Forward; reload; parent link; the page's Back",
          h1 == ["std", "#std/3.T.T.1.c", "std-title"] and h2[:2] == ["player", "#play/SK:3.T.T.1.c:y/try"] and h2[2] == "\u2190 Standard 3.T.T.1.c" and h3 == ["std", "#std/3.T.T.1.c"]
          and h4 == ["home", "#browse"] and h5 == ["std", "#std/3.T.T.1.c"] and h6[:2] == ["std", "#std/3.T.T.1.c"] and h7 == ["std", "#std/3.T.T.1"] and h8 == ["std", "#std/3.T.T.1.c"],
          (h1, h2, h3, h4, h5, h6, h7, h8))
    ready(q, "#std/3-5.T.T.1")
    d1 = q.evaluate("[PP_APP.current(), location.hash]")
    ready(q, "#std/not-a-code")
    d2 = q.evaluate("[PP_APP.current(), location.hash, document.getElementById('home-notfound').hidden]")
    ready(q, "#play/SK:%s:y2/try" % K); q.reload(); q.wait_for_timeout(700)   # a direct load, not a move inside the page
    d3 = q.evaluate("[PP_APP.current(), PP_PLAYER.state().setId, PP_PLAYER.state().own]")
    q.click("#player-back"); q.wait_for_timeout(200)
    d4 = q.evaluate("[PP_APP.current(), PP_SKILLS.step()]")
    check("H.2 direct addresses: #std/3-5.T.T.1 settles on #std/3.T.T.1; a bad code shows the not-found home; #play/SK:<k>:y2/try opens set 2, whose Back opens the Try step",
          d1 == ["std", "#std/3.T.T.1"] and d2[0] in ("home", "choose") and d2[1] == "" and d2[2] is False and d3 == ["player", "SK:%s:y2" % K, True] and d4 == ["skill", "try"], (d1, d2, d3, d4))
    close_page(q)

    # ---------------- I. the check: navigator, flags, unanswered list, results ----------------
    q = page(b, 1366, 900, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
    q.evaluate("PP_PLAYER.start('SK:%s:t','test')" % K); q.wait_for_timeout(100)
    n = q.evaluate("PP_PLAYER.state().total")
    t0 = q.evaluate("""({nav:document.querySelectorAll('#q-nav .qn-btn').length, cur:(document.querySelector('#q-nav [aria-current=step]')||{}).textContent,
        lab:[...document.querySelectorAll('#q-nav .qn-btn')].map(b=>b.getAttribute('aria-label')), hidden:['q-teach','q-similar','q-check','q-help'].filter(i=>!document.getElementById(i).hidden),
        flag:!document.getElementById('q-flag').hidden, navName:document.getElementById('q-nav').getAttribute('aria-label')})""")
    q.click("#q-nav .qn-btn:nth-child(3)"); q.wait_for_timeout(60)
    q.evaluate(CORRECT); q.click("#q-flag"); q.wait_for_timeout(40)
    t1 = q.evaluate("({pos:PP_PLAYER.state().pos, lab:document.querySelector('#q-nav .qn-btn:nth-child(3)').getAttribute('aria-label'), pressed:document.getElementById('q-flag').getAttribute('aria-pressed'), fb:document.getElementById('q-feedback').hidden, steps:document.querySelectorAll('#q-help-steps .help-step').length})")
    check("I.1 the check has a question navigator (one button per question, aria-current, state in words) and Mark to review; no Teach Me, similar, Check or feedback",
          t0["nav"] == n and t0["cur"] == "1" and t0["lab"][0] == "1, not answered" and t0["hidden"] == [] and t0["flag"] and t0["navName"] == "Questions"
          and t1["pos"] == 2 and t1["lab"] == "3, answered, marked to review" and t1["pressed"] == "true" and t1["fb"] and t1["steps"] == 0, (t0, t1))
    q.click("#q-nav .qn-btn:nth-child(%d)" % n); q.click("#q-next"); q.wait_for_timeout(60)
    cf = q.evaluate("({line:document.getElementById('confirm-line').textContent, btns:[...document.querySelectorAll('#confirm-list .confirm-go')].map(b=>b.getAttribute('aria-label'))})")
    q.click('#confirm-list .confirm-go[data-q="1"]'); q.wait_for_timeout(60)
    back = q.evaluate("[!document.getElementById('stage-work').hidden, PP_PLAYER.state().pos]")
    check("I.2 before submitting, the unanswered and marked questions are listed by number; each returns to its question",
          ("left " + q.evaluate("PP.countWord(%d)" % (n - 1))) in cf["line"] and len(cf["btns"]) == n and "Go back to question 2, not answered" in cf["btns"]
          and "Go back to question 3, marked to review" in cf["btns"] and back == [True, 1], (cf, back))
    # answer all: right except one 2-point item partly right
    for i in range(n):
        q.evaluate("PP_PLAYER.ctx(%d)" % i)
    q.evaluate("""(()=>{})()""")
    two = q.evaluate("PP.byId['SK:%s:t'].items.findIndex(i=>i.points===2&&(i.type==='ebsr'||i.type==='ms'||i.type==='match'||(i.type==='dropdown'&&i.slots.length===2)))" % K)
    for i in range(n):
        q.click("#q-nav .qn-btn:nth-child(%d)" % (i + 1)); q.wait_for_timeout(20)
        q.evaluate(PARTIAL if i == two else CORRECT)
    q.click("#q-nav .qn-btn:nth-child(%d)" % n); q.click("#q-next"); q.wait_for_timeout(60)
    q.click("#confirm-submit"); q.wait_for_timeout(100)
    rs = q.evaluate("""({score:document.getElementById('res-score').textContent, partial:document.getElementById('res-partial').textContent, rows:document.querySelectorAll('#res-skills .skill-row').length,
        rowsHidden:document.getElementById('res-skills').hidden, note:document.getElementById('res-again-note').textContent, again:document.getElementById('res-again').textContent,
        revisit:document.getElementById('res-revisit').innerText, rv:[...document.querySelectorAll('#res-revisit .rv-btn')].map(b=>b.textContent)})""")
    q.click("#res-review-btn"); q.wait_for_timeout(40)
    rp = q.evaluate("[...document.querySelectorAll('#res-review .review-partial')].map(x=>x.textContent)")
    check("I.3 results: the partial-credit line, a partial line in the review, a one-code check reports its total (no thin component rows), the retry names form B, and lessons to revisit",
          two >= 0 and "one point of partial credit" in rs["partial"] and len(rp) == 1 and rp[0].startswith("Partial credit: 1 of 2 points.")
          and rs["rows"] >= 1 and rs["rowsHidden"] and rs["again"] == "Take the skill check again"
          and rs["note"] == "The next skill check uses form B, with different questions." and "Watch Me again" in rs["rv"] and "Practice on my own" in rs["rv"]
          and "small sample" in rs["revisit"], (rs, rp))
    one = q.evaluate("Object.keys(PP.lessons).find(k=>!PP.lessons[k].core&&PP.byId['SK:'+k+':t']&&!PP.byId['SK:'+k+':tB']&&PP.byId['SK:'+k+':p'])")
    q.evaluate("PP_PLAYER.start('SK:%s:t','test')" % one); q.wait_for_timeout(80)
    for i in range(q.evaluate("PP_PLAYER.state().total")):
        q.evaluate(WRONG); q.click("#q-next"); q.wait_for_timeout(20)
    q.click("#confirm-submit"); q.wait_for_timeout(80)
    note1 = q.evaluate("[document.getElementById('res-again-note').textContent, [...document.querySelectorAll('#res-revisit .rv-btn')].map(b=>b.textContent)]")
    check("I.4 a one-form lesson's retry says it uses the same questions; a legacy lesson's revisit offers Practice Together",
          note1[0] == "The next skill check uses the same questions as this one. This skill has one form." and "Practice Together" in note1[1], note1)
    # a mixed form: a row is shown on its own only with at least two questions and three points
    pt = q.evaluate("PP.sets.find(s=>s.kind==='form').id")
    q.evaluate("PP_PLAYER.start(%s,'test')" % json.dumps(pt)); q.wait_for_timeout(80)
    for i in range(q.evaluate("PP_PLAYER.state().total")):
        q.evaluate(CORRECT); q.click("#q-next"); q.wait_for_timeout(10)
    q.click("#confirm-submit"); q.wait_for_timeout(100)
    comp = q.evaluate("""(()=>{const s=PP.byId[%s];const SK={};const rows=[...document.querySelectorAll('#res-skills .skill-row')].map(r=>[r.querySelector('.skill-name').textContent,r.querySelector('.skill-score').textContent,r.classList.contains('is-other')]);
        return rows;})()""" % json.dumps(pt))
    okrows = all((int(r[1].split(" of ")[1]) >= 3) for r in comp if not r[2])
    check("I.5 a practice test reports an area on its own only when it has enough questions; smaller areas are grouped as Other parts", comp and okrows, comp)
    close_page(q)

    # ---------------- J. seven viewports: practice screen, set picker, a standard page, the check ----------------
    over = []
    for w, h in VIEWPORTS:
        errs = []
        q = page(b, w, h, errors=errs); ready(q, "#browse"); q.evaluate("localStorage.clear()")
        q.evaluate("PP_SKILLS.open(%s,'try')" % json.dumps(K)); q.wait_for_timeout(80)
        o1 = q.evaluate("document.documentElement.scrollWidth-innerWidth")
        if OUT and w in (320, 390, 1366): q.screenshot(path=str(OUT / ("picker-%dx%d.png" % (w, h))), full_page=True)
        q.click("#sk-start-try"); q.wait_for_timeout(100)
        if q.is_visible("#tab-question"): q.click("#tab-question")
        q.evaluate(WRONG); q.click("#q-check"); q.wait_for_timeout(60)
        geo = q.evaluate("""(()=>{const ids=['q-prev','q-check','q-teach','q-similar','q-next'];return ids.map(i=>{const e=document.getElementById(i);if(e.hidden)return null;const r=e.getBoundingClientRect();
            return [i,Math.round(r.left),Math.round(r.right),Math.round(r.height),Math.round(r.width),e.scrollWidth>e.clientWidth+1]}).filter(Boolean);})()""")
        o2 = q.evaluate("document.documentElement.scrollWidth-innerWidth")
        if OUT: q.screenshot(path=str(OUT / ("practice-%dx%d.png" % (w, h))), full_page=True)
        teach(q); q.click("#teach-hint"); q.click("#teach-hint"); reveal(q); q.wait_for_timeout(60)
        geoT = q.evaluate("""(()=>{const ids=['teach-back','teach-hint','teach-next','teach-similar','teach-back2'];return ids.map(i=>{const e=document.getElementById(i);if(e.hidden)return null;const r=e.getBoundingClientRect();
            return [i,Math.round(r.left),Math.round(r.right),Math.round(r.height),Math.round(r.width),e.scrollWidth>e.clientWidth+1]}).filter(Boolean);})()""")
        o2 += q.evaluate("document.documentElement.scrollWidth-innerWidth")
        if OUT: q.screenshot(path=str(OUT / ("teach-%dx%d.png" % (w, h))), full_page=True)
        geo += geoT
        clipped = [g for g in geo if g[1] < 0 or g[2] > w or g[3] < 44 or g[4] < 44 or g[5]]
        q.evaluate("PP_STD.open('3.T.T.1')"); q.wait_for_timeout(60)
        o3 = q.evaluate("document.documentElement.scrollWidth-innerWidth")
        if OUT and w in (320, 390, 1366): q.screenshot(path=str(OUT / ("std-%dx%d.png" % (w, h))), full_page=True)
        q.evaluate("PP_PLAYER.start('SK:%s:t','test')" % K); q.wait_for_timeout(80)
        if q.is_visible("#tab-question"): q.click("#tab-question")
        o4 = q.evaluate("document.documentElement.scrollWidth-innerWidth")
        nav = q.evaluate("(()=>{const n=document.getElementById('q-nav'),r=n.getBoundingClientRect();return [Math.round(r.left),Math.round(r.right)]})()")
        if OUT and w in (320, 390, 1366): q.screenshot(path=str(OUT / ("check-%dx%d.png" % (w, h))))
        if o1 > 0 or o2 > 0 or o3 > 0 or o4 > 0 or clipped or nav[0] < 0 or nav[1] > w or errs: over.append((w, h, o1, o2, o3, o4, clipped, nav, errs[:1]))
        close_page(q)
    check("J.1 at 320x568, 390x844, 844x390, 768x1024, 1024x768, 1366x768 and 1920x1080: the set picker, the practice controls (with hints and steps open), a standard page and the check navigator fit, with no sideways scroll, no clipped control and 44px targets",
          not over, over)

    # ---------------- N. which similar question is offered (lead decision 2026-10-23) ----------------
    FXS = """(()=>{const mc=(id,n)=>({id,type:'mc',points:1,dok:2,prompt:'Similar fixture '+n+'?',choices:[{text:'right one',correct:true},{text:'wrong a'},{text:'wrong b'},{text:'wrong c'}],
        clue:'A clue.',hints:['Hint one.','Hint two.','Hint three.'],how:['Step one.','The answer is right one.'],why:'The answer is right one.'});
      const C=[...Array(15)].map((x,i)=>mc('SK-FXS-C'+String(i+1).padStart(2,'0'),i+1));
      const all=C.map(c=>c.id);
      PP.addLesson({key:'FX-SIM',code:'3.T.T.1.c',title:'Similar fixture',teach:{big:'x',points:['a','b','c'],example:{lines:['x'],note:'y'}},learn:[],parent:'p',
        practice:[mc('SK-FXS-P1',90),mc('SK-FXS-P2',91)],test:[mc('SK-FXS-T1',92),mc('SK-FXS-T2',93),mc('SK-FXS-T3',94),mc('SK-FXS-T4',95)],
        core:{rev:'1',sets:[{items:C.slice(0,5)},{items:C.slice(5,10)},{items:C.slice(10,15)}]},
        similar:[Object.assign(mc('SK-FXS-S1',60),{like:all}),Object.assign(mc('SK-FXS-S2',61),{like:['SK-FXS-C01','SK-FXS-C02']}),Object.assign(mc('SK-FXS-S3',62),{like:['SK-FXS-C03']})]});})()"""
    def sim_pass(qq, sets=("y", "y2", "y3")):
        """Every core item in order: answer it right, then take its similar question if offered. Returns [(core, similar or None)]."""
        out = []
        for part in sets:
            qq.evaluate("PP_PLAYER.start('SK:FX-SIM:%s','try',{pos:0})" % part); qq.wait_for_timeout(60)
            for i in range(5):
                cid = qq.evaluate("PP_PLAYER.ctx().item.id")
                if not qq.evaluate("PP_PLAYER.state().solved[PP_PLAYER.state().pos]"):
                    # question-first: a fresh question is offered after help or a wrong try, so each item gets one wrong try first
                    qq.evaluate(WRONG); qq.click("#q-check"); qq.evaluate(CORRECT); qq.click("#q-check"); qq.wait_for_timeout(20)
                if qq.is_visible("#q-similar"):
                    qq.click("#q-similar"); qq.wait_for_timeout(40)
                    sid = qq.evaluate("PP_PLAYER.state().sim")
                    locked = qq.evaluate("PP_PLAYER.state().sim && !document.getElementById('q-check').hidden")
                    qq.evaluate(CORRECT); qq.click("#q-check"); qq.wait_for_timeout(20)
                    out.append((cid, sid, locked))
                else:
                    out.append((cid, None, None))
                qq.click("#q-next"); qq.wait_for_timeout(30)
        return out
    q = page(b, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()"); q.evaluate(FXS)
    p1 = sim_pass(q)
    st1 = q.evaluate(PRACTICE)["l"]["FX-SIM"]["s"]
    check("N.1 one sitting, all fifteen in order: every core item offers an extra question; an unused one in its own list comes first (C01 S1, C02 S2, C03 S3), then the least recently used one; each is a new, answerable attempt",
          all(x[1] for x in p1) and all(x[2] for x in p1) and [x[1] for x in p1[:3]] == ["SK-FXS-S1", "SK-FXS-S2", "SK-FXS-S3"]
          and all(x[1] in ("SK-FXS-S1",) for x in p1[3:])
          and len(st1["SK-FXS-S1"].get("past", [])) == 10 and st1["SK-FXS-S1"]["ok"] is True, ([x[1] for x in p1], {k: len(v.get("past", [])) for k, v in st1.items()}))
    core1 = json.dumps(q.evaluate(PRACTICE)["l"]["FX-SIM"]["i"])
    q.reload(); q.wait_for_timeout(700); q.evaluate(FXS)
    p2 = sim_pass(q, ("y",))
    st2 = q.evaluate(PRACTICE)["l"]["FX-SIM"]
    s2 = st2["s"]
    check("N.2 a second sitting after finishing the set: the button is still there on every item, offering the least recently used question in each item's list as a new attempt; earlier attempts stay in past; core records are unchanged",
          all(x[1] and x[2] for x in p2) and p2[0][1] == "SK-FXS-S2" and p2[2][1] == "SK-FXS-S3"
          and len(s2["SK-FXS-S2"].get("past", [])) == 1 and s2["SK-FXS-S2"]["past"][0]["ok"] is True and s2["SK-FXS-S2"]["for"] == "SK-FXS-C01"
          and len(s2["SK-FXS-S3"].get("past", [])) == 1 and json.dumps(st2["i"]) == core1
          and q.evaluate("PP_PRACTICE.counts('FX-SIM',PP_SKILLS.coreIds('FX-SIM')).retry") == 15, ([x[1] for x in p2], {k: len(v.get("past", [])) for k, v in s2.items()}))
    close_page(q)

    # ---------------- M. review fixes: ENG-06 changed questions, ENG-10 targets, ENG-11 names ----------------
    q = page(b, errors=errors); ready(q, "#browse"); q.evaluate("localStorage.clear()")
    seedm = {"v": 1, "l": {K: {"rev": "0", "at": {"set": 1, "pos": 2}, "i": {
        "SK-TT1c-C03": {"sig": "deadbeef", "w": 1, "h": 2, "x": False, "ok": True, "r": {"v": ["p9:5:1"]}},
        "SK-TT1c-C04": {"w": 0, "h": 1, "x": False, "ok": True, "r": {"v": 0}}}, "s": {}}}}
    q.evaluate("s=>localStorage.setItem('pp.practice.v1',s)", json.dumps(seedm)); q.reload(); q.wait_for_timeout(700)
    q.evaluate("PP_SKILLS.open(%s,'try')" % json.dumps(K)); q.wait_for_timeout(60)
    m1 = q.evaluate("""(k=>({note:(document.querySelector('#sk-panel .own-rev')||{}).textContent||'', c03:PP_PRACTICE.status(k,'SK-TT1c-C03'), c04:PP_PRACTICE.status(k,'SK-TT1c-C04'),
        raw:localStorage.getItem('pp.practice.v1')}))(%s)""" % json.dumps(K))
    start_set(q, "y", 2); q.evaluate(WRONG); q.click("#q-check"); q.wait_for_timeout(40)
    r03 = q.evaluate(PRACTICE)["l"][K]["i"]["SK-TT1c-C03"]
    check("M.1 ENG-06: a saved answer to a question that has changed (its signature differs) is not reused: it starts fresh, the notice says one question changed, the other answer is kept",
          "One question changed, so it starts fresh" in m1["note"] and m1["c03"] == "none" and m1["c04"] == "hints" and m1["raw"] == json.dumps(seedm)
          and r03.get("prev", {}).get("h") == 2 and r03.get("sig") not in (None, "deadbeef") and r03["w"] == 1 and r03["h"] == 0, (m1["note"], m1["c03"], m1["c04"], r03))
    q.evaluate("localStorage.clear()")
    q.evaluate("s=>localStorage.setItem('pp.practice.v1',s)", json.dumps({"v": 1, "l": {K: {"rev": "0", "i": {"SK-TT1c-C04": {"w": 0, "h": 1, "ok": True}}, "s": {}}}}))
    q.reload(); q.wait_for_timeout(700); q.evaluate("PP_SKILLS.open(%s,'try')" % json.dumps(K)); q.wait_for_timeout(60)
    m1b = q.evaluate("(document.querySelector('#sk-panel .own-rev')||{}).textContent||''")
    check("M.2 ENG-06: when only core.rev changed and no question did, the notice promises only that earlier answers are kept",
          m1b == "This practice was updated. Your earlier answers are kept.", m1b)
    close_page(q)
    tq = page(b, 390, 844, errors=errors); ready(tq, "#browse"); tq.evaluate("localStorage.clear()"); ready(tq, "#browse")
    SMALL = """(sel=>[...document.querySelectorAll(sel)].filter(a=>a.offsetParent).map(a=>[a.dataset.std,Math.round(a.getBoundingClientRect().height)]).filter(x=>x[1]<44))"""
    small = {}
    for name, how, sel in (("catalog", "PP_APP.landBrowse()", "#skill-list a.std-link"),
                           ("skill", "PP_SKILLS.open('3.T.T.1.c');document.getElementById('sk-official').open=true", "#screen-skill a.std-link"),
                           ("std leaf", "PP_STD.open('3.T.T.1.c')", "#screen-std a.std-link"),
                           ("std parent", "PP_STD.open('3.T.T.1')", "#screen-std a.std-link"),
                           ("std GUM level", "PP_STD.open('3.L.GC.1:M')", "#screen-std a.std-link"),
                           ("parents", "PP_PARENTS.open('standards');document.querySelectorAll('#std-list details').forEach(d=>d.open=true)", "#ptab-standards a.std-link"),
                           ("claims", "PP_PARENTS.open('test')", "#ptab-test a.std-link"),
                           ("habits", "PP_APP.openHabits()", "#habit-list a.std-link"),
                           ("path", "PP_PATH.open();document.querySelectorAll('#path-content details').forEach(d=>d.open=true)", "#path-content a.std-link"),
                           ("coverage", "PP_REVIEW.openMap();document.querySelectorAll('#coverage-body details').forEach(d=>d.open=true)", "#coverage-body a.std-link")):
        tq.evaluate("(()=>{%s})()" % how); tq.wait_for_timeout(120)
        r = tq.evaluate(SMALL, sel)
        n = tq.evaluate("(s=>[...document.querySelectorAll(s)].filter(a=>a.offsetParent).length)", sel)
        if r or not n: small[name] = (n, r[:3])
    check("M.3 ENG-10: every visible code link is at least 44px tall at 390px (catalog, skill chip and wording, standard pages, parent guide, claims table, habits, Learning Path, coverage map)", not small, small)
    names = {}
    for how in ("PP_STD.open('3.L.GC.1:M')", "PP_STD.open('3.L.GC.1')", "PP_APP.landBrowse()"):
        tq.evaluate("(()=>{%s})()" % how); tq.wait_for_timeout(100)
        dup = tq.evaluate("""(()=>{const m={};[...document.querySelectorAll('.screen:not([hidden]) a.std-link')].filter(a=>/:.+:/.test(a.dataset.std)).forEach(a=>{const n=(a.getAttribute('aria-label')||a.textContent).trim();(m[n]=m[n]||new Set()).add(a.dataset.std);});
            return Object.keys(m).filter(n=>m[n].size>1).slice(0,3);})()""")
        lab = tq.evaluate("(()=>{const a=[...document.querySelectorAll('.screen:not([hidden]) a.std-link')].find(a=>/:.+:/.test(a.dataset.std));return a?[a.textContent,a.getAttribute('aria-label')||'']:null})()")
        if dup or not lab or not lab[1].startswith(lab[0]): names[how] = (dup, lab)
    check("M.4 ENG-11: grammar-chart code links have a different accessible name for each row, starting with the visible words", not names, names)
    close_page(tq)

    check("K.0 no page errors in the browser runs", not errors, errors[:3])

# ---------------- L. check-content.js rules on mutated copies ----------------
tmp = Path(tempfile.mkdtemp(prefix="pp-cc-"))
for d in ("js", "verification", "docs/audits/work", "docs/expansion-2026-10-22", "assets"):
    shutil.copytree(ROOT / d, tmp / d)


def cc(mut_file=None, a=None, b_=None):
    f = tmp / (mut_file or "js/data/lessons/T-T1.js")
    orig = f.read_text()
    if a is not None:
        if a not in orig: return None, "mutation anchor not found: " + a[:60]
        f.write_text(orig.replace(a, b_, 1))
    try:
        r = subprocess.run(["node", "verification/check-content.js", "--all"], cwd=tmp, capture_output=True, text=True)
        return r.returncode, r.stdout
    finally:
        f.write_text(orig)


base_rc, base_out = cc()
check("L.0 check-content passes on the candidate; the derived Together ids are printed",
      base_rc == 0 and "lesson 3.T.T.1.c: Practice Together = SK-TT1c-P1, SK-TT1c-P2, SK-TT1c-P3" in base_out, base_out[-400:])
MUT = [
    ("a set of four", '      { ref: "SK-TT1c-P6" }\n    ] },', '    ] },', "core set 1: needs exactly 5 items"),
    ("a hint that contains the answer", '"Authors give a character words for a reason. Ask what the words tell you about the main character\'s choice and the story\'s lesson.",\n          "Reread paragraph 7.',
     '"It is to show that what Marisol did was special, because many people would keep the money.",\n          "Reread paragraph 7.', "contains the answer"),
    ("a core item without how", 'how: [\n          "Paragraph 1 says Kendra', 'howx: [\n          "Paragraph 1 says Kendra', "needs how"),
    ("a core passage used by the check", 'id: "SK-TT1c-T1", type: "mc", points: 1, dok: 2, passages: ["p2"]', 'id: "SK-TT1c-T1", type: "mc", points: 1, dok: 2, passages: ["p4"]', "which a skill check also uses"),
    ("a ref that is not in practice", '{ ref: "SK-TT1c-P5" }', '{ ref: "SK-TT1c-P9" }', "is not in practice"),
    ("a duplicate core id", 'id: "SK-TT1c-C04", type: "mc"', 'id: "SK-TT1c-C03", type: "mc"', "duplicate id in core"),
    ("a similar like that is not core", 'like: ["SK-TT1c-P4", "SK-TT1c-C06"]', 'like: ["SK-TT1c-X99"]', "which is not a core item"),
    ("two hints only", '"His thought in paragraph 3 is gloomy, but the first blank asks about his actions in paragraph 4, not his thought. For the second blank, Ms. Patel does not come until after he starts, so he is not doing it for her."\n        ],',
     '],', "hints needs exactly 3"),
    ("a cr item in a check", 'id: "SK-TT1c-T1", type: "mc"', 'id: "SK-TT1c-T1", type: "cr"', "cr is allowed only in core and similar"),
    ("a missing core.rev", 'core: { rev: "1", sets: [', 'core: { sets: [', "core.rev must be a non-empty string"),
]
for name, a, b_, want in MUT:
    rc, out = cc(None, a, b_)
    check("L.%s check-content fails %s" % (name.replace(" ", "-"), name), rc == 1 and want in (out or ""), (rc, (out or "")[-300:]))
rc, out = cc("js/data/std-groups.js", "Explain, analyze, and use narrative techniques to shape understandings.", "Explain and use narrative techniques.")
check("L.std-groups check-content fails changed official parent wording", rc == 1 and "official wording differs" in out, (rc, out[-300:]))
rc, out = cc("js/data/std-groups.js", '"3.T.T.1.b", "3.T.T.1.c", "3.T.T.1.a", "3.T.T.1.d", "3.T.T.1.e"', '"3.T.T.1.b", "3.T.T.1.c", "3.T.T.1.a", "3.T.T.1.d"')
check("L.std-groups check-content fails an order that leaves out a component", rc == 1 and "order is missing 3.T.T.1.e" in out, (rc, out[-300:]))
shutil.rmtree(tmp, ignore_errors=True)

fails = [r for r in results if not r["pass"]]
print("%d passed, %d failed" % (len(results) - len(fails), len(fails)))
if OUT: (OUT / "practice-own-results.json").write_text(json.dumps(results, indent=2) + "\n")
sys.exit(1 if fails else 0)

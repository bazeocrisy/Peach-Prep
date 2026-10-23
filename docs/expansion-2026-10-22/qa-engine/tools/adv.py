#!/usr/bin/env python3
"""Independent engine QA probes (reviewer's own, not the implementer's suite).
usage: adv.py BASE OUTDIR [group ...]   groups: std storage pass status rev test a11y kb
"""
import json, os, sys, re
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = sys.argv[1]
OUT = Path(sys.argv[2]); OUT.mkdir(parents=True, exist_ok=True)
GROUPS = set(sys.argv[3:]) or {"std", "storage", "pass", "status", "rev", "test", "a11y", "kb"}
AXE = "/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/axe/package/axe.min.js"
K = "3.T.T.2.a"          # a core lesson the implementer's suite does not walk in depth
KCR = "3.T.C.2.a"        # has an authored cr item
VIEWPORTS = [(320, 568), (390, 844), (844, 390), (768, 1024), (1024, 768), (1366, 768), (1920, 1080)]
results = []


def check(name, good, detail=""):
    results.append({"name": name, "pass": bool(good), "detail": "" if good else str(detail)[:600]})
    print(("PASS  " if good else "FAIL  ") + name + ("" if good else "   [" + str(detail)[:600] + "]"), flush=True)


def note(name, detail):
    results.append({"name": name, "pass": None, "detail": str(detail)[:1500]})
    print("INFO  " + name + "  " + str(detail)[:1500], flush=True)


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
  if(it.type=='cr')r.text='x';
  c.onChange();})()"""
# every storage write, recorded from the first script on the page
SPY = """(()=>{try{const S=Storage.prototype,s=S.setItem,r=S.removeItem,c=S.clear;window.__w=[];
  S.setItem=function(k,v){window.__w.push(['set',k]);return s.call(this,k,v)};
  S.removeItem=function(k){window.__w.push(['remove',k]);return r.call(this,k)};
  S.clear=function(){window.__w.push(['clear']);return c.call(this)};}catch(e){}})()"""
BROWSE = "try{if(!localStorage.getItem('pp.path.v1'))localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true}))}catch(e){}"
KEYS = "(()=>{const o={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);o[k]=localStorage.getItem(k);}return o;})()"
PRACTICE = "JSON.parse(localStorage.getItem('pp.practice.v1')||'null')"
PROG = "JSON.parse(localStorage.getItem('pp.progress.v1')||'null')"
NESTED = """(()=>[...document.querySelectorAll('a.std-link')].filter(a=>a.offsetParent!==null||a.closest('details')).filter(a=>a.parentElement.closest('a,button,summary,label,[role=button]')).map(a=>a.textContent+' in '+a.parentElement.closest('a,button,summary,label,[role=button]').tagName))()"""

ARGS = ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"]


def mkpage(b, w=1366, h=900, init=None, errors=None, browse=True, spy=True):
    ctx = b.new_context(viewport={"width": w, "height": h}, has_touch=w < 1000, is_mobile=w < 500)
    q = ctx.new_page()
    q.route("**/fonts.g*/**", lambda r: r.abort())
    if spy: q.add_init_script(SPY)
    if browse: q.add_init_script(BROWSE)
    if init: q.add_init_script(init)
    if errors is not None: q.on("pageerror", lambda e: errors.append(str(e)))
    q.on("dialog", lambda d: d.accept())
    return q


def ready(q, h=""):
    q.goto(BASE + h)
    q.wait_for_function("document.getElementById('build-badge').textContent.length>0")
    q.wait_for_timeout(250)


def writes(q, since=0):
    return [w for w in q.evaluate("window.__w||[]")[since:] if w[1] != "pp.path.v1" or True]


def nw(q):
    return len(q.evaluate("window.__w||[]"))


def shot(q, name):
    q.screenshot(path=str(OUT / (name + ".png")), full_page=False)


def start(q, k, part, mode="try"):
    q.evaluate("PP_PLAYER.start(%s,%s)" % (json.dumps("SK:%s:%s" % (k, part)), json.dumps(mode)))
    q.wait_for_timeout(80)


def cur(q):
    return q.evaluate("PP_PLAYER.ctx().item.id")


def rec(q, k, iid, sim=False):
    return q.evaluate("(a=>{const r=PP_PRACTICE.rec(a[0],a[1],a[2]);return r?JSON.parse(JSON.stringify(r)):null})(%s)" % json.dumps([k, iid, sim]))


def status(q, k, iid, sim=False):
    return q.evaluate("PP_PRACTICE.status(%s,%s,%s)" % (json.dumps(k), json.dumps(iid), "true" if sim else "false"))


with sync_playwright() as p:
    kw = {"args": ARGS}
    if os.environ.get("CHROMIUM_PATH"): kw["executable_path"] = os.environ["CHROMIUM_PATH"]
    b = p.chromium.launch(**kw)

    # =========================================================== STD PAGES
    if "std" in GROUPS:
        errs = []
        q = mkpage(b, errors=errs); ready(q)
        codes = q.evaluate("""(()=>{const out=[];PP_STANDARDS.forEach(s=>out.push(s.code));PP_STD_GROUPS.forEach(g=>{out.push(g.code);out.push(g.band)});
                               ['M','R','I','C'].forEach(l=>out.push('3.L.GC.1:'+l));return out.filter((x,i,a)=>a.indexOf(x)===i)})()""")
        w0 = nw(q); bad = []; nest = []
        for c in codes:
            q.evaluate("location.hash='#std/'+PP.stdHash(%s)" % json.dumps(c)); q.wait_for_timeout(25)
            r = q.evaluate("({cur:PP_APP.current(),h1:document.getElementById('std-title').textContent,foc:document.activeElement.id,off:!!document.querySelector('#std-body .std-official'),hash:location.hash})")
            if r["cur"] != "std" or not r["h1"].strip() or r["foc"] != "std-title" or not r["off"]: bad.append((c, r))
            n = q.evaluate(NESTED)
            if n: nest.append((c, n[:2]))
        check("STD.1 every standard, parent, band form and GUM level address opens a std page with h1 focus and official wording (%d addresses)" % len(codes), not bad, bad[:4])
        check("STD.2 no std-link nested in a link/button/summary on any std page", not nest, nest[:3])
        check("STD.3 opening all std pages by address writes nothing to storage", nw(q) == w0, writes(q, w0)[:6])
        pr = [c for c in codes if c.startswith("K-12.P")]
        check("STD.4 Practices codes resolve (%d)" % len(pr), len(pr) >= 20 and all(q.evaluate("!!PP_STD.resolve(%s)" % json.dumps(c)) for c in pr), pr[:3])
        # bad / hostile codes
        hostile = ["", "zzz", "3.T.T.9", "3.T.T.1.z", "%E0%A4%A", "3.L.GC.1:X", "__proto__", "constructor", "toString", "%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E", "3.T.T.1.c/extra", "3-5.T.T.9", "..%2F..%2F"]
        hb = []
        for h in hostile:
            q.goto(BASE + "#std/" + h); q.wait_for_timeout(350)
            r = q.evaluate("({cur:PP_APP.current(),hash:location.hash,title:(document.querySelector('.screen:not([hidden]) h1')||{}).textContent||'',note:(document.querySelector('.screen:not([hidden]) [role=status], .screen:not([hidden]) .route-note, #route-note')||{}).textContent||''})")
            hb.append((h, r))
        check("STD.5 hostile/bad std addresses raise no page error", not errs, errs[:3])
        note("STD.5b where bad std addresses land", hb)
        shot(q, "std-bad-code-1366")
        # recovery note for bad code (does the visitor learn the code was not found?)
        q.goto(BASE + "#std/3.T.T.9"); q.wait_for_timeout(350)
        vis_txt = q.evaluate("document.querySelector('.screen:not([hidden])').innerText.slice(0,400)")
        check("STD.6 an unknown code says it was not found (honest recovery, not a silent landing)", re.search(r"not (a |an )?(found|known|recogni)|wasn.t found|no standard|couldn.t find|could not find|isn.t a", vis_txt, re.I), vis_txt[:300])
        # nesting audit across the other screens that show codes
        scr = []
        for js in ["PP_APP.goHome()", "PP_PARENTS.open('standards');document.querySelectorAll('details').forEach(d=>d.open=true)", "PP_PARENTS.open('test')",
                   "PP_SKILLS.open('%s')" % K, "location.hash='#path'", "PP_APP.goHome();(()=>{const i=document.getElementById('skill-search')||document.querySelector('input[type=search]');if(i){i.value='3.T.T.1';i.dispatchEvent(new Event('input',{bubbles:true}))}})()",
                   "PP_APP.openHabits()"]:
            q.evaluate(js); q.wait_for_timeout(250)
            n = q.evaluate(NESTED); cnt = q.evaluate("document.querySelectorAll('.screen:not([hidden]) a.std-link').length")
            scr.append((js[:40], cnt, n[:2]))
        check("STD.7 no nested std-link on home, parents standards (all open), parents test, skill page, path, search, habits", all(not x[2] for x in scr), scr)
        note("STD.7b std-link counts per screen", [(x[0], x[1]) for x in scr])
        # every std-link href resolves
        hrefs = q.evaluate("(()=>{PP_APP.goHome();return [...document.querySelectorAll('a.std-link')].map(a=>a.dataset.std)})()")
        q.evaluate("PP_PARENTS.open('standards');document.querySelectorAll('details').forEach(d=>d.open=true)"); q.wait_for_timeout(100)
        hrefs += q.evaluate("[...document.querySelectorAll('a.std-link')].map(a=>a.dataset.std)")
        unres = sorted(set(h for h in hrefs if not q.evaluate("!!PP_STD.resolve(%s)" % json.dumps(h))))
        check("STD.8 every displayed std-link (home + parents) resolves (%d links)" % len(hrefs), not unres, unres[:5])
        # Back / Forward / return from a lesson opened from a std page
        ready(q, "#std/3.T.T.1")
        q.click("#std-body .std-lesson-btn, #std-body button[data-lesson]"); q.wait_for_timeout(200)
        a = q.evaluate("[PP_APP.current(), document.getElementById('skill-back').textContent]")
        q.click("#skill-back"); q.wait_for_timeout(200)
        bk = q.evaluate("[PP_APP.current(), location.hash, document.activeElement.id]")
        q.go_forward(); q.wait_for_timeout(250); fw = q.evaluate("[PP_APP.current(), location.hash]")
        q.go_back(); q.wait_for_timeout(250); gb = q.evaluate("[PP_APP.current(), location.hash]")
        check("STD.9 std -> lesson -> skill-back returns to the std page; Forward/Back move between them", a[0] == "skill" and "Standard" in a[1] and bk[0] == "std" and fw[0] == "skill" and gb[0] == "std", (a, bk, fw, gb))
        note("STD.9b focus after returning to std page", bk)
        # opening from inside a running check: canLeave
        q.evaluate("PP_PLAYER.start('SK:3.T.T.1.c:t','test')"); q.wait_for_timeout(100)
        q.evaluate(CORRECT); q.wait_for_timeout(50)
        has = q.evaluate("!!document.querySelector('#screen-player:not([hidden]) a.std-link')")
        note("STD.10 std-link inside the player during a check", has)
        q.context.close()

    # =========================================================== STORAGE
    if "storage" in GROUPS:
        SEED = {"pp.progress.v1": json.dumps({"3.T.T.2.a": {"taught": True, "learned": True, "practiced": True, "tried": True, "tries": 2},
                                               "3.T.T.1.b": {"taught": True, "mastered": True, "best": 8, "max": 8, "attempts": [{"d": "2026-10-01", "got": 8, "max": 8, "ok": True}]}}),
                "pp.path.v1": json.dumps({"mode": "path", "introduced": True, "done": {"3.F.P.4.a": True}}),
                "pp.task.W-TASK-01": json.dumps({"text": "draft", "plan": {"a": 1}}),
                "SK:3.T.T.2.a:p": json.dumps({"x": 1}), "pp.flags.v1": json.dumps({"retained": True})}
        seed_js = "(()=>{if(sessionStorage.getItem('seeded'))return;sessionStorage.setItem('seeded','1');const S=%s;Object.keys(S).forEach(k=>localStorage.setItem(k,S[k]));%s})()"

        def run_fixture(name, practice_raw, act=True):
            errs = []
            extra = "" if practice_raw is None else "localStorage.setItem('pp.practice.v1',%s);" % json.dumps(practice_raw)
            q = mkpage(b, errors=errs, init=seed_js % (json.dumps(SEED), extra), browse=False)
            ready(q, "#skill/" + K + "/try"); q.wait_for_timeout(200)
            before = q.evaluate(KEYS)
            picker = q.evaluate("({txt:document.getElementById('sk-panel').innerText.slice(0,600),notice:(document.querySelector('#sk-panel .practice-storage:not([hidden])')||{}).textContent||''})")
            q.click("#sk-start-try"); q.wait_for_timeout(150)
            mid = q.evaluate(KEYS)
            if act:
                q.evaluate(WRONG); q.click("#q-check"); q.wait_for_timeout(60)
            after = q.evaluate(KEYS)
            others_same = all(after.get(k) == before.get(k) for k in before if k != "pp.practice.v1")
            q.context.close()
            return errs, before, mid, after, picker, others_same

        cases = [("corrupt-json", "{not json"), ("array", "[1,2,3]"), ("string", "\"hello\""), ("null-l", json.dumps({"v": 1, "l": None})),
                 ("proto", '{"v":1,"l":{"__proto__":{"i":{}},"%s":{"i":{"__proto__":{"ok":true}},"s":[]}}}' % K),
                 ("future-v", json.dumps({"v": 9, "l": {K: {"rev": "1", "i": {}}}, "extra": {"keep": 1}})),
                 ("bad-resp", None), ("huge-w", None)]
        # build response/ord poison for real core ids
        tmp = mkpage(b); ready(tmp); ids = tmp.evaluate("PP.core[%s].sets[0]" % json.dumps(K)); tmp.context.close()
        poison = {"v": 1, "l": {K: {"rev": "1", "at": {"set": 9, "pos": -4}, "i": {
            ids[0]: {"r": {"v": 99}, "ord": {"order": [0, 0, 0, 0]}, "w": "3", "h": 99, "x": "true", "ok": 1},
            ids[1]: {"r": "garbage", "ord": "x", "w": -5, "h": None, "log": "nope"},
            ids[2]: {"r": {"v": [0, 0, 0]}, "ord": {"order": [3, 2, 1, 0, 9]}, "ok": True, "cr": "x"},
            ids[3]: [1, 2], ids[4]: None}, "s": {"SK-NOPE": {"for": 5}}}}}
        cases[6] = ("bad-resp", json.dumps(poison))
        cases[7] = ("huge-w", json.dumps({"v": 1, "l": {K: {"i": {ids[0]: {"w": 1e308, "h": 3, "log": [{"t": "check"}] * 500}}}}}))
        for name, raw in cases:
            errs, before, mid, after, picker, same = run_fixture(name, raw)
            check("ST.%s no page error; other keys byte-identical" % name, not errs and same, (errs[:2], same))
            note("ST.%s picker notice / stored after one action" % name, (picker["notice"], (after.get("pp.practice.v1") or "")[:300]))
            if name == "corrupt-json":
                check("ST.corrupt-json raw value untouched until the child acts", mid.get("pp.practice.v1") == raw, mid.get("pp.practice.v1"))
                note("ST.corrupt-json the damaged raw value after one child action (overwritten?)", after.get("pp.practice.v1") != raw)
            if name == "future-v":
                v = json.loads(after.get("pp.practice.v1") or "{}")
                note("ST.future-v version after a save (a v:9 record is rewritten as v:1?)", (v.get("v"), "extra" in v))
            if name == "bad-resp":
                v = json.loads(after.get("pp.practice.v1") or "{}")
                r0 = ((v.get("l") or {}).get(K) or {}).get("i", {}).get(ids[0], {})
                note("ST.bad-resp record 0 after load+action (x:'true' string, ok:1, h:99)", r0)
        # blocked storage (every access throws) and full storage (writes throw)
        for name, init in [("blocked", "Object.defineProperty(window,'localStorage',{get(){throw new DOMException('denied','SecurityError')}})"),
                           ("full", "(()=>{const s=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){if(String(k).startsWith('pp.practice'))throw new DOMException('full','QuotaExceededError');return s.call(this,k,v)}})()")]:
            errs = []
            q = mkpage(b, errors=errs, init=init, browse=(name != "blocked"), spy=(name != "blocked"))
            ready(q, "#skill/" + K + "/try"); q.wait_for_timeout(200)
            pick = q.evaluate("document.getElementById('sk-panel').innerText")
            q.click("#sk-start-try"); q.wait_for_timeout(100)
            q.evaluate(WRONG); q.click("#q-check"); q.wait_for_timeout(60)
            q.click("#q-hint"); q.wait_for_timeout(40)
            iid = cur(q)
            st_mem = q.evaluate("PP_PRACTICE.rec(%s,%s,false)" % (json.dumps(K), json.dumps(iid)))
            note_txt = q.evaluate("(document.querySelector('#q-storage .practice-storage')||{}).textContent||''")
            check("ST.%s no page error; practice still works for the visit (record in memory)" % name, not errs and st_mem and st_mem.get("w") == 1 and st_mem.get("h") == 1, (errs[:2], st_mem))
            check("ST.%s honest notice in the player, and no 'come back' promise on the picker" % name, "only while this page stays open" in note_txt and "come back" not in pick.lower(), (note_txt, pick[:300]))
            q.context.close()

    # =========================================================== NO PASS FROM PRACTICE / REVEAL / OPEN / CHECKBOX
    if "pass" in GROUPS:
        errs = []
        q = mkpage(b, errors=errs); ready(q)
        q.evaluate("PP_SKILLS.open(%s,'try')" % json.dumps(K)); q.wait_for_timeout(100)
        for s in ("y", "y2", "y3"):
            start(q, K, s)
            for i in range(5):
                q.click("#q-how"); q.wait_for_timeout(20)
                q.evaluate(CORRECT); q.click("#q-check") if q.is_enabled("#q-check") and q.is_visible("#q-check") else None
                q.wait_for_timeout(20); q.click("#q-next"); q.wait_for_timeout(30)
        prog = q.evaluate(PROG) or {}
        stt = q.evaluate("[PP_SKILLS.status(%s), PP_SKILLS.displayState(%s)]" % (json.dumps(K), json.dumps(K)))
        cnt = q.evaluate("PP_PRACTICE.counts(%s,PP_SKILLS.coreIds(%s))" % (json.dumps(K), json.dumps(K)))
        check("PASS.1 fifteen reveals + correct answers: no mastered/best/attempts written; status not mastered; all fifteen 'Answer shown'",
              not (prog.get(K) or {}).get("mastered") and not (prog.get(K) or {}).get("attempts") and stt[0] != "mastered" and cnt.get("shown") == 15,
              (prog.get(K), stt, cnt))
        check("PASS.1b and the Try step says tried only", (prog.get(K) or {}).get("tried") is True, prog.get(K))
        # direct addresses that try to run own sets as a test
        for h in ["#play/SK:%s:y/test" % K, "#play/SK:%s:y3/test" % K, "#play/SK:%s:y2/practice" % K]:
            q.goto(BASE + h); q.wait_for_timeout(500)
            st = q.evaluate("PP_PLAYER.state()")
            check("PASS.2 %s runs as practice, not as a test" % h, st["mode"] == "practice" and st["own"], st)
        q.evaluate("PP_PLAYER.start('SK:%s:y','test')" % K); q.wait_for_timeout(60)
        check("PASS.3 PP_PLAYER.start(own set,'test') is forced to practice", q.evaluate("PP_PLAYER.state().mode") == "practice")
        # a cr item: every checkbox ticked never counts as right / pass
        q.evaluate("PP_SKILLS.open(%s,'try')" % json.dumps(KCR)); q.wait_for_timeout(80)
        crset = q.evaluate("(()=>{for(const p of ['y','y2','y3']){const s=PP.byId['SK:%s:'+p];if(!s)continue;const i=s.items.findIndex(x=>x.type==='cr');if(i>=0)return [p,i]}return null})()" % KCR)
        if crset:
            q.evaluate("PP_PLAYER.start('SK:%s:%s','try',{pos:%d})" % (KCR, crset[0], crset[1])); q.wait_for_timeout(80)
            q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(60)
            q.evaluate("document.querySelectorAll('#q-cr input[type=checkbox]').forEach(c=>{c.checked=true;c.dispatchEvent(new Event('change'))})"); q.wait_for_timeout(40)
            iid = cur(q); r = rec(q, KCR, iid)
            pts = q.evaluate("document.getElementById('q-points').textContent")
            check("PASS.4 cr: all criteria ticked -> status 'cr' (Written and checked), ok false, 'Not scored', no progress pass", status(q, KCR, iid) == "cr" and not r.get("ok") and pts == "Not scored" and not ((q.evaluate(PROG) or {}).get(KCR) or {}).get("mastered"), (r, pts))
            shot(q, "practice-cr-compare-1366")
        else:
            note("PASS.4 no cr item found in %s" % KCR, "")
        check("PASS.5 no page errors", not errs, errs[:3])
        q.context.close()

    # =========================================================== STATUS HISTORY (§12)
    if "status" in GROUPS:
        errs = []
        q = mkpage(b, errors=errs); ready(q)
        start(q, K, "y")
        ids = q.evaluate("PP_PLAYER.state().total")
        got = {}
        # q1: right first try
        a = cur(q); q.evaluate(CORRECT); q.click("#q-check"); got[a] = "first"; q.click("#q-next"); q.wait_for_timeout(40)
        # q2: wrong then right
        a = cur(q); q.evaluate(WRONG); q.click("#q-check"); q.evaluate(CORRECT); q.click("#q-check"); got[a] = "retry"; q.click("#q-next"); q.wait_for_timeout(40)
        # q3: hint then right (and the hint survives a reload before the answer)
        a3 = cur(q); q.click("#q-hint"); q.wait_for_timeout(30)
        q.reload(); q.wait_for_timeout(600); start(q, K, "y")
        pos = q.evaluate("PP_PLAYER.state().pos")
        hs = q.evaluate("document.querySelectorAll('#q-help-steps .help-step').length")
        check("STAT.0 reload resumes at the question with the hint already shown", cur(q) == a3 and hs == 1, (pos, cur(q), a3, hs))
        q.evaluate(CORRECT); q.click("#q-check"); got[a3] = "hints"; q.click("#q-next"); q.wait_for_timeout(40)
        # q4: Show me how, then right -> stays shown
        a = cur(q); q.click("#q-how"); q.evaluate(CORRECT); q.click("#q-check"); got[a] = "shown"; q.click("#q-next"); q.wait_for_timeout(40)
        # q5: not finished
        a5 = cur(q); got[a5] = "none"
        res = {iid: status(q, K, iid) for iid in got}
        check("STAT.1 first / retry / hints / shown / none stay distinct", res == got, (res, got))
        # q2 history: right after wrong keeps w; q3 keeps h after a right answer; q4 keeps x
        r2 = rec(q, K, list(got)[1]); r3 = rec(q, K, a3); r4 = rec(q, K, list(got)[3])
        check("STAT.2 assistance never erased: w, h, x kept after the right answer; log has every event", r2["w"] == 1 and r2["ok"] and r3["h"] == 1 and r3["ok"] and r4["x"] and r4["ok"]
              and [e["t"] for e in r4.get("log", [])][:2] == ["how", "check"], (r2, r3, r4))
        # Show me how after solving does not downgrade first try
        q.evaluate("PP_PLAYER.start('SK:%s:y','try',{pos:0})" % K); q.wait_for_timeout(60)
        q.click("#q-how"); q.wait_for_timeout(30)
        check("STAT.3 Show me how after a right answer keeps 'first' and records howAfter", status(q, K, list(got)[0]) == "first" and rec(q, K, list(got)[0]).get("howAfter"), rec(q, K, list(got)[0]))
        # similar after a reveal: separate item, core record unchanged
        q.evaluate("PP_PLAYER.start('SK:%s:y','try',{pos:3})" % K); q.wait_for_timeout(60)
        core_before = rec(q, K, list(got)[3])
        if q.is_visible("#q-similar"):
            q.click("#q-similar"); q.wait_for_timeout(60)
            sid = q.evaluate("PP_PLAYER.state().sim")
            q.evaluate(CORRECT); q.click("#q-check"); q.wait_for_timeout(30)
            core_after = rec(q, K, list(got)[3]); srec = rec(q, K, sid, True)
            cmpk = lambda r: {k: r.get(k) for k in ("w", "h", "x", "ok", "r")}
            check("STAT.4 similar saved apart (s, for), core item unchanged, counts unchanged", srec and srec.get("for") == list(got)[3] and cmpk(core_before) == cmpk(core_after)
                  and q.evaluate("PP_PRACTICE.counts(%s,PP_SKILLS.coreIds(%s)).shown" % (json.dumps(K), json.dumps(K))) == 1, (srec, core_before, core_after))
            shot(q, "practice-similar-1366")
        else:
            note("STAT.4 similar not offered on %s q4" % K, "")
        # picker summary shows each category in words
        q.evaluate("PP_SKILLS.open(%s,'try')" % json.dumps(K)); q.wait_for_timeout(80)
        summ = q.evaluate("document.querySelector('.own-summary').innerText")
        check("STAT.5 picker summary names each status in words with counts", all(x in summ for x in ["Right on the first try", "Right after another try", "Right with hints", "Answer shown", "Not finished"]), summ)
        shot(q, "practice-picker-1366")
        check("STAT.6 no page errors", not errs, errs[:3])
        q.context.close()

    # =========================================================== REV MISMATCH CLAIM
    if "rev" in GROUPS:
        q = mkpage(b); ready(q)
        start(q, K, "y"); a = cur(q); q.evaluate(WRONG); q.wait_for_timeout(30); q.click("#q-hint"); q.wait_for_timeout(30)
        q.evaluate("(()=>{const v=JSON.parse(localStorage.getItem('pp.practice.v1'));v.l[%s].rev='0';localStorage.setItem('pp.practice.v1',JSON.stringify(v))})()" % json.dumps(K))
        q.reload(); q.wait_for_timeout(600)
        q.evaluate("PP_SKILLS.open(%s,'try')" % json.dumps(K)); q.wait_for_timeout(80)
        msg = q.evaluate("(document.querySelector('.own-rev')||{}).textContent||''")
        start(q, K, "y")
        kept = q.evaluate("({h:document.querySelectorAll('#q-help-steps .help-step').length, r:JSON.stringify(PP_PLAYER.ctx().resp)})")
        note("REV.1 rev mismatch notice text", msg)
        check("REV.2 after a rev change the notice's promise ('questions that changed start fresh') is backed by code (unchanged id => restored; is any change detected?)",
              not msg or "start fresh" not in msg, ("notice promises per-question freshness, but the record for %s was restored as-is: %s" % (a, kept)))
        q.context.close()

    # =========================================================== TESTS / CHECKS
    if "test" in GROUPS:
        errs = []
        q = mkpage(b, errors=errs); ready(q)
        # find a skill check with a two-point item and two forms
        pick = q.evaluate("""(()=>{const ks=Object.keys(PP.lessons);for(const k of ks){const t=PP.byId['SK:'+k+':t'];if(t&&PP.byId['SK:'+k+':tB']&&t.items.some(i=>i.points==2))return k}
                               for(const k of ks){const t=PP.byId['SK:'+k+':t'];if(t&&t.items.some(i=>i.points==2))return k}return null})()""")
        note("TEST.0 lesson used", pick)
        sid = q.evaluate("PP_SKILLS.checkSetId(%s)" % json.dumps(pick))
        nf0 = q.evaluate("PP_SKILLS.nextForm(%s)" % json.dumps(pick))
        q.evaluate("PP_PLAYER.start(%s,'test')" % json.dumps(sid)); q.wait_for_timeout(100)
        n = q.evaluate("PP_PLAYER.state().total")
        nav = q.evaluate("[...document.querySelectorAll('#q-nav .qn-btn')].map(b=>[b.textContent,b.getAttribute('aria-label'),b.getAttribute('aria-current')])")
        check("TEST.1 navigator: one button per question, states in words, current marked", len(nav) == n and nav[0][2] == "step" and all("not answered" in x[1] for x in nav), nav)
        noHelp = q.evaluate("['q-help','q-hint','q-how','q-similar','q-check'].every(id=>document.getElementById(id).hidden)")
        check("TEST.2 no hint / Show me how / similar / check controls in a check", noHelp)
        # answer q1 wrong, q2 partial (if two-point), skip the rest; mark q3
        q.evaluate(WRONG); q.wait_for_timeout(20)
        fbh = q.evaluate("document.getElementById('q-feedback').hidden")
        lab1 = q.evaluate("document.querySelector('#q-nav .qn-btn').getAttribute('aria-label')")
        check("TEST.3 answering shows no feedback and updates the navigator label", fbh and lab1 == "1, answered", (fbh, lab1))
        two = q.evaluate("PP.byId[%s].items.findIndex(i=>i.points==2)" % json.dumps(sid))
        if two >= 0:
            q.click("#q-nav .qn-btn:nth-child(%d)" % (two + 1)); q.wait_for_timeout(40)
            q.evaluate("""(()=>{const c=PP_PLAYER.ctx(),it=c.item,r=c.resp;const ci=ch=>ch.map((x,i)=>x.correct?i:-1).filter(i=>i>=0),wi=ch=>ch.map((x,i)=>!x.correct?i:-1).filter(i=>i>=0);
              if(it.type=='ebsr'){r.a=ci(it.partA.choices)[0];r.b=wi(it.partB.choices).slice(0,it.partB.pick||1);}
              if(it.type=='ms'){r.v=[ci(it.choices)[0],wi(it.choices)[0]];}
              if(it.type=='dropdown'){r.v=it.slots.map((s,i)=>i==0?s.answer:(s.answer===0?1:0));}
              if(it.type=='match'){r.v=it.rows.map(x=>x.answer);const a=r.v[0];r.v[0]=r.v[1];r.v[1]=a;} c.onChange();})()""")
        q.click("#q-nav .qn-btn:nth-child(3)"); q.wait_for_timeout(40); q.click("#q-flag"); q.wait_for_timeout(30)
        foc = q.evaluate("document.activeElement.id")
        # go to the end
        q.click("#q-nav .qn-btn:nth-child(%d)" % n); q.wait_for_timeout(40); q.click("#q-next"); q.wait_for_timeout(80)
        cl = q.evaluate("({line:document.getElementById('confirm-line').textContent, list:document.getElementById('confirm-list').innerText, btns:[...document.querySelectorAll('#confirm-list button')].map(b=>b.getAttribute('aria-label')), foc:document.activeElement.id})")
        check("TEST.4 the confirm screen names each unanswered and marked question, each a button back", "Not answered yet" in cl["list"] and "Marked to review" in cl["list"] and len(cl["btns"]) >= 2, cl)
        shot(q, "check-confirm-list-1366")
        q.click("#confirm-list button"); q.wait_for_timeout(60)
        back = q.evaluate("[PP_PLAYER.state().pos, document.activeElement.id]")
        check("TEST.5 a confirm-list button returns to that question with focus on the prompt", back[1] == "q-prompt", back)
        q.click("#q-nav .qn-btn:nth-child(%d)" % n); q.wait_for_timeout(40); q.click("#q-next"); q.wait_for_timeout(60)
        q.click("#confirm-submit"); q.wait_for_timeout(150)
        rs = q.evaluate("""({score:document.getElementById('res-score-box').innerText, partial:(document.getElementById('res-partial')||{}).textContent||'', skills:document.getElementById('res-skills').hidden?null:document.getElementById('res-skills').innerText,
                            revisit:document.getElementById('res-revisit').innerText, again:document.getElementById('res-again-note').textContent, foc:document.activeElement.id})""")
        nf1 = q.evaluate("PP_SKILLS.nextForm(%s)" % json.dumps(pick))
        prog = (q.evaluate(PROG) or {}).get(pick, {})
        note("TEST.6 results", rs)
        check("TEST.6a partial credit line appears when a two-point item was half right", two < 0 or "partial credit" in rs["partial"], rs["partial"])
        check("TEST.6b revisit names lessons and calls the sample small", "What to work on next" in rs["revisit"] and "small sample" in rs["revisit"], rs["revisit"])
        hasB = q.evaluate("PP_SKILLS.hasFormB(%s)" % json.dumps(pick))
        check("TEST.6c the retry note matches the next form actually served (A->B alternation unchanged)", (("form " + nf1) in rs["again"]) if hasB else ("same questions" in rs["again"]), (rs["again"], nf0, nf1, hasB))
        shot(q, "check-results-1366")
        q.click("#res-review-btn"); q.wait_for_timeout(60)
        rv = q.evaluate("document.getElementById('res-review').innerText")
        check("TEST.7 review shows partial-credit lines after submission", (two < 0 or "Partial credit" in rv), rv[:300])
        # retry: is the next attempt the other form?
        q.click("#res-again"); q.wait_for_timeout(100)
        st2 = q.evaluate("PP_PLAYER.state().setId")
        check("TEST.8 Take the skill check again serves the form the note promised", (st2.endswith(":t" + ("B" if nf1 == "B" else "")) if hasB else st2 == sid), (st2, nf1))
        q.evaluate("PP_PLAYER.abandon()")
        # a practice test (mixed form): component rows threshold
        form = q.evaluate("(PP.sets.find(s=>s.kind=='form')||{}).id")
        if form:
            q.evaluate("PP_PLAYER.start(%s,'test')" % json.dumps(form)); q.wait_for_timeout(100)
            for i in range(q.evaluate("PP_PLAYER.state().total")):
                q.evaluate(CORRECT if i % 2 else WRONG); q.click("#q-next"); q.wait_for_timeout(15)
            q.click("#confirm-submit"); q.wait_for_timeout(150)
            rows = q.evaluate("[...document.querySelectorAll('#res-skills .skill-row')].map(r=>r.innerText.replace(/\\n/g,' '))")
            note("TEST.9 practice-test area rows", rows)
            shot(q, "form-results-1366")
        check("TEST.10 no page errors", not errs, errs[:3])
        q.context.close()

    # =========================================================== A11Y + VIEWPORTS
    if "a11y" in GROUPS:
        screens = [
            ("std-leaf", "#std/3.T.T.1.c", None),
            ("std-parent", "#std/3.T.T.1", None),
            ("std-gum", "#std/3.L.GC.1:M", None),
            ("std-practices", "#std/K-12.P.EICC.1", None),
            ("picker", "#skill/%s/try" % K, None),
            ("item-hints-how", "#skill/%s/try" % K, "document.getElementById('sk-start-try').click();setTimeout(()=>{document.getElementById('q-hint').click();document.getElementById('q-hint').click();document.getElementById('q-how').click()},120)"),
            ("item-cr", "#skill/%s/try" % KCR, "(()=>{for(const p of ['y','y2','y3']){const s=PP.byId['SK:%s:'+p];if(!s)continue;const i=s.items.findIndex(x=>x.type==='cr');if(i>=0){PP_PLAYER.start(s.id,'try',{pos:i});setTimeout(()=>{const c=PP_PLAYER.ctx();c.resp.text='My answer here.';c.onChange();document.getElementById('q-check').click()},120);return}}})()" % KCR),
            ("check-nav", "", "PP_PLAYER.start(PP_SKILLS.checkSetId('3.T.T.1.c'),'test')"),
            ("check-confirm", "", "PP_PLAYER.start(PP_SKILLS.checkSetId('3.T.T.1.c'),'test');setTimeout(()=>{const n=PP_PLAYER.state().total;for(let i=0;i<n;i++)document.getElementById('q-next').click()},150)"),
            ("check-results", "", "PP_PLAYER.start(PP_SKILLS.checkSetId('3.T.T.1.c'),'test');setTimeout(()=>{const n=PP_PLAYER.state().total;for(let i=0;i<n;i++)document.getElementById('q-next').click();document.getElementById('confirm-submit').click();document.getElementById('res-review-btn').click()},150)"),
            ("set-done", "", "PP_PLAYER.start('SK:%s:y2','try');setTimeout(()=>{for(let i=0;i<5;i++)document.getElementById('q-next').click()},150)" % K),
        ]
        axe_v, over, small, clip = [], [], [], []
        for (w, h) in VIEWPORTS:
            for name, hsh, js in screens:
                errs = []
                q = mkpage(b, w, h, errors=errs); ready(q, hsh)
                if js: q.evaluate(js); q.wait_for_timeout(700)
                o = q.evaluate("document.documentElement.scrollWidth-document.documentElement.clientWidth")
                if o > 0: over.append((w, h, name, o))
                # 44px targets: buttons and non-inline links in the visible screen
                sm = q.evaluate("""(()=>{const out=[];document.querySelectorAll('.screen:not([hidden]) button, .screen:not([hidden]) a[href], .screen:not([hidden]) input[type=checkbox], .screen:not([hidden]) textarea').forEach(e=>{
                    if(e.offsetParent===null)return; const r=e.getBoundingClientRect(); if(!r.width)return;
                    const inline=e.tagName=='A'&&getComputedStyle(e).display=='inline'&&e.closest('p,li,td,dd');
                    if(inline)return; if(e.type=='checkbox'){const l=e.closest('li');const lr=l?l.getBoundingClientRect():r;if(lr.height<44)out.push('checkbox '+Math.round(lr.height));return}
                    if(r.height<44-0.5||r.width<24)out.push((e.id||e.className||e.tagName)+' '+Math.round(r.width)+'x'+Math.round(r.height)+' "'+e.textContent.trim().slice(0,30)+'"')});return out.slice(0,8)})()""")
                if sm: small.append((w, h, name, sm))
                cp = q.evaluate("""(()=>[...document.querySelectorAll('.screen:not([hidden]) button')].filter(e=>e.offsetParent!==null&&(e.scrollWidth>e.clientWidth+1)).map(e=>e.id||e.textContent.trim().slice(0,30)))()""")
                if cp: clip.append((w, h, name, cp[:4]))
                if (w, h) in ((390, 844), (1366, 768), (320, 568)):
                    q.add_script_tag(path=AXE)
                    v = q.evaluate("axe.run(document,{resultTypes:['violations']}).then(r=>r.violations.map(v=>v.id+' ('+v.nodes.length+'): '+v.nodes.slice(0,2).map(n=>n.target.join(' ')).join(' | ')))")
                    if v: axe_v.append((w, h, name, v))
                if (w, h) in ((320, 568), (844, 390), (1920, 1080)) or name in ("item-hints-how", "check-results", "std-parent"):
                    shot(q, "%s-%dx%d" % (name, w, h))
                if errs: axe_v.append((w, h, name, ["PAGE ERROR " + errs[0]]))
                q.context.close()
        check("A11Y.1 axe: no violations on the new screens at 320/390/1366", not axe_v, axe_v[:6])
        check("A11Y.2 no horizontal scroll on the new screens at all seven viewports", not over, over[:6])
        check("A11Y.3 44px targets on the new screens at all seven viewports", not small, small[:8])
        check("A11Y.4 no clipped button text", not clip, clip[:6])

    # =========================================================== KEYBOARD
    if "kb" in GROUPS:
        errs = []
        q = mkpage(b, 1366, 900, errors=errs); ready(q, "#std/3.T.T.1")
        trail = []
        for i in range(40):
            q.keyboard.press("Tab")
            trail.append(q.evaluate("(e=>e.tagName+'#'+(e.id||'')+'.'+(e.className||'').split(' ')[0]+' '+(e.textContent||'').trim().slice(0,30))(document.activeElement)"))
        note("KB.1 Tab order on #std/3.T.T.1 (first 40)", trail)
        ring = q.evaluate("(()=>{const a=document.querySelector('#std-body a.std-link');a.focus();const s=getComputedStyle(a);return [s.outlineStyle,s.outlineWidth,s.boxShadow]})()")
        check("KB.2 std-link has a visible focus indicator", ring[0] != "none" or ring[2] != "none", ring)
        # keyboard: open lesson from std via Enter, then picker -> set -> answer -> check via keys
        q.evaluate("document.querySelector('#std-body .std-lesson-btn').focus()"); q.keyboard.press("Enter"); q.wait_for_timeout(200)
        f1 = q.evaluate("[PP_APP.current(), document.activeElement.id]")
        check("KB.3 Enter on a std lesson button opens the lesson with focus on its title", f1 == ["skill", "sk-title"], f1)
        ready(q, "#skill/%s/try" % K)
        q.evaluate("document.getElementById('sk-try-set-2').focus()"); q.keyboard.press("Enter"); q.wait_for_timeout(200)
        f2 = q.evaluate("[PP_PLAYER.state().setId, document.activeElement.id]")
        check("KB.4 Enter on a set button starts that set with focus on the question prompt", f2[0].endswith(":y2") and f2[1] in ("q-prompt","player-title"), f2)
        steps = []
        for i in range(25):
            q.keyboard.press("Tab"); steps.append(q.evaluate("document.activeElement.id||document.activeElement.className"))
        note("KB.5 Tab order in a practice item", steps)
        q.evaluate("document.getElementById('q-how').focus()"); q.keyboard.press("Enter"); q.wait_for_timeout(100)
        f3 = q.evaluate("document.activeElement.className")
        check("KB.6 Show me how by keyboard moves focus to the steps heading", "how-h" in f3, f3)
        q.evaluate("PP_PLAYER.start(PP_SKILLS.checkSetId('3.T.T.1.c'),'test')"); q.wait_for_timeout(100)
        q.evaluate("document.querySelector('#q-nav .qn-btn:nth-child(3)').focus()"); q.keyboard.press("Enter"); q.wait_for_timeout(80)
        f4 = q.evaluate("[PP_PLAYER.state().pos, document.activeElement.id]")
        check("KB.7 navigator button by keyboard moves to that question; focus goes to the prompt", f4 == [2, "q-prompt"], f4)
        check("KB.8 no page errors", not errs, errs[:3])
        q.context.close()

    b.close()

(OUT / "adv-results.json").write_text(json.dumps(results, indent=1))
f = [r for r in results if r["pass"] is False]
print("%d passed, %d failed, %d info" % (len([r for r in results if r["pass"]]), len(f), len([r for r in results if r["pass"] is None])))
sys.exit(1 if f else 0)

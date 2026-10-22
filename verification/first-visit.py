#!/usr/bin/env python3
"""First-visit suite: what a visitor sees before choosing a learning mode.

Usage:  python3 verification/first-visit.py [BASE_URL]   (default http://127.0.0.1:8650/)
Serve first:  node verification/serve.js . 8650
Exit code 1 on any failure.

This suite NEVER seeds pp.path.v1. Every scenario starts in a new browser
context (empty storage). Where a scenario needs saved lesson work it writes
only pp.progress.v1 / pp.task.* / pp.skwrite.* (the shapes older builds wrote)
and reloads. guard.py tests the browse home on purpose (it seeds browse mode);
this file covers the first-visit gaps listed in
docs/design/home-2026-10-22/09-guard-entry-investigation.md section 5.
Font CDN requests are blocked, as in guard.py.
"""
import json, sys
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8650/"
VIEWPORTS = [(320, 568), (390, 844), (844, 390), (768, 1024), (1024, 768), (1366, 768), (1920, 1080)]
results = []
def ok(name, cond, detail=""):
    results.append((bool(cond), name, str(detail)[:300]))

def print_results():
    fails = [r for r in results if not r[0]]
    for good, name, detail in results:
        print(("PASS  " if good else "FAIL  ") + name + ("" if good else "   [" + detail + "]"))
    print("%d passed, %d failed" % (len(results) - len(fails), len(fails)))
    return fails

_default_hook = sys.excepthook
def _crash_hook(t, v, tb):
    print("first-visit crashed; results gathered so far:", flush=True)
    print_results(); sys.stdout.flush()
    _default_hook(t, v, tb)
sys.excepthook = _crash_hook

# Records every setItem/removeItem call (key only) in window.__writes. It never writes storage itself.
WRITE_SPY = """try { (function(){ const S=Storage.prototype, si=S.setItem, ri=S.removeItem; window.__writes=[];
  S.setItem=function(k,v){ window.__writes.push('set:'+k); return si.apply(this,arguments); };
  S.removeItem=function(k){ window.__writes.push('remove:'+k); return ri.apply(this,arguments); }; })(); } catch(e) {}"""
BLOCKED = "Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}})"
QUOTA = "Storage.prototype.setItem=function(){throw new Error('quota')}"
SNAP = "JSON.stringify(Object.keys(localStorage).sort().map(k=>[k,localStorage.getItem(k)]))"
VISIBLE = "[...document.querySelectorAll('.screen')].filter(s=>!s.hidden).map(s=>s.id)"
MODE = "JSON.parse(localStorage.getItem('pp.path.v1'))"
# Writes the storage check makes on every load; it removes its own key straight away.
CHECK_KEY = ("set:pp.path.storage-check", "remove:pp.path.storage-check")

errors = []
def fresh(b, w=1366, h=900, init=None):
    phone = w < 900 and min(w, h) < 500
    c = b.new_context(viewport={"width": w, "height": h}, is_mobile=phone, has_touch=w < 1100)
    q = c.new_page()
    q.route("**/fonts.g*/**", lambda r: r.abort())
    q.on("pageerror", lambda e, w=w: errors.append("[%d] %s" % (w, e)))
    for s in ([init] if isinstance(init, str) else (init or [])): q.add_init_script(s)
    return c, q
def ready(q, hash_=""):
    q.goto(BASE + hash_)
    q.wait_for_function("document.getElementById('build-badge').textContent.length>0 && !document.getElementById('choose-path').disabled")
    q.wait_for_timeout(250)
def reload(q):
    q.reload()
    q.wait_for_function("document.getElementById('build-badge').textContent.length>0 && !document.getElementById('choose-path').disabled")
    q.wait_for_timeout(250)
def screens(q): return q.evaluate(VISIBLE)
def focused(q): return q.evaluate("document.activeElement && (document.activeElement.id || document.activeElement.tagName)")
def writes(q): return [x for x in q.evaluate("window.__writes||[]") if x not in CHECK_KEY]
def seed_work(q, items):
    """Write saved lesson work (never pp.path.v1) on the open page, then reload."""
    q.evaluate("(items)=>{for(const [k,v] of items) localStorage.setItem(k, typeof v==='string'?v:JSON.stringify(v));}", items)
    reload(q)

with sync_playwright() as p:
    b = p.chromium.launch()

    # ---------- 1. "Choose a lesson" straight from a fresh visit ----------
    c, q = fresh(b, init=WRITE_SPY); ready(q)
    ok("1.1 fresh visit shows the choice screen with the title focused", screens(q) == ["screen-choose"] and focused(q) == "choose-title", (screens(q), focused(q)))
    q.click("#choose-browse"); q.wait_for_timeout(200)
    ok("1.2 Choose a lesson lands on the browse home with search and the lesson list visible",
       screens(q) == ["screen-home"] and q.is_visible("#skill-search") and q.locator("#skill-list [data-code]").count() >= 99, screens(q))
    m = q.evaluate(MODE)
    ok("1.3 it saves pp.path.v1 mode 'browse' with introduced still false", m and m.get("mode") == "browse" and m.get("introduced") is False, m)
    ok("1.4 pp.path.v1 is the only key the choice writes", writes(q) == ["set:pp.path.v1"] and json.loads(q.evaluate(SNAP))[0][0] == "pp.path.v1" and len(json.loads(q.evaluate(SNAP))) == 1, writes(q))
    ok("1.5 the address is #browse", q.evaluate("location.hash") == "#browse")
    reload(q)
    ok("1.6 reload of #browse lands on the browse home", screens(q) == ["screen-home"] and q.is_visible("#skill-search"))
    ready(q)   # plain address, no hash: the saved mode decides
    ok("1.7 the plain address after the choice lands on the browse home (the saved mode, not the hash)", screens(q) == ["screen-home"] and q.is_visible("#skill-search"), screens(q))
    ok("1.8 the saved choice is unchanged by reloads", q.evaluate(MODE) == m, q.evaluate(MODE))
    c.close()

    # ---------- 2. No write before a choice ----------
    c, q = fresh(b, init=WRITE_SPY); ready(q)
    ok("2.1 a fresh load writes nothing to storage", q.evaluate(SNAP) == "[]" and writes(q) == [], (q.evaluate(SNAP), writes(q)))
    reload(q)
    ok("2.2 a reload before choosing writes nothing", q.evaluate(SNAP) == "[]" and writes(q) == [], (q.evaluate(SNAP), writes(q)))
    ok("2.3 a reload before choosing shows the choice screen again", screens(q) == ["screen-choose"] and focused(q) == "choose-title", screens(q))
    ok("2.4 pp.path.v1 is absent before a choice", q.evaluate("localStorage.getItem('pp.path.v1')") is None)
    c.close()

    # ---------- 3. Loading state ----------
    held, release = [], [False]
    def hold(r):
        if release[0]: r.continue_()
        else: held.append(r)
    c, q = fresh(b)
    q.route("**/js/data/lessons/**", hold)
    q.goto(BASE, wait_until="commit")
    q.wait_for_selector("#choose-path", state="attached"); q.wait_for_function("document.readyState!=='loading'")
    q.wait_for_timeout(400)
    st = q.evaluate("['choose-path','choose-browse'].map(id=>{const e=document.getElementById(id);return [e.disabled,e.textContent]})")
    ok("3.1 while lessons load both choices are disabled and read 'Loading lessons…'",
       held and all(d and t == "Loading lessons…" for d, t in st), (len(held), st))
    ok("3.2 the choice screen is already showing while lessons load", q.is_visible("#screen-choose") and q.is_visible("#choose-title"))
    q.click("#choose-browse", force=True, no_wait_after=True, timeout=2000); q.wait_for_timeout(100)
    ok("3.3 a click on a disabled choice does nothing and saves nothing", screens(q) == ["screen-choose"] and q.evaluate("localStorage.getItem('pp.path.v1')") is None)
    release[0] = True
    for r in held: r.continue_()
    q.wait_for_function("!document.getElementById('choose-path').disabled && !document.getElementById('choose-browse').disabled", timeout=30000)
    st = q.evaluate("['choose-path','choose-browse'].map(id=>document.getElementById(id).textContent)")
    ok("3.4 once lessons load both choices are enabled with their real labels", st == ["Start the Learning Path", "Choose a lesson"], st)
    c.close()

    # ---------- 4. Deep links with fresh storage (current behaviour) ----------
    def deep(hash_):
        c, q = fresh(b, init=WRITE_SPY); ready(q, hash_)
        return c, q
    c, q = deep("#skill/3.T.T.1.b")
    ok("4.1 #skill/<code> opens that lesson at Learn It", screens(q) == ["screen-skill"] and q.evaluate("PP_SKILLS.current()") == "3.T.T.1.b" and q.evaluate("PP_SKILLS.step()") == "teach" and focused(q) == "sk-title", (screens(q), focused(q)))
    ok("4.2 #skill/<code> writes no learning mode", q.evaluate("localStorage.getItem('pp.path.v1')") is None and "set:pp.path.v1" not in writes(q), writes(q))
    q.click("#skill-back"); q.wait_for_timeout(200)
    ok("4.3 Back from a deep-linked lesson with no mode shows the choice screen", screens(q) == ["screen-choose"], screens(q))
    c.close()
    c, q = deep("#skill/3.T.T.1.b/learn")
    ok("4.4 #skill/<code>/<step> opens that step", screens(q) == ["screen-skill"] and q.evaluate("PP_SKILLS.step()") == "learn")
    c.close()
    c, q = deep("#parents")
    ok("4.5 #parents opens the parent guide with its title focused and writes nothing", screens(q) == ["screen-parents"] and focused(q) == "parents-title" and q.evaluate(SNAP) == "[]", (screens(q), q.evaluate(SNAP)))
    home_lbl = q.evaluate("[...document.querySelectorAll('#screen-parents [data-go=home]')].filter(b=>b.offsetParent).map(b=>b.textContent)")
    q.click("#screen-parents [data-go=home] >> visible=true"); q.wait_for_timeout(200)
    ok("4.6 the parent guide's back button with no mode returns to the choice screen (label recorded as a finding)", screens(q) == ["screen-choose"], (home_lbl, screens(q)))
    print("NOTE 4.6 back-button label on #parents with no saved mode: %r" % home_lbl)
    c.close()
    c, q = deep("#mixed")
    ok("4.7 #mixed opens mixed practice and writes nothing", screens(q) == ["screen-mixed"] and q.evaluate(SNAP) == "[]", screens(q))
    c.close()
    c, q = deep("#path")
    ok("4.8 #path opens the path introduction, not started", screens(q) == ["screen-path"] and q.is_visible("#path-intro") and focused(q) == "path-title", (screens(q), focused(q)))
    ok("4.9 #path alone writes no learning mode", q.evaluate("localStorage.getItem('pp.path.v1')") is None and writes(q) == [], writes(q))
    c.close()
    c, q = deep("#choose")
    ok("4.10 #choose shows the choice screen with the title focused and writes nothing", screens(q) == ["screen-choose"] and focused(q) == "choose-title" and q.evaluate(SNAP) == "[]")
    c.close()
    for bad in ("#no-such-page", "#skill/no-such-lesson"):
        c, q = deep(bad)
        nf = q.evaluate("(()=>{const n=document.getElementById('home-notfound');return [n.hidden,n.textContent.trim()]})()")
        ok("4.11 %s with fresh storage: browse home with the not-found note focused, address dropped, nothing saved (current behaviour)" % bad,
           screens(q) == ["screen-home"] and nf[0] is False and focused(q) == "home-notfound" and q.evaluate("location.hash") == "" and q.evaluate(SNAP) == "[]",
           (screens(q), nf, focused(q), q.evaluate("location.hash"), q.evaluate(SNAP)))
        if bad == "#no-such-page":
            reload(q)
            ok("4.12 reload after an unknown address with fresh storage shows the choice screen", screens(q) == ["screen-choose"], screens(q))
        c.close()
    c, q = deep("#browse")
    ok("4.13 #browse with fresh storage opens the lesson list and saves no mode", screens(q) == ["screen-home"] and q.is_visible("#skill-search") and q.evaluate(SNAP) == "[]", (screens(q), q.evaluate(SNAP)))
    ready(q)
    ok("4.14 the plain address after #browse (no choice made) shows the choice screen", screens(q) == ["screen-choose"], screens(q))
    c.close()

    # ---------- 5. Choice screen at all seven viewports ----------
    TARGETS = """(()=>{const s=document.getElementById('screen-choose'),bad=[];
      s.querySelectorAll('button,a[href],summary,input,select,textarea,[tabindex]:not([tabindex="-1"])').forEach(e=>{
        const r=e.getBoundingClientRect(); if(!r.width&&!r.height) return;
        if(r.height<44||r.width<44) bad.push([e.id||e.className||e.tagName,Math.round(r.width),Math.round(r.height)]);});
      return bad;})()"""
    INSIDE = """(ids)=>ids.map(sel=>{const e=document.querySelector(sel),r=e.getBoundingClientRect();
      return [sel, !!e.offsetParent && r.width>0 && r.height>0 && r.left>=-1 && r.right<=document.documentElement.clientWidth+1];})"""
    for w, h in VIEWPORTS:
        c, q = fresh(b, w, h); ready(q)
        ok("5.1 %dx%d choice screen: no horizontal scroll" % (w, h), q.evaluate("document.documentElement.scrollWidth<=document.documentElement.clientWidth"),
           q.evaluate("[document.documentElement.scrollWidth,document.documentElement.clientWidth]"))
        bad = q.evaluate(TARGETS)
        ok("5.2 %dx%d choice screen: every control is at least 44px by 44px" % (w, h), not bad, bad)
        vis = q.evaluate(INSIDE, ["#choose-title", ".home-lede", ".choice-card.choice-path", ".choice-card.choice-browse", "#choose-path", "#choose-browse"])
        ok("5.3 %dx%d hero and both cards are visible and inside the page width" % (w, h), all(v for _, v in vis), vis)
        top = q.evaluate("document.getElementById('choose-title').getBoundingClientRect().top")
        ok("5.4 %dx%d the hero title starts in the first screen" % (w, h), 0 <= top < h, top)
        c.close()

    # ---------- 6. Storage unavailable on the choice screen ----------
    c, q = fresh(b); ready(q)
    ok("6.1 with working storage the choice-screen notice is empty and 'Your progress stays' shows",
       q.locator("#screen-choose .path-storage").text_content() == "" and q.is_visible("#choice-foot")
       and q.locator("#choice-foot").text_content().strip() == "You can switch anytime. Your progress stays.")
    c.close()
    for name, init in (("blocked", BLOCKED), ("quota", QUOTA)):
        c, q = fresh(b, 390, 844, init=init); ready(q)
        note = q.locator("#screen-choose .path-storage")
        ok("6.2 %s storage: the choice screen says saving is unavailable" % name,
           screens(q) == ["screen-choose"] and note.is_visible() and "Saving is unavailable" in note.text_content() and "only for this visit" in note.text_content(), note.text_content())
        ok("6.3 %s storage: 'Your progress stays' is hidden" % name, q.is_hidden("#choice-foot"))
        ok("6.4 %s storage: the welcome-back panel stays hidden" % name, q.is_hidden("#choose-welcome"))
        q.click("#choose-browse"); q.wait_for_timeout(200)
        ok("6.5 %s storage: Choose a lesson still opens the lesson list" % name, screens(q) == ["screen-home"] and q.is_visible("#skill-search"))
        c.close()

    # ---------- 7. Keyboard on the choice screen ----------
    c, q = fresh(b); ready(q)
    order = []
    for _ in range(3):
        q.keyboard.press("Tab"); order.append(focused(q))
    ok("7.1 Tab from the focused title goes to Start the Learning Path, then Choose a lesson",
       order[:2] == ["choose-path", "choose-browse"], order)
    ok("7.2 focus after the choices moves on to the shared help, not back up the page", order[2] not in ("choose-path", "choose-browse", "choose-title") and
       q.evaluate("!!document.activeElement.closest('#screen-choose')"), order)
    c.close()
    for key in ("Enter", " "):
        kn = "Enter" if key == "Enter" else "Space"
        c, q = fresh(b); ready(q)
        q.focus("#choose-path"); q.keyboard.press(key); q.wait_for_timeout(200)
        ok("7.3 %s on Start the Learning Path opens the path introduction" % kn, screens(q) == ["screen-path"] and q.is_visible("#path-intro") and focused(q) == "path-title", (screens(q), focused(q)))
        c.close()
        c, q = fresh(b); ready(q)
        q.focus("#choose-browse"); q.keyboard.press(key); q.wait_for_timeout(200)
        ok("7.4 %s on Choose a lesson opens the lesson list and saves browse mode" % kn,
           screens(q) == ["screen-home"] and (q.evaluate(MODE) or {}).get("mode") == "browse", (screens(q), q.evaluate(MODE)))
        c.close()

    # ---------- 8. Welcome-back panel (saved work, no mode) ----------
    c, q = fresh(b); ready(q)
    ok("8.1 the welcome-back panel is hidden for a fresh visitor", q.is_hidden("#choose-welcome") and q.evaluate("document.getElementById('choose-welcome').children.length") == 0)
    c.close()
    # the path.py legacy fixture: one passed lesson and one essay draft
    c, q = fresh(b, 390, 844, init=WRITE_SPY); ready(q)
    seed_work(q, [["pp.progress.v1", {"3.T.T.1.b": {"mastered": True, "best": 8, "max": 8, "tries": 1}}], ["pp.task.W-TASK-01", {"draft": "Keep my essay"}]])
    ok("8.2 the legacy fixture shows the panel: 'one lesson and one essay'", q.is_visible("#choose-welcome") and
       q.locator("#choose-welcome .wb-line").text_content() == "Welcome back. This browser has saved work on one lesson and one essay. Either choice below keeps it.",
       q.locator("#choose-welcome").text_content())
    c.close()

    WB = """(()=>{const h=document.getElementById('choose-welcome');return {hidden:h.hidden,line:(h.querySelector('.wb-line')||{}).textContent,
      links:[...h.querySelectorAll('.wb-btn')].map(b=>[b.textContent,b.getAttribute('aria-label')]),more:(h.querySelector('.wb-more')||{}).textContent||null}})()"""
    def lab(q, k):
        return q.evaluate("k=>PP_SKILLS.skillId(k)+' · '+PP.lessons[k].title.split(':')[0]", k)
    # Rich case: two in progress, one saved short writing, one essay, one passed (five items, three shown)
    P1, P2, WR, PASSED = "3.F.P.4.a", "3.F.F.1.a", "3.F.H.3.a", "3.T.T.1.b"
    rich = [["pp.progress.v1", {P1: {"taught": True, "learned": True}, P2: {"taught": True},
                                PASSED: {"taught": True, "learned": True, "practiced": True, "tried": True, "mastered": True, "best": 8, "max": 8, "tries": 1}}],
            ["pp.skwrite." + WR, {"text": "My short answer"}],
            ["pp.task.W-TASK-02", {"draft": "Second essay draft"}]]
    c, q = fresh(b, init=WRITE_SPY); ready(q)
    seed_work(q, rich)
    load_writes = writes(q)
    stored = q.evaluate("JSON.parse(localStorage.getItem('pp.progress.v1'))")
    # The only load-time write is skills.js's PP-003 migration (legacyUndated on a pass with no date). It is additive.
    ok("8.7a the only write on load is the additive PP-003 progress migration, which keeps every saved field",
       load_writes in ([], ["set:pp.progress.v1"]) and all(stored.get(k, {}).get(f) == v for k, r in rich[0][1].items() for f, v in r.items())
       and stored[PASSED].get("legacyUndated") is True, (load_writes, stored))
    q.evaluate("window.__writes=[]"); before = q.evaluate(SNAP)
    q.evaluate("PP_PATH.showChoice()"); q.wait_for_timeout(100)   # render the panel again, now with nothing else loading
    wb = q.evaluate(WB)
    ok("8.3 four lessons and one essay: count wording uses number words", wb["line"] == "Welcome back. This browser has saved work on four lessons and one essay. Either choice below keeps it.", wb["line"])
    ok("8.4 at most three links, in order: in progress (catalog order), then saved short writing",
       [t for t, _ in wb["links"]] == [lab(q, P1), lab(q, P2), lab(q, WR)], wb["links"])
    ok("8.5 then 'and two more in the lesson list.'", wb["more"] == "and two more in the lesson list.", wb["more"])
    exp_aria = q.evaluate("k=>PP_SKILLS.skillId(k)+', '+PP.lessons[k].title+'. Opens at '+PP_SKILLS.firstOpenStep(k).name", P1)
    ok("8.6 an in-progress link's aria-label names the lesson and its first open step", wb["links"][0][1] == exp_aria and exp_aria.endswith("Opens at Practice Together"), wb["links"][0])
    ok("8.7 rendering the panel writes nothing to storage", writes(q) == [] and q.evaluate(SNAP) == before, writes(q))
    q.locator("#choose-welcome .wb-btn").nth(0).click(); q.wait_for_timeout(250)
    ok("8.8 an in-progress lesson opens at its first open step (Practice Together)", screens(q) == ["screen-skill"] and q.evaluate("PP_SKILLS.current()") == P1 and q.evaluate("PP_SKILLS.step()") == "practice"
       and q.get_attribute("#sk-tab-practice", "aria-selected") == "true", (screens(q), q.evaluate("PP_SKILLS.step()")))
    ok("8.9 opening a lesson from the panel saves no learning mode", q.evaluate("localStorage.getItem('pp.path.v1')") is None)
    c.close()
    # Order with an essay and a passed lesson: in progress, essay, passed (three, no 'more' line)
    order3 = [["pp.progress.v1", {P2: {"taught": True},
                                  PASSED: {"taught": True, "learned": True, "practiced": True, "tried": True, "mastered": True, "best": 8, "max": 8, "tries": 1}}],
              ["pp.task.W-TASK-01", {"draft": "Keep my essay", "plan": {}}]]
    c, q = fresh(b, init=WRITE_SPY); ready(q)
    seed_work(q, order3)
    wb = q.evaluate(WB)
    essay_lbl = q.evaluate("PP_SKILLS.skillId('task:W-TASK-01')")
    ok("8.10 two lessons and one essay: wording", wb["line"] == "Welcome back. This browser has saved work on two lessons and one essay. Either choice below keeps it.", wb["line"])
    ok("8.11 order is in progress, then essay, then passed; no 'more' line with three items",
       len(wb["links"]) == 3 and wb["links"][0][0] == lab(q, P2) and "Essay:" in wb["links"][1][0] and wb["links"][2][0] == lab(q, PASSED) and wb["more"] is None, wb)
    ok("8.12 the essay link's aria-label says the saved draft opens with it", (wb["links"][1][1] or "").endswith(". Your saved draft opens with it."), wb["links"][1])
    ok("8.13 a passed lesson's aria-label says it opens at Learn It", (wb["links"][2][1] or "").endswith("Opens at Learn It"), wb["links"][2])
    q.locator("#choose-welcome .wb-btn").nth(2).click(); q.wait_for_timeout(250)
    ok("8.14 a passed lesson opens at Learn It, never at the check", screens(q) == ["screen-skill"] and q.evaluate("PP_SKILLS.current()") == PASSED and q.evaluate("PP_SKILLS.step()") == "teach", q.evaluate("PP_SKILLS.step()"))
    ready(q)
    q.locator("#choose-welcome .wb-btn").nth(1).click(); q.wait_for_timeout(250)
    ok("8.15 an essay link opens the saved draft", screens(q) == ["screen-write"] and q.evaluate("(()=>{const t=document.getElementById('w-draft');return t?t.value:null})()") in (None, "Keep my essay")
       and q.evaluate("(()=>{PP_WRITING.select('write');const t=document.getElementById('w-draft');return t&&t.value})()") == "Keep my essay",
       (screens(q), q.evaluate("(()=>{const t=document.getElementById('w-draft');return t&&t.value})()")))
    ok("8.16 the saved draft is unchanged in storage", (q.evaluate("JSON.parse(localStorage.getItem('pp.task.W-TASK-01'))") or {}).get("draft") == "Keep my essay")
    c.close()
    # Single-item wordings
    for items, want in (
        ([["pp.progress.v1", {P1: {"taught": True}}]], "one lesson"),
        ([["pp.task.W-TASK-01", {"draft": "a"}], ["pp.task.W-TASK-02", {"draft": "b"}]], "two essays"),
    ):
        c, q = fresh(b); ready(q); seed_work(q, items)
        wb = q.evaluate(WB)
        ok("8.17 wording '%s'" % want, wb["line"] == "Welcome back. This browser has saved work on %s. Either choice below keeps it." % want and wb["more"] is None, wb["line"])
        c.close()
    # Many lessons: 'and N more' uses a word below ten and numerals from ten
    c, q = fresh(b); ready(q)
    keys = q.evaluate("PP_CATALOG.flatMap(c=>c.groups.flatMap(g=>g.skills)).filter(k=>PP.lessons[k]).slice(0,14)")
    seed_work(q, [["pp.progress.v1", {k: {"taught": True} for k in keys}]])
    wb = q.evaluate(WB)
    ok("8.18 fourteen lessons: '14 lessons', three links, 'and 11 more'", wb["line"].startswith("Welcome back. This browser has saved work on 14 lessons.") and len(wb["links"]) == 3 and wb["more"] == "and 11 more in the lesson list.", wb)
    c.close()
    c, q = fresh(b); ready(q)
    seed_work(q, [["pp.progress.v1", {k: {"taught": True} for k in keys[:4]}]])
    wb = q.evaluate(WB)
    ok("8.19 four lessons: 'and one more in the lesson list.'", wb["more"] == "and one more in the lesson list.", wb["more"])
    c.close()
    # Malformed progress
    for name, raw in (("unparseable", "{bad"), ("array", "[1,2]"), ("bad record", json.dumps({P1: "oops", "__proto__": {"x": 1}, PASSED: {"mastered": True}}))):
        errors_before = len(errors)
        c, q = fresh(b, init=WRITE_SPY); ready(q)
        q.evaluate("v=>localStorage.setItem('pp.progress.v1',v)", raw); reload(q)
        if name == "bad record":
            # skills.js's additive PP-003 migration may rewrite the map on load; it must keep the good record
            ok("8.21a malformed progress (bad record): the good record survives load", (q.evaluate("JSON.parse(localStorage.getItem('pp.progress.v1'))") or {}).get(PASSED, {}).get("mastered") is True)
            raw = q.evaluate("localStorage.getItem('pp.progress.v1')")
        q.evaluate("window.__writes=[]"); q.evaluate("PP_PATH.showChoice()"); q.wait_for_timeout(100)
        wb = q.evaluate(WB)
        if name == "bad record":
            ok("8.20 malformed progress (%s): the panel shows the good record only" % name, not wb["hidden"] and wb["line"].startswith("Welcome back. This browser has saved work on one lesson.") and len(wb["links"]) == 1, wb)
        else:
            ok("8.20 malformed progress (%s): the panel stays hidden and the choices work" % name, wb["hidden"] and screens(q) == ["screen-choose"] and q.is_enabled("#choose-browse"), wb)
        ok("8.21 malformed progress (%s): no page errors, and rendering the panel leaves the stored value untouched" % name,
           len(errors) == errors_before and q.evaluate("localStorage.getItem('pp.progress.v1')") == raw and writes(q) == [], (errors[errors_before:], writes(q)))
        c.close()

    # ---------- 9. Choice-screen copy and state ----------
    c, q = fresh(b); ready(q)
    ok("9.1 button labels: 'Start the Learning Path' and 'Choose a lesson'",
       q.locator("#choose-path").text_content() == "Start the Learning Path" and q.locator("#choose-browse").text_content() == "Choose a lesson")
    ok("9.2 the first path lesson reads 'D1 · Story elements'", q.locator("#choose-first").text_content() == "D1 · Story elements", q.locator("#choose-first").text_content())
    chips = q.evaluate("[...document.querySelectorAll('#choice-chips li')].map(l=>l.textContent)")
    ok("9.3 the category line reads 'Lessons are grouped in five categories:' with five chips in catalog order",
       q.locator("#choice-chips-label").text_content() == "Lessons are grouped in five categories:" and chips == q.evaluate("PP_CATALOG.map(c=>c.name)") and len(chips) == 5, chips)
    ok("9.4 the chips are a static list, not controls", q.evaluate("document.querySelectorAll('#choice-chips button,#choice-chips a').length") == 0)
    sh = q.locator("[data-shared=choose]")
    ok("9.5 the shared routine block is present and explains how a lesson works", sh.count() == 1 and sh.is_visible() and "How a lesson works" in sh.text_content()
       and q.evaluate("!!document.querySelector('[data-shared=choose] details.routine')"), sh.text_content()[:80])
    ok("9.6 the shared routine block's step names match a five-step lesson", all(n in sh.text_content() for n in q.evaluate("PP_SKILLS.stepNames('3.T.T.1.b')")))
    ok("9.7 the Recommended tag is on the Learning Path card only", q.evaluate("[...document.querySelectorAll('#screen-choose .choice-tag')].map(t=>t.closest('.choice-card').classList.contains('choice-path'))") == [True])

    # ---------- 10. Path screen before Start ----------
    q.click("#choose-path"); q.wait_for_timeout(200)
    ok("10.1 Start the Learning Path from the choice screen opens the introduction", screens(q) == ["screen-path"] and q.is_visible("#path-intro") and q.is_visible("#path-start"))
    ok("10.2 before Start the next-step card is hidden", q.is_hidden("#path-current"))
    ok("10.3 before Start the 'See the whole path / Switch learning mode' row is hidden", q.is_hidden("#path-content .next-other"))
    ok("10.4 before Start the intro's start button is the only visible start action",
       q.evaluate("[...document.querySelectorAll('#screen-path button')].filter(b=>b.offsetParent&&/^(Start|Continue)/.test(b.textContent.trim())).map(b=>b.id)") == ["path-start"])
    ok("10.5 before Start nothing is saved", q.evaluate("localStorage.getItem('pp.path.v1')") is None)
    ok("10.6 the start button names the first lesson", q.locator("#path-start").text_content() == "Start with D1 · Story elements", q.locator("#path-start").text_content())
    q.click("#path-start"); q.wait_for_timeout(200)
    m = q.evaluate(MODE)
    ok("10.7 after Start the next-step card and the row show, and path mode is saved as introduced",
       q.is_visible("#path-current") and q.is_visible("#path-content .next-other") and q.is_hidden("#path-intro") and m["mode"] == "path" and m["introduced"] is True, m)
    # 9.x continued: the label once introduced
    q.click("#path-content .next-other [data-go=choose]"); q.wait_for_timeout(200)
    ok("9.8 once introduced the choice reads 'Back to the Learning Path'", screens(q) == ["screen-choose"] and q.locator("#choose-path").text_content() == "Back to the Learning Path", q.locator("#choose-path").text_content())
    ok("9.9 opening the choice screen again changes no saved state", q.evaluate(MODE) == m)

    # ---------- 11. Header "Browse lessons" keeps the saved mode ----------
    q.click("#choose-path"); q.wait_for_timeout(200)
    q.click("#path-browse"); q.wait_for_timeout(200)
    ok("11.1 Browse lessons from the path opens the lesson list at #browse", screens(q) == ["screen-home"] and q.is_visible("#skill-search") and q.evaluate("location.hash") == "#browse")
    ok("11.2 Browse lessons keeps path mode saved", q.evaluate(MODE) == m, q.evaluate(MODE))
    ready(q)
    ok("11.3 the plain address after Browse lessons still opens the path", screens(q) == ["screen-path"], screens(q))
    c.close()
    c, q = fresh(b); ready(q)
    q.click("#choose-browse"); q.wait_for_timeout(200)
    q.click("#screen-home [data-go=path]"); q.wait_for_timeout(200)
    ok("11.4 in browse mode, 'Try the Learning Path' shows the introduction without changing the mode",
       screens(q) == ["screen-path"] and q.is_visible("#path-intro") and q.evaluate(MODE) == {"mode": "browse", "introduced": False, "bookmark": None, "finished": {}, "habits": {}}, q.evaluate(MODE))
    q.click("#path-browse"); q.wait_for_timeout(200)
    ok("11.5 Browse lessons from there returns to the list and keeps browse mode", screens(q) == ["screen-home"] and q.evaluate(MODE)["mode"] == "browse")
    c.close()

    ok("12.1 no page errors in any scenario", not errors, errors[:3])
    b.close()

sys.excepthook = _default_hook
fails = print_results()
sys.exit(1 if fails else 0)

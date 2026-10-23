/* Peach Prep — shell: screens, Home, section lists, set loading. */
(function () {
  "use strict";
  const { make, clear, el } = PP;
  const S = window.PP_SITE;
  const SCREENS = ["choose", "path", "home", "skill", "std", "review", "coverage", "mixed", "clues", "habits", "section", "player", "parents", "write"];
  let current = "home";
  let sectionKey = "reading";

  const ICON = {
    book: '<path d="M4 5.5C6.5 4.4 9.3 4.5 12 6c2.7-1.5 5.5-1.6 8-.5v13c-2.5-1.1-5.3-1-8 .5-2.7-1.5-5.5-1.6-8-.5z M12 6v13.5"/>',
    pencil: '<path d="M4 20l1-4.5L15.5 5a2 2 0 0 1 3 0l.5.5a2 2 0 0 1 0 3L8.5 19z M13.5 7l3.5 3.5 M4 20l4.5-1"/>',
    abc: '<path d="M3 17l3-9 3 9 M4 14h4 M11 8v9h3a2.2 2.2 0 0 0 0-4.5H11 M11 12.5h2.5a2 2 0 0 0 0-4.5H11 M21 9.5a3.5 3.5 0 1 0 0 5"/>',
    flag: '<path d="M5 21V4 M5 4h11l-2 4 2 4H5"/>'
  };
  function icon(name) {
    const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("aria-hidden", "true");
    s.setAttribute("class", "icon");
    s.innerHTML = ICON[name] || "";
    return s;
  }

  function show(name) {
    current = name;
    document.querySelectorAll("[data-go=home]").forEach(b => { b.textContent = name === "player" || name === "write" ? "Home" : window.PP_PATH.mode() === "path" ? "← Learning path" : "← All skills"; });
    SCREENS.forEach(n => { el("screen-" + n).hidden = n !== name; });
    el("home-notfound").hidden = true;
    window.scrollTo(0, 0);
  }

  /* ---------- navigation: every screen has an address, so the phone's
     Back button and a reload both land in the right place ---------- */
  let routing = false;
  let pendingStep = null;
  let pendingReturn = null;   /* set when an in-page Back steps back through history (D4) */
  let replaceNext = false;
  /* Every pushed entry remembers the address it was opened from (state.ppFrom),
     so an in-page Back can step back to that entry instead of adding a copy.
     A replace keeps ppFrom (the entry before it has not changed); `state`
     overrides that. Routing keeps the entry's state as it is. */
  function setHash(hash, replace, state) {
    window.PP_PATH.track(hash);
    const url = location.pathname + location.search + hash;
    if (routing) { replaceNext = false; history.replaceState(history.state, "", url); return false; }
    if (replaceNext || replace) {
      replaceNext = false;
      const keep = state !== undefined ? state : (history.state && typeof history.state.ppFrom === "string" ? { ppFrom: history.state.ppFrom } : null);
      history.replaceState(keep, "", url);
      return false;
    }
    if (location.hash === hash || (!location.hash && !hash)) return false;
    history.pushState({ ppFrom: location.hash }, "", url);
    return true;
  }
  /* PP-003 D4: when the entry just before this one is `hash`, go back to it
     (one entry, no duplicate) instead of replacing this one with a copy. */
  function stepBackTo(hash, r) {
    const s = history.state;
    if (!s || typeof s.ppFrom !== "string" || s.ppFrom !== hash) return false;
    pendingReturn = r || { kind: "focus" };
    history.back();
    return true;
  }
  /* PP-003 D5: a finished practice or test marks its own history entry, so
     Forward or a reload shows "you finished this" instead of restarting it.
     Only the history entry changes; stored progress is not touched. */
  function markDone(info) {
    if (!/^#play\//.test(location.hash)) return;
    history.replaceState(Object.assign({}, history.state, { ppDone: info }), "", location.href);
  }
  /* A test in progress is never thrown away without asking. */
  function canLeave() {
    if (current === "player" && window.PP_PLAYER.inProgress()) {
      if (!window.confirm("Leave this test? Your answers will not be saved.")) return false;
      window.PP_PLAYER.abandon();
    }
    return true;
  }
  function goHome() {
    if (!canLeave()) return;
    if (window.PP_PATH.mode() === "path") { window.PP_PATH.open(); return; }
    /* leaving an activity: if it was opened from Home, step back to that entry */
    if ((current === "player" || current === "write") && stepBackTo("", { kind: "home", row: true })) return;
    /* otherwise replace its history entry, so the phone's Back button does not
       reopen the activity the child just left */
    if (current === "player" || current === "write") replaceNext = true;
    setHash("");
    landHome(true, true);
  }
  function landHome(toRow, focus, browse) {
    if (!browse && window.PP_PATH.mode() === "path") { window.PP_PATH.open(); return; }
    if (!browse && !window.PP_PATH.mode()) { window.PP_PATH.showChoice(); return; }
    el("skill-back").textContent = "← All skills";
    window.PP_SKILLS.buildList();
    show("home");
    /* the path stays one secondary tap away; it names the return when the path was started */
    document.querySelector('#screen-home [data-go="path"]').textContent = window.PP_PATH.introduced() ? "Back to the Learning Path" : "Try the Learning Path";
    window.PP_PATH.notice();
    if (!focus) return;
    /* coming back from a skill: land on that skill's row, not the top of a long list */
    const last = toRow && window.PP_SKILLS.lastCode();
    const row = last && document.querySelector('#skill-list [data-code="' + CSS.escape(last) + '"]');
    if (row) { row.focus(); row.scrollIntoView({ block: "center" }); }
    else el("home-title").focus();
  }
  function openSimple(name, hash, build, focusId) {
    if (!canLeave()) return;
    if (current === "player" || current === "write") replaceNext = true;
    build && build();
    setHash(hash);
    show(name);
    el(focusId).focus();
  }
  const openClues = () => openSimple("clues", "#clues", window.PP_SKILLS.buildClues, "clues-title");
  const openHabits = () => openSimple("habits", "#habits", window.PP_SKILLS.buildHabits, "habits-title");
  function openMixed() {
    if (!canLeave()) return;
    if (current === "section" && stepBackTo("#mixed")) return;
    if (current === "section") replaceNext = true;
    setHash("#mixed");
    show("mixed");
    el("mixed-title").focus();
  }

  /* ---------- shared start-screen blocks (home redesign 2026-10-22) ----------
     One "How a lesson works" explainer and one support-links row, built the same way
     on the three start screens. Step names and the hands-on count come from the
     lessons themselves. The home screen keeps its existing #hero-* ids. */
  const SHORT = () => window.matchMedia("(max-height: 559px)").matches;
  function routineBlock(open) {
    const d = make("details", "routine"); d.open = open && !SHORT();
    d.appendChild(make("summary", "routine-sum", "How a lesson works"));
    const body = make("div", "routine-body");
    body.appendChild(make("p", "routine-lead", "Most lessons have five short steps. Do them in order, at your child's pace. One lesson can take more than one short session."));
    const ol = make("ol", "routine-steps");
    [["Learn It", "Read a short lesson about the skill together."],
     ["Watch Me", "See the skill done step by step in examples."],
     ["Practice Together", "Answer questions side by side. Help me gives hints."],
     ["Try It Yourself", "Your child answers alone. In most lessons, Help me opens after one wrong try. Lessons with fifteen practice questions in three sets offer hints and Show me how at any time, and you can stop after a set."],
     ["Test Your Knowledge", "The skill check: no hints, and 80% of the points to pass. It starts fresh each time."]
    ].forEach(([name, line], i) => {
      const li = make("li", "rs");
      li.appendChild(make("span", "rs-n", String(i + 1)));
      const t = make("span", "rs-text"); t.appendChild(make("span", "rs-name", name)); t.appendChild(make("span", "rs-line", line));
      li.appendChild(t); ol.appendChild(li);
    });
    body.appendChild(ol);
    const keys = Object.keys(PP.lessons || {});
    const handsOn = keys.filter(k => window.PP_SKILLS.stepNames(k).indexOf("Check") >= 0).length;
    const nTasks = (PP.tasks || []).length;
    body.appendChild(make("p", "routine-except", "Some lessons are different. " +
      (handsOn ? cap(PP.countWord(handsOn)) + " hands-on lesson" + (handsOn === 1 ? "" : "s") + ", for reading aloud and cursive, " + (handsOn === 1 ? "has" : "have") + " Learn It, Watch Me, Practice and a grown-up Check. " : "") +
      (nTasks ? "The " + PP.countWord(nTasks) + " essay task" + (nTasks === 1 ? " has" : "s have") + " Read, Plan, Write and Check, and a For parents tab for scoring." : "")));
    body.appendChild(make("h3", "routine-h3", "When a grown-up joins in"));
    const ul = make("ul", "routine-adult");
    [["Practice Together", "sit side by side and talk through each answer."],
     ["Reading aloud", "listen to your child read, then tick the Check."],
     ["Cursive", "watch your child write the letters, then tick the Check."],
     ["Short writing", "read it together and use the checklist."],
     ["Essays", "read the essay and score it in the “For parents” tab."],
     ["“Say it out loud” cards", "talk through the answers together. These ticks are practice only and do not change the skill check."]
    ].forEach(([who, what]) => { const li = make("li"); li.appendChild(make("strong", "", who + ": ")); li.appendChild(document.createTextNode(what)); ul.appendChild(li); });
    body.appendChild(ul);
    d.appendChild(body);
    return d;
  }
  function cap(t) { return t.charAt(0).toUpperCase() + t.slice(1); }
  function supportRow(prefix) {
    const nav = make("nav", "support"); nav.setAttribute("aria-label", "Help for grown-ups");
    nav.appendChild(make("h2", "support-title", "Help and more practice"));
    const ul = make("ul", "support-list");
    [["parents", "Parent guide", "The test, the essay, and how to use this site.", () => { if (canLeave()) window.PP_PARENTS.open(); }],
     ["standards", "Georgia standards", "What each Grade 3 ELA standard asks, in plain words.", () => { if (canLeave()) window.PP_PARENTS.open("standards"); }],
     ["habits", "Everyday habits", "Reading and writing habits to try at home.", () => openHabits()],
     ["mixed", "Mixed practice and practice tests", "Passages that mix skills, like the real test.", () => openMixed()],
     ["clues", "Clue Word Cheat Sheet", "Clue words for each kind of text. Printable.", () => openClues()]
    ].forEach(([id, name, line, act]) => {
      const li = make("li");
      const b = make("button", "support-btn"); b.type = "button"; b.id = prefix + "-" + id;
      b.appendChild(make("span", "sb-name", name)); b.appendChild(make("span", "sb-line", line));
      b.addEventListener("click", act);
      li.appendChild(b); ul.appendChild(li);
    });
    nav.appendChild(ul);
    const saved = make("details", "saved");
    saved.appendChild(make("summary", "", "Saved on this device only"));
    saved.appendChild(make("p", "", "Progress is kept in this browser on this device. There is no account. Clearing browser data erases it, and other devices will not see it. If two children share this device, their progress is mixed together. An unfinished skill check is not saved."));
    nav.appendChild(saved);
    return nav;
  }
  function buildShared() {
    document.querySelectorAll(".home-shared").forEach(host => {
      clear(host);
      const where = host.dataset.shared;
      host.appendChild(routineBlock(where === "choose"));
      host.appendChild(supportRow(where === "home" ? "hero" : where + "-link"));
    });
  }

  /* ---------- Home ---------- */
  function buildHome() {
    buildShared();
    const grid = el("section-grid"); clear(grid);
    S.sections.forEach(sec => {
      const li = make("li", "section-card sec-" + sec.key);
      const head = make("div", "section-card-head");
      const ic = make("span", "section-icon"); ic.appendChild(icon(sec.icon)); head.appendChild(ic);
      const words = make("div");
      words.appendChild(make("h3", "section-name", sec.name));
      words.appendChild(make("p", "section-kind", sec.sub + (sec.points ? " · " + sec.points + " points" : "")));
      head.appendChild(words);
      li.appendChild(head);
      li.appendChild(make("p", "section-line", sec.line));
      const sets = PP.sets.filter(s => s.section === sec.key);
      const tasks = sec.key === "writing" ? PP.tasks : [];
      /* a section with nothing in it is not shown (no "Coming soon" cards) */
      if (!sets.length && !tasks.length) return;
      const bits = [];
      if (tasks.length) bits.push(tasks.length + " writing task" + (tasks.length > 1 ? "s" : ""));
      if (sets.length) bits.push(sets.length + " practice set" + (sets.length > 1 ? "s" : ""));
      li.appendChild(make("p", "section-count", bits.join(" · ")));
      const b = make("button", "btn btn-primary btn-block", "Open " + sec.name);
      b.type = "button"; b.dataset.section = sec.key;
      b.addEventListener("click", () => openSection(sec.key));
      li.appendChild(b);
      grid.appendChild(li);
    });
    window.PP_SKILLS.buildList();
    const tl = el("tool-list"); clear(tl);
    S.tools.forEach(t => {
      const li = make("li", "tool");
      const a = make("a", "tool-link", t.name); a.href = t.url; a.target = "_blank"; a.rel = "noopener";
      li.appendChild(a); li.appendChild(make("span", "tool-line", t.line));
      tl.appendChild(li);
    });
    el("build-badge").textContent = window.PP_MANIFEST.build;
  }

  /* ---------- Section ---------- */
  const KIND = { form: "Practice test", literary: "Story", informational: "Informational", opinion: "Opinion", poetry: "Poetry",
                 paired: "Paired texts", grammar: "Grammar", vocabulary: "Vocabulary", revising: "Revising" };
  function openSection(key) {
    if (!canLeave()) return;
    sectionKey = key;
    setHash("#" + key);
    const sec = S.sections.find(s => s.key === key);
    el("section-title").textContent = sec.name;
    el("section-sub").textContent = sec.sub + (sec.points ? " · " + sec.points + " of the test's 60 points. " : ". ") + sec.line;
    const grid = el("set-grid"); clear(grid);
    const sets = PP.sets.filter(s => s.section === key);
    const tasks = key === "writing" ? PP.tasks : [];
    tasks.forEach(t => {
      const li = make("li", "set-card task-card");
      li.appendChild(make("p", "set-kind", "Writing task · 8 points"));
      li.appendChild(make("h2", "set-title", t.title));
      li.appendChild(make("p", "set-blurb", "Read two sources, plan, and write an opinion essay. A grown-up scores it with the rubric."));
      const b = make("button", "btn btn-primary", "Start writing");
      b.type = "button"; b.dataset.task = t.id;
      b.setAttribute("aria-label", "Start writing: " + t.title);
      b.addEventListener("click", () => window.PP_WRITING.start(t.id));
      const acts = make("div", "set-actions"); acts.appendChild(b); li.appendChild(acts);
      grid.appendChild(li);
    });
    sets.forEach(set => {
      const li = make("li", "set-card");
      li.appendChild(make("p", "set-kind", KIND[set.kind] || set.kind));
      li.appendChild(make("h2", "set-title", set.title));
      if (set.blurb) li.appendChild(make("p", "set-blurb", set.blurb));
      const pts = set.items.reduce((a, it) => a + it.points, 0);
      li.appendChild(make("p", "set-meta", set.items.length + " questions · " + pts + " points"));
      const acts = make("div", "set-actions");
      const modes = set.kind === "form" ? [["test", "Start the test", "btn-primary"]]
        : [["practice", "Practice", "btn-primary"], ["test", "Test", "btn-soft"]];
      modes.forEach(([m, label, cls]) => {
        const b = make("button", "btn " + cls, label);
        b.type = "button"; b.dataset.set = set.id; b.dataset.mode = m;
        b.setAttribute("aria-label", label + ": " + set.title);
        b.addEventListener("click", () => window.PP_PLAYER.start(set.id, m));
        acts.appendChild(b);
      });
      li.appendChild(acts);
      grid.appendChild(li);
    });
    show("section");
    el("section-title").focus();
  }

  /* ---------- load sets, then start ---------- */
  function loadSets() {
    const ids = (window.PP_MANIFEST.sets || []);
    const lids = (window.PP_MANIFEST.lessons || []);
    const tids = (window.PP_MANIFEST.tasks || []);
    const load = src => new Promise(res => {
      const s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = res;
      document.body.appendChild(s);
    });
    return Promise.all(ids.map(id => load("js/data/sets/" + id + ".js"))
      .concat(tids.map(id => load("js/data/tasks/" + id + ".js")))
      .concat(lids.map(id => load("js/data/lessons/" + id + ".js")))).then(() => {
      PP.tasks.sort((a, b) => tids.indexOf(a.id) - tids.indexOf(b.id));
      /* keep manifest order */
      PP.sets.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
    });
  }

  const TITLE = { choose: "choose-title", path: "path-title", home: "home-title", mixed: "mixed-title", clues: "clues-title", habits: "habits-title", section: "section-title",
                  parents: "parents-title", skill: "sk-title", std: "std-title", review: "review-title", coverage: "coverage-title", player: "player-title", write: "write-title" };
  function route() {
    routing = true;
    const ret = pendingReturn; pendingReturn = null;
    try {
      const h = location.hash.replace("#", "");
      const parts = h.split("/");
      if (parts[0] === "play" && PP.byId[parts[1]]) {
        const mode = parts[2] === "test" ? "test" : parts[2] === "try" ? "try" : "practice";
        const done = history.state && history.state.ppDone;
        if (done && done.set === parts[1]) { window.PP_PLAYER.finished(parts[1], mode, done); return; }
        window.PP_PLAYER.start(parts[1], mode); return;
      }
      if (h === "choose") { window.PP_PATH.showChoice(); return; }
      if (h === "path") { window.PP_PATH.open(); return; }
      if (h === "browse") { landHome(false, true, true); return; }
      if (h === "clues") { window.PP_SKILLS.buildClues(); show("clues"); return; }
      if (h === "habits") { window.PP_SKILLS.buildHabits(); show("habits"); return; }
      if (parts[0] === "write" && PP.taskById[parts[1]]) { window.PP_WRITING.start(parts[1]); return; }
      if (parts[0] === "parents") {
        if (ret && ret.kind === "parents") window.PP_PARENTS.open(ret.tab, ret.state);
        else window.PP_PARENTS.open(parts[1]);
        return;
      }
      /* expansion 2026-10-22: a standard page; the band form (3-5.T.T.1) settles on the grade 3 address */
      if (parts[0] === "std") {
        let code = ""; try { code = decodeURIComponent(parts.slice(1).join("/")); } catch (e) { code = ""; }
        if (code && window.PP_STD.open(code, { routed: true })) return;
      }
      if (parts[0] === "skill") {
        let st = pendingStep || parts[2]; pendingStep = null;
        const ps = window.PP_PLAYER.state();
        let code = ""; try { code = decodeURIComponent(parts[1] || ""); } catch (e) { code = ""; }
        if (current === "player" && (ps.setId === "SK:" + code + ":t" || ps.setId === "SK:" + code + ":tB")) st = "test";   /* PP-004: either check form */
        if (code && window.PP_SKILLS.open(code, st)) return;
      }
      if (h === "mixed") { show("mixed"); return; }
      /* expansion 2026-10-22 (ENG-09): the cumulative review hub and the assessment coverage map */
      if (h === "review") { window.PP_REVIEW.openHub({ replace: true }); return; }
      if (h === "coverage") { window.PP_REVIEW.openMap({ replace: true }); return; }
      if (S.sections.some(s => s.key === h) && (PP.sets.some(x => x.section === h) || (h === "writing" && PP.tasks.length))) { openSection(h); return; }
      landHome(!!(ret && ret.row), !!ret, !!h);
      /* PP-003 D16: an address that is not a page shows Home, says so, and drops the bad address */
      if (h) {
        history.replaceState(null, "", location.pathname + location.search);
        lastHash = "";
        if (h !== "main") {
          /* PP-003 RD-11: focus the note, so it is read out and keyboard users start from it */
          const nf = el("home-notfound");
          nf.hidden = false; nf.tabIndex = -1; nf.focus();
        }
      }
    } finally {
      routing = false;
      /* an in-page Back that stepped back through history: put focus on the page title */
      if (ret && current !== "home" && current !== "skill" && current !== "parents" && TITLE[current]) el(TITLE[current]).focus();
    }
  }

  /* Browser or phone Back: confirm before leaving a test in progress. */
  let lastHash = location.hash;
  function onPop() {
    if (current === "player" && window.PP_PLAYER.inProgress() && !location.hash.startsWith("#play/")) {
      if (!window.confirm("Leave this test? Your answers will not be saved.")) {
        history.pushState(null, "", location.pathname + location.search + lastHash);
        return;
      }
      window.PP_PLAYER.abandon();
    }
    route();
  }

  function init() {
    window.PP_PLAYER.init();
    window.PP_PARENTS.init();
    window.PP_WRITING.init();
    document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => {
      const g = b.dataset.go;
      if (g === "choose") { window.PP_PATH.choose(); return; }
      if (g === "path") { window.PP_PATH.open(); return; }
      if (g === "home") goHome();
      else if (g === "mixed") openMixed();
      else if (g === "parents") { if (canLeave()) window.PP_PARENTS.open(); }
    }));
    window.PP_SKILLS.init();
    window.PP_PATH.init();
    window.PP_STD.init();
    window.PP_REVIEW.init();
    ["mixed-review", "mixed-coverage"].forEach(id => el(id).addEventListener("click", e => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault(); if (id === "mixed-review") window.PP_REVIEW.openHub(); else window.PP_REVIEW.openMap();
    }));
    /* expansion 2026-10-22: every a.std-link opens its standard page in place (one delegated handler).
       The href still works for a new tab, a copied link and a reload. */
    document.addEventListener("click", e => {
      const a = e.target && e.target.closest && e.target.closest("a.std-link");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      if (current === "player" || current === "write") replaceNext = false;
      window.PP_STD.open(a.dataset.std);
    });
    /* the #hero-* support buttons are built (with their listeners) in buildShared() */
    /* QA-03: small help links near the top of the browse home; the explainer itself sits below the list */
    el("home-how").addEventListener("click", () => {
      const d = document.querySelector('#screen-home details.routine'); if (!d) return;
      d.open = true; const sum = d.querySelector("summary"); sum.focus({ preventScroll: true }); d.scrollIntoView({ block: "start" });
    });
    el("home-help").addEventListener("click", () => { if (canLeave()) window.PP_PARENTS.open(); });
    el("clues-print").addEventListener("click", () => window.print());
    el("player-back").addEventListener("click", back);
    el("write-back") && el("write-back").addEventListener("click", back);
    /* PP-003 D9: the skip link moves focus to the visible screen's heading.
       It must not change the address: "#main" is not a page. */
    document.querySelector(".skip").addEventListener("click", e => {
      e.preventDefault();
      const h = document.querySelector(".screen:not([hidden]) h1");
      if (h) h.focus();
    });
    document.addEventListener("keydown", e => {
      if (e.key !== "Escape") return;
      const t = e.target;
      if (t && (t.tagName === "TEXTAREA" || t.tagName === "INPUT" || t.tagName === "SELECT")) return;
      if (current === "player" || current === "write") back();
      else if (current !== "home") goHome();
    });
    window.addEventListener("popstate", onPop);
    window.addEventListener("hashchange", () => { lastHash = location.hash; });
    window.addEventListener("beforeunload", e => {
      if (current === "player" && window.PP_PLAYER.inProgress()) { e.preventDefault(); e.returnValue = ""; }
    });
    loadSets().then(() => { buildHome(); el("choose-path").disabled = false; el("choose-browse").disabled = false; route(); booted = true; lastHash = location.hash; });
  }

  /* The activity's Back button returns to wherever it was opened from:
     the section list, or the parent guide. */
  let returnTo = null;
  let booted = false;   /* false during the first route after a load: nothing was on screen before it */
  function rememberReturn() {
    if (!booted) { returnTo = null; return; }
    /* the address being left: during routing (Forward, reload) that is the entry before this one */
    const hash = routing ? lastHash : location.hash;
    returnTo = current === "parents" ? { kind: "parents", tab: window.PP_PARENTS.tab(), state: window.PP_PARENTS.snapshot(), hash } :
               current === "skill" ? { kind: "skill", code: window.PP_SKILLS.current(), step: window.PP_SKILLS.step(), hash } :
               current === "section" ? { kind: "section", key: sectionKey, hash } :
               current === "std" ? { kind: "std", code: window.PP_STD.current(), hash } :
               current === "review" || current === "coverage" ? { kind: current, hash } :
               current === "home" || current === "clues" || current === "habits" || current === "path" ? { kind: current, hash } : returnTo;
  }
  function back() {
    if (!canLeave()) return;
    if (current === "player") window.PP_PLAYER.abandon();
    const r = returnTo;
    const ps = window.PP_PLAYER.state();
    /* after a skill test, show the Test step with the result */
    const skillStep = r && r.kind === "skill" ? (current === "player" && (ps.setId === "SK:" + r.code + ":t" || ps.setId === "SK:" + r.code + ":tB") ? "test" : r.step) : null;
    /* PP-003 D4: the page it was opened from is the entry just before this one:
       go back to it, so the phone's Back button does not land on the same page twice */
    if (r && typeof r.hash === "string" && stepBackTo(r.hash, r)) { if (skillStep) pendingStep = skillStep; return; }
    /* opened from an address or reloaded: the entry before this one is still where it was opened from */
    if (!r && history.state && typeof history.state.ppFrom === "string" && stepBackTo(history.state.ppFrom)) return;
    replaceNext = true;
    if (r && r.kind === "path") { window.PP_PATH.open(); return; }
    if (r && r.kind === "parents") { window.PP_PARENTS.open(r.tab, r.state); return; }
    if (r && r.kind === "home") { setHash(""); landHome(false, true); return; }
    if (r && r.kind === "clues") { window.PP_SKILLS.buildClues(); setHash("#clues"); show("clues"); el("clues-title").focus(); return; }
    if (r && r.kind === "habits") { window.PP_SKILLS.buildHabits(); setHash("#habits"); show("habits"); el("habits-title").focus(); return; }
    if (r && r.kind === "skill") { window.PP_SKILLS.open(r.code, skillStep); return; }
    if (r && r.kind === "std") { window.PP_STD.open(r.code); return; }
    if (r && r.kind === "review") { window.PP_REVIEW.openHub(); return; }
    if (r && r.kind === "coverage") { window.PP_REVIEW.openMap(); return; }
    if (current === "player" && ps.section === "skill") {
      /* opened straight from an address (no page to return to): the skill's matching step */
      const set = PP.byId[ps.setId];
      window.PP_SKILLS.open(set.code, ({ p: "practice", y: "try", y2: "try", y3: "try", t: "test", tB: "test" })[set.part]); return;
    }
    if (current === "player" && ps.section === "review") {
      /* a standard review opens its standard page; a cumulative part opens the hub */
      const set = PP.byId[ps.setId];
      if (set && set.group && window.PP_STD.open(set.group)) return;
      window.PP_REVIEW.openHub(); return;
    }
    const key = (r && r.kind === "section") ? r.key :
      (current === "write" ? "writing" : (window.PP_PLAYER.state().section || sectionKey));
    openSection(key);
  }
  function track() { lastHash = location.hash; }

  window.PP_APP = { landBrowse: () => landHome(false, true, true), show, openSection, openMixed, openClues, openHabits, goHome, setHash, canLeave, rememberReturn, back, track, markDone, stepBackTo, current: () => current };
  document.addEventListener("DOMContentLoaded", init);
})();

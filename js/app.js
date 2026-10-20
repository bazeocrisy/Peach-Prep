/* Peach Prep — shell: screens, Home, section lists, set loading. */
(function () {
  "use strict";
  const { make, clear, el } = PP;
  const S = window.PP_SITE;
  const SCREENS = ["home", "section", "player", "parents", "write"];
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
    SCREENS.forEach(n => { el("screen-" + n).hidden = n !== name; });
    window.scrollTo(0, 0);
  }

  /* ---------- navigation: every screen has an address, so the phone's
     Back button and a reload both land in the right place ---------- */
  let routing = false;
  function setHash(hash) {
    if (routing) { history.replaceState(null, "", location.pathname + location.search + hash); return; }
    if (location.hash === hash || (!location.hash && !hash)) return;
    history.pushState(null, "", location.pathname + location.search + hash);
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
    setHash("");
    show("home");
    el("home-title").focus();
  }

  /* ---------- Home ---------- */
  function buildHome() {
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
      if (sets.length || tasks.length) {
        const bits = [];
        if (tasks.length) bits.push(tasks.length + " writing task" + (tasks.length > 1 ? "s" : ""));
        if (sets.length) bits.push(sets.length + " practice set" + (sets.length > 1 ? "s" : ""));
        li.appendChild(make("p", "section-count", bits.join(" · ")));
        const b = make("button", "btn btn-primary btn-block", "Open " + sec.name);
        b.type = "button"; b.dataset.section = sec.key;
        b.addEventListener("click", () => openSection(sec.key));
        li.appendChild(b);
      } else {
        li.classList.add("is-soon");
        li.appendChild(make("p", "soon-label", sec.soon || "Coming soon"));
      }
      grid.appendChild(li);
    });
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
    const soon = el("section-soon");
    soon.hidden = !!(sets.length || tasks.length);
    if (!sets.length && !tasks.length) soon.textContent = (sec.soon || "Coming soon") + ". This section is being written and checked.";
    show("section");
    el("section-title").focus();
  }

  /* ---------- load sets, then start ---------- */
  function loadSets() {
    const ids = (window.PP_MANIFEST.sets || []);
    const tids = (window.PP_MANIFEST.tasks || []);
    const load = src => new Promise(res => {
      const s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = res;
      document.body.appendChild(s);
    });
    return Promise.all(ids.map(id => load("js/data/sets/" + id + ".js"))
      .concat(tids.map(id => load("js/data/tasks/" + id + ".js")))).then(() => {
      PP.tasks.sort((a, b) => tids.indexOf(a.id) - tids.indexOf(b.id));
      /* keep manifest order */
      PP.sets.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
    });
  }

  function route() {
    routing = true;
    try {
      const h = location.hash.replace("#", "");
      const parts = h.split("/");
      if (parts[0] === "play" && PP.byId[parts[1]]) { window.PP_PLAYER.start(parts[1], parts[2] === "test" ? "test" : "practice"); return; }
      if (parts[0] === "write" && PP.taskById[parts[1]]) { window.PP_WRITING.start(parts[1]); return; }
      if (parts[0] === "parents") { window.PP_PARENTS.open(parts[1]); return; }
      if (S.sections.some(s => s.key === h) && (PP.sets.some(x => x.section === h) || (h === "writing" && PP.tasks.length))) { openSection(h); return; }
      show("home");
    } finally { routing = false; }
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
      if (g === "home") goHome();
      else if (g === "parents") { if (canLeave()) window.PP_PARENTS.open(); }
    }));
    el("hero-start").addEventListener("click", () => openSection("reading"));
    el("hero-parents").addEventListener("click", () => window.PP_PARENTS.open());
    el("band-parents").addEventListener("click", () => window.PP_PARENTS.open());
    el("player-back").addEventListener("click", back);
    el("write-back") && el("write-back").addEventListener("click", back);
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
    loadSets().then(() => { buildHome(); route(); lastHash = location.hash; });
  }

  /* The activity's Back button returns to wherever it was opened from:
     the section list, or the parent guide. */
  let returnTo = null;
  function rememberReturn() {
    returnTo = current === "parents" ? { kind: "parents", tab: window.PP_PARENTS.tab() } :
               current === "section" ? { kind: "section", key: sectionKey } : returnTo;
  }
  function back() {
    if (!canLeave()) return;
    if (current === "player") window.PP_PLAYER.abandon();
    const r = returnTo;
    if (r && r.kind === "parents") { window.PP_PARENTS.open(r.tab); return; }
    const key = (r && r.kind === "section") ? r.key :
      (current === "write" ? "writing" : (window.PP_PLAYER.state().section || sectionKey));
    openSection(key);
  }
  function track() { lastHash = location.hash; }

  window.PP_APP = { show, openSection, goHome, setHash, canLeave, rememberReturn, back, track, current: () => current };
  document.addEventListener("DOMContentLoaded", init);
})();

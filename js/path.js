/* Parent learning path. Its bookmark/checklist never changes lesson scores or drafts. */
(function () {
  "use strict";
  const { make, clear, el } = PP;
  const KEY = "pp.path.v1";
  const own = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
  const isObject = o => !!o && typeof o === "object" && !Array.isArray(o);
  let state = { mode: null, introduced: false, bookmark: null, finished: {}, habits: {} };
  let storageOK = true;
  let raw = null;
  try { raw = localStorage.getItem(KEY); } catch (e) { storageOK = false; }
  try {
    const v = JSON.parse(raw);
    if (isObject(v)) {
      state.mode = v.mode === "path" || v.mode === "browse" ? v.mode : null;
      state.introduced = v.introduced === true;
      state.bookmark = isObject(v.bookmark) && typeof v.bookmark.key === "string" ? v.bookmark : null;
      for (const field of ["finished", "habits"]) if (isObject(v[field]))
        Object.keys(v[field]).forEach(k => { if (v[field][k] === true && k !== "__proto__") state[field][k] = true; });
    }
  } catch (e) { /* Malformed JSON is empty state, not a storage failure. */ }
  try {
    // A read can succeed even when writes are blocked (quota/private browsing).
    localStorage.setItem("pp.path.storage-check", "1");
    localStorage.removeItem("pp.path.storage-check");
  } catch (e) { storageOK = false; }
  function storageNotice() {
    document.querySelectorAll(".path-storage").forEach(p => {
      p.textContent = storageOK ? "" : "Saving is unavailable. Your learning choice and path checklist will last only for this visit. Keep a note of your next lesson.";
    });
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { storageOK = false; }
    storageNotice();
  }
  function phases() {
    return (window.PP_PATH_PHASES || []).map(p => Object.assign({}, p, {
      groups: p.groups.map(ref => {
        const c = (window.PP_CATALOG || []).find(c => c.id === ref.category);
        const g = c && c.groups.find(g => g.name === ref.name);
        return { name: ref.name, skills: (ref.skills || (g ? g.skills : [])).filter(k => valid(k) && !(ref.exclude || []).includes(k)) };
      })
    }));
  }
  function valid(k) { return k.startsWith("task:") ? !!PP.taskById[k.slice(5)] : !!PP.lessons[k]; }
  function entries() { return phases().flatMap(p => p.groups.flatMap(g => g.skills)); }
  function title(k) { return k.startsWith("task:") ? PP.taskById[k.slice(5)].title : PP.lessons[k].title; }
  function done(k) { return own(state.finished, k) && state.finished[k] === true; }
  function current() {
    const all = entries();
    if (state.bookmark && all.includes(state.bookmark.key) && !done(state.bookmark.key)) return state.bookmark.key;
    return all.find(k => !done(k)) || null;
  }
  function stepFor(k) {
    const steps = ["teach", "learn", "practice", "try", "test"];
    return state.bookmark && state.bookmark.key === k && steps.includes(state.bookmark.step) ? state.bookmark.step : "teach";
  }
  function track(hash) {
    if (state.mode !== "path") return;
    const parts = hash.split("/");
    let key;
    try { key = decodeURIComponent(parts[1] || ""); } catch (e) { return; }
    if (parts[0] === "#write") key = "task:" + key;
    if ((parts[0] === "#skill" || parts[0] === "#write") && valid(key)) {
      state.bookmark = { key, step: parts[2] || "teach" }; save();
    }
  }
  function openActivity(k) {
    if (!valid(k) || !window.PP_APP.canLeave()) return;
    state.mode = "path"; state.introduced = true;
    const step = stepFor(k);
    state.bookmark = { key: k, step }; save();
    if (k.startsWith("task:")) window.PP_WRITING.start(k.slice(5));
    else window.PP_SKILLS.open(k, step);
  }
  function button(label, action, cls) {
    const b = make("button", "btn " + (cls || "btn-soft"), label);
    b.type = "button"; b.addEventListener("click", action); return b;
  }
  function showChoice() {
    window.PP_APP.show("choose");
    el("choose-path").textContent = state.introduced ? "Continue My Path" : "Follow the Learning Path";
    storageNotice();
    el("choose-title").focus();
  }
  function choose() {
    if (!window.PP_APP.canLeave()) return;
    window.PP_APP.setHash("#choose"); showChoice();
  }
  function browse() {
    if (!window.PP_APP.canLeave()) return;
    state.mode = "browse"; save();
    window.PP_APP.setHash("#browse"); window.PP_APP.landBrowse();
  }
  function open() {
    if (!window.PP_APP.canLeave()) return;
    if (state.introduced) { state.mode = "path"; save(); }
    window.PP_APP.setHash("#path");
    window.PP_APP.show("path");
    el("path-intro").hidden = state.introduced;
    render(); storageNotice(); el("path-title").focus();
  }
  function start() {
    state.mode = "path"; state.introduced = true; save(); open();
    el("path-next") ? el("path-next").focus() : el("path-title").focus();
  }
  function completionControl(k, label, bag, id, onChange) {
    const lab = make("label", "path-check");
    const input = make("input"); input.type = "checkbox"; input.id = id; input.dataset.pathCode = k;
    input.checked = own(state[bag], k) && state[bag][k] === true;
    input.setAttribute("aria-label", label);
    lab.appendChild(input); lab.appendChild(make("span", "", bag === "finished" ? "Activities finished" : "Tried together"));
    input.addEventListener("change", () => {
      if (input.checked) state[bag][k] = true; else delete state[bag][k];
      save(); onChange();
    });
    return lab;
  }
  function resultLabel(k) {
    if (k.startsWith("task:")) return "Writing: a grown-up uses the scoring guide.";
    const L = PP.lessons[k];
    if (!(L.test || []).length) return "A grown-up observes this skill; no automatic test score.";
    const s = window.PP_SKILLS.status(k);
    return s === "mastered" ? "Skill check: passed. Revisit in new work later." : s === "new" ? "Skill check: not attempted yet." : "See this lesson for its practice and check results.";
  }
  function render() {
    const host = el("path-content"); clear(host);
    const all = entries(), k = current();
    const summary = make("p", "path-progress"); summary.id = "path-progress"; summary.setAttribute("role", "status");
    const updateCounts = () => {
      const finished = all.filter(done).length;
      const observed = Object.keys(window.PP_HABITS || {}).filter(c => own(state.habits, c) && state.habits[c] === true).length;
      summary.textContent = finished + " of " + all.length + " activities marked finished · " + observed + " of " + Object.keys(window.PP_HABITS || {}).length + " everyday routines tried with a grown-up. These are activity records, not mastery scores.";
    };
    const next = make("article", "path-card path-next-card"); next.id = "path-current";
    host.appendChild(summary); host.appendChild(next);
    function updateNext() {
      clear(next); const key = current();
      next.appendChild(make("p", "path-eyebrow", key ? "Your next lesson" : "Your activities are marked finished"));
      if (key) {
        next.appendChild(make("h2", "", title(key)));
        next.appendChild(make("p", "", "Begin with the teaching and examples, practice together, then try independently. Your place in the lesson is bookmarked."));
        const b = button("Begin / Continue Lesson", () => openActivity(key), "btn-primary"); b.id = "path-next"; next.appendChild(b);
      } else {
        next.appendChild(make("h2", "", "Keep reading, writing, and revisiting skills"));
        next.appendChild(make("p", "", "Review check results and any everyday routines still to try. Finishing activities does not establish mastery of every standard."));
      }
    }
    updateNext(); updateCounts();
    const parallel = make("aside", "path-alongside");
    parallel.appendChild(make("h2", "", "Alongside your lessons — start this week"));
    parallel.appendChild(make("p", "", "Read aloud, work on words, practice handwriting, and talk about books together. These routines continue throughout the path."));
    const acts = make("div", "path-actions");
    acts.appendChild(button("Reading and handwriting", () => expand("P")));
    acts.appendChild(button("Everyday parent activities", () => expand("habits")));
    parallel.appendChild(acts); host.appendChild(parallel);
    host.appendChild(make("h2", "path-section-title", "Your full path"));
    host.appendChild(make("p", "note", "Open any phase or lesson. Mark activities finished after working through them; uncheck to revisit. Check scores and parent observations remain separate."));
    const ps = phases();
    ps.forEach(p => {
      const keys = p.groups.flatMap(g => g.skills);
      const det = make("details", "path-phase"); det.id = "path-phase-" + p.id;
      det.open = keys.includes(k) || (!state.introduced && p.id === "1");
      const sum = make("summary");
      const prefix = p.parallel ? "Alongside: " : "Phase " + p.id + ": ";
      const refresh = () => { sum.textContent = prefix + p.title + " · " + keys.filter(done).length + "/" + keys.length + " finished"; };
      refresh(); det.appendChild(sum);
      if (p.id === "G") det.appendChild(make("p", "note", "These are Grade 3 Introduce/Continue skills. Practice them during the year; end-of-grade mastery is not required. They are not on Grade 3 Milestones."));
      p.groups.forEach(g => {
        const group = make("details", "path-lesson-group");
        group.open = g.skills.includes(k);
        group.appendChild(make("summary", "", g.name + " · " + g.skills.length + (g.skills.length === 1 ? " activity" : " activities")));
        const ol = make("ol", "path-lessons");
        g.skills.forEach(key => {
          const li = make("li", "path-lesson");
          const b = button(title(key), () => openActivity(key)); b.dataset.pathKey = key;
          if (key === k) b.setAttribute("aria-current", "step");
          li.appendChild(b);
          li.appendChild(make("p", "note", resultLabel(key)));
          const id = "path-finished-" + all.indexOf(key);
          li.appendChild(completionControl(key, "Activities finished: " + title(key), "finished", id, () => {
            refresh(); updateCounts(); updateNext();
            host.querySelectorAll("[data-path-key]").forEach(b => {
              if (b.dataset.pathKey === current()) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
            });
          }));
          ol.appendChild(li);
        });
        group.appendChild(ol); det.appendChild(group);
      });
      host.appendChild(det);
    });
    const habits = make("details", "path-phase"); habits.id = "path-phase-habits";
    habits.appendChild(make("summary", "", "Everyday activities with a grown-up — begin in week one"));
    habits.appendChild(make("p", "note", "Choose a few routines at a time. Keep practicing throughout the path. Mark that you tried the routine together; this does not certify independent performance."));
    const groups = new Map();
    (window.PP_STANDARDS || []).filter(s => s.tested === "embedded").forEach(s => {
      if (!groups.has(s.group)) groups.set(s.group, []); groups.get(s.group).push(s);
    });
    let n = 0;
    groups.forEach((standards, group) => {
      const det = make("details", "path-habit-group"); det.appendChild(make("summary", "", group.replace(/^\S+\s+/, "")));
      standards.forEach(s => {
        const h = (window.PP_HABITS || {})[s.code]; if (!h) return;
        const card = make("article", "path-habit");
        card.appendChild(make("h3", "", h.title)); card.appendChild(make("p", "", h.looks));
        const ul = make("ul"); h.tryit.forEach(t => ul.appendChild(make("li", "", t))); card.appendChild(ul);
        card.appendChild(make("p", "", "Ask: " + h.ask));
        card.appendChild(completionControl(s.code, "Tried together: " + h.title, "habits", "path-habit-" + n++, updateCounts));
        det.appendChild(card);
      });
      habits.appendChild(det);
    });
    host.appendChild(habits);
    host.appendChild(button("Choose Individual Lessons", browse));
    function expand(id) {
      const d = el("path-phase-" + id); d.open = true;
      const s = d.querySelector("summary"); s.focus(); s.scrollIntoView({ block: "start" });
    }
  }
  function init() {
    el("choose-path").addEventListener("click", open);
    el("choose-browse").addEventListener("click", browse);
    el("path-start").addEventListener("click", start);
    el("path-preview").addEventListener("click", () => {
      const d = el("path-phase-1"); d.open = true; d.querySelector("summary").focus(); d.scrollIntoView({ block: "start" });
    });
    storageNotice();
  }
  window.PP_PATH = { init, open, choose, showChoice, browse, track, mode: () => state.mode, entries, phases };
})();

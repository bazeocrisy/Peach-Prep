/* Peach Prep — skills: the home list of every Georgia standard, and the
   skill page with four steps: Teach, Learn, Practice, Test.

   Lessons are registered by js/data/lessons/*.js with PP.addLesson({...}).
   Each lesson's practice and test questions become two ordinary sets
   (ids "SK:<code>:p" and "SK:<code>:t") that the normal player runs, so
   every question format, the Help me ladder and Show me how work the same.

   Progress is saved on this device only (localStorage, guarded): which steps
   are done and the best test score. Mastered = at least 80% of the test's
   points. Nothing leaves the device. */
(function () {
  "use strict";
  const { make, clear, el } = PP;
  const STD = window.PP_STANDARDS || [];
  const byCode = {}; STD.forEach(s => { byCode[s.code] = s; });

  /* ---------- lessons ---------- */
  const lessons = {};
  function addLesson(L) {
    if (!L || !L.code || lessons[L.code]) return;
    lessons[L.code] = L;
    const mk = (k, list) => {
      const set = {
        id: "SK:" + L.code + ":" + k, section: "skill", kind: "skill", code: L.code,
        pair: "SK:" + L.code + ":" + (k === "p" ? "t" : "p"),
        title: L.title + (k === "p" ? " · Practice" : " · Test"),
        passages: L.passages || [],
        items: (list || []).map(it => Object.assign({ std: [L.code] }, it, { passages: it.passages || [] }))
      };
      PP.addSet(set);
    };
    if ((L.practice || []).length) mk("p", L.practice);
    if ((L.test || []).length) mk("t", L.test);
  }
  PP.addLesson = addLesson;
  PP.lessons = lessons;

  /* ---------- progress (this device only) ---------- */
  const KEY = "pp.progress.v1";
  function load() { try { return JSON.parse(window.localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  let prog = load();
  function save() { try { window.localStorage.setItem(KEY, JSON.stringify(prog)); } catch (e) { /* private mode: progress lasts this visit */ } }
  function rec(code) { prog[code] = prog[code] || {}; return prog[code]; }
  function mark(code, step) { const r = rec(code); if (!r[step]) { r[step] = true; save(); } }
  function passMark(max) { return Math.ceil(max * 0.8); }
  function recordTest(code, got, max) {
    const r = rec(code);
    r.tries = (r.tries || 0) + 1;
    if (!r.best || got / max > r.best.got / r.best.max) r.best = { got, max };
    const pass = got >= passMark(max);
    if (pass) r.mastered = true;
    save();
    return pass;
  }
  function recordPractice(code) { mark(code, "practiced"); }
  function status(code) {
    if (!lessons[code]) return habit(code) ? "habit" : "none";
    const r = prog[code] || {};
    if (r.mastered) return "mastered";
    if (r.taught || r.learned || r.practiced || r.tries) return "started";
    return "new";
  }
  function resetProgress() { prog = {}; save(); }

  /* ---------- labels ---------- */
  const TESTED = {
    reading: ["On the test", "On the Milestones: Reading questions"],
    writing: ["On the test", "On the Milestones: Writing and revising questions"],
    both: ["On the test", "On the Milestones: Reading and Writing questions"],
    classroom: ["Classroom skill", "Taught and checked in class. Not on the Milestones."],
    no: ["Not on the test", "On Georgia's grade 3 grammar chart as a skill being introduced. Not on the Milestones yet."],
    embedded: ["Everyday habit", "A reading and writing habit used in every skill. Not tested on its own."]
  };
  const onTest = s => ["reading", "writing", "both"].indexOf(s.tested) >= 0;
  const groupName = g => String(g || "").replace(/\s*\(K-12 GUM chart, grade 3 rows\)/, " (grammar chart)");
  function codeLabel(s) { return s.gum ? "3-5.L.GC.1 · " + (s.level === "M" ? "Master" : s.level === "R" ? "Reinforce" : s.level === "I" ? "Introduce" : "Continue") : s.display; }
  const habit = code => (window.PP_HABITS || {})[code];
  function titleOf(s) { const L = lessons[s.code], H = habit(s.code); return L ? L.title : H ? H.title : (s.gum ? cap(s.gum) : s.plain); }
  function cap(t) { t = String(t || ""); return t.charAt(0).toUpperCase() + t.slice(1); }
  const STATUS = { mastered: "Mastered", started: "Started", "new": "Not started", none: "Lesson coming", habit: "Tips for home" };

  /* ---------- home list ---------- */
  const STRANDS = [
    { key: "Texts", name: "Reading and writing", line: "Stories, informational texts, opinion pieces, poems and research." },
    { key: "Language", name: "Language", line: "Grammar, sentences and vocabulary." },
    { key: "Foundations", name: "Foundations", line: "Phonics, fluency and cursive. Taught in class, not on the Milestones." },
    { key: "Practices", name: "Everyday habits", line: "Georgia's K-12 practices: habits good readers and writers use in every skill." }
  ];
  let filter = "all", query = "", lastCode = null;

  function buildList() {
    const host = el("skill-list"); clear(host);
    const q = query.trim().toLowerCase();
    let shown = 0;
    STRANDS.forEach(st => {
      const recs = STD.filter(s => s.strand === st.key);
      if (!recs.length) return;
      const groups = [];
      recs.forEach(s => { let g = groups.find(x => x.name === s.group); if (!g) { g = { name: s.group, recs: [] }; groups.push(g); } g.recs.push(s); });
      const block = make("section", "strand strand-" + st.key.toLowerCase());
      const head = make("div", "strand-head");
      head.appendChild(make("h2", "strand-title", st.name));
      head.appendChild(make("p", "strand-line", st.line));
      block.appendChild(head);
      let any = 0;
      groups.forEach(g => {
        const rows = g.recs.filter(s => {
          if (filter === "test" && !onTest(s)) return false;
          if (filter === "todo" && status(s.code) === "mastered") return false;
          if (!q) return true;
          return [s.code, s.display, s.plain, s.text, s.gum || "", titleOf(s)].join(" ").toLowerCase().indexOf(q) >= 0;
        });
        if (!rows.length) return;
        const grp = make("div", "skill-group");
        grp.appendChild(make("h3", "group-title", groupName(g.name)));
        const ul = make("ul", "skill-rows-list");
        rows.forEach(s => {
          const li = make("li");
          const b = make("button", "skill-row-btn is-" + status(s.code));
          b.type = "button"; b.dataset.code = s.code;
          const top = make("span", "srow-top");
          top.appendChild(make("span", "srow-code", codeLabel(s)));
          const tag = make("span", "srow-tag tag-" + (onTest(s) ? "test" : s.tested), TESTED[s.tested] ? TESTED[s.tested][0] : "");
          top.appendChild(tag);
          b.appendChild(top);
          b.appendChild(make("span", "srow-title", titleOf(s)));
          if (titleOf(s) !== s.plain) b.appendChild(make("span", "srow-plain", s.plain));
          const stat = status(s.code);
          const sp = make("span", "srow-status st-" + stat);
          sp.appendChild(make("span", "st-mark", stat === "mastered" ? "✓" : stat === "started" ? "◐" : stat === "new" ? "○" : stat === "habit" ? "★" : "…"));
          sp.appendChild(document.createTextNode(" " + STATUS[stat]));
          b.appendChild(sp);
          b.setAttribute("aria-label", codeLabel(s) + ". " + titleOf(s) + ". " + STATUS[stat] + ".");
          b.addEventListener("click", () => open(s.code));
          li.appendChild(b); ul.appendChild(li);
          any++; shown++;
        });
        grp.appendChild(ul);
        block.appendChild(grp);
      });
      if (!any) return;
      if (st.key === "Practices") {
        const d = make("details", "habits");
        if (q || filter !== "all") d.open = true;
        const sum = make("summary", "habits-sum", "Show the " + recs.length + " everyday habits");
        d.appendChild(sum);
        Array.from(block.children).slice(1).forEach(c => d.appendChild(c));
        block.appendChild(d);
      }
      host.appendChild(block);
    });
    el("skill-empty").hidden = shown > 0;
    buildProgress();
  }

  function buildProgress() {
    const host = el("home-progress"); clear(host);
    const tested = STD.filter(onTest);
    const ready = tested.filter(s => lessons[s.code]).length;
    const done = tested.filter(s => status(s.code) === "mastered").length;
    const p = make("p", "prog-line");
    p.appendChild(make("strong", "", done + " of " + tested.length));
    p.appendChild(document.createTextNode(" skills on the test mastered on this device."));
    host.appendChild(p);
    const bar = make("span", "prog-bar"); const fill = make("span", "prog-fill");
    fill.style.width = (tested.length ? Math.round(100 * done / tested.length) : 0) + "%";
    bar.appendChild(fill); host.appendChild(bar);
    if (ready < tested.length) host.appendChild(make("p", "prog-note", ready + " of " + tested.length + " test skills have full lessons so far. More are added every week."));
  }

  /* ---------- the skill page ---------- */
  const STEPS = [["teach", "Teach"], ["learn", "Learn"], ["practice", "Practice"], ["test", "Test"]];
  let cur = null, step = "teach";

  function open(code, which, opts) {
    const s = byCode[code];
    if (!s) return false;
    if (!window.PP_APP.canLeave()) return false;
    cur = code; lastCode = code;
    const L = lessons[code];
    step = L && STEPS.some(x => x[0] === which) ? which : "teach";
    el("sk-code").textContent = codeLabel(s);
    el("sk-title").textContent = titleOf(s);
    el("sk-plain").textContent = s.plain;
    el("sk-plain").hidden = titleOf(s) === s.plain;
    const tags = el("sk-tags"); clear(tags);
    const t = TESTED[s.tested] || ["", ""];
    tags.appendChild(make("span", "srow-tag tag-" + (onTest(s) ? "test" : s.tested), t[0]));
    tags.appendChild(make("span", "sk-tagline", t[1]));
    const off = el("sk-official"); clear(off);
    off.appendChild(make("summary", "", "Georgia's wording" + (onTest(s) ? " and what Proficient looks like" : "")));
    off.appendChild(make("p", "sk-off-text", "“" + s.text + "”"));
    off.appendChild(make("p", "note", "Georgia's K-12 English Language Arts Standards, grades 3-5" + (s.gum ? ", Grammar, Usage and Mechanics chart (grade 3 row: " + ({ M: "Master", R: "Reinforce", I: "Introduce", C: "Continue" })[s.level] + ")" : "") + ". Code " + s.display + "."));
    const m = /^(3\.[TL]\.[A-Z]+\.\d)/.exec(code);
    const ald = m && onTest(s) && window.PP_ALDS && window.PP_ALDS.standards[m[1]];
    if (ald && ald.Proficient && ald.Proficient.length) {
      off.appendChild(make("p", "fg-label", "What Proficient work looks like (GaDOE Achievement Level Descriptors, for all of " + m[1] + ")"));
      const ul = make("ul", "plist ald");
      ald.Proficient.forEach(t => ul.appendChild(make("li", "", t)));
      off.appendChild(ul);
    }
    el("sk-steps").hidden = !L;
    render();
    if (!(opts && opts.keepScroll)) window.scrollTo(0, 0);
    window.PP_APP.show("skill");
    setHashFor();
    window.PP_APP.track();
    el("sk-title").focus();
    return true;
  }
  function setHashFor(replace) { window.PP_APP.setHash("#skill/" + encodeURIComponent(cur) + (step !== "teach" ? "/" + step : ""), replace); }

  function go(which) {
    step = which;
    render();
    setHashFor(true);
    window.PP_APP.track();
    const tab = el("sk-steps").querySelector('[data-step="' + which + '"]');
    el("sk-panel").focus();
    if (tab) tab.scrollIntoView({ block: "nearest" });
  }

  function renderSteps() {
    const host = el("sk-steps"); clear(host);
    const r = prog[cur] || {};
    const done = { teach: r.taught, learn: r.learned, practice: r.practiced, test: r.mastered };
    STEPS.forEach(([k, name], i) => {
      const b = make("button", "step-btn" + (done[k] ? " is-done" : ""));
      b.type = "button"; b.dataset.step = k;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", k === step ? "true" : "false");
      b.appendChild(make("span", "step-n", done[k] ? "✓" : String(i + 1)));
      b.appendChild(make("span", "step-name", name));
      if (done[k]) b.setAttribute("aria-label", name + ", done");
      b.addEventListener("click", () => go(k));
      host.appendChild(b);
    });
  }

  function render() {
    const L = lessons[cur], s = byCode[cur];
    const host = el("sk-panel"); clear(host);
    if (!L) { renderPending(host, s); return; }
    renderSteps();
    ({ teach: renderTeach, learn: renderLearn, practice: renderPractice, test: renderTest })[step](host, L, s);
    if (L.parent) {
      const box = make("aside", "for-grownups");
      box.appendChild(make("p", "fg-label", "For grown-ups"));
      box.appendChild(make("p", "", L.parent));
      host.appendChild(box);
    }
  }

  function nextBtn(label, to) {
    const b = make("button", "btn btn-primary step-next", label);
    b.type = "button"; b.addEventListener("click", () => go(to));
    return b;
  }
  /* "Cursive: text" is shown in a US school cursive font (3.F.H.3). */
  function lines(host, list, cls) {
    (Array.isArray(list) ? list : [list]).forEach(t => {
      const c = /^Cursive: /.test(t);
      host.appendChild(make("p", (cls || "") + (c ? " cursive" : ""), c ? t.replace(/^Cursive: /, "") : t));
    });
  }
  PP.cursiveLines = lines;

  function renderTeach(host, L) {
    const T = L.teach || {};
    const card = make("div", "teach-card");
    card.appendChild(make("h2", "panel-h", "Teach: the big idea"));
    if (T.big) card.appendChild(make("p", "big-idea", T.big));
    if ((T.points || []).length) {
      const ul = make("ul", "teach-points");
      T.points.forEach(p => ul.appendChild(make("li", "", p)));
      card.appendChild(ul);
    }
    if (T.words && T.words.length) {
      const dl = make("dl", "teach-words");
      T.words.forEach(w => { dl.appendChild(make("dt", "", w.term)); dl.appendChild(make("dd", "", w.means)); });
      card.appendChild(dl);
    }
    (T.examples || (T.example ? [T.example] : [])).forEach(ex => {
      const box = make("div", "teach-example");
      box.appendChild(make("p", "ex-label", ex.label || "Example"));
      const body = make("div", "ex-body"); lines(body, ex.lines); box.appendChild(body);
      if (ex.note) box.appendChild(make("p", "ex-note", ex.note));
      card.appendChild(box);
    });
    if (T.tip) { const tip = make("p", "teach-tip"); tip.appendChild(make("strong", "", "Test tip: ")); tip.appendChild(document.createTextNode(T.tip)); card.appendChild(tip); }
    host.appendChild(card);
    mark(cur, "taught");
    renderSteps();
    host.appendChild(nextBtn("Next: Learn with examples", "learn"));
  }

  function renderLearn(host, L) {
    host.appendChild(make("h2", "panel-h", "Learn: let's do it together"));
    host.appendChild(make("p", "panel-sub", "Read each example. Think about the answer, then tap Show the next step to see how to work it out."));
    const exs = L.learn || [];
    let finished = 0;
    exs.forEach((ex, i) => {
      const card = make("div", "learn-card");
      card.appendChild(make("p", "ex-label", "Example " + (i + 1) + " of " + exs.length));
      if (ex.show && ex.show.length) { const b = make("div", "ex-body"); lines(b, ex.show); card.appendChild(b); }
      card.appendChild(make("p", "learn-ask", ex.ask));
      const ol = make("ol", "learn-steps");
      ol.setAttribute("aria-live", "polite");
      card.appendChild(ol);
      const ans = make("p", "learn-answer");
      ans.appendChild(make("strong", "", "Answer: "));
      ans.appendChild(document.createTextNode(ex.answer));
      ans.hidden = true;
      card.appendChild(ans);
      const b = make("button", "btn btn-help learn-next", "Show the next step");
      b.type = "button";
      let k = 0;
      b.addEventListener("click", () => {
        if (k < ex.steps.length) { ol.appendChild(make("li", "", ex.steps[k])); k++; }
        if (k >= ex.steps.length) {
          ans.hidden = false; b.hidden = true;
          finished++;
          if (finished >= exs.length) { mark(cur, "learned"); renderSteps(); }
          ans.setAttribute("tabindex", "-1"); ans.focus();
        } else b.textContent = "Show the next step (" + (k + 1) + " of " + ex.steps.length + ")";
      });
      card.appendChild(b);
      host.appendChild(card);
    });
    host.appendChild(nextBtn("Next: Practice", "practice"));
  }

  function renderPractice(host, L) {
    const set = PP.byId["SK:" + L.code + ":p"];
    host.appendChild(make("h2", "panel-h", "Practice: you try, with help"));
    const card = make("div", "go-card");
    if (set) {
      card.appendChild(make("p", "", set.items.length + " questions. Press Help me any time for a hint, one step at a time. Practice is never scored."));
      if ((prog[cur] || {}).practiced) card.appendChild(make("p", "go-done", "✓ You finished this practice. You can do it again any time."));
      const b = make("button", "btn btn-primary", (prog[cur] || {}).practiced ? "Practice again" : "Start practice");
      b.type = "button"; b.id = "sk-start-practice";
      b.addEventListener("click", () => window.PP_PLAYER.start(set.id, "practice"));
      card.appendChild(b);
    }
    if (set || !L.activity) host.appendChild(card);
    if (L.activity) renderActivity(host, L);
    if (L.write) renderWrite(host, L);
    host.appendChild(nextBtn("Next: Test", "test"));
  }

  /* A short writing activity (writing standards). The draft is kept on this
     device. A grown-up reads it with the checklist; nothing is scored. */
  function renderWrite(host, L) {
    const W = L.write;
    const k = "pp.skwrite." + L.code;
    let saved = {};
    try { saved = JSON.parse(window.localStorage.getItem(k)) || {}; } catch (e) { saved = {}; }
    const store = () => { try { window.localStorage.setItem(k, JSON.stringify(saved)); } catch (e) { /* ok */ } };
    const card = make("div", "write-card");
    card.appendChild(make("h3", "write-h", "Your turn to write"));
    lines(card, W.prompt, "write-prompt");
    const id = "skw-" + L.code.replace(/[^a-z0-9]/gi, "-");
    const lab = make("label", "sr", "Your writing"); lab.htmlFor = id; card.appendChild(lab);
    const ta = make("textarea", "write-box"); ta.id = id; ta.rows = W.rows || 6; ta.value = saved.text || "";
    ta.addEventListener("input", () => { saved.text = ta.value; store(); });
    card.appendChild(ta);
    if ((W.checklist || []).length) {
      card.appendChild(make("p", "write-check-h", "Check your writing. Did I…"));
      const ul = make("ul", "write-checklist");
      saved.checks = saved.checks || [];
      W.checklist.forEach((c, i) => {
        const li = make("li");
        const cb = make("input"); cb.type = "checkbox"; cb.id = id + "-c" + i; cb.checked = !!saved.checks[i];
        cb.addEventListener("change", () => { saved.checks[i] = cb.checked; store(); });
        const lb = make("label", "", c); lb.htmlFor = cb.id;
        li.appendChild(cb); li.appendChild(lb); ul.appendChild(li);
      });
      card.appendChild(ul);
    }
    card.appendChild(make("p", "note", "Your writing stays on this device. Read it with a grown-up and use the checklist together."));
    host.appendChild(card);
  }

  function renderTest(host, L) {
    const set = PP.byId["SK:" + L.code + ":t"];
    host.appendChild(make("h2", "panel-h", set ? "Test: show what you know" : "Check: show a grown-up"));
    const card = make("div", "go-card");
    if (set) {
      const max = set.items.reduce((a, it) => a + it.points, 0);
      const r = prog[cur] || {};
      card.appendChild(make("p", "", set.items.length + " questions, " + max + " points, no hints, like the real test. Score " + passMark(max) + " or more to master this skill."));
      if (r.mastered) card.appendChild(make("p", "go-done", "✓ Mastered!" + (r.best ? " Best score: " + r.best.got + " of " + r.best.max + "." : "")));
      else if (r.best) card.appendChild(make("p", "go-best", "Best score so far: " + r.best.got + " of " + r.best.max + ". Need " + passMark(max) + " to master it."));
      const b = make("button", "btn btn-primary", r.tries ? "Take the test again" : "Take the test");
      b.type = "button"; b.id = "sk-start-test";
      b.addEventListener("click", () => window.PP_PLAYER.start(set.id, "test"));
      card.appendChild(b);
      host.appendChild(card);
    } else if (L.check) renderCheck(host, L);
    const back = make("button", "btn btn-soft step-next", "Back to all skills");
    back.type = "button"; back.addEventListener("click", () => window.PP_APP.goHome());
    host.appendChild(back);
  }

  /* No lesson yet: say so plainly, and point to practice that already exists. */
  function renderPending(host, s) {
    const card = make("div", "teach-card");
    const H = habit(s.code);
    if (s.tested === "embedded") {
      card.appendChild(make("h2", "panel-h", "An everyday habit"));
      card.appendChild(make("p", "", "This is one of Georgia's K-12 practices. It is not a separate test skill. Good readers and writers use it inside every skill on this site."));
      if (H) {
        card.appendChild(make("p", "big-idea", H.looks));
        card.appendChild(make("p", "write-check-h", "Try it at home"));
        const ul = make("ul", "teach-points");
        (H.tryit || []).forEach(t => ul.appendChild(make("li", "", t)));
        card.appendChild(ul);
        if (H.ask) { const q = make("p", "teach-tip"); q.appendChild(make("strong", "", "Ask: ")); q.appendChild(document.createTextNode(H.ask)); card.appendChild(q); }
      }
    } else {
      card.appendChild(make("h2", "panel-h", "Lesson coming"));
      card.appendChild(make("p", "", "The Teach, Learn, Practice and Test lesson for this standard is being written and checked. It will appear here when it is ready."));
    }
    const related = PP.sets.filter(x => x.section !== "skill" && x.items.some(it => (it.std || []).indexOf(s.code) >= 0));
    if (related.length) {
      card.appendChild(make("p", "", "Practice sets with questions on this skill now:"));
      const ul = make("ul", "related-list");
      related.forEach(x => {
        const li = make("li");
        const b = make("button", "linkish", x.title);
        b.type = "button";
        b.addEventListener("click", () => window.PP_PLAYER.start(x.id, x.kind === "form" ? "test" : "practice"));
        li.appendChild(b); ul.appendChild(li);
      });
      card.appendChild(ul);
    }
    host.appendChild(card);
  }

  /* ---------- hands-on activities (skills a quiz cannot check) ---------- */
  function renderActivity(host, L) {
    const A = L.activity;
    if (A.kind === "fluency") return renderFluency(host, L, A);
    if (A.kind === "trace") return renderTrace(host, L, A);
  }

  /* Timed read-aloud. The child reads for one minute; the grown-up taps any
     word read wrong, then taps the last word read. Words correct per minute
     and accuracy are worked out on the spot and kept on this device. */
  function renderFluency(host, L, A) {
    const card = make("div", "go-card fluency");
    card.appendChild(make("h3", "write-h", "Read aloud for one minute"));
    lines(card, A.how, "");
    const pick = make("div", "seg flu-pick"); pick.setAttribute("role", "group"); pick.setAttribute("aria-label", "Choose a passage");
    card.appendChild(pick);
    const ctl = make("div", "flu-ctl");
    const clock = make("p", "flu-clock", "1:00"); clock.setAttribute("aria-live", "off");
    const startB = make("button", "btn btn-primary", "Start the minute"); startB.type = "button";
    const stopB = make("button", "btn btn-soft", "Stop early"); stopB.type = "button"; stopB.hidden = true;
    ctl.appendChild(clock); ctl.appendChild(startB); ctl.appendChild(stopB);
    card.appendChild(ctl);
    const say = make("p", "flu-say"); say.setAttribute("aria-live", "polite"); card.appendChild(say);
    const text = make("div", "flu-text"); card.appendChild(text);
    const out = make("div", "flu-out"); out.setAttribute("aria-live", "polite"); card.appendChild(out);
    host.appendChild(card);

    let which = 0, phase = "ready", t0 = 0, timer = null, secs = 60, words = [], miss = new Set();
    function load(i) {
      which = i; phase = "ready"; miss = new Set(); clearInterval(timer);
      Array.from(pick.children).forEach((b, k) => b.setAttribute("aria-pressed", k === i ? "true" : "false"));
      clear(text); clear(out);
      const P = A.passages[i];
      text.appendChild(make("p", "flu-title", P.title));
      words = [];
      P.text.split(/\s+/).forEach((w, k) => {
        const b = make("button", "flu-w", w); b.type = "button"; b.dataset.k = k;
        b.addEventListener("click", () => tap(k, b));
        words.push(b); text.appendChild(b); text.appendChild(document.createTextNode(" "));
      });
      clock.textContent = "1:00"; startB.hidden = false; stopB.hidden = true;
      startB.textContent = "Start the minute";
      say.textContent = "When the reader is ready, press Start and they begin reading out loud.";
    }
    A.passages.forEach((P, i) => {
      const b = make("button", "", "Passage " + (i + 1)); b.type = "button";
      b.addEventListener("click", () => load(i)); pick.appendChild(b);
    });
    function tap(k, b) {
      if (phase === "reading") { if (miss.has(k)) miss.delete(k); else miss.add(k); b.classList.toggle("is-miss", miss.has(k)); return; }
      if (phase === "last") finish(k);
    }
    function tick() {
      const left = Math.max(0, 60 - Math.floor((Date.now() - t0) / 1000));
      clock.textContent = "0:" + String(left).padStart(2, "0");
      if (left <= 0) stop();
    }
    startB.addEventListener("click", () => {
      if (phase !== "ready") { load(which); return; }
      phase = "reading"; t0 = Date.now(); secs = 60;
      timer = setInterval(tick, 250);
      startB.hidden = true; stopB.hidden = false;
      say.textContent = "Reading. Grown-up: tap any word that is skipped or read wrong. Tap it again to undo.";
    });
    stopB.addEventListener("click", stop);
    function stop() {
      if (phase !== "reading") return;
      clearInterval(timer);
      secs = Math.max(10, Math.min(60, Math.round((Date.now() - t0) / 1000)));
      phase = "last"; stopB.hidden = true;
      clock.textContent = "Time!";
      say.textContent = "Grown-up: now tap the last word the reader read.";
      text.classList.add("pick-last");
      const first = words[0]; if (first) first.focus();
    }
    function finish(k) {
      if (secs < 30) {
        phase = "ready"; text.classList.remove("pick-last"); clear(out);
        out.appendChild(make("p", "go-best", "That reading was shorter than 30 seconds, so it is too short to measure. Press Read again and read for the full minute."));
        startB.hidden = false; startB.textContent = "Read again"; return;
      }
      phase = "done"; text.classList.remove("pick-last");
      words.forEach((b, i) => b.classList.toggle("is-past", i > k));
      const read = k + 1;
      const errs = Array.from(miss).filter(i => i <= k).length;
      const wcpm = Math.round((read - errs) * 60 / secs);
      const acc = read ? Math.round(100 * (read - errs) / read) : 0;
      clear(out);
      const big = make("p", "flu-result");
      big.appendChild(make("strong", "", wcpm + " words correct per minute"));
      big.appendChild(document.createTextNode(" · " + acc + "% accuracy (" + errs + " missed of " + read + ")"));
      out.appendChild(big);
      const m = new Date().getMonth();
      const season = m >= 7 && m <= 10 ? "fall" : (m === 11 || m <= 2) ? "winter" : "spring";
      const goal = A.goal[season];
      out.appendChild(make("p", "", "A typical third grader in the " + season + " reads about " + goal +
        " words correct per minute (" + A.goalSource + "). " + (wcpm >= goal ? "Right on track or better!" : wcpm >= goal - 10 ? "Close to typical. Keep practicing." : "Rereading the same passage a few times a week builds speed. Try it again tomorrow.")));
      out.appendChild(make("p", "", acc >= 95 ? "Accuracy of 95% or higher means this passage is a good level for reading on your own." :
        acc >= 90 ? "Accuracy of 90-94%: a good level for reading with a grown-up nearby." : "Accuracy under 90% means this passage is hard right now. Read it together first, then try again."));
      const r = rec(cur); r.fluency = r.fluency || [];
      r.fluency.push({ d: new Date().toISOString().slice(0, 10), wcpm, acc, p: which + 1 });
      r.fluency = r.fluency.slice(-12); save();
      mark(cur, "practiced"); renderSteps();
      const hist = r.fluency.slice(-5).map(x => x.d + ": " + x.wcpm + " wcpm, " + x.acc + "%").join(" · ");
      out.appendChild(make("p", "note", "Recent readings on this device: " + hist));
      startB.hidden = false; startB.textContent = "Read again";
    }
    load(0);
  }

  /* Cursive tracing sheet: grey letters on handwriting guide lines, printable. */
  function renderTrace(host, L, A) {
    const card = make("div", "go-card trace");
    card.appendChild(make("h3", "write-h", A.title || "Trace and write"));
    lines(card, A.how, "");
    const sheet = make("div", "trace-sheet");
    sheet.appendChild(make("p", "trace-name", "Name: ______________________   Date: __________"));
    A.rows.forEach(r => {
      sheet.appendChild(make("p", "trace-row", r));
      sheet.appendChild(make("div", "trace-lines"));
    });
    card.appendChild(sheet);
    const pb = make("button", "btn btn-primary", "Print this practice sheet"); pb.type = "button";
    pb.addEventListener("click", () => { document.body.classList.add("print-trace"); sheet.classList.add("is-printing");
      window.print(); setTimeout(() => { document.body.classList.remove("print-trace"); sheet.classList.remove("is-printing"); }, 500); });
    card.appendChild(pb);
    const done = make("button", "btn btn-soft", "We practiced this today"); done.type = "button";
    done.addEventListener("click", () => { mark(cur, "practiced"); renderSteps(); done.disabled = true; done.textContent = "✓ Practice noted"; });
    card.appendChild(done);
    host.appendChild(card);
  }

  /* Grown-up check: for skills shown out loud or on paper. When every line is
     checked, the grown-up can mark the skill mastered. */
  function renderCheck(host, L) {
    const C = L.check;
    const card = make("div", "go-card");
    lines(card, C.intro, "");
    const r = rec(cur); r.checks = r.checks || [];
    const ul = make("ul", "write-checklist");
    const btn = make("button", "btn btn-primary", "Mark this skill mastered"); btn.type = "button";
    const sync = () => { btn.disabled = !C.items.every((x, i) => r.checks[i]) || !!r.mastered; };
    C.items.forEach((c, i) => {
      const li = make("li");
      const cb = make("input"); cb.type = "checkbox"; cb.id = "skc-" + i; cb.checked = !!r.checks[i];
      cb.addEventListener("change", () => { r.checks[i] = cb.checked; save(); sync(); });
      const lb = make("label", "", c); lb.htmlFor = cb.id;
      li.appendChild(cb); li.appendChild(lb); ul.appendChild(li);
    });
    card.appendChild(ul);
    if (r.mastered) card.appendChild(make("p", "go-done", "✓ Mastered!"));
    btn.addEventListener("click", () => { r.mastered = true; save(); render(); });
    sync();
    card.appendChild(btn);
    host.appendChild(card);
  }

  /* ---------- player hooks ---------- */
  function afterTest(set, got, max) {
    const pass = recordTest(set.code, got, max);
    return pass ? "You mastered this skill! It now shows a check mark on the skill list."
      : "To master this skill, score " + passMark(max) + " or more. Go back to Learn or Practice, then try the test again.";
  }

  function init() {
    const inp = el("skill-search");
    inp.addEventListener("input", () => { query = inp.value; buildList(); });
    document.querySelectorAll("[data-filter]").forEach(b => b.addEventListener("click", () => {
      filter = b.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      buildList();
    }));
    el("skill-back").addEventListener("click", () => window.PP_APP.goHome());
  }

  window.PP_SKILLS = {
    init, open, buildList, afterTest, recordPractice, status, resetProgress,
    current: () => cur, step: () => step, lastCode: () => lastCode,
    lessonCount: () => Object.keys(lessons).length
  };
})();

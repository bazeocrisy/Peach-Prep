/* Peach Prep — skills: the home list of every Georgia standard, and the
   skill page with five steps: Learn It, Watch Me, Practice Together, Try It Yourself, Test Your Knowledge.

   Lessons are registered by js/data/lessons/*.js with PP.addLesson({...}).
   Each lesson's practice and test questions become two ordinary sets
   (ids "SK:<code>:p" and "SK:<code>:t") that the normal player runs, so
   every question format, the Help me ladder and Show me how work the same.

   Progress is saved on this device only (localStorage, guarded): which steps
   are done and the best test score. Passed = at least ceil(80%) of the check's
   points (stored as `mastered` for compatibility). Nothing leaves the device. */
(function () {
  "use strict";
  const { make, clear, el } = PP;
  const STD = window.PP_STANDARDS || [];
  const byCode = {}; STD.forEach(s => { byCode[s.code] = s; });

  /* ---------- lessons ----------
     A lesson is keyed by L.key (default: its Georgia code). L.codes lists every
     Georgia code it targets. Its practice questions are split in two sets:
     "Practice Together" (first half, with Help me) and "Try It Yourself"
     (second half, help unlocks after a wrong try). */
  const lessons = {};
  const keyOf = L => L.key || L.code;
  const codesOf = L => L.codes || [L.code];
  function addLesson(L) {
    if (!L || !L.code || lessons[keyOf(L)]) return;
    const K = keyOf(L);
    lessons[K] = L;
    const items = l => (l || []).map(it => Object.assign({ std: [L.code] }, it, { passages: it.passages || [] }));
    const P = L.practice || [];
    const half = P.length >= 4 ? Math.ceil(P.length / 2) : P.length;
    const defs = [];
    if (P.length) defs.push(["p", "Practice Together", P.slice(0, half)]);
    if (P.length > half) defs.push(["y", "Try It Yourself", P.slice(half)]);
    if ((L.test || []).length) defs.push(["t", "Test", L.test]);
    defs.forEach(([k, label, list], i) => {
      const nx = defs[i + 1];
      PP.addSet({
        id: "SK:" + K + ":" + k, section: "skill", kind: "skill", code: K, part: k,
        next: nx ? { id: "SK:" + K + ":" + nx[0], mode: nx[0] === "t" ? "test" : nx[0] === "y" ? "try" : "practice",
                     label: nx[0] === "t" ? "Take the skill test" : "Try it yourself" } : null,
        practiceId: P.length ? "SK:" + K + ":p" : null,
        title: L.title + " · " + label,
        clueWords: L.clues && !L.clues.groups && L.clues.highlight !== false ? L.clues.words : null,
        passages: L.passages || [],
        items: items(list)
      });
    });
  }
  PP.addLesson = addLesson;
  PP.lessons = lessons;
  /* the lesson for a Georgia code: the one whose main code it is, else the first that targets it */
  function lessonFor(code) {
    if (lessons[code]) return code;
    const all = Object.keys(lessons);
    return all.find(k => lessons[k].code === code) || all.find(k => codesOf(lessons[k]).indexOf(code) >= 0) || null;
  }

  /* ---------- progress (this device only) ---------- */
  const KEY = "pp.progress.v1";
  function load() { try { return JSON.parse(window.localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  let prog = load();
  function save() { try { window.localStorage.setItem(KEY, JSON.stringify(prog)); } catch (e) { /* private mode: progress lasts this visit */ } }
  function rec(k) { prog[k] = prog[k] || {}; return prog[k]; }
  function mark(k, step) { const r = rec(k); if (!r[step]) { r[step] = true; save(); } }
  function passMark(max) { return Math.ceil(max * 0.8); }
  /* Local calendar date (not UTC, which is a day ahead on Georgia evenings). */
  const pad2 = n => String(n).padStart(2, "0");
  function today() { const d = new Date(); return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }
  function daysSince(ymd) {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(ymd || ""); if (!m) return null;
    const a = new Date(+m[1], +m[2] - 1, +m[3]), n = new Date(), b = new Date(n.getFullYear(), n.getMonth(), n.getDate());
    return Math.round((b - a) / 86400000);
  }
  function niceDate(ymd) {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(ymd || ""); if (!m) return "";
    return new Date(+m[1], +m[2] - 1, +m[3]).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }
  /* PP-003 migration (additive only). A pass saved before dates were kept is
     flagged legacyUndated, and firstSeenPassedAt notes when this version first
     saw it (not the pass date). passedAt is never invented; mastered, best and
     tries are never changed or removed. */
  (function migrate() {
    let changed = false;
    Object.keys(prog).forEach(k => {
      const r = prog[k];
      if (k.charAt(0) === "_" || !r || typeof r !== "object") return;
      if (r.mastered && !r.passedAt && !r.legacyUndated) { r.legacyUndated = true; r.firstSeenPassedAt = today(); changed = true; }
    });
    if (changed) save();
  })();
  function recordTest(k, got, max) {
    const r = rec(k);
    r.tries = (r.tries || 0) + 1;
    if (!r.best || got / max > r.best.got / r.best.max) r.best = { got, max };
    const pass = got >= passMark(max);
    if (pass) r.mastered = true;
    /* new in PP-003: a dated log of each submitted check (last 20) */
    const n = r.tries;
    const after = !!(r.answersSeenAt && n > 1);   /* the answers to these same questions were shown on an earlier try */
    r.attempts = (r.attempts || []).concat({ d: today(), got, max, ok: pass, n, afterAnswers: after }).slice(-20);
    if (pass) {
      if (!r.passedAt && !r.legacyUndated) { r.passedAt = today(); r.passTry = n; r.passBy = "test"; }
      r.lastPassAt = today();
    }
    save();
    return pass;
  }
  /* The child opened See my answers after a skill check. */
  function answersSeen(k) { if (!lessons[k]) return; rec(k).answersSeenAt = new Date().toISOString(); save(); }
  /* Test items are never practice: the player runs them in test mode only. */
  function recordPractice(k, part) { if (part === "t") return; mark(k, part === "y" ? "tried" : "practiced"); }
  /* How a pass was earned: "grownup" (hands-on Check) or "test" (scored check).
     Older grown-up passes have no passBy; a lesson with a Check and no test can only be passed that way. */
  function passKind(k) {
    const r = prog[k] || {};
    if (!r.mastered) return null;
    if (r.passBy) return r.passBy;
    return lessons[k] && lessons[k].check && !PP.byId["SK:" + k + ":t"] ? "grownup" : "test";
  }
  function passLabel(k) { return passKind(k) === "grownup" ? "Checked by a grown-up" : "Passed the skill check"; }
  /* Review suggested (display only, never stored): a scored pass 7+ days old, or the last try did not pass. */
  function reviewDue(k) {
    const r = prog[k] || {};
    if (!r.mastered || passKind(k) !== "test") return false;
    const last = (r.attempts || [])[(r.attempts || []).length - 1];
    if (last && !last.ok) return true;
    const ds = daysSince(r.lastPassAt || r.passedAt || r.firstSeenPassedAt);
    return ds !== null && ds >= 7;
  }
  function status(k) {
    if (!lessons[k]) { const lk = lessonFor(k); if (lk) return status(lk); return habit(k) ? "habit" : "none"; }
    const r = prog[k] || {};
    if (r.mastered) return "mastered";
    if (r.taught || r.learned || r.practiced || r.tried || r.tries) return "started";
    return "new";
  }
  function resetProgress() { prog = {}; save(); }

  /* ---------- labels ---------- */
  const TESTED = {
    reading: ["On the test", "On the Milestones: Reading questions"],
    writing: ["On the test", "On the Milestones: Writing and revising questions"],
    both: ["On the test", "On the Milestones: Reading and Writing questions"],
    classroom: ["Classroom skill", "Taught and checked in class. Not on the Milestones."],
    no: ["Not on the test", "On Georgia's grade 3 grammar chart as an Introduce or Continue skill. Not on the Grade 3 Milestones."],
    embedded: ["Everyday habit", "A reading and writing habit. GaDOE builds the practices into other questions; it is not tested on its own."]
  };
  const onTest = s => !!s && ["reading", "writing", "both"].indexOf(s.tested) >= 0;
  const groupName = g => String(g || "").replace(/\s*\(K-12 GUM chart, grade 3 rows\)/, " (grammar chart)");
  function codeLabel(s) { return s.gum ? "3.L.GC.1 · " + ({ M: "Master", R: "Reinforce", I: "Introduce", C: "Continue" })[s.level] : s.display; }
  /* GUM rows all share 3.L.GC.1, so the list shows the row's grade 3 level instead of repeating the code */
  function shortCode(c) { const s = byCode[c]; return s ? (s.gum ? "Grammar chart: " + ({ M: "Master", R: "Reinforce", I: "Introduce", C: "Continue" })[s.level] : s.display) : c; }
  const habit = code => (window.PP_HABITS || {})[code];
  function titleOf(s) { const lk = lessonFor(s.code), H = habit(s.code); return lk ? lessons[lk].title : H ? H.title : (s.gum ? cap(s.gum) : s.plain); }
  function cap(t) { t = String(t || ""); return t.charAt(0).toUpperCase() + t.slice(1); }
  const lessonOnTest = L => codesOf(L).some(c => onTest(byCode[c]));

  /* ---------- the catalog (IXL-style): categories, lettered groups, numbered skills ---------- */
  const CAT = window.PP_CATALOG || [];
  const ids = {};         /* lesson key -> "D2" */
  const catOf = {};       /* lesson key -> category id */
  (function () {
    let n = 0;
    CAT.forEach(c => c.groups.forEach(g => {
      g.letter = letters(n++);
      g.skills.forEach((k, i) => { ids[k] = g.letter + (i + 1); catOf[k] = c.id; });
    }));
    function letters(i) { const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; return i < 26 ? A[i] : A[Math.floor(i / 26) - 1] + A[i % 26]; }
  })();
  const isTask = k => /^task:/.test(k);
  function entryTitle(k) {
    if (isTask(k)) { const t = PP.taskById[k.slice(5)]; return t ? "Essay: " + t.title : k; }
    return lessons[k] ? lessons[k].title : k;
  }
  function entryCodes(k) {
    if (isTask(k)) { const t = PP.taskById[k.slice(5)]; return t ? (t.std || []).slice(0, 2) : []; }
    return lessons[k] ? codesOf(lessons[k]) : [];
  }
  function entryOnTest(k) { return isTask(k) || (lessons[k] ? lessonOnTest(lessons[k]) : false); }
  function entryStatus(k) {
    if (isTask(k)) { let d = null; try { d = JSON.parse(window.localStorage.getItem("pp.task." + k.slice(5))); } catch (e) { d = null; } return d && d.draft ? "started" : "new"; }
    return lessons[k] ? status(k) : "none";
  }
  function openEntry(k) {
    if (isTask(k)) { window.PP_WRITING.start(k.slice(5)); return; }
    open(k);
  }
  function nextIn(c) {
    for (const g of c.groups) for (const k of g.skills) if (!isTask(k) && lessons[k] && status(k) !== "mastered") return k;
    return null;
  }
  function catStats(c) {
    const all = [].concat(...c.groups.map(g => g.skills));
    const ks = all.filter(k => lessons[k]);
    /* essay tasks are scored by a grown-up, not mastered, so they are counted beside the ring, not in it */
    return { total: ks.length, done: ks.filter(k => status(k) === "mastered").length, essays: all.filter(k => isTask(k) && PP.taskById[k.slice(5)]).length };
  }

  let filter = "all", query = "", lastCode = null;

  function buildList() {
    buildCards();
    const host = el("skill-list"); clear(host);
    const q = query.trim().toLowerCase();
    let shown = 0;
    CAT.forEach(c => {
      const sec = make("section", "cat-sec cat-" + c.id);
      sec.id = "cat-" + c.id;
      const head = make("div", "cat-head");
      head.appendChild(make("h2", "cat-title", c.name));
      head.appendChild(make("p", "cat-line", c.line));
      sec.appendChild(head);
      const grid = make("div", "cat-groups");
      let any = 0;
      c.groups.forEach(g => {
        const rows = g.skills.filter(k => {
          if (!isTask(k) && !lessons[k]) return false;
          if (filter === "test" && !entryOnTest(k)) return false;
          if (filter === "todo" && (isTask(k) || entryStatus(k) === "mastered")) return false;
          if (!q) return true;
          const text = [ids[k], entryTitle(k)].concat(entryCodes(k).map(x => x + " " + shortCode(x) + " " + ((byCode[x] || {}).plain || "") + " " + ((byCode[x] || {}).gum || ""))).join(" ").toLowerCase();
          return text.indexOf(q) >= 0;
        });
        if (!rows.length) return;
        const grp = make("div", "cat-group");
        const gh = make("h3", "group-title");
        gh.appendChild(make("span", "group-letter", g.letter + "."));
        gh.appendChild(document.createTextNode(" " + g.name));
        grp.appendChild(gh);
        const ol = make("ol", "skill-lines");
        rows.forEach(k => {
          const li = make("li");
          const st = entryStatus(k);
          const b = make("button", "skill-line is-" + st);
          b.type = "button"; b.dataset.code = k;
          b.appendChild(make("span", "sl-num", ids[k] || String(g.skills.indexOf(k) + 1)));
          const body = make("span", "sl-body");
          const t = make("span", "sl-title", entryTitle(k));
          body.appendChild(t);
          const meta = make("span", "sl-meta");
          entryCodes(k).forEach(x => meta.appendChild(make("span", "sl-code", shortCode(x))));
          if (entryOnTest(k)) meta.appendChild(make("span", "sl-test", "On test"));
          body.appendChild(meta);
          b.appendChild(body);
          const due = st === "mastered" && !isTask(k) && reviewDue(k);
          const byG = st === "mastered" && !isTask(k) && passKind(k) === "grownup";
          if (st === "mastered") { const ck = make("span", "sl-done" + (byG ? " by-grownup" : ""), "✓"); ck.title = passLabel(k); b.appendChild(ck); }
          else if (st === "started") b.appendChild(make("span", "sl-started", "◐"));
          if (due) b.appendChild(make("span", "sl-review", "review"));
          b.setAttribute("aria-label", ids[k] + ". " + entryTitle(k) + ". Georgia " + entryCodes(k).map(shortCode).join(", ") + ". " +
            (st === "mastered" ? passLabel(k) + "." + (due ? " Review suggested." : "") : st === "started" ? "Started." : ""));
          b.addEventListener("click", () => openEntry(k));
          li.appendChild(b); ol.appendChild(li);
          any++; shown++;
        });
        grp.appendChild(ol);
        grid.appendChild(grp);
      });
      if (!any) return;
      sec.appendChild(grid);
      host.appendChild(sec);
    });
    el("skill-empty").hidden = shown > 0;
    const cnt = el("skill-count");
    cnt.textContent = (q || filter !== "all") && shown ? shown + " skill" + (shown > 1 ? "s" : "") + " match" + (shown > 1 ? "" : "es") + "." : "";
    buildProgress();
  }

  function buildCards() {
    const host = el("cat-cards"); if (!host) return;
    clear(host);
    CAT.forEach(c => {
      const st = catStats(c);
      const b = make("button", "cat-card cat-" + c.id);
      b.type = "button"; b.dataset.cat = c.id;
      b.appendChild(make("span", "cc-name", c.name));
      const ring = make("span", "cc-ring");
      ring.style.setProperty("--p", (st.total ? Math.round(100 * st.done / st.total) : 0) + "%");
      ring.appendChild(make("span", "cc-ring-n", st.done + "/" + st.total));
      b.appendChild(ring);
      const nx = nextIn(c);
      const ess = st.essays ? "+" + st.essays + " essay" + (st.essays > 1 ? "s" : "") : "";
      b.appendChild(make("span", "cc-next", (nx ? "Next: " + ids[nx] + " " + lessons[nx].title.split(":")[0] : "All checks passed") + (ess ? " · " + ess : "")));
      b.setAttribute("aria-label", c.name + ". " + st.done + " of " + st.total + " checks passed." + (ess ? " Plus " + st.essays + " essay task" + (st.essays > 1 ? "s" : "") + ", scored by a grown-up." : "") + (nx ? " Next: " + ids[nx] + ", " + lessons[nx].title + "." : ""));
      b.addEventListener("click", () => {
        rec("_ui").lastCat = c.id; save();
        const t = el("cat-" + c.id); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
        buildUpNext();
      });
      host.appendChild(b);
    });
    buildUpNext();
  }
  function buildUpNext() {
    const host = el("up-next"); if (!host) return;
    clear(host);
    const pref = (prog._ui || {}).lastCat || "reading";
    const order = [pref].concat(CAT.map(c => c.id).filter(x => x !== pref));
    let k = null, cat = null;
    for (const id of order) { const c = CAT.find(x => x.id === id); k = c && nextIn(c); if (k) { cat = c; break; } }
    if (!k) { host.appendChild(make("p", "un-done", "Your child has passed every check on this device. Come back to skills over the next weeks to make sure they stick.")); return; }
    host.appendChild(make("p", "un-label", "Up next in " + cat.name));
    const b = make("button", "btn btn-primary un-btn", ids[k] + " · " + lessons[k].title);
    b.type = "button"; b.id = "up-next-btn";
    b.addEventListener("click", () => open(k));
    host.appendChild(b);
  }

  function buildProgress() {
    const host = el("home-progress"); clear(host);
    const testedKeys = Object.keys(lessons).filter(k => lessonOnTest(lessons[k]));
    const done = testedKeys.filter(k => status(k) === "mastered").length;
    const p = make("p", "prog-line");
    p.appendChild(make("strong", "", done + " of " + testedKeys.length));
    p.appendChild(document.createTextNode(" skills that are on the test have a passed skill check on this device."));
    const due = Object.keys(lessons).filter(reviewDue).length;
    if (due) p.appendChild(document.createTextNode(" " + due + " passed skill" + (due > 1 ? "s are" : " is") + " due for a review."));
    host.appendChild(p);
    const bar = make("span", "prog-bar"); const fill = make("span", "prog-fill");
    fill.style.width = (testedKeys.length ? Math.round(100 * done / testedKeys.length) : 0) + "%";
    bar.appendChild(fill); host.appendChild(bar);
  }

  /* Everyday habits: Georgia's K-12 Practices, on their own page. */
  function buildHabits() {
    const host = el("habit-list"); if (!host) return;
    clear(host);
    const recs = STD.filter(s => s.tested === "embedded");
    const groups = [];
    recs.forEach(s => { let g = groups.find(x => x.name === s.group); if (!g) { g = { name: s.group, recs: [] }; groups.push(g); } g.recs.push(s); });
    groups.forEach(g => {
      const grp = make("details", "cat-group habit-group");
      if (!groups.indexOf(g)) grp.open = true;
      grp.appendChild(make("summary", "group-title", groupName(g.name).replace(/^[A-Z0-9.\-]+(\s*[·:\-–]\s*|\s+)/, "") + " (" + g.recs.length + ")"));
      const ol = make("ol", "skill-lines");
      g.recs.forEach((s, i) => {
        const li = make("li");
        const b = make("button", "skill-line");
        b.type = "button"; b.dataset.code = s.code;
        b.appendChild(make("span", "sl-num", String(i + 1)));
        const body = make("span", "sl-body");
        body.appendChild(make("span", "sl-title", titleOf(s)));
        const meta = make("span", "sl-meta"); meta.appendChild(make("span", "sl-code", s.display)); body.appendChild(meta);
        b.appendChild(body);
        b.addEventListener("click", () => open(s.code));
        li.appendChild(b); ol.appendChild(li);
      });
      grp.appendChild(ol);
      host.appendChild(grp);
    });
  }

  /* Clue Word Cheat Sheet (the six text structures). */
  function buildClues() {
    const host = el("clue-sheet"); if (!host) return;
    clear(host);
    const tb = make("table", "clue-table");
    const hr = make("tr");
    ["Kind of text", "Clue words", "Ask yourself"].forEach(h => hr.appendChild(make("th", "", h)));
    const th = make("thead"); th.appendChild(hr); tb.appendChild(th);
    const body = make("tbody");
    (window.PP_STRUCTURES || []).forEach(S => {
      const tr = make("tr");
      const n = make("td");
      if (lessons[S.key]) { const nb = make("button", "linkish ct-open", S.name); nb.type = "button"; nb.addEventListener("click", ev => { ev.stopPropagation(); open(S.key); }); n.appendChild(nb); }
      else n.appendChild(make("strong", "", S.name)); n.appendChild(make("span", "ct-what", S.what)); tr.appendChild(n);
      const w = make("td"); S.words.forEach(x => w.appendChild(make("span", "clue-chip", x))); tr.appendChild(w);
      const a = make("td"); a.appendChild(make("span", "", S.ask)); tr.appendChild(a);
      if (lessons[S.key]) {
        tr.classList.add("has-link");
        tr.addEventListener("click", () => open(S.key));
        tr.title = "Open the " + S.name + " skill";
      }
      body.appendChild(tr);
    });
    tb.appendChild(body);
    host.appendChild(tb);
    const t = make("p", "teach-tip"); t.appendChild(make("strong", "", "Tricky words: ")); t.appendChild(document.createTextNode(window.PP_STRUCTURES_TRICKY || "")); host.appendChild(t);
  }

  /* ---------- the skill page ----------
     Five steps, like Study Scoop: Learn It, Watch Me, Practice Together,
     Try It Yourself, Test Your Knowledge. Hands-on skills (fluency, cursive
     writing) have Learn It, Watch Me, Practice and a grown-up Check. */
  let cur = null, step = "teach";
  function stepsFor(L) {
    const K = keyOf(L);
    const hasTry = !!PP.byId["SK:" + K + ":y"];
    const handsOn = !!L.activity && !PP.byId["SK:" + K + ":p"];
    const out = [["teach", "Learn It"], ["learn", "Watch Me"], ["practice", handsOn ? "Practice" : "Practice Together"]];
    if (hasTry) out.push(["try", "Try It Yourself"]);
    out.push(["test", PP.byId["SK:" + K + ":t"] ? "Test Your Knowledge" : "Check"]);
    return out;
  }

  function open(id, which, opts) {
    let k = lessons[id] ? id : lessonFor(id);
    const s = k ? byCode[lessons[k].code] : byCode[id];
    if (!s) return false;
    if (!window.PP_APP.canLeave()) return false;
    cur = k || id; lastCode = cur;
    const L = k ? lessons[k] : null;
    step = L && stepsFor(L).some(x => x[0] === which) ? which : "teach";
    const sid = k && ids[k];
    el("sk-code").textContent = L ? (sid ? sid + " · " : "") + (CAT.find(c => c.id === catOf[k]) || {}).name : codeLabel(s);
    el("sk-title").textContent = L ? L.title : titleOf(s);
    const codes = L ? codesOf(L) : [s.code];
    const STR = L && (window.PP_STRUCTURES || []).find(x => x.key === k && k !== L.code);
    el("sk-plain").textContent = STR ? STR.what + " Clue words help you spot it." : byCode[codes[0]].plain;
    el("sk-plain").hidden = !L && titleOf(s) === s.plain;
    const tags = el("sk-tags"); clear(tags);
    codes.forEach(c => {
      const x = byCode[c]; if (!x) return;
      const chip = make("span", "sk-chip"); chip.appendChild(make("span", "sk-chip-code", codeLabel(x)));
      chip.title = x.plain; tags.appendChild(chip);
    });
    const anyTest = codes.some(c => onTest(byCode[c]));
    const t0 = anyTest ? TESTED.both : (TESTED[s.tested] || ["", ""]);
    tags.appendChild(make("span", "srow-tag tag-" + (anyTest ? "test" : s.tested), anyTest ? "On the test" : t0[0]));
    tags.appendChild(make("span", "sk-tagline", anyTest ? "This exercise targets the Georgia standard" + (codes.length > 1 ? "s" : "") + " above." : t0[1]));
    const off = el("sk-official"); clear(off);
    off.appendChild(make("summary", "", "Georgia's standard" + (anyTest ? " and what Proficient looks like" : "")));
    codes.forEach(c => {
      const x = byCode[c]; if (!x) return;
      /* standards.js text is paraphrased, so it is not shown in quotation marks */
      const p = make("p", "sk-off-text"); p.appendChild(make("strong", "", codeLabel(x) + " (paraphrased): ")); p.appendChild(document.createTextNode(x.text));
      off.appendChild(p);
    });
    off.appendChild(make("p", "note", "Georgia's K-12 English Language Arts Standards, grades 3-5" + (s.gum ? ", Grammar, Usage and Mechanics chart (grade 3 row: " + ({ M: "Master", R: "Reinforce", I: "Introduce", C: "Continue" })[s.level] + ")" : "") + "."));
    const seen = {};
    codes.forEach(c => {
      const m = /^(3\.[TL]\.[A-Z]+\.\d)/.exec(c);
      const ald = m && !seen[m[1]] && onTest(byCode[c]) && window.PP_ALDS && window.PP_ALDS.standards[m[1]];
      if (m) seen[m[1]] = 1;
      if (ald && ald.Proficient && ald.Proficient.length) {
        off.appendChild(make("p", "fg-label", "What Proficient work looks like (GaDOE's DRAFT Achievement Level Descriptors, October 2025, for all of " + m[1] + "; GaDOE may revise them after standard setting in late fall 2026)"));
        const ul = make("ul", "plist ald");
        ald.Proficient.forEach(t => ul.appendChild(make("li", "", t)));
        off.appendChild(ul);
      }
    });
    if (off.querySelector(".plist.ald")) off.appendChild(make("p", "note ald-note", "Passing a Peach Prep skill check is not a Milestones score or achievement level."));
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
    if (step === "teach" && which !== "teach") { mark(cur, "taught"); }
    step = which;
    render();
    setHashFor(true);
    window.PP_APP.track();
    /* land at the top of the new step, not wherever the last one ended */
    const top = el("sk-steps").getBoundingClientRect().top + window.scrollY - 4;
    if (window.scrollY > top) window.scrollTo(0, top);
    el("sk-panel").focus({ preventScroll: true });
  }

  function renderSteps() {
    const host = el("sk-steps"); clear(host);
    const L = lessons[cur];
    const r = prog[cur] || {};
    const done = { teach: r.taught, learn: r.learned, practice: r.practiced, "try": r.tried, test: r.mastered };
    const S = stepsFor(L);
    host.style.setProperty("--steps", S.length);
    S.forEach(([k, name], i) => {
      const b = make("button", "step-btn" + (done[k] ? " is-done" : ""));
      b.type = "button"; b.dataset.step = k;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", k === step ? "true" : "false");
      b.appendChild(make("span", "step-n", done[k] ? "✓" : String(i + 1)));
      b.appendChild(make("span", "step-name", name));
      b.appendChild(make("span", "step-short", ({ teach: "Learn", learn: "Watch", practice: "Practice", "try": "Try", test: name === "Check" ? "Check" : "Test" })[k]));
      b.setAttribute("aria-label", name + (done[k] ? ", done" : ""));
      b.addEventListener("click", () => go(k));
      host.appendChild(b);
    });
  }
  function nextStep() {
    const S = stepsFor(lessons[cur]); const i = S.findIndex(x => x[0] === step);
    return S[i + 1] || null;
  }

  function render() {
    const L = lessons[cur];
    const host = el("sk-panel"); clear(host);
    if (!L) { renderPending(host, byCode[cur]); return; }
    renderSteps();
    ({ teach: renderTeach, learn: renderLearn, practice: renderPractice, "try": renderTry, test: renderTest })[step](host, L);
    renderGrownups(host, L);
  }

  function nextBtn(label) {
    const n = nextStep();
    if (!n) return document.createTextNode("");
    const b = make("button", "btn " + (["practice", "try", "test"].indexOf(step) >= 0 ? "btn-soft" : "btn-primary") + " step-next", label || ("Next: " + n[1]));
    b.type = "button"; b.addEventListener("click", () => go(n[0]));
    return b;
  }
  /* "Cursive: text" is shown in a US school cursive font (3.F.H.3). */
  function lines(host, list, cls) {
    (Array.isArray(list) ? list : [list]).forEach(t => {
      const c = /^Cursive: /.test(t);
      host.appendChild(c ? make("p", (cls || "") + " cursive", t.replace(/^Cursive: /, "")) : PP.rich(make("p", cls || ""), t));   /* **bold** words: SPEC §5e */
    });
  }
  PP.cursiveLines = lines;

  function clueBox(L) {
    const C = L.clues;
    const box = make("div", "clue-box");
    box.appendChild(make("p", "clue-h", "Clue words"));
    const row = make("p", "clue-row");
    C.words.forEach(w => row.appendChild(make("span", "clue-chip", w)));
    box.appendChild(row);
    const a = make("p", "clue-ask"); a.appendChild(make("strong", "", "Ask yourself: ")); a.appendChild(document.createTextNode(C.ask)); box.appendChild(a);
    if (C.draw) { const d = make("p", "clue-draw"); d.appendChild(make("strong", "", "Draw it: ")); d.appendChild(document.createTextNode(C.draw)); box.appendChild(d); }
    const link = make("button", "linkish", "Open the Clue Word Cheat Sheet"); link.type = "button";
    link.addEventListener("click", () => window.PP_APP.openClues());
    box.appendChild(link);
    return box;
  }

  function renderTeach(host, L) {
    const T = L.teach || {};
    const card = make("div", "teach-card");
    card.appendChild(make("h2", "panel-h", "Learn It"));
    if (T.big) card.appendChild(make("p", "big-idea", T.big));
    if ((T.points || []).length) {
      const ul = make("ul", "teach-points");
      T.points.forEach(p => ul.appendChild(make("li", "", p)));
      card.appendChild(ul);
    }
    if (L.clues) card.appendChild(clueBox(L));
    if (T.words && T.words.length) {
      const dl = make("dl", "teach-words");
      T.words.forEach(w => { dl.appendChild(make("dt", "", w.term)); dl.appendChild(make("dd", "", w.means)); });
      card.appendChild(dl);
    }
    (T.examples || (T.example ? [T.example] : [])).forEach(ex => {
      const box = make("div", "teach-example");
      box.appendChild(make("p", "ex-label", ex.label || "Example"));
      const body = make("div", "ex-body"); lines(body, ex.lines); PP.figures(body, ex.figure); box.appendChild(body);
      if (ex.note) box.appendChild(make("p", "ex-note", ex.note));
      card.appendChild(box);
    });
    if (T.tip) { const tip = make("p", "teach-tip"); tip.appendChild(make("strong", "", lessonOnTest(lessons[cur]) ? "Test tip: " : "Tip: ")); tip.appendChild(document.createTextNode(T.tip)); card.appendChild(tip); }
    host.appendChild(card);
    host.appendChild(nextBtn());
  }

  function renderLearn(host, L) {
    host.appendChild(make("h2", "panel-h", "Watch Me"));
    host.appendChild(make("p", "panel-sub", "Watch how a good reader thinks. Read each example, guess the answer, then tap Show the next step."));
    const exs = L.learn || [];
    let finished = 0;
    exs.forEach((ex, i) => {
      const card = make("div", "learn-card");
      card.appendChild(make("p", "ex-label", "Example " + (i + 1) + " of " + exs.length));
      if ((ex.show && ex.show.length) || ex.figure) { const b = make("div", "ex-body"); lines(b, ex.show || []); PP.figures(b, ex.figure); card.appendChild(b); }
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
    host.appendChild(nextBtn());
  }

  function goCard(set, opts) {
    const card = make("div", "go-card");
    lines(card, opts.intro, "");
    if (opts.done) card.appendChild(make("p", "go-done", opts.done));
    const b = make("button", "btn btn-primary", opts.button);
    b.type = "button"; b.id = opts.id;
    b.addEventListener("click", () => window.PP_PLAYER.start(set.id, opts.mode));
    card.appendChild(b);
    return card;
  }

  function renderPractice(host, L) {
    const K = keyOf(L);
    const set = PP.byId["SK:" + K + ":p"];
    host.appendChild(make("h2", "panel-h", set ? "Practice Together" : "Practice"));
    const r = prog[cur] || {};
    if (set) host.appendChild(goCard(set, {
      intro: set.items.length + " questions to do together. Press Help me any time: one hint at a time, then a walk-through. Practice is never scored." +
        (L.clues ? " Stuck? Tap Show clue words above the passage." : ""),
      done: r.practiced ? "✓ Finished. You can do it again any time." : "",
      button: r.practiced ? "Practice again" : "Start practice", id: "sk-start-practice", mode: "practice" }));
    if (L.activity) renderActivity(host, L);
    if (L.write && !PP.byId["SK:" + K + ":y"]) renderWrite(host, L);
    host.appendChild(nextBtn());
  }

  function renderTry(host, L) {
    const K = keyOf(L);
    const set = PP.byId["SK:" + K + ":y"];
    host.appendChild(make("h2", "panel-h", "Try It Yourself"));
    const r = prog[cur] || {};
    if (set) host.appendChild(goCard(set, {
      intro: set.items.length + " new questions on your own. Press Check to see if you are right. Help me unlocks after one try.",
      done: r.tried ? "✓ Finished. Next: the skill check." : "",
      button: r.tried ? "Try again" : "Start", id: "sk-start-try", mode: "try" }));
    if (L.write) renderWrite(host, L);
    host.appendChild(nextBtn());
  }

  /* A short writing activity (writing standards). The draft is kept on this
     device. A grown-up reads it with the checklist; nothing is scored. */
  function renderWrite(host, L) {
    const W = L.write;
    const k = "pp.skwrite." + keyOf(L);
    let saved = {};
    try { saved = JSON.parse(window.localStorage.getItem(k)) || {}; } catch (e) { saved = {}; }
    const store = () => { try { window.localStorage.setItem(k, JSON.stringify(saved)); } catch (e) { /* ok */ } };
    const card = make("div", "write-card");
    card.appendChild(make("h3", "write-h", "Your turn to write"));
    lines(card, W.prompt, "write-prompt");
    const id = "skw-" + keyOf(L).replace(/[^a-z0-9]/gi, "-");
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
    const set = PP.byId["SK:" + keyOf(L) + ":t"];
    host.appendChild(make("h2", "panel-h", set ? "Test Your Knowledge" : "Check: show a grown-up"));
    const card = make("div", "go-card");
    if (set) {
      const max = set.items.reduce((a, it) => a + it.points, 0);
      const r = prog[cur] || {};
      card.appendChild(make("p", "", set.items.length + " questions, " + max + " points, no hints. Score " + passMark(max) + " or more to pass the skill check."));
      if (r.mastered) {
        card.appendChild(make("p", "go-done", "✓ Passed the skill check" + (r.passedAt ? " on " + niceDate(r.passedAt) : "") + "." + (r.best ? " Best score: " + r.best.got + " of " + r.best.max + "." : "")));
        /* for grown-ups: how the pass was earned (display only, from the dated attempt log) */
        const att = r.attempts || [];
        const pa = att.find(a => a.ok && a.n === r.passTry) || (r.passTry ? null : att.filter(a => a.ok).pop());
        if (r.passTry) card.appendChild(make("p", "go-note pass-try", "Passed on try " + r.passTry + "." + (r.passTry > 1 ? " The check uses the same questions each time." : "")));
        if (pa && pa.afterAnswers) card.appendChild(make("p", "go-note pass-after", "Passed after seeing the answers on an earlier try."));
        if (r.legacyUndated) card.appendChild(make("p", "go-note", "This pass was saved before the site kept dates, so its date is not known."));
        if (reviewDue(cur)) {
          const last = att[att.length - 1];
          const ds = daysSince(r.lastPassAt || r.passedAt || r.firstSeenPassedAt);
          card.appendChild(make("p", "go-best review-due", "Review suggested. " + (last && !last.ok
            ? "The last try did not pass. A little more practice is a good idea."
            : "It has been " + ds + " days since this check was passed" + (r.lastPassAt || r.passedAt ? "" : " (or since this device first noticed the pass)") + ". Take it again to see if it stuck.")));
        }
      }
      else if (r.best) card.appendChild(make("p", "go-best", "Best score so far: " + r.best.got + " of " + r.best.max + ". Need " + passMark(max) + " to pass."));
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
      card.appendChild(make("p", "", "This is one of Georgia's K-12 practices. It is not a separate test skill. Many skills on this site use this habit; the ideas below practice it at home."));
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
      card.appendChild(make("p", "", "The lesson for this standard is being written and checked. It will appear here when it is ready."));
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
    card.appendChild(make("p", "flu-tool-note", "A home practice tool, not a formal test or screener. Teachers use calibrated passages and more than one reading for that, so treat these numbers as a rough guide."));
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

    let which = 0, phase = "ready", t0 = 0, timer = null, secs = 60, words = [], miss = new Set(), fixed = new Set();
    function load(i) {
      which = i; phase = "ready"; miss = new Set(); fixed = new Set(); clearInterval(timer);
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
      /* a second tap undoes the mark: the reader fixed the word, so it counts as correct and as a self-correction */
      if (phase === "reading") { if (miss.has(k)) { miss.delete(k); fixed.add(k); } else { miss.add(k); fixed.delete(k); } b.classList.toggle("is-miss", miss.has(k)); return; }
      if (phase === "last") finish(k);
    }
    function tick() {
      const left = Math.max(0, 60 - Math.floor((Date.now() - t0) / 1000));
      clock.textContent = left >= 60 ? "1:00" : "0:" + String(left).padStart(2, "0");
      if (left <= 0) stop();
    }
    startB.addEventListener("click", () => {
      if (phase !== "ready") { load(which); return; }
      phase = "reading"; t0 = Date.now(); secs = 60;
      card.classList.add("is-reading");
      timer = setInterval(tick, 250);
      startB.hidden = true; stopB.hidden = false;
      say.textContent = "Reading. Grown-up: tap any word that is skipped or read wrong. If the reader fixes it on their own, tap it again: it counts as correct and as a self-correction.";
    });
    stopB.addEventListener("click", stop);
    function stop() {
      if (phase !== "reading") return;
      clearInterval(timer);
      card.classList.remove("is-reading");
      secs = Math.max(10, Math.min(60, Math.round((Date.now() - t0) / 1000)));
      phase = "last"; stopB.hidden = true;
      clock.textContent = "Time!";
      say.textContent = "Grown-up: now tap the last word the reader read.";
      text.classList.add("pick-last");
      const first = words[0]; if (first) first.focus({ preventScroll: true });
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
      const ratio = read ? (read - errs) / read : 0;
      const acc = Math.floor(100 * ratio);   /* never round up into the next band */
      clear(out);
      const big = make("p", "flu-result");
      big.appendChild(make("strong", "", wcpm + " words correct per minute"));
      big.appendChild(document.createTextNode(" · " + acc + "% accuracy (" + errs + " missed of " + read + ")"));
      out.appendChild(big);
      const m = new Date().getMonth();
      const season = m >= 7 && m <= 10 ? "fall" : (m === 11 || m <= 2) ? "winter" : "spring";
      const goal = A.goal[season];
      if (A.practiced) out.appendChild(make("p", "", "This was a practiced passage, so the speed is higher than on a first reading. Use it to see your own progress from one reading to the next."));
      else out.appendChild(make("p", "", "A typical third grader in the " + season + " reads about " + goal +
        " words correct per minute on a first reading (" + A.goalSource + "). " +
        (wcpm >= goal ? "For this one reading, that is at or above the grade 3 middle." : wcpm >= goal - 10 ? "For this one reading, that is close to the grade 3 middle. Keep practicing." : "For this one reading, that is below the grade 3 middle. Rereading the same passage a few times a week builds speed. Try it again tomorrow.") +
        " Passages differ in difficulty, so one reading is a rough guide only."));
      out.appendChild(make("p", "", ratio >= 0.95 ? "Accuracy of 95% or higher means this passage is a good level for reading on your own." :
        ratio >= 0.90 ? "Accuracy of 90-94%: a good level for reading with a grown-up nearby." : "Accuracy under 90% means this passage is hard right now. Read it together first, then try again."));
      const r = rec(cur); r.fluency = r.fluency || [];
      const entry = { d: today(), wcpm, acc, p: which + 1 };
      const fixes = Array.from(fixed).filter(i => i <= k).length;
      if (fixes) entry.obs = { selfFix: fixes };   /* counted from the grown-up's second taps */
      r.fluency.push(entry);
      r.fluency = r.fluency.slice(-12); save();
      mark(cur, "practiced"); renderSteps();
      out.appendChild(observeForm(r, entry));
      histRedraw();
      startB.hidden = false; startB.textContent = "Read again";
    }
    /* Reading history: shown whenever there are saved readings (reading only, never writes). */
    const histP = make("div", "note flu-hist-box"); card.appendChild(histP);
    function histRedraw() {
      clear(histP);
      const F = (prog[cur] || {}).fluency || [];
      if (!F.length) return;
      histP.appendChild(make("p", "", "Recent readings on this device:"));
      const ul = make("ul", "flu-hist");
      F.slice(-5).forEach(x => {
        const li = make("li", "", (niceDate(x.d) || x.d) + ": " + x.wcpm + " words correct per minute, " + x.acc + "% accuracy");
        const o = obsText(x.obs);
        if (o) { li.appendChild(document.createTextNode(" · ")); li.appendChild(make("span", "flu-obs-tag", "Grown-up observed: ")); li.appendChild(document.createTextNode(o)); }
        ul.appendChild(li);
      });
      histP.appendChild(ul);
    }
    histRedraw();
    /* Optional notes a grown-up adds after a reading. Saved with that reading as
       reading.obs = { expr: 1-3, pauses: "yes"|"sometimes"|"notyet", selfFix: n, retell: "yes"|"partly"|"notyet" }. */
    function observeForm(r, entry) {
      const box = make("div", "flu-obs");
      box.appendChild(make("p", "fo-h", "Grown-up observed (optional)"));
      box.appendChild(make("p", "note", "Add what you heard. These notes are saved with this reading on this device. They are your observations, not a score."));
      const store = (key, val) => {
        entry.obs = entry.obs || {};
        if (val === null || val === "" || (typeof val === "number" && isNaN(val))) delete entry.obs[key]; else entry.obs[key] = val;
        if (!Object.keys(entry.obs).length) delete entry.obs;
        save(); if (histRedraw) histRedraw();
      };
      const uid = "fo" + Date.now().toString(36);
      const radios = (key, q, opts) => {
        const fs = make("fieldset", "fo-" + key); fs.appendChild(make("legend", "", q));
        opts.forEach(([v, lab]) => {
          const l = make("label"); const i = make("input"); i.type = "radio"; i.name = uid + key; i.value = String(v);
          i.checked = !!entry.obs && entry.obs[key] === v;
          i.addEventListener("change", () => { if (i.checked) store(key, v); });
          l.appendChild(i); l.appendChild(document.createTextNode(lab)); fs.appendChild(l);
        });
        box.appendChild(fs);
      };
      radios("expr", "Expression and phrasing", [[1, "1: mostly word by word"], [2, "2: some phrases, some expression"], [3, "3: smooth phrases, expression that fits"]]);
      radios("pauses", "Paused at periods and commas?", [["yes", "Yes"], ["sometimes", "Sometimes"], ["notyet", "Not yet"]]);
      const fs = make("fieldset", "fo-selfFix"); fs.appendChild(make("legend", "", "Self-corrections (words the reader fixed on their own)"));
      const l = make("label"); const n = make("input"); n.type = "number"; n.min = "0"; n.max = "99"; n.step = "1"; n.id = uid + "sf";
      n.value = entry.obs && entry.obs.selfFix ? String(entry.obs.selfFix) : "";
      n.addEventListener("input", () => { const v = n.value === "" ? null : Math.max(0, Math.min(99, Math.round(+n.value))); store("selfFix", v); });
      l.appendChild(n); l.appendChild(document.createTextNode("counted from your second taps; change it if needed"));
      fs.appendChild(l); box.appendChild(fs);
      radios("retell", "Could your child tell what it was mostly about?", [["yes", "Yes"], ["partly", "Partly"], ["notyet", "Not yet"]]);
      return box;
    }
    function obsText(o) {
      if (!o) return "";
      const W = { yes: "yes", sometimes: "sometimes", partly: "partly", notyet: "not yet" };
      const out = [];
      if (o.expr) out.push("expression and phrasing " + o.expr + " of 3");
      if (o.pauses) out.push("paused at punctuation: " + W[o.pauses]);
      if (typeof o.selfFix === "number") out.push(o.selfFix + " self-correction" + (o.selfFix === 1 ? "" : "s"));
      if (o.retell) out.push("told what it was mostly about: " + W[o.retell]);
      return out.join(", ");
    }
    load(A.practiced ? Math.min(4, A.passages.length - 1) : 0);
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
     checked, the grown-up can mark it "Checked by a grown-up". This is a
     grown-up's observation, shown apart from a machine-scored skill check. It
     still sets `mastered` (so counts keep working) plus passBy: "grownup". */
  function renderCheck(host, L) {
    const C = L.check;
    const card = make("div", "go-card");
    lines(card, C.intro, "");
    const r0 = prog[cur] || {};          /* rendering never writes; the record is created on the first tick */
    const checks = () => (prog[cur] && prog[cur].checks) || [];
    const ul = make("ul", "write-checklist");
    const btn = make("button", "btn btn-primary", "Mark as checked by a grown-up"); btn.type = "button"; btn.id = "sk-grownup-check";
    const sync = () => { btn.disabled = !C.items.every((x, i) => checks()[i]) || !!(prog[cur] || {}).mastered; };
    C.items.forEach((c, i) => {
      const li = make("li");
      const cb = make("input"); cb.type = "checkbox"; cb.id = "skc-" + i; cb.checked = !!checks()[i];
      cb.addEventListener("change", () => { const r = rec(cur); r.checks = r.checks || []; r.checks[i] = cb.checked; save(); sync(); });
      const lb = make("label", "", c); lb.htmlFor = cb.id;
      li.appendChild(cb); li.appendChild(lb); ul.appendChild(li);
    });
    card.appendChild(ul);
    if (r0.mastered) {
      card.appendChild(make("p", "go-done", "✓ Checked by a grown-up" + (r0.passedAt ? " on " + niceDate(r0.passedAt) : "") + "."));
      card.appendChild(make("p", "go-note", "This is a grown-up's observation, not a scored skill check." + (r0.legacyUndated ? " It was saved before the site kept dates." : "")));
    }
    btn.addEventListener("click", () => {
      const r = rec(cur);
      r.mastered = true;
      if (!r.passBy) r.passBy = "grownup";
      if (!r.passedAt && !r.legacyUndated) r.passedAt = today();
      r.lastPassAt = today();
      save(); render();
    });
    sync();
    card.appendChild(btn);
    host.appendChild(card);
  }

  /* For grown-ups: the parent note, and for some skills the coaching notes
     from the parent's guide (mix-up, what to listen for, a 5-minute lesson). */
  function renderGrownups(host, L) {
    if (!L.parent && !L.coach) return;
    const box = make("aside", "for-grownups");
    box.appendChild(make("p", "fg-label", "For grown-ups"));
    if (L.parent) box.appendChild(make("p", "", L.parent));
    const C = L.coach;
    if (C) {
      if (C.mixup) { const p = make("p", ""); p.appendChild(make("strong", "", "Common mix-up: ")); p.appendChild(document.createTextNode(C.mixup)); box.appendChild(p); }
      if (C.strong || C.notyet) {
        const d = make("div", "listen");
        d.appendChild(make("p", "fg-sub", "What to listen for"));
        if (C.strong) { const p = make("p", "listen-strong"); p.appendChild(make("strong", "", "Strong: ")); p.appendChild(document.createTextNode(C.strong)); d.appendChild(p); }
        if (C.notyet) { const p = make("p", "listen-not"); p.appendChild(make("strong", "", "Not yet: ")); p.appendChild(document.createTextNode(C.notyet)); d.appendChild(p); }
        box.appendChild(d);
      }
      if (C.ido || C.wedo || C.youdo) {
        const det = make("details", "five-min");
        det.appendChild(make("summary", "", "Teach it in 5 minutes (I do, We do, You do)"));
        [["I do", C.ido], ["We do", C.wedo], ["You do", C.youdo], ["Everyday practice", C.everyday]].forEach(([h, t]) => {
          if (!t) return; const p = make("p", ""); p.appendChild(make("strong", "", h + ": ")); p.appendChild(document.createTextNode(t)); det.appendChild(p);
        });
        box.appendChild(det);
      }
    }
    host.appendChild(box);
  }

  /* ---------- player hooks ---------- */
  function afterTest(set, got, max) {
    const pass = recordTest(set.code, got, max);
    return pass ? "✓ Passed! You passed the skill check. It now shows a check mark on the skill list. Come back in about a week and try it again to see if it stuck."
      : "To pass the skill check, score " + passMark(max) + " or more. Go back to Watch Me or Practice Together, then try the check again another day.";
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
    init, open, buildList, buildHabits, buildClues, afterTest, recordPractice, status, resetProgress, skillId: k => ids[k], lessonFor,
    answersSeen, reviewDue, passKind, passLabel,
    current: () => cur, step: () => step, lastCode: () => lastCode,
    stepNames: k => (lessons[k] ? stepsFor(lessons[k]).map(x => x[1]) : []),
    lessonCount: () => Object.keys(lessons).length
  };
})();

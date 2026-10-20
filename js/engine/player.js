/* Peach Prep — the set player: passage + one question at a time.

   PRACTICE: Check gives feedback. Help me gives one step per press:
     1 the strategy clue, 2 a format-specific narrowing, 3 the walk-through
     with the answer outlined (the child still enters it). Help is never
     counted as a mistake. After a third wrong Check the walk-through
     opens on its own, so a child is never left stuck.
   TEST: no hints and no feedback. Move freely, then submit. Results in
     points with a breakdown by skill, then a review where each missed
     question has Show me how (clue, narrowing, walk-through + answer). */
(function () {
  "use strict";
  const { make, clear, el, sentenceAt, visibleLabel, isHeading, isCaption, isBox } = PP;
  const T = window.PP_ITEMS;

  const run = { set: null, mode: "practice", pos: 0, ctxs: [], state: [], done: false };

  /* ---------- passage pane ---------- */
  function renderPassages(set, hostEl) {
    const host = hostEl || el("passage-pane-body");
    clear(host);
    if (!set.passages.length) { host.appendChild(make("p", "muted", "This set has no passage.")); return; }
    set.passages.forEach((p, pi) => {
      const art = make("article", "passage");
      art.dataset.pid = p.id;
      if (set.passages.length > 1) art.appendChild(make("p", "passage-tag", "Passage " + (pi + 1)));
      if (p.title) art.appendChild(make("h3", "passage-title", p.title));
      if (p.byline) art.appendChild(make("p", "passage-byline", p.byline));
      if (p.lines) {
        let n = 0;
        p.lines.forEach((st, si) => {
          const stanza = make("div", "stanza");
          st.forEach((line, li) => {
            n++;
            const row = make("p", "poem-line");
            row.appendChild(make("span", "line-no", (n % 5 === 0) ? String(n) : ""));
            const span = make("span", "sent", line);
            span.dataset.ref = p.id + ":" + (si + 1) + ":" + (li + 1);
            row.appendChild(span);
            stanza.appendChild(row);
          });
          art.appendChild(stanza);
        });
      } else {
        let n = 0;
        p.paragraphs.forEach((para, k) => {
          const first = para[0] || "";
          if (isHeading(first)) { art.appendChild(make("h4", "passage-heading", first.replace(/^## /, ""))); return; }
          if (isCaption(first)) { art.appendChild(make("p", "passage-caption", first.replace(/^Caption: /, ""))); return; }
          if (isBox(first)) {
            /* A text-box feature (e.g. "Did You Know?"): set apart, not numbered. */
            const box = make("aside", "passage-box");
            const body = make("p", "para-body");
            para.forEach((sx, si) => {
              const span = make("span", "sent", si === 0 ? sx.replace(/^Box: /, "") : sx);
              span.dataset.ref = p.id + ":" + (k + 1) + ":" + (si + 1);
              body.appendChild(span);
              if (si < para.length - 1) body.appendChild(document.createTextNode(" "));
            });
            box.appendChild(body); art.appendChild(box); return;
          }
          n++;
          const row = make("div", "para" + (p.draft ? " no-num" : ""));
          if (!p.draft) row.appendChild(make("span", "para-no", String(n)));
          const body = make("p", "para-body");
          para.forEach((s, si) => {
            const span = make("span", "sent", s);
            span.dataset.ref = p.id + ":" + (k + 1) + ":" + (si + 1);
            body.appendChild(span);
            if (si < para.length - 1) body.appendChild(document.createTextNode(" "));
          });
          row.appendChild(body);
          art.appendChild(row);
        });
      }
      host.appendChild(art);
    });
    const tg = el("clue-toggle");
    if (tg && !hostEl) {
      /* clue words help in practice; the test stays unaided */
      const n = set.clueWords && run.mode !== "test" ? addClueMarks(host, set.clueWords) : 0;
      tg.hidden = !n;
      el("passage-pane").classList.remove("show-clues");
      tg.setAttribute("aria-pressed", "false");
      tg.textContent = "Show clue words";
    }
  }
  /* Clue words (text structure): wrap each clue word in the passage so the
     "Show clue words" button can highlight them. Matching is whole-word and
     ignores case; longer phrases are matched first. */
  function esc(t) { return String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]); }
  function addClueMarks(host, words) {
    const list = words.slice().sort((a, b) => b.length - a.length).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const re = new RegExp("\\b(" + list.join("|") + ")\\b", "gi");
    let found = 0;
    Array.from(host.querySelectorAll(".sent")).forEach(sp => {
      const t = sp.textContent;
      if (!re.test(t)) return; re.lastIndex = 0;
      sp.innerHTML = esc(t).replace(re, m => { found++; return '<mark class="clue-w">' + m + "</mark>"; });
    });
    return found;
  }
  function markSelected(refs) {
    Array.from(document.querySelectorAll("#passage-pane-body .sent")).forEach(s => {
      s.classList.toggle("is-selected", refs.indexOf(s.dataset.ref) >= 0);
    });
  }
  function flash(ref) {
    const s = document.querySelector('#passage-pane-body .sent[data-ref="' + ref + '"]');
    if (!s) return;
    if (window.matchMedia("(min-width: 980px)").matches) s.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  /* ---------- phone tabs ---------- */
  function showPane(which) {
    const grid = el("player-grid");
    grid.dataset.pane = which;
    el("tab-passage").setAttribute("aria-selected", which === "passage" ? "true" : "false");
    el("tab-question").setAttribute("aria-selected", which === "question" ? "true" : "false");
  }

  /* ---------- one question ---------- */
  function ctxFor(i) {
    if (!run.ctxs[i]) {
      const item = run.set.items[i];
      run.ctxs[i] = { item, set: run.set, resp: T[item.type].blank(item), ui: {}, locked: false,
                      onChange: onChange };
      run.state[i] = { help: 0, wrong: 0, solved: false, firstTry: null };
    }
    return run.ctxs[i];
  }

  function renderItem() {
    const i = run.pos, item = run.set.items[i], ctx = ctxFor(i), st = run.state[i];
    const total = run.set.items.length;
    el("q-count").textContent = "Question " + (i + 1) + " of " + total;
    el("q-points").textContent = item.points === 2 ? "2 points" : "1 point";
    el("q-bar").style.width = Math.round((i / total) * 100) + "%";
    el("q-prompt").textContent = item.prompt;
    const host = el("q-body");
    clear(host);
    /* item.stem: a short text the child reads for this question (a
       mini-passage, a dictionary entry, sentences to compare). Shown in
       its own box so it never runs into the question. */
    if (item.stem) {
      const box = make("div", "q-stem");
      (Array.isArray(item.stem) ? item.stem : [item.stem]).forEach(t => {
        const c = /^Cursive: /.test(t);   /* reading cursive (3.F.H.3) */
        box.appendChild(make("p", c ? "cursive" : "", c ? t.replace(/^Cursive: /, "") : t));
      });
      host.appendChild(box);
    }
    ctx.host = host;
    ctx.ui = Object.assign({}, { fixed: ctx.ui.fixed, fixedRow: ctx.ui.fixedRow, aLocked: ctx.ui.aLocked });
    ctx.locked = run.mode === "practice" && st.solved;
    T[item.type].render(ctx);
    /* re-apply help state after a re-render (e.g. coming Back) */
    if (run.mode === "practice") {
      clear(el("q-help-steps"));
      (st.helpLog || []).forEach(h => addHelp(h.label, h.text));
      if (st.help >= 3) T[item.type].outline(ctx);
    } else clear(el("q-help-steps"));
    if (item.type !== "hottext") markSelected([]);
    /* Multi-passage forms (the Practice Test): show only the passage(s)
       this question is about. item.passages = ["p2"] or [] for none. */
    if (Array.isArray(item.passages)) {
      Array.from(document.querySelectorAll("#passage-pane-body .passage")).forEach(a => {
        a.hidden = item.passages.indexOf(a.dataset.pid) < 0;
      });
      el("player-grid").classList.toggle("no-passage", !item.passages.length);
      el("tabs").hidden = !item.passages.length;
      const key = item.passages.join(",");
      if (!item.passages.length) showPane("question");
      else if (key !== run.lastPassages) {
        /* a new passage starts: show it first, with a note, so a phone user doesn't miss it */
        showPane("passage");
        el("passage-note").hidden = false;
        el("passage-note").textContent = window.matchMedia("(min-width: 980px)").matches
          ? "New passage. Read it before you answer." : "New passage. Read it, then tap Question.";
        el("passage-pane").scrollTop = 0;
        run.focusNote = true;
      } else el("passage-note").hidden = true;
      run.lastPassages = key;
    }
    setFeedback(st.fb || null);
    syncControls();
    if (run.focusNote) { run.focusNote = false; el("passage-note").focus(); }
    else el("q-prompt").focus();
    window.scrollTo(0, 0);
  }

  function onChange() {
    const st = run.state[run.pos];
    if (run.mode === "practice" && !st.solved && st.fb && st.fb.kind !== "help") setFeedback(null);
    syncControls();
  }

  function setFeedback(fb) {
    const st = run.state[run.pos];
    st.fb = fb;
    const box = el("q-feedback");
    clear(box);
    box.className = "feedback";
    if (!fb) { box.hidden = true; return; }
    box.hidden = false;
    box.classList.add("is-" + fb.kind);
    box.appendChild(make("span", "fb-label", fb.label));
    box.appendChild(make("span", "fb-text", fb.text));
  }

  function addHelp(label, text) {
    const p = make("p", "help-step");
    p.appendChild(make("span", "fb-label", label));
    p.appendChild(make("span", "help-text", text));
    el("q-help-steps").appendChild(p);
  }

  function syncControls() {
    const i = run.pos, item = run.set.items[i], ctx = ctxFor(i), st = run.state[i];
    const answered = T[item.type].answered(item, ctx.resp);
    const last = i === run.set.items.length - 1;
    el("q-prev").hidden = run.mode === "practice";
    el("q-prev").disabled = i === 0;
    if (run.mode === "practice") {
      el("q-help").hidden = st.solved || (run.tryMode && st.wrong < 1 && st.help < 1);
      el("q-help").disabled = st.help >= 3;
      el("q-help").textContent = st.help === 0 ? "Help me" : st.help < 3 ? "Help me (next step)" : "Help me";
      el("q-check").hidden = st.solved;
      el("q-check").disabled = !answered;
      el("q-next").hidden = !st.solved;
      el("q-next").textContent = last ? "Finish" : "Next question";
    } else {
      el("q-help").hidden = true;
      el("q-check").hidden = true;
      el("q-next").hidden = false;
      el("q-next").disabled = false;            /* skipping is allowed, like the real test */
      el("q-next").textContent = last ? "Finish" : "Next";
    }
  }

  /* ---------- practice actions ---------- */
  function help() {
    const i = run.pos, item = run.set.items[i], ctx = ctxFor(i), st = run.state[i];
    if (st.help >= 3 || st.solved) return;
    st.help++;
    st.helpLog = st.helpLog || [];
    let label, text;
    if (st.help === 1) { label = "Hint 1 of 3"; text = item.clue; }
    else if (st.help === 2) { label = "Hint 2 of 3"; text = T[item.type].narrow(ctx); }
    else { label = "Let's walk through it"; text = item.why + " Now you choose it."; T[item.type].outline(ctx); }
    st.helpLog.push({ label, text });
    addHelp(label, text);
    syncControls();
  }

  function check() {
    const i = run.pos, item = run.set.items[i], ctx = ctxFor(i), st = run.state[i];
    if (!T[item.type].answered(item, ctx.resp)) return;
    const sc = T[item.type].score(item, ctx.resp);
    if (st.firstTry === null) st.firstTry = sc.points === sc.max && st.help === 0;
    if (sc.points === sc.max) {
      st.solved = true; ctx.locked = true;
      setFeedback({ kind: "right", label: "That's right!", text: item.why });
      renderLockedState(ctx);
    } else {
      st.wrong++;
      const pn = T[item.type].partialNote ? T[item.type].partialNote(item, ctx.resp) : "";
      const part = sc.points > 0 ? "You got part of it (" + sc.points + " of " + sc.max + " points). " + (pn ? pn + " " : "") : "";
      if (st.wrong >= 3 && st.help < 3) {
        while (st.help < 3) help();
        setFeedback({ kind: "try", label: "Let's find it together", text: part + "Read the walk-through above, then try again." });
      } else {
        setFeedback({ kind: "try", label: "Not quite", text: part + (run.tryMode && st.wrong === 1 ? "Try again. Help me is now on if you need a hint." : "Try again, or press Help me for a hint.") });
      }
    }
    syncControls();
  }

  function renderLockedState(ctx) {
    /* lock every control in the question body */
    Array.from(ctx.host.querySelectorAll("button, select")).forEach(b => { b.disabled = true; });
    Array.from(ctx.host.querySelectorAll(".is-hint")).forEach(b => b.classList.remove("is-hint"));
  }

  /* ---------- navigation ---------- */
  function next() {
    const last = run.pos === run.set.items.length - 1;
    if (last) { finish(); return; }
    run.pos++; renderItem();
  }
  function prev() { if (run.pos > 0) { run.pos--; renderItem(); } }

  function finish() {
    if (run.mode === "practice") return practiceDone();
    const blank = run.set.items.map((it, i) => ctxFor(i)).filter(c => !T[c.item.type].answered(c.item, c.resp)).length;
    el("confirm-line").textContent = blank
      ? "You left " + blank + " question" + (blank > 1 ? "s" : "") + " blank or not finished. You can go back and check, or turn in your test."
      : "You answered every question. You can go back and check, or turn in your test.";
    showStage("confirm");
    el("confirm-title").focus();
  }

  function showStage(name) {
    ["work", "confirm", "results", "done"].forEach(s => { el("stage-" + s).hidden = s !== name; });
    if (name !== "work") el("tabs").hidden = true;
    else el("tabs").hidden = !run.set.passages.length;
    el("player-grid").classList.toggle("is-full", name !== "work");
    window.scrollTo(0, 0);
  }

  function practiceDone() {
    const n = run.set.items.length;
    const first = run.state.filter(s => s && s.firstTry).length;
    const skill = run.set.kind === "skill";
    if (skill) window.PP_SKILLS.recordPractice(run.set.code, run.set.part);
    const nx = skill && run.set.next;
    el("done-line").textContent = "You finished all " + n + " questions. You got " + first + " of " + n +
      " right on your first try without help. Asking for help is never a mistake; it is how you learn." +
      (nx ? (nx.mode === "test" ? " When you are ready, take the skill test." : " Next, try some on your own.") : "");
    el("done-test").hidden = skill && !nx;
    el("done-test").textContent = nx ? nx.label : "Try it as a test";
    el("done-back").textContent = skill ? "Back to the skill" : "Back to the list";
    showStage("done");
    el("done-title").focus();
  }

  /* ---------- test scoring and review ---------- */
  const SKILL = {
    "3.T.C": "Purpose, audience and perspective", "3.T.SS": "Structure, text features and figurative language",
    "3.T.T.1": "Stories: characters, plot and message", "3.T.T.2": "Informational texts: main idea and details",
    "3.T.T.3": "Opinion texts", "3.T.T.4": "Poetry", "3.T.RA": "Using evidence and sources",
    "3.L.GC": "Grammar and conventions", "3.L.V": "Vocabulary", "3.F": "Foundations"
  };
  function skillOf(code) {
    const c = String(code || "");
    const keys = Object.keys(SKILL).sort((a, b) => b.length - a.length);
    const k = keys.find(k => c.indexOf(k) === 0);
    return k ? SKILL[k] : "Other";
  }

  function submit() {
    run.submitted = true;
    const rows = run.set.items.map((item, i) => {
      const ctx = ctxFor(i);
      const sc = T[item.type].score(item, ctx.resp);
      return { i, item, sc, resp: ctx.resp };
    });
    const got = rows.reduce((a, r) => a + r.sc.points, 0);
    const max = rows.reduce((a, r) => a + r.sc.max, 0);
    el("res-score").textContent = String(got);
    el("res-of").textContent = "of " + max + " points";
    el("res-score-box").setAttribute("aria-label", "You scored " + got + " of " + max + " points.");
    const by = {};
    rows.forEach(r => {
      const k = skillOf((r.item.std || [])[0]);
      by[k] = by[k] || { got: 0, max: 0 }; by[k].got += r.sc.points; by[k].max += r.sc.max;
    });
    const host = el("res-skills"); clear(host);
    Object.keys(by).forEach(k => {
      const row = make("div", "skill-row");
      row.appendChild(make("span", "skill-name", k));
      row.appendChild(make("span", "skill-score", by[k].got + " of " + by[k].max));
      const bar = make("span", "skill-bar"); const fill = make("span", "skill-fill");
      fill.style.width = (by[k].max ? Math.round(100 * by[k].got / by[k].max) : 0) + "%";
      bar.appendChild(fill); row.appendChild(bar);
      host.appendChild(row);
    });
    const pct = max ? got / max : 0;
    el("res-guidance").textContent = run.set.kind === "skill" ? window.PP_SKILLS.afterTest(run.set, got, max)
      : pct >= 0.85 ? "Excellent work. You are ready for harder sets."
      : pct >= 0.6 ? "Good work. Practice the questions you missed, then try again."
      : "Keep going. Try this set in Practice mode, where Help me walks you through each question.";
    el("res-skills").hidden = run.set.kind === "skill";
    buildReview(rows);
    el("res-practice").hidden = run.set.kind === "form" || (run.set.kind === "skill" && !run.set.practiceId);
    el("res-back").textContent = run.set.kind === "skill" ? "Back to the skill" : "Back to the list";
    showStage("results");
    el("res-title").focus();
  }

  function buildReview(rows) {
    const host = el("res-review"); clear(host); host.hidden = true;
    el("res-review-btn").textContent = "See my answers";
    rows.forEach(r => {
      const it = r.item, full = r.sc.points === r.sc.max;
      const box = make("div", "review-item" + (full ? " is-right" : ""));
      const head = make("p", "review-head");
      head.appendChild(make("span", "review-n", String(r.i + 1)));
      head.appendChild(make("span", "review-q", it.prompt));
      head.appendChild(make("span", "review-pts", r.sc.points + " of " + r.sc.max));
      box.appendChild(head);
      box.appendChild(make("p", "review-yours", "You answered: " + T[it.type].describe(it, r.resp, run.set)));
      if (full) box.appendChild(make("p", "review-why", it.why));
      else {
        const ans = make("p", "review-answer", "The answer: " + T[it.type].answerText(it, run.set));
        ans.hidden = true;
        const out = make("div", "show-how-steps");
        out.setAttribute("aria-live", "polite");
        const b = make("button", "btn btn-soft show-how", "Show me how");
        b.type = "button";
        let step = 0;
        b.addEventListener("click", () => {
          step++;
          const p = make("p", "help-step");
          const txt = step === 1 ? it.clue : step === 2 ? T[it.type].narrowText(it, r.resp, run.set) : it.why;
          p.appendChild(make("span", "fb-label", step < 3 ? "Hint " + step + " of 3" : "The walk-through"));
          p.appendChild(make("span", "help-text", txt));
          out.appendChild(p);
          if (step >= 3) { b.disabled = true; ans.hidden = false; }
          else b.textContent = "Show me how (next step)";
        });
        box.appendChild(b); box.appendChild(out); box.appendChild(ans);
      }
      host.appendChild(box);
    });
  }

  /* ---------- start ---------- */
  function start(setId, mode) {
    const set = PP.byId[setId];
    if (!set) return;
    const switching = window.PP_APP.current() === "player";
    if (!switching) window.PP_APP.rememberReturn();
    else if (!window.PP_APP.canLeave()) return;
    run.submitted = false;
    run.set = set; run.mode = mode === "test" ? "test" : "practice";
    run.tryMode = mode === "try";
    run.pos = 0; run.ctxs = []; run.state = [];
    el("player-title").textContent = set.title;
    el("player-mode").textContent = run.mode === "test" ? "Test" : run.tryMode ? "Try it yourself" : "Practice";
    el("screen-player").dataset.mode = run.mode;
    el("screen-player").dataset.section = set.section;
    renderPassages(set);
    showStage("work");
    showPane(set.passages.length ? "passage" : "question");
    el("player-grid").classList.toggle("no-passage", !set.passages.length);
    el("tabs").hidden = !set.passages.length;
    run.lastPassages = null;
    el("passage-note").hidden = true;
    renderItem();
    window.PP_APP.show("player");
    /* practice -> test inside the player replaces the history entry, so Back
       returns to where the activity was opened from in one press */
    window.PP_APP.setHash("#play/" + set.id + "/" + (run.tryMode ? "try" : run.mode), switching);
    window.PP_APP.track();
    el("player-title").focus();
  }
  /* A test counts as in progress from the first answer until it is turned in. */
  function inProgress() {
    if (run.mode !== "test" || run.submitted || !run.set) return false;
    return run.ctxs.some((c, i) => c && T[c.item.type].answered(c.item, c.resp)) ||
      run.ctxs.some(c => c && JSON.stringify(c.resp) !== JSON.stringify(T[c.item.type].blank(c.item)));
  }
  function abandon() { run.submitted = true; }

  function init() {
    el("q-help").addEventListener("click", help);
    el("q-check").addEventListener("click", check);
    el("q-next").addEventListener("click", next);
    el("q-prev").addEventListener("click", prev);
    el("tab-passage").addEventListener("click", () => showPane("passage"));
    el("tab-question").addEventListener("click", () => showPane("question"));
    el("clue-toggle").addEventListener("click", () => {
      const on = el("passage-pane").classList.toggle("show-clues");
      el("clue-toggle").setAttribute("aria-pressed", on ? "true" : "false");
      el("clue-toggle").textContent = on ? "Hide clue words" : "Show clue words";
    });
    el("confirm-back").addEventListener("click", () => { showStage("work"); renderItem(); });
    el("confirm-submit").addEventListener("click", submit);
    el("res-review-btn").addEventListener("click", () => {
      const r = el("res-review"); r.hidden = !r.hidden;
      el("res-review-btn").textContent = r.hidden ? "See my answers" : "Hide my answers";
    });
    el("res-again").addEventListener("click", () => start(run.set.id, "test"));
    /* a skill's practice and test are two different question sets */
    el("res-practice").addEventListener("click", () => start((run.set.kind === "skill" && run.set.practiceId) || run.set.id, "practice"));
    el("done-test").addEventListener("click", () => {
      const nx = run.set.kind === "skill" && run.set.next;
      if (nx) start(nx.id, nx.mode); else start(run.set.id, "test");
    });
    ["res-back", "done-back"].forEach(id => el(id).addEventListener("click", () => window.PP_APP.back()));
  }

  window.PP_PLAYER = {
    init, start, flash, markSelected, renderPassages, inProgress, abandon,
    state: () => ({ setId: run.set && run.set.id, section: run.set && run.set.section, mode: run.mode, pos: run.pos, total: run.set ? run.set.items.length : 0,
                    help: run.state.map(s => s && s.help), solved: run.state.map(s => s && s.solved) }),
    ctx: i => ctxFor(i === undefined ? run.pos : i)
  };
})();

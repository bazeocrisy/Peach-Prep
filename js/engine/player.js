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

  /* ---------- figures and bold words (docs/SPEC.md §5e) ----------
     rich(): "**word**" in passage, stem and lesson text shows as bold.
     figure(): an original image (SVG under assets/figures/) with required
     alt text, an optional "Figure 1" label and an optional caption. */
  function rich(node, text) {
    String(text).split(/\*\*([^*]+)\*\*/).forEach((part, i) => {
      if (!part) return;
      node.appendChild(i % 2 ? make("strong", "pp-bold", part) : document.createTextNode(part));
    });
    return node;
  }
  function figure(f) {
    const fig = make("figure", "pp-figure");
    const img = make("img", "pp-fig-img");
    img.src = f.src; img.alt = f.alt || "";
    if (f.width) img.style.maxWidth = f.width + "px";
    fig.appendChild(img);
    if (f.label || f.caption) {
      const cap = make("figcaption", "pp-fig-cap");
      if (f.label) cap.appendChild(make("strong", "pp-fig-label", f.label + (f.caption ? ". " : "")));
      if (f.caption) rich(cap, f.caption);
      fig.appendChild(cap);
    }
    return fig;
  }
  function figures(host, list) { [].concat(list || []).forEach(f => host.appendChild(figure(f))); }
  /* PP-004 U-1: a text-box feature ("Box: ") in a passage or a Watch Me example.
     The tint alone told a sighted reader it is a text box (WCAG 1.3.1), and a scored
     item asks about "the text box", so it is named for screen readers too: role=note
     with the name "Text box", plus a hidden "Text box:" lead-in that every reader
     speaks in reading order. Returns the aside; the text goes in its p.para-body. */
  function textBox() {
    const box = make("aside", "passage-box");
    box.setAttribute("role", "note"); box.setAttribute("aria-label", "Text box");
    const body = make("p", "para-body");
    body.appendChild(make("span", "sr", "Text box: "));
    box.appendChild(body);
    return box;
  }
  /* PP-004 U-4: after new content appears above a focused button, scroll the least
     needed so that the new content's top and the next action's bottom are both on
     screen, below any sticky bar. If both do not fit, the top of the new content wins. */
  function reveal(topEl, bottomEl) {
    if (!topEl || !bottomEl) return;
    const m = 12, vh = window.innerHeight;
    let bar = 0;
    document.querySelectorAll(".steps").forEach(s => {
      if (s.offsetParent && getComputedStyle(s).position === "sticky") bar = Math.max(bar, s.getBoundingClientRect().bottom);
    });
    const t = topEl.getBoundingClientRect().top, bo = bottomEl.getBoundingClientRect().bottom;
    let dy = 0;
    if (bo > vh - m) dy = bo - (vh - m);
    if (t - dy < bar + m) dy = t - (bar + m);
    if (Math.abs(dy) >= 1) window.scrollBy(0, Math.round(dy));
  }
  PP.rich = rich; PP.figure = figure; PP.figures = figures; PP.textBox = textBox; PP.reveal = reveal;

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
        /* p.figures: [{ after: k, ... }] sits after raw block k (0 = before the
           first block). Figures are not paragraphs, so refs and numbers stay put. */
        const figsAfter = k => figures(art, (p.figures || []).filter(f => (f.after || 0) === k));
        p.paragraphs.forEach((para, k) => {
          figsAfter(k);
          const first = para[0] || "";
          if (isHeading(first)) { art.appendChild(make("h4", "passage-heading", first.replace(/^## /, ""))); return; }
          if (isCaption(first)) { art.appendChild(make("p", "passage-caption", first.replace(/^Caption: /, ""))); return; }
          if (isBox(first)) {
            /* A text-box feature (e.g. "Did You Know?"): set apart, not numbered. */
            const box = textBox();   /* PP-004 U-1: named "Text box" for screen readers */
            const body = box.lastChild;
            para.forEach((sx, si) => {
              const span = rich(make("span", "sent"), si === 0 ? sx.replace(/^Box: /, "") : sx);
              span.dataset.ref = p.id + ":" + (k + 1) + ":" + (si + 1);
              body.appendChild(span);
              if (si < para.length - 1) body.appendChild(document.createTextNode(" "));
            });
            art.appendChild(box); return;
          }
          n++;
          const row = make("div", "para" + (p.draft ? " no-num" : ""));
          if (!p.draft) row.appendChild(make("span", "para-no", String(n)));
          const body = make("p", "para-body");
          para.forEach((s, si) => {
            const span = rich(make("span", "sent"), s);
            span.dataset.ref = p.id + ":" + (k + 1) + ":" + (si + 1);
            body.appendChild(span);
            if (si < para.length - 1) body.appendChild(document.createTextNode(" "));
          });
          row.appendChild(body);
          art.appendChild(row);
        });
        figsAfter(p.paragraphs.length);
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
      if (sp.children.length) return;   /* keep bold words intact (no clue marks in that sentence) */
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
    el("q-bar").style.width = Math.round(((i + 1) / total) * 100) + "%";   /* PP-004 U-6.6: matches "Question i of n", so the last question shows 100% */
    el("q-prompt").textContent = item.prompt;
    const host = el("q-body");
    clear(host);
    /* item.stem: a short text the child reads for this question (a
       mini-passage, a dictionary entry, sentences to compare). Shown in
       its own box so it never runs into the question. */
    if (item.stem || item.figure) {
      const box = make("div", "q-stem");
      [].concat(item.stem || []).forEach(t => {
        const c = /^Cursive: /.test(t);   /* reading cursive (3.F.H.3) */
        box.appendChild(c ? make("p", "cursive", t.replace(/^Cursive: /, "")) : rich(make("p", ""), t));
      });
      figures(box, item.figure);   /* item.figure: a picture this question is about */
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

  /* PP-003 RD-6: #q-feedback is the visible box only. The words are spoken from
     #q-say, a polite live region that is always in the page, filled a moment
     after the box appears (and after any focus move to Next), so the verdict is
     not lost when the region and its text appear in the same tick. */
  let sayTimer = null;
  function say(text) {
    const live = el("q-say"); if (!live) return;
    clearTimeout(sayTimer); live.textContent = "";
    if (text) sayTimer = setTimeout(() => { live.textContent = text; }, 150);
  }
  function setFeedback(fb) {
    const st = run.state[run.pos];
    const same = st.fb === fb;
    st.fb = fb;
    const box = el("q-feedback");
    clear(box);
    box.className = "feedback";
    if (!fb) { box.hidden = true; say(""); return; }
    box.hidden = false;
    box.classList.add("is-" + fb.kind);
    box.appendChild(make("span", "fb-label", fb.label));
    box.appendChild(make("span", "fb-text", fb.text));
    if (!same) say(fb.label + " " + fb.text);
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
    /* PP-003 D11: the hint answers "press Help me", so that line goes */
    if (st.fb && st.fb.kind === "try") setFeedback(null);
    const hadFocus = document.activeElement === el("q-help");
    syncControls();
    /* the last hint disables Help me; keep keyboard focus on the hint, not on <body> */
    if (hadFocus && el("q-help").disabled) {
      const last = el("q-help-steps").lastElementChild;
      if (last) { last.tabIndex = -1; last.focus(); }
    }
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
    /* PP-003 D7: a right answer hides Check, which had focus; move focus to Next
       (the feedback above it is a live region, so it is still read out) */
    if (st.solved) el("q-next").focus();
    /* PP-004 U-4b: a wrong answer adds "Not quite" above Check and Help me, which can push
       them (and focus) below the screen: keep the feedback and the next action in view */
    else reveal(el("q-feedback"), el("q-check").parentElement);
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
    const noun = run.set.kind === "skill" ? "skill check" : "test";
    const blank = run.set.items.map((it, i) => ctxFor(i)).filter(c => !T[c.item.type].answered(c.item, c.resp)).length;
    el("confirm-line").textContent = blank
      ? "You left " + blank + " question" + (blank > 1 ? "s" : "") + " blank or not finished. You can go back and check, or turn in your " + noun + "."
      : "You answered every question. You can go back and check, or turn in your " + noun + ".";
    el("confirm-submit").textContent = "Turn in my " + noun;
    showStage("confirm");
    el("confirm-title").focus();
  }

  function showStage(name) {
    ["work", "confirm", "results", "done", "again"].forEach(s => { el("stage-" + s).hidden = s !== name; });
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
      (nx ? (nx.mode === "test" ? " When you are ready, take the skill check." : " Next, try some on your own.") : "");
    el("done-test").hidden = skill && !nx;
    el("done-test").textContent = nx ? nx.label : "Try it as a test";
    el("done-back").textContent = skill ? "Back to the skill" : "Back to the list";
    window.PP_APP.markDone({ set: run.set.id, mode: run.tryMode ? "try" : "practice", n, first });
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
    /* An item counts under every area its codes belong to (once per area), so a
       question that is also tagged for evidence (3.T.RA) shows up under
       "Using evidence and sources" too. Areas can therefore overlap. */
    const by = {};
    let multi = false;
    rows.forEach(r => {
      const areas = (r.item.std || []).map(skillOf).filter((k, i, a) => a.indexOf(k) === i);
      if (!areas.length) areas.push("Other");
      if (areas.length > 1) multi = true;
      areas.forEach(k => { by[k] = by[k] || { got: 0, max: 0 }; by[k].got += r.sc.points; by[k].max += r.sc.max; });
    });
    const host = el("res-skills"); clear(host);
    if (run.set.kind === "form") {
      const n = rows.length;
      host.appendChild(make("p", "note", "This was a shortened practice test: " + n + " questions and " + max + " points, with no essay. " +
        "The real Grade 3 test has 60 points, including an 8-point essay. This is a practice score, not a Georgia Milestones score."));
    }
    if (multi) host.appendChild(make("p", "note", "Some questions check two areas, so they count in each one. The area scores add up to more than the total."));
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
    /* PP-003 RD-10: a skill's button opens Practice Together, so it says so; the lesson check is a "skill check" */
    el("res-practice").textContent = run.set.kind === "skill" ? "Practice Together" : "Practice this set";
    el("res-again").textContent = run.set.kind === "skill" ? "Take the skill check again" : "Take the test again";
    el("res-back").textContent = run.set.kind === "skill" ? "Back to the skill" : "Back to the list";
    /* PP-003 D17: after a passed skill check, lead with Back to the skill, not more practice */
    const passed = run.set.kind === "skill" && got >= Math.ceil(max * 0.8);
    const acts = el("res-back").parentNode;
    if (passed) acts.insertBefore(el("res-back"), acts.firstChild); else acts.appendChild(el("res-back"));
    el("res-back").classList.toggle("btn-primary", passed); el("res-back").classList.toggle("btn-soft", !passed);
    el("res-practice").classList.toggle("btn-primary", !passed); el("res-practice").classList.toggle("btn-soft", passed);
    window.PP_APP.markDone({ set: run.set.id, mode: "test", got, max });
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
          if (step >= 3) {
            /* PP-003 RD-3: the button is now disabled; move focus to the answer it revealed */
            const had = document.activeElement === b;
            b.disabled = true; ans.hidden = false;
            if (had) { ans.tabIndex = -1; ans.focus(); }
          }
          else b.textContent = "Show me how (next step)";
        });
        box.appendChild(b); box.appendChild(out); box.appendChild(ans);
      }
      host.appendChild(box);
    });
  }

  /* ---------- start ---------- */
  /* A skill's sets run only in their own mode. The check (:t) is always a test
     (closes #play/SK:<k>:t/practice). Practice Together (:p) and Try It Yourself (:y)
     are never a test (PP-003 RD-4: #play/SK:<k>:p/test ran practice items as a scored
     check and stored a pass), so a "test" address runs them as practice or try. */
  function skillMode(set, mode) {
    if (set.kind !== "skill") return mode;
    if (set.part === "t" || set.part === "tB") return "test";   /* PP-004: form B is a check too */
    if (mode === "test") return set.part === "y" ? "try" : "practice";
    return mode;
  }
  /* PP-004: the site's own "take the check" buttons ask skills.js which form is next.
     An address that names a form (#play/SK:<k>:tB/test) runs that form; the attempt
     log records whichever form was actually taken. */
  const isCheck = set => !!set && set.kind === "skill" && (set.part === "t" || set.part === "tB");
  const checkFor = set => (window.PP_SKILLS.checkSetId ? window.PP_SKILLS.checkSetId(set.code) : set.id);
  function start(setId, mode) {
    const set = PP.byId[setId];
    if (!set) return;
    const switching = window.PP_APP.current() === "player";
    if (!switching) window.PP_APP.rememberReturn();
    else if (!window.PP_APP.canLeave()) return;
    run.submitted = false;
    /* a skill's check items only ever run as a check: no hints, never recorded as practice
       (closes #play/SK:<k>:t/practice, PP-003) */
    mode = skillMode(set, mode);
    run.set = set; run.mode = mode === "test" ? "test" : "practice";
    run.tryMode = mode === "try";
    run.pos = 0; run.ctxs = []; run.state = [];
    el("player-title").textContent = set.title;
    el("player-mode").textContent = run.mode === "test" ? (set.kind === "skill" ? "Skill check" : "Test") : run.tryMode ? "Try it yourself" : "Practice";
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
  /* PP-003 D5: Forward or a reload onto a practice or test that was already
     finished. Say so and offer to start again; never restart silently.
     Nothing is recorded here. */
  function finished(setId, mode, info) {
    const set = PP.byId[setId];
    if (!set) return;
    if (window.PP_APP.current() !== "player") window.PP_APP.rememberReturn();
    mode = skillMode(set, mode);
    run.set = set; run.mode = mode === "test" ? "test" : "practice";
    run.tryMode = mode === "try";
    run.pos = 0; run.ctxs = []; run.state = []; run.submitted = true;
    el("player-title").textContent = set.title;
    el("player-mode").textContent = run.mode === "test" ? (set.kind === "skill" ? "Skill check" : "Test") : run.tryMode ? "Try it yourself" : "Practice";
    el("screen-player").dataset.mode = run.mode;
    el("screen-player").dataset.section = set.section;
    const skill = set.kind === "skill";
    const test = run.mode === "test";
    const scored = typeof info.got === "number" && typeof info.max === "number";
    el("again-title").textContent = test ? (skill ? "You already turned in this skill check" : "You already turned in this test") : "You already finished this practice";
    el("again-line").textContent = test
      ? (scored ? "Your score was " + info.got + " of " + info.max + " points. " : "") +
        (skill && scored ? (info.got >= Math.ceil(info.max * 0.8) ? "That was a pass. " : "That was not a pass yet. Practice first, then try again. ") : "") +
        (skill ? "Your skill page keeps your best score. " : "") + "Starting again begins a new " + (skill ? "skill check" : "test") + " at question 1."
      : "Starting again begins at question 1." + (skill ? " Your skill page shows that you finished it." : "");
    el("again-start").textContent = test ? (skill ? "Take the skill check again" : "Take the test again") : "Start the practice again";
    el("again-back").textContent = skill ? "Back to the skill" : "Back to the list";
    showStage("again");
    window.PP_APP.show("player");
    window.PP_APP.track();
    el("again-title").focus();
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
    PP.tablist(el("tabs"));
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
      /* the review shows these check questions' answers: note it, so a later pass can say so (PP-003) */
      if (!r.hidden && run.set && run.set.kind === "skill" && run.mode === "test") window.PP_SKILLS.answersSeen(run.set.code, run.set.part === "tB" ? "B" : "A");
    });
    el("res-again").addEventListener("click", () => start(isCheck(run.set) ? checkFor(run.set) : run.set.id, "test"));
    /* a skill's practice and test are two different question sets */
    el("res-practice").addEventListener("click", () => start((run.set.kind === "skill" && run.set.practiceId) || run.set.id, "practice"));
    el("done-test").addEventListener("click", () => {
      const nx = run.set.kind === "skill" && run.set.next;
      if (nx) start(nx.mode === "test" && isCheck(PP.byId[nx.id]) ? checkFor(PP.byId[nx.id]) : nx.id, nx.mode); else start(run.set.id, "test");
    });
    el("again-start").addEventListener("click", () => start(isCheck(run.set) ? checkFor(run.set) : run.set.id, run.mode === "test" ? "test" : run.tryMode ? "try" : "practice"));
    ["res-back", "done-back", "again-back"].forEach(id => el(id).addEventListener("click", () => window.PP_APP.back()));
  }

  window.PP_PLAYER = {
    init, start, finished, flash, markSelected, renderPassages, inProgress, abandon,
    state: () => ({ setId: run.set && run.set.id, section: run.set && run.set.section, mode: run.mode, pos: run.pos, total: run.set ? run.set.items.length : 0,
                    help: run.state.map(s => s && s.help), solved: run.state.map(s => s && s.solved) }),
    ctx: i => ctxFor(i === undefined ? run.pos : i)
  };
})();

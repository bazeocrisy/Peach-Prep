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
      if (run.own) hydrate(run.ctxs[i], run.state[i], window.PP_PRACTICE.rec(run.set.code, item.id, false));
    }
    return run.ctxs[i];
  }
  /* The item on screen: a core item, or an extra (similar) question shown in its place. */
  function C() {
    if (run.sim) return run.sim;
    const i = run.pos; const ctx = ctxFor(i);
    return { item: run.set.items[i], ctx, st: run.state[i] };
  }

  /* ---------- Practice on my own (expansion 2026-10-22, 01-architecture.md §2.2) ----------
     Saved in pp.practice.v1 by js/practice.js after each child action: the response (engine index
     space), the choice order, wrong checks, hints, Show me how, and the place. Resume restores them;
     a damaged saved response is ignored, never trusted. */
  const isInt = (v, n) => Number.isInteger(v) && v >= 0 && v < n;
  const uniq = a => new Set(a).size === a.length;
  const perm = (a, n) => Array.isArray(a) && a.length === n && uniq(a) && a.every(x => isInt(x, n));
  function saneResp(item, r) {
    if (!r || typeof r !== "object" || Array.isArray(r)) return false;
    try {
      switch (item.type) {
        case "mc": return r.v === null || isInt(r.v, item.choices.length);
        case "ms": return Array.isArray(r.v) && uniq(r.v) && r.v.every(x => isInt(x, item.choices.length));
        case "ebsr": return (r.a === null || isInt(r.a, item.partA.choices.length)) && Array.isArray(r.b) && uniq(r.b) && r.b.every(x => isInt(x, item.partB.choices.length));
        case "dropdown": return Array.isArray(r.v) && r.v.length === item.slots.length && r.v.every((x, k) => x === null || isInt(x, item.slots[k].options.length));
        case "hottext": { const t = item.options ? item.options.map((o, i) => "opt:" + i) : (item.targets || []); return Array.isArray(r.v) && uniq(r.v) && r.v.every(x => t.indexOf(x) >= 0); }
        case "order": return Array.isArray(r.v) && uniq(r.v) && r.v.every(x => isInt(x, item.steps.length));
        case "match": return Array.isArray(r.v) && r.v.length === item.rows.length && r.v.every(x => x === null || isInt(x, item.cols.length));
        case "cr": return typeof r.text === "string";
      }
    } catch (e) { return false; }
    return false;
  }
  function saneOrd(item, o) {
    const out = {};
    if (!o || typeof o !== "object") return out;
    const n = item.choices ? item.choices.length : item.steps ? item.steps.length : 0;
    if (perm(o.order, n)) out.order = o.order.slice();
    if (item.partA && perm(o.orderA, item.partA.choices.length)) out.orderA = o.orderA.slice();
    if (item.partB && perm(o.orderB, item.partB.choices.length)) out.orderB = o.orderB.slice();
    if (item.slots && Array.isArray(o.ddOrder) && o.ddOrder.length === item.slots.length && o.ddOrder.every((x, k) => perm(x, item.slots[k].options.length))) out.ddOrder = o.ddOrder.map(x => x.slice());
    if (item.rows && perm(o.rowOrder, item.rows.length)) out.rowOrder = o.rowOrder.slice();
    if (item.type === "hottext" && Array.isArray(o.hotOrder)) {
      const t = item.options ? item.options.map((x, i) => "opt:" + i) : (item.targets || []);
      if (o.hotOrder.length === t.length && uniq(o.hotOrder) && o.hotOrder.every(x => t.indexOf(x) >= 0)) out.hotOrder = o.hotOrder.slice();
    }
    return out;
  }
  function hydrate(ctx, st, rec) {
    st.hints = 0; st.sinceHint = 0; st.shown = false; st.howOpen = false;
    if (!rec) return;
    if (rec.r !== undefined && saneResp(ctx.item, rec.r)) ctx.resp = JSON.parse(JSON.stringify(rec.r));
    if (ctx.item.type === "cr" && rec.cr) { ctx.resp = { text: rec.cr.text }; st.crDone = rec.cr.done; st.crChecks = rec.cr.checks.slice(); }
    Object.assign(ctx, saneOrd(ctx.item, rec.ord));
    st.wrong = rec.w; st.hints = rec.h; st.shown = rec.x; st.solved = rec.ok; st.howOpen = rec.x || rec.howAfter;
    st.sinceHint = 0;
  }
  const ORD_KEYS = ["order", "orderA", "orderB", "ddOrder", "hotOrder", "rowOrder"];
  function ordOf(ctx) { const o = {}; ORD_KEYS.forEach(k => { if (ctx[k]) o[k] = ctx[k]; }); return o; }
  /* write this item's facts after a child action (never on render) */
  function persist(ev) {
    if (!run.own) return;
    const c = C(), k = run.set.code, sim = !!run.sim;
    const core = (PP.core || {})[k] || {};
    window.PP_PRACTICE.update(k, c.item.id, sim, r => {
      if (sim) r.for = run.sim.for;
      if (c.item.type === "cr") r.cr = { text: c.ctx.resp.text || "", checks: (c.item.criteria || []).map((x, n) => !!(c.st.crChecks || [])[n]), done: !!c.st.crDone };
      else r.r = JSON.parse(JSON.stringify(c.ctx.resp));
      r.ord = JSON.parse(JSON.stringify(ordOf(c.ctx)));
      /* only ever up: help history is never erased by a later right answer */
      r.w = Math.max(r.w || 0, c.st.wrong || 0); r.h = Math.max(r.h || 0, c.st.hints || 0);
      r.x = !!(r.x || c.st.shown); r.ok = !!(r.ok || c.st.solved); r.howAfter = !!(r.howAfter || c.st.howAfter);
      r.set = run.set.setNo; r.pos = sim ? run.sim.from : run.pos;
      if (ev) window.PP_PRACTICE.log(r, ev);
    }, { rev: core.rev, set: run.set.setNo, pos: sim ? run.sim.from : run.pos });
    syncStatus();
  }
  const hintsOf = it => (Array.isArray(it.hints) && it.hints.length ? it.hints : [it.clue]).filter(Boolean);
  function similarFor(it) {
    if (run.sim || !run.own) return null;
    const bank = (PP.similarFor || {})[run.set.code] || [];
    return bank.find(x => (x.like || []).indexOf(it.id) >= 0 && !window.PP_PRACTICE.touched(window.PP_PRACTICE.rec(run.set.code, x.id, true))) || null;
  }
  function itemStatus() {
    const c = C();
    return window.PP_PRACTICE.statusOf({ w: c.st.wrong, h: c.st.hints, x: c.st.shown, ok: c.st.solved, cr: c.item.type === "cr" ? { done: !!c.st.crDone } : undefined });
  }
  function syncStatus() {
    const p = el("q-status");
    if (!run.own) { p.hidden = true; return; }
    const c = C(), st = itemStatus();
    const touched = c.st.wrong || c.st.hints || c.st.shown || c.st.solved || c.st.crDone;
    p.hidden = !touched;
    p.textContent = touched ? "This question: " + window.PP_PRACTICE.STATUS[st] + "." + (c.st.hints ? " Hints used: " + PP.countWord(c.st.hints) + "." : "") : "";
  }
  function renderHints(c) {
    const H = hintsOf(c.item);
    for (let k = 0; k < Math.min(c.st.hints, H.length); k++) addHelp("Hint " + (k + 1) + " of " + H.length, H[k]);
  }
  function renderHow(c) {
    const box = el("q-how-steps"); clear(box);
    box.hidden = !c.st.howOpen;
    if (!c.st.howOpen) return;
    const it = c.item;
    const h = make("p", "how-h", "Show me how"); h.tabIndex = -1; box.appendChild(h);
    box.appendChild(make("p", "how-warn-line", c.st.shown ? "The answer is shown, so this question counts as answer shown. You can still choose it and check." : "You already had this one right. Here are the steps."));
    const ol = make("ol", "how-list");
    (Array.isArray(it.how) && it.how.length ? it.how : [it.why]).forEach(t => ol.appendChild(make("li", "", t)));
    box.appendChild(ol);
    if (it.type === "cr") {
      const a = make("p", "how-answer"); a.appendChild(make("strong", "", "One good answer: ")); a.appendChild(document.createTextNode(it.sample)); box.appendChild(a);
      box.appendChild(make("p", "note", "Other answers can also be right. Check yours against the list."));
    } else {
      const a = make("p", "how-answer"); a.appendChild(make("strong", "", "The answer: ")); a.appendChild(document.createTextNode(T[it.type].answerText(it, run.set))); box.appendChild(a);
    }
    if (it.misconception) box.appendChild(make("p", "how-mix", it.misconception));
    T[it.type].outline(c.ctx);
  }
  function renderCompare(c) {
    const box = el("q-cr"); clear(box);
    box.hidden = !(c.item.type === "cr" && c.st.crDone);
    if (box.hidden) return;
    const it = c.item;
    box.appendChild(make("p", "cr-h", "Compare with the sample"));
    const a = make("p", "cr-sample"); a.appendChild(make("strong", "", "One good answer. Other answers can also be right: ")); a.appendChild(document.createTextNode(it.sample)); box.appendChild(a);
    box.appendChild(make("p", "write-check-h", "Did I…"));
    const ul = make("ul", "write-checklist");
    c.st.crChecks = c.st.crChecks || [];
    (it.criteria || []).forEach((t, i) => {
      const li = make("li"); const cb = make("input"); cb.type = "checkbox"; cb.id = "crc-" + String(it.id).replace(/[^a-z0-9]/gi, "-") + "-" + i;
      cb.checked = !!c.st.crChecks[i];
      cb.addEventListener("change", () => { c.st.crChecks[i] = cb.checked; persist({ t: "cr-check", n: i, on: cb.checked }); });
      const lb = make("label", "", t); lb.htmlFor = cb.id; li.appendChild(cb); li.appendChild(lb); ul.appendChild(li);
    });
    box.appendChild(ul);
    box.appendChild(make("p", "note", "Read it with a grown-up. A written answer is never scored by the site, and it is never counted as right or wrong."));
  }

  function renderItem() {
    const c = C(), i = run.pos, item = c.item, ctx = c.ctx, st = c.st;
    const total = run.set.items.length;
    el("q-count").textContent = run.sim ? "Extra question (not one of the fifteen)" : "Question " + (i + 1) + " of " + total;
    el("q-points").textContent = item.type === "cr" ? "Not scored" : item.points === 2 ? "2 points" : "1 point";
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
        const cur = /^Cursive: /.test(t);   /* reading cursive (3.F.H.3) */
        box.appendChild(cur ? make("p", "cursive", t.replace(/^Cursive: /, "")) : rich(make("p", ""), t));
      });
      figures(box, item.figure);   /* item.figure: a picture this question is about */
      host.appendChild(box);
    }
    ctx.host = host;
    ctx.ui = Object.assign({}, { fixed: ctx.ui.fixed, fixedRow: ctx.ui.fixedRow, aLocked: ctx.ui.aLocked });
    ctx.locked = run.mode === "practice" && st.solved;
    T[item.type].render(ctx);
    if (ctx.locked) renderLockedState(ctx);
    /* re-apply help state after a re-render (e.g. coming Back) */
    clear(el("q-help-steps"));
    if (run.own) { renderHints(c); renderHow(c); renderCompare(c); }
    else {
      el("q-how-steps").hidden = true; el("q-cr").hidden = true;
      if (run.mode === "practice") {
        (st.helpLog || []).forEach(h => addHelp(h.label, h.text));
        if (st.help >= 3) T[item.type].outline(ctx);
      }
    }
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
    buildNav();
    setFeedback(st.fb || null);
    syncControls();
    syncStatus();
    const sh = el("q-storage"); clear(sh);
    if (run.own) sh.appendChild(window.PP_PRACTICE.notice("q-storage-note"));
    if (run.focusNote) { run.focusNote = false; el("passage-note").focus(); }
    else el("q-prompt").focus();
    window.scrollTo(0, 0);
  }

  /* Test mode (expansion 2026-10-22): a question navigator. Each button names its number and state
     in words ("3, answered"), and the state also shows as a shape, never only as a colour. */
  function buildNav() {
    const nav = el("q-nav"); clear(nav);
    nav.hidden = run.mode !== "test";
    if (nav.hidden) return;
    const n = run.set.items.length;
    nav.classList.toggle("is-many", n > 12);
    run.set.items.forEach((it, i) => {
      const c = ctxFor(i), st = run.state[i];
      const done = T[it.type].answered(it, c.resp);
      const b = make("button", "qn-btn" + (done ? " is-answered" : "") + (st.flag ? " is-flagged" : "") + (i === run.pos ? " is-current" : ""), String(i + 1));
      b.type = "button";
      b.setAttribute("aria-label", (i + 1) + ", " + (done ? "answered" : "not answered") + (st.flag ? ", marked to review" : ""));
      if (i === run.pos) b.setAttribute("aria-current", "step");
      b.addEventListener("click", () => { run.pos = i; renderItem(); });
      nav.appendChild(b);
    });
  }

  function onChange() {
    const c = C(), st = c.st;
    if (run.mode === "practice" && !st.solved && st.fb && st.fb.kind !== "help") setFeedback(null);
    if (run.own) persist();
    else if (run.mode === "test") refreshNav();
    syncControls();
  }
  function refreshNav() {
    const nav = el("q-nav"); if (nav.hidden) return;
    const i = run.pos, it = run.set.items[i], b = nav.children[i]; if (!b) return;
    const done = T[it.type].answered(it, ctxFor(i).resp), st = run.state[i];
    b.classList.toggle("is-answered", done);
    b.setAttribute("aria-label", (i + 1) + ", " + (done ? "answered" : "not answered") + (st.flag ? ", marked to review" : ""));
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
    const st = C().st;
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
    const c = C(), i = run.pos, item = c.item, ctx = c.ctx, st = c.st;
    const answered = T[item.type].answered(item, ctx.resp);
    const last = i === run.set.items.length - 1;
    ["q-hint", "q-how", "q-similar", "q-flag"].forEach(id => { el(id).hidden = true; });
    el("q-prev").hidden = run.mode === "practice" && !run.own;
    el("q-prev").disabled = !run.sim && i === 0;
    el("q-prev").textContent = run.sim ? "Back to question " + (run.sim.from + 1) : "Previous question";
    if (run.own) {
      const H = hintsOf(item);
      el("q-help").hidden = true;
      el("q-hint").hidden = st.solved;
      el("q-hint").disabled = st.hints >= H.length;
      el("q-hint").textContent = st.hints >= H.length ? "No more hints" : st.hints ? "Give me another hint" : "Give me a hint";
      el("q-how").hidden = st.howOpen;
      el("q-check").hidden = st.solved;
      el("q-check").textContent = item.type === "cr" ? (st.crDone ? "Compare again" : "Compare with the sample") : "Check my answer";
      el("q-check").disabled = !answered || (item.type !== "cr" && (st.sinceHint || 0) >= 2);
      el("q-similar").hidden = !((st.solved || st.shown || st.crDone) && similarFor(item));
      el("q-next").hidden = false;
      el("q-next").textContent = run.sim ? (run.sim.from === run.set.items.length - 1 ? "Finish this set" : "Go on to question " + (run.sim.from + 2))
        : last ? "Finish this set" : "Next question";
    } else if (run.mode === "practice") {
      el("q-help").hidden = st.solved || (run.tryMode && st.wrong < 1 && st.help < 1);
      el("q-help").disabled = st.help >= 3;
      el("q-help").textContent = st.help === 0 ? "Help me" : st.help < 3 ? "Help me (next step)" : "Help me";
      el("q-check").hidden = st.solved;
      el("q-check").textContent = "Check";
      el("q-check").disabled = !answered;
      el("q-next").hidden = !st.solved;
      el("q-next").textContent = last ? "Finish" : "Next question";
    } else {
      el("q-help").hidden = true;
      el("q-check").hidden = true;
      el("q-flag").hidden = false;
      el("q-flag").setAttribute("aria-pressed", st.flag ? "true" : "false");
      el("q-flag").textContent = st.flag ? "Marked to review" : "Mark to review";
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
    if (run.own) return checkOwn();
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

  /* Check my answer (own mode). A retry is allowed. After two wrong checks in a row, Check waits
     until a hint is taken (one more check per hint) or Show me how is pressed. Nothing ever
     reveals the answer unless the child asks for it. */
  function checkOwn() {
    const c = C(), item = c.item, ctx = c.ctx, st = c.st;
    if (!T[item.type].answered(item, ctx.resp)) return;
    if (item.type === "cr") {
      st.crDone = true;
      setFeedback({ kind: "help", label: "Compare with the sample", text: "One good answer is shown below. Other answers can also be right. Use the list to check your own writing." });
      persist({ t: "cr" });
      renderCompare(c); syncControls();
      const h = el("q-cr").querySelector(".cr-h"); if (h) { h.tabIndex = -1; h.focus(); }
      return;
    }
    if ((st.sinceHint || 0) >= 2) return;
    const sc = T[item.type].score(item, ctx.resp);
    if (sc.points === sc.max) {
      st.solved = true; ctx.locked = true;
      setFeedback({ kind: "right", label: "That's right!", text: (st.shown ? "You used Show me how first, so this one counts as answer shown. " : "") + item.why });
      renderLockedState(ctx);
      persist({ t: "check", pts: sc.points, max: sc.max });
      syncControls();
      (el("q-similar").hidden ? el("q-next") : el("q-similar")).focus();
      return;
    }
    st.wrong++; st.sinceHint = (st.sinceHint || 0) + 1;
    const pn = T[item.type].partialNote ? T[item.type].partialNote(item, ctx.resp) : "";
    const part = sc.points > 0 ? "You got part of it (" + sc.points + " of " + sc.max + " points). " + (pn ? pn + " " : "") : "";
    const H = hintsOf(item);
    const stuck = st.sinceHint >= 2;
    setFeedback({ kind: "try", label: "Not quite", text: part + (stuck
      ? (st.hints < H.length ? "Two tries used. Ask for a hint or press Show me how." : "Two tries used, and every hint is shown. Press Show me how to see the answer and the steps.")
      : "Try again" + (st.hints < H.length ? ", or ask for a hint." : ".")) });
    persist({ t: "check", pts: sc.points, max: sc.max });
    syncControls();
    reveal(el("q-feedback"), el("q-check").parentElement);
    if (stuck) (el("q-hint").disabled ? el("q-how") : el("q-hint")).focus();
  }

  /* Give me a hint: the authored hints in order (hints[0..2], or the clue alone). It never
     outlines or narrows anything, so an early hint cannot hand over the answer. */
  function hint() {
    const c = C(), st = c.st, H = hintsOf(c.item);
    if (st.solved || st.hints >= H.length) return;
    st.hints++;
    st.sinceHint = Math.min(st.sinceHint || 0, 1);
    clear(el("q-help-steps")); renderHints(c);
    if (st.fb && st.fb.kind === "try") setFeedback(null);
    persist({ t: "hint", n: st.hints });
    const hadFocus = document.activeElement === el("q-hint");
    syncControls();
    if (hadFocus && el("q-hint").disabled) {
      const last = el("q-help-steps").lastElementChild;
      if (last) { last.tabIndex = -1; last.focus(); }
    }
  }

  /* Show me how: available from the start; its label says it shows the answer. Pressed before the
     item is solved, the item counts as "Answer shown" for good. Pressed after, only the steps. */
  function how() {
    const c = C(), st = c.st;
    if (st.howOpen) return;
    st.howOpen = true;
    if (st.solved || st.crDone) st.howAfter = true; else st.shown = true;
    st.sinceHint = 0;
    if (st.fb && st.fb.kind === "try") setFeedback(null);
    persist({ t: "how", after: !!st.howAfter });
    renderHow(c);
    syncControls();
    const h = el("q-how-steps").querySelector(".how-h");
    if (h) { h.focus({ preventScroll: true }); reveal(el("q-how-steps"), el("q-next").parentElement); }
  }

  /* Try a similar question: a separate item from the lesson's reviewed bank, saved under its own id.
     The core item's record is never changed by it, and it never counts in the fifteen. */
  function similar() {
    const c = C(); if (run.sim) return;
    const it = similarFor(c.item); if (!it) return;
    const ctx = { item: it, set: run.set, resp: T[it.type].blank(it), ui: {}, locked: false, onChange };
    const st = { help: 0, wrong: 0, solved: false, firstTry: null };
    hydrate(ctx, st, window.PP_PRACTICE.rec(run.set.code, it.id, true));
    run.sim = { item: it, ctx, st, from: run.pos, for: c.item.id };
    run.lastPassages = null;
    renderItem();
  }

  function flag() {
    const st = run.state[run.pos]; if (run.mode !== "test") return;
    st.flag = !st.flag; syncControls(); buildNav();
    el("q-flag").focus();
  }

  function renderLockedState(ctx) {
    /* lock every control in the question body */
    Array.from(ctx.host.querySelectorAll("button, select")).forEach(b => { b.disabled = true; });
    Array.from(ctx.host.querySelectorAll(".is-hint")).forEach(b => b.classList.remove("is-hint"));
  }

  /* ---------- navigation ---------- */
  function next() {
    if (run.sim) { const from = run.sim.from; run.sim = null; run.pos = from; }
    const last = run.pos === run.set.items.length - 1;
    if (last) { finish(); return; }
    run.pos++;
    if (run.own) window.PP_PRACTICE.place(run.set.code, run.set.setNo, run.pos, ((PP.core || {})[run.set.code] || {}).rev);
    renderItem();
  }
  function prev() {
    if (run.sim) { run.pos = run.sim.from; run.sim = null; run.lastPassages = null; renderItem(); return; }
    if (run.pos > 0) {
      run.pos--;
      if (run.own) window.PP_PRACTICE.place(run.set.code, run.set.setNo, run.pos, ((PP.core || {})[run.set.code] || {}).rev);
      renderItem();
    }
  }

  function finish() {
    if (run.mode === "practice") return practiceDone();
    const noun = run.set.kind === "skill" ? "skill check" : "test";
    const all = run.set.items.map((it, i) => ({ i, c: ctxFor(i), st: run.state[i] }));
    const blankList = all.filter(x => !T[x.c.item.type].answered(x.c.item, x.c.resp));
    const flagged = all.filter(x => x.st && x.st.flag);
    const blank = blankList.length;
    el("confirm-line").textContent = blank
      ? "You left " + PP.countWord(blank) + " question" + (blank === 1 ? "" : "s") + " blank or not finished. You can go back and check, or turn in your " + noun + "."
      : "You answered every question. You can go back and check, or turn in your " + noun + ".";
    /* expansion 2026-10-22: name the questions, each a button back to it (confirmList, after showStage) */
    if (typeof confirmList === "function") confirmList(blankList, flagged);
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

  function confirmList(blankList, flagged) {
    const box = el("confirm-list"); clear(box);
    const group = (title, list, why) => {
      if (!list.length) return;
      box.appendChild(make("p", "confirm-h", title));
      const ul = make("ul", "confirm-qs");
      list.forEach(x => {
        const li = make("li"); const b = make("button", "btn btn-soft confirm-go", "Question " + (x.i + 1));
        b.type = "button"; b.dataset.q = String(x.i);
        b.setAttribute("aria-label", "Go back to question " + (x.i + 1) + ", " + why);
        b.addEventListener("click", () => { showStage("work"); run.pos = x.i; renderItem(); });
        li.appendChild(b); ul.appendChild(li);
      });
      box.appendChild(ul);
    };
    group("Not answered yet:", blankList, "not answered");
    group("Marked to review:", flagged, "marked to review");
    box.hidden = !box.children.length;
  }

  function practiceDone() {
    if (run.own) return ownDone();
    const n = run.set.items.length;
    const first = run.state.filter(s => s && s.firstTry).length;
    const skill = run.set.kind === "skill";
    if (skill) window.PP_SKILLS.recordPractice(run.set.code, run.set.part);
    const nx = skill && run.set.next;
    el("done-line").textContent = "You finished " + (n === 1 ? "one question" : "all " + PP.countWord(n) + " questions") + ". You got " + first + " of " + n +
      " right on your first try without help. Asking for help is never a mistake; it is how you learn." +
      (nx ? (nx.mode === "test" ? " When you are ready, take the skill check." : nx.picker ? " Next, practice on your own." : " Next, try some on your own.") : "");
    el("done-summary").hidden = true;
    el("done-title").textContent = "Great work!";
    el("done-test").hidden = skill && !nx;
    el("done-test").textContent = nx ? nx.label : "Try it as a test";
    el("done-back").textContent = skill ? "Back to the skill" : "Back to the list";
    window.PP_APP.markDone({ set: run.set.id, mode: run.tryMode ? "try" : "practice", n, first });
    showStage("done");
    el("done-title").focus();
  }
  /* The end of one set of five: each question's status in words, the set's counts, and the next set. */
  function ownSummary(box) {
    const PR = window.PP_PRACTICE, k = run.set.code, ids = run.set.items.map(it => it.id);
    clear(box);
    const ol = make("ol", "own-dots own-dots-list");
    ids.forEach((id, i) => {
      const st = PR.status(k, id);
      const li = make("li", "own-dot is-" + st);
      li.appendChild(make("span", "own-dot-mark")).setAttribute("aria-hidden", "true");
      li.appendChild(make("span", "own-dot-word", "Question " + (i + 1) + ": " + PR.STATUS[st]));
      ol.appendChild(li);
    });
    box.appendChild(ol);
    const sim = run.set.items.map(it => ((PP.similarFor || {})[k] || []).filter(x => (x.like || []).indexOf(it.id) >= 0 && PR.touched(PR.rec(k, x.id, true))).length).reduce((a, b) => a + b, 0);
    if (sim) box.appendChild(make("p", "note", "Extra questions in this set: " + PP.countWord(sim) + ". They are kept apart and do not count in the fifteen."));
    return ids.filter(id => PR.status(k, id) === "none").length;
  }
  function ownDone() {
    const k = run.set.code, no = run.set.setNo;
    window.PP_SKILLS.recordPractice(k, run.set.part);   /* sets `tried` only when all fifteen are finished */
    const left = ownSummary(el("done-summary"));
    el("done-summary").hidden = false;
    const nx = run.set.next;
    el("done-line").textContent = (left ? "You reached the end of set " + no + ". " + (left === 1 ? "One question is" : PP.countWord(left).charAt(0).toUpperCase() + PP.countWord(left).slice(1) + " questions are") + " not finished yet. You can look back at this set to finish " + (left === 1 ? "it" : "them") + "."
      : "You finished set " + no + ".") + " Practice is never scored, and asking for help is how you learn." +
      (window.PP_PRACTICE.canSave() ? " Your answers are saved on this device, so you can stop here and come back." : " Saving is unavailable, so these answers last only while this page stays open.");
    el("done-test").hidden = !nx;
    el("done-test").textContent = nx ? nx.label : "";
    el("done-back").textContent = "Back to the lesson";
    window.PP_APP.markDone({ set: run.set.id, mode: "try", own: true, n: run.set.items.length });
    showStage("done");
    el("done-title").textContent = left ? "End of set " + no : "Set " + no + " finished";
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
    /* expansion 2026-10-22: a row is reported on its own only when the sample supports it, at least
       two questions and three points. Smaller parts are grouped, never reported as a skill result.
       Skill checks group by Georgia code (item.comp or std); other sets by area, as before. */
    const skillSet = run.set.kind === "skill";
    const by = {}, order = [];
    let multi = false;
    rows.forEach(r => {
      const keys = (skillSet ? (r.item.comp ? [r.item.comp] : (r.item.std || [])) : (r.item.std || []).map(skillOf)).filter((k, i, a) => a.indexOf(k) === i);
      if (!keys.length) keys.push("Other");
      if (keys.length > 1) multi = true;
      keys.forEach(k => { if (!by[k]) { by[k] = { got: 0, max: 0, n: 0 }; order.push(k); } by[k].got += r.sc.points; by[k].max += r.sc.max; by[k].n++; });
    });
    const host = el("res-skills"); clear(host);
    if (run.set.kind === "form") {
      const n = rows.length;
      host.appendChild(make("p", "note", "This was a shortened practice test: " + n + " questions and " + max + " points, with no essay. " +
        "The real Grade 3 test has 60 points, including an 8-point essay. This is a practice score, not a Georgia Milestones score."));
    }
    if (multi) host.appendChild(make("p", "note", "Some questions check two areas, so they count in each one. The area scores add up to more than the total."));
    const big = order.filter(k => by[k].n >= 2 && by[k].max >= 3), small = order.filter(k => big.indexOf(k) < 0);
    const nameOf = k => skillSet && window.PP_SKILLS.shortCode ? window.PP_SKILLS.shortCode(k) : k;
    const addRow = (name, v, cls) => {
      const row = make("div", "skill-row" + (cls ? " " + cls : ""));
      row.appendChild(make("span", "skill-name", name));
      row.appendChild(make("span", "skill-score", v.got + " of " + v.max));
      const bar = make("span", "skill-bar"); const fill = make("span", "skill-fill");
      fill.style.width = (v.max ? Math.round(100 * v.got / v.max) : 0) + "%";
      bar.appendChild(fill); row.appendChild(bar);
      host.appendChild(row);
    };
    big.forEach(k => addRow(nameOf(k), by[k]));
    if (small.length) {
      const v = { got: 0, max: 0 };
      rows.forEach(r => { const keys = skillSet ? (r.item.comp ? [r.item.comp] : (r.item.std || [])) : (r.item.std || []).map(skillOf); if (keys.some(k => small.indexOf(k) >= 0)) { v.got += r.sc.points; v.max += r.sc.max; } });
      addRow("Other parts (too few questions to report on their own)", v, "is-other");
    }
    const partialPts = rows.filter(r => r.sc.points > 0 && r.sc.points < r.sc.max).reduce((a, r) => a + r.sc.points, 0);
    let pp = el("res-partial");
    if (!pp) { pp = make("p", "note res-partial"); pp.id = "res-partial"; el("res-score-box").insertAdjacentElement("afterend", pp); }
    pp.textContent = partialPts ? "This includes " + PP.countWord(partialPts) + " point" + (partialPts === 1 ? "" : "s") + " of partial credit, from two-point questions that were partly right." : "";
    pp.hidden = !partialPts;
    const pct = max ? got / max : 0;
    el("res-guidance").textContent = run.set.kind === "skill" ? window.PP_SKILLS.afterTest(run.set, got, max)
      : pct >= 0.85 ? "Excellent work. You are ready for harder sets."
      : pct >= 0.6 ? "Good work. Practice the questions you missed, then try again."
      : "Keep going. Try this set in Practice mode, where Help me walks you through each question.";
    /* a skill check shows rows only when at least two parts can be reported (a one-code check has its total) */
    el("res-skills").hidden = skillSet && big.length < 2;
    buildReview(rows);
    buildRevisit(rows, got, max);
    el("res-practice").hidden = run.set.kind === "form" || (run.set.kind === "skill" && !run.set.practiceId);
    /* PP-003 RD-10: a skill's button opens Practice Together, so it says so; the lesson check is a "skill check" */
    el("res-practice").textContent = run.set.kind === "skill" ? "Practice Together" : "Practice this set";
    el("res-again").textContent = run.set.kind === "skill" ? "Take the skill check again" : "Take the test again";
    /* say whether the retry is a fresh form or the same questions (worked out after this attempt was recorded) */
    el("res-again-note").textContent = isCheck(run.set)
      ? (window.PP_SKILLS.hasFormB(run.set.code) ? "The next skill check uses form " + window.PP_SKILLS.nextForm(run.set.code) + ", with different questions." : "The next skill check uses the same questions as this one. This skill has one form.")
      : "Taking it again uses the same questions.";
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
      if (r.sc.points > 0 && r.sc.points < r.sc.max) {
        const pn = T[it.type].partialNote ? T[it.type].partialNote(it, r.resp) : "";
        box.appendChild(make("p", "review-partial", "Partial credit: " + r.sc.points + " of " + r.sc.max + " points. " + pn));
      }
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

  /* What to work on next, from the missed questions. Small samples are named as small. */
  function buildRevisit(rows, got, max) {
    const host = el("res-revisit"); clear(host);
    const missed = rows.filter(r => r.sc.points < r.sc.max);
    host.appendChild(make("h3", "rv-h", "What to work on next"));
    if (!missed.length) host.appendChild(make("p", "", "Every question was right. Come back in about a week and try again to see if it stuck."));
    const S = window.PP_SKILLS, keys = [];
    if (run.set.kind === "skill") { if (missed.length) keys.push(run.set.code); }
    else missed.forEach(r => (r.item.std || []).forEach(c => { const k = S.lessonFor(c); if (k && keys.indexOf(k) < 0) keys.push(k); }));
    if (keys.length) {
      host.appendChild(make("p", "", run.set.kind === "skill" ? "Go back over the lesson, then try again." : "These lessons teach the skills in the questions that were missed:"));
      const ul = make("ul", "rv-list");
      keys.slice(0, 6).forEach(k => {
        const li = make("li", "rv-item");
        li.appendChild(make("span", "rv-name", (S.skillId(k) ? S.skillId(k) + " · " : "") + PP.lessons[k].title));
        const acts = make("span", "rv-acts");
        const w = make("button", "btn btn-soft rv-btn", "Watch Me again"); w.type = "button"; w.addEventListener("click", () => { if (window.PP_APP.canLeave()) S.open(k, "learn"); });
        acts.appendChild(w);
        const own = S.isCore(k);
        const y = make("button", "btn btn-soft rv-btn", own ? "Practice on my own" : "Practice Together"); y.type = "button";
        y.addEventListener("click", () => { if (window.PP_APP.canLeave()) S.open(k, own ? "try" : "practice"); });
        acts.appendChild(y);
        li.appendChild(acts); ul.appendChild(li);
      });
      host.appendChild(ul);
    }
    host.appendChild(make("p", "note", "This was " + PP.countWord(rows.length) + " questions, a small sample. It shows what to practice next; it is not a diagnosis or a Milestones score."));
    host.hidden = false;
  }

  /* ---------- start ---------- */
  /* A skill's sets run only in their own mode. The check (:t) is always a test
     (closes #play/SK:<k>:t/practice). Practice Together (:p) and Try It Yourself (:y)
     are never a test (PP-003 RD-4: #play/SK:<k>:p/test ran practice items as a scored
     check and stored a pass), so a "test" address runs them as practice or try. */
  function skillMode(set, mode) {
    if (set.kind !== "skill") return mode;
    if (set.part === "t" || set.part === "tB") return "test";   /* PP-004: form B is a check too */
    if (set.own) return "try";   /* Practice on my own sets run only as practice (expansion 2026-10-22) */
    if (mode === "test") return set.part === "y" ? "try" : "practice";
    return mode;
  }
  /* PP-004: the site's own "take the check" buttons ask skills.js which form is next.
     An address that names a form (#play/SK:<k>:tB/test) runs that form; the attempt
     log records whichever form was actually taken. */
  const isCheck = set => !!set && set.kind === "skill" && (set.part === "t" || set.part === "tB");
  const checkFor = set => (window.PP_SKILLS.checkSetId ? window.PP_SKILLS.checkSetId(set.code) : set.id);
  function start(setId, mode, opts) {
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
    run.own = !!set.own; run.sim = null;
    run.pos = 0; run.ctxs = []; run.state = [];
    /* resume: a set opens at its saved place, else at its first unfinished question */
    if (run.own) {
      const core = (PP.core || {})[set.code];
      const ss = window.PP_PRACTICE.setState(set.code, core ? core.sets[set.setNo - 1] : set.items.map(it => it.id), set.setNo);
      run.pos = opts && Number.isInteger(opts.pos) ? Math.max(0, Math.min(set.items.length - 1, opts.pos)) : ss.done ? 0 : ss.pos;
    }
    el("player-title").textContent = set.title;
    el("player-mode").textContent = run.mode === "test" ? (set.kind === "skill" ? "Skill check" : "Test") : run.own ? "Practice on my own" : run.tryMode ? "Try it yourself" : "Practice";
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
    run.own = !!set.own; run.sim = null;
    run.pos = 0; run.ctxs = []; run.state = []; run.submitted = true;
    el("player-title").textContent = set.title;
    el("player-mode").textContent = run.mode === "test" ? (set.kind === "skill" ? "Skill check" : "Test") : run.own ? "Practice on my own" : run.tryMode ? "Try it yourself" : "Practice";
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
    el("again-next").hidden = true;
    if (run.own) {
      /* a finished set of Practice on my own: look back (saved answers stay) or go on */
      el("again-title").textContent = "You reached the end of this set";
      el("again-line").textContent = "Your answers and the help you used are kept" + (window.PP_PRACTICE.canSave() ? " on this device" : " while this page stays open") + ". Looking back opens the set with them.";
      el("again-start").textContent = "Look back at this set";
      el("again-back").textContent = "Back to the lesson";
      if (set.next) { el("again-next").hidden = false; el("again-next").textContent = set.next.label; }
    }
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
    el("q-hint").addEventListener("click", hint);
    el("q-how").addEventListener("click", how);
    el("q-similar").addEventListener("click", similar);
    el("q-flag").addEventListener("click", flag);
    el("again-next").addEventListener("click", () => goNext());
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
    function goNext() {
      const nx = run.set.kind === "skill" && run.set.next;
      /* a core lesson's Practice Together leads to the Try step's set picker, so the child sees where they are */
      if (nx && nx.picker) { window.PP_SKILLS.open(run.set.code, "try"); return; }
      if (nx) start(nx.mode === "test" && isCheck(PP.byId[nx.id]) ? checkFor(PP.byId[nx.id]) : nx.id, nx.mode); else start(run.set.id, "test");
    }
    el("done-test").addEventListener("click", goNext);
    el("again-start").addEventListener("click", () => start(isCheck(run.set) ? checkFor(run.set) : run.set.id, run.mode === "test" ? "test" : run.tryMode ? "try" : "practice", run.own ? { pos: 0 } : undefined));
    ["res-back", "done-back", "again-back"].forEach(id => el(id).addEventListener("click", () => window.PP_APP.back()));
  }

  window.PP_PLAYER = {
    init, start, finished, flash, markSelected, renderPassages, inProgress, abandon,
    state: () => ({ setId: run.set && run.set.id, section: run.set && run.set.section, mode: run.mode, pos: run.pos, total: run.set ? run.set.items.length : 0,
                    help: run.state.map(s => s && s.help), solved: run.state.map(s => s && s.solved),
                    own: !!run.own, sim: run.sim ? run.sim.item.id : null, hints: run.state.map(s => s && s.hints), shown: run.state.map(s => s && s.shown) }),
    ctx: i => (i === undefined && run.sim ? run.sim.ctx : ctxFor(i === undefined ? run.pos : i))
  };
})();

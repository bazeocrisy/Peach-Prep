/* Peach Prep - Teach Me (question-first design, docs/question-first/DESIGN.md section 5).

   Builds the teaching walk-through for the question on screen from data that already exists:
     what the question asks  <- item.prompt + the format of the question
     strategy                <- lesson teach.big, the best-matching teach.points entry, teach.words used in the question
     look in the text        <- item.hints[1] (and "paragraph N" references, shown in the open passage)
     steps                   <- item.how[0 .. n-2], one per press
     the answer              <- the last how step, then a labeled Answer block, item.why, item.misconception
   The hints (item.hints[0..2]) are a separate, optional tool. Nothing here contains the answer before the
   last unit, except what the authored `how` steps themselves say (verification/teach-coverage.js reports those).
   This module only builds content. The player owns state, saving and focus. It never writes storage. */
(function () {
  "use strict";
  const { make } = PP;
  const STOP = new Set("that this with from have what which when where who why how does did the and for are was were you your they them their there then than into about each one two three four five six seven eight nine ten question answer choose best read text sentence word words story part about these those would could should will can not but all any some more most very also because".split(" "));
  const bag = t => (String(t || "").toLowerCase().match(/[a-z']{4,}/g) || []).filter(w => !STOP.has(w));
  const overlap = (a, b) => { const s = new Set(b); return a.filter((w, i) => s.has(w) && a.indexOf(w) === i).length; };
  const ONE = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  /* A sentence about the format, so a child knows how to answer (generic, not question-specific). */
  function formatLine(item) {
    switch (item.type) {
      case "mc": return "Choose the one best answer.";
      case "ms": return "Choose " + (ONE[item.pick] || item.pick) + " answers.";
      case "ebsr": return "This question has two parts. Answer Part A first. Part B asks for the evidence.";
      case "dropdown": return "Choose the best answer for each blank.";
      case "hottext": return "Select the " + (item.pick > 1 ? "sentences" : "sentence") + " that answer" + (item.pick > 1 ? "" : "s") + " the question.";
      case "order": return "Put the steps in the right order.";
      case "match": return "Match each row to the best choice.";
      case "cr": return "Write your own answer. Then compare it with the sample.";
    }
    return "";
  }
  /* The lesson's own teaching sentence that best fits this question (shared words), if any fits well. */
  function bestPoint(L, item) {
    const pts = (L && L.teach && L.teach.points) || [];
    const q = bag([item.prompt, item.clue, (item.hints || [])[0]].join(" "));
    let best = null, top = 1;
    pts.forEach(p => { const n = overlap(bag(p), q); if (n > top) { top = n; best = p; } });
    return best;
  }
  /* Key words from the lesson that appear in this question. */
  function termsIn(L, item) {
    const ws = (L && L.teach && L.teach.words) || [];
    const text = [item.prompt].concat(item.stem || [], item.choices ? item.choices.map(c => c.text) : []).join(" ").toLowerCase();
    return ws.filter(w => w.term && text.indexOf(String(w.term).toLowerCase()) >= 0).slice(0, 2);
  }
  /* "paragraph 2", "Source 1, paragraph 3", "paragraphs 2 and 3" in a hint -> [{ pid, para }]. */
  function evidenceRefs(item, text) {
    const ps = (item.passages || []).filter(Boolean), out = [];
    if (!ps.length || !text) return out;
    const re = /(?:\b(?:source|passage|text|article|story|poem)\s+(\d+)\s*[,:]?\s*)?\bparagraphs?\s+(\d+)(?:\s*(to|through|-|–|and|,)\s*(\d+))?/gi;
    let m;
    while ((m = re.exec(text))) {
      const pid = m[1] ? ps[Number(m[1]) - 1] : ps.length === 1 ? ps[0] : null;
      if (!pid) continue;
      const a = Number(m[2]), b = m[4] ? Number(m[4]) : a;
      const range = m[3] && /to|through|-|–/i.test(m[3]) && b > a && b - a < 6;
      (range ? Array.from({ length: b - a + 1 }, (_, i) => a + i) : [a, b]).forEach(n => { if (!out.some(r => r.pid === pid && r.para === n)) out.push({ pid, para: n }); });
    }
    return out;
  }
  function bestExample(L, item) {
    const ex = (L && L.learn) || [];
    if (!ex.length) return null;
    const q = bag(item.prompt + " " + (item.clue || ""));
    let best = ex[0], top = -1;
    ex.forEach(e => { const n = overlap(bag((e.ask || "") + " " + (e.steps || []).join(" ")), q); if (n > top) { top = n; best = e; } });
    return best;
  }

  /* Does a piece of Teach Me text name the key (the correct choice or blank word)? Used to be honest about it:
     the player counts a child as having been shown the answer as soon as such a text is on screen, and
     verification/teach-leaks.js lists every item whose early steps do it so authors can rewrite them.
     Conservative: a short key that is also an ordinary word can be a false positive. Only mc, ms, ebsr and
     dropdown keys are checked (order, match, hottext and written items have no single key text). The strategy card
     is lesson-wide teaching text (it can contain a word that is also a key, such as "honest"), so it is not checked. */
  const normT = t => String(t || "").toLowerCase().replace(/[\u201c\u201d]/g, '"').replace(/[\u2018\u2019]/g, "'").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
  function keyTexts(item) {
    const t = c => (c || []).filter(x => x.correct).map(x => x.text);
    if (item.type === "mc" || item.type === "ms") return t(item.choices);
    if (item.type === "ebsr") return t(item.partA && item.partA.choices).concat(t(item.partB && item.partB.choices));
    if (item.type === "dropdown") return (item.slots || []).map(s => (s.options || [])[s.answer]).filter(Boolean);
    return [];
  }
  const esc = k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function leaksKey(item, text) {
    const t = normT(text);
    return keyTexts(item).map(normT).filter(k => k.length >= 4).some(k => new RegExp("(^|[^a-z0-9])" + esc(k) + "($|[^a-z0-9])").test(t));
  }

  function card(id, title, cls) {
    const c = make("section", "tm-card" + (cls ? " " + cls : ""));
    c.dataset.unit = id; c.tabIndex = -1;
    c.appendChild(make("h3", "tm-card-h", title));
    return c;
  }

  /* opts: { answerText: string, set, onShow(refs) }  ->  { units: [{ id, build() -> node }], hints, refs } */
  function compose(item, L, opts) {
    opts = opts || {};
    const H = (Array.isArray(item.hints) && item.hints.length ? item.hints : [item.clue]).filter(Boolean);
    const how = (Array.isArray(item.how) && item.how.length ? item.how : [item.why]).filter(Boolean);
    const units = [];
    units.push({ id: "asks", leak: leaksKey(item, item.prompt), build() {
      const c = card("asks", "What the question asks");
      c.appendChild(make("p", "tm-quote", item.prompt));
      const f = formatLine(item); if (f) c.appendChild(make("p", "tm-note", f));
      return c;
    } });
    units.push({ id: "strategy", build() {
      const c = card("strategy", "The strategy");
      const big = L && L.teach && L.teach.big;
      if (big) c.appendChild(make("p", "tm-big", big));
      const pt = bestPoint(L, item); if (pt && pt !== big) c.appendChild(make("p", "", pt));
      if (!big && !pt && H[0]) c.appendChild(make("p", "", H[0]));
      termsIn(L, item).forEach(w => { const p = make("p", "tm-word"); p.appendChild(make("strong", "", w.term)); p.appendChild(document.createTextNode(": " + w.means)); c.appendChild(p); });
      return c;
    } });
    const evidence = H[1] || "";
    const refs = evidenceRefs(item, evidence);
    const hasText = (item.passages || []).length > 0 || !!item.stem;
    if (evidence) units.push({ id: "evidence", leak: leaksKey(item, evidence), build() {
      const c = card("evidence", hasText ? "Look in the text" : "A useful step");
      c.appendChild(make("p", "", evidence));
      if (refs.length && opts.onShow) {
        const b = make("button", "btn btn-soft tm-show", "Show it in the text"); b.type = "button"; b.dataset.tmShow = "1";
        b.addEventListener("click", () => opts.onShow(refs));
        c.appendChild(b);
      }
      return c;
    } });
    how.slice(0, -1).forEach((t, i) => units.push({ id: "step", n: i + 1, leak: leaksKey(item, t), build() {
      const c = card("step", "Step " + (i + 1));
      c.appendChild(make("p", "", t));
      return c;
    } }));
    units.push({ id: "answer", build() {
      const c = card("answer", "The answer", "tm-answer");
      const last = how[how.length - 1];
      if (last) { const s = make("p", "tm-laststep"); if (how.length > 1) s.appendChild(make("strong", "", "Step " + how.length + ": ")); s.appendChild(document.createTextNode(last)); c.appendChild(s); }
      const a = make("p", "tm-final");
      a.appendChild(make("strong", "tm-final-label", item.type === "cr" ? "One good answer: " : "Answer: "));
      a.appendChild(document.createTextNode(opts.answerText || ""));
      c.appendChild(a);
      if (item.type === "cr") {
        c.appendChild(make("p", "tm-note", "Other answers can also be right."));
        if ((item.criteria || []).length) {
          c.appendChild(make("p", "tm-sub", "A good answer:"));
          const ul = make("ul", "tm-list"); item.criteria.forEach(t => ul.appendChild(make("li", "", t))); c.appendChild(ul);
        }
      }
      if (item.why && how.length && item.why !== last) c.appendChild(make("p", "tm-why", item.why));
      if (item.misconception) c.appendChild(make("p", "tm-mix", item.misconception));
      return c;
    } });
    return { units, hints: H, refs, how };
  }

  /* Closed "More from this lesson": the closest Watch Me example and the Learn It card. Existing lesson
     content, shown in place; reading it records nothing. */
  function more(L, item, onOverview) {
    const d = make("details", "tm-more");
    d.appendChild(make("summary", "", "More from this lesson"));
    const body = make("div", "tm-more-body");
    const T = (L && L.teach) || {};
    const ex = bestExample(L, item);
    if (ex) {
      const w = make("div", "tm-example");
      w.appendChild(make("h4", "tm-sub", "A worked example (a different question)"));
      if ((ex.show || []).length || ex.figure) { const b = make("div", "ex-body"); if (PP.cursiveLines) PP.cursiveLines(b, ex.show || []); if (ex.figure) PP.figures(b, ex.figure); w.appendChild(b); }
      w.appendChild(make("p", "learn-ask", ex.ask));
      const ol = make("ol", "learn-steps"); (ex.steps || []).forEach(s => ol.appendChild(make("li", "", s))); w.appendChild(ol);
      const a = make("p", "learn-answer"); a.appendChild(make("strong", "", "Answer: ")); a.appendChild(document.createTextNode(ex.answer || "")); w.appendChild(a);
      body.appendChild(w);
    }
    if (T.big || (T.points || []).length) {
      const l = make("div", "tm-lesson");
      l.appendChild(make("h4", "tm-sub", "The lesson"));
      if (T.big) l.appendChild(make("p", "big-idea", T.big));
      if ((T.points || []).length) { const ul = make("ul", "teach-points"); T.points.forEach(p => ul.appendChild(make("li", "", p))); l.appendChild(ul); }
      body.appendChild(l);
    }
    if (onOverview) { const b = make("button", "btn btn-soft tm-overview", "Open the Skill overview"); b.type = "button"; b.addEventListener("click", onOverview); body.appendChild(b); }
    d.appendChild(body);
    return d;
  }

  /* highlight the paragraphs a hint points to (class + a visible left edge, never colour alone) */
  function highlight(refs) {
    clearHighlight();
    let first = null;
    refs.forEach(r => {
      const art = document.querySelector('#passage-pane-body .passage[data-pid="' + r.pid + '"]'); if (!art) return;
      const para = art.querySelectorAll(".para")[r.para - 1]; if (!para) return;
      para.classList.add("is-teach-focus"); if (!first) first = para;
    });
    return first;
  }
  function clearHighlight() { document.querySelectorAll("#passage-pane-body .is-teach-focus").forEach(n => n.classList.remove("is-teach-focus")); }

  window.PP_TEACH = { compose, more, highlight, clearHighlight, evidenceRefs, formatLine, bestPoint, keyTexts, leaksKey };
})();

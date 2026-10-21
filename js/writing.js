/* Peach Prep — the extended writing task.

   Mirrors the test: read two sources, then write an opinion essay that
   develops the PROVIDED reasons with information from the sources.
   1 Read · 2 Plan · 3 Write · 4 Check (the official Writer's Checklist)
   · For parents (score with the three-trait rubric, then a model essay).
   Nothing is scored by a machine. The plan, draft and checklist are kept
   in this browser only (localStorage, guarded), so a child can come back. */
(function () {
  "use strict";
  const { make, clear, el } = PP;
  const S = window.PP_SITE;
  const TABS = ["sources", "plan", "write", "check", "score"];
  let task = null, data = null;

  function key() { return "pp.task." + task.id; }
  function load() {
    let d = null;
    try { d = JSON.parse(localStorage.getItem(key()) || "null"); } catch (e) { d = null; }
    /* PP-003 D8: keep only fields of the right type, so damaged storage
       (for example "plan": null) cannot break the essay screen */
    const obj = x => !!x && typeof x === "object" && !Array.isArray(x);
    if (!obj(d)) d = {};
    const plan = {};
    if (obj(d.plan)) Object.keys(d.plan).forEach(k => { if (typeof d.plan[k] === "string") plan[k] = d.plan[k]; });
    const scores = {};
    if (obj(d.scores)) Object.keys(d.scores).forEach(k => { if (typeof d.scores[k] === "number" && isFinite(d.scores[k])) scores[k] = d.scores[k]; });
    data = {
      plan,
      draft: typeof d.draft === "string" ? d.draft : "",
      checks: Array.isArray(d.checks) ? d.checks.filter(i => Number.isInteger(i)) : [],
      scores
    };
  }
  function save() { try { localStorage.setItem(key(), JSON.stringify(data)); } catch (e) { /* storage off: keep in memory */ } }

  function words(t) { return (t.trim().match(/\S+/g) || []).length; }
  function paras(t) { return t.split(/\n\s*\n/).map(x => x.trim()).filter(Boolean).length; }

  function field(label, id, value, rows, onInput, help) {
    const w = make("div", "field");
    const l = make("label", "field-label", label); l.htmlFor = id; w.appendChild(l);
    if (help) w.appendChild(make("p", "field-help", help));
    const t = make("textarea", "field-input"); t.id = id; t.rows = rows; t.value = value || "";
    t.addEventListener("input", () => onInput(t.value));
    w.appendChild(t);
    return w;
  }

  function buildPrompt() {
    const host = el("write-prompt"); clear(host);
    host.appendChild(make("p", "prompt-text", task.prompt));
    host.appendChild(make("p", "prompt-label", "Use these reasons:"));
    const ol = make("ol", "reason-list");
    task.reasons.forEach(r => ol.appendChild(make("li", "", r)));
    host.appendChild(ol);
  }

  function buildSources() {
    const host = el("w-sources"); clear(host);
    host.appendChild(make("h2", "wh2", "Read the sources"));
    host.appendChild(make("p", "muted", "Read both sources. Look for facts and details that support each reason."));
    const body = make("div", "w-source-body");
    window.PP_PLAYER.renderPassages({ passages: task.sources }, body);
    host.appendChild(body);
  }

  function buildPlan() {
    const host = el("w-plan"); clear(host);
    const p = task.planner || {};
    host.appendChild(make("h2", "wh2", "Plan your essay"));
    host.appendChild(field("My opinion", "pl-opinion", data.plan.opinion, 2, v => { data.plan.opinion = v; save(); }, p.opinion));
    task.reasons.forEach((r, i) => {
      const box = make("div", "plan-reason");
      box.appendChild(make("p", "plan-reason-title", "Reason " + (i + 1) + ": " + r));
      box.appendChild(field("Evidence from the sources (in my own words)", "pl-ev" + i, data.plan["ev" + i], 3,
        v => { data.plan["ev" + i] = v; save(); }, (p.reasonPrompts || [])[i]));
      host.appendChild(box);
    });
    host.appendChild(field("How I will end", "pl-end", data.plan.end, 2, v => { data.plan.end = v; save(); }, p.conclusion));
    const go = make("button", "btn btn-primary", "Next: write my essay"); go.type = "button";
    go.addEventListener("click", () => select("write"));
    host.appendChild(go);
  }

  function buildWrite() {
    const host = el("w-write"); clear(host);
    host.appendChild(make("h2", "wh2", "Write your essay"));
    host.appendChild(make("p", "muted", "Write at least four paragraphs: an introduction with your opinion, one paragraph for each reason with evidence from the sources, and a conclusion. Leave a blank line between paragraphs."));
    const t = make("textarea", "draft"); t.id = "w-draft"; t.rows = 16; t.value = data.draft;
    t.setAttribute("aria-label", "My essay");
    t.setAttribute("spellcheck", "false");
    const stats = make("p", "draft-stats"); stats.id = "w-stats"; stats.setAttribute("aria-live", "polite");
    function upd() {
      const w = words(t.value), n = paras(t.value);
      stats.textContent = w + " words · " + n + " paragraph" + (n === 1 ? "" : "s") +
        (w > 0 && w < 120 ? " · Keep going. A very short essay may not earn full points." : "");
    }
    t.addEventListener("input", () => { data.draft = t.value; save(); upd(); });
    host.appendChild(t); host.appendChild(stats); upd();
    host.appendChild(make("p", "note", "Spell-check is off here. Peach Prep does not score the essay; a grown-up uses the For parents tab."));
    const go = make("button", "btn btn-primary", "Next: check my work"); go.type = "button";
    go.addEventListener("click", () => select("check"));
    host.appendChild(go);
  }

  function buildCheck() {
    const host = el("w-check"); clear(host);
    host.appendChild(make("h2", "wh2", "Writer's Checklist"));
    host.appendChild(make("p", "muted", "This is the same checklist you will see on the test. Reread your essay and check each one."));
    host.appendChild(make("p", "checklist-head", "In my well-written text, I made sure to:"));
    const ul = make("ul", "check-boxes");
    S.checklist.forEach((c, i) => {
      const li = make("li");
      const lab = make("label", "check-item");
      const cb = make("input"); cb.type = "checkbox"; cb.checked = data.checks.indexOf(i) >= 0;
      cb.addEventListener("change", () => {
        const k = data.checks.indexOf(i);
        if (cb.checked && k < 0) data.checks.push(i); if (!cb.checked && k >= 0) data.checks.splice(k, 1);
        save();
      });
      lab.appendChild(cb); lab.appendChild(make("span", "", c));
      li.appendChild(lab); ul.appendChild(li);
    });
    host.appendChild(ul);
    const go = make("button", "btn btn-primary", "I'm done: show a grown-up"); go.type = "button";
    go.addEventListener("click", () => select("score"));
    host.appendChild(go);
  }

  function buildScore() {
    const host = el("w-score"); clear(host);
    host.appendChild(make("h2", "wh2", "For parents: score the essay"));
    host.appendChild(make("p", "", "Read your child's essay, then choose a score for each trait. These follow GaDOE's Grade 3 three-trait rubric, in plain words."));
    /* PP-004: one coaching tip for the whole tab */
    host.appendChild(make("p", "note", "Score each trait on its own. Open \u201cHow to score this trait, step by step\u201d for a short routine. When you talk with your child, praise one thing and pick one next step; fixing everything at once is too much."));
    if (data.draft.trim()) {
      const box = make("div", "draft-view");
      data.draft.split(/\n\s*\n/).forEach(pp => { if (pp.trim()) box.appendChild(make("p", "", pp.trim())); });
      host.appendChild(box);
    } else host.appendChild(make("p", "muted", "No essay written yet."));
    const lk = task.lookFors || {};
    const keys = ["purpose", "evidence", "conventions"];
    let total = make("p", "score-total");
    function sum() {
      const t = keys.reduce((a, k) => a + (data.scores[k] || 0), 0);
      const done = keys.every(k => typeof data.scores[k] === "number");
      total.textContent = done ? "Total: " + t + " of 8 points" : "Choose a score for each trait to see the total.";
    }
    S.rubric.forEach((r, i) => {
      const k = keys[i];
      const card = make("fieldset", "trait");
      card.appendChild(make("legend", "trait-name", r.trait + " (0 to " + r.max + ")"));
      const ul = make("ul", "plist"); r.plain.forEach(x => ul.appendChild(make("li", "", x))); card.appendChild(ul);
      if (lk[k] && lk[k].length) {
        card.appendChild(make("p", "std-ald-head", "For this prompt, look for:"));
        const u2 = make("ul", "plist"); lk[k].forEach(x => u2.appendChild(make("li", "", x))); card.appendChild(u2);
      }
      /* PP-004: step-by-step scoring, the plain-words score levels and what to say to the child */
      const g = (task.scoring || {})[k];
      if (g) {
        const sd = make("details", "score-steps");
        sd.appendChild(make("summary", "std-ald-head", "How to score this trait, step by step"));
        if ((g.steps || []).length) {
          const ol = make("ol", "plist"); g.steps.forEach(x => ol.appendChild(make("li", "", x))); sd.appendChild(ol);
        }
        if (g.points) {
          sd.appendChild(make("p", "std-ald-head", "Which score fits best?"));
          const ul = make("ul", "plist score-levels");
          for (let v = r.max; v >= 0; v--) if (g.points[v]) {
            const li = make("li"); li.appendChild(make("strong", "", v + (v === 1 ? " point: " : " points: "))); li.appendChild(document.createTextNode(g.points[v])); ul.appendChild(li);
          }
          sd.appendChild(ul);
        }
        if ((g.say || []).length) {
          sd.appendChild(make("p", "std-ald-head", "What to say to your child"));
          const ul = make("ul", "plist"); g.say.forEach(x => ul.appendChild(make("li", "", x))); sd.appendChild(ul);
        }
        card.appendChild(sd);
      }
      /* the authored evidence key: where each provided reason is supported in the sources */
      if (k === "evidence" && (task.evidence || []).length) {
        const ev = make("details", "evidence-key");
        ev.appendChild(make("summary", "std-ald-head", "Where the support is in the sources"));
        (task.reasons || []).forEach((reason, ri) => {
          const refs = task.evidence.filter(e => e.reason === ri);
          if (!refs.length) return;
          ev.appendChild(make("p", "", "Reason " + (ri + 1) + ": " + reason));
          const u3 = make("ul", "plist");
          refs.forEach(e => {
            const parts = String(e.ref || "").split(":");
            const si = (task.sources || []).findIndex(p => p.id === (e.source || parts[0]));
            const src = si >= 0 ? task.sources[si] : null;
            const where = (src ? "Source " + (si + 1) + (src.title ? ", “" + src.title + "”" : "") : (e.source || parts[0])) +
              (parts[1] ? ", paragraph " + parts[1] : "") + (parts[2] ? ", sentence " + parts[2] : "");
            u3.appendChild(make("li", "", where + ": " + e.note));
          });
          ev.appendChild(u3);
        });
        card.appendChild(ev);
      }
      const opts = make("div", "score-opts");
      for (let v = 0; v <= r.max; v++) {
        const lab = make("label", "score-opt");
        const rb = make("input"); rb.type = "radio"; rb.name = "sc-" + k; rb.value = String(v);
        rb.checked = data.scores[k] === v;
        rb.addEventListener("change", () => { data.scores[k] = v; save(); sum(); });
        lab.appendChild(rb); lab.appendChild(make("span", "", String(v)));
        opts.appendChild(lab);
      }
      card.appendChild(opts);
      host.appendChild(card);
    });
    host.appendChild(total); sum();
    host.appendChild(make("p", "note", "This is a home score for practice, not an official Georgia Milestones score."));
    host.appendChild(make("p", "note", S.rubricNote));

    if (task.model) {
      const det = make("details", "model");
      const sumEl = make("summary", "model-sum", "Grown-ups: show a model essay for this prompt");
      det.appendChild(sumEl);
      /* Keep the model out of the child's way until there is an essay. */
      guard(det, sumEl, "This shows a finished essay for this prompt. Show it only after your child has written theirs. Show it now?");
      const body = make("div", "model-body");
      task.model.paragraphs.forEach(pp => body.appendChild(make("p", "", pp)));
      if (task.model.notes && task.model.notes.length) {
        body.appendChild(make("p", "std-ald-head", "Why this would score well:"));
        const u = make("ul", "plist"); task.model.notes.forEach(n => u.appendChild(make("li", "", n))); body.appendChild(u);
      }
      det.appendChild(body); host.appendChild(det);
    }

    /* PP-004: leveled examples (for example 2, 4 and 6 points), each with trait-by-trait reasons */
    if ((task.examples || []).length) {
      const names = { purpose: "Purpose and Organization", evidence: "Evidence and Elaboration", conventions: "Language Usage and Conventions" };
      const max = { purpose: 3, evidence: 3, conventions: 2 };
      const det = make("details", "model examples");
      const sumEl = make("summary", "model-sum", "Grown-ups: show example essays at lower scores (" + task.examples.map(x => x.total).join(", ") + " of 8)");
      det.appendChild(sumEl);
      guard(det, sumEl, "These example essays use facts from the sources. Show them only after your child has written theirs. Show them now?");
      const body = make("div", "model-body");
      body.appendChild(make("p", "note", "These are examples scored by Peach Prep using the official rubric's descriptions. They are original essays, not official GaDOE anchor papers. The mistakes in them are on purpose. Use them to compare, not as a score for your child."));
      task.examples.forEach(x => {
        const box = make("section", "ex-level");
        box.appendChild(make("h3", "ex-level-head", "Example: " + x.total + " of 8 points"));
        box.appendChild(make("p", "ex-level-scores", keys.map(k => names[k] + " " + x.scores[k] + " of " + max[k]).join(" · ")));
        const essay = make("div", "draft-view ex-essay");
        x.paragraphs.forEach(pp => essay.appendChild(make("p", "", pp)));
        box.appendChild(essay);
        box.appendChild(make("p", "std-ald-head", "Why it got these scores:"));
        const u = make("ul", "plist"); (x.notes || []).forEach(n => u.appendChild(make("li", "", n))); box.appendChild(u);
        if (x.next) { const np = make("p", "ex-next"); np.appendChild(make("strong", "", "Next step for this writer: ")); np.appendChild(document.createTextNode(x.next)); box.appendChild(np); }
        body.appendChild(box);
      });
      det.appendChild(body); host.appendChild(det);
    }
    const reset = make("button", "btn btn-soft", "Start this task over"); reset.type = "button";
    reset.addEventListener("click", () => {
      if (!window.confirm("Clear the plan, essay, checklist and scores for this task?")) return;
      data = { plan: {}, draft: "", checks: [], scores: {} }; save(); buildAll(); select("sources");
    });
    host.appendChild(reset);
  }

  /* ask before opening a details panel that shows source-based answers, until the child has written */
  function guard(det, sumEl, msg) {
    sumEl.addEventListener("click", e => {
      if (det.open) return;
      if (words(data.draft) < 80 && !window.confirm(msg)) e.preventDefault();
    });
  }

  function buildAll() { buildPrompt(); buildSources(); buildPlan(); buildWrite(); buildCheck(); buildScore(); }

  function select(tab) {
    if (tab === "score") buildScore();
    el("write-grid").dataset.tab = tab;
    document.querySelectorAll("[data-wtab]").forEach(b => b.setAttribute("aria-selected", b.dataset.wtab === tab ? "true" : "false"));
    TABS.forEach(t => el("w-" + t).classList.toggle("is-on", t === tab));
    window.scrollTo(0, 0);
  }

  function start(id) {
    task = PP.taskById[id];
    if (!task) return;
    if (window.PP_APP.current() !== "write") window.PP_APP.rememberReturn();
    load();
    el("write-title").textContent = task.title;
    buildAll();
    select("sources");
    window.PP_APP.show("write");
    window.PP_APP.setHash("#write/" + task.id);
    window.PP_APP.track();
    el("write-title").focus();
  }

  function init() {
    document.querySelectorAll("[data-wtab]").forEach(b => b.addEventListener("click", () => select(b.dataset.wtab)));
    PP.tablist(document.querySelector(".wtabs"));
  }
  window.PP_WRITING = { init, start, select, state: () => ({ id: task && task.id, data }) };
})();

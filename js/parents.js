/* Peach Prep — the parent guide. Everything here is rendered from
   js/data/site.js (blueprint, rubric, checklist), js/data/standards.js
   (every Grade 3 ELA element) and js/data/alds.js (GaDOE's achievement
   level descriptors, verbatim). */
(function () {
  "use strict";
  const { make, clear, el } = PP;
  const S = window.PP_SITE;
  const TESTED = {
    reading: ["On the test", "Reading (Interpreting Texts)"],
    writing: ["On the test", "Writing (Constructing Texts)"],
    both: ["On the test", "Reading and Writing"],
    no: ["Not tested", "Not assessed on the Grade 3 Milestones"],
    classroom: ["Classroom only", "Assessed in the classroom, not on the Milestones"],
    embedded: ["Built in", "Practices are built into other questions, not scored separately"]
  };

  function link(src) {
    const a = make("a", "", src.title); a.href = src.url; a.target = "_blank"; a.rel = "noopener"; return a;
  }
  function table(headers, rows, cls) {
    const t = make("table", "ptable" + (cls ? " " + cls : ""));
    const hr = make("tr"); headers.forEach(h => hr.appendChild(make("th", "", h)));
    const th = make("thead"); th.appendChild(hr); t.appendChild(th);
    const tb = make("tbody");
    rows.forEach(r => { const tr = make("tr"); r.forEach((c, i) => { const td = make("td", "", c); td.dataset.label = headers[i]; tr.appendChild(td); }); tb.appendChild(tr); });
    t.appendChild(tb);
    const w = make("div", "table-wrap"); w.appendChild(t); return w;
  }
  function h(level, text) { return make("h" + level, "ph" + level, text); }
  function p(text, cls) { return make("p", cls || "", text); }
  function ul(items, cls) { const u = make("ul", cls || "plist"); items.forEach(x => u.appendChild(make("li", "", x))); return u; }

  /* ---------- tab: the test ---------- */
  function buildTest() {
    const host = el("ptab-test"); clear(host);
    const d = S.design;
    host.appendChild(h(2, "The test at a glance"));
    host.appendChild(p("The Grade 3 English Language Arts test is worth " + d.totalPoints + " points. It has " + d.totalItems +
      " questions; " + d.scoredItems + " count toward the score and " + d.fieldTest + " are tryout questions that do not count. " +
      "It has two parts: Interpreting Texts (reading, " + d.totals.it[1] + " points) and Constructing Texts (writing, " + d.totals.ct[1] + " points)."));
    host.appendChild(table(["Kind of question", "Questions", "Points", "Reading part", "Writing part"],
      d.rows.map(r => [r.type, String(r.items), String(r.points), r.it[0] + " (" + r.it[1] + " pts)", r.ct[0] + " (" + r.ct[1] + " pts)"])
        .concat([["Total", String(d.totals.items), String(d.totals.points), d.totals.it[0] + " (" + d.totals.it[1] + " pts)", d.totals.ct[0] + " (" + d.totals.ct[1] + " pts)"]])));
    host.appendChild(p("The 2-point questions are worth " + (d.rows[1].points) + " of the 60 points, so the question formats matter. They include: " +
      d.teTypes.join(", ") + ". Peach Prep practices each of these."));

    host.appendChild(h(2, "What each part covers"));
    host.appendChild(table(["Area", "What it means", "Reading part (codes)", "Writing part (codes)"],
      S.claims.map(c => [c.claim, c.what, c.it, c.ct])));
    host.appendChild(p(S.claimPoints, "note"));

    host.appendChild(h(2, "Kinds of thinking"));
    host.appendChild(p("Most points ask a child to use a skill or explain with evidence, not just recall."));
    host.appendChild(table(["Depth of Knowledge", "Points", "Share of the test"], d.dok.map(r => [r.level, r.points, r.pct])));

    host.appendChild(h(2, "What is not on the test"));
    host.appendChild(ul([
      "Foundations (phonics, spelling, fluency, handwriting) is assessed in the classroom only.",
      "On the grammar chart, only Master and Reinforce skills are tested. Skills marked Introduce or Continue in Grade 3 are not.",
      "The ELA Practices are built into the reading and writing questions and are not scored on their own."
    ]));

    if (window.PP_ALDS && window.PP_ALDS.policy) {
      host.appendChild(h(2, "The four achievement levels"));
      host.appendChild(p("Scores are reported in four levels. GaDOE's descriptions:"));
      const pol = window.PP_ALDS.policy;
      host.appendChild(table(["Level", "What it means"], window.PP_ALDS.levels.map(l => [l + " Learner", pol[l] || ""])));
      host.appendChild(p("The Every standard tab shows what each level looks like for each standard.", "note"));
    }

    host.appendChild(h(2, "Official sources"));
    const u = make("ul", "plist");
    Object.keys(S.sources).forEach(k => {
      const s = S.sources[k]; const li = make("li"); li.appendChild(link(s));
      if (s.date) li.appendChild(document.createTextNode(" (" + s.date + ")"));
      u.appendChild(li);
    });
    host.appendChild(u);
    host.appendChild(p("GaDOE documents are linked, not copied. Peach Prep is independent and not affiliated with GaDOE.", "note"));
  }

  /* ---------- tab: every standard ---------- */
  const filt = { domain: "all", tested: false, q: "" };
  function setsFor(code) {
    const base = code.split(":")[0];
    return PP.sets.filter(s => s.section !== "skill").map(s => {
      const n = s.items.filter(it => (it.std || []).some(c => c === code || (code.indexOf(":") < 0 && c === base))).length;
      return n ? { set: s, n } : null;
    }).filter(Boolean);
  }
  function aldKey(code) {
    const m = /^(3\.[TL]\.[A-Z]+\.\d)/.exec(code);
    return m ? m[1] : null;
  }
  function buildStandards() {
    const host = el("ptab-standards"); clear(host);
    host.appendChild(h(2, "Every Grade 3 ELA standard"));
    host.appendChild(p("Each line shows whether it is on the Milestones, what it means, what Proficient work looks like (from GaDOE), and where to practice it. Tap a line to open it."));
    const bar = make("div", "filters");
    const dom = make("select", "filter-select"); dom.setAttribute("aria-label", "Domain");
    [["all", "All domains"], ["Texts", "Texts (reading and writing)"], ["Language", "Language (grammar and vocabulary)"],
     ["Foundations", "Foundations (classroom only)"], ["Practices", "Practices (built in)"]].forEach(([v, t]) => {
      const o = make("option", "", t); o.value = v; dom.appendChild(o);
    });
    dom.value = filt.domain;
    dom.addEventListener("change", () => { filt.domain = dom.value; drawList(); });
    const lab = make("label", "filter-check");
    const cb = make("input"); cb.type = "checkbox"; cb.checked = filt.tested;
    cb.addEventListener("change", () => { filt.tested = cb.checked; drawList(); });
    lab.appendChild(cb); lab.appendChild(document.createTextNode(" Only what is on the test"));
    const q = make("input", "filter-search"); q.type = "search"; q.placeholder = "Search, e.g. main idea"; q.setAttribute("aria-label", "Search standards");
    q.value = filt.q;
    q.addEventListener("input", () => { filt.q = q.value.trim().toLowerCase(); drawList(); });
    bar.appendChild(dom); bar.appendChild(lab); bar.appendChild(q);
    host.appendChild(bar);
    const count = make("p", "filter-count"); count.id = "std-count"; host.appendChild(count);
    const list = make("div", "std-list"); list.id = "std-list"; host.appendChild(list);
    drawList();
  }
  function drawList() {
    const list = el("std-list"); clear(list);
    const all = window.PP_STANDARDS.filter(s =>
      (filt.domain === "all" || s.strand === filt.domain) &&
      (!filt.tested || ["reading", "writing", "both"].indexOf(s.tested) >= 0) &&
      (!filt.q || (s.code + " " + s.text + " " + (s.plain || "") + " " + (s.gum || "")).toLowerCase().indexOf(filt.q) >= 0));
    el("std-count").textContent = all.length + " of " + window.PP_STANDARDS.length + " standards shown";
    let group = null, box = null;
    all.forEach(s => {
      if (s.group !== group) {
        group = s.group;
        list.appendChild(make("h3", "std-group", group));
      }
      const det = make("details", "std");
      det.dataset.code = s.code;
      const sum = make("summary", "std-sum");
      sum.appendChild(make("span", "std-code", s.gum ? "Grammar chart (" + s.level + ")" : s.display));
      sum.appendChild(make("span", "std-text", s.gum || s.text));
      const tb = TESTED[s.tested] || ["", ""];
      sum.appendChild(make("span", "std-badge is-" + s.tested, tb[0]));
      det.appendChild(sum);
      const body = make("div", "std-body");
      if (s.plain) body.appendChild(make("p", "std-plain", s.plain));
      if (s.gum) body.appendChild(make("p", "", "Grade 3 level: " + ({ M: "Master by the end of grade 3", R: "Reinforce (learned earlier)", I: "Introduce this year", C: "Continue (not yet mastered)" })[s.level] + ". " + (s.testedNote || "")));
      else body.appendChild(make("p", "", "Standard: " + s.text));
      body.appendChild(make("p", "std-tested", tb[1] + "."));
      const k = aldKey(s.code.split(":")[0]);
      const ald = k && window.PP_ALDS && window.PP_ALDS.standards[k];
      if (ald && ["reading", "writing", "both"].indexOf(s.tested) >= 0) {
        const lv = ald.Proficient && ald.Proficient.length ? "Proficient" : null;
        if (lv) {
          body.appendChild(make("p", "std-ald-head", "What Proficient work looks like (GaDOE, for all of " + k + "):"));
          body.appendChild(ul(ald.Proficient, "plist ald"));
        }
        if (ald.Distinguished && ald.Distinguished.length) {
          body.appendChild(make("p", "std-ald-head", "Distinguished:"));
          body.appendChild(ul(ald.Distinguished, "plist ald"));
        }
      }
      const prac = make("div", "std-practice");
      prac.appendChild(make("p", "std-ald-head", "Where to practice"));
      const pu = make("ul", "plist");
      {
        /* the skill page for this standard: Teach, Learn, Practice, Test */
        const li = make("li");
        const has = PP.lessons && PP.lessons[s.code];
        const b = make("button", "linkish", has ? "Peach Prep skill lesson: Teach, Learn, Practice, Test" : "Peach Prep skill page for " + (s.gum ? "this grammar skill" : s.display));
        b.type = "button"; b.addEventListener("click", () => window.PP_SKILLS.open(s.code));
        li.appendChild(b); pu.appendChild(li);
      }
      setsFor(s.code).forEach(x => {
        const li = make("li");
        const b = make("button", "linkish", "Peach Prep: " + x.set.title);
        b.type = "button"; b.addEventListener("click", () => window.PP_PLAYER.start(x.set.id, "practice"));
        li.appendChild(b); li.appendChild(document.createTextNode(" (" + x.n + " question" + (x.n > 1 ? "s" : "") + ")"));
        pu.appendChild(li);
      });
      (s.where || []).forEach(w => {
        const li = make("li");
        const a = make("a", "", w.app + ": " + w.place); a.href = w.url; a.target = "_blank"; a.rel = "noopener";
        li.appendChild(a); pu.appendChild(li);
      });
      if (pu.children.length < 2) pu.appendChild(make("li", "muted", s.tested === "classroom" || s.tested === "embedded" || s.tested === "no"
        ? "Not practiced on Peach Prep." : "Practice for this standard is being added."));
      prac.appendChild(pu); body.appendChild(prac);
      det.appendChild(body);
      list.appendChild(det);
    });
  }

  /* ---------- tab: the essay ---------- */
  function buildEssay() {
    const host = el("ptab-essay"); clear(host);
    host.appendChild(h(2, "The writing task"));
    host.appendChild(p("The test has one extended writing task worth 8 of the 60 points. Your child reads sources, then writes an opinion essay that develops reasons with information from those sources."));
    host.appendChild(h(2, "How it is scored"));
    host.appendChild(p("GaDOE's rubric has three traits. In plain words:"));
    S.rubric.forEach(r => {
      const card = make("div", "trait");
      card.appendChild(make("h3", "trait-name", r.trait + " (0 to " + r.max + " points)"));
      card.appendChild(ul(r.plain));
      host.appendChild(card);
    });
    host.appendChild(p(S.rubricNote, "note"));
    const l1 = make("p", "note"); l1.appendChild(document.createTextNode("Official rubric: ")); l1.appendChild(link(S.sources.rubric));
    host.appendChild(l1);
    host.appendChild(h(2, "The Writer's Checklist"));
    host.appendChild(p("Students see this exact checklist during the test. GaDOE allows it to be printed for practice during the school year."));
    const box = make("div", "checklist");
    box.appendChild(make("p", "checklist-head", "In my well-written text, I made sure to:"));
    box.appendChild(ul(S.checklist, "check-ul"));
    host.appendChild(box);
    const l2 = make("p", "note"); l2.appendChild(document.createTextNode("Source: ")); l2.appendChild(link(S.sources.checklist));
    host.appendChild(l2);
  }

  /* ---------- tab: how to use ---------- */
  function buildPlan() {
    const host = el("ptab-plan"); clear(host);
    host.appendChild(h(2, "A simple plan"));
    const ol = make("ol", "plan");
    S.plan.forEach(s => { const li = make("li"); li.appendChild(make("strong", "", s.step + ". ")); li.appendChild(document.createTextNode(s.text)); ol.appendChild(li); });
    host.appendChild(ol);
    host.appendChild(h(2, "Practice and Test modes"));
    host.appendChild(ul([
      "Practice: one question at a time. Help me gives a hint, then narrows the choices, then walks through the answer. Your child still picks it. Asking for help is never counted as a mistake.",
      "Test: no hints, like the real test. Results are in points, by skill, and each missed question has Show me how."
    ]));
    const l = make("p"); l.appendChild(document.createTextNode("Official practice: ")); l.appendChild(link(S.sources.experience));
    host.appendChild(l);
  }

  let curTab = "test";
  function select(tab) {
    curTab = tab;
    if (window.PP_APP.current() === "parents") window.PP_APP.setHash("#parents" + (tab && tab !== "test" ? "/" + tab : ""));
    document.querySelectorAll("[data-ptab]").forEach(b => b.setAttribute("aria-selected", b.dataset.ptab === tab ? "true" : "false"));
    ["test", "standards", "essay", "plan"].forEach(t => { el("ptab-" + t).hidden = t !== tab; });
  }
  /* Where the parent was: open standards and scroll position, so Back
     from a practice set returns to the same spot. */
  function snapshot() {
    return { open: Array.from(document.querySelectorAll("#std-list details.std[open]")).map(d => d.dataset.code), y: window.scrollY };
  }
  function open(tab, restore) {
    tab = ["test", "standards", "essay", "plan"].indexOf(tab) >= 0 ? tab : "test";
    buildTest(); buildStandards(); buildEssay(); buildPlan();
    window.PP_APP.show("parents");
    select(tab);
    window.PP_APP.setHash("#parents" + (tab !== "test" ? "/" + tab : ""));
    window.PP_APP.track();
    if (restore) {
      (restore.open || []).forEach(c => { const d = document.querySelector('#std-list details.std[data-code="' + c + '"]'); if (d) d.open = true; });
      window.scrollTo(0, restore.y || 0);
      el("parents-title").focus({ preventScroll: true });
    } else el("parents-title").focus();
  }
  function init() {
    document.querySelectorAll("[data-ptab]").forEach(b => b.addEventListener("click", () => select(b.dataset.ptab)));
  }
  window.PP_PARENTS = { init, open, select, snapshot, tab: () => curTab };
})();

/* Peach Prep — assessment levels 2 and 3, and the assessment coverage map (assignment §11, §12;
   expansion 2026-10-22, ENG-09).

   Level 2, standard reviews: one per Georgia parent standard (#std/<parent>), covering each component
   that has an ACCEPTED lesson (js/data/accepted.js). Questions come only from those lessons' scored
   checks (test / testB), never from items still in review and never from written (cr) items. More than
   five components are split into parts, each submitted on its own.
   Level 3, the cumulative ELA review (#review): curriculum-review parts by ELA area, plus links to the
   blueprint-shaped practice test, the writing tasks and the grown-up-observed activities. No combined score.
   The coverage map (#coverage): for every standard, what the lesson check, the standard review, the
   cumulative review and grown-up or writing evidence cover, and what is not covered yet.

   Results go in a NEW key, pp.review.v1 = { v: 1, r: { <setId>: { a: [ { d, got, max, n, comps } ] } } }
   (last 20 per set). A review never writes pp.progress.v1, so it can never award a lesson pass.
   Nothing is written on page load or on opening a page: only submitting a review saves. */
(function () {
  "use strict";
  const { make, clear, el } = PP;
  const KEY = "pp.review.v1";
  const BAD = k => k === "__proto__" || k === "constructor" || k === "prototype";
  const isObj = v => !!v && typeof v === "object" && !Array.isArray(v);
  const words = n => PP.countWord(n);
  const cap = t => { t = String(t || ""); return t.charAt(0).toUpperCase() + t.slice(1); };
  const S = () => window.PP_SKILLS;

  /* ---------- the store ---------- */
  let available = true, damaged = false, saved = false;
  const data = { v: 1, r: Object.create(null) };
  function cleanAttempt(a) {
    if (!isObj(a) || typeof a.d !== "string") return null;
    const got = Number(a.got), max = Number(a.max);
    if (!Number.isFinite(got) || !Number.isFinite(max) || max <= 0 || got < 0 || got > max) return null;
    const out = { d: a.d.slice(0, 10), got, max };
    if (Number.isInteger(a.n)) out.n = a.n;
    if (isObj(a.comps)) { out.comps = {}; Object.keys(a.comps).forEach(c => { const v = a.comps[c]; if (!BAD(c) && Array.isArray(v) && v.length === 2 && v.every(Number.isFinite)) out.comps[c] = v.slice(); }); }
    return out;
  }
  (function load() {
    let raw = null;
    try { raw = window.localStorage.getItem(KEY); } catch (e) { available = false; return; }
    if (raw === null) return;
    let v = null;
    try { v = JSON.parse(raw); } catch (e) { damaged = true; return; }
    if (!isObj(v) || !isObj(v.r)) { damaged = true; return; }
    Object.keys(v.r).forEach(id => {
      if (BAD(id) || !isObj(v.r[id]) || !Array.isArray(v.r[id].a)) return;
      const a = v.r[id].a.map(cleanAttempt).filter(Boolean);
      if (a.length) data.r[id] = { a };
    });
  })();
  function writable() {
    if (!available) return false;
    if (saved) return true;
    return !(window.PP_PATH && window.PP_PATH.storageOK && !window.PP_PATH.storageOK());
  }
  function save() {
    saved = true;
    try { window.localStorage.setItem(KEY, JSON.stringify(data)); available = true; damaged = false; }
    catch (e) { available = false; }
  }
  const pad2 = n => String(n).padStart(2, "0");
  function today() { const d = new Date(); return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }
  function record(setId, got, max, comps) {
    const r = data.r[setId] || (data.r[setId] = { a: [] });
    const att = { d: today(), got, max, n: r.a.length + 1, comps };
    r.a = r.a.concat([att]).slice(-20);
    save();
    return att;
  }
  const last = id => { const r = data.r[id]; return r && r.a.length ? r.a[r.a.length - 1] : null; };
  function noticeText() {
    if (!writable()) return "Saving is unavailable. A review result is shown when you finish, but it is not kept after this page closes.";
    if (damaged) return "Saved review results could not be read, so none are shown. Nothing else was changed.";
    return "";
  }
  function notice() { const p = make("p", "note review-storage"); p.setAttribute("role", "status"); p.textContent = noticeText(); p.hidden = !p.textContent; return p; }

  /* ---------- building the reviews (from data only; nothing is stored) ---------- */
  const STD = window.PP_STANDARDS || [], byCode = {}; STD.forEach(s => { byCode[s.code] = s; });
  const GROUPS = window.PP_STD_GROUPS || [];
  const ACC = new Set(window.PP_ACCEPTED || []);
  const ONTEST = ["reading", "writing", "both"];
  const groupInfo = {}, codeInfo = {}, areas = [];
  let built = false;
  const used = new Set();
  function checkItems(k, code) {
    const L = PP.lessons[k];
    return [].concat(L.test || [], L.testB || []).filter(it => it.type !== "cr" && (it.std || [L.code]).indexOf(code) >= 0);
  }
  /* Passages keep their text; their ids get a per-lesson prefix ("r3p1"), because every lesson has a "p1". */
  function makeSet(id, title, picks, meta) {
    const prefix = {}, passages = [];
    let n = 0;
    const pre = k => prefix[k] || (prefix[k] = "r" + (++n));
    const items = picks.map(([k, it, comp]) => {
      const L = PP.lessons[k], p = pre(k);
      const c = JSON.parse(JSON.stringify(it));
      c.std = it.std ? it.std.slice() : [L.code]; c.comp = comp; c.src = k;
      c.passages = (it.passages || []).map(pid => p + pid);
      (it.passages || []).forEach(pid => {
        if (passages.some(x => x.id === p + pid)) return;
        const src = (L.passages || []).find(x => x.id === pid);
        if (src) passages.push(Object.assign(JSON.parse(JSON.stringify(src)), { id: p + pid }));
      });
      if (c.type === "hottext" && !c.options) { c.targets = (c.targets || []).map(r => p + r); c.answer = (c.answer || []).map(r => p + r); }
      return c;
    });
    const set = Object.assign({ id, kind: "review", section: "review", title, passages, items, next: null }, meta);
    PP.byId[id] = set;   /* addressable (#play/<id>/test) but not in PP.sets, so mixed practice lists are unchanged */
    return set;
  }
  function evidenceFor(code) {
    const out = [], ls = S().lessonsFor(code).main, x = byCode[code];
    ls.forEach(k => {
      const L = PP.lessons[k];
      if (L.write) out.push("Writing: a grown-up reads the lesson's writing activity with its checklist (" + L.title + ").");
      if (L.speak) out.push("Speaking: the “Say it out loud” card is done with a grown-up (" + L.title + ").");
      if (L.activity && L.activity.kind === "fluency") out.push("Reading aloud: a grown-up listens with the one-minute timer (" + L.title + ").");
      if (L.activity && L.activity.kind === "trace") out.push("Handwriting: a grown-up watches the cursive practice (" + L.title + ").");
      if (L.check && !(L.test || []).length) out.push("A grown-up watches and ticks the Check (" + L.title + ").");
    });
    (PP.tasks || []).forEach(t => { if ((t.std || []).indexOf(code) >= 0) out.push("Essay task “" + t.title + "”, scored by a grown-up with the rubric."); });
    if (x && x.tested === "embedded") out.push("Everyday habit: a grown-up observes it.");
    return out;
  }
  function whyNot(code) {
    const x = byCode[code], ls = S().lessonsFor(code).main;
    if (x.tested === "embedded") return "An everyday habit. A grown-up observes it; it has no questions.";
    if (!ls.length) return "There is no lesson for this yet.";
    if (!ls.some(k => ACC.has(k))) return "Its lesson's new practice is still being written or reviewed, so its check questions are not used in reviews yet.";
    return "Its lesson has no scored check questions for this code.";
  }
  function buildGroups() {
    GROUPS.forEach(g => {
      const info = { code: g.code, measures: [], notMeasured: [], evidence: [], parts: [], items: {} };
      groupInfo[g.code] = info;
      if (/^K-12/.test(g.code)) { g.order.forEach(c => info.notMeasured.push({ code: c, why: whyNot(c) })); return; }
      const picks = {};
      g.order.forEach(c => {
        const acc = S().lessonsFor(c).main.filter(k => ACC.has(k) && (PP.lessons[k].test || []).length);
        const chosen = [];
        if (acc.length === 1) {
          let pts = 0;
          for (const it of checkItems(acc[0], c)) { if (chosen.length >= 3 || (chosen.length >= 2 && pts >= 3)) break; chosen.push([acc[0], it, c]); pts += it.points; }
        } else acc.forEach(k => { const it = checkItems(k, c)[0]; if (it && chosen.length < 6) chosen.push([k, it, c]); });
        if (chosen.length) { picks[c] = chosen; info.measures.push(c); info.items[c] = chosen.length; chosen.forEach(([, it]) => used.add(it.id)); }
        else info.notMeasured.push({ code: c, why: whyNot(c) });
        evidenceFor(c).forEach(t => info.evidence.push({ code: c, text: t }));
      });
      const chunks = [];
      for (let i = 0; i < info.measures.length; i += 5) chunks.push(info.measures.slice(i, i + 5));
      chunks.forEach((codes, i) => {
        const id = "RV-" + g.code + (chunks.length > 1 ? "-P" + (i + 1) : "");
        const title = "Review: " + g.code + " " + g.name + (chunks.length > 1 ? " · part " + (i + 1) + " of " + chunks.length : "");
        makeSet(id, title, [].concat(...codes.map(c => picks[c])), { group: g.code, partNo: i + 1, parts: chunks.length, measures: codes.slice() });
        info.parts.push(id);
      });
    });
  }
  /* the cumulative curriculum review: one question per accepted lesson, by ELA area */
  const AREAS = [
    { key: "lit", name: "Reading: stories and poems", has: c => /^3\.T\.(T\.1\.[a-d]|T\.4\.a|C\.2\.[a-c]|SS\.2\.a)$/.test(c) },
    { key: "info", name: "Reading: information, structure and research", has: c => /^3\.T\.(T\.2\.[a-c]|SS\.1\.a|C\.1\.[ab]|T\.3\.a|RA\.1\.[ab]|RA\.2\.[ab])$/.test(c) },
    { key: "write", name: "Writing and revising questions", has: c => !!byCode[c] && byCode[c].strand === "Texts" && byCode[c].tested === "writing" },
    { key: "lang", name: "Language: grammar and vocabulary", has: c => /^3\.L\./.test(c) && !!byCode[c] && ONTEST.indexOf(byCode[c].tested) >= 0 }
  ];
  function catalogOrder() { return [].concat(...(window.PP_CATALOG || []).map(c => [].concat(...c.groups.map(g => g.skills)))).filter(k => PP.lessons[k]); }
  function buildCumulative() {
    const order = catalogOrder();
    AREAS.forEach(A => {
      const codes = STD.filter(s => A.has(s.code)).map(s => s.code);
      const lessons = order.filter(k => A.has(PP.lessons[k].code) && ACC.has(k) && (PP.lessons[k].test || []).length);
      const picks = [];
      lessons.forEach(k => {
        const L = PP.lessons[k];
        const cand = [].concat((L.testB || []).slice().reverse(), (L.test || []).slice().reverse()).filter(it => it.type !== "cr" && (it.std || [L.code]).indexOf(L.code) >= 0);
        const it = cand.find(x => !used.has(x.id)) || cand[0];
        if (it) picks.push([k, it, L.code]);
      });
      const parts = [];
      for (let i = 0; i < picks.length; i += 10) parts.push(picks.slice(i, i + 10));
      const ids = parts.map((p, i) => {
        const id = "CR-" + A.key + (parts.length > 1 ? "-P" + (i + 1) : "");
        makeSet(id, "Cumulative review: " + A.name + (parts.length > 1 ? " · part " + (i + 1) + " of " + parts.length : ""), p, { area: A.key, partNo: i + 1, parts: parts.length });
        return id;
      });
      const inReview = new Set(picks.map(p => p[2]));
      areas.push({ key: A.key, name: A.name, parts: ids, codes, covered: codes.filter(c => inReview.has(c)), lessons: picks.map(p => p[0]) });
    });
  }
  function build() {
    if (built || !window.PP_SKILLS) return;
    built = true;
    buildGroups(); buildCumulative();
    STD.forEach(s => {
      const gcode = s.gum ? "3.L.GC.1" : s.code.replace(/\.[a-z]$/, "");
      const g = groupInfo[gcode] || { measures: [], parts: [], items: {} };
      const area = areas.find(a => a.covered.indexOf(s.code) >= 0);
      codeInfo[s.code] = { group: gcode, inGroup: g.items[s.code] || 0, area: area ? area.name : null, evidence: evidenceFor(s.code) };
    });
  }

  /* ---------- shared pieces ---------- */
  function lastText(id) {
    const a = last(id);
    return a ? "Last taken " + (S().niceDate(a.d) || a.d) + ": " + a.got + " of " + a.max + " points." : "Not taken yet on this device.";
  }
  function setLine(set) {
    const pts = set.items.reduce((a, it) => a + it.points, 0);
    return set.items.length + " questions, " + pts + " points.";
  }
  function startButton(set, label) {
    const b = make("button", "btn btn-primary rv-start", label || (last(set.id) ? "Take it again" : "Start"));
    b.type = "button"; b.dataset.set = set.id;
    b.setAttribute("aria-label", (label || (last(set.id) ? "Take it again" : "Start")) + ": " + set.title);
    b.addEventListener("click", () => window.PP_PLAYER.start(set.id, "test"));
    return b;
  }
  const SCORE_NOTE = "A practice score on this site. It is not a Milestones score or achievement level, and it never changes a lesson's pass.";

  /* The review section of a parent standard page (js/std.js calls this; it writes nothing). */
  function groupSection(code) {
    build();
    const info = groupInfo[code];
    const sec = make("section", "std-sec std-review"); sec.id = "std-review";
    sec.appendChild(make("h2", "std-h2", "Standard review"));
    if (!info) return sec;
    if (!info.parts.length) {
      sec.appendChild(make("p", "", /^K-12/.test(code) ? "These are everyday habits, so there is no question review. A grown-up observes them." :
        "There is no review for this standard yet. None of its parts has an accepted lesson with check questions to draw from."));
    } else {
      sec.appendChild(make("p", "", "A short review with questions taken from the skill checks of this standard's lessons, so your child may have seen some of them. It covers the parts listed below." +
        (info.parts.length > 1 ? " It comes in " + words(info.parts.length) + " parts; each part can be done on a different day." : "")));
      sec.appendChild(notice());
      info.parts.forEach(id => {
        const set = PP.byId[id];
        const card = make("div", "rv-part");
        card.appendChild(make("h3", "rv-part-h", set.parts > 1 ? "Part " + set.partNo + " of " + set.parts : "The review"));
        card.appendChild(make("p", "", setLine(set) + " " + lastText(id)));
        card.appendChild(startButton(set));
        sec.appendChild(card);
      });
    }
    if (info.measures.length) {
      sec.appendChild(make("p", "std-h3", "What it measures"));
      const ul = make("ul", "std-list");
      info.measures.forEach(c => { const li = make("li"); li.appendChild(PP.stdLink(c, S().codeLabel(byCode[c]))); li.appendChild(document.createTextNode(": " + words(info.items[c]) + " question" + (info.items[c] === 1 ? "" : "s") + ". " + byCode[c].plain)); ul.appendChild(li); });
      sec.appendChild(ul);
    }
    if (info.notMeasured.length) {
      sec.appendChild(make("p", "std-h3", "Not measured by this review"));
      const ul = make("ul", "std-list");
      info.notMeasured.forEach(x => { const li = make("li"); li.appendChild(PP.stdLink(x.code, S().codeLabel(byCode[x.code]))); li.appendChild(document.createTextNode(": " + x.why)); ul.appendChild(li); });
      sec.appendChild(ul);
    }
    if (info.evidence.length) {
      sec.appendChild(make("p", "std-h3", "Needs separate evidence from a grown-up"));
      const ul = make("ul", "std-list"); info.evidence.forEach(x => ul.appendChild(make("li", "", x.text))); sec.appendChild(ul);
    }
    sec.appendChild(make("p", "note", SCORE_NOTE + " A few questions on a part are a sample, not a full test of it."));
    const map = make("p", "note"); map.appendChild(document.createTextNode("See every standard in the ")); map.appendChild(mapLink("assessment coverage map")); map.appendChild(document.createTextNode(".")); sec.appendChild(map);
    return sec;
  }
  /* one line for a leaf standard page */
  function leafLine(code) {
    build();
    const ci = codeInfo[code]; if (!ci) return null;
    const p = make("p", "std-review-line");
    if (ci.inGroup) { p.appendChild(document.createTextNode("Standard review: " + words(ci.inGroup) + " question" + (ci.inGroup === 1 ? "" : "s") + " on this code in the ")); p.appendChild(PP.stdLink(ci.group, ci.group + " review")); p.appendChild(document.createTextNode(".")); }
    else { p.appendChild(document.createTextNode("Standard review: not included yet. " + whyNot(code) + " ")); }
    if (ci.area) p.appendChild(document.createTextNode(" Cumulative review: one question in “" + ci.area + "”."));
    return p;
  }
  function mapLink(text) {
    const a = make("a", "rv-link", text); a.href = "#coverage";
    a.addEventListener("click", e => { e.preventDefault(); openMap(); });
    return a;
  }

  /* ---------- the cumulative review hub (#review) ---------- */
  function renderHub() {
    build();
    const host = el("review-body"); clear(host);
    host.appendChild(notice());
    const intro = make("p", "page-sub", "Four kinds of review, kept apart. Do one part at a time; each part can be done on a different day. There is no combined score.");
    host.appendChild(intro);
    /* A. curriculum review */
    const a = make("section", "std-sec rv-sec"); a.id = "rv-curriculum";
    a.appendChild(make("h2", "std-h2", "1. Curriculum review (this site's lessons)"));
    a.appendChild(make("p", "", "One question from each lesson whose new practice has been reviewed and accepted, grouped by area. Questions come from the lessons' skill checks."));
    areas.forEach(A => {
      const card = make("div", "rv-part"); card.dataset.area = A.key;
      card.appendChild(make("h3", "rv-part-h", A.name));
      if (!A.parts.length) card.appendChild(make("p", "", "Not available yet. The lessons in this area are still being written or reviewed."));
      A.parts.forEach(id => {
        const set = PP.byId[id];
        const row = make("div", "rv-row");
        row.appendChild(make("p", "", (set.parts > 1 ? "Part " + set.partNo + " of " + set.parts + ": " : "") + setLine(set) + " " + lastText(id)));
        row.appendChild(startButton(set));
        card.appendChild(row);
      });
      const miss = A.codes.length - A.covered.length;
      card.appendChild(make("p", "note", "Covers " + words(A.covered.length) + " of the " + words(A.codes.length) + " tested codes in this area." + (miss ? " The rest are not in the review yet." : "")));
      a.appendChild(card);
    });
    a.appendChild(make("p", "note", SCORE_NOTE));
    host.appendChild(a);
    /* B. state-test practice */
    const b = make("section", "std-sec rv-sec"); b.id = "rv-statetest";
    b.appendChild(make("h2", "std-h2", "2. State-test practice (shaped like the Milestones blueprint)"));
    b.appendChild(make("p", "", "Shorter practice tests that mix skills the way the real test does. These are not saved on this device."));
    PP.sets.filter(s => s.kind === "form").forEach(s => {
      const row = make("div", "rv-row");
      row.appendChild(make("p", "", s.title + ": " + setLine(s)));
      row.appendChild(startButton(s, "Start the practice test"));
      b.appendChild(row);
    });
    host.appendChild(b);
    /* C. writing tasks */
    const c = make("section", "std-sec rv-sec"); c.id = "rv-writing";
    c.appendChild(make("h2", "std-h2", "3. Writing tasks"));
    c.appendChild(make("p", "", "Read two sources, plan and write an opinion essay. A grown-up scores it with the rubric in the For parents tab. The site never scores writing by itself."));
    (PP.tasks || []).forEach(t => { const bt = make("button", "btn btn-soft rv-task", "Essay: " + t.title); bt.type = "button"; bt.addEventListener("click", () => window.PP_WRITING.start(t.id)); c.appendChild(bt); });
    host.appendChild(c);
    /* D. observed by a grown-up */
    const d = make("section", "std-sec rv-sec"); d.id = "rv-observed";
    d.appendChild(make("h2", "std-h2", "4. Observed by a grown-up"));
    d.appendChild(make("p", "", "Reading aloud, handwriting, speaking and everyday habits are shown, not chosen from a list. A grown-up watches or listens and keeps notes or ticks. They are never a score."));
    const ul = make("ul", "std-list rv-observed");
    Object.keys(PP.lessons).filter(k => PP.lessons[k].activity || PP.lessons[k].speak || (PP.lessons[k].check && !(PP.lessons[k].test || []).length)).forEach(k => {
      const L = PP.lessons[k], li = make("li");
      const bt = make("button", "linkish", L.title); bt.type = "button"; bt.addEventListener("click", () => S().open(k, L.speak ? "try" : "practice"));
      li.appendChild(bt);
      li.appendChild(document.createTextNode(L.activity ? (L.activity.kind === "fluency" ? " (reading aloud)" : " (handwriting)") : L.speak ? " (speaking card)" : " (grown-up check)"));
      ul.appendChild(li);
    });
    const hli = make("li"); const hb = make("button", "linkish", "Everyday habits"); hb.type = "button"; hb.addEventListener("click", () => window.PP_APP.openHabits()); hli.appendChild(hb); hli.appendChild(document.createTextNode(" (Georgia's K-12 practices)")); ul.appendChild(hli);
    d.appendChild(ul);
    host.appendChild(d);
    const m = make("p", "note"); m.appendChild(document.createTextNode("What each part covers, standard by standard: ")); m.appendChild(mapLink("the assessment coverage map")); m.appendChild(document.createTextNode(".")); host.appendChild(m);
  }
  function openHub(opts) {
    if (!window.PP_APP.canLeave()) return;
    renderHub();
    window.scrollTo(0, 0);
    window.PP_APP.show("review");
    window.PP_APP.setHash("#review", !!(opts && opts.replace));
    window.PP_APP.track();
    el("review-title").focus();
  }

  /* ---------- the coverage map (#coverage) ---------- */
  function checkText(code) {
    const ls = S().lessonsFor(code);
    if (!ls.main.length) return byCode[code].tested === "embedded" ? "None (an everyday habit)." : "No lesson yet.";
    return ls.main.map(k => {
      const L = PP.lessons[k];
      const pts = l => l.reduce((a, it) => a + it.points, 0);
      if ((L.test || []).length) return L.title + ": form A " + L.test.length + " questions, " + pts(L.test) + " points" + ((L.testB || []).length ? "; form B " + L.testB.length + " questions, " + pts(L.testB) + " points" : "") + ".";
      return L.title + ": no scored check" + (L.check ? "; a grown-up Check instead." : ".");
    }).join(" ");
  }
  function gapText(code) {
    const x = byCode[code], ci = codeInfo[code], gaps = [];
    if (x.tested === "embedded") return "Not assessed with questions here by design; observed only.";
    if (!S().lessonsFor(code).main.length) gaps.push("no lesson");
    if (!ci.inGroup && !/^K-12/.test(code)) gaps.push("not in a standard review yet");
    if (!ci.area && ONTEST.indexOf(x.tested) >= 0) gaps.push("not in the cumulative review yet");
    if (["classroom", "no"].indexOf(x.tested) >= 0) gaps.push(x.tested === "classroom" ? "checked in class, not on the Milestones" : "not on the grade 3 Milestones");
    return gaps.length ? cap(gaps.join("; ")) + "." : "Nothing missing from the levels above. Still a sample, not a full test.";
  }
  function renderMap() {
    build();
    const host = el("coverage-body"); clear(host);
    const n = STD.length, inGroup = STD.filter(s => codeInfo[s.code].inGroup).length, inCum = STD.filter(s => codeInfo[s.code].area).length;
    const withCheck = STD.filter(s => S().lessonsFor(s.code).main.some(k => (PP.lessons[k].test || []).length)).length;
    host.appendChild(make("p", "page-sub", "What each Georgia grade 3 ELA standard is checked by on this site, and what is not covered yet."));
    const sum = make("ul", "std-list cov-sum");
    [[withCheck, "have a lesson with a scored skill check"], [inGroup, "are in a standard review"], [inCum, "are in the cumulative review"]].forEach(([k, t]) => sum.appendChild(make("li", "", k + " of " + n + " standards " + t + ".")));
    host.appendChild(sum);
    host.appendChild(make("p", "note cov-caveat", "No short form on this site is a test of every Georgia expectation. A few questions on a code are a sample. Reading aloud, speaking, handwriting, research and original writing need a grown-up's evidence beyond questions. These are practice results on this device, not Milestones scores."));
    const groups = [];
    STD.forEach(s => { let g = groups.find(x => x.name === s.group); if (!g) { g = { name: s.group, recs: [] }; groups.push(g); } g.recs.push(s); });
    groups.forEach(g => {
      const det = make("details", "cov-group");
      det.appendChild(make("summary", "cov-sum-h", g.name.replace(/\s*\(K-12 GUM chart, grade 3 rows\)/, " (grammar chart)") + " (" + g.recs.length + ")"));
      const t = make("table", "ptable cov-table");
      const head = ["Standard", "Lesson check", "Standard review", "Cumulative review", "Grown-up or writing evidence", "Not covered yet"];
      const hr = make("tr"); head.forEach(h => hr.appendChild(make("th", "", h))); const th = make("thead"); th.appendChild(hr); t.appendChild(th);
      const tb = make("tbody");
      g.recs.forEach(s => {
        const ci = codeInfo[s.code], tr = make("tr"); tr.dataset.code = s.code;
        const c0 = make("td"); c0.appendChild(PP.stdLink(s.code, S().codeLabel(s))); c0.appendChild(make("span", "cov-plain", " " + (s.gum ? cap(s.gum) : s.plain)));
        const cells = [c0, make("td", "", checkText(s.code)),
          make("td", "", ci.inGroup ? words(ci.inGroup) + " question" + (ci.inGroup === 1 ? "" : "s") + " (" + ci.group + " review)" : "Not yet"),
          make("td", "", ci.area ? "One question (" + ci.area + ")" : "Not yet"),
          make("td", "", ci.evidence.length ? ci.evidence.join(" ") : "None"),
          make("td", "", gapText(s.code))];
        cells.forEach((td, i) => { td.dataset.label = head[i]; tr.appendChild(td); });
        tb.appendChild(tr);
      });
      t.appendChild(tb);
      const w = make("div", "table-wrap"); w.appendChild(t); det.appendChild(w);
      host.appendChild(det);
    });
  }
  function openMap(opts) {
    if (!window.PP_APP.canLeave()) return;
    renderMap();
    window.scrollTo(0, 0);
    window.PP_APP.show("coverage");
    window.PP_APP.setHash("#coverage", !!(opts && opts.replace));
    window.PP_APP.track();
    el("coverage-title").focus();
  }

  /* ---------- results (called by the player on submit; the one place that writes) ---------- */
  function onSubmit(set, rows) {
    const comps = {};
    rows.forEach(r => { const c = r.item.comp; if (!c) return; comps[c] = comps[c] || [0, 0]; comps[c][0] += r.sc.points; comps[c][1] += r.sc.max; });
    const got = rows.reduce((a, r) => a + r.sc.points, 0), max = rows.reduce((a, r) => a + r.sc.max, 0);
    record(set.id, got, max, comps);
    return noticeText();
  }
  function init() {
    el("review-back").addEventListener("click", () => { const st = history.state; if (st && typeof st.ppFrom === "string" && window.PP_APP.stepBackTo(st.ppFrom)) return; window.PP_APP.goHome(); });
    el("coverage-back").addEventListener("click", () => { const st = history.state; if (st && typeof st.ppFrom === "string" && window.PP_APP.stepBackTo(st.ppFrom)) return; window.PP_APP.goHome(); });
  }

  window.PP_REVIEW = {
    KEY, init, build, openHub, openMap, groupSection, leafLine, onSubmit, last, noticeText,
    groupInfo: c => (build(), groupInfo[c] || null), codeInfo: c => (build(), codeInfo[c] || null), areas: () => (build(), areas.slice()),
    canSave: () => writable()
  };
})();

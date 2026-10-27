/* Peach Prep — standard pages: #std/<code> (expansion 2026-10-22, 01-architecture.md §2.1).

   Every Georgia code shown on the site links here. A leaf code (3.T.T.1.c, a grammar-chart row,
   K-12.P.EICC.1.a) shows its official wording, the plain-language skill, every lesson for it in the
   recommended order, practice and check options, what a grown-up needs to watch, and this device's
   progress with honest labels. A parent code (3.T.T.1), its GaDOE band form (3-5.T.T.1) or a grammar
   chart level (3.L.GC.1:M) shows its components in the recommended order with a suggested start.

   Opening or rendering a page WRITES NOTHING: progress is read through PP_SKILLS and PP_PRACTICE
   getters only. A pass can never come from here. */
(function () {
  "use strict";
  const { make, clear, el } = PP;
  const STD = window.PP_STANDARDS || [];
  const GROUPS = window.PP_STD_GROUPS || [];
  const byCode = {}; STD.forEach(s => { byCode[s.code] = s; });
  const groupBy = {}; GROUPS.forEach(g => { groupBy[g.code] = g; });
  const LEVEL = { M: "Master", R: "Reinforce", I: "Introduce", C: "Continue" };
  const LEVEL_LINE = {
    M: "Master by the end of grade 3. On the test, in the writing part.",
    R: "Reinforce: learned in an earlier grade. On the test, in the writing part.",
    I: "Introduce: practice this year. Not on the grade 3 test.",
    C: "Continue: keep practicing. Not on the grade 3 test."
  };
  const S = () => window.PP_SKILLS;
  const parentOf = s => s.gum ? "3.L.GC.1" : s.code.replace(/\.[a-z]$/, "");
  const cap = t => { t = String(t || ""); return t.charAt(0).toUpperCase() + t.slice(1); };
  const words = n => PP.countWord(n);

  /* ---------- resolving a code ---------- */
  function resolve(input) {
    const raw = String(input || "").trim().replace(/\s+/g, "");
    if (!raw) return null;
    let c = raw.replace(/^3-5\./i, "3.").replace(/^3\.RA\./i, "3.T.RA.");   /* p. 37-38 print "3-5.RA.1" */
    const lc = c.toLowerCase();
    const leaf = STD.find(s => s.code.toLowerCase() === lc);
    if (leaf) return { code: leaf.code, kind: "leaf", alias: leaf.code !== raw };
    const g = GROUPS.find(x => x.code.toLowerCase() === lc);
    if (g) return { code: g.code, kind: "parent", alias: g.code !== raw };
    const m = /^3\.l\.gc\.1:([mric])$/.exec(lc);
    if (m) { const code = "3.L.GC.1:" + m[1].toUpperCase(); return { code, kind: "gum-level", alias: code !== raw }; }
    return null;
  }
  function kindOf(code) { const r = resolve(code); return r ? r.kind : null; }
  function label(code) {
    const x = byCode[code];
    if (x) return S().codeLabel(x) + (x.gum ? ": " + cap(x.gum) : "");
    if (/^3\.L\.GC\.1:[MRIC]$/.test(code)) return "3.L.GC.1 · " + LEVEL[code.slice(-1)];
    return code;
  }
  function name(code) {
    const x = byCode[code];
    if (x) {
      const H = (window.PP_HABITS || {})[code];
      const ls = S().lessonsFor(code);
      if (ls.main.length === 1) return PP.lessons[ls.main[0]].title;
      if (H) return H.title;
      return x.gum ? "Grammar chart skill" : cap(x.plain);
    }
    if (groupBy[code]) return groupBy[code].name;
    if (/^3\.L\.GC\.1:[MRIC]$/.test(code)) return "Grammar chart: " + LEVEL[code.slice(-1)] + " skills";
    return code;
  }

  /* ---------- small builders ---------- */
  const sec = (host, title, id) => { const s = make("section", "std-sec"); if (id) s.id = id; s.appendChild(make("h2", "std-h2", title)); host.appendChild(s); return s; };
  function officialBlock(host, x) {
    const p = make("p", "std-official");
    if (x.official) {
      p.appendChild(make("strong", "", "Georgia's official wording" + (x.page ? " (standards p. " + x.page + ")" : "") + ": "));
      p.appendChild(document.createTextNode("“" + x.official + "”"));
    } else { p.appendChild(make("strong", "", "Georgia's standard, in our words: ")); p.appendChild(document.createTextNode(x.text)); }
    host.appendChild(p);
  }
  function parentLine(host, pcode) {
    const g = groupBy[pcode]; if (!g) return;
    const p = make("p", "std-parent");
    p.appendChild(document.createTextNode("Part of "));
    p.appendChild(PP.stdLink(g.code, g.code + " " + g.name));
    p.appendChild(document.createTextNode(": “" + g.official + "” (standards p. " + g.page + ")."));
    host.appendChild(p);
  }
  function testedTag(x) {
    const t = S().testedText(x);
    return make("span", "srow-tag tag-" + (["reading", "writing", "both"].indexOf(x.tested) >= 0 ? "test" : x.tested), t[0]);
  }
  function lessonButton(k, primary) {
    const I = S().info(k);
    const pl = S().practiceLine ? S().practiceLine(k) : null;
    const begun = I.state.id !== "new" && I.open && I.open.n > 1;
    const text = pl ? pl.label : begun ? "Continue at " + I.open.name : "Start the lesson";
    const b = make("button", "btn " + (primary ? "btn-primary" : "btn-soft") + " std-lesson-btn", text);
    b.type = "button"; b.dataset.lesson = k;
    b.setAttribute("aria-label", text + (pl ? " (" + pl.note.charAt(0).toLowerCase() + pl.note.slice(1) + ")" : "") + ": " + (I.id ? I.id + " " : "") + I.title);
    b.addEventListener("click", () => (pl ? S().begin(k) : S().open(k, begun ? I.open.id : undefined)));
    if (!pl) return b;
    /* a lesson with practice opens at a question; the five-step page is the secondary "Skill overview" */
    const w = make("span", "std-lesson-acts"); w.appendChild(b);
    const o = make("button", "btn btn-soft std-overview-btn", "Skill overview"); o.type = "button"; o.dataset.overview = k;
    o.setAttribute("aria-label", "Skill overview: " + (I.id ? I.id + " " : "") + I.title);
    o.addEventListener("click", () => S().open(k));
    w.appendChild(o);
    return w;
  }
  function practiceLines(k) {
    const I = S().info(k), PR = window.PP_PRACTICE;
    const ul = make("ul", "std-list");
    if (I.together) ul.appendChild(make("li", "", "Practice Together: " + words(I.together) + " guided question" + (I.together === 1 ? "" : "s") + ", with hints and a walk-through."));
    if (I.core) {
      const li = make("li", "", "Practice on my own: fifteen questions in three sets of five, with Check Answer and Teach Me (hints, steps and the answer, when asked for). ");
      const st = I.core.sets.map((ids, i) => PR.setState(k, ids, i + 1));
      li.appendChild(make("span", "std-progress", "On this device: " + st.map((x, i) => "set " + (i + 1) + " " + (x.done ? "finished" : x.started ? "started" : "not started")).join(", ") + "."));
      ul.appendChild(li);
    } else if (I.tryCount) ul.appendChild(make("li", "", "Try It Yourself: " + words(I.tryCount) + " question" + (I.tryCount === 1 ? "" : "s") + " on your own."));
    if (I.activity === "fluency") ul.appendChild(make("li", "", "A one-minute read-aloud with a grown-up."));
    if (I.activity === "trace") ul.appendChild(make("li", "", "A printable tracing sheet."));
    if (I.write) ul.appendChild(make("li", "", "A short writing activity, read together with a checklist."));
    if (I.speak) ul.appendChild(make("li", "", "A “Say it out loud” card with a grown-up (practice only)."));
    return ul;
  }
  function checkLines(k) {
    const I = S().info(k);
    const ul = make("ul", "std-list");
    if (I.check) {
      ul.appendChild(make("li", "", "Skill check: " + I.check.n + " questions, " + I.check.max + " points, no hints. " + I.check.pass + " points or more passes it. " +
        (I.check.forms === 2 ? "It has two forms with different questions; the next check uses form " + I.check.next + "." : "Each try uses the same questions.")));
    } else if (I.grownCheck) ul.appendChild(make("li", "", "No scored check. A grown-up watches and ticks a checklist."));
    return ul;
  }
  function stateText(k) {
    const I = S().info(k);
    let t = I.state.label;
    if (I.last && I.last.d) t += ". Last skill check: " + I.last.got + " of " + I.last.max + " points on " + (S().niceDate(I.last.d) || I.last.d);
    return t + ".";
  }
  function adultNeeds(keys, extra) {
    const out = [];
    keys.forEach(k => {
      const I = S().info(k); if (!I) return;
      if (I.write) out.push(I.title + ": a grown-up reads the writing with the checklist. It is not scored.");
      if (I.speak) out.push(I.title + ": the “Say it out loud” card is done with a grown-up.");
      if (I.activity === "fluency") out.push(I.title + ": a grown-up listens to the reading and taps missed words.");
      if (I.activity === "trace") out.push(I.title + ": a grown-up watches the handwriting.");
      if (I.grownCheck) out.push(I.title + ": a grown-up ticks the Check after watching.");
    });
    if (extra) out.push(extra);
    return out.filter((x, i, a) => a.indexOf(x) === i);
  }
  function mixedSets(code) {
    return PP.sets.filter(s => s.section !== "skill").map(s => ({ s, n: s.items.filter(it => (it.std || []).indexOf(code) >= 0).length })).filter(x => x.n);
  }
  function aldBlock(host, code) {
    const m = /^(3\.[TL]\.[A-Z]+\.\d)/.exec(code);
    const ald = m && window.PP_ALDS && window.PP_ALDS.standards && window.PP_ALDS.standards[m[1]];
    if (!ald || !ald.Proficient || !ald.Proficient.length || !S().onTest(code)) return;
    const d = make("details", "std-ald");
    d.appendChild(make("summary", "", "What Proficient work looks like (GaDOE's DRAFT descriptors)"));
    d.appendChild(make("p", "note", "From GaDOE's DRAFT Achievement Level Descriptors, October 2025, for all of " + m[1] + ". GaDOE may revise them after standard setting in late fall 2026."));
    const ul = make("ul", "plist ald"); ald.Proficient.forEach(t => ul.appendChild(make("li", "", t))); d.appendChild(ul);
    d.appendChild(make("p", "note", "Passing a Peach Prep skill check is not a Milestones score or achievement level."));
    host.appendChild(d);
  }
  const DEVICE_NOTE = "This shows what was done on this device. It is not a Milestones score.";

  /* ---------- a leaf code ---------- */
  function renderLeaf(host, x) {
    const ls = S().lessonsFor(x.code);
    const H = (window.PP_HABITS || {})[x.code];
    const tags = make("p", "std-tags"); tags.appendChild(testedTag(x)); tags.appendChild(make("span", "sk-tagline", S().testedText(x)[1])); host.appendChild(tags);
    officialBlock(host, x);
    if (x.gum) host.appendChild(make("p", "std-level", "Grammar chart, grade 3 row: " + LEVEL_LINE[x.level]));
    parentLine(host, parentOf(x));
    const learn = sec(host, "What your child will learn");
    learn.appendChild(make("p", "std-plain", x.plain));
    if (ls.main.length === 1) { const big = S().info(ls.main[0]).big; if (big) learn.appendChild(make("p", "big-idea", big)); }
    if (x.tested === "embedded") {
      const hb = sec(host, "An everyday habit");
      hb.appendChild(make("p", "", "A grown-up observes this. There is no scored check, and the site does not invent one."));
      if (H) {
        hb.appendChild(make("p", "big-idea", H.looks));
        const ul = make("ul", "teach-points"); (H.tryit || []).forEach(t => ul.appendChild(make("li", "", t))); hb.appendChild(ul);
        if (H.ask) { const q = make("p", "teach-tip"); q.appendChild(make("strong", "", "Ask: ")); q.appendChild(document.createTextNode(H.ask)); hb.appendChild(q); }
        const b = make("button", "btn btn-soft", "Open the habit page"); b.type = "button"; b.addEventListener("click", () => S().open(x.code)); hb.appendChild(b);
      }
      return;
    }
    const lsec = sec(host, ls.main.length > 1 ? "The lessons, in the suggested order" : "The lesson");
    if (!ls.main.length) lsec.appendChild(make("p", "", "There is no lesson for this standard yet."));
    if (ls.main.length > 1) {
      const start = ls.main.find(k => S().info(k).state.id !== "passed" && S().status(k) !== "mastered") || ls.main[0];
      lsec.appendChild(make("p", "std-suggest", "Suggested start: " + S().info(start).title + ". This is the first lesson in this order without a passed check on this device. It is a fixed order, not a placement."));
    }
    const ol = make("ol", "std-lessons");
    ls.main.forEach((k, i) => {
      const I = S().info(k);
      const li = make("li", "std-lesson");
      li.appendChild(make("h3", "std-lesson-h", (I.id ? I.id + " · " : "") + I.title));
      li.appendChild(make("p", "std-state", stateText(k)));
      li.appendChild(lessonButton(k, i === 0));
      const det = make("div", "std-lesson-more");
      det.appendChild(make("p", "std-h3", "Practice"));
      det.appendChild(practiceLines(k));
      det.appendChild(make("p", "std-h3", "Test Your Knowledge"));
      det.appendChild(checkLines(k));
      li.appendChild(det);
      ol.appendChild(li);
    });
    lsec.appendChild(ol);
    if (ls.also.length) {
      const p = make("div", "std-also");
      p.appendChild(make("p", "std-h3", "Also practiced in"));
      const ul = make("ul", "std-list");
      ls.also.forEach(k => { const li = make("li"); const b = make("button", "linkish", S().info(k).title); b.type = "button"; b.addEventListener("click", () => S().begin(k)); li.appendChild(b); ul.appendChild(li); });
      p.appendChild(ul); lsec.appendChild(p);
    }
    const mx = mixedSets(x.code);
    if (mx.length) {
      const a = sec(host, "Mixed practice and practice tests");
      const ul = make("ul", "std-list");
      mx.forEach(m => ul.appendChild(make("li", "", m.s.title + " has " + words(m.n) + " question" + (m.n === 1 ? "" : "s") + " on this code.")));
      a.appendChild(ul);
      a.appendChild(make("p", "note", "A practice test samples skills. A few questions on one code are not a test of the whole standard."));
    }
    if (window.PP_REVIEW) { const rl = window.PP_REVIEW.leafLine(x.code); if (rl) { const rs = sec(host, "Reviews"); rs.appendChild(rl); } }
    const g = groupBy[parentOf(x)];
    const need = adultNeeds(ls.main, x.tested === "classroom" && g ? g.observe : null);
    if (need.length) { const a = sec(host, "What a grown-up needs to watch"); const ul = make("ul", "std-list"); need.forEach(t => ul.appendChild(make("li", "", t))); a.appendChild(ul); }
    const pr = sec(host, "Progress on this device");
    if (ls.main.length) { const ul = make("ul", "std-list"); ls.main.forEach(k => ul.appendChild(make("li", "", S().info(k).title + ": " + stateText(k)))); pr.appendChild(ul); }
    pr.appendChild(make("p", "note", DEVICE_NOTE));
    aldBlock(host, x.code);
  }

  /* ---------- a parent code or a grammar-chart level ---------- */
  function componentRow(code) {
    const x = byCode[code];
    const li = make("li", "std-comp");
    const head = make("p", "std-comp-head");
    head.appendChild(PP.stdLink(code, S().codeLabel(x)));
    head.appendChild(testedTag(x));
    li.appendChild(head);
    li.appendChild(make("p", "std-comp-plain", x.gum ? cap(x.gum) + ". " + x.plain : x.plain));
    const ls = S().lessonsFor(code);
    if (x.tested === "embedded") li.appendChild(make("p", "std-state", "Everyday habit. A grown-up observes it; there is no scored check."));
    else if (!ls.main.length) li.appendChild(make("p", "std-state", "No lesson yet."));
    else {
      const acts = make("div", "std-comp-acts");
      ls.main.forEach(k => {
        const I = S().info(k);
        const b = make("button", "btn btn-soft std-lesson-btn", (I.id ? I.id + " · " : "") + I.title); b.type = "button"; b.dataset.lesson = k;
        b.addEventListener("click", () => S().begin(k));
        const w = make("div", "std-comp-lesson"); w.appendChild(b); w.appendChild(make("span", "std-state", I.state.label)); acts.appendChild(w);
      });
      li.appendChild(acts);
    }
    return li;
  }
  function suggestedStart(codes) {
    for (const c of codes) for (const k of S().lessonsFor(c).main) if (S().status(k) !== "mastered") return k;
    return null;
  }
  function renderParent(host, g, codes, opts) {
    const p = make("p", "std-official");
    p.appendChild(make("strong", "", "Georgia's official wording (standards p. " + g.page + "): "));
    p.appendChild(document.createTextNode("“" + g.official + "”"));
    host.appendChild(p);
    host.appendChild(make("p", "note", "GaDOE prints this standard as " + g.band + " because it covers grades 3 to 5. The grade 3 expectations are listed below."));
    if (opts && opts.level) host.appendChild(make("p", "std-level", LEVEL_LINE[opts.level]));
    const lessonCodes = codes.filter(c => byCode[c].tested !== "embedded");
    const start = lessonCodes.length ? suggestedStart(lessonCodes) : null;
    if (start) {
      const box = make("div", "std-start");
      box.appendChild(make("p", "std-suggest", "Suggested start: " + (S().info(start).id ? S().info(start).id + " · " : "") + S().info(start).title +
        ". It is the first lesson in this order without a passed check on this device. The order is fixed; it is not a placement."));
      box.appendChild(lessonButton(start, true));
      host.appendChild(box);
    }
    const levels = g.code === "3.L.GC.1" && !(opts && opts.level) ? [["Master and Reinforce: on the test, writing part", ["M", "R"]], ["Introduce and Continue: practice this year; not on the grade 3 test", ["I", "C"]]] : [[null, null]];
    levels.forEach(([title, lv]) => {
      const list = lv ? codes.filter(c => lv.indexOf(byCode[c].level) >= 0) : codes;
      if (!list.length) return;
      const s = sec(host, title || "The parts of this standard, in the suggested order");
      if (lv) lv.forEach(l => s.appendChild(PP.stdLink("3.L.GC.1:" + l, "Only the " + LEVEL[l] + " rows", "std-level-link")));
      const ol = make("ol", "std-comps"); list.forEach(c => ol.appendChild(componentRow(c))); s.appendChild(ol);
    });
    /* expansion 2026-10-22 (ENG-09): the standard review, what it measures and what needs other evidence */
    if (!(opts && opts.level) && window.PP_REVIEW) host.appendChild(window.PP_REVIEW.groupSection(g.code));
    const keys = [].concat(...lessonCodes.map(c => S().lessonsFor(c).main)).filter((k, i, a) => a.indexOf(k) === i);
    const need = adultNeeds(keys, g.observe);
    if (need.length) { const a = sec(host, "What needs a grown-up's evidence"); const ul = make("ul", "std-list"); need.forEach(t => ul.appendChild(make("li", "", t))); a.appendChild(ul); }
    const pr = sec(host, "Progress on this device");
    if (keys.length) {
      const n = keys.length, passed = keys.filter(k => S().status(k) === "mastered").length, started = keys.filter(k => S().status(k) === "started").length;
      pr.appendChild(make("p", "", cap(words(n)) + " lesson" + (n === 1 ? "" : "s") + " for this standard: " + words(passed) + " with a passed check or a grown-up check, " + words(started) + " started."));
    }
    pr.appendChild(make("p", "note", DEVICE_NOTE));
    aldBlock(host, codes[0]);
  }

  /* ---------- the screen ---------- */
  let cur = null;
  function render(r) {
    const host = el("std-body"); clear(host);
    if (r.kind === "leaf") {
      const x = byCode[r.code];
      el("std-eyebrow").textContent = "Georgia standard · " + S().codeLabel(x);
      el("std-title").textContent = name(r.code);
      renderLeaf(host, x);
    } else if (r.kind === "parent") {
      const g = groupBy[r.code];
      el("std-eyebrow").textContent = "Georgia standard · " + g.code;
      el("std-title").textContent = g.name;
      renderParent(host, g, g.order.slice());
    } else {
      const lv = r.code.slice(-1), g = groupBy["3.L.GC.1"];
      el("std-eyebrow").textContent = "Georgia standard · 3.L.GC.1 · " + LEVEL[lv];
      el("std-title").textContent = name(r.code);
      renderParent(host, g, g.order.filter(c => byCode[c].level === lv), { level: lv });
      const back = make("p", "std-parent"); back.appendChild(document.createTextNode("All grammar chart rows: ")); back.appendChild(PP.stdLink("3.L.GC.1", "3.L.GC.1 Grammar, usage & mechanics")); host.insertBefore(back, host.firstChild);
    }
  }
  function open(code, opts) {
    const r = resolve(code);
    if (!r) return false;
    if (!window.PP_APP.canLeave()) return true;
    cur = r.code;
    render(r);
    window.scrollTo(0, 0);
    window.PP_APP.show("std");
    /* the band form (3-5.T.T.1) and other spellings settle on the grade 3 address */
    window.PP_APP.setHash("#std/" + PP.stdHash(r.code), !!(opts && opts.replace) || (r.alias && opts && opts.routed));
    window.PP_APP.track();
    el("std-title").focus();
    return true;
  }
  function init() {
    el("std-back").addEventListener("click", () => {
      const st = history.state;
      if (st && typeof st.ppFrom === "string" && window.PP_APP.stepBackTo(st.ppFrom)) return;
      window.PP_APP.goHome();
    });
  }
  window.PP_STD = { init, open, resolve, kindOf, label, name, current: () => cur };
})();

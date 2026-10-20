// Checks the literary and poetry reading sets (R-LIT-01, R-LIT-02, R-POE-01).
// Usage: node verification/check-sets-lit.js
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SET_DIR = path.join(__dirname, "..", "js", "data", "sets");
const FILES = ["R-LIT-01.js", "R-LIT-02.js", "R-POE-01.js"];

// Interpreting Texts expectations assessed (SPEC section 2).
const ASSESSED = new Set([
  "3.T.C.1.a", "3.T.C.1.b", "3.T.C.2.a", "3.T.C.2.c",
  "3.T.SS.1.a", "3.T.SS.2.a",
  "3.T.T.1.a", "3.T.T.1.b", "3.T.T.1.c", "3.T.T.1.d",
  "3.T.T.2.a", "3.T.T.2.b", "3.T.T.2.c", "3.T.T.3.a", "3.T.T.4.a",
  "3.T.RA.1.a", "3.T.RA.1.b", "3.T.RA.2.a", "3.T.RA.2.b",
  "3.L.V.1.a", "3.L.V.2.a", "3.L.V.2.b",
  "3.L.V.3.a", "3.L.V.3.b", "3.L.V.3.c", "3.L.V.3.d"
]);
const REQUIRED_TARGETS = ["3.T.T.1.a", "3.T.T.1.b", "3.T.T.1.c", "3.T.T.1.d", "3.T.C.2.a",
  "3.T.SS.2.a", "3.T.T.4.a", "3.L.V.3.a", "3.T.RA.2.a"];
const TYPES = ["mc", "ms", "ebsr", "dropdown", "hottext", "order", "match"];
const TWO_POINT_OK = new Set(["ms", "ebsr", "order", "match", "dropdown"]);

let failures = 0;
const fail = (where, msg) => { failures++; console.log("FAIL  " + where + ": " + msg); };

const sets = [];
for (const f of FILES) {
  const src = fs.readFileSync(path.join(SET_DIR, f), "utf8");
  const ctx = { PP: { addSet: (s) => sets.push({ file: f, set: s }) } };
  try { vm.runInNewContext(src, ctx, { filename: f }); }
  catch (e) { fail(f, "does not load: " + e.message); }
}

const words = (s) => s.split(/\s+/).filter(Boolean).length;
const norm = (s) => s.replace(/\s+/g, " ").trim();

function units(p) {
  // Returns map ref -> text for sentences (prose) or lines (poetry).
  const m = new Map();
  if (Array.isArray(p.lines)) {
    p.lines.forEach((st, i) => st.forEach((ln, j) => m.set(`${p.id}:${i + 1}:${j + 1}`, ln)));
  } else if (Array.isArray(p.paragraphs)) {
    p.paragraphs.forEach((pa, i) => pa.forEach((s, j) => m.set(`${p.id}:${i + 1}:${j + 1}`, s)));
  }
  return m;
}

const allItems = [];
for (const { file, set } of sets) {
  const W = set.id || file;
  for (const k of ["id", "section", "kind", "title", "blurb", "passages", "items"]) {
    if (set[k] === undefined || set[k] === "") fail(W, "missing set field " + k);
  }
  if (set.id + ".js" !== file) fail(W, "id does not match file name");
  if (set.section !== "reading") fail(W, "section should be reading");

  const unitMap = new Map();
  let fullText = "";
  for (const p of set.passages) {
    for (const k of ["id", "title", "byline", "genre", "lexile"]) {
      if (p[k] === undefined) fail(W + "/" + p.id, "missing passage field " + k);
    }
    const isPoem = Array.isArray(p.lines);
    if (!isPoem && !Array.isArray(p.paragraphs)) fail(W + "/" + p.id, "no paragraphs or lines");
    if (isPoem && Array.isArray(p.paragraphs)) fail(W + "/" + p.id, "has both lines and paragraphs");
    const u = units(p);
    for (const [r, t] of u) {
      if (typeof t !== "string" || !t.trim()) fail(W, "empty unit " + r);
      unitMap.set(r, t);
    }
    const text = [...u.values()].join(" ");
    fullText += " " + text;
    const wc = words(text);
    if (isPoem) {
      const n = p.lines.reduce((a, s) => a + s.length, 0);
      if (n < 8 || n > 24) fail(W + "/" + p.id, `poem has ${n} lines (8-24)`);
      if (p.lines.length < 3 || p.lines.length > 4) fail(W + "/" + p.id, `poem has ${p.lines.length} stanzas (3-4)`);
      console.log(`info  ${W}/${p.id} "${p.title}": poem, ${p.lines.length} stanzas, ${n} lines, ${wc} words`);
    } else {
      const [lo, hi] = set.kind === "poetry" ? [100, 140] : [350, 550];
      if (wc < lo || wc > hi) fail(W + "/" + p.id, `word count ${wc} outside ${lo}-${hi}`);
      console.log(`info  ${W}/${p.id} "${p.title}": ${p.paragraphs.length} paragraphs, ${wc} words`);
      // Quotation marks must balance inside each paragraph.
      p.paragraphs.forEach((pa, i) => {
        const q = (pa.join(" ").match(/"/g) || []).length;
        if (q % 2) fail(W + "/" + p.id, `paragraph ${i + 1} has unbalanced quotation marks`);
      });
    }
  }
  fullText = norm(fullText);
  const inPassage = (t) => {
    const s = norm(t);
    if ([...unitMap.values()].some((u) => norm(u) === s)) return true;
    return fullText.includes(s);
  };

  const ids = new Set();
  for (const it of set.items) {
    const I = `${W}/${it.id}`;
    allItems.push({ set: set.id, it });
    if (ids.has(it.id)) fail(I, "duplicate id"); ids.add(it.id);
    for (const k of ["id", "type", "points", "std", "dok", "prompt", "clue", "why"]) {
      if (it[k] === undefined || it[k] === "") fail(I, "missing field " + k);
    }
    if (!TYPES.includes(it.type)) fail(I, "unknown type " + it.type);
    if (![1, 2].includes(it.points)) fail(I, "points must be 1 or 2");
    if (![1, 2, 3].includes(it.dok)) fail(I, "dok must be 1, 2 or 3");
    if (!Array.isArray(it.std) || !it.std.length) fail(I, "std must be a non-empty array");
    else it.std.forEach((c) => { if (!ASSESSED.has(c)) fail(I, "std not assessed in Interpreting Texts: " + c); });
    if (it.points === 2 && !TWO_POINT_OK.has(it.type)) fail(I, "type " + it.type + " should be 1 point");

    const oneCorrect = (choices, label, n) => {
      if (!Array.isArray(choices)) return fail(I, label + " choices missing");
      const c = choices.filter((x) => x.correct === true).length;
      if (c !== n) fail(I, `${label} has ${c} correct, expected ${n}`);
      choices.forEach((x) => { if (!x.text || !x.text.trim()) fail(I, label + " has an empty choice"); });
      if (new Set(choices.map((x) => x.text)).size !== choices.length) fail(I, label + " has duplicate choices");
      return choices.filter((x) => x.correct).map((x) => x.text);
    };
    let keys = [];

    switch (it.type) {
      case "mc":
        if (!it.choices || it.choices.length !== 4) fail(I, "mc needs 4 choices");
        keys = oneCorrect(it.choices, "mc", 1);
        if (it.points !== 1) fail(I, "mc must be 1 point");
        break;
      case "ms": {
        if (!it.choices || it.choices.length < 5 || it.choices.length > 6) fail(I, "ms needs 5-6 choices");
        if (![2, 3].includes(it.pick)) fail(I, "ms pick must be 2 or 3");
        keys = oneCorrect(it.choices, "ms", it.pick);
        break;
      }
      case "ebsr": {
        if (!it.partA || !it.partB) { fail(I, "ebsr needs partA and partB"); break; }
        if (!it.partA.prompt || !it.partB.prompt) fail(I, "ebsr part prompt missing");
        keys = oneCorrect(it.partA.choices, "Part A", 1);
        keys = keys.concat(oneCorrect(it.partB.choices, "Part B", it.partB.pick || 1));
        (it.partB.choices || []).forEach((c) => {
          if (!inPassage(c.text)) fail(I, "Part B choice not verbatim in passage: " + c.text);
        });
        if (it.points !== 2) fail(I, "ebsr must be 2 points");
        break;
      }
      case "dropdown": {
        const holes = (it.text.match(/\{(\d+)\}/g) || []).map((h) => +h.slice(1, -1));
        if (!Array.isArray(it.slots) || holes.length !== it.slots.length) fail(I, "slot count does not match {n} placeholders");
        holes.forEach((h, i) => { if (h !== i) fail(I, "placeholders must be {0},{1} in order"); });
        (it.slots || []).forEach((s, i) => {
          if (!Array.isArray(s.options) || s.options.length < 3) fail(I, `slot ${i} needs at least 3 options`);
          if (!Number.isInteger(s.answer) || s.answer < 0 || s.answer >= s.options.length) fail(I, `slot ${i} answer out of range`);
          else keys.push(s.options[s.answer]);
          if (new Set(s.options).size !== s.options.length) fail(I, `slot ${i} has duplicate options`);
        });
        if (it.slots && it.points !== it.slots.length) fail(I, "dropdown points should equal slot count (1 or 2)");
        break;
      }
      case "hottext": {
        if (it.source && !set.passages.some((p) => p.id === it.source)) fail(I, "source passage not found");
        if (!Array.isArray(it.targets) || it.targets.length < 3) fail(I, "hottext needs at least 3 targets");
        (it.targets || []).forEach((r) => { if (!unitMap.has(r)) fail(I, "target does not resolve: " + r); });
        if (new Set(it.targets).size !== it.targets.length) fail(I, "duplicate targets");
        if (!Array.isArray(it.answer) || !it.answer.length) fail(I, "hottext answer missing");
        (it.answer || []).forEach((r) => {
          if (!unitMap.has(r)) fail(I, "answer does not resolve: " + r);
          if (!(it.targets || []).includes(r)) fail(I, "answer not among targets: " + r);
          if (it.source && !r.startsWith(it.source + ":")) fail(I, "answer outside source passage: " + r);
          keys.push(unitMap.get(r) || "");
        });
        if ((it.pick || 1) !== it.answer.length) fail(I, "pick does not equal number of answers");
        if (it.points === 2 && it.answer.length !== 2) fail(I, "2-point hottext needs 2 answers");
        break;
      }
      case "order":
        if (!Array.isArray(it.steps) || it.steps.length < 3 || it.steps.length > 5) fail(I, "order needs 3-5 steps");
        if (new Set(it.steps).size !== it.steps.length) fail(I, "duplicate steps");
        break;
      case "match":
        if (!Array.isArray(it.cols) || it.cols.length < 2) fail(I, "match needs at least 2 cols");
        if (!Array.isArray(it.rows) || it.rows.length < 2) fail(I, "match needs at least 2 rows");
        (it.rows || []).forEach((r, i) => {
          if (!r.text) fail(I, `row ${i} has no text`);
          if (!Number.isInteger(r.answer) || r.answer < 0 || r.answer >= it.cols.length) fail(I, `row ${i} answer out of range`);
        });
        break;
    }

    // The clue must never contain the answer.
    keys.filter((k) => k && words(k) >= 2).forEach((k) => {
      if (norm(it.clue).toLowerCase().includes(norm(k).toLowerCase().replace(/[."]+$/, ""))) fail(I, "clue contains the answer: " + k);
    });
    // Quotations of 4+ words in prompts, rows and why must exist in the passage.
    const quoted = [it.prompt, it.why, it.partA && it.partA.prompt, it.partB && it.partB.prompt,
      ...(it.rows || []).map((r) => r.text)].filter(Boolean);
    quoted.forEach((t) => {
      // Take the outermost quoted span: from a quote at start-or-after-space to a quote followed by space/end/punct.
      const re = /(?:^|[\s(:])"(.+?)"(?=$|[\s.,;:!?)])/g;
      let m;
      while ((m = re.exec(t))) {
        const span = m[1].replace(/[.,;:!?]+$/, "");
        if (words(span) >= 4 && !inPassage(span)) fail(I, "quotation not found in passage: " + m[1]);
      }
    });
    if (words(it.why) > 70) fail(I, `why is long (${words(it.why)} words)`);
  }
  if (set.items.length < 7 || set.items.length > 8) fail(W, `has ${set.items.length} items (7-8)`);
}

// Cross-set coverage.
const typeCount = {}; TYPES.forEach((t) => (typeCount[t] = 0));
const stdSeen = new Set(); const dok = { 1: 0, 2: 0, 3: 0 }; let two = 0; let pts = 0;
allItems.forEach(({ it }) => {
  typeCount[it.type]++; it.std.forEach((s) => stdSeen.add(s)); dok[it.dok] += it.points;
  pts += it.points; if (it.points === 2) two++;
});
TYPES.forEach((t) => { if (typeCount[t] < 2) fail("coverage", `type ${t} used ${typeCount[t]} time(s), need 2`); });
REQUIRED_TARGETS.forEach((s) => { if (!stdSeen.has(s)) fail("coverage", "target not covered: " + s); });
const share = two / allItems.length;
if (share < 0.33 || share > 0.5) fail("coverage", `2-point share ${(share * 100).toFixed(0)}% not about 40%`);
if (!(dok[2] > dok[3] && dok[3] > dok[1] && dok[1] > 0)) fail("coverage", "DOK mix should be mostly 2, some 3, a few 1");

console.log("info  types:", JSON.stringify(typeCount));
console.log(`info  items ${allItems.length}, 2-point ${two} (${(share * 100).toFixed(0)}%), points ${pts}`);
console.log("info  DOK points:", JSON.stringify(dok));
console.log(`\n${failures} failure(s)`);
process.exit(failures ? 1 : 0);

#!/usr/bin/env node
/*
 * check-sets-inf.js — checks the reading text sets R-INF-01, R-INF-02 and R-OPN-01
 * against docs/SPEC.md §5 (schema) and §6 (content rules).
 * Usage: node verification/check-sets-inf.js
 * Exit code 0 when there are no failures.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SETS_DIR = path.join(__dirname, "..", "js", "data", "sets");
const FILES = ["R-INF-01.js", "R-INF-02.js", "R-OPN-01.js"];

// Word-count ranges per passage (from the task brief, inside SPEC §6.2 limits)
const WORD_RANGE = {
  "R-INF-01": { p1: [300, 450] },
  "R-INF-02": { p1: [200, 300], p2: [200, 300] },
  "R-OPN-01": { p1: [250, 400] }
};
const MIN_ITEMS = 7, MAX_ITEMS = 8;

// Assessed Interpreting-Texts expectations (SPEC §2)
const ASSESSED = new Set([
  "3.T.C.1.a", "3.T.C.1.b", "3.T.C.2.a", "3.T.C.2.c", "3.T.SS.1.a", "3.T.SS.2.a",
  "3.T.T.1.a", "3.T.T.1.b", "3.T.T.1.c", "3.T.T.1.d", "3.T.T.2.a", "3.T.T.2.b", "3.T.T.2.c",
  "3.T.T.3.a", "3.T.T.4.a", "3.T.RA.1.a", "3.T.RA.1.b", "3.T.RA.2.a", "3.T.RA.2.b",
  "3.L.V.1.a", "3.L.V.2.a", "3.L.V.2.b", "3.L.V.3.a", "3.L.V.3.b", "3.L.V.3.c", "3.L.V.3.d"
]);
const TYPES = ["mc", "ms", "ebsr", "dropdown", "hottext", "order", "match"];
const REQUIRED_TARGETS = ["3.T.T.2.a", "3.T.T.2.b", "3.T.T.2.c", "3.T.C.1.a", "3.T.C.1.b", "3.T.SS.1.a",
  "3.T.T.3.a", "3.T.RA.2.a", "3.T.RA.2.b", "3.L.V.3.a", "3.L.V.2.a"];

let failures = 0, warnings = 0;
const fail = (where, msg) => { failures++; console.log("FAIL  " + where + ": " + msg); };
const warn = (where, msg) => { warnings++; console.log("WARN  " + where + ": " + msg); };

const norm = s => String(s).replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim();
const words = s => norm(s).replace(/^## /, "").replace(/^Caption: /, "").split(" ").filter(w => /[A-Za-z0-9]/.test(w)).length;
const isStr = s => typeof s === "string" && s.trim().length > 0;

const sets = [];
const PP = { addSet: s => sets.push(s) };
for (const f of FILES) {
  const file = path.join(SETS_DIR, f);
  if (!fs.existsSync(file)) { fail(f, "file missing"); continue; }
  const before = sets.length;
  try { vm.runInNewContext(fs.readFileSync(file, "utf8"), { PP }, { filename: f }); }
  catch (e) { fail(f, "does not load: " + e.message); continue; }
  if (sets.length !== before + 1) fail(f, "must call PP.addSet exactly once");
  else if (sets[sets.length - 1].id + ".js" !== f) fail(f, "id does not match file name");
}

const typeCount = {}, stdSeen = new Set(), dokPoints = { 1: 0, 2: 0, 3: 0 };
let totalItems = 0, twoPointItems = 0, totalPoints = 0;
const itemIds = new Set();

for (const set of sets) {
  const S = set.id || "(no id)";
  for (const k of ["id", "section", "kind", "title", "blurb", "passages", "items"]) if (set[k] === undefined) fail(S, "missing field " + k);
  if (set.section !== "reading") fail(S, "section must be reading");
  if (!["literary", "informational", "opinion", "poetry", "paired"].includes(set.kind)) fail(S, "bad kind " + set.kind);
  if (!Array.isArray(set.passages) || set.passages.length < 1 || set.passages.length > 2) { fail(S, "passages must be 1 or 2"); continue; }
  if (set.kind === "paired" && set.passages.length !== 2) fail(S, "paired set needs 2 passages");

  // Build sentence index
  const sentences = {}; // "p1:3:2" -> text
  const passageText = {};
  for (const p of set.passages) {
    const P = S + "/" + p.id;
    for (const k of ["id", "title", "byline", "genre", "lexile", "paragraphs", "lines"]) if (p[k] === undefined) fail(P, "missing field " + k);
    if (!Array.isArray(p.paragraphs)) { fail(P, "paragraphs must be an array"); continue; }
    let wc = 0, headings = 0, captions = 0;
    p.paragraphs.forEach((para, i) => {
      if (!Array.isArray(para) || para.length === 0) { fail(P, "paragraph " + (i + 1) + " must be a non-empty array of sentences"); return; }
      const special = para.length === 1 && /^(## |Caption: )/.test(para[0]);
      para.forEach((s, j) => {
        if (!isStr(s)) fail(P, "empty sentence at " + (i + 1) + ":" + (j + 1));
        if (/^(## |Caption: )/.test(s) && para.length !== 1) fail(P, "heading/caption must be its own one-sentence paragraph (" + (i + 1) + ")");
        if (!/^## /.test(s) && !/[.!?]["”]?$/.test(s.trim())) fail(P, "sentence does not end with punctuation: " + s);
        sentences[p.id + ":" + (i + 1) + ":" + (j + 1)] = s;
        wc += words(s);
      });
      if (special && /^## /.test(para[0])) headings++;
      if (special && /^Caption: /.test(para[0])) captions++;
    });
    passageText[p.id] = norm(p.paragraphs.flat().join(" "));
    const range = (WORD_RANGE[S] || {})[p.id];
    if (range && (wc < range[0] || wc > range[1])) fail(P, "word count " + wc + " outside " + range.join("–"));
    console.log("info  " + P + ": " + wc + " words, " + headings + " headings, " + captions + " captions");
    if (S === "R-INF-01" && (headings < 2 || headings > 3 || captions !== 1)) fail(P, "needs 2–3 headings and exactly 1 caption");
  }
  const inPassages = t => Object.values(passageText).some(pt => pt.includes(norm(t)));
  const refOk = (r, where) => {
    if (!/^p[12]:\d+:\d+$/.test(r)) { fail(where, "bad reference format " + r); return false; }
    if (!(r in sentences)) { fail(where, "reference does not resolve " + r); return false; }
    if (/^(## |Caption: )/.test(sentences[r])) warn(where, "reference points at a heading/caption " + r);
    return true;
  };
  const checkChoices = (choices, where, n, nCorrect) => {
    if (!Array.isArray(choices)) { fail(where, "choices missing"); return 0; }
    if (n && (choices.length < n[0] || choices.length > n[1])) fail(where, "needs " + n.join("–") + " choices, has " + choices.length);
    choices.forEach((c, i) => { if (!isStr(c.text)) fail(where, "choice " + (i + 1) + " has no text"); });
    const texts = choices.map(c => norm(c.text).toLowerCase());
    if (new Set(texts).size !== texts.length) fail(where, "duplicate choices");
    const k = choices.filter(c => c.correct === true).length;
    if (nCorrect !== undefined && k !== nCorrect) fail(where, "expected " + nCorrect + " correct, found " + k);
    return k;
  };

  if (!Array.isArray(set.items)) continue;
  if (set.items.length < MIN_ITEMS || set.items.length > MAX_ITEMS) fail(S, "has " + set.items.length + " items (needs " + MIN_ITEMS + "–" + MAX_ITEMS + ")");

  for (const it of set.items) {
    const W = S + "/" + (it.id || "?");
    totalItems++;
    for (const k of ["id", "type", "points", "std", "dok", "prompt", "clue", "why"]) if (it[k] === undefined) fail(W, "missing field " + k);
    if (itemIds.has(it.id)) fail(W, "duplicate item id"); itemIds.add(it.id);
    if (!TYPES.includes(it.type)) fail(W, "unknown type " + it.type);
    if (![1, 2].includes(it.points)) fail(W, "points must be 1 or 2");
    if (![1, 2, 3].includes(it.dok)) fail(W, "dok must be 1, 2 or 3");
    if (!Array.isArray(it.std) || !it.std.length) fail(W, "std must be a non-empty array");
    else it.std.forEach(c => { if (!ASSESSED.has(c)) fail(W, "std not assessed in Interpreting Texts: " + c); stdSeen.add(c); });
    for (const k of ["prompt", "clue", "why"]) if (!isStr(it[k])) fail(W, k + " is empty");
    typeCount[it.type] = (typeCount[it.type] || 0) + 1;
    totalPoints += it.points || 0; dokPoints[it.dok] = (dokPoints[it.dok] || 0) + (it.points || 0);
    if (it.points === 2) twoPointItems++;

    // Answer text that must appear in why, and must not appear in clue
    let keyTexts = [];

    switch (it.type) {
      case "mc": {
        if (it.points !== 1) fail(W, "mc is 1 point");
        checkChoices(it.choices, W, [4, 4], 1);
        keyTexts = (it.choices || []).filter(c => c.correct).map(c => c.text);
        break;
      }
      case "ms": {
        const k = checkChoices(it.choices, W, [5, 6]);
        if (k < 2 || k > 3) fail(W, "ms needs 2–3 correct, has " + k);
        if (it.pick !== k) fail(W, "pick (" + it.pick + ") does not equal correct count (" + k + ")");
        keyTexts = (it.choices || []).filter(c => c.correct).map(c => c.text);
        break;
      }
      case "ebsr": {
        if (it.points !== 2) fail(W, "ebsr is 2 points");
        if (!it.partA || !it.partB) { fail(W, "needs partA and partB"); break; }
        for (const part of ["partA", "partB"]) if (!isStr(it[part].prompt)) fail(W, part + " prompt empty");
        checkChoices(it.partA.choices, W + " partA", [4, 4], 1);
        const pick = it.partB.pick || 1;
        checkChoices(it.partB.choices, W + " partB", [4, 6], pick);
        (it.partB.choices || []).forEach((c, i) => {
          if (!inPassages(c.text)) fail(W + " partB", "evidence choice " + (i + 1) + " is not verbatim in the passage: " + c.text);
        });
        keyTexts = (it.partA.choices || []).filter(c => c.correct).map(c => c.text);
        break;
      }
      case "dropdown": {
        if (!isStr(it.text) || !Array.isArray(it.slots)) { fail(W, "needs text and slots"); break; }
        const holes = (it.text.match(/\{\d+\}/g) || []).length;
        if (holes !== it.slots.length) fail(W, "text has " + holes + " slots but slots array has " + it.slots.length);
        it.slots.forEach((sl, i) => {
          if (!Array.isArray(sl.options) || sl.options.length < 3) fail(W, "slot " + i + " needs 3+ options");
          else if (!(Number.isInteger(sl.answer) && sl.answer >= 0 && sl.answer < sl.options.length)) fail(W, "slot " + i + " answer out of range");
          else keyTexts.push(sl.options[sl.answer]);
        });
        if (it.points === 2 && it.slots.length !== 2) fail(W, "2-point dropdown needs two slots");
        if (it.points === 1 && it.slots.length !== 1) fail(W, "1-point dropdown needs one slot");
        break;
      }
      case "hottext": {
        if (it.source && !set.passages.some(p => p.id === it.source)) fail(W, "source not a passage: " + it.source);
        if (!Array.isArray(it.targets) || it.targets.length < 3) fail(W, "needs 3+ targets");
        (it.targets || []).forEach(r => refOk(r, W));
        if (!Array.isArray(it.answer) || !it.answer.length) fail(W, "answer missing");
        (it.answer || []).forEach(r => { if (refOk(r, W) && !(it.targets || []).includes(r)) fail(W, "answer " + r + " is not a target"); });
        if (it.source) (it.targets || []).forEach(r => { if (!r.startsWith(it.source + ":")) fail(W, "target " + r + " not in source " + it.source); });
        if (it.pick !== (it.answer || []).length) fail(W, "pick does not equal number of answers");
        keyTexts = (it.answer || []).map(r => sentences[r]).filter(Boolean);
        break;
      }
      case "order": {
        if (!Array.isArray(it.steps) || it.steps.length < 3 || it.steps.length > 5) fail(W, "order needs 3–5 steps");
        else if (new Set(it.steps.map(norm)).size !== it.steps.length) fail(W, "duplicate steps");
        break;
      }
      case "match": {
        if (!Array.isArray(it.cols) || it.cols.length < 2) { fail(W, "match needs 2+ cols"); break; }
        if (!Array.isArray(it.rows) || it.rows.length < 3) { fail(W, "match needs 3+ rows"); break; }
        it.rows.forEach((r, i) => {
          if (!isStr(r.text)) fail(W, "row " + (i + 1) + " has no text");
          if (!(Number.isInteger(r.answer) && r.answer >= 0 && r.answer < it.cols.length)) fail(W, "row " + (i + 1) + " answer out of range");
        });
        break;
      }
    }

    // why names the answer; clue never gives it away (SPEC §6.7)
    const nwhy = norm(it.why || "").toLowerCase(), nclue = norm(it.clue || "").toLowerCase();
    for (const kt of keyTexts) {
      const k = norm(kt).toLowerCase().replace(/[.!?"]+$/, "");
      if (!nwhy.includes(k)) fail(W, "why does not name the answer: " + kt);
      if (k.length > 6 && nclue.includes(k)) fail(W, "clue gives away the answer: " + kt);
    }
    // Quoted strings in why/clue of 5+ words should be real passage text (catches misquotes)
    const ownTexts = [].concat(it.choices || [], (it.partA || {}).choices || [], (it.partB || {}).choices || [])
      .map(c => norm(c.text).toLowerCase().replace(/[.!?]+$/, ""))
      .concat((it.slots || []).flatMap(sl => sl.options || []).map(o => norm(o).toLowerCase()));
    for (const field of ["why", "clue"]) {
      const quotes = (it[field] || "").match(/"([^"]+)"/g) || [];
      quotes.forEach(q => {
        const t = q.slice(1, -1).replace(/[.,]$/, "");
        const isOwnChoice = ownTexts.includes(norm(t).toLowerCase().replace(/[.!?]+$/, ""));
        if (t.split(/\s+/).length >= 5 && !isOwnChoice && !inPassages(t)) fail(W, field + " quotes text not in the passage: " + t);
      });
    }
  }
}

// Cross-set requirements
console.log("\nItems: " + totalItems + ", points: " + totalPoints + ", two-point items: " + twoPointItems + " (" + Math.round(100 * twoPointItems / totalItems) + "%)");
console.log("Types: " + JSON.stringify(typeCount));
console.log("DOK points: " + JSON.stringify(dokPoints));
for (const t of TYPES) if ((typeCount[t] || 0) < 2) fail("ALL", "type " + t + " used fewer than 2 times");
for (const s of REQUIRED_TARGETS) if (!stdSeen.has(s)) fail("ALL", "target not covered: " + s);
const share = twoPointItems / totalItems;
if (share < 0.3 || share > 0.5) fail("ALL", "two-point share " + Math.round(share * 100) + "% is not about 40%");
if (!(dokPoints[2] > dokPoints[3] && dokPoints[3] > dokPoints[1] && dokPoints[1] > 0)) warn("ALL", "DOK mix is not mostly 2, some 3, a few 1");

console.log("\n" + failures + " failures, " + warnings + " warnings");
process.exit(failures ? 1 : 0);

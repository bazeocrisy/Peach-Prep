#!/usr/bin/env node
/*
 * check-sets-voc.js — checks the vocabulary sets L-VOC-01, L-VOC-02 and L-VOC-03
 * against docs/SPEC.md §5 / §5b (schema) and §6 (content rules).
 * Usage: node verification/check-sets-voc.js
 * Exit code 0 when there are no failures.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SETS_DIR = path.join(__dirname, "..", "js", "data", "sets");
const FILES = ["L-VOC-01.js", "L-VOC-02.js", "L-VOC-03.js"];
const MIN_ITEMS = 9, MAX_ITEMS = 10;

// The 3.L.V codes this brief allows (3.L.V.2.d is not applicable in grade 3).
const ALLOWED = new Set([
  "3.L.V.1.a", "3.L.V.1.b",
  "3.L.V.2.a", "3.L.V.2.b", "3.L.V.2.c",
  "3.L.V.3.a", "3.L.V.3.b", "3.L.V.3.c", "3.L.V.3.d", "3.L.V.3.e"
]);
// Per-set coverage the brief asks for
const REQUIRED = {
  "L-VOC-01": ["3.L.V.3.a", "3.L.V.1.a"],
  "L-VOC-02": ["3.L.V.2.a", "3.L.V.2.b", "3.L.V.2.c"],
  "L-VOC-03": ["3.L.V.3.b", "3.L.V.3.c", "3.L.V.3.d", "3.L.V.3.e"]
};
const TYPES = ["mc", "ms", "ebsr", "dropdown", "hottext", "order", "match"];

let failures = 0, warnings = 0;
const fail = (where, msg) => { failures++; console.log("FAIL  " + where + ": " + msg); };
const warn = (where, msg) => { warnings++; console.log("WARN  " + where + ": " + msg); };

const norm = s => String(s).replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim();
const low = s => norm(s).toLowerCase();
const stripEnd = s => low(s).replace(/[.!?"]+$/, "");
const isStr = s => typeof s === "string" && s.trim().length > 0;
const isIdx = (i, n) => Number.isInteger(i) && i >= 0 && i < n;

// Load with a stub PP.addSet
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

const typeCount = {}, dokPoints = { 1: 0, 2: 0, 3: 0 };
let totalItems = 0, twoPointItems = 0, totalPoints = 0;
const itemIds = new Set();

function checkChoices(choices, where, range, nCorrect) {
  if (!Array.isArray(choices)) { fail(where, "choices missing"); return 0; }
  if (range && (choices.length < range[0] || choices.length > range[1])) fail(where, "needs " + range.join("–") + " choices, has " + choices.length);
  choices.forEach((c, i) => {
    if (!c || !isStr(c.text)) fail(where, "choice " + (i + 1) + " has no text");
    if (c && c.correct !== undefined && c.correct !== true) fail(where, "choice " + (i + 1) + " correct must be true or absent");
  });
  const texts = choices.map(c => low(c.text));
  if (new Set(texts).size !== texts.length) fail(where, "duplicate choices");
  const k = choices.filter(c => c.correct === true).length;
  if (nCorrect !== undefined && k !== nCorrect) fail(where, "expected " + nCorrect + " correct, found " + k);
  return k;
}

for (const set of sets) {
  const S = set.id || "(no id)";
  for (const k of ["id", "section", "kind", "title", "blurb", "passages", "items"]) if (set[k] === undefined) fail(S, "missing field " + k);
  if (set.section !== "language") fail(S, "section must be language");
  if (set.kind !== "vocabulary") fail(S, "kind must be vocabulary");
  if (!/^L-/.test(S)) fail(S, "language set id must start with L-");
  if (!Array.isArray(set.passages) || set.passages.length !== 0) fail(S, "standalone vocabulary set: passages must be []");
  if (!Array.isArray(set.items)) { fail(S, "items must be an array"); continue; }
  if (set.items.length < MIN_ITEMS || set.items.length > MAX_ITEMS) fail(S, "has " + set.items.length + " items (needs " + MIN_ITEMS + "–" + MAX_ITEMS + ")");

  const setStd = new Set();
  let setTwo = 0;
  const setTypes = new Set();

  set.items.forEach((it, n) => {
    const W = S + "/" + (it.id || "?");
    totalItems++;
    for (const k of ["id", "type", "points", "std", "dok", "prompt", "clue", "why"]) if (it[k] === undefined) fail(W, "missing field " + k);
    if (it.id !== S + "-" + (n + 1)) fail(W, "id should be " + S + "-" + (n + 1));
    if (itemIds.has(it.id)) fail(W, "duplicate item id"); itemIds.add(it.id);
    if (!TYPES.includes(it.type)) fail(W, "unknown type " + it.type);
    if (![1, 2].includes(it.points)) fail(W, "points must be 1 or 2");
    if (![1, 2, 3].includes(it.dok)) fail(W, "dok must be 1, 2 or 3");
    if (!Array.isArray(it.std) || !it.std.length) fail(W, "std must be a non-empty array");
    else it.std.forEach(c => { if (!ALLOWED.has(c)) fail(W, "std not one of the allowed 3.L.V codes: " + c); setStd.add(c); });
    for (const k of ["prompt", "clue", "why"]) if (!isStr(it[k])) fail(W, k + " is empty");
    if (/\n/.test(it.prompt || "")) warn(W, "prompt has a line break; prompts render as plain text on one line");
    typeCount[it.type] = (typeCount[it.type] || 0) + 1; setTypes.add(it.type);
    totalPoints += it.points || 0; dokPoints[it.dok] = (dokPoints[it.dok] || 0) + (it.points || 0);
    if (it.points === 2) { twoPointItems++; setTwo++; }

    let keyTexts = [];     // must be named in why, must not appear in clue
    const itemText = low([it.prompt, it.text || "", (it.options || []).join(" ")].join(" "));

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
        if (!new RegExp("\\b" + ["", "ONE", "TWO", "THREE"][k] + "\\b").test(it.prompt || "")) warn(W, "prompt does not say how many to choose");
        keyTexts = (it.choices || []).filter(c => c.correct).map(c => c.text);
        break;
      }
      case "ebsr": {
        if (it.points !== 2) fail(W, "ebsr is 2 points");
        if (!it.partA || !it.partB) { fail(W, "needs partA and partB"); break; }
        for (const part of ["partA", "partB"]) if (!isStr(it[part].prompt)) fail(W, part + " prompt empty");
        checkChoices(it.partA.choices, W + " partA", [4, 4], 1);
        const pick = it.partB.pick || 1;
        if (it.partB.pick !== undefined && !(Number.isInteger(it.partB.pick) && it.partB.pick >= 1)) fail(W, "partB pick must be a positive integer");
        const kB = checkChoices(it.partB.choices, W + " partB", [4, 6], pick);
        if (kB > 1 && !/\bTWO\b|\bTHREE\b/.test(it.partB.prompt)) warn(W, "partB prompt does not say how many to choose");
        // Evidence quoted "from the sentence/paragraph" must actually appear there
        if (/from the (sentence|paragraph|passage)/i.test(it.partB.prompt || "")) {
          (it.partB.choices || []).forEach((c, i) => {
            if (!low(it.prompt).includes(stripEnd(c.text))) fail(W + " partB", "evidence choice " + (i + 1) + " is not verbatim in the prompt: " + c.text);
          });
        }
        keyTexts = [].concat(
          (it.partA.choices || []).filter(c => c.correct).map(c => c.text),
          (it.partB.choices || []).filter(c => c.correct).map(c => c.text));
        break;
      }
      case "dropdown": {
        if (!isStr(it.text) || !Array.isArray(it.slots)) { fail(W, "needs text and slots"); break; }
        const holes = (it.text.match(/\{\d+\}/g) || []).length;
        if (holes !== it.slots.length) fail(W, "text has " + holes + " slots but slots array has " + it.slots.length);
        it.slots.forEach((sl, i) => {
          if (!Array.isArray(sl.options) || sl.options.length < 3) fail(W, "slot " + i + " needs 3+ options");
          else if (new Set(sl.options.map(low)).size !== sl.options.length) fail(W, "slot " + i + " has duplicate options");
          if (!Array.isArray(sl.options) || !isIdx(sl.answer, sl.options.length)) fail(W, "slot " + i + " answer index invalid");
          else keyTexts.push(sl.options[sl.answer]);
        });
        if (it.points === 2 && it.slots.length !== 2) fail(W, "2-point dropdown needs two slots");
        if (it.points === 1 && it.slots.length !== 1) fail(W, "1-point dropdown needs one slot");
        break;
      }
      case "hottext": {
        // Standalone form (SPEC §5b): options + 0-based answer indexes
        if (it.source || it.targets) fail(W, "standalone hottext must use options, not source/targets");
        if (!Array.isArray(it.options) || it.options.length < 3) { fail(W, "needs 3+ options"); break; }
        if (new Set(it.options.map(low)).size !== it.options.length) fail(W, "duplicate options");
        if (!Array.isArray(it.answer) || !it.answer.length) { fail(W, "answer missing"); break; }
        it.answer.forEach(a => { if (!isIdx(a, it.options.length)) fail(W, "answer index invalid: " + a); });
        if (new Set(it.answer).size !== it.answer.length) fail(W, "duplicate answer index");
        if (it.pick !== it.answer.length) fail(W, "pick does not equal number of answers");
        if (it.points === 2 && it.answer.length !== 2) warn(W, "2-point hottext usually has 2 answers");
        keyTexts = it.answer.filter(a => isIdx(a, it.options.length)).map(a => it.options[a]);
        break;
      }
      case "order": {
        if (!Array.isArray(it.steps) || it.steps.length < 3 || it.steps.length > 5) { fail(W, "order needs 3–5 steps"); break; }
        if (new Set(it.steps.map(low)).size !== it.steps.length) fail(W, "duplicate steps");
        // why must state the whole order
        const w = low(it.why);
        let at = -1;
        for (const s of it.steps) {
          const p = w.indexOf(low(s), at + 1);
          if (p < 0) { fail(W, "why does not state the order (missing or out of place: " + s + ")"); break; }
          at = p;
        }
        if (it.steps.some(s => low(it.clue).includes(low(s)))) warn(W, "clue names one of the steps");
        break;
      }
      case "match": {
        if (!Array.isArray(it.cols) || it.cols.length < 2) { fail(W, "match needs 2+ cols"); break; }
        if (!Array.isArray(it.rows) || it.rows.length < 3) { fail(W, "match needs 3+ rows"); break; }
        if (new Set(it.rows.map(r => low(r.text))).size !== it.rows.length) fail(W, "duplicate rows");
        it.rows.forEach((r, i) => {
          if (!isStr(r.text)) fail(W, "row " + (i + 1) + " has no text");
          if (!isIdx(r.answer, it.cols.length)) fail(W, "row " + (i + 1) + " answer index invalid");
        });
        // Every column is used at least once (no dead columns)
        it.cols.forEach((c, k) => { if (!it.rows.some(r => r.answer === k)) warn(W, "column never used: " + c); });
        break;
      }
    }

    // why names the answer; clue never gives it away (SPEC §6.7)
    const nwhy = low(it.why || ""), nclue = low(it.clue || "");
    for (const kt of keyTexts) {
      const k = stripEnd(kt);
      if (!nwhy.includes(k)) fail(W, "why does not name the answer: " + kt);
      if (k.length > 3 && new RegExp("\\b" + k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b").test(nclue)) fail(W, "clue gives away the answer: " + kt);
    }
    if (!/answer|order is|means|are (synonyms|antonyms)/i.test(it.why || "")) warn(W, "why does not clearly state the answer");

    // Quotes of 5+ words in why/clue must come from the item's own text (catches misquotes)
    const own = [itemText]
      .concat([].concat(it.choices || [], (it.partA || {}).choices || [], (it.partB || {}).choices || []).map(c => low(c.text)))
      .concat((it.slots || []).flatMap(sl => sl.options || []).map(low))
      .concat((it.rows || []).map(r => low(r.text)))
      .concat((it.cols || []).map(low));
    for (const field of ["why", "clue"]) {
      const quotes = norm(it[field] || "").match(/"([^"]+)"/g) || [];
      quotes.forEach(q => {
        const t = low(q.slice(1, -1)).replace(/[.,!?]+$/, "");
        if (t.split(/\s+/).length >= 5 && !own.some(o => o.includes(t))) fail(W, field + " quotes text not found in the item: " + t);
      });
    }
  });

  for (const c of REQUIRED[S] || []) if (!setStd.has(c)) fail(S, "required standard not covered: " + c);
  const share = setTwo / set.items.length;
  if (share < 0.2 || share > 0.4) fail(S, "two-point share " + Math.round(share * 100) + "% is not about 30%");
  if (setTypes.size < 4) warn(S, "uses only " + setTypes.size + " item types");
  console.log("info  " + S + ": " + set.items.length + " items, " + set.items.reduce((a, i) => a + (i.points || 0), 0) +
    " points, " + setTwo + " two-point, types " + [...setTypes].join("/") + ", std " + [...setStd].sort().join(" "));
}

console.log("\nItems: " + totalItems + ", points: " + totalPoints + ", two-point items: " + twoPointItems +
  " (" + Math.round(100 * twoPointItems / Math.max(1, totalItems)) + "%)");
console.log("Types: " + JSON.stringify(typeCount));
console.log("DOK points: " + JSON.stringify(dokPoints));
for (const t of TYPES) if (!typeCount[t]) fail("ALL", "type " + t + " never used");

console.log("\n" + failures + " failures, " + warnings + " warnings");
process.exit(failures ? 1 : 0);

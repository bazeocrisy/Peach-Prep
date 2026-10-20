#!/usr/bin/env node
/*
 * check-sets-lang.js — checks the grammar sets L-GRM-01, L-GRM-02 and L-GRM-03
 * against docs/SPEC.md §5 / §5b (schema) and §6 (content rules).
 * Usage: node verification/check-sets-lang.js
 * Exit code 0 when there are no failures.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const SETS_DIR = path.join(ROOT, "js", "data", "sets");
const FILES = ["L-GRM-01.js", "L-GRM-02.js", "L-GRM-03.js"];
const ITEM_RANGE = { "L-GRM-01": [9, 10], "L-GRM-02": [9, 10], "L-GRM-03": [8, 10] };
const TYPES = ["mc", "ms", "ebsr", "dropdown", "hottext", "order", "match"];
const GC2 = ["3.L.GC.2.a", "3.L.GC.2.b", "3.L.GC.2.c", "3.L.GC.2.d"];

let failures = 0, warnings = 0;
const fail = (where, msg) => { failures++; console.log("FAIL  " + where + ": " + msg); };
const warn = (where, msg) => { warnings++; console.log("WARN  " + where + ": " + msg); };
const norm = s => String(s).replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim();
const isStr = s => typeof s === "string" && s.trim().length > 0;

/* Standards data */
const stdCtx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, "js", "data", "standards.js"), "utf8"), stdCtx);
const STANDARDS = stdCtx.window.PP_STANDARDS || [];
const byCode = new Map(STANDARDS.map(s => [s.code, s]));
if (!STANDARDS.length) fail("standards.js", "PP_STANDARDS did not load");

/* Sets, loaded with a stub PP.addSet */
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

const itemIds = new Set();
let totalItems = 0, twoPoint = 0;

for (const set of sets) {
  const S = set.id || "(no id)";
  for (const k of ["id", "section", "kind", "title", "blurb", "passages", "items"]) if (set[k] === undefined) fail(S, "missing field " + k);
  if (set.section !== "language") fail(S, "section must be language");
  if (set.kind !== "grammar") fail(S, "kind must be grammar");
  if (!Array.isArray(set.passages) || set.passages.length !== 0) fail(S, "grammar sets here use passages: []");
  if (!Array.isArray(set.items)) { fail(S, "items must be an array"); continue; }
  const [lo, hi] = ITEM_RANGE[S] || [1, 99];
  if (set.items.length < lo || set.items.length > hi) fail(S, "has " + set.items.length + " items (needs " + lo + "–" + hi + ")");
  let setTwo = 0;
  const setStd = new Set();

  const checkChoices = (choices, where, n, nCorrect) => {
    if (!Array.isArray(choices)) { fail(where, "choices missing"); return 0; }
    if (n && (choices.length < n[0] || choices.length > n[1])) fail(where, "needs " + n.join("–") + " choices, has " + choices.length);
    choices.forEach((c, i) => {
      if (!isStr(c.text)) fail(where, "choice " + (i + 1) + " has no text");
      if (c.correct !== undefined && c.correct !== true) fail(where, "choice " + (i + 1) + ": correct must be true or absent");
    });
    const texts = choices.map(c => norm(c.text)); // case-sensitive: capitalization items differ only by case
    if (new Set(texts).size !== texts.length) fail(where, "duplicate choices");
    const k = choices.filter(c => c.correct === true).length;
    if (nCorrect !== undefined && k !== nCorrect) fail(where, "expected " + nCorrect + " correct, found " + k);
    return k;
  };

  for (const it of set.items) {
    const W = S + "/" + (it.id || "?");
    totalItems++;
    for (const k of ["id", "type", "points", "std", "dok", "prompt", "clue", "why"]) if (it[k] === undefined) fail(W, "missing field " + k);
    if (itemIds.has(it.id)) fail(W, "duplicate item id"); itemIds.add(it.id);
    if (!String(it.id).startsWith(S + "-")) fail(W, "item id should start with the set id");
    if (!TYPES.includes(it.type)) fail(W, "unknown type " + it.type);
    if (![1, 2].includes(it.points)) fail(W, "points must be 1 or 2");
    if (![1, 2, 3].includes(it.dok)) fail(W, "dok must be 1, 2 or 3");
    for (const k of ["prompt", "clue", "why"]) if (!isStr(it[k])) fail(W, k + " is empty");
    if (/\n/.test(it.prompt || "")) fail(W, "prompt is rendered as plain text; no line breaks");
    if (it.points === 2) { twoPoint++; setTwo++; }

    /* std codes: must exist; GUM rows must be M or R; GC.2 must be lettered */
    if (!Array.isArray(it.std) || !it.std.length) fail(W, "std must be a non-empty array");
    else it.std.forEach(c => {
      setStd.add(c);
      const row = byCode.get(c);
      if (!row) { fail(W, "std code not in standards.js: " + c); return; }
      if (/^3\.L\.GC\.1:/.test(c)) {
        const lvl = row.level || (c.split(":")[1]);
        if (!["M", "R"].includes(lvl)) fail(W, "grammar row level " + lvl + " is not tested (only M or R): " + c);
      } else if (!GC2.includes(c)) fail(W, "std is not a grammar code (3.L.GC.1 M/R row or 3.L.GC.2.a–d): " + c);
    });

    let keyTexts = [];
    switch (it.type) {
      case "mc":
        if (it.points !== 1) fail(W, "mc is 1 point");
        checkChoices(it.choices, W, [4, 4], 1);
        keyTexts = (it.choices || []).filter(c => c.correct).map(c => c.text);
        break;
      case "ms": {
        const k = checkChoices(it.choices, W, [5, 6]);
        if (k < 2 || k > 3) fail(W, "ms needs 2–3 correct, has " + k);
        if (it.pick !== k) fail(W, "pick (" + it.pick + ") does not equal correct count (" + k + ")");
        if (!/\b(TWO|THREE)\b/.test(it.prompt || "")) warn(W, "ms prompt should say how many to choose");
        keyTexts = (it.choices || []).filter(c => c.correct).map(c => c.text);
        break;
      }
      case "dropdown": {
        if (!isStr(it.text) || !Array.isArray(it.slots)) { fail(W, "needs text and slots"); break; }
        const holes = (it.text.match(/\{\d+\}/g) || []);
        if (holes.length !== it.slots.length) fail(W, "text has " + holes.length + " slots but slots array has " + it.slots.length);
        holes.forEach((h, i) => { if (h !== "{" + i + "}") fail(W, "slot markers must be {0}, {1} in order"); });
        it.slots.forEach((sl, i) => {
          if (!Array.isArray(sl.options) || sl.options.length < 3) { fail(W, "slot " + i + " needs 3+ options"); return; }
          if (new Set(sl.options.map(o => norm(o).toLowerCase())).size !== sl.options.length) fail(W, "slot " + i + " has duplicate options");
          if (!(Number.isInteger(sl.answer) && sl.answer >= 0 && sl.answer < sl.options.length)) fail(W, "slot " + i + " answer out of range");
          else keyTexts.push(sl.options[sl.answer]);
        });
        if (it.points === 2 && it.slots.length !== 2) fail(W, "2-point dropdown needs two slots");
        if (it.points === 1 && it.slots.length !== 1) fail(W, "1-point dropdown needs one slot");
        break;
      }
      case "hottext": {
        if (!Array.isArray(it.options)) { fail(W, "standalone hottext needs options (SPEC §5b)"); break; }
        if (it.options.length < 3) fail(W, "needs 3+ options");
        if (it.targets || it.source) fail(W, "standalone hottext uses options, not targets/source");
        it.options.forEach((o, i) => { if (!isStr(o)) fail(W, "option " + i + " empty"); });
        if (new Set(it.options.map(o => norm(o))).size !== it.options.length) fail(W, "duplicate options");
        if (!Array.isArray(it.answer) || !it.answer.length) { fail(W, "answer missing"); break; }
        it.answer.forEach(a => { if (!(Number.isInteger(a) && a >= 0 && a < it.options.length)) fail(W, "answer index out of range: " + a); });
        if (new Set(it.answer).size !== it.answer.length) fail(W, "duplicate answer indexes");
        if (it.pick !== it.answer.length) fail(W, "pick does not equal number of answers");
        if (it.points === 1 && it.answer.length !== 1) fail(W, "1-point hottext should have one answer");
        if (it.points === 2 && it.answer.length !== 2) fail(W, "2-point hottext should have two answers");
        keyTexts = it.answer.map(a => it.options[a]).filter(Boolean);
        break;
      }
      case "match": {
        if (!Array.isArray(it.cols) || it.cols.length < 2) { fail(W, "match needs 2+ cols"); break; }
        if (!Array.isArray(it.rows) || it.rows.length < 3) { fail(W, "match needs 3+ rows"); break; }
        it.rows.forEach((r, i) => {
          if (!isStr(r.text)) fail(W, "row " + (i + 1) + " has no text");
          if (!(Number.isInteger(r.answer) && r.answer >= 0 && r.answer < it.cols.length)) fail(W, "row " + (i + 1) + " answer out of range");
        });
        it.cols.forEach((c, ci) => { if (!it.rows.some(r => r.answer === ci)) warn(W, "column " + c + " has no rows"); });
        break;
      }
      default:
        fail(W, "type " + it.type + " is not used for grammar here");
    }

    /* why names the answer; clue never gives it away (SPEC §6.7) */
    const nwhy = norm(it.why || "").toLowerCase(), nclue = norm(it.clue || "").toLowerCase();
    for (const kt of keyTexts) {
      const k = norm(kt).toLowerCase().replace(/[.!?",]+$/, "");
      if (!nwhy.includes(k)) fail(W, "why does not name the answer: " + kt);
      const re = new RegExp("\\b" + k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b");
      if (re.test(nclue)) fail(W, "clue gives away the answer: " + kt);
    }

    /* Content rules (SPEC §6.6 and the task brief) */
    const allText = [it.prompt, it.text, ...(it.options || []), ...((it.choices || []).map(c => c.text)),
      ...((it.rows || []).map(r => r.text)), ...((it.slots || []).flatMap(s => s.options))].filter(Boolean).join(" \n ");
    if (/[;:]/.test(allText.replace(/o'clock/g, "").replace(/Read (the|Jayden's) [^:]*:/g, "")))
      fail(W, "semicolon or colon in student-facing sentences (not taught in grade 3)");
    if (/\b(am|is|are|was|were)\s+(\w+ly\s+)?(excited|tired|broken|scared|bored|worried|surprised|interested|closed)\b/i.test(allText))
      fail(W, "participle-looking adjective after a being verb");
    if (/\b\w+s'\s/.test(allText)) fail(W, "plural possessive (Introduce row) in item text");
    if (/\b(colour|favourite|neighbour|centre|realise)\b/i.test(allText)) fail(W, "British spelling");
  }

  if (setTwo / set.items.length < 0.25 || setTwo / set.items.length > 0.45)
    warn(S, "two-point share " + Math.round(100 * setTwo / set.items.length) + "% is not about 30%");
  console.log("info  " + S + ": " + set.items.length + " items, " + setTwo + " two-point, std " + [...setStd].map(c => c.split(":").pop()).join(", "));
}

/* Coverage required by the brief */
const used = new Set(sets.flatMap(s => s.items || []).flatMap(i => i.std || []));
for (const c of GC2) if (!used.has(c)) fail("ALL", "not covered: " + c);
console.log("\nItems: " + totalItems + ", two-point: " + twoPoint + " (" + Math.round(100 * twoPoint / Math.max(1, totalItems)) + "%)");
console.log(failures + " failures, " + warnings + " warnings");
process.exit(failures ? 1 : 0);

#!/usr/bin/env node
/*
 * check-writing.js — checks the writing tasks W-TASK-01, W-TASK-02 and the revising sets
 * W-REV-01, W-REV-02 against docs/SPEC.md §2 (assessed Constructing Texts expectations),
 * §5 / §5b (item schema), §5c (writing task schema) and §6 (content rules), plus the
 * writing-content brief (source and model word counts, two provided reasons, evidence refs).
 * Usage: node verification/check-writing.js
 * Exit code 0 when there are no failures.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DATA = path.join(__dirname, "..", "js", "data");
const TASK_FILES = ["W-TASK-01.js", "W-TASK-02.js"];
const SET_FILES = ["W-REV-01.js", "W-REV-02.js"];

const SOURCE_WORDS = [150, 300];
const MODEL_WORDS = [180, 260];
const MODEL_PARAS = [4, 5];
const DRAFT_SENTENCES = [7, 10];
const ITEMS_PER_SET = 8;
const COPY_RUN = 6; // a run of this many words copied from a source counts as copying

// Assessed Constructing-Texts expectations (SPEC §2). 3.L.GC.1 only as GUM-row codes.
const ASSESSED = new Set([
  "3.T.C.1.c", "3.T.SS.1.b", "3.T.SS.1.c", "3.T.SS.1.d", "3.T.SS.2.b",
  "3.T.T.1.e", "3.T.T.2.d", "3.T.T.3.c", "3.T.T.4.b", "3.T.RA.1.c",
  "3.L.GC.2.b", "3.L.GC.2.c", "3.L.GC.2.d", "3.L.V.1.b", "3.L.V.2.c", "3.L.V.3.e"
]);
const stdOk = c => ASSESSED.has(c) || /^3\.L\.GC\.1:[GUM]:[a-z0-9-]+$/.test(c);
const TYPES = ["mc", "ms", "ebsr", "dropdown", "hottext", "order", "match"];

// What each revising set must cover (from the brief)
const REQUIRED = {
  "W-REV-01": { std: ["3.T.T.3.c", "3.T.SS.1.c", "3.T.SS.1.d", "3.T.RA.1.c", "3.L.V.3.e", "3.L.GC.2.b", "3.L.GC.2.c"],
                anyStd: [["3.T.T.2.d", "3.T.RA.1.c"]], types: ["hottext", "dropdown"], genre: /opinion|informational/i },
  "W-REV-02": { std: ["3.T.T.1.e", "3.T.SS.1.c", "3.T.SS.2.b", "3.L.V.3.e"],
                anyStd: [["3.T.SS.1.b", "3.T.C.1.c"]], types: ["order", "dropdown"], genre: /narrative/i }
};

let failures = 0, warnings = 0;
const fail = (where, msg) => { failures++; console.log("FAIL  " + where + ": " + msg); };
const warn = (where, msg) => { warnings++; console.log("WARN  " + where + ": " + msg); };
const info = (where, msg) => console.log("info  " + where + ": " + msg);

const norm = s => String(s).replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim();
const stripNum = s => norm(s).replace(/^\(\d+\)\s*/, "");
const words = s => stripNum(s).split(" ").filter(w => /[A-Za-z0-9]/.test(w)).length;
const isStr = s => typeof s === "string" && s.trim().length > 0;
const tokens = s => norm(s).toLowerCase().replace(/[^a-z0-9' ]+/g, " ").split(" ").filter(Boolean);
const endsOk = s => /[.!?]["”]?$/.test(norm(s));

/* ---------- load with stubs ---------- */
function load(dir, files, method) {
  const out = [];
  const PP = { addTask: () => fail("load", "addTask called from a set file"), addSet: () => fail("load", "addSet called from a task file") };
  PP[method] = x => out.push(x);
  for (const f of files) {
    const file = path.join(DATA, dir, f);
    if (!fs.existsSync(file)) { fail(f, "file missing"); continue; }
    const before = out.length;
    try { vm.runInNewContext(fs.readFileSync(file, "utf8"), { PP }, { filename: f }); }
    catch (e) { fail(f, "does not load: " + e.message); continue; }
    if (out.length !== before + 1) fail(f, "must call PP." + method + " exactly once");
    else if (out[out.length - 1].id + ".js" !== f) fail(f, "id does not match file name");
  }
  return out;
}
const tasks = load("tasks", TASK_FILES, "addTask");
const sets = load("sets", SET_FILES, "addSet");

/* ---------- passages (shared by tasks and sets) ---------- */
function indexPassages(owner, passages, opts) {
  const sentences = {}, text = {};
  for (const p of passages) {
    const P = owner + "/" + (p.id || "?");
    for (const k of ["id", "title", "byline", "genre", "lexile", "paragraphs", "lines"]) if (p[k] === undefined) fail(P, "missing field " + k);
    if (p.lines !== null) fail(P, "lines must be null for prose");
    if (!Array.isArray(p.paragraphs) || !p.paragraphs.length) { fail(P, "paragraphs must be a non-empty array"); continue; }
    let wc = 0;
    p.paragraphs.forEach((para, i) => {
      if (!Array.isArray(para) || !para.length) { fail(P, "paragraph " + (i + 1) + " must be a non-empty array"); return; }
      para.forEach((s, j) => {
        if (!isStr(s)) { fail(P, "empty sentence at " + (i + 1) + ":" + (j + 1)); return; }
        if (/^(## |Caption: )/.test(s)) fail(P, "headings/captions are not expected here");
        if (!endsOk(s)) fail(P, "sentence does not end with punctuation: " + s);
        if (/  |\s$|^\s/.test(s)) fail(P, "stray spaces: " + s);
        sentences[p.id + ":" + (i + 1) + ":" + (j + 1)] = s;
        wc += words(s);
      });
    });
    text[p.id] = norm(p.paragraphs.flat().map(stripNum).join(" "));
    if (opts.wordRange && (wc < opts.wordRange[0] || wc > opts.wordRange[1])) fail(P, "word count " + wc + " outside " + opts.wordRange.join("–"));
    info(P, wc + " words, " + p.paragraphs.length + " paragraphs");
  }
  return { sentences, text };
}

/* =================== WRITING TASKS =================== */
for (const t of tasks) {
  const T = t.id || "(no id)";
  for (const k of ["id", "title", "sources", "prompt", "reasons", "std", "planner", "evidence", "model", "lookFors"])
    if (t[k] === undefined) fail(T, "missing field " + k);
  if (!isStr(t.title) || !/\?$/.test(t.title)) fail(T, "title should be a question");

  // sources
  if (!Array.isArray(t.sources) || t.sources.length !== 2) { fail(T, "needs exactly 2 sources"); continue; }
  if (t.sources.some(s => !/informational/i.test(s.genre || ""))) fail(T, "sources must be informational");
  if (new Set(t.sources.map(s => s.id)).size !== 2) fail(T, "source ids must differ");
  const { sentences, text } = indexPassages(T, t.sources, { wordRange: SOURCE_WORDS });

  // prompt
  if (!isStr(t.prompt)) fail(T, "prompt empty");
  else for (const w of ["opinion essay", "reasons", "sources", "own words"])
    if (!t.prompt.toLowerCase().includes(w)) fail(T, "prompt should mention \"" + w + "\"");

  // the 2 provided reasons
  if (!Array.isArray(t.reasons) || t.reasons.length !== 2) fail(T, "needs exactly 2 provided reasons");
  else {
    t.reasons.forEach((r, i) => { if (!isStr(r) || !endsOk(r)) fail(T, "reason " + (i + 1) + " must be a full sentence"); });
    if (norm(t.reasons[0]).toLowerCase() === norm(t.reasons[1]).toLowerCase()) fail(T, "reasons are the same");
  }

  // std
  if (!Array.isArray(t.std) || !t.std.length) fail(T, "std must be a non-empty array");
  else t.std.forEach(c => { if (!stdOk(c)) fail(T, "std not an assessed Constructing Texts code: " + c); });
  for (const c of ["3.T.T.3.c", "3.T.RA.1.c"]) if (!(t.std || []).includes(c)) fail(T, "std should include " + c);

  // planner
  const pl = t.planner || {};
  if (!isStr(pl.opinion)) fail(T, "planner.opinion empty");
  if (!isStr(pl.conclusion)) fail(T, "planner.conclusion empty");
  if (!Array.isArray(pl.reasonPrompts) || pl.reasonPrompts.length !== 2 || !pl.reasonPrompts.every(isStr)) fail(T, "planner.reasonPrompts needs 2 prompts");
  [pl.opinion, pl.conclusion].concat(pl.reasonPrompts || []).forEach(q => { if (isStr(q) && !/\?/.test(q)) warn(T, "planner text has no guiding question: " + q); });

  // evidence
  if (!Array.isArray(t.evidence)) fail(T, "evidence must be an array");
  else {
    const seen = new Set();
    const per = [{ n: 0, src: new Set() }, { n: 0, src: new Set() }];
    t.evidence.forEach((e, i) => {
      const E = T + "/evidence[" + i + "]";
      if (![0, 1].includes(e.reason)) { fail(E, "reason must be 0 or 1"); return; }
      if (!t.sources.some(s => s.id === e.source)) fail(E, "source is not a source id: " + e.source);
      if (!/^p\d+:\d+:\d+$/.test(e.ref || "")) { fail(E, "bad ref " + e.ref); return; }
      if (!(e.ref in sentences)) { fail(E, "ref does not resolve: " + e.ref); return; }
      if (!e.ref.startsWith(e.source + ":")) fail(E, "ref " + e.ref + " is not in source " + e.source);
      if (!isStr(e.note)) fail(E, "note empty");
      const key = e.reason + "|" + e.ref;
      if (seen.has(key)) fail(E, "duplicate evidence " + key); seen.add(key);
      // the note's own refs, if any, must resolve too
      ((e.note || "").match(/p\d+:\d+:\d+/g) || []).forEach(r => { if (!(r in sentences)) fail(E, "note ref does not resolve: " + r); });
      per[e.reason].n++; per[e.reason].src.add(e.source);
    });
    per.forEach((p, r) => {
      if (p.n < 2) fail(T, "reason " + (r + 1) + " has fewer than 2 evidence refs");
      if (p.src.size < 2) fail(T, "reason " + (r + 1) + " is not supported in both sources");
      info(T, "reason " + (r + 1) + ": " + p.n + " evidence refs across " + p.src.size + " sources");
    });
  }

  // model
  const m = t.model || {};
  if (!Array.isArray(m.paragraphs)) fail(T, "model.paragraphs missing");
  else {
    const paras = m.paragraphs;
    if (paras.length < MODEL_PARAS[0] || paras.length > MODEL_PARAS[1]) fail(T, "model has " + paras.length + " paragraphs (needs " + MODEL_PARAS.join("–") + ")");
    const all = paras.join(" ");
    const wc = words(all);
    if (wc < MODEL_WORDS[0] || wc > MODEL_WORDS[1]) fail(T, "model word count " + wc + " outside " + MODEL_WORDS.join("–"));
    info(T, "model: " + wc + " words, " + paras.length + " paragraphs");
    paras.forEach((p, i) => {
      if (!isStr(p)) { fail(T, "model paragraph " + (i + 1) + " empty"); return; }
      if (!endsOk(p)) fail(T, "model paragraph " + (i + 1) + " does not end with punctuation");
      if (!/^[A-Z]/.test(p)) fail(T, "model paragraph " + (i + 1) + " does not start with a capital");
      const sents = p.split(/(?<=[.!?]["”]?)\s+(?=[A-Z"“])/);
      if (sents.length < 2) fail(T, "model paragraph " + (i + 1) + " has fewer than 2 sentences");
      if (/  /.test(p)) fail(T, "model paragraph " + (i + 1) + " has a double space");
    });
    // own words: no run of COPY_RUN+ words copied from a source
    const mt = tokens(all);
    const srcGrams = new Set();
    Object.values(text).forEach(st => { const tk = tokens(st); for (let i = 0; i + COPY_RUN <= tk.length; i++) srcGrams.add(tk.slice(i, i + COPY_RUN).join(" ")); });
    for (let i = 0; i + COPY_RUN <= mt.length; i++) {
      const g = mt.slice(i, i + COPY_RUN).join(" ");
      if (srcGrams.has(g)) fail(T, "model copies " + COPY_RUN + "+ words from a source: \"" + g + "\"");
    }
    // cites the sources
    const cites = (all.match(/\b(first|second) source\b/gi) || []).length;
    if (cites < 3) fail(T, "model names a source only " + cites + " times (want 3+)");
    const lower = all.toLowerCase();
    for (const s of ["first source", "second source"]) if (!lower.includes(s)) fail(T, "model never cites the " + s);
    // develops both provided reasons: most content words of each reason appear
    const STOP = new Set(["a", "an", "the", "to", "and", "would", "help", "helps", "kids", "too", "be", "being", "become", "for", "of", "it"]);
    (t.reasons || []).forEach((r, i) => {
      const cw = tokens(r).filter(w => !STOP.has(w));
      const hit = cw.filter(w => lower.includes(w)).length;
      if (hit / cw.length < 0.75) fail(T, "model does not clearly develop reason " + (i + 1) + " (" + hit + "/" + cw.length + " key words)");
    });
    // linking words
    const LINK = ["first", "second", "also", "in addition", "because", "since", "so", "for these reasons", "in conclusion", "according to", "but"];
    const used = LINK.filter(w => new RegExp("\\b" + w + "\\b", "i").test(all));
    if (used.length < 5) fail(T, "model uses only " + used.length + " linking words: " + used.join(", "));
    // notes, trait by trait
    const notes = m.notes || [];
    const TRAITS = ["Purpose and Organization", "Evidence and Elaboration", "Language Usage and Conventions"];
    if (!Array.isArray(notes) || notes.length !== 3) fail(T, "model.notes needs 3 notes, one per trait");
    else TRAITS.forEach((tr, i) => { if (!isStr(notes[i]) || !notes[i].startsWith(tr)) fail(T, "model.notes[" + i + "] should start with \"" + tr + "\""); });
    // quotes in notes (3+ words) must come from the model
    notes.forEach((n, i) => (norm(n).match(/"([^"]+)"/g) || []).forEach(q => {
      const s = q.slice(1, -1).replace(/[.,]$/, "");
      if (s.split(" ").length >= 3 && !norm(all).toLowerCase().includes(s.toLowerCase())) fail(T, "model.notes[" + i + "] quotes text not in the model: " + s);
    }));
  }

  // lookFors
  const lf = t.lookFors || {};
  for (const k of ["purpose", "evidence", "conventions"])
    if (!Array.isArray(lf[k]) || !lf[k].length || !lf[k].every(isStr)) fail(T, "lookFors." + k + " must be a non-empty array of strings");
}

/* =================== REVISING SETS =================== */
const typeCount = {}, itemIds = new Set();
let totalItems = 0, twoPoint = 0, totalPoints = 0;
const dokPoints = { 1: 0, 2: 0, 3: 0 };

for (const set of sets) {
  const S = set.id || "(no id)";
  for (const k of ["id", "section", "kind", "title", "blurb", "passages", "items"]) if (set[k] === undefined) fail(S, "missing field " + k);
  if (set.section !== "writing") fail(S, "section must be writing");
  if (set.kind !== "revising") fail(S, "kind must be revising");
  if (!Array.isArray(set.passages) || set.passages.length !== 1) { fail(S, "revising set needs exactly one draft passage"); continue; }
  const req = REQUIRED[S] || { std: [], anyStd: [], types: [] };
  if (req.genre && !req.genre.test(set.passages[0].genre || "")) fail(S, "draft genre does not match: " + set.passages[0].genre);
  const { sentences, text } = indexPassages(S, set.passages, {});

  // numbered draft: "(1) ", "(2) ", ... in reading order
  const refsInOrder = Object.keys(sentences);
  const byNum = {};
  refsInOrder.forEach((r, i) => {
    const mm = /^\((\d+)\) \S/.exec(sentences[r]);
    if (!mm) fail(S, "draft sentence is not numbered \"(n) \": " + sentences[r]);
    else if (Number(mm[1]) !== i + 1) fail(S, "draft numbering out of order at " + r + " (found " + mm[1] + ", expected " + (i + 1) + ")");
    byNum[i + 1] = stripNum(sentences[r]);
  });
  const nSent = refsInOrder.length;
  if (nSent < DRAFT_SENTENCES[0] || nSent > DRAFT_SENTENCES[1]) fail(S, "draft has " + nSent + " sentences (needs " + DRAFT_SENTENCES.join("–") + ")");
  const passageAll = Object.values(text).join(" ");
  const inPassage = t => passageAll.includes(norm(t));

  if (!Array.isArray(set.items)) continue;
  if (set.items.length !== ITEMS_PER_SET) fail(S, "has " + set.items.length + " items (needs " + ITEMS_PER_SET + ")");
  const stdHere = new Set(), typesHere = new Set();

  for (const it of set.items) {
    const W = S + "/" + (it.id || "?");
    totalItems++;
    for (const k of ["id", "type", "points", "std", "dok", "prompt", "clue", "why"]) if (it[k] === undefined) fail(W, "missing field " + k);
    if (itemIds.has(it.id)) fail(W, "duplicate item id"); itemIds.add(it.id);
    if (!String(it.id || "").startsWith(S + "-")) fail(W, "item id should start with " + S + "-");
    if (!TYPES.includes(it.type)) fail(W, "unknown type " + it.type);
    if (![1, 2].includes(it.points)) fail(W, "points must be 1 or 2");
    if (![1, 2, 3].includes(it.dok)) fail(W, "dok must be 1, 2 or 3");
    if (!Array.isArray(it.std) || !it.std.length) fail(W, "std must be a non-empty array");
    else it.std.forEach(c => { if (!stdOk(c)) fail(W, "std not an assessed Constructing Texts code: " + c); stdHere.add(c); });
    for (const k of ["prompt", "clue", "why"]) if (!isStr(it[k])) fail(W, k + " is empty");
    typeCount[it.type] = (typeCount[it.type] || 0) + 1; typesHere.add(it.type);
    totalPoints += it.points || 0; dokPoints[it.dok] = (dokPoints[it.dok] || 0) + (it.points || 0);
    if (it.points === 2) twoPoint++;

    // sentence numbers named in the prompt must exist in the draft
    ((it.prompt || "").match(/sentences? (\d+)(?: and (\d+))?/gi) || []).forEach(s =>
      (s.match(/\d+/g) || []).forEach(n => { if (Number(n) < 1 || Number(n) > nSent) fail(W, "prompt names sentence " + n + ", but the draft has " + nSent); }));

    let keyTexts = [];
    const extraOk = []; // texts that why/clue may quote (beyond the passage)
    const checkChoices = (choices, where, n, nCorrect) => {
      if (!Array.isArray(choices)) { fail(where, "choices missing"); return 0; }
      if (n && (choices.length < n[0] || choices.length > n[1])) fail(where, "needs " + n.join("–") + " choices, has " + choices.length);
      choices.forEach((c, i) => { if (!isStr(c.text)) fail(where, "choice " + (i + 1) + " has no text"); else extraOk.push(norm(c.text)); });
      const texts = choices.map(c => norm(c.text).toLowerCase());
      if (new Set(texts).size !== texts.length) fail(where, "duplicate choices");
      const k = choices.filter(c => c.correct === true).length;
      if (nCorrect !== undefined && k !== nCorrect) fail(where, "expected " + nCorrect + " correct, found " + k);
      // §6.8 distractors at about the same length as the key
      const keyLen = Math.max(...choices.filter(c => c.correct).map(c => words(c.text)), 0);
      choices.filter(c => !c.correct).forEach(c => {
        const wl = words(c.text);
        if (keyLen >= 4 && (wl < keyLen * 0.5 || wl > keyLen * 1.6)) warn(where, "distractor length " + wl + " vs key " + keyLen + ": " + c.text);
      });
      return k;
    };

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
        if (!new RegExp("\\b" + ["", "", "TWO", "THREE"][k] + "\\b").test(it.prompt || "")) fail(W, "prompt should say how many to choose in capitals");
        keyTexts = (it.choices || []).filter(c => c.correct).map(c => c.text);
        break;
      }
      case "ebsr":
        if (it.points !== 2) fail(W, "ebsr is 2 points");
        if (!it.partA || !it.partB) { fail(W, "needs partA and partB"); break; }
        checkChoices(it.partA.choices, W + " partA", [4, 4], 1);
        checkChoices(it.partB.choices, W + " partB", [4, 6], it.partB.pick || 1);
        (it.partB.choices || []).forEach(c => { if (!inPassage(stripNum(c.text))) fail(W, "Part B choice not verbatim in the draft: " + c.text); });
        keyTexts = (it.partA.choices || []).filter(c => c.correct).map(c => c.text);
        break;
      case "dropdown": {
        if (!isStr(it.text) || !Array.isArray(it.slots)) { fail(W, "needs text and slots"); break; }
        const holes = (it.text.match(/\{\d+\}/g) || []).length;
        if (holes !== it.slots.length) fail(W, "text has " + holes + " slots but slots array has " + it.slots.length);
        it.slots.forEach((sl, i) => {
          if (!Array.isArray(sl.options) || sl.options.length < 3) fail(W, "slot " + i + " needs 3+ options");
          else if (!(Number.isInteger(sl.answer) && sl.answer >= 0 && sl.answer < sl.options.length)) fail(W, "slot " + i + " answer out of range");
          else keyTexts.push(sl.options[sl.answer]);
          if (Array.isArray(sl.options) && new Set(sl.options.map(o => norm(o).toLowerCase())).size !== sl.options.length) fail(W, "slot " + i + " has duplicate options");
        });
        if (it.points === 2 && it.slots.length !== 2) fail(W, "2-point dropdown needs two slots");
        if (it.points === 1 && it.slots.length !== 1) fail(W, "1-point dropdown needs one slot");
        // the filled-in text may be quoted in why
        let filled = it.text;
        it.slots.forEach((sl, i) => { if (sl.options) filled = filled.replace("{" + i + "}", sl.options[sl.answer]); });
        extraOk.push(norm(filled).replace(/\(\d+\) /g, ""));
        // each "(n) ..." segment must reproduce draft sentence n, apart from the blank
        it.text.split(/(?=\(\d+\) )/).filter(s => /^\(\d+\) /.test(s)).forEach(seg => {
          const n = Number(/^\((\d+)\)/.exec(seg)[1]);
          const draft = byNum[n];
          if (!draft) { fail(W, "dropdown names sentence " + n + ", which is not in the draft"); return; }
          const body = norm(seg.replace(/^\(\d+\)\s*/, ""));
          const mm = /^(.*?)\{(\d+)\}(.*)$/.exec(body);
          if (!mm) { if (norm(body).toLowerCase() !== draft.toLowerCase()) fail(W, "sentence " + n + " does not match the draft"); return; }
          const before = norm(mm[1]).toLowerCase(), after = norm(mm[3]).toLowerCase(), d = draft.toLowerCase();
          if (!(d.startsWith(before) && d.endsWith(after) && d.length >= before.length + after.length)) { fail(W, "sentence " + n + " does not match the draft around the blank"); return; }
          const orig = norm(draft.slice(before.length, draft.length - after.length));
          const sl = it.slots[Number(mm[2])];
          if (sl && sl.options && norm(sl.options[sl.answer]).toLowerCase() === orig.toLowerCase()) fail(W, "blank in sentence " + n + ": the answer is what the draft already says");
          info(W, "sentence " + n + ": draft has \"" + (orig || "(nothing)") + "\", answer \"" + (sl && sl.options ? sl.options[sl.answer] : "?") + "\"");
        });
        break;
      }
      case "hottext": {
        if (it.options) {
          if (!Array.isArray(it.answer) || !it.answer.every(i => Number.isInteger(i) && i >= 0 && i < it.options.length)) fail(W, "answer indexes out of range");
          keyTexts = (it.answer || []).map(i => it.options[i]);
          it.options.forEach(o => extraOk.push(norm(o)));
        } else {
          if (it.source && !set.passages.some(p => p.id === it.source)) fail(W, "source not a passage: " + it.source);
          if (!Array.isArray(it.targets) || it.targets.length < 3) fail(W, "needs 3+ targets");
          const refOk = r => { if (!(r in sentences)) { fail(W, "reference does not resolve " + r); return false; } return true; };
          (it.targets || []).forEach(refOk);
          if (new Set(it.targets || []).size !== (it.targets || []).length) fail(W, "duplicate targets");
          (it.answer || []).forEach(r => { if (refOk(r) && !(it.targets || []).includes(r)) fail(W, "answer " + r + " is not a target"); });
          keyTexts = (it.answer || []).map(r => sentences[r]).filter(Boolean).map(stripNum);
          // why should also name the sentence number
          (it.answer || []).forEach(r => {
            const n = refsInOrder.indexOf(r) + 1;
            if (n && !new RegExp("sentence " + n + "\\b", "i").test(it.why || "")) fail(W, "why does not name sentence " + n);
          });
        }
        if (!Array.isArray(it.answer) || !it.answer.length) fail(W, "answer missing");
        if (it.pick !== (it.answer || []).length) fail(W, "pick does not equal number of answers");
        if (it.points === 2 && (it.answer || []).length !== 2) fail(W, "2-point hottext needs 2 answers");
        break;
      }
      case "order":
        if (!Array.isArray(it.steps) || it.steps.length < 3 || it.steps.length > 5) fail(W, "order needs 3–5 steps");
        else {
          if (new Set(it.steps.map(norm)).size !== it.steps.length) fail(W, "duplicate steps");
          it.steps.forEach(s => extraOk.push(norm(s)));
          // why walks through the order: every step, in order
          const nw = norm(it.why || "");
          let pos = -1;
          it.steps.forEach((s, i) => {
            const at = nw.indexOf(norm(s).replace(/[.!?]$/, ""));
            if (at < 0) fail(W, "why does not name step " + (i + 1));
            else if (at < pos) fail(W, "why names step " + (i + 1) + " out of order");
            else pos = at;
          });
          // the steps must not already be in the draft
          it.steps.forEach(s => { if (inPassage(s)) fail(W, "order step is already in the draft: " + s); });
        }
        break;
      case "match":
        if (!Array.isArray(it.cols) || it.cols.length < 2 || !Array.isArray(it.rows) || it.rows.length < 3) { fail(W, "match needs 2+ cols and 3+ rows"); break; }
        it.rows.forEach((r, i) => { if (!(Number.isInteger(r.answer) && r.answer >= 0 && r.answer < it.cols.length)) fail(W, "row " + (i + 1) + " answer out of range"); });
        break;
    }

    // why names the answer; clue never gives it away (SPEC §6.7)
    const nwhy = norm(it.why || "").toLowerCase(), nclue = norm(it.clue || "").toLowerCase();
    for (const kt of keyTexts) {
      const k = norm(kt).toLowerCase().replace(/[.!?"]+$/, "");
      if (!nwhy.includes(k)) fail(W, "why does not name the answer: " + kt);
      if (k.length > 6 && nclue.includes(k)) fail(W, "clue gives away the answer: " + kt);
      // single-word keys: the clue must not contain the key as a whole word
      if (k.length <= 6 && /^[a-z]+$/.test(k) && new RegExp("\\b" + k + "\\b").test(nclue)) fail(W, "clue contains the one-word answer: " + kt);
    }
    // quoted strings of 5+ words in why/clue must be real text (draft, own choices, filled blank, steps)
    for (const field of ["why", "clue"]) {
      (norm(it[field] || "").match(/"([^"]+)"/g) || []).forEach(q => {
        const t = q.slice(1, -1).replace(/[.,]$/, "");
        if (t.split(/\s+/).length < 5) return;
        if (!inPassage(t) && !extraOk.some(x => x.includes(t))) fail(W, field + " quotes text that is not in the draft or the item: " + t);
      });
    }
  }

  // coverage for this set
  for (const s of req.std) if (!stdHere.has(s)) fail(S, "does not cover " + s);
  for (const group of req.anyStd) if (!group.some(s => stdHere.has(s))) fail(S, "does not cover any of " + group.join(" / "));
  for (const ty of req.types) if (!typesHere.has(ty)) fail(S, "does not use a " + ty + " item");
}

console.log("\nRevising items: " + totalItems + ", points: " + totalPoints + ", two-point items: " + twoPoint +
  " (" + Math.round(100 * twoPoint / Math.max(1, totalItems)) + "%)");
console.log("Types: " + JSON.stringify(typeCount));
console.log("DOK points: " + JSON.stringify(dokPoints));
const share = twoPoint / Math.max(1, totalItems);
if (share < 0.3 || share > 0.42) fail("ALL", "two-point share " + Math.round(share * 100) + "% is not about 35%");

console.log("\n" + failures + " failures, " + warnings + " warnings");
process.exit(failures ? 1 : 0);

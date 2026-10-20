#!/usr/bin/env node
/* Peach Prep content checker -- the release gate for every set and task
   listed in js/data/manifest.js (and, with --all, every file on disk).
   Usage: node verification/check-content.js [--all]
   Exit code 1 on any failure. Rules: docs/SPEC.md §5, §5b, §5c, §6. */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.resolve(__dirname, "..");
const all = process.argv.includes("--all");

const ctx = { window: {} };
vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
run("js/data/standards.js");
run("js/data/manifest.js");
const STD = ctx.window.PP_STANDARDS;
const MAN = ctx.window.PP_MANIFEST;
const codes = new Set(STD.map(s => s.code));
const gumLevel = {}; STD.forEach(s => { if (s.gum) gumLevel[s.code] = s.level; });

const sets = [], tasks = [], lessons = [];
ctx.PP = { addSet: s => sets.push(s), addTask: t => tasks.push(t), addLesson: l => lessons.push(l) };
const setFiles = all ? fs.readdirSync(path.join(ROOT, "js/data/sets")).filter(f => f.endsWith(".js")).map(f => f.slice(0, -3)) : MAN.sets;
const taskFiles = all ? (fs.existsSync(path.join(ROOT, "js/data/tasks")) ? fs.readdirSync(path.join(ROOT, "js/data/tasks")).filter(f => f.endsWith(".js")).map(f => f.slice(0, -3)) : []) : (MAN.tasks || []);
setFiles.forEach(id => run("js/data/sets/" + id + ".js"));
taskFiles.forEach(id => run("js/data/tasks/" + id + ".js"));
const LDIR = path.join(ROOT, "js/data/lessons");
const lessonFiles = all ? (fs.existsSync(LDIR) ? fs.readdirSync(LDIR).filter(f => f.endsWith(".js")).map(f => f.slice(0, -3)) : []) : (MAN.lessons || []);
lessonFiles.forEach(id => run("js/data/lessons/" + id + ".js"));

const fails = [], warns = [];
const F = (where, msg) => fails.push(where + ": " + msg);
const W = (where, msg) => warns.push(where + ": " + msg);
const STOP = ["that","this","with","from","they","them","their","there","what","when","where","which","who","whom","your","have","about","into","each","word","words","sentence","sentences","choice","choices","answer","read","paragraph","part","does","tell","tells","then","than","only","also","most","more","some","like","just","because","would","could","should","will","were","been","being","make","makes","same","other","both","look","think","find","story","passage","text","line","lines"];
const wc = t => (String(t).match(/\S+/g) || []).length;
const norm = t => String(t).replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim();

function passageText(p) { return (p.lines || p.paragraphs || []).map(b => b.join(" ")).join(" ").replace(/\*\*/g, ""); }
/* Figures and bold words (SPEC §5e). A figure's file must exist under
   assets/figures/, its alt text must say what the picture shows, and SVG
   text must stay readable: at least 14px at the width the figure is drawn on
   a 320px phone (about 198px in a Learn It example, 220px or more in a
   passage, a question or a Watch Me example). */
const FIG_W = { teach: 198, other: 220 }, figSeen = {};
function checkFigures(where, list, blocks, minW) {
  [].concat(list || []).forEach((f, i) => {
    const w = where + " figure " + (i + 1);
    if (!f || typeof f !== "object") { F(w, "is not an object"); return; }
    if (!/^assets\/figures\/[a-z0-9-]+\.(svg|png)$/.test(f.src || "")) F(w, "src must be assets/figures/<name>.svg or .png");
    else if (!fs.existsSync(path.join(ROOT, f.src))) F(w, "file not found: " + f.src);
    else if (/\.svg$/.test(f.src) && !figSeen[f.src + minW]) { figSeen[f.src + minW] = 1; checkSvg(w, f.src, minW || FIG_W.other); }
    if (typeof f.alt !== "string" || wc(f.alt) < 5) F(w, "needs alt text that says what the picture shows (5+ words)");
    if (blocks) { if (!Number.isInteger(f.after) || f.after < 0 || f.after > blocks.length) F(w, "after must be a whole number from 0 to " + blocks.length); }
    else if (f.after !== undefined) W(w, "after is only used on passage figures");
  });
}
function checkSvg(w, src, minW) {
  const t = fs.readFileSync(path.join(ROOT, src), "utf8");
  if (/<script|\son[a-z]+=|href="(https?:)?\/\//i.test(t)) F(w, src + " has a script or an outside link");
  const vb = /viewBox="[\d.-]+ [\d.-]+ ([\d.]+) [\d.]+"/.exec(t);
  if (!vb) { F(w, src + " needs a viewBox"); return; }
  const sizes = (t.match(/font-size="[\d.]+"/g) || []).map(x => Number(/[\d.]+/.exec(x)[0]));
  const px = sizes.length ? Math.min.apply(null, sizes) * minW / Number(vb[1]) : 99;
  if (px < 14) W(w, src + ": smallest text is " + px.toFixed(1) + "px on a 320px phone (need 14+)");
}
const badBold = s => (String(s).match(/\*\*/g) || []).length % 2 === 1;
function sentenceAt(set, ref) {
  const m = /^([a-z0-9]+):(\d+):(\d+)$/i.exec(ref || ""); if (!m) return null;
  const p = (set.passages || set.sources || []).find(x => x.id === m[1]); if (!p) return null;
  const b = (p.lines || p.paragraphs || [])[Number(m[2]) - 1]; return b ? (b[Number(m[3]) - 1] || null) : null;
}
function checkPassages(where, list, kind) {
  const ids = new Set();
  (list || []).forEach(p => {
    if (!p.id) F(where, "passage without id");
    if (ids.has(p.id)) F(where, "duplicate passage id " + p.id); ids.add(p.id);
    const blocks = p.lines || p.paragraphs;
    if (!Array.isArray(blocks) || !blocks.length) { F(where, p.id + " has no paragraphs/lines"); return; }
    blocks.forEach((b, i) => {
      if (!Array.isArray(b) || !b.length) F(where, p.id + " block " + (i + 1) + " is not a non-empty array");
      (b || []).forEach(s => { if (typeof s !== "string" || !s.trim()) F(where, p.id + " empty sentence in block " + (i + 1)); else if (badBold(s)) F(where, p.id + " unmatched ** in block " + (i + 1)); });
    });
    if (p.figures && p.lines) F(where, p.id + ": figures are for prose passages only");
    checkFigures(where + " " + p.id, p.figures, p.lines ? null : blocks);
    const n = wc(passageText(p));
    if (!p.lines && kind !== "revising" && n < 100) W(where, p.id + " is short (" + n + " words)");
    if (n > 650) W(where, p.id + " is long (" + n + " words)");
  });
}
function checkStd(where, std) {
  if (!Array.isArray(std) || !std.length) { F(where, "no std"); return; }
  std.forEach(c => {
    if (!codes.has(c)) F(where, "unknown std code " + c);
    else if (gumLevel[c] && "MR".indexOf(gumLevel[c]) < 0) F(where, "grammar row " + c + " is level " + gumLevel[c] + " (not assessed)");
    else { const s = STD.find(x => x.code === c); if (s && ["no", "classroom"].indexOf(s.tested) >= 0) F(where, c + " is not assessed on the Milestones"); }
  });
}
/* Test-wise giveaway: the key is clearly the longest choice. */
const longKey = (where, ch, label) => {
  const lens = (ch || []).map(c => norm(c.text).length);
  const k = (ch || []).findIndex(c => c.correct);
  if (k < 0 || lens.length < 3) return;
  const others = lens.filter((x, i) => i !== k);
  const next = Math.max.apply(null, others);
  if (lens[k] > next * 1.3 && lens[k] - next >= 12) W(where, (label || "choices") + ": key is much longer than every other choice (" + lens[k] + " vs " + next + " chars)");
};
const oneCorrect = (where, ch, label) => {
  longKey(where, ch, label);
  if (!Array.isArray(ch) || ch.length < 3) F(where, (label || "choices") + ": fewer than 3 choices");
  const n = (ch || []).filter(c => c.correct).length;
  if (n !== 1) F(where, (label || "choices") + ": " + n + " correct (need exactly 1)");
  const texts = (ch || []).map(c => norm(c.text));
  if (new Set(texts).size !== texts.length) F(where, (label || "choices") + ": duplicate choice text");
};

const seenItem = new Set(), seenSet = new Set();
sets.forEach(set => {
  const S = set.id || "(no id)";
  if (seenSet.has(S)) F(S, "duplicate set id"); seenSet.add(S);
  ["id", "section", "kind", "title", "items"].forEach(k => { if (!set[k]) F(S, "missing " + k); });
  if (["reading", "writing", "language", "test"].indexOf(set.section) < 0) F(S, "bad section " + set.section);
  if (set.kind === "form") (set.items || []).forEach(it => {
    if (!Array.isArray(it.passages)) F(S + " " + it.id, "form items need passages: [...]");
    else it.passages.forEach(pid => { if (!(set.passages || []).some(p => p.id === pid)) F(S + " " + it.id, "unknown passage " + pid); });
  });
  checkPassages(S, set.passages, set.kind);
  (set.items || []).forEach(it => checkItem(set, it, S));
});

function checkItem(set, it, S, lessonCode) {
    const w = S + " " + (it.id || "?");
    if (seenItem.has(S + it.id)) F(w, "duplicate item id"); seenItem.add(S + it.id);
    ["id", "type", "prompt", "clue", "why"].forEach(k => { if (!it[k]) F(w, "missing " + k); });
    if (String(it.prompt || "").length > 220 && !it.stem) W(w, "long prompt: move the reading text into stem");
    if ([1, 2].indexOf(it.points) < 0) F(w, "points must be 1 or 2");
    if (it.figure) checkFigures(w, it.figure);
    [].concat(it.stem || []).forEach(s => { if (badBold(s)) F(w, "unmatched ** in stem"); });
    /* the review screen prints hot-text sentences as plain text, so keep **bold** out of them */
    if (it.type === "hottext") [].concat(it.targets || [], it.answer || []).forEach(r => { const s = sentenceAt(set, r); if (s && /\*\*/.test(s)) F(w, "hottext target " + r + " has **bold** markup"); });
    if ([1, 2, 3, 4].indexOf(it.dok) < 0) F(w, "dok must be 1-4");
    if (lessonCode) {
      /* a lesson question practices the lesson's own standard, tested or not */
      const std = it.std || [lessonCode];
      std.forEach(c => { if (!codes.has(c)) F(w, "unknown std code " + c); });
    } else checkStd(w, it.std);
    const why = norm(it.why || ""), clue = norm(it.clue || "");
    /* choices are shuffled on screen, so never refer to a choice by position */
    if (/\b(first|second|third|fourth|last|top|bottom) (choice|option)\b|\b(choice|option) [A-D]\b/i.test(why + " " + clue))
      F(w, "why/clue refers to a choice by position, but choices are shuffled");
    const mustName = t => { if (t && why.toLowerCase().indexOf(norm(t).toLowerCase().replace(/[.!?]$/, "")) < 0) W(w, "why does not quote the answer “" + t + "”"); };
    const noLeak = t => { const x = norm(t).toLowerCase().replace(/[.!?]$/, ""); if (x.split(" ").length >= 2 && clue.toLowerCase().indexOf(x) >= 0) F(w, "clue contains the answer “" + t + "”"); };
    /* Clue giveaway: a distinctive word in the clue that appears in the key
       but in no wrong choice (and not in the prompt or stem) singles out the key. */
    const words = t => new Set((norm(t).toLowerCase().match(/[a-z']{4,}/g) || []).filter(x => STOP.indexOf(x) < 0));
    const giveaway = (ch, label) => {
      const key = (ch || []).filter(c => c.correct), wrong = (ch || []).filter(c => !c.correct);
      if (!key.length || !wrong.length) return;
      const cw = words(clue), ctx = words((it.prompt || "") + " " + [].concat(it.stem || []).join(" "));
      const wrongW = new Set([].concat(...wrong.map(c => [...words(c.text)])));
      const hit = [...new Set([].concat(...key.map(c => [...words(c.text)])))].filter(x => cw.has(x) && !wrongW.has(x) && !ctx.has(x));
      if (hit.length) W(w, (label || "choices") + ": clue shares “" + hit.join(", ") + "” only with the key");
    };
    if (it.type === "mc" || it.type === "ms") giveaway(it.choices);
    if (it.type === "ebsr" && it.partA) giveaway(it.partA.choices, "Part A");
    if (it.type === "dropdown") (it.slots || []).forEach((sl, k) => giveaway(sl.options.map((o, i) => ({ text: o, correct: i === sl.answer })), "slot " + k));
    switch (it.type) {
      case "mc": if ((it.choices || []).length !== 4) F(w, "mc needs exactly 4 choices (SPEC §5)"); oneCorrect(w, it.choices); { const a = (it.choices || []).find(c => c.correct); if (a) { mustName(a.text); noLeak(a.text); } } break;
      case "ms": {
        const n = (it.choices || []).filter(c => c.correct).length;
        if ((it.choices || []).length < 4) F(w, "ms needs 4+ choices");
        if (!it.pick || n !== it.pick) F(w, "ms: " + n + " correct but pick=" + it.pick);
        (it.choices || []).filter(c => c.correct).forEach(c => noLeak(c.text));
        break;
      }
      case "ebsr": {
        if (!it.partA || !it.partB) { F(w, "ebsr needs partA and partB"); break; }
        oneCorrect(w, it.partA.choices, "Part A");
        const nb = (it.partB.choices || []).filter(c => c.correct).length;
        if (nb !== (it.partB.pick || 1)) F(w, "Part B: " + nb + " correct but pick=" + (it.partB.pick || 1));
        if (it.points !== 2) W(w, "ebsr is usually 2 points");
        const text = norm((set.passages || []).map(passageText).join(" ")).replace(/["']/g, "");
        (it.partB.choices || []).forEach(c => {
          const q = /^["“](.+)["”]$/.exec(norm(c.text).trim());
          if (q && text.indexOf(q[1].replace(/["']/g, "").replace(/[.!?,]$/, "")) < 0) F(w, "Part B quote not in passage: " + c.text);
        });
        break;
      }
      case "dropdown": {
        const n = ((it.text || "").match(/\{\d+\}/g) || []).length;
        if (!it.slots || n !== it.slots.length) F(w, "dropdown: " + n + " blanks but " + (it.slots || []).length + " slots");
        (it.slots || []).forEach((s, k) => {
          if (!Array.isArray(s.options) || s.options.length < 3) F(w, "slot " + k + " needs 3+ options");
          if (!(s.answer >= 0 && s.answer < (s.options || []).length)) F(w, "slot " + k + " answer out of range");
          if (new Set(s.options).size !== (s.options || []).length) F(w, "slot " + k + " duplicate options");
        });
        if (it.slots && it.slots.length === 1) mustName(it.slots[0].options[it.slots[0].answer]);
        if (it.slots && it.slots.length > 2 && it.points === 2) W(w, "3+ slot dropdown scoring is all-or-nothing");
        break;
      }
      case "hottext": {
        if (it.options) {
          if (!Array.isArray(it.answer) || !it.answer.every(i => Number.isInteger(i) && i >= 0 && i < it.options.length)) F(w, "hottext answer indexes invalid");
        } else {
          (it.targets || []).forEach(r => { if (!sentenceAt(set, r)) F(w, "target does not resolve: " + r); });
          (it.answer || []).forEach(r => { if ((it.targets || []).indexOf(r) < 0) F(w, "answer not among targets: " + r); });
          if ((it.targets || []).length < 3) F(w, "hottext needs 3+ targets");
        }
        if ((it.pick || (it.answer || []).length) !== (it.answer || []).length) F(w, "pick does not match answer count");
        break;
      }
      case "order":
        if (!Array.isArray(it.steps) || it.steps.length < 3 || it.steps.length > 5) F(w, "order needs 3-5 steps");
        if (new Set(it.steps || []).size !== (it.steps || []).length) F(w, "duplicate steps");
        break;
      case "match":
        if (!Array.isArray(it.cols) || it.cols.length < 2) F(w, "match needs 2+ columns");
        if (!Array.isArray(it.rows) || it.rows.length < 3) F(w, "match needs 3+ rows");
        (it.rows || []).forEach((r, i) => { if (!(r.answer >= 0 && r.answer < (it.cols || []).length)) F(w, "row " + (i + 1) + " answer out of range"); });
        break;
      default: F(w, "unknown type " + it.type);
    }
}

/* ---------- skill lessons (SPEC §8) ---------- */
const seenLesson = new Set();
lessons.forEach(L => {
  const key = L.key || L.code;
  const S = "lesson " + key;
  if (!codes.has(L.code)) F(S, "unknown standard code");
  (L.codes || []).forEach(c => { if (!codes.has(c)) F(S, "unknown code in codes: " + c); });
  if (L.codes && L.codes.indexOf(L.code) < 0) F(S, "codes must include the main code");
  if (seenLesson.has(key)) F(S, "duplicate lesson key"); seenLesson.add(key);
  if (L.clues) {
    if (!Array.isArray(L.clues.words) || !L.clues.words.length) F(S, "clues.words missing");
    if (!L.clues.ask) F(S, "clues.ask missing");
  }
  if (L.coach) ["mixup", "ido", "wedo", "youdo"].forEach(k => { if (!L.coach[k]) F(S, "coach." + k + " missing"); });
  const rec = STD.find(x => x.code === L.code) || {};
  if (!L.title) F(S, "missing title");
  const T = L.teach || {};
  if (!T.big) F(S, "teach.big missing");
  if (!Array.isArray(T.points) || T.points.length < 3) F(S, "teach.points needs 3+");
  (T.examples || (T.example ? [T.example] : [])).forEach((ex, i) => { if (!ex.lines || !ex.note) F(S, "teach example " + (i + 1) + " needs lines and note"); checkFigures(S + " teach example " + (i + 1), ex.figure, null, FIG_W.teach); });
  if (!(T.examples || T.example)) F(S, "teach needs an example");
  if (!Array.isArray(L.learn) || L.learn.length < 2 || L.learn.length > 3) F(S, "learn needs 2-3 worked examples");
  (L.learn || []).forEach((ex, i) => {
    if (!ex.ask || !ex.answer) F(S, "learn " + (i + 1) + " needs ask and answer");
    checkFigures(S + " learn " + (i + 1), ex.figure);
    if (!Array.isArray(ex.steps) || ex.steps.length < 2 || ex.steps.length > 4) F(S, "learn " + (i + 1) + " needs 2-4 steps");
  });
  if (!L.parent) F(S, "parent note missing");
  if (L.write && (!L.write.prompt || !(L.write.checklist || []).length)) F(S, "write needs prompt and checklist");
  /* GUM chart rows are tested in Constructing Texts as editing/revising items, not as free writing */
  if (rec.tested === "writing" && !rec.gum && !L.write) W(S, "writing standard without a write activity");
  checkPassages(S, L.passages, "lesson");
  const set = { passages: L.passages || [] };
  const ids = new Set();
  /* hands-on skills: an activity can stand in for practice items, a grown-up check for the test */
  if (L.activity && ["fluency", "trace"].indexOf(L.activity.kind) < 0) F(S, "unknown activity kind " + L.activity.kind);
  if (L.activity && L.activity.kind === "fluency") (L.activity.passages || []).forEach((P, i) => { const n = wc(P.text); if (n < 180) F(S, "fluency passage " + (i + 1) + " is only " + n + " words (a fast reader needs 180+)"); });
  if (L.check && (!L.check.intro || !(L.check.items || []).length)) F(S, "check needs intro and items");
  [["practice", 4, 7], ["test", 4, 6]].forEach(([k, lo, hi]) => {
    const list = L[k] || [];
    if (!list.length && ((k === "practice" && L.activity) || (k === "test" && L.check))) return;
    if (list.length < lo || list.length > hi) F(S, k + " needs " + lo + "-" + hi + " questions (has " + list.length + ")");
    list.forEach(it => {
      if (ids.has(it.id)) F(S + " " + it.id, "duplicate item id"); ids.add(it.id);
      if (seenItem.has(it.id)) F(S + " " + it.id, "item id used elsewhere"); seenItem.add(it.id);
      if (!Array.isArray(it.passages)) F(S + " " + it.id, "needs passages: [...] (use [] for none)");
      else it.passages.forEach(pid => { if (!set.passages.some(p => p.id === pid)) F(S + " " + it.id, "unknown passage " + pid); });
      checkItem({ passages: (L.passages || []).filter(p => (it.passages || []).indexOf(p.id) >= 0) }, it, S + " " + k, L.code);
      if (it.std && !it.std.some(c => (L.codes || [L.code]).indexOf(c) >= 0)) F(S + " " + it.id, "std must include one of the lesson's codes");
    });
  });
  const pp = new Set([].concat(...(L.practice || []).map(i => i.passages || [])));
  (L.test || []).forEach(it => (it.passages || []).forEach(pid => { if (pp.has(pid)) W(S + " " + it.id, "test reuses practice passage " + pid); }));
  const max = (L.test || []).reduce((a, i) => a + (i.points || 0), 0);
  if (max < 5 && !L.check) W(S, "test is only " + max + " points");
});

tasks.forEach(t => {
  const S = t.id || "(task)";
  ["id", "title", "prompt", "reasons", "sources", "model", "lookFors", "planner"].forEach(k => { if (!t[k]) F(S, "missing " + k); });
  if (!Array.isArray(t.reasons) || t.reasons.length !== 2) F(S, "needs exactly 2 provided reasons");
  if (!Array.isArray(t.sources) || t.sources.length !== 2) F(S, "needs exactly 2 sources");
  checkPassages(S, t.sources, "task");
  (t.sources || []).forEach(p => { const n = wc(passageText(p)); if (n < 140 || n > 320) W(S, p.id + " source is " + n + " words"); });
  checkStd(S, t.std);
  (t.evidence || []).forEach(e => { if (!sentenceAt({ passages: t.sources }, e.ref)) F(S, "evidence ref does not resolve: " + e.ref); });
  [0, 1].forEach(r => { if ((t.evidence || []).filter(e => e.reason === r).length < 2) F(S, "reason " + (r + 1) + " needs 2+ evidence refs"); });
  const m = t.model ? wc((t.model.paragraphs || []).join(" ")) : 0;
  if (m < 150 || m > 300) W(S, "model essay is " + m + " words");
  ["purpose", "evidence", "conventions"].forEach(k => { if (!t.lookFors || !(t.lookFors[k] || []).length) F(S, "lookFors." + k + " missing"); });
});

/* ---------- consistency checks (PP-003 Phase H) ----------
   Catalog keys, lesson codes, the blueprint's assessed expectations and
   legacy fields. The table below is transcribed from the GaDOE Grade 3 ELA
   Assessment Blueprint (August 2025), page 1. The blueprint prints the last
   Constructing vocabulary code as "5.L.V.3 (e)"; it is read as 3.L.V.3 (e). */
(function () {
  const BP_IT = { "3.T.C.1": "ab", "3.T.C.2": "ac", "3.T.SS.1": "a", "3.T.SS.2": "a", "3.T.T.1": "abcd", "3.T.T.2": "abc",
    "3.T.T.3": "a", "3.T.T.4": "a", "3.T.RA.1": "ab", "3.T.RA.2": "ab", "3.L.GC.2": "a", "3.L.V.1": "a", "3.L.V.2": "ab", "3.L.V.3": "abcd" };
  const BP_CT = { "3.T.C.1": "c", "3.T.SS.1": "bcd", "3.T.SS.2": "b", "3.T.T.1": "e", "3.T.T.2": "d", "3.T.T.3": "c",
    "3.T.T.4": "b", "3.T.RA.1": "c", "3.L.GC.2": "bcd", "3.L.V.1": "b", "3.L.V.2": "c", "3.L.V.3": "e" };
  /* 3.L.GC.1* GUM appears only under Constructing Texts: Master and Reinforce rows are assessed there. */
  const C = "consistency";
  const want = {};
  [[BP_IT, "reading"], [BP_CT, "writing"]].forEach(([tbl, part]) => Object.keys(tbl).forEach(base => tbl[base].split("").forEach(l => {
    const code = base + "." + l; want[code] = want[code] && want[code] !== part ? "both" : part;
  })));
  const ONTEST = ["reading", "writing", "both"];
  Object.keys(want).forEach(code => {
    const s = STD.find(x => x.code === code);
    if (!s) F(C, "blueprint expectation " + code + " is missing from standards.js");
    else if (s.tested !== want[code]) F(C, code + " is tested \"" + s.tested + "\" but the blueprint says \"" + want[code] + "\"");
  });
  STD.forEach(s => {
    if (Object.prototype.hasOwnProperty.call(s, "status")) F(C, s.code + ": legacy \"status\" field is still in standards.js");
    if (s.gum) {
      const exp = "MR".indexOf(s.level) >= 0 ? "writing" : "no";
      if (s.tested !== exp) F(C, s.code + ": GUM " + s.level + " row should be tested \"" + exp + "\" (blueprint: 3.L.GC.1 under Constructing Texts, Master/Reinforce only)");
    } else if (/^3\.[TL]\.[A-Z]+\.\d\.[a-z]$/.test(s.code)) {
      if (!want[s.code] && s.tested !== "no") F(C, s.code + " is tested \"" + s.tested + "\" but the blueprint does not list it");
    } else if (s.strand === "Foundations" && s.tested !== "classroom") F(C, s.code + ": Foundations should be \"classroom\"");
    else if (s.strand === "Practices" && s.tested !== "embedded") F(C, s.code + ": Practices should be \"embedded\"");
  });
  /* every lesson code exists in standards.js (also checked per lesson above; repeated here as a whole-site count) */
  const badCodes = [].concat(...lessons.map(L => [L.code].concat(L.codes || []))).filter(c => !codes.has(c));
  if (badCodes.length) F(C, badCodes.length + " lesson code(s) not in standards.js: " + badCodes.slice(0, 5).join(", "));
  /* every catalog key resolves to a lesson or task */
  const catFile = path.join(ROOT, "js/data/catalog.js");
  if (fs.existsSync(catFile)) {
    run("js/data/catalog.js");
    const CAT = ctx.window.PP_CATALOG || [];
    const lessonKeys = new Set(lessons.map(L => L.key || L.code));
    const taskIds = new Set(tasks.map(t => t.id));
    const seen = new Set();
    CAT.forEach(c => (c.groups || []).forEach(g => (g.skills || []).forEach(k => {
      if (seen.has(k)) F(C, "catalog key listed twice: " + k); seen.add(k);
      if (/^task:/.test(k)) { if (!taskIds.has(k.slice(5))) F(C, "catalog key " + k + " has no task"); }
      else if (!lessonKeys.has(k)) F(C, "catalog key " + k + " has no lesson");
    })));
    lessonKeys.forEach(k => { if (!seen.has(k)) W(C, "lesson " + k + " is not in the catalog, so it cannot be opened from the home page"); });
  } else F(C, "js/data/catalog.js not found");
  /* the meta description claims a lesson with practice and a skill check for every tested standard */
  STD.filter(s => ONTEST.indexOf(s.tested) >= 0).forEach(s => {
    const L = lessons.find(x => (x.codes || [x.code]).indexOf(s.code) >= 0 || x.code === s.code);
    if (!L) F(C, s.code + " is on the test but has no lesson");
    else if (!(L.practice || []).length || !(L.test || []).length) F(C, s.code + " is on the test but its lesson " + (L.key || L.code) + " lacks practice or test items");
  });
})();

const items = sets.reduce((a, s) => a + s.items.length, 0);
const litems = lessons.reduce((a, l) => a + (l.practice || []).length + (l.test || []).length, 0);
console.log("Checked " + sets.length + " sets (" + items + " items), " + tasks.length + " tasks and " + lessons.length + " lessons (" + litems + " items)" + (all ? " [all files]" : " [manifest]"));
warns.forEach(x => console.log("  warn  " + x));
fails.forEach(x => console.log("  FAIL  " + x));
console.log(fails.length ? fails.length + " FAILURES" : "PASS (0 failures, " + warns.length + " warnings)");
process.exit(fails.length ? 1 : 0);

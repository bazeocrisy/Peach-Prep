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
const wc = t => (String(t).match(/\S+/g) || []).length;
const norm = t => String(t).replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim();

function passageText(p) { return (p.lines || p.paragraphs || []).map(b => b.join(" ")).join(" "); }
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
      (b || []).forEach(s => { if (typeof s !== "string" || !s.trim()) F(where, p.id + " empty sentence in block " + (i + 1)); });
    });
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
    if ([1, 2, 3, 4].indexOf(it.dok) < 0) F(w, "dok must be 1-4");
    if (lessonCode) {
      /* a lesson question practices the lesson's own standard, tested or not */
      const std = it.std || [lessonCode];
      if (std.indexOf(lessonCode) < 0) F(w, "std does not include the lesson code " + lessonCode);
      std.filter(c => c !== lessonCode).forEach(c => { if (!codes.has(c)) F(w, "unknown std code " + c); });
    } else checkStd(w, it.std);
    const why = norm(it.why || ""), clue = norm(it.clue || "");
    /* choices are shuffled on screen, so never refer to a choice by position */
    if (/\b(first|second|third|fourth|last|top|bottom) (choice|option)\b|\b(choice|option) [A-D]\b/i.test(why + " " + clue))
      F(w, "why/clue refers to a choice by position, but choices are shuffled");
    const mustName = t => { if (t && why.toLowerCase().indexOf(norm(t).toLowerCase().replace(/[.!?]$/, "")) < 0) W(w, "why does not quote the answer “" + t + "”"); };
    const noLeak = t => { const x = norm(t).toLowerCase().replace(/[.!?]$/, ""); if (x.split(" ").length >= 2 && clue.toLowerCase().indexOf(x) >= 0) F(w, "clue contains the answer “" + t + "”"); };
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
  const S = "lesson " + (L.code || "(no code)");
  if (!codes.has(L.code)) F(S, "unknown standard code");
  if (seenLesson.has(L.code)) F(S, "duplicate lesson"); seenLesson.add(L.code);
  const rec = STD.find(x => x.code === L.code) || {};
  if (!L.title) F(S, "missing title");
  const T = L.teach || {};
  if (!T.big) F(S, "teach.big missing");
  if (!Array.isArray(T.points) || T.points.length < 3) F(S, "teach.points needs 3+");
  (T.examples || (T.example ? [T.example] : [])).forEach((ex, i) => { if (!ex.lines || !ex.note) F(S, "teach example " + (i + 1) + " needs lines and note"); });
  if (!(T.examples || T.example)) F(S, "teach needs an example");
  if (!Array.isArray(L.learn) || L.learn.length < 2 || L.learn.length > 3) F(S, "learn needs 2-3 worked examples");
  (L.learn || []).forEach((ex, i) => {
    if (!ex.ask || !ex.answer) F(S, "learn " + (i + 1) + " needs ask and answer");
    if (!Array.isArray(ex.steps) || ex.steps.length < 2 || ex.steps.length > 4) F(S, "learn " + (i + 1) + " needs 2-4 steps");
  });
  if (!L.parent) F(S, "parent note missing");
  if (L.write && (!L.write.prompt || !(L.write.checklist || []).length)) F(S, "write needs prompt and checklist");
  if (rec.tested === "writing" && !L.write) W(S, "writing standard without a write activity");
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

const items = sets.reduce((a, s) => a + s.items.length, 0);
const litems = lessons.reduce((a, l) => a + (l.practice || []).length + (l.test || []).length, 0);
console.log("Checked " + sets.length + " sets (" + items + " items), " + tasks.length + " tasks and " + lessons.length + " lessons (" + litems + " items)" + (all ? " [all files]" : " [manifest]"));
warns.forEach(x => console.log("  warn  " + x));
fails.forEach(x => console.log("  FAIL  " + x));
console.log(fails.length ? fails.length + " FAILURES" : "PASS (0 failures, " + warns.length + " warnings)");
process.exit(fails.length ? 1 : 0);

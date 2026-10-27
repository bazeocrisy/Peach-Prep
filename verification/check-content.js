#!/usr/bin/env node
/* Peach Prep content checker -- the release gate for every set and task
   listed in js/data/manifest.js (and, with --all, every file on disk).
   Usage: node verification/check-content.js [--all] [--release]
          node verification/check-content.js --all --record-versions
          node verification/check-content.js --all --record-review <key[,key]> [--part core|similar|test|all]
                --by "<reviewer,reviewer>" --record <review file under docs/> [--authors "<name,name>"] [--date YYYY-MM-DD]
   --release (expansion 2026-10-22, 01-architecture 2.6 rules 1, 11, 12): the migration warning, a missing or stale
   independent-review record and a material change to a check without a new testRev become FAILURES. Without it they
   stay warnings, so the day-to-day gate is unchanged. --record-versions writes verification/assessment-versions.json;
   --record-review writes docs/expansion-2026-10-22/review-ledger.json (a reviewer attests the content as it is now).
   Exit code 1 on any failure. Rules: docs/SPEC.md §5, §5b, §5c, §6. */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.resolve(__dirname, "..");
const all = process.argv.includes("--all");
const RELEASE = process.argv.includes("--release");
const ARGV = process.argv.slice(2);
const argOf = n => { const i = ARGV.indexOf(n); return i >= 0 && ARGV[i + 1] && !/^--/.test(ARGV[i + 1]) ? ARGV[i + 1] : null; };

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
    if (it.type === "cr") { if (it.points !== undefined && it.points !== 0) F(w, "cr is never scored: leave points out"); }
    else if ([1, 2].indexOf(it.points) < 0) F(w, "points must be 1 or 2");
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
      case "cr":
        /* expansion 2026-10-22 (01-architecture.md §2.2.2): a constructed response, only in core and similar */
        if (!it.allowCr) F(w, "cr is allowed only in core and similar (never in practice, test or testB)");
        if (typeof it.sample !== "string" || !it.sample.trim()) F(w, "cr needs a sample answer");
        if (!Array.isArray(it.criteria) || it.criteria.length < 2 || it.criteria.length > 5) F(w, "cr needs 2-5 criteria");
        break;
      default: F(w, "unknown type " + it.type);
    }
}

/* ---------- expansion 2026-10-22: Practice on my own (core, similar, hints, how, cr, addons) ----------
   01-architecture.md §2.6 with the lead decisions: Together on a core lesson = practice minus the {ref}
   items (rule 10b); a core item with no similar item is a WARNING; core.rev versions the set.
   Legacy lessons without core are unaffected, except the migration warning (rule 1). */
const coreStats = { lessons: 0, core: 0, similar: 0, noCore: [] };
const EXC_FILE = path.join(ROOT, "docs/expansion-2026-10-22/practice-exceptions.json");
const EXC = (() => { try { return JSON.parse(fs.readFileSync(EXC_FILE, "utf8")); } catch (e) { return null; } })();
const excKeys = new Set(EXC && Array.isArray(EXC.exceptions) ? EXC.exceptions.map(x => x.lesson) : []);
const stemKey = it => norm([].concat(it.stem || []).concat(it.text ? [it.text] : []).join(" ")).toLowerCase();
const wholeKey = it => norm(it.prompt || "").toLowerCase() + "|" + stemKey(it) + "|" + JSON.stringify([it.choices, it.rows, it.slots, it.targets, it.options, it.steps, it.partA, it.partB, it.passages]);
function keyTexts(it, set) {
  /* the text of the answer, for "a hint must not contain the answer" */
  if (it.type === "mc" || it.type === "ms") return (it.choices || []).filter(c => c.correct).map(c => c.text);
  if (it.type === "ebsr") return [].concat((it.partA.choices || []).filter(c => c.correct).map(c => c.text), (it.partB.choices || []).filter(c => c.correct).map(c => c.text));
  if (it.type === "hottext") return (it.options ? (it.answer || []).map(i => it.options[i]) : (it.answer || []).map(r => sentenceAt(set, r))).filter(Boolean);
  if (it.type === "dropdown") return (it.slots || []).map(s => s.options[s.answer]).filter(x => String(x).split(" ").length >= 3);
  if (it.type === "cr") return [it.sample];
  return [];
}
function checkHelp(it, w, set, need) {
  const H = it.hints;
  if (!Array.isArray(H)) { if (need) F(w, "needs hints: [three graduated hints]"); }
  else {
    if (H.length !== 3) F(w, "hints needs exactly 3 (has " + H.length + ")");
    if (H.some(h => typeof h !== "string" || !h.trim())) F(w, "a hint is empty");
    if (new Set(H.map(h => norm(h).toLowerCase())).size !== H.length) F(w, "hints repeat each other");
    H.forEach((h, n) => keyTexts(it, set).forEach(t => {
      const x = norm(t).toLowerCase().replace(/[.!?"]$/, "").replace(/^"/, "");
      if (x.split(" ").length >= 2 && norm(h).toLowerCase().indexOf(x) >= 0) F(w, "hint " + (n + 1) + " contains the answer “" + t + "”");
    }));
    if (/\b(first|second|third|fourth|last|top|bottom) (choice|option)\b|\b(choice|option) [A-D]\b/i.test(H.join(" "))) F(w, "a hint refers to a choice by position, but choices are shuffled");
    if (H.length === 3 && norm(H[0]).length > norm(H[2]).length * 1.6) W(w, "hint 1 is much longer than hint 3; the hints may not get more specific");
    /* giveaway on hints 1 and 2: a word shared only with the key */
    const words = t => new Set((norm(t).toLowerCase().match(/[a-z']{4,}/g) || []).filter(x => STOP.indexOf(x) < 0));
    const ch = it.type === "mc" || it.type === "ms" ? it.choices : it.type === "ebsr" ? it.partA.choices : null;
    if (ch) {
      const ctxW = words((it.prompt || "") + " " + [].concat(it.stem || []).join(" "));
      const wrongW = new Set([].concat(...ch.filter(c => !c.correct).map(c => [...words(c.text)])));
      const keyW = new Set([].concat(...ch.filter(c => c.correct).map(c => [...words(c.text)])));
      H.slice(0, 2).forEach((h, n) => { const hit = [...words(h)].filter(x => keyW.has(x) && !wrongW.has(x) && !ctxW.has(x)); if (hit.length) W(w, "hint " + (n + 1) + " shares “" + hit.join(", ") + "” only with the key"); });
    }
  }
  const how = it.how;
  if (!Array.isArray(how)) { if (need) F(w, "needs how: [2-5 Show me how steps]"); return; }
  if (how.length < 2 || how.length > 5) F(w, "how needs 2-5 steps (has " + how.length + ")");
  if (how.some(h => typeof h !== "string" || !h.trim())) F(w, "a how step is empty");
  if (/\b(first|second|third|fourth|last|top|bottom) (choice|option)\b|\b(choice|option) [A-D]\b/i.test(how.join(" "))) F(w, "how refers to a choice by position, but choices are shuffled");
  if ((it.type === "mc" || it.type === "ms") && need) {
    const all = norm(how.join(" ") + " " + (it.why || "")).toLowerCase();
    (it.choices || []).filter(c => c.correct).forEach(c => { if (all.indexOf(norm(c.text).toLowerCase().replace(/[.!?]$/, "")) < 0) F(w, "neither how nor why names the answer “" + c.text + "”"); });
  }
}
function checkCore(L, S, lessonIds) {
  const key = L.key || L.code;
  const P = L.practice || [], byP = {}; P.forEach(it => { byP[it.id] = it; });
  const AD = L.addons || {};
  const merged = it => { const a = AD[it.id]; return a ? Object.assign({}, it, { hints: it.hints || a.hints, how: it.how || a.how, misconception: it.misconception || a.misconception || a.mix }) : it; };
  const lessonSet = it => ({ passages: (L.passages || []).filter(p => (it.passages || []).indexOf(p.id) >= 0) });
  /* addons: every key names an item of this lesson; its shape is checked on the item it joins */
  const lessonItemIds = new Set([].concat(P, L.test || [], L.testB || [], L.similar || []).map(i => i.id));
  if (L.core && Array.isArray(L.core.sets)) L.core.sets.forEach(s => (s.items || []).forEach(x => { if (x && x.id) lessonItemIds.add(x.id); }));
  Object.keys(AD).forEach(id => {
    if (!lessonItemIds.has(id)) F(S + " addons", id + " is not an item in this lesson");
    const a = AD[id];
    if (!a || typeof a !== "object") F(S + " addons " + id, "must be an object { hints, how, mix? }");
    else Object.keys(a).forEach(f => { if (["hints", "how", "mix", "misconception"].indexOf(f) < 0) F(S + " addons " + id, "unknown field " + f); });
  });
  P.filter(it => AD[it.id]).forEach(it => checkHelp(merged(it), S + " practice " + it.id + " (addons)", lessonSet(it), false));
  if (L.coreException) {
    if (!L.coreException.kind || !L.coreException.rationale) F(S, "coreException needs kind and rationale");
    if (EXC && !excKeys.has(key)) F(S, "has coreException but is not listed in practice-exceptions.json");
  }
  if (!L.core) {
    if ((L.test || []).length && !L.coreException && !excKeys.has(key)) coreStats.noCore.push(key);
    if (L.similar) F(S, "similar needs core");
    return;
  }
  coreStats.lessons++;
  const C = L.core, SC = S + " core";
  /* 2. structure: exactly three sets of five, and a rev */
  if (typeof C.rev !== "string" || !C.rev.trim()) F(SC, "core.rev must be a non-empty string");
  if (!Array.isArray(C.sets) || C.sets.length !== 3) { F(SC, "needs exactly 3 sets (has " + (Array.isArray(C.sets) ? C.sets.length : 0) + ")"); return; }
  C.sets.forEach((s, i) => { if (!Array.isArray(s.items) || s.items.length !== 5) F(SC + " set " + (i + 1), "needs exactly 5 items (has " + ((s.items || []).length) + ")"); });
  /* 10b (lead decision): refs name practice items; Together is practice minus the refs */
  const refs = [];
  const all = [];
  C.sets.forEach((s, si) => (s.items || []).forEach((x, n) => {
    if (x && x.ref) {
      if (!byP[x.ref]) { F(SC, "set " + (si + 1) + " ref " + x.ref + " is not in practice"); return; }
      if (refs.indexOf(x.ref) >= 0) F(SC, "ref " + x.ref + " is used twice");
      refs.push(x.ref);
      all.push({ it: merged(byP[x.ref]), set: si + 1, ref: true });
    } else if (x && x.id) all.push({ it: merged(x), set: si + 1, ref: false });
    else F(SC, "set " + (si + 1) + " item " + (n + 1) + " needs an id or a ref");
  }));
  coreStats.core += all.length;
  const together = P.filter(it => refs.indexOf(it.id) < 0);
  if (together.length < 2 || together.length > 5) F(S, "Practice Together on a core lesson needs 2-5 items after the refs are left out (has " + together.length + ")");
  coreStats.together = coreStats.together || {}; coreStats.together[key] = together.map(i => i.id);
  /* 3. unique ids, SK- prefix */
  const seenCore = new Set();
  all.forEach(({ it, ref }) => {
    const w = SC + " " + it.id;
    if (!/^SK-/.test(it.id || "")) F(w, "core item ids start with SK-");
    if (seenCore.has(it.id)) F(w, "duplicate id in core"); seenCore.add(it.id);
    if (!ref) {
      if (lessonIds.has(it.id) || byP[it.id]) F(w, "id is also used in practice or a check; use { ref } to reuse a practice item");
      if (seenItem.has(it.id)) F(w, "item id used elsewhere"); seenItem.add(it.id); lessonIds.add(it.id);
      if (!Array.isArray(it.passages)) F(w, "needs passages: [...] (use [] for none)");
      else it.passages.forEach(pid => { if (!(L.passages || []).some(p => p.id === pid)) F(w, "unknown passage " + pid); });
      checkItem(lessonSet(it), Object.assign({}, it, { allowCr: true }), SC, L.code);
      if (it.std && !it.std.some(c => (L.codes || [L.code]).indexOf(c) >= 0)) F(w, "std must include one of the lesson's codes");
    }
    /* 4-5. three hints and Show me how on every core item (from the item or its addon) */
    checkHelp(it, w, lessonSet(it), true);
  });
  /* 7. distinct practice */
  const stems = {}, wholes = {};
  const nameless = t => String(t).replace(/\b[A-Z][a-z]+(?:\s[A-Z][a-z]+)?\b/g, "N");
  const trivial = {};
  all.forEach(({ it }) => {
    const st = stemKey(it), wh = wholeKey(it), tv = nameless(norm(it.prompt || "") + "|" + st + "|" + JSON.stringify(it.choices || it.rows || it.slots || it.steps || it.partA || []));
    if (st && stems[st]) F(SC + " " + it.id, "shares its stem with " + stems[st]); else if (st) stems[st] = it.id;
    if (wholes[wh]) F(SC + " " + it.id, "is the same question as " + wholes[wh]); else wholes[wh] = it.id;
    if (trivial[tv] && trivial[tv] !== it.id) W(SC + " " + it.id, "looks like a name-swapped copy of " + trivial[tv]); else trivial[tv] = it.id;
  });
  /* 8. separation: core passages never in a check; no shared id or stem with a check */
  const checks = [].concat(L.test || [], L.testB || []);
  const checkP = new Set([].concat(...checks.map(i => i.passages || [])));
  const checkStems = new Set(checks.map(stemKey).filter(Boolean)), checkIds = new Set(checks.map(i => i.id));
  all.forEach(({ it }) => {
    (it.passages || []).forEach(pid => { if (checkP.has(pid)) F(SC + " " + it.id, "uses passage " + pid + ", which a skill check also uses"); });
    if (checkIds.has(it.id)) F(SC + " " + it.id, "shares an id with a check item");
    const st = stemKey(it); if (st && checkStems.has(st)) F(SC + " " + it.id, "shares its stem with a check item");
  });
  /* 9. the similar bank */
  const SIM = L.similar || [], SS = S + " similar";
  coreStats.similar += SIM.length;
  if (SIM.length && (SIM.length < 3 || SIM.length > 15)) F(SS, "needs 3-15 items (has " + SIM.length + ")");
  if (!SIM.length) W(SS, "no similar items, so Try a similar question never appears in this lesson");
  const coreIds = new Set(all.map(x => x.it.id)), covered = new Set();
  SIM.forEach(raw => {
    const it = merged(raw), w = SS + " " + it.id;
    if (!/^SK-/.test(it.id || "")) F(w, "similar item ids start with SK-");
    if (coreIds.has(it.id) || lessonIds.has(it.id)) F(w, "id is also used by another item in this lesson");
    if (seenItem.has(it.id)) F(w, "item id used elsewhere"); seenItem.add(it.id); lessonIds.add(it.id);
    if (!Array.isArray(it.like) || !it.like.length) F(w, "needs like: [core item ids it practises]");
    (it.like || []).forEach(id => { if (!coreIds.has(id)) F(w, "like names " + id + ", which is not a core item"); else covered.add(id); });
    if (!Array.isArray(it.passages)) F(w, "needs passages: [...] (use [] for none)");
    else it.passages.forEach(pid => {
      if (!(L.passages || []).some(p => p.id === pid)) F(w, "unknown passage " + pid);
      if (checkP.has(pid)) F(w, "uses passage " + pid + ", which a skill check also uses");
    });
    const st = stemKey(it); if (st && stems[st]) F(w, "shares its stem with core item " + stems[st]);
    if (wholes[wholeKey(it)]) F(w, "is the same question as core item " + wholes[wholeKey(it)]);
    checkItem(lessonSet(it), Object.assign({}, it, { allowCr: true }), SS, L.code);
    checkHelp(it, w, lessonSet(it), true);
  });
  /* lead decision: an uncovered core item is a warning, and the player hides the button on it */
  const unc = [...coreIds].filter(id => !covered.has(id));
  if (unc.length) W(SS, unc.length + " of " + coreIds.size + " core items have no similar item, so Try a similar question is hidden on them: " + unc.join(", "));
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
  /* PP-004: a practice-only speaking card (SPEC §8b); it is shown only beside a scored check */
  if (L.speak && (!L.speak.intro || !(L.speak.items || []).length)) F(S, "speak needs intro and items");
  if (L.speak && !(L.test || []).length) F(S, "speak is shown only on a lesson with a test; use check for a grown-up-checked skill");
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
  checkCore(L, S, ids);
  /* ---------- PP-004: a second, independent check form (testB, SPEC §8b) ----------
     4-6 items; the same codes as form A; the same total points (so the pass mark is the
     same); no item id shared with form A; no stem, and no whole question, identical to
     form A's. Form B items use the lesson's passages list and should name new passages. */
  if (L.testB !== undefined) {
    const A = L.test || [], B = L.testB, SB = S + " testB";
    if (!Array.isArray(B)) { F(SB, "must be a list of items"); return; }
    if (!A.length) F(SB, "form B needs a form A (test) in the same lesson");
    if (B.length < 4 || B.length > 6) F(SB, "needs 4-6 questions (has " + B.length + ")");
    const codeSet = list => [...new Set([].concat(...list.map(i => i.std || [L.code])))].sort().join(", ");
    if (codeSet(B) !== codeSet(A)) F(SB, "covers " + codeSet(B) + " but form A covers " + codeSet(A) + " (the codes must be the same)");
    const maxB = B.reduce((a, i) => a + (i.points || 0), 0);
    if (maxB !== max) F(SB, "is worth " + maxB + " points but form A is worth " + max + " (they must match, so the pass mark is the same)");
    /* the text the child reads inside the question (stem, or a dropdown sentence) */
    const stemOf = it => norm([].concat(it.stem || []).concat(it.text ? [it.text] : []).join(" ")).toLowerCase();
    const whole = it => norm(it.prompt || "").toLowerCase() + "|" + stemOf(it) + "|" + JSON.stringify([it.choices, it.rows, it.slots, it.targets, it.options, it.steps, it.partA, it.partB, it.passages]);
    const idsA = new Set(A.map(i => i.id)), stemsA = new Set(A.map(stemOf).filter(Boolean)), wholeA = new Set(A.map(whole));
    const pA = new Set([].concat(...A.map(i => i.passages || [])));
    B.forEach(it => {
      const w = SB + " " + it.id;
      if (idsA.has(it.id)) F(w, "item id is also used in form A");
      else if (ids.has(it.id)) F(w, "duplicate item id");
      else if (seenItem.has(it.id)) F(w, "item id used elsewhere");
      ids.add(it.id); seenItem.add(it.id);
      if (!Array.isArray(it.passages)) F(w, "needs passages: [...] (use [] for none)");
      else it.passages.forEach(pid => {
        if (!set.passages.some(p => p.id === pid)) F(w, "unknown passage " + pid);
        if (pp.has(pid)) W(w, "form B reuses practice passage " + pid);
        else if (pA.has(pid)) W(w, "form B reuses form A passage " + pid + " (a new passage makes the forms more independent)");
      });
      checkItem({ passages: (L.passages || []).filter(p => (it.passages || []).indexOf(p.id) >= 0) }, it, SB, L.code);
      if (it.std && !it.std.some(c => (L.codes || [L.code]).indexOf(c) >= 0)) F(w, "std must include one of the lesson's codes");
      const st = stemOf(it);
      if (st && stemsA.has(st)) F(w, "stem is identical to a form A stem");
      if (wholeA.has(whole(it))) F(w, "question is identical to a form A question");
    });
  }
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

/* ---------- PP-004: standards.js against the official grade 3 standards ----------
   Source: "Georgia's K-12 ELA Standards: Foundations, Language, Texts, & Practices, Grades 3-5"
   (52 pp., approved May 2023), transcribed with page numbers into
   docs/audits/work/official-gr3-standards.json and docs/audits/work/official-gr3-gum.json
   (see docs/audits/PP-004-OFFICIAL-STANDARDS-VERIFICATION.md and PP-004-GUM-CHART-VERIFICATION.md). */
(function () {
  const C = "official-standards";
  const WORK = path.join(ROOT, "docs/audits/work");
  const load = f => { try { return JSON.parse(fs.readFileSync(path.join(WORK, f), "utf8")); } catch (e) { F(C, f + " could not be read: " + e.message); return null; } };
  const OFF = load("official-gr3-standards.json"), GUM = load("official-gr3-gum.json");
  if (!OFF || !GUM) return;
  const byCode = {}; STD.forEach(s => { byCode[s.code] = s; });
  /* 1. every applicable grade 3 code is on the site, and no "This progression begins in grade N" code is */
  OFF.forEach(o => {
    const s = byCode[o.code];
    if (o.applicable && !s) F(C, o.code + " (p. " + o.page + ") is missing from standards.js");
    if (!o.applicable && s) F(C, o.code + " is listed on the site, but p. " + o.page + " says: " + o.wording);
    /* 2. the official wording stored on the site is verbatim */
    if (o.applicable && s) {
      if (s.official !== o.wording) F(C, o.code + ": official wording differs from p. " + o.page);
      if (s.page !== o.page) F(C, o.code + ": page is " + s.page + ", official page is " + o.page);
      if (typeof s.text !== "string" || !s.text.trim()) F(C, o.code + ": text is empty");
    }
  });
  const offApplicable = new Set(OFF.filter(o => o.applicable).map(o => o.code));
  STD.forEach(s => { if (!s.gum && !offApplicable.has(s.code)) F(C, s.code + " is in standards.js but is not an official grade 3 expectation"); });
  /* 3. GUM rows: the site has exactly the official grade 3 rows (M, R, I, C), each with the official level */
  const gumSite = STD.filter(s => s.gum);
  const g3 = GUM.filter(g => g.grade3 !== "NYI");
  if (g3.length !== gumSite.length) F(C, "site has " + gumSite.length + " GUM rows; the official chart has " + g3.length + " grade 3 rows");
  GUM.forEach(g => {
    if (g.grade3 === "NYI") { if (g.siteCode) F(C, "GUM row \"" + g.skill + "\" is NYI in grade 3 but is mapped to " + g.siteCode); return; }
    if (["M", "R", "I", "C"].indexOf(g.grade3) < 0) F(C, "GUM row \"" + g.skill + "\" has an unexpected grade 3 level " + g.grade3);
    const s = byCode[g.siteCode];
    if (!s || !s.gum) { F(C, "official grade 3 GUM row \"" + g.skill + "\" (p. " + g.page + ") has no site row"); return; }
    if (s.level !== g.grade3) F(C, s.code + ": level " + s.level + ", official grade 3 level is " + g.grade3 + " (p. " + g.page + ")");
    if (s.code.split(":")[1] !== g.grade3) F(C, s.code + ": the level in the code slug does not match the official level " + g.grade3);
    if (s.official !== g.skill) F(C, s.code + ": official GUM wording differs from p. " + g.page);
    if (s.page !== g.page) F(C, s.code + ": page is " + s.page + ", official page is " + g.page);
    /* 4. the blueprint assesses only Master and Reinforce rows (Constructing Texts) */
    const exp = g.grade3 === "M" || g.grade3 === "R" ? "writing" : "no";
    if (s.tested !== exp) F(C, s.code + ": GUM " + g.grade3 + " row must be tested \"" + exp + "\", not \"" + s.tested + "\"");
  });
  const mapped = new Set(g3.map(g => g.siteCode));
  gumSite.forEach(s => { if (!mapped.has(s.code)) F(C, s.code + " is not an official grade 3 GUM row"); });
  const n = {}; g3.forEach(g => { n[g.grade3] = (n[g.grade3] || 0) + 1; });
  if (n.M !== 8 || n.R !== 18 || n.I !== 11 || n.C !== 4) F(C, "official grade 3 GUM counts changed: " + JSON.stringify(n) + " (expected M 8, R 18, I 11, C 4)");
})();

/* ---------- expansion 2026-10-22: standard groups (js/data/std-groups.js) against the official parent wording ---------- */
(function () {
  const C = "std-groups";
  const f = path.join(ROOT, "js/data/std-groups.js");
  if (!fs.existsSync(f)) { F(C, "js/data/std-groups.js not found"); return; }
  run("js/data/std-groups.js");
  const G = ctx.window.PP_STD_GROUPS;
  let OFFP = null;
  try { OFFP = JSON.parse(fs.readFileSync(path.join(ROOT, "docs/audits/work/official-gr3-parents.json"), "utf8")).parents; } catch (e) { F(C, "official-gr3-parents.json could not be read: " + e.message); return; }
  if (!Array.isArray(G)) { F(C, "PP_STD_GROUPS is not a list"); return; }
  const byOff = {}; OFFP.forEach(o => { byOff[o.code] = o; });
  const parentOf = s => s.gum ? "3.L.GC.1" : s.code.replace(/\.[a-z]$/, "");
  const want = {}; STD.forEach(s => { (want[parentOf(s)] = want[parentOf(s)] || []).push(s.code); });
  const seen = new Set();
  const lessonKeys = new Set(lessons.map(L => L.key || L.code));
  G.forEach(g => {
    const w = C + " " + (g.code || "?");
    ["code", "band", "name", "official", "page", "order"].forEach(k => { if (g[k] === undefined || g[k] === "") F(w, "missing " + k); });
    if (seen.has(g.code)) F(w, "listed twice"); seen.add(g.code);
    const o = byOff[g.code];
    if (!o) { F(w, "is not an official parent standard in official-gr3-parents.json"); return; }
    if (g.official !== o.wording) F(w, "official wording differs from p. " + o.page);
    if (g.page !== o.page) F(w, "page is " + g.page + ", official page is " + o.page);
    if (g.band !== o.band) F(w, "band is " + g.band + ", official is " + o.band);
    const leaves = want[g.code] || [];
    const ord = Array.isArray(g.order) ? g.order : [];
    if (new Set(ord).size !== ord.length) F(w, "order lists a code twice");
    const miss = leaves.filter(c => ord.indexOf(c) < 0), extra = ord.filter(c => leaves.indexOf(c) < 0);
    if (miss.length) F(w, "order is missing " + miss.join(", "));
    if (extra.length) F(w, "order lists codes that are not under it: " + extra.join(", "));
    Object.keys(g.lessons || {}).forEach(code => {
      if (ord.indexOf(code) < 0) F(w, "lessons names " + code + ", which is not in order");
      (g.lessons[code] || []).forEach(k => {
        const L = lessons.find(x => (x.key || x.code) === k);
        if (!lessonKeys.has(k)) F(w, "lessons for " + code + " names " + k + ", which is not a lesson");
        else if (L.code !== code) F(w, "lesson " + k + " has main code " + L.code + ", not " + code);
      });
      const mains = lessons.filter(L => L.code === code).map(L => L.key || L.code);
      const missL = mains.filter(k => (g.lessons[code] || []).indexOf(k) < 0);
      if (missL.length) F(w, "lessons for " + code + " leaves out " + missL.join(", "));
    });
  });
  Object.keys(want).forEach(p => { if (!seen.has(p)) F(C, "parent " + p + " has leaf codes but no group"); });
})();
/* expansion 2026-10-22 (ENG-09): js/data/accepted.js must list exactly the ACCEPTED lessons in batches/STATUS.md,
   because reviews draw questions only from those lessons */
(function () {
  const C = "accepted";
  const f = path.join(ROOT, "js/data/accepted.js"), st = path.join(ROOT, "docs/expansion-2026-10-22/batches/STATUS.md");
  if (!fs.existsSync(f)) { F(C, "js/data/accepted.js not found"); return; }
  run("js/data/accepted.js");
  const A = ctx.window.PP_ACCEPTED;
  if (!Array.isArray(A)) { F(C, "PP_ACCEPTED is not a list"); return; }
  const keys = new Set(lessons.map(L => L.key || L.code));
  A.forEach(k => { if (!keys.has(k)) F(C, k + " is not a lesson"); else if (!lessons.find(L => (L.key || L.code) === k).core) F(C, k + " is accepted but has no core"); });
  if (!fs.existsSync(st)) { W(C, "batches/STATUS.md not found, so the list cannot be compared"); return; }
  const want = fs.readFileSync(st, "utf8").split("\n").filter(l => /^\|/.test(l)).map(l => l.split("|").map(x => x.trim())).filter(r => r[3] === "ACCEPTED").map(r => r[2]);
  const a = new Set(A), w = new Set(want);
  want.forEach(k => { if (!a.has(k)) F(C, k + " is ACCEPTED in STATUS.md but missing from js/data/accepted.js"); });
  A.forEach(k => { if (!w.has(k)) F(C, k + " is in js/data/accepted.js but not ACCEPTED in STATUS.md"); });
})();
/* expansion 2026-10-22: practice-exceptions.json (performance lessons with a documented other sequence) */
if (EXC) (EXC.exceptions || []).forEach(x => {
  const L = lessons.find(l => (l.key || l.code) === x.lesson);
  if (!L) F("practice-exceptions", x.lesson + " is not a lesson");
  else if (!x.kind || !x.rationale) F("practice-exceptions", x.lesson + " needs kind and rationale");
  else if (L.core) F("practice-exceptions", x.lesson + " has core, so it is not an exception");
});
else W("practice-exceptions", "docs/expansion-2026-10-22/practice-exceptions.json not found");
if (coreStats.noCore.length) {
  if (RELEASE) F("core (release)", coreStats.noCore.length + " lessons with a skill check have neither core nor a documented exception: " + coreStats.noCore.slice(0, 15).join(", ") + (coreStats.noCore.length > 15 ? ", and " + (coreStats.noCore.length - 15) + " more" : ""));
  else W("core (migration)", coreStats.noCore.length + " lessons with a skill check have no core yet and are not listed as exceptions (a failure only after migration)");
}

/* ---------- expansion 2026-10-22 (01-architecture 2.4 item 5, 2.6 rules 11 and 12): check versions and the review ledger ----------
   assessment-versions.json: per check form (<lesson>:A, <lesson>:B) a rev, a full content hash and a material hash
   (ids, types, points and answer keys, not wording). A material change with the same testRev is the problem the rev exists for.
   review-ledger.json: who independently reviewed which content, with the hash of what they reviewed.
   Both are warnings by default and failures with --release. */
const crypto = require("crypto");
const canon = v => JSON.stringify(v, (k, x) => x && typeof x === "object" && !Array.isArray(x) ? Object.keys(x).sort().reduce((o, key) => (o[key] = x[key], o), {}) : x);
const sha = v => crypto.createHash("sha256").update(canon(v)).digest("hex");
const KEYFIELD = /^(correct|answer|answers|pick|points|type|id)$/;
function keyFacts(v, pth, out) {
  if (Array.isArray(v)) { out.push([pth + ".len", v.length]); v.forEach((x, i) => { if (x && typeof x === "object") keyFacts(x, pth + "[" + i + "]", out); else if (KEYFIELD.test(pth.split(".").pop())) out.push([pth + "[" + i + "]", x]); }); }
  else if (v && typeof v === "object") Object.keys(v).sort().forEach(k => {
    const x = v[k];
    if (x && typeof x === "object") keyFacts(x, pth + "." + k, out);
    else if (KEYFIELD.test(k)) out.push([pth + "." + k, x]);
  });
  return out;
}
const materialOf = items => sha((items || []).map(it => keyFacts(it, "", [])));
/* The question text of each item (prompt, stem, passage text of a text-box item), as a short hash, so a record can name the items
   whose question was reworded. Clues, hints and explanations are left out on purpose. */
const questionOf = items => { const o = {}; (items || []).forEach(it => { o[it.id] = sha([it.prompt, it.stem, it.text, it.choices && it.choices.map(c => c && c.text)]).slice(0, 12); }); return o; };
const lessonKeyOf = L => L.key || L.code;
function coreResolved(L) {
  const prac = {}; (L.practice || []).forEach(it => { prac[it.id] = it; });
  const ad = L.addons || {};
  return { rev: L.core.rev, sets: L.core.sets.map(st => ({ title: st.title, items: (st.items || []).map(it => it && it.ref ? Object.assign({}, prac[it.ref] || { ref: it.ref }, ad[it.ref] || {}) : it) })) };
}
const VERS_FILE = path.join(ROOT, "verification/assessment-versions.json");
const LEDGER_FILE = path.join(ROOT, "docs/expansion-2026-10-22/review-ledger.json");
const readJson = f => { try { return JSON.parse(fs.readFileSync(f, "utf8")); } catch (e) { return null; } };
const today = () => { const d = new Date(), p = n => String(n).padStart(2, "0"); return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()); };
const revOf = (L, f) => { const t = L.testRev; const v = t && typeof t === "object" ? t[f] : null; return typeof v === "string" && v.trim() ? v : "1"; };
function currentForms() {
  const out = {};
  lessons.forEach(L => {
    const k = lessonKeyOf(L);
    if ((L.test || []).length) out[k + ":A"] = { rev: revOf(L, "A"), hash: sha(L.test), mat: materialOf(L.test), q: questionOf(L.test) };
    if (Array.isArray(L.testB) && L.testB.length) out[k + ":B"] = { rev: revOf(L, "B"), hash: sha(L.testB), mat: materialOf(L.testB), q: questionOf(L.testB) };
  });
  return out;
}
function currentInputs() {
  const acc = (ctx.window.PP_ACCEPTED || []).slice().sort(), forms = currentForms();
  return { rev: "1", accepted: acc, groups: sha((ctx.window.PP_STD_GROUPS || []).map(g => [g.code, g.order, g.lessons])), forms: acc.map(k => [k, (forms[k + ":A"] || {}).mat || null, (forms[k + ":B"] || {}).mat || null]) };
}
function currentParts() {
  const out = {};
  lessons.forEach(L => {
    const k = lessonKeyOf(L), o = {};
    if (L.core) { o.core = { rev: L.core.rev, hash: sha(coreResolved(L)) }; o.similar = { rev: L.core.rev, hash: sha(L.similar || []) }; }
    if ((L.test || []).length) o["test:A"] = { rev: revOf(L, "A"), hash: sha(L.test) };
    if (Array.isArray(L.testB) && L.testB.length) o["test:B"] = { rev: revOf(L, "B"), hash: sha(L.testB) };
    if (Object.keys(o).length) out[k] = o;
  });
  return out;
}
const slot = (e, part) => { if (!e) return null; if (part.indexOf("test:") === 0) return e.test && e.test[part.slice(5)] || null; return e[part] || null; };
const partNames = parts => Object.keys(parts);

if (ARGV.includes("--record-versions")) {
  if (!all) { console.log("NOT RECORDED: run --record-versions together with --all, so every lesson file is read"); process.exit(1); }
  const cur = currentForms(), old = (readJson(VERS_FILE) || {}).forms || {}, forms = {}, refused = [];
  Object.keys(cur).sort().forEach(k => {
    const o = old[k], c = cur[k];
    if (o && o.mat !== c.mat && o.rev === c.rev) { refused.push(k + " (material change, testRev still \"" + c.rev + "\")"); forms[k] = o; }
    else forms[k] = { rev: c.rev, hash: c.hash, mat: c.mat, q: c.q };
  });
  if (refused.length) { console.log("NOT RECORDED: a check changed materially (ids, points or answer keys) without a new testRev. Raise testRev in the lesson first: " + refused.join("; ")); process.exit(1); }
  const inp = currentInputs(), oi = (readJson(VERS_FILE) || {}).inputs;
  const inputs = { rev: oi && oi.rev || "1", hash: sha({ accepted: inp.accepted, groups: inp.groups, forms: inp.forms }) };
  if (oi && oi.hash !== inputs.hash && oi.rev === inputs.rev) inputs.rev = String(Number(oi.rev) + 1);
  fs.writeFileSync(VERS_FILE, JSON.stringify({ v: 1, note: "Written by check-content.js --record-versions. rev is the lesson's testRev (default 1). hash covers every word of the form; mat covers ids, types, points and answer keys only. Reviews and the cumulative review are built at run time from the accepted lessons' forms, so their version is the hash of those inputs (rev here, and a short signature stored on each result).", forms, inputs }, null, 2) + "\n");
  console.log("recorded " + Object.keys(forms).length + " check forms and the review inputs (rev " + inputs.rev + ") in verification/assessment-versions.json");
  process.exit(0);
}
if (ARGV.includes("--record-review")) {
  if (!all) { console.log("NOT RECORDED: run --record-review together with --all, so every lesson file is read"); process.exit(1); }
  const keys = (argOf("--record-review") || "").split(",").map(x => x.trim()).filter(Boolean), by = (argOf("--by") || "").split(",").map(x => x.trim()).filter(Boolean);
  const au = (argOf("--authors") || "").split(",").map(x => x.trim()).filter(Boolean), rec = argOf("--record"), date = argOf("--date") || today(), part = argOf("--part") || "all";
  const bad = [];
  if (!keys.length) bad.push("name the lesson key(s) after --record-review");
  if (!by.length) bad.push("--by needs at least one reviewer");
  if (!rec || !fs.existsSync(path.join(ROOT, rec))) bad.push("--record must name an existing review file in the repository");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) bad.push("--date must be YYYY-MM-DD");
  if (by.some(x => au.indexOf(x) >= 0)) bad.push("a reviewer is also listed as an author: " + by.filter(x => au.indexOf(x) >= 0).join(", "));
  const cp = currentParts();
  keys.forEach(k => { if (!cp[k]) bad.push(k + " is not a lesson with reviewable content"); });
  if (bad.length) { console.log("NOT RECORDED: " + bad.join("; ")); process.exit(1); }
  const led = readJson(LEDGER_FILE) || { v: 1, lessons: {} };
  keys.forEach(k => {
    const e = led.lessons[k] || (led.lessons[k] = {});
    Object.keys(cp[k]).forEach(pn => {
      if (part !== "all" && pn.split(":")[0] !== part) return;
      const entry = { rev: cp[k][pn].rev, hash: cp[k][pn].hash, reviewers: by, authors: au, date, record: rec };
      if (pn.indexOf("test:") === 0) { (e.test = e.test || {})[pn.slice(5)] = entry; } else e[pn] = entry;
    });
  });
  fs.writeFileSync(LEDGER_FILE, JSON.stringify(led, null, 2) + "\n");
  console.log("recorded " + keys.join(", ") + " (" + part + ") as reviewed by " + by.join(", ") + " in docs/expansion-2026-10-22/review-ledger.json");
  process.exit(0);
}

(function () {
  const C = "versions", R = "ledger", V = readJson(VERS_FILE), LG = readJson(LEDGER_FILE), lev = RELEASE ? F : W;
  /* testRev shape (always a failure) */
  lessons.forEach(L => {
    if (L.testRev === undefined) return;
    const k = lessonKeyOf(L);
    if (!L.testRev || typeof L.testRev !== "object" || Array.isArray(L.testRev)) { F(C, "lesson " + k + ": testRev must be an object like { A: \"1\", B: \"1\" }"); return; }
    Object.keys(L.testRev).forEach(f => {
      if (f !== "A" && f !== "B") F(C, "lesson " + k + ": testRev has an unknown form " + f);
      else if (typeof L.testRev[f] !== "string" || !L.testRev[f].trim() || L.testRev[f].length > 12) F(C, "lesson " + k + ": testRev." + f + " must be a short non-empty string");
      else if (f === "A" && !(L.test || []).length) F(C, "lesson " + k + ": testRev.A but no test");
      else if (f === "B" && !(Array.isArray(L.testB) && L.testB.length)) F(C, "lesson " + k + ": testRev.B but no testB");
    });
  });
  /* versions */
  if (!V || typeof V.forms !== "object") { lev(C, "verification/assessment-versions.json is missing or unreadable (run --record-versions)"); }
  else {
    const cur = currentForms(), mat = [], edit = [], stale = [], added = [], gone = [];
    Object.keys(cur).forEach(k => {
      const o = V.forms[k], c = cur[k];
      if (!o) { added.push(k); return; }
      if (o.rev !== c.rev) { stale.push(k + " (record rev " + o.rev + ", testRev " + c.rev + ")"); return; }
      if (o.mat !== c.mat) mat.push(k);
      else if (o.hash !== c.hash) edit.push(k);
    });
    if (all) Object.keys(V.forms).forEach(k => { if (!cur[k]) gone.push(k); });
    const list = a => a.slice(0, 10).join(", ") + (a.length > 10 ? ", and " + (a.length - 10) + " more" : "");
    if (mat.length) lev(C, mat.length + " check form" + (mat.length === 1 ? "" : "s") + " changed materially (ids, points or answer keys) with the same testRev, so old attempts would be read as the new check: " + list(mat) + ". Raise testRev in the lesson, then run --record-versions");
    if (stale.length) lev(C, "testRev differs from the record for " + list(stale) + ". Run --record-versions");
    if (added.length) lev(C, added.length + " check form" + (added.length === 1 ? " has" : "s have") + " no version record: " + list(added) + ". Run --record-versions");
    if (gone.length) lev(C, "the version record lists forms that no longer exist: " + list(gone));
    if (edit.length) W(C, edit.length + " check form" + (edit.length === 1 ? " was" : "s were") + " edited in wording only since the record (same ids, points and keys): " + list(edit) + ". testRev stays; run --record-versions to refresh the hash");
    /* a reworded question can keep its id, points and answer position and still be a different question: name those items */
    const reworded = [];
    edit.concat(mat).forEach(k => { const o = V.forms[k], c = cur[k]; if (o && o.q) Object.keys(c.q).forEach(id => { if (o.q[id] && o.q[id] !== c.q[id]) reworded.push(id); }); });
    if (reworded.length) W(C, "the question text itself (prompt, stem or choices, not only clue or explanation) changed on " + list(reworded) + " while the id, points and answer position stayed. If this is a different question, raise testRev; if it is a correction, leave it");
    const inp = currentInputs(), ih = sha({ accepted: inp.accepted, groups: inp.groups, forms: inp.forms });
    if (V.inputs && V.inputs.hash !== ih) lev(C, "the inputs of the reviews (accepted lessons, their checks' answer keys, the standard groups) changed since the record: run --record-versions, which raises the reviews' rev");
  }
  /* ledger */
  if (!LG || typeof LG.lessons !== "object") { lev(R, "docs/expansion-2026-10-22/review-ledger.json is missing or unreadable"); return; }
  /* Lead decision (2026-10-23): the existing legacy-lesson checks are grandfathered for release; the ledger is required for every
     lesson with core practice (its core, its similar items and its check forms). A legacy lesson can still be recorded. */
  const need = currentParts(), hasCore = new Set(lessons.filter(L => L.core).map(lessonKeyOf)), missing = [], differ = [], invalid = [], orphan = [];
  Object.keys(need).sort().forEach(k => partNames(need[k]).forEach(pn => {
    if (!hasCore.has(k) && !slot(LG.lessons[k], pn)) return;
    const e = slot(LG.lessons[k], pn), tag = k + " " + pn;
    if (!e) { missing.push(tag); return; }
    const probs = [];
    if (!Array.isArray(e.reviewers) || !e.reviewers.length || e.reviewers.some(x => typeof x !== "string" || !x.trim())) probs.push("no reviewers");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(e.date || "")) probs.push("no date");
    if (typeof e.record !== "string" || !fs.existsSync(path.join(ROOT, e.record))) probs.push("review file not found");
    if (Array.isArray(e.authors) && Array.isArray(e.reviewers) && e.reviewers.some(x => e.authors.indexOf(x) >= 0)) probs.push("a reviewer is also an author");
    if (probs.length) { invalid.push(tag + " (" + probs.join(", ") + ")"); return; }
    if (e.hash !== need[k][pn].hash || e.rev !== need[k][pn].rev) differ.push(tag);
  }));
  if (all) Object.keys(LG.lessons).forEach(k => { if (!need[k]) orphan.push(k); });
  const list = a => a.slice(0, 12).join("; ") + (a.length > 12 ? "; and " + (a.length - 12) + " more" : "");
  if (invalid.length) F(R, invalid.length + " review record" + (invalid.length === 1 ? " is" : "s are") + " not valid: " + list(invalid));
  if (differ.length) lev(R, differ.length + " part" + (differ.length === 1 ? "" : "s") + " changed since the independent review recorded for it (the shipped content is not what was reviewed): " + list(differ));
  if (missing.length) lev(R, missing.length + " part" + (missing.length === 1 ? " has" : "s have") + " no independent-review record: " + list(missing));
  if (orphan.length) lev(R, "the ledger names lessons that are not in the checked set or have no reviewable content: " + list(orphan));
})();

Object.keys(coreStats.together || {}).forEach(k => console.log("  info  lesson " + k + ": Practice Together = " + coreStats.together[k].join(", ") + " (practice minus the core refs)"));

const items = sets.reduce((a, s) => a + s.items.length, 0);
const litems = lessons.reduce((a, l) => a + (l.practice || []).length + (l.test || []).length + (Array.isArray(l.testB) ? l.testB.length : 0), 0);   /* testB: PP-004 */
console.log("Checked " + sets.length + " sets (" + items + " items), " + tasks.length + " tasks and " + lessons.length + " lessons (" + litems + " items)" + (all ? " [all files]" : " [manifest]") +
  "; core: " + coreStats.lessons + " lesson" + (coreStats.lessons === 1 ? "" : "s") + ", " + coreStats.core + " core items, " + coreStats.similar + " similar items");
warns.forEach(x => console.log("  warn  " + x));
fails.forEach(x => console.log("  FAIL  " + x));
console.log(fails.length ? fails.length + " FAILURES" : "PASS (0 failures, " + warns.length + " warnings)");
process.exit(fails.length ? 1 : 0);

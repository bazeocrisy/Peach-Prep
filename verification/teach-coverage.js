#!/usr/bin/env node
/* Teach Me coverage report (question-first roll-out).  Usage: node verification/teach-coverage.js [--json] [--all]
   For every lesson with core practice, and every core item, it reports what Teach Me (js/teach.js) can build from the
   authored data: three hints, the how steps, why, misconception, an evidence hint with a paragraph reference, a
   matching teaching point, and whether a non-final how step already says the answer. It never fails the build:
   it is the work list for rolling the experience out (exit code 0). Lessons with no core are listed as legacy. */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.resolve(__dirname, "..");
const ctx = { window: {} }; vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
const lessons = [];
ctx.PP = { addSet() {}, addTask() {}, addLesson: l => lessons.push(l), make: () => ({ appendChild() {}, addEventListener() {} }) };
run("js/data/standards.js"); run("js/data/manifest.js");
const LDIR = path.join(ROOT, "js/data/lessons");
fs.readdirSync(LDIR).filter(f => f.endsWith(".js")).forEach(f => run("js/data/lessons/" + f));
run("js/teach.js");
const T = ctx.window.PP_TEACH;
const norm = t => String(t || "").toLowerCase().replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
function answers(it) {
  const t = c => (c || []).filter(x => x.correct).map(x => x.text);
  switch (it.type) {
    case "mc": case "ms": return t(it.choices);
    case "ebsr": return t(it.partA && it.partA.choices).concat(t(it.partB && it.partB.choices));
    case "dropdown": return (it.slots || []).map(s => (s.options || [])[s.answer]).filter(Boolean);
    default: return [];
  }
}
const leaks = (it, how) => {
  const early = how.slice(0, -1).map(norm).join(" | ");
  return answers(it).map(norm).filter(a => a.length >= 4 && early.indexOf(a) >= 0);
};
const asJson = process.argv.includes("--json");
const out = { core: [], legacy: [], totals: { lessons: 0, items: 0, noHints: 0, noHow: 0, shortHow: 0, noWhy: 0, noMisc: 0, noEvidence: 0, noParaRef: 0, noPoint: 0, earlyAnswer: 0, cr: 0 } };
lessons.forEach(L => {
  const key = L.key || L.code;
  if (!(L.core && Array.isArray(L.core.sets) && L.core.sets.length)) { out.legacy.push({ key, title: L.title }); return; }
  const AD = L.addons || {}, byPid = {}; (L.practice || []).forEach(i => { byPid[i.id] = i; });
  const row = { key, title: L.title, items: 0, weak: [] };
  L.core.sets.forEach((s, si) => (s.items || []).forEach((x, pi) => {
    let it = x && x.ref ? byPid[x.ref] : x; if (!it) return;
    const a = AD[it.id] || {}; it = Object.assign({}, it);
    if (!it.hints && a.hints) it.hints = a.hints; if (!it.how && a.how) it.how = a.how; if (!it.misconception && (a.misconception || a.mix)) it.misconception = a.misconception || a.mix;
    const H = it.hints || [], how = it.how || [], flags = [];
    row.items++;
    if (it.type === "cr") out.totals.cr++;
    if (H.length < 3) { flags.push("hints<3"); out.totals.noHints++; }
    if (!how.length) { flags.push("no-how"); out.totals.noHow++; } else if (how.length < 2) { flags.push("how-has-one-step"); out.totals.shortHow++; }
    if (!it.why) { flags.push("no-why"); out.totals.noWhy++; }
    if (!it.misconception) { flags.push("no-misconception"); out.totals.noMisc++; }
    if (!H[1]) { flags.push("no-evidence-hint"); out.totals.noEvidence++; }
    else if ((it.passages || []).length && !T.evidenceRefs(Object.assign({}, it, { passages: it.passages }), H[1]).length) { flags.push("evidence-hint-has-no-paragraph-ref"); out.totals.noParaRef++; }
    if (!T.bestPoint(L, it)) { flags.push("no-matching-teach-point"); out.totals.noPoint++; }
    const lk = leaks(it, how);
    if (lk.length) { flags.push("early-step-quotes-correct-choice"); out.totals.earlyAnswer++; }
    if (flags.length) row.weak.push({ set: si + 1, pos: pi + 1, id: it.id, type: it.type, flags });
  }));
  out.core.push(row); out.totals.lessons++; out.totals.items += row.items;
});
if (asJson) { console.log(JSON.stringify(out, null, 1)); process.exit(0); }
console.log("Teach Me coverage: " + out.totals.lessons + " core lessons, " + out.totals.items + " core items; " + out.legacy.length + " lessons keep the five-step flow (no core).");
const t = out.totals;
console.log("  items with fewer than 3 hints: " + t.noHints + "; no how: " + t.noHow + "; one-step how: " + t.shortHow + "; no why: " + t.noWhy + "; no misconception: " + t.noMisc);
console.log("  no evidence hint (hints[1]): " + t.noEvidence + "; evidence hint without a paragraph reference (passage items): " + t.noParaRef + "; no matching teaching point: " + t.noPoint);
console.log("  non-final how step quotes a correct choice (answer may be given before the Answer card): " + t.earlyAnswer + "; written (cr) items: " + t.cr);
out.core.forEach(r => {
  const bad = r.weak.filter(w => w.flags.some(f => ["hints<3", "no-how", "how-has-one-step", "no-why", "early-step-quotes-correct-choice"].indexOf(f) >= 0));
  console.log((bad.length ? "  ! " : "    ") + r.key.padEnd(14) + r.items + " items, " + r.weak.length + " with a note" + (bad.length ? ", " + bad.length + " needing work: " + bad.slice(0, 6).map(w => w.id + " [" + w.flags.join(",") + "]").join("; ") : ""));
});
console.log("Legacy (five-step flow, no core): " + out.legacy.map(l => l.key).join(", "));

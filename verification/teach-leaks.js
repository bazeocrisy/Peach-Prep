#!/usr/bin/env node
/* Answer leaks in Teach Me (question-first). Usage:
     node verification/teach-leaks.js            print the count and by-lesson summary
     node verification/teach-leaks.js --write    regenerate verification/teach-leaks.json
     node verification/teach-leaks.js --check    exit 1 if an item leaks that is not in teach-leaks.json (the allowlist
                                                 may only shrink); items listed but no longer leaking are reported so the
                                                 file can be regenerated
   A "leak" is a Teach Me card shown before "The answer" (what the question asks, the strategy, the evidence hint,
   a how step before the last) whose text contains the key (js/teach.js leaksKey). The player already treats such a
   card as answer shown, so the child's record stays honest. The fix for the child-facing text is content:
   authors rewrite the early step so it points without quoting the key. The list is conservative and can hold false
   positives where a short key is also an ordinary word. */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.resolve(__dirname, "..");
const ctx = { window: {} }; vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
const lessons = [];
ctx.PP = { addSet() {}, addTask() {}, addLesson: l => lessons.push(l), make: () => ({}) };
run("js/data/standards.js"); run("js/data/manifest.js");
fs.readdirSync(path.join(ROOT, "js/data/lessons")).filter(f => f.endsWith(".js")).forEach(f => run("js/data/lessons/" + f));
run("js/teach.js");
const T = ctx.window.PP_TEACH;
const found = [];
let total = 0;
lessons.forEach(L => {
  if (!(L.core && Array.isArray(L.core.sets) && L.core.sets.length)) return;
  const AD = L.addons || {}, byPid = {}; (L.practice || []).forEach(i => { byPid[i.id] = i; });
  L.core.sets.forEach(s => (s.items || []).forEach(x => {
    let it = x && x.ref ? byPid[x.ref] : x; if (!it) return;
    const a = AD[it.id] || {}; it = Object.assign({}, it);
    if (!it.hints && a.hints) it.hints = a.hints; if (!it.how && a.how) it.how = a.how; if (!it.misconception && (a.misconception || a.mix)) it.misconception = a.misconception || a.mix;
    total++;
    const comp = T.compose(it, L, {});
    const where = comp.units.filter(u => u.id !== "answer" && u.leak).map(u => u.id === "step" ? "step " + u.n : u.id);
    if (where.length) found.push({ lesson: L.key || L.code, id: it.id, where });
  }));
});
found.sort((a, b) => a.id < b.id ? -1 : 1);
const FILE = path.join(__dirname, "teach-leaks.json");
if (process.argv.includes("--write")) {
  fs.writeFileSync(FILE, JSON.stringify({ about: "Core items whose Teach Me cards before 'The answer' contain the key text. The allowlist for verification/qf.py; it may only shrink. Regenerate with: node verification/teach-leaks.js --write", rule: "js/teach.js leaksKey: mc, ms, ebsr and dropdown keys of at least four characters, whole-word match, in asks, strategy, evidence or a how step before the last", itemsChecked: total, count: found.length, items: found }, null, 1) + "\n");
  console.log("wrote verification/teach-leaks.json: " + found.length + " of " + total + " core items");
} else if (process.argv.includes("--check")) {
  const saved = JSON.parse(fs.readFileSync(FILE, "utf8")), have = new Set(saved.items.map(i => i.id)), now = new Set(found.map(i => i.id));
  const added = found.filter(i => !have.has(i.id)), fixed = saved.items.filter(i => !now.has(i.id));
  console.log("leaking items now: " + found.length + " of " + total + "; in the allowlist: " + saved.items.length + "; fixed since: " + fixed.length);
  if (fixed.length) console.log("  fixed, remove with --write: " + fixed.slice(0, 20).map(i => i.id).join(", "));
  if (added.length) { console.log("FAIL: new leaks not in the allowlist: " + added.map(i => i.id + " [" + i.where.join(",") + "]").join("; ")); process.exit(1); }
} else {
  const by = {}; found.forEach(f => { by[f.lesson] = (by[f.lesson] || 0) + 1; });
  console.log(found.length + " of " + total + " core items show the key in a card before 'The answer'.");
  Object.keys(by).sort().forEach(k => console.log("  " + k.padEnd(14) + by[k]));
}

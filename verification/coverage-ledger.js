#!/usr/bin/env node
/* Question-first coverage ledger body (markdown on stdout). Usage: node verification/coverage-ledger.js [--ids]
   Per lesson: practice status (core / documented exception / not yet), skill-check forms and sizes, similar bank size,
   Teach Me data gaps. --ids adds the item ids behind every gap count. Source of truth for docs/question-first/COVERAGE-LEDGER.md. */
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
try { run("js/data/accepted.js"); } catch (e) {}
const ACC = new Set(ctx.window.PP_ACCEPTED || []);
const T = ctx.window.PP_TEACH, IDS = process.argv.includes("--ids");
let exceptions = {};
try { JSON.parse(fs.readFileSync(path.join(ROOT, "docs/expansion-2026-10-22/practice-exceptions.json"), "utf8")).exceptions.forEach(e => { exceptions[e.lesson] = e; }); } catch (e) {}
let ledger = {};
try { ledger = JSON.parse(fs.readFileSync(path.join(ROOT, "docs/expansion-2026-10-22/review-ledger.json"), "utf8")).lessons || {}; } catch (e) {}
const rows = [], gaps = { noPoint: [], noMisc: [], noPara: [] };
let items = 0, testItems = 0, formB = 0, noTest = [];
lessons.forEach(L => {
  const key = L.key || L.code, core = L.core && L.core.sets && L.core.sets.length;
  const t = (L.test || []).length, tb = (L.testB || []).length;
  if (!t) noTest.push(key); else testItems += t + tb; if (tb) formB++;
  const row = { key, code: L.code, title: L.title, core: !!core, ex: exceptions[key], n: 0, sim: (L.similar || []).length, t, tb, rev: ledger[key] ? Object.keys(ledger[key]).length : 0, acc: ACC.has(key), g: { p: 0, m: 0, e: 0 } };
  if (core) {
    const AD = L.addons || {}, by = {}; (L.practice || []).forEach(i => { by[i.id] = i; });
    L.core.sets.forEach(s => (s.items || []).forEach(x => {
      let it = x && x.ref ? by[x.ref] : x; if (!it) return;
      const a = AD[it.id] || {}; it = Object.assign({}, it);
      if (!it.hints && a.hints) it.hints = a.hints; if (!it.misconception && (a.misconception || a.mix)) it.misconception = a.misconception || a.mix;
      row.n++; items++;
      if (!T.bestPoint(L, it)) { row.g.p++; gaps.noPoint.push(it.id); }
      if (!it.misconception) { row.g.m++; gaps.noMisc.push(it.id); }
      const H = it.hints || [];
      if ((it.passages || []).length && H[1] && !T.evidenceRefs(it, H[1]).length) { row.g.e++; gaps.noPara.push(it.id); }
    }));
  }
  rows.push(row);
});
const accN = rows.filter(r => r.acc).length, accCore = rows.filter(r => r.acc && r.core).length;
const conv = rows.filter(r => r.core), exc = rows.filter(r => !r.core && r.ex), todo = rows.filter(r => !r.core && !r.ex);
const out = [];
out.push("Lessons in this tree: " + rows.length + ". Converted to question-first (core practice, fifteen items in three sets): **" + conv.length + "** (" + items + " core items). Documented performance exceptions (no core by design): **" + exc.length + "**. Not converted yet (keep the five-step flow): **" + todo.length + "**.");
out.push("");
out.push("Teach Me data gaps over the " + items + " core items: no matching teaching point " + gaps.noPoint.length + "; no misconception line " + gaps.noMisc.length + "; evidence hint without a paragraph reference (passage items) " + gaps.noPara.length + ".");
out.push("Skill checks: " + (rows.length - noTest.length) + " lessons have a check (" + testItems + " check items in total, " + formB + " lessons with a second form B). Lessons with no check: " + (noTest.join(", ") || "none") + ".");
out.push("Independent review (js/data/accepted.js, batches/STATUS.md): " + accN + " lessons accepted (" + accCore + " of them with core practice); converted but not yet accepted: " + (conv.length - accCore) + ". The review ledger holds " + Object.keys(ledger).length + " per-lesson attestations.");
out.push("");
out.push("### Converted lessons");
out.push("| Lesson | Title | Core | Similar | Check A / B | Review accepted | Gaps: point / misc / paragraph |");
out.push("|---|---|---|---|---|---|---|");
conv.forEach(r => out.push("| " + r.key + " | " + r.title.replace(/\|/g, "/").slice(0, 60) + " | " + r.n + " | " + r.sim + " | " + r.t + " / " + (r.tb || "-") + " | " + (r.acc ? "yes" : "not yet") + " | " + r.g.p + " / " + r.g.m + " / " + r.g.e + " |"));
out.push("");
out.push("### Documented exceptions (performance lessons)");
exc.forEach(r => out.push("- " + r.key + " (" + r.ex.kind + "): " + r.ex.rationale));
out.push("");
out.push("### Not converted yet (five-step flow)");
out.push(todo.map(r => r.key).join(", ") || "none");
if (IDS) {
  out.push(""); out.push("### Item ids behind the gap counts");
  [["No matching teaching point", gaps.noPoint], ["No misconception line", gaps.noMisc], ["Evidence hint with no paragraph reference", gaps.noPara]].forEach(([h, a]) => { out.push(""); out.push("**" + h + " (" + a.length + ")**"); out.push(""); out.push(a.join(", ")); });
}
console.log(out.join("\n"));

#!/usr/bin/env node
/* Focused regression of the actual runtime prose functions, not copied formulas. */
"use strict";
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const root = path.resolve(__dirname, "..");
const read = p => fs.readFileSync(path.join(root, p), "utf8");
const ctx = { window: { location: { search: "" }, localStorage: { getItem: () => null } }, URLSearchParams };
vm.createContext(ctx);
vm.runInContext(read("js/pp.js"), ctx);
ctx.PP = ctx.window.PP;
vm.runInContext(read("js/engine/items.js"), ctx);
const nodes = {};
ctx.el = id => nodes[id] || (nodes[id] = { textContent: "", focus() {} });
ctx.showStage = () => {};
ctx.run = { set: { kind: "mixed", id: "fixture", items: [] }, state: [] };
ctx.ctxFor = () => ({ item: { type: "fixture" }, resp: {} });
ctx.T = { fixture: { answered: () => false } };
ctx.window.PP_APP = { markDone() {} };
const player = read("js/engine/player.js");
vm.runInContext(player.slice(player.indexOf("  function finish()"), player.indexOf("  function showStage(")), ctx);
vm.runInContext(player.slice(player.indexOf("  function practiceDone()"), player.indexOf("  /* ---------- test scoring")), ctx);
const words = new Map([[0, "zero"], [1, "one"], [2, "two"], [9, "nine"], [10, "10"]]);
let assertions = 0;
function check(actual, expected) { assert.strictEqual(actual, expected); assertions++; }
for (const [n, word] of words) {
  check(ctx.PP.countWord(n), word);
  ctx.run.set.items = Array.from({ length: n }, () => ({ type: "fixture" }));
  ctx.run.state = Array.from({ length: n }, () => ({ firstTry: false }));
  ctx.finish();
  check(nodes["confirm-line"].textContent, n
    ? `You left ${word} question${n === 1 ? "" : "s"} blank or not finished. You can go back and check, or turn in your test.`
    : "You answered every question. You can go back and check, or turn in your test.");
  ctx.practiceDone();
  check(nodes["done-line"].textContent,
    `You finished ${n === 1 ? "one question" : "all " + word + " questions"}. You got 0 of ${n} right on your first try without help. Asking for help is never a mistake; it is how you learn.`);
  const rows = Array.from({ length: n }, () => ({ answer: 0 }));
  check(ctx.window.PP_ITEMS.match.partialNote({ rows }, { v: rows.map(() => 0) }),
    `${word[0].toUpperCase() + word.slice(1)} of ${word} row${n === 1 ? " is" : "s are"} right.`);
}
check(ctx.PP.countWord(4), "four");
check(ctx.PP.countWord(8), "eight");
check(ctx.PP.countWord(11), "11");
const lessons = [];
ctx.PP.addLesson = l => lessons.push(l);
vm.runInContext(read("js/data/lessons/L-V3.js"), ctx);
const item = lessons.flatMap(l => l.testB || []).find(it => it.id === "SK-V3a-TB1");
check(item.points, 1);
check(item.choices.find(c => c.correct).text, "became fewer");
check(/Week 3 has eight buckets, but week 4 has only four buckets/.test(item.why), true);
check(/family picked fewer buckets of pecans/.test(item.why), true);
check(/left to pick/.test(item.why), false);
console.log(`${assertions} instructional-copy assertions passed.`);

/* Peach Prep — item types.

   Every type provides:
     render(ctx)        build the controls into ctx.host; read/write ctx.resp
     answered(item, r)  true when the child has given a complete answer
     score(item, r)     { points, max } using the blueprint-style rules in docs/SPEC.md §5
     narrow(ctx)        Help step 2: a format-specific narrowing that never gives the answer
     outline(ctx)       Help step 3: outline the correct answer(s); the child still enters it
     answerText(item, set)  plain words for "The answer is ..."
     blank(item)        an empty response

   ctx = { item, set, host, resp, onChange, locked, ui:{} }
   Choice order is shuffled ONCE per item per sitting (ctx.order) so an
   answer's position is never a clue. Identity travels on data-i. */
(function () {
  "use strict";
  const { make, clear, shuffled, sentenceAt, visibleLabel } = PP;

  const correctIdx = choices => choices.map((c, i) => c.correct ? i : -1).filter(i => i >= 0);
  const eqSet = (a, b) => a.length === b.length && a.every(x => b.indexOf(x) >= 0);

  /* ---------- shared: a list of choice buttons ---------- */
  function choiceList(host, choices, opts) {
    const list = make("div", "choices" + (opts.multi ? " is-multi" : ""));
    list.setAttribute("role", "group");
    if (opts.label) list.setAttribute("aria-label", opts.label);
    const order = opts.order || choices.map((c, i) => i);
    order.forEach(i => {
      const b = make("button", "choice");
      b.type = "button";
      b.dataset.i = String(i);
      const mark = make("span", "choice-mark");
      mark.setAttribute("aria-hidden", "true");
      b.appendChild(mark);
      b.appendChild(make("span", "choice-text", choices[i].text));
      b.addEventListener("click", () => { if (!opts.isLocked()) opts.onPick(i); });
      list.appendChild(b);
    });
    host.appendChild(list);
    return list;
  }
  function syncChoices(list, selected) {
    Array.from(list.querySelectorAll(".choice")).forEach(b => {
      const on = selected.indexOf(Number(b.dataset.i)) >= 0;
      b.classList.toggle("is-picked", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }
  function ruleOut(list, indices) {
    Array.from(list.querySelectorAll(".choice")).forEach(b => {
      if (indices.indexOf(Number(b.dataset.i)) >= 0) {
        b.classList.add("is-ruled-out");
        b.disabled = true;
        b.setAttribute("aria-label", b.textContent + " (ruled out)");
      }
    });
  }
  function outlineChoices(list, indices) {
    Array.from(list.querySelectorAll(".choice")).forEach(b => {
      b.classList.toggle("is-hint", indices.indexOf(Number(b.dataset.i)) >= 0);
    });
  }
  function pickNote(host, n) {
    host.appendChild(make("p", "pick-note", "Choose " + ["", "ONE", "TWO", "THREE", "FOUR"][n] + " answer" + (n > 1 ? "s" : "") + "."));
  }

  /* hottext can point into a passage (targets/answer are refs) or carry
     its own sentences (options + 0-based answer indexes). */
  const hotTargets = it => it.options ? it.options.map((o, i) => "opt:" + i) : (it.targets || []);
  const hotAnswer = it => it.options ? it.answer.map(i => "opt:" + i) : it.answer;
  const hotText = (it, set, ref) => /^opt:/.test(ref) ? it.options[Number(ref.slice(4))] : String(sentenceAt(set, ref) || ref).replace(/^(Box|Caption): /, "");
  /* free-standing options are shuffled, so they carry no numbered label */
  const hotLabel = (it, set, ref) => /^opt:/.test(ref) ? "" : visibleLabel(set, ref);

  const lbl = n => ["", "ONE", "TWO", "THREE", "FOUR"][n] || String(n);
  /* A "look in paragraph N" hint is only safe when that paragraph (or
     stanza) also holds at least one wrong option; otherwise naming it
     names the answer. Poems are grouped by stanza, never by line. */
  function placeOf(set, ref) {
    const r = PP.parseRef(ref); if (!r) return ref;
    return r.pid + ":" + r.para;
  }
  function placeLabel(set, ref) {
    const r = PP.parseRef(ref); const p = r && PP.passageOf(set, r.pid);
    if (p && p.lines) return ((set.passages || []).length > 1 && p.title ? "\u201c" + p.title + "\u201d, " : "") + "stanza " + r.para;
    if (p && p.draft) {
      /* drafts number sentences in the text, "(4) ..."; name the paragraph by its sentence numbers */
      const nums = (p.paragraphs[r.para - 1] || []).map(x => (/^\((\d+)\)/.exec(x) || [])[1]).filter(Boolean);
      return nums.length ? "sentences " + nums[0] + " to " + nums[nums.length - 1] : "the draft";
    }
    return visibleLabel(set, ref) || "the passage";
  }
  function placeHint(it, set) {
    const ans = hotAnswer(it), targets = hotTargets(it);
    const places = ans.map(r => placeOf(set, r)).filter((x, i, a) => a.indexOf(x) === i);
    const safe = places.every(pl => targets.some(t => ans.indexOf(t) < 0 && placeOf(set, t) === pl));
    if (!safe) return null;
    const labels = places.map(pl => placeLabel(set, ans.find(a => placeOf(set, a) === pl)));
    return { places, labels };
  }

  const T = {};

  /* ===== mc: one answer ===== */
  T.mc = {
    blank: () => ({ v: null }),
    render(ctx) {
      const { item, host } = ctx;
      ctx.order = ctx.order || shuffled(item.choices.map((c, i) => i));
      ctx.ui.list = choiceList(host, item.choices, {
        order: ctx.order, label: item.prompt, isLocked: () => ctx.locked,
        onPick: i => { ctx.resp.v = i; syncChoices(ctx.ui.list, [i]); ctx.onChange(); }
      });
      syncChoices(ctx.ui.list, ctx.resp.v === null ? [] : [ctx.resp.v]);
    },
    answered: (it, r) => r.v !== null,
    score: (it, r) => ({ points: (r.v !== null && it.choices[r.v].correct) ? it.points : 0, max: it.points }),
    narrow(ctx) {
      const right = correctIdx(ctx.item.choices)[0];
      const wrong = shuffled(ctx.item.choices.map((c, i) => i).filter(i => i !== right && i !== ctx.resp.v));
      const keepWrong = ctx.resp.v !== null && ctx.resp.v !== right ? ctx.resp.v : null;
      const out = wrong.filter(i => i !== keepWrong).slice(0, Math.max(0, ctx.item.choices.length - 2));
      ruleOut(ctx.ui.list, out);
      if (out.indexOf(ctx.resp.v) >= 0) { ctx.resp.v = null; syncChoices(ctx.ui.list, []); }
      return "Two choices are crossed out. It is one of the two left.";
    },
    outline(ctx) { outlineChoices(ctx.ui.list, correctIdx(ctx.item.choices)); },
    answerText: it => it.choices.find(c => c.correct).text
  };

  /* ===== ms: choose n ===== */
  T.ms = {
    blank: () => ({ v: [] }),
    render(ctx) {
      const { item, host } = ctx;
      const n = item.pick || correctIdx(item.choices).length;
      pickNote(host, n);
      ctx.order = ctx.order || shuffled(item.choices.map((c, i) => i));
      ctx.ui.list = choiceList(host, item.choices, {
        multi: true, order: ctx.order, label: item.prompt, isLocked: () => ctx.locked,
        onPick: i => {
          const v = ctx.resp.v;
          const k = v.indexOf(i);
          if (k >= 0) v.splice(k, 1);
          else if (v.length < n) v.push(i);
          else { v.shift(); v.push(i); }
          syncChoices(ctx.ui.list, v); ctx.onChange();
        }
      });
      syncChoices(ctx.ui.list, ctx.resp.v);
    },
    answered: (it, r) => r.v.length === (it.pick || correctIdx(it.choices).length),
    score(it, r) {
      const right = correctIdx(it.choices);
      const hits = r.v.filter(i => right.indexOf(i) >= 0).length;
      const wrong = r.v.length - hits;
      if (eqSet(r.v, right)) return { points: it.points, max: it.points };
      if (it.points === 2 && hits >= Math.ceil(right.length / 2) && wrong <= 1) return { points: 1, max: 2 };
      return { points: 0, max: it.points };
    },
    narrow(ctx) {
      const right = correctIdx(ctx.item.choices);
      const wrong = ctx.item.choices.map((c, i) => i).filter(i => right.indexOf(i) < 0);
      /* one wrong choice, preferring one the child picked, so the narrowing helps without halving the item */
      const picked = ctx.resp.v.filter(i => wrong.indexOf(i) >= 0);
      const out = [picked.length ? picked[0] : shuffled(wrong)[0]];
      ruleOut(ctx.ui.list, out);
      ctx.resp.v = ctx.resp.v.filter(i => out.indexOf(i) < 0);
      syncChoices(ctx.ui.list, ctx.resp.v);
      return "One wrong choice is crossed out. Choose " + lbl(right.length) + " answers.";
    },
    outline(ctx) { outlineChoices(ctx.ui.list, correctIdx(ctx.item.choices)); },
    answerText: it => it.choices.filter(c => c.correct).map(c => c.text).join(" AND ")
  };

  /* ===== ebsr: Part A answer + Part B evidence ===== */
  T.ebsr = {
    blank: () => ({ a: null, b: [] }),
    render(ctx) {
      const { item, host } = ctx;
      const nB = item.partB.pick || correctIdx(item.partB.choices).length;
      const pa = make("div", "part"); pa.appendChild(make("p", "part-label", "Part A"));
      pa.appendChild(make("p", "part-prompt", item.partA.prompt.replace(/^Part A[:.]?\s*/i, "")));
      ctx.orderA = ctx.orderA || shuffled(item.partA.choices.map((c, i) => i));
      ctx.ui.listA = choiceList(pa, item.partA.choices, {
        order: ctx.orderA, label: "Part A", isLocked: () => ctx.locked || ctx.ui.aLocked,
        onPick: i => { ctx.resp.a = i; syncChoices(ctx.ui.listA, [i]); ctx.onChange(); }
      });
      const pb = make("div", "part"); pb.appendChild(make("p", "part-label", "Part B"));
      pb.appendChild(make("p", "part-prompt", item.partB.prompt.replace(/^Part B[:.]?\s*/i, "")));
      if (nB > 1) pickNote(pb, nB);
      ctx.orderB = ctx.orderB || shuffled(item.partB.choices.map((c, i) => i));
      ctx.ui.listB = choiceList(pb, item.partB.choices, {
        multi: nB > 1, order: ctx.orderB, label: "Part B", isLocked: () => ctx.locked,
        onPick: i => {
          const v = ctx.resp.b; const k = v.indexOf(i);
          if (nB === 1) { ctx.resp.b = [i]; }
          else if (k >= 0) v.splice(k, 1); else if (v.length < nB) v.push(i); else { v.shift(); v.push(i); }
          syncChoices(ctx.ui.listB, ctx.resp.b); ctx.onChange();
        }
      });
      host.appendChild(pa); host.appendChild(pb);
      syncChoices(ctx.ui.listA, ctx.resp.a === null ? [] : [ctx.resp.a]);
      syncChoices(ctx.ui.listB, ctx.resp.b);
    },
    answered: (it, r) => r.a !== null && r.b.length === (it.partB.pick || correctIdx(it.partB.choices).length),
    score(it, r) {
      const aOK = r.a !== null && it.partA.choices[r.a].correct;
      const bOK = eqSet(r.b, correctIdx(it.partB.choices));
      const max = it.points;
      if (!aOK) return { points: 0, max };
      if (bOK) return { points: max, max };
      return { points: max === 2 ? 1 : 0, max };
    },
    narrow(ctx) {
      const right = correctIdx(ctx.item.partA.choices)[0];
      ctx.resp.a = right; ctx.ui.aLocked = true;
      syncChoices(ctx.ui.listA, [right]);
      ruleOut(ctx.ui.listA, ctx.item.partA.choices.map((c, i) => i).filter(i => i !== right));
      ctx.onChange();
      return "Part A is filled in for you. Now find the evidence for it in Part B.";
    },
    outline(ctx) {
      outlineChoices(ctx.ui.listA, correctIdx(ctx.item.partA.choices));
      outlineChoices(ctx.ui.listB, correctIdx(ctx.item.partB.choices));
    },
    answerText: it => "Part A: " + it.partA.choices.find(c => c.correct).text +
      " Part B: " + it.partB.choices.filter(c => c.correct).map(c => c.text).join(" AND ")
  };

  /* ===== dropdown: choose a word for each blank in a sentence ===== */
  T.dropdown = {
    blank: it => ({ v: it.slots.map(() => null) }),
    /* Short options: a drop-down inside the sentence. Long options (over
       28 characters) would be cut off in a phone's menu, so that blank is
       shown in the sentence and answered with buttons underneath. */
    render(ctx) {
      const { item, host } = ctx;
      const p = make("p", "dd-sentence");
      const parts = item.text.split(/(\{\d+\})/);
      ctx.ui.selects = []; ctx.ui.lists = []; ctx.ui.blanks = [];
      ctx.ddOrder = ctx.ddOrder || item.slots.map(sl => shuffled(sl.options.map((o, oi) => oi)));
      const isLong = k => Math.max.apply(null, item.slots[k].options.map(o => o.length)) > 28;
      const below = [];
      parts.forEach(part => {
        const m = /^\{(\d+)\}$/.exec(part);
        if (!m) { p.appendChild(document.createTextNode(part)); return; }
        const k = Number(m[1]);
        if (isLong(k)) {
          const bl = make("span", "dd-blank");
          ctx.ui.blanks[k] = bl;
          p.appendChild(bl);
          below.push(k);
          return;
        }
        const sel = make("select", "dd-select");
        sel.setAttribute("aria-label", "Blank " + (k + 1));
        const ph = make("option", "", "Choose\u2026"); ph.value = ""; sel.appendChild(ph);
        ctx.ddOrder[k].forEach(oi => { const op = make("option", "", item.slots[k].options[oi]); op.value = String(oi); sel.appendChild(op); });
        sel.value = ctx.resp.v[k] === null ? "" : String(ctx.resp.v[k]);
        sel.disabled = !!ctx.locked;
        sel.addEventListener("change", () => {
          ctx.resp.v[k] = sel.value === "" ? null : Number(sel.value);
          ctx.onChange();
        });
        ctx.ui.selects[k] = sel;
        p.appendChild(sel);
      });
      host.appendChild(p);
      const syncBlank = k => {
        const v = ctx.resp.v[k];
        ctx.ui.blanks[k].textContent = v === null ? "  (blank " + (k + 1) + ")  " : item.slots[k].options[v];
        ctx.ui.blanks[k].classList.toggle("is-filled", v !== null);
      };
      below.forEach(k => {
        if (item.slots.length > 1) host.appendChild(make("p", "pick-note", "Blank " + (k + 1) + ":"));
        ctx.ui.lists[k] = choiceList(host, item.slots[k].options.map(o => ({ text: o })), {
          order: ctx.ddOrder[k], label: "Blank " + (k + 1), isLocked: () => ctx.locked,
          onPick: i => { ctx.resp.v[k] = i; syncChoices(ctx.ui.lists[k], [i]); syncBlank(k); ctx.onChange(); }
        });
        syncChoices(ctx.ui.lists[k], ctx.resp.v[k] === null ? [] : [ctx.resp.v[k]]);
        syncBlank(k);
      });
    },
    answered: (it, r) => r.v.every(x => x !== null),
    score(it, r) {
      const ok = it.slots.map((s, k) => r.v[k] === s.answer);
      const n = ok.filter(Boolean).length;
      if (n === it.slots.length) return { points: it.points, max: it.points };
      if (it.points === 2 && it.slots.length === 2 && n === 1) return { points: 1, max: 2 };
      return { points: 0, max: it.points };
    },
    narrow(ctx) {
      ctx.item.slots.forEach((s, k) => {
        const sel = ctx.ui.selects[k];
        const wrong = shuffled(s.options.map((o, i) => i).filter(i => i !== s.answer));
        const drop = wrong.slice(0, Math.max(0, s.options.length - 2));
        if (!sel) {
          ruleOut(ctx.ui.lists[k], drop);
          if (drop.indexOf(ctx.resp.v[k]) >= 0) { ctx.resp.v[k] = null; syncChoices(ctx.ui.lists[k], []); ctx.ui.blanks[k].textContent = "  (blank " + (k + 1) + ")  "; }
          return;
        }
        Array.from(sel.options).forEach(op => {
          if (op.value !== "" && drop.indexOf(Number(op.value)) >= 0) { op.disabled = true; op.textContent = op.textContent + " (ruled out)"; }
        });
        if (drop.indexOf(ctx.resp.v[k]) >= 0) { ctx.resp.v[k] = null; sel.value = ""; }
      });
      ctx.onChange();
      return "Some wrong words are ruled out in each blank.";
    },
    outline(ctx) {
      ctx.item.slots.forEach((s, k) => {
        if (ctx.ui.selects[k]) ctx.ui.selects[k].classList.add("is-hint");
        else outlineChoices(ctx.ui.lists[k], [s.answer]);
      });
    },
    answerText: it => it.slots.map(s => s.options[s.answer]).join(", ")
  };

  /* ===== hottext: select sentence(s) from the passage ===== */
  T.hottext = {
    blank: () => ({ v: [] }),
    render(ctx) {
      const { item, set, host } = ctx;
      const n = item.pick || item.answer.length;
      pickNote(host, n);
      const list = make("div", "hot-list");
      list.setAttribute("role", "group");
      list.setAttribute("aria-label", item.prompt);
      /* Passage sentences stay in passage order; free-standing options are shuffled once per sitting. */
      ctx.hotOrder = ctx.hotOrder || (item.options ? shuffled(hotTargets(item)) : hotTargets(item));
      ctx.hotOrder.forEach(ref => {
        const b = make("button", "hot-option");
        b.type = "button"; b.dataset.ref = ref;
        const lab = hotLabel(item, set, ref);
        if (lab) b.appendChild(make("span", "hot-where", lab));
        b.appendChild(make("span", "hot-text", hotText(item, set, ref)));
        b.addEventListener("click", () => {
          if (ctx.locked) return;
          const v = ctx.resp.v; const k = v.indexOf(ref);
          if (k >= 0) v.splice(k, 1); else if (v.length < n) v.push(ref); else { v.shift(); v.push(ref); }
          sync(); ctx.onChange();
          if (window.PP_PLAYER && !item.options) window.PP_PLAYER.flash(ref);
        });
        list.appendChild(b);
      });
      function sync() {
        Array.from(list.children).forEach(b => {
          const on = ctx.resp.v.indexOf(b.dataset.ref) >= 0;
          b.classList.toggle("is-picked", on); b.setAttribute("aria-pressed", on ? "true" : "false");
        });
        if (window.PP_PLAYER && !item.options) window.PP_PLAYER.markSelected(ctx.resp.v);
      }
      ctx.ui.list = list; ctx.ui.sync = sync;
      host.appendChild(list); sync();
    },
    answered: (it, r) => r.v.length === (it.pick || it.answer.length),
    score(it, r) {
      const ans = hotAnswer(it);
      if (eqSet(r.v, ans)) return { points: it.points, max: it.points };
      if (it.points === 2 && ans.length === 2 && r.v.filter(x => ans.indexOf(x) >= 0).length === 1)
        return { points: 1, max: 2 };
      return { points: 0, max: it.points };
    },
    narrow(ctx) {
      const it = ctx.item, ans = hotAnswer(it);
      const out = hotTargets(it).filter(r => ans.indexOf(r) < 0);
      let rule, msg;
      if (it.options) {
        /* no paragraphs to point at: rule out about half the wrong sentences */
        rule = shuffled(out).slice(0, Math.max(1, Math.ceil(out.length / 2)));
        msg = "Some sentences are crossed out. The answer is one of the others.";
      } else {
        const where = placeHint(it, ctx.set);
        if (where) {
          rule = out.filter(r => where.places.indexOf(placeOf(ctx.set, r)) < 0);
          msg = "Look in " + where.labels.join(" and ") + ".";
        } else {
          rule = shuffled(out).slice(0, Math.max(1, Math.ceil(out.length / 2)));
          msg = "Some sentences are crossed out. The answer is one of the others.";
        }
      }
      Array.from(ctx.ui.list.children).forEach(b => {
        if (rule.indexOf(b.dataset.ref) >= 0) { b.classList.add("is-ruled-out"); b.disabled = true; }
      });
      ctx.resp.v = ctx.resp.v.filter(r => rule.indexOf(r) < 0);
      ctx.ui.sync();
      return msg;
    },
    outline(ctx) {
      const ans = hotAnswer(ctx.item);
      Array.from(ctx.ui.list.children).forEach(b => b.classList.toggle("is-hint", ans.indexOf(b.dataset.ref) >= 0));
    },
    answerText: (it, set) => hotAnswer(it).map(r => "\u201c" + hotText(it, set, r) + "\u201d").join(" AND ")
  };

  /* ===== order: tap the steps in order ===== */
  T.order = {
    blank: () => ({ v: [] }),
    render(ctx) {
      const { item, host } = ctx;
      ctx.order = ctx.order || (function () {
        let o; do { o = shuffled(item.steps.map((s, i) => i)); } while (o.every((x, i) => x === i));
        return o;
      })();
      host.appendChild(make("p", "pick-note", item.orderNote || "Tap the choices in order, first to last. Tap a placed choice to take it back."));
      const slots = make("ol", "order-slots");
      const pool = make("div", "order-pool");
      pool.setAttribute("role", "group"); pool.setAttribute("aria-label", "Choices to place");
      ctx.ui.slots = slots; ctx.ui.pool = pool;
      function draw() {
        clear(slots); clear(pool);
        item.steps.forEach((s, k) => {
          const li = make("li", "order-slot");
          const i = ctx.resp.v[k];
          if (i === undefined) { li.appendChild(make("span", "order-empty", "Tap a choice to place it here")); li.classList.add("is-empty"); }
          else {
            const b = make("button", "order-card is-placed", item.steps[i]);
            b.type = "button";
            b.setAttribute("aria-label", "Step " + (k + 1) + ": " + item.steps[i] + ". Tap to take back.");
            if (ctx.ui.fixed === i) { b.disabled = true; b.classList.add("is-fixed"); }
            b.addEventListener("click", () => { if (ctx.locked) return; ctx.resp.v.splice(k, 1); draw(); ctx.onChange(); });
            li.appendChild(b);
            if (ctx.ui.hint) li.classList.toggle("is-hint", i === k);
          }
          slots.appendChild(li);
        });
        ctx.order.forEach(i => {
          if (ctx.resp.v.indexOf(i) >= 0) return;
          const b = make("button", "order-card", item.steps[i]);
          b.type = "button";
          b.addEventListener("click", () => { if (ctx.locked) return; ctx.resp.v.push(i); draw(); ctx.onChange(); });
          pool.appendChild(b);
        });
      }
      ctx.ui.draw = draw;
      host.appendChild(slots); host.appendChild(pool); draw();
    },
    answered: (it, r) => r.v.length === it.steps.length,
    score(it, r) {
      const n = it.steps.length;
      const inPlace = r.v.filter((x, i) => x === i).length;
      if (inPlace === n) return { points: it.points, max: it.points };
      if (it.points === 2) {
        const oneSwap = r.v.length === n && inPlace === n - 2 &&
          r.v.some((x, i) => i < n - 1 && x === i + 1 && r.v[i + 1] === i);
        /* partial credit only for a near miss: one adjacent swap, or (5 steps) all but two in place */
        if (oneSwap || (n >= 5 && inPlace >= n - 2)) return { points: 1, max: 2 };
      }
      return { points: 0, max: it.points };
    },
    narrow(ctx) {
      ctx.resp.v = [0].concat(ctx.resp.v.filter(x => x !== 0));
      ctx.ui.fixed = 0; ctx.ui.draw(); ctx.onChange();
      return "The first one is placed for you. What comes next?";
    },
    outline(ctx) { ctx.ui.hint = true; ctx.ui.draw(); },
    answerText: it => it.steps.map((s, i) => (i + 1) + ". " + s).join("  ")
  };

  /* ===== match: one column choice per row ===== */
  T.match = {
    blank: it => ({ v: it.rows.map(() => null) }),
    /* Rows as cards with one labelled button per column: readable on a
       phone at any number of columns, and every button names its choice. */
    render(ctx) {
      const { item, host } = ctx;
      const wrap = make("div", "match-list");
      ctx.ui.cells = [];
      ctx.rowOrder = ctx.rowOrder || shuffled(item.rows.map((x, i) => i));
      const cardsByRow = [];
      item.rows.forEach((row, r) => {
        const card = make("div", "match-card");
        cardsByRow[r] = card;
        card.appendChild(make("p", "match-row", row.text));
        const opts = make("div", "match-opts" + (item.cols.length > 2 ? " is-many" : ""));
        opts.setAttribute("role", "group"); opts.setAttribute("aria-label", row.text);
        ctx.ui.cells[r] = [];
        item.cols.forEach((c, k) => {
          const b = make("button", "match-btn", c);
          b.type = "button";
          b.addEventListener("click", () => {
            if (ctx.locked || ctx.ui.fixedRow === r) return;
            ctx.resp.v[r] = ctx.resp.v[r] === k ? null : k; sync(); ctx.onChange();
          });
          opts.appendChild(b); ctx.ui.cells[r][k] = b;
        });
        card.appendChild(opts);
      });
      ctx.rowOrder.forEach(r => wrap.appendChild(cardsByRow[r]));
      function sync() {
        ctx.ui.cells.forEach((row, r) => row.forEach((b, k) => {
          const on = ctx.resp.v[r] === k;
          b.classList.toggle("is-picked", on); b.setAttribute("aria-pressed", on ? "true" : "false");
        }));
      }
      ctx.ui.sync = sync;
      host.appendChild(wrap); sync();
    },
    answered: (it, r) => r.v.every(x => x !== null),
    score(it, r) {
      const n = it.rows.length;
      const right = it.rows.filter((row, i) => r.v[i] === row.answer).length;
      if (right === n) return { points: it.points, max: it.points };
      /* One-to-one matches (each column used once): a single mix-up makes
         two rows wrong, so partial credit allows two misses. */
      const used = it.rows.map(x => x.answer);
      const oneToOne = it.cols.length === n && new Set(used).size === n;
      if (it.points === 2 && right >= n - (oneToOne ? 2 : 1) && right > 0) return { points: 1, max: 2 };
      return { points: 0, max: it.points };
    },
    narrow(ctx) {
      const r = (ctx.rowOrder || [0])[0];
      ctx.resp.v[r] = ctx.item.rows[r].answer; ctx.ui.fixedRow = r;
      ctx.ui.cells[r].forEach(b => { b.disabled = true; });
      ctx.ui.sync(); ctx.onChange();
      return "The first row is filled in for you.";
    },
    outline(ctx) {
      ctx.item.rows.forEach((row, r) => ctx.ui.cells[r][row.answer].classList.add("is-hint"));
    },
    answerText: it => it.rows.map(row => row.text + " → " + it.cols[row.answer]).join(";  ")
  };

  /* ---------- review helpers: describe a response, and a text-only
     narrowing step for "Show me how" after a test ---------- */
  T.mc.describe = (it, r) => r.v === null ? "No answer" : it.choices[r.v].text;
  T.mc.narrowText = (it, r) => {
    const right = correctIdx(it.choices)[0];
    const other = (r.v !== null && r.v !== right) ? r.v : it.choices.map((c, i) => i).find(i => i !== right);
    const pair = [it.choices[right].text, it.choices[other].text].sort();
    return "It is one of these two: " + pair[0] + "  /  " + pair[1];
  };
  T.ms.describe = (it, r) => r.v.length ? r.v.map(i => it.choices[i].text).join(" AND ") : "No answer";
  T.ms.narrowText = (it, r) => {
    const wrong = it.choices.map((c, i) => c.correct ? -1 : i).filter(i => i >= 0);
    const w = (r && r.v.find(i => wrong.indexOf(i) >= 0)) ;
    return "There are " + lbl(correctIdx(it.choices).length) + " answers. One choice that is NOT an answer: " + it.choices[w !== undefined ? w : wrong[0]].text;
  };
  T.ebsr.describe = (it, r) => "Part A: " + (r.a === null ? "no answer" : it.partA.choices[r.a].text) +
    "  Part B: " + (r.b.length ? r.b.map(i => it.partB.choices[i].text).join(" AND ") : "no answer");
  T.ebsr.narrowText = it => "Part A is: " + it.partA.choices.find(c => c.correct).text + " Now use Part A to answer Part B.";
  T.dropdown.describe = (it, r) => r.v.map((x, k) => x === null ? "(blank)" : it.slots[k].options[x]).join(", ");
  T.dropdown.narrowText = it => it.slots.length > 1
    ? "The first blank is: " + it.slots[0].options[it.slots[0].answer] + "."
    : "It is one of these two: " + [it.slots[0].options[it.slots[0].answer],
        it.slots[0].options.find((o, i) => i !== it.slots[0].answer)].sort().join("  /  ");
  T.hottext.describe = (it, r, set) => r.v.length ? r.v.map(x => "\u201c" + hotText(it, set, x) + "\u201d").join(" AND ") : "No answer";
  T.hottext.narrowText = (it, r, set) => {
    const where = it.options ? null : placeHint(it, set);
    if (where) return "Look in " + where.labels.join(" and ") + ".";
    return "It is not " + hotTargets(it).filter(x => hotAnswer(it).indexOf(x) < 0).slice(0, 2)
      .map(x => "\u201c" + hotText(it, set, x) + "\u201d").join(" or ") + ".";
  };
  T.order.describe = (it, r) => r.v.length ? r.v.map((i, k) => (k + 1) + ". " + it.steps[i]).join("  ") : "No answer";
  T.order.narrowText = it => "The first one is: " + it.steps[0];
  T.match.describe = (it, r) => it.rows.map((row, i) => row.text + " \u2192 " + (r.v[i] === null ? "(none)" : it.cols[r.v[i]])).join(";  ");
  T.match.narrowText = it => "First row: " + it.rows[0].text + " \u2192 " + it.cols[it.rows[0].answer] + ".";

  /* What a partly right answer got right, without giving the rest away. */
  T.ebsr.partialNote = (it, r) => "Part A is right. Check Part B again.";
  T.ms.partialNote = (it, r) => "At least one of your choices is right.";
  T.dropdown.partialNote = (it, r) => "One blank is right.";
  T.match.partialNote = (it, r) => it.rows.filter((row, i) => r.v[i] === row.answer).length + " of " + it.rows.length + " rows are right.";
  T.order.partialNote = () => "You are close. Two of them are in the wrong places.";
  T.hottext.partialNote = () => "One of your sentences is right.";

  window.PP_ITEMS = T;
})();

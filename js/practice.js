/* Peach Prep — "Practice on my own" state: the new, versioned key pp.practice.v1
   (docs/expansion-2026-10-22/01-architecture.md §2.2.4).

   { v: 1, l: { <lessonKey>: {
       rev: "1",                      the lesson's core.rev when the record was last written
       at: { set: 1-3, pos: 0-4 },    last place in the fifteen
       i: { <coreItemId>: Rec },      the fifteen core items
       s: { <similarItemId>: Rec }    extra questions, kept apart (Rec also has for: <coreItemId>)
   } } }
   Rec = { r: response (engine index space), ord: choice order, w: wrong checks, h: hints taken (0-3),
           x: answer shown before solving, ok: solved with full points, howAfter: steps opened after solving,
           (question-first, additive; absent = zero / false, so older records keep their meaning)
           tm: times Teach Me was opened before the item was solved, tp: furthest Teach Me step reached,
           tmAfter: Teach Me opened after the item was solved, sk: times skipped while unfinished,
           f1: { ok, pre } the first Check: fully right or not, and whether help came before it (set once),
           cr: { text, checks, done } for a constructed response, set, pos, d: "YYYY-MM-DD",
           log: [ { t: "check"|"hint"|"how"|"cr", ... } ] (the full assistance history, last 40) }

   Status is DERIVED from w, h, x and ok, never stored as a label. w, h and x only ever go up,
   so a later right answer never erases the help that came before it.
   Nothing here writes pp.progress.v1, and nothing here can record a pass.
   Rendering never writes, and nothing is written on page load: only a child's action calls update().
   Storage failure (blocked or full): the state stays in memory for this page visit and the
   notice says so honestly. A damaged stored value is read as empty and left untouched until
   the first save that follows a child's action. */
(function () {
  "use strict";
  const KEY = "pp.practice.v1";
  const BAD = k => k === "__proto__" || k === "constructor" || k === "prototype";
  const isObj = v => !!v && typeof v === "object" && !Array.isArray(v);
  const whole = (v, max) => { const n = Math.floor(Number(v)); return Number.isFinite(n) && n > 0 ? (max ? Math.min(max, n) : n) : 0; };
  let available = true, damaged = false, partial = false, unsaved = false;
  let data = { v: 1, l: Object.create(null) };

  function cleanRec(v, similar) {
    if (!isObj(v)) return null;
    const r = Object.assign(Object.create(null), v);   /* unknown fields are kept */
    Object.keys(r).forEach(k => { if (BAD(k)) delete r[k]; });
    r.w = whole(v.w); r.h = whole(v.h, 3);
    r.x = v.x === true; r.ok = v.ok === true; r.howAfter = v.howAfter === true;
    /* question-first (additive): absent means 0 / false, so records saved earlier mean what they meant */
    r.tm = whole(v.tm, 99); r.tp = whole(v.tp, 99); r.sk = whole(v.sk, 99); r.tmAfter = v.tmAfter === true;
    if (isObj(v.f1)) r.f1 = { ok: v.f1.ok === true, pre: v.f1.pre === true }; else delete r.f1;
    if (v.cr !== undefined) {
      if (isObj(v.cr)) r.cr = { text: typeof v.cr.text === "string" ? v.cr.text : "", checks: Array.isArray(v.cr.checks) ? v.cr.checks.map(x => x === true) : [], done: v.cr.done === true };
      else delete r.cr;
    }
    if (!Array.isArray(v.log)) delete r.log;
    if (similar && typeof v.for !== "string") delete r.for;
    return r;
  }
  function cleanLesson(v) {
    if (!isObj(v)) return null;
    const L = Object.assign(Object.create(null), v);
    Object.keys(L).forEach(k => { if (BAD(k)) delete L[k]; });
    L.rev = typeof v.rev === "string" ? v.rev : undefined;
    if (L.rev === undefined) delete L.rev;
    L.at = isObj(v.at) ? { set: Math.min(3, Math.max(1, whole(v.at.set) || 1)), pos: Math.min(4, whole(v.at.pos)) } : undefined;
    if (!L.at) delete L.at;
    ["i", "s"].forEach(f => {
      const m = Object.create(null);
      if (isObj(v[f])) Object.keys(v[f]).forEach(id => { if (BAD(id)) return; const r = cleanRec(v[f][id], f === "s"); if (r) m[id] = r; });
      L[f] = m;
    });
    return L;
  }
  (function load() {
    let raw = null;
    try { raw = window.localStorage.getItem(KEY); } catch (e) { available = false; return; }
    if (raw !== null) {
      let v = null;
      try { v = JSON.parse(raw); } catch (e) { damaged = true; }
      if (!damaged && !(isObj(v) && isObj(v.l))) damaged = true;
      if (!damaged) Object.keys(v.l).forEach(k => { if (BAD(k)) return; const L = cleanLesson(v.l[k]); if (L) data.l[k] = L; else partial = true; });
      /* keep whatever else the stored object had (forward compatible) */
      if (isObj(v)) Object.keys(v).forEach(k => { if (k !== "l" && !BAD(k)) data[k] = v[k]; });
      data.v = 1;
    }
    /* ENG-02: nothing is written on page load. A read can succeed while writes fail (private mode,
       quota), so until practice's own first save the answer comes from path.js's existing probe
       (pp.path.storage-check, the one key a fresh load may write); after that, from the save itself. */
  })();
  let saved = false;
  function writable() {
    if (!available) return false;
    if (saved) return true;
    return !(window.PP_PATH && window.PP_PATH.storageOK && !window.PP_PATH.storageOK());
  }

  function save() {
    saved = true;
    try { window.localStorage.setItem(KEY, JSON.stringify(data)); available = true; unsaved = false; damaged = false; partial = false; }
    catch (e) { available = false; unsaved = true; }
    document.querySelectorAll(".practice-storage").forEach(syncNotice);
  }
  const pad2 = n => String(n).padStart(2, "0");
  function today() { const d = new Date(); return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }

  /* ---------- reading (never writes) ---------- */
  const lesson = k => data.l[k] || null;
  /* ENG-06: a signature of each core and similar question (prompt, choices, key, passages ...), set by
     skills.js at registration. A record saved for a different version of the question is "stale": it is
     read as not started, and its facts are kept on this device (as prev) when the child next saves. */
  const sigs = Object.create(null);
  function setSigs(k, map) { sigs[k] = map; }
  const stale = (k, id, r) => !!(r && typeof r.sig === "string" && sigs[k] && sigs[k][id] && r.sig !== sigs[k][id]);
  function raw(k, id, similar) { const L = lesson(k); return L ? (L[similar ? "s" : "i"][id] || null) : null; }
  function rec(k, id, similar) { const r = raw(k, id, similar); return r && !stale(k, id, r) ? r : null; }
  function changed(k) { const L = lesson(k); if (!L) return 0; return ["i", "s"].reduce((n, f) => n + Object.keys(L[f]).filter(id => stale(k, id, L[f][id])).length, 0); }
  const touched = r => !!r && (r.ok || r.x || r.w > 0 || r.h > 0 || r.tm > 0 || r.howAfter || r.tmAfter || (r.cr && (r.cr.done || !!r.cr.text)) || r.r !== undefined);
  /* one definition, used everywhere (§2.2.3) */
  const STATUS = {
    shown: "Answer shown",
    taught: "Right after Teach Me",
    hints: "Right with hints",
    retry: "Right after another try",
    first: "Right on the first try",
    cr: "Written and checked against the list",
    none: "Not finished"
  };
  const SHORT = { shown: "Answer shown", taught: "After Teach Me", hints: "With hints", retry: "After a retry", first: "First try", cr: "Written", none: "Not finished" };
  function statusOf(r) {
    if (!r) return "none";
    if (r.x) return "shown";
    if (r.cr) return r.cr.done ? "cr" : "none";
    if (r.ok && r.tm > 0) return "taught";   /* Teach Me before the answer: never independent */
    if (r.ok && r.h > 0) return "hints";
    if (r.ok && r.w > 0) return "retry";
    if (r.ok) return "first";
    return "none";
  }
  function status(k, id, similar) { return statusOf(rec(k, id, similar)); }
  /* a set's state from its five core ids */
  function setState(k, ids, setNo) {
    const st = ids.map(id => status(k, id));
    const done = st.every(s => s !== "none");
    const L = lesson(k);
    const started = ids.some(id => touched(rec(k, id)));
    let pos = st.findIndex(s => s === "none");
    if (L && L.at && L.at.set === setNo && st[L.at.pos] === "none") pos = L.at.pos;
    return { statuses: st, done, started, pos: pos < 0 ? 0 : pos, finishedCount: st.filter(s => s !== "none").length };
  }
  /* Where a skill opens (question-first): the saved set if it is not finished, else the first unfinished
     set at its first unfinished question; all finished -> { all: true }. Read only. */
  function entry(k, sets) {
    const L = lesson(k), states = sets.map((ids, i) => setState(k, ids, i + 1));
    const atSet = L && L.at && states[L.at.set - 1] && !states[L.at.set - 1].done ? L.at.set : 0;
    const first = atSet || (states.findIndex(s => !s.done) + 1);
    if (!first) return { all: true, set: sets.length, pos: 0, started: true, states };
    return { all: false, set: first, pos: states[first - 1].pos, started: states[first - 1].started, states };
  }
  /* Per-question help facts for grown-ups (read only). */
  function helpOf(k, id) {
    const r = rec(k, id) || {};
    return { status: statusOf(r), wrong: r.w || 0, hints: r.h || 0, teach: r.tm || 0, step: r.tp || 0, shown: !!r.x, skips: r.sk || 0, first: r.f1 || null, finished: statusOf(r) !== "none" };
  }
  function any(k) { const L = lesson(k); return !!L && (Object.keys(L.i).some(id => touched(L.i[id])) || Object.keys(L.s).some(id => touched(L.s[id]))); }
  function complete(k, ids) { return !!ids.length && ids.every(id => status(k, id) !== "none"); }
  function counts(k, ids) {
    const c = { first: 0, retry: 0, hints: 0, taught: 0, shown: 0, cr: 0, none: 0 };
    ids.forEach(id => { c[status(k, id)]++; });
    return c;
  }
  function similarCounts(k) {
    const L = lesson(k), c = { tried: 0, right: 0 };
    if (L) Object.keys(L.s).forEach(id => { const r = L.s[id]; if (touched(r)) c.tried++; if (r.ok && !r.x) c.right++; });
    return c;
  }

  /* ---------- writing (only after a child's action) ---------- */
  function update(k, id, similar, fn, place, opts) {
    if (!data.l[k]) data.l[k] = cleanLesson({});
    const L = data.l[k];
    const bag = L[similar ? "s" : "i"];
    if (bag[id] && stale(k, id, bag[id])) {
      const old = Object.assign({}, bag[id]); delete old.prev;
      bag[id] = cleanRec({ w: 0, h: 0, prev: old }, similar);
    }
    /* a similar question offered again starts a new attempt; the earlier attempts are kept, never erased,
       in `past` (newest last, at most ten). The record's own fields keep their meaning: the latest attempt. */
    if (opts && opts.again && bag[id] && touched(bag[id])) {
      const old = Object.assign({}, bag[id]); const past = Array.isArray(old.past) ? old.past : []; delete old.past;
      bag[id] = cleanRec({ w: 0, h: 0, past: past.concat([old]).slice(-10) }, similar);
    }
    const r = bag[id] || (bag[id] = cleanRec({ w: 0, h: 0 }, similar));
    if (sigs[k] && sigs[k][id]) r.sig = sigs[k][id];
    fn(r);
    r.d = today();
    r.t = Date.now();   /* additive: when it was last used, for choosing the least recently used similar question */
    if (Array.isArray(r.log) && r.log.length > 40) r.log = r.log.slice(-40);
    if (place) { if (place.rev) L.rev = place.rev; if (place.set) L.at = { set: place.set, pos: place.pos || 0 }; }
    save();
    return r;
  }
  function log(r, ev) { r.log = (Array.isArray(r.log) ? r.log : []).concat([Object.assign({ d: today() }, ev)]); }
  function place(k, setNo, pos, rev) {
    /* the place is saved only with a child's action (moving to another question) */
    if (!data.l[k]) data.l[k] = cleanLesson({});
    data.l[k].at = { set: setNo, pos }; if (rev) data.l[k].rev = rev;
    save();
  }

  /* ---------- honest notice ---------- */
  function noticeText() {
    if (!writable()) return "Saving is unavailable. Your practice answers are kept only while this page stays open. If you reload or close it, this practice starts again from the beginning.";
    if (damaged) return "Saved practice could not be read, so it starts fresh. Nothing else was changed.";
    if (partial) return "Some saved practice could not be read, so those questions start fresh. Nothing else was changed.";
    return "";
  }
  function syncNotice(p) { const t = noticeText(); if (p.textContent !== t) p.textContent = t; p.hidden = !t; }
  function notice(cls) {
    const p = document.createElement("p");
    p.className = "note practice-storage" + (cls ? " " + cls : "");
    p.setAttribute("role", "status");
    syncNotice(p);
    return p;
  }

  window.PP_PRACTICE = {
    KEY, STATUS, SHORT, statusOf, status, rec, raw, changed, setSigs, lesson, setState, entry, helpOf, any, complete, counts, similarCounts, touched,
    update, log, place, notice, noticeText, canSave: () => writable(), damaged: () => damaged
  };
})();

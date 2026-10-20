/* Peach Prep — namespace, set registry and small DOM helpers.
   Loaded first. Set files call PP.addSet({...}). */
(function () {
  "use strict";
  const sets = [];
  const byId = {};

  const tasks = [];
  const taskById = {};
  function addTask(t) {
    if (!t || !t.id || taskById[t.id]) return;
    t.sources = t.sources || [];
    tasks.push(t); taskById[t.id] = t;
  }

  function addSet(s) {
    if (!s || !s.id || byId[s.id]) return;
    s.items = s.items || [];
    s.passages = s.passages || [];
    sets.push(s);
    byId[s.id] = s;
  }

  /* ---------- DOM helpers ---------- */
  function make(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }
  function clear(n) { while (n && n.firstChild) n.removeChild(n.firstChild); }
  function el(id) { return document.getElementById(id); }

  /* Fisher-Yates on a copy. */
  function shuffled(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------- passage references "p1:3:2" (1-based, raw paragraph index) ---------- */
  function parseRef(ref) {
    const m = /^([a-z0-9]+):(\d+):(\d+)$/i.exec(ref || "");
    return m ? { pid: m[1], para: Number(m[2]), sent: Number(m[3]) } : null;
  }
  function passageOf(set, pid) { return (set.passages || []).find(p => p.id === pid) || null; }
  function sentenceAt(set, ref) {
    const r = parseRef(ref);
    if (!r) return null;
    const p = passageOf(set, r.pid);
    if (!p) return null;
    const blocks = p.lines || p.paragraphs || [];
    const b = blocks[r.para - 1];
    return b ? (b[r.sent - 1] || null) : null;
  }
  /* The paragraph number the CHILD sees: headings and captions are not
     numbered, so count body paragraphs only. Poems show stanza/line. */
  function isHeading(s) { return /^## /.test(s); }
  function isCaption(s) { return /^Caption: /.test(s); }
  function isBox(s) { return /^Box: /.test(s); }
  function visibleLabel(set, ref) {
    const r = parseRef(ref);
    if (!r) return "";
    const p = passageOf(set, r.pid);
    if (!p) return "";
    const multi = (set.passages || []).length > 1;
    const pre = multi ? (p.title ? "“" + p.title + "”, " : "") : "";
    if (p.lines) return pre + "stanza " + r.para + ", line " + r.sent;
    if (p.draft) return "";   /* student drafts number their sentences in the text: (1), (2) ... */
    const paras = p.paragraphs || [];
    const first = paras[r.para - 1] && paras[r.para - 1][0];
    if (first && isHeading(first)) return pre + "heading";
    if (first && isCaption(first)) return pre + "caption";
    if (first && isBox(first)) return pre + "text box";
    let n = 0;
    for (let i = 0; i < r.para; i++) {
      const f = paras[i] && paras[i][0];
      if (f && !isHeading(f) && !isCaption(f) && !isBox(f)) n++;
    }
    return pre + "paragraph " + n;
  }

  window.PP = {
    addSet, sets, byId, addTask, tasks, taskById, make, clear, el, shuffled,
    parseRef, passageOf, sentenceAt, visibleLabel, isHeading, isCaption, isBox
  };
})();

/* Peach Prep — namespace, set registry and small DOM helpers.
   Loaded first. Set files call PP.addSet({...}). */

/* Feature flags (PP-004). Every flag is OFF for visitors. A flag can be turned on only
   by a development setting on this device, never by stored progress:
     - the address has ?dev=retained  (several: ?dev=retained,other), or
     - localStorage "pp.dev" holds "retained" (same comma list).
   The object is frozen once set, so page code cannot switch a flag on later.
   retained: the "Retained" status (docs/audits/PP-004-MASTERY-RECOMMENDATIONS.md). */
(function () {
  "use strict";
  const on = {};
  const add = v => String(v || "").split(",").forEach(x => { x = x.trim().toLowerCase(); if (x) on[x] = true; });
  try { add(new URLSearchParams(window.location.search).get("dev")); } catch (e) { /* no address */ }
  try { add(window.localStorage.getItem("pp.dev")); } catch (e) { /* storage blocked */ }
  window.PP_FLAGS = Object.freeze({ retained: !!on.retained });
})();

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

  /* ---------- tabs (PP-003 D15) ----------
     A role=tablist gets a roving tabindex (only the selected tab is in the Tab
     order) and Left/Right/Home/End keys that select and focus a tab. Each tab
     keeps its own click handler; the keys just click it. */
  function syncTabs(list) {
    const tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    const sel = tabs.find(t => t.getAttribute("aria-selected") === "true") || tabs[0];
    tabs.forEach(t => { t.tabIndex = t === sel ? 0 : -1; });
  }
  function tablist(list) {
    if (!list || list.dataset.tabs) return;
    list.dataset.tabs = "1";
    list.addEventListener("keydown", e => {
      const tabs = Array.from(list.querySelectorAll('[role="tab"]')).filter(t => t.getClientRects().length);
      const i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      const n = tabs.length;
      const j = e.key === "ArrowRight" ? (i + 1) % n : e.key === "ArrowLeft" ? (i + n - 1) % n : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : -1;
      if (j < 0) return;
      e.preventDefault();
      const id = tabs[j].id;
      tabs[j].click();
      syncTabs(list);
      const t = (id && document.getElementById(id)) || tabs[j];   /* the step tabs are rebuilt on click */
      t.focus();
    });
    new MutationObserver(() => syncTabs(list)).observe(list, { subtree: true, childList: true, attributes: true, attributeFilter: ["aria-selected"] });
    syncTabs(list);
  }

  window.PP = {
    tablist, syncTabs,
    addSet, sets, byId, addTask, tasks, taskById, make, clear, el, shuffled,
    parseRef, passageOf, sentenceAt, visibleLabel, isHeading, isCaption, isBox
  };
})();

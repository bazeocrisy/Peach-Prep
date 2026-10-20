# PP-003 Phase A: Repository inventory

- **Repository:** local clone `/home/claude/peach-prep`, branch `pp-003-audit` (from `.git/HEAD`). The brief says it is based on `main` at 66e536b, v2.1.0.
- **Audited:** 2026-10-20. Files were read as they stood on disk at about 15:20 that day. Other agents work in parallel, and git commands were not allowed, so I could not confirm a clean working tree.
- **Scope:** inventory and counts only. Nothing in the repo was changed except this file.

## 0. Summary

| What | Count | Notes |
|---|---|---|
| Rows in `standards.js` | **147** | 106 lettered expectations + 41 GUM rows. These are not 147 standards. |
| Official top-level standards | **30** | 19 grade 3 (4 Foundations, 10 Texts, 5 Language) + 11 K-12 Practices standards |
| Grade 3 lettered expectations | **53** | 10 Foundations, 29 Texts, 14 Language (GC.2 + V) |
| GUM chart rows (3.L.GC.1) | **41** | M 8, R 18, I 11, C 4 |
| Embedded K-12 Practices | **53** | expectations under 11 practice standards |
| Classroom-only Foundations expectations | **10** | |
| Rows marked on the test | **69** | 43 lettered expectations (27 reading, 16 writing) + 26 GUM M/R rows |
| Active lessons | **99** | 17 lesson files, all in the manifest |
| Lesson practice items | **501** | 289 Practice Together + 212 Try It Yourself |
| Lesson test items | **478** | **647** points, in 95 tests. The 4 hands-on lessons have no test. |
| Lesson questions in all | **979** | |
| Extended writing tasks | **2** | W-TASK-01 and W-TASK-02, 8 points each, scored by a grown-up |
| Mixed-practice sets (excluding PT-1) | **14** | 123 items, 167 points |
| Practice Test 1 | **1** | 24 items, **31** points (17 one-point + 7 two-point) |
| All question objects on the site | **1,126** | 979 lesson + 147 set items, plus the 2 essay tasks |
| Items with `std` listing more than one code | **51** | +2 essay tasks = 53 |
| Duplicate item IDs / shared items / reused passages | **0 / 0 / 0** | |
| Items referencing a missing passage or sentence | **0** | |
| Lessons missing from the catalog, or the reverse | **0 / 0** | |
| Images used by any question | **0** | The site has no image files at all. |

**Headline discrepancies.** Each one is explained in §3.
1. The blueprint (page 1, checked against the page image) lists **3.L.GC.1 GUM under Constructing Texts only**. But `standards.js` marks all 26 GUM Master/Reinforce rows `tested: "both"`, and `site.js` claims, SPEC §2 and the parent guide all put 3.L.GC.1 under Interpreting Texts too. The total of 69 is unaffected; the reading/writing split is wrong for those 26 rows.
2. The home progress bar says **"0 of 74 skills that are on the test"**, while STATUS-2.0 says 69. 74 counts lessons, not standards: the 69 one-per-expectation lessons plus 5 text-structure lessons that re-target 3.T.SS.1.a.
3. STATUS-2.0 says 94 lessons and 923 questions; there are now 99 and 979. The difference is the 5 TS-* lessons (55 items) plus one item, SK-TT1b-P6, added in the clue-words upgrade. 923 + 55 + 1 = 979. "About 980" is right, but only for **lesson** questions: the site holds 1,126 in all.
4. The ALDs are a **DRAFT** (October 2025), but nothing on the page says so. Only `alds.js` and SPEC do.
5. On-page claims that are too strong:
   - The meta description says "every standard… each with a lesson, practice and a test", but 4 hands-on lessons have no test and the 53 Practices have no lesson.
   - The parent guide says "Peach Prep practices each of these" about 8 GaDOE item formats. The engine has 7 types, with no drag-and-drop and no separate multiple-part type.
6. Legacy data is still present:
   - The `status` field in standards.js ("taught" / "partly" / "not yet") is read by no JS.
   - The `ready` field in site.js is unused.
   - The `soon` field ("Coming Thursday" / "Coming Friday") is an unreachable fallback.
   - Passage `lexile` and `genre` are never displayed.

---

## 1. Architecture (A1)

### 1.1 What loads in production

There is no build step. `index.html` loads 13 scripts in this order:

`js/pp.js`, `js/data/site.js`, `js/data/standards.js`, `js/data/alds.js`, `js/data/habits.js`, `js/data/manifest.js`, `js/data/catalog.js`, `js/engine/items.js`, `js/engine/player.js`, `js/skills.js`, `js/writing.js`, `js/parents.js`, `js/app.js`

`alds.js` and `habits.js` have `onerror` fallbacks to `null`.

On `DOMContentLoaded`, `app.js` `init()` → `loadSets()` injects one `<script>` per manifest entry:
- `js/data/sets/<id>.js` for the 15 ids in `manifest.sets`
- `js/data/tasks/<id>.js` for the 2 ids in `manifest.tasks`
- `js/data/lessons/<id>.js` for the 17 ids in `manifest.lessons`

It then sorts sets and tasks into manifest order. A Playwright load on port 8401 confirmed exactly these 47 script URLs, with no page errors. The only failed request was Google Fonts, which the sandbox blocks.

`js/data/manifest.js`: `build: "Peach Prep 2.1.0"`.
- **Sets (15):** R-LIT-01, R-LIT-02, R-POE-01, R-INF-01, R-INF-02, R-OPN-01, W-REV-01, W-REV-02, L-GRM-01, L-GRM-02, L-GRM-03, L-VOC-01, L-VOC-02, L-VOC-03, PT-1
- **Tasks (2):** W-TASK-01, W-TASK-02
- **Lessons (17 files):** T-C, T-SS, T-T1, T-TS, T-T2, T-T34, T-RA, L-GC2, L-GUM1–5, L-V12, L-V3, F-PF, F-FH

Every `.js` file in `js/data/sets/`, `js/data/tasks/` and `js/data/lessons/` is in the manifest, and every manifest entry has a file.

**Not live.** No HTML or JS references these, so they are history only. They are still publicly downloadable from GitHub Pages, because the whole repo root is served.
- `docs/pre-release-fix/` (PT-1, R-INF-01, R-POE-01)
- `docs/pre-release-fix-writing/` (W-REV-01, W-TASK-01, W-TASK-02)
- `docs/pre-review-language/` (6 L-* sets)
- `docs/pre-review-pt1/` (PT-1)
- `docs/pre-review-reading/` (6 R-* sets)
- `docs/pre-review-writing/` (W-REV-01/02, W-TASK-01/02)
- `docs/pre-simplify/` (R-INF-01, R-INF-02, R-OPN-01)

Each of these 26 files differs from its live counterpart, by 6 to 181 changed diff lines. None is an identical copy, and none has a lesson counterpart.

### 1.2 Components and paths

| Component | Files | What it does |
|---|---|---|
| Entry point | `index.html` | 9 screens as `<section class="screen">`: home, skill, clues, habits, mixed, section, player, write, parents. `<main id="main">`, skip link, inline SVG favicon. |
| Namespace and registry | `js/pp.js` | `PP.addSet` and `PP.addTask` (they ignore duplicate ids); DOM helpers; passage refs `"p1:3:2"`; `visibleLabel` (headings, `Caption:` and `Box:` lines are not numbered) |
| Standards database | `js/data/standards.js` → `window.PP_STANDARDS` (147 rows) | **Generated** by `verification/gen-standards.py` from `/home/claude/alignment/ga-grade3-ela-alignment.json`. That JSON is **outside the repo**, so the generator cannot be re-run from a clean clone. The tested/not-tested lists are hard-coded in the generator from blueprint page 1. |
| ALDs | `js/data/alds.js` → `PP_ALDS` | 15 standards (all tested grade 3 Texts and Language standards), 4 levels, bullets verbatim. Source comment says DRAFT, October 2025. |
| Practices ("Everyday habits") | `js/data/habits.js` → `PP_HABITS` | 53 entries, one per K-12 Practice expectation, none missing or extra |
| Site content | `js/data/site.js` → `PP_SITE` | GaDOE source links; 4 mixed-practice section cards; tool links; blueprint design numbers, claims, DOK; rubric summary; Writer's Checklist (verbatim); "How to use" plan |
| Catalog (categories) | `js/data/catalog.js` → `PP_CATALOG`, `PP_STRUCTURES`, `PP_STRUCTURES_TRICKY` | 5 categories, 18 lettered groups (A–R), 101 entries (99 lesson keys + 2 `task:` entries); six text structures for the Clue Word Cheat Sheet |
| Lessons | `js/data/lessons/*.js` (17 files, 99 `PP.addLesson` calls) | Schema: SPEC §8 and §8b. `js/skills.js` `addLesson()` turns each lesson into up to 3 ordinary sets: `SK:<key>:p` (Practice Together), `SK:<key>:y` (Try It Yourself) and `SK:<key>:t` (Test). |
| Practice-question sets | `js/data/sets/*.js` (15) | `PP.addSet`. Sections: reading (6), writing/revising (2), language (6), test (1: PT-1, `kind: "form"`). |
| Extended writing tasks | `js/data/tasks/*.js` (2), UI in `js/writing.js` | Read, Plan, Write, Check (Writer's Checklist), For parents (rubric and model essay). Nothing is machine-scored. |
| Item engine | `js/engine/items.js` | 7 item types (`mc`, `ms`, `ebsr`, `dropdown`, `hottext`, `order`, `match`). For each: render, score (SPEC §5, with partial credit on 2-point items), narrow (Help step 2), review text. |
| Player and scoring | `js/engine/player.js` | Practice: Check, Help me (3 steps), Previous/Next. Try: help unlocks after one wrong try. Test: no hints, confirm, submit, then results with points by skill area (`skillOf(std[0])`), review and Show me how. For skill tests it calls `PP_SKILLS.afterTest`. |
| Skill pages and progress | `js/skills.js` | Home list, category cards, Up next, progress bar, search and filters, skill page steps, hands-on activities (fluency timer, cursive trace sheet, grown-up check), habits page, clue sheet |
| Parent guide | `js/parents.js` | Tabs: test, standards ("Every standard", 147 rows), essay, plan |
| Shell and routing | `js/app.js` | Screens, hash routes, the guard on leaving a test, set loading |
| Styles and fonts | `css/styles.css`, `fonts/` | Two self-hosted Playwrite US Trad woff2 files and their OFL licence. Poppins and Nunito come from Google Fonts. |

### 1.3 Lesson structure, in practice

Each lesson has:
- `code`, plus `key` when it differs from the code (5 lessons: TS-SEQ, TS-CE, TS-PS, TS-CC, TS-DESC, all coded 3.T.SS.1.a)
- `codes[]` (6 lessons: the 5 TS lessons and 3.T.T.1.b)
- `title`, `teach`, `learn` (234 worked examples in all), `parent`, `passages`, `practice`, `test`
- optional `write` (17 lessons), `clues` (12), `coach` (11), `activity` (4) and `check` (4)

**The split rule** (`skills.js` `addLesson`): `half = practice.length >= 4 ? ceil(n/2) : n`. The first `half` items are Practice Together and the rest are Try It Yourself. Every lesson with practice has at least 4 items, so the "under 4" branch is never used.

**Item `std`:** it defaults to `[lesson.code]`, not to `codes[]`. So TS-* items are tagged only 3.T.SS.1.a unless an item sets its own `std`.

**Hands-on lessons:**
- 3.F.F.1.b and 3.F.F.1.c use the fluency timer.
- 3.F.H.4.a and 3.F.H.4.b use the cursive trace sheet.
- All 4 have no practice or test items. Their steps are Learn It, Watch Me, Practice, Check, and mastery is a grown-up checklist ("Mark this skill mastered").

### 1.4 Progress tracking: keys and states

All storage is browser `localStorage`, wrapped in try/catch. Nothing leaves the device. There are 3 key families:

| Key | Written by | Shape |
|---|---|---|
| `pp.progress.v1` | `skills.js` | `{ <lessonKey>: { taught, learned, practiced, tried, tries, best: {got, max}, mastered, checks: [bool], fluency: [{d, wcpm, acc, p}] (last 12) }, _ui: { lastCat } }` |
| `pp.task.<taskId>` | `writing.js` (status is read in `skills.js`) | `{ plan: {}, draft, checks: [], scores: {} }`. The catalog shows "started" when `draft` is non-empty. |
| `pp.skwrite.<lessonKey>` | `skills.js` `renderWrite` | `{ text, checks: [] }` for the "Your turn to write" box |

How a step gets its flag:
- `taught`: you leave Learn It.
- `learned`: you reveal every Watch Me example.
- `practiced`: you finish Practice Together, run the fluency timer, or press "We practiced this today".
- `tried`: you finish Try It Yourself.
- `tries` and `best`: set on each test submit.
- `mastered`: test points ≥ `ceil(0.8 × max)`, or the grown-up check.

`status(k)` turns these into one of: `mastered`, `started` (any flag), `new`, `none` (no lesson) or `habit` (a Practice with tips).

**Not stored anywhere:** scores on mixed-practice sets and Practice Test 1. Each run is shown and then discarded.

### 1.5 Assessment and scoring engines

- **Per-item scoring:** `js/engine/items.js`, each type's `score(it, resp)` → `{points, max}`. The rules are SPEC §5: partial credit on 2-point `ms`, `ebsr`, `dropdown`, `hottext`, `order` and `match`.
- **Test totals and breakdown:** `player.js` `submit()` sums points and groups them by `skillOf(std[0])`, a prefix table running from 3.T.C to 3.F.
- **Mastery:** `skills.js` `recordTest`. `passMark(max) = ceil(max × 0.8)`. Lesson tests are worth 6 to 9 points each: 25 tests are worth 6, 64 are worth 7, 5 are worth 8 and 1 is worth 9.
- **Mixed-set feedback:** fixed bands, ≥85% and ≥60%, with no storage.
- **Essays:** no machine scoring. The parent scores with the rubric in the For parents tab.

### 1.6 UI and navigation (hash routes)

| Route | Screen |
|---|---|
| `""` | home (5 category cards, Up next, progress bar, search, filters All / On the test / Not mastered, lettered skill list, tool links) |
| `#skill/<key>[/learn\|practice\|try\|test]` | skill page |
| `#clues` | Clue Word Cheat Sheet |
| `#habits` | Everyday habits |
| `#mixed` | "Put it all together": 4 section cards (Reading, Writing, Language, Practice Test) |
| `#reading`, `#writing`, `#language`, `#test` | section list of sets (and tasks) |
| `#play/<setId>/<practice\|try\|test>` | player |
| `#write/<taskId>` | writing task |
| `#parents[/standards\|essay\|plan]` | parent guide |

Navigation behaviour:
- Back and Escape go through `back()`.
- Leaving a test in progress asks for confirmation (in-app buttons, popstate and beforeunload).

### 1.7 Verification scripts and browser tests (`verification/`)

| File | Purpose |
|---|---|
| `check-content.js [--all]` | Schema, references, keys, codes and giveaway clues for sets, tasks and lessons. **Run today with `--all`: PASS, 0 failures, 9 warnings.** It checked "15 sets (147 items), 2 tasks and 99 lessons (979 items)", which agrees with this inventory. |
| `check-writing.js` | Writing tasks and revising sets against SPEC §5c |
| `readability.py` | Approximate Flesch-Kincaid on passages |
| `guard.py [BASE_URL]` | Playwright browser harness: home, every item right and wrong, tests, writing, search, clues, page errors, sideways scroll at 320/375/390. About 20 minutes. Not run in Phase A. |
| `serve.js <root> <port>` | Static server |
| `gen-standards.py` | Writes `js/data/standards.js` from the external alignment JSON (see §1.2) |
| `shots/` | 118 PNG screenshots, **git-ignored** (`.gitignore`: `verification/shots/`, `node_modules/`) |

SPEC §7 names `verification/guard.js`; the file is actually `guard.py`.

### 1.8 Deployment

- There is **no `.github/` folder**: no workflow and no Pages config in the repo. There is also no `.nojekyll`, no `CNAME` and no `_config.yml`.
- README says Pages serves the `main` branch. That points to classic "deploy from branch" at the repo root, with default Jekyll processing.
  - No file starts with `_`, so Jekyll skips nothing.
  - Because the whole root is published, `docs/` (review notes, briefs, the `pre-*` JS backups) and `verification/` are public too.
  - I could not see the Pages settings themselves. **UNVERIFIED.**
- `.git/config` remote: `https://github.com/bazeocrisy/peach-prep`. Live URL from the README: `https://bazeocrisy.github.io/Peach-Prep/`.
- **Live check, 2026-10-20:**
  - `curl` through the sandbox proxy was refused (403), so that path is **UNVERIFIED**.
  - Through WebFetch:
    - `…/js/data/lessons/T-TS.js` exists live, with 5 `PP.addLesson` calls.
    - `…/js/data/manifest.js?v=pp003` returned `build: "Peach Prep 2.1.0"` with T-TS in `lessons`.
    - The same URL **without** the query string returned an older `2.0.0` manifest without T-TS. That was most likely a cached copy, from the fetch tool or the CDN.
  - `manifest.js` is loaded with no cache-busting, so a returning visitor's browser may briefly hold an older manifest after a release. This is a low-severity observation, not a confirmed fault.

### 1.9 Images and graphic assets

**Complete list of binary or graphic files that are not screenshots:**
- `fonts/playwrite-us-trad-latin-400-normal.woff2`
- `fonts/playwrite-us-trad-guides-latin-400-normal.woff2`
- `fonts/OFL-Playwrite.txt`, the licence

**Inline graphics only:**
- the favicon, an SVG data URI in `index.html`
- 4 inline SVG icon paths (`book`, `pencil`, `abc`, `flag`) in `js/app.js` `ICON`
- CSS shapes (`.brand-mark`, progress rings)

**Empty folder:** `assets/` (its only entry is `.`).

**No question or lesson uses an image.**
- No `<img>`, no image URL and no image field appears in any item, lesson, set or task. Scanned by regex over every item object.
- The Playwright page reported `document.images` = 0.
- Picture-related content is taught in words:
  - text `Box:` sidebars: 9 in lessons, 1 in R-INF-01
  - one described slide in the T-C.js 3.T.C.1.c example (lines 431–435: "Picture: …", "Caption: …")
  - STATUS-2.0, "Known limits": the image parts of 3.L.V.3.a and 3.T.C.1.b are taught in words.

`verification/shots/*.png` (118 files) are test screenshots, git-ignored, and not part of the site.

### 1.10 Active vs. historical docs

| Status | Files |
|---|---|
| **Active (current spec or status)** | `README.md` (partly stale: its "Structure" list omits `skills.js`, `catalog.js`, `habits.js` and `lessons/`), `docs/SPEC.md` (§8's "four steps" and "home lists every standard" are superseded by §8b and the 2.1 catalog), `docs/STATUS-2.1.md` (current release notes) |
| **Active process briefs** (still describe how to write or review) | `docs/LESSON-BRIEF.md`, `docs/REVIEW-BRIEF.md`, `docs/VERIFY-BRIEF.md`, `docs/FINAL-VERIFY-BRIEF.md`. They describe the 2.0 four-step flow. |
| **Historical** | `docs/STATUS-1.0.md`, `docs/STATUS-2.0.md`, `docs/audit-skills.md` (audited build 1.0.0 / the 2.0 home: "147 rows, 69 rows", four steps), `docs/release-review-1.md`, `docs/release-review-writing.md`, `docs/review-{reading,language,writing,pt1}-{A,B}.md`, all of `docs/review-lessons/` (81 files) |
| **Historical code backups (not loaded)** | `docs/pre-*/*.js` (26 files, §1.1) |

---

## 2. Independent counts (A2)

### 2.1 Method and reproduction

I used two independent loaders, and they agree on every shared number.

**1. Node, production load order.** `inventory.js` loads, in a `vm` context with stub `window`/`document`/`localStorage`:
- the `<script src>` tags parsed from `index.html`, in order, including the **real** `pp.js` and `skills.js`, so `PP.addLesson` builds the `SK:*` sets exactly as the browser does
- then the manifest's sets, tasks and lessons, in `loadSets()` order

```
node /tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/inventory/inventory.js /home/claude/peach-prep          # summary JSON
node /tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/inventory/inventory.js /home/claude/peach-prep --json   # plus per-lesson table
```

**2. Playwright, the real page.**

```
node verification/serve.js . 8401 &
python3 /tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/inventory/browser_count.py http://localhost:8401/
```

It reads the `PP` globals after load and also captures:
- the on-page text: category cards, progress line, the On the test filter, mixed cards
- the parent "N of 147" count
- the habit groups
- the script list and `document.images`

**3. Cross-check:** `node verification/check-content.js --all` reports 147 set items and 979 lesson items.

**Self-contained snippet** (needs only the repo). Run it from the repo root with `node quick.js`:

```js
const fs = require("fs"), vm = require("vm"), n = () => {};
const el = () => ({ addEventListener: n, appendChild: n, setAttribute: n, style: { setProperty: n }, classList: { add: n, remove: n } });
const window = { addEventListener: n, localStorage: { getItem: () => null, setItem: n } };
const ctx = { window, document: { createElement: el, getElementById: el, querySelectorAll: () => [], addEventListener: n }, localStorage: window.localStorage, location: { hash: "" } };
vm.createContext(ctx);
const run = f => { vm.runInContext(fs.readFileSync(f, "utf8"), ctx); ctx.PP = window.PP; };
[...fs.readFileSync("index.html", "utf8").matchAll(/<script\s+src="([^"]+)"/g)].forEach(m => run(m[1]));
const M = window.PP_MANIFEST;
M.sets.forEach(i => run("js/data/sets/" + i + ".js")); M.tasks.forEach(i => run("js/data/tasks/" + i + ".js")); M.lessons.forEach(i => run("js/data/lessons/" + i + ".js"));
const PP = window.PP, S = window.PP_STANDARDS, sum = (a, f) => a.reduce((x, y) => x + f(y), 0);
const sk = PP.sets.filter(s => s.section === "skill"), mx = PP.sets.filter(s => s.section !== "skill"), part = p => sk.filter(s => s.part === p);
console.log({ build: M.build, standardsEntries: S.length, onTest: S.filter(s => ["reading","writing","both"].includes(s.tested)).length,
  gum: S.filter(s => s.gum).length, lessons: Object.keys(PP.lessons).length,
  together: sum(part("p"), s => s.items.length), tryIt: sum(part("y"), s => s.items.length),
  testItems: sum(part("t"), s => s.items.length), testPoints: sum(part("t"), s => sum(s.items, i => i.points)),
  mixedSets: mx.length, mixedItems: sum(mx, s => s.items.length), mixedPoints: sum(mx, s => sum(s.items, i => i.points)), tasks: PP.tasks.length });
```

Output on 2026-10-20: `{ build: 'Peach Prep 2.1.0', standardsEntries: 147, onTest: 69, gum: 41, lessons: 99, together: 289, tryIt: 212, testItems: 478, testPoints: 647, mixedSets: 15, mixedItems: 147, mixedPoints: 198, tasks: 2 }`

### 2.2 Standards database

**What the 147 rows of `standards.js` are made of:**

| Strand | Rows | Kind of row | `tested` value |
|---|---|---|---|
| Foundations | 10 | lettered expectations under 4 standards: 3.F.P.4 (a–c), 3.F.F.1 (a–d), 3.F.H.3 (a), 3.F.H.4 (a–b) | `classroom` ×10 |
| Texts | 29 | lettered expectations under 10 standards (3.T.C.1–2, 3.T.SS.1–2, 3.T.T.1–4, 3.T.RA.1–2) | `reading` 19, `writing` 10 |
| Language (not GUM) | 14 | lettered expectations under 3.L.GC.2 (a–d), 3.L.V.1 (a–b), 3.L.V.2 (a–c) and 3.L.V.3 (a–e) | `reading` 8, `writing` 6 |
| Language (GUM) | 41 | one row per grade 3 GUM chart row under 3.L.GC.1 (code form `3.L.GC.1:<M\|R\|I\|C>:<slug>`) | `both` 26 (M 8 + R 18), `no` 15 (I 11 + C 4) |
| Practices | 53 | lettered expectations under 11 K-12 standards: EICC.1–4, ST.1–2, AC.1–3, CP.1–2 | `embedded` ×53 |
| **Total** | **147** | 106 lettered + 41 GUM | on the test = 27 + 16 + 26 = **69** |

**Top-level standards: 30.**
- 19 grade 3:
  - 4 Foundations
  - 10 Texts
  - 5 Language: 3.L.GC.1, 3.L.GC.2, 3.L.V.1, 3.L.V.2, 3.L.V.3
- 11 K-12 Practices standards

**Grade 3 standards on the test:** all 15 Texts and Language standards. The 4 Foundations standards are not on it.

**The 43 tested lettered expectations match blueprint page 1 exactly:**
- Interpreting Texts, 27: C.1 a,b; C.2 a,c; SS.1 a; SS.2 a; T.1 a–d; T.2 a–c; T.3 a; T.4 a; RA.1 a,b; RA.2 a,b; GC.2 a; V.1 a; V.2 a,b; V.3 a–d
- Constructing Texts, 16: C.1 c; SS.1 b–d; SS.2 b; T.1 e; T.2 d; T.3 c; T.4 b; RA.1 c; GC.2 b–d; V.1 b; V.2 c; V.3 e (printed "5.L.V.3 (e)" in the blueprint, confirmed on the page image)

**Excluded upstream.** The external alignment JSON has 155 rows. `gen-standards.py` drops 8 rows marked `"not applicable"`:
- 3.L.GC.2.e, 3.L.V.2.d
- 3.T.C.2.b, 3.T.C.2.d
- 3.T.SS.2.c
- 3.T.T.3.b, 3.T.T.3.d
- 3.T.RA.2.c

None of these is on the blueprint. I could not check against the official K-12 standards document whether they really have no grade 3 text: it is not among the uploaded sources. **UNVERIFIED.**

**ALDs:** 15 standards are covered, every tested grade 3 Texts and Language standard. Foundations and Practices have none, which is expected.

### 2.3 Lessons, by catalog category

| Category | Catalog entries | Lessons | Tasks | Practice (Together / Try) | Test items | Test pts | Lessons touching an on-test code | Hands-on |
|---|---|---|---|---|---|---|---|---|
| Reading Foundations | 10 | 10 | 0 | 37 (21 / 16) | 32 | 42 | 0 | 4 |
| Reading | 24 | 24 | 0 | 130 (72 / 58) | 119 | 162 | 24 | 0 |
| Writing | 12 | 10 | 2 | 52 (30 / 22) | 50 | 66 | 10 | 0 |
| Vocabulary | 10 | 10 | 0 | 53 (31 / 22) | 52 | 70 | 10 | 0 |
| Grammar and Mechanics | 45 | 45 | 0 | 229 (135 / 94) | 225 | 307 | 30 | 0 |
| **Total** | **101** | **99** | **2** | **501 (289 / 212)** | **478** | **647** | **74** | **4** |

**How the categories are built:**
- **Reading:** the 19 reading-only Texts expectations + 5 TS-* text-structure lessons.
- **Writing:** the 10 writing-only Texts expectations + 2 essay tasks.
- **Vocabulary:** all 10 3.L.V expectations.
- **Grammar:** 4 3.L.GC.2 expectations + 41 GUM rows. The 15 I/C rows sit in group R, "Getting ahead".
- **Foundations:** all 10.

**Lessons that are not one-per-code:**
- Lessons by file: T-C 5, T-SS 6, T-T1 5, T-TS 5, T-T2 4, T-T34 4, T-RA 5, L-GC2 4, L-GUM1 9, L-GUM2 9, L-GUM3 8, L-GUM4 8, L-GUM5 7, L-V12 5, L-V3 5, F-PF 5, F-FH 5. Total 99.
- 94 distinct codes are targeted, exactly the 94 non-Practice rows, so every non-Practice row has at least one lesson. The 53 Practices have habit tips instead.
- Codes targeted by more than one lesson:
  - 3.T.SS.1.a: 7 lessons (its own, 3.T.T.1.b and the 5 TS-* lessons)
  - 3.T.T.2.b: 3 (its own, TS-SEQ, TS-CE)
  - 3.T.T.1.b, 3.T.T.2.a and 3.T.T.2.c: 2 each
  - This is why "skills on the test" (74) is larger than "standards on the test" (69).
- Practice size per lesson: 4 items ×1, 5 ×72, 6 ×17, 7 ×5, 0 ×4 (hands-on).
- Test size per lesson: 4 items ×2, 5 ×88, 6 ×5, 0 ×4.

**Questions on and off the test:** lessons that touch an on-test code hold 760 questions; the other 25 lessons (Foundations and GUM I/C) hold 219.

### 2.4 Mixed practice, the Practice Test and writing tasks

| Set | Section / kind | Passages | Items | Points | 1-pt / 2-pt |
|---|---|---|---|---|---|
| R-LIT-01 Deja's Kite | reading / literary | 1 | 8 | 12 | 4 / 4 |
| R-LIT-02 Half-Moon Cakes | reading / literary | 1 | 7 | 11 | 3 / 4 |
| R-POE-01 Fireflies | reading / poetry (with a paired story) | 2 | 8 | 10 | 6 / 2 |
| R-INF-01 Turtle Tracks | reading / informational | 1 | 8 | 11 | 5 / 3 |
| R-INF-02 The Okefenokee Swamp | reading / paired | 2 | 8 | 12 | 4 / 4 |
| R-OPN-01 Let's Grow a School Garden! | reading / opinion | 1 | 8 | 11 | 5 / 3 |
| W-REV-01 Make the essay stronger | writing / revising | 1 | 8 | 11 | 5 / 3 |
| W-REV-02 Make the story better | writing / revising | 1 | 8 | 11 | 5 / 3 |
| L-GRM-01, -02, -03 | language / grammar | 0 | 10 each | 13 each | 7 / 3 each |
| L-VOC-01, -02, -03 | language / vocabulary | 0 | 10 each | 13 each | 7 / 3 each |
| **Mixed practice subtotal (14 sets)** | | 10 | **123** | **167** | |
| **PT-1 Practice Test 1** | test / form | 3 | **24** | **31** | 17 / 7 |
| **All 15 sets** | | 13 | **147** | **198** | |

**Assessment simulations:** only PT-1. It has no essay, and nothing is stored from it. STATUS-1.0 and STATUS-2.0 list Practice Test 2 as "still to come".

**Writing tasks (2):**

| Task | Sources | Provided reasons | Points | `std` |
|---|---|---|---|---|
| W-TASK-01 "Should our school start a reading buddy program?" | 2 | 2 | 8, scored by a grown-up | 3.T.T.3.c, 3.T.RA.1.c, 3.T.SS.1.c, 3.T.SS.1.d, 3.L.GC.2.b, 3.L.GC.2.c |
| W-TASK-02 "Should our town turn an empty lot into a skate park?" | 2 | 2 | 8, scored by a grown-up | the same 6 codes |

Each task also appears in the Writing catalog (J/L group "Essay practice") and in `#writing`. That is one object shown in two places, so count it once.

**Item types, all 1,126 question objects:** mc 439, dropdown 220, hottext 149, match 134, ms 104, ebsr 55, order 25.

### 2.5 Double counting, multi-standard items, integrity

**No double counting:**
- Duplicate item IDs across the whole site: **0**.
- Item objects shared between two sets: **0**.
- Items whose child-facing content is identical (same type, prompt, choices/rows/slots/options, and the same passage text): **0**.
- Many items reuse a stem template, such as "Match each sentence from the story to the kind of detail it is." in SK-TT1a-P4 and SK-TT1a-T6, but their passages and rows differ.
- Passages reused across sets, tasks or lessons (same first block): **0**. PT-1's 3 passages are new.
- A lesson's `p`, `y` and `t` sets are separate slices of one lesson. Counting items through `practice` + `test` equals counting through the three `SK:` sets: 979.

**Places where one thing is shown more than once.** Count these once:
- The 2 essay tasks: catalog and `#writing`.
- Each standard row: the home or skill page, and the parent "Every standard" list.
- Mixed-set items are also linked from the parent guide's "Where to practice" (via `std`) and from a lesson's "Lesson coming" fallback, which is never shown now, since every non-Practice row has a lesson.

**Items whose `std` has more than one code:** 51 questions + 2 tasks = 53.
- By section: reading 14, writing/revising 3, language 9, PT-1 8, lessons 17, tasks 2.
- 44 of the 53 span more than one top-level standard, for example R-LIT-01-q6 `3.T.T.1.c, 3.T.RA.2.a`.
- The player's results breakdown uses only `std[0]`.
- The parent "Where to practice" counts an item under every code it lists.

**Integrity:**
- Items referencing a missing passage, `source`, or hot-text/sentence ref: **0**. Task evidence refs pointing to missing sources: **0**.
- `std` codes not found in standards.js: **0**. Lesson `codes` not found in standards.js: **0**.
- Lessons missing from the catalog: **0**. Catalog keys without a lesson: **0**. Catalog `task:` entries without a task: **0**. Duplicate catalog entries: **0**.
- Duplicate codes in standards.js: **0**.

---

## 3. Claims compared with counts

| Claim | Where | Observed | Explanation |
|---|---|---|---|
| "147 grade 3 ELA standards" / "lists every… standard, 147 in all" | STATUS-1.0, STATUS-2.0; parent guide "147 of 147 standards shown" | 147 rows | Right as a row count, but the rows are **not standards**: 106 lettered expectations (53 grade 3 + 53 Practices) plus 41 GUM chart rows, under 30 top-level standards. The 8 "not applicable" expectations are dropped upstream (§2.2). |
| "69 skills that are on the test" | STATUS-2.0 (2.0 home bar) | 69 rows tested | Right as rows: 43 lettered expectations + 26 GUM M/R rows. |
| Home: "0 of **74** skills that are on the test" | live page, 2.1 | 74 lessons | The bar counts **lessons** with at least one on-test code: 69 + the 5 TS-* lessons, which re-target 3.T.SS.1.a and others. STATUS-2.1 does not mention the change from 69 to 74. |
| "On the test" filter shows 76 lines | live page | 74 lessons + 2 essay tasks | Tasks always count as on the test. |
| "94 lessons and 923 questions" | STATUS-2.0 | 99 lessons / 979 questions | 2.1 added 5 TS-* lessons (5 × (6 practice + 5 test) = 55 items) and SK-TT1b-P6 (`docs/review-lessons/clues-upgrade.md`). 923 + 55 + 1 = 979. Not verified against the 2.0 tree, because git was off limits. |
| "99 lessons / about 980" | brief (STATUS-2.1 states "five new lessons" but gives no total) | 99 / 979 | Matches, but these are **lesson** questions only. Add 147 set items for 1,126 questions, plus 2 essays. |
| "all 69 on-test standards + all 15 I/C rows + all 10 Foundations" = 94 | STATUS-2.0 | 69 + 15 + 10 = 94 non-Practice rows, all with a lesson | Matches. |
| "53 Georgia K-12 Practices" | STATUS-2.0 | 53 rows, 53 habit entries, 11 groups | Matches. |
| Writing card counts lessons only (10) | STATUS-2.1 "left for later" | card shows "0/10" | Still true. |
| Practice Test 1: 24 items, 31 points | STATUS-1.0 | 24 / 31 | Matches. |
| Reading 34 of 60, Writing 26 of 60 | README, site.js | Blueprint p.1: 34 / 26 | Matches. |
| **3.L.GC.1 in Interpreting Texts** | `site.js` claims row ("3.L.GC.1, 3.L.GC.2 (a)"), SPEC §2, `standards.js` (GUM M/R = `both`, so the skill page says "On the Milestones: Reading and Writing questions") | **Blueprint p.1 page image: "3.L.GC.1\* GUM" appears only in the Constructing Texts column**; Interpreting lists only 3.L.GC.2 (a) | **Discrepancy.** 26 GUM rows should be `writing`, not `both`. The hard-coded `tested="both"` in `gen-standards.py` line ~39 is the source. The total of 69 is unchanged. |
| Constructing Texts claim points: "8 for Techniques" | `site.js` `claimPoints`; SPEC §2 table (RA: "inside the writing task") | Page image: the CT "8" spans **Techniques and Research & Analysis** together | Minor wording difference; for Phase B. |
| "Peach Prep practices each of these": drag-and-drop, drop-down, EBSR, match, reorder, hot text, multiple-part, multiple-select | parent guide, test tab | 7 engine types; no drag interaction (grep finds no "drag"); no separate multiple-part type | Overclaim, unless "order" counts as reorder/drag and "ebsr" as multiple-part. |
| "Every Georgia Grade 3 ELA standard, each with a lesson, practice and a test" | `<meta name="description">` | 4 hands-on lessons have no practice items and no test; 53 Practices have no lesson | Overclaim. |
| "Each one: Learn It, Watch Me, Practice Together, Try It Yourself, Test" | home hero | 95 of 99 lessons have all five; 4 hands-on have four (…Practice, Check) | Small overclaim. |
| ALDs "October 2025" | `site.js` source title, parent guide, skill pages | Source document is marked DRAFT | The page never says "Draft". Only `alds.js` and SPEC do. |
| "147 rows, 69 rows" on the home filters | `docs/audit-skills.md` | now 101 / 76 | Historical: that audit was of the pre-catalog home (build 1.0.0 / 2.0). |
| `verification/guard.js` | SPEC §7 | `verification/guard.py` | Stale file name. |
| Example GUM code `3.L.GC.1:M:irregular-past` | SPEC §5 | real codes are slugs, e.g. `3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs` | Stale example. |

---

## 4. Plain-words glossary

- **Standard:** a numbered Georgia goal, such as **3.T.T.1** ("narrative techniques"). Peach Prep's data covers 30: 19 for grade 3 and 11 K-12 Practices.
- **Expectation (substandard):** a lettered part of a standard, such as **3.T.T.1.a**. The blueprint lists which expectations are tested. Grade 3 has 53 in Peach Prep's data, plus 53 Practices expectations.
- **GUM row:** standard 3.L.GC.1 has no letters. It points to Georgia's Grammar, Usage and Mechanics chart, where each row (for example "use reflexive pronouns") carries a grade 3 level:
  - **M**aster and **R**einforce rows are tested (26).
  - **I**ntroduce and **C**ontinue rows are not tested (15).
  - Peach Prep makes each row its own entry, coded `3.L.GC.1:<level>:<slug>`.
- **Standards entry (row):** one row of `standards.js`. It is either a lettered expectation or a GUM row. There are 147. This is what the parent guide's "Every standard" tab lists.
- **Skill entry:** one numbered line on the home page (for example "D1 Story elements"). It points to either a lesson (99) or an essay task (2), for 101 in all. Usually one skill = one expectation or GUM row. The exception is the 5 text-structure skills, which share 3.T.SS.1.a.
- **Lesson:** the content behind a skill: Learn It, Watch Me, a practice set split into Together and Try, and a scored test. Hands-on lessons have a grown-up check instead.
- **Question (item):** one thing the child answers, worth 1 or 2 points. There are 979 in lessons and 147 in mixed sets and PT-1. An essay task is not counted as a question. It is a separate 8-point activity scored by a grown-up.

---

## 5. Legacy and stale fields

| Field / string | Where | Read by JS? | Verdict |
|---|---|---|---|
| `status` ("taught" 20, "partly" 28, "not yet" 99) on every standards row | `js/data/standards.js` | **No.** Grep for `.status`, `"status"`, `partly` and `not yet` in `js/` finds nothing. The "taught" hit in `skills.js:392` is the progress flag `mark(cur, "taught")`, which is unrelated. Only `gen-standards.py` writes it, copying it from the external JSON. | **Legacy.** It reflects coverage by other apps before Peach Prep and contradicts today's state: every non-Practice row now has a lesson. |
| `testedNote` (41 GUM rows) | standards.js | Yes, in `parents.js` (Every standard tab) | Used |
| `where[]` (links to Word Workshop, Study Scoop, Sentence Sense) | standards.js | Yes, in `parents.js` "Where to practice" | Used |
| `sections[].ready` | `js/data/site.js` | **No** (no reader) | **Legacy.** Values are also stale: writing, language and test say `false`. |
| `sections[].soon` ("Coming Thursday" ×2, "Coming Friday") | site.js | Read in `app.js` lines 106 and 168, but only when a section has no sets and no tasks. All 4 sections have content now, so it is never shown. | **Legacy / dead fallback** (with `#section-soon` and `.soon-label`) |
| `PP_STRUCTURES[].draw` | `js/data/catalog.js` | No. The cheat sheet shows name, what, words and ask; the lesson's own `clues.draw` is shown instead. | Unused data |
| Passage `lexile`, `genre` | sets, tasks, lessons | No (grep in `js/*.js` and `js/engine` finds nothing) | Unused metadata. STATUS-1.0 "Lexile labels are estimates" refers to labels that are not displayed. |
| Item `dok` | all items | Only by `check-content.js` (it must be 1–4) | Metadata, used by the checker only |
| `build: "Peach Prep 2.1.0"` | `js/data/manifest.js` | Yes, home footer `#build-badge`; `guard.py` 1.5 checks the prefix | **Current version string** |
| `pp.progress.v1` | `js/skills.js` | Yes | Storage schema version. Current. |
| "Build 1.4.0" | comment in `verification/serve.js` | n/a | Stale comment, unrelated to the site version |
| "Peach Prep 1.0.0" | `docs/audit-skills.md`, `docs/STATUS-1.0.md` | n/a | Historical |
| `lessonCount()`, `skillId()` exports | `js/skills.js` `PP_SKILLS` | Not called by site code. Possibly used by external harness code; I did not grep guard.py for every export. | Probably test hooks. Low importance. |

---

## 6. What I did not check

- The official Georgia K-12 ELA standards document. It is not among the uploaded sources, so the 8 "not applicable" exclusions and the paraphrased wording were not verified.
- The GitHub Pages settings, and whether the live origin matches commit 66e536b byte for byte. I only fetched `manifest.js` and `T-TS.js` through WebFetch. Direct `curl` was refused by the proxy.
- The 2.0 tree, to confirm the 923 figure. Git was off limits, so I relied on STATUS-2.0 and the clue-upgrade log.
- `guard.py` and `readability.py` were not run in Phase A. `check-content.js --all` was run and passed.
- Content quality and alignment of individual items. That is out of scope for an inventory, and a matching `std` code proves nothing about coverage.

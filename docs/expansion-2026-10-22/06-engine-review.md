# 06 · Independent engine review (QA and code review)

**Reviewer role:** independent QA and code reviewer for the engine work in `05-engine-implementation.md`. I did not build any of it, and I changed nothing in the worktree except this file and `qa-engine/`.
**Scope:** `git diff 07d978f -- js/ css/ index.html verification/ docs/audits/work/official-gr3-parents.json`, with `js/data/lessons/*` excluded (content is reviewed separately). `js/data/std-groups.js`, `js/practice.js` and `js/std.js` are included.

**How I got the baseline without running git.** I read the object store directly with a small read-only reader (`qa-engine/tools/gitread.py`). It extracted the trees of `07d978f` (home baseline), `038995c` (the last home commit actually merged into this branch), `1aa61c5` and `main 9a5b297` into scratch. I ran no `git` binary.

**Candidate tested:** a copy of the worktree made at **2026-10-22T22:35:24Z**, with 114 non-doc files. The checksum list is `qa-engine/logs/snap-md5.txt`, and the md5 of that list is `a4f1bb8e8af6c0a6a363bf00bad5d1a5`. The copy was re-verified unchanged before the second session. At 2026-10-23T09:27Z every engine, data and verification file in the worktree was still byte-identical to the copy. Only lesson files had moved on: T-C, T-RA, T-SS, T-T1, T-T2, T-T34 and T-TS, which are content and out of scope here.

**Servers:** 8801 (candidate), 8803 (07d978f baseline), 8811–8823 (mutants). All were stopped by PID at the end.

**Browser:** Playwright Chromium 1194 at `/opt/pw-browsers`. Simulated viewports only.

---

## Verdict

**CHANGES REQUIRED.** The engine itself is careful and largely correct. In my adversarial tests:
- no pass can be awarded by practice, a reveal, a direct address or a checkbox;
- the assistance history cannot be erased;
- damaged, blocked and full storage are handled honestly;
- every standard address resolves, and no code link is nested;
- every planted engine breakage was caught by `practice-own.py`.

Four things still block a merge:

1. **ENG-01:** the branch is **not** built on the home baseline it claims (`07d978f`). It lacks the home branch's last three commits, so `verification/first-visit.py` is missing and the plain `guard.py` crashes.
2. **ENG-02:** the new `pp.practice.v1` store makes a storage write on every page load. This fails five checks in the home branch's own `first-visit.py` ("a fresh load writes nothing").
3. **ENG-03:** the guard §3 change removes the per-item browser assertions for every core ("own") item. A planted leak in own-mode feedback passes the guard. Only `practice-own.py` catches it, and only on one lesson.
4. **ENG-07 / ENG-09:** owner requirements are not met, and the work should not be described as complete:
   - "Try a Similar Question" is missing on 159 of 255 core items (62%).
   - The skill-group reviews, the cumulative review and the assessment coverage map (§11, deliverable 5) are not built.

---

## Test results on the frozen copy (my runs, port 8801)

| Suite | Result | Notes |
|---|---|---|
| `check-content.js --all` | PASS, 0 failures, 25 warnings | 99 lessons, 17 with core (255 core items, 51 similar). 76 lessons with a check and no core (warning) |
| `check-content.js` (manifest) | PASS, 0 failures, 25 warnings | |
| `check-writing.js` | 0 failures, 0 warnings | |
| `readability.py` | report, exit 0 | |
| `check-instructional-copy.js` | 28 assertions passed | |
| `path.py` | **148 passed, 0 failed** | |
| `path-a11y.py` (axe 4.10.2) | 12 + 12 + 12 runs, 0 violations, lowest contrast 4.64:1 | It must run without `--single-process`; with that flag, closing a page kills the browser (environment issue, not a product issue) |
| `path-headers.py` | **48 passed, 0 failed** | |
| `skills-recovery.py` | **67 passed, 0 failed** | |
| `writing-recovery.py` (port 8802) | **75 passed, 0 failed** | |
| `practice-own.py` | **67 passed, 0 failed** | |
| `first-visit.py` (from 07d978f; absent on this branch) | **119 passed, 5 failed** | See ENG-01 and ENG-02 |
| `guard.py` **plain** | **crash, exit 1, no results** | Line 244, `pg.fill("#skill-search")` times out because a fresh visit gets the first-visit choice screen. See ENG-01 |
| `guard.py` via the browse-mode fixture launcher | **110 passed, 0 failed**, 30 min | Same 105 check names as 07d978f (counted from source) |
| Reviewer probes (`qa-engine/tools/adv.py`) | 71 assertions: all pass after two probe-expectation corrections, except **REV.2** (ENG-06) and the target-size and pre-existing a11y items (ENG-10, ENG-15) | Results JSON in `qa-engine/` |

Logs are in `qa-engine/logs/`.

---

## Findings

### ENG-01 · MUST · The branch does not contain the home baseline it is reviewed against

**Evidence**
- The branch reflog shows it was created from `1aa61c5`. It merged only `038995c` from `design/home-start-experience` (merge `b57fe19`).
- It does not contain `af488c0`, `4e04fcb`, `182389d` or `07d978f`.
- Diffing against `07d978f` therefore shows these home changes as reversions:
  - `verification/first-visit.py` (the first-visit suite) is **missing** from the branch.
  - `guard.py` lacks the home branch's `BROWSE_SEED`/`newpage()` entry fix and the `_crash_hook` / `print_results()` reporting.
- **Consequence:** `python3 verification/guard.py <base>` (plain) crashes before printing any result (`logs/guard-plain.log`). The implementer ran the guard only through a scratch copy of the fixture launcher, which masks this. Their doc says "on top of the homepage redesign candidate 1aa61c5", which contradicts the brief's base of 182389d / 07d978f.
- My check: apart from those two files, the home `07d978f` changes are already on the branch (path-a11y.py, path-contrast.js, the skills.js and styles.css deltas).

**Fix**
1. Merge `design/home-start-experience` at `07d978f` into `content/standards-practice`. Expect a trivial conflict in `guard.py`: the four expansion edits sit in different hunks from the seed edit.
2. Then re-run plain `guard.py` and `first-visit.py` on the merged candidate.
3. Record the true base in 05.

### ENG-02 · MUST · `pp.practice.v1` writes to storage on every page load (fails `first-visit.py`)

**Evidence**
- `js/practice.js:73` runs `setItem("pp.practice.storage-check")` / `removeItem(...)` at load, on every page.
- `first-visit.py` from 07d978f allows only path.js's probe key. Five checks fail (`logs/fv.log`):
  - 1.4 "pp.path.v1 is the only key the choice writes"
  - 2.1 "a fresh load writes nothing to storage"
  - 2.2 "a reload before choosing writes nothing"
  - 4.9 "#path alone writes no learning mode"
  - 8.7a "the only write on load is the additive PP-003 progress migration"
- The file's own header says "Rendering never writes". That is true of the record but not of the probe.
- The effect is benign: the probe key is removed at once, and `practice-own.py` G.2 compares snapshots, so it cannot see the probe. But a baseline regression suite now fails.

**Fix (preferred)**
- Make the probe lazy: test write ability on the first `save()`, or when the picker or player first needs `canSave()`.
- Or reuse the result of path.js's existing probe instead of adding a second key.

**Alternative:** document the new probe key and add it to `first-visit.py`'s `CHECK_KEY`. This is a test change, and it needs the same justification as the guard changes.

### ENG-03 · MUST · Guard §3 no longer asserts per-item behaviour for any core item

**Evidence**
- §3 now filters `!s.own`.
- On a core lesson, every `{ref}` practice item moved out of the old `:y` set into own sets. So no item in the 17 core lessons (255 items) gets the §3 assertions any more:
  - 3.1, a wrong Check says try again;
  - 3.2, a wrong Check never shows the walk-through;
  - 3.4, the correct answer after help is accepted.
- `practice-own.py` asserts the own-mode equivalents, but **only on 3.T.T.1.c** (plus one cr fixture).
- §8.1 walks every own item, but it only measures sideways scroll.

**Mutation proof**
- Mutant M8 makes own-mode "Not quite" feedback print the item's `why`, which reveals the answer.
- Guard §3.1–3.4 all **pass** on M8 (`logs/mutant-M8-own-wrong-leaks-why-guard.txt`).
- `practice-own.py` catches M8 (B.3), but only because the bug is engine-wide.
- A per-item defect would not be caught by any browser suite on the other 16 core lessons. Examples: a WRONG response that scores full, or an item whose hint list renders empty.

The owner asked to "Preserve behavioral assertions when updating selectors". The behaviour can be kept with the new selectors. Removing the population reduces what is verified.

**Fix:** add an own-mode branch to §3 instead of skipping the sets. For every item of every `s.own` set:
1. WRONG → `#q-feedback.is-try`, and no `why` text in it.
2. Each of `#q-hint` ×n → `.help-step` count rises; no `.is-ruled-out`, no `.is-hint` outline.
3. CORRECT → `is-right`.
4. On `cr` items, Compare → the status reads "Written and checked".

### ENG-04 · SHOULD · Journey 9.5–9.10 will silently disappear after migration

**Evidence**
- The 9.5 change (`&& !PP.lessons[c].core`) keeps the legacy assertion for lessons without core. That is fine today, because 76 such lessons exist.
- But the block is `if qcode:` with no `else`. When the content migration finishes and every check lesson has core, the guard records **no** result for 9.5a, 9.5b, 9.5, 9.6, 9.7, 9.7b, 9.8, 9.9 or 9.10, and still exits 0.
- The ok() **name** set is unchanged (105 names, identical to 07d978f), because names are counted from source, not from a run.
- Mutation M6 (legacy "Help me unlocks after one wrong try" broken): guard **9.5b FAILS** (`logs/mutant-M6-legacy-try-help-unlock-guard.txt`), so the assertion still works today.

**Fix**
- Add `else: ok("9.5 a quiz lesson without core exists for the legacy journey", False)`.
- Better, add a core-lesson journey for 9.5–9.10: picker → set 1 → … → check → results → Back → home row → reload → address. `practice-own.py` covers parts of this, but not 9.6–9.10 on a core lesson.

### Guard change ledger (area 1)

| Change | Same assertion? | My assessment |
|---|---|---|
| §2 skips `type:'cr'` | Yes for every scored item. A cr item has nothing to score (0 of 0 by design; check-content fails cr outside core/similar) | **Keeps** the assertion. NOTE: 2.4 ("can describe answer…") no longer runs on cr. `practice-own.py` D.1 covers the cr describe and sample |
| §3 skips own sets | **No.** The population shrinks to non-core lessons | **Reduces verification** → ENG-03 |
| §8.1 own sets use `#q-hint`×3 and `#q-how`, and type into cr | Yes. It still opens every help state before measuring overflow, and now also covers Show me how and cr | **Keeps, and slightly extends** |
| §9.5 picks a lesson without core | Yes for legacy lessons today | **Keeps now, decays later** → ENG-04 |
| Other verification files | Only `check-content.js` changed among existing files. One line (points) was rewritten to allow cr; the rest is additive. Thirteen other files are byte-identical to 07d978f. `first-visit.py` is missing (ENG-01) | — |

### ENG-05 · NOTE · Mutation testing: planted breakages are caught

Each mutant is a scratch copy of the candidate with one edit (`qa-engine/tools/mutate.py`). The worktree was never edited.

| Mutant | Breakage | Caught by |
|---|---|---|
| M1 | hint order reversed (hint 1 shows the most specific hint) | practice-own **B.4 FAIL** |
| M2 | Show me how counts as solved, not "Answer shown" | practice-own **B.5 FAIL**, then crash (exit 1) |
| M2b | Show me how writes `mastered:true` to pp.progress.v1 | practice-own **B.7, C.3, C.4 FAIL** |
| M3 | Practice Together includes the core refs again | practice-own **A.1, A.2 FAIL**, then crash |
| M4 | `#std/` route removed | practice-own **crash** at the std navigation step, exit 1 (no named FAIL line) |
| M5 | finishing the fifteen also marks `mastered` | practice-own **C.4 FAIL** |
| M6 | legacy Try It Yourself: Help me needs two wrong tries | guard **9.5b FAIL** |
| M7 | legacy Help me step 1 shows `why` | guard **3.3 FAIL** |
| M8 | own-mode wrong feedback shows `why` | practice-own **B.3 FAIL**; guard §3 **passes** (ENG-03) |

NOTE: `practice-own.py` has no crash hook. With M2, M3 and M4 it stops at the first unexpected state with a traceback, so later checks never run. Add the guard's `_crash_hook` / `print_results()` pattern.

### ENG-06 · SHOULD · The "practice was updated" notice promises behaviour that does not exist

**Evidence**
- When a stored lesson `rev` differs from `core.rev`, the picker says: "Earlier answers are kept, but questions that changed start fresh."
- Nothing detects a changed question. Records are keyed only by item id. Probe REV.2 changed `rev` to `"0"` and reloaded: the item's saved response and its hint came back as-is.
- The architecture (§2.2.4) makes this true only if "a changed item must get a new id (enforced by the ledger hash, 2.6)", and the ledger is not built.

**Fix:** either build the ledger rule (a hash of each core item, so changing an item without changing its id fails), or reword the notice. For example: "This practice was updated. Your earlier answers are kept." Re-test with REV.2.

### ENG-07 · MUST (owner §8) · "Try a Similar Question" is missing on most core items

**Evidence**
- check-content warnings: **159 of 255** core items (62%) have no `similar` item mapped by `like`. The engine therefore hides the button (lead decision: no fallback, warning only).
- On those items, after Show me how, the next actions are only "Next question" and "Previous".
- The owner's §8 says each applicable practice question must support "Try a Similar Question" to "provide a fresh opportunity to apply the same skill after an answer reveal".
- Per lesson, uncovered items range from six (3.T.T.2.c) to eleven (3.T.C.1.b, 3.T.SS.1.a, 3.T.T.2.a, 3.T.T.4.a).

**Fix**
- **Content:** author `similar` items until every core item is covered, at least for items whose answer can be revealed.
- **Engine:** turn the warning into a failure under the planned `--release`. If the lead wants a stop-gap, offer an unused similar item from the same set or lesson, labelled honestly.

Either way, do not report the §8 control set as complete until this is fixed.

### ENG-08 · SHOULD · Practice Together does not use the authored hints or the §8 controls

**Evidence**
- On core lessons, Together items carry authored `addons.hints` and `how`, and those are merged into the items.
- But Together still runs the engine ladder:
  1. the clue;
  2. narrowing;
  3. "Let's walk through it", which outlines the answer.
- It has no labelled "Show me how (shows the answer)" and no "Try a similar question". The ladder's third step reveals the answer without being labelled as a reveal.
- The owner's §7 Together requirements (attempts, graduated hints, feedback, explanations, retries) are met by the ladder. §8 says "each applicable practice question must support" the four controls.

**Fix:** the lead decides and records whether §8 applies to Together. If it does, switch core-lesson Together to own-mode controls without saving (no pp.practice.v1 record), and update guard §3 for those sets in the same change.

### ENG-09 · MUST (owner §11, deliverable 5) / SHOULD · Unbuilt items against the assignment

| Item (implementer's §7) | Required by the owner? | Severity |
|---|---|---|
| Standard / skill-group reviews | **Yes.** §11 "Standard or skill-group reviews … Publish what each review measures" | MUST before claiming §11 |
| Cumulative ELA review | **Yes.** §11 "Cumulative ELA review … clearly labeled sections"; distinguish curriculum review, blueprint practice, writing, and adult-observed work | MUST |
| Assessment coverage map | **Yes.** §11 "Publish an assessment coverage map"; deliverable 5 | MUST |
| Check versioning (`testRev`, `attempts[].rev`) | **Conditionally.** §13: "When assessment content or point totals materially change, version the assessment." My comparison of every `test`/`testB` between 07d978f and the candidate found **one** changed check item, `SK-SS2a-TB4` (clue wording only; same id, same points). That is not material, so nothing needs versioning yet, but no guard stops a future material change | SHOULD: add the check before any content batch edits a check |
| Review-ledger hashes | Not named. They support §15 ("independently verify every new or materially revised item") and make ENG-06 true | SHOULD |
| `--release` switch | Not named. §15 requires verifying "every applicable lesson has fifteen core … items". Today 76 lessons with a check have no core, and that is only a warning | SHOULD, and needed to make any completion claim |
| "Start this set again" | Not required. §9 asks for stop and return, which works. History is never erased, so nothing breaks without it | NOTE |
| Together on the old ladder | See ENG-08 | SHOULD |

### ENG-10 · SHOULD · The new code links are small tap targets next to large ones

**Evidence**
- Measured link heights (`tools/targets.py`):

  | Where | Height |
  |---|---|
  | catalog `sl-code` (107 links on home) | 28 px |
  | Learning Path `sl-code` (103 links) | 28 px |
  | skill chip | 32 px |
  | official-wording code | 20 px (inline) |
  | std page component links | 26 px |
  | parents' standards tab | 44 px or more |

- Every one meets WCAG 2.2 AA 2.5.8 (24 px). But the site's own convention and the practice-own J check use 44 px, and these links sit flush beside the row buttons. On a phone that invites mis-taps.
- The home list also gains about 107 extra Tab stops, though the skip link mitigates this.

**Fix:** give `a.std-link.sl-code`, `.sk-chip` and the `std-comp-head` links `min-height: 44px` (with inline-flex padding), or 24 px plus 20 px of spacing. Extend practice-own J, or my A11Y.3 probe, to home and path.

### ENG-11 · SHOULD · Identical link text on the grammar-chart pages

**Evidence**
- On `#std/3.L.GC.1:M` (and in the M/R/I/C lists on `#std/3.L.GC.1`), every component link reads "3.L.GC.1 · Master" (or "· Reinforce", and so on), because `codeLabel()` for a GUM row returns the level, not the row.
- So there are eight to eighteen links with the same name and different destinations. The row text sits in the next paragraph of the same list item, which is a pass at level A (2.4.4 in context), but a screen-reader links list is unusable.

**Fix:** use `x.gum` in the link text or an `aria-label`, for example "3.L.GC.1 · Master: use apostrophes in contractions…".

### ENG-12 · NOTE · Edge cases in saved data (all handled safely, some worth hardening)

Tests were adversarial fixtures run through the real UI with the practice key and others seeded: `pp.progress.v1`, `pp.path.v1`, `pp.task.W-TASK-01`, a stray `SK:3.T.T.2.a:p` key and `pp.flags.v1`. In every case there were no page errors, and **every other key was byte-identical** after a child action.

| Fixture | Behaviour |
|---|---|
| Corrupt JSON, array, string, `l:null` | Notice: "Saved practice could not be read, so it starts fresh. Nothing else was changed." The raw value is untouched until the child acts, then **overwritten** with no backup. |
| `__proto__` at lesson and item level | Dropped; no pollution. |
| `{v:9, …, extra}` (a future version) | Read as v1. The first save rewrites `v:1`, with no notice. Unknown top-level fields are kept. |
| Poisoned record (`r:{v:99}`, `ord:[0,0,0,0]`, `w:"3"`, `h:99`, `x:"true"`, `ok:1`, `cr:"x"`, array or null records, `at:{set:9,pos:-4}`) | The bad response and order are ignored. `w` becomes 3, `h` is clamped to 3, and `x:"true"` and `ok:1` are read as **false**. Array and null records are dropped. No crash. |
| `w:1e308` and a 500-entry log | Kept as-is: the log is trimmed only on that record's next update. Harmless. |
| Blocked storage (getter throws) and full storage (`QuotaExceededError` on pp.practice*) | Practice works for the visit (the in-memory record has `w:1`, `h:1`). The player notice says "only while this page stays open", and the picker makes no "come back" promise. |

**Suggestions**
- Copy an unreadable raw value to `pp.practice.v1.unreadable` before the first overwrite.
- Refuse to write, and say so, when `v > 1`.

Neither is required by the brief, which asks only that the meaning of existing keys is not changed and that nothing is cleared. That holds.

### ENG-13 · NOTE · No pass from practice, a reveal, opening a page or a checkbox (verified)

- **Fifteen reveals, then right answers (PASS.1):** no `mastered`, `best` or `attempts` were written, `status()` is not mastered, and the counts show 15 "Answer shown". Only `tried:true` was written.
- **Direct addresses (PASS.2–3):** `#play/SK:3.T.T.2.a:y/test`, `…:y3/test` and `…:y2/practice` all run as practice. `PP_PLAYER.start(own,'test')` is forced to practice.
- **cr item (PASS.4):** with every criterion ticked, the status is "Written and checked against the list", `ok` stays false, the item shows "Not scored", and no progress is written.
- **Opening pages (STD.3):** opening all 211 standard addresses (147 leaves, 30 parents, 30 band forms, four GUM levels) wrote **nothing**. The only load-time write is ENG-02's probe.

### ENG-14 · NOTE · Status history (§12) is preserved

**Statuses stay distinct (STAT.1, on 3.T.T.2.a, which the implementer's suite does not walk):**
- right first try → "first";
- wrong then right → "retry";
- hint, **reload**, then right → "hints" (the hint is still shown after the reload, STAT.0);
- Show me how then right → "shown";
- untouched → "none".

**Assistance is never erased:**
- `w`, `h` and `x` survive a later right answer, and the log keeps `how` before `check` (STAT.2).
- Show me how after a right answer keeps "first" and records `howAfter` (STAT.3).

**Similar items:** a similar question is saved under `s` with `for`. The core record and counts do not change (STAT.4).

**Picker summary:** the picker names every category in words (STAT.5).

**cr items:** cr is never auto-scored: `score()` returns 0 of 0, check-content fails cr in a check, and guard §2 skips it.

### ENG-15 · NOTE · Checks and tests (area 5)

Tested on 3.T.SS.2.a, which has two forms and two-point items.

**Navigator and confirm screen:**
- The navigator has one button per question, with states in words ("1, answered" or "not answered"), `aria-current`, and Mark to review (`aria-pressed`). It gives no feedback and has no hint or check controls.
- The confirm screen lists "Not answered yet" and "Marked to review". Each entry is a button back to its question, with focus on the prompt.

**Results:**
- The partial-credit line ("one point of partial credit") and per-item "Partial credit: 1 of 2" appear in the review.
- "What to work on next" carries the small-sample caveat.
- The retry note "The next skill check uses form B" matched the form actually served (TEST.8). The alternate-form logic (`nextForm`, `checkSetId`) is untouched in the diff.
- On practice test PT-1, areas with fewer than two questions or three points are grouped into "Other parts (too few questions to report on their own)".

**Pre-existing items (identical on 07d978f; `tools/basecmp.py`):**
- axe `landmark-complementary-is-top-level` on the skill panel `aside`;
- axe `heading-order` from `.passage-title` in the player;
- `#sk-tab-practice` text clipped at 320 px.

**Minor:** after a failed check on a core lesson, the guidance says "Go back to Watch Me or Practice Together", while the revisit button offers "Practice on my own". Consider aligning the wording.

### ENG-16 · NOTE · Standard pages (area 3)

**Resolution and nesting (STD.1, STD.2):**
- All 211 addresses open `#screen-std` with focus on the h1 and the official wording. No `a.std-link` is nested anywhere.
- I also checked the screens that show codes: home (107 links), parents' standards with every `<details>` open (174), the parents' test tab, the skill page, the Learning Path (103), the code-search card and habits (STD.7).
- Every displayed std-link resolves (STD.8). All 30 Practices codes resolve (STD.4).

**Bad and hostile codes (STD.5, STD.6):** these all land on home with "That page wasn't found, so here is the home page." and no page error:
- empty, `zzz`, `3.T.T.9`, `3.T.T.1.z`;
- malformed `%E0%A4%A`, `3.L.GC.1:X`;
- `__proto__`, `constructor`, `toString`;
- an encoded `<img onerror>`, `3.T.T.1.c/extra`, `3-5.T.T.9`, `..%2F..%2F`.

**Navigation (STD.9):** std → lesson → "← Standard 3.T.T.1" → std (focus on the h1) works, as do Forward and Back.

**Parent wording:** I checked **all 30** entries of `official-gr3-parents.json` against the PDF text by page. All 30 match on the stated page; EICC.3 needed a footnote asterisk removed. I re-extracted pp. 20, 21, 24, 36, 38 and 44 with `pdftotext -layout` from the PDF itself.

**The two noted PDF inconsistencies are real:**
- 3.T.RA.2 reads "Reference parts of texts to address a specific topic or question…" on pp. 24 and 36, but "Integrate evidence from print and digital sources, assessing credibility and relevance and avoiding plagiarism." on p. 38. p. 38 is the grade 3 table page, and the implementer used it.
- 3.L.V.1 reads "…vocabulary words **and phrases** with precision…" on p. 21, but "…vocabulary words with precision…" on pp. 12 and 20. p. 21 is used.

Both alternates are kept in `otherWordings`. Leaf `official` wording (PP-004) was not re-verified; it is unchanged by this diff.

### ENG-17 · NOTE · Accessibility and responsiveness (area 6)

**axe 4.10.2:** 0 violations on every new screen at 390 and 1366 (`tools/axe2.py`):
- std leaf, parent, GUM level, GC.1, a Practices page and a habit leaf;
- the check confirm list;
- check results with the review open;
- end of set;
- the code-search card;
- parents' standards with every section open.

The only violations on the picker and player screens are pre-existing (ENG-15).

**Seven viewports** (320x568, 390x844, 844x390, 768x1024, 1024x768, 1366x768, 1920x1080), on these eleven screens:
- std leaf, parent, GUM and Practices pages;
- the picker;
- a practice item with two hints and Show me how open;
- a cr item after Compare;
- the check navigator, confirm list and results;
- end of set.

**No horizontal scroll** on any of them (A11Y.2). Targets: see ENG-10.

**Keyboard:**
- Enter on a std lesson button opens the lesson with focus on its title (KB.3).
- Enter on "Start set 2" starts that set with focus on `#player-title`, which is the baseline focus target for `start()` (KB.4).
- Show me how by keyboard moves focus to the steps heading (KB.6).
- A navigator button moves to its question with focus on the prompt (KB.7).
- The std-link focus ring is visible (KB.2).
- Tab order in an item: clue toggle → choices → Give me a hint → Show me how → Next (KB.5). Check my answer is correctly not reachable until an answer is chosen, because it is disabled.

**Screenshots:** `qa-engine/*.png`.

**Not done:** physical devices, Safari or iOS, native zoom, screen readers, and family acceptance.

---

## What I would accept

Merge-blocking changes, in order:
1. **ENG-01:** merge 07d978f, then re-run plain guard and first-visit.
2. **ENG-02:** lazy probe, or a documented allowlist.
3. **ENG-03:** an own-mode §3 loop.

Before describing the expansion as complete:
- **ENG-07** and **ENG-09:** fix, or state them in the owner summary as open gaps.

Fix soon: ENG-04, ENG-06, ENG-08, ENG-10 and ENG-11.

## Reproduce

These scripts are in `qa-engine/tools/`:
- `gitread.py`: read-only baseline extraction.
- `adv.py BASE OUT [std storage pass status rev test a11y kb]`: the reviewer's probes.
- `mutate.py`: plants the mutants.
- `axe2.py`, `targets.py`, `basecmp.py`, `testcmp.js`.

Logs are in `qa-engine/logs/`, including per-mutant results.

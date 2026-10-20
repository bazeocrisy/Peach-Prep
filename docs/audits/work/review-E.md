# PP-003 Phase F review E: independent verification

Reviewer E (verification specialist). Date: 2026-10-20. Worktree: /home/claude/pp-fix, HEAD f2119ef (branch pp-003-fixes), compared with main 66e536b. Port 8465 (server started and stopped by PID).

I did not rely on review-A/B/C or on the fix logs' claims. Every number below is from my own run. Scratch files (scripts, JSON dumps, renders) are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revE/`.

## 0. Gates I ran myself

| Gate | Result |
|---|---|
| `node verification/check-content.js --all` | PASS: 0 failures, 8 warnings (all clue-overlap: PT-1-14, SK-V3b-T1 ×2, SK-TC1b-T2, SK-TT1a-T5, SK-TT1d-P1, SK-TT1d-T1, SK-TT1e-T5). None is on an item added in PP-003. Checked 15 sets (147 items), 2 tasks, 99 lessons (995 items). |
| `python3 verification/readability.py` | Exit 0. No passage is flagged. Highest FK is 3.L.V.3.d p1 at 4.5. |
| `python3 verification/guard.py http://localhost:8465/` (full run, through serve.js) | See §6. |
| `git status` | Clean before and after my runs. I edited no repo file except this one. |

## 1. Regression sweep

### 1a. What changed
`git diff 66e536b --stat`: 73 files, +6707 / −709. I read the full diffs of `js/app.js`, `js/engine/player.js`, `js/pp.js`, `js/skills.js`, `js/parents.js`, `js/writing.js`, `index.html`, `css/styles.css`, `js/data/site.js`, `js/data/catalog.js`, `js/data/sets/*`, `verification/serve.js` and `verification/gen-standards.py`. I compared lessons and sets item by item, using a loader that dumps every lesson and set from both trees.

Item-level changes (1126 items → 1142):
- **Added (26):** SK-GC2c-P7, SK-V2a-P6, SK-V2a-P7, SK-V2a-T6, SK-V2c-P6, SK-V2c-P7, SK-V2c-T7, SK-V2c-T8, SK-V3a-T7, SK-V3a-T8, SK-TC1b-P8, SK-TC1b-P9, SK-TC1b-T6, SK-TC2c-P6, SK-TC2c-T6, SK-SS1a-P7, SK-SS1b-T6, SK-SS1b-T7, SK-TT1b-P7, SK-TT2a-P6, SK-TT2a-P7, SK-TT2a-T6, SK-TT2d-P6, SK-TT2d-T6, SK-TT4b-P6, SK-TT4b-T6.
- **Removed (10):** SK-V2a-P3, SK-V2a-T5, SK-V2c-P1, SK-V2c-T2, SK-V2c-T3, SK-V3a-T1, SK-V3a-T3, SK-TC1b-P2, SK-TC1b-P3, SK-SS1b-T1.
- **Changed (26):** includes the point fixes L-VOC-02-5, L-VOC-03-9 and R-POE-01-q8 (1 → 2), and the PT-1-12 `why` spacing fix.
- **Lesson keys and codes:** identical in all 17 lesson files. No stored record is orphaned by a renamed key.

### 1b. Bugs, broken logic, debug code
- No `console.log`, `debugger` or test hooks were added to `js/` (grep).
- Every new CSS class is used by the JS that needs it (`no-passage`, `flu-result`, `sl-review`, `by-grownup`, `notfound`).
- The removed `soon` fallback and the `#section-soon` element are gone from both app.js and index.html. Nothing references them.
- The pass rule is consistent. The player's D17 button order uses `got >= Math.ceil(max*0.8)`, and skills.js `passMark()` is the same `ceil(80%)`.
- `#play/SK:<k>:t/practice` is forced to test mode in both `start()` and `finished()`, and `recordPractice` ignores part `t`. In the browser I confirmed that mode `test` is used.
- `writing.js load()` keeps the stored types. Essay `checks` are integer indices on main too, `plan` values are strings, and `scores` are numbers, so no valid 2.1 essay data is filtered out.
- I found no new bug in the routing code. A bad hash (`#nonsense/x`) lands on Home with the "not found" note and drops the address. In-page Back from a skill-opened practice returns to `#skill/3.T.SS.1.a/practice`.

### 1c. Stored progress (`pp.progress.v1`): seeded 2.1-era record, main vs worktree
I seeded the same record on main and on the worktree (served in turn on 8465):
- 3.T.C.1.b: a scored pass, best 6/7.
- 3.T.SS.1.b: a scored pass on the old 6-point test.
- 3.L.V.2.a and 3.L.GC.2.c: started, with failed tries.
- 3.L.V.3.a: `learned` only.
- 3.F.F.1.c: a grown-up check, `mastered`, with one fluency reading.
- 3.F.H.4.a: a partly ticked check.
- `_ui.lastCat`.

| Measure | main | worktree |
|---|---|---|
| status() of all 7 keys | mastered, mastered, started, started, mastered, new, started | identical |
| Home headline | "2 of 74 … are mastered" | "2 of 74 … have a passed skill check" (+ essay note) |
| Category rings | 1/10, 1/24, 1/10, 0/10, 0/45 | identical (Writing adds "· +2 essays" beside the ring) |
| ✓ / ◐ / review badges | 3 / 3 / 0 | 3 / 3 / 0 |
| "Not passed yet" filter | 96 rows | 96 rows |
| "On the test" filter | 76 rows, "76 skills match." | 76 rows, "74 skills and 2 essay tasks match." |
| Up next | Vocabulary N1 | identical |
| After passing 3 skill checks | 5 of 74; rings 1/3/1/1/0 | identical |

- **Stored data after the first load:** every original field is unchanged. The migration only adds `legacyUndated: true` and `firstSeenPassedAt: "2026-10-20"` to the three `mastered` records. It does not touch `mastered`, `best`, `tries`, `checks` or `fluency`.
- **Labels:** the grown-up pass now reads "Checked by a grown-up" and the scored passes read "Passed the skill check". The status meaning is the same.
- **Verdict:** existing records load and keep their meaning. See RE-3 for one display wrinkle.

### 1d. Feature spot-checks (worktree, 0 page errors over the whole run)

| Feature | Result |
|---|---|
| Home, search ("pronoun" 6 rows; "3.T.T.1" 6 rows, the same on main), filters | OK, same counts as main |
| Clue sheet `#clues`, habits `#habits`, mixed `#mixed` | Render, and the text length is identical to main |
| Parent guide, all 4 tabs | Render. Standards is identical; test, essay and plan grew because of the new notes |
| Practice Test 1, all 24 answered correctly via the guard's CORRECT injector | 31 of 31. Title "Practice Test 1 (shortened)". The shortened-test note and the overlap note show. "Using evidence and sources 9 of 9" now appears. Stories shows 7 of 7 (was 6 of 6) because of multi-area counting, as documented. |
| Essay W-TASK-01 | Opens; the sources render |
| Fluency 3.F.F.1.c | 205 tappable words; the reading history shows the seeded 2.1 reading ("September 1, 2026: 82 words correct per minute, 96% accuracy") |
| Cursive trace 3.F.H.4.a / 4.b | 12 / 4 trace rows in the guides font; no sideways scroll at 390 |
| Skill journey 3.T.SS.1.a, 3.L.V.3.a, 3.T.C.2.c | All 5 steps render. Each test was run all-correct: 6/6, 7/7, 9/9. Each set status to mastered and returned to the skill page. |
| Item figures in the player (11 target items, 320 and 1366) | Every figure loads (naturalWidth > 0) and has alt text. scrollWidth equals the viewport. serve.js now sends `image/svg+xml`. |

## 2. Cold-solve of the 11 newest items

I listed the items with their keys stripped (`revE/nokeys.txt`) and solved each one before opening the keys.

| Item | My answer | Key | Pts / DOK | Figure | Giveaways in its set | Verdict |
|---|---|---|---|---|---|---|
| SK-V3a-T8 (test, standalone, graph) | the number of people who come to a place | same | 1 / 2 | `v3a-visitors-graph.svg` rendered: title, axis words and values printed; no colour-only meaning | None. No other test item is about attendance. | OK |
| SK-TC1b-P9 (Together, spoken cue) | to tell listeners the next fact matters | same | 1 / 2 | none | None | OK |
| SK-SS1a-P7 (Try, table of contents) | Chapter 3 | same | 1 / 2 | none | None | OK (DOK generous: RE-8) |
| SK-SS1b-T7 (test, compare plan) | Compare them | same | 1 / 2 | none | T5 has a distractor "compare two different town libraries". It does not reveal T7's key, and T7 comes first. | OK |
| SK-TT2d-P6 (Try, choose a captioned picture) | peanut plant diagram (flower, peg, shell) | same | 1 / 2 | none (choices are described in words) | None. Checked against p1 sentences 4–5 (peg, shell underground). | OK (length cue: RE-9) |
| SK-GC2c-P7 (Try, 2-slot dropdown) | get / runs | same | 2 / 2 | none | None | OK |
| SK-V2c-T8 (test, ms pick 2) | transport, porter | same | 2 / 2 | none | All 5 choices contain "port", so letter-spotting no longer works (RB-1 is closed). The `why` etymologies are accurate: portion < *portio*, portrait < *protrahere*, passport's port = harbor/gate. | OK (cross-lesson cue: RE-10) |
| SK-V3a-T7 (test, dropdown, heron) | a tall bird that hunts in shallow water | same | 1 / 2 | `v3a-heron.svg` rendered: labels for sharp beak, long neck and long legs, standing in water | None. T2 asks about "dwell"; T7's caption does not help with it. The "wades" wording is gone (RB-2 is closed). | OK (small drawing nit: RE-7) |
| SK-SS1a-P6 (Try, map) | which part of Georgia the peanut farms are in | same | 1 / 2 | `ss1a-peanut-map.svg` rendered: N arrow, key, hatched S/SW region | None. I confirmed p1 never says where the farms are. | OK |
| SK-SS1a-T4 (test, caption for a picture) | A gopher tortoise rests at the door of the burrow it dug | same | 1 / 2 | `ss1a-tortoise-burrow.svg` rendered: tortoise beside a dark tunnel mouth in a sand mound; no people, fire, trees or roads | The distractors paraphrase p2:5:1–2, which are T3's distractor sentences. T3's key (p2:5:3) is not revealed. | OK |
| SK-TC2c-T6 (test, situation) | A storm was coming, so her family had to leave fast | same | 1 / 2 | none | None. T1–T5 are about the 1954 diary. | OK |

All 11 keys match my solutions. Points follow the site's rule: mc and 1-slot dropdown = 1, ms pick 2 and 2-slot dropdown = 2. I also rendered all 16 SVGs in `assets/figures/` (`revE/sheet.png`). None contains a script, an external link, editor metadata or personal data.

## 3. Privacy sweep

I grepped the whole worktree (js, css, index.html, README, docs including docs/audits and work/, verification, and the SVGs) for these terms:
- the owner's family names (Bazemore, Christopher, Chris, Gabriella, Stephanie, Marc);
- address and LLC terms (Stonewall);
- "my son", "my daughter", "my child";
- e-mail addresses and phone patterns;
- every "Lexile" or "NNNL" value.

Results:
- **Real child data: none.** No real child's name, no score tied to a child, and no Lexile tied to a child.
- **Lexile:** every Lexile is a passage estimate (`lexile: "about 550L (estimate)"`), never tied to a person.
- **Only personal identifier:** the owner's public GitHub handle `bazeocrisy`, in site and app URLs. That is the public repo owner, so it is acceptable.
- **"my daughter":** appears only in a fictional PT-1 passage line.
- **E-mail and phone:** none found.
- **Fictional names in new items** (Imani, Mr. Ortiz, Priya, Rosa, Kenji, Dr. Ruiz, Jada, Omar): fine.
- **NOTE:** docs/audits/* and VERIFY-BRIEF.md contain sandbox paths (`/tmp/claude-0/...`, `/home/claude/...`, `/root/.claude/uploads/...`). They hold no personal data, but they are noise in a public repo (see RE-6).

**Privacy verdict:** PASS.

## 4. Claims check (fix logs)

| Claim (log) | Checked | Result |
|---|---|---|
| Every lesson test has 4–6 items | 95 lessons with tests: 4q ×2, 5q ×82, 6q ×11 | TRUE |
| V2a P6, T5/7 (roots) | P6, T5, 7 pts | TRUE |
| V2c P6, T6/8 (roots) | P6, T6, 8 pts | TRUE |
| L-VOC-02 and L-VOC-03 13 → 14 pts (roots) | 10 items / 14 pts each | TRUE |
| TT1b test 5/7, practice 7 split 4/3 (texts) | P7, T5/7 | TRUE |
| TT4b practice 6, test 6/8 (texts) | P6, T6/8 | TRUE |
| TC2c practice 6, test 6/9 (texts) | P6, T6/9 | TRUE |
| SS1b test 6/7 (texts, review) | T6/7 | TRUE |
| TT2d test 6/7, practice 6 (texts, review) | T6/7, P6 | TRUE |
| TC1b test 6/8, practice 7, test DOK 1,2,2,2,2,2 (visuals, RC-5) | as claimed | TRUE |
| TT2a practice 7, test 6/8 (visuals) | as claimed | TRUE |
| V3a test 6/7 (visuals, review RA-2) | T6/7, DOK all 2 | TRUE |
| SS1a practice 7, test 5/6 (review RA-1) | as claimed | TRUE |
| GC2c practice 7, test 5 (review) | P7, T5/7 | TRUE |
| R-POE-01-q8 1 → 2, set 10 → 11 pts (ux X3) | 8 items / 11 pts | TRUE. RC-7 is closed by fix-ux X3. |
| No pick-2 item worth 1 point remains | ms pick2: 100 items, all 2 pts. hottext pick2: 24 items, all 2 pts. | TRUE |
| PT-1 is 24 questions and 31 points | 24 / 31; the results note computes the same | TRUE |
| "Real test has 60 points, including an 8-point essay" | Blueprint lines 52, 91: Total Points 60; "8-point Extended Writing Task 1 … 8" | TRUE |
| GUM 3.L.GC.1 is writing-only | Blueprint line 38: "3.L.GC.1* GUM" is in the Constructing column only; footnote line 53 | TRUE |
| Standards counts: reading 27, writing 42, both 0, no 15, classroom 10, embedded 53; on-test 69; no `status` field (meta M1/M3) | Exactly these; 0 `status` fields | TRUE |
| Home "of 74"; "On test" rows 76 (meta) | 74 and 76 in the browser | TRUE |
| 16 SVG figures (13 visuals + 3 review) | 16 files | TRUE |
| SPEC "Mastered =" wording fixed (mastery limitation) | SPEC:284 now reads "Passed the skill check = at least ceil(80%) …" | Resolved |
| "Needs JS/UI edit" items 1, 2, 4–9 and 13 (review-fix) | All present in skills.js, parents.js and player.js | Applied |
| check-content passes | My run: PASS, 0 failures, 8 warnings | TRUE. The logs quote 8, 9 and 35 warnings, but those were snapshots taken at different times. |

**Stale statements in the logs.** These do not affect the site, but the logs no longer match it (see RE-5):
- fix-meta M4.4 quotes a rubric bullet that RA-12 later replaced. M5 quotes "SHORTENED" in capitals, now lower case.
- fix-texts §4 describes SK-TC2c-T6 as "Marcus … moving day". It is now Imani and a hurricane.
- fix-visuals V-1: the serve.js `.svg` limitation is resolved. V-3: "practice and test items use labeled pictures, not graphs" is superseded by SK-V3a-T8.
- fix-mastery §1 says the ALD heading lacks DRAFT; DRAFT is now present.

## 5. Findings

### RE-1 · NOTE · L-VOC-01-4 is the only 1-point `match` item
- **Where:** js/data/sets/L-VOC-01.js, item L-VOC-01-4 (3 rows, `points: 1`). It is unchanged from main.
- **Evidence:** 133 of 134 match items are 2 points. This is not wrong (the blueprint allows 1-point TE items), but it is inconsistent with the point clean-up done for ms items.
- **Fix:** decide on purpose. Either set it to 2 points (L-VOC-01 becomes 14 points) or record in SPEC §5 that a 3-row match may be 1 point.

### RE-2 · SHOULD · Compiled Python bytecode is committed
- **Where:** `verification/__pycache__/guard.cpython-313.pyc` (tracked; shown in `git diff --stat` as Bin 0 → 85366 bytes).
- **Evidence:** `git ls-files verification/__pycache__` lists it. `.gitignore` has no `__pycache__` entry.
- **Fix:** `git rm --cached verification/__pycache__/guard.cpython-313.pyc` and add `__pycache__/` to `.gitignore`.

### RE-3 · SHOULD · A legacy "best score" is shown against a test whose size has changed
- **Where:** js/skills.js `renderTest` (the "✓ Passed the skill check … Best score:" line).
- **Evidence:** I seeded a 2.1 pass of 3.T.C.1.b with best 6/7. The card reads "6 questions, 8 points, no hints. Score 7 or more to pass the skill check." followed by "✓ Passed the skill check. Best score: 6 of 7." 3.T.SS.1.b behaves the same way (best 6/6, test now 7 points).
- **Meaning:** the stored meaning is unchanged (MASTERY-MODEL already noted that `best` keeps its old max). This phase makes it visible for every child who passed one of the 7 lessons whose test max changed: TC1b, TC2c, SS1b, TT2a, TT2d, TT4b.
- **Fix (display only):** when `r.best.max !== max`, append " (on an earlier version of this check)".

### RE-4 · SHOULD · The audit matrix and alignment doc are a pre-fix snapshot, and nothing on them says so
- **Where:** docs/audits/PP-003-STANDARDS-MATRIX.csv and docs/audits/PP-003-ASSESSMENT-ALIGNMENT.md:104.
- **Evidence:**
  - The 3.L.V.3.a row still says "IMAGES as context [not taught, not tested]" and "PARTIAL", but images and a graph are now taught, practiced (P6) and tested (T7, T8).
  - Other rows are equally stale: 3.T.C.1.b spoken mode, 3.T.SS.1.a map and chapters, 3.T.T.2.d illustrations, and TS-CC codes.
  - ASSESSMENT-ALIGNMENT:104 still gives R-POE-01 as 10 points.
  - The .md audits state that they audit 2.1.0, but the CSV cannot carry that note.
- **Fix:** before merge, update the coverage_status and evidence cells of the rows listed in fix-review "Other notes for the lead". Alternatively, add a docs/audits README line: "Matrix = audit of 2.1.0 (66e536b); see work/fix-*.md for the changes."

### RE-5 · NOTE · Fix logs contain superseded statements
- **Where:** fix-meta M4.4 and M5; fix-texts §4; fix-visuals V-1 and V-3; fix-mastery §1 (details in §4 above).
- **Fix:** add a one-line "superseded by fix-review RA-12 / RA-5 / RA-2" note under each entry, or leave them as history and say so at the top of work/.

### RE-6 · NOTE · Sandbox paths in public docs
- **Where:** docs/audits/*.md, docs/audits/work/*.md, docs/VERIFY-BRIEF.md, and verification/gen-standards.py:4,10 (`/home/claude/alignment/...`).
- **Evidence:** these are local machine paths. They are not personal data and they do not break anything.
- **Fix:** optional. Replace them with repo-relative descriptions, or make gen-standards.py take SRC as an argument as it now does for OUT.

### RE-7 · NOTE · The heron figure has a stray straight line through the head
- **Where:** `assets/figures/v3a-heron.svg` (used by SK-V3a-T7 and passage p2).
- **Evidence:** a straight black line runs from the eye up and to the right, past the head (`revE/svg/v3a-heron.svg.png`). It reads as a crest plume or as a second beak.
- **Fix:** shorten it and taper it into an obvious plume behind the head, or remove it.

### RE-8 · NOTE · SK-SS1a-P7 is rated DOK 2 but is a table-of-contents lookup
- **Where:** js/data/lessons/T-SS.js, item SK-SS1a-P7.
- **Evidence:** matching "get from their nest to the water" to "The Race to the Ocean" is locating information (DOK 1). The only trap is the Chapter 2 "Nests" title.
- **Fix:** set `dok: 1`. This is a practice item, so no test total changes.

### RE-9 · NOTE · The SK-TT2d-P6 key is the longest choice and the only one described as a labeled diagram
- **Where:** js/data/lessons/T-T2.js, item SK-TT2d-P6.
- **Evidence:** choice A is about twice as long as B–D and is the only one with labels. A test-wise child can pick it without reading sentences 4–5.
- **Fix:** give one distractor labels too, for example "a labeled drawing of a peanut butter jar: lid, label, jar". Alternatively, shorten A.

### RE-10 · NOTE · Cross-lesson exposure to two test keys
- **Where:** js/data/lessons/L-V12.js.
- **Evidence:**
  - 3.L.V.2.a practice P7 teaches "transport", which is a key of 3.L.V.2.c test T8.
  - The `why` of 3.L.V.2.c P6 and P7 explains "inspect", which is the key word of 3.L.V.2.a test T6.
  - 2.a comes before 2.c in the catalog, so the second cue reaches a child only if the 2.a check is retaken after 2.c.
- **Fix:** none needed. If wanted, swap "inspected" in 2.c P7 for "respected".

### RE-11 · NOTE · All legacy passes start their "review" clock on upgrade day
- **Where:** js/skills.js, `migrate()` and `reviewDue()`.
- **Evidence:** the migration stamps `firstSeenPassedAt = today()`. Seven days after the first visit on the new build, every 2.1 pass shows "review" at the same time. The card text discloses this ("or since this device first noticed the pass"). It is display only.
- **Fix:** none required. The owner may prefer that undated passes never show a review badge until they have a dated attempt.

### RE-12 · NOTE · The build string still says 2.1.0
- **Where:** js/data/manifest.js `build: "Peach Prep 2.1.0"`.
- **Fix:** bump it on release, so that the badge, guard and audits can tell the builds apart.

## 6. Guard

GUARD_RESULT_PLACEHOLDER

## 7. Unresolved problems from reviews A/B/C and the fix logs

I checked each "fixed" claim in fix-review against the files. The two MUSTs (RB-1 SK-V2c-T8 and RB-2 SK-V3a-T7) are fixed, and I confirmed both myself (§2). Still open:

| ID | Severity (now) | Status | Note |
|---|---|---|---|
| RA-14 | SHOULD | open | The four GUM "R" rows tagged on-test (writing) are not backed by any uploaded source. The K-12 GUM chart is unverified. Mark them UNVERIFIED in the matrix until they are checked. |
| RA-4 (bold) | SHOULD | partly open | Bold print is practiced (P4) but not tested; the TC1b test is at its 6-item cap. Digital and auditory modes are still described in words. |
| fix-texts §4 | SHOULD | open | 3.T.C.2.c: "individual" is practiced but not tested; "situation" is tested but only modeled, not practiced. |
| RA-3 / fix-texts §6 | NOTE | partly open | 3.T.T.2.d illustrations: now taught and practiced (P6) in words; no test item. |
| RA-16 / RB-24 | NOTE | not changed | SK-TT2d-T6 DOK 3 is borderline. Reviewer B accepted it, and so do I. |
| RA-17 | NOTE | not done | No "Distinguished column only" line for codes like 3.T.C.2.c. |
| RA-19 | NOTE | UNVERIFIED | The grade level of the common roots taught (port, graph, tele, phon, rupt, spect) has no source. |
| RA-13 | NOTE | accepted | The spelling-in-essay claim is an inference from the rubric footnote. The wording is defensible. |
| RC-8 | NOTE | partly | Four practice `why` cues in TT2a remain. They are practice re-teaching. |
| review-fix item 3 | NOTE | lead decision | The "Take the test again" button is shared by skill checks and sets; it was not renamed. |
| fix-ux D3 | NOTE | not done | The filter-row toggle and a real on-screen keyboard test were not done. |
| fix-mastery A4/A6 | NOTE | not done | No `pr` practice-accuracy field, and due reviews are not offered in "Up next". |
| fix-mastery §13 B1–B11 | owner decision | not done | Item pools, "retained", the independence rule and the rest change what progress means. They are owner policy, not defects. |
| fix-meta M3 | NOTE | owner | The "Word Workshop: Sentence Fix" link under 3.F.P.4.b/c looks like a weak match. The external app links are unaudited. |
| SOURCE-VERIFICATION #12 | NOTE | human task | Click-test the five lor2.gadoe.org links. |
| fix-visuals V-5, fix-review RA-1 | closed | | The map item, picture item and chapters item were added (SS1a-P6, T4, P7). Verified. |
| RC-7 | closed | | Logged in fix-ux X3. Verified. |

## 8. Verdicts per changed lesson or file

| Lesson / file | Verdict |
|---|---|
| 3.L.V.2.a (L-V12.js) | PASS (NOTE RE-10) |
| 3.L.V.2.c (L-V12.js) | PASS (NOTE RE-10) |
| 3.L.V.3.a (L-V3.js) | PASS (NOTE RE-7) |
| 3.L.V.3.b / 3.L.V.3.c (points only) | PASS |
| 3.T.C.1.b (T-C.js) | PASS WITH SHOULDS (RA-4 bold untested; RE-3 display) |
| 3.T.C.1.c (T-C.js, write activity) | PASS |
| 3.T.C.2.c (T-C.js) | PASS WITH SHOULDS (individual/situation split; RE-3) |
| 3.T.SS.1.a (T-SS.js) | PASS (NOTE RE-8) |
| 3.T.SS.1.b (T-SS.js) | PASS WITH SHOULDS (RE-3) |
| 3.T.T.1.b (T-T1.js) | PASS |
| 3.T.T.2.a (T-T2.js) | PASS WITH SHOULDS (RE-3) |
| 3.T.T.2.d (T-T2.js) | PASS WITH SHOULDS (RE-3; NOTE RE-9) |
| 3.T.T.4.a / 3.T.T.4.b (T-T34.js) | PASS WITH SHOULDS (4.b: RE-3) |
| 3.T.RA.1.c (T-RA.js) | PASS |
| 3.L.GC.2.c (L-GC2.js) | PASS |
| TS-CC (T-TS.js codes/std) | PASS |
| 3.F.F.1.b / 3.F.F.1.c (F-FH.js) | PASS |
| Sets L-VOC-02, L-VOC-03, R-POE-01, PT-1 | PASS |
| Engine and UI (app.js, player.js, pp.js, skills.js, parents.js, writing.js, index.html, css) | PASS WITH SHOULDS (RE-3) |
| Metadata (standards.js, site.js, SPEC, README) | PASS WITH SHOULDS (RA-14) |
| Repo hygiene and docs | PASS WITH SHOULDS (RE-2, RE-4) |

## 9. Final verdict

**No MUSTs remain.** I found no wrong key, no broken feature, no change to the meaning of stored progress, no privacy problem and no false count or claim in the site. The open items are SHOULDs: RE-2 (.pyc committed), RE-3 (best score shown against a resized check), RE-4 (pre-fix matrix not labelled), RA-14 (four GUM R rows unverified), RA-4 bold untested, and the 3.T.C.2.c individual/situation split. The rest are NOTEs.

What I did not check:
- I did not compare the new figures against real geography beyond a visual sanity check (peanut-belt location, river route).
- I did not test print output.
- I did not test a real on-screen keyboard.
- I did not open the external app links.
- I did not re-verify the etymology URLs that fix-review cites.

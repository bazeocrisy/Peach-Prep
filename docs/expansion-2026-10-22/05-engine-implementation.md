# 05 · Engine and UX implementation

**Role:** UX and implementation engineer. **Worktree:** `/home/claude/pp-content`, branch `content/standards-practice` (on top of the homepage redesign candidate 1aa61c5). **Server used:** `node verification/serve.js . 8720`. No git commands were run.

This implements phases 1 to 5 of the lead's brief against `01-architecture.md`, with the lead's decisions applied. Phase 4 of the architecture (standard/skill-group reviews, the cumulative review, the coverage map and `pp.review.v1`) was added in phase 2 and is **built**; see section 8. Sections 1 to 7 describe phase 1 and carry the counts of that time (marked); the current counts and the current gate results are in sections 8.4 and 9.

## 1. Lead decisions as implemented

| Decision | Where | How it is checked |
|---|---|---|
| Practice Together on a core lesson = `practice` minus every item `core` references with `{ref}`; lessons without core keep `ceil(n/2)` | `js/skills.js` `addLesson` | check-content rule 10b prints the derived Together ids (`3.T.T.1.c: SK-TT1c-P1, P2, P3`); practice-own A.1, A.2, A.5, F.3 |
| `addons` (lesson level, keyed by item id, `{hints, how, mix?}`) merged at registration; `misconception` is accepted as well as `mix` | `js/skills.js` `withAddon` | check-content validates keys and fields; practice-own A.4 |
| A core item with no mapped similar item hides "Try a similar question" (no fallback to another item's similar) | `js/engine/player.js` `similarFor` | check-content **warning** (not failure); practice-own B.10, B.11 |
| `core.rev` versions the core set; stored as `rev` in each lesson record; the picker says so when it differs | `js/practice.js`, `renderOwn` | check-content fails a missing `rev` (L.a-missing-core.rev) |

`01-architecture.md` was updated to state the Together exclusion, rule 10b, the warning-only similar coverage and the no-fallback similar choice.

### Reviewer fixes after B0 review

**Show me how on a written (`cr`) item** (two reports, the second from the author of 3.T.C.2.a C12). Show me how used the multiple-choice line "You can still choose it and check" on written items, showed only the sample, and the Compare feedback said the sample was "shown below" although it sits above the feedback. Now, for `cr` only:
- the steps, then "One good answer: <sample>", "Other answers can also be right.", and "A good answer:" with every criterion;
- before Compare: "This shows one good answer and what a good answer does, so this question counts as answer shown. Compare your own writing with them. Then press Compare with the sample to tick the checklist.";
- after Compare (the line refreshes when Compare is pressed): "… Compare your own writing with them. You can tick the checklist below.";
- opened after comparing: "You already compared your answer. Here are the steps.";
- the Compare feedback: "One good answer and a checklist are shown above. …".

Choice items keep their wording. The layout, top to bottom, is hints, Show me how, the compare box with the tickable checklist, the feedback, then the buttons. practice-own D.3 checks the wording and the measured positions on a fixture; D.4 checks the authored 3.T.C.2.a C12 item (sample, every criterion, no "choose", Answer shown).

**The player's mode tag on own sets.** An earlier build tagged own sets "Practice on my own". That was not an intended change in the architecture (the Try step keeps its name), and once the content team moved 3.T.C.1.b to core it broke the tag assertions in guard 16.3 and path-headers.py. Own sets now keep the tag "Try it yourself"; guard 16.3 is back to its original text and path-headers.py was never changed. The set picker heading still reads "Try It Yourself: practice on my own".

## 2. Changes by file

**New files**
- `js/practice.js`: the `pp.practice.v1` store (`PP_PRACTICE`). Load follows the UX-002 pattern (prototype-free maps, unsafe names dropped, numbers clamped, booleans forced, unknown fields kept). A probe write detects blocked or full storage. Status is derived from `w`, `h`, `x`, `ok` (and `cr.done`), which only ever go up; every action is also appended to a per-item `log` (last 40). Rendering never writes; `update()` and `place()` run only from a child's action. Notices: unavailable, damaged, partly damaged.
- `js/std.js`: `PP_STD` (`resolve`, `open`, `label`, `name`). Handles leaf codes, parents, `3-5.` band forms, GaDOE's printed `3-5.RA.n`, `3.L.GC.1:M|R|I|C`, Practices codes. Leaf pages, parent pages (GUM grouped by level), habit leaves. Reads only through `PP_SKILLS.info()` and `PP_PRACTICE` getters.
- `js/data/std-groups.js`: 30 parent standards with band, name, official wording, page, `order`, optional `lessons` (3.T.SS.1.a: TS-SEQ, TS-CE, TS-PS, TS-CC, TS-DESC, 3.T.SS.1.a) and `observe`. Generated from the transcription below, then given the recommended orders (3.T.T.1: b, c, a, d, e; GUM: M, R, I, C).
- `docs/audits/work/official-gr3-parents.json`: the parent ("STANDARD") statements transcribed with `pdftotext -layout` from the page holding each grade 3 table. Where the same standard is worded differently on another page it is kept in `otherWordings`. **Two source discrepancies to note:** 3.T.RA.2 reads "Reference parts of texts…" on pp. 24/36 but "Integrate evidence from print and digital sources…" on p. 38 (the detail page, used here); 3.L.V.1 adds "and phrases" on p. 21. GaDOE prints 3.T.RA.1/2 as "3-5.RA.1/2" on pp. 37-38.
- `docs/expansion-2026-10-22/practice-exceptions.json`: the six performance exceptions from `04-content-plan.md`, marked proposed.
- `verification/practice-own.py`: the new suite (§4).

**Changed files**
- `js/pp.js`: `PP.stdLink(code, text, cls)` and `PP.stdHash` (keeps `:` readable in addresses).
- `js/skills.js`: `addLesson` core branch (Together exclusion, `:y`, `:y2`, `:y3` own sets with `own`/`setNo`, next chain Together → picker → set 2 → set 3 → check, `PP.core`, `PP.similarFor`); `status()` and `displayState()` read `PP_PRACTICE.any` (read only); the Try tick uses `PP_PRACTICE.complete` on core lessons; `recordPractice` sets `tried` only when all fifteen are finished; the set picker (`renderOwn`); catalog and habit codes moved out of the row button into sibling links (`li.sl-row > button.skill-line + span.sl-codes`; the button's `data-code` and aria-label are unchanged); chips and the official-wording label are links; the search card for codes and `3-5.` normalisation; `lessonsFor()` and `info()` read-only exports; `#skill-back` returns to a standard page when opened from one ("← Standard 3.T.T.1.c").
- `js/engine/player.js`: own mode (Check my answer with retries and the two-tries rule, Give me a hint, Show me how, Try a similar question, Previous/Next with skip, end-of-set summary, already-finished stage with Look back / Go on); resume with saved responses, choice orders, hints and reveals (validated before use); `cr` compare panel; test navigator and Mark to review; the unanswered/marked list before submit; results: component rows only with at least two questions and three points (others grouped), the partial-credit line, partial lines in the review, "What to work on next", and the retry note.
- `js/engine/items.js`: `T.cr` (never scored: 0 of 0).
- `js/app.js`: `std` screen and route (band forms settle on the grade 3 address with `replaceState`), the delegated `a.std-link` handler, `rememberReturn`/`back` for std, `stepBackTo` exported, Back from `:y2`/`:y3` opens the Try step, the "How a lesson works" Try line worded for both lesson kinds.
- `js/parents.js`: the first "Where to practice" line is the standard-page link (it replaces the single `lessonFor` button; the summary stays plain because it is the disclosure control); claims-table codes are links; the search matches `display`, `group` and `3-5.` forms.
- `js/path.js`: a `p.path-codes` row of code links after each lesson button; the Try adult note per lesson kind.
- `index.html`: `#screen-std`; `#q-nav`, `#q-hint`, `#q-how`, `#q-flag`, `#q-similar`, `#q-status`, `#q-storage`, `#q-how-steps`, `#q-cr`, `#confirm-list`, `#res-revisit`, `#res-again-note`, `#again-next`, `#done-summary`; script tags for `practice.js`, `std-groups.js`, `std.js`.
- `css/styles.css`: the habit-code hiding rule removed; one appended block for links, the std page, the picker, own-mode controls, the navigator and results.
- `verification/check-content.js`: rules in §3.
- `verification/guard.py`: four documented adjustments (§5).

## 3. check-content rules added

Applied in `checkCore()` (every lesson) and two new blocks:
1. **Migration (rule 1):** lessons with a check and neither `core` nor `coreException` nor an entry in `practice-exceptions.json` produce one summary **warning** (85 today). A listed exception that has `core` fails; `coreException` needs `kind` and `rationale`.
2. **Structure:** exactly three sets of five; `core.rev` a non-empty string.
3. **Ids:** `SK-` prefix; unique in core and site-wide; an inline core id may not reuse a practice or check id (use `{ref}`).
4. **Hints:** exactly three, non-empty, distinct; **fail** if a hint contains the answer text (two words or more; for hot text the answer sentence) or refers to a choice by position; warn on a key-only word in hints 1-2 and when hint 1 is much longer than hint 3. Addons on Together items are checked too.
5. **how:** two to five steps; no positional references; for mc/ms core items the steps or `why` must name the answer (failure).
6. **cr:** `sample` and two to five `criteria`; **fails anywhere outside core and similar**; never carries points.
7. **Distinct:** fail on a shared stem or identical question; warn on name-swapped copies.
8. **Separation:** fail when a core or similar item uses a passage that a check (A or B) uses, or shares an id or stem with a check item.
9. **Similar:** 3-15 items, `like` must name core items, no id/stem shared with core; **uncovered core items are a warning** (lead decision).
10. **Together on a core lesson:** 2-5 items after the refs are removed; every ref names a practice item, used once (10b). The derived Together ids are printed as `info` lines.
11. **Standard groups:** wording, page and band match `official-gr3-parents.json`; `order` lists exactly the leaf codes under each parent; `lessons` keys are in `order` and name every main lesson for that code; every parent with leaves has a group.

The review-ledger and assessment-version hashes (architecture rules 11-12) and a `--release` switch are **not** implemented (§7).

## 4. Tests

### New suite: `verification/practice-own.py` (phase 1: 67 checks; now 73, see 9.4)
`CHROMIUM_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome python3 verification/practice-own.py http://127.0.0.1:8720/ <out>` (screenshots and `practice-own-results.json` in `<out>`; this run used the scratchpad, `…/scratchpad/eng/out-own/`).

| Group | What it proves |
|---|---|
| A (5) | Together = P1-P3 exactly, P4-P6 only in core; set ids/next chain; addons merged; Together keeps Help me and ends at the picker |
| B (17) | every control and label, 44px targets, blank state, wrong → retry, two-tries rule, three authored hints in order with no outline or narrowing, Show me how (steps, answer, mix-up, outline, focus) marks Answer shown permanently, history log, no `pp.progress.v1` writes, similar item separate (`s` with `for`), bank used up, uncovered item hides the button, all five statuses in words, already-finished stage, Look back, picker statuses |
| C (4) | resume after reload at question 4 with the unchecked answer, earlier answer, choice order and hint log; `#play/…:y3/test` runs as practice and stores no pass; after all fifteen only `tried:true` is written and the list says Started |
| D (4) | `cr` via an in-page fixture lesson and the authored 3.T.C.2.a C12: Not scored, Compare with the sample, criteria, status Written and checked, never right; resume of text and ticks; type-aware Show me how (sample, criteria, no "choose") and true position words |
| E (5) | blocked and full storage notices on picker and player, no stop-and-come-back promise, works for the visit, notice clears after a later save; malformed JSON, an array, and a mixed record (`__proto__`, string `w`, out-of-range `h`, out-of-range response) — honest notice, valid records cleaned, raw value untouched until a child acts |
| F (3) | compatibility (§6); a legacy `tried` shows Practicing but does not tick the fifteen-item step; a lesson without core behaves exactly as before |
| G (7) | all 211 standard addresses (147 leaves, 30 parents, 30 band forms, four grammar-chart levels) open with focused h1, official wording and page, no nested links, no sideways scroll at 320; rendering writes nothing; multi-lesson order; parent, GUM-level and Practices pages; every displayed code is a link and none is nested; code search for 3.T.T.1, 3-5.T.T.1, K-12.P.EICC.1, a GUM level, a GUM row and 3-5.RA.2 |
| H (2) | link → std → lesson → "← Standard" → std, Back, Forward, reload, parent link, page Back; direct addresses incl. band form, bad code, `#play/…:y2/try` and its Back |
| I (5) | navigator (states in words, aria-current), Mark to review, unanswered/marked list returning to the question, no help or feedback in a check, partial credit, one-code check reports its total, retry note for form B and for one-form lessons, revisit buttons, threshold for practice-test rows |
| J (1) | the seven viewports for the picker, the practice controls (hints and steps open), a std page and the check navigator: no sideways scroll, no clipped control, 44px targets |
| K, L (13) | no page errors; check-content passes on the candidate and **fails** ten mutated copies (set of four, hint with the answer, missing how, core passage in the check, bad ref, duplicate id, bad `like`, two hints, `cr` in a check, missing `rev`) and two mutated std-groups (wording, order) |

### Existing gates (phase 1 candidate; historical, superseded by 9.4)

Content agents were editing lesson files throughout, so the final candidate was **frozen**: the worktree was copied at 18:02:46 to `…/scratchpad/eng/snap/`, its checksums written to `…/scratchpad/eng/snap-md5.txt`, served on 8720, and every suite below ran against that copy. The guard run ended with the snapshot unchanged. After the runs, every engine, data and test file this work owns (`js/*.js`, `js/engine/*`, `js/data/std-groups.js`, `index.html`, `css/styles.css`, `verification/guard.py`, `check-content.js`, `practice-own.py`) was compared byte for byte with the worktree and is identical. Lesson files edited by the content team after 18:02:46 are **not** covered by these results.

| Command (run in the snapshot) | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures, 25 warnings; 17 core lessons, 255 core items, 51 similar items |
| `node verification/check-content.js` (manifest) | PASS, 0 failures, 25 warnings |
| `node verification/check-writing.js` | 0 failures, 0 warnings |
| `python3 verification/readability.py` | runs (report only), exit 0 |
| `node verification/check-instructional-copy.js` | 28 assertions passed |
| `python3 verification/practice-own.py http://127.0.0.1:8720/ <scratch>/eng/f-own` | **67 passed, 0 failed** |
| `guard-fixture.py path` (scratch copy of the launcher) | 148 passed, 0 failed |
| `guard-fixture.py path-headers` | 48 passed, 0 failed |
| `AXE_PATH=… python3 verification/path-a11y.py` | 12 + 12 + 12 runs, 0 violations, 0 contrast failures, lowest 4.64:1 (same as the redesign baseline) |
| `python3 verification/skills-recovery.py` | 67 passed, 0 failed |
| `PP_WRITING_TEST_PORT=8721 python3 verification/writing-recovery.py` | 75 passed, 0 failed |
| **Full guard**, `guard-fixture.py guard . http://127.0.0.1:8720/ <scratch>/eng/f-guard` | **110 passed, 0 failed, exit 0** |

Logs: `…/scratchpad/eng/f-*.log`. The launcher copy is `…/scratchpad/eng/guard-fixture.py`, a byte copy of the redesign's scratch launcher (port, root and output folder as arguments); its output went to the scratchpad, so no committed evidence was overwritten.

**Earlier guard runs (for the record).** Two runs on the live worktree overlapped the content team's rewrites of T-C.js, T-SS.js, T-TS.js and T-T1.js. The first failed 11.5 (its lesson, picked by load order, briefly had two forms) and then stalled in 8.1 on a new `cr` item, which led to the `cr` handling in 8.1. The second failed 16.3 after 3.T.C.1.b moved to core, which led to keeping the "Try it yourself" tag (see "Reviewer fixes after B0 review"). Neither failure remains on the frozen candidate.

## 5. Guard changes, with reasons

Each keeps its behavioural intent; only the population or the selector changes where the architecture says behaviour intentionally changes.

| Check | Change | Why |
|---|---|---|
| 2.x | skip `type:"cr"` items | a constructed response is never scored by design; practice-own D.1 asserts 0 of 0 |
| 3.x | **phase 2: no longer skipped.** Superseded by the phase-2 row below | (see ENG-03) |
| 8.1 | on own sets, press `#q-hint` three times and `#q-how` instead of `#q-help`; on a written (`cr`) core item, type a short answer before Check | the same "open all help, then answer, then check for sideways scroll" on the new controls; the guard's CORRECT helper has no `cr` case, and a `cr` item is never scored (T-C.js now has one) |
| 9.5a/9.5b/9.5 | the journey picks a lesson **without** core | it asserts the legacy Try It Yourself ("Help me unlocks after one wrong try"). On a core lesson this intentionally changes (9.5b in the architecture): hints and Show me how are available from the start; practice-own B.1-B.5 assert the new intent, help is opt-in and never automatic |

Not changed: 1.1b (no cumulative card), 4.x, 9.8/11.11 aria-labels (the row button is unchanged), 13.2 (its lesson is chosen as before; practice-own C.3 extends it to `:y3`), 14.x, 15.x, 16.3.

## 6. Compatibility evidence

practice-own F.1 seeds `pp.progress.v1` with a 2.1 undated pass, a PP-003/PP-004 form-B pass and a 3.T.T.1.c record with the old `tried`, plus `pp.path.v1`, `pp.task.W-TASK-01` and `pp.skwrite.3.T.T.1.e`. After opening the browse list, four standard pages, every 3.T.T.1.c step, both parent tabs, habits, the choice screen and a form-B lesson's check card, searching `3-5.T.T.1`, and then hinting, checking and revealing in set 1, **every seeded key is byte-identical**; the only new key is `pp.practice.v1`. (`#path` is not in that walk because opening the Learning Path has always saved its mode.) G.2 repeats the no-write check over all 211 standard addresses. F.3 shows a lesson without core keeps its split, card, Help me timing and writes nothing new. Old `#play/SK:<k>:y/try` addresses open set 1. No stored field changed meaning; `tried` on a core lesson now means "all fifteen finished", and a legacy `tried` still reads as Practicing.

## 7. Gaps and honest limits

- **Practice Together keeps its three-step ladder (ENG-08, decided).** It is adult-guided and guard 3.3 asserts it. The four controls belong to the fifteen independent questions. The authored Together addons stay in the data, merged but unused there. Recorded in 01-architecture.md.
- **Not built:** `testRev` and `attempts[].rev` check versioning; review-ledger and assessment-version hash rules; a `--release` switch that turns the migration warning into a failure.
- **Similar coverage (ENG-07):** as of phase 3 every core item in every core lesson has a mapped similar item (0 of 510 uncovered, section 9.2). When this section was first written (phase 1) 9 of 15 items on the reference lesson had none. Whether each similar item really tests the same skill is a content judgement.
- **Reviews reuse questions** a child may already have seen in lesson checks; they say so. CR-write and CR-lang have no accepted lessons yet, and the pages say that.
- **Content:** the tested snapshot has core on the lessons listed in `js/data/accepted.js` and others; check-content reports lessons with a check and no core as one migration warning. Content edits after the snapshot are not covered by these runs.
- **Guard fragility (pre-existing):** sections 11, 13 and 16 pick lessons by `Object.keys(PP.lessons)` order or by fixed key (3.T.C.1.b). As lessons move to core or gain form B, those picks can land on a different kind of lesson. practice-own.py now finds its "lesson without core" dynamically for this reason; the guard's own picks were left as they are.
- **Testing:** Chromium only, simulated viewports. No physical devices, Safari, native zoom, screen readers or family use.
- The `3-5.RA.2` wording discrepancy in GaDOE's own PDF (§2) should be noted to reviewers.

## 8. Phase 2 (after the independent engine review)

### 8.1 Review fixes
| ID | Fix |
|---|---|
| ENG-02 | `js/practice.js` no longer probes storage on load. `writable()` reuses `PP_PATH.storageOK()` until the first own save; the first save tests lazily. first-visit.py 124/124. |
| ENG-03 | Guard §3 now loops every set, own sets included, with the same 3.1, 3.2 and 3.4 assertions plus 3.3b (own-mode equivalent of the ladder check: a wrong answer never shows the explanation, the right answer is marked correct). All existing check names and assertions kept. **Mutant evidence:** the reviewer's M8 (own-mode wrong answer leaks the explanation), served from `scratchpad/eng/mut/M8-own-wrong-leaks-why`, makes the plain guard fail: `FAIL 3.2 a wrong Check never shows the walk-through` on SK-TC1a-P4, P5, C03, C04, C05 (119 passed, 1 failed, exit 1). The unmutated candidate: 120 passed, 0 failed. |
| ENG-04 | Guard 9.5-9.10 run as a journey function with a legacy variant and a core variant (names suffixed "-core"). The legacy names FAIL, not skip, if no non-core lesson remains; the core variant tests the same Help me timing on a core lesson. |
| ENG-06 | Changed-question detection: each question gets a signature (`sig`); a changed one is moved to `prev` and shown as new; the notice says whether one question changed or only the set version. practice-own M.1-M.4. |
| ENG-10 | Code links are at least 44 px tall. |
| ENG-11 | Each grammar-chart link has an accessible name that includes its row's skill (M.4). |

### 8.2 Similar-item reuse
`used` persists in `pp.practice.v1` across sittings. New rule: prefer an unused similar item whose `like` includes the current core item; otherwise offer the one in that list used least recently (`t`, else `d`). A reused item starts blank; the earlier attempt moves to `past` (at most ten). New fields only (`sig`, `prev`, `t`, `past`, `for`); no existing key changes meaning and no help history is erased. Tests N.1 (one sitting, all fifteen in order) and N.2 (second sitting after finishing). Decision recorded in 01-architecture.md.

### 8.3 ENG-09: the two missing assessment levels
- **Standard or skill-group reviews** (`RV-<parent>`), one per `#std/<code>` parent page, up to five components per part. Items come only from accepted lessons (`js/data/accepted.js`, checked against `batches/STATUS.md` by check-content). The page says where coverage is missing and what a review does and does not measure.
- **Cumulative ELA review** (`CR-lit`, `CR-info`, `CR-write`, `CR-lang`), labelled sections, manageable across sessions, links the existing practice tests rather than duplicating them, and separates curriculum review, state-test-shaped practice, writing tasks and adult-observed performance.
- **Coverage map** (`#coverage`): per standard, what the lesson check, group review, cumulative review and adult/writing evidence cover, and plainly what is not covered. No short form is called a test of every Georgia expectation.
- Results use the section 12 categories plus partial credit and revisit suggestions, no mastery claim from a small sample. They are stored in the new `pp.review.v1` (last 20 attempts per review). A review never awards a lesson pass and never writes `pp.progress.v1`.
- Files: `js/review.js`, `js/data/accepted.js`, `js/std.js`, `js/app.js`, `js/engine/player.js`, `index.html`, `css/styles.css`. Tests: `verification/review.py` (28 checks at the end of phase 3; 21 when first written: corrupt, blocked and full storage, no pass awarded, no writes on open, seven viewports, axe, keyboard).

### 8.4 Gates after phase 2 (historical, superseded by 9.4; frozen copy `scratchpad/eng/snap3`, snapshot 2026-10-23T10:00:31Z, 76 files, checksum list in `snap3-md5.txt`)
| Suite | Result |
|---|---|
| check-content `--all` | PASS, 0 failures, 25 to 26 warnings |
| check-content (manifest) | PASS |
| check-writing | 0 failures, 0 warnings |
| readability | exit 0 |
| copy (check-instructional-copy) | 28 assertions pass |
| path.py | 148 passed, 0 failed |
| path-headers.py | 48 passed, 0 failed |
| path-a11y.py (axe) | 0 violations, 0 contrast failures, 12 of 12 runs clean |
| skills-recovery.py | 67 passed, 0 failed |
| writing-recovery.py | 75 passed, 0 failed |
| guard.py (plain) | 120 passed, 0 failed, snapshot unchanged during run |
| first-visit.py | 124 passed, 0 failed |
| practice-own.py | 73 passed, 0 failed |
| review.py | 21 passed, 0 failed |

After the runs, the engine, data (accepted.js), index.html, CSS and test files in the worktree were byte-identical to snap3. Lesson files edited by content authors after the snapshot are not covered. Chromium only (one browser per page, because single-process Chromium closes with its page); the path-a11y run uses the packaged Chromium without single-process.

## 9. Phase 3: fixes from the independent re-review (06b, ACCEPT WITH CONDITIONS)

### 9.1 Fixes
| ID | Fix | Test |
|---|---|---|
| RR-01 | A review shows lesson-check answers, so opening **See my answers** on a review now notes those source lesson forms as seen. It uses a new additive field `reviewSeenBy: {A, B}` on the source lesson's record in `pp.progress.v1`; `answersSeenAt/By`, `tries`, `mastered`, `attempts`, and status are untouched, and nothing is awarded (a lesson with no record gets a record holding only `reviewSeenBy`, which still reads "new"). `recordTest` then marks a later pass `afterAnswers: true` even on the first try, adding `seenIn: "review"`; the skill page says "passed after seeing these questions' answers in a review". The pass itself is unchanged and is not hidden. A corrupt `reviewSeenBy` is ignored. | review.py R.18a-d. Mutant: dropping the `seenInReview` term fails R.18b and R.18c. |
| RR-03 | In table cells a code link is its own 44 px box with a gap and no negative margin (`td .std-link`), so the boxes no longer overlap. | review.py R.20: axe `target-size` on every Parents tab at the seven viewports. Mutant (rule removed) fails at all seven (3, 1, 11, 12, 6 and more nodes), the same counts the reviewer measured. |
| RR-04 | From 600 px wide the check navigator wraps, so no button is hidden behind a scroll. Below 600 px it still scrolls inside its own box. | review.py R.19: the largest review of 12 or fewer questions, seven viewports, no clipped button from 600 px up, no page scroll. Mutant (rule removed) fails at 1024, 1366 and 1920. |
| RR-05 | This file: the opening paragraph and the counts. | - |
| RR-06 | Not changed (a note). | - |
| RR-08 | review.py **R.4b** starts from a completely empty store and logs every `setItem`; only path.js's own probe is allowed. | R.4b |
| RR-09 | review.py finds axe itself (`AXE_PATH`, then `./node_modules`, the global node_modules, then `/tmp`) and otherwise stops with a clear message and exit code 2, not a late failure. | - |
| RR-13 | `verification/serve.js` answers 400 to a malformed percent-encoded path instead of throwing. `curl /%E0%A4%A` returns 400, and the next request returns 200. A NUL byte in the path returns 403 (the traversal check), which is also safe. | The plain guard ran as one pass (below). |

RR-10 (data points) and RR-07 (overlapping boxes on home, taps hit the link) are unchanged notes.

### 9.2 RR-02, re-measured (similar coverage)
The reviewer's 107 of 255 was measured before the SIM-1 and SIM-2 backfills. On the current content, `check-content.js --all` reports 34 core lessons, 510 core items, 510 similar items. A walk over every core lesson in the page (`PP.lessons[k].similar`, a core item counts as covered when some similar item lists it in `like`) finds **0 core items without a similar item, in all 34 core lessons (0 of 510) and in the 24 accepted lessons (0 of 360)**. The lessons that used to warn no longer do; the warning list is now 9 entries, none about similar coverage. Coverage of the right kind (a similar item that truly tests the same skill) is a content judgement this walk cannot make. Two practice-own checks depended on 3.T.T.1.c still having unmapped items; they now read the lesson (A.4) or unmap P5 in the page's memory (B.11), so the hidden-button rule stays under test.

### 9.3 Decision recorded
Answers seen in a review count as seen for the lesson check (field `reviewSeenBy`). It is recorded in 01-architecture.md section 2.5.

### 9.4 Final gates, frozen copy (`scratchpad/eng/snap4`, 2026-10-23, 121 files; checksums in `snap4-md5.txt`)
Run by `scratchpad/eng/run4.sh` in one sequence, against `node verification/serve.js . 8740`. The plain guard is one uninterrupted pass.

| Suite | Result |
|---|---|
| check-content `--all` | PASS, 0 failures, 9 warnings (34 core lessons, 510 core items, 510 similar) |
| check-content (manifest) | PASS, 0 failures, 9 warnings |
| check-writing | 0 failures, 0 warnings |
| readability | exit 0 (report only) |
| copy | 28 assertions passed |
| path.py | 148 passed, 0 failed |
| path-headers.py | 48 passed, 0 failed |
| path-a11y.py (axe) | 12 + 12 + 12 runs, 0 violations, 0 contrast failures |
| skills-recovery.py | 67 passed, 0 failed |
| writing-recovery.py | 75 passed, 0 failed |
| **guard.py, plain, one pass** | **120 passed, 0 failed, exit 0** |
| first-visit.py | 124 passed, 0 failed |
| practice-own.py | 73 passed, 0 failed (see note) |
| review.py (with axe) | 28 passed, 0 failed |

Note on practice-own: the first sequence run failed three checks (A.4, B.11, L.0) because the content team had changed 3.T.T.1.c during the run (more similar items, a changed core order, no "no similar item" warning left). Those were test assumptions, not engine behaviour. I corrected the three checks, copied only `verification/practice-own.py` into the frozen copy and re-ran it there: 73 passed, 0 failed. Every other suite ran on the frozen copy as it was.

Run commands: `CHROMIUM_PATH=<chrome> AXE_PATH=<axe.min.js> PP_WRITING_TEST_PORT=8741`, `node verification/serve.js . <port>`, then `python3 verification/<suite>.py http://127.0.0.1:<port>/ <out dir>`; check-content, check-writing and the copy check run with `node`; skills-recovery and writing-recovery start their own servers. `review.py` and `path-a11y.py` need axe (review.py now finds it or says so). Chromium 1194 only, simulated viewports, no real devices.

### 9.5 Gaps
Unchanged from 8: check versioning (`testRev`, `attempts[].rev`), the review ledger hash rules, and `--release` are not built (59 lessons with a check and no core remain a warning). Reviews draw on check items that were not blind-solved in this phase (RR-11); a blind solve of the review items would be needed to call them independently verified. A grown-up looking at a pass sees the review note only on the skill page.

## 10. Phase 4: check versioning, review ledger, `--release` (after re-review 2, 06c)

### 10.1 What was built (all additive)
| Item | Where | Behaviour |
|---|---|---|
| Check versioning | `js/skills.js` | `PP_SKILLS.testRev(key, form)` reads the lesson's optional `testRev: { A, B }` (default "1"). `recordTest` stores `rev` on each new `attempts[]` entry. An attempt without `rev` means "1". A pass, or a best score, set on an earlier version shows "on an earlier version of this check" (best score) and a grown-up line "this pass was on an earlier version of the check. The pass stands." Nothing about `mastered`, status or `passedAt` changes. Answers seen on version 1 do not make a version 2 pass "after seeing the answers": an additive `seenRev: {A, B}` (default "1") is written beside `answersSeenAt/By` and `reviewSeenBy`. |
| Review versions | `js/review.js` | Each `pp.review.v1` result stores `rev`, a short signature of the review's questions (ids, types, points). A result with a different signature says "The questions have changed since." A result with no `rev` (saved before) or a corrupt `rev` says nothing and keeps its score. |
| Version record | `verification/assessment-versions.json`, `check-content.js` | One entry per check form (`<key>:A`, `<key>:B`): `rev`, `hash` (every word), `mat` (ids, types, points, answer keys). One `inputs` entry for the reviews (accepted list, standard groups, accepted checks' `mat`). Bootstrapped by `--all --record-versions` from the content at that time (110 forms, every rev "1"). `--record-versions` refuses to record a material change that has no new `testRev`. |
| Review ledger | `docs/expansion-2026-10-22/review-ledger.json`, `check-content.js` | `lessons[key] = { core, similar, test: { A, B } }`, each part `{ rev, hash, reviewers, authors, date, record }`. Written only by `--all --record-review <key> --by "<reviewers>" --record <review file> [--authors ...] [--part ...] [--date ...]`. Refuses a reviewer who is also an author, a missing review file, no reviewer, and use without `--all`. The checker computes SHA-256 hashes of the core items (refs resolved, with their addons), the similar items, and each check form. |
| `--release` | `check-content.js` | Failures instead of warnings for: a lesson with a check and neither core nor a documented exception; a check form changed materially with the same `testRev`; a stale or missing version record; a part with no ledger entry; a part whose content differs from the ledger hash ("the shipped content is not what was reviewed"). In every mode (also the default) these fail: a malformed `testRev`; an invalid ledger entry (no reviewers, no date, review file not found, a reviewer who is also an author). The default run is unchanged except for the new, short warnings. |
| Harness | `verification/versioning.py` (new; 72 checks after engine review 3: 37 on mutated copies of check-content, the rest in the browser) | N.1-N.21 run check-content on mutated copies; B.1-B.11 run the browser side. |

### 10.2 Questions for the owner (not guessed)
1. **Who signs the ledger, and when?** Nothing in the repository records the hash of what a past reviewer actually saw (the review files name no content hash), so I did not back-fill reviewers. The ledger is empty. Release mode therefore fails today on 190 parts and 55 lessons with no core. A reviewer, or the lead acting on a reviewer's final verdict, has to run `--record-review` per lesson at acceptance. A back-fill from `STATUS.md` would say that the content shipped today is the content the reviewer saw, which the SK-TC1c-T2 change (10.5) shows is not always true.
2. **Do the legacy lesson checks (190 parts today, most of them lesson checks) need an independent review before release, or are they grandfathered?** I included checks in the ledger because the brief said "lesson/test content". If they are grandfathered, the owner should say how (for example a `legacy` list), and the rule changes in one place.
3. **Severity of rule 12.** 01-architecture 2.6 says a changed hash with an unchanged rev "fails". I made it a warning by default and a failure with `--release`, because the brief said the default mode stays unchanged while authors edit. I also split it: a wording-only edit (same ids, points, keys) only warns, even in release; a moved key, changed points or a changed id is the failure. Tell me if wording-only edits should also require a new rev.
4. **Review and cumulative sets in the version file.** The architecture asks for a hash per review set. Those sets are built in the browser from the accepted lessons, so the file holds one hash of their inputs and each stored result carries a run-time signature. Say if a hash per set, computed in node, is needed; it means running `review.js` in node.
5. **`--release` as the default gate** is architecture phase 6 and is not done.

### 10.3 Tests and mutation checks
New suite `verification/versioning.py`: 37 checks (N.1-N.21 on mutated copies of check-content, B.0-B.11 in the browser). I planted seven faults in copies; each is caught by a named check.

| Planted fault | Caught by |
|---|---|
| attempts do not store `rev` | B.1, B.2, B.6 |
| answers seen on an earlier version still count | B.6 |
| an earlier-version best score is not labelled | B.4 |
| `--release` severity removed (everything warns) | N.2, N.4, N.5, N.15, N.16, N.17 |
| material hash ignores answer keys and points | N.1, N.3, N.8, N.9 |
| ledger hash mismatch not detected | N.16, N.17 |
| review signature constant | B.8b |

Review fixes: review.py R.18a now names its failure (the earlier crash came from an unguarded dict lookup; with the review's `answersSeen` call removed it now reports R.18a, R.18b and R.18c), review.py says when `AXE_PATH` points at a file that does not exist, and R.6 picks its "not covered yet" standard from the page, because 3.T.T.1.e has since been accepted and now sits in a review. Three sentences in this file that 06c found wrong were corrected (similar coverage, the review.py count, the NUL byte 403).

### 10.4 Compatibility
Fields added: `rev` (attempts and review results), `seenRev` (progress record). No key, field meaning, or storage key changed; an old record with none of them reads exactly as before (B.3, B.4). A rollback to the previous engine ignores the new fields.

### 10.5 SK-TC1c-T2
06c found that a distractor of SK-TC1c-T2 (lesson 3.T.C.1.c) changed after the phase-1 snapshot, with the same id, points and key: from "Peepers stop singing when you come near." to "Peepers are so small that they are hard to see." Nothing recorded it. The B4 review of that lesson (`batches/B4-review-C1c.md`, line 169) says the first claim was not verifiable from the source, so this is probably a review fix, but I cannot prove the link. `STATUS.md` now lists 3.T.C.1.c as ACCEPTED (fifth review). With the new tooling this edit is "wording only": same `mat`, so no `testRev` change is required, and the version record would show it as an editorial edit until refreshed. No pass was affected, because the key did not move. Because the lesson is accepted, a reviewer should confirm the final wording and record it in the ledger (10.2, question 1).

### 10.6 Final gates, frozen copy `scratchpad/eng/snap5` (2026-10-24T01:30:31Z, 129 files; `snap5-md5.txt`)
Run by `scratchpad/eng/run5.sh` (one sequence on `node verification/serve.js . 8770`), then the guard again alone (`g5.sh`), because the first sequence's guard run was killed by a session restart.

| Suite | Result |
|---|---|
| check-content `--all` and manifest | PASS, 0 failures, 10 warnings (101 lessons; 40 core lessons, 600 core items, 600 similar) |
| check-writing | 0 failures, 0 warnings |
| readability | exit 0 |
| copy | 28 assertions passed |
| path-headers | 48 passed, 0 failed |
| path-a11y (axe) | 12 + 12 + 12 runs, 0 violations, 0 contrast failures |
| skills-recovery | 67 passed, 0 failed |
| writing-recovery | 75 passed, 0 failed |
| first-visit | 124 passed, 0 failed |
| practice-own | 73 passed, 0 failed |
| review | 28 passed, 0 failed |
| versioning (new) | 37 passed, 0 failed |
| **path.py** | **139 passed, 9 failed: fails only on in-progress content** |
| **guard.py, plain, `snap5` as it stands** | **117 passed, 2 failed (14.0, 14.3), then a timeout that ended the run: fails only on in-progress content** |
| guard.py, plain, `snap5b` (snap5 with only `L-GC2.js` put back to its `snap4` text), one pass | 120 passed, 0 failed, exit 0 |

**Why the two failures are content, not engine.** The content team is authoring TF-FEAT, TF-DIG (new file `T-CF.js`) and L-GC2 while these ran. (1) path.py hard-codes "101 activities" and "101 of 101"; the lesson count is now 101 plus the new lessons, so its 8 count checks and its finish-message check fail (the same suite gave 148/0 on `snap4`). (2) guard section 14 uses lesson 3.L.GC.2.b as its form-B fixture and expects the old Practice, Try, Test chain; L-GC2 has since given that lesson `core`, so `SK:3.L.GC.2.b:y` is now an own set whose next set is `:y2`. With the older `L-GC2.js` alone swapped back, the whole guard passes 120/0. Neither test was changed (they are not mine to loosen while the lessons are moving); they need new numbers or a different fixture lesson once the content settles. The engine files in this phase are identical in all runs.

### 10.7 Files changed in phase 4
`js/skills.js`, `js/review.js`, `verification/check-content.js`, `verification/versioning.py` (new), `verification/assessment-versions.json` (new), `docs/expansion-2026-10-22/review-ledger.json` (new, empty), `verification/review.py`, `verification/serve.js` (phase 3), `docs/expansion-2026-10-22/01-architecture.md`, `docs/expansion-2026-10-22/05-engine-implementation.md`. The question-first worktree `/home/claude/pp-qf` was not touched. For merging there: every change is additive (new optional lesson field `testRev`; new fields `rev` on attempts and review results and `seenRev` on progress records; new files; new check-content flags). The one place it can conflict is `recordTest` and `bestText` in `js/skills.js`.

### 10.8 Lead decisions (2026-10-23) and the commands to run at the end
**Lead decision, Q1/Q2.** The existing legacy-lesson checks are grandfathered for release; the ledger is required for every lesson that has core practice (its core, its similar items, and its check forms). Implemented: with or without `--release`, a lesson with no `core` is not asked for ledger entries (it can still be recorded). The lead will populate the ledger at the end with `--record-review` from the review files (reviewer ids from the review documents, authors from the author logs). **Lead decision, Q3:** wording-only edits stay warnings. **Q4:** the input-hash plus run-time signature design is accepted. **Q5:** `--release` is not the default gate yet.

**What the version warnings on the live tree mean** (read on 2026-10-27; `check-content.js --all` on `/home/claude/pp-content`):
| Warning | Meaning | Action |
|---|---|---|
| `3.L.V.2.a:A` and `:B`: record rev 1, testRev 2 | The authors raised `testRev` to "2" on both forms. They were right to: item 4 changed from a 2-point matching item to a 1-point multiple-choice item (same id, different points and key). | Record it. |
| `3.L.GC.2.b:B` wording only | Item 5 text gained a clause; the explanation changed. Id, points and key unchanged. | Refresh the hash. |
| `3.L.V.2.b:A` wording only | Item 2 was **rewritten** (new prompt, new choices) with the same id, points and answer position. The tool cannot call that material by key alone. | Refresh the hash, **and ask the lesson's reviewer whether this is a different question**. If it is, the lesson needs `testRev: { A: "2" }` first. |
| `TF-FEAT:A`, `TF-DIG:A` wording only | Both lessons were still being drafted when the record was bootstrapped; their first items were replaced wholesale (different prompts and passages, same ids). No attempts exist on a new lesson, so no rev is needed. | Refresh the hash. |
| the inputs of the reviews changed | The accepted list and the standard groups grew (47 accepted lessons now). | Refresh; the reviews' rev goes to 2. |

New in this phase: the version record also stores a short hash of each item's question text (`q`), so a reworded question that keeps its id, points and answer position is **named** in a warning ("the question text itself ... changed on <ids>"). It cannot tell a correction from a different question; that stays a reviewer's call. The committed record has no `q` yet, so the names appear only after the next `--record-versions`; the first run below creates them. To be precise about the limit: before that run, the check above for `3.L.V.2.b:A` could not be shown by name.

**Commands, in this order, at the end (not run):**
1. Make sure nothing else is changing in the lesson files. Run `node verification/check-content.js --all` and read the `versions:` lines. Any line that says "changed materially" must be fixed in the lesson first (raise `testRev`).
2. Refresh the version record (one command; it refuses and says why if a material change has no new rev):
```
node verification/check-content.js --all --record-versions
```
3. Record the independent reviews, once per review file (the 47 accepted lessons in STATUS.md today; fill in the reviewer and author names from the documents; a reviewer who is also an author is refused). Run it only after the review verdict is final for that content, because the hash is of the content as it is at that moment:
```
node verification/check-content.js --all --record-review 3.T.T.1.c --by "<reviewers named in B0-review-2.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B0-review-2.md
node verification/check-content.js --all --record-review 3.T.T.1.a,3.T.T.1.b --by "<reviewers named in B1-rereview-b1a-4.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B1-rereview-b1a-4.md
node verification/check-content.js --all --record-review 3.T.T.1.d --by "<reviewers named in B1-rereview-b1a-3.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B1-rereview-b1a-3.md
node verification/check-content.js --all --record-review TS-PS --by "<reviewers named in B1-rereview-b1b-3.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B1-rereview-b1b-3.md
node verification/check-content.js --all --record-review 3.T.C.2.a --by "<reviewers named in B1-rereview-b1b-2.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B1-rereview-b1b-2.md
node verification/check-content.js --all --record-review 3.T.SS.2.a --by "<reviewers named in B1-rereview-b1c-2.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B1-rereview-b1c-2.md
node verification/check-content.js --all --record-review 3.T.T.4.a --by "<reviewers named in B1-rereview-b1c.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B1-rereview-b1c.md
node verification/check-content.js --all --record-review 3.T.T.2.a,3.T.T.2.b --by "<reviewers named in B2-rereview-T2-2.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B2-rereview-T2-2.md
node verification/check-content.js --all --record-review 3.T.T.2.c --by "<reviewers named in B2-rereview-T2.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B2-rereview-T2.md
node verification/check-content.js --all --record-review TS-SEQ,TS-DESC,TS-CE,TS-CC --by "<reviewers named in B2-rereview-TS-2.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B2-rereview-TS-2.md
node verification/check-content.js --all --record-review 3.T.SS.1.a,3.T.C.1.b --by "<reviewers named in B2-rereview-SC-2.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B2-rereview-SC-2.md
node verification/check-content.js --all --record-review TF-FEAT,TF-DIG --by "<reviewers named in B5-comp-review.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B5-comp-review.md
node verification/check-content.js --all --record-review 3.L.GC.2.a,3.L.GC.2.b,3.L.GC.2.c,3.L.GC.2.d --by "<reviewers named in B5-b5a-review.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B5-b5a-review.md
node verification/check-content.js --all --record-review 3.L.V.1.a,3.L.V.1.b,3.L.V.2.a,3.L.V.2.b,3.L.V.2.c,3.L.V.3.a,3.L.V.3.b --by "<reviewers named in B5-b5b-review.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B5-b5b-review.md
node verification/check-content.js --all --record-review 3.T.T.3.a,3.T.RA.1.a --by "<reviewers named in B3-b3b-rereview.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B3-b3b-rereview.md
node verification/check-content.js --all --record-review 3.T.C.1.a,3.T.C.2.c --by "<reviewers named in B3-b3a-rereview.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B3-b3a-rereview.md
node verification/check-content.js --all --record-review 3.T.RA.1.b,3.T.RA.2.a,3.T.RA.2.b --by "<reviewers named in B3-b3c-rereview.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B3-b3c-rereview.md
node verification/check-content.js --all --record-review 3.T.C.1.c --by "<reviewers named in B4-review-C1c.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B4-review-C1c.md
node verification/check-content.js --all --record-review 3.T.RA.1.c --by "<reviewers named in B4-review-RA1c.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B4-review-RA1c.md
node verification/check-content.js --all --record-review 3.T.T.1.e,3.T.T.2.d --by "<reviewers named in B4-review-T1e-T2d.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B4-review-T1e-T2d.md
node verification/check-content.js --all --record-review 3.T.T.3.c,3.T.T.4.b --by "<reviewers named in B4-review-T3c-T4b.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B4-review-T3c-T4b.md
node verification/check-content.js --all --record-review 3.T.SS.1.b,3.T.SS.1.c --by "<reviewers named in B4-review-SS1bc.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B4-review-SS1bc.md
node verification/check-content.js --all --record-review 3.T.SS.2.b,3.T.SS.1.d --by "<reviewers named in B4-review-SS1d2b.md>" --authors "<authors named in the matching author log>" --record docs/expansion-2026-10-22/batches/B4-review-SS1d2b.md
```
4. Check: `node verification/check-content.js --all --release` should show no `ledger` or `versions` failure for the accepted lessons. It will still fail on lessons with core that are not yet accepted (no ledger entry) and on legacy lessons that have neither core nor a documented exception (36 when this was first written, 27 when measured on 2026-10-27; the count moves as batches land, so read it from the run); that is the intended state until they are migrated.

**Fixtures made stable (this phase).** `verification/path.py` no longer hard-codes 101 activities, 99 lessons or 53 practice codes: it reads the lesson and task counts from the page and the practice codes from the coverage matrix, then checks that the path lists every lesson and task once. `verification/guard.py` section 14 no longer depends on 3.L.GC.2.b having no core: the Try step is `:y3` when the lesson has core and `:y` when it does not, point totals are read from the lesson, and if the lesson ever stops having two equal forms the first lesson that does is used. All assertions keep their meaning. The question of the version file in the question-first branch is unchanged (additive).

### 10.9 Final gates, fresh frozen copy `scratchpad/eng/snap7` (2026-10-27T13:20:34Z, 136 files; `snap7-md5.txt`)
One sequence (`run7.sh`, `node verification/serve.js . 8790`), the plain guard last, as one pass.

| Suite | Result |
|---|---|
| check-content `--all` and manifest | PASS, 0 failures, 72 warnings (101 lessons; 59 core lessons, 885 core items, 885 similar) |
| check-writing | 0 failures, 0 warnings |
| readability | exit 0 |
| copy | 28 assertions passed |
| path.py | 148 passed, 0 failed (numbers now derived from the data) |
| path-headers | 48 passed, 0 failed |
| path-a11y (axe) | 12 + 12 + 12 runs, 0 violations, 0 contrast failures |
| skills-recovery | 67 passed, 0 failed |
| writing-recovery | 75 passed, 0 failed |
| first-visit | 124 passed, 0 failed |
| practice-own | 73 passed, 0 failed |
| review | 28 passed, 0 failed (see note) |
| versioning | 40 passed, 0 failed |
| guard.py, plain, one pass | 120 passed, 0 failed, exit 0 |

Note on review.py: the first run failed R.5 because all four cumulative areas now have an accepted lesson, so the hub no longer says "Not available yet" anywhere; the check asserted that text unconditionally. It now asserts the text exactly when some area has no accepted lesson (read from the page). I copied only `verification/review.py` into the frozen copy and re-ran it there: 28 passed. Other test changes in this phase: versioning.py builds its own records inside its scratch copy (so it no longer depends on how far the committed records are behind the lessons), and N.22 and N.3b/N.3c are new.

Changed in this phase: `verification/path.py`, `verification/guard.py` (section 14 only), `verification/check-content.js`, `verification/versioning.py`, `verification/review.py`, and this file. Lesson files, `accepted.js`, `assessment-versions.json` and the ledger were not touched.

**Open question (new).** A reworded question can keep its id, points and answer position (3.L.V.2.b item 2 did). The tool now names such items but only warns. Should that be a failure in `--release` for lessons that have core? I left it a warning, in line with the decision on wording-only edits.

### 10.10 Engine review 3 (engine-review-3.md): six MUSTs fixed

Counts below are as measured on 2026-10-27 and move as content lands.

1. **Material hash.** `mat` now covers, besides ids, types, points and keys: the TEXT of every correct choice (mc, ms, ebsr both parts), match columns (order and text) and rows, dropdown and hottext option order and the answered option's text, order-item step order and text, and the passage ids each item uses. Passage TEXT is hashed per passage (`passage:<id>` entries in `q`) and enters the form hash, so editing a passage of a reviewed lesson raises a `versions` line and a ledger line (core, similar and checks hash the passages they use). Strictness trade-off: fixing a typo in a correct answer is now a material change and needs a new `testRev` (or, for a pure typo, is the reviewer's call to accept via a new rev). Edits to wrong-choice text, prompts, clues and explanations are not material.
2. **Reworded questions.** A prompt, wrong-choice or passage reword with unchanged id, points and key is a warning in default mode. For lessons with core it FAILS under `--release` unless acknowledged: `--record-versions --accept-reword <id,id> --by "<name>"`. `--record-versions` refuses (and leaves the file untouched) when a change is not covered; the ids named must actually have changed. Acknowledgements are stored per form as `acks: [{id, by, date, q}]`. Legacy lessons only warn, and are recorded with a printed note.
3. **Damaged files.** `assessment-versions.json` and `review-ledger.json` are never replaced when truncated, not an object, missing `v`, or with `forms`/`lessons` null or empty; the record commands print `NOT RECORDED` and leave the bytes unchanged. A missing file needs `--init`. A damaged file is a FAIL in every mode (no crash). Writes go through a temp file and rename.
4. **`--record-review`.** Requires `--all`, `--by` (reviewers: a person or role id, typed by the lead; the ledger is a process record, not a signature), `--authors`, a real non-future `--date`, `--part` in core|similar|test|all, and `--record` = an existing `.md` under `docs/` that mentions the lesson key and names each reviewer. The author check ignores case, spacing, periods and given-name versus initial ("A. Author" collides with "Al Author"). Semantics: the entry stores the content hash AT RECORDING TIME (`hash`) and the review file's own hash (`recordHash`); editing the review file later invalidates the entry. If the review file contains the hash prefixes printed by `--print-hashes <key>`, the basis is `hash-in-review`; otherwise `--lead-attest "<reason>"` is required and the basis is `lead-attestation`. `--release` prints how many entries rest on each basis.
5. **Revs.** Each form keeps a `history`; a lowered or reused `testRev` is refused, and a removed form keeps a tombstone so it cannot return with a rev it used. `inputs.rev` is informational only.
6. **Floors.** `path.py` requires lessons >= the distinct matrix lesson keys, tasks >= 2, entries >= lessons + tasks. `guard.py` section 14 picks a lesson with form B AND core when one exists (14.0b asserts it, and the lesson is printed); every earlier assertion keeps its meaning (point totals and the try set are read from the page). `review.py` R.5b forces `PP_ACCEPTED=[]` and expects "Not available yet", no Start buttons.

**Command-list changes for 10.8.** `--record-versions` needs `--init` only if the file is missing, and now also refuses unacknowledged rewords. `--record-review` needs `--authors`, a review file containing the key and reviewer names plus the `--print-hashes` lines (or `--lead-attest "<reason, 10+ characters>"`). The committed version record is the old format, so default runs say "the version record uses the previous hashing" until `--record-versions` is run once content settles. The 12 unaccepted core lessons keep `--release` failing on the ledger.

Tests: `versioning.py` N.1-N.33 (N.33 is the per-type matrix, about 70 edits over seven item types) and B.0-B.11 (72 checks); the reviewer's mutations M1-M10 are covered by N.3b-g, N.4-N.4i, N.16-N.17b and N.25-N.32.

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

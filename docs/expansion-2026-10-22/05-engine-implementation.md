# 05 · Engine and UX implementation

**Role:** UX and implementation engineer. **Worktree:** `/home/claude/pp-content`, branch `content/standards-practice` (on top of the homepage redesign candidate 1aa61c5). **Server used:** `node verification/serve.js . 8720`. No git commands were run.

This implements phases 1 to 5 of the lead's brief against `01-architecture.md`, with the lead's decisions applied. Phase 4 of the architecture (standard/skill-group reviews and the cumulative review, `pp.review.v1`) was **not** in this brief and is not built.

## 1. Lead decisions as implemented

| Decision | Where | How it is checked |
|---|---|---|
| Practice Together on a core lesson = `practice` minus every item `core` references with `{ref}`; lessons without core keep `ceil(n/2)` | `js/skills.js` `addLesson` | check-content rule 10b prints the derived Together ids (`3.T.T.1.c: SK-TT1c-P1, P2, P3`); practice-own A.1, A.2, A.5, F.3 |
| `addons` (lesson level, keyed by item id, `{hints, how, mix?}`) merged at registration; `misconception` is accepted as well as `mix` | `js/skills.js` `withAddon` | check-content validates keys and fields; practice-own A.4 |
| A core item with no mapped similar item hides "Try a similar question" (no fallback to another item's similar) | `js/engine/player.js` `similarFor` | check-content **warning** (not failure); practice-own B.10, B.11 |
| `core.rev` versions the core set; stored as `rev` in each lesson record; the picker says so when it differs | `js/practice.js`, `renderOwn` | check-content fails a missing `rev` (L.a-missing-core.rev) |

`01-architecture.md` was updated to state the Together exclusion, rule 10b, the warning-only similar coverage and the no-fallback similar choice.

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

### New suite: `verification/practice-own.py` — 65 checks, all passing
`CHROMIUM_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome python3 verification/practice-own.py http://127.0.0.1:8720/ <out>` (screenshots and `practice-own-results.json` in `<out>`; this run used the scratchpad, `…/scratchpad/eng/out-own/`).

| Group | What it proves |
|---|---|
| A (5) | Together = P1-P3 exactly, P4-P6 only in core; set ids/next chain; addons merged; Together keeps Help me and ends at the picker |
| B (17) | every control and label, 44px targets, blank state, wrong → retry, two-tries rule, three authored hints in order with no outline or narrowing, Show me how (steps, answer, mix-up, outline, focus) marks Answer shown permanently, history log, no `pp.progress.v1` writes, similar item separate (`s` with `for`), bank used up, uncovered item hides the button, all five statuses in words, already-finished stage, Look back, picker statuses |
| C (4) | resume after reload at question 4 with the unchecked answer, earlier answer, choice order and hint log; `#play/…:y3/test` runs as practice and stores no pass; after all fifteen only `tried:true` is written and the list says Started |
| D (2) | `cr` via an in-page fixture lesson: Not scored, Compare with the sample, criteria, status Written and checked, never right; resume of text and ticks |
| E (5) | blocked and full storage notices on picker and player, no stop-and-come-back promise, works for the visit, notice clears after a later save; malformed JSON, an array, and a mixed record (`__proto__`, string `w`, out-of-range `h`, out-of-range response) — honest notice, valid records cleaned, raw value untouched until a child acts |
| F (3) | compatibility (§6); a legacy `tried` shows Practicing but does not tick the fifteen-item step; a lesson without core behaves exactly as before |
| G (7) | all 211 standard addresses (147 leaves, 30 parents, 30 band forms, four grammar-chart levels) open with focused h1, official wording and page, no nested links, no sideways scroll at 320; rendering writes nothing; multi-lesson order; parent, GUM-level and Practices pages; every displayed code is a link and none is nested; code search for 3.T.T.1, 3-5.T.T.1, K-12.P.EICC.1, a GUM level, a GUM row and 3-5.RA.2 |
| H (2) | link → std → lesson → "← Standard" → std, Back, Forward, reload, parent link, page Back; direct addresses incl. band form, bad code, `#play/…:y2/try` and its Back |
| I (5) | navigator (states in words, aria-current), Mark to review, unanswered/marked list returning to the question, no help or feedback in a check, partial credit, one-code check reports its total, retry note for form B and for one-form lessons, revisit buttons, threshold for practice-test rows |
| J (1) | the seven viewports for the picker, the practice controls (hints and steps open), a std page and the check navigator: no sideways scroll, no clipped control, 44px targets |
| K, L (13) | no page errors; check-content passes on the candidate and **fails** ten mutated copies (set of four, hint with the answer, missing how, core passage in the check, bad ref, duplicate id, bad `like`, two hints, `cr` in a check, missing `rev`) and two mutated std-groups (wording, order) |

### Existing gates (final source)

| Command | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures (warnings: legacy content warnings, uncovered similar items on 3.T.T.1.c and 3.T.SS.2.a, the migration summary) |
| `node verification/check-content.js` (manifest) | PASS, 0 failures, 16 warnings |
| `node verification/check-writing.js` | 0 failures, 0 warnings |
| `python3 verification/readability.py` | runs; report only |
| `node verification/check-instructional-copy.js` | 28 assertions passed |
| `guard-fixture.py path` (scratch copy of the launcher) | 148 passed, 0 failed |
| `guard-fixture.py path-headers` | 48 passed, 0 failed |
| `AXE_PATH=… python3 verification/path-a11y.py` | 12 + 12 + 12 runs, 0 violations, 0 contrast failures, lowest 4.64:1 (same as the redesign baseline) |
| `python3 verification/skills-recovery.py` | 67 passed, 0 failed |
| `PP_WRITING_TEST_PORT=8721 python3 verification/writing-recovery.py` | 75 passed, 0 failed |
| Full guard, `guard-fixture.py guard . http://127.0.0.1:8720/ <scratch>/eng/out-guard` | GUARD_RESULT |

The launcher copy is `…/scratchpad/eng/guard-fixture.py`, a byte copy of the redesign's scratch launcher (port, root and output folder as arguments); its output went to the scratchpad, so no committed evidence was overwritten.

## 5. Guard changes, with reasons

Each keeps its behavioural intent; only the population or the selector changes where the architecture says behaviour intentionally changes.

| Check | Change | Why |
|---|---|---|
| 2.x | skip `type:"cr"` items | a constructed response is never scored by design; practice-own D.1 asserts 0 of 0 |
| 3.x | skip `s.own` sets | own sets have no Help me ladder by design (§2.2.1); practice-own B asserts their controls (hints never outline, nothing reveals without a request) |
| 8.1 | on own sets, press `#q-hint` three times and `#q-how` instead of `#q-help` | the same "open all help, then check for sideways scroll" on the new controls |
| 9.5a/9.5b/9.5 | the journey picks a lesson **without** core | it asserts the legacy Try It Yourself ("Help me unlocks after one wrong try"). On a core lesson this intentionally changes (9.5b in the architecture): hints and Show me how are available from the start; practice-own B.1-B.5 assert the new intent, help is opt-in and never automatic |

Not changed: 1.1b (no cumulative card), 4.x, 9.8/11.11 aria-labels (the row button is unchanged), 13.2 (its lesson is chosen as before; practice-own C.3 extends it to `:y3`), 14.x, 15.x, 16.3.

## 6. Compatibility evidence

practice-own F.1 seeds `pp.progress.v1` with a 2.1 undated pass, a PP-003/PP-004 form-B pass and a 3.T.T.1.c record with the old `tried`, plus `pp.path.v1`, `pp.task.W-TASK-01` and `pp.skwrite.3.T.T.1.e`. After opening the browse list, four standard pages, every 3.T.T.1.c step, both parent tabs, habits, the choice screen and a form-B lesson's check card, searching `3-5.T.T.1`, and then hinting, checking and revealing in set 1, **every seeded key is byte-identical**; the only new key is `pp.practice.v1`. (`#path` is not in that walk because opening the Learning Path has always saved its mode.) G.2 repeats the no-write check over all 211 standard addresses. F.3 shows a lesson without core keeps its split, card, Help me timing and writes nothing new. Old `#play/SK:<k>:y/try` addresses open set 1. No stored field changed meaning; `tried` on a core lesson now means "all fifteen finished", and a legacy `tried` still reads as Practicing.

## 7. Gaps and honest limits

- **Practice Together still uses the engine ladder** (clue, narrowing, walk-through). The authored hints in `addons` for P1-P3 are merged into the items but not shown in Together, because guard 3.3 asserts that ladder. Switching Together to authored hints is a separate decision.
- **Not built:** architecture phase 4 (reviews, cumulative review, `pp.review.v1`, the coverage-map generator); `testRev` and `attempts[].rev`; the review-ledger and assessment-version hash rules; a `--release` switch that turns the migration warning into a failure; "Start this set again" (history is never erased, so nothing needs restoring).
- **Similar coverage:** on 3.T.T.1.c, 9 of 15 core items have no similar item, so the button is hidden on them (warning, per the lead).
- **Content:** only 3.T.T.1.c (and 3.T.SS.2.a, authored in parallel by the content team) have `core`; 85 lessons await migration.
- **Testing:** Chromium only, simulated viewports. No physical devices, Safari, native zoom, screen readers or family use.
- The `3-5.RA.2` wording discrepancy in GaDOE's own PDF (§2) should be noted to reviewers.

# 06c · Independent engine re-review (round 3)

**Reviewer role:** independent reviewer. I did not write the engine or the fixes. I ran no `git` command and edited no source file. The only file I wrote in the worktree is this one. Every test, probe and planted breakage ran on scratch copies. I started servers on my own ports (9360, 9370, 9371, 9381 to 9385, 9390, 9391) and stopped each by pid.

**Browser.** Playwright Chromium 1194, simulated viewports only. No real device, no native zoom, no screen reader.

---

## Verdict

**ACCEPT WITH CONDITIONS.**

RR-01, RR-03, RR-04, the `serve.js` 400 and the `review.py` axe discovery are all fixed. I confirmed each one in my own browser runs and by planting the opposite fault. RR-05 is mostly fixed: three sentences are still wrong (see 3). The saved-data meaning is unchanged. I found no merge-blocking engine defect.

The conditions are about completion, not about this round's fixes:

- **MUST-1.** The assessment-versioning work is still not built (see section 5), and I found one unversioned change to a live check item.
- **MUST-2.** The live worktree is not a clean candidate right now (see section 1). Every gate must be re-run on the final combined tree.

---

## 1. What I tested, and on what

**Frozen copy.** My first copy of the live tree was taken while the content team was landing a new lesson (`TF-FEAT`). It failed `check-content` with `std-groups 3.T.SS.1: lessons for 3.T.SS.1.a leaves out TF-FEAT`. That is in-flight content work, not an engine fault. I threw that copy away.

I then used the author's frozen copy `scratchpad/eng/snap4`:

- I checked its checksum list. Every file matches except `verification/practice-own.py`. The author corrected that file after the checksums were written (06 §9.4 says so).
- I compared the engine files byte for byte with the live tree. `js/skills.js`, `js/engine/player.js`, `js/review.js`, `verification/review.py`, `serve.js`, `guard.py` and `first-visit.py` are identical.
- `snap4`'s `practice-own.py` differs from the live one only in test G.3. Live now expects seven lessons (including `TF-FEAT`), and `snap4` expects six.
- I used `snap4`'s version, because live's cannot pass against `snap4`'s content.

**The live tree right now** fails `check-content --all` ("catalog key TF-DIG has no lesson"). Content work is still landing, so nothing in the live tree has been run end to end. That is why MUST-2 exists.

## 2. Suite results (my runs, one sequence, `node verification/serve.js . 9360`, `CHROMIUM_PATH` and `AXE_PATH` set)

| Suite | Result |
|---|---|
| `check-content.js --all` | PASS, 0 failures, 9 warnings (99 lessons, 1076 items; 34 core lessons, 510 core items, 510 similar items) |
| `check-content.js` (manifest) | PASS, 0 failures, 9 warnings |
| `check-writing.js` | 0 failures, 0 warnings |
| `check-instructional-copy.js` | 28 assertions passed |
| `path.py` | 148 passed, 0 failed |
| `path-headers.py` | 48 passed, 0 failed |
| `path-a11y.py` (axe 4.10.2) | 12 + 12 + 12 runs, 0 violations, 0 contrast failures, lowest contrast 4.64:1 |
| `skills-recovery.py` | 67 passed, 0 failed |
| `writing-recovery.py` | 75 passed, 0 failed |
| `guard.py` (plain, one uninterrupted run) | **120 passed, 0 failed, exit 0**. This is the run that was missing in 06b. |
| `first-visit.py` | 124 passed, 0 failed |
| `practice-own.py` | 73 passed, 0 failed (with `snap4`'s own file; see section 1) |
| `review.py` (`AXE_PATH` set) | 28 passed, 0 failed (R.4b, R.18a-d, R.19 and R.20 are the new ones) |

These match 05 §9.4 row for row. I did not run `readability.py` (report only).

## 3. The fixes, one by one

### RR-01: reviewed answers count as seen (FIXED)

I checked this in the browser at 1366x900 with my own script, not with `review.py`'s.

- **Opening the review changes nothing.** Starting and submitting `RV-3.T.T.1` wrote no `pp.progress.v1` at all.
- **"See my answers" adds only `reviewSeenBy`.** The new field appeared as `{A: <ISO time>}` on the four source lessons (3.T.T.1.a to d). No other field of any record changed: `tries`, `best`, `mastered`, `attempts` and `passedAt` were untouched. Status stayed "started" for a lesson that was started and "new" for one that was never touched.
- **Other keys are byte-identical.** I tested with an older store seeded with `pp.path.v1`, `pp.task.W-TASK-01`, `pp.practice.v1`, an older progress record and an unrelated `pp.future.key`.
- **Later pass.** The lesson check passed on the first try (`n:1`) is stored as `afterAnswers:true, seenIn:"review", ok:true`. With a prior failed try (`n:2`) it is the same. The pass itself (`mastered`, `passedAt`, `passTry`) is unchanged and not hidden. The skill page says "passed after seeing these questions' answers in a review."
- **Results screen shows no answers by itself.** With a half-answered review, the results page lists scores and "what to work on next". The answers appear only after "See my answers", and nothing is saved before that click.
- **Also true for the cumulative review.** I repeated the click on `CR-lit` (8 source lessons), `CR-info-P1` (10) and `RV-3.T.SS.1` (6). Each marked exactly its own source lessons and nothing else.
- **Corrupt `reviewSeenBy`.** `"zzz"`, `[]`, `5`, `null` and `{"A":0}` are all ignored: the first-try pass is `afterAnswers:false`, with no error. `{"A":"x"}` counts as seen, which is what a truthy value should mean.

Notes on RR-01, none blocking:

- The note appears only on the skill page (the author says so, §9.5). The Learning Path and the standard page do not show it.
- The mark is permanent per form. Any later pass on that form is flagged, even months later. That is honest.
- A flagged first pass does not schedule a retained re-check (`maybeRetain` returns on `afterAnswers`). The retained feature is behind a flag that is off, so nothing visible changes today.
- The stored time is a full UTC ISO string. Other fields use a local `YYYY-MM-DD`. Harmless, but different.

### RR-03: code links in table cells (FIXED)

I measured on the Parents page, test tab (the claims table), at **360x640, 390x844, 768x1024, 1024x768, 1280x800, 1366x768 and 1920x1080**:

- 27 visible code links (14 in "Reading part (codes)", 13 in "Writing part (codes)") at every size.
- Smallest box 44 px high and 56.1 px wide. No link under 44 px in either direction.
- **Zero overlapping boxes** and a minimum gap of 4 px between any two.
- `elementFromPoint` at each link's centre returns that link.
- axe `target-size` (WCAG 2.2 AA): **0 nodes**, on all four Parents tabs, at all seven sizes.
- No horizontal page scroll.

I viewed screenshots at 360, 768, 1366 and 1920 (`scratchpad/rr3/shots/rr03b-*.png`). Links sit on their own lines with space between rows.

Note: at 360 and 1366 a code and its letters can split across lines ("3.T.T.3" at the end of one line, "(c)," at the start of the next). Cosmetic only.

### RR-04: check navigator (FIXED, as specified)

The 12-question review `RV-3.T.T.1` and the 24-question `PT-1`, at all seven sizes:

| Width | 12 questions | 24 questions |
|---|---|---|
| 360, 390 | scrolls inside its own box: 5 of 12 and 6 of 12 visible | wraps, all 24 visible |
| 768 | wraps, all 12 visible, one row | wraps, two rows |
| 1024, 1280, 1366, 1920 | wraps, all 12 visible, two rows, buttons 44 px | wraps, three rows, all 24 visible |

- No hidden button from 600 px up, and no page scroll anywhere.
- I viewed screenshots at 1024, 1366, 1920 and 360 (`rr04-*.png`).
- **Below 600 px** a review of 12 or fewer questions still hides buttons 7 to 12 behind a scroll. The cut-off sixth button is the only cue at 360. This is what the fix says it does, and Previous and Next still reach every question. The rule "wrap above 12 questions, scroll at 12 or fewer" means a 12-question set scrolls on a phone while a 13-question set does not. NOTE.

### serve.js (FIXED)

- `curl /%E0%A4%A` returns 400, and the next request returns 200. So do `/%` (400) and `/js/skills.js?x=%E0` (200, the query is ignored).
- The old `serve.js` (from `snap3`) dies on the first one: the next request gets no answer.
- Traversal attempts (`/%2e%2e/...`, `/..%2f..`) return 403.
- **A NUL byte returns 403, not 400.** 05 §9.1 says 400. The behaviour is safe; the sentence is wrong.

### review.py axe discovery (FIXED)

- With `AXE_PATH` unset and nothing else found, it prints one clear line and exits **2** (I checked by removing the `/tmp` search in a copy, with `npm` off the path).
- In this environment it finds `scratchpad/axe/package/axe.min.js` through the `/tmp` search.
- Weak points, NOTE only: the message still says "AXE_PATH is not set" when `AXE_PATH` points at a missing file. The `/tmp` search will take any `package/axe.min.js` it finds, with no version check. (Both copies on this machine, 4.10.2 and 4.14.0, know the `target-size` rule.) `path-a11y.py` still needs `AXE_PATH` and cannot find axe itself.

### RR-05: document 05 (MOSTLY FIXED)

The opening paragraph and §9.4 are now correct. I matched every §9.4 count against my runs. These sentences are still wrong or stale:

- **§7, "Similar coverage (ENG-07) is mostly content: many core items still have no similar item."** §9.2 says the opposite.
- **§8.3, "`verification/review.py` (21 checks)."** It is 28 now. §8.4 is labelled historical, but §8.3 is not.
- **§9.1 RR-13, "and to a NUL byte" (400).** It is 403.

I also re-checked the claim in §9.2 independently, on the frozen copy. In all 34 core lessons, 510 of 510 core items have a similar item whose `like` lists them. Every lesson is three sets of five. No similar item repeats a core item (compared by type, prompt, choices, slots, targets, steps and rows). Whether each similar item really tests the same skill is a content judgement I did not make.

## 4. Planted breakages (area: mutation test)

I planted five faults in copies of the frozen candidate and ran the whole `review.py` against each.

| # | Fault planted | Result |
|---|---|---|
| M1 | `recordTest` ignores `seenInReview` (`const after = seenEarlier;`) | **caught**: R.18b and R.18c FAIL (26 passed, 2 failed) |
| M2 | the `td .std-link` CSS rule deleted (RR-03) | **caught**: R.20 FAIL. axe finds 3, 1, 11, 12 and more nodes on the test tab (320, 390, 844x390, 768, ...) |
| M3 | the `@media(min-width:600px)` navigator rule deleted (RR-04) | **caught**: R.19 FAIL at 1024, 1366 and 1920 (12 buttons, 4 clipped, scrolls) |
| M4 | the review stops calling `answersSeen(..., true)` | **caught, but only as a crash**: `Z.crash KeyError: '3.T.T.1.b'` (21 passed, 1 failed). It is not a named R.18a failure. Same fragile pattern as RR-06 in 06b |
| M5 | `answersSeen(viaReview)` also adds one `tries` | **caught**: R.18a and R.18b FAIL |

All five are caught. M1, M2, M3 and M5 fail on a named assertion.

## 5. What the author says is unbuilt, and what I found

I confirmed all three by reading the code and the verification folder.

| Item | Superprompt | State | Evidence |
|---|---|---|---|
| Check versioning: `testRev`, `attempts[].rev` | §13: version the assessment or use new identifiers when content or point totals change | **Not built** | No `testRev` anywhere in `js/` or `verification/`. The `att` object in `recordTest` is `{d, got, max, ok, n, afterAnswers, form}`, with no `rev`. Only `bestMax` (point totals) and the core `rev` exist. 01-architecture §2.4 specifies it |
| Review ledger and hash rules | §14, §15: independent review must apply to the shipped content | **Not built** | `docs/.../review-ledger.json` and `verification/assessment-versions.json` do not exist. `check-content.js` has no hash or ledger code. 01-architecture rules 11 and 12 specify them |
| `--release` switch | §14: finished means every applicable lesson has fifteen items | **Not built** | `check-content.js` has no `--release` flag. 59 lessons with a check and no core remain a warning, not a failure |

**Evidence that the gap can already bite.** I hashed each lesson's `test` and `testB` items in the phase-1 snapshot (`eng/snap`) and in `snap4`. One lesson's check changed: **3.T.C.1.c, item SK-TC1c-T2**. A distractor changed from "Peepers stop singing when you come near." to "Peepers are so small that they are hard to see." The id, the points and the correct answer stayed the same. The change is small and probably a review fix. But nothing recorded it, and nothing bumped a version. This lesson is not accepted and is in no review, so no pass was affected. With the ledger and `rev` in place this change would have been recorded.

## 6. What remains against the superprompt (engine scope)

**Engine items built and verified:** clickable standard destinations, no write on load, practice controls and the similar-item rules, the three-set practice flow with local resume, changed-question detection, standard reviews, the cumulative review, the coverage map, `pp.review.v1`, honest storage notices, the 44 px targets, and the fixes in this round. The suites above cover them.

**Remaining engine items:**

1. Check versioning (`testRev`, `attempts[].rev`, the "earlier version of this check" text).
2. The review ledger, the hash rules and `assessment-versions.json`.
3. `--release`, and making it the default gate.
4. A blind solve of the 50 review items, if reviews are to be called independently verified (RR-11 in 06b, unchanged).
5. The review note appears only on the skill page.
6. The 59 lessons with a check and no core still run on the legacy practice flow. 34 lessons have core, and 10 of those are not yet accepted (24 accepted).
7. Reviews cover a small part of the standards. The pages say so honestly (06b measured 12 of 147 standards in a standard review). Writing and language cumulative reviews say "Not available yet".

**Remaining outside the engine (not tested here):** the content volume (fifteen items per applicable lesson across all lessons), the performance-task exceptions list, the content-change ledger, the counts report, the screenshot and state ledger, the owner summary and the PR. Real-device, native-zoom, screen-reader and family checks are still all open. My viewports differ from the superprompt matrix (320x568, 390x844, 844x390, 768x1024, 1024x768, 1366x768, 1920x1080): `review.py` R.19 and R.20 use the superprompt's seven, and I used the seven in this task, so both sets were covered for RR-03 and RR-04. I did not run the whole app at 844x390 or 320x568 myself.

## 7. Saved-data compatibility

- The product cleared no storage. (My own probes called `localStorage.clear()` once, to seed a fresh scratch browser profile before each run.) A wrapped `Storage` logged every write during the review flows: the only `removeItem` is path.js's own `pp.path.storage-check` probe, and there was no `clear`.
- Older `pp.*` keys read as before: a 2.1 style progress record, `pp.path.v1`, `pp.task.W-TASK-01`, `pp.practice.v1` and an unknown key were all left byte-identical.
- `reviewSeenBy` is additive. `load()` keeps unknown fields. `migrate()` is the only code that walks every record, and it ignores them. `status()` does not read the field.
- **Rollback is harmless.** I loaded a store containing `reviewSeenBy` into the previous engine (`snap3`) and opened skill pages, the standard page, the path and browse. No error. A started lesson read "started" and an untouched one "new". After a pass on the old engine, the record kept `reviewSeenBy` and the old engine wrote `afterAnswers:false` (so a rolled-back site would lose the new note, nothing else).
- Opening a review writes nothing. "See my answers" writes `pp.progress.v1` only. A never-started lesson gets a record holding only `reviewSeenBy`, which still reads "new".

## 8. Findings

| ID | Level | Finding |
|---|---|---|
| C-1 | **MUST** (before any completion or merge claim) | Re-run every gate on the final combined tree. The live tree now fails `check-content --all` while content lands, and `practice-own.py` G.3 is already out of step with `snap4` content. The frozen copy I tested is the author's; it is not what will merge |
| C-2 | **MUST** (before release) | Build the three unbuilt items in section 5, or record in 05 and the PR that check versioning is deferred and why. Section 5 shows a check item already changed with no record |
| C-3 | SHOULD | Fix the three wrong sentences in 05 (§7 similar coverage, §8.3 "21 checks", §9.1 NUL = 400) |
| C-4 | SHOULD | Make R.18a name its failure when the review stops marking answers seen (M4 only crashed) |
| C-5 | NOTE | Narrow phones (under 600 px): a navigator of 12 or fewer questions hides buttons behind a scroll with only a half-cut button as a cue; the 12-or-fewer / more-than-12 split behaves differently |
| C-6 | NOTE | `review.py`: the missing-axe message says "not set" when the path is wrong; the `/tmp` search takes any file and checks no version |
| C-7 | NOTE | Code and letters can split across lines in the claims table |
| C-8 | NOTE | The RR-01 note shows only on the skill page |

## 9. Reproduce

Scripts, logs, screenshots and mutant copies are in `scratchpad/rr3/` (`tools/rr01.py`, `rr01b-d.py`, `rr03.py`, `rr03b.py`, `rr04.py`, `rollback.py`, `sim.js`, `drift.js`; `logs/` and `logs2/`; `shots/`; `mut/m1` to `m5`; the tested copy in `base/`). Run commands: `CHROMIUM_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome AXE_PATH=<axe 4.x> node verification/serve.js . <port>`, then `python3 verification/<suite>.py http://127.0.0.1:<port>/ <outdir>`. `check-content`, `check-writing` and `check-instructional-copy` run with `node`. `skills-recovery.py` and `writing-recovery.py` start their own servers.

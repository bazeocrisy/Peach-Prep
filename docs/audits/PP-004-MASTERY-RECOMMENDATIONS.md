# PP-004: Mastery architecture, alternate check forms and "Retained"

- **Agent:** forms. **Date:** 2026-10-20. **Worktree:** /home/claude/pp-fix (branch `pp-003-fixes`). **Port:** 8484.
- **Builds on:**
  - docs/audits/PP-003-MASTERY-MODEL.md (§3, §4 B1-B11)
  - docs/audits/work/fix-mastery.md (the dated fields)
  - docs/audits/work/fix-final.md (RD-4 `skillMode`, RE-3 `bestMax`, RE-11)
- **Change log:** docs/audits/work/pp004-forms.md
- **Format reference:** docs/SPEC.md §8b (the `testB` and Retained bullets)
- **Scope:**
  - Architecture and the data model, with Retained behind a flag that is off.
  - Form B exists on 13 lessons: 3.L.GC.2.b, 3.T.T.1.a, 3.T.T.1.c, 3.T.SS.2.a, 3.T.T.4.a, 3.T.T.2.a, 3.T.T.2.b, 3.T.RA.2.a, TS-CE, 3.L.V.3.a, 3.L.V.2.a, GUM irregular plurals and GUM irregular past tense. Each has had at least two independent blind reviews (rounds C1 and C5, with C3, C4 and C6 for revised items). Every other lesson still has one check form. (Updated at the end of PP-004.)
  - The form-content and independent-review history is recorded in `docs/audits/work/pp004-formB-*.md` and the C review rounds.

This is not a Georgia Milestones measure. Nothing here maps a Peach Prep result to a GaDOE achievement level (Beginning, Developing, Proficient or Distinguished). The ALDs (October 2025) remain DRAFT.

---

## 1. What works now

### 1.1 Already in place before PP-004 (PP-003, unchanged)

| What | Where | Meaning |
|---|---|---|
| `mastered` | `recordTest`, `renderCheck` | One scored check ≥ ceil(80%) of its points, or a grown-up check-off. Shown as "Passed the skill check" or "Checked by a grown-up". Never revoked. |
| `tries`, `best`, `bestMax` | `recordTest` | Count of submitted checks; best ratio; that check's point total (RE-3). |
| `attempts[]` `{d, got, max, ok, n, afterAnswers}` | `recordTest` | The last 20 submitted checks, with local dates. |
| `passedAt`, `passTry`, `passBy`, `lastPassAt` | `recordTest`, `renderCheck` | The first dated pass is never overwritten. `passBy` is `"test"` or `"grownup"`. |
| `answersSeenAt` | `answersSeen` (from "See my answers") | When check answers were last shown. |
| `legacyUndated`, `firstSeenPassedAt` | `migrate()` on load | A 2.1 pass with no date. `passedAt` is never invented. |
| Review suggested | `reviewDue()` (computed) | A dated scored pass that is 7 or more days old, or a last try that did not pass. |
| Practice can never store a pass | `skillMode` (RD-4), `recordPractice` | `:p` and `:y` never run as a check. `:t` never runs as practice. |

### 1.2 New in PP-004

| What | Status |
|---|---|
| A lesson can declare `testB`. It builds the set `SK:<key>:tB`. | Done. Present on 13 reviewed lessons (67 form-B items); see the scope above. |
| Deterministic form selection (`nextForm`, `checkSetId`) | Done |
| `attempts[].form` (`"A"` / `"B"`), plus `passForm` | Done (new fields only) |
| Per-form "answers seen" (`answersSeenBy`) on two-form lessons | Done (new field only) |
| A pass on either form is "Passed the skill check" | Done. Same `mastered` meaning. |
| `:tB` never runs as practice and never records practice (RD-4 extended) | Done |
| Checker rules for `testB` | Done. All five mutations were caught (see the log). |
| `window.PP_FLAGS = { retained: false }`, which only a dev setting can turn on | Done (frozen) |
| Retained logic, `retainedAt`, `retainedForm` (written only with the flag on) | Done |
| `displayState()` with six displayed states, mapped onto `status()` | Done (computed only) |
| guard.py section 14 (14.0-14.6) | Done. The full guard is in §7. |

---

## 2. Architecture

### 2.1 Data (lesson file)

```js
PP.addLesson({
  code: "3.L.GC.2.b",
  passages: [ p1, p2, p3 ],   // one list per lesson; p3 is new and used only by form B
  practice: [ ... ],
  test:  [ ...form A... ],    // SK:<key>:t
  testB: [ ...form B... ]     // SK:<key>:tB  (optional; PP-004)
});
```

- **Design choice: one passage list per lesson, not `passagesB`.** Form B adds its passages to the lesson's single `passages` list, and each item names the passages it shows.
- **Why this design:**
  - Every existing tool keeps working with no change: the passage pane, hot-text references (`p3:2:2`), the passage checks and `readability.py`. `readability.py` is not in my file list and reads only `passages`. It measured the new p3 at FK about 2.0.
  - A `passagesB` field would have needed changes to the checker, the readability script and the set builder, and it would give a second place for a passage to hide.
- **Checker rules.** `check-content.js` fails a `testB` that:
  - does not have 4-6 items;
  - covers different codes from form A;
  - has a different point total from form A;
  - shares an item id with form A;
  - has a stem or a whole question identical to form A's.
- **Checker warnings.** It warns when form B reuses a practice passage or a form A passage.

### 2.2 Sets

- `skills.js addLesson` registers `SK:<key>:tB` with `part: "tB"`, `form: "B"` and `next: null`.
- Form B is not in the Practice Together → Try It Yourself → Test chain. The chain still ends at `:t`, and the form is chosen when a check starts.
- On a two-form lesson, the set titles read "… · Skill check (form A)" and "… · Skill check (form B)". One-form lessons read "… · Skill check".

### 2.3 Form selection (deterministic, explainable)

`PP_SKILLS.nextForm(k)` reads only the stored log:

1. The lesson has no form B → **A**, always, as before.
2. No attempt at all → **A** (the first check ever).
3. Otherwise → **the other form from the last attempt**.
   - When the last attempt was the pass, this is "a review after a pass uses the form not used for the pass".
   - Attempts without `form` (PP-003) count as A.
   - A 2.1 record with `tries` and no log counts as "last was A", so its review is on B.

**Conflict noted (owner decision D1).** Take pass on A, then a fail on B. Rule 2 ("other form after any attempt") gives A. A strict reading of rule 3 ("not the pass form") gives B.
- I chose rule 2, because B's answers may just have been shown.
- Either way, Retained still requires a pass on a form other than the first pass, so this cannot inflate anything. A pass on A is never "Retained" against an A pass.

**Who follows the rule.** These buttons all call `checkSetId(k)`:
- the skill page's "Take the skill check";
- the results screen's "Take the skill check again";
- Try It Yourself's "Take the skill check";
- the "already turned in" screen's restart.

An address that names a form (`#play/SK:<k>:tB/test`) runs that form, and the attempt records the form actually taken. The skill page tells grown-ups: "this skill check has two forms with different questions, A and B. They take turns, starting with A. The next check is form X."

### 2.4 Recording (additive only; `pp.progress.v1` keeps its key and every meaning)

| New field | When | Notes |
|---|---|---|
| `attempts[].form` | Every submitted check, every lesson | `"A"` on one-form lessons |
| `passForm` | With the first dated pass (`passedAt`) | Kept apart from the 20-item log, so the anchor form is never lost |
| `answersSeenBy {A, B}` | "See my answers" on a two-form lesson only | The first time, it is seeded from an older `answersSeenAt` as A |
| `retainedAt`, `retainedForm` | Only with `PP_FLAGS.retained` on (see §3) | Never changed or cleared once set |

- On two-form lessons, `afterAnswers` means that this form's answers were shown on an earlier try. Seeing the other form's answers does not set it, because those are different questions.
- On one-form lessons the old formula is used unchanged.
- `mastered`, `best`, `bestMax`, `tries`, `passedAt`, `passTry`, `passBy` and `lastPassAt` are written exactly as before. A pass on form B sets `mastered` exactly like a pass on form A.

### 2.5 Displayed states (computed by `PP_SKILLS.displayState(k)`, never stored)

| Displayed | Rule (from existing fields) | On screen today |
|---|---|---|
| Not started | `status()` = `new` | no mark (unchanged) |
| Learning | `started`, with only `taught` / `learned` | ◐ "Started." (unchanged) |
| Practicing | `started`, with `practiced`, `tried` or `tries` | ◐ "Started." (unchanged) |
| Passed skill check | `mastered` (grown-up: "Checked by a grown-up") | ✓ (unchanged) |
| Review recommended | `mastered` and `reviewDue()` | ✓ + "review" (unchanged) |
| Retained (flag only) | flag on, `retainedAt`, and the last try passed | ✓ + "retained" chip, "Retained." in the row label, and a line on the skill page |

- `status()` still returns `new`, `started` or `mastered`, and the CSS class is still `is-mastered`. That means:
  - The counts are unchanged.
  - "N of 74" is unchanged.
  - Up next and the filters are unchanged.
- The new names exist for the parent guide and for a future progress view. Only "Retained" is drawn, and only with the flag on.

### 2.6 Code map

- js/pp.js: `PP_FLAGS` (top of the file).
- js/skills.js:
  - `addLesson` (form B set);
  - the "PP-004: alternate check forms" block: `nextForm`, `checkSetId`, `seenForm`, `passFormOf`, `anchorPass`, `maybeRetain`, `RETAIN_DAYS`;
  - `recordTest(k, got, max, form)`, `answersSeen(k, form)`, `recordPractice` (ignores `t` and `tB`), `displayState`;
  - the row chip, the `renderTest` card, and the `afterTest` form pass-through.
- js/engine/player.js: `skillMode` (`tB` is always a test), `isCheck` / `checkFor`, the retake / next / restart buttons, and the form in `answersSeen`.
- js/app.js: `tB` is treated like `t` when returning to the skill's Test step (3 places).
- verification/check-content.js: the `testB` rules; the item count includes `testB`.
- verification/guard.py: sections 3 and 4 filters, plus section 14.

---

## 3. The flag

- **Default.** `window.PP_FLAGS = Object.freeze({ retained: false })`. It is defined before any other script.
- **It turns on only from a development setting on that device:**
  - `?dev=retained` in the address (one page load). For example: `http://localhost:8484/?dev=retained#skill/3.L.GC.2.b/test`.
  - Or `localStorage.setItem("pp.dev", "retained")`. This lasts until it is removed or the storage is cleared. `localStorage.removeItem("pp.dev")` turns it off.
  - Both accept a comma list, for future flags.
- **Frozen.** Page code cannot turn the flag on later. guard 14.4 tries `PP_FLAGS.retained = true` and it stays `false`.
- **Stored progress can never turn the flag on.** Neither can a shared link without `?dev=`.
- **With the flag off:**
  - `maybeRetain` returns at once, so no `retainedAt` or `retainedForm` is written (14.4).
  - `retainedShown()` is false, so no chip, label or line appears (14.4).
  - Everything else behaves as without PP-004, apart from the form B architecture itself.

---

## 4. Retention policy recommended for owner approval

The implemented rule is the conservative minimum, and it is easy to tighten. These are recommendations. **None of it is live** until the owner approves and the flag default changes.

| # | Policy | Implemented (behind the flag) | Recommendation |
|---|---|---|---|
| R1 | **What counts as a later check** | A scored skill check, on a different form from the first dated pass, at least 7 calendar days after `passedAt`, with `afterAnswers` false, that passes at the normal mark (ceil 80%). | Approve as is. |
| R2 | **Pass mark for the later check** | Same as the first check (ceil 80%; on 6-7 points, at most 1 point dropped). Forms must have equal totals (the checker enforces this). | Keep the same mark. A stricter retention mark would make "Retained" mean something different on each skill. |
| R3 | **Timing** | 7 or more days after `passedAt` (local calendar days). A pass on day 6 does not count; one on day 7 does. | Approve 7 days. Option (needs approval): a second confirmation 14 or more days after `retainedAt` (about 3 weeks after the first pass), as in PP-003 §2 level 4. |
| R4 | **Elapsed time** | Never awards Retained by itself (14.5a "time alone"). | Approve. |
| R5 | **Answers seen** | Only the same form's answers block it. Seeing the other form's answers does not. | Approve. Different questions are the point of two forms. |
| R6 | **Same form twice** | Never Retained, even 30 days apart. | Approve. A same-form repeat measures memory of those items. |
| R7 | **Legacy 2.1 passes (undated)** | Cannot become Retained until a dated pass exists. The first dated pass in the log then stands in for `passedAt`, and a later pass on the other form 7 or more days after it is needed (14.5a "legacy"). | Approve. |
| R8 | **After Retained, a failed check** | `retainedAt` is kept (it is a true historical fact). The display falls back to "Review recommended" while the last try is a fail. | Approve, together with D4. |
| R9 | **Light review after Retained** | Not implemented. `reviewDue` still says "review" 7 days after the latest pass; with the flag on, the display shows "Retained" instead. | Approve an 8-week light review: a computed state "Retained · review suggested" 56 days after `retainedAt` / `lastPassAt`. It is display only. |
| R10 | **Grown-up checks** (3.F.F.1.b, 3.F.F.1.c, 3.F.H.4.a, 3.F.H.4.b) | Never Retained. `anchorPass` refuses `passBy: "grownup"`. | Keep grown-up checks out of "Retained". If the owner wants a parallel signal, add a separate "Re-checked by a grown-up" state: a second grown-up check-off 7 or more days after the first, stored as `recheckedAt`. Never mix it with scored Retained. Foundations are classroom-only (Blueprint, August 2025, p.1). |
| R11 | **One-form lessons** | Cannot become Retained, because there is no different form. | This is correct. Do not turn the flag on for parents until most on-test lessons have a reviewed form B, or the feature will look broken. |

---

## 5. Owner decisions still needed

1. **D1. Form order after a failed review.** After a pass on A and a fail on B, should the next check be A (implemented: "other than the last attempt") or B ("not the pass form")? My recommendation: keep A.
2. **D2. Approve R1-R7** as the definition of "Retained", including the 7-day minimum.
3. **D3. One spaced pass or two.** Is one later pass enough (implemented), or should Retained need two spaced passes (7 days, then 14 more)? Two passes is closer to the PP-003 level-4 wording ("about 3 weeks"), but it needs a third form or a return to form A.
4. **D4. Counting.** Should the home page show a second count ("N still known after a week") next to "N of 74 have a passed skill check"? Should a fail after Retained remove a skill from that count? My recommendation: show two counts, never touch `mastered`, and drop a skill from the second count while its last try is a fail.
5. **D5. Grown-up checks** (R10): excluded, or a separate "re-checked" state?
6. **D6. Wording.** "Retained" is a working label. My suggestion for parents: "Still knows it: passed again a week later on new questions". The child-facing label needs a decision.
7. **D7. 8-week light review** after Retained (R9).
8. **D8. Form B content.** It is needed for the 74 on-test lessons before Retained can be switched on for everyone. Each form B needs the checker and two independent reviews (the manifest rule). 13 lessons have reviewed forms (see above), and 61 on-test lessons still need one.
9. **D9. Address-chosen forms.** An address that names a form runs it, and that is recorded honestly. Should the site instead always redirect to `nextForm`? Redirecting is stricter, but it makes "this address runs form B" untrue and breaks the guard's direct-set tests.

---

## 6. How to turn the feature on

**For development or review on one device:**
1. Open the site with `?dev=retained` before the `#`. For example: `/?dev=retained#skill/3.L.GC.2.b/test`.
2. Or run `localStorage.setItem("pp.dev","retained")` in the console and reload.
3. Check with `PP_FLAGS.retained` in the console (it should be `true`).

**For everyone (production), only after D2-D8 are decided:**
1. Form B content exists and has been reviewed for the lessons in scope. Run `node verification/check-content.js --all`.
2. Add the parent guide wording for "Retained" (js/parents.js, js/data/site.js). This was not in my file list.
3. Add any home count (D4) and a proper style for `.sl-retained`. The chip now reuses `.sl-review`'s style, because css/styles.css was not in my file list.
4. In js/pp.js, change `retained: !!on.retained` to `retained: true` (or keep the dev switch and add a `?dev=noretained` off switch).
5. Update guard 14.4. It asserts the default is off. Change it to assert the on default, and keep 14.5a/b.
6. Run the full guard.

**To turn it off again,** revert step 4.
- Stored `retainedAt` and `retainedForm` stay in `pp.progress.v1` and are ignored while the flag is off.
- Nothing else reads them, and 2.1 and PP-003 code ignore unknown fields.

---

## 7. Verification (2026-10-20)

- `node verification/check-content.js --all`: PASS, 0 failures, 7 warnings on the final run (8 earlier; another agent removed one). None is on 3.L.GC.2.b.
- **Checker mutation tests** (scratch copies, not the repo). Each was caught:
  - a form B id reused from form A;
  - an extra code;
  - 8 points vs 7;
  - 3 items;
  - a stem identical to form A's T5.
- `python3 verification/readability.py`: ran. 3.L.GC.2.b p3 has 115 words, FK about 2.0, not flagged.
- `node verification/check-writing.js`: 0 failures, 0 warnings.
- **guard section 14.** A fast subset (sections 1, 14 and 7.1) gave 17 passed, 0 failed.
- **guard mutation test.** With `RETAIN_DAYS = 2` and the flag forced on, served from a scratch copy, 14.4 and 14.5a FAIL as they should.
- **Full guard:** `python3 verification/guard.py http://localhost:8484/`. **103 passed, 0 failed, exit 0.**

---

## 8. Not done

- No parent guide text, home count, progress view or CSS for Retained (files not assigned; owner decisions D4 and D6 pending).
- No light review after Retained (R9) and no grown-up re-check (R10).
- Form B exists for 13 lessons, each independently reviewed twice. The other on-test lessons have one form.

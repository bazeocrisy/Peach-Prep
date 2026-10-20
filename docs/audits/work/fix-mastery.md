# PP-003 fix log: mastery model, Foundations fluency and grown-up checks (agent "mastery")

- Worktree: /home/claude/pp-fix (branch `pp-003-fixes`). No git commands were run.
- Sources:
  - docs/audits/PP-003-MASTERY-MODEL.md (§1 audit, §4 (A) changes)
  - docs/audits/work/notes-foundations.md (fluency timer, grown-up checks, cursive spacing)
  - The matrix rows for 3.F.F.1.b, 3.F.F.1.c, 3.F.H.4.a and 3.F.H.4.b
- Official basis:
  - Blueprint, August 2025, p.1: Foundations are "appropriate for classroom assessment only". So Foundations results must not read as test results.
  - The grade 3 standards are quoted from js/data/standards.js; that file's header says the wording is paraphrased.
    - 3.F.F.1.b: "Read a variety of unfamiliar grade-level texts with increasing accuracy."
    - 3.F.F.1.c: "Read a wide range of grade-level texts aloud with appropriate prosody (phrasing, expression, pauses, intonation) to aid comprehension."
    - 3.F.F.1.d: "Self-correct while reading grade-level text, silently or aloud, rereading as necessary."
    - 3.F.H.4.b: appropriate spacing between words in cursive.
  - Mastery wording has no GaDOE requirement. It is an honesty fix: the site must not imply a Milestones achievement level (ALDs, October 2025, DRAFT).
- Files changed:
  - js/skills.js
  - js/engine/player.js
  - js/parents.js
  - js/data/site.js
  - index.html
  - js/data/lessons/F-FH.js
  - css/styles.css (appended only)
  - verification/guard.py
- No (B) item from the mastery audit was implemented. They are listed at the end as recommendations.

---

## 1. A1: honest wording, "Passed the skill check" in place of "Mastered"

- **Deficiency.** Parent and child labels said "Mastered", "All mastered!", "Every skill is mastered … Amazing work!", "like the real test" and "Ready for the test!". "Mastered" sat beside the GaDOE Proficient ALD box.
- **Why it matters.** A single pass on a 4-6 item check, which can be an immediate retake after seeing the answers, is not mastery. Placed next to the ALD box, it invites a parent to read "Proficient".
- **Requirement.** Honesty rule (PP003-BRIEF). DRAFT ALDs must not be implied as achieved.
- **Files and changes (display only).**
  - The stored `mastered` flag, `status()` values and the `is-mastered` CSS class are unchanged.
  - skills.js:
    - header comment;
    - the dead `STATUS` map is deleted;
    - row aria: "Passed the skill check." or "Checked by a grown-up.";
    - category card: "All checks passed", aria "N of M checks passed.";
    - Up next: "Your child has passed every check on this device. Come back to skills over the next weeks to make sure they stick.";
    - home line: "… skills that are on the test have a passed skill check on this device.";
    - Try step: "✓ Finished. Next: the skill check.";
    - test card: "N questions, M points, no hints. Score X or more to pass the skill check." / "✓ Passed the skill check on <date>. Best score …" / "Need X to pass.";
    - results:
      - pass: "✓ Passed! You passed the skill check. … Come back in about a week and try it again to see if it stuck."
      - fail: "To pass the skill check, score X or more. … try the check again another day."
  - index.html: filter button "Not mastered" becomes "Not passed yet".
  - parents.js: "Test: no hints, like the real test." becomes "Test: no hints."
  - site.js plan:
    - step 2 now says "Score at least 80% of the points on the skill check to pass it. On a 6- or 7-point check that means missing no more than 1 point. Hands-on skills … are checked by a grown-up instead." This also corrects the understated "80%", since the rule is ceil(80%).
    - step 4: "Once several skill checks are passed".
    - step 6: "Progress (lessons started, practice finished, skill checks passed and grown-up checks, with dates) …".
  - Not changed: Georgia's GUM labels ("Master", "Reinforce", "Introduce", "Continue"; "Master by the end of grade 3"; "Continue (not yet mastered)"; "Grammar chart: Master"; "GUM Master/Reinforce").
- **Verification.**
  - guard 9.6, 9.8 and 9.13 are updated.
  - New guard 11.15 scans the body text of home, the "Not passed yet" filter, the skill test and try steps (all `details` open), a fail result, a pass result, a grown-up Check, and all four parent tabs (all `details` open). It finds no `\bmaster(ed|y)?\b` once the GUM labels above are removed. PASS.
- **Limitations.**
  - The step name "Test Your Knowledge", the player label "Test" and the button "Take the test again" are kept: they are child-facing and do not claim mastery.
  - SPEC.md:247 still says "Mastered = at least 80%". It is not in my file list. **Lead:** change it to "Passed = at least ceil(80%) of the check's points, stored as `mastered`".

## 2. A2: what the check measures

- **Deficiency.** Nothing told a parent how small the check is, that it repeats the same questions, or that it is not a Milestones score.
- **Files.** parents.js `buildPlan()` and skills.js `open()`.
- **Change.**
  - The parent guide's "How to use" tab has a new section, **What "Passed the skill check" means**. It covers:
    - 4 to 6 questions, no hints, at least 80%, one time, on this device;
    - the same questions each time, the answers can be seen, so a quick retake can be passed from memory;
    - the skill page shows the date, the try number and whether the answers were seen;
    - "A Peach Prep skill check is not a Georgia Milestones score and does not predict an achievement level";
    - review about a week later and again a few weeks after that;
    - the "review" marker;
    - hands-on skills are shown as "Checked by a grown-up";
    - the read-aloud timer is a home practice tool.
  - On the skill page, a line follows the Proficient ALD list whenever one is shown: "Passing a Peach Prep skill check is not a Milestones score or achievement level."
- **Verification.** guard 11.16 and 11.17 PASS.
- **Limitation.** The ALD heading in skills.js still says "GaDOE Achievement Level Descriptors" without DRAFT, unless the ALD owner has changed it. I did not touch it, because another agent owns the ALDs.

## 3. A3: test items can no longer run as hinted practice

- **Deficiency.** `#play/SK:<k>:t/practice` ran the check items with Help me and stored `practiced:true` (audit §1.5).
- **Files.**
  - player.js `start()`: `if (set.kind === "skill" && set.part === "t") mode = "test";`
  - skills.js `recordPractice()`: `if (part === "t") return;`
- **Verification.** guard 11.2: the address opens in test mode with Help me hidden, the hash is rewritten to `/test`, and `practiced` is never set. PASS.
- **Knock-on.** guard section 3 (practice on every set) now skips `SK:*:t` sets. Section 8 (phone widths) walks those sets as checks instead of pressing Help me. Section 4 still runs every set in test mode.

## 4. A4: new dated fields (additive)

- **Deficiency.** No dates were stored, a fail-then-pass from recall was invisible, and nothing could schedule a review.
- **File.** skills.js.
- **New helpers.**
  - `today()`: the local YYYY-MM-DD, not UTC.
  - `daysSince()` and `niceDate()`.
  - `answersSeen(k)`, `passKind(k)`, `passLabel(k)` and `reviewDue(k)`. All are exported on `PP_SKILLS`.
- **New fields per lesson record in `pp.progress.v1`.** All are optional; nothing existing is renamed, changed or removed.

  | Field | When it is written |
  |---|---|
  | `attempts[]` `{d, got, max, ok, n, afterAnswers}` | Each submitted skill check, after `tries`/`best`/`mastered` are updated exactly as before. The last 20 are kept. `afterAnswers` is true when `answersSeenAt` existed before this try and `n > 1`. |
  | `passedAt` | Local date of the first pass. Never overwritten. Never set on a legacy pass. |
  | `passTry` | The value of `tries` at the first pass. |
  | `passBy` | `"test"` for a scored pass, or `"grownup"` (Part 2). |
  | `lastPassAt` | Date of the most recent pass. |
  | `answersSeenAt` | ISO timestamp, set when "See my answers" is opened on a skill-check results screen (player.js, `res-review-btn`). |
  | `legacyUndated: true` + `firstSeenPassedAt` | Set once, on load, for any record with `mastered` and no `passedAt`. `firstSeenPassedAt` is the date this version first saw the pass. **It is not the pass date and is never shown as one.** |

- **Verification.**
  - guard 11.3: fail then pass gives `passedAt` YYYY-MM-DD, `passTry:2`, `passBy:"test"`, `lastPassAt == passedAt`, 2 attempts `[ok:false, ok:true]`, and `mastered`/`best`/`tries` as before.
  - guard 11.4: `answersSeenAt` is set; the passing attempt has `afterAnswers:true`.
  - guard 11.6: a first-try pass gives `passTry:1` and `afterAnswers:false`.
  - guard 11.8: the 2.1 fixture.
- **Not done.** `pr` (per-run first-try practice counts) from the audit's A4 list. It was not in my brief's field list. It is low risk to add later.

### Migration notes (stored data)

- The key stays `pp.progress.v1`. There is no version bump and no destructive migration.
- A 2.1 record such as `{"taught":true,"tries":2,"best":{"got":7,"max":7},"mastered":true}`:
  - On first load it gains `legacyUndated:true` and `firstSeenPassedAt:"<today>"`, and is saved once.
  - The four original fields are deep-equal before and after (guard 11.8).
  - `_ui` is untouched.
  - `passedAt` is never invented.
  - The skill page says "This pass was saved before the site kept dates, so its date is not known."
- A legacy grown-up pass (a hands-on lesson with `checks` and `mastered`, no `passBy`) is shown as "Checked by a grown-up". `passKind()` infers it because a lesson with a Check and no test set can only be passed that way. Nothing is written for this.
- "Review suggested" for a legacy pass counts from `firstSeenPassedAt`. A legacy pass therefore shows "review" 7 days after the update is first loaded, and the text says "(or since this device first noticed the pass)".
- Fluency readings from 2.1 (`{d,wcpm,acc,p}`, with a UTC date) are left as they are. New readings use the local date and may carry `obs`.
- Rolling back to 2.1 code is safe. 2.1 ignores unknown fields, and every field it reads keeps its meaning.
- A legacy pass followed by a new scored pass gets `lastPassAt` but never `passedAt`/`passTry`, because the first pass date is unknown.

## 5. A6: "Review suggested" (computed only)

- **Rule.** `reviewDue(k)` is true when the pass is scored (`passKind === "test"`) and either:
  - the last attempt has `ok:false`, or
  - at least 7 days have passed since `lastPassAt || passedAt || firstSeenPassedAt`.
- **Display.**
  - Skill row: the ✓ stays and a "review" chip is added; the aria text gains " Review suggested."
  - Test card: "Review suggested. It has been N days since this check was passed. Take it again to see if it stuck." Or: "… The last try did not pass. A little more practice is a good idea."
  - Home progress line: "N passed skill(s) are due for a review."
- Nothing is stored.
- Grown-up checks are excluded: whether they should be reviewed is policy (B7).
- **Verification.**
  - guard 11.7: a fail after a pass keeps `mastered` and `best`, the last attempt is `ok:false`, and the row shows "review".
  - guard 11.10: 10 days after a pass shows "review", 2 days does not, and `localStorage` is byte-identical after rendering the home page and the skill page.
- **Not done.** Offering a due review in "Up next" (optional in A6).

## 6. A7: show the pass honestly

- On the test card, after "✓ Passed the skill check on <date>":
  - "Passed on try N." When N > 1 it adds "The check uses the same questions each time."
  - "Passed after seeing the answers on an earlier try." when the first passing attempt has `afterAnswers`.
- **Verification.** guard 11.5 PASS.

## 7. Part 2a: the fluency timer is labelled a home practice tool, and the verdict is softened

- **Deficiency.** The timer compared one reading of an uncalibrated home passage with national norms and said "Right on track or better!". Notes-foundations finding 1, Medium. My rough FK estimates for passages 1-4 run from grade 2.3 to 4.1.
- **Files.** skills.js `renderFluency`, F-FH.js (3.F.F.1.b `parent` text).
- **Change.**
  - New line under the heading: "A home practice tool, not a formal test or screener. Teachers use calibrated passages and more than one reading for that, so treat these numbers as a rough guide."
  - The verdict now reads "For this one reading, that is at or above / close to / below the grade 3 middle." followed by "Passages differ in difficulty, so one reading is a rough guide only."
  - The 3.F.F.1.b parent tip now treats the library-page comparison as "a rough guide only: library pages differ in difficulty, and this is home practice, not a test."
  - The norms text (`goalSource`) belongs to whoever edited it. It now says "50th percentile, or median … Hasbrouck and Tindal, 2017". I did not change it.
- **Verification.** guard 11.12 and 11.13 PASS. guard 9.12 (WCPM arithmetic) still PASSES.

## 8. Part 2b: grown-up observations saved with each reading

- **Deficiency.** Prosody, self-correction and comprehension were not recorded with readings (notes-foundations finding 2). This covers 3.F.F.1.c (prosody, "to aid comprehension") and 3.F.F.1.d (self-correction).
- **File.** skills.js.
- **Change.**
  - After a measured reading, a "Grown-up observed (optional)" box appears:
    - Expression and phrasing: 1 (mostly word by word), 2 (some phrases, some expression) or 3 (smooth phrases, expression that fits).
    - "Paused at periods and commas?" Yes / Sometimes / Not yet.
    - Self-corrections: a number, pre-filled from the second taps and editable by hand.
    - "Could your child tell what it was mostly about?" Yes / Partly / Not yet.
  - Each change saves at once into that reading as `reading.obs = {expr, pauses, selfFix, retell}`. Only the answered keys are stored.
  - The during-reading instruction now says: "If the reader fixes it on their own, tap it again: it counts as correct and as a self-correction."
  - Reading history is now a list. It also shows before a new reading when readings exist. Each entry carries "Grown-up observed: expression and phrasing 2 of 3, paused at punctuation: sometimes, 1 self-correction, told what it was mostly about: partly".
- **Verification.**
  - guard 11.14: the reading is saved with `obs == {selfFix:1, expr:2, pauses:"sometimes", retell:"partly"}` and `wcpm 99`, and the history shows "Grown-up observed".
  - Screenshot at 390px: no sideways scroll.
- **Limitations.**
  - A second tap is also how a grown-up undoes a mis-tap, so the pre-filled count can include mis-taps. The field says "change it if needed".
  - The 1-3 scale is my own plain-language wording. It is not the NAEP scale and has no outside validation.
  - The observations are not summarised anywhere else, for example on the Parents page.

## 9. Part 2c: grown-up check-off kept apart from a scored pass

- **Deficiency.** "Mark this skill mastered" set the same `mastered` flag as a scored test, with the same label and tick (notes-foundations finding 3).
- **File.** skills.js `renderCheck`, plus the row and labels.
- **Change.**
  - The button is now "Mark as checked by a grown-up" (id `sk-grownup-check`).
  - On click it sets `mastered:true` (kept, so counts and "Up next" still work), plus `passBy:"grownup"`, `passedAt` and `lastPassAt`.
  - The card shows "✓ Checked by a grown-up on <date>." and "This is a grown-up's observation, not a scored skill check."
  - On the skill row the tick is plum (`.sl-done.by-grownup`) and the label is "Checked by a grown-up."
  - Rendering the Check no longer creates an empty record. It used to call `rec(cur)` on render.
- **Verification.** guard 11.11 (new pass) and 11.9 (legacy grown-up record) PASS. guard 9.13 is updated.
- **Limitation.** Foundations category rings still count grown-up checks as done. That is intended: the brief says to keep counts. The headline "N of 74" still excludes Foundations, as before.

## 10. Part 2d: contradictory checkbox wording (3.F.F.1.b Check)

- **Deficiency.** Two Check lines contradicted themselves:
  - "Noticed and fixed a word that came out wrong (or made no mistakes to fix)." lets a grown-up tick "noticed and fixed" when nothing was fixed.
  - "Read long or new words by breaking them into parts, not by guessing. Check this if every long word was read correctly." asks for a strategy, then says to tick it on an outcome alone.
- **File.** F-FH.js (wording only).
- **New text.**
  - "When a word came out wrong, noticed it and fixed it without help. (If there were no mistakes, listen again on another passage before checking this.)"
  - "Read long or new words by breaking them into parts, not by guessing."
- **Verification.** check-content: 0 failures, no warnings on any 3.F lesson.
- **Limitation.** I took "contradictory checkbox wording" to mean these lines. The other candidate is parents.js "Not practiced on Peach Prep." under a lesson link (notes-foundations cross-cutting 1). That is not mastery or plan wording, so it is outside my parents.js scope. **Lead:** assign it if it is still present.

## 11. Part 2e: cursive word spacing (3.F.H.4.b)

- **Deficiency.** The lesson says to leave a space "about as wide as a lowercase o". Measured in Chromium at port 8454, the space between words was about half an o:
  - on-screen model: 6.58px vs 12.72px for "o", ratio 0.52;
  - tracing sheet: 9.64px vs 19.75px, ratio 0.49.
- **File.** css/styles.css (appended only).
  - Added `.cursive,.trace-row{word-spacing:.3em;}`.
  - Added `@media (max-width:380px){ .trace-sheet .trace-row{font-size:clamp(1.12rem,5.6vw,2.1rem) !important;} }`. The wider gaps made "My dog likes to play." overflow its sheet by 28px at 320px.
- **Verification.**
  - Re-measured ratios: model 1.02, tracing sheet 1.00.
  - Trace-sheet internal overflow is 0 at 320, 360, 375, 390 and 1200px. The page itself never scrolls sideways.
  - Screenshots in the session scratchpad (mastery/trace-1200.png, model.png).
  - guard 11.18 checks that the ratio is between 0.8 and 1.25.
- **Limitations.**
  - The guides font draws its guide-line segments under glyphs only, so the extra gap has no guide segment. It reads as a clear gap.
  - Print output was not tested.
  - The .cursive change also widens the gaps in 3.F.H.3 cursive reading items. That is consistent with the rule.

## 12. Tests (verification/guard.py)

- **Updated.**
  - 9.6 checks "To pass the skill check" and "passed the skill check".
  - 9.8 checks "Passed the skill check".
  - 9.13 checks "Mark as checked by a grown-up" and "Checked by a grown-up".
  - Section 3 skips `SK:*:t` sets.
  - Section 8 walks `SK:*:t` sets as checks.
- **New section 11.**
  - 11.1 no write on opening a lesson.
  - 11.2 loophole closed.
  - 11.3 and 11.6 new fields.
  - 11.4 answers-seen flag.
  - 11.5 honest pass display.
  - 11.7 fail after pass.
  - 11.8 and 11.9 2.1 legacy fixture loads intact, with honest labels.
  - 11.10 review by date, and rendering never writes.
  - 11.11 grown-up label and `passBy`.
  - 11.12 to 11.14 fluency label, verdict and observations.
  - 11.15 no leftover "mastered" or "mastery".
  - 11.16 and 11.17 not-a-Milestones-score text.
  - 11.18 cursive gap.
- **Runs.**
  - Fast subset (sections 1, 9, 10, 11 and 7.1, from a scratch copy that cuts out sections 2-6 and 8): 49 passed, 0 failed.
  - Full guard: `python3 verification/guard.py http://localhost:8454/` on 2026-10-20 gave **81 passed, 0 failed**, exit 0. This includes 7.1 no page errors and 8.1 no sideways scroll at 320/375/390.
- **Gates.** `node verification/check-content.js --all` gave PASS (0 failures, 35 warnings, none on my lessons). `python3 verification/readability.py` ran.

## 13. (B) items NOT implemented: recommendations for the owner

These come from PP-003-MASTERY-MODEL.md §4(B). Each one changes what stored progress means, or the assessment policy.

- **B1. Item pools.** A second form of 4-6 new items per lesson, so retakes and reviews alternate. Start with the 74 on-test lessons.
- **B2. "Retained".** Passed again at 7 days or more, then at 14 days or more after that. Show two counts: "passed the check" and "still knows it".
- **B3. "Needs review".** Stored when a later check fails. Keep the skill in "passed", remove it from "retained", and never touch `mastered`.
- **B4. Independence rule** (recommended). A pass on the same form within 24 hours of `answersSeenAt` is shown as passed-after-answers but does not set `mastered` until a later pass with no exposure. The A4 data now makes this possible.
- **B5. Retake cooldown, or hide "The answer" until passed.** Prefer B4 or a next-day retake.
- **B6. Pass rule.** Keep ceil(80%). The wording is already fixed in the plan.
- **B7. Grown-up check review schedule.** Same 1-week and 3-week rhythm, re-ticked by a grown-up.
- **B8. Practice accuracy.** Show the first-try count only; do not gate. This needs the `pr` field, which was not done.
- **B9. 8-week light review** after "Retained", together with B2.
- **B10. A parent progress-report view** showing the levels per skill with dates, tries and fluency observations.
- **B11. Export first, then reset**, behind a confirm.
- **Also for the owner.** Should Foundations grown-up checks count toward the category ring, or be shown as a separate "checked by a grown-up" count?

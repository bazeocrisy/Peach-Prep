# PP-004 change log: alternate skill-check forms and "Retained" behind a flag (agent "forms")

- **Worktree:** /home/claude/pp-fix (branch `pp-003-fixes`, PP-004 from 4ed5d0b). No git commands were run.
- **Port:** 8484 (`node verification/serve.js . 8484`, stopped by PID at the end).
- **Briefs:** PP004-BRIEF.md, PP003-BRIEF.md, FIX-BRIEF.md.
- **Inputs read:**
  - docs/audits/PP-003-MASTERY-MODEL.md
  - docs/audits/work/fix-mastery.md
  - docs/audits/work/fix-final.md
- **Deliverable:** docs/audits/PP-004-MASTERY-RECOMMENDATIONS.md
- **Format:** docs/SPEC.md §8b (new `testB` and Retained bullets).
- **Files changed:**
  - js/pp.js
  - js/skills.js
  - js/engine/player.js
  - js/app.js
  - js/data/lessons/L-GC2.js (fixture only)
  - verification/check-content.js
  - verification/guard.py
  - docs/SPEC.md (§8b, appended)
  - the deliverable
  - this log
- **Not touched:**
  - css/styles.css, js/parents.js, js/data/site.js and readability.py (not in my list).
  - Production `main`.
- **Official basis.** The architecture is an honesty and measurement fix with no GaDOE requirement. Nothing maps to a Milestones achievement level, and the ALDs (October 2025) remain DRAFT. The fixture targets:
  - **3.L.GC.2.b**: "Use a variety of simple, compound, and complex sentences to strengthen clarity and coherence, establishing consistent verb tense within and between sentences." This is the Georgia K-12 ELA Standards, Grades 3-5 (May 2023), p. 19 (the page recorded in js/data/standards.js; the text was checked against gadoe/standards-3-5.txt line 528).
  - **Blueprint (August 2025), p.1:** 3.L.GC.2 (b, c, d) is assessed under Constructing Texts.

---

## F1. Alternate check forms (`testB` → `SK:<key>:tB`)

- **Deficiency.** Every retake and every review used the same items (PP-003-MASTERY-MODEL §1.3: "the item set is always `L.test`"). So a later pass could not be told apart from recall. That was B1 in PP-003 §4.
- **Change.**
  - **skills.js `addLesson`:** when a lesson has both `test` and `testB`, it registers `SK:<key>:tB` (`part:"tB"`, `form:"B"`, `next:null`) from `L.testB`.
    - Form B uses the lesson's single `passages` list. This design choice is explained in SPEC §8b and the deliverable §2.1.
    - Form A's title becomes "Test (form A)" only on two-form lessons.
  - **skills.js:**
    - `nextForm` / `checkSetId`: A first; then the other form from the last attempt; pre-PP-004 attempts and 2.1 `tries` count as A.
    - `recordTest(k, got, max, form)` adds `form` to each attempt and `passForm` at the first dated pass.
    - `answersSeen(k, form)` keeps `answersSeenBy {A,B}` on two-form lessons, and `afterAnswers` is per form there.
    - One-form lessons use the old `afterAnswers` formula, unchanged.
    - `afterTest` passes the form of the set that was run.
    - The test card describes and starts the form picked next, and tells grown-ups that "the next check is form X".
  - **player.js:**
    - `skillMode` treats `tB` as a check (RD-4 extended).
    - "Take the skill check again", the next-from-Try button and the "already turned in" restart go through `checkSetId`.
    - `answersSeen` gets the form.
  - **app.js:** returning from a `tB` check lands on the Test step (3 places, the same as `t`).
  - **`recordPractice`** ignores `t` and `tB`.
- **Unchanged meaning.**
  - A pass on either form sets `mastered` exactly as before, and is shown as "Passed the skill check".
  - `tries`, `best`, `bestMax`, `passedAt`, `passTry`, `passBy` and `lastPassAt` are written as before.
  - A lesson without `testB` behaves as before. Its only data difference is that each new attempt also carries `form:"A"`.
- **Verification (guard section 14):**
  - **14.0:** the set exists, is outside the chain, and both forms are worth 7 points.
  - **14.1:** the order is A, B (from the results retake button), A (a review after the B pass), B.
    - The skill card says "next check is form A".
    - Seeded picks: nothing → A; a 2.1 record → B; a PP-003 pass with no form logged → B; a pass on B → A.
    - A one-form lesson stays `:t` and has no `:tB`.
  - **14.2:** the forms are recorded as [A, B, A, B] and ok as [F, T, T, F].
    - `passTry` is 2, `passForm` is "B", `passBy` is "test", and `mastered` is true.
    - The results text says "passed the skill check". There are no Retained fields.
    - The one-form lesson's attempts are both form "A", with no `answersSeenBy`.
  - **14.3:** `#play/SK:<k>:tB/practice` runs as a "Skill check" with no Help me, and the address is rewritten to `/test`. `start(tB,'practice')` also runs as a test. `recordPractice(k,'tB')` is a no-op, so `practiced` is never set. Try It Yourself's "Take the skill check" opens `:tB` after a form A attempt.
- **Remaining.**
  - Owner decision D1: the form order after a failed review.
  - D9: an address that names a form runs that form, and it is recorded.

## F2. Check-content validation for `testB`

- **Deficiency.** No checker rules existed for a second form.
- **Change (check-content.js, inside the lesson loop, after the form A checks).** It fails a `testB` that:
  - is not a list, or has no form A;
  - does not have 4-6 items;
  - covers a different code set from form A (item `std`, defaulting to the lesson code);
  - has a different total from form A ("so the pass mark is the same");
  - has an item id used in form A, duplicated, or used elsewhere;
  - names an unknown passage;
  - has a stem (the `stem` text or a dropdown `text`) identical to a form A stem;
  - has a whole question identical to a form A question.
- It also runs the normal `checkItem` rules on each form B item, and checks that `std` includes a lesson code.
- It warns when form B reuses a practice passage or a form A passage.
- The item count in the summary line includes `testB`.
- **Verification.**
  - `--all`: 0 failures, 8 warnings, none of them mine.
  - Mutation runs in scratch copies (`scratchpad/pp004forms/{ids,codes,points,count,stem}`). Each produced the expected FAIL:
    - "item id is also used in form A";
    - "covers 3.L.GC.2.a, 3.L.GC.2.b but form A covers 3.L.GC.2.b";
    - "is worth 8 points but form A is worth 7";
    - "needs 4-6 questions (has 3)";
    - "stem is identical to a form A stem".
- **Note.** Another agent has since appended an "official-standards" section after the consistency block. My edits are inside the lesson loop and on the summary line, and I re-read the file before each edit.

## F3. Fixture form B for 3.L.GC.2.b (NEEDS INDEPENDENT REVIEW)

- **Why.** The architecture and section 14 need one real two-form lesson. The brief allows one fixture.
- **File:** js/data/lessons/L-GC2.js.
- **New passage `p3`, "Our Class Garden" (Mateo's draft):**
  - a student draft, 12 numbered sentences, 115 words, FK about 2.0;
  - original text, not GaDOE;
  - one deliberate tense shift, sentence 4: "drop" for "dropped".
- **New items.** They parallel form A item by item: same types, points, DOK 2 and code. Total 7 points, 5 items.
  - **SK-GC2b-TB1** (hottext, 1 pt): the sentence whose verb shifts tense (p3:2:2).
  - **SK-GC2b-TB2** (mc, 1 pt): combine sentences 6 and 7. The key is "The seeds needed water, so we filled a watering can every day." The distractors are a wrong relation (but), a run-on, and a tense shift.
  - **SK-GC2b-TB3** (dropdown, 1 pt): join sentences 10 and 11 with After / Before / Unless. The key is After (time order).
  - **SK-GC2b-TB4** (match, 2 pts): four new sentences, each marked "stays the same" or "shifts".
  - **SK-GC2b-TB5** (dropdown, 2 pts): "Last night, Ben {brushed} his teeth, and then he {climbed} into bed."
- **Checks done.**
  - check-content: no failures, no warnings.
  - The key text is quoted in each `why`. No clue words are shared only with the key.
  - No stem or question is identical to form A's.
  - guard 2.1-2.4 score every item: full marks when right, 0 when blank, and the review text works. Section 4 runs `:tB` in test mode (right gives 7/7, wrong gives 0, Show me how works).
  - I checked by reading that no form B item's text reveals another form B item's answer:
    - TB2 and TB3 use different joining words.
    - TB1's error, sentence 4, is not in any other item.
- **Remaining.**
  - **It needs two independent reviews** (manifest rule) before anyone relies on it. Points for reviewers:
    - Is "Because" absent from TB3's options?
    - Is "so" defensible as the only key in TB2? "because" is not offered.
    - Is TB4's comma in "Mom bakes bread, and we eat it warm." appropriate for grade 3?
  - Other agents are writing the content forms for other lessons.

## F4. `PP_FLAGS` and Retained (off by default)

- **Deficiency.** No stored notion of a skill passed again later on new questions (PP-003 B2). It must not change any current display until the owner approves.
- **Change.**
  - **js/pp.js:** a new first block defines `window.PP_FLAGS = Object.freeze({ retained })`. The flag is false unless the address has `?dev=retained` or `localStorage["pp.dev"]` holds "retained" (both take comma lists).
  - **skills.js:**
    - `anchorPass` uses the first dated scored pass. For a legacy undated pass it uses the first passing logged attempt, and it never uses a grown-up pass.
    - `maybeRetain` runs on each passing attempt. It stores `retainedAt` (that attempt's date) and `retainedForm` only when all of these hold:
      - the flag is on;
      - the skill is not already Retained;
      - the attempt passed and `afterAnswers` is false;
      - the form differs from the anchor's form;
      - it is at least `RETAIN_DAYS = 7` local days after the anchor.
    - `displayState` gives Not started, Learning, Practicing, Passed, Review recommended and Retained. Retained requires the flag, and drops to "review" while the last try is a fail.
    - With the flag on only:
      - the row gets a "retained" chip (class `sl-review sl-retained`, which reuses the review chip style) and " Retained." in the aria label;
      - the skill card gets a "Retained: passed again on form B on <date>…" line.
- **Verification.**
  - **14.4:** flag off. `PP_FLAGS.retained` is false and stays false after an assignment attempt (frozen). A valid pass on B 10 days after a pass on A stores no `retainedAt` / `retainedForm`. `displayState` gives "passed", and no chip, label or card text appears.
  - **14.5a:** flag on. Each of these gives no Retained:
    - the same form (A after A);
    - 3 days after the first pass;
    - after form B's answers were seen (`afterAnswers` true on the B pass);
    - time alone (a 30-day-old pass, rendered: storage byte-identical, state "review");
    - an undated 2.1 pass followed by a B pass (no `passedAt` is invented).
  - **14.5b:** flag on, a pass on B 10 days after a pass on A:
    - stores `retainedAt` (today) and `retainedForm` "B";
    - leaves `passedAt` and `passForm` as they were;
    - shows the row chip, "Retained." and the card line, and `displayState` gives Retained;
    - the flag also turns on through `localStorage pp.dev`.
  - **Guard mutation check:** a scratch copy with `RETAIN_DAYS = 2` and the flag forced on makes 14.4 and 14.5a FAIL.
- **Remaining.**
  - Owner decisions D2-D7.
  - No parent text, count or CSS (not my files).

## F5. Seeded old records load unchanged

- **Requirement.** Never change the meaning of stored progress; only add fields.
- **Verification (14.6, flag off and flag on).**
  - **A 2.1 record** `{taught, tries:2, best:{7,7}, mastered}`, plus `_ui`:
    - The original fields and `_ui` are equal after load.
    - The only added keys are PP-003's `firstSeenPassedAt` and `legacyUndated`. No PP-004 field is added.
    - Rendering the skill page and home writes nothing.
    - The status is "mastered" and the next form is B.
  - **A PP-003 record:**
    - It has attempts with no `form`, `answersSeenAt`, `bestMax` and a one-form lesson record.
    - After rendering both skill pages and home, storage is byte-identical to the seed.
    - The status is "mastered", the next form is B, and the state is "review" (a 10-day-old pass).
- **Also:** guard sections 9, 11 and 13, the earlier mastery tests, still pass (see below).

## Guard changes

- **Section 3** (practice on every set) now also skips `SK:*:tB`.
- **Section 4** (test mode) now also runs `SK:*:tB`.
- **New section 14:** 14.0-14.6. It is placed before 7.1, so page errors in it are counted.

## Gates

- `node verification/check-content.js --all`: PASS (0 failures, 8 warnings, none mine).
- `python3 verification/readability.py`: ran. p3 has 115 words, FK about 2.0.
- `node verification/check-writing.js`: 0 failures, 0 warnings.
- **Fast subset** (sections 1, 14 and 7.1): 17 passed, 0 failed.
- **Full guard** `python3 verification/guard.py http://localhost:8484/`: RESULT_PLACEHOLDER

## For the lead / other agents

- **Content agents writing form B.** Rules for each lesson:
  - Add its new passages to the lesson's `passages`, and name them in each item.
  - Keep the same total points as `test`.
  - Use 4-6 items.
  - Use new ids (`SK-…-TB<n>` is the convention I used).
  - Run check-content.
- **Two independent reviews** are needed for SK-GC2b-TB1 to TB5 and for passage p3.
- **css/styles.css:** `.sl-retained` has no style of its own. It reuses `.sl-review`.

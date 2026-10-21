# PP-004 review fixes, agent "reviewfix4"

- Date: 2026-10-20. Worktree /home/claude/pp-fix. Port 8500 (server stopped by its PID afterwards).
- Inputs: docs/audits/work/pp004-review-C-formB.md (form B review) and docs/audits/work/pp004-review-C-changed.md (changed-items review).
- Files edited: js/data/lessons/L-GC2.js, T-T2.js, L-V12.js, L-GUM3.js, L-V3.js, T-TS.js, T-T1.js, T-C.js, T-RA.js, L-GUM4.js, T-T34.js; js/data/sets/PT-1.js; this log. No figures changed. No git commands run.
- Scratch work (not in the repo): /tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/reviewfix4/ (pw.py render script and shots/, c2/ and fb/ copies of the reviewers' blind-solve scripts with my answers).

## Summary

| # | Finding | Severity | Status |
|---|---|---|---|
| B1 | 3.L.GC.2.b form B is a clone of form A and easier (TB1–TB5) | SHOULD | FIXED |
| B2 | 3.T.T.2.a SK-TT2a-TB2: Part A key echoes Part B key | SHOULD | FIXED |
| B3 | 3.L.V.2.a SK-V2a-TB5: "burst out" in the stem matches the key | SHOULD | FIXED |
| B4 | 3.L.V.2.a SK-V2a-TB4: every affix label was practiced | SHOULD | FIXED |
| B5 | Irregular plurals form B: every target word already drilled | SHOULD | FIXED |
| B6 | Balloon article: "three main parts" vs four labels in Figure 1 | NOTE | FIXED (text only) |
| B7 | Tree trunk: growth is the cambium's job; cambium left out | NOTE (optional) | NOT FIXED |
| C1 | PT-1-6 choice text cues PT-1-7's theme | SHOULD | FIXED |
| C2 | SK-TSPS-P2 `why` gives away SK-TSPS-P6 | SHOULD | FIXED |
| C3 | SK-TT1d-T5 DOK 3 → 2 | SHOULD | FIXED |
| C4 | SK-TC2c-P7 `why` names Atlanta (primes P4) | SHOULD (low) | FIXED |
| C5 | PT-1-13 row cues PT-1-11 | SHOULD (low) | FIXED |
| C6 | SK-TSSEQ-T5 DOK 3 → 2 | NIT | FIXED |
| C7 | SK-RA2b-T5 Part B: weak distractors, only 4 choices | NIT | FIXED (5 choices) |
| C8 | SK-GUM4-5-T5: distractor opens with a correctly used "That" | NIT | FIXED |
| C9 | Brown thrasher p4: "the father may dive" | NIT | FIXED |
| C10 | SK-TT3c-P6 topic duplicates W-TASK-01 | NIT | FIXED |
| C11 | Other NITs (SK-TC1b-T7 alignment, mild mutual cues, SK-GUM3-8-P4 why, GC.2.a Together half) | NIT | NOT FIXED (reviewer said no change needed) |

Point totals and item counts are unchanged in every set: 3.L.GC.2.b form A 7 / form B 7 (5 items each); 3.L.V.2.a 7/7; irregular plurals 7/7; 3.T.T.2.a 8/8; 3.L.V.3.a 7/7; PT-1 still 24 items, 31 points; SK-RA2b-T5 still 2 points.

## Form B fixes

### B1. 3.L.GC.2.b form B rebuilt (SK-GC2b-TB1 … TB5, passage p3)
- **Deficiency.** Review C (form B) SHOULD-1 and SHOULD-2: TB2/TB3 used form A's exact frames and sentence numbers (6–7, 10–11); TB4/TB5 copied form A's templates row for row; TB1 was a past-tense draft like practice P1 ("Then we drop" ~ "Next, we walk"), easier than form A's present-tense T1; TB2 cloned practice P2 ("X, so Y"); TB3's key "After" repeated practice P5.
- **Official requirement.** 3.L.GC.2.b: "Use a variety of simple, compound, and complex sentences to strengthen clarity and coherence, establishing consistent verb tense within and between sentences." (Standards PDF p. 19.)
- **Correction (L-GC2.js).**
  - New passage p3, "Saturdays at the Bakery" (Nia's draft), written in the **present tense** (something that happens every Saturday). Its one slip is **inside a complex sentence**: (5) "When he walks through the door, Grandma handed him a warm cinnamon roll." So the child has to check each verb, not spot a sentence that is all in the wrong tense. A first version used a "Field Day" topic. I replaced it because T-SS.js already has a "Field Day" draft with a sack race and a sprinkler.
  - TB1 (hottext, 1 pt): find the sentence with the tense slip. Key: sentence 5 (handed → hands).
  - TB2 (mc, 1 pt): combine **sentences 11 and 12**. The key is a complex sentence with **because**. The distractors are because attached to the wrong idea (cause and effect reversed), but, and a tense slip (got). It shares no frame with practice P2 (so) or form A T2 (and).
  - TB3 (dropdown, 1 pt): join **sentences 9 and 10** with **Although** (the bigger bakery vs. more people choosing Grandma's). Options: Although / Because / Unless. Form A uses "Even if", practice P5 uses "After".
  - TB4 (match, 2 pts): "Correct" vs "Tense shifts by mistake". It includes a **correct, deliberate time change** ("Last year, Ana was in second grade, but now she is in third grade."), plus slips inside complex sentences ("Every night, the owl hoots while we slept."; "After Grandpa told us a story, he tucks us into bed."). Form A's T4 only had uniform-tense rows. The time-change row uses new wording; the Learn It example is "Yesterday I lost my hat, but today I have a new one."
  - TB5 (dropdown, 2 pts): a present-tense habitual complex sentence, "Every spring, when the creek {rises}, the ducks {come} back to our yard." The distractors are **irregular** past forms (rose, came) and forms that do not agree (rise, comes). Form A's T5 is past tense with -s/-ed/base options. Residual similarity: like practice P6, this is present-habitual with a "do not agree" option, but the sentence, the verbs and the two-slot complex structure are new.
  - DOK stays at 2 for all five items, matching form A.
- **Verification.** Gates pass. p3 readability: 123 words, FK ≈ 3.8. Rendered at 390 and 1366 with full score 7/7, no page errors, no horizontal scroll. Self blind-solve with the C1 reviewer's script (fb/blind.js, shuffled) agrees 5/5. I checked giveaways inside form B: TB2's "because" key does not help TB3, because there "Because" is a wrong option and the bigger bakery is not a cause.
- **Remaining.** Needs independent review. The p3 comment in L-GC2.js still says so.

### B2. SK-TT2a-TB2 Part A key (T-T2.js)
- **Deficiency.** The Part A key "The hard wood in the center helps hold the tree up." matched the Part B key "It works like a backbone to help hold the tree up." on the words "hold the tree up".
- **Official requirement.** 3.T.T.2.a: "...including facts and key details used to support the main idea." (p. 33.)
- **Correction.** The Part A key is now "The center of the trunk is strong and gives the tree support." I updated the `why` to match. The distractors are unchanged.
- **Verification.** Self blind-solve 6/6 on 3.T.T.2.a form B. Rendered and scored 8/8 at both widths.

### B3. SK-V2a-TB5 stem (L-V12.js)
- **Deficiency.** The stem said the rock "burst out through a crack", and the key is "to break open and burst out".
- **Correction.** The stem is now "When the volcano began to erupt, hot melted rock poured down its sides." The key and distractors are unchanged. The `why` now explains rupt = break and e- = out (Latin e/ex), and links that to the volcano.
- **Official requirement.** 3.L.V.2.a: "Deconstruct words using common roots, root words, and affixes to determine meaning." (p. 22.)

### B4. SK-V2a-TB4 affixes (L-V12.js)
- **Deficiency.** The labels again / full of / in a ___ way are practice P4's columns, and without is practice P1's meaning. The words mirrored practice (repaint ~ retied, joyful ~ thankful, loudly ~ tightly).
- **Correction.** The columns are now "the opposite of", "a person who", "more" and "in a ___ way". The rows are now disagree (dis-), builder (-er on an action word), colder (-er on a describing word) and slowly (-ly).
  - Three of the four labels are ones practice does not use for this lesson.
  - The two -er rows test the base-word check that the 3.L.V.2.b lesson teaches ("-er added to a describing word means more").
  - Accuracy: dis- in disagree = do the opposite of / not; -er on a verb = one who; -er on an adjective = comparative "more"; -ly = in a ___ way.
  - I avoided pre- and mis-, because TB2's prompt gives mis- and TB3's key depends on pre-. Either would create a giveaway inside form B.
- **Remaining.** "in a ___ way" is still a practice-P4 label (one row of four).
- **Verification.** Self blind-solve 5/5 on 3.L.V.2.a form B. Rendered and scored 7/7.

### B5. Irregular plurals form B (L-GUM3.js)
- **Deficiency.** Every target word had been seen in form A, practice or Watch Me.
- **Official requirement.** GUM chart row "Form and use irregular plural nouns" (G; grade 3 = M; Standards PDF GUM chart pp. 15–17).
- **Correction.**
  - TB3 (moose) became "Mom baked three {0} of bread for the bake sale." The options are loafs / **loaves** / loaf.
  - The TB4 "foots" row became "Dad put up two new shelfs in my room." (needs a fix → shelves).
  - TB2's "Two wolfs howled" distractor became "Two mooses waded into the cold lake." This keeps form B from showing the f → ves pattern three times (knives in TB2 already shows it), and moose stays in the form as a distractor.
  - Accuracy: loaf → loaves and shelf → shelves are standard irregular (f → v + -es) plurals. "Loafs" exists only as a verb form, and "shelfs" is not standard. I avoided fish, trout and hoof because "fishes", "trouts" and "hoofs" are accepted variants.
  - These follow the pattern Learn It teaches ("Knife becomes knives the same way").
  - Points are unchanged (1 + 2 + 1 + 2 + 1 = 7).
- **Verification.** Self blind-solve 5/5. Rendered and scored 7/7.

### B6. Balloon article "three main parts" (L-V3.js p3)
- **Correction.** Paragraph 2, sentence 1 is now "A balloon has three main parts, plus a few smaller ones." This makes the article consistent with Figure 1's four labels (the vent is a smaller part).
- I did not say where the vent is, because SK-V3a-TB5 asks that and must be answered from the figure. I did not change the figure.
- Source the reviewer checked: https://planoballoonfest.org/p/about/anatomy (three main components; crown vent).
- **Verification.** Self blind-solve 6/6 on 3.L.V.3.a form B. Rendered and scored 7/7.

### B7. Not fixed: cambium (T-T2.js p3)
- This was optional in the review, and the reviewer judged it acceptable for grade 3.
- Adding a growing-layer sentence would add a fifth layer that Figure 1 (four labels) does not show. That would need a figure change, and I was told not to change figures unless a finding requires it.

## Changed-items fixes

### C1. PT-1-6 (PT-1.js)
- **Deficiency.** The key "...but Aunt Bea thinks it matters less than the truth" cued the PT-1-7 theme (and the reverse).
- **Official requirement.** 3.T.C.2.a: "Describe different perspectives of the narrator or speakers and distinguish them from their own." (p. 27.)
- **Correction.**
  - The key is now "Malik thinks the chip is a big problem he must hide, but Aunt Bea treats it as a problem she can solve by making a new pitcher." Paragraphs 12–13 support it ("I can," she agrees to make another).
  - I did NOT use the reviewer's suggested "small problem" wording, because "small problem" quotes PT-1-7's Part B key sentence and would cue Part B.
  - Distractor A is now "Malik thinks the chip is too small to matter, but Aunt Bea thinks it ruins her shop." The first half is false (he hides it), and the second half is unsupported.
  - I rewrote the `why` without the theme.
- **Residual.** The key's "making a new pitcher" relates to PT-1-7 Part B's *distractor* "Could you make another one...". That can only pull toward a wrong answer, so it is not an answer leak.

### C2. SK-TSPS-P2 `why` (T-TS.js)
- The `why` no longer says "But shows that it did not work". It now reads: "Jamal's first try was wiping the ants away. The very next morning, a new line of ants marched right back, so wiping did not stop them. The other sentence about the ants coming back is about his second try." (This is the reviewer's text.)
- Official requirement: 3.T.SS.1.a (p. 29).

### C3. SK-TT1d-T5 DOK 3 → 2 (T-T1.js)
- It compares two literal problems and requires no inference across the texts.

### C4. SK-TC2c-P7 `why` (T-C.js)
- "Ella only hopes to visit Atlanta, so her family is not moving." became "Nothing in the letter says her family is moving."
- Official requirement: 3.T.C.2.c (p. 27).

### C5. PT-1-13 row (PT-1.js)
- **Deficiency.** The row "days get shorter, less sunlight → tree slows food making" repeated the chain in the PT-1-11 key.
- **Correction.** The row is now "Fall days are sunny, and fall nights are cool." → new column 0 "The red colors are especially bright." It is supported by paragraph 5: "Scientists have found that sunny fall days and cool nights help make the reds especially bright." I updated the `why`.
- I did not use the reviewer's alternative (dropping leaves saves water), because a "tree loses its leaves" row would cue PT-1-12, whose key is "how a tree drops its leaves".
- **Residual.** PT-1-8 distractor C states the same true detail, but it is wrong there because it is not the main idea, so the new row gives no help on PT-1-8.
- Official requirement: 3.T.T.2.b: "Describe the relationship between a series of historical events, scientific ideas or concepts, or steps in technical procedures in a text." (p. 33.)
- The PT-1 DOK and point totals in the header comment are unchanged (no DOK or points changed).

### C6. SK-TSSEQ-T5 DOK 3 → 2 (T-TS.js)
- The Part B evidence is literal.

### C7. SK-RA2b-T5 Part B (T-RA.js)
- **Correction.** I added a fifth choice, "A baby elephant is called a calf, and it stays close to its mother." It is a true, harmless sentence from Source 2. I updated the `why`.
- I did NOT use the reviewer's suggested "Many elephants live to be 60 years old or even older." PBS Nature's elephant fact sheet (https://www.pbs.org/wnet/nature/blog/elephant-fact-sheet, checked 2026-10-20) says African elephants rarely live to 50 and the median for female Asian elephants is 47. So "many ... 60" is doubtful, and a child could defensibly pick it as a sign of an untrustworthy source, which would make a second defensible answer.
- For the same reason, I changed the Source 2 passage sentence from "Many elephants live..." to "Some elephants live to be 60 years old or even older." "Some" is defensible, but I did not verify it against a primary source.
- Official requirement: 3.T.RA.2.b: "Determine what makes a source text credible and relevant and identify examples." (p. 38.)

### C8. SK-GUM4-5-T5 (L-GUM4.js)
- The choice "That is the store when we buy bread." became "This is the store when we buy bread."
- Official requirement: GUM row "Use relative pronouns and relative adverbs."

### C9. Brown thrasher (T-RA.js p4 of 3.T.RA.1.c)
- "the father may dive at them" became "a parent may dive at them". Source the reviewer cited: https://mdc.mo.gov/discover-nature/field-guide/brown-thrasher ("Adults fearlessly protect their nests").
- SK-RA1c-T3's key "Thrasher parents protect their nest" now matches exactly.
- Official requirement: 3.T.RA.1.c (p. 37).

### C10. SK-TT3c-P6 topic (T-T34.js)
- The topic moved from a reading buddy program (the same as W-TASK-01) to a **buddy bench**. No other item on the site uses that topic (checked with grep).
- Key: "Kids who feel left out would have an easy way to find a friend."
- Distractors: an off-point fact (slides and swing set), a restated opinion, and an off-topic sentence (lunch outside). I rewrote the `why`.
- Official requirement: 3.T.T.3.c "...supply reasons to support the opinion..." (p. 34).

### C11. Not fixed
- The reviewer marked these "no change needed" or "acceptable":
  - the SK-TC1b-T7 alignment;
  - the mild mutual cues (TT1d-T4/T3, V1a-T1/T3, TT1b-T5/T2, TC2c-T2/T4, GC2a-T6/T8);
  - the SK-GUM3-8-P4 `why`;
  - the 3.L.GC.2.a Together half.

## Verification
- `node verification/check-content.js --all`: PASS, 0 failures, 6 warnings. These are the same 6 warnings as before this pass (PT-1-14, SK-V3b-T1 ×2, SK-TT1a-T5, SK-TT1d-P1, SK-TT1e-T5), and none is on an item I changed.
- `python3 verification/readability.py`: all edited passages are in range: 3.L.GC.2.b p3 123 words, FK 3.8; 3.L.V.3.a p3 FK 4.1; 3.T.RA.2.b p2 FK 4.3; PT-1 p1/p2 unchanged in range.
- `node verification/check-writing.js`: 0 failures, 0 warnings.
- **Browser** (port 8500, Playwright, 390×900 and 1366×900; script reviewfix4/pw.py):
  - Every item in the four rebuilt or edited form B sets was shown, answered with the key, and submitted for a full score: GC.2.b 7/7, V.2.a 7/7, plurals 7/7, V.3.a 7/7. TT2a form B was also played through for a full 8/8.
  - The changed items in SK:TS-PS:p, SK:TS-SEQ:t, SK:3.T.T.1.d:t, SK:3.T.C.2.c:p, SK:3.T.RA.2.b:t, the relative-pronoun check, SK:3.T.T.3.c:y, SK:3.T.RA.1.c:t and PT-1 were screenshotted, and every check set and PT-1 scored full.
  - Results: 0 page errors, 0 horizontal scroll, 64 screenshots in reviewfix4/shots/.
  - I looked at the GC.2.b passage and TB2 at 390, V.2.a TB4 at 390 and PT-1-13 at 1366.
- **Self-check blind solves (NOT independent: I wrote or edited these items):**
  - The changed-items reviewer's scripts (copied to reviewfix4/c2/, with a changed.json listing my items plus their neighbours PT-1-7, -11, -12, SK-TSPS-P6, SK-TC2c-P4 and all SK-RA1c tests): 19/19 agree.
  - The form B reviewer's script (copied to reviewfix4/fb/, restricted to the 5 forms I touched): 27/27 agree.

## What remains
- Every changed form B item (GC.2.b TB1–TB5, TT2a-TB2, V2a-TB4/TB5, GUM3-2-TB2/TB3/TB4, the V3a p3 sentence) and every changed PT-1 or practice item needs **independent** review. My blind solves are only a self-check.
- I did not run guard.py (20 min). Section 14 uses the form B fixture lesson. GC.2.b's form B still has 5 items worth 7 points, so its point-equality check should hold, but it was not run.
- B7 (cambium) is left as is (see above).

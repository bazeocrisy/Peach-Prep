# Final verify L-V3
Lessons: 3.L.V.3.a, 3.L.V.3.b, 3.L.V.3.c, 3.L.V.3.d, 3.L.V.3.e
Diff base: 00b2d34 (commit that added L-V3-verify.md)
MUST: 1  SHOULD: 1  NIT: 1

## Prior findings (L-V3-verify.md, fixes Round 2)
- [SK-V3a-P2] SHOULD, clue pointed to only one Part B choice. **Not fixed.** The near-miss distractor "Leah sat at the table and sighed." was added as asked. The new clue then reads: "Read the other sentences in paragraph 3. Which one tells you the most about the buyers themselves?" Paragraph 3 has only two other sentences. One is about Leah, who is not a buyer, and the other is the key. So the clue excludes the new near miss by name and hands the child the Part B answer, and through it Part A ("only two people" means very few). This is now a giveaway rather than just a pointer, so it is raised to MUST below.
- [SK-V3a-T6] SHOULD, solvable by matching "watch". Fixed. Paragraph 4 sentence 3 now reads "...and they can be hard to see." No choice repeats a passage word. The distractors (stay far away from / take a photo of / listen for the sound of) are near misses. The clue gives reasoning, not the answer.
- [SK-V3e-P3] SHOULD, clue sorted the words. Fixed with the reviewer's wording.

No Round 3 section exists in L-V3-fixes.md, and there is no -verify2.md.

## Changed items solved cold
- SK-V3a-P2: Part A is "very few; not many", and Part B is "Only two people stopped by in the whole first hour." Both match the key. The sigh is a fair near miss, but see the MUST about the clue.
- SK-V3a-T6: "watch carefully for". Matches the key, with one defensible answer. The paragraph 4 reference is correct, and alligators resting along the edges of the water and being hard to spot is accurate.
- SK-V3c-P2: "walked slowly, as if his legs were tired". Matches the key. This clue change is not logged in the fixes file. The new clue points to the sentence's own details, which is the normal context-clue strategy. It is not a giveaway.
- SK-V3c-P3: Part A is "much stronger than happy", and Part B is "He was not just happy." Both match the key. This clue change is also not logged; see SHOULD.
- SK-V3e-P3: sentence 9 (fun becomes thrilling). Matches the key. "Small" in sentence 5 is also a plain describing word, but "thrilling silver fish" does not make sense, so there is still one defensible answer.

## Test cross-reveal pass (all five lessons)
- 3.L.V.3.a T1 to T6: none. The Part B quotes in T2 do not touch cautious, firm or the T6 phrase.
- 3.L.V.3.b T1 to T5: none.
- 3.L.V.3.c T1 to T5: none.
- 3.L.V.3.d T1 to T5: none.
- 3.L.V.3.e T1 to T5: none.

## Checker
`node verification/check-content.js --all`: PASS (0 failures). The only L-V3 warnings are SK-V3b-T1 slots 0 and 1 ("clue shares blew/blue only with the key"). These are Test items, so they are acceptable.

## MUST
- [SK-V3a-P2] The clue gives away the Part B answer. "Which one tells you the most about the buyers themselves?" leaves only one candidate among the paragraph-3 choices, because Leah is not a buyer. Fix: "The clue is not in the same sentence as scarce. Read the sentences around it. Which one helps you picture what the first part of the sale was like, and does it show many people or few?" Both paragraph-3 sentences fit "what the sale was like", so the child has to decide which one shows the meaning of scarce.

## SHOULD
- [SK-V3c-P3] The Part B key stands out. "He was not just happy." is the only choice that mentions happy or Dev's feeling, and the new clue ("Find the place where the author puts happy and overjoyed side by side") confirms it by word match. Fix: replace one Part B distractor with a near miss from paragraph 5, such as "Far away, he could see the tall buildings of Atlanta." or "When they finally reached the top, Dev forgot all about his tired legs."

## NIT
- [Process] The SK-V3c-P2 and SK-V3c-P3 clue edits since 00b2d34 are not logged in L-V3-fixes.md.

Verdict: FAIL (1 MUST)

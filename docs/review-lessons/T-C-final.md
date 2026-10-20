# Final verify T-C (round 3)
Lessons: 3.T.C.1.a, 3.T.C.1.b, 3.T.C.1.c, 3.T.C.2.a, 3.T.C.2.c
MUST: 0  SHOULD: 1  NIT: 2

## Method
- Verification commit: `9f5acdd` (`T-C-verify.md` added). Read `git diff 9f5acdd -- js/data/lessons/T-C.js`. There is no `T-C-verify2.md`, and `T-C-fixes.md` has a Round 2 section but no Round 3 section. The diff also has the practice-clue rewording from `c197f29`.
- Prior findings: verify listed 2 SHOULD and 2 NIT. All 4 are fixed in the file:
  - SK-TC2c-T1: T3 Part A now says "TV back then". The T5 prompt and column now say "the diary". No Test prompt, stem or choice shows 1954 now.
  - SK-TC1c-P3: "dry peanut shell" is now "cotton boll", and the why matches.
  - 2.a Teach example: the joke line is now "told a joke about a talking sandwich", and the note is reworded to match.
  - SK-TC2c-P5: the prompt now says "when Ella wrote this letter".
- I solved every changed item cold before reading its key:
  - 1.a P4: Part A "gives reasons", Part B "A garden would help us learn."
  - 1.b P3: an extra fun fact.
  - 1.c P3: yellow flower and peanut under the soil.
  - 2.c P4: Part A city lights and streetcars, Part B the "You wrote that…" sentence.
  - 2.c P5: things normal today were special then.
  - 2.c T3: Part A black and white, Part B the "no color" sentence.
  - 2.c T5: two rows to the diary, two to life today.
  
  All keys match my answers. None of these items has two defensible answers. No quote or reference changed. The Teach example is accurate.
- I did a full pass over all five Test sections looking for one item revealing another's answer. I found none that is MUST-level (see NIT 1).
- `node verification/check-content.js --all`: PASS (0 failures). T-C has 2 warnings, both on Test items (SK-TC1b-T2 "fact" and SK-TC1b-T3 "order"). Test clues appear only after submission, so these are acceptable.

## MUST
- None.

## SHOULD
- [SK-TC1a-P4 clue] The reworded first half ("what a persuasive writer does to change a reader's mind") matches Teach's "reasons that try to change your mind", which steers Part A to "gives reasons". The kept second half ("look at how paragraphs 3 and 4 begin") points at the only Part B choice from paragraphs 3–4: "A garden would help us learn." Together, the clue singles out both keys. This is the same pattern verify rated SHOULD for SK-SS2a-P3. Fix: "For Part B, ask of each sentence: does it give the principal a reason to say yes, or does it only tell about Rosa or her plan?"

## NIT
- [SK-TC1a-T1 / SK-TC1a-T2] T1's key choice, "to help new players get ready for practice", names the audience that T2 Part A asks for ("players who are new to the team"). The hint is weak: T1's choices are all plausible, and the passage itself says "We are glad you joined us". Optional: change the T1 key to "to help players get ready for their first practice".
- [SK-TC2c-P5 clue] "Would Ella, in 1928, notice them?" shows P1's year again. This is Practice only, and the P4 prompt also says "in 1928", so the impact is low.

Verdict: PASS

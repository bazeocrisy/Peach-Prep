# Final verify T-SS (round 3)
Lessons: 3.T.SS.1.a, 3.T.SS.1.b, 3.T.SS.1.c, 3.T.SS.1.d, 3.T.SS.2.a, 3.T.SS.2.b
MUST: 0  SHOULD: 0  NIT: 1

## Method
- Verification commit: `bd9ab92` (`T-SS-verify.md` added). Read `git diff bd9ab92 -- js/data/lessons/T-SS.js`. There is no `T-SS-verify2.md`. `T-SS-fixes.md` has a Round 2 section but no Round 3 section.
- Prior findings: verify listed 2 not-fixed SHOULDs, 4 new SHOULDs and 2 NITs. All 8 are fixed in the file, along with the 4 checker-warning clue rewordings:
  - SK-SS1c-P4: the prompt is now neutral and the options are Also / For example / Instead. All three are grammatical before the comma, so meaning decides.
  - SK-SS2a-P3: the clue now points to "Everyone does before a race", which is not a Part B choice.
  - SK-SS1b-T1: the prompt no longer names either paragraph's topic, so it no longer gives away T2.
  - SK-SS1d-T5: the key now says "When the games were over…", so it no longer echoes the prompt.
  - SK-SS1a-P2: the prompt is now "what happens later because of what the peanut roots do".
  - SK-SS1d-P4: the banjo row is now "Shoppers crowd around every table."
  - SK-SS2b-T4: the repeated sentence in the why is cut.
  - SK-SS1d-T3: the distractor is now about lunch.
- I solved every changed item cold before reading its key:
  - 1.a P2: sentence 3 of "Why Peanuts Help the Soil". Sentence 2 is what the roots do now, not later.
  - 1.a P5: an extra fact.
  - 1.a T1: problem and solution.
  - 1.b T1: sentence 8, the audiobooks.
  - 1.c P4: Also.
  - 1.c T2: the ideas do not seem to go together.
  - 1.d P4: topic / detail / detail / does not belong.
  - 1.d T3: Part A fun things on Field Day, Part B sentence 1.
  - 1.d T5: the gym-awards sentence.
  - 2.a P3: Part A nervous, Part B the worried face.
  - 2.a T5: very white, bare walls.
  
  All keys match my answers. None of these items has two defensible answers, and none of the reworded Practice clues singles out a key. Refs and quotes are unchanged from the verified state: 1.b T1 targets `p2:3:1–4` are sentences 6–9, and the key `p2:3:3` is sentence 8. No false grammar claims: the 1.c P4 why on For example and Instead is correct.
- I did a full pass over all six Test sections looking for one item revealing another's answer. 1.b T1/T2 are now clean, and 2.c-style year leaks do not apply here. I found nothing MUST- or SHOULD-level (see NIT).
- `node verification/check-content.js --all`: PASS (0 failures). T-SS has 0 warnings.

## MUST
- None.

## SHOULD
- None.

## NIT
- [SK-SS2a-T2 vs T3/T4] The T4 prompt names the sun sentence (a T2 target) as figurative and asks its kind. The T3 prompt calls "smiling from ear to ear" (another T2 target) an idiom. Together they rule out two of T2's four targets. T2's prompt ("how Jamal and Noor move") already leaves only the rockets sentence, so the effect is negligible. No action needed.

Verdict: PASS

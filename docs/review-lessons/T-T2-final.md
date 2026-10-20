# Final verification T-T2 (round 3)
Lessons: 3.T.T.2.a to 3.T.T.2.d
MUST: 0  SHOULD: 1  NIT: 1

## Method
- Diffed `js/data/lessons/T-T2.js` from 00b2d34, the commit that added `T-T2-verify.md`. These changed:
  - 2a Teach point 1
  - SK-TT2a-T4 and SK-TT2a-T5
  - SK-TT2b-P1 and SK-TT2b-P3
  - the clues of SK-TT2c-P3 and SK-TT2c-P5
  - SK-TT2c-T1
- Read `T-T2-verify.md` and the "Round 2" section of `T-T2-fixes.md`. There is no `T-T2-verify2.md` and no "Round 3" section.
- Solved every changed item cold before reading its key. All my answers matched:
  - 2a-T4: the babies sentence
  - 2a-T5: p2:3:3
  - 2b-P1: egg, hatch, shed, chrysalis, butterfly
  - 2b-P3: birds will not eat monarchs, and "Instead, it stays…"
  - 2c-P3: the fat/energy choice, and "Their bodies store the extra food as fat."
  - 2c-P5: "tiny, fast flyers that travel far south"
  - 2c-T1: the float/squeak choice
- Made one full pass over every Test section (2a to 2d), looking only for one test item revealing another item's answer.
- Ran `node verification/check-content.js --all`: PASS, 0 failures, and no warnings in T-T2.js.

## Prior findings
- MUST SK-TT2a-T5 clue and prompt: fixed. The prompt no longer says "safe". The clue ("tells what the shell does") gives a strategy without quoting the key. p2:3:3 is the only target that tells what the shell does. p2:3:1 and p2:3:2 only describe the shell.
- SHOULD SK-TT2a-T4 giving away T5: fixed. The new distractor "An armadillo's shell covers its back and its sides." matches paragraph 3, still supports the main idea, and does not paraphrase the T5 key. T4 still has one key.
- SHOULD SK-TT2c-T1: fixed. The floating and still seeing are only in Built for the Water (paragraph 2), and the squeaking is only in Alligator Moms (paragraph 4), so the key uses both passages. Each distractor stays inside one passage:
  - sun + tail: Built for the Water
  - nest + carrying: Alligator Moms
  - stripes + mud and sticks: Alligator Moms

  Neither half of the key appears in T2, T3 or T4.
- SHOULD 2a Teach shark example: fixed. "Sharks have lived on Earth for a very long time." is true (more than 400 million years), and it is not about bodies.
- NIT SK-TT2b-P1 "Its": fixed.
- NIT SK-TT2b-P3 / P6: fixed. "Then it flies off to find flowers." is word for word from paragraph 6.
- The clue rewordings in 2b-P3, 2c-P3 and 2c-P5 do not single out the key.

## Cross-test reveal pass
- 2a: no reveals. T1's key restates the main idea that T4 relies on, but T4 asks the child to judge details against it, so this is a dependency and not a giveaway.
- 2b: one reveal. See the SHOULD below.
- 2c: no reveals.
- 2d: no reveals.

## MUST
- None.
## SHOULD
- [SK-TT2b-T1 / SK-TT2b-T2 / SK-TT2b-T3] The T1 order steps paraphrase two other test keys, and children can go back during a test.
  - "The drops join together and grow heavy." plus "The heavy drops fall to the ground as rain." is close to the T3 Part A key, "They join together until they are too heavy to float."
  - "Water vapor cools into tiny drops that make a cloud." points at the T2 key, "The air high in the sky is cooler."

  This is the same pattern the round 2 verifier rated SHOULD (a 2a-T4 distractor paraphrasing the 2a-T5 key). It is not a MUST, because both facts are stated plainly in the passage the child has open. It was present in rounds 1 and 2 and was not flagged.

  Fix: shorten the T1 steps so they name stages without causes, for example:
  - "Water vapor forms clouds."
  - "Drops grow bigger in the cloud."
  - "Rain falls to the ground."

  Or move T2 or T3 into Practice.
## NIT
- [SK-TT2d-T4 / SK-TT2d-T5] The T4 prompt restates sentence 9 ("a special way to find food in the dark"), and the T5 key ("…with a special way to find food") echoes it. Sentence 9 is in the draft anyway, and the T5 distractors fail for other reasons, so this is optional.

Verdict: PASS

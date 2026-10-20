# Verify T-T2
Prior findings: 21 checked, 21 confirmed fixed, 0 not fixed
New problems: MUST 1  SHOULD 3

Method: I read reviews A and B and the fix log, and checked every MUST and SHOULD against the current file. I read `git diff 4e7b23e -- js/data/lessons/T-T2.js` and solved every changed or new Practice and Test item cold before reading its key: 2a-P5, 2a-T1, 2a-T2, 2a-T5; 2b-P1, 2b-P2, 2b-P3, 2b-P4, 2b-P6, 2b-T2; 2c-P2, 2c-P4, 2c-T1, 2c-T4; 2d-P2, 2d-P4, 2d-T1, 2d-T4. Every key matched my answer.

Checks:
- All new quotes (2a-T2 Part B, 2b-P3 Part B, the 2c-P4 choices) are word for word.
- The new hottext refs point to the right sentences:
  - 2a-T5 key p2:3:3 is "It keeps the armadillo safe…".
  - 2c-T4 key p4:3:1 is "As the leaves in the nest rot…".
- No refs point into the edited paragraphs: 2a p1 paragraph 4, 2a p2 paragraphs 2–4, 2b p1 paragraph 5 and 2b p2 paragraph 2.
- Facts are now correct:
  - Only three-banded armadillos can roll into a ball, and they do not live in Georgia.
  - The puddle sentence now follows the evaporation sentence.
  - The chrysalis wording is accurate.
  - The Peach State wording is accurate.
- `node verification/check-content.js --all`: PASS (0 failures, 0 warnings).

Prior findings, all confirmed fixed:
- A MUST puddle cause order
- A MUST 2d-P4 distractor
- A+B MUST armadillo fact
- A+B 2a-P5 Part B prompt
- A 2a-T1 `why`
- B Teach bee example
- B 2a-P2/T5 duplicate
- A+B 2b-P3 Part A/B string match
- A+B clues in 2b-P2, P6 and T2
- A 2b-P4 "because" slot
- A+B 2c-P4 "energy" word match
- A+B 2c-T4 single-text item
- A 2d-T1 premise
- A 2d-P2 clue

## Not fixed
- None.

## New problems
- [SK-TT2a-T5] MUST. The new clue gives away the answer. It says "A sentence can tell about the shell without telling how it keeps the armadillo safe." The key is "It keeps the armadillo safe from thorny bushes…", and it is the only target that contains "safe" or "keeps". The prompt already says "stay safe", so the item is a word match, and the clue quotes the key. Fix: reword the prompt so it does not echo the key, for example "The last paragraph says a tough shell helps the armadillo. Choose the sentence that best shows how." Change the clue to "Some sentences only describe the shell. Find the one that tells what the shell does for the armadillo."
- [SK-TT2a-T4 / SK-TT2a-T5] SHOULD. Two test items in the same set give away the new T5 key. The T4 distractor "An armadillo's shell protects it from thorny bushes." is a near paraphrase of the T5 key, and children can go back during the test. Fix: replace that T4 distractor with one that does not restate p2:3:3, for example "An armadillo's shell covers its back and its sides." That still supports the main idea, so T4 keeps one key.
- [SK-TT2c-T1] SHOULD. The new key, "Alligators are reptiles, and alligator mothers take care of their babies.", has two problems:
  - It does not really need two passages. Alligator Moms opens with "Many reptiles lay their eggs and leave. But an alligator mother takes care of her babies.", so a careful reader gets "alligators are reptiles" from Alligator Moms alone.
  - It gives away the T3 answers. The second half is nearly the T3 Part B key ("But an alligator mother takes care of her babies.") and the T3 Part A key ("cares for her eggs and babies").

  Fix: use a key whose halves appear only in different passages and are not used by T2, T3 or T4. For example: "An alligator can float with its eyes above the water, and a mother alligator guards her nest from raccoons." Then check that no distractor half also comes from both passages.
- [3.T.T.2.a Teach point 1] SHOULD. The new example main idea, "Sharks have bodies built for hunting in the ocean.", follows the same pattern as the 2a-T1 key, "how an armadillo's body helps it find food and stay safe". It is the only T1 choice about the body. The fix moved the giveaway from Practice to Test. Fix: use a main idea that is not about bodies, for example "Sharks live in oceans all over the world." or "Sharks have lived on Earth for a very long time."
- NIT [SK-TT2b-P1]: the order step "Its new skin hardens into a chrysalis." begins with "Its", and the steps are shuffled, so the child cannot tell what "Its" refers to. Fix: "The caterpillar's new skin hardens into a chrysalis."
- NIT [SK-TT2b-P3 / SK-TT2b-P6]: the new P3 Part B distractor "First, it eats its own eggshell." is the P6 key (both are Practice). This is optional to change.

## Verdict: FAIL (1 MUST: SK-TT2a-T5 clue)

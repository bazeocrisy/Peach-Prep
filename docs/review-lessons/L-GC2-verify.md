# Verify L-GC2
Prior findings: 8 checked, 8 confirmed fixed, 0 not fixed
New problems: MUST 0  SHOULD 0

Scope: the 8 unique MUST/SHOULD findings across reviews A and B. Shared findings are counted once: 2.c Teach be-agreement (A MUST and B SHOULD), 2c-T5 crayons, and 2d-T1 melted. The other five are 2.c example note, 2d-T2, 2a-T5 clue, 2d-T5/P4 key length, and 2.b present tense. I also checked every NIT in the fixes log against the diff. The one declined NIT (2.b test format order) is a NIT, and its reason holds.

How I checked: I solved every changed item cold before reading its key: 2a-T5, 2b-T3, 2b-T5, 2c-P1, 2c-T5, 2d-P4, 2d-T1, 2d-T2, 2d-T4 and 2d-T5. Every key matched my answer, and none has a second defensible answer.
- 2b-T3: "Even if" fits sentences 10-11 of Diego's draft (rain, then "We go to the market anyway"). The other choices fail: "Only because" reverses the meaning, and "So that" does not make sense.
- 2d-T2: The answer now comes from the second stem sentence ("In less than a minute..."). Proudly and quietly are not contradicted by the stem, but neither explains the speed, so quickly is the only answer the "best" prompt supports.
- 2d-T5: The distractors are now full length. Each one still has a plain word or "did something", so the key is the only fully exact sentence.

Other checks:
- No sentence references changed. Diego's draft is untouched, and the T1 hottext target is still sentence 8.
- The new test items reveal no answers to other test items.
- The 2.c Teach be-rule is now accurate: I am, I was, you are, you were.
- The array `stem` on 2d-T2 is allowed by SPEC §5.
- `node verification/check-content.js --all`: PASS (0 failures, 0 warnings).

## Not fixed
(none)
## New problems
(none)
- [SK-GC2d-T2] NIT: The clue ("How much time passed before the truck left?") leads the child most of the way. It teaches the context-clue strategy and does not name the word, so it is acceptable.
## Verdict: PASS (no MUST left)

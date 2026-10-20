# Verify L-V3
Prior findings: 22 checked, 22 confirmed fixed, 0 not fixed
New problems: MUST 0  SHOULD 3

Scope: all MUST and SHOULD findings from L-V3-A (2 MUST, 7 SHOULD) and L-V3-B (3 MUST, 10 SHOULD). I solved every changed or new item cold before reading its key: V3a-P2, P5, P7, T6; V3b-P1, P2, P3, T4; V3c-P1, P3, P4, T3; V3d-P2, P5, T5; V3e-P2, P3, P4, P5, T1, T3, T4. Every key matches my answer.

ABC order is correct in V3d-P2 (star, stare, start, step) and T3 (plan, plane, planet, plant). Because does fall between beach and bell.

Two sentences were added to p2 paragraph 4. Every 3.L.V.3.a test reference still points to the right place:
- T2 dwell is in paragraph 3.
- T5 firm is in paragraph 4, and the "next sentence" is the soft/shake sentence.
- T3 cautious is in paragraph 5.
- T6 "keep an eye out for" is in paragraph 4, followed by the "watch for them" sentence.

The V3e-P3 targets and its key p1:3:3 (sentence 9) are correct. No test prompt gives away another test item's answer. The new facts hold up: alligators rest along the edges of the water, and the chrysalis is the caterpillar's own hardened skin.

On the declined part of B's 3.L.V.3.a SHOULD (images and graphs): the decline holds. The site shows no images, and SPEC §5 rules out captions that describe a picture. The phrase gap is now covered by Teach, P7 and T6.

`node verification/check-content.js --all` gives PASS (0 failures, 0 warnings).

## Not fixed
(none)

## New problems
- [SK-V3a-P2] SHOULD: the fixed clue still points to only one Part B choice. "Look in paragraph 3 for a detail that tells how many buyers came at first" fits just one choice: the only Part B choice from paragraph 3 is the key, and it is also the only one about buyers. Part B becomes a lookup again, though the clue no longer says "the very next sentence." Fix: replace one Part B distractor with a near miss from paragraph 3, such as "Leah sat at the table and sighed." The child then has to decide which paragraph-3 sentence shows "very few."
- [SK-V3a-T6] SHOULD: the key stands out by matching words. The very next sentence says "so it is smart to watch for them," and only the key contains "watch," so the child can match the word without understanding the phrase. The distractors "close one eye to hide from" and "throw food out to" are not plausible misreadings. Fix: reword the follow-up sentence so it gives a reason without repeating the meaning. For example: "Alligators often rest along the edges of the water, and they can be hard to see." Use near-miss distractors such as "stay far away from", "take a photo of" and "listen for the sound of".
- [SK-V3e-P3] SHOULD: the new clue sorts the candidates for the child. "Ask what it describes: a size, how something feels to touch, or how exciting something was" names the three plain describing words in the draft (big, nice, fun) by type. The last type matches the "very exciting" meaning given in the prompt, so the item is solved by matching. This is the same kind of clue that was removed from V3a-P5. Fix: "Find each plain describing word in the draft. Try thrilling in its place. Does the sentence still make sense and tell more exactly what Malik meant?"

## Verdict: PASS (no MUST left)

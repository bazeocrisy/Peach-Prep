# Verify L-GUM4
Prior findings: 25 checked, 25 confirmed fixed, 0 not fixed
New problems: MUST 1  SHOULD 3

Method: I read reviews A and B and the fixes log, and checked every MUST, SHOULD and NIT against the current file. I solved every changed or new Practice and Test item cold from `git diff 4e7b23e` before reading its key. That covers GUM4-2 T3; GUM4-3 P1, P2, P3 and T2; GUM4-4 T5; GUM4-5 P2 to P5 and T2 to T5; GUM4-6 P3, P4 and T1 to T5; and GUM4-8 T5. Every key matches my answer, and each item has only one defensible answer. In the new P5 match, the library and kitchen rows take only where, and the bike, park and song rows take only that. Nothing in one test prompt reveals another test answer. "The game starts at noon" in GUM4-4 T5 does not repeat any GUM4-4 practice sentence. ("at noon" appears only in GUM4-1 P-match as a phrase.) `node verification/check-content.js --all` gives PASS (0 failures, 0 warnings).

The reviewers' MUST (the false "a place takes where" tip) is fixed in the tip, in points 2 and 3, in Learn 1 and 2, and in P5 and the T5 why. The fix brought in one new false claim (see below).

## Not fixed
(none)

## New problems
- [SK-GUM4-5-P3 why] MUST. The why says "Which would need the next words to be missing a doer". That grammar claim is false. Which and that also fit when the next words already have a doer but are missing the thing acted on: "the book which I read", "the place which we visited". "Which" is wrong in the Tybee sentence because "we found the seashells" is already complete, not because a doer is present. A child who learns this rule will reject correct sentences such as "the cake that Mom baked". Fix: "Which does not fit, because the words after the blank are already complete: we found the seashells there. Who is for people."
- [GUM4-5 Teach point 2] SHOULD. "Use that or which to tell more about a thing, an animal or a place when the next words need someone or something to do the action" puts the needs-a-doer condition on things as well as places. The tip says the opposite for things ("For a thing, use that or which", with no condition). A place noun followed by a missing object, such as "the park ___ we visited", is covered by neither point 2 nor point 3, so a child is likely to fall back to where. No item depends on this, so no key is affected. Fix: "Use that or which to tell more about a thing or an animal: We crossed the bridge that goes over the river. Use that for a place too when the place itself does the action: The park that has a slide is near us."
- [SK-GUM4-5-T5] SHOULD. The distractor "The park who has a slide is near us." is the Teach point 2 example word for word, with only who swapped in for that. The same "park ___ has a slide" frame also appears in the tip and in P5. A child can reject the distractor from memory, so the test is too close to Teach and practice. Fix: use a new frame, for example "The bus who takes us to school is yellow." (fix: that), and change the why to match.
- [SK-GUM4-3-P3 clue and why] SHOULD. The clue is "Find the noun in the sentence that means more than one and owns something." The sentence has only one plural noun, girls, so Help step 1 settles the answer. That is the same problem reviewer A raised for P1 and T2, which were fixed with the general strategy clue. The why is also hard to follow: "the project and Mr. Hill do not own the project." Fix: clue: "Ask two questions about the noun: one or more than one? A person or a thing?" Why: "...Mr. Hill and the science project each mean one. The project cannot own itself, and Mr. Hill did not make it, so their does not stand for them together."

## Verdict: FAIL
One MUST remains: the SK-GUM4-5-P3 why. It is a one-line fix.

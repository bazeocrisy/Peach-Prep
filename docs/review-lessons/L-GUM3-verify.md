# Verify L-GUM3
Prior findings: 21 checked, 21 confirmed fixed, 0 not fixed
New problems: MUST 0  SHOULD 4

Scope: every MUST and SHOULD in L-GUM3-A (4 + 7) and L-GUM3-B (4 + 6). I also checked all 8 NITs; each one is fixed as the log says. I solved every changed Practice and Test item cold before reading its key (1-P4, 1-T1, 1-T3, 2-P5, 2-T4, 4-P1, 4-P3, 4-T1, 4-T5, 5-P2, 5-T1, 5-T2, 6-T3, 7-P1, 7-P4, all of lesson 8 Practice and Test, and lesson 8 Learn). Every key matched my answer.

Lesson 8 check: I checked every split against Merriam-Webster end-of-line division and against the three new Teach rules. The words are doc·tor, car·pet, muf·fin, win·ter, sum·mer, bas·ket, pop·corn, let·ter, mon·key, birth·day, pic·nic, lad·der, sil·ver, nap·kin, but·ter·fly, ham·mer, can·dy, mar·ble, hel·met, kit·ten, pil·low, cac·tus, rain·bow, win·dow and mit·ten. Every split marked correct matches the dictionary and is decided by a taught rule. Every split marked wrong breaks both the dictionary and the rules. T1 now has 4 choices and one defensible key (picnic). In T2, only but- | terfly follows a rule. 4-T5 now has 4 choices and one defensible key.

`node verification/check-content.js --all`: PASS (0 failures, 0 warnings).

## Not fixed
- None.

## New problems
- [Lesson 8 Teach point 3] SHOULD. The rule "When two different consonants sit between two vowels, split between the consonants" is stated with no exceptions. It gives wrong splits for consonant pairs that make one sound: fat-her, teac-her, roc-ket, mot-her. A child will use it on those words. No item in this lesson depends on it, so it is not a MUST. Fix: add "Letters that make one sound together, like th, sh, ch and ck, stay together: moth-er, rock-et."
- [Lesson 8 parent] SHOULD. The new parent activity asks the child to split "sandwich" and "say which rule they used." Sandwich (sand·wich) has three consonants in the middle (n, d, w), and none of the three taught rules decides it. The writer dropped "hungry" for this same reason. Fix: replace sandwich with a word the rules decide, such as "button" (double t) or "tablet" (b and l).
- [SK-GUM3-2-T4] SHOULD (key stands out). The row "moose" matches the column "moose", the same word. A child gets that row free with no knowledge, so under the all-but-one rule the item needs only 2 of the 3 real matches. Fix: replace the moose row with an irregular plural that no other Test item uses, for example "wolf → wolves". If you do that, add "wolf becomes wolves" to Teach point 3. Or, if the match type allows an unused column, add a decoy column such as "mooses".
- [SK-GUM3-2-T2 / T3 / T4 / T5] SHOULD (one test item reveals another; children can go back). This is pre-existing, and the fix made part of it smaller, but it is still there:
  - T2's correct choice "Grandpa has big feet and wears big boots." gives T3's answer (feet: foots / feet / feets).
  - T5's correct sentence "The two deer ran into the woods." confirms T2's deer key.
  - T4's column "geese" rules out T2's distractor "Six gooses...".
  - Fix: in T2, replace the feet key with a noun no other Test item uses. For example, "Our class saw two moose at the zoo." works once moose leaves T4, as above. In T5, replace "The two deer ran into the woods." with a correct sentence that uses no T2 noun.
- NIT [SK-GUM3-2-T3 clue]: The clue still says "changes the letters inside", but Teach point 2 now says "change their spelling" (fixed per review B). Fix: "The word changes its spelling instead of adding -s."

## Verdict: PASS (no MUST left)

# Verify T-C
Prior findings: 18 checked, 18 confirmed fixed, 0 not fixed
New problems: MUST 0  SHOULD 2

Method: I checked all 18 MUST and SHOULD findings from reviews A (1 + 6) and B (1 + 10) against the current file. I read `git diff 4e7b23e` and solved every changed or new Practice and Test item cold before reading its key: 1.a T1; 1.b P1, P5, P7, T1, T3, T4; 1.c P3, P5, T3, T4; 2.a P1, P4, P5, T3, T5; 2.c P1, P5, T1, T5. All keys match my answers. The changed quote (1.b T3 Part B, the chrysalis sentence) matches p2 word for word. All changed refs point to the right place: 1.b P5 (`p1:5:3`, `p1:5:4`), 2.a P5 ("paragraph 5" = "When we counted…"), and 2.c T1 ("paragraph 4" = Macon, with the Box and heading skipped). Facts checked: the monarch caterpillar sheds its skin and becomes the chrysalis, and the peanut peg is described correctly. `node verification/check-content.js --all`: PASS (0 failures, 0 warnings).

The writer kept the first/third-person label in Learn 1, P1, P4 and T1 (B's 2.a scope point). That reason holds. Teach now leads with perspective, and T5 tests the narrator's view against the reader's.

## Not fixed
- None.

## New problems
- [SK-TC2c-T1] SHOULD. Other test prompts give away slot {0} (the year). T3 Part A asks "What does the diary show about TV in 1954…", and the T5 prompt and column both say "the diary in 1954". Children can go back during a test. This was already true before the fixes, but T1 was reworded in this pass, so it counts now. Fix: in T3, write "What does the diary show about TV back then compared with TV today?" In T5, change the column to "The diary" and the prompt to "Does it fit the diary, or does it fit life today?"
- [SK-TC1c-P3] SHOULD. The new distractor "dry peanut shell" is close to defensible. The peanut under the soil does have a shell, so a diagram of it shows one. Only the word "dry" makes the label wrong. The why's reason ("a dry shell is not part of a plant in the ground") is shaky. Fix: use a label that is clearly not on Slide 2's plant, for example "corn stalk" or "cotton boll". Update the why to match.

NIT (no action needed to pass):
- [3.T.C.2.a Teach example] The note says a reader might think it was a good lunch "even though the narrator does not say so." But the narrator calls the joke "the funniest joke I have ever heard." Consider "told a joke about a talking sandwich" so the narrator never shows that he enjoyed it.
- [SK-TC2c-P5] The new prompt "Why does it help to know Ella wrote this letter in 1928?" gives away the year that P1 asks for. This is low impact in Practice. Consider "Why does it help to know when Ella wrote this letter?"

## Verdict: PASS (no MUST left)

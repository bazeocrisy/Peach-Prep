# T-T34 fixes (reviews A and B)

The checker (`node verification/check-content.js --all`) reports nothing for T-T34. Its 2 remaining failures are in `L-GUM3.js` (SK-GUM3-4-T5, SK-GUM3-8-T1), which is not my file. Readability: FK 2.8–4.4.

## MUST
- **A-MUST / B-MUST SK-TT4b-P1** (two defensible lines in the cold/red pair): fixed. The prompt now says "In one pair of lines in Jaylen's poem, the second line does not rhyme with the line before it." I also removed `p1:3:1` from `targets`. Both reviewers' fixes are applied.
- **A-MUST / B-MUST SK-TT4b-T1** (two defensible lines in the blue/away pair): fixed. The prompt now says "line 4 of each stanza should rhyme with line 2. In one stanza, line 4 does not rhyme with line 2." I removed `p2:2:2` from `targets` and rewrote the clue to check line 2 against line 4 in each stanza.

## SHOULD
- **A SHOULD / B NIT SK-TT4b-T2** (tense shift in "But misses! Off it flew."): fixed. The key is now "It zips right out of view." (present tense, rhymes with blue), and `why` is updated.
- **A SHOULD / B NIT SK-TT3c-P3 why** ("But shows something different, or gives a choice…" reads as one claim about "but"): fixed. It now reads "\"But\" shows something different, \"or\" gives a choice, and \"until\" tells time."
- **A SHOULD / B SHOULD SK-TT4a-P2 clue** (the clue listed the end words): fixed. It now reads "Read only the last word of each line in stanza 2 out loud. Listen for two that end with the same sound."
- **B SHOULD / A NIT 3.T.T.3.c teach point 3** (circular "because joins a reason to the why"): fixed. It now reads "Because joins your opinion or a reason to the facts that explain it."

## NIT
- **A SK-TT3a-T5** ("no single tree" vs. "the tree by our parking lot"): fixed. The key is now "Last spring, a robin built a nest in a tree across the street from our school." I updated `why`. The key is still within the checker's length limit.
- **A 3.T.T.3.c teach example** (the conclusion did not sum up the reasons): fixed. It now reads "Therefore, because cooking teaches math and brings families together, every family should invite kids into the kitchen." I updated the note to match.
- **A SK-TT3c-T5 DOK**: fixed. Changed from DOK 3 to DOK 2.
- **A 3.T.T.4.b teach example 2** ("up the stair"): fixed. The line is now "My boots go squishing everywhere." (rhymes with chair), and the note is updated.
- **B 3.T.T.4.b** (each Test item repeats its Practice twin's format): fixed for T5. It is now an `ms` item worth 2 points, pick 2: "Which TWO stanzas keep the same rhyme pattern…". I added a second correct ABCB stanza (sing/spring) and a new wrong choice (hum/day), for 6 choices. The test total is now 7 points.

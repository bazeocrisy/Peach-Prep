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

## Round 2 (docs/review-lessons/T-T34-verify.md)
- **MUST SK-TT4b-T2 gives away T1:** fixed. T2 no longer points at Rosa's poem. It now has `passages: []` and its own 4-line `stem`, Theo's squirrel stanza: lines 2 and 4 should rhyme (tree), and line 4 ("And hides it in the grass.") breaks the pattern. The key is "And buries it with glee." The wrong choices are "And drinks a cup of tea." (rhymes but makes no sense), "And then it climbs back down." and "And hides it by the fence." (neither rhymes). The choices no longer use blue-rhymes, so nothing points back to Rosa's stanza 2. No other Test prompt names a line or answer from another Test item.
- **SHOULD SK-TT4b-T1 states the pattern:** fixed. The prompt is back to "One line in Rosa's poem does not follow her rhyme pattern. Which line is it?" I kept the reduced `targets` (p2:2:2 is still removed). The clue now asks the child to find the pattern in stanza 1 first, so the child has to work out the pattern, as in P1.
- **SHOULD SK-TT4b-P1 "pair" is ambiguous:** fixed. The prompt now reads "Jaylen's poem rhymes in pairs: lines 1 and 2, then lines 3 and 4. In one pair, the second line does not rhyme with the first. Which line is it?" I updated the clue to match.
- **NIT "It" in the old T2 key:** resolved by the MUST fix. That item and its key no longer exist.
- **Not changed, for the lead to decide:** in Practice, SK-TT4b-P2 ("replace stanza 3, line 2") still names P1's answer. The verify rule is about Test items, and Practice gives hints anyway, so I left it. If the same rule should apply to Practice, P2 can get its own stem the same way T2 did.

Checker: `node verification/check-content.js --all` gives PASS (0 failures, 0 warnings).

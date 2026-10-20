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

## Round 3 (docs/review-lessons/T-T34-final.md)
- **MUST SK-TT4a-T4 columns reveal T2:** fixed. The T2 wrong choices are now "three stanzas with three lines", "three stanzas with six lines" and "four stanzas with three lines". The stanza count from T4's columns (and from T3's "stanzas 2 and 3") no longer isolates the key, so the child still has to count the lines. I updated `why`.
- **SHOULD SK-TT3c-T3/T4 help T5:** fixed. The T3 prompt is now "Malik wants to add one more sentence to the paragraph about saving class time. Which sentence is best?" I updated the clue and `why` so they no longer name sentence 7 or 9. The T2 dropdown and the T4 key also show Malik's reasons, which no rewording of T3 can hide. So T5 no longer uses Malik's draft. It is now an `ms` item with its own `stem` (Lena's music-club paragraph, `passages: []`). It asks for the TWO sentences that are evidence for the reason in sentence 2. Keys: (3) "In a band, each player has to listen to the others…" and (4) "Last year, our chorus practiced as a team…". Wrong choices: (1) the opinion, (5) "Music is the best subject in school." and (6) "I hope our principal says yes!". It is DOK 2 and 2 points.
- **SHOULD SK-TT3a-T5 points T4 to paragraph 3:** fixed. The prompt is now "…Which sentence would best support one of the author's reasons?" The clue and `why` no longer name paragraph 3. Only the robin choice supports either reason (shade or wildlife).
- **NIT SK-TT3a-T2 row repeats the T1 key:** fixed. The row is now "A playground is better with trees." (opinion). I updated `why`.
- **NIT SK-TT4b-P2 names P1's line:** left as is (Practice), as in Round 2.
- **Extra (scan):** the SK-TT4b-T5 clue said "Rosa's pattern is: lines 2 and 4 rhyme", which would give away T1's pattern if hints or explanations are shown during the test. It now says "First find which lines rhyme in Rosa's stanzas. Then check those same lines in each choice."

### Full Test scan (every prompt, stem, choice, column and dropdown text)
- **3.T.T.3.a:** T3 Part A names "trees make shade" as a reason. That does not narrow T4, whose targets are all in paragraphs 3–4 and whose answer is the second reason. No other reveals.
- **3.T.T.3.c:** T1 (opinion), T2 (linking words), T3 (class-time evidence) and T4 (conclusion) all use Malik's draft. None of their answers appears in another item's prompt, choices or dropdown text. T5 now uses its own paragraph.
- **3.T.T.4.a:** T1 (rhyme pairs), T2 (structure), T3 (repetition), T4 (stanza jobs) and T5 (rhyme with "breeze"). After the T2 fix, nothing gives an answer away. T5's prompt quotes one line but not its rhyme partner.
- **3.T.T.4.b:** T1 and T5 use Rosa's poem. T2, T3 and T4 use their own stems. The T3 prompt says "In this poem, lines 2 and 4 rhyme" about the porch stanza, not about Rosa's poem. No reveals.

Checker: `node verification/check-content.js --all` gives PASS (0 failures). None of its 9 warnings is in T-T34.

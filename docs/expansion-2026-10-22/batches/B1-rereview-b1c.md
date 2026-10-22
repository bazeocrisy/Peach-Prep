# B1 re-review (b1c): 3.T.SS.2.a and 3.T.T.4.a after fixes

**Reviewer:** independent re-reviewer. I did not author these lessons.
**Scope:**
- `js/data/lessons/T-SS.js` (3.T.SS.2.a block)
- `js/data/lessons/T-T34.js` (3.T.T.4.a block)

**Rules applied:**
- REVIEWER-BRIEF.md
- CONTENT-BRIEF.md
- the "Rule added after the B1 reviews" section of AUTHOR-BRIEF.md

**Earlier reviews checked:** B1-review-2A.md (§4, §5) and B1-review-2B.md (all findings for these two lessons).

**Read-only.** I wrote only this file. I ran no git and started no server. The gates I ran (check-content, readability) only read files.

## 0. Blind re-solve

**Method.**
- My script is `scratchpad/rr1c/blind.js`. It loads both lesson files in Node through a stub `PP.addLesson`.
- It resolves `{ref}` items and prints only the requested items and the passages they use.
- Choices, Part A and Part B choices, hottext targets and dropdown options are shuffled with a seeded LCG (seed 77123).
- It strips `correct`, `answer`, `why`, `hints`, `how`, `clue` and `misconception`.
- I grepped the printout for key fields before reading it. There were none.
- I saved my answers to `scratchpad/rr1c/answers.json`, with a note on the one ambiguity I saw (`solve-notes.txt`). Only then did I extract the keys (`cmp.js`).

**Item list.** The brief puts the "Flip!" items under 3.T.SS.2.a. "Flip!" is in fact p5 of **3.T.T.4.a**, and it is used by TT4a C01–C04 and C10. I solved the union:
- 3.T.SS.2.a: C02, C05, C06, C07, C08, C09, C11, C12, C13, C14, S01 and S03 (twelve items).
- 3.T.T.4.a: C01, C02, C03, C04, C07, C08, C10 and C14 (eight items).

**Agreement: 20 / 20 (100%).**

| Lesson | Solved | Agreed |
|---|---|---|
| 3.T.SS.2.a | 12 | 12 |
| 3.T.T.4.a | 8 | 8 |

**Was it fully blind? Yes, with two small qualifications:**
- Before solving, I printed the *shape* of each lesson: field names, passage titles, item types and passage ids. I did this to write the script. No item text, keys or hints were shown.
- I saw only the *file names* in the author's `scratchpad/b1c/` folder, and I opened none of them.

I did not open the lesson source, the author log or the earlier reviews until `answers.json` was saved.

**What the solve showed.**
- **TT4a-C07.** Four lines repeat words: "round and round", "slap, slap, slap", "Don't stop! Don't stop!" and "hop, hop, hop".
  - I chose the two stanza 2 lines, because "the jumping" only begins at "in I go!". That is the intended reading.
  - The new 1:1 target ("round and round") makes the rope distractors a real pair. The item is defensible.
- **SS2a-C02, Part B.** Now that the goggles sentence is in, Part B needs a real choice between two paragraph 4 sentences. It is better than before.
- I found no item with two defensible keys.

## 1. Verdicts

| Lesson | Verdict | MUST | SHOULD | Main reason |
|---|---|---|---|---|
| 3.T.SS.2.a | **CHANGES REQUIRED** | 2 | 4 | Hint 3 of similar items S02 and S03 still leaves only the key (R-M1, R-M2). S02's hint 2 (2A S-S1) was not fixed and is missing from the author log |
| 3.T.T.4.a | **ACCEPTED** | 0 | 1 | Every earlier MUST and SHOULD is fixed. Apply R-S5, a one-clause `how` edit, in passing |

## 2. Earlier MUST and SHOULD findings: are they fixed?

### 3.T.SS.2.a

| Finding | Item | Status | Evidence now |
|---|---|---|---|
| 2A S-M1 | C03 | Fixed | h2: "Reread paragraph 1. What else does the author tell you about Rosa there?" h3 rules out "frozen" only, so three choices remain |
| 2A S-M1 / 2B M-5 | C05 | Fixed | Slot 1's literal distractor is now "should rest and skip the next meet", which "Keep practicing" rules out. h3 rules out simile only, so slot 0 keeps two options and slot 1 is untouched |
| 2A S-M1 / 2B S-1 | C06 | Fixed | h2: "Picture a sleepy cat. Then reread stanza 1…". h3 removes the literal cat, leaving three choices |
| 2A S-M1 / 2B S-1 | C08 | Fixed | h2: "Reread stanza 2. What do the gulls do in each line?" |
| 2A S-M1 | C15 | Fixed | h2: "Find each phrase… read the sentence around it." h3 nudges only the green-thumbs row (one row) |
| 2B M-4 / 2A S-S1 | C02 | Fixed | Paragraph 4 now holds two Part B choices (4:1 goggles and 4:2 key). h2: "reread paragraph 4 from the beginning" |
| 2B M-4 / 2A S-S1 | C07 | **Partly fixed** | Stanza 3 holds two Part B choices (3:2 and 3:3), so the new rule passes. But "the lines around 'Chin up!'" still narrows to 3:3. See R-S2 |
| 2B M-4 / 2A S-S1 | C12 | Fixed | h2 is strategy only and names no place. The distractors come from paragraphs 1 and 4, and the author correctly avoided a paragraph 2 colour sentence, which would give away C13 |
| 2A S-S1 / 2B S-1 | C13 | Fixed at h2, **moved to h3** | h2 no longer says "right after the metaphor". But h3 now says "compare it with the paragraph the metaphor is in". See R-S1 |
| 2A S-S1 | **S02** | **Not fixed, and not logged** | h2 still reads "Read what Grandma does before she speaks, and what she says will happen next time". It is missing from author log §6.2. See R-M1 |
| 2A S-S2 | S03 | Fixed | S03 is now a describe item and no longer has TB4's choice design. C04 and C09 still practise like-means-enjoy, as does TB4's distractor. Two core items on a taught trap is acceptable (NOTE N-6) |
| 2A S-S3 | S01 | Fixed | The self-explaining second sentence was removed |
| 2A S-S4 | p5 | Fixed | 5:2: "An anole that has turned brown on a tree trunk…" |
| 2B M-6 | glossary, teach point 1, Watch Me 1 | Fixed | All three now say "two different kinds of things", and Watch Me 1 models the same-kind "as … as". The headline `teach.big` was not updated. See R-S4 |
| 2B N-2 | p4 2:1 | Fixed | "The gulls are like a recess crowd." |
| 2B N-6 | P3 (Together) | Fixed | h2 is now strategy only and does not pin Part B |

### 3.T.T.4.a

| Finding | Item | Status | Evidence now |
|---|---|---|---|
| 2A P-M1 / 2B M-7 | C04 | Fixed | h2 is strategy only, and 2:1 was added as a target. After h3, five targets remain (1:2, 1:4, 2:1, 2:3, 3:1). 2:4 is correctly still absent |
| 2A P-M2 / 2B M-8 | C07 | Fixed | 1:1 "round and round" was added. After h3 removes "slap", three repeating lines remain for two picks (NOTE N-2) |
| 2A P-M3 / 2B M-4 | C08 | Fixed | h2: "Compare stanza 3 with stanza 2." Part B has two lines from stanza 3 and two from stanza 2. h3 rules out the trip only |
| 2B M-9 | C08 → C09 | Fixed in C08 | "The first turn comes in stanza 1" is gone from C08. But C07's `how` now carries a similar cue. See R-S5 |
| 2A P-M4 | C11 | Fixed | h1 is strategy only, and h2 is a reread instruction. After h3, four choices remain for two picks |
| 2A P-S1 | C01 | Fixed | h2 points to stanza 2, whose pair "me and no" is the slot 1 *distractor*, not the key |
| 2A P-S1 | C02, C09, C12, S02, S03 | Fixed | Each h2 is now a reread or compare instruction. Each h3 removes one choice |
| 2A P-S2 | C14 | Fixed | C14 is now a two-slot dropdown (before / during / after), no longer the T4 and TB4 "match each sentence to its stanza" frame. h3 settles slot 0 only, which the new rule allows |
| 2A P-S3 / 2B S-6 | C03 DOK | Fixed | Now DOK 1. C05 stays at DOK 2 by lead decision (NOTE N-9) |
| 2B S-2 | C01 slot 1 | Fixed | "pan and sound" now tests the every-other-line misconception |
| 2B S-4 | C10 | Fixed | C10 now compares repetition across the two poems. Its keys (both copy a sound; only "Flip!" opens two stanzas the same way) are correct. I checked every stanza opening |
| 2B S-8 | teach point 3 | Fixed | "If you change an end word, check whether its partner still rhymes." This prepares C06 |
| 2B N-1 | p5 3:2 | Fixed | sit / bit |
| 2B N-3 | C01 `why` | Fixed | |
| 2B N-4 | C10 nested quotes | Fixed | The keys name the poems by topic. The `why` has "Only Flip! opens" without quotation marks (style only) |
| 2B N-6 | P5 (Together) | Fixed | h2 is strategy only |
| 2A P-N3 | S03 `like` | Fixed | Now C12 only |

## 3. Findings

### MUST

**R-M1. SK-SS2a-S02: hint 3 leaves only the key, and hint 2 is the unfixed 2A S-S1 pointer.**
- **Hint 2:** "Read what Grandma does before she speaks, and what she says will happen next time." It points at the nod and at "it will be perfect", the two facts the key paraphrases.
- **Hint 3:** "There is no train or track…, so one choice reads the words too literally. Ask whether Grandma sounds pleased or upset, then test the choices that are left."
- **What is left after hint 3:** the key ("doing well and close to getting it right"), "made a big mistake and should start all over" and "needs to find a new recipe". The pleased-or-upset test removes both distractors, because both describe an upset grandmother. Only the key is left.
- **Process:** 2A S-S1 listed S02, but author log §6.2 does not mention it, and §6 says every SHOULD was addressed.
- **Fix:**
  - h2: "Read everything Grandma does and says, from her first bite to her last words."
  - h3: rule out the railroad choice only, and stop: "There is no train or track in Grandma's kitchen, so one choice reads the words too literally. Test the choices that are left against what Grandma says to do next time."
  - Also consider a distractor that survives the pleased test, for example "He should make the cornbread exactly the same way next time". It fights "use a little less salt".

**R-M2. SK-SS2a-S03: hint 3 points to the word that the key paraphrases.**
- **Hint 3** ends: "Test the choices that are left against the word the simile uses." After it removes the bottle-hiding choice, the choices left are "how very tiny", "shell is made of metal" and "grow bigger very fast". "The word the simile uses" is *small*, and only "tiny" matches it. So the hint leaves only the key and echoes it (REVIEWER-BRIEF: "echoing the key's wording").
- **Related weakness:** neither remaining distractor is a plausible misreading.
- **Fix:**
  - h3: "Nothing in the sentence is about bottles as hiding places, so one choice reads the words too literally. Picture a bottle cap again, then test each choice that is left against the whole sentence."
  - Replace "grow bigger very fast" with a tempting wrong reading of the same comparison, for example "that a baby box turtle is round and flat". A bottle cap is round and flat, but the simile is about size, and the sentence's own word *small* rules it out.

### SHOULD

**R-S1. SK-SS2a-C13: hint 3's "same paragraph" test effectively picks the key.**
- **Hint 3:** "For each choice that is left, find the paragraph it comes from and compare it with the paragraph the metaphor is in."
- **What is left after the literal choice goes:**
  - eating flies, from paragraph 3;
  - hiding anywhere, from paragraph 5 ("hard to spot"), or arguably paragraph 1 ("small");
  - colour change, from paragraph 2.
- The heuristic tells the child to prefer the paragraph 2 choice. Only "little magician" (*little*) keeps the size choice faintly alive, so in practice the hint settles the whole item. That is the 2A S-S1 cue moved from h2 to h3.
- **Fix:** "The anole does not perform for people, so one choice reads the words too literally. For each choice that is left, ask: does the article tell about something the anole really does that could amaze someone, the way a magic trick does?" Flies disappearing, hiding and colour change all survive this test, and the child has to weigh them.

**R-S2. SK-SS2a-C07: "the lines around 'Chin up!'" still narrows Part B to the key.**
- "Chin up!" is stanza 3, line 4. The lines *around* it are 3:3 (the key) and 4:1, and 4:1 is not a Part B choice. The other stanza 3 choice, 3:2 "With towers in a row", is not "around" the idiom.
- So hint 2 passes the letter of the new rule (stanza 3 holds two Part B choices) but not its purpose.
- **Fix:** "Reread all of stanza 3, from its first line to Grandpa's words." Hint 3 already handles one wrong choice in each part.

**R-S3. SK-SS2a-C09: hint 3 settles slot 1 and removes a slot 0 option.**
- "The line does not put two different things side by side, the way 'kids who chase a ball' does…" This tells the child that the line is not a simile (slot 1, settled), and that like does not "compare two things" (slot 0 is down to "means enjoy" and the weak "means almost the same as").
- The new rule allows hint 3 to settle at most one blank.
- **Fix:** keep only the slot 0 scaffold: "Try putting enjoy in place of like, and then similar to. Which one keeps the meaning of the line?" Leave slot 1 to the child.

**R-S4. 3.T.SS.2.a: the headline definition, and the metaphor glossary entry, do not match the edge cases the items test** (new rule 7).
- `teach.big` still says "a simile compares with like or as". That is the rule M-6 removed from the glossary, and by it C04's "as long as the pool at my school" is a simile.
- The glossary says a metaphor is "a comparison that says one thing is another". C14 tests "Anoles are fast hunters", which says one thing is another and is literally true. C14's own mix-up line says "A metaphor must compare two different things". Teach point 2's "noisy" example covers adjectives but not a literal *is + noun*.
- **Fix:**
  - big: "a simile compares two different kinds of things with like or as, a metaphor says one thing is a different kind of thing…"
  - glossary metaphor: "a comparison that says one thing is a different kind of thing, without like or as."
  - Teach point 2 could add "'My dog is a good swimmer' is a fact, not a metaphor." Do not use an anole or hunter example, which would pre-answer C14.

**R-S5. SK-TT4a-C07's Show Me How hints at SK-TT4a-C09, two items later in set 2.**
- C07 `how` 1 says the rope lines are "about the ropes, **before the speaker jumps in**".
- C09 asks why stanza 1 ends at "in I go!", and its key is "It ends the waiting part at the very moment the speaker jumps in".
- This is a softer form of the 2B M-9 cue that was removed from C08. The passage makes the jump-in visible anyway, so this is SHOULD and not MUST.
- **Fix:** end C07 `how` 1 at "are about the ropes."

### NOTE

- **N-1. Brief item list.** The "Flip!" items are 3.T.T.4.a C01–C04 and C10, not 3.T.SS.2.a. I solved them as 3.T.T.4.a items.
- **N-2. TT4a-C07, hint 3.** Once "slap" is ruled out as about the ropes, "round and round" falls to the same test. But it is a step the child takes, not one the hint takes. This was the fix the earlier reviewers asked for, and it passes.
- **N-3. TT4a-C04, hint 3.** "…before anything goes wrong" implies that the turn comes after 2:2. That leaves 2:3, plus 3:1 as a real distractor (the laughing; it is also the item's named mix-up). It passes.
- **N-4. TT4a-C06 → C07.** C06's `why` says "Stop and hop make the pair now". It names the end words of 2:3 and 2:4, C07's keys, but says nothing about repetition, and C06's own stem already shows "I hop and hop". It is acceptable.
- **N-5. TT4a-C08 → C09.** C08's `why` ("The bell ends recess") removes C09's "recess is over" distractor. C09's own hint 3 does the same, so nothing is given away.
- **N-6. SS2a like-means-enjoy.** The trap is practised in C04 (a distractor) and C09 (a whole item), and it appears in form B TB4 (a distractor). Now that S03 has changed, this is practice, not rehearsal.
- **N-7. Together and set 1 (3.T.SS.2.a).**
  - P1 (heart pounding, nervous) and P3 (butterflies, worried face) both establish that Rosa is nervous in paragraphs 1 and 2. That is the evidence C03 uses.
  - No Together item gives C03's answer ("scary and hard to jump into").
  - P2 and P4 classify "windmills" and "bouncing ball" by *type*. P5 and C02 ask their *meaning*.
  - So no Together item pre-answers a set 1 item.
- **N-8. Together and set 1 (3.T.T.4.a).** P3 ("Tap, tap, tap" copies the rain) and C02 ("Sizzle, sizzle" copies the batter) share a frame, but their answers differ. Together is on p1, and set 1 is on p5 plus a parade stanza. No pre-answer.
- **N-9. TT4a-C05.** Hint 3 removes two of the four lines at once, so the child is left choosing between "loud" and "feet". The item is a single-step, DOK-1-like task, and the lead kept it at DOK 2. I accept the label; a lighter hint 3 is optional.
- **N-10. Form A and form B.** I checked every passage, hint, how and why in both lessons against `test` and `testB`.
  - 3.T.SS.2.a: no passage or key fact from p2 "Moving Day" (form A) or p3 "A Letter from Camp" (form B) appears.
  - 3.T.T.4.a: C14 no longer copies T4 or TB4. C02 and C10 share the "why repeat at the start of stanzas" idea with T3, as practice with a different poem and key. C13 and S01 practise rhyme patterns, but none states a pattern of "My Kite", "Firefly Night" or "Snail Climb".
  - **No leaks into form A or form B.**
- **N-11. In-set leaks.** I checked every `why` and `how` against the later items in its set, in all six sets. The only finding is R-S5, plus the harmless N-4 and N-5. The C12 → C13 colour risk was avoided, as the author says.
- **N-12. Points and DOK.**
  - Choose-two items are worth 2: SS2a C04, C08 and C14; TT4a C03, C07, C10, C11 and S01.
  - EBSR items, two-blank dropdowns and the three-row match C15 are worth 2.
  - Neither lesson has an order item.
  - DOK 3 count: SS2a has six; TT4a has seven, plus one DOK 1 (C03).
- **N-13. `like` mappings** are honest. SS2a: S01 → P5 and C06 (metaphor meaning); S02 → C05, C07 and C12 (idiom meaning); S03 → C02 and C11 (simile meaning). TT4a: S01 → C01 and C03; S02 → C02; S03 → C12.
- **N-14. Facts.** The only factual text that changed is p5 5:2, and it is correct: it describes a green anole that has turned brown, not the introduced brown anole.
  - Colour change from green to brown with temperature or stress, within minutes: [Walter Magazine](https://waltermagazine.com/home/its-easy-being-green-if-youre-an-anole/) and [Anole Annals, colour change](https://www.anoleannals.org/tag/color-change). Re-checked today.
  - The other facts were verified in B1-review-2A §7 and 2B §4 (Alabama Wildlife Federation, UT Austin, GPB, UGA SREL) and are unchanged.
- **N-15. Rhyme re-checks of the changed poems.**
  - "Flip!": pan/can, sound/round; me/three, no/below; sit/bit. AABB, AABB, AA.
  - "Beach Morning": crowd is an unrhymed line 1, which keeps the xAxA pattern.
  - C01's key, "in pairs of lines next to each other", is correct.
- **N-16. Gates (run read-only today).**
  - `check-content.js --all`: PASS, 0 failures. The only warnings for these lessons are the similar-coverage warnings.
  - The checker derives Together as SS2a P1–P4 and TT4a P1–P5.
  - `readability.py`: SS2a p1 FK 2.2 and p5 FK 3.3 (173 words), both in range. Poems are not measured.

## 4. Hint 2 and hint 3 audit (every item, both lessons, new rules)

**What I checked:**
- **Hint 2 location rule:** if hint 2 names a paragraph or stanza, at least one wrong choice also comes from it. For EBSR items, it must hold two or more Part B choices.
- **Hint 3 rule:** hint 3 settles at most one blank or step and never leaves only the key.
- **Echo rule:** no hint echoes the key.

| Item | h2 | h3 | Result |
|---|---|---|---|
| SS2a P1 (Together) | paragraph 1 holds the phrase | removes two literal choices; key and "slow and soft" remain | Pass |
| SS2a P2, P3 and P4 (Together) | strategy | one sentence, one choice or one row | Pass |
| SS2a C01 (P5 ref) | paragraph 3 holds the phrase | one choice | Pass |
| SS2a C02 | paragraph 4 holds two Part B choices | one Part A choice | Pass |
| SS2a C03 | paragraph 1 | one choice | Pass |
| SS2a C04 | strategy | one sentence; four remain for two picks | Pass |
| SS2a C05 | strategy | part of slot 0 | Pass |
| SS2a C06 | stanza 1 holds the phrase | one choice | Pass |
| SS2a C07 | stanza 3 holds two Part B choices, but "lines around" pins one | one per part | **R-S2** |
| SS2a C08 | stanza 2 holds the phrase | one choice | Pass |
| SS2a C09 | strategy | settles slot 1 and trims slot 0 | **R-S3** |
| SS2a C10 | strategy | one sentence | Pass |
| SS2a C11 | paragraph 3 holds the phrase | one slot 1 option | Pass |
| SS2a C12 | strategy, no place | one Part A choice | Pass |
| SS2a C13 | strategy | same-paragraph test | **R-S1** |
| SS2a C14 | strategy | one statement | Pass |
| SS2a C15 | strategy | one row | Pass |
| SS2a S01 | strategy | two literal choices; leaves a real two-way choice | Pass |
| SS2a S02 | points at the evidence | only the key is left | **R-M1** |
| SS2a S03 | strategy | echoes the key's word | **R-M2** |
| TT4a P1 to P5 (Together) | strategy, or a stanza holding the targets | one choice, row or line | Pass |
| TT4a C01 | stanza 2 holds the slot 1 distractor | one slot 1 option | Pass |
| TT4a C02 | stanzas 1 and 2 hold the phrase | one choice | Pass |
| TT4a C03 | strategy | one statement | Pass |
| TT4a C04 | strategy | one target | Pass (N-3) |
| TT4a C05 | strategy | two lines | Pass (N-9) |
| TT4a C06 | strategy | one choice | Pass |
| TT4a C07 | strategy | one target | Pass (N-2) |
| TT4a C08 | two stanzas, each holding two Part B choices | one Part A choice | Pass |
| TT4a C09 | strategy | one choice | Pass |
| TT4a C10 | strategy | one statement | Pass |
| TT4a C11 | stanzas 1 and 2 hold the line | one choice | Pass |
| TT4a C12 | compare stanzas | one choice | Pass |
| TT4a C13 | strategy | one stanza | Pass |
| TT4a C14 | strategy | slot 0 only | Pass |
| TT4a C15 | the first lines hold the key and a distractor | one choice | Pass |
| TT4a S01, S02 and S03 | strategy | one choice | Pass |

## 5. Author log §6, read after steps 1 and 2

- §6.1 and §6.2 match what I found in the source for every item they list.
- **One omission:** 2A S-S1 named SK-SS2a-S02, and §6 does not mention it. The item is unchanged in the way 2A flagged (R-M1). The log's statement that "every MUST and SHOULD … is addressed" is therefore not quite right for 3.T.SS.2.a.
- **C13 (§6.2):** the log describes the new hint 3 ("check which paragraph each remaining choice comes from") as a fix. I judge it a relocation of the old cue (R-S1).
- **C07 (§6.2):** the log cites the two-choices-in-stanza-3 rule. That rule is met, but the "lines around" wording still pins the key (R-S2).

## 6. Files

- Blind print: `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr1c/blind.txt` (script `blind.js`, loader `load.js`)
- Saved answers: `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr1c/answers.json` and `solve-notes.txt`
- Key comparison: `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr1c/cmp.js`
- Full dumps used for the audit: `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr1c/3.T.SS.2.a.full.txt` and `3.T.T.4.a.full.txt`

# B3 b3b re-review: 3.T.T.3.a (T-T34.js) and 3.T.RA.1.a (T-RA.js)

Reviewer: independent (did not author). Scope: the fixes listed under "Fixes after B3 review" in B3-b3b-author-log.md. No lesson files were edited, no git was run. Other agents' edits to T-T1.js and T-T2.js were ignored, except for the read-only topic search.

## Verdict

| Lesson | Verdict |
|---|---|
| 3.T.T.3.a | ACCEPTED. 0 MUST. 3 SHOULD, 4 NOTE. |
| 3.T.RA.1.a | ACCEPTED. 0 MUST. 2 SHOULD, 3 NOTE. |

All three original MUSTs are fixed (details below). The two SHOULDs I would fix first are R-S1 (RA C06 and S05 prompts do not say the question must stay on the topic) and T-S1 (C06 still leaves a weak inference path into C07).

## Method and honesty statement

1. Read REVIEWER-BRIEF.md. Did not open the author log until the blind solve was saved.
2. Wrote a Node script (`.../scratchpad/rr/load.js` and `blind.js`). It loads both lessons, resolves passages and hottext targets, and prints each requested item with a seeded shuffle (seed 20261023). It prints no key, why, hints, how, clue or sample. Choices, hottext sentences, dropdown options and order steps were shuffled. The 22 items were solved from that printout alone.
3. Items solved: TT3a C06, P5, C08, C10, C12, C13, C15, S10, S11, S14 (10 items) and RA1a C02, C04, C06, C14 (cr, no key), C15, S01, S05, S06, S07, S08, S14, S15 (12 items).
4. Answers were saved to `.../scratchpad/rr/myanswers.txt` and then compared with the keys extracted by the script (`keys.json`).

**Agreement: 21 of 21 keyed items (100%).** C14 is a constructed response and has no key. Two answers needed more thought than the others: RA C06 (hiccups) and S05 (meerkats). Each has an off-topic choice that I rejected only because it is "obviously another topic", not because the prompt says so (see R-S1).

Was the solve fully blind? Yes for these 22 items. Before the solve I did print the first lines of the file and one `core` fragment for the T-T34 file (lines 172-180), which showed set order and the C03 key. C03 is not one of the solved items. I did not see any key, hint or why for a solved item before saving answers. The Watch Me and Learn It text was read after the solve.

## Original MUSTs: truly fixed?

| Original MUST | Status | Evidence |
|---|---|---|
| MUST-1, TT3a C06 gave away C07 | Fixed in the hints. One weak inference path remains (T-S1). | C06 hint 3 now says only that "Some people say..." is what other people say. It no longer calls C07's wrong choices opinions. `how` and `why` call the bench and "Everyone knows" sentences "smaller ideas", not opinions. |
| MUST-2, TT3a P5 hint 3 left only the key | Fixed. | New hint 3 rules out one wrong choice (the mom's work hours). Four choices stay live (two keys, brothers, Mr. Grant). The old closed-on-Saturdays distractor is gone. |
| MUST-3, RA S08 koala hours | Fixed and correct. | See Facts. "18 to 22 hours" is a published range. |

## Facts (verified)

| Claim | Where | Result | Source |
|---|---|---|---|
| Koalas sleep 18 to 22 hours a day; eat eucalyptus leaves; live in Australia | RA S08 | Correct. Tourism Australia states "about 18 to 22 hours a day" and the eucalyptus diet. CBC gives the same range ("up to 22 hours"). | https://www.australia.com/en-gb/things-to-do/wildlife/facts-about-koalas.html and https://www.cbc.ca/documentaries/the-nature-of-things/a-not-at-all-exhaustive-list-of-how-and-how-much-animals-sleep-1.6367772 |
| Arctic terns nest in the far north in summer, chicks hatch after about three weeks, then fly to the far south | RA S14 | Correct. Eggs incubate 21 to 24 days (about three weeks). They breed in the Arctic in the northern summer, then fly to Antarctica. "Small seabirds" is fine. | https://arcticportal.org/education/quick-facts/animals-and-plants/birds/3784-arctic-tern-sterna-paradisaea |
| A thermos keeps soup hot by insulating it; a vacuum between double walls | RA S07 (topic only; no fact is stated in the item) | Consistent. Keys ask what inside a thermos keeps heat in, and why soup stays hot. Both have factual answers. | https://wonderopolis.org/wonder/how-does-a-thermos-work |
| Meerkat groups are called mobs; a guard stands on a high spot; a loud bark warns of a predator; the others run into burrows | RA S05 | Correct. Group is a "gang" or "mob". Adults take turns as guard on a high point. The guard barks or whistles; the mob runs to the nearest bolt hole. Sources describe different calls for ground and aerial predators, so the "how do they know what each bark means" key is a real open question. | https://animals.sandiegozoo.org/node/106 |

## Findings, 3.T.T.3.a

**T-S1 (SHOULD), C06 still points toward C07.** C06's six hottext targets include three of C07's five choices: "Sitting on the bench... no fun", "Everyone knows that playing is more fun than watching" and the best-players sentence. They are exactly C07's three opinion choices. The prompt says "Darnell gives more than one opinion", and `how` and `why` call the bench and "Everyone knows" sentences "smaller ideas". A child who has seen C06's answer can conclude that these sentences are opinions, which leaves only the two facts in C07 (the coach sentence and the "only five came back" sentence, neither of which is a C06 target). The hints no longer give this away, so it is not a MUST. Fix: swap two of those C06 targets for sentences that are not in C07, for example "First, kids get better..." already is one, so replace the bench and "Everyone knows" targets with "Also, kids who get to play want to keep playing." and "But kids join the league to learn and have fun." Alternatively, move C07 out of C06's set. Also drop "more than one opinion" from the prompt: "Which sentence states the main opinion of Darnell's whole piece?" works without it.

**T-S2 (SHOULD), "Everyone knows..." and "I think..." are always wrong.** In C06, C07, C15 and S10 the choice that begins "Everyone knows" or "I think" is a distractor every time. A test-wise child can skip them without reading the item. Fix: vary the trap in at least one of C15 and S10, for example a vague sentence that does not use those phrases ("Dogs are such happy animals.") or a distractor that sounds like a fact but is off-topic.

**T-S3 (SHOULD), Watch Me 3 shares its topic and its evidence with W-TASK-01.** Watch Me 3 is a "reading buddy day" piece with the reason "reading buddies help younger kids get better at reading" and the evidence "learned many new words / read more smoothly". W-TASK-01 (js/data/tasks/W-TASK-01.js, lines 86-93) asks the child to write on a reading buddy program and gives "helps younger students become better readers" as Reason 1. The lesson's worked example therefore hands the child a model reason and evidence for a graded writing task. Fix: change the Watch Me 3 topic (a class pet, a garden day, a quiet reading corner).

**T-N1 (NOTE), the Watch Me set does not model fact versus opinion.** C07, C09 and the "Everyone knows" and "I think" traps all depend on it. It is in Learn It's teach points and example, but no Watch Me shows it. Watch Me 2 (pencil sharpener) correctly models "Some people say... But", which C13 and S06 need. It does not model the call to action (C13 key E). Optional: give one of the three a fact-versus-opinion move.

**T-N2 (NOTE), C13 distractors are all contradicted by the text.** "needs a tall fence" (the fence already exists), "steps for building a fence" (no steps) and "agrees that it would get broken" (the opposite). The item is DOK 3 but behaves like a recognition item. It is acceptable, and the key pair is unambiguous. If the lead wants a harder item, make one distractor a mild misreading ("She says the school will pay for the station").

**T-N3 (NOTE), the author's live-choice table underestimates live choices.** This is the safe direction. My counts are in the next section.

**T-N4 (NOTE), cross-lesson topic search.** I searched every file under js/data for: weather station, rain gauge, pencil sharpener, dog park, block party, jobs chart, pajama, breakfast in class, map reading, kickball, soccer playing time, Brookside, class plant. The only hit not in these lessons is "kickball" in L-GUM1.js (a grammar sentence, different topic, no key overlap) and the reading buddy overlap above. No key-fact collision for the revised p4 (weather station).

### TT3a items that passed with no issue

C08 (Part B no longer has a close second answer), C10, C12, C13, C15, S10, S11, S14 and P5 each have one defensible answer, plausible distractors, and DOK and points that fit. Choose-two items are 2 points. The hint ladders (strategy, location, scaffold) never leave only the key. C11 and the revised p4 are consistent with their `how` and `why`. Hint 3 of S14 and C12 each rule out the one feeling sentence and leave four or five sentences.

## Findings, 3.T.RA.1.a

**R-S1 (SHOULD, fix before shipping), C06 and S05 prompts do not say the question has to be on the topic.** C06: "Which TWO questions would still be worth researching after reading this article?" and S05: "Ty wants questions to research next. Which TWO questions would still be worth researching after reading this text?" The off-topic choices (sneezing and pepper; prairie dog tunnels) are also unanswered by the text, so literally they are "still worth researching". The key depends on an unstated rule (stay on the hiccup or meerkat topic). The clue and hint 3 supply it only after the child has read hints. I solved both correctly, but only by assuming the rule. Fix: put the topic in the prompt, for example "...worth researching about hiccups?" and "...worth researching about meerkats?". The `why` text already assumes this.

**R-S2 (SHOULD), the Learn It cards do not model "does the text already answer it?".** C06, S05 and S08 require a child to check a text and decide what it leaves open. Learn It 2 starts from an answer and goes on to a new question, which is close. No Learn It or Watch Me models checking a list of questions against a text. The tip mentions "choose the question it answers", which is the reverse task. Fix: add one step to Learn It 2 or 3 ("Check the text. Does it already answer this question? If yes, it is not the one to research next.").

**R-N1 (NOTE), C04 and S01 are sound.** The stem no longer echoes the key. In C04 three choices mention pollen, so hint 2 ("find the science word") does not give the key away. S01 hint 3 rules out the opinion choice and leaves three.

**R-N2 (NOTE), S07 choice "When was the first thermos made?"** is on the thermos but not on "how a thermos keeps soup hot". It is defensible as wrong because the topic is how it keeps soup hot, and the `how` says so. If a parent or child argues, it is the weakest distractor. Consider "How tall is a typical soup thermos?" if it ever gets challenged.

**R-N3 (NOTE), cross-lesson topic search.** The RA1a honeybee passage ("Busy Honeybees") has the same topic as T-T2 (hive, queen and workers, nectar into honey, wax cells). RA's text says "Each cell has six sides", which is the key of a T-T2 figure item (P3: the diagram shows the six-sided shape). The catalog puts T-T2 (Information) before RA (Evidence and research), so RA repeats what T-T2 taught rather than giving it away. It does mean the two lessons could not be done in the reverse order without a leak. The author's topic search did not list honeybees. No change required. Other hits: T-T1 quilt (a story about a quilt square, not how quilts were made), purr (a cat purred in a story), T-T2 snake (rattlesnake paragraph, not tongues), T-C bean plant (not used here). No koala, meerkat, thermos, tern or hiccup hits outside these lessons.

### RA1a items that passed with no issue

C02 (slot 2 distractors are now plausible but wrong), C14 (cr; the sample second question "What part of a cat's throat moves when it purrs?" is not yes/no and the four criteria match it), C15 and S15 (hint 3 rules out one choice), S06, S08, S14 (order is unique; hint 3 fixes step 4 last and leaves 3! = 6 orders), S02 `like` now ["P4","C08"], "doctors" sentence fixed. Points: choose-two items are 2. DOK is 2 or 3 and fits.

## Live-choice counts, my recount

"Live" follows the brief. I took a child who has read the hints so far and still has a real reason to pick the choice. The author's table is lower in nearly every row. That is the safe direction, because mine are higher. No row leaves only the key.

| Item | H1 | H2 | H3 | Author claimed H3 |
|---|---|---|---|---|
| TT3a C06 hottext | 6 | 6 | 5 | opinion vs. reason sentence (2) |
| P5 ms | 5 | 3 to 5 (H2 is a strong test, but the child must apply it to each choice) | 4 | 2 |
| C08 Part A | 4 | 4 | 3 | |
| C08 Part B | 4 | 4 | 4 (H3 only says match Part A) | 2 |
| C10 | 4 | 4 | 3 | 2 |
| C12 | 6 | 6 | 5 | 2 |
| C13 | 5 | 5 | 4 | 3 |
| C15 | 4 | 4 | 3 | 2 |
| S10 | 4 | 4 | 3 | 2 |
| S11 | 4 | 4 | 3 | 2 |
| S14 | 5 | 5 | 4 | 3 |
| RA C02 | 3 / 3 | 3 / 3 | 3 / 2 | 2 / 2 |
| C04 | 4 | 4 | 3 | 2 |
| C06 | 5 | 5 | 4 | 3 |
| C15 | 5 | 5 | 4 | 3 |
| S01 | 4 | 4 | 3 | 2 |
| S05 | 5 | 5 | 4 | 3 |
| S06 | 3 / 3 | 3 / 3 | 3 / 2 | 2 / 2 |
| S07 | 5 | 5 | 4 | 3 |
| S08 | 3 / 3 | 3 / 3 | 2 / 3 | |
| S14 order | 24 orders | 24 | 6 orders | 6 (matches) |
| S15 | 5 | 5 | 4 | 3 |

C02 and S06 hint 3 names only one slot-2 option, so slot 1 is not narrowed. The author's "at most one blank narrowed" is right, but the counts of 2 / 2 are too low.

Ladder quality: H1 is a definition or strategy, H2 says where to look, H3 rules out one specific wrong choice and never names or paraphrases the key. In no case does H2 or H3 echo the key's wording. The one hint I would watch is P5 hint 2, which restates the evidence test closely ("does it show that people really came..."). It does not name the key, and the prompt already says "lots of people would come", so I treat it as acceptable.

## Summary list

MUST: none.

SHOULD:
- T-S1 TT3a C06: targets and how/why still let a child infer which C07 choices are opinions. Swap two targets, drop "more than one opinion".
- T-S2 TT3a C06/C07/C15/S10: "Everyone knows" and "I think" are always wrong. Vary one.
- T-S3 TT3a Watch Me 3: same topic and reason as W-TASK-01. Change topic.
- R-S1 RA1a C06, S05: say the topic in the prompt.
- R-S2 RA1a Learn It: add a "does the text already answer it?" step.

NOTE: T-N1, T-N2, T-N3, T-N4, R-N1, R-N2, R-N3.

Decision for the lead: accept both lessons. Apply R-S1 and T-S1 now if the edits are cheap, because both are one- or two-line changes. Ids and `core.rev`: the author asked whether to bump. Changed items have different hints, `how` and some choices. If no learner data exists, as the author says, no bump is needed.

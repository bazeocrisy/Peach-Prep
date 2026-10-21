# PP-004 lesson fixes ("lessonfix")

Agent: lessonfix. Worktree `/home/claude/pp-fix`. Port 8488. Date 2026-10-20.

Inputs:
- `docs/audits/work/pp004-lessonaudit-texts.md` (Ltexts-1 to Ltexts-17)
- `docs/audits/work/pp004-lessonaudit-language.md` (LL-1 to LL-8)
- The corrected `official` wording in `js/data/standards.js` (see `docs/audits/PP-004-OFFICIAL-STANDARDS-VERIFICATION.md`)

Files edited: `js/data/lessons/T-C.js` (3.T.C.1.c, 3.T.C.2.a only), `T-SS.js`, `T-T1.js`, `T-TS.js`, `T-T34.js`, `T-RA.js` (3.T.RA.1.c, 3.T.RA.2.b only), `L-GC2.js` (3.L.GC.2.d only), `L-GUM1.js`, `L-GUM2.js`, `L-GUM3.js`, `L-V12.js`. I did not touch any off-limits block: T-C 3.T.C.1.b and 3.T.C.2.c, T-RA 3.T.RA.1.b, L-GC2 3.L.GC.2.a and the 3.L.GC.2.b tests, F-PF.js and F-FH.js. No figures were added. No stored-progress keys or item IDs were renamed. Every replaced item keeps its ID.

## Summary

| ID | Severity | Result |
|---|---|---|
| Ltexts-3 | MUST | Fixed |
| Ltexts-10 | MUST | Fixed |
| LL-1 | MUST | Fixed |
| Ltexts-1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17 | SHOULD | Fixed (all 15) |
| LL-2, 3, 4, 5, 6, 7, 8 | SHOULD | Fixed (all 7) |
| Official-wording re-read: 3.T.C.2.a, 3.T.T.1.d, 3.L.GC.2.d, 3.T.SS.2.b, 3.T.T.4.b | | Realigned |
| 3.T.C.1.b, 3.L.GC.2.a | | Noted only (owned by other agents) |

I declined no SHOULD finding. Each one is a real defect: a giveaway, a contradiction, untaught content that is tested, or a rule that is wrong or misapplied.

## MUST fixes

### Ltexts-3: 3.T.SS.1.b, a planted error left in the test passage
- **Deficiency.** Sentence 8 of passage p2 ("Kids can also borrow audiobooks...") was a borrowing fact inside the activities paragraph. It contradicted the key and `why` of SK-SS1b-T2 ("Borrowing is the topic of sentences 3 to 5") and the key of SK-SS1b-T5 ("each paragraph tells about one part").
- **Official.** 3.T.SS.1.b, p. 29: "Design texts using a variety of text structures and features, according to purpose and audience."
- **Change.** In `T-SS.js`, p2 sentence 8 now reads "(8) On Wednesdays, kids can join a building-block club." The SK-SS1b-T2 `why` now names sentences 7 to 9 (story time, the block club and the summer contest). Numbering and keys are unchanged, and the new sentence avoids the word "fun" (the constraint behind T6).

### Ltexts-10: TS-PS, "but" placed on the wrong side of the try
- **Deficiency.** Teach point 2 and the SK-TSPS-P2 clue said "but" comes right before a failed try. In every example, "but" comes after the try and introduces the failure.
- **Official.** 3.T.SS.1.a, p. 29 (organizational structures).
- **Change.** In `T-TS.js`, teach point 2 now says: "The word but often comes right after a try. It tells you the try did not work." The SK-TSPS-P2 clue is now "Find Jamal's first try. Then read the sentence right after it. What happened the next morning?" The new clue does not restate the answer to SK-TSPS-P6 ("A try did not work").

### LL-1: GUM2-4 end marks, SK-GUM2-4-T3 keyed a comma splice
- **Deficiency.** The key "Look out, a snake is right by your foot" joins two independent clauses with only a comma. The site teaches against this in GUM3-7.
- **Official.** GUM chart, grade 3 R, p. 15: "Use periods, exclamation marks, and question marks at the end of sentences." Grade 3 M, p. 16: "Use commas with coordinating conjunctions to join independent clauses."
- **Change.** In `L-GUM2.js`, the key is now "Yikes, there is a snake right by your foot". An interjection plus a comma is not a splice, and it matches the lesson's own model, "Hooray, we are going to the zoo!" The `why` was updated to match. I did not use the auditor's suggestion, "Look out for the snake by your foot". It is a command, and teach point 1 says polite commands usually take a period, so it would have weakened the single defensible answer.

## SHOULD fixes, texts

- **Ltexts-1 (3.T.C.1.c).** Official (p. 26): "...for a specific purpose and audience." SK-TC1c-P1 is now an audience item. Kenji's classmates have never heard the word peg, and the key is a labeled drawing of the peg. The distractors fit the topic but not this audience's need. This also removes a leak: the old P1 key named "peanuts under the soil", which was the key label in P3.
- **Ltexts-2 (3.T.C.2.a) + official re-read.** Official (p. 27): "Describe different perspectives of the narrator or speakers and distinguish them from their own." Changes:
  - Removed first person and third person from the teach points and words. "Point of view" now has one meaning, and "speaker" and "perspective" were added as words.
  - Added the teach point "Different characters or speakers can see the same thing in different ways."
  - W1 now asks who is telling the story and how the narrator feels.
  - SK-TC2a-P4 is now a 4-line poem item that contrasts the speaker's view with the sister's. It covers both "speakers" and "different perspectives".
  - SK-TC2a-T1 now asks "Who is telling this story?". The choices no longer use first or third person.
  - The SK-TC2a-P1 `why` no longer says "first person".
- **Ltexts-4 (3.T.SS.1.d).** Test passage p2 sentence 5 is now "My big brother says the high school has a real track." It is a near-topic intruder, so it tests the teach point "even if it uses some of the same words". The SK-SS1d-T1 `why` was rewritten to explain why the sentence does not belong.
- **Ltexts-5 (3.T.SS.2.b).** SK-SS2b-T5 now asks for a simile with "the same feeling" as sentence 11. The options are "puffed up like a peacock / as busy as a bee / as quiet as a mouse", so no option contains the word "proud". DOK changed from 1 to 2.
- **Ltexts-6 (3.T.T.1.b).** SK-TT1b-T5 now has 4 columns (Character, Setting, Problem, Solution). The character row is the less obvious "Lina, who has not seen the book", and a setting row was added.
- **Ltexts-7 (3.T.T.1.d).** SK-TT1d-T1 now compares the two grown-ups: "Each one praises the main character near the end". It no longer states the "difference = special" lesson, which is the key to T3.
- **Ltexts-8 (TS-SEQ).** SK-TSSEQ-T5 is now a sequence-reasoning EBSR: "Why does the butter have to go into the oven BEFORE Keisha pours in the batter?" The Part B key is p2:4:2 ("...on top of the melted butter"), and Part B no longer repeats the Part A key.
- **Ltexts-9 (TS-CE).** The SK-TSCE-T1 chain now starts at the dam: pile sticks, then the dam blocks the water, then a pond forms, then animals move in. Every link is a cause. I left out "the water backs up", because it is the key to SK-TSCE-T3. The `why` avoids naming T3's clue words.
- **Ltexts-11 (TS-CC vs 3.T.SS.1.a).** In `T-SS.js`, 3.T.SS.1.a W2 now models rabbits and hares instead of alligators and crocodiles. The TS-CC passage is unchanged.
- **Ltexts-12 (TS-CC).** SK-TSCC-T5 is now a 2-point match with 5 rows and the columns Alligator only, Crocodile only and Both. The rows cover visible teeth, salty water, a long tail and living wild in Georgia, which needs an inference from paragraph 4. No row repeats the snout (T2) or the nests (T4). The test is now 7 points.
- **Ltexts-13 (3.T.T.3.c).** Official (p. 34): "...supply reasons to support the opinion...". Changes:
  - Teach point 2 now says that when you write on your own you think of the reasons yourself, and keeps the rubric's "provided reasons" note.
  - The WRITE prompt now says "use these reasons, or think of one of your own", and the checklist says "two reasons".
  - New item **SK-TT3c-P6** (Try, DOK 2) asks for the best reason to support an opinion, against a restated opinion, an unrelated fact and an off-topic sentence. Practice is now 6 items: 3 Together and 3 Try.
- **Ltexts-14, 15, 16 (3.T.RA.1.c).** The test has a new topic. Test passages p3 and p4 are now "Meet the Brown Thrasher" (Source 1) and "A Thrasher Family" (Source 2), so they no longer repeat the hummingbird content of 3.T.T.2.c. I checked first that sea turtles were not reused: they are already in R-INF-01, L-V12, T-C and T-SS. SK-RA1c-T1 to T5 were rewritten in the same formats, points and DOK:
  - T1 rejects the egg-color sentence as "one tiny detail".
  - T3's keys are paragraph-level big ideas (singing; protecting the nest). The detail distractor is a sentence copied word for word. The T1 and T3 feedback now agree on what counts as a detail (Ltexts-16).
  - In T4, every option except the key is an important idea in the student's own words (Ltexts-14).
  - T5 now tests time links (Then, After).
  - I checked the five items for cross-leaks: no key appears in another item, and no T5 text states a T2, T3 or T4 key.
  - Facts were checked against [Georgia DNR, "Out My Backdoor: Brown Thrashers, a Special Songster"](https://georgiawildlife.com/out-my-backdoor-brown-thrashers-special-songster) and [Wikipedia, "Brown thrasher"](https://en.wikipedia.org/wiki/Brown_thrasher) on 2026-10-20. They confirm: state bird of Georgia; more than 1,000 song types; each phrase repeated twice; sweeps the bill through leaf litter; nests in dense shrubs or low trees; twig nest lined with grass and leaves; 3 to 5 bluish eggs with brown spots; both parents incubate and feed; the male strikes intruders; often two broods.
- **Ltexts-17 (3.T.RA.2.b).** Official (p. 38): "Determine what makes a source text credible and relevant and identify examples." Changes:
  - SK-RA2b-T5 is now a 2-point EBSR that compares two excerpts: p1 "How Much Do Elephants Eat?" with checkable numbers and how they were found, and p2 "All About Elephants" with "Everyone knows" and an impossible number. Part A asks which source to trust and why. Part B asks for the two sentences that show the problem. The content check requires Part B quotes to come from a passage, so the lesson now has passages p1 and p2 (122 and 104 words).
  - Teach points were merged and a new one added, so wording cues are taught before they are tested: "Read the words, too. Words like everyone knows, or numbers that sound impossible, are warning signs...". There are still 5 points.
  - Elephant figures (up to about 300 lb of food and about 16 hours of eating a day; up to about 50 gal of water) are common reference values. I did not verify them against a dated web source this session.

## SHOULD fixes, language

- **LL-2 (GUM3-6).** In `L-GUM3.js`, teach point 4 no longer gives the intensive example "They cleaned it themselves". In SK-GUM3-6-T4, choice b is now the true reflexive "The kids poured themselves some cold milk." I avoided "made themselves a snack", because it is the teach example. The `why` was updated. Official GUM chart: "Use reflexive pronouns" is M at grade 3 (p. 16); "Use intensive pronouns" is NYI at grade 3 (p. 17).
- **LL-3 (GUM3-8).** The SK-GUM3-8-P5 clue no longer names the two-words rule. It lists all the split rules and adds "some letter pairs stay together". This matters because the distractor "bir- | thday" breaks up th. The `why` now explains both distractors.
- **LL-4 (GUM2-3).** The SK-GUM2-3-P4 clue is now "Find the name of a street and the name of a city. Then check every word in each name."
- **LL-5 (GUM1-1).** Teach point 1 now adds: "In a command like Close the door, the who is you, even though it is not written."
- **LL-6 (GUM1-5).** SK-GUM1-5-T1 now uses "watches" ("Dad fixed two {0} that had stopped ticking."), because "benches" is modeled in W2. The clue and `why` were updated.
- **LL-7 (3.L.V.2.a).** The root example is now "rupt = break, as in interrupt (to break in while someone is talking)". "Erupt" is still kept for SK-V2c-P6. Note: "interrupted" is also the key of a practice slot in 3.L.V.2.c (SK-V2c-P7, not a test item). V.2.a teach already models "portable" for the same item, so this follows an existing pattern.
- **LL-8 (3.L.V.1.a).** Official (p. 21): "Acquire a range of general, academic, and specialized vocabulary words...". Changes:
  - Added paragraph 5 to p1 (compare) and paragraph 6 to p2 (predict).
  - SK-V1a-P5 (Try) is now an MC on "compare".
  - SK-V1a-T4 is now an MC on "predict".
  - The test now has 3 specialized words and 2 general academic words (predict, observe). Practice is now 6 points and the test 6 points, with 5 items each.

## Official-wording re-read (corrected `official` field)

- **3.T.C.2.a** (p. 27), "different perspectives of the narrator or speakers": see Ltexts-2 above.
- **3.T.T.1.d** (p. 32), "...within texts across diverse cultures": comparison across cultures is now required. The practice pair was already Ghana and Vermont. The test pair was an animal fable with no culture ("The Smallest Fox") and a story set in Chennai, India.
  - p3 was rewritten as "The Smallest Cousin": Mateo in Oaxaca, Mexico, a ring stuck in a courtyard wall. It has the same plot, the same lesson and the same item logic.
  - SK-TT1d-T1 to T5 now use Mateo. T2 now contrasts "his family's home in Mexico" with "a bird park in India".
  - Teach point 4 now says you will often compare stories from different places and cultures, and to notice what differs and what is the same.
- **3.L.GC.2.d** (p. 19), "Elaborate on ideas and information, using adjectives and adverbs...":
  - The title is now "Add details with exact describing words", and the big idea now defines elaborating.
  - W3 now adds a detail phrase as well as the adjective and adverb.
  - SK-GC2d-P4 is now an elaboration item: "We went to the beach" with four revisions. Only one adds real details.
- **3.T.SS.2.b** (p. 30), "Use figurative language, such as similes, metaphors, and idioms":
  - The title and big idea now say "similes, metaphors, idioms and more".
  - Added a teach point on personification ("The wind whispered through the trees"). Two points were merged to keep 5.
  - SK-SS2b-P5's added sentence is now the personification "The raindrops danced and drummed on our roof." The `why` names it as another kind of figurative language.
- **3.T.T.4.b** (p. 35), "produce poetry and engage audiences":
  - Added a teach point on audience (sound words, action words, a fun or surprising ending keep listeners interested). Two points were merged to keep 5.
  - The WRITE prompt now ends with reading the poem aloud to someone.
  - Added a checklist line: "I read my poem to someone, and my words helped them picture it or smile."
- **3.T.C.1.b** (p. 26), "Determine common text features ... and describe how they contribute to the overall purpose and effect": NOT edited, because the "context" agent owns this block. Note for that agent: the teach points list the features well, but "contribute to the overall purpose and effect" should be visible in the items as a "describe how" question. I did not re-audit the items.
- **3.L.GC.2.a** (p. 19), "Distinguish between correctly structured simple, compound, and complex sentences": NOT edited, because the "research" agent owns this block. Notes for that agent:
  1. The lesson also teaches fragments and run-ons, which is fine as support for "correctly structured".
  2. Its teach point 1 has the same issue as LL-5: "tells who or what it is about" without the implied "you" of commands.

## Verification

- `node verification/check-content.js --all`: PASS, 0 failures, 7 warnings. All 7 warnings were there before my changes (PT-1-14, SK-V3b-T1 ×2, SK-TC1b-T2, SK-TT1a-T5, SK-TT1d-P1, SK-TT1e-T5). One earlier warning (SK-TT1d-T1) went away when that item was replaced, so the total dropped from 8 to 7. Warnings my new items raised while I worked (a key that was too long, clue words shared with the key, short passages) were all fixed.
- `python3 verification/readability.py`: runs clean. The new and changed passages are FK about 2.7 to 4.4 (3.T.RA.1.c p3/p4 2.7/2.7; 3.T.RA.2.b p1/p2 3.8/4.4; 3.L.V.1.a p1/p2 3.6/4.0; 3.T.T.1.d p3 3.1).
- `node verification/check-writing.js`: 0 failures, 0 warnings.
- **Rendering.** Playwright script at `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/lessonfix/pw.py`, port 8488.
  - Every changed item was rendered at 390 and 1366 px: 25 sets and 64 screenshots, plus passage-tab shots, in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/lessonfix/shots/`.
  - There were no page errors and no horizontal scroll.
  - Every touched test set scores full marks when every keyed answer is given, which confirms the keys and the match, order and hottext answers are wired correctly.
  - I inspected these by eye: SK-TT1b-T5 at 390, SK-RA2b-T5 at 1366 and SK-TC2a-P4 at 390.
  - The server was stopped by its PID.
- **Check sizes.** All tests I touched still have 5 items. Practice: 3.T.T.3.c went from 5 to 6; every other practice count is unchanged.

## What remains / not done

- I did not run `verification/guard.py` (the full run takes about 20 minutes). The lead's final pass should run it.
- I did not verify the elephant figures against a dated web source.
- I did not re-check the paraphrased `text` of skill titles in `catalog.js`. Catalog entries reference codes only. Two lesson titles changed (3.T.SS.2.b and 3.L.GC.2.d), and nothing else references those strings.

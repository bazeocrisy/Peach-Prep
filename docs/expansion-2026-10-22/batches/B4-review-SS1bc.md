# B4 independent review: 3.T.SS.1.b (plan a piece for its reader) and 3.T.SS.1.c (linking words and transitions)

**Reviewer:** independent content reviewer. I did not author these lessons. I edited no lesson and ran no git. I wrote only this file and scratch files under `scratchpad/ss1bc/`.
**Scope:** the `3.T.SS.1.b` and `3.T.SS.1.c` blocks of `js/data/lessons/T-SS.js`. For each lesson that is 15 core items (refs resolved), similar S01-S15, Together items and their addons, the passages, Watch Me (`learn`), the teach points, and the lesson's own `test` items for leakage.

## Verdicts

| Lesson | Verdict | Blocking findings |
|---|---|---|
| 3.T.SS.1.b | **CHANGES REQUIRED** | M1 (cup phone duplicate), M2 (caption keys are word matches), M3 (similar bank re-skins the core) |
| 3.T.SS.1.c | **CHANGES REQUIRED** | M3 (similar bank re-skins the core, all 15 keys repeat), M4 (Together P3 word match), M5 (S04 paraphrases an L-GUM3 Watch Me example) |

No wrong or ambiguous key turned up in either lesson. Hints, Show Me How, the browser pass and facts are sound. The blockers are duplicates, word-match keys and near-copy similar items.

| Id | Sev | Lesson | One line |
|---|---|---|---|
| M1 | MUST | 1.b | p3 "Make a Can Telephone", C02, C03, C04 and C09 duplicate T-T2 "How to Make a Cup Phone", and C03 shares its key fact and wording |
| M2 | MUST | 1.b | C08 and S08: the key caption restates the photo sentence (8 of 11 content words; no distractor shares more than 2) |
| M3 | MUST | both | Similar items are re-skins of their core twin: most exceed the 0.21 ceiling, share options, and in 1.c every one of the 15 has the twin's key |
| M4 | MUST | 1.c | Together P3: prompt says "gives an example", only the key starts "For example," |
| M5 | MUST | 1.c | S04 paraphrases the L-GUM3 Watch Me example "Malik studied his spelling words every night. He got every word right on the test." |

There are 7 SHOULD and 8 NOTE findings.

---

## 1. Blind solve

**Method.** `scratchpad/ss1bc/blind.js` loads `T-SS.js` in a Node `vm` sandbox with a mock `PP.addLesson`. It resolves every `{ref}` and prints passages, the 15 core items, S01-S15 and the Together items. Choices, options, rows, steps and slot options are shuffled with a seeded LCG. It strips `correct`, `answer`, `answers`, `why`, `hints`, `how`, `clue`, `misconception`, `key`, `sample`, `criteria` and `like`, recursively, so nested slot and row answers go too. The files are `3_T_SS_1_b.stripped.json` and `3_T_SS_1_c.stripped.json`. I grepped both for those words before reading. There were no hits. I wrote my answers to `ans_b.json` and `ans_c.json` before I extracted any key (`keyed.js`). I read the author log only after that.

**Result.**
- 3.T.SS.1.b: **35 of 35 entries agree** (15 core, 15 similar, 5 Together; P5 appears twice, as core C01 and as Together, so 34 unique items).
- 3.T.SS.1.c: **36 of 36 agree** (15 core, 15 similar, 6 Together; P4 and P6 are core refs, so 34 unique items).
- My checker flagged seven items as mismatches (1.b C11, C13, S11, S13; 1.c C12, S06, S12). All seven were artefacts of my string matching, not disagreements. I confirmed each by hand (hottext target ids `p5:2:3` and `p8:2:3` equal the key; the match rows and the pick-two orderings are the same).

**How blind it was, honestly.**
- 3.T.SS.1.c was fully blind.
- **3.T.SS.1.b was not fully blind for seven items: S01, S02, S04, S05, S06, S08 and P1.** My schema probe (`shape.js`) printed one sample item of each type with every string cut to 25 characters, and it did not strip `correct`, `answer` or `steps`. It showed the first correct choice flag for S02 and S04, the answer indexes for S01, S06 and S08, the step order for S05 and the start of the P1 addon hints and how. I then solved those seven from the stripped print, and I would have chosen the same answers, but they do not count as blind. The other 28 entries in 1.b were blind.
- Items that gave me pause while solving, all of which turned out to be fine: 1.b S03 (after sentence 4 or 5), 1.b C09 (which two of five), 1.c C07 (both blanks are result words).

---

## 2. Findings

### MUST

**M1 (1.b). The can telephone is the T-T2 cup phone.**
- Evidence: `T-T2.js:1389` (SK-TT2b-C04) is "How to Make a Cup Phone": "Poke a small hole in the bottom of two paper cups", "Push one end of a long string through each hole", "Pull the string tight", "Tie a big knot in each end of the string, inside the cups". Its key is that the knots must be tied before the string is pulled tight, or the string slips out.
- 1.b p3 is the same craft in the same order (hole in the bottom of each can, string through each hole, walk apart until tight). C03's step is "Tie a big knot in the end of the string inside each can", and its how and why say the knot must hold "before the friends pull the string tight, or the string would slip out". That is the same key fact, and the six-word n-gram scan finds "tie a big knot in" and "poke a small hole in" against T-T2.
- The author log (section 6, finding 1) already flagged this and left the choice open. Confirmed: this is a topic and key-fact duplicate (plan §4.3 rule 4: another lesson's practice or check passage).
- Affected: p3 and the core items that use it (C02, C03, C09; C04 and C09 also name Dara's can phone). The S-twins use the oatmeal draft, so they are not affected.
- Fix: replace the craft in p3 with one not in `js/data` (a grep of `js/data` for the new craft should come back empty). Rewrite C02, C03, C04 and C09 on the new text. Keep the "step needs the one before it" logic with a new physical order. Changing the T-T2 stem is the other option, but that is another batch's file.

**M2 (1.b). C08 and S08: the caption key is a word match.**
- C08: the photo sentence says "a brown dog in a red bandana jumping to catch a ball" at "last year's pet show", and the key is "A brown dog jumps to catch a ball at last year's Cherry Lane Pet Show". My overlap script (`wm.js`, content words of each option that appear in the prompt plus stem plus passage) gives 8, 0, 2, 2. S08 is 7, 3, 0, 0. A solver who matches words and never reads for meaning gets both right.
- The H3 for C08 ("the date of the show is useful on a flyer, but it does not tell what this photo shows") then removes the one distractor that shares some words, which leaves no live reason to think.
- Fix: describe the photo in words that the caption does not repeat (what is happening and where), and give at least two distractors that share the photo's nouns but say something else (for example "Dogs like to chase balls at the park" or "A brown dog needs a bath every month"). The caption job is to say what this photo shows, so the choices need to compete on that, not on vocabulary.
- Related: see S1 for the other items where the key is the highest-overlap option.

**M3 (both). The similar bank is a re-skin of the core, over the ceiling and with repeated keys.**
- Measured with `sim.js`: word-set Jaccard on whole item text (prompt, stem, text, options, slot options, steps, rows, cols; passage text left out), paired by `like`. Accepted ceiling is 0.21 with at most one shared option.

| 1.b pair | J | Exact shared options | 1.c pair | J | Exact shared options |
|---|---|---|---|---|---|
| S01 / P5 | 0.54 | 3 (the columns) | S01 / P6 | 0.60 | 5 (all) |
| S02 / C02 | 0.26 | 0 | S02 / P4 | 0.34 | 3 |
| S03 / C03 | 0.25 | 0 | S03 / C03 | 0.25 | 2 |
| S04 / C04 | 0.36 | 0 | S04 / C04 | 0.29 | 0 |
| S05 / C05 | 0.22 | 0 | S05 / C05 | 0.60 | 0 |
| S06 / C06 | 0.30 | 0 | S06 / C06 | 0.34 | 0 |
| S07 / C07 | 0.21 | 0 | S07 / C07 | 0.49 | 6 |
| S08 / C08 | 0.38 | 0 | S08 / C08 | 0.68 | 5 |
| S09 / C09 | 0.68 | 0 (3 near-identical) | S09 / C09 | 0.25 | 0 |
| S10 / C10 | 0.52 | 2 | S10 / C10 | 0.38 | 0 |
| S11 / C11 | 0.83 (prompt only) | 0 | S11 / C11 | 0.44 | 4 |
| S12 / C12 | 0.60 | 0 (3 of 4 re-skinned) | S12 / C12 | 0.30 | 0 |
| S13 / C13 | 0.66 | 3 (the columns) | S13 / C13 | 0.57 | 0 |
| S14 / C14 | 0.46 | 0 | S14 / C14 | 0.29 | 6 |
| S15 / C15 | 0.31 | 0 | S15 / C15 | 0.39 | 6 |

- Only 1.b S07 meets the ceiling. In 1.b the closed choice sets (three plans, three features) force shared columns, but the rows and the distractors are also re-skinned. S09 keeps C09's five statements nearly word for word with the names swapped (Dara to Zane, Isaiah to Nora). S12 keeps C12's four reasons ("steps", "what caused", "a picture to go with every sentence"). S11 is the same task on the same sentence slot (`p8:2:3` against `p5:2:3`).
- **In 1.c the key is a word from a closed set of nine, and every one of the 15 similar items has exactly the same key as its twin:** S01 because and since; S02 Also; S03 However; S04 As a result; S05 "names some"; S06 since; S07 Therefore and As a result; S08 Also and In addition; S09 the However pair about a surprise; S10 the sample of the group; S11 Therefore; S12 As a result and Therefore; S13 the surprise reason; S14 In addition and Because; S15 As a result and Although. The option lists are identical in S01, S07, S08, S11, S14 and S15. A child who used Show Me How on C07 and then takes S07 is given the same two words, so it is not a fresh application.
- 1.b repeats keys in the same way where the key is positional: S03 and C03 are both "After sentence 4", S11 and C11 are both the third sentence of paragraph two, and S01 and P5 have the same row-to-column mapping.
- Fix: write each similar item on a different relation or a different slot of the same skill. For 1.c, vary the key set (for example S07 contrast then addition, S08 reason pair, S14 contrast then result, S15 example then reason) and vary the distractors so no option list repeats. For 1.b, rebuild S09, S10, S11, S12 and S13 with new statements, new sentence positions and new distractor frames, and give S03 a different answer position.

**M4 (1.c). Together P3 is a word match.**
- The prompt is "Sofia wants to add a sentence after sentence 5 that gives an example. Which sentence is best?" The key is the only choice that begins "For example,". The other three begin Although, Since and Also. A child can pick it without reading sentence 5.
- Fix: drop "that gives an example" from the prompt (ask "that goes best after sentence 5") and let the child decide what the connection is. Give two distractors that also start "For example," but give a non-example (for example "For example, I like to ride on sunny days.").

**M5 (1.c). S04 paraphrases an L-GUM3 Watch Me example.**
- `L-GUM3.js:609` (a Watch Me example in another lesson): "Malik studied his spelling words every night. He got every word right on the test." S04 is "Ravi practiced his spelling words every night. He made flash cards... He got every word right on Friday's test", with the key As a result. Same causal pair, same key fact (practice, then every word right). Plan §4.3 rule 4 forbids paraphrasing a Watch Me example.
- Fix: use a different cause and effect (not studying, not a test score).

### SHOULD

**S1 (1.b). The key is the highest-overlap option in most mc and hottext items.** Of 18 such items in 1.b, the key is the strict maximum on 13 (C03, C07, C08, C12, C15, S02, S07, S08, S12, P1, P3, P4, and S14 by a tie). In 1.c the same test finds none. C07 and S07 (closings) are the clearest after M2: the key repeats the event name and "neighbors" (7 of 11 content words against 1, 1, 3). A reader who knows nothing about closings still gets about 70 percent. Fix: for the closings and openings, add one distractor that repeats the piece's nouns but adds a new fact or step (for example "The Cherry Lane Pet Show will also have a bake sale next month.").

**S2 (1.b). The three-row plan matches carry the cue words.** P5 and S01 rows read "how to fold...", "alike and different" and "why a pond dried up", and the columns say Steps in order, Compare and Cause and effect. C13 and S13 use "only one part of a long page" and "reads for only a second". These are legitimate cues, but matching the cue word is the whole task, and P5 is the first core item. At least two rows per match should describe the job without the cue phrase ("telling readers what to do first, second and last" is fine; "telling how frogs and toads are alike and different" is the literal column label).

**S3 (1.b). Watch Me and the teach points model three of about nine tasks.** `learn` shows ordering how-to steps, choosing a heading and choosing a numbered list. The fifteen also need an opening, a closing (C02, C07, C15, three more in S), a caption (C08), a place for a new step (C03), picking a plan by job (C01, C12, C14), a misplaced sentence (C11) and comparing two drafts (C09). The teach points say "end with a closing that wraps it up" but never say what an opening or a caption does. Fix: replace one Watch Me with a closing or opening example, and add one teach point for the caption job.

**S4 (1.c). Hint 3 settles a blank in C14, C15, S14 and S15.** The plan allows completing one of two slots, and the author flagged it (log section 6, finding 4). It is the relation itself that is stated: C14 H3 "Practice being so much fun is the reason Dev cannot wait", C15 H3 "some seeds cannot grow, but many do". With three options in that blank the statement leaves only the key there. Allowed, but a weaker H3 ("Ask what the second idea does to the first") would keep the child's thinking in the item.

**S5 (1.c). Several prompts name the relation, which reduces the item to vocabulary mapping.** C03 ("shows a difference"), C04 ("causes"), C06 ("the reason"), C08 ("add another idea"), C11 ("caused") and their twins tell the child the relation and ask for the word. That is a fair test of knowing the word, but with M3's repeated keys the whole of set 1 and most of set 2 can be passed from a word list. Keep two or three, and make the others infer the relation from the sentences (as C01, C07, C09 and C12 do).

**S6 (1.c). S09 and the sandcastle.** `T-T1.js:3271`: "Kai built a sandcastle on a sunny beach in Hawaii. A wave knocked it down." S09's key pair "We built a sandcastle. However, a wave knocked it down." is the same event. Different skill, but it is the same key fact. Change the scene (a kite, a snowman or a block tower).

**S7 (1.b). C09 and S09 are the hardest items to read, and they sit at FK 6.0 and above.** Passages are all FK 1.4 to 4.4 (readability script; mine matches: highest p1 4.4, p7 4.2). The item text is higher: C09 6.0, C03 5.5, C14 5.3, P4 5.2. C09's options are 20 to 26 words with a "but" clause each. Fix: shorten the C09 statements to about 15 words.

### NOTE

- **N1 (hint ladders).** I read H1, H2, H3, the clue, `how` and `why` for every core, similar and addon item next to the key (the full print is `full_b.txt` and `full_c.txt`). The keyed text matches `why` and `how` everywhere. H1 and H2 do not name the key, and H3 never leaves only the key. Two minor points: 1.b C05 H3 gives step 1 (cut the strips) and S05 H3 gives the last step; 1.b P5, S01, C13 and S13 H3 settle one row each. The plan allows both.
- **N2 (live choices, my recount against the author's table).** I counted what is still live after hints 1 to 3 plus the clue, for every core item. I agree with the author's counts for 14 of the 15 items in 1.b and all 15 in 1.c. The difference is 1.b C06: the author says 2+3, but H3 ("One sentence about tricks is not enough to name a section") rules out "Pets That Do Tricks", which is a distractor in both blanks, so I count 2+2. My counts for 1.b are C01 2 of 6, C02 3, C03 3, C04 6 pairs, C05 24 orders, C06 2+2, C07 3, C08 3, C09 6 pairs, C10 2+3, C11 6, C12 3, C13 2 of 6, C14 3, C15 3. For 1.c: C01 6 pairs, C02 2, C03 2, C04 3, C05 3, C06 3, C07 3+3, C08 6 pairs, C09 3, C10 3, C11 3, C12 6 pairs, C13 3, C14 3+1, C15 3+1. The only case where a lone blank is reduced to one option is S4.
- **N3 (browser).** `br.py` ran at 390x844 for both lessons through all 15 core items. Per item: a wrong answer then Check My Answer ("Not quite"), all three hints (the button is disabled afterward), Show Me How, the correct answer then Check, Try a Similar Question (it opened the right twin each time: S01 to S15 in order), solve the similar item, Next, and the set transitions (set 2 and set 3 buttons). The result is no page errors, no horizontal scroll at any step, and no failed requests except the Google Fonts stylesheet (the sandbox is offline). Screenshots checked: `shot_3_T_SS_1_b_11.png` (hottext C11). One usability point: the hottext list shows the sentences numbered but not the paragraph breaks, and the paragraph structure is the whole of the task, so the child has to switch to "Read the passage". Consider showing a break marker in the option list.
- **N4 (official wording).** 1.b `official`: "Design texts using a variety of text structures and features, according to purpose and audience." Structures (steps, compare, cause, sections), features (numbered list, heading, caption, photo, title), purpose and audience (C10, C12, C13, C14) and opening and closing are all covered. 1.c `official`: "Use conjunctions and transition words or phrases, such as although and since, to add cohesion and link ideas and information." Conjunctions (because, since, although) are in C01, C06, C14 and C15. The four transitions the gap listed are all covered in core: However (C03, C09, C13), Therefore (C07, C11, C12), In addition (C08, C14) and As a result (C04, C07, C12, C15). Learn It models As a result, However and In addition only as a fourth step, and Therefore only in the teach points; I would add one example for Therefore.
- **N5 (points and DOK).** Two-blank dropdowns, choose-two, order and match items are 2 points, single items 1. DOK 1 is only 1.c P4. DOK 3 is four items in each lesson. Items are grade-3 suitable. The paper-chain and wash-a-cup how-tos are on the easy side, but each has a real order problem.
- **N6 (other topic echoes, lower risk).** 1.c C15 (dandelion seeds carried by wind) overlaps the `F-FH.js` dandelion passage; S15 (cactus stores water in its thick stem) overlaps `T-C.js:1041`; 1.b P5/S01's "frogs and toads alike and different" is the topic of the `T-TS.js` passage "Frogs and Toads", and 1.b p8 (paper books against a tablet) echoes `T-TS.js:3903`; 1.c S09 and C08 use a climbing wall, as `T-T1.js:5062` and `T-T34.js:649` do. In each case the skill is different and the key is not the shared fact, so I do not block, but a swap would be cheap.
- **N7 (leakage against the lesson's own tests).** The lesson's `test` items use p2 only (Priya's library for 1.b, Daniel's bees for 1.c), and no core, similar or Together item uses p2. The five-word scan against the tests found only shared directions. Axolotl, snow leopard, pillow fort, Scout and flash cards occur nowhere else in `js/data`.
- **N8 (same-name reuse).** Ms. Reyes asks both Leo (C10) and Ana (S10). The log notes "Mina" and "Lena" in several lessons. Harmless, but the C10/S10 pair also repeats the frame "Ms. Reyes asks ___ to make a page that ...".

---

## 3. Per-item key check (every core, similar and addon item)

Each key was compared with `why`, `how` and the three hints. All keys are single and defensible. Notes on the ones that needed a second look:

- **1.b C03 and S03.** After sentence 4 is unique: the string is not in a can until sentence 4, and the knot must be done before the string is pulled tight (sentence 5). The distractor "after sentence 5" fails because a knot in a taut string cannot be tied inside the can. S03: after 4 is right (cook, then cool, then pour and eat). The distractor "after sentence 5, because the oatmeal can cool down while the reader eats it" is wrong because sentence 5 itself is the pour-and-eat step.
- **1.b C09 and S09.** The two true statements are the plan statement and the reader statement. "Uses first, next and then" is false the other way round (Dara's draft has them). No statement is true for both drafts.
- **1.b C11 and S11.** Only sentence 5 (bus pick-up, inside the walking paragraph) and sentence 5 of p8 (a tablet holds hundreds of books, inside the paper-books paragraph) fit. Sentence 1 is not a target, so there are seven live targets.
- **1.b C13 and S13.** The three readers map one to one onto the three features, using each feature once.
- **1.c P6, C01 and S01.** Because and since are the only two reason words. Although would make the cold a surprise, and also and for example do not fit the grammar.
- **1.c C07 and S07.** First blank Therefore (the closed street caused the bus change). Second blank As a result (the longer road caused the lateness). Each blank has only one result word offered, so there is no ambiguity.
- **1.c C08 and S08.** Also and In addition are the only two adders. For example would need the second sentence to be a kind of the first.
- **1.c C12 and S12.** As a result and Therefore do the same job. The other three each have a different job, so exactly two match.
- **1.c P5 (Together).** Each word fits one row once, and "Although it was late" is the only word that makes the Dad sentence work.

---

## 4. Facts verified

All the scenes are made-up everyday events, so the factual claims are few.
- A can or cup telephone works by vibrations along a tight string; slack string loses the vibrations; the string is knotted inside the cup. https://www.mombrite.com/string-telephone/ (this also supports M1: the knot-before-tension step is the standard direction).
- Stovetop oatmeal: 1 cup water to 1/2 cup rolled oats, about five minutes, stirring now and then. This matches p6 and S03. https://feelgoodfoodie.net/recipe/how-to-make-oatmeal/
- Pinecone feeder: string on, peanut butter spread, birdseed pressed on, then hung near a window; cardinals take seed from such feeders. This supports P1's key (peanut butter before seed). https://pallensmith.com/2015/12/16/pinecone-birdfeeder/
- Bees carry pollen between flowers and help fruit trees such as apple and peach set fruit; honey bees sting mostly when threatened (p2 of 1.c). Search results: https://www.pollinator.org/pollinator.org/assets/generalFiles/HoneyBee8.5x11.pdf and https://extension.usu.edu/utah4h/research/creating-sustainable-school-and-home-gardens-misconceptions-about-bees.pdf. I did not open these in full, so treat this as supported, not exhaustively checked.
- Common-knowledge claims (cacti store water in thick stems, light dandelion seeds travel on the wind, puddles dry in the sun, hula hoop and jump rope directions, sunscreen and hats) I checked by reasoning and by the repo's own passages; nothing is wrong.
- No claim in either lesson is false.

## 5. Gates and notes for the lead

- Server: I used `node verification/serve.js . 8871` and stopped it afterward.
- Other batches were editing other lessons concurrently; I saw no failure that touches these two.
- Scratch files: `scratchpad/ss1bc/` (`blind.js`, `keyed.js`, `full.js`, `sim.js`, `wm.js`, `ngram.js`, `fk.js`, `br.py`, `ans_b.json`, `ans_c.json`).


---

# Second review (2026-10-23)

**Reviewer:** second independent reviewer. I did not author these lessons and I did not write the first review. I edited no lesson and ran no git. I wrote only this section and scratch files under `scratchpad/ss2/`. Scope: every core item (refs resolved), every Together item and S01-S15 in 3.T.SS.1.b and 3.T.SS.1.c, then a check of the first review's M1-M5 against the author's "Fixes after review (round 2)".

## Verdicts

| Lesson | Verdict | Blocking findings |
|---|---|---|
| 3.T.SS.1.b | **CHANGES REQUIRED** | R2-M1 (S09 distractor is literally true on screen) |
| 3.T.SS.1.c | **CHANGES REQUIRED** | R2-M2 (core P6 repeats Watch Me example 1), R2-M3 (S08 is a re-skin of P6) |

All five first-review MUSTs are fixed (section 2). The round-2 rebuild introduced the three blockers above. They are small and local. No key is wrong in either lesson.

| Id | Sev | Lesson | One line |
|---|---|---|---|
| R2-M1 | MUST | 1.b | S09 option C "Nora's page puts a number in front of every sentence" is true as displayed, so three statements are true |
| R2-M2 | MUST | 1.c | Core P6 ("We wore our warm coats ____ it was cold outside") is Watch Me 1 ("Mia stayed inside ____ it was raining hard") with the same option set |
| R2-M3 | MUST | 1.c | S08 repeats P6: same pick-two key (because, since), same format, four of five options identical |
| R2-S1 | SHOULD | 1.b | Key is the longest option in 13 of 22 single-key and pick-two items |
| R2-S2 | SHOULD | 1.b | "Next, ..." is the step-adding distractor in four of the five closing items, and three hint 3s name it |
| R2-S3 | SHOULD | 1.b | S15 key echoes the Watch Me 3 answer ("Now you have a ... to share") |
| R2-S4 | SHOULD | 1.b | Hint 2 narrows to the key in Together P1 and echoes it in P3 |
| R2-S5 | SHOULD | 1.b | S01 and S13 are the same match as P5 and C13 with the topics rotated |
| R2-S6 | SHOULD | 1.b | Raw multiset Jaccard is over 0.21 for S02, S03, S09 and S15 |
| R2-S7 | SHOULD | 1.b | Topic echoes: frogs and toads (P5), paper boat (P5) |
| R2-S8 | SHOULD | 1.c | Topic echo: dandelion seeds carried by wind (C15), same fact as the F-FH passage |
| R2-S9 | SHOULD | 1.c | C14 blank 1: "For example" is defensible beside "In addition" |
| R2-S10 | SHOULD | 1.c | Hint 2 states the key relation in S02, S13; hint 3 does it for blank 2 of C14 and S14 |
| R2-S11 | SHOULD | 1.c | S01 repeats C07's key words and four of its options |
| R2-S12 | SHOULD | 1.b | C08 is the only option that shares no word with the photo sentence (inverted cue) |
| R2-S13 | SHOULD | 1.c | S08 hint 3 "cheer-stopper" is not grade-3 language |

There are 3 MUST, 13 SHOULD and 8 NOTE findings.

---

## 1. Blind solve

**Method.**
- `scratchpad/ss2/blind.js` loads `T-SS.js` in a Node `vm` sandbox with a stub `PP.addLesson`. It resolves every `{ref}` and prints, per lesson, the 14 or 13 non-ref core items, the refs, the Together items and S01-S15. It prints passages (with sentence numbers) and shuffles choices, options, slot options, steps, columns and hottext targets with a seeded LCG (seed 20261023 plus a per-lesson offset). Hottext targets (`p5:2:3` and so on) are resolved to the sentence text.
- It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `like` or `std`, and the lesson has no figures, so there is no alt text. `grep` of the output for those words found only ordinary prose ("answer" and "how" inside prompts).
- Output: `scratchpad/ss2/blind.txt` (579 lines). My answers: `scratchpad/ss2/myans.json`, saved before `cmp.js` pulled any key. I did not open the author log or the first review until after that.

**Result: 68 of 68 agree (100%).**
- 1.b: 34 unique items (14 non-ref core, P1-P5, S01-S15). 1.c: 34 unique items (13 non-ref core, P1-P6, S01-S15).
- `cmp.js` printed two mismatches (1.b C11 and S11). Both are my checker comparing a hottext target string with an index. The sentences I picked are the keyed ones: 1.b C11 sentence (5) is `p5:2:3`, and S11 sentence (7) is `p8:3:2`.

**How blind it was, honestly.** It was not fully blind for nine items. To learn the item shapes I printed one sample of each type from the loaded object without stripping it. That showed the keys or step orders of 1.b S01, S05, S06, S08 and P5, and 1.c P1, S09, P5 and S01. I solved all nine again from the stripped print, but they do not count as blind. **The clean blind sample is 59 of 59.** I would have chosen the same answers for the nine.

**Close calls while solving** (each is still defensible):
- 1.b C03: after sentence 5 is tempting, but a coil cannot be pressed flat once rice is in. After sentence 4 is the only fit.
- 1.b C09 and S09: which two of five. S09 option C is the problem in R2-M1.
- 1.c C14 blank 1: In addition against For example (R2-S9).
- 1.c S12: "work alike" has only one pair, However and Although (two contrast words, one transition and one conjunction).

## 2. First review MUST-by-MUST

| MUST | Status | Evidence |
|---|---|---|
| M1 cup telephone | **Fixed** | p3 is now "Make a Rain Stick". C02, C03, C04 and C09 are rewritten. C03's key is a different fact (the coil goes in before the rice). A grep of all `js/data` (`rain stick`, `foil`, `coil`, `telephone`, `tin can`, `paper cups`, `uncooked rice` and variants) finds only T-T2:1389 "How to Make a Cup Phone", which is untouched and shares no text. Fact check: the order tape one end, foil spirals in, rice, cap the other end matches https://www.giftofcuriosity.com/diy-rain-stick-craft/ |
| M2 caption word match | **Fixed** (new SHOULD R2-S12) | My overlap script (`wm.js`): C08 key shares 0 content words with the photo sentence, the distractors share 5, 3 and 2. S08 key 1 against 2, 5 and 0. Strict-max keys in 1.b fell from 13 to 6 (C12, P1, P3, P4, S03, S09) and none of them is a caption |
| M3 re-skinned similar bank | **Fixed on the twin test, with residuals** | Twin pairs, raw word-set Jaccard: 1.b 0.12 to 0.20 item-only and at most 0.21 with the passage (S02). 1.c 0.07 to 0.19 and at most 0.19 with the passage. Shared exact options: 0 in 1.b, at most 1 in 1.c. **1.c: no similar item has its twin's key (0 of 15).** Residuals: R2-S5, R2-S6, R2-M3, R2-S11 |
| M4 Together P3 | **Fixed** | Prompt is "that supports it". Three of four choices start "For example,". Only the key is a case of stronger legs. Word-match: key 1 shared word against 1, 3 and 1 |
| M5 S04 paraphrase | **Fixed** | S04 is a forecast of rain and sun before lunch, key However. `grep -rn "forecast" js/data` finds only a T-RA satellite item, a different topic |

The author's other round-2 claims also check out: the closing Watch Me (fruit salad) replaced the numbered-list one, teach point 5 now names an opening, P5 rows now avoid "how", "alike and different" and "why" in two of three rows, and C09 statements are about 15 words.

## 3. Findings

### MUST

**R2-M1 (1.b). S09 option C is true on the screen.**
- S09 asks for the TWO true statements about Zane's page and Nora's page. Option C is "Nora's page puts a number in front of every sentence." Every draft in this lesson is shown with the sentence labels "(1)", "(2)" and so on in the text (checked at 390x844 in the browser; the passage tab shows "(3) Little kids can play ..."). A child who reads the page sees a number before each of Nora's sentences, so C is true as displayed and three statements are true (B, C, E).
- The `why` says "no numbers are in front of Nora's sentences" and H3's neighbour hints rely on the same idea. That contradicts what is on screen.
- The same label problem touches C09 option "Isaiah's draft has a numbered list, but Dara's does not": it is false either way, so it is not a second key, but a child can argue Dara's draft is "numbered" too.
- Fix: replace S09 option C with a statement that is false of both pages without relying on the sentence labels, for example "Nora's page tells readers what to do first, next and last." Rewrite the `why`, the H3 and the `how` line to match. Optionally tell readers once, in the passage note, that the numbers in brackets are only labels for the sentences.

**R2-M2 (1.c). Core P6 repeats Watch Me example 1.**
- Watch Me 1: "Mia stayed inside ____ it was raining hard." Options because, although, for example. Steps: the rain is the reason, so because or since.
- Core item 1, P6: "We wore our warm coats ____ it was cold outside." Options because, for example, also, since, although. Same relation (weather is the reason for staying warm or inside), same slot position, same words, and the answer a child just watched. The teach point also uses "We stayed inside since it was raining."
- This is the defect class of first-review M5 (an item that paraphrases the Watch Me example). The first item of the lesson should be new work for the child.
- Fix: move P6 off the weather-reason frame (a reason that is not weather, for example "The class cheered ____ the team won" if S08 changes), and keep Watch Me 1 as it is. Or change Watch Me 1 to a different reason (a lost tooth, a late bus).

**R2-M3 (1.c). S08 re-skins P6.**
- P6: pick TWO (because, since) from because / for example / also / since / although. S08: pick TWO (because, since) from because / since / although / also / instead. Same key pair, same format, four of five options identical, and the sentence is a one-clause reason frame in both.
- The round-2 rebuild moved S08's key away from its twin C08 (also and in addition) and landed on P6's. Jaccard against the twin is fine (0.12), but against P6 it is 0.22 with four shared options. The `like` is C08, so a child who misses C08 is handed a reason item, not an adder item.
- Fix: make S08 a different job (for example pick the TWO words that add another idea, in a new sentence with a different distractor set), and set `like` to the item it really resembles. If P6 is the item that changes under R2-M2, re-check that S08 and P6 still differ.

### SHOULD

**R2-S1 (1.b). The key is the longest option in 13 of 22 items.**
- Items where the key is longest: C03, C09, C14, P1, P2, P3, S02, S03, S08 (by 1 character), S09, S12, S14 and S15. That is 59 percent against 25 percent by chance for four options. Margins are clear in C14 (97 against 83), P3 (43 against 36), S15 (69 against 64) and S09 (key 67 and 81 against 41, 55, 53). In 1.c the key is longest in 5 of about 22 (C05, C09, C13, S09, S13), which is near chance.
- Fix: lengthen two or three distractors in C14, P1, P2, P3, S09 and S15 to within 5 characters of the key, or shorten the keys.

**R2-S2 (1.b). A "Next, ..." distractor and a hint that names it.**
- The step-adding distractor starts "Next," in C07 ("Next, the judges will pick the winners ..."), C15, P4 and S07, and the Watch Me 3 distractor is "Next, add a spoonful of honey". The key never starts "Next". Hint 3 of C15, P4 and S07 says "a sentence that starts with Next ...". A child learns to cross out any "Next" and the closing items turn into a word test.
- Fix: vary the step distractor ("Add a second hoop and try both at once", "Stir the soup again") in at least two of the four, and keep the H3 about the job ("a closing does not give a new step").

**R2-S3 (1.b). S15 key echoes the Watch Me 3 answer.** Watch Me 3 answer: "Now you have a fresh treat to share with your family." S15 key: "Now you have a bracelet that is ready to wear or to give to a friend." Same frame, same job, same "share or give" idea. Fix: a closing that does not begin "Now you have", for example one that tells the reader what to do next time ("Make one in every color and trade with a friend").

**R2-S4 (1.b). Hint ladders in Together P1 and P3.**
- P1 H2: "Look at the sentences that tell what to put on the pinecone. Ask which one has to be done before the other." That points at sentences 4 and 5. Only the key (A) is about those two, so after H2 one choice is left. Fix: say "Picture each change on a real pinecone" and let H3 remove one wrong choice.
- P3 H2 lists the four jobs, one per choice, and ends with "shows what something looks like". With the prompt ("what the finished feeder looks like"), that is the key in the hint's own words. Fix: H2 "Say the reader's problem in four words. Then ask what each feature does for that problem."

**R2-S5 (1.b). Concept-level re-skins that Jaccard does not see.** S01 maps three articles to the same three plans as P5 (rowboat beside canoe for frogs beside toads, puddles vanish for a pond dried up, build a pillow fort for fold a paper boat). S13 maps two of its three readers to the same two features as C13 (a strange tool in a photo for the snow leopard, skimming for the storm part for one part of a long page). Fix: change the cause row in S01 to a different cause (why a balloon pops), and change one more S13 reader and feature.

**R2-S6 (1.b). Multiset Jaccard over the 0.21 ceiling.** My multiset Jaccard (`jac.js`), item text with and without the passage: S02 0.15 / 0.24, S03 0.23 / 0.27, S09 0.10 / 0.25, S15 0.23 / 0.23. S07, S13 and S14 sit at exactly 0.21. The excess is function words and the shared frames "Which sentence is best" and "sentence 5". With stop words removed no pair is over 0.18 (`jac.js`, last block), so I rate this SHOULD, but the ceiling is a stated rule. Fix: vary the question frame ("Which sentence ends it best?" in one of each pair) when the items are next touched.

**R2-S7 (1.b). Topic echoes.** P5 and S01's "frogs next to toads" is the topic of `T-TS.js:3193` "Frogs and Toads", the passage a compare lesson is built on, so the row's key (compare) is that lesson's key fact. P5's "fold a paper boat" is the subject of `T-T1.js:1643` and `T-T1.js:5082` (a different skill). Fix: replace "frogs next to toads" with two things not in `js/data` (a bike beside a scooter).

**R2-S8 (1.c). Dandelion.** C15 "Dandelion seeds are very light ... the wind can carry them far away" is the fact in `F-FH.js:18` ("A dandelion seed has a tiny tuft ... One strong breeze can carry it far across a field"). It is a reading-fluency passage in another lesson, and the key here is a linking word, not the fact, so I do not block. Fix: swap the subject for something not in F-FH (which also uses maple seeds and burrs), for example a different light object carried by wind, and grep `js/data` for it first.

**R2-S9 (1.c). C14 blank 1.** "We play small games, and we cheer for each other. {0}, Coach lets us pick a fun game at the end of practice." The key is In addition. For example is defensible (picking a game is one kind of "small game" fun). Hint 2 lists adds, goes against, example, so a careful child is left unsure. Fix: make sentence 8 a clearly separate good thing ("Coach gives out cold water after every drill") so only In addition fits.

**R2-S10 (1.c). Hints that give the relation.**
- S02 H2: "A walk every day is one kind of care. Say what that makes the second sentence." That is the key (For example) in other words, and the choices are For example, Therefore and Since.
- S13 H2: "Ask what is the cause and what is the effect." The key is the cause-and-result choice.
- C14 H3 and S14 H3 tell the child to ask whether the fun, or finishing early, "explains why". That states the relation for the second blank, although three options stay live.
- Fix: keep the strategy ("say how the second sentence connects to the first") and leave the relation to the child.

**R2-S11 (1.c). S01 and C07.** S01 pick-two key (Therefore, As a result) is exactly C07's blank pair, and four of its five options appear in C07. It is a different frame, so it is not a re-skin, but a child who used Show me how on C07 gets the same two words. Fix: use a contrast pair (However, Instead) or a pair that includes In addition for S01.

**R2-S12 (1.b). C08 is the odd one out.** After the fix the key shares no word with the photo sentence while the three distractors reuse its nouns (free ball, bandana, learn to catch a ball). A child who has been taught "a caption says it in new words" can pick the only option without a shared word. That is a fair test of the idea, but a test-wise reader gets it without the photo. Fix: give one distractor a fresh description that is wrong ("A sleepy cat naps in a red scarf").

**R2-S13 (1.c). Language.** S08 H3 says "Although would make winning a surprise cheer-stopper". "Cheer-stopper" is not grade-3 vocabulary and not a phrase a child can use. Fix: "Although would make the win a surprise, and the class would not cheer for a surprise."

### NOTE

- **N1 (what is live after hints 1 to 3, my count).**
  - 1.b: C01/P5 two rows left after H3 (one row is settled); C02 3 of 4; C03 3; C04 6 pairs; C05 24 orders (step 1 given); C06 2+2; C07 3; C08 3; C09 6 pairs; C10 2+3; C11 6 of 7; C12 3; C13 two rows left (one given); C14 3; C15 3. Together: P1 1 after H2 (R2-S4), 3 after H3; P2 3; P3 3; P4 3.
  - 1.c: C01/P6 6 pairs; C02/P4 2 (blank decided between two); C03 2; C04 3; C05 3; C06 3; C07 3+3; C08 6 pairs; C09 3; C10 3; C11 3; C12 6 pairs; C13 3; C14 3+3; C15 3+3. Together: P1 2; P2 2; P3 3; P5 one row given.
  - No item has fewer than two live choices after hint 3 except P1 after H2.
- **N2 (key against `why`, `how` and hints, every item).** Read next to the key for all 68 items and the 11 addons. The keyed text matches `why` and `how` everywhere. The one conflict is 1.b S09 (R2-M1). H1 and H2 do not give the key anywhere except R2-S4 and R2-S10.
- **N3 (official wording).** 1.b `official`: "Design texts using a variety of text structures and features, according to purpose and audience." Covered: structures (steps, compare, cause and effect, sections), features (heading, caption, numbered list, photo, title, table), purpose and audience (C10, C12, C13, C14, S10, S14), opening and closing. 1.c `official`: "Use conjunctions and transition words or phrases, such as although and since, to add cohesion and link ideas and information." Covered: since (P6, C06, S08, S14), although (C15, S06, S07, P2), because, and the transitions However, Therefore, In addition, As a result, For example and Also. Learn It models reason, contrast and example, and adds Therefore, In addition and However as extra steps. Opening and caption jobs in 1.b appear in the teach points but not in Watch Me; the closing is modelled, so I do not raise it.
- **N4 (points and DOK).** Two-slot dropdowns, pick-two, match and order items are two points, single items one. DOK 1 only for 1.c P4, P1, S02. Items are grade-3 suitable. Reading load is highest in 1.b C03, C09 and C14.
- **N5 (Together and test separation).** The lesson `test` uses p2 only (6 items in 1.b, 5 in 1.c). No core, similar or Together item uses p2. Five-word n-gram scan against the tests: only shared directions ("wants to add a heading above sentences", "wants to join sentences and"). No leakage.
- **N6 (set giveaways).** No item gives away another inside a set. Within 1.c, C07 and S01/S14 share their word pair (R2-S11). Within 1.b the repeated closing frame is R2-S2.
- **N7 (browser, 390x844).** `br.py` (the first reviewer's script, port 8872) went through all 15 core items of both lessons. Per item: a wrong answer then Check ("Not quite"), three hints, Show me how, the right answer then Check, Try a Similar Question (it opened S01 to S15 in order, every time), Next, and the Go on to set 2 and set 3 buttons. No page errors, no horizontal scroll at any step, one failed request (the Google Fonts stylesheet, the sandbox is offline), `BAD []` for both lessons. I also looked at 1.b C09 (pick two, five long options) and its passage tab: no overflow and every option is readable. The helper sets answers through the engine state, so it does not click the controls. The hottext, dropdown and order controls were not hand-clicked in this pass. The first review's screenshots covered those.
- **N8 (reading level).** C09 options are now about 15 words each (checked), down from 20 to 26.

## 4. Per-lesson notes on keys that needed a second look

- **1.b C03.** Only "after sentence 4" is possible: before 4 there is no coil in the tube, and after 5 the rice is in. S03's key (the oatmeal must finish cooking before it is poured) is a reason, not a position, so it does not repeat C03.
- **1.b C09.** The two statements about plan and reader are both true and neither is true of both drafts. "Isaiah uses first, next and then" is false the other way round (Dara does).
- **1.b C11 and S11.** One target each: sentence (5) in the walking paragraph, sentence (7) in the tablet paragraph. Sentence 1 of each text is not a target, so seven or eight targets are live.
- **1.c C12 and S12.** C12 key As a result and Therefore (both a result). S12 key However and Although (both a contrast); I checked that no other pair in S12 shares a job.
- **1.c P3.** Three choices begin "For example,". Only "I can now pedal all the way up Oak Street hill" shows stronger legs.

## 5. Facts

All scenes are made-up everyday events. The craft and technique claims I checked:
- Rain stick: tape one end, put in coiled foil, add rice, cap the other end. https://www.giftofcuriosity.com/diy-rain-stick-craft/ (the page fetched agrees; https://buggyandbuddy.com/how-to-make-a-rainstick-instrument/ seals one end first and fills through the other)
- Hula hoop: hold the hoop against the lower back, push it round, move the hips in a circle to keep it going. https://www.healthline.com/health/exercise-fitness/hula-hoop-benefits
- Dandelion seeds ride the wind on a parachute of fine hairs. https://www.science-sparks.com/dandelion-parachutes/ (search result only; the fact is also in the repo's F-FH passage)
- The first review's sources for stovetop oatmeal, the pinecone feeder and cup telephones still stand: https://feelgoodfoodie.net/recipe/how-to-make-oatmeal/ , https://pallensmith.com/2015/12/16/pinecone-birdfeeder/ , https://www.mombrite.com/string-telephone/
- Sunscreen and fewer sunburns in children: a search returned a Swiss school study of sun protection and sunburn (https://pubmed.ncbi.nlm.nih.gov/27878788/), which I did not open. It is common knowledge and the passage claims no figure.
No claim in either lesson is false.

## 6. Gates and housekeeping

- Server: `node verification/serve.js . 8872`, killed by pid after the browser pass (no process left).
- Scratch files in `scratchpad/ss2/`: `blind.js`, `blind.txt`, `maps.json`, `myans.json`, `cmp.js`, `full.js`, `full_b.txt`, `full_c.txt`, `wm.js`, `jac.js`, `topics.sh`, `br.py`, `shot.py`, `s_b9.png`, `s_b9_p.png`.
- Topic duplicate check: `topics.sh` greps all `js/data` outside the 1.b and 1.c blocks (`T-SS.js` lines 1017 to 3528) for each topic and its variants (rain stick, paper chain, cup, pet show, hula hoop, bracelet, oatmeal, pinecone, paper boat, frogs and toads, pillow fort, whales, guitar, zoo, tablet, school bus, splash day, sunscreen, dandelion, soccer, climbing wall, skiing, shoe shop, forecast, road work, leash, rowboat and others). Only R2-S7 and R2-S8 turned up as echoes, and no key-fact duplicate was found.
- Re-check list for the author after the three MUSTs: S09 `why`, `how` and H3 (1.b); P6, S08, their `like` and `how` (1.c); then re-run `wm.js` and `jac.js` for those items.

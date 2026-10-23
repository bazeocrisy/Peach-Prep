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

# B4 review: 3.T.T.1.e "Write a story" and 3.T.T.2.d "Informational writing"

**Role:** independent content reviewer. I did not write these lessons. I read the author log only after my answers were saved.
**Scope:** `js/data/lessons/T-T1.js` (3.T.T.1.e) and `js/data/lessons/T-T2.js` (3.T.T.2.d), the blocks between the `B4-b4a` markers. That is `core` (15 items each), `similar` (S01 to S15), `addons` (P1 to P6) and the passages. I also read Learn It, Watch Me, `practice` and `test`. The figures are `assets/figures/tt2d-*.svg`.
**Read-only:** I changed no lesson or code files and ran no git. This is the only file I wrote.

## 0. Verdicts

| Lesson | Verdict | Reason |
|---|---|---|
| 3.T.T.1.e | **CHANGES REQUIRED** | Two near-copy MUSTs (S01, S11). All keys are right. |
| 3.T.T.2.d | **CHANGES REQUIRED** | Near-copy S15 (all four options shared). The clue of C05 and S05 names every wrong type, so one choice is left. The peanut topic and key facts remain in four other lessons. |

No wrong key, no ambiguous key and no factual error was found in either lesson. Both ran clean in the browser.

## 1. Blind solve

- **Method.**
  - `scratchpad/b4r2/load2.js` loads a lesson through a vm sandbox with a mock `PP.addLesson`.
  - `blind2.js` resolves each `{ref}` and prints every core and similar item. It also prints the passages and the figure alt text.
  - It uses a seeded shuffle (seed 777) on choices, order steps and dropdown options. Hot-text targets keep passage order, as the engine does.
  - It strips `correct`, `answer(s)`, `clue`, `hints`, `how`, `why`, `misconception`, `like`, `ok` and `key`, including the nested ones.
  - I grepped the stripped JSON for all of those words before reading it. There were zero hits.
  - My answers are in `b4r2/myans-t1.json` and `b4r2/myans-t2.json`. They were saved before `keys2.js` printed the keys.
- **Result: 60 of 60 agree (100%).** That is 15 core and 15 similar items in each lesson.
  - 3.T.T.2.d: 30 of 30, fully blind.
  - 3.T.T.1.e: 30 of 30, **not fully blind.**
    - My first `sed` on the file printed lines 4525 to 4560 of `T-T1.js`.
    - That showed me the full source of C03 (key, hints, how and why) and the stem of C04.
    - So the C03 answer is not independent. I did not see C04's choices or key.
    - The other 28 are truly blind. I saw nothing of the other items until after I had answered.
  - The refs (P4, P5, P6 in 1.e; P4, P5 in 2.d) were solved blind from stripped text.
- **Close calls while solving.**
  - T2 C09: the second key, "Black letters show up clearly on yellow paint, even in dim light", is the weaker support for "That color is easy for other drivers to see". See SHOULD-6.
  - T1 C13: sentence 9 ("I saw a blue jay feather...") is not offered, so there is no clash.
- **Browser sitting, 390x844, Playwright.** All 15 core items per lesson, run through the real buttons.
  - Check My Answer with the key gives "Right on the first try" on 15 of 15 in each lesson.
  - A wrong check, then three hints, then Show Me How, then Try a Similar Question, then a correct check on the similar item: 15 of 15 in each lesson. All three hints were shown, and the how text was complete.
  - No horizontal scroll.
  - No page errors. The only console error is the blocked Google Fonts request, which is a sandbox limit.
  - On the first 2.d pass one transient `Unexpected token '{'` page error appeared. It did not reproduce on a rerun of 2.d, and `node --check` passes on every file in `js/`. I put it down to another agent saving a file during my run.

## 2. Findings

### MUST

**M1. T1 S01 is a near-copy of C01 (P5).**
- It shares three of the same option strings ("Finally,", "Before that," and "First,") and the same two-slot frame. Whole-text Jaccard is 0.34, and content-word Jaccard is 0.26. The ceiling is 0.21 with at most one shared option.
- Only "Next," and "Finally," are new keys. A child who just learned that "Before that" and "First" are wrong will see them again.
- Fix: use new distractors. For example, use "Soon after," and "At the same time," for slot 1. For slot 2 use "In the end," and "To begin with,", and keep "Finally," as the key. Keep at most one option in common.

**M2. T1 S11 repeats C11's reason frame, and the key reason is word for word.**
- The key reason is identical in both items: "It puts the reader in the first moment and makes them curious." So are three distractor reasons: "It teaches the reader...", "It tells the reader what the writer thinks.", "It tells the reader where the story happens."
- Whole-text Jaccard is 0.33. The how and why also reuse C11's sentences.
- A child who remembers the reason phrase can pick S11 without reading the sentence. The reason is a cue.
- Fix: vary the reason wording in S11, and give a new distractor type. For example, use "It tells how the story ends." Keep the reason as a real test of the sentence, not a phrase to match.

**M3. T2 S15 is a near-copy of C15. All four options are identical.**
- The four option sentences are the same set and only the key changes. The stem has the same two-draft layout. Whole-text Jaccard is 0.40, and content-word Jaccard is 0.31. Four options are shared against a ceiling of one.
- A child who answered C15 has seen every option. The only new task is working out which draft got which problem.
- Fix: write different options. Use a mix of problems, such as "Draft A needs a better conclusion, and Draft B needs a better introduction." Change the draft topic, which is also the same two-sentence pattern of C15.

**M4. T2 C05 (P4) clue and S05 hint 1 name every wrong type, so only the key is left.**
- The P4 clue reads: "Cross out any choice that starts something new, adds a new fact, or is about a different food."
- The three wrong choices are exactly those three types: the "Next, I will tell you how to make..." sentence, the "Peanut plants need warm weather..." sentence and the apples opinion.
- Hint 1 in `addons` (P4) already removes the first two. Hint 3 repeats "Next". The clue then removes the third. Live choices after the clue and hints 1 to 3: **one.**
- S05 hint 1 is the same text with "gives an opinion about something else": "Cross out any choice that starts something new, adds a new fact, or gives an opinion about something else." It names the three distractors the same way. Live choices: **one.**
- Fix: state the test, not the categories. For example: "A conclusion wraps up the whole topic. Ask of each choice: does it sum up the main idea of the draft?" Leave one wrong type to the child, or the question is a naming exercise.
- This repeats the B0 fault, a hint that narrows to the key.

**M5. T2: the peanut topic and its key facts are still in four other lessons.**
- The brief asks that no topic or key fact repeats across `js/data`.
- Peanut facts in other files (all outside the edited blocks):
  - `T-C.js` lines 2099 to 2107, "Kenji is making a slide show about peanuts": Georgia leads, the peg grows into the soil, farmers dig up the plants and dry them, another machine picks the peanuts, peanuts are not true nuts.
  - `L-V3.js` p2 "How Peanuts Grow" (line 808): flowers above ground, a peg pushes into the soil, a pod forms underground, legumes, and a glossary entry that defines harvest as "the gathering of crops when they are ready".
  - `T-RA.js` line 1006: "Peanut plants grow yellow flowers above the ground...".
  - `T-SS.js` line 5: a "Why Peanuts Help the Soil" passage.
- The same facts are keys here: C02 ("The flower is above the ground, but the peanut is under it"), C03 (the harvest steps), C04 (the definition of harvest) and P2 (legumes).
- p1 is a pre-existing passage, so the fix may be a lead decision. If the duplicate is accepted, downgrade this to SHOULD and record it.
- Fix: move 2.d p1 and its items to a topic nowhere else in `js/data`.
- The other topics I checked are clear:
  - School bus, yellow and the stop arm appear only in 2.d, except a RA "bus safety research" stem, which is a different fact.
  - Magnets and poles appear only in 2.d.
  - Hourglass, abacus, windsock, iceberg, anthill, ferrule, kitchen timer, cork, jelly sandwich, treehouse, bumper cars, state fair, scavenger hunt, walkie-talkie, model rocket, robot costume and magic show appear nowhere else.

### SHOULD

**S1. T2 C10 can be solved without the figure.**
- The stem says "Amina drew Figure 1 to go next to sentence 5". The key is sentence 5, nearly word for word: "When a bus stops, red lights flash and the stop arm swings out."
- A child who matches the stem to the passage never needs to look at Figure 1. A word-match key.
- Fix: do not name the sentence in the stem. Say "next to paragraph 2" or give no location, so the picture decides. Keep the caption options close to the passage so the labels carry the answer.

**S2. T2 C13 hint 3 is inaccurate.**
- Hint 3 says "Figure 1 shows only one magnet and four objects." The figure shows four small pictures, and each has its own U-shaped magnet. The how text says "a magnet being tested with four objects", which is looser but passable.
- Fix: "Figure 1 shows magnets pulling or not pulling four objects."

**S3. T1 Learn It: the setting and problem vocabulary entries are repeated five times.**
- `T-T1.js` lines 4355 to 4364 list "setting" and "problem" five times each. The words box will show them five times.
- It looks like an edit ran five times. The author log says the teach edit added "problem/setting words".
- Fix: keep one copy of each.
- The 2.d author log also mentions a "sound word" teach edit. There is none in 2.d. This is probably a log mistake.

**S4. Order items: the hint ladder fixes the whole order.**
- T1 C02: the clue asks where the children must be before they see the door and what must happen before it is opened. Hint 3 gives the door-and-crack link. Together they settle all three sentences.
- T1 C12: the second hint asks which one needs nothing before it and which comes last. Hint 3 gives the nudge-before-slip link. That leaves one order.
- T2 C03: hint 2 names the clue words "when, last and even more", which fix the first, the last and A after D. Hint 3 repeats the D-before-A link.
- Fix: keep the strategy in hint 1 and the rule in hint 3, but drop the clue words from hint 2, or one of the two links from hint 3.

**S5. T2 C03 comes before C04 and already models the answer.**
- C03 calls the steps "what happens next at harvest time", and the sentences show plants being dug, dried and combined. C04 then asks what "harvest" means, and the gather-the-crop answer is already on the page.
- Fix: say "at the end of the season" in C03, or move C04 before C03 in the set.

**S6. T2 C09: the second key is the weaker support.**
- "Black letters show up clearly on yellow paint, even in dim light" is true and the fact is real (see sources). But it is about reading letters. Sentence 3 says the color is easy for other drivers to see. A careful child can doubt it.
- The three other wrong choices are clearly off topic, so the key is still the only reasonable pair. I counted it defensible.
- Fix: swap in a fact closer to sentence 3, such as "Yellow can be seen well at dawn and dusk."

**S7. Many T1 and T2 similar items sit over the Jaccard ceiling because of shared prompt frames.**
- Whole-text Jaccard against the `like` core item, with shared options in brackets:
  - T1: S02 0.26, S03 0.23, S04 0.24, S09 0.36 (3 labels), S12 0.24, S13 0.22, S14 0.32.
  - T2: S01 0.29 (3 labels), S04 0.29, S05 0.26, S09 0.25, S12 0.29, S13 0.26.
- Content-word Jaccard (stem, text and options, stopwords removed) is 0.17 or less for all of these except S01 (T1), S11 (T1) and S15 (T2). The overlap is the prompt and the match labels, not the content.
- I accept the match labels (fixed categories taught in the lesson). For the rest, vary the prompt frames a little: "Which TWO..." and "Put them in the order..." appear unchanged in S14, S02, S12 and S13.
- T1 S14 is the weakest. The prompt is word for word C14 with the name and pronoun changed, and the key has the same shape (one spoken line plus one action, against a feeling word, a guess and a plan).

**S8. Watch Me does not model most of the fifteen.**
- T1: the three worked examples cover an ending, an order and a line of dialogue. The core also asks for beginnings (C04, C11), showing a feeling (C06, C14), a sentence to remove (C07), sentence jobs (C09), details (C13) and a combined ending (C15). The teach text covers most, but a telling-versus-showing example is the only one in the example box.
- T2: the three examples cover an off-topic sentence, a conclusion and a supporting fact. The core also asks for an introduction, a definition, a caption, a figure match, a part match, an order and a two-draft comparison.
- Fix: add one example each for a beginning and a definition (or caption).

**S9. T1 C10 hint 3 plus the clue leave one choice in blank 2.**
- The clue says an ending should "wrap up the problem and show how the character feels". Hint 3 removes the Terrell sentence. The last wrong option, "That is the whole story about my recorder concert.", shows no feeling.
- Live in blank 2 after the clue and hints: one or two. The author counted 3/3/2.
- Fix: have hint 3 name a different wrong type, or let the clue say only "wrap up the problem".

**S10. T1 and T2: some live counts are lower than the author's.** (Method in section 3.)

### NOTE

- **N1. T1 C03 and S03.** The clue defines dialogue as "exact words ... inside quotation marks". Applied, that already removes the paraphrase and the no-quote versions. Live choices after hint 1 are two (the key and the off-moment line), not four. This is the definition of the skill, so it is acceptable.
- **N2. Match items (T1 C09, S09; T2 C01 / P5, S01).** Hint 3 gives away one row. With three jobs and "use each job once", the other two rows are a one-in-two guess. T2 P5 hint 3 names the roasting sentence as a middle fact, but two rows are middle facts, so the child still has to place the others. Acceptable.
- **N3. The dropdown option order.** The author says the key option is first on both blanks of 2.d C12 (and 4.b C14). In `js/engine/items.js` (line 242) `ctx.ddOrder` shuffles every slot's options once per sitting. So the data order is not shown, and key-first is **not** a giveaway. The browser sitting confirmed the order varies. No change needed.
- **N4. Repeated names.** Nia is in S01, S03 and S10. Leo is in p5 and S05, and in a Field Day sign story in `T-C.js` line 4099. Kai is a girl in S05 and a boy in S12. Not wrong, but a child may feel they have met the story.
- **N5. Same-theme siblings.**
  - T1 S12 (a paper boat set on a creek) matches T1 3.T.T.1.b S02 (Mia's paper boat on a creek).
  - T1 S07 (a yard sale) matches the `T-C.js` story "The Yard Sale".
  - T1 S11 (a climbing wall) shares a setting with a `T-T34.js` opinion piece.
  - Different text types, so I treated these as notes.
- **N6. Three definition items in one 15 (T2 C04, C07, C14).** The standard names definitions, so this is fair, but two dropdowns and one mc use the same task shape.
- **N7. T2 has only two DOK 3 items (C12, C15).** T1 has five. Fine for the standard.
- **N8. Figures.**
  - The alt text matches each picture. Bus: two red lights and a stop sign on an arm, labels "red lights" and "stop arm". Magnet test: four tiles. Sink and float: cork and apple at the top, rock and coin at the bottom. Windsock: wide end at the pole, narrow end free, labels as described.
  - Bus: the alt says the arm swings out "from the left side". In the drawing the sign sits at the left end of the bus, not along the side. Acceptable.
  - Sink and float: the "rock" and "coin" labels sit at y=276 in a 280-high box, tight to the edge but not clipped.
- **N9. T1 C13 and T2 C13 hot-text targets** are in passage order and the answers are not at the first or last position. Good.
- **N10. T2 C07.** C10's figure (a stop sign on an arm) reads as the answer to C07 ("a sign that swings out"). C07 comes first and the passage already says the stop arm swings out. No change needed.

## 3. Item checks

### Keys and ambiguity
- **All 60 keys agree with my blind answers.** Every key has one defensible answer. I found no wrong key.
- **Keyed text beside why, how and hints.** I read all of it for the core, similar and addon items in both lessons. The how and why text agree with each key. The sentence numbers cited in how and why match the passages (checked for T1 C07, C13 and T2 C08, C11, C13).
- **Hot-text index maps.** T1 C07 p3:2:3 is sentence 6. T1 C13 p4:2:3 and p4:2:4 are sentences 4 and 5. T2 C08 p3:3:1 is sentence 7. T2 C11 p4:2:4 and p4:3:4 are sentences 5 and 9. T2 C13 p4:2:2 and p4:2:3 are sentences 3 and 4. All agree with the how text.
- **Points.** Choose-two items are worth 2 (T1 C13, C14; T2 C09, C11, C13). Totals: 1.e is 23 points, 2.d is 21 points.
- **DOK.** 1.e: ten at DOK 2 and five at DOK 3. 2.d: thirteen at DOK 2 and two at DOK 3 (see N7).

### Hand-recount of live choices (clue and hints 1 to 3 applied honestly)
Each cell is: live after hint 1, hint 2, hint 3 (with the clue as hint 1). Author figures are in the log.

**3.T.T.1.e**

| Item | Mine | Note |
|---|---|---|
| C01 | 3, 3, 2 (blank 2) | agrees |
| C02 | 1 order | clue plus hint 3 fix the order (S4) |
| C03 | 2, 2, 2 | the definition of dialogue removes two (N1) |
| C04 | 3, 3, 3 | hint 3 removes the "what a bus is" sentence |
| C05 (P6) | 3, 3, 3 | hint 3 removes the phone ring |
| C06 | 3, 3, 3 | |
| C07 | 5, 5, 4 | |
| C08 | 3, 3, 3 | |
| C09 | row 1 given | N2 |
| C10 | blank 2: 1 to 2 | S9 |
| C11 | 3, 3, 3 | |
| C12 | 1 order | S4 |
| C13 | 5, 5, 4 (pick 2) | |
| C14 | 5, 5, 4 (pick 2) | |
| C15 | Part A 3; Part B 1 to 2 | hint 2 says "what went wrong" |

**3.T.T.2.d**

| Item | Mine | Note |
|---|---|---|
| C01 | row 3 given | N2 |
| C02 | 3 | the packing and selling category is named in hint 3 |
| C03 | 1 order | S4 |
| C04 | 2 | |
| C05 (P4) | **1** | M4 |
| C06 | 3 | hint 3 removes the "That is why" sentence |
| C07 | 3 | |
| C08 | 4 | |
| C09 | 4 (pick 2) | |
| C10 | 1 with the stem | S1 |
| C11 | 4 (pick 2) | |
| C12 | blank 2: 2; blank 1: 3 | |
| C13 | 4 (pick 2) | |
| C14 | 3 | |
| C15 | 3 | |

- **No hint 3 reveals or echoes a key in the 30 core and 30 similar items**, except where listed (M4, S1, S4, S9). Hint 3 rules out a wrong choice by type in nearly all of them, which is the design.

### Ladders and `how`
- Hints run strategy, then where to look, then one scaffold. The exceptions are above.
- The how steps are accurate and numbered the same as the passages.

### Distinctness, fresh application and pre-answers
- **Within the fifteen.** No two items differ only by names or numbers. Closest pairs: T1 C04 and C11 (both beginnings), T2 C08 and C11 (off-topic sentences, one and two), T2 C06 and C12 (introduction).
- **Pre-answers.** I checked each set and the Together items (P1 to P3 in both lessons) for text that gives away a later key. The only case is S5 (T2 C03 before C04). The Together keys do not appear in any core item.
- **`like` mappings.** They are honest on task, with format changes at T1 S13 (ms for hot text), T1 S15 (mc with reasons for ebsr), T2 S11 and S13 (ms for hot text).
- **Near-copy measure.** `jac.js` (whole text: stem, prompt, text and options) and `jac2.js` (content words only). See S7 and M1 to M3.

### Official wording and standards coverage
- **3.T.T.1.e** ("character, setting, problem, resolution, dialogue ... descriptive details, clear event sequences, and a sense of closure"):
  - character: C06, C14
  - setting, problem, resolution: C09, C15
  - dialogue: C03, C08
  - descriptive details: C13
  - event sequence: C01, C02, C12
  - closure: C05, C10, C15
  - beginnings: C04, C11
  - Everything is covered. The write task is outside the fifteen and not scored.
- **3.T.T.2.d** ("introduce a topic, develop the topic with facts and other information (definitions, details, illustrations), and provide a concluding statement"):
  - introduction: C06, C12
  - facts and details: C02, C09
  - definitions: C04, C07, C14
  - illustrations: C10, C13
  - conclusion: C05, C12
  - Everything is covered.
- **Grade 3 and reading level.** Passages run 106 to 141 words. FK by `verification/readability.py`:
  - 1.e: p1 3.0, p3 2.9, p4 2.8, p5 3.0 (p2 is a test passage at 4.2).
  - 2.d: p1 2.8, p3 3.7, p4 3.2 (p2 is a test passage at 1.9).
  - All are under 4.5.
- **Learn It and Watch Me.** See S3 and S8.
- **Write tasks.** In both lessons the `write` prompt and checklist stay outside `core`. Nothing awards a pass.

### Facts and sources
- **School bus yellow.** Chosen at the 1939 conference run by Frank W. Cyr because black lettering was most legible on it in semi-darkness and it stood out from a distance. This matches C09 and the how text. https://en.wikipedia.org/wiki/School_bus_yellow
- **Peanut harvest.** Plants are inverted and dried in the field, then a combine pulls the pods off the dry vines, and warm air blows through the wagon to dry the peanuts. This matches C03 (combine picks up, pulls off pods, warm air, ready). https://www.ars.usda.gov/southeast-area/dawson-ga/national-peanut-research-laboratory/docs/peanuts-101-the-basics/page-8/
- **Peanut growth.** The flower opens above ground, then the stalk ("peg") bends and pushes the ovary into the soil, where the pod forms. Peanuts are legumes. This matches p1 sentences 3 to 5, C02 and P2. https://www.almanac.com/plant/peanuts
- **Stopping for a bus.** Georgia drivers must stop for a bus with flashing lights that is loading or unloading, and stay stopped until the bus moves or the signals go off. Matches p3 sentences 4 to 6. https://dds.georgia.gov/node/37991
- **Georgia leads in peanuts** (p1 sentence 9). This is common knowledge and matches the other peanut texts in the data.
- **Other science facts.**
  - Magnet poles are where the pull is strongest, like poles push and unlike poles pull; plastic, wood and glass do not stick.
  - An iceberg is mostly under water.
  - A ferrule is the metal band that holds an eraser.
  - A windsock's wide end faces the wind.
  - Twenty seconds of hand washing is the standard advice.
  - I found no issue with any of these.

## 4. Author-log check (read after solving)

- The 1.e rows were reconstructed from memory. I checked them against the data. Formats, passages and DOK match for all fifteen. The log lists the order items' live counts as 24/24/12, but hints fix the order (S4).
- The log says "Fixed weak item: P6 popcorn distractor replaced by a Georgia map". The P6 text in `addons` has no popcorn, and the Georgia map option is present. Agrees.
- The log's "Skeptical blind re-solve first" list names the same items I checked (1.e C09, C10, C13, C15, S09, S14; 2.d C09, C12, C13, C15). All hold, with the notes above (N2, S6, S9, S2).
- The log says the key option is first in the dropdown data and asks whether that is a giveaway. It is not (N3).

## 5. What to fix, in order

1. T2 S15: new option set and a new topic (M3).
2. T2 C05 and S05: rewrite the clue and hint 1 so they do not name the three wrong types (M4).
3. T1 S01: new distractor words in both slots (M1).
4. T1 S11: new reason wording and a new distractor type (M2).
5. T2 p1: decide the peanut duplicate (M5).
6. T2 C10 stem (S1), C13 hint 3 (S2), T1 Learn It duplicates (S3).
7. The order-item hints, T2 C03 and C04 order and the weaker C09 key (S4 to S6).
8. The rest of S7 to S10 and the notes as time allows.

No lesson file was edited by me.

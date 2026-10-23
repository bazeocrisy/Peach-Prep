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


---

# Second review (fix round)

**Role:** independent reviewer, second pass. Read-only: I changed no lesson or code file and ran no git. Scratch work is in `scratchpad/b4r4/`. I read the first review only after my answers were saved.
**Scope:** 3.T.T.1.e in `T-T1.js` and 3.T.T.2.d in `T-T2.js`. That is the core 15, S01 to S15, the Together items P1 to P6 with their addons, and the passages. Focus: the items new in the fix round (1.e S01, S11, S14, C02, C09, C10, C12; 2.d C02, C03, C04, C05, C10, C13, S05, S15). "C02" and "C05" are positions in the core (1.e C02 = P4, 1.e C01 = P5, 1.e C05 = P6; 2.d C01 = P5, 2.d C05 = P4).

## Verdicts

| Lesson | Verdict | Reason |
|---|---|---|
| 3.T.T.1.e | **CHANGES REQUIRED** | One MUST: S01 slot 1 has a second defensible answer. |
| 3.T.T.2.d | **CHANGES REQUIRED** | Two MUSTs: C02 has no on-topic distractor, and C04's stem contains the key. |

All five MUSTs from the first review (M1 to M5) are fixed or accepted. The remaining MUSTs are new items from the fix round.

## 1. Blind solve

- **Method.** `b4r4/ld.js` loads `T-T1.js` and `T-T2.js` in a vm sandbox with a mock `PP.addLesson`. `b4r4/dump.js` resolves every `{ref}` and prints passages (every sentence tagged `[p:para:sent]`), Together P1 to P6, the core and S01 to S15, plus figure label, caption and alt text. It uses a seeded shuffle on choices, order steps, dropdown options and match rows. It strips `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception`, `like` and `std`.
  - I grepped the stripped JSON for those key fields: none present. The words why, how, hint, answer and correct appear 29 times as ordinary prose, and I checked each.
  - I did not open the lesson source, the teach text, the author log or any review file before solving. My only look at the data before solving was a key-names-only skeleton (types, no values).
  - Answers were saved to `b4r4/myans.json` (md5 bbc208dc...) before I printed any key (`keyview.js`).
- **Result: 66 of 67 agree (98.5%).** 1.e: 33 of 33 (6 Together, 12 own core, 15 similar). 2.d: 33 of 34. This pass is fully blind.
  - The one miss is **2.d S15**, and it is my slip, not a wrong key. The key (first draft needs a better conclusion, second needs a better introduction) is right. I read the two near-mirror options the wrong way round. Note that options C and D are exact mirrors of each other, so a child who skims will do the same. That is the point of the item and I count it as fair.
  - **1.e S01 slot 1**: I got the key ("A moment later,") but flagged "To begin with," as defensible. See M1 below.
- **Keys beside why, how and hints: all read for all 67 items.** `why` and `how` match each key, and the sentence numbers match the passages. No key disagrees.
- **Browser sitting, 390 x 844, Playwright** (`node verification/serve.js . 8871`, killed by pid). All 15 core items per lesson.
  - Check My Answer with the key: "Right on the first try" on 30 of 30.
  - Wrong check, three hints (all three shown, button disables), Show Me How (complete), Try a Similar Question (correct similar item, `like` points back to the core id), then a correct check: 30 of 30.
  - No horizontal scroll and no page errors. The only console error is the blocked Google Fonts request (sandbox limit).
  - Screenshots are in `b4r4/` (`b-3.T.T.*.png`, taken at the similar item). The windsock screenshot shows the figure caption line under the picture (see S2).

## 2. Findings

### MUST

**M1. 1.e S01 slot 1: "To begin with," is also defensible.**
- Text: "(1) Rosa covered her eyes and counted to twenty. (2) {0} she checked behind the curtain. (3) Then she peeked inside the closet. (4) {1} she spotted ... under the bed."
- "To begin with, she checked behind the curtain. Then she peeked inside the closet. In the end, she spotted..." is the classic first/then/last triad and reads naturally. Sentence 3 already starts with "Then", which invites exactly that reading. Counting is a set-up, not a step in the search. The key "A moment later," is no better than "To begin with," for slot 1.
- The `how` says "To begin with would make the search the start, but counting came first". That is a judgement call, not a fact, and a grade 3 child can fairly disagree.
- Fix: give sentence 1 a time word, for example "First, Rosa covered her eyes and counted to twenty.", so the start word is taken. Or replace the distractor with a clearly backward word ("Before that,"). Slot 2 and the shared option ("In the end,", one shared, within the ceiling) can stay.

**M2. 2.d C02 (oil): the key is the only choice that names peanuts.**
- Stem: a paragraph "begins, 'Peanuts are also used to make other foods and products.'" Key: "Peanuts can be pressed to make cooking oil." The three wrong choices are farm machines, a class trip and where Georgia is. None mentions peanuts or products.
- Overlap with the stem: key 2 words (peanuts, make), distractors 0. The ladder confirms it: hint 3 talks about "what peanuts are used for", and my check found "peanuts" in the hints and only in the key. A child can match the one choice about peanuts and be right without judging support.
- This is the pattern the lesson asks the child to test ("supports the same idea"), but with no on-topic non-supporting choice there is nothing to test.
- Fix: make at least one distractor about peanuts but not about uses, for example "Peanut plants grow small yellow flowers above the ground." (avoid p1's exact wording) or "Peanuts grow best in warm weather." Keep one off-topic choice.

**M3. 2.d C04 (protein): the stem contains the key.**
- The stem gives the sentence: "Peanuts have a lot of protein, **which helps kids grow strong**." The key is "a part of food that helps the body grow and stay strong". It is a paraphrase of the stem clause. The how says so ("Rosa's sentence says ... helps kids grow strong. That shows protein is something in food that helps the body").
- The distractors are "a mineral that is found in salty water" and "a kind of sticky oil that coats a food". Both are absurd for a child who knows what food is. Key is also the longest (55 against 43 and 38).
- Result: matching the stem solves it, and no knowledge of how a definition works is tested. Live choices after hint 3: two, but one is chosen by copying.
- Fix: take the clause out of the stem ("Peanuts have a lot of protein.") and make the child choose the meaning, with distractors a child could mistake (for example "a part of food that gives the body quick energy" or "a part of food that makes it taste sweet"). Or keep the clause and change the task, for example "Which sentence best defines protein for the reader?" with choices that all mention growing. Do not leave the answer in the stem.

### SHOULD

**S1. 1.e S11: the prompt tells the child to read the job text.** "Read the job each choice says it does." The key's job ("It starts the action with Kofi at the wall") is the only action job, and the other three are labelled explains, tells how it ends and opinion. It is the longest option (108 against 92, 79 and 78), and the key repeats three words from the stem (first, Kofi, wall). C11's hint 1 ("makes the reader want to read on") and hint 3 ("a story needs a character in a moment") echo the key reasoning ("makes them curious", "puts the reader in the first moment") in C11. Fix: drop the sentence "Read the job each choice says it does." and word the C11 hints without "moment" and "makes ... read on".

**S2. 2.d C10 and S10: the figure caption is already printed under the picture.** The sitting shows "Figure 1. A windsock" under the picture and the question asks "Which caption should ... write under Figure 1?". In C10 the printed caption is "A school bus that has stopped", and the key begins "A stopped bus has ...". The key is word-matched to a caption the child can already see, and a caption the student is asked to write is already there. The stem no longer names a sentence (S1 of the first review is fixed), but this leak replaces it. Fix: give the figure only the label "Figure 1" (no `caption`) for these two items, or use a neutral caption.

**S3. 1.e S13 and 2.d S13 are at or just over the Jaccard ceiling by one measure each.** The overlap is the prompt frame ("Which TWO sentences ... Figure 1/details ... explain/help") and, in 2.d, the sentence numerals and the words "four objects". No shared option in either.
- 1.e S13 vs C13: word-set (words of 3+ letters) **0.226**; content words 0.15; all tokens 0.203.
- 2.d S13 vs C13: content words **0.23** (6 of the shared tokens are the numerals 1 to 5 and "four objects"); word-set 0.151; all tokens 0.209.
- Fix: change the prompt frame ("Pick the two lines that Figure 1 helps explain" with fresh wording) and the stem numbering. This is small.

**S4. Keys are the longest option by a clear margin in a few items.** 1.e S06 (73 against 58, 43, 56), S13 (the two keys are 73 and 68 against 39, 32 and 30), C11 (118 against 109), C04 (82 against 76); 2.d S05 (68 against 54, 51, 45), P6 (124 against 107). Not alone a giveaway, but S13 (1.e) and S05 and S06 are 20% or more. In 2.d S05 the key also repeats five words of the draft (beads, rods, abacus, people, add) where the distractors repeat two. Fix: shorten the key or lengthen a distractor.

**S5. 2.d S03 gives the order away in its own words.** The four sentences begin First, Next, Then and Last, and hint 2 says "Look for clue words such as first, next, then and last". C03 (its `like`) has no such words and needs reasoning. The child can solve S03 without understanding the steps. Fix: remove two of the sequence words from S03.

**S6. 1.e C04 key echoes the stem.** The stem says "the first time she rode the school bus alone". The key says "I climbed the steps alone for the very first time." Overlap: key 4 words (bus, alone, first, time), distractors 2. Fix: keep the details but drop "alone" and "first time" from the key, or add the same words to a distractor.

### NOTE

- **N1. Order items.** No single hint settles more than one step: 1.e P4 h3 and C12 h3 fix the last sentence only; 2.d C03 h3 fixes the last only. The clue plus h3 together still leave one order in P4 (the clue asks where they must be before the door and what comes before opening it). This was S4 in the first review. It is now within the rule (h3 settles at most one step). Every order item has one valid order: P4, C12, C03 (2.d), S02, S12 (1.e), S03 (2.d) checked by hand.
- **N2. Match items** (1.e C09, S09; 2.d P5, S01): hint 3 gives one row and the rest is a one-in-two guess. Fine.
- **N3. 1.e S14.** The key action "picked up the broken pieces" sits beside a stem that says only that the rocket "tipped over and fell". Nothing says it broke. Harmless. The prompt for S14 and C14 both state the criterion ("says or does"), which is the skill, so it is acceptable.
- **N4. 2.d S05 hint 3** says a sentence beginning "Next, I will tell you about" but the option reads "Next, I will tell you how a calculator works." Same idea; a child will still match it.
- **N5. Terrell** first appears in 1.e C08 (key and a distractor) and again in C10 (a distractor). A child may treat the name as a cue. Not wrong.
- **N6. Teach.** The duplicated setting and problem entries are fixed (six words, one each in 1.e). The 2.d words list is four terms.
- **N7. Distractor strength in 2.d C04** (see M3) and C07 are the weakest in 2.d. C07 is fine: the stop arm is a sign that swings out, and the "flashing light" distractor is separated by sentence 4 of the passage.

## 3. Checks requested

### First-review findings: status
| Finding | Status |
|---|---|
| M1 1.e S01 near-copy | Fixed: 1 shared option ("In the end,"); whole-text 0.19. A new ambiguity appeared (new M1). |
| M2 1.e S11 reason frame | Fixed: reason wording differs; whole-text 0.16. Prompt hint added (S1). |
| M3 2.d S15 near-copy | Fixed: 0 shared options; whole-text 0.18, content words 0.13. Key and mirror D remain a fair test. |
| M4 2.d P4 and S05 clue | Fixed: the clue states the test and no longer names the three wrong types. Live after h3: three. |
| M5 peanut duplicate | Accepted: p1, P2 and P6 are pre-existing. New C02, C03 and C04 restate no key fact from `T-C.js`, `L-V3.js`, `T-RA.js` or `T-SS.js` (see topic check). |
| S1 2.d C10 stem | Stem fixed; caption leak found (S2 above). |
| S2 2.d C13 hint 3 | Fixed ("magnets pulling or not pulling four objects"). |
| S3 1.e Learn It duplicates | Fixed. |
| S4 order hints | Mostly fixed (N1). |
| S5 C03 before C04 | Resolved: C03 is now peanut butter, and no longer models "harvest". |
| S6 2.d C09 weak key | Fixed: the key is now "Even in dim light at dawn or dusk, this yellow is easy to spot." and "The bright color stands out from far away, so drivers notice a bus." Both are on target. |
| S9 1.e C10 | Within the rule (blank 1: 2 to 3; blank 2: 2). |

### Jaccard (similar against its `like` core item), all 30 measured
Measures: word-set of 3+ letter words / word-set of all tokens / content words (stop words out) / bag of all tokens. Ceiling 0.21 with at most one shared option.
- **1.e, word-set (3+) / content:** S01 0.164/0.11, S02 0.067/0.02, S03 0.125/0.05, S04 0.130/0.09, S05 0.096/0.05, S06 0.194/0.11, S07 0.135/0.14, S08 0.182/0.13, S09 0.158/0.11, S10 0.178/0.10, S11 0.115/0.10, S12 0.060/0.04, **S13 0.226**/0.15, S14 0.151/0.09, S15 0.188/0.11. Shared options: S01 one ("In the end,"), all others none.
- **2.d, word-set (3+) / content:** S01 0.126/0.09, S02 0.092/0.03, S03 0.157/0.11, S04 0.091/0.05, S05 0.195/0.08, S06 0.145/0.10, S07 0.066/0.05, S08 0.093/0.20, S09 0.191/0.10, S10 0.138/0.10, S11 0.089/0.13, S12 0.144/0.09, S13 0.151/**0.23**, S14 0.120/0.03, S15 0.193/0.13. Shared options: none.
- The all-token set measure is 0.209 or less everywhere. The all-token bag measure, which counts repeated function words, reaches 0.21 to 0.225 on 1.e S01, S04, S09, S11 and 2.d S04, S15; those overlaps are the prompt frames and carry no shared content, so I did not raise them. Only the two S13 items are listed (S3 above).

### Topic duplicates across all of `js/data`
- Peanut: the p1 passage and the practice stay. C02 (cooking oil), C03 (steps of peanut butter) and C04 (protein) restate no fact from `T-C.js` (Georgia leads, peg, dig and dry, legumes, a peanut butter photo as a wrong choice), `L-V3.js`, `T-RA.js` or `T-SS.js` (peanut butter only as a pinecone feeder spread). No peanut key fact in any new core, similar, hint or how text. **Clear.**
- Other fix-round topics (tape measure, abacus, hourglass, kitchen timer, windsock, anthill, cork, ferrule, watermelon, walkie-talkie, treehouse, bumper cars, state fair, magic show, sleepover, scavenger hunt, shoelace, cotton candy): nowhere else.
- Same word, different content: windmill (a simile in `T-SS.js`), yo-yo (a poem in `T-T34.js`), parachute (`F-FH.js`), harbor (a root word in `L-V12.js`), maple syrup (a capital-letters item in `L-GUM5.js`), helmet (a roly-poly comparison and a bike advice sentence in `T-C.js`, `T-RA.js`), climbing wall (an opinion piece in `T-T34.js`), recorder and glitter (`T-SS.js`), paper boat, yard sale (`T-C.js`). None repeats a key fact. Notes only.

### Hand recount of live choices after the clue and hints 1 to 3 (core 15)
Each figure is what is left after all three hints and the clue, applied honestly.

| 1.e | Live | 2.d | Live |
|---|---|---|---|
| C01 (P5) | blank 1: 2; blank 2: 1 to 2 | C01 (P5) | one row given; rest 1 in 2 |
| C02 (P4) | 1 order (clue plus h3; N1) | C02 | 3 on paper, 1 in practice (M2) |
| C03 | 2 | C03 | 1 order (h3 sets the last only) |
| C04 | 3 | C04 | 2, one by copying (M3) |
| C05 (P6) | 2 to 3 | C05 (P4) | 3 |
| C06 | 3 | C06 | 3 |
| C07 | 4 of 5 | C07 | 3 |
| C08 | 2 to 3 | C08 | 4 of 5 |
| C09 | one row given | C09 | 4 of 5, pick 2 |
| C10 | blank 1: 2 to 3; blank 2: 2 | C10 | 3 |
| C11 | 3 | C11 | 4 of 5, pick 2 |
| C12 | 1 order (h3 sets the last only) | C12 | blank 1: 3; blank 2: 2 |
| C13 | 4 of 5, pick 2 | C13 | 4 of 5, pick 2 |
| C14 | 4 of 5, pick 2 | C14 | 3 |
| C15 | Part A: 3; Part B: 2 | C15 | 3 |

- No hint 3 reveals or echoes a key. The ladder-versus-key word check found these words in a hint that appear only in the key: 1.e C11 ("moment", "makes"; S1 above), S08 ("Kayla", a name), S13 ("alley"); 2.d C02 ("peanuts"; M2), C09 ("drivers", a topic word).
- Hot-text and hot-spot maps agree with the `how` text: 1.e C07 p3:2:3 (sentence 6), C13 p4:2:3 and p4:2:4 (sentences 4 and 5); 2.d C08 p3:3:1 (sentence 7), C11 p4:2:4 and p4:3:4 (sentences 5 and 9), C13 p4:2:2 and p4:2:3 (sentences 3 and 4).
- Points and DOK: choose-two and two-blank items are 2 points, single are 1. 1.e core is 23 points and 2.d is 21. Unchanged.
- Grade 3: nothing kindergarten-like, nothing above grade 4 (legume, ferrule, protein and iceberg are defined in context or in the choices).

### Facts (sources)
- **School bus colors and the stop arm.** Amber (yellow) flashing lights are a pre-warning that the bus is about to stop. Red flashing lights and the extended STOP arm are the stopping signals. Matches 2.d p3 sentences 4 to 6 and C07, C10. https://pctribune.com/opinions/ask-a-trooper-school-bus-lights/
- **School bus yellow** was chosen at the 1939 conference because it is easy to see and stands out, including in low light. Matches C09 ("dim light at dawn or dusk", "stands out from far away"). https://en.wikipedia.org/wiki/School_bus_yellow
- **Peanut butter steps.** Roast, cool, remove skins (blanch), grind to a paste, fill and seal jars. This is the C03 order (roast, cool and skins off, grind, jar). https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/3/37046/files/2015/12/Peanut-butter-technical-description-pdf.pdf
- **Peanut oil** is pressed from peanuts and sold as a cooking oil (C02). Search results only (retail pages); common knowledge, no conflict found. https://goodness.com.au/peanut-oil-cold-pressed-20l/
- **Protein** helps the body grow and repair (C04, key correct); **magnets** pull iron and steel (paper clip and nail), not plastic, wood or glass, and each has a north and a south pole; unlike poles pull and like poles push (C11, C13, C14, S01 of the magnet set). Common knowledge; the first review's checks stand. No factual error found.

## 4. Fix list, in order
1. 1.e S01: give sentence 1 a time word or change the distractor (M1).
2. 2.d C02: add an on-topic distractor about peanuts (M2).
3. 2.d C04: take the definition out of the stem and strengthen the distractors (M3).
4. 2.d C10 and S10: remove the visible figure caption (S2).
5. 1.e S11 prompt and C11 hints; both S13 prompts; S05, S06 and S13 key lengths; 2.d S03 sequence words; 1.e C04 key wording (S1, S3 to S6).

No lesson file was edited by me. The server on port 8871 was stopped by pid.

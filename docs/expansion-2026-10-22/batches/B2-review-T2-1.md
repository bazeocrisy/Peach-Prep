# B2 independent review T2-1: 3.T.T.2.a, 3.T.T.2.b, 3.T.T.2.c

**Reviewer:** B2-T2-1 (did not author any item in this batch)
**Date:** 2026-10-22
**Source reviewed:** `js/data/lessons/T-T2.js` (the 2.a, 2.b and 2.c blocks), `assets/figures/tt2-c-fire-station.svg`, `assets/figures/tt2-c-bike.svg`
**Scratch work:** `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/b2t2r1/`. It holds `blind.js`, `blind.txt`, `answers.json`, `cmp.js`, `cmp.txt`, `full-*.txt`, `ngram.js`, `where.js` and the two figure PNGs.

## Verdicts

| Lesson | Verdict | Open MUST | SHOULD |
|---|---|---|---|
| 3.T.T.2.a | **CHANGES REQUIRED** | 2 (leakage) | 5 |
| 3.T.T.2.b | **CHANGES REQUIRED** | 2 (leakage) | 1 |
| 3.T.T.2.c | **CHANGES REQUIRED** | 6 (hint ladder, prompt giveaway, ambiguous key) | 6 |

Every key is correct, and the blind solve agreed 54 of 54 (below). The MUST findings fall into two groups:
1. **Cross-lesson leakage.** Three passages or stems share a topic and a key fact with the B1 text-structure lessons that are co-mapped to the same standard. TS-SEQ and TS-CE are mapped to 3.T.T.2.b, and TS-DESC is mapped to 3.T.T.2.a. A fourth item paraphrases another lesson's form A check passage. The author's six-word n-gram scan cannot catch these, because they are paraphrases.
2. **Hint-ladder and prompt giveaways in 2.c.**

## 1. Blind solve

**Method.**
- I wrote my own Node loader (`b2t2r1/load.js`, `blind.js`). It evaluates `T-T2.js` with a stub `PP.addLesson`, resolves every `{ref}` in `core`, and prints all fifteen core items and three similar items per lesson.
- Choices, hot-text targets, order steps and dropdown options are shuffled with a seeded LCG.
- The printout includes the passages and the figure alt text. It has no `correct`, `answer`, `why`, `clue`, `hints`, `how` or `misconception`.
- Before solving, I looked only at a masked schema dump (field names and string lengths, no values).
- I saved my answers to `answers.json` and a confidence note to `notes-blind.txt`. Only then did I run `cmp.js` against the keys.
- I read the author log after the comparison.

**Result: 54 of 54 agree (100%):** 45 core and 9 similar items.

| Lesson | Core | Similar |
|---|---|---|
| 2.a | 15/15 | 3/3 |
| 2.b | 15/15 | 3/3 |
| 2.c | 15/15 | 3/3 |

**Was it fully blind?** Yes, with two small caveats:
- The dump printed each item's `std` field, which is `undefined` on reused Try items. So I could tell which items were refs.
- I knew the lesson titles from the coverage matrix.

Neither touches a key.

**Low-confidence answers, which became findings:**
- 2.c C06 row 3, "that cans can be used again" (see M10).
- 2.a C06, where "every second counts" is a near miss. That one is fine.
- 2.b C10, where "He showed the planners how strong steel parts…" is tempting. Also fine.

## 2. MUST findings

### 3.T.T.2.a

**M1. SK-TT2a-C08, with passage p4 "Ready in a Flash" and its text box. Shares a key fact with SK-TSDESC-C08.**
- **Evidence:**
  - TS-DESC is co-mapped to 3.T.T.2.a (`codes: ['3.T.SS.1.a','3.T.T.2.a']`). Its passage p3, "A Firehouse on Wheels", includes "Long ago, many fire stations kept a spotted dog called a Dalmatian."
  - SK-TSDESC-C08 keys that sentence as an interesting fact that does NOT support the main idea.
  - In 2.a p4, the box says "some fire stations keep a dog as a pet". C08's key is "They are fun facts, but the article's point does not need them."
  - That is the same topic (fire station), the same key fact (the station dog is a fun, non-key fact) and the same key logic, in the same standard. §4.3 rule 4 forbids sharing the key fact of another lesson's practice item.
  - The author's n-gram scan found a hit in this same TS-DESC passage ("Did you know? Box: Long ago") and dismissed it as a generic opener.
- **Fix:** Replace the dog in the box with a fun fact that has no counterpart elsewhere on the site and that does not support "built to save time". The horse-wagon fact can stay. Then re-run the C08 hints and how, and grep the whole site for the new fact.

**M2. SK-TT2a-S03 (similar). Paraphrases the 3.T.SS.1.b form A check passage.**
- **Evidence:**
  - 3.T.SS.1.b p2, "The Pine Hill Library", is used by SK-SS1b-T2 to T7. Its sentences 6 to 9 read: "The library also plans special activities for kids. On Saturday mornings… On Wednesdays, kids can join a building-block club. In the summer, there is a reading contest with prizes."
  - S03 reads: "On Wednesdays, kids build towers and bridges in the building club… In summer, there is a reading contest with prizes." Its key, "The Elm Street library offers kids different activities all year", is that paragraph's topic sentence.
  - The 6-gram scan also matches "there is a reading contest with prizes".
  - §4.3 rule 4 forbids paraphrasing a check passage.
- **Fix:** Write a new S03 in a different setting. Because 2.a set 3 has no similar coverage (S4), make the new S03 mirror a set-3 item, such as C11, C12 or C14, and give it an honest `like`.

### 3.T.T.2.b

**M3. SK-TT2b-C05 (Garrett Morgan stem). Duplicates TS-CE passage p4 and SK-TSCE-C06.**
- **Evidence:**
  - TS-CE is co-mapped to 3.T.T.2.b. Its p4, "A Signal That Saved Lives", tells this chain: early-1900s streets shared by cars, horses, wagons and people; signals switched Stop/Go with no warning; crashes; Morgan saw a crash; he built a better signal; "Traffic lights today work in a similar way… yellow light."
  - SK-TSCE-C06 keys "Why did Garrett Morgan decide to build a better signal?"
  - C05's stem retells the same chain in near-paraphrase: "cars, horses, wagons and people all shared busy city streets… switched from Stop straight to Go, with no warning… A yellow light today does a similar job". Its key is that same chain.
  - A child on 3.T.T.2.b meets this text twice.
- **Fix:** Use a different historical series. It must not be on the site already, so grep before choosing.

**M4. SK-TT2b-p5 "How to Patch a Bike Tube", with C11, C12, C13 and C15. Duplicates SK-TSSEQ-C14.**
- **Evidence:**
  - TS-SEQ is co-mapped to 3.T.T.2.b. SK-TSSEQ-C14's stem is titled "How to Patch a Bike Tube". Its steps are: take off the wheel, pull the tube out, pump air and dip it in water, watch for bubbles, dry and sandpaper, patch, refill.
  - 2.b p5 has the same title and the same procedure. C11, the order item, keys the same sequence.
  - The 6-gram scan matches the title.
- **Fix:** Replace p5 with a different technical procedure, then rebuild C11 to C13 and C15 on it. The C12 pattern, where a step is skipped that the ordered item does not list, is good and worth keeping.

### 3.T.T.2.c

**M5. SK-TT2c-C01 (hot text, "same state"). Hint 2 plus hint 3 leave only the key.**
- **Evidence:**
  - Hint 2 says "The two sentences you choose must name the same place."
  - Only three targets name a place: p1:1:1 (Georgia), p2:1:1 (Georgia) and p2:3:1 (Mexico and Central America).
  - Hint 3 rules out p2:3:1 and adds "Now find a place that both passages name." The two keys are all that is left.
  - The stem ("the same state") already narrows hard, because Georgia is the only state either text names.
- **Fix:** Hint 2 should be about strategy and location without the "same place" constraint. For example: "Look for a place name in each passage. More than one place is named." Hint 3 should rule out one non-place target instead, for example "'It is a very small bird' tells about size, not where the bird is found." Consider rewording the stem so it does not say "state".

**M6. SK-TT2c-C03 ("told ONLY in 'Baskets That Tell a Story'"). Hint 2 isolates the key.**
- **Evidence:**
  - Hint 2 says "note which details are about the plant itself and which are about the baskets."
  - Three of the four choices are plant facts. The key is the only basket fact.
  - Following hint 2 by topic leaves only the key. That is the exact shortcut the item's misconception warns against.
- **Fix, both parts:**
  1. Add one distractor that is about baskets but is NOT only in the basket text. One way is to add a sentence to p5, for example "Basket makers like it because it bends without breaking." Make sure it does not collide with C04's key.
  2. Rewrite hint 2 as a search strategy, for example "Look for each detail in 'Sweetgrass' first. If it is there, it is not only in the basket text."

**M7. SK-TT2c-C05 (Leo's note, two blanks). Hint 3 settles both blanks.**
- **Evidence:**
  - The stem says both statements are mistakes, so each blank is already down to two options.
  - Hint 3 says "'Sweetgrass' tells about the plant **and how it is dried**, but it never mentions grandparents or children." The first half removes "only 'Baskets…'" from blank 1, which leaves "both texts". The second half settles blank 2.
  - The B1 rule is that hint 3 may settle at most one blank.
- **Fix:** Delete "and how it is dried" from hint 3.

**M8. SK-TT2c-C08 (EBSR, "How does 'Three Bins' add…"). Hint 2 isolates the Part A key.**
- **Evidence:**
  - Hint 2 says "Think about what the school does with things that are not cans."
  - Three Part A choices are about cans or can metal: the magnet, the energy and aluminum. The key is the only choice about something that is not a can (food scraps).
- **Fix:** Use a strategy hint, for example "For each Part A choice, check: is it told in the school passage, the can passage, or both? For Part B, choose one sentence."

**M9. SK-TT2c-C10 (hot text, "a truck is part of recycling"). The prompt echoes the answer word.**
- **Evidence:**
  - The only two target sentences that contain "truck" are the two keys, p7:2:1 and p8:3:1.
  - That is the §6 rule 5 / Ltexts-5 pattern ("The answer word is not echoed in the stem"), and it makes a 2-point item a word search.
  - It also shares C01's stem frame and key logic ("Both passages tell that X. Choose the sentence from each passage…"). See S8.
- **Fix:** Reword the prompt without "truck", for example "Both passages tell how cans get from one place to the next place." Then p7:3:2 (blocks go to a factory) and p8:3:2 (scraps go to the compost pile) become real distractors. Adjust the hints to match. Better still, change the frame or format to clear S8 as well.

**M10. SK-TT2c-C06, match row 3, "that cans can be used again" keyed Both. The key is not explicit in the school text.** This answers the lead's question.
- **Evidence:**
  - "Three Bins at Oak Hill School" never says that cans are used again. It says:
    - the blue bin is "for cans and plastic bottles";
    - "the city's recycling truck picks up the cans and bottles";
    - Malia: "Now most of it gets used again."
  - Malia's "it" is the lunchroom's waste in general.
  - Getting to "cans are used again" needs two steps: recycling means reuse, and Malia's "most" includes cans. A careful child following the item's own rule can put the row under "From Old Can to New Can" only. That rule is "A row goes under Both only when each passage tells it", and the misconception line says "Each passage must really tell it."
  - My blind answer matched the key, but with low confidence.
- **Fix, either one:**
  - (a) Make the school text say it. For example, change Malia's line to "Our cans get made into new cans, and our food scraps turn into soil." That does not affect C07, C08 or C09: C08 still turns on food scraps, and C09 still needs the energy fact from p7. Also update C06's how, step 3.
  - (b) Replace the row with something both texts state outright, such as "that plastic bottles are recycled too". The evidence would be p7:2:1 or 2:4 and p8:2:2. Take care that the how does not quote C10's truck sentences.

## 3. SHOULD findings

### 3.T.T.2.a

**S1. SK-TT2a-C14 (Kayla's bike caption). The distractors are too weak, and hint 3 plus the figure leave only the key.**
- **Evidence:**
  - "Kayla riding her bike to school" fails because the figure has no rider, and the alt text says so.
  - "A bike race in the park" fails because there is only one bike.
  - Hint 3 rules out the race, and a glance at the picture rules out the rider. This is close to K-level for a DOK 2 item.
- **Fix:** Use distractors that test the item's own misconception, a caption that names one part instead of the whole. For example, "The chain and the pedal" and "How to fix a flat tire".

**S2. SK-TT2a-C05 (Grandpa's Tomato Tips). Shares facts and wording with 3.T.RA.1.b.**
- **Evidence:**
  - p5 (pumpkins) has "at least six hours of sun", and "the roots, not on the leaves".
  - SK-RA1b-P6 keys "They grow best with at least six hours of sun each day."
  - These are 6-gram matches. C05's key is different (the colors are not key), but §8 flags any six-word match.
- **Fix:** Use different care tips, for example mulch or picking off yellow leaves.

**S3. Together P1/P2 vs C04: the lead's question.** See §5.

**S4. 2.a set 3 has no similar item.**
- **Evidence:**
  - S01 is like C04 (set 1), S02 is like P4 and P3 (sets 1 and 2), and S03 is like C03 (set 1).
  - `check-content.js` reports that 11 of 15 core items have none, including every set-3 item.
  - §4.7 says one per set, mirroring that set.
- **Fix:** Fold this into the rewrite of S03 required by M2.

**S5. tt2-c-bike.svg: the "chain" leader ends on the frame, not on the chain.**
- **Evidence:**
  - The leader is `M98 244 L108 180`, so it ends at (108,180).
  - That point is on the chainstay (72,176 to 150,180, stroke 6).
  - The lower chain run passes at about y = 187.5 there. The leader crosses the chain but stops on the blue tube.
- **Fix:** End it at about (107,188). C14 does not turn on this, but a label must point at what it names.

### 3.T.T.2.b

**S6. SK-TT2b-C14 (lightning and thunder chain). Same key fact as the TS-CE coach model answer.**
- **Evidence:** TS-CE `coach.strong` says "Lightning heats the air so fast that it bursts out, and that push of air is the boom we hear." That is C14's key chain, in a lesson co-mapped to 3.T.T.2.b.
- **Fix:** Use a different science chain that is not on the site.

### 3.T.T.2.c

**S7. Sweetgrass passage, p6 sentence 2, "Long ago, their ancestors were brought here from West Africa."** This answers the lead's question.
- **Evidence:**
  - The sentence is accurate, but the passive voice hides who brought them and why.
  - A grade-3 reader can take it as ordinary migration.
  - The sources describe the craft's origin as the work of enslaved West Africans on rice plantations:
    - The Henry Ford: "made by enslaved West Africans and their descendants … flat 'fanners' used to winnow rice."
    - Britannica gives "slave basket" as an alternate name.
  - Naming slavery briefly and factually is grade-appropriate. It is also more respectful of the tradition the passage is honoring, and the title, "Baskets That Tell a Story", invites it.
- **Fix (owner's call, but recommended):** "Long ago, their ancestors were taken from West Africa and forced to work as enslaved people on rice farms along the coast. They kept the skill of weaving baskets from grass, and they used baskets to clean the rice." Keep p6 within the word count. No item turns on this sentence.

**S8. C01 and C10 share a stem frame and key logic** (§6 rule 1). Clear this when fixing M9.

**S9. C05 and C14 share a stem frame and key logic.** Both are "X's note has mistakes; choose which passage tells each fact" dropdowns with both/only options.
- **Fix:** Change one of them to a different task or format, for example a match or a "which question can only be answered with both texts" item.

**S10. p6 sentence 1, "On the Georgia coast, many Gullah Geechee families make sweetgrass baskets."**
- **Evidence:** The tradition runs through the Gullah Geechee corridor from North Carolina to Florida, and it is centred on the South Carolina Lowcountry (Mount Pleasant). "Many … on the Georgia coast" overstates the Georgia share.
- **Fix:** "Along the coasts of Georgia and South Carolina, many Gullah Geechee families…"

**S11. SK-TT2c-S01 (squirrels). Paraphrases a 3.T.SS.1.b Watch Me.**
- **Evidence:** The Watch Me reads "In the fall, they bury acorns in the ground. In the winter, they dig the acorns up again". S01's texts carry the same two facts.
- **Fix:** Change the animal and the facts, for example chipmunks storing seeds in cheek pouches. Keep the "different words" design ("the acorns they buried").

**S12. p10 sentence 2:3, C14's stem and C14's how: "someone pulled a chain".**
- **Evidence:** Britannica (Students) says closed cord nets were released by pulling a **cord**.
- **Fix:** Use "cord" or "string" in all three places.

## 4. NOTES

- **2.b p4 at 182 words.** This answers the lead's question. It is acceptable. §4.3 rule 2 sets 100 to 250 words for a new passage. The 60 to 180 in the author brief is a guide, and the passage is two words over at FK 3.0. If a trim is wanted, cut "then" from "the tallest tower in the world then".
- **2.b p4, "Many people laughed at his plan."** Sources record doubts and fears:
  - Burnham called the design "too fragile".
  - Visitors feared wind would topple it.
  - Linda Hall: "initial questions about safety".
  None of them records laughter. "Laughed" is a common picture-book dramatization. "Many people doubted his plan" is more accurate, and C09 still works with it.
- **Garrett Morgan facts (moot after M3).** FHWA confirms the two-position Stop/Go signals, the collision he saw, and the 1923 patent with its all-directional stop. It does not place the crash in Cleveland, and it compares his signal to today's flashing signals, not to the yellow light.
- **DOK claims.** 2.b C10 and C13 are closer to DOK 2 (locate the stated reason). DOK 3 still has seven or more per lesson either way.
- **2.b C10, hint 3** rules out a target that hint 2 already excluded, so hint 3 adds little.
- **2.b C09** ("Why does the author tell that people laughed?") is author's purpose framed as event linkage. It is acceptable under "relationship between historical events", but no Watch Me models it. The same goes for 2.a C10, placing a new sentence in a section.
- **2.b p5** is FK 1.9, low for grade 3. It is moot after M4.
- **2.c "can can".** C09's key ("The can can become…") and C06 row 5 ("how soon a recycled can can be back") read awkwardly aloud. Consider "A can put in the Recycle bin can become…"
- **Within-set hints (minor).**
  - 2.a C11's how lists the three sections, which half-answers C12.
  - 2.c C03's why places "bends without breaking" in "Sweetgrass", which is evidence for C04.
  Neither states a later key.
- **Fire station figure.** The "street" label has no leader and floats beside the doorway. The road drawn below it is clear enough.
- **Unverified detail.** "The smell can last for many years" (p5). I found no source either way. Consider "for a long time".
- **Process.** The author's leak check was a six-word n-gram scan only. All of M1 to M4 and S6 are paraphrase or topic-and-key-fact overlaps, which n-grams miss. For B3 onward, add a topic grep of the new passages' nouns (and the "key fact" of each item) against every lesson co-mapped to the same standard.
- **Repo state.** During this review, `js/data/lessons/T-SS.js` stopped parsing (`SyntaxError` near line 581). Another agent is presumably editing it. My `check-content.js --all` run, done earlier, passed with 0 failures. Re-run the gates on the combined candidate.

## 5. The lead's three questions

1. **2.c C06, "cans can be used again" as Both: is it explicit enough in the school text?** No. It is an inference from the Recycle bin plus Malia's general "most of it gets used again", and the item's own rule and misconception tell the child not to make that kind of inference. Treat it as a MUST (M10), with the fixes given there.
2. **Does 2.a Together P1's queen-eggs distractor pre-answer C04?**
   - **The distractor itself: no.** It describes paragraph 2 by its egg-laying sentence. If anything, that primes C04's distractor "Laying Eggs All Day", not the key "The Hive's Queen". It does not touch C04's real test, a heading that fits all three sentences versus one.
   - **Two other Together lines come closer:**
     - P1's addon how, step 2: "Paragraphs 2 to 5 each tell one job: **the queen**, the young workers…"
     - P2's addon hint 3: "'Every hive has one queen' tells about only one bee".
     Both label paragraph 2 as the queen paragraph before C04 asks for its heading.
   - The practical effect is small, because every sentence of paragraph 2 names the queen, so I rate it **SHOULD (S3)**.
   - **Fix:** P1 how step 2 becomes "Paragraphs 2 to 5 each tell about a different kind of bee and its job." P2 hint 3 should rule out a different sentence, such as "A honeybee hive can be home to thousands of bees", which tells how many bees there are, not what they do.
3. **Is the Ferris wheel passage at 182 words acceptable?** Yes. See §4.

## 6. Per-lesson checks that passed

**All three lessons:**
- **Keys:** one defensible answer each (54/54 blind agreement).
- **Points:** choose-two, two-slot dropdowns, matches, EBSRs and five-step orders are all 2 points.
- **DOK:** one DOK 1 in total (2.b C03), and seven DOK 3 per lesson.
- **Formats:** at least four formats per lesson, `mc` six or fewer per lesson, and five or more technology-enhanced formats.
- **Passage limits:** p1 carries five items in 2.a and four in 2.b, both within the limit of seven. Each lesson uses at least three texts.
- **Pairs:** 2.c has new pairs for set 2 and set 3.
- **Ramp:** each set covers at least three components, and the sets ramp from near to transfer.

**Per lesson:**
- **2.a components:**

  | Component | Items |
  |---|---|
  | Main idea | C03, C06, C11, C13, P5 |
  | Key details | P4, C05, P3, C10, P5 |
  | Key versus interesting | P4, C05, C08, C12 |
  | Design | P7, C04, C08, C09, C10, C14 |

- **2.b components:**

  | Component | Items |
  |---|---|
  | Procedure | C04, C11 to C13, C15 |
  | Science | P4, C02, C03, C14 |
  | History | C05, C06 to C10, C15 |
  | Time words | C03, C06, C08 |
  | Cause and effect | P4, C07, C10, C14 |

- **2.c components:**

  | Component | Items |
  |---|---|
  | In both texts | C01, C05, C06, C10, C12 |
  | In one text only | C02, C03, C05, C06, C14 |
  | Integrate | C04, C07, C08, C09, C11, C13, C15 |
  | Track the source | C05, C06, C14 |

- **Show Me How:** accurate on every item, apart from C06 row 3 (M10). Steps, answer and misconception line are present in each.
- **Addons:** every Practice Together item has hints and a how. I found no other ladder failures.
- **Hint 2 and named paragraphs:** in 2.b C07, paragraph 2 holds two Part B choices. In 2.c C11, each named passage holds two or more Part B choices.

**Teaching:**
- **2.a:** Learn It point 5 (unstated main idea, comparing paragraphs) and point 6 (heading and caption) model C03, C04, C13 and C14.
- **2.b:** Watch Me 3 (ice pops) models C04, C12 and C15.
- **2.c:** Watch Me 3 (raccoons) and point 5 model C05 and C14.

**Figures** (rendered with Playwright Chromium; PNGs in the scratch folder):
- **Fire station:** the labels are bunk room, kitchen, pole, gear rack, fire truck, big doors and street. They match the alt text and C09: the pole drops through the floor right beside the gear rack, which is beside the truck; the kitchen is upstairs; and the truck faces the doors.
- **Bike:** the labels are seat, handlebars, brake lever, pedal and chain, which match the alt text and C14. The one exception is S5.
- **People:** neither figure shows a person, so the Black-children default is not engaged.

**Gates:** `check-content.js --all` gave PASS, with 0 failures. The only warnings for these lessons are the similar-coverage informational lines. `readability.py`: all new passages are FK 1.9 to 4.5.

## 7. Fact verification

| Claim (lesson/passage) | Verdict | Source |
|---|---|---|
| Kudzu from Japan more than 100 years ago (shown 1876); 1930s payments to farmers for erosion; about a foot a day in summer; shade can kill plants beneath | Confirmed ("up to" a foot a day) | [Alabama Extension, History and Use of Kudzu](https://www.aces.edu/blog/topics/invasive-species/the-history-and-use-of-kudzu-in-the-southeastern-united-states/) |
| Kudzu flowers purple, grape-scented, made into jelly | Confirmed | [Alabama Extension](https://www.aces.edu/blog/topics/invasive-species/the-history-and-use-of-kudzu-in-the-southeastern-united-states/); [Kudzu Blossom Jelly recipe](https://www.food.com/recipe/kudzu-blossom-jelly-94579) |
| Ferris wheel: 1893 Chicago fair answering the 1889 Eiffel Tower; built over winter 1892–93; first turned June 1893 (test June 9, opened June 21); 264 ft; 36 cars of up to 60 people | Confirmed. 264 ft is taller than a 20-story building | [Wikipedia, Ferris Wheel (1893)](https://en.wikipedia.org/wiki/Ferris_Wheel_(1893)); [Smithsonian](https://www.smithsonianmag.com/history/history-ferris-wheel-180955300/); [Linda Hall Library](https://www.lindahall.org/about/news/scientist-of-the-day/george-washington-ferris) |
| Planners wanted to top the tower in Paris; plan was doubted; approved Dec 1892 | Confirmed ("laughed" is dramatized; see §4) | [Smithsonian](https://www.smithsonianmag.com/history/history-ferris-wheel-180955300/); [Linda Hall](https://www.lindahall.org/about/news/scientist-of-the-day/george-washington-ferris) |
| Wheel stood up to wind; visitors feared it would blow over | Supported | [LitCharts summary of Larson, *Devil in the White City*](https://www.litcharts.com/lit/the-devil-in-the-white-city/part-3-chapter-10-at-last) |
| Bike tube: find the hole by sound or water bubbles; sand the area so the patch bonds; thin glue left to dry; press the patch and hold about a minute | Confirmed. Park Tool says to let the glue dry for several minutes rather than "until dull", but the meaning is the same | [Park Tool, Inner tube repair](https://www.parktool.com/en-us/blog/repair-help/inner-tube-repair) |
| Gullah Geechee sweetgrass baskets: coiled, sewn with palmetto; origin with enslaved West Africans; handed down through generations; weeks or months per basket | Confirmed. Supports S7 and S10 | [The Henry Ford](https://www.thehenryford.org/collections/explore/articles/the-sweetgrass-basket-an-african-american-tradition); [Britannica](https://www.britannica.com/art/sweetgrass-basket) |
| Sweetgrass grows in sandy coastal soil; clumps 3–4 ft (about a third grader); purplish-pink plumes Aug–Dec ("late summer" OK); dried grass smells like fresh-mowed hay | Confirmed. "Smell lasts many years" not verified | [NC State Extension](https://plants.ces.ncsu.edu/plants/muhlenbergia-sericea/common-name/sweet-grass/); [Britannica](https://www.britannica.com/art/sweetgrass-basket) |
| Can recycling: magnet removes steel; cans baled, shredded, melted, rolled into sheets, made into cans; back on the shelf in about 60 days; much less energy (about 95%) than new metal | Confirmed | [Every Can Counts, can recycling](https://everycancounts.co.uk/can-recycling/) |
| Basketball: Naismith, Dec 1891, Springfield MA, indoor winter game for restless students; two peach baskets on the balcony rail about 10 ft up; soccer ball; 13 rules incl. no running with the ball; ladder to get the ball out | Confirmed | [Wikipedia, History of basketball](https://en.wikipedia.org/wiki/History_of_basketball); [History.com](https://www.history.com/news/how-a-canadian-invented-basketball); [Britannica Students](https://kids.britannica.com/students/article/basketball/273121) |
| Closed nets released by pulling a chain; then open nets (1912); backboards added to stop balcony spectators; hoop still 10 ft | Open nets, backboards and 10 ft confirmed. Release was by a **cord** (S12) | [Wikipedia, Net (basketball)](https://en.wikipedia.org/wiki/Net_(basketball)); [Britannica Students](https://kids.britannica.com/students/article/basketball/273121); [Saturday Evening Post](https://www.saturdayeveningpost.com/2015/03/hey-ncaa-nix-those-backboards/) |
| Fire station: pants kept scrunched around the boots so firefighters step in and pull up | Confirmed | [Montgomery County MD Fire & Rescue, firefighter gear](https://www2.montgomerycountymd.gov/content/frs-safe/kids/firefighter_gear/firefighter_gear.pdf) |
| Dressed in less than a minute | Plausible; NFPA 1710 turnout targets are 60–80 s | [IAFF NFPA 1710 summary](https://www.iaff.org/wp-content/uploads/English_Version_-_NFPA_1710_standards_DFSR_Summary_2022_new.pdf) |
| Horses pulled fire wagons; some stations keep dogs today | Confirmed | [FireRescue1, Dalmatians in the fire service](https://firerescue1.com/firefighting-history/the-history-of-dalmatians-in-the-fire-service) |
| Garrett Morgan (moot, M3) | Partly confirmed; see §4 | [FHWA, Garrett Morgan's traffic signal legacy](https://highways.dot.gov/highway-history/general-highway-history/safer-stop-and-go-garrett-morgans-traffic-signal-legacy) |
| Thunder: lightning heats air, which expands violently; light outruns sound | Confirmed | [Wikipedia, Thunder](https://en.wikipedia.org/wiki/Thunder) |

## 8. Leakage scan detail

**Method:**
- A six-word n-gram scan of every new passage, stem, choice, hint and how against all of `js/data` (`b2t2r1/ngram.js`). This includes the lessons' own `test`, `testB`, `teach` and `learn`.
- A topic and key-fact grep, then a section locator (`b2t2r1/where.js`).

**Content hits:**

| New content | Overlaps with | Finding |
|---|---|---|
| 2.a p4 box (dog) and C08 | SK-TSDESC-C08 | M1 |
| 2.a S03 | SS1b form A p2 | M2 |
| 2.b C05 | TS-CE p4 and C06 | M3 |
| 2.b p5 | SK-TSSEQ-C14 | M4 |
| 2.a C05 | RA1b p5 and P6 | S2 |
| 2.b C14 | TS-CE coach | S6 |
| 2.c S01 | SS1b Watch Me | S11 |

**Not leaks:**
- The remaining 6-gram hits are boilerplate: "best supports the answer to Part A", "A common mix-up is…", "is writing a report about how".
- Older existing passages (bees, monarch, hummingbirds) are outside this batch.
- 2.c's check passages p3 and p4 (alligators) are used by no core item.

# B2 review TS-1: TS-SEQ, TS-DESC, TS-CE and TS-CC

**Role:** independent content reviewer B2-TS-1 (blind solver). I did not write any of these lessons. I read the author logs (B2-b2b, B2-b2c) only after my blind answers were saved. I did not read the other reviewer's file.
**Scope:** `js/data/lessons/T-TS.js`, the TS-SEQ, TS-DESC, TS-CE and TS-CC blocks: `core` (sixty items), `similar` (twelve items), `addons` (P1 to P6 in each), the new passages, Learn It (`teach`) and Watch Me (`learn`). I also read `practice`, `test` and `testB` to check separation, and every other lesson, set and task file for cross-lesson leaks.
**Read-only:** I changed no lesson or code files and ran no git. This is the only file I wrote. No server was needed, so none was started.
**Snapshot:** I reviewed a copy taken at 17:57 (sha1 399cb9cc…). At the end of the review the live file had changed (sha1 690eb1e1…), but only in the TS-PS block. My four lessons were byte-identical (checked by deep comparison).

## 1. Blind solve

- **Method.**
  - `scratchpad/b2ts1/load.js` loads the snapshot through a stub `PP.addLesson`.
  - `scratchpad/b2ts1/blind.js` prints, for the four lessons, every passage used by core or similar items (with sentence numbers), every core item in set order (resolving `{ref}` from `practice`) and every similar item. Choices, Part A/B choices, hot-text targets, order steps, match rows and dropdown options are shuffled with seed 20261022. It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `sample` or `criteria`. The shuffle maps went to a separate file that I did not open.
  - The output is `scratchpad/b2ts1/blind.txt`. My answers are `scratchpad/b2ts1/answers.json`, saved at 17:59 before any comparison.
  - `scratchpad/b2ts1/cmp.js` maps my answers back through the shuffle maps and compares them with the keys (`cmp.txt`).
- **Result: 70 of 70 scored items agree (100%).** That is 58 scored core items plus twelve similar items. The two `cr` items (TS-CE C11, TS-CC C15) are not scored. My written answers meet every one of their criteria.
- **Disclosure: the solve was blind except for one item.** My first load of the live file hit a syntax error, because another agent was writing the file at that moment. Node's error message printed one `why` line: TS-DESC C04's ("The answer is 'A small hook at the tip of the bill…'"). So C04 is not blind. The clean blind sample is **69 of 69**. I never opened the raw source for any item before saving my answers, and the refs (P4, P5, P6) were solved blind this time.
- **Close calls while solving** (each is still defensible):
  - SEQ C07 Part B: the best evidence for the soil-to-sour link (p3:2:2 or 2:3) is not offered (SHOULD-2).
  - SEQ C15 slot 1: "Before your legs feel loose, stretch…" made me pause. I agree with the author that it is not defensible, because the jog is what loosens the legs.
  - CE C08: paragraph 1 (more cars) is arguably the first cause, but it is not offered, so the key is the best choice.
  - CC C02: the legs sentence counts as a movement difference only because of "for big jumps".
- **What the 100% means.** No item was hard to solve. Most DOK 3 items need a single inference (NOTE-14).

Legend: an order key of 01234 means the authored order. Match keys are column indexes in row order.

**TS-SEQ**

| Pos | Id | Key (short) | Agree |
|---|---|---|---|
| 1.1 (ref) | TSSEQ-P4 | authored order | yes |
| 1.2 | TSSEQ-C02 | It tells what you need, so you can gather everything… | yes |
| 1.3 (ref) | TSSEQ-P5 | The cream would spill out of the jar. | yes |
| 1.4 | TSSEQ-C04 | First would mean this is the starting step, but there is no buttermilk… | yes |
| 1.5 | TSSEQ-C05 | Paragraph A tells steps in order, Paragraph B gives details about one place | yes |
| 2.1 | TSSEQ-C06 | authored order | yes |
| 2.2 | TSSEQ-C07 | Passing through the soil makes the water sour… / "Limestone is soft enough…" | yes |
| 2.3 | TSSEQ-C08 | p3:4:1, p3:5:4 | yes |
| 2.4 | TSSEQ-C09 | asks a question that the article answers / tell the steps that turn rainwater into a cave | yes |
| 2.5 | TSSEQ-C10 | Move sentence 4 so it comes right after sentence 2. | yes |
| 3.1 | TSSEQ-C11 | Terminus, Marthasville, Marthasville, Atlanta | yes |
| 3.2 | TSSEQ-C12 | The railroad brought workers… / "Soon, people came to work on the railroad." | yes |
| 3.3 | TSSEQ-C13 | p4:6:3 | yes |
| 3.4 | TSSEQ-C14 | Air must leak out of the hole to make the bubbles… | yes |
| 3.5 | TSSEQ-C15 | Once / Last | yes |
| S | TSSEQ-S01 | authored order | yes |
| S | TSSEQ-S02 | The paint might slide off the damp wood. | yes |
| S | TSSEQ-S03 | Move sentence 3 so it comes right after sentence 1. | yes |

**TS-DESC**

| Pos | Id | Key (short) | Agree |
|---|---|---|---|
| 1.1 (ref) | TSDESC-P6 | dives headfirst + scoops up water and fish | yes |
| 1.2 | TSDESC-C02 | A Pouch That Works Like a Net | yes |
| 1.3 (ref) | TSDESC-P5 | also | yes |
| 1.4 | TSDESC-C04 | A small hook at the tip of the bill… | yes (key seen, see disclosure) |
| 1.5 | TSDESC-C05 | Paragraph 1 names the topic… + Each paragraph after that tells about one part… | yes |
| 2.1 | TSDESC-C06 | A fire engine carries the water, ladders and tools… / "So a fire engine carries everything with it." | yes |
| 2.2 | TSDESC-C07 | Ladders, Tools, Tools, Water (rows: cat, car door, knee, shed) | yes |
| 2.3 | TSDESC-C08 | p3:5:4 (Dalmatian), p3:7:5 (red trucks) | yes |
| 2.4 | TSDESC-C09 | For example, they use axes… | yes |
| 2.5 | TSDESC-C10 | the parts of one thing, and the parts do not happen in an order | yes |
| 3.1 | TSDESC-C11 | p4:1:2, p4:6:3 | yes |
| 3.2 | TSDESC-C12 | pocket like a shallow bowl + web like a small net | yes |
| 3.3 | TSDESC-C13 | It is a fun fact that does not support the main idea. | yes |
| 3.4 | TSDESC-C14 | A cactus has a body that is built to save water… | yes |
| 3.5 | TSDESC-C15 | In addition / such as | yes |
| S | TSDESC-S01 | long legs wade + long neck and sharp bill | yes |
| S | TSDESC-S02 | A Bin for Every Kind | yes |
| S | TSDESC-S03 | Pine cones come in many shapes and sizes. | yes |

**TS-CE**

| Pos | Id | Key (short) | Agree |
|---|---|---|---|
| 1.1 (ref) | TSCE-P4 | your brain gets a message / your body makes heat | yes |
| 1.2 (ref) | TSCE-P5 | A layer of warm air is trapped next to its body. | yes |
| 1.3 | TSCE-C03 | to tell about another effect that cold has on the body | yes |
| 1.4 | TSCE-C04 | She is not right. The water ran first… | yes |
| 1.5 | TSCE-C05 | dark room + skipping the plastic on a windy day | yes |
| 2.1 | TSCE-C06 | He saw one of the crashes… / "Garrett Morgan, an inventor in Ohio, saw one of these crashes." | yes |
| 2.2 | TSCE-C07 | because | yes |
| 2.3 | TSCE-C08 | Signals could switch from Go to Stop all at once. | yes |
| 2.4 | TSCE-C09 | time order and shows how one led to another | yes |
| 2.5 | TSCE-C10 | p4:4:2 | yes |
| 3.1 | TSCE-C11 | cr | criteria met |
| 3.2 | TSCE-C12 | bushes grew thick + young pines had a hard time | yes |
| 3.3 | TSCE-C13 | both, both, Fire only, Signal only (rows: chain, choice, nature, invention) | yes |
| 3.4 | TSCE-C14 | Pedaling will be easier… | yes |
| 3.5 | TSCE-C15 | "…wet from mopping, so two students slipped." + "…slipped because the floor was wet…" | yes |
| S | TSCE-S01 | He is not right. The pipe broke first… | yes |
| S | TSCE-S02 | Fertilizer… washed into the lake / "They found that fertilizer…" | yes |
| S | TSCE-S03 | Fewer birds came to visit the yard. | yes |

**TS-CC**

| Pos | Id | Key (short) | Agree |
|---|---|---|---|
| 1.1 (ref) | TSCC-P5 | Unlike | yes |
| 1.2 | TSCC-C02 | p1:3:2, p1:3:3 | yes |
| 1.3 (ref) | TSCC-P6 | Both are amphibians. + They eat lots of insects… | yes |
| 1.4 | TSCC-C04 | to help readers tell apart two animals that look alike | yes |
| 1.5 | TSCC-C05 | Both, Both, Scooter, Skateboard, Scooter | yes |
| 2.1 | TSCC-C06 | Both / learned to read, write and do math | yes |
| 2.2 | TSCC-C07 | all ages in one room / "One teacher taught every grade…" | yes |
| 2.3 | TSCC-C08 | one topic at a time, telling about 1900 and then about today | yes |
| 2.4 | TSCC-C09 | 4 / However, | yes |
| 2.5 | TSCC-C10 | Students use both of them for writing. | yes |
| 3.1 | TSCC-C11 | floats in shallow water / Both | yes |
| 3.2 | TSCC-C12 | a canoe, because it has room for more people and gear | yes |
| 3.3 | TSCC-C13 | Each tells how two things are alike, then their differences one topic at a time. | yes |
| 3.4 | TSCC-C14 | both frozen water + soft flakes, but hail… | yes |
| 3.5 | TSCC-C15 | cr | criteria met |
| S | TSCC-S01 | grows on trees + one hard pit | yes |
| S | TSCC-S02 | care for sick or hurt people / "Unlike a fire truck, it is filled with things like bandages…" | yes |
| S | TSCC-S03 | the rain jacket, because it keeps him dry without being too warm | yes |

## 2. Gates (run on the live tree, read-only)

| Gate | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures. My four lessons show only the accepted "9 of 15 core items have no similar item" warning |
| `node verification/check-writing.js` | 0 failures, 0 warnings |
| `node verification/check-instructional-copy.js` | 28 assertions passed |
| `python3 verification/readability.py` | **TS-SEQ p4 "How Atlanta Got Its Name": 146 words, FK 4.7, flagged "above grade 4.5"** (MUST-1). Every other new passage is in range: SEQ p3 3.2; DESC p3 4.1, p4 3.2; CE p4 4.3, p5 4.0, p6 3.6; CC p3 4.4, p4 3.9, p5 4.4. The script exits 0 even when it flags a passage (NOTE-13) |

## 3. Item checks (summary)

- **One defensible answer.** Every item has exactly one. No key is wrong against its passage. One key is wrong against history (MUST-2).
- **Alignment.** Checked against `official` in standards.js:
  - 3.T.SS.1.a (p. 29): "Describe how texts are arranged… using text features (e.g., map, captions) and organizational structures (e.g., cause/effect), referring to parts of texts using terms such as chapter or section."
  - 3.T.T.2.a (p. 33): "…facts and key details used to support the main idea."
  - 3.T.T.2.b (p. 33): "…the relationship between a series of historical events, scientific ideas or concepts, or steps in technical procedures in a text."
  - Each lesson covers its structure well. Sections and headings are named in SEQ p4, DESC p3 and CE C03. SEQ and CE each cover all three 3.T.T.2.b series: history, science and a procedure. DESC covers main idea, key details, key versus merely interesting details, headings and a text box. No item in these four lessons uses a map, caption or figure (NOTE-12).
- **Points.** Every choose-two ms and hot-text item is worth 2. Every five-step order item (SEQ P4, C06, S01) is worth 2. EBSR, match and two-slot dropdowns are worth 2. One-slot dropdowns and pick-one hot text are worth 1. The `cr` items carry no points, as the schema requires.
- **DOK.** No DOK 1 core items. DOK 3 counts: SEQ six, DESC five, CE nine, CC five. Some labels are generous (NOTE-6, SHOULD-4, SHOULD-9).
- **Formats and variety.** At most six mc per lesson. At least six formats per lesson. Every lesson has at least two use-evidence items, one compare item and two transfer items. The author tallies check out against the data.
- **Grade 3.** The new passages and stems are grade 3 in content. The weak spots are SEQ S01 (a copying task, SHOULD-5), CE C07 and CC P5 (effectively two live options, MUST-10 and SHOULD-11), and the older Watch Me examples (SHOULD-14).
- **Distinctness within each fifteen.** No two core items differ only by names or numbers. The nearest pairs (CE C07 and C15; SEQ C10 and C13; DESC C04, C08 and C13) differ in text and task. Across lessons, two TS-DESC items repeat 3.T.T.2.a frames (MUST-5).
- **`like` mappings.** All are honest. DESC S02 to C07 and SEQ S03 to C13 are loose but defensible.
- **Weak items from 03.** All are dealt with:
  - SEQ P6, CE P1, CE P6, CC P4 and DESC P1 were revised in place.
  - DESC P4 was revised and kept out of core.
  - I agree with the revisions.

## 4. Findings

### MUST

**MUST-1. TS-SEQ p4 is above the readability range (FK 4.7 > 4.5).**
- Evidence: `readability.py` prints `3.T.SS.1.a p4 words= 146 FK~ 4.7 <-- above grade 4.5`.
- The b2b log reports p4 at 144 words and FK 4.1. So the passage was edited after the log, or the log is wrong.
- Fix: shorten the long, polysyllabic sentences. For example, split "He suggested Atlanta, a name that came from the Western and Atlantic Railroad," and change "the daughter of a former governor" to "a governor's daughter". This edit can be combined with MUST-2 and SHOULD-6. Re-run the gate.

**MUST-2. TS-SEQ p4 and C11: the Terminus hotel is not historical, and C11 keys on it.**
- Evidence:
  - p4 paragraph 4 says that before the 1843 rename, "stores, houses and a hotel went up near the tracks."
  - "The first hotel built within city limits came in 1846 with the construction of the Atlanta Hotel," and Washington Hall followed later that year (Wikipedia, Hotels in Atlanta). That is after the town became Atlanta in 1845.
  - C11 row "A hotel went up near the tracks" is keyed **Terminus**, and its how and why repeat the claim.
- Fix: make the row something that really happened at Terminus.
  - Use a store (John Thrasher's store, 1839, the "Thrasherville" marker) or houses for workers: "Stores and houses went up near the tracks."
  - Change the C11 row to "The first store opened near the tracks" (Terminus) and update the how and why.
  - C12's key ("stores and homes were built near the tracks") still works.

**MUST-3. Cross-lesson leak: TS-CE p4 (Garrett Morgan) and 3.T.T.2.b SK-TT2b-C05.**
- Evidence:
  - TT2b-C05's stem (T-T2.js, line 1043) tells the same chain with the same key facts: signals switched from Stop to Go with no warning; crashes happened often; Morgan saw a crash at a corner in Ohio; he made a warning signal; "a yellow light today does a similar job."
  - Its key, "Signals gave no warning, crashes happened, and that led Morgan to invent a warning signal," answers TS-CE C08 (the first cause) and C09 (time order with causes), and supports C06.
  - Both were written in B2 at the same time (B2-b2a and B2-b2c logs). Neither author's n-gram scan could see the other's text. This breaks 04 §4.3 rule 4.
- Fix: the lead keeps one. TT2b-C05 is a single stem item, so replacing its text is cheaper than replacing CE p4, which carries six items.

**MUST-4. Cross-lesson leak: TS-SEQ C14 ("How to Patch a Bike Tube") and 3.T.T.2.b p5 ("How to Patch a Bike Tube").**
- Evidence:
  - Both have the same title and the same key facts: pump a little air into the tube, dip it in water, bubbles show the hole, rub with sandpaper, press on a patch.
  - TT2b-C11 orders those steps. TT2b-C13 is the same "what if you skipped a step" frame as SEQ C14 and P5.
  - Both are concurrent B2 work, as in MUST-3.
- Fix: give SEQ C14 a different procedure, one that no other lesson uses, with the same reasoning: one step makes the next possible.
- Also avoid bikes, because TS-CE C14 already uses bike tires (NOTE-9).

**MUST-5. Cross-lesson leaks around fire engines: TS-DESC p3, 3.T.T.2.a p4 and TS-CC p5.**
- **TS-DESC p3 "A Firehouse on Wheels" and 3.T.T.2.a p4 "Ready in a Flash" (fire station).**
  - Both are about the same subject, under the same standard (3.T.T.2.a).
  - TT2a p4's text box says "Today, some fire stations keep a dog as a pet." DESC p3 says "Long ago, many fire stations kept a spotted dog called a Dalmatian."
  - That sentence is a key of DESC C08 ("interesting facts that do NOT support the main idea"). TT2a-C08's key makes the same judgment about the same dog fact ("fun facts, but the article's point does not need them").
- **Duplicated item frames under 3.T.T.2.a.** DESC C02 and TT2a-C04 are both "The author wants to add a heading above paragraph N. Which heading fits paragraph N best?" DESC C13 and TT2a-C08 are both "Why did the author put the fact(s)… in a text box?" with the key "it is a fun fact". A child who does both lessons meets the same item twice.
- **TS-CC p5 "Two Trucks That Help" (S02).** It shares DESC p3's key facts ("A fire truck carries long hoses, tall ladders and tanks of water"). It also contradicts them:
  - DESC p3 says "every truck has a first-aid kit for people who are hurt", and DESC C07 keys "Firefighters bandage a scraped knee" to the truck's tools.
  - CC p5 says "Unlike a fire truck, it [the ambulance] is filled with things like bandages to help people who are hurt", and that sentence is S02's Part B key.
  - The b2b log says "no… fire-engine… text exists elsewhere." That was true when it was written, but b2c's CC p5 was written at the same time.
- Fix (the lead coordinates the three):
  - Replace CC S02's pair with a non-fire pair, for example a school bus and a city bus.
  - Replace the Dalmatian sentence in DESC p3 with a fun fact that TT2a does not use.
  - Re-frame DESC C02 or C13, or TT2a-C04 or C08, so the same standard does not ask the same question twice.

**MUST-6. Practice Together pre-answers a set 1 core item: TS-CC P2 addon hint 3 and P6.**
- Evidence: P2's hint 3 says "'Both are amphibians' still tells how they are alike." "Both are amphibians" is one of P6's two keys (core 1.3, "Which TWO sentences tell how frogs and toads are ALIKE?"). This breaks the B1 rule that Together must not pre-answer set 1.
- Fix: rule out a sentence that is not a P6 choice, for example "'Frogs and toads look a lot alike' still tells a likeness, so the switch has not happened yet."

**MUST-7. Practice Together pre-answers a set 1 core item: TS-CE P1 and P4.**
- Evidence:
  - P1's why reads "as a result, your brain tells your muscles to tighten and relax very fast". Its addon how and hint 2 narrate the same row: cold air, then the brain, then the muscles.
  - P4 (core 1.1) is the chain "Cold air cools your skin → {0} → your muscles tighten and relax very fast → {1}". Slot 1's only brain option, "your brain gets a message", is the key.
  - The b2c log says P1 "no longer mentions the brain's message". The word "message" is gone, but the brain link is still there.
- Fix: P1's why and how should say only "As a result, your muscles tighten and relax very fast, over and over," without the brain.

**MUST-8. Hint 2 points to the one sentence that holds the key: TS-CE C03.**
- Evidence: hint 2 reads "Reread the first sentence of paragraph 4. What does it say gives you goosebumps?" That sentence is "Cold can also give you goosebumps." It is the whole basis of the key ("another effect that cold has on the body"), and no distractor comes from it. This breaks the B1 hint 2 rule.
- Fix: "Say what paragraph 4 is about, then what paragraphs 2 and 3 are about. How does paragraph 4 fit with them?" The distractors come from paragraphs 3 and 4, so the hint covers wrong choices too.

**MUST-9. EBSR hint places and a pinpointing hint 3: TS-CE C06.**
- Hint 2 names "paragraph 3 and the end of paragraph 4".
  - Paragraph 3 holds only one Part B choice, the key. The B1 rule requires at least two Part B choices in every place a hint names.
  - It adds "Find the sentence where Morgan decides, and the clue word it begins with." That is "So", whose cause comes just before, so the hint walks the child to the key.
- Hint 3 ends "For Part B, choose the sentence that tells what happened just before he decided." Only the key does.
- Fix:
  - Hint 2: "Find where the article tells what Morgan decided. Then read what happened before it and after it, in paragraphs 1 to 4."
  - Hint 3: keep the patent rule-out, then end neutrally: "For Part B, check that your sentence shows your Part A answer."

**MUST-10. Hint 3 leaves only the key standing (04 §4.5 rule 3 and the ladder audit; the same pattern as B0 MUST-1).**

| Item | Hint 3 (abridged) | Why only the key is left |
|---|---|---|
| CE C07 | "Until… does not fit. Decide which part… is the cause…" | One slot. "So" is the student's own backward word, which the stem says must be fixed. Once "until" is out, only "because" remains |
| SEQ C04 | rules out "not a time clue word", then "Test each choice that is left against what happens in paragraph 4" | Paragraph 4 is where the buttermilk forms. Only the key mentions buttermilk; the other two choices ("does not matter much", "a story about a family") have nothing to do with paragraph 4 |
| SEQ C14 | rules out "easier to pull out", then "Test each choice that is left against step 4" | Step 4 is the bubbles. Only the key mentions bubbles |
| SEQ S02 | rules out "rough again", then "Test the others against step 3" | Step 3 says "because paint slides off wet wood", which is the key in the stem's own words (also SHOULD-4) |
| CC S02 | "For Part B, choose the sentence that is about the ambulance." | Only one Part B choice is about the ambulance |
| CE S02 | "For Part B, choose the sentence that tells the cause." | Only one Part B choice tells a cause |

- Fix: rule out at most one distractor with a reason, then end with a neutral question that does not name the key's evidence. For example:
  - SEQ C14: "…so that choice does not fit. Ask what has to be inside the tube for step 4 to work." Better still: rule out a different distractor and say no more.
  - EBSR items: "For Part B, check that the sentence shows your Part A answer."
  - CE C07: add a third plausible connector, for example "and then". Do not let hint 3 remove the only other live option.

**MUST-11. Hint 1 states the jobs of both keys: TS-DESC C15 (hint 1 and clue).**
- Evidence: "Describing clue words have jobs. Some add one more detail, and some show that examples are coming."
  - Slot 1 has one adding word (In addition, against Instead and First). Slot 2 has one example word (such as, against so and after).
  - A reader who sees hint 1 and hint 2 but not the choices can write "In addition" and "such as". The ladder audit fails.
- Fix: hint 1: "Describing clue words have jobs. Before each blank, ask what that sentence does for the one before it." Keep the job names in `how` only.

### SHOULD

**SHOULD-1. TS-SEQ C08: the prompt echoes the key (§6 rule 5).** The prompt asks for time words that tell "part of the process takes a VERY long time". One key is "After a very long time, the specks build up…". Fix: "Which TWO sentences use time words that tell how much time passes, not only the order?"

**SHOULD-2. TS-SEQ C07: Part B's best evidence is not offered.**
- Part A's key is about the soil making the water sour. Part B's key, "Limestone is soft enough that sour water can slowly eat it away," supports only the limestone half. It never mentions soil. The only Part B choice about soil is "First, rain falls and soaks into the ground."
- Fix: make the Part B key p3:2:2 ("As the water trickles through the soil, it picks up a gas from dead leaves and roots.") or p3:2:3 ("The gas turns the water a little bit sour…"). Keep "Limestone is soft…" out of the choices, so there is only one defensible answer.

**SHOULD-3. TS-SEQ C04: an implausible distractor, and the key is the only specific option (§6 rule 5).**
- "First would mean the passage tells a story about a family instead of giving steps" is absurd. The key is the only choice that names content (the buttermilk).
- Fix: replace it with a real time-word misreading, for example "First would mean this step happens at the same time as the shaking."

**SHOULD-4. TS-SEQ S02: the stem states the answer.**
- Step 3 says "let the wood dry for an hour, because paint slides off wet wood". That makes the item a lookup. It is not DOK 3, and it does not mirror P5 or C14, which need an inference.
- Fix: delete "because paint slides off wet wood". The child can still infer the answer from "damp cloth" and "let the wood dry".

**SHOULD-5. TS-SEQ S01 is a copying task.**
- The box lists the five steps in the order they happen, each with its time word, in nearly the same words as the choices. It is below grade 3 and below its DOK 2 label.
- Fix: tell the directions out of order, anchored by time words ("Before you water it, …", "Start by …"), so the child must rebuild the order.

**SHOULD-6. TS-SEQ p4: the history is compressed into one person and one disputed fact.**
- The passage reads "A railroad leader said that Marthasville was too long a name. He suggested Atlanta, a name that came from the Western and Atlantic Railroad."
- In the record, Richard Peters heard the complaints that the name was too long, and J. Edgar Thomson, chief engineer of the Georgia Railroad, suggested "Atlanta". The New Georgia Encyclopedia gives the name only as "supposedly a feminine version of the word Atlantic"; other sources say it was shortened from "Atlantica-Pacifica". The passage states one origin as fact.
- Fix: "Railroad men said Marthasville was too long a name. A railroad engineer suggested Atlanta. The name may come from the word Atlantic, as in the Western and Atlantic Railroad." Then adjust the C11 rows, and keep the passage within MUST-1's range.

**SHOULD-7. TS-DESC C09: hint 1 and the choices together narrow to the key.**
- Hint 1 says "Each describing clue word has a job". Only one choice is a describing clue word: For example. Next and Finally are time words, and However is a contrast word.
- Fix: hint 1: "Each clue word has a job. Ask what the second sentence does for the first one." Optionally, replace Next with a describing-family word that does not introduce an example, but only if it is clearly wrong.

**SHOULD-8. TS-DESC C11's how rules out two of C12's distractors in the same set.**
- C11's how step 4 says "Looking like a leather hand and coming in many colors tell only how a glove looks." Those are two of C12's three distractors. With C12's hint 3 (the thumb number), only C12's keys are left.
- Fix: C11's how: "The other sentences each tell about only one part of a glove or one thing about it."

**SHOULD-9. TS-DESC C13 is labelled DOK 3 but is recall, and two distractors are implausible.**
- The key restates teach point 5 ("A text box can hold a fun fact that is set apart because it is not a key detail"). "It tells the first step in making a baseball glove" and "It explains how the web helps…" are not real misreadings.
- Fix: label it DOK 2, or replace those two distractors with plausible ones, for example "It shows that a player does not need a glove" and "It tells the main idea in fewer words".

**SHOULD-10. TS-DESC Together P4 pre-locates C02 (set 1).**
- P4's why says "Diving is in paragraph 3, and draining is in paragraph 4." That tells the child what paragraph 4 is about (C02's key) and where two of C02's distractors come from. The author lists this as a residual link.
- Fix: drop the paragraph locations from P4's why and how.

**SHOULD-11. TS-CC P5 (ref, core 1.1) has effectively one live option.**
- "Finally most frogs, many toads live far from ponds" is not a sentence. Once hint 3 rules out Because, only Unlike reads well. Hint 1 also names a job for each of the three options.
- Fix: replace Finally with "Like", which is grammatical and wrong in meaning ("Like most frogs, many toads live far from ponds").

**SHOULD-12. TS-CC C04: hint 2 points to the sentence the key echoes.**
- Hint 2 says "Reread the first sentence and the last two sentences." The first sentence is "Frogs and toads look a lot alike", and the key is "…two animals that look alike". No distractor comes from those sentences.
- Fix: "Think about what the whole article does: what it tells first, what it tells next, and how it ends."

**SHOULD-13. TS-DESC S01 shares a key fact with 3.L.V.1.a practice passage p1, "Life in the Salt Marsh".**
- The salt-marsh passage says "A tall heron stands very still in the shallow water… When a fish swims by, the heron grabs it with its sharp beak."
- S01's distractor is "It stands very still and waits for a fish", and its key is "…its sharp bill grabs the fish." This breaks 04 §4.3 rule 4.
- Fix: use another hunter. Wading birds that strike with the bill should be avoided.

**SHOULD-14. Watch Me examples are pitched at grade 1 or 2 and do not model the DOK 3 tasks.**
- TS-CC Watch Me 1 ("a cat says meow, and a dog says woof") is kindergarten-like.
- None of the TS-CC examples models choosing between two things for a purpose (C12, S03) or how a comparison is organized (C08, C13). The teach points cover these in words only.
- Fix: replace one TS-CC Watch Me with a grade 3 model of "use a difference that matters to choose". This stays within the three-example limit. TS-SEQ (cereal) and TS-DESC (zebra) are similar but less pressing (NOTE-15).

### NOTE

- **NOTE-1.** The blind-solve disclosure is in §1. A concurrent write made Node print TS-DESC C04's `why`.
- **NOTE-2. TS-SEQ C06 how step 3 misquotes paragraph 5.** It says "Paragraph 5: after that, dripping water builds…", but paragraph 5 has no "after that". Its time words are "After a very long time".
- **NOTE-3. TS-SEQ P4 changed under the same id.** The ref's last step is now "Rinse the butter in cold water". The author flagged this, and the lead should confirm that no new id is needed. `core.rev` is new, so no saved record changes meaning.
- **NOTE-4. Three core refs have no `std`.** TS-DESC P5, TS-CE P5 and TS-CC P5 are practice items without `std`, so a component fallback of `std[0]` is undefined for them. check-content does not flag this. The lead should check how results tag them.
- **NOTE-5. Two similar items have no `misconception`.** TS-CE S02 and TS-CC S02 lack it (04 §4.6 asks for a mix-up line).
- **NOTE-6. Generous DOK labels.** TS-CE C12 (two consecutive sentences in paragraph 4), TS-CE C04 and TS-SEQ P5 are closer to DOK 2. This does not block.
- **NOTE-7. TS-CE C13 and TS-PS C13 share a frame.** Both ask "Is each sentence true for only one text or for both?", with hint 1 nearly word for word ("To compare two texts, check each sentence against one…"). They are different authors and different structures. The lead may vary one.
- **NOTE-8. 3.T.T.2.b reuses TS-SEQ's teaching example.** Its Learn It example ("How to plant a bean seed: First, fill a cup with soil… set the cup in a sunny window") repeats TS-SEQ's teach example. TS-SEQ's version is in the 20 October file, so this is 3.T.T.2.b's issue.
- **NOTE-9. Bike contexts repeat across siblings.** TS-SEQ C14 (tube) and TS-CE C14 (tires) both use bikes. Choose a non-bike context when fixing MUST-4.
- **NOTE-10. Rehearsed frame.** TS-CE C04, S01, Together P3, form A T2 and form B TB2 all practise the effect-first "because" frame. This is not an answer leak, and the author already notes it.
- **NOTE-11. Leak check against own test and testB is clean.** No core, similar, hint or how text in the four lessons shares a key fact with its own form A or form B. The checks were:
  - TS-SEQ: cobbler.
  - TS-DESC: live oak.
  - TS-CE: beaver pond and sea-oat dunes.
  - TS-CC: alligators.
  - The only n-gram hits are shared lesson phrasing, such as "tells the effect first and the cause after the clue word".
- **NOTE-12. Text features.** 3.T.SS.1.a names maps and captions. These four lessons use headings and a text box but no figure, map or caption. Coverage of figures must come from other lessons, which 02-coverage-matrix lists.
- **NOTE-13. The readability gate cannot fail.** `readability.py` exits 0 even when it flags a passage, so authors can miss a flag. The lead may want a nonzero exit.
- **NOTE-14. Difficulty.** The 100% agreement, with only four close calls, suggests the sets sit at the easy end of grade 3. Most DOK 3 items need a single inference.
- **NOTE-15. Low-level Watch Me examples.** TS-SEQ Watch Me 1 (Sam's cereal) and TS-DESC Watch Me 1 (zebra) are very easy. They are acceptable as warm-ups, because the teach points model the harder tasks.
- **NOTE-16. Small accuracy points.**
  - SEQ p4 calls 1840s Terminus "a busy little town". It was a handful of buildings, so "a small town" is closer.
  - CE p4 paragraph 5's "work in a similar way" for the yellow light is fair. FHWA describes Morgan's signal as comparable, not as the origin of the yellow light.

## 5. Facts checked (web)

| Claim | Verdict | Source |
|---|---|---|
| Garrett Morgan, Cleveland, Ohio; saw an automobile–carriage collision; two-position Stop/Go signals gave no interval, so collisions were common; his signal added an all-directional stop; patent granted 20 November 1923; compared (not credited) with today's yellow light | Correct as written in CE p4 | [FHWA, "Safer Stop and Go: Garrett Morgan's Traffic Signal Legacy"](https://highways.dot.gov/highway-history/general-highway-history/safer-stop-and-go-garrett-morgans-traffic-signal-legacy) |
| Longleaf: the grass stage lasts years; a dense needle cluster protects the bud from fire | Correct (CE p5 paragraph 2) | [Longleaf Alliance, Life stages](https://longleafalliance.org/what-is-longleaf/the-tree/life-stages) |
| Longleaf: frequent low surface fires shaped the forest | Correct (CE p5 paragraph 3) | [Longleaf Alliance, Built by fire](https://longleafalliance.org/what-is-longleaf/the-ecosystem/built-by-fire) |
| Longleaf: lightning-started fires; fire suppressing woody competition; fire exclusion contributing to loss; prescribed fire depending on wind and weather | Correct (CE p5 paragraphs 3 to 5) | [Alabama Extension FOR-2050](https://www.aces.edu/wp-content/uploads/2019/01/FOR-2050.pdf) |
| Terminus staked 1837 by the Western and Atlantic as the end of the line; renamed for former Gov. Wilson Lumpkin's daughter in 1843; Atlanta 1845, name "supposedly a feminine version of the word Atlantic", used by J. Edgar Thomson (Georgia Railroad) | Dates correct. The name origin is stated too firmly (SHOULD-6) | [New Georgia Encyclopedia, Atlanta](https://www.georgiaencyclopedia.org/articles/atlanta) |
| Peters heard complaints that Marthasville was too long; Thomson suggested Atlanta; changed December 1845 | Two people, not one (SHOULD-6) | [Wikipedia, Richard Peters (Atlanta)](https://en.wikipedia.org/wiki/Richard_Peters_(Atlanta)) |
| Thomson suggested "Atlantica-Pacifica", shortened to Atlanta; the city was incorporated in 1847 | Supports C13's 1847 stem | [The Atlanta 100, Atlanta name history](https://theatlanta100.com/history/2018/08/06/atlanta-name-history) |
| Terminus settlement 1839, Marthasville incorporated 1843, Atlanta incorporated 1847 | Consistent | [Wikipedia, Timeline of Atlanta](https://en.wikipedia.org/wiki/Timeline_of_Atlanta) |
| First hotel within city limits: the Atlanta Hotel, 1846; Washington Hall, 1846 | **Contradicts** the hotel at Terminus before 1843 (MUST-2) | [Wikipedia, Hotels in Atlanta](https://en.wikipedia.org/wiki/Hotels_in_Atlanta) |
| Rainwater picks up CO2 from soil and decaying matter, forms carbonic acid, dissolves limestone; dripping water builds stalactites | Correct (SEQ p3) | [NPS Ozark, How Stalactites and Stalagmites Form](https://www.nps.gov/ozar/learn/education/speleothems.htm) |
| Early baseball players caught bare-handed | Correct (DESC p4 box). Lightly checked from search results only | [Wikipedia, Baseball glove](https://en.wikipedia.org/wiki/Baseball_glove) (search result, not fetched) |

Not web-checked, because they are common knowledge with hedged wording: sun-print (cyanotype) behaviour, fertilizer runoff and algal blooms, rolling resistance of soft tyres, hail in warm thunderstorms, canoe and kayak capacity.

## 6. Cross-lesson leak scan

- **Method.** `scratchpad/b2ts1/ngram2.js` takes six-word n-grams of each lesson's core, similar, addons, new passages, teach and learn. It compares them with:
  - every other lesson;
  - every set and task file (including PT-1 and the mixed sets);
  - each lesson's own `test` and `testB` with their passages;
  - the three sibling lessons.
- N-grams that appear in four or more sources (shared directions and hint phrasing) are dropped. I then grepped all lesson passages and stems for the topics.
- **Content hits:**
  - MUST-3: Morgan and 3.T.T.2.b C05.
  - MUST-4: bike tube and 3.T.T.2.b p5, C11 and C13.
  - MUST-5: fire station and 3.T.T.2.a p4, C04 and C08; fire truck and TS-CC p5.
  - SHOULD-13: heron and 3.L.V.1.a p1.
  - NOTE-8: seed example and 3.T.T.2.b Learn It.
- Everything else was boilerplate, such as "Which sentence from the article best supports the answer to Part A" and "A common mix-up is…".
- All four collisions with 3.T.T.2.a and 3.T.T.2.b come from B2 authors working at the same time. A final cross-batch n-gram pass by the lead, after every B2 author is done, would catch the rest.

## 7. Verdicts

| Lesson | Verdict | Blocking findings |
|---|---|---|
| **TS-SEQ** | **CHANGES REQUIRED** | MUST-1 (p4 readability), MUST-2 (hotel at Terminus, C11), MUST-4 (bike tube leak, C14), MUST-10 (C04, C14 and S02 hint 3) |
| **TS-DESC** | **CHANGES REQUIRED** | MUST-5 (fire-station leak and duplicated 3.T.T.2.a frames: p3, C02, C08, C13), MUST-11 (C15 hint 1) |
| **TS-CE** | **CHANGES REQUIRED** | MUST-3 (Morgan leak, p4), MUST-7 (Together P1 and P4), MUST-8 (C03 hint 2), MUST-9 (C06 hints), MUST-10 (C07 and S02 hint 3) |
| **TS-CC** | **CHANGES REQUIRED** | MUST-5 (p5 and S02 fire-truck overlap and contradiction), MUST-6 (Together P2 and P6), MUST-10 (S02 hint 3) |

All four lessons are close. The keys, passages and structure are sound, and every key agreed in a blind solve. Most fixes are single-hint or single-sentence edits. The leak fixes (MUST-3, MUST-4 and MUST-5) need the lead to decide which lesson keeps each text.

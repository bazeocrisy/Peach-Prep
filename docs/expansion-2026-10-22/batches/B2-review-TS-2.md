# B2 review TS-2: TS-SEQ, TS-DESC, TS-CE and TS-CC (3.T.SS.1.a structure lessons)

**Role:** independent reviewer B2-TS-2 (blind solver). I wrote none of these lessons. I read the author logs (B2-b2b, B2-b2c) only after my blind answers were saved. I did not read the other reviewer's file.
**Scope:** `js/data/lessons/T-TS.js`, the TS-SEQ, TS-DESC, TS-CE and TS-CC blocks:
- `core` (60 items)
- `similar` (12 items)
- `addons`
- Practice Together
- Learn It (`teach`) and Watch Me (`learn`)

I also read `test` and `testB` to check separation.
**Read-only:** I changed no lesson or code files. My scratch files are in `scratchpad/b2rev2/`. I ran no git commands.

## 1. Blind solve

- **Method.**
  - `b2rev2/load.js` loads T-TS.js through a stub `PP.addLesson`.
  - `b2rev2/blind.js` prints each lesson's passages, every core item (with `{ref}` resolved from `practice`) and every similar item.
    - It shuffles choices, targets, order steps, match rows and dropdown options with seed **4813**, not 7.
    - It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `sample` or `criteria`.
    - These passages have no figures, so there was no alt text to print.
  - My answers went into `b2rev2/answers.json`, saved before any comparison. `b2rev2/cmp.js` then pulled out the keys and compared them.
- **Was it fully blind?** Yes.
  - Before solving, I printed only lesson structure: item ids, types and field names (`struct.js`, `shape.js`). That showed no keys.
  - I did not open the lesson source, and I had not seen the refs' keys.
- **Result: 70 of 70 scored items agree (100%).**
  - That is 58 scored core items and all 12 similar items.
  - The two `cr` items (TS-CE C11, TS-CC C15) have no key. My answers meet every criterion in their sample checklists.
- **Close calls while solving** (each is still defensible):
  - SEQ C07 Part B: the best evidence (p3 2:2–2:3, "the gas turns the water a little bit sour") is not a choice (NOTE-1).
  - CE C08: paragraph 1 (more cars) comes before the keyed "first cause" (NOTE-2).
  - CE C13 row 2: "a choice people made" fits the signal article only through Morgan's decision. That works.
  - CC C02: "Toads usually walk or take small hops" names only toads. It is a difference only when read with 3:2.

| Lesson | Set 1 | Set 2 | Set 3 | Similar | Agree |
|---|---|---|---|---|---|
| TS-SEQ | P4, C02, P5, C04, C05 | C06–C10 | C11–C15 | S01–S03 | 18/18 |
| TS-DESC | P6, C02, P5, C04, C05 | C06–C10 | C11–C15 | S01–S03 | 18/18 |
| TS-CE | P4, P5, C03, C04, C05 | C06–C10 | C11 (cr), C12–C15 | S01–S03 | 17/17 + cr |
| TS-CC | P5, C02, P6, C04, C05 | C06–C10 | C11–C14, C15 (cr) | S01–S03 | 17/17 + cr |

## 2. Browser check

- **Setup.** `node verification/serve.js . 8772` with the pre-installed Playwright Chromium at 1366×900, in browse mode. The script is `b2rev2/pw.py`, with a follow-up in `pw3.py`.
- **Coverage.** Every set of every lesson: twelve sets. On each set's first item I pressed Give me a hint three times, then Show me how. I then walked with Next to the first item that has a mapped similar item, opened it, took a hint and pressed Next.

| Check | Result |
|---|---|
| Hints 1, 2 and 3 appear in order | **Pass on all 12.** The labels read "Hint 1 of 3", "Hint 2 of 3" and "Hint 3 of 3". The text matches `hints[0..2]`, and the button then reads "No more hints" and is disabled. |
| Show me how appears | **Pass on all 12.** It shows the steps and "The answer…", or "One good answer…" for `cr` (CE C11, CC C15). The status reads "Answer shown. Hints used: three." |
| Try a similar question | **Pass on all 12 sets.** It opens the mapped item, headed "Extra question (not one of the fifteen)". Its hint and how work, Similar is hidden on it, and Next returns to the following core item. Items tested: SEQ S01, S01, S03; DESC S01, S02, S01; CE S03, S02, S03; CC S02, S01, S01. |
| Console errors | **None from the app.** The only console error on each page is one `net::ERR_FAILED` for `fonts.googleapis.com`. I aborted that request on purpose, as practice-own.py does, so it is not an app error. There were no page errors. |

At 390 px, the `cr` box is in the Question tab of the Passage/Question switch. That is the intended phone layout, not a fault.

## 3. Item checks (summary)

- **Alignment.** The official wording of 3.T.SS.1.a (p. 29) is "Describe how texts are arranged … using text features … and organizational structures (e.g., cause/effect), referring to parts of texts using terms such as chapter or section."
  - Each lesson asks the child to describe its own structure:
    - SEQ C05 and C09
    - DESC C05 and C10
    - CE C09 and C13
    - CC C08 and C13
  - Features and section terms appear in SEQ p4 (headings; C12 names "A Town Grows") and DESC p3 and p4 (headings, a text box).
  - 3.T.T.2.b (SEQ, CE: historical series, a science process, technical steps) and 3.T.T.2.a (DESC: main idea and key details) are both well covered.
- **Scoring: correct throughout.**
  - Every choose-two item is worth 2:
    - ms: DESC P6, C05, C12, S01; CE C05, C12, C15; CC P6, C14, S01
    - hottext with pick 2: SEQ C08; DESC C08, C11; CC C02
  - Every order item has five steps and is worth 2: SEQ P4, C06 and S01.
  - Two-slot dropdowns, match items and ebsr items are worth 2. One-slot dropdowns and pick-1 hottext items are worth 1.
  - The `cr` items have no points.
  - Together item CE P6 (choose three) is worth 2.
- **Formats and DOK.**
  - `mc` is used in six items in SEQ, DESC and CE, and in five in CC. Every lesson has at least four formats.
  - No item is DOK 1, and each lesson has at least five DOK 3 items.
  - The labels are reasonable, except SEQ S02 (SHOULD-5).
- **Text-structure terms.**
  - Sequence, description, cause/effect and compare/contrast are taught correctly in `teach.big` and the glossaries.
  - Every key matches its lesson's definition.
  - Two teach points overstate a rule: CC point 1 and DESC point 5 (SHOULD-1, SHOULD-2).
- **Separation.**
  - Forms A and B use p2 (and CE p3), and no core or similar item uses those passages.
  - I found no form A or B key fact in any core passage, hint or how.
  - There is one cross-lesson overlap between two new B2 passages (SHOULD-3).
- **Distinctness.**
  - No two core items differ only by names. The nearest twins are in-frame similar items, which is the design: CE C04 and S01, SEQ C10 and S03, CC C12 and S03.
- **Passages.**
  - The new passages are original, at grade 3 level and in the right length band.
  - Contexts include science, history, community, sports, school and family.

### Facts checked

| Claim | Verdict | Source |
|---|---|---|
| Garrett Morgan, Cleveland, Ohio, saw a car hit a horse-drawn carriage. His patent was granted Nov. 20, 1923. His signal had a third, all-directional stop. Earlier Stop/Go signals had no interval. | Accurate | https://highways.dot.gov/highway-history/general-highway-history/safer-stop-and-go-garrett-morgans-traffic-signal-legacy |
| Terminus marked as the end of the W&A line (1837 survey). Marthasville in 1843, for former Gov. Lumpkin's daughter. Atlanta in 1845, a name coined by J. Edgar Thomson from the W&A. Incorporated as a city on Dec. 29, 1847. | Accurate, except "workers began building" in 1837: construction began in March 1838 (SHOULD-8) | https://www.georgiaencyclopedia.org/articles/atlanta ; https://georgiahistory.com/ghmi_marker_updated/zero-mile-post/ ; https://scholarblogs.emory.edu/woodruff/fyi/discovering-atlanta-whats-in-a-name |
| Marthasville was renamed partly because it was "too long" | Supported: Georgia Railroad staff complained it took too long to write in log books | https://en.wikipedia.org/wiki/Richard_Peters_(Atlanta) |
| Longleaf grass stage: the needles protect the bud from low fire. Prescribed burns are used today. | Accurate | https://longleafalliance.org/what-is-longleaf/the-ecosystem/built-by-fire |
| Rainwater takes up CO2 from decaying plants in the soil, becomes acidic and dissolves limestone along cracks | Accurate | https://www.nps.gov/subjects/caves/upload/Day2-Making-a-Cave-Student-1.pdf |
| Brown pelicans fold their wings and dive. The pouch is a dip net that drains before the bird swallows. The bill has a hooked tip. They live on the Atlantic coast. | Accurate | https://www.nationalzoo.si.edu/node/6826 |

## 4. Findings

### MUST

**MUST-1. Hint 1 settles the verdict on the "is she right?" items. Items: TS-CE C04 and TS-CE S01.**
- **Evidence.**
  - C04 h1: "The cause always happens first in time, even when a sentence tells it second." The sister's claim is exactly "the wet floor is the cause, because the sentence tells it first."
    - So h1 rejects both "She is right" choices, and h2 ("Think about what Marcus did and what happened to the floor") gives the reason.
    - With h1 and h2 and no choices, a reader can write the key: "She is not right; the water ran first and made the floor wet."
    - h3 then rules out A, which leaves only C standing against the absurd D.
  - S01 h1 says the same thing, and adds "Because comes just before the cause". That refutes A and settles the item.
- **Fix.**
  - Make h1 a strategy that does not decide the claim. For example: "To test a cause, picture the two events as they really happen. Which one would you see first?"
  - Let h3 rule out D ("the sentence has the clue word because, so it does tell a cause"), not the rule-based "She is right" choice.

**MUST-2. Hint 2 points to the one sentence that holds the key, and asks the question the key answers. Items: TS-CE C03, TS-CC C04 and TS-CC C10.**
- **CE C03.** h2: "Reread the first sentence of paragraph 4. What does it say gives you goosebumps?"
  - The answer, "cold", is the only word that tells the key ("another effect that cold has on the body") from the distractors.
  - No distractor comes from 4:1.
  - **Fix:** "Reread paragraph 4, then paragraphs 2 and 3. Ask how what paragraph 4 tells about connects to the rest of the article."
- **CC C04.** h2: "Reread the first sentence and the last two sentences of the article."
  - Those sentences are "Frogs and toads look a lot alike" and "Is it a frog or a toad?". They are the whole basis of the key ("help readers tell apart two animals that look alike"), and no distractor comes from them.
  - **Fix:** "Think about what each paragraph does. Then ask what a reader can do after reading all of them."
- **CC C10.** h2: "What do students do with slates, and what do students do with paper?"
  - The answer is "write on them", which is the key.
  - **Fix:** "Reread paragraph 4. List what it says about slates and what it says about paper." That locates the evidence without asking the key question.

**MUST-3. Part B is narrowed to the key. Items: TS-CE C06 and TS-CC S02.**
- **CE C06.**
  - h2 names "paragraph 3 and the end of paragraph 4". Paragraph 3 holds one Part B choice, the key. That breaks the B1 rule that every place a hint names must hold at least two Part B choices.
  - h2 also says to find "the sentence where Morgan decides, and the clue word it begins with" (So).
  - h3 then says "For Part B, choose the sentence that tells what happened just before he decided". That describes 3:1, the key, and nothing else.
  - **Fix:** h2 could say "Reread paragraphs 2 and 3, and find the sentence where Morgan decides." (BC is in paragraph 1, so name paragraphs 1 to 3 if two choices must be covered.) h3 Part B could say "choose the sentence that supports your Part A answer, not one that tells what happened later."
- **CC S02.**
  - h3: "For Part B, choose the sentence that is about the ambulance."
  - Only BB is about the ambulance. BA is about the fire truck, and BC and BD are about both.
  - **Fix:** "For Part B, choose a sentence that tells something only one of the trucks has." That leaves BA and BB.

**MUST-4. The stem's own wrong word is one of the options, so hint 3 leaves only the key. Items: TS-CE C07 and TS-CC C09 (slot 2).**
- **CE C07.**
  - The stem says the clue word so makes the sentence backward, and the options are until, so and because.
  - So is excluded by the stem itself. h3 rules out until, which leaves only because.
- **CC C09.**
  - Slot 2 offers "Also," (the word the stem calls wrong), "However," and "For example,". h3 rules out For example, which leaves only However.
  - Slot 1 is trivial: sentence 4 is the only sentence that begins with a clue word. Sentence 3 begins "In both", which is not a sentence-opening clue word, and sentences 2 and 5 have none.
- **Fix.**
  - CE C07: replace so with another effect-side word that makes the same backward error, "as a result". The options become "until / as a result / because".
  - CC C09: replace "Also," with "In addition," (the same adding job). Also give another sentence a correct opening clue word, for example "(3) Also, in both, students learn to read and write.", so slot 1 is a real choice.

**MUST-5. Hint 3 rules out one choice, then sends the child to the only place that supports the key. Items: TS-SEQ C04 and TS-SEQ C14.**
- **SEQ C04.**
  - h3 rules out A, then says "Test each choice that is left against what happens in paragraph 4."
  - Paragraph 4 is where the buttermilk forms, and only the key mentions it ("no buttermilk until after the shaking"). B (family story) and C (step does not matter) have nothing to test there.
- **SEQ C14.**
  - h3 rules out B, then says "Test each choice that is left against step 4."
  - Step 4 is the bubble step, and only the key mentions bubbles. A (the patch) and C (drying) belong to step 5.
- **Fix.**
  - End h3 neutrally, without naming the key's location. For example: "Test each choice that is left: does the text say it, or does it only sound possible?"
  - Or rule out a second distractor with a reason and stop there.
  - For C04, consider a stronger distractor in place of B or C. A plausible one is "First would mean the step happens before the cream is poured."

**MUST-6. Hint 2 echoes the keys' own frame. Item: TS-DESC C05.**
- **Evidence.**
  - h2: "Look at what paragraph 1 does. Then look at what each later paragraph is about."
  - The two keys begin "Paragraph 1 names the topic…" and "Each paragraph after that tells about one part…".
  - With h1 ("a description tells about one thing and gives details that tell more about it") and h2, a reader can write both keys without the choices.
- **Fix.** "Think about how the passage is built: what kind of information does each paragraph give, and do the paragraphs follow an order? Choose two."

### SHOULD

**SHOULD-1. TS-CC teach point 1 states the set 3 key almost word for word, and gives only one compare pattern.**
- Point 1: "…goes back and forth between them. Many authors tell how the things are alike first, then tell the differences one topic at a time."
- C13's key: "Each tells how two things are alike, then tells their differences one topic at a time."
- So C13 becomes recall of Learn It, and C08's key ("one topic at a time") also comes straight from it.
- The point also presents back-and-forth as how authors compare in general. But all-of-one-then-all-of-the-other is a real pattern, and it is C08's distractor A.
- **Fix:** name both patterns ("Some authors tell all about one thing and then the other. Others go one topic at a time, telling about both."). Drop the alike-first sentence, or reword it so it does not match the C13 key.

**SHOULD-2. TS-DESC teach point 5 turns a text box into a rule: "A text box can hold a fun fact that is set apart because it is not a key detail."**
- Text boxes often hold related, supporting information, so this overgeneralizes. It also turns C13 (DOK 3, "Why did the author put the fact … in a text box?") into recall of the teach line.
- C13's how repeats the claim: "A box often holds an extra fact that is fun but not a key detail."
- **Fix:** "A text box sets some facts apart. Ask whether the fact in the box tells more about the main idea, or is just interesting." Make the same change to C13's misconception line.

**SHOULD-3. Two new B2 passages share key facts across lessons (04 §4.3 rule 4).**
- TS-DESC p3, "A Firehouse on Wheels", says a fire engine carries "a big tank … of water", "long hoses", ladders and "a first-aid kit for people who are hurt".
- TS-CC p5, "Two Trucks That Help" (used by S02), says a fire truck "carries long hoses, tall ladders and tanks of water", and the ambulance has "bandages to help people who are hurt".
- Both were written at the same time by different authors. The b2b log says "no … fire-engine text exists elsewhere", which was true when it was written.
- **Fix:** give TS-CC S02 a different pair, for example a city bus and a school bus, or a garbage truck and a recycling truck.

**SHOULD-4. Practice Together TS-DESC P3 settles the main idea that set 1 C04 needs.**
- P3 ("What is this passage mostly about?") keys "how a brown pelican's body helps it catch fish".
- C04 then asks which added sentence "would best support the passage's main idea", and C04's how step 1 is exactly P3's key.
- That gives away half of a set 1 core item, which the B1 rule forbids.
- The b2b log trimmed P3's `why` with C05 in mind, but did not consider C04.
- **Fix:** do one of these:
  - re-aim P3 at a paragraph main idea, as long as it is not paragraph 4, which C02 uses;
  - re-aim C04 at a section-level idea, for example a sentence to add to paragraph 4.

**SHOULD-5. TS-SEQ S02 (similar to P5 and C14, DOK 3) has its answer stated in the stem.**
- Step 3 reads "Then let the wood dry for an hour, because paint slides off wet wood." The key is "The paint might slide off the damp wood."
- That makes it a lookup, not a prediction, and h3 then points to step 3.
- **Fix:** delete the because clause, so the child has to infer it from the damp cloth in step 2. Alternatively, keep the clause and relabel the item DOK 2.

**SHOULD-6. Hint 1 or 2 leans toward the key. Items: TS-CE C09 and TS-CE P5.**
- **CE C09.**
  - h1 ends with "A text can also use two of these at once", and h2 lists because, as a result and so.
  - Together they point at the only "time order + cause" choice.
  - **Fix:** drop the last sentence of h1. Learn It point 5 already teaches it.
- **CE P5 (ref, set 1).**
  - h2 ("Find the sentence that tells what goosebumps do. Then read on…") sends the child to 4:3, the only sentence about a furry animal. No distractor comes from there.
  - The stem already names paragraph 4 and the furry animal, so the harm is small.
  - **Fix:** a strategy step, for example "Find the cause in paragraph 4 first, then ask what it makes happen for an animal with fur."

**SHOULD-7. A Show me how step misquotes the text. Item: TS-SEQ C06, how step 3.**
- The step says "Paragraph 5: after that, dripping water builds stone icicles."
- Paragraph 5 uses "After a very long time", not "after that", and the item's own `why` gets it right.
- A child who is checking clue words will be confused.
- **Fix:** "Paragraph 5: after a very long time, dripping water builds stone icicles."

**SHOULD-8. One fact in TS-SEQ p4 is slightly off.**
- "In 1837, workers began building a railroad that would run north to Tennessee."
- The W&A route was surveyed from May 1837, and construction began in March 1838 (Georgia Historical Society marker, cited above).
- The 1837 marking of the end point is right.
- **Fix:** "In 1837, railroad planners chose the spot where a new railroad to Tennessee would end." This keeps C11 to C13 unchanged.

### NOTE

1. **TS-SEQ C07.** The strongest support for Part A ("the gas turns the water a little bit sour", 2:3) is not offered. The key, "Limestone is soft enough that sour water can slowly eat it away", is the best of the four, so the item stands.
2. **TS-CE C08.** "Which event in the article came first…" is not literally true, because paragraph 1 (more cars) is earlier. "Which of these events came first…" would be tighter (the author flags this in the b2c log §8.2).
3. **TS-SEQ C08 and C10.** After h1 and h3, three of six targets (C08) or two of four choices (C10: h3's "sentence 5 already belongs at the end" also rules out A) remain. That is acceptable, but tight.
4. **Missing misconception lines.** These are allowed, but 04 §4.6 asks for one: the CE P2 addon, CE S02, the CC P1, P2 and P3 addons, and CC S02. The player skips an empty one (player.js:319), so nothing breaks.
5. **`like` honesty.** All twelve are fair. CE S02 is listed as like C10, but S02 asks for a cause and C10 for an effect, so that mapping is loose. DESC S02 matches C07 only loosely.
6. **Watch Me examples** are very easy (Sam's cereal, cats and dogs, zebra stripes). That is acceptable for modelling, but one grade 3 example per lesson would better match the fifteen.
7. **TS-CC P5** (ref, one slot) has one contrast word among three options. That is easy but legitimate.
8. **TS-CE C11.** h3 suggests flipping a "so" sentence, and 4:3 (the key of C12) is one of them. A child who writes that sentence has done their own work, so this is not a giveaway.
9. **Author residual list (b2b §7).** I confirm:
   - SEQ C15 "Before" is indefensible.
   - The DESC C11→C12 chain is acceptable.
   - The SEQ P4→C04 link is mild.
   - Together DESC P1/P2 rule out one distractor each and answer nothing.
   - The DESC C10→C06 hint is mild, and C10 comes after C06.
10. **Gate.** `check-content.js --all` reports PASS (0 failures). The only warnings for these lessons are the accepted nine-of-fifteen items without a similar item.

## 5. Verdicts

| Lesson | Verdict | Blocking findings |
|---|---|---|
| **TS-SEQ** | **CHANGES REQUIRED** | MUST-5 (C04, C14) |
| **TS-DESC** | **CHANGES REQUIRED** | MUST-6 (C05) |
| **TS-CE** | **CHANGES REQUIRED** | MUST-1 (C04, S01), MUST-2 (C03), MUST-3 (C06), MUST-4 (C07) |
| **TS-CC** | **CHANGES REQUIRED** | MUST-2 (C04, C10), MUST-3 (S02), MUST-4 (C09) |

Every key is right and every item has one defensible answer (70 of 70 agree). Scoring follows the rules, and the player works. The blocking issues are all in the hint ladder, plus one item design that leaves two options (MUST-4). Each fix is a short text change that keeps item ids and keys, except the option swaps in MUST-4. After those edits, I would expect all four lessons to pass.

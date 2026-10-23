# B2 author log (b2c): TS-CE and TS-CC

**Role:** content author b2c, batch B2. **This is not a review.** Nothing here certifies the items. Reviewers should blind-solve before reading this log.

**File changed:** `js/data/lessons/T-TS.js`, in the TS-CE and TS-CC blocks only. TS-SEQ, TS-PS and TS-DESC were not touched.

**What changed in each block:**
- New passages appended after the existing ones.
- New keys `core`, `similar` and `addons`, placed between `practice` and `test`.
- Wording of some `teach.points` (§5).
- Three weak practice items revised in place, with ids and keys unchanged (§6).
- Nothing in `test`, `testB`, `clues`, `coach` or `learn` changed, and no existing id changed.

The lead's B1-review rules (appended to AUTHOR-BRIEF.md) were applied to every item. See §7.

## 1. Gates

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | 0 failures in my lessons. The only warnings in my lessons are the "N of 15 core items have no similar item" notices (§4). At my last run, one failure was in another author's lesson (3.T.T.4.a C10). |
| `python3 verification/readability.py` | Every new passage is between FK 2.7 and 4.4 (§2). Three passages first read above 4.5 and were simplified. |
| `check-writing.js`, `check-instructional-copy.js` | pass |
| Six-word n-gram scan (`scratchpad/b2c/ngram.py`): my new passages and items against every other lesson, set, task and check | Only shared directions and lesson boilerplate match. Content hits that were fixed: (a) **my first set 2 history passage (Terminus/Atlanta) duplicated TS-SEQ's new p4, "How Atlanta Got Its Name"**, so I replaced it. (b) The second try (rural electric lines, 1920s farms) shared its key fact with 3.T.C.1.? p1 "A Letter from the Farm" (no electricity on a 1928 farm, oil lamp), so it was replaced too. The final text is Garrett Morgan's traffic signal. (c) My C09 key first said "each event causes the next one", which is form B TB1's prompt wording, so it was reworded. (d) "tiny green living things called algae grow" matched a T-RA sloth source, so it now says "plant-like". |
| Browser smoke test, port 8753 (Playwright, 390 wide) | `#skill/<k>`, `/learn`, `/try`, `#play/SK:<k>:p`, `:y`, `:y2` and `:y3` load with no page errors for both lessons, and each core set opens on its first item. I did not step through every item. |

## 2. Passages added

All are original and never used by `test` or `testB`.

| Lesson | Id | Title | Words / FK | Domain | Used by |
|---|---|---|---|---|---|
| TS-CE | p4 | A Signal That Saved Lives (Garrett Morgan, 1923) | 177 / 4.3 | community / history | C06 to C10, C13 |
| TS-CE | p5 | Fire in the Pine Forest (longleaf pine and fire) | 165 / 4.0 | nature / science, with a short history series | C11, C12, C13 |
| TS-CE | p6 | Why Did the Lake Turn Green? | 109 / 3.6 | nature / community | S02 only |
| TS-CC | p3 | School Then and Now (1900 and today) | 157 / 4.4 | school / history | C06, C07, C08, C10, C13 |
| TS-CC | p4 | Canoe or Kayak? (Chattahoochee River) | 161 / 3.9 | sports / recreation, nature | C11, C12, C13 |
| TS-CC | p5 | Two Trucks That Clear the Road (street sweeper and snowplow; replaced the fire truck text after the B2 review) | 108 / 4.1 | community | S02 only |

Short new stems: TS-CE C04 (bathroom), C05 (sun-print how-to), C14 (bike tires), C15 (wet hallway), S01 (library pipe), S03 (bird feeder). TS-CC C05 (scooter and skateboard), C09 (student draft), C11 (student chart), C14 (hail and snow facts), C15 (path or bus), S01 (peaches and plums), S03 (two coats).

**Fact notes.**
- Longleaf pines: the grass stage, needles shielding the bud, fire clearing oaks and brush, fire suppression letting hardwoods shade out seedlings, and modern prescribed burns are all standard longleaf ecology.
- Garrett Morgan: patented a three-position traffic signal in 1923 after seeing a crash at an intersection. The text says only that today's yellow light "works in a similar way". It does not claim he invented the yellow light.
- Sun prints: cyanotype paper rinses to blue where it was exposed and white where it was covered.
- Kayaks: "Many kayaks are closed on top", because sit-on-top kayaks exist. Canoes "often" carry two or three people.
- Hail can fall in warm-weather thunderstorms.

**Themes avoided:**
- TS-CE form A (beaver dam, pond and lodge) and form B (sea oats, dunes, wind, storms and waves).
- TS-CE practice p1 (shivering), and the flood, ice cream and dog-gate examples in Learn It and Watch Me.
- TS-CC form A (alligators and crocodiles, reptiles, snouts and teeth).
- TS-CC teach and Watch Me (baseball and softball, cats and dogs, bike and car, apples and limes, bees and wasps).
- Chess (a T-C chess club letter), hamsters, kites, the rain cycle, peanuts and monarchs.
- Atlanta and Terminus (TS-SEQ p4), and 1920s farm electricity (T-C letter).

## 3. The fifteen

### TS-CE (3.T.SS.1.a "organizational structures (e.g., cause/effect)… parts of texts… section"; 3.T.T.2.b "relationship between a series of historical events, scientific ideas or concepts, or steps in technical procedures")

**Components**
- A: find the cause (why)
- B: find the effect (what happened)
- C: clue words and their direction (because and since before a cause; so and as a result before an effect)
- D: the cause happens first even when it is told second. This is the coach's mix-up and the hardest component.
- E: chains (one effect causes the next; a series of scientific ideas or historical events)
- F: how a text or section is arranged as cause and effect, including how a step in a procedure causes the result

| # | Id | Set | Comp | Task | Format | Pts | DOK | Text | How it differs from the others |
|---|---|---|---|---|---|---|---|---|---|
| 1 | SK-TSCE-P4 (ref) | 1 | E | construct | dropdown | 2 | 2 | p1 | The only item that builds a science chain |
| 2 | SK-TSCE-P5 (ref) | 1 | B | identify | mc | 1 | 2 | p1 | One effect, stated in paragraph 4 |
| 3 | SK-TSCE-C03 | 1 | F/B | explain (why a section is there) | mc | 1 | 3 | p1 | The job of the goosebumps section. Distractor: two effects of the same cause must cause each other |
| 4 | SK-TSCE-C04 | 1 | D | explain (judge a claim) | mc | 1 | 2 | stem (home) | Judges a sibling's claim that "the first part is the cause" |
| 5 | SK-TSCE-C05 | 1 | F/A | transfer (technical procedure) | ms | 2 | 3 | stem (sun print) | Which mistakes would change the result. Only changes to where the light reaches matter |
| 6 | SK-TSCE-C06 | 2 | A | use evidence | ebsr | 2 | 2 | p4 | Why Morgan decided. Distractors that come later (the patent) |
| 7 | SK-TSCE-C07 | 2 | C/D | edit | dropdown | 1 | 2 | p4 (stem holds the student's sentence) | Fixes a backward "so" with "because" |
| 8 | SK-TSCE-C08 | 2 | E | identify (first cause in a historical series) | mc | 1 | 3 | p4 | The start of the chain. Distractors from the middle and the end |
| 9 | SK-TSCE-C09 | 2 | F | identify (structure) | mc | 1 | 3 | p4 | Time order plus cause, against time order only, a how-to, and compare (only the last paragraph mentions today) |
| 10 | SK-TSCE-C10 | 2 | B | use evidence | hottext | 1 | 2 | p4 | An effect of the NEW signal. The traps are effects of the old signal and the sentence that names the signal itself |
| 11 | SK-TSCE-C11 | 3 | D | construct (written) | **cr** | 0 | 3 | p5 | Writes an effect-first sentence with because. Never scored; sample and three criteria |
| 12 | SK-TSCE-C12 | 3 | E/B | use evidence (two links) | ms | 2 | 3 | p5 | Effects of putting out fires, one and two links away. Distractors are effects of fire |
| 13 | SK-TSCE-C13 | 3 | F/E | compare (two texts) | match | 2 | 3 | p4 + p5 | Two rows fit both texts and two fit only one |
| 14 | SK-TSCE-C14 | 3 | E/B | transfer (predict) | mc | 1 | 3 | stem (bike, sports) | Predicts the effect once the cause is removed. The distractor flips the cause |
| 15 | SK-TSCE-C15 | 3 | C/D | transfer / edit (combine) | ms | 2 | 2 | stem (school hallway) | Chooses the two correct joins: one with so and one with because. The traps are both backward forms and a "but" |

**Tallies**
- **Points:** 20 scored, plus the cr item.
- **Formats:** seven. mc 6 (the limit), ms 3, dropdown 2, ebsr 1, hottext 1, match 1, cr 1. Eight items use technology-enhanced formats.
- **DOK:** DOK 3 on eight items (3, 5, 8, 9, 11, 12, 13, 14), DOK 2 on seven, DOK 1 on none. Item 4 was relabelled DOK 2 after the B2 review.
- **Tasks:**
  - identify: 2, 8, 9
  - explain: 3, 4
  - evidence: 6, 10, 12
  - edit: 7, 15
  - construct: 1, 11
  - compare: 13
  - transfer: 5, 14, 15
- **Components:**
  - A: 5, 6
  - B: 2, 3, 10, 12, 14
  - C: 7, 15
  - D: 4, 7, 11, 15. It appears in every set.
  - E: 1, 8, 12, 13, 14
  - F: 3, 5, 9, 13
- **The 3.T.T.2.b series:** a scientific series (p1, p5), historical events (p4; p5 paragraph 4) and a technical procedure (C05).
- **Domains:**
  - science and body: 1 to 3
  - home: 4
  - science and school: 5
  - community and history: 6 to 10
  - nature: 11 to 13
  - sports: 14
  - school: 15
  - None has more than five items.
- **Passage load:** p1 has 3 items, p4 has 6, p5 has 3, plus five stems.

### TS-CC (3.T.SS.1.a "organizational structures": compare and contrast)

**Components**
- A: likenesses
- B: differences
- C: clue words for alike and different, including the switch
- D: how the comparison is organized (likenesses first, then one topic at a time)
- E: true of one thing or of both. This is the coach's "notyet" and the hardest component.
- F: why authors compare, and using differences to tell apart or choose

| # | Id | Set | Comp | Task | Format | Pts | DOK | Text | How it differs from the others |
|---|---|---|---|---|---|---|---|---|---|
| 1 | SK-TSCC-P5 (ref) | 1 | C | construct | dropdown | 1 | 2 | p1 | Picks a contrast clue word |
| 2 | SK-TSCC-C02 | 1 | B | use evidence | hottext (choose two) | 2 | 2 | p1 | Differences you could see as the animals move, kept apart from differences in look and in place |
| 3 | SK-TSCC-P6 (ref) | 1 | A | identify | ms | 2 | 2 | p1 | Two likenesses, one of them shown by "they" |
| 4 | SK-TSCC-C04 | 1 | F | explain (author's purpose) | mc | 1 | 2 | p1 | Why the author compares at all |
| 5 | SK-TSCC-C05 | 1 | E | identify (sort) | match | 2 | 2 | stem (scooter and skateboard, family play) | A five-row sort, with two Both rows |
| 6 | SK-TSCC-C06 | 2 | C/E | construct | dropdown | 2 | 2 | p3 | Builds a "Both…" sentence. Facts true of only one group are the traps |
| 7 | SK-TSCC-C07 | 2 | B | use evidence | ebsr | 2 | 2 | p3 | A classroom difference. Part B trap: "However…" says there is a difference but not what it is |
| 8 | SK-TSCC-C08 | 2 | D | identify (organization) | mc | 1 | 3 | p3 | One topic at a time, against block order, time order, and problem and solution |
| 9 | SK-TSCC-C09 | 2 | C | edit (find and fix) | dropdown | 2 | 2 | stem (student draft) | Finds the sentence where "Also" should be "However" |
| 10 | SK-TSCC-C10 | 2 | A | explain (hidden likeness) | mc | 1 | 2 | p3 | A likeness with no clue word, inside a contrast (slates and paper) |
| 11 | SK-TSCC-C11 | 3 | E | edit (fix a chart) | dropdown | 2 | 3 | p4 (stem holds the chart) | A shared fact misfiled under one boat |
| 12 | SK-TSCC-C12 | 3 | F | transfer (choose for a purpose) | mc | 1 | 3 | p4 | The distractors give true but irrelevant differences, or a shared fact |
| 13 | SK-TSCC-C13 | 3 | D | compare (two texts) | mc | 1 | 3 | p3 + p4 | The structure both articles share. One distractor is true of only one article |
| 14 | SK-TSCC-C14 | 3 | C/E | transfer / construct | ms | 2 | 2 | stem (hail and snow) | Chooses correct compare and contrast sentences. Trap: "Unlike" used with a shared fact |
| 15 | SK-TSCC-C15 | 3 | A/B/C | construct (written) | **cr** | 0 | 3 | stem (path or bus) | Writes one likeness and one difference, each with a clue word |

**Tallies**
- **Points:** 22 scored, plus the cr item.
- **Formats:** seven. mc 5, dropdown 4, ms 2, hottext 1, match 1, ebsr 1, cr 1. Nine items use technology-enhanced formats.
- **DOK:** DOK 3 on five items (8, 11, 12, 13, 15), DOK 2 on ten, DOK 1 on none.
- **Tasks:**
  - identify: 3, 5, 8
  - explain: 4, 10
  - evidence: 2, 7
  - edit: 9, 11
  - construct: 1, 6, 15
  - compare: 13
  - transfer: 12, 14
- **Components:**
  - A: 3, 10, 15
  - B: 2, 7, 15
  - C: 1, 6, 9, 14
  - D: 8, 13
  - E: 5, 6, 11, 14. It appears in every set.
  - F: 4, 12
- **Domains:**
  - nature and science: 1 to 4, 14
  - family and play: 5
  - school and history: 6 to 10
  - sports and recreation: 11 to 13
  - community: 15
  - None has more than five items.
- **Passage load:** p1 has 4 items, p3 has 5, p4 has 3, plus four stems.

**Set order within set 1 (TS-CC).** C02 comes before P6 on purpose. P6's help names "Toads usually walk or take small hops" as a fact about one animal, and that is a C02 key. With C02 first, nothing earlier gives it away. C02's how does not mention the likenesses that P6 asks for.

## 4. Similar bank

| Id | `like` | Comp | Format | DOK | Text |
|---|---|---|---|---|---|
| SK-TSCE-S01 | C04, C15 | D | mc | 3 | stem (library pipe), judge a claim |
| SK-TSCE-S02 | C06 (C10 dropped after the B2 review) | A (with evidence) | ebsr | 2 | p6 (green lake) |
| SK-TSCE-S03 | P4, C12 | E (middle link) | mc | 3 | stem (bird feeder) |
| SK-TSCC-S01 | C05, C06, C11 | E | ms | 2 | stem (peaches and plums) |
| SK-TSCC-S02 | C07, C02 | B (with evidence) | ebsr | 2 | p5 (street sweeper and snowplow) |
| SK-TSCC-S03 | C12 | F (choose for a purpose) | mc | 3 | stem (two coats) |

Nine core items in each lesson have no extra question, so check-content gives its warning. The bank stays at three per lesson, as the lead decided.

## 5. Teaching changes (only where the fifteen ask for a task that was not modelled)

**TS-CE**
- **Point 2** adds: "Because and since come just before a cause. So and as a result come just before an effect." This is for C07, C11 and C15.
- **Point 4** adds how to find the first cause and how to predict the next effect. This is for C08, C14 and S03.
- **Point 5** adds:
  - how-to steps (C05);
  - that a history text uses time order and also cause (C09);
  - that each section can add one more cause or effect (C03).
- Still five points and three Watch Me examples.

**TS-CC**
- **Point 1** adds that many authors tell likenesses first, then differences one topic at a time. This is for C08 and C13.
- **Point 2** adds that some likenesses have no clue word: "Is this true of both things?" This is for C10 and S01.
- **Point 5** adds "or choose between them" and that a shared fact cannot tell two things apart. This is for C12, S03 and C04.
- Still five points and three Watch Me examples. No glossary definition conflicts with an item.

## 6. Reuse and weak-item decisions

| Item | Decision | Reason |
|---|---|---|
| SK-TSCE-P4, P5 | Reused by `{ ref }` as items 1 and 2, with addons | The inventory marks them reusable |
| **SK-TSCE-P6** (weak: implausible distractors "over and over", "very fast") | **Revised in place and kept in Together, not core.** The distractors are now Then, Both and But, words from other structures. The prompt and why were updated, and the key is unchanged | DOK 1. Core already covers clue words in context (C07, C15) |
| **SK-TSCE-P1** (Together, weak: silly distractor "They pull your coat on for you") | **Revised in place:** now "They stay still to keep the heat in." The key is unchanged. Its why no longer mentions the brain's "message", which is P4's first slot | Together must not pre-answer set 1 |
| SK-TSCE-P2, P3 | Kept in Together with addons | Note for the lead: their frames are close to form A T3 and T2. They were already like this before B2 |
| SK-TSCC-P5, P6 | Reused by `{ ref }` as items 1 and 3, with addons | The inventory marks them reusable |
| **SK-TSCC-P4** (weak: "an example of a kind of insect") | **Revised in place and kept in Together, not core.** The distractor is now "a way frogs and toads are alike" (the alike/different mix-up). Its box sentence is now about skin, not legs (§7) | It is also the same frame as form A T3 ("What does the word but show here?"), so I kept it out of the fifteen |
| SK-TSCC-P1 to P3 | Kept in Together with addons. P1 has one distractor changed and P3 one row changed (§7), so that Together does not pre-answer C02 | P2 is close to form A T1 (the switch item). It was already like this |

Together is now TS-CE P1, P2, P3 and P6, and TS-CC P1 to P4: four items each.

## 7. Lead rules from the B1 reviews: how they were applied

- **Hint 2 never points only to the key's place.** Each hint 2 is either a strategy step or names a place that also holds a wrong choice:
  - TS-CE C06 names paragraph 3 and the end of paragraph 4, which hold Part B's key and the patent sentence.
  - TS-CC C07 names paragraphs 2 and 3, which hold the key and "However…".
  - TS-CC S02 names paragraphs 2 and 3, which hold three Part B choices.
  - TS-CE S02 says "look before the algae", which covers two Part B choices.
- **Rewritten hints 2:**
  - TS-CE P1, P4, P5, C08, C10 and C12
  - TS-CC P1, P5, P6, C02 and C06
- **Hint 3** rules out one distractor with a reason, or confirms one row, fact or blank: TS-CE C13, and TS-CC C05 and C11. It then ends neutrally.
- **Together does not pre-answer set 1.**
  - The TS-CE P1 and P6 help and why no longer name the brain's message or "moving muscles make heat" (P4's slots).
  - **Fixed (lead request): TS-CC Together no longer uses the legs sentence that is a key of C02.** Ids and keys are unchanged.
    - **P3:** its row "has long back legs for big jumps" (Frog only) is now "most stay close to water" (Frog only, paragraph 4). Its `why` and its addon hint 2 and how now point to paragraphs 1, 2 and 4.
    - **P4** was also fixed under the same rule. Its box held the C02 key sentence, "Most frogs have long back legs for big jumps, but toads have shorter legs." The box is now "A frog's skin is smooth and wet, but a toad's skin is dry and bumpy." The prompt now says the sentence "tells about paragraph 2", and the `why` and addon how were updated to match. The choices and key are unchanged.
    - **P1:** the distractor "Both have long back legs." is now "Both have smooth, wet skin." Its addon how no longer says that long back legs belong to most frogs.
    - No Practice Together item, `why` or how now mentions the frogs' legs. The only remaining legs text is in p1 itself and in C02.
- **Earlier items do not give later ones away.**
  - TS-CC C08's how no longer calls paragraph 4 "writing" (C10's key).
  - TS-CE C08's how and why no longer say the events "led to" one another (C09).
  - Set 2 links in TS-CE were assigned one item each: Morgan's decision (C06), no warning to crashes (C07), the first cause (C08), the new signal's effect (C10).
  - **Fixed (lead request): TS-CE C12 no longer settles any part of C13.**
    - The old prompt and how ("because people began putting out every forest fire") stated that a choice people made changed the forest. That was the "Fire in the Pine Forest" half of C13 row 2.
    - The prompt is now "Which TWO things happened in the forest once fires no longer burned through it?"
    - Hint 2, hint 3, the how and the `why` now speak only of the fires stopping. They never mention people or a choice.
    - The keys and choices are unchanged. C12's help no longer bears on any C13 row: nature, invention or chain.
- **No order items are used.**

## 8. Points for reviewers to test hardest

1. **TS-CE C03:** is "to tell about another effect that cold has on the body" the only defensible purpose? "To show that people need more hair" is meant as an overreach of paragraph 4, sentence 4.
2. **TS-CE C08:** "Signals could switch from Go to Stop all at once" is keyed as the first cause. Paragraph 1 (more cars) is background and is not offered as a choice.
3. **TS-CE C09:** the "compares long ago with today" distractor. Only paragraph 5 mentions today.
4. **TS-CE C10:** "His signal had a third sign…" is a distractor because it says what the signal is, not what it caused. Is that clear enough for grade 3?
5. **TS-CE C05:** are the dark room and skipping the plastic on a windy day clearly the only two mistakes that hide the shapes? Rinsing in a bowl is meant to be harmless.
6. **TS-CC C02:** the legs sentence counts as a movement difference because it says "for big jumps".
7. **TS-CC C10:** "Students in 1900 used both of them every day" is wrong because the article never says students in 1900 used paper.
8. **TS-CC C12 and S03** share a frame (choose for a purpose). S03 is the similar item for C12, by design.
9. **The two cr items:** TS-CE C11 and TS-CC C15. Their `why` says "Many answers can be right."
10. **TS-CE p4:** check that the Garrett Morgan facts are fair for grade 3.

I have not reviewed any of this myself, and I ran no git commands.

## 9. Fixes after B2 review

The reviews are B2-review-TS-1.md (R1) and B2-review-TS-2.md (R2). Only the TS-CE and TS-CC blocks were edited. Every ladder below was re-read as a whole (clue plus hints 1 to 3) after the change.

### TS-CE

| Item | Finding | Fix made |
|---|---|---|
| P1 (Together) | R1 MUST-7 (lead): the brain link that P4 asks for | The `why`, hint 2 and how no longer mention the brain. They say only that, as a result, the muscles tighten and relax very fast. Hint 2 is now the "as a result" strategy |
| P2 (Together) | R2 NOTE-4: no misconception line | Added a misconception line |
| P5 (ref) | R2 SHOULD-6: hint 2 led to the only sentence about a furry animal. R1 NOTE-4: no `std` | Hint 2 is now "Find the cause in paragraph 4 first. Then ask what that cause makes happen for an animal with fur." Added `std: ["3.T.SS.1.a", "3.T.T.2.b"]` |
| C03 | R1 MUST-8, R2 MUST-2: hint 2 pointed to 4:1, the key's basis | Hint 2 is now "Say in a few words what paragraph 4 is about, then what paragraphs 2 and 3 are about. How does paragraph 4 fit with them?" |
| C04 | R2 MUST-1: hint 1 settled the claim. R1 NOTE-6: DOK label generous | Clue and hint 1 are now a neutral strategy ("…find the clue word. Then test the claim against what really happens."). Hint 2 asks which part comes before and after the clue word. Hint 3 now rules out the "no cause in this sentence" choice instead of the rule-based "She is right" choice. Relabelled DOK 2 |
| C06 | R1 MUST-9, R2 MUST-3: hint 2 named a place with one Part B choice and pointed to "So". Hint 3 described the key | Hint 2: "Find where the article tells what Morgan decided. Then read what happened before it and after it, in paragraphs 1 to 4." That range holds all four Part B choices. Hint 3 keeps the patent rule-out, then: "For Part B, check that your sentence shows your Part A answer." |
| C07 | R1 MUST-10, R2 MUST-4: the stem's own word "so" was an option, so hint 3 left only the key | Options are now "so that / because / until". After hint 3 rules out until, two live options remain. The how, `why` and misconception were rewritten for "so that" (a purpose, not a cause). R2 suggested "as a result", but it reads badly in the one-sentence frame, so I used "so that" instead |
| C08 | R2 NOTE-2: "in the article came first" was not literally true | Prompt: "Which of these events came first and led to all of the others?" |
| C09 | R2 SHOULD-6: hint 1's "two of these at once" plus hint 2 pointed at the key | Dropped that sentence from the clue and hint 1 |
| C13 | R1 NOTE-7: hint 1 was the same as TS-PS C13's | Clue and hint 1: "Test each sentence twice: once on the signal article and once on the pine forest article. Choose both articles only if it passes both tests." |
| S01 | R2 MUST-1: hint 1 settled the claim | Same neutral clue and hint 1 as C04 |
| S02 | R1 MUST-10, R2 NOTE-5: hint 3 left only the key. No misconception line. R2 NOTE-5: `like` C10 was loose | Hint 3 Part B is now "check that your sentence shows your Part A answer." Added a misconception line. `like` is now C06 only |

### TS-CC

| Item | Finding | Fix made |
|---|---|---|
| Teach point 1 | R2 SHOULD-1: it stated C13's key and gave only one pattern | Now: "Some authors tell all about one thing and then all about the other. Others go topic by topic, telling about both things for each topic." The alike-first sentence is gone |
| Watch Me 1 | R1 SHOULD-14: kindergarten-like (cats and dogs). Nothing modelled choosing for a purpose | Replaced with Mia choosing a backpack for a long hike. It models crossing out shared facts (both) and using the difference that matters (however, while). It does not use boats, coats, paths or buses. There are still three Watch Me examples |
| P1 (Together) | R2 NOTE-4 | Added a misconception line |
| P2 (Together) | R1 MUST-6 (lead): hint 3 quoted "Both are amphibians", a P6 key. R2 NOTE-4 | Hint 3 now rules out "Both lay eggs, and both hatch as tadpoles" (a P2 target, not a P6 choice). Added a misconception line |
| P3 (Together) | My own re-check: the row "most stay close to water", added in the earlier fix, set up P5's habitat difference (P5 is set 1, item 1) | The row is now "hatches as a tadpole" (Both). The hints and how now name paragraphs 1 and 2 only. Added a misconception line |
| P5 (ref) | R1 SHOULD-11, R2 NOTE-7: "Finally" was not grammatical, so only one option was live. Hint 1 named each option's job. The clue named the answer's job. R1 NOTE-4: no `std` | Options are now "Unlike / Because / Like". The clue and hint 1 are now "Read the sentence with each choice. Ask what the two parts of the sentence tell about frogs and toads." Hint 2 sends the child to where the passage tells where the animals live. The `why` and how were updated. Added `std` |
| C04 | R1 SHOULD-12, R2 MUST-2: hint 2 pointed to the key's sentences | Hint 2: "Think about what each paragraph does. Then ask what a reader can do after reading all of them." |
| C09 | R2 MUST-4: the stem's word "Also," was an option, and slot 1 was trivial | The draft now opens sentence 2 with Both, sentence 3 with "Also," (correct) and sentence 4 with "In addition," (wrong). Slot 1 is now a real choice among three clue-word sentences. Slot 2 is "Also, / However, / For example,", so the stem's wrong word is not offered. The how, `why` and misconception were updated |
| C10 | R2 MUST-2: hint 2 asked the key question | Hint 2: "Reread paragraph 4. List what it says about slates and what it says about paper." |
| p5 and S02 | R1 MUST-5, R2 SHOULD-3, lead decision: the fire truck text overlapped TS-DESC p3 and 3.T.T.2.a | p5 is now "Two Trucks That Clear the Road" (street sweeper and snowplow). S02 was rewritten on it: Part A "How is a snowplow different from a street sweeper?" Hint 3 ends "choose a sentence that tells something only one of the trucks does, then check that it matches your Part A answer," which leaves two Part B choices. Added a misconception line. Before choosing the topic, I grepped all lessons for snowplow, sweeper, recycling (used by 3.T.T.2.c) and bus (used by my own C15) |

### Items that need a blind re-solve

- **TS-CE:**
  - Changed choices or prompt: C07, C08.
  - Help only: P1, P2, P5, C03, C04, C06, C09, C13, S01, S02.
- **TS-CC:**
  - Changed choices or text: P5, C09, S02 (with its new passage p5).
  - Changed rows: Together P3.
  - Help only: P1, P2, C04, C10.
  - Teaching: teach point 1, Watch Me 1.

### Findings not addressed, and why

- **R1 MUST-3 (Morgan and 3.T.T.2.b C05).** The lead decided that Morgan stays in TS-CE and that the 3.T.T.2.b author changes their item.
- **R1 NOTE-9 (bike contexts in TS-SEQ C14 and TS-CE C14).** This is a NOTE, and the lead's MUST-4 fix sits with the TS-SEQ author. I left TS-CE C14 unchanged.
- **R1 NOTE-6 (TS-CE C12 DOK).** I kept DOK 3, because the second key is two links from the cause (fires stop, then thick brush, then shade, then pines struggle).
- **R1 NOTE-12 (no map or caption).** This is outside these two lessons.
- **Similar coverage.** TS-CE now has ten core items with no similar item, up from nine, because C10 was dropped from S02's `like`. TS-CC still has nine.

### Gates after these fixes

- `check-content.js --all`: PASS, 0 failures. The only warnings in my lessons are the similar-coverage notices.
- `check-writing.js` and `check-instructional-copy.js`: pass.
- `readability.py`: TS-CE p4 4.3, p5 4.0, p6 3.6. TS-CC p3 4.4, p4 3.9, p5 4.1.
- N-gram scan: only shared lesson phrasing remains. The one match from teach point 1 ("all about one thing and then") is between my own teach point and C08's distractor, in the same lesson.

## 10. Fixes after the B2 re-review (B2-rereview-TS.md)

Only the TS-CE and TS-CC blocks were edited. "Live" is used as the brief defines it: a choice is live only if a child who has read the clue and hints 1 to 3 would still have a real reason to pick it. The lists below give the choices left after each hint. In Practice Together the player shows only the clue, so I checked the clue as well as the hints.

### Changes

| Finding | Item | Change |
|---|---|---|
| MUST-4 | TS-CE C09 | Hint 3 now ends "…so it is not a how-to. Check each choice that is left against the article." The tail about "the whole article, not just the last paragraph" is gone. |
| MUST-5 | TS-CE C12 | Hint 3 keeps the lightning rule-out and now ends "Check each choice that is left against the chain you drew." The with-fires or without-fires question is gone. |
| MUST-6 | TS-CC P5 (ref) | Hint 2 is now only "Find where the passage tells where frogs and toads live." The yes/no question is gone. The clue (shown in Together) is "Read the sentence with each choice. Ask what the two parts of the sentence tell about frogs and toads." It names no option's job and decides nothing. |
| SHOULD-6 | TS-CC C02 | Hint 2: "Go through paragraphs 2 to 4 one sentence at a time. Choose two." |
| (own whole-ladder check) | TS-CC C02 | Hint 3 ended with "does it tell what the animal does with its body?". Like SHOULD-8, that test removed both remaining non-keys. It now ends "Check each sentence that is left against the question." |
| SHOULD-7 | TS-CC C07 | Hint 2: "Reread paragraphs 2 and 3." |
| NOTE-4 | TS-CC C07 | How step 4 no longer says "Slates are about writing" (C10's key comes next). It now says "The sentence about slates tells a different difference." |
| SHOULD-8 | TS-CC C12 | Hint 3 no longer repeats hint 1's rule-out ("both moved with paddles"). It rules out the two-blade paddle reason instead, then ends "Check each choice that is left against the article." The closing "does its reason fit what she needs?" test is gone. |
| SHOULD-8 | TS-CC S03 | Hint 3 is now "A hood and a zipper are on both coats, as hint 1 says. Check each choice that is left against the box." The closing "warm, rainy day" test is gone. |
| NOTE-7 | TS-CE S01 | Relabelled DOK 2, to match its twin C04. |

### Live choices, hint by hint

**TS-CE C09** (key: time order, and shows how one led to another)
- After hint 1: all four. Hint 1 only lists the kinds of structure.
- After hint 2: three are left: the key, the how-to, and the comparison. The hint's question about how the clue words connect rules out "time order, but they do not affect each other".
- After hint 3: two are left: the key and "It compares the signals of long ago with traffic lights today". The how-to is ruled out. The comparison stays live: paragraph 5 does compare old signals with today's lights, and nothing in the hints rules it out.

**TS-CE C12** (keys: bushes grew thick; young pines had a hard time growing)
- After hint 1: all five.
- After hint 2: all five. The child draws the chain, starting from the fires stopping, but the hint names no box.
- After hint 3: four are left: the two keys, "Sunlight could reach the forest floor" and "The young pines got light and grew tall". Lightning is ruled out. The two paragraph 3 effects of fire stay live, and they are the item's misconception.

**TS-CC P5** (key: Unlike)
- Clue and hint 1: all three. Neither names a job.
- After hint 2: all three. The hint points to where the passage tells where the animals live, but asks nothing about it.
- After hint 3: two are left, Unlike and Like. Because is ruled out. The child must still read the passage and decide whether the two places are the same or different.

**TS-CC C02** (keys: p1:3:2 and p1:3:3)
- After hint 1: all seven targets.
- After hint 2: five are left: p1:2:2, p1:2:3, p1:3:2, p1:3:3 and p1:4:2. Limiting the search to paragraphs 2 to 4 removes p1:1:4 and p1:5:2. Both are likenesses, not differences, so a reason to choose them was already weak.
- After hint 3: four are left: the two keys, dry, bumpy skin (p1:2:3) and where the animals live (p1:4:2). Smooth, wet skin is ruled out.

**TS-CC C07**
- Part A (key: students of all ages learned together in one room):
  - After hint 1: all four.
  - After hint 2: all four. The hint only names paragraphs 2 and 3.
  - After hint 3: three are left: the key, "learned math but did not learn to read" and "shared a room with others their own age". "No time at all to play" is ruled out.
- Part B (key: the one-teacher sentence):
  - After hint 2: all four. Paragraphs 2 and 3 hold the key and "However, a school day…"; the other two are elsewhere.
  - After hint 3: two are left, the key and the slates sentence. Hint 3's Part B line removes "However…", which says only that there is a difference, and "Both had time to play", which is not about the 1900 classroom.

**TS-CC C12** (key: a canoe, because it has room for more people and gear)
- After hint 1: three are left: the key, the two-blade paddle and the closed top. Hint 1's rule, that a fact true of both cannot help, removes "both boats are moved with paddles".
- After hint 2: three. It lists what Ms. Grant needs and sends the child to the paragraphs about differences.
- After hint 3: two are left: the key and "a kayak, because most kayaks are closed on top". The two-blade paddle is ruled out.

**TS-CC S03** (key: the rain jacket keeps him dry without being too warm)
- After hint 1: two are left: the key and "the puffy coat, because it is thick and very warm". Hint 1's rule removes the hood and zipper reasons, which are true of both.
- After hint 2: two. It points to the weather and to what is different about each coat.
- After hint 3: two. It only confirms the hood and zipper are shared, as hint 1 already said, and rules out nothing new.

**TS-CE S01:** DOK label only. The hints did not change.

### Findings not addressed, and why

- **NOTE-1, the Together ladder for TS-CE P1.** The clue ("Read paragraph 2. Find the clue words 'as a result' and read the effect that comes after them.") leaves only the key. P1 is a DOK 1 Together item. In Together, the engine's ladder shows the clue, then narrows the choices, then walks through the answer, by design. I left the clue as the lesson's taught strategy. The lead may want a neutral clue.
- **NOTE-8, legacy Together frames that match form A.** CC P4 matches T3, and CE P3 matches T2. Both predate the expansion. They rehearse a frame, not an answer, so I left them.
- **NOTE-4, the other pre-eliminations listed in the re-review.** CC C06's how removes one C07 distractor ("learned math but not read"). It states no key, so I left it. I changed the closest case, C07 to C10.
- **The re-review's SEQ and DESC findings.** They belong to the other author.

### Gates

- `check-content.js --all`: PASS, 0 failures. The only warnings in my lessons are the accepted similar-coverage notices (TS-CE 10 core items without a similar item, TS-CC 9).
- No passage text changed in this round, so the readability results in §9 still hold.

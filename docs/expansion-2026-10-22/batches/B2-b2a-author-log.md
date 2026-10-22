# B2 author log (b2a): 3.T.T.2.a, 3.T.T.2.b and 3.T.T.2.c

**Role:** content author b2a for batch B2. **This is not a review.** Nothing here certifies the items. Reviewers should blind-solve before they read this log (04-content-plan.md §8).

**Files changed:**
- `js/data/lessons/T-T2.js`, in the 3.T.T.2.a, 3.T.T.2.b and 3.T.T.2.c blocks only. The 3.T.T.2.d block was not touched.
- New figures: `assets/figures/tt2-c-fire-station.svg` and `assets/figures/tt2-c-bike.svg`.

In each block I added:
- new passages, after the existing ones;
- new lesson keys `core`, `similar` and `addons`, between `practice` and `test`;
- a few sentences of teaching (see §6).

Nothing in `practice`, `test`, `testB` or `clues` changed, and no existing id changed.

**Pattern:** B0 (3.T.T.1.c) after its review fixes, plus every rule added to AUTHOR-BRIEF.md after the B1 reviews:
- Hint 2 never names the only paragraph or sentence that holds the key. In an EBSR item, any place a hint names holds at least two Part B choices.
- Hint 3 settles at most one blank, row or step.
- Practice Together does not pre-answer a set-1 core item. This changed which items are refs (§2).
- An earlier item's `why` or `how` does not state a later item's answer in the same set.
- Order items with four or more steps are worth 2 points.

## 1. Gates

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures. In my lessons, the only warnings are the informational "N of 15 core items have no similar item" (2.a: 11, 2.b: 10, 2.c: 4) |
| `python3 verification/readability.py` | Every new passage is FK 1.9–4.5 (none above 4.5). Word counts are in §3 |
| `check-writing.js` | 0 failures, 0 warnings |
| `check-instructional-copy.js` | 28 assertions passed |
| Scratch audit (`scratchpad/b2a/audit.js`) | Every hot-text target and answer resolves to the intended sentence; keys are printed per item for the lead |
| Six-word n-gram scan of my new passages against every passage, practice, test, testB, set item and Watch Me on the site | One hit: "Did you know? Box: Long ago" (3.T.SS.1.a p3). It is a generic text-box opener, not content |
| Smoke test, port 8751 (Playwright, 400 px wide) | `#play/SK:<k>:p`, `:y`, `:y2` and `:y3` load for all three lessons with no page errors. Both figures render, and the fire-station figure sits after the "Living Upstairs" section in set 2 |

## 2. Refs and Practice Together (changed by the "Together must not pre-answer set 1" rule)

| Lesson | Refs in core | Practice Together now | Why |
|---|---|---|---|
| 2.a | P4, P7 (set 1); P3 (set 2); P5 (set 3) | P1, P2, P6 | P3 and P5 give each other away (older workers gather nectar), and P5's why says the five-eyes fact does not support the main idea, which would pre-answer P4. So neither can sit in set 1 with P4. Each goes to a later set as one of the "up to two items in later sets" from p1 |
| 2.b | P4 (set 1) | P1, P2, P3, P5, P6 | P1 (the order of the stages) pre-answers P6 (eats its eggshell first) and any chrysalis item. P3 (tastes bad) and P1 (waits for wings to dry) pre-answer two rows of P5. So P5 and P6 stay in Together |
| 2.c | none | P1, P2, P3, P4, P5 | P1 (food for energy) and P3 (fat stored for the trip) pre-answer P4. P2 (where they go in winter) and P1 (the Gulf only in p2) pre-answer most of P5. So the fifteen are all new, and set 1 uses p1/p2 only for facts that Together never touches (Georgia; the blurred wings) |

Together stays within 2–5 items in every lesson. **Lead decision needed:** 2.b and 2.c now show five Together items where the old split showed three. That is allowed by rule 10, but it changes what `SK:<key>:p` shows.

**Residual risk for reviewers (2.a set 1):** P1 (Together) has the distractor "The queen bee can lay hundreds of eggs in just one day", so a child knows paragraph 2 is about the queen before C04 asks for its heading. P1 does not separate the key ("The Hive's Queen") from "Laying Eggs All Day", so I judged this narrowing, not pre-answering.

## 3. Passages added

All are original and never used by `test` or `testB`. None comes from form A or form B. The checks were read in order to avoid their themes (2.a: bees, armadillo, tree trunk; 2.b: monarch, water cycle, Pony Express; 2.c: hummingbirds, alligators). Other site topics I avoided: sea turtles (R-INF-01), the pinecone bird feeder with its out-of-order step (T-SS), the Pine Ridge library history (T-TS), Field Day (T-C, T-SS), bats (2.d's draft).

| Lesson | Id | Title | Words / FK | Domain | Features | Used by |
|---|---|---|---|---|---|---|
| 2.a | p4 | Ready in a Flash | 178 / 3.9 | community | two headings, a "Did You Know?" box, Figure 1 (fire station) | C06, C08, C09, C10 |
| 2.a | p5 | The Vine That Grew and Grew | 180 / 3.8 | nature (kudzu, Georgia) | three headings and a box | C11, C12 |
| 2.b | p4 | The Wheel That Topped a Tower | 182 / 3.0 | community history (1889 Paris, 1893 Chicago, the Ferris wheel) | a series of historical events | C06–C10, C15 |
| 2.b | p5 | How to Patch a Bike Tube | 178 / 1.9 | sports / problem solving | a technical procedure | C11–C13, C15 |
| 2.c | p5 + p6 | Sweetgrass + Baskets That Tell a Story | 100 / 3.4 + 101 / 4.5 | family and culture (Gullah Geechee, Georgia coast) | short pair | C03–C05 |
| 2.c | p7 + p8 | From Old Can to New Can + Three Bins at Oak Hill School | 133 / 4.2 + 145 / 3.7 | community / school | pair | C06–C10 |
| 2.c | p9 + p10 | A Game for a Cold Winter + How the Basket Changed | 137 / 4.4 + 143 / 4.4 | sports history | pair | C11–C14 |

- **Paragraph numbers in 2.a p4 and p5.** Headings and the box are not numbered on screen, but refs count raw blocks. So hints name the headings, or the displayed paragraph number ("the last paragraph"). Hot-text refs were checked against the raw blocks.
- **Short stems** (no passage): 2.a C03 (Saturday market), C05 (tomato tips), C13 (spring concert, two paragraphs), C14 (Kayla's bike report and figure); 2.b C04 (cup phone), C05 (Garrett Morgan's signal), C14 (lightning and thunder); 2.c C15 (two field-trip notes); and all nine similar items.
- **Facts checked from memory** (reviewers may want to confirm):
  - Kudzu came from Japan more than 100 years ago, was paid for in the 1930s to hold soil, grows about a foot a day, has grape-scented flowers and is made into jelly.
  - Eiffel Tower 1889; Chicago fair 1893; Ferris's wheel first turned in June 1893, was taller than a 20-story building and had 36 cars of about 60 riders.
  - Garrett Morgan's warning signal followed a crash he saw in Cleveland.
  - Naismith, December 1891, Springfield; peach baskets 10 feet up on a balcony; a soccer ball; 13 rules, including no running with the ball; chain-pull nets, then open nets; backboards stopped balcony fans.
  - Aluminum is recycled again and again, and a can can be back on a shelf in about two months.
- **The sweetgrass text** says the Gullah Geechee families' ancestors "were brought here from West Africa." I chose that wording to be accurate without detail. Reviewers should confirm the tone is right for grade 3.

## 4. Figures (SPEC §5e)

| File | Used by | What the item asks | Alt-text guard |
|---|---|---|---|
| `tt2-c-fire-station.svg` | 2.a p4 (figure after "Living Upstairs"), C09 | why the bottom of the pole is placed where it is | The alt text gives the positions a screen-reader user needs: pole beside the gear rack, rack beside the truck, kitchen upstairs, doors to the street. It never says why the pole is there |
| `tt2-c-bike.svg` | 2.a C14 (item figure, no caption) | choose the caption | The alt text names the five labels and says there is no rider. It avoids the key's words ("main parts") |

Both are 320-unit viewBoxes with 21-unit text, black line art, labels with leader lines, no color-only meaning, no people. Rendered PNG checks are in `scratchpad/b2a/`.

## 5. The fifteen, per lesson

Components follow 02-coverage-matrix.csv. Task verbs follow 04 §4.4. "Differs" names the nearest item and the at-least-two ways (text, component, task, context) in which they differ.

### 3.T.T.2.a (components: MI main idea, KD key details, KI key versus merely interesting, DS design: headings, boxes, captions, diagrams)

| # | Id | Set | Component | Task | Format | DOK | Text | Differs from nearest |
|---|---|---|---|---|---|---|---|---|
| 1 | P4 (ref) | 1 | KI | identify (classify) | match | 2 | p1 | C05: text, task |
| 2 | P7 (ref) | 1 | DS caption/labels | identify | dropdown | 2 | p1 | C14: text, task, context |
| 3 | C03 | 1 | MI (unstated) | construct | dropdown | 2 | stem: market | S03/C11: text, task |
| 4 | C04 | 1 | DS heading + MI | identify | mc | 2 | p1 ¶2 | C10: text, task, context |
| 5 | C05 | 1 | KI | explain | mc | 3 | stem: tomatoes | P4: text, task, context |
| 6 | C06 | 2 | MI (stated twice) | use evidence | hottext ×2 | 2 | p4 | C11: text, context, picks two |
| 7 | P3 (ref) | 2 | KD | use evidence | ms | 2 | p1 | C06: text, component, context |
| 8 | C08 | 2 | DS text box + KI | explain | mc | 3 | p4 | C12: text, task (why boxed vs why not the main idea) |
| 9 | C09 | 2 | DS diagram + KD | explain | mc | 3 | p4 + Figure 1 | C08: component, uses the figure |
| 10 | C10 | 2 | DS heading + KI | edit (place a new sentence) | dropdown ×2 | 3 | p4 + stem | C04: text, task, context |
| 11 | C11 | 3 | MI | identify | hottext | 2 | p5 | C06: text, context, one pick |
| 12 | C12 | 3 | MI vs KI | explain (correct a student) | mc | 3 | p5 | C08: text, task |
| 13 | C13 | 3 | MI | compare two paragraphs (transfer) | mc | 3 | stem: concert | C03: text, task, context |
| 14 | C14 | 3 | DS caption | edit (supply a caption; transfer) | dropdown | 2 | stem + figure | P7: text, task, context |
| 15 | P5 (ref) | 3 | MI + KD | use evidence | ebsr (B picks two) | 3 | p1 ¶4 | C06: text, format |

- **Tallies:** mc 6; TE 9 (match, dropdown ×4, hottext ×2, ms, ebsr); DOK 3 ×7, DOK 1 ×0.
- **Domains:** science 5 (bees), community 5 (market, fire station), nature 2 (kudzu), family 1, school 1, everyday 1.
- **Components:** MI 6, KD 4, KI 5, DS 6. The main idea is in every set.

### 3.T.T.2.b (components: H historical series, S scientific ideas, P technical procedure, T time-order language, CE cause-and-effect language)

| # | Id | Set | Component | Task | Format | DOK | Text | Differs from nearest |
|---|---|---|---|---|---|---|---|---|
| 1 | P4 (ref) | 1 | CE language | identify | dropdown ×2 | 2 | p1 | C12: text, component, task |
| 2 | C02 | 1 | S + T | identify the stage before | hottext | 2 | p1 ¶5 | C10: text, component |
| 3 | C03 | 1 | T language | identify | ms (three keys) | 1 | p1 ¶6 | P4: component, format |
| 4 | C04 | 1 | P | edit (misplaced step) + explain | mc | 3 | stem: cup phone | C12: text, context, task |
| 5 | C05 | 1 | H + CE | explain the connection | mc | 3 | stem: Garrett Morgan | C07: text, task |
| 6 | C06 | 2 | H + T | construct (order) | order 5 (2 pts) | 2 | p4 | C11: text, component, context |
| 7 | C07 | 2 | H + CE | use evidence | ebsr | 2 | p4 ¶1–2 | C10: format, cause vs evidence of safety |
| 8 | C08 | 2 | H + T | classify before/after | match | 2 | p4 | C06: task, format |
| 9 | C09 | 2 | H | explain the author's purpose | mc | 3 | p4 ¶3–4 | C05: text, task |
| 10 | C10 | 2 | H + CE | use evidence | hottext | 3 | p4 | C07: format, task |
| 11 | C11 | 3 | P + T | construct (order) | order 5 (2 pts) | 2 | p5 | C06: text, component, context |
| 12 | C12 | 3 | P | edit (missing step) | dropdown | 2 | p5 + stem | C04: text, task |
| 13 | C13 | 3 | P + CE | predict an effect | mc | 3 | p5 | C14: text, component |
| 14 | C14 | 3 | S + CE | construct a chain (transfer) | mc | 3 | stem: thunder | C02: text, task |
| 15 | C15 | 3 | H vs P | compare two texts (transfer) | mc | 3 | p4 + p5 | C09: task, two texts |

- **Tallies:** mc 6; TE 9; DOK 1 ×1 (C03); DOK 3 ×8.
- **Domains:** science 4 (monarch, lightning), community/history 6, family 1, sports/problem solving 4 (C15 is counted here).
- **Components:** H 7, S 2, P 5, T 5, CE 7. Cause and effect is in every set. The historical series, which was unpractised before, now has seven items.

### 3.T.T.2.c (components: BO in both texts, ON in only one text, IN integrate to explain, TR track the source)

| # | Id | Set | Component | Task | Format | DOK | Text | Differs from nearest |
|---|---|---|---|---|---|---|---|---|
| 1 | C01 | 1 | BO | identify (one sentence each) | hottext ×2 | 2 | p1+p2 | C10: text, context |
| 2 | C02 | 1 | TR / ON | identify the question one text answers | mc | 2 | p1+p2 | C03: text, task, context |
| 3 | C03 | 1 | ON | identify | mc | 2 | p5+p6 | C02: see above |
| 4 | C04 | 1 | IN | explain (combine a property and a process) | mc | 3 | p5+p6 | C09: text, context |
| 5 | C05 | 1 | TR + BO | edit (fix a note) | dropdown ×2 | 2 | p5+p6 + stem | C14: text, context |
| 6 | C06 | 2 | TR + BO | classify | match (3 columns) | 2 | p7+p8 | C14: text, format, context |
| 7 | C07 | 2 | IN | construct (order across texts) | order 5 (2 pts) | 3 | p7+p8 | C11: format, task |
| 8 | C08 | 2 | ON (what text 2 adds) | compare + evidence | ebsr | 3 | p7+p8 | C13: text, format, context |
| 9 | C09 | 2 | IN | explain | mc | 3 | p7+p8 | C04: text, context |
| 10 | C10 | 2 | BO | identify (one sentence each) | hottext ×2 | 2 | p7+p8 | C01: text, context |
| 11 | C11 | 3 | IN | use evidence (one from each text; transfer) | ebsr (B picks two) | 3 | p9+p10 | C07: text, format, context |
| 12 | C12 | 3 | BO | construct | dropdown ×2 | 2 | p9+p10 | C05: text, task |
| 13 | C13 | 3 | IN (text 2 explains text 1) | explain | mc | 3 | p9+p10 | C08: text, format |
| 14 | C14 | 3 | TR | edit (fix notes) | dropdown ×2 | 2 | p9+p10 + stem | C05: text, context |
| 15 | C15 | 3 | IN | apply to a plan (transfer) | mc | 3 | stem: two notes | C04: text, context, task |

- **Tallies:** mc 6; TE 9; DOK 3 ×7, DOK 1 ×0.
- **Domains:** nature 2, family/culture 3, community/school 6 (recycling and the notes), sports 4.
- **Components:** BO 5, ON 3, IN 7, TR 5. Integration is in every set.

## 6. Teaching added (no new teach points, so the limits hold)

- **2.a** (it already had six points): I extended points 5 and 6. Point 5 now covers a main idea that no sentence states, and comparing two paragraphs (C03, C13). Point 6 now covers choosing a heading and choosing a caption (C04, C10, C14). Watch Me is unchanged.
- **2.b:** Point 1 now separates a how-to from a history (C15). I added Watch Me 3, ice pops with one misplaced step (C04, C12). There are now three Watch Me examples.
- **2.c:** Point 5 now asks "Is it in Text 1? Text 2? Both, even in different words?" (C05, C14). I added Watch Me 3 on raccoons, which tracks a fact and combines two texts. There are now three Watch Me examples.
- **Definitions** match the edge cases the items test. A key detail is a fact that helps prove the main idea: C05 and C12 test a true fact that is not key. A fact in both texts can use different words: C05's "dried sweetgrass" and S01's "the acorns they buried".

## 7. Similar items

There are three per lesson, each on its own new short text, with honest `like` lists:
- **2.a:** S01 bus-driver heading (C04); S02 duck feathers, key details (P3, P4); S03 library main idea, unstated (C03).
- **2.b:** S01 tree seedling, a misplaced step (C04, C12); S02 Maple Grove brick street, a historical cause (C05, C07); S03 a spoon in hot soup, a heat chain (C14).
- **2.c:** S01 squirrels, a fact in both texts in different words (C01, C10, C12); S02 polar bear and seals, integration (C04, C09, C11, C13); S03 dolphins, a fact in only one text (C02, C03, C05, C14).

The uncovered core items are warnings only, under the lead's rule 9 decision.

## 8. Weak items

The inventory flags no weak items in these three lessons. No existing practice item was revised. Addons give hints and Show me how to every practice item: 2.a P1–P7, 2.b P1–P6 and 2.c P1–P5.

## 9. Notes for the lead and the reviewers

- **Passage length.** The brief says 60–180 words. One passage is a little over: 2.b p4 has 182 words, and 2.a p5 is right at 180. 04 §4.3 allows 100–250. I trimmed the others to fit.
- **2.b C03 is DOK 1** (spotting time-order phrases). It is the only DOK 1 in the three lessons.
- **2.c C06's "Both" row** ("that cans can be used again") rests on the school passage's Recycle bin and Malia's "Now most of it gets used again." Reviewers should judge whether that is explicit enough.

## 10. Fixes after B2 review (B2-review-T2-1 and B2-review-T2-2)

This section replaces §3–§5 wherever they differ. Ids still follow position in the fifteen. Every changed item has new content (core.rev is still "1", because nothing has shipped yet). Gates after the fixes:
- `check-content.js --all`: PASS, 0 failures. In my lessons, the only warnings are the similar-coverage lines (2.a 11, 2.b 10, 2.c 6).
- `readability.py`: all new passages are FK 1.9–4.4 and 106–181 words.
- `check-writing.js`: 0 failures.
- Smoke test on port 8751: all sets load with no page errors.
- Six-word n-gram scan: only the generic "Did you know? Box: Long ago" hit remains.

### 10.1 What changed, finding by finding

| Finding | Fix made |
|---|---|
| R1 M1 / lead (2.a C08, the station dog) | The box's dog sentence is now "The first fire hoses were made of leather." C08's prompt, how and why now name horses and leather hoses. TS-DESC C08 is now a different task: a hot text that picks two fun facts in "A Kitchen on Wheels". My C08 asks why facts sit in a text box, on a different passage, in a different format, with a different key text |
| R1 M2, R2 MUST-2a-1, S4, SHOULD-2a-1 (2.a S03, the library) | S03 is new. It compares the main ideas of two paragraphs about a community garden (Cedar Avenue) and is `like: [C13]`, so set 3 now has a similar item. The library stem is gone |
| R1 M3, R2 MUST-2b-1, lead (2.b C05, Garrett Morgan) | C05 is now the Brooklyn Bridge: ice stops the boats, so a bridge is planned; John Roebling dies; Washington gets sick; Emily carries his instructions; it opens in 1883. A grep of all of `js/data` found no "Brooklyn" or "Roebling" |
| R1 M4, lead (2.b bike tube) | Kept, per the lead. The `tt2-c-bike.svg` "chain" leader now ends on the lower chain run, at (107,189) |
| R1 S6, R2 SHOULD-2b-1 (2.b C14, thunder) | C14 is now a yeast chain: yeast eats sugar, gives off gas, and the bubbles make the dough rise. No "yeast" anywhere else on the site |
| Lead / R1 §4 (Ferris "laughed") | Now "Many people doubted his plan." I updated C08's row, hint 3 and how, and rewrote C09: the prompt says "doubted", and the key is "…kept going even when others thought he would fail", so the prompt no longer echoes the key |
| R2 SHOULD-2b-2, NOTE-7 | C12's option is now "Rub the spot with sandpaper." (no reason given). C12 hint 3 now says "Check the two choices that are left". C13 is relabelled DOK 2 |
| R1 §4 (2.b C10) | Relabelled DOK 2. Hint 3 now rules out the first-turn sentence (5:1), not one that hint 2 had already excluded |
| R1 M5, R2 MUST-2c-4 (2.c C01) | The prompt no longer says "state": "the same fact about where hummingbirds can be seen". The targets now include p1:2:4 (hover "in one place"), p1:3:2 (in front of a flower), p2:3:1 (Mexico) and p2:3:3 (the Gulf). Hint 2 says each passage names more than one place. Hint 3 rules out the hover sentence only |
| R1 M6, R2 MUST-2c-1 (2.c C03) | p5 now says people along the coast have made sweetgrass baskets for hundreds of years. p6 says the ancestors kept the skill and passed it down. So the new distractor, "People have made sweetgrass baskets for a very long time", is a basket fact that is in BOTH texts. "Blades bend" is removed, so C04 is no longer leaked. Hint 2 is now a search strategy |
| R1 M7 (2.c C05) | "and how it is dried" is deleted from hint 3, so hint 3 settles blank 2 only |
| R1 M8, R2 MUST-2c-2 (2.c ebsr, now C10) | Hint 2 is now "For each Part A choice, check: is it told in the school passage, the can passage or both?" |
| R1 M9, S8, R2 MUST-2c-4 (2.c truck hot text) | The truck hot text is gone. Set 2 position 8 is now an ms item, "Which TWO facts are told in BOTH passages?" Its keys are the bottles and the truck. The prompt has no answer word, and the frame differs from C01 |
| R2 MUST-2c-3 (old C07 order gave away old C09) | The old C09 (can → energy) is removed. Set 2 is reordered: C06 important points (new), C07 match, C08 ms Both (new), C09 order, C10 ebsr |
| R1 M10, R2 SHOULD-2c-1 (C06 row 3) | The match (now C07) row is now "that cans are recycled instead of thrown away" = Both. Evidence: p7 "An empty metal can does not have to be trash", and p8 "The blue Recycle bin is for cans…" |
| R2 SHOULD-2c-4 ("important points") | New C06 (set 2, a two-slot dropdown on the main points of the two recycling texts) and new C14 (set 3, mc, what the two basketball texts show read together) |
| R1 S9, R2 SHOULD-2c-2 (C05 and C14 the same frame) | C14 (Jamal's notes) is replaced by the important-points mc. C05 is the only "fix the note" item now |
| R2 SHOULD-2c-3 | 2.c C13 is relabelled DOK 2 |
| R1 S12 / lead (cord) | p10 now says "pulled a cord". The old C14, which used the chain, is gone |
| R1 S7, S10 / lead (sweetgrass) | p6 now says: "Along the coasts of Georgia and South Carolina, many Gullah Geechee families make sweetgrass baskets. Long ago, their ancestors were taken from West Africa and forced to work as enslaved people on rice farms. They kept the skill of weaving baskets from grass and passed it down." I simplified two later sentences to keep FK at 4.2. "The smell can last for many years" is deleted |
| R1 S11, R2 SHOULD-2c-5 (2.c S01, squirrels) | Now chipmunks: cheek pouches and a burrow store (Text 1) against "the food it stored there" (Text 2). The new hint 2 is "Text 2 tells the same fact in different words. Check each choice in both texts." |
| R1 S1, R2 SHOULD-2a-3 (2.a C14) | The options are now "The main parts of a bike", "A bike's chain and pedal" (too narrow) and "Kayla riding her bike to school". The clue and hint 1 no longer say "whole picture". Hint 3 rules out the rider |
| R1 S2, R2 SHOULD-2a-3 (2.a C05) | The tips are now mulch, picking off spotted leaves and staking (no "six hours of sun"). The distractors are now "It is not about tomatoes at all", "It is the main idea…" and "It tells a step a gardener must do first". The new hint 1 is "test it against the main idea" |
| R1 S3, lead (Together P1 and P2) | P1's how step 2 now reads "each tell about a different kind of bee and its job". P1's hint 3 now rules out guarding, not the queen. P2's hint 3 now rules out "A honeybee hive can be home to thousands of bees" |
| R2 SHOULD-2a-2 | C09 hint 2 has lost "notice what is closest to where the pole ends". C09 hint 3 and how no longer say "section about the engine bay" (NOTE-4). P3 hint 3 now ends on a neutral test. C13's absurd distractor is now "Both paragraphs tell how the class gets ready for the concert", and hint 3 no longer points to the first words |
| R2 NOTE-8 (2.a S01) | "How Tires Are Made" is now "Fixing a Flat Tire" |

### 10.2 Choices left after each hint (whole-ladder check, changed items)

"Live" follows the brief's definition: a choice is live if a child who has followed every hint so far, and its logic, would still have a real reason to pick it.

| Item | All choices | After h1 | After h2 | After h3 |
|---|---|---|---|---|
| 2.a C05 | K, not-about-tomatoes, is-main-idea, a-step | 4 | 3 (a-step out: the color sentence tells no step) | K, is-main-idea |
| 2.a C08 | K, most-important, alarm, dressed | 4 | 4 | K, most-important, dressed |
| 2.a C09 | K, kitchen, street, far-from-truck | 4 | 3 (the kitchen is not a bottom-floor label) | K, street, far-from-truck |
| 2.a C13 | K, details, backward, both-ready | 4 | 4 | K, backward, both-ready |
| 2.a C14 | K, chain-and-pedal, rider | 3 | 3 | K, chain-and-pedal |
| 2.a S03 | K, details, backward, both-ready | 4 | 4 | K, backward, both-ready |
| 2.a P1 (Together) | K, queen eggs, honey, guards | 4 | 4 | K, queen eggs, honey |
| 2.a P2 (Together) | 5 targets | 5 | 5 | 4 (1:1 out) |
| 2.a P3 (ref, pick 2) | 2 keys + 3 | 5 | 5 | 2 keys + thousands |
| 2.b C05 | K, opened-first, Emily-planned, no-bridge-needed | 4 | 4 | K, no-bridge-needed ("who did what" rules out Emily-planned) |
| 2.b C09 | K, never-built, wheel-instead, riders-scared | 4 | 4 | K, wheel-instead, riders-scared |
| 2.b C10 | 3:3, 4:2, 5:1, 5:3, 6:1 | 5 | 5:1, 5:3, 6:1 | 5:3, 6:1 |
| 2.b C12 | pry, pump, sandpaper | 3 | 3 | pry, pump |
| 2.b C14 | K, rises-first, holes-first, bakes | 4 | 4 | K, holes-first, bakes |
| 2.b C08 (match) | 4 rows | 4 open | 4 open | 1 row settled, 3 open |
| 2.c C01 (one per passage) | p1: 1:1, 2:4, 3:2; p2: 1:1, 3:1, 3:3 | all | all | p1: 1:1, 3:2; p2: 1:1, 3:1, 3:3 |
| 2.c C03 | K, long-time (in both), hay, sandy | 4 | 4 (a search instruction only) | K, long-time, sandy |
| 2.c C05 | each blank 2 (the stem says both are mistakes) | 2 / 2 | 2 / 2 | blank 1: 2; blank 2: settled |
| 2.c C06 | slot 0: 3; slot 1: 3 | 3 / 3 | 3 / 3 | 2 / 3 |
| 2.c C07 (match) | 5 rows | open | open | 1 row settled |
| 2.c C08 (ms, pick 2) | 2 keys + 3 | 5 | 5 | 2 keys + sheets, blocks |
| 2.c C10 (ebsr) | A: 4; B: 4 | 4 / 4 | 4 / 4 | A: K, energy, aluminum; B: 4 |
| 2.c C14 | K, cold-gym (p9 only), hoop-and-net (p10 only), height | 4 | 4 | K, cold-gym, hoop-and-net |
| 2.c S01 | K, cheeks, sleeps, wakes | 4 | 4 | K, cheeks, wakes |

**Within-set and Together checks for the changed sets:**
- **2.c set 2:**
  - C06's how gives no counts, worms or bins.
  - C07's how does not quote the bottles sentence, so it does not give C08.
  - C08's distractors (sheets, blocks, tomatoes) are not rows in C07.
  - C09 (order) has no energy fact, and C10's key (food scraps) is not stated earlier.
- **2.c set 1:** C03 no longer contains C04's "bends" fact. Together P1–P5 do not mention Georgia, the blurred wings or sweetgrass.
- **2.a set 3:** C11's how lists the three parts of the kudzu story but does not state C12's key. This is unchanged and was noted by R1 as minor.

### 10.3 Cross-lesson topic search (all of `js/data`, excluding T-T2.js)

- **No hits:** Brooklyn, Roebling, yeast, chipmunk, mulch, Cedar Avenue, sweetgrass, Gullah, kudzu, Ferris, Naismith, peach basket, aluminum, Recycle bin, tire lever, cup phone.
- **Benign hits:**
  - "leather": a baseball glove in TS-DESC.
  - "fire station": a T-TS comment saying fire stations stay in 2.a, and one L-GUM2 sentence.
  - "spring concert": a video button in T-C.
  - "tomato": a soggy sandwich and caterpillars in T-TS. No tomato-care tips.

### 10.4 Findings not addressed, and why

- **Fire-station figure, "street" label with no leader (R1 NOTE).** Not changed. The label sits outside the doorway above the drawn road, and no item turns on it.
- **2.a C10 slot 2's weak distractor (R2 NOTE-8).** Left as it is. It is one of three options in one slot, and the other distractor is plausible.
- **R2 NOTE-3 (Together P2/P3 against 3.T.C.1.b form A).** This overlap is pre-existing on main. It is recorded for the PP-004 follow-up and not changed here.
- **R2 §5 point 3.** 04-content-plan §4.1's sentence "Together keeps its current items" is out of date. That file is not mine to edit, so this is a lead action.
- **2.b p4 at 181 words.** Accepted by R1 as within 04 §4.3.

### 10.5 Needs blind re-solve

- **3.T.T.2.a:** C05, C08, C13, C14, S03, and the hint changes on C09, P1, P2 and P3.
- **3.T.T.2.b:** C05 (new topic), C08 (row text), C09, C10 (hint 3), C12 (options), C14 (new topic), and passage p4 ("doubted").
- **3.T.T.2.c:**
  - all of set 2 (C06 new, C07 changed row, C08 new, C09 moved, C10 moved with a new hint 2);
  - C01, C03, C05, C14 (new), S01 (new);
  - passages p5 and p6 (sweetgrass wording) and p10 ("cord");
  - C04, which uses p5 and p6.

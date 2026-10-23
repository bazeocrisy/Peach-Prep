# B4 author log (b4b): 3.T.SS.1.b, 3.T.SS.1.c, 3.T.SS.1.d and 3.T.SS.2.b

**Role:** content author b4b, batch B4. **This is not a review.** Nothing here certifies the items. Reviewers should blind-solve before they read this log.

**File changed:** `js/data/lessons/T-SS.js`, in the four lesson blocks only. 3.T.SS.1.a and 3.T.SS.2.a were not touched. No id that existed before was changed, and `test`, `testB` and `clues` are unchanged. Practice text changed only where this log says so (section 5).

**How it was built.** The new passages, `core`, `similar` and `addons` are written by a builder from scratch files that are not in the repo. The builder replaces the region between `B4b` marker comments in each block, so each lesson can be rebuilt without touching anything else. The markers are comments in `T-SS.js`.

## 0. Gates (final run)

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures. No warning names any of my four lessons. The nine warnings that remain belong to other lessons. No "similar coverage" warning for my lessons |
| `node verification/check-writing.js` | 0 failures, 0 warnings |
| `node verification/check-instructional-copy.js` | 28 assertions passed |
| `python3 verification/readability.py` | All 23 new or kept passages are 100 to 117 words and FK 1.4 to 4.4 (highest: 1.b p1 4.4, p7 4.3, p6 4.2, p2 4.2 and 1.d p4 4.2). 1.d p1 is the existing hummingbird draft (104 words, FK 4.1) |
| Six-word n-gram scan of all new text against all of `js/data` (my four blocks removed) | Content matches: see section 6, findings 1 and 2. The other hits are shared directions ("A common mix-up is choosing…", "Check the other three the same way") and definitions that must repeat the 3.T.SS.2.a wording on purpose |
| Topic and key-fact grep of every topic and idiom used | Done. Collisions found while writing were replaced: rain barrel, tapir, frisbee, dribbling, butter on toast, set the table, penguins, tying shoes, the recess-benefits draft, "break the ice", "hit the hay", "in the same boat", "cool as a cucumber", "under the weather" and "let the cat out of the bag" |

**Counts per lesson.** Live-choice counts are given after hint 1 (which is also the clue), hint 2 and hint 3, so "4/4/3" means four choices live after hint 1, four after hint 2 and three after hint 3. For a two-blank item "3+3" means three options in each blank. I counted the whole ladder, not only the last step.

| Lesson | mc | Formats | Technology-enhanced | DOK 1 | DOK 3 | Items that edit inside a numbered draft |
|---|---|---|---|---|---|---|
| 3.T.SS.1.b | 6 | mc, ms, order, dropdown, hottext, match | 9 | 0 | 4 (C03, C09, C12, C14) | 5 (C02, C03, C06, C07, C11) plus C12 |
| 3.T.SS.1.c | 6 | mc, ms, dropdown, hottext | 9 | 1 (P4) | 4 (C05, C12, C13, C15) | 6 (C03, C04, C05, C11, C13, C14) |
| 3.T.SS.1.d | 6 | mc, ms, order, dropdown, hottext, match | 9 | 0 | 3 (C08, C14, C15) | 7 (C01, C02, C06, C07, C08, C11, C12) |
| 3.T.SS.2.b | 6 | mc, ms, dropdown, hottext, match | 9 | 0 | 2 (C12, C15) | 10 (C02 to C08, C11, C12, C13, with P5 counted at C06) |

Performance (write) tasks stay outside the fifteen in all four lessons. No `cr` item is used, because the architecture only allows `cr` where the lesson has a writing check that supports it.

---

## 1. 3.T.SS.1.b "Plan a piece for its readers"

**What changed.** Teach point 1 now names comparing and explaining why, and point 3 names compare and cause sections. Weak practice P4 was revised in place (the "sister" distractor was replaced). New passages p3 to p8. Core is one ref plus fourteen new items. Together is P1 to P4.

**Domains:** crafts (can telephone, paper chain), community event (pet show flyer), travel to school, cooking, recreation, reading, neighborhood safety (street flooding), plus two stem-only items (hula hoop, drain). No domain has more than six items.

### Core

| Id | Set | Component | Task | DOK | Passage | How it differs from its neighbours | Live (h1/h2/h3) |
|---|---|---|---|---|---|---|---|
| ref P5 | 1 | choose a plan for a job | match three writing jobs to a plan | 2 | none | Only item with plans as columns; all other items sit on a draft or a reader | 3 per row / 3 / one row settled, 2 for the others |
| C02 | 1 | opening for a how-to | choose the opening sentence for a draft | 2 | p3 | Opening, where C07 and C15 are closings | 4/4/3 |
| C03 | 1 | place a new step | choose where a knot step goes | 3 | p3 | Needs the physical order of the cans and string, not the plan | 4/4/3 |
| C04 | 1 | features for readers | pick TWO features for readers holding cans | 2 | none | Reader need, not draft position | 5/5/4 |
| C05 | 1 | order of steps | order a paper chain | 2 | none | Order item, 5 steps, worth 2 points | 5 steps, step 1 settled by hint 3: 5/5/4 free |
| C06 | 2 | headings | choose a heading for each of two sections | 2 | p4 | Two blanks, headings must cover all sentences | 3+3 / 3+3 / 2+3 |
| C07 | 2 | closing for an event page | choose the closing sentence | 2 | p4 | Event page, where C15 is a how-to | 4/4/3 |
| C08 | 2 | caption | choose a caption for a photo | 2 | none | Own sentences, free-standing options | 4/4/3 |
| C09 | 2 | compare two drafts | pick TWO statements on how two drafts differ | 3 | p3, p4 | Two drafts at once; needs both plans | 5/5/4 |
| C10 | 2 | plan for a purpose | complete a plan (two blanks) | 2 | none | A make-a-bed how-to plan; no draft | 3+3 / 3+3 / 2+3 |
| C11 | 3 | misplaced sentence | select the sentence in the wrong paragraph | 2 | p5 | Seven targets, one wrong paragraph | 7/7/6 |
| C12 | 3 | why a plan fits | explain why a compare plan fits | 3 | p5 | Reason for a plan, not the choice of one | 4/4/3 |
| C13 | 3 | reader to feature | match three readers to three features | 2 | none | Reader need; three features, each used once | 3 per row / 3 / one row settled |
| C14 | 3 | plan for a job | choose a plan for a street-flooding page | 3 | none | Transfer to a new topic; cause-and-effect | 4/4/3 |
| C15 | 3 | closing for a how-to | choose the closing for a hula-hoop how-to | 2 | none | How-to closing, where C07 is an event | 4/4/3 |

### Similar bank (one per core item, each unused when the child reaches it)

S01 (P5, jobs to plans), S02 (C02, oatmeal opening, p6), S03 (C03, cooling step, p6), S04 (C04, wet-hands features), S05 (C05, wash a cup), S06 (C06, p7), S07 (C07, p7), S08 (C08, photo for a flyer), S09 (C09, p6 and p7), S10 (C10, Ana's plan), S11 (C11, p8), S12 (C12, p8), S13 (C13, axolotl reader), S14 (C14, Luis), S15 (C15, jump rope). Live counts equal the twin's. The 1.b S13 animal was changed from tapir to axolotl after a collision with a 3.T.TS stem.

---

## 2. 3.T.SS.1.c "Linking words and transitions"

**Coverage gap closed.** Therefore, however, in addition and as a result are now taught (points, a "transition" glossary term, and a fourth step in each Watch Me) and are practised in core. Title changed to "Linking words and transitions: because, although, however and more". Weak practice P5 was revised from recalling the job of each word to an in-context match. Core is two refs (P6, P4) plus thirteen new items. Together is P1, P2, P3 and P5.

**Domains:** health and safety (sun), sports (soccer), pets, school, buildings and travel (road work), nature (dandelions), animals (bats), mixed. No domain has more than six items.

### Core

| Id | Set | Component | Task | DOK | Passage | How it differs | Live |
|---|---|---|---|---|---|---|---|
| ref P6 | 1 | reason | pick TWO words that give a reason | 2 | none | Only item with two keys in one blank | 5/5/4 |
| ref P4 | 1 | addition | choose the word that adds an idea | 1 | p1 (existing) | The only DOK 1 item | 3/3/2 |
| C03 | 1 | contrast | choose the word for a difference | 2 | p3 | However versus In addition, As a result | 3/3/2 |
| C04 | 1 | result | choose the revision that shows a result | 2 | p3 | Cause and effect in a draft | 4/4/3 |
| C05 | 1 | example | explain what For example tells the reader | 3 | p3 | Explains the job; does not choose a word | 4/4/3 |
| C06 | 2 | reason | join two sentences to show a reason | 2 | none | Sentence combining with since | 4/4/3 |
| C07 | 2 | result (two) | two blanks, Therefore and As a result | 2 | none | Two result words in one item | 3+3 / 3+3 / 3+3 (hint 3 does not narrow) |
| C08 | 2 | addition | pick TWO words that add another idea | 2 | none | Also and In addition | 5/5/4 |
| C09 | 2 | contrast | select the pair that uses However correctly | 2 | none | Free-standing options | 4/4/3 |
| C10 | 2 | example | finish a For example sentence | 2 | none | Stem with a blank | 4/4/3 |
| C11 | 3 | result | choose Therefore for a draft sentence | 2 | p4 | Therefore, where C04 is As a result | 4/4/3 |
| C12 | 3 | compare jobs | pick TWO sentences with words that do the same job | 3 | none | Compares jobs across sentences | 5/5/4 |
| C13 | 3 | contrast | explain why However begins sentence 6 | 3 | p4 | Reason for a word | 4/4/3 |
| C14 | 3 | addition and reason | two blanks in sentences 8 and 9 | 2 | p4 | Two different jobs in one item | 3+3 / 3+3 / 3+1 (hint 3 settles the second blank) |
| C15 | 3 | result and contrast | dandelion paragraph, two blanks | 3 | none | Transfer to a new text | 3+3 / 3+3 / 3+1 (hint 3 settles the second blank) |

### Similar bank

S01 (P6), S02 (P4), S03 to S15 (C03 to C15), all on short stems with new topics. Live counts equal the twin's.

---

## 3. 3.T.SS.1.d "Paragraphs that stay on one idea"

**What changed.**
- Teach: point 3 now says a sentence can be off topic even when it "sounds close to the topic". Point 4 adds "with its own topic sentence". Point 5 says a closing sentence does not add a brand-new fact. A glossary term "closing sentence" was added.
- Learn: the lesson allows only three Watch Me examples. I replaced the third (adding a detail about soccer practice, which the first two steps already model) with a new-paragraph example. The closing sentence is shown in the teach example, which now ends "Everyone goes home happy and full of pie."
- Practice P4 and P5 were revised so that the sentences that do not belong are near-topic (a farmer sentence in a farmers market paragraph; a lunchroom green-beans sentence and a falling-leaves sentence in a class garden paragraph).
- New passages p3 to p5 (core only) and p6 (similar only). Together is all five practice items (no refs), because the architecture needs 2 to 5 and P1 to P5 are each different tasks.

**Domains:** animals (C01 hummingbirds, C04 guinea pig), home (C02, C05, C10), weather and outdoors (C03, C15), school recycling (C06, C07, C08, as environment), community (C09 post office, C14 stores), school (C11, C12, C13). No domain has more than six items.

### Core

| Id | Set | Component | Task | DOK | Passage | How it differs | Live |
|---|---|---|---|---|---|---|---|
| C01 | 1 | closing sentence | choose a closing for the hummingbird draft | 2 | p1 | Closing, where P1 to P3 are intruder, topic and detail | 4/4/3 |
| C02 | 1 | new paragraph | select where a new paragraph begins | 2 | p3 | One long block; find the change of idea | 8/8/5 |
| C03 | 1 | topic sentence | choose the topic sentence for a storm paragraph | 2 | none | Stem; topic must cover four details | 4/4/3 |
| C04 | 1 | details | pick TWO details that fit a topic sentence | 2 | none | Details to add, where P5 removes details | 5/5/4 |
| C05 | 1 | paragraph order | order a paragraph (topic, three details, closing) | 2 | none | Order item, 5 steps, worth 2 points | 5 steps; step 1 settled by hint 3 |
| C06 | 2 | unrelated sentence | select the sentence that does not belong | 2 | p4 | Near-topic: "trash cans" shares a word with "metal cans" | 5/5/4 |
| C07 | 2 | topic sentence | choose the topic sentence for sentence 8's paragraph | 2 | p4 | Topic from a draft | 4/4/3 |
| C08 | 2 | new paragraph | decide where facts on recycling at home go | 3 | p4 | Reasoning about a new idea | 4/4/3 |
| C09 | 2 | detail | complete a post office paragraph | 2 | none | Detail via dropdown | 3/3/2 |
| C10 | 2 | closing sentence | select the best closing | 2 | none | Closing; free-standing options | 4/4/3 |
| C11 | 3 | unrelated sentences | select TWO near-topic sentences that do not belong | 2 | p5 | Two intruders, six targets | 6/6/5 |
| C12 | 3 | detail | choose a detail for sentence 9's paragraph | 2 | p5 | Detail in a draft | 4/4/3 |
| C13 | 3 | topic sentences | match three groups to topic sentences | 2 | none | Four topic sentences, one is a decoy | 4 per row / 4 / row 1 settled, 3 for the others |
| C14 | 3 | new paragraph | explain why a new paragraph starts at sentence 4 | 3 | none | Reason for a split | 4/4/3 |
| C15 | 3 | two changes | pick TWO changes that fix a paragraph | 3 | none | Combines removing an intruder with a new paragraph | 5/5/4 |

### Similar bank

S01 (C01, Saturday chores closing), S02 (C02, p6), S03 (C03, restaurant), S04 (C04, climbing playground), S05 (C05, walk to the store), S06 (C06, gym and art room), S07 (C07, Ben the helper), S08 (C08, farm and corn maze), S09 (C09, winter mornings), S10 (C10, bread), S11 (C11, good listener), S12 (C12, workshop), S13 (C13, fall and Saturday), S14 (C14, tulips and a bird feeder), S15 (C15, parade). Live counts equal the twin's.

---

## 4. 3.T.SS.2.b "Use figurative language in your writing"

**What changed.**
- Glossary now matches 3.T.SS.2.a: "simile: a comparison of two different kinds of things that uses like or as" and "metaphor: a comparison of two different kinds of things, without like or as". The big idea, teach point 2, the learn metaphor step, the write checklist and the clue on P4 use the same wording. A "personification" term was added, and teach point 5 now names it.
- Teach point 4 now says a comparison shows how two ideas are alike, with the example "The sun was a golden coin in the sky".
- The teach example now uses "as quiet as a sleeping cat" instead of "as quiet as a library at night", because a hallway and a library are both places, which 3.T.SS.2.a teaches is not a comparison of different kinds of things.
- Learn: the lesson allows only three Watch Me examples. I dropped the "puppy runs like a rocket" simile example (the teach example now models a fitting simile) and added a personification example ("The old clock muttered to itself in the empty hall"). The metaphor and idiom examples are unchanged apart from the aligned wording.
- New passages p3 to p5. Core is two refs (P4, P5) plus thirteen new items. Together is P1, P2 and P3.
- None of 3.T.SS.2.a's topics or phrases were used (swim meet, windmills, noodles, the beach and cat poem, moving day, camp letter, hold your horses, butterflies, raining cats and dogs as a key).

**Domains:** celebration (p3), city (p4), home and family (p5), weather (ref P5 on p1), school (lunchroom), social situations (idioms), animals (chick). No domain has more than six items.

### Core

| Id | Set | Component | Task | DOK | Passage | How it differs | Live |
|---|---|---|---|---|---|---|---|
| ref P4 | 1 | identify the kind | match four sentences to simile, metaphor or idiom | 2 | none | Only identification item in set 1 | per row 3 / 3 / one row left |
| C02 | 1 | simile | choose a simile for sentence 5 | 2 | p3 | Simile, where C05 is a metaphor | 4/4/3 |
| C03 | 1 | idiom | choose an idiom for sentence 7 | 2 | p3 | Excitement idiom; P3 is a happiness idiom | 3/3/2 |
| C04 | 1 | personification | select the sentence that gives a thing a person's action | 2 | p3 | First item on personification | 4/4/3 |
| C05 | 1 | metaphor and effect | choose a metaphor for many bursts at once | 2 | p3 | Picture the writer wants | 4/4/3 |
| ref P5 | 2 | place a sentence | choose where a personification sentence goes | 2 | p1 (existing) | Placement | 4/4/3 |
| C07 | 2 | metaphor | pick TWO metaphors for small cars | 2 | p4 | Near-miss: "as small as ants" is a simile | 5/5/4 |
| C08 | 2 | similes | choose a simile for the river and for the lights | 2 | p4 | Two blanks | 3+3 / 3+3 / 1+3 (hint 3 settles the first blank) |
| C09 | 2 | identify a metaphor | select the one sentence with a metaphor | 2 | none | Five kinds of sentence, including a same-kind "as" and personification | 5/5/4 |
| C10 | 2 | idioms | match three situations to idioms; one idiom is left | 2 | none | Meaning-based match | per row 4 / 4 / one row settled |
| C11 | 3 | metaphor | choose a metaphor for warmth | 2 | p5 | Needs the effect to be warm | 4/4/3 |
| C12 | 3 | relationship between ideas | choose the comparison that links a quilt to memories | 3 | p5 | Meaning relationship, not looks | 4/4/3 |
| C13 | 3 | personification | choose a person-action sentence that fits a cold night | 2 | p5 | Needs the action and the fit | 4/4/3 |
| C14 | 3 | similes in context | two blanks, a lunchroom comparison and a quiet comparison | 2 | none | Clues around the blank decide | 3+3 / 3+3 / 1+3 (hint 3 settles the first blank) |
| C15 | 3 | fit of comparisons | select TWO comparisons that do not fit | 3 | none | Evaluates a set against a goal | 5/5/4 |

### Similar bank

S01 (P4), S02 (C02), S03 (C03), S04 (C04), S05 (C05), S06 (P5), S07 (C07), S08 (C08), S09 (C09), S10 (C10), S11 (C11), S12 (C12), S13 (C13), S14 (C14), S15 (C15), all on short stems with new topics and no repeated key. Live counts equal the twin's. All of S06's hints stop short of naming the paragraph that holds the answer.

---

## 5. Changes to existing text, by lesson

| Lesson | Changed |
|---|---|
| 1.b | Teach points 1 and 3; P4 distractor ("sister") |
| 1.c | Title; big idea; teach points; a `transition` term; a fourth step in each Watch Me; P5 (definition recall became in-context match) |
| 1.d | Teach points 3 to 5; `closing sentence` term; learn example 3; teach example (closing sentence added); P4 row 4 and its why; P5 stem, two keys and why |
| 2.b | Big idea; points 2, 4, 5; glossary; teach example; learn example 1 removed and a personification example added; learn metaphor step 3; write checklist; P4 clue |

## 6. Findings not addressed

1. **Topic collision with 3.T.T.2.b-area text in `T-T2.js` (line about 1389): "How to Make a Cup Phone."** It is a numbered how-to for a string cup phone ("Poke a small hole in the bottom of two paper cups… Push one end of a long string through each hole"). My 3.T.SS.1.b p3 "Make a Can Telephone" and core items C02, C03, C04 and C09 (and their similar items) use the same kind of project and the same steps. The T-T2 stem appeared after I finished 1.b. The cheaper fix is to change the one T-T2 stem. If the other author does not, 1.b p3 and five or six items have to move to a different craft.
2. **Topic collision between the existing 3.T.SS.1.d hummingbird draft (p1, items P1 to P3, and my C01) and the paired hummingbird passages in `T-T2.js` 3.T.T.2.b** ("Tiny Flyers" and "The Long Trip South"). Both say the wings beat so fast, both mention feeders filled with sugar water, and the T-T2 sentence "The fast wings make a humming sound" matches 1.d P3's key. The 1.d hummingbird draft was there first. I did not change it (P1 to P3 are not mine to rewrite). Either T-T2 or 1.d P1 to P3 and C01 should move.
3. **Topic collision I avoided, for the record.** `T-T34.js` 3.T.T.3.c has "More Time for Recess" (recess is good for our bodies; helps us make friends; take turns). My first 1.d p5 was a recess-benefits draft and was rewritten as "Why Music Class Matters".
4. **Hint 3 settles one blank in 1.c C14, C15 and 2.b C08, C14.** This is allowed (at most one blank), but the settled blank is answered by the hint's own statement of the relation. A reviewer may want a weaker hint 3 there.
5. **Core items on one draft are distinguished by component and verb, not by different text.** For example 1.d C06, C07 and C08 all use p4, and 2.b C02 to C05 all use p3.
6. **Domain labels** for 1.d C06 to C08 (recycling at school) are tagged "environment", not "school". If a reviewer counts them as school, the 1.d school domain has seven items and one of them needs a different topic.
7. **1.c P4 is DOK 1** (the existing dropdown). It is kept as a ref. It is the only DOK 1 item in the lesson, so the limit of two is met.
8. **No illustrations, figures or character pictures** were authored in these lessons, so the default for illustrations does not apply.
9. **I did not run a browser smoke test.** The lessons parse (checked with `vm.Script`), and the gates above pass.
10. **First names only** are used (all invented). "Lena" and "Mina" appear in more than one of my lessons, and "Lena" also appears in 1.d C14.

## 7. Items that most need a skeptical blind re-solve

1. 3.T.SS.2.b C12 (scrapbook): is the metaphor the only one that shows a relationship, or could the snowy field also be defended?
2. 3.T.SS.2.b C09 (which one sentence has a metaphor): "as fast as the one at my school" compares two elevators, which the glossary says is not a simile. Check that no reader counts it, and that "an arrow shot straight up" is accepted as a metaphor.
3. 3.T.SS.2.b C15 and C13: "the chick's peeping was a roaring lion" (is it a mismatch or a harmless exaggeration?) and "marched across the room" (does it fail the fit test or only the setting?).
4. 3.T.SS.1.d C15 (two changes): "take out sentence 5" versus "begin a new paragraph at sentence 4" against the distractor "begin a new paragraph at sentence 6".
5. 3.T.SS.1.d C02 and C08: sentence 6 versus 7 as the start of the evening paragraph, and whether the recycling-at-home choice is the only one that keeps the paragraph on one idea.
6. 3.T.SS.1.d P4 and P5 (revised): is "Farmers get up very early to pick their fruit and vegetables" clearly not a detail about how busy the market is?
7. 3.T.SS.1.b C03 (knot placement, DOK 3): could "after sentence 3" or a later sentence also be defended?
8. 3.T.SS.1.c C12 and C13 (DOK 3): which two linking words do the same job, and why However is used in sentence 6.

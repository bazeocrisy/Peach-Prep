# B4 author log (b4b): 3.T.SS.1.b, 3.T.SS.1.c, 3.T.SS.1.d and 3.T.SS.2.b

> After review, sections 1 to 7 describe the first build. Section 8 records what changed (topics, similar banks, counts) and supersedes them where they differ.

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
| C06 | 2 | headings | choose a heading for each of two sections | 2 | p4 | Two blanks, headings must cover all sentences | 3+3 / 3+3 / 2+2 (recounted by hand after review) |
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

1. **RESOLVED (section 8, M1).** Topic collision with 3.T.T.2.b-area text in `T-T2.js` (line about 1389): "How to Make a Cup Phone." It is a numbered how-to for a string cup phone ("Poke a small hole in the bottom of two paper cups… Push one end of a long string through each hole"). My 3.T.SS.1.b p3 "Make a Can Telephone" and core items C02, C03, C04 and C09 (and their similar items) use the same kind of project and the same steps. The T-T2 stem appeared after I finished 1.b. The cheaper fix is to change the one T-T2 stem. If the other author does not, 1.b p3 and five or six items have to move to a different craft.
2. **RESOLVED (section 8, 1.d M4).** Topic collision between the existing 3.T.SS.1.d hummingbird draft (p1, items P1 to P3, and my C01) and the paired hummingbird passages in `T-T2.js` 3.T.T.2.b** ("Tiny Flyers" and "The Long Trip South"). Both say the wings beat so fast, both mention feeders filled with sugar water, and the T-T2 sentence "The fast wings make a humming sound" matches 1.d P3's key. The 1.d hummingbird draft was there first. I did not change it (P1 to P3 are not mine to rewrite). Either T-T2 or 1.d P1 to P3 and C01 should move.
3. **Topic collision I avoided, for the record.** `T-T34.js` 3.T.T.3.c has "More Time for Recess" (recess is good for our bodies; helps us make friends; take turns). My first 1.d p5 was a recess-benefits draft and was rewritten as "Why Music Class Matters".
4. **PARTLY RESOLVED (section 8).** Hint 3 settles one blank in 2.b C08, C14 (kept, within rule); 1.c C14, C15, S07, S15 no longer settle a blank. Original note: hint 3 settles one blank in 1.c C14, C15 and 2.b C08, C14. This is allowed (at most one blank), but the settled blank is answered by the hint's own statement of the relation. A reviewer may want a weaker hint 3 there.
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


## 8. Fixes after review (round 2)

Reviews: `B4-review-SS1bc.md` (1.b, 1.c) and `B4-review-SS1d2b.md` (1.d, 2.b). No keys were wrong. All four lessons were rebuilt with `build.js` and parse with `vm.Script`.

### 8.1 Gates after the fixes

| Gate | Result |
|---|---|
| `node verification/check-content.js --all` | 0 failures and 0 warnings for 3.T.SS.1.b, 1.c, 1.d and 2.b. (One failure remains in another author's lesson, 3.T.T.4.b, unrelated to B4b.) |
| `node verification/check-writing.js` | 0 failures, 0 warnings |
| `node verification/check-instructional-copy.js` | 28 assertions passed |
| `python3 verification/readability.py` | All passages at or below FK 4.5 (1.d p1 and 1.b p3 re-measured: 1.d p1 about 4, 1.b p3 3.1) |

### 8.2 3.T.SS.1.b

- **M1 topic.** p3 "Make a Can Telephone" became "Make a Rain Stick" (Dara). New C02 key, C03 step ("Press the foil coil against the inside of the tube"; key is after sentence 4), C04 features, C09 statements. Grep of `js/data` for "rain stick", "foil coil" and "uncooked rice" found nothing. The T-T2 cup phone was not touched.
- **M2 caption.** C08 key is now "A leaping pup in a bright scarf grabs its toy in midair." It shares no content word with the photo sentence. Two distractors repeat photo nouns (free ball and bandana; learn to catch a ball). S08 the same way ("A pair of laughing swimmers zoom down to the water below.").
- **SHOULDs.** C07 and C15 keys no longer repeat passage nouns (C15 says "ring" for hoop). C02, C12, S07, S14 word-match reduced (wm.js shows no unique-max key except C03, a positional key, and C15 at 2 words). P5 rows now avoid the cue words "how", "alike and different" and "why" in two of three rows ("a page that helps a friend fold a paper boat", "a page that sets frogs next to toads", "a page about what made a pond dry up"). Learn 3 (numbered list) is replaced by a closing-sentence Watch Me (fruit salad); teach point 5 now mentions an opening. C09 statements are about 15 words. C06 live choices recounted: 2+2, not 2+3.
- **M3 similar bank.** All 15 rebuilt (see 8.6). New frames: S03 "why can sentence 5 not swap with 4" (key is a reason, not a position), S04 whales (headings and a table), S09 a different pair of statements, S12 "how does the draft help a reader choose", S14 a choose-between-two-places guide, S15 bead bracelet (keys differ from the twin). S11 now uses p8 with the odd sentence in a different place (paragraph 3, sentence 2).

### 8.3 3.T.SS.1.c

- **M3 similar bank.** All 15 rebuilt with a different key from the twin (see the table in 8.6). S01 result words, S02 For example, S03 In addition, S04 However, S05 In addition meaning, S06 Although, S07 Although and Also, S08 reason pair, S09 As a result pair, S10 In addition, S11 For example, S12 surprise pair, S13 As a result, S14 Therefore and Since, S15 For example and Also. Option sets share at most one option with the twin.
- **M4.** Together P3 prompt no longer says "gives an example". Three of four choices now begin "For example,"; only the key is an example of stronger legs. Addon P3 hints, how and the practice clue and why were changed to match.
- **M5.** S04 is now a weather forecast (rain predicted, sun came out; key However). It no longer resembles "Malik studied his spelling words".
- **SHOULDs.** C14, C15, S07 and S15 hint 3 no longer states the relation outright or settles a blank. Learn 1 gains a Therefore sentence (a Therefore or As a result step). The echoes dandelion/cactus/frogs/toads/sandcastle: cactus, sandcastle and the old S-bank scenes are gone; dandelion (C15) was kept as a single use.

### 8.4 3.T.SS.1.d

- **M1.** S05 is now a forced order (cloth, then plates on the cloth, then forks beside the plates): "Setting the table was a big job for the twins." The connectives are First, After that, Last.
- **M2.** S06 hint 2 no longer says "One is about a different place". The intruder is now "Our gym was painted blue last summer." (about the gym, not about action).
- **M3.** S02, S05, S07, S08, S10, S11, S14 and S15 rebuilt; S14 now asks why a paragraph break would be a poor choice at sentence 3; S15 uses different change templates ("Cut the sentence about the town pool", "Split the draft before the sentence about the next morning"). S13 hint 3 no longer gives a match. C10 and S10 hint 3 now say the repeated detail is from the start.
- **M4 topic (swapped twice).** The hummingbird draft (collided with 3.T.T.2.b) became "How Hot Air Balloons Fly", which collided with L-V3 p3 "How a Hot-Air Balloon Flies" (my first grep missed the hyphen). It is now "How a Carousel Works" (p1, P1, P2, P3, C01 and their addons; S01 is the Saturday chores paragraph and was never on the topic). P1 key is sentence 6 (toy top on a table), P2 key is "The animals are what make a carousel fun to ride.", P3 key is "When the motor stops, the floor and the animals stop too.", C01 key is "A carousel only goes in circles, but it makes every ride feel special." Topic search with variants over all of `js/data` (hyphen, space, plural, key-fact stems): `carousel|merry[- ]?go[- ]?round|calliope|gallop|toy top|spinning top` has zero hits outside my own 1.d lines. Re-checked after the swap: no "balloon", "wicker" or "burner" remains in 1.d (the only "balloon" in T-SS.js is "water balloons" in another lesson). Other topics I introduced were re-grepped the same way: rain stick, fruit salad, bead bracelet, shoe shop, wicker and the oatmeal and cup-washing tasks have no hits elsewhere; foil, tulip, forecast, quilt, refrigerator, pancake batter and school bus appear elsewhere only as incidental words in unrelated stories or items, with no shared topic or key fact; the 1.b "three kinds of whales" item names a generic subject and states no facts (T-RA has an unrelated right whale source passage). Jaccard re-measured for 1.d: every S vs C pair is 0.08 to 0.19, no shared options.
- **SHOULDs.** P4 intruder is "Our school bus stops at the corner near the market." (plainly not about how busy the market is), and the second detail is "Farmers call out prices to long lines of shoppers." C11 and S11 (pick two) are now 2 points. Watch Me coverage is not widened: the lesson is at the cap of three, and the closing sentence is in the teach example and core C01, C10, S01, S10.

### 8.5 3.T.SS.2.b

- **M1.** The teach example is now "The hallway was as still as a photograph." C14 still uses "as quiet as a sleeping cat", so the example no longer pre-answers it.
- **M2.** C12 prompt says "what the quilt means to her". The memory-flavoured distractors are "a heavy locked trunk that nobody could open" and "a drawer of old photos, kept closed and forgotten". The snowy field stays as a decoy. Hint 2 no longer describes the key.
- **M3.** All 15 similar items rebuilt (8.6).
- **M4.** The P4 idiom row "It was raining cats and dogs." is now "My brother was just pulling my leg." (grep: "pulling my leg" appears nowhere else). S01 no longer uses "in the same boat". Idiom check across `js/data`: every 2.b idiom occurs only in 2.b.
- **SHOULDs.** C13 option B is now "The wind giggled and skipped around the yard." (a person's action that fails on mood, not on setting). C05 prompt no longer repeats "all at once"; the weak distractors (candle, snowfall) were replaced with a single lamp and a one-stream fountain. S05 key no longer repeats "kids" or "toward the doors". C15 and S15 (pick two) are 2 points. S03 no longer uses "out of the blue" (S10's key). Facts: guinea pigs first lived in South America (checked against Wikipedia's guinea pig article); hot air balloons usually fly in the early morning when the wind is light, rise because the air inside is heated, and use wicker baskets (checked by search). Idiom meanings are standard dictionary senses; the authoritative sites were blocked.

### 8.6 Similar-item overlap (own script, whole item text)

Script: `scratchpad/ss1bc/mj.js`. It is a raw-token Jaccard (`/[a-z']+/g`, lower case) over the prompt, stem, text and all choices, options, slot options, steps, rows and columns. The "with passage" column adds the text of every passage the item names. Ceiling 0.21 for both columns, and at most one exact or near (0.6) shared option. Highest values: 1.b S02 0.21 with passage, S15 0.20; 2.b S01 0.20; 1.c S06 0.19. Every pair is at or below 0.21 and every pair shares at most one option.

| Lesson | Pair: item / with passage / shared options |
|---|---|
| 1.b | S01-P5 .14/.14/0; S02-C02 .12/.21/0; S03-C03 .17/.20/0; S04-C04 .16/.16/0; S05-C05 .14/.14/0; S06-C06 .16/.14/0; S07-C07 .16/.17/0; S08-C08 .13/.13/0; S09-C09 .14/.20/0; S10-C10 .15/.15/0; S11-C11 .16/.19/0; S12-C12 .12/.16/0; S13-C13 .16/.16/0; S14-C14 .15/.15/0; S15-C15 .20/.20/0 |
| 1.c | S01-P6 .09/.09/0; S02-P4 .07/.06/1; S03-C03 .16/.11/1; S04-C04 .15/.11/0; S05-C05 .13/.11/0; S06-C06 .19/.19/0; S07-C07 .15/.15/0; S08-C08 .12/.12/1; S09-C09 .13/.13/0; S10-C10 .17/.17/0; S11-C11 .16/.09/1; S12-C12 .17/.17/0; S13-C13 .16/.10/0; S14-C14 .19/.13/1; S15-C15 .18/.18/1 |
| 1.d | S01-C01 .13/.12/0; S02-C02 .19/.18/0; S03-C03 .13/.13/0; S04-C04 .19/.19/0; S05-C05 .16/.16/0; S06-C06 .08/.14/0; S07-C07 .12/.10/0; S08-C08 .14/.12/0; S09-C09 .14/.14/0; S10-C10 .16/.16/0; S11-C11 .10/.11/0; S12-C12 .12/.10/0; S13-C13 .17/.17/0; S14-C14 .19/.19/0; S15-C15 .18/.18/0 |
| 2.b | S01-P4 .20/.20/0; S02-C02 .13/.09/0; S03-C03 .09/.09/0; S04-C04 .10/.10/0; S05-C05 .15/.12/0; S06-P5 .10/.10/0; S07-C07 .14/.08/0; S08-C08 .15/.10/0; S09-C09 .17/.17/0; S10-C10 .13/.13/0; S11-C11 .15/.12/0; S12-C12 .19/.17/0; S13-C13 .12/.10/0; S14-C14 .11/.11/0; S15-C15 .15/.15/0 |

None is over. No similar item has the same key as its twin (checked by hand; for the hottext and dropdown items the correct text differs).

### 8.7 Hand-recounted live choices after hint 3 (changed items only)

Counts are the choices still standing after hint 1, hint 2 and hint 3 (clue = hint 1).

| Item | Live after H3 | Note |
|---|---|---|
| 1.b C02 | 3 of 4 | H3 removes the "where rain comes from" choice |
| 1.b C03 | 3 of 4 | H3 removes "after sentence 3" |
| 1.b C06 | blank 1: 2 of 3; blank 2: 2 of 3 | corrected from 2+3; H3 removes "Pets That Do Tricks" in both blanks |
| 1.b C08 | 3 of 4 | H3 removes the date sentence |
| 1.b S01 | 2 rows to place | H3 settles one row |
| 1.b S03 | 3 of 4 | H3 removes the "bowl is not on the list" reason |
| 1.b S09 | 4 of 5 | H3 removes the headings statement |
| 1.c C14, C15 | blank 1: 3 of 3; blank 2: 3 of 3 | H3 no longer settles a blank |
| 1.c P3 | 3 of 4 | H3 removes the "sunny day" choice |
| 1.c S01 | 4 of 5 | H3 removes However |
| 1.c S07, S15 | blank 1: 3 of 3; blank 2: 3 of 3 | H3 gives no choice away |
| 1.d S05 | one position settled (the plates need the cloth first) | order is now forced |
| 1.d S06 | 3 of 4 | H3 removes the whistle sentence |
| 1.d S08, S14 | 3 of 4 | |
| 1.d C11, S11 | 4 of 5 (pick 2) | |
| 2.b C05 | 3 of 4 | H3 removes the "very big finale" choice |
| 2.b C12 | 3 of 4 | H3 removes the snowy field |
| 2.b C13 | 3 of 4 | H3 removes the "as cold as" simile |
| 2.b S06 | 3 of 4 | |
| 2.b C08, C14, S08 | blank 1 narrowed in H3, blank 2: 3 of 3 | kept within the rule |

### 8.8 Items that most need a skeptical blind re-solve (updated)

1. 1.b C03 (rain stick, DOK 3): "after sentence 4" versus "after sentence 3". Could pressing the coil before the tube is closed (after sentence 3) be defended, or after sentence 5?
2. 1.b S03 (why sentence 5 cannot swap with sentence 4): the key and the "grown-up helps" distractor.
3. 1.b C08 and S08 (captions with no shared words): is the key still clearly the only caption that describes the photo?
4. 1.c S04 (forecast, However) and S06 (Although): could "Also" or "Therefore" be defended?
5. 1.c S05 (In addition meaning) and S11 (For example in "Skiing and skating are two of them").
6. 1.c P3 (three choices begin "For example,"): the key is the only one that is a case of "stronger legs".
7. 1.d S05 (forced order: cloth, plates, forks): is there exactly one valid order?
8. 1.d S06 (gym painted blue), S08 (cows food news), S14 (why not a break at sentence 3), S15 (cut the town pool, split before the next morning).
9. 1.d P1 to P3 and C01 (carousel rewrite): P1 key sentence 6 (toy top), P2 topic sentence (the animals), P3 detail (motor stops, floor and animals stop), C01 closing.
10. 2.b C12 (scrapbook against the trunk and the drawer of forgotten photos): is the key the only one that shows what the quilt means to Zoe?
11. 2.b C13 (wind giggled and skipped) and C05 (garden of flowers), S06 (batter crept, between sentences 1 and 2), S13 (refrigerator hummed a sleepy tune).


## 9. Fixes after second review of 1.b and 1.c (B4-review-SS1bc.md, "Second review")

**MUSTs**
- **R2-M1 (1.b S09).** Option C is now "Nora's page tells readers what to do first, next and last." (false for Nora, and does not depend on the sentence labels). `how` and `why` updated. Two distractors were lengthened ("a clear heading placed over each part", "about to start cooking") to shrink the key-length gap.
- **R2-M2 (1.c core P6).** P6 is now "Dev ate two bowls of soup ____ he was very hungry." Key still because and since, but the frame, the reason (hunger, not weather) and the options (because, since, although, also, instead) are new, so it no longer paraphrases Watch Me 1 ("Mia stayed inside ____ it was raining hard"; because, although, for example). Clue, why and the P6 addon hints and how were rewritten (hint 1 shortened to pass the hint-length warning).
- **R2-M3 (1.c S08).** S08 is now a different job: pick the TWO words that add one more thing ("Ben plays the drums. ____ he sings in the school choir."; key Also and In addition; distractors Although, Therefore, Instead). It resembles C08, so `like` stays C08. The key pair is shared with C08 (2 exact shared options, the key words themselves; the other three options differ and the stem, prompt and content differ; Jaccard 0.16). This is the only pair above one shared option and is accepted because the taught adder pair is only Also and In addition. S08 no longer shares a key pair or an option set with P6. The "cheer-stopper" wording (R2-S13) is gone with the old item.

**SHOULDs done**
- R2-S2: the "Next," step-adding distractor was removed from C07, C15 and S07 (kept in P4 and Watch Me 3); the matching hint 3s now say what the sentence does ("gives one more thing to do", "about what the lifeguard will do").
- R2-S3: S15 key is now "Make one in every color, and trade bracelets with a friend." (no "Now you have a ..." frame; also no longer the longest option).
- R2-S4: P1 hint 2 no longer points at sentences 4 and 5; P3 hint 2 no longer lists the four jobs.
- R2-S5/S7: P5 and S01 topics changed. P5 rows are now "make a kazoo", "a bike next to a scooter" and the pond row; S01's cause row is now "why a balloon pops when it gets too big". Greps over `js/data` (kazoo: no hits; frogs-and-toads and paper boat removed; bike and scooter appear elsewhere only as incidental words).
- R2-S8: C15 now uses soap bubbles carried by a breeze (no dandelion or seed text left); bubbles appear elsewhere only as incidental words.
- R2-S9: C14 and the p4 passage sentence 8 is now "Coach hands out cold water after every drill." so only In addition fits as a new, separate good thing.
- R2-S10: hint 2 of S02 and S13 and hint 3 of C14 and S14 no longer state the relation; they tell the child to test each word.
- R2-S1 (partly): key length gaps reduced in S09 and S15, C07 and C15 distractors are of similar length; P1 to P3 and C14 were not lengthened.

**SHOULDs not done:** R2-S6 (question-frame variation in S02, S03, S09, S15), R2-S11 (S01 key pair equals C07's), R2-S12 (C08 distractor). Reason: they are SHOULDs with the ceiling still met on word sets (every pair <= 0.21), and each would risk new blockers; they remain open for the coordinator.

**Gates after these edits:** check-content PASS (0 failures, 9 warnings, none in 1.b or 1.c), check-writing 0 failures, check-instructional-copy 28 assertions, readability: 1.b passages 100 to 118 words FK 2.0 to 4.4, 1.c 102 to 114 words FK 2.5 to 3.8, T-SS.js parses. Jaccard (mj.js, word sets): every similar pair <= 0.21 with and without passages; S08 vs C08 is 0.16 with 2 shared key options.

**Changed items for the third blind re-solve:** 1.b S09, S15, S01, P5, C07, C15, S07, P1 and P3 (hints only); 1.c core P6, S08, C15, C14 (and passage p4 sentence 8), S02, S13, S14 (hints).

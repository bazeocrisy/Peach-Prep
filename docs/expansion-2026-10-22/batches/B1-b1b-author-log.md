# B1 author log (b1b): TS-PS and 3.T.C.2.a

**Role:** content author b1b, batch B1. **This is not a review.** Nothing here certifies the items. Reviewers should blind-solve before reading this log.

**Files changed:**
- `js/data/lessons/T-TS.js`, the TS-PS block only.
- `js/data/lessons/T-C.js`, the 3.T.C.2.a block only.

**What changed in each block:**
- Added the keys `core`, `similar` and `addons`, and new passages.
- Edited one or two `teach.points` and added one Watch Me example (see §5).
- Nothing in `practice`, `test`, `clues` or `coach` changed, and no existing id changed.

## 1. Gates

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS: 0 failures, 14 warnings. In my lessons the only warnings are the "similar" coverage notices (§4). |
| `python3 verification/readability.py` | Every new passage is under FK 4.5 (§2). |
| `check-writing.js`, `check-instructional-copy.js` | Pass |
| Scratch audit (`scratchpad/b1b/audit.js`) | Checks run on every core item: (1) words that only hint 3 shares with the key; (2) 4-word runs of a key inside any hint; (3) same-set leakage: 5-word runs of another item's key inside an item's hints, how, why or misconception, or inside its visible choices; (4) a 6-word n-gram scan of every new passage, stem and choice against all other lessons, sets, tasks, Watch Me, form A, mixed sets and the Practice Test. The residual hits are listed and judged in §6. N-gram result: one generic phrase only ("the speaker does not want to", R-POE-01). |
| Browser, port 8732 (Playwright, 1366 and 390 wide) | These pages load with no page errors: `#skill/<key>`, `/learn`, `/try`, Together and `:y`, `:y2`, `:y3` for both lessons. In each own set I stepped through all five items and the right prompts appear in order. The two-part passage (headings) and the poem render correctly at 390. |

## 2. Passages added

All passages are original. None is used by `test`. Children's names are ordinary first names, and there are no brands and no real people.

| Lesson | Id | Title | Words | FK | Domain | Used by |
|---|---|---|---|---|---|---|
| TS-PS | p3 | The Wobbly Table | 141 | 3.3 | family / home | C05 |
| TS-PS | p4 | The Tangled Ropes | 168 | 3.4 | sports / community (Double Dutch team) | C06 to C10, C13 |
| TS-PS | p5 | Dots on the Glass (informational) | 177 | 3.7 | science / school | C11, C12, C13 |
| TS-PS | p6 | The Droopy Bean Plants | 108 | 1.9 | school / science | S01 |
| TS-PS | p7 | The Soggy Sandwich | 111 | 3.5 | family | S02 |
| 3.T.C.2.a | p3 | Ms. Pruitt's Corner | 148 | 1.6 | school / community (crossing guard) | C04, C05 |
| 3.T.C.2.a | p4 | The Big Red Chair (two parts, two narrators; `## Part 1` and `## Part 2` headings) | 175 | 2.3 | community (barbershop) | C06 to C10 |
| 3.T.C.2.a | p5 | Bath Day (poem, four stanzas; the speaker is a dog and is never named) | 16 lines | n/a | home / pets | C11, C12 |

**Fact check, p5 (TS-PS).** One hawk silhouette does not stop window strikes. Small markers spaced about two inches apart across the whole pane do. This is the bird-safe glass guidance (the American Bird Conservancy "2 by 2" rule). The text makes no claim about any real school.

**Themes and settings deliberately avoided** (form A, mixed sets, the Practice Test and other lessons):
- TS-PS form A ("The Muddy Path": a school garden, boards, sand, a low spot and wood chips; and the cats and turtles "but" sentence)
- ants, kites, a fish tank and soccer balls (TS-PS practice, Watch Me and teach)
- sea turtles and gopher tortoises (R-INF-01 and other lessons)
- water bottles, the lunchroom, gardens, gates and hamsters
- 3.T.C.2.a form A: Grandpa and fishing (p2), the kite poem with Dad (T6), and the rainy hike with a salamander (T5)
- fireflies (R-POE-01), songpyeon (R-LIT-02), the Blue Pitcher (PT-1)
- talent shows, moving house and kites

A first draft of 3.T.C.2.a p3 had a grandpa. I changed him to a crossing guard so it does not echo form A's T3 key, where Grandpa's kindness is something the narrator misses.

## 3. The fifteen

**Component codes**

TS-PS (3.T.SS.1.a and 3.T.T.1.b):
- A: identify the problem and what is at stake
- B: the tries and their clue words (tried, but)
- C: why a try failed, and the real problem. This is the hardest component and the coach's "push" skill.
- D: the solution and the evidence that it worked
- E: how the text is arranged as problem and solution, in stories and in true texts
- F: how a character or a detail of the setting works in the plot (3.T.T.1.b)

3.T.C.2.a ("Describe different perspectives of the narrator or speakers and distinguish them from their own", p. 27):
- N: identify the narrator or speaker
- P: describe the narrator's perspective
- C: contrast the perspectives of characters or speakers
- R: distinguish the reader's own view. This is the hardest component.
- Ch: a change in perspective

### TS-PS

| # | Id | Set | Comp | Task | Format | Pts | DOK | Text | How it differs from the others |
|---|---|---|---|---|---|---|---|---|---|
| 1 | SK-TSPS-P4 (ref) | 1 | B | construct | dropdown | 2 | 2 | p1 | The only item where the child builds the clue words into a sentence |
| 2 | SK-TSPS-P5 (ref) | 1 | C | explain | mc | 1 | 3 | p1 | Why one named try failed, on a story; a single reason |
| 3 | SK-TSPS-C03 | 1 | D | compare | mc | 1 | 3 | p1 | Compares the solution with the two failed tries. Every distractor is something a failed try did, or whose idea it was |
| 4 | SK-TSPS-P6 (ref) | 1 | B/E | identify (what a clue word does) | mc | 1 | 2 | p1 (boxed sentence) | The job of "but" in one sentence |
| 5 | SK-TSPS-C05 | 1 | C/A | use evidence | hottext | 1 | 2 | p3 | Find the sentence that gives the real cause. The distractors are an effect, a reason a try failed, a guessed cause (the floor), an action and the fix |
| 6 | SK-TSPS-C06 | 2 | F/A | explain (author's purpose) | mc | 1 | 2 | p4 | Why a time-and-place detail (the fair in two weeks) matters to the problem |
| 7 | SK-TSPS-C07 | 2 | E/A/B/D | identify (sort onto the structure) | match | 2 | 2 | p4 | Sorts events onto a problem, try and solution map. One column is used twice |
| 8 | SK-TSPS-C08 | 2 | C | use evidence | ebsr | 2 | 3 | p4 | The real cause with support. Each Part A distractor is ruled out by the text (new ropes, more space, "Your jumping is fine"). Part B separates the cause from sentences about failing tries |
| 9 | SK-TSPS-C09 | 2 | D | use evidence | hottext (choose two) | 2 | 2 | p4 | Proof the solution worked, kept apart from the decision itself and from a partial improvement |
| 10 | SK-TSPS-C10 | 2 | F | explain (a character's role) | mc | 1 | 2 | p4 | A helper who finds the real problem, but does not do the fixing |
| 11 | SK-TSPS-C11 | 3 | C | explain (two reasons from the text) | ms | 2 | 2 | p5 (informational) | Why a try failed in a true text. The distractors sound possible but are not in the article |
| 12 | SK-TSPS-C12 | 3 | E | construct (order the parts of the article) | order | 1 | 2 | p5 | The only ordering item: problem, try, why it failed, solution, result |
| 13 | SK-TSPS-C13 | 3 | C/E (also D) | compare | match (three columns) | 2 | 3 | p4 + p5 | Compares across two texts. Two rows fit both texts and two fit only one |
| 14 | SK-TSPS-C14 | 3 | C/D | transfer (choose a plan) | ms | 2 | 3 | new stem (park, raccoons) | Picks plans that fix the real problem. The distractors are bigger versions of failed tries and a plan that only cleans up afterwards |
| 15 | SK-TSPS-C15 | 3 | E/C | transfer / construct (complete a paragraph) | mc | 1 | 3 | new stem (school swings) | Chooses the sentence that does the "why it failed" job in a writer's paragraph. The distractors stay on topic but do not do that job |

**Tallies**
- **Points:** 22.
- **Formats:** seven. mc 6 (the limit), ms 2, hottext 2, match 2, dropdown 1, ebsr 1, order 1. Nine items use technology-enhanced formats.
- **DOK:** DOK 3 on six items (2, 3, 8, 13, 14, 15), DOK 2 on nine, DOK 1 on none.
- **Tasks:**
  - identify: 4, 7
  - explain: 2, 6, 10, 11
  - evidence: 5, 8, 9
  - construct: 1, 12, (15)
  - compare: 3, 13
  - transfer: 14, 15
- **Components:**
  - A: 5, 6, 7
  - B: 1, 4, 7
  - C: 2, 5, 8, 11, 13, 14, 15. It appears in every set.
  - D: 3, 9, 14
  - E: 4, 7, 12, 13, 15
  - F: 6, 10
- **Each set covers at least three components:**
  - set 1: B, C, D, A
  - set 2: F, A, B, D, E, C
  - set 3: C, E, D
- **Domains:**
  - home and family: 1 to 5
  - sports and community: 6 to 10
  - science and school: 11, 12
  - sports and science: 13
  - community and nature: 14
  - school: 15
  - That is at least four domains, and none has more than five items.
- **Passage load:** p1 has 4 items, p3 has 1, p4 has 6, p5 has 3, and two new stems.
- **Variety:** two stories, an informational article, a cross-text comparison and two transfer stems. True problem-and-solution structure in a true text is covered by p5 and C15 (teach point 5).

### 3.T.C.2.a

| # | Id | Set | Comp | Task | Format | Pts | DOK | Text | How it differs from the others |
|---|---|---|---|---|---|---|---|---|---|
| 1 | SK-TC2a-C01 | 1 | C | use evidence | ms | 2 | 2 | p1 | A secondary character's own view, kept apart from the narrator's view of him and from plain facts |
| 2 | SK-TC2a-P5 (ref) | 1 | Ch | explain | mc | 1 | 3 | p1 | The narrator's view changes |
| 3 | SK-TC2a-C03 | 1 | N | identify | mc | 1 | 2 | new stem (school bus) | An outside narrator with "I" inside quotation marks (teach point 5) |
| 4 | SK-TC2a-C04 | 1 | R (with P) | construct | dropdown | 2 | 3 | p3 | The child places the narrator's view and a reader's view in the right blanks. The same two ideas appear in both slots, so the task is to tell them apart |
| 5 | SK-TC2a-C05 | 1 | P / Ch (no change) | use evidence | ebsr | 2 | 2 | p3 | The narrator's view does NOT change even when the reader's does. It is the counterpart of item 2 |
| 6 | SK-TC2a-C06 | 2 | N | use evidence (clues) | ms | 2 | 2 | p4 | Clues that a second part has a new narrator. The trap: "uses the word I" is true of both parts |
| 7 | SK-TC2a-C07 | 2 | C | identify (attribute views) | match | 2 | 2 | p4 | Assign each view to one of two narrators |
| 8 | SK-TC2a-C08 | 2 | P | explain (a comparison) | mc | 1 | 2 | p4 | A simile shows the narrator's view. The distractors read it literally |
| 9 | SK-TC2a-C09 | 2 | Ch | use evidence | hottext | 1 | 2 | p4 | A change shown through another narrator's eyes, kept apart from moments in the middle of the haircut |
| 10 | SK-TC2a-C10 | 2 | R / C | explain (author's choice) | mc | 1 | 3 | p4 | Why the author switches narrators: what a second view lets a reader see |
| 11 | SK-TC2a-C11 | 3 | N | use evidence (clues) | ms | 2 | 3 | p5 (poem) | A speaker who is not named and not human. Only clues that fit a dog alone count |
| 12 | SK-TC2a-C12 | 3 | R | construct (written) | **cr** | 0 | 3 | p5 | The child states the speaker's view and their own, with a detail. Never scored; sample and four criteria |
| 13 | SK-TC2a-C13 | 3 | N | transfer (sort) | match | 2 | 2 | four new one-line stems | Character narrator or outside narrator across four new snippets, including "we", and "I" inside quotation marks |
| 14 | SK-TC2a-C14 | 3 | R | transfer | mc | 1 | 3 | new stem (soccer) | An unreliable narrator. The reader sees what the narrator will not admit |
| 15 | SK-TC2a-C15 | 3 | C | compare | ms | 2 | 3 | new stem (two journal entries, art class) | Two narrators on the same event. One distractor is true of both (alike, not different) |

**Tallies**
- **Points:** 22 scored, plus the cr item.
- **Formats:** seven. mc 5, ms 4, match 2, dropdown 1, ebsr 1, hottext 1, cr 1. Nine items use technology-enhanced formats.
- **DOK:** DOK 3 on seven items (2, 4, 10, 11, 12, 14, 15), DOK 2 on eight, DOK 1 on none.
- **Tasks:**
  - identify: 3, 7
  - explain: 2, 8, 10
  - evidence: 1, 5, 6, 9, 11
  - construct: 4, 12
  - compare: 15 (and 1, a contrast)
  - transfer: 13, 14
- **Components:**
  - N: 3, 6, 11, 13
  - P: 4, 5, 8
  - C: 1, 7, 10, 15
  - R: 4, 10, 12, 14. It appears in every set.
  - Ch: 2, 5, 9
- **Domains:**
  - family: 1, 2
  - school: 3, 4, 5, 15
  - community: 6 to 10
  - home and pets: 11, 12
  - mixed: 13
  - sports: 14
  - None has more than five items.
- **Text frames (the matrix asked for variety):** a first-person story, a third-person snippet, two narrators in two parts, a poem with an animal speaker, journal entries, and (in the similar bank) a letter and a tree speaker.

## 4. Similar bank

| Id | `like` | Comp | Format | DOK | Text |
|---|---|---|---|---|---|
| SK-TSPS-S01 | P5, C05, C11 | C | mc | 2 | p6 (bean plants) |
| SK-TSPS-S02 | C08, C05 | C (real cause and evidence) | ebsr | 3 | p7 (soggy sandwich) |
| SK-TSPS-S03 | C14, C15 | C/D transfer | mc | 3 | new stem (ceiling leak) |
| SK-TC2a-S01 | C04, C14 | R | mc | 3 | letter stem (chess club) |
| SK-TC2a-S02 | C11, C03, C06 | N | mc | 2 | poem stem (tree speaker) |
| SK-TC2a-S03 | C15, C07, C01 | C | ms | 2 | new stem (library mural) |

Each `like` lists only the core items the extra question really practises. As in B0, some core items have no extra question:
- TS-PS: nine items.
- 3.T.C.2.a: seven items.

check-content warns about these, and the lead kept the bank at three per lesson.

## 5. Teaching changes (only where the fifteen asked for a task that was not modelled)

**TS-PS**
- **`teach.points[1]`** adds: "But can also show a difference, so check what comes just before it." This is needed by C09 and C08: p4 uses "but" for a problem, for failed tries and for a difference.
- **New Watch Me 3, the food bank.** It models four things:
  - finding the real problem from a failed try in a true text;
  - a helper who finds the real problem (C10);
  - testing a new plan against the real problem (C14, C15);
  - noticing the problem, try, real problem, solution and result order (C12).
- The lesson now has three Watch Me examples and five teach points.

**3.T.C.2.a**
- **Point 2** adds that comparisons show a view, with the example "My knees shook like leaves". This is for C08.
- **Point 3** adds that a narrator's view may change or may stay the same while the reader's changes. This is for C05.
- **Point 5** adds that clues (the example is "wings or a beak", chosen so it does not give C11's tail and paws) can tell who the I is, and that a story can have two parts with two narrators. This is for C06 and C11.
- **New Watch Me 3, breakfast in bed told by the child and by Mom.** It models:
  - who tells each part;
  - how the two views differ;
  - what the second narrator adds (C10);
  - the reader's own view.
- The lesson now has three Watch Me examples and five teach points.

## 6. Reuse and weak-item decisions

**Reuse**

| Item | Decision | Reason |
|---|---|---|
| SK-TSPS-P4, P5, P6 | Reused by `{ ref }` as items 1, 2 and 4, with hints and how in `addons` | The inventory marks them reusable. See the note on P4 and P6 below |
| SK-TSPS-P1 to P3 | Kept in Together, with addons | Guided practice. The P2 addon avoids the word "smell", so it does not pre-teach P5's key |
| SK-TC2a-P5 | Reused by `{ ref }` as item 2, with addons | The inventory marks it reusable |
| **SK-TC2a-P4 (snow poem)** | **Not in core. It moves to Together** (P1 to P4, four items), with addons | The coverage matrix notes that form A's T6 mirrors P4's frame ("How is the speaker's view … different from …"). Contrast is covered in core by other frames (C01, C07, C15). The lead may prefer P4 back in core |
| Inventory weak items | None are listed for these two lessons | — |

**Note on P4 and P6 (both existing items).** P6's Show me how explains that "but" shows a failed try, and P4's second slot is "but". They overlap by design in the old lesson. I kept both, as the inventory allows.

**Leakage handled while authoring**
- **TS-PS set 2 order.** The cause item (ebsr) and the map (match) were swapped, so the map is item 7 and the cause item is item 8. The cause item's reasoning mentions the failed tries. With the map first, nothing in an earlier item's help answers a later item; at most, the later cause item repeats facts the map has already sorted.
- **TS-PS C03.** The how no longer uses "but" in a sentence that copies P4's frame.
- **3.T.C.2.a C07 and C10.** The how no longer says Darius "dreads" the haircut, which was C08's key.
- **3.T.C.2.a C09.** The how and why no longer give the "brave" row of C07.
- **3.T.C.2.a C09, hint 2.** It no longer echoes the key's words ("turned the chair toward the mirror").
- **Ladder fixes**
  - TS-PS C09: the first hint 3 plus hint 2 left only the two keys. Hint 3 now rules out a sentence outside the hint 2 region.
  - TS-PS C05: hint 3 no longer gives a three-way sorting scheme.
  - TS-PS C12: hint 2 no longer lists where every clue word is.
  - TS-PS P5 addon: hint 3 no longer asks "what the ants do to find the food".

**Residual audit hits, judged acceptable**
- TS-PS C06's how mentions that the ropes tangle every time, and C07's row 1 is the problem. That is trivial.
- C10 has a distractor about new ropes, which C07 sorts. That is a distractor, not a key.
- C12 hint 3 places the final step. It completes one slot, as 04 §4.5 allows.
- C12 (cr) hints share words with the sample. That is intended for a sentence frame.

## 7. Notes for the lead, the engine and the reviewers

1. **C12 is the first `cr` item in core.** It has no `points` field, `rows: 4`, a `sample` and four `criteria`. Its `why` says "Many answers can be right." `T.cr` exists in items.js and the set renders. Please confirm the "Compare with the sample" flow on it.
2. **TS-PS C13 carries both p4 and p5**, like B0's C14. C14 and C15 (TS-PS) and C03, C13, C14 and C15 (3.T.C.2.a) use `stem` with `passages: []`.
3. **3.T.C.2.a p4 uses `## Part` headings.** The displayed paragraph numbers skip them, so the hints say "Part 2" or "the end of Part 2" and never give paragraph numbers on p4. Refs use the raw block numbers: p4:5 to p4:7 are displayed as paragraphs 3 to 5.
4. **TS-PS C09 has the same skill as form A T4 Part B** (a sentence that shows the solution worked). It uses a different passage, a choose-two format and different distractor logic. **TS-PS C05 and C08 practise "the real cause"**, the concept form A T5 assesses, but with different frames and passages. Reviewers should judge whether this is practice or rehearsal.
5. **Clue-word highlighting** (TS-PS `clues.words`) marks every "but", "tried" and "decided" in practice. C09's targets include sentences that use "but" in the wrong role, and C07's map rows do not depend on the marks.
6. **Points for reviewers to test hardest**
   - TS-PS C08 Part B: is "\"Your jumping is fine, Amari,\" Coach Bell said." a tempting but clearly weaker support? Coach's later line, "The ropes are not keeping the same beat", is deliberately not a choice.
   - TS-PS C11: "Birds see reflections" is also in the article but is not offered as a choice. Check that the two keys are the article's reasons for the *sticker* failing.
   - TS-PS C14: is "Have the workers come earlier each morning" clearly not a solution?
   - 3.T.C.2.a C01: is "He runs over to tell the first family about his truck" clearly about Dev's feeling and not only an action?
   - 3.T.C.2.a C05: the narrator's view at the end, "See? Grumpy.". Paragraph 1's present-tense view is deliberately not a Part B choice.
   - 3.T.C.2.a C09: "\"Maybe,\" he said." is a target and a distractor. "He was still grinning when his mom paid." is not a target, because it would also be defensible.
   - 3.T.C.2.a p3 reads low (FK 1.6). Its content (an unreliable view of a crossing guard) suits grade 3.
7. I have not reviewed any of this myself, and I ran no git commands.

## 8. Fixes after the B1 reviews (2A and 2B)

**Sources:**
- B1-review-2A.md (2A)
- B1-review-2B.md (2B)
- the lead's message
- the rules added to AUTHOR-BRIEF.md after the B1 reviews

Every MUST and SHOULD for TS-PS and 3.T.C.2.a is addressed below. **Sections 1 to 7 above describe the first version; this section supersedes them** wherever they differ.

### 8.1 Needs blind re-solve

These items changed in their choices, targets, rows, slots, stem or passage.

**TS-PS passages**

| Item or text | What changed | Finding |
|---|---|---|
| **p3 "The Wobbly Table"** (rebuilt, 135 words, FK 2.8) | One failed try (Aunt Bea moves the table to the smooth floor). Niko then reasons it out loud in paragraph 3 ("If the floor is smooth, the trouble must be the table"). The cause is in paragraph 3. The last line is new | 2A T-S3: the old layout copied form A (two failed tries, "looked closely", the cause in paragraph 4) |
| **p4 "The Tangled Ropes"** (rebuilt, 176 words, FK 3.1) | Amari works out the cause in paragraph 2, before any try. Kiara disagrees ("The ropes are just old"), and the new ropes fail in paragraph 3. Kiara changes her mind and the chant follows in paragraph 4. The result is in paragraph 5. Coach Bell, the time detail ("in two weeks") and "The problem was finally solved!" are gone. The team practises in Ms. Bell's driveway | 2A T-S3; 2B N-8 |
| **p7 "The Soggy Sandwich"** (similar only, rebuilt, 117 words) | One failed try. Kayla finds the cause herself by peeling the sandwich open, in paragraph 3 | 2A T-S3 |

**TS-PS core items**

| Item | What changed | Finding |
|---|---|---|
| **Set 1 order** | Now P5 (ref), C02, C03, C04, C05. **P4 and P6 left core** and are now in Practice Together (P1, P2, P3, P4 and P6: five items) | 2B M-2: P4 gave away P6, and the two shared key logic. With either one in Together and the other in set 1, Together would pre-answer set 1 (the new rule), so both moved |
| **SK-TSPS-C02** (new, p1) | mc: how Grandma helps (a character's role). The distractors are Jamal's actions | Replaces the old C03 (the pan compared with the tries), because Together P3 (the solution) would pre-answer it under the new rule |
| **SK-TSPS-C03** (new, p3) | dropdown (2 points): the problem and Aunt Bea's try | The new layout of p3 |
| **SK-TSPS-C04** (p3) | hot text, the real cause, rebuilt on the new p3. Targets are 1:2, 2:1, 2:3, 3:1, 3:2, 3:4 (the key) and 4:1 | The old C05 moved here |
| **SK-TSPS-C05** (new, p3) | mc: what "but" shows in "Three legs stayed still, but the fourth leg wiggled…". The key is a difference | 2A T-S4 asked for a "but shows a difference" item. It is kept away from the cause item's Part B key |
| **SK-TSPS-C06** (new, p4) | dropdown: Amari wants to find out why; Kiara wants new ropes (compare two characters) | Replaces the "fair in two weeks" item (2A T-S5: the frame and key of 3.T.T.1.b form A T2) |
| **SK-TSPS-C07** (p4) | match, now four columns: problem, a try that did not work, solution, proof that it worked | Absorbs the "proof it worked" component in a sorting task. 2A T-S2 and the lead: the old C09 rehearsed form A T4 Part B |
| **SK-TSPS-C08** (new, p4) | mc: why the tangling matters (the best part of the show needs Amari to jump in). The stakes come from a plot element, not a time detail | 2A T-S5 |
| **SK-TSPS-C09** (new, p4) | mc, DOK 3: why Kiara says "Let's try it your way" (a failed try changes a character's mind) | Replaces the old C09 hot text (rehearsal of T4 Part B; 2A T-M1 and 2B M-1) |
| **SK-TSPS-C10** (p4) | ebsr, the real cause, moved to the end of set 2 so no earlier item answers it. Part A has a new distractor ("Amari's sore ankles make her trip on the ropes"). Part B is the hands sentence (key), "Then she watched…", the new-ropes sentence and the problem sentence. Two Part B choices are in paragraph 2, the place hint 2 names | 2A T-S4 (C08 answered C10); the new evidence-based (Part A/Part B) rule |
| **SK-TSPS-C12** | `points: 2` (five-step order) | 2B S-7, 2A T-N2, the new rule |
| **SK-TSPS-C13** | New rows: the cause is found before any fix (Ropes only); someone from outside explains (Dots only); the first try does not fix the real cause (both); the text tells what happened after the solution (both) | 2A T-N1 and 2B N-8: the "at a school" row was setting trivia |
| **SK-TSPS-C15** | Two paint-colour distractors became wrong-way explanations ("rust on the seats", "the paint was still wet"). The recess distractor is longer. Hint 2 is now "Read sentences 3 and 5." | 2A T-M2 |
| **SK-TSPS-S02** | Rebuilt on the new p7. Part B has two choices in paragraph 3 | 2A T-S3, T-S1 |
| **SK-TSPS-P5** (ref) | `dok` 3 → 2 (a field change only) | 2A T-S6, 2B S-6 |

**3.T.C.2.a**

| Item | What changed | Finding |
|---|---|---|
| **SK-TC2a-C04** | **Moved to a new stem** (big sister Renee and the backpack; family). Same dropdown frame. Options: "likes giving orders", "wants the narrator to be ready for school", "wants to borrow the library book". DOK 2 | 2A C-M1, 2B M-3, 2A C-S4 (C04 and C05 were twins on p3), S-6 (DOK) |
| **SK-TC2a-C05** | Part B: "Ms. Pruitt held up her stop sign…" was replaced by "Then she went back to her spot on the corner.", so the last paragraph holds two Part B choices | 2B M-4 |
| **SK-TC2a-C07** | Row 1 is now "The clippers sound like angry bees." It no longer primes C08's "scary and unpleasant" | lead, 2B S-5 |
| **SK-TC2a-C08** | "He thinks he is sick and needs a doctor" was replaced by "He thinks the clippers will poke him like a needle." | 2B S-2, 2A C-M2 |
| **SK-TC2a-C09** | The prompt is now "…shows that he is pleased with how he looks after all" (no echo of "new haircut"). Target p4:7:2 ("Same time next month, Darius?") was added | 2A C-S3 |
| **SK-TC2a-C10** | Two off-topic distractors were replaced with perspective misreadings: "so readers can find out what Darius was thinking during the haircut" and "so readers can tell that Darius was never really nervous" | 2A C-M3, 2B S-2 |
| **SK-TC2a-C11** | The prompt asks for clues that the speaker is "an animal, not a child". A tail and paws fit a cat too. The how still says the speaker is most likely the dog | 2A C-N1 |
| **SK-TC2a-C12** (cr) | The prompt no longer states the speaker's view ("How does the speaker feel about the bath? What do YOU think…"). Criterion 1 is now "I told the speaker's view and a detail that shows it." The sample adds a detail for the speaker's view | 2A C-S2, lead |
| **SK-TC2a-C13** | **Now a perspectives item:** four new one-line parts, sorted into "shows how the teller feels" or "only tells what happens". It no longer repeats C03's "I inside quotation marks" trap | 2B S-3, lead |
| **SK-TC2a-S01** | "Grace did not want to help…" was replaced by "Jordan wants Aunt Rae to take him back to chess club." | 2A C-S5 |

### 8.2 Hint, how and why changes only

**TS-PS**
- **C11:** hint 2 is now strategy only ("look for each choice in the article"). Under the new rule it must not name paragraph 3, because no distractor comes from there.
- **C14:** hint 2 is now "List what each try changed…". The old hint 2 pointed at the camera sentences.
- **S01 and S03:** hint 2 no longer names what Mr. Hale notices, or where the water comes from (2A T-S1). S03's `like` is now C14 only (2A T-S7).
- **Addons**
  - P1 and P3: hint 2 is strategy only. Neither may name a paragraph that holds no distractor (the new rule).
  - P5: hints 1 and 2 were rewritten (2A T-S1).
  - P3: the how no longer says the ants "could not get across", so it does not pre-answer the solution.

**Teaching (TS-PS)**
- Teach point 1 adds "ask why the problem matters". This models C08.
- Teach point 3 adds that one character may guess the cause while another works it out. This models C06 and C09.
- Teach point 5 adds how to compare two problem-and-solution texts. This models C13.
- Watch Me 3 now models a sentence's job in a draft: without "They never said which foods were needed!", the list makes no sense. This models C15.
- The lesson still has five teach points and three Watch Me examples.

**3.T.C.2.a**
- **C03:** hint 2 is "Look at each I in the box. Is it inside quotation marks or not?"
- **C05:** hint 2 is "Reread the last paragraph." That paragraph has two Part B choices.
- **C08:** hint 2 is "Reread the sentences just before and after this one in Part 1." Hint 3 rules out only the real-shot choice.
- **C10:** hint 2 is "Compare what Part 1 can tell the reader with what Part 2 can tell."
- **C14:** hint 2 is "Look at what the narrator admits after the word Well."
- **C15:** hint 2 is "Read the two journals side by side…"
- **C12:** hint 2 is "Find one detail in any stanza…", so it no longer steers the child towards the people's side. The how no longer says "shown above"; it says "One good answer follows."
- **S01 and S02:** hint 2 was rewritten. The `like` lists of S02 and S03 were trimmed (2B N-9).
- **Addons:**
  - P3: hint 2 names paragraphs 2 to 4, which hold three Part B choices (2B N-6).
  - P5: hint 2 drops "listen to what she says very quietly".
- **C09:** hints 2 and 3 no longer echo "haircut".

### 8.3 Tallies after the fixes

**TS-PS**
- **Formats:** mc 6 (P5, C02, C05, C08, C09, C15), dropdown 2 (C03, C06), match 2, hottext 1, ebsr 1, ms 2, order 1. That is seven formats.
- **DOK:** DOK 3 on five items (C09, C10, C13, C14, C15); DOK 1 on none.
- **Components:**
  - problem: C03, C07, C08
  - tries and clue words: C03, C05, C07
  - why a try failed, and the real cause: P5, C04, C10, C11, C13, C14, C15. It appears in every set.
  - solution and proof: C07, C14
  - structure: C05, C07, C12, C13, C15
  - character and plot role: C02, C06, C08, C09
- **Passage load:** p1 has 2 items, p3 has 3, p4 has 6, p5 has 3, plus stems.
- **Together:** P1, P2, P3, P4 and P6 (five items, the limit).

**3.T.C.2.a**
- **Formats:** mc 5, ms 4, match 2, dropdown 1, ebsr 1, hottext 1, cr 1.
- **DOK:** DOK 3 on six items (P5, C10, C11, C12, C14, C15).
- **Components:**
  - narrator identity: C03, C06, C11
  - narrator's view: C05, C08, C13
  - contrast: C01, C07, C10, C15
  - the reader's own view: C04, C10, C12, C14
  - change: P5, C05, C09
- **Domains:** family (C01, P5, C04); school (C03, C05, C15); community (C06 to C10); pets (C11, C12); mixed (C13); sports (C14).

### 8.4 Gates

- `check-content.js --all`: PASS, 0 failures. The only warnings in these lessons are the extra-question coverage notices (TS-PS 10, 3.T.C.2.a 9; the bank stays at three per lesson).
- `readability.py`: every passage in these two lessons is under 4.5. The one "above 4.5" line in the run belongs to another 3.T.SS.1.a lesson's p4, not to TS-PS. TS-PS: p3 2.8, p4 3.1, p7 3.9.
- `check-writing.js` and `check-instructional-copy.js`: pass.
- Scratch audit (`scratchpad/b1b/audit.js`). Residual hits:
  - shared distractor wording between C06 and C07 ("a brand-new pair of ropes"), with no key given away;
  - the C11 choices and the C12 sample share a detail;
  - the column names of the C13 match appear in its hints.

  None gives an answer away.
- Browser (port 8732): all thirty core items in `:y`, `:y2` and `:y3` render in order with no page errors.

### 8.5 Notes

- **C12 has four criteria** (2B N-5). I kept the fourth, which is the standard's "distinguish".
- **2A C-N5** (the `cr` Show me how line "You can still choose it…") is an engine finding for the lead.
- **2A T-N6:** TS-PS p4 and 3.T.T.4.a p6 both use Double Dutch. p4 is now a driveway practice, and its key fact (hands at different speeds) is not shared.
- I have not reviewed any of this myself, and I ran no git commands.

## 9. Fixes after the B1 re-review (B1-rereview-b1b.md)

**Verdicts:** 3.T.C.2.a was ACCEPTED, with SHOULD items. TS-PS needed changes (one MUST and two SHOULDs).

For every item changed below, I read the clue and hints 1 to 3 together as one set and checked that they do not leave only the key. Correction to §8.4: I had judged the shared C06/C07 wording harmless, but together the two items did give away C09 (R-M1). §8.2 also listed S03 hint 2 as fixed when the new wording was equivalent to the old one (R-S2). Both are corrected here.

### 9.1 Needs blind re-solve

| Item | What changed | Finding |
|---|---|---|
| **SK-TSPS-C09** | **Re-aimed.** Prompt: "The new ropes tangle just like the old ones. What does this failed try show the team?" Key: "The ropes were never the real trouble." Distractors: "The new ropes were too short for the turners.", "Amari should jump in a little later.", "The team needs more time to practice." C06 and C07 still give the premises (Kiara's plan was new ropes; new ropes failed), but the key is the inference from them, and no distractor is killed by those premises | R-M1 (MUST) |
| **SK-TSPS-C06** | Stem: "When the ropes first tangle, Amari wants to {0}…". The old "Before anyone tries a fix" ruled out the only fix option. Each slot now has its own distractors. Slot 0: "chant a rhyme while the turners swing" (the later solution, placed too early) and "buy a brand-new pair of ropes". Slot 1: "watch the turners swing the empty ropes" (Amari's action) and "move practice to a smoother driveway". The dud "skip the show" is gone | R-S1 |
| **SK-TSPS-S03** | Distractor "Hang a sign…" was replaced by "Paint the ceiling above the door." (it touches the ceiling, not the cause). DOK 3 → 2 | R-S2 |
| **SK-TC2a-C14** | Distractor D is now "The ball came too fast for anyone on the team to stop." It takes the narrator's excuse at face value, which is the item's named mix-up. The how and why were updated so they no longer state "the ball was too fast to stop" as fact | R-S3 |
| **SK-TC2a-P3** (Together) | Part A prompt: "at first" removed ("What can a reader tell that the narrator does not say?") | R-S4 |

### 9.2 Hint, how, why or label changes only

**TS-PS**
- **C06:** hint 2 is "Reread paragraphs 1 to 4, and notice who does each thing." Hint 3 rules out one option in one slot (the chant in slot 0). The how and why were updated.
- **C08:** hint 3 now rules out "Amari has never jumped Double Dutch before". It no longer says "The new ropes tangle, too", which gave C09's premise. The how and why no longer mention the new ropes.
- **C09:** clue, hints, how and why were rewritten. Hint 3 rules out "too short" and points to paragraphs 2 and 3. It does not say "what the team changed", because read with hint 1 that would have left only the key.
- **C10:** hint 3 now rules out "stand too close". It no longer says worn-out ropes are not the cause, which C09's key would otherwise answer (as the re-review asked).
- **S03:** hint 2 is "Reread the last two sentences of the story." Hint 3 rules out more mopping. The how and why were updated.
- **P5:** the `clue` now matches hint 1 (R-N5).

**3.T.C.2.a**
- **C06:** hint 2 is "Read the first paragraph of Part 1 and the first paragraph of Part 2. Compare how each one talks about the boy." (R-S5).
- **C12:** the sample now quotes the poem correctly: "they giggle when the dog shakes". The poem says "and giggle when I shake". The own view is now one the detail supports ("a good idea for the family… they like the clean dog and have fun at bath time"). The criteria are unchanged (R-S6).
- **C03:** relabelled DOK 1 (R-N10). It is the lesson's only DOK 1 item.

### 9.3 Re-review NOTEs not acted on, and why

- **R-N1 (C10 hint 2):** not changed. The suggested "Reread paragraphs 2 and 3" would name paragraph 3, which holds only one Part B choice. That breaks the evidence-based rule (every place a hint names must hold at least two Part B choices). Paragraph 2 holds two.
- **R-N2 (C02 distractors):** not changed. The re-reviewer judged it acceptable, and I kept to the requested scope.
- **R-N3 (C15 word match on "chains"):** not changed. It was judged acceptable, because B is a real competitor.
- **R-N4 (set 3 chain from C12 to C13):** not changed. It is inherent in a shared passage, and it was judged mild.
- **R-N6 (the cause in paragraph 3 in four texts):** not changed in this round. It does not answer form A, and I note it for a later revision.
- **R-N7, R-N8, R-N12 and R-N13:** these are for the lead:
  - Together rehearses form A frames; these items pre-date the batch.
  - The sign motif shared by Watch Me 3 and C14.
  - Together P4 and form A T6.
  - The reader-view twist (C04, C14, S01).
- **R-N9 (C04 shape) and R-N11 (C11 how previews C12):** these were judged as passing or harmless. Not changed.

### 9.4 Gates

- `node verification/check-content.js --all`: PASS, 0 failures. In these lessons, the only warnings are the extra-question coverage notices.
- The scratch audit reports no new key overlaps.
- Port 8732: all six own sets (`:y`, `:y2`, `:y3` for both lessons) render with no page errors.
- No git.

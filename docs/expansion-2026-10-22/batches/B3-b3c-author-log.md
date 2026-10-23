# B3 author log (b3c): 3.T.RA.1.b, 3.T.RA.2.a and 3.T.RA.2.b

**Role:** content author b3c, batch B3. **This is not a review.** Nothing here certifies the items. Reviewers should blind-solve the items before they read this log.

**File changed:** `js/data/lessons/T-RA.js`, in three blocks only (3.T.RA.1.b, 3.T.RA.2.a, 3.T.RA.2.b). I did not touch the 3.T.RA.1.a or 3.T.RA.1.c blocks, `test`, `testB`, `learn` or any js/ code. No git was run.

**Changes in each block:**
- **3.T.RA.1.b:**
  - new passages p7 to p10
  - one new `teach.words` entry (personal communication)
  - `core`, `similar` (15) and `addons`
- **3.T.RA.2.a:**
  - new passages p4 to p6
  - `core`, `similar` (15) and `addons`
- **3.T.RA.2.b:**
  - new passages p3 to p5
  - two new `teach.words` entries (credible, relevant)
  - `teach.points[3]` extended by one clause ("for example by testing an idea that many people believe"), which models C07; there are still five points
  - Together item SK-RA2b-P5 revised in place (weak item, see §4)
  - `core`, `similar` (15) and `addons`

No existing id changed. No Watch Me example was added.

**Incident to disclose.** For about one minute during the work, I left T-RA.js unparseable: a splice used a wrong end marker while I was replacing two similar items. I repaired it at once, and check-content passed afterwards. If the 3.T.RA.1.a author saw a syntax error at about that time, this was the cause. Nothing outside my blocks was changed.

## 0. Gates (final run)

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures. In my lessons the only warning left is "3.T.RA.2.b: p3 is short (77 words)". p3 is a deliberate short excerpt (see §3). There is no similar-coverage warning for any of the three lessons (the ENG-07 rule) |
| `python3 verification/readability.py` | I read the output, and nothing in the whole site is flagged. New passages: RA1b p7 3.6, p8 2.7, p9 4.0, p10 2.4; RA2a p4 1.9, p5 4.2, p6 3.0; RA2b p3 2.9, p4 3.9, p5 3.7 |
| `node verification/check-writing.js` | 0 failures, 0 warnings |
| `node verification/check-instructional-copy.js` | 28 assertions passed |
| Similar items in one sitting (coordinator's rule) | A node simulation of the engine's `similarFor` (the first `like` match not yet used) gives every core item its own similar item in all three lessons. In the browser (port 8813, one page, one sitting), I worked all 45 core items in set order. For each one, I answered it, checked that "Try a similar question" was visible, opened the similar item, answered it (all were right) and moved on. The button appeared on every core item, Next always returned to the next core item, and there were no page errors. Script: `scratchpad/b3c/simbrowser.py`. Assignment: RA1b C01→S04, P4→S03, P7→S06, C04→S05, P5→S08, C06→S10, C07→S01, C08→S12, C09→S02, C10→S09, C11→S07, C12→S13, C13→S14, C14→S15, C15→S11; RA2a P3→S07, P4→S01, C03→S04, C04→S02, C05→S03, C06→S09, C07→S05, C08→S10, C09→S11, C10→S06, C11→S12, C12→S13, C13→S14, C14→S15, C15→S08; RA2b P4→S03, C02→S01, C03→S02, C04→S04, C05→S05, C06→S10, C07→S06, C08→S07, C09→S11, C10→S12, C11→S13, C12→S14, C13→S15, C14→S08, C15→S09. Each lesson is now at the limit of 15 similar items. The server was stopped |
| Browser smoke, `serve.js . 8813`, Playwright Chromium, 390×844 and 1366×900 | Practice Together is RA1b P1, P8, P3, P6; RA2a P1, P2; and RA2b P1, P2, P3, P5. In all 45 core items (`:y`, `:y2`, `:y3`), at both widths, "Give me a hint" was pressed three times: hints 1, 2 and 3 appeared, and the button then read "No more hints". The key was entered and checked, and every scored item said "That's right!". The three `cr` items showed "Compare with the sample" and "Written and checked against the list". There were 0 page errors, apart from the font request that the script blocks on purpose. The server was stopped afterwards. Script: `scratchpad/b3c/smoke.py` (output in `smoke.out`). Note: at 390 the script's first `cr` test looked for the sample text in the wrong place and flagged RA2a-C15; the feedback text shows the correct behaviour |

## 1. 3.T.RA.1.b "Finding, choosing and sorting facts from sources"

**Official wording** (Standards PDF p. 37): "Conduct research by locating, gathering, selecting, and organizing information from multiple credible sources, including print, digital, and personal communication, about a self-selected topic."

**Components:**
- **L:** locate and gather facts by source, from multiple sources
- **N:** notes in your own words
- **S:** select relevant facts. This is the hardest component, and it is in every set.
- **O:** organize (categories and order)
- **C:** credible sources
- **P:** print, digital and personal communication
- **T:** self-selected topic. Selected response cannot show this. It is shown only by the unscored `cr` C15 and similar S11, plus the existing adult-checked write task. It is never auto-scored.

**Reuse:**
- P4, P7 and P5 are `{ref}` in set 1.
- Together is P1, P8, P3 and P6.
- No weak items were flagged for this lesson.

**Passages (never used by test):**

| Id | Title | Kind | Domain | Used by |
|---|---|---|---|---|
| p7 | Right Whales of the Georgia Coast | print (library book) | nature | set 2 |
| p8 | A Call with a Whale Scientist | personal communication (phone) | nature | set 2 |
| p9 | How a Puppy Becomes a Guide Dog | digital (web page, headings, two side boxes) | community | set 3 |
| p10 | A Visit from a Guide Dog Trainer | personal communication (class visit) | community | set 3 |

### 1.1 The fifteen

| # | Id | Set | Comp | Task | Format | Pts | DOK | Text | How it differs |
|---|---|---|---|---|---|---|---|---|---|
| 1 | C01 | 1 | P | identify/classify | match 5×3 | 2 | 2 | stem, pumpkin context | Only mode item. Same office as a web page and as a phone call |
| 2 | P4 (ref) | 1 | O | sort | match 4×3 | 2 | 2 | p1+p2 | Categories |
| 3 | P7 (ref) | 1 | N | choose note | mc | 1 | 2 | p5 | Own-words note against the web page |
| 4 | C04 | 1 | L | edit | dropdown 2 slots | 2 | 2 | p1+p2+p5 + table | Find the wrongly sourced row |
| 5 | P5 (ref) | 1 | S/L | explain | mc | 1 | 3 | p1+p2 | Which source helps more, and why |
| 6 | C06 | 2 | O (order) | construct | order 4 | 2 | 2 | p7+p8 | Time order across two sources |
| 7 | C07 | 2 | S | use evidence | hottext ×2 | 2 | 2 | p7+p8 | One answer in each source; danger sentences as traps |
| 8 | C08 | 2 | N+L | construct | dropdown 2 slots | 2 | 2 | p7+p8 | Note plus where found |
| 9 | C09 | 2 | C+P | explain | mc | 1 | 3 | p8 | Why a phone call can be credible |
| 10 | C10 | 2 | L/C | problem solving | mc | 1 | 2 | p7+p8 | What to do when the sources leave a gap |
| 11 | C11 | 3 | L | compare | ms ×2 | 2 | 2 | p9+p10 | Facts in BOTH sources |
| 12 | C12 | 3 | C+P | identify | ms ×2 | 2 | 2 | stem | Credible sources, including an email |
| 13 | C13 | 3 | O | sort | match 5×3 | 2 | 2 | p9+p10 | Life-stage note cards |
| 14 | C14 | 3 | S+C | edit/transfer | mc | 1 | 3 | stem (lifeguards) | Remove the irrelevant note; credibility traps |
| 15 | C15 | 3 | T+P+C | construct | cr (unscored) | – | 3 | none | The child's own topic |

**Tallies:**
- Points: 24 (cr excluded).
- Formats: mc 5, match 3, ms 2, dropdown 2, order 1, hottext 1, cr 1. That is seven formats, nine of them technology-enhanced.
- DOK: level 2 on eleven items, level 3 on four (P5, C09, C14, C15), and no level 1.
- Verbs: identify (C01, C12), sort (P4, C13), explain (P5, C09), use evidence (C07), edit (C04, C14), construct (C06, C08, C15), compare (C11), transfer and problem solving (C10, C14).
- Domains: farming and science 5, nature 5, community 4, self 1.
- Each component appears at least twice: L 5, N 2, S 3, O 3, C 4, P 3. The exception is T, which appears once by nature.

**Similar bank** (15 items; in core order, each core item gets its own unused similar item, see §0):

| Id | like | Text |
|---|---|---|
| S01 | C07, C14 | sea horses |
| S02 | C09, C12 | horse vet |
| S03 | C13, P4 | sea stars |
| S04 | C01 | violins |
| S05 | C04 | puffins |
| S06 | C08, P7 | walrus |
| S07 | C11 | jellyfish |
| S08 | P5 | chameleons |
| S09 | C10 | hockey pucks |
| S10 | C06 | kangaroo joey |
| S11 | C15 (cr) | own topic |
| S12 | C08 | toucans |
| S13 | C12 | karate |
| S14 | C13 | hedgehogs |
| S15 | C14 | rock climbing |

### 1.2 Live choices after each hint (clue = hint 1)

Notation: H1 / H2 / H3 = the choices still live after that hint. For hot-text items, refs are paragraph:sentence. "All" means the hint rules nothing out.

| Item | After H1 | After H2 | After H3 |
|---|---|---|---|
| C01 (rows) | all rows open | all open. H2 flags that rows 2 and 4 differ, but settles neither | row 3 (newspaper → print) settled; rows 1, 2, 4 and 5 still open (one row settled) |
| P4 | all | all | vine row → "how a pumpkin grows" settled; the three Ruiz rows are still open between two cards |
| P7 | all 4 | key, "close together", fruit fact (bird feeder is still possible) | key, "close together", fruit fact |
| C04 slot 1 | 1, 2, 3, 4 | 1, 2 (H2 names the two Ruiz rows; row 2 is a wrong option there), plus 3 and 4 | 1, 2, 4. Slot 2 is still open (2 live once a row is chosen) |
| P5 | all 4 | key, Source 1 fall, Source 2 bees (H2's last paragraphs hold the key and "Source 1 fall") | key, Source 1 fall, Source 2 bees |
| C06 | 24 orders | the order within each pair is open (4 orders) | step 1 is before step 2; the order of 3 and 4 is still open (2 orders) |
| C07 | all 8 | Source 1 para 4: 4:2, 4:3, key 4:4. Source 2 para 2: 2:1, key 2:4 | 4:3 (ships and ropes as dangers), key, 2:1 (whales resting near the surface), key. H3's reason is about counting only |
| C08 slot 1 | 3 | 3 | patches, baleen. Slot 2: Source 2, both (Source 1 can be ruled out by reading) |
| C09 | all 4 | all 4 (H2 names paragraphs 1 and 5, which hold the key's evidence and the "loves calves" choice) | key, newer, loves calves |
| C10 | all 4 | all 4 | key, own guess, classmate (the classmate is tempting after C09: "a person can be a source") |
| C11 | all 5 | all 5 | steps, harness, car-stays-still (traffic trap), different job |
| C12 | all 5 | all 5 | book, email, DogFan22, funny story |
| C13 (rows) | all rows open | all open | branch row settled; four rows open |
| C14 | all 4 | all 4 (H2 names Ms. Abara's two notes, which hold the key and the note 4 choice) | key, note 2 "person not book", note 4 "not a scientist" |
| C15 | cr: no key | | |
| Together P1 | all rows | all rows | seeds row settled; four rows open |
| Together P8 | all 4 | all 4 | guide, unnamed post, seed ad |
| Together P3 | 120 orders | the order within each source is open | step 1 is fixed; the rest are open |
| Together P6 | all 5 | all 5 | sun, water, thousands of years, 2,000 pounds |

**Together and earlier-item checks:**
- P1's rows (seeds, bee boxes, pollen, fall, stem) do not include C04's wrong row (the leaves) or its other rows.
- P8 and C12 share the trust logic, but they are in different sets and use different rows.
- C06's step about the calf's milk is a distractor in C07, but C06 says nothing about whether it helps.
- C11 names puppy raisers. C13's rows avoid the stores/buses fact, so C11 does not reveal a C13 row.

## 2. 3.T.RA.2.a "Pointing to the sentence that proves it"

**Official wording** (PDF p. 38): "Refer to specific passages from a text to support an idea, answer, or opinion."

**Components:**
- **I:** support an idea
- **A:** support an answer (Part B)
- **O:** support an opinion
- **X:** true but not supporting. This is the hardest component, and it is in every set: C03, C07, C14.

Producing your own quote is shown only by the unscored `cr` items C15 and S08.

**Reuse:**
- P3 and P4 are `{ref}` in set 1.
- Together is P1 and P2.
- No weak items were flagged for this lesson.
- **Change made to avoid Together pre-answering.** C03 was first planned with "The light shines from the end of its belly" as its key. Together P1's own `why` already says that sentence only tells where the light comes from, so I changed C03's key to "This kind of light is sometimes called cold light."

**Passages:**

| Id | Title | Domain | Used by |
|---|---|---|---|
| p4 | Two Loops | family | set 1: C04, C05 |
| p5 | Sea Otters | nature | set 2: C06 to C09 |
| p6 | The New Goalie | sports | set 3: C11, C12, C13, C15 |

### 2.1 The fifteen

| # | Id | Set | Comp | Task | Format | Pts | DOK | Text | How it differs |
|---|---|---|---|---|---|---|---|---|---|
| 1 | P3 (ref) | 1 | I | use evidence | hottext ×2 | 2 | 2 | p1 | The name idea |
| 2 | P4 (ref) | 1 | I | use evidence | mc | 1 | 2 | p1 | Protect idea |
| 3 | C03 | 1 | X | identify | mc | 1 | 2 | p1 | True but not supporting "messages" |
| 4 | C04 | 1 | A | use evidence | ebsr, Part B ×2 | 2 | 3 | p4 | A change needs before and after proof |
| 5 | C05 | 1 | O | use evidence | hottext ×2 | 2 | 3 | p4 | "Makes a job easier" against "is kind" |
| 6 | C06 | 2 | I | use evidence | hottext | 1 | 2 | p5 | Doing, against describing |
| 7 | C07 | 2 | X | edit | mc | 1 | 2 | p5 | Replace a true but useless quote |
| 8 | C08 | 2 | A | infer + evidence | ebsr | 2 | 2 | p5 | The kelp problem |
| 9 | C09 | 2 | O | use evidence | ms ×2 | 2 | 2 | p5 | Clever, against plain food facts |
| 10 | C10 | 2 | A | construct | dropdown 2 | 2 | 2 | stem (rain barrel, school) | Answer plus sentence number |
| 11 | C11 | 3 | A | use evidence | ebsr | 2 | 3 | p6 | What helps the save |
| 12 | C12 | 3 | A | compare | mc | 1 | 3 | p6 + two students' answers | Same answer, two different proofs; which supports it better (revised, §7) |
| 13 | C13 | 3 | O | use evidence | hottext | 1 | 2 | p6 | Opinion about Simone, not Dani |
| 14 | C14 | 3 | X | transfer | ms ×2 | 2 | 3 | stem (library dog, community) | Two non-supporting sentences |
| 15 | C15 | 3 | O | construct | cr (unscored) | – | 3 | p6 | The child writes an opinion and a quote |

**Tallies:**
- Points: 24.
- Formats: hottext 4, mc 4, ebsr 3, ms 2, dropdown 1, cr 1.
- DOK: level 2 on nine items, level 3 on six, and no level 1.
- Verbs: use evidence (many), identify (C03), edit (C07), construct (C10, C15), compare (C12), transfer (C14), explain and infer (C08, C11).
- Domains: nature 6, family 2, sports 4, school 1, community 1.
- Components: I 3, A 5, O 4, X 3.
- **Compare:** C12 (see §7).

**Similar bank** (15):

| Id | like | Text |
|---|---|---|
| S01 | C06, P4 | fennec fox |
| S02 | C11, C08, C04 | paper airplane |
| S03 | C05, C09, C13 | bike trail |
| S04 | C03, C14 | parrots |
| S05 | C07 | lions |
| S06 | C10, C12 | puppet show |
| S07 | P3 | elephant seals |
| S08 | C15 (cr) | ice skating |
| S09 | C06 | narwhal |
| S10 | C08 | coral reef |
| S11 | C09 | lemurs |
| S12 | C11 | ballet |
| S13 | C12 | volleyball (compare two proofs) |
| S14 | C13 | archery |
| S15 | C14 | solar panels |

### 2.2 Live choices after each hint

| Item | After H1 | After H2 | After H3 |
|---|---|---|---|
| P3 | all | para 1: 1:1, 1:2, 1:3✓, 1:4✓ | 1:1, 1:3, 1:4 (pick 2) |
| P4 | all 4 | all 4 | key, larvae-glow, makes-light-inside |
| C03 | all 4 | all 4 | key (cold light), own pattern, male flashes. P2 Together's `how` may also lead a child to rule out "male flashes", which leaves the key and "own pattern" |
| C04 | Part A all, Part B all | Part B para 2: knot, "I can't" ✓; para 5: "Look, Nyla" ✓, high five | Part A: key, zoo, reverse. Part B is not settled |
| C05 | all 6 | paras 3 and 4: 3:1, 3:2, 3:3✓, 4:2✓, 4:4 | 3:1, 3:2, 3:3, 4:2 (pick 2) |
| C06 | all 6 | para 2: 2:1, 2:2, 2:3✓, 2:4 | 2:1, 2:3, 2:4 |
| C07 | all 4 | all 4 | key, fat sentence, kelp sentence |
| C08 | all | Part B para 4: anchor ✓, paws, sleep | Part A: key, rock, hungry. Part B: 3 |
| C09 | all 5 | para 3: two keys, clams, one-fourth | two keys, one-fourth (pick 2) |
| C10 | slots open | slots open | slot 2: 3 or 4 live; slot 1: 3 live |
| C11 | all | Part B para 4: 4:1, 4:2✓, 4:3 | Part A: key, gloves, cheers. Part B: 3 |
| C12 (revised) | all 4 | all 4 (H2 names paragraph 5, which holds both students' proof sentences) | key, "score tells how the game ended", "losing always makes players practice" |
| C13 | all 5 | para 5: 5:2, 5:3✓ | 5:2, 5:3 |
| C14 | all 5 | all 5 | sentences 1✓, 2, 3✓, 5 (pick 2) |
| Together P1 | all | para 2: 2:1, 2:2, 2:3✓ | 2:1, 2:3 |
| Together P2 | all | all | Part A: key, buzzing, leaves |

**Earlier-item checks:**
- P4 (position 2) reveals that 4:3 is a warning, which is a supporting distractor in C03, not C03's key.
- C07's `how` mentions the kelp only as "something otters do before a nap". It does not state C08's answer.
- C12 comes before C13. C13's targets leave out 5:4, the C12 key. C12's `how` does not mention "Thanks for your tip".

## 3. 3.T.RA.2.b "Is this a good source?"

**Official wording** (PDF p. 38): "Determine what makes a source text credible and relevant and identify examples."

**Components:**
- **W:** credibility from who made the source
- **R:** relevance
- **X:** credibility from the wording of an excerpt. This was the coverage gap, and it is now in every set: C02, C04, C05, C06, C07, C08, C12, C14.
- **E:** identify examples: C02, C06, C10, C13, and C15 (cr)

**Reuse:**
- P4 is `{ref}` in set 1.
- Together is P1, P2, P3 and P5.

**Passages (never used by test):**
- p3 "Goldfish Facts!" is a fun-facts page with no writer named. It is deliberately a short excerpt (77 words, which raises a check-content warning). It is paired with p4.
- p4 "What Can a Goldfish Remember?" is a science magazine article.
- p5 "Bulls and the Color Red" is a page from a book by a cattle scientist.

The test passages p1 and p2 (elephants) are not used. The excerpt-pair frame deliberately differs from check T5: T5 is an EBSR that asks which source to trust. My pair items ask for the warning sentences (C06), the writer's purpose (C07), what the scientists saw (C08) and relevance (C09).

### 3.1 The fifteen

| # | Id | Set | Comp | Task | Format | Pts | DOK | Text | How it differs |
|---|---|---|---|---|---|---|---|---|---|
| 1 | P4 (ref) | 1 | W+R | identify | ms ×2 | 2 | 3 | stem | Both checks on sources |
| 2 | C02 | 1 | X/E | classify | match 5×2 | 2 | 2 | stem | Checked fact against a warning sign |
| 3 | C03 | 1 | R | identify | mc | 1 | 2 | stem (frost) | Same source, different subtopics |
| 4 | C04 | 1 | X | compare | mc | 1 | 3 | two unnamed excerpts | Wording only; the exact time is the trap |
| 5 | C05 | 1 | W+X | construct | dropdown 2 | 2 | 2 | stem | Writer reason plus number reason |
| 6 | C06 | 2 | X/E | identify | hottext ×2 | 2 | 2 | p3 | Warning sentences inside a page |
| 7 | C07 | 2 | X | explain | mc | 1 | 3 | p4 | Why the writer names a belief |
| 8 | C08 | 2 | X/E | use evidence | hottext | 1 | 2 | p4 | What scientists saw, against the conclusion |
| 9 | C09 | 2 | R | identify | mc | 1 | 2 | p4 | Credible but off a new question |
| 10 | C10 | 2 | W/E | classify | match 5×3 | 2 | 2 | stem | Sorted by reason; not T3's columns |
| 11 | C11 | 3 | R | identify | ms ×2 | 2 | 2 | p5 | Which questions a page can answer |
| 12 | C12 | 3 | X | use evidence | mc | 1 | 3 | p5 | Reason to doubt a claim |
| 13 | C13 | 3 | E/W | identify | ms ×2 | 2 | 2 | stem (ladybugs) | Features that make a page credible |
| 14 | C14 | 3 | R+X | compare | dropdown 2 | 2 | 3 | stem (tennis) | Credible-not-relevant against relevant-not-credible |
| 15 | C15 | 3 | W+R+E | construct | cr (unscored) | – | 3 | none | Name and justify a source |

**Tallies:**
- Points: 22.
- Formats: mc 5, ms 3, match 2, dropdown 2, hottext 2, cr 1.
- DOK: level 2 on eight items, level 3 on seven, and no level 1.
- Domains: farming 5, pets and science 5, farm animals 2, nature 1, sports 1, self 1.
- There is no EBSR in this lesson.

**Similar bank** (15):

| Id | like | Text |
|---|---|---|
| S01 | C02, C06 | tomato |
| S02 | C03, C09, C11 | dogs panting |
| S03 | C13, C10, P4 | rabbits |
| S04 | C04 | mushrooms |
| S05 | C05 | bamboo |
| S06 | C07 | porcupines |
| S07 | C12, C08 | llamas |
| S08 | C14 | manatees |
| S09 | C15 (cr) | own topic |
| S10 | C06 | ski shop page |
| S11 | C09 | cello |
| S12 | C10 | snowboarding |
| S13 | C11 | marathon |
| S14 | C12 | knuckle cracking |
| S15 | C13 | sushi rice |

### 3.2 Live choices after each hint

| Item | After H1 | After H2 | After H3 |
|---|---|---|---|
| P4 | all 5 | all 5. H2 names the two farmer books (one key, one distractor) | college ✓, peach book ✓, poem. The apple book can be ruled out by reading |
| C02 (rows) | open | open | "never get sick" settled; four rows open |
| C03 | all 4 | the two frost excerpts (key, definition), plus others | key, frost definition, shipping |
| C04 | all 4 | all 4 | key, exact time, "every peach" |
| C05 | open | open | slot 1 settled (one blank); slot 2: 3 live |
| C06 | all 7 | paras 2 and 3: 2:1✓, 2:2, 3:1✓, 3:2 | 2:1, 3:1, 3:2 (pick 2) |
| C07 | all 4 | all 4 | key, "agrees", "Source 1 scientist" |
| C08 | all 6 | para 2: 2:1, 2:2, 2:3✓ | 2:2 ("after a while"), 2:3 |
| C09 | all 4 | all 4 | key, pet swims to the front, many people say |
| C10 (rows) | open | open | FishFan9 settled; four rows open |
| C11 | all 5 | all 5 | two keys, lifespan, fences |
| C12 | all 4 | para 1: belief; para 3: setup, key | setup (3:1), key |
| C13 | all 5 | all 5 | two keys, fun topic, newer web page |
| C14 | open | open | slot 1: credible (two options left); slot 2: 3 |
| Together P1 | all | all | wildlife page, comic, guess |
| Together P2 | all | all | key, news story, volcanoes |
| Together P3 | rows open | open | guess row settled |
| Together P5 | all | all | key, short, easy words |

**Earlier-item checks:**
- C11 comes before C12. C11's `how` mentions colors and weight, not the still cape.
- C08's `how` names 2:1 and 3:1, which are not C09's key.

## 4. Weak item

**SK-RA2b-P5** was flagged for implausible distractors ("too new", "not written by a kid her age"). I revised it in place and left it in Practice Together. The three distractors are now plausible misreadings:
- off topic ("about bug kits")
- a short source has no facts
- kid-friendly words are untrue

The key, the clue and the id are unchanged, and the `why` is updated.

## 5. Topic and key-fact search

**Method:**
- I grepped every file in js/data/lessons, js/data/sets and js/data/tasks, including the 3.T.RA.1.a block that another author is writing now. I searched for each candidate topic and name before writing, then for the key facts and topics after writing.
- I ran a six-word n-gram scan of my new passages and item content against every other lesson, set and task, plus my own lessons' tests, Learn It, Teach and older passages. The script is `scratchpad/b3c/ngram.js`.

**Topics I dropped because they were already used:**
- lightning (T-C practice canceled for thunder)
- hermit crabs (T-T1 crab shells)
- squirrels burying nuts (3.T.RA.1.a)
- crossing guards (T-C)
- box turtles (T-SS)
- penguins (3.T.RA.1.c)
- cats purring (3.T.RA.1.a)
- dog park (T-T34)
- koalas (3.T.RA.1.a)
- sloths (3.T.RA.1.c)
- batting helmets
- the spelling bee (T-T1)
- a stretching warm-up line (TS-SEQ)

I also renamed people and places that were already in use: Ms. Tran, Comet, Pine Lake, Okoye and the Hawks.

**What the n-gram scan found.** The only hits are:
- shared bylines ("Source 1: a page from a library book")
- shared direction wording
- quotes of each lesson's own existing passage

There are no shared key facts.

**Small overlaps I left, with the reason:**
- 3.T.RA.1.a has a distractor question about whales holding their breath. My topics are right whales (RA1b) and elephant seals holding their breath (RA2a S07). They are different animals and different facts.
- Topics also reused within my own similar banks: chameleons in RA1b S08 and the S11 sample; the RA1b set 1 pumpkin context.

## 6. Not done, or for the reviewers

- **RA2a compare gap:** fixed by revising C12 (§7).
- **RA2b uses no EBSR.** It meets the minimums of at least four formats and at least three technology-enhanced formats.
- **The C13 hint ladder in 3.T.RA.2.a is tight.** After hint 2 (paragraph 5), only 5:2 and the key remain live. That meets the rule, but only just.
- **3.T.RA.1.b already had seven teach points,** above the limit of five. I added none; I added one glossary word.
- **The 17 similar items added last** (RA1b S12-S15, RA2a S09-S15, RA2b S10-S15) each have one `like` entry, a fresh topic I grepped first, and the same hint pattern: hint 2 neutral, hint 3 rules out one choice. Their live-choice analysis is in §7.2. They need the same blind review as the rest.
- **The live-choice tables are my own analysis.** Reviewers should redo them blind.
- **p3 in 3.T.RA.2.b is under 100 words** (77) on purpose, as a short excerpt. check-content warns about it.
- **Facts simplified for grade 3, for a reviewer to check:**
  - Fewer than 400 right whales are left, about 14 feet long at birth.
  - Cattle see blue and yellow, and red does not stand out.
  - The bull cape test is described as "one team of scientists".
  - A goldfish sound-conditioning memory lasting months.
  - A sea otter eats about one-fourth of its own weight in food each day.
- **The smoke test sets each answer through the engine's response object,** as practice-own.py does, and then presses Check. It does not click each choice by hand.

## 7. Fixes after the coordinator's notes (pre-review)

### 7.1 3.T.RA.2.a now has a compare task (C12)

**SK-RA2a-C12** was revised in place. The id and set 3 are kept, as the coordinator asked. Because the id stayed the same while the item changed, `core.rev` was not bumped. A lead may want to bump it.

**What it was and what it is now:**
- It was a two-slot dropdown: claim plus proof.
- It is now an mc item, 1 point, DOK 3, on p6. Two students give the same answer to "What does Simone want after the game?":
  - Kai's proof is "The Falcons lost the game, 2 to 1."
  - Lena's proof is "Can you help me practice goalie next week?"
- The child compares the two proofs and chooses whose supports the answer better, and why. The key is "Lena's, because Simone's own question shows she wants more practice."

**Coverage of the official wording.** The item still practises "support an answer". Component A now has five items, I has three, O has four and X has three, so each of the four parts still appears at least twice.

**Ladder (clue = hint 1):**
- H1 (compare the proof, not the answer): all 4 live.
- H2 (paragraph 5 holds both proof sentences): all 4 live. H2 names a paragraph, but it does not point at the key, because both proofs are there.
- H3 rules out "Lena's, because her proof is longer". Live after H3: the key, "Kai's, score tells how the game ended" and "Kai's, losing always makes players practice".

**Earlier items in set 3.** C11 (the save) does not touch paragraph 5's proof. C13 comes after C12. Its targets still leave out 5:4, and C12's `how` does not mention "Thanks for your tip".

**Its similar item.**
- **S13** (volleyball) was revised to the same compare task. Jo cites sentence 4, the oranges, and Sam cites sentence 2, asking the coach for help. The child picks whose proof is better and why. It is mc, 1 point, DOK 3, with `like: [C12]`.
- **S06** (puppet show) was a claim-plus-proof dropdown. It no longer matches C12's task, so its `like` is now only C10.

**Checks:**
- `check-content --all`: PASS, 0 failures, and no warnings on C12 or S13. I reworded one word in the clue to clear a "shares a word with the key" warning.
- Hint smoke for 3.T.RA.2.a at 1366: 15 of 15 core items accepted their key and showed all three hints.
- Repeated the one-sitting browser check for 3.T.RA.2.a: all 15 core items worked in order. "Try a similar question" appeared on every one, and C12 got S13. Each similar item was answered correctly, there were no page errors, and the server was stopped.

### 7.2 Live choices for the 17 similar items added last (clue = hint 1)

Live choices after each hint:

| Item | After H1 | After H2 | After H3 |
|---|---|---|---|
| RA1b S12 (toucan; dropdown) | slot 1: 3, slot 2: 3 | 3 / 3. H2 asks the child to find the cool-off part, but names no source | slot 1: key, "reach fruit". Slot 2: 3 (one option out of slot 1, no blank settled) |
| RA1b S13 (karate; ms ×2) | all 5 | all 5 | book, email, KickKing, ad |
| RA1b S14 (hedgehog; match) | all rows open | all open | the spiky-ball row settled; three rows open |
| RA1b S15 (climbing; mc) | all 4 | all 4. H2 names Coach Lin's three notes, which hold the key, note 2 and note 4 | key, "note 2: a person, not a book", "note 4: not a scientist" |
| RA2a S09 (narwhal; mc) | all 4 | sentences 2, 3, 4 (the tusk sentences) | key (3), sentence 2 (what the tusk is) |
| RA2a S10 (coral; mc) | all 4 | all 4 | key, where reefs grow, corals are animals |
| RA2a S11 (lemurs; ms ×2) | all 5 | all 5 | two keys, Madagascar, what they eat |
| RA2a S12 (ballet; mc) | all 4 | sentences 2, 3, 4 | key (3), sentence 2 (the tip itself) |
| RA2a S13 (volleyball; mc, revised) | all 4 | all 4 (H2 names sentences 2 and 4, the two proofs) | key, "Jo's: what happened after the game", "Jo's: oranges show she's ready" |
| RA2a S14 (archery; mc) | all 4 | Leo's sentences 2 and 3 (key and target) | key, "hit the target" |
| RA2a S15 (solar; ms ×2) | all 5 | all 5 | sentences 1✓, 3✓, 4, 5 (pick 2) |
| RA2b S10 (ski page; ms ×2) | all 5 | all 5 | two keys, flat skis, December |
| RA2b S11 (cello; mc) | all 4 | all 4 | key, wood, how the player sits |
| RA2b S12 (snowboard; match) | all rows open | open | the ShredDude row settled; four rows open |
| RA2b S13 (marathon; ms ×2) | all 5 | all 5 | two keys, shoes, sore legs |
| RA2b S14 (knuckles; mc) | all 4 | sentences 2, 3, 4 | key (4), sentences 2 and 3 (how he tested) |
| RA2b S15 (sushi; ms ×2) | all 5 | all 5 | two keys, fun topic, newer web page |

**Weak spots for the reviewers:**
- RA2a S09, S12 and S14, and RA2b S14, keep only one or two wrong choices live after H3. They meet the rule, but only narrowly.
- RA2a S14 is the tightest: after H3, only "hit the target" is left as a distractor. Its pull is weak, because it shows skill, not thanks.

## 8. Fixes after B3 review

Edited only 3.T.RA.1.b, 3.T.RA.2.a and 3.T.RA.2.b in `js/data/lessons/T-RA.js`. No git was run. This section replaces the live-choice tables above for the items named here. In particular, the earlier tables for RA2b C04 and C05 were wrong. Counts below use the review rule: a choice is live if a child who has read hints 1-3 and the clue still has a real reason to pick it.

### 8.1 MUST fixes

| Item | What changed | Live after H1 / H2 / H3 |
|---|---|---|
| RA2b C04 (mc) | Hint 2 no longer rules out Excerpt B ("picture each excerpt on a real farm; which parts would you expect to see, which would be hard to believe?"). Hint 3 still removes only the "no numbers" choice. | 4 / 4 / 3 (key, "exact time", "every peach") |
| RA2b C05 (dropdown) | Hint 2 only says to look at the signature and at what the post claims. Hint 3 now touches blank 1 only (the signature "PeachFan", does it say who the writer is or how they know). It says nothing about the number, and no longer says "scientist or farmer". | Blank 1: 3 / 3 / 2. Blank 2: 3 / 3 / 3. At most one blank is settled. |
| RA2a S11 (ms) | Lemur "take turns watching" fact removed. The key is now "Lemurs in a group huddle close together to stay warm" (PBS Nature fact sheet: "groups will huddle together" to keep warm) plus grooming (same page). Why, hints, how, answer text and clue updated. | 5 / 5 / 4 (two keys, Madagascar, what they eat) |
| RA2b p5 and C12 | Paragraph 3 rewritten to match the source (mythresults.com, MythBusters episode 85): a TV show put red, blue and white flags near bulls, the bulls charged all three and did not pick red, and bulls went after people who moved around. The "scientists" and "still cape was not charged" claims are gone. C12 key is now "The bulls charged all three flags, and they did not pick the red one." Why, hints and how rewritten. Paragraph 4 and C11 unchanged. | 4 / 3 (paragraphs 1 and 3: key, set-up sentence, the belief) / 3. Hint 3 no longer names the belief, so a paragraph 1 choice stays live. |

### 8.2 SHOULD fixes

| Item | What changed | Live after H1 / H2 / H3 |
|---|---|---|
| RA2b C09 (mc) | Hint 2 now says "find each sentence and ask what question it helps answer", with no memory/not-memory sort. Hint 3 removes only the sound-test sentence. | 4 / 4 / 3 |
| Right whale p7 (RA1b) | "Fewer than 400" replaced by "Only a few hundred of them are left in the world." (NOAA Ocean Service: about 400 in 2018; NOAA 2025 report 384.) Hint text in the dependent item updated. No number to expire. | no change in counts |
| RA2a C13 (hottext) | Opinion changed from "thankful" to "good at learning from advice", so no word in the question matches the key. Key is now p6:4:2 ("After that, every time the ball came near, she kept her eyes on it."). Targets now include Dani's tip (3:3), nodding (4:1), the dive (4:4) and the thanks (5:3). Hints, how and why rewritten. | 6 / 6 / 4 (4:1, 4:2, 4:4, 5:3) |
| RA2a S14 (mc) | Replaced the archery "thanks" item with a bike item. Opinion "Rosa does not give up" has no word shared with the key ("She got back on and pushed off again until she rode all the way down the block."). | 4 / 4 / 3 (key, "wobbled and fell", Cam showed her) |
| RA2a S09, S12; RA2b S14 (thin hint 3) | Each hint 3 now adds a new step: S09 asks whether each tusk sentence tells what the tusk is or what it can do; S12 asks whether each sentence gives the tip or shows someone following it; RA2b S14 asks whether each doctor sentence tells how he checked or what he found. | S09: 4 / 3 / 2 (key, "what the tusk is"). S12: 4 / 3 / 2 (key, sentence 2). RA2b S14: 4 / 3 / 3 (key, sentences 2 and 3). These remain narrow; they meet the rule of two. |
| RA1b C10 (mc) | The two weak choices ("write his own guess", "ask a classmate") replaced by "copy the number from a post that does not say who wrote it" and "use how long a blue whale lives, because all whales are alike". How, why and misconception updated. Hint 3 still removes only the calf-length choice. | 4 / 4 / 3 (key, anonymous post, blue whale) |
| Manatee (RA2b S08 excerpt X) | "about 20 minutes" changed to "as long as 20 minutes when it is resting". Dependent hints and how were checked and still fit. | no change in counts |
| Clue wording | Lemur clue changed from "act together" to "treat each other", and C04 hint 2 uses "parts" instead of "details", so no clue or hint shares a rare word only with the key (check-content warnings cleared). | n/a |

### 8.3 Not changed
- RA2b p3 is still 77 words by design (see N3 in the review).
- RA2b has no Part A/B item; the review accepts this.
- RA1b has seven teach points; pre-existing, accepted.
- Guide dog "several months": left, the review calls it acceptable.
- The right-whale passage should still be re-checked for facts once a year.

### 8.4 Needs blind re-solve
RA1b C10; RA2a C13, S09, S11, S12, S14; RA2b C04, C05, C09, C12, S14, and S08 (manatee wording). Also re-read RA2b p5 for the new paragraph 3.

### 8.5 Gates after the fixes
- `check-content.js --all`: PASS (0 failures). The only warnings in these lessons: RA2b p3 short.
- `check-writing.js`: 0 failures, 0 warnings. `check-instructional-copy.js`: 28 assertions passed.
- `readability.py`: all RA passages are at or under FK 4.5 (RA2a p5 4.2 is the highest; RA2b p2 4.3).

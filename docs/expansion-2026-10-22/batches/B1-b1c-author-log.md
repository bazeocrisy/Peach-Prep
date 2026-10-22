# B1 author log (b1c): 3.T.SS.2.a and 3.T.T.4.a

**Role:** content author b1c, batch B1. **This is not a review.** Nothing here certifies the items. Reviewers should blind-solve before they read this log.

**Files changed:**
- `js/data/lessons/T-SS.js`, in the 3.T.SS.2.a block only.
- `js/data/lessons/T-T34.js`, in the 3.T.T.4.a block only.

In each block I added new passages, `core`, `similar` and `addons`, and I edited `teach.points`. In 3.T.T.4.a I also added a third Watch Me example. Nothing in `practice`, `test`, `testB` or `clues` changed, and no existing id changed.

## 0. Gates

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures. In my lessons only two warnings remain: "core items with no similar item", the same kind of warning B0 has (see §5) |
| `python3 verification/readability.py` | New prose passage 3.T.SS.2.a p5: 170 words, FK 3.3. The poems are skipped by the script |
| `check-writing.js`, `check-instructional-copy.js` | Pass |
| Six-word n-gram scan of all new text against every set, task and lesson, including these lessons' forms A and B and Together | No content matches. The hits are shared directions ("This question has two parts…", "A common mix-up is…") and one incidental phrase: "skin under his chin", which also appears in an unrelated passage about spring peepers in 3.T.C.1.c |
| Browser smoke test on port 8733, at 390 and 1366 widths | Learn, Watch, Together and Try load. Every item in `:y`, `:y2`, `:y3` and `:p` for both lessons checks as right when given its key, and three hints display. The only console errors are the font requests the script blocks on purpose |

## 1. 3.T.SS.2.a "Similes, metaphors and idioms"

**Official wording** (p. 30): "Identify and describe the use of figurative language, such as similes, metaphors, and idioms in a wide variety of texts."

**Components:**
- simile
- metaphor
- idiom
- describing meaning or effect
- a variety of texts: story, journal, a coach's words, poem, note, article and class report

### Reuse decisions

| Item | Decision | Reason |
|---|---|---|
| P5 (windmills meaning) | **Reused** as `{ref}`, set 1 question 1, with an addon | Marked reusable. Its hints and how never name the type of language |
| P4 (classify four phrases) | **Not reused. It stays in Together**, so Together is now P1 to P4 | Together P2 says "windmills" is a metaphor and P3 says "butterflies" is an idiom. Those are two of P4's four rows, so P4 would leak from Together into core (04 §6 rule 7) |
| Weak items | None were flagged for this lesson in 03 | — |

### New passages (never used by test or testB)

| Id | Title | Kind | Domain | Used by |
|---|---|---|---|---|
| p4 | Beach Morning | poem, 4 stanzas of 4 lines | nature and family | C06 to C09 |
| p5 | The Green Anole | informational, 170 words, FK 3.3 | science (a Georgia lizard) | C11 to C14 |

**Short stems** carry the other texts:
- C04: Rosa's swim journal
- C05: Coach Ellis's words
- C10: Aunt Rena's note
- C15: a class report on the garden
- similar items S01 to S03

**Fact check for p5:**
- Green anoles have sticky toe pads.
- They change from green to brown with cool air or stress, within minutes.
- Males extend a pink dewlap and bob their heads to warn other males.
- They catch insects by sitting still, then lunging.

**Phrases avoided:** I avoided every phrase used in form A, form B, PT-1, R-LIT-01, R-POE-01 and 3.T.SS.2.b. "On cloud nine" was dropped because it is a 3.T.SS.2.b key, and the Tybee place name was dropped.

### The fifteen

| # | Id | Set | Component | Task | Format | Pts | DOK | Text | How it differs |
|---|---|---|---|---|---|---|---|---|---|
| 1 | P5 (ref) | 1 | metaphor meaning | describe | mc | 1 | 2 | p1 | The only item on a metaphor in the story |
| 2 | C02 | 1 | simile meaning + evidence | use evidence | ebsr | 2 | 3 | p1 | The only simile item with a feeling inferred and a supporting sentence |
| 3 | C03 | 1 | effect / author's purpose (simile) | explain | mc | 1 | 3 | p1 | Why the author uses "as cold as ice" just before the race |
| 4 | C04 | 1 | simile vs literal like or as | identify (choose two) | ms | 2 | 2 | journal stem | Distractors: like meaning "enjoy", a same-kind comparison, a comparison with no like or as |
| 5 | C05 | 1 | idiom: type + meaning | construct | dropdown | 2 | 2 | coach stem | Name the type and the meaning of "knock it out of the park" |
| 6 | C06 | 2 | metaphor meaning (extended, poem) | describe | mc | 1 | 2 | p4 | Poem genre; the ocean as a sleepy cat |
| 7 | C07 | 2 | idiom meaning + evidence | use evidence | ebsr | 2 | 3 | p4 | "Chin up!" with line evidence |
| 8 | C08 | 2 | two similes, describe | describe (choose two) | ms | 2 | 2 | p4 | Describes more than one use (ALD Level 4) |
| 9 | C09 | 2 | literal like | construct | dropdown | 2 | 2 | p4 | "I like to build" is not a simile |
| 10 | C10 | 2 | idiom vs simile vs literal | identify / transfer | hottext (options) | 1 | 2 | note stem (family) | Letter-type text in a new domain |
| 11 | C11 | 3 | simile type + meaning | construct | dropdown | 2 | 2 | p5 | Informational text |
| 12 | C12 | 3 | idiom meaning + evidence | use evidence | ebsr | 2 | 3 | p5 | "Keep your eyes peeled" in an article |
| 13 | C13 | 3 | metaphor purpose | explain | mc | 1 | 3 | p5 | Purpose in an article. Distractors come from other paragraphs or read the words literally |
| 14 | C14 | 3 | metaphor vs literal is/are | compare | ms | 2 | 3 | p5 + stem | Compares a fact sentence with a metaphor sentence |
| 15 | C15 | 3 | simile, metaphor, idiom meanings | transfer | match | 2 | 2 | class report stem (community) | All three kinds in a new text |

**Tallies:**
- **Points:** 26.
- **Formats:** mc 4, ms 3, ebsr 3, dropdown 3, hottext 1, match 1. That is 6 formats; mc is used 4 times (the limit is 6), and 11 items are technology-enhanced.
- **DOK:** level 1 on 0 items, level 2 on 9, level 3 on 6.
- **Verbs:**
  - identify: 4, 10
  - describe: 1, 6, 8
  - explain: 3, 13
  - evidence: 2, 7, 12
  - construct: 5, 9, 11
  - compare: 14
  - transfer: 10, 15
- **Domains:**
  - sports: 1 to 5
  - nature and family: 6 to 9
  - family: 10
  - science: 11 to 14
  - community: 15
- **Components:**
  - simile: 2, 3, 4, 8, 11, 15
  - metaphor: 1, 6, 13, 14, 15
  - idiom: 5, 7, 10, 12, 15
  - Every set touches all three.

**Similar bank:**

| Id | Mirrors | Format and DOK | Text |
|---|---|---|---|
| S01 | P5, C06 | mc, DOK 2 | "sponges" (school) |
| S02 | C05, C07, C12 | mc, DOK 2 | "on the right track" (family) |
| S03 | C04, C09, C11 | mc, DOK 2 | box turtle report (science) |

**Teaching** (still 5 points and 3 Watch Me examples):
- Point 2: "The classroom was noisy" is not a metaphor.
- Point 4: ask why the author chose the comparison. Stories, poems, letters and articles all use figurative language.
- Point 5: "My bike is as big as yours" compares two things of the same kind, so it is not a simile.

## 2. 3.T.T.4.a "How poems are built"

**Official wording** (p. 35): "Discuss and explain techniques used to present and design poetry, including rhyme scheme."

**Components:**
- structure (lines and stanzas)
- rhyme scheme (the hardest component, in every set)
- repetition and its effect
- stanza roles and how the poem changes

### Reuse decisions

**No Try item is referenced.** P4 (match each stanza's job) and P5 (how the poem changes, EBSR) cover the same three stanzas of "Tap, Tap, Tap":
- P4's how places "the rain stops, and the sun comes out" in stanza 3.
- That is P5's key.
- So wherever one is visible (same set, or Together), it gives the other away.

Both stay in Practice Together, which is now P1 to P5 (within 2 to 5), and all fifteen core items are new. **The lead may prefer P5 as a set 1 ref with P4 moved elsewhere.** No weak items were flagged.

### New poems (all original; never used by test or testB)

| Id | Title | Rhyme pattern | Domain | Used by |
|---|---|---|---|---|
| p5 | Flip! | pairs; stanzas of 4, 4 and 2 lines | family | C01 to C04, C10 |
| p6 | Double Dutch at Recess | pairs; 3 stanzas of 4 lines | school / sports | C06 to C10 |
| p7 | Spin, Spider, Spin | every other line, with a refrain that changes in stanza 3 | nature | C11 to C13 |
| p8 | Game Night | lines 2 and 4; first lines in parallel | community / sports | C14, C15 |

Notes on the poems:
- "Flip!" was first titled "Pancake Morning", which collides with a 3.F.P passage title.
- "Game Night" uses the team name Comets because "Tigers" is used in 3.T.C.

**Stems:**
- C05: a parade stanza that rhymes on lines 1, 2 and 4, leaving line 3 unrhymed
- C13: four short stanzas as the answer choices
- S01 to S03: new short poems

**Themes avoided:** rain, kites, fireflies, snails, geese, dogs, bunnies, leaves, ponds, snow and moons. These are used by the forms, R-POE-01, 3.T.T.4.b and Watch Me.

### The fifteen

| # | Id | Set | Component | Task | Format | Pts | DOK | Text | How it differs |
|---|---|---|---|---|---|---|---|---|---|
| 1 | C01 | 1 | rhyme scheme | construct | dropdown | 2 | 2 | p5 | Name where the rhymes sit and one rhyming pair |
| 2 | C02 | 1 | repetition (sound) | explain | mc | 1 | 2 | p5 | "Sizzle, sizzle" copies a sound |
| 3 | C03 | 1 | structure | identify (choose two) | ms | 2 | 2 | p5 | Lines vs stanzas; a short last stanza |
| 4 | C04 | 1 | how the poem changes (turn) | use evidence | hottext | 1 | 2 | p5 | The line where the poem turns |
| 5 | C05 | 1 | rhyme scheme | identify | hottext (options) | 1 | 2 | parade stem | The unrhymed line in a stanza where three lines rhyme |
| 6 | C06 | 2 | rhyme scheme | explain | mc | 1 | 3 | p6 + changed-line stem | Why a changed line would break the pattern |
| 7 | C07 | 2 | repetition | use evidence (choose two) | hottext | 2 | 2 | p6 | A distractor repeats a word but about the ropes |
| 8 | C08 | 2 | how the poem changes | use evidence | ebsr | 2 | 3 | p6 | The last stanza's change |
| 9 | C09 | 2 | structure / stanza design | explain | mc | 1 | 3 | p6 | Why stanza 1 ends where it does |
| 10 | C10 | 2 | structure | compare | ms | 2 | 3 | p5 + p6 | Distractors are true of only one poem |
| 11 | C11 | 3 | repetition (refrain) | describe (choose two) | ms | 2 | 2 | p7 | What a refrain at the end of each stanza does |
| 12 | C12 | 3 | repetition + change | explain | mc | 1 | 3 | p7 | Why the refrain changes. Distractor: changing a line just to rhyme |
| 13 | C13 | 3 | rhyme scheme | compare / transfer | mc | 1 | 3 | p7 + 4 stanzas | Match the pattern; the choices are 1-3/2-4, pairs, 2-4 only, and 1-4/2-3 |
| 14 | C14 | 3 | stanza roles | identify | match | 2 | 2 | p8 | The worker sweeps in stanzas 1 and 3, so timing decides |
| 15 | C15 | 3 | structure (parallel lines) | explain / transfer | mc | 1 | 3 | p8 | Repeated first lines with the time and one word changed |

**Tallies:**
- **Points:** 22.
- **Formats:** mc 5, ms 3, hottext 3, dropdown 1, ebsr 1, match 1. That is 6 formats, with 9 technology-enhanced items.
- **DOK:** level 1 on 0 items, level 2 on 8, level 3 on 7.
- **Verbs:**
  - identify: 3, 5, 14
  - explain: 2, 6, 9, 12, 15
  - evidence: 4, 7, 8
  - construct: 1
  - compare: 10, 13
  - transfer: 5, 13, 15
- **Components:**
  - rhyme scheme: 1, 5, 6, 13
  - repetition: 2, 7, 11, 12
  - stanza roles and change: 4, 8, 12, 14
  - structure: 3, 9, 10, 15
  - Every set touches all four.
- **Domains:** family, community, school and sports, nature, and community and sports. No domain has more than five items.

**Similar bank:**

| Id | Mirrors | Format and DOK | Text |
|---|---|---|---|
| S01 | C01, C03 | ms, DOK 2 | goldfish poem |
| S02 | C02 | mc, DOK 2 | basketball poem |
| S03 | C12, C08, C04 | mc, DOK 3 | kitten poem whose refrain changes |

**Teaching:**
- **Point 3:** a line whose last word matches no other end word does not rhyme. This prepares C05.
- **Point 4:** some repeated words copy a sound, and when a repeated line changes, ask what has changed. This prepares C02 and C12.
- **Point 5:** a new stanza starts when something new happens, and to compare two poems you check the same thing in each. This prepares C09, C10 and C13.
- **New Watch Me 3:** a two-stanza seed poem. It models counting stanzas and lines, rhymes on lines 2 and 4 with unrhymed lines, a refrain that changes and why it changes, and the job of each stanza. There are now 3 examples, the limit.

## 3. Same-set leak control (things I checked and changed while authoring)

- **3.T.T.4.a C09:** hint 3 originally listed stanza 1's rhyme pairs, which gave away C06. It now rules out the bell instead.
- **3.T.T.4.a C08:** a Part A distractor ("friends start a chant") would have pointed to a C07 key line. It now reads "teaches a friend how to jump", and the how no longer describes stanza 2 as jumping.
- **3.T.T.4.a C12:** the hint and how avoid saying which lines rhyme, because that would narrow C13.
- **3.T.T.4.a C11:** the how avoids mentioning the fly (C12).
- **3.T.T.4.a C14:** the hints and how do not mention the times of day, which are C15's key.
- **3.T.SS.2.a:** no set 1 hint or how names the type of P5's figurative phrase.
- **Comments:** passage comments do not state rhyme patterns, so they do not spoil a blind solve.

## 4. Points reviewers should test hardest

These are the risks I can see. They are not resolved here.

1. **3.T.SS.2.a C04:** is "This pool is as long as the pool at my school" clearly *not* a simile for a grade 3 child? It is taught now in teach point 5.
2. **3.T.SS.2.a C02:** Part B relies on "third place!" with an exclamation mark showing his excitement. Is this inference tight enough?
3. **3.T.SS.2.a C05:** hint 1 lists all three types and hint 3 completes slot 0. Is that too strong?
4. **3.T.T.4.a C09:** is the key ("ends the waiting part…") the single defensible reading of the stanza break?
5. **3.T.T.4.a C04:** p5:2:4 ("It lands half on the stove below.") also shows the flop but is not a target. Check that this is acceptable.
6. **3.T.T.4.a C13:** "flour/nose" and "rows" in the bakery stanza. Check that a child hears rows and nose as a rhyme, which makes lines 2 and 3 rhyme.
7. **3.T.T.4.a C03:** this may be judged DOK 1 (counting).
8. **Hint 3 strength:** C14 hint 3 in both lessons, and 3.T.SS.2.a C12 hint 2, are on the strong side.

## 5. Notes for the lead

- **Uncovered core items.** As in B0, the similar bank has three items per lesson, so some core items have no extra question:
  - 7 in 3.T.SS.2.a: C02, C03, C08, C10, C13, C14 and C15
  - 9 in 3.T.T.4.a: C05, C06, C07, C09, C10, C11, C13, C14 and C15
  - The checker reports these as warnings.
- **Two lesson-level changes to Together:** 3.T.SS.2.a Together grows from 3 to 4 items, and 3.T.T.4.a Together grows from 3 to 5. See the reuse decisions. Every Together item now has addons.
- **No `cr` items.** The standard says "discuss and explain", so a constructed-response explanation of a technique would fit. I left it out to keep these lessons scored-format only. Consider adding one later.
- **I have not reviewed any of this myself.**

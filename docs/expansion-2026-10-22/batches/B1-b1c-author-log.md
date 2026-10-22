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

## 6. Fixes after review (B1-review-2A and B1-review-2B, lead message of 2026-10-22)

Every MUST and SHOULD for 3.T.SS.2.a and 3.T.T.4.a is addressed, and the new rules appended to AUTHOR-BRIEF.md are applied. §1 to §5 above describe the first version. Where they differ, this section wins.

**Ids.** Changed items keep their ids. B0 did the same, because rev "1" has never been released or recorded.

### 6.1 Needs blind re-solve (choices, targets, rows, slots or passage changed)

| Item or text | Change | Finding |
|---|---|---|
| **3.T.SS.2.a p4, stanza 2 line 1** | "The gulls are like a recess yard." became "The gulls are like a recess crowd." The first version compared birds to a place | Lead, 2B N-2. Affects C06 to C09; C08 directly |
| **3.T.SS.2.a p5, paragraph 5** | "A brown anole on a tree trunk…" became "An anole that has turned brown on a tree trunk can be very hard to spot." This avoids the brown anole, a separate species established in Georgia | 2A S-S4. Affects C11 to C14; C12 directly |
| SS2a-C02 | Part B: "She kicked hard." was replaced with "When Rosa touched the wall, she pulled off her goggles." Paragraph 4 now holds two Part B choices | 2B M-4, 2A S-S1 |
| SS2a-C05 | Slot 1: "will swim in a pool inside a park" was replaced with "should rest and skip the next meet", a non-literal misreading that "Keep practicing" rules out | 2B M-5 |
| SS2a-C12 | The Part B key text follows the passage change. "Then it gulps down its meal." was replaced with the paragraph 4 sentence "To warn another male to stay away, he puffs it out and bobs his head up and down." A paragraph 2 colour sentence was **not** used, because it would pre-answer C13, whose key is the colour change | 2B M-4, 2A S-S1, AUTHOR-BRIEF rule 5 |
| SS2a-S01 | The stem no longer explains itself. "You soak up everything I teach." was removed, so "ask question after question" carries the clue | 2A S-S3 |
| SS2a-S03 | **Rewritten.** It is now "what does 'as small as a bottle cap' help the reader understand?", a describe item. It no longer has TB4's design (like meaning enjoy, a metaphor, an idiom) or the same-kind trap. The writer is now Lena, not Jamal. `like` is C02 and C11 | Lead, 2A S-S2, 2B M-6 |
| **3.T.T.4.a p5 "Flip!", stanza 3** | "The dog gets breakfast. He likes it!" became "The dog gets breakfast: every bit!" (sit and bit) | Lead, 2B N-1. Affects C01 to C04 and C10 |
| TT4a-C01 | Slot 1: "pan and three" was replaced with "pan and sound" (lines 1 and 3), which tests the every-other-line misconception | 2B S-2 |
| TT4a-C04 | Target p5:2:1 ("Sizzle, sizzle, now it's me.") was added, so stanza 2 holds three targets. 2:4 is still left out, because it would be a second key | 2A P-M1, 2B M-7 |
| TT4a-C07 | Target p6:1:1 ("The ropes go swinging, round and round.") was added. It repeats a word but is about the ropes, so it still competes after hint 3 rules out "slap" | 2A P-M2, 2B M-8 |
| TT4a-C08 | Part B now has two stanza 3 lines (the key, and "I'm out of breath, but what a thrill!") and two stanza 2 lines ("My feet are quick…" and "I hop, hop, hop…"). The stanza 1 lines were dropped | 2B M-4, 2A P-M3, AUTHOR-BRIEF rule 4 |
| TT4a-C10 | **Rewritten.** It no longer repeats C03's frame and key (stanza and line counts). It now compares how the two poets use repeated words. Keys: "Both poets repeat a word that copies a sound" (sizzle, slap) and "Only the pancake poem begins two stanzas with the same two words." Distractors: the reverse "only", a repeated end line in both poems, and "neither repeats a word inside a line" | 2B S-4, lead |
| TT4a-C14 | **Rewritten** as a two-slot dropdown: "Stanza 1 {before / during / after the game}, and stanza 3 {…}." It no longer copies the "Match each sentence to the stanza" frame of form A T4, form B TB4 and Together P4 | 2A P-S2, lead |

### 6.2 Hint, how, why and label changes only (ladder audit and same-set leakage)

| Item | Change | Finding |
|---|---|---|
| SS2a-C02 | Hint 2 is now "Reread paragraph 4 from the beginning", which holds two Part B choices. The how and why rule out the goggles sentence | 2B M-4 |
| SS2a-C03 | Hint 2 is now "What else does the author tell you about Rosa there?" Hint 3 rules out "frozen" and stops | 2A S-M1 |
| SS2a-C05 | Hint 2 is now "Reread everything Coach Ellis does and says, not just the saying." Hint 3 settles part of slot 0 only: "not a simile; decide whether it says one thing is another, or is a saying" | 2A S-M1, 2B M-5, brief rule 2 |
| SS2a-C06 | Hint 2 is now "Picture a sleepy cat. Then reread stanza 1 for what the ocean does." Hint 3 rules out the literal cat only | 2A S-M1, 2B S-1 |
| SS2a-C07 | Hint 2 is now "Reread stanza 3 and the lines around 'Chin up!'" Stanza 3 holds two Part B choices | 2B M-4, 2A S-S1 |
| SS2a-C08 | Hint 2 is now "Reread stanza 2. What do the gulls do in each line?" The how and why say "recess crowd" | 2A S-M1, 2B S-1 |
| SS2a-C12 | Hint 2 is now strategy only: "Try each Part A meaning in place of the idiom…" It names no place | 2B M-4, brief rule 4 |
| SS2a-C13 | Hint 2 is now "Ask what a magician does that amazes people…". Hint 3 rules out the literal choice, then has the child check which paragraph each remaining choice comes from | 2A S-S1, 2B S-1 |
| SS2a-C15 | Hint 2 is now "Find each phrase in the writing, and read the sentence around it." | 2A S-M1 |
| SS2a-P3 (Together) | Hint 2 is now "Try each Part A meaning in place of the idiom. Which one fits the words Ms. Ellis says next?" | 2B N-6 |
| SS2a teaching | **Glossary:** a simile is "a comparison of two different kinds of things that uses like or as." **Teach point 1:** "two different kinds of things." **Watch Me 1, new step 3:** fur and a cloud are different kinds; "Her fur was as soft as her sister's" would not be a simile. C04's key and its "as long as the pool" distractor now match what the lesson teaches | Lead, 2B M-6, brief rule 7 |
| TT4a-C01 | Hint 2 points to stanza 2, not stanza 1, whose pair is a slot 1 key. The why no longer claims that every stanza has lines 3 and 4. The how and why no longer mention the last stanza's pair, which would hint at C03 | 2A P-S1, 2B N-3, brief rule 5 |
| TT4a-C02 | Hint 2 is now "Say 'Sizzle, sizzle' out loud. Then reread stanzas 1 and 2." | 2A P-S1 |
| TT4a-C03 | DOK relabelled 2 → **1**. The lesson now has one DOK 1 item | Lead, 2A P-S3, 2B S-6 |
| TT4a-C04 | Hint 2 is now strategy only: "Read the poem in order. At each line, ask: is everything still going as planned?" | 2A P-M1, 2B M-7 |
| TT4a-C07 | The how and why describe both stanza 1 rope lines | follows the target change |
| TT4a-C08 | Hint 2 is now "Compare stanza 3 with stanza 2. What is different?" Hint 3 now rules out the trip ("It is the ropes that fall still"). **"The first turn comes in stanza 1" was removed** from hint 3, how and why, so C08 no longer gives away C09 | 2A P-M3, 2B M-4 and M-9 |
| TT4a-C09 | Hint 2 is now "Ask what part of the game stanza 1 is about, and what part stanza 2 is about." | 2B S-1, 2A P-S1 |
| TT4a-C11 | Hint 1 is now strategy only: "Repetition can add a beat, and it can make an idea stand out." Hint 2 is "Reread stanzas 1 and 2, and say the repeated line each time." | 2A P-M4 |
| TT4a-C12 | Hint 2 is now "Compare what the spider is doing in stanza 3 with what she does in stanzas 1 and 2." Hint 3 rules out the storm only | 2A P-S1, 2B S-1 |
| TT4a-S02 and S03 | Hint 2 no longer answers the item. S03's `like` is now C12 only | 2A P-S1 and P-N3 |
| TT4a-P5 (Together) | Hint 2 is now "Check both halves of each Part A choice: the start of the poem and the end." It names no stanza | 2B N-6, brief rule 4 |
| TT4a teaching | Teach point 3 adds "If you change an end word, check whether its partner still rhymes." This prepares C06 | 2B S-8 |

### 6.3 Not changed, with reasons

- **2B N-10 (TT4a-C12).** "Wait" rhymes with "gate", so the "dew" distractor is kept as the reviewer asked.
- **The other DOK labels in 3.T.T.4.a.** The reviews offered C05 as DOK 1, but the lead asked only for C03.

**Leak checks I added myself, against the new brief rules:**
- C12's colour distractor would have given away C13.
- C10 now names the poems by topic, so its keys can be quoted without nested quotation marks.
- C10's how cites only "oh no, oh no" for repetition inside a line, not C07's keys.

### 6.4 Gates after the fixes

- `node verification/check-content.js --all`: PASS, 0 failures. The only warnings in these two lessons are the similar-coverage warnings: 8 core items in 3.T.SS.2.a and 11 in 3.T.T.4.a have no similar item.
- `python3 verification/readability.py`: 3.T.SS.2.a p5 is now 173 words, FK 3.3. Two 3.T.SS.1.a passages read above 4.5; they are not in my blocks.
- `check-writing.js` and `check-instructional-copy.js` pass.
- **Port 8733:** every core and Together item in both lessons scores right with its key, and there are no page errors.
- **Six-word n-gram scan:** no content leaks.
- I have not reviewed my own work.

## 7. Fixes after the re-review (B1-rereview-b1c.md)

The re-review accepted 3.T.T.4.a and asked for changes to 3.T.SS.2.a. This section lists every item changed in this round, and nothing else was changed.

**A correction to §6.** §6 said every MUST and SHOULD was addressed. That was wrong for SK-SS2a-S02, which 2A S-S1 had listed: I did not change it in §6, and §6 does not mention it. It is fixed below (R-M1). The C13 hint 3 that §6.2 called a fix only moved the cue from hint 2 to hint 3, and the C07 hint 2 that §6.2 called a fix still pinned the key. Both are fixed below.

### 7.1 Needs blind re-solve (choices changed)

| Item | Change | Finding |
|---|---|---|
| SK-SS2a-S02 | The distractor "He needs to find a new recipe for his cornbread." was replaced with "He should make the cornbread exactly the same way next time." This survives the pleased-or-upset test, and "use a little less salt" rules it out | R-M1 |
| SK-SS2a-S03 | The distractor "that baby box turtles grow bigger very fast" was replaced with "that a baby box turtle is round and flat". A bottle cap is round and flat, but the sentence's word *small* makes the comparison about size | R-M2 |

### 7.2 Hint, how, why and teaching changes only

| Item | Change | Finding |
|---|---|---|
| SK-SS2a-S02 | Hint 2 is now "Read everything Grandma does and says, from her first bite to her last words." Hint 3 rules out the railroad choice only, then says "Test the choices that are left against what Grandma says to do next time." The how and why now rule out the new distractor | R-M1 |
| SK-SS2a-S03 | Hint 3 no longer says "the word the simile uses". It rules out the bottle-hiding choice, then says "Picture a bottle cap again, then test each choice that is left against the whole sentence." The how and why explain size against shape | R-M2 |
| SK-SS2a-C13 | Hint 3 is now "…ask: does the article tell about something the anole really does that could amaze someone, the way a magic trick does?" The same-paragraph test is gone. Flies disappearing, hiding and colour change all survive it | R-S1 |
| SK-SS2a-C07 | Hint 2 is now "Reread all of stanza 3, from its first line to Grandpa's words." It no longer says "the lines around". Stanza 3 holds both "With towers in a row" and the key | R-S2 |
| SK-SS2a-C09 | Hint 3 is now "Try putting the word enjoy in place of like, and then the words similar to. Which one keeps the meaning of the line?" It scaffolds slot 0 only and leaves slot 1 to the child | R-S3 |
| 3.T.SS.2.a `teach.big` | "a simile compares with like or as, a metaphor says one thing is another" became "a simile compares two different kinds of things with like or as, a metaphor says one thing is a different kind of thing" | R-S4, brief rule 7 |
| 3.T.SS.2.a glossary, metaphor | Now "a comparison that says one thing is a different kind of thing, without like or as" | R-S4 |
| 3.T.SS.2.a teach point 2 | "It says one thing is another" became "It says one thing is a different kind of thing." It adds "My dog is a good swimmer" alongside "The classroom was noisy" as facts that are not metaphors. The example uses no anole or hunter, so it does not pre-answer C14 | R-S4 |
| SK-TT4a-C07 | How step 1 now ends "…are about the ropes." The clause "before the speaker jumps in" was cut, so it no longer hints at C09 | R-S5 |

**Not changed.** Every other item, passage and key in both blocks. The 3.T.SS.2.b glossary in the same file (`T-SS.js`) also says "says one thing is another". It is outside my block, and I did not edit it.

### 7.3 Gates

- `node verification/check-content.js --all`: PASS, 0 failures. The only warnings in these two lessons are the similar-coverage warnings: 8 core items in 3.T.SS.2.a and 11 in 3.T.T.4.a have no similar item.
- No passage text changed in this round, so readability is unchanged.
- I have not reviewed my own work.

## 8. Final hint fixes (B1-rereview-b1c-2.md, lead message)

3.T.SS.2.a was accepted. These are two hint-only changes. No choices, keys, targets or passages changed, so nothing needs a blind re-solve.

| Item | Change | Finding |
|---|---|---|
| SK-SS2a-C09 | Hint 3 was "Try putting the word enjoy in place of like, and then the words similar to…". It quoted the slot 0 key and produced an awkward swap. It is now the reviewer's second proposal: "If like were comparing, what would the castle be compared to? Look for a second thing in the line. If there is none, like has its other meaning." It scaffolds slot 0 without naming the key and leaves slot 1 to the child | rereview-2 S-1 |
| SK-SS2a-P2 (Together addon) | Hint 1 "It says one thing is another" became "It says one thing is a different kind of thing", which matches the glossary and teach point 2 | lead |

**Gate:** `node verification/check-content.js --all` passes with 0 failures. The only warning in 3.T.SS.2.a is the similar-coverage warning.

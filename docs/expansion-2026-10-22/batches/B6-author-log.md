# B6 author log: GUM Master (3.L.GC.1:M, eight lessons)

Author: B6 (content author). Status of every lesson: **AUTHORED (B6), NOT ACCEPTED: awaiting independent review.** Nothing was marked ACCEPTED and `accepted.js` was not touched. No git commit or push.

File edited: `js/data/lessons/L-GUM3.js` (the only content file). Each lesson's new blocks sit inside `/* B6:passages:start/end */` and `/* B6:core:start/end */` markers. Original practice P1 to P5 and test items were not changed.

## What was built (per lesson)
Each lesson now has: `core` (3 sets of 5, with `{ref}` to two original practice items where they fit), a `similar` bank S01 to S15 (every core item has its own twin via `like`), `addons` (hints, how, misconception) for P1 to P5, six new passages (three for core, three for twins), hints h1 to h3, `how` steps and a `misconception` line on every item. Teach and Watch Me were extended by hand outside the markers where the new items needed it: L1 teach points 3 and 5 and a third Watch Me (won't / its); L2 third Watch Me (loaf/loaves); L4 teach point 5 (yet, for, nor) and a third Watch Me; L5 third Watch Me (audience claps); L6 third Watch Me (Tia and I / by ourselves); L7 third Watch Me (comma splice). L3 and L8 were not changed.

## Gate results (last run, 2026-10-27)
- `node verification/check-content.js --all`: all B6 lessons have 0 failures. The run reports 1 FAILURE, which is in another batch's lesson: `3.F.P.4.a practice SK-FP4a-P4 (addons): hint 2 contains the answer "the g in go"` (js/data/lessons/F-PF.js, not my file; another agent is editing it). My lessons showed only warnings (remaining B6 warnings: hint-shares-word-only-with-key on a few hints, see below).
- `node verification/check-writing.js`: 0 failures, 0 warnings.
- `node verification/check-instructional-copy.js`: 28 assertions passed.
- `python3 verification/readability.py js/data/lessons/L-GUM3.js`: all 48 B6 passages are at or below FK 4.5 (highest: L5 p4 4.5, L1 p4 4.0, L2 p4 3.8) and all have at least 100 words.
- Twin vs core Jaccard (set / multiset), from `audit.js`: worst pairs about 0.38 to 0.44 per lesson, most 0.20 to 0.35. No key is the uniquely longest option in L8; in L5, L6 and L7 a few B/Part B pairs are 1.04 to 1.08 ratio (listed below).

## Web checks (grammar and rules), done 2026-10-27
- Hyphenation at line breaks: https://www.c82.net/typography/term/division-of-words (divide at syllable boundaries; consonant pairs that make one sound such as ch and th are never split; compounds divide at the simple words; double consonants divide between the letters; avoid one-letter lines). Also consulted by title: https://nos-langues.canada.ca/en/writing-tips-plus/hyphens-word-division and https://solano.edu/ASTC/forms/english/TIP%20Sheet%20THE%20HYPHEN.pdf. One-syllable words are not split follows from division by syllable.
- Reflexive pronouns: https://www.scribbr.com/nouns-and-pronouns/reflexive-pronouns/ (list; hisself, theirselves, theirself are nonstandard; myself is not a substitute for I or me). The item set avoids singular "themself" on purpose.
- Commas and FANBOYS: https://library.nps.edu/web/gwc/commas-fanboys and https://www.shmoop.com/grammar/punctuation/comma-splices.html were returned by search; the NPS page could not be fetched (redirect off the allowlist), so the comma-before-conjunction and comma-splice rules rest on the search results and the teach text already accepted in the repo. **A reviewer should re-check them.**
- Contractions, irregular plurals, irregular past tense, collective nouns: no new web fetch succeeded for these in this session; the items use only the closed lists already in the lesson teach text and common textbook forms (see ambiguity notes). **Not independently web-verified: flagged for the reviewer.**

## Item table
Legend: Component = core (C), similar (S). Task type uses the lesson's own types (mc, ms, ebsr, dropdown, hottext, match). "Draft edit" = the item edits inside a numbered draft passage.

### Lesson 1: 3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos
Passages: p1 "Getting Ready for the Pep Rally"; p2 "Stargazing on the Back Steps"; p3 "Flea Market Flyer"; p4 "Our Toy Drive"; p5 "A Cookout at the Lake"; p6 "Dog Wash Sign-Up Sheet"

| Id | Set | Comp | Type | DOK | Passage | Differs from its twin / notes | Live choices after hints |
|---|---|---|---|---|---|---|---|
| SK-GUM3-1-P4 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-1-P5 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-1-C03 | 1 | core | mc | 2 | p1 (draft edit) | twin SK-GUM3-1-S03 uses a different word set, stem and frame |  |
| SK-GUM3-1-C04 | 1 | core | dropdown | 2 | p1 (draft edit) | twin SK-GUM3-1-S04 uses a different word set, stem and frame |  |
| SK-GUM3-1-C05 | 1 | core | mc | 3 | p1 (draft edit) | twin SK-GUM3-1-S05 uses a different word set, stem and frame |  |
| SK-GUM3-1-C06 | 2 | core | hottext | 2 | p2 (draft edit) | twin SK-GUM3-1-S06 uses a different word set, stem and frame |  |
| SK-GUM3-1-C07 | 2 | core | ebsr | 3 | p2 (draft edit) | twin SK-GUM3-1-S07 uses a different word set, stem and frame |  |
| SK-GUM3-1-C08 | 2 | core | ms | 3 | p2 (draft edit) | twin SK-GUM3-1-S08 uses a different word set, stem and frame |  |
| SK-GUM3-1-C09 | 2 | core | dropdown | 2 | none | twin SK-GUM3-1-S09 uses a different word set, stem and frame |  |
| SK-GUM3-1-C10 | 2 | core | mc | 3 | p2 (draft edit) | twin SK-GUM3-1-S10 uses a different word set, stem and frame |  |
| SK-GUM3-1-C11 | 3 | core | hottext | 2 | p3 (draft edit) | twin SK-GUM3-1-S11 uses a different word set, stem and frame |  |
| SK-GUM3-1-C12 | 3 | core | dropdown | 2 | none | twin SK-GUM3-1-S12 uses a different word set, stem and frame |  |
| SK-GUM3-1-C13 | 3 | core | mc | 2 | none | twin SK-GUM3-1-S13 uses a different word set, stem and frame |  |
| SK-GUM3-1-C14 | 3 | core | mc | 2 | none | twin SK-GUM3-1-S14 uses a different word set, stem and frame |  |
| SK-GUM3-1-C15 | 3 | core | mc | 3 | none | twin SK-GUM3-1-S15 uses a different word set, stem and frame |  |
| SK-GUM3-1-S01 | twin | similar | hottext | 2 | none | like SK-GUM3-1-P4 | |
| SK-GUM3-1-S02 | twin | similar | ms | 2 | none | like SK-GUM3-1-P5 | |
| SK-GUM3-1-S03 | twin | similar | mc | 2 | p4 | like SK-GUM3-1-C03 | |
| SK-GUM3-1-S04 | twin | similar | dropdown | 2 | p4 | like SK-GUM3-1-C04 | |
| SK-GUM3-1-S05 | twin | similar | ms | 3 | p4 | like SK-GUM3-1-C05 | |
| SK-GUM3-1-S06 | twin | similar | hottext | 2 | p5 | like SK-GUM3-1-C06 | |
| SK-GUM3-1-S07 | twin | similar | ebsr | 3 | p5 | like SK-GUM3-1-C07 | |
| SK-GUM3-1-S08 | twin | similar | ms | 3 | p5 | like SK-GUM3-1-C08 | |
| SK-GUM3-1-S09 | twin | similar | dropdown | 2 | none | like SK-GUM3-1-C09 | |
| SK-GUM3-1-S10 | twin | similar | mc | 3 | p5 | like SK-GUM3-1-C10 | |
| SK-GUM3-1-S11 | twin | similar | hottext | 2 | p6 | like SK-GUM3-1-C11 | |
| SK-GUM3-1-S12 | twin | similar | dropdown | 2 | none | like SK-GUM3-1-C12 | |
| SK-GUM3-1-S13 | twin | similar | mc | 2 | none | like SK-GUM3-1-C13 | |
| SK-GUM3-1-S14 | twin | similar | mc | 2 | none | like SK-GUM3-1-C14 | |
| SK-GUM3-1-S15 | twin | similar | ms | 3 | none | like SK-GUM3-1-C15 | |

### Lesson 2: 3.L.GC.1:M:form-and-use-irregular-plural-nouns
Passages: p1 "A Morning at the State Park"; p2 "Snowed In at the Cabin"; p3 "Willow Farm Visitor Poster"; p4 "A Day at the Zoo"; p5 "Blizzard Day"; p6 "Costume Contest Flyer"

| Id | Set | Comp | Type | DOK | Passage | Differs from its twin / notes | Live choices after hints |
|---|---|---|---|---|---|---|---|
| SK-GUM3-2-P4 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-2-P5 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-2-C03 | 1 | core | dropdown | 2 | p1 (draft edit) | twin SK-GUM3-2-S03 uses a different word set, stem and frame |  |
| SK-GUM3-2-C04 | 1 | core | hottext | 2 | p1 (draft edit) | twin SK-GUM3-2-S04 uses a different word set, stem and frame |  |
| SK-GUM3-2-C05 | 1 | core | ebsr | 3 | p1 (draft edit) | twin SK-GUM3-2-S05 uses a different word set, stem and frame |  |
| SK-GUM3-2-C06 | 2 | core | mc | 2 | p2 (draft edit) | twin SK-GUM3-2-S06 uses a different word set, stem and frame |  |
| SK-GUM3-2-C07 | 2 | core | hottext | 2 | p2 (draft edit) | twin SK-GUM3-2-S07 uses a different word set, stem and frame |  |
| SK-GUM3-2-C08 | 2 | core | mc | 3 | none | twin SK-GUM3-2-S08 uses a different word set, stem and frame |  |
| SK-GUM3-2-C09 | 2 | core | ms | 2 | none | twin SK-GUM3-2-S09 uses a different word set, stem and frame |  |
| SK-GUM3-2-C10 | 2 | core | match | 2 | none | twin SK-GUM3-2-S10 uses a different word set, stem and frame |  |
| SK-GUM3-2-C11 | 3 | core | hottext | 2 | p3 (draft edit) | twin SK-GUM3-2-S11 uses a different word set, stem and frame |  |
| SK-GUM3-2-C12 | 3 | core | dropdown | 2 | none | twin SK-GUM3-2-S12 uses a different word set, stem and frame |  |
| SK-GUM3-2-C13 | 3 | core | ms | 3 | none | twin SK-GUM3-2-S13 uses a different word set, stem and frame |  |
| SK-GUM3-2-C14 | 3 | core | mc | 2 | p3 (draft edit) | twin SK-GUM3-2-S14 uses a different word set, stem and frame |  |
| SK-GUM3-2-C15 | 3 | core | mc | 3 | none | twin SK-GUM3-2-S15 uses a different word set, stem and frame |  |
| SK-GUM3-2-S01 | twin | similar | hottext | 2 | none | like SK-GUM3-2-P4 | |
| SK-GUM3-2-S02 | twin | similar | dropdown | 2 | none | like SK-GUM3-2-P5 | |
| SK-GUM3-2-S03 | twin | similar | dropdown | 2 | p4 | like SK-GUM3-2-C03 | |
| SK-GUM3-2-S04 | twin | similar | hottext | 2 | p4 | like SK-GUM3-2-C04 | |
| SK-GUM3-2-S05 | twin | similar | ebsr | 3 | p4 | like SK-GUM3-2-C05 | |
| SK-GUM3-2-S06 | twin | similar | mc | 2 | p5 | like SK-GUM3-2-C06 | |
| SK-GUM3-2-S07 | twin | similar | hottext | 2 | p5 | like SK-GUM3-2-C07 | |
| SK-GUM3-2-S08 | twin | similar | mc | 3 | none | like SK-GUM3-2-C08 | |
| SK-GUM3-2-S09 | twin | similar | ms | 2 | none | like SK-GUM3-2-C09 | |
| SK-GUM3-2-S10 | twin | similar | match | 2 | none | like SK-GUM3-2-C10 | |
| SK-GUM3-2-S11 | twin | similar | hottext | 2 | p6 | like SK-GUM3-2-C11 | |
| SK-GUM3-2-S12 | twin | similar | dropdown | 2 | none | like SK-GUM3-2-C12 | |
| SK-GUM3-2-S13 | twin | similar | ms | 3 | none | like SK-GUM3-2-C13 | |
| SK-GUM3-2-S14 | twin | similar | mc | 2 | none | like SK-GUM3-2-C14 | |
| SK-GUM3-2-S15 | twin | similar | mc | 3 | none | like SK-GUM3-2-C15 | |

### Lesson 3: 3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs
Passages: p1 "The Treasure Hunt"; p2 "Birthday at the Trampoline Park"; p3 "Room 12 News"; p4 "Hike to the Waterfall"; p5 "My Hamster Biscuit"; p6 "Camp Lakeside News"

| Id | Set | Comp | Type | DOK | Passage | Differs from its twin / notes | Live choices after hints |
|---|---|---|---|---|---|---|---|
| SK-GUM3-3-P4 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-3-P5 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-3-C03 | 1 | core | dropdown | 2 | p1 (draft edit) | twin SK-GUM3-3-S03 uses a different word set, stem and frame |  |
| SK-GUM3-3-C04 | 1 | core | mc | 2 | p1 (draft edit) | twin SK-GUM3-3-S04 uses a different word set, stem and frame |  |
| SK-GUM3-3-C05 | 1 | core | ebsr | 3 | p1 (draft edit) | twin SK-GUM3-3-S05 uses a different word set, stem and frame |  |
| SK-GUM3-3-C06 | 2 | core | hottext | 2 | p2 (draft edit) | twin SK-GUM3-3-S06 uses a different word set, stem and frame |  |
| SK-GUM3-3-C07 | 2 | core | ms | 2 | none | twin SK-GUM3-3-S07 uses a different word set, stem and frame |  |
| SK-GUM3-3-C08 | 2 | core | match | 2 | none | twin SK-GUM3-3-S08 uses a different word set, stem and frame |  |
| SK-GUM3-3-C09 | 2 | core | mc | 3 | none | twin SK-GUM3-3-S09 uses a different word set, stem and frame |  |
| SK-GUM3-3-C10 | 2 | core | dropdown | 2 | p2 (draft edit) | twin SK-GUM3-3-S10 uses a different word set, stem and frame |  |
| SK-GUM3-3-C11 | 3 | core | hottext | 2 | p3 (draft edit) | twin SK-GUM3-3-S11 uses a different word set, stem and frame |  |
| SK-GUM3-3-C12 | 3 | core | mc | 2 | p3 (draft edit) | twin SK-GUM3-3-S12 uses a different word set, stem and frame |  |
| SK-GUM3-3-C13 | 3 | core | ms | 3 | none | twin SK-GUM3-3-S13 uses a different word set, stem and frame |  |
| SK-GUM3-3-C14 | 3 | core | dropdown | 2 | none | twin SK-GUM3-3-S14 uses a different word set, stem and frame |  |
| SK-GUM3-3-C15 | 3 | core | mc | 2 | none | twin SK-GUM3-3-S15 uses a different word set, stem and frame |  |
| SK-GUM3-3-S01 | twin | similar | hottext | 2 | none | like SK-GUM3-3-P4 | |
| SK-GUM3-3-S02 | twin | similar | dropdown | 2 | none | like SK-GUM3-3-P5 | |
| SK-GUM3-3-S03 | twin | similar | dropdown | 2 | p4 | like SK-GUM3-3-C03 | |
| SK-GUM3-3-S04 | twin | similar | mc | 2 | p4 | like SK-GUM3-3-C04 | |
| SK-GUM3-3-S05 | twin | similar | ebsr | 3 | p4 | like SK-GUM3-3-C05 | |
| SK-GUM3-3-S06 | twin | similar | hottext | 2 | p5 | like SK-GUM3-3-C06 | |
| SK-GUM3-3-S07 | twin | similar | ms | 2 | none | like SK-GUM3-3-C07 | |
| SK-GUM3-3-S08 | twin | similar | match | 2 | none | like SK-GUM3-3-C08 | |
| SK-GUM3-3-S09 | twin | similar | mc | 3 | none | like SK-GUM3-3-C09 | |
| SK-GUM3-3-S10 | twin | similar | dropdown | 2 | p5 | like SK-GUM3-3-C10 | |
| SK-GUM3-3-S11 | twin | similar | hottext | 2 | p6 | like SK-GUM3-3-C11 | |
| SK-GUM3-3-S12 | twin | similar | mc | 2 | p6 | like SK-GUM3-3-C12 | |
| SK-GUM3-3-S13 | twin | similar | ms | 3 | none | like SK-GUM3-3-C13 | |
| SK-GUM3-3-S14 | twin | similar | dropdown | 2 | none | like SK-GUM3-3-C14 | |
| SK-GUM3-3-S15 | twin | similar | mc | 2 | none | like SK-GUM3-3-C15 | |

### Lesson 4: 3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra
Passages: p1 "Yoga for Kids"; p2 "Chalk Art Day"; p3 "Swim Lesson Day"; p4 "Jump Rope Club"; p5 "The Scarecrow Contest"; p6 "Snow Cone Stand"

| Id | Set | Comp | Type | DOK | Passage | Differs from its twin / notes | Live choices after hints |
|---|---|---|---|---|---|---|---|
| SK-GUM3-4-P5 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-4-C02 | 1 | core | dropdown | 2 | p1 (draft edit) | twin SK-GUM3-4-S02 uses a different word set, stem and frame |  |
| SK-GUM3-4-C03 | 1 | core | mc | 2 | p1 (draft edit) | twin SK-GUM3-4-S03 uses a different word set, stem and frame |  |
| SK-GUM3-4-C04 | 1 | core | ebsr | 3 | p1 (draft edit) | twin SK-GUM3-4-S04 uses a different word set, stem and frame |  |
| SK-GUM3-4-C05 | 1 | core | hottext | 2 | p1 (draft edit) | twin SK-GUM3-4-S05 uses a different word set, stem and frame |  |
| SK-GUM3-4-C06 | 2 | core | mc | 2 | none | twin SK-GUM3-4-S06 uses a different word set, stem and frame |  |
| SK-GUM3-4-C07 | 2 | core | ms | 2 | none | twin SK-GUM3-4-S07 uses a different word set, stem and frame |  |
| SK-GUM3-4-C08 | 2 | core | match | 2 | none | twin SK-GUM3-4-S08 uses a different word set, stem and frame |  |
| SK-GUM3-4-C09 | 2 | core | dropdown | 2 | p2 (draft edit) | twin SK-GUM3-4-S09 uses a different word set, stem and frame |  |
| SK-GUM3-4-C10 | 2 | core | mc | 2 | p2 (draft edit) | twin SK-GUM3-4-S10 uses a different word set, stem and frame |  |
| SK-GUM3-4-C11 | 3 | core | hottext | 2 | p3 (draft edit) | twin SK-GUM3-4-S11 uses a different word set, stem and frame |  |
| SK-GUM3-4-C12 | 3 | core | mc | 2 | none | twin SK-GUM3-4-S12 uses a different word set, stem and frame |  |
| SK-GUM3-4-C13 | 3 | core | mc | 3 | none | twin SK-GUM3-4-S13 uses a different word set, stem and frame |  |
| SK-GUM3-4-C14 | 3 | core | dropdown | 2 | none | twin SK-GUM3-4-S14 uses a different word set, stem and frame |  |
| SK-GUM3-4-C15 | 3 | core | ms | 2 | none | twin SK-GUM3-4-S15 uses a different word set, stem and frame |  |
| SK-GUM3-4-S01 | twin | similar | ms | 2 | none | like SK-GUM3-4-P5 | |
| SK-GUM3-4-S02 | twin | similar | dropdown | 2 | p4 | like SK-GUM3-4-C02 | |
| SK-GUM3-4-S03 | twin | similar | mc | 2 | p4 | like SK-GUM3-4-C03 | |
| SK-GUM3-4-S04 | twin | similar | ebsr | 3 | p4 | like SK-GUM3-4-C04 | |
| SK-GUM3-4-S05 | twin | similar | hottext | 2 | p4 | like SK-GUM3-4-C05 | |
| SK-GUM3-4-S06 | twin | similar | mc | 2 | none | like SK-GUM3-4-C06 | |
| SK-GUM3-4-S07 | twin | similar | ms | 2 | none | like SK-GUM3-4-C07 | |
| SK-GUM3-4-S08 | twin | similar | match | 2 | none | like SK-GUM3-4-C08 | |
| SK-GUM3-4-S09 | twin | similar | dropdown | 2 | p5 | like SK-GUM3-4-C09 | |
| SK-GUM3-4-S10 | twin | similar | mc | 2 | p5 | like SK-GUM3-4-C10 | |
| SK-GUM3-4-S11 | twin | similar | hottext | 2 | p6 | like SK-GUM3-4-C11 | |
| SK-GUM3-4-S12 | twin | similar | mc | 2 | none | like SK-GUM3-4-C12 | |
| SK-GUM3-4-S13 | twin | similar | mc | 3 | none | like SK-GUM3-4-C13 | |
| SK-GUM3-4-S14 | twin | similar | dropdown | 2 | none | like SK-GUM3-4-C14 | |
| SK-GUM3-4-S15 | twin | similar | ms | 2 | none | like SK-GUM3-4-C15 | |

### Lesson 5: 3.L.GC.1:M:use-collective-and-abstract-nouns
Passages: p1 "Fleet Day at the Harbor"; p2 "Orchestra Rehearsal"; p3 "Our Class Ant Farm"; p4 "The Ferry Ride"; p5 "Pet Show Day"; p6 "Bird Watching Club"

| Id | Set | Comp | Type | DOK | Passage | Differs from its twin / notes | Live choices after hints |
|---|---|---|---|---|---|---|---|
| SK-GUM3-5-P4 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-5-P5 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-5-C03 | 1 | core | mc | 1 | p1 (draft edit) | twin SK-GUM3-5-S03 uses a different word set, stem and frame |  |
| SK-GUM3-5-C04 | 1 | core | dropdown | 2 | p1 (draft edit) | twin SK-GUM3-5-S04 uses a different word set, stem and frame |  |
| SK-GUM3-5-C05 | 1 | core | ebsr | 2 | p1 (draft edit) | twin SK-GUM3-5-S05 uses a different word set, stem and frame |  |
| SK-GUM3-5-C06 | 2 | core | hottext | 2 | p2 (draft edit) | twin SK-GUM3-5-S06 uses a different word set, stem and frame |  |
| SK-GUM3-5-C07 | 2 | core | ms | 2 | none | twin SK-GUM3-5-S07 uses a different word set, stem and frame |  |
| SK-GUM3-5-C08 | 2 | core | match | 1 | none | twin SK-GUM3-5-S08 uses a different word set, stem and frame |  |
| SK-GUM3-5-C09 | 2 | core | mc | 3 | none | twin SK-GUM3-5-S09 uses a different word set, stem and frame |  |
| SK-GUM3-5-C10 | 2 | core | dropdown | 2 | p2 (draft edit) | twin SK-GUM3-5-S10 uses a different word set, stem and frame |  |
| SK-GUM3-5-C11 | 3 | core | hottext | 2 | p3 (draft edit) | twin SK-GUM3-5-S11 uses a different word set, stem and frame |  |
| SK-GUM3-5-C12 | 3 | core | mc | 2 | none | twin SK-GUM3-5-S12 uses a different word set, stem and frame |  |
| SK-GUM3-5-C13 | 3 | core | ms | 3 | none | twin SK-GUM3-5-S13 uses a different word set, stem and frame |  |
| SK-GUM3-5-C14 | 3 | core | dropdown | 2 | none | twin SK-GUM3-5-S14 uses a different word set, stem and frame |  |
| SK-GUM3-5-C15 | 3 | core | mc | 2 | none | twin SK-GUM3-5-S15 uses a different word set, stem and frame |  |
| SK-GUM3-5-S01 | twin | similar | ms | 2 | none | like SK-GUM3-5-P4 | |
| SK-GUM3-5-S02 | twin | similar | hottext | 2 | none | like SK-GUM3-5-P5 | |
| SK-GUM3-5-S03 | twin | similar | mc | 1 | p4 | like SK-GUM3-5-C03 | |
| SK-GUM3-5-S04 | twin | similar | dropdown | 2 | p4 | like SK-GUM3-5-C04 | |
| SK-GUM3-5-S05 | twin | similar | ebsr | 2 | p4 | like SK-GUM3-5-C05 | |
| SK-GUM3-5-S06 | twin | similar | hottext | 2 | p5 | like SK-GUM3-5-C06 | |
| SK-GUM3-5-S07 | twin | similar | ms | 2 | none | like SK-GUM3-5-C07 | |
| SK-GUM3-5-S08 | twin | similar | match | 1 | none | like SK-GUM3-5-C08 | |
| SK-GUM3-5-S09 | twin | similar | mc | 3 | none | like SK-GUM3-5-C09 | |
| SK-GUM3-5-S10 | twin | similar | dropdown | 2 | p5 | like SK-GUM3-5-C10 | |
| SK-GUM3-5-S11 | twin | similar | hottext | 2 | p6 | like SK-GUM3-5-C11 | |
| SK-GUM3-5-S12 | twin | similar | mc | 2 | none | like SK-GUM3-5-C12 | |
| SK-GUM3-5-S13 | twin | similar | ms | 3 | none | like SK-GUM3-5-C13 | |
| SK-GUM3-5-S14 | twin | similar | dropdown | 2 | none | like SK-GUM3-5-C14 | |
| SK-GUM3-5-S15 | twin | similar | mc | 2 | none | like SK-GUM3-5-C15 | |

### Lesson 6: 3.L.GC.1:M:use-reflexive-pronouns
Passages: p1 "Building Our Treehouse"; p2 "The Puppet Show"; p3 "Learning Cartwheels"; p4 "Sandcastle Day"; p5 "Sewing Club"; p6 "Pottery Class"

| Id | Set | Comp | Type | DOK | Passage | Differs from its twin / notes | Live choices after hints |
|---|---|---|---|---|---|---|---|
| SK-GUM3-6-P4 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-6-P5 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-6-C03 | 1 | core | dropdown | 2 | p1 (draft edit) | twin SK-GUM3-6-S03 uses a different word set, stem and frame |  |
| SK-GUM3-6-C04 | 1 | core | mc | 2 | p1 (draft edit) | twin SK-GUM3-6-S04 uses a different word set, stem and frame |  |
| SK-GUM3-6-C05 | 1 | core | ebsr | 3 | p1 (draft edit) | twin SK-GUM3-6-S05 uses a different word set, stem and frame |  |
| SK-GUM3-6-C06 | 2 | core | hottext | 2 | p2 (draft edit) | twin SK-GUM3-6-S06 uses a different word set, stem and frame |  |
| SK-GUM3-6-C07 | 2 | core | ms | 2 | none | twin SK-GUM3-6-S07 uses a different word set, stem and frame |  |
| SK-GUM3-6-C08 | 2 | core | match | 2 | none | twin SK-GUM3-6-S08 uses a different word set, stem and frame |  |
| SK-GUM3-6-C09 | 2 | core | mc | 3 | none | twin SK-GUM3-6-S09 uses a different word set, stem and frame |  |
| SK-GUM3-6-C10 | 2 | core | dropdown | 2 | none | twin SK-GUM3-6-S10 uses a different word set, stem and frame |  |
| SK-GUM3-6-C11 | 3 | core | hottext | 2 | p3 (draft edit) | twin SK-GUM3-6-S11 uses a different word set, stem and frame |  |
| SK-GUM3-6-C12 | 3 | core | mc | 2 | none | twin SK-GUM3-6-S12 uses a different word set, stem and frame |  |
| SK-GUM3-6-C13 | 3 | core | ms | 3 | none | twin SK-GUM3-6-S13 uses a different word set, stem and frame |  |
| SK-GUM3-6-C14 | 3 | core | dropdown | 2 | none | twin SK-GUM3-6-S14 uses a different word set, stem and frame |  |
| SK-GUM3-6-C15 | 3 | core | mc | 2 | none | twin SK-GUM3-6-S15 uses a different word set, stem and frame |  |
| SK-GUM3-6-S01 | twin | similar | hottext | 2 | none | like SK-GUM3-6-P4 | |
| SK-GUM3-6-S02 | twin | similar | dropdown | 2 | none | like SK-GUM3-6-P5 | |
| SK-GUM3-6-S03 | twin | similar | dropdown | 2 | p4 | like SK-GUM3-6-C03 | |
| SK-GUM3-6-S04 | twin | similar | mc | 2 | p4 | like SK-GUM3-6-C04 | |
| SK-GUM3-6-S05 | twin | similar | ebsr | 3 | p4 | like SK-GUM3-6-C05 | |
| SK-GUM3-6-S06 | twin | similar | hottext | 2 | p5 | like SK-GUM3-6-C06 | |
| SK-GUM3-6-S07 | twin | similar | ms | 2 | none | like SK-GUM3-6-C07 | |
| SK-GUM3-6-S08 | twin | similar | match | 2 | none | like SK-GUM3-6-C08 | |
| SK-GUM3-6-S09 | twin | similar | mc | 3 | none | like SK-GUM3-6-C09 | |
| SK-GUM3-6-S10 | twin | similar | dropdown | 2 | none | like SK-GUM3-6-C10 | |
| SK-GUM3-6-S11 | twin | similar | hottext | 2 | p6 | like SK-GUM3-6-C11 | |
| SK-GUM3-6-S12 | twin | similar | mc | 2 | none | like SK-GUM3-6-C12 | |
| SK-GUM3-6-S13 | twin | similar | ms | 3 | none | like SK-GUM3-6-C13 | |
| SK-GUM3-6-S14 | twin | similar | dropdown | 2 | none | like SK-GUM3-6-C14 | |
| SK-GUM3-6-S15 | twin | similar | mc | 2 | none | like SK-GUM3-6-C15 | |

### Lesson 7: 3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi
Passages: p1 "Mini Golf with Dad"; p2 "Our Clubhouse"; p3 "The Climbing Wall"; p4 "Zipline Day"; p5 "Hayride Night"; p6 "Corn Maze Visit"

| Id | Set | Comp | Type | DOK | Passage | Differs from its twin / notes | Live choices after hints |
|---|---|---|---|---|---|---|---|
| SK-GUM3-7-P2 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-7-P4 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-7-C03 | 1 | core | dropdown | 2 | p1 (draft edit) | twin SK-GUM3-7-S03 uses a different word set, stem and frame |  |
| SK-GUM3-7-C04 | 1 | core | mc | 2 | p1 (draft edit) | twin SK-GUM3-7-S04 uses a different word set, stem and frame |  |
| SK-GUM3-7-C05 | 1 | core | ebsr | 3 | p1 (draft edit) | twin SK-GUM3-7-S05 uses a different word set, stem and frame |  |
| SK-GUM3-7-C06 | 2 | core | hottext | 2 | p2 (draft edit) | twin SK-GUM3-7-S06 uses a different word set, stem and frame |  |
| SK-GUM3-7-C07 | 2 | core | mc | 2 | none | twin SK-GUM3-7-S07 uses a different word set, stem and frame |  |
| SK-GUM3-7-C08 | 2 | core | match | 2 | none | twin SK-GUM3-7-S08 uses a different word set, stem and frame |  |
| SK-GUM3-7-C09 | 2 | core | mc | 3 | none | twin SK-GUM3-7-S09 uses a different word set, stem and frame |  |
| SK-GUM3-7-C10 | 2 | core | dropdown | 2 | p2 (draft edit) | twin SK-GUM3-7-S10 uses a different word set, stem and frame |  |
| SK-GUM3-7-C11 | 3 | core | hottext | 2 | p3 (draft edit) | twin SK-GUM3-7-S11 uses a different word set, stem and frame |  |
| SK-GUM3-7-C12 | 3 | core | mc | 2 | none | twin SK-GUM3-7-S12 uses a different word set, stem and frame |  |
| SK-GUM3-7-C13 | 3 | core | ms | 3 | none | twin SK-GUM3-7-S13 uses a different word set, stem and frame |  |
| SK-GUM3-7-C14 | 3 | core | dropdown | 2 | none | twin SK-GUM3-7-S14 uses a different word set, stem and frame |  |
| SK-GUM3-7-C15 | 3 | core | mc | 2 | none | twin SK-GUM3-7-S15 uses a different word set, stem and frame |  |
| SK-GUM3-7-S01 | twin | similar | hottext | 2 | none | like SK-GUM3-7-P2 | |
| SK-GUM3-7-S02 | twin | similar | ms | 2 | none | like SK-GUM3-7-P4 | |
| SK-GUM3-7-S03 | twin | similar | dropdown | 2 | p4 | like SK-GUM3-7-C03 | |
| SK-GUM3-7-S04 | twin | similar | mc | 2 | p4 | like SK-GUM3-7-C04 | |
| SK-GUM3-7-S05 | twin | similar | ebsr | 3 | p4 | like SK-GUM3-7-C05 | |
| SK-GUM3-7-S06 | twin | similar | hottext | 2 | p5 | like SK-GUM3-7-C06 | |
| SK-GUM3-7-S07 | twin | similar | mc | 2 | none | like SK-GUM3-7-C07 | |
| SK-GUM3-7-S08 | twin | similar | match | 2 | none | like SK-GUM3-7-C08 | |
| SK-GUM3-7-S09 | twin | similar | mc | 3 | none | like SK-GUM3-7-C09 | |
| SK-GUM3-7-S10 | twin | similar | dropdown | 2 | p5 | like SK-GUM3-7-C10 | |
| SK-GUM3-7-S11 | twin | similar | hottext | 2 | p6 | like SK-GUM3-7-C11 | |
| SK-GUM3-7-S12 | twin | similar | mc | 2 | none | like SK-GUM3-7-C12 | |
| SK-GUM3-7-S13 | twin | similar | ms | 3 | none | like SK-GUM3-7-C13 | |
| SK-GUM3-7-S14 | twin | similar | dropdown | 2 | none | like SK-GUM3-7-C14 | |
| SK-GUM3-7-S15 | twin | similar | mc | 2 | none | like SK-GUM3-7-C15 | |

### Lesson 8: 3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks
Passages: p1 "Packing a Suitcase"; p2 "Basement Clean-Up"; p3 "Train Museum Trip"; p4 "Campsite Chores"; p5 "Grocery Store Helper"; p6 "Pond Cleanup Day"

| Id | Set | Comp | Type | DOK | Passage | Differs from its twin / notes | Live choices after hints |
|---|---|---|---|---|---|---|---|
| SK-GUM3-8-P3 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-8-P4 | 1 | core ref | (original practice) | | | reused as a core item | |
| SK-GUM3-8-C03 | 1 | core | dropdown | 2 | p1 (draft edit) | twin SK-GUM3-8-S03 uses a different word set, stem and frame |  |
| SK-GUM3-8-C04 | 1 | core | mc | 2 | p1 (draft edit) | twin SK-GUM3-8-S04 uses a different word set, stem and frame |  |
| SK-GUM3-8-C05 | 1 | core | ebsr | 2 | p1 (draft edit) | twin SK-GUM3-8-S05 uses a different word set, stem and frame |  |
| SK-GUM3-8-C06 | 2 | core | hottext | 2 | p2 (draft edit) | twin SK-GUM3-8-S06 uses a different word set, stem and frame |  |
| SK-GUM3-8-C07 | 2 | core | ms | 2 | none | twin SK-GUM3-8-S07 uses a different word set, stem and frame |  |
| SK-GUM3-8-C08 | 2 | core | mc | 1 | none | twin SK-GUM3-8-S08 uses a different word set, stem and frame |  |
| SK-GUM3-8-C09 | 2 | core | mc | 3 | none | twin SK-GUM3-8-S09 uses a different word set, stem and frame |  |
| SK-GUM3-8-C10 | 2 | core | dropdown | 2 | none | twin SK-GUM3-8-S10 uses a different word set, stem and frame |  |
| SK-GUM3-8-C11 | 3 | core | hottext | 2 | p3 (draft edit) | twin SK-GUM3-8-S11 uses a different word set, stem and frame |  |
| SK-GUM3-8-C12 | 3 | core | mc | 2 | p3 (draft edit) | twin SK-GUM3-8-S12 uses a different word set, stem and frame |  |
| SK-GUM3-8-C13 | 3 | core | ms | 3 | none | twin SK-GUM3-8-S13 uses a different word set, stem and frame |  |
| SK-GUM3-8-C14 | 3 | core | match | 2 | none | twin SK-GUM3-8-S14 uses a different word set, stem and frame |  |
| SK-GUM3-8-C15 | 3 | core | dropdown | 1 | none | twin SK-GUM3-8-S15 uses a different word set, stem and frame |  |
| SK-GUM3-8-S01 | twin | similar | match | 2 | none | like SK-GUM3-8-P3 | |
| SK-GUM3-8-S02 | twin | similar | ms | 2 | none | like SK-GUM3-8-P4 | |
| SK-GUM3-8-S03 | twin | similar | dropdown | 2 | p4 | like SK-GUM3-8-C03 | |
| SK-GUM3-8-S04 | twin | similar | mc | 2 | p4 | like SK-GUM3-8-C04 | |
| SK-GUM3-8-S05 | twin | similar | ebsr | 2 | p4 | like SK-GUM3-8-C05 | |
| SK-GUM3-8-S06 | twin | similar | hottext | 2 | p5 | like SK-GUM3-8-C06 | |
| SK-GUM3-8-S07 | twin | similar | ms | 2 | none | like SK-GUM3-8-C07 | |
| SK-GUM3-8-S08 | twin | similar | mc | 1 | none | like SK-GUM3-8-C08 | |
| SK-GUM3-8-S09 | twin | similar | mc | 3 | none | like SK-GUM3-8-C09 | |
| SK-GUM3-8-S10 | twin | similar | dropdown | 2 | none | like SK-GUM3-8-C10 | |
| SK-GUM3-8-S11 | twin | similar | hottext | 2 | p6 | like SK-GUM3-8-C11 | |
| SK-GUM3-8-S12 | twin | similar | mc | 2 | p6 | like SK-GUM3-8-C12 | |
| SK-GUM3-8-S13 | twin | similar | ms | 3 | none | like SK-GUM3-8-C13 | |
| SK-GUM3-8-S14 | twin | similar | match | 2 | none | like SK-GUM3-8-C14 | |
| SK-GUM3-8-S15 | twin | similar | dropdown | 1 | none | like SK-GUM3-8-C15 | |

## Items to skeptically re-solve first
- L8 C09 and S09 (DOK 3 two-student split: ck vs th). Confirm the stated split is the only correct reading.
- L8 C11/S11 and C06/S06 hottext (two wrong splits among five): confirm no third sentence reads as wrong. Check that the extra split words in the same sentence (L8 p6 sentence 4: cat- | tails and bot- | tle) are both correct.
- L8 C13/S13 (ms, two reasons): confirm "nt" and "ck/th" statements are not disputable. Dentist/lantern: reason "n and t are different consonants" is the only rule-based reason.
- L8 C12/S12: the draft's own split appears as a distractor; confirm only one revision is correct.
- L7 C04, C09, C14 (comma-splice repairs): confirm only one repair is correct and that no option is also acceptable.
- L6 C03, C12, C13 (myself vs I/me; by myself): confirm the standard-usage reading.
- L5 collective-noun agreement items: the prompts say "acts together as one" to avoid British agreement; confirm.
- L4 p1 s7 and p3 s5 (only "or" fits; "so" removed from options): confirm no second conjunction works.
- L2 ambiguous plurals (loaf/loaves, hoof/hooves, etc.) and L3 irregular verbs with two accepted past forms (for example sprang/sprung, dove/dived, lit/lighted): confirm each key is the only accepted form among the choices.
- L1 C10 (pre-existing; its mc key is not named in why) still passes the gate but should be double-checked.

## Deliberate reuse and repeated words
- Closed-class irregular plurals and irregular past forms repeat across the lesson and the older check items (men, feet, children, mice, ran, saw, took, and so on), because the lists are small and fixed.
- "won't", "its/it's" and standard contractions repeat the first lessons' lists.
- L8 hyphen words: basket, popcorn, carpet, doctor, picnic, ladder, silver, napkin, butterfly, helmet, kitten, pillow, cactus (existing practice or test) were not reused as core keys; pillow and ladder appear inside draft sentences as distractors and fixes; hammer/candy/marble appear only in existing test items.
- Passage topics were scanned with `topic.sh` across js/data; common topics (farm, bake, ocean, market) were avoided; shared words such as camp, store and museum appear in a few other files and are logged here.

## Not addressed / known weaker spots
- Remaining low-severity warnings: a few hints share a word only with the key (L8 C13/S13 hint 2 "between, vowels"; S09 hint 1/2 "together/sound"), L8 h1 long vs h3 on C07/C13; key-length ratio 1.04 to 1.08 on L5 C05B/S05B, L6 S05B, L7 C05B. None are check failures.
- L2 passages p2, p3, p5, p6 were lengthened to 100 words or more; an earlier short-passage warning may still show for older passages in other lessons.
- The L8 draft splits follow dictionary syllable breaks for the words chosen (VCCV, double consonant, compound, digraph). Words with ambiguous splits (robot, lemon, river, prefix/suffix cases) were avoided. Dictionary-checking every split word is still recommended: L8 words used as keys or in drafts include suitcase, blanket, jacket, ribbon, toothbrush, pillow, window, flashlight, cardboard, ladder, rubber, lunch, conductor, boxcar, cushions, ticket, windmill, postcard, backpack, kettle, bonfire, pebble, stream, hammock, counter, carrots, pepper, pumpkin, floor, turtles, cattails, bottle, minnow, raincoat, sunlight, feathers.
- Hint-2 rule: hint 2 never points to the one paragraph that holds the key; a reviewer should still spot-check the passage-based items in every lesson.
- Live-choice counts in the table (`Live choices`) were hand-counted in the specs and are approximate; recount after the hints.

## Continuation ledger
| Lesson | Status |
|---|---|
| 3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos | AUTHORED (B6), NOT ACCEPTED: awaiting independent review |
| 3.L.GC.1:M:form-and-use-irregular-plural-nouns | AUTHORED (B6), NOT ACCEPTED: awaiting independent review |
| 3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs | AUTHORED (B6), NOT ACCEPTED: awaiting independent review |
| 3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra | AUTHORED (B6), NOT ACCEPTED: awaiting independent review |
| 3.L.GC.1:M:use-collective-and-abstract-nouns | AUTHORED (B6), NOT ACCEPTED: awaiting independent review |
| 3.L.GC.1:M:use-reflexive-pronouns | AUTHORED (B6), NOT ACCEPTED: awaiting independent review |
| 3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi | AUTHORED (B6), NOT ACCEPTED: awaiting independent review |
| 3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks | AUTHORED (B6), NOT ACCEPTED: awaiting independent review |

All eight lessons were started and finished. Nothing is left half-done. Outstanding for others: independent blind re-solve (at least two reviewers), a cold dictionary check of the L8 split words, a web re-check of the comma-splice and irregular-form rules, and the unrelated 3.F.P.4.a failure.

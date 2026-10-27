# B5 b5a author log: 3.L.GC.2.a to 2.d (sentence lessons)

Author: content author session, 2026-10-23. Status: AUTHORED (B5 b5a), NEEDS INDEPENDENT REVIEW. Not accepted. Not added to js/data/accepted.js. No commit or push.

## What was built
- File: js/data/lessons/L-GC2.js (already in js/data/manifest.js, registered with PP.addLesson). All four lessons existed with 3 Try items each, so none were missing; each now has the full expansion. Blocks are marked `B5-b5a:passages` and `B5-b5a:core` (start/end).
- Per lesson: 15 core items in 3 sets of 5 (3 reused through `{ref}`, 12 new, C04 to C15), hints h1 to h3 and a stepped `how` on every item, similar bank S01 to S15 (each core item has its own twin via `like`), addons for the Together items.
- Refs: 2.a P7, P9, P8. 2.b P4, P5, P6. 2.c P5, P6, P7. 2.d P1, P3, P6. Together items: 2.a P1 to P4, 2.b P1 to P3, 2.c P1 to P4, 2.d P2, P4, P5.
- Accepted-lesson core items were not edited. Edits to existing 3.L.GC.2 material: 2.a teach points 1 and 4 (implied-you line, matrix note); 2.d practice P4 rewritten (key now "We hurried to the sandy beach and splashed happily in the cool waves." with comparable-length distractors; addon in the core block). Pristine copy kept in the author scratchpad (b5a/L-GC2.orig.js).
- New passages (no real child data; Black children by default; counts under ten as words): 2.a time capsule, ant farm, dollhouse, unicycle, model train; 2.b rock collection, class terrarium (present tense), washing the truck; 2.c backyard hammock, obstacle course, book sale, snow cone day, tug-of-war, pet wash day; 2.d snow globe, new bike, birdhouse, farm goat, bird bath, go-kart day. Topics were scanned against all js/data (grep plus 5-gram scan); collisions were re-skinned until zero hits.

## Gate results (final run)
- `node verification/check-content.js --all`: PASS (0 failures, 10 warnings, none in GC2 lessons).
- `check-writing.js`: 0 failures, 0 warnings. `check-instructional-copy.js`: 28 assertions passed.
- Readability: all GC2 passages FK <= 4.5 (readability.py).
- Similarity (raw-token Jaccard, lowercase /[a-z']+/g, prompt+stem+text+choices+options+slot options+rows): worst pair per lesson, word-set and multiset both <= 0.21: 2.a 0.197, 2.b 0.197, 2.c 0.202, 2.d 0.200. No pair shares more than one exact option.
- (Superseded by the first-review pass below: sim.js counts match cols and ebsr parts.) Earlier caveat: my script did not count match `cols`. 2.b S13 columns were chosen as "and, after, if, but" against core C13 columns "because, but, or, so", so only "but" is shared. Reviewer should check the same for every match pair (2.a S-twin of C11, 2.c S-twin of C09, 2.d S-twin of C09).

## Live choices after hints (hand count)
Every h3 removes at most one choice, row or blank. Typical live count after h3: mc 3 of 4; ms 4 of 5 (C04, C05, C07, C08, C12, C14, C15 across lessons); hottext 4 of 5 or 3 of 4; match: one row settled, rest open; dropdown: one blank settled, the other open (2.a C15, 2.c C13, 2.d C13, 2.d C06 has a single slot with 2 live words). Tightest cases, where a reviewer should confirm at least 2 stay live: 2.c C10 (h3 points to the first clause, leaving crosses vs cross), 2.d C12 and 2.d C07 (h3 removes one adverb, wording "the other two" should be read as pointing, not eliminating), 2.b C06 Part A.

## Skeptical re-solve requests (most want checked)
1. 2.a C10 (compare sentence 3 and 8), C13 (ms with two fixes), C14 (who is right, Kofi vs Zuri).
2. 2.b C06 and C15 (ebsr tense clues), C07 (two correct combinations, one changes order of events), C14 (ms paragraph changes), C09 (Nia terrarium present tense; the intentional slip is "sketched" in sentence 8, confirm it is the only mismatch).
3. 2.c C10 (both clauses must agree), C11 (box sentence with intervening word), C15 (hottext, two errors in subordinate-clause sentences), C05 (bag of marbles/dogs behind the fence).
4. 2.d C07 and C12 (adverb choices: "fits the story" is judgement, confirm one defensible key), C08 and C15 (two keys among plausible detail revisions; confirm the "exact detail" distinction is not subjective), C06 dropdown, rewritten practice P4.
5. Key-length: keylen.js shows the key is not the longest in a systematic way, but 2.a C10 and 2.c C07 keys are among the longest; reviewer to judge.

## Facts verified (web)
- Common Core L.3.1.i "Produce simple, compound, and complex sentences"; L.3.1.f "Ensure subject-verb and pronoun-antecedent agreement"; L.3.1.a function of adjectives and adverbs: https://www.thecorestandards.org/ELA-Literacy/L/3/
- Georgia standards (3.L.GC.2 wording): https://www.georgiastandards.org/Georgia-Standards/Documents/Big-Book-Standards-ELA-and-Literacy-Standards.pdf and https://sites.muscogee.k12.ga.us/k12curriculum/wp-content/uploads/sites/5/2014/09/3rd-Grade-Language-Standards-Checklist.pdf (search results; matrix already cites the 2023 Georgia K-12 ELA document p. 19).
- Subject joined by "and" takes a plural verb; a phrase between subject and verb does not change agreement: https://owl.purdue.edu/owl/general_writing/grammar/subject_verb_agreement.html (fetched and confirmed).
- Simple/compound/complex definitions, fragments and run-ons follow the lesson's own taught definitions; additional agreement sources found in search: https://www.niu.edu/writingtutorial/grammar/subject-verb-agreement.shtml. "You were" (singular and plural you take were) was taken from standard usage, search hits only, not individually fetched.

## Admin
- Matrix rows 3.L.GC.2.a to d in 02-coverage-matrix.csv: final column now "AUTHORED (B5 b5a), NEEDS INDEPENDENT REVIEW".
- STATUS.md: four "B5 b5a" rows, "NOT ACCEPTED: awaiting independent review".

## Continuation ledger
Nothing outstanding for b5a: all four lessons (2.a, 2.b, 2.c, 2.d) are fully authored. Remaining for these lessons: two independent blind reviews, then acceptance.


## First-review fixes (response to B5-b5a-review.md, 2026-10-27)
Edits were made in js/data/lessons/L-GC2.js only (accepted lessons untouched). Gates after the fixes: check-content --all PASS (0 failures; the only GC2 warnings are the version-hash note for 3.L.GC.2.b form B, caused by the TB5 wording edit, and nothing else), check-writing 0 failures, check-instructional-copy 28 passed, passage FK 0.7 to 3.8. Similarity (word-set and multiset, match cols and ebsr parts included): worst pair 2.a 0.197, 2.b 0.197, 2.c 0.200, 2.d 0.200; no shared exact option beyond one. A stale-text grep (kayak, paddle, birdhouse, smudge, sky, cloud, ice melted, stacked, buckets, old fish/lights wording) finds no leftovers in the changed items. 5-gram scan against all other js/data: no hits on the new topics (cake decorating, boat ride, soup, concert/thunder).

### MUSTs fixed
- 2.a: C08 why now says "grabbed the boxes together"; S02 why rewritten from its own sentences.
- 2.b: P4 addon H3 now "Three of the five sentences mix..."; C09 why now names "sketched / sketches"; p5 retitled "Our Class Terrarium"; S13 rebuilt (columns and, before, if, but; rows: "We washed the car, ____ we also vacuumed it", "The bell always rings ____ class starts", ice cream/if, "Ana is small, ____ she is the fastest runner on our team"; "after" removed from columns; prompt keeps "best").
- 2.c: S12 H2 rewritten (no "fan" line); S14 H2 no longer hands over "and".
- 2.d: C06 H3 eliminates only "sandy", count fixed; S08 H3 and P5 addon H3 eliminate one word only; S10 H1 has no key word; S11 rebuilt on p5 sentence 3 (leafy green bush / red feeder), distinct from S08; S02 row NEARBY replaced with "The rabbit hopped QUICKLY."; S14 H1 to H3 no longer quote "neat rows"; p3 changed from the birdhouse to "Decorating a Cake" (frosting, yellow into white, piped grass, blue frosting river) with C12 and C14 rewritten to match; concept grep over all js/data finds no duplicate.

### SHOULDs taken
a3 (C05/S05 H2), a4 (C13/S13 H2), a5 (C15/S15 H1 and H3), a6 (S11 content words), a7 and C14 (new "The soup cooled after Dad turned off the stove" sentence), a8 (C10 distractors lengthened, key ratio now 1.12). b5 (C11 new sentence, new distractor), b6 (S04 new boat-ride scenario), b7 (S08 H2), b8 (S05 now tests "or", S15 now tests "because", matching their cores), b9 (C14/S14 H2), b10 (TB5 gets a present-tense anchor "and I wave to them from the porch"). c3 (P1 H3), c4 (C12 H2), c5 (S07 reworked as a reason item), c6 (C14 Part B key shortened, ratio down), c7 (S09 rebuilt with was/were and new rows), c11 (C11 DOK 3 to 2). Within-lesson overlap: 2.c P1 rebuilt ("The boy with the red kites ___ my cousin", options is/are/am) so it no longer overlaps form A T2. c15 (S12 distractor now "In line 3, change are to is."). d9 (C04 how: shape and size), d10 (C08 distractor D no longer keeps "nice"; H3 count fixed), d11 (C12 H3 count), d12 (C15/S15 H3), d13 (C14 Part B distractors changed), d14 (C07 sentence 3 now adds "so my knees shook", so "proudly" is no longer defensible), d17 not changed (DOK left).
Not taken: a10 (Watch Me line), c13 (dropdown frames), and NOTE items.

### Changed items for the second blind review
2.a: C05, S05, C08, C10, C13, S13, C14, C15, S15, S02, S11.
2.b: p5 (title), P4 (addon), C09, C11, C14, S04, S05, S08, S13, S14, S15, TB5 (form B).
2.c: P1 (item and addon), C11 (DOK only), C12, C14 (Part B), S07, S09, S12, S14.
2.d: p2 (sentence 3), p3 (whole passage, new topic), C04, C06, C07, C08, C12, C14, C15, S02, S08, S10, S11, S14, S15, P5 (addon).

### Items most worth a skeptical re-solve
2.b S13 (match: confirm each row has exactly one best word among and/before/if/but), 2.b S05 and S15 (new relations), 2.c S07 (new reason format), 2.d C07 (new sentence 3), 2.d C14 and C12 (new cake passage), 2.d S02 (QUICKLY row), 2.a C14 (new stem).

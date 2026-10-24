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
- Caveat: my script does not count match `cols`. 2.b S13 columns were chosen as "and, after, if, but" against core C13 columns "because, but, or, so", so only "but" is shared. Reviewer should check the same for every match pair (2.a S-twin of C11, 2.c S-twin of C09, 2.d S-twin of C09).

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

# B5 b5b author log (vocabulary, first half)

Author: content author b5b. Branch content/standards-practice. Files: js/data/lessons/L-V12.js (all blocks marked `B5-b5b`). Nothing added to accepted.js. STATUS.md and the coverage matrix rows say NOT ACCEPTED / NEEDS INDEPENDENT REVIEW. No git commit or push.

## Which lessons qualified, which were built

None of 3.L.V.1.a to 3.L.V.3.e had a `core` or an accepted/built full lesson, so none is ACCEPTED and none was skipped. Order followed: 1.a, 1.b, 2.a, 2.b, 2.c, 3.a, 3.b (first seven).

| Lesson | State |
|---|---|
| 3.L.V.1.a | BUILT (core 15, similar 15, addons) |
| 3.L.V.1.b | BUILT |
| 3.L.V.2.a | BUILT |
| 3.L.V.2.b | BUILT |
| 3.L.V.2.c | NOT STARTED (design notes below) |
| 3.L.V.3.a | NOT STARTED (needs new SVG figures) |
| 3.L.V.3.b | NOT STARTED |

## Gate results (end of session)

- `node verification/check-content.js --all`: PASS (0 failures, 29 warnings). Warnings on my lessons are: short passages (63 to 99 words, informational only), and "hint/clue shares a word only with the key" notes on a few items (1.a C06 and S03/S09, 2.a S14, 2.b C09).
- `check-writing.js`: 0 failures. `check-instructional-copy.js`: 28 assertions passed.
- `readability.py`: every new passage FK 1.7 to 4.0 (limit 4.5).
- Similarity (my own measure: lowercase words over prompt, stem, text, choices, options, slot options, rows, cols, steps, ebsr part prompts and choices, hottext target sentences; word-set AND multiset Jaccard; shared exact options). Every core item has its own twin via `like`, all at or under 0.21 by both measures, 0 or 1 shared exact option. Worst per lesson (word-set): 1.a 0.207, 1.b 0.207, 2.a 0.198, 2.b 0.200. The ebsr pairs sit near the limit because the standard directions sentence counts as shared words.
- Key not systematically longest (unique-longest share): 1.a 22%, 1.b 6%, 2.a 20%, 2.b 12%; no group with a margin of three or more words.
- Formats and DOK (core 15 each):
  - 1.a: mc 6, ebsr 2, hottext 2, dropdown 3, ms 1, match 1; DOK2 x11, DOK3 x4.
  - 1.b: mc 6, dropdown 4, hottext 2, ms 2, match 1; DOK2 x11, DOK3 x4.
  - 2.a: mc 5, ebsr 2, dropdown 2, hottext 1, ms 4, match 1; DOK2 x10, DOK3 x5.
  - 2.b: mc 4, dropdown 2, hottext 3, ms 2, match 2, ebsr 2; DOK2 x11, DOK3 x4.
  - No DOK1 in any core. Texts: at least three passages feed core or twins in each lesson. Domains: literary, science, social studies, math, music/arts, everyday school life.
- Live choices after the hints: I checked the ladders by hand for 2.a and 2.b while writing (hint 3 removes at most one blank, row or two wrong options and leaves two or more live). For 1.a and 1.b I designed the ladders the same way but did not re-count every twin; a reviewer should count them (see list).

## Structure notes

- Together = practice minus the refs, 2 to 5 items in each lesson (1.a: P1-P3; 1.b: P1-P3; 2.a: P1, P2, P6; 2.b: P1, P3). Refs and Together items have hints, how and misconception through `addons`.
- Refs used: 1.a P4, P5; 1.b P4, P5; 2.a P4, P5, P7; 2.b P2, P4, P5. Accepted-lesson core items untouched.
- Teach edits (modelling added because the fifteen test it): 1.a (phrases, clue before the word; examples now a word and a phrase), 1.b (fifth point on fitting words to the reader, second example), 2.a (third example: a word with a prefix and a suffix). Max five points, max three Watch Me kept.
- New passages: 1.a p3-p5, 1.b p3-p6, 2.a p4-p6, 2.b p3-p5. Test and testB passages (1.a p2, 1.b p2, 2.a p2/p3, 2.b p2) are not used by core or twins.
- 2.b closes the matrix gap "false suffixes not practised or assessed" (C11, C12, C13, C14 and twins). 1.b closes the "general academic words not taught" gap.

## Items I most want skeptically re-solved

1. 3.L.V.2.b C14 (and S14): "neighbor" shown as an -or word with no action base word. Check it is not arguable that neighbor names a person from a base "neighb". Check the claim wording is fair.
2. 3.L.V.2.b C11 / S11 (finger, number; ladder, winter): confirm no reader could argue "numb" or "wint" is a base word.
3. 3.L.V.2.a C08 / S08: strategy item (unhelpful, disrespectful). Check exactly one explanation is correct and that "not full of help" is accepted by a child as the meaning.
4. 3.L.V.2.a C10 / S10: "prefix AND suffix" words (unevenly, unkindly; unwisely, unbendable). Check carelessly, hopelessly count as distractors only (two suffixes, no prefix).
5. 3.L.V.2.a C13 (abrupt), C14 (biography, Part B names the sentence that holds the word), C15 / S15 (graph and aud look-alikes: paragraph, photograph vs grape, grain, gravel; audio, auditorium vs autumn, author, award).
6. 3.L.V.2.a C02 hint 2 and hints on word-in-context items generally: hint 2 names the area of the story where wrong choices also come from, but the key sentence is nearby. Check hint 2 does not give the key away.
7. 3.L.V.1.b C05 (describe/explain/compare dropdown) and S05: confirm the three academic verbs are not interchangeable in context. C04 (crops covers more than two) as a DOK3 mc.
8. 3.L.V.1.b C10 / S10 (two rewrites that keep meaning) and C15 (talk vs report: which two lines to cut).
9. 3.L.V.1.a C04 (gives off, campfire stem), C08 (patient, ms), S09 (hint shares "before" with the key).
10. All ebsr items: check Part B is not answerable from Part A wording alone.
11. Twin quality: each twin must be solvable on its own and measure the same skill without sharing a key fact with its core item.

## Web verification (word meanings and facts)

- Georgia gold rush: gold first found near Dahlonega in 1828-29, so passage text says "in the late 1820s". https://www.georgiaencyclopedia.org/articles/history-archaeology/gold-rush/m-9801 (also https://en.wikipedia.org/wiki/Georgia_Gold_Rush)
- abrupt = ab- (off, away) + rumpere (break): https://www.etymonline.com/word/abrupt
- xylophone = xylon (wood) + phone (sound): https://www.etymonline.com/word/xylophone
- biography = bios (life) + graphein (write): https://etymologist.ai/word/biography (and the search hit for dictionary.com xylo-)
- dictate: Latin dicere, to say; first sense "say aloud for someone to write down": https://www.etymonline.com/word/dictate
- auditorium from audire, to hear: https://www.etymonline.com/word/auditorium
- aqua (water): Latin aquaticus from aqua, water: https://www.etymonline.com/word/aquatic . therm (heat): Greek thermē, heat: https://www.etymonline.com/word/therm . (Confirmed in the second pass; the earlier note asking a reviewer to confirm is closed.) Original wording follows: A reviewer should confirm with any school dictionary.
- Other word meanings used (decomposers, erosion, perimeter, diameter, friction, residents, participate, etc.) are standard grade-level definitions; not individually fetched.

## Continuation ledger (not done)

1. 3.L.V.2.c (construction lesson, no passages yet). Design ready: refs P3 (match), P6 (mc, e- + rupt), P7 (dropdown); Together = P2, P4, P5. New passages: p1 "Cleaning the Shed" (restack, miscounted, busily), p2 "Bean Plant Notes" (mislabeled, discolored), p3 "A Day at the Harbor" (periscope = peri- around + scope). Planned new items: restack mc, miscounted/busily dropdown, mislabeled hottext, y-to-i spelling ms (sleepiness, heavily) and a spelling-rule explanation mc, discolored ebsr, rethink/mistreat/wishful/restful match, graceful mc, "two correct uses of built words" ms (pretest, restacked vs misuses), tri-/bi- dropdown (triangle, bisect), "unreadable" parts mc. Twins planned: reprint, mismeasured/heavily, rewritten, tininess/noisily, geology, kilometer, tract (tractor, attract), repacked, precut/retook, semi-/mono-, cheerful, unbeatable. Avoid words already used in 2.a and 2.b (listed in the lesson files).
2. 3.L.V.3.a (needs figures: images and graphs; viewBox width 320, font size 21 or more, alt text five words or more).
3. 3.L.V.3.b (homophones, homographs, synonyms, antonyms).
4. Matrix rows for 2.c, 3.a, 3.b stay "Expansion: NOT STARTED". No STATUS rows for them.
5. Independent blind review of all four built lessons (two reviewers, blind solving, live-choice counts).

## Matrix and STATUS changes made

- docs/expansion-2026-10-22/02-coverage-matrix.csv: last column of 3.L.V.1.a, 1.b, 2.a, 2.b now "AUTHORED (B5 b5b), NEEDS INDEPENDENT REVIEW; B5-b5b-author-log.md; js/data/lessons/L-V12.js. ...". The older "required changes" cells were not edited.
- batches/STATUS.md: four rows "B5 b5b | <code> | NOT ACCEPTED: awaiting independent review".

## Second pass (after first review, CHANGES REQUIRED)

Gates after the second pass: check-content --all PASS (0 failures); check-writing 0 failures; check-instructional-copy 28 passed; readability all passages FK <= 4.5 (highest 4.0). Passage numbering re-checked on every passage of the four lessons (1.b numbered passages run 1..n with no gaps; the rest are unnumbered). Twin similarity (word-set and multiset, including match columns, ebsr parts and hottext targets): worst twin 1.a 0.205, 1.b 0.207, 2.a 0.198, 2.b 0.200. Longest-key (reviewer metric, lk2.js, single-key mc and ebsr parts across core, practice, similar, test): 1.a 17-18%, 1.b 29%, 2.a 21%, 2.b 24% (chance is about 29%).

### Changed items for the second blind review

- 1.a C10 (Part B key now "Traders gave cloth, pots and even guns for them."; passage p3 paragraph 4 changed to match; the false one-skin-one-blanket claim is gone), 1.a S09 (hints 1-2), 1.a S10 (rebuilt around "Few people ever found one."; Part B distractor is a verbatim passage sentence), 1.a S08 hint 2, 1.a P4 (addon hints 1-2), 1.a distractor lengths in C06, C09, C11, S03A, S04, S11.
- 1.b C05 (dropdown rebuilt: describe is cued by "shape and color", explain by "why bees help"; third options differ per blank; Teach now defines describe and explain), 1.b C15 and S15 (now 2 points; passage p4 rewritten and renumbered 1-10 with a talk-only line in the middle; hint 2 asks whether a report reader would need each sentence and no longer names the keys), 1.b C09 and S09 (fourth column added; hint 2 states the question to ask instead of listing the three answers), 1.b p5 sentence 4 ("the water near the coast").
- 2.a C09 and S09 (ms rebuilt; distractors family, ugly, city and puppy, angry, candy leave no real word), 2.a C10 and S10 (hint 3 now "One of the words has two endings and no prefix"; C10 unevenly changed to unfairly), 2.a C13, S06, S11, S13, P6 (hint 2 points to the sentence, no answer-bearing question), 2.a C13 distractors lengthened, 2.a T4 and TB4 (match frames changed to a one-answer mc; no longer P4 re-skins).
- 2.b C11 (river replaces number), 2.b C14 and S14 (visitor, actor added to passage p4 and to the choices so neighbor is not the only -or choice; S14 adds painter), 2.b C08 and S08 (three suffixed nouns in each blank; blanks asked by base word kind and, for C08, paragraph; S08 stem and text rewritten), 2.b C13 (prompt and columns reworded so it no longer repeats P4), 2.b T2 (now picks the sentence that has an -ly word; no longer P2 re-skinned).

### Not done from the SHOULD tables (open for the reviewer to weigh)

2.a: S03 Part B distractor, P1/Teach pre-answer, C12/S12 stronger distractors, TB1/TB3 overlap with L-VOC-02 items, longest-key margins on C03A, S03B, S11, S14B, TB3B, TB5, P7. 2.b: C03, C04, C09 Part B wording, Teach pre-answers (visitor, excitement), P3 firefighter, S09/S15 wording, hot-text option padding, DOK for C09 and C15. 1.b: optional register Watch Me, longest-key pads P1, S06, S13 (figures now at chance). Version record: check-content warns that 2.a (T4, TB4 keys changed) and 2.b (wording) forms differ from the recorded hash; these lessons are not accepted, so --record-versions was not run.

### Still to build

3.L.V.2.c, 3.L.V.3.a, 3.L.V.3.b (see the continuation ledger above; unchanged).

## Third pass (after second review: 1.a and 1.b ACCEPT; 2.a and 2.b CHANGES REQUIRED)

1.a and 1.b were not touched. Changes for the third light review:

- 2.a: P1 addon hint 3 now "Check each choice against the meaning the question gives for -less." (no longer leaves one choice); Teach example 1 changed from hopeless to endless (P1 no longer pre-answered); `testRev: { A: "2", B: "2" }` set in the lesson (T4 and TB4 keys changed; I did not run --record-versions); choose-two sets rebalanced so the two keys are no longer the two longest: C09 (butterfly, assembly, family), S09 (pony, monopoly, strawberry; angry dropped), C15 (grapefruit, grasshopper, gravel), S07 (unicorn, restaurant, mister), P5 (reindeer, mistletoe replace ready, misty; WHY and addon HOW updated); C14, S14 and S13 hint 3 now "Check each choice against both root meanings" or "the meaning of the root"; S14 hint 2 no longer restates the key.
- 2.b: C11 joker replaced by hunter (WHY and HOW now say "Hunt is left"); P5 and S10 hint 3 now "Cover -er in each word. Ask whether the word left is an action or a describing word."; S01 hint 3 now "Decide whether smoothly tells about the pilot, the plane, or the way the plane landed."; C03 prompt "in paragraphs 2 and 3"; C04 prompt "from the passage".
- Not taken (SHOULDs): 2.a TB1/TB3/TB4 word overlap with L-VOC-02 and 2.b C13, 2.a C12/S12 distractors, 2.b C08 paragraph cue, Teach pre-answers (visitor, excitement), 2.b P3 firefighter (passage word), 2.b C09/S09/S15 wording.
- Re-measured: worst twin similarity 2.a 0.198, 2.b 0.200 (word-set and multiset). Longest-key 2.a 21%, 2.b 24%. Passage numbering unchanged (1.b numbered passages only).

## Fourth pass: 3.L.V.2.c, 3.L.V.3.a, 3.L.V.3.b built (supersedes the continuation ledger)

All three are "AUTHORED (B5 b5b), NEEDS INDEPENDENT REVIEW" in the matrix and STATUS (NOT ACCEPTED). Each has 15 core items in 3 sets of 5, a 15-item twin bank (via `like`), and addons (hints, stepped how, misconception) for refs and Together items.

- 3.L.V.2.c (L-V12.js): 12 new core items (C01-C12) plus refs P3, P6, P7; passages p1 Cleaning the Shed, p2 Leaf Watch, p3 Our Cardboard Periscope. Word origins checked on the web: periscope = peri- (around) + skopein (look); geology = geo + -logy; kilo = thousand. Worst twin 0.207; unique-longest key 11%.
- 3.L.V.3.a (L-V3.js): 12 new core items plus refs P3, P6, P7; new passages p4 Weaving Day, p5 Life on the Tundra, p6 A Morning at the River. Seven original SVG figures with alt text (assets/figures: v3a-c-daylight-graph, v3a-c-fox-den, v3a-c-fox-table for core; v3a-s-pumpkin-graph, v3a-s-owl-perch, v3a-s-squirrel-table, v3a-s-palm for twins); each rendered and checked, none shows the answer. Worst twin 0.210; unique-longest key 25% (core+similar), 38% across all items incl. the pre-existing tests.
- 3.L.V.3.b (L-V3.js): 13 new core items (C01-C13) plus refs P4, P5; new passages p3 A Letter from Camp, p4 A Walk to the Pond, p5 Market Day (passages unnumbered). Formats dropdown 3, hottext 2, mc 4, ebsr 2, ms 2, match 2; DOK 2 x13, DOK 3 x2. Worst twin 0.212 by rounding (S12~C10 word-set 0.21), shared options 0. Unique-longest key 11%. Hint 3 audited on all 3.b items: C08, S09 and P1 hint 3 were changed so more than one choice stays live.
- Gates: check-content --all PASS (0 failures; warnings are short passages and version records: run --record-versions); check-writing 0 failures; check-instructional-copy 28 passed; all new passages FK <= 4.4.

## Fifth pass (after third light review and first review: 2.b, 2.c, 3.b ACCEPT; 2.a and 3.a CHANGES REQUIRED)

Gates: check-content --all PASS (0 failures); check-writing 0 failures; check-instructional-copy 28 passed; FK of every 2.c, 3.a and 3.b passage <= 4.4. I did not touch assessment-versions.json or run --record-versions. Twin similarity (word-set and multiset): 2.a 0.198, 2.c 0.207, 3.a 0.210, 3.b 0.212 (all <= 0.21 within rounding). Longest-key (lk3.js: mc, ebsr parts, dropdown slots; choose-two both-longest counted separately): 2.a 27%, 2.c 18%, 3.a 22% (key strictly shortest 11%), 3.b 21%; choose-two with both keys longest: 0 everywhere except 3.b C06 (accepted, untouched).

### Changed items for the light fourth review

- 2.a (MUSTs): C09 butterfly -> story; S07 unicorn -> under; S09 monopoly and strawberry -> history and plenty. HOW and WHY rewritten for all three (the leftover letters are not words). Keys unchanged. Choose-two sets still do not have the two keys as the two longest options.
- 3.a (MUSTs): S04 key now "which means" and "like" (the stem says "I also enjoy landmarks, like the old mill ..."; "like the old mill" is no longer a choice; distractors are "the tall bridge", "a map", "I also"; HOW updated). Longest-key rebalance: C05, C09 (slot moved to position 2), C10, S01, S09, S10 (slot moved to position 2), S11, S14, and practice P3 and P7 distractors lengthened or reworded (keys unchanged).
- 3.a (SHOULDs taken): table titles retitled to "Arctic Fox Meals" (column "How often") and "Squirrel Search Spots" (SVGs, alt text, HOW, WHY and mis updated; both figures re-rendered); C09 and S10 hint 3 now "Put each meaning in the sentence and check it against the table." (three live choices); C04 "row after row" -> "the long threads"; C02, S02 and C06 hint 1 no longer names the clue type; C11 key now "A swift current pulled the raft downstream." (no longer repeats "strong").
- 2.c (accepted; text-only): C02 passage sentence now "Dad counted the paint cans, but he got the number wrong, so he began again." (the key "miscounted" no longer appears in the passage); Teach example "port + able = portable" replaced by "im + port = import (to carry goods in from another country)" (P7's key "portable" is no longer a Teach example). No key changed.
- 3.b (accepted; text-only): passage p3 retitled "Tessa Writes Home" and its night sentence is now "After dinner, we toast apples and tell stories." (no longer a near-copy of T-SS 3.T.SS.2.a); C01 and S01 hints 2 and 3 no longer name what each blank needs, so both blanks keep more than one live choice. No key changed.
- Not taken: 3.a C06 Part B prompt, Learn It/Watch Me additions, other NOTEs; 3.b S04, S15, C08/S09 and Learn It SHOULDs.

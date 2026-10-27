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
- aqua (water) and therm (heat) are standard roots; I could not fetch a page for them in this session (etymonline pages for thermos/aquatic were not on the fetch allowlist). A reviewer should confirm with any school dictionary.
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

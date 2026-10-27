# B9 Foundations: author log

Status: AUTHORED (B9), NEEDS INDEPENDENT REVIEW. NOT ACCEPTED. Not in accepted.js. No git commit. `--record-versions` not run (coordinator).

## What was built
- Core 15 + similar 15 + addons, marked `/* B9:core:start */ ... end` in js/data/lessons:
  - 3.F.P.4.a (F-PF.js): refs P5-P7, Together P1-P4. Formats hot, match, dd, mc, ms, order. DOK 1x2, 2x12, 3x1.
  - 3.F.P.4.b (F-PF.js): refs P5-P7, Together P1-P4. mc 4, dd 4, hot 2, match 2, ms 2, order 1.
  - 3.F.P.4.c (F-PF.js): refs P5-P7, Together P1-P4. dd 4, mc 4, hot 2, match 2, ms 2, order 1.
  - 3.F.H.3.a (F-FH.js): refs P4, P5, Together P1-P3. mc 6, dd 3, hot 2, match 2, ms 1, order 1. DOK 1x2, 2x12, 3x1.
- Six `coreException` sequences (marked `B9:exception`), each with kind, rationale and three tasks (title, how, checklist): 3.F.F.1.a, 3.F.F.1.d (F-PF.js); 3.F.F.1.b, 3.F.F.1.c, 3.F.H.4.a, 3.F.H.4.b (F-FH.js). Existing supporting items stay. None has `core`. All six are already in practice-exceptions.json.
- "New file" interpretation: modules authored in the scratchpad (m9_*.js, mex.js) and injected between markers in the existing lesson files, since a lesson cannot be split across files.

## Justified exceptions (assignment section 7)
Automaticity, oral accuracy, prosody, self-correction while reading, letter formation and spacing are behaviors an adult hears or sees. Fifteen selected-response items would be filler. Each sequence is three dated, adult-run rounds with a checklist.

## Fix pass after review 1 (B9-review.md)
Measured on the final files: `check-content --all` PASS (0 failures), `check-writing` 0 failures, `check-instructional-copy` 28 passed. Keys rechecked with ckms.js after every edit. Worst twin similarity (word-set; multiset is lower or equal): 4.a 0.186, 4.b 0.200, 4.c 0.207, H.3.a 0.208. Single-key unique-longest: 4.a 23%, 4.b 22%, 4.c 28%, H.3.a 6%. Choose-two both-longest: 0 everywhere.

MUSTs fixed:
- 4.a C06 and S14 hint 3 no longer quote the key. S14 rebuilt (key fence, not rice). C09 broom replaced by spoon, how and why updated.
- 4.b C04 uses ribbon (rib / bon, two separate consonants), how and why rewritten. S09 cobra replaced by robot. C12 and P7 hint 3 now rule out one distractor and leave two live choices.
- 4.c S01 hint 3 and C01 hint 3 no longer name a key. The stale pre- sentence was removed from the S01 why.
- H.3.a C06, S07, C12, S13 hint 3 rewritten (no first letter, no restatement of the key). S03 key is now quail (quiet was a T4 key). C05 distractor zebra became ladder. C11 now uses Monday, Friday, Saturday and Sunday, and "soft" in C03 became "warm", to avoid s followed by d or o, where the font shows a gap. I did not check other words on a phone.
- 3.F.F.1.d: Round 1 now waits about five seconds then marks self-fixed or told. Round 3 compares those, and adds a silent step (point to a spot where you went back) and a retell. The rationale was rewritten.

SHOULDs taken:
- 4.a: C03 and S03 hint 3 (no model word), S05 hint 3, S12 choices, S15 rebuilt as a short-e twin (head), leakage (camp became cube, brown became tall, rice removed). Teach: added a y-as-a-vowel point; removed "girl" from the get/give hard-g line.
- 4.b: S07 now tests starfish with Teach terms, S10 distractors are plausible reader moves, S12 sentence makes sense, leakage (hotel became pupil/tunnel, paper became music/spider). Teach: added a y-as-a-vowel point.
- 4.c: S-C1 slot-2 options differ in C01, S01, C08, S09. C08 uses unlikely (not -able). S15 became mis-, re-, pre- (the Teach labels had drifted).
- H.3.a: C10 asks what the note asks someone to bring and keeps "large". S04 asks what kind of word each is (not letter counting). C12 and S13 keys shortened so they are not the longest.
- Exceptions: 1.a irregular and look-alike words and a definition of quick; 1.b 95% called a rough guide, not a pass mark (also in the Teach line), and comparison by mistakes per 100 words; 1.c yes/no questions rise, wh-questions fall, plus a retell; 4.a swing letters and a capitals list with "follow your school's model"; 4.b joined-letters check.
- Matrix: 4.a oo/ou now "practised+assessed"; 4.c y to i and H.3.a r, z, f and capitals marked "not modelled"; H.3.a notes the single typeface.

Verified claims (web): get and give keep hard g before e or i: https://en.wikipedia.org/wiki/Hard_and_soft_G (girl not found there, so it was dropped). ough: tough /uf/, though /o/, through /oo/, thought /aw/, cough /off/, bough /ow/: https://en.wikipedia.org/wiki/Ough_(orthography).

Not done or still open:
- A second cursive face (only PP Cursive exists). Recorded in the matrix.
- Watch Me still models only s and capital S in H.3.a, and does not model y to i in 4.c. I changed the matrix wording instead of adding examples.
- 3.F.F.1.b: the timer's own text (lines about "about 95%") in F-FH.js is existing engine-facing copy and was not changed.
- coreException has no UI consumer yet (reviewer note N-X1).
- Twin hints are copied between a twin and its core item in some pairs (reviewer N-1); only the ones that named a key were changed.
- Open SHOULDs on accepted 3.L.V.3.a (not applied): C04 "row after row"; C11 key "A strong current pulled the raft downstream."; C02, S02, C06 hint 1 names the clue type; S10 key is the longest.
- STATUS.md (in the Project) still needs the B9 rows. `--record-versions` is the coordinator's.

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

## Gates
check-content --all PASS (0 failures); check-writing 0 failures; check-instructional-copy 28 passed.
Worst twin similarity (word-set and multiset): 4.a 0.207, 4.b 0.200, 4.c 0.207, H.3.a 0.208.
Single-key unique-longest: 4.a 23%, 4.b 30%, 4.c 25%, H.3.a 13%. Choose-two both-longest: 0.

## Open concerns for the reviewer
- Open SHOULDs on accepted 3.L.V.3.a (not applied): C04 "row after row" choice; C11 key "A strong current pulled the raft downstream."; C02/S02/C06 hint 1 names the clue type; S10 slot key is the longest option.
- Only one cursive face exists ("PP Cursive"), so the plan's "at least two cursive renderings" for 3.F.H.3.a is not met.
- 4.a does not cover y as a vowel (not taught). 4.a C01/S01/S02 use great, steak and break, which are Teach words.
- 3.F.H.3.a: twins and hints check Hint 3 leaves two or more live choices by design; reviewer should confirm.
- Word uniqueness against js/data was scanned for 4.a-c; H.3.a words (quiet, zebra etc. are test keys) were avoided but a second scan is advised.
- Version records need `--record-versions` from the coordinator.

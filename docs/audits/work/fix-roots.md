# PP-003 fix log: roots (agent "roots", port 8452)

Scope: `js/data/lessons/L-V12.js` (3.L.V.2.a and 3.L.V.2.c lessons only), `js/data/sets/L-VOC-02.js`, `js/data/sets/L-VOC-03.js`.
Sources for the requirements: Georgia K-12 ELA Standards (2023), as in `js/data/standards.js`, and the Grade 3 ELA ALDs (Oct 2025, **DRAFT**, scratchpad `gadoe/2ba6c680-GM_ALDs_Gr3_ELA.txt` lines 342-350), as quoted in `docs/audits/PP-003-STANDARDS-MATRIX.csv` rows 78 and 80.

Root meanings used, and why they are accurate: port = carry (Latin *portare*), graph = write (Greek *graphein*), tele = far (Greek *tēle*), phon = sound (Greek *phōnē*), rupt = break (Latin *rumpere/ruptus*), spect = look (Latin *specere*), scope = look/tool for looking (Greek *skopein*), micro- = small, auto- = self, trans- = across, e-/ex- = out. These are standard textbook glosses. I did not check them against a web source in this session. I chose words whose port really comes from *portare*: transport, portable, report, export, porter. I deliberately left out airport and passport, where port comes from *portus* (harbor) or *porta* (gate), and I removed airport from a draft example for that reason.

---

## 1. 3.L.V.2.a: common roots not taught; mis- not taught

- **Deficiency:** the lesson taught base words and affixes only. "Common roots" was never taught. L-VOC-02-9 (port) tested an untaught root, and L-VOC-02-2 used the untaught prefix mis-.
- **Why it matters:** "common roots" is named in the standard and in the Proficient ALD. A child could pass the lesson without ever meeting a root.
- **Official requirement:** 3.L.V.2.a "Break words into common roots, root words, and affixes to determine meaning." DRAFT ALD, Proficient: "Deconstruct word(s) to determine meaning when the tested common root, root word, or affix is on grade-level."
- **File:** `js/data/lessons/L-V12.js` (3.L.V.2.a).
- **Corrections:**
  - teach.big now names roots.
  - The prefix point adds "Mis- means wrongly (misspell)".
  - A new point teaches common roots: port carry, graph write, tele far, phon sound, rupt break, spect look.
  - The old "put together" and "look-alikes" points are merged so there are still 5 points (SPEC §8: 3–5).
  - New `words` entry "common root". The prefix and suffix glosses now say "base word or root".
  - `example` became `examples`: hopeless (kept) plus telephone = tele + phone.
  - The tip mentions roots.
  - The parent note adds a root hunt.
  - **Watch Me:** washable (an -able duplicate of practice P2) is replaced by telescope = tele + scope. Learn stays at 3 (the checker allows 2–3).
  - **Practice:** removed `SK-V2a-P3` (retied duplicated the retied row in P4). Added `SK-V2a-P6` (Together, mc, DOK 1, spectator = spect + -or, meanings given in the prompt). Edited `SK-V2a-P5`: the key reread became misspell and the distractor under became the look-alike misty, with the clue and why updated. Added `SK-V2a-P7` (Try, mc, DOK 2, transport: only trans- is given, so the child must recall port = carry; the distractors are the meanings of graph, spect and rupt). Order: Together = P1, P2, P6. Try = P4, P5, P7. Each half has a root item, and mis- is in Try.
  - **Test:** replaced `SK-V2a-T5` (quietly: -ly is the 2.b skill, and the item was the weakest) with `SK-V2a-T6` (mc, DOK 2, inspect: the child must recall spect = look; the distractors are the meanings of port, graph and rupt). `SK-V2a-T4` match gains a row, misplace → "wrongly". The test is still 5 items, 7 points.
- **Verification:**
  - check-content --all: PASS, 0 failures, no warnings on any SK-V2a/V2c or L-VOC-02/03 item.
  - readability.py ran (passages unchanged).
  - Playwright at 375px and 320px on port 8452: Learn It shows both examples, Watch Me shows 3 examples, `PP.byId` split is p = P1, P2, P6 / y = P4, P5, P7 / t = T1, T2, T3, T4, T6, no page errors, scrollWidth equals the viewport.
- **Remaining limitations:** the browser walk did not step past test item 1 of 3.L.V.2.a, because the Next button was not reachable in my script, so T4 and T6 were not seen rendered. The same match and mc renderers were seen working in 3.L.V.2.c. There are no new passages, so no root word appears inside a passage; all root items are standalone sentences.

## 2. 3.L.V.2.c: building words from common roots never taught or tested

- **Deficiency:** the lesson built words only from base words plus affixes.
- **Why it matters:** "common roots" is named in the standard and in the Proficient ALD.
- **Official requirement:** 3.L.V.2.c "Build words using common roots, root words, and affixes." DRAFT ALD, Proficient: "Construct words using common roots, root words, and affixes."
- **File:** `js/data/lessons/L-V12.js` (3.L.V.2.c).
- **Corrections:**
  - Title changed to "Building new words with roots, prefixes and suffixes". I found no other code reference to the old title.
  - teach.big now names roots.
  - The points add: start from a root (port = carry); mis + spell; building on a root (tele + phone, head + phones). The old "choose the part" point is folded into the suffix point, so there are still 5 points.
  - New `words` entry "common root".
  - `examples` adds "one root" (portable, report, export).
  - The tip and the parent note mention roots.
  - **Watch Me:** spotless (-less, heavily covered elsewhere) is replaced by building autograph from auto- + graph.
  - **Practice:** removed `SK-V2c-P1` (cheerful: -ful is covered in P3 and the test). Added `SK-V2c-P6` (Together, mc, DOK 2: build "break out" from e- + rupt; export and rupture are the traps that have only one of the two parts). Added `SK-V2c-P7` (Try, 2-slot dropdown, 2 points, DOK 2: portable and interrupted chosen from the root meaning plus context). Order: Together = P2, P3, P6. Try = P4, P5, P7.
  - **Test:** replaced `SK-V2c-T2` (readable, the same pattern as P2) with `SK-V2c-T7` (mc, DOK 2: build micro- + phon for "small sounds"; microscope, telephone and megaphone each have only one right part). Replaced `SK-V2c-T3` (ms where both keys were -ful, DOK 1) with `SK-V2c-T8` (ms, 2 points, DOK 2: which two words built on port have to do with carrying: transport, porter). In `SK-V2c-T6`, the row "not clear → unclear" (a second "not" row) became "to use wrongly → misuse". The test is still 6 items, 8 points.
  - To stop the test from rewarding memory, the teach text does not contain transport, porter, microphone or misuse. It uses misspell and export instead.
- **Verification:**
  - Same gates as entry 1.
  - Playwright at 320px stepped through all 6 test items: the points shown were 1, 1, 2, 1, 1, 2; there was no sideways scroll; the T6 match renders 4 rows × 4 options.
- **Remaining limitations:** "porter" may be unfamiliar to some third graders. That is intentional, because the item asks the child to use the root, and the why defines it. Spelling-change items T4 and P4 are unchanged.

## 3. Choose-TWO items worth 1 point (L-VOC-02-5, L-VOC-03-9)

- **Deficiency:** both are `ms` items with `pick: 2` and `points: 1`.
- **Why it matters:** `js/engine/items.js` (T.ms.score) scores a 1-point ms as exact-only, but a 2-point ms gives 1 point for at least half of the keys with at most one wrong pick. That matches SPEC §5 (line 142). Across all live and backup data there were 95 pick-2 ms items worth 2 points and only 5 worth 1, so these two were inconsistent with the site's own convention and with the blueprint, where two-point TE items are 24 of 60 points.
- **Official requirement:** Blueprint (Aug 2025): items are 1-point SR/TE or 2-point TE. SPEC §5 sets the ms scoring rule.
- **Files:** `js/data/sets/L-VOC-02.js`, `js/data/sets/L-VOC-03.js`.
- **Correction:** `L-VOC-02-5` and `L-VOC-03-9` changed from `points: 1` to `points: 2`. The keys, choices and text are unchanged. Each now earns partial credit for one correct pick.
- **Verification:** check-content --all PASS.
- **Remaining limitations:** the set totals rise by 1 point each (L-VOC-02: 13 → 14, L-VOC-03: 13 → 14). Three other pick-2/1-point items remain outside my files: `SK-V3b-P6` and `SK-V3c-P5` (L-V3.js, owned by another agent) and `R-POE-01-q8` (R-POE-01.js).

## 4. L-VOC-02-9 and L-VOC-02-2 now supported

- `L-VOC-02-9` (port, portable) is now backed by the teaching of port = carry in both lessons and by "port + able = portable" in the 3.L.V.2.c example. The item still states the root meaning in its stem. No change to the item.
- `L-VOC-02-2` (misread → wrongly) is now backed by the mis- teaching in 3.L.V.2.a (teach point, P5, T4) and 3.L.V.2.c (teach point, T6). No change to the item.

## 5. DOK 3: none added (deliberately)

I looked for a genuine DOK 3 task in these two lessons and did not find one. Breaking down or building a word from known parts, even with context, is applying a skill (DOK 2). A DOK 3 claim would need strategic reasoning, such as inferring an unknown root's meaning from several texts and justifying it, which goes beyond this grade 3 standard's ALD. Relabelling items would be dishonest, so all new items are DOK 1 (meanings given) or DOK 2 (meaning recalled and applied in context). The language-wide DOK 3 gap stays open. It is better addressed in reading or Extended Writing items than in word-part items.

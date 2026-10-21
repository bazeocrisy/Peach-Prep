# PP-003 Phase F: Reviewer C (assessment specialist)

Reviewer C. Date: 2026-10-20. Worktree: /home/claude/pp-fix (pp-003-fixes), compared with main 66e536b.
I worked read-only. The only file I wrote is this one. My scripts and outputs are in the scratchpad (`rc/`), not in the repo.

## 1. Method

1. **Item diff.** `rc/load.js` and `rc/diff.js` load every changed lesson and set file twice in a Node `vm` sandbox with stub `PP.addLesson` and `PP.addSet`: once from `git show 66e536b:<path>` and once from the worktree. An item counts as in scope when it is NEW, when its own JSON changed, or when a passage it uses changed (for example, a figure was added).
   - Result: **66 items in scope** (65 found in the first diff, plus `R-POE-01-q8`; see RC-7).
   - 7 items were removed: SK-V2a-P3, SK-V2a-T5, SK-V2c-P1, SK-V2c-T2, SK-V2c-T3, SK-V3a-T3 and SK-TC1b-P2. I did not review the removals.
2. **Blind solve.** `rc/blind.js` printed the 65 items with no `correct` flags, answers, slot answers, row answers, `why` or `clue`. The printout showed each passage with its paragraph and sentence numbers, each figure's file, label, caption and alt text, and each stem and choice. I wrote all 65 answers to `rc/mine.json` before I ran `rc/keys.js`, which compares my answers with the keys.
3. **Figures.** I served the site on port 8463 (`node verification/serve.js . 8463`, stopped by its PID afterwards) and rendered the 8 SVGs that items use to PNG with Python Playwright: v3a-tree-ladder, v3a-heron, tc1b-beaver-lodge, tc1b-beaver-tree, tc1b-monarch-cycle, tc1b-monarch-flower, tt2a-honeycomb and tt2a-armadillo. I checked each item against the picture as drawn as well as its alt text.
4. **Full sets.** For every lesson with a changed item, I printed the whole test list and the whole practice list, with keys and `why` (`rc/full.js`), and ran the giveaway checks over them. I also read each standard's text in `js/data/standards.js`.
5. **Site-wide points scan.** I scanned all 1,139 live and backup items for "choose two" items that are not worth 2 points.
6. **Content checker.** `node verification/check-content.js --all` gave PASS (0 failures, 8 warnings, all about clue words in test items, which show no hints).

**A limit on the method (stated honestly).** Every `mc`, `ms` and `ebsr` item in the data stores the key(s) first. The engine shuffles the choices at run time (js/engine/items.js:109, 138, 184, 192), but my blind printout kept the data order. So my solves of those types were not blind to position. I did reason through each one on its content, but I cannot prove that the order did not influence me. The 14 dropdown, match and hot-text items had no position cue of this kind, and I agreed with all 14. A cleaner re-run would shuffle the choices in `blind.js`.

## 2. Cold-solve agreement

**65 / 65 agree (100%).** `R-POE-01-q8` is not counted: it changed while I was reviewing, and I saw its key before I could solve it blind (RC-7).

| Lesson / set | Items in scope | Agree |
|---|---|---|
| 3.L.V.2.a | P5, P6, P7, T4, T6 | 5/5 |
| 3.L.V.2.c | P6, P7, T6, T7, T8 | 5/5 |
| 3.L.V.3.a | P6, T1, T2, T5, T6, T7 | 6/6 |
| 3.L.V.3.b / 3.L.V.3.c | V3b-P6, V3c-P5 (points only) | 2/2 |
| 3.T.C.1.b | P1, P3, P4, P5, P7, P8, T1–T6 | 12/12 |
| 3.T.C.2.c | P6, T6 | 2/2 |
| 3.T.RA.1.c | P1–P5, T1–T5 (passages retitled; T3 rewritten) | 10/10 |
| 3.T.SS.1.b | T6 | 1/1 |
| 3.T.T.1.b | P7, T2, T4 | 3/3 |
| 3.T.T.2.a | P1–P7, T1–T6 (figures added to both passages) | 13/13 |
| 3.T.T.2.d | T6 | 1/1 |
| 3.T.T.4.b | P6, T6 | 2/2 |
| L-VOC-02-5, L-VOC-03-9, PT-1-12 | points or `why` typo only | 3/3 |

There are **no disagreements with a key.** For every item:
- exactly the keyed answer(s) are defensible;
- the distractors are wrong from the text or the figure;
- the points follow the rule (every choose-two `ms`, every 2-target hot-text item, every two-part `ebsr` and every two-slot dropdown in scope is worth 2 points);
- the item fits its `std` text.

The findings below are about item quality, not about wrong keys.

## 3. Findings

### RC-1 (SHOULD): SK-TT2a-P6 gives away SK-TT2a-P7, and P6's clue nearly names the answer
- **Where:** js/data/lessons/T-T2.js:140 (P6) and :180 (P7). Both items are new.
- **Evidence:**
  - P6 is "Practice Together" #4 of 7, so its hints are on from the start. Its key is "It shows what the wax cells look like and what bees keep in them." Its `why` adds: "its labels point to an egg, honey and pollen."
  - The very next item, P7 ("Try It Yourself"), asks: "The labels tell {what is inside some of the cells}."
  - So P6's key and `why` hand the child P7's slot-1 answer, and the caption half of P7 is implied too.
  - P6's clue, "Paragraphs 3 and 4 tell about something the bees build and use. Find that thing in the diagram," points to "wax cells", and only choice A mentions cells. With the hint on, P6 is close to a giveaway.
- **Fix:**
  - Narrow P6's key to "It shows the six-sided shape of the wax cells that the workers build." Drop "what bees keep in them" from the key.
  - Delete the label sentence from P6's `why`.
  - Change P6's clue to: "Read the caption. Then find the paragraph that talks about the same thing."
  - P7 can then stay as it is.

### RC-2 (SHOULD): SK-TT2a-P3 `why` answers a row of SK-TT2a-P4
- **Where:** T-T2.js:129 (P3) and :150 (P4).
- **Evidence:**
  - P3 (Together #3) has the distractor "A honeybee has five eyes." Its `why` says: "Five eyes and thousands of bees are true, but they are not jobs."
  - P4 (Try #5) asks the child to sort "A honeybee has five eyes." as key detail or not, and its clue is "Does this show a bee doing a job for the hive?" The answer was given two items earlier.
  - Both items are unchanged from main, but the lesson was reworked and the order now matters more, because P6 was inserted between them.
- **Fix:** replace P3 distractor D with a non-worker detail, for example "The queen lays hundreds of eggs in one day." Then trim P3's `why` to "The queen details are not about workers, and thousands of bees is not a job." That leaves the five-eyes sentence for P4 and P5 only.

### RC-3 (SHOULD): SK-V2c-T8 distractors can be ruled out without using the root
- **Where:** js/data/lessons/L-V12.js:937. The item is new and on the test.
- **Evidence:**
  - The prompt says Lin is "building words on the root port." The keys, transport and porter, are the only two choices that contain the letters "port".
  - The distractors (autograph, telescope, erupt, spectator) contain no "port" at all. The 3.L.V.2.c teach example says, "Every word built on port has something to do with carrying."
  - So the item can be answered by spotting four letters. It does not test building or meaning, and the distractors are not plausible misreadings (SPEC §6.8).
- **Fix:** replace two distractors with words that have the keys' prefix or suffix but a different root, for example "transform" (trans-, no port) and "painter" (-er, no port). The child must then check the root, not only the affix. Keep erupt and spectator.

### RC-4 (SHOULD): In v3a-tree-ladder.svg, the "trunk" leader line ends on the ladder
- **Where:** assets/figures/v3a-tree-ladder.svg:17, used by SK-V3a-P6 (js/data/lessons/L-V3.js:148).
- **Evidence:**
  - The leader is `M228 144 L166 168`. At y = 168, the trunk's right edge is at about x = 164, the ladder's left rail at about x = 149 and its right rail at about x = 172.
  - So the line ends just outside the trunk, between the ladder rails. In the PNG rendered at 400px, the "trunk" label visibly points at the ladder.
  - The alt text says the label "points to the thick wooden part of the tree that the ladder rests on," so the alt text and the picture disagree.
  - The key still stands, because no choice says "ladder". But this is the figure the item tells the child to follow ("follow its line").
- **Fix:** end the leader inside the trunk, above the top of the ladder: `<path d="M228 144 L156 128" .../>`. At y = 128 the trunk spans x 136–162. The line passes x = 160 at y ≈ 129, which is above the ladder top at y = 138, so it crosses neither rail.

### RC-5 (SHOULD): DOK 3 is too high for SK-TC1b-P5 and SK-TC1b-T3
- **Where:** T-C.js:347 (P5, `dok: 3`) and :397 (T3, `dok: 3`). Both were rewritten in this phase.
- **Evidence:**
  - P5 asks the child to match two diagram labels ("dry room", "door under water") to the two sentences that say "doors are under the water" and "the room inside stays dry". That is literal locating, DOK 1–2.
  - T3 Part A asks what a sequence diagram shows, and Part B asks for the one sentence in that section that names a stage. That is applying a known feature, DOK 2.
  - Neither item asks the child to reason strategically, use evidence across a text, or justify a choice.
  - This matches the fix-roots author's own standard (fix-roots.md §5: "Relabelling items would be dishonest").
- **Fix:** set both to `dok: 2`. If the 3.T.C.1.b test needs a DOK 3 item, write one that asks the child to choose and justify a feature. An example: "Which would help a reader most to understand how a caterpillar becomes a butterfly, and why?", with a feature-plus-reason pair in each choice.

### RC-6 (SHOULD, outside the changed items): SK-TT4a-P2 is a choose-two item worth 1 point
- **Where:** js/data/lessons/T-T34.js:456. The file changed in this phase, but this item did not.
- **Evidence:** the item is `type: "hottext", points: 1, pick: 2`, and its prompt is "Which TWO lines in stanza 2 rhyme…". The fix phase changed choose-two items to 2 points: L-VOC-02-5, L-VOC-03-9, SK-V3b-P6, SK-V3c-P5 and R-POE-01-q8. The fix-roots sweep counted only `ms` items, so it missed this hot-text item. My scan of all 1,139 items found no other case.
- **Fix:** `points: 2`. Under SPEC §5, a 2-point hot-text item with two answers scores 1 point per answer. The item is in practice, so no test total changes.

### RC-7 (NOTE): R-POE-01-q8 changed during this review, and no fix log records it
- **Where:** js/data/sets/R-POE-01.js:161. The file's mtime is 16:29:28, after my first diff. It changed `points: 1` to `points: 2`.
- **Evidence:**
  - The brief said the set files were stable.
  - fix-roots.md:64 lists this item as "remain[ing] outside my files", and no fix-*.md records the change.
  - I checked it after seeing the key, so it is not in my agreement count. The key (summer-evening glow; someone decides not to use a jar) is correct and is the only defensible pair. Points are now consistent.
- **Fix:** add a log entry for the change, and get the lead to confirm that nothing else under js/data moved after the reviews started.

### RC-8 (NOTE): Practice `why` text that hints at later answers (items unchanged; the passages changed)
None of these hand over a key that is not also plain in the passage. They are listed for completeness.
- **SK-TT2a-P1 → P2** (T-T2.js:113/123): P1's key, "each have a job, and they work together", and its `why` ("Paragraph 1 says this") lead straight to P2's answer, sentence p1:1:3. If this matters, cut "Paragraph 1 says this" from P1's `why`.
- **SK-TC1b-P1 → P7** (T-C.js:303/364): P1's `why` ("a beaver slaps its tail on the water") gives the content behind P7's answer ("the smack of a beaver's tail").
- **SK-RA1c-P1 → P4** (T-RA.js:500/532): P1's key includes "each fall", and P4's answer is "In the fall,".
- **SK-TT1b-P7 → P5** (T-T1.js:338): P7's `why` describes the wire fix, which is P5's "Solution" row. P3's `why`, earlier in the list, already did the same.
- **SK-V2c-P6 → P7** (L-V12.js:879/910): P6's `why` restates port = carry and rupt = break, and P7 needs both. This is re-teaching that Learn It already covers, and it is acceptable.

### RC-9 (NOTE): Cross-item cues inside test sets (no item gives away another item's key)
For each test set with a changed item, I checked both directions:
- **3.T.C.1.b:** T6 distractor D ("why birds stay away from the bright monarch") echoes the heading that T1 asks for ("Bright Colors Send a Message"). This is mild.
- **3.T.RA.1.c:** T1's key ("…nest in Georgia in summer and go south in winter") rules out T3 distractor E. T5's dropdown text ("they drink nectar and eat tiny insects") rules out T3 distractor F. Both distractors are new in this phase. This is only elimination, because both facts are in the sources.
- **3.T.T.1.b:** T3 Part B choice D quotes the sentence that justifies T2's key ("due the next day").
- **3.T.T.2.a:** T5's prompt ("The last paragraph says a tough shell helps the armadillo") points at the paragraph that states T1's main idea.
- **3.T.T.2.d:** the keys of T1 and T5 (unchanged) use parallel wording ("amazing … special"). The new T6 neither gives nor gets a cue.
- **No cross-cues:** 3.L.V.2.a, 3.L.V.2.c, 3.L.V.3.a (the heron figure and its caption reveal nothing about T1, T2, T5 or T6), 3.T.SS.1.b and 3.T.T.4.b.

### RC-10 (NOTE): SK-TT2a-P5 `why` contradicts paragraph 4 as written
- **Where:** T-T2.js:161. The item is unchanged.
- **Evidence:** the `why` says, "Paragraph 4 says nothing about needing five eyes." But paragraph 4, sentence 5, is "A honeybee has five eyes." A child who reads both may be confused. The `why` also never says why Part B choice C (the five-eyes sentence) is wrong.
- **Fix:** "Paragraph 4 does say a honeybee has five eyes, but that one fact is not about gathering food or making honey, so it does not support the main idea."

### RC-11 (NOTE): Thin feedback on two TC1b practice items
- **SK-TC1b-P4** (T-C.js:336; its stem changed): the `why` gives the rule but does not say why "title of the book", "spelled in a new way" or "read in a loud voice" are wrong.
  - **Fix:** add "Bold does not mark a title, a new spelling or a loud voice."
- **SK-TC1b-P3** (T-C.js:326): the `why` never addresses the dam and warning distractors.
  - **Fix:** add "The box does not tell about dams or warn readers."

### RC-12 (NOTE): SK-TC2c-P6 has a weak distractor
- **Where:** T-C.js:956.
- **Evidence:** distractor B, "She wrote long ago, before people wrote in full sentences," is not a plausible misreading (SPEC §6.8), and it implies something false about history. Choice A is also the only choice that names her job, which the clue asks about. The item is in Try It Yourself, so that hint shows only after one wrong try, which is acceptable.
- **Fix:** replace B with "She was writing to a friend, so she kept her note short and fun."

## 4. Things I did not check
- The teach and learn figures that no item uses: tt2a-camel, tc1b-frog, tc1b-plant-parts, v3a-rainfall-graph, ss1a-georgia-river.
- The 7 removed items, and whether a learner's saved progress survives their removal.
- Test point totals compared with mastery thresholds (only the per-item points rule).
- On-screen rendering in the player. I rendered the SVGs on their own, not inside lesson pages.
- The non-item changes in F-FH.js (parent text and a checklist).

## 5. Verdicts

| Lesson or set | Verdict |
|---|---|
| 3.L.V.2.a (L-V12.js) | PASS |
| 3.L.V.2.c (L-V12.js) | PASS WITH SHOULDS (RC-3) |
| 3.L.V.3.a (L-V3.js) | PASS WITH SHOULDS (RC-4) |
| 3.L.V.3.b (L-V3.js) | PASS |
| 3.L.V.3.c (L-V3.js) | PASS |
| 3.T.C.1.b (T-C.js) | PASS WITH SHOULDS (RC-5) |
| 3.T.C.2.c (T-C.js) | PASS |
| 3.T.RA.1.c (T-RA.js) | PASS |
| 3.T.SS.1.b (T-SS.js) | PASS |
| 3.T.T.1.b (T-T1.js) | PASS |
| 3.T.T.2.a (T-T2.js) | PASS WITH SHOULDS (RC-1, RC-2) |
| 3.T.T.2.d (T-T2.js) | PASS |
| 3.T.T.4.b (T-T34.js) | PASS |
| T-T34.js, file level (3.T.T.4.a, item unchanged) | PASS WITH SHOULDS (RC-6) |
| F-FH.js | No practice, test or set items changed; not in my scope |
| L-VOC-02 | PASS |
| L-VOC-03 | PASS |
| PT-1 | PASS (24 items, 31 points, matching the new blurb) |
| R-POE-01 | PASS (RC-7: the change is not logged) |

There are no MUST findings. No key is wrong, no item has a second defensible answer, and no test item gives away another test item's key.

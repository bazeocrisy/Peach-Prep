# PP-004 independent review C, round 3: items changed since ad4990f

- Reviewer: Agent C (round 3). Date: 2026-10-20/21. READ-ONLY: this file is the only file I wrote in the repo. No git commands except read-only `git show` / `git diff` / `git log`.
- Port 8503 (server started with `node verification/serve.js . 8503`, stopped by its PID).
- Scratch work (not in the repo): `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revC3/`
  - `old/` = `git show ad4990f:<path>` copies; `diff.js` builds `changed.json` (by item id + JSON content, plus changed passages, including `testB`).
  - `blind/` = shuffled-choice dumps (seed = item id + "C3") with NO key, why, clue or hint; `keys/` = same order with keys; `answers.txt` = my answers, written before I opened `keys/`.
  - `png/` = figures rendered to PNG; `shots/` = player screenshots at 390 and 1366; `pw.py` = playthrough script.

## 1. Scope

Diffing every live lesson and set file against ad4990f found changes in 14 files (13 lessons + PT-1). Item changes:

| Unit | Changed items (why) |
|---|---|
| 3.L.GC.2.b form B | TB1, TB2, TB3 (edit + new passage p3), TB4, TB5 (edit) |
| 3.L.GC.2.d | T3 (edit) |
| Irregular plurals form B | TB2, TB3, TB4 (edit) |
| Relative pronouns/adverbs | T5 (edit) |
| 3.L.V.2.a form B | TB4, TB5 (edit) |
| 3.L.V.3.a form B | TB2-TB6 (passage p3 sentence 2.1 edited) |
| 3.L.V.3.d | P6, P7, T6, T7 (new); T5 removed |
| 3.T.C.1.b | P6 (edit) |
| 3.T.C.2.a | T6 (new); T1 removed |
| 3.T.C.2.c | P7 (edit) |
| 3.T.RA.1.c | T1-T5 (passage p4 sentence 4.2 edited) |
| 3.T.RA.2.b | T5 (edit; passage p2 sentence 4.3 edited) |
| 3.T.T.1.d | T5 (DOK edit) |
| 3.T.T.2.a form B | TB2 (edit) |
| 3.T.T.3.a | P6, T6 (new); T3, T4 (edit) |
| 3.T.T.3.c | P6 (edit), T6 (new); T3 removed |
| TS-SEQ | T5 (DOK edit) |
| TS-PS | P2 (edit) |
| PT-1 | PT-1-6, PT-1-13 (edit) |

**42 items in scope** (plus 3 removals checked for dangling references: none). L-GUM1 and L-GUM2 changed only lesson-level fields (`speak` cards, a word-list term), not items, so they are outside the item count. To check giveaways, every sibling item in the same practice, test or testB group, and all 24 PT-1 items, was printed with the changed items (as unchanged context; not counted).

Figures in scope, rendered to PNG and viewed: v3d-app-spring (Watch Me 3), v3d-app-bark (P7), v3d-app-bright (T6), v3a-b-balloon-parts, v3a-b-pecan-graph, tt2a-b-tree-trunk, tc1b-beaver-tree/-webpage/-lodge.

## 2. Key agreement

**42 / 42 agree (100%).** All answers were recorded in `answers.txt` before any key was read, then compared mechanically. No disagreement.

Browser check (port 8503, 390x900 and 1366x900): every form I touched was played through with the keys. Full scores on 3.L.GC.2.b form A and B, 3.L.V.3.d check, 3.T.C.2.a, 3.T.T.3.a, 3.T.T.3.c, 3.L.GC.2.d, 3.L.V.2.a form B, plurals form B, 3.L.V.3.a form B, 3.T.T.2.a form B and PT-1. 0 page errors, 0 horizontal scroll. I looked at V3d-P6, V3d-T6, TC2a-T6 at 390 and PT-1-13 at 1366. The PT-1 p2 paragraph numbering skips headings, so "paragraph 5" in the PT-1-13 why is correct as displayed.

Gates (run read-only): `node verification/check-content.js --all` PASS, 0 failures, 6 warnings (all on items outside this scope). `python3 verification/readability.py`: 3.L.GC.2.b p3 123 words, FK about 3.8.

Points: GC.2.b A 7 / B 7; V.2.a 7/7; plurals 7/7; V.3.a 7/7; TT.2.a 8/8. 3.L.V.3.d check is now 8 points (6 items), 3.T.T.3.a 8 (6 items), 3.T.C.2.a 7, 3.T.T.3.c 7. Every choose-two is 2 points, and every 2-slot dropdown and 4-row match is 2 points.

## 3. Findings

### RC3-1 (SHOULD, high priority) PT-1-13 row D gives away PT-1-14
- Where: js/data/sets/PT-1.js:450 (PT-1-13 row), PT-1-14 at :458.
- Evidence: the new row "Fall days are sunny, and fall nights are cool." → "The red colors are especially bright." is exactly the cause-and-effect that PT-1-14 (2 points, DOK 3) asks the child to reason from. PT-1-14 Part A asks what would happen to maple reds in a cloudy fall, and its Part B key is "Scientists have found that sunny fall days and cool nights help make the reds especially bright." PT-1-14's own clue is "Find the part of the article that tells what helps make red leaves bright." PT-1-13 comes right before it and hands over that relationship, and the test has a "Previous question" button, so reordering does not cure it. The C5 fix removed a cue to PT-1-11, but created a stronger cue to PT-1-14.
- Also: "Fall days are sunny" is worded as a general fact. The article states a condition ("sunny fall days and cool nights help..."), not that fall days are sunny.
- Fix: replace row D with the water-saving relation from paragraph 7 ("Letting Go"): cause "A tree drops its leaves before winter." → effect "The tree saves water during the cold months." Then update the why. Row B ("thin layer of cells... breeze knocks the leaf loose") already touches leaf-dropping, so this adds no new cue to PT-1-12. Points stay at 2.

### RC3-2 (SHOULD) Irregular plurals form B still reuses form A's target words
- Where: js/data/lessons/L-GUM3.js:311-360 (SK-GUM3-2-TB1..TB5).
- Evidence. Only loaves (TB3) and shelves (TB4) are new targets. Every other target in form B is a form A or practice word:
  - TB1 geese: practice P3/P4; form A T2 "gooses".
  - TB2 keys people and knives: exactly form A T4's rows (person, knife). Its distractors moose and mice are form A T2's words, and deer is practice P3's.
  - TB4 womens: form A T1. Children: form A T2 "childrens" and practice P2/P5. Oxen: form A T4 and practice P4.
  - TB5 sheeps: form A T2 and practice P2.
- So 4 of the 7 points (TB2 + TB4) can be earned from memory of form A's T4/T1/T2. FORMB-BRIEF says the child must not be able to pass from memory of form A or practice. Earlier finding B5 is only partly fixed.
- Fix: swap in unused grade-3 irregulars, such as calf/calves, half/halves, leaf/leaves, elf/elves, scarf/scarves, life/lives, bison and salmon (same form). Tooth/teeth is already used in practice and form A.. For example:
  - TB2 keys: "The farmer's two calves...", and keep "people" OR "knives", not both.
  - TB4 rows: "elfs" (needs a fix), "bison" (correct).
  - TB5: "salmons".
  - Avoid fish, trout and hoof (accepted variants), and avoid deer as a "mistake" (see RC3-3).

### RC3-3 (SHOULD) SK-GUM3-2-TB2 why states "deers are not words"
- Where: js/data/lessons/L-GUM3.js:332.
- Evidence: Dictionary.com lists both "deer" and "deers" as plurals (https://www.dictionary.com/browse/deer?s=t, checked 2026-10-21). Grammarist says "Deers is an accepted plural, but it is rarely used." (https://grammarist.com/plurals/deer-vs-deers/, checked 2026-10-21). Merriam-Webster could not be fetched (permission not granted: https://www.merriam-webster.com/dictionary/deer).
- The key is defensible for grade-3 conventions, because "deer" is the standard plural. But the why's statement is false, and reviewfix4's own rule (avoid fish/trout/hoof because of variants) applies to deer too.
- Fix: replace the distractor "Four deers drank from the cool creek." with an unambiguous error, such as "Two mouses..." if mice is moved, or "Three gooses..." if TB1 changes, or a new word from RC3-2. At minimum, change the why to "We say four deer, not deers."

### RC3-4 (SHOULD, low) SK-V2a-TB4 tests -er, which the 3.L.V.2.a lesson never teaches
- Where: js/data/lessons/L-V12.js:636 (item) and :379 (teach suffix point lists only -ful, -less, -able, -ly).
- Evidence: two of TB4's four rows (builder, colder) depend on -er "a person who" vs -er "more". That is taught only in the 3.L.V.2.b lesson (L-V12.js lines ~665-669: "Watch out: -er added to a describing word means more"). Form A's T4 uses only affixes the V.2.a lesson teaches (un-, pre-, -ful, mis-). So form B is harder for a child who has done only this lesson.
- It is still aligned with the official 3.L.V.2.a wording ("Deconstruct words using common roots, root words, and affixes to determine meaning").
- Fix: either add one teach line to 3.L.V.2.a ("-er can mean a person who, as in builder, or more, as in colder; check the base word"), or replace one -er row with a taught affix that does not collide with TB2/TB3 (for example -less in "spotless", "without").

### RC3-5 (NOTE) SK-TC2a-T6 is a template copy of practice SK-TC2a-P4
- Where: js/data/lessons/T-C.js:783 vs :760.
- Evidence: the prompt is the same frame ("Read the poem. How is the speaker's view of the X different from the Y's view?"). It is the same 4-line poem format, and the four choices use the same logic: the correct contrast, "both feel A", a reversed contrast, and "both do B". The key also echoes the poem words ("too cold"). A child who did P4 can answer by pattern. Alignment with 3.T.C.2.a is fine ("different perspectives of the narrator or speakers"), and "distinguish them from their own" is still covered by T3/T5.
- Fix (optional): break the pattern. For example, make it a hottext ("Select the line that shows how Dad sees the wind"), or use distractors that each misread one line, not a reversal.

### RC3-6 (NOTE) SK-TT3c-T6 mirrors practice SK-TT3c-P6's distractor pattern
- Where: js/data/lessons/T-T34.js:380 vs :348.
- Evidence: both are "best reason" items whose distractors are a fact that is not a why, an "I really (really) ..." restated opinion, and an off-topic sentence. The afix log says T6 was modelled on P6.
- Also, T4's key conclusion (":390", "keep us healthy and save time") still sums up only two reasons, after T6 asks for a third. That is harmless, because T6 is hypothetical.
- Fix (optional): vary one distractor type, for example a reason that supports the opposite opinion.

### RC3-7 (NOTE) PT-1-6 key is much longer than its distractors
- Where: js/data/sets/PT-1.js:300.
- Evidence: the key is about 26 words; the distractors are 15-18 words. That is a length cue on a DOK 3 item. Its content is correct and supported (paragraphs 6, 11-13), and it does not cue PT-1-7.
- Fix: shorten it, for example: "Malik thinks the chip must be hidden, but Aunt Bea sees it as something she can fix."

### RC3-8 (NOTE) Mild cue between SK-TT3a-T6 and SK-TT3a-T4
- Where: js/data/lessons/T-T34.js:202 and :186.
- Evidence: T6's distractor "to give a new reason that trees would bring wildlife" labels wildlife as a reason, which helps T4 (pick the second reason: "Trees would also bring wildlife to our school."). The cue is weak, because "also" in the passage already signals it. The T3/T4 whys no longer reveal T6. No change needed. If you want to remove it, use "to give more evidence about birds and squirrels".

### RC3-9 (NOTE) "erupt" appears in two lessons
- SK-V2a-TB5 (L-V12.js:647, form B) uses erupt, and SK-V2c-P6 (L-V12.js:955, practice in 3.L.V.2.c) keys "erupt". This is cross-lesson, not within a set. The afix log already flagged it.

### RC3-10 (NOTE) SK-GC2d-T3 DOK 3
- Where: L-GC2.js:819.
- Choosing the most detailed revision and the reason it is better is closer to DOK 2. The DOK was not changed in this edit; the new Part A wording ("best elaborates on Lily's idea by adding details") aligns better with the official 3.L.GC.2.d "Elaborate on ideas and information...". Part B's key restates what makes A right; this is acceptable for EBSR.

### Checked and found sound (no finding)
- **3.L.GC.2.b form B (rebuilt).**
  - p3 is present-habitual. The single slip is inside a complex sentence (5).
  - TB2 (because, with a reversed-cause distractor and a tense-slip distractor) and TB3 (Although) use frames that are not in form A (and / Even if) or practice (so / After).
  - TB4 adds a legitimate time change. TB5 uses irregular past distractors.
  - DOK 2 x5 in both forms; 7 = 7 points. No item or stem is shared with form A or practice.
  - Within-form cues: TB2's key confirms the present tense, but the draft is plainly present anyway. Not a giveaway.
  - Genuinely different from form A and practice: yes.
- **3.L.V.3.d.**
  - P6, P7, T6 and T7 are accurate, and each has one defensible answer. Each is answerable from its entry or figure. The alt text lists all labels and meanings without saying which one fits.
  - P6, T7 and the teach example use three different phrases (give up, run out of, look after). P7 and T6 use different words.
  - Aligned with "print and digital... words and phrases" (official 3.L.V.3.d).
  - No reveal between items; the removed T5 is not referenced anywhere.
- **3.T.C.1.b P6:** the Speaker's voice row ("slows down and stops for a moment...") fits "auditory, spoken" in the official text. P9's earlier why teaches spoken signals, but it does not reveal P6's pause row.
- **3.T.T.3.a P6/T6:** accurate. T6 assesses "design" (a counterargument paragraph), which matches "techniques used to present and design opinion texts". 8 points, 6 items.
- **3.T.RA.2.b T5:** the new distractor (calf) is true and harmless. The passage now says "Some elephants live to be 60 years old or even older." Britannica says "In the wild, elephants generally live to about 60 or 70 years of age" (https://www.britannica.com/science/How-Long-Do-Elephants-Live, checked 2026-10-21), so "some" reaching 60 is supported. San Diego Zoo gives a 38-47 year median (https://animals.sandiegozoo.org/animals/elephant), which is consistent with "some".
- **3.T.RA.1.c p4 "a parent may dive at them and even strike them":** supported. NestWatch says "An aggressive defender of its nest, the Brown Thrasher is known to strike people and dogs hard enough to draw blood." (https://nestwatch.org/learn/focal-species/brown-thrasher/, checked 2026-10-21). All About Birds could not be fetched (permission not granted).
- **TT2a-TB2:** the Part A key no longer echoes Part B. **V2a-TB5:** the stem no longer contains "burst out". **V3a p3 2.1:** consistent with Figure 1's four labels, and TB5 is still figure-dependent.
- **TC2c-P7, TSPS-P2, TSSEQ-T5, TT1d-T5, GUM4-5-T5:** the edits are correct, and each why teaches without revealing another item.

## 4. Verdicts

| Lesson / set | Verdict |
|---|---|
| 3.L.GC.2.b (form B) | PASS |
| 3.L.GC.2.d | PASS (NOTE RC3-10) |
| Irregular plurals (form B) | PASS WITH SHOULDS (RC3-2, RC3-3) |
| Relative pronouns/adverbs | PASS |
| 3.L.V.2.a (form B) | PASS WITH SHOULDS (RC3-4; NOTE RC3-9) |
| 3.L.V.3.a (form B) | PASS |
| 3.L.V.3.d | PASS |
| 3.T.C.1.b | PASS |
| 3.T.C.2.a | PASS (NOTE RC3-5) |
| 3.T.C.2.c | PASS |
| 3.T.RA.1.c | PASS |
| 3.T.RA.2.b | PASS |
| 3.T.T.1.d | PASS |
| 3.T.T.2.a (form B) | PASS |
| 3.T.T.3.a | PASS (NOTE RC3-8) |
| 3.T.T.3.c | PASS (NOTE RC3-6) |
| TS-SEQ | PASS |
| TS-PS | PASS |
| PT-1 | PASS WITH SHOULDS (RC3-1 high priority; NOTE RC3-7) |

No MUST findings. Key agreement 42/42.

## 5. Not checked / limits
- I did not run guard.py.
- I did not re-review lesson-level `speak` cards (L-GUM1) or habits.js text. They are not items.
- Merriam-Webster and All About Birds pages were blocked (permission not granted), so those facts rest on the other sources cited.
- Thrasher p3/p4 facts outside the edited sentence (clutch size "three to five", "more than one thousand songs") were not re-verified. NestWatch gives a clutch of 2-6, so "three to five" is typical but not the full range.

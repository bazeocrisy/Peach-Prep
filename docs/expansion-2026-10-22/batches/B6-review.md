
## First review (lessons 5-8)

Reviewer: independent (did not author). Lessons: L5 collective/abstract nouns, L6 reflexive pronouns, L7 commas with coordinating conjunctions, L8 hyphens at line breaks (last four in `js/data/lessons/L-GUM3.js`, indices 4-7). Reviewed against a frozen copy of the worktree.

### Verdicts

| Lesson | Verdict |
|---|---|
| L5 collective and abstract nouns | CHANGES REQUIRED |
| L6 reflexive pronouns | CHANGES REQUIRED |
| L7 commas with coordinating conjunctions | CHANGES REQUIRED |
| L8 hyphens at line breaks | CHANGES REQUIRED |

### Method and blindness

- Node vm sandbox with a mock `PP.addLesson`, seeded shuffle, key/why/hints/how/clue/answer/misconception/like/sample stripped. Stripped JSON was grepped for key fields before reading. All core (refs resolved), S01-S15, Together items and tests were solved and saved (ans5-8.json) before any key or the author log was opened.
- Agreement with keys: 148/152 (97.4%). Fully blind with one caveat: after answers were saved, my compare script printed keys for the disagreeing items; this did not alter saved answers. The author log was read only after solving.
- Disagreements: 5-S04 (my slip, item fine); 6-C13 and 6-S13 (stem ambiguity, MUST); 7-S05 Part B (data bug, MUST).
- Mechanical checks: all points/pick values consistent with keys; mc in core 4/4/5/4 (cap 6); DOK1 <=2; passage numbering sequential in all 24 drafts; FK all <=4.5 (highest L5 p4 = 4.5, at the limit); check-content shows only the F-PF failure (ignored per brief) plus hint-length warnings. Browser at 390x844 touch with real controls: all 60 core items accepted the correct answer, no horizontal scroll, no page errors.
- Dictionary honesty: L8 split words were checked with pyphen en_US (TeX patterns) for every word, plus fetched dictionary/syllable pages for a subset (below). Not every word was fetched from a dictionary.

### Web sources

- Collective nouns singular in American English: https://learnersdictionary.com/qa/Are-Collective-Nouns-Singular-or-Plural-verb-agreement
- Collective-noun pairings: https://www.grammar-monster.com/lists/list_of_collective_nouns.htm ; https://mangolanguages.com/resources/learn/grammar/english/what-are-collective-nouns-in-english/study-resource-collective-nouns-for-animals (pack, colony, litter, pod present; school of fish, bunch of grapes only partly listed)
- Abstract nouns: https://spokenenglish.guru/abstract-nouns/ (courage, friendship, honesty, strength, teamwork, wisdom; beauty is standard but not on that page)
- Reflexives: https://www.scribbr.com/nouns-and-pronouns/reflexive-pronouns/ (myself is not a polite I/me; hisself, theirselves nonstandard); https://writingexplained.org/?p=12434
- Commas: https://owl.purdue.edu/owl/general_writing/punctuation/commas/index.html ; https://owl.purdue.edu/owl/general_writing/punctuation/independent_and_dependent_clauses/runonsentences.html ; short-clause exception: https://www.grammarbook.com/blog/?p=876 , https://www.writingforward.com/grammar/punctuation-marks/commas-and-clauses (quotes Chicago), https://ellii.com/blog/commas-in-independent-dependent-clauses
- Hyphenation: https://nos-langues.canada.ca/en/writing-tips-plus/hyphens-word-division (no one-syllable splits, split between syllables, avoid single-letter breaks, avoid carrying a two-letter syllable)
- Dictionary: cush·ion https://merriam-webster.com/dictionary/cushion ; min·now https://prod-ccroc-direct.merriam-webster.com/dictionary/minnow ; bon·fire https://prod-ccroc-direct.merriam-webster.com/dictionary/bonfire ; count·er https://prod-ccroc-direct.merriam-webster.com/dictionary/counter ; mon-key https://www.howmanysyllables.com/words/monkey ; lan-tern https://www.howmanysyllables.com/words/lantern ; count-er https://www.howmanysyllables.com/words/counter ; feath-er https://www.howmanysyllables.com/words/feather ; https://www.wordhelp.com/syllables/english/?q=monkey ; https://www.wordhelp.com/syllables/english/?q=feathers
- pyphen agrees with every item split except counter and lantern (not hyphenated by pyphen; lantern confirmed lan-tern by howmanysyllables).

### Lesson 5: collective and abstract nouns -- CHANGES REQUIRED

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 5-S06 | Hint 3, how and why refer to "committee" in sentence 3, but the draft (p5) says "panel" and "group". Stale text. | Rewrite hint 3/how/why to match the draft. |
| SHOULD | 5-C12, 5-S12 | Hint 2 ("plural of one animal/relative") effectively states the key's logic. | Reword h2 to point where to look, not what the answer is. |
| SHOULD | Teach/Learn | Teach lists joy, courage, friendship, honesty (keys in C05, P5, S02, T3, P3), "hope or fear" (T1 key), "The flock flies south" (T2), "audience claps". Pre-answers. | Swap Teach examples for non-tested words. |
| SHOULD | 5-C08, 5-S08 | Lexical recall (pack/school/flock/bunch; pod/litter/colony/troop) that Teach does not teach. | Add a collective-noun pairing list to Teach or make context-solvable. |
| SHOULD | 5-C04/C14 (and C10) | Same key logic repeated. | Differentiate one. |
| SHOULD | 5-T5 | Reuses distractor "Two horses ran across the field." from L-GRM-01-8; prompt "Choose the TWO sentences that use a collective noun." identical to P4/S01. | Vary. |
| SHOULD | Core mix | Identification-heavy (about 7-8 items); Teach lacks was/has helper-verb agreement. | Swap in one agreement item; add to Teach. |
| NOTE | 5-S04 | My slip (gasp/gasps); item fine. | none |
| NOTE | 5-C03 | H3 "sails is a verb"; sails can be a noun. | Reword. |
| NOTE | Overlap | Twin Jaccard max 0.40/0.41 (S05/C05). | OK. |
| NOTE | Drafts | p3 and p6 have 11 sentences; p4 FK 4.5 (limit). | Trim p4 slightly. |
| NOTE | Cues | Longest-key unique 11%; choose-two both-longest in C07, C13, S13. Hint 3 leaves exactly 2 live in P5, C05. | Acceptable; watch. |

### Lesson 6: reflexive pronouns -- CHANGES REQUIRED

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 6-C13, 6-S13 | Stem reads "show that X is wrong"; I picked the one correct myself use. Key is the two sentences where myself wrongly replaces I/me. Three sentences show myself doing its own job, so the stem is ambiguous (it disambiguates only via hint 1). | Reword stem: "Choose the TWO sentences that use myself when I or me should be used." |
| SHOULD | 6-C12, 6-S12 | Hint 2 ("only one choice has just Rosa/Lila doing it") states the key. | Reword. |
| SHOULD | Teach | "Dad and I went" appears in Teach and as C11 "Dad and myself practiced" / T4 option B (pre-answer). No second-person yourself/yourselves. | Change example; add yourself/yourselves. |
| SHOULD | Frames | "We V ourself a N" appears in Learn It 2, C07, S01, P2, T4 (five times). | Vary. |
| SHOULD | 6-P4 | Close to L-GRM-01-6 (hottext with hisself). | Vary. |
| NOTE | Overlap | Twin max 0.41 (S12/C12), S03/C03 0.39/0.43. OK. | none |
| NOTE | Drafts | p1/p3 have 11 sentences. | trim optional |
| NOTE | Cues | Longest-key unique 13%; choose-two both-longest in S07, S13; ratio P4 1.28. | watch |

### Lesson 7: commas with coordinating conjunctions -- CHANGES REQUIRED

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 7-S05 Part B | DATA BUG: `correct: true` is on "Every and needs a comma right after it, no matter what." instead of "Both sides have their own naming part and doing part, so the comma goes before and." (how/why name the other one). A child choosing the right reason is marked wrong. check-content does not catch it. | Move the `correct` flag. |
| MUST | 7-P2, 7-S01 hint 3 | "In sentence 4, the comma is already in place." Free-standing hottext options are shuffled and unnumbered (confirmed in browser), so "sentence 4" has no referent. | Rewrite hint without a number. |
| SHOULD | Short-clause exception | Grammarbook, ellii and Chicago (via writingforward) allow omitting the comma when both clauses are very short. Binary needs-comma/no-comma items on 3-4-word clauses are arguable: 7-T3 row 4 (3/4 words), 7-P3 row 3 (3/6), 7-C08 row 4 (4/3), 7-S08 row 3 (4/4), 7-S07 options A/B/D (4/4), 7-S01 and 7-P2 (4-5 words). | Lengthen clauses to 6+ words or add a Teach note. |
| SHOULD | 7-C06, 7-S06 | Sentence 9 of the draft is also missing commas but is outside targets (S06 stem says "Two sentences ... have a comma problem"; C10 uses the sentence). Same flaw in 7-C06. | Fix the draft or the stem. |
| SHOULD | 7-P2/S01 hint 1 | "Both sides complete but no comma yet" describes the key's test. | Reword to strategy. |
| SHOULD | Pairs | C03/C14 (both ", so") and C04/C14 share key logic. | Vary. |
| SHOULD | 7-P5 | Prompt "Read the two sentences. Which is the best way to combine them?" identical to L-GRM-02-7; P2 uses the L-GRM-02-8 frame. | Reword. |
| NOTE | Overlap | Twin max 0.42 (S14/C14), S03/C03 0.41/0.46. | none |
| NOTE | 7-S04, T-T1 | Share "I took a deep breath and". | vary |
| NOTE | Hint 3 leaves exactly 2 live | C09/S09. | watch |
| NOTE | Cues | Longest-key unique 14%; S10 slot 1 ratio 1.33, S01 1.24. | watch |

### Lesson 8: hyphens at line breaks -- CHANGES REQUIRED

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 8-S06 | Shows "coun- | ter" as a correct split. Merriam-Webster gives count·er (howmanysyllables agrees); pyphen does not hyphenate it. Defensible error plus the typographic "do not carry a two-letter syllable" rule. | Replace the word with an unambiguous one (e.g. one with an uncontroversial two-syllable split). |
| MUST | 8-C11 | Stem says "Two sentences in the report break a word ... incorrectly", but sentence 6 (tic- | ket, used by C12) is also wrong and is not in targets (visible but not selectable). | Fix sentence 6 or change the stem/targets. |
| SHOULD | 8-S11 | Same: "feathers" (sentence 8) is an extra error outside targets. | Same fix. |
| SHOULD | Twin overlap | Author log claims about 0.38-0.44; my set/multiset Jaccard (incl. match/ebsr/hottext): S05/C05 0.71/0.75 (Part B options reused almost verbatim), S13/C13 0.73/0.65, S14/C14 0.56, S02/P4 0.50/0.53, S03/C03 0.50, S15/C15 0.53. Core/test: P3/T4 0.53/0.61, S01/T4 0.47/0.54. | Rewrite option sets so twins share <=0.40. |
| SHOULD | Teach/Learn | Teach examples cup-cake, moth-er, bright/school are used as keys (C10 slot 2, S09, P2/P3). Learn It has no digraph (ck/th), compound-word or hyphen-at-start examples. The "leaves a single letter alone" hint rule (C08, S08, S15 h3) is not taught. | Swap examples; add the missing rules. |
| SHOULD | 8-P1 | The only "Yes" option is the key (structural cue). | Add a second Yes or restructure. |
| NOTE | Typography | Typographic guides say not to carry a two-letter syllable. Keys or distractors buck-et, tick-et, moth-er, wash-er, pitch-er, rock-et touch this; the lesson rules are syllable-based, so acceptable if Teach states it. | Teach note. |
| NOTE | 8-C13 | "lan and tern": tern is a real word. | ok |
| NOTE | Cues | Longest-key unique 0% (many ties). Domains thin (family x2). | none |
| NOTE | Verified splits | cush-ion, min-now, bon-fire, mon-key, lan-tern, feath-er(s) confirmed by dictionary or syllable pages; rest by pyphen only. | none |

### Cross-lesson notes

- Concept duplicates over all js/data: no whole-item duplicate found; the near-duplicates are the frames listed above (L5 T5, L7 P5/P2, L6 P4).
- The original P1-P5 and the tests were not changed by the author, so P*/T* findings are on legacy items.
- Word-match cue: key has strictly highest overlap in 2 of 56 sets, no margin >=0.25. Not a concern.
- The check-content gate misses the 7-S05 Part B flag error; a key-text-in-why/how check (flag when the keyed option text does not appear in why/how) would catch it.

---

## First review (lessons 1-4)

**Role:** independent content reviewer (blind solver). I did not write these lessons. I read the author log only after my blind answers were saved.
**Scope:** the first four lessons in `js/data/lessons/L-GUM3.js` order: (1) apostrophes `...use-apostrophes-in-contractions-and-singular-pos`, (2) irregular plurals, (3) irregular past-tense verbs, (4) coordinating conjunctions `...use-coordinating-conjunctions-to-join-words-phra`. For each: core (fifteen, refs resolved), similar S01 to S15, Together P-items, Test A and Test B, passages, Learn It, Watch Me, addons.
**Read-only.** I changed no lesson or code file and ran no git. I worked on a frozen copy of the worktree (`scratchpad/frozen`) taken before I started, so the other author's edits in F-PF.js did not affect me. The only repo file I wrote is this one. The test server ran on port 8793 (pid 26044) and was killed by pid.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 1 Apostrophes | **CHANGES REQUIRED** | 1 | 5 | 5 |
| 2 Irregular plurals | **CHANGES REQUIRED** | 5 | 6 | 4 |
| 3 Irregular past tense | **CHANGES REQUIRED** | 1 | 4 | 3 |
| 4 Coordinating conjunctions | **CHANGES REQUIRED** | 3 | 4 | 4 |

The content is generally sound: grammar keys agree with my independent answers on all but one item, the passages read well, and the browser run was clean. The MUSTs are one wrong answer key (L2 S05), hint ladders that name or collapse to the key, and core items that reuse Watch Me or Learn It sentences. All are small edits.

### 1. Blind solve

- **Method.**
  - `scratchpad/load.js` loads `L-GUM3.js` in a Node `vm` sandbox with a mock `PP.addLesson`.
  - `scratchpad/blind.js` prints each lesson's six passages, then every core item (resolving `{ref}`), S01 to S15, the Together items, Test A and Test B. It uses a whitelist of fields: id, type, points, passage ids, stem, prompt, choices (text only), dropdown text and options, hot-text targets or options, order steps, match rows and columns, pick count.
  - Choices, options, hot-text options and order steps are shuffled with a seeded LCG (`1000 + 77 * lessonIndex`). The permutations went to `hidden-perm.json`, which I did not open until the answers were saved.
  - The output `blind.txt` has no `correct`, `answer`, `why`, `hints`, `how`, `clue`, `like` or `misconception`. I grepped it for those words before reading. The only hits were ordinary words inside prompts ("correctly", "correct revision").
  - I wrote answers to `ans1.txt` to `ans4.txt` lesson by lesson, then ran `cmp.js` to un-shuffle and compare.
- **Items solved: 163.** That is 60 core (53 inline plus 7 refs to P4/P5), 60 similar, 13 Together, and 30 test items (Test A: L1 5, L2 5, L3 5, L4 5; Test B: L2 5, L3 5).
- **Agreement: 161 of 163 (98.8%).**
  - **L4 P5 (ref, core set 1).** My error. I mislettered an `ms` answer (wrote B,C for the shuffled sentences; the right pair was the shuffled A,B). The key (`I was hungry, so I ate a banana.` and `Hana can play the piano and the drums.`) is correct and defensible. I count this as a solver slip, not a content fault.
  - **L2 S05 (ebsr).** A genuine key error. The item is MUST-1 under Lesson 2.
- **Was it fully blind?** Yes for every item. What I printed or read before solving: the top-level lesson field names (`code, title, teach, learn, parent, passages, practice, core, similar, addons, test, testB`), the field names of `core` (`rev, sets`), `teach`/`learn`, the addons ids, item counts, the SPEC §5 schema and plan §4. I never printed an item's keys, hints or source text before the answers were saved. After saving I extracted keys with `cmp.js` and printed them only for the two mismatches, then read the author log and the full keyed dump.
- **Close calls (all defensible, none a defect).**
  - L4 C06: `but` versus `for` ("Luis wanted a new book, for he did not have enough money" reads backward, so `but` is the only sensible one).
  - L4 S08 row 3: `so` versus `for` (see SHOULD-L4-2).
  - L4 C10 and S10: `yet` versus `so`. `so` is weak, `yet` is clearly better.
  - L1 C06: `Mom's` and `moon's` are tempting only if the child confuses belonging with a contraction. This is the intended contrast.

### 2. Cross-cutting checks (all four lessons)

- **Structure (plan §4.2 to §4.4).**
  - mc count per core fifteen: L1 **6** (at the cap, allowed), L2 4, L3 4, L4 5. Formats per fifteen: five or six, at least three technology-enhanced in each. DOK: no DOK 1; DOK 3 count 5, 4, 3, 2 (language lessons need one). Core points: 21, 22, 23, 22. Every choose-two, two-slot dropdown, ebsr and match item is 2 points, and every hot-text pick-two is 2 points.
  - Items inside a numbered draft: L1 8, L2 7, L3 7, L4 7 (minimum five). No single text carries more than four of the fifteen (cap seven). Three or more texts per lesson. At least four context domains per lesson (school, family, community, nature, sports, everyday).
  - Every core item has a twin by `like`; all 15 twin types and sub-skills line up (checked against the item content, not only the ids).
- **Passages.** `verification/readability.py` on my frozen copy: all 24 passages in lessons 1 to 4 are at or above 100 words and at most FK 4.0 (L1 p4 4.0, L2 p4 3.8, others 1.0 to 3.2). Ceiling 4.5: pass. Numbering: draft sentences are numbered (1) to (12) with sentence refs that match the targets. I confirmed in the browser that all 31 passage-bearing core items open the right passage in the "Read the passage" tab.
- **Gate.** `check-content.js --all` on the frozen copy reports 0 failures and no warnings for L1 to L4 except "hint 1 is much longer than hint 3" on L2 (7 items), L3 (8) and L4 (P4). The other FAIL lines in my run came from my copy lacking figure files, and from F-PF.js; they are not about these lessons. **The gate did not catch L2 S05**, where the keys contradict `why` and `how`. A cheap new rule would be: `why` must contain the text of the keyed option(s) for mc, ms and ebsr.
- **Longest-key cue, measured over all slots, parts and choose-two keys** (`longest.js`; 139 slots in lessons 1 to 4).
  - Single-key slot with the key uniquely longest: L1 3 of 35 (C15 107/103 chars, S10 99/88, T1 slot 2 6/5), L2 1 of 32 (TB3 5/6/4), L3 3 of 38 (C05 Part B 77/68, S05 Part B 70/68, P2 46/45), L4 4 of 34 (C12 31/40/39/44, plus three one-word dropdown slots at 2/3/2).
  - choose-two with both keys the two longest: L2 S13 only, and by 20/17/20/19/19 chars, which is no cue.
  - The author log says "no key is uniquely longest". That is not strictly true for these four lessons, but the rate (about 9 percent of slots, with chance at 25 percent) is below chance and the largest margin is 13 percent (L3 C05 Part B, 77 vs 68). **NOTE only.**
- **Key position.** The authored order is not a cue, because the engine shuffles choices per sitting; I confirmed the shuffle in the browser. In the data, Test A mc keys sit at index 0 in L1 (3 of 3), L2, L3 (4 of 4) and L4, and L2/L3 core dropdowns have the key at index 1 in 10 of 10 slots. This is harmless only because of the shuffle (NOTE).
- **Twin overlap, word-set Jaccard / multiset (bag) Jaccard** between each S item and its `like` target, over prompt, stem, text, choices, slot options, match rows and columns, and the sentences a hot-text item targets (`jac.js`).
  - Worst pairs: L1 S15/C15 0.35/0.34; L2 S10/C10 0.38/0.41 (match, same four-column structure); L3 S05/C05 0.38/0.35; L4 **S13/C13 0.48 (set) and 0.31 (bag)**, and L4 S15/C15 0.39/0.39. Typical pairs are 0.15 to 0.35.
  - The author's "up to 0.41" is right for L2; **L4 S13 is the outlier at 0.48 on the set measure.** See NOTE-L4-3.
- **Duplicates and leaks.**
  - Verbatim sentences across items (`dups.js`): the only cross-category repeat is **L2 S09 option D = Test A T5 option 1** ("My baby sister has four new tooths."). SHOULD-L2-5. Everything else is a draft item quoting its own passage, which is by design.
  - Verbatim against all other `js/data` files (`xfile.js`): only "one mouse, two mice" (L-GRM-01), "We are going to the zoo." (L-GUM2, in the L1 Watch Me), and "adds one more thing" (T-RA, T-SS). Not a problem; NOTE-L1-5.
  - **Same standard code in other files.** L-GRM-01, L-GRM-02 and PT-1 each carry one to two items for these four codes (for example L-GRM-01-1 goose/geese, L-GRM-02-2 We're / Grandma's). Their frames ("Choose the word that correctly completes the sentence", "Which sentence is correct?") match the Together items here. Nothing is repeated word for word, so no change is needed.
  - **Concept overlap with other GUM lessons** (L-GUM1 "Making plurals with -s or -es", "Verb endings -s, -ed and -ing"; L-GUM2 "Verb tenses", "Plurals that change y to ies", "Pronouns: ... owning"; L-GUM5 "Apostrophes for more than one owner"; L-GC2 "Complete sentences: simple, compound and complex"). They are different skills at different levels. L-GC2 uses the same joining words to build compound sentences, so L4 will feel familiar there; that is acceptable.
  - **Passage topics (`topic` scan across `js/data`).** No same-fact reuse. Shared settings only: L2 p3/p6 and L1 p3 share the sentences "We hope to see you there!" and "Bring a friend, and bring a smile" (L1 p6, L2 p6, cosmetic). L4 p6 "Snow Cone Stand" shares a theme with L-GC2 "Snow Cone Day with Grandpa"; L4 p5 scarecrow with L-V12 "The Scarecrow"; L3 p5 hamster with T-T1 (Peanut). Different facts and sentences. NOTE-L3-3.
- **Browser, 390 x 844, touch, all core items, real controls** (`run390.py`, Playwright). Per lesson: sets y, y2 and y3, all fifteen items. For each item the script pressed Give me a hint three times, answered with a real click or `select_option` (choices, hot-text sentences, dropdowns, match buttons, ebsr both parts), pressed Check my answer, then pressed Show me how.
  - Result: **60 of 60 core items accepted the key as "That's right!"**, the hint button read "No more hints" after the third press, Show me how after a correct answer showed "You already had this one right" plus the steps. `document.documentElement.scrollWidth` was 390 (no horizontal scroll) on every item. Every choice, hot-text, match and select control was at least 40 px tall and inside the viewport. No page errors in any of the four lessons.
  - On a phone, an item with a passage shows two tabs ("Read the passage", "Question"), so the child must press Question to see the choices. That is existing engine behavior; I note it only because eight of fifteen L1 items depend on the draft (NOTE-L1-1).
  - Screenshots: `scratchpad/shot-L1-1-P4.png`, `shot-L2-2-P4.png`, `shot-L3-3-P4.png`, `shot-L4-4-P5.png`. The wording "so so fits" in L4 P5's Show me how reads awkwardly at that width (NOTE-L4-2).
- **Web checks** (author did not check contractions, irregular plurals, irregular past tense; comma rules not in my lessons).
  - Apostrophes. https://owl.purdue.edu/owl/general_writing/punctuation/apostrophe_introduction.html (fetched): contraction apostrophe marks omitted letters ("don't"); singular possessive adds 's; "It's is a contraction for it is and its is a possessive pronoun"; apostrophes are not used for noun plurals. This supports L1 keys (won't, wasn't, can't, mascot's, player's, its/it's, stars not star's).
  - Irregular plurals. https://www.wiktionary.com/wiki/bison (fetched): plural "bison", with "bisons" labeled "chiefly dated". https://www.merriam-webster.com/simple/bison (fetched): plural bison, "bisons" also accepted. Search snippet (reword.org.ru, Oxford wording, "noun (plural deer; also deers)", URL https://reword.org.ru/online/DEER/wc-26910 not fetched, it redirected): deers is a listed variant. https://businesswritingblog.com/grammar-usage/what-is-the-plural-of-moose-dont-make-a-meese-take/ (fetched): moose plural is moose, "mooses" never standard; deer is a zero plural. The L2 keys for moose, sheep and the -ves, -men, -en nouns are fine; the bison and deer items are discussed in SHOULD-L2-3.
  - Irregular past tense. https://www.woodwardenglish.com/lesson/101-irregular-verbs-past-tense-english/ (fetched): shut/shut, cut/cut, hit/hit, sink/sank, forgive/forgave, bleed/bled, lend/lent, spend/spent, strike/struck, swim/swam, bring/brought, throw/threw, hear/heard, say/said, pay/paid, build/built, leave/left, meet/met, stick/stuck, feed/fed, tear/tore, hurt/hurt, wake/woke, slide/slid, sell/sold, freeze/froze, lead/led, think/thought, keep/kept. https://human.libretexts.org/Courses/Coalinga_College/ESL%3A_Beginning_Reading_and_Writing_(ESL130)/01%3A_List_of_Irregular_Verbs_in_English (fetched): creep/crept, weep/wept, mean/meant, steal/stole, spring/sprang, swing/swung, bend/bent, shoot/shot; it lists "waked" as a regular alternative for wake, which none of the options use. All L3 keys check out.
  - Conjunctions. https://prowritingaid.com/Coordinating-Conjunctions (fetched): "for" explains a reason, like because (many writers now prefer because); "nor" expresses negation, both expressions should be negative, reverse the verb order in the second clause ("nor did he"); "yet" shows contrast and surprise; "so" shows effect. https://www.twinkl.com/teaching-wiki/fanboys (fetched): the seven FANBOYS. These support every L4 key, including the nor items (all have a negative first clause plus "nor did/would/was").
  - Official wording, `standards.js` and `official-gr3-gum.json`: "Use apostrophes to form contractions and singular possessive nouns."; "Form and use irregular plural nouns."; "Form and use the past tense of irregular verbs."; "Use coordinating conjunctions to join words, phrases, or clauses." (all page 16, grade 3 Master).

### 3. Lesson 1: Apostrophes (verdict: CHANGES REQUIRED)

**What is good.** Every key is correct and the distractors are real apostrophe errors (wo'nt, wont', will'nt, players's, hat's, frog's, prize's). The set 1 to 3 progression (contraction, then possessive, then its/it's, then 's = is) is well ordered. Draft sentences are plausible third-grade writing. All 15 twins are honest `like` mappings. The browser run was clean.

**MUST**
- **MUST-L1-1: SK-GUM3-1-C13 and SK-GUM3-1-S13 (mc). Hints 2 and 3 together leave one live choice.**
  - Options after the engine shuffle: `players' hat`, `player's hat's`, `player's hat`, `players's hat`.
  - Hint 2 states the deciding fact: "Look at the word each ... Ask whether it points to one player at a time or to a whole group at once." That removes `players'` and `players's` (both plural forms).
  - Hint 3 then says: "Adding two apostrophes to the same sentence is not a fix. Check what the other choices do to the word hat." That removes `hat's`.
  - Live choices after hints 1 to 3: **1**, which breaks the "at least two live, never narrows to the key" rule (plan §4.5, rule 3).
  - Fix: keep hint 2 as a pointer (for example "Reread the sentence. What word tells you how many players are meant?") and make hint 3 remove only one option, for example "A word that already has -s on the end does not need another 's after it. Decide among the rest." S13 needs the same edit, with "student". Hint 3 may remove one distractor, not two.
- Not MUST: C07 Part A and S07 Part B are borderline (hint 3 removes one option, hints 1 and 2 describe the it-is test that removes the others). I count them as passing because hint 3 alone leaves three live choices and the child still has to run the test. See NOTE-L1-3.

**SHOULD**
- **SHOULD-L1-1: C08 and C10 give each other away inside set 2.** C10's key says "`star's` only means more than one, so it needs no apostrophe". C08's key includes "In sentence 5, change star's to stars." Both are in set 2 on the same draft (p2), so the child who has done C10 knows C08's answer. Also C07's prompt says "Sentence 6 of the draft has a mistake with an apostrophe", which tells the child that the `it's lights` sentence in C06 (a distractor, p2:2:3) is wrong. Fix: change C10's second word to a different sentence word (for example one from sentence 7 or 9), or move C10 to a different draft. This is a set-giveaway finding, so I rate it SHOULD, not MUST, because the child can still reason each item out; the plan wants no giveaways inside a set, so fix it with the MUST.
- **SHOULD-L1-2: C12 `how` step 3 has copied text.** "Check the other options: are'nt and ca'nt put the apostrophe in the wrong place, and arent and cant leave it out." `ca'nt` and `cant` are not options here (the options are aren't, are'nt, arent / hasn't, has'nt, hasnt). The words belong to Test T1. Fix: "are'nt and has'nt ... arent and hasnt".
- **SHOULD-L1-3: Test items answered by Learn It.** T3 ("Which word is the contraction for will not?", key won't) is teach point 2 verbatim ("Will not becomes won't"). T1 slot 1 (key can't) is the Learn It example ("Can't is short for cannot"). Plan SPEC §8: the test must use different material than Learn It and Practice so a pass is not recall. Fix: change T3 to a contraction not in Learn It (for example shouldn't or they've) and T1 slot 1 to wasn't or isn't.
- **SHOULD-L1-4: S10 hint 3 nearly states the key.** "Sentence 4 tells you that there is more than one watermelon. Use that to check what watermelon's means in sentence 5." The key says "watermelon's only counts the melons". Fix: "Sentence 4 tells you how many watermelons there are. Check whether anything in sentence 5 belongs to them."
- **SHOULD-L1-5: C11 hint 2 states a feature of the key.** "Some words have an apostrophe, and one word is missing its apostrophe." That tells the child that one key sentence is the missing-apostrophe sentence (sentence 4, `Dont`). Hint 2 may point to where to look, not how many errors of which kind. Fix: "Look at sentences 4 to 9 and check each word that has an apostrophe, and each word that should."

**NOTE**
- NOTE-L1-1: eight of fifteen items depend on drafts p1 to p3. That meets the draft rule (five), and the phone tab switch works.
- NOTE-L1-2: scope. The official row is contractions and singular possessive nouns. Items on its/it's (C05, C07, S05, S07, P1, Test T2 option D) and you're/they're (C14, S14) use the contraction idea correctly (OWL), but `its` is a possessive pronoun, so about a fifth of the lesson tests something the official wording does not name. Acceptable; the L-GUM2 pronoun lesson also covers `its`. Keep it at two core items or fewer.
- NOTE-L1-3: C07 Part A and S07 Part B hints 1 and 2 walk the child through "it is" substitution, so the child can drop the wrong choices by procedure. That is the intended strategy, not a leak.
- NOTE-L1-4: C04 misconception line is confusing ("leaving off the apostrophe because the word already ends in s once you add it"). Suggest: "A common mix-up is stopping at mascots, because the word already ends in s."
- NOTE-L1-5: Watch Me 1 ("We are going to the zoo.") is an existing sentence in L-GUM2. Harmless, but vary it if the file is touched. Watch Me does not model the `'s` = `is` case that C15/S15 (DOK 3) test; Learn It teach point 3 does. A fourth Watch Me is not needed, but the point 3 wording should stay.

### 4. Lesson 2: Irregular plurals (verdict: CHANGES REQUIRED)

**What is good.** Strong spread of patterns (vowel change, -en, f to v, zero plural, -men). The "rule-breaking examples" items (C13, S13) and "same pattern" items (C08, S08) are real DOK 3 thinking. The distractors are exactly the child errors (childs, childrens, mices, geeses, policemens).

**MUST**
- **MUST-L2-1: SK-GUM3-2-S05 (ebsr). Both answer keys are on the wrong choices.**
  - Part A has `correct: true` on "In the forest exhibit, two **wolfs** slept in the shade." Part B has `correct: true` on "Wolf is a noun that never changes, so the plural looks just like the singular."
  - The `why`, `how` and `misconception` all say the answer is **wolves** and "an f like this changes to v ... as in elf and elves". My blind answer was wolves / the f-to-v reason, and the key disagrees.
  - Effect: a child who answers correctly scores 0 on this item, and Show me how contradicts the scored answer. It is a twin of C05 (lives), so a child who learns the pattern from C05 is penalized.
  - Fix: move `correct: true` to "two wolves" (Part A) and to "Wolf ends in f, and an f like this changes to v ... as in elf and elves" (Part B). Then add the gate rule noted in section 2 so this cannot recur.
- **MUST-L2-2: SK-GUM3-2-S14 (mc). Hint 3 states the key word.** "Children already shows more than one. Check what the other choices add or take away." `children` is the key word. It also names the key sentence's decisive word to a reader who has not seen the choices. Fix: "Look at the other choices. One adds a letter that does not belong, one is not a word, and one is for only one child."
- **MUST-L2-3: SK-GUM3-2-C14 and S14 (mc). Hint 1 narrows the options to the key, and hint 3 removes the rest.** Hint 1: "Some nouns add letters at the end that are not -s or -es." Of the four options (oxen, oxes, oxs, ox), only `oxen` adds letters other than -s or -es. After hint 1 only `oxen` is left, and hint 3 ("The ox is for only one animal") removes `ox`. Live choices after hints: 1. Hint 1 must not narrow (plan §4.5, rule 1). Fix for both: hint 1 "Say the noun for one, then say it for more than one, the way you would say it aloud." Hint 3 may say that `ox` names one animal.
- **MUST-L2-4: SK-GUM3-2-P5 (core set 1, ref). Hint 2 names the key word.** Hint 2 reads "In the first, the children on the trip are more than one." The key for blank 1 is `children`. Fix: "In the first blank, the sentence says more than one child went on the trip. Say the noun for one, then change it." (still names no spelled form). Also see MUST-L2-5.
- **MUST-L2-5: P5 repeats the Watch Me 1 frame and key.** Watch Me 1: "Five (mouses / mice) ran under the barn door." P5: "...laughed when two {mice} ran across the barn floor." Same key (mice), same verb, same place (barn). Plan §4.3 rule 4 forbids paraphrasing a Watch Me example in practice. Fix: change the P5 second slot to another noun (teeth, geese or men) and its scene, or change Watch Me 1 to a different noun. Changing P5 also fixes a second problem: P5's keys (children, mice) are both Learn It teach-point words.

**SHOULD**
- **SHOULD-L2-1: Test A T4 is Learn It teach point 3, copied.** The match T4 rows are person/people, ox/oxen, wolf/wolves, knife/knives, exactly the four nouns named in teach point 3. The test must not be answerable from Learn It (SPEC §8). Also Test B TB3 (key `loaves`, options loaves/loaf/loafs) is the Watch Me 3 word triple ("six warm (loafs / loaves)"). Fix: replace the T4 rows with nouns Learn It does not name (for example shelf/shelves, half/halves, life/lives, woman/women), and give TB3 a different noun (for example leaf/leaves is in neither Watch Me nor the core keys except C03, so use hoof or scarf only if the lesson also teaches the f-to-v pattern, or use thief/thieves).
- **SHOULD-L2-2: C13 rule item and its hints.** Fine as written. But hint 1 for C07, C11 and S04 is very long next to hint 3 (the gate warns). Keep hint 1 to one sentence.
- **SHOULD-L2-3: bison and deer items rest on variants.** Merriam-Webster's simple entry and Wiktionary both list `bisons` as an accepted (dated) plural (see URLs). S04 (hot text, key sentence "five bisons") and S09 and S15 (bison as the correct zero plural; fine) treat `bisons` as an error. Oxford wording shows `deers` as a variant, which C07 (key "four deers") treats as an error. The safest set for a third grader is sheep, moose, fish and deer as the correct zero plurals; as an error, use `sheeps` and `mooses` (never standard). Fix: change S04's wrong plural from `bisons` to `sheeps` or `mooses`, and C07's from `deers` to `sheeps`, or accept the minor risk and mark the key sentence as "the plural that should stay the same" (which is true).
- **SHOULD-L2-4: Learn It does not teach `bison`, `salmon` or the -man compounds.** Teach lists sheep, deer, moose as zero plurals. S04, S09, S15 and TB4 use bison and salmon; C09, C12, S12, T1 and TB1 use -man compounds (mailmen, policemen, snowmen, fishermans). A child can reason from "man to men" but not from the list. Fix: add `fish` or `bison` to teach point 4 and "-man changes to -men: snowman, snowmen" to point 2.
- **SHOULD-L2-5: S09 option D equals Test A T5 option 1.** "My baby sister has four new tooths." appears in both. A sentence from the check must not be in practice. Fix: change S09 D to another tooth sentence ("My little brother lost three tooths.") or another noun.
- **SHOULD-L2-6: C12 and S12 are word swaps.** Frames, option order logic and hints are identical (policemen vs women). Acceptable for a twin but they differ only by noun. Prefer a different frame for one of them (a dropdown inside a two-sentence stem).

**NOTE**
- NOTE-L2-1: C10 and S10 are match items whose columns hold the answers. Each column is used once, so one wrong row breaks two rows (2 points = all right, 1 = all but two). Fine.
- NOTE-L2-2: "policeman" and "mailman" are traditional forms; "police officer" and "mail carrier" are current. The standard is about -man to -men, and these are common words, so keep them.
- NOTE-L2-3: Test A and Test B are close forms of each other (mc, ms, dropdown, match, hot text in the same order). No shared sentence or noun except in the pairs noted above.
- NOTE-L2-4: p1 and p2 share a "rode a bus to a park / watched animals" register with L3 p4 (hike); no shared facts.

### 5. Lesson 3: Irregular past tense (verdict: CHANGES REQUIRED)

**What is good.** Keys are right (all checked against the verb lists above). The mix of -ed errors ("builded", "forgived"), present-tense distractors and the "unchanged past" verbs (cut, hit, hurt, shut) is a good coverage of the standard. Items with passages use time clues that really are in the draft.

**MUST**
- **MUST-L3-1: SK-GUM3-3-P5 (core set 1, ref) slot 1 and SK-GUM3-3-S02 slot 2. Hints 1 and 3 together leave one live option.**
  - P5 blank 1 options: rided / rode / rides. Hint 1 says "Neither verb adds -ed." (removes `rided`). Hint 3 says "Rides tells about now. Decide the rest." (removes `rides`). Live: `rode` only.
  - S02 blank 2 options: went / goed / goes. Hint 1 "Neither verb adds -ed" removes `goed`; hint 3 "Goes tells about now" removes `goes`. Live: `went` only.
  - Hint 1 narrows (it must not), and hints 1 plus 3 leave a single choice in a slot.
  - Fix: hint 1 for both: "Last Saturday already happened, so both verbs must tell about the past." (drop "Neither verb adds -ed", which is also the rule the item is testing). Keep hint 3 as the one elimination.

**SHOULD**
- **SHOULD-L3-1: Learn It pre-answers four keys.** The title is "went, ran and caught", and teach point 3 lists "run becomes ran, eat becomes ate, see becomes saw, and catch becomes caught". Keys that repeat these: P5 saw, C03 ran, S02 went, S10 caught. They are answerable from Learn It without reading the sentence. The lesson needs some listed verbs (it is a memorised-forms standard) but core keys should mostly be verbs not listed. Fix: change C03 and S10 to verbs that are not in Learn It (for example blow/blew, draw/drew, fly/flew, give/gave; swim/swam is already the Learn It example and ride/rode is P5), and keep one or two listed verbs for confidence.
- **SHOULD-L3-2: Watch Me covers only throw and bring.** The core and test items use more than twenty other verbs (slide, sell, cut, sink, spring, swing, bend, shoot, creep, steal, weep, bleed, strike, forgive...). There is no Watch Me on the "unchanged past" group (cut, hit, shut, hurt), which shows up in C10 (cut), C13 (hurt), S14 (shut). Fix: change Watch Me 2 or add a third example with `cut` or `hurt`.
- **SHOULD-L3-3: C05 Part B hint 2 points to the key's category.** "For Part B, think about what kind of verb think is." The key option begins "Think is irregular". Hint 2 may point to where to look; this says which category. Fix: "For Part B, think about whether `thinked` follows the pattern most verbs follow, and what the correct word looks like."
- **SHOULD-L3-4: C09 and S09 are word-list items and weaker than the rest.** "Which list has only verbs that change into a new word?" tests recall of lists. It holds at DOK 3 because every verb in a list must be tested. S09's list "pay, say, hear" asks the child to treat paid, said and heard (a final d sound) as "never adds -ed". The spellings differ from -ed, so the key is right, but it is the point most likely to confuse a third grader. Consider swapping `hear` for `sit` or `run`.

**NOTE**
- NOTE-L3-1: gate warning "hint 1 much longer than hint 3" on eight items (P1, P2, P5, C07, C10, S02, S07, S10, S14). The ladder still reads correctly. Shorten hint 1 where convenient.
- NOTE-L3-2: S12 uses `I knew it was hard to do` in p6, the same sentence as the passage's own error repair. It is a draft edit by design.
- NOTE-L3-3: p5 "My Hamster Biscuit" shares a theme with T-T1 (a hamster story), p4 "Hike to the Waterfall" with T-RA, p2 "Trampoline" with T-TS. No shared facts or sentences.

### 6. Lesson 4: Coordinating conjunctions (verdict: CHANGES REQUIRED)

**What is good.** The best-designed lesson of the four. Cause/surprise/choice are separated cleanly, nor items all have a negative first clause plus subject-verb inversion (confirmed against ProWritingAid), and C12 and S12 test the clause level of the standard. The keys are correct.

**MUST**
- **MUST-L4-1: SK-GUM3-4-C08 repeats the Watch Me 3 and Learn It examples.**
  - Row 1 "The hill was steep, ___ we climbed it." (key yet) is Watch Me 3 ("The hill was steep, (yet / so) we climbed all the way to the top.") with the same key.
  - Row 2 "Ana did not call, ___ did she write." (key nor) restates teach point 5 ("I did not call, nor did I write.").
  - Plan §4.3 rule 4 and the SPEC test rule forbid this. Fix: replace the two rows with new sentences (for example "The path was muddy, ___ we kept going" and "Tomas did not wave, ___ did he smile"), and keep S08's structure.
- **MUST-L4-2: SK-GUM3-4-C04 Part B hint 2 and SK-GUM3-4-S04 Part B hint 2 paraphrase the key.**
  - C04 Part B hint 2: "look for a sentence about how the place will be decided". The key is "Mr. Lee will pick only one place on Friday." The three distractors are unrelated draft sentences ("We breathed slowly...", "At first I felt silly...", "Yoga is fun..."), so the hint leaves one option.
  - S04 Part B hint 2: "look for a sentence about how many ropes a member needs". Key: "You only need one rope, so choose the one you like."
  - Hint 2 may say where to look but must not name or paraphrase the key (plan §4.5, rule 2), and here it also leaves one live choice. Fix: hint 2 for Part B: "Reread the first part of the draft and decide which sentence tells you something about choosing." and make the Part B distractors plausible (for example sentences that also name two ideas but not a choice).
- **MUST-L4-3: ebsr Part B in C04 and S04 has three implausible distractors.** This is the same weak-distractor fault plan §4.8 lists. Even with a better hint, the child can answer Part B by finding the one sentence that mentions the topic of Part A. Fix: use three sentences that also contain a joining word (and, but, so) from the same draft, so the child has to decide which one supports "choice".

**SHOULD**
- **SHOULD-L4-1: C09 follows the Learn It example frame.** Teach example: "I wanted to go swimming, but the pool was closed." C09: "I wanted to draw a huge whale, but the sidewalk square was too small, so I drew a small one." The first clause and conjunction are parallel. Change the opening ("The class wanted a picnic, but...") to avoid a one-to-one frame with Learn It.
- **SHOULD-L4-2: S08 row 3 is ambiguous.** "Pam was late, ___ she missed the bus." `so` (late, so missed) is the key. `for` ("Pam was late, for she missed the bus", she was late because she missed the bus) is as natural. The one-to-one match saves the item (row 2 "Take a snack, ___ the trip is long" can only be `for`), but a child who reads row 3 first can place `for` there and the rest breaks. Fix: "Pam was sick, ___ she stayed in bed." (so).
- **SHOULD-L4-3: C13 depends on `for`.** "Carlos put on a coat, for he was cold" is correct usage, but `for` as a conjunction is formal, and ProWritingAid notes many writers now prefer because. A grade 3 child is more likely to choose a wrong `so` here. It is a fine DOK 3 item for teaching the `for/so` switch; keep it only if `for` is meant to be tested (Learn It names it). Consider leaving `for` as a recognition item (C05, S05) and using only `so`/`but` in the reverse-order twin.
- **SHOULD-L4-4: Together P5 hint 3 reasons from a distractor.** "A coat is not a reason to leave it at home when it is cold." That removes one distractor (allowed), but it is the only distractor discussed. Fine; list here only because P5 is a core ref, and its why paragraph ("Leaving a coat at home when it is cold needs but") is a claim about the distractor, not the key.

**NOTE**
- NOTE-L4-1: the plan's weak-item list names SK-GUM3-4-P4 ("recall of definitions instead of use"). P4 (match each joining word to its job) is still in Together, unchanged. It does not enter core, so it is not blocking.
- NOTE-L4-2: Show me how for P5 reads "so so fits" and "and and". Rephrase ("The joining word so fits...").
- NOTE-L4-3: twin overlap L4 S13/C13 is 0.48 on the word-set measure, because both items are the same sentence with swapped nouns and the same four options (but, for, so, or). The reversal (key `for` in C13, key `so` in S13) is the thing that differs. Acceptable as a transfer twin, but the pair is close to "differs only by names".
- NOTE-L4-4: `nor` appears in C07, S07, C08, S08 and in distractors of C04 and S04, and `for` in C05, S05, C13 and as a match column. The standard lists coordinating conjunctions in general, but third graders mostly meet and, but, or, so; two rare words in roughly a third of the items is a lot. Not blocking.

### 7. Items checked clean (no finding)

L1: P4, P5, C03, C04, C05, C06, C07, C08, C09, C10, C11, C12 (except the `how` typo), C14, C15 and twins S01 to S09, S11, S12, S14, S15. L2: P4, C03 to C13 (except C07 hint length), C15, S01 to S04, S06 to S13, S15. L3: all core and twins except P5/S02/C05/S09 as noted. L4: C02, C03, C05, C06, C07, C09 to C15 and twins other than S04 and S08.

### 8. Files used (all in the scratchpad folder)

`/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/`: `load.js`, `blind.js`, `blind.txt`, `hidden-perm.json`, `ans1.txt` to `ans4.txt`, `cmp.js`, `dump.js` and `dump.txt` (full keyed dump used for the audits), `longest.js`, `jac.js`, `dups.js`, `xfile.js`, `keyaud.js`, `keyaud2.js`, `pre.js`, `run390.py` and `run390.txt`, `pass.py`, and the frozen copy `frozen/`.

---

## Second review (all eight lessons, 2026-10-27)

**Role:** independent reviewer, fresh eyes. I did not write the lessons and I did not take part in either first review. **Scope:** the eight GUM Master lessons in `js/data/lessons/L-GUM3.js` after the author's review fixes (commit 86e5daa, "awaiting second review"). **Read-only:** no lesson, set or engine file was edited and no git command was run. The only repo file I touched is this one (append). I worked on a frozen copy (`scratchpad/frozen`, `L-GUM3.js` byte-identical to the live file at the start). Test servers ran on ports 8761 and 8762 and were killed by pid.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 1 Apostrophes | **CHANGES REQUIRED** | 1 | 3 | 3 |
| 2 Irregular plurals | **CHANGES REQUIRED** | 6 | 5 | 2 |
| 3 Irregular past tense | **CHANGES REQUIRED** | 3 | 2 | 2 |
| 4 Coordinating conjunctions | **CHANGES REQUIRED** | 3 | 2 | 4 |
| 5 Collective and abstract nouns | **CHANGES REQUIRED** | 1 | 5 | 3 |
| 6 Reflexive pronouns | **CHANGES REQUIRED** | 2 | 4 | 2 |
| 7 Commas with and/but/or/so | **CHANGES REQUIRED** | 3 | 2 | 2 |
| 8 Hyphens at line breaks | **CHANGES REQUIRED** | 2 | 2 | 4 |

Nothing is ACCEPT yet, but every remaining fix is a small wording or data edit. Of the 16 earlier MUSTs (section 3), 13 are genuinely fixed in the files. Three are not (L4 C08, L4 C04/S04 Part B hint 2, L7 P2 hint 3), and two author-log claims are false in the files (L2 S04 "now uses sheeps", L4 P5 "so so fits" fixed). Lesson 8 now passes the twin-overlap ceiling; lessons 1 to 7 do not (ruling below).

### 1. Blind solve

- Same method as the brief: a Node `vm` loader, a seeded LCG shuffle (seed 4242 + 91 x lesson index) of choices, options and hot-text options, and a whitelist dump with no `correct`, `answer`, `why`, `hints`, `how`, `clue`, `like`, `misconception` or `sample`. Passages were printed in full. I grepped the dump for those field names before reading it. The shuffle map went to `hidden-perm.json`, which I did not open until the answers were saved to `ans-1..8.txt`.
- Solved blind: **315 items** (core 120 with refs resolved, similar 120, Together and Test A/B items 75).
- **Agreement with the keys: 315 of 315.** No wrong key. (My first compare run showed 34 mismatches on hot-text; that was my script comparing string targets as indices, fixed and rerun.)
- Fully blind except one caveat: before solving I printed the top-level lesson field names and the item field names to build the whitelist. I never printed an item's keys, hints, how or why before the answers were saved. The author log and both first reviews were read only after the answers were saved.
- Agreement does not mean no defects. The defects below are text, passage and hint problems, not wrong keys.

### 2. Ruling on twin overlap (set and multiset Jaccard, brief ceiling 0.21)

**Ruling: the ceiling is not met by lessons 1 to 7. Lesson 8 meets it. The first reviewers' "acceptable at about 0.40" has no basis in the brief; I do not follow it.** The B4 batch authors measured the same whole-text raw-token Jaccard, treated 0.21 as the ceiling, and fixed every pair above it. B6 is held to the same bar.

- Measure (`jac.js`): lower-case raw tokens (`/[a-z']+/g`) over prompt, stem, text, choices, slot options, match rows and columns, ebsr parts and the sentences a hot-text item targets; each similar item against its `like` core item. With the passage text added the numbers move by 0.00 to 0.04 (max withP: L1 0.35, L2 0.43, L3 0.32, L4 0.39, L5 0.35, L6 0.42, L7 0.42, L8 0.24).
- Pairs above 0.21 (either measure): L1 13 of 15, L2 13, L3 11, L4 13, L5 13, L6 15, L7 13, **L8 0**. Maximum per lesson, set / multiset: L1 0.37/0.36, L2 0.38/0.43, L3 0.38/0.35, L4 0.39/0.39, L5 0.40/0.41, L6 0.41/0.43, L7 0.42/0.46, **L8 0.21/0.21**. The author log's figures match mine; the author chose not to push lessons 1 to 7.
- **Severity.** Pairs at 0.30 or more on either measure are **MUST** (B4 precedent: same frame at 0.30 or more). That is 56 pairs:
  - L1: S05, S07, S08, S10, S15
  - L2: S02, S03, S06, S10, S12, S13
  - L3: S02, S03, S04, S05, S10, S12, S13, S14, S15
  - L4: S01, S04, S06, S07, S08, S09, S10, S15
  - L5: S02, S05, S07, S09, S10, S11, S13
  - L6: S02, S03, S04, S05, S06, S07, S08, S09, S11, S12, S13, S15
  - L7: S01, S03, S05, S06, S09, S10, S11, S12, S14
  - The worst: L7 S03/C03 0.41/0.46, L6 S03/C03 0.39/0.43, L2 S02/P5 0.35/0.43 and S10/C10 0.38/0.41, L5 S05/C05 0.40/0.41, L7 S14/C14 0.42/0.39, L6 S12/C12 0.41, L6 S13/C13 0.42 multiset.
  - The other 35 pairs between 0.22 and 0.29 are **SHOULD**.
- **Shared exact options** (project bar: at most one). Pairs sharing two or more: L2 S02/P5 (3); L4 S02/C02 (3), S09/C09 (3), S14/C14 (2), S15/C15 (4); L6 S02/P5 (4), S03/C03 (3), S10/C10 (4), S14/C14 (2); L7 S03/C03 (3), S10/C10 (6), S14/C14 (3). For the and/but/or/so dropdowns in L4 some sharing is unavoidable (four fixed words); for L6 S10/C10 and L7 S10/C10 it is not. These are inside the same MUST.
- **Why this is a light edit, not a rewrite.** With stop words removed (`jac_cw.js`) the maximum content-word overlap is 0.27 (L6), and no lesson has a pair at 0.30. So there is no near-copy of content. Almost all the overlap is stock frame words ("Choose the word that correctly completes the sentence", "Sentence N of the draft ...", "Which revision fixes it?") and shared stock options. **Fix:** vary the prompt wording per twin, change the frame word order, and do not reuse the same distractor strings; the distinctness rule (plan section 6, two of four ways) is already met on content.

### 3. Earlier MUSTs: genuinely fixed in the files?

| Earlier MUST | In the files now | Result |
|---|---|---|
| L1-1 C13/S13 hints 2-3 leave one live | H2 is a pointer ("which word tells you how many"); H3 removes only `players's`; three live | FIXED |
| L2-1 S05 keys on wrong choices | keys on `wolves` and the f-to-v reason; matches how/why | FIXED (but see new L2 M3: Part B hint 2) |
| L2-2 S14 hint 3 names `children` | now "One of the choices names only one child" | FIXED |
| L2-3 C14/S14 hint 1 narrows to `oxen` | H1 "say the noun for one, then more than one" | FIXED |
| L2-4 P5 hint 2 names key | "ask how many went on the trip" | FIXED |
| L2-5 P5 repeats Watch Me 1 (mice) | slot 2 is now geese/goose | FIXED for the Watch Me collision (geese and children are still Learn It words: SHOULD) |
| L3-1 P5/S02 hint 1 narrows | H1 now "Last Saturday/night already happened"; H3 removes one; two live | FIXED |
| L4-1 C08 repeats Watch Me 3 / Learn It | rows replaced, but row 1 "The path was muddy, ___ we kept going" (yet) is the Watch Me 3 frame "The hill was steep, yet we climbed ..." and row 2 "Tomas did not wave, ___ did he smile" (nor) is the Learn It frame "I did not call, nor did I write" | **NOT FIXED** (L4 M1) |
| L4-2 C04/S04 Part B hint 2 paraphrases key | now "decide which sentence tells you something about choosing"; only one option mentions choosing | **NOT FIXED** (L4 M2). The first reviewer's own suggested wording is the cause; it still leaves one live choice. |
| L4-3 Part B distractors implausible | distractors are now draft sentences that carry joining words | FIXED |
| L5 S06 stale "committee" | hint 3, how, why say panel, group, litter | FIXED |
| L6 C13/S13 ambiguous stem | "Choose the TWO sentences where myself is used when I or me should be used" | FIXED |
| L7 S05 Part B flag | `correct` is on "Both sides have their own naming part ... comma goes before and" | FIXED |
| L7 P2/S01 hint 3 "sentence 4" | now "The tag sentence already has its comma in the right place." Works in S01 (option D is "We played tag, and Dad watched."). In **P2** there is no tag sentence (option D is "We picked apples, and Dad made applesauce.") | **NOT FIXED for P2** (L7 M1) |
| L8 S06 "coun- | ter" | replaced by cab- | bage (Merriam-Webster cab·bage) | FIXED |
| L8 C11 extra wrong sentence 6 | sentence 6 is now tick- | et (correct); C12 and S12 have no passage | FIXED |

Author-log claims I checked and found **false in the files**:
- "L2 S04 now uses sheeps instead of bisons": the passage (p4 sentence 4) still says "five bisons", while S04's how and why say "five sheeps" and "Sheeps is wrong". See L2 M1.
- "The P5 'so so fits' wording was fixed" (L4): P5 how step 2 still reads "so so fits ... so and fits", and C08 how step 3 reads "so so fits".

### 4. Findings by lesson

#### Lesson 1: Apostrophes (CHANGES REQUIRED)

**MUST**
- **L1 M1 twin overlap (ruling above):** S05, S07, S08, S10, S15 at 0.32 to 0.37 (S10/C10 0.37/0.36, S15/C15 0.35/0.34). Reword the prompts and do not reuse option strings.

**SHOULD**
- **S12 vs Watch Me 3 (plan 4.3 rule 4).** Watch Me 3 is "The snail (wont / won't) leave (its / it's) ..." and Teach point 2 says "Will not becomes won't". S12 asks won't / wo'nt / wont (key won't) in the first blank. Same key fact and the same wrong form. Use a different contraction (for example hasn't or they'd) for S12 blank 1.
- **Drafts over the plan's length.** p3 and p6 have 12 numbered sentences and about 89 and 88 words (plan 4.3: a draft is six to ten sentences, or a text of 100 to 250 words). Trim to ten sentences.
- The other 8 pairs above 0.21 (between 0.22 and 0.29): reword with the MUST.

**NOTE**
- The C10 change (Mom's vs She's) no longer shares `star's` with C08 (checked). C07's prompt "Sentence 6 of the draft has a mistake with an apostrophe" still tells the child that the it's sentence in C06 is wrong; the author log leaves it open (first review SHOULD-L1-1, second half).
- The misconception line "A common mix-up is putting the apostrophe at the end of the word, or in the middle ..." appears word for word in eleven older test sets (T-C, T-CF, T-RA, T-SS, T-T1, T-T2, T-T34, T-TS and others). The L1 line was copied from them; harmless.
- Teach point 5 (its/it's, you're/they're) goes beyond "singular possessive nouns" (first review NOTE-L1-2). Still two core items or fewer.

#### Lesson 2: Irregular plurals (CHANGES REQUIRED)

**MUST**
- **L2 M1 SK-GUM3-2-S04 (hot text, p4): text and passage disagree, and the key sentence rests on a variant.** The passage sentence 4 (the key) says "we counted five **bisons** near the fence". The how step 3 says "Sheeps is wrong, because sheep stays the same: one sheep, five sheep" and the why says "five **sheeps**". A child who presses Show me how reads a sentence that is not on the page. The author log says S04 was changed to sheeps; only the explanation was changed. Merriam-Webster and Wiktionary also accept `bisons` (first review SHOULD-L2-3). Fix: change p4 sentence 4 to "we counted five sheeps near the fence" (check that nothing else on p4 uses `bison`). `bisons` occurs only once in the file.
- **L2 M2 SK-GUM3-2-S06 (mc, p5): the options do not belong to the passage.** The stem says "the third sentence of the draft" and attaches p5 (the blizzard draft), whose sentence 3 is "We looked out the window and saw two mans shoveling snow." The options are "Late at night, we heard mices scratching inside the walls." (mice / mices / mouse / mouses'). No passage in the lesson contains that sentence. The child opens the passage, finds a different error, and cannot match the options. Fix: attach S06 to a draft that holds the mice sentence (or add that sentence to p2, C06's draft, with its own number) and quote the sentence number correctly.
- **L2 M3 SK-GUM3-2-S05 (ebsr): Part B hint 2 narrows Part B to the key.** H2: "For Part B, think about which other nouns end in f and what happens to them." Of the four Part B options only the key mentions f ("Wolf ends in f, and an f like this changes to v ..."). Live in Part B after hint 2: 1. Fix: "For Part B, think about the pattern the plural of wolf follows, and which of the four patterns it matches."
- **L2 M4 SK-GUM3-2-C07 (core, hot text): the keyed error `deers` is a dictionary variant.** Merriam-Webster (https://www.merriam-webster.com/dictionary/deer) gives "plural deer also deers". The key marks "four deers" as a wrongly spelled plural. The author log leaves it as an open concern; the plan (section 6.4) requires one defensible answer. Fix: use `sheeps` or `mooses` (never standard; https://www.merriam-webster.com/dictionary/mooses lists the plural as moose).
- **L2 M5 extra errors outside the offered sentences (stem says "the TWO sentences").**
  - C07: sentence 5 "six gooses flew over the roof" is also wrong and is not offered.
  - C11: sentence 7 "care for the oxes" is also wrong and is not offered (it is C14's key).
  - S07: sentence 3 "two mans shoveling snow" is also wrong and is not offered.
  - This is the same defect the first review rated MUST for L8 C11, and the author fixed it there. Fix: repair the extra sentence in the shared draft (give C14, S06 and similar items their own sentence or draft), or move the extra error to a sentence that is not in the draft.
- **L2 M6 twin overlap:** S02/P5 0.35/0.43 (3 shared options), S03 0.33/0.35, S06 0.34, S10/C10 0.38/0.41 (same four-column match), S12, S13.

**SHOULD**
- P5 keys `children` and `geese` are both Learn It words (Teach point 3 "child becomes children"; point 2 "goose becomes geese"). Use one non-listed noun.
- C12/S12 stay noun-swap twins (first review SHOULD-L2-6, left open).
- Draft length: p3 12 sentences/97 words, p5 and p6 11 sentences under 100 words (plan: six to ten sentences or 100 words).
- Test A T4 (match) still has the row tooth/teeth, which is the Learn It example ("The child lost a tooth. The children lost three teeth." and Teach point 2). The first review asked for rows that Learn It does not name; three of four are now new. Replace the tooth row (for example with `leaf/leaves` or `life/lives`).
- Watch Me 2 ("two deer") and P3 row 4 ("deer") share the key fact; P3 is Together, so this is low risk.

**NOTE**
- Halves/halfs and elves/elfs are standard items (checked).
- p5 passage and S07 now share the "mans" sentence; once M2 is fixed make sure S06 uses a different sentence than S07.

#### Lesson 3: Irregular past tense (CHANGES REQUIRED)

**MUST**
- **L3 M1 SK-GUM3-3-C10 (core, dropdown) repeats the new Watch Me 3.** The author added a third Watch Me "Last week, the coach (cutted / cut) the long rope in two." (cut stays cut, cutted is not a word). C10 slot 1 is "Then Ava {cuts / cut / cutted} the first slice" with the same key and the same wrong form. Plan 4.3 rule 4 and the first review's own MUST pattern (L2 P5, L4 C08). Fix: change C10 slot 1 to another unchanged verb (hit, hurt, shut, let) or change Watch Me 3 to one of those.
- **L3 M2 extra errors outside the offered sentences.**
  - C06: sentence 9 "Ava cutted the first slice, and her fork sinked ..." is wrong twice and is not offered (C10 uses it).
  - C11: sentence 8 "We spended the money" is wrong and not offered.
  - S06: sentence 8 "creeped ... finded" is wrong and not offered.
  - S11: sentence 8 "I knowed it was hard to do" is wrong and not offered.
  - All four stems say "Select the TWO sentences". Same fix as L2 M5.
- **L3 M3 twin overlap:** nine pairs at 0.30 or more (S02, S03, S04, S05 0.38/0.35, S10, S12, S13, S14, S15).

**SHOULD**
- Drafts p3, p4 and p6 have 11 sentences and under 100 words (plan: six to ten sentences or 100 words).
- The other 2 pairs above 0.21 (between 0.22 and 0.29): reword with the MUST.

**NOTE**
- `wake / woke`: the irregular-verb list used by the first review shows `waked` as a regular alternative; no option offers it. `sprang` is offered without `sprung`, so only one accepted form is in play.
- Hint ladders recounted for every item: two live or more after hints 1 to 3.

#### Lesson 4: Coordinating conjunctions (CHANGES REQUIRED)

**MUST**
- **L4 M1 SK-GUM3-4-C08 (core, match) still paraphrases Learn It and Watch Me.** Row 1 "The path was muddy, ___ we kept going." (yet) has the frame and key of Watch Me 3 "The hill was steep, (yet / so) we climbed all the way to the top." Row 2 "Tomas did not wave, ___ did he smile." (nor) has the frame and key of Teach point 5 "I did not call, nor did I write." Changing the nouns does not satisfy the plan ("never reuse, paraphrase or share the key fact"). Fix: change row 1 to a different relationship (for example a reason: "Bring a hat, ___ the sun is strong" is already row 4; use a result or a choice) and row 2 to a nor sentence with a different structure, or move nor out of this item.
- **L4 M2 SK-GUM3-4-C04 and S04 (ebsr): Part B hint 2 still points to the key's topic.** H2: "For Part B, reread the draft and decide which sentence tells you something about choosing." C04: only "Mr. Lee will pick only one place on Friday." is about choosing (other options: breathing, feeling silly, yoga is fun). S04: only "You only need one rope, so choose the one you like." mentions choosing. Live Part B choices after hint 2: 1 in both. Fix: "For Part B, reread the draft and ask which sentence gives a reason for the joining word you chose." and make one distractor also contain "pick" or "choose" in a non-supporting way.
- **L4 M3 twin overlap:** S01, S04 (0.36), S06 (0.38), S07, S08, S09, S10, S15 (0.39/0.39, 4 shared options).

**SHOULD**
- P5 how step 2 and C08 how step 3 still read "so so fits", "so and fits", "so yet fits" (the log says fixed). Rephrase: "The joining word so fits here."
- C13 (for versus so) remains the item where `for` is formal; keep as is (first review SHOULD-L4-3 left open).
- Passage p1 has 11 sentences (125 words, so it qualifies as a text).

**NOTE**
- S08 row 3 is now "Pam felt ill, ___ she stayed in bed." (so): unambiguous.
- `nor` still appears in C07, S07, C08, S08 (first review NOTE-L4-4).
- S13 was rewritten (0.21/0.13): good.

#### Lesson 5: Collective and abstract nouns (CHANGES REQUIRED)

**MUST**
- **L5 M1 twin overlap:** S05/C05 0.40/0.41 (Part A and Part B options are close paraphrases), S10 0.36/0.35, S11 0.35/0.37, S13 0.33/0.31, S02, S07, S09.

**SHOULD**
- **C05 and S05 Part B hint 1 echoes the key.** H1: "Ask which word you cannot see or touch." The key options are "You can see him climb, but you cannot touch courage itself." and "You can see sandwiches being shared, but not generosity itself." The other options (a group of sailors / a place on the pier / what the brother did; a group of birds / a person / how sandwiches tasted) have no see-or-touch wording. After hint 1 one Part B option is left in each. Make hint 1 the general definition only ("An abstract noun names an idea, a feeling or a quality") and let the see-or-touch test be hint 3.
- **S14 reuses the Watch Me 1 noun.** Watch Me 1 is "The herd crossed the muddy road slowly." and the Teach list says "a herd of cows". S14 is "Each morning, the herd {walk / walks / walking} to the river together." Use a different group noun.
- **Teach words are keys.** The Teach/Learn swap (pride, freedom, patience, trust) moved the pre-answers: `patience` is the key of core C06, `pride` of P1, `freedom` of T4, `trust` of S02. Use words that no item keys.
- **Stem premise.** C14, S14 and C07 state "acts together as one" in the stem, so the verb choice is a mechanical -s test (the same fact is hint 2 in C07). This was a deliberate decision to avoid British agreement (author log) and is consistent with https://learnersdictionary.com/qa/Are-Collective-Nouns-Singular-or-Plural-verb-agreement ("in American English collective nouns usually take a singular verb"); keep it, but vary at least one of the three stems so it does not hand the rule over.
- Drafts p3 and p6 have 11 sentences and about 92 and 93 words.

**NOTE**
- S06 option 3 "The panel have chosen a winner, and the group have cheered." uses plural verbs with collective nouns (valid in British English). It is a non-key option of an abstract-noun item, so no keyed claim is affected.
- p4 FK is exactly 4.5 (the ceiling is not exceeded).
- Hint 3 leaves exactly two live in C05 Part A (rope, courage): acceptable, watch.

#### Lesson 6: Reflexive pronouns (CHANGES REQUIRED)

**MUST**
- **L6 M1 SK-GUM3-6-C10 (core, dropdown) repeats both Watch Me examples and the Teach "not words" line.** Watch Me 1: himself, not hisself. Watch Me 2: themselves, not theirselves. Teach point 5: "Hisself and theirselves are not correct words." C10 slot 0 "taught {themselves / theirselves / himself}" and slot 1 "taught {himself / hisself / itself}" ask exactly those two facts with exactly those two wrong forms. Fix: use another pair (for example herself/ourselves with `hisself` removed) or move the two non-words into a different Watch Me.
- **L6 M2 twin overlap:** the worst lesson: 12 pairs at 0.30 or more (S03/C03 0.39/0.43 with 3 shared options, S12/C12 0.41/0.27, S13/C13 0.33/0.42, S15, S02/P5 with 4 shared options, S10/C10 with 4 shared options) and 15 of 15 above 0.21.

**SHOULD**
- C03, S03 and the "Dad and myself" items (C11) use the Teach point 5 frame "Sam and I walked" and Watch Me 3 "Tia and (myself / I) planted" ("Luis and {I} carried the boards"). The key fact is the lesson rule, but the frame repeats three times; change C03's subject structure.
- The "We V ourself a N" frame still appears in C07, S01, P2 and T4 (the log leaves it open).
- P4 is close to the older L-GRM-01 hot-text with hisself (log leaves it open); P4 key is also 1.28 times longer than the next option (legacy).
- Drafts p1 and p3 have 11 sentences and under 100 words.

**NOTE**
- `themself` is avoided on purpose (https://www.scribbr.com/nouns-and-pronouns/reflexive-pronouns/ lists it as debated).
- C13/S13 now unambiguous in the browser and in the blind solve (I picked the keyed pair).

#### Lesson 7: Commas (CHANGES REQUIRED)

**MUST**
- **L7 M1 SK-GUM3-7-P2 (core, hot text) hint 3 refers to a sentence that is not there.** H3 "The tag sentence already has its comma in the right place." P2's options are: Grandpa grilled corn and baked a pie / The bus was late this morning so we missed the first bell (key) / Rosa likes cats and dogs / We picked apples, and Dad made applesauce. There is no tag sentence in P2 (the text was copied from S01). Fix: "The sentence that already has its comma in the right place is not the one that needs it. Check the other three." (Do not number it; the options are shuffled and unnumbered.)
- **L7 M2 SK-GUM3-7-S01 (hot text): the key is by far the longest option.** The author's short-clause fix lengthened the key to "It started to snow hard so we built a tall snowman in the yard." (63 characters); the distractors are 33, 32 and 31 characters. Ratio 1.91. The only long compound sentence is the one that needs the comma, so a child can pick by length. P2 has the same shape at 1.38 (58 against 42; legacy, SHOULD). Fix: lengthen the distractors to similar length ("Mara baked bread and made soup for the whole class.").
- **L7 M3 twin overlap:** S03/C03 0.41/0.46 (3 shared options), S14/C14 0.42/0.39 (3 shared), S10/C10 0.37/0.42 (**6 shared options**), S05 0.39, S06 0.33/0.36, S09, S01, S11, S12.

**SHOULD**
- C03/C14 (both ", so") and C04/C14 still share key logic (log leaves open).
- Short-clause exception: the author lengthened the arguable clauses (C08 row 3, S08 row 2, S07 options, S01 key, P3 row 3, T3, T4). Purdue OWL states the rule without the exception (https://owl.purdue.edu/owl/general_writing/punctuation/commas/index.html and the extended-rules page, both fetched). Chicago/Grammarbook allow omitting the comma for very short clauses (first review URLs, not refetched). With every judged clause now six words or more, no keyed answer depends on the exception. Add one sentence to Teach so a child who has met the exception is not marked wrong in test sets.

**NOTE**
- C06/S06 stems are now scoped ("Look at sentences 3 through 8"), which removes the unmarked sentence 9; good, and the same device can be used for the L2/L3 extras where the extra sentence is outside the range.
- 7-S04 and T-T1 share "I took a deep breath and" (first review NOTE, left).

#### Lesson 8: Hyphens at line breaks (CHANGES REQUIRED)

**MUST**
- **L8 M1 SK-GUM3-8-S11 (hot text, p6): sentence 8 is a third wrong split and is not offered.** Sentence 8 reads "A duck shook the water from its feat- | hers." (feathers is feath·ers; the split is wrong). S11's stem says "Select the TWO sentences ..." and keys sentences 5 (mi- | nnow) and 7 (sunl- | ight). The first review gave the same finding as SHOULD with "same fix" as C11; the author fixed C11 only. S12 (its own twin) now has no passage. Fix: change sentence 8 to a correct split ("its feath- | ers") or drop the split from the sentence.
- **L8 M2 SK-GUM3-8-C05 and S05 (ebsr): Part B hint 2 narrows to the key.** C05 H2: "For Part B, think about which rule tells you when a word cannot be split." S05 H2: "... which fact tells you when a word cannot be split." The key is "A word with only one syllable is never split" / "A one-beat word cannot be divided". The other three Part B options are about where to split (end of line, two consonants, two smaller words; or th/sh pair, small words, mark on the upper line). Live Part B choices after hint 2: 1. Fix: "For Part B, think about what you counted in Part A."

**SHOULD**
- **Core P3 row 2 is the Learn It example.** Teach point 2: "A word with only one syllable, like school or bright, is never split." Core P3 row 2 is "brig- | ht" (key: not correct), and Watch Me 3 is school. P2 (Together) also has `bright`. Use a different one-syllable word in P3 (for example `stream`, `thick`, `plant`).
- **Typographic caveat for two-letter syllables.** buck-et, tick-et, moth-er, wash-er, pitch-er, rock-et are the syllable-correct splits (Merriam-Webster) but some typographic guides avoid carrying a two-letter syllable. The lesson is syllable-based and says so; no change, but state "split by syllables" once in Teach.

**NOTE**
- **Twin overlap passes**: maximum 0.21/0.21 over the item text (0.24 multiset with passage text added), no shared options. This is the standard the other seven lessons should reach.
- Dictionary check: see section 6. No wrong split found.
- Hint ladders: P5 H3, C03 H3, C10 H3, C15 H3, S15 H3 leave exactly two live in one slot; acceptable.
- C13/S13: `tern` and `den` are real words; the item says "lan is not a word" and "tist is not a word", which is true.

### 5. Cross-cutting checks

- **Hint ladder, live choices after hints 1 to 3, recounted for every item (core, similar, Together, plus every ebsr part).** After hint 3 two or more choices are live in every mc, dropdown slot, hot text and match item. The only collapses are the ebsr **Part B** hints listed above (L2 S05, L4 C04/S04, L8 C05/S05), and the L5 hint 1 echo. Hint 3 leaves exactly two live in L5 C05 Part A, L7 C09/S09, L8 P5/C03/C15/S15; I counted these as passing.
- **Longest-key cue** (`longest.js`, 226 slots, parts and choose-two keys counted): 27 slots have the key uniquely longest or both choose-two keys the longest (12%, chance about 25%). Worst: L7 S01 1.91 (MUST above), L7 P2 1.38, L6 P4 1.28, L2 S01 1.22, S05 Part B 1.15, S10 L1 1.13, L3 C05 Part B 1.13. Lesson 8: 0 of 18 slots. Everything else is under 1.1 (NOTE).
- **Learn It / Watch Me duplication** (`dup.js`, `dup2.js`): no six-word run is shared between any Learn It or Watch Me sentence and any core, similar or test item. Key-fact reuse found: L3 C10 / Watch Me 3 (MUST), L4 C08 / Watch Me 3 and Teach 5 (MUST), L6 C10 / Watch Me 1-2 and Teach 5 (MUST), L1 S12 / Watch Me 3, L5 S14 / Watch Me 1, L8 P3 row 2 / Teach 2, L2 P5 / Teach 2-3 and L5 C06 / Teach 4 (SHOULD). 
- **Concept duplicates over all `js/data`** (44 other data files; 6-gram and 8-gram scans of every B6 string): no whole-item or whole-sentence duplicate. The hits are stock frames and boilerplate ("This question has two parts. Answer Part A, then Part B.", "Start with the row you are surest about ...", "Which sentence from the draft best supports the answer to Part A?"), the L1 misconception line copied from the older T-* tests, and "We are going to the zoo." (L-GUM2, L-GUM4) in L1 Watch Me. The same-standard older items (L-GRM-01, L-GRM-02, L-GUM1 to L-GUM5, L-GC2, PT-1) cover the same skills with different sentences.
- **Passages.** `verification/readability.py`: all 48 passages at FK 1.0 to 4.5 (L5 p4 = 4.5, not above the ceiling). Sentence numbering (1) to (n) is sequential and contiguous in all 48 drafts. All hot-text targets (`pX:r:c`) resolve to the numbered sentence they should, and every "sentence N" reference in a prompt matches the passage except L2 S06 (M2). **Length:** the author log says "every B6 passage is at least 100 words", but the count includes the (n) markers. Without them 38 of 48 are 88 to 99 words, and 16 have 11 or 12 sentences. Twelve satisfy neither plan alternative (100 to 250 words, or six to ten sentences): L1 p3, p6; L2 p3, p5, p6; L3 p3, p4, p6; L5 p3, p6; L6 p1, p3. SHOULD (trim each to ten sentences).
- **Browser, 390 x 844, touch, mobile viewport (Playwright, one browser per set, `br.py`).** All 120 core items (eight lessons, three sets of five) were opened through `#play/SK:<code>:y|y2|y3/try`, the passage tab was switched to Question where present, the keyed answer was set through the engine's own response state, and Check my answer was pressed: **120 of 120 accepted ("That's right!", "Right on the first try")**. No horizontal scroll (`scrollWidth` 390 on every item), no element wider than the viewport, no control under 44 px high by my selector, no page errors. Real taps were also checked on L8 C06 (two taps on the two wrong splits, the Check button tapped): accepted. Hot-text items show only the offered sentences as tappable options, and the draft is on the other tab; that is why the unoffered extra errors cannot be answered (L2, L3, L8 findings). Screenshots are in `scratchpad/b6rev3/shots/`. NOTE for the engine owner, outside B6: the "Show me how (shows the answer)" button wraps onto three lines at 390 px.

### 6. Web and dictionary checks (fetched 2026-10-27)

- Apostrophes: https://owl.purdue.edu/owl/general_writing/punctuation/apostrophe_introduction.html (contractions mark omitted letters; add 's for singular possession; it's is it is, its is possessive and takes no apostrophe; no apostrophe for plurals). Supports L1 keys.
- Commas: https://owl.purdue.edu/owl/general_writing/punctuation/commas/index.html and https://owl.purdue.edu/owl/general_writing/punctuation/commas/extended_rules_for_commas.html ("Use commas to separate independent clauses when they are joined by any of these seven coordinating conjunctions"; no short-clause exception on either page; the exception comes from Chicago via the first review's URLs).
- Irregular plurals: https://www.merriam-webster.com/dictionary/deer ("plural deer also deers": a variant, L2 M4); https://www.merriam-webster.com/dictionary/mooses (plural moose; `mooses` not a standard form). Bison and `bisons`: first review's M-W simple entry, not refetched. Sheep, fish, moose and -ves, -men, -en keys checked against the same pages and the first review's lists.
- Irregular verbs: keys checked against the lists in the first review (woodwardenglish and libretexts irregular-verb lists); the only variants in the options are `wake`/`waked` (not offered) and none of dove, lit, spit, snuck, shone, hung is used.
- Collective nouns: https://learnersdictionary.com/qa/Are-Collective-Nouns-Singular-or-Plural-verb-agreement (American English: singular verb when the group acts as a unit; plural allowed when members act separately). The L5 stems all say "acts together as one", so each keyed verb is the American-English answer.
- Reflexives: https://www.scribbr.com/nouns-and-pronouns/reflexive-pronouns/ (standard list; myself is not a polite I or me; hisself, theirselves and theirself are misspellings; themself is debated) and https://writingexplained.org/himself-or-hisself-difference ("hisself" substandard).
- Syllable rules: https://www.howmanysyllables.com/syllable_rules/divideintosyllables (split between consonants, between double consonants, never split th/sh/ch/wh). The page puts "-ckle" words as tack·le, buck·le, which matches the ck rule (no item uses -ckle words).
- **Dictionary check of the Lesson 8 split words.** Each word below was fetched from `https://www.merriam-webster.com/dictionary/<word>` and its headword syllables match the lesson's split (59 words): pencil pen·cil; washer wash·er; bucket buck·et; pumpkin pump·kin; cushion cush·ion; pitcher pitch·er; conductor con·duc·tor; rocket rock·et; turtle tur·tle; tractor trac·tor; magnet mag·net; ticket tick·et; feather feath·er; insect in·sect; pocket pock·et; monkey mon·key; lantern lan·tern; turkey tur·key; sunflower sun·flow·er; birthday birth·day; cupcake cup·cake; mother moth·er; chicken chick·en; dentist den·tist; pancake pan·cake; bonfire bon·fire; flashlight flash·light; windmill wind·mill; basket bas·ket; blanket blan·ket; bottle bot·tle; bubble bub·ble; cactus cac·tus; carpet car·pet; hammock ham·mock; circus cir·cus; helmet hel·met; jacket jack·et; kettle ket·tle; kitten kit·ten; muffin muf·fin; mitten mit·ten; napkin nap·kin; puppet pup·pet; rabbit rab·bit; tunnel tun·nel; rubber rub·ber; window win·dow; pebble peb·ble; winter win·ter; raincoat rain·coat; sunset sun·set; cabbage cab·bage; cattail cat·tail; hammer ham·mer; trumpet trum·pet; ladder lad·der; picnic pic·nic; pepper pep·per.
- **Not individually fetched (limit, stated honestly).** The proxy allows a dictionary page only after a search returns its address, so I could not open all of them. About 35 more split words (backpack, boxcar, butter, button, butterfly, candy, carrot, cardboard, doorbell, fisher, garden, happen, happy, letter, locker, marble, market, minnow, pillow, popcorn, postcard, puppy, railroad, silver, sister, suitcase, summer, sunlight, toothbrush, yellow, candle, football, problem, tennis) were checked only by pyphen en_US and the split rules. pyphen agrees with every one except `lantern` (not hyphenated; confirmed by M-W above) and `sunflower` (partial, confirmed by M-W). The first review fetched min·now (Merriam-Webster) and monkey, lantern, feather (syllable pages). All are plain consonant-consonant, double-letter or compound words, so I expect no difference, but the brief's "verify every split in a dictionary" is not fully met. No wrong split found.

### 7. What I did not do

- No lesson edit, no git, no republish. Servers on 8761 and 8762 were killed by pid. Other agents' servers on ports 8770 to 8792 were left alone.
- I did not re-solve the legacy tests (T-*) outside L-GUM3; they were solved blind (Test A and B) and agree with the keys.
- Per the author log, Together `addons` hints are not shown in the Together UI; I audited them anyway because they merge into the item (as for P2 above).


## Third review (all eight lessons, 2026-10-27)

**Role:** independent reviewer, fresh eyes. I did not write the lessons and I did not take part in the first or second review. **Scope:** the eight GUM Master lessons in `js/data/lessons/L-GUM3.js` as revised after the second review (frozen copy, `/home/claude/pp-content`). **Read-only:** no lesson, set or engine file was edited and no git command was run. The only repo file I touched is this one (append). One test server ran on port 8761 (pid 3622) and was killed by pid. Work files are in the scratchpad folder `b6r3/`.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 1 Apostrophes | **CHANGES REQUIRED** | 3 | 1 | 3 |
| 2 Irregular plurals | **ACCEPT** (with SHOULDs) | 0 | 3 | 2 |
| 3 Irregular past tense | **ACCEPT** (with SHOULDs) | 0 | 3 | 2 |
| 4 Coordinating conjunctions | **ACCEPT** (with SHOULDs) | 0 | 2 | 2 |
| 5 Collective and abstract nouns | **CHANGES REQUIRED** | 2 | 3 | 2 |
| 6 Reflexive pronouns | **CHANGES REQUIRED** | 2 | 2 | 1 |
| 7 Commas with and/but/or/so | **ACCEPT** (with SHOULDs) | 0 | 2 | 3 |
| 8 Hyphens at line breaks | **CHANGES REQUIRED** | 6 | 2 | 2 |

Four lessons are acceptable. The 13 MUSTs left are all small data edits (stale text, a hint that names the key, a false reason in the explanation). The big second-review MUSTs (twin overlap, extra unoffered errors, draft length, wrong-passage item, `deers`) are genuinely fixed.

### 1. Blind solve

- Method as in the brief: Node `vm` loader, seeded LCG shuffle (seed 5000 + 131 x lesson index) of choices, options and hot-text options, and a whitelist dump with no `correct`, `answer`, `why`, `hints`, `how`, `clue`, `like`, `misconception` or `sample`. Hot-text items with `targets` were printed with their selectable sentence list. Answers were saved to `ans-1..8.txt` before I read any key, the author log, or either earlier review.
- **Agreement with the keys: 314 of 315** (core 120 with refs resolved, similar 120, Together and Test A/B 75). The one miss is mine: 4-C06, I picked `for` where the key is `but` (the sentence is a contrast; I misread it). The key is right; I count it as a solver slip, not a defect.
- Being blind, I found no ambiguity in any key by reading. The L8 defects below were found by the audit, not by the solve: the keys are right by the dictionary, but the lesson's stated reason is false or does not separate the options.

### 2. Twin overlap (set and multiset Jaccard, ceiling 0.21)

- Measure (`jac.js`): lower-case raw tokens over prompt, stem, text, choices, slot options, match rows and columns, ebsr parts and the sentences a hot-text item targets. Each of the 120 similar items against its `like` core item. All 120 pairs measured, not a tail.
- **Maximum per lesson (set / multiset): L1 0.182/0.205, L2 0.200/0.203, L3 0.205/0.195, L4 0.208/0.207, L5 0.192/0.205, L6 0.186/0.200, L7 0.190/0.198, L8 0.209/0.206. Pairs above 0.21: none. Pairs at 0.30 or more: none.** The author log's figures match. The ceiling is met on item text in all eight lessons.
- With the passage text added (a stricter reading) the maxima rise to 0.24 to 0.27 (L3 0.242, L5 0.266, L6 0.274, L7 0.240, L8 0.246 on one of the two measures). None is near 0.30; all of it is shared stock frame words. NOTE, no action.
- All other item pairs in a lesson (core, Together, similar and tests, 38 to 43 items per lesson), item text only: pairs at 0.30 or more on either measure: L1 2, L2 4, L3 2, L4 11, L5 5, L6 4, L7 3, L8 15. Most involve the older P and T items (for example L8 P3/T4 0.53/0.61, L4 P1/T1 0.50/0.50) that B6 did not write. The B6-written pairs are listed under each lesson as SHOULD. Only one pair has the same stem word for word (L8 C06 and S11).

### 3. Were the second-review MUSTs and SHOULDs genuinely fixed in the files?

| Second-review finding | In the files now | Result |
|---|---|---|
| Twin overlap, lessons 1 to 7 (56 pairs at 0.30 or more) | maxima 0.182 to 0.209 above | FIXED |
| L1 S12 repeats Watch Me 3 (won't) | S12 now doesn't / isn't | FIXED |
| L2 M1 S04 "bisons" vs "sheeps" | p4 sentence 4 now says "five sheeps"; how, why and passage agree | FIXED |
| L2 M2 S06 options not in any passage | S06 carries its own sentence in the stem, no passage | FIXED |
| L2 M3 S05 Part B hint 2 narrows | H2 now "the pattern the plural of wolf follows, and which of the four patterns it matches"; four live | FIXED |
| L2 M4 C07 keyed `deers` (variant) | C07 keys are `wolfs` and `shelfs` | FIXED |
| L2 M5 extra errors outside the offered sentences | I listed every unoffered sentence of every hot-text item: none holds an error (C07, C11, S07 checked by eye) | FIXED |
| L3 M1 C10 repeats Watch Me 3 | Watch Me 3 is set; C10 is cut/sank | FIXED (same fact, different verb: see NOTE L3) |
| L3 M2 extras outside the offered sentences | C06, C11, S06, S11 stems are scoped "sentences 3 through 7"; the extra errors at sentences 8 and 9 stay but are outside the stated range | FIXED by scoping (NOTE L3) |
| L4 M1 C08 paraphrases Watch Me/Teach | rows are test/yet, cave/nor, bell/so, boots/for: new frames | FIXED |
| L4 M2 C04/S04 Part B hint 2 | H2 now "find the sentence that gives the best evidence for your Part A answer"; four live | FIXED |
| L4 "so so fits" wording (author log: "fixed") | still in P5 ("so and fits"), C08, C09, S09, C11, S11, S01 how/why | **NOT FIXED: log claim false** (SHOULD L4-1) |
| L5 C05/S05 Part B hint 1 echoed the key | H1 is now the general definition only | FIXED |
| L5 S14 reuses Watch Me 1 noun | S14 is the cast | FIXED |
| L5 Teach words were test keys | Teach now uses wonder, peace, laughter, comfort; no item keys them | FIXED |
| L6 M1 C10 repeats Watch Me 1-2 and Teach | C10 is now Ella and the kitten (herself/itself), which avoids Watch Me, but **"Ella taught herself to knit" copies the Teach example "Jada taught herself to whistle"** | **NOT FIXED in effect** (MUST L6-2) |
| L7 M1 P2 hint 3 "tag sentence" | H3 now names the cats-and-dogs sentence | FIXED |
| L7 M2 S01 key much longer than distractors | S01 key 62 characters, a distractor 76 | FIXED |
| L7 Teach: add short-clause note | Teach point 4 now says some writers skip the comma and the test does not | FIXED |
| L8 M1 S11 sentence 8 third wrong split | sentence 8 is now feath- \| ers (correct) | FIXED |
| L8 M2 C05/S05 Part B hint 2 narrows | H2 reworded but still points to "your count" and the one-syllable fact: one live | **NOT FIXED** (MUST L8-6) |
| L8 P3 row 2 is the Teach example (bright) | row 4 is now pla- \| nt | FIXED |
| Drafts under 100 words | smallest passage per lesson 101 to 103 words without (n) markers | FIXED (some drafts still have 11 or 12 sentences; the plan allows 100 or more words) |
| Longest-key cue (L7 S01 1.91) | see section 5 | FIXED |
| First-review L6 C12/S12 hint 2 "states the key" (author log: "reworded") | text is identical to what the first review quoted | **NOT FIXED: log claim false** (MUST L6-1) |

Author-log claims I found **false in the files**:
- "L6 C12/S12 hint 2 reworded": hint 2 in both still reads "Only one choice has just Rosa/Lila doing it".
- "The P5 'so so fits' wording was fixed" (L4): P5 how still says "so and fits", and C09, S09, C11, S11 still say "so so fits" or "so but fits".
- "L8 C09/S09 ... confirm the stated split is the only correct reading" is listed by the author as an item to re-solve first. It should have been: the stated reasons are wrong (L8 findings).
- The log's first-review line for L2 Test A T4 ("T4 rows are woman, shelf, calf, tooth") is stale: the file has wife, shelf, scarf, foot.
- The log is otherwise accurate: gate numbers, twin maxima, passage minimums (L7 p1 101 words by my count too) and "0 misses" in the key-in-why check all hold.

### 4. Findings by lesson

#### Lesson 1: Apostrophes (CHANGES REQUIRED)

**MUST**
- **L1-1 SK-GUM3-1-S01 (hot text) hint 3, how and why name sentences that are not on the screen.** The offered lines are: Maria's umbrella / The two truck's blocked our street (key) / Our class **hasn't** seen that movie yet / Pia's learning to play the drums. Hint 3 says "**Haven't** stands for have not"; how step 1 says "Haven't is short for have not. **She's** is short for she is"; why says "haven't ... and she's". There is no "haven't" and no "she's" in the item. A child who presses Show me how reads about words that are not there. Fix: say hasn't and Pia's in hint 3, how and why.
- **L1-2 SK-GUM3-1-S02 (ms) hint 3, how and why describe the wrong options.** Options: shouldnt / My neighbor's dog (key) / six pumpkin's / They've (key) / the cup's. Hint 3: "One of the sentences uses **it's** where a word that shows belonging should go." No option has it's. How ends "... and **it's** should be its." Why ends "shouldn't, pumpkins and **its**". The third wrong option is cup's, which should be cups. Fix: replace the it's text with cup's / cups in hint 3, how and why.
- **L1-3 SK-GUM3-1-C09 (dropdown): two defensible answers.** "A hungry owl watched the {fox's / foxes / foxes'} den, where one young fox slept." "Where one young fox slept" says one fox was sleeping, not that one fox owns the den: a den can belong to several foxes with one asleep. Foxes' is therefore defensible; hint 2 ("look for the clue about how many foxes are in the den") points at that clause as if it settled it, and why says "One fox owns the den". Fix: state the owner count outright (for example "the den that belongs to one fox") or name one fox as the owner.

**SHOULD**
- Non-twin pairs at 0.30 or more: C05/C10 0.42/0.34 and S06/S07 0.35/0.24 (same stock frame "which word fits"). Reword one prompt in each pair.

**NOTE**
- C08/S08 hint 3 leaves three live; the key edit choices ("change star's to stars", "couldnt to couldn't") are not guessable from hints 1 to 3.
- S05 (DOK 3, pick-two about it/its) is correct but dense for grade 3: "Say it's as two words and the line still reads fine."
- The L1 misconception line copied from older T-* tests (second review) remains harmless.

#### Lesson 2: Irregular plurals (ACCEPT)

**SHOULD**
- **Teach point 3 now states the keys of several items.** "wolf becomes wolves. Knife becomes knives the same way." Keys: C05 (Part B names knife and knives), S05 (wolves), C07 (wolfs is the error), S07 (knifes is the error). Teach points 2 to 4 list almost every closed-class pair the items use (men, feet, teeth, mice, geese, children, oxen, deer, moose, bison); 15 of the 30 core and similar keys appear in Teach. For a closed class this is partly unavoidable, but the f-to-v pair should come out of Teach (and keep other f-to-v nouns that the items key out of Teach too).
- **Test A T4 row `foot`** (wife, shelf, scarf, foot) is a Teach fact (point 2, and point 5 "feets"). The second review asked for rows Learn It does not name. Use a noun Teach and Watch Me do not list (for example `half` or `calf`; `loaf` is Watch Me 3).
- Non-twin pair C06/C14 0.38/0.20 (same frame "Choose the word that completes"). Reword one prompt.

**NOTE**
- S06 now carries its sentence in the stem and has no passage: fine and solvable.
- Sheep, bison, moose, mooses, deer: keys only use the standard form (https://www.merriam-webster.com/dictionary/deer lists "deer also deers" as a variant; no keyed answer depends on it any more).

#### Lesson 3: Irregular past tense (ACCEPT)

**SHOULD**
- **S14 hint 1 and how say "Last night" but the sentence says "yesterday".** Sentence: "Dad {shutted / shut / shuts / shutting} the garage door before bed yesterday." Hint 1: "Last night tells you the verb must tell about the past." How step 1: "Last night tells you the action already happened." Fix: "Yesterday".
- **S03 stem "needs a stronger action word"** is not the task (the problem is the tense: comed / came / comes). Say "needs the past-tense verb".
- Non-twin pairs C03/C04 0.35/0.26 and C04/C12 0.41/0.26. Reword prompts.

**NOTE**
- C10 (cut) and Watch Me 3 (set) test the same fact (a verb that does not change) with different verbs. Allowed.
- The extra wrong sentences at 8 and 9 in the drafts (cutted, spended, creeped/finded, knowed) are outside the stated range "sentences 3 through 7". Fine as scoped, but a child may notice them.

#### Lesson 4: Coordinating conjunctions (ACCEPT)

**SHOULD**
- **L4-1 "so so fits" wording is still in the how and why text** (author log says fixed): P5 how "so and fits"; C08 how "so for fits", "so yet fits"; C09/S09 why "so but fits first ... so so fits second"; C11 how "so so fits better"; S01 how "so and fits". Say "the joining word X fits".
- Non-twin pairs: C02/C03 0.39/0.21, C02/C09 0.34/0.31, C04/C05 0.37/0.27, S04/S05 0.48/0.30. Reword the repeated stems.

**NOTE**
- nor and for stay rare words for grade 3 but the lesson teaches them (Teach point 5) and no keyed item is ambiguous.
- C08 rows are each solved by exactly one word; checked by hand.

#### Lesson 5: Collective and abstract nouns (CHANGES REQUIRED)

**MUST**
- **L5-1 SK-GUM3-5-C07 and S07 (ms) hint 2 hands over the two keys.** C07 options: crew paint / club meets (key) / class walk / herd drinks (key) / family eat. H2: "Say each verb aloud. The verb for one group usually ends in -s when it tells about now." Only the two keys end in -s: after hint 2 the live choices are the two keys and no distractor. S07 has the same H2 and the same shape (plays and wins are the only -s verbs). Hint 2 should say where to look, not state the test that decides. Fix: H2 "Say each sentence aloud and ask whether the group is doing one thing together." Keep the -s fact for hint 3.
- **L5-2 SK-GUM3-5-S10 (dropdown) has no "acts as one" premise.** "Pick the helper verbs that fit the panel and the group. The panel {have / has / having} chosen a winner, and the group {have / has / are} cheered." Its twin C10 says "Each group acts together as one"; C07, C14 and S14 also state it. Without it `have` is defensible (https://learnersdictionary.com/qa/Are-Collective-Nouns-Singular-or-Plural-verb-agreement: plural verbs are fine when the members act separately; S06 even offers "The panel have chosen" as a plausible sentence). Fix: add "Each group acts together as one." to the stem.

**SHOULD**
- C11 and S11 stems ("the verb does not match the collective noun", "a verb that clashes with the group word") do not state the premise. The key sentences (colony work together, colony stay) are the American-English errors, but add "each group acts as one" for consistency with C10.
- C05/S05 Part B: the key is the only option phrased as a see/touch test ("you cannot touch courage itself"), and Teach point 5 gives exactly that test. Hint 1 is now general (fixed), but the key still matches Teach point 5 closely. Rephrase either the key or Teach.
- Non-twin pairs C03/C12 0.30/0.30 and C04/C10 0.30/0.33.

**NOTE**
- C10 puts "The whole orchestra were ready ... the audience were quiet" in the draft as the error to fix; it models the plural verb that the lesson teaches against. Fine because the child fixes it.
- p4 FK is 4.47 by my count (ceiling 4.5): no headroom.

#### Lesson 6: Reflexive pronouns (CHANGES REQUIRED)

**MUST**
- **L6-1 SK-GUM3-6-C12 and S12 (mc) hint 2 states the key (author log: "reworded").** C12 H2: "Read each choice and ask who did the work. Only one choice has just Rosa doing it." S12: "Only one choice has just Lila doing it." That is the key, so after hint 2 one choice is live. The first review quoted this wording and asked for a reword; the file has the same text. Fix: "Read each choice and ask who else is named in it."
- **L6-2 SK-GUM3-6-C10 (dropdown) copies the Teach example.** Teach example: "Jada taught herself to whistle." C10: "Ella taught {herself / himself / itself} to knit, and the kitten washed {itself / herself / themselves} in the sun." Same frame ("X taught herself to V"), same key (herself), same fact (a girl points back to herself). The second review asked for a C10 that does not repeat Watch Me or Teach; changing Watch Me's pair fixed one and created this one. Fix: use a different verb frame, for example "Ella saw herself in the window" (Watch Me 1 is cut himself a slice, Teach is taught herself).

**SHOULD**
- Non-twin pairs P5/C10 0.41/0.38 and C10/P1 0.32/0.36 (the older P items use the same "taught ___ to" frame).
- The "We V ourself a N" frame still appears across C07, S01, P2 and T4 (second review SHOULD, left open).

**NOTE**
- `themself` is still avoided (https://www.scribbr.com/nouns-and-pronouns/reflexive-pronouns/ lists it as debated). C03 is now "Dad showed Luis and {me}" and avoids the Teach frame "Sam and I walked".

#### Lesson 7: Commas with and/but/or/so (ACCEPT)

**SHOULD**
- **Borderline short clauses remain in two places.** P3 row 1 "Ava found a shell and she gave it to her mom." (needs a comma; the first clause is four words) and the C15 distractor "We can ride the train or we can take the bus." (five and six words). Chicago and Grammarbook allow omitting the comma when both clauses are very short (https://www.grammarbook.com/punctuation/commas.asp, rule 3b: "Some writers omit the comma if the clauses are both quite short."), while Purdue OWL states the rule with no exception (https://owl.purdue.edu/owl/general_writing/punctuation/commas/index.html: "Use commas to separate independent clauses when they are joined by any of these seven coordinating conjunctions"). Teach point 4 now says the test requires the comma, so the keys are safe; lengthen the P3 row 1 first clause to five or six words to remove the doubt.
- Non-twin pairs C03/C10 0.38/0.40 and C03/C14 0.31/0.33 (all ", so" dropdowns). Reword one.

**NOTE**
- C06/S06 stems say "sentences 3 through 8" but five sentences are selectable (3, 4, 5, 6, 8); sentence 7 ("We could paint the walls, or we could hang a sign.") is correct and not offered. Fine, but a child may look for a sixth choice.
- All "no comma" keys are compound predicates (ran after it, put the milk away) or noun pairs, never two short clauses. Checked in P4, C07, C13, S02, S07, S13, S15.
- p1 has only 101 words.

#### Lesson 8: Hyphens at line breaks (CHANGES REQUIRED)

All 59+ split words are correct in Merriam-Webster (section 6). The defects are in the **reasons** the lesson gives and in one hint, not in the keyed splits.

**MUST**
- **L8-1 SK-GUM3-8-C09 (mc): the reason is false.** Pia: buck- \| et; Sam: bu- \| cket. Hint 3: "In Sam's split, **the c and the k are on different lines**." They are on the same line (bu- | **ck**et). How: "Pia kept ck together, and **Sam pulled it apart**." Why: "Sam pulled the c and the k apart." Misconception: "splitting before the k". Sam's split keeps ck together. The key (Pia) is right by the syllable (buck·et) only. Fix: base the item on the syllable ("tick" is a beat) or use a split that really pulls ck apart (buc- | ket).
- **L8-2 SK-GUM3-8-S09 (mc): the reason is false and the taught rules do not decide it.** Lia: mo- \| ther; Omar: moth- \| er. Hint 3: "In Lia's split, **the t and the h are on different lines**" (they are not: mo- | **th**er). How and why: "Lia pulled it apart", "Lia pulled the t and the h apart". Both splits keep th together; only the dictionary (moth·er) separates them. The key option's reason ("th makes one sound and stays together") is true of both. Fix: offer a split that does pull th apart (mot- | her) against moth- | er.
- **L8-3 SK-GUM3-8-C12 (mc): the reason is false.** Options: ti- \| cket / tic- \| ket / tick- \| et (key) / t- \| icket. How and why: "Tic- | ket and **ti- | cket pull the c and k apart**". Ti- | cket keeps ck together (ti- | **ck**et). Under the lesson's own rule ("letters that make one sound stay together") ti- | cket and tick- | et both pass; only the syllable (tick·et) chooses. Fix: replace ti- | cket with a split that really separates c and k (tic- | ket is already there), or add the syllable test ("which break gives a first beat you can say alone: tick") to hint 2.
- **L8-4 SK-GUM3-8-S12 (mc): two options satisfy the stem.** "Which break of feathers keeps its letter pairs together?" feath- \| ers (key) and **fea- \| thers** both keep th together (fea- | **th**ers); feat- | hers is the only one that pulls th apart. The key rests on the dictionary (feath·er) alone. How and why say "Feat- | hers and fea- | thers pull the t and h apart"; fea- | thers does not. Fix: replace fea- | thers with a distractor that really separates the pair, and keep feat- | hers as the only th-splitting option, so the stem has one answer.
- **L8-5 SK-GUM3-8-P5 (dropdown): "bir- \| thday breaks up th" is false.** Options bir- \| thday / birth- \| day (key) / birthd- \| ay. In bir- | thday the th is together on line two. How and why: "Bir- | thday breaks up th, which makes one sound and stays together." The compound rule (birth + day) is the true reason and is already in the item. Fix: delete the th sentence from how and why.
- **L8-6 SK-GUM3-8-C05 and S05 (ebsr) Part B hint 2 leaves one live choice.** Hint 1 already says "count the beats". Hint 2: "For Part B, think about what your count in Part A shows and which fact matches it." (C05); "... what your beat count shows and which fact matches" (S05). Of the four Part B options only the key is about a count of syllables ("A word with only one syllable is never split" / "A one-beat word cannot be divided"); the other three are about where to split. After hint 2 the child has one option. Fix: "For Part B, reread the four facts and ask which one is about the word in Part A."

**SHOULD**
- Non-twin pair C06/S11: the stems are word for word the same ("Select the TWO sentences that have a word split in the wrong way. The | mark shows where the line ends."), 0.25/0.31. Reword one. Other B6-written pairs at 0.30 or more: C12/C15 0.33/0.34, C10/P5 0.39/0.40, C09/P5 0.30/0.27, S02/S07 0.27/0.32.
- The explanations lean on "letters that make one sound stay together" for ck and th. The rule is true, but none of C09, S09, C12, S12 contrasts a split that actually separates the pair from one that does not. Give each of those four items one option that does separate the pair.

**NOTE**
- Typographic caveat (syllable-correct, two-letter syllable): buck-et, tick-et, moth-er etc. The Teach now says "always split a word between syllables" (fixed from second review).
- Hints leave exactly two live in P5, C03, C10, C15, S15 after hint 3: acceptable.

### 5. Cross-cutting checks

- **Hint ladder, live choices after hints 1 to 3, recounted for every item** (core, similar, Together, and every ebsr part), by reading each ladder against its options. Collapses to fewer than two live: L5 C07/S07 (hint 2), L6 C12/S12 (hint 2), L8 C05/S05 Part B (hint 2). Everything else leaves at least two live; several dropdowns and hot-text items leave exactly two after hint 3 (accepted). L2 S05 Part B, L4 C04/S04 Part B and L5 C05/S05 Part B (fixed in the second pass) now leave four live after hint 2.
- **Keyed text vs why/how/hints:** `keychk.js` finds every mc, ms and ebsr key in why or how. Stale text found by `stale.js` (unusual tokens in hint, how and why that are not in the item): L1 S01, L1 S02 (MUST), L3 S14 (SHOULD). No other item mentions text that is not on its screen.
- **Longest key** (key uniquely longest, per slot): L1 1/30, L2 0/26, L3 3/30, L4 4/31, L5 3/28, L6 3/30, L7 2/28, L8 0/29, about 9% overall against about 25% by chance. The worst ratio is under 1.2. NOTE.
- **Learn It / Watch Me duplication:** no Watch Me or Teach example sentence appears in any item or passage (exact-string scan); whole-text overlap of each Watch Me with the Teach text is 0.01 to 0.11. Key-fact reuse found: L6 C10 against Teach example (MUST L6-2); L2 Teach point 3 against C05/S05/C07/S07 (SHOULD); L2 T4 `foot` (SHOULD).
- **Concept/word duplicates over all `js/data`** (43 other files): no whole-item duplicate. Stock frames only ("Choose the word that correctly completes the sentence", "This question has two parts. Answer Part A, then Part B."), plus: a clue sentence "Last Saturday already happened, so both verbs must tell about the past." shared verbatim by L3 P5/S02 and `sets/L-GRM-01.js`; stems "Which word in the sentence is an abstract noun?" and "Choose the TWO sentences that use a collective noun." shared with `sets/L-GRM-01.js`; "Two means more than one, so you need a plural" shared with `L-GUM1.js`. NOTE: change one copy of each clue sentence.
- **Passages (48):** all numbered (1) to (n) in sequence; 101 to 127 words without the (n) markers; all FK at or below 4.5 (L5 p4 4.47, L1 p4 4.12; my syllable counter is approximate, `verification/readability.py` reports L5 p4 at exactly 4.5). Every hot-text target resolves to a numbered sentence; every "sentences N through M" range matches the targets (L3: 3 to 7; L7: 3 to 8).
- **Hot-text stems vs selectable errors:** all 36 hot-text items (core and similar) were checked: the number in the stem equals the number of keyed sentences and `pick`; every unoffered sentence in the used passage was read; none holds an error that the stem asks for (the only extra errors are outside a stated range).
- **Browser, 390 x 844, touch, mobile viewport (Playwright, one browser per lesson, `run390.py`).** All 120 core items were opened through `#play/SK:<code>:y|y2|y3/try`. For passage items the passage tab and then `#tab-question` were tapped (the passage pane shows the right passage in every case). The keyed answer was entered with real taps (choices, hot-text options, match buttons) and `select_option` for the dropdowns, then Check was tapped: **120 of 120 accepted**. No horizontal scroll, no page errors.

### 6. Web and dictionary checks (fetched 2026-10-27)

- Comma before a coordinating conjunction joining two independent clauses; the short-clause exception: https://www.grammarbook.com/punctuation/commas.asp (rule 3b; "Some writers omit the comma if the clauses are both quite short."). Purdue OWL, no exception: https://owl.purdue.edu/owl/general_writing/punctuation/commas/index.html (coordinating conjunctions, introductory elements, series).
- Collective noun agreement: https://learnersdictionary.com/qa/Are-Collective-Nouns-Singular-or-Plural-verb-agreement (second review fetched; the L5 stems state "acts together as one" except S10, C11, S11 above).
- Merriam-Webster headwords for every Lesson 8 split word, each fetched from `https://www.merriam-webster.com/dictionary/<word>` (for blocked pages, after a WebSearch returned the page): backpack back·pack; basket; birthday birth·day; blanket blan·ket; bonfire bon·fire; bottle bot·tle; boxcar box·car; bubble bub·ble; bucket buck·et; butter but·ter; butterfly but·ter·fly; button but·ton; cabbage cab·bage; cactus cac·tus; cardboard card·board; carrot car·rot; cattail cat·tail; circus cir·cus; conductor con·duc·tor; cupcake cup·cake; cushion cush·ion; doorbell door·bell; feather feath·er; fisher fish·er; flashlight flash·light; garden gar·den; hammock ham·mock; happen hap·pen; happy hap·py; helmet hel·met; insect in·sect; jacket jack·et; kettle ket·tle; kitten kit·ten; ladder lad·der; lantern lan·tern; letter let·ter; locker lock·er; magnet mag·net; market mar·ket; minnow min·now; mitten mit·ten; monkey mon·key; mother moth·er; muffin muf·fin; pebble peb·ble; pencil pen·cil; pepper pep·per; pillow pil·low; pitcher pitch·er; popcorn pop·corn; postcard post·card; pumpkin pump·kin; puppet pup·pet; puppy pup·py; rabbit rab·bit; raincoat rain·coat; railroad rail·road; ribbon rib·bon; rocket rock·et; rubber rub·ber; sister sis·ter; suitcase suit·case; summer sum·mer; sunflower sun·flow·er; sunlight sun·light; sunset sun·set; tennis ten·nis; ticket tick·et; toothbrush (the entry page has no dots; the headword of https://www.merriam-webster.com/dictionary/toothbrushing is tooth·brush·ing, which agrees with tooth- | brush); tractor trac·tor; trumpet trum·pet; tunnel tun·nel; turkey tur·key; turtle tur·tle; washer wash·er; windmill wind·mill; window win·dow; winter win·ter; yellow yel·low.
- One-syllable words (never split; the headword has no dots): clock, floor, glass, help, jump, line, lunch, plant, school, stream.
- Every keyed split in L8 matches its Merriam-Webster headword. The L8 MUSTs above concern the stated reasons, not the keys. Where the lesson's own rules (ck, th stay together) do not choose between two options, only the dictionary does.

### 7. What I did not do

- No lesson edit, no git, no republish. Server on port 8761 (pid 3622) killed by pid; other agents' servers were not touched.
- I did not rate the legacy T-* test items outside L-GUM3; Test A and B in L-GUM3 were solved blind and agree with the keys.
- The accessibility of the dropdown tap (native select) was driven by `select_option`, not a touch.

### 8. Files used (scratchpad `b6r3/`)

`load.js`, `blind.js`, `ans-1..8.txt`, `cmp.js`, `jac.js`, `jacall.js`, `keychk.js`, `stale.js`, `dump.js`, `d1..d8.txt`, `struct2.js` (passages, FK, longest key), `unoff.js` (unoffered sentences), `ht.js`, `ht2.js` (hot-text), `dupe.js`, `dupe2.js`, `xdup.js` (cross-file duplicates), `pre.js` (keys in Teach/Learn), `run390.py` (browser run).


## Fourth review (lessons 1, 5, 6, 8; Lesson 4 wording check; 2026-10-27)

**Role:** independent reviewer, fresh eyes. I did not write the lessons and I took part in none of the earlier reviews. **Scope:** Lessons 1, 5, 6 and 8 in `js/data/lessons/L-GUM3.js` at HEAD (e091ac7, the frozen copy `/home/claude/pp-content`), plus a check that the Lesson 4 edits made after the third review were wording only. **Read-only:** no lesson, set or engine file was edited and no git command that writes was run (`git diff`/`git show` only, to compare with ddbc049, the commit the third review judged). The only repo file I touched is this one (append). One test server ran on port 8793 (pid 21404) and was killed by pid; other agents' servers were not touched. Work files are in the scratchpad folder `b6rev4/`.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 1 Apostrophes | **ACCEPT** (with SHOULDs) | 0 | 5 | 5 |
| 4 Coordinating conjunctions | **ACCEPT** (stays accepted; wording-only edits confirmed) | 0 | 1 | 2 |
| 5 Collective and abstract nouns | **CHANGES REQUIRED** | 1 | 3 | 4 |
| 6 Reflexive pronouns | **ACCEPT** (with SHOULDs) | 0 | 4 | 4 |
| 8 Hyphens at line breaks | **CHANGES REQUIRED** | 1 | 5 | 3 |

All 13 third-review MUSTs are genuinely fixed in the files (section 3). Two MUSTs are new: one hint in L8 states a false letter placement (S06 hint 3) and one L5 twin (S07) lacks the "acts as one" premise that its twin and S10 carry.

### 1. Blind solve

- **Method as the brief asks.** Node `vm` loader (`load.js`); a script (`blind.js`) that prints every `core` item (each `{ref}` resolved to its `practice` item), every `similar` item, the three Together items and Test A of lessons 1, 5, 6 and 8, with choices, slot options and match rows shuffled (seeded LCG, seed 4000 + 91 x lesson index), whole passages printed, and hot-text `targets` printed as references to numbered sentences. It prints no `correct`, `answer`, `why`, `hints`, `how`, `clue`, `like` or `misconception`. None of these lessons has a figure, so there is no figure alt text. I solved all of it from `blind-1/5/6/8.txt` and saved `answers.json` (152 answers; md5 17e58f23712cb190c845d746bb5e3660) before I opened the keys, the author log or any review.
- **Agreement: 152 of 152** (core 60 with refs resolved, similar 60, Together 12, Test A 20). `compare.js` re-runs the same shuffle and maps my letters back to the keyed indexes.
- **Was it fully blind? Nearly.** Before I wrote `blind.js` I printed one item's JSON and one set's JSON to learn the schema, and that print showed the keys of two items in Lesson 1 (Together P1, `it's`, and core C03, `won't`). I solved those two with that knowledge, so the blind result is 150 of 150 for the rest plus two I had seen. I read nothing else of the lesson source, the author log or the earlier reviews until the answers file was saved.
- The solve found no ambiguity in a key by reading, except the two defensibility problems in section 4 that I flag from the stem alone (L5 S07, L1 S02 "every apostrophe"). Everything else in section 4 was found by the audits.

### 2. Gate and mechanical results

- `node verification/check-content.js --all`: PASS, 0 failures, 81 warnings (ledger "no independent-review record", check forms edited in wording since the record, including `use-apostrophes ... :A`). None names an item in these four lessons.
- **Passages:** 24 passages in these four lessons, 111 to 128 words (my count, hyphen fragments as one word, "(n)" markers removed); `verification/readability.py` FK 1.7 to 4.5 (L5 p4 is exactly 4.5, the ceiling, no headroom). Every `{ref}` and every hot-text target resolves to a numbered sentence; every "sentence N" in a hint, how or why points at a sentence that holds the quoted word (script `sentref.js`, all passage items).
- **Twin overlap** (`jac.js`; lower-case words over prompt, stem, text, choices, slot options, match rows and columns, ebsr parts and the sentences a hot-text item targets; each of the 60 similar items against its own `like` core item; 15 distinct `like` values per lesson). Maximum set / multiset: **L1 0.182 / 0.207, L5 0.192 / 0.205, L6 0.186 / 0.200, L8 0.209 / 0.206. No pair is above 0.21 on item text.** The author log's figures match (L1 multiset 0.205 vs my 0.207: same pair class, within rounding of how contractions are tokenised). With the passage text added the maxima are higher (L1 0.180 / 0.219, L5 0.221 / 0.266, L6 0.227 / 0.274, L8 0.181 / 0.246) because the twin and core texts share stock words; none is near 0.30. NOTE.
- **Twin metadata** (`twinmeta.js`): only L1 S05 and S15 change format from their core item (mc to ms, 1 point to 2); both keep DOK 3. Points are right everywhere (choose-two, two-slot dropdown, ebsr and match items are 2 points; the rest 1). Core DOK: L1 none at 1, four at 3; L5 two at 1 (C03, C08), two at 3; L6 none at 1, three at 3; L8 two at 1 (C08, C15), one at 3 (C13) plus C09. Formats: `mc` is at most six in each lesson (L1 exactly six).
- **Alignment with `official`:** the four rows read "Use apostrophes to form contractions and singular possessive nouns", "Use collective and abstract nouns", "Use reflexive pronouns", "Use hyphens to divide words at line breaks" (all p. 16, grade 3 column `M` in the GaDOE GUM chart text). All 60 core items test the named skill, with one drift: five of the L5 core items (C04, C07, C10, C11, C14) are subject-verb agreement with a collective noun, which the standards also place under 3.L.GC.2.c. NOTE L5-N1.
- **Keyed text vs why/how/hints** (`keychk.js`): the keyed option appears in `how` or `why` for all 130 keyed mc, ms, ebsr and dropdown answers in core and similar (0 misses), and no hint contains a keyed option verbatim (0). Stale-text scan (`stale.js`): every unusual token in a hint, how, why or misconception is on the item's screen, in its passage or in the Teach and Learn text; the L1 S01 and S02 stale names found in the third review are gone.
- **Longest key** (`longest.js`, per question or slot): key uniquely longest in L1 2 of 38, L5 4 of 34, L6 5 of 37, L8 0 of 33, about 9 percent overall against about 25 percent by chance. Highest ratios: L5 T5 1.34 (older Test A item), L6 P4 1.28 and S01 1.27, L1 T1 slot 2 1.17, L5 S12 1.17. NOTE only.
- **Learn It and Watch Me against the fifteen** (`wmdup.js`, 4-gram scan of Teach, example and each Watch Me against every item; exact-string scan): no Teach, example or Watch Me sentence appears in an item or passage. Paraphrases and shared key facts are listed per lesson below.
- **Concept and sentence duplicates over all of `js/data`** (43 other files, `xdup.js` 6-gram scan and `xsent.js` exact-sentence scan): no whole-item duplicate. Only stock frames ("Choose the word that correctly completes the sentence", "This question has two parts. Answer Part A, then Part B.", "A common mix-up is thinking ...") plus four content hits (NOTEs): L5 T5 option "Two horses ran across the field." is verbatim in `sets/L-GRM-01.js` line 134; L1 Watch Me 1 "We are going to the zoo." is verbatim in the `L-GUM2.js` teach example (line 476); L1 P5 option "We'll eat lunch under the big oak tree" has a near copy ("We ate lunch under the big oak tree") in `L-GUM5.js` line 723; the L5 and L1 hint phrases "an abstract noun names an idea", "a word that only means more than one" repeat `sets/L-GRM-01.js` and `sets/L-GRM-02.js`.
- **Browser, 390 x 844, touch, mobile viewport** (Playwright, `run390.py`, one browser process per lesson because the single-process Chromium dies when a context closes). All 60 core items of the four lessons were opened through `PP_PLAYER.start("SK:<code>:y|y2|y3", "try")`; for passage items the passage tab was tapped (the visible passage was the right one in all cases), then `#tab-question`; the keyed answer was entered by real taps (choices, hot-text sentences, match buttons; `select_option` for the native selects) and Check was tapped. **60 of 60 accepted. No horizontal scroll, no page error.** I also looked at a 390-wide screenshot of the L8 passage with the `|` marks (`l8-c06-p.png`): the marks and the hyphens read clearly.

### 3. Third-review MUSTs and the author log: genuinely fixed in the files?

I compared HEAD with ddbc049 field by field (`diffobj.js`): 47 lines changed, in L1 (10 fields), L4 (8), L5 (3), L6 (6), L8 (20); L2, L3 and L7 are byte-identical.

| Third-review MUST | In the files now | Result |
|---|---|---|
| L1-1 S01 hint 3, how, why name haven't and she's | now hasn't and Pia's, both on screen | FIXED |
| L1-2 S02 hint 3, how, why, misconception name it's | now cup's and cups, which is option E | FIXED |
| L1-3 C09 two defensible answers | "which was the home of one young fox" states the owner count; foxes' would contradict the clause | FIXED |
| L5-1 C07, S07 hint 2 states the -s test | hint 2 is now "Read each sentence aloud and listen for whether its verb sounds right with one group"; the -s fact is in hint 3 and how | FIXED |
| L5-2 S10 lacks "acts as one" | prompt now says "both being single units" | FIXED |
| L6-1 C12, S12 hint 2 states the key | now "notice whether it names anyone besides Rosa/Lila" (the wording the review prescribed). See SHOULD L6-1 | FIXED (thin) |
| L6-2 C10 copies the Teach example | now "Ella watched {herself} in the shop window, and the kitten licked {itself} clean"; no Teach or Watch Me frame | FIXED |
| L8-1 C09 false reason (Sam) | Sam is now buc- \| ket; c and k really are on different lines; hint 3, how, why, misconception are true | FIXED |
| L8-2 S09 false reason (Lia) | Lia is now mot- \| her; t and h really are on different lines | FIXED |
| L8-3 C12 false reason (ti- \| cket) | ti- \| cket replaced by ticke- \| t; tic- \| ket is the only option that separates c and k; every sentence in hint 3, how, why checked true | FIXED |
| L8-4 S12 two options fit | fea- \| thers replaced by f- \| eathers; stem now "keeps th together and also falls between the two beats"; only feath- \| ers fits | FIXED |
| L8-5 P5 "bir- \| thday breaks up th" | how, why, misconception now say it "cuts the first small word in half" (true: bir \| th) | FIXED |
| L8-6 C05, S05 Part B hint 2 leaves one live | now "compare the four facts one at a time with the word you chose in Part A"; four live | FIXED |

**Author-log claims I tested against the files**
- True: twin maxima; passages at 101 words or more (mine 111 to 128 with a different counting rule); "0 misses" in the key-in-why check; L6 C12/S12 hint 2 changed; L8 C05/S05 hint 2 changed; L5 S10 premise added; the P5 `why` edit; L4 edits are in how and why text only.
- **False or overclaimed (L8):** "L8 reasons about letters on different lines, each tested against the actual placement" and the log's "so every stated reason is literally true" for C12/S12. One stated placement is false: **S06 hint 3** says "Pump- | kin splits between the consonants m and p"; the break is between p and k (see MUST L8-1 below). Two further explanations cite a rule that does not separate the wrong option from the key (SHOULD L8-2).
- **Overclaimed (L4):** "every phrase of the form ', so X fits' became '. The joining word X fits'" is literally true, but the same awkward construction survives in seven other places in L4: S08 how "so and adds one more thing" and C07 and S07 hint 3, how, why "so nor can follow" / "so nor does not fit" (lines 4577, 4578, 4581, 5067, 5068, 5071, 5100). See L4 below.

### 4. Findings by lesson

#### Lesson 1: Apostrophes (ACCEPT)

All 38 items solved blind and agree. Every hint, how and why sentence I read for the 30 core and similar items and the 3 Together addons is true of the options on screen. Hint ladders: four live or three live after hint 3 in every mc and ms item; two live (the accepted floor) in dropdowns C04, C09, S04, S09, C12 and S12 slot 2 and in hot-text items after hint 3; no ladder collapses.

**SHOULD**
- **L1-S1 SK-GUM3-1-S02 (and the older P5) stem "every apostrophe is right".** Option A "Dad said we shouldnt run near the pool." has no apostrophe, so "every apostrophe is right" is vacuously true of it; a literal reader has three defensible lines. Hint 1 and the clue rescue it ("check that it is there"), but the stem should not need that. Fix: "Pick the TWO lines that are written correctly." (P5 already says "use apostrophes correctly"; same small risk with "cant".)
- **L1-S2 SK-GUM3-1-S05 and S10 (DOK 3) are dense for grade 3.** S05 options: "The robot owns the batteries, which is the job of its here." / "Say it's as two words and the line still reads fine." (keys) against "A robot is a single object, so each tiny word takes a mark." and "Who owns the batteries? The robot, says it's." (nonsense distractors); "Say it's as two words" is itself an odd phrase. S10 key is the longest option (about 120 characters) and says "squeezed form" and "merely counts melons". The skill is fine; the sentences are hard to parse. Fix: plain statements ("Its means belonging to the robot." / "It's means it is.").
- **L1-S3 SK-GUM3-1-C10 repeats two of C06's five sentences.** Both use passage p2 in set 2. C06's keys are Jupiter isn't and She's (sentence 8); C10 asks about Mom's (sentence 4) and She's (sentence 8), and its key option says "She's is short for she is". A child who answered C06 has the C10 answer. Plan §6.7 and §4.3 rule 4 want distinct key facts inside a set. Fix: ask C10 about sentences not offered in C06 (for example sentences 2 and 4 or 5), or move C10 to another passage.
- **L1-S4 SK-GUM3-1-C03 key fact equals Watch Me 3 and Teach point 2.** "wont / won't" is the first pair of Watch Me 3 ("The snail wont / won't leave its shell"); C03 asks the same position question for the same word. The third review fixed S12 for the same fact and left C03. Won't is the one irregular contraction, so it cannot be avoided in the lesson; change the Watch Me pair instead (for example the second pair only) or make C03 a different word that Teach does not name.
- **L1-S5 Learn It does not model 's = is versus 's = belonging.** C10, C15, S10 and S15 (four of 30, three DOK 3) need that contrast; it appears only in Teach point 3. Add it to Watch Me 2 or a fourth step.

**NOTE**
- S07 Part A distractors C ("We couldn't wait to eat") and D ("Ray's grill") contain neither its nor it's, so they are not plausible answers to "where its or it's is used wrongly"; the item is still fair.
- C04 and S04 `misconception` lines are garbled ("leaving off the apostrophe because the word already ends in s once you add it"; "looks complete with an s"). Reword.
- S02 hint 3 says "puts an apostrophe in a plain plural, with the cups"; the phrase "with the cups" reads oddly.
- Non-twin pair overlap and the three duplicate-sentence hits in section 2 (L1 Watch Me 1, P5 option).
- Check form A (Test A) of this lesson is flagged "edited in wording since the record" by the gate; the lead should refresh the record.

#### Lesson 4: Coordinating conjunctions (stays ACCEPTED)

**Were the post-third-review changes wording only?** Yes. `diffobj.js` (field-level deep compare of the lesson object, ddbc049 against HEAD) lists exactly eight changed fields and nothing else in L4: core C08 `how[2]`, C09 `why`, C11 `how[2]`, similar S01 `how[1]`, S08 `how[2]`, S09 `why`, S11 `how[2]`, and addon P5 `how[1]`. No `prompt`, `stem`, `text`, `choices`, `options`, `slots`, `answer`, `correct`, `hints`, `clue`, `like`, `points`, `dok`, `std`, `passages` or `misconception` changed; no key or option changed. The `git diff` hunks agree (", so X fits" to ". The joining word X fits" in each). I read all eight new strings: each is true of its item (C08 rows bell/so, boots/for, test/yet; C09 but then so; C11 and then or; S01 so then and; S09 but then so; S11 so then and; S08 or; P5 so then and), and the item set, twins and keys are as the third review accepted. **Lesson 4 stays correct and ACCEPT.**

**SHOULD**
- **L4-1 the awkward construction survives in seven places.** S08 how step 3 "Mia and Leo each packed something, so and adds one more thing"; C07 hint 3 and how, and S07 hint 3, how and why: "Both start with a no, so nor can follow", "... say yes, so nor does not fit" (lines 4577 to 4581, 5067 to 5071). The author log's "fixed" refers only to the "fits" form. Say "the joining word nor can follow".

**NOTE**
- The S08 residue is the only one that reads as a mistake ("so and adds"); the "so nor" lines parse.
- `how` and `why` use "joining word" and the Teach text uses "conjunction"/"joining word"; consistent.

#### Lesson 5: Collective and abstract nouns (CHANGES REQUIRED)

**MUST**
- **L5-M1 SK-GUM3-5-S07 (ms) has no "acts as one" premise, so three distractors are defensible.** Prompt: "In which TWO of these do the group and its verb agree?" Options: The staff clean the room after lunch / The band plays at every home game (key) / The choir sing in the gym today / The cast arrive before every show / Our team wins when we help each other (key). Standard usage lets a collective noun take a plural verb when the members act separately, and British usage prefers it: "In British English they are more often plural ... a plural verb is used" and "a singular verb is still correct" (https://learnersdictionary.com/qa/Are-Collective-Nouns-Singular-or-Plural-verb-agreement, fetched 2026-10-27). Staff cleaning, a choir singing and a cast arriving are exactly the "members acting separately" cases. Its twin C07 says "Treat each group as one unit"; the third review made the same ruling for S10 and it was fixed. The premise appears only in hint 1 ("A group that acts as one takes the verb for one"), which the child must open. Fix: add "Treat each group as one unit." to the S07 prompt, as C07 does.

**SHOULD**
- **L5-S1 C11 and S11 stems still state no premise** ("the verb does not match the collective noun"; "a verb that clashes with the group word"). Third-review SHOULD, not done. The keyed sentences carry a cue ("work together to find food", "stay close together when they eat"), so the key holds, but sentence 9 in each ("We hope the colony stay healthy", "Everyone hopes the flock return tomorrow") has no such cue. Add "Each group acts as one."
- **L5-S2 C05 and S05 Part B key still echoes Teach point 5 and Watch Me 2.** Key: "You can see him climb, but you cannot touch courage itself." Teach: "You can see a friend, but you cannot touch friendship." Same see/touch template, and the only option phrased as that test. Third-review SHOULD, not done. Rephrase the key or the Teach line.
- **L5-S3 C07 and S07 hint 3 hands over a mechanical test.** Hint 3: "Eat does not end in -s, so it is the verb for many." Applying it to the other four options leaves exactly the two keys. The third review accepted this ("keep the -s fact for hint 3"); I record it because the ladder audit asks that hint 3 not leave only the key. Soften to "Look at the verb's ending" or drop the example.

**NOTE**
- L5-N1 alignment drift (section 2): five of 15 core items are agreement items, a different row.
- L5-N2 C08 and S08 rows are Teach pairs (wolves/pack, fish/school, ants/colony, kittens/litter; flock is in Teach point 1); closed class, unavoidable. Hint 3 gives one row, a scaffold the ladder allows.
- L5-N3 T5 option "Two horses ran across the field." is verbatim in `sets/L-GRM-01.js` (older Test A item, not B6 text).
- L5-N4 p4 is at FK 4.5, no headroom; C10 models the error sentence "The whole orchestra were ready" in the draft (the child fixes it, fine).
- Verified clean: C04, C10, C14, S04, S10, S14 premise present; C06 and S06 unoffered sentences hold no abstract noun the stem asks for (checked every sentence of p2 and p5); C11 and S11 unoffered sentences hold no verb error; C13 and S13 keys (teamwork, strength; wisdom, beauty) are not feelings, the three distractors are.

#### Lesson 6: Reflexive pronouns (ACCEPT)

**SHOULD**
- **L6-S1 C12 and S12 hint 2 collapses the item by application.** Hint 2: "Read each choice and notice whether it names anyone besides Rosa" (Lila). The other three options all name someone else (friends, teacher, cousin / aunt, neighbor, classmate), so applying hint 2 leaves one choice; hint 3 then states the fourth. This is the wording the third review prescribed, so it is not a regression, but the cause is the distractor set. Fix: make one distractor name nobody ("Rosa finished the project at her own desk") so the hint cannot decide.
- **L6-S2 SK-GUM3-6-S14 uses "everyone" as the group.** "Have fun, everyone! Please enjoy {yourselves}"; hint 2 and how say "everyone, which is more than one person". In a lesson about agreement, "everyone" takes singular verbs, so a child can defend yourself. Use "kids" or "team" (C14 already uses "kids").
- **L6-S3 the "ourself" error frame is repeated in seven items** (C05 A, C07 C, C15 B, S01 D, S15 A, P2 C, T4 E: "We V ourself a N"). Plan §4.3 rule 6 says no two sentences may share a frame. Third-review SHOULD, still open.
- **L6-S4 C05 Part B key and S05 Part B key paraphrase Watch Me 2.** WM2: "The girls are more than one person, so the word must end in -selves." C05 key: "We is more than one person, so the word has to end in -selves." S05 key: "Kids means several, and theirselves is not a real word." Plan §6.7 forbids paraphrasing a Watch Me. Rephrase.

**NOTE**
- C03 needs the object form me; Teach says "myself in place of I or me" but no step models me versus I, and Watch Me 3 shows I. Hint 2 teaches the method (leave out Luis and), so it is fair.
- C11 and S11 stems say "myself or himself", but two of the five offered sentences use herself and ourselves (and Gus/Tessa lines), so they are visibly out of range. Harmless; the offered set could use myself or himself in all five.
- S01 option A "The twins made themselves a tent." is the Teach example frame ("The twins made themselves a snack"); it is a distractor, so it helps elimination by memory, not the key.
- C09 and S09 are labelled DOK 3 but are a one-step choice of the reflexive; DOK 2 is more honest.

#### Lesson 8: Hyphens at line breaks (CHANGES REQUIRED)

Every keyed and every distractor split in the lesson was checked against two sources: Merriam-Webster headwords (section 5) and the TeX hyphenation table in `pyphen` 0.18.1, `en_US` (`splits.js`, 121 split words in passages, items and tests). **Every correct split is a dictionary syllable break; every incorrect split is one the dictionary rejects.** The defects are in the stated reasons.

**MUST**
- **L8-M1 SK-GUM3-8-S06 (hot text) hint 3 states a false letter placement.** Hint 3: "Pump- | kin splits between the consonants m and p, which is correct. Check the other four sentences." The break in pump- | kin is between **p and k**; m and p are both on the first line. The sentence is shown to the child (hint 3 is the scaffold level) and misdescribes the very split it vouches for. Pumpkin has three consonants between its vowels (m, p, k), a case the Teach rule (two different consonants) does not cover, so the child cannot rebuild the claim. Merriam-Webster: pump·kin (https://www.merriam-webster.com/dictionary/pumpkin). Fix: "Pump- | kin has a first beat you can say alone, pump. Check the other four sentences," or "splits between p and k".

**SHOULD**
- **L8-S1 SK-GUM3-8-C07 (wa- | sher) and S01 row 2 (ro- | cket) give a reason that does not separate the wrong option.** C07 how and why: "Washer has the letters sh, which stay together, so it should be wash- | er." But wa- | sher keeps sh together too (wa- | **sh**er). S01 how and why: "Rocket should be rock- | et, because the letters ck stay together." But ro- | cket keeps ck together (ro- | **ck**et). No sentence is false; the reason is the one the third review called not discriminating for ti- | cket and fea- | thers, which was fixed by replacing the option. Here only the syllable (wash-er, rock-et; Teach point 2 "split a word between syllables") separates them, and a child who tests wa- | sher or ro- | cket against "ck and sh stay together" finds them correct. Merriam-Webster: wash·er (https://www.merriam-webster.com/dictionary/washer), rock·et (https://www.merriam-webster.com/dictionary/rocket). Fix: replace wa- | sher with was- | her and ro- | cket with roc- | ket (each really pulls the pair apart), or say "wash is the first beat" in how and why.
- **L8-S2 SK-GUM3-8-C09 and S09 hint 2 plus hint 3 identify the flawed split.** C09 hint 3 "In Sam's split, the c and the k are on different lines" is now true; with hint 2 ("whether any letters that make one sound were pulled apart") it fixes which student is wrong. In C09 that leaves two live (Only Pia / Neither); in S09 it leaves effectively one, because A, B and D all say Lia is right. Fix: keep the fact for how and let hint 3 ask "Which student kept th (ck) on one line?" without saying it.
- **L8-S3 C14 (pocket) and S14 (chicken) fit two columns literally.** "Two different consonants" is literally true of the c and k in pocket and chicken; the key is "Letters that stay together" (Teach: ck). Elimination resolves it (each column is used once in the key), but the UI does not force one use per column. Add a column name "Letters that make one sound" and keep "Two different consonants" for words with no digraph, or add a sentence to the prompt: "ck counts as one sound".
- **L8-S4 C06 and S11 stems are word for word identical** ("Select the TWO sentences that have a word split in the wrong way. The | mark shows where the line ends."). Third-review SHOULD, not done. Reword one.
- **L8-S5 digraph and compound rules are in Teach only.** C09, C12, S09, S12, C07, S01, S14, C14 (ck, th, sh) and C03, C10, S03, S10 (two smaller words) rest on rules that none of the three Watch Me examples model (they cover two consonants, double letter, one syllable). Add a fourth step or swap Watch Me 2.

**NOTE**
- L8-N1 Typographic caveat: several correct splits leave a two-letter tail on the next line (pup- | py, hap- | py in Teach, pump- | kin is fine at three). Typesetting guides advise avoiding a tail of fewer than three letters (https://www.c82.net/typography/term/division-of-words); the lesson's own rule is only "never one letter alone". Not an error at grade 3.
- L8-N2 C05 and S05 key and Part B repeat Watch Me 3's key fact (one-syllable words are never split; "write the whole word on the next line"), with a different word. The plan's "same key fact" rule read strictly would flag it; I treat it as the lesson's one-syllable item pair and leave it.
- L8-N3 Hints leave exactly two live after hint 3 in P5, C03, C10, C15, S15 (accepted floor). C13 and S13 lose one of five options at hint 3, so four stay live.
- Verified clean: C09 (buc- | ket) and S09 (mot- | her) now separate the pair as stated; C12 (ticke- | t, t- | icket leave a single letter alone, tic- | ket splits ck); S12 (f- | eathers, feat- | hers, feathe- | rs); P5 (bir- | thday cuts birth); all of C03, C04, C08, C10, C11, C13, C15, S02, S03, S04, S07, S08, S10, S11, S15, T1 to T5 reasons tested against letter placement (every "pulls apart", "cuts a small word", "both on the second line", "leaves one letter alone" is true); hot-text unoffered sentences (p2, p3, p5, p6) hold no extra wrong split.

### 5. Web and dictionary checks (fetched 2026-10-27)

- Merriam-Webster headwords fetched for the risky L8 words: pump·kin https://www.merriam-webster.com/dictionary/pumpkin; wash·er https://www.merriam-webster.com/dictionary/washer; pitch·er https://www.merriam-webster.com/dictionary/pitcher; buck·et https://www.merriam-webster.com/dictionary/bucket; rock·et https://www.merriam-webster.com/dictionary/rocket; moth·er https://www.merriam-webster.com/dictionary/mother; min·now https://www.merriam-webster.com/dictionary/minnow; con·duc·tor https://www.merriam-webster.com/dictionary/conductor; tick·et https://www.merriam-webster.com/dictionary/ticket; feath·er https://www.merriam-webster.com/dictionary/feather; cush·ion https://www.merriam-webster.com/dictionary/cushion; lan·tern https://www.merriam-webster.com/dictionary/lantern; chick·en https://www.merriam-webster.com/dictionary/chicken; pock·et https://www.merriam-webster.com/dictionary/pocket. The other 107 split words agree with the `pyphen` en_US pattern and with the third review's Merriam-Webster list.
- Word division rules (syllables, compounds at their parts, no single-letter line end, avoid short tails): https://www.c82.net/typography/term/division-of-words. The page does not itself say one-syllable words are never split; that follows from division by syllable.
- Collective noun agreement (American usually singular, British usually plural, plural when members act separately; singular always safe): https://learnersdictionary.com/qa/Are-Collective-Nouns-Singular-or-Plural-verb-agreement. Basis for MUST L5-M1.
- "theirselves" nonstandard: https://writingexplained.org/?p=12434 ("widely shunned and rarely crops up in written English"); "myself" in place of I or me is informal and ought not to occur in writing: https://www.dictionary.com/browse/myself (usage note). Both support the L6 keys. Singular `themself` appears only as a wrong distractor with a plural subject (S05), which is correct under any reading.
- Not re-verified by me: the apostrophe, abstract-noun and hyphen-at-line-end conventions beyond what is above (taken from the third review's sources and the Teach text).

### 6. What I did not do

- No lesson, set or engine edit; no git write; no republish. Server on port 8793 (pid 21404) killed by pid; other servers on the machine were not touched.
- I did not re-solve Lessons 2, 3, 4 or 7 (not in scope), and I did not rate legacy `T-*` items outside `L-GUM3.js`. Lesson 4 was judged by field-level comparison with the accepted state, not by a new blind solve.
- The native `<select>` was driven by `select_option`, not a touch (as in the third review).
- Typed-text and screen-reader behaviour were not tested.

### 7. Files used (scratchpad `b6rev4/`)

`blind.js`, `blind-1/5/6/8.txt`, `answers.json`, `compare.js` (152 of 152), `dump.js`, `keyed-1/5/6/8.txt`, `jac.js`, `twinmeta.js`, `longest.js`, `keychk.js`, `stale.js`, `sentref.js`, `wmdup.js`, `xdup.js`, `xsent.js`, `splits.js` and `splits.json`, `diffobj.js` and `old.js` (ddbc049 copy), `run390.py` and `run390-1/5/6/8.txt`, `shot.py` and `l8-c06-p.png`, `srv.log`.


---

## Fifth review (lessons 5 and 8; Lesson 4 wording check; 2026-10-27)

**Role:** independent reviewer, fresh eyes. I wrote none of these lessons and took part in none of the earlier reviews. **Scope:** Lessons 5 and 8 in `js/data/lessons/L-GUM3.js` at HEAD effc752 (frozen copy `/home/claude/pp-content`), the fourth review's MUSTs and SHOULDs for them, and the Lesson 4 how/why edits. **Read-only:** no lesson, set or engine file edited, no git write (only `git show` / `git diff` to compare with e091ac7 and ddbc049). The only repo file touched is this one (append). One test server ran on port 8831 (pid 25979) and was killed by pid. Work files: scratchpad `b6r5/`.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 4 Coordinating conjunctions | **ACCEPTED (stays accepted; edits are wording only and still correct)** | 0 | 0 | 2 |
| 5 Collective and abstract nouns | **ACCEPT** (with SHOULDs) | 0 | 5 | 7 |
| 8 Hyphens at line breaks | **CHANGES REQUIRED** | 1 | 7 | 6 |

Fourth-review status (section 3): the L5 MUST (S07 premise) and the L8 MUST (S06 hint 3) are fixed in the files. Of the eight fourth-review SHOULDs for L5 and L8, three are fixed, two are partly fixed and three are not fixed (one of those was declared open by the author). One new MUST: **L8 S03 (bonfire) tells the child that "bon" is a smaller word.**

### 1. Blind solve

- **Method.** `load.js` (Node `vm`) loads the lesson; `blind.js` prints, for lessons 5 and 8, all six passages, every core item (each `{ref}` resolved), the 15 similar items, the three Together items and Test A, with choices, slot options and ebsr parts shuffled (seeded LCG, seed 9100 + 131 x lesson index), match rows and hot-text sentences by reference (`p2:2:2` = passage, paragraph, sentence), and **no** `correct`, `answer`, `why`, hints, `how`, `clue`, `like` or `misconception`. Neither lesson has a figure, so there is no alt text to print. I solved `blind-5.txt` and `blind-8.txt` and saved `ans5.json` and `ans8.json` (answers by choice text) **before** I printed any key (`cmp.js` was the first thing that read a key). I read no author log and no earlier review until after the answers were saved.
- **Agreement: 75 of 76 items** (L5 37 of 38, L8 38 of 38; per lesson 15 core with refs resolved, 15 similar, 3 Together, 5 Test A).
- **The one miss, SK-GUM3-5-C10 slot 2.** I chose "is" for "the audience {1} quiet"; the key is "was". I fixed slot 1 to "was" (the draft is past tense) and then did not carry the tense to slot 2. Prompt and slot give no tense cue, and "is" matches "audience" in number. See SHOULD L5-S1.
- **Fully blind?** Yes for the items. Before writing `blind.js` I printed only the field names and types of one item per format (`probe.js`, `probe2.js`), no values. I did know the lessons' titles and that L8 is about hyphen placement.
- **L8 dictionary side of the solve.** My L8 answers were made from general knowledge of syllable division. Section 2 checks every split against Merriam-Webster and `pyphen`.

### 2. Gate and mechanical results

- `node verification/check-content.js --all`: PASS, 0 failures, 100 warnings (the log says 104; other agents' lessons change the tree). `check-writing.js` 0 and 0. `check-instructional-copy.js` 28 assertions. The only warnings on L5 and L8 items are the older "hint 1 is much longer than hint 3" notes (for example L5 C03, S03, S08, P3).
- **Passages.** Six per lesson. Words (excluding "(n)", hyphen fragment as one word): L5 102 to 104, L8 101 to 104. FK (`readability.py`): L5 p4 4.5 (exactly the ceiling), every other passage 1.7 to 4.0. The author log's counts (L5 minimum 102, L8 minimum 101) are true. Every hot-text target and every "sentence N" in a hint, how or why points at the sentence that holds the quoted word (`sentref.js`).
- **Twin overlap** (`jac.js` / `jac3.js`, prompt, stem, text, choices, slot options, match rows and columns, ebsr parts and the sentences a hot-text item targets; each of the 15 similar items against its own `like` item; 15 distinct `like` values per lesson). Set / multiset maximum: **L5 0.192 / 0.205, L8 0.209 / 0.206** (L8 S04/C04 is 0.2093 on the set measure). **No pair is above 0.21.** The author log's figures are true. With the passage text added: L5 up to 0.221 / 0.279 (S05/C05 0.279, S04/C04 0.260), L8 up to 0.181 / 0.246 (S05/C05). NOTE: this is the measure the second review ruled on, and the passage-inclusive numbers come from stock words shared by different passages.
- **Format, points, DOK.** Every similar item has its core item's type and points. Core formats: `mc` four in each lesson (limit six), at least four formats. DOK 1: L5 two (C03, C08), L8 two (C08, C15); DOK 3: L5 two (C09, C13), L8 two (C09, C13). Points: every choose-two, two-slot dropdown, ebsr and four-row match item is 2 points, the rest 1. Draft-edit items: L5 six, L8 five (the plan wants five).
- **Alignment with `official`** (`standards.js`, p. 16, grade 3 column): "Use collective and abstract nouns." and "Use hyphens to divide words at line breaks." All 30 core items test the named skill, with the drift noted by the fourth review (five of 15 L5 core items are subject-verb agreement with a group noun, C04, C07, C10, C11, C14).
- **Keyed text vs why/how/hints** (`keychk.js`): the keyed option text appears in `how` or `why` for **64 of 64** keyed mc, ms, ebsr and dropdown answers in core and similar; **no hint contains a keyed option verbatim**. I also read every hint, how, why and misconception line of both lessons against the screen (sections 4 and 5).
- **Hint ladder, live choices after hints 1 to 3, counted for every core and similar item** (no item uses `hintNarrow`; hints are text only, so "live" means the options a reader can still hold after reading all three hints):
  - **L5:** hint 3 removes one option from every mc and ms item and one sentence from every hot-text item, so four live (C06, C07, C11, C13, S01, S06, S07, S11, S13) or three live (C03, C09, C12, C15, S03, S09, S12, S15). Two live: dropdowns C04, C14, S04, S14 and slot 1 of S10 (the floor the earlier reviews accepted), C05 Part A and S05 Part A (hint 3 removes two of four; Part B stays at four live), and S02 (hint 3 removes two of four sentences). C10: hint 2 says both verbs are past, so each slot has two live (was / were). C08 and S08 hint 3 give one row (one of four), as §4.5 allows. **None collapses to one.**
  - **L8:** four live: C06, C07, C13, S02, S06, S07, S11, S13 and Part B of C05 and S05. Three live: C04, C05 Part A, C08, C12, S04, S05 Part A, S08, S12, and the match rows after one row is given (C14, S01, S14). Two live: dropdowns C03, C15, S03, S15 and slot 2 of C10 and S10. C09 and S09 hint 3 remove no option, but see SHOULD L8-S3. **None collapses to one by hint 3 alone.**
- **Longest key** (`longest.js`, `ms.js`; per question or slot): single-key keys uniquely longest: **L5 3 of 34** (S09 ratio 1.02, S12 1.17, T5 1.34 in the older Test A), **L8 0 of 33**. The two choose-two items that do show a length pattern: **L8 C13** (key D, 90 characters, next longest 58) and **S13** (key C, 81, next 62), and **L5 C13** (both keys are the two longest, 43 and 40, against 36, 29, 27). SHOULD L5-S3 and L8-S4. The author log's "L5 3 of 18 (C05B 1.04 ...)" is stale: C05 Part B was rewritten in the fourth-review fix and its key (57 characters) now only ties B (57).
- **Learn It and Watch Me against the fifteen** (`wmdup.js`, 4-gram scan, plus word-level reuse): no Teach, example or Watch Me sentence appears in an item or passage. Word-level overlap is in SHOULD L8-S6 and NOTE L5-N3.
- **Concept and sentence duplicates over all of `js/data`** (43 other files, `xdup.js` six-gram and `xsent.js` exact-sentence scans; `grep` for hyphen/syllable/collective/abstract): no whole-item duplicate and no other hyphen-division item. Hits: stock frames only, plus (a) **L5 T5 option "Two horses ran across the field."** verbatim in `sets/L-GRM-01.js` (NOTE, older Test A item), and (b) **`sets/L-GRM-01.js` item L-GRM-01-7**, "The firefighter showed great courage during the storm. Which word is an abstract noun?" (key courage), which is the same key word and the same "showed courage" frame as L5 C05 Part A (SHOULD L5-S5).
- **Browser, 390 x 844, touch, mobile viewport** (Playwright, `run390.py`, one browser process per lesson because the single-process Chromium dies when a context closes; server on port 8831). All 15 core items of each lesson were opened through `PP_PLAYER.start("SK:<code>:y|y2|y3", "try")`; for passage items the passage tab was tapped and its visible passage checked against `item.passages` (no mismatch), then the question tab; the keyed answer was entered by real taps (choices, hot-text sentences, match buttons; `select_option` for the native selects) and Check was tapped. **L5 15 of 15 accepted, L8 15 of 15 accepted. No horizontal scroll, no page error.** The `|` marks and hyphens read clearly in the 390-wide L8 passage screenshot taken by the fourth review (`b6rev4/l8-c06-p.png`, which I viewed; the passage layout is unchanged).

### 3. Fourth review: genuinely fixed in the files?

I compared HEAD (effc752) with e091ac7 field by field (`diffobj.js`): 29 changed fields, in L4 (7), L5 (11) and L8 (11). L1, L2, L3, L6 and L7 are byte-identical in content.

| Fourth-review item | In the files now | Result |
|---|---|---|
| L5-M1 S07 has no "acts as one" premise (MUST) | prompt now starts "Take each group as a single whole." | **FIXED** |
| L5-S1 C11, S11 stems state no premise | both now start "Each group acts as one." | **FIXED** |
| L5-S2 C05 and S05 Part B key echo Teach point 5 / Watch Me 2 | C05 key rewritten ("It names a quality a person has, like the nerve to climb."). **S05 key unchanged** ("A sandwich has a shape, but generosity has none."). The new C05 key restates the lesson's definition and hint 1 | **PARTLY FIXED** (S05 open; new echo in C05, SHOULD L5-S2) |
| L5-S3 C07, S07 hint 3 hands over the -s test | now "Eat / Sing is the verb for many people, not for one group." The -s fact is only in hint 2 of how and in how | **FIXED** |
| L8-M1 S06 hint 3 false letter placement (MUST) | now "Pump- \| kin has a first beat you can say alone, pump, so it is correct." True | **FIXED** |
| L8-S1 C07 wa- \| sher and S01 ro- \| cket reasons do not separate the wrong option | how and why now say "washer has two beats, wash and er" and "rocket has two beats, rock and et"; both true and both separate the option | **FIXED** (but see SHOULD L8-S7 for pitch- \| er in the same item) |
| L8-S2 C09, S09 hints 2 and 3 identify the flawed split | hint 3 rewritten to "look at the line that holds the k (h) in each split". Hint 2 unchanged. C09 is fine; **S09 still collapses by hint 2** | **PARTLY FIXED** (SHOULD L8-S3) |
| L8-S3 C14 pocket, S14 chicken fit two columns | prompts now say "Treat ck as one sound" and "The pair c and k makes a single sound here." That resolves pocket and chicken, **but football (t and b) and pancake (n and c) still literally fit "Two different consonants"** | **PARTLY FIXED** (SHOULD L8-S2) |
| L8-S4 C06 and S11 stems identical | S11 reworded ("Choose the TWO sentences in which a word has been broken at a bad place.") | **FIXED** |
| L8-S5 digraph and compound rules are in Teach only | not touched | **NOT FIXED** (author declared it open; SHOULD L8-S5) |

**Author-log claims tested against the files**
- **True:** the L5 and L8 text edits listed in the "Fourth review fixes" section; the twin maxima (L5 0.192/0.205, L8 0.209/0.206); passage lengths (L5 minimum 102, L8 minimum 101); "0 misses" in the key-in-why check; "L8 S09 hint 3 no longer says which student is wrong"; "left open on purpose: L8-S5"; every L4 change is in how/why text (see below).
- **Overclaimed:** "C14 and S14 prompts now say that c and k make one sound, so 'Two different consonants' no longer fits pocket or chicken". True of those two words only; football and pancake have the same double fit through a different pair of letters (L8-S2). And "I re-read every L8 hint, how and why against its split ... no other sentence states a wrong letter placement": true of letter placement (I found none), but S03 states a false **word** ("the smaller words bon and fire"), which that re-read did not cover (MUST L8-M1).
- **Stale:** the log's "key uniquely longest" line still lists "C05B 1.04" for L5 and says "L8 0 of 18" without counting the choose-two items (L8-S4).
- **Not a false claim, but empty:** the "Live choices after hints" column of the log's item tables is blank for every L5 and L8 row.

### 4. Lesson 5: Collective and abstract nouns (ACCEPT)

Every hint, how, why and misconception sentence of all 30 core and similar items and the three Together addons was read against the options and passages on screen: every named word, every sentence number and every claim is true (checked, for example, C03 "fleet, boats, dock and line", C06 "orchestra, group and staff", C11 "sentence 2 uses moved ... sentence 7 has no group noun ... sentence 8 keeps", S06 "panel, group and litter", S13 "wisdom is a quality of thinking"). The unoffered sentences in the four hot-text items hold no extra abstract noun or verb error (p2: no abstract noun outside sentences 5 and 7; p3 and p6: no verb error outside sentences 5 and 9; p5: none outside sentences 5 and 8). Keys are single-defensible once the premise is stated, which all five agreement items now do.

**SHOULD**
- **L5-S1 SK-GUM3-5-C10 (dropdown, 2 points): the past tense is not stated.** Slot 2 offers "is / was / were". "The audience is quiet" agrees in number with the group, so it fixes the stated error ("verbs that do not match the groups"); only the draft's tense rules it out. This is the one item where my blind answer differed. Hint 2 says "both verbs must tell about the past", but that is a hint a child may not open. Fix: add "Keep the draft in the past tense." to the prompt (as C04 states its premise).
- **L5-S2 SK-GUM3-5-C05 and S05 Part B keys.** S05's key is unchanged and still uses the see/touch contrast of Teach point 5 ("You can see a friend, but you cannot touch friendship") and Watch Me 2 step 2 ("Can I see it or touch it?"); it is the only option phrased as that test. C05's new key ("It names a quality a person has, like the nerve to climb.") is now the lesson's definition, and hint 1 of C05 prints that definition ("An abstract noun names an idea, a feeling or a quality"), so a child who has read hint 1 can pick the option that says "names a quality" from three that name a group, a place and an action. Fix: write both keys as evidence about the word in the sentence (for example "Courage cannot be held or pictured as an object, but the net can." style), and keep hint 1 to the strategy question ("What kind of word is each choice?").
- **L5-S3 SK-GUM3-5-C13 key lengths.** Both keys are the two longest options (43 and 40 characters against 36, 29, 27). Fix: lengthen "Anger made his face turn red." and "Excitement filled the room." or shorten the keys.
- **L5-S4 Test A reuses core key words.** T3 key "patience" is the key word of C06 (p2 sentence 5, "Mr. Bell showed patience"); T4 rows "audience" (p2 sentence 3 and the C10 key slot) and "crew" (C07, S09, Teach); T5 key "The band marched down the street in Athens." uses "band", the Teach example noun ("Class and band are collective nouns") and the S07 key ("The band plays ..."); T2 uses "flock", the S11 key noun. Plan §4.3 rule 4 and §6.7 keep form A independent. Fix: change T3 to joy and a new noun, T4 "audience"/"crew" to unused group nouns, T5 and T2 to unused group nouns.
- **L5-S5 SK-GUM3-5-C05 Part A duplicates a mixed-set item.** "My little brother showed courage when he climbed the rope net." asks for the abstract noun (key courage); `sets/L-GRM-01.js` L-GRM-01-7 is "The firefighter showed great courage during the storm. Which word ... is an abstract noun?" (key courage). The frame "showed + abstract noun" then repeats inside the lesson (C05, C06 sentence 5, S05, S09 "The crew showed bravery", Watch Me 2 "showed kindness"), where plan §4.3 rule 6 asks for no shared frame. Fix: change C05's noun and verb (for example "felt" or "needed") and vary one of the others.

**NOTE**
- **L5-N1** (unchanged from the fourth review) alignment drift: five of 15 core items are agreement items.
- **L5-N2** Hint ladders at the two-live floor: C04, C14, S04, S14, S10 slot 1, S02, C05 and S05 Part A.
- **L5-N3** Learn It and Watch Me: three models (collective noun, abstract noun, agreement) cover the lesson's main moves. Plural-versus-collective (C12, S12, P4, S01), group-of-people versus group-of-animals (C15, S15) and "an abstract noun need not be a feeling" (C13, S13) appear only in Teach points 3 to 5. Not a defect; the Teach text carries them.
- **L5-N4** S03, S04 and S05 prompts say "Line 2", "line 4", "line 8" for the numbered sentences, while the core twins and every hint say "sentence". The screen labels them "(2)", "(4)", "(8)". In L8 "line" means a line of text, so the word is used two ways across the batch.
- **L5-N5** C09 and S09 are DOK 3 but are one-step "has both kinds of noun" checks; DOK 2 is more honest.
- **L5-N6** `jury` (S01, S12), `council` and `committee` are demanding for grade 3 but the items give the group nouns by context; "gaggle" is the only rare animal term and is in the standard lists.
- **L5-N7** The log's gate count (104 warnings) differs from my run (100) because the tree changed; no warning on an L5 item is new.

### 5. Lesson 8: Hyphens at line breaks (CHANGES REQUIRED)

**Dictionary check of every split.** All 121 split strings in the lesson (`splits.js`, `splits.json`; passages, items and tests) were compared with the `pyphen` en_US hyphenation table and, for the contested words, Merriam-Webster (section 6). Every correct split is a dictionary syllable break (pyphen, with `lantern`, `sunflower` and the four words below checked by hand against Merriam-Webster); every incorrect split is one the dictionary rejects. Words checked by hand: bon.fire, pitch.er, tick.et, buck.et, moth.er, feath.er, lan.tern, con.duc.tor, wash.er, rock.et, cush.ion, pump.kin, min.now, chick.en, pock.et.

**Sweep of every stated placement and reason.** I dumped and read every hint, how, why, misconception and clue line of the 30 core and similar items, the Together addons, the five `practice` explanations and Test A (`keyed-8.txt`) against the actual split in each option and passage sentence. Every "between the consonants x and y", "the double x", "both on the second line", "leaves one letter alone", "cuts the first small word in half", "pulls the c and k apart", "has one beat" and "has two beats" is true of the split it describes. The fourth-review false statement (S06 hint 3) is fixed. One **false statement about a word** remains (MUST below), and some reasons are unclear or do not decide the item (SHOULDs).

**MUST**
- **L8-M1 SK-GUM3-8-S03 (dropdown) says "bon" is a smaller word.** how step 2: "It is made of the smaller words bon and fire. A word made of two smaller words is split between them." The why repeats it; the misconception and hint 3 ("starts the break before the first small word is done") rest on it. Bonfire is bon.fire in the dictionary (the key is right), but "bon" is not an English word: the word is "bone fire" in origin (Oxford University Press blog: "bonfire is indeed a bone-fire", earliest form *banefyre* 1483, https://blog.oup.com/2015/03/bonfire-etymology-word-origin/; Merriam-Webster gives the division bon.fire and the Middle English "bonefire", https://www.merriam-webster.com/dictionary/bonfire). The lesson itself teaches the opposite for lantern and basket ("lan is not a word", "bas and ket are not words", C13 and S13), so a child who reads S03's explanation is told two things that contradict each other. The same sentence in the twin's core item (C03 toothbrush: tooth and brush) is true. Fix: replace bonfire with a true compound that no other item uses (for example "foot- | step" or "rain- | drop"), or keep bonfire and explain it by the two different consonants n and f (bon- | fire), rewriting hint 2, how step 2, why and the misconception to the consonant rule.

**SHOULD**
- **L8-S1 Same-set passage leaks C12's and S12's keys.** C11's passage p3 sentence 6 shows "tick- | et" (correct, unoffered); the next item, C12, asks for the better break of ticket and its key is tick- | et. Likewise S11's passage p6 sentence 8 shows "feath- | ers" and S12's key is feath- | ers. The author log says the p3 sentence was made correct on purpose so that C11 has exactly two wrong sentences. Plan §6.7 and the brief rule out giveaways inside a set. Fix: change those two passage words to correctly split words that no item uses (for example "sig- | nal" and "gar- | lic").
- **L8-S2 SK-GUM3-8-C14 (football) and S14 (pancake) literally fit two columns.** The prompts now settle ck, but football has t and b (two different consonants) as well as foot and ball; pancake has n and c as well as pan and cake. Both columns give the same split. The UI does not force one use per column (the key uses each once), so a child who reads "Two different consonants" for football is not wrong by the words on screen. Fix: say in the prompt "Use each rule once", or rename the column so it excludes compounds ("Two different consonants, no whole word on either side"), or swap football and pancake for compounds whose join is not two different consonants.
- **L8-S3 Hints 1 and 2 name the deciding rule, so a reader can write the key without the choices (plan §4.5 ladder audit, first bullet).** C03 and S03: hint 1 "Ask whether it is made of smaller words" plus hint 2 "check whether the break falls between the smaller words" give tooth- | brush from the stem word alone (compound is the only rule offered). C12 and S12: hint 1 "Look for letters that make one sound together. Those letters stay on the same line" plus hint 2 "which break pulls a pair of letters apart" give tick- | et. C08 and S08 name the double letter in hint 1 (and C08's own stem says "between the double letters"). **S09:** hint 2 ("Ask which split pulled a pair of letters apart") tells the child that Lia's mot- | her pulls t and h apart, and options A, B and D all say Lia is right, so after hint 2 only C is consistent; hint 3 was reworded but hint 2 is what collapses it (the fourth review's L8-S2). Fix: use the neutral strategy of C15 and C06 ("Say the word, look at the letters in the middle, ask which rule fits") for hint 1 on these items, and let hint 2 point at the place (the middle of the word, the letters on each side of the break) without naming the rule.
- **L8-S4 SK-GUM3-8-C13 and S13: one key is by far the longest option, and S13's wording is unclear.** C13 key D is 90 characters (next 58); S13 key C is 81 (next 62), so "pick the longest" scores half. S13 key C ("S and k are unlike letters standing among vowels, which is where the word breaks.") is circular ("where the word breaks") and hard for grade 3; distractors A and D ("Its middle holds a matching pair", "built from small words, bas and ket") are the twin-overlap rewrites of C13's. Fix: shorten both keys to the lesson's words ("Two different consonants, s and k, sit between the vowels.") and lengthen the distractors.
- **L8-S5 Digraph and compound rules are modeled only in Teach (carried from the fourth review; the author declared it open).** Nine of the fifteen core items rest on them: compounds (C03, C10, C06 flash-light/card-board, C11) and letters that stay together (C07 wash.er, C09, C12, C14), plus hyphen position (C04). The three Watch Me steps model two different consonants, a double letter and a one-syllable word only. Fix: replace Watch Me 2 (mitten, a double letter that C08 and S08 already model) with a ck or compound split, or add a fourth step.
- **L8-S6 Test A and Teach reuse core words.** T4 row 3 "pi- | llow" (not correct) is the word of C04's key (pil- | low) and of passage p1 sentence 6; T1 option "ladder" (not correct) is shown correctly split (lad- | der) in passage p2 and in C06's hint 3; T3 option "hammer" is C14's double-letter row. C07's key "pe- | ncil" has its complement printed in Teach point 3 ("pen-cil"), and Watch Me 1's window is the correctly split "win- | dow" of passage p1 sentence 9. Fix: use unused words in T1, T3 and T4, and replace pencil in C07 with a word the Teach text does not list.
- **L8-S7 SK-GUM3-8-C07 option A "pitch- | er" is correct by the dictionary but not by the lesson's rules.** By "two different consonants split between them, and ch stays together" a child gets pit- | cher; pitch- | er is correct because pitch is the base word (pitch.er, https://www.merriam-webster.com/dictionary/pitcher), a rule the lesson never teaches (it uses the same root-word idea in the washer explanation). A child who marks pitch- | er "not correct" has three wrong lines and cannot pick two. Fix: replace pitch- | er with a word the Teach rules decide (for example "sis- | ter" is in Teach, so use "fin- | ger" or "gar- | lic").

**NOTE**
- **L8-N1** C12 hint 3 ("Tic- | ket pulls the c and k apart") repeats what the stem already says (Ana's break is tic- | ket and the item asks for a better one), so it removes nothing; it is not wrong.
- **L8-N2** C15 hint 3 "Magn- | et leaves two consonants with the first part and pulls them from the e" reads unclearly. Say "puts both g and n on the first line".
- **L8-N3** pump- | kin has three consonants (m, p, k), a case the Teach rule does not cover; the new hint 3 ("first beat you can say alone, pump") is true and sufficient, and the sentence is a correct distractor in S06 only.
- **L8-N4** One-syllable words are tested in many items (C05, S05, P2, P3, C06, S01, S02, S06, T3, Watch Me 3). Each uses a different word and task, so the plan's distinctness bar holds; it is the lesson's most repeated key fact.
- **L8-N5** Typographic caveat (carried): several correct splits leave a two-letter tail (pup- | py, mit- | ten); not an error for grade 3.
- **L8-N6** Verified clean: C03, C04, C05 (all four parts), C06, C08, C09, C10, C11, C13 (all five reasons tested against lantern), C15, S01, S02, S04, S05, S06 (now), S07, S08, S09 (reasons), S10, S11, S12 (f- | eathers, feat- | hers, feathe- | rs), S15, P1, P2, P5, T1 to T5; the unoffered sentences of hot-text items hold no extra wrong split (p2, p3, p5, p6).

### 6. Lesson 4 (stays ACCEPTED): were the how/why edits wording only, and are they still correct?

`diffobj.js` deep-compares the lesson objects. **HEAD against e091ac7** (the state the fourth review judged): seven L4 fields changed and nothing else: core C07 `how[1]`, `how[2]`, `why`; similar S07 `how[1]`, `how[2]`, `why`; similar S08 `how[2]`. **HEAD against ddbc049** (the accepted state): 14 fields, all of them `how`, `why`, or the addon P5 `how[1]` (C08 how[2], C09 why, C11 how[2], S01 how[1], S09 why, S11 how[2], S08 how[2], P5 how[1], plus the C07/S07 ones). No `prompt`, `stem`, `text`, `choices`, `slots`, `answer`, `correct`, `hints`, `clue`, `like`, `points`, `dok`, `std`, `passages`, `teach` or `learn` field changed. L1, L2, L3, L6 and L7 are unchanged in content. All seven new strings are true of their items:
- C07 how 2 and how 3 and why: "Both start with a no, so the joining word nor can follow" (Kofi did not pack a coat; the cat would not eat) and "Mina likes apples, we can have soup, and I wanted to swim all say yes, so the joining word nor does not fit". True; keys (Kofi ... nor did he pack gloves; The cat would not eat, nor would it drink) unchanged.
- S07 how 2, how 3 and why: "Ruth never cleaned her room, and the milk was not cold. Both start with a no ..."; "Gus hums loudly, our team won, and you could go home all say yes ...". True; keys unchanged.
- S08 how 3: "Mia and Leo each packed something, so the joining word and adds one more thing." True of row 1 (and).
No "so nor" or "so and" survives in L4 (grep). I did not re-solve Lesson 4 blind; the verdict rests on the field-level comparison and on reading all affected items. **L4 stays ACCEPTED.**
- NOTE L4-N1: in a lesson that teaches the joining word "so", the connective "so" inside the how text ("Both start with a no, so the joining word nor can follow") is a second use of the word; harmless.
- NOTE L4-N2: the log's claim that the awkward construction was fixed in "C07 (two how lines and why) and S07 (two how lines and why), S08 how" is true.

### 7. Web and dictionary checks (fetched 2026-10-27)

- bonfire: syllables and etymology, https://www.merriam-webster.com/dictionary/bonfire (bon.fire; Middle English "bonefire", "bone" + "fire"); https://blog.oup.com/2015/03/bonfire-etymology-word-origin/ ("bonfire is indeed a bone-fire", *banefyre* 1483; the "good fire" theory is an older, rejected one). Basis for MUST L8-M1. (The merriam-webster.com/dictionary/bon and etymonline pages were not on the fetch allowlist.)
- pitcher: https://www.merriam-webster.com/dictionary/pitcher (pitch.er, both senses). Basis for L8-S7.
- Word division rules (syllables; a single consonant between vowels goes to the next syllable; compounds divide at their parts; two consonants forming one sound are never separated; a single-letter piece must not start or end a line; avoid a two-letter tail): https://www.c82.net/typography/term/division-of-words . It does not say one-syllable words are never split; that follows from division by syllable.
- Collective noun agreement (American usually singular, British usually plural; a plural verb can appear when members act separately, a singular verb is always correct): https://learnersdictionary.com/qa/Are-Collective-Nouns-Singular-or-Plural-verb-agreement . All five agreement items now state the "acts as one" premise, so the keys are the singular forms.
- Group names (pack of wolves, litter of kittens, pod of whales and dolphins, gaggle of geese, troop of monkeys; school of fish, colony of ants, flock of sheep and geese as listed alternatives): https://www.grammar-monster.com/list_of_collective_nouns_for_animals.htm . (Ants also have "swarm" there; no item offers swarm as a distractor for ants.)
- Not re-verified by me: the abstract-noun definition beyond the Teach text (the search returned only commercial tutoring pages, none authoritative), and the other L8 headwords not listed here (they agree with `pyphen` and with the fourth review's Merriam-Webster list).

### 8. What I did not do

- No lesson, set or engine edit; no git write; no republish. The server on port 8831 (pid 25979) was killed by pid; other servers on the machine were not touched.
- I did not re-solve Lessons 1 to 4, 6 or 7. L4 was judged by field-level comparison with the accepted state.
- The native `<select>` was driven by `select_option`, not a touch (as in earlier reviews). Typed-text and screen-reader behaviour were not tested. There is no Form B for either lesson in the data, so "giveaways into form B" could not be checked; Test A was checked (L5-S4, L8-S6).
- Twin overlap is the item-text measure the second review ruled on; with the passage text added L5 reaches 0.279 multiset (section 2).

### 9. Files used (scratchpad `b6r5/`)

`load.js`, `probe.js`, `probe2.js`, `blind.js`, `blind-5.txt`, `blind-8.txt`, `hidden.json`, `ans5.json`, `ans8.json` (saved before any key was printed), `cmp.js` (75 of 76), `dump.js`, `keyed-4/5/8.txt`, `jac.js`, `jac3.js`, `longest.js`, `ms.js`, `keychk.js`, `xdup.js`, `xsent.js`, `wmdup.js`, `sentref.js`, `stale.js`, `splits.js` and `splits.json`, `leakA.js`, `leak8.js`, `diffobj.js`, `diffddb.js`, `old-effc.js` (e091ac7 copy), `old-ddb.js` (ddbc049 copy), `run390.py`, `run390-5.txt`, `run390-8.txt`, `srv.log`, `srv.pid`, `B6-review.before.md` (copy of this file before the append).

## Sixth review (lesson 8 in full; four flagged items in Lessons 4 and 6; 2026-10-27)

**Role:** independent reviewer, fresh eyes. I wrote none of these lessons and took part in none of the earlier reviews. **Scope:** Lesson 8 (`3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks`) in `js/data/lessons/L-GUM3.js`, frozen copy `/home/claude/pp-content`; the fifth review's L8 MUST and SHOULDs; and four items already ACCEPTED lessons whose hints the author's script flagged as "hint quotes key" (L4 C02, S02, S15; L6 C03). **Read-only:** no lesson, set or engine file edited, no git command. The only repo file touched is this one (append). One test server ran on port 8794 (pid 3766) and was killed by pid. Work files: scratchpad `b6rev6/`.

### Verdicts

| Item | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| Lesson 8 Hyphens at line breaks | **CHANGES REQUIRED** | 1 | 5 | 9 |
| L4 C02 | key not leaked; stays ACCEPTED | 0 | 0 | 1 |
| L4 S02 | stays ACCEPTED, but the ladder reaches one answer | 0 | 1 | 0 |
| L4 S15 | key not leaked; stays ACCEPTED | 0 | 0 | 1 |
| L6 C03 | key not leaked; stays ACCEPTED | 0 | 0 | 1 |

The fifth review's MUST (S03 "bon") and its seven SHOULDs are fixed in the files (section 3). The fix of one of them created a new MUST: **Test A T1 now has two correct answers.**

### 1. Blind solve

- **Method.** `blind.js` loads the lesson with Node `vm` (`load.js`) and prints the six passages, every core item (each `{ref}` resolved), the 15 similar items, the 3 Together items and Test A, with choices, slot options and ebsr parts shuffled by a seeded LCG (seed 6600 + 37 x lesson index), match rows by text, hot-text items as sentence references, and **no** `correct`, `answer`, `why`, hints, `how`, `clue`, `like` or `misconception`. Lesson 8 has no figure, so there is no alt text. I solved `blind-8.txt` (38 items) and saved `answers.json` (by choice text) **before** I printed a single key (`keyed.js` was the first thing that read a key) and before I read the lesson source, the author log or any earlier review.
- **Honesty about "fully blind".** Yes for the items. Before solving I read `REVIEWER-BRIEF.md`, `CONTENT-BRIEF.md` and the scratchpad scripts earlier reviewers left (`b6rev4/blind.js`, `run390.py`, `jac.js`, `longest.js`), which are tooling and hold no keys. I knew only that L8 is about hyphens at line breaks (the title). I did not open the raw lesson source for any L8 item until after `answers.json` was saved.
- **Agreement: 37 of 38.** Core 15 of 15 (P3, P4, C03 to C15), similar 15 of 15, Together 3 of 3, Test A 4 of 5.
- **The one miss, SK-GUM3-8-T1.** The stem shows `pic- / nic ... din- / ner ... silv- / er ... napk- / in`. I found two correct splits, picnic (pic-nic) and dinner (din-ner), and recorded "picnic OR dinner" in `answers.json`. The key is picnic only. This is a defect of the item, not a slip (MUST L8-M1).

### 2. Mechanical results

- **Gates.** `check-content.js --all` PASS, 0 failures, 105 warnings (the log says 106; the tree changes under it). `check-writing.js` 0 and 0. Passages (words without the "(n)" markers): p1 102, p2 104, p3 103, p4 104, p5 103, p6 101. Readability FK 1.8 to 3.1. Every "sentence N" in a prompt, hint, how or why points at the sentence that holds the quoted word (checked by hand against the six passages: C03 s5, C04 s6, C05 s7, S03 s4, S04 s5, S05 s6).
- **Official wording.** `official`: "Use hyphens to divide words at line breaks." (p. 16). All 30 core and similar items test it. Points and DOK are right: every choose-two, two-slot dropdown, ebsr and four-row match item is 2 points, the rest 1; DOK 1 on C08, C15, S08, S15, P2; DOK 3 on C09, C13, S09, S13. Grade 3: nothing is kindergarten-like; "syllable" is glossed as "beat".
- **Hint ladder, live choices after hints 1 to 3, recounted by my own script for every item** (`hq.js` finds which options each hint quotes; I then counted what the hint text removes; none of the 33 core, similar and Together items has hint 1 or 2 that quotes an option, and **no hint quotes a keyed option**):
  - **Four live** (one distractor named): P4, C06, C07, C11, C13, S02, S06, S07, S11, S13 and Part B of C05 and S05 (not touched, four live).
  - **Three live:** P1, P2, C04, C05 Part A, C08, C12, S04, S05 Part A, S08, S12. After one row is given: P3, C14, S01, S14.
  - **Two live (a coin flip after hint 3):** dropdowns C03, C15, S03, S15, P5, and slot 2 of C10 and S10.
  - **Four live, none removed:** C09, S09 (hint 3 only points at where to look).
  - **None collapses to one by hint 3 alone.**
  - **Recount differs from the author log in two rows.** S02 is 4 live after hint 3, not "5/5/5" (hint 3 names "Help has only one beat"); S01 is 3 rows open after hint 3, not "4/4/4" (hint 3 gives the clo- | ck row). See NOTE L8-N8.
- **Longest key** (`jl.js`, every mc, ms, ebsr part and dropdown slot): in the prose-choice items **no single key is uniquely longest** (C04, C13 and S04 tie with distractors; P1 56 against 63; S09 61 against 68; S13 keys 57 and 44 against 62; T5 50 against 53), and **no choose-two item has both keys as the two longest prose options**. In the split-string items (P4, S02, S07) the keys are the two longest only by one to three characters and that is word length, not an option tell (NOTE L8-N5).
- **Twin overlap** (`jl.js`, prompt, stem, text, choices, slot options, match rows and columns, ebsr parts, and the sentences a hot-text item targets; each similar item against its own `like`; 15 distinct `like` values). Set / multiset maxima: **0.209 (S04/C04 set) / 0.206 (S05/C05 multiset). No pair is above 0.21.** With the passage text added: set 0.179, multiset **0.246 (S05/C05)** and 0.223 (S03/C03), from stock words shared by the draft passages (NOTE L8-N6). The author log's passage-inclusive 0.191 set figure is 0.179 on my tokenisation; immaterial.
- **Duplicate scan over `js/data`** (`dupscan.js`: 229 prompt, stem, choice, row and passage strings against all 43 other data files, and against the rest of `L-GUM3.js`): **0 hits** and no other hyphen-division item. One internal duplicate: **P3 (core, Set 1) and T4 (Test A) have a word-for-word identical prompt and the same two columns**, and share 0.53 set / 0.61 multiset of their item text, the highest pair in the lesson (SHOULD L8-S4).
- **Passages: leaks of other items' keys** (`pleak.js`): no passage prints another item's keyed split. The words that recur whole in passages (ticket, feathers, help, yellow, campfire in p4 sentence 4 is split and is S03's own) are not keys, or are unsplit. The two same-set leaks the fifth review found are gone: p3 sentence 6 now reads "a ticket for the ride" and p6 sentence 8 "from its feathers".
- **Browser, 390 x 844, touch, mobile** (Playwright `run390.py`, one browser process for lesson 8, server on 8794): all 15 core items opened through `PP_PLAYER.start("SK:<code>:y|y2|y3", "try")`; for the 9 passage and ebsr-with-passage cases the passage tab was tapped and the visible passage compared with `item.passages` (no mismatch); the keyed answer was entered by real taps (choices, hot-text sentences, match buttons; `select_option` for the native selects) and Check tapped. **15 of 15 accepted, no horizontal scroll, no page error.**

### 3. Fifth review: fixed in the files?

I read the live source of every item named in the fifth review.

| Fifth-review item | In the files now | Result |
|---|---|---|
| L8-M1 S03 says "bon" is a word (MUST) | S03 is campfire (camp- \| fire, campf- \| ire, cam- \| pfire); hint 2, 3, how, why, misconception, passage p4 sentence 4 all say camp and fire; both are words | **FIXED** |
| L8-S1 passage leaks C12's, S12's keys | p3 s6 "a ticket", p6 s8 "its feathers" are whole words; C11 still has exactly two wrong sentences (cond- \| uctor, postc- \| ard), S11 exactly two (mi- \| nnow, sunl- \| ight) | **FIXED** |
| L8-S2 football, pancake fit two columns | C14 prompt "Use each rule one time."; S14 "Give each rule to exactly one word." I solved the constraint both ways: C14 has one assignment (candle must take "Two different consonants", which forces football to "Two smaller words", pocket to "Letters that stay together", hammer to "Double letter"); S14 likewise (problem forces pancake and chicken) | **FIXED** (by the use-once rule; a child must read the rule line) |
| L8-S3 hints name the deciding rule | C03, S03, C08, S08, C12, S12 hint 1 and 2 are now neutral ("Ask which rule fits them", "Check where each break falls"). C09 and S09 hint 2 neutral. **Not swept at the time: C10, S10 hint 1 and P5 hint 2** | **FIXED for the listed items; same fault remains on C10, S10, P5 (SHOULD L8-S3)** |
| L8-S4 C13, S13 key length | C13 keys 42 and 58 characters against a 58-character distractor; S13 keys 57 and 44 against a 62-character distractor; S13 wording is no longer circular | **FIXED** |
| L8-S5 digraph and compound only in Teach | Watch Me 2 is now fishbowl (compound plus sh) | **FIXED, but it removed the only double-letter model (SHOULD L8-S1)** |
| L8-S6 Test A and Teach reuse core words | T1 no longer has ladder, T3 no hammer, T4 no pi- \| llow; C07 no longer has pe- \| ncil. Test words appear in no other item, hint or passage (`tw.js`; "candy" occurs whole in p5 s8, harmless) | **FIXED** (Watch Me 1 "window" is still the split of p1 s9; NOTE) |
| L8-S7 pitch- \| er | C07 is gar- \| lic, tu- \| rnip, pup- \| pet, trum- \| pet, wa- \| sher; all dictionary-clean | **FIXED** |
| L8-N1, N2 | C12 hint 3 names t- \| icket; C15 hint 3 says "puts both g and n on the first line" | **FIXED** |

**Author-log claims tested against the files**
- **True:** every wording change listed in "Fifth review fixes" for L8 (campfire, passages, prompts "each rule one time", hint rewrites, key shortening, garlic and turnip, T3 supper, T4 co- \| llar, fishbowl for mitten); the twin maxima 0.209 / 0.206; passage minimum 101; the Not-addressed line that Watch Me "no longer models a double letter" is honest.
- **False or unchecked:** "Test A: T1 uses dinner instead of ladder" is true as a word swap, but the stem prints `din- / ner`, which is a correct split, so the claim that Test A is clean is false (MUST L8-M1). The log's "Live choices after hints" column is wrong for S01 (4/4/4) and S02 (5/5/5), as above; the log itself calls the column approximate. The log says the new Watch Me is covered for the double letter by "Teach point 4 and C08/S08": C08 and S08 are assessment items, not teaching, so that is not coverage.

### 4. Lesson 8: findings

**Dictionary check of every split.** Merriam-Webster headwords fetched this session (WebFetch of the dictionary page that WebSearch with `allowed_domains: merriam-webster.com` returned, all on 2026-10-27), each at https://www.merriam-webster.com/dictionary/WORD: muf·fin, win·ter, sum·mer, bas·ket, pop·corn, let·ter, mon·key, tooth·brush, pil·low, flash·light, card·board, lad·der, rub·ber, gar·lic, tur·nip, pup·pet, trum·pet, wash·er, rab·bit, buck·et, tun·nel, cup·cake, box·car, cush·ion, wind·mill, con·duc·tor, post·card, tick·et, lan·tern, pock·et, can·dle, foot·ball, ham·mer, mag·net, tur·key, rock·et, ten·nis, sun·flow·er, but·ter, cir·cus, camp·fire, peb·ble, cab·bage, car·rot, pep·per, pump·kin, but·ton, trac·tor, sun·set, mar·ket, yel·low, pup·py, moth·er, hap·pen, door·bell, tur·tle, cat·tail, bot·tle, min·now, rain·coat, sun·light, feath·er, chick·en, pan·cake, prob·lem, in·sect, doc·tor, car·pet, birth·day, pic·nic, din·ner, sil·ver, nap·kin, but·ter·fly, sup·per, can·dy, mar·ble, hel·met, kit·ten, col·lar, cac·tus, rain·bow, jack·et, blan·ket, rib·bon, win·dow, back·pack, ket·tle, ham·mock, suit·case. Every keyed split is the dictionary break and every wrong split breaks it. The one-syllable words (plant, jump, lunch, line, stream, floor, clock, help, glass, school, bright, friend, night, clown) are not split by the dictionary. Unreachable: none left (the first fetch of some pages was refused by the allowlist; a WebSearch for the word made the page fetchable).

**Sweep of every hint, how, why, misconception and clue line** (all 30 core and similar items, the 5 Together addons, the 5 Together `why` lines, Test A, Teach and Watch Me) against the actual split and the word claims. Every stated letter placement ("between the consonants x and y", "the double x", "both on the second line", "leaves one letter alone", "cuts the first small word in half", "pulls the c and k apart", "has one/two beats") is true of the split it names. Every compound part is a real word (tooth and brush, camp and fire, cup and cake, door and bell, foot and ball, pan and cake, flash and light, card and board, box and car, wind and mill, post and card, rain and coat, sun and light, sun and set, birth and day, pop and corn, rain and bow, butter and fly, fish and bowl); the non-words are called non-words (lan, bas, ket). "rock and et" and "wash and er" are given as beats, not as words. No false claim found beyond the T1 contradiction below.

**MUST**
- **L8-M1 SK-GUM3-8-T1 (Test A, mc) has two correct answers.** Stem: "a pic- / nic ... a big din- / ner ... the silv- / er ... a napk- / in". Picnic (pic-nic, between the consonants c and n) is keyed. **Dinner is split din- / ner, between the double n, which is a correct split** (Merriam-Webster din·ner), and the item's own `why` says "Dinner should be din-ner (between the double n)", which is exactly what the stem shows. Option "dinner" is therefore also correct and a child who answers it is marked wrong. This appeared when the fifth-review fix replaced "ladder" with "dinner" without checking the stem. Fix: break dinner wrongly in the stem (`"... a big di-"`, `"nner and hung the silv-"`) and keep the `why` ("Dinner should be din-ner"); silver and napkin stay wrong; picnic stays the only correct split. Re-check the item with a script that lists every split in every stem against the dictionary.

**SHOULD**
- **L8-S1 Watch Me no longer models the double letter; its first example repeats Teach.** Teach's worked example is garden (two different consonants, r and d); Watch Me 1 is window (two different consonants, n and d) again; Watch Me 2 is fishbowl (compound plus sh); Watch Me 3 is school (one syllable). The double-letter rule appears only as one sentence in Teach point 4 (hap-py, bub-ble). Double letters decide P3 (muf-fin, sum-mer), C04, C06 (lad-der, rubb-er), C07 (pup-pet), C08, C10 (tunnel), and most of their twins and Test A. Digraph and compound are now modeled (fishbowl: "The letters sh make one sound, so they stay together" and "split between the two words"), which closes the fifth review's S5, so I judge digraph and compound adequate, with the caveat that fishbowl carries both in one example. Double letter is not adequate: it has no worked example. Fix: replace Watch Me 1 (window; Teach's garden already shows the two-consonant rule) with a double-letter word that no item uses, for example "sad- / dle" or the "mit- / ten" example the fifth-review fix removed, with steps: clap it (two beats); the same consonant comes twice; split between the two letters.
- **L8-S2 Three of the 15 core items rest on the same "-ck-et" pattern, two of them in one set.** C09 (bucket, Set 2, buck- \| et), C12 (ticket, Set 3, tick- \| et) and C14 (pocket, Set 3, row "Letters that stay together"), plus S14 chicken, S09 twin, and p1 sentence 3 jack- \| et. Solving C09 hands the child the pattern for C12 and C14 (the same suffix, the same wrong split tic-ket / buc-ket), and C12 and C14 are in the same set (plan §6.7: no giveaways inside a set). Fix: make C14's "Letters that stay together" row a th, sh or ch word ("brother", broth·er) and keep ck in C09 and C12 only.
- **L8-S3 C10, S10 hint 1 and P5 hint 2 still name the deciding rules (the fifth review's S3 fault).** C10 and S10 hint 1: "Ask whether it has a double letter, or whether it is made of two smaller words." The two words in each stem are one of each, so the hint hands over both rules and a child can write tun-nel / cup-cake (hap-pen / door-bell) without opening the choices. P5 hint 2: "ask whether it is made of two smaller words" gives birth- \| day from the stem word alone. Fix: use the neutral C15 / C06 hint 1 ("Say each word whole and look at the letters in the middle. Ask which rule fits.") and let hint 2 point at the place.
- **L8-S4 T4 is a reskin of core item P3.** Same prompt word for word ("Each word was split at the end of a line. The | mark shows where the first line ends. Is each split correct?"), same two columns, four rows with a different word each (muf-fin, wi-nter, sum-mer, pla-nt against hel-met, kit-ten, co-llar, cact-us). Item-text overlap 0.53 set / 0.61 multiset, the highest in the lesson; a child who did P3 meets the same task. Fix: change the T4 form (for example "Which TWO of these four splits are correct?" as a choose-two, or the wording "Is each word broken properly?") so the test does not repeat a core prompt.
- **L8-S5 SK-GUM3-8-S12's prompt states both rules.** "Which break of feathers keeps th together and also falls between the two beats?" The prompt says what the item should make the child work out; with four options, only feath- \| ers keeps th together and splits the two beats. C12 asks only "Which break is the better one?" Fix: "Which break of feathers is the best one? A bar (|) is the line end."

**NOTE**
- **L8-N1** Two-live floor after hint 3: C03, C15, S03, S15, P5, C10 slot 2, S10 slot 2 (50 percent). Accepted by earlier reviews as the dropdown floor.
- **L8-N2** C09, S09 hint 3 ("Look at the line that holds the k (h) in each split. Check which letters ride along with it.") stops short of naming the flawed split, but with the Teach ck/th rule it is the discriminating test. Not a collapse; four live.
- **L8-N3** S13 option "S and k blend into a single sound that cannot be pulled apart": s and k do blend in many words (sky); in basket they belong to different beats. True for the lesson's rule ("th, sh, ch, ck"), arguable for a strong child. Keep, or say "S and k make one new sound, like sh".
- **L8-N4** Teach examples that recur as correct options: sun-set (Teach point 5, S07), gar-den (Teach point 3, C07 gar-lic), school and bright (Teach point 2, P2 distractors), window (Watch Me 1, p1 s9). None decides an item; P2 (DOK 1) is easy for that reason.
- **L8-N5** Split-string options differ by one to three characters, so length is no tell, but S02's key sun- \| flower is the longest string only because the word is long.
- **L8-N6** Passage-inclusive twin overlap S05/C05 0.246 and S03/C03 0.223 (multiset). Item-text overlap, the ruled measure, is under 0.21.
- **L8-N7** C14, S14 now rest on constraint solving ("use each rule one time"): pocket and chicken also have two different consonants, football and pancake also have two different consonants, so a child who ignores the instruction can defend a second answer. Clear and unique under the instruction.
- **L8-N8** The log's live-choice column: S01 should read 4/4/3 rows and S02 5/5/4; a one-line correction.
- **L8-N9** `T2` stem uses two lines plus a `|` explanation in the prompt; fine on screen. `C05`/`S05` Part A prompts say the word "should never have been broken" / "has no place to break", which tells the child the word has one beat; that is the premise of the item, not a leak.

### 5. Flagged items in ACCEPTED lessons

Method: `flag.js` prints each item and its passage; `flag2.js` searches every hint for each option as a whole word. **In all four, the key appears in a hint only as an ordinary function word ("and" in "Read sentence 4 and picture ..."; "me" in "belongs to me"), not as a quote of an option, and no hint names the key as the answer.** The script flag is a token match on "and" and "me". Whether the ladder reaches the key without the choices:

- **L4 C02 (dropdown, and/or/but/so): NOTE.** Hint 1 lists the four relations (choice, result, difference, two things that go together), hint 2 "picture the class doing both actions", hint 3 removes "but" (3 live: or, and, so). Hint 2's "both" points at "and" without printing it; the child still has to map "both" onto the word. Key not leaked; keep.
- **L4 S02 (dropdown, yet/and/nor, 3 options): SHOULD (low).** Hint 3: "Yet shows something different, and the coach's two jobs do not clash. Decide between the other two." After hint 3 the child holds "and" and "nor", and the lesson teaches that nor goes with a no (how, why), so "nor" falls without effort; "and" is also printed in the hint, though as a plain conjunction. The ladder ends at one answer. The cause is a three-option dropdown with a throw-away distractor. Fix: add a fourth option ("so" or "but") and let hint 3 name one distractor, or make hint 3 "Nor goes with a no" and keep "yet" live.
- **L4 S15 (ms, pick 2 of and/or/so/nor/but): NOTE.** Hint 3 removes nor ("Nor goes with a sentence that says no, and the first part does not"); four live, pick two, six combinations. "and" is a plain word in the hint. Not collapsed.
- **L6 C03 (dropdown, myself/I/me/mine): NOTE.** Hint 2 gives the strategy "leave out the words Luis and. Then say the sentence with each choice", which turns it into a cloze ("Dad showed ___ how to use the saw") that "me" completes. That is the solving move, not the key. Hint 3 removes "mine" ("something belongs to me" is plain prose); three live: myself, I, me. Not collapsed.

### 6. Web and dictionary sources used

- Merriam-Webster entries listed in section 4, e.g. https://www.merriam-webster.com/dictionary/dinner (din·ner, basis for MUST L8-M1), https://www.merriam-webster.com/dictionary/bucket (buck·et), https://www.merriam-webster.com/dictionary/pocket (pock·et), https://www.merriam-webster.com/dictionary/ticket (tick·et), https://www.merriam-webster.com/dictionary/chicken (chick·en), https://www.merriam-webster.com/dictionary/campfire (camp·fire), https://www.merriam-webster.com/dictionary/washer (wash·er), https://www.merriam-webster.com/dictionary/lantern (lan·tern), https://www.merriam-webster.com/dictionary/turnip (tur·nip), https://www.merriam-webster.com/dictionary/garlic (gar·lic).

### 7. What I did not do

- No lesson edits, no git write, no republish. Server on port 8794 (pid 3766) killed by pid; no other process was touched.
- I did not re-solve Lessons 1 to 7 blind. The four flagged items were judged from the item, its passage and a hint-by-hint token search, not from a fresh blind solve.
- The native `<select>` was driven by `select_option`, not a touch. No Form B for this lesson exists in the data, so giveaways into form B could not be checked; Test A was checked (T1 defect, T4 reskin, no core word reuse).

### 8. Files used (scratchpad `b6rev6/`)

`blind.js`, `blind-8.txt`, `answers.json` (saved 13:29, before any key was printed), `keyed.js`, `hq.js`, `jl.js`, `dupscan.js`, `pleak.js`, `tw.js`, `flag.js`, `flag2.js`, `run390.py`, `srv.log`, `srv.pid`, `B6-review.before.md` (copy of this file before the append).

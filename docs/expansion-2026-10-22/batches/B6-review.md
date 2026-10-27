
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


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

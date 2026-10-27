
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

# B5a review 1: 3.L.GC.2.a, 2.b, 2.c, 2.d (`js/data/lessons/L-GC2.js`)

**Role:** independent content reviewer (blind solver). I did not write these lessons. I read the author log only after my blind answers were saved.
**Scope:** all four lessons: Learn It / Watch Me, the three core sets (15 items each, `{ref}` resolved), the Together items (practice minus refs, with `addons`), `similar` S01 to S15, `test` (form A) and, for 2.b, `testB`.
**Read-only:** I changed no lesson or code files. This is the only file I wrote. Scratch files are in `scratchpad/b5rev/`.

## 1. Blind solve

- **Method.** `ld.js` loads `L-GC2.js` through a Node vm sandbox with a mock `PP.addLesson`. `blind.js` prints the passages and every item with a seeded shuffle (seed 20261023 + lesson index x 977). It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `like` and `sample`. I grepped the stripped JSON for those field names before reading it. I never printed raw item source. My schema probes printed field names only. I saved `ans-2a.json` to `ans-2d.json` before extracting any key.
- **Result: 160 of 160 agree (100%).**
  - That covers core (refs resolved), Together, similar S01 to S15, form A and 2.b form B, across the four lessons.
  - **The solve was fully blind.** I did not see any key, `why`, hint or `how` before saving. I read `L-GC2.js` only for structure.
- **Agreement hides some real ambiguity.** I picked the author's key on these, but a second defensible answer exists. They are listed as findings: 2.b S13 (match), 2.b TB5, 2.d S02 (`NEARBY`), 2.d C07 (`proudly`).
- **Live-choice check.** I replayed the hint ladder on the four items the author flagged as tight.

| Item | Choices left live after H1 to H3 | Verdict |
|---|---|---|
| 2.c C10 | 2 (A and C) | confirmed tight; acceptable |
| 2.d C12 | 3 | confirmed; but H3 text miscounts (SHOULD) |
| 2.d C07 | 3 | confirmed; acceptable |
| 2.b C06 Part A | 3 | confirmed; acceptable |
| 2.d C06 | 1 | not tight; fails (MUST) |
| 2.d S08, 2.d P5 | exactly the two keys | fails (MUST) |

## 2. Mechanical checks

- **Passage FK** (`verification/readability.py`): 0.7 to 3.8 for all 25 passages, below the 4.5 limit. Passages are 100 to 123 words with 10 to 14 numbered sentences (the plan's guide is six to ten; NOTE). The low FK is fine for sentence-structure drafts.
- **Similarity** (`jac.js`): word-set and multiset Jaccard, with match `cols` and ebsr parts included, over every similar-vs-`like` pair and every pair within a lesson.
  - Similar vs `like`: all pairs at or below 0.20.
  - Worst within a lesson: 2.c P1 vs T2 0.45 / 0.52; 2.c C09 vs P3 0.39 / 0.37; 2.b P2 vs T2 0.385 / 0.20; 2.b P5 vs C05 0.37 / 0.10; 2.d C14 vs T3 0.34 / 0.29.
  - 2.a P7/P9 (0.54) and T6/T8 (0.49) come from shared passage target text. They are pre-existing.
  - The author's script ignored match columns. I recomputed them, and the match pairs (2.a C11/S11/P2/T3, 2.b C13/S13/T4/TB4, 2.c C09/S09/P3/T5, 2.d P3/S02/C09/S09/T4) are all below 0.40 except the two 2.c pairs above.
- **Longest-key cue** (`cue.js`): the key is uniquely longest in 33 of 82 single-key sets (40%; chance is about 25%). Mean length ratio 1.02. Flagged: 2.c C14 Part B 1.34, 2.a S14 1.25, 2.b S15 Part B 1.23, 2.a C10 1.19, 2.b C06 Part B 1.20, 2.d C14 Part B 1.20. **2.c C07 is not the longest, so the author's flag is not confirmed.**
- **Word-match cue** (`wm.js`): the key has strictly highest overlap with the stem or passage in only 3 of 66 sets (2.b C15 Part B, 2.d C14 Part B). Minimal.
- **Key text in hints** (`leak.js`): see MUST/SHOULD lists.
- **Topic and key-fact duplicates over all of `js/data`** (`ngram.js`, 4-gram and 5-gram scans against every other file, variants included): hits listed under SHOULD. The author log's "zero hits" is wrong for 2.d p3.

## 3. Web-verified facts

- **"You were" agreement (2.c Learn It).** "You" takes "were" in the past, singular or plural, never "you was". 2.c teaches I was / you were / I am / you are. Correct.
  - Grammarly, Was vs Were: https://www.grammarly.com:443/blog/was-vs-were ("you can't go wrong choosing were for the second-person singular").
  - Wikipedia, You: https://en.wikipedia.org/wiki/You ("you" takes the plural verb form, "you are").
- **Standard wording.**
  - Georgia 3.L.GC.2.a text, as quoted on a worksheet page: "Distinguish between correctly structured simple, compound, and complex sentences." https://auyzsqchoiyjyrbswkhv.supabase.co/storage/v1/object/public/standards-worksheets/ga-ela/3-l-gc-2-a.pdf. That matches `standards.js`. The same page defines compound as "two complete sentences joined by a joining word" and complex as "one complete sentence and one part that cannot stand alone".
  - Common Core roots that the author cited: L.3.1.a, L.3.1.f "Ensure subject-verb and pronoun-antecedent agreement", L.3.1.h, L.3.1.i "Produce simple, compound, and complex sentences", L.3.3.a "Choose words and phrases for effect". https://www.thecorestandards.org/ELA-Literacy/L/3/
  - I could not fetch the Georgia Big Book PDF. It redirects to gadoe.org, which is not on the fetch allowlist. So the `standards.js` wording for 2.b, 2.c and 2.d is checked against the repo only, not against a live Georgia page. NOTE.
- **Imperative with implied "you".** Grammarly says the subject is typically "you", and the imperative is a complete sentence. https://www.grammarly.com/blog/sentences/imperative-sentences/ The 2.a Learn It correction (point 1) is right.
- **"Nearby".** Merriam-Webster lists "nearby" under adverb synonyms of "near", and the entry covers adverb, preposition and adjective. https://merriam-webster.com/dictionary/near The tag is ambiguous, so 2.d S02 must not key it (MUST).

## 4. Browser run (390x844, touch, real controls)

- Driver: `real.py` (and the older `ui5.py` harness). It opens each lesson with `PP_SKILLS.open(code,'try')` and starts each core item with `PP_PLAYER.start("SK:<code>:y|y2|y3",'try',{pos})`. It clicks the real choice buttons, `select.dd-select`, `.match-btn` and `.hot-option`, then Check. It also presses the hints, Show me how and Try a similar question (`ui5.py`).
- Results are in section 4a at the end of this file.

## 5. Findings by lesson

Legend: MUST = fix before acceptance. SHOULD = fix unless the author gives a reason. NOTE = information only.

### 3.L.GC.2.a: simple, compound, complex (distinguish)

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| a1 | MUST | C08 `why` | WHY says "both of them grabbed buckets". The passage sentence is about "two small boxes". | Replace with the passage's wording. |
| a2 | MUST | S02 `why` | WHY refers to "the kayak sentence" and "the paddle sentence". The passage is about a unicycle. Leftover text from another item. | Rewrite the WHY from S02's own sentences. |
| a3 | SHOULD | C05 and S05 H2 | "even if the who is not written out" tells the solver the key is the implied-you sentence. S05 repeats it. | Make H2 say "check each sentence for a who and a what they do". |
| a4 | SHOULD | C13, S13 H2 | H2 names the error sentences, which pre-decides the choice. | Point to the sentence group only. |
| a5 | SHOULD | C15, S15 | H1 lists both word families, so the dropdown becomes a lookup, and H3 completes slot 1. | Cut the family list from H1. H3 should not complete a slot. |
| a6 | SHOULD | S11 | Paraphrases the L-GUM3 Watch Me example "Mei fed the fish and watered the plants". | Change the content words. |
| a7 | SHOULD | C14 stem | "The ice melted after the sun came out." is the same sentence as a row in 3.T.SS.1.c (P5). | Use a new sentence. |
| a8 | NOTE | C10 | Key is uniquely longest (ratio 1.19, 83 vs 74 chars). | Trim the key or lengthen a distractor. |
| a9 | NOTE | C07, S07 | The lowercase-capital distractor tests mechanics, not sentence type. | Fine for DOK 1. |
| a10 | NOTE | Watch Me | Does not model joining a fragment, or the compare/edit items. | Add one line. |
| a11 | NOTE | p1 | "This spring, our class planted a garden behind the school" also appears in L-V12 and F-PF (pre-existing). | None. |

The `teach` points 1 and 4 changes (implied "you" imperative; simple sentence can have two people or two actions) are correct (URL above).

**Verdict 2.a: CHANGES REQUIRED** (two stale `why` texts).

### 3.L.GC.2.b: variety and tense

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| b1 | MUST | P4 H3 | Says "Two of the five sentences mix…". Three mix. The keys (ms, pick 2) are the two consistent sentences. | "Three of the five sentences mix tenses. Find the two that do not." |
| b2 | MUST | C09 `why` | Ends "Stacked is past tense. It should be stacks." The verb in the item is "sketched". | Rewrite from C09's own sentence. |
| b3 | MUST | p5 title | "Our Recycling Team" does not match the terrarium text. | Retitle. |
| b4 | MUST | S13 (match) | Row 0 "Jo set the table ____ Dad cooked the rice" accepts "after" as well as "and". Row 2 "will melt ____ we leave it in the sun" accepts "after" or "if". Columns may be reused, so these are two defensible keys. | Reword rows so each fits only one column word (for example, give row 0 a clear "adding" frame such as "Jo set the table ____ Dad cooked the rice, too", or drop `after` from the columns), and re-test each row against every column. |
| b5 | SHOULD | C11 | Echoes the L-GUM3 example "Jamal kicked the ball, and it flew over the fence" and the kicked-ball-into-pond item in T-T1. "Neither" distractor is weak. | New content. |
| b6 | SHOULD | S04 | Lifts "Rain drummed on the roof" and the lights-out scenario from T-T1 and F-FH ("The Night the Lights Went Out"). | New scenario. |
| b7 | SHOULD | S08 H2 | "as Isaiah writes" matches distractor B's wording. | Reword H2. |
| b8 | SHOULD | S05, S15 | Test "but", while their `like` cores C05 and C15 test "or" and "because". `like` is only partly honest. | Change `like` or the item. |
| b9 | SHOULD | C14, S14 H2 | H2 names the relation ("show a reason / a result"), which pre-decides the choice. | Say "ask how the two ideas connect". |
| b10 | SHOULD | TB5 (form B, pre-existing) | "rose/came" is also a defensible same-tense answer. Scored, so it matters. | Add a present-tense anchor in the stem. |
| b11 | NOTE | C06 and C08 | C08 gives away C06 when revisited. | Acceptable. |
| b12 | NOTE | T3, TB3 | Use "Even if", "Although", "Unless", which are not taught (pre-existing). | None. |
| b13 | NOTE | p1 | The aquarium topic appears in T-T1 and L-V3 (pre-existing). | None. |

**Verdict 2.b: CHANGES REQUIRED** (b1 to b4).

### 3.L.GC.2.c: subject-verb agreement

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| c1 | MUST | S12 H2 | Refers to "the line with the fan", which does not exist in S12. | Rewrite from S12's own text. |
| c2 | MUST | S14 H2 | "look for the small word that joins two names" hands the Part B key "and". | Say "look at the subject in the sentence". |
| c3 | SHOULD | P1 H3 | Contains the key word "are". | Reword. |
| c4 | SHOULD | C12 H2 | Names the relation, which narrows the choice. | Reword. |
| c5 | SHOULD | S07 | Not truly "like" C07: an identify task with weak distractors C and D, and DOK overstated. | Rework or change `like`. |
| c6 | SHOULD | C14 Part B | Key is the longest (ratio 1.34, 73 vs 63 chars) and echoes the draft sentence. | Equalize lengths. |
| c7 | SHOULD | S09 | Row "The bag of apples ____ heavy" repeats the teach example. It is also a near-template of form A T5 (same is/are frames). | New row and frames. |
| c8 | NOTE | C07 | Ladder fine. Key is not the longest, so the author's flag is not confirmed. | None. |
| c9 | NOTE | C06 and C07 | C07 reveals C06's wrong-sentence information. | Acceptable. |
| c10 | NOTE | C08 | H2 points to B, C and E but not A. | Acceptable. |
| c11 | NOTE | C11 | Ana's stem line restates the key. The item is easy, and DOK 3 is inflated. | Lower DOK. |
| c12 | NOTE | C10 | H3 leaves 2 live (A and C). | Fine. |
| c13 | NOTE | P5, P7, C13 | Three near-identical dropdown frames, with C13 adding interrupting phrases. | Vary frames. |
| c14 | NOTE | Together P1 vs form A T2, P3 vs C09 | Near-duplicate frames (0.45 / 0.52 and 0.39 / 0.37). Pre-existing. | None. |
| c15 | NOTE | S12 distractor E | "Two to Too" is implausible. S14 and C14 differ mostly by a name swap. | Revisit. |

**Verdict 2.c: CHANGES REQUIRED** (c1, c2).

### 3.L.GC.2.d: adjectives and adverbs

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| d1 | MUST | C06 H3 | "Sunny and sandy are about warm places…" eliminates two distractors and leaves only the key "wintry". "Check the other two words" is also miscounted. | Rule out at most one distractor and fix the count. |
| d2 | MUST | S08 H3 | Eliminates three words and leaves exactly the two keys (ms, pick 2). | Eliminate one. |
| d3 | MUST | P5 H3 | Same fault as S08: leaves exactly the two keys. | Eliminate one. |
| d4 | MUST | S10 H1 | Names the key word "here". | Move to a strategy-only H1. |
| d5 | MUST | S11 | Says "sentence 7", but the options rewrite the fountain's sound, which is sentence 8. It also duplicates S08. | Fix the number and make S11 distinct from S08. |
| d6 | MUST | S02, row "The store is NEARBY" | Adjective vs adverb is ambiguous. Merriam-Webster lists both parts of speech (URL in section 3). | Replace with a word that is unambiguous, such as "slowly" or "tall". |
| d7 | MUST | S14 H2, H3 | Both quote the Part B key "neat rows". | Reword. |
| d8 | SHOULD | p3 "Painting a Birdhouse" | The topic duplicates W-REV-02 (mixed set, "light blue"), T-TS (birdhouse directions), L-GUM2 and L-GRM-01. The 5-gram "painted a birdhouse for the" hits L-GUM2. The author log's "zero hits" is wrong. | New topic. |
| d9 | SHOULD | C04 HOW2 | Says "adds its color and its size", but the key adds shape ("round") and size, not color. | Fix the HOW. |
| d10 | SHOULD | C08 | Distractor D keeps the word "nice", so it is trivially wrong. The keys are structurally parallel, and H3 miscounts ("other two choices"). | Rework D and H3. |
| d11 | SHOULD | C12 H3 | "check the other two choices" miscounts. Three remain live after H3. | Fix the count. |
| d12 | SHOULD | C15, S15 H3 | "the other two plain choices" is wrong. Only one plain choice exists. | Fix the wording. |
| d13 | SHOULD | C14 | Part B distractors mirror form A T3's (shared "It repeats a word"). Near-template of T3. | Vary distractors. |
| d14 | SHOULD | C07 | "proudly" is a defensible competitor. Evidence in sentence 3 is thin. | Add evidence to the sentence. |
| d15 | NOTE | C05, S05 | S05 distractor E contains the adverb "today". | Fine. |
| d16 | NOTE | C09 | Adjective/adverb grammar already narrows pairs. | Fine. |
| d17 | NOTE | C11 | DOK 3 overstated; easy. | Lower DOK. |
| d18 | NOTE | C14 H3 | Restates "very light". It is evidence but close to the key. | Fine. |

**Judgement-call keys.**

| Item | Is the key defensible and unique? |
|---|---|
| C07 | Unique, but "proudly" is a risk (d14). |
| C12 | Unique, carefully. Three choices live after H3. |
| C08 | Unique. D is trivially wrong because it keeps "nice". |
| C15 | Unique: A and B. E repeats, D is piled, C is plain. |

**Verdict 2.d: CHANGES REQUIRED** (d1 to d7).

## 6. Cross-lesson notes

- Hint ladder fault: the commonest pattern is H3 eliminating down to the key (2.d C06, S08, P5). Most other H3s here are fine.
- Stale `why` or hint text from earlier drafts (2.a C08, S02; 2.b C09; 2.c S12) suggests the author should grep every `why`, `hints` and `how` for words that do not occur in the item.
- Learn It / Watch Me: no pre-answered item found. 2.c S09 repeats the "bag of apples" teach example (c7); 2.a S11 paraphrases a Watch Me example from L-GUM3 (a6).

## 7. Verdicts

| Lesson | Verdict | MUSTs |
|---|---|---|
| 3.L.GC.2.a | CHANGES REQUIRED | a1, a2 |
| 3.L.GC.2.b | CHANGES REQUIRED | b1, b2, b3, b4 |
| 3.L.GC.2.c | CHANGES REQUIRED | c1, c2 |
| 3.L.GC.2.d | CHANGES REQUIRED | d1 to d7 |

## 4a. Browser results

- **Real-control pass (`real.py`): 60 of 60 core items accepted the correct answer** at 390x844 with touch. It used real `.choice` buttons for mc, ms and ebsr (both parts), `select.dd-select` for dropdowns, `.match-btn` for match, and `.hot-option` or passage `data-ref` targets for hottext. No page errors, no horizontal scroll, and no target under 36 px high.
- **Hint / Show me how / Try a similar question pass (`ui5.py`, 15 core items x 4 lessons):** no horizontal scroll at load, after hints, after Show me how or in the similar item. All 60 similar items opened from their core item and accepted their correct answer, except the four ebsr items (2.b C06, C15; 2.c C14; 2.d C14), where the old harness cannot set an ebsr answer by script. I covered those four with real clicks in `real.py`, and they pass.
- **Harness notes (not product faults):**
  - The only console error was "Failed to load resource", from the Google Fonts request that the harness blocks.
  - My first real-control pass failed on hottext items with free-standing options, because I clicked by shuffled DOM position. Clicking by option text fixed it.
- The server was started with `node verification/serve.js . 8741` (wrapper pid 20220, node pid 26127) and was killed by pid afterwards.

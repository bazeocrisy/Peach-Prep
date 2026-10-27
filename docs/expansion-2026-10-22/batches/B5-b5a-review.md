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

---

# Second review (2026-10-27): 3.L.GC.2.a, 2.b, 2.c, 2.d

**Role:** second independent reviewer (blind solver). I did not write these lessons and I did not take part in the first review. I read the reviewer brief and the shared content brief first. I did not open the author log, or the section 1 to 7 findings above, until my blind answers for all four lessons were saved.
**Scope:** all four lessons in `js/data/lessons/L-GC2.js` as they stand after the first-review fixes: Learn It / Watch Me, the three core sets (`{ref}` resolved), Together (practice minus refs, with `addons`), `similar` S01 to S15, form A, and 2.b form B. The lessons have `write` cards but no `cr` items, so there is no sample answer to check.
**Read-only:** I edited no lesson or code file and ran no git. This appended section is the only file I wrote. Scratch files are in `scratchpad/b5rev2/`. The test server (`node verification/serve.js . 8747`, pid 11391) was killed by pid afterwards.

## S1. Blind solve (new seed)

- **Method.** `load.js` loads `L-GC2.js` in a Node `vm` sandbox with a mock `PP.addLesson`. `blind.js` prints passages and every item with a seeded shuffle (seed 777013 + a per-lesson term, different from the first review). It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `like` and the `addons`. There were no figures in these lessons (passages are paragraphs only), so there is no alt text to print. I never printed raw item source. My schema probes printed field names only, never values. I saved `ans-a.json` to `ans-d.json` before `cmp.js` extracted any key.
- **Items solved: 160** (2.a 40, 2.b 43, 2.c 39, 2.d 38): core with refs resolved, Together, S01 to S15, form A, and 2.b form B.
- **Result: 159 of 160 as saved (99.4%), 160 of 160 once one transcription slip is corrected.** The slip is 2.a P7 (the ref'd run-on item). I reasoned to sentence (7), but I typed target number 1 instead of 3 in the shuffled list, which is sentence (3). It is my error, not a content fault. Every other item matched the key.
- **Fully blind: yes.** I saw no key, `why`, hint, `how` or author text before saving.
- **The agreement hides some risk.** These items I matched but found weaker than their key suggests: 2.b S13 row 4, 2.b S05, 2.d C07 (because of the passage fault in 2.d-1), 2.c S07, 2.d S02 `LATE`. Details are in the lesson tables.

## S2. First-review MUSTs: are they fixed?

| First-review MUST | Status | Evidence |
|---|---|---|
| a1 2.a C08 `why` | Fixed | Says "grabbed the boxes together". |
| a2 2.a S02 `why` | Fixed | Rewritten from S02's own sentences (seat, legs, wheel). |
| b1 2.b P4 H3 | Fixed | "Three of the five sentences mix past and present verbs. Find the two that do not." Matches the keys. |
| b2 2.b C09 `why` | Fixed | "Sketched is past tense. It should be sketches." |
| b3 2.b p5 title | Fixed | "Our Class Terrarium". |
| b4 2.b S13 (match) | **Partly fixed** | `after` is gone and rows 1 to 3 are now unique, but row 4 still has a second defensible word. See 2.b-2. |
| c1 2.c S12 H2 | Fixed | No "fan" line. |
| c2 2.c S14 H2 | Fixed | Part B no longer handed over. |
| d1 2.d C06 H3 | Fixed | Rules out only "sandy". |
| d2 2.d S08 H3, d3 P5 H3 | Fixed | Each rules out one word ("okay"); four choices stay live. |
| d4 2.d S10 H1 | Fixed | Strategy only. |
| d5 2.d S11 | Fixed | Rebuilt on p5 sentence 3 and distinct from S08. |
| d6 2.d S02 NEARBY | Fixed | Row is now QUICKLY. A new borderline word, LATE, is a NOTE. |
| d7 2.d S14 H2/H3 | Fixed | "neat rows" is no longer quoted (H1 still points at sentence 3, a SHOULD). |
| d8 2.d p3 | Fixed, **but see 2.d-1** | New "Decorating a Cake" passage. Concept scan is clean (below). The d14 fix broke passage p2. |

The author's claims check out in these places: the 5-gram scan (my own scan finds only boilerplate and incidental hits), the passage FK range and the stale-text grep for the named words. Two claims do not hold. The "no pair above 0.21" similarity claim is true only for similar-vs-`like`; some within-lesson pairs reach 0.39 (section S3). The stale-text grep missed `misconception` lines, so the stale "apples or bag" in 2.c S09 and the wrong "surprise" in 2.b S05 survived.

## S3. Mechanical checks

- **Passage FK** (`verification/readability.py`): 0.7 to 3.8 for all 25 passages (2.d p3 cake 2.5, limit 4.5). All pass. Passages are 100 to 127 words with 10 to 14 numbered sentences (the plan's guide is six to ten; NOTE).
- **Passage numbering check** (script): all 25 passages count 1 to n in order **except 2.d p2**, which reads 1, 2, 3, 4, **3**, 6, 7 and so on (MUST 2.d-1).
- **Similarity** (`jac.js`, `jac2.js`): word-set and multiset Jaccard over prompt, stem, text, choices, slot options, free options, match `cols` and `rows`, and both ebsr parts; the second pass adds hot-text target sentences from the passage.
  - Every similar item against its `like` core: 0.20 or less (worst 2.b S08 vs C08, 0.20 / 0.18).
  - Within-lesson, new content: worst 0.39 / 0.34 (2.a C08 vs C10), 0.39 / 0.37 (2.c C09 vs P3 `has/have` vs `runs/run`), 0.38 / 0.20 (2.b P2 vs T2), 0.37 / 0.10 (2.b P5 vs C05), 0.34 / 0.29 (2.d C14 vs T3). No new pair reaches 0.40.
  - Pre-existing pairs: 2.a P7 vs P9 0.54 / 0.50 and T6 vs T8 0.49 / 0.50, both sharing passage text.
  - **2.c P1 vs T2 is now 0.22 / 0.28** (it was 0.45 / 0.52). The first-review overlap is resolved.
  - Cross-lesson: nothing above 0.52, and that one is only the hot-text prompt template.
- **Longest-key cue** (`cue.js`, 82 single-key sets): the key is uniquely longest in **21 of 82 (26%)** against 33 of 82 before (chance about 25%). Mean ratio 1.01. Flagged at ratio 1.2 or more: 2.a S14 (1.25, SHOULD), 2.b C06 Part B (1.20, SHOULD), 2.d T3 Part A (1.23, natural for an "elaborate" item, NOTE), 2.d S06 (single words, ignore). 2.a C10 (the first-review NOTE) is no longer flagged.
- **Word-match cue:** the key has the strictly highest overlap with the stem or passage in 7 of 82 sets, and at 0.5 or more in only two: 2.b C15 Part B (0.60) and 2.d S11 (0.80, by design). NOTE for 2.b C15 Part B.
- **Key-beside-explanation audit** (`keywhy.js` plus a full read of every `why`, `how` and `misconception`): for every mc/ms/ebsr item the key text appears in `why`, and no wrong choice is presented as the answer (the few script hits were case-fold false positives). Read-through found two wrong or stale `misconception` lines (2.b S05, 2.c S09) and no `why` or `how` that contradicts its key.
- **Key text in hints** (`leak.js`): no hint quotes a key. Echoes are listed under SHOULD (2.b C15/S15 H1, 2.c S11 H1/H3, 2.c C14 Part B H2, 2.d C14/S14 H1).
- **Points and DOK:** all single-key and pick-two points are right (ms, match, ebsr, two-slot dropdown and pick-two hot text are 2). Exception: 2.a C15 and S15 are two-slot dropdowns scored 1 (SHOULD 2.a-2). DOK: no DOK 1 items; DOK 3 count is 5 / 5 / 4 / 3 per lesson. Language needs at least one.
- **Format rule** (plan §4.4, `mc` in at most six items per fifteen): 2.a has **nine** mc (MUST 2.a-1). 2.b has six, 2.c five, 2.d four. All four lessons have at least five formats.
- **Topic and concept duplicates over all `js/data`** (grep plus 5-gram scan; variants and sets included):
  - Cake decorating, frosting, piped icing, "smear" and "tiny tip" appear nowhere else. The only cake hits are incidental single sentences (T-T34 rhyme stanza, L-V12 "The baker frosted the cake.", L-GUM5, L-GUM2, F-PF).
  - boat ride (T-CF has one brochure clue), soup (many stray single words), concert, thunder, stove: no passage-level overlap. Go-kart, bird bath, snow globe, terrarium, unicycle, time capsule, ant farm, dollhouse, model train, rock collection, hammock, pet wash, tug-of-war, obstacle course, book sale and snow cone appear in no other file.
  - Sentence-level near hits (NOTE): 2.b S13 row "The ice cream will melt ___" echoes T-TS "The ice cream will melt before the picnic starts"; 2.b S15 "because thunder rumbled over the hill" shares a 5-gram with a T-TS sample answer; 2.b T5 repeats the L-V3 frame "the wind ___ it high into the sky" (pre-existing test item). None is a copied item.

## S4. Web-verified facts (URLs)

- **Compound-complex sentences exist** (2.a C14 distractor C and `why` "A sentence is not both kinds"): https://www.vocabulary.com/dictionary/compound-complex%20sentence ("A sentence with at least two independent clauses and one dependent clause is a compound-complex sentence."). The distractor's reason is true in general; the `why` sentence is not. See 2.a-3.
- **Compound predicate is not a compound sentence** (2.a C04 option "and zipped her backpack quickly", S04 "and jumped into the pile"): https://writingexplained.org/grammar-dictionary/compound-predicate ("A compound predicate is different from a compound sentence."). The keys are right.
- **late, soon, early are adverbs of time; here, outside are adverbs of place** (2.d C10, S10, P3, S02): https://storylearning.com/learn/english/english-tips/list-of-adverbs ; Merriam-Webster `late`, adverb, with the example "The package arrived late.": https://merriam-webster.com/dictionary/late ; Merriam-Webster `outside`, adverb, "outdoors": https://www.merriam-webster.com/dictionary/out-side . The S02 row `The train arrived LATE.` is therefore defensible as an adverb. NOTE: `late` is also an adjective in "the late train", which is why a third grader could hesitate.
- **Agreement rules used in 2.c** (words between subject and verb, subjects joined by "and" take a plural verb, everyone/each/every are singular, 2.c T4): https://owl.purdue.edu/owl/general_writing/grammar/subject_verb_agreement.html ("Do not be misled by a phrase that comes between the subject and the verb."; "each" and "everyone" are singular) and https://lib.conestogac.on.ca/grammar/subject-verb-agreement ("Everyone cheers when the blue team scores."). All 2.c keys agree.
- **Standard wording** (first review checked the Georgia and Common Core text): `standards.js` `official` for 2.a to 2.d matches the items' target skills. I could not re-fetch the Georgia PDF (not on the fetch allowlist); NOTE as before.

## S5. Browser run (390x844, touch, real controls)

- `real.py` (adapted from the first review): server on 8747, Playwright Chromium, `has_touch`, `is_mobile`, fonts blocked. Opens each lesson at `PP_SKILLS.open(code,'try')`, starts each core item with `PP_PLAYER.start("SK:<code>:y|y2|y3",'try',{pos})`, answers with real clicks on `.choice`, `select.dd-select`, `.match-btn`, passage `data-ref` targets and `.hot-option`, then Check.
- **Result: 60 of 60 core items accepted the correct answer. No hit target under 36 px, no horizontal scroll, no page error.**
- `ui5.py` (hints, Show me how, Try a similar question, all 15 per lesson): no horizontal scroll at load, after three hints, after Show me how or in the similar item. All similar items opened and accepted their key except the five ebsr pairs, where the old script harness cannot set a two-part answer. I covered those four core-to-similar pairs with real clicks in `eb2.py` (2.b C06 to S06, 2.b C15 to S15, 2.c C14 to S14, 2.d C14 to S14): all eight answers accepted, no horizontal scroll.
- The only console error is the blocked Google Fonts request.

## S6. Live choices after hints 1 to 3 (hand count; no hint states a key)

I read every H1 to H3 in all 154 core, Together, similar and test-addon items (tests have no hints). Every item keeps at least two choices live. The rows that leave **exactly two** live are listed because a solver can reach the key by coin toss:

| Item | Live after H3 | Verdict |
|---|---|---|
| 2.a P7 (ref) and S01 | two lines (5 and 7) | acceptable (NOTE) |
| 2.b P6 (ref) | gathers / gather | acceptable |
| 2.b C11 | A and D, both "Zane" | **SHOULD** (2.b-3): H3 says Ella's fix is "not enough", so only the choice of reason is left |
| 2.c C06 | sentences 3 and 5 | acceptable (NOTE) |
| 2.c C10 | A and C | acceptable (first review: same) |
| 2.d P1 (ref) | muddy / fluffy | acceptable |
| 2.d C06 | sunny / wintry | **SHOULD** (2.d-3): H2 also answers its own question |
| 2.d C13 slot 1 | runny / dusty | acceptable |

All other items keep three or more live (mc 3 of 4, ms 3 to 4 of 5, hot text 3 to 4, match with settled row at most one). No H3 removes more than one distractor on any ms item.

---

## S7. Findings by lesson

Legend: MUST = fix before acceptance. SHOULD = fix unless the author gives a reason. NOTE = information only.

### 3.L.GC.2.a: simple, compound, complex

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| 2.a-1 | **MUST** | Core mix | Core has **nine** mc items (P8, C05, C06, C07, C08, C09, C10, C12, C14). Plan §4.4 caps `mc` at six per fifteen. The similar bank mirrors the same nine. 2.b has six, 2.c five, 2.d four. | Convert at least three. Good candidates: C06 (hot text on the Amari passage, "select the fragment"), C09 (dropdown: pick the word that gives line 7 its who) and C12 (dropdown or ms). Mirror the change in S06, S09 and S12. |
| 2.a-2 | SHOULD | C15, S15 | Two-slot dropdowns scored 1 point. Every other two-slot dropdown in these lessons (2.b T5/TB5, 2.c P5/P7/C13/S01/S03/S13, 2.d C13/S13) scores 2, and the engine gives half credit at 2 points. | Set `points: 2` for both, or say why these are one unit. |
| 2.a-3 | SHOULD | C14 distractor C and `why` | "Both are right, because one sentence can be compound and complex at once" is true in general (compound-complex; URL in S4). The `why` then says "A sentence is not both kinds", which is false. | Reword C to "Both are right, because the sentence tells two things and has a joining word", and the `why` to "this sentence has only one whole thought, so it is not compound". |
| 2.a-4 | SHOULD | S14 | Key is uniquely longest (54 vs 43 characters, ratio 1.25). | Shorten the key or lengthen the three distractors. |
| 2.a-5 | NOTE | S01, P7 | After H2 and H3 two lines remain (sentences 5 and 7). Acceptable under the two-live rule. | None. |
| 2.a-6 | NOTE | Watch Me | First-review a10 (no worked example of joining a fragment to a sentence beyond the one fix shown in example 1) still stands; C12, P8 and S12 ask for it. | Optional one-line addition. |
| 2.a-7 | NOTE | Test ids | Form A is T1, T2, T3, T6, T7, T8 (no T4 or T5). Pre-existing. | None. |
| 2.a-8 | NOTE | S13 | Teaches no "since" (S13 key) or "while" (S02 choice E); the teach text says "a word like because, when, after, before or if". | Fine. |

Cold re-solve of the focus item **2.a C14**: Zuri is right, key agrees, one defensible answer. The new stem ("The soup cooled after Dad turned off the stove.") is distinct from 3.T.SS.1.c. The only fault is the C distractor and `why` wording above. Every C-set hint ladder is sound: H3 removes one choice and no more, and H1 to H3 of C14 never states "Zuri".

**Verdict 2.a: CHANGES REQUIRED** (2.a-1, mc count).

### 3.L.GC.2.b: variety and tense

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| 2.b-1 | **MUST** | S05 `misconception` | Reads "A common mix-up is choosing so. So shows a result, and here the second idea is a surprise." The two ideas are two choices; the surprise wording is left over from an earlier "but" version. The line is shown to a child after a wrong answer. | "A common mix-up is choosing so. So would mean setting the table causes washing the dishes, but Kia could do either job." |
| 2.b-2 | **MUST** | S13 (match), row 4 | "Ana is small, ____ she is the fastest runner on our team." takes `but`, but `and` also makes a good sentence ("Ana is small, and she is the fastest runner"), and `and` is a column word. Columns can be reused, and the prompt says only "best". This is the same fault as first-review b4. Rows 1 to 3 are unique now (`also`, `always rings`, `will melt` settle them). | Put a contrast cue in the row, e.g. "Ana is small, ____ she is still the fastest runner on our team.", or add "Use each word one time" to the prompt and keep four distinct words. Re-test every row against every column. |
| 2.b-3 | SHOULD | C11 H2/H3 | H3 says "Ella made the two verbs match each other, but matching is not enough." That tells the solver Ella is wrong and leaves A and D, both "Zane". H2 ("Look at the first words of the sentence... when this happened") also nearly spells the key text "Last year shows...". | Move the Ella comment to HOW. H3 could say "Check each reason against the time clue." |
| 2.b-4 | SHOULD | S05 prompt | The prompt tells the solver "so they are two choices", so the item is easier than its `like` C05 (which asks for the "best way to combine"). The `like` mapping is only partly honest. | Match C05's prompt: "Which sentence is the best way to join the two ideas?" and keep H2. |
| 2.b-5 | SHOULD | C05 H2; C15 H1; S15 H1 | C05 H2 "does it offer something else to pick?" describes the key relation. C15 H1 and S15 H1 ("Decide which idea is the reason... / Which idea explains the other?") name the relation, and the Part B key says "reason" / "explains". C05 H1 and C12 H1 list all four relations and are neutral. | Make C15 H1 and S15 H1 neutral: "Ask how the two ideas go together." |
| 2.b-6 | SHOULD | C06 Part B | Key is uniquely longest (90 vs about 75 characters, ratio 1.20). | Equalize. |
| 2.b-7 | NOTE | C09 / P1 / T1 / TB1 / S09 | The same task (find the one past-tense verb in a present-tense draft, or the reverse) appears in core, Together, form A and form B. The drafts and answers differ (passage Jaccard 0.31 to 0.35). C09 therefore rehearses T1 and TB1 closely. | Acceptable; keep one of T1/TB1 on a different task type if the test needs more spread. |
| 2.b-8 | NOTE | C13 | H2 plus H3 settle row 1 and mark rows 3 and 4 as cause pairs, so only a 50/50 on `because`/`so` remains. | Acceptable. |
| 2.b-9 | NOTE | Learn It | `or` (two choices) is used by C05, C12, C13, S05 and S12 but not modelled in Learn It. The teach text lists "and, but, or, so" without a gloss for `or`. | Add `or` to Learn It example 2 or to the teach text. |
| 2.b-10 | NOTE | C06 / C08 | C08 explains the Now shift and gives away C06 Part B distractor B when revisited. First-review b11. | Acceptable. |
| 2.b-11 | NOTE | S13 `like` | C13 is because/but/or/so; S13 is and/before/if/but. Same skill, one shared word. | Honest enough. |

Cold re-solve of the named items: **S13** unique except row 4 (above). **S05** and **S15** unique and match their `like` relation (or, because); S15 Part B distractor D ("came long after the concert ended") is clearly wrong; Part A `but` is not defensible. **TB5** is now unique: "every spring", "rises" and "come" are fixed by the anchor "and I wave to them from the porch", so `rose` and `came` would shift tense. **C09** (terrarium): the only mismatch is sentence 8 `sketched`, confirmed against all thirteen sentences.

**Verdict 2.b: CHANGES REQUIRED** (2.b-1 and 2.b-2).

### 3.L.GC.2.c: subject-verb agreement

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| 2.c-1 | **MUST** | S09 `misconception` | "...matching the verb to the last word, such as apples or bag." The rows are "pillows on the couch", "box of crayons", "cats near the door". "Apples" and "bag" came from the old teach-example row. | "...such as couch or crayons." |
| 2.c-2 | SHOULD | C11, C14, C06, S11 wording | In a subject-verb agreement lesson the child reads "tickets is the subject, and tickets is more than one" (C11 key A and distractor C), "Comics is more than one" (C14 Part B D), "Shoes is more than one" (C06 HOW3), "Keys is more than one" (S11 HOW). A word named as a word takes "is", but it looks exactly like the error the lesson teaches. | Write "the word tickets" or "tickets names more than one thing". |
| 2.c-3 | SHOULD | C14 Part B | Key text "My brother and I names two people, so the verb must be look." contains the very error it teaches. H2 for Part B ("ask how many people the subject names") echoes the key's "names two people". | "The subject has two people in it, so the verb must be look." and H2 "ask how many people the subject has". |
| 2.c-4 | SHOULD | S11 H1/H3 | H3 "Which reason uses the word that the sentence is about?" and H1 both echo key A, "since the sentence is about keys", which is the only choice that says "about". Distractor C ("missing is a single word") is implausible. | Reword H3 ("Compare each reason with what is missing") and write a more tempting C. |
| 2.c-5 | SHOULD | S07 | Distractors C ("sun... last noun") and D ("beside... starts the words about place") are implausible, so after H3 removes B (ropes) the item is a one-choice read. First-review c5 asked for stronger distractors; the item was reworked but the distractors stayed. | Replace C and D with plausible wrong reasons ("only the word right before waves"; "every noun in the sentence counts"). |
| 2.c-6 | NOTE | C07 | One defensible answer (A). Distractor C ("always takes a verb that ends in s") is weak; H3 removes B and leaves three live. | Acceptable. |
| 2.c-7 | NOTE | C06, C10 | H3 leaves exactly two live (sentences 3 and 5; choices A and C). | Acceptable. |
| 2.c-8 | NOTE | C11 | Stem lines for Ana and Ben state each student's reason, so the item restates its key; DOK is now 2, which is honest. | None. |
| 2.c-9 | NOTE | C09 / P3 | Same frame (0.39 / 0.37), different words and pairs. Pre-existing from the first review. | None. |
| 2.c-10 | NOTE | C08 H2 | Points at B, C and E (and, "you") but not A (the singular row). | Acceptable. |

Cold re-solve of **S07**: unique (flag), but trivial. The rest of 2.c has one defensible answer in every item. The key-length and word-match cues are clean in this lesson (the first-review C14 Part B length is fixed).

**Verdict 2.c: CHANGES REQUIRED** (2.c-1, a one-line text fix).

### 3.L.GC.2.d: adjectives and adverbs

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| 2.d-1 | **MUST** | Passage p2, "My New Bike", paragraph 2 | The d14 fix damaged the passage. It now reads "(3) It was a nice bike, and I had never ridden one without help. (4) I rode down the street. **(3)** It was a nice bike, and I had never ridden one without help, so my knees shook. (6) A dog barked..." Sentence 3 appears twice, sentence 5 is missing, and the "knees shook" evidence that C07's key rests on sits in a sentence numbered 3 that comes after sentence 4. C07 says "fits what sentence 3 says"; a solver can read the first sentence 3, which has no "knees shook". Original (scratchpad `2d.bak.js`): `(3) It was a nice bike, and I had never ridden one without help. (4) I rode down the street. (5) The wind blew against my face. (6) A dog barked...` | Make paragraph 2: "(3) It was a nice bike, and I had never ridden one without help, so my knees shook." "(4) I rode down the street." "(5) The wind blew against my face." "(6) A dog barked at my wheels, and I pedaled away." No item refers to sentence 5. Re-run C07, C08 and the passage numbering check. |
| 2.d-2 | SHOULD | C14 H1, S14 H1; Part A word-match | H1 should be strategy only. C14 H1 says "Sentence 3 says what color the frosting was" and S14 H1 says "Sentence 3 tells how the karts were set up" (that is Part B's key content). The key in C14 Part A ("pale") is the only choice that reuses a word from the passage. | Move the sentence pointer to H2. Add a distractor that reuses a passage word, e.g. "The frosting looked yellow and bumpy, with a gray swirl." |
| 2.d-3 | SHOULD | C06 H2 | "What kind of weather has swirling flakes in a storm?" answers itself with the key's meaning (winter). With H3 removing "sandy" two choices are left. | H2: "Reread sentence 4. What do the swirling flakes look like?" |
| 2.d-4 | SHOULD | p3 vocabulary | "Tyrell piped the grass with a tiny tip" uses "piped" in its cake-decorating sense, which many third graders will not know; "tip" is also unclear without it. C12 and C13 do not depend on it, but a reader may stall. | "Tyrell squeezed frosting grass through a tiny tip" or add a short gloss. |
| 2.d-5 | SHOULD | C14 Part B | Key ("The exact words fit the very pale yellow that Keisha mixed.") is the longest (ratio 1.1) and the only choice that echoes the passage. Distractors are silly ("It is the longest revision, so it must tell the most."). | Add plausible rivals ("It adds more describing words than the other revisions."). |
| 2.d-6 | NOTE | C12 | One defensible answer (carefully), but all three distractors (wildly, sleepily, noisily) are obviously wrong, so the item is easy. | Acceptable at DOK 2; consider "hurriedly". |
| 2.d-7 | NOTE | C07 | Once the passage is fixed, "shakily" is the one defensible answer (sentence 3 says "knees shook", and nothing says Marcus was proud). Key echoes the passage word "shook". | None. |
| 2.d-8 | NOTE | S02 | The row `The train arrived LATE.` is an adverb (URLs in S4) but `late` is also an adjective, so a careful child could hesitate. | Acceptable; `yesterday` or `outside` would be safer. |
| 2.d-9 | NOTE | S07 | Key "cautiously" (and distractors "confidently", "recklessly" in S12) is above-grade vocabulary. | Acceptable with the hint scaffold. |
| 2.d-10 | NOTE | C11, C13, C15 | DOK 3 on easy items (first-review d17, not changed). | None. |
| 2.d-11 | NOTE | C15 / S15 H2 | H2 is the full solution procedure ("Cross out any revision that uses a plain word or repeats a word. Then check what is left for words that crowd the sentence."). Follow it and you reach the keys. | Acceptable, but weaker as a "where to look" hint. |

Cold re-solve of the named items:
- **C12** (cake): unique (carefully); no giveaway into C13/C14.
- **C14** (cake, ebsr): unique, both parts. The cake passage is coherent (the frosting colour, the piped grass and the blue river all agree with C12, C13 and C14).
- **S02**: unique.
- **C07**: unique only if the passage is fixed (2.d-1).
- **Concept duplicates** for cake, decorating and frosting: none (S3). The new passage is distinct from the old "Painting a Birdhouse".

**Verdict 2.d: CHANGES REQUIRED** (2.d-1, a passage-numbering fault introduced by the first-review fix).

---

## S8. Cross-lesson notes

- **Regression from a fix.** The only new content fault in the whole batch (2.d p2) was made while fixing d14. After fixing 2.d-1, run the passage numbering check below on every passage again. A one-line script is enough: for each passage, the leading `(n)` numbers must be 1, 2, 3 in order.
- **`misconception` is not in the author's stale-text grep.** Two stale `misconception` lines survived (2.b S05, 2.c S09). Grep `misconception`, `mix`, `hints`, `how` and `why` for any content word that does not occur in the item or its passage.
- **Key-length bias is gone.** Uniquely longest key is 26% (chance 25%); in the first review it was 40%.
- **Learn It / Watch Me.** All four lessons teach what the fifteen need, with two small gaps: 2.b never models `or`; 2.d models adverbs of manner only (C10 and S10 ask for "when" and "where", which the teach text covers).
- **Formats.** After 2.a-1, check the similar bank format mix as well.

## S9. Verdicts

| Lesson | Verdict | MUSTs | Notes |
|---|---|---|---|
| 3.L.GC.2.a | **CHANGES REQUIRED** | 2.a-1 (nine mc; limit six) | 3 SHOULD, 4 NOTE. Blind solve 40 of 40. |
| 3.L.GC.2.b | **CHANGES REQUIRED** | 2.b-1 (S05 `misconception`), 2.b-2 (S13 row 4) | 4 SHOULD, 5 NOTE. Blind solve 43 of 43. |
| 3.L.GC.2.c | **CHANGES REQUIRED** | 2.c-1 (S09 `misconception`) | 4 SHOULD, 5 NOTE. Blind solve 39 of 39. |
| 3.L.GC.2.d | **CHANGES REQUIRED** | 2.d-1 (p2 numbering and duplicate sentence) | 4 SHOULD, 6 NOTE. Blind solve 38 of 38. |

The first-review MUSTs are fixed, apart from the S13 residue, and the batch is close. Each remaining MUST is a small edit. After the five MUST edits, a re-check should cover: 2.a core and similar format counts; 2.b S05 and S13; 2.c S09; 2.d p2 numbering and C07/C08.

---

# Third review (2026-10-27): 3.L.GC.2.a, 2.b, 2.c, 2.d

**Role:** third independent reviewer (blind solver). I did not write these lessons and took part in neither earlier review. I read the reviewer brief and the shared content brief first. I did not open this file's earlier sections, the author log or any lesson source for items until my blind answers for all four lessons were saved (`ans-a.txt` to `ans-d.txt`).
**Read-only:** I edited no lesson or code file and ran no git. This appended section is the only file I wrote. All scratch work and a frozen copy of the site are in `scratchpad/b5r6/` (`site/` is the frozen copy; the test server `node verification/serve.js . 8761`, pid 25241, was killed by pid afterwards).

## T1. Blind solve (new seed)

- **Method.** `load.js` runs `js/data/lessons/L-GC2.js` in a Node `vm` sandbox with a mock `PP.addLesson`. `blind.js` prints each passage once and every item with a seeded shuffle (new seed: a per-lesson string hash plus 60601; the earlier reviews used other seeds). It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `like`, `std`, `addons` and the `core.rev` field. The lessons have no figures, so there is no alt text. I printed no raw item source. My one schema probe printed field names only (no values). I saved my answers before `cmp.js` read any key.
- **Items solved: 160.** Core (15 per lesson, `{ref}` resolved), Together (practice not referenced by core), S01 to S15, form A, and 2.b form B (TB1 to TB5). 2.a 40, 2.b 43, 2.c 39, 2.d 38.
- **Agreement.** The script reported 157 of 160. Two of the three are not content disagreements: 2.a T2 is a formatting mismatch in my answer file (I typed "C,D" for the two-part ebsr instead of "C;D"; the parts match), and 2.c S10 is my own slip (I picked "barks, lets" and wrote "the children lets"; the key "barks, let" is right). That makes **158 of 160 (98.8%) strict, 159 of 160 (99.4%) if my own slip is not counted against the content.**
- **One real disagreement: 2.b P2** (Together, `like` none). "The tunnel was dark. It felt a little scary." I chose `but`; the key is `so`. `so` is the better answer (the dark causes the fear; `but` implies a contrast that is not there), but `but` read fine to me at first pass. NOTE only; the item is pre-existing and both earlier blind solvers matched it.
- **Fully blind: yes.** I saw no key, `why`, hint, `how`, `misconception` or author text before saving. I did not open the earlier review sections or the author log until after `cmp.js` ran.
- **Items that read as one defensible answer but had a second look:** 2.a C09/S09 (easy, see T4), 2.a C14 (the compound-complex distractor is now reworded, fine), 2.b S13 and S05 (fixed, see T2), 2.d S02 `LATE` (adverb per the earlier sources, still borderline for a child).

## T2. Second-review MUSTs: are they fixed?

| Second-review MUST | Status | Evidence |
|---|---|---|
| 2.a-1 core `mc` count | **Fixed** | Core now has **six** mc (P8, C05, C07, C08, C10, C14), and the similar bank mirrors it with six (S03, S05, S07, S08, S10, S14). Core formats: hot text 2, ms 4, mc 6, dropdown 2, match 1 (five formats, nine technology-enhanced items; plan §4.4 asks for at least four and three). Set by set: set 1 hot text/ms 2/mc 2, set 2 hot text/mc 3/dropdown, set 3 match/ms 2/mc/dropdown. |
| 2.a C06, C09, C12 converted items still unambiguous | **Yes** | C06 hot text on Amari's draft: sentence 5 "When my box was almost full." is the only fragment among targets 4, 5, 7, 8, 9 (sentence 8 is a run-on, the others are whole). C09 dropdown: only `he` gives sentence 7 a who (`quickly`, `over` do not). C12 ms: B and D fix "With a stove made of clay."; A ("and with"), C ("because with") and E (the fragment unchanged) do not. S06, S09 and S12 mirror them and are equally clear. I solved all six cold: all match. |
| 2.b-1 S05 `misconception` | **Fixed** | New stem (porch and garden), key `or`; misconception: "So would mean sweeping the porch causes watering the garden, but Kia could do either job." Matches the item. |
| 2.b-2 S13 row 4 | **Fixed** | Prompt now ends "Use each word one time". Rows: `and` (also), `before` (always rings ... class starts), `if` (will melt ... in the sun), `but` ("small ... still the fastest"). I tested each row against all four columns: row 1 could take `but` only by ignoring `also`; row 2 `if` makes nonsense; row 3 `before` makes nonsense (and `before` is used by row 2). With each word used once, the key is the only consistent assignment. Cold solve matches. |
| 2.c-1 S09 `misconception` | **Fixed** | "such as couch or crayons". |
| 2.d-1 p2 numbering and C07/C08 | **Fixed** | Paragraph 2 now runs (3) "It was a nice bike, and I had never ridden one without help, so my knees shook." (4) I rode down the street. (5) The wind blew against my face. (6) A dog barked... **Numbering check passes on all 25 passages** (script: leading `(n)` runs 1..n in order; counts 10 to 14). C07 has one key, `shakily` (sentence 3 says "my knees shook"; `proudly`, `lazily`, `fearlessly` are unsupported). C08 revisions A and B replace "nice" in sentence 3 and C to E keep plain words; unique. Both solved cold: match. |

## T3. Mechanical checks

- **Passage FK** (`verification/readability.py`, run on `L-GC2.js`): 0.7 to 3.8, all 25 passages (limit 4.5). Words 100 to 123.
- **Passage numbering** (script): 25 of 25 pass, no duplicate or missing sentence numbers (2.d p2 repaired).
- **Similarity** (`jac.js`: word-set and multiset Jaccard over prompt, stem, text, choices, slot options, free options, match `cols` and `rows`, both ebsr parts, and the hot-text target sentences read from the passage):
  - Every similar item against its own `like`: **0.20 or less** (2.a 0.19, 2.b 0.20, 2.c 0.18, 2.d 0.19).
  - Similar against any core item (non-`like`): worst 0.27 / 0.17 (2.d S12 vs C07), 0.26 / 0.23 (2.c S02 vs C04), 0.24 / 0.21 (2.c S07 vs C11). None reaches 0.30.
  - Within the core, Together and tests: worst new content 0.39 / 0.34 (2.a C08 vs C10), 0.39 / 0.37 (2.c C09 vs P3), 0.38 / 0.20 (2.b P2 vs T2), 0.37 / 0.10 (2.b P5 vs C05). Pre-existing 2.a P7 vs P9 0.54 / 0.50 and T6 vs T8 0.49 / 0.50, which share passage text in the hot-text targets. No new pair reaches 0.40.
  - Within the similar bank: worst 0.32 / 0.35 (2.a S01 vs S02, hot text vs ms on the same unicycle draft).
- **Longest-key cue** (`cue.js`, 76 single-key mc and ebsr-part sets): key uniquely longest in 16 of 76 (21%, chance about 25%). At ratio 1.2 or more: 2.d T3 Part A (1.23, natural for "elaborate", NOTE) and three single-word sets (2.c S04, 2.d S06, S07, ignore).
- **Key text in hints** (`leak.js`): no hint contains a key's full text. Two partial echoes only: 2.c C14 H2 ("two ... people"), 2.c S07 H2 ("flag sentence", which is in the prompt). Clean.
- **Key-beside-explanation** (`keywhy.js` plus a read of the converted items and the MUST items): every mc/ms/ebsr/hot-text key appears in its `why`, and no distractor is presented as the answer (the script's distractor hits are the sentences explaining why each wrong choice fails). **One `why` is wrong: 2.b C06 (see 2.b-1 below).** The 2.a P9 "key not in why" hit is a script artifact (the `why` cites the sentences by number).
- **Points and DOK:** all single-key and pick-two points are right. 2.a C15 and S15 are now **2 points**. DOK has no DOK 1; DOK 3 count per fifteen is 5 / 5 / 4 / 3.
- **Format rule:** `mc` per fifteen: 2.a six, 2.b six, 2.c five, 2.d four. All four lessons use at least five formats.
- **`like` mapping:** every `like` points to a real core item of the same skill. Types match everywhere except 2.c S06 (mc, like the hot-text C06) and 2.d S06 (mc, like the dropdown C06); the skill is the same, so NOTE.
- **Concept duplicates over all `js/data`** (grep of passage topics and key nouns): dollhouse, ant farm, unicycle, model train, time capsule, snow globe, terrarium, rock collection, bird bath, go-kart, hammock, snow cone, book sale, pet wash, obstacle course, tug-of-war, trail guide and pool deck appear in no other file. Incidental single mentions only for lighthouse (a rhyme stanza and a topic-sentence item in T-T2), frosting (a rhyme stanza in T-T34), aquarium (T-T1 narrative line, T-RA source notes), farmers market (T-T1, T-SS, F-FH: other passages), bakery and bake sale (single sentences). None is a copied item or the same key fact.
- **Standard wording** (`js/data/standards.js` `official`): 2.a "Distinguish between correctly structured simple, compound, and complex sentences."; 2.b "Use a variety of simple, compound, and complex sentences ... establishing consistent verb tense within and between sentences."; 2.c "Use correct subject-verb agreement in a variety of sentences."; 2.d "Elaborate on ideas and information, using adjectives and adverbs ... to convey precise meaning." The items match each (2.a: see NOTE 2.a-5 on fragment weight).

## T4. Web-verified facts

- **A complex sentence has one independent clause plus a dependent clause, and a dependent clause alone is a fragment** (2.a P9 distractor E, S02 distractor "While the wheel wobbled.", T8 distractor "(5) When we reached the top."): https://www.grammarbook.com/blog/?p=5496 ("has one independent clause and at least one dependent clause"; a dependent clause "cannot stand alone as a sentence"). The same point appears in the search hits for https://www.ou.edu/content/dam/writingcenter/docs/writing-guides/sentence-fragments-handout.pdf (listed, not opened). The keys are right: a lone "When ..." line is a fragment, not a complex sentence.
- Earlier reviewers verified compound predicates (`and zipped her backpack` is not a compound sentence), adverbs of time and place (`late`, `soon`, `here`, `outside`) and the subject-verb rules (Purdue OWL, Conestoga): I re-checked every 2.c key by reasoning, all agree, and I did not re-fetch those pages.
- I could not open the Georgia standards PDF through the fetch allowlist; the `official` strings in `standards.js` are used as is.

## T5. Browser run (390x844, touch, real controls)

- Frozen copy served on 8761. Playwright Chromium, `has_touch`, `is_mobile`, fonts blocked. For each lesson I opened `PP_SKILLS.open(code,'try')`, started each of the 15 core items with `PP_PLAYER.start("SK:<code>:y|y2|y3",'try',{pos})`, answered with real clicks (`.choice`, `select.dd-select`, `.match-btn`, passage `data-ref` targets, `.hot-option`, ebsr `.part .choice`), then clicked Check.
- **Result: 60 of 60 core items accepted the correct answer. No hit target under 36 px, no horizontal scroll, no page error.**
- Hints, Show me how, and Try a similar question for all 15 core items per lesson (`ui5.py`): no horizontal scroll at load, after three hints, after Show me how or in the similar item; all 60 similar items opened. The old script cannot set a two-part ebsr answer, so the four ebsr pairs it reports as failing (2.b C06/S06, 2.b C15/S15, 2.c C14/S14, 2.d C14/S14) were re-run with real clicks in `eb2.py`: all eight answers accepted, no horizontal scroll. The only console error is the blocked Google Fonts request.

## T6. Hint ladder and live choices (read every H1 to H3 for the 45 core/similar items per lesson that carry hints)

Live-choice hand count after hints 1 to 3 (keys marked on each item): every item keeps at least two live. The rows that leave **exactly two** live:

| Item | Live after H3 | Verdict |
|---|---|---|
| 2.a P7 (ref), S01 | sentences 5 and 7 | acceptable (carried NOTE) |
| 2.a **S10** | the key and "Lines 3 and 7: both halves can stand alone" | **SHOULD** (2.a-2): H3 states the first half of the key |
| 2.a C14 | Zuri, and "Neither" (effectively; Kofi's choice survives only on its stated reason) | NOTE (2.a-4) |
| 2.b P6 (ref) | gathers / gather | acceptable |
| 2.c C06 | sentences 3 and 5 | acceptable (carried NOTE) |
| 2.c C10, S10 | the key and one wrong verb in the second blank | NOTE |
| 2.c S02 | key and "Her shoes is by the door" | NOTE |
| 2.d P1 (ref) | muddy / fluffy | acceptable |
| 2.d C06 | sunny / wintry | acceptable now that H2 asks "what do the swirling flakes look like?" |
| 2.d C13 slot 1 | runny / dusty | acceptable |

No hint states or quotes a key. Hint 1 is strategy in every item I read. The new or edited ladders I looked at hardest: 2.a C06/S06 (H3 rules out the run-on line only), C09/S09 (H3 rules out `quickly` only), C12/S12 (H3 rules out one choice), 2.b C11 (H3 is now neutral: "Check each reason against the time clue"), 2.b C05/C15/S15 (H1/H2 now neutral), 2.c C11/S11 (neutral), 2.d C06, C14, S14 (H1 now strategy only). All good, with the exceptions in the tables below.

## T7. Findings by lesson

Legend: MUST = fix before acceptance. SHOULD = fix unless the author gives a reason. NOTE = information only.

### 3.L.GC.2.a: simple, compound, complex

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| 2.a-1 | SHOULD | C06 (and S06) vs form A T6 | C06: "One sentence in Amari's draft is a fragment. Select that sentence." Key: "(5) When my box was almost full." T6 (form A): "One sentence in Jordan's draft is a fragment. Select that sentence." Key: "(5) When we reached the top." Same frame, same format, same kind of key (a "When ..." clause); only the draft and the context differ. S06 then uses "When the tracks were done." as a third copy. Core, similar and test therefore rehearse one exact item. Jaccard is low (the passages differ) so the script does not flag it, but it fails the "differ in at least two of four" test only barely (text and domain). | Make C06 a different fragment type, e.g. a verbless fragment ("Under the porch, near the box."), or ask "Which sentence leaves the reader waiting?" and change its start word. Keep S06 distinct from both. |
| 2.a-2 | SHOULD | S10 H3 | "Both halves of line 3 have a who and a does-what. Check the other choices against that." Line 3 is "Uncle Ray measured every track, and I held the screws." This tells the solver that line 3's two halves both stand alone, which is the first half of the key text, and it removes the choices that say otherwise. Two choices are live: the key and "Lines 3 and 7: both halves can stand alone". | Replace with a neutral scaffold, e.g. "Line 7 starts with Before. Ask whether the words before the comma could be a sentence alone." That leaves three live. |
| 2.a-3 | NOTE | C09, S09 | The prompt says "has no who" and one option (`he`, `she`) is a pronoun. A child can answer by spotting the pronoun without reading the draft. DOK 2 is a little generous. | Optional: add a distractor that looks like a who but cannot work. |
| 2.a-4 | NOTE | C14 H3 | "Telling two things does not make a sentence compound" removes the "Both are right" choice and contradicts Kofi's stated reason, so Zuri and "Neither" are what is left in effect. Still two live in the strict count. | None; or say "Check each reason against the number of whole thoughts." |
| 2.a-5 | NOTE | Fragment weight | About eight of the fifteen (P7, P8, C05, C06, C07, C09, C12, C13) are fragment or run-on tasks; seven (P9, C04, C08, C10, C11, C14, C15) distinguish simple, compound and complex. The official wording is "Distinguish between correctly structured simple, compound, and complex sentences", so the balance leans to repair. Defensible under "correctly structured", but the next author of a 2.a revision should rebalance. | None now. |
| 2.a-6 | NOTE | Set 2 giveaway | C07 (stem says sentence 8 is a run-on) removes sentence 8 as a candidate for C06 on the same draft. | None. |
| 2.a-7 | NOTE | P7 vs P9 | 0.54 / 0.50, shared passage targets only (carried). | None. |
| 2.a-8 | NOTE | Watch Me | Still no worked example that joins a fragment to the sentence beside it beyond example 1's fix line (C12, P8 and S12 ask for it). | Optional one-line addition. |

Cold re-solve of the focus items: **C12/S12** unique (join or give it its own who and does-what; both fix; "and with", "because with", "then beside" and the unchanged fragment do not). **C09/S09** unique. **C06/S06** unique. The converted hot-text and dropdown items are clean and the format cap is met. **Verdict 2.a: ACCEPT** (2 SHOULD, 6 NOTE).

### 3.L.GC.2.b: variety and tense

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| 2.b-1 | **MUST** | C06 Part B key, `how`, `why` | The key reads "Last weekend in sentence 1 tells you the whole story is in the past." That is false for this draft: sentences 10 to 12 ("Now I have twelve rocks ...", "I keep them ...", "My little sister likes ...") are in the present, and the next item, C08, says the move to the present at sentence 10 is **correct** and marks "Last weekend ... tells you every verb must be in the past" as **wrong**. A child who picks the Part B key here and then reads C08 meets a direct contradiction. The `why` adds "The sentences before and after the egg carton use gave, helped and put", which is also untrue (the sentences after are present). The shortened wording from the last round introduced "whole story". | Key: "Last weekend in sentence 1 tells you the story starts in the past." (Part B distractor A already says "every sentence before it", fine.) `how` step 4 and `why` the same; `why`: "The sentences before and after sentence 9 in the egg carton part use gave, helped and put" becomes "The sentences around sentence 9 in the egg carton part use gave, helped and put, so shows does not fit." Check S06 Part B ("puts the story in the past") for the same drift: it does not say "whole", so it is fine. |
| 2.b-2 | SHOULD | S05 H2 | "Say what each sentence tells. Is Kia doing both jobs, or picking one of them?" That names the key relation (a choice). A reader with H1 and H2 but no choices can write "or". H1 for the same item is neutral. C05's H2 (the same relation) was already made neutral last round. | "Say what each sentence tells. Then ask how the second idea goes with the first." |
| 2.b-3 | SHOULD | Learn It / Watch Me | `or` is the key or a column word in C05, C13 row 2, S05, S12 and C12's distractor, but neither the teach points nor the three Watch Me examples model a choice relation. Watch Me example 2 offers "and, but or so" and the steps list "add on, get in the way, or happen because of". The author declined this in the second review. With four of the thirty items resting on `or` as the answer, the plan's rule that Learn It models what the fifteen require is not met. | Add to example 2's steps or the teach text: "Or joins two choices: We can walk, or we can ride." |
| 2.b-4 | NOTE | P2 | I chose `but` for "The tunnel was dark. It felt a little scary."; key `so`. Pre-existing; `so` is better. | None; if edited, use a pair with a clearer cause (a dark tunnel and "so I held Dad's hand"). |
| 2.b-5 | NOTE | C09 / P1 / T1 / TB1 / S09 | One task (find the single odd-tense sentence) in four forms, carried from the second review. | None. |
| 2.b-6 | NOTE | C13 H3 | "Leah wanted to swim, and then the pool turned out to be closed" settles row 1 by narrating it. Three rows remain; acceptable under the "settled row at most one" rule. | None. |
| 2.b-7 | NOTE | S13 | Fixed. Unique with "use each word one time". `like` C13 shares only `but` (honest enough). | None. |
| 2.b-8 | NOTE | C06 Part B A | Distractor A ("Now in sentence 10 tells you that every sentence before it is in the present") is explained by C08, as the earlier reviewers noted. | None. |

Cold re-solve: **S13** unique across all four rows once the prompt says each word is used once; **S05** unique (`or`; `so`, `but`, `because` each change the meaning); **TB5** unique (rises / come). **Verdict 2.b: CHANGES REQUIRED** (2.b-1 only; it is a small text edit).

### 3.L.GC.2.c: subject-verb agreement

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| 2.c-1 | SHOULD | C09 H3, S09 H3 | "The cake is one thing, even though sprinkles is more than one." and "even though crayons is more than one." This is the style the last round removed from C11, C14, C06 and S11: a plural word shown with `is` in a lesson that teaches `is` vs `are`. | "even though sprinkles names more than one thing." |
| 2.c-2 | NOTE | C10 H3, S10 H3 | "Maya is one person. Look at the first verb in each choice..." leaves two live (the key and the wrong second verb). | None. |
| 2.c-3 | NOTE | S02 H3 | "The lamp sentences both have a problem." leaves two live. | None. |
| 2.c-4 | NOTE | S06, `like` C06 | `like` type differs (mc vs hot text); same skill. | None. |
| 2.c-5 | NOTE | C09 vs P3 | 0.39 / 0.37, same frame (has/have vs runs/run), different words (carried). | None. |

Cold re-solve of **C11/S11** (new reason wording): unique (the tickets / the keys are what the sentence is about; the nearest word and "table names many things" fail). The old S09 misconception is fixed. Key and word-match cues are clean. **Verdict 2.c: ACCEPT** (1 SHOULD, 4 NOTE).

### 3.L.GC.2.d: adjectives and adverbs

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| 2.d-1 | SHOULD | C14 Part A and Part B | The key "pale and smooth, with a soft swirl" is the only Part A choice that reuses a passage word (sentence 3: "very pale"), and the Part B key is the only one that names the passage ("the very pale yellow that Keisha mixed"). A solver can match words instead of reading. Part B now has a plausible rival ("more describing words ... more is always better"). The author declined to add a Part A rival that reuses passage words. | Add one Part A rival that reuses a passage word but is wrong, e.g. "The frosting looked bright yellow and bumpy, with a gray swirl." ("very pale" contradicts "bright"). |
| 2.d-2 | NOTE | S02 `LATE` | Adverb per Merriam-Webster; a child may hesitate (also an adjective in "the late train"). Kept by the author. | None. |
| 2.d-3 | NOTE | C07 | Unique after the p2 repair. Key echoes the passage word "shook". | None. |
| 2.d-4 | NOTE | C12 | One answer; the three distractors are obvious. Easy at DOK 2. | None. |
| 2.d-5 | NOTE | C10, S10 | Test adverbs of time and place, which the teach text covers, but Watch Me models adverbs of manner only. | Optional. |
| 2.d-6 | NOTE | P5 (Together) vs C08 | Same "replace a plain word with an exact one" logic; low Jaccard, different text and format. | None. |

Cold re-solve of **C07** with the repaired p2: unique (`shakily`). C08, C12, C13 and the cake-decorating C14 are clean. Cake vocabulary no longer uses "piped". **Verdict 2.d: ACCEPT** (1 SHOULD, 5 NOTE).

## T8. Cross-lesson notes

- **Regression check.** The only regression I found from the last round is the new 2.b C06 Part B wording (2.b-1). Every other changed item (2.a C06/C09/C12/S06/S09/S12/C14/S14/C15/S15, 2.b C05/C11/C15/S05/S13/S15, 2.c C06/C11/C14/S07/S09/S11, 2.d p2/p3/C06/C14/S14) read correctly in the blind solve and in the hint audit.
- **`why` and `how` claims about the passage.** The 2.b C06 slip was a claim about a whole passage ("whole story", "before and after") that the key sentence over-reached. When fixing it, grep the other `why`/`how` texts of tense items for "whole", "every" and "always" and check them against the passage's later sentences.
- **Hint 3 that states half of a two-part key** (2.a S10) is the same family as the B0 fault, at lower severity (two choices are live). Worth a one-line check in the next batch's ladder audit.
- **Format cap and mirrored bank.** Met. The similar bank mirrors the core formats exactly in 2.a and 2.b; 2.c and 2.d differ by one type in one pair (NOTE).

## T9. Verdicts

| Lesson | Verdict | MUSTs | SHOULDs | NOTEs | Blind solve |
|---|---|---|---|---|---|
| 3.L.GC.2.a | **ACCEPT** | 0 | 2 (2.a-1 C06/T6 frame, 2.a-2 S10 H3) | 6 | 40 of 40 (T2 format slip aside) |
| 3.L.GC.2.b | **CHANGES REQUIRED** | 1 (2.b-1 C06 Part B key and `why` contradict C08 and the draft) | 2 (S05 H2, `or` in Learn It) | 5 | 42 of 43 (P2) |
| 3.L.GC.2.c | **ACCEPT** | 0 | 1 (C09/S09 H3 wording) | 4 | 38 of 39 (S10 was my own slip) |
| 3.L.GC.2.d | **ACCEPT** | 0 | 1 (C14 key word-match) | 5 | 38 of 38 |

All second-review MUSTs are fixed (2.a mc cap, 2.b S05 and S13, 2.c S09, 2.d p2 numbering and C07). The format conversions in 2.a are clean and unambiguous. One new MUST turned up in 2.b: the C06 Part B key says the "whole story" is in the past, which the draft and C08 contradict. It is a two-line text edit (key, `how` step 4 and `why`). After that edit, 2.b needs only a re-check of C06 Part B, `how` and `why`, and S06 for drift.

---

## Fourth review (light)

Reviewer: independent (not the author). Scope: 2.b C06 (Part B key rewrite), S06, S05 (hint 2), Learn It teach point 1 (`or`), the whole 2.b C05-C09 set; text-only hint edits in 2.a S10 (hint 3) and 2.c C09/S09 (hint 3).

**Method.** Node vm sandbox, new seed (424242 + lesson offset, LCG), 10 items (2.a S10; 2.b C05-C09, S05, S06; 2.c C09, S09). Choices, slots and rows were shuffled and printed with passages only; keys, `why`, hints, `how`, `clue` and `misconception` were stripped. I saved my answers (`b5r7/ans.json`) before I compared them with the keys. I did not open the raw item source before solving. I did not open the author log before the solve. After the solve was saved, one `grep` for the teach sentence also printed one line of the author log (it only repeats the teach edit). The solve was fully blind.

**Blind key agreement: 10 of 10** (all choice letters, both EBSR parts, the choose-two pair, the hot text, both matches).

| Item | Blind | Key true next to the reasoning | Live after H1 / H2 / H3 | Hint states key? |
|---|---|---|---|---|
| 2.a S10 | D = key | Yes (line 3 compound, line 7 complex) | 4 / 4 / 4 (H3 names Before and asks a question, no choice removed) | No |
| 2.b C05 | C = key | Yes | 4 / 4 / 3 (H3 removes `so`) | No |
| 2.b C06 A | C = key | Yes (`shows` against gave/helped/put) | 4 / 4 / 3 | No |
| 2.b C06 B | C = key | Yes, and it now agrees with C08 (see below) | 4 / 4 / 4 (H3 speaks to Part A only) | No |
| 2.b C07 | D+E = key | Yes (After keeps the order; Before reverses it; `hike` is present; the third is a run-on) | 5 / 5 / 4 | No |
| 2.b C08 | D = key | Yes | 4 / 4 / 3 (H3 removes the new-paragraph choice) | No |
| 2.b C09 | [4] = key | Yes (sentence 8 `sketched`) | 5 / 5 / 4 (H3 clears sentence 7) | No |
| 2.b S05 | C = key | Yes | 4 / 4 / 3 | No |
| 2.b S06 A and B | D / C = key | Yes | A: 4 / 4 / 3; B: 4 / 4 / 4 | No |
| 2.c C09 | A,B,A,A,B = key | Yes | 5 rows x 2 / same / 4 rows open | No (see 2.c-1) |
| 2.c S09 | A,B,A,B,A = key | Yes | same | No (see 2.c-1) |

A scripted check found no hint that contains a full key, a key row, or a key sentence. No hint states the key or leaves only the key. Points, DOK and `std` are right for all ten (choose-two and both EBSRs and both matches = 2; the others = 1).

**Key beside C08's reasoning.** The new C06 Part B key says only that `Last weekend` places the events in the past. C08's key says `Now` marks the move to the present at sentence 10. These do not conflict, and C08's distractor B ("Last weekend ... every verb must be in the past") is now the over-claim that C06 no longer makes. HOW4 and the `why` of C06 match C08. The earlier MUST (2.b-1) is fixed. The other three Part B choices are plausible and each is wrong for a stated reason (`Now` does not make every earlier sentence present; `Keep` is not a time word and "whole story" is false; `Every day` describes sentence 12, not the story).

**Similar vs core (Jaccard, item text plus passage).** S10 vs C10 0.14 (best match in lesson 0.16, C08). S05 vs C05 0.17. S06 vs C06 0.19-0.20 (different passage, same skill and format). 2.c S09 vs C09 0.10 (best match 0.17, P2). All are well below the 0.4 level that would worry me. `like` mappings are honest.

**Learn It teach point 1.** The example "We can read a book, or we can play a game." appears nowhere else in js/data, and it contains no item answer. It does share the frame "We can X, or we can Y" with C05 and S05, which is fair for a model (Jaccard about 0.3 with C05) and gives no answer, since C05 needs the learner to judge why `or` fits. Neither Learn It (Watch Me) card models `or`; only the teach sentence does. It is covered, but thinly (2.b-4).

### Findings

| # | Sev | Item | Evidence | Fix |
|---|---|---|---|---|
| 2.b-1 | SHOULD | C05, S05 vs a sibling lesson | `3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra` test SK-GUM3-4-T1 (L-GUM3.js ~line 671) is "Should we walk to the park, {0} should we ride our bikes?" with key `or`. C05 uses the same two actions and the same key. A child who has met one has met the other (same scenario, same word). Not a word-for-word duplicate and a different format. | Change C05's two actions (for example "We can paint a picture. We can build a fort.") and update the C05 `how`/`why`/`hints` text to match, or change the GUM3 test. S05 (Kia) is unique in js/data. |
| 2.b-2 | SHOULD | C08 HOW1 (and prompt) | "Sentences 1 to 9 tell what happened last weekend, in the past tense." Sentence 9 ("Grandpa shows me ...") is the very error C06 asks about, and it is present tense. The prompt also says sentence 10 differs "from the sentences before it". A careful child who just found 9 in C06 sees 1 to 9 contradicted. The key is still right. | HOW1: "Sentences 1 to 8 tell what happened last weekend, in the past tense." Optional prompt: "from the sentences before sentence 9." |
| 2.b-3 | SHOULD | Learn It teach point 1 | "... so shows a result, and or gives a choice" puts the words `and` and `or` side by side. It reads like "and/or" and is hard for a third grader to parse in a sentence that is itself full of the same joining words. | Put each joining word in quotes or set them apart: "'And' adds on. 'But' goes against what you expect. 'So' shows a result. 'Or' gives a choice." |
| 2.b-4 | NOTE | Watch Me | No Watch Me card models `or`, though C05 and S05 need it. | Optional: add a short fourth card, or accept the teach example. |
| 2.b-5 | NOTE | C06 HOW2/WHY | `put` is the same in past and present. It is used as a past-tense clue next to gave and helped. A child could call it present. Sentences 6 to 8 still settle the time. | None required. |
| 2.b-6 | NOTE | C06 Part B H3 | The new H3 scaffolds Part A only. | None. |
| 2.b-7 | NOTE | S06 prompt | Says "line 6" where C06 says "sentence". Same numbering, small mismatch. | None. |
| 2.c-1 | NOTE | C09/S09 H3 | The new wording is correct ("names more than one thing" no longer sets a plural word beside `is`). It still gives away one of the five rows (the cake/box row is `has`/`was`, given H1). Acceptable as a worked row. | None. |
| 2.c-2 | NOTE | C09/S09 `why` | A capital `The` mid-sentence ("... and The cars in the lot ...", "My uncle and The cake ..."). | Lower-case it. |
| 2.a-1 | NOTE | S10 H3 | The old half-key problem is gone. H3 names `Before` and asks a question; it removes no choice. | None. |

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 3.L.GC.2.a (S10 H3) | **ACCEPT** | 0 | 0 | 1 |
| 3.L.GC.2.b (C05-C09, S05, S06, Learn It) | **ACCEPT** (fix the three SHOULDs when convenient; none change a key or a hint) | 0 | 3 (2.b-1 C05 scenario also in GUM3 test, 2.b-2 C08 HOW1, 2.b-3 "and or") | 4 |
| 3.L.GC.2.c (C09/S09 H3) | **ACCEPT** | 0 | 0 | 2 |

**Fourth review (light): ACCEPT.** The 2.b MUST from the third review is fixed. No MUSTs. Blind solve 10 of 10, fully blind. No lesson edits and no git were made. No servers were started, so there are none to kill. Working files are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/b5r7/`.

# B4 independent review: 3.T.SS.1.d and 3.T.SS.2.b

Reviewer: independent (did not author). Source: `js/data/lessons/T-SS.js`. Read-only; no lesson edits, no git.
Scripts and outputs (scratchpad, `b4r/`): `blind.js`, `stripped.json`, `myanswers.saved.json`, `keys.js`, `sim2.js`, `ui.py`.

## Verdicts

| Lesson | Verdict |
|---|---|
| 3.T.SS.1.d Paragraphs that stay on one idea | **CHANGES REQUIRED** (4 MUST) |
| 3.T.SS.2.b Use figurative language in your writing | **CHANGES REQUIRED** (4 MUST) |

No key is wrong. The MUSTs are one ambiguous order key, hints that describe the key, a word-match key, a pre-answer in Learn It, near-copy similar items over the ceiling, and a cross-lesson topic duplicate.

## 1. Method and key agreement

- **Blind solve: fully blind for these two lessons.** I loaded `T-SS.js` in a Node `vm` sandbox with a mock `PP.addLesson`. A recursive stripper removed `correct`, `answer`, `answers`, `hints`, `how`, `why`, `clue`, `misconception`, `like` and `std`, including nested fields. It seeded-shuffled choices, options, order steps, match rows and slot options, and resolved every `{ref}`. I grepped the stripped JSON for `correct|answer|hint|why|key|because` and found no key text. The only hits were "Why Music Class Matters", a prompt "Why is that a good choice?", and distractor text "because ...". I wrote my answers to `myanswers.saved.json` before I printed any key. I never opened raw item source, and I read the author log only after that.
- **Agreement with the author keys: 70 of 70.**

| Lesson | Core | Similar | Together |
|---|---|---|---|
| 1.d | 15/15 | 15/15 | 5/5 |
| 2.b | 15/15 | 15/15 | 5/5 |

- **Items I answered with doubt but still matched:** 1.d S05 (Next and Then are interchangeable), 1.d P4, and 2.b C13.
- **Items I solved partly from the stem or prompt rather than the passage:** 1.d C12 and 2.b C12.
- Together items for 2.b P4 and P5 are the same items as core C01 and C06 (refs), as designed.

## 2. Keyed text beside why, how, hints and misconception (every core, similar and addon item)

I read all 150 ladders against the keyed text. **There are no wrong keys and no key/explanation mismatches.** I checked these specifically:

- 1.d C06 and C11 target indexes (p4:2:4 is sentence 6, p5:2:3 and p5:2:5 are sentences 5 and 7).
- 1.d S02 target p6:1:5 is sentence 5.
- 2.b C04 p3:2:3 is sentence 6.
- Every hottext `answer` index matches its option text.
- Dropdown and match answer indexes match the `how` text.
- 1.d C10 H3 says the repeated detail is "from the middle", while HOW4 says "repeats the beginning". This is a small mismatch (NOTE 6).

## 3. Findings

### MUST

**1.d M1. S05 has two valid orders.** The key is topic, First (cat), Next (song), Then (scooter), At the store.
- The events are arbitrary, so "Then ... scooter" before "Next ... song" is equally logical.
- In C05 the order is forced by cause ("Then Max shook" follows scrubbing). S05 has no such force, and the engine scores the exact order.
- Hint 2 names First, Next, Then, so the child is taught the order, but the item is still not single-key.
- Fix: make the events sequential by content (for example "First, a cat ran across the sidewalk. Next, it jumped onto the wall. Then it sat in the sun") or number the surprises.

**1.d M2. S06 hint 2 describes the key.** H2 says: "Three of the sentences show it. One is about a different place."
- The art-room sentence is the only sentence about a different place, so the hint states the key's defining feature (ladder rule: never describe the key in other words, plan §4.5).
- The item is also very easy.
- Fix: H2 should say "check each sentence against the topic sentence". H3 may rule out one gym sentence.

**1.d M3. Near-copy similar items over the ceiling** (see §5). Worst:
- **S14** has J 0.42 against C14 and shares two of four options with it ("A paragraph can have no more than three sentences." and "Sentences 4 and 5 are longer than the sentences before them."). Hints H3, HOW4 and the why are nearly identical.
- **S15** has J 0.35. It has the same structure (off-topic sentence 5, new idea at sentence 4, same distractor templates and hint 3).
- **S02** has J 0.29, **S05** 0.27 and **S10** 0.23, all with the same frames.
- A child who has just done the core item can answer from the pattern. Fix: change the prompt frame, the distractor wording and the geometry (move the off-topic sentence, change which sentence numbers carry the keys).

**1.d M4. Topic and key-fact duplicate with `T-T2.js` 3.T.T.2.b (hummingbirds). Confirmed.** The author asked me to judge severity: I rate it MUST.
- "Tiny Flyers" (T-T2.js ~2304-2307) and 1.d p1 share these facts:
  - ruby-throated hummingbirds in Georgia in spring and summer;
  - tiny size;
  - hover, and fly backward;
  - sweet nectar and tiny insects;
  - "eat many times (each/every) day".
- "The Long Trip South" and 1.d P3 distractors both have sugar-water feeders.
- T-T2's sentence "The fast wings make a humming sound" is essentially the key of 1.d **P3** ("Their wings beat so fast that they make a humming sound.").
- 1.d C01, P1, P2 and P3 therefore restate T-T2 sentences. A child who has done 3.T.T.2.b already knows the facts.
- `T-C.js` ~2043 adds a third hummingbird slide ("Hummingbirds Hover").
- Fix: move 1.d p1 (and C01, P1 to P3) to a topic that appears nowhere else. I grepped js/data for the other 1.d and 2.b topics (see NOTE 9).
- Alternative: keep p1 and change the T-T2 passages. The 1.d draft is the older text, but T-T2 is accepted and larger, so changing p1 is cheaper.

**2.b M1. C14: Learn It pre-answers the item.** The teach example is "The hallway was as quiet as a sleeping cat." C14's second blank reads "the room is as {quiet} as a sleeping cat".
- The key ("quiet") and its frame are the Learn It sentence word for word. The author log says the example was changed to "sleeping cat" deliberately.
- S14 has the same shape ("as quiet as an empty cave").
- Fix: change the teach example or the C14 frame. A library is not usable, because 2.a teaches that two places are the same kind of thing; use a different vehicle in one of them, such as "as still as a photograph".

**2.b M2. C12: word-match key, and hint 2 describes the key.** The prompt says "connects to her memories", and only the key contains "memory": "a scrapbook ... with a memory in every patch".
- The distractors (a tree with birds, a snowy field with flowers, a big square of cloth) do not even attempt a relationship, so the discriminating work is a word match.
- H2, "Ask which comparison links the quilt to remembering, not just to how it looks", restates the key.
- Fix: put a memory-flavoured wrong choice among the options and remove "memories" from the prompt (for example "shows what the quilt means to her"). Examples of wrong choices: a drawer of old photos kept closed, or a heavy locked trunk.
- The snowy-field answer is not defensible. It is the only distractor that echoes the passage's yellow and blue colours, so keep it as a decoy.

**2.b M3. Near-copy similar items over the ceiling** (see §5). Worst:
- **S14** has J 0.40 and shares two options with C14 ("a sleeping bear" and "quiet").
- **S01** has J 0.38 against P4. It has the same rows, three on idioms and similes, in the same order, with H3, how and why nearly identical.
- **S09** 0.33, **S15** 0.32, **S10** 0.25, **S06** 0.25 (shares "after sentence 1"), **S02** 0.24 and **S07** 0.22 are over the ceiling too.
- Fix as for 1.d M3.

**2.b M4. Cross-lesson duplicates of accepted 3.T.SS.2.a content.**
- The P4/C01 idiom row "It was raining cats and dogs" is the 2.a teach-point example and was cited by the author as avoided. In fact it is the key row in 2.b P4/C01.
- S01's idiom "We are in the same boat" is a keyed idiom in 2.a (T-SS.js ~5784-5805).
- Fix: swap both rows for idioms that appear nowhere in js/data. I checked with grep: "pull your leg", "hit the hay" and "under the radar" were not found.
- Severity is MUST for the P4/C01 row because it is a key and the 2.a teach example; S01 could be SHOULD alone.

### SHOULD

1. **1.d C13 and S13, hint 3 echoes the key.** H3 gives one of the three matches. "The group about a pool and a bright evening is about a season" nearly says "Summer ...", and S13's "a time of the week" echoes "Saturday mornings".
   - The plan allows completing one of two slots, but this one gives a third of a two-point item and uses key wording.
   - Fix: "Start with the group you are most sure of" and keep the elimination.
2. **1.d P4 (Together): the "Does not belong" row is not clearly single.** The topic is "busy place".
   - "Farmers sell peaches, beans and fresh eggs" does not show busyness any more than "Farmers get up very early" does. A careful child can defend either as the intruder.
   - H3 ("one sentence is about farmers but not about the market") rules out both, since both are about farmers.
   - Fix: make the detail show activity ("Farmers call out prices as lines form") or make the intruder plainly off topic ("The school bus comes at 7:30"). Worry item answered: the farmer sentence is not clearly off-topic.
3. **2.b C13, B ("The wind marched across the room to my bed") is also personification.** It fails only on setting ("outside her window"), and "marched" suggests storm force.
   - The key is defensible, but the single fit criterion is a location detail in the prompt stem. S13 is cleaner because "jogged down the street" is absurd.
   - Fix: change B to a person-action that clearly misses cold or stormy ("The wind giggled and skipped around the yard"), or add "outside" to B's wording.
4. **2.b C05 and S05 word echo.** C05's prompt says "many bursts opening all at once" and the key says "blooming all at once". The two opposite distractors (a candle, a slow snowfall) are trivial. S05's key repeats "kids" and "toward the doors" from the stem. Reword the prompt so it does not repeat key words.
5. **Points on choose-two hottext items.** 1.d C11 and S11, and 2.b C15 and S15, are `hottext` pick 2 with `points: 1`. Every other choose-two item (ms, order, match) is 2 points, and the engine awards 1 point per correct answer on a 2-point item (SPEC §8). Make these 2-point items or confirm the intent. The 2.b C15 and S15 core ladders would then also earn partial credit.
6. **1.d S06, S01, S09, S12 hint 3 settles things by elimination.** Within the rule ("rule out one distractor"), but S06 and S09 leave one wrong option and the key.
7. **Hint 2 leaks in 1.d C12.** "Ask which sentence shows kids working together" is the prompt's restatement. Acceptable, but S12's H2 does the same thing with the shelves; confirm they do not name the key.
8. **Watch Me coverage.**
   - **1.d:** the three examples model intruder, topic sentence and new paragraph. The core items also ask for closing sentences (C01, C10, S01, S10), paragraph order (C05, S05), choosing details (C04, C09, C12), topic-to-group matching (C13) and revision choices (C08, C15). Those are only in the teach box. Add a closing-sentence or ordering example.
   - **2.b:** the examples model metaphor, idiom and personification, but not "does this simile fit what the writer means" (C14, C15), placement (C06), or the relationship comparison (C12).
9. **Official wording (js/data/standards.js `official`).**
   - **1.d** "Craft related sentences into clear and cohesive paragraphs": related sentences (intruders, details), clear (topic sentence, closing) and cohesive (only C05/S05 use the First, Next, Then clue words) are covered. "Craft" is covered only by selecting and revising, plus the write box. Coverage is acceptable.
   - **2.b** "Use figurative language ... to show relationships between ideas and information": similes, metaphors and idioms are covered. "Relationships" is carried by C12 and S12 alone, with C05, C08, C11 and C14 partly. "Information" is not covered, since every passage is narrative. Consider one informational stem.

### NOTE

1. **Worry item 1.d C15:** I confirmed the two keys are the only fixing pair. Removing sentence 5 and starting a new paragraph at sentence 4 are the two problems. B (new paragraph at 6) leaves the mixed paragraph, D (take out 3) removes a valid summer detail, and E (new paragraph at 3) splits summer. Sentence 5 is off-topic in both resulting paragraphs, so the order of the two fixes does not matter.
2. **Worry items 1.d C02 and C08:** sentence 6 is the only defensible start (sentence 5 still ends the morning). C08's key is the only choice that keeps each paragraph on one idea. A student could argue for option C (after sentence 2, "the program"), but the facts are about home, not the school program.
3. **Worry item 2.b C09:** consistent with the accepted 2.a edge cases ("My bike is as big as yours" is not a simile). "An arrow shot straight up the tower" reads as a metaphor with no like or as. "As fast as the one at my school" is not a simile under 2.a's definition.
4. **Worry item 2.b C15:** the two keys are the only two comparisons that clash with "tiny and sleepy" (a roaring lion is big and loud; a race car is fast). "Ball of fluff asleep" shows sleepy but not tiny, and is still a fit. Single defensible key.
5. **Hint 3 settles a blank in 2.b C08, C14, S08 and S14** (blank 1 left with one option). The plan explicitly allows "complete one of two slots", so it is within rule. It is the author's own caution, repeated here for the lead.
6. 1.d C10 and S10 H3 say the repeated detail is "from the middle". The repeat is sentence 2 (the beginning); HOW4 says "the beginning". Reword.
7. 2.b P4/C01 and S01 H3 identify the metaphor row, and with H2 (similes first) only the idiom is left. Together they solve the item by elimination, but H3 alone does not, so it passes the §4.5 audit.
8. 1.d C09 option "Mail carriers walk many miles to deliver letters." is argued off-topic because carriers work outside. Defensible but thin.
9. **Topic grep (all of js/data):** recess and soccer practice do not appear in these two lessons (1.c has "Why I Love Soccer Practice", not mine). Other overlaps:
   - farmers market with peaches, 1.d P4 vs L-GC2 p2 "Saturday at the Market" (peach stand, honey);
   - 2.a "The lake was a mirror" vs 2.b "The puddles were shiny mirrors" (same vehicle);
   - 1.d p2 "Field Day" (form B only) vs T-T1 and T-C Field Day text.
   - None of these is a key-fact duplicate except as in MUST 1.d M4 and 2.b M4.
10. **Pre-answers across items:** none found beyond MUST 2.b M1. C08's options name the paragraph topics (sorting, turning old things into new things), but C06/C07 come first. 2.b S03's H3 and HOW teach "out of the blue = suddenly", which is S10's key (SHOULD-level, so I list it here; swap S03's distractor).
11. **Facts.** Verified with WebFetch:
    - Georgia ruby-throated hummingbirds peak in summer and begin fall migration, and feed heavily on nectar: https://gadnrle.org/out-my-backdoor-hummingbirds-should-return (it does not mention hovering, flying backward or insects).
    - The ruby-throated hummingbird hovers and flies forward and backward with a humming sound, drinks nectar, eats insects, and builds a nest of spider webbing, lichen and plant down: https://mdc.mo.gov/discover-nature/field-guide/ruby-throated-hummingbird
    - "Once in a blue moon" means very rarely: https://grammarist.com/idiom/once-in-a-blue-moon/
    - **Not fetched** (allow-list blocked Audubon and Merriam-Webster): "females build the nest alone and lay two eggs" (1.d C01 and P3 distractors), "guinea pigs came from South America", and the meanings of the other idioms (spill the beans, bite off more than you can chew, head over heels, on cloud nine, under the weather, in hot water, all ears, out of the blue, by the book, cost an arm and a leg, on thin ice, head in the clouds, hit the road, cut corners, same boat). These are standard dictionary senses and I found no error, but they are from knowledge. Recycling facts (paper, cans and glass made into new ones) are standard.
12. **Readability:** `verification/readability.py` gives passage FK of 4.1 and 4.2 for 1.d p1 and p4 (highest), and 1.4 to 3.2 for the rest. All are at or below 4.5. Item-level FK on short prompts is noisy and not meaningful.
13. **Text vocabulary:** "griddle", "pearl", "pavement" and "finale" are fine for grade 3 in context; nothing is kindergarten-like.
14. **DOK, formats, points:** DOK 3 items are three in 1.d (C08, C14, C15) and two in 2.b (C12, C15), meeting the minimum. No DOK 1 items. `mc` count is six in each lesson (the maximum). Points are otherwise right (ms, order and match are 2 points).
15. A one-off page error ("Unexpected token '{'") appeared once during my first 2.b browser run and did not recur in three more runs. This is probably a transient from concurrent edits by other agents. Mentioned for completeness.

## 4. Live-choice recount (hint 1 + hint 2 + hint 3 + clue)

The count is the choices still standing after hint 3. Author counts were estimates; I agree with the author on every item except where noted.

**1.d**

| Item | Live | Item | Live |
|---|---|---|---|
| C01 | 3 of 4 | C09 | 2 of 3 |
| C02 | 5 of 8 | C10 | 3 of 4 |
| C03 | 3 of 4 | C11 | 5 of 6 (pick 2) |
| C04 | 4 of 5 (pick 2) | C12 | 3 of 4 |
| C05 | order: step 1 given by H3 | C13 | one row given; 2 rows, 3 topic sentences |
| C06 | 4 of 5 | C14 | 3 of 4 |
| C07 | 3 of 4 | C15 | 4 of 5 (pick 2) |
| C08 | 3 of 4 | | |

**2.b**

| Item | Live | Item | Live |
|---|---|---|---|
| C01/P4 | H3 gives the metaphor row; idiom left by elimination | C09 | 4 of 5 |
| C02 | 3 of 4 | C10 | one situation named; two to match |
| C03 | 2 of 3 | C11 | 3 of 4 |
| C04 | 3 of 4 | C12 | 3 of 4 (but H2 describes the key, MUST) |
| C05 | 3 of 4 | C13 | 3 of 4 |
| C06/P5 | 3 of 4 | C14 | blank 1: 1 of 3; blank 2: 3 of 3 |
| C07 | 4 of 5 (pick 2) | C15 | 4 of 5 (pick 2) |
| C08 | blank 1: 1 of 3; blank 2: 3 of 3 | | |

Hint 1 never narrows or points to a location. Hint 2 never names or quotes a key, except the two noted in MUST (1.d S06 and 2.b C12). Hint 3 never leaves a single option on a single-answer item. It leaves one option on the first blank of the 2.b C08, C14, S08 and S14 dropdowns (rule-compliant). I could not write down a key from H1 and H2 alone for any item.

## 5. Similarity (word-set Jaccard on whole item text incl. passage, punctuation stripped, `sim2.js`)

Ceiling 0.21 and at most one shared option (the brief). "Pair" is the `like` item. Figures in brackets are the same score without passage text.

| 1.d | J | Shared opts | 2.b | J | Shared opts |
|---|---|---|---|---|---|
| S01 | 0.14 | 0 | S01 (P4) | **0.38** | 0 |
| S02 | **0.29** (0.88) | 0 | S02 | **0.24** | 0 |
| S03 | 0.14 | 0 | S03 | 0.17 (0.34) | 0 |
| S04 | 0.19 | 0 | S04 | 0.14 | 0 |
| S05 | **0.27** | 0 | S05 | 0.20 (0.27) | 0 |
| S06 | 0.17 | 0 | S06 (P5) | **0.25** | 1 |
| S07 | 0.17 (0.24) | 0 | S07 | **0.22** | 0 |
| S08 | 0.20 (0.35) | 0 | S08 | 0.18 (0.27) | 0 |
| S09 | 0.15 | 0 | S09 | **0.33** | 0 |
| S10 | **0.23** | 0 | S10 | **0.25** | 0 |
| S11 | 0.16 (0.23) | 0 | S11 | 0.21 (0.31) | 0 |
| S12 | 0.09 | 0 | S12 | 0.17 (0.22) | 0 |
| S13 | 0.17 | 0 | S13 | **0.21** | 0 |
| S14 | **0.42** | **2** | S14 | **0.40** | **2** |
| S15 | **0.35** | 0 | S15 | **0.32** | 0 |

- **Priority (MUST):** 1.d S14 and S15; 2.b S01, S09, S14 and S15 (J above 0.30 or more than one shared option).
- **Marginal (0.21 to 0.30):** 1.d S02, S05 and S10; 2.b S02, S06, S07 and S10. They are over the ceiling, but I rate them SHOULD because the keys, passages or topics differ.
- Frames, stems and distractor templates repeat. Fix for all: change the prompt frame, the number geometry and at least two of the four option templates.
- Each similar item is otherwise a fresh application: new topic, new text, and a key that is not an echo of its core item's key.
- **Honest `like` mappings:** all 15 per lesson map to the correct core item. 2.b S01 and S06 map to P4 and P5, which are core refs.

## 6. Browser (Playwright, 390x844, touch, mobile)

I served the repo with `node verification/serve.js . 8731`. For each lesson I opened the Try step and ran all three sets (y, y2, y3), five positions each. At every core item I did this: checked the layout, answered wrong and pressed Check my answer, pressed Give me a hint three times, pressed Show me how, pressed Try a similar question, answered the similar item correctly, and pressed Check.

- 1.d: 15 of 15 core items and 15 of 15 similar items worked. No horizontal scroll at any step. No page errors. The only console message is the aborted font request (my route).
- 2.b: the same. Core C01 and C06 (refs) get their hints from the addons, so the three hint buttons worked.
- On mobile, passage items open on the "Read the passage" tab, and the Question tab then shows the controls. Both worked.
- The 1.d and 2.b Together sets (practice minus refs) were not run in the browser; only the core and similar paths were requested.

## 7. Other checks

- **Single defensible key:** all items pass except 1.d S05 (MUST) and, as a soft risk, 2.b C13 (SHOULD) and 1.d P4 (SHOULD).
- **Plausible distractors:** most do; weak ones are 2.b C05 (candle, snowfall), 2.b C12 (all non-relational) and 1.d S06 (art room).
- **Consistency with accepted 2.a:** the glossary now agrees. Simile and metaphor each compare two different kinds of things. The edge case "same kind" (C09, C07 "big trucks") matches 2.a's "as big as yours". Personification is new in 2.b, defined in the teach box and used in C04, C13 and S04, S13, and C09's distractor.
- **Teach and Learn accuracy:** no factual errors. "A piece of cake" and the sun-as-coin examples are fine.
- **No figures in these lessons**, so no alt text to check. First names only; Lena appears in 1.d C14 and in 2.b (author's own note).

---

# Second review (after the author's "Fixes after review (round 2)")

Reviewer: independent second reviewer (did not author, did not write the first review). Source: `js/data/lessons/T-SS.js`, lessons 3.T.SS.1.d and 3.T.SS.2.b. Read-only; no lesson edits, no git. Scripts and outputs are in the scratchpad `b4r7/`: `blind.js`, `blind.txt`, `maps.json`, `myans.js`, `cmp.js`, `dumpfull.js`, `full.txt`, `audit.js`, `cue.js`, `jac2.js`, `jac4.js`, `topics.js`, `topics2.js`, `ui.py`, `ui_tog2.py`.

## S2.0 Verdicts

| Lesson | Verdict | MUST | SHOULD |
|---|---|---|---|
| 3.T.SS.1.d Paragraphs that stay on one idea | **CHANGES REQUIRED** | 2 | 8 |
| 3.T.SS.2.b Use figurative language in your writing | **ACCEPT** (with SHOULDs) | 0 | 7 |

All eight first-review MUSTs are fixed (S2.4). The two remaining MUSTs are both in 1.d, both in text the author wrote in round 2:
1. The carousel swap removed the hummingbird collision, but 1.d p4 "Recycling at Our School" (C06, C07, C08) collides with the accepted pair in 3.T.T.2.c (cans melted into new cans, the school bin program). The first review did not catch it.
2. The new carousel Together items P1, P2, P3 and the unchanged P5 fail the hint-3 audit (they describe or narrow to the key). The engine does not show Together hints today, so the fault is latent, but it breaks plan §4.5 item 5.

## S2.1 Method and blind-solve result

- **Fully blind, with one disclosure.** I wrote `blind.js` (new). It loads `T-SS.js` in a Node `vm` sandbox with a mock `PP.addLesson`, resolves every `{ref}`, and prints only the passages, stems, prompts, and seeded-shuffled choices, options, order steps, match rows and slot options. Seed is a hash of the item id. Hottext targets are printed as the sentence text. The printer reads a whitelist of fields, so `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception`, `like` and `std` cannot reach the output. I grepped the output for `correct|answer|why|hint|how:|clue|misconception|like:`. The only hits were natural prompt words ("Why is that a good choice?", "Why Music Class Matters", "Fill both gaps..."). There are no figures in either lesson, so there is no alt text.
- **Disclosure.** The scratch folder `b4r7/` already held four files from another session (`answers.json`, `full.js`, `jac.js`, `keys.js`). I never opened them, and I overwrote only `ld.js`. Before solving, I opened older reviewers' generic harness scripts for other lessons (`b4r6/blind.js` and `load.js`) as a template. They hold no data for these lessons. I did not open the first review, the author log or any raw lesson source for these items until after `myans.js` was saved.
- **Items solved:** 68 distinct items: 1.d 5 Together, 15 core (all new), 15 similar. 2.b: Together P1 to P5 (P4 and P5 are the refs used in core), 13 own core items, 15 similar.
- **Agreement with the keys: 68 of 68 (100%).** The 1.d C09 mismatch my script first reported was my answer-format slip (I typed a letter for a dropdown); the option I chose is the key.
- **Doubtful answers that still matched:** 1.d C02 (sentence 2 or 6 could start a paragraph; 6 is far stronger), 1.d S02 (sentence 5, but 8 returns home), 2.b S06 (between sentences 1 and 2, but 2 and 3 can be argued), 2.b C13 (two personification choices; mood decides).

## S2.2 Per-item checks (all 68 items)

- **Key beside explanation (every item).** `audit.js` checked that every keyed choice, option, sentence and slot text appears verbatim in `why` and, for choice/hottext/dropdown items, in the last `how` step. There are no misses. The match items name the topic sentence and column by paraphrase; I read those by hand and they agree. I also read all 150 ladders by eye. The hottext target indexes agree with the `why` text (1.d C02 p3:1:6, C06 p4:2:4, C11 p5:2:3 and p5:2:5, S02 p6:1:5; 2.b C04 p3:2:3).
  - One `how` slip: **1.d S14 HOW step 1** says sentences 1 to 3 are about "choosing the spot, digging holes and covering the bulbs". The draft has no choosing of a spot (sentence 1 says the class planted tulips by the door). SHOULD: reword.
- **One defensible answer.** All pass. 1.d S05 is now forced (cloth, then plates on the cloth, then forks beside the plates). 1.d C15 is the only fixing pair. 2.b C15 and S15 keys are single pairs. 2.b C12's key is the only positive comparison.
- **Points and DOK.** Every pick-two and two-slot item is 2 points, match and order are 2 points, and C11/S11 and 2.b C15/S15 are now 2 points. DOK 3 core: 1.d C08, C14, C15 (three); 2.b C12, C15 (two). No DOK 1. `mc` is six in each lesson (at the cap). Formats: 1.d has six formats, 2.b has five.
- **Official wording** (`standards.js`): 1.d "Craft related sentences into clear and cohesive paragraphs" is covered. 2.b "Use figurative language, such as similes, metaphors, and idioms, to show relationships between ideas and information" is covered, except that no passage is informational (NOTE as before) and personification is a grade 4 term (SHOULD 2.b-3).
- **Form A/B leakage.** I compared every sentence of five or more words in the core, similar and Together items and passages with the five check items in each lesson. There are no shared facts or keys. Only the stem frames repeat (1.d T1 "Read the paragraph that begins with sentence 2. Select the sentence that does not belong..." matches C06/C11). There is no form B.
- **Grade-3 suitability.** Nothing is kindergarten-like. 1.d S03, S06 and S07 are easy but fine.

## S2.3 Live choices after hints 1 to 3 (hand count; items changed in round 2 re-counted)

I use the authored ladder (hints[0..2]) and the cumulative effect of H1 to H3. Hint 1 never narrows or locates anything in any core or similar item. Hint 2 never quotes a key. One correction to the author's table: **1.d C11 has six options, so after H3 five are live (not four of five).**

**1.d core**

| Item | Live after H3 | Item | Live after H3 |
|---|---|---|---|
| C01 | 3 of 4 | C09 | 2 of 3 |
| C02 | 5 of 8 | C10 | 3 of 4 |
| C03 | 3 of 4 | C11 | 5 of 6 (pick 2) |
| C04 | 4 of 5 (pick 2) | C12 | 3 of 4 |
| C05 | topic sentence placed first; four to order | C13 | leftover topic removed; 3 rows, 3 topic sentences |
| C06 | 4 of 5 | C14 | 3 of 4 |
| C07 | 3 of 4 | C15 | 4 of 5 (pick 2) |
| C08 | 3 of 4 | | |

1.d similar: S01 3 of 4, S02 5 of 8 (H3 asks for the first sentence that is not a chore, so sentences 2 to 4 are out), S03 3 of 4, S04 4 of 5 (pick 2), S05 cloth placed second, S06 3 of 4, S07 3 of 4, S08 3 of 4, S09 2 of 3, S10 3 of 4, S11 4 of 5 (pick 2), S12 3 of 4, S13 3 rows, 3 topic sentences, S14 3 of 4, S15 4 of 5 (pick 2). No item leaves one option.

**1.d Together (stored ladder, see MUST 1.d-M2):** P1 H3 describes the key; **P2 H3 describes all three wrong choices (1 of 4 left); P3 H3 describes all three wrong choices (1 of 4 left); P5 H3 names three of the five sentences as garden work (the two keys are the only ones left)**; P4 H3 gives the "Does not belong" row (allowed: one slot).

**2.b core**

| Item | Live after H3 | Item | Live after H3 |
|---|---|---|---|
| C01 = P4 | metaphor row given; 3 rows, 2 columns | C09 | 4 of 5 |
| C02 | 3 of 4 | C10 | secret situation given; 2 situations, 3 idioms |
| C03 | 2 of 3 | C11 | 3 of 4 |
| C04 | 3 of 4 | C12 | 3 of 4 |
| C05 | 3 of 4 | C13 | 3 of 4 |
| C06 = P5 | 3 of 4 | C14 | blank 1: 1 of 3 (one slot completed); blank 2: 3 of 3 |
| C07 | 4 of 5 (pick 2) | C15 | 4 of 5 (pick 2) |
| C08 | blank 1: 1 of 3 (one slot completed); blank 2: 3 of 3 | | |

2.b similar: S06 H3 says the pancake is flipped by sentence 4, which rules out two of the four spots (B and C), so **2 of 4 are live** (the author counted 3 of 4). Everything else matches the author: S08 and S14 complete blank 1, S09 3 of 5, S11 4 of 5, S13 3 of 4, S15 4 of 5. Completing one of two blanks is explicitly allowed by §4.5 item 3. No item has one option left on a single answer.

## S2.4 Verification of the round-2 fixes

**1.d**

| First-review MUST | Result |
|---|---|
| M1 S05 two valid orders | **Fixed.** Cloth, then plates on the cloth, then forks beside each plate. A fork "beside each plate" cannot come before the plates. Blind order matched. |
| M2 S06 H2 described the key | **Fixed.** H2 no longer says "a different place". The key is now "Our gym was painted blue last summer." H2 reads "ask of each sentence whether it shows what it describes", which is vague for a nine-year-old (SHOULD 1.d-8). |
| M3 near-copy similar items | **Fixed on the author's measure** (see S2.5). S14 is now a "why is a break at sentence 3 poor" item, S15 uses new change templates, and nothing shares an option. |
| M4 hummingbird collision | **Hummingbirds are gone and "carousel" is unique** (zero hits for carousel, merry-go-round, calliope, toy top, gallop outside 1.d). But the same kind of collision exists for p4 recycling (see MUST 1.d-M1). |
| SHOULDs | C13/S13 H3 no longer gives a match (fixed). C10/S10 H3 now says "from the start" (fixed). P4 intruder is now the bus sentence (fixed). C11 and S11 are 2 points (fixed). Watch Me coverage is still three examples (still open). |

**2.b**

| First-review MUST | Result |
|---|---|
| M1 C14 pre-answer | **Fixed as asked** (the example is now "as still as a photograph"). Two echoes remain, see SHOULD 2.b-1. |
| M2 C12 word-match key and H2 | **Fixed.** The prompt says "what the quilt means to her", the distractors now include a memory-flavoured pair (a locked trunk, a drawer of old photos kept closed and forgotten), and H2 says only "test each comparison against what the quilt means to Zoe". |
| M3 near-copy similar items | **Fixed on the author's measure** (S2.5). |
| M4 "raining cats and dogs" and "same boat" | **Fixed.** P4/C01 now uses "pulling my leg"; S01 uses "burn the midnight oil". I grepped all of `js/data` for every 2.b idiom (cloud nine, under the weather, went wild, hit the road, cut corners, all ears, tongue-tied, stuck in a rut, blue moon, spill the beans, bite off, head over heels, arm and a leg, out of the blue, thin ice, head in the clouds, midnight oil, pulling my leg): zero hits outside 2.b. |
| SHOULDs | C13 B is now "giggled and skipped" (fails on mood, fixed). C05 prompt no longer echoes "all at once" (fixed). C15 and S15 are 2 points (fixed). S03 no longer teaches "out of the blue" (fixed). Watch Me coverage still open (SHOULD 2.b-6). |

## S2.5 Similar vs core overlap (own scripts `jac2.js`, `jac4.js`)

Each similar item is compared with its `like` item and with every other core and Together item. Text is the prompt, stem, text, all choices, options, slot options, steps, rows, columns and hottext target sentences, with and without the passage. Tokens are `[a-z']+` (the author's tokenizer; my first run counted digits and sentence numbers, which inflated passage items by 0.03 to 0.05, so I discarded it). A shared option means an exact match or a token-Jaccard of 0.6 or more.

- **Shared options with the twin: zero in all 30 pairs.** Across all core and Together items the maximum is one (1.d S07 and C11).
- **Word-set Jaccard against the twin (the ceiling is 0.21): all 30 pairs pass.** Highest: 2.b S01 0.20; 1.d S04 0.19, S02 0.19, S14 0.19, S13 0.17.
- **Multiset Jaccard against the twin: five pairs are above 0.21.**

| Pair | Multiset (with/without passage) | Word-set |
|---|---|---|
| 2.b S01 vs P4 | 0.26 / 0.26 | 0.20 |
| 2.b S08 vs C08 | 0.11 / 0.23 | 0.10 / 0.15 |
| 2.b S15 vs C15 | 0.23 / 0.23 | 0.15 |
| 1.d S02 vs C02 | 0.22 / 0.19 | 0.18 / 0.19 |
| 1.d S14 vs C14 | 0.22 / 0.22 | 0.19 |

  The overlap is almost all function words and skill vocabulary ("sentence", "paragraph", "simile", "metaphor", "idiom"). With stop words removed, every pair is 0.16 or lower. I rate this SHOULD (2.b-2, 1.d-5): reword the question frame of 2.b S01 and the prompt lines of the other four.
- **Same key as the twin:** none. `like` mappings are honest in all 30 (2.b S01 and S06 map to the core refs P4 and P5).

## S2.6 Topic duplicates over all of `js/data` (variants included)

Method: `topics.js` and `topics2.js` search all 17 lesson files, 15 set files and the other data files with case-insensitive regexes (hyphen, space and plural variants), skipping only the two lessons' own line ranges in `T-SS.js`.

- **carousel / merry-go-round / calliope / toy top / gallop:** no hits. **hot-air balloon / balloon / wicker:** the only hits are `L-V3.js` p3 "How a Hot-Air Balloon Flies" (the old collision) and "red balloon" in GUM3; none remains in 1.d. **hummingbird:** none in 1.d.
- **Idioms and comparison vehicles:** unique, with these overlaps with the accepted 2.a (SHOULD 2.b-4): "lake was a mirror" (2.a key) and 2.b P4 "puddles were shiny mirrors" (the key row of a core ref); "The classroom was a zoo ... loud and wild" (2.a teach) and 2.b S14 "a zoo at feeding time"; "worked like ants" (2.a key) and 2.b C07 key "ants crawling along a line"; "zoomed ... like rockets" (2.a passage) and 2.b S02 and S07 keys "a rocket".
- **Names:** "Biscuit" (a pet) appears in five other places (T-T1 p6, GUM2, GUM5, T-C); "Pepper" in T-C and GUM4. NOTE.
- **Setting echoes, no shared key fact (NOTE):** farmers market in L-GC2 and F-FH (1.d P4); a storm night in the `F-FH.js` fluency passage with the lights going out (2.b p1); fireworks "red and gold" in T-T1 (2.b p3); "Grandma's quilt keeps me warm" in GUM3 (2.b p5); dog bath in T-C p5 "Bath Day", a poem (1.d C05 sequence of scrub and shake; SHOULD 1.d-6).
- **Collision (MUST 1.d-M1): school recycling with bins.** Evidence below.

## S2.7 Findings

### MUST

**1.d-M1. p4 "Recycling at Our School" and C06, C07, C08 (and their addons, `why` and `how`) share the topic and key facts with 3.T.T.2.c.** (plan §4.3 rule 4: never share the key fact of another lesson's practice or check passage).
- `T-T2.js` p7 "From Old Can to New Can" (line 2345) says the cans are "shredded into tiny pieces and melted" and "made into new cans". 1.d p4 sentence 5 says "Metal cans can be melted and made into new cans." It is a paraphrase of the same fact.
- `T-T2.js` p8 "Three Bins at Oak Hill School" (line 2352) is a school with a "blue Recycle bin ... for cans and plastic bottles" and a recycling truck that picks up the cans and bottles every week. 1.d p4 is a school with "a blue bin for paper ... bins for cans and bottles", students sorting, and "two helpers carry the full bins to the big truck each Friday".
- 3.T.T.2.c uses this pair in practice and in its comparison items, so a child who has done 3.T.T.2.c already knows the facts and the setting. This is the same fault the author removed twice (hummingbirds, balloons). The author's grep covered carousel and balloon variants but not "recycling".
- Fix: move p4 and C06, C07, C08 to a topic that appears nowhere else (grep first with `recycl|compost|bins|blue bin|custodian`; avoid anything about cans or bottles becoming new ones). Keep the structure: the intruder shares a word with the details (cans), the topic sentence covers three jobs, and the "add facts about home" item is a new-idea paragraph.

**1.d-M2. Hint 3 of the Together items P1, P2, P3 and P5 describes or narrows to the key** (plan §4.5 item 3 and item 5: hint 3 must not describe the key in other words or leave only one option).
- **P2:** "Two choices are about other things in the draft, and one is only a fact about fairs." This characterizes all three wrong choices, so only the key is left.
- **P3:** "Three of the choices are true about carousels but are not about moving." This also describes all three wrong choices; only the key is left.
- **P5:** "Planting, watering and picking are things the class does in the garden. Look for the two sentences that are about something else." This names three of the five sentences as correct garden work, so the two keys are the only sentences left.
- **P1:** "Three of the four sentences tell about how a carousel moves. Ask which one is about something that is not a carousel." This is the definition of the key.
- All four were rewritten or carried over in round 2. The engine does not show Together addons today (architecture §ENG-08; Practice Together shows the old clue, narrow and walk-through ladder, which I confirmed in the browser). That is why this is a latent fault, but the hints are stored for the day Together uses them and they fail the audit as written.
- Fix: P2 H3 "Sentence 7 is about the kinds of animals. Ask whether the sentence about the motor fits what sentences 7 to 9 share" (rules out one choice). P3 H3 "The tickets are a fact about fairs, not about moving. Check the other three." P5 H3 "The sentence about leaves is about a different season. Check the other four." P1 H3 "Sentence 3 is the topic sentence, so it is not the answer. Test the other three."

### SHOULD

**1.d-1. Longest-key cue.** In 12 of the 23 single-key items (core plus Together) the key is the strictly longest option, 9 of them by six characters or more: C10 (60 against 41/40/40), C01 (70 against 59/44/39), C12, S01, S03, S14 (78 against 65/62/60), P3 (57 against 48/46/39). Chance would be about 6 of 23. The similar bank is 5 of 10. Shorten the keys or lengthen two distractors per item (plan §6.5: the key must not be the only long option).

**1.d-2. P4 H2 and the Together clue.** H2 says the intruder is "about a different place or time". The bus sentence says the bus stops near the market, which is the same place. Reword H2 to "which one is about something other than the market's busyness". Also, in Together the `clue` is shown as Hint 1 and **P2's clue points to a location** ("Read sentences 7, 8 and 9") and P1's clue names the topic sentence. Use the same text as hints[0] in all Together items.

**1.d-3. S14 distractors and `how`.** Options A ("The word dirt means the writer has finished the whole draft") and B ("Sentence 3 is about the weather") are absurd, not plausible misreadings (§6.5), so S14 is easier than C14. Replace with "A new paragraph must start every third sentence" or "Sentence 3 is longer than sentence 2". Also fix HOW step 1 ("choosing the spot").

**1.d-4. Watch Me / Learn It still model three of the lesson's tasks.** Learn It covers the intruder, the topic sentence and the new paragraph. The core also asks for closing sentences (C01, C10, S01, S10), paragraph order (C05, S05), choosing details (C04, C09, C12), matching groups to topic sentences (C13) and fixing a draft (C08, C15). The author says it is at the cap of three. Fold the closing sentence into the topic-sentence example, for instance by adding a closing line to Learn 2's paragraph.

**1.d-5. Multiset overlap of S02 (0.22) and S14 (0.22) with their twins, and S02's frame.** C02 and S02 are both a nine-sentence one-block day draft with a time-shift key (evening and after lunch) and an eight-option hot text. Change S02 to a different shape, for example a short list of events in a different domain with a two-paragraph question.

**1.d-6. Distinctness inside the fifteen.** C06 and C11 share the frame ("Read the paragraph that begins with sentence N. Select the sentence(s) that do(es) not belong") and the key logic; they differ only in the passage and the count. C04, C09 and C12 are three "which detail fits the topic sentence" items. C05 shares its scene (dog bath: scrub, shake, soap) with the poem "Bath Day" in `T-C.js` p5. Vary the verb in C11 (for example "Which sentence could Nia take out?" with a reason), and consider a different scene for C05.

**1.d-7. S06 H2 wording.** "Ask of each sentence whether it shows what it describes" does not say anything a child can act on. Use "Ask of each sentence whether it tells about the action in the gym."

**1.d-8. Author log: C11 live count.** C11 has six options, so the count after H3 is 5 of 6, not 4 of 5 (NOTE for the log).

### 2.b SHOULD

**2.b-1. Two Learn It echoes remain for C14 and S14.** Teach point 2 still reads "as quiet as a mouse"; C14 blank 2 is "as {quiet} as a sleeping cat" with options quiet/loud/busy. The new teach example "as still as a photograph" matches S14 blank 2 "as {still} as a stone in a field" with options sticky/still/noisy. Both slots are also solved by the clue sentence before them, so these are the easiest slots in the lesson. Change the teach point to a quality that no item uses (for example "as bright as a lamp") and give S14 a less guessable second blank ("as {motionless} as" with "wobbly" and "sparkly" as distractors).

**2.b-2. Multiset overlap of S01 (0.26 against P4), S08 (0.23 without passage) and S15 (0.23).** S01 and P4 both use the same three columns (simile, metaphor, idiom) with four sentences in the same order of types. Reorder the types in S01 (idiom, metaphor, simile, simile) and reword the prompt.

**2.b-3. Personification is a grade 4 term.** `standards-3-5.txt` puts "personification" in 4.T.SS.2.a (grade 4). The grade 3 expectation 3.T.SS.2.b lists "such as similes, metaphors, and idioms". The word "such as" allows other kinds, and the lesson defines the term before the items use it, so it is not a hard violation. Still, C04, C13, S04, S13, P5's `why`, teach point 5 and Learn 3 spend about a fifth of the lesson on it. Keep it as an extension only if the lead agrees; if not, swap C04 and C13 for simile, metaphor or idiom items.

**2.b-4. Comparison vehicles reused from the accepted 2.a:** "mirror" (P4 key row), "zoo" (S14 key), "ants" (C07 key), "rocket" (S02 and S07 keys). Each is a stock comparison, but P4 is a core ref and the key row. Replace "shiny mirrors" in P4 with a vehicle that 2.a does not use.

**2.b-5. Word-match and longest-key cues.** S13's key is the only option with the prompt's "sleepy" (and "quiet kitchen" from the stem). S05's key repeats the stem's "bus door" and "out". C15 and S15 are inverse word-match items: the options that fit repeat the stem words ("tiny", "sleepy"), so the two keys are the two that do not. The key is the longest option in 6 of 12 core single-key items and 3 of 9 similar ones, mostly by 1 to 7 characters (C13 +7, C12 +6, S13 +4). Reword S13 so it does not repeat "sleepy" and give C15's wrong options (the fit ones) stem-free wording.

**2.b-6. Watch Me / Learn It coverage.** The three examples model metaphor, idiom and personification. The core also asks "does this simile fit what the writer means" (C02, C14, C15), placement (P5), and a comparison that shows what something means (C12, S12). Add the "fit" question to the metaphor example.

**2.b-7. C12 distractors are too clearly negative.** The trunk and the drawer are described with "locked", "nobody could open", "kept closed and forgotten", so the key is the only positive comparison. A child can pick it by tone. Give the drawer a warmer description (for example "a drawer of old photos, taken out and looked at often") and rely on the prompt's "what the quilt means to her" plus the quilt's own details (patches of old clothes) to separate the key.

### NOTE

1. **Hint 3 and one-slot completion.** 2.b C08, C14, S08 and S14 settle blank 1 in H3 (the other two options are ruled out). §4.5 item 3 permits "complete one of two slots". This is a design choice and is unchanged.
2. **2.b P4 / C01:** H2 gives the two similes, H3 gives the metaphor row. Together they solve the item, but H3 alone leaves three rows and two columns, so the audit passes.
3. **2.b S06** key is between sentences 1 and 2. Between sentences 2 and 3 can be argued by a careful child (the batter has spread but is still liquid), but "before the edges turn golden" makes 1 and 2 the stronger spot.
4. **Hint 1 never narrows or points in any core or similar item**, and hint 2 never quotes a key. I could not write a key from H1 and H2 alone for any core item.
5. **Browser (390 by 844, touch, mobile Chromium, `node verification/serve.js . 8741`, killed by pid).** In both lessons all 15 core items of the three Try sets worked end to end: wrong Check, three hints, Show me how, Try a similar question, correct answer to the similar item and Check. Fifteen similar items were visited in each lesson. No horizontal scroll at any step. No page errors. The only console message was the aborted font request from my route rule. The Together sets also render (1.d P1 to P5, 2.b P1 to P3) with no horizontal scroll. In Together, the Help me ladder shows the old three steps (the clue, an engine hint such as "Look in sentences 3 to 6", then the walk-through). The authored hints are not shown there (by design, ENG-08).
6. **Gate run (read only):** `node verification/check-content.js --all` gives PASS (0 failures). Warnings are in other lessons; none for 3.T.SS.1.d or 3.T.SS.2.b.
7. **Readability and word choices** are fine for grade 3 ("lumbering", "finale", "pellets" are in context).

## S2.8 Facts checked on the web

The first review could not reach the idiom sources. These worked.

| Claim | Source |
|---|---|
| under the weather = feel sick; in hot water = be in trouble; all ears = give full attention; bite off more than you can chew = do not try to do more than you can handle; head over heels = deeply in love; out of the blue = without warning; cost an arm and a leg = very expensive | https://downloads.allaboutlearningpress.com/downloads/Quick_Guides/60-Common-Idioms.pdf |
| spill the beans = let out a secret; pull someone's leg = trick someone with something untrue | https://eslgold.com/idioms/ |
| burn the midnight oil = work late into the night; hit the road = leave; once in a blue moon = very rarely | https://en.wikipedia.org/wiki/English-language_idioms |
| on cloud nine = extreme happiness | https://grammarist.com/usage/on-cloud-nine/ and https://www.k5learning.com/blogimages/common-idioms.pdf ("very happy") |
| cut corners = do something the easy or cheap way; pull someone's leg = tease | https://www.k5learning.com/blogimages/common-idioms.pdf and https://www.educatorstechnology.com/2023/03/50-popular-idioms-for-kids-with-examples.html |
| head in the clouds = absent-minded, lost in daydreams | https://en.wiktionary.org/wiki/head_in_the_clouds |
| went wild = become very noisy and excited | https://www.wiktionary.com/wiki/go_wild |
| stuck in a rut = monotonous, unchanging routine | https://ingilizcepedia.com/vocabulary-a-z/stuck-in-a-rut/ |
| tongue-tied = trouble speaking, from shyness or embarrassment (the `why` says "unable to speak"; fine for a distractor) | https://writingexplained.org/idiom-dictionary/tongue-tied |
| once in a blue moon = rarely | https://grammarist.com/idiom/once-in-a-blue-moon/ |
| carousel: a motor (electric) turns a rotating platform; animals are fixed on posts with up-and-down motion from gearing | https://en.wikipedia.org/wiki/Carousel |
| menagerie carousel animals include lion, tiger, giraffe, rabbits and horses | https://en.wikipedia.org/wiki/Menagerie_Carousel |
| guinea pigs were first domesticated in the Andes of South America; pet diet is hay plus pellets | https://en.wikipedia.org/wiki/Guinea_pig |
| paper, aluminum cans and glass can be recycled into new paper, cans, bottles and jars | https://recyclingpartnership.org/communitiesforrecycling/16-fun-recycling-facts-for-kids/ |
| grade 4 puts personification in 4.T.SS.2.a | `docs` copy of the official standards text, `gadoe/standards-3-5.txt` lines 860 to 868 (page 29) |

- **Not confirmed on a fetchable page:** "on thin ice = in a risky situation" (2.b S10 `why`). The only page that reached the allow-list listed it as an answer option without a key. It is the standard sense and I found no conflict.
- **Not checkable and not needed:** ears popping in a glass elevator, tulip bulbs, bread dough ingredients. They are common knowledge and agree with the text.


---

# Third review (3.T.SS.1.d only, after the author's section 10 "Fixes after second review of 1.d")

Reviewer: independent third reviewer (did not author; did not write the first or second review). Source: `js/data/lessons/T-SS.js`, lesson 3.T.SS.1.d. Read-only: no lesson edits, no git. Scripts, answers and screenshots are in the scratchpad folder `b4r8/` (`load.js`, `blind.js`, `blind.txt`, `map.json`, `my-answers.json`, `cmp.js`, `full.js`, `full.txt`, `audit.js`, `wm.js`, `jac.js`, `ui.py`, `tog.py`, `shots.py`, `sh_*.png`).

## T3.0 Verdict

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 3.T.SS.1.d Paragraphs that stay on one idea | **ACCEPT** (with SHOULDs) | 0 | 6 | 6 |

Both second-review MUSTs are fixed:
1. **1.d-M1 (p4 collision with 3.T.T.2.c).** "Our School Read-a-Thon" has no topic or key-fact overlap anywhere in `js/data` (T3.4).
2. **1.d-M2 (Together hint 3).** The hint 3 of P1, P2, P3 and P5 now rules out at most one choice (or one of two keys) and leaves a live choice (T3.3).

I found no new MUST. The most worthwhile SHOULD to do before shipping is the longest-key cue (SHOULD T3-1), which two reviews have now raised and the author has not done.

## T3.1 Method and blind-solve result

- **Fully blind.** I wrote `load.js` and `blind.js` new. `load.js` loads `T-SS.js` in a Node `vm` sandbox with a mock `PP.addLesson`. `blind.js` prints only the passages (all six are numbered drafts), stems, prompts, and the seeded-shuffled choices, options, order steps, match rows and columns, dropdown options and hottext sentences (resolved from `pN:para:sent` to sentence text). It never reads `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception`, `like`, `std` or `addons`. I used a new seed (987654321). Before this, I ran two schema probes that printed only field names, array lengths and `typeof` values. There are no figures in this lesson, so there is no alt text.
- **Disclosure.** Before writing my script I opened the generic `blind.js` and `load.js` in the scratchpad root (they are for the 3.T.T lessons and hold no data for this lesson) as a template. After solving I copied the older `b4r7/ui.py` and `ui_tog2.py` browser harness. I did not open the author log, the first or second review, or any raw lesson source for the items until `my-answers.json` was saved and `cmp.js` had printed the agreement.
- **Items solved: 35** (15 core C01 to C15, five Together P1 to P5, 15 similar S01 to S15). The core items here are all inline items; there are no `{ref}` items in 1.d.
- **Agreement with the keys: 35 of 35 (100%).** That is every item, including the changed ones (C06, C07, C08, S06, S14, P1 to P5).
- **Doubtful answers that still matched:** C02 (sentence 2 or 6 could start a paragraph; 6 is much stronger), S02 (sentence 5; sentence 8 returns to home, but "after lunch ... library" is the clear shift), C08 (see SHOULD T3-3, option C can be argued by a careful child).

## T3.2 Key beside explanation, longest-key cue, word-match keys

- **Key beside explanation.** `audit.js` checked that every keyed choice, option, hottext sentence and dropdown slot appears verbatim in `why`, and in at least one `how` step, for all core and similar items and (from `addons`) the Together items. **No misses.** It also checked that no hint (H1 to H3) quotes a key verbatim: none does. The hottext target indexes agree with the `why` text (C02 p3:1:6, C06 p4:2:4, C11 p5:2:3 and p5:2:5, S02 p6:1:5, P1 p1:2:4). Match items name the topic sentence and column by paraphrase, and I read them by hand.
- **Word-match keys (`wm.js`: content-word overlap of each option with the stem, prompt and passage).** No item has a key that wins on shared words alone. In C04, S04, S03, S07 and S12 the keys share **fewer** words with the stem than the distractors. In P5 and C15 the distractors share more. Mild echoes only, and these are NOTE T3-5 (C07 "Everyone" and "helps" echo sentences 9 and 10).
- **Longest-key cue (plan §6.5: "the key is not the only long or detailed option").** Still unchanged from the second review.
  - mc single-key items (core, Together and similar, 14 items): the key is the strictly longest in **8 of 14**. Gaps: C01 +11, C12 +8, P3 +9, S01 +11, S03 +10, S07 +5, S14 +5, C14 +1.
  - Dropdown and hottext-option items: C09 (59 against 40/49), S09 (47 against 36/40) and **C10 (60 against 41/40/40)** are longest, and S10 and S06 are not.
  - Overall about **11 of 21** single-key items, where chance is about 5. C10 is the worst case: the key is almost 50% longer than every distractor. This is **SHOULD T3-1.**
- **Keys that are not the longest (good):** C03, C07, C08 (shortest-but-one), P2, S08, S12, S10, S06, C04/C15/P5/S04/S15 (pick-two items).

## T3.3 Verification of the second-review MUSTs and SHOULDs against the author's section 10

| Second-review item | Author's claim | My check | Result |
|---|---|---|---|
| **1.d-M1** p4 collision | p4 is now "Our School Read-a-Thon"; C06, C07, C08 and their addons rewritten; no recycl/bin/can fact left | See T3.4. Text of p4, C06, C07, C08, `why`, `how` and hints has no "recycl", "bin", "can" or "custodian". | **Fixed** |
| **1.d-M2 P1** hint 3 | "Sentence 3 is the topic sentence, so it is not the answer. Test the other three." | Rules out one sentence (the topic sentence). 3 of 4 live after H3. | **Fixed** |
| **1.d-M2 P2** hint 3 | "One choice is about the motor, which belongs in the paragraph about moving. Check the other three." | Rules out the motor choice only. 3 of 4 live. It does not describe the key. | **Fixed** |
| **1.d-M2 P3** hint 3 | "The tickets are a fact about fairs, not about moving. Check the other three." | Rules out the tickets choice only. 3 of 4 live. H2 gives the paragraph's idea ("moving"), which is restating evidence and allowed. | **Fixed** |
| **1.d-M2 P5** hint 3 | "The sentence about leaves is about a different season. Check the other four." | Completes one of the two keys (leaves). The child still picks one more from four live sentences (the other key and three garden-work sentences). This matches plan §4.5 item 3 ("complete one of two slots") and is the wording the second review itself proposed. | **Fixed** (NOTE T3-6) |
| P4 hint 3 | Gives the bus sentence ("Does not belong") | One of four rows is given; the other three rows each still have two columns live. Allowed. | Pass |
| **S14 distractors** | New B "exactly two sentences", C "more words than sentence 2", D "brings in dirt, a new idea". Prompt reworded. | All three are plausible misreadings (a counting rule, a length rule, "new thing equals new idea"). Not absurd. Key logic is single: the idea has not changed until sentence 4. C is a false statement (sentences 2 and 3 are both nine words), which is fine for a distractor. | **Fixed** (NOTE T3-4 on H3, SHOULD T3-1 on length) |
| **S06 hint 2** | "Ask of each sentence whether it tells about the action in the gym." | Gives the criterion in the topic sentence's own words ("full of action"), names no key, and a reader without the choices cannot write the key. H3 rules out one distractor (the whistle). 3 of 4 live. | **Fixed** |
| 1.d-2 P4 H2 | "something other than the market's busyness" | Bus sentence is no longer described as "a different place". | **Fixed** |
| 1.d-3 S14 how step 1 | "choosing the spot" removed | HOW step 1 now says sentences 1 to 3 are digging holes, dropping in bulbs and covering them. Matches the draft. | **Fixed** |
| 1.d-8 C11 live count | 5 of 6 | Agrees. | Fixed |

**Live choices after hints 1 to 3 (hand count; changed items and any item whose hint I re-read).** Hint 1 never narrows or locates in any core or similar item. Hint 2 never quotes a key. I could not write a key from H1 and H2 alone for any item.

| Item | Live after H3 | Item | Live after H3 |
|---|---|---|---|
| C01 | 3 of 4 | C09 | 2 of 3 |
| C02 | 5 of 8 | C10 | 3 of 4 |
| C03 | 3 of 4 | C11 | 5 of 6 (pick 2) |
| C04 | 4 of 5 (pick 2) | C12 | 3 of 4 |
| C05 | topic first; four to order | C13 | leftover removed; 3 rows, 3 topic sentences |
| **C06** | 4 of 5 | C14 | 3 of 4 |
| **C07** | 3 of 4 | C15 | **3 of 5 (pick 2)**: H3 says sentence 3 "should stay", which removes both choices about sentence 3. Three pairs remain (A, B, E). NOTE T3-6 |
| **C08** | 3 of 4 | | |
| **P1** | 3 of 4 | **S06** | 3 of 4 |
| **P2** | 3 of 4 | **S14** | 3 of 4 |
| **P3** | 3 of 4 | S01 to S05, S07 to S13, S15 | unchanged from the second review (3 of 4, 4 of 5, or three rows) |
| **P4** | one row given, three rows live | | |
| **P5** | 4 of 5 (one key given) | | |

No item leaves one option. The Together hints are stored in `addons` and are **not shown by the engine** (confirmed in the browser: Together "Help me" shows the old clue, then "Two choices are crossed out", then the walk-through), so the Together hint audit is for the day the engine uses them.

## T3.4 Topic and key-fact duplicates over all of `js/data` (variants included)

Method: case-insensitive `grep -rniE` over every file under `js/data` (lessons, sets, habits, standards), excluding `T-SS.js` only when reading the hits.

| Pattern | Hits outside 1.d | Verdict |
|---|---|---|
| `read[- ]?a[- ]?thon`, `readathon`, `read-athon`, `reading marathon`, `pledge`, `book cart` | **0** | clear |
| `reading log` | 0 (all seven hits are in `T-SS.js`) | clear |
| `squeaky` | `T-T1.js` 67, 159, 166, 914 to 916 (Mateo's "high and squeaky" voice); `T-T34.js` 3996 (a rocking chair that "creaks a squeaky tune") | incidental word, unrelated key fact |
| `librarian` | `T-T1.js` 101 (Mr. Webb with a shark tie), 764 (Mr. Orr and a puzzle); `T-RA.js` 3519 to 3534 (a librarian and Waffles the reading dog); `L-GRM-01.js` 148 (bookmarks) | incidental; no cart, no log, no school event |
| `recycl`, `\bbins?\b` | `T-T2.js`, `T-C.js` 2054 to 2062 (Lena's recycling-club poster), `T-TS.js` 2086 and the author's own comment at 4634 | **none in 1.d** (p4 no longer mentions bins, cans or recycling) |
| `book fair`, `bookmark`, `book club` | `T-C.js` 974 to 983 (book fair poster, persuade), `T-T1.js` 103, `L-GRM-01.js` 148 | setting echo only |
| `color the chart`, `chart climb`, `star next to` | `habits.js` 132 ("circle the 3 strongest"; the match is only the phrase "star next to" in an unrelated parent tip) | clear |

Other topics in 1.d, checked the same way (second review covered carousel): `guinea pig`, `post office`, `popsicle`, `good listener`, `music class`: **0 hits**. `tulip` only in `F-PF.js` 344 to 348 (a syllable-splitting word). `parade`, `farmers market`, `class garden`, `loaf`, `dog bath`, `set the table`, `pet store`, `whistle`, `thunder`: setting echoes only, with no shared key fact. The nearest is `L-GC2.js` p1 "Our Class Garden" (planting beans, watering every morning, picking beans) against 1.d Together P5 (class garden, beans, watering, picking). They teach different skills (run-on sentences against paragraph unity) and P5 is a Together item, so NOTE T3-5.

## T3.5 Similar versus core (`jac.js`, tokens `[a-z']+`, text = prompt, stem, text, all options, rows, columns and hottext sentences; with and without the passage)

- **Word-set Jaccard against the `like` twin: every pair is 0.20 or lower** (S14 0.20; S04 0.19; S02 0.18; S13 0.17; the others 0.16 or lower). The ceiling of 0.21 holds. Highest against any core or Together item: S14 against C15 at 0.21 (at the ceiling, passes).
- **Shared options (exact match or token-Jaccard of 0.6 or more): zero for all 15 twin pairs.** Across all core and Together items the maximum is **one** (S07 and C11), which meets the "at most one shared option" limit.
- **Multiset Jaccard against the twin:** S14 **0.23** (above 0.21), S02 0.21 (at the limit), S03 0.20, S04 0.19, S13 0.18 and all others lower. S14 against C14 is the only pair over. The excess is function words and the skill frame ("sentence", "new paragraph", "idea"). **SHOULD T3-2.**
- **Within the fifteen:** the closest pairs are C06 with C07 (0.29) and C06 with C11 (0.26). Both are same-passage pairs and share only the frame; shared options are zero.
- **`like` mappings are honest** in all 15 (same skill, different context, same ask, no shared key).

## T3.6 Per-item checks (all 35 items)

- **One defensible answer, plausible distractors.** All pass. C06's intruder shares the word "books" with the topic sentence, so it is a fair test. C07's key covers all three details of the paragraph; the helper sentence covers one, the log sentence belongs to paragraph 2, and "what counts as reading" is off-topic. C15 and S15 are the only fixing pairs. One careful-reader risk is in C08 option C (SHOULD T3-3).
- **Official wording.** 3.T.SS.1.d "Craft related sentences into clear and cohesive paragraphs" (`standards.js`) is covered by the topic-sentence, detail, intruder, closing, order, new-paragraph and fix-the-draft items.
- **Points and DOK.** pick-two (C04, C11, C15, P5, S04, S11, S15), match (C13, P4, S13) and order (C05, S05) are all 2 points; all other items are 1 point. DOK 3: C08, C14, C15, S08, S14, S15; the rest DOK 2. `mc` is at six core items.
- **Grade-3 suitability.** Nothing is kindergarten-like. p4 is 118 words (author: FK 3.5) with numbered sentences. S03, S06 and S07 are easy but fine.
- **Distinctness.** No two items differ only by names or numbers. The three "detail that fits" items (C04, C09, C12) use three different formats (pick two, dropdown, mc). C06 and C11 share a frame and logic but differ in passage and count (carried SHOULD, now T3-6 below).
- **No giveaways into form A or form B.** I compared the five check items (T1 to T5) in `test` with the core, similar and Together text. T1 shares only the stem frame. No shared fact or key.
- **Learn It and Watch Me.** They model the intruder, the topic sentence and the new paragraph. The core also asks for closing sentences, paragraph order, choosing details, matching and fixing a draft (carried SHOULD T3-6).
- **`how` accuracy.** One loose wording in C07 (SHOULD T3-3). The other changed `how` steps (C06, C08, S14) agree with their drafts. I counted S14: sentences 2 and 3 are both nine words, so distractor C is false as written, as intended.
- **Facts** (T3.8).

## T3.7 Browser (Playwright, mobile Chromium 390 by 844, touch; `node verification/serve.js . 8775`, killed by pid 28845, confirmed gone)

- All 15 core items of the three Try sets: wrong Check, three hints, Show me how, Try a similar question, correct answer to the similar item and Check. **15 of 15 similar items visited, no horizontal scroll at any step.** The only console message was the aborted font request from my route rule; no page errors.
- Changed items viewed in screenshots (`sh_SK-SS1d-C06.png`, `_C07`, `_C08`, `_S14`, `_S06`, and the "Read the passage" tab for C06 to C08): the p4 passage, the five hottext sentences, and the S14 draft box and choices render fully, with no clipping and no horizontal scroll.
- Together (P1 to P5) renders with no horizontal scroll. Its help ladder is the old three steps (clue, engine hint, walk-through); the authored `addons` hints are not displayed (by design, ENG-08).

## T3.8 Facts checked on the web

| Claim in the lesson | Source and result |
|---|---|
| C04 and S04 area: guinea pigs eat hay and pellets daily, have a water bottle, and come from South America ("first lived in South America", a distractor) | https://www.amcny.org/pet_health_library/how-to-care-for-a-guinea-pig/ : hay and pellets are part of the daily diet; a water bottle or bowl in the cage; guinea pigs are native to the Andes of South America. **Supported**, with one wording point (SHOULD T3-3 on "a small scoop of hay"). |
| p1 / P2 / P3: a motor turns the platform, and animals on poles rise and fall ("the poles slide up and down, so the animals seem to gallop"); the toy-top sentence is not about carousels | https://en.wikipedia.org/wiki/Carousel : a power source (most now use electric motors) turns the platform around a central pole; gears and offset cranks make each mount rise and fall as it travels. **Supported.** |

No other factual or cultural claim in the lesson needs a source (the items are about paragraph structure, with everyday scenes).

## T3.9 Findings

### MUST

None.

### SHOULD

**T3-1. Longest-key cue is still present (open since the second review, SHOULD 1.d-1).** In about 11 of 21 single-key items the key is the longest option, which is about twice chance. Plan §6.5 line 318 says the key must not be "the only long or detailed option". Worst cases: **C10 (60 against 41/40/40)**, C01 (70 against 59/44/39), S01 (50 against 39/33/37), S03 (50 against 40/36/39), P3 (57 against 48/46/39), C12 (57 against 49/48/47), C09 (59 against 40/49), S09 (47 against 36/40). Fix: add a clause to two distractors in each item, for example C10 option "Many people can whistle with their lips" becomes "Many people can whistle with their lips, and some can do it with their fingers". If the lead reads §6.5 line 318 strictly, C10, C01, S01 and S03 are MUST-level. I rated it SHOULD to stay consistent with the first two reviews and because every other check on these items passes.

**T3-2. S14 against C14 multiset Jaccard 0.23 (above 0.21), S02 against C02 0.21.** The word-set measure passes (0.20 and 0.18). Reword the S14 prompt and one distractor so the shared frame words fall ("new paragraph", "sentence 3", "idea").

**T3-3. Three small accuracy and defensibility points in the new p4 and C04 text.**
- **C07 `how` and `why`** call "Everyone cheers when the chart climbs higher" a "job" ("Reading, adding up pages and cheering are all jobs people do"). Cheering is not a job, and the distractor reasoning ("not about jobs") then rests on the loose word. Say "ways people take part" instead of "jobs", in `how`, `why`, C08's "paragraph about the jobs" and C08 H3.
- **C08 option C** ("Add the facts after sentence 2, since the first paragraph is about the read-a-thon") can be argued by a careful child, because home reading could be part of the read-a-thon. Strengthen the prompt to "several facts about how families read together at home" (several facts need their own paragraph) or change option C to name a different, clearly unrelated reason.
- **C04 key** "He eats a small scoop of hay and pellets each day." Hay should be offered freely, so "a small scoop of hay" is inexact (source in T3.8). Use "He eats fresh hay and a few pellets each day." Keep the text identical in `why` and `how` when you change it.

**T3-4. S14 hint 3 repeats the key's principle.** H3 reads "A paragraph starts when the idea changes, not when a sentence has more words. Test the other three." It rules out distractor C, but the first clause is also the rule that the key applies. It does not make the key the only option left (3 of 4 live), so it passes the audit. To be safe, drop the first clause and write "A sentence having more words does not decide where a paragraph starts. Test the other three."

**T3-5. Together clue is shown as hint 1 and points to a location (carried from SHOULD 1.d-2).** The Together `clue` is what the child sees first, and the `addons` hint 1 is not shown. P1's clue starts "Sentence 3 is the topic sentence", P2's says "Read sentences 7, 8 and 9", and P5's says "The first sentence is the topic sentence" (hint 1 must not point to a location, §4.5 item 1). Use the `addons` hint 1 text as the `clue` in P1, P2, P3 and P5.

**T3-6. Still open from the second review (not done by the author, judged SHOULD and unchanged): Watch Me and Learn It cover three of the lesson's tasks; C06 and C11 share the frame and logic; C05 shares its scene with the poem "Bath Day" in `T-C.js` p5; S02 mirrors C02's one-block-day shape.** None creates a wrong or ambiguous key.

### NOTE

1. **C15 hint 3** ("Sentence 3 is a summer detail that fits the topic sentence, so it should stay") removes both options about sentence 3. Three options (A, B, E) remain for a pick-two, so there are three possible pairs and the choice is still live.
2. **P5 hint 3** completes one of the two keys ("the sentence about leaves"). It is allowed by §4.5 item 3 ("complete one of two slots") and is the fix the second review proposed.
3. **S14 hint 2** ("Ask whether the topic shifts anywhere in them") leads toward the key without stating it. A reader without the choices still cannot write the key, because the answer to the question is not given.
4. **Setting echoes with no shared key fact:** 1.d P5 and `L-GC2.js` p1 (class garden, beans); 1.d P4 and `T-T1.js`, `F-FH.js`, `L-GC2.js` (farmers market); p4 and `T-C.js` 974 (a school book fair poster); C05 and the poem "Bath Day"; librarian in `T-T1.js`, `T-RA.js` (different scenes).
5. **C07 key words:** "Everyone" echoes sentence 10 ("Everyone cheers") and "helps" echoes sentence 9 ("helpers"). Distractors echo too (the log, the helpers), so it is not a giveaway.
6. **Engine:** Together does not yet use authored hints; the latent hint-3 fixes above are future-proofing only.

## T3.10 Summary for the lead

- **Accept 3.T.SS.1.d.** Blind agreement is 35 of 35. The p4 read-a-thon draft is unique across `js/data`. The Together hint 3 audit passes for P1 to P5, S14 and S06 pass, and no hint quotes a key. Twin similarity is within 0.21 on word sets (multiset S14 0.23, SHOULD). Browser at 390 by 844 is clean.
- **Do before shipping (cheap, text only):** T3-1 (lengthen two distractors in C10, C01, S01, S03), T3-3 (C07 "jobs" wording, C08 option C, C04 "small scoop of hay"), T3-2 and T3-4 (S14 wording).

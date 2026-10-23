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

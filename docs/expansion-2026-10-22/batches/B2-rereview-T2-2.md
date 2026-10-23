# B2 second re-review: 3.T.T.2.a and 3.T.T.2.b (plus 2.c C04 and S02)

**Reviewer:** independent B2 reviewer. I did not write these lessons and had not seen them before this pass.
**Date:** 2026-10-23
**Source reviewed:** `js/data/lessons/T-T2.js`. That covers the 2.a and 2.b blocks after §11 of `B2-b2a-author-log.md`, and 2.c C04 and S02, whose ladders changed.
**Scratch work:** `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/b2rr-t2b/`. It holds:
- `load.js`, `shape.js`, `shape2.js`;
- `blind.js`, `blind.txt`, `blindmap.json`, `answers.json`, `saved-at.txt`, `cmp.js` and `cmp.txt`;
- `full.js`, `full-a.txt`, `full-b.txt`, `full-c.txt`, `passages.txt`, `together.txt` and `tests.js`;
- `ngram.js` and `ng6.txt`;
- `check-content.txt` and `readability.txt`.

**Read-only.** This is the only repo file I wrote. I ran no git and did not open the earlier reviewer's scratch folder (`b2rr-t2/`).

## Verdicts

| Lesson | Blind agreement | MUST | SHOULD | Verdict |
|---|---|---|---|---|
| 3.T.T.2.a | 6/6 decisions | 0 | 1 (C03) | **ACCEPTED** (SHOULD recommended) |
| 3.T.T.2.b | 4/4 decisions | 0 | 1 (S02) | **ACCEPTED** (SHOULD recommended) |
| 3.T.T.2.c (C04 and S02 only) | 1/1 | 0 | 0 | **Stays ACCEPTED** |

- Every key is correct and defensible.
- All five MUSTs and all seven SHOULDs from `B2-rereview-T2.md` are made in the data.
- Two of the new ladders (2.a C03 and 2.b S02) still leave only the key after hint 3. The earlier reviews rated this pattern SHOULD, not MUST (2.a C04, C05, C08 and 2.b C05 in the last round), so I rate it SHOULD as well. Neither hint quotes, paraphrases or points to the key.
- The author log's §11.3 overstates the live choices for those same two items. Everything else in §11 is accurate.

## 1. Blind solve

**Method.**
1. I wrote my own loader (`load.js`). It evaluates T-T2.js in a VM with a stub `PP.addLesson`.
2. Before solving, I printed only field names and types, never values (`shape.js`, `shape2.js`). That told me where keys live: `choices[].correct`, `slots[].answer`, `answer` on hot text, `partA` and `partB`.
3. `blind.js` printed the ten assigned items with their passages and figure alt text. It shuffled choices and dropdown options with a seeded LCG and saved the permutation.
   - It printed only `text`, `options`, `targets`, `steps`, `rows`, `stem`, `prompt` and `figure.alt`.
   - It never printed `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception` or `ref`.
   - Nested key fields (`choices[].correct`, `slots[].answer`) were never read for output.
4. I saved `answers.json` (timestamp in `saved-at.txt`). Then `cmp.js` mapped the keys back through the permutation.

**Result: 11 of 11 decisions agree (100%).**

| Item | My answer = key? |
|---|---|
| 2.a C03, C05, C09, C12 | yes |
| 2.a C10 (two blanks) | yes, yes |
| 2.b C04, C05, S01, S02 | yes |
| 2.c C04 | yes |

**How blind was it?** It was fully blind on keys and explanations. The caveats:
1. My assignment named some topics before I solved: the animal shelter, the bike figure in 2.a C14 and the bike-tube passage in 2.b. It also said that 2.c C04 and S02 had changed.
2. Listing the scratchpad showed the earlier reviewer's figure file names (fire station, bike). I opened none of those files.
3. I knew the lesson titles and the field names.
4. The scope was ten items, as assigned, not the whole lessons.

**What the solve says about difficulty.** Every item took seconds. For most of them, at least one distractor is plainly contradicted by the stem: 2.a C12 "Jelly is made from fruit…", 2.b S01 "water first", and 2.b S02 "farmers asked to keep dirt". The agreement rate partly reflects easy items, not only clear keys. See NOTE-1.

## 2. Findings

**Severity rule.** I kept the bar the earlier reviews used.
- **MUST:** a wrong key; a hint that quotes, paraphrases or points to the only place that holds the key; or a shared topic or key fact with another lesson.
- **SHOULD:** the ladder leaves only the key, but the child still has to draw the last conclusion, or a distractor is too weak.

### MUST

None.

### SHOULD

**SHOULD-1. 2.a C03 (animal shelter, unstated main idea). Hint 3's rule also removes the other distractor.**
- **Evidence:**
  - The options are "helpers caring for the animals at a busy shelter" (key), "a girl who reads a story to a shy puppy" and "a family that takes home a gray cat".
  - Hint 3 says: "The girl and the puppy are in only one sentence, so they are a detail, not the main idea."
  - The family is also in only one sentence ("Before lunch, a family takes home a gray cat"). So the same rule removes it, and the child has no reason left to pick it. After hint 3, only the key is live.
  - §11.3 of the log lists "K, family-takes-cat" as live. That is not right under the brief's definition of live: "A choice that the hints' logic rules out is NOT live, even if no hint names it."
- **Fix:** make it a four-option item and add a broad but wrong option that the one-sentence rule cannot remove. For example: "animals waiting for new homes at the shelter". It is tempting because animals appear in every sentence, but it leaves out the helpers. Keep hint 3 as it is.

**SHOULD-2. 2.b S02 (brick street, similar). Hint 3's timing fact removes the other two distractors as well.**
- **Evidence:**
  - Hint 3 says: "The new shops opened after the street was paved, so they cannot be the cause."
  - That fact also removes "The bricks were left over after the new shops were built", because the shops came after the paving.
  - "Farmers asked the town to keep the streets made of dirt" contradicts the effect the question asks about, so no reader has a reason to pick it.
  - So only the key is live after hint 3. §11.3 lists "leftover-bricks" and "farmers-wanted-dirt" as live.
  - The earlier MUST-5 is cleared: hint 2 no longer points to the key sentence.
- **Fix:** replace the farmers-wanted-dirt choice with a wrong cause that the text makes tempting and that the shops fact cannot remove. For example: "Too many wagons crowded Main Street, so the town made it wider." Wagons and the street are both in the text, but crowding is not the problem the text gives.

### NOTE

- **NOTE-1. Weak distractors on otherwise sound items.**
  - 2.a C05 "It tells a step that a gardener must do before planting".
  - 2.a C12 "Jelly is made from fruit, so the fact in the article must be wrong".
  - 2.b S01 "Move step 4 to the beginning…" and "Leave the steps as they are…".
  - 2.b S03 "The wooden spoon sends its heat into the metal spoon".
  - Each item still keeps two live choices, so none of this is a finding. Where an author next touches one of these items, a misreading drawn from the text would raise its value.
- **NOTE-2. Unchanged items whose ladders come close to the line.** I agree with the last review that these are acceptable.
  - **2.a P3 (pick 2).** Hint 1 asks for "jobs that worker bees do", and hint 3 removes the queen. That leaves the two keys plus "A hive can be home to thousands of bees", which names no job. So it is close to settled.
  - **2.a P5 Part B.** "Read only paragraph 4" (in the clue and hint 1) plus hint 2's "which sentence does not fit" leaves the two keys. Part A stays open, so at most one part is settled.
  - **2.a S02 (pick 2).** Hint 3's "not about staying dry" also removes the quacking choice, which leaves the two keys and "beak to find food".
- **NOTE-3. Latent pre-answer in 2.a Together P2.**
  - P2's addon `how[0]` says: "The article tells about the queen in paragraph 2…". That answers set 1's C04 (a heading for paragraph 2).
  - Practice Together does not render addon `how` today: `help()` shows `clue`, then the engine's narrowing, then `why` (player.js:522-530). P2's `why` does not name paragraph 2, so nothing leaks now.
  - If the engine ever shows addon how steps in Together, change this line to "…about the queen and about different workers…" with no paragraph number. This is the same class as the earlier review's N8 / R2 NOTE-5.
- **NOTE-4. The text-box fact is close to one in 3.T.SS.1.a.**
  - 2.a p4's box reads: "Box: Long ago, horses pulled fire wagons through the streets."
  - 3.T.SS.1.a's bookmobile passage (T-SS.js:136) has "Box: Long ago, the first bookmobiles were wagons pulled by horses."
  - SK-SS1a-P5 asks "Why does the author include the 'Did You Know?' box?", which is the same task as 2.a C08.
  - The topics and key facts differ (fire station and bookmobile; C08's key is about the article's point), so this is not a §4.3 reuse. Still, a child who meets both sees a near-twin sentence. If the box is revised, lead with the leather hoses.
- **NOTE-5. 2.b p4 is 181 words** by `readability.py`'s count, one over the 60–180 range for new passages. It has no effect on any item. Trim one word whenever p4 is next edited.
- **NOTE-6. 2.b C08 follows the timeline that C06 has just modelled** in the same set, with paragraphs 1 to 5 in order. C06's `how` says nothing about who doubted the plan or who lined up to ride, so it does not settle any C08 row. This is clean.
- **NOTE-7. Name reuse only:** "Mr. Bell" (2.a C13's class teacher; T-RA's piano teacher) and "Kayla". No facts are shared.

### Bike topic: 2.a C14 figure and 2.b p5 "How to Patch a Bike Tube"

**Judgement: acceptable.**
- **What each one tests.**
  - 2.a C14 is a caption task. Its key is "The main parts of a bike", from a labelled drawing of the seat, handlebars, brake lever, pedal and chain.
  - 2.b p5 is a repair procedure: tube, tire levers, rim, sandpaper, glue, patch.
- **No overlap.**
  - No key fact, label, sentence or 6-gram is shared (`ng6.txt`).
  - Neither item pre-answers the other, and 2.b uses none of the labelled parts.
  - They are different standards (2.a text features and main idea; 2.b sequence and procedure).
- **Elsewhere on the site.** Bikes appear only as everyday sentence props (grammar items; T-TS's low-tire cause/effect item with Dre; T-C's crossing-guard chain). None of them shares the patching procedure or the parts diagram. T-TS.js:453 records that the bike tube was moved out of TS-SEQ so that it would stay in 2.b.
- **Why it is still acceptable.** The §4.3 / post-B1 rule targets a topic or key fact that would let one lesson's content answer another's. Here "bike" is the shared object, not the topic of either task. A child who meets both learns nothing in one that answers the other.
- **Condition.** Do not add a third bike item to the T.T.2 family. If C14's figure is ever redrawn, a non-bike object would remove the overlap altogether.

## 3. Whole-ladder audit (choices live after each hint)

**What counts.**
- "Live" follows AUTHOR-BRIEF: a choice is not live if the hints' logic rules it out.
- For core and similar items, the player shows `hints` in place of `clue` (player.js:270, `hintsOf`), and ref items get their addon hints merged in (skills.js:31-41). So the clue is not counted, but I read it anyway and it changed no row.
- K = key.

**3.T.T.2.a**

| Item | After h1 | After h2 | After h3 | Result |
|---|---|---|---|---|
| P4 (match, 4 rows) | open | open | row 1 settled; rows 2–4 open | OK: one blank settled |
| P7 (2 slots) | 3 / 3 | 3 / 3 | slot 1: K, ¶2-main-idea; slot 2: K, queen-eggs | OK |
| C03 | 3 | 3 | **K only** (family removed by the same one-sentence rule) | SHOULD-1 |
| C04 | 4 | K, Laying, Working (Thousands is not in ¶2) | K, Laying Eggs All Day | OK |
| C05 | 4 | 4 | K, not-true, a-step (weak) | OK |
| C06 (pick 2 of 6) | 6 | 6 | 2 K, busy-building, (doors, pole) | OK |
| P3 (pick 2 of 5) | 5 | 5 | 2 K, thousands (weak) | near; NOTE-2 |
| C08 | 4 | 4 | K, most-important (dressed falls with alarms) | OK |
| C09 | 4 | 4 | K, big-doors (far-from-truck is contradicted by the figure) | OK |
| C10 (2 slots) | 3 / 3 | 3 / 3 | slot 1: K, Did You Know?; slot 2: 3 | OK |
| C11 | 6 | 6 | 5 | OK |
| C12 | 4 | 4 | K, last-part, (fruit, weak) | OK |
| C13 | 4 | 4 | K, backward, both-ready | OK |
| C14 | 3 | 3 | K, chain-and-pedal | OK |
| P5 (ebsr) | A 4 / B 5 | A 4 / B: five-eyes flagged | A: K, eat-honey; B: 2 K | Part B near-settled, Part A open; NOTE-2 |
| S01 | 4 | 4 | K, Riding Home, Flat Tire | OK (weak) |
| S02 (pick 2 of 5) | 5 | 5 | 2 K, beak-food | near; NOTE-2 |
| S03 | 4 | 4 | K, backward, both-ready | OK |

**3.T.T.2.b**

| Item | After h1 | After h2 | After h3 | Result |
|---|---|---|---|---|
| P4 (2 slots) | 3 / 3 | 3 / 3 | slot 1 settled; slot 2: because, so | OK: one blank settled |
| C02 | 5 | t1, t2 (the neighbours of the split) | t1, t2 | OK |
| C03 (pick 3 of 6) | 6 | 6 | 3 K, cracks open, to find flowers | OK |
| C04 | 4 | 4 | K, step-2-after-4, leave-as-is | OK |
| C05 | 4 | 4 | K, Emily-planned, ice-hurt-John | OK |
| C06 (order) | open | open | first step fixed | OK |
| C07 (ebsr) | A 4 / B 4 | ¶2 holds two Part B choices | A: K, before-Paris; B: K, few-years-later | OK |
| C08 (match) | open | open | row 1 settled | OK |
| C09 | 4 | 4 | K, instead-of-tower, riders-scared | OK |
| C10 | 5 | t1, t2, t3, t4 | t1 (steel parts), t3, t4 | OK |
| C11 (order) | open | open | one pair fixed | OK |
| C12 | 3 | 3 | K, pump | OK |
| C13 | 4 | 4 | K, bubbles, tire (weak) | near; earlier N1 |
| C14 | 4 | 4 | K, holes-first, bakes | OK |
| C15 | 4 | 4 | K, backward, both-steps | OK |
| S01 | 4 | 4 | K, water-first, leave-as-is (both weak) | OK; NOTE-1 |
| S02 | 4 | 4 (the shops sentence is live) | **K only** | SHOULD-2 |
| S03 | 4 | 4 | K, wooden-spoon, cold-spoon | OK |

**3.T.T.2.c (changed items)**

| Item | After h1 | After h2 | After h3 | Result |
|---|---|---|---|---|
| C04 | 4 | 4 | K, pink-tops-handle, palmetto-never-dried | OK. Both distractors join a true fact to an unsupported or contradicted claim. Hint 3 gives the test but does not apply it to them |
| S02 | 4 | 4 | K, finds-holes (scares-seals is contradicted by Text 2) | OK |

**Within-set pre-answers.** I checked each earlier item's prompt, key, `why` and `how` against every later item in the same set.
- **2.a set 1:** P4 and P7 say nothing about the shelter, tomatoes or paragraph 2's heading.
- **2.a set 2:** C06's how and C08's why do not place the pole or the doors, and C09's how does not settle C10.
- **2.a set 3:** C11's how lists the three sections but not the box.
- **2.b set 1:** P4, C02 and C03 do not touch the cup phone or the bridge.
- **2.b sets 2 and 3:** C11's how gives no lever step and no reason for the sandpaper. C12's hint 3 is about where the sandpaper step falls, which does not pre-answer C13's question about why the sandpaper matters.
- **2.c set 1:** C01–C03 do not mention bending, coils or winding. C04's distractor "never needs to be dried" draws attention to drying, but it does not tell the child that drying is in both texts, which is C05's blank 1.

**Together against core.**
- 2.a Together P1, P2 and P6, and 2.b Together P1, P2, P3, P5 and P6, show (as rendered) nothing that answers a set-1 item.
- One latent line exists in an addon that is not rendered (NOTE-3).

**Leaks into test and testB.**
- 2.a test uses p2 (armadillo) and testB uses p3 (tree trunk). 2.b test uses p2 (water cycle) and testB uses p3 (Pony Express). No core or similar item uses those passages.
- The 6-gram scan of every 2.a and 2.b core, similar and passage string, plus 2.c C04 and S02, against all test and testB text finds only instruction boilerplate: "this question has two parts…", "a fun fact but it…", "the main idea fits the whole…".
- Shared task frames on different passages are acceptable, as earlier reviews ruled. Examples: 2.a C10 (add a key detail) against TB4, C05 (not a key detail) against TB5, and 2.b P4's "because" against T4.

**Topic search (all of `js/data`, including `sets/` and `tasks/`).**
- **Animal shelter:** only passing sentences.
  - L-GUM3.js:551 "We chose a puppy at the animal shelter." (grammar)
  - T-C.js:25 "Persuade: You should adopt a dog from the animal shelter." (purpose example)
  - L-V12.js:63/94 "shelter" in a habitat definition.
  - None is a shelter scene, and none shares C03's helpers, dogs walked, water bowls, reading to a puppy or cat adoption.
  - No hits for "shy puppy", "water bowl", "walk the dogs", "cat room" or "Birch Street".
  - "gray cat" appears once, in T-T1.js:3223, as an unrelated grammar distractor.
- **No hits elsewhere:** mulch, stop sign arm, Cedar Avenue, okra, fire hose, kudzu, Brooklyn, Roebling, Ferris, Eiffel, cup phone, tire lever, Maple Grove, yeast, metal spoon, sweetgrass, polar bear, seal.
- **Benign hits:**
  - tomatoes (T-T1's Grandma Bea rabbit story, which is narrative and shares no tips);
  - ducks (sentence props; none is about feathers and oil);
  - school bus (sentence props);
  - concert (grammar sentences);
  - fire station (the T-TS comment and one L-GUM2 sentence);
  - bike (see the judgement in §2);
  - the bookmobile box (NOTE-4);
  - the pre-existing bees and monarch overlaps with T-RA, which are already logged for PP-004.

## 4. Confirmation against the last review and §11 of the author log

I checked the current data, not the log.

| Finding in B2-rereview-T2 | Status in the data |
|---|---|
| MUST-1, 2.a C03 market reuse | **Cleared.** New shelter topic; no market, farmers, peaches or fiddle; topic search clean. The ladder issue is SHOULD-1 |
| MUST-2, 2.a C09 hint 3 names the gear | **Cleared.** Hint 3 rules out the kitchen only. The new "big doors" distractor is live |
| MUST-3, 2.a C12 hint 2 paraphrases the key | **Cleared.** Hint 2 is "Find every place in the article that tells about kudzu flowers." The new "last part" distractor is false and live, because "Keeping Kudzu Back" follows the box |
| MUST-4, 2.b S01 hint 2 names steps 2 and 3 | **Cleared.** Hint 2 is generic |
| MUST-5, 2.b S02 hint 2 points to the key sentence | **Cleared as written.** Hint 2 sends the child before and after. The ladder still ends with only the key (SHOULD-2) |
| SHOULD-1, 2.a C05 and C08 | Made. Hint 2 changed on both; C05 now has the "not true" misconception choice |
| SHOULD-2, 2.a C04 | Made. Hint 2 is "Reread paragraph 2." |
| SHOULD-3, 2.a C10 slot 2 and 2.b C04 | Made. "…already tells about the doors" and "Move step 2 after step 4…"; 2.b C04's hint 3 shortened |
| SHOULD-4, 2.b C05 | Made. New hint 2, the "ice-hurt-John" distractor and a neutral hint 3 |
| SHOULD-5, 2.b C10 | Made. Hint 2 is "Reread paragraphs 4 to 6…", and the steel-parts sentence stays live |
| SHOULD-6, 2.c C04 | Made. The pink-tops-handle distractor |
| SHOULD-7, 2.c S02 | Made. The neutral hint 2 |
| N6, 2.b p5 FK 1.9 | Made. FK 2.7, 180 words (confirmed by `readability.py`) |
| N7, "rice plantations" | Made (2.c p6 ¶1) |

**Log accuracy (§11).**
- §11.1, §11.2 and §11.5 are accurate. Every fix they list is present, and nothing is claimed that was not done.
- §11.4's no-hit list is accurate. I re-ran every term above.
- §11.3 overstates the live choices for two rows:
  - **2.a C03:** "K, family-takes-cat" should read "K only" (SHOULD-1).
  - **2.b S02:** "K, leftover-bricks, farmers-wanted-dirt" should read "K only" (SHOULD-2).
  - It also lists far-from-truck as live for 2.a C09. The figure contradicts that choice, but the key and big-doors still leave two live choices, so this changes no verdict.
- The gate claims are accurate (§5).

## 5. Gates (run 2026-10-23, read in full)

**`node verification/check-content.js --all`:** PASS, 0 failures, 25 warnings.
- The only T-T2 lines are the similar-coverage warnings: 2.a 11 of 15, 2.b 10, 2.c 6. These match the last review.
- The other warnings belong to other lessons (PT-1, V3b, TT1a/c/d/e, and others).

**`python3 verification/readability.py`:**
- 2.a p4 176 words, FK 3.8; p5 180, FK 3.8.
- 2.b p4 181, FK 3.0 (NOTE-5); p5 180, FK 2.7.
- 2.c p1–p10: FK 3.6–4.4.
- 2.a and 2.b p1–p3 are the longer existing Together and test passages, at FK 3.1–4.4.
- All values are in the grade-3 band. The script prints no failures.

## 6. Facts checked this round

The passage text added or changed since the last review is fictional (the shelter, Grandpa's tips, the brick street) or covered by the last review's table. I re-checked kudzu (2.a p5), which that table did not list.

| Claim | Verdict | Source |
|---|---|---|
| Kudzu came from Japan more than 100 years ago | Confirmed: arrived 1876 at the Philadelphia Centennial Exposition | https://www.aces.edu/blog/topics/invasive-species/the-history-and-use-of-kudzu-in-the-southeastern-united-states/ |
| In the 1930s, farmers were paid to plant it to hold soil | Confirmed: "up to $8 per acre as an incentive for farmers" to fight erosion | same |
| It can grow about a foot in one day in summer | Confirmed: "as much as 1 foot during a single day in the early summer" | same |
| Its shade can kill the trees underneath | Confirmed: it can "suppress or kill [vegetation] by heavy shading" | same |
| Purple flowers that smell like grape candy | Confirmed: "red or purple flowers (which smell like grape soda!)" | https://blogs.ifas.ufl.edu/escambiaco/2022/05/04/weekly-what-is-it-kudzu/ |
| People make jelly from the flowers | Confirmed: kudzu blossom jelly recipes | https://www.pickyourown.org/KudzuJelly.php ; https://alfafarmers.org/recipes/recipe-list-march-1-202/kudzu-blossom-jelly/ |
| 2.b C04: the knots must be inside the cups before the string is pulled tight; a knotted end will not pass through a small hole | Correct by construction; the key and the new distractor are sound | — |
| 2.b C05: "Ice led John Roebling to get hurt" is unsupported | Correct as a distractor. His foot was crushed by a ferry, and the text gives no cause (last review's sources) | https://en.wikipedia.org/wiki/Brooklyn_Bridge |

## 7. Required actions

None are required.

Recommended:
1. **2.a C03:** add a fourth, broad-but-wrong option such as "animals waiting for new homes at the shelter" (SHOULD-1).
2. **2.b S02:** replace "farmers asked to keep dirt" with a tempting wrong cause the shops fact cannot remove (SHOULD-2).
3. Correct the two §11.3 rows in the author log.
4. NOTE-3 to NOTE-5 whenever those items are next touched.

## Round 2 re-check (after §12 of the author log)

**Scope:** 2.a C03, 2.b S02 and 2.b C06, as the coordinator asked.
- I had seen both items before this round, so this re-check is **not blind**. I judged the new choices directly against the stems.
- I also re-read §12 of the author log and re-ran both gates.

### 2.a C03 (animal shelter)

- **New option:** "animals waiting for new homes at the shelter".
- **Key check.**
  - "helpers caring for the animals at a busy shelter" is still the single defensible answer.
  - Sentence 1 frames the paragraph around helpers ("full of helpers"). Every later sentence except the last shows a helper doing a job.
  - Animals appear in every sentence, but only the last one is about a new home. So the new option fits one sentence's idea and leaves out the helpers. That is a real misreading, and it is clearly wrong.
- **Ladder.** Live choices after each hint:
  - h1: 4.
  - h2: 4.
  - h3: the key and "animals waiting".
    - The one-sentence rule removes the girl and the family.
    - It cannot remove "animals waiting", because animals are in every sentence.
  - Two choices stay live, and hint 3 does not echo the key.
- **Explanations.** The how and why explain the new choice accurately.
- **Earlier items.** Nothing in P4, P7 or Together P1, P2 and P6 answers it.
- **Result: SHOULD-1 cleared.**

### 2.b S02 (brick street, similar)

- **New option:** "Too many wagons crowded Main Street, so the town wanted a wider road."
- **Key check.**
  - "Wagons sank in the mud, so farmers could not get their crops to town" is still the single defensible answer.
  - The text gives mud as the problem and So as the link to the paving.
  - It never mentions crowding or widening, and paving does not widen a road. So the new choice is unsupported but tempting, because it reuses "wagons" and "Main Street".
- **Ladder.** Live choices after each hint:
  - h1: 4.
  - h2: 4. The shops sentence is live.
  - h3: the key and "wagons crowded".
    - The shops-came-later fact removes the red-street choice and the leftover-bricks choice.
    - It does not touch the crowding choice.
  - Two choices stay live.
- **Explanations.** The why covers the new choice.
- **Result: SHOULD-2 cleared.**

### 2.b C06 (Ferris order) and the p4 trim

- **The trim.**
  - p4 ¶4 now reads "They said yes." in place of "At last, they said yes."
  - p4 is 179 words (my count and `readability.py`) at FK 3.0, so NOTE-5 is cleared.
- **Hint 1 and the clue** now say "time words like a few years later and today". Both phrases are in the passage:
  - "A few years later" opens ¶2;
  - "Today" opens the last sentence of ¶6.
- **Removed phrases.** No 2.b string now contains "At last" or "they said yes". The trim broke no quote.
- **Ladder.** It is unchanged: h1 and h2 leave the order open, and h3 fixes only the first step.
  - "A few years later" places the planners after Paris. Hint 3 already fixes the tower as first, so hint 1 settles no extra step.
  - "Today" points to ¶6, which holds none of the five events. It is a fair general example, and it does not mislead.
- **NOTE.** C08's how[2] (T-T2.js:1138) still says "and since then wheels like his have been built". This is the author's own narration, not a quote, and p4 never contained "since then", so nothing is broken. "Today" would match the passage more closely. This is optional.

### Gates

- `check-content.js --all`: PASS (0 failures, 25 warnings, unchanged).
- `readability.py`: 2.b p4 is 179 words at FK 3.0.

### Log accuracy (§12)

§12.1 to §12.3 match the data. The corrected ladder rows agree with mine.

### Round 2 verdict

| Lesson | MUST | SHOULD | Verdict |
|---|---|---|---|
| 3.T.T.2.a | 0 | 0 | **ACCEPTED** |
| 3.T.T.2.b | 0 | 0 | **ACCEPTED** |
| 3.T.T.2.c | 0 | 0 | **ACCEPTED** (unchanged) |

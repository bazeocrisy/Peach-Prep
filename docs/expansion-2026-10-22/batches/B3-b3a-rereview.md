# B3 re-review (b3a): fixes to 3.T.C.1.a and 3.T.C.2.c

**Reviewer:** independent re-reviewer (not the author, not the first reviewer). Read-only: I edited no lesson and ran no git. Scratch files are in `scratchpad/b3rr/`.
**Scope:** `3.T.C.1.a` and `3.T.C.2.c` in `js/data/lessons/T-C.js`, checked against `B3-review-b3a.md`.

## Verdicts

| Lesson | Verdict | Blocking findings |
|---|---|---|
| 3.T.C.1.a Author's purpose and audience | **ACCEPTED** | none (3 original MUSTs fixed) |
| 3.T.C.2.c When, where and why a text was written | **ACCEPTED** | none (3 original MUSTs fixed) |

Each lesson has SHOULD and NOTE items. None blocks.

## 1. Blind solve

- **Method.** `blind.js` loads the lessons in Node. It prints every core item (with `{ref}` resolved) and every similar item, with choices, dropdown options and match columns shuffled by a seeded generator (seed 20261023). It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `sample`, `criteria` and `like`, nested fields included. Passages and box text were printed. The passages carry no figures, so there was no alt text. I saved my answers (`answers.json`, sha256 in `answers.sha256`, 15:33 UTC) before I compared anything. I did not read the author log before then.
- **Result.** 56 of 56 keyed core and similar items agree (100%). The two lessons have four `cr` items (1.a C14, S11; 2.c C10, S11). I did not score them.
  - The Together items P1, P2, P3, P6 and P7 are not in the 56. I judged them from their clues only.
  - Both P4 and P5 are in the 56. P4 is core in each lesson.
- **How blind it was.** The items in this re-review were all rebuilt. I had seen the original review's text first, and its table of what changed, but not the revised wording. I did not look at the keys. A few of my picks leaned on the old review's logic (for example, I expected C07 Part B to be unambiguous this time), so treat the agreement as strong, not perfect, blindness.
- **Two answers I held with less than full confidence.**
  - 1.a C07 Part B (details below under "1.a C07").
  - 2.c P8: I picked the experience choice, but the three rivals are plausible enough to be live (see §2).

## 2. Live-choice check (clue + hints 1 to 3)

"Live" means a child who follows the clue and hints 1 to 3 still has a real reason to pick the choice. The first count is the number live after hint 3.

### 3.T.C.1.a

| Item | Live after h3 | Verdict |
|---|---|---|
| C03 | key, "grass" request, bean-plant fact: 3. The clue and h1 are neutral. h2 now says only "who Rosa wrote to and what she asked that reader to do", which does not name watering. h3 removes the story. | Fixed (was SHOULD F-8) |
| C06 | h1 is now neutral: "Does it give information, ask the reader to act, or tell a story?" h2 is "make a list of what each paragraph gives". h3 removes only the story. Live: facts, hunt, pet = 3. | **MUST-1 fixed** |
| C07 A | children, scientists, gardeners, teachers; h3 removes teachers. Live: 3. | OK |
| C07 B | One sentence speaks to the reader ("Have you ever played in your yard...?"). The other three are plain facts about the animal. Live after h3: 4, since none is removed. | **MUST-2 fixed** (see note below) |
| S02 | Same pattern as C06, now neutral. Live: inform, zoo, care = 3. | Fixed |
| S07 | h3 settles sentence 1 only. Live: 4 of 5. | OK |
| S09 | h3 settles the single "both" row. The other four rows reduce to article or poem. | NOTE (unchanged) |
| S10 | Slot 1 and slot 2: h3 removes only "principal"; 3 live in each. | OK |
| S13 | Neutral h1; h3 removes the story. Live: 3. | Fixed |
| P2 (Together) | Clue: "A letter names the person it is written to. Ask who Rosa is talking to as she asks for things." That is a strategy and does not reveal the key. | OK |
| C14 (cr) | h2 says "find a line that shows the purpose, and a word or detail that shows who the poem is for." It no longer hands over both answers. h3 is a sentence frame. | Fixed (was NOTE) |

**1.a C07 Part B note.** The pronunciation respelling in "It is a crustacean (krus-TAY-shun), like a crab or a shrimp" is a mild rival, since a respelling is a child-directed feature. A careful child could pick it. The direct question to the reader is still clearly the best support, so this is not a MUST. See SHOULD-1.

### 3.T.C.2.c

| Item | Live after h3 | Verdict |
|---|---|---|
| P8 | Choices are now: experience (key), "read it in the newsletter", "bus-safety video watched at school", "a rider once told her". h1 sends the child to the box (15 years, bus driver). h3 removes the newsletter. Live: key, video, rider = 3. The video and the rider are real sources of knowledge for a driver, even though her own words ("I have had to stop fast many times") make the key best. | **MUST-4 fixed** |
| C07 | Key: rain kept the wash from drying outside, homes had no dryers, so it hung in the kitchen. Distractors: wind and leaves (contradicted by "last Monday it rained"), plants (no support, removed by h3), steamy irons (contradicted: ironing is Tuesday). Live after h3: key, wind, irons = 3. See the C07 judgement below. | OK |
| C11 | Imara/train. h3 removes "quiet train". Live: key, "slept later", "never seen a train" = 3. One defensible answer. | Fixed (**MUST-6**) |
| C12 A | Live: hatched (key), "rainy weather over", "can fly" = 3. | OK |
| C12 B | Live: the four-weeks sentence (key), the nest sentence (explains why the field is closed, not when it reopens), the blacktop sentence = 3. | OK |
| C13 | h3 removes the postcard. Live: streetcar, radio, camera, computer = 4 for a child who doubts any of them. Easy by design. | OK |
| S02 | h3 removes "doctor works at the store". Live: key, "buy medicine", "only person who knew the doctor" = 3. | OK |
| S07 | h3 removes "eat supper together". Live: 4 of 5 choices for the two-pick. | OK |
| S08 | Slot 1: h2 pushes to "historical fiction" and "imagine", h3 removes "newspaper writer". Live: key, "real boy", "uncle" = 3. Slot 2: the box already says the diary is about a lamp lighter, so "lost in the dark", "electric lights" and "made today" are contradicted. Live: about 2. Same structure as C08, accepted before. | OK (NOTE) |
| P2, P6, P7 (Together) | Clues are now strategy only. P2: "Read the text box before the letter. It tells what life was like back then." P6: "Who is the writer? Think about how her background shapes what she does." P7: "Letters often say early on why the writer is writing." | Fixed (was F-11) |

**2.c C07 judgement (re-aimed to mix situation and time period).**
- The key needs two things: the rain (situational: "last Monday it rained", in the passage) and no dryers (time period: stated nowhere in the box, which says only "no washing machine"). A child who knows nothing about 1908 can still reach the key from the rain and the kitchen, since the other three choices are contradicted by the passage. A child who thinks about dryers reaches it faster.
- One answer is defensible. The steam rival (D) is attractive for the word "jungle", but the passage says the irons come "tomorrow", and the kitchen was damp from clothes.
- "Homes had no dryers" in 1908 is true: automatic dryers were first sold in 1938 (source below).
- The `clue` says "situational context" only; the key adds a time-period fact. That is a small mismatch, not an error. NOTE.

**Set 3 as a whole (2.c).** C11 (individual), C12 (situational, killdeer), C13 (time period, 1935), C14 (individual, two texts), C15 (situational, Okoye wedding). p6 changed: the box now says Coach Petty wrote "in early April" and the note says "by the first week of May". Four weeks from early April is early May, so the arithmetic is right, and the old "school year ends" rival is gone. No item in the set states another item's key. The set covers all three kinds of context.

## 3. Original MUSTs: confirmed fixed?

| # | Original finding | Status |
|---|---|---|
| MUST-1 | 1.a C06 ladder collapsed to the key | **Fixed.** Clue and h1 neutral. 3 live after h3. S02 and S13 got the same fix. |
| MUST-2 | 1.a C07 Part B had two defensible sentences | **Fixed.** Exactly one Part B sentence addresses the reader; the others are facts. The "hold it gently" sentence is no longer a choice. Residual: pronunciation respelling (SHOULD-1). |
| MUST-3 | 1.a S10 topic reuse (reading buddies) | **Fixed.** Now the Walking Club. grep over all of `js/data` outside the two blocks: no hits for "walking club", "Lyle". "laps" appears in `T-T1.js` (a different story about Kendra running). "buddy" remains in `T-T34.js` and `W-TASK-01.js`, but S10 no longer uses it. |
| MUST-4 | 2.c P8 two dead distractors | **Fixed.** Distractors are now source-of-knowledge rivals; 3 live after h3. |
| MUST-5 | 2.c S08 grist mill key fact | **Fixed.** Now gas street lamps and a lamplighter. grep: "street lamps" appears only in `T-TS.js` (sea turtles and hotel lights, unrelated). "Emmett", "Uncle Ray" appear in `L-GUM*` and `L-GRM-02` as a name only (a grammar item with an "Uncle Ray"), no shared topic. |
| MUST-6 | 2.c C11 cabin and stars reuse | **Fixed.** Now Imara and the train tracks. grep over all `js/data`: no "Imara", "Jabari", "train track". "tracks" appears in `T-RA.js` (how trains stay on tracks) and `T-SS.js` (railroad tracks to a store), both different scenes. Other lessons in `T-C.js` use trains in unrelated items (1.b "Riding the Train", 2.a, and 2.c S14 "1950 train"), not a house shaking. |

## 4. Cross-lesson duplicates for every new topic

I grepped all of `js/data` including the other lessons in `T-C.js`.
- **Walking Club / laps / Lyle (1.a S10):** no duplicate. `laps` only in `T-T1.js` (Kendra's fun run).
- **Imara, Jabari, train tracks, house shaking (2.c C11):** no duplicate.
- **Killdeer, Coach Petty (2.c C11/C12 p6):** only in the 2.c block.
- **Gas street lamp, lamplighter, Emmett, Uncle Ray (2.c S08):** no duplicate topic.
- **Washday, Pearl, dryer (2.c C07):** `dryer` appears only in `L-GUM4.js` (a pronoun item: "warm from the dryer"); no shared topic.
- **Ms. Greene bus driver (2.c P8):** `T-T2.js:550` has a different "Ms. Greene" who also drives a school bus and checks it daily (a main-idea item). Same name and job, different skill and facts. This was in the legacy P8 before the review. NOTE.
- **Roly-polies (1.a):** only in the 1.a block.

## 5. Facts

Verified by fetch or search; URLs below.
- **1908, rain and no dryers:** the first automatic home dryer, the "June Day", was sold in 1938, and only 10 percent of US households had a dryer in 1955. So a 1908 home had no dryer. https://www.hunker.com/13410374/the-history-of-the-clothes-dryer
- **1895 gas street lamps and a lamplighter:** a lamplighter carried a pole with a flame (a wick, or an ignition lamp with a hook) and lit gas lamps at dusk. https://en.wikipedia.org/wiki/Lamplighter and https://1900s.org.uk/lamp-lighter.htm. Gas street lighting was common in towns by the 1890s. The "boy walks with his uncle on his rounds" is fiction, which is acceptable, since the box says "imagine".
  - **Detail not confirmed:** S08 says the uncle "reached up and turned a small key". Neither source mentions a key. The UK page describes a chain, a lever, or a valve knob. See SHOULD-2.
- **1930s to 70s home computers:** the Apple II went on sale June 10, 1977, and was "one of the first successful mass-produced microcomputers", alongside the Commodore PET and TRS-80. 1977 minus 1935 is 42 years, so "the 1970s, about forty years later" is accurate. https://en.wikipedia.org/wiki/Apple_II_(original)
- **Killdeer:** incubation 24 to 28 days; the nest is a scrape on bare soil or gravel, sometimes lined with pebbles; downy young leave the nest soon after hatching; they fly at about 25 days old. https://audubon.org/field-guide/bird/killdeer. So eggs laid in early April hatch in early May, and chicks will not be flying yet. That makes "baby birds will be able to fly" a clean distractor. Nesting in Georgia in March and April is consistent with a southern killdeer season (the Audubon page gives no months).
- **Georgia calendar (C12):** the statewide planning date for the last day of school is May 27, 2027 (districts vary); spring break is April 5 to 9, 2027. https://us-school-calendar.com/georgia. "First week of May" falls well before the end of school, so no school-year rival exists.
- **Softened claims from the first review:** 1.a S09 now says "Many", 2.c S02 says "many homes", and 2.c S07 says "a small town in Georgia". These match the sources in the first review.
- **Not independently verified (low risk):** "first week of May" as a Georgia killdeer fledging window (the Audubon page gives days, not months); the 1895 date for gas lighting in a small town.

## 6. Findings

### MUST
None.

### SHOULD
- **SHOULD-1. 1.a C07 Part B: pronunciation respelling is a rival.** "(krus-TAY-shun)" is a child-directed feature, so a careful child can argue for it. Fix: replace that choice with a plain fact and no respelling, for example "Crabs and shrimp live in water." Also make sure the passage still keeps "(krus-TAY-shun)" so the audience clue stays.
- **SHOULD-2. 2.c S08: the "small key" detail.** I could not confirm lamplighters turned a key. Fix: "he reached up and pulled a small chain" or "he reached up, and the street began to glow". The key does not depend on it.
- **SHOULD-3. 2.c P8: the rivals rest on "she never forgot it".** The how and why say the rider and video choices fail because her note says she has stopped fast "many times". That is a fair reading, but the rider choice is a real way to know. If the author wants a firmer item, make the rival's source one that the box excludes (for example, "Ms. Greene has never been on a school bus before").
- **SHOULD-4. 2.c C07: the clue says "situational" only.** The key also needs "no dryers". Fix: clue "Context includes what was happening and what people had back then." No ladder change is needed.

### NOTE
- **N-1. 1.a S09/C09:** h3 settles the only "both" row, leaving two live columns per row. Legal; unchanged.
- **N-2. 2.c S13:** the key ("The roof work would last until Friday") is near-verbatim from the box, so the item is easy. The distractor "Workers were putting on a new roof" is the useful rival.
- **N-3. 2.c S08 slot 2:** three of four choices are contradicted by the text, so only about two are live. Same pattern as C08.
- **N-4. 2.c P8 / `T-T2.js` name overlap** (Ms. Greene). Pre-existing, different skill.
- **N-5. cr items** (1.a C14, S11; 2.c C10, S11): not scored; samples and criteria unchanged and sound. 1.a C14 h2 no longer hands over both answers.
- **N-6. Still open from the first review** (not in scope, not rechecked): F-13 (six teach points in 2.c) and F-16 (modelling gaps), and F-18's "habit cards" claim. These were not part of the author's stated fixes.

## 7. Verification of ladder details I relied on

I printed the clue, hints 1 to 3, `how`, `why` and `misconception` for every item named in the task (1.a C03, C06, C07, S02, S07, S09, S10, S13, P2, C14; 2.c P8, C07, C11, C12, C13, S02, S07, S08, P2, P6, P7) with `show.js` and applied the live-choice definition to each. Nothing in an earlier item's `how` or `why` states a later item's key within these lessons. I did not run the browser (not asked). The content gate was not rerun.

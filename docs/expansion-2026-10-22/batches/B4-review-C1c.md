# B4 independent review: 3.T.C.1.c (purpose and audience in captions, labels, sounds, signs)

**Reviewer:** independent content reviewer. I did not author this lesson. I edited no lesson and ran no git. I wrote only this file and scratch files under `scratchpad/c1c/`.
**Scope:** the `3.T.C.1.c` block of `js/data/lessons/T-C.js`. That is 15 core items (P4 and P5 as refs, C03-C15), similar S01-S15, addons for Together P1-P5, passages p3 "Be Pool Smart!" and p4 "Wolves Talk", Watch Me, and the teach points.

## Verdict: CHANGES REQUIRED

Keys, scoring, hint structure and the browser behaviour are sound. The blockers are:
- word-matching keys in C15 and S15;
- three near-copy similar items (S09, S14, S15);
- a false "new topic" claim for pool safety.

| Id | Severity | One line |
|---|---|---|
| M1 | MUST | C15 and S15: the two keys are the nouns the slide's own sentences name, so a child can answer by word matching |
| M2 | MUST | S15, S14 and S09 are near-copies of C15, C14 and C09 (word-set Jaccard 0.46, 0.36 and 0.32; accepted is 0.21 or less) |
| M3 | MUST | Pool safety is not new: lifeguard and whistle content already sits in T-RA (C14) and T-SS (Splash Day) |

There are 7 SHOULD findings and 7 NOTEs below.

---

## 1. Blind solve

**Method.** `scratchpad/c1c/blind.js` loads T-C.js in a Node `vm` sandbox. It resolves every `{ref}` and prints the passages, the 15 core items and S01-S15 with a seeded shuffle of choices, options, slots and match rows. It strips `correct`, `answer`, `why`, `hints`, `how`, `clue` and `misconception`, recursively. I printed the stripped JSON (`stripped.json`) and grepped it for those words before reading. The only hits were the ordinary prompt words "answer"/"answers" ("Choose two answers", "answer on the next click"). Nothing was missed. I wrote my answers to `myans.json` before extracting any key.

**Result: 30 of 30 keyed core and similar items agree (100%).** C10's key is a target id and compared equal after I normalised the string. The shuffled order differed from the source order for C09 and S09, and I compared those by row text.

**How blind it was, honestly.**
- My schema probe printed the whole `addons` object. That showed me the hints, `how` and misconception text for Together P1-P5, and so the keys of P1-P3. **The P1-P3 solve was not blind.** P4 and P5 are core, and I solved them blind from the stripped print before I had read their addon text. I did not solve P1-P3 blind.
- I did not open the raw source or the author log before saving answers. I read the log afterwards.
- A 100% agreement rate on mostly one-correct-choice items shows only that the items are answerable. The findings below are about what the agreement rate cannot show.

I printed every keyed choice next to its `why`, `how` and hints for all core, similar and addon items and read them (`full.txt`). I found no wrong key and no mismatch between `why`, `how` and the key.

## 2. Hint ladders: live choices after the clue and hints 1-3

The author's counts (4 to 3, 5 to 4 and so on) are a rough estimate. I recounted by hand. I counted a choice as dead only if a hint names it or states a property that rules it out. I did not count a hint that merely restates the definition of the skill as ruling anything out.

| Item | After clue/h1/h2 | After h3 | Note |
|---|---|---|---|
| P4 mc | 4 | 3 | The clue and h2 say "compare". Only the key shows several things side by side (S1) |
| P5 dropdown | 3 | 2 | h2 "what the farmers use" points at "machine". The key repeats "machine ... dig" from Slide 3 (S1) |
| C03 mc | 4 | 3 | OK |
| C04 hottext | 3 (h1 "a word or two" kills the long sentence) | 2 | Passes, but only just. "More than any state" and "Peanut harvest" are the two live decoys, and h3 names the first |
| C05 ms | 5 | 4 | OK. The decoys carry their own flaw words: "silly", "tiny numbers", "Buy some today!" (S5) |
| C06 mc | 4 | 3 | OK. See S3 on word matching |
| C07 dropdown | slot 1: 3, slot 2: 3 | 2 / 3 | Slot 1 ends with the key and "all the words in smaller letters". Slot 2's decoys are weak |
| C08 mc | 4 | 3 | OK. See S4 on option B |
| C09 match | 3 columns per row | 2 per row | OK |
| C10 hottext | 10 | 9 | OK |
| C11 mc | 4 | 3 | OK |
| C12 ms | 5 | 4 | OK. The decoys are absurd |
| C13 mc | 4 | 3 | See S4 |
| C14 hottext | 4 | 3 | OK |
| C15 ms | 5 | 4 | Passes the count, but h2 "match each sentence to a part" is a word-match instruction (M1) |

Every core item leaves at least 2 live choices, so there is no ladder MUST. Hint 1 is a strategy and hint 2 a place to look throughout. Hint 3 removes one named distractor. The exceptions are P4 and P5 above, where h2 and the clue come very close to saying what the key is.

Similar items S01-S15 follow the same ladder pattern with the same caveats. S01 h2 "notice what changes" names the key's property (SHOULD S1).

## 3. Findings

### MUST

**M1. C15 and S15: word-matching key.**
- C15: the slide says "Veins carry water ... The blade catches sunlight." The keys are "veins" and "blade". The decoys "stalk", "edge" and "tip" appear nowhere in the slide. A child who matches words to the labels gets 2 points with no reading of purpose or audience.
- h2 says "match each sentence to a part", which is the word-match instruction itself.
- S15 has the same design with "canopy" and "handle".
- **Fix.** Write the slide sentences about function without naming the part. For example: "Tiny tubes carry water through the leaf. The wide, flat part catches sunlight." Then the keys need a small inference. Alternatively, make the label choices describe the part and not name it.

**M2. Near-copy similar items.** The brief's accepted score is 0.21 or less with at most 1 shared option. I computed word-set Jaccard on stem, prompt and options (`sim.js`):

| Similar | Core | Jaccard | Shared options |
|---|---|---|---|
| S15 | C15 | 0.46 | 1 ("tip") |
| S14 | C14 | 0.36 | 0 |
| S09 | C09 | 0.32 | 0 |
| S13 | C13 | 0.29 | 0 |
| S12 | C12 | 0.28 | 0 |
| S04 | C04 | 0.25 | 0 |
| S03 | C03 | 0.19 | 0 |

The other eight are 0.18 or less. A lower score by other measures (word 2-grams: S09 0.24, S15 0.28, S14 0.22, S04 0.20) does not change the picture for S15, S14 and S09.
- **S15** is C15 with leaf changed to umbrella: five parts, two sentences, the same decoy logic and the same shared option "tip".
- **S14** copies C14 slot for slot: an old photo, an audience who has not seen it, the faded-photo decoy, the "has always loved X, favorite colour Y" decoy and the "X in general" decoy.
- **S09** keeps C09's four-row design, the over-long sentence frame ("This is the ... where ...") and the two "different part" rows.
- **Fix.** Give each a new task shape and new decoy logic. Examples: S14 asks which caption adds a fact the reader cannot see; S09 uses a different set of label failures, such as a vague label or a label for the wrong thing; S15 uses a task with three parts and a different reason for choosing.
- S13, S12 and S04 are above 0.21 as well. I rate them SHOULD (S6) because their design overlap is lighter.

**M3. Pool safety is not new (author claim fails).**
- `js/data/lessons/T-RA.js` line 1487 (`SK-RA1b-C14`): "How do lifeguards keep swimmers safe?" with a whistle note and a lifeguard-class note.
- `js/data/lessons/T-SS.js` lines 1195-1208 and 1918: the Splash Day passage ("a lifeguard watches", "a lifeguard is always on duty", "a grown-up close by") and its heading item.
- p3's lines 2, 7 and 9 repeat the same safety facts, and five core items (C06-C10) and Together content sit on p3.
- Under the batch rules a topic reused across lessons is a MUST. B3 treated the same fault as MUST (S10, C11).
- **Fix.** Change the p3 topic to one with no match in `js/data` (a bike or crosswalk topic checks out in my grep, but the author should re-run the grep). If the topic stays, the duplicate lessons need a reviewer decision.

### SHOULD

**S1. Clue and h2 name the key's property.**
- P4: the clue and h2 say "compare". Only the key shows peanut, bean and pea together.
- P5: h2 "what the farmers use" points straight at the key's "machine".
- S01: h2 "notice what changes" names the one property only the key shows.
- Each still leaves at least 2 live choices, so these are not MUST. **Fix:** h2 should say where to look ("read the title and both sentences") and leave the property to the child.

**S2. Peanut topic and key facts are heavily reused.**
- The legacy p1 facts (yellow flowers, peg, Georgia first, not true nuts) also sit in T-RA (lines 1006-1015), T-T2 (the "Peanuts" draft at 3359ff), T-SS (about line 103), L-V3 (line 810) and W-REV-02.
- My 6-gram scan found "georgia grows more peanuts than any other state" in L-V3 and the peg sentence in T-SS.
- p1 is legacy. The new items C03, C04 and C05 add to the reuse. Consider building C03-C05 on a second, unused topic.

**S3. C06: word-matching key.** The key repeats "life jackets" and "lifeguard" from the poster. No decoy shares any poster word. **Fix:** add decoys that use poster words but do not fit (for example "an empty lifeguard chair beside a closed pool").

**S4. C08 option B and C13 Sign B.**
- C08: "New swimmers should stay close to a grown-up." is poster line 4, and it fits the photo reasonably. The key rests on h1's definition of a caption. Make the key's edge clearer: the decoy is a rule, not what the photo shows.
- C13: `how` says Sign B "thanks people after the sale", but the stem never says the sale has happened. "Our class raised $140" could be an earlier fundraiser. S13 is clearer ("Thank you for coming to our play!"). **Fix:** make Sign B's words plainly refer to a finished sale.

**S5. Decoys are too easy.**
- C05: "silly song about a squirrel", "tiny numbers", "Buy some today!".
- C07: "all the words in smaller letters" and "taking the pictures down".
- C12: the clipboard, the worn-out ball and the stadium.
- S05 and S12 have the same problem (a movie star, a stop sign).
- This keeps the live count passable but makes the items easy. **Fix:** make at least one decoy per item plausible.

**S6. S13, S12 and S04 score 0.25 to 0.29.** They are over the 0.21 line (see M2). S13 copies C13's A/B sign structure and key sentence. Refresh the frames.

**S7. Watch Me does not model the fifteen.**
- The 3 Watch Me items model picture fit, a caption and a change of audience.
- They do not model labels (C04, C09, C15, S04, S09, S15), sounds (P5, C11, S02, S11), removing an off-purpose line (C10, S10) or the choose-two format.
- The teach points cover labels, sounds and the removal of off-purpose lines. Add one Watch Me for a label, or one that covers a sound and a removed line.

### NOTE

- **N1. Labels by word match.** C04, C09, S04 and S09 reward matching the key to words already in the stem or slide ("shallow end", "Swings", "Front pocket"). The keys are acceptable because the failure modes (too long, wrong part) are real, but the word match is a free shortcut.
- **N2. Sound items.** P5, C11, S02 and S11 are four sound items in one lesson, in the same "which sound fits" format. Distinctness holds (different passages and facts), but the format is repeated.
- **N3. Wolves.** C11's key fact (wolves howl to call one another) is a decoy in T-RA S02 (line 4507). I judge it acceptable because it is a decoy in a different skill.
- **N4. FK.** The passages pass: p1 about 4.0, p2 2.7, p3 2.6 and p4 3.8, with `readability.py` giving 3.2, 2.7, 2.6 and 3.8. Item text (stems and options joined into sentences) is at or under 4.5 except C05 5.0, C06 4.8 and C14 6.0 (long caption options). This is a heuristic.
- **N5. Author-log DOK.** The log's DOK column disagrees with the lesson for several items (C06 log 3 vs lesson 2; C11 log 2 vs 3; C13 log 2 vs 3; P4 log 2 vs 3). The lesson's own values give 7 items at DOK 2 and 8 at DOK 3, which is a fine mix. Update the log.
- **N6. Passage-to-answer, 'like' mappings and points.**
  - Every `like` points to the right core item: S01 to P4, S02 to P5, and S03-S15 to C03-C15.
  - Points are right: ms/dropdown/match double items = 2, the rest = 1.
  - The grade-3 level is fine and nothing reads as kindergarten.
- **N7. Official wording.**
  - "Create multimodal texts, using features of pre-selected modes for a specific purpose and audience."
  - Covered: modes and features (pictures C06/C12, captions C03/C08/C14, labels C04/C09/C15, sound P5/C11, size and wording C07/S07); purpose (C05, C10, C13); audience (C05, C07, C12).
  - "Create" is judged through plans and choices. That is the usual limit for a selected-response item. The `write` task covers actual creation.

### Pre-answering and leakage

- I found no item that gives away another item in a set, and none between core and Together P1-P5. The P1-P3 keys (labelled stalk drawing, "dry in the sun" caption, yellow flower and peanut under the soil) are not echoed in core keys.
- I found no 6-gram overlap of the new items with other lessons beyond stock phrases ("a common mix-up is choosing", "choose the best answer for each blank", "on the test you may be asked"). The peanut sentences above are the exception (S2).
- Order-by-number labels: C10's ten numbered lines match the passage; h3 names line 6, `how` names line 5 and line 10, and the browser shows ten lines numbered (1) to (10). The off-purpose line was renumbered consistently. C09 is a match item with columns, not a numbered list, and its rows are consistent with its `how`.

## 4. `cr` items

There are no `cr` items in this lesson. The `write` task (poster, caption, one label, sound idea) has a checklist that matches what the core items practise. No sample answer exists to judge.

## 5. Facts and sources

| Claim | Result | URL |
|---|---|---|
| A wolf pack is a family: mother, father and young | Supported ("mom, dad, and offspring") | https://kids.nationalgeographic.com/animals/mammals/gray-wolf/ |
| Wolf calls carry for miles | Supported (a pack's howl can be heard from ten miles away) | https://kids.nationalgeographic.com/animals/mammals/gray-wolf/ |
| Strong sense of smell | Supported (100 times a human's) | https://kids.nationalgeographic.com/animals/mammals/gray-wolf/ |
| Wolves howl to warn of danger and to find each other | Supported | https://en.wikipedia.org/wiki/Howling |
| Peanuts dug up, inverted and left to dry in the field a few days, then combined | Supported (two or three days after digging) | https://fieldreport.caes.uga.edu/publications/B1087/peanut-digger-and-combine-efficiency/ |
| Pool safety: lifeguards, buddy, arm's reach for new swimmers | Supported, with differences: life jackets mentioned for non-swimmers; "never swim alone" is stated as "swim with a buddy"; "rest when tired" is not on that page | https://www.redcross.org/about-us/news-and-events/news/2018/water-safety-tips-for-the-pool--beach-and-water-park.html |
| Spring peeper: small, X-shaped mark on the back, male vocal sac, "sleigh bells" chorus, spring calling | Supported | https://en.wikipedia.org/wiki/Spring_peeper |

Not verified: "peepers stop singing when they hear someone coming" (the Wikipedia page does not say it; it is widely reported). Georgia as the top peanut state is stated on legacy p1 and was not re-checked here (it was already in the repo and is well known).

## 6. Browser run (390 x 844)

`node verification/serve.js . 8841`, Playwright (`scratchpad/c1c/br.py`, using the helpers from `verification/practice-own.py`). I worked all 15 core items in order across the 3 sets: opened the three hints, then Show me how, then set the correct answer and clicked Check my answer.
- Check my answer, the hint button, Show me how and Try a similar question were present on all 15 items.
- The three hints appeared and the hint button then disabled itself on all 15.
- After Show me how the feedback read "You used Show me how first, so this one counts as answer shown" on each item, as designed.
- No page errors. The only console error was the blocked Google Fonts request. There was no horizontal scroll on any item.
- Screenshot of C10: `scratchpad/c1c/c10.png`. It shows ten numbered lines, three hints, Show me how and the similar-question button, all without overflow.

## 7. Summary of what to change

1. Rewrite C15 and S15 so the keys cannot be found by word match (M1).
2. Replace or reshape S15, S14 and S09 (and refresh S13, S12 and S04) so each is a fresh application (M2).
3. Move p3 to a topic with no match in `js/data`, or get a decision on the overlap with T-RA and T-SS (M3).
4. Soften h2 and the clue in P4, P5 and S01 (S1).
5. Add one Watch Me that models a label or a sound (S7).

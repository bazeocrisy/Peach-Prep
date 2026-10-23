# B2 re-review SC-2: 3.T.SS.1.a and 3.T.C.1.b (final short check, after round 3)

**Role:** independent reviewer. I had not seen these lessons before. I read `B2-rereview-SC.md` and the author log only after my blind answers were saved.

**Scope:**
- `js/data/lessons/T-SS.js`, the 3.T.SS.1.a block only;
- `js/data/lessons/T-C.js`, the 3.T.C.1.b block: P5, P8, P10 and C03, plus the dam/pond check across the whole block;
- `assets/figures/tc1b-beaver-webpage.svg`.

**Read-only:** this file is the only repository file I wrote. Scratch files are in `scratchpad/b2rr-sc2/`. I ran no git.

**Data freshness:** I reloaded the data before I started. T-C.js was last written at 05:00:53 and T-SS.js at 04:58:40, and neither changed during the review (re-checked at the end). `node verification/check-content.js --all` returns PASS, with 0 failures.

## 1. Blind solve (Step 1)

**Method:**
- `b2rr-sc2/blind.js` loads the lessons through a stub `PP.addLesson`.
- It prints the six items with their passages, figure alt text and stems, and shuffles the choices with seed 20261023.
- It strips `correct`, `answer`, `why`, `clue`, `hints`, `how` and `misconception`. A first run leaked the `answer` field of the two hot-text items. I saw the leak in a grep count, fixed the script and re-ran it before I read the output.
- Answers were saved to `b2rr-sc2/answers.json` before `b2rr-sc2/cmp.js` pulled the keys.

**Honesty note:** the solve of **TC1b C03 was not blind.** A structure probe that printed truncated JSON showed C03's first choice with `"correct":true` before I solved it. The other five items were solved blind.

**Result: 6 of 6 agree (5 of 5 fully blind).**

| Item | My answer | Key | Agree |
|---|---|---|---|
| SS1a C10 (pick 2) | "Chapter 4 has a section called 'Inside the Bookmobile.'" + "The section 'A Long Way to Town' is part of Chapter 4." | same | yes |
| SS1a C13 (hot text) | p4:3:1 "Both kinds of bats have a thin handle and a thick barrel." | same | yes |
| TC1b P5 (pick 2) | p1:5:3 + p1:5:4 (door under water; dry room) | same | yes |
| TC1b P8 | "A beaver chews through a small tree with its strong front teeth." | same | yes |
| TC1b P10 | "what sound plays in the video" / "open a page about beaver lodges" | same | yes |
| TC1b C03 | "…stay underwater for up to fifteen minutes." | same | yes (not blind) |

Each item has one defensible answer. In C13, the new cup sentence (p4:3:5) was a real competitor: it names the barrel. I rejected it only because the diagram shows no cup. That is the intended reasoning.

## 2. Whole-ladder audit (Step 2)

I used the AUTHOR-BRIEF definition of a live choice: a choice is live only if a child who has read the clue and hints 1 to 3 still has a real reason to pick it. **A choice that the hints' logic rules out is dead, even if no hint names it.** A choice the child must reject by doing the item's own reasoning stays live.

K = key. "−X" means that step removes X.

### 2.1 3.T.SS.1.a (all core and similar items)

| Item | Choices | Clue + h1 | h2 | After h3 (whole ladder) | Flag |
|---|---|---|---|---|---|
| P5 | K extra fact; planting steps; why underground; like cotton | all | all | −steps: K, underground, cotton | ok |
| P6 | K where; steps; roots; drying days | all | all | −steps: K, roots, days | ok |
| P7 | K Ch 3; Ch 2; Ch 1; Ch 4 | all | all | −Ch 2: K, Ch 1, Ch 4 | ok |
| C04 | K grow, then why; reversed; compare; problem | all | all | −problem: K, reversed, compare | ok |
| C05 slot 1 | K after growing; before planting; while flowers open | all | all | −before planting: K, while flowers | ok |
| C05 slot 2 | K order things happen; importance; alike/different | all | all | K, importance (alike/different weak) | ok |
| C06 (match) | 4 rows × 5 columns | all | all | sequence removed from one row; all rows open | ok |
| **C07** | K stops around county; library building; inside the bus | "a caption for a map tells what the **whole** map shows": −library (one mark), −inside | "look at the whole map, **not just one mark**": −library, explicitly | −inside: **K only** | **MUST-1** |
| C08 Part A | K how far; all stops in Millbrook; shelves; days | "where places are" weakens shelves | all | −days: K, stops in Millbrook (shelves weak) | ok |
| C08 Part B | K scale bar; north arrow; route lines; county name | all | all | "the part that shows the idea in your Part A answer": all four until Part A is decided | ok |
| C09 (pick 2) | K1, K2; T1 problem; T2 compares; both describe | all | all | −compares: K1, K2, problem, describe | ok |
| **C10** (pick 2) | K1, K2; book is a section; DYK is Ch 4's title; "Inside the Bookmobile" is Ch 4's title | the clue's definition (book > chapter > section): −book | "look at the headings in the article" | h3: DYK "is the heading of a box inside the article, **not the title of a whole chapter**". The same logic applies word for word to "Inside the Bookmobile", which h2 has just shown to be a heading inside the article: **K1, K2 only** | **MUST-2** |
| C11 | K From Tree to Bat; Wood or Metal?; Did You Know? | weakens DYK | "same words or action": "wood" in the label *wood shavings* keeps Wood or Metal? tempting | −DYK: K, Wood or Metal? | ok (round-3 fix holds) |
| C12 | K needs the one before; compares; crack; big-league | all | all | −compares: K, crack, big-league | ok |
| C13 (hot text) | K 3:1; 3:2; 3:4; 3:5 cup; 5:1; 5:4 | "match the labels": K, 3:5 | "names the same parts": K, 3:5 | −3:2: K, 3:5 | ok (round-3 fix holds) |
| C14 | K trouble and tries; steps of a job; compare; describe | all | all | −compare: K, steps, describe | ok |
| C15 slot 1 | K Ch 2; Ch 1; Ch 3 | all | all | "in the chapter about exploring, not about food": −Ch 3: K, Ch 1 | ok |
| C15 slot 2 | K 12; 2; 19 | all | all | −19: K, 2 ("Packing Your Bag" lure) | ok; neither slot settled |
| S01 | K order of growing; fun; compare; problem | all | all | −problem: K, fun, compare | ok |
| S02 | K alike/different; trouble; steps; what happened and why | all | "count the topics" (two) leans toward the only "two things" choice | −steps: K, trouble, why | ok (NOTE-1) |
| S03 | K map with key; caption; box; heading | all | all | −heading: K, caption, box | ok |

### 2.2 3.T.C.1.b (the four requested items)

| Item | Choices | Clue + h1 | h2 | After h3 (whole ladder) | Flag |
|---|---|---|---|---|---|
| P5 (core ref, pick 2) | K1 5:3 door; K2 5:4 dry room; 3:1 trees; 3:3 branches into the water; 9:2 tail on the water | all | "sentences that name the same parts" | −3:1: K1, K2, 3:3, 9:2 (both share the word *water* with the label "door under water") | ok; the strategy still favours the keys (NOTE-2) |
| C03 | K up to fifteen minutes; branches; dry room; tail slap | all | "what kind of fact is in the box?" | −tail: K, branches, dry room | ladder ok; item design SHOULD-1 |
| P8 (Together) | K chews tree; tail slap; swims into lodge; floats on back | the clue's "cross out captions about things you cannot see" is the item's own reasoning | all | −swims: K, tail, floats | ok (NOTE-3) |
| P10 slot 1 (Together) | K sound; narrator's words; what the beaver is building | all | all | −narrator: K, building (the pile of branches in the still keeps it tempting) | ok |
| P10 slot 2 | K lodges page; play the video; what *branch* means | all | all | −play video: K, branch meaning | ok; h3 removes one option per blank and settles neither |

**Figure check.** I rendered `tc1b-beaver-webpage.svg` with Playwright Chromium (`b2rr-sc2/webpage.png`). It matches P10 and its alt text:
- Three tabs (Home, **Beavers** with a heavy border, Otters).
- The heading Busy Builders.
- A video still with a play button and a pile of branches in the water.
- A dark caption bar reading "[water rushing]" and "NARRATOR: Beavers carry branches in their mouths."
- The line "Beavers cut and carry wood."
- An underlined link, "Next page: Beaver lodges".

No dam and no water spilling over the pile. "Beavers" fits its tab. The figure shows no person.

## 3. Earlier review (Step 3)

### 3.1 The three MUSTs from B2-rereview-SC

| Finding | Status |
|---|---|
| MUST-1, SS1a C08 hint 3 settled both parts | **Cleared.** Hint 3 is the reviewer's wording, word for word. Part A keeps two live choices, Part B four. |
| MUST-2, SS1a C07 and C11 | **C11 cleared.** **C07 not cleared:** the new hint 3 removes the weak option as asked, but hint 2 still says "not just one mark" and the clue/h1 still says "the whole map". Together those kill the library-building caption, the very mix-up the fix meant to keep live. See MUST-1 below. The earlier reviewer's own table read h2 as neutral, so the fix it proposed missed this. |
| MUST-3, SS1a C10 | **Partly cleared.** The distractor swap, the trimmed hint 1, the neutral hint 2 and the "test against the stem" ending are all in the data. But hint 3's reason for removing DYK ("the heading of a box inside the article, not the title of a whole chapter") also removes the new distractor. See MUST-2 below. |

### 3.2 The SHOULDs

| Finding | Status |
|---|---|
| SHOULD-1, SS1a C13 | **Cleared.** p4:3:5 ("Some bats have a small cup cut into the end of the barrel.") is in the passage and in `targets`, and it was a real competitor in my blind solve. |
| SHOULD-1, TC1b P5 | **Cleared as specified.** The targets are 3:1, 3:3, 5:3, 5:4 and 9:2; bark (3:2) is gone. The keys still repeat the label words (NOTE-2). |
| SHOULD-2, SS1a C04 `how`/`why` | **Cleared.** Both now say the two sections "follow the peanut from planting to harvest". |
| SHOULD-3, TC1b P9 teeth fact | **Cleared.** See §3.4. |
| SHOULD-4, dam link in P8 and P10 | **Cleared.** See §3.3. |
| SHOULD-5, no SS1a ladder table | **Cleared in form.** §4.2 exists, but its C07 and C10 rows are wrong (§3.5). |
| NOTE-1 (P2 hint 3), NOTE-8 (teach point 7, C03 wording) | **Cleared.** P2 hint 3 is the suggested wording. Teach point 7 now says "help listeners follow along". C03 says "up to fifteen minutes". |

### 3.3 Dam-to-pond chain (TS-CE form A T1)

I searched the whole 3.T.C.1.b lesson object (passages, practice, core, similar, addons, teach and test) for dam, stream and flood: **0 hits**.

"Pond" remains only as a setting:
- the title "Life in a Beaver Pond";
- "In the pond, beavers build a home called a lodge";
- the lodge diagram's alt text;
- P8's distractor "floats on its back in the pond";
- C04's lodge-heading wording;
- an unrelated frog caption.

None of them links sticks or mud to a dam, or a dam to a pond. **No part of T1's chain remains.**

### 3.4 Beaver teeth sentence

P9 now reads: "A beaver's front teeth have iron in them, and that makes them extra strong!"

This is consistent with Chemistry World, which says: "Iron-enriched enamel gives rodents' teeth strength, but not their characteristic orange colour, as was previously believed." The filled pockets are "believed to play a major role in both the mechanical strength and acid resistance of rodent teeth." The seven species studied include the Eurasian beaver.

The sentence no longer claims the colour comes from iron. "Extra strong" is a fair grade-3 rendering of "gives … strength". The P9 addon `how` matches.
- Source: https://chemistryworld.com/news/rodents-striking-orange-teeth-not-down-to-iron-rich-enamel-as-thought/4019428.article

C03's key, "up to fifteen minutes", matches https://www.reconnectwithnature.org/news-events/the-buzz/nature-curiosity-how-do-beavers-hold-their-breath ("as long as 15 minutes").

### 3.5 Is the author log accurate?

**Accurate:** every "fix made" in §5.5 is present in the data, as far as I checked. That covers:
- the C08, C11 and C10 hint wording;
- the C10 distractor;
- the p4 sentence and target;
- the C04 `how`/`why`;
- the P2 hint 3;
- the P9 fact;
- the P8 distractor;
- the SVG text and title, and the P10 alt text and slot 2;
- the P5 target swap;
- teach point 7;
- the C03 wording.

§5.5's list of unaddressed items is honest.

**Inaccurate:**
- **§4.2 C07 row and §5.5 MUST-2 (C07):** "the 'one mark' mix-up stays live". It does not, because hint 2 tells the child to look at the whole map, "not just one mark".
- **§4.2 C10 row:** "K1, K2, Inside (only the stem refutes Inside)". Hint 3's own reason refutes it too.

Both are the same kind of error the earlier review found: a hint was checked in isolation, not as part of the whole ladder.

## 4. Findings

### MUST

**MUST-1. SS1a C07: the whole ladder leaves only the key.**
- **Evidence.**
  - The clue and hint 1 both say "A caption for a map tells what the whole map shows."
  - Hint 2: "Use the key to find what each mark on the map stands for. Then look at the whole map, not just one mark."
  - Hint 3 removes "What a bookmobile looks like inside".
  - "The library building in Millbrook" is one mark (the black square), so hint 2 rules it out directly. The item's `misconception` names exactly this ("choosing a caption for one part of a picture instead of the whole picture"), and the hints refute it before the child has to.
  - In a three-option, one-blank dropdown, that leaves only the key.
- **Fix** (keys and choices unchanged):
  - Clue and hint 1: "A caption tells what a picture shows. Read the map before you read the captions." This matches TC1b C07's shortened h1.
  - Hint 2: "Use the key to find what each mark on the map stands for." Delete "Then look at the whole map, not just one mark."
  - Keep hint 3. After the change, the key and the library caption stay live.

**MUST-2. SS1a C10: hint 3's reason also removes the replacement distractor, so the ladder leaves only the two keys.**
- **Evidence.**
  - The clue's definition (a book is split into chapters, and a chapter into sections) kills "The book … is one section of Chapter 4".
  - Hint 2 sends the child to "the headings in the article".
  - Hint 3 says "'Did You Know?' is the heading of a box inside the article, not the title of a whole chapter."
  - "Inside the Bookmobile" is also a heading inside the article, so the child is shown the identical inference. Only the two keys remain in a pick-two item.
  - The round-3 fix assumed only the stem refutes this distractor. Hint 3's general wording ("heading … inside the article, not the title of a whole chapter") does it as well.
- **Fix:** give hint 3 a box-specific reason that does not transfer to section headings. For example: "'Did You Know?' is a box with one short fact, and one fact cannot fill a whole chapter. Test the other sentences against the stem." Then "Inside the Bookmobile" can be refuted only by the stem ("The Library on Wheels" is Chapter 4), and three choices stay live. Update the log's §4.2 row.

### SHOULD

**SHOULD-1. TC1b C03: the prompt says "four more facts", but three of the four are already in the article.**
- **Evidence.**
  - "A beaver drags branches into the water to build with." restates p1:3:3.
  - "A beaver lodge has a dry room above the water." restates p1:5:4.
  - "A beaver slaps its tail on the water to warn others." restates p1:9:2.
  - Only the key is a new fact.
  - So "more facts" is inaccurate, and a child can answer by recognition ("which one isn't in the article yet?") rather than by judging which fact a section needs.
  - The ladder itself is fine (three live after h3), and the key is right. This is distractor design, not a giveaway, so it is a SHOULD.
- **Fix:** either change the prompt to "Here are four facts about beavers. Which one would fit best in the 'Did You Know?' box instead of in a section?", or, better, make the distractors **new** facts that clearly belong to a section. For example:
  - "Beavers pack mud into the lodge walls to keep out the cold."
  - "A beaver can carry a branch in its mouth while it swims."
  - "A beaver's tail slap can be heard far across the water."

  Keep the "why" logic (each one belongs in a section's big idea).

### NOTE

**NOTE-1. SS1a S02 hint 2 ("Count the topics the paragraph is about").** The count is two, and the key is the only choice that says "two things". It rules nothing out, so it passes the live rule. It is the strongest nudge in the similar set. Optional: "List the clue words. Then ask what job they do together."

**NOTE-2. TC1b P5 (legacy ref).** The two keys still repeat the label words "door under water" and "dry room". The swapped-in 3:3 and the existing 9:2 share only the word "water". This was accepted as a SHOULD fix done as specified. No further action is needed for B2.

**NOTE-3. TC1b P8 (Together).** All three wrong captions fail for the same single reason: there is no water in the picture. One observation removes them all. The new "floats on its back in the pond" does remove the dam link as intended. Optional: one dry-land wrong caption, for example "A beaver carries a branch back to its lodge."

**NOTE-4. Teach and glossary support C10.** The glossary entry "chapter: one of the big parts of a book; a chapter can have several sections inside it" matches the item's edge cases.

## 5. Verdicts

| Lesson | MUST | SHOULD | NOTE | Verdict |
|---|---|---|---|---|
| 3.T.SS.1.a | 2 (MUST-1 C07 whole ladder; MUST-2 C10 h3 logic) | none | 1, 4 | **CHANGES REQUIRED.** Both fixes are hint-only, change no key or choice, and need only a ladder re-check, not a blind re-solve. |
| 3.T.C.1.b | 0 | SHOULD-1 (C03 distractors and prompt) | 2, 3 | **ACCEPTED.** SHOULD-1 is recommended. If C03's choices change, it needs a blind re-check. |

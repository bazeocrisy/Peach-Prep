# B2 re-review SC: 3.T.SS.1.a and 3.T.C.1.b (author b2d, after two fix rounds)

**Role:** independent re-reviewer. I did not write these lessons and had not reviewed them before. I read `B2-review-SC-1.md`, `B2-review-SC-2.md` and `B2-b2d-author-log.md` only after my blind answers were saved.

**Scope:**
- `js/data/lessons/T-SS.js`, the 3.T.SS.1.a block only;
- `js/data/lessons/T-C.js`, the 3.T.C.1.b block;
- figures `assets/figures/ss1a-c-*.svg`, `tc1b-c-*.svg` and `tc1b-beaver-webpage.svg`.

For leaks I also read both lessons' `test` (neither has `testB`), TS-CE form A and form B, and every other lesson file through a topic search.

**Read-only:** this file is the only repository file I wrote. Scratch files are in `scratchpad/b2rr-sc/`. I ran no git. The server on port 8796 was stopped when I finished (curl afterwards returns no connection).

## 1. Blind solve

**Method:**
- `b2rr-sc/load.js` evals the lesson files through a stub `PP.addLesson`.
- Before solving I printed only item ids, types and field *names*, not values.
- `b2rr-sc/blind.js` printed, for each lesson:
  - all passages with figure alt text;
  - every Together item (practice minus core refs);
  - every core item in set order, with each `{ref}` resolved;
  - every similar item.
- Choices, hot-text targets, order steps and dropdown options were shuffled with seed 4242017. No `correct`, `answer`, `why`, `clue`, `hints`, `how` or `misconception` was printed.
- I rendered all seven figures to PNG with Playwright Chromium (`b2rr-sc/fig-*.png`) and looked at them before solving the figure items.
- Answers were saved to `b2rr-sc/answers.json`, with notes in `b2rr-sc/notes-blind.txt`, before `b2rr-sc/cmp.js` pulled the keys.

**Result: 45 of 45 agree (100%).**

| Lesson | Together | Core | Similar | Total |
|---|---|---|---|---|
| 3.T.SS.1.a | 4/4 | 15/15 | 3/3 | 22/22 |
| 3.T.C.1.b | 5/5 | 15/15 | 3/3 | 23/23 |

Every core item, every similar item and every Together item agrees, including every item on the author log's §6 re-solve list.

**How blind it was (disclosure):**
- **The solve was blind on keys.** I opened no lesson source, author log or review before saving.
- **My task message named some content,** though no key: the P10 figure's narrator line, the facts that P6 left core and P4 came in as a ref, and the DOK 3 and cause/effect questions.
- **I could see file names** in the earlier reviewers' scratch folders (for example `ss1a-c-peanut-harvest.png`), but I opened none of them.
- **My printer did not shuffle match rows.** On two Together items (SS1a P4, TC1b P6), the key is the diagonal, so those two results are weak evidence. The core match item C06 is not diagonal.
- **TC1b C08's steps were printed out of key order** (S1, S4, S2, S3), so that result is clean.

**Close calls while solving:**
- **SS1a C04.** "Harvest Time" is about gathering, not strictly about how the plant grows. The key is still clearly the best choice (see SHOULD-2).
- **SS1a C08 Part B.** The route lines show the trip but not the distance. The scale bar is the only defensible key.
- **TC1b C04.** The "want to find out the secret" key is an effect claim. Teach point 1 supports it.

## 2. Points, formats, DOK, gate

- **Points.**
  - Core totals are 21 for SS1a and 21 for TC1b.
  - Every `ms` item, the `ebsr` and both 2-pt `match` items are worth 2.
  - Every two-slot dropdown is worth 2.
  - TC1b P5 (hot text, pick two) is worth 2.
  - The four-step order item TC1b C08 is worth 2.
- **Formats.** Each lesson has six `mc` items, which is the cap. SS1a uses six formats and TC1b uses five.
- **DOK.**
  - SS1a: C04 and C12 are DOK 3, and P7 (a legacy ref) is DOK 1. See §5 and NOTE-4.
  - TC1b: C05 and C12 are DOK 3.
- **Gate.** `node verification/check-content.js --all`: PASS, 0 failures. Each lesson shows the usual "11 of 15 core items have no similar item" warning.
- **Readability.** I did not re-run it. The author log reports all four new passages in range.

## 3. Whole-ladder audit (Step 2)

**What "live" means here.** I used the AUTHOR-BRIEF definition: a choice is live only if a child who has read the clue and hints 1 to 3 still has a real reason to pick it. A choice is dead if a hint's own statement rules it out. A choice is still live if the child has to do the item's own reasoning to reject it.

K = key. "−X" means hint n removes X.

**Practice Together and its hints.** Together runs in practice mode, not "own" mode. In that mode `player.js` renders the authored `hints` only when `run.own` is set (player.js:370, 486), so the Together addon hints do not appear in Practice Together today; it keeps the clue, narrow and walk-through ladder. I audited the Together ladders anyway, because the addons are merged and the rules apply to them.

### 3.1 3.T.SS.1.a

| Item | Choices | After h1 | After h2 | After h3 (whole ladder) | Flag |
|---|---|---|---|---|---|
| P1 (Together) | K steps; two plants alike; problem; soil | all | all | −alike: K, problem, soil | ok |
| P2 (Together, hottext) | K 7:3; 7:1; 7:2 | all | all | −7:2 (cause); "look for a clue word that links back" leaves only 7:3 | **only K** (dormant in Together, NOTE-1) |
| P3 (Together) | K gather; soil; flower | all | all | −flower: K, soil | ok |
| P4 (Together, match) | 4 rows | all | all | the compare row is settled; three rows open | ok |
| P5 | K extra fact; planting steps; why underground; like cotton | all | all | −steps: K, underground, cotton | ok |
| P6 | K where; steps; roots; drying days | all | all | −steps: K, roots, days | ok |
| P7 | K Ch 3; Ch 2; Ch 1; Ch 4 | all | all | −Ch 2: K, Ch 1, Ch 4 | ok |
| C04 | K grow then why; reversed; problem; compare | all | all | −problem: K, reversed, compare | ok |
| C05 slot 1 | K after growing; before planting; while flowers open | all | all | −before planting: K, while flowers | ok |
| C05 slot 2 | K order things happen; importance; alike/different | all | all | "what kind of order" removes alike/different: K, importance | ok, each slot has two live options |
| C06 (match) | 4 rows × 5 columns | all | all | sequence removed for one row; all rows open | ok |
| C07 | K stops around county; library building; inside the bus | h1 ("a caption for a map tells what the whole map shows") kills *inside the bus*: K, library | K, library | −library: **K only** | **MUST-2** |
| C08 Part A | K how far; all stops in Millbrook; shelves; days | all | all | −days, then Part B's half of h3 says the evidence measures "how far apart two places are": **K only** | **MUST-1** |
| C08 Part B | K scale bar; north arrow; route lines; county name | all | all | "lets you measure how far apart": K (route lines barely) | **MUST-1** |
| C09 (pick 2) | K1, K2; T1 problem; T2 compares; both describe | all | all | −compares: K1, K2, problem, describe | ok |
| C10 (pick 2) | K1, K2; book is a section; "Did You Know?" is Ch 4's title; each section is a book | h1's definition (book > chapter > section) kills *book is a section* and *section is a book*: K1, K2, DYK | same | −DYK: **K1, K2 only** | **MUST-3** |
| C11 | K From Tree to Bat; Wood or Metal?; Did You Know? | h1/h2 ("the same things the picture shows"; "the same words or action" as the labels billet, blade, shavings) kill DYK: K, Wood or Metal? | same | −Wood or Metal?: **K only** | **MUST-2** |
| C12 | K needs the one before; compares; crack; big-league | all | all | −compares: K, crack, big-league | ok |
| C13 (hottext) | K 3:1; 3:2 hollow; 3:4 crack; 5:1 billets; 5:4 coat | h1 "match the labels to the words": only 3:1 names a labelled part | same | −hollow: **K only by the strategy itself** | **SHOULD-1** (item design) |
| C14 | K trouble and tries; steps of a job; compare; describe | all | all | −compare: K, steps, describe | ok |
| C15 slot 1 | K Ch 2; Ch 1; Ch 3 | all | all | −Ch 3: K, Ch 1 ("Packing Your Bag" lure) | ok |
| C15 slot 2 | K 12; 2; 19 | all | all | −19: K, 2 | ok |
| S01 | K order of growing; fun; compare; problem | all | all | −problem: K, fun, compare | ok |
| S02 | K alike/different; trouble; steps; what happened and why | all | all | −steps: K, trouble, why | ok |
| S03 | K map with key; fun-fact box; heading; caption | all | all | −heading: K, box, caption | ok |

### 3.2 3.T.C.1.b

| Item | Choices | After h1 | After h2 | After h3 (whole ladder) | Flag |
|---|---|---|---|---|---|
| P1 (Together) | K Tail Talk; Busy Builders; Secret Door; DYK | all | all | −Busy: K, Secret Door, DYK | ok |
| P8 (Together) | K chews tree; tail slap; swims into lodge; dam | all | all | −swims: K, tail, dam | ok |
| P9 (Together) | K next fact matters; talk over; asks question; where they live | all | all | −over: K, question, where | ok |
| P10 (Together) slot 1 | K sound; narrator's words; what it builds | all | all | −narrator: K, builds | ok |
| P10 slot 2 | K opens lodges page; plays video; defines dam | all | all | −plays video: K, defines dam | ok |
| P6 (Together, match) | 4 rows | all | all | the heading row is settled; three rows open | ok |
| P5 (pick 2) | K1 5:3, K2 5:4; 3:1 trees; 3:2 bark; 9:2 tail | all | h2 "sentences that name the same parts" (dry room, door under water): only K1 and K2 use label words | −trees: **K1, K2 by the strategy itself** | **SHOULD-1** (legacy ref) |
| P4 | K important + glossary; text box; heading; whole-article topic | all | all | −heading: K, topic (box weak) | ok |
| C03 | K fifteen minutes; branches; dry room; tail slap | all | all | −tail: K, branches, dry room | ok |
| C04 (pick 2) | K1 home; K2 secret; defines lodge; animals; step order | all | all | −animals: K1, K2, lodge, order | ok |
| C05 | K say what's next; repeat lodge line; point at own book; skip heading | all | −point (not heard) | K, repeat, skip | ok |
| C06 | K gravity; faucets; showers; pipe | all | all | −pipe ("only once"; showers also fails that test): K, faucets | ok |
| C07 | K whole trip; pump; million gallons | all | all | −pump: K, gallons (the "true fact not in the diagram" lure) | ok |
| C08 (order) | four steps | all | all | the last step is fixed; three still to order | ok, one step |
| C09 (pick 2) | K1 filling; K2 splashing; heading; labels; fact box | all | all | −heading: K1, K2, labels, box | ok |
| C10 | K [pump humming]; NARRATOR line; PUMP: line | all | all | −NARRATOR: K, PUMP: | ok |
| C11 (hottext) | K starting blocks; lane lines; dark line; T; flags | all | all | −T: K, lane lines, dark line, flags | ok |
| C12 | K labels name helpers; winning; speed; backstroke meaning | all | all | "no swimmers" removes winning and speed: K, backstroke | ok (NOTE-7) |
| C13 (pick 2) | K1 play button; K2 link; heading; photo; box | all | all | −heading: K1, K2, photo, box | ok |
| C14 (pick 2) | K1 announce three; K2 first/next/last; numbers on card; box on card; one long sentence | all | −card items | K1, K2, long sentence | ok (three live for pick two) |
| C15 | K excitement; crowd; Maya next; podcast ends | all | −Maya next (Dev speaks after) | −crowd: K, ends | ok |
| S01 | K speed fact; ticket; seat; stop | all | all | −ticket: K, seat, stop | ok |
| S02 | K play button; search; link; Visit tab | all | all | −link: K, search, Visit | ok |
| S03 | K say what's next; darker headings; faster; skip | all | −skip | −darker: K, faster | ok |

### 3.3 Inside sets, Together, and checks

**Inside sets** (an earlier `why` or `how` against a later item):
- **SS1a set 1.** C04's `how` names the sections as about the plant or about why farmers like it. It does not state C05's order. Clear.
- **SS1a set 2.**
  - C06's `why` says the farm families "live far from the library", which makes "far" salient before C08. But the passage says it too, and C08 asks how the *map* helps. Clear.
  - C07's `how` (stops spread around the county) does not mention the scale bar. Clear.
- **SS1a set 3.** C11's `how` (a machine spins the billet) does not answer C12's "why time order". Clear.
- **TC1b set 1.**
  - P4's key (the glossary explains lodge) removes in advance C04's distractor "It tells what the bold word lodge means". It is a distractor, not a key, so this is NOTE-6.
  - C03's `how` names "Tail Talk" as the tail-slap section. That does not settle C05, whose distractors are about whether a choice can be heard.
- **TC1b set 2.**
  - C09's `how` says the caption line "shows a splashing sound". That repeats the Teach rule C10 applies, not C10's key. Clear.
  - C07's key does not state C08's order.
- **TC1b set 3.** C11's `how` lists the three labels just before C12, whose key is "Its labels name each helper". That primes C12, but it does not eliminate its live distractor (backstroke). NOTE-7.

**Together against set 1:**
- **SS1a.** The P3 addon hint 3 says peanut flowers come "before the harvest", which weakens C05 slot 1's "while the flowers are still open". That hint is not rendered in Together mode (above), and P3's `clue` and `why` do not say it. NOTE-1.
- **TC1b.**
  - P6's row "gives an extra fact set apart" gives the box rule. C03 still makes the child check which of four facts each section already holds. Clear.
  - P9 (emphasis) does not answer C05 (a new part starting). Clear.

**Into test and testB** (neither lesson has form B):
- **SS1a form A** uses p2 (gopher tortoise), which no Together, core or similar item uses. Its cause/effect and problem/solution items (T1 to T3), caption (T4) and heading (T5) are practised on other texts. No answer, passage or key fact is shared.
- **TC1b form A** uses p2 (monarchs), which no core or similar item uses. C10 constructs a sound line, while T9 asks what a line tells. C13 is about web-only features, while T8 asks where to tap. These share skills, not answers.
- **Together P10** (pre-existing) uses T9's frame ("[brackets] tell what sound plays" against "the narrator's words") and T8's link frame. See NOTE-3.

**Into other lessons' checks: TS-CE form A, beaver.**
- **T1 (the chain).** TC1b p1 no longer has the dam or pond. Together P8 keeps the wrong caption "A beaver pushes sticks and mud into a stream to build a dam." Together P10's figure says "Beavers use sticks and mud." and "The dam slows the rushing water." Read together, those two restate T1's first link (sticks and mud form a dam; the dam stops the water). See §5.1 and SHOULD-4.
- **T2 (the lodge cause).** p1 now says only "Its doors are under the water." The hunters clause is gone, and no TC1b item states the cause/effect. Clear.
- **T5** ("since" for "because"). Nothing in TC1b touches it. Clear.
- **TS-CE form B** (sea oats). No overlap.

**Topic and key-fact search.** I searched all of `js/data/lessons/*.js` by topic and by passage, not only by n-gram (`b2rr-sc/topic.js`).

| New topic or fact | Elsewhere | Verdict |
|---|---|---|
| Bookmobile, Pine County, scale bar | none | clear |
| Wooden bat making, billet, lathe | none | clear |
| Water tower, gravity, faucet | "gravity" only in 3.T.RA.1.b's moon page (T6, T7): another topic | clear |
| Pool lanes, backstroke flags, starting blocks | none | clear |
| Lost jackets / lost-and-found | only grammar sentences mention jackets | clear |
| Camping table of contents, bears | 3.T.SS.2.a form B "A Letter from Camp" (idioms) and TS-CC "Canoe or Kayak?" | different topics and keys; clear |
| Hot vs packed lunch (S02) | 3.T.T.2.c C15 mentions "a packed lunch" in passing | clear |
| Growing tomatoes (S01) | 3.T.T.2.a C05 (Grandpa's tomato main idea), 3.L.V.3.e form A garden | generic garden context; no key shared; clear |
| Podcast, drumroll; Riding the Train | none ("train" appears only incidentally elsewhere) | clear |
| Beaver underwater fifteen minutes; teeth orange from iron | none | clear (but see SHOULD-3 on accuracy) |
| Peanuts (p1, legacy) | 3.L.V.3, 3.T.C.1.c (Kenji's slides), 3.T.T.2.d, 3.T.RA | pre-existing; no new item reuses their keys now that the harvest drawing is gone |
| Beaver (p1, legacy) | TS-CE form A p2, 3.T.T.2.c teach | pre-existing; see SHOULD-4 |

## 4. Earlier findings (Step 3)

**SC-1:**

| Finding | Status |
|---|---|
| MUST-1 (C07 Part B answerable without the map) | Cleared as designed: the item is now C08, and Part B asks for map parts. **But the new hint 3, which follows SC-1's own suggested wording, settles Part B and through it Part A.** See MUST-1 |
| MUST-2 (TC C06 h3 test) | Cleared. Hint 3 now removes only pipe, and two choices stay live |
| MUST-3 (TC C04 h1 states the key) | Cleared |
| SHOULD-1 (P3 pre-teaches C04) | Cleared: C04 is a new whole-text item, and the harvest drawing is deleted (`ls` confirms) |
| SHOULD-2 (DOK inflated) | Cleared: C05 and C14 are relabelled; C04 and C12 are DOK 3 |
| SHOULD-3 (captions and cause/effect thin) | Cleared: C07 is a caption item; p3 has "What Changed" and C06 has a cause/effect row |
| SHOULD-4 (P6 gives away C03) | Cleared: C03 is redesigned, and P6 is out of core |
| SHOULD-5 (C15 effect rule not taught) | Cleared (teach point 7) |
| SHOULD-6 (C07 key) | Cleared |
| SHOULD-7 (C10 h1) | Moot: C10 is a new item, and its h1 states no rule |
| SHOULD-8 (similar hints) | Cleared on S02 and S03 in both lessons |

**SC-2:**

| Finding | Status |
|---|---|
| SS-MUST-1 (peanut collision) | Cleared |
| SS-MUST-2 (C07 h2) | Cleared in hint 2. Hint 3 now fails instead (MUST-1) |
| SS-MUST-3 (rug item) | Cleared: the item is gone |
| SS-MUST-4 (S03 h1) | Cleared |
| SS-SHOULD-1 to SS-SHOULD-9 | Cleared as the log says. I checked each against the data |
| SS-SHOULD-10 (shared frames) | Partly done, and the log says so honestly. SS1a C13 still shares TC1b P5's frame |
| TC-MUST-1 (C05 h2) | Cleared |
| TC-MUST-2 (S02 hints) | Cleared |
| TC-MUST-3 (C11/C12 conflict) | Cleared: the starting blocks now open p4, outside "helpers"; the order is swapped; the key is reworded |
| TC-SHOULD-1 (C09/C10 copy T8/T9) | Cleared for core. Together P10 still has T8/T9's frames (pre-existing; NOTE-3) |
| TC-SHOULD-2 (lodge cause) | Cleared, and the dam chain is also gone from p1. Some dam content remains in P8 and P10 (SHOULD-4) |
| TC-SHOULD-3 to TC-SHOULD-6 | Cleared or moot |

**Does the author log claim anything that was not done?** Every "fix made" row in §5.1, §5.2 and §5.4 matches the data. Four statements are inaccurate or incomplete:
1. **§4 treats C08's hint 3 as compliant.** It says hint 3 "settles Part B". In an EBSR item, settling Part B with the word "how far" also settles Part A, so the hint settles the whole item.
2. **§4 claims "whole ladders" for every core and similar item, but §4.1 tabulates TC1b only.** No SS1a table was written, and the four SS1a ladder failures below (C07, C08, C10, C11) are what such a table would have shown.
3. **§4.1 counts the bark and tail sentences as live for P5.** Hint 2's own test (sentences that name the labelled parts) rules them out.
4. **Two small wording slips.**
   - §5.4 says grep "found no other use of train". Train does appear incidentally in T-T1, L-GUM2, L-GUM4 and L-V12. There is no train topic or key fact, so the substance holds.
   - §5.2's C05 row quotes a hint 2 that §5.4 later replaced. The data has the §5.4 text.

The log's §5.3 list of findings not addressed is honest, and §6's re-solve list matches what changed.

## 5. Judgement calls (Step 4)

### 5.1 Together P10's "The dam slows the rushing water". Is that a giveaway of TS-CE T1?

**It is not a giveaway, but it is avoidable reuse. SHOULD-4.**
- **Why it is not a giveaway.**
  - T1 is a four-step order item. Its passage states the chain in reading order across paragraphs 2 and 3 ("pile the sticks, rocks and mud across a stream … This wall is called a dam. The dam blocks the moving water. As a result…").
  - The figure supplies at most the first link (sticks and mud, then a dam, then slower water). That is general knowledge the passage itself gives in order.
  - It says nothing about the pond forming or the animals moving in, which are the two steps a child could misplace.
- **Why it is still worth fixing.**
  - In round 2 the lead removed this exact chain from p1, on the grounds that "Busy Builders" walked T1's chain. Together P8's dam caption ("A beaver pushes sticks and mud into a stream to build a dam") and P10's figure ("Beavers use sticks and mud" plus "The dam slows the rushing water") put the same first link back. The two items are next to each other in Together.
  - The fix is cheap and changes no key.
- **Fix.**
  - In `tc1b-beaver-webpage.svg` and its alt text, change the narrator line to something off the chain, for example "NARRATOR: Beavers carry branches in their mouths."
  - Change P10's slot 2 distractors "play the video about the dam" and "tell what the word dam means" to "play the video about branches" and "tell what the word branch means".
  - Change P8's dam caption to another water-only scene, for example "A beaver floats on its back in the pond."

### 5.2 TC1b P4 now in core. Is it strong enough?

**Yes, as set 1's second item. NOTE-5.**
- **What works.**
  - It is the lesson's only glossary item, and it covers the "bold" part of print features.
  - Its distractors are now feature mix-ups: text box, heading, and the topic of the whole article.
  - After the full ladder, two choices stay live (the key and "names the topic of the whole article").
  - Its `how` is accurate.
- **Why it is on the easy side.**
  - The stem's second line quotes the glossary, and the key is the only choice that says "glossary". Hint 2 ("Read both lines of the stem") sends the child to that line.
  - It still passes the place rule, because line 1 (the section name) feeds the heading distractor.
  - DOK 2 is generous.
- **Optional strengthening.** Make one distractor mention the glossary too, for example "It shows the word is the first word listed in the glossary."

### 5.3 SS1a: at least two genuine DOK 3 items, and cause/effect coverage?

**DOK 3: yes, two, though both are at the light end. NOTE-4.**
- **C04 is a fair DOK 3.** The child maps the intro's two-part plan onto the order of all the headings, and must reject a reversed-order distractor. That is analysis across the whole text.
- **C12 ("why is time order a good choice") is DOK 3 by task type**, consistent with SC-1's view of its predecessor. In practice its three distractors are false statements about the steps, not competing reasons, so the child can drop to "which choice is true of the steps".
- **Optional strengthening for C12.** Add one competing structural reason, for example "Each step is more important than the one before it." That makes the child weigh why order matters.

**Cause/effect: yes, at the minimum. NOTE-4.**
- **In core:**
  - C06's "What Changed" row, which uses since, because and as a result;
  - C09's Text 2 key, "what happened and why".
- **Outside core:** Together P2 and the Teach example ("Why Puddles Dry Up") both model it.
- **What is missing.** No core item is wholly about cause and effect. Form A's T2 and T3 test cause and effect, and TS-CE teaches it in depth under the same code, so this is acceptable. A cause/effect similar item mapped to C06 would close the gap.

## 6. Findings

### MUST

**MUST-1. SS1a C08: hint 3 settles Part B, and through it Part A.**
- **Evidence.**
  - Hint 3 reads: "Nothing on the map shows days of the week… For Part B, ask which part of the map lets you measure how far apart two places are."
  - Part B: only the scale bar measures distance. The route lines, north arrow and county name are named in the `how` as "none of them measures distance".
  - Part A: hint 3 has just told the child that the supporting evidence is a distance. With "days" removed, "It shows how far the bookmobile stops are from the library" is the only distance choice. "All stops are inside Millbrook" and "shelves" are dead.
  - After hint 3, both parts are left with only the key. The author log §4 records "C08 hint 3 settles Part B" as within the rule. In an EBSR item it is not.
  - The wording came from SC-1's suggested fix, so the author followed advice. It still fails the post-B1 rule "Hint 3 may settle at most one blank … never the whole item".
- **Fix.** Hint 3: "Nothing on the map shows days of the week, so the map cannot tell when the bus visits. Check the other Part A choices against the map. For Part B, choose the part of the map that shows the idea in your Part A answer." Keep hint 2. Part A then has three live choices, and Part B four.

**MUST-2. SS1a C07 and C11: one-blank, three-option dropdowns where hint 3 removes the only plausible distractor.**
- **C07 (caption for the map).**
  - Hint 1 says "A caption for a map tells what the whole map shows", which kills "What a bookmobile looks like inside" (a map cannot show the inside of a bus).
  - Hint 3 then removes "The library building in Millbrook".
  - **Only the key is left.**
- **C11 (place the lathe drawing).**
  - Hints 1 and 2 tell the child to find the section with "the same words or the same action" as the labels (billet, blade, wood shavings), which kills "Did You Know?" (the box is about how many bats a player uses).
  - Hint 3 then removes "Wood or Metal?".
  - **Only the key is left.**
- **Compare TC1b.** TC1b's dropdowns C07 and C10 were tuned in round 2 so that hint 3 removes the weak option and leaves the misconception option live. SS1a's were not.
- **Fix:** have hint 3 remove the *weak* distractor, and leave the misconception that the item's `misconception` line already names.
  - **C07** hint 3: "A map has no picture of the inside of the bus, so that caption does not fit. Check the other choices against the whole map." The library-building caption, the "one mark" mix-up, stays live.
  - **C11** hint 3: "The 'Did You Know?' box tells how many bats a player uses, not how a bat is made. Check the other choices the same way." "Wood or Metal?", the "wood" word-match mix-up, stays live. The label "wood shavings" keeps it tempting.

**MUST-3. SS1a C10 (chapter and section): hint 1's definition plus hint 3 leave only the two keys.**
- **Evidence.**
  - Hint 1: "A book is split into chapters, and a chapter can be split into smaller sections. Each section often has its own heading." That definition directly contradicts two distractors, "The book … is one section of Chapter 4" and "Each section of Chapter 4 is a different book".
  - Hint 3 removes the third distractor, "'Did You Know?' is the title of Chapter 4".
  - The child is left choosing two of two. Both earlier reviews passed this item; it fails only under the post-B1 "live" definition.
- **Fix.**
  1. Replace "Each section of Chapter 4 is a different book." with a heading/chapter confusion that the definition alone does not settle: "'Inside the Bookmobile' is the title of Chapter 4." The stem, which says the article is Chapter 4, is what refutes it.
  2. Trim hint 1 to its first sentence. "Each section often has its own heading" would otherwise kill the new distractor too.
  3. Keep hint 3 on "Did You Know?".

  After that, the two keys and "Inside the Bookmobile" stay live.

### SHOULD

**SHOULD-1. Labels-to-sentence items where the strategy alone finds the key (SS1a C13; TC1b P5, a legacy ref).**
- **SS1a C13.** Only the key sentence names a labelled part (handle, barrel). Hint 1 ("Match the labels to the words") and hint 2 ("a sentence that names the same parts") therefore isolate it. SC-1 NOTE-7 suggested a distractor that names a part the diagram does not show; that was not done, and the log does not claim it was.
- **TC1b P5.** The two keys repeat the label words ("door under water", "dry room") almost exactly, and no other target uses them.
- **Why SHOULD and not MUST.** The hints only state the item's own strategy, so this is distractor weakness rather than a ladder giveaway.
- **Fix.**
  - **C13:** add a p4 sentence that names a labelled part but describes something the diagram cannot show, for example "Some bats have a small cup cut into the end of the barrel." Make it a target.
  - **P5:** swap the bark target for "Then they drag the branches into the water to use for building." It mentions water but is not a labelled part.

**SHOULD-2. SS1a C04's `how` and `why` contradict Together P3.**
- C04's `how` step 2 says "'From Flower to Peanut' and 'Harvest Time' are about the plant itself." Together P3's key says "Harvest Time" is about "how farmers gather the peanuts".
- C04's key is still the best answer.
- **Fix:** step 2 could say "'From Flower to Peanut' and 'Harvest Time' follow the peanut from planting to harvest. 'Why Peanuts Help the Soil' tells why farmers like peanuts." Make the same change in `why`.

**SHOULD-3. TC1b Together P9: the stem's fact is contradicted by recent research.**
- The ranger says: "A beaver's front teeth are orange, because they have iron in them!" The fact was added in round 2.
- A study reported by Chemistry World found that the iron-rich enamel gives strength but **not** the orange colour. When the orange layer was polished off, the iron-rich enamel underneath was white, and the colour is thought to come from the organic matrix.
- The key does not depend on the fact, but a ranger is presented as stating it as true.
- **Fix:** "A beaver's front teeth have iron in them, and that makes them extra strong!" This is still a surprising fact for "this next part is important".
- Source: https://chemistryworld.com/news/rodents-striking-orange-teeth-not-down-to-iron-rich-enamel-as-thought/4019428.article

**SHOULD-4. TC1b Together P8 and P10 keep the dam link of TS-CE form A T1's chain.** See §5.1 for the reasoning and the fix.

**SHOULD-5. The author log has no SS1a whole-ladder table.**
- The post-B1 rule says "write out which choices are left after each hint".
- §4.1 does that for TC1b only, and the three SS1a MUSTs are all ladder failures that such a table would have caught.
- **Fix:** add the SS1a table when MUST-1 to MUST-3 are fixed, and correct the §4 sentence on C08.

### NOTE

**NOTE-1. Together addon hints are not rendered in Practice Together.**
- `player.js` shows authored hints only in own mode (lines 370 and 486), so Together keeps the clue, narrow and walk-through ladder.
- That makes SS1a P2's ladder (only the key left after hint 3) and P3's hint 3 ("before the harvest", which weakens C05 slot 1) dormant today.
- If Together ever switches to authored hints, fix P2's hint 3. "Look for a clue word that links back to the cause" leaves only the "Because…" sentence. A better hint 3: "Read the first sentence again. Does it tell what happens later, or only what the plants are like?"

**NOTE-2. Figures.** I rendered all seven figures and they match their alt text.
- **Bookmobile map.** The nearest stop is about 10.5 miles from Millbrook, which only just clears "more than 10". The north arrow touches the clipped corner (cosmetic; the log acknowledges it).
- **Water tower.** Circle 2 now sits beside the down pipe, close to the right leg but clear of it.
- **Beaver web page.** "Beavers" fits its tab.
- **No figure shows a person.**

**NOTE-3. Together P10 (pre-existing) uses form A's T9 and T8 frames.**
- Slot 1 ("[water rushing] tells what sound plays", against "what words the narrator says") is T9's key and its leading distractor in another context.
- Slot 2 (underlined "Next page:" opens that page) is T8's slot 2 logic.
- The two items share skills, not answers. P10 predates B2 and is Together, so I am flagging it for the lead, not as a B2 fault.

**NOTE-4. DOK and coverage, SS1a.**
- See §5.3: two DOK 3 items, at the light end, and cause/effect at the minimum.
- P7 (a legacy ref) is DOK 1 and sits in core. That is acceptable as set 1's warm-up locate item, but it is the only DOK 1 item in either lesson's fifteen.

**NOTE-5. TC1b P4 in core is acceptable** (§5.2).

**NOTE-6. TC1b set 1: P4's key removes one of C04's distractors in advance.**
- P4's key (the glossary explains lodge) removes C04's "It tells what the bold word lodge means" before C04 is reached.
- C04 still has four live choices after its hints.

**NOTE-7. TC1b set 3: C11's `how` lists the labels just before C12.**
- C12's key is "Its labels name each helper…", so C11's `how` primes it.
- The backstroke distractor stays live, and C12's hint 3 removes two distractors with one fact ("no swimmers"). Both are within the rule.

**NOTE-8. Wording and facts.**
- **TC1b C03.** "About fifteen minutes" is closer to sources as "up to fifteen minutes" ("as long as 15 minutes without breathing", citing National Geographic: https://www.reconnectwithnature.org/news-events/the-buzz/nature-curiosity-how-do-beavers-hold-their-breath).
- **Other facts.** Bookmobiles, bats, water towers, pools and peanuts were verified by SC-1 and SC-2. The passage text for them is unchanged, apart from the bat box, which now reads "can use dozens", the safer wording SC-1 asked for.
- **TC1b teach point 7** states C14's rule with C14's own phrase, "keep track". That is teaching, but it is an echo; consider "help listeners follow along" in Teach.

**NOTE-9. `like` mappings are honest:**
- SS1a: S01 → C05; S02 → C06 and C14; S03 → P6.
- TC1b: S01 → C03; S02 → C09; S03 → C05 and C14.

## 7. Browser check (Step 5)

**Setup:**
- `node verification/serve.js . 8796` in /home/claude/pp-content.
- Playwright Chromium at **320 × 568**, touch and mobile, browse mode, Google Fonts requests blocked.
- Script: `b2rr-sc/pw.py`. Results: `b2rr-sc/pw-results.json`.
- Each core item was opened with `PP_PLAYER.start("SK:<code>:y|y2|y3", "try", {pos})`, and the script tapped the Question tab.
- `mc` and `ms` answers were entered by **real clicks** on the choice buttons. The other formats were entered through `PP_PLAYER.ctx()`.

**Result: 188 of 188 checks pass.**

| Check, on all thirty core items | Result |
|---|---|
| **Check my answer** | A wrong answer shows "Not quite"; the key shows "That's right!" |
| **Hints** | Hints 1, 2 and 3 appear in order with the authored text, labelled "Hint n of 3"; the button then reads "No more hints" |
| **Show me how** | Every `how` step is listed, followed by the answer |
| **Try a similar question** | Offered on SS1a P6, C05 and C06 and on TC1b C03, C05 and C09. Each opens S01, S02 or S03 under "Extra question (not one of the fifteen)" and checks right. Next returns to the following core item, or to "Set 1 finished" after the last item of a set |
| **Horizontal scroll** | None, at start or after hints and Show me how |
| **Console and page errors** | None |

My first run reported 30 hint failures. They came from my own script: the label is upper-cased by CSS ("HINT 1 OF 3"). With a case-insensitive check, all pass.

## 8. Verdicts

| Lesson | MUST | SHOULD | NOTE | Verdict |
|---|---|---|---|---|
| 3.T.SS.1.a | 3 (MUST-1 C08 h3; MUST-2 C07 and C11 h3; MUST-3 C10 h1 + h3) | SHOULD-1 (C13), SHOULD-2, SHOULD-5 | 1, 2, 4, 8, 9 | **CHANGES REQUIRED** |
| 3.T.C.1.b | 0 | SHOULD-1 (P5), SHOULD-3, SHOULD-4 | 2, 3, 5, 6, 7, 8, 9 | **ACCEPTED** (SHOULDs recommended, especially SHOULD-3, a factual error) |

**Agreement rate:** 45 of 45 (100%), blind on keys. The match rows were unshuffled, so the two Together match items are weak evidence.

**The SS1a fixes are all hint-local** (plus one distractor and one hint 1 trim on C10). None changes a key, a passage or a figure, so no new blind solve is needed after them, only a ladder re-check of C07, C08, C10 and C11.

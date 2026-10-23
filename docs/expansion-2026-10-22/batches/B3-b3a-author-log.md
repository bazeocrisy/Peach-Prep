# B3 author log (b3a): 3.T.C.1.a and 3.T.C.2.c

**Role:** content author b3a for batch B3. **This is not a review.** Nothing here certifies the items. Reviewers should blind-solve before reading this log (04-content-plan.md §8).

**File changed:** `js/data/lessons/T-C.js`, in the 3.T.C.1.a and 3.T.C.2.c blocks only. The 3.T.C.1.b, 3.T.C.1.c and 3.T.C.2.a blocks were not touched. No other file was edited except this log.

**Pattern:** 3.T.C.2.a (same file, accepted) and 3.T.T.1.c, plus every "Rule added" section of AUTHOR-BRIEF.md:
- Hint 1 is the strategy only, with no content that contradicts a particular distractor.
- Hint 2 names a region or a neutral step. Any region it names holds at least one wrong choice's source, and in EBSR items at least two Part B choices.
- Hint 3 rules out **one** weak distractor (or settles one match row), then ends with a neutral "Check the other choices". It never settles a whole item or both blanks.
- Every earlier item's `why`/`how` in a set was read against every later item's key (§5).

## 1. Official wording (js/data/standards.js `official`; checked against gadoe/standards-3-5.txt)

| Code | Official wording | PDF page | Components used (02-coverage-matrix.csv) |
|---|---|---|---|
| 3.T.C.1.a | "Determine the purpose (e.g., entertain, inform, persuade) and target audience of a text." | 26 | PUR purpose (inform, persuade, entertain); AUD target audience; EV evidence for purpose or audience |
| 3.T.C.2.c | "With adult support, identify the context in which a text is written (e.g., time period, individual, situational)." | 27 | TP time period; IND individual (writer) context; SIT situational context; "with adult support" stays adult-observed (parent note and habit cards; no scored substitute, as the matrix asks) |

## 2. Gates

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS, 0 failures, 26 warnings (final run, after the similar items were added; §9). **My lessons have no warnings at all**, so neither shows a similar-coverage warning |
| `python3 verification/readability.py` | I read the output. New passages: 1.a p3 FK 3.2 (175 words), p4 FK 3.5 (126); 2.c p5 FK 3.9 (165), p6 FK 3.4 (160). None above 4.5 |
| `node verification/check-writing.js` | 0 failures, 0 warnings |
| `node verification/check-instructional-copy.js` | 28 assertions passed |
| Six-word n-gram scan of my four passages, all 44 new stems (core and similar) and the new Watch Me against every lesson, set and task (`scratchpad/b3a/ngram.js`) | 8 hits, all the house historical-fiction box opener ("Box: This … is historical fiction. Imagine that a…"), shared with 2.c p1/p2 by design. No content hits |
| Similar-question browser checks (`smoke-sim.py`, `smoke-sim-each.py`; §9) | **118 of 118** in one sitting (all fifteen core items in order, per lesson) and **32 of 32** item by item from fresh state. The button shows on every core item, and the item it opens lists that core item in `like` |
| Browser smoke, `node verification/serve.js . 8811`, Playwright Chromium (`scratchpad/b3a/smoke.py`, log `smoke.log`) | **109 of 109 pass** (final run, with all 30 similar items). Set picker shows three sets in both lessons; every Together item checks correct and has merged addon hints; for all 30 core items, the three authored hints show in order as "Hint 1 of 3" to "Hint 3 of 3", then "No more hints"; every scored key scores full marks in the engine and the Check shows "That's right!"; both `cr` items show the compare-with-sample box, score 0 of 0, and get the "Written and checked" status; all 30 similar items' keys score full marks and have 3 hints and 2+ how steps; no page errors. The only console errors are the Google Fonts requests the script blocks on purpose. Server stopped |

**Note on the final gate run.** For a while, check-content.js crashed while loading `js/data/lessons/T-RA.js` line 2228, a mid-edit by another agent. I waited until that file loaded again. The final run passes, and the warning count changed only because of other lessons.

## 3. Refs, Practice Together and changes to existing items

| Lesson | Refs in core | Together now | Why |
|---|---|---|---|
| 1.a | P4 (core 1.1), P5 (core 1.2) | P1, P2, P3 | The inventory marks P4 and P5 reusable. P1's old `why` said Rosa "gives reasons", which was P4's Part A key, so I **reworded P1's `why`** (no id change). P3's old `clue` called the "A garden would help us learn" target "a reason", which marked P4's Part B key, so I **reworded P3's `clue`** |
| 2.c | P4 (1.1), P8 (1.3), P9 (1.5) | P1, P2, P7, P6 | As the inventory says. P2's addon how never mentions Atlanta's lights (P4's key), and P6's addon never mentions the low water (C04's key) |

No ids changed. `practice` order and `test` are unchanged. No weak items were flagged for these two lessons in 03-practice-inventory.csv. The legacy P8 (2.c) has two weak distractors (student rider, nurse), which the box contradicts; I kept it as the inventory allows and record it in §7.

**Teaching.** 1.a got one Watch Me (now 3 of 3): two notes about Poetry Night, one for families and one for the student poets. It models how one topic is written for two audiences, which C03, C11, C13 and C15 ask for. 2.c already has 6 teach points (above the limit of 5; that is not my change) and 3 Watch Me examples, so I added nothing. Its points already cover every task the fifteen use: the three context types, historical fiction and the box, and "How does knowing this help me understand the text?".

## 4. Passages and stems added

| Lesson | Id | Title | Words / FK | Domain | Used by |
|---|---|---|---|---|---|
| 1.a | p3 | Roly-Polies | 175 / 3.2 | nature / science | C06–C09 |
| 1.a | p4 | Two Texts About a Car Wash (a sign; a school news report) | 126 / 3.5 | community | C11, C12 |
| 2.c | p5 | Washday (historical fiction, a 1908 school report) | 165 / 3.9 | family / history | C06–C10 |
| 2.c | p6 | Two More Short Texts (Elijah's journal; Coach Petty's note) | 160 / 3.4 | nature; school | C11, C12 |

**Short stems:** 1.a C04 (goat yard sign), C05 (paper plate mask directions), C09 (roly-poly poem), C10 (gecko report draft), C13 (hand-washing poster line), C14 (mascot poem), C15 (two bird-count flyers); 2.c C02 (clue rows), C13 (1935 postcard box), C14 (farmer and pool notes), C15 (no-mowing note); and all six similar items.

**Facts checked from memory** (reviewers may want to confirm):
- Roly-polies (pill bugs) are crustaceans related to crabs and shrimp, with seven pairs of legs. They need damp places to breathe, roll into a ball, and eat rotting plants.
- Many geckos cannot blink and lick their eyes clean, and their toe hairs let them climb walls and ceilings.
- An ostrich egg weighs about as much as two dozen chicken eggs, and ostriches outrun town-street car speeds (about 70 km/h).
- Killdeer nest on bare ground or gravel, including ball fields, and incubate for about 24–28 days ("about four weeks").
- Savannah's streetcars ran until the 1940s, and radios and cameras were common in 1935. Home computers came about fifty years later.
- In 1908, laundry was done with a washboard, boiled water and stove-heated irons, and most homes had no washing machine.
- Singing the ABC song while scrubbing takes about twenty seconds.

## 5. The fifteen, per lesson

"Live after h1/h2/h3" counts the choices a child who has read the clue (= hint 1) and the hints so far would still have a real reason to pick (AUTHOR-BRIEF, the post-B1 re-review rule). Removed = what hint 3 rules out.

### 3.T.C.1.a (PUR, AUD, EV)

| # | Id | Set | Comp | Task | Format | Pts | DOK | Text / domain | Live after h1 / h2 / h3 (h3 removes) | Differs from nearest |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | P4 (ref) | 1 | EV+PUR | use evidence | ebsr | 2 | 3 | p1 / school | A 4/4/3 (garden-story); B 4/4/4 (h2 = ¶2–5 holds all four) | C12: text, context, component |
| 2 | P5 (ref) | 1 | PUR | identify | match 4×3 | 2 | 2 | stems / mixed | h3 settles the bat row; 3 rows × 3 columns open | C09: task (identify vs compare), text |
| 3 | C03 | 1 | AUD+PUR | construct / transfer | mc | 1 | 3 | p1 / school | 4/4/3 (story): key, ask-to-use-grass, bean fact | C13: text, context, task |
| 4 | C04 | 1 | AUD+EV | use evidence | ms pick 2 of 5 | 2 | 2 | goat-yard sign / community | 5/5/4 (hours): keys, pet gently, wash hands | S01, C07: text, context |
| 5 | C05 | 1 | PUR | explain (whole vs a line) | dropdown ×2 | 2 | 2 | mask directions / everyday | slot 1 4/4/3 (funny story); slot 2 4/4/4 | C10: text, task, format |
| 6 | C06 | 2 | PUR | identify (whole text) | mc | 1 | 2 | p3 / nature | 4/4/3 (story): key, hunt, keep as pet | P5: text, task, context |
| 7 | C07 | 2 | AUD+EV | use evidence | ebsr | 2 | 2 | p3 / nature | A 4/4/3 (teachers); B 4/4/4 (two other "you" sentences stay live) | C04: text, context, format |
| 8 | C08 | 2 | AUD (word choice) | explain | mc | 1 | 3 | p3 ¶4 / nature | 4/4/3 (funny story): key, wear-a-helmet, round shape | C05: text, component |
| 9 | C09 | 2 | PUR | compare (article vs poem) | match 5×3 | 2 | 2 | p3 + poem / nature | h3 settles the curled-up row; 4 rows × 3 columns open | P5: task, text |
| 10 | C10 | 2 | PUR | edit (remove the sentence that doesn't fit) | hottext options, pick 1 of 5 | 1 | 2 | gecko draft / school-science | 5/5/4 (sentence 3): (1), (2), (4), (5) | C05: text, task |
| 11 | C11 | 3 | AUD | compare (two audiences) | dropdown ×2 | 2 | 2 | p4 / community | each slot 4/4/3 (planetarium workers, out of both); no blank settled | C04: text, task, format |
| 12 | C12 | 3 | PUR+EV | use evidence / compare | ebsr | 2 | 2 | p4 / community | A 4/4/3 (next car wash); B 4/4/4 | P4: text, context |
| 13 | C13 | 3 | AUD | edit (revise for a 4-year-old), transfer | mc | 1 | 3 | poster line / family | 4/4/3 (clean-hands persuade): key, germ fact, hard long version | C03: text, context, task |
| 14 | C14 | 3 | PUR+AUD+EV | construct | cr (unscored) | — | 3 | mascot poem / sports | n/a: h3 is a sentence frame with no content | C09: format, task, context |
| 15 | C15 | 3 | PUR | evaluate, transfer | mc | 1 | 3 | two flyers / problem solving | 4/4/3 (bird story): key, A-more-facts, A-birds fly far | C12: text, task |

- **Tallies:** mc 5; TE 9 (ebsr ×3, match ×2, dropdown ×2, ms, hottext) + cr 1. DOK 3 ×6, DOK 1 ×0. Choose-two and two-part items are 2 points.
- **Tasks:** identify 2 (P5, C06); explain 2 (C05, C08); use evidence 4; edit 2 (C10, C13); construct 2 (C03, C14); compare 3 (C09, C11, C12); transfer 2 in set 3 (C13, C15).
- **Domains:** nature 4, school 3, community 4, everyday 1, family 1, sports 1, problem solving 1 (P5 is mixed). No domain has more than 6.
- **Components:** PUR 10, AUD 7, EV 6. Every set touches all three. Texts: p1, p3, p4 and 8 stems; no passage carries more than 4.

### 3.T.C.2.c (TP, IND, SIT)

| # | Id | Set | Comp | Task | Format | Pts | DOK | Text / domain | Live after h1 / h2 / h3 (h3 removes) | Differs from nearest |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | P4 (ref) | 1 | TP | use evidence | ebsr | 2 | 2 | p1 / family | A 4/4/3 (mule); B 4/3/3 (h2 = ¶2–4 holds 3 of 4; "Please write back soon" is the weak one) | C06: text, task, format |
| 2 | C02 | 1 | TP+IND+SIT | identify (classify clue types) | match 5×3 | 2 | 2 | clue rows / mixed | h3 settles the horse-trainer row; 4 rows × 3 columns open | C08: task, format |
| 3 | P8 (ref) | 1 | IND | explain | mc | 1 | 2 | p3 / school | 4/4/3 (newsletter): key, student, nurse (both weak; see §7) | C11: text, context |
| 4 | C04 | 1 | SIT | explain (one note explains another) | mc | 1 | 2 | p3 Dr. Ruiz / science | 4/4/3 (frogs drank it): key, count faster, scientist-short-notes | P9: text, context |
| 5 | P9 (ref) | 1 | SIT | explain | mc | 1 | 2 | p3 / school | 4/4/3 (moved a week): key, gym closer, prizes | C12: text, format |
| 6 | C06 | 2 | TP | compare then and now | ms pick 2 of 5 | 2 | 2 | p5 / family | 5/5/4 (child helps): keys, ironing, soap | C13: text, task, format |
| 7 | C07 | 2 | SIT | explain (a comparison) | mc | 1 | 2 | p5 ¶4 / family | 4/4/3 (plants): key, steamy irons, door blown | C04: text, context |
| 8 | C08 | 2 | TP (historical fiction) | identify | dropdown ×2 | 2 | 2 | p5 box / family | slot 1 4/4/3 (Mrs. Dow); slot 2 4/4/4 | C02: text, task |
| 9 | C09 | 2 | IND | explain / transfer to another writer | ms pick 2 of 5 | 2 | 3 | p5 / family | 5/5/4 (Mrs. Dow): keys, sheets in face, tired arms | C14: text, format |
| 10 | C10 | 2 | TP | construct | cr (unscored) | — | 3 | p5 / family | n/a: h3 is a sentence frame | C06: format, task |
| 11 | C11 | 3 | IND | explain (two people's backgrounds) | mc | 1 | 2 | p6 journal / nature | 4/4/3 (first clear night): key, never up late, uncle's eyes | P8: text, context, task |
| 12 | C12 | 3 | SIT | use evidence | ebsr | 2 | 2 | p6 note / school-nature | A 4/4/3 (workers); B 4/4/4 (h2 names the box and the note: two choices each) | P9: text, format, task |
| 13 | C13 | 3 | TP | apply / transfer | hottext options, pick 1 of 5 | 1 | 2 | 1935 postcard box / community | 5/5/4 (postcard store): computer, radio, camera, streetcar | C06: text, task |
| 14 | C14 | 3 | IND | compare two writers | dropdown ×2 | 2 | 2 | farmer and pool notes / community | slot 1 4/4/4; slot 2 4/4/3 (doesn't like wet) | C11: text, format |
| 15 | C15 | 3 | SIT | choose the context that explains (transfer) | mc | 1 | 3 | no-mowing note / community | 4/4/3 (lived ten years): key, warm May, own mower broke | C04: text, task |

- **Tallies:** mc 6; TE 8 (ebsr ×2, ms ×2, dropdown ×2, match, hottext) + cr 1. DOK 3 ×3 (C09, C10, C15), DOK 1 ×0.
- **Tasks:** identify 2; explain 6; use evidence 2 (P4, C12); compare 2 (C06, C14); construct 1 (C10); transfer 3 in set 3. Edit is not applicable (reading lesson, as in B0).
- **Domains:** family 6 (P4, C06–C10), school 3, community 3, science 1, nature 1 (C02 mixed). Exactly 6 family, which is the cap.
- **Components:** TP 6, IND 5, SIT 5 (C02 counts for all three). Every set touches all three. Texts: p1, p3, p5, p6 and 4 stems; p5 carries 5.

### Similar bank (first three per lesson; S04 onward are in §9)

| Id | like | Task / component | Live after h1/h2/h3 |
|---|---|---|---|
| SK-TC1a-S01 | C04, C07 | audience evidence (museum rock table) | 4/4/3: key, touch, feel |
| SK-TC1a-S02 | P5, C06 | whole-text purpose (ostriches, with a zoo line) | 4/4/3: key, visit-a-zoo, raise on a farm (weak) |
| SK-TC1a-S03 | C13, C03 | rewrite for a new audience (coat note) | 4/4/3: key, coat fact, "outerwear daily" |
| SK-TC2c-S01 | P8, C11 | individual context (mail carrier, 22 years) | 4/4/3: key, owns a dog, new to the street |
| SK-TC2c-S02 | P4, C13 | time period (1925, no home phone) | 4/4/3: key, buy medicine, only Mr. Hill knows him |
| SK-TC2c-S03 | P9, C12, C15 | situational (skunk under the steps) | 4/4/3: key, "until lunch" misread, side door closer |

### Together addons (hints and how, same rules)

| Item | Live after h1/h2/h3 |
|---|---|
| TC1a P1 | 4/4/3 (bean plants) |
| TC1a P2 | 4/4/3 (Ms. Hart's class) |
| TC1a P3 | 5/5/4 (the "My name is Rosa" target) |
| TC2c P1 | 4/4/3 (summer) |
| TC2c P2 | 4/4/3 (gift lamp) |
| TC2c P7 | 4/4/3 (moving) |
| TC2c P6 | 4/4/3 (note to a friend) |

### Cross-item checks done (earlier `why`/`how`/hints against later keys, per set; Together against set 1)
- **1.a set 1.** P4's how names ¶3 and "A garden would help us learn" but nothing about classmates or watering (C03), the goat-yard clues (C04) or directions (C05). Together P1 no longer says "gives reasons", and P3's clue no longer calls a target "a reason" (§3). Residual: Together P2 (audience = the principal) makes C03's "use the grass" distractor easier to reject. It does not give the key.
- **1.a set 2.** C06's how says ¶4 tells "what it does when it is scared" (not "keeps it safe"), so it does not give away C08. C08's how leaves out the rolling into a ball, so it does not settle C09's "both" row. C07's how says nothing about the helmet comparison.
- **1.a set 3.** C11's how gives only the audiences (it uses "Turn in here!" and "thanks every family"). C12's Part A prompt states the sign's purpose itself, so C11 cannot give it away, and its choices differ only on the report. C13 and C14 say nothing about the bird-count flyers (C15).
- **2.c set 1.** C02 teaches only the categories, not P8's or P9's facts. P4's how says nothing about the pond. Together P6's key appears as a C04 distractor; Together never mentions the low water.
- **2.c set 2.** C06's how never says who scrubs or boils, so it does not give away C09. I dropped an earlier C06 distractor, "clothes hang inside when it rains", because its explanation would have stated C07's key. C07 and C08's hows do not touch C09 or C10.
- **2.c set 3.** C11 to C14 share no facts with one another or with C15.

## 6. Topic and key-fact search (whole repo, including blocks other authors are writing now)

**Method.** `grep -rli` over every file in `js/data` (lessons, sets, tasks, habits) for about 70 topic and name terms. I read the context of every hit outside my two blocks, and checked the other T-C.js blocks (lines 694–2336) separately with awk. Terms: roly-poly, pill bug, crustacean, zookeeper, goat yard, rain gauge, gecko, car wash, planetarium, pollen, hand-washing, ABC song, mascot, moose, cartwheel, plant trees, ostrich, rock table, coat, washday, washboard, irons, killdeer, home plate, city lights, cabin, 1935, Savannah, streetcar, radio, drought, corn, pool pass, mow, lawn, wedding, mail carrier, 1925, general store, skunk, Art Night, Poetry Night, sailboat, bridge, trained horses, deep end, paper plate, mask, bird count, binoculars, senior center, and every new character name. Earlier I had ruled out fireflies (T-RA passage, R-POE-01), the one-room school with slates (T-TS), an iceman and ice melting in heat (T-T1 Ice Cube Challenge), "like a suit of armor" (T-T2 bark), a pipe that broke (T-TS), feeding a fish (2.c form A), snow being rare (2.c teach example), the Watch Me dry-summer sign, school gardens (p1, R-OPN-01), the welcome-page and "what to bring / if it rains" frame (1.a form A), book fairs, and field-trip forms.

**Collisions found and fixed during authoring:**
- **A rain gauge made from a plastic bottle** is in T-T34 (Room 14's weather station). My C05 directions were changed to a paper plate mask.
- **Planting trees as a persuasion topic** is in T-T34 (opinion piece). My C15 flyers were changed to a winter bird count.
- **"Art Night"** is in T-SS (a sequence stem). My Watch Me was changed to Poetry Night.
- **Birdhouses** (T-TS, W-REV-02 and others) and **a senior center** (T-SS) were rejected as replacement topics.

**Remaining hits judged harmless:** "zookeeper" (one word in a T-RA cr sample about pandas); "pollen", "radio", "lawn", "cabin", "sailboat", "bridge", "coat" and "corn" (single words in unrelated sentences); "wedding" (PT-1, a gift pitcher story; my C15 key is a quiet morning); "Kiri", "Nell" and "Zuri" (names reused in other lessons, no shared content); the historical-fiction box opener (house convention).

## 7. Not done, risks and open points (honest list)

- **Similar items: done** (§9). Each lesson now has 15, the most allowed, so the similar bank cannot grow further without a lead decision. A child gets one extra question per core item per sitting. Once the set is restarted, the engine marks those items as used. I did not test what happens after "Start this set again".
  - 1.a S11 and 2.c S11 are written answers (`cr`), because the core items they mirror (C14 and C10) are `cr`.
- **Close calls a reviewer should weigh:**
  - 1.a C07 Part B: "If you find a roly-poly, hold it gently in your open hand" could be argued to speak to a child too. I judged "played in your yard" the best evidence.
  - 1.a S02: the "raise ostriches on a farm" distractor is weak.
  - 2.c C11 needs the knowledge that city lights hide stars. The box gives "a big city his whole life" and the journal says "The sky at home never looks like this"; the how explains the rest.
  - 2.c C13: a computer in 1935 may be easy for some children. Radio and camera are the misconception distractors.
  - 2.c C08 is close to DOK 1 for a child who already knows the definition of historical fiction.
  - 2.c C09 key "how hot the fire is" is an inference (Mama tends the fire), not a quoted detail.
  - 2.c P4: hint 2 (¶2–4) leaves out the weak Part B choice in ¶5.
- **Legacy P8 (2.c)** keeps two weak distractors (student rider, school nurse) that the box contradicts. I kept it as a ref because the inventory marks it reusable, and I did not rewrite it. A reviewer may want it revised under a new id.
- **2.c teach points** stay at 6, one over the limit of 5. That predates my work, and I added none.
- **"With adult support"** is deliberately not a scored item (matrix: keep it adult-observed).
- **Not run by me:** guard.py, the path*.py tests, skills-recovery.py, practice-own.py and the viewport matrix. I ran only the gates and the smoke test the brief names.
- I did not review my own work, and I did not run git.

## 8. Scratch files
`/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/b3a/`: `smoke.py`, `smoke.log`, `smoke-sim.py`, `smoke-sim.log`, `smoke-sim-each.py`, `smoke-sim-each.log`, `ngram.js`, `sim-1a.js`, `sim-1a-b.js`, `sim-2c.js`, `sim-2c-b.js` (the source text of the inserted similar items), `serve*.log`. The topic replacement script is `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/b3a-topics.py`.

## 9. Coordinator follow-up: a similar item for every core item (ENG-07)

**What was asked.** First: every core item needs at least one similar item that honestly lists it in `like`, with no similar-coverage warning. Second: because the engine offers only a similar item not yet used in the sitting, every core item must still have one available when the child reaches it in order. The cap is 15 per lesson.

**What I did.** I added 12 similar items to 1.a (S04–S15) and 12 to 2.c (S04–S15). Each lesson now has 15, the cap. Nothing in core, Together, test or the existing S01–S03 changed.
- **The first nine new 1.a items (S04–S12) and eight new 2.c items (S04–S11)** cover the core items that had no similar item.
- **Seven more** (1.a S13–S15; 2.c S12–S15) are second similar items. They cover core items whose only similar item is shared with an earlier core item in the same set: 1.a C06, C07 and C13; 2.c C11, C12, C13 and C15. My first in-order run showed that those seven lost the button once the shared item was used.

Every `like` lists only core items that practise the same component with the same task. Every item is on a fresh short stem (no passage) and follows the hint rules in §5: hint 3 removes one weak distractor, settles at most one blank or row, and leaves a real competitor.

### Which similar item each core item gets in one sitting (from `smoke-sim.log`)

| 1.a core → similar | 2.c core → similar |
|---|---|
| P4 → S04 | P4 → S02 |
| P5 → S02 | C02 → S04 |
| C03 → S03 | P8 → S01 |
| C04 → S01 | C04 → S06 |
| C05 → S06 | P9 → S03 |
| C06 → S13 | C06 → S07 |
| C07 → S14 | C07 → S05 |
| C08 → S08 | C08 → S08 |
| C09 → S09 | C09 → S10 |
| C10 → S07 | C10 → S11 |
| C11 → S10 | C11 → S12 |
| C12 → S05 | C12 → S13 |
| C13 → S15 | C13 → S14 |
| C14 → S11 | C14 → S09 |
| C15 → S12 | C15 → S15 |

All 15 similar items in each lesson are used exactly once in that run.

### The new items

| Id | like | Format | DOK | Stem (fresh context) | Live after h1 / h2 / h3 (h3 removes) |
|---|---|---|---|---|---|
| SK-TC1a-S04 | P4 | mc | 3 | late-bus letter (school) | 4/4/3 (bus-ride story): key, bus facts, "club will close" warning |
| SK-TC1a-S05 | C12 | mc | 2 | fishing-derby poster and news (community) | 4/4/3 (asks for next year): key, how to catch a bass, the boot story |
| SK-TC1a-S06 | C05 | dropdown ×2 | 2 | paper hat directions (everyday) | slot 1 4/4/3 (funny story); slot 2 4/4/4 |
| SK-TC1a-S07 | C10 | hottext options, 1 of 5 | 2 | flamingo report draft (science) | 5/5/4 (sentence 1): (2), (3), (4), (5) |
| SK-TC1a-S08 | C08 | mc | 3 | ant carrying a crumb (nature) | 4/4/3 (story): key, "kids are stronger", "ants as big as cars" |
| SK-TC1a-S09 | C09 | match 5×3 | 2 | shooting-star article and poem (science) | h3 settles the streak row; 4 rows × 3 columns open |
| SK-TC1a-S10 | C11 | dropdown ×2 | 2 | kindergarten-buddy sign and newsletter (school) | each slot 4/4/3 (principal, out of both); no blank settled |
| SK-TC1a-S11 | C14 | cr | 3 | riddle page (kids' magazine) | n/a: h3 is a sentence frame |
| SK-TC1a-S12 | C15 | mc | 3 | two shopping-cart signs (community) | 4/4/3 (cart story): key, A-more-facts, A-dents |
| SK-TC1a-S13 | C06 | mc | 2 | pupils of the eye, with a "try it" line (science) | 4/4/3 (story): key, buy a mirror, eye-health tips |
| SK-TC1a-S14 | C07 | mc | 2 | loose tooth (family) | 4/4/3 (adults' 32 teeth): key, baby-teeth fact, "kids lose a tooth at six" fact |
| SK-TC1a-S15 | C13 | mc | 3 | museum "do not touch" sign rewritten for kindergartners (community) | 4/4/3 ("art is the best"): key, old-paintings fact, formal "refrain" version |
| SK-TC2c-S04 | C02 | match 5×3 | 2 | five fresh context clues | h3 settles the nurse row; 4 rows × 3 columns open |
| SK-TC2c-S05 | C07 | mc | 2 | waxed hall, "like a skating rink" (school) | 4/4/3 (skating trip): key, "turned into a rink", cold hall |
| SK-TC2c-S06 | C04 | mc | 2 | goldfinch field notes (nature) | 4/4/3 (tray fell): key, forgot to fill it, "scientist writes short notes" |
| SK-TC2c-S07 | C06 | ms 2 of 5 | 2 | 1922 icebox and wood stove (family history) | 5/5/4 (eat together): keys, child sets the table, parent reads the news |
| SK-TC2c-S08 | C08 | dropdown ×2 | 2 | 1895 mill diary, historical fiction box (history) | slot 1 4/4/3 (newspaper writer); slot 2 4/4/4 |
| SK-TC2c-S09 | C14 | dropdown ×2 | 2 | umbrella seller and a boy's rained-out game (community) | slot 1 4/4/3 (plants); slot 2 4/4/4 |
| SK-TC2c-S10 | C09 | ms 2 of 5 | 3 | moving-day diary: what Dad would write (family) | 5/5/4 (the new house): keys, packing books, taping boxes |
| SK-TC2c-S11 | C10 | cr | 3 | 1910 telegram, paid by the word (history) | n/a: h3 is a sentence frame |
| SK-TC2c-S12 | C11 | mc | 2 | girl from Alaska in a Florida January (individual) | 4/4/3 (snow): key, heavy coat, "hottest day ever" |
| SK-TC2c-S13 | C12 | mc | 2 | roof work and "until Friday" (school) | 4/4/3 (October): key, written on Monday, "new roof" (explains why, not how long) |
| SK-TC2c-S14 | C13 | hottext options, 1 of 5 | 2 | 1950 train letter, historical fiction box | 5/5/4 (train window): phone, dining car, punched ticket, mailing at the station |
| SK-TC2c-S15 | C15 | mc | 3 | "knock softly" note (community) | 4/4/3 (lived five years): key, rainy Tuesday, painted doorbell |

**Leak checks.**
- No similar item shares a stem, passage, key fact or answer with a core item, a Together item, a check item or a Watch Me in its lesson.
- Two similar items deliberately reuse another item's key idea as a distractor. 2.c S06 uses "the writer's job explains short notes" (Together P6's key), and 2.c S09 uses "plants need water" (C14's key). The how explains why each does not fit.
- Similar items appear only after their core item is finished, so they cannot pre-answer a core item.

**Topic search for the new items.** `grep -rli` over `js/data` before writing, with every hit read in context. Collisions found and avoided:
- a hot metal slide (T-T34 shade opinion)
- sea otters (T-RA)
- a food truck (T-TS)
- crickets in rhyming lines (T-T34, R-POE-01)
- a lost-and-found box (T-SS)
- dandelion seeds carried by wind (F-FH)
- hiccups (T-RA)
- a chorus or music club (T-T34)
- penguins (T-RA)
- a hot-air balloon (L-V3)
- goosebumps (T-TS)
- summer camp (T-RA)
- a lighthouse (T-T2, L-GC2)
- the "Fun Run" (3.T.T.1.c p4)
- 1890 (already a row in my own C02; S08 uses 1895)

Terms with no hits elsewhere: late bus, Homework Club, fishing derby, paper hat, flamingo, shooting star or meteor, kindergarten buddies, riddle page, cart rack, pupil, loose tooth or baby teeth, telegram, killdeer, waxed hall, goldfinch, iceman, mill diary, Alaska, doorbell, rental truck, and the new names (Rina, Mr. Abel, Dario, Tova, Mrs. Bell, Mr. Sims, the Mensah family, Otis, Ms. Rowe, Uncle Jay).

**Gates after this change.**
- `check-content.js --all`: PASS, 0 failures, and no warnings in my lessons.
- `readability.py`: unchanged, because similar items use stems, not passages.
- `check-writing.js`: 0/0. `check-instructional-copy.js`: 28 passed.
- Browser: the core smoke passes 109 of 109; the in-order run passes 118 of 118; the fresh-state run passes 32 of 32. The server is stopped.

**Not done.**
- No reviewer has blind-solved the 24 new items.
- I did not check the "Start this set again" path or a second sitting, where similar items are already used. With exactly fifteen per lesson, there is no spare item for a second recovery on the same core item.

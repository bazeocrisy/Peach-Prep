# PP-004 independent review C: form B (`testB`) for 13 lessons

- Reviewer: Agent C (independent, read-only). I edited only this file.
- Date: 2026-10-20 (UTC clock read 2026-10-21 02:59 when the blind answers were saved).
- Port used: 8496. The server was stopped by its PID afterwards.
- Working files are in the scratchpad folder /tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revC_fb/. They are not part of the repo:
  - load.js (loader)
  - blind.js and blind.txt (the shuffled dump without keys)
  - keys.json (the shuffled key map, written by the script and not opened until the comparison)
  - mine.json (my answers)
  - full.js and ovl.js (form A, practice and Watch Me comparison, and the n-gram overlap)
  - fig.py, the three figure PNGs, and smoke.py

## Method
1. **Blind solve.** blind.js loaded every `js/data/lessons/*.js` file through `PP.addLesson`, in a vm context like the one check-content.js uses. For each form B item it printed:
   - the passage, with paragraph and sentence numbers;
   - the figure caption, alt text and path;
   - the choices, shuffled with a seeded LCG (seed 20261020): mc, ms, both EBSR parts, dropdown slot options, hot-text targets or options, order steps and match rows.

   The output had no `correct` flags, `answer`, `why`, `clue` or `hint`. The key map went to a separate file.
2. **Figures.** I rendered the three form B figures to PNG through the 8496 server and looked at them:
   - tt2a-b-tree-trunk.svg
   - v3a-b-balloon-parts.svg
   - v3a-b-pecan-graph.svg

   Each matches its alt text, and its labels are legible.
3. **Answers recorded.** I solved all 67 items and saved my answers to mine.json before reading any key. Only then did I compare them with keys.json.
4. **Comparison with the rest of each lesson.** For each lesson I compared form A, practice, Watch Me (`learn`) and Learn It (`teach`) against form B. I looked at the same codes, the type, points and DOK mix, the stems and choices, and the target words. I also ran a 4-gram overlap scan (ovl.js) and checked for giveaways between items inside form B.
5. **Gates, read-only runs:**
   - `node verification/check-content.js --all` gave PASS with 0 failures and 6 warnings, none of them on a form B item.
   - `python3 verification/readability.py` listed every new form B prose passage at FK ≈ 2.0–4.2 and 115–276 words. The poems are not scored.
6. **Browser smoke test** on port 8496:
   - `PP_PLAYER.start('SK:<key>:tB','test')` ran for all 13 lessons at 390 and 1366.
   - There were 0 page errors and no horizontal scroll (scrollWidth equalled the viewport width).
   - Each set is titled "Test (form B)".
   - At 390 the V.3.a graph item renders with its figure.
   - I did NOT click through every item to a full score. The keys were confirmed by the blind solve instead.
7. **Facts.** I checked the facts the authors flagged as uncertain against outside sources (the URLs are below).

## Agreement rate
- **Items: 67 of 67 (100%). Scored parts (each EBSR part and dropdown slot counted separately): 76 of 76 (100%).**
- There were no disagreements with the key. Every item had one answer I could defend without the key.

## Points, codes and DOK (all 13 forms)
- Form B's point total equals form A's in every lesson:
  - GC.2.b: 7
  - GUM plurals: 7
  - GUM past: 7
  - V.2.a: 7
  - V.3.a: 7
  - RA.2.a: 6
  - SS.2.a: 6
  - T.1.a: 8
  - T.1.c: 7
  - T.2.a: 8
  - T.2.b: 7
  - T.4.a: 7
  - TS-CE: 6
- The item count is the same as form A's in every lesson.
- The DOK labels match form A's item for item, except that the order differs in V.3.a, T.4.a and T.1.c. The multiset of DOK labels is identical in all 13.
- TS-CE's order item carries `std` 3.T.SS.1.a + 3.T.T.2.b, as form A's does.
- No form B passage is shared with form A or practice. Every form B item names only the new passage p3 (T.4.a also uses p4).

## Findings per form

### 3.L.GC.2.b: PASS WITH SHOULDS
The form assesses the right expectation: consistent verb tense, and joining sentences with simple, compound and complex structures (3.L.GC.2.b, p. 19). The passage and sentences are new. My concerns are about novelty and difficulty compared with form A:
- **SHOULD-1 (isomorphic to form A).**
  - TB2 "combine sentences 6 and 7" and TB3 "join sentences 10 and 11" use form A's exact frames and the same sentence numbers (T2, T3).
  - TB4 copies the T4 template row for row:
    - past + past;
    - present → past with the opening verb shifted ("Jada picks … wrote", like "Owen opens … waved");
    - present + present;
    - a time word then a mixed tense ("Yesterday, the wind blows … knocked", like "Last week, our class plants … watered").
  - TB5 copies T5: a past time word, 2 slots, options -s / -ed / base, and an almost identical `why`.
  - The sentences are new, so a child cannot pass from memory. But the form is a template clone rather than a fresh design.
- **SHOULD-2 (easier than form A, and modelled on practice).**
  - TB1 is a past-tense draft with one present verb, "Then we drop", which is the same pattern as practice P1, "Next, we walk". Form A T1 is harder: a present-tense draft with one past verb.
  - TB2 is a clone of practice P2: the key is "X, so Y-past", with the distractors "but", a run-on and "so Y-present".
  - TB3's key "After" is a time subordinator, the same as practice P5. Form A T3 uses the harder concessive "Even if".
  - **Fix:**
    - Make TB1 a present-tense ("every Saturday / every year") draft, OR keep it past-tense and target a harder slip, such as a present verb in a complex sentence.
    - Make TB2's best combination a complex sentence (because/when) or a compound with "but".
    - Make TB3 need a non-time joining word (although / even though / since).
    - Change the sentence numbers in TB2 and TB3 so they differ from form A's.
- I found no giveaways between items.

### 3.T.T.1.a: PASS
- The form covers:
  - setting (TB1 infers the time of day);
  - character from an action (TB2);
  - dialogue that moves the plot forward (TB3);
  - a change of setting shown through description (TB4);
  - dialogue that ends the story (TB5);
  - a match of what each detail mostly shows (TB6).
- This mirrors form A's coverage with new content. TB6 uses different categories from form A's T6 (character/setting/event rather than dialogue/action/description), which is a good variation.
- **Note (no change required):** in TB6, a reader could argue that "three goats trotted around the corner" describes the goats as characters. The prompt's word "mostly" and the plot role (the goats come back, which solves the problem) make "An event in the plot" the best answer. I matched the key.
- I found no giveaways.

### 3.T.T.1.c: PASS
- The form covers motive (TB1), feeling (TB2), a thought (TB3), the lesson with evidence (TB4) and traits (TB5).
- Form A has no thought item. Form B adds one, which fits the standard ("thoughts", p. 32).
- The trait item asks about a secondary character, Halmoni (caring, wise), which is well supported by paragraphs 5 and 6.
- The fact that mandu are Korean dumplings was checked by the authors (their log cites Wikipedia). It is consistent with general knowledge.
- I found no giveaways.

### 3.T.SS.2.a: PASS
- The new idioms are "broke the ice" and "hit the hay". The new metaphors are "walking map" and "sky is a dark blanket", and the new simile is "wobbled like a bowl of jelly".
- None of these repeats an item from practice ("pounding like a drum", "butterflies", "windmills") or from form A ("long face", "ear to ear", "orange ball", "white as snow").
- TB2 restricts the search to paragraphs 3–5, which correctly leaves out "broke the ice" (paragraph 2).
- I found no giveaways. Other items name some figurative sentences, but only as distractors.

### 3.T.T.4.a: PASS
- The rhyme scheme of the new poem is ABAB. Form A's is AABB and practice's is ABCB, so the scheme is genuinely different.
- The repetition, stanza and stanza-summary items are parallel to form A's.
- TB5 uses a second short poem (p4) for one DOK 1 rhyme item. That is acceptable.
- **Optional:**
  - TB2 (find the line that begins stanza 2) is very easy if the player separates stanzas visually.
  - TB4's row "Tiny lights float up …" also cues the first line of stanza 2 ("a tiny light / Floats up").
  - This is low impact, because form A's T2 (how many stanzas and lines) is similarly easy.

### 3.T.T.2.a: PASS WITH SHOULDS
- The article is new and the figure is new. The items cover the main idea, a paragraph's main idea with support, key details, adding a key detail, a detail that is not key, and the use of the diagram.
- **SHOULD-1 (lexical echo in the DOK 3 item).**
  - In TB2, Part A's key is "The hard wood in the center helps hold the tree up." Part B's key is "It works like a backbone to help hold the tree up."
  - A child can match "hold the tree up" without reading paragraph 5.
  - Form A T2 does not have this echo ("quick ways to get away" against "time to run away").
  - **Fix:** reword Part A's key to something like "The center of the trunk is strong and gives the tree support."
- **Optional (accuracy simplification).** The article leaves out the cambium, which the authors flagged, and the figure shows four layers.
  - This is acceptable for grade 3, because the text says "several layers" and never claims the list is complete.
  - However, the last paragraph says the layers help the tree "grow a little bigger each year". Growth is the cambium's job (USDA Forest Service).
  - If the authors want the text to be exact, they could add "A thin growing layer between the inner bark and the sapwood makes new wood each year." That adds no new answer to any item.
- TB4's key ("Thick bark can help keep a tree safe from a small fire") is accurate (Arbor Day Foundation).

### 3.T.T.2.b: PASS
- Form A and practice are both science texts. Form B uses a historical text (the Pony Express) with an embedded procedure, which covers more of the standard's "historical events … steps in technical procedures" (p. 33). That is good.
- All the Pony Express facts are verified (see Facts).
- **Note:** the strongest support for TB3 Part A is sentence 5:5, "People did not need riders … so the Pony Express closed two days later". It is not offered as a choice. The keyed sentence, "A telegraph sends messages through wires in just minutes", is the only defensible option, so the item is sound. If the authors want a stronger DOK 3 link, they could offer 5:5 as the key and keep 5:3 as a partial-support distractor.
- I found no giveaways.

### 3.T.RA.2.a: PASS
- The item frames are parallel to form A's: a feeling shown in one sentence, an EBSR about a reason, two sentences for a later feeling, and "X says … BEST supports". The literary passage and the content are new.
- **Note (low risk):** TB3 offers Jada's line "There's always room for one more" as a distractor for "Rosa feels happy and welcome". It shows that Jada welcomes Rosa, not what Rosa feels, so the key (C and E, Rosa's giggling and her request) is the best answer. The 1-point-per-answer scoring limits the harm if a child picks it.

### TS-CE (3.T.SS.1.a with 3.T.T.2.b): PASS
- The items cover a cause-and-effect chain (order), effect-first word order, an effect in the text, the effect of the roots, and a clue word.
- TB2 (choose the sentence that gives the effect first and the cause after) is a genuinely different task from form A's T2 (name the cause).
- "Since" is the clue word in practice P6, form A T5 and form B TB5. This is concept reuse, not answer memory, so it is acceptable.
- All the dune facts are verified (see Facts).

### 3.L.V.3.a: PASS
- The new words are harvest (graph), lighter (multiple meaning), ascend (EBSR, two supports), gusty (contrast with "calm … instead"), vent (figure) and touch down (phrase).
- These parallel form A's attendance, dwell, heron, pen, firm and "keep an eye out for".
- TB1's figure is new, and it renders correctly at 390.
- **Optional:** paragraph 2 says the balloon has "three main parts", but Figure 1 labels four, including the vent. This is consistent (the vent is part of the envelope, and Plano Balloon Festival lists three main components), but it could puzzle a child. If the authors want to remove that, they could write "three main parts" in the caption too, or say "The vent is a part of the envelope" in paragraph 6.

### 3.L.V.2.a: PASS WITH SHOULDS
- **SHOULD-1 (giveaway inside the stem, TB5).**
  - The stem says the hot rock "burst out through a crack". The key is "to break open and burst out".
  - A child can pick the key by matching "burst out" without using the root *rupt*. The distractors are unrelated to the volcano.
  - Form A's T6 (inspect) has no such echo.
  - **Fix:** remove "burst out" from the stem, for example "When the volcano began to erupt, hot melted rock poured down its sides." Alternatively, keep the stem and change the key to "to break open suddenly", with a plausible distractor such as "to smoke and steam quietly".
- **SHOULD-2 (every affix in TB4 was practiced with the same labels).**
  - The column labels "again", "full of" and "in a ___ way" are three of the four columns in practice P4.
  - The words repaint, joyful and loudly mirror retied, thankful and tightly in practice.
  - "without" (-less) is the meaning of practice P1's affix.
  - Form A's T4 used a different set (un-, pre-, -ful, mis-).
  - **Fix:** replace two rows with affixes that practice does not label, for example dis- ("not"; disagree), -er ("a person who"; teacher) or pre- / non-.
- TB1 (un- + -able) and TB2 (mis-) give the affix meaning in the prompt, like form A's T1 and T2. That is acceptable as a parallel.

### GUM irregular plurals (3.L.GC.1:M:form-and-use-irregular-plural-nouns): PASS WITH SHOULDS
- The skill row is "Form and use irregular plural nouns." It is G and M at grade 3 (GUM chart p. 16, read from official-gr3-gum.json).
- **SHOULD (every target word reuses one from form A or practice).**

  | Form B item | Target | Where the child has seen it |
  |---|---|---|
  | TB1 | geese | practice P4 "Three geese"; form A T2's distractor "gooses" |
  | TB2 | knives, wolves, people | form A T4 |
  | TB2 | deer | Watch Me |
  | TB2 | mice | Watch Me |
  | TB3 | moose | form A T2's key "two moose" (same structure) |
  | TB4 | oxen | form A T4 |
  | TB4 | women | form A T1 |
  | TB4 | children | practice P5 |
  | TB4 | feet | form A T3's key "feet" |
  | TB5 | sheep | form A T2's key; practice P2's "sheeps" error |

  - These words are the skill itself, and they are the ones Learn It lists. Passing B by remembering them is not item-specific memorization, so this is not a FAIL.
  - But form B does not test transfer to irregular plurals the child has not drilled.
  - **Fix:** swap at least two targets for untested grade-3 irregulars that follow taught patterns. Examples: loaves, shelves or halves (the f → ves pattern Learn It teaches through "knives") and fish or trout (no change). Good places to swap are TB3 (moose) and the "foots" row in TB4.
- TB5's regular plurals (babies, buses, bunches) are good discriminators. I found no giveaways.

### GUM irregular past tense (3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs): PASS
- All 14 form B verbs are new to the lesson: fell, told, stood, shook, held, lost, wore, chose, spun, forgot, sent, rang, took and got. None appears in form A, practice, Watch Me or Learn It.
- The formats are parallel to form A's.
- I found no giveaways.

## Facts checked (2026-10-20)

**Pony Express (T.2.b): VERIFIED.**
- April 1860, from St. Joseph to Sacramento: https://about.usps.com/who/profile/history/pdf/pony-express.pdf
- Relay stations "10 to 15 miles apart" and riders covering 75–100 miles: same USPS source. NPS gives "about every 12-15 miles": https://www.nps.gov/poex/learn/historyculture/upload/Rugged-Men-Rigorous-Rides-508.pdf
- The leather mochila over the saddle with "padlocked" pockets, a horse change in "just two minutes", a hand-off every 75–100 miles, an average of 10 days, a "25-day stagecoach" or "months" by ship, and "only 19 months" of service: https://www.history.com/articles/10-things-you-may-not-know-about-the-pony-express
- The telegraph was completed on 24 Oct 1861, and the Pony Express officially closed two days later, on 26 Oct 1861: https://www.loc.gov/item/today-in-history/october-24/
- USPS says "18 months". Either figure fits "about 19 months" (3 Apr 1860 – 26 Oct 1861).

**"Trunks wider than a car" (T.2.a): VERIFIED.**
- The General Sherman tree's maximum diameter at the base is 36.5 ft: https://en.wikipedia.org/wiki/General_Sherman_Tree

**Tree trunk layers (T.2.a): VERIFIED, with the simplification noted above.**
- Outer bark protects. The inner bark (phloem) carries food. The cambium is the growing layer. Sapwood carries water up. Heartwood is old sapwood and the "central, supporting pillar": https://www.fs.usda.gov/learn/trees/anatomy-of-tree
- One annual ring forms each year, and rings can be counted for age: https://mdc.mo.gov/magazines/conservationist/1996-10/tree-rings
- Thick bark protects the cambium from fire: https://www.arborday.org/stories/fire-resistant-trees.cfm

**Dunes and sea oats (TS-CE): VERIFIED.**
- Sea oats are "protected by law. It is illegal to pick and/or tamper with sea oats in Georgia". Their leaves and stems trap blown sand. They grow up when buried. Their roots form a "lattice-work" that holds the sand. Georgia DNR Coastal Resources: https://coastalgadnr.org/sea-oats
- **Wooden walkways (previously unsourced): VERIFIED.** A Georgia DNR permit notice describes a "wooden dune crosswalk" over the dunes on Tybee Island: https://coastalgadnr.org/cfk-properties-inc-construction-and-maintenance-shared-dune-crosswalk-708-butler-avenue-tybee
- Tybee ordinance: it is illegal to disturb the dunes or pick the plants: https://digital-release.wsav.com/?p=264205
- Caution: that WSAV article also calls sea oats "federally protected", and I could not confirm that. The site text does NOT make that claim, so no change is needed.

**Hot-air balloon parts (V.3.a): VERIFIED.**
- The three main components are the envelope, the basket and the burner. A crown "parachute" vent can let out hot air to control descent: https://planoballoonfest.org/p/about/anatomy
- The parachute-valve cord runs down to the basket for the pilot: https://www.chm.bris.ac.uk/webprojects2003/hetherington/final/Hot_air_balloon_parts.html
- Flights are early in the morning because the air is cooler and more stable. Later, thermals make the air bumpier, and balloons cannot be steered directly: https://rainbowryders.com/about/blog/best-weather-for-hot-air-ballooning/

**Pecan harvest (V.3.a TB1): VERIFIED.**
- The UGA home pecan calendar runs the harvest from September/October to "Harvest the crop frequently" in November/December: https://fieldreport.caes.uga.edu/publications/C1340/home-pecan-tree-management-calendar/

## Summary of verdicts

| Form | Verdict |
|---|---|
| 3.L.GC.2.b | PASS WITH SHOULDS (an isomorphic clone of form A; TB1–TB3 are easier than form A and copy practice patterns) |
| 3.T.T.1.a | PASS |
| 3.T.T.1.c | PASS |
| 3.T.SS.2.a | PASS |
| 3.T.T.4.a | PASS |
| 3.T.T.2.a | PASS WITH SHOULDS (TB2 lexical echo between Part A and Part B) |
| 3.T.T.2.b | PASS |
| 3.T.RA.2.a | PASS |
| TS-CE | PASS |
| 3.L.V.3.a | PASS |
| 3.L.V.2.a | PASS WITH SHOULDS (TB5 "burst out" echo; TB4 affixes all from practice P4/P1) |
| GUM irregular plurals | PASS WITH SHOULDS (every target word reused from form A or practice) |
| GUM irregular past tense | PASS |

None of the forms FAILS. There are no wrong keys, no ambiguous keys, no point mismatches and no factual errors.

## What I did not do
- I did not click through each form to a full score in the browser. The keys were confirmed by the blind solve, and the smoke test only confirmed that each form loads with no errors and no horizontal scroll.
- I did not run `python3 verification/guard.py` or `node verification/check-writing.js`. They are outside this review's scope.
- The DOK labels are checked only for consistency with form A. I judged them plausible, but I did not re-derive each one from a DOK framework.

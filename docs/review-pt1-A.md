# Review A: Practice Test 1 (independent content, item and fact review)

**Reviewer role:** Strict Georgia Grade 3 ELA teacher, test writer and fact-checker (SPEC §7, quality gate 2).
**Date:** 2026-10-20
**Scope:** `js/data/sets/PT-1.js`: 3 passages and 24 items (31 points).
**Not changed:** PT-1.js was not edited.

## How this review was done

- I read all of SPEC.md, PT-1.js, the standards used (`standards.js`) and the matching ALDs (`alds.js`). I also read `js/pp.js`, `js/engine/player.js` and `js/engine/items.js` to see how captions, headings, match rows and dropdowns actually render.
- **Checked by script (Node, loading the real file):**
  - Every `targets` and `answer` ref resolves to a real sentence.
  - Every EBSR Part B choice appears word for word in its passage.
  - Every `mc` and Part A has exactly one key, and each `ms` has `pick` keys.
  - Every `std` code exists in `standards.js`.
  - Totals are 24 items, 31 points, 7 two-point items, and DOK points of 3/18/10.
  - **No broken refs, no non-verbatim quotes, no unknown codes, no miscounts.**
- **Child-visible paragraph numbers** in prompts and clues were checked against the numbering in `player.js`, which skips headings and captions. Paragraphs 4, 6, 9 and 11 of p1, and paragraphs 1, 3 and 4 of p2, all point to the right text.
- **Engine facts that matter for this form:**
  - mc, ms and EBSR choices are shuffled.
  - Dropdown options are shuffled (`ctx.ddOrder`).
  - Free-standing hottext options are shuffled.
  - Match rows are shuffled, but match columns are not.
  - A caption renders as an italic grey box with the `Caption: ` prefix **removed**, so nothing on screen tells the child it is a caption.
  - A match item renders as cards, each with the cause text and the effect buttons **beneath** it.
- **Readability.** Lexile can't be measured offline, so I used mean sentence length (MSL) and Flesch-Kincaid grade (FK) as a proxy:

  | Passage | Words | Sentences | MSL | FK | SPEC range | OK? |
  |---|---|---|---|---|---|---|
  | p1 "The Blue Pitcher" | 531 | 47 | 11.3 | 3.4 | literary 250–600 | yes |
  | p2 "Why Leaves Change Color" | 357 | 29 | 11.7 | 4.4 | informational 200–500 | yes |
  | p3 "Hunters of the Night" (draft) | 118 | 9 | 13.1 | 3.9 | draft 6–10 sentences | yes |

- **Originality:** A web search for the distinctive story lines found no match. No passage or item reuses another Peach Prep set (checked by grep across `js/data/sets` and `js/data/tasks`).

**Severity key:**
- **MUST:** a wrong answer, two defensible answers, a factual error, or a broken ref.
- **SHOULD:** unclear, weak, mis-tagged or against the spec.
- **NIT:** polish.

**Bottom line:** I found no MUST. Every key is right and every quote and ref is valid. The SHOULDs cluster in four places:
- a timeline flaw in the story;
- a caption with no picture;
- one match item with a defensible alternative pairing;
- several clues that give away the answer.

---

## Passage findings

**P1-a · SHOULD · p1, paragraphs 12–14: the story's timeline doesn't work.**
- **Problem:** Mrs. Greene asks, "Could you make another one **by next Saturday**?" Then "**The next Saturday**, I sat beside Aunt Bea while the wet clay spun between her hands." So the new pitcher is only being thrown on the day it is due.
- A thrown pitcher has to dry, be fired, be glazed and be fired again, which takes days to weeks. It can't be handed over that day.
- Also, "When the new pitcher was **finished**, I pressed my thumbprint into the bottom" can't happen: a finished, fired pitcher can't take a thumbprint. A sharp reader, or a parent who does pottery, will notice.
- **Fix:**
  - p1:12:3 becomes "Could you make another one before the wedding next month?"
  - p1:14:2 becomes "Before the clay dried, I pressed my thumbprint into the bottom of the new pitcher."
  - The sentence count is unchanged, so no ref moves. PT-1-5 step 5 still matches.

**P1-b · SHOULD · p1 (affects PT-1-1 to PT-1-7): the narrator's name first appears in paragraph 11.**
- **Problem:** Every p1 item says "Malik", for example PT-1-2's choices, PT-1-3's prompt and the PT-1-5 steps. But the child doesn't learn the narrator's name until "Thank you for telling me, Malik" in paragraph 11.
- A child who answers PT-1-1 or PT-1-2 after reading only the first half sees an unknown name. Real test items say "the narrator" in this situation, or the story names the narrator early.
- **Fix:** Name him early. Change p1:2:3 to: "She is picking it up at noon as a wedding gift for her daughter, so please be extra careful around it, Malik." The sentence count is unchanged.

**P1-c · NIT · p1:14:3 / PT-1-7: the last sentence states the theme outright.**
- **Problem:** "...telling the truth had been worth it" makes Part A close to recall. It is also better evidence for the theme than the keyed Part B quote. It is not offered as a Part B choice, so there is still only one defensible Part B answer.
- **Fix:** Either accept this and consider DOK 2 for PT-1-7, or end more subtly: "It was a small mark, but every time I see that pitcher, I remember the day I told the truth."

**P2-a · SHOULD · p2 caption (array 8) and PT-1-12: the caption describes a photo the child can't see.**
- **Problem:** "The star-shaped leaves of a sweetgum tree can turn red, purple, orange, or yellow in the fall" is written as a caption for a picture, but the site shows no images.
- The engine also strips the `Caption: ` label, so the child sees an unlabelled italic sentence. Then PT-1-12 says "Read the caption in the section..."
- **Does the item still work as text?** Only partly.
  - The key, "gives an example of a tree whose leaves show many fall colors", is still the one defensible answer.
  - But the item teaches a false idea: that a caption is a free-standing fact. A caption's real job is to explain a picture. 3.T.C.1.b asks how a text feature contributes to purpose.
  - Choice D ("It **shows** how leaves use sunlight...") also leans on a picture that isn't there.
  - A child may not find "the caption" at all, because nothing labels it.
- **Fix (preferred):**
  1. Delete the caption entry and fold the detail into paragraph 5, for example: "Sweetgum leaves, which are shaped like stars, can turn red, purple, orange, or yellow."
  2. Replace PT-1-12 with a heading item, which is still 3.T.C.1.b at DOK 2. Prompt: "How does the heading 'Shorter Days, Brighter Colors' help the reader?"
     - Key: "It tells that the section explains how shorter fall days lead to bright leaf colors."
     - Distractors: "It tells that the section explains how leaves make food in the summer." / "It tells that the section explains how a tree lets go of its leaves." / "It tells that the section explains what fallen leaves do for the soil."
  - Removing the caption shifts p2 array indexes 9–12 to 8–11. No item refs p2 sentences, so only the header map comment in PT-1.js needs updating.
- **Fix (alternative):** Keep a box but make it a text feature that works without a picture. Make it a labelled "Tree Fact" sidebar, and have the engine show the label. Then the prompt asks how the fact box helps the reader.

**P2-b · SHOULD · p2:10:1 (array 10, visible paragraph 6): overstated.**
- **Problem:** "Before winter, a tree gets ready to drop its leaves" is true only of deciduous trees. A Georgia child sees pines, live oaks and magnolias stay green all winter. Paragraph 1 is careful ("many trees"), but this sentence is not.
- **Fix:** "Before winter, trees like maples and sweetgums get ready to drop their leaves." No item quotes this sentence.

**P2-c · NIT · p2:6:1: "As fall arrives, the days get shorter."**
- **Problem:** Days start shortening at the June solstice. Sources say the trigger is lengthening nights.
- **Fix:** "In the fall, the days keep getting shorter and the nights get cooler." **If you change it, update PT-1-14 Part B choice 2 to match word for word.**

**P3-a · NIT · p3 sentence 8: "The edges of an owl's wing feathers are soft."**
- **Problem:** This is half right. The trailing edges have soft fringes, but the leading edges of the outer feathers have *stiff*, comb-like fringes (ADW). It is a student draft, but the site still teaches it as fact.
- **Fix:** "(8) An owl's wing feathers are soft and fringed, so it can fly almost without a sound."

p3's deliberate weaknesses are all present and each is used by an item: the off-topic sentence 5 (PT-1-16), the weak conclusion in sentence 9 (PT-1-18) and the missing transition before sentence 6 (PT-1-15). The draft has no unintended convention errors.

---

## Item findings

### p1 "The Blue Pitcher"

**PT-1-1 · SHOULD · the clue gives away the answer.**
- **Problem:** "Is Malik rushing, or is he thinking hard about a choice before he acts?" is a two-way choice whose second half is a paraphrase of the key. That is a Help 3 walk-through, not a Help 1 strategy (§6.7).
- **Distractors (all wrong):** "moved quickly" (paragraph 6 shows no rushing); "called out loudly" (he says nothing); "held something up high so others could see" (a plausible misreading of "holding the pitcher in the air"; the why handles it well).
- **Fix:** "Read the rest of paragraph 6. What is Malik trying to decide while he holds the pitcher?"

**PT-1-2 · OK.**
- The key is right, and DOK 3 is acceptable for author's craft.
- "Does not like his job" is ruled out by paragraph 1 ("proud"). Nothing in the story supports "has used the wheel many times" or "why Aunt Bea needs help".

**PT-1-3 · NIT · the why misdescribes a target, and the prompt pre-answers its own question.**
- **Problem:**
  - The why says the other sentences "tell only what Malik or Aunt Bea does". But target p1:8:1 ("the bell over the door jingled, and Mrs. Greene walked in") is about the bell and Mrs. Greene.
  - The prompt asks "how does he feel?" and then says "Select the sentence that best shows that Malik feels bad".
  - p1:7:2 ("I even tried to whistle a song") hints at covering up a feeling, but only indirectly. p1:7:3 is clearly the best, so the key stands.
- **Fix:**
  - Prompt: "Which sentence best shows how Malik feels after he hides the chip?"
  - Why: "...The other sentences tell only what happens, like setting down the pitcher, sweeping, whistling, or Mrs. Greene walking in."

**PT-1-4 · OK.** The key and all distractors are clean, and the idiom code (3.T.SS.2.a) is right.

**PT-1-5 · OK.** The order is unambiguous: careful warning, bump, hide, confess, thumbprint. Each step is tied to a different paragraph.

**PT-1-6 · NIT · the key slightly overstates the text.**
- **Problem:** "...could cost him his **job** in the shop". The text says "maybe she would never let me help in the shop again". Malik is a child helping his aunt, so "job" in the work sense overreaches, even though paragraph 1 uses "My job was to dust".
- **Distractors (all wrong):** B fails both halves (he hides the chip, so he thinks it matters, and Aunt Bea says it "can be fixed"); C (nobody talks about who will fix it); D (Malik never mentions Mrs. Greene's anger).
- **Fix:** "Malik thinks the chip might mean he can't help in the shop anymore, but Aunt Bea thinks the chip can be fixed." Keep it about the same length as the distractors.

**PT-1-7 · OK.** One defensible answer in each part, and the Part B quotes are verbatim. See P1-c for the DOK and theme note.

### p2 "Why Leaves Change Color"

**PT-1-8 · OK.** Each distractor is a true detail from a single section.

**PT-1-9 · OK.** -ful means "full of", it is DOK 1, and the code is right.

**PT-1-10 · NIT · the clue narrows too much, and the DOK is borderline.**
- **Problem:** "Read paragraph 3, then read paragraph 4. You need one detail from each" points straight at the two keys. Pointing to paragraphs is the narrowing step (Help 2), not a strategy.
- Choosing two details that are stated almost word for word is closer to DOK 2.
- **Fix:** Clue: "This question asks only about yellow and orange, not red or purple. Which details tell where those colors come from and why you see them in fall?" On the DOK, see F-3.

**PT-1-11 · SHOULD · the distractors are not plausible misreadings (§6.8), and the clue echoes the key.**
- **Problem:**
  - "Compares Georgia trees with other states", "how people help solve a problem" and "steps to collect and save fall leaves" match nothing in the section. A child can rule them out without reading.
  - The clue's capitalised "BECAUSE" matches the word "because" in the key.
- **Fix:**
  - Distractors: "It tells the events of a tree's whole life in time order, from a seed to a tall tree." / "It asks a question about leaves and then gives several possible answers." / "It describes different kinds of trees and tells where in Georgia each one grows."
  - Do **not** add a compare/contrast-colors distractor, because paragraph 5 does contrast red with yellow, and that would make a second defensible answer.
  - Clue: "Read the first sentence of the section. How are the other sentences connected to it?"

**PT-1-12 · SHOULD · see P2-a.** This is the caption-without-a-picture problem. The fix replaces the item with a heading item.

**PT-1-13 · SHOULD · the match key has a defensible alternative pairing.**
- **Problem:** The text-direct pairing is: shorter days lead to less food making, and chlorophyll breaking down lets the hidden colors be seen.
- But paragraph 2 says chlorophyll "helps them do this job" (make food). So "chlorophyll breaks down, so the tree slows down its food making" is a sound inference.
- "Days get shorter, so (in the end) the hidden colors can be seen" is the same causal chain.
- A child who swaps rows 1 and 2 is reasoning correctly from the article and gets 1 of 2 points. §5 and the task require match keys to be unambiguous.
- **Fix:** Replace pair 1 so it can't chain into pair 2:
  - Row "In summer, a leaf has a lot of green chlorophyll." matches col "Yellow and orange colors stay hidden."
  - Keep row 2 matched to "Hidden yellow and orange colors can be seen."
  - The two effects are now opposites, so there is no overlap.

**PT-1-13 · SHOULD · the prompt says "Each sentence on the left".**
- **Problem:** The match renders as stacked cards with the cause on top and the effect buttons below. There is no left side.
- **Fix:** "Read each cause from the article. Choose the effect that goes with it. Use each effect once."
- Also NIT: the clue says the effect is in "the sentence right after it". For row 1, the effect is in the same sentence, and for row 3 it is two sentences later. Use "...then read nearby to find what happens because of it."

**PT-1-14 · NIT · distractor C is close to real science.**
- **Problem:** Part A's key ("less bright than usual") is the best-supported answer, because the article says sunny days help the reds be *bright*. It never says the red isn't made.
- But "They would likely turn yellow instead of turning red" is something a strong child could reason from paragraphs 3–5: less red means the hidden yellow shows more. Real red maples do look more orange in dull years.
- It is not a second defensible answer, because the text supports only "less bright". It is still a needless trap.
- **Fix:** Replace it with "They would likely turn red earlier than usual."
- Part B is verbatim and the key is right.

### p3 "Hunters of the Night" (revising)

**PT-1-15 · NIT · the why misstates a distractor.**
- **Problem:** "For example would mean sentence 6 is an example of sentence 4". It would mean sentence 6 is an example of what came before, meaning paragraph 2.
- The key "Besides seeing well," is the only transition among the options that links the two ideas.
- **Fix:** "For example would mean owls' hearing is an example of what paragraph 2 said, and it is not."

**PT-1-16 · OK.**
- Sentence 5 is the only selectable sentence that isn't about owls.
- Sentence 9 ("That is what I know.") is wisely left out of `targets`. Otherwise it would be a second "doesn't belong" answer.

**PT-1-17 · SHOULD · std mis-tag.**
- **Problem:** 3.T.RA.1.c is "Summarize researched... information from at least two credible sources". In the blueprint (SPEC §2 table) it is Constructing, assessed "inside the writing task". Picking two relevant facts from one book is not summarizing.
- The keys themselves are right and factually accurate (see the fact table).
- **Fix:** `std: ["3.T.T.2.d", "3.T.RA.1.b"]`. RA.1.b is "locating, gathering, selecting... information", which is a reading-domain skill. Alternatively, use `["3.T.T.2.d"]` alone. Also see F-3 on DOK.

**PT-1-18 · SHOULD · the clue eliminates all three distractors.**
- **Problem:** "It does not add a new fact, start the list over, or switch to the writer's opinion" names exactly the three wrong choices: desert fact, "First, ...", "I think...". That leaves the key.
- **Fix:** "A strong conclusion wraps up the main idea of the WHOLE draft. Reread sentence 1. Which choice brings the reader back to that idea?"
- The key is right. "I think owls are the most beautiful..." could be a weak but legal closing, but it isn't the *strong* conclusion asked for.

### Language (standalone)

**PT-1-19 · SHOULD · the clue gives away slot 1.**
- **Problem:** "Some animal names do not add an ending at all to mean more than one" leaves only "sheep", the one option with no ending.
- **Fix:** "For the first blank, say 'one ___, twelve ___' with this animal's name. Which spelling sounds and looks right?" Keep the slot 2 half of the clue.
- **NIT:** The why explains "Kendras" but not "Kendras'". Add: "Kendras' would mean something that belongs to more than one Kendra."
- Codes: both M rows, DOK 1. Good.

**PT-1-20 · OK.** Each distractor has exactly one error (mrs., lake Lanier, friday). It uses the R row.

**PT-1-21 · SHOULD · against SPEC §6.6 ("No participle after a being verb in grammar items").**
- **Problem:** "Grandpa **was born** on March 3 1961." is a being verb plus a past participle in a grammar item. The comma logic itself is right, and each wrong sentence has exactly one error.
- **Fix:** "Grandpa planted our oak tree on March 3 1961." Keep the comma error. The why becomes "...needs a comma after 3".

**PT-1-22 · OK.** Subject-verb agreement across a prepositional phrase. GC.2.c is writing-domain, which is correct for Constructing.

**PT-1-23 · OK.** "Drank" fits the sentence but doesn't show *how* he drank, and the why says so.

**PT-1-24 · OK.** The tree-trunk lure ("tall pine tree") is good, and the key is clearly supported by "parked the car and opened the trunk".

---

## Form-level findings (blueprint fit)

**Point and item mix (computed):**

| Measure | Blueprint (excluding the 8-point essay) | PT-1 | Verdict |
|---|---|---|---|
| Items / points | 40 / 52 | 24 / 31 (scale about 0.60 for both) | good |
| 2-point items | 12 of 40 (30%) | 7 of 24 (29%) | good |
| Points from 2-point items | 24 of 52 (46%) | 14 of 31 (45%) | good |
| Interpreting / Constructing | 34 / 18 (65% / 35%) | 21 / 10 if GC.1 items count as Constructing (68% / 32%) | good |
| DOK 1 | 3–6 pts (6–12%) | 3 (10%) | in band |
| DOK 2 | 24–36 pts (46–69%) | 18 (58%) | in band |
| DOK 3 | 12–21 pts (23–40%) | 10 (32%) | in band, but fragile (F-3) |

**Claim coverage, scaled by 0.6:**

| Claim | Target | PT-1 |
|---|---|---|
| Interpreting: Context + Structure & Style | about 3.6 | 4 (items 4, 6, 11, 12) |
| Interpreting: Techniques | about 9.6 | 13 (items 2, 3, 5, 7, 8, 10, 13, 14) |
| Interpreting: Research & Analysis | about 3.6 | 0 primary (RA.2.a appears only as a second tag) |
| Interpreting: Language | about 3.6 | 4 (items 1, 9, 23, 24) |
| Constructing: Context + Structure & Style | about 3.6 | 2 (items 15, 16) |
| Constructing: Techniques | about 4.8 | 3 (items 17, 18) |
| Constructing: Language | about 7.2 | 5 (items 19–22) |

**Verdict:** 24 items and 31 points is a sensible scaled-down form. The scale is the same for items and points, and the 2-point share and DOK land almost exactly on the blueprint. Techniques are over-weighted, and Research & Analysis and Constructing are slightly light (F-2).

**F-1 · SHOULD · the blurb overstates the form.**
- **Problem:** "A full practice test..." is wrong on two counts:
  - The form is about 60% of the real length.
  - It has no 8-point opinion writing task, which is 13% of the test and all of its DOK 4.
- A parent may read the score as a predicted Milestones result.
- **Fix:**
  - Blurb: "A shorter practice test (24 questions, 31 points): a story, a science article, a draft to revise, and language questions. The writing task is practiced separately."
  - On the results screen, don't convert points to an achievement level.

**F-2 · SHOULD · coverage gaps to fill in the series, or by swapping items.**
- **Problem:** The form has no:
  - opinion text (3.T.T.3.a);
  - poem (3.T.T.4.a);
  - paired texts (3.T.T.2.c / 3.T.T.1.d), which the real test usually includes;
  - primary Research & Analysis item (3.T.RA.1.b, 3.T.RA.2.b credibility);
  - 3.L.GC.2.a, 3.L.V.3.b (synonyms, antonyms, homophones) or 3.L.V.3.d (dictionary);
  - Constructing vocabulary (3.L.V.1.b / 3.L.V.2.c / 3.L.V.3.e).
- With 31 points, not everything fits, and that is acceptable.
- **Fix:**
  - Make PT-2 lead with an opinion or paired set and a poem.
  - In PT-1, change PT-1-17 to RA.1.b (see that item).
  - Consider turning one language mc into 3.L.V.3.b or 3.L.V.3.d (a dictionary-entry `stem`).
  - Record in the PT-1 header which genres it covers, so PT-2 and PT-3 rotate deliberately.

**F-3 · NIT · DOK 3 margin.**
- **Problem:** PT-1-10 (two stated details) and PT-1-17 (pick facts that match a topic sentence) are arguably DOK 2. If both are re-tagged, DOK 3 drops to 6 of 31 (19%), below the 23% floor.
- **Fix:** Either keep them with a one-line justification in the header, or make one of them truly DOK 3. For example, PT-1-10 could ask which two details explain why yellow appears *without* the tree making new color. PT-1-7 is a less likely candidate (see P1-c).

---

## Counts

| Severity | Count | Findings |
|---|---|---|
| **MUST** | **0** | — |
| **SHOULD** | **14** | P1-a, P1-b, P2-a / PT-1-12, P2-b, PT-1-1, PT-1-11, PT-1-13 (pairing), PT-1-13 ("on the left"), PT-1-17, PT-1-18, PT-1-19, PT-1-21, F-1, F-2 |
| **NIT** | **10** | P1-c / PT-1-7, P2-c, P3-a, PT-1-3, PT-1-6, PT-1-10, PT-1-14, PT-1-15, PT-1-19 (why), F-3 |

---

## Facts checked

| # | Claim (where) | Verdict | Source |
|---|---|---|---|
| L1 | Many Georgia trees show fall color (p2:1:1) | Verified | [Georgia Forestry Commission Leaf Watch reports](https://gatrees.org/wp-content/uploads/2023/11/2023-GFC-North-GA-Fall-Leaf-Report-11-08-2023.pdf) |
| L2 | Green chlorophyll helps leaves make food from sunlight, water and air, and makes leaves look green (p2:3) | Verified ("air" is a fair grade-3 shorthand for carbon dioxide) | [Mass.gov, *Why Leaves Change Color*](https://www.mass.gov/doc/why-leaves-change-color/download) |
| L3 | Yellow and orange pigments are in the leaf all summer, hidden by chlorophyll (p2:4; PT-1-10) | Verified | Mass.gov (above); [Forest Preserve District of Will County](https://www.reconnectwithnature.org/headlines/news/hoping-for-dazzling-fall-color-fingers-crossed-for-the-right-weather) |
| L4 | Shorter days and less light: the tree slows food making, and chlorophyll breaks down and is not replaced (p2:6; PT-1-11, PT-1-13) | Verified. "As fall arrives, the days get shorter" is loose: the cue is lengthening nights, which starts after June (NIT P2-c) | Mass.gov (above) |
| L5 | Red and purple are not in the leaf all summer; some trees make them in fall (p2:7:1–3) | Verified. Sources say "late summer and fall" | [Purdue FNR Extension](https://purdue.edu/fnr/extension/fall-color-dud); Will County (above, quoting USFS) |
| L6 | Many maples and sweetgums make red and purple (p2:7:3) | Verified. "Many" is right, because some maples turn yellow | [USDA Forest Service fall colors](https://www.fs.usda.gov/fallcolors/2018/science.shtml); Mass.gov (red maple scarlet, black maple yellow) |
| L7 | Sunny fall days and cool nights make reds especially bright (p2:7:4; PT-1-14) | Verified. Sources add "cool but not freezing" | Purdue (above); Mass.gov (above) |
| L8 | Inference: a cloudy fall gives duller reds (PT-1-14 key) | Verified | Will County: "Warm days that are cloudy and rainy tend to result in less brightly colored fall leaves"; Purdue (warm, rainy weather lowers pigment) |
| L9 | Sweetgum leaves are star-shaped and turn red, purple, orange or yellow (caption) | Verified | [NC State Extension Plant Toolbox, *Liquidambar styraciflua*](https://plants.ces.ncsu.edu/plants/liquidambar-styraciflua/common-name/sweetgum-tree) |
| L10 | A thin layer of cells forms where the stem joins the branch and cuts the leaf off (p2:10; PT-1-13) | Verified | [Wikipedia, *Abscission*](https://en.wikipedia.org/wiki/Abscission); [UNL Extension, *The Leaves of Fall*](https://extension.unl.edu/statewide/buffalo/Yard/The%20Leaves%20of%20Fall%2012-02-2017.pdf) |
| L11 | Dropping leaves helps the tree save water in winter (p2:11:1) | Verified (simplified: sources also cite leaves freezing) | [TÜV Nord, *Why do trees shed their leaves*](https://www.tuev-nord.de/en/knowledge/explore/why-do-trees-shed-their-leaves-in-the-autumn/); UNL (above) |
| L12 | Fallen leaves break down and add nutrients to the soil (p2:11:2–4; PT-1-13) | Verified | [NC Cooperative Extension, New Hanover County](https://newhanover.ces.ncsu.edu/2025/10/leave-the-leaves-benifits-pollinators) |
| L13 | "Before winter, a tree gets ready to drop its leaves" (p2:10:1) | **Overstated:** true only of deciduous trees. Evergreens keep their leaves (SHOULD P2-b) | Mass.gov (above; contrasts evergreens) |
| O1 | Many owls sleep by day and hunt at night (p3 s2) | Verified ("most species") | [Animal Diversity Web, *Strigiformes*](https://animaldiversity.org/accounts/Strigiformes/) |
| O2 | Large eyes help owls see in very little light (p3 s3) | Verified (not total darkness, and the draft doesn't claim that) | ADW (above) |
| O3 | An owl can turn its head much farther than a person (p3 s4) | Verified: about 270° compared with about 160–180° | [U. of Illinois Vet Med, *Owl Oddities*](https://vetmed.illinois.edu/vetmed-wildlife-blog/owl-oddities/) |
| O4 | Excellent hearing; some owls find prey under leaves or snow by sound (p3 s6–7) | Verified | [Canadian Encyclopedia, *Great Grey Owl*](https://thecanadianencyclopedia.ca/en/article/great-grey-owl); [Wikipedia, *Sound localization in owls*](https://en.wikipedia.org/wiki/Sound_localization_in_owls) |
| O5 | Soft feather edges let owls fly almost silently (p3 s8) | **Partly right:** trailing edges are soft-fringed, but leading edges have stiff comb-like fringes (NIT P3-a) | ADW (above); Illinois Vet Med (above) |
| O6 | A ring of stiff feathers around the face gathers sound toward the ears (PT-1-17 key) | Verified (facial ruff) | [Wikipedia, *Facial disc*](https://en.wikipedia.org/wiki/Facial_disc); ADW (above) |
| O7 | In some owls, one ear opening is higher than the other, which helps find where a sound comes from (PT-1-17 key) | Verified (barn owl, saw-whet owl, long-eared owl) | Wikipedia, *Sound localization in owls* (above) |
| O8 | Owl eyes are tube-shaped and fixed, so the owl turns its head to look sideways (PT-1-17 distractor) | Verified | Illinois Vet Med (above); ADW (above) |
| O9 | Owls swallow small prey whole and bring up bones and fur as a pellet (PT-1-17 distractor) | Verified | [Audubon, *What Is an Owl Pellet?*](https://audubon.org/news/what-owl-pellet); ADW (above) |
| O10 | Some owls nest in tree holes instead of building nests (PT-1-17 distractor) | Verified (owls don't build their own nests) | ADW (above) |
| O11 | Some owls live in deserts and nest in holes in tall cacti (PT-1-18 distractor) | Verified (Elf Owl) | [All About Birds, *Elf Owl Life History*](https://www.allaboutbirds.org/guide/Elf_Owl/lifehistory) |

**Not verified:** none. Every claim was confirmed, or confirmed with the overstatement noted above. The USDA Forest Service "science of fall colors" page failed to load, so I used university and extension sources for the pigment science instead.

# Review A: Reading text sets (independent content and fact review)

**Reviewer role:** Grade 3 ELA content and fact-check reviewer, as an independent reviewer (SPEC §7, quality gate 2).
**Date:** 2026-10-20
**Scope:** R-LIT-01, R-LIT-02, R-POE-01, R-INF-01, R-INF-02, R-OPN-01. That is 47 items and 8 passages.
**Not changed:** No set file was edited.

## How this review was done

- Read SPEC.md (§2, §5, §6), all six set files, `ga-grade3-ela-alignment.json` and `alds.js`. Also read `js/engine/items.js`, `js/engine/player.js` and `js/pp.js`, to see how items, headings, captions and Help steps actually render.
- **References: checked by script.** Every `targets`/`answer` reference resolves to a real sentence. Every EBSR Part B quote appears word for word in its passage. Every mc/Part A has exactly one key, and every ms/Part B has `pick` keys. Child-visible paragraph numbers in prompts were checked against the heading/caption-skipping numbering in `player.js`. **No broken references.**
- **Facts:** checked with web sources. The table is at the end.
- **Readability:** Lexile cannot be measured offline. As a proxy I used mean sentence length (MSL) and Flesch-Kincaid grade (FK):

  | Passage | Words | MSL | FK |
  |---|---|---|---|
  | LIT-01 | 405 | 8.3 | 1.8 |
  | LIT-02 | 419 | 10.2 | 3.3 |
  | POE-01 p2 | 124 | 12.4 | 4.5 |
  | INF-01 | 316 | 13.7 | 5.6 |
  | INF-02 p1 | 214 | 13.4 | 6.1 |
  | INF-02 p2 | 212 | 12.5 | 5.1 |
  | OPN-01 | 282 | 12.8 | 5.0 |

Severity key:
- **MUST**: a wrong key, two defensible answers, a factual error, or a broken reference.
- **SHOULD**: unclear, weak or mis-tagged.
- **NIT**: polish.

---

## Cross-set findings (engine and data patterns that affect several sets)

**X-1 · SHOULD · Every dropdown answer is the first option, and the engine does not shuffle dropdown options.**
- **Affected:** R-LIT-01-q2; R-LIT-02-q2 and q6 (both slots); R-POE-01-q6; R-INF-01-8; R-INF-02-3; R-OPN-01-6. All 8 slots have `answer: 0`.
- **Why it matters:** `T.dropdown.render` (items.js ~line 215) lists options in data order. mc, ms and EBSR choices are shuffled, but dropdowns are not. A child who notices "the answer is always the top one" scores every dropdown without reading. This does not make a key wrong, so it is not a MUST, but fix it before release.
- **Fix:** Either shuffle once per sitting in `render` (keep `ctx.ddOrder` the way `ctx.order` is kept for mc), or vary `answer` across the data. For example, R-LIT-01-q2 could be `["light and easy to carry", "strong and hard to break", "small and easy to hide", "bright and full of color"], answer: 1`.

**X-2 · SHOULD · Match items with one column per row are keyed on the diagonal (row 1 to column 1, row 2 to column 2, and so on), and neither rows nor columns are shuffled.**
- **Affected:** R-LIT-01-q5 (0,1,2,3); R-POE-01-q3 (0,1,2,3); R-INF-01-4 (0,1,2,3).
- **Why it matters:** `T.match.render` keeps data order, so the pattern is visible.
- **Fix:** Reorder the rows in the data. For example, R-LIT-01-q5 rows in this order: "hands Theo the string" (3), "snaps" (1), "wants everyone to know" (0), "You noticed something I missed" (2). Or shuffle row order in the engine.

**X-3 · SHOULD · Help 2 ("point to the paragraph") gives away the answer on poem hot-text items.**
- **Affected:** R-POE-01-q4.
- **Why it matters:** For poems, `visibleLabel` returns `"stanza N, line M"`. `T.hottext.narrow` then rules out every target except the one with the answer's exact label, and says "Look in stanza 3, line 1." That is the answer itself, which breaks SPEC §4 (Help 2 narrows, Help 3 shows).
- **Fix:** In `narrow`, when the passage has `lines`, compare only the stanza: `"stanza " + r.para`.

**X-4 · NIT · Two items rule out nothing at Help 2, because all their targets are in one paragraph.**
- **Affected:** R-LIT-02-q3 (all targets in paragraph 8) and R-OPN-01-1 (all targets in paragraph 1).
- **Why it matters:** The narrowing step says "Look in paragraph 8" and rules out nothing.
- **Fix:** For single-paragraph target sets, fall back to the `options`-style rule-out (cross out about half the wrong sentences).

**X-5 · NIT · Some EBSR prompts start with "Part A:" or "Part B:", and the engine already prints those labels.**
- **Affected:** R-INF-01-5, R-INF-02-5 and R-OPN-01-4.
- **Why it matters:** The engine already prints "Part A" and "Part B" (items.js ~line 155), so the child sees "Part A / Part A: What is…".
- **Fix:** Remove the prefixes, which also matches the LIT and POE sets.

**X-6 · NIT · The DOK for vocabulary-in-context items is inconsistent.**
- **Affected:** R-LIT-01-q2 is DOK 1. R-LIT-02-q2, R-POE-01-q6 and R-INF-01-8 are DOK 2.
- **Why it matters:** All four are the same task.
- **Fix:** Pick one. DOK 2 is more defensible, because the child must use context.

---

## R-LIT-01 · Deja's Kite

**Passage:**
- 405 words, MSL 8.3, roughly 450–550L. The age-appropriate estimate is fine.
- The plot is clear. The physics is right: a longer tail stabilizes a spinning kite.
- No errors found.
- Exact-phrase searches for the two similes found no published source.

**R-LIT-01-q6 · SHOULD · The Part B distractors are not plausible, and the clue gives Part B away.**
- **The problem:**
  - The distractors "Theo grinned.", "It did not spin." and "Theo let go." are about Theo or the kite, not Deja. Any child can drop them, which breaks SPEC §6.8.
  - The clue says "find the words Deja says". Only one of the four choices is something Deja says, so the clue hands over Part B.
- **Rewrite:**
  - Part B prompt: "Which sentence from the story best supports the answer to Part A?"
  - Distractors (all about Deja, none showing the change): `"\"Now!\" she called."`, `"She looked down at her own kite with its tiny ribbon."` and `"Deja's cheeks felt hot."`
  - Clue: "Compare what Deja says in paragraph 3 with what she says in the last paragraph. For Part B, find the sentence that shows how Deja thinks about the kite at the end."

**R-LIT-01-q8 · SHOULD · The second key is something Deja does, not something the story shows she learns.**
- **The problem:** The prompt is "Which TWO lessons does Deja learn". Key 2, "It is important to say sorry when you hurt someone", is something Deja does in paragraph 11. Nothing in the story shows her learning it, and the `why` itself says "which she does". A strict reader could reject it as a learned lesson.
- **Rewrite:**
  - Prompt: "Which TWO lessons does the story teach? Choose two answers."
  - In `why`, change "She also learns to say sorry…" to "The story also shows that saying sorry when you hurt someone can fix things, which Deja does in paragraph 11."

**R-LIT-01-q7 · NIT · One distractor is a silly choice.**
- **The problem:** "They show that Theo likes fish more than dragons." This breaks SPEC §6.8.
- **Rewrite:** "They show that other children built better kites than Deja." This is a plausible misreading, at the same length.

**Other items:** q1, q2, q3, q4 and q5 have one defensible answer each, and their tags fit.
- q4: the order is unambiguous, with no events at the same time.
- q5: each row has one best trait once "use each trait once" applies. The pattern problem is under X-2.

---

## R-LIT-02 · Half-Moon Cakes

**Passage:**
- 419 words, MSL 10.2.
- The cultural details all check out: Chuseok as a fall harvest and thanks festival on a full moon, families going home, songpyeon made together on the eve, half-moon shape, sesame-and-honey filling, steaming on pine needles. Cracking from overfilling or from dough that is not smooth is also right. Sources are in the table.
- No textual overlap found with *Giving Thanks with Halmoni* (2025), the closest published Chuseok picture book.

**Passage, paragraph 3 · NIT · Paragraph 3 calls the moon on Chuseok eve full.**
- **The problem:** "Outside, the full moon was rising" happens on the night *before* Chuseok (paragraph 1). Chuseok falls on the full moon (the 15th day of the 8th lunar month), so the eve's moon is nearly full. The ending, "under the bright, round moon", is fine.
- **Rewrite:** "Outside, the big, round moon was rising…"

**R-LIT-02-q5 · NIT · The steaming step is ambiguous, because the cakes are steamed twice.**
- **The problem:** Grandmother steams cakes twice (paragraphs 7 and 12). The step "Grandmother steams the cakes on pine needles." has only one logical place, but a careful child may hesitate.
- **Rewrite:** "Grandmother steams the first batch of cakes on pine needles."

**R-LIT-02-q7 · NIT · Two Part A distractors are too easy to drop.**
- **The problem:** "Holidays are the most fun when the moon is full." and "Kids should play outside instead of cooking." are easy to eliminate.
- **Rewrite:** "Making the most cakes shows that you worked the hardest." and "The oldest person in a family should do the cooking."

**Other items:**
- q1 tests the narrator's perspective (3.T.C.2.a), and the Grandmother distractor is a good one.
- q2, q3 and q6 are fine. Their dropdown position cue is covered under X-1.
- q4: Joon's pinching "bit by bit" is a third real difference, but it is not offered, so the two keys stand.

---

## R-POE-01 · Fireflies (poem) + The Firefly Jar (story)

**Poem:**
- 16 lines, AABB in every stanza (away/day, still/hill; glow/low, grass/pass; stars/Mars, see/me; tonight/bright, stair/air), in a steady tetrameter.
- Exact-phrase search: no match. The closest hit, a *Stone Soup* student poem ("Firefly Sky"), shares the theme but not the wording.

**Passage p2 · SHOULD · The story is below the literary minimum and runs as one long paragraph.**
- **The problem:** "The Firefly Jar" is **124 words**, and SPEC §6.2 sets literary text at 250–600. It is also one 10-sentence paragraph with dialogue in it, which is unusual layout for grade 3 and makes "paragraph 1" the only reference available.
- **Rewrite:** Split it into at least 3 paragraphs: catching the firefly, waiting and watching, letting it go. Grow it to about 250 words by adding Marcus's thoughts as he watches the one dim firefly next to the hundreds outside. For example: "It looked smaller in the jar than it had in the air. Its light did not blink again."

**R-POE-01-q4 · SHOULD · The prompt and clue turn the item into a word hunt.**
- **The problem:** The prompt says "uses a metaphor to describe *the field*", and the clue says "First find the line that talks about the field." Only one target line contains "field", so the item no longer tests figurative language. The Help 2 leak is under X-3.
- **Rewrite:**
  - Prompt: "Select the line in stanzas 2 and 3 that uses a metaphor to show how the whole yard looks when the fireflies glow."
  - Clue: "A metaphor says one thing IS or BECOMES something else, without like or as. Rule out lines that use like or as, then ask which line is about the whole place, not one firefly."
  - Check: 3:4 ("Each little spark…") is a metaphor about a single firefly, so it stays wrong.

**R-POE-01-q7 · SHOULD · "Never" claims more than the poem says.**
- **The problem:** The key says "the speaker *never* catches one", but the poem says only "I do not need a jar *tonight*." A strict teacher would mark "never" as unsupported.
- **Rewrite:** "Marcus catches a firefly before he lets it go, but the speaker does not catch one." This keeps the length near the distractors.

**R-POE-01-q3 · NIT · The prompt and the last meaning do not match the lines exactly.**
- **The problem:**
  - The prompt says the lines "describe the fireflies", but row 3 ("The field becomes a sky of stars") describes the field.
  - Column 4 says "*One* firefly's light…", but the line says "*Each* little spark."
- **Rewrite:**
  - Prompt: "…figurative language to describe the fireflies and the field."
  - Column 4: "Each firefly's light floats slowly past the speaker."

**R-POE-01-q6 · NIT · The clue points straight at a synonym.**
- **The problem:** The clue says "look at stanza 2", where the line "They blink their lights" holds the synonym.
- **Rewrite:** "The tiny lights are fireflies. Think about what a firefly's light does when you watch it at night."

**R-POE-01-q2 · NIT · The key is the longest choice.**
- **The problem:** The key is 83 characters, and the distractors are 71–78.
- **Rewrite:** "It sets the scene: a quiet, dark evening before the fireflies come out."

**Poem setting · NIT · The setting shifts from "yard" to "field".**
- **The problem:** Stanza 1 says "The yard grows dark", and stanza 3 says "The field becomes…".
- **Fix:** Either is fine, but pick one, or make stanza 1 "The field grows dark." If q4 is rewritten as above ("the whole yard"), use "yard" in stanza 3 too.

**p2 premise · NIT · The premise is close to a well-known picture book.**
- **The problem:** The catch-and-release plot is close to Julie Brinckloe's *Fireflies!* (1985), which is widely used in Common Core exemplar lessons. No text is copied, and the premise is a common childhood experience.
- **Fix:** Optional. A distinct detail would help it stand apart.

**Other items:**
- q1 tests rhyme scheme (3.T.T.4.a), and its key is unique.
- q5 is fine. "I do not need a jar tonight" would also support the key, but it is not offered, so there is no double key.
- q8: both keys are found in both texts. The story's support for "best when free" ("That's better") is inferential but sound.

---

## R-INF-01 · Turtle Tracks on Georgia's Beaches

**Passage:**
- Paragraph numbering in prompts is correct. Heading and caption entries are skipped, so "paragraph 1" is array 1.
- All facts verified except the egg count (below).
- The passage leaves out that the female first uses her front flippers to make a body pit. Saying she digs the egg chamber with her back flippers is correct (NPS).

**Passage p1:5:3 (body paragraph 2) · SHOULD (facts) · "About one hundred eggs" understates the clutch.**
- **The problem:** Georgia DNR gives an average of about **120** eggs per nest (range 50–170), and its current page says "100–150". SC DNR also averages 120. "About one hundred" is at the low edge, not the typical figure.
- **Rewrite:** "Then she lays more than one hundred eggs, each one about the size of a golf ball."
- **Also update to match:**
  - R-INF-01-3 step 2: "The female lays more than one hundred eggs and covers them with sand."
  - R-INF-01-5 Part B choice 2: it must quote the new sentence exactly.

**R-INF-01-6 (and R-INF-01-4) · SHOULD · The caption has no picture.**
- **The problem:** `player.js` renders `Caption:` as a styled paragraph and there is no image, yet the clue says "A caption tells about a picture." A child will look for a picture that is not there. In the SPEC Help step, the caption also cannot do its job of explaining a visual (3.T.C.1.b).
- **Rewrite:** Either add an image (a simple illustration of a wire screen over a marked nest) with alt text, or change it into a labeled text box ("Did You Know?") and update:
  - q6 prompt: "Read the 'Did You Know?' box in the section 'Waiting in Warm Sand.' How does it help the reader?"
  - q6 clue: "A text box adds extra facts that are not in the paragraphs. Read only the box, then pick the choice that matches it."
  - q4 clue: "…(do not forget the text box)…"
  - The key text is also slightly ambiguous ("while they wait to hatch" could mean the people). Use: "It tells one way people keep the buried eggs safe until they hatch."

**R-INF-01-1 · SHOULD · The key is the longest choice.**
- **The problem:** The key is 103 characters, and the distractors are 88–90. Breaks SPEC §6.8.
- **Rewrite key (81 characters):** "Loggerheads nest on Georgia's beaches, and people help their babies reach the sea."
- **Also update:** Change the `why` quote to match.

**R-INF-01-4 · NIT · The prompt says "on the left", but the layout has no left column.**
- **The problem:** The match renders as stacked cards with buttons, not two columns.
- **Rewrite:** "Each sentence below is a cause. Choose the effect that goes with each cause."

**R-INF-01-2 · NIT · The clue's keyword appears only in the key.**
- **The problem:** The clue says "what the hatchlings move TOWARD", and "toward" appears in the key sentence only, so the item becomes word-matching.
- **Rewrite:** "Ask yourself: what do the hatchlings follow to get to the water? A sentence about getting lost is not the same as a sentence about finding the way."

**Passage p1:5:2 · NIT · "Warm" is repeated.**
- **The problem:** "the warm sand keeps the eggs warm."
- **Rewrite:** "During that time, the sun heats the sand, and the sand keeps the eggs warm."

**Other items:**
- q3: the order is unambiguous.
- q5: Part A has one defensible key. Part B's two keys are the only support, and the "hatchlings at night" sentence rules out a distractor without supporting the key.
- q7 (time order, 3.T.SS.1.a) and q8 (come ashore) are fine.

---

## R-INF-02 · The Okefenokee Swamp (paired)

**Passages:** Facts are largely accurate (see the table). Issues follow.

**p2:1:3 · SHOULD (facts) · The passage overstates where the name comes from.**
- **The problem:**
  - p2:1:2 correctly hedges: "It is often said to mean 'land of trembling earth.'"
  - But p2:1:3, "Visitors who explore the swamp soon learn *how it got this name*", then presents the folk meaning as the real origin.
  - Linguists think the name more likely comes from Hitchiti *oki fanôːki*, "bubbling water" (Wikipedia, which also notes the trembling-earth translation that FWS uses).
  - R-INF-02-7 row "how the swamp got its name" relies on this.
- **Rewrite:** "Visitors who explore the swamp soon see why people like this meaning." Then change R-INF-02-7 row 1 to "what the swamp's name is often said to mean". The answer stays "Passage 2 only".

**p1:5:3 · SHOULD (facts) · The cypress regrowth sentence is misdated and weakly sourced.**
- **The problem:**
  - "Since then [1937], young cypress trees have slowly begun to regrow." Logging ended in **1927** (Hebard; NGE and Sherpa Guides), so regrowth dates from then, not from the refuge.
  - "Have begun" also reads oddly about trees growing back for about 90 years.
  - The only source found for regrowth is a photographer's iNaturalist post, not an agency.
- **Rewrite:** "Today, many cypress trees are slowly growing back where the old ones were cut." If no agency source can be found, cut the sentence. The passage still ends well on the refuge sentence.

**R-INF-02-6 · SHOULD · Key 2 is not clearly in Passage 2.**
- **The problem:** Key 2, "Native American people are part of the swamp's history", is not clearly found in Passage 2. P2 says only that the *name* comes from a Native American word, and turning that into "part of the swamp's history" takes an inference. SPEC §6.3 requires each ms key to be *clearly* supported.
- **Rewrite key 2:** "The swamp has a connection to Native American people."
- **Also update:** Keep the `why` as is: P1 says they lived there, and P2 says the name comes from their word.

**R-INF-02-4 · SHOULD · The reason for the refuge is only implied, so a second sentence is defensible.**
- **The problem:**
  - The passage never links the worry (5:1) to the refuge (5:2), so "why" is left to inference.
  - A strict reader can also argue 4:2 ("They cut down many of the swamp's giant old cypress trees…") as the reason, since the logging is what caused the worry. That makes two defensible answers likely.
- **Rewrite passage p1:5:1:** "As the giant trees disappeared, people began to worry that the swamp and its animals could be lost." This keeps 5:1 as the clear best answer, because it states both the cause and the worry.
- **Also update:** Change the `why` quote to match.

**R-INF-02-1 · SHOULD · The `why` misdescribes the paragraphs.**
- **The problem:** The `why` says "Each paragraph tells about a different group: Native Americans, swampers, a company, loggers, and finally the government." But paragraph 1 is an introduction, and paragraph 2 covers both Native Americans and swampers. SPEC §5 requires `why` to be accurate.
- **Rewrite:** "After the introduction, the paragraphs tell about different people in time order: Native Americans and swampers, a company, loggers, and finally the government. Each of the other choices tells about only one paragraph."

**Passage p1 lexile label · SHOULD · The 640L estimate looks too low.**
- **The problem:** p1 has FK 6.1 and MSL 13.4, with words such as *unsuccessful*, *settler* and *national wildlife refuge*. It is very likely above 800L, outside SPEC §6.2.
- **Rewrite:**
  - p1:3:3 → "The plan did not work, and the company gave up after a few years."
  - p1:5:2 → "In 1937, the United States government made most of the swamp a national wildlife refuge. A refuge is a place where plants and animals are protected."
  - The second change also gives a cleaner definition. If you split 5:2, renumber the references: R-INF-02-4 targets `p1:5:2` and `p1:5:3`.
  - Re-estimate the lexile with a real analyzer before release.

**p2:5:1 · NIT · The two passages disagree on how much of the swamp is a refuge.**
- **The problem:** p1 says "*most* of the swamp" became a refuge, and p2 says "the swamp is a national wildlife refuge."
- **Rewrite:** "Today, most of the swamp is a national wildlife refuge, so its plants and animals are protected."

**R-INF-02-5 · NIT · The clue points to the evidence.**
- **The problem:** "Read the sentences just before the one about stepping" points straight at the Part B evidence.
- **Rewrite:** "Find the paragraph that tells about the shaking ground. What is that ground made of?"

**Other items:**
- q2: the order is unambiguous. The swampers, who overlap the late Native American period, are correctly left out.
- q3 (re-), q7 and q8 are fine.

---

## R-OPN-01 · Let's Grow a School Garden!

**Passage:**
- A clear opinion structure: opinion, three reasons with First / Another reason / Finally, a counterargument and response, and a call to action.
- The names are fictional and the header comment says so. No brand names.
- The nurse's claim is supported by research (UC Davis first-grade garden study).

**p1:2:2 (and R-OPN-01-3 row 1) · SHOULD (facts) · Georgia third-grade science may not cover how plants grow and change.**
- **The problem:**
  - The passage says "In third grade, we study how plants grow and change."
  - Georgia's grade 3 life-science standard S3L1 is about the plants, animals and habitats of Georgia's geographic regions. Plant life cycles are grade 2 in the GSE.
  - OPN-01-3 asks a Georgia child to call this sentence a **Fact**. A Georgia third grader may know it is not what their class studies.
  - I could not open the full GaDOE grade 3 science PDF (it redirects to a sunset page), so treat this as likely, not proven.
- **Rewrite p1:2:2:** "In third grade, we learn about the plants and animals that live in Georgia."
- **Also update:** Set OPN-01-3 row 1 to the same text (still Fact), and update the `why` to match.

**R-OPN-01-6 · NIT · The linking words need quotation marks.**
- **The problem:** The sentence frame names the linking words without quotation marks.
- **Rewrite:** `text: "The linking words \"Another reason\" tell the reader that Maya is {0}."`

**R-OPN-01-7 · NIT · The skill goes slightly beyond the tagged standard.**
- **The problem:** Answering an opposing view is not named in 3.T.T.3.a (opinion statement, reasons, evidence). The item can be answered at grade 3 (it hinges on "However"), so it is acceptable.
- **Fix:** Consider wording the prompt in terms of the standard: "Which sentence gives a reason that the garden would not be too much work?"

**Other items:**
- OPN-01-1, 2, 3 (once the row 1 change is made), 4, 5 and 8 each have exactly one defensible key.
- OPN-01-4 Part B correctly leaves out the Mr. Lane sentence, so there is no double key.
- OPN-01-5: the newsletter plus the last paragraph supports "principal and school families, to persuade".

---

## Standards tags summary

- All `std` codes are on the SPEC §2 Interpreting list.
- No grammar items in these sets.
- Tags match what each item measures, using the standard wording from `ga-grade3-ela-alignment.json`. No item is mis-tagged badly enough to rate SHOULD.
- Small judgment calls I would accept as written:
  - R-INF-01-2 (3.T.T.2.a): 3.T.T.2.b would also fit.
  - R-OPN-01-6 (3.T.T.3.a for linking words).
  - R-LIT-02-q6 (3.T.T.1.b for a summary).
- The DOK mix is reasonable. DOK 3 is used for EBSR, cross-text and author's-purpose items.

## Copying check

These exact-phrase and title searches found no published source:
- "The field becomes a sky of stars"
- "steady as a sailboat on a calm lake" / "twirled like a leaf in a storm"
- "a cake made in a hurry"
- the titles "Deja's Kite", "Turtle Tracks on Georgia's Beaches" and "Let's Grow a School Garden"
- the Firefly Jar plot with "Marcus"

The only resemblance is the plot echo of Brinckloe's *Fireflies!* (NIT above). Nothing resembles released GaDOE items in style or wording.

---

## Counts

| Severity | Count |
|---|---|
| **MUST** | **0** |
| **SHOULD** | **18** |
| **NIT** | **19** |

SHOULD by set:
- Cross-set: 3 (X-1, X-2, X-3)
- LIT-01: 2
- LIT-02: 0
- POE-01: 3
- INF-01: 3
- INF-02: 6
- OPN-01: 1

NIT by set:
- Cross-set: 3
- LIT-01: 1
- LIT-02: 3
- POE-01: 5
- INF-01: 3
- INF-02: 2
- OPN-01: 2

Highest-priority SHOULDs:
- X-1 (dropdown key is always first)
- X-3 (poem Help 2 reveals the line)
- R-INF-02-4 (a second defensible "why" sentence)
- R-INF-02-6 (weak ms key)
- The four fact wordings: eggs, name origin, cypress regrowth, grade 3 science.

---

## Facts checked

✔ = verified. ≈ = verified with a caveat or an imprecision (see the findings). ? = not verified.

### R-INF-01 (sea turtles)

| # | Claim in passage | Result | Source |
|---|---|---|---|
| 1 | Loggerheads nest on Georgia's barrier islands | ✔ The only species that nests there regularly | https://gadnrle.org/conservation/seaturtles |
| 2 | Nesting at night, usually May–August | ✔ "early May … through mid-August" | https://gadnrle.org/sites/default/files/wrd/pdf/fact-sheets/loggerhead_sea_turtle_2011.pdf |
| 3 | Only females come to land; males stay at sea | ✔ | https://www.nps.gov/guis/learn/nature/seaturtle-reproduction.htm |
| 4 | She digs a deep hole with her back flippers | ✔ "hind flippers … about two feet deep" | https://www.nps.gov/guis/learn/nature/seaturtle-reproduction.htm |
| 5 | "About one hundred eggs" | ≈ The average is about 120 (range 50–170); "100–150" | GA DNR fact sheet (above); https://gadnrle.org/conservation/seaturtles; https://www.dnr.sc.gov/seaturtle/cc.htm |
| 6 | Egg about the size of a golf ball | ✔ 4.1 cm mean diameter; a golf ball is 4.27 cm | https://www.dnr.sc.gov/seaturtle/cc.htm |
| 7 | Mother does not guard the nest | ✔ She returns to sea and may nest again | https://www.nps.gov/guis/learn/nature/seaturtle-reproduction.htm |
| 8 | Eggs incubate about two months | ✔ About 60 days | GA DNR fact sheet (above) |
| 9 | Warmer sand gives more females; cooler gives more males | ✔ | https://www.nps.gov/guis/learn/nature/seaturtle-reproduction.htm |
| 10 | Hatchlings emerge together at night when the sand is cooler | ✔ | https://myfwc.com/research/wildlife/sea-turtles/threats/artificial-lighting/ |
| 11 | Hatchlings crawl toward the brightest part of the sky, usually over the water | ✔ "inborn tendency to move in the brightest direction" | https://myfwc.com/research/wildlife/sea-turtles/threats/artificial-lighting/ ; https://www.dnr.sc.gov/seaturtle/lights.htm |
| 12 | Artificial lights confuse hatchlings, so some crawl away from the water | ✔ | https://www.dnr.sc.gov/seaturtle/lights.htm |
| 13 | Residents turn off outdoor lights and close curtains in nesting season | ✔ Tybee: "lights out", "shades drawn at night" | https://www.wtoc.com/story/31911145/lights-out-for-sea-turtles-on-tybee-island/ |
| 14 | Volunteers walk the beaches each morning, look for tracks and mark nests | ✔ | https://gpbnews.org/post/walk-beach-save-georgias-sea-turtles ; https://georgiawildlife.com/SeaTurtleCooperative |
| 15 | Wire screens keep animals from digging up eggs | ✔ "protected from raccoon predation by wire screening" | GA DNR fact sheet (above) |
| 16 | "Loggerheads have been nesting on these beaches for a very long time" | ? Too vague to verify; low risk | — |

### R-INF-02 (Okefenokee)

| # | Claim in passage | Result | Source |
|---|---|---|---|
| 17 | Southeast Georgia, stretching into northern Florida | ✔ 438,000 acres across the GA–FL border | https://en.wikipedia.org/wiki/Okefenokee_Swamp |
| 18 | One of the largest swamps in North America | ✔ The largest blackwater swamp in NA | https://en.wikipedia.org/wiki/Okefenokee_Swamp ; https://www.georgiaencyclopedia.org/articles/geography-environment/natural-history-of-the-okefenokee-swamp/ |
| 19 | People have used the swamp over thousands of years | ✔ "as early as 2500 bc" | https://kids.britannica.com/students/article/Okefenokee-Swamp/601170 |
| 20 | Native Americans lived on the islands and edges, and fished and hunted | ✔ Mounds, villages, hunting ground. "Gathered plants" is not explicitly sourced but is reasonable | https://www.georgiaencyclopedia.org/articles/geography-environment/human-history-of-the-okefenokee-swamp/ |
| 21 | 1800s settler families ("swampers") on islands: crops, animals, small boats | ✔ Families on islands in the 1850s, livestock, gardens, poled boats | NGE Human History (above); https://www.georgiaencyclopedia.org/articles/arts-culture/okefenokee-swamp-folklore/ |
| 22 | Late 1800s: a company dug a long canal to drain the swamp, cut trees and farm; it gave up after a few years | ✔ Suwanee Canal Co., 1891–1894, for logging and "eventual crop cultivation" | https://en.wikipedia.org/wiki/Suwannee_Canal ; NGE Human History (above) |
| 23 | Early 1900s: loggers built railroads into the swamp and cut giant old cypress | ✔ Hebard, 1909–1927, about 425 million board feet | https://sherpaguides.com/georgia/okefenokee_swamp/hebard_lumber_company/ |
| 24 | People worried; in 1937 the US made most of the swamp a national wildlife refuge | ✔ FDR executive order, 1937. The refuge is about 403,000 of 438,000 acres (NGE says about 80%) | https://en.wikipedia.org/wiki/Okefenokee_National_Wildlife_Refuge ; NGE Human History (above) |
| 25 | Young cypress have regrown "since then" (1937) | ≈/? Only a non-agency source; logging ended in 1927, not 1937 | https://inaturalist.ca/posts/53596-imagine-pristine-okefenokee |
| 26 | The name comes from a Native American word, often said to mean "land of trembling earth" | ≈ True as hedged. The likely etymology is Hitchiti "bubbling water"; "how it got this name" overstates | https://en.wikipedia.org/wiki/Okefenokee_Swamp ; https://www.fws.gov/carp/sites/default/files/documents/2025-05/general-brochure-2025-okefenokee-nwr.pdf |
| 27 | Peat floats; plants and small trees grow on it; the ground and trees shake when stepped on | ✔ "trees and surrounding bushes tremble by stomping the surface" | https://en.wikipedia.org/wiki/Okefenokee_National_Wildlife_Refuge ; FWS brochure (above) |
| 28 | Tea-colored water from fallen leaves and plants | ✔ "tannic acid released from decaying vegetation" | https://en.wikipedia.org/wiki/Okefenokee_National_Wildlife_Refuge |
| 29 | Dark water reflects like a mirror | ✔ "mirror-like black water" | FWS brochure (above) |
| 30 | Alligators; turtles | ✔ | https://www.georgiaencyclopedia.org/articles/geography-environment/natural-history-of-the-okefenokee-swamp/ |
| 31 | More than 200 kinds of birds, including sandhill cranes | ✔ 234 species; sandhill cranes year-round | https://en.wikipedia.org/wiki/Okefenokee_National_Wildlife_Refuge ; NGE Natural History (above) |
| 32 | Canoe water trails and wooden boardwalks | ✔ Canoe trails; Chesser Island boardwalk | NGE Natural History (above); FWS brochure (above) |

### R-LIT-02 (Chuseok)

| # | Claim in passage | Result | Source |
|---|---|---|---|
| 33 | Chuseok is a fall harvest holiday for giving thanks, on the full moon | ✔ 15th day of the 8th lunar month | https://en.wikipedia.org/wiki/Chuseok |
| 34 | Families travel to relatives' home villages | ✔ | https://en.wikipedia.org/wiki/Chuseok |
| 35 | The family makes songpyeon together the night before | ✔ "On the eve of Chuseok, family members gather to make songpyeon together" | https://asiasociety.org/node/17181 |
| 36 | Songpyeon are half-moon-shaped rice cakes | ✔ | https://en.wikipedia.org/wiki/Chuseok |
| 37 | Sesame-seed-and-honey filling | ✔ | https://www.maangchi.com/recipe/songpyeon |
| 38 | Steamed on a bed of pine needles | ✔ | https://www.maangchi.com/recipe/songpyeon ; https://asiasociety.org/node/17181 |
| 39 | Smooth dough, a thumb dent, a little filling and careful sealing keep cakes from cracking | ✔ Overfilling and dry or rough dough cause cracks | https://mykoreankitchen.com/songpyeon/ ; https://www.maangchi.com/recipe/songpyeon |
| 40 | A full moon on Chuseok eve | ≈ The moon is full on Chuseok itself; the eve's moon is nearly full (NIT) | https://en.wikipedia.org/wiki/Chuseok |

### R-OPN-01 (school garden)

| # | Claim in passage | Result | Source |
|---|---|---|---|
| 41 | Children are more willing to taste vegetables they grew | ✔ UC Davis pilot study, *California Agriculture* 55(1), 2001 | https://atlanticgeneral.thehcn.net/promisepractice/index/view?pid=90 |
| 42 | Vegetables have vitamins that help the body | ✔ (general nutrition) | https://kidshealth.org/NortonChildrens/en/teens/myplate.html?view=ptr |
| 43 | "In third grade, we study how plants grow and change" (Georgia) | ? / likely inaccurate: GA S3L1 is about plants and animals of Georgia's regions; the full standards PDF could not be opened | https://curricula.quizalize.com/georgia/science/georgia/science/grade-3/life-science/s3l1 |

### Copying check

| # | Check | Result | Source |
|---|---|---|---|
| 44 | *The Firefly Jar* premise | ≈ Plot echo only, no copied text | https://achievethecore.org/page/3249/fireflies-by-julie-brinckloe |

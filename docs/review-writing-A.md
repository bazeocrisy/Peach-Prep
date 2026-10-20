# Review A: Writing content (W-TASK-01, W-TASK-02, W-REV-01, W-REV-02)

**Reviewer role:** Georgia Grade 3 ELA teacher who has scored Milestones writing.

**Checked against:**
- SPEC §2, §5, §5b, §5c and §6
- The GaDOE Eight-Point, Three-Trait Writing Rubric, Grade 3 (August 2026)
- The GaDOE Writer's Checklist, Grade 3
- `js/data/standards.js` for the wording of each standard

**What I ran:**
- `verification/check-writing.js`: 0 failures, 0 warnings.
- My own n-gram check of each model essay against its sources:
  - No 5-word run is copied.
  - The only 4-word overlaps are topic phrases: "a reading buddy program", "a good reader sounds", "a skate park is" and "made of smooth concrete".

No content files were edited.

**Severity:**
- **MUST:** wrong, misleading or a factual error, or a model essay that would not earn full marks.
- **SHOULD:** a rule violation, or a clarity or fairness problem.
- **NIT:** polish.

---

## 1. Model essay scores (honest, trait by trait)

| Task | Purpose & Organization | Evidence & Elaboration | Language Usage & Conventions | Total |
|---|---|---|---|---|
| W-TASK-01 (reading buddies) | **3** | **3** (low 3) | **2** | 8 |
| W-TASK-02 (skate park) | **3** | **3** (low 3) | **2** | 8 |

**W-TASK-01.**
- **P&O 3.**
  - The hook is followed by a clear opinion and a preview of both reasons.
  - Each reason has its own paragraph, in the order given.
  - Linking words are used well: First, also, Since, According to, In addition, so, In conclusion.
  - There is a real conclusion. The audience (the principal) is never addressed directly (see S1), but a scorer would still give a 3.
- **E&E 3.**
  - Both provided reasons are developed with details from both sources, in the writer's own words, and each source is named.
  - Elaboration is solid in paragraph 2 ("Since one teacher can't sit with every child…").
  - It is thinner in paragraph 3. That paragraph ends on a fact (feeling proud) and never ties "learning by teaching" back to the older buddy becoming a better reader (S2). It is still a 3, but not a strong one.
- **LUC 2.**
  - There are no errors.
  - The sentences are varied: simple, compound, and complex with because, when, since and before.
  - Subject-verb agreement is correct throughout.
  - Note that the parent note describing the verb tense is wrong (M1). The tense itself is fine.
- **Copying:** the essay has its own wording, and the quoted phrase "learning by teaching" is credited to its source.

**W-TASK-02.**
- **P&O 3.**
  - The hook names the other side (the garden) and then states the opinion.
  - The reasons are previewed, and the body paragraphs follow the "First" and "Second" order.
  - The conclusion speaks to the council. It is short but complete.
- **E&E 3.**
  - Both reasons are developed with details from both sources.
  - The health paragraph elaborates well ("Riding is a great way to fix that", "Since riding feels like play…").
  - The safety paragraph is mostly a list of facts with little "so what" (S6), and it overstates two source claims (S5). It is still a 3.
- **LUC 2.**
  - There are no errors.
  - Sentence types vary, including relative clauses with who and where.
  - Verb tense is controlled: present tense for facts and would for what the park would do.
- **Copying:** none.

The one factual error that carries into this model is the "about an hour" guideline (M2).

**Checks run on both essays:**
- They use source information in the student's own words.
- They use linking words.
- Each has an introduction and a conclusion.
- They contain no errors and no copied runs.
- Word counts are 221 and 239, which is a realistic length for a full-score response.

---

## 2. Fact check (WebSearch)

| Claim | Where | Verdict | Source |
|---|---|---|---|
| Children should be active "about one hour every day" | W-TASK-02 p2:1:1, model ¶3, evidence note, lookFors | **Misstated.** The CDC/HHS guideline is "60 minutes or more" of moderate-to-vigorous activity every day. It is a minimum, not a target. → **M2** | [CDC guidelines](https://www.cdc.gov/physical-activity-education/guidelines/) |
| "Many children do not get that much activity" | W-TASK-02 p2:1:4 | Accurate. About 1 in 5 US youths aged 6–17 meet the guideline. | [Healio, 2024 US Report Card](https://www.healio.com/news/pediatrics/20241107/1-in-5-youths-meet-daily-physical-activity-guidelines) |
| Activity makes the heart and muscles stronger | p2:1:2 | Accurate (stronger bones and muscles, lower heart-disease risk factors). | [CDC guidelines](https://www.cdc.gov/physical-activity-education/guidelines/) |
| Activity "can also help kids sleep well and feel calm" | p2:1:3 | Acceptable with "can". HHS cites strong evidence for better sleep and less anxiety, though the findings are stated generally, not for youth only. | [HHS PAG Advisory Report, Exec. Summary](https://odphp.health.gov/sites/default/files/2019-09/02_A_Executive_Summary.pdf) |
| Kids are more active with a good place to play near home | p2:2:1 | Acceptable with "more likely". The evidence shows an association, mostly from cross-sectional studies (one is an Atlanta study). | [Active Living Research synthesis (Mowen, 2010)](https://activelivingresearch.org/files/Synthesis_Mowen_Feb2010_0.pdf) |
| Riding in streets, parking lots and on cracked sidewalks causes falls and crashes; ride away from traffic; wear helmets and pads | W-TASK-02 p1 ¶2, p2 ¶4 | Accurate. The AAP says "Most young skateboarders are injured on public roads or sidewalks and in parking lots" and to watch for "cracks, rocks". | [AAP skateboarding handout](https://www.aap.org/globalassets/publications/coya/skateboarding.1.0.pdf); [UH Rainbow safety page](https://www.uhhospitals.org/health-information/health-and-wellness-library/article/pediatric-diseases-and-conditions-v0/bicycle-in-line-skating-skateboarding-safety--prevention) |
| A skate park is "a safe place"; helmets and pads "keep riders safe" | W-TASK-02 reason 1, model ¶1–2 | **Overstated.** The same AAP handout says "Many injuries happen in skate parks, especially in the ramp and bar areas." The sources are hedged correctly ("help riders stay safe"), but the provided reason and the model are not. → **S5** | [AAP skateboarding handout](https://www.aap.org/globalassets/publications/coya/skateboarding.1.0.pdf) |
| Older buddies improve as readers; studies often report they feel more confident | W-TASK-01 p1 ¶3, p2 ¶2 | Accurate and appropriately hedged. Tutors show gains in academic outcomes and attitudes, plus a small but significant gain in self-concept (Cohen, Kulik & Kulik). A 2025 meta-analysis of 32 RCTs found a tutor effect of 0.39 SD. | [Education Northwest, Peer and Cross-Age Tutoring](https://educationnorthwest.org/sites/default/files/PeerandCross-AgeTutoring.pdf); [Chang et al. 2025, NSSA](https://nssa.stanford.edu/studies/examining-academic-efects-cross-age-tutoring-meta-analysis) |
| Young children learn new words by listening to stories read aloud | W-TASK-01 p2:3:2 | Accurate and well established. | [Santa Clara Univ. read-aloud vocabulary study](https://scholarcommons.scu.edu/psych/364) |
| An Eastern bluebird moves into a birdhouse "hooked onto a strong, low branch" of an oak | W-REV-02-6 and the file header | **Against guidance.** Georgia DNR and the North American Bluebird Society (NABS) say to mount bluebird boxes on poles in open areas. NABS: "Mounting nestboxes on… a tree is not recommended". Boxes hung from tree limbs work for *Western* bluebirds, not Eastern. → **S11** | [Georgia DNR WRD bluebird guide](https://georgiawildlife.com/sites/default/files/wrd/pdf/CreatingPerfectHomeforBluebirds.pdf); [NABS, Welcome Back the Bluebird](https://www.nabluebirdsociety.org/PDF/WelcomeBackTheBluebird.pdf) |
| Fish gills take in oxygen from water; fins help a fish move and steer | W-REV-01-6 | Accurate (common knowledge; not searched). | — |

One page I tried to open was blocked: https://pmc.ncbi.nlm.nih.gov/articles/PMC8750605/ (the BEACH park-proximity study). The Mowen synthesis covers the same claim.

---

## 3. Task checks (summary of what passes)

- **Prompts:**
  - Both state the topic and the audience: the principal in W-TASK-01 and the town council in W-TASK-02.
  - Both say "Use the two reasons below" and ask for the student's own words.
  - Both are readable for an 8-year-old.
- **Reasons:**
  - Both pairs support one opinion.
  - The W-TASK-02 pair is fully parallel. The W-TASK-01 pair is nearly parallel (N1).
- **Both sources support both reasons:**
  - W-TASK-01: p1 ¶2 and p2 ¶3 support younger students; p1 ¶3 and p2 ¶2 support older students.
  - W-TASK-02: p1 ¶2 and p2 ¶4 support safety; p1 ¶3 and p2 ¶1–3 support health.
- **Evidence refs:** I checked all 27 against the sentence text. Every one points to a sentence that really supports the reason given.
- **Source length:** each source is 172–189 words, within the 150–300 range.

---

## 4. Findings

### MUST

| # | Location | Problem | Fix |
|---|---|---|---|
| M1 | W-TASK-01 `model.notes[2]` (Language Usage) | The note says "Verb tense stays in the present throughout." That is false. The model uses *would help* (¶1, ¶4), *could happen* (¶1) and the past tense *just read* (¶1). All of these are correct shifts. A parent who trusts the note may mark a child down for a correct *would*, or for a past-tense hook. | Replace that sentence with: "Verb tense is controlled: present tense for facts from the sources (\"a buddy gives\", \"young children pick up\"), would and could for what the program would do, and past tense only where the hook tells something that just happened (\"she just read\"). There are no unneeded shifts." |
| M2 | W-TASK-02 p2:1:1; model ¶3; `evidence` note for p2:1:1; `lookFors.evidence[1]`; file header comment | "About one hour every day" misstates the CDC/HHS guideline, which is "60 minutes or more" daily: a minimum, not an approximate target. The header claims this is the published recommendation, but it is not worded as published. | p2:1:1 → "Health experts say that children should be active for at least one hour every day." Model ¶3 → "According to the second source, kids need to move for at least an hour each day, but many of them do not." Evidence note → "…should be active at least one hour every day." lookFors → "at least one hour of activity a day". Header → "the 'at least an hour a day' guideline". (My n-gram check confirms the new model wording copies no 5-word run.) |

### SHOULD

| # | Location | Problem | Fix |
|---|---|---|---|
| S1 | W-TASK-01 model ¶4 and `notes[0]` | The note says the conclusion "ends with a request to the principal," but the essay never addresses the principal ("Our school should start one this year…"). The Trait 1 descriptor at 3 is "written to engage a specific audience". The note overclaims, and the model misses an easy audience move. | Model ¶4, sentence 2 → "Please start a reading buddy program this year so that every student can share a good book with a friend." The note is then accurate. |
| S2 | W-TASK-01 model ¶3 | Elaboration stops short. "Learning by teaching" is explained, but never tied back to the reason (the older buddy becomes a better reader). The paragraph ends on a stray fact ("even feels proud"). This is a low 3. A parent comparing a child's paragraph to it will not see what "explain why it matters" looks like. | Replace the last sentence with: "All that extra thinking makes the older buddy a stronger reader. Watching a little partner learn a new word also makes the older buddy feel proud." |
| S3 | W-TASK-01 `lookFors.conventions[1]` | "Verb tense stays the same." This is stricter than 3.L.GC.2.b, which asks for consistency within and between sentences, meaning no *unneeded* shifts. It would mark the model's own correct shifts wrong. | "Verb tense does not shift without a reason. Present tense works for facts (buddies help, kids read) and would for what the program would do. Watch for shifts like \"Buddies help kids and they learned words.\"" (This matches the better wording already in W-TASK-02.) |
| S4 | W-TASK-01 `lookFors.evidence[2]`; W-TASK-02 `lookFors.evidence[2]` | "…uses only one source, usually scores no higher than 2." The rubric bullets at every score point say "from the source(s)". Using only one source is not a cap, so the parent guide is stricter than the rubric. Developing only one reason *does* fit the score-2 wording ("provided reason(s)"). | "For a 3, both provided reasons are developed with well-chosen, explained details from the sources. Using both sources, as the prompt asks, is the surest way there. The rubric says \"source(s)\", so strong use of one source is not automatically capped. Developing only one reason usually keeps the score at 2 or below." |
| S5 | W-TASK-02 `reasons[0]`; model ¶1 and ¶2 | The safety claims are overstated against the AAP ("Many injuries happen in skate parks"): <br>• "A skate park would give kids a **safe** place to ride." <br>• The model says "keep kids safe" and "far from traffic". The lot is on Maple Street, a street. <br>• "Helmets, pads, and learning tricks… **keep** riders safe" misreports p2:4:3, which says they "help riders stay safe". <br>The sources themselves are hedged correctly. | Reason 1 → "A skate park would give kids a safer place to ride." Model ¶1 → "A skate park would give kids a safer place to ride, and it would help them stay healthy." Model ¶2: "…away from traffic" in place of "far from traffic", and "…help riders stay safe" in place of "keep riders safe". Optional source balance (appended to p1 ¶2, so no refs shift): "Riders can still fall at a skate park, so safety gear matters there, too." Update the planner, lookFors and notes wording to "safer". |
| S6 | W-TASK-02 model ¶2 | The safety paragraph lists facts with little elaboration. "Many skate parks even post helmet rules" dangles at the end. This is a low 3 next to the well-elaborated ¶3. | Replace sentence 4 with: "A skate park has smooth concrete and no cars, so riders would not have to dodge traffic or bump over cracks." End the paragraph with: "Many skate parks even post helmet rules, so riders are reminded to protect themselves." |
| S7 | `planner.opinion` in both tasks (most important in W-TASK-02) | The opinion is fixed by the provided reasons, but the planner asks an open question: "What do you want the town council to do with the empty lot?" The W-TASK-02 prompt has just offered a garden, so a child can reasonably write "make a garden" and then fight the reasons. | W-TASK-02: "Your opinion is that the empty lot should become a skate park. How will you say that to the town council in your own words?" W-TASK-01: "Your opinion is that our school should start a reading buddy program. How will you say that to the principal in your own words?" |
| S8 | W-REV-01-1 `clue` | "Look for words like think or should." Only the key contains *think* or *should*, so Help 1 gives away the answer (§6.7). | "An opinion tells what the writer wants or believes. It is not just a fact or a question. Which sentence tells the reader what Jordan wants for Room 12's tank?" |
| S9 | W-REV-01-2 `clue` | "Sentence 2 gives Jordan's **first** reason" states the slot-1 answer word ("First,"). | "Ask what job each sentence does in the essay. Does it start the reasons, add one more reason, give an example, or wrap up? Choose the transition that does that job." |
| S10 | W-REV-01-6 `std` | `3.T.T.2.d` is the *expository* writing standard. This item picks evidence for a reason in an *opinion* essay, which is 3.T.T.3.c ("support it with reasons"). | `std: ["3.T.RA.1.c", "3.T.T.3.c"]`. The checker's requirement is still met through RA.1.c. |
| S11 | W-REV-02-6 `steps`, `clue` and `why`; W-REV-02-8 key; file header | The story hangs a box for an Eastern bluebird from an oak branch. Georgia DNR and NABS say to mount it on a pole in the open, not on trees; hanging from limbs works for Western bluebirds. The header asserts the bluebird detail as fact. | Steps: "Grandpa pounded a tall metal pole into the grass in the open part of the yard." / "Tasha held the birdhouse against the top of the pole." / "Grandpa screwed the birdhouse tightly to the pole." / "Then they stepped back to admire their work." Clue: "Picture each action. What has to be in the ground first? What must happen before the birdhouse can be fastened?" Update `why` to match. W-REV-02-8 key: "a drawing of the blue birdhouse on its pole, with a caption". Header: "Eastern bluebirds are common in Georgia and nest in boxes mounted on poles in open yards." |
| S12 | W-REV-02-8 `choices` and `clue` | §6.8: the distractors (hammer price chart, a map of every Georgia city and river, a glossary of *hammer* and *nail*) are not plausible misreadings. The clue "Which feature shows a picture of it?" leaves only *drawing*. | Distractors: "a timeline that shows the steps for building the birdhouse", "a list of the tools and supplies Tasha and Grandpa used", "a heading at the top of each part of the story". Clue: "Think about Tasha's purpose: what does she want readers to be able to do? Which feature helps with that purpose?" Update `why` to match. |

### NIT

| # | Location | Problem | Fix |
|---|---|---|---|
| N1 | W-TASK-01 `reasons` | The reasons are close but not grammatically parallel: "Reading buddies help…" vs "Being a reading buddy helps…" | "A reading buddy program helps younger students become better readers." / "A reading buddy program helps older students learn and grow, too." |
| N2 | W-TASK-01 `evidence`, `lookFors.evidence` | p2:1:2 ("When you teach someone, you have to think carefully…") also supports reason 2 but is not listed. p2 ¶4 (school feels friendlier) supports neither provided reason, and a parent should know that. | Add `{ reason: 1, source: "p2", ref: "p2:1:2", note: "Teaching makes you think carefully about what you know." }`. Add a lookFor: "The friendlier-school fact (Source 2, last paragraph) is a bonus idea. It does not replace support for the two provided reasons." |
| N3 | W-TASK-02 `prompt` | "Town council" may be unfamiliar to an 8-year-old. | "…the town council (the group of leaders who make decisions for the town) will decide soon." |
| N4 | W-TASK-02 p1:1:1–2 | "an outdoor space" and "made of smooth concrete" are absolute. Some skate parks are indoors or built with wood or metal ramps. | "A skate park is a space, usually outdoors, that is built for riding." / "It has ramps, rails, steps, and curved bowls, often made of smooth concrete." Update model ¶2 to match S6, which drops "made of". |
| N5 | W-TASK-02 p2:4:3 | "Wearing a helmet and pads and learning new tricks slowly help riders stay safe" has a long double-gerund subject that is hard for a grade 3 reader to parse. | "Riders stay safer when they wear a helmet and pads and learn new tricks slowly." Update the evidence note to match. |
| N6 | W-TASK-02 `model.notes[2]` | "a crack or a rock can" is offered as a subject-verb agreement example, but *can* is a modal and does not show agreement. | Use "kids need" or "pushing a scooter works" instead. |
| N7 | `lookFors.purpose` (both tasks) | No look-for covers the Trait 1 audience descriptor ("written to engage a specific audience"). | Add: "The essay is written for the [principal / town council]: it may speak to them directly or ask them to act." |
| N8 | W-REV-01-3 | "splash" is not a plausible distractor (§6.8). The clue ("look carefully on purpose to make sure something is right") is close to the definition of *check*. | Replace "splash" with "watch". Clue: "Think about the helper's job. Try each word in the sentence. Which one tells exactly what the helper must do?" |
| N9 | W-REV-01-5 `prompt` | "…does not support the opinion or the reasons." The draft has no opinion statement (that is what item 1 fixes). | "One sentence in Jordan's draft does not support Jordan's reasons. Select the sentence that does not belong." |
| N10 | W-REV-01-6 | The stem calls all five choices "facts", but "Some families think that cats and dogs are more fun than fish" is an opinion. DOK 3 is generous for this item. | "Jordan found these sentences in a book about class pets." `dok: 2`. |
| N11 | W-REV-01-4 `std` | Combining choppy sentences into a compound sentence is also 3.L.GC.2.b. | `std: ["3.T.SS.1.c", "3.L.GC.2.b"]` |
| N12 | W-REV-02-2 `why`, choices | "Tapped and touched mean a gentle hit": *touched* is not a hit. "reached" is a weak distractor. | `why`: "Tapped means a gentle hit, which is what Tasha does in sentence 7, and touched is not a hit at all." Replace "reached" with "pushed". |
| N13 | W-REV-02-4 | (a) The `why` opens with `The answer is "I'll never get this right!" Tasha groaned…`, so the quote marks wrap only the dialogue, not the whole choice. (b) In the key, Tasha drops the hammer, but in sentence 7 she taps the nail without picking it back up. | (a) "The answer is the sentence where Tasha groans, \"I'll never get this right!\" and drops the hammer." (b) Key: "\"I'll never get this right!\" Tasha groaned, staring at the crooked nail." |
| N14 | W-REV-02-5 slots | The prompt asks for *time-order* transitions, so "For example," and "In conclusion," (slot 1) and "For example," and "However," (slot 2) are ruled out by the prompt itself. | Slot 1: "This time,", "Long ago,", "Before that,", "At last,". Slot 2: "The day before,", "A week later,", "Long ago,", "Right away,". Update `why`. |
| N15 | W-REV-02 passage and byline | "Tasha's first draft" is a third-person story whose main character is also Tasha. "Tasha wants to show how she feels" is ambiguous between writer and character. | Rename the character, for example "Lena and her grandpa…", and keep Tasha as the writer. Update the prompts and `why` to say "Lena". |

---

## 5. Revising-set checks (summary of what passes)

**Numbering.** Sentence numbers are consistent in both drafts:
- W-REV-01 runs (1) to (10). Hottext answer `p1:2:5` is sentence (6), which is correct.
- W-REV-02 runs (1) to (10).
- Every dropdown `text` reproduces its draft sentence exactly, apart from the blank.

**Draft errors.** Every listed error is deliberate and fixable by exactly one item:
- W-REV-01: no opinion; no transitions in 2 and 7; vague "look at"; choppy 4 and 5; off-topic 6; subject-verb error *studies*; tense error *watch*; weak 10. No unintended errors.
- W-REV-02: setting; plain verb *hit*; simile; dialogue; time-order transitions; the missing paragraph; weak ending; text feature.

**Keys.** All 16 keys are correct and uniquely defensible. Every distractor is weaker for a stated reason. The exceptions are the plausibility issues in S12, N8 and N14.

**Skills.** No item requires a skill that is not assessed. The dialogue item asks the child to recognize dialogue, not punctuate it, and every `std` is on the §2 Constructing Texts list.

---

## Counts

| Severity | Count |
|---|---|
| MUST | 2 |
| SHOULD | 12 |
| NIT | 15 |
| **Total** | **29** |

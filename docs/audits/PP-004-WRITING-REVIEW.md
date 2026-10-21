# PP-004 Writing task review: W-TASK-01 and W-TASK-02

Date: 2026-10-20. Reviewer: agent "writing". Worktree `/home/claude/pp-fix`, branch `pp-003-fixes`.

Scope: the two extended opinion-writing tasks the manifest loads (`js/data/manifest.js` `tasks: ["W-TASK-01", "W-TASK-02"]`). The UI is `js/writing.js`.

Official references (the owner's uploads, read in place):
- Grade 3 Writer's Checklist (2026): `gadoe/ce3c8549-GM_Checklist_Gr3.txt`.
- Grade 3 Eight-Point, Three-Trait Writing Rubric (August 2026), pp. 1-3: `gadoe/de84ed03-GM_Rubric_Gr3.txt`.
- Georgia K-12 ELA Standards, Grades 3-5 (approved May 2023). PDF page numbers match the printed footers:
  - 3.T.T.3.c, p. 34: "Apply opinion techniques to create opinion pieces that introduce the topic, state an opinion about the topic, supply reasons to support the opinion with linking words (e.g., because, therefore, since, for example) to connect the opinion and reasons, and provide a concluding statement or section."
  - 3.T.RA.1.c, p. 37: "Summarize researched, relevant, and accurate information from at least two credible sources about a self-selected topic."
  - 3.T.SS.1.c, p. 29: "Use conjunctions and transition words or phrases, such as although and since, to add cohesion and link ideas and information."
  - 3.T.SS.1.d, p. 29: "Craft related sentences into clear and cohesive paragraphs."
  - 3.L.GC.2.b, p. 19: "Use a variety of simple, compound, and complex sentences to strengthen clarity and coherence, establishing consistent verb tense within and between sentences."
  - 3.L.GC.2.c, p. 19: "Use correct subject-verb agreement in a variety of sentences."
- Blueprint (Aug 2025): one 8-point Extended Writing Task, Constructing Texts.

## 1. Checklist and rubric alignment

"Model" means the 8-point model in each task. "Ex" means the new leveled examples. "Guide" means the parent scoring guidance: rubric plain words, look-fors, step-by-step scoring, score levels and what to say.

| Writer's Checklist line | Rubric trait (column 3 wording) | Standard | W-TASK-01 | W-TASK-02 |
|---|---|---|---|---|
| introduce my opinion on a topic | P&O: "strong introduction that clearly establishes an opinion on a topic" | 3.T.T.3.c | Model: hook, then what reading buddies are (added in PP-004), then the opinion and a preview. Guide: purpose step 2 | Model: hook, the lot and the garden, then the opinion and a preview. Guide: purpose step 2 |
| organize and group information ... for my purpose and audience | P&O: "logically grouping related sentences ... specific purpose and audience" | 3.T.SS.1.d, 3.T.T.3.c | One paragraph per reason, in order; written to the principal. Guide: purpose step 3 (mark the 1s and 2s) | One paragraph per reason; written to the town council. Guide: purpose step 3 (mark S and H) |
| provide reasons that support my opinion | E&E: "Provides reasons that effectively support the stated opinion" | 3.T.T.3.c | Two provided reasons, both developed | Two provided reasons, both developed |
| support my reasons with ideas and information from the sources | E&E: "integrating relevant and well-chosen information ... from the source(s)" | 3.T.RA.1.c | Both reasons use both sources. Evidence key: 17 refs, all resolve | Both reasons use both sources. Evidence key: 18 refs, all resolve |
| elaborate on my reasons and ideas by using techniques | E&E: "Elaborates effectively on provided reasons and ideas using techniques" | 3.T.T.3.c (3.L.GC.2.d not tagged) | Model explains each fact. Guide: evidence step 4 | Same |
| use linking words, conjunctions, and transition words or phrases | P&O: "Uses linking words, conjunctions, and/or transition words or phrases effectively" | 3.T.SS.1.c, 3.T.T.3.c | First, also, According to, In addition, because, so, until, In conclusion | First, Second, According to, because, so, since, but, For these reasons |
| provide a concluding statement or section | P&O: "strong concluding statement or section" | 3.T.T.3.c | Restates both reasons and asks the principal to act | Restates the opinion and asks the council to act |
| use complete sentences and a variety of sentence structures | LUC: "mostly complete sentences and a variety of sentence structures" | 3.L.GC.2.b | Simple, compound and complex | Simple, compound and complex |
| use correct verb tense | LUC: "mostly correct verb tense" | 3.L.GC.2.b | Present tense for facts, would for the proposal | Same |
| use correct subject and verb agreement | LUC: "mostly correct subject and verb agreement" | 3.L.GC.2.c | Checked: no errors | Checked: no errors |
| check my work and correct any errors in spelling, capitalization, punctuation, usage, or grammar | LUC: "few, if any, errors in usage and conventions" | GUM chart; spelling is in Foundations (rubric footnote) | The model has none. The examples contain errors on purpose and name them | Same |
| (rubric only) length | LUC footnote: "Very brief responses ... may not be sufficient" | n/a | Write tab warns under 120 words; guide conventions step 5 | Same |
| (rubric only) condition codes | All traits, 0 column | n/a | `rubricNote` (site.js) and the guide's purpose 0 level | Same |

Prompt and sources:

| Check | W-TASK-01 | W-TASK-02 |
|---|---|---|
| Prompt names the topic, audience, position and task | Yes: the principal, for a reading buddy program, "Use the two reasons below", "both sources", "own words" | Yes: the town council, the Maple Street lot, a skate park and not a garden; same wording |
| Sources carry enough information per reason | R1: 9 refs (p1: 5, p2: 4). R2: 8 refs (p1: 4, p2: 4) | R1: 10 refs (p1: 6, p2: 4). R2: 8 refs (p1: 3, p2: 5) |
| Source length and readability (readability.py, estimate) | 188 / 173 words, FK about 4.1 / 4.1 | 179 / 180 words, FK about 3.2 / 4.1 |
| No invented statistics, studies or people | Yes; claims are hedged | Yes. One causal claim was hedged in PP-004 (see F3) |

## 2. Findings

I checked every source claim in both models by hand, sentence by sentence, against the source sentences. The examples were checked the same way, and the checker enforces their quotes and any copying.

- **F1 (accuracy, W-TASK-01 model).** "little kids hear smooth reading up close" ("up close" is not in the source). "help sound out the tricky word": the source says "help with hard words" and never mentions sounding out. "All that extra thinking makes the older buddy a stronger reader": this goes beyond p2:2:5 ("helps big buddies understand stories better"). All three are fixed.
- **F2 (3.T.T.3.c "introduce the topic", W-TASK-01 model).** The introduction stated the opinion but never said what a reading buddy program is. Fixed by adding "Reading buddies are big kids and little kids who share books." To stay inside the checker's 180-260-word model range, the hook and one vocabulary sentence were tightened. The model is now 260 words.
- **F3 (accuracy, W-TASK-02 source p2:2:1).** "Having a good place to play nearby makes kids more likely to be active" is a causal claim. Research on nearby parks mostly shows an association. Hedged to "Kids are often more active when they have a good place to play nearby." The evidence note and the meaning of the look-for are unchanged.
- **F4 (W-TASK-02 model).** No inaccuracy found. Every source claim maps to p1:2:2-4, p1:3:2-3, p2:1:1, p2:1:4, p2:3:2-3 and p2:4:2-5. The conclusion does not sum up the reasons ("For these reasons" only refers back), but it restates the opinion and calls the council to act, which is a strong conclusion. The model was not changed. It is 259 words, so there was no room to add more.
- **F5 (calibration, from PP-003 E3).** Neither task had anything below 8 points to score against. Fixed with three examples per task (see §3).
- **F6 (parent guidance).** The trait cards gave the rubric in plain words plus prompt look-fors, but no routine for scoring, no level-by-level descriptions and nothing to say to the child. Fixed with `scoring` (see §3).
- **F7 (UI wording, raised by another reviewer through the lead).** "Spell-check is off, like on the test" had no source. It now reads "Spell-check is off here."
- **F8 (checker bug, raised through the lead).** `check-writing.js` accepted grammar-chart codes only through the pattern `3.L.GC.1:[GUM]:...`. Codes in standards.js carry the level letter (C, I, M or R), so Reinforce rows were rejected and the meaningless letters G and U were accepted. It is now `[MR]`, which matches the blueprint ("Master and Reinforce" GUM skills are assessed).
- **No issue found:**
  - Prompts are clear.
  - The planner questions are kid-friendly.
  - The look-fors match the rubric. "Developing only one of the two reasons usually keeps the score at 2 or below" is labelled as guidance, not as a rubric rule.
  - The home-score caveat is present.
  - Draft storage works (§4).

## 3. Changes

| File | Change |
|---|---|
| `js/data/tasks/W-TASK-01.js` | Model text (F1, F2) and the matching trait notes. New `examples` (2, 4 and 6 points) and new `scoring` |
| `js/data/tasks/W-TASK-02.js` | Source sentence p2:2:1 and its evidence note (F3). New `examples` (2, 4 and 6 points) and new `scoring` |
| `js/writing.js` | Parent tab changes: <ul><li>a coaching tip line</li><li>a "How to score this trait, step by step" `<details>` in each trait card, with ordered steps, "Which score fits best?" (each score level in plain words) and "What to say to your child"</li><li>an "example essays at lower scores" `<details>`, labelled "examples scored by Peach Prep using the official rubric's descriptions ... not official GaDOE anchor papers", with an h3 heading, trait scores, the essay, trait-by-trait reasons and a next step for each example</li><li>a shared `guard()` that asks before showing source-based answers while the draft is under 80 words</li><li>the spell-check line (F7)</li></ul> |
| `verification/check-writing.js` | Validates `examples`: <ul><li>3 or more, with distinct totals below 8</li><li>integer trait scores within range, and a total that equals their sum</li><li>notes that start "Trait (n of max):"</li><li>quoted text must appear in the example</li><li>a copied run of 6 or more words from a source is allowed only if the evidence note says so</li><li>a `next` step is present</li></ul>Validates `scoring`: 3 or more steps, 2 or more "say" lines, and points exactly 0..max. Asserts that writing.js keeps the home-score caveat and the example label. GUM pattern fix (F8) |
| `css/styles.css` | One appended block: `.score-steps`, `.score-levels`, `.ex-level*`, `.ex-essay`, `.ex-next` |

Example design. Each task uses different trait patterns, so a parent sees that the same total can come from different strengths:

| Task | 2 points (P/E/C) | 4 points | 6 points |
|---|---|---|---|
| W-TASK-01 | 1/1/0: run-on, one reason, very short | 2/1/1: four paragraphs, thin evidence, one copied sentence, one source | 2/2/2: both reasons and both sources, little explaining |
| W-TASK-02 | 1/0/1: opinion with personal ideas only | 1/2/1: good facts in one run-on paragraph | 3/2/1: strong organization, thin elaboration, agreement and tense errors |

Where a score is close to the line (W-TASK-01 2-point Conventions, 4-point Evidence), the note says so instead of hiding the judgement.

## 4. Verification

- `node verification/check-writing.js`: 0 failures, 0 warnings. It checks all 6 examples and both `scoring` blocks.
- `node verification/check-content.js --all`: PASS, 0 failures. There are 8 warnings, all in lessons, none in tasks.
- `python3 verification/readability.py`: the task sources are unchanged in length. FK is about 4.1, 4.1, 3.2 and 4.1.
- Chromium (Playwright), port 8486, widths 390 and 1366, both tasks:
  - All five tabs render. `scrollWidth` equals the viewport on every tab, so there is no sideways scroll.
  - The plan and the draft survive a reload.
  - A parent radio score survives a reload.
  - The localStorage `pp.task.<id>` keys are still exactly `checks, draft, plan, scores`. No new stored fields; `pp.progress.v1` is untouched.
  - There are 3 step-by-step panels and 3 examples per task. The label and the home-score caveat are present.
  - The only console errors are blocked Google Fonts requests (sandbox network).
  - Screenshots are in the scratchpad `pp004w/`.

## 5. Remaining limits

- The examples and scores are Peach Prep's judgement, applied to the rubric's descriptions. They have not been checked against GaDOE scoring samplers or trained scorers, and no second human reviewer has looked at them.
- 3.T.RA.1.c names "a self-selected topic". On the test the topic and sources are provided, so the tasks practise the summarizing and integrating part only.
- The tasks do not tag 3.L.GC.2.d (elaborating with adjectives and adverbs) or GUM rows, although the conventions trait covers them. This was noted in PP-003 and left unchanged.
- Both tasks still use the same structure: two sources, two provided reasons, each reason in both sources. Some rubric wording ("source(s)") suggests real prompts may vary.
- Sources stay on a separate tab on phones, and there is no print or export of the draft (PP-003 E3, still open).
- The Lexile values remain estimates.

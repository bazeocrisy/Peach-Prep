# PP-004 gap review, Agent C (independent assessment reviewer, read-only)

Date: 2026-10-20. Worktree: /home/claude/pp-fix. No repository file was edited except this one. No git commands were run.

## Scope
| Lesson | File | Items |
|---|---|---|
| 3.T.C.1.b | js/data/lessons/T-C.js | 7 practice + 6 test = 13 |
| 3.T.C.2.c | js/data/lessons/T-C.js | 7 practice + 6 test = 13 |
| 3.T.RA.1.b | js/data/lessons/T-RA.js | 7 practice + 6 test = 13 |
| 3.L.GC.2.a | js/data/lessons/L-GC2.js | 7 practice + 6 test = 13 |
| 3.F.P.4.c (selected) | js/data/lessons/F-PF.js | SK-FP4c-P7, SK-FP4c-T6 = 2 |
| 3.F.F.1.a | js/data/lessons/F-PF.js | 7 practice + 5 test = 12 |
| **Total** | | **66 items** |

None of these lessons has `testB`. All items use the lesson's default `std`.

## Method (position-bias control)
- Script: `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/gapC/blind.js`. It loads the lesson files in a VM sandbox. For each item it prints the passage, stem, prompt, figure caption and alt text, with choices, options, rows, hot-text targets and order steps shuffled. The shuffle uses mulberry32 seeded by `item id + "C"`. The output has no `correct`, `answer`, `why`, `clue` or `hint`.
  - Blind output: `…/scratchpad/gapC/blind.txt`
  - Key output: `…/scratchpad/gapC/keys.txt` (same shuffle, with the keys mapped)
- Figures used by items or passages were rendered to PNG with Playwright and viewed: tc1b-beaver-lodge, tc1b-beaver-tree, tc1b-beaver-webpage, tc1b-monarch-cycle, tc1b-monarch-flower, tc1b-monarch-webpage, ra1b-web-pumpkin and ra1b-web-moon. The PNGs are in `…/scratchpad/gapC/`.
- I solved every item from blind.txt and recorded my answers. Only then did I open keys.txt.
- I checked one rendered screen (the RA.1.b test, on port 8490) to confirm how passages are labelled. The server was stopped afterwards.
- **Disclosure: the 3.T.C.1.b solve was contaminated.** Before I wrote the blind script, I viewed the raw T-C.js block for 3.T.C.1.b to learn the schema. That block stores the correct choice first and includes the `why` text. So my 13 answers for 3.T.C.1.b are not independent. I still re-solved them from the shuffled output and checked them against the figures, but the agreement for this lesson is not evidence of an independent solve. The other 53 items were solved blind.

## Results
- Agreement: **66 / 66 (100%)**. On the 53 independently solved items it is also **53 / 53 (100%)**.
- Every multi-part answer agreed, including each ebsr part, each dropdown slot, each match row and the full order sequence.
- **No key disagreements.** No item is unanswerable. No item has a second defensible answer.
- Points: every choose-two item (ms pick 2, hottext pick 2) is worth 2 points. So is every ebsr, every two-slot dropdown, every match and the order item. One-slot dropdowns and mc items are worth 1. **No points defects.**
- Standards: the wording in `official-gr3-standards.json` matches standards-3-5.txt for all six codes. The pages are p.26 (C.1.b), p.27 (C.2.c), p.37 (RA.1.b), p.19 (GC.2.a), p.9 (F.F.1.a) and p.7 (F.P.4.c).
- `node verification/check-content.js --all` currently shows 4 FAILs. All four are in **3.T.RA.2.b SK-RA2b-T5**, which is outside this scope and is probably another agent's work in progress. The only warning in scope is "SK-TC1b-T2: clue shares 'fact' only with the key". Clues are hidden in test mode, so this has no effect on the student.

## Per-item findings (only items with a finding are listed; every other item passed every check)

### 3.T.C.1.b: PASS WITH SHOULDS
The keys, explanations and distractors are all correct. Each figure answers its item when viewed: the beaver-tree picture shows the teeth in the notch and the chips, with no water; the lodge labels match 5.3 and 5.4; the life-cycle arrows run 1→2→3→4→1; and both web pages show the tab, pop-up and link features. Alignment covers print, digital, auditory (caption line) and spoken (P9) features, which matches "print, digital, auditory, spoken, and visual modes".
- **SHOULD (low), SK-TC1b-P4 `why` → SK-TC1b-P6.** P4 is in the Practice Together set. Its `why` says "Bold print points out key words, and the glossary tells what they mean." That is nearly the text of P6 row 3, "marks an important word that is in the glossary" → Bold word, and P6 comes later in Try It Yourself. The Teach step says the same thing, so this is a small leak.
  - Fix: end the P4 `why` with "...the glossary tells what they mean," without the words "important word", or reword the P6 row to "points out a key word the reader should learn".
- **NIT, SK-TC1b-P10 alt.** The alt says "a dark bar with three lines of words: [water rushing], then NARRATOR: ..." but it names only two caption entries. The third line is only a visual wrap.
  - Fix: "a dark bar with two caption lines: [water rushing], then NARRATOR: The water spills over the dam."
- Alt-text check:
  - The P8 alt says "teeth are on a deep notch it has chewed". That describes the picture, which a sighted child also sees. It is not extra information, so it is acceptable.
  - The T8 alt describes the pop-up box without naming it a "pop-up", which is good.
  - The T3 and T6 alts do not give away their answers. The T6 picture really does show the flower and the four spotted wings, so those distractors are fair "the picture already shows it" foils.

### 3.T.C.2.c: PASS WITH SHOULDS
The keys and explanations are correct, and every distractor is wrong for a reason the text gives. Coverage of the standard's three context types is good:
- time period: P1, P2, T1, T2, T3, T4
- individual: P6, P8, T7
- situational: P7, P9, T6

Findings:
- **SHOULD, SK-TC2c-T4 is marked DOK 3 but is DOK 1–2.** The answer, "Grandma does not have a TV", is stated in 7.2: "She does not have a television yet." The step to "so it will be big news" is a small inference.
  - Fix: set `dok: 2`.
- **SHOULD (debatable), SK-TC2c-P4 and SK-TC2c-T3 are marked DOK 3.** Each pairs a near-literal Part A (6.1–6.2 for P4; 5.2 for T3) with its quote. T3 adds outside knowledge that TV today is in color, but that is still recall plus comparison.
  - Recommendation: `dok: 2`. This is less clear-cut than T4.
- NIT, P1 and P7 `why` → P4: both mention that "Ella only hopes to visit". This removes one P4 Part A distractor ("Hattie is going to visit the farm this summer"), but it does not reveal the key. No change needed.

### 3.T.RA.1.b: PASS WITH SHOULDS
The keys and explanations are correct. Sentence-level checks:
- P1/T1 "Both sources": pollen is in 3.2 and 2.3; fall picking is in 4.3 and 4.1; dust is in p3 4.3 and p4 3.1 ("moon dust").
- P3 order is seed → vine → pollen → green pumpkin → picking. The `why` claim that the first four steps come from Source 1 and the last from Source 2 is accurate.
- P7 and T7 each have a distractor that contradicts the text. The ads and links are fair "true but not relevant" foils.

The web-page header figures are answerable and their alts match: Kids Garden Club, Sept 8 2026; Sky Watchers Club, Apr 14 2026. They support the "Where I found it" row and give no answer away.

Findings:
- **SHOULD, label clash on screen, seen in the browser.** Lesson sets pass all six passages, so the pane tags the moon passages "PASSAGE 3" and "PASSAGE 4". Their bylines say "Source 1: a page from a science book" and "Source 2: ...". T1 asks for "Source 1 only / Source 2 only / Both sources", and T5 asks for "Kofi's note from Source 1". The byline makes it solvable, but a third grader sees two numbering systems at once ("Passage 3 = Source 1").
  - Fix (content only, nothing in the engine): name the sources by title in T1, T5 and P1, for example "Our Moon only / A Talk at the Science Center only / Both". Or let the lead decide whether to suppress the "Passage N" tag when an item names exactly two passages that carry Source bylines.
  - Evidence: `…/scratchpad/gapC/ra1b-t1.png`.
- **SHOULD (coverage, not a key defect).** The standard says "multiple **credible** sources". No practice or test item asks the child to judge credibility, for example which source is more trustworthy or why a scientist's talk counts as a good source. Credibility is touched only indirectly, through skipping the ads in P6/T6 and the Teach point that two sources agreeing makes a fact more certain.
  - Fix: optionally add one item, or replace one, so that credibility is assessed.
- **SHOULD (debatable), SK-RA1b-T5 is marked DOK 3.** Picking the Source 2 fact that extends a note about rocks is DOK 2. P5, which picks a source and justifies the choice, can stay at 3.
- NIT: SK-RA1b-P2's key ("Only flowers that get pollen can grow into pumpkins") is about bees only through an inference that bees carry the pollen. The `why` explains that inference, so it is acceptable.
- No `why` leaks a later item.
  - P6's `why` says "fun facts do not tell what a plant needs". That transfers to P7 distractor C, but it is a strategy, not that item's answer.

### 3.L.GC.2.a: PASS WITH SHOULDS
The keys and explanations are correct. Each draft has exactly one target for its single-pick hot text: run-on (7) in Maya's draft, fragment (5) and complex (11) in Jordan's. Maya's draft has exactly two complex sentences, (8) and (10). The distractor foils are well chosen: compound predicate (P3 B), compound subject (T3 "My brother and I"), the "Last summer," opener (T8) and the comma splice (T1, P8, T7).

Findings:
- **SHOULD, SK-GC2a-T2 (ebsr) is marked DOK 3 but is DOK 2.** It asks the child to classify a sentence and choose the matching reason. That is a skill/concept task.
  - Fix: `dok: 2`.
- **SHOULD (low), SK-GC2a-P7 `why` → SK-GC2a-P9.** P7 is in Practice Together. Its `why` says "Sentence 3 also has two whole thoughts, but they are joined correctly with a comma and and". That tells the child sentence 3 is compound, which removes one distractor (E) from P9 in Try It Yourself. It does not reveal the P9 key.
  - Fix: cut that last sentence from the P7 `why`, or swap P9's sentence-3 distractor for sentence 2 or sentence 9.
- NIT: the SK-GC2a-P8 prompt ("Sentence 5 ... is a fragment") comes after P9 in the same Try set, and P9 lists sentence 5 as a distractor. A child who goes back with "Previous question" could use it. This is low risk, and the clue for P9 already teaches the idea.

### 3.F.P.4.c (SK-FP4c-P7, SK-FP4c-T6): PASS
- P7: un-/dis- → "not or the opposite of", -ful → "full of", -less → "without". The clue correctly warns that a column is used twice.
- T6: useful and careless are correct. The foils are dropped-e errors (usful, homless) and a double-l -ful (colorfull). This fits "encode words with common prefixes and suffixes", and the `why` gives the correct rule.

### 3.F.F.1.a: PASS WITH SHOULDS
The keys are correct:
- Rhymes: were/fur, done/sun, four/door, touch/much.
- P4 vowel sort: two, who, do → moon; month, love → sun.
- T3: none, one → sun; alone, shown → bone.
- Context choices: wait/by, won, saw, Where.
- Error spotting: form→from, of→off.

The foils are good look-alikes: where, here, bone, hour, sour, couch, own, now, was, sew. Alignment is the "irregularly spelled words in isolation and context" part of 3.F.F.1.a. Accuracy is assessed, but automaticity cannot be measured by untimed items. That is a property of the format, not a defect. The 3.F.F.1.d fluency lesson covers rate.

Findings:
- NIT, SK-FF1a-P6 `why`: "'I was a deer' would mean you are a deer" mixes tense and person.
  - Fix: "'Yesterday I was a deer' would mean the writer was a deer, which does not make sense."
- Observation: the rhyme keys assume a General American or Southern US pronunciation. All of them hold for Georgia speech, so no change is needed.

## Verdict summary
| Lesson | Items | Agree | Verdict |
|---|---|---|---|
| 3.T.C.1.b | 13 | 13/13 (contaminated, see Method) | PASS WITH SHOULDS |
| 3.T.C.2.c | 13 | 13/13 | PASS WITH SHOULDS (DOK) |
| 3.T.RA.1.b | 13 | 13/13 | PASS WITH SHOULDS (Source labels, credibility coverage) |
| 3.L.GC.2.a | 13 | 13/13 | PASS WITH SHOULDS (DOK, small why leak) |
| 3.F.P.4.c P7/T6 | 2 | 2/2 | PASS |
| 3.F.F.1.a | 12 | 12/12 | PASS WITH SHOULDS (nit only) |

No item has a MUST/FAIL defect: no wrong key, no wrong points and no unanswerable figure.

## Not done
- No edits, because this review is read-only.
- I did not do an independent blind re-solve of 3.T.C.1.b, for the contamination reason above. If an independent number is needed for that lesson, another reviewer should re-solve it from `…/scratchpad/gapC/blind.txt` lines 1–141.

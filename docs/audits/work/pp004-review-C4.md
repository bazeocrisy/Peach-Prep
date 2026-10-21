# PP-004 independent assessment review, Agent C, round 4

Reviewer: Agent C (round 4). This review is read only: this file is the only one written to the repo.
Scope: every item whose content, passage, figure or alt text changed between commit 29d3f19 and the current working tree. I also re-checked every PT-1 item for cues in both directions.
Server: port 8505, started for this review and stopped by its PID.
Working files are in the scratchpad at `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revC4/`:
- `blind/` holds the shuffled, keyless printouts.
- `myanswers.txt` holds my answers, recorded before I opened any key.
- `keys/` holds the keyed printouts.
- `png/` holds the figures rendered to PNG.
- `shots/` holds screenshots from the player.

## 1. What changed (git diff 29d3f19, working tree clean at e6ce7b3)

| File | Item / asset | Change |
|---|---|---|
| sets/PT-1.js:348 | PT-1-8 | Distractor C replaced. "Sunny fall days and cool nights..." became "The leaves of many maples and sweetgums make red and purple colors in the fall." |
| sets/PT-1.js:435 | PT-1-13 | The cause row "Fall days are sunny..." and its effect "The red colors are especially bright" were replaced by "A tree loses its leaves." with the effect "The tree saves water during the cold months." The why was updated. |
| lessons/L-GUM3.js:313-363 | SK-GUM3-2-TB1, TB2, TB4, TB5 | The form B items were rewritten with new target words (halves, calves, elves, thieves, grandchildren, snowmen, lives, fishermen, wives, shelves). TB3 is unchanged. |
| lessons/L-V12.js:636 | SK-V2a-TB4 | builder (-er) became reopen (re-), and colder (-er) became seedless (-less). The columns, clue and why were updated. |
| lessons/L-GC2.js:819 | SK-GC2d-T3 | DOK changed from 3 to 2. |
| sets/W-REV-01.js:113 | W-REV-01-5 | The why now says "The second paragraph (sentences 2 to 6)". |
| lessons/T-C.js:347 and assets/figures/tc1b-beaver-webpage.svg | SK-TC1b-P10 | The caption line became "NARRATOR: The water rushes past the lodge." The alt text and the SVG title now say "a pile of sticks in the water". |
| lessons/L-V3.js p3 figure and assets/figures/v3a-b-balloon-parts.svg | SK-V3a-TB5 (the balloon form B item; the passage is shared by TB2-TB6) | The alt text and the SVG title now describe where each label points ("small dashed circle", "small box"). |

## 2. Method
- A Node vm loader read the current item files. I printed every item in scope with its choices, rows, slot options and hot-text targets shuffled (seeded with item id + "C4"). The printouts had no key, why, clue or hint. They included the passages, the figure captions and the alt text.
- I rendered all 4 figures referenced in scope to PNG at 700 px and inspected them: tc1b-beaver-webpage, tc1b-beaver-lodge, v3a-b-balloon-parts and v3a-b-pecan-graph.
- I solved every item and saved the answers to `myanswers.txt`. Only then did I generate the keyed printouts and compare them by item ID.
- Solved set (43 items):
  - all 24 PT-1 items
  - all 5 SK-GUM3-2 form B items
  - all 5 SK-V2a form B items
  - all 6 SK-V3a form B items, since they share the passage with the changed figure
  - SK-GC2d-T3
  - SK-TC1b-P10
  - W-REV-01-5
- Player run at 1366 px: I answered every item correctly via PP_PLAYER and submitted each test. The scores came to the maximum:
  - PT-1: 31/31
  - W-REV-01: 11/11
  - 3.L.GC.2.d:t: 7/7
  - plurals form B: 7/7
  - 3.L.V.2.a:tB: 7/7
  - 3.L.V.3.a:tB: 7/7
- No page errors occurred. The 390 px pass took screenshots but did not reach the result screens, so I am not claiming any scoring results at 390 px.
- I checked the displayed paragraph numbers in the PT-1 p2 screenshot. Headings are not numbered, so "Losing its leaves..." is paragraph 7. This matches the PT-1-13 why, and also the PT-1-10 why, which cites paragraphs 3 and 4.
- I took the official wording from docs/audits/work/official-gr3-standards.json, which is drawn from the GaDOE 3-5 standards PDF.
- `node verification/check-content.js --all` gave PASS with 0 failures and 6 warnings. The only warning in scope is PT-1-14, which is a false positive (see RC4-8).

## 3. Agreement
**43 / 43 items agree with the key (100%).** Every part of every multi-part item agrees as well, including both EBSR parts, every match row, every dropdown slot and the order item.

## 4. Plurals form B (SK-GUM3-2-TB1..TB5): extra checks

**Target words vs. the rest of the lesson.** I searched the whole lesson object except testB: teach, learn (Watch Me), parent, practice and test (form A). The search covered these forms:
- half / halves / halfs
- calf / calves
- elf / elves
- thief / thieves / thiefs
- grandchild / grandchildren / grandchilds
- snowman / snowmen / snowmans
- loaf / loaves
- shelf / shelves / shelfs
- life / lives
- fisherman / fishermen / fishermans
- wife / wives / wifes

Each of them has **0 occurrences**. The only exception is **deer** (13 occurrences: teach, Watch Me and form A), which is the documented exception in TB4. The related base words child/children, man/men and knife/knives are taught. The form B items rely on them only as a model for transfer (grandchild, snowman, fisherman, loaf), which is intended.

**The wrong forms are plain errors, not accepted variants.** For each word, I checked whether the wrong form is listed anywhere on the dictionary page.

| Wrong form | Item | Dictionary evidence (fetched 2026-10-21) |
|---|---|---|
| shelfs | TB4 | https://www.dictionary.com/browse/shelf says "shelves plural" and does not list "shelfs". https://www.oxfordlearnersdictionaries.com/definition/english/shelf says "(plural shelves)" and does not list "shelfs". |
| thiefs | TB2 | https://www.dictionary.com/browse/thief gives "thieves plural", and its Usage note reads "The plural of thief is thieves." "thiefs" is absent. |
| grandchilds | TB2 | https://www.oxfordlearnersdictionaries.com/definition/english/grandchild says "(plural grandchildren)". https://dictionary.com/browse/Grandchild says "grandchildren plural". "grandchilds" is absent from both. |
| snowmans | TB2 | https://www.oxfordlearnersdictionaries.com/definition/english/snowman says "plural snowmen". https://www.dictionary.com/browse/Snowman says "snowmen plural". "snowmans" is absent from both. |
| fishermans | TB4 | https://www.oxfordlearnersdictionaries.com/definition/english/fisherman gives only "fishermen". https://dictionary.com/browse/fishermen gives only "fishermen". "fishermans" is absent from both. |
| wifes | TB5 | https://dictionary.com/browse/wife gives "wives plural", and its Usage note reads "The plural of wife is wives." "wifes" is absent. |
| halfs (extra) | TB1 | https://www.dictionary.com/browse/half gives "halves" only, and "halfs" is absent even in the sports senses. https://merriam-webster.com/dictionary/half says "plural halves" with no "also" variant. |

I could not use the merriam-webster.com URLs for shelf, thief, grandchild, snowman, fisherman and wife. The fetch was blocked because a permission prompt was not answered, so I did not retry them. The Dictionary.com and Oxford Learner's pages above were used instead. I did not check "calfs", because it is not offered as an option anywhere. Calves is the key in TB2.

Conclusion: thiefs, grandchilds, snowmans, fishermans, wifes, shelfs and halfs are not standard variants in the sources I checked. They are acceptable as plain-error distractors, and the "not words" wording in the explanations is fair for grade 3.

## 5. Per-item checks (changed items)
Columns: K = key, E = explanation, D = distractors, A = alignment with the official wording, P = points, DOK, F = figure and alt text, G = giveaways in the set.

| Item | Mine = key | K | E | D | A | P | DOK | F | G |
|---|---|---|---|---|---|---|---|---|---|
| PT-1-8 | C = C | ok | ok: "each one comes from only one part" is true of the new choice B (paragraph 7) | ok: B is a true single-section detail | 3.T.T.2.a "...facts and key details used to support the main idea" (p.33), ok | 1 ok | 2 ok | n/a | see RC4-4 |
| PT-1-13 | A0 B3 C2 D1 = key | ok, and the one-to-one solution is unique | ok: "Paragraph 7" matches the displayed numbering | ok: "breeze knocks leaf loose" is a good reversed-cause trap for "A tree loses its leaves" | 3.T.T.2.b "Describe the relationship between a series of ... scientific ideas or concepts ..." (p.33), ok | 2 ok | 2 ok | n/a | see RC4-5. The "sunny days" cue to PT-1-14 is gone: "sunny" now appears only in the passage and in PT-1-14. |
| SK-GUM3-2-TB1 | C = C | ok | ok | ok (halfs, halfes, half) | GUM grade 3 "Form and use irregular plural nouns.", ok | 1 | 1 ok | n/a | see RC4-2 |
| SK-GUM3-2-TB2 | C,D = key | ok | ok | ok | ok | 2 | 2 ok | n/a | none |
| SK-GUM3-2-TB4 | A1 B0 C0 D1 = key | ok | ok | ok | ok | 2 | 2 ok | n/a | RC4-7 |
| SK-GUM3-2-TB5 | D = D | ok | ok | ok | ok | 1 | 2 ok | n/a | none |
| SK-V2a-TB4 | A0 B1 C3 D2 = key | ok | ok | each meaning fits exactly one row | 3.L.V.2.a "Deconstruct words using common roots, root words, and affixes to determine meaning." (p.22), ok. re- and -less are both taught in this lesson. | 2 | 2 (see RC4-6) | n/a | none: TB1 and TB2 state un- and mis- in their stems, which is not relevant to TB4 |
| SK-GC2d-T3 | A=A, B=B | ok | ok | ok | 3.L.GC.2.d "Elaborate on ideas and information, using adjectives and adverbs ... to convey precise meaning." (p.19), ok | 2 | 2 agreed: choosing and justifying a revision is DOK 2 | n/a | none |
| W-REV-01-5 | E = E | ok | ok: the rendered draft shows (2)-(6) in the second paragraph | ok | 3.T.SS.1.d "Craft related sentences into clear and cohesive paragraphs." (p.29), ok | 1 | 2 ok | n/a | none: "Biscuit" and "cousin" appear only in the passage and this item |
| SK-TC1b-P10 | {0}B {1}A = key | ok | ok | see RC4-1 | 3.T.C.1.b "Determine common text features of print, digital, auditory, spoken, and visual modes ..." (p.26), ok | 2 | 2 ok | The drawing (a trapezoid pile of sticks with ripples), the alt text and the SVG title all agree. No answer is given away. | none |
| SK-V3a-TB5 | C = C | ok | ok (RC4-3) | ok | 3.L.V.3.a "Use context (e.g., images and graphs) ..." (p.23), ok | 1 | 2 ok | The drawing shows the vent label pointing to a dashed oval at the top, matching the alt. The alt no longer says "opening", so the student still has to infer that from "opens the vent ... hot air escapes". | none |

The unchanged context items I solved all agree, with no new defects: PT-1 items 1-7, 9-12, 14-24; SK-GUM3-2-TB3; SK-V2a-TB1/2/3/5; and SK-V3a-TB1/2/3/4/6.

## 6. PT-1 cue re-check (both directions)
- p1 items (1-7): no change, and no new cues.
- From PT-1-14 outward: the sunny-days and cool-nights sentence (the PT-1-14 Part B key) is no longer echoed in PT-1-8 or PT-1-13, so the earlier cue is removed.
- From PT-1-13 to other items: the new column "The tree saves water during the cold months" fits with the PT-1-8 key ("as trees get ready for winter"). It does not name or paraphrase the key, so this is not a giveaway. The new row "A tree loses its leaves" is close to the PT-1-12 key wording (RC4-5, NOTE).
- From other items to PT-1-13: no other item states the water-saving effect or the nutrient effect.
- PT-1-10: the D and E keys are not stated in any other item's choices.
- PT-1-11: no change.
- p3 and language items (15-24): independent of p2, no cues.

## 7. Findings

**RC4-1 (SHOULD). SK-TC1b-P10: the caption narration no longer fits the page section or a distractor.**
- Location: T-C.js:347-358; assets/figures/tc1b-beaver-webpage.svg:30.
- Evidence: the page is for the section "Busy Builders". In passage p1, paragraph 3, that section is about dams, and lodges are the next section ("A Home with a Secret Door"). The narrator line is now "The water rushes past the lodge." Meanwhile slot {1} still offers "play the video about the dam", and the link is "Next page: Beaver lodges".
- The keys are unaffected, but a careful reader sees a dam-section video narrating a lodge, and a distractor that calls it "the video about the dam".
- Fix (preferred): change the SVG text line 30, and the alt in T-C.js:350, to "NARRATOR: The dam slows the rushing water." This does not show or claim any water spilling, so it is consistent with the drawing and with F-2. Keep "pile of sticks in the water" in the alt, or say "a dam of sticks in the water".
- Alternative: keep "lodge" and change the slot {1} distractor to "play the video about the lodge".

**RC4-2 (SHOULD). Plurals form B over-samples the f/fe to -ves pattern.**
- Location: L-GUM3.js:313-363.
- Evidence: every one of the 5 form B items turns on f/fe to -ves (halves, calves/elves/thiefs, loaves, shelfs/lives, wifes). Every correctly spelled key form is a -ves plural, apart from "deer", which is taught.
- The vowel-change and -en/-ren patterns named in the lesson title ("children, mice and feet") appear only as misspelled distractors: grandchilds, snowmans and fishermans.
- Form A keys span vowel change, -en, unchanged and f to v, so the two forms are not parallel in what they sample. Nothing is wrong item by item.
- Fix: make one production item use a compound pattern. For example, TB1 could be "We built three ____ in the front yard." with the options snowmen (key), snowmans, snowmens and snowman. Then replace the TB2 "snowmans" distractor with a -ves error that is now free, such as "Mom cut the orange into two halfs." All target words stay outside the lesson.

**RC4-3 (NOTE). SK-V3a-TB5: the why and the alt text use slightly different wording.**
- Location: L-V3.js:322.
- Evidence: the why says the label vent points to "a round opening at the very top". The drawing and alt show "a small dashed circle at the very top". This is acceptable, because the dashed circle depicts the opening.
- Optional fix: "...pointing to a small dashed circle, an opening at the very top of the balloon."

**RC4-4 (NOTE). PT-1: one red-and-purple detail is repeated across three items.**
- Location: PT-1-8 choice B (PT-1.js:358), PT-1-10, PT-1-14 Part B.
- Evidence: the statement that maples and sweetgums make red and purple colors in the fall appears in all three items, always as a distractor. No key is revealed. No fix is required. Optionally, reword PT-1-8 B to another single-section detail to cut the repetition.

**RC4-5 (NOTE). PT-1-13 row and PT-1-12 key use similar wording.**
- Location: PT-1-13 (PT-1.js:448) and PT-1-12 (PT-1.js:418).
- Evidence: the PT-1-13 row "A tree loses its leaves." is close to the PT-1-12 key "how a tree drops its leaves", and students can go back to earlier questions. The row does not say which section or heading it comes from, so the risk is low. No change is required.

**RC4-6 (NOTE). SK-V2a-TB4 DOK.**
- Location: L-V12.js:636; the parallel form A item is SK-V2a-T4 at L-V12.js:571.
- Evidence: the earlier -er disambiguation (builder vs. colder) gave this item a DOK 2 step. With it removed, the item is straight recall of taught affix meanings, which arguably makes it DOK 1. Form A T4 is the same recall task and is also labelled DOK 2, so the forms remain parallel.
- Fix (owner's choice): relabel both T4 and TB4 to DOK 1, or leave both at 2. Do not change only one.

**RC4-7 (NOTE). SK-GUM3-2-TB4: "deer" and the extra plurals.**
- Location: L-GUM3.js:341.
- Evidence: the row "Two deer drank from the cool creek." uses a taught word (the documented exception), so it tests recall rather than transfer. The row "Doctors and nurses work hard to save lives." has three plurals while the prompt says "the plural noun", but all three are correct, so the item is not ambiguous. No change is required.

**RC4-8 (NOTE). The check-content warning on PT-1-14 is a false positive.**
- Evidence: the warning says the clue shares "bright" only with the key. Distractor D also contains "brighter", and the clue points to the passage, not to a choice. No action is needed.

There are no MUST findings.

## 8. Verdicts

| Changed unit / item | Verdict |
|---|---|
| PT-1 (PT-1-8, PT-1-13, and the full cue re-check) | PASS |
| SK-GUM3-2 form B (TB1, TB2, TB4, TB5; TB3 in context) | PASS WITH SHOULDS (RC4-2) |
| SK-V2a-TB4 | PASS |
| SK-GC2d-T3 | PASS |
| W-REV-01-5 | PASS |
| SK-TC1b-P10 (beaver figure) | PASS WITH SHOULDS (RC4-1) |
| SK-V3a form B, balloon figure (TB5; TB1-TB6 in context) | PASS |

Summary: 43 items solved blind, 43/43 agree with the keys, 0 MUST, 2 SHOULD, 6 NOTE.

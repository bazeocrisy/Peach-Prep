# PP-004 form B log: agent "formB-info"

- **Worktree:** /home/claude/pp-fix. No git commands were run.
- **Port:** 8493 (`node verification/serve.js . 8493`). I stopped the server by its PID at the end.
- **Briefs:** FORMB-BRIEF.md, PP004-BRIEF.md, PP003-BRIEF.md and FIX-BRIEF.md. The format is docs/SPEC.md §8b `testB`, and the model is 3.L.GC.2.b in L-GC2.js.
- **Files changed:**
  - js/data/lessons/T-T2.js: the 3.T.T.2.a and 3.T.T.2.b blocks
  - js/data/lessons/T-RA.js: the 3.T.RA.2.a block only. I did not touch 3.T.RA.1.b, which another agent is editing.
  - js/data/lessons/T-TS.js: the TS-CE block only
  - assets/figures/tt2a-b-tree-trunk.svg (new)
  - Each block gained one new passage (`p3`) and a `testB` list. No form A, practice, teach, learn or coach content was changed.
- **Status:** NOT reviewed. These forms need independent review. I did not mark them reviewed.

## Gates (run from /home/claude/pp-fix after the last edit)
- `node verification/check-content.js --all`: PASS, 0 failures, 6 warnings. None of the warnings are on my items.
  - Two warnings on my items came up along the way. Both were "clue shares a word only with the key": "tree" on SK-TT2a-TB4, and "send, news" on SK-TT2b-TB3. I fixed both by rewording the clue.
- `python3 verification/readability.py`: no passage on the site is flagged above grade 4.5. My new passages:

  | Lesson | Passage | Words | FK |
  |---|---|---|---|
  | 3.T.T.2.a | p3 | 214 | about 3.1 |
  | 3.T.T.2.b | p3 | 276 | about 4.2 (a first draft was 4.7; I shortened sentences) |
  | 3.T.RA.2.a | p3 | 178 | about 3.2 |
  | TS-CE | p3 | 210 | about 2.7 |

- `node verification/check-writing.js`: 0 failures, 0 warnings.

## Browser check
- **Scripts:** scratchpad/formB-info/render.py and scratchpad/formB-info/qtab.py.
- **Method:** I ran `PP_PLAYER.start('SK:<key>:tB','test')` at 390x844 and at 1366x900. Each item was answered from its key, the same way guard.py does it, and then submitted.
- **Scores:** full marks at both widths, and the results screen said "Passed".
  - 3.T.T.2.a: 8/8
  - 3.T.T.2.b: 7/7
  - 3.T.RA.2.a: 6/6
  - TS-CE: 6/6
- **Titles:** each set's title ends in "Test (form B)".
- **Errors and layout:** no page errors. At 390, scrollWidth was 390 on every item and on every results screen, so there is no sideways scroll.
- **Figure:** tt2a-b-tree-trunk.svg loads. It is served as image/svg+xml.
  - It shows at 310px wide at 390, and at 380px wide at 1366.
  - All the labels and the note can be read at phone width.
- **Hot-text targets:** I printed the text of every target ref, and each one resolves to the sentence it is meant to.
- **What I looked at:** screenshots of every item at both widths, the question tab at 390 for 3.T.T.2.b and TS-CE, and the results screens. They are in scratchpad/formB-info/shots/.

---

## 1. 3.T.T.2.a: Main idea and key details (T-T2.js)
- **Code:** 3.T.T.2.a. "Describe the techniques used to present and design expository texts, including facts and key details used to support the main idea." (standards PDF p. 33, as quoted in standards.js)
- **Form A:** 6 items, 8 points, on p2, "The Armored Digger".

  | Item | Type | Points | DOK | What it asks |
  |---|---|---|---|---|
  | T1 | mc | 1 | 2 | what the article is mostly about |
  | T2 | ebsr | 2 | 3 | main idea of paragraph 4, plus support |
  | T3 | ms | 2 | 2 | two details that support "body helps it find food" |
  | T4 | mc | 1 | 2 | the detail that does NOT support |
  | T5 | hottext | 1 | 2 | the sentence that shows how the shell helps |
  | T6 | mc | 1 | 2 | the fact learned only from the diagram |

- **Form B:** 6 items, 8 points, on the new passage p3, "Inside a Tree Trunk", with the new Figure 1 (tt2a-b-tree-trunk.svg).

  | Item | Type | Points | DOK | What it asks |
  |---|---|---|---|---|
  | TB1 | mc | 1 | 2 | which sentence best tells the main idea; the choices are written statements, not phrases |
  | TB2 | ebsr | 2 | 3 | what paragraph 5 (heartwood) is mostly about, plus support. Part B includes a true sentence from the same paragraph that does not support the answer. |
  | TB3 | ms | 2 | 2 | two details that tell how the trunk moves food and water |
  | TB4 | mc | 1 | 2 | which new sentence would be a key detail if added to paragraph 2. This is a new angle: choosing a key detail that is not yet in the text. |
  | TB5 | hottext | 1 | 2 | the sentence that is interesting but NOT a key detail |
  | TB6 | mc | 1 | 2 | which question a reader can answer using the diagram. The choices are questions, not facts. |

- **DOK mix:** the same as form A (five at DOK 2 and one at DOK 3).
- **How it differs from form A and practice:**
  - The topic is a tree trunk's layers. Form A, practice and Learn It cover the armadillo, the honeybee hive, the camel, the penguin, the spider and the earthworm.
  - The main idea has a different shape. Form A's is "the body helps it find food and stay safe". Form B's is "each layer has a job".
  - The figure is a cross-section with layer labels and a ring note, not an animal diagram or a honeycomb.
  - The figure item asks which question the figure answers. Form A's T6 asks which fact is only in the diagram, and practice P6 and P7 ask about the caption and labels.
  - No stem or choice is reused.
- **Figure (SPEC §5e):**
  - It is original line art in a 320x476 viewBox, with text at 22 units, which is about 15px at 220px wide.
  - The bark is set apart by a hatch texture and the rings by dashed and solid lines, so color is not the only cue.
  - The alt text gives every label and the note word for word. It does not say which question the note answers.
  - Only one choice in TB6 can be answered from the figure. The rings note appears only in the figure, not in the paragraphs.
- **No giveaways inside form B:**
  - The TB1 distractors avoid the TB3 answers.
  - The TB2 Part B distractors avoid the sapwood sentence (TB3) and the "wider than a car" sentence (TB5).
  - The TB5 prompt does not state the main idea.
- **Facts checked (2026-10-20):**
  - Bark protects the tree from disease, fire and injury. The inner bark (phloem) carries food from the leaves down. Sapwood carries water up from the roots. Heartwood is older sapwood at the center that no longer carries water and gives support. Source: NPS Glacier, "Trees: the Inside Story": https://www.nps.gov/glac/learn/education/4-6-unit-six-activity-2-trees-the-inside-story.htm
  - The outer bark keeps the tree from drying out. Source: Maine Forest Service glossary: https://www.maine.gov/dacf/mfs/projects/fall_foliage/kids/glossary.html
  - Usually one ring forms each year, and counting the rings gives the age. Source: USGS, "Tree rings: timekeepers of the past": https://www.usgs.gov/publications/tree-rings-timekeepers-past
  - Some tree trunks are wider than a car (about 6 ft). This is widely documented for very old trees, such as giant sequoias and live oaks. I did not fetch a source for it, and the item does not depend on the number.
  - **Simplification:** the cambium layer is left out on purpose, for grade 3. "The next layer is the sapwood" is therefore a simplification, because a thin cambium layer lies between the inner bark and the sapwood. A reviewer may want to check that this is acceptable.

## 2. 3.T.T.2.b: How ideas connect, sequence and cause and effect (T-T2.js)
- **Code:** 3.T.T.2.b. "Describe the relationship between a series of historical events, scientific ideas or concepts, or steps in technical procedures in a text." (p. 33)
- **Form A:** 5 items, 7 points, on p2, "Where Does Rain Come From?" (a science process).

  | Item | Type | Points | DOK | What it asks |
  |---|---|---|---|---|
  | T1 | order | 2 | 2 | the steps in order |
  | T2 | mc | 1 | 2 | the cause |
  | T3 | ebsr | 2 | 3 | why the drops fall, plus support |
  | T4 | dropdown | 1 | 2 | the signal word "because" |
  | T5 | mc | 1 | 3 | how the last paragraph connects to paragraph 2 |

- **Form B:** 5 items, 7 points, on the new passage p3, "Riding for the Mail" (the Pony Express).
  - Form B uses the standard's other two kinds of text: a series of historical events and the steps of a procedure. Form A and practice are science (the water cycle, a monarch's life). Learn It has bean planting and the icehouse.

  | Item | Type | Points | DOK | What it asks |
  |---|---|---|---|---|
  | TB1 | order | 2 | 2 | the steps for moving the mail (a procedure) |
  | TB2 | mc | 1 | 2 | why a rider changed to a fresh horse |
  | TB3 | ebsr | 2 | 3 | what caused the Pony Express to close, plus support |
  | TB4 | dropdown | 1 | 2 | the signal word "so", which comes before an effect. Form A's key was "because". The options so, but and until do not repeat practice P4's so, although and before. |
  | TB5 | mc | 1 | 3 | how paragraphs 1 and 4 are connected: slow mail, then faster mail |

- **DOK mix:** the same as form A (three at DOK 2 and two at DOK 3).
- **No giveaways:** the TB3 choices avoid the "horse gets tired" idea (TB2) and the ship and stagecoach times (TB5).
- **Facts checked (2026-10-20):**
  - The service ran from April 1860 to October 1861. The route went from St. Joseph, Missouri, to Sacramento, California.
  - Riders changed horses every 10 to 15 miles and handed the mail to a new rider every 75 to 100 miles.
  - Delivery took about 10 days, compared with about 25 days by stagecoach (the passage says "more than three weeks") and months by ship.
  - The telegraph was finished on October 24, 1861, and the Pony Express closed two days later.
  - Sources: Britannica Kids, "Pony Express": https://kids.britannica.com/students/article/Pony-Express/274241
  - History.com, "10 Things You May Not Know About the Pony Express": https://www.history.com/articles/10-things-you-may-not-know-about-the-pony-express. It covers the leather mochila over the saddle, horse swaps of about two minutes, and the 19 months of service.
  - **UNVERIFIED:** the NPS page nps.gov/poex/learn/historyculture/index.htm could not be fetched, because the permission request timed out.
  - The passage says the Pony Express closed because people no longer needed riders once the telegraph was finished. Britannica also names money problems and other causes. The passage gives only the telegraph cause, which is the one both sources lead with, and it does not say the telegraph was the only cause.

## 3. 3.T.RA.2.a: Pointing to the sentence that proves it (T-RA.js)
- **Code:** 3.T.RA.2.a. "Refer to specific passages from a text to support an idea, answer, or opinion." (p. 38)
- **Form A:** 4 items, 6 points, on p2, "The Spring Song" (literary).

  | Item | Type | Points | DOK | What it asks |
  |---|---|---|---|---|
  | T1 | hottext | 1 | 2 | the sentence that shows a feeling |
  | T2 | ebsr | 2 | 3 | how Ana changed, plus support |
  | T3 | hottext | 2 | 3 | two sentences that show she is calm |
  | T4 | mc | 1 | 2 | the best support for Leo's opinion |

- **Form B:** 4 items, 6 points, on the new literary passage p3, "Room for One More" (a new student at lunch).

  | Item | Type | Points | DOK | What it asks |
  |---|---|---|---|---|
  | TB1 | hottext | 1 | 2 | the sentence that shows Rosa feels sad and alone |
  | TB2 | ebsr | 2 | 3 | why Jada goes over to Rosa (her motive), plus support. Form A asked about a change. |
  | TB3 | hottext | 2 | 3 | two sentences that show Rosa feels happy and welcome by the end |
  | TB4 | mc | 1 | 2 | the best support for "Jada and Rosa like the same thing". The key needs the word "too", and the close distractor names only Rosa. |

- **DOK mix:** the same as form A.
- **Differences:**
  - Form A's story is about stage nerves. Form B's is about kindness to a new student, with new characters, events and feelings.
  - Practice uses the informational firefly text.
  - I chose a new topic on purpose. A science-fair volcano story was rejected because L-V3.js already has "Nadia's Volcano".
- **No giveaways:**
  - "Last year, Jada had been the new girl", which would support TB2, is not used as a choice anywhere.
  - The TB4 choices do not quote the TB3 answers.
  - The TB3 targets include TB1's key only as a wrong target, which tells the child nothing.
- **Facts:** none. The story is fiction, and no names come from real people.

## 4. TS-CE: Cause and effect (T-TS.js)
- **Codes:** 3.T.SS.1.a and 3.T.T.2.b.
  - In form A, only T1 carries both codes. In form B, only TB1 does. The checker confirmed that the code sets match.
- **Form A:** 5 items, 6 points, on p2, "The Beaver's Pond".

  | Item | Type | Points | DOK | What it asks |
  |---|---|---|---|---|
  | T1 | order | 2 | 2 | the chain, in order |
  | T2 | mc | 1 | 2 | the cause in a sentence that gives the effect first |
  | T3 | hottext | 1 | 2 | the sentence with a clue word that tells what happens after the dam |
  | T4 | mc | 1 | 1 | why the animals move in |
  | T5 | mc | 1 | 2 | which word could replace "because" |

- **Form B:** 5 items, 6 points, on the new passage p3, "The Plants That Build Dunes" (sea oats on Georgia dunes).

  | Item | Type | Points | DOK | What it asks |
  |---|---|---|---|---|
  | TB1 | order | 2 | 2 | the chain from wind to dunes |
  | TB2 | mc | 1 | 2 | which article sentence gives the effect FIRST. It is a new framing of the same idea: the child sorts four real sentences instead of splitting one boxed sentence, as form A's T2 and practice P3 do. |
  | TB3 | hottext | 1 | 2 | the sentence that explains how dunes keep people safe in a storm |
  | TB4 | mc | 1 | 1 | the effect of roots that spread like a net |
  | TB5 | mc | 1 | 2 | what the clue word "Since" tells the reader. Form A asked for a substitute word, and practice P6 asked the child to spot clue words. |

- **DOK mix:** the same as form A (four at DOK 2 and one at DOK 1).
- **Topic choice:**
  - I first planned a passage on fall leaf color, then rejected it because PT-1.js, a Practice Test, already has a chlorophyll and fall-leaves passage.
  - Shivering (practice) and body heat were also avoided.
  - Dunes and sea oats appear nowhere else on the site; I searched for them.
- **No giveaways:** the TB2 choices do not quote the roots sentence (TB4) or the dunes-block-waves sentence (TB3), and they include no sentence that would cue TB1's order.
- **Facts checked (2026-10-20):**
  - Sea oat stems and leaves trap sand blown by the wind, and the dunes get bigger. The roots form an underground lattice that anchors loose sand. Dunes help reduce storm wave energy and protect against flooding. Sea oats are legally protected in Georgia, and picking them is illegal. Source: Georgia DNR Coastal Resources Division, "Sea Oats": https://coastalgadnr.org/sea-oats
  - Sea oats catch blowing sand and build dunes, and their roots hold sand in storms. Visitors should not walk on the plants. Source: NPS Gulf Islands, "Sea Oats": https://home.nps.gov/guis/learn/nature/sea-oats.htm
  - "Sea oats do not mind being buried" fits the DNR page, which says buried plants send up new shoots.
  - "Without the plants, the wind would blow the sand away" is a reasonable inference from the roots anchoring loose sand. Neither page states it word for word.
  - "Visitors use wooden walkways" describes the dune crossovers common on Georgia beaches. Neither source page mentions boardwalks, so this detail is not sourced.

## What remains
- Independent review of all four forms, two reviews under the SPEC manifest rule. I did not mark any of them reviewed.
- Points a reviewer may want to look at:
  - **3.T.T.2.a:** leaving out the cambium layer.
  - **3.T.T.2.a:** whether "It is full of tiny tubes, like a bundle of drinking straws" (one of TB5's wrong targets) clearly reads as a key detail. I judge that it does, because it explains how the sapwood carries water.
  - **TS-CE:** whether TB2's key, "Sea oats are protected in Georgia because they help keep the coast safe", clearly gives the effect before the cause. The reason is ongoing, and the law came later.
  - **3.T.T.2.b:** the NPS Pony Express page could not be fetched.

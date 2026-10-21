# PP-004 form B log: formB-lang

Agent: formB-lang (port 8494). Date: 2026-10-20. Worktree: /home/claude/pp-fix.
Files edited: `js/data/lessons/L-V3.js` (3.L.V.3.a block only), `js/data/lessons/L-V12.js` (3.L.V.2.a block only), `js/data/lessons/L-GUM3.js` (irregular plural and irregular past-tense blocks only).
New files: `assets/figures/v3a-b-pecan-graph.svg`, `assets/figures/v3a-b-balloon-parts.svg` (original line art, SPEC §5e).
**Status: NOT reviewed.** All four forms need independent review before anyone relies on them.

Gates (run from /home/claude/pp-fix after the last edit):
- `node verification/check-content.js --all`: PASS, 0 failures, 6 warnings. All 6 warnings are in other lessons and were there before this work. My two interim warnings (a key that was longer than the other choices on SK-V3a-TB4, and a clue that shared "moose" with the key on SK-GUM3-2-TB3) were fixed.
- `python3 verification/readability.py`: 3.L.V.3.a p3 has 236 words, FK about 4.1. 3.L.V.2.a p3 has 152 words, FK about 2.5. Both are under the 4.5 flag.
- `node verification/check-writing.js`: 0 failures, 0 warnings.
- Browser on port 8494 at 390x844 and 1366x900. `PP_PLAYER.start('SK:<key>:tB','test')` was run for each key. Every item was answered correctly by clicking the real controls: choice buttons, select elements, hot-text buttons and match buttons. On phones, the passage tab was screenshotted first and then the Question tab was opened. Every form was turned in.
  - The score was **7 of 7 on all four forms at both widths**.
  - There were no page errors and no sideways scroll.
  - Screenshots: /tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/formB-lang/shots/
- The server was stopped by its PID.

Design rule I followed for every form: no word, noun or verb that a form B item tests appears in form A, in practice or in Watch Me for that lesson. Within form B, no item's text shows another item's answer.

---

## 1. 3.L.V.3.a: Context clues (L-V3.js), key `3.L.V.3.a`

Codes: 3.L.V.3.a only. The official wording: "Use context (e.g., images and graphs) within and beyond a sentence to determine or clarify the meaning of unknown words and multiple-meaning words and phrases." (standards PDF p. 23)

**Form A (7 points, 6 items, all DOK 2)**

| Item | Type | Points | What it tests |
|---|---|---|---|
| T8 | mc | 1 | graph (attendance) |
| T2 | ebsr | 2 | dwell, with a beyond-sentence clue; Part B picks 2 |
| T7 | dropdown | 1 | picture (heron) |
| T4 | mc | 1 | multiple-meaning word (pen) |
| T5 | mc | 1 | antonym clue (firm) |
| T6 | mc | 1 | phrase (keep an eye out for) |

Its passage is p2, Okefenokee.

**Form B (7 points, 6 items, all DOK 2).** It uses a new passage, **p3 "How a Hot-Air Balloon Flies"** (informational, 236 words). Figure 1, v3a-b-balloon-parts.svg, is placed after paragraph 2. A new graph, v3a-b-pecan-graph.svg, is used too.

| Item | Type | Points | What it tests |
|---|---|---|---|
| TB1 | mc | 1 | graph, standalone: **harvest** (Pecans We Picked in November) |
| TB2 | mc | 1 | multiple-meaning word **lighter** in paragraph 3 (weighing less, more light, paler, or the fire tool) |
| TB3 | ebsr | 2 | **ascend** in paragraph 4; Part B picks the 2 sentences that follow it |
| TB4 | mc | 1 | antonym clue **gusty** (calm ... instead) in paragraph 5 |
| TB5 | mc | 1 | picture: **vent**. Paragraph 6 tells what the vent does, and only Figure 1 shows where it is. The distractors are wrong from the figure. |
| TB6 | dropdown | 1 | phrase **touch down** in paragraph 6, with a beyond-sentence clue |

How form B differs from form A and practice:
- The topic, passage, graph, picture, target words and phrase are all new. Practice uses assorted, scarce, devoured, budget, arid, legumes, drowsy, tidy, trunk and "set everything out". Watch Me uses sturdy, precipitation and pitcher. The teach examples use compost and utensils.
- No form B choice reuses a form A distractor. I removed "kind of weather" and "price" on purpose, because a child who remembered form A could eliminate them from memory.
- The balloon topic is new to the site. I checked the site for other topics first: loggerheads and gopher tortoises already appear in R-INF-01, L-V12 and T-SS, so I did not use them.
- Each clue type in form A has a matching item in form B: graph, beyond-sentence EBSR, picture, multiple-meaning word, antonym and phrase.

Giveaway check: the Part B distractors of TB3 quote paragraphs 2, 5 and 6. None of them defines lighter, gusty, vent or touch down. The TB5 choices do not explain touch down, and the TB6 options do not mention the vent.

Facts checked (2026-10-20):
- Georgia's pecan harvest runs from October to December, with most picking in November. Source: UGA Georgia Pecan Production Calendar, https://pecans.uga.edu/content/dam/caes-subsite/pecans/docs/resources/grower-info/Georgia-Pecan-Production-Calender.pdf
- Hot-air balloon facts: the envelope; the burner below it heats the air; hot air is lighter than the cooler air outside; the top vent lets hot air out so the balloon comes down; the pilot pulls a cord to open it; a balloon cannot really be steered and goes where the wind takes it; flights are usually in the morning or evening, in calm conditions. Sources:
  - https://balloonmuseum.com/how-do-hot-air-balloons-work/ (envelope, burners, top valve, no steering)
  - https://www.virginballoonflights.co.uk/science-of-hot-air-ballooning/ (heated air is lighter; "cannot be steered"; top vent)
  - https://www.chm.bris.ac.uk/webprojects2003/hetherington/final/Hot_air_balloon_parts.html (the "parachute valve cord"; "only be flown in calm, dry conditions")
  - https://www.manawa.com/en/articles/the-complete-guide-to-hot-air-ballooning (morning or evening, less turbulence)
- The claim that wind is "often gusty" later in the day is a general statement, supported by the "less turbulence" in the morning and evening (Manawa). It is worded with "often", not "always".

Figures:
- **v3a-b-pecan-graph.svg**: viewBox 320 wide, text 21-22. The values are written on the bars, so meaning does not depend on color. The alt text names every value.
- **v3a-b-balloon-parts.svg**: viewBox 320 wide, text 22. It has four labels (vent, envelope, burner, basket), and the vent has a dashed outline. The alt text names every label and says where the vent is.
- Both were rendered and inspected at 390 and 1366.

---

## 2. 3.L.V.2.a: Word parts (L-V12.js), key `3.L.V.2.a`

Codes: 3.L.V.2.a only. The official wording: "Deconstruct words using common roots, root words, and affixes to determine meaning." (standards PDF p. 22)

**Form A (7 points, 5 items; DOK 2, 1, 2, 2, 2)**

| Item | Type | Points | DOK | What it tests |
|---|---|---|---|---|
| T1 | mc | 1 | 2 | reusable: re- and -able, both given |
| T2 | mc | 1 | 1 | disliked: dis- given |
| T3 | ebsr | 2 | 2 | careless, plus another word with the same suffix (spotless) |
| T4 | match | 2 | 2 | prefix or suffix meaning: not, before, full of, wrongly |
| T6 | mc | 1 | 2 | the root spect in inspect |

Its passage is p2, Lunchroom Challenge.

**Form B (7 points, 5 items; DOK 2, 1, 2, 2, 2: the same mix).** It uses a new passage, **p3 "The Muffin Mix-Up"** (literary, 152 words).

| Item | Type | Points | DOK | What it tests |
|---|---|---|---|---|
| TB1 | mc | 1 | 2 | **unbreakable**: un- and -able given. The negation is part of the reasoning. |
| TB2 | mc | 1 | 1 | **misread**: mis- given |
| TB3 | ebsr | 2 | 2 | Part A: **preheat**, with the meaning of pre- NOT given. Part B: the word with the same prefix meaning: preschool; the distractors are the look-alikes pretty and press, and unpack. This also tests the teach point that a look-alike has no real word left over. |
| TB4 | match | 2 | 2 | fearless, repaint, joyful and loudly matched to without, again, full of and in a ___ way. None of these columns is a meaning given in another form B prompt. |
| TB5 | mc | 1 | 2 | the root **rupt** in **erupt** (volcano). Distractors match port, phon and spect. |

How form B differs:
- Every target word is new to the lesson. Practice uses hopeless, fixable, spectator, unhappy, thankful, tightly, retied, unsure, misspell and transport. Watch Me uses reheat, playful and telescope. Form A uses reusable, disliked, careless, spotless, unfair, preview, helpful, misplace and inspect.
- The form B EBSR moves from a suffix to a prefix and adds look-alikes.
- The form B match uses a different set of meanings.

Giveaway check:
- TB1 gives un- = not and -able = can be. TB2 gives mis- = wrongly.
- So TB4 avoids the columns "not", "can be", "wrongly" and "before". TB3 keeps "before" unstated.
- The p3 passage contains none of the TB4 or TB3 Part B words.

Facts: none beyond word meanings. Pre- = before, un- = not, mis- = wrongly, re- = again, -less = without, -ful = full of and -ly = in a ___ way are all as the lesson teaches them. Rupt = break, and erupt = break out, from Latin e- + rumpere. 375 degrees is a normal muffin oven setting. Nothing needed an external check.

---

## 3. GUM M row: Form and use irregular plural nouns (L-GUM3.js), key `3.L.GC.1:M:form-and-use-irregular-plural-nouns`

The official row: "Form and use irregular plural nouns." It is Grade 3 M (standards PDF p. 16).

**Form A (7 points, 5 items; DOK 1, 2, 1, 1, 2)**

| Item | Type | Points | DOK | What it tests |
|---|---|---|---|---|
| T1 | mc | 1 | 1 | women |
| T2 | ms | 2 | 2 | moose and sheep correct; mouses, childrens and gooses wrong |
| T3 | dropdown | 1 | 1 | feet |
| T4 | match | 2 | 1 | person, ox, wolf and knife matched to their plurals |
| T5 | hottext | 1 | 2 | tooths |

**Form B (7 points, 5 items; DOK 1, 2, 1, 2, 2)**

| Item | Type | Points | DOK | What it tests |
|---|---|---|---|---|
| TB1 | mc | 1 | 1 | "A family of ____ swam across the pond..." Answer: **geese** |
| TB2 | ms | 2 | 2 | **people** and **knives** correct; **wolfs**, **deers** and **mices** wrong |
| TB3 | dropdown | 1 | 1 | "Two {0} stood in the lake and ate water plants." The options are mooses, **moose** and meese. Meese is the over-generalization from goose and geese. |
| TB4 | match | 2 | 2 | Correct / Needs a fix: children ✓, foots ✗, oxen ✓, womens ✗ |
| TB5 | hottext | 1 | 2 | the error is **sheeps**; the other choices are regular plurals: buses, bunches and babies |

How form B differs:
- All sentences are new. TB4 is a judgment task in sentences, not form A's noun-to-plural table, so it uses the nouns rather than only forming them.
- Each special noun is tested in only one form B item, so no item shows another item's answer:
  - geese: TB1
  - people and knives: TB2
  - moose: TB3
  - children, feet, oxen and women: TB4
  - sheep: TB5
- I avoided reusing practice items. Two of the earlier designs were dropped because they mirrored them: a "changes its spelling / stays the same" table (practice P3), and "two mans fixed" (practice P4).

**DOK note:** form B has three DOK 2 items and form A has two. This is because TB4 asks the child to judge sentences (DOK 2), where form A's T4 only matches forms (DOK 1). I kept TB4 because a pure noun-to-plural table would have been a name-swap of form A's T4. A reviewer may want to weigh this small difficulty difference.

Facts checked: moose wade into lakes and eat aquatic plants. Source: Boulder County Open Space natural history sheet, https://bouldercountyopenspace.org/naturalhistory/pdf/moose.pdf ("wade into a lake and eat plants off the bottom"). Checked 2026-10-20.

---

## 4. GUM M row: Form and use the past tense of irregular verbs (L-GUM3.js), key `3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs`

The official row: "Form and use the past tense of irregular verbs." It is Grade 3 M (standards PDF p. 16).

**Form A (7 points, 5 items; DOK 1, 2, 1, 2, 2)**

| Item | Type | Points | DOK | What it tests |
|---|---|---|---|---|
| T1 | mc | 1 | 1 | blew |
| T2 | ms | 2 | 2 | built and felt correct |
| T3 | dropdown | 1 | 1 | won |
| T4 | hottext | 2 | 2 | maked and digged are the errors |
| T5 | mc | 1 | 2 | the fix "breaked → broke" |

**Form B (7 points, 5 items; DOK 1, 2, 1, 2, 2: the same mix)**

| Item | Type | Points | DOK | What it tests |
|---|---|---|---|---|
| TB1 | mc | 1 | 1 | **fell**; the distractors are falled, fallen (needs a helper) and falls |
| TB2 | ms | 2 | 2 | **told** and **stood** correct; holded, shaked and losed wrong |
| TB3 | dropdown | 1 | 1 | **wore**; the options are weared, wore, wear and worn |
| TB4 | hottext | 2 | 2 | the errors are **ringed** and **sended**; chose, forgot and spun are correct |
| TB5 | mc | 1 | 2 | The sentence has two irregular verbs (took, which is right, and getted, which is wrong). The child must find which one is wrong and choose **got**, not gotten, taked or taken. This adds a "locate the error" step that form A's T5 does not have. |

How form B differs: every verb is new to this lesson.
- Practice uses drove, wrote, ate, flew, slept, sat, found, grew, bought, drew, sang, froze, rode and saw.
- Watch Me uses threw and brought.
- Teach uses ran, ate, saw, caught, swam and sang.
- Form A uses blew, built, felt, taught, drank, went, won, hid, made, swam, dug, gave and broke.
- Each verb appears in only one form B item, so no item shows another item's answer.

Grammar notes:
- "worn", "fallen", "gotten" and "taken" are past participles. Each distractor is marked as needing a helper ("has"), which is consistent with the lesson's own wording ("Seen needs a helper word like has").
- "gotten" is standard American English after has or had, so it is wrong here only because there is no helper.

Facts: none needed.

---

## What remains
- Independent review of all four forms (two reviews, SPEC manifest rule). I have not marked any of them reviewed.
- The passage pane labels the new passages "Passage 3", because form B adds them to the lesson's single passages list (SPEC §8b design). This is the same as the L-GC2 example.
- `verification/guard.py` was not run. Its full run takes about 20 minutes and belongs to the lead's release gate.

# Clue words upgrade (SPEC §8b `clues` and `coach`)

Source: the parent's text-structure guide (pages 1-12). Clue words are copied exactly from the guide. Coaching notes are rewritten in general terms: no child's name, scores or reading level, and no "Day N" or packet references. Every note says "your child".

Checker: `node verification/check-content.js --all` gives PASS, 0 failures and the same 9 warnings as before. None of the warnings are new and none are in the items changed here.

## Task 1: Story Elements, 3.T.T.1.b (js/data/lessons/T-T1.js)

- Added `codes: ["3.T.T.1.b", "3.T.SS.1.a"]`.
- Added `clues`:
  - Words: one day, but, then, so, finally, in the end.
  - Ask: "Who is the story about, and where are they?"
  - Draw: a six-box story map (Character, Setting, Problem, Events, Solution, Lesson).
- Added `coach`, adapted from the guide:
  - mixup: naming the first event as the problem.
  - strong and notyet: use the Leo kite example from Teach in place of the packet story.
  - ido: stop at "but".
  - wedo: "Did that try work?" and point to the clue word.
  - youdo: the child fills in the story map.
  - everyday: talk about movies, TV and sports.
- Teach points:
  - Removed the old point 5 ("the parts work together"). The Somebody-Wanted-But-So-Then point now covers it.
  - Added a clue-word point: one day starts the action, but shows the problem, then and so show the tries, and finally and in the end lead to the solution.
  - Added the Somebody-Wanted-But-So-Then point, with what each word means.
  - There are now 6 points. The brief suggests 3-5, so this is one over, but the task asked for both new points.
- Teach example: the Leo kite lines now include the words but, then and in the end. The note points out these clue words. The facts of the story did not change.
- Learn 1 (Maya and the spelling bee): rewritten as a Somebody-Wanted-But-So-Then walk-through. The story now uses but, so, then and in the end. There are 4 steps (Somebody and Wanted, But, So, Then), and the answer is a one-sentence summary. Learn 2 (the setting) is unchanged.
- Practice now has exactly 6 items. Added SK-TT1b-P6, an mc item worth 1 point at DOK 2. It asks what the clue word Then tells the reader in "Then she had an idea." (paragraph 4). The key is "Jada is about to try a way to fix the problem."
  - It is placed third, so the order is P1 setting (DOK 1), P2 problem, P6 Then, P3 solution (hottext), P4 order and P5 match.
  - Guided practice is P1, P2 and P6. On-your-own practice is P3, P4 and P5.
  - The clue does not name Jada or use the key's words, and the checker reports no giveaway.
- Test fix (cross-reveal): in SK-TT1b-T5, the Solution row "Omar finds the book under the swing's cushion." gave away the porch-swing answer to T3 (Parts A and B). It is now "Omar finds the book, and it is not ruined." The `why` was updated to match. All keys are unchanged.
- No passages changed. All practice and test keys are unchanged.

## Task 2: clues and coach added to other lessons (no item, key or passage changes)

### 3.T.T.2.b Sequence plus cause and effect (T-T2.js)
- `clues.words`: first, next, then, after that, later, finally, because, so, since, as a result, that is why, this caused.
- `clues.ask`: "What happened first? What happened because of it?"
- `clues.draw`: a row of boxes with arrows for steps, and cause-and-effect boxes for causes. Add more boxes for a chain.
- `coach`: combines the guide's Sequence and Cause & Effect pages.
  - mixup: flipping the cause and the effect.
  - strong: uses the seed steps and the icehouse example from Learn.
  - ido: drop a ball, and make a sandwich out of order.
  - wedo and youdo: find the time and cause words, tell how to do a task, and fill in a cause-and-effect chain.
  - everyday: talk through the steps of a routine and ask "why" questions.
- Teach points: point 1 now adds "later". Point 3 now adds "that is why" and "this caused".

### 3.T.T.2.a Main idea and key details (T-T2.js)
- `clues.words`: for example, such as, also, in addition, has, looks like. Ask: "What is this mostly about?" Draw: a web.
- `coach` comes from the Description page. The examples use the camel from Teach instead of the guide's owl.
- Teach point 3 now says these clue words often point to a detail.

### 3.T.T.1.d Compare two stories (T-T1.js)
- `clues.words`: both, alike, same, but, however, unlike, different, while.
- Ask: "How are they the same? How are they different?"
- Draw: three columns (Story 1 only, Both, Story 2 only), or a Venn diagram.
- `coach` comes from the Compare & Contrast page.
  - mixup: what "but" means here.
  - strong: uses the Kai and Greta example from Learn.
  - ido: the fork and the spoon.
- Teach point 1 now lists which clue words show "alike" and which show "different".

### 3.T.T.2.c Information from two texts (T-T2.js)
- `clues`: the same compare-and-contrast words and ask as 1.d. The draw uses Text 1 and Text 2 for the columns.
- `coach` is adapted for two texts.
  - mixup: using facts from only one text, or losing track of which text a fact came from.
  - strong: uses the beaver example from Teach.
- Teach points 2 and 3 now name the "alike" and "different" clue words.

### 3.T.SS.1.a How a text is put together (T-SS.js)
- `clues.words`: all 32 distinct clue words from the six structures, as one flat list. The engine shows this list in the clue-word box.
- `clues.groups`: the six structures with their exact word lists. It is now in SPEC §8b. Because it is present, the engine does not highlight clue words in this lesson's passages.
- Ask: "Which kind of text is this, and what clue word told you?"
- Draw: choose the organizer that fits the structure.
- `coach` comes from the guide's "How to teach any of them" page and the "tricky words" note on the cheat sheet.
- Teach points:
  - The sequence, cause and effect, compare, and problem and solution points now use the guide's exact words. Problem and solution is now "problem, tried, but, decided, solved, finally". The phrase "a trouble and how it gets fixed" stays, so practice item SK-TSS1a match row "the trouble was, to fix it" still fits.
  - Added a point on Description words and story words. There are now 6 points.

### 3.T.T.1.c Characters and the lesson (T-T1.js)
- `clues.words`: so, but, in the end.
- Ask: "Why did the character do that, and what did they learn in the end?"
- Draw: a story map, filling in the Lesson box last.
- No `coach` was added. The guide does not cover traits or motive.
- Teach point 3 (motive) now says that "so" links a reason to a choice and "but" signals a change. Point 4 (lesson) now says that "in the end" leads you to the lesson. This matches the existing P2 `why`, which already explains the word But.

## For the lead to check
- Resolved: the engine (js/engine/player.js) turns highlighting off in Test mode, and off for any lesson with `clues.groups`, so 3.T.SS.1.a passages are not marked.
- A distractor in SK-TT1b-T4, "a porch swing on a rainy Tuesday", still mentions the porch swing. It is a fair wrong setting, so I left it, but it does point at the sentence that is the answer to T3 Part B.

## Independent verification (2026-10-20)
- SK-TT1b-P6: one defensible answer; grade-3 wording. The `why` named the wire, which is the answer to P3 (the next set). It now says "After it, Jada acts on her idea."
- SK-TT1b-T5: the Solution row "Omar finds the book, and it is not ruined." ruled out T2 choice C ("Rain on the porch has ruined his library book"). It is now "Omar finds the book." Key and `why` unchanged.
- Known overlap, left as is: T5's Problem row ("The book is not anywhere.") restates the T2 key; T2 choice C and T4 choice C mention the porch, near the T3 Part B key. Each is a weak cue.
- Privacy grep of js/, docs/, index.html, css/, verification/ and README.md: no child's name, score, child-tied Lexile, packet reference or family detail. Lexile values are passage estimates only.
- No 7-word run in the edited lessons matches GaDOE text in standards.js or alds.js.

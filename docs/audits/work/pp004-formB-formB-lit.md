# PP-004 form B log: agent "formB-lit"

- **Worktree:** /home/claude/pp-fix. No git commands were run.
- **Port:** 8492 (`node verification/serve.js . 8492`; stopped by its PID at the end).
- **Briefs:** FORMB-BRIEF.md, PP004-BRIEF.md, PP003-BRIEF.md, FIX-BRIEF.md. The format is docs/SPEC.md §8b `testB`, and the model is 3.L.GC.2.b in L-GC2.js.
- **Files changed:** only the four lesson blocks below. Each block gained one or two new passages and a `testB` list.
  - js/data/lessons/T-T1.js: 3.T.T.1.a and 3.T.T.1.c
  - js/data/lessons/T-SS.js: 3.T.SS.2.a
  - js/data/lessons/T-T34.js: 3.T.T.4.a
  - No other block was touched, and no form A, practice, teach or learn content was changed.
- **Status:** NOT reviewed. These forms need independent review. I did not mark them reviewed.

## Gates (run from /home/claude/pp-fix after the last edit)
- `node verification/check-content.js --all`: PASS, 0 failures. My items add no warnings. The 6 remaining warnings all belong to other items.
  - One warning I caused along the way was "key is much longer than every other choice" on SK-TT4a-TB3. I fixed it by shortening the key.
- `python3 verification/readability.py`:
  - 3.T.T.1.a p3: 167 words, FK about 2.2
  - 3.T.T.1.c p3: 260 words, FK about 3.6
  - 3.T.SS.2.a p3: 163 words, FK about 2.2
  - The 3.T.T.4.a poems are skipped by the script, as all poems are.
  - Nothing site-wide is flagged above grade 4.5.
- `node verification/check-writing.js`: 0 failures, 0 warnings.

## Browser check
- **Script:** scratchpad/formB-lit/run.py.
- **Method:** I ran `PP_PLAYER.start('SK:<key>:tB','test')` at 390x844 (mobile, touch) and at 1366x900.
  - Hot-text items were answered by clicking the real `.hot-option` buttons.
  - The other item types were answered by setting the response from the key, the same method guard.py uses.
- **Score:** full marks every time, recorded with `form: "B"`, `ok: true` and the result "Passed the skill check".
  - 3.T.T.1.a: 8/8
  - 3.T.T.1.c: 7/7
  - 3.T.SS.2.a: 6/6
  - 3.T.T.4.a: 7/7
- **Hot-text targets:** every target ref resolved to the intended sentence or line. I printed and checked the text of each.
- **What I looked at:** screenshots of every item and every results screen, and the question tab at 390 for the two match items.
  - Page errors: none.
  - Horizontal scroll: none at 390 (scrollWidth was 390).
  - Titles read "Test (form B)".
  - The poem keeps its stanza breaks and line numbers.
  - The letter's paragraphs are numbered 1-7, which matches the "paragraphs 3, 4 and 5" wording in SK-SS2a-TB2.

---

## 1. 3.T.T.1.a: Story clues (dialogue, description, actions)
- **Code:** 3.T.T.1.a. "Explain how narrative techniques are used to present ideas, design texts, and convey information about characters, setting, and plot." The wording comes from js/data/standards.js `official`.
- **Form A:** 6 items, **8 points**, all on p2 "The Tallest Slide".
  - T1: mc, 1 point, DOK 2. What the setting description shows.
  - T2: mc, 1 point, DOK 2. What an action shows.
  - T3: ebsr, 2 points, DOK 3. How a feeling changes, plus evidence.
  - T4: hottext, 1 point, DOK 2. Pick the description sentence.
  - T5: mc, 1 point, DOK 3. Why the author includes the dialogue.
  - T6: match, 2 points, DOK 2. Classify each detail as dialogue, action or description.
- **Form B:** 6 items, **8 points**, all on the new passage p3 "The Open Gate" (an original story about a girl and her grandfather's goats getting out).
  - TB1: mc, 1 point, DOK 2. When does the story take place? The child infers the time setting from the description (fog, a yawn) and the dialogue ("never go far from breakfast").
  - TB2: mc, 1 point, DOK 2. What does the action of shaking the feed bucket show about Pop-Pop?
  - TB3: ebsr, 2 points, DOK 3. How do Imani's words move the plot forward? Part B asks which sentence shows the result.
  - TB4: hottext, 1 point, DOK 2. Which description shows how the setting has changed by the end?
  - TB5: mc, 1 point, DOK 3. How does the dialogue in paragraph 6 help end the story?
  - TB6: match, 2 points, DOK 2. What does each detail mostly help you understand: a character, the setting or an event in the plot?
- **DOK mix:** 2, 2, 3, 2, 3, 2. This is identical to form A.
- **How form B differs from form A:**
  - The passage is new: new characters, a different setting and a different conflict.
  - Form A's EBSR asks about a change in feeling. Form B's EBSR asks how dialogue drives the plot. The standard names plot, and form A barely tested it.
  - Form A's match sorts details by *type* (dialogue, action, description), and so does practice P4. Form B's match sorts them by *what they convey* (character, setting or plot), which follows the wording of the standard.
  - Form B's hot-text asks about a change in the setting rather than one vivid image.
  - The time-of-day item has no counterpart in form A or practice.
- **Practice and Watch Me:** practice uses p1, a storm and Abuela. The Learn items cover a lake, groceries and the garage. Form B repeats none of their passages or stems.
- **Giveaways checked:**
  - No form B stem or choice gives away another item's answer.
  - TB4's stem was reworded to "how the setting has changed", so it no longer hints at TB5's "trouble is over".
  - TB6 does not use the TB3 evidence sentence.
- **Facts:** none needed checking. These are everyday farm details (goats come to a rattled feed bucket, goat bells, morning fog burning off).

## 2. 3.T.T.1.c: Characters and the story's lesson
- **Code:** 3.T.T.1.c. "Describe characters' traits, motivations, actions, thoughts, and feelings and explain their connection to the central message, lesson, or moral of the story."
- **Form A:** 5 items, **7 points**, all on p2 "The Bridge Contest".
  - T1: mc, 1 point, DOK 2. Trait.
  - T2: mc, 1 point, DOK 2. Feeling.
  - T3: mc, 1 point, DOK 2. Motive.
  - T4: ebsr, 2 points, DOK 3. Central message plus evidence.
  - T5: match, 2 points, DOK 2. Before or after the change.
- **Form B:** 5 items, **7 points**, all on the new passage p3 "Ji-ho's Mandu". Ji-ho rushes making Korean dumplings with his grandmother, wants to quit, sees a photo of her own lumpy first try and keeps practicing.
  - TB1: mc, 1 point, DOK 2. Motive: why he rushes.
  - TB2: mc, 1 point, DOK 2. What his words and actions show about his feelings.
  - TB3: hottext, 1 point, DOK 2. The thought that leads to his choice.
  - TB4: ebsr, 2 points, DOK 3. The lesson he learns, plus the sentence that shows he learned it.
  - TB5: ms (choose two), 2 points, DOK 2. Halmoni's traits: caring and wise.
- **DOK mix:** 2, 2, 2, 3, 2. This is identical to form A.
- **How form B differs:**
  - The theme is new. Form A's is listening to others and practice's is honesty. Form B's is that patience and practice make you better.
  - Form B tests the "thoughts" part of the standard directly in TB3. Form A has no thought item.
  - The trait item is about a secondary character, Halmoni, and is a choose-two. Form A's trait item is a one-word mc about the main character.
  - The before/after match template is not reused.
  - Practice P4 is also a choose-two trait item, but it is about Marisol on a different passage, so nothing repeats.
- **Giveaways checked:**
  - TB5's choices (caring, wise, bossy, impatient, forgetful) do not hint at TB4's lesson.
  - TB4's Part B choices exclude the "slowly, one fold at a time" sentence and the photo sentence, so only one choice can be defended: the lumpy-and-neat ending.
- **Facts checked (2026-10-20):**
  - Mandu are Korean filled dumplings, and pork-and-vegetable fillings are common: https://en.wikipedia.org/wiki/Mandu_(food)
  - "Halmoni" is used for grandmother. The romanization "halmeoni" is also common, and "Halmoni Mandu" is a published family recipe title: https://www.taketheleadwomen.com/stories/halmoni-means-grandmother and https://www.foodnetwork.com/recipes/halmoni-mandu-19586559.amp
  - These come from search results. Only the Wikipedia page was fetched.

## 3. 3.T.SS.2.a: Similes, metaphors and idioms
- **Code:** 3.T.SS.2.a. "Identify and describe the use of figurative language, such as similes, metaphors, and idioms in a wide variety of texts."
- **Form A:** 5 items, **6 points**, all on p2 "Moving Day".
  - T1: mc, 1 point, DOK 2. Meaning of an idiom.
  - T2: hottext, 1 point, DOK 2. Find the simile.
  - T3: ebsr, 2 points, DOK 3. Meaning of an idiom plus evidence.
  - T4: mc, 1 point, DOK 2. Name the type of a metaphor.
  - T5: mc, 1 point, DOK 2. What a simile helps you picture.
- **Form B:** 5 items, **6 points**, all on the new passage p3 "A Letter from Camp". It is a friendly letter, so form B adds a different kind of text, which fits "a wide variety of texts". Form A and practice are both stories.
  - TB1: mc, 1 point, DOK 2. Meaning of the idiom "broke the ice" from context.
  - TB2: hottext, 1 point, DOK 2. Find the *idiom* among sentences in paragraphs 3-5. It is "hit the hay". The other idiom, in paragraph 2, is not a target.
  - TB3: ebsr, 2 points, DOK 3. Meaning of the *metaphor* "Jo is a walking map", plus the context sentence.
  - TB4: mc, 1 point, DOK 2. Which sentence is a simile? It includes the trap "I like the canoes best", the non-comparing *like* from teach point 5.
  - TB5: mc, 1 point, DOK 2. What the metaphor "a dark blanket sprinkled with glitter" helps you picture.
- **DOK mix:** 2, 2, 3, 2, 2. This is identical to form A.
- **How form B differs:**
  - Form A's hot-text finds a simile and practice's finds a metaphor. Form B's finds an idiom.
  - Form A's EBSR is an idiom. Form B's EBSR is a metaphor.
  - Form A's T4 names the type of a given sentence. Form B's TB4 runs the other way: given the type, find the sentence. It also includes the "like = enjoy" trap.
  - None of the figures of speech appear in form A, practice, teach, learn or the parent note. In particular, "a piece of cake" is in the parent note and is not used.
- **Giveaways checked:**
  - TB2's targets leave out the simile sentence that answers TB4 and the walking-map sentence that TB3 asks about.
  - The TB5 clue avoids words that appear only in the key. The checker found no "clue shares" warning.
- **Facts checked (2026-10-20):**
  - "Hit the hay" means to go to bed: https://www.phrases.org.uk/meanings/182700.html
  - "Break the ice" means to ease the awkwardness of a first meeting by starting a conversation: https://grammarist.com/idiom/break-the-ice/

## 4. 3.T.T.4.a: How poems are built
- **Code:** 3.T.T.4.a. "Discuss and explain techniques used to present and design poetry, including rhyme scheme."
- **Form A:** 5 items, **7 points**, all on p2 "My Kite", which rhymes AABB.
  - T1: dropdown, 2 points, DOK 1. The rhyme pattern.
  - T2: mc, 1 point, DOK 1. Stanzas and lines.
  - T3: mc, 1 point, DOK 2. Why the poet repeats words.
  - T4: match, 2 points, DOK 2. Each stanza's job.
  - T5: hottext, 1 point, DOK 1. The line that rhymes.
- **Form B:** 5 items, **7 points**, on two new poems.
  - p3 "Firefly Night" rhymes **ABAB**. Form A's poem is AABB and the practice poem is ABCB. It has the refrain "blink, blink, blink".
  - p4 "Snail Climb" is one ABCB stanza.
  - TB1: ms (choose two), 2 points, DOK 1. The true statements about the rhyme pattern: lines 1 and 3 rhyme, and lines 2 and 4 rhyme. The distractors are the AABB pairs and "no rhyme".
  - TB2: hottext, 1 point, DOK 1. Choose the first line of stanza 2. This tests stanza structure. One distractor is stanza 2's line 3, which also starts with "blink, blink, blink".
  - TB3: mc, 1 point, DOK 2. Why the poet repeats "blink, blink, blink". One distractor is "the speaker's eyes are getting sleepy", a plausible misreading of *blink*.
  - TB4: match, 2 points, DOK 2. What happens in each stanza.
  - TB5: mc, 1 point, DOK 1. On p4, which word rhymes with "be"?
- **DOK mix:** 1, 1, 2, 2, 1. This is identical to form A.
- **Why the second poem:** any rhyme-pair question on p3 would give away TB1's scheme answer. Form A has exactly that overlap between its T1 and T5. So the single-rhyme item uses a separate four-line poem with a different pattern, which cannot help with TB1.
- **How form B differs:**
  - The poems are new and the rhyme scheme is new.
  - Form B uses a choose-two item where form A has a dropdown.
  - The structure item asks where a stanza begins, not "3 stanzas of 4 lines".
  - The stanza match is the same kind of task as form A T4 and practice P4, which is a core expectation. Its stem, its rows and its poem are new.
- **Giveaways checked:**
  - TB4's columns (Stanza 1/2/3) do not tell which line begins stanza 2.
  - TB3's stem does not single out a line, because two lines in stanza 2 start with "blink".
- **Facts checked (2026-10-20):**
  - Fireflies are a sign of summer evenings across Georgia and flash their lights: https://www.gpb.org/news/2026/06/02/natures-tiny-lanterns
  - A land snail's eyes are at the top of its taller stalks, which supports "looked right down at me": https://optimax.co.uk/blog/snails-eyes-what-vision/
  - I did not write "took all day" for the snail. That would be a speed claim, so I used "inched and inched".

## Limitations and notes for the reviewer
- At 260 words, Ji-ho's Mandu is longer than form A's p2 (189 words). The readability is similar (FK 3.6 against 2.0-3.2). The reviewer may want to trim paragraph 2.
- The browser check proves that the keys score in full and that the hot-text refs land on the right sentences. It cannot judge whether the distractors are fair; that needs human review.
- The "character / setting / plot" match (SK-TT1a-TB6) is my judgment of what each detail "mostly" conveys. Biting her lip is a feeling, which counts as character. The goats trotting back is an event. Please confirm that no row reads as two categories.
- I did not run the full guard.py (about 20 minutes). Its section 14 uses only 3.L.GC.2.b.

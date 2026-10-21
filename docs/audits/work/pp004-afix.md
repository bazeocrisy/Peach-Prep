# PP-004 afix: fixes for review A's SHOULD list

- **Agent:** afix. **Date:** 2026-10-20. **Worktree:** /home/claude/pp-fix. **Port:** 8501 (server stopped by PID at the end).
- **Input:** docs/audits/work/pp004-review-A.md §5 (SHOULD 1-9) and the PARTIAL rows in docs/audits/PP-004-FINAL-COVERAGE-MATRIX.csv.
- **No git commands.** Official wording was copied from `official` in js/data/standards.js, which review A checked against the PDF (0 mismatches). I changed no source reference.
- **Files changed:**
  - js/skills.js
  - verification/check-content.js
  - verification/guard.py
  - docs/SPEC.md
  - js/data/lessons/L-V3.js, L-GUM1.js, L-GUM2.js, L-GC2.js, T-T34.js, T-C.js
  - js/data/habits.js
  - new: assets/figures/v3d-app-spring.svg, v3d-app-bark.svg, v3d-app-bright.svg
- **reviewfix4 overlap:** in L-GC2.js and T-C.js I read the file right before each edit and touched only SK-GC2d-T3 (form A), SK-TC2a-T1 (form A, now T6) and SK-TC1b-P6. No `testB` block was touched.

## 1. 3.L.V.3.d: digital dictionaries and phrases (review A SHOULD 1, Medium)

- **Deficiency.** The lesson was print-only: guide words, ABC order, numbered entries and glossary boxes. "Digital" appeared only as "in a book or online" in teach point 5. No phrase was ever looked up.
- **Official requirement.** 3.L.V.3.d, p. 23: "Use glossaries or beginning dictionaries, both print and digital, to check spelling and to determine or clarify the precise meaning of words and phrases."
  - Note: the official wording does not name a thesaurus. The Synonyms tab appears in the figures and in a teach point because the lead asked for it, but no item scores it.
- **Changes (js/data/lessons/L-V3.js, lesson 3.L.V.3.d):**
  - **teach.big** now says "in a book or on a screen" and "a word or phrase".
  - **teach.points**
    - Old points 3 and 4 (entry; choosing a meaning) are merged into one point.
    - Point 4 (glossary) keeps "check how to spell a word".
    - New point 5 (digital dictionary): type the word in a search box instead of using guide words; "Did you mean ...?" for a misspelling; a Hear it button; a Synonyms tab.
    - New point 6 (phrases): look up the main word, then find the phrase in its entry. A phrase can mean something different from its words one by one.
    - The lesson now has 6 points. Five other lessons have 6 and three have 7.
  - **teach.words** adds "digital dictionary" and "phrase".
  - **teach.examples** keeps `crane` and adds a second example: "A phrase in an entry" (**look after** inside the entry for look).
  - **Watch Me 3** was rebuilt as a digital worked example with the figure `v3d-app-spring.svg`. Ravi types spring in the search box, taps Hear it, checks the part of speech, reads all three meanings and picks meaning 3. The key is unchanged. Watch Me stays at 3 examples, the checker's maximum.
  - **parent** adds trying a free online children's dictionary.
  - **Practice** grows from 5 to 7 items. Together = P1, P2, P3, P6. Try = P4, P5, P7.
    - **SK-V3d-P6** (new, Together, mc, DOK 2): a phrase in a dictionary entry. The entry for give lists **give up** "to stop trying". The distractors are the meanings of give on its own and a literal reading of "up". Its phrase differs from the teach example (look after) and the check item (run out of).
    - **SK-V3d-P7** (new, Try, two-slot dropdown, 2 points, DOK 2): a digital dictionary, figure `v3d-app-bark.svg`. Nia typed *barck*. The child chooses the spelling the app suggests (bark) and the meaning that fits a woodpecker pecking an oak (the hard outer covering of a tree trunk). Slot 2 uses meaning text because the checker requires 3+ options; the third option is not on the screen, so it is clearly wrong from the figure.
  - **Check (form A; this lesson has no form B).** It was 5 items and 7 points; it is now 6 items and 8 points, with a pass mark of 7. Each form-A attempt's stored best is compared against bestMax (RE-3), so an old best is shown as "on an earlier version of this check".
    - **Removed SK-V3d-T5**, the weakest item. It was a DOK 1 dropdown on spelling *finished*, which a child could answer from spelling knowledge without using a dictionary at all, so it did not measure dictionary use.
    - **Added SK-V3d-T6** (mc, 1 point, DOK 2, figure `v3d-app-bright.svg`). This is review A's suggested "Did you mean" digital spelling item, plus clarifying meaning. Mateo typed *brite*. The child chooses "bright, with meaning 2". The distractors cross the wrong spelling with the wrong meaning.
    - **Added SK-V3d-T7** (mc, 1 point, DOK 2): a phrase. The entry for run lists **run out of**, and the sentence uses the past tense "ran out of", so the child must look under the base word. The distractors are the meanings of run on its own and a literal reading of "out".
    - T1-T4 are unchanged, so print coverage (guide words, glossary, ABC order, multiple meanings) remains.
- **Figures (SPEC §5e).** All three are original line-art app screens drawn by afix's generator script (scratchpad `afix/mkfig.py`).
  - Viewbox 300 wide; text 21 units, which is 15.4px at 220px and 14.0px+ at 198px.
  - Each shows: a search box, an optional "Did you mean" line with the suggestion underlined, the headword, a Hear it button with a speaker icon, a Meanings tab (thick border, open) and a Synonyms tab, the part of speech in italics, and numbered meanings.
  - Meaning is never carried by color alone: the open tab has a thicker border and bold text.
  - Alt text names every label and value an item depends on. It never says which choice is right, and it contains no "there is no ..." wording (guard 13.3).
- **Verification.**
  - check-content: 0 failures. My warnings for long prompts were resolved by moving the reading text into `stem`.
  - Cross-reveal check: no clue or why in practice or test names T6's or T7's answer. P6, the teach example and T7 use three different phrases. P7 and T6 use different words.
  - Rendered at 390 and 1366: teach, Watch Me, P6, P7, T6 and T7, with no sideways scroll (screenshots in scratchpad `afix/`).
- **What remains.**
  - No second independent review of P6, P7, T6 or T7 yet; SPEC requires two reviews.
  - The thesaurus is not scored, because the official text does not name one.

## 2. GUM "when speaking" rows: practice-only speaking card (review A SHOULD 2, Low)

- **Deficiency.** These three official R rows say "when speaking", but each lesson had only a one-line parent tip, with no grown-up routine or check-off.
- **Official requirement (GUM chart, grade 3 R, p. 15 per standards.js):**
  - "Use nouns and verbs to share complete thoughts when speaking"
  - "Form and use singular and plural nouns when speaking"
  - "Use interrogatives to ask questions when speaking"
- **Mechanism problem found.**
  - A lesson's `check` block renders only when the lesson has NO test set: `renderTest` reaches `renderCheck` only in its `else` branch.
  - The only activity kinds are fluency and trace (a cursive sheet).
  - So a `check` added to these tested lessons would have been inert.
  - I asked the lead. The lead chose option (A): a small, generic renderer with these conditions.
- **Changes.**
  - **js/skills.js:** new `hasSpeak(L)` and `renderSpeak(host, L)`.
    - A lesson with `speak: { intro, items }` AND a test set shows a "Say it out loud (with a grown-up)" card. It appears on Try It Yourself, or on Practice when the lesson has no Try step.
    - The card shows the honest label "Practice with a grown-up. This is not part of the skill check.", then real checkboxes with `<label for>` (keyboard accessible).
    - Ticks are stored ONLY in a new field: `prog[key].speakChecks = { ticks: [bool...], d: "YYYY-MM-DD" }`.
    - It never sets `mastered`, `passBy`, `taught`, `practiced` or anything else, and `status()`, rings and counts never read it. Rendering writes nothing.
    - **pp.progress.v1 meaning is unchanged:** one new field only.
  - **verification/check-content.js:** fails `speak` without an intro and items, or on a lesson with no test.
  - **js/data/lessons/L-GUM1.js:** `speak` blocks added. In each, the grown-up asks, the child answers or asks out loud, and the grown-up ticks. No voice is recorded.
    - **GUM1-1** (`3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in`), 3 lines:
      - 3+ answers in complete spoken sentences
      - re-says a short answer as a whole sentence without help
      - gives a spoken command and says its "who" is you
    - **GUM1-2** (`...form-and-use-singular-and-plural-nouns-in-speech`), 3 lines:
      - the one form 3+ times while naming objects
      - the plural form 3+ times, with the -s/-es sound
      - says a corrected form after it is repeated back. The intro limits the activity to regular plurals; irregular plurals have their own M row.
    - **GUM1-3** (`...use-interrogatives-to-ask-questions-in-speech`), 3 lines:
      - 5+ spoken questions that fit the answers
      - 4+ different question words
      - whole questions, not one word
  - The existing check-off lists (Foundations `check`, `write.checklist`) were not touched.
  - **docs/SPEC.md §8b:** a new `speak` bullet documents all of the above.
  - **verification/guard.py:** new section 15.
    - 15.1: the card renders on GUM1-1 Try (not Practice) with 3 labelled boxes and the label, and rendering writes nothing.
    - 15.2: a keyboard tick stores only `speakChecks`, status stays new, and the tick survives a reload.
    - 15.3: on a passed record, ticking all lines leaves every other field and status/displayState/passKind unchanged.
    - 15.4: lessons without `speak` show no card on any step.
- **Verification.** Section 15 run alone: 5/5 pass. The full guard: see §6.
- **What remains.** This is a grown-up observation, not evidence stored as mastery. That is deliberate: the site's "passed" meaning stays the scored written check.

## 3. Practices habit cards (review A SHOULD 9; matrix PARTIAL rows)

File: js/data/habits.js. Text was appended to `looks` and `tryit` only. Titles and existing lines were kept.

- **K-12.P.EICC.1.b** (p. 42: "Discuss or write about personal and academic reading and writing preferences, referring to specific techniques, topics, modes, and genres that resonate most.")
  - `looks` adds techniques ("what they like about how a piece is written") and modes: reading on paper / listening / watching, and writing stories, facts or opinions.
  - `tryit` adds "I like how the author ___" and "I like reading, listening or watching best because ___".
- **K-12.P.EICC.1.e** (p. 42: "... listening as others share their writing, and offering and responding to feedback.")
  - `looks` adds listening when others share their writing, and using feedback to change their own writing.
  - `tryit` adds two lines: the grown-up or a sibling shares writing while the child listens and gives a star and a wish; then the child makes one change after feedback and explains it.
- **K-12.P.EICC.3.e** (p. 44: "Make and track predictions about the events and information likely to come next.")
  - `looks` adds information predictions in fact books (headings, pictures, table of contents).
  - `tryit` adds a heading prediction ("What Bats Eat") that is checked off or changed.
- **K-12.P.EICC.3.f** (p. 44: "Make, track, and support inferences about different levels of meaning within the text.")
  - `looks` adds keeping track of an inference and changing it.
  - `tryit` adds a sticky-note inference that gets a check mark or is crossed out and revised as new clues appear.
- **What remains.** These are cards, not items, so "embedded" still rests on lesson items. Review A's Low notes on AC.1.a, AC.2.a and EICC.4.e cards were not in my assignment and are not done.

## 4. Other Low SHOULDs

- **3.T.T.3.c** (p. 34: "... introduce the topic, state an opinion ..., supply reasons to support the opinion with linking words ... and provide a concluding statement or section.") File: T-T34.js.
  - **Removed SK-TT3c-T3** ("add a sentence to the class-time paragraph"). It was an evidence/elaboration item that duplicated what T5 (evidence, 2 points) already checks.
  - **Added SK-TT3c-T6** (mc, 1 point, DOK 2, passage p2): choose the best NEW reason for Malik's water-bottle opinion, modelled on Try P6. The distractors are a fact that does not explain why, a restated opinion, and an off-topic detail.
  - The points stay at 7.
  - **Not done:** "introduce the topic" is still checked only indirectly (T1). Adding it would need a further replacement, and the check is already 5 items. It is practised in P5 (order) and taught in Watch Me 1.
- **3.T.T.3.a** (p. 34: "Describe and discuss the techniques used to present and design opinion texts, including author's opinion statement, supporting reasons, and evidence."). File: T-T34.js.
  - New teach point 5 on design: a paragraph per reason, a paragraph answering people who disagree ("Some people say ... But"), and an ending that restates and asks readers to act.
  - **Added SK-TT3a-P6** (Try, mc, DOK 2, p1): why Kendra ends with "Please ask the town ...".
  - **Added SK-TT3a-T6** (check, mc, DOK 2, p2): why the author includes paragraph 4 (it answers people who might disagree).
  - The check is now 6 items and 8 points (pass mark 7); it was 5 items and 7 points.
  - To keep the check from revealing T6's answer, I reworded the `why` of T3 ("the parent club sentence is about paying for the trees, not about heat") and of T4 ("paragraph 4 is about what trees cost"). The keys are unchanged.
- **3.L.GC.2.d** (p. 19: "Elaborate on ideas and information, using adjectives and adverbs when incorporating details and descriptions to convey precise meaning."). File: L-GC2.js, form A only.
  - In **SK-GC2d-T3**, Part A now reads "Which revision best elaborates on Lily's idea by adding details?"
  - The Part B key now reads "It adds exact details that help the reader picture the garden."
  - The `why` explains the added detail. The keys and positions are unchanged.
- **3.T.C.2.a** (p. 27: "Describe different perspectives of the narrator or speakers and distinguish them from their own."). File: T-C.js, form A.
  - **Removed SK-TC2a-T1**, the DOK 1 "who is telling". Narrator identification remains in practice P1 and in teach point 5.
  - **Added SK-TC2a-T6** (mc, 1 point, DOK 2): an original 4-line poem in which the speaker likes the wind for a kite and Dad thinks it is too cold. The child chooses how the speaker's view differs from Dad's. The key length was balanced against the distractors (checker warning cleared).
  - The points stay at 7.
- **3.T.C.1.b** (p. 26). File: T-C.js. **SK-TC1b-P6** (a Try match item) replaced its Diagram column with "Speaker's voice". The new row is "slows down and stops for a moment right before an important fact". So Try now has a spoken-cue row.
  - The bold-word row now says "printed word", so it cannot be confused with the spoken row.
  - Diagrams are still in Try P5 and in the check.
  - Not done: a web-page Watch Me (the Watch Me limit is 3).
- **GUM R determiners.** File: L-GUM2.js. The word-list term "possessive adjective" is now "possessive determiner", with the note "(some books call it a possessive adjective)". This matches the corrected official row: "Use determiners (articles, possessive determiners, demonstrative adjectives)."

## 5. Noted, not changed

- **SK-V2a-TB5** keys "erupt", which is also the answer word of 3.L.V.2.c practice SK-V2c-P6. Form B is owned by reviewfix4, so I left it unchanged. Lead / reviewfix4: please change one of the two words.

## 6. Gates

- `node verification/check-content.js --all`: PASS, 0 failures, 6 warnings. All 6 warnings existed before my changes and none are from my items.
- `python3 verification/readability.py`: ran. The 3.L.V.3.d passages are unchanged (p1 FK about 4.5, p2 about 3.0).
- `node verification/check-writing.js`: 0 failures, 0 warnings.
- Full `python3 verification/guard.py http://localhost:8501/`: **107 passed, 0 failed** (exit 0), including the four new section 15 checks, 7.1 (no page errors) and 8.1 (no sideways scroll on any screen at 320/375/390). Log: scratchpad `afix/guard.log`.
- Renders at 390x844 and 1366x900:
  - pages: V.3.d teach and Watch Me; GUM1-1/1-2/1-3 Try
  - items: V3d-P6, P7, T6, T7; TT3a-P6, T6; TT3c-T6; TC2a-T6; TC1b-P6; GC2d-T3
  - result: 0px sideways overflow on every page and item, and no page errors.

# PP-004 review A2: independent official-standards reviewer, round 2

- **Agent:** A2 (Agent A, round 2). **Date:** 2026-10-21. **Worktree:** /home/claude/pp-fix.
- **Read-only.** I edited no lesson, code or data file and ran no git command. I wrote only:
  - `docs/audits/PP-004-FINAL-COVERAGE-MATRIX.csv` (rebuilt)
  - this file
  - scripts and evidence in the scratchpad folder `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rev4A2/`
- **Port:** 8506 (`node verification/serve.js . 8506`), stopped by its PID.
- **Inputs:** round 1 (`pp004-review-A.md` and the round-1 matrix, copied to `rev4A2/matrix-round1.csv` before the rebuild), plus `pp004-afix.md`, `pp004-reviewfix4.md`, `pp004-review-C-formB.md`, `pp004-review-C3.md`, `pp004-rc3fix.md` and `pp004-dfix.md`.

## 1. Method

**Scripts** (in `rev4A2/`; round 1's scripts were copied and changed):
- `load.js`: unchanged. It loads exactly the files listed in the manifest (99 lessons) in a VM sandbox and splits Together and Try the same way `skills.js` does.
- `build.js`:
  - It still parses the blueprint itself and asserts that every `official`/`page` value in `standards.js` equals the official JSON. Result: 0 problems.
  - New in this round:
    - a `form_b` column;
    - a per-lesson form B review note;
    - a computed list of status changes against the round-1 CSV.
  - All counts below come from the `summary.json` file it writes. Nothing is hardcoded.
- `judgments.js`: round-1 judgments, with the rows below re-judged.
- `dump.js`: unchanged except for the seed (`id+'4A2'`). It writes `blind/` (choices shuffled; no key, why, clue or hint) and `blind-keys/` separately.
- `shoot.py`: Playwright renders at 390 px. Output is in `png/`.

**Blind solves:** I wrote my answers to `ans-V3d.txt` and `ans-rest.txt` before I opened `blind-keys/`, then compared them by script.
- **Result: 38 of 38 agree.** That covers the 13 items of 3.L.V.3.d, the 10 items of 3.T.C.2.a (P1-P5, T2-T6), P6 and T1-T6 of 3.T.T.3.a, P6, T1, T2, T4, T5 and T6 of 3.T.T.3.c, SK-GC2d-T3 and SK-TC1b-P6.
- Caveat: I read the afix log before solving, so I knew what each new item targets. The solves check the keys and whether an item has only one defensible answer. They are not cold solves.

**Rendering at 390×844** (port 8506), using `PP_SKILLS.open(key, step)`:
- **Speaking card**, for the three GUM speaking lessons, on Practice, Try and Test:
  - It appears on Try only.
  - It has three `input[type=checkbox]` controls, each with a `label for`. The label tap targets are 80-131 px tall.
  - The page has no sideways scroll (scrollWidth 390) and no page errors.
  - `pp.progress.v1` is still `null` after rendering, so rendering writes nothing.
  - Screenshots: `png/speak{1,2,3}-try-390.png`, `speak3-try-390-viewport.png`.
- **3.L.V.3.d:** the teach and Watch Me pages, plus the three new figures at 320 px (`png/v3d-figs.png`). All labels are legible. Each alt text names every label and meaning without saying which one fits.

**Gates (read-only):**
- `node verification/check-content.js --all`: PASS, 0 failures, 6 warnings. These are the same 6 clue-overlap warnings as before.
- `node verification/check-writing.js`: 0 failures, 0 warnings.
- `python3 verification/readability.py`: exit 0.

**Rule for VERIFIED COMPLETE:** the same as in round 1 (`pp004-review-A.md` §1). Status is judged on form A. Form B is recorded in the new column, and its review state is in `evidence`.

## 2. The 8 rows that were PARTIAL

| Row | Official wording (page) | Round 1 | Now | Evidence |
|---|---|---|---|---|
| 3.L.V.3.d | "Use glossaries or beginning dictionaries, both print and digital, to check spelling and to determine or clarify the precise meaning of words and phrases." (p. 23) | PARTIAL | **VERIFIED COMPLETE** | See below. |
| GUM R "Use nouns and verbs to share complete thoughts when speaking." | p. 15 | PARTIAL | **VERIFIED COMPLETE** | See below (speaking). |
| GUM R "Form and use singular and plural nouns when speaking." | p. 15 | PARTIAL | **VERIFIED COMPLETE** | See below (speaking). |
| GUM R "Use interrogatives to ask questions when speaking." | p. 15 | PARTIAL | **VERIFIED COMPLETE** | See below (speaking). |
| K-12.P.EICC.1.b | "Discuss or write about personal and academic reading and writing preferences, referring to specific techniques, topics, modes, and genres that resonate most." (p. 42) | PARTIAL | **VERIFIED COMPLETE** | See below. Low note on "academic". |
| K-12.P.EICC.1.e | "Participate in a community of readers and writers by developing group norms, discussing texts, sharing individual writing, listening as others share their writing, and offering and responding to feedback." (p. 42) | PARTIAL | **VERIFIED COMPLETE** | See below. |
| K-12.P.EICC.3.e | "Make and track predictions about the events and information likely to come next." (p. 44) | PARTIAL | **VERIFIED COMPLETE** | See below. |
| K-12.P.EICC.3.f | "Make, track, and support inferences about different levels of meaning within the text." (p. 44) | PARTIAL | **VERIFIED COMPLETE** | See below. |

I confirmed the wording and page of each row against `gadoe/standards-3-5.txt`. The page numbers come from the form feeds: p. 15 for the GUM speaking rows, p. 23 for V.3.d, p. 42 for EICC.1.b and 1.e, and p. 44 for EICC.3.e and 3.f. The build also asserts that every row equals the official JSON.

### 3.L.V.3.d: each clause of the official wording mapped to the lesson

- **Print dictionaries:** taught in points 1-3, with Watch Me 1 and 2. Practised in P1-P5. Checked in T1 (guide words), T3 (ABC order) and T4 (numbered entry).
- **Glossaries:** taught in point 4. The glossary boxes are in passages p1 and p2. Practised in P4 and checked in T2 (EBSR).
- **Digital dictionaries:**
  - Taught in point 5: the search box replaces guide words, plus "Did you mean ...?", Hear it and the Synonyms tab.
  - Modelled in Watch Me 3, on the figure `v3d-app-spring.svg`.
  - Practised in Try P7 (`v3d-app-bark.svg`).
  - Checked in T6 (`v3d-app-bright.svg`).
- **Check spelling:** in print (P5) and in digital form (P7, and T6, where *brite* gets "Did you mean: bright?").
- **Determine or clarify the precise meaning:** P3, Watch Me 3, P7 slot 2, T4 and T6 (meaning 2 of *bright*).
- **Phrases:**
  - Point 6 and the *look after* example.
  - Together P6 (*give up*).
  - T7 (*ran out of*, which the child must look up under the base word *run*).
- **Verdict:** every clause is taught, practised and assessed on form A without hints. All 13 keys are correct, and review C3 also solved P6, P7, T6 and T7 (42/42). That makes two independent reviewers of the new items, which meets SPEC §5.
- **Low:** the Synonyms tab is shown but not scored. The official text does not name a thesaurus, so nothing is missing.

### GUM "when speaking" rows: is a grown-up-led oral card with ticks sufficient? Yes, and here is why.

What is now on the site:
- Each lesson keeps its written items (form A, 5 items each). Those items assess the convention itself, which is what Milestones measures for these rows: 3.L.GC.1 M and R rows are assessed only in the Constructing column, through written conventions.
- Each lesson adds a "Say it out loud (with a grown-up)" card on Try It Yourself.
  - The grown-up runs a short oral routine and ticks three lines.
  - Each line states an observable criterion with a count. Every part of the official row is covered:
    - **Nouns and verbs:** at least 3 answers in complete spoken sentences, each with a who/what and a verb; a short answer re-said as a whole sentence without help; a spoken command, with its "who" named as you.
    - **Singular and plural nouns:** the one form at least 3 times and the more-than-one form at least 3 times, with an audible -s/-es; plus a corrective recast that the child repeats. The card limits itself to regular plurals; irregular plurals are their own M row.
    - **Interrogatives:** at least 5 spoken questions that fit given answers, at least 4 different question words, and whole questions rather than one word.

Why this is sufficient for VERIFIED COMPLETE:
1. **Evidence.** It is the strongest evidence the site can collect without recording a child's voice. That would raise privacy problems for a free public site for children, and the SPEC does not allow it. A trained adult observing against a stated criterion is how speaking conventions are judged in classrooms too.
2. **Consistency.** In round 1 I accepted exactly this kind of evidence for the oral and handwritten parts of the classroom-only Foundations rows (3.F.P.4.a-c, 3.F.F.1.a-d): a structured grown-up routine with a stated criterion. Applying a stricter rule here would be inconsistent. If anything, these cards are more concrete than some Foundations checks, because each line has a count.
3. **Honesty.** The card does not overclaim:
   - It says "Practice with a grown-up. This is not part of the skill check."
   - Ticks are stored only as `speakChecks` and never set `mastered`.
   - The written check, which does not pretend to measure speech, remains the only basis for "passed".
   - A matrix row that says the speaking component is *covered* by a structured routine is therefore true.

What VERIFIED COMPLETE does **not** mean for these rows: that the site has evidence a given child can do this when speaking. The ticks are the grown-up's own report. They are kept only on one device, and they do not appear on the skill row or the parent page. I record this as a Low (S-3 below), not as a gap in coverage.

### Practices habit cards

Each card was read against its official wording, clause by clause.

- **EICC.1.b**
  - Topics and genres: funny stories, animal facts, poems; sort books and say why.
  - Techniques: "I like how the author ___", for example "makes the animals talk" or "ends each chapter with a surprise".
  - Modes: reading on paper, listening or watching; writing stories, facts or opinions.
  - "Discuss or write": "out loud or on paper".
  - **Low:** "academic" preferences are reached only through fact books and writing facts and opinions. The card never says "school". No lesson embeds this identity practice, so the card is the only evidence.
- **EICC.1.e:** all six parts are covered.
  - Norms: agree on rules first.
  - Discussing texts: a family book chat.
  - Sharing individual writing: the child reads their own piece.
  - **Listening as others share:** the grown-up or a sibling reads their writing, and the child listens to the end.
  - Offering feedback: a star and a wish.
  - **Responding to feedback:** the child makes one change and explains it.
- **EICC.3.e**
  - Events: predict before turning the page, write the prediction on a sticky note, and check it at the end of the chapter.
  - **Information:** read a heading ("What Bats Eat"), predict two facts, then check each one off or change it.
  - "Track" is the note and the check-off.
- **EICC.3.f**
  - Make and support: the card's feeling-plus-clue-words and detective routines, and lesson items such as 3.T.C.2.a P3, T3 and T5, and 3.T.T.1.c.
  - **Track:** a sticky-note inference gets a check mark when a new clue fits, or is crossed out and rewritten when one does not.
  - Different levels of meaning: unstated feelings (on the card) and central message or theme (3.T.T.1.a-c).

## 3. Rows of the other lessons afix changed: no regression

| Row | Change re-checked | Result |
|---|---|---|
| 3.T.T.3.c | T3 removed. New T6 asks for the best NEW reason (supply reasons). | VERIFIED COMPLETE. 6/6 blind. The round-1 SHOULD is done. **Low:** "introduce the topic" is taught (pt 1), modelled (WM1), ordered in P5 and written in the write task, but no check item targets it directly. |
| 3.T.T.3.a | Teach pt 5 on design. Try P6 asks why the piece ends with a call to act. Check T6 asks why paragraph 4 is there (it answers people who disagree). The check is now 6 items and 8 points. | VERIFIED COMPLETE. 7/7 blind. "Techniques used to present and design opinion texts" is now assessed. The round-1 SHOULD is done. The T3/T4 whys no longer reveal T6. |
| 3.T.C.2.a | DOK 1 T1 removed. New T6: a poem where the speaker's view differs from Dad's. | VERIFIED COMPLETE. 10/10 blind. "Speakers" is now in the check. Narrator identification is still in teach pt 5 and P1. **Low (C3 RC3-5):** T6 copies P4's frame and distractor logic. |
| 3.L.GC.2.d | T3 Part A now asks "best elaborates on Lily's idea by adding details". DOK changed from 3 to 2 (rc3fix). | VERIFIED COMPLETE. Blind solve matches the key. It matches the official verb "Elaborate". The round-1 SHOULD is done. |
| 3.T.C.1.b | Try P6 now has a "Speaker's voice" row (a pause before an important fact). | VERIFIED COMPLETE. Blind solve matches the key. Spoken mode is now practised in Try as well as Together. **Low:** still no Watch Me on a web page. |
| GUM R determiners | Word list: "possessive determiner (some books call it a possessive adjective)". | VERIFIED COMPLETE. This matches the corrected official row "Use determiners (articles, possessive determiners, demonstrative adjectives)". The round-1 SHOULD is done. |

**Other changes checked:**
- dfix: the text boxes now carry `role="note"` and the label "Text box", and their colour changed. Item text is unchanged, so no row is affected.
- reviewfix4 and rc3fix: changes to form B and PT-1. These are recorded in `form_b` and `evidence`; see §6.
- The round-1 site-wide Low on `parents.js` is **resolved**. Embedded codes with a habit card now say "Home activities only. Peach Prep has no questions for this practice; GaDOE builds the practices into other questions." (parents.js:192). I removed that note from the matrix.

## 4. Final totals (computed by `build.js` from the 147 rows; see `rev4A2/summary.json`)

| Group | Rows | VERIFIED COMPLETE | PARTIAL | MISSING | INCORRECT | UNVERIFIED |
|---|---|---|---|---|---|---|
| **Assessed** | 69 | 69 | 0 | 0 | 0 | 0 |
| Interpreting | 27 | 27 | 0 | 0 | 0 | 0 |
| Constructing | 16 | 16 | 0 | 0 | 0 | 0 |
| GUM M-R (Constructing) | 26 | 26 | 0 | 0 | 0 | 0 |
| **Classroom-only Foundations** | 10 | 10 | 0 | 0 | 0 | 0 |
| **Embedded Practices** | 53 | 53 | 0 | 0 | 0 | 0 |
| **GUM I/C (not assessed)** | 15 | 15 | 0 | 0 | 0 | 0 |
| **All rows** | 147 | 147 | 0 | 0 | 0 | 0 |

- **Rows by domain:** Texts 29, Language 55 (14 expectations plus 41 GUM rows), Foundations 10, Practices 53.
- **Blueprint parse:** 43 expectations are assessed (27 Interpreting and 16 Constructing), plus 26 GUM M/R rows. The script logs the blueprint's "5.L.V.3 (e)" typo.
- **Corrected official wording:** 60 rows were corrected. 19 of them are assessed, and all 19 are now VERIFIED COMPLETE.
- **`form_b` column:**
  - `Y` on 13 rows: 3.L.GC.2.b, both GUM M rows (irregular plurals and irregular past), 3.L.V.2.a, 3.L.V.3.a, 3.T.SS.1.a (via TS-CE), 3.T.SS.2.a, 3.T.T.1.a, 3.T.T.1.c, 3.T.T.2.a, 3.T.T.2.b (TS-CE 1 + its own 5), 3.T.T.4.a and 3.T.RA.2.a.
  - These come from 13 lessons with `testB`, which hold 67 items in total.
  - Every other row is `N`.

## 5. Rows that are not VERIFIED COMPLETE

**None.** No row in the rebuilt matrix is PARTIAL, MISSING, INCORRECT or UNVERIFIED.

Rows that are VERIFIED COMPLETE but carry a Low note or a process condition are listed in §6.

## 6. Status changes since round 1

These were computed by `build.js` against `rev4A2/matrix-round1.csv`. Exactly 8 rows changed, and every change is PARTIAL → VERIFIED COMPLETE:
- 3.L.V.3.d
- 3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in
- 3.L.GC.1:R:form-and-use-singular-and-plural-nouns-in-speech
- 3.L.GC.1:R:use-interrogatives-to-ask-questions-in-speech
- K-12.P.EICC.1.b
- K-12.P.EICC.1.e
- K-12.P.EICC.3.e
- K-12.P.EICC.3.f

No row went down.

## 7. Findings

### MUST

**M-1 (process, before release): form B does not yet meet the SPEC review rule.**
- **The rule:** SPEC §5 (docs/SPEC.md:249) says "Two independent grammar and content reviewers pass every new item." A pass on form B sets `mastered`.
- **Where each form B item stands now:**
  - **Unchanged items:** one independent review, review-C-formB (blind, 67/67).
  - **Items reviewfix4 changed** (3.L.GC.2.b TB1-5, SK-TT2a-TB2, SK-V2a-TB5, 3.L.V.3.a TB2-6): one independent review of the live version, review C3.
  - **Items rc3fix rebuilt after C3:** the whole irregular-plurals `testB` (SK-GUM3-2-TB1..TB5) and SK-V2a-TB4. **Zero** independent reviews. rc3fix also changed PT-1-8 and PT-1-13, which are set items, not form B, but are under the same rule; they also have zero independent reviews.
- **What I checked myself:** the keys of SK-GUM3-2-TB1..TB5 and SK-V2a-TB4 are correct. But I had already read rc3fix's key table, so this is not a blind review. The non-variant status of *shelfs, thiefs, grandchilds, snowmans, fishermans* and *wifes* is still UNVERIFIED (rc3fix could not fetch the dictionaries, and I did not try).
- **Fix:** before release, either run a second independent blind review of all 67 form B items plus PT-1-8 and PT-1-13 (the rc3fix items need two), or ship without `testB` until then.
- **Not a MUST:** I found no MUST in lesson content. I found no wrong key, no incorrect rule, and no expectation taught against its official meaning.

### SHOULD (Low; none changes a status)

- **S-1:** SK-V2a-TB5 keys "erupt", which is the answer word of 3.L.V.2.c practice SK-V2c-P6. Round 1, afix and C3 all flagged this, and it is still unchanged. **Fix:** change one of the two words.
- **S-2:** 3.T.T.3.c has no check item that directly targets "introduce the topic". **Fix:** turn T1 into "Which sentence best introduces the topic and states Malik's opinion?", or add a new opening-sentence item. The current T1 replaces sentence 3 with an opinion statement.
- **S-3:** speaking cards.
  - The ticks are visible only on the Try step, on one device. They are not shown on the skill row or the parent page.
  - A child who goes from Learn straight to Test never sees the card. The parent note still points to speaking practice.
  - **Fix:** mention the card in the "For grown-ups" note, e.g. "Use the Say it out loud card on step 4." Optionally show "speaking practice ticked" on the parent page. It must not affect status.
- **S-4:** template similarity, from C3 RC3-5 and RC3-6. SK-TC2a-T6 copies P4's frame, and SK-TT3c-T6 copies P6's distractor pattern. **Fix (optional):** vary one distractor type in each.
- **S-5:** EICC.1.b card. **Fix:** add one "school" example, e.g. "the kind of science or social studies reading you like best, and why", so that "academic" preferences are explicit.

**Low notes carried over from round 1.** I did not re-check these in this round unless I say so here:
- 3.L.V.1.b: general academic words.
- 3.T.RA.1.c: the write prompt does not say "sources you can trust". I grepped, and it still does not.
- 3.L.GC.2.a: teach pt 1 does not mention the implied "you".
- 3.T.SS.1.a and 3.T.T.2.d: "e.g." features appear only in practice.
- 3.T.C.2.c: P7.
- 3.T.T.1.d: places compared more than cultures.
- 3.F.P.4.a/c: breadth.
- Cards AC.1.a, AC.2.a, EICC.4.e and EICC.3.g: I grepped, and the round-1 additions are still not made.

## 8. What I did not do

- I did not do a second blind review of form B. It was outside my assignment, and it is M-1.
- I did not re-solve the items of lessons that afix did not change.
- I did not run guard.py. dfix reports a full run: 110 passed, 0 failed.
- I did not test with a real screen reader or on iOS.

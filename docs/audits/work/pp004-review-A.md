# PP-004 review A: independent official-standards reviewer (final coverage matrix)

- **Agent:** A (review-A4). **Date:** 2026-10-20. **Worktree:** /home/claude/pp-fix.
- **Read-only.** I edited no lesson, code or data file and ran no git command. I wrote only:
  - `docs/audits/PP-004-FINAL-COVERAGE-MATRIX.csv`
  - this file
  - helper scripts in `scratchpad/rev4A/`
- **Port:** none used. Figures were rendered from the SVG files directly, without a server.

## 1. Sources and method

**Official sources**
- The standards wording and page for each row come from `docs/audits/work/official-gr3-standards.json` and `official-gr3-gum.json`.
- The build script asserts that every `official` string and `page` in `js/data/standards.js` equals the JSON. There were 0 mismatches.
- "Assessed" is decided by the blueprint (`gadoe/7bf55d31-GM_Gr3_ELA_Blueprint.txt`, August 2025), **parsed by the script**, not by the site's flags:
  - Each code on page 1 goes to Interpreting or Constructing by its column.
  - 3.L.GC.1 sits in the Constructing column only, and only its M and R rows are assessed (footnote *).
  - The printed "5.L.V.3 (e)" is read as 3.L.V.3.e. The script logs this typo.
  - Foundations is classroom only, and Practices are embedded.
- The site's `tested` flag agrees with the blueprint on all 147 rows.

**Live data**
- `scratchpad/rev4A/load.js` loads exactly the files that `js/data/manifest.js` lists (17 lesson files with 99 lessons, 15 sets, 2 tasks), plus `standards.js` and `habits.js`, in a VM sandbox.
- It splits Practice Together and Try exactly as `js/skills.js` `addLesson` does: the first ceil(n/2) items when n >= 4.
- Items are counted under every code in their `std`, which defaults to the lesson code.
- **All counts in the matrix and below are computed by `scratchpad/rev4A/build.js`**, which writes `scratchpad/rev4A/summary.json`.
- To regenerate: `node build.js` in `scratchpad/rev4A/`.

**What I read**
- **The 19 assessed rows whose official wording was corrected in PP-004:**
  - 3.T.C.1.b, C.2.a, C.2.c, SS.1.a, SS.1.c, SS.2.b, T.1.d, T.1.e, T.2.b, T.2.d, T.3.a, T.3.c, T.4.b and RA.1.a
  - 3.L.GC.2.a, GC.2.d, V.1.b and V.3.d
  - the GUM R row on determiners

  I re-checked each against its official wording: teach, Watch Me, practice and the check.
- **The 4 gap lessons:** 3.T.C.1.b, 3.T.C.2.c, 3.T.RA.1.b and 3.L.GC.2.a.
- **The Foundations lessons:** all 10 rows.
- **The 5 realigned lessons:** 3.T.C.2.a, 3.T.T.1.d, 3.L.GC.2.d, 3.T.SS.2.b and 3.T.T.4.b.
- **Every block lessonfix edited:**
  - Texts: 3.T.C.1.c, SS.1.b, SS.1.d, T.1.b, TS-SEQ, TS-CE, TS-PS, TS-CC, T.3.c, RA.1.c and RA.2.b
  - Language: V.1.a, V.2.a
  - GUM: 1-1, 1-5, 2-3, 2-4, 3-6 and 3-8

  No independent review of these edits existed before this one.
- **All 53 habit cards,** each against its official wording.
- **The three GUM rows whose official wording was corrected and which are not assessed.**
- **Prior reviews, read and weighed rather than copied:**
  - the PP-003 matrix and reviews A-E
  - pp004-gapreview-AB, pp004-gapreview-C, pp004-gapfix
  - pp004-lessonaudit-texts and pp004-lessonaudit-language, pp004-lessonfix
  - PP-004-FOUNDATIONS-REVIEW, pp004-foundations, pp004-forms
  - the three formB logs

**How I solved items**
- `scratchpad/rev4A/dump.js` writes each lesson twice:
  - with choices shuffled (mulberry32, seed `id+'4A'`) and no key, why, clue or hint;
  - with keys, in a separate file.
- **Solved before I opened the keys:**
  - the check items of 3.T.C.1.b (T2, T3, T6, T7, T8, T9) and 3.T.C.2.c
  - the 6 check items and P8 of 3.T.RA.1.b
  - the check items of 3.L.GC.2.a, 3.T.C.2.a, 3.T.T.1.d, 3.L.GC.2.d, 3.T.SS.2.b and 3.T.T.4.b

  Caveat: I had read the gapfix log first, so I knew what T8 and T9 in 3.T.C.1.b were testing.
- **Solved with the keys printed in the same view (not strictly blind):**
  - the Foundations items
  - the other check items I looked at

  The matrix says which kind of solve applies to each row.
- **Result:** every item I solved matched its key. I found no wrong key and no item with two defensible answers.
- **Figures:** I rendered four of them at 320 px: tc1b-monarch-video, tc1b-monarch-webpage, ra1b-web-moon and ra1b-web-pumpkin. All are legible, and each alt text matches its figure.
- **Fact check:** I checked the elephant figures in 3.T.RA.2.b (about 300 lb of food a day, up to 16 hours of feeding, up to 50 gallons of water) against the International Elephant Foundation, https://elephantconservation.org/about-elephants/25-things-to-know, on 2026-10-20. The page says "250 – 300 pounds is a more typical amount", "feed for up to 16 hours a day" and "about 25 – 50 gallons". The passage is correct.
- **Gate (read-only):** `node verification/check-content.js --all` gives PASS, 0 failures and 6 warnings, all clue-overlap.

**The rule I applied for VERIFIED COMPLETE**
- **Assessed and Texts/Language rows:**
  - Every component of the official wording is taught and practised.
  - The form A check (no hints) assesses the expectation's central demand, with correct keys.
  - An independent reviewer confirmed this. For the rows listed above, that reviewer is me; for unchanged and uncorrected rows, PP-003 plus the PP-004 lesson audit.
  - Components that selected response cannot reach may rest on the lesson's write or grown-up task. Examples are "self-selected topic", "produce", "discuss" and "read aloud".
  - A component missing from the check that selected response *could* assess is recorded as a SHOULD. It lowers the status only when it is the central verb or object, or a required mode (as in 3.L.V.3.d).
- **Classroom-only Foundations:** oral and handwritten components may rest on a structured grown-up routine with a stated criterion. This is the same rule the Foundations author used.
- **Embedded Practices:**
  - The "lesson" is the habit card plus any lesson that I read and that really exercises the practice ("embedding").
  - The "check" is the scored items of those embedding lessons, or, for oral, collaborative and identity practices, the card's structured home routine.
  - VERIFIED COMPLETE requires every component of the *official* wording to be covered.
- **Form B** (`testB`) is recorded in the matrix but does not change any status. No form B has been independently reviewed. See section 6.

## 2. Totals by status

Computed by `build.js` from the 147 matrix rows (`summary.json`).

| Group | Rows | VERIFIED COMPLETE | PARTIAL | MISSING | INCORRECT | UNVERIFIED |
|---|---|---|---|---|---|---|
| **Assessed** (Interpreting + Constructing + GUM M/R) | 69 | 65 | 4 | 0 | 0 | 0 |
| — Interpreting | 27 | 26 | 1 | 0 | 0 | 0 |
| — Constructing | 16 | 16 | 0 | 0 | 0 | 0 |
| — GUM M-R (Constructing) | 26 | 23 | 3 | 0 | 0 | 0 |
| **Classroom-only Foundations** | 10 | 10 | 0 | 0 | 0 | 0 |
| **Embedded Practices** | 53 | 49 | 4 | 0 | 0 | 0 |
| **Not-assessed GUM I/C** | 15 | 15 | 0 | 0 | 0 | 0 |
| **All rows** | 147 | 139 | 8 | 0 | 0 | 0 |

Other counts:
- **Rows by domain:** Texts 29, Language 55 (14 + 41 GUM), Foundations 10, Practices 53.
- **Blueprint parse:** 43 Texts/Language expectations are assessed (27 Interpreting, 16 Constructing), plus 26 GUM M/R rows.
- **Corrected wording:** 60 rows were corrected in PP-004 (56 expectations and 4 GUM rows). 19 of them are assessed: 18 are VERIFIED COMPLETE and 1 (3.L.V.3.d) is PARTIAL.

## 3. Every row that is not VERIFIED COMPLETE

| Code | Group | Status | Reason |
|---|---|---|---|
| 3.L.V.3.d | Interpreting | PARTIAL | The corrected wording is "glossaries or beginning dictionaries, **both print and digital** ... the precise meaning of **words and phrases**". The lesson is print-only: guide words, ABC order, numbered entries and glossary boxes. Digital appears only as "in a book or online" in teach pt 5, with no step, figure or item. No phrase is ever looked up. The check items (T1-T5) are correct but print-only. |
| 3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in | GUM M-R | PARTIAL | The official row is "Use nouns and verbs to share complete thoughts **when speaking**." Lesson and check are written. Speaking has only a one-line parent tip, with no grown-up check routine or criterion. |
| 3.L.GC.1:R:form-and-use-singular-and-plural-nouns-in-speech | GUM M-R | PARTIAL | "...**when speaking**." Written items only. Teach pt 4 and the parent tip mention speech, but there is no grown-up check. |
| 3.L.GC.1:R:use-interrogatives-to-ask-questions-in-speech | GUM M-R | PARTIAL | "...**when speaking**." Written items only. There is a parent question game, but no grown-up check. |
| K-12.P.EICC.1.b | Embedded | PARTIAL | The card never prompts **techniques** or **modes** ("referring to specific techniques, topics, modes, and genres that resonate most"). No lesson embeds this practice. |
| K-12.P.EICC.1.e | Embedded | PARTIAL | The corrected wording adds "**listening as others share their writing**" and "**responding to feedback**". The card covers norms, discussion, sharing the child's own writing and offering feedback, but neither added part. |
| K-12.P.EICC.3.e | Embedded | PARTIAL | The official wording is "predictions about the events **and information** likely to come next". The card covers story events only, and no lesson item asks for a prediction. |
| K-12.P.EICC.3.f | Embedded | PARTIAL | "Make, **track**, and support inferences". Making and supporting are embedded in many items (e.g. 3.T.C.2.a P3, 3.T.T.1.c). Nothing asks the child to track an inference and revise it. |

Before PP-004, 4 assessed rows were UNVERIFIED. None is UNVERIFIED now: the GUM chart verification read the grade 3 level of all 41 rows from the page images.

## 4. Disagreements with earlier statuses

These were produced by a script that compares `PP-003-STANDARDS-MATRIX.csv` `post_fix_status` (ignoring the "NOT APPLICABLE TO MILESTONES –" prefix) with this matrix, plus a manual comparison with the PP-004 reviews.

| Code | Earlier status (source) | Now | Why |
|---|---|---|---|
| 3.T.C.1.b | PARTIAL (PP-003; gapreview-AB) | VERIFIED COMPLETE | AB's two blocking gaps were closed by gapfix, and I confirmed both against the live data. Auditory features are now checked (T9 caption line: `[sound]` vs `NARRATOR:`; my blind solve matched the key). Digital and auditory work now has a Together item (P10). Two notes remain as Low SHOULDs: spoken-voice cues are practised only in Together (P9), and digital features have no Watch Me step. |
| 3.T.RA.1.b | PARTIAL (PP-003; gapreview-AB) | VERIFIED COMPLETE | "Credible" is now taught (pt 3), modelled (WM3 step 1), practised (P8) and checked (T8). The two model web pages are now credible sources. I am the first independent reviewer of P8 and T8; both keys are correct. |
| 3.T.C.2.c | PARTIAL (PP-003) | VERIFIED COMPLETE | I agree with gapreview-AB: individual and situational context are now in both halves of practice and in the check. The text-box notes now render as boxes. |
| 3.L.GC.2.a | PARTIAL (PP-003) | VERIFIED COMPLETE | I agree with gapreview-AB. Complex sentences are now keyed in Together (P4), and the corrected official wording, without "in texts read, heard, or viewed", is fully met. |
| 3.L.V.3.d | VERIFIED COMPLETE (PP-003; lessonaudit-language STRONG) | **PARTIAL** | Both reviews judged the old paraphrase "print **or** digital". The corrected wording requires **both** print and digital, plus phrases. |
| GUM R speaking rows (3) | UNVERIFIED (PP-003 post-fix) | PARTIAL | The chart question is resolved: all three are official grade 3 R rows (PP-004 GUM verification). The content gap that the PP-003 content audit already rated PARTIAL (speaking assessed only in writing) remains. |
| 3.L.GC.1:R:capitalize-the-first-word-... | UNVERIFIED (PP-003 post-fix) | VERIFIED COMPLETE | The row and its R level are confirmed. The content was already VERIFIED COMPLETE in PP-003. |
| 3.F.P.4.a | PARTIAL (PP-003; Foundations author) | VERIFIED COMPLETE | The official set of graphemes is open. The lesson teaches ea, ow, c, g, oo, ou (+ough), with decoding (read-aloud list with a retry prompt) and encoding (dictation, with a check-together criterion). The author's gaps (y, ch, ie/ei; no stored record) are breadth and tooling, not missing meaning. |
| 3.F.P.4.c | PARTIAL (PP-003; Foundations author) | VERIFIED COMPLETE | "Common prefixes and suffixes" is open. The lesson covers re-, un-, dis-, mis-, pre-, -ed, -ing, -ly, -ful and -less, plus the spelling changes, and both decoding and encoding. mis- and pre- appear only in teach and the read-aloud list (Low). |
| 3.F.F.1.a | PARTIAL (PP-003; Foundations author) | VERIFIED COMPLETE | Automaticity is covered by the quick-read routine, which has a stated criterion ("within about a second, without sounding it out") and a 3-day retirement rule. Under the Foundations rule, an observed routine counts; a stored record is not required by the standard. |
| 3.F.P.4.b, 3.F.F.1.c | PARTIAL (PP-003) | VERIFIED COMPLETE | I agree with the Foundations review: the PP-004 dictation and the coaching/check additions close the PP-003 gaps. |
| K-12.P.EICC.1.c | PARTIAL (PP-003) | VERIFIED COMPLETE | Writing on self-chosen topics is embedded in the write tasks of 3.T.RA.1.a, 1.b and 1.c, which I read. PP-003 did not credit any embedding because no item carries a K-12.P tag. |
| K-12.P.EICC.3.g | PARTIAL (PP-003) | VERIFIED COMPLETE | Embedded and checked in 3.L.V.1.a (academic words in context), 3.L.V.2.a (word parts) and 3.L.V.3.a (context). The card's wording gap stays as a Low note. |
| K-12.P.EICC.1.e | VERIFIED COMPLETE (PP-003) | PARTIAL | The corrected wording added listening to others' writing and responding to feedback. |
| K-12.P.EICC.3.e | VERIFIED COMPLETE (PP-003) | PARTIAL | "events **and information**" (nonfiction predictions) is not covered. |
| K-12.P.EICC.3.f | VERIFIED COMPLETE (PP-003) | PARTIAL | "track" is not covered. |

Two documentation errata in earlier PP-004 logs (Low; no effect on status):
- pp004-lessonaudit-texts cites wrong PDF pages for official wording: 3.T.C.1.c as "p. 20" (should be 26), 3.T.C.2.a "p. 21" (27), 3.T.T.3.c "p. 26" (34) and 3.T.RA.2.b "p. 27" (38).
- pp004-lessonaudit-language cites 3.L.V.1.a as "p. 19" (should be 21).

The `page` values in standards.js and in the matrix are correct.

## 5. Standards-alignment defects in lessons

**MUST: none in lesson content.** I found no wrong key, no incorrect rule, and no expectation taught against its official meaning. The PP-004 MUSTs found earlier (Ltexts-3, Ltexts-10, LL-1) are fixed in the live data, and I re-checked each.

**SHOULD** (each with a fix; none changes a key):

1. **3.L.V.3.d (Medium): digital dictionaries and phrases are missing.**
   - Add a teach point and a Watch Me step on a digital dictionary, with an original web-dictionary figure: type the word in the search box, see "Did you mean ...?" for a misspelling, and pick the numbered meaning that fits.
   - Turn T5 into a digital spelling item, for example: "Pablo typed *finishd*. The dictionary shows *Did you mean: finished?*".
   - Add one phrase entry, such as "look after", to a practice item.
2. **The three GUM speaking rows (Low).** Add a grown-up `check` block like the Foundations lessons. For example:
   - "During a 5-minute talk, answered in complete sentences at least 3 times."
   - "Said one/many forms correctly while counting objects."
   - "Asked a who/what/where/when/why/how question to fit each answer."
3. **3.T.T.3.c (Low).** "supply reasons" and "introduce the topic" are not in the check; only Try P6 and the write task cover them. Replace T3 or T5 with a choose-the-reason item modelled on P6.
4. **3.T.T.3.a (Low).** The corrected wording adds "techniques used to present and design opinion texts". Add one check item on design, for example: "Why does the author state the opinion again in the last paragraph?", or ask about the paragraph that answers an objection.
5. **3.L.GC.2.d (Low).** The official main verb is "Elaborate on ideas and information". The only elaboration item in the check (T3) is framed as "more exact". Reword T3 Part A to "Which revision best elaborates on Lily's idea by adding details?"
6. **3.T.C.2.a (Low).** The check has no speaker (poem) item and none contrasting two characters' perspectives; only Try P4 does. Replace T1, the DOK 1 "who is telling", with a 4-line poem item on how the speaker's view differs from another speaker's view.
7. **3.T.C.1.b (Low).** Spoken-mode cues are practised only in Together P9. Make one Try item a spoken-cue item. If the lead raises the Watch Me limit, add a web-page Watch Me.
8. **GUM R determiners (Low).** The word list defines "possessive adjective", but the official chart term (the corrected row) is "possessive determiners". Rename the term and keep "some books say possessive adjective" as a note.
9. **Practices habit cards (Low). Fixes:**
   - **EICC.1.b:** add "I like how the author ___" and "I like reading / listening / watching because ___".
   - **EICC.1.e:** add listening to a family member's writing and naming one change made after feedback.
   - **EICC.3.e:** add a nonfiction heading prediction.
   - **EICC.3.f:** add a sticky-note inference that is tracked and revised.

**Low notes (no status effect):**
- **3.L.V.1.b:** the lesson never names general academic words. Add one teach line and one practice row.
- **3.T.RA.1.c:** add "that you can trust" to the write prompt and checklist ("credible sources").
- **3.L.GC.2.a:** teach pt 1 should mention the implied "you" of commands, as GUM1-1 now does.
- **3.T.SS.1.a:** no map or chapter item in the check. Both are "e.g."/"such as", so this is acceptable.
- **3.T.T.2.d:** illustrations appear only in Try P6 (an "e.g." item).
- **3.T.C.2.c:** P7 is closer to the occasion of the letter than to its situation. This is defensible.
- **3.T.T.1.d:** the items compare places more than cultural practices.
- **3.F.P.4.a/c:** breadth notes only.
- **Practices AC.1.a and AC.2.a:** the cards omit the expository elements added in the corrected wording; both are embedded in 3.T.T.2.a and 2.d.
- **EICC.4.e:** the card does not mention purpose, audience or craft; these are embedded in W-TASK-01/02.
- **parents.js (PP-003 finding, still open):** it says "Not practiced on Peach Prep." for embedded codes that have a habit card.

## 6. Release conditions outside lesson alignment

- **Form B is unreviewed (MUST before release, process).**
  - These lessons have `testB`: 3.L.GC.2.b, both GUM M rows (irregular plurals and irregular past tense), 3.L.V.2.a, 3.L.V.3.a, 3.T.SS.2.a, 3.T.T.1.a, 3.T.T.1.c, 3.T.T.2.a, 3.T.T.2.b, 3.T.T.4.a, 3.T.RA.2.a and TS-CE. TS-CE counts under 3.T.SS.1.a and 3.T.T.2.b.
  - Every formB log says "NOT reviewed".
  - A pass on form B sets `mastered` (pp004-forms F1), and the SPEC manifest rule requires two reviews.
  - Either review these forms or keep `testB` out of the release.
  - One defect I noticed while reading: SK-V2a-TB5 keys "erupt", which is the answer word of 3.L.V.2.c practice SK-V2c-P6. A child who did that practice item meets the form B item already rehearsed.
- **guard.py:** I did not run it. The full browser regression is the lead's.

## 7. What I did not do

- I did not review the form B items, apart from the one note above.
- I did not re-solve the check items of lessons that PP-004 did not change and whose wording was not corrected. For those, the matrix basis names PP-003 plus the PP-004 lesson audit, both of which solved them independently. The affected rows are:
  - 3.T.C.1.a, SS.2.a, T.1.a, T.1.c, T.2.a, T.2.c, T.4.a and RA.2.a
  - 3.L.GC.2.b, GC.2.c, V.2.b, V.2.c, V.3.a, V.3.b, V.3.c and V.3.e
  - the unchanged GUM rows
- I did not render lesson pages in the site's player. I rendered only the four figure SVGs.
- I did not re-measure Foundations cursive spacing.
- I made no edits, so I have no gates of my own to report. check-content was run read-only and passed.

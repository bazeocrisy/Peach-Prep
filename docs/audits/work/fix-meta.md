# PP-003 fix log: meta (Phase H metadata and parent-facing claims)

Agent: meta. Worktree: /home/claude/pp-fix. Port used for browser checks: 8455 (server stopped afterwards).
Date: 2026-10-20. Sources: the owner's GaDOE uploads in scratchpad/gadoe (blueprint August 2025, DRAFT ALDs October 2025, rubric August 2026, Writer's Checklist 2026).
Audit findings: PP-003-SOURCE-VERIFICATION.md §6 (#1-#14), PP-003-REPOSITORY-INVENTORY.md §1, §4, §5, PP-003-ASSESSMENT-ALIGNMENT.md (E1/E2/E3 findings), work/notes-foundations.md (cross-cutting 1-3).

Gates after all changes: `node verification/check-content.js --all` gives PASS (0 failures, 9 warnings). That is down from 35, because the 26 "writing standard without a write activity" warnings caused by the GUM retag are handled (see M1). The 9 remaining warnings are clue-word warnings on items I did not touch. `python3 verification/readability.py` exits 0. `node verification/check-writing.js` gives 0 failures, 0 warnings. `node --check` passes on every edited JS file. I did not run guard.py (it takes about 20 minutes, and the lead runs it). I updated its check 5.6 (see M1).

---

## M1. GUM (3.L.GC.1) rows marked tested in both parts (High)
- **Deficiency:** all 26 GUM Master/Reinforce rows had `tested: "both"`, so the site said "Reading and Writing" for them. The claims table, SPEC §2 and the parent guide also listed 3.L.GC.1 under Interpreting Texts.
- **Why it matters:** parents were told grammar-chart skills appear in the reading part. The blueprint does not say that.
- **Official requirement:** Blueprint p.1. "3.L.GC.1* GUM" appears only in the Constructing Texts column; Interpreting lists only 3.L.GC.2 (a). Footnote: "*3.L.GC.1 skills that are assessed will come from the Master and Reinforce levels in the GUM chart."
- **Files:**
  - `verification/gen-standards.py`:
    - M/R rows are now `tested="writing"`, with a new testedNote.
    - `status` is no longer written out.
    - The header comment notes the GUM rule.
    - `OUT` is now repo-relative, with an optional path argument. It used to be hard-coded to /home/claude/peach-prep.
  - `js/data/standards.js`: changed by a checked script (scratchpad/meta/fixstd.py). Only the 26 GUM M/R rows changed, `"both"` to `"writing"`, plus their `testedNote`. The script parses the file before and after, and asserts that nothing else differs.
  - `js/data/site.js` claims: Grammar Conventions `it` is now "3.L.GC.2 (a)"; `ct` and `what` explain "writing part only, Master/Reinforce".
  - `js/parents.js`: the "What is not on the test" line now says "in the writing part".
  - `docs/SPEC.md` §2 and §3, `README.md`.
  - `verification/guard.py` 5.6: it now expects M/R = writing and I/C = no.
  - `verification/check-content.js`: the "writing standard without a write activity" warning now skips GUM rows, which are tested as editing items.
- **Verification:**
  - Re-running the generator against its external input (/home/claude/alignment/ga-grade3-ela-alignment.json) into scratch gives output **byte-identical** to the edited standards.js.
  - New tested counts: reading 27, writing 42, both 0, no 15, classroom 10, embedded 53. The on-test total is still 69.
  - Consumers checked:
    - `skills.js` `onTest` and parents.js filters accept "writing", so the rows still count as on the test.
    - The home bar still reads "of 74" (it counts lessons). The "On test" tag count on the home list is still 76. The parent filter shows 69 of 147.
    - In a browser run, the GUM row badge reads "On the test" and the detail reads "Writing (Constructing Texts)".
  - Every grammar lesson is still listed in the Grammar category, the same as before. Category placement comes from catalog.js, not from `tested`.
- **Remaining limitations:** the GUM chart itself is still unverified (I/C rows, the 4 extra R rows). The external alignment JSON still carries `status`. The generator now ignores it apart from dropping "not applicable" rows.

## M2. DRAFT ALDs shown without a DRAFT label (High)
- **Deficiency:** ALD text appeared on skill pages, in the parent "Every standard" tab and in the policy-level table, with no "draft" label. The source list said "October 2025 (effective 2025-26)".
- **Official requirement:** the ALD document is headed "DRAFT Achievement Level Descriptors", "EFFECTIVE 2025-2026 SCHOOL YEAR", and says it is "subject to revisions during the standard setting process". GaDOE Insights (https://georgiainsights.gadoe.org/dashboards/georgia-milestones/, checked 2026-10-20 by the source-verification agent) says results come "in late fall 2026 following standard setting".
- **Files and changes:**
  - `js/skills.js`: the skill-page heading is now "What Proficient work looks like (GaDOE's DRAFT Achievement Level Descriptors, October 2025, for all of X; GaDOE may revise them after standard setting in late fall 2026)".
  - `js/parents.js`:
    - The same DRAFT label is on the Proficient heading.
    - "Distinguished (same draft):".
    - The policy-level intro names the DRAFT and the standard setting.
  - `js/data/site.js`: `sources.alds` title is "DRAFT Achievement Level Descriptors…", with date "GaDOE draft, October 2025, for 2025-26; it may change after standard setting in late fall 2026".
  - `docs/SPEC.md` §1:
    - The heading is now "Sources (official; currency as of the dates shown)".
    - The ALD row is marked DRAFT.
    - A new "Standard setting (re-check date)" paragraph says to re-check in December 2026.
- **Verification:** in the browser, both headings still contain "What Proficient work looks like", so guard 5.5 still matches, and both now show DRAFT.
- **Remaining limitations:** when GaDOE publishes final ALDs, update `alds.js` and remove the draft labels.

## M3. Legacy fields
- **`status` in standards.js:**
  - Grep found no reader in js/ (only `mark(cur,"taught")`, an unrelated progress flag).
  - All 147 `status` lines were removed, and the generator no longer emits them.
  - A new check-content rule fails if `status` comes back.
- **`sections[].ready` / `soon` in site.js:**
  - `ready` had no reader.
  - `soon` was read only in an unreachable fallback in app.js:106/168, which runs when a section has no sets or tasks. All four sections have content.
  - Both fields were removed. If the fallback ever fires, app.js shows its generic "Coming soon". I did not edit app.js because it is not my file. The dead fallback, `#section-soon` and `.soon-label` CSS remain for the lead to remove if wanted.
- **Foundations "practice links":**
  - The foundations notes' real problem was the false "Not practiced on Peach Prep." fallback (fixed in M4.8), not the links.
  - The `where` lists that exist (Word Workshop / Study Scoop for 3.F.P.4.a-c and 3.F.F.1.b) point at the owner's live apps. I could not verify their content, so I left them unchanged instead of guessing.
  - Empty `where` arrays are harmless now.
  - **Limitation:** "Word Workshop: Sentence Fix" under 3.F.P.4.b and 3.F.P.4.c (decoding/encoding) looks like a weak match. The owner should confirm it.

## M4. Over-claims in parent and meta text
1. **Meta description** (`index.html`):
   - It said "every standard… each with a lesson, practice and a test", but 4 hands-on lessons have no test and the 53 Practices have no lesson.
   - Now: "a lesson with practice and a skill check for every tested standard, lessons for classroom-only skills, everyday habits, essay practice and a shortened practice test".
   - A new check-content rule fails if any on-test standard lacks a lesson with practice and test items. It passes today.
   - Also the home hero: "Each one: Learn It … Test" is now "Most have five steps: …".
2. **TE formats** (`js/parents.js` test tab):
   - It now says technology-enhanced questions are "1- and 2-point", per the blueprint footnote, which covers all TE items.
   - A separate note says Peach Prep practices drop-down, evidence-based (Part A / Part B), match, reorder, hot text (choosing sentences) and multiple-select, plus multiple choice. It "does not have drag-and-drop or other multiple-part questions yet", and Experience Online has those.
   - The engine types (items.js) are mc, ms, ebsr, dropdown, hottext, order and match.
3. **"Standard:" label:**
   - parents.js now says "Georgia's standard, paraphrased: …".
   - On the skill page, the summary "Georgia's wording" became "Georgia's standard". Each line is labelled "(paraphrased)", and the quotation marks around the paraphrase were removed (`js/skills.js`).
4. **"The test provides reasons":**
   - The rubric's Trait 2 score descriptions say "elaborating on the provided reasons", its bullets say "Provides reasons", and the checklist says "provide reasons that support my opinion".
   - site.js rubric bullet: "The prompt may give the reasons; either way, the writer supports each reason with information from the sources."
   - SPEC §2 explains the mixed wording.
5. **Spelling:**
   - parents.js "What is not on the test": "Foundations … has no test questions; it is assessed in the classroom. Spelling still counts in the essay's Language Usage and Conventions trait."
   - catalog.js Foundations line: "no Milestones questions, but spelling still counts in the essay".
   - SPEC §2 too.
   - Source: rubric Trait 3 footnote ("Spelling expectations are outlined in the K–5 Foundations Domain as part of the Phonics Big Idea"), and checklist item 11.
6. **Merged 8 points:**
   - site.js `claimPoints`: "8 for Techniques and Research & Analysis together (the blueprint prints one shared number for these two)".
   - SPEC §2 table: "8 (one merged cell covering Techniques and Research & Analysis)", with Research & Analysis "(inside the 8 above)". The unsupported "(inside the writing task)" was removed.
7. **Non-scorable conditions:**
   - site.js `rubricNote` now lists all seven from the rubric footnotes: Blank, Copied, Too Limited to Score, Non-English/Foreign Language, Off Topic, Offensive, Illegible/Incomprehensible.
   - It says the code sits in the rubric's 0 column, instead of "no score". This shows in the parent essay tab and the writing score tab.
   - SPEC §2 too.
8. **"Not practiced on Peach Prep."** (parents.js, formerly lines 183-184):
   - The old fallback fired whenever fewer than 2 links existed.
   - Now: a code with a lesson gets no extra note. A Practice with a habit page gets "Home activities only. Peach Prep has no questions for this practice; GaDOE builds the practices into other questions." A code with neither gets "No Peach Prep lesson for this yet."
   - The browser shows the right text for 3.F.F.1.c (lesson link, no false note) and K-12.P.EICC.1.a (habit link plus the home-activities note).
9. **Lesson link label:**
   - It now uses the lesson's actual steps through a new export, `PP_SKILLS.stepNames(key)`, which wraps the existing `stepsFor`.
   - 3.F.F.1.c shows "Learn It, Watch Me, Practice, Check". 3.F.P.4.a shows the five steps.
   - Practices link to "Peach Prep habit page: what it looks like and ideas to try at home".
10. **Habit pages:**
    - "use it inside every skill on this site" is now "Many skills on this site use this habit; the ideas below practice it at home." (skills.js).
    - The skills.js `embedded` tag line ("used in every skill") was softened the same way.

Extra items from SOURCE-VERIFICATION §6 in the same files:
- #9: DOK 4 is now "(likely the writing task)", and the parent tab says the level descriptions are ours.
- #10: a 5.L.V.3 (e) typo note is in the Vocabulary claims cell.
- #13: the Experience Online path is updated.
- #14: "scored in two parts (domains)".
- The `no` tag text said "being introduced" for Continue rows too. It now says "an Introduce or Continue skill".
- site.js plan steps 1 and 2 no longer say "home lists every Georgia standard" or "the five steps" for every skill.

## M5. Practice Test 1
- **Shortened label** (`js/data/sets/PT-1.js`; Read before Edit, and the typo fix by another agent was untouched):
  - Title: "Practice Test 1 (shortened)". This shows on the card, as the player header (the start screen), and in the parent guide's set links.
  - Blurb: "A SHORTENED practice test … 24 … questions worth 31 points, with no essay. The real Grade 3 test has 60 points, including an 8-point essay."
  - Results (`js/engine/player.js` `submit()` only): for `kind: "form"` there is a note: "This was a SHORTENED practice test: 24 questions and 31 points, with no essay. The real Grade 3 test has 60 points, including an 8-point essay. This is a practice score, not a Georgia Milestones score." The numbers are computed from the set.
- **Research & Analysis in results:**
  - The old grouping used only `std[0]`.
  - Each item now counts once under every distinct area its `std` codes map to. A note appears when any item spans two areas: "Some questions check two areas, so they count in each one. The area scores add up to more than the total."
  - In the browser, PT-1 results now include "Using evidence and sources … of 9" (from PT-1-3, 7, 10, 14, 17).
  - `res-of` keeps the "of N points" format that guard reads.
- **Limitation:** overlapping area totals are a design choice. The lead may prefer a primary-plus-secondary display.

## M6. Writing tasks (`js/writing.js`)
- **Evidence key:**
  - The "For parents" score tab now has a collapsible "Where the support is in the sources" inside the Evidence and Elaboration trait.
  - It is grouped by provided reason, with each entry as "Source N, “Title”, paragraph P, sentence S: note", built from the task's `evidence` refs. Neither task has headings, so the paragraph numbers are the array positions.
  - Verified in the browser for W-TASK-01.
- **Home-score line:** "This is a home score for practice, not an official Georgia Milestones score." It sits under the total.
- No task data files were changed.

## M7. Home and catalog (`js/skills.js`)
- **Writing card:**
  - `catStats` now also returns `essays`.
  - The card line reads "Next: … · +2 essays", and the aria-label adds "Plus 2 essay tasks, scored by a grown-up."
  - Essays are kept out of the mastery ring, because they cannot be mastered.
  - I used the existing `.cc-next` span so the mobile grid layout (grid-areas) is unaffected. There is no sideways scroll at 320px.
- **Grammar list:** `shortCode` now shows "Grammar chart: Master / Reinforce / Introduce / Continue" instead of a repeated "3.L.GC.1". Search still matches "3.L.GC.1", because the full code is in the search text.

## M8. Docs
- SPEC §7: guard.js → guard.py.
- SPEC §5: the GUM code format is `3.L.GC.1:<level>:<slug>`, with a real example (`3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs`, confirmed present).
- SPEC §1: the standard-setting note.
- SPEC §3: the Practice Test row requires the "shortened" labelling. The Language row says GUM is writing-only.
- SPEC §8: a "partly superseded, see §8b" note.
- README:
  - The Structure section adds skills.js, catalog.js, habits.js, lessons/, and what manifest.js really controls.
  - ALDs are marked DRAFT.
  - The Practice Test is described as shortened.
  - Language is described as writing-only for GUM.

## M9. New automated consistency checks (`verification/check-content.js`)
- A block was inserted before the summary output; another agent's figure check can still be appended. It adds:
  - a blueprint table (`BP_IT` / `BP_CT`, transcribed from blueprint p.1, with the 5.L.V.3 (e) typo read as 3.L.V.3 (e)). Every listed expectation must exist in standards.js with the matching reading/writing/both flag. Any lettered 3.T/3.L code the blueprint does not list must be "no".
  - GUM M/R = writing; GUM I/C = no.
  - Foundations = classroom; Practices = embedded.
  - no `status` field.
  - every lesson code exists in standards.js. This is a whole-site restatement; the per-lesson rule already existed.
  - every catalog key resolves to a lesson or task, with no duplicate keys. A lesson missing from the catalog gives a warning.
  - every on-test standard has a lesson with practice and test items. This backs the new meta description.
- **Negative test:** on a scratch copy I mutated standards.js (a GUM row set to both, a reading code set to writing, a `status` field added) and catalog.js (an unknown key, an unknown task). Every rule fired as a FAIL. The real tree passes.

---

## For the lead / other agents
- guard.py: I changed only check 5.6. Please run the full guard. Check 9.2 and 5.4 compute "on the test" with `['reading','writing','both']`, so they should be unaffected.
- app.js still holds the dead `soon` fallback, which is generic now. It is optional to remove.
- The external alignment JSON (/home/claude/alignment/…) still has `status`. It is harmless because the generator drops it.
- The owner should confirm the external `where` app links (Word Workshop / Study Scoop / Sentence Sense). I did not audit them.
- Not done: SOURCE-VERIFICATION #12 (click-testing the five lor2 links). That needs a human.

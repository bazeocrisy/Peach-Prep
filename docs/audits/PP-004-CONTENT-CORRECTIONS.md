# PP-004 content corrections

**Branch:** `pp-003-fixes` (draft PR #3). PP-004 started at 4ed5d0b.

Each change has a full entry in its author's log in `docs/audits/work/`, with the deficiency, the official requirement (code, exact wording and PDF page), the files and item IDs, the verification, and what remains. This page groups the corrections. It does not repeat the entries.

| Log | Scope |
|---|---|
| `pp004-standards.md` | Official standards verification; standards.js wording; generator; checks; UI shows the official wording |
| `pp004-context.md`, `pp004-research.md`, `pp004-gapfix.md` | The four assessed gaps: 3.T.C.1.b, 3.T.C.2.c, 3.T.RA.1.b, 3.L.GC.2.a |
| `pp004-lessonfix.md` | Fixes from the lesson-quality audits (Ltexts-*, LL-*), and five lessons realigned to the corrected official wording |
| `pp004-setfix.md` | Fixes from the cold-solve sample in PT-1, R-OPN-01, W-REV-02 and L-GUM4 |
| `pp004-foundations.md` | Foundations (3.F.*) |
| `pp004-writing.md` | Writing tasks W-TASK-01 and W-TASK-02 |
| `pp004-forms.md`, `pp004-formB-*.md` | The form B architecture and 13 form B checks |
| `pp004-reviewfix4.md`, `pp004-rc3fix.md` | Fixes from the independent form B and changed-item reviews |
| `pp004-afix.md` | Fixes from the standards reviewer: 3.L.V.3.d, the GUM "speaking" rows, habit cards, opinion, perspective and elaboration |
| `pp004-dfix.md` | Accessibility fixes, plus the beaver caption |

## 1. Standards metadata (Priority 1)
- All 106 grade 3 expectations and all 41 GUM rows were checked against the May 2023 Grades 3–5 standards PDF. The codes match in both directions, and all 8 "progression begins later" placeholder codes are correctly absent.
- The GUM chart matches: Master 8, Reinforce 18, Introduce 11, Continue 4. The four rows PP-003 left UNVERIFIED are confirmed Reinforce on PDF p. 15.
- In 60 records the paraphrase in `text` had changed the official meaning. Each was corrected to the official wording.
- Every record gained `official` (verbatim) and `page` fields. The skill page and parent guide now show the official wording with its page.
- New checks in `check-content.js` enforce codes, wording, page and GUM levels.

## 2. The four assessed gaps (Priority 2)

| Code | What was missing | What was added | Independent verification |
|---|---|---|---|
| 3.T.C.1.b | No check of bold print; digital and audio features described only in words | A bold-print check item (SK-TC1b-T7); three original web-page figures (frog, beaver, monarch); a video caption-line figure and a sound check item (SK-TC1b-T9); digital-feature items in Together and Try | Gap review AB, gap review C; C2 re-solved all 13 items blind (13/13); A round 1 |
| 3.T.C.2.c | Individual and situational context not independently checked | Both taught and modeled. Practice in both halves. Check items T7 (individual) and T6 (situational). Text boxes render as real boxes | Gap review AB (VERIFIED COMPLETE), C, C2 |
| 3.T.RA.1.b | No digital source, no note-taking, no credibility | Web-page sources from an extension office and a science museum; a notes-table figure and write box; relevant vs. irrelevant items; a credible-source teach point and check item (SK-RA1b-T8) | Gap review AB, C, C2; A round 1 |
| 3.L.GC.2.a | Only isolated sentences | Two student drafts, each with one fragment and one run-on; simple, compound and complex sentences in context; 3 of 6 check items embedded in a passage | Gap review AB (all 22 sentences classified independently), C, C2 |

## 3. Lesson quality and alignment (Priority 4)
- **Lesson audits.** 84 lessons were audited (Texts and Language), finding 3 MUSTs and 22 SHOULDs. All were fixed. The MUSTs were:
  - a leftover off-topic sentence in the 3.T.SS.1.b test passage that contradicted two keys
  - the TS-PS rule about where "but" goes, which was wrong
  - an end-punctuation key that was a comma splice
- **Realignment to the corrected official wording.** Five lessons were rewritten to match:
  - 3.T.C.2.a: different perspectives
  - 3.T.T.1.d: comparison across cultures is no longer optional (a new Oaxaca story)
  - 3.L.GC.2.d: elaboration
  - 3.T.SS.2.b: figurative language beyond simile and metaphor
  - 3.T.T.4.b: engaging an audience
- **Fixes from the standards reviewer.**
  - 3.L.V.3.d gained digital dictionaries (three original app-screen figures) and phrase lookups.
  - The three GUM "when speaking" rows gained a grown-up-led "Say it out loud" card. It stores only a new `speakChecks` field and never affects passing.
  - Four habit cards gained the missing parts of their official wording.
  - The opinion (3.T.T.3.a and 3.T.T.3.c), perspective and elaboration items were strengthened.

## 4. Foundations (Priority 5)
- **Encoding.** Parent-led dictated spelling lists with an error routine. The screen is turned away; there is no text-to-speech and no recording.
- **Decoding.** Read-aloud lists for 3.F.P.4.a–c.
- **Affixes.** dis-, -ful and -less taught, with practice and check items.
- **High-frequency words.** 3.F.F.1.a items now test reading rather than spelling choice, plus a parent quick-read list.
- **Fluency.** Coaching routines for accuracy, expression, self-correction and rereading. The parent notes say plainly that browser questions cannot measure spoken fluency.

## 5. Writing (Priority 6)
- Model essays corrected where they overstated the sources.
- W-TASK-02's source no longer claims cause and effect.
- Original example essays at 2, 4 and 6 points, scored trait by trait. They are labelled as Peach Prep examples, not official anchor papers.
- Step-by-step parent scoring.
- "Spell-check is off here" (no claim about the real test).

## 6. Assessment items
- **Form B checks.** 13 lessons now have an independent second check: 3.L.GC.2.b, 3.T.T.1.a, 3.T.T.1.c, 3.T.SS.2.a, 3.T.T.4.a, 3.T.T.2.a, 3.T.T.2.b, 3.T.RA.2.a, TS-CE, 3.L.V.3.a, 3.L.V.2.a, GUM irregular plurals and GUM irregular past tense. Each has new passages and stems and the same point total as form A. Each was reviewed and revised through independent rounds C1, C3 and C4.
- **Cue and giveaway fixes:**
  - PT-1-13, PT-1-8 and PT-1-6
  - R-OPN-01-2
  - SK-TSPS-P2
  - SK-TC2c-P7
  - several form B items
- **DOK corrections:** more than 10 items lowered from 3 to 2, each one logged.

## 7. Content removed (each with a documented reason and a replacement)
The IDs are listed in each log. No removed ID is referenced in `js/`, `verification/` or `index.html`.

| Lesson | Removed items |
|---|---|
| 3.T.C.1.b | P7, T1, T4, T5 |
| 3.T.C.2.c | P3, P5, T5 |
| 3.T.RA.1.b | P2, T2, T4 |
| 3.L.GC.2.a | P5, P6, T4, T5 |
| 3.L.V.3.d | T5 |
| 3.T.C.2.a | T1 |
| 3.T.T.3.c | T3 |

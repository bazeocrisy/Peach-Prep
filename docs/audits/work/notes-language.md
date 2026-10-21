# PP-003 matrix notes: Language slice

Slice: 3.L.GC.2 (a–d), every grade 3 GUM chart row under 3.L.GC.1 (41 rows), and 3.L.V (1.a–3.e).
Output: `docs/audits/work/matrix-language.csv`, 55 rows. Audited 2026-10-20 against v2.1.0 (branch `pp-003-audit`).

## Totals

| coverage_status | rows |
|---|---|
| VERIFIED COMPLETE | 33 |
| PARTIAL | 7 |
| NOT APPLICABLE TO MILESTONES – VERIFIED COMPLETE | 15 (4 Continue + 11 Introduce GUM rows) |
| MISSING / INCORRECT / UNVERIFIED | 0 |

Severity: High 3 (3.L.V.2.a, 3.L.V.2.c, 3.L.V.3.a). Low 9. None for the rest. No Critical findings: I found no wrong answer keys and no item with two defensible answers.

Row makeup: 18 Reinforce + 8 Master GUM rows (assessed), 4 Continue + 11 Introduce GUM rows (not assessed), 4 GC.2 rows, 10 Vocabulary rows.

## Method

- I loaded `standards.js`, the manifest and every lesson and set listed in the manifest into a Node VM with a stub `PP` (scratchpad `lang-load.js`). Counts, points, DOK and the Together/Try split come from that load, not from estimates. The split follows `js/skills.js` lines 31–35: with n ≥ 4 practice items, Together is the first ceil(n/2).
- `lesson_keys` uses the `lessonFor` logic (`L.codes || [L.code]`). Each code in this slice maps to exactly one lesson, and that lesson's key is the code itself. No lesson in another domain lists a 3.L code.
- I dumped and read the teach text, learn examples and every practice and test item for all 55 lessons. That includes the passages behind hottext items, and I checked the hottext answer references against the passage sentences. I also read every item with a 3.L `std` in L-GRM-01/02/03, L-VOC-01/02/03, PT-1, the R-* reading sets and W-REV-01/02.
- I solved the items myself. Every answer key is correct. A structural check (one correct answer per mc, correct count = pick for ms and hottext, no duplicate ids) passed. The only oddity is four 2-pick ms items worth 1 point (see below).
- Assessment status comes from the blueprint (August 2025). Proficient ALD text comes from the DRAFT ALDs (October 2025). I confirmed the ALD column positions from rendered images of pages 8–10, because the `pdftotext` layout is ambiguous.

## PARTIAL rows

### 3.L.V.3.a: images and graphs missing (High)
The official wording says "context within and beyond a sentence, **including images and graphs**". The lesson teaches definition, example, synonym, antonym and multiple-meaning clues well (7 practice + 6 test items, plus about 18 more items across L-VOC-01, R-* sets and PT-1). Images and graphs appear nowhere:
- the teach points and learn examples never mention a picture, caption, chart or graph;
- no item has a visual. `docs/SPEC.md` line 136 states "The site shows no images."
- the only mention is the parent note in `L-V3.js` line 60 ("Pictures, charts and captions in books are clues too").

The lead flagged this as taught in words only. It is actually not taught at all in the child-facing lesson. This is an assessed Interpreting Texts expectation, and Milestones passages can carry graphics, so I rate it High.

**Fix:** add a teach point and at least one practice item and one test item that use an inline SVG diagram or a simple HTML table or bar graph as the context for a word. If the site keeps its no-image rule, a text-rendered table or chart (not a caption describing a picture) would still cover "graphs".

### 3.L.V.2.a and 3.L.V.2.c: common roots missing (High, both)
Both official expectations and the Proficient ALD bullets name "common roots, root words, and affixes". The lessons cover base words (root words) and the affixes un-, dis-, re-, pre-, -ful, -less, -able, -ly, -er/-or, -ness and -ment thoroughly. Common Latin and Greek roots are never taught:
- the only "root" in the lesson files is `L-V12.js` line 382, which glosses base word as "(also called a root word)";
- `L-VOC-02-9` ("The root port means 'carry.' Which word means 'able to be carried'?") tests a root the site never teaches. The item gives the meaning in the stem, so it is answerable, but it is the only root item and it is not taught.
- `L-VOC-02-2` also uses mis- ("wrongly"), which no lesson teaches. This is minor.

I rate both High because "common roots" is an explicitly named component of an assessed expectation and of its Proficient ALD. If the owner judges grade 3 roots a small share of items, Medium would be defensible for V.2.c. I did not soften it.

**Fix:** add a "common roots" teach point with 3–5 roots (port, graph, tele, phon, rupt) to the V.2.a lesson, with deconstruction items. Add building items to V.2.c (port → portable, report; graph → autograph).

### 3.L.GC.2.a: "in texts read, heard, or viewed" (Low)
Every GC.2.a item (11 lesson items + 3 in L-GRM-03) is a stand-alone sentence. None asks the child to distinguish sentence types inside a passage, and nothing covers "heard". The Proficient ALD ("Distinguish between correctly structured simple, compound, and complex sentences") does not require passage context, and the skill is fully taught and tested, so I rate this Low.

**Fix:** add one passage-embedded hottext.

### Three Reinforce "in speech" GUM rows (Low each)
These are "use nouns and verbs to form complete thoughts in speech", "form and use singular and plural nouns in speech" and "use interrogatives to ask questions in speech". The written skill is taught and tested well (10 items each, all keys correct). The speech component appears only in the parent coaching note (an oral game), and the site has no audio or oral activity. By the spec's modality rule they are at most PARTIAL. Milestones is a written test and these rows can only be assessed through written proxies, so the gap does not affect test readiness, and I rate it Low rather than High.

**Fix (optional):** move the oral game into a lesson `activity`/`check` card so the child sees it, not only the parent.

Note: these three rows and "capitalize the first word of a sentence and I" do not appear in any column of the DRAFT ALD GC.1 table.

## Low-severity items on VERIFIED COMPLETE rows
- **3.L.GC.2.c:** the Developing ALD names agreement "in a complex sentence", and no GC.2.c item puts the agreement choice inside a complex sentence. Add one item.
- **Commas row (series/dates/addresses/salutations/closings):** the lesson tests only city and state. The full-address comma after the street appears only as a wrong distractor in L-GRM-02-5. Add one lesson test item.
- **3.L.V.3.b `SK-V3b-P6`, 3.L.V.3.c `SK-V3c-P5`, `L-VOC-02-5`, `L-VOC-03-9`:** each is a "choose TWO" ms worth 1 point. Every other 2-pick item in the slice is worth 2. Make them consistent; how the player scores partial credit should be confirmed.
- **3.L.V.3.d `SK-V3d-T5`:** the stem says Pablo uses a dictionary to check spelling, but the item only asks for the correct spelling of "finished" and shows no entry or guide words. The spelling-check component is taught and touched in P5 but weakly tested.

## Discrepancies between the site and the GaDOE sources
1. **GUM "tested" flag:** standards.js marks every Master and Reinforce GUM row `tested: "both"` (testedNote "Assessed (GUM Master/Reinforce row)"). The blueprint places `3.L.GC.1* GUM` only in the Constructing Texts column. I noted this in the evidence for each of the 26 rows. The flag should probably be `writing`.
2. **Stale `status` fields in standards.js:** for example 3.L.V.2.a, 3.L.V.3.c, 3.L.V.3.d and 3.L.V.3.e are `"not yet"`, and V.1.b, V.3.a, V.3.b, V.2.b, V.2.c, GC.2.a, GC.2.b and GC.2.d are `"partly"`. Live lessons now exist for all of them. These fields appear to describe the external apps listed under `where` (Sentence Sense, Word Workshop), not Peach Prep. I did not check how the UI uses `status`.
3. **Blueprint typo:** the Constructing Texts column lists "5.L.V.3 (e)". I read it as 3.L.V.3 (e).
4. **ALD typo:** the DRAFT ALD heads the grammar table "3.LG.GC.1".
5. **ALD placement of Reinforce rows:** Reinforce GUM rows sit in the Beginning and Developing columns, and only the Master rows sit under Proficient. The CSV quotes each row's column and notes that ALDs are cumulative.

## DOK
Grouped across practice and test items:

| Group | DOK 1 | DOK 2 | DOK 3 |
|---|---|---|---|
| GUM Master/Reinforce | 86 | 174 | 0 |
| GC.2 | 1 | 41 | 2 |
| Vocabulary | 21 | 84 | 0 |

The blueprint expects 40–60% of points at DOK 2 and 20–35% at DOK 3 across the whole test, so language items contribute almost nothing to DOK 3. The Extended Writing task covers conventions at a higher DOK. This is a test-wide balance issue rather than a row gap, so I did not change any row status for it.

## What I did NOT check
- I did not render anything in a browser and did not start a server (port 8443 was unused). Counts come from the data, not the screen. I did not confirm how the player displays hottext passage sentences or partial-credit scoring.
- I did not run the gates (`check-content.js`, `readability.py`, `guard.py`).
- I did not diff the official wording in standards.js against the official standards PDF (assigned to another agent).
- **I did not check that the 41 GUM rows match the official K-12 GUM chart**, because no GUM chart source is among the uploaded files. Also, the C/I rows tagged "Continue" might be "Master" in the official chart; standards.js could not be cross-checked.
- I did not check the external `where` apps (Sentence Sense, Word Workshop).
- I did not check the W-TASK rubric scoring of conventions, beyond confirming that W-TASK-01/02 list 3.L.GC.2.b and 3.L.GC.2.c in `std`. Neither task lists GC.2.d or any GC.1 row, although the Language Usage and Conventions rubric trait covers them.
- I made no web fetches, so no external URLs are cited. All facts come from the repo and the uploaded GaDOE files.

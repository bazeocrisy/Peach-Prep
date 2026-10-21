# PP-004 Foundations review (3.F.*)

Date: 2026-10-20. Reviewer: the foundations agent (PP-004). Change log: `docs/audits/work/pp004-foundations.md`.

**Source:** "Georgia's K-12 English Language Arts Standards: Foundations, Language, Texts, & Practices, Grades 3-5" (approved May 2023). I read PDF pp. 4-11 as page images. On p. 4, the Phonological Awareness and Concepts of Print big ideas and standards F.P.1-3, F.H.1 and F.H.2 are marked "This big idea / standard only applies to the K-2 grade band". That leaves the 10 grade 3 expectations below. The `official` field in `js/data/standards.js` matches the PDF wording for all 10.

**Milestones status:** The GaDOE Grade 3 ELA Assessment Blueprint (Aug 2025), p. 1, says Foundations is "appropriate for classroom assessment only". Every row below is therefore **classroom-only**: nothing here is tested on the Milestones, and none of it counts toward the site's on-test mastery count.

**What "VERIFIED COMPLETE" means here:** every component of the official wording is taught, and is practised by an on-site activity or a specific grown-up routine. For components that are oral or done on paper, the evidence is a grown-up's observation, which the site does not record as a score. Browser multiple-choice is never treated as a measure of spoken fluency.

**Mechanisms:** I used only the SPEC §8/§8b lesson fields (teach, learn, practice, test, parent, write, coach, check). No engine JS was changed. The engine proposals E1-E5 are in the change log.

---

## 3.F.P.4.a: classroom-only, PARTIAL

| | |
|---|---|
| Official wording (p. 7) | "Decode and encode words with graphemes that represent multiple letter-sound correspondences." |
| What was there | Teaching on ea (3 sounds), ow (2), hard and soft c and g, with ough mentioned. 7 practice and 6 test items, all keys correct. Encoding only by choosing the correct spelling (P7, T6). Oral decoding never heard. Parent sound-sort tip. |
| What is now there | Teaching adds oo (moon/book) and ou (out/soup). A new "Read it, then spell it" box in Try It Yourself has: <br>• a 12-word read-aloud list for the grown-up to hear, with a "try the other sound" prompt;<br>• a 10-word dictation with sentences (screen turned away, child writes on paper), covering ea, ow, soft and hard c, soft g, oo and ou;<br>• an error routine: circle the part, name the pattern, write it 3 times, note it in the box, retest in 2-3 days, and return to Watch Me if more than 3 words are missed.<br>The parent note says the site cannot hear reading or see writing. |
| Remaining gaps | Other multi-sound graphemes (ie/ei, ch, s=/z/, y as a vowel) are not taught. Read-aloud and dictation results are not recorded in a structured way (E1). |

## 3.F.P.4.b: classroom-only, VERIFIED COMPLETE

| | |
|---|---|
| Official wording (p. 7) | "Decode and encode single-syllable and multisyllabic words of all syllable types." |
| What was there | All six syllable types taught. Division rules taught: VCCV, VCV (try open first), C-le. Practice and test cover division, types and order (P1-P6, T1-T5). Encoding was recognition only (P7, T6). Reading never heard. |
| What is now there | Everything above, unchanged, plus a "Read it, then spell it" box:<br>• a 10-word multisyllabic read-aloud list (up to three syllables, e.g. cucumber, thunderstorm) with a finger-sliding syllable prompt;<br>• a 10-word dictation: 2 single-syllable words, then muffin, silent, invite, rainbow, corner, puddle, maple, volcano, which between them use all six syllable types (closed, open, VCe, vowel team, r-controlled, C-le);<br>• an error routine that uses syllable type to locate the mistake (mapple → open "ma"; pudle → closed "pud"). |
| Remaining gaps | Oral reading and dictation are observed by a grown-up and not recorded as a score (E1). |

## 3.F.P.4.c: classroom-only, PARTIAL

| | |
|---|---|
| Official wording (p. 7) | "Decode and encode words with common prefixes and suffixes." (No specific affixes are named.) |
| What was there | re-, un- (and the uncle/under trap), -ed, -ing, -ly. Spelling changes: drop e, double the consonant, y to i. Encoding was recognition only. 6 practice and 5 test items. |
| What is now there | Teaching adds:<br>• dis- (and the dish trap), mis- and pre-;<br>• -ful (one l) and -less;<br>• keep the silent e before a consonant suffix.<br>New items: **SK-FP4c-P7** (match the meanings of dis-/un-, -ful and -less) and **SK-FP4c-T6** (ms: useful and careless are spelled correctly). The test is now 6 items and 9 points. A new "Read it, then spell it" box has a 12-word affixed read-aloud list and a 10-word dictation (hopping, hoping, baking, cried, replayed, unfold, dislike, careful, helpless, happily), with an error routine that names the rule each word needs. |
| Remaining gaps | mis- and pre- are taught but have no scored item. -er/-est and -s/-es are not in this lesson (not audited elsewhere). Dictation results are not recorded (E1). |

## 3.F.F.1.a: classroom-only, PARTIAL

| | |
|---|---|
| Official wording (p. 9) | "Increase sight word vocabulary by reading regularly and irregularly spelled words in isolation and context with accuracy and automaticity." |
| What was there | Teaching on tricky parts and look-alikes. 8 of the 12 items (P1-P5, T1-T3) asked "which spelling is correct". That is encoding, not reading. Automaticity appeared only in a flash-card tip. Regularly spelled sight words had no items. |
| What is now there | The spelling items were replaced with reading items:<br>• Irregular words in isolation: which word rhymes with were / done / four / touch (P1, P2, T1, T2); sort by vowel sound (P4: who, love, two, month, do; T3: one, none, alone, shown).<br>• Regular sight words in context: wait/by (P3).<br>• Irregular words in context: won/own/now (P5).<br>• Kept: the look-alike context items saw/was, form/from, Where/Were, of/off.<br>Teach and learn now model reading (come/home rhyme trap; then/them, went/want misreading). A new "Quick-read list" box: 12 irregular and 10 regular words, then 3 sentences. The grown-up listens; "in a snap" means about a second without sounding out; missed words are practised daily; an optional stopwatch with "no grade-level target". The parent note says plainly that the questions cannot check how quickly a child reads a word aloud. |
| Remaining gaps | Automaticity is observed only by the grown-up; there is no structured record (E2). The rhyme and context items measure knowledge of how a word is said and accurate discrimination. They do not measure speed. |

## 3.F.F.1.b: classroom-only, VERIFIED COMPLETE

| | |
|---|---|
| Official wording (p. 9) | "Read a variety of unfamiliar grade-level texts with increasing accuracy." |
| What was there | The read-aloud timer: 4 unpracticed passages (2 stories, 2 informational). The grown-up taps errors and self-corrections. It computes words correct per minute (WCPM) and accuracy, saves the last 12 readings and shows the last 5. It is labelled "A home practice tool, not a school reading test". A 4-line grown-up Check. No step-by-step routine. |
| What is now there | The same timer and Check, plus:<br>• a 5th Check line: accuracy on new passages stayed at about 95% or better, or went up, over two or more weeks;<br>• a coaching routine (mix-up, strong / not yet, I do / We do / You do, everyday): a 3-second wait, then "What part do you know?", then a retell, with a never-seen page from a different kind of text each week. |
| Remaining gaps | The passages are home-made and not calibrated (the timer says so). Grown-up observation sets the shared `mastered` flag with `passBy: "grownup"` (the existing PP-003 design). |

## 3.F.F.1.c: classroom-only, VERIFIED COMPLETE

| | |
|---|---|
| Official wording (p. 9) | "Read a wide range of grade-level texts aloud with appropriate prosody (phrasing, expression, juncture/pause, and intonation) to aid comprehension." |
| What was there | Teaching on phrasing, punctuation pauses, intonation and character voices. The timer in practiced mode, with optional per-reading notes from the grown-up: expression (1-3) and pauses. A 5-line Check. Nothing on "to aid comprehension". The range was limited to two dialogue passages. |
| What is now there | A 6th Check line: "After reading, told what happened and how one character felt." A coaching routine: <br>• I do: model expressive reading against a flat "robot" reading;<br>• We do: echo reading, then choral reading;<br>• You do: repeated reading, then a timed reading with notes and a retell;<br>• everyday: poems, fact pages and stories, with a real audience. |
| Remaining gaps | The practiced-mode timer still offers only passages 5-6. The range of texts relies on the grown-up's own books, guided by the routine. |

## 3.F.F.1.d: classroom-only, VERIFIED COMPLETE

| | |
|---|---|
| Official wording (p. 9) | "Self-correct while reading grade-level text (silently or aloud) to aid comprehension and fluency, rereading as necessary." |
| What was there | Teaching on monitor, check letters, use context, reread. 10 items using another reader's miscue transcripts (all keys correct). The 3.F.F.1.b timer counts the grown-up's second taps as self-corrections. Silent reading was not addressed. |
| What is now there | A coaching routine with a prompt ladder: wait to the end of the sentence, ask "Did that make sense?", point to the sentence, then point to the word. Also: praise the fix, and reread when the child cannot retell. A new silent-reading "Fix-up log" box: the child writes each word they fixed and each page they reread, then tells a grown-up the gist. The parent note says honestly that the items use other readers' mistakes, and points to the timer's self-correction count. |
| Remaining gaps | The Fix-up log is the child's self-report, kept on the device. |

## 3.F.H.3.a: classroom-only, VERIFIED COMPLETE (no change in PP-004)

| | |
|---|---|
| Official wording (p. 11) | "Read phrases and sentences written in cursive." |
| What was there | Cursive phrases and sentences in Playwrite US Trad, a joined school cursive. 5 practice and 5 test items (PP-003 audit). |
| What is now there | Unchanged. |
| Remaining gaps | Only one typeface; no real handwriting samples. |

## 3.F.H.4.a: classroom-only, VERIFIED COMPLETE (no change in PP-004)

| | |
|---|---|
| Official wording (p. 11) | "Practice forming cursive letters and connectors in words." |
| What was there | A printable tracing sheet: letter families, joined words and capitals. A 5-line grown-up Check. |
| What is now there | Unchanged. |
| Remaining gaps | Print output not tested. |

## 3.F.H.4.b: classroom-only, VERIFIED COMPLETE (no change in PP-004)

| | |
|---|---|
| Official wording (p. 11) | "Use appropriate spacing between cursive words in a sentence." |
| What was there | Spacing rule (about one "o"). Tracing sentences. A 4-line Check. The PP-003 fix added `word-spacing:.3em` (css/styles.css:623). |
| What is now there | Unchanged. |
| Remaining gaps | I did not re-measure the spacing in PP-004. |

---

## Summary

| Code | Status (all classroom-only) | Changed in PP-004 |
|---|---|---|
| 3.F.P.4.a | PARTIAL | teach (oo/ou), write box |
| 3.F.P.4.b | VERIFIED COMPLETE | write box |
| 3.F.P.4.c | PARTIAL | teach, P7, T6, write box |
| 3.F.F.1.a | PARTIAL | teach, learn, P1-P5, T1-T3 replaced, write box |
| 3.F.F.1.b | VERIFIED COMPLETE | coach, Check line 5 |
| 3.F.F.1.c | VERIFIED COMPLETE | coach, Check line 6 |
| 3.F.F.1.d | VERIFIED COMPLETE | coach, write box, parent |
| 3.F.H.3.a | VERIFIED COMPLETE | none |
| 3.F.H.4.a | VERIFIED COMPLETE | none |
| 3.F.H.4.b | VERIFIED COMPLETE | none |

**For the lead:** the PP-003 matrix rows for 3.F.* paraphrase the official wording in the "official" column (for example "containing" for "with" in 4.a, and "pauses" for "juncture/pause" in 1.c). The verbatim text is in `standards.js` `official` and in the tables above.

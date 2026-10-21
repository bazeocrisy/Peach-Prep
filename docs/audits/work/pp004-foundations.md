# PP-004 change log: foundations (3.F.*)

Agent: foundations. Port: 8485. Files edited: `js/data/lessons/F-PF.js`, `js/data/lessons/F-FH.js`, this log and `docs/audits/PP-004-FOUNDATIONS-REVIEW.md`. I did not edit any JS engine file and ran no git commands.

Official source: "Georgia's K-12 English Language Arts Standards: Foundations, Language, Texts, & Practices, Grades 3-5" (approved May 2023). I read PDF pp. 4-11 as page images (not only the text extraction). The wording quoted below is copied from those images. It matches the `official` field in `js/data/standards.js` for all 10 codes.

Mechanisms used (SPEC §8/§8b only): `teach`, `learn`, `practice`, `test`, `parent`, `write` (prompt + checklist + box), `coach` (mixup/strong/notyet/ido/wedo/youdo/everyday) and `check.items`. In the engine (`js/skills.js`), a `write` box appears in **Try It Yourself** whenever a lesson has a Try set, and in Practice otherwise. All four phonics and sight-word lessons have Try sets, so the new lists appear in Try It Yourself. `check` renders only when a lesson has no test set.

Stored progress: none of these changes alters what `pp.progress.v1` means. New check-list lines were appended at the end, so the existing `checks[i]` indices keep their meaning. Item IDs were reused where items were replaced in place, as in earlier fix rounds; nothing stores per-item data. The 3.F.F.1.a test maximum is unchanged (6 points). The 3.F.P.4.c test grows from 7 to 9 points, and `bestText` already labels older best scores "(on an earlier version of this check)".

---

## C1. 3.F.P.4.a: dictated spelling, a read-aloud list, and oo/ou

- **Deficiency:** Encoding was checked only by recognition (choose the correct spelling: P7, T6). Oral decoding was never heard. The graphemes covered were ea, ow, c and g, and ough was only mentioned.
- **Official requirement:** 3.F.P.4.a, "Decode and encode words with graphemes that represent multiple letter-sound correspondences." (PDF p. 7)
- **Change:**
  - `teach.points[4]` now teaches oo (moon/book) and ou (out/soup) and keeps the ough note.
  - New `write` box, "Read it, then spell it":
    - Part 1 is a 12-word read-aloud list (instead, steak, beast, meadow, flower, elbow, fancy, magic, gerbil, cloud, group, wooden), with a prompt for when a word comes out wrong ("What other sound can those letters make?").
    - Part 2 is a 10-word grown-up dictation with a sentence for each word: breath, teach, crowd, shadow, circus, bounce, gentle, cage, spoon, cook. The grown-up turns the screen away and the child writes on paper.
    - Error routine: circle the part that is wrong, name the pattern, write the word correctly 3 times while saying the letters, note it in the box, and retest in 2-3 days. If more than 3 words are missed, go back to Watch Me.
    - Four-line checklist.
  - `parent` mentions oo, points to the lists, and says the site cannot hear reading or see writing.
- **Verification:** I checked every word's pattern by hand:
  - ea: breath, instead and meadow are short e; teach and beast are long e; steak is long a.
  - ow: crowd and flower say /aʊ/; shadow and elbow say long o.
  - c and g: circus has a soft c before i and a hard c before u; bounce and fancy have a soft c; gentle, cage, gerbil and magic have a soft g, and the c in magic is hard.
  - oo: spoon says /u/; cook and wooden say /ʊ/.
  - ou: cloud says /aʊ/; group says /u/.
  - No TTS, no speech recognition, no recording.
- **Remains:** The site does not record the child's results; only the child's self-checklist and the grown-up's box are kept, on the device. Other multi-sound graphemes (ie/ei, ch, s=/z/, y as a vowel) are still not taught.

## C2. 3.F.P.4.b: dictated spelling across all six syllable types, and a read-aloud list

- **Deficiency:** Encoding was recognition only (P7, T6), and reading of the split words was never heard. Syllable division was already taught (VCCV, VCV open-first, C-le), practiced and tested (P1, P3, P5, T1, T4). I kept it unchanged.
- **Official requirement:** 3.F.P.4.b, "Decode and encode single-syllable and multisyllabic words of all syllable types." (PDF p. 7)
- **Change:** New `write` box.
  - Part 1 read-aloud words: hamster, tadpole, fifteen, tiger, cabin, beetle, cactus, explode, cucumber, thunderstorm. There is a finger-sliding prompt for when a word stops the child.
  - Part 2 dictation: shrimp, stripe (single-syllable, closed and VCe), muffin, silent, invite, rainbow, corner, puddle, maple, volcano. The child claps each word, then writes it a syllable at a time.
  - The error routine uses syllable type to find the mistake. Examples: "mapple": the a is long, so the syllable is open, ma, with one p. "pudle": the u is short, so the syllable is closed, pud.
  - `parent` updated.
- **Verification:** Syllable types checked by hand:

  | Word | Split | Types |
  |---|---|---|
  | muffin | muf/fin | closed + closed |
  | silent | si/lent | open + closed |
  | invite | in/vite | closed + VCe |
  | rainbow | rain/bow | vowel team + vowel team |
  | corner | cor/ner | r-controlled + r-controlled |
  | puddle | pud/dle | closed + C-le |
  | maple | ma/ple | open + C-le |
  | volcano | vol/ca/no | closed + open + open |

  All six types are covered.
- **Remains:** Oral reading is not recorded. Unstressed syllables (the "lent" in silent) have a schwa. Nothing in the lesson claims a particular vowel sound for them.

## C3. 3.F.P.4.c: dis-, -ful, -less (and mis-, pre- in teaching), dictation, and a read-aloud list

- **Deficiency:** The lesson covered only re-, un-, -ed, -ing and -ly. There was no dis-, -ful or -less, and encoding was recognition only.
- **Official requirement:** 3.F.P.4.c, "Decode and encode words with common prefixes and suffixes." (PDF p. 7). The official text names no specific affixes. I chose the additions as high-frequency grade 3 affixes.
- **Change:**
  - `teach.points`:
    - dis- (not/opposite), mis- (wrongly) and pre- (before).
    - -ful (full of, spelled with one l) and -less (without).
    - "dis in dish is not a prefix".
    - Keep the silent e before a consonant suffix (hope → hopeful), and drop it before a vowel suffix.
  - `teach.words` and `example` gained "dis + agree" and "pain + ful / pain + less".
  - New **SK-FP4c-P7** (match, 2 points, DOK 2, a Try item): disobey and unfair → not; joyful → full of; fearless → without.
  - New **SK-FP4c-T6** (ms, 2 points, pick 2): useful ✓, careless ✓, usful, colorfull, homless. This is the encoding rule for consonant suffixes.
  - New `write` box:
    - Read-aloud words: disagree, unpacked, thankful, careless, rewriting, unlucky, disappear, spotless, playful, misplace, preview, carefully.
    - Dictation words: hopping, hoping, baking, cried, replayed, unfold, dislike, careful, helpless, happily.
    - The error routine names the exact rule for each word.
  - `parent` updated.
- **Split:** practice now has 7 items: 4 Together (P1-P4) and 3 Try (P5-P7). P4, the spelling-change match, moves from Try to Together, which is fine with hints on. The test now has 6 items, 9 points, pass mark 8.
- **Giveaway check:**
  - Within the test: T6's key words (use, care) and its keep-e rule do not reveal T4, which has drop-e and double-letter rows with vowel suffixes.
  - Within practice: P7's `why` gives meanings only.
  - Swaps I made to avoid overlap with the test:
    - "refilling" became "rewriting" in the read list, because T5's key is refill.
    - "unlock" became "unfold" in the dictation, because unlock is in the teach example.
    - The T6 distractor "carefull" became "colorfull", because careful is a dictation word.
- **Verification:** `check-content` gives 0 failures, with no warnings on these items. I solved P7 and T6 by hand: each has exactly one defensible key set.
- **Remains:** mis- and pre- are taught and appear in the read list but have no scored item. -er/-est and -s/-es are not in this lesson; I did not audit whether the GUM lessons cover them.

## C4. 3.F.F.1.a: spelling-choice items replaced with reading items, plus a quick-read list

- **Deficiency:** 3.F.F.1.a is about **reading** sight words with accuracy and automaticity. These items asked "which spelling is correct", which is encoding, a different skill: P1 (because), P2 (said), P3 (enough/people), P4 (friend/laugh), P5 (thot→thought), T1 (again), T2 (does) and T3 (busy/build). The teach step ended with a spelling routine. Automaticity existed only as a one-line flash-card tip.
- **Official requirement:** 3.F.F.1.a, "Increase sight word vocabulary by reading regularly and irregularly spelled words in isolation and context with accuracy and automaticity." (PDF p. 9)
- **Why I replaced the items (rather than relabelling them):** A browser item cannot hear a word read. But it can check whether the child knows how an irregular word is *said*, by asking which word rhymes with it. It can also check whether the child reads every letter of a look-alike word in context. Both are reading knowledge. Choosing a spelling is not.
- **Change:**
  - **Items replaced in place** (same IDs):

    | ID | Word(s) | Key |
    |---|---|---|
    | P1 | were rhymes with | fur |
    | P2 | done rhymes with | sun |
    | P3 | wait / by, in context (regular sight words) | wait, by |
    | P4 | sort who/love/two/month/do by vowel sound | as listed |
    | P5 | won / own / now, in context | won |
    | T1 | four rhymes with | door |
    | T2 | touch rhymes with | much |
    | T3 | sort one/alone/none/shown: rhymes with sun or bone | one, none → sun; alone, shown → bone |

  - **Kept:** P6 (saw/was), P7 (form/from), T4 (Where/Were) and T5 (of/off). These already measured accurate reading in context.
  - **Teach:**
    - The wording now says "read" and "said the way it looks".
    - Point 3 is now the come/home rhyme trap.
    - Point 5 is now a daily read-it-in-a-snap routine, replacing look-say-cover-write-check.
  - **Learn:**
    - Example 1 (spell friend) is now "Do come and home rhyme?".
    - Example 3 (Wuns→once) is now a then/them and went/want misreading.
    - Example 2 (through) is kept.
  - **New `write` box, "Quick-read list":**
    - 12 tricky words and 10 regular words, then 3 sentences that use them in context.
    - The grown-up points to each word. "In a snap" means correct within about a second, without sounding out.
    - Missed words go in the box.
    - An optional stopwatch, with "There is no grade-level target for this list."
    - "This is home practice. The site does not time or score it."
  - **`parent`:** now says the questions "cannot check how quickly your child reads a word out loud: only a grown-up listening can."
- **Points:** practice is still 7 items (Together P1-P4, Try P5-P7). The test is still 5 items and 6 points.
- **Verification:**
  - Pronunciations checked: were /wɜr/, done /dʌn/, four /fɔr/, touch /tʌtʃ/, one /wʌn/, none /nʌn/, alone and shown /oʊn/, who/two/do /u/, love/month /ʌ/.
  - I avoided "does" as a rhyme stem because the plural of doe rhymes with goes, and I avoided "again" and "aunt" because their pronunciation varies by region.
  - The distractors are orthographic look-alikes (here/where, bone, hour/sour, couch/pouch).
  - Learn and teach do not use any test word.
  - Rendered in the player: 5 test items load, with no page errors.
- **Remains:** Automaticity is observed only by a grown-up and is not recorded in a structured way (see engine proposal E2).

## C5. 3.F.F.1.b: a parent-led routine for reading unfamiliar passages accurately

- **Deficiency:** The lesson had no step-by-step routine for the grown-up, and nothing addressed "increasing" accuracy over time.
- **Official requirement:** 3.F.F.1.b, "Read a variety of unfamiliar grade-level texts with increasing accuracy." (PDF p. 9)
- **Change:**
  - New `coach`:
    - mix-up: jumping in on every word.
    - strong / not yet.
    - I do: think aloud on a long word.
    - We do: choral reading.
    - You do: a new passage with the timer, a 3-second wait, then "What part do you know?", then retell.
    - everyday: a never-seen page from a different kind of text each time, watching for fewer stops over weeks.
  - `check.items[4]` appended: "Over two weeks or more, accuracy on new passages stayed at about 95% or better, or went up. The timer's list of recent readings shows this." The check now has 5 lines.
  - The timer is unchanged. It is already labelled "A home practice tool, not a school reading test" (skills.js).
- **Verification:** Rendered the Practice and Check tabs at 390 and 1366: 5 check lines, the coach box present, no horizontal scroll.
- **Remains:** none specific to this expectation. The timer passages are home-made and not calibrated, and the timer says so.

## C6. 3.F.F.1.c: a routine for reading with expression, a comprehension line, and a range of texts

- **Deficiency:** "To aid comprehension" was not addressed, and the range of texts was thin (two dialogue passages).
- **Official requirement:** 3.F.F.1.c, "Read a wide range of grade-level texts aloud with appropriate prosody (phrasing, expression, juncture/pause, and intonation) to aid comprehension." (PDF p. 9)
- **Change:**
  - New `coach`:
    - mix-up: thinking that faster is better.
    - I do: expressive vs robot voice.
    - We do: echo reading, then choral reading.
    - You do: repeated reading 3-4 times, then a timed reading with the expression and pause notes, then the question "what happened and how a character felt".
    - everyday: a poem like a performer, a fact page like a news reporter, a story with character voices.
  - `check.items[5]` appended: "After reading, told what happened and how one character felt." The check now has 6 lines.
- **Verification:** Rendered at 390 and 1366 (screenshot of the Check tab reviewed).
- **Remains:** The timer's practiced mode still offers only passages 5-6. The poem and informational practice is a routine off the site.

## C7. 3.F.F.1.d: a routine for self-correction and rereading, and a silent-reading Fix-up log

- **Deficiency:** The items measure spotting *another reader's* miscue. The child's own self-correction, especially when reading silently, was never prompted or captured. Rereading for comprehension was only a teach point.
- **Official requirement:** 3.F.F.1.d, "Self-correct while reading grade-level text (silently or aloud) to aid comprehension and fluency, rereading as necessary." (PDF p. 9)
- **Change:**
  - New `coach`:
    - mix-up: correcting at once.
    - We do: a prompt ladder: wait to the end of the sentence, ask "Did that make sense?", point to the sentence, then point to the word.
    - You do: read silently with the Fix-up log, then retell.
    - everyday: praise the fix.
  - New `write` box, "Fix-up log": the child reads silently, writes each word they fixed ("I read horse, but it was house"), and writes "I reread page __ because ____". Four-line checklist.
  - `parent` now states honestly that the questions use other readers' mistakes, and points to the 3.F.F.1.b timer's second-tap self-correction count.
- **Verification:** Rendered the Try tab at 390 and 1366. `check-content` passes.
- **Remains:** The log is the child's self-report, stored on the device.

## Not changed

3.F.H.3.a, 3.F.H.4.a and 3.F.H.4.b were not in my assignment's list of likely needs, and I found no new gap that needs a content change. I confirmed `.cursive,.trace-row{word-spacing:.3em;}` in css/styles.css:623. That is the PP-003 fix for H.4.b; I did not re-measure it.

## Engine proposals (not done: they need JS)

- **E1. A dictation activity that hides the list from the child.**
  - A new `activity.kind: "wordlist"` would show one word and its sentence at a time to the grown-up, with a "Hide" toggle.
  - The grown-up taps "spelled right" or "practice again" for each word.
  - Results would be saved as `r.wordlists = [{d, list, missed:[...]}]` and labelled "Grown-up observed".
  - Today the whole list is visible on the same screen, so the prompt has to tell the grown-up to turn the screen away.
- **E2. A sight-word flash activity for 3.F.F.1.a.** One word at a time; the grown-up taps "in a snap" or "had to work it out"; the result is stored as observed, not mastered. (The PP-003 audit also recommended this.)
- **E3. Allow `check` beside a scored test.** `renderTest` shows `check` only when there is no test set. A phonics lesson could then carry a grown-up check ("spelled 8 of 10 dictated words") recorded as `passBy: "grownup"`-style observation, kept separate from the test pass.
- **E4. A "for grown-ups" variant of the `write` box.** The box heading ("Your turn to write") and the footer note are worded for the child. A `write.audience: "grownup"` flag could switch to "Grown-up notes" wording.
- **E5. `PP.rich` bold in item prompts.** It would let a quoted target word stand out (for example **four**), if the player supports it. I did not check this.

## Gates (run from /home/claude/pp-fix, 2026-10-20)

- `node verification/check-content.js --all`: PASS, 0 failures, 8 warnings. All 8 warnings were already present before my changes; none is on an F-* lesson.
- `python3 verification/readability.py`: runs. The F lessons' passages are unchanged (3.F.F.1.d p1 ~2.4, p2 ~1.8).
- `node verification/check-writing.js`: 0 failures, 0 warnings.
- Playwright on port 8485, at 390x844 and 1366x900:
  - Pages: 3.F.P.4.a (teach, try), 3.F.P.4.b (try), 3.F.P.4.c (teach, try), 3.F.F.1.a (teach, learn, try), 3.F.F.1.d (try), 3.F.F.1.b (practice, check) and 3.F.F.1.c (check).
  - scrollWidth equals the viewport on every page (no sideways scroll). There were no page errors.
  - The write boxes and coach boxes are present where expected. Check counts are 5 (1.b) and 6 (1.c).
  - The player opens SK:3.F.F.1.a:t (5 items), SK:3.F.F.1.a:p, SK:3.F.P.4.c:t (6 items) and SK:3.F.P.4.c:y (3 items).
  - Screenshots are in the scratchpad (`pp004f/`), not the repo. The server was stopped by its PID.
- I did not run `guard.py` (about 20 minutes; left to the lead).

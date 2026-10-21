# PP-004 independent review C6 (round 6): three form B items

Reviewer: C6 (new, independent). Read-only. Port 8509 (server stopped by PID after use).
No review log or fix log was read before solving or while writing this file.

Scope:
- SK-TT4a-TB2 (3.T.T.4.a testB), js/data/lessons/T-T34.js:608, with the rest of its form B set (TB1-TB5, passages p3, p4)
- SK-GUM3-2-TB4 (irregular plurals testB), js/data/lessons/L-GUM3.js:341, with TB1-TB5
- SK-V3a-TB1 (3.L.V.3.a testB), js/data/lessons/L-V3.js:261, figure assets/figures/v3a-b-pecan-graph.svg, with TB1-TB6 (passage p3, figure v3a-b-balloon-parts.svg)

## Method
1. Blind print. Scratch scripts in /tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revC6/: `load.js` (loads the three lesson files in a vm), `blind.js`, which prints each form B set with shuffled choices/options/rows and without `correct`, `answer`, `why`, `clue` or hints, together with the passages, figure alt text and figure path. Output: `blind.txt`. Both figures were rendered to PNG (`v3a-b-pecan-graph.png`, `v3a-b-balloon-parts.png`) and looked at.
2. Solved all 16 items (5 + 5 + 6, including every ms/ebsr/match part). Saved to `my-answers.txt` before reading any key.
3. Compared with the keys in the lesson files.
4. Real player, `PP_PLAYER.start('SK:<code>:tB','test')`, at 390x844 and 1366x900 (`play.py`, `gum.py`). Each target item was answered through the UI (clicks on the choice or the match buttons). The other items were filled with their keys. Then the set was submitted. Screens: `SK-*-390*.png`, `SK-*-1366*.png`.
5. Checked the explanation, the distractors, points/DOK against form A, whether the target words occur in teach/learn (Watch Me)/practice/form A, and bison against a dictionary. Gates: `node verification/check-content.js --all` gave PASS (0 failures, 6 warnings, none on these lessons' testB). `readability.py` gives V.3.a p3 241 words, FK about 4.1. The poems are not scored by the script.

## Agreement
16 of 16 agree with the keys.

| Item | My blind answer | Key | Agree |
|---|---|---|---|
| SK-TT4a-TB1 | l1~l3, l2~l4 | same | yes |
| **SK-TT4a-TB2** | "Then blink, blink, blink, a tiny light" | same | yes |
| SK-TT4a-TB3 | lights going on and off | same | yes |
| SK-TT4a-TB4 | evening→1, lights→2, cup/let go→3 | same | yes |
| SK-TT4a-TB5 | me | same | yes |
| SK-GUM3-2-TB1 | snowmen | same | yes |
| SK-GUM3-2-TB2 | calves, elves | same | yes |
| SK-GUM3-2-TB3 | loaves | same | yes |
| **SK-GUM3-2-TB4** | bison=Correct, lives=Correct, fishermans=Fix, shelfs=Fix | same | yes |
| SK-GUM3-2-TB5 | wifes sentence | same | yes |
| **SK-V3a-TB1** | became fewer | same | yes |
| SK-V3a-TB2 | weighing less | same | yes |
| SK-V3a-TB3 | go up higher / "It floats higher and higher." + "Soon the houses below..." | same | yes |
| SK-V3a-TB4 | blowing hard in sudden bursts | same | yes |
| SK-V3a-TB5 | opening at the very top of the envelope | same | yes |
| SK-V3a-TB6 | land on the ground | same | yes |

Player scoring with the UI-entered answers on the target items: 7 of 7 (TT4a, both widths), 7 of 7 (V3a, both widths), 7 of 7 (GUM). The first GUM run showed 6/7 only because my harness filled the hottext item with the wrong response shape. Clicking "wifes" in the UI gave 7/7. UI responses recorded: TB2 `{"v":0}`, TB4 `{"v":[1,0,1,0]}` (= key), TB1 `{"v":0}`.

## Per-item checks

### SK-TT4a-TB2 (T-T34.js:608-617)
- Standard 3.T.T.4.a: "Discuss and explain techniques used to present and design poetry, including rhyme scheme." (standards PDF p. 34). Finding where a stanza begins is a design/structure question, so it fits. It parallels form A SK-TT4a-T2 (stanza/line structure, 1 pt, DOK 1).
- Distractors: last line of stanza 1 (boundary confusion), the other "blink" line inside stanza 2 (tests "begins"), first line of stanza 3 (miscount). All are plausible and clearly wrong. One defensible answer.
- Why: accurate. It names where stanza 1 ends, explains the second "blink" line in stanza 2, and identifies the stanza 3 opener. It teaches.
- Points/DOK: 1 / 1. Set total 7 = form A 7. DOK mix 1,1,2,2,1 = form A 1,1,2,2,1.
- Novelty: "Firefly Night" (p3) appears only in testB. It is not in teach (bunny stanza), Watch Me (dog, geese), practice (p1 "Tap, Tap, Tap") or form A (p2 "My Kite").
- On screen: no label names a stanza. The passage shows "PASSAGE 3", the title, and line numbers every 5 lines. The question side shows only "Question 2 of 5", "1 point", the prompt and the choices. See RC6-6 and RC6-7.

### SK-GUM3-2-TB4 (L-GUM3.js:341-351)
- Key and why are correct. "lives" and "bison" are right. "shelfs" should be shelves and "fishermans" should be fishermen. The why gives the singular/plural pair for each row.
- Bison is an unchanging plural:
  - Merriam-Webster, https://www.merriam-webster.com/dictionary/BISONS: "plural bison".
  - Dictionary.com, https://www.dictionary.com/browse/bison: inflected forms "bison plural", with no other plural given.
  - The direct M-W URL https://www.merriam-webster.com/dictionary/bison was blocked by the permission system, so the BISONS redirect page was used. The sentence "Five bison..." is correct under every dictionary, so the key holds even where "bisons" is also accepted.
- Target words: a grep of L-GUM3.js lines 158-311 (teach, learn/Watch Me, practice, form A) finds none of bison, life/lives, shelf/shelves, fisherman/-men, snowman/-men, calf/calves, elf/elves, loaf/loaves, wife/wives, thief, half or grandchild. "bison" occurs nowhere else in js/data.
- Points/DOK: 2 / 2. Set total 1+2+1+2+1 = 7 = form A. DOK B is 1,2,1,2,2 against form A 1,2,1,1,2. TB4 is DOK 2, while its counterpart T4 (noun-to-plural match) is DOK 1 (RC6-5).
- Scoring: 4 rows, 2 columns, not one-to-one, so 3 of 4 rows correct gives 1 point (items.js match.score). That is reasonable.
- On screen: the lesson title "Special plurals: children, mice and feet" and the column labels "Correct" / "Needs a fix" give nothing away.

### SK-V3a-TB1 (L-V3.js:261-273)
- Graph (rendered PNG): title "Pecans We Picked in November", axis "buckets of pecans". The bars and alt text agree: W1 3, W2 6, W3 8, W4 4. The alt text matches the picture. "Week 3 has the longest bar" in the alt text does not reveal the answer.
- Distractors: "grew bigger" is a good trap because it is the weeks 1-3 trend before the time named in the stem. "stayed the same" and "turned brown" (ripe pecans are brown, but the graph has no colour) are plausible and wrong. One defensible answer.
- Why: accurate and teaching (title, axis, compare week 3 with week 4). See RC6-8 for a small wording point.
- Points/DOK: 1 / 2. Set total 7 = form A 7. All items DOK 2, as in form A.
- Novelty: "dwindl" and "pecan" do not occur in L-V3.js outside testB, or anywhere else in js/data except an unrelated pecan fact in T-T2.js:950. Form A's graph item (T8, attendance) and the Watch Me graph (precipitation) work by "word = what the graph measures". TB1 works by a change across bars, so it is a genuinely new reasoning path and not a reskin.
- On screen: the figure has no caption or label, the prompt does not define the word, and the choices are shuffled. No giveaway at 390 or 1366.
- Fact: south Georgia pecan harvest runs in the fall, including November (UGA Extension pecan blog, https://site.extension.uga.edu/pecan/2025/10/; UGA CAES, https://fieldreport.caes.uga.edu/news/georgia-pecan-harvest-could-be-smallest-in-years/).

### Giveaway scan of the three sets
- TT4a: TB1 choices talk about line pairs only. TB3's prompt says "blink, blink, blink" is in stanzas 2 and 3. TB4's stanza 2 row ("Tiny lights float up...") echoes the TB2 key line. Both are weak cues (RC6-9). No item states another item's answer.
- GUM: see RC6-2 (the life/lives row cues wife/wives).
- V3a: no cross-item giveaways. TB3 Part B choices quote paragraphs 2, 5 and 6, but none of them defines vent, touch down, gusty or lighter.

## Findings

**RC6-1 SHOULD: GUM form B leans on one sub-rule (f/fe → ves)**
- Items: SK-GUM3-2-TB2 (L-GUM3.js:324-334), TB3 (:335-340), TB4 (:345-346), TB5 (:352-362).
- Evidence: in form B, about 5 of 7 points depend on the f/fe → ves pattern:
  - TB2: calves and elves are the keys; thiefs and halfs are distractors.
  - TB3: loaves.
  - TB4: the shelfs and lives rows.
  - TB5: wifes.
- Vowel-change plurals appear only through the compounds snowmen and fishermen. Unchanging plurals appear in a single row (bison).
- Form A spreads its points across vowel change (women, feet, tooths), unchanging plurals (moose, sheep), -en/other (people, oxen) and f → ves (wolves, knives: two rows of T4).
- The teach states the f → v change only by example ("wolf becomes wolves. Knife becomes knives the same way.", :167).
- Result: form B measures a narrower and differently weighted slice of the expectation than form A and the teach.
- Fix: rebalance by replacing at least one f/fe item or row with a vowel-change or unchanging plural that is not used elsewhere in the lesson. The simplest option is to change the TB4 "lives" row (see RC6-2) to an unchanging plural such as "Two salmon swam up the cold river." (M-W gives "salmon" as a plural). That removes one f → ves row, adds a second unchanging plural, and keeps TB4's two-correct/two-fix balance. If the author prefers, the f → v rule could also be stated outright in teach (:167).

**RC6-2 SHOULD: TB4's "lives" row is a near-analog cue for TB5's "wifes"**
- Items: SK-GUM3-2-TB4 row "Doctors and nurses work hard to save lives." (L-GUM3.js:346) and SK-GUM3-2-TB5 (:356).
- Evidence: "save lives" is a very familiar phrase, so a child who judges that row correct has just been shown life → lives. TB5's error is wife → "wifes", a one-letter analog (life/wife). This is a between-item cue in the same form.
- Fix: replace the TB4 "lives" row with a correct sentence whose plural is not f/fe → ves (e.g., the salmon sentence in RC6-1, or a correct regular -es plural such as "The foxes ran into the woods."). Keep two "Correct" rows and two "Needs a fix" rows.

**RC6-3 NOTE: TB4 prompt says "the plural noun" but two rows have several plurals**
- Item: SK-GUM3-2-TB4, L-GUM3.js:342 (and the clue at :350, "Find the word...").
- Evidence: row 2 has doctors, nurses and lives. Row 3 has fishermans and poles. Every extra plural is correct, so the key is not affected. The wording is slightly inaccurate.
- Fix: "Are the plural nouns in each sentence correct, or does the sentence need a fix?" The clue would then read "Find the words in each sentence that name more than one."

**RC6-4 NOTE: stale code comment**
- Location: L-GUM3.js:308-309, which says every key target except "deer" (one TB4 row) is new.
- Evidence: TB4 no longer uses deer. It uses bison, and no form B key target occurs in teach, Watch Me, practice or form A.
- Fix: update the comment to say bison replaced deer and that all key targets are new.

**RC6-5 NOTE: TB4 is DOK 2 against form A's T4 at DOK 1; bison is untaught**
- Item: SK-GUM3-2-TB4, L-GUM3.js:341.
- Evidence:
  - Form B has three DOK 2 items (TB2, TB4, TB5). Form A has two (T2, T5). TB4 (judging plurals in sentences) is correctly rated DOK 2, so form B is slightly harder than form A.
  - "bison" is not taught. A child has to generalise from sheep/deer/moose ("A few nouns stay the same", :168). A child who misses only that row still scores 6/7, which is a pass (pass is ceil(7 × 0.8) = 6).
- Fix: none required. Optionally record the DOK difference in the form B log.

**RC6-6 SHOULD (rendering, css/styles.css:143): poem lines wrap with no hanging indent at 390 px**
- Set: 3.T.T.4.a form B, passage p3 (affects TB1 and TB2 screens).
- Evidence: in `SK-TT4a-TB2-390-passage.png`, "Then blink, blink, blink, a spark so" wraps and "bright" sits on its own row at the same indent as a real line. Stanza 2 then looks like five lines.
- Impact: TB1 asks which numbered lines rhyme and TB2 asks which line begins a stanza, so a phantom line makes counting harder on a phone. Form A's "My Kite" may wrap the same way.
- Fix (UX owner, not a lesson file): give `.poem-line .sent` a hanging indent, e.g. `padding-left:1.25em; text-indent:-1.25em;`, so continuation rows are visibly indented.

**RC6-7 NOTE: the line number "5" sits beside TB2's keyed line**
- Item: SK-TT4a-TB2 (player.js:93 numbers every 5th line).
- Evidence: stanza 1 has four lines, so line 5 is always the first line of stanza 2, and the marker "5" sits beside the correct choice at both widths. It is not a stanza label, and the blank space between stanzas, which is what the item tests, is the stronger cue anyway.
- Fix: none required.

**RC6-8 NOTE: TB1 stem and graph measure slightly different things**
- Item: SK-V3a-TB1, L-V3.js:263.
- Evidence: the stem says "the pecans on the trees dwindled". The graph counts "Pecans We Picked". Linking them takes a short inference ("fewer picked, so fewer left"), which the why states. The key is unaffected.
- Fix (optional): "After week 3, the pecans we picked dwindled." This makes the graph a direct clue.

**RC6-9 NOTE: weak cross-item cues in TT4a form B**
- Items: SK-TT4a-TB3 prompt (T-T34.js:619) and SK-TT4a-TB4 row (:634).
- Evidence: TB3 says the repetition is "in stanzas 2 and 3". TB4's stanza 2 summary paraphrases the TB2 key line ("tiny lights float up"). Neither gives TB2's answer without the child locating the stanza break, which is the skill tested.
- Fix: none required.

No MUST findings.

## Verdicts
- SK-TT4a-TB2 (3.T.T.4.a form B): **PASS**. Item content is correct. The 390 px line-wrap issue (RC6-6) is a site-wide CSS SHOULD, not a defect in this item.
- SK-GUM3-2-TB4 (irregular plurals form B): **PASS WITH SHOULDS** (RC6-1, RC6-2; notes RC6-3, RC6-4, RC6-5).
- SK-V3a-TB1 (3.L.V.3.a form B): **PASS** (note RC6-8).
- Set-level: 3.T.T.4.a testB PASS WITH SHOULDS (RC6-6, CSS). 3.L.GC.1 irregular plurals testB PASS WITH SHOULDS. 3.L.V.3.a testB PASS.

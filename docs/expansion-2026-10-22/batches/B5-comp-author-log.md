# B5 comp author log: TF-FEAT and TF-DIG (the two new component lessons)

**Role:** content author, batch B5 (component lessons). **This is not a review.** Nothing here certifies the items. Reviewers should blind-solve before they read this log.

**Status:** AUTHORED (B5 comp), REVISED AFTER THE FIRST AND SECOND REVIEWS (sections 10 and 11), NEEDS A THIRD INDEPENDENT BLIND REVIEW. Both lessons are NOT ACCEPTED. Neither is in `js/data/accepted.js`.

**Read sections 10 and 11 first (11 is the latest).** The first review (B5-comp-review.md) asked for changes. Sections 1 to 9 below were written before that review. Where section 10 changes a fact, the section 10 version is the current one (for example the sinkhole passage is now a pothole passage, and the similar-bank numbers changed).

## 1. What was built

`js/data/lessons/T-CF.js` holds two lessons, registered in `js/data/manifest.js` right after `T-TS` (the way `T-SS` is registered). Every block is marked `B5-comp`.

| Lesson | Key | Codes | Title | Contents |
|---|---|---|---|---|
| Text features | `TF-FEAT` | `3.T.SS.1.a`, `3.T.C.1.b` | Where information goes: chapters, headings, maps and captions | teach, learn, parent; passages p1-p6; Together P1-P4; core C01-C15 (3 sets of 5); similar S01-S15; addons; test T1-T5 |
| Digital, audio and spoken features | `TF-DIG` | `3.T.C.1.b` | Screens, sounds and speaking: features you click, hear and listen for | teach (three Watch Me models W1-W3), learn, parent; passages p1-p5; Together P1-P4; core C01-C15; similar S01-S15; addons; test T1-T5 |

Item ids: `SK-TFF-*` (FEAT) and `SK-TFD-*` (DIG).

New figures in `assets/figures/` (all original, drawn by me; Black children by default where people appear): `tf-camp-map.svg`, `tf-trail-map.svg`, `tf-yard-map.svg`, `tf-crayon-video.svg`, `tf-bird-page.svg`.

### Edits outside T-CF.js (flag these)

- `js/data/manifest.js`: `"T-CF"` added to `lessons`.
- `js/data/std-groups.js`: `"TF-FEAT"` added to the `lessons` list of group 3.T.SS.1.a (the rule says it must list every lesson whose main code matches).
- `js/data/catalog.js`: `"TF-FEAT","TF-DIG"` added to the Information group, after `"3.T.C.1.b"`.
- **`verification/practice-own.py`, test G.3:** it hard-coded the lesson list for 3.T.SS.1.a. It now expects seven lessons including `TF-FEAT`. This is an edit to a verification script, not to content. **The lead should confirm it is acceptable.**
- `docs/expansion-2026-10-22/02-coverage-matrix.csv`: rows 3.T.SS.1.a and 3.T.C.1.b now say "Expansion: AUTHORED (B5 comp), NEEDS INDEPENDENT REVIEW" (they said NOT STARTED).
- `docs/expansion-2026-10-22/batches/STATUS.md`: the "Two new component lessons" NOT STARTED row is replaced with two rows, TF-FEAT and TF-DIG, "NOT ACCEPTED: awaiting independent review".
- I did not touch `accepted.js` or any accepted lesson's items. `git status` also shows `js/data/lessons/L-GC2.js` as modified; that is not mine.

## 2. Gate results (last run, after the final edit)

| Gate | Result |
|---|---|
| `node verification/check-content.js --all` | `PASS (0 failures, 9 warnings)`. None of the 9 warnings is on a TF- lesson (they are on PT-1, 3.L.V.3.b, 3.T.RA.2.b, 3.T.T.1.a/c/d/e and the migration note, all outside my files). |
| `node verification/check-writing.js` | 0 failures, 0 warnings |
| `node verification/check-instructional-copy.js` | 28 assertions passed |
| Passage readability | My own FK script: every passage in both lessons is FK 4.5 or lower (FEAT p6 was 4.7 and was edited to 4.1). `verification/readability.py` keys by code, so it lists my passages under 3.T.SS.1.a / 3.T.C.1.b mixed with T-SS and T-C passages; it printed no failure. See 7.1 for inline stems. |
| Browser smoke test (Playwright, local `http.server`) | For both lessons, all three sets opened from `#skill/TF-FEAT/try` and `#skill/TF-DIG/try`. For each of the 30 core items: answered, pressed Check, "Try a similar question" appeared, and it opened the item named by `like` (C01 to S01 ... C15 to S15), then back. No visible image failed to load. The only console errors were Google Fonts requests blocked by the sandbox network. Script: scratchpad `cf/smoke.py`. |

## 3. Similar-bank similarity (measured by me)

Method: raw-token Jaccard and multiset (bag) overlap over stem + prompt + text + all options, slot options, steps, rows, cols and the ebsr part prompts. Four modes were run: all tokens, and tokens longer than two letters, each with and without the core item's passage text. Scripts: scratchpad `cf/simcf.js`, `pair.js`, `pairp.js`, `dup.js`.

| Mode | Highest set Jaccard | Highest bag overlap | Pairs over 0.21 | Exact shared options |
|---|---|---|---|---|
| all tokens, no passage | 0.195 | 0.209 | 0 | 0 |
| all tokens, with passage | 0.195 | 0.209 | 0 | 0 |
| tokens over two letters, no passage | 0.193 | 0.192 | 0 | 0 |
| tokens over two letters, with passage | 0.193 | 0.187 | 0 | 0 |

Be aware: the highest bag value (0.209) is close to the ceiling. Reviewers who measure differently (for example, counting stem sentences twice) could land above 0.21 on one or two pairs. The worst pairs are in the S13/S14/S15 area of FEAT and in the DIG ms items.

**History, stated plainly:** my first drafts of the similar bank were almost all over the ceiling (FEAT 14 of 15, DIG 15 of 15). I rewrote the bank with different frames and vocabulary until every pair passed all four modes. The backups of the first drafts are not in the repo.

Within-lesson duplicates found by `dup.js` and not removed (low risk): the option strings "did you know" (FEAT P1, T1), "a chapter" and "a section" (FEAT P2 and S01), and "the bird tower" (FEAT C06 and C10). One same-skill pair has Jaccard 0.33: FEAT C08 and T3. They use different passages but the same question shape. A reviewer may want T3 reworded.

## 4. Item attribute tables

Verbs: ID identify, EX explain, UE use evidence, ED edit, CO construct, CP compare, TR transfer.

### TF-FEAT core

| Id | Set | Format | DOK | Text | Component | Verb | Differs from neighbours by |
|---|---|---|---|---|---|---|---|
| C01 | 1 | dropdown | 1 | p1 jump rope chapter | chapter vs section terms | ID | term slots on a chapter title |
| C02 | 1 | mc | 2 | inline table of contents (Fun with Jump Rope) | table of contents | UE | reads page numbers off a list |
| C03 | 1 | ms | 2 | p1 | headings | EX | why headings help a reader |
| C04 | 1 | mc | 2 | p1 | Try It! text box | ED | rewrite a box, same job |
| C05 | 1 | hottext | 2 | p1 | order of sections | UE | pick the sentence that shows why one section follows another |
| C06 | 2 | mc | 2 | trail map figure | map with compass rose | ID | directions on a map |
| C07 | 2 | dropdown | 2 | inline photo description | caption | ED | build a caption that adds what the photo cannot show |
| C08 | 2 | mc | 3 | p2 Fern Hollow brochure | order of sections | EX | why the author ordered the sections |
| C09 | 2 | match | 2 | inline grasshopper page | job of each feature | CP | match four features to jobs |
| C10 | 2 | ms | 2 | p2 | headings as a finding tool | TR | pick two sections for a purpose |
| C11 | 3 | ebsr | 3 | p3 sinkholes | sections and cause and effect | EX, UE | Part A idea, Part B evidence |
| C12 | 3 | dropdown | 2 | inline index (Rockets and Space Travel) | index | CP | index versus table of contents |
| C13 | 3 | mc | 3 | inline report on helicopters | headings | CO | choose headings that split two ideas |
| C14 | 3 | mc | 3 | inline Plan A and Plan B | how a book is arranged into chapters and sections | CP | compare two plans |
| C15 | 3 | ms | 2 | yard/neighborhood map reasoning (inline) | map parts | TR | what to add so a stranger can use the map |

Tallies for the fifteen: mc 6 (C02, C04, C06, C08, C13, C14); ms 3; dropdown 3; hottext 1; match 1; ebsr 1. That is six formats, five of them technology-enhanced. DOK1 once (C01). DOK3: C08, C11, C13, C14. Verb counts: identify 2, explain 3 (C03, C08, C11), use evidence 3 (C02, C05, C11), edit 2 (C04, C07), construct 1 (C13), compare 3 (C09, C12, C14), transfer 2 (C10, C15). Contexts (approximate, my own labels): sports 5, outdoors 3, science 2, and one each for the others. Texts: p1 (4 items), p2 (2), p3 (1), figure or inline stems for the rest; no text holds more than seven.

### TF-DIG core

| Id | Set | Format | DOK | Text | Component | Verb | Differs from neighbours by |
|---|---|---|---|---|---|---|---|
| C01 | 1 | mc | 1 | crayon video page figure | part of a video page | ID | name a control |
| C02 | 1 | ms | 2 | same figure | transcript and rewind | UE | pick two ways to get an exact number |
| C03 | 1 | dropdown | 2 | inline directions | back arrow and search box | ED | fix two wrong directions |
| C04 | 1 | match | 2 | inline ocean digital book | link, pop-up, search, menu | CP | jobs to features |
| C05 | 1 | mc | 3 | inline paper-fan choice | video, audio or words | TR | choose a mode for a purpose |
| C06 | 2 | mc | 2 | p1 audio tour script | [pause] direction | ID | stage direction meaning |
| C07 | 2 | order | 2 | p1 | steps in a guide | CO | sequence from a script |
| C08 | 2 | ebsr | 3 | p1 | why a whisper works | EX, UE | Part A idea, Part B evidence |
| C09 | 2 | dropdown | 2 | inline Echo Tube script | cues | ED | complete a script with cues |
| C10 | 2 | mc | 3 | inline sign versus audio tour | audio versus print | CP | how one mode helps more |
| C11 | 3 | hottext | 2 | p2 Friday Announcements | repeating an important fact | UE | pick the sentence to repeat |
| C12 | 3 | mc | 2 | p2 | pause | EX | why stop after a greeting |
| C13 | 3 | dropdown | 2 | inline tips | volume and clarity | ED | complete speaking tips |
| C14 | 3 | mc | 3 | inline soccer field | speaking in a noisy place | TR | choose the delivery |
| C15 | 3 | ms | 2 | inline parakeet talk | eye contact and visuals | ED | pick two changes |

Tallies: mc 6 (C01, C05, C06, C10, C12, C14); ms 2; dropdown 3; match 1; order 1; ebsr 1; hottext 1. That is seven formats, five of them technology-enhanced. DOK1 once (C01). DOK3: C05, C08, C10, C14. Verbs: identify 2, explain 2 (C08, C12), use evidence 3 (C02, C08, C11), edit 4 (C03, C09, C13, C15), construct 1 (C07), compare 2 (C04, C10), transfer 2 (C05, C14). Contexts: museum 5, announcements 3, others fewer. Texts: p1 (3), p2 (2), a figure (2), inline stems for the rest; no text holds more than seven.

All of this is by my own reading of the items, not a script. A reviewer should recount, especially the "every pair differs in at least two of text, component, verb, context" rule, which I checked by eye.

## 5. Live choices after hints (hand-counted)

Hints 1 (strategy) and 2 (where to look) remove nothing. Hint 3 settles at most one blank or row, and I counted what is left:

- mc: four choices, three live after hint 3.
- ms: five choices, four live (choose two).
- dropdown: hint 3 removes one option from one slot, so that slot has two live options out of three. A one-slot dropdown therefore leaves two of three live. This is the weakest point (see 7.2).
- match: one row settled, three rows live.
- order: first step placed, three steps left.
- hottext: six sentences, five live.
- ebsr: Part A four to three, Part B four unchanged. (My first FEAT C11 and S11 hint 3 ruled out two Part A choices; I reduced it to one.)

No hint 3 leaves only the key. Hint 2 never points at a place that holds only the key.

## 6. Fixes actually made during authoring

- A hint said "the last choice says..." in DIG C05 and S05. check-content calls position references a FAIL. Reworded to "the choice that says...".
- Many "clue shares a word only with the key" warnings (FEAT C11, C14, S03, S11, S13, S14, S15; DIG C02, C08, C10, C15, S05, S06, S08, S12, S15; tests T1, T4, T5). Reworded the clues, hints and some keys. Three keys that were far longer than the other choices (FEAT S13, DIG T4, DIG S06) were shortened.
- Short passages (DIG p2 to p5) lengthened to 100-124 words. FEAT p6 reduced from FK 4.7 to 4.1.
- The first similar bank was over the Jaccard ceiling (see 3) and was rewritten.
- Topic collisions with other lessons were resolved by changing my topic: a glacier passage (replaced by sinkholes in FEAT p3), elevators (now escalators in S13), chess club, gecko and planets.
- Near-duplicates inside the lessons were reworded: FEAT T5 versus C12 and S12 (index frames); FEAT Together P2 versus C02, and DIG Together P2 versus C01 (shared option strings).
- A stray "X," left by a bad multi-edit in DIG B1 was removed.

## 7. What I did NOT fix, and what is doubtful

1. **Reading level of inline stems.** Only passages are gated at FK 4.5. By my heuristic FK, some short inline stems read above 4.5 because of domain words (helicopters, announcements, transcript) and unpunctuated contents or index lines (the heuristic over-penalises those). Examples: FEAT C13 about 5.7, S03 about 6.7, S13 about 6.0, T5; DIG T2 about 6.1, T5 about 5.6, S05 about 4.6, C11 about 4.7, C14 about 4.6. These words are the skill terms the lesson teaches. A reviewer should decide whether any stem needs simplifying.
2. **Hint 3 on a one-slot dropdown** leaves two of three options live (see 5). That is within the rule but gives the weakest scaffold.
3. **Together items** use inline stems without figures. Only Watch Me W1 (DIG) uses the bird page figure.
4. **Facts for audio items** describe a recording, screen or speaker as text. Nothing needs sound to solve.
5. The within-lesson repeats and the FEAT C08/T3 pair in section 3.
6. The simcf bag value of 0.209 is near the limit.

## 8. Items most wanted for skeptical re-solving

Please solve these cold, without the key, and report any second defensible answer:

- **FEAT C04** (which rewrite does the same job as the Try It! box): does more than one rewrite plausibly "do the same job"?
- **FEAT C05** (hottext: why one section follows another): is exactly one sentence defensible?
- **FEAT C08** (why the brochure is ordered as it is): DOK3 reasoning, check the distractors.
- **FEAT C09** (match feature to job): rows overlap in purpose (title vs caption vs box).
- **FEAT C11 / S11** (ebsr): are Part A and Part B independent enough, and is the one removed Part A choice by hint 3 fair?
- **FEAT C14 / S14** (Plan A versus Plan B): a reader could argue either plan; the stem was changed once to add a sentence about who went on which trip. Check that exactly one plan answers the prompt.
- **DIG C05 / S05** (best mode for learning to fold a paper fan): preference-like; check whether "video" is clearly best and the wording does not give it away.
- **DIG C08 / S08** (ebsr on the whisper dishes): check the science wording against the real mechanism (see 9).
- **DIG C10 / S10** (audio tour versus sign): "helps more" is relative; check distractors.
- **DIG C14 / S14** and **C15 / S15** (delivery in noise; two changes for a talk): check that "choose TWO" has exactly two defensible changes.
- **DIG S10** (fire-drill poster): confirm it does not duplicate C10's reasoning.
- Also confirm the 15 hint-3 texts do not settle too much, using the live-choice counts in 5.

## 9. Web verification of facts

Checked on the web this session (URLs fetched or returned by search):

- Whisper dishes, curved dishes that focus sound from one dish to the other: https://gatewaytoscience.org/new-whisper-dishes-hear-science-in-action/ and https://en.wikipedia.org/wiki/Whispering_gallery
- How crayons are made (melt paraffin wax, add pigment, pour into molds, cool): https://www.crayola.co.uk/faq/quality-and-safety/how-are-crayola-crayons-manufactured-and-what-are-the-basic-ingredients/
- Cardinals (males bright red with a crest; seeds and fruit): https://tpwd.texas.gov/huntwild/wild/species/northerncardinal. Note: that page says fruit, not berries specifically; my wording says fruit.
- Spinning color disk: searched; sources include https://www.eiscolabs.com/products/ph1232mt and https://projekte.chemiedidaktik.uni-bremen.de/salis_zusatz/salis_pdf/fromcoloredtowhite_35.pdf. A real disk blends toward white or gray, so the script says only that the colors "blur together into one color".
- Sinkholes (groundwater dissolves limestone and other soluble rock; the land above a cavity can collapse; ponds can form inside): https://www.usgs.gov/water-science-school/science/sinkholes. Note: USGS says water alone does not create ponds in sinkholes; a pond forms when debris blocks the outflow. My passage does not say that water makes the pond, but a reviewer should re-read p3 for that.
- Pearls (an irritant such as a parasite, grain of sand or small fish sits between shell and mantle; the mollusk coats it with layers of nacre): https://kids.britannica.com/students/article/pearl/276326. Note: "a speck of sand" is the common simplification; Britannica names sand among several irritants. The p6 text says "after a few years", which is a loose figure that I did not check against a source.
- Grasshoppers (males make sound by rubbing a row of pegs on the back legs against the front wings): https://qrius.si.edu/browse/object/11038205. The box says "some grasshoppers", which is accurate.
- Giraffes have seven neck vertebrae like humans: https://www.snopes.com/fact-check/giraffes-neck-bones-humans/
- Blueberry bushes can live and produce for up to fifty years (many years is safe): https://www.epicgardening.com/blueberries/. This is a gardening site, not an extension service; a reviewer who wants a stronger source can check a university extension page.

Not verified beyond common knowledge: contents and index conventions (chapter, section, table of contents, index, compass rose, key), which are text-feature definitions taken from the standard's own terms. No wording was copied from GaDOE materials, and no real child data was used.

## 10. Response to the first review (B5-comp-review.md, "First review")

The review found no wrong key and no item with two defensible answers. It listed three MUSTs and a set of SHOULDs. This section lists only what I actually changed, then what I did not change. Item ids are the current ones. All edits are in `js/data/lessons/T-CF.js` (source parts concatenated), plus nothing else.

### 10.1 MUSTs

- **M1, hint 1 stated the key (DIG C02, S02, C05, S05).** Rewrote the clue (which is also hint 1) of each as a strategy.
  - C02: "Ask what each tool on the page is for. Eli needs to check something that was already said." Hint 2 now says "Look at the bar, the buttons, the tab and the links. Ask what each one does to the video or to the page."
  - S02: same idea, and hint 2 now covers every choice.
  - C05 and S05: "Ask what Kofi has to do to learn this, and which way of sharing fits that job" (S05: what Ravi is able to do during the ride).
  - C05 and S05 were also relabelled DOK 2 (the reviewer's N-D1: the stem shows the video). DIG now has DOK3 on C08, C10, C14 only; this still meets the "at least two DOK 3" rule.
- **M2, key facts repeated from Watch Me W2/W3 and SK-TC1b.**
  - T1 was replaced. The new T1 asks what the CC button shows (inline stem, no passage). I checked `T-C.js` for "CC": no hit.
  - W3 was replaced. It now models a speaker who asks a question and waits (the old W3 was "three tips, First, a pause to get ready").
  - C12 and S12 were replaced. C12 asks why Jayden begins notices with "Next" and "Also" (the key: to show listeners that a new notice is starting, a spoken heading). S12 asks why Ms. Brown says "Now, about" before each topic. Neither is about a pause. The teach text (point 4) was extended with the signpost idea and one sentence on asking a question and waiting.
  - I did not re-check every item of SK-TC1b against these two new items. The reviewer should.
- **M3, FEAT S05 re-used the paper-plate-mask steps.** Replaced with a different task (washing a bike, three sections). I checked "bike" and the sentences against `js/data` by search only for the words; I did not run a full 6-gram scan on the new text.

### 10.2 SHOULDs done

FEAT:
- **C02 and Watch Me W1 (S-F1).** C02 now asks "How many pages are in Chapter 2?" (a different operation) with new page numbers (1, 6, 7, 10, 12, 16, 17). S02 asks the same operation about a soccer book.
- **Sinkhole passage versus T-TS "How Water Carves a Cave" (S-F2).** p3 is now "How a Pothole Forms" (water in cracks, ice, traffic). C11 was rewritten for it. **While doing this I found and fixed a bug of my own:** C11 Part B still named the old section "The Roof Falls" for part of the edit; it now says "The Road Breaks". Please blind-solve C11 again.
- **Pearl simplification (S-F11).** p6 and S11 now say "a tiny speck of grit" instead of "a bit of sand", and the p6 sentence is shorter ("After a few years, nacre has covered the grit completely.").
- **T3 versus C08 (S-F3).** T3 now asks what would change if the last section came first (a new task, new distractors). The "easiest to hardest" distractor family is gone from the test.
- **S11 wording and stem (S-F6).** The stem that restated the passage and Part A's key was deleted; the standard ebsr directions are back; Part B was reworded; the nonsense Part A decoys were replaced.
- **S09 (S-F7).** Columns are now the taught terms (heading, caption, label, text box). Directions are standard.
- **S03/S15/S02/S14 directions.** "Choose TWO answers" is back in S03 and S15 prompts.
- **S-F8 (skill not taught).** Teach point 5 now also says that authors group things the way readers will look them up (by date, by person). I did not add a new Watch Me for index or heading choice.
- **S-F9.** C03 and S03 clue/hint 1 is now "Ask what a heading is for."
- **Word-match key (C05).** The prompt no longer names the two sections ("the last section of the chapter ... the section before it").
- **T4 (S-F10).** T4 now asks which caption adds something the photo cannot show (all four captions mention bees; one adds when and why).
- **Absurd distractors (S-F5).** C14, C15 and S15 distractors were made plausible misreadings; C02's "Crossing Your Arms" is gone with the new item.

DIG:
- **C09 gave C06's key (S-D2).** C09 now uses the cues [echo] and [soft bell]; the stem defines only the bell. S09 was rewritten the same way ([wind howling] and [bell ringing]).
- **C13/C14 and C11/C14 giveaways (S-D3).** C11's clue no longer says "a second time". C14's key is now "Say 'Field B' in a strong voice, and then say it again", so it does not repeat C13's "slowly and clearly". S14 was changed to use a gesture plus a repeat.
- **Absurd distractors (S-D4).** Replaced in C02, S02 (partly), C12, S12, C13 ("leave it out" became "say it only once"), C15 (the bookshelf), S14, S15.
- **S-D7, S-D9, S-D10, S-D11.** C10, S10 and S15 clues no longer give the key. S08 and S09 use the standard directions. C15's `how` says "cage". C12's invented `how` line about "many rooms" is gone with the new item.
- **S-D1 overlap with SK-TC1b.** I only reduced it where the reviewer found a key-fact collision (T1, C12, S12, W3). The bracket-sound items (C06, S06, C09, S09) and first/next/last (C07, S07, T3) remain; I changed the cues and tasks, but a bracket still names a sound in this lesson as it does in 3.T.C.1.b.
- **Longest-key cue (S-D5).** I measured it myself (word count, `cue2.js`): the key was the unique longest option in 15 of 55 groups before the edits and is in 11 of 55 now, all with a margin of one to three words. I lengthened or shortened the groups with big margins (FEAT C11 Part A, C13, S13, S11 Part A; DIG C01, C08 Part B, S06, S14). The remaining ones: FEAT C04, C11A, C14, S04, S08, S11A, C13; DIG C08A, C10, S14, T5.
- **Passage length.** FEAT p4 was 97 words; one sentence added, now 100.

### 10.3 Similarity, re-measured after all edits

My checks changed once more because the review asked for standard directions and the lesson's own terms in the similar bank. That pushed 12 pairs over 0.21, and I fixed each by changing content and wording, not by a thesaurus pass (for example S02 and S08, the restyled S12 and S14, new frames in S05 and S09). Final numbers, every pair mapped by `like`:

| Mode | Highest set Jaccard | Highest bag overlap | Pairs over 0.21 | Exact shared options |
|---|---|---|---|---|
| all tokens, no passage | 0.200 | 0.209 | 0 | 0 |
| all tokens, with passage | 0.206 | 0.209 | 0 | 0 |
| tokens over two letters, no passage | 0.193 | 0.200 | 0 | 0 |
| tokens over two letters, with passage | 0.193 | 0.185 | 0 | 0 |

(From `cf/simcf.js`; the maxima are over both lessons. The bag maximum 0.209 is close to the ceiling and a different tokeniser could put one or two pairs over it.) Two lessons I learned: standard directions add 10 to 15 shared words to every ebsr pair, and adding words to a similar item usually raises the multiset overlap, so shortening and changing content words worked better.

### 10.4 Gates after the changes

- `check-content.js --all`: PASS (0 failures, 10 warnings; none on a TF- lesson).
- `check-writing.js`: 0 failures. `check-instructional-copy.js`: 28 assertions passed.
- Passage FK by my script: FEAT 2.0 to 4.3, DIG 1.5 to 2.6.
- `verification/practice-own.py`: 73 passed, 0 failed (includes G.3).
- Smoke test (Playwright): 30 of 30 core items offer "Try a similar question" and open the item named by `like`; no image failed to load; only blocked Google Fonts errors.

### 10.5 Not changed (and why)

- **S-F4 (order-of-sections appears often):** I replaced S05's topic and rebuilt T3, but C05, C08, C11, S08 and S11 still use the section-order skill.
- **C07 and one-slot dropdown 50/50:** hint 3 still leaves two of three options for the caption; I did not redesign it.
- **S-D6, N-D2, N-D8:** C11/S11, C13/S13 and C09/S09 are still on the easy side of DOK 2.
- **S-D8:** Learn It point 5 still states "a video shows how something moves, a recording works when your eyes or hands are busy, printed words can be read again", which is close to the keys of C05, S05, C10 and S10. I changed the C05/S05 clues but not the teaching text.
- **S-D12:** DIG T5 (why a [pause] before "Last, wash the berries") still has the same key logic as C06/S06. T4 still uses the lesson's own wording.
- **N-D5 (page subtitle), N-D7 (crayon page highlights Crafts), N-F6 (map alt text names the position):** not touched.
- **Facts (new passage):** a pothole forms when water gets into cracks, freezes and pushes the road, and traffic breaks the weak spot; crews fill holes with asphalt. Source: https://roads.maryland.gov/mdotsha/pages/index.aspx?PageId=815. Note the source says melting leaves "a pool of water" under the road and my passage says "a gap"; I treated that as a harmless simplification.

### 10.6 Items changed since the first review, for the second blind review

Please blind-solve these cold (new or rewritten), then spot-check the rest.

- TF-FEAT: p3 and C11 (changed text), p6 and S11, C02, S02, C03, S03, C05, S05 (new topic), S09, S14, S15, T3, T4, p4 (one sentence), Learn It point 5, and the key-length edits to C13, S13 (and the C14 and C15 distractors).
- TF-DIG: Watch Me W3, Learn It point 4, T1, C02, S02, C05, S05, C09, S09, C10, S10, C11 (clue only), C12, S12, C13, C14, S14, C15, S15, S08 (all options), C01 (distractor lengths), C08 Part B (three decoys changed), S03 (stem and prompt).
- Biggest risks, in my own view: DIG C12/S12 (does "to show listeners that a new notice is starting" have a clearly better answer than the other three?), DIG C09/S09 (is "[echo]" or "[wind howling]" obvious from the line alone?), DIG C08 Part B (decoys now include a direction and a description of the room), FEAT C02/S02 (is "ten pages" unambiguous, one off-by-one distractor?), and FEAT C11 (new passage, re-solved by me only partly).

## 11. Response to the second review (B5-comp-review.md, "Second review")

Where this section disagrees with section 10, this section is current. In particular DIG C12/S12 and T1 described in 10.1 were replaced again.

### 11.1 MUSTs

- **F-M1, FEAT C15 and S15.** Rewrote `why`, `how` and hint 3 against the choices that are really there (heading, page number, caption; paragraph about the school's name, index, big title). Hint 3 now reads "A page number is for a book, not for a map, so rule it out" (C15). Hint 1 (the clue) is now a strategy that names no key: "Ask what a stranger would need in order to use a map that he has never seen" (S15: a plan that the child has never seen).
- **D-M1, DIG C12.** The item was replaced (below), so the stale `why` is gone. I read the new `why`, `how` and hints against the four current choices.
- **D-M2, DIG T1.** Replaced. The new T1 is about dragging the dot on a progress bar near the end of a recording (key: "the last part of the recording"). I checked by concept, not only by string: no file in `js/data` has a "progress bar", "drag" or "slider" item (the only hits are unrelated words such as "dragon"). The caption-line fact of SK-TC1b-T9 is no longer tested in T1. DIG C01/S01 (marker) and C02/S02 (transcript, slider) are not in SK-TC1b-T8/T9.
- **D-M3, DIG C12/S12.** Replaced with a fact the existing 3.T.C.1.b lesson does not test: a speaker can use pace and volume to build a feeling.
  - C12: a storyteller slows down and whispers right before the ghost appears (key: "to make listeners wonder what will happen next").
  - S12: a race announcer talks faster and louder near the finish (key: "to make the finish sound exciting for the crowd").
  - Learn It point 4 now teaches the idea in one sentence ("a slow, quiet voice can build suspense, and a fast, loud voice can build excitement") and no longer carries the signpost sentence.
  - **Concept scan over all of `js/data`:** I listed every 3.T.C.1.b item of `T-C.js` by prompt and key (signpost words, "I have three rules", a drumroll or alarm that sets the mood, "Listen closely") and searched the rest of `js/data` for suspense, announcer, relay, campfire, spooky, ghost, storyteller and commentator. Nothing tests this fact. Near neighbours: SK-TC1b-C15/S15 (a sound effect added to a recording makes listeners excited or sets the time of day) is about a sound, not the speaker's voice; SK-TC1b-S14 has a wrong answer "Whisper each tip so listeners lean in", about counting tips. I avoided the words "lean in" in my keys.
  - DIG Together P4 (tone fits the message) is in the same area. I think matching a message and building a feeling are different facts, but a reviewer may disagree.

### 11.2 SHOULDs done

- **F-S1** (S09 explanations quoted "Fun Fact" and used synonyms of the taught terms): rewritten with the taught words.
- **F-S2** (S05 bike): the sentences now sit under three headings in a short passage (p7, 104 words, FK 1.7), and the key no longer repeats the prompt's words. Hint 3 states that the first sentence under the first heading cannot point back.
- **F-S3** (C11 Part A had nonsense decoys): decoys are now structures the lesson names ("ABC order", "cause of a pothole to the cost of fixing it"). T3's decoys and a Part B hint 3 are unchanged.
- **F-S5** (Learn It point 5 stated the three answers): reworded to the question to ask. There is still no worked section-order Watch Me.
- **F-S6** (T2 duplicated SK-SS1a-P5): T2 now asks which Try It! box fits the section Flowers in Spring. The other overlaps with T-SS remain as the standing overlap of a second component lesson on the same code.
- **S03 (FEAT) and S15 (DIG), keys were the two longest options.** Distractors lengthened and made plausible (S15: stare at papers, low voice, hurry). My cue script shows 12 of 55 groups with the key as the unique longest option, by one to three words.
- **D-S4:** [loud buzzer] became [door creaking] (C09); [door slamming] became [thunder rumbling] (S09); "bounce back" was dropped from C09's text. The blanks are still answerable from the item's wording.
- **D-S5:** DIG Learn It point 5 now states a strategy, not the three answers.
- **D-S7:** T4 has a different key sentence and plausible decoys. T5 is unchanged.
- **Stale glacier comment** in the core block header now says potholes. FEAT p4 is 109 words.

### 11.3 Not changed

- **D-S1** (C04/S04/P1 share the pop-up and link facts with SK-TC1b-T8): not changed, because Learn It and Together need them. If the lead applies the rule to check items strictly, C04 rows 1 and 3 and S04 rows 2 and 3 need new rows.
- **D-S3** (C11/S11 name the fact in the prompt): not changed. The suggested wording makes both the time and the room defensible.
- **D-S6** (hints describe the key's function), **F-S4** (S11 Part B decoys come from other sections; the last section has only three sentences and "The grit has become a pearl" also looks back), **F-S7**, **DIG T5**: not changed.
- **Check-form record.** `check-content.js` now warns that the wording of both check forms changed since the recorded hash ("run --record-versions to refresh the hash"). I did not run `--record-versions` because it rewrites a verification record. The lead decides.

### 11.4 Re-measured after all edits (every pair mapped by `like`)

| Mode | Highest set Jaccard | Highest bag overlap | Pairs over 0.21 | Exact shared options |
|---|---|---|---|---|
| all tokens, no passage | 0.206 | 0.209 | 0 | 0 |
| all tokens, with passage | 0.206 | 0.209 | 0 | 0 |
| tokens over two letters, no passage | 0.193 | 0.196 | 0 | 0 |
| tokens over two letters, with passage | 0.193 | 0.185 | 0 | 0 |

FEAT S03 sits at the edge after several rewordings. For hottext items the "no passage" mode compares prompts only, so S05 got a prompt that shares little with C05's.

### 11.5 Gates and checks

- `check-content.js --all`: PASS (0 failures, 17 warnings; the only TF- warning is the check-form record one; the rest are other authors' files).
- `check-writing.js`: 0 failures. `check-instructional-copy.js`: 28 assertions passed.
- Passages: FK 1.5 to 4.3 by my script; all at least 100 words.
- Smoke test: 30 of 30 core items open their similar item (including the new S05 on p7 and the new C12/S12); no broken images. I did not re-run `practice-own.py` this round (73 of 73 last round; only item text changed).

### 11.6 Changed since the second review, for the third blind review

Please blind-solve cold:
- TF-FEAT: C15 and S15 (explanations and hints; same options), C11 Part A, S03 (all options), S05 (new passage p7, prompt, key), S09 (explanations), T2 (new item).
- TF-DIG: C12, S12 (new items), T1 (new item), T4 (new key and decoys), S15 (three new decoys), C09 and S09 (one decoy each), Learn It points 4 and 5.

My own biggest risks: DIG C12 (is "to help listeners who sit far away hear the words better" an easy trap to eliminate?), DIG S12 (other choices too silly?), DIG T1 (is "the last part of the recording" the only reading?), FEAT S05 (is exactly one sentence a better answer?), FEAT T2 (the key is the only choice that mentions flowers).

## 12. Third-review response (D3-M1, D3-M2, F3-M1 and SHOULDs)

Strict key-fact rule applied: no core, Together, similar or test item keys a fact that an SK-* check item keys. Learn It and Watch Me still teach pop-up, link, CC and caption-adds (teaching text is not an item).

### 12.1 Replaced facts and concept greps (all of js/data, outside T-CF.js)
| Item(s) | Old fact (check item that keys it) | New fact | Concept grep result |
|---|---|---|---|
| DIG C04 rows 1, 3 | pop-up, link (SK-TC1b-T8) | plus button makes words bigger; scroll bar slides a long page | "scroll", "zoom", "bigger", "plus button", "enlarge": no item keys them (hits are narrative only) |
| DIG S03 blank 2 | underlined words hop to another page (T8) | magnifying glass looks up a word (blank 1 decoys now three-line button / Home tab / plus button) | "magnif", "search box": only decoy use in SK-TC1b-S02; T-RA has a "menu" in a web header figure, not a key |
| DIG S04 rows 2, 3 | link, dotted-line word (T8) | tab keeps a page open; minus button makes words smaller | "tab" (UI), "minus": none (only zipper tab in a story) |
| DIG P1 | pop-up (T8) | Home button returns to the first page | "home button", "home tab": none |
| DIG T2 blank 1 and 2, P2 row 2 | picking dot (own C01/S01), CC button (SK-TC1b-T9) | speaker button changes loudness; full-screen button fills the screen | "volume", "mute", "full screen", "speaker button": none keyed |
| DIG T5 | [pause] before "Last" (own C06/S06) | [birds chirping] helps viewers picture an outdoor farm | "chirp": narrative text only. Nearest check fact is SK-TC1b-C15/S15 (a sound sets mood or time); T5 uses a sound for place |
| FEAT C07, S07, P3, T4 | caption adds what the photo cannot show (SK-TC1b-T6) | a label names the one part its line points to | "label" outside T-CF: no SK-TC1b or SK-SS1a item keys it; the label-versus-caption idea sits in the T-T2 lesson (other standard) |

Learn It (DIG) now also teaches Home button, scroll bar, plus and minus buttons, tab and full-screen button.

### 12.2 SHOULDs
- FEAT C11 Part B now reads "Which sentence in the section "The Road Breaks" shows how it builds on the section before it?"
- FEAT S11 Part B prompt now "goes back to the section before it". p6 gained a fourth sentence in the last section ("Some oysters take longer than others."), used as a decoy in place of "People open the oyster to find it."
- DIG C11 prompt no longer names the time ("arrive at robotics club on time"); S11 no longer names the place ("go to the wrong door"). Hint 2 now says to compare what each sentence tells. How text adjusted.
- DIG C13 hint 3 typo fixed ("Saying it only once ...").
- Not changed: FEAT T2 decoys (F3-S3), C15/S15 map key (F3-S4, other standard), C09 text box row, DIG C12/S12 decoys, D3-S3, D3-S7 and D3-S8 absurd-decoy notes.

### 12.3 Gates and similarity
- check-content --all: PASS (0 failures, 29 warnings; the version-hash warning ignored as instructed). check-writing: 0 failures. check-instructional-copy: 28 passed.
- Similarity, all four modes: 0 pairs over 0.21. Highest: S12~C12 0.193, S14~C14 0.185, S07~C07 J=0.182 (bag 0.202), S11~C11 0.174; shared options 0 everywhere.
- Longest-key cue: FEAT T4 key shortened (now 6 words against 7, 6, 8); no new longest-key groups. Duplicate-option scan: the S03 "Back arrow" overlap with S01 removed.
- Smoke test: similar buttons work in both lessons (only external font requests fail in the sandbox).

### 12.4 Changed items for the fourth blind review
DIG: Learn It point 1 and 2, C04, S03, S04, P1, P2, T2, T5, C11, S11, C13 (hint 3).
FEAT: C07, S07, P3, T4, C11 (Part B prompt), S11 (Part B prompt and decoy), passage p6 (fourth sentence).

## 13. Fourth-review light fixes (after ACCEPT)

- FEAT S11: hint 3 and why now say the article follows one oyster from a speck of grit to a pearl (the passage says "Some oysters take longer than others").
- FEAT C09 and S09: the label row and the text-box extra-fact row are replaced. New facts: an index shows every page where a topic is found; a Try It! box gives the reader a job to do. Concept grep: "index" as a feature (glossary, bold words, index lists) is keyed in no SK-TC1b or SK-SS1a check item; bold words are left out because the T-C.js lesson covers them. FEAT C07's label fact no longer appears in C09/S09.
- FEAT S07 reworded (shorter stem, new options): S07~C07 J=0.121, bag 0.140 (all-token, with passages); lowest mode 0.093/0.134. A clue-word warning ("spot") was fixed.
- DIG T5 changed to "According to the script, when do viewers hear [snap of a stem]?" (reading the script position), so the farm and hot-sun cues no longer give the answer.
- DIG T2 changed: blank 1 now asks which control returns to the last orchard page (Back arrow, with Home button and play button as decoys); blank 2 keeps the full-screen button. The speaker button row stays only in P2.
- Strawberry wording: the script and T3 now say "pinch the stem just above the berry, and twist gently" (the NC State guidance cited by the reviewer).
- Not changed: optional DIG C08 hint note.
- Gates: check-content PASS (0 failures, 29 warnings), check-writing 0 failures, check-instructional-copy 28 passed. Similarity in all four modes: 0 pairs over 0.21; highest S12~C12 0.193 and S09~C09 bag 0.200; shared options 0.
- Changed items for the light blind check: FEAT S11 (hint 3, why), FEAT C09, S09, S07; DIG T2, T5, T3 (step 2 text and why), passage p3 (paragraph 6).

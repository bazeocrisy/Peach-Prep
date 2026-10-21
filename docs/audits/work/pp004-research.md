# PP-004 log: agent "research" (3.T.RA.1.b and 3.L.GC.2.a)

Worktree /home/claude/pp-fix, starting from 4ed5d0b. No git commands were run. I edited only these files:
- js/data/lessons/T-RA.js, the 3.T.RA.1.b block only
- js/data/lessons/L-GC2.js, the 3.L.GC.2.a block only
- assets/figures/ra1b-web-pumpkin.svg, ra1b-web-moon.svg and ra1b-notes-table.svg (all new)
- this log

## Official wording (read from the standards PDF, approved May 2023)
- **3.T.RA.1.b** (p. 37, Texts / Research & Analysis, Interpreting Texts): "Conduct research by locating, gathering, selecting, and organizing information from multiple credible sources, including print, digital, and personal communication, about a self-selected topic."
- **3.L.GC.2.a** (p. 19, Language / Grammar Conventions / Standard 3-5.L.GC.2 Syntax, Interpreting Texts): "Distinguish between correctly structured simple, compound, and complex sentences."
- GUM chart, grade 3 column, checked against the page images for pp. 16-17:
  - coordinating conjunctions to join clauses: M
  - commas with coordinating conjunctions to join independent clauses: M
  - subordinating conjunctions to join clauses: I
  - commas after introductory phrases or clauses: I
- What follows from the chart:
  - Complex sentences in this lesson use only common subordinators: when, after, before and because.
  - No distractor treats a missing comma after an introductory clause as an error, because that skill is only Introduced at grade 3.
  - Relative clauses (who/that) are avoided, so "complex" stays unambiguous.
- Blueprint (Aug 2025), p. 1: both codes are Interpreting Texts. 3.T.RA.1 (a, b) and 3.L.GC.2 (a).
- DRAFT ALD (Oct 2025), RA.1 Proficient: "Conduct research by locating, gathering, selecting, and/or organizing information from multiple credible sources, including print, digital, and personal communication, about a topic."

### Wording discrepancy for the lead (standards.js is not my file)
- standards.js has 3.L.GC.2.a as "Distinguish correctly structured simple, compound, and complex sentences in texts read, heard, or viewed."
  - The PDF (p. 19) has no "in texts read, heard, or viewed".
  - The PP-003 matrix row inherited this wording, so its "heard" gap rests on text that is not in the official standard.
- standards.js has 3.T.RA.1.b as "...sources (print, digital, personal communication)...". The PDF reads "...sources, including print, digital, and personal communication,...".
- I recommend the owner of standards.js restore the exact PDF wording for both codes.

---

## Change 1: 3.T.RA.1.b has a digital source, relevance selection and note-taking
**Deficiency** (PP-003 matrix row, notes-texts2.md §3.T.RA.1.b; rated PARTIAL, Low):
- No digital source text. "Website" was only named in teach.
- No note-taking or hands-on research. There was only a parent tip.
- Nothing taught or tested deciding which information is relevant to a research question.

**Official requirement:** 3.T.RA.1.b as quoted above (p. 37): "locating, gathering, selecting, and organizing ... digital".

**Changes:**
- **Title** is now "Finding, choosing and sorting facts from sources". The key and code are unchanged.
- **teach:**
  - big idea rewritten.
  - Points now cover print, digital and personal sources; the research question and relevance ("a fact can be true and still not help"); web page parts and the off-topic side boxes; and the notes table.
  - Two old points were merged, so there are 6 points in total.
  - Words added: "research question" and "relevant".
  - `example` became `examples`. It keeps the frog note card, plus a new "a notes table" example with the figure `ra1b-notes-table.svg`.
    - The table shows the question at the top and Fact / Where I found it columns, using the same frog facts.
  - The tip was updated.
- **learn[2] (new Watch Me 3):** a short web page about woodpeckers, written as lines.
  - It has a research question, a site name and date, two headings, an off-topic drumming fact and a side-box ad.
  - The steps show picking the relevant sentences (1-3), skipping the drumming fact and the ad, and writing a note: question / fact in own words / where found.
  - There is no figure here, so the answer is not shown before the steps.
- **write (new):** an existing mechanism (SPEC §8 `write`, rendered by renderWrite); no engine code was added.
  - The child does real research with a grown-up on a self-selected topic, uses two sources and keeps a notes table.
  - The checklist has 5 lines: question; two sources; only relevant facts; own words; where found.
  - The card renders on Try It Yourself.
- **parent:** now mentions a web page and the notes table, and gives the "Does this help answer our question?" prompt for ads and side links.
- **New passages:**
  - p5 "What Pumpkin Plants Need" (practice) and p6 "What Is It Like on the Moon?" (check). Each is "Source 3: a web page", genre "Informational text (web page)".
  - Each has a site-header figure at `after: 0` (`ra1b-web-pumpkin.svg` / `ra1b-web-moon.svg`) showing the site name, menu and posted date. The sites "Kids Garden Club" and "Sky Watchers Club" are invented and no URL is shown.
  - Each has `## ` headings, a short article, a "Fun facts" or "How Far Away?" section that is true but off-question, and two `Box:` side boxes: an ad and an off-topic "More on this site" link.
  - Word counts are 163 and 124. Readability FK is about 2.9 for both.
- **Practice** (now 7 items; Together = P1, P2, P3, P6; Try = P4, P5, P7):
  - **SK-RA1b-P6** (new, ms, 2 pts, DOK 2, p5): Nia's question "What do pumpkin plants need to grow well?" Choose the 2 relevant details: sun and water.
    - Distractors: the history fact and the contest weight (true but off-question), and the festival ad.
  - **SK-RA1b-P7** (new, mc, 1 pt, DOK 2, p5): the stem is Nia's notes table with the question and the Where I found it entry filled in. Choose the best note for the Fact box.
    - The key is a paraphrase of the "Room to Grow" section.
    - Distractors: a note that contradicts the page, a true but off-question fact, and the off-topic link.
- **Check** (still 6 items; 2+1+2+1+2+1 = 9 points, up from 7):
  - **SK-RA1b-T4 removed** ("Which fact can be found in BOTH sources?").
    - It was redundant with T1, which already has a "Both sources" column.
    - Its `why` also quoted "wore space suits", which is a T3 key.
  - **SK-RA1b-T6** (new, match, 2 pts, DOK 2, p6): question "What are day and night like on the moon?" Sort five parts of the web page into "Helps answer the question" / "Does not help".
    - Helps: day length and night cold.
    - Does not help: the distance, the camp ad and the star-chart link.
  - **SK-RA1b-T7** (new, mc, 1 pt, DOK 2, p6): **best note for a research question from the web-style source.**
    - The stem is Kofi's notes table, for the question "Why could astronauts take big, bouncing hops on the moon?"
    - Key: "Gravity on the moon is weaker, so people weigh less there."
    - Distractors: a reversed (inaccurate) note, and two true but off-question facts.
  - T1, T2, T3 and T5 are unchanged.

**Fact check of the new content.** All of these are general science, written from general knowledge; no external page was fetched:
- Pumpkins: at least 6 hours of sun, about 1 inch of water a week, water the soil not the leaves, compost, and vines need space. These are standard gardening guidance.
  - "A pumpkin is a fruit because it holds seeds" is the botanical definition.
  - Contest pumpkins over 2,000 lb are true (records are about 2,700 lb).
  - People have grown pumpkins for thousands of years.
- Moon:
  - Gravity is about 1/6 of Earth's, so 60 lb on Earth is about 10 lb on the moon.
  - Daytime and nighttime each last about two weeks (lunar day about 29.5 Earth days).
  - The ground gets hotter than boiling water by day (about 120 °C at the equator) and colder than any place on Earth at night (below -170 °C).
  - Average distance is about 239,000 mi; at 60 mph a nonstop drive takes about 166 days, so "more than five months" is right.
- Woodpeckers: peck bark for insect grubs and use long tongues; they drum in spring to claim territory.

**Item-quality checks:**
- Each item has one defensible key.
- Cross-item leaks:
  - P6 (Together) and P7 (Try) use different relevant facts (sun/water vs space).
  - P6's distractors are not reused in P7.
  - T6 and T7 use different research questions, and no T6 row is about gravity.
- No `why` names another item's key.
- Choice lengths are balanced; the checker raised no long-key or clue-giveaway warnings.
- No passage text uses bold. Bold appears only in P7/T7 stems (allowed by SPEC §5e).

**Verification:**
- `node verification/check-content.js --all`: PASS, 0 failures. There are 8 warnings, none from these lessons, the same as before my changes.
- `python3 verification/readability.py` ran.
- `node verification/check-writing.js`: 0 failures, 0 warnings.
- Playwright on port 8483 at 390x844 and 1366x900:
  - Captured P6, P7, T6 and T7: question and passage panes, practice help steps 1-3, and right-answer feedback.
  - Captured Learn It (the notes-table figure is legible at 390), Watch Me (all steps revealed) and Try (the write card).
  - No page errors. scrollWidth equalled the viewport on every screen.
  - Help 2 narrowing works for P6 and P7.
  - I moved the moon header title right after the first render showed the crescent touching the text.

**What remains:**
- Credibility is still handled in 3.T.RA.2.b, not here.
- Real browsing is not possible; the web pages are static. The write activity is the only hands-on research, and it is unscored (checked by a grown-up).
- "Organizing" into a table is modelled (figure) and done in the write box, but no scored item asks the child to fill a full table.
- **The check max changed from 7 to 9.** Earlier bests show "on an earlier version of this check" via the existing bestMax logic. `pp.progress.v1` meaning is unchanged.

---

## Change 2: 3.L.GC.2.a is practiced and checked inside a text
**Deficiency** (PP-003 matrix row, notes-language.md:49-50; PARTIAL, Low): all 14 GC.2.a items were stand-alone sentences, and none distinguished sentence structure inside a passage.

**Official requirement:** 3.L.GC.2.a, "Distinguish between correctly structured simple, compound, and complex sentences." (p. 19). It is Interpreting Texts on the blueprint.

**Changes:**
- **learn[1] replaced.** It was "simple vs compound" on two lone sentences.
  - It is now a worked example in context: a three-sentence student draft with sentence 1 simple (and joins two people), sentence 2 compound (comma + but) and sentence 3 complex (When clause + whole thought).
  - 4 steps cover all three types. The old learn[1] teaching point (and joining nouns ≠ compound) is kept in step 1.
- **teach.tip** now names the draft formats: find the fragment or run-on, choose the best fix, find a sentence of one kind. **parent** gained a read-aloud prompt.
- **New passages** (SPEC §5b draft format, `draft: true`, numbered sentences):
  - p1 "Our Class Garden" (Maya's draft, 112 words) for practice; p2 "The Old Lighthouse" (Jordan's draft, 112 words) for the check.
  - Each has exactly one fragment and one run-on, and every other sentence is correct.
  - A reviewer key with the type of every sentence is in a code comment above the passages.
- **Practice** (now 7 items; Together = P1, P2, P3, P7; Try = P4, P9, P8):
  - **SK-GC2a-P5 removed** (stand-alone run-on hottext), replaced in context by P7.
  - **SK-GC2a-P6 removed** (stand-alone "choose two complex"), replaced in context by P9.
  - **SK-GC2a-P7** (new, hottext, p1): select the run-on, sentence 7.
    - Distractors include the long but correct compound sentence 3 and the fragment, sentence 5.
  - **SK-GC2a-P9** (new, ms 2 pts, p1): the two complex sentences, 8 (When...) and 10 (...after we pull them up).
    - Distractors: the compound sentence 3, simple sentence 4 with an introductory word, and the Because fragment 5.
  - **SK-GC2a-P8** (new, mc, p1): the best way to join fragment 5 with sentence 6.
    - The key is "Because the weather was dry, we watered the rows every morning."
    - Distractors:
      - the comma splice (a run-on, as the lesson teaches);
      - "Because ..., and we watered ...": both clauses fall under Because, so it is still a fragment;
      - a shortened fragment.
    - I deliberately offered no "no comma after the because clause" choice, because that comma is a GUM I-level skill at grade 3 and the version without it is not an error to grade.
  - P9 comes before P8 so that P8's prompt ("Sentence 5 ... is a fragment") cannot rule out a P9 distractor. P7's `why` no longer comments on sentence 5.
- **Check** (still 6 items; 1+2+2+1+1+1 = 8 points, up from 7; 3 of 6 are passage-embedded):
  - **SK-GC2a-T4 removed** (stand-alone lighthouse fragment). **SK-GC2a-T5 removed** (stand-alone toast run-on fix). Both are now in context.
  - **SK-GC2a-T6** (hottext, p2): select the fragment, sentence 5 "When we reached the top."
    - Targets are 4 (compound), 5, 6, 7 and 11 (complex starting with Before).
    - Run-on sentence 8 is left out of the targets on purpose, because T7's prompt names it a run-on.
  - **SK-GC2a-T7** (mc, p2): the best fix for run-on sentence 8. Key: "Each night, a keeper climbed the stairs, and he lit the big lamp."
    - Distractors: a comma splice, a misplaced comma after "and", and a When-fragment.
  - **SK-GC2a-T8** (hottext, p2): select the complex sentence, 11 "Before we left, I bought a postcard of the lighthouse."
    - Targets are 1 (simple with the introductory phrase "Last summer,"), 4 (compound), 5 (When-fragment), 9 (simple) and 11.
  - T1, T2 and T3 are unchanged.

**Grammar verification.** I read every draft sentence for structure:
- No comma splices other than the intended errors.
- No relative clauses.
- Each compound sentence uses a comma + and/but.
- The complex sentences use when, after or before.
- p2 sentence 2 was changed from present "stands" to past "stood" so the draft has no tense shift; the only other present-tense sentence, 10, is anchored by "Today,".
- No being verb + participle in any keyed sentence.
- Each item has one unambiguous answer:
  - P7: only 7 is two independent clauses with no join.
  - T6: only 5 lacks an independent clause.
  - T8: only 11 has a subordinate clause plus an independent clause among the targets.

**Verification:** the same gates as Change 1 (0 failures, no new warnings). Playwright at 390 and 1366:
- P7, P8, P9, T6, T7 and T8 were rendered. The draft passage pane shows the numbered sentences.
- Hot-text options render with their sentence numbers.
- Help 1-3 and feedback were checked for P7, P8 and P9.
- Watch Me was fully revealed.
- No horizontal scroll and no page errors.

**What remains:**
- The site has no audio, so "heard" in the standards.js wording is addressed only by the parent read-aloud prompt. That phrase is not in the official PDF wording (see the discrepancy above).
- L-GRM-03's three GC.2.a items are stand-alone, and I did not touch them because they are not my file.
- **The check max changed from 7 to 8**, with the same bestMax handling as Change 1.
- guard.py was not run; it is not listed as a PP-004 gate and takes about 20 minutes. The lead should run it, because the practice and check item counts and orders changed for both lessons.
- Independent second-reviewer passes (SPEC §7) have not been done.

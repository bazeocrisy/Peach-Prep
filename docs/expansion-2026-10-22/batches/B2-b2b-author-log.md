# B2 author log: TS-SEQ and TS-DESC (author b2b)

**File:** `js/data/lessons/T-TS.js`, the TS-SEQ and TS-DESC blocks only. TS-CE and TS-CC (other author) were not touched.
**Status:** NEEDS INDEPENDENT REVIEW (blind solve). I did not review my own work.
**Gates:** `check-content.js --all` PASS (0 failures). The only warnings on my lessons are the accepted "core items with no similar item" ones. `readability.py`: all four new passages are FK 3.2 to 4.1. `check-writing.js` 0/0. `check-instructional-copy.js` passes. A browser check on port 8752 registered `SK:<key>:p`, `:y`, `:y2` and `:y3` for both lessons, with hints and how on every item and no page errors.
**Lead rules applied:** I applied both rule messages from the lead (hint 2 placement, hint 3 settling at most one blank or step, Together not pre-answering set 1, EBSR hint places, no earlier `why`/`how` giving a later answer, order items worth 2, definitions matching edge cases). The changes they caused are listed in §5.

## 1. Components (from `official`, standards.js; pp. 29 and 33)

**TS-SEQ** (3.T.SS.1.a sequence structure + 3.T.T.2.b):
- S: name the structure
- W: time-order words, including words that tell how long
- O: put steps or events in order
- R: how one step relates to another (why the order matters, what one step makes possible)
- SCI: a series of scientific ideas
- HIST: a series of historical events
- PART: the job of a paragraph or section

**TS-DESC** (3.T.SS.1.a description structure + 3.T.T.2.a):
- S: name the structure, or explain why it was chosen
- MI: main idea
- KD: key details that support the main idea
- KvI: a key detail versus a merely interesting one
- CW: describing clue words
- FT: design features (headings, a text box)
- PART: a section or paragraph and what it is about

## 2. New passages (core only; no check item uses them)

| Lesson | Id | Title | Domain | Words | FK | Used by |
|---|---|---|---|---|---|---|
| TS-SEQ | p3 | How Water Carves a Cave | science/nature | 169 | 4.1 | C06 to C09 |
| TS-SEQ | p4 | How Atlanta Got Its Name (3 headings) | community/history | 144 | 4.1 | C11 to C13 |
| TS-DESC | p3 | A Firehouse on Wheels (3 headings) | community | 177 | 4.1 | C06 to C10 |
| TS-DESC | p4 | Inside a Baseball Glove (text box) | sports | 184 | 3.2 | C11 to C13 |

- **Facts used.**
  - Atlanta: Terminus marked in 1837 at the end of the Western and Atlantic line; renamed Marthasville in 1843 after Gov. Wilson Lumpkin's daughter Martha; renamed Atlanta in 1845. The sentence added in C13 says it officially became a city in 1847 (incorporated December 1847).
  - Caves: limestone dissolved by water made slightly acidic by CO2 from soil, and stalactites built from dripping water.
  - Bike tube: find the leak by the bubbles.
  - Glove: early players caught bare-handed.
  - Reviewers may want to verify these facts.
- **Check texts.** Pine Ridge (TS-SEQ C10) and Oak Street School (S03) are fictional, with no real people.
- **Length.** DESC p4 is 184 words, slightly over the brief's 180. It is within 04 §4.3 (100 to 250).
- **Leak check.** No core, similar, hint or how text names cobbler, peaches, Keisha or Grandpa Earl (TS-SEQ form A), or live oak, Spanish moss, acorns or Savannah (TS-DESC form A). Neither lesson has a form B. Topics were checked against every lesson and set title: no cave, Atlanta-history, fire-engine, glove or cactus text exists elsewhere.

## 3. TS-SEQ: the fifteen

Practice Together = P1, P2, P3 and P6 (revised). Refs: P4 and P5.

| Pos | Id | Set | Comp | Task | Format | DOK | Text | Domain | Differs from others by |
|---|---|---|---|---|---|---|---|---|---|
| 1 | P4 (ref) | 1 | O | construct | order (2 pts) | 2 | p1 | home | the only order item on p1 |
| 2 | C02 | 1 | PART+R | explain | mc | 2 | p1 | home | the opening paragraph's job; differs from P4 and P5 in component and task |
| 3 | P5 (ref) | 1 | R | predict | mc | 3 | p1 | home | a what-if about the order of steps |
| 4 | C04 | 1 | W | explain/edit | mc | 2 | p1 (sentence box) | home | the effect of swapping a time word |
| 5 | C05 | 1 | S | compare | mc | 2 | stem (library vs art room) | school | the only compare item; a new text and domain |
| 6 | C06 | 2 | O+SCI | construct | order (2 pts) | 2 | p3 | science | a natural process, not a procedure |
| 7 | C07 | 2 | R+SCI | explain + evidence | ebsr | 3 | p3 | science | what an earlier step makes possible |
| 8 | C08 | 2 | W | identify | hottext pick 2 | 2 | p3 | science | time words that tell HOW LONG, not order |
| 9 | C09 | 2 | S+PART | construct | dropdown (2 slots) | 2 | p3 | science | the jobs of paragraphs |
| 10 | C10 | 2 | HIST+O | edit | mc | 3 | stem (Pine Ridge library draft) | community | fix the time order of a history draft |
| 11 | C11 | 3 | HIST+O | sort | match | 2 | p4 | history | track the town's name across time |
| 12 | C12 | 3 | HIST+R | explain + evidence | ebsr | 3 | p4 | history | the cause of an earlier event |
| 13 | C13 | 3 | HIST+PART | edit (insert) | hottext | 2 | p4 | history | place a dated sentence in a section |
| 14 | C14 | 3 | R | transfer, explain | mc | 3 | stem (bike tube) | problem solving | why step 3 comes before step 4 |
| 15 | C15 | 3 | W | transfer, construct | dropdown | 2 | stem (warm-up) | sports | choose time words that keep the order |

- **Counts.**
  - mc 6, order 2, hottext 2, ebsr 2, dropdown 2, match 1.
  - DOK: none at 1, nine at 2, six at 3.
  - Each component appears at least twice. R, the hardest, appears in every set.
  - Domains: home 4, school 1, science 4, community/history 4, problem solving 1, sports 1.
  - Passage loads: p1 4, p3 4, p4 3.
- **Similar items.**
  - S01: plant repotting, order. Like P4 and C06.
  - S02: birdhouse what-if. Like P5 and C14.
  - S03: school-history draft with a relative date ("ten years after"). Like C10 and C13.

## 4. TS-DESC: the fifteen

Practice Together = P1 (revised), P2, P3 and P4 (revised). Refs: P6 and P5.

| Pos | Id | Set | Comp | Task | Format | DOK | Text | Domain | Differs by |
|---|---|---|---|---|---|---|---|---|---|
| 1 | P6 (ref) | 1 | KD | evidence | ms | 2 | p1 | nature | details for one function |
| 2 | C02 | 1 | FT+PART | construct (heading) | mc | 2 | p1 | nature | choose a heading for paragraph 4 |
| 3 | P5 (ref) | 1 | CW | construct | dropdown | 2 | p1 | nature | the clue word also |
| 4 | C04 | 1 | KvI | edit (add a sentence) | mc | 3 | p1 | nature | a key detail vs a true off-point fact |
| 5 | C05 | 1 | S | identify the structure | ms | 2 | p1 | nature | evidence of the description pattern |
| 6 | C06 | 2 | MI+KD | identify + evidence | ebsr | 2 | p3 | community | main idea with headings |
| 7 | C07 | 2 | FT+PART | sort | match | 2 | p3 | community | jobs to section headings, by inference |
| 8 | C08 | 2 | KvI | identify | hottext pick 2 | 2 | p3 | community | interesting but not key |
| 9 | C09 | 2 | CW | edit | mc | 2 | p3 (sentence box) | community | choose the "for example" revision |
| 10 | C10 | 2 | S | explain the author's choice | mc | 3 | p3 | community | why description and not sequence |
| 11 | C11 | 3 | MI | identify | hottext pick 2 | 2 | p4 | sports | main idea stated, then restated |
| 12 | C12 | 3 | KD | evidence | ms | 2 | p4 | sports | support vs looks-only details |
| 13 | C13 | 3 | FT+KvI | explain | mc | 3 | p4 | sports | why a fact is in a text box |
| 14 | C14 | 3 | MI | transfer, construct | mc | 3 | stem (cactus) | nature | write the topic sentence |
| 15 | C15 | 3 | CW | transfer, construct | dropdown | 2 | stem (playground) | school | in addition and such as |

- **Counts.**
  - mc 6, ms 3, hottext 2, dropdown 2, ebsr 1, match 1.
  - DOK: none at 1, ten at 2, five at 3.
  - Each component appears at least twice. KvI, the hardest, appears in every set.
  - Domains: nature 6, community 5, sports 3, school 1.
- **Similar items.**
  - S01: heron, body-part details. Like P6 and C12.
  - S02: recycling-center heading. Like C02 and C07.
  - S03: pine-tree sentence that does not support. Like C04 and C08.

## 5. Weak items, revisions and the lead's rules

**Weak items flagged in 03:**
- **SK-TSSEQ-P6** (Together): **revised**, same id.
  - The implausible distractors ("A yellow lump", "The liquid", "Rinse the butter") are replaced with place phrases from the same paragraphs ("inside the jar", "all around it", "in cold water").
  - This makes a real when/where mix-up. The clue and why are updated. It is still DOK 1, as a guided Together item.
- **SK-TSDESC-P1** (Together, trivial DOK 1 lookup): **revised**, same id. It now asks what "work like paddles" helps the reader understand. DOK 2.
- **SK-TSDESC-P4** (off-skill literal recall): **revised**, same id, and kept out of core. It now asks for the main idea of paragraph 2, with a literal "big bag" misreading as a distractor. DOK 2.

**Ref item changed:**
- **SK-TSSEQ-P4.** The last step was "Spread the butter on toast", which is the key of Together P2, so Together pre-answered a set 1 core slot. It is now "Rinse the butter in cold water", and the why is updated. No core state exists yet (rev "1" is new), so no saved record changes meaning.
- The lead should confirm a new id is not wanted for this.

**Together trimmed so it does not pre-answer set 1:**
- **TS-SEQ P1.** The `why` and addon no longer list the pour, lid and shake order (P4), or say that paragraph 1 tells what you need (C02).
- **TS-DESC P3.** The `why` and addon no longer say that paragraph 1 states the big idea or list the body-part paragraphs (C05).

**Hint 2 placement:**
- Changed to remove single-place pointers: TS-SEQ C04, C07 (now paragraphs 2, 3 and 4, which hold three Part B choices), C14 and S02, and TS-DESC C02, C04 and C11.
- Where the prompt itself names the paragraph (DESC C02, P1, P4; SEQ C09), hint 2 asks the child to summarise each part rather than pointing at a sentence.

**Earlier items giving away later ones:**
- TS-SEQ: P4's how no longer explains where the buttermilk comes from (C04).
- TS-DESC: C04's how no longer says paragraph 1 holds the main idea (C05). C06's how no longer says each section is "one kind of thing on the truck" (C10). C09's how no longer says the section "is not a list of steps" (C10).
- Glove p4: the closing main-idea sentence no longer lists pocket, web and padding, so C11's answer does not name C12's keys.

**Points:**
- Order items with five steps are 2 points: P4, C06 and S01.
- TS-SEQ C09 was cut to two slots (2 points). check-content allows only 1 or 2 points.

**Definitions:**
- TS-SEQ: "step" now covers a process ("one thing that happens, in order, in a job or in a process"). "Time words" now includes words that show time passing, which C08 tests.
- TS-DESC: "detail" now says a key detail tells more about the main idea and some details are just interesting, which C04, C08 and C13 test.

## 6. Teaching added

- **TS-SEQ: teach point 5** (now 5 of 5). Science and history use sequence. In a science process, each step can lead to the next. History uses dates and words like "years later". A paragraph or section can have its own job. This models C02, C06 to C13 and S03.
- **TS-DESC: teach point 5 extended** (still 5). A heading names what its section is about, and a text box can hold a fun fact that is not a key detail. This models C02, C07 and C13.
- **TS-DESC: Watch Me 3** (now 3 of 3), "Grandpa's Window Box". It models a heading and an interesting-but-not-key detail.

## 7. Known residual links for reviewers

1. **TS-DESC set 3.** C12 depends on the main idea that C11 asks for, and C12's how states it. C11 comes first. This is the same kind of chain B0 review 1 accepted (NOTE-1).
2. **TS-DESC set 1.**
   - Together P1 and P2 (paragraph 5, paddling) teach that the feet are for swimming. That rules out one P6 distractor and one C02 heading, but answers neither.
   - Together P4 (paragraph 2 is about the bill and pouch) mildly supports C05's second key.
3. **TS-DESC C10 and C06.** C10's key ("the parts of one thing") hints that the whole-truck choice is the main idea in C06.
4. **TS-SEQ P4 and C04.** P4's step list shows the buttermilk is poured off after the lump forms. C04 asks why "First" would be wrong there.
5. **C15 (TS-SEQ) "Before".** I judge it indefensible ("Before your legs feel loose, stretch" contradicts the jog that loosens them). A reviewer should confirm.
6. **Similar bank.** Three items per lesson leaves nine core items per lesson without a sibling (accepted warning).

## 8. Gate output (my lessons)

```
info  lesson TS-SEQ: Practice Together = SK-TSSEQ-P1, SK-TSSEQ-P2, SK-TSSEQ-P3, SK-TSSEQ-P6
info  lesson TS-DESC: Practice Together = SK-TSDESC-P1, SK-TSDESC-P2, SK-TSDESC-P3, SK-TSDESC-P4
warn  ... similar: 9 of 15 core items have no similar item (both lessons; accepted)
PASS (0 failures)
readability: SEQ p3 4.1, p4 4.1; DESC p3 4.1, p4 3.2
```

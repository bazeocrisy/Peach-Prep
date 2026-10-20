# Release review: Writing content (W-TASK-01, W-TASK-02, W-REV-01, W-REV-02)

## Verdict: **BLOCK**

One finding blocks release: a scoring rule in both tasks' parent guide that the rubric does not contain (B1). It takes one sentence to fix in two files. After B1 is fixed, the content can be released. The FIX items should go in the same pass, because each one is small.

| Severity | Count |
|---|---|
| BLOCK | 1 |
| FIX | 5 |
| NOTE | 7 |

**Scope and method**
- I diffed every file against `docs/pre-review-writing/`.
- I checked every finding in `review-writing-A.md` (29 findings) and `review-writing-B.md` (28 findings) against the current text. The fix pass handled all of them. Two replacements brought in new problems: B1 and F1/F2.
- The fix pass also rewrote all four sources into shorter sentences. Neither review asked for that, so I rechecked every evidence ref, every source fact and the model wording against the new sources.
- I ran `verification/check-writing.js` (0 failures, 0 warnings) and `verification/check-content.js` (PASS).
- I ran an n-gram check of both models against their current sources. Neither model has a 5-word run copied from its source. The only 4-word overlaps are "a reading buddy program", "a skate park is" and "the belly and back".
- No content files were edited.

---

## 1. Model essay scores (official rubric, trait by trait)

| Task | Purpose & Organization | Evidence & Elaboration | Language Usage & Conventions | Total |
|---|---|---|---|---|
| W-TASK-01 (reading buddies) | **3** | **3** | **2** | 8 |
| W-TASK-02 (skate park) | **3** | **3** (low; see F2) | **2** | 8 |

**W-TASK-01**
- **P&O 3.**
  - The hook is followed by a clear opinion and a preview of both reasons.
  - There is one body paragraph per provided reason, in the order the reasons were given.
  - Linking words are used throughout: First, when, also, According to, so, In addition, In conclusion.
  - The conclusion restates the opinion and both reasons. It asks the audience, the principal, to act ("Please start…").
- **E&E 3.**
  - **Reason 1:** two facts from Source 1 (hearing a big buddy read; help with hard words) and one from Source 2 (new words from hearing stories). The writer adds their own explanation: "That gives them something to aim for…" and "More new words and more practice add up…".
  - **Reason 2:** two facts from Source 1 (rehearsing the book; feeling proud) and one from Source 2 (learning by teaching). The writer adds their own explanation: "All that extra thinking makes the older buddy a stronger reader, too."
  - Each source is named, including by title.
  - There are no copied runs. The closest paraphrase is "big buddies rehearse each book before a visit" (from p1:3:2), but the sentence is restructured and combined with p1:3:3.
- **LUC 2.**
  - There are no errors.
  - Sentences are varied: simple, compound and complex (because, when, so that, until).
  - Tense shifts are all justified, and subjects and verbs agree.
  - The essay is 255 words.

**W-TASK-02**
- **P&O 3.**
  - The hook names the other side and then states the opinion with a preview of both reasons.
  - The body paragraphs follow First and Second.
  - The conclusion names the council and asks it to act ("Please choose the skate park…").
- **E&E 3.**
  - **Safety:** three facts from Source 1 (cars, cracks and rocks, a place built for riding) and one from Source 2 (helmets, pads and slow practice). The writer adds their own explanation: "so riders would not have to dodge cars or bump over cracks."
  - **Health:** two facts from Source 2 (at least 60 minutes; many kids don't get it) and one from Source 1 (leg, belly and back muscles). The writer adds their own explanation: "Riding is a great way to fix that" and "Since riding feels like play…".
  - The safety claims are correctly comparative ("safer").
  - This is a low 3. The safety paragraph ends on an unexplained Source 2 fact that is not tied to the park (F2), and one clause stays close to the source's first sentence (F1).
- **LUC 2.**
  - There are no errors.
  - Sentences are simple, compound (but, and) and complex (because, so, since).
  - Present tense is used for facts, would for the proposal, and can in the conclusion.
  - The essay is 258 words.

---

## 2. Source fact check (WebSearch)

| Claim (current text) | Where | Verdict | Source |
|---|---|---|---|
| "Health experts say children need at least one hour (60 minutes) of activity every day." | W-TASK-02 p2:1:1; model ¶3; evidence; lookFors | **Accurate.** CDC: "Children and adolescents 6 to 17 need to be active for at least 60 minutes every day" (moderate-to-vigorous). "At least" now matches the guideline, which is a minimum. | [CDC, Child Activity: An Overview](https://www.cdc.gov/physical-activity-basics/guidelines/children.html) |
| "Falls can still happen at a skate park." | W-TASK-02 p2:4:3; evidence; lookFors | **Accurate and appropriately hedged.** AAP: "Many injuries happen in skate parks, especially in the ramp and bar areas," while "Most young skateboarders are injured on public roads or sidewalks and in parking lots." This supports "safer", not "safe". | [AAP, HealthyChildren.org: Skateboarding and In-Line Skating](https://www.healthychildren.org/English/healthy-living/sports/Pages/Skateboarding-and-In-Line-Skating.aspx) |
| "Experts say younger riders should have an adult nearby." | W-TASK-02 p2:4:6; evidence; lookFors | **True but understated.** AAP: "Children aged 6 to 10 years should have close adult supervision when skateboarding." AAOS: they "need close supervision from an adult whenever they ride." "Nearby" is weaker than "close supervision" for exactly the age of the reader. → **F4** | [AAP, HealthyChildren.org](https://www.healthychildren.org/English/healthy-living/sports/Pages/Skateboarding-and-In-Line-Skating.aspx); [AAOS OrthoInfo, Skateboarding Safety](https://www.orthoinfo.org/staying-healthy/skateboarding-safety) |
| Reading-buddy benefits: young readers get excited about books; they hear what fluent reading sounds like; big buddies read more smoothly, feel proud, learn patience, understand stories better and "feel more sure about reading" | W-TASK-01 p1 ¶2–3, p2 ¶2–4 | **Accurate and hedged** ("many teachers say", "studies … often report"). Edutopia (teacher account): both groups "get excited about Reading Buddies time"; younger students "see what being fluent looks like"; older students "increase their confidence" and build "patience and empathy"; buddies are "a great way to build community in the school." UT Austin (2025): tutees "saw significant improvement in their oral reading fluency," and tutors "improved in oral reading and reading comprehension skills" and felt satisfied by their tutees' progress. Education Northwest summarizing Cohen, Kulik & Kulik: tutors show "a small but significant effect for academic outcomes and for self-concept." | [Edutopia, Reading Buddies](https://www.edutopia.org/article/reading-buddies); [UT Austin College of Education, 2025](https://education.utexas.edu/news/2025/09/03/reading-buddies/); [Education Northwest, Peer and Cross-Age Tutoring](https://educationnorthwest.org/sites/default/files/PeerandCross-AgeTutoring.pdf) |
| "Young kids learn many new words when they hear stories read aloud." | W-TASK-01 p2:3:2 | **Accurate.** Santa Clara University study: "robust evidence that reading aloud with young children can help them learn new vocabulary." Gains are larger when the adult explains words (Justice et al., LSHSS 2005), which fits a buddy who talks about the story. | [Santa Clara Univ., Rhyme over time](https://scholarcommons.scu.edu/psych/364); [Justice, Meier & Walpole 2005, LSHSS](https://pubs.asha.org/doi/full/10.1044/0161-1461(2005/003)) |
| Bluebird box is on a metal pole in the open, sunny part of the yard; it is painted light blue | W-REV-02-6 steps; W-REV-02-8 key; sentence 8; header | **Accurate.** Georgia DNR: "Whenever possible, mount bluebird nesting boxes on poles made of metal or sunlight-resistant PVC pipes"; "Boxes should be placed in open habitats with sparse trees and low vegetation"; "The outside of bluebird boxes should be painted a light color"; mount the box at least 4 ft above the ground. NABS: "Mounting nestboxes on wooden poles, fence posts, or a tree is not recommended." The story's **metal** pole is correct, and Review B's wooden-post suggestion was rightly not adopted. Light blue meets DNR's "light color". NABS prefers "light earth-tone or white" (N7). | [Georgia DNR WRD, Creating the Perfect Home for Bluebirds](https://georgiawildlife.com/sites/default/files/wrd/pdf/CreatingPerfectHomeforBluebirds.pdf); [NABS, Welcome Back the Bluebird](https://www.nabluebirdsociety.org/PDF/WelcomeBackTheBluebird.pdf) |
| Ride away from traffic; avoid cracks and rocks; skate parks are away from traffic; helmets and pads | W-TASK-02 p1 ¶2, p2 ¶4 | **Accurate.** AAOS: "Children are most at risk for injury when they skateboard near traffic"; check for "cracks, rocks, and other debris"; parks are "away from motor vehicle and pedestrian traffic"; wear "a helmet, wrist guards, and knee and elbow pads." | [AAOS OrthoInfo](https://www.orthoinfo.org/staying-healthy/skateboarding-safety) |

**Nothing says gear or a park will "keep" kids safe.** I searched all four files for `keep`/`keeps` and `safe` as a whole word. The only hits are "keep moving", "keep practicing" and clue wording such as "Keep only…". All safety wording is "safer" or "stay safer".

## 3. Reasons supported in both sources

| Task | Reason | Source 1 | Source 2 |
|---|---|---|---|
| W-TASK-01 | Younger students become better readers | p1 ¶2 (s2–4, s6–8) | p2 ¶3 (s2–6) |
| W-TASK-01 | Older students learn and grow | p1 ¶3 (s2–6) | p2 ¶1 s2, ¶2 (s2–6) |
| W-TASK-02 | Safer place to ride | p1 ¶2 (s2–8), p1:1:1, p1:1:4 | p2 ¶4 (s2–6) |
| W-TASK-02 | Active and healthy | p1 ¶3 (s2–5) | p2 ¶1–3 |

All 35 evidence refs point to the sentence their note describes. I checked each one against the rewritten sources.

---

## 4. Findings

### BLOCK

**B1. An invented scoring rule in the parent guide**
- **Location:** `W-TASK-01.js` `lookFors.evidence[2]` and `W-TASK-02.js` `lookFors.evidence[2]`.
- **Problem:**
  - Both lines read: "For a 3, both provided reasons are developed, and **each has more than one well-chosen detail that the child explains**."
  - The rubric's Evidence 3 descriptor sets no number of details and does not require every detail to be explained. It asks for "effectively elaborating on the provided reasons, integrating relevant and well-chosen information from the source(s)."
  - This is the same kind of error the fix pass was meant to remove (the one-source cap): a threshold parents will apply as if it were official.
  - Read literally, it also contradicts the W-TASK-02 model. Its Source 2 safety detail is not explained, yet the model is presented as an 8.
- **Fix:** in both files, replace the first sentence of that string so the line reads:
  > "For a 3, both provided reasons are developed with relevant, well-chosen details from the sources, and the child explains how they support the reasons. The prompt asks for both sources, and using both makes the evidence stronger. The rubric scores relevant information from the source(s), so it sets no rule that one source limits the score; check whether each reason really has enough support. Developing only one of the two reasons usually keeps the score at 2 or below."

### FIX

**F1. A near-copied source clause in the W-TASK-02 model**
- **Location:** `W-TASK-02.js` `model.paragraphs[1]`, sentence 4.
- **Problem:**
  - "A skate park is built just for riding…" keeps p1:1:1 ("A skate park is a place built for riding.") in the same order, with "a place" dropped and "just" added.
  - `model.notes[1]` says the writer never copies or swaps "a word or two". For this clause, that is not strictly true, and children will imitate the exemplar.
- **Fix:** replace sentence 4 with:
  > "Riders at a skate park have their own space away from traffic, so they would not have to dodge cars or bump over cracks."
  
  In `model.notes[1]`, change the quoted example `"so riders would not have to dodge cars or bump over cracks"` to `"so they would not have to dodge cars or bump over cracks"`. I checked the new sentence: no 5-word run is copied.

**F2. The safety paragraph in the W-TASK-02 model ends on an unexplained fact that is not tied to the park**
- **Location:** `W-TASK-02.js` `model.paragraphs[1]`, last sentence; `model.notes[1]`.
- **Problem:**
  - The Source 2 support for Reason 1 is "helmets, pads, and slow practice … help riders stay safer."
  - That is true anywhere, not only at a skate park, and the paragraph stops there. Review A raised this as S6.
  - It still scores 3, but it is the weakest spot in either model, and it does not show what "explain why it matters" looks like.
- **Fix:** append this sentence to the end of `model.paragraphs[1]`:
  > "A skate park would give kids room to practice slowly, with no cars rushing by."
  
  In `model.notes[1]`, add it to the list of explanations:
  > `…"so they would not have to dodge cars or bump over cracks", "A skate park would give kids room to practice slowly, with no cars rushing by", "Riding is a great way to fix that" and …`
  
  The model grows to about 272 words, with no copied 5-word run (checked).

**F3. The rule on very brief responses is stated more firmly than the rubric states it**
- **Location:** `W-TASK-01.js` `lookFors.conventions[4]` and `W-TASK-02.js` `lookFors.conventions[4]`.
- **Problem:** "A very short response **cannot** earn a 2 even with no errors." The rubric footnote says: "Very brief responses, even with few or no errors, **may not** be sufficient to demonstrate adequate or partial command."
- **Fix:** replace the second sentence in both files with:
  > "A response must be long enough to show command; a very short response may not earn a 2 even with no errors."

**F4. The supervision guidance is understated for an 8-year-old reader**
- **Location:** `W-TASK-02.js` p2:4:6; `evidence` entry for `p2:4:6`; `lookFors.evidence[0]`; header comment.
- **Problem:** "Experts say younger riders should have an adult nearby." The AAP and AAOS both say children aged 6 to 10 need **close** adult supervision. The sentence is true, but it is softer than the guidance it cites.
- **Fix:**
  - p2:4:6 → "Experts say younger riders should have an adult watching them closely."
  - Evidence note → the same sentence.
  - `lookFors.evidence[0]`: change "younger riders having an adult nearby" to "younger riders having an adult watching closely".
  - Header: change "should ride with an adult nearby" to "should ride with an adult watching closely".
  - No refs shift.

**F5. The W-REV-01-1 clue points to the key by a word match**
- **Location:** `W-REV-01.js` item `W-REV-01-1` `clue`.
- **Problem:** "…what Jordan wants for **Room 12's tank**?" The key is the only choice that mentions the tank ("…live in that tank"). This is a milder version of the "think or should" leak that both reviews flagged (SPEC §6.7).
- **Fix:**
  > `clue: "An opinion tells what the writer wants or believes. It is not just a fact or a question. Which choice tells the reader what Jordan wants to happen?"`

### NOTE

**N1. A W-TASK-01 model note calls a source idea the writer's own explanation**
- **Location:** `W-TASK-01.js` `model.notes[1]`.
- **Problem:** "You cannot explain a story to someone else until you truly get it yourself" is given as an explanation "of their own". It is mainly a restatement of p2:1:2 and p2:2:2 (learning by teaching). The paragraph's real elaboration is the last sentence, which the note already cites.
- **Fix:** replace `The writer also adds explanations of their own, such as "That gives them something to aim for when it is their turn to read" and "You cannot explain a story to someone else until you truly get it yourself."` with:
  > `The writer also adds explanations of their own, such as "That gives them something to aim for when it is their turn to read," and restates "learning by teaching" in kid-friendly words ("You cannot explain a story to someone else until you truly get it yourself").`

**N2. The W-TASK-01 model's wrap-up mentions "practice" that the paragraph never set up**
- **Location:** `W-TASK-01.js` `model.paragraphs[1]`, last sentence.
- **Problem:** "More new words and more practice add up to a stronger reader." The paragraph never cites the extra-practice fact (p2:3:3). A reader can infer it, so the score is unaffected.
- **Fix (optional):** "More new words and a helper close by add up to a stronger reader."

**N3. An unhedged absolute in W-TASK-01 Source 1**
- **Location:** `W-TASK-01.js` p1:1:4.
- **Problem:** "Each visit lasts twenty or thirty minutes." Visit length varies by program. Before the rewrite, the sentence was hedged ("Many buddies meet … for about…").
- **Fix:** "Visits often last twenty or thirty minutes." No refs shift.

**N4. Evidence notes drop the source's "can"**
- **Location:** `W-TASK-02.js` evidence `p1:2:3` ("Sidewalks have cracks…") and `W-TASK-01.js` evidence `p1:2:4` ("The buddy helps with hard words.").
- **Problem:** The sources say "can have" and "can help".
- **Fix:** Change the notes to "Sidewalks can have cracks, bumps and loose rocks…" and "The big buddy can help with hard words."

**N5. Revising-set header comments say "Each item fixes one of these"**
- **Location:** the `W-REV-01.js` header and the `W-REV-02.js` header.
- **Problem:** That is not accurate for W-REV-01-6 (choosing evidence), W-REV-02-3 (adding a simile) or W-REV-02-8 (a text feature). These items add to the draft. They do not depend on any unlisted error, so no item is affected. The comments are code only.
- **Fix:**
  - W-REV-01: "…Items 1–5, 7 and 8 fix one of these; item 6 adds evidence for the reason in sentence 7."
  - W-REV-02: "…Items 1, 2 and 4–7 fix one of these; items 3 and 8 add a simile and a text feature."

**N6. Two clues are strong, but they stay within the rule**
- **Location:** W-REV-02-2 clue ("…mean the opposite of how she does it there") and W-REV-02-5 clue for slot 2 ("before or after the birdhouse was put up").
- **Problem:** Each clue narrows to the key's meaning, but the child must still make the inference that the item tests. Neither clue names the answer.
- **Fix:** No change required.

**N7. The bluebird box color**
- **Location:** `W-REV-02.js` sentence 8, item 8 key, header.
- **Problem:** Light blue meets Georgia DNR's "a light color". NABS prefers "light earth-tone or white".
- **Fix:** No change required. If wanted, change "light blue" to "white" in sentence 8, the item 8 key and why, and the item 7 distractor ("little blue birdhouse").

---

## 5. Notes for parents (item 4 of the brief)

- **Model notes:** These are true except for F1 (the copying claim, which is fixed by changing the sentence) and N1 (wording).
  - W-TASK-01's tense note is now correct: present, would/could, and past only in the hook.
  - Its list of linking words matches the essay.
  - W-TASK-02's notes match the essay, and its agreement examples are real agreements, with no modals.
- **lookFors:** These are true except for B1 and F3. The one-source cap is gone, the audience look-for is present, and the guidance on outside ideas is the same in both tasks.
- **Planner:** All six lines in each task are accurate.
  - Both opinion lines fix the opinion to the provided reasons.
  - The W-TASK-02 safety prompt asks "safer … than a street or sidewalk".
- **No "keep … safe":** confirmed (see §2).

## 6. Revising items (item 5 of the brief)

| Check | Result |
|---|---|
| Exactly one defensible best answer | **Pass.** I checked all 16 items and every slot and distractor. W-REV-02-6 is unique even though a box can be fastened to a pole before the pole is set: "a metal pole" (step 2) is introduced before "the pole" (step 3), and "the hole" needs step 1. |
| The draft's deliberate errors are the only errors items depend on | **Pass.** W-REV-01: sentence 3 now reads "look at the tank to make sure the water is clean", which removes the unclear *it*. The only errors are *studies*/*watch* plus the listed weaknesses. W-REV-02: no unintended errors; painting is now in sentence 8. |
| Sentence numbers are consistent | **Pass.** W-REV-01 runs (1)–(10), and the hottext answer `p1:2:5` = (6). W-REV-02 runs (1)–(10). Every dropdown `text` reproduces its sentence exactly, apart from the blank. |
| Writer is Tasha, character is Lena | **Pass.** "Tasha" appears only as the writer (blurb, byline, prompts, item 8). "Lena" is the character in all 27 places: draft, choices, `why`, clues and order steps. |
| `why` is true | **Pass.** |
| `clue` doesn't leak the answer | **Pass except F5.** See N6 for the two strong clues that are within the rule. |
| `std` fits | **Pass.** W-REV-01-6 is now 3.T.T.3.c, and W-REV-01-4 adds 3.L.GC.2.b. The other codes (T.1.e, SS.1.b/c/d, SS.2.b, L.V.3.e, GC.2.b/c, T.3.c) match `standards.js`. |

## 7. Earlier-review findings: status

- Review A: all 29 findings are resolved.
  - S4 was replaced by new wording that brings in B1.
  - S6 is only partly resolved: the helmet-rules sentence was removed, but the paragraph still ends on an unexplained fact (F2).
- Review B: all 28 findings are resolved.
  - S6 is replaced by B1.
  - S2's "adult nearby" wording is softer than the guidance it cites (F4).

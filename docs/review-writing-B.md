# Writing review B: adversarial pass

Scope: `W-TASK-01`, `W-TASK-02`, `W-REV-01`, `W-REV-02`, checked against `docs/SPEC.md`, the GaDOE Grade 3 three-trait rubric (August 2026) and the Grade 3 Writer's Checklist. No content files were edited. `verification/check-writing.js` reports 0 failures and 0 warnings, so every finding below is one the checker cannot see.

Severity: **MUST** blocks release (SPEC §7). **SHOULD** needs fixing before the next release. **NIT** is polish.

---

## What held up (checked, no finding)

- **Answer keys.** For every revising item I looked for a second defensible answer (all 16 items, every dropdown slot and every distractor) and found none. All transitions (`First,` / `In addition,` / `This time,` / `A week later,`), the combined sentence with *so*, the word choices *check* and *whacked*, the simile, the dialogue, the order item, both endings and both multi-select sets each have exactly one answer.
- **Provided reasons.** All four provided reasons are supported in **both** sources:
  - W-TASK-01, R1: p1 ¶2 and p2 ¶3. R2: p1 ¶3 and p2 ¶2.
  - W-TASK-02, R1: p1 ¶2 and p2 ¶4. R2: p1 ¶3 and p2 ¶1–3.
- **Source length.** Each source is 172–189 words, inside the SPEC range of 150–300.
- **W-TASK-01 claims.** The claims hold up. A 2025 UT Austin cross-age tutoring study found that younger tutees gained in fluency and that the grade 3–5 tutors "also grew in their literacy skills" ([UT Austin College of Education, 2025](https://education.utexas.edu/news/2025/09/03/reading-buddies/)).
- **W-REV-01-6.** The fins and gills facts are accurate.

---

## MUST

### M1. W-TASK-01 model essay copies a source sentence almost word for word, while its note says the facts are in the writer's own words
- **Where:** `W-TASK-01.js` → `model.paragraphs[1]`, sentences 2–3, and `model.notes[1]`.
- **Problem:**
  - Model: "The buddy can also help with tricky words." Source p1:2:3: "**The buddy can help with hard words** and talk about the pictures and the story." Six of the model's seven words come straight from the source, in the same order; only *hard* became *tricky*.
  - The sentence before it does the same thing. Source p1:2:2: "When an older buddy reads aloud, the younger child hears how a good reader sounds." Model: "when a big buddy reads out loud, a little kid learns what a good reader sounds like." That is the same sentence frame with synonyms swapped in.
  - The note says "The facts are in the writer's own words." For these sentences that is false.
  - The rubric's Evidence trait requires the writer's own words, and "Copied" is a condition code. `lookFors.evidence[3]` tells parents that copying earns no credit. Yet the exemplar labeled 8/8 shows a child exactly the synonym-swapping habit that parents are told to mark down.
- **Fix:** Rewrite both sentences. For example:
  - "According to the first source, listening to an older buddy read shows a younger child what smooth reading is supposed to sound like."
  - "When the little reader gets stuck, the big buddy is right there to help sound the word out."
  - Then reread the whole model against both sources for any other run of four or more source words in a row.

### M2. W-TASK-02 model essay tells children that a skate park and safety gear will "keep" them safe
- **Where:** `W-TASK-02.js` → `model.paragraphs[0]` ("A skate park would keep kids safe") and `model.paragraphs[1]` ("helmets, pads, and learning tricks one step at a time keep riders safe"; "is far from traffic").
- **Problem:**
  - The sources are hedged: p2:4:3 says gear and going slowly "**help** riders stay safe", and p1:2:4 says "away from traffic", not "far". The model hardens both into absolute promises.
  - Those promises are inaccurate. The American Academy of Pediatrics says "Many injuries happen in skate parks, especially in the ramp and bar areas," even though "most young skateboarders are injured on public roads or sidewalks and in parking lots" ([AAP, HealthyChildren.org](https://www.healthychildren.org/English/healthy-living/sports/Pages/Skateboarding-and-In-Line-Skating.aspx)).
  - The accurate claim is **safer than the street**. "Keeps you safe" is something an 8-year-old should not be taught, and it is printed as the 8/8 exemplar.
  - The model also misrepresents the source it cites.
- **Fix:**
  - Change "would keep kids safe" to "would give kids a safer place to ride".
  - Change "keep riders safe" to "help riders stay safe".
  - Change "far from traffic" to "away from cars".
  - Recommended as well:
    - Change `reasons[0]` to "A skate park would give kids a safer place to ride."
    - Change `planner.reasonPrompts[0]` to "Why would a skate park be a safer place to ride than a street or sidewalk?" The current wording ("Why would a skate park be a safe place to ride?") assumes total safety and pushes children toward the same overclaim.
    - Add to `lookFors.evidence[0]`: "Strong responses compare (safer than streets); a claim that kids can't get hurt is not supported."

---

## SHOULD

### S1. W-TASK-02 source states the activity guideline as "about one hour"; the official guideline is a minimum
- **Where:** `W-TASK-02.js` p2:1:1, the header comment, and `model.paragraphs[2]` ("about an hour each day").
- **Problem:** The CDC says children 6–17 need "**60 minutes or more** of moderate-to-vigorous intensity physical activity each day" ([CDC, Child Activity: An Overview](https://www.cdc.gov/physical-activity-basics/guidelines/children.html)). "About one hour" reads as a target or a ceiling, but the guideline is a floor. The file header claims this is the published recommendation, so the wording should match it.
- **Fix:**
  - p2:1:1: "Health experts say that children should be active for at least one hour every day."
  - Model: "kids need to move for at least an hour each day".
  - Update `evidence[9].note` and `lookFors.evidence[1]` to match.

### S2. W-TASK-02 sources never mention adult supervision or that injuries happen at skate parks, too
- **Where:** `W-TASK-02.js` p2 ¶4.
- **Problem:** The audience is 8–9-year-olds. The AAP says "Children aged 6 to 10 years should have close adult supervision when skateboarding" and warns about skate-park injuries (same AAP source as M2). A safety paragraph written for third graders that leaves out supervision is a gap a parent will notice.
- **Fix:** Add one sentence to p2 ¶4 after sentence 2: "Falls can still happen at a skate park, so young riders should go with a grown-up who can watch them." Then add "riding with a grown-up nearby" to `lookFors.evidence[0]`.

### S3. W-TASK-01 model note on verb tense is false
- **Where:** `W-TASK-01.js` → `model.notes[2]`: "Verb tense stays in the present throughout."
- **Problem:** The model uses past tense ("she just read a whole page") and conditionals ("That could happen", "it would help", "would help little readers grow"). A parent who uses this note to teach consistent tense would be teaching something the model itself does not do.
- **Fix:** Use the W-TASK-02 wording: "Verb tense is consistent: present tense for facts from the sources (buddies help, children pick up), and would or could for what the program would do. The one past-tense verb (just read) fits the moment it describes."
- **Also:** "complex ones built with ... before" is wrong. "before explaining it" is a preposition followed by a gerund, not a clause. Drop *before* from that list.

### S4. W-TASK-01 model's elaboration is mostly source content, and the notes count it as the writer's own
- **Where:** `W-TASK-01.js` → `model.paragraphs[1]` and `[2]`, and `model.notes[1]`.
- **Problem:**
  - The note's two examples of elaboration both come from the sources:
    - "one teacher can't sit with every child, so a buddy adds practice" is p2:3:4.
    - "an older buddy has to really understand a story before explaining it" is p2:2:2.
  - Neither body paragraph has a sentence of the writer's own that ties the facts back to the reason or the opinion. Compare W-TASK-02, where "Riding is a great way to fix that." does this job.
  - The rubric's top Purpose score asks the writer to clearly link ideas to the opinion, and the top Evidence score asks for effective elaboration. As written, this model is closer to a 2 on Evidence.
- **Fix:**
  - Add one sentence in the writer's own words to the end of each body paragraph. For example:
    - "More new words and more practice add up to a stronger reader."
    - "Explaining a story to someone else turns a big kid into a better reader, too."
  - Rewrite the note to point at these sentences.

### S5. Both models have more near-copied source sentences
- **Where:**
  - W-TASK-02 `model.paragraphs[1]`: "kids who ride in streets have to watch for cars". Source p1:2:2: "When kids ride in streets or parking lots, they have to watch out for cars".
  - W-TASK-01 `model.paragraphs[2]`: "older buddies practice their book ahead of time". Source p1:3:2: "the older buddy practices reading the book out loud".
- **Problem:** These are lighter than M1, but they still keep the source's sentence frame and swap one word at a time. Children copy the model's habits.
- **Fix:** Rework the structure, not just the words. For example: "Riding in the street means always looking over your shoulder for cars." Then reread both models against the sources once more.

### S6. lookFors state a one-source score limit that the rubric does not contain
- **Where:** `W-TASK-01.js` `lookFors.evidence[2]` and `W-TASK-02.js` `lookFors.evidence[2]`: "using only one source usually keeps the score at 2 or below" (W-TASK-01 words it as "usually scores no higher than 2").
- **Problem:** The rubric's Evidence 3 descriptor says "information from the **source(s)**". It sets no two-source requirement. Parents will treat this sentence as the official rule and mark down a strong one-source essay. The limit for developing only one reason is defensible, because the 3 descriptor says "provided reason**s**". The one-source limit is not.
- **Fix:** "For a 3, both reasons are developed with well-chosen details. The prompt asks for both sources; a response that uses only one is often less developed, so check whether each reason really has enough support."

### S7. Clues that give away the answer (SPEC §6.7)
- **Where and problem:**
  - **W-REV-01-1** clue: "Look for words like think or should." Only the keyed choice contains *think* or *should*, so the clue is a word search for the answer.
  - **W-REV-02-8** clue: "Which feature shows a picture of it?" Only one choice is a picture.
- **Fix:**
  - W-REV-01-1: "An opinion tells what the writer wants to happen, not just a fact. Which choice tells what Jordan wants for Room 12?"
  - W-REV-02-8: "What does Tasha want readers to be able to do? Which feature would let them do that?"

### S8. W-REV-02-6 shows a child climbing a ladder with her hands full, and no one holding the ladder
- **Where:** `W-REV-02.js` → item 6, steps 1–2: "Grandpa leaned a short ladder against the oak tree." "Tasha climbed up two steps, holding the birdhouse carefully."
- **Problem:** The American Ladder Institute says the climber must keep three points of contact and "must not carry any objects in either hand that can interfere with a firm grip on the ladder" ([American Ladder Institute](https://www.americanladderinstitute.org/page/basicladdersafety)). Item 6 asks the child to put this unsafe sequence in order and calls it the order "that makes the most sense". A picky parent will flag it.
- **Fix:** See S9. One rewrite fixes both problems. If the ladder stays, change step 2 to "Tasha climbed up two steps while Grandpa held the ladder steady," and add "Grandpa handed her the birdhouse."

### S9. W-REV-02 has a bluebird nesting in a birdhouse hung from a low oak branch, which is the wrong setup for bluebirds
- **Where:** `W-REV-02.js` → item 6, step 3 ("She hooked the birdhouse onto a strong, low branch"), together with sentence 9 / item 5 ("A week later, a bluebird moved in"). The file header asserts the realism ("often nest in birdhouses").
- **Problem:**
  - Georgia DNR: "Whenever possible, mount bluebird nesting boxes on poles," and "Boxes should be placed in open habitats with sparse trees" ([Georgia DNR, Creating the Perfect Home for Bluebirds](https://georgiawildlife.com/sites/default/files/wrd/pdf/CreatingPerfectHomeforBluebirds.pdf)).
  - Audubon says experts "recommend poles, rather than trees" ([Audubon](https://audubon.org/news/welcome-bluebirds-nestboxes)).
  - The set's own W-REV-02-7 distractor says bluebirds "like open fields". The story contradicts the set's own fact.
- **Fix:** Rewrite item 6's steps as a post mounting, which also removes the ladder (S8):
  1. "Grandpa dug a deep hole at the sunny edge of the yard."
  2. "He set a tall wooden post in the hole and packed dirt around it."
  3. "Tasha held the birdhouse steady while Grandpa screwed it to the top of the post."
  4. "Then they stepped back to admire their work."
  
  Also update the clue and `why` for item 6, and change "a strong, low branch" / "the oak branch" in W-REV-02-8's key to "a post".
  
  Optional: make it "the light blue birdhouse". Georgia DNR advises a light exterior color so the box stays cool.

---

## NIT

### N1. W-TASK-02 p1:1:1–2 are absolute statements
"A skate park is an outdoor space" and "It has ramps, rails, steps, and curved bowls". Some skate parks are indoor, and many have no bowl. Fix: "A skate park is usually an outdoor space ..." and "Many have ramps, rails, steps, or curved bowls ...".

### N2. W-TASK-02 model note and source attribution
- `model.notes[0]` says the conclusion "speaks directly to the council", but it is in the third person ("the town council should"). Fix: "names the council and asks it to act".
- In `model.paragraphs[1]`, "Many skate parks even post helmet rules." comes right after "The second source adds ...", but the fact is from the first source (p1:2:5). Fix: "The first source also says many skate parks post helmet rules."

### N3. W-TASK-01 model attribution and wording
- In `model.paragraphs[2]`, "An older buddy even feels proud when a little partner learns a new word" follows "the second source describes", but the fact is from p1:3:4. The source also says "**reads** a new word", not "learns". Fix: "The first source adds that older buddies feel proud when their partner reads a new word."
- Both models say "the first source" / "the second source". The child sees titles ("Reading Buddies", "Learning by Teaching"). Naming the title is the stronger technique to model, for example "The article 'Reading Buddies' explains ...".

### N4. W-TASK-01 prompt mixes "your" and "our"
"Your principal ... why our school should start ...". Fix: "Write an opinion essay for your principal that tells why your school should start a reading buddy program."

### N5. lookFors disagree on ideas from outside the sources
W-TASK-01 says outside ideas "are fine as extra support". W-TASK-02 says unsupported reasons "do not add credit". Both can be true, but parents comparing the two will read them as conflicting. Use the same sentence in both: "Ideas from the child's own life are fine as extra elaboration but do not replace source information."

### N6. W-TASK-01 p2 ¶4 offers a third reason the scoring notes do not mention
"the school starts to feel friendlier" is a third reason. Add to `lookFors.evidence`: "Using the 'friendlier school' detail is fine as elaboration or in the conclusion, but it does not replace support for the two provided reasons."

### N7. Implausible distractors (SPEC §6.8)
- W-REV-01-3: *splash*.
- W-REV-02-2: *reached*. "Tasha reached the nail" is not a misreading anyone would make.
- W-REV-02-8: a Georgia map of "all the cities and rivers", and hammer prices.
- W-REV-01-6: "Fish tanks are sold in many shapes, sizes, and colors."

Fixes:
- W-REV-01-3: replace *splash* with *stare at*. It is careful looking, but with no purpose of making sure.
- W-REV-02-2: replace *reached* with *pressed*.
- W-REV-02-8: replace the map with "a timeline of the days Tasha worked on the birdhouse". It is plausible, but it does not show what the birdhouse looked like.

### N8. W-REV-02 is "Tasha's" draft about herself, written in the third person
The byline is "Tasha's first draft", and the blurb says "her story about building a birdhouse with her grandpa", but the story calls her "Tasha" and "she". That is odd for a personal narrative. Fix: change the byline to a different writer (for example "Marcus's first draft"), or rewrite the draft in the first person.

### N9. W-REV-02 draft jumps to "When the paint was dry" with no painting
Sentence 8 refers to paint and to "the blue birdhouse", but nothing earlier mentions painting, and the story only ever builds with one nail. No item fixes this, so the revised story still has the hole. Fix: begin sentence 8 with "After they painted it bright blue and the paint dried, ...", or add an item for it.

### N10. W-REV-02-4 key: hammer continuity and the `why` quotation
- The key has Tasha "dropping the hammer", but in sentence 7 she taps the nail without picking the hammer up. Fix: "... Tasha groaned, setting the hammer down hard."
- The `why` quotation marks surround only the spoken words, so the answer it names does not match the full choice text.

### N11. W-REV-02-4 adds dialogue that repeats sentence 5
After the change, the story says "Tasha felt like giving up," and then shows the same feeling in dialogue. A teacher would replace the telling sentence. Fix: change the prompt to "Which sentence should replace sentence 5 to show how Tasha feels?"

### N12. W-REV-01-3 `why` and clue for "notice"
The `why` defines *notice* as "to see something by chance". That is not quite right, because a person can notice something on purpose. The clue also all but repeats the definition of *check* ("look carefully on purpose to make sure something is right"). Fix:
- `why`: "Notice means to see something, but it does not mean doing a careful job."
- Clue: "Which word names a careful job a helper does every day?"

### N13. W-REV-01-6 calls an opinion a fact
The stem says "Jordan found these facts", but "Some families think that cats and dogs are more fun than fish" is an opinion. Fix: "Jordan found these sentences in a book about class pets."

### N14. W-REV-01 sentence 3 has an unclear "it" that no item targets
In "look at the water to make sure it is clean", *it* could mean the fish or the water. This is minor, but it is a second flaw in a sentence an item revises. Fix: "... to make sure the water is clean."

### N15. W-REV-01-4 standard code
Combining two simple sentences into a compound sentence is also 3.L.GC.2.b ("use a variety of simple, compound, and complex sentences"). Fix: `std: ["3.T.SS.1.c", "3.L.GC.2.b"]`.

### N16. W-REV-02-1 clue says setting is "where and when"
A child can then defend "After they finished, they planned to eat lunch together." as a *when* detail. The prompt does narrow the item to the garage, but the clue invites the wrong reading. Fix: "Setting details help the reader picture the place. Keep only the sentences about what the garage looks, sounds or smells like."

### N17. W-REV-02-2 `why` calls "touched" a gentle hit
Touching is not hitting. Fix: "Tapped means a gentle hit, which is what Tasha does in sentence 7, and touched is not a hit at all."

---

## Counts

| Severity | Count |
|---|---|
| MUST | 2 |
| SHOULD | 9 |
| NIT | 17 |
| **Total** | **28** |

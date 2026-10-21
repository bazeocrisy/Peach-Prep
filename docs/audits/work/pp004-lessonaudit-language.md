# PP-004 lesson-quality audit: language slice

Auditor: independent instructional-quality auditor (Agent B role). This audit was read-only. No repository file was changed except this report.

## Scope

The slice covers 53 lessons:
- js/data/lessons/L-GC2.js: 3.L.GC.2.b, 3.L.GC.2.c and 3.L.GC.2.d. 3.L.GC.2.a was skipped as the brief instructs.
- L-GUM1.js through L-GUM5.js: 41 GUM-chart rows.
- L-V12.js: 3.L.V.1.a and 1.b, and 3.L.V.2.a, 2.b and 2.c.
- L-V3.js: 3.L.V.3.a through 3.L.V.3.e.

## Method

Each lesson was dumped with a script, so every field could be read: teach, learn, write, passages, practice and test. Practice was split into Together (the first ceil(n/2) items) and Try (the rest). The dumps are in /tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/langaudit-B/.

Checks made:
- Every test item was solved before its key was read. Hottext targets were resolved to sentence text so their keys could be checked.
- Every example sentence was checked to be grammatical.
- Every rule was checked for accuracy: verb forms, plurals, apostrophes, commas, pronoun cases, comparatives, hyphenation splits and ABC order.
- Objectives were checked against the official wording in js/data/standards.js and in the GUM chart (standards PDF pp. 15-17).
- The I/C/M/R class in each GUM code was checked against the grade 3 column. All match, including "-d or -es" = R and "plural possessive" = I.
- A duplicate scan compared test content against practice, learn and teach content. Only stock prompts repeat. No test sentence copies a practice or learn sentence.

## Counts

- Lessons: 53. STRONG 50, ADEQUATE 3, WEAK 0.
- Findings: 8 in total. 1 is MUST and 7 are SHOULD.
- Wrong test keys: 0.
- Items with two defensible answers: 0.
- Objective wording: 53 of 53 match the official text.

## Cross-cutting observations (no finding raised)

- **Rules are accurate throughout.** This includes y-to-ies, f-to-ves, its/it's, plural possessives, Oxford-comma lists, dates, city and state, dialogue punctuation, title capitalization, ABC order with shorter words first, and the there/then test for where/when.
- **Watch Me models the thinking.** Learn items use real step-by-step reasoning, including "no change needed" cases (GUM1-4 W2, GUM3-7 W2) and a wrong-split case (GUM3-8 W2, W3).
- **Learn It and "why it matters".** No GUM lesson says why the skill matters in so many words. Each one has a test tip and clue words inside the points instead. This was not raised as a finding, because the brief says not to ask for longer lessons.
- **Lessons that stay inside grade 3.** GUM1-6 (-ing) and GUM4-7 (helping verbs) deliberately avoid be + -ing. That fits the chart, where the progressive aspect is NYI at grade 3 (p. 17), so it was not flagged.
- **Speaking rows.** The three speaking rows (GUM1-1, 1-2, 1-3) are assessed in writing. Each parent note sends the practice to speech, which is reasonable.

## Lesson table

| Key | Verdict | Findings |
|---|---|---|
| 3.L.GC.2.b (mix sentences, keep tense) | STRONG | none |
| 3.L.GC.2.c (subject-verb agreement) | STRONG | none |
| 3.L.GC.2.d (exact adjectives/adverbs) | STRONG | none |
| GUM1-1 R nouns+verbs complete thoughts | STRONG | LL-5 |
| GUM1-2 R singular/plural nouns | STRONG | none |
| GUM1-3 R interrogatives | STRONG | none |
| GUM1-4 R capitalize first word and I | STRONG | none |
| GUM1-5 R plurals -s/-es | STRONG | LL-6 |
| GUM1-6 R verbs -ing/-ed/-s | STRONG | none |
| GUM1-7 R action verbs | STRONG | none |
| GUM1-8 R adjectives and adverbs | STRONG | none |
| GUM1-9 R common and proper nouns | STRONG | none |
| GUM2-1 R simple verb tenses | STRONG | none |
| GUM2-2 R determiners | STRONG | none |
| GUM2-3 R capitalize proper nouns | STRONG | LL-4 |
| GUM2-4 R end punctuation | ADEQUATE | LL-1 (MUST) |
| GUM2-5 R y to ies | STRONG | none |
| GUM2-6 R personal pronouns | STRONG | none |
| GUM2-7 R prepositions | STRONG | none |
| GUM2-8 R commas: series, dates, addresses, letters | STRONG | none |
| GUM2-9 R verbs -d/-es | STRONG | none |
| GUM3-1 M apostrophes: contractions, singular possessive | STRONG | none |
| GUM3-2 M irregular plurals | STRONG | none |
| GUM3-3 M irregular past tense | STRONG | none |
| GUM3-4 M coordinating conjunctions | STRONG | none |
| GUM3-5 M collective and abstract nouns | STRONG | none |
| GUM3-6 M reflexive pronouns | ADEQUATE | LL-2 |
| GUM3-7 M comma + coordinating conjunction | STRONG | none |
| GUM3-8 M hyphens at line breaks | STRONG | LL-3 |
| GUM4-1 C prepositional phrases | STRONG | none |
| GUM4-2 C comparatives/superlatives | STRONG | none |
| GUM4-3 C pronoun-antecedent agreement | STRONG | none |
| GUM4-4 C dialogue punctuation | STRONG | none |
| GUM4-5 I relative pronouns/adverbs | STRONG | none |
| GUM4-6 I interjections | STRONG | none |
| GUM4-7 I helping and linking verbs | STRONG | none |
| GUM4-8 I frequently confused words | STRONG | none |
| GUM5-1 I capitals: abbreviations, proper adjectives, titles | STRONG | none |
| GUM5-2 I commas: direct address, yes/no | STRONG | none |
| GUM5-3 I plural possessives | STRONG | none |
| GUM5-4 I indefinite pronoun agreement | STRONG | none |
| GUM5-5 I subordinating conjunctions | STRONG | none |
| GUM5-6 I commas after introductory parts | STRONG | none |
| GUM5-7 I titles of works | STRONG | none |
| 3.L.V.1.a acquire vocabulary from texts | ADEQUATE | LL-8 |
| 3.L.V.1.b use academic/content words | STRONG | none |
| 3.L.V.2.a deconstruct with roots/affixes | STRONG | LL-7 |
| 3.L.V.2.b affixes and parts of speech | STRONG | none |
| 3.L.V.2.c construct words | STRONG | none |
| 3.L.V.3.a context clues, images, graphs, multiple meanings | STRONG | none |
| 3.L.V.3.b homophones, homographs, synonyms, antonyms | STRONG | none |
| 3.L.V.3.c shades of meaning | STRONG | none |
| 3.L.V.3.d dictionary and glossary | STRONG | none |
| 3.L.V.3.e precise word choice | STRONG | none |

## Findings

### LL-1 (MUST): GUM2-4 end punctuation, SK-GUM2-4-T3, keyed choice a
- **Evidence.** The keyed answer is "Look out, a snake is right by your foot". It joins two independent clauses with a comma alone: the command "Look out" and "a snake is right by your foot". That is a comma splice. GUM3-7 teaches the opposite: "A comma alone cannot join two sentences. You need the joining word too." The model answer in a punctuation lesson should not break a rule the site teaches elsewhere.
- **Official requirement.** GUM chart, grade 3 R: "Use periods, exclamation marks, and question marks at the end of sentences." The M row at grade 3 is "Use commas with coordinating conjunctions to join independent clauses." (standards PDF pp. 15-16).
- **Fix.** Change choice a to "Look out for the snake by your foot". Leave the end mark off, as the item requires. Update the `why` to match: "...because it is a warning said with strong feeling."

### LL-2 (SHOULD): GUM3-6 reflexive pronouns, teach.points[3] and SK-GUM3-6-T4 choice b
- **Evidence.** The teach point says a -self word can "show someone did it with no help (They cleaned it themselves)". Test T4 keys "The kids cleaned up the room themselves." as a correct use. Both are intensive uses, where the pronoun only adds emphasis. They are not reflexive, where the pronoun is the object pointing back to the subject. The lesson's big idea and its definition say a reflexive pronoun "points back to the subject". The T4 sentence is grammatical, so the key is not wrong. But the test is scoring a use that the GUM chart puts later.
- **Official requirement.** GUM chart: "Use intensive pronouns" is NYI at grade 3 and I at grade 4 (p. 17). "Use reflexive pronouns" is M at grade 3 (p. 16).
- **Fix.**
  - Teach point 4: keep "after by to mean alone (I did it by myself)" and delete the clause "or to show someone did it with no help (They cleaned it themselves)".
  - T4 choice b: replace it with a true reflexive, such as "The kids made themselves a snack."

### LL-3 (SHOULD): GUM3-8 hyphens, SK-GUM3-8-P5 clue
- **Evidence.** The clue is "Look for two smaller words inside birthday." It names the rule that produces the only correct option, birth- | day, so the student is no longer applying the rules on their own.
- **Fix.** Change the clue to: "Clap the word. Then use one of the three split rules from the lesson: two different consonants, a double letter, or two smaller words."

### LL-4 (SHOULD): GUM2-3 capitalize proper nouns, SK-GUM2-3-P4 clue
- **Evidence.** The item is a pick-3: maple, street and macon. The clue "Is a street's name one word or more than one?" tells the student that "street" is part of the name. That is the only judgment in the item that is hard.
- **Fix.** Change the clue to: "Find the name of a street and the name of a city. Then check every word in each name."

### LL-5 (SHOULD): GUM1-1 complete thoughts, teach.points[0]
- **Evidence.** The point says "Every sentence has a naming part that tells who or what." The site teaches commands as complete sentences elsewhere, for example GUM2-4: "Please close the door." A grade 3 student who applies this rule literally would mark commands as incomplete. No item in GUM1-1 tests this, so the risk is to transfer, not to scoring.
- **Fix.** Add one short sentence to point 1: "In a command like Close the door, the who is you, even though it is not written."

### LL-6 (SHOULD): GUM1-5 -s/-es plurals, SK-GUM1-5-T1
- **Evidence.** The test target is "benches". Learn W2 already models that exact word, in "three (benchs / benches / bench)". Spec §8 says "The test uses different passages and sentences than Practice and Learn, so mastery is not memory." This is a word, not a sentence, but it is the only answer on the item.
- **Fix.** Use a fresh -ch or -sh noun. For example: "Dad fixed two {0} that had stopped ticking." with the options "watches | watchs | watch". Update the clue and why to match.

### LL-7 (SHOULD): 3.L.V.2.a, teach.examples[1] root list
- **Evidence.** The root example is "rupt = break, as in rupture". Rupture is well above grade 3 vocabulary. A third grader cannot use it as a known anchor word, and anchoring the meaning is the whole point of an example.
- **Fix.** Change the line to "rupt = break, as in interrupt (to break into)". Erupt is reserved for the V.2.c build item (SK-V2c-P6), so do not use it here.

### LL-8 (SHOULD): 3.L.V.1.a, practice and test mix
- **Evidence.** The teach point names general academic words: describe, compare and explain. Of the 10 practice and test items, 8 target content words from science or social studies: burrows, habitat, tide, salt marsh/predator/shallow, evaporation, precipitation, condensation and water vapor/cycle. Only survive (P4) and observe (T5) are general or academic words. The standard asks for "a range of general, academic, and specialized" words. As written, the lesson also largely repeats 3.L.V.3.a's definition-clue practice.
- **Official requirement.** 3.L.V.1.a: "Acquire a range of general, academic, and specialized vocabulary words and phrases through grade-level texts and content." (p. 19)
- **Fix.** Retarget one Try item and one test item to a general academic word in context. For example, add a passage sentence such as "Scientists compare the marsh in summer and winter to see how it changes." and ask what compare means. Keep the remaining items as they are.

## All MUST findings

1. **LL-1: SK-GUM2-4-T3.** The keyed sentence "Look out, a snake is right by your foot" is a comma splice in a punctuation lesson, and it contradicts GUM3-7. Rewrite it as "Look out for the snake by your foot".

## Weakest lessons, in priority order

1. **GUM2-4 (end punctuation).** It has the only MUST: an ungrammatical model in a test key.
2. **GUM3-6 (reflexive pronouns).** It teaches and tests a grade 4 intensive use as if it were reflexive.
3. **3.L.V.1.a (acquire vocabulary).** It is narrow and leans almost entirely on content words. It overlaps V.3.a.

All other lessons are strong. Their rules are accurate, every example sentence checked is grammatical, the keys are right, the distractors are clearly wrong, and the `why` text explains each distractor.

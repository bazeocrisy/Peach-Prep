# PP-004: Official standards verification (grade 3)

Date: 2026-10-20. Agent: "standards". Worktree `/home/claude/pp-fix`, branch `pp-003-fixes`.

**Result:** every grade 3 code on the site is an official grade 3 expectation, and every official grade 3 expectation is on the site. No code is missing and none is extra. Of the 106 non-GUM expectations, the site's short `text` had the official meaning in 50 cases (13 word for word, 37 reworded only). In the other 56 cases the paraphrase changed the meaning: these have been corrected to the verbatim official wording. All 147 records now also carry the verbatim official wording (`official`) and its PDF page (`page`). An automated check enforces this.

## 1. Source

"Georgia's K-12 English Language Arts (ELA) Standards: Foundations, Language, Texts, & Practices, 3rd Grade—5th Grade". The PDF has 52 pages, and every page footer reads "APPROVED: May 2023". The owner uploaded it (`b748cf40-Stamdards.pdf`). It is not copied into the repository.

Page numbers below are the PDF page numbers. They are the same as the printed footer "3-5 ELA Standards | N".

| Pages | Content |
|---|---|
| 1-3 | Cover; grades 3-5 table of contents |
| 4-11 | Foundations. Grade 3 expectations are on p. 7 (Phonics), p. 9 (Fluency) and p. 11 (Handwriting). |
| 12-14 | Language table of contents, Grammar Conventions, and "Understanding & Using the GUM Chart" (p. 14) |
| 15-18 | K-12 GUM chart. Grade 3 rows are on pp. 15-17; p. 18 holds only rows that are NYI in grade 3. |
| 19 | 3-5.L.GC.2 Syntax |
| 20-23 | Vocabulary: pp. 21, 22 and 23 |
| 24-38 | Texts: Context pp. 26-27, Structure & Style pp. 29-30, Techniques pp. 32-35, Research & Analysis pp. 37-38 |
| 39-52 | K-12 Practices: EICC pp. 42-45, ST p. 47, AC pp. 49-50, CP p. 52 |

## 2. Method

1. **Text.** The supplied extraction (`pdftotext -layout`, `gadoe/standards-3-5.txt`) was parsed with a script. For each grade 3 code (`3.F.*`, `3.L.*`, `3.T.*`), the script took only the grade 3 column: the text left of the matching `4.x` code on the same line, plus the wrapped lines below it. For the single-column K-12 Practices pages, it took the whole expectation, including text wrapped above and below the code. The grade 4 and grade 5 columns were dropped.
2. **Images.** The grade 3 column of every expectation page was rendered from the PDF at 100 dpi and read against the extracted text: pp. 7, 9, 11, 19, 21, 22, 23, 26, 27, 29, 30, 32, 33, 34, 35, 37 and 38. Practices pp. 42, 47 and 49 were also spot-checked. The GUM pages, pp. 15-18, were rendered at 110 dpi and every grade 3 cell was read from the image (see `PP-004-GUM-CHART-VERIFICATION.md`).
3. **Fixes from the images.** The text and the images agreed everywhere except for two line-break artefacts:
   - "self- selected" in 3.T.RA.1.a and 3.T.RA.1.b (p. 37) is the single word "self-selected", broken across a line.
   - "compound- complex" in a grade 8 GUM row (p. 18) is likewise "compound-complex".

   The squashed "3.L.V.3.cDistinguish" (p. 23) and the split "3 rd Grade" heading (p. 37) were also confirmed against the images; neither changes any wording.
4. **Output.** The transcription is saved, with codes, domains, strands, verbatim wording and pages, as:
   - `docs/audits/work/official-gr3-standards.json`: 114 records, each `{code, domain, strand, wording, page, applicable}`. The 8 "This progression begins in grade N" placeholders have `applicable: false` and a `beginsInGrade` value.
   - `docs/audits/work/official-gr3-gum.json`: all 61 GUM rows with their K-12 levels, grade 3 level and page. Each of the 41 grade 3 rows is mapped (`siteCode`) to the site's code slug.

   Wording is kept exactly as printed, including the curly apostrophe (’) and "e.g.". Italics (*I*, *yes*, *no*, *although*, *since*) cannot be stored in plain text, so they are dropped.
5. **Comparison.** `js/data/standards.js` was compared with the JSON: codes in both directions, and the `text` field against the official wording.

## 3. Counts by domain

| Domain | Grade 3 codes in PDF | Not applicable at grade 3 | Applicable | On site | Missing | Extra | `text` word for word | Reworded only (kept) | Meaning changed (corrected) |
|---|---|---|---|---|---|---|---|---|---|
| Foundations (3.F) | 10 | 0 | 10 | 10 | 0 | 0 | 5 | 4 | 1 |
| Language (3.L.GC.2, 3.L.V) | 16 | 2 | 14 | 14 | 0 | 0 | 1 | 9 | 4 |
| Texts (3.T) | 35 | 6 | 29 | 29 | 0 | 0 | 5 | 10 | 14 |
| Practices (K-12.P) | 53 | 0 | 53 | 53 | 0 | 0 | 2 | 14 | 37 |
| **Subtotal** | **114** | **8** | **106** | **106** | **0** | **0** | **13** | **37** | **56** |
| GUM chart, 3-5.L.GC.1 (grade 3 rows) | 41 | (20 rows NYI) | 41 | 41 | 0 | 0 | 24 | 13 | 4 |
| **Total** | | | **147** | **147** | **0** | **0** | | | |

All 53 K-12 Practices expectations apply at grade 3. The Practices pages print one "K-12 Expectations" column, with no grade-specific wording and no placeholders.

The site's 147 records match exactly: 106 expectations plus 41 GUM rows.

## 4. The 8 codes the site drops as "not applicable"

Each was confirmed from both the text and the page image. Each is a placeholder in the grade 3 column, not a grade 3 expectation, so the site is right to leave it out.

| Code | PDF page | Grade 3 cell (verbatim) |
|---|---|---|
| 3.L.GC.2.e | 19 | This progression begins in 9th grade. |
| 3.L.V.2.d | 22 | This progression begins in 6th grade. |
| 3.T.C.2.b | 27 | This progression begins in 6th grade. |
| 3.T.C.2.d | 27 | This progression begins in 6th grade. |
| 3.T.SS.2.c | 30 | This progression begins in 6th grade. |
| 3.T.T.3.b | 34 | This progression begins in 9th grade. |
| 3.T.T.3.d | 34 | This progression begins in 9th grade. |
| 3.T.RA.2.c | 38 | This progression begins in 5th grade. |

There are no other placeholders in the grade 3 columns. The big ideas Phonological Awareness and Concepts of Print, and the standards F.P.1-3 and F.H.1-2, "only appl[y] to the K-2 grade band" (pp. 2, 4, 6, 10), so they have no grade 3 codes.

## 5. How the `text` field was judged and corrected

**What the field is.** `text` is not, and never claimed to be, the official wording. The generator header said "wording paraphrased", and the site labels it "(paraphrased)" on skill pages (`js/skills.js:447`) and "Georgia's standard, paraphrased:" on the parent page (`js/parents.js:147`). The lead's assignment treated it as the official-text field. Two decisions follow from that, both conservative and both logged:

1. **A new field, `official`, holds the verbatim official wording on all 147 records, and `page` holds its PDF page.** Adding fields is safe because no code reads them yet. The check (section 7) enforces both.
2. **`text` was corrected to the verbatim official wording only where the paraphrase changed the meaning, as the assignment says. Where the paraphrase only reworded, it was kept.**

**The test for "changed the meaning".** A paraphrase changed the meaning if it did any of these:
- added a condition, scope or requirement that is not in the official text;
- dropped a required action, object, qualifier, scope ("in a text", "within texts") or purpose clause;
- replaced a verb or term with one that asks something different (for example "Identify ... explain" for "Determine ... describe"; "Use" for "Integrate"; "Recognize" for "Apply knowledge of");
- turned an open "e.g." list into a closed list.

Synonyms, reordering, punctuation, and dropping an "e.g." example while keeping the requirement count as rewording only.

**GUM rows.** The `text` of a GUM row keeps its suffix "Grade 3 code: X (Name)." The 4 corrected GUM rows now read: official wording + suffix. The `gum` labels and the code slugs are unchanged, because slugs are what lessons reference.

`plain` paraphrases were reviewed against the official wording and none is factually wrong, so none was changed. One small note: the `plain` for 3.T.C.2.c says "tells when and where a text was written and why that matters". The official expectation asks to "identify the context", with no "why that matters"; this is an elaboration, not a contradiction.

## 6. Every wording difference (106 non-GUM expectations)

13 codes were already word for word (apart from quote style): 3.F.P.4.b, 3.F.P.4.c, 3.F.F.1.b, 3.F.H.3.a, 3.F.H.4.b, 3.L.GC.2.c, 3.T.T.1.b, 3.T.T.4.a, 3.T.RA.1.c, 3.T.RA.2.a, 3.T.RA.2.b, K-12.P.EICC.1.f, K-12.P.EICC.4.a.

The other 93 differ. "Corrected" means `text` now equals the official wording. "Kept" means the paraphrase only rewords it. Either way, `official` holds the verbatim wording.

| Code | p. | Site `text` before PP-004 | Official wording (verbatim) | Result |
|---|---|---|---|---|
| 3.F.P.4.a | 7 | Decode and encode words containing graphemes that represent multiple letter-sound correspondences. | Decode and encode words with graphemes that represent multiple letter-sound correspondences. | Kept (wording only) |
| 3.F.F.1.a | 9 | Increase sight-word vocabulary by reading regularly and irregularly spelled words, in isolation and in context, with accuracy and automaticity. | Increase sight word vocabulary by reading regularly and irregularly spelled words in isolation and context with accuracy and automaticity. | Kept (wording only) |
| 3.F.F.1.c | 9 | Read a wide range of grade-level texts aloud with appropriate prosody (phrasing, expression, pauses, intonation) to aid comprehension. | Read a wide range of grade-level texts aloud with appropriate prosody (phrasing, expression, juncture/pause, and intonation) to aid comprehension. | Kept (wording only) |
| 3.F.F.1.d | 9 | Self-correct while reading grade-level text, silently or aloud, rereading as necessary. | Self-correct while reading grade-level text (silently or aloud) to aid comprehension and fluency, rereading as necessary. | **Corrected** (meaning) |
| 3.F.H.4.a | 11 | Practice forming cursive letters and connectors within words. | Practice forming cursive letters and connectors in words. | Kept (wording only) |
| 3.L.GC.2.a | 19 | Distinguish correctly structured simple, compound, and complex sentences in texts read, heard, or viewed. | Distinguish between correctly structured simple, compound, and complex sentences. | **Corrected** (meaning) |
| 3.L.GC.2.b | 19 | Use a variety of simple, compound, and complex sentences for clarity and coherence, keeping verb tense consistent within and between sentences. | Use a variety of simple, compound, and complex sentences to strengthen clarity and coherence, establishing consistent verb tense within and between sentences. | Kept (wording only) |
| 3.L.GC.2.d | 19 | Use adjectives and adverbs to add details and descriptions that convey precise meaning. | Elaborate on ideas and information, using adjectives and adverbs when incorporating details and descriptions to convey precise meaning. | **Corrected** (meaning) |
| 3.L.V.1.a | 21 | Acquire a range of general, academic, and specialized words and phrases through grade-level texts and content. | Acquire a range of general, academic, and specialized vocabulary words and phrases through grade-level texts and content. | Kept (wording only) |
| 3.L.V.1.b | 21 | Use grade-level vocabulary to enhance communication in a variety of settings. | Use grade-level general, academic, and specialized vocabulary words and phrases to enhance communication in a variety of settings. | **Corrected** (meaning) |
| 3.L.V.2.a | 22 | Break words into common roots, root words, and affixes to determine meaning. | Deconstruct words using common roots, root words, and affixes to determine meaning. | Kept (wording only) |
| 3.L.V.2.b | 22 | Identify affixes associated with specific parts of speech (e.g., -ly with adverbs) to aid comprehension. | Identify affixes associated with specific parts of speech (e.g., ly is commonly used with adverbs) to aid comprehension. | Kept (wording only) |
| 3.L.V.2.c | 22 | Build words using common roots, root words, and affixes. | Construct words using common roots, root words, and affixes. | Kept (wording only) |
| 3.L.V.3.a | 23 | Use context within and beyond a sentence, including images and graphs, to determine or clarify unknown and multiple-meaning words and phrases. | Use context (e.g., images and graphs) within and beyond a sentence to determine or clarify the meaning of unknown words and multiple-meaning words and phrases. | Kept (wording only) |
| 3.L.V.3.b | 23 | Identify homophones and homographs, and use synonym and antonym relationships to clarify meanings. | Identify homophones and homographs and use the relationship between synonyms and antonyms to clarify word meanings. | Kept (wording only) |
| 3.L.V.3.c | 23 | Distinguish shades of meaning among closely related verbs and adjectives. | Distinguish shades of meaning among closely related verbs (e.g., toss, throw, hurl) and closely related adjectives (e.g., thin, slender, skinny, scrawny). | Kept (wording only) |
| 3.L.V.3.d | 23 | Use glossaries or beginning dictionaries, print or digital, to check spelling and clarify precise meanings. | Use glossaries or beginning dictionaries, both print and digital, to check spelling and to determine or clarify the precise meaning of words and phrases. | **Corrected** (meaning) |
| 3.L.V.3.e | 23 | Use word relationships and learned vocabulary to make precise word choices in speaking and writing. | Use knowledge of word relationships and learned vocabulary words and phrases to make precise word choices when speaking and writing. | Kept (wording only) |
| 3.T.C.1.a | 26 | Determine a text's purpose (e.g., to entertain, inform, or persuade) and its target audience. | Determine the purpose (e.g., entertain, inform, persuade) and target audience of a text. | Kept (wording only) |
| 3.T.C.1.b | 26 | Identify common text features in print, digital, auditory, spoken, and visual modes and explain how they contribute to purpose and effect. | Determine common text features of print, digital, auditory, spoken, and visual modes and describe how they contribute to the overall purpose and effect. | **Corrected** (meaning) |
| 3.T.C.1.c | 26 | Create multimodal texts using features of pre-selected modes for a specific purpose and audience. | Create multimodal texts, using features of pre-selected modes for a specific purpose and audience. | Kept (wording only) |
| 3.T.C.2.a | 27 | Describe the perspective of a narrator or speakers and distinguish it from one's own. | Describe different perspectives of the narrator or speakers and distinguish them from their own. | **Corrected** (meaning) |
| 3.T.C.2.c | 27 | With adult support, identify the context in which a text was written (time period, individual, situation). | With adult support, identify the context in which a text is written (e.g., time period, individual, situational). | **Corrected** (meaning) |
| 3.T.SS.1.a | 29 | Describe how texts are arranged using text features (e.g., maps, captions) and organizational structures (e.g., cause/effect), referring to chapters or sections. | Describe how texts are arranged to represent information and ideas using text features (e.g., map, captions) and organizational structures (e.g., cause/effect), referring to parts of texts using terms such as chapter or section. | **Corrected** (meaning) |
| 3.T.SS.1.b | 29 | Design texts using a variety of structures and features suited to purpose and audience. | Design texts using a variety of text structures and features, according to purpose and audience. | Kept (wording only) |
| 3.T.SS.1.c | 29 | Use conjunctions and transition words or phrases (e.g., although, since) to add cohesion and link ideas. | Use conjunctions and transition words or phrases, such as although and since, to add cohesion and link ideas and information. | **Corrected** (meaning) |
| 3.T.SS.1.d | 29 | Craft related sentences into clear, cohesive paragraphs. | Craft related sentences into clear and cohesive paragraphs. | Kept (wording only) |
| 3.T.SS.2.a | 30 | Identify and describe figurative language such as similes, metaphors, and idioms across a wide variety of texts. | Identify and describe the use of figurative language, such as similes, metaphors, and idioms in a wide variety of texts. | Kept (wording only) |
| 3.T.SS.2.b | 30 | Use similes, metaphors, and idioms to show relationships between ideas and information. | Use figurative language, such as similes, metaphors, and idioms, to show relationships between ideas and information. | **Corrected** (meaning) |
| 3.T.T.1.a | 32 | Explain how narrative techniques present ideas, design texts, and convey information about characters, setting, and plot. | Explain how narrative techniques are used to present ideas, design texts, and convey information about characters, setting, and plot. | Kept (wording only) |
| 3.T.T.1.c | 32 | Describe characters' traits, motivations, actions, thoughts, and feelings and explain how they connect to the central message, lesson, or moral. | Describe characters’ traits, motivations, actions, thoughts, and feelings and explain their connection to the central message, lesson, or moral of the story. | Kept (wording only) |
| 3.T.T.1.d | 32 | Compare and contrast two or more characters, settings, central messages, or events, including across diverse cultures. | Compare and contrast two or more characters, settings, central messages, or events within texts across diverse cultures. | **Corrected** (meaning) |
| 3.T.T.1.e | 32 | Apply narrative techniques (character, setting, problem, resolution, dialogue) to develop a real or imagined experience with descriptive details, clear event sequences, and closure. | Apply narrative techniques (e.g., character, setting, problem, resolution, dialogue) to develop a real or imagined experience using descriptive details, clear event sequences, and a sense of closure. | **Corrected** (meaning) |
| 3.T.T.2.a | 33 | Describe techniques used to present and design expository texts, including facts and key details that support the main idea. | Describe the techniques used to present and design expository texts, including facts and key details used to support the main idea. | Kept (wording only) |
| 3.T.T.2.b | 33 | Describe the relationship between a series of historical events, scientific ideas or concepts, or steps in a technical procedure. | Describe the relationship between a series of historical events, scientific ideas or concepts, or steps in technical procedures in a text. | **Corrected** (meaning) |
| 3.T.T.2.c | 33 | Integrate and explain information from two texts on the same topic in relation to key points and details. | Integrate and explain information from two texts on the same topic in relationship to important points and key details. | Kept (wording only) |
| 3.T.T.2.d | 33 | Apply expository techniques to introduce a topic, develop it with facts, definitions, details, or illustrations, and provide a concluding statement or section. | Apply expository techniques to introduce a topic, develop the topic with facts and other information (e.g., definitions, details, illustrations), and provide a concluding statement or section. | **Corrected** (meaning) |
| 3.T.T.3.a | 34 | Describe and discuss techniques used in opinion texts, including the author's opinion statement, supporting reasons, and evidence. | Describe and discuss the techniques used to present and design opinion texts, including author’s opinion statement, supporting reasons, and evidence. | **Corrected** (meaning) |
| 3.T.T.3.c | 34 | Apply opinion techniques to write opinion pieces that introduce the topic, state an opinion, support it with reasons linked by words such as because or therefore, and provide a conclusion. | Apply opinion techniques to create opinion pieces that introduce the topic, state an opinion about the topic, supply reasons to support the opinion with linking words (e.g., because, therefore, since, for example) to connect the opinion and reasons, and provide a concluding statement or section. | **Corrected** (meaning) |
| 3.T.T.4.b | 35 | Apply poetic techniques to produce poetry that uses rhyme in at least two stanzas to achieve an intended effect. | Apply poetic techniques to produce poetry and engage audiences that use rhyme in at least two stanzas to achieve an intended effect. | **Corrected** (meaning) |
| 3.T.RA.1.a | 37 | Generate questions about a self-selected topic, then formulate additional questions to clarify or deepen understanding. | Generate questions about a self-selected topic of interest to be researched, formulating additional questions to clarify or deepen understanding. | **Corrected** (meaning) |
| 3.T.RA.1.b | 37 | Conduct research by locating, gathering, selecting, and organizing information from multiple credible sources (print, digital, personal communication) about a self-selected topic. | Conduct research by locating, gathering, selecting, and organizing information from multiple credible sources, including print, digital, and personal communication, about a self-selected topic. | Kept (wording only) |
| K-12.P.EICC.1.a | 42 | Set, monitor, and discuss personal and academic reading and writing goals, revising as needed. | Generate, understand, monitor, and discuss personal and academic reading and writing goals, revising as appropriate. | **Corrected** (meaning) |
| K-12.P.EICC.1.b | 42 | Discuss or write about personal reading and writing preferences, citing techniques, topics, modes, and genres. | Discuss or write about personal and academic reading and writing preferences, referring to specific techniques, topics, modes, and genres that resonate most. | **Corrected** (meaning) |
| K-12.P.EICC.1.c | 42 | Select, read, and write texts of personal interest and academic relevance. | Select, read, and write texts of personal interest and academic relevance to grade-level texts and topics. | **Corrected** (meaning) |
| K-12.P.EICC.1.d | 42 | Build and draw on a repertoire of comprehension and composition skills, strategies, and techniques. | Build a repertoire of comprehension and composition skills, strategies, and techniques, drawing from them as needed to aid the interpretation and construction of texts. | **Corrected** (meaning) |
| K-12.P.EICC.1.e | 42 | Take part in a community of readers and writers: set norms, discuss texts, share writing, give and receive feedback. | Participate in a community of readers and writers by developing group norms, discussing texts, sharing individual writing, listening as others share their writing, and offering and responding to feedback. | **Corrected** (meaning) |
| K-12.P.EICC.2.a | 43 | Share real or imagined experiences through texts that tell or include stories. | Share real or imagined experiences by interpreting and constructing texts that tell or include stories. | **Corrected** (meaning) |
| K-12.P.EICC.2.b | 43 | Use texts to build knowledge, develop skills, make informed decisions, and share information. | Make use of texts to build knowledge, develop skills, make informed decisions, and share information and ideas. | **Corrected** (meaning) |
| K-12.P.EICC.2.c | 43 | Explain and learn concepts and processes through texts. | Explain and learn concepts and processes by interpreting and constructing texts. | **Corrected** (meaning) |
| K-12.P.EICC.2.d | 43 | Interpret and construct texts to analyze and evaluate texts and ideas. | Interpret and construct texts to aid the analysis and evaluation of texts and ideas. | Kept (wording only) |
| K-12.P.EICC.2.e | 43 | Consume and produce texts to solve problems or influence decisions. | Consume and produce texts in order to solve problems or influence decisions. | Kept (wording only) |
| K-12.P.EICC.3.a | 44 | Set a purpose and goals for reading, monitor comprehension, and adjust as needed. | Establish a purpose and set goals for reading, monitor comprehension, and adjust as needed. | Kept (wording only) |
| K-12.P.EICC.3.b | 44 | Scan and skim text, noting structures and sections most useful. | Scan and skim the text, making note of structures and sections that might be most useful. | Kept (wording only) |
| K-12.P.EICC.3.c | 44 | Connect prior knowledge with the text, addressing inconsistencies or gaps. | Draw from, compare, build, and integrate prior knowledge with the material in the text, addressing inconsistencies or gaps and adding to knowledge repertoires as appropriate. | **Corrected** (meaning) |
| K-12.P.EICC.3.d | 44 | Summarize and visualize sections of text to maintain understanding. | Summarize and visualize sections of the text to maintain understanding. | Kept (wording only) |
| K-12.P.EICC.3.e | 44 | Make and track predictions about what comes next. | Make and track predictions about the events and information likely to come next. | Kept (wording only) |
| K-12.P.EICC.3.f | 44 | Make, track, and support inferences about different levels of meaning. | Make, track, and support inferences about different levels of meaning within the text. | **Corrected** (meaning) |
| K-12.P.EICC.3.g | 44 | Determine meanings of unfamiliar words and concepts using context, academic vocabulary, and word parts. | Determine the meanings of unfamiliar words and concepts by applying knowledge of context and of academic vocabulary and word parts. | Kept (wording only) |
| K-12.P.EICC.4.b | 45 | Plan organization by selecting modes, genres, and structures that fit purpose and audience. | Plan how to organize the text by selecting modes, genres, and structures that will achieve the purpose and meet the needs of the target audience. | **Corrected** (meaning) |
| K-12.P.EICC.4.c | 45 | Generate ideas drawing on prior knowledge, texts, and discussions. | Generate ideas for content by assessing prior knowledge, gathering information from texts, and engaging in discussions with others. | **Corrected** (meaning) |
| K-12.P.EICC.4.d | 45 | Link ideas and information to the plan, highlighting the most relevant and impactful. | Link ideas and information to the organization plan, highlighting ideas and information that are most relevant, useful, and impactful. | **Corrected** (meaning) |
| K-12.P.EICC.4.e | 45 | Create an initial draft integrating ideas, word choices, and craft techniques. | Construct an initial draft by integrating ideas and information; selecting words, phrases, and sentences; and incorporating craft techniques that will best achieve the purpose of the text and resonate with the target audience. | **Corrected** (meaning) |
| K-12.P.EICC.4.f | 45 | Evaluate the text's effectiveness through self-review or feedback. | Evaluate the text’s effectiveness based on self-review or feedback from others, determining whether the text matches the purpose and goals for writing. | **Corrected** (meaning) |
| K-12.P.EICC.4.g | 45 | Revise organization, ideas, word choice, and craft based on evaluation or feedback. | Make changes to the text based on self-evaluation or external feedback, revising the organization, ideas, information, word choices, and craft techniques in order to increase the text’s effectiveness. | **Corrected** (meaning) |
| K-12.P.EICC.4.h | 45 | Edit the text to follow the conventions of written language. | Edit the text, ensuring it adheres to the conventions of written language. | Kept (wording only) |
| K-12.P.ST.1.a | 47 | Use prior knowledge, research, and discussion to identify the most relevant components of context. | Use prior knowledge, formal or informal research, and discussions with others to identify the key components of context that are most relevant. | **Corrected** (meaning) |
| K-12.P.ST.1.b | 47 | Consider how context affects the author's and audience's purposes. | Consider how context impacts the purposes of the author and the audience. | Kept (wording only) |
| K-12.P.ST.1.c | 47 | Explore how context shapes the author's decisions and the audience's responses. | Explore how context shapes the author’s decisions and the audience’s responses during the interpretation and construction of texts. | **Corrected** (meaning) |
| K-12.P.ST.2.a | 47 | Discern and establish a text's purpose and evaluate how well it achieves that purpose. | Develop and apply knowledge of author, audience, and context to discern and establish the purpose of texts being interpreted or constructed and to evaluate the extent to which those texts achieve those purposes. | **Corrected** (meaning) |
| K-12.P.ST.2.b | 47 | Establish a clear point of view or perspective when interpreting and constructing texts. | Draw from knowledge of author, audience, and context to discern and establish a clear point of view or unique perspective when interpreting and constructing texts. | **Corrected** (meaning) |
| K-12.P.ST.2.c | 47 | Consider how authors use context and audience to choose information, design, word choice, language structures, and craft. | Draw from knowledge of how authors consider context and audience to determine which information and ideas to highlight, which text design is most accessible, which word choices and language structures are most effective, and which craft techniques are most impactful. | **Corrected** (meaning) |
| K-12.P.AC.1.a | 49 | Identify and analyze literary and opinion elements, explaining their effect on audience and purpose. | Identify, apply, and analyze the literary, expository, and opinion (grades K-5) or rhetorical (grades 6-12) elements in texts, explaining or evaluating how specific elements affect the target audience and support the text’s purpose. | **Corrected** (meaning) |
| K-12.P.AC.1.b | 49 | Identify and analyze effective word choices and their effect on audience and purpose. | Identify, apply, and analyze important, interesting, or effective uses of language, explaining or evaluating how specific word choices affect the target audience and support the text’s purpose. | **Corrected** (meaning) |
| K-12.P.AC.1.c | 49 | Explain how sentence structure and syntax affect audience and purpose. | Explain, analyze, and evaluate how the author’s use of sentence structure and syntax affects the target audience and supports the text’s purpose. | **Corrected** (meaning) |
| K-12.P.AC.1.d | 49 | Analyze text design and organization, explaining how formats, structures, patterns, and features affect audience and accessibility. | Describe, analyze, and evaluate the design and organization of the text, explaining how specific formats, structures, patterns, and features influence the audience, contribute to the text’s accessibility, and support the text’s purpose. | **Corrected** (meaning) |
| K-12.P.AC.2.a | 49 | Integrate literary and opinion elements to appeal to audiences and achieve purposes. | Integrate literary, expository, and opinion (grades K-5) or rhetorical (grades 6-12) elements to appeal to target audiences and achieve specific purposes. | **Corrected** (meaning) |
| K-12.P.AC.2.b | 49 | Choose words and phrases to influence the audience's responses and achieve a purpose. | Craft words and phrases in order to influence the responses, thoughts, decisions, and questions of the target audience and achieve a specific purpose. | **Corrected** (meaning) |
| K-12.P.AC.2.c | 49 | Make sentence structure and syntax decisions that influence the audience and achieve a purpose. | Make decisions about sentence structure and syntax in order to accommodate and influence the audience and achieve a specific purpose. | **Corrected** (meaning) |
| K-12.P.AC.2.d | 49 | Organize texts using formats, structures, patterns, and features that influence the audience and support the purpose. | Organize texts by incorporating specific formats, structures, patterns, and features to influence the audience, facilitate accessibility, and support the text’s purpose. | **Corrected** (meaning) |
| K-12.P.AC.3.a | 50 | Explore and create texts in various modes and genres, recognizing how features affect meaning, tone, style, purpose, and audience. | Explore and create texts in various modes and genres, developing and applying knowledge of how specific features impact meaning, tone, style, purpose, and audience. | **Corrected** (meaning) |
| K-12.P.AC.3.b | 50 | Recognize how mode and genre shape the ideas and information included in texts. | Apply knowledge of how mode and genre impact what kinds of ideas and information are included in texts. | **Corrected** (meaning) |
| K-12.P.AC.3.c | 50 | Recognize how mode and genre shape how ideas are structured and arranged. | Apply knowledge of how mode and genre impact how ideas and information are structured and arranged in texts. | **Corrected** (meaning) |
| K-12.P.AC.3.d | 50 | Consume and produce multimodal texts combining genres, features, and craft techniques for target audiences. | Consume and produce multimodal texts, integrating a variety of genres, text features, and craft techniques to influence target audiences and achieve specific purposes. | **Corrected** (meaning) |
| K-12.P.CP.1.a | 52 | Arrive at discussions and collaborative meetings prepared to participate. | Arrive to group discussions and collaborative meetings prepared to be an active participant in the work. | Kept (wording only) |
| K-12.P.CP.1.b | 52 | Help the group set norms, goals, and procedures and keep work productive. | Collaborate with others to determine group norms, establish goals and procedures, and facilitate productivity when working on shared projects. | **Corrected** (meaning) |
| K-12.P.CP.1.c | 52 | Contribute ideas, listen to others, and give feedback. | Contribute to discussions and shared projects by offering ideas, listening to the ideas of others, and providing feedback. | **Corrected** (meaning) |
| K-12.P.CP.1.d | 52 | Work with others to discuss topics, investigate questions, solve problems, and create texts. | Work with others to discuss topics, investigate questions, solve problems, and explore and create texts. | **Corrected** (meaning) |
| K-12.P.CP.2.a | 52 | Communicate ideas, information, and texts clearly. | Communicate clearly to present ideas, information, and texts. | Kept (wording only) |
| K-12.P.CP.2.b | 52 | Use modes and genres that fit the purpose and audience. | Integrate modes and genres most appropriate to purpose and audience. | **Corrected** (meaning) |
| K-12.P.CP.2.c | 52 | Vary tone, pace, and nonverbal gestures to suit purpose and audience. | Vary tone, pace, and nonverbal gestures as appropriate to purpose and audience. | Kept (wording only) |
| K-12.P.CP.2.d | 52 | Engage audiences in dialogue by asking and answering questions. | Engage in dialogue with audiences by asking and answering questions. | Kept (wording only) |
| K-12.P.CP.2.e | 52 | Build background knowledge by reciting all or part of significant poems and speeches appropriate to grade level. | Build background knowledge by reciting all or part of significant poems and speeches as appropriate by grade level. | Kept (wording only) |

**Corrections most likely to matter for lessons.** These widen or change what is asked. A lesson reviewer should confirm the lessons still match. No lessons were edited in this pass, as instructed.

| Code | Change |
|---|---|
| 3.T.C.2.a | The site said "the perspective of a narrator"; the official text says "different perspectives of the narrator or speakers". |
| 3.T.T.1.d | The site said "including across diverse cultures", which made culture optional; the official text says "within texts across diverse cultures". |
| 3.L.GC.2.d | The main verb is "Elaborate on ideas and information", which the paraphrase dropped. |
| 3.T.SS.2.b | The official text says "figurative language, such as similes, metaphors, and idioms", not only those three. |
| 3.T.T.4.b | The paraphrase dropped "and engage audiences". |
| 3.T.C.1.b | The verbs are "Determine ... describe", not "Identify ... explain", and the official text adds "overall". |
| 3.L.GC.2.a | The paraphrase added "in texts read, heard, or viewed", which is not in the official text. |

## 7. Automated checks added (`verification/check-content.js`, section "PP-004")

- Every applicable code in `official-gr3-standards.json` exists in `standards.js`, and every non-GUM site code is an applicable official code.
- No "not applicable" placeholder code is on the site.
- Every record's `official` equals the verbatim PDF wording, and its `page` equals the PDF page.
- The GUM checks are described in `PP-004-GUM-CHART-VERIFICATION.md`.

The checks were tested by mutation in a scratch copy: one relevelled GUM row, one altered official GUM wording, one altered official expectation wording, one code removed from the official list and one fake code added. Each produced the expected FAIL.

`verification/gen-standards.py` now loads the two JSON files, attaches `official` and `page`, applies the corrections (`TEXT_FIX`), and asserts that the element list equals the official list. Running it reproduces `js/data/standards.js` byte for byte.

## 8. What remains

- **UI label.** The site labels `text` "(paraphrased)" (`js/skills.js:447`) and "Georgia's standard, paraphrased:" (`js/parents.js:147`). For the 56 corrected codes and the 4 corrected GUM rows, that text is now verbatim. Neither file was in this agent's scope. Recommendation: show `official` with the label "Georgia's standard (official wording, p. N)", and keep `plain` as the child-friendly version.
- **Lessons.** The lesson alignment for the 7 codes in the table above was not re-reviewed.
- **Out-of-repo dependency.** The generator still reads its element list and paraphrases from `/home/claude/alignment/ga-grade3-ela-alignment.json`, which is outside the repository (unchanged from before).

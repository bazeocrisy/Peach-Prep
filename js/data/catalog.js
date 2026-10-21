/* Peach Prep — the skill catalog: five categories (like IXL), lettered groups
   in learning order, skills in teaching order. Group letters run on across the
   whole site (A, B, C ...), so a skill id like "M3" is unique.
   Each entry is a lesson key (usually its Georgia code) or "task:<id>" for a
   writing task. The order inside a group is the suggested order: each skill
   builds on the ones before it. The Georgia standards themselves set no order. */
window.PP_CATALOG = [
  { id: "foundations", name: "Reading Foundations", short: "Foundations", icon: "abc",
    line: "Phonics, reading fluency and cursive. Taught in class; no Milestones questions, but spelling still counts in the essay.",
    groups: [
      { name: "Phonics and word parts", skills: ["3.F.P.4.a", "3.F.P.4.b", "3.F.P.4.c"] },
      { name: "Reading words smoothly", skills: ["3.F.F.1.a", "3.F.F.1.d", "3.F.F.1.b", "3.F.F.1.c"] },
      { name: "Cursive", skills: ["3.F.H.3.a", "3.F.H.4.a", "3.F.H.4.b"] }
    ] },
  { id: "reading", name: "Reading", short: "Reading", icon: "book",
    line: "Stories, information, opinions and poems. Most of the test's 34 reading points.",
    groups: [
      { name: "Text structure and clue words", skills: ["3.T.T.1.b", "TS-SEQ", "TS-CE", "TS-PS", "TS-CC", "TS-DESC", "3.T.SS.1.a"] },
      { name: "Stories", skills: ["3.T.T.1.a", "3.T.T.1.c", "3.T.C.2.a", "3.T.T.1.d"] },
      { name: "Information", skills: ["3.T.C.1.b", "3.T.T.2.a", "3.T.T.2.b", "3.T.T.2.c"] },
      { name: "Author's purpose and opinion", skills: ["3.T.C.1.a", "3.T.T.3.a", "3.T.C.2.c"] },
      { name: "Figurative language and poems", skills: ["3.T.SS.2.a", "3.T.T.4.a"] },
      { name: "Evidence and research", skills: ["3.T.RA.2.a", "3.T.RA.2.b", "3.T.RA.1.a", "3.T.RA.1.b"] }
    ] },
  { id: "writing", name: "Writing", short: "Writing", icon: "pencil",
    line: "Paragraphs, opinion and informational writing, stories and poems. Includes the 8-point essay.",
    groups: [
      { name: "Paragraphs and linking words", skills: ["3.T.SS.1.d", "3.T.SS.1.c", "3.T.SS.1.b"] },
      { name: "Opinion and informational writing", skills: ["3.T.T.3.c", "3.T.T.2.d", "3.T.RA.1.c"] },
      { name: "Stories, poems and pictures", skills: ["3.T.T.1.e", "3.T.SS.2.b", "3.T.T.4.b", "3.T.C.1.c"] },
      { name: "Essay practice (the 8-point writing task)", skills: ["task:W-TASK-01", "task:W-TASK-02"] }
    ] },
  { id: "vocabulary", name: "Vocabulary", short: "Vocabulary", icon: "spark",
    line: "Figuring out new words, word parts and word relationships.",
    groups: [
      { name: "Learning new words", skills: ["3.L.V.1.a", "3.L.V.3.a", "3.L.V.3.d"] },
      { name: "Word parts", skills: ["3.L.V.2.a", "3.L.V.2.b", "3.L.V.2.c"] },
      { name: "How words relate", skills: ["3.L.V.3.b", "3.L.V.3.c"] },
      { name: "Choosing words", skills: ["3.L.V.3.e", "3.L.V.1.b"] }
    ] },
  { id: "grammar", name: "Grammar and Mechanics", short: "Grammar", icon: "check",
    line: "Sentences, parts of speech, capitals and punctuation. Only some rows are on the test; each skill says so.",
    groups: [
      { name: "Sentences", skills: [
        "3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in",
        "3.L.GC.1:R:capitalize-the-first-word-of-a-sentence-and-the-",
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que",
        "3.L.GC.1:R:use-interrogatives-to-ask-questions-in-speech",
        "3.L.GC.2.a"] },
      { name: "Nouns", skills: [
        "3.L.GC.1:R:use-common-and-proper-nouns",
        "3.L.GC.1:R:capitalize-proper-nouns",
        "3.L.GC.1:R:form-and-use-singular-and-plural-nouns-in-speech",
        "3.L.GC.1:R:form-regular-plural-nouns-with-s-or-es",
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies",
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns",
        "3.L.GC.1:M:use-collective-and-abstract-nouns"] },
      { name: "Verbs", skills: [
        "3.L.GC.1:R:use-action-verbs",
        "3.L.GC.1:R:form-and-use-verbs-with-ing-ed-or-s",
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es",
        "3.L.GC.1:R:form-and-use-simple-verb-tenses",
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs",
        "3.L.GC.2.c",
        "3.L.GC.2.b"] },
      { name: "Pronouns and describing words", skills: [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive",
        "3.L.GC.1:M:use-reflexive-pronouns",
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr",
        "3.L.GC.1:R:use-adjectives-and-adverbs",
        "3.L.GC.1:R:use-frequently-occurring-prepositions",
        "3.L.GC.2.d"] },
      { name: "Joining words and punctuation", skills: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra",
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi",
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa",
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos",
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"] },
      { name: "Introduce and keep practicing (not on the grade 3 test)", skills: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases",
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti",
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement",
        "3.L.GC.1:I:use-helping-and-linking-verbs",
        "3.L.GC.1:I:use-interjections",
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t",
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-",
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes",
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses",
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns",
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement",
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs",
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses",
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations",
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"] }
    ] }
];

/* The six text structures and their clue words, from the parent's guide
   "Teaching Text Structure". Shown as the Clue Word Cheat Sheet. */
window.PP_STRUCTURES = [
  { name: "Story Elements", what: "The parts every story has.", words: ["one day", "but", "then", "so", "finally", "in the end"], ask: "Who is the story about, and where are they?", draw: "A story map: Characters, Setting, Problem, Events, Solution, Lesson.", key: "3.T.T.1.b" },
  { name: "Sequence", what: "Things happen in a certain order.", words: ["first", "next", "then", "after that", "later", "finally"], ask: "What happened first? Next? Last?", draw: "A row of boxes connected by arrows.", key: "TS-SEQ" },
  { name: "Cause & Effect", what: "Why something happened, and what happened because of it.", words: ["because", "so", "since", "as a result", "that is why", "this caused"], ask: "What happened? Why did it happen?", draw: "Boxes with arrows between them: cause → effect.", key: "TS-CE" },
  { name: "Problem & Solution", what: "A problem, the tries, and what finally works.", words: ["problem", "tried", "but", "decided", "solved", "finally"], ask: "What's the problem?", draw: "The problem at the top, a box for each try, the solution at the bottom.", key: "TS-PS" },
  { name: "Compare & Contrast", what: "How two things are alike and how they are different.", words: ["both", "alike", "same", "but", "however", "unlike", "different", "while"], ask: "How are they the same? How are they different?", draw: "Three columns: Thing 1 only · Both · Thing 2 only.", key: "TS-CC" },
  { name: "Description", what: "A main topic and details that tell more about it.", words: ["for example", "such as", "also", "in addition", "has", "looks like"], ask: "What is this mostly about?", draw: "A web: the topic in the middle, a line out to each detail.", key: "TS-DESC" }
];
window.PP_STRUCTURES_TRICKY = "but, so, then and finally show up in lots of kinds of text. Read the whole sentence to see what job the word is doing.";

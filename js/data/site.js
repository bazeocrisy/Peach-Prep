/* Peach Prep — site content that is not a question set.
   Every number here traces to a GaDOE document named in `sources`.
   Where the reading of a document is ours, the text says "about". */
window.PP_SITE = {
  sources: {
    /* URLs confirmed working by the owner on 2026-10-20. */
    blueprint: { title: "Georgia Milestones ELA Grade 3 Assessment Blueprint", date: "August 2025",
      url: "https://lor2.gadoe.org/gadoe/file/4feebd77-4a21-4788-a3ba-b6f50a71c876/1/GM_Gr3_ELA_Blueprint.pdf" },
    alds: { title: "DRAFT Achievement Level Descriptors, Grade 3 English Language Arts", date: "GaDOE draft, October 2025, for 2025-26; it may change after standard setting in late fall 2026",
      url: "https://lor2.gadoe.org/gadoe/file/0398b5b8-bcad-46a5-af4c-643df515341c/1/GM_ALDs_Gr3_ELA.pdf" },
    rubric: { title: "Grade 3 Eight-Point, Three-Trait Writing Rubric", date: "August 2026",
      url: "https://lor2.gadoe.org/gadoe/file/ba53bbce-40da-44a3-92ed-a8da5dfd28be/1/GM_Rubric_Gr3.pdf" },
    checklist: { title: "Grade 3 Writer's Checklist", date: "2026",
      url: "https://lor2.gadoe.org/gadoe/file/ba53bbce-40da-44a3-92ed-a8da5dfd28be/1/GM_Checklist_Gr3.pdf" },
    sampler: { title: "Online scoring samplers (how written answers are scored)", date: "",
      url: "https://lor2.gadoe.org/gadoe/file/d0d5b8f7-63d6-4a7f-8e5f-68df45b837d1/1/GM_Online_Scoring_Sampler_Infographic.pdf" },
    experience: { title: "Experience Online (GaDOE: practice with the test tools, not graded)", date: "",
      url: "https://www.gaexperienceonline.com/" }
  },

  sections: [
    { key: "reading", name: "Reading", sub: "Interpreting Texts", points: 34, icon: "book",
      line: "Read stories, articles, opinions and poems. Answer questions like the real test." },
    { key: "writing", name: "Writing", sub: "Constructing Texts", points: 26, icon: "pencil",
      line: "Plan and write an opinion essay from sources. Practice revising sentences and paragraphs." },
    { key: "language", name: "Language", sub: "Grammar and vocabulary", points: null, icon: "abc",
      line: "Grammar and word meaning in test formats. These points are counted inside Reading and Writing." },
    { key: "test", name: "Practice Test", sub: "A shorter test shaped like the real one", points: null, icon: "flag",
      line: "Reading, revising and language questions with no hints, scored in points, with Show me how afterwards. (The essay is practiced in Writing.)" }
  ],

  tools: [
    { name: "Sentence Sense", line: "Everyday grammar lessons and practice.", url: "https://bazeocrisy.github.io/Sentence-Sense/" },
    { name: "Word Workshop", line: "Spelling and vocabulary for any word list.", url: "https://bazeocrisy.github.io/Word-Workshop/" },
    { name: "Study Scoop", line: "This week's class work.", url: "https://bazeocrisy.github.io/Study-Scoop/" }
  ],

  /* Blueprint, page 2 -- exact numbers. */
  design: {
    totalPoints: 60, totalItems: 49, scoredItems: 41, fieldTest: 8,
    rows: [
      { type: "1-point selected-response and technology-enhanced", items: 28, points: 28, it: [20, 20], ct: [8, 8] },
      { type: "2-point technology-enhanced", items: 12, points: 24, it: [7, 14], ct: [5, 10] },
      { type: "8-point extended writing task", items: 1, points: 8, it: [0, 0], ct: [1, 8] },
      { type: "Field test items (not scored)", items: 8, points: 0, it: [6, 0], ct: [2, 0] }
    ],
    totals: { items: 49, points: 60, it: [33, 34], ct: [16, 26] },
    teTypes: ["drag-and-drop", "drop-down", "evidence-based selected-response (Part A / Part B)", "match",
              "reorder", "hot text highlight", "multiple-part", "multiple-select"],
    dok: [
      { level: "Level 1 — recall", points: "3 to 6", pct: "5% to 10%" },
      { level: "Level 2 — use a skill or concept", points: "24 to 36", pct: "40% to 60%" },
      { level: "Level 3 — reason and explain with evidence", points: "12 to 21", pct: "20% to 35%" },
      { level: "Level 4 — extended thinking (likely the writing task)", points: "8", pct: "13%" }
    ]
  },

  /* Blueprint, page 1. Interpreting/Constructing points are as printed; the
     table packs several claims together, so the split is "about". */
  claims: [
    { claim: "Context", what: "Purpose, audience, and who is telling the story.", it: "3.T.C.1 (a, b), 3.T.C.2 (a, c)", ct: "3.T.C.1 (c)" },
    { claim: "Structure & Style", what: "How texts are organized, text features, and figurative language.", it: "3.T.SS.1 (a), 3.T.SS.2 (a)", ct: "3.T.SS.1 (b, c, d), 3.T.SS.2 (b)" },
    { claim: "Techniques", what: "How stories, informational texts, opinion pieces and poems work.", it: "3.T.T.1 (a–d), 3.T.T.2 (a–c), 3.T.T.3 (a), 3.T.T.4 (a)", ct: "3.T.T.1 (e), 3.T.T.2 (d), 3.T.T.3 (c), 3.T.T.4 (b)" },
    { claim: "Research & Analysis", what: "Finding and using evidence from sources.", it: "3.T.RA.1 (a, b), 3.T.RA.2 (a, b)", ct: "3.T.RA.1 (c)" },
    { claim: "Grammar Conventions", what: "Grammar, usage and mechanics. Grammar chart (3.L.GC.1) skills are tested only in the writing part, and only the Master and Reinforce skills.", it: "3.L.GC.2 (a)", ct: "3.L.GC.1 (grammar chart: Master and Reinforce skills), 3.L.GC.2 (b, c, d)" },
    { claim: "Vocabulary", what: "Word meaning, word parts and word relationships.", it: "3.L.V.1 (a), 3.L.V.2 (a, b), 3.L.V.3 (a–d)", ct: "3.L.V.1 (b), 3.L.V.2 (c), 3.L.V.3 (e). The blueprint prints this last one as 5.L.V.3 (e), which looks like a typo." }
  ],
  claimPoints: "Interpreting Texts (34 points): about 6 for Context with Structure & Style, 16 for Techniques, 6 for Research & Analysis and 6 for Language. Constructing Texts (26 points, including the 8-point writing task): about 6 for Context with Structure & Style, 8 for Techniques and Research & Analysis together (the blueprint prints one shared number for these two), and 12 for Language. The blueprint prints these numbers in a combined table, so treat the split as approximate.",

  /* Rubric, August 2026 -- summarized in our words. */
  rubric: [
    { trait: "Purpose and Organization", max: 3, plain: [
      "Starts with an introduction that clearly states the opinion.",
      "Groups related sentences together so the essay is easy to follow.",
      "Uses linking words and transitions to connect reasons to the opinion.",
      "Ends with a concluding statement or section." ] },
    { trait: "Evidence and Elaboration", max: 3, plain: [
      "Gives reasons that support the opinion. The rubric calls them the provided reasons, so the writing task usually gives the reasons; the writer supports each one with information from the sources.",
      "Backs each reason with facts, definitions or details from the sources, in the writer's own words.",
      "Explains (elaborates on) each reason instead of just listing it." ] },
    { trait: "Language Usage and Conventions", max: 2, plain: [
      "Uses mostly complete sentences and a variety of sentence structures to strengthen clarity and coherence.",
      "Uses correct verb tense and subject-verb agreement.",
      "Has few errors in usage, capitals and punctuation, and none that get in the way of meaning.",
      "Is long enough to show this. The rubric says a very short answer may not earn these points, even with few or no errors." ] }
  ],
  rubricNote: "A response that cannot be scored gets a condition code, which sits in the rubric's 0 column. The rubric lists these reasons: blank, copied, too limited to score, non-English or foreign language, off topic, offensive, and illegible or incomprehensible.",

  /* Writer's Checklist, Grade 3 -- verbatim. GaDOE: "This page may be printed for instructional use during the school year." */
  checklist: [
    "introduce my opinion on a topic.",
    "organize and group information in a way that makes sense for my purpose and audience.",
    "provide reasons that support my opinion.",
    "support my reasons with ideas and information from the sources to develop my opinion on the topic.",
    "elaborate on my reasons and ideas by using techniques to support my opinion.",
    "use linking words, conjunctions, and transition words or phrases to connect reasons to my opinion.",
    "provide a concluding statement or section.",
    "use complete sentences and a variety of sentence structures.",
    "use correct verb tense.",
    "use correct subject and verb agreement.",
    "check my work and correct any errors in spelling, capitalization, punctuation, usage, or grammar."
  ],

  plan: [
    { step: "Choose how to start", text: "Follow the Learning Path for a suggested order, or choose a lesson from the list. Use the On the test filter to see the skills the Milestones checks." },
    { step: "Pick a category, then one skill at a time", text: "Start from a category card (Reading, Writing, Vocabulary, Grammar or Foundations). Skills are listed in a building order, each with its id and Georgia code. Tap a skill and a practice question opens right away: your child answers, presses Check Answer, and can tap Teach Me at any time for help with that exact question. Practice comes five questions at a time (fifteen per skill, in three sets), and the place is saved on this device. The Skill overview (under About this skill, below a question) keeps the lesson, worked examples and guided practice. Score at least 80% of the points on the separate skill check to pass it. A few skills do not have fifteen practice questions yet; they open on their skill page with Learn It, Watch Me, Practice Together, Try It Yourself and a check, and the hands-on ones (reading aloud, cursive) have a grown-up Check." },
    { step: "Write every week", text: "Do the writing skills, then one opinion essay from sources each week (Mixed practice and practice tests, then Writing), checked with the Writer's Checklist and scored with the parent guide." },
    { step: "Put it together", text: "Once several skill checks are passed, try the mixed reading sets and the practice test. The real test mixes skills in one passage." },
    { step: "Rehearse on the real screens", text: "GaDOE's free Experience Online (gaexperienceonline.com, checked October 2026) has a tools guide, a video tutorial, and study guides, scoring samplers and demonstration tests that use the real testing tools. GaDOE says these are not graded. They are for getting used to the format and the tools. Nothing carries over from Peach Prep, and Peach Prep is not part of it or endorsed by it. It works in Chrome." },
    { step: "Check progress", text: "Progress (lessons started, practice finished, skill checks passed and grown-up checks, with dates) is saved on this device only. If your child uses two devices, pick one for Peach Prep." }
  ]
};

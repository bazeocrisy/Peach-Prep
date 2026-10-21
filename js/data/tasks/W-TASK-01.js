/*
 * W-TASK-01 — Opinion writing task: a reading buddy program.
 * Two original informational sources. All facts are general and hedged ("many teachers say",
 * "studies of ... often report"); no invented statistics, studies or people.
 * Sources are written at about a grade 4 reading level (short sentences, common words).
 * Sentence references ("p1:<paragraph>:<sentence>") are 1-based. The sources have no
 * headings or captions, so array numbers match the paragraph numbers the child sees.
 */
PP.addTask({
  id: "W-TASK-01",
  title: "Should our school start a reading buddy program?",
  sources: [
    {
      id: "p1",
      title: "Reading Buddies",
      byline: "",
      genre: "Informational text",
      lexile: "about 600L (estimate)",
      paragraphs: [
        [
          "In a reading buddy program, an older student and a younger student read together.",
          "A fourth grader might read with a first grader.",
          "Many buddies meet once a week.",
          "Each visit often lasts about twenty or thirty minutes.",
          "Sometimes the big buddy reads out loud.",
          "Other times, the little buddy takes a turn."
        ],
        [
          "Little buddies can learn a lot from these visits.",
          "They get to hear a big buddy read out loud.",
          "That way, they find out how a good reader sounds.",
          "The big buddy can help with hard words.",
          "The two can talk about the pictures and the story, too.",
          "Many teachers say a buddy gets young readers excited about books.",
          "Kids who are excited about books often read more.",
          "Reading more helps them grow as readers."
        ],
        [
          "Reading buddy programs help older students, too.",
          "Before each visit, the big buddy practices reading the book out loud.",
          "This helps the big buddy read more smoothly and with more feeling.",
          "Many big buddies say they feel proud when their little buddy reads a new word.",
          "They also learn to be patient and kind.",
          "Little readers may need extra time."
        ]
      ],
      lines: null
    },
    {
      id: "p2",
      title: "Learning by Teaching",
      byline: "",
      genre: "Informational text",
      lexile: "about 620L (estimate)",
      paragraphs: [
        [
          "Have you ever explained the rules of a game to a friend?",
          "To teach someone, you have to think hard about what you know.",
          "Many teachers call this \"learning by teaching.\""
        ],
        [
          "Reading buddy programs use this idea.",
          "A big buddy has to understand a story well first.",
          "Then the big buddy can help a younger child follow it.",
          "Big buddies often ask questions, such as \"What will happen next?\"",
          "Thinking about these questions helps big buddies understand stories better, too.",
          "Studies of buddy programs often report that big buddies feel more sure about reading."
        ],
        [
          "Little buddies gain a lot, too.",
          "Young kids learn many new words when they hear stories read aloud.",
          "Time with one buddy also gives them extra practice.",
          "They get a chance to ask questions, too.",
          "In a busy room, a teacher can't always sit with each child.",
          "So a buddy can be a big help."
        ],
        [
          "Many schools see one more good result.",
          "Kids in different grades get to know each other.",
          "Then the whole school starts to feel friendlier."
        ]
      ],
      lines: null
    }
  ],
  prompt: "Your principal is thinking about starting a reading buddy program, where older students and younger students meet each week to read together. Write an opinion essay for your principal that tells why your school should start a reading buddy program. Use the two reasons below. Support each reason with information from both sources, written in your own words.",
  reasons: [
    "A reading buddy program helps younger students become better readers.",
    "A reading buddy program helps older students learn and grow, too."
  ],
  std: ["3.T.T.3.c", "3.T.RA.1.c", "3.T.SS.1.c", "3.T.SS.1.d", "3.L.GC.2.b", "3.L.GC.2.c"],
  planner: {
    opinion: "Write a sentence that tells your opinion: our school should start a reading buddy program. How can you say it to the principal in your own words?",
    reasonPrompts: [
      "Reason 1: How does a reading buddy program help younger students read better? Find a fact in each source. How can you say each fact in your own words? Why does it matter?",
      "Reason 2: How does a reading buddy program help older students learn and grow? Find a fact in each source. How can you say each fact in your own words? Why does it matter?"
    ],
    conclusion: "How will you end? Tell your opinion again, sum up both reasons, and give the principal one last thought to remember."
  },
  evidence: [
    { reason: 0, source: "p1", ref: "p1:2:2", note: "Little buddies get to hear a big buddy read out loud." },
    { reason: 0, source: "p1", ref: "p1:2:3", note: "That way, the younger child finds out how a good reader sounds." },
    { reason: 0, source: "p1", ref: "p1:2:4", note: "The big buddy can help with hard words." },
    { reason: 0, source: "p1", ref: "p1:2:6", note: "Many teachers say young readers get more excited about books with a buddy." },
    { reason: 0, source: "p1", ref: "p1:2:8", note: "Reading more (because they are excited) helps them grow as readers." },
    { reason: 0, source: "p2", ref: "p2:3:2", note: "Listening to stories read aloud teaches young children new words." },
    { reason: 0, source: "p2", ref: "p2:3:3", note: "Time with one buddy gives extra practice." },
    { reason: 0, source: "p2", ref: "p2:3:4", note: "Little buddies get a chance to ask questions." },
    { reason: 0, source: "p2", ref: "p2:3:5", note: "A teacher cannot always sit with each child, so a buddy adds help (p2:3:6)." },
    { reason: 1, source: "p1", ref: "p1:3:2", note: "Big buddies practice reading the book out loud before each visit." },
    { reason: 1, source: "p1", ref: "p1:3:3", note: "That practice helps them read more smoothly and with more feeling." },
    { reason: 1, source: "p1", ref: "p1:3:4", note: "Many big buddies say they feel proud when their little buddy reads a new word." },
    { reason: 1, source: "p1", ref: "p1:3:5", note: "Big buddies learn to be patient and kind, because little readers may need extra time." },
    { reason: 1, source: "p2", ref: "p2:1:2", note: "Teaching someone makes you think hard about what you know." },
    { reason: 1, source: "p2", ref: "p2:2:2", note: "A big buddy has to understand a story well before helping a younger child follow it (learning by teaching)." },
    { reason: 1, source: "p2", ref: "p2:2:5", note: "Thinking about questions helps big buddies understand stories better." },
    { reason: 1, source: "p2", ref: "p2:2:6", note: "Studies often report that big buddies feel more sure about reading." }
  ],
  model: {
    paragraphs: [
      "Imagine a first grader at our school grinning because she just read a whole page to her reading buddy! Reading buddies are big kids and little kids who share books. I think our school should start a reading buddy program because it would help both younger and older students.",
      "First, a reading buddy program would help younger students become better readers. The first source, \"Reading Buddies,\" explains that little kids learn what good reading sounds like by listening to a big buddy. That gives them something to aim for when it is their turn to read. When a little reader gets stuck, someone is right there to help with the tricky word. The second source adds that hearing stories teaches small children new words. More new words and a helper close by add up to a stronger reader.",
      "A reading buddy program would also help older students learn and grow. According to the first source, big buddies rehearse each book before a visit, so their reading aloud becomes smoother. It also says that hearing a little partner read a brand-new word makes many big buddies proud. In addition, the second source describes \"learning by teaching.\" You cannot explain a story to someone else until you truly get it yourself. All that extra thinking helps the older buddy understand stories better, too.",
      "In conclusion, a reading buddy program would help little readers grow, and it would help big kids learn, too. Please start a reading buddy program this year so that every student can share a good book with a friend."
    ],
    notes: [
      "Purpose and Organization (3 of 3): The introduction opens with a picture that pulls the reader in, tells what reading buddies are, then states the opinion clearly (\"I think our school should start a reading buddy program\") and previews both reasons. Each body paragraph is about one provided reason, in the same order as the reasons were given. Linking words and phrases (First, when, also, According to, so, In addition, In conclusion) connect the facts to the reasons and the reasons to the opinion. The conclusion restates the opinion, sums up both reasons and ends by asking the principal, the audience named in the prompt, to act (\"Please start a reading buddy program this year\").",
      "Evidence and Elaboration (3 of 3): Both provided reasons are developed with information from BOTH sources. For younger students: hearing a big buddy read, help with hard words, and learning new words by hearing stories. For older students: practicing each book ahead of time, feeling proud, and learning by teaching. The writer retells each fact in new words and new sentence patterns instead of copying or swapping a word or two, and names the source behind its facts (\"The first source\", \"According to the first source\", \"the second source\"). The writer also adds explanations of their own, such as \"That gives them something to aim for when it is their turn to read,\" and restates \"learning by teaching\" in kid-friendly words (\"You cannot explain a story to someone else until you truly get it yourself\"). Each body paragraph ends by tying the facts back to its reason: \"More new words and a helper close by add up to a stronger reader\" and \"All that extra thinking helps the older buddy understand stories better, too.\"",
      "Language Usage and Conventions (2 of 2): The essay is long enough to show command. Sentences are complete and varied: short, simple ones (\"Reading buddies are big kids and little kids who share books\"), compound ones joined with and, and complex ones built with because, when, so and until. Verb tense is controlled: present tense for facts from the sources (\"big buddies rehearse\", \"the second source adds\"), would for what the program would do, and past tense only in the hook, where a girl \"just read\" a page. There are no unneeded shifts. Subjects and verbs agree (\"the second source adds\", \"hearing a little partner read a brand-new word makes\", \"More new words and a helper close by add up\"). There are no spelling, capitalization or punctuation errors."
    ]
  },
  /* PP-004: original example responses below the top score, written and scored by Peach Prep
     with the official rubric's trait descriptions (GaDOE Grade 3 Eight-Point, Three-Trait Writing
     Rubric, August 2026). They are NOT GaDOE anchor papers. Mistakes in them are on purpose. */
  examples: [
    {
      total: 2,
      scores: { purpose: 1, evidence: 1, conventions: 0 },
      paragraphs: [
        "I think we shoud have reading budys. it is fun. the big kid read to the little kid and they like it and the little kid get help with words and it is fun and they read books and then they go back to class.",
        "Reading budys is good."
      ],
      notes: [
        "Purpose and Organization (1 of 3): There is an opinion (\"I think we shoud have reading budys\"), but the introduction is weak: it does not say what reading buddies are or who the essay is for. Ideas about younger and older students are not grouped, and \"and then\" strings everything together instead of linking reasons to the opinion. \"Reading budys is good\" is a weak concluding statement. This matches the rubric's 1 column: a weak introduction, a weak structure and a weak conclusion.",
        "Evidence and Elaboration (1 of 3): Only one provided reason is touched: the big kid reads to the little kid, and the little kid gets help with words. Those ideas come from Source 1, but they are listed, not explained. \"It is fun\" and \"they go back to class\" are not from the sources and do not support a reason. Reason 2 (older students) is missing. This is minimal support, the rubric's 1.",
        "Language Usage and Conventions (0 of 2): The essay is very short, and errors are frequent: one long run-on joined by and, missing capitals (\"it is fun\", \"the big kid\"), subject-verb errors (\"the big kid read\", \"the little kid get\", \"Reading budys is\") and misspellings (shoud, budys). There is almost no sentence variety. The rubric says a very brief response may not show even partial command, so we scored it 0. Some scorers could give a 1 because the meaning is still clear."
      ],
      next: "Start with organization: help your child write one sentence that tells the opinion, then one group of sentences about little kids and one about big kids."
    },
    {
      total: 4,
      scores: { purpose: 2, evidence: 1, conventions: 1 },
      paragraphs: [
        "Our school should start a reading buddy program. I have two reasons.",
        "First, it helps younger students. The big buddy can help with hard words. Little kids like to hear stories. My little brother likes it when I read to him.",
        "Second, it helps older students to. They practice the book before they go. They feels proud.",
        "That is why we need reading buddys. Thank you for reading my essay."
      ],
      notes: [
        "Purpose and Organization (2 of 3): The opinion is stated in the first sentence, and the essay has four paragraphs: an introduction, one paragraph for each reason in order, and a conclusion. First, Second and That is why work as transitions. It is not a 3 because the introduction is plain (\"I have two reasons\"), the facts are not linked to the reasons with words like because or so, and the conclusion is short. The rubric's 2 column fits: an adequate introduction, structure and conclusion.",
        "Evidence and Elaboration (1 of 3): Both reasons are named, but the support is thin. \"The big buddy can help with hard words\" is copied word for word from Source 1, so it is not in the child's own words. \"Little kids like to hear stories\" is only loosely connected to the sources, and the little brother is a personal idea, which is fine as an extra but does not replace source facts. Reason 2 has two short facts from Source 1 (practicing the book, feeling proud) with no explaining. Only Source 1 is used. We scored it 1 because the facts are listed with almost no elaboration. This one is close to the line; a scorer could see it as a low 2, since the facts it does use are relevant.",
        "Language Usage and Conventions (1 of 2): Most sentences are complete, but almost all are short and simple, so there is little variety. There is a subject-verb error (\"They feels proud\"), a spelling error (buddys) and \"to\" where it should be \"too\". The essay is also short. This fits the rubric's 1: some correct sentences and agreement, with limited variety."
      ],
      next: "Work on evidence: for each reason, find one fact in Source 2, say it in your own words, and add a sentence that starts with \"That means...\""
    },
    {
      total: 6,
      scores: { purpose: 2, evidence: 2, conventions: 2 },
      paragraphs: [
        "I think our school should start a reading buddy program, and I hope you will agree. It would help little kids and big kids.",
        "First, a reading buddy program would help younger students read better. In \"Reading Buddies,\" it says the big buddy helps with hard words. The second source says hearing stories read aloud teaches young kids lots of new words. That means the little kids would know more words.",
        "Also, older students would learn too. The first source says big buddies practice the book before each visit so they read more smoothly. The second source explains that teaching makes you think hard about what you already know. Big buddies would get better at reading because they have to explain the story.",
        "In conclusion, reading buddies help everyone. Please start a reading buddy program at our school."
      ],
      notes: [
        "Purpose and Organization (2 of 3): The introduction states the opinion and previews both reasons, and \"I hope you will agree\" speaks to the principal. Each reason has its own paragraph, and First, Also, That means, because and In conclusion connect the ideas. It is not a 3 because the introduction does not pull the reader in or explain the topic, and the conclusion only restates the opinion without summing up both reasons. This is the rubric's 2: adequate introduction, structure, transitions and conclusion.",
        "Evidence and Elaboration (2 of 3): Both reasons are supported with relevant facts from BOTH sources, mostly in the child's own words: help with hard words and learning new words (younger students), practicing before each visit and learning by teaching (older students). The child explains a little (\"That means the little kids would know more words\", \"because they have to explain the story\"). It is not a 3 because each reason has only two facts and one short explanation. A 3 would explain more fully how each fact helps the reason.",
        "Language Usage and Conventions (2 of 2): The essay is long enough to show command. Sentences are complete and varied: simple, compound (joined with and) and complex (with so, because and that). Subjects and verbs agree (\"the big buddy helps\", \"teaching makes\"). The conclusion shifts from would to the present tense (\"reading buddies help everyone\"), and \"learn too\" needs a comma before too. These are small errors that do not get in the way of meaning, which still fits a 2."
      ],
      next: "To reach the top score, add one more explaining sentence for each fact, and end by summing up both reasons."
    }
  ],
  /* PP-004: step-by-step scoring for a grown-up, one block per rubric trait. "points" restates
     each rubric column in plain words; "say" gives coaching lines for the child. */
  scoring: {
    purpose: {
      steps: [
        "Read the whole essay once, the way the principal would, without marking anything.",
        "Underline the opinion. It should be near the beginning and say that the school should start a reading buddy program.",
        "Put a 1 beside sentences about younger students and a 2 beside sentences about older students. Are the 1s together and the 2s together?",
        "Circle linking words such as First, Also, because, so, for example and In conclusion. Do they tie each reason back to the opinion?",
        "Read the ending. Does it restate the opinion, sum up the reasons or ask the principal to act?",
        "Choose the score that fits best overall. An essay can show parts of two levels; pick the one it matches most."
      ],
      points: {
        3: "A strong introduction makes the opinion clear. Each reason has its own clear group of sentences. Linking words connect the reasons to the opinion all the way through. A strong ending wraps it up.",
        2: "All the parts are there and the essay is easy enough to follow, but some parts are plain or thin, such as a one-line introduction, linking words used only here and there, or a reason not clearly tied to the opinion.",
        1: "The introduction or the ending is weak. Ideas are mixed together or hard to follow, and few linking words connect them.",
        0: "There is no introduction, no order you can find and no ending. On the real test, a blank, copied, off-topic or too-short essay gets a condition code instead of a score."
      },
      say: [
        "\"Show me the sentence that tells your opinion.\" If it is there, praise it: \"The principal knows what you think right away.\"",
        "\"Where does your reason about little kids start? Can you add a word like First or Also so the principal knows a new reason is starting?\"",
        "\"How could your last sentence ask the principal to do something?\""
      ]
    },
    evidence: {
      steps: [
        "Open \"Where the support is in the sources\" below. It lists the facts that fit each reason.",
        "Under reason 1 (younger students), check each fact the child used from a source. Do the same for reason 2 (older students).",
        "Check the wording. A sentence that matches the source word for word, or with only a word or two changed, is copied, not in the child's own words.",
        "After each fact, look for the child's own explaining, often with so, because or that means. A fact with no explaining counts for less.",
        "Ideas from the child's own life are fine as extras, but they do not take the place of facts from the sources.",
        "Choose the score that fits best overall."
      ],
      points: {
        3: "Both reasons are supported with well-chosen facts from the sources, in the child's own words, and the child explains how each fact supports the reason.",
        2: "The reasons are supported with relevant facts from the sources and some explaining, but the support is thin or uneven, or the facts are listed more than explained.",
        1: "The support is minimal: few facts, facts that do not fit the reason, or facts with almost no explaining.",
        0: "There are no reasons and no information from the sources."
      },
      say: [
        "\"Show me one fact you found in Source 1 and one in Source 2.\"",
        "\"You told me a fact. Now tell me why it matters. Try starting with 'That means...'\"",
        "\"This sentence sounds just like the source. How would you say it to a friend?\""
      ]
    },
    conventions: {
      steps: [
        "Read the essay out loud exactly as it is written. Mark each spot where you stumble or have to reread.",
        "Check the sentences. Are they complete? Are some short and some joined with because, and, but or so?",
        "Check the verbs. Does the tense stay steady? Do subjects and verbs agree (older students feel, a buddy helps)?",
        "Look back at your marks. Do the mistakes only look messy, or do they make the meaning hard to follow?",
        "Check the length. A very short essay may not show enough to earn a 2, even with few mistakes.",
        "Choose the score that fits best overall."
      ],
      points: {
        2: "Most sentences are complete and they vary. Verb tense and subject-verb agreement are mostly correct. There are few mistakes, and none make the meaning unclear. The essay is long enough to show this.",
        1: "Some sentences are complete, with little variety. Some verbs are in the wrong tense or do not agree, and some mistakes sometimes make the meaning unclear.",
        0: "There are few or no complete sentences, little correct tense or agreement, and frequent mistakes that often make the meaning unclear."
      },
      say: [
        "\"Read this sentence out loud to me. Does it sound right?\"",
        "\"Find two short sentences you could join with because or so.\"",
        "\"Check your verbs: did you stay in the same time all the way through?\""
      ]
    }
  },
  lookFors: {
    purpose: [
      "The opinion is stated near the beginning, for example \"Our school should start a reading buddy program.\" A response that only describes reading buddies, without saying what the school should do, has not stated an opinion.",
      "There is one paragraph (or a clear group of sentences) for younger students and one for older students. Sentences about younger and older students are not mixed together.",
      "Linking words show how ideas connect: First, Also, In addition, For example, because, since, so. More than one or two are used, and they are used correctly.",
      "The essay is written for the principal: it may speak to the principal directly or ask the principal to act.",
      "The conclusion does more than say \"The end.\" It repeats the opinion and both reasons, or asks the principal to act."
    ],
    evidence: [
      "Reason 1 (younger students) is backed by at least one fact from the sources, such as hearing a good reader, getting help with hard words, learning new words by listening, or getting extra practice with one buddy.",
      "Reason 2 (older students) is backed by at least one fact from the sources, such as practicing the book before each visit, reading more smoothly, learning by teaching, asking questions, feeling proud or more sure of their reading, or learning patience.",
      "For a 3, both provided reasons are developed with relevant, well-chosen details from the sources, and the child explains how they support the reasons. The prompt asks for both sources, and using both makes the evidence stronger. The rubric scores relevant information from the source(s), so it sets no rule that one source limits the score; check whether each reason really has enough support. Developing only one of the two reasons usually keeps the score at 2 or below.",
      "The facts are in the child's own words. Copying whole sentences from the sources, or copying a sentence and changing only a word or two, does not show the child's own words. Copying most of the response can make it unscoreable.",
      "Elaboration: the child explains why a fact matters (\"so the little kid gets more practice\"), not just lists facts. Ideas from the child's own life (a favorite book, the child's own buddy) are fine as extra elaboration but do not replace source information.",
      "The friendlier-school fact (Source 2, last paragraph) is a bonus idea. It is fine as elaboration or in the conclusion, but it does not replace support for the two provided reasons."
    ],
    conventions: [
      "Most sentences are complete. Watch for run-ons strung together with \"and then\" and for fragments such as \"Because it helps kids.\"",
      "Verb tense does not shift without a reason. Present tense works for facts (buddies help, kids read), and would works for what the program would do. Watch for shifts like \"Buddies help kids and they learned words.\"",
      "Subjects and verbs agree, especially with plural subjects: \"older students feel\", not \"older students feels\"; \"a buddy helps\", not \"a buddy help\".",
      "Sentence beginnings vary, and some sentences use because, since, so or when to join ideas.",
      "A few small spelling or comma mistakes are fine for a 2 if they do not get in the way of meaning. A response must be long enough to show command; a very short response may not earn a 2 even with no errors."
    ]
  }
});

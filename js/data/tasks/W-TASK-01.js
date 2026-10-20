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
          "Each visit lasts twenty or thirty minutes.",
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
    { reason: 0, source: "p1", ref: "p1:2:4", note: "The buddy helps with hard words." },
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
      "Imagine a first grader grinning because she just read a whole page by herself. That could happen at our school every week! I think our school should start a reading buddy program because it would help both younger and older students.",
      "First, a reading buddy program would help younger students become better readers. The first source, \"Reading Buddies,\" explains that little kids hear smooth reading up close when a big buddy reads to them. That gives them something to aim for when it is their turn to read. When a little reader gets stuck, someone is right there to help sound out the tricky word. The second source adds that hearing stories is one way small children pick up new vocabulary. More new words and more practice add up to a stronger reader.",
      "A reading buddy program would also help older students learn and grow. According to the first source, big buddies rehearse each book before a visit, so their reading aloud becomes smoother. It also says that hearing a little partner read a brand-new word makes many big buddies proud. In addition, the second source describes \"learning by teaching.\" You cannot explain a story to someone else until you truly get it yourself. All that extra thinking makes the older buddy a stronger reader, too.",
      "In conclusion, a reading buddy program would help little readers grow, and it would help big kids learn, too. Please start a reading buddy program this year so that every student can share a good book with a friend."
    ],
    notes: [
      "Purpose and Organization (3 of 3): The introduction opens with a picture that pulls the reader in, then states the opinion clearly (\"I think our school should start a reading buddy program\") and previews both reasons. Each body paragraph is about one provided reason, in the same order as the reasons were given. Linking words and phrases (First, when, also, According to, so, In addition, In conclusion) connect the facts to the reasons and the reasons to the opinion. The conclusion restates the opinion, sums up both reasons and ends by asking the principal, the audience named in the prompt, to act (\"Please start a reading buddy program this year\").",
      "Evidence and Elaboration (3 of 3): Both provided reasons are developed with information from BOTH sources. For younger students: hearing a big buddy read, help with hard words, and learning new words by hearing stories. For older students: practicing each book ahead of time, feeling proud, and learning by teaching. The writer retells each fact in new words and new sentence patterns instead of copying or swapping a word or two, and names where each fact came from (\"The first source\", \"According to the first source\", \"the second source\"). The writer also adds explanations of their own, such as \"That gives them something to aim for when it is their turn to read\" and \"You cannot explain a story to someone else until you truly get it yourself.\" Each body paragraph ends by tying the facts back to its reason: \"More new words and more practice add up to a stronger reader\" and \"All that extra thinking makes the older buddy a stronger reader, too.\"",
      "Language Usage and Conventions (2 of 2): The essay is long enough to show command. Sentences are complete and varied: short ones (\"That could happen at our school every week!\"), compound ones joined with and, and complex ones built with because, when, so and until. Verb tense is controlled: present tense for facts from the sources (\"big buddies rehearse\", \"the second source adds\"), would and could for what the program would do, and past tense only in the hook, where a girl \"just read\" a page. There are no unneeded shifts. Subjects and verbs agree (\"the second source adds\", \"hearing a little partner read a brand-new word makes\", \"More new words and more practice add up\"). There are no spelling, capitalization or punctuation errors."
    ]
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
      "For a 3, both provided reasons are developed, and each has more than one well-chosen detail that the child explains. The prompt asks for both sources, and using both makes the evidence stronger. The rubric scores relevant information from the source(s), so it sets no rule that one source limits the score; check whether each reason really has enough support. Developing only one of the two reasons usually keeps the score at 2 or below.",
      "The facts are in the child's own words. Copying whole sentences from the sources, or copying a sentence and changing only a word or two, does not show the child's own words. Copying most of the response can make it unscoreable.",
      "Elaboration: the child explains why a fact matters (\"so the little kid gets more practice\"), not just lists facts. Ideas from the child's own life (a favorite book, the child's own buddy) are fine as extra elaboration but do not replace source information.",
      "The friendlier-school fact (Source 2, last paragraph) is a bonus idea. It is fine as elaboration or in the conclusion, but it does not replace support for the two provided reasons."
    ],
    conventions: [
      "Most sentences are complete. Watch for run-ons strung together with \"and then\" and for fragments such as \"Because it helps kids.\"",
      "Verb tense does not shift without a reason. Present tense works for facts (buddies help, kids read), and would works for what the program would do. Watch for shifts like \"Buddies help kids and they learned words.\"",
      "Subjects and verbs agree, especially with plural subjects: \"older students feel\", not \"older students feels\"; \"a buddy helps\", not \"a buddy help\".",
      "Sentence beginnings vary, and some sentences use because, since, so or when to join ideas.",
      "A few small spelling or comma mistakes are fine for a 2 if they do not get in the way of meaning. A very short response cannot earn a 2 even with no errors."
    ]
  }
});

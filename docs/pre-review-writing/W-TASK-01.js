/*
 * W-TASK-01 — Opinion writing task: a reading buddy program.
 * Two original informational sources. All facts are general and hedged ("many teachers say",
 * "studies of ... often report"); no invented statistics, studies or people.
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
          "In a reading buddy program, an older student and a younger student meet to read together.",
          "For example, a fourth grader might be paired with a first grader.",
          "Many buddies meet once a week for about twenty or thirty minutes.",
          "Sometimes the older buddy reads aloud, and sometimes the younger buddy takes a turn."
        ],
        [
          "Younger students can learn a lot from these visits.",
          "When an older buddy reads aloud, the younger child hears how a good reader sounds.",
          "The buddy can help with hard words and talk about the pictures and the story.",
          "Many teachers say that young readers become more excited about books when they have a buddy.",
          "Children who are excited about books usually read more, and reading more helps them grow as readers."
        ],
        [
          "Reading buddy programs can help older students, too.",
          "Before each visit, the older buddy practices reading the book out loud.",
          "This practice helps the older buddy read more smoothly and with more expression.",
          "Many older buddies say they feel proud when their little buddy reads a new word.",
          "They also learn to be patient and kind, because young readers sometimes need extra time."
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
          "When you teach someone, you have to think carefully about what you know.",
          "Many teachers call this \"learning by teaching.\""
        ],
        [
          "Reading buddy programs use this idea.",
          "To help a younger child understand a story, an older student must understand it well first.",
          "Older buddies often ask questions such as, \"What do you think will happen next?\"",
          "Thinking about questions like these helps the older buddy understand stories better, too.",
          "Studies of buddy programs often report that older students feel more confident about their own reading."
        ],
        [
          "Little buddies benefit in their own ways.",
          "Young children learn many new words by listening to stories read aloud.",
          "Working one-on-one with a buddy also gives them extra practice and a chance to ask questions.",
          "In a busy classroom, a teacher cannot always sit with each child, so a buddy can be a big help."
        ],
        [
          "Many schools notice another good result.",
          "Students in different grades get to know each other, and the school starts to feel friendlier."
        ]
      ],
      lines: null
    }
  ],
  prompt: "Your principal is thinking about starting a reading buddy program, where older students and younger students meet each week to read together. Write an opinion essay for your principal that tells why our school should start a reading buddy program. Use the two reasons below. Support each reason with information from both sources, written in your own words.",
  reasons: [
    "Reading buddies help younger students become better readers.",
    "Being a reading buddy helps older students learn and grow, too."
  ],
  std: ["3.T.T.3.c", "3.T.RA.1.c", "3.T.SS.1.c", "3.T.SS.1.d", "3.L.GC.2.b", "3.L.GC.2.c"],
  planner: {
    opinion: "What do you want the principal to do? Write one sentence that tells your opinion about a reading buddy program.",
    reasonPrompts: [
      "Reason 1: How do reading buddies help younger students read better? Find a fact in each source. How can you say each fact in your own words? Why does it matter?",
      "Reason 2: How does being a reading buddy help older students learn and grow? Find a fact in each source. How can you say each fact in your own words? Why does it matter?"
    ],
    conclusion: "How will you end? Tell your opinion again, sum up both reasons, and give the principal one last thought to remember."
  },
  evidence: [
    { reason: 0, source: "p1", ref: "p1:2:2", note: "Hearing an older buddy read aloud shows the younger child how a good reader sounds." },
    { reason: 0, source: "p1", ref: "p1:2:3", note: "The buddy helps with hard words and talks about the story." },
    { reason: 0, source: "p1", ref: "p1:2:5", note: "Excited readers read more, and reading more helps them grow as readers." },
    { reason: 0, source: "p2", ref: "p2:3:2", note: "Listening to stories read aloud teaches young children new words." },
    { reason: 0, source: "p2", ref: "p2:3:3", note: "One-on-one time gives extra practice and a chance to ask questions." },
    { reason: 0, source: "p2", ref: "p2:3:4", note: "A teacher cannot sit with every child, so a buddy adds help." },
    { reason: 1, source: "p1", ref: "p1:3:2", note: "Older buddies practice reading the book aloud before each visit." },
    { reason: 1, source: "p1", ref: "p1:3:3", note: "That practice makes them read more smoothly and with expression." },
    { reason: 1, source: "p1", ref: "p1:3:4", note: "Older buddies feel proud when their little buddy learns a word." },
    { reason: 1, source: "p1", ref: "p1:3:5", note: "Older buddies learn patience and kindness." },
    { reason: 1, source: "p2", ref: "p2:2:2", note: "To explain a story, the older student must understand it well first (learning by teaching)." },
    { reason: 1, source: "p2", ref: "p2:2:4", note: "Asking questions helps the older buddy understand stories better." },
    { reason: 1, source: "p2", ref: "p2:2:5", note: "Studies often report that older buddies feel more confident about their own reading." }
  ],
  model: {
    paragraphs: [
      "Imagine a first grader grinning because she just read a whole page by herself. That could happen at our school every week! I think our school should start a reading buddy program because it would help both younger and older students.",
      "First, reading buddies help younger students become better readers. The first source explains that when a big buddy reads out loud, a little kid learns what a good reader sounds like. The buddy can also help with tricky words. The second source says that young children pick up new words when they listen to stories. Since one teacher can't sit with every child at once, a buddy gives each little reader extra practice.",
      "Being a reading buddy also helps older students learn and grow. According to the first source, older buddies practice their book ahead of time, so they get better at reading aloud. In addition, the second source describes \"learning by teaching.\" An older buddy has to really understand a story before explaining it to someone else. An older buddy even feels proud when a little partner learns a new word.",
      "In conclusion, a reading buddy program would help little readers grow, and it would help big kids learn, too. Our school should start one this year so that every student can share a good book with a friend."
    ],
    notes: [
      "Purpose and Organization (3 of 3): The introduction opens with a picture that pulls the reader in, then states the opinion clearly (\"I think our school should start a reading buddy program\") and previews both reasons. Each body paragraph is about one provided reason, in the same order as the reasons were given. Linking words and phrases (First, also, Since, According to, In addition, so, In conclusion) connect the facts to the reasons and the reasons to the opinion. The conclusion restates the opinion, sums up both reasons and ends with a request to the principal, the audience named in the prompt.",
      "Evidence and Elaboration (3 of 3): Both provided reasons are developed. Each reason uses information from BOTH sources: for younger students, hearing a good reader, help with tricky words, learning words by listening and one-on-one practice; for older students, practicing ahead of time, learning by teaching and feeling proud. The facts are in the writer's own words, and the writer names where each fact came from (\"The first source explains\", \"According to the first source\"). The writer elaborates by explaining why a fact matters (one teacher can't sit with every child, so a buddy adds practice; an older buddy has to really understand a story before explaining it).",
      "Language Usage and Conventions (2 of 2): The essay is long enough to show command. Sentences are complete and varied: short ones (\"That could happen at our school every week!\"), compound ones joined with so and and, and complex ones built with because, when, since and before. Verb tense stays in the present throughout, and subjects and verbs agree (\"a buddy gives\", \"an older buddy even feels\", \"young children pick up\"). There are no spelling, capitalization or punctuation errors."
    ]
  },
  lookFors: {
    purpose: [
      "The opinion is stated near the beginning, for example \"Our school should start a reading buddy program.\" A response that only describes reading buddies, without saying what the school should do, has not stated an opinion.",
      "There is one paragraph (or a clear group of sentences) for younger students and one for older students. Sentences about younger and older students are not mixed together.",
      "Linking words show how ideas connect: First, Also, In addition, For example, because, since, so. More than one or two are used, and they are used correctly.",
      "The conclusion does more than say \"The end.\" It repeats the opinion and both reasons, or asks the principal to act."
    ],
    evidence: [
      "Reason 1 (younger students) is backed by at least one fact from the sources, such as hearing a good reader, getting help with hard words, learning new words by listening, or getting one-on-one practice.",
      "Reason 2 (older students) is backed by at least one fact from the sources, such as practicing the book before each visit, reading more smoothly, learning by teaching, asking questions, feeling proud or confident, or learning patience.",
      "For a 3, both sources are used, and each reason has more than one detail. A response that develops only one reason, or uses only one source, usually scores no higher than 2.",
      "The facts are in the child's own words. Copying whole sentences from the sources does not earn credit, and copying most of the response can make it unscoreable.",
      "Elaboration: the child explains why a fact matters (\"so the little kid gets more practice\"), not just lists facts. Opinions or ideas that are not in the sources (a favorite book, the child's own buddy) are fine as extra support, but they do not replace source information."
    ],
    conventions: [
      "Most sentences are complete. Watch for run-ons strung together with \"and then\" and for fragments such as \"Because it helps kids.\"",
      "Verb tense stays the same. This topic is easiest in the present tense (buddies help, kids read). Watch for shifts like \"Buddies help kids and they learned words.\"",
      "Subjects and verbs agree, especially with plural subjects: \"older students feel\", not \"older students feels\"; \"a buddy helps\", not \"a buddy help\".",
      "Sentence beginnings vary, and some sentences use because, since, so or when to join ideas.",
      "A few small spelling or comma mistakes are fine for a 2 if they do not get in the way of meaning. A very short response cannot earn a 2 even with no errors."
    ]
  }
});

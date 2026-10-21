/*
 * W-REV-01 — Revising: "Make the essay stronger." One short student opinion draft.
 * The writer, Jordan, is a fictional third grader; Room 12 and its people are invented.
 * The draft is numbered by sentence: each sentence string starts with "(n) ". The draft
 * deliberately has a missing opinion statement, missing transitions, a vague word, two
 * short choppy sentences, an off-topic sentence, one subject-verb agreement error, one
 * verb tense error and a weak conclusion. Items 1-5, 7 and 8 fix one of these; item 6 adds
 * evidence for the reason in sentence 7.
 * Sentence references ("p1:<paragraph>:<sentence>") are 1-based; there are no headings.
 */
PP.addSet({
  id: "W-REV-01",
  section: "writing",
  kind: "revising",
  title: "Make the essay stronger",
  blurb: "Help Jordan revise an opinion essay about getting a class fish.",
  passages: [
    {
      id: "p1",
      draft: true,
      title: "A Fish for Room 12",
      byline: "Jordan's first draft",
      genre: "Student draft (opinion)",
      lexile: "about 500L (estimate)",
      paragraphs: [
        [
          "(1) Room 12 has an empty fish tank on the back shelf, and nobody uses it."
        ],
        [
          "(2) A class fish would teach us to be responsible.",
          "(3) Every day, someone would need to feed the fish and look at the tank to make sure the water is clean.",
          "(4) We could make a job chart.",
          "(5) Everyone would get a turn.",
          "(6) My cousin has a dog named Biscuit that can catch a ball."
        ],
        [
          "(7) A class fish would help us learn about science.",
          "(8) In science, the students in our class studies what animals need to live.",
          "(9) Last week, we watch a video about how fish use gills to breathe."
        ],
        [
          "(10) That is why I like fish."
        ]
      ],
      lines: null
    }
  ],
  items: [
    {
      id: "W-REV-01-1",
      type: "mc",
      points: 1,
      std: ["3.T.T.3.c"],
      dok: 2,
      prompt: "Jordan's introduction does not tell the reader what Jordan thinks. Which sentence should be added after sentence 1 to state Jordan's opinion?",
      choices: [
        { text: "I think our class should get a pet fish to live in that tank.", correct: true },
        { text: "Some classes at our school have pets, and some classes do not." },
        { text: "Fish can live in lakes, in rivers, and even in the ocean." },
        { text: "Have you ever watched a fish blow tiny bubbles in the water?" }
      ],
      clue: "An opinion tells what the writer wants or believes. It is not just a fact or a question. Which choice tells the reader what Jordan wants to happen?",
      why: "The answer is \"I think our class should get a pet fish to live in that tank.\" The words I think and should tell the reader Jordan's opinion, and the sentence connects to the empty tank in sentence 1. The sentence about other classes and the sentence about where fish live are facts, not opinions. The question about bubbles could grab a reader's attention, but it does not say what Jordan wants."
    },
    {
      id: "W-REV-01-2",
      type: "dropdown",
      points: 2,
      std: ["3.T.SS.1.c"],
      dok: 2,
      prompt: "Jordan wants to add a transition to the beginning of sentence 2 and sentence 7. Choose the best transition for each blank.",
      text: "(2) {0} a class fish would teach us to be responsible. (7) {1} a class fish would help us learn about science.",
      slots: [
        { options: ["First,", "Finally,", "In conclusion,", "For example,"], answer: 0 },
        { options: ["For example,", "In addition,", "However,", "Before that,"], answer: 1 }
      ],
      clue: "Ask what job each sentence does in the essay. Does it start the reasons, add one more reason, give an example, or wrap up? Choose the transition that does that job.",
      why: "Sentence 2 should begin with \"First,\" because it is the first reason. Finally and In conclusion are for the end, and For example is for an example, not a reason. Sentence 7 should begin with \"In addition,\" because it adds a second reason. For example would not fit because sentence 7 is a new reason, not an example; However signals an idea that disagrees; Before that signals time order."
    },
    {
      id: "W-REV-01-3",
      type: "mc",
      points: 1,
      std: ["3.L.V.3.e"],
      dok: 2,
      prompt: "Read sentence 3. Which word or words should replace look at to make the meaning more exact?",
      choices: [
        { text: "check", correct: true },
        { text: "glance at" },
        { text: "notice" },
        { text: "stare at" }
      ],
      clue: "Think about the helper's job. Try each word in the sentence. Which one tells exactly what the helper must do?",
      why: "The answer is \"check.\" To check something means to look at it carefully on purpose to make sure it is right, which is exactly the job of making sure the water is clean. Glance at means to look for just a second. Notice means to see something, but it does not mean doing a careful job. Stare at means to look for a long time, but it does not tell the reader that the helper is making sure of anything."
    },
    {
      id: "W-REV-01-4",
      type: "mc",
      points: 1,
      std: ["3.T.SS.1.c", "3.L.GC.2.b"],
      dok: 2,
      prompt: "Sentences 4 and 5 are short and choppy. Which sentence best combines them with a conjunction?",
      choices: [
        { text: "We could make a job chart, so everyone would get a turn.", correct: true },
        { text: "We could make a job chart, but everyone would get a turn." },
        { text: "We could make a job chart, or everyone would get a turn." },
        { text: "Although we could make a job chart, everyone would get a turn." }
      ],
      clue: "Ask yourself how the two ideas are connected. Is the second idea a result of the first, the opposite of it, or a choice instead of it?",
      why: "The answer is \"We could make a job chart, so everyone would get a turn.\" Everyone getting a turn is the result of making the chart, and so shows a result. But and although show that two ideas do not go together, and or shows a choice between two things, so those sentences change Jordan's meaning."
    },
    {
      id: "W-REV-01-5",
      type: "hottext",
      points: 1,
      std: ["3.T.SS.1.d"],
      dok: 2,
      prompt: "One sentence in Jordan's draft does not support Jordan's reasons. Select the sentence that does not belong.",
      source: "p1",
      targets: ["p1:2:1", "p1:2:2", "p1:2:3", "p1:2:4", "p1:2:5", "p1:3:1", "p1:3:2", "p1:3:3"],
      answer: ["p1:2:5"],
      pick: 1,
      clue: "Every sentence should help explain why the class should get a fish. Read each paragraph and ask: does this sentence stay on that idea?",
      why: "The answer is sentence 6, \"My cousin has a dog named Biscuit that can catch a ball.\" The second paragraph (sentences 2 to 6) is about how a class fish would teach responsibility. A cousin's dog is not a class fish and is not about the class taking care of a pet, so the sentence does not belong."
    },
    {
      id: "W-REV-01-6",
      type: "ms",
      points: 2,
      pick: 2,
      std: ["3.T.RA.1.c", "3.T.T.3.c"],
      dok: 3,
      prompt: "Jordan found these sentences in a book about class pets. Which TWO sentences best support the reason in sentence 7?",
      choices: [
        { text: "Watching a fish swim shows how fins help an animal move and steer.", correct: true },
        { text: "A fish's gills let it take in oxygen from the water around it.", correct: true },
        { text: "A job chart helps a class share the work of caring for a pet." },
        { text: "A clean fish tank can make a classroom look bright and cheerful." },
        { text: "Some families think that cats and dogs are more fun than fish." }
      ],
      clue: "First, read sentence 7 to find the reason. Then keep only sentences that show something students could learn about science by having a fish.",
      why: "The answers are \"Watching a fish swim shows how fins help an animal move and steer.\" and \"A fish's gills let it take in oxygen from the water around it.\" Sentence 7 says a fish would help the class learn science, and both facts teach how an animal's body works. The job chart sentence supports the reason in sentence 2 instead. A cheerful-looking classroom is not something students learn about science, and the sentence about cats and dogs is an opinion that does not show anything students would learn."
    },
    {
      id: "W-REV-01-7",
      type: "dropdown",
      points: 2,
      std: ["3.L.GC.2.c", "3.L.GC.2.b"],
      dok: 2,
      prompt: "Sentences 8 and 9 each have one mistake with a verb. Choose the correct verb for each blank.",
      text: "(8) In science, the students in our class {0} what animals need to live. (9) Last week, we {1} a video about how fish use gills to breathe.",
      slots: [
        { options: ["studies", "study", "studying"], answer: 1 },
        { options: ["watch", "watches", "watched"], answer: 2 }
      ],
      clue: "For sentence 8, find the subject. Is it one person or more than one? For sentence 9, look at the words that tell when it happened.",
      why: "Sentence 8 needs \"study\": the subject is students, which means more than one, so the verb is study, not studies. The words in our class come between the subject and the verb, but they do not change the subject. Studying cannot be the only verb in a sentence. Sentence 9 needs \"watched\": the words Last week tell that it already happened, so the verb must be in the past tense."
    },
    {
      id: "W-REV-01-8",
      type: "mc",
      points: 1,
      std: ["3.T.T.3.c"],
      dok: 2,
      prompt: "Sentence 10 is a weak conclusion. Which sentence should replace sentence 10 to give the essay a strong conclusion?",
      choices: [
        { text: "A class fish would teach us responsibility and science, so Room 12 should fill that empty tank.", correct: true },
        { text: "Fish come in many bright colors, such as orange, gold, silver, and even blue." },
        { text: "First, a class fish would teach every student in Room 12 to be responsible." },
        { text: "Some students in our class think a hamster would be a more fun pet to have." }
      ],
      clue: "A strong conclusion wraps up the whole essay. It does not start a new idea or begin the reasons again.",
      why: "The answer is \"A class fish would teach us responsibility and science, so Room 12 should fill that empty tank.\" It sums up both reasons and repeats the opinion, so it finishes the essay. The sentence about colors adds a new detail, the First sentence starts the reasons over again, and the hamster sentence brings up a new idea that works against Jordan's opinion."
    }
  ]
});

/*
 * W-REV-02 — Revising: "Make the story better." One short student narrative draft.
 * The writer, Tasha, and her grandpa are fictional. The draft is numbered by sentence:
 * each sentence string starts with "(n) ". It deliberately lacks setting details,
 * dialogue, two time-order transitions, a paragraph about hanging the birdhouse and a
 * real ending, and it uses a plain verb in sentence 4. Each item fixes one of these.
 * Eastern bluebirds are common in Georgia and often nest in birdhouses.
 * Sentence references ("p1:<paragraph>:<sentence>") are 1-based; there are no headings.
 */
PP.addSet({
  id: "W-REV-02",
  section: "writing",
  kind: "revising",
  title: "Make the story better",
  blurb: "Help Tasha revise her story about building a birdhouse with her grandpa.",
  passages: [
    {
      id: "p1",
      title: "The Birdhouse",
      byline: "Tasha's first draft",
      genre: "Student draft (narrative)",
      lexile: "about 450L (estimate)",
      paragraphs: [
        [
          "(1) On Saturday morning, Tasha and her grandpa carried a box of wood into his garage.",
          "(2) They were going to build a birdhouse for the backyard."
        ],
        [
          "(3) Grandpa showed Tasha how to hold the hammer near the end of the handle.",
          "(4) Tasha hit the nail, and it bent sideways.",
          "(5) Tasha felt like giving up.",
          "(6) Grandpa pulled out the bent nail and gave her a new one.",
          "(7) She tapped the nail gently, and it went in straight."
        ],
        [
          "(8) When the paint was dry, they carried the blue birdhouse outside."
        ],
        [
          "(9) A bluebird moved in.",
          "(10) The end."
        ]
      ],
      lines: null
    }
  ],
  items: [
    {
      id: "W-REV-02-1",
      type: "ms",
      points: 2,
      pick: 2,
      std: ["3.T.T.1.e"],
      dok: 2,
      prompt: "Tasha wants to add details after sentence 1 to help the reader picture the garage. Which TWO sentences describe the setting?",
      choices: [
        { text: "Sawdust covered the floor, and the air smelled like fresh pine.", correct: true },
        { text: "Old tools hung in neat rows on the wall above the workbench.", correct: true },
        { text: "Tasha's grandpa had built many things when he was younger." },
        { text: "Tasha had always wanted to see a bird up close." },
        { text: "After they finished, they planned to eat lunch together." }
      ],
      clue: "The setting is where and when a story happens. Keep only the sentences that tell what the garage looks, sounds, smells or feels like.",
      why: "The answers are \"Sawdust covered the floor, and the air smelled like fresh pine.\" and \"Old tools hung in neat rows on the wall above the workbench.\" Both describe what Tasha would see and smell in the garage. The other sentences tell about a character's past, a wish, or a later event, not about the place."
    },
    {
      id: "W-REV-02-2",
      type: "mc",
      points: 1,
      std: ["3.L.V.3.e"],
      dok: 2,
      prompt: "In sentence 4, Tasha wants to show that she swung the hammer too hard. Which verb should replace hit?",
      choices: [
        { text: "whacked", correct: true },
        { text: "tapped" },
        { text: "touched" },
        { text: "reached" }
      ],
      clue: "Look at sentence 7, where Tasha does it the right way. The new verb should mean the opposite of how she does it there.",
      why: "The answer is \"whacked.\" Whacked means hit very hard, so it shows why the nail bent. Tapped and touched mean a gentle hit, which is what Tasha does the second time, in sentence 7. Reached does not mean hitting at all."
    },
    {
      id: "W-REV-02-3",
      type: "mc",
      points: 1,
      std: ["3.T.SS.2.b"],
      dok: 2,
      prompt: "Tasha wants to add a simile after sentence 4 to help the reader picture the bent nail. Which sentence is the best choice?",
      choices: [
        { text: "The bent nail looked like a tiny fishhook.", correct: true },
        { text: "The bent nail was crooked and pointed sideways." },
        { text: "The bent nail looked as straight as a pencil." },
        { text: "The heavy hammer felt like a brick in her hand." }
      ],
      clue: "A simile compares two different things using like or as. The comparison must also fit what the bent nail really looks like.",
      why: "The answer is \"The bent nail looked like a tiny fishhook.\" It uses like to compare the nail to a fishhook, which is curved just like a bent nail. The crooked and sideways sentence describes the nail but is not a simile. A pencil is straight, so that simile does not fit a bent nail. The brick simile is about the hammer, not the nail."
    },
    {
      id: "W-REV-02-4",
      type: "mc",
      points: 1,
      std: ["3.T.T.1.e"],
      dok: 2,
      prompt: "Tasha wants to add dialogue after sentence 5 to show how she feels when the nail bends. Which sentence is the best choice?",
      choices: [
        { text: "\"I'll never get this right!\" Tasha groaned, dropping the hammer.", correct: true },
        { text: "\"What color should we paint it?\" Tasha asked, looking at the wood." },
        { text: "\"This is the best day ever!\" Tasha cheered, jumping up and down." },
        { text: "Tasha told Grandpa that the nail she hit had bent to one side." }
      ],
      clue: "Reread sentence 5. Then look for words a character says out loud, inside quotation marks, that match that feeling.",
      why: "The answer is \"I'll never get this right!\" Tasha groaned, dropping the hammer. Her words, the word groaned and dropping the hammer all show she feels like giving up, which matches sentence 5. The paint question does not show a feeling about the nail, the cheering shows the wrong feeling, and the last choice tells what she said instead of using her words as dialogue."
    },
    {
      id: "W-REV-02-5",
      type: "dropdown",
      points: 2,
      std: ["3.T.SS.1.c"],
      dok: 2,
      prompt: "Tasha wants to add time-order transitions to the beginning of sentence 7 and sentence 9. Choose the best transition for each blank.",
      text: "(7) {0} she tapped the nail gently, and it went in straight. (9) {1} a bluebird moved in.",
      slots: [
        { options: ["This time,", "Long ago,", "For example,", "In conclusion,"], answer: 0 },
        { options: ["The day before,", "For example,", "A week later,", "However,"], answer: 2 }
      ],
      clue: "For sentence 7, think about how this try is different from the first try. For sentence 9, think about whether the bird came before or after the birdhouse was hung.",
      why: "Sentence 7 should begin with \"This time,\" because it tells about Tasha's second try, right after the first try failed. Long ago does not fit something that just happened, and For example and In conclusion are not time-order words. Sentence 9 should begin with \"A week later,\" because a bird could only move in after the birdhouse was hung. The day before would put it too early, and For example and However do not show time order."
    },
    {
      id: "W-REV-02-6",
      type: "order",
      points: 2,
      std: ["3.T.T.1.e"],
      dok: 2,
      prompt: "Tasha wants to add a paragraph after sentence 8 that tells how they hung the birdhouse. Put the sentences in the order that makes the most sense.",
      steps: [
        "Grandpa leaned a short ladder against the oak tree.",
        "Tasha climbed up two steps, holding the birdhouse carefully.",
        "She hooked the birdhouse onto a strong, low branch.",
        "Then she climbed down, and they stepped back to admire their work."
      ],
      clue: "Picture each action. What has to be in place before Tasha can climb? What must she do before she can climb down?",
      why: "The correct order is: \"Grandpa leaned a short ladder against the oak tree.\" Then \"Tasha climbed up two steps, holding the birdhouse carefully.\" Next, \"She hooked the birdhouse onto a strong, low branch.\" Last, \"Then she climbed down, and they stepped back to admire their work.\" The ladder must be in place before Tasha can climb it, she must be up high to hang the birdhouse, and she can only step back after it is hung."
    },
    {
      id: "W-REV-02-7",
      type: "mc",
      points: 1,
      std: ["3.T.T.1.e"],
      dok: 3,
      prompt: "Sentence 10 is a weak ending. Which sentence should replace sentence 10 to give the story a better ending?",
      choices: [
        { text: "Tasha grinned as it peeked out of the round door, and she was glad she had not given up.", correct: true },
        { text: "Bluebirds eat insects in the summer and berries in the winter, and they like open fields." },
        { text: "The next morning, Tasha and Grandpa went to the hardware store to buy more nails." },
        { text: "Then Tasha went inside to play, and she forgot all about the little blue birdhouse." }
      ],
      clue: "A good ending wraps up the story. It often shows how the main character feels and connects back to the problem she had.",
      why: "The answer is \"Tasha grinned as it peeked out of the round door, and she was glad she had not given up.\" It shows Tasha's feeling and connects back to her problem in sentence 5, when she felt like giving up. The bluebird facts belong in an informational text, the trip to the store starts a new event, and forgetting the birdhouse does not fit a story about how proud she is of her work."
    },
    {
      id: "W-REV-02-8",
      type: "mc",
      points: 1,
      std: ["3.T.SS.1.b"],
      dok: 2,
      prompt: "Tasha's class is making a book of stories to share with families. Tasha wants readers to see what her finished birdhouse looked like. Which feature should she add to her story?",
      choices: [
        { text: "a drawing of the blue birdhouse on the oak branch, with a caption", correct: true },
        { text: "a chart that lists the prices of different kinds of hammers" },
        { text: "a map that shows all the cities and rivers in Georgia" },
        { text: "a glossary that tells what the words hammer and nail mean" }
      ],
      clue: "Think about Tasha's purpose: she wants readers to see something. Which feature shows a picture of it?",
      why: "The answer is \"a drawing of the blue birdhouse on the oak branch, with a caption.\" A drawing lets families see the birdhouse, and the caption tells what it shows. A price chart, a map of Georgia and a glossary give other kinds of information, but none of them shows what the birdhouse looked like."
    }
  ]
});

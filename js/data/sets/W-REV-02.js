/*
 * W-REV-02 — Revising: "Make the story better." One short student narrative draft.
 * The writer, Tasha, is a fictional third grader. Her story's characters, Lena and her
 * grandpa, are fictional too. The draft is numbered by sentence: each sentence string
 * starts with "(n) ". It deliberately lacks setting details, dialogue, two time-order
 * transitions, a paragraph about putting up the birdhouse and a real ending, and it uses
 * a plain verb in sentence 4. Each item fixes one of these.
 * Eastern bluebirds are common in Georgia and nest in boxes mounted on poles in open,
 * sunny yards (Georgia DNR and the North American Bluebird Society advise poles, not
 * trees, and a light-colored box). The box is low enough to put up without a ladder.
 * Sentence references ("p1:<paragraph>:<sentence>") are 1-based; there are no headings.
 */
PP.addSet({
  id: "W-REV-02",
  section: "writing",
  kind: "revising",
  title: "Make the story better",
  blurb: "Help Tasha revise her story about a girl named Lena who builds a birdhouse with her grandpa.",
  passages: [
    {
      id: "p1",
      title: "The Birdhouse",
      byline: "Tasha's first draft",
      genre: "Student draft (narrative)",
      lexile: "about 450L (estimate)",
      paragraphs: [
        [
          "(1) On Saturday morning, Lena and her grandpa carried a box of wood into his garage.",
          "(2) They planned to build a birdhouse for the backyard."
        ],
        [
          "(3) Grandpa showed Lena how to hold the hammer near the end of the handle.",
          "(4) Lena hit the nail, and it bent sideways.",
          "(5) Lena felt like giving up.",
          "(6) Grandpa pulled out the bent nail and gave her a new one.",
          "(7) She tapped the nail gently, and it went in straight."
        ],
        [
          "(8) After they painted the birdhouse light blue and the paint dried, they carried it outside."
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
        { text: "Lena's grandpa had built many things when he was younger." },
        { text: "Lena had always wanted to see a bird up close." },
        { text: "After they finished, they planned to eat lunch together." }
      ],
      clue: "Setting details help the reader picture the place. Keep only the sentences about what the garage looks, sounds, smells or feels like.",
      why: "The answers are \"Sawdust covered the floor, and the air smelled like fresh pine.\" and \"Old tools hung in neat rows on the wall above the workbench.\" Both describe what Lena would see and smell in the garage. The other sentences tell about a character's past, a wish, or a later event, not about the place."
    },
    {
      id: "W-REV-02-2",
      type: "mc",
      points: 1,
      std: ["3.L.V.3.e"],
      dok: 2,
      prompt: "In sentence 4, Tasha wants to show that Lena swung the hammer too hard. Which verb should replace hit?",
      choices: [
        { text: "whacked", correct: true },
        { text: "tapped" },
        { text: "touched" },
        { text: "pressed" }
      ],
      clue: "Look at sentence 7, where Lena does it the right way. The new verb should mean the opposite of how she does it there.",
      why: "The answer is \"whacked.\" Whacked means hit very hard, so it shows why the nail bent. Tapped means a gentle hit, which is what Lena does the second time, in sentence 7. Touched is not a hit at all, and pressed means pushing slowly, not swinging the hammer too hard."
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
      prompt: "Tasha wants to replace sentence 5 with dialogue that shows how Lena feels when the nail bends. Which sentence is the best choice?",
      choices: [
        { text: "\"I'll never get this right!\" Lena groaned, staring at the crooked nail.", correct: true },
        { text: "\"What color should we paint it?\" Lena asked, looking at the wood." },
        { text: "\"This is the best day ever!\" Lena cheered, jumping up and down." },
        { text: "Lena told Grandpa that the nail she hit had bent to one side." }
      ],
      clue: "Reread sentence 5. Then look for words a character says out loud, inside quotation marks, that match that feeling.",
      why: "The answer is the sentence that starts with Lena's own words: \"I'll never get this right!\" Lena groaned, staring at the crooked nail. Her words and the word groaned show she feels like giving up, the same feeling sentence 5 tells about. The paint question does not show a feeling about the nail, the cheering shows the wrong feeling, and the last choice tells what she said instead of using her words as dialogue."
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
        { options: ["This time,", "Long ago,", "Before that,", "Last year,"], answer: 0 },
        { options: ["The day before,", "A week later,", "Long ago,", "Before that,"], answer: 1 }
      ],
      clue: "For sentence 7, think about how this try is different from the first try. For sentence 9, think about whether the bird came before or after the birdhouse was put up.",
      why: "Sentence 7 should begin with \"This time,\" because it tells about Lena's second try, right after the first try failed. Long ago and Last year are much too early for something that happens that same morning, and Before that would put the good try before the nail bent. Sentence 9 should begin with \"A week later,\" because a bird could only move in after the birdhouse was put up. The day before and Before that would put it too early, and Long ago does not fit a story that just happened."
    },
    {
      id: "W-REV-02-6",
      type: "order",
      points: 2,
      std: ["3.T.T.1.e"],
      dok: 2,
      prompt: "Tasha wants to add a paragraph after sentence 8 that tells how they put up the birdhouse. Put the sentences in the order that makes the most sense.",
      steps: [
        "Grandpa dug a deep hole in the open, sunny part of the yard.",
        "He set a metal pole in the hole and packed dirt around it.",
        "Lena held the birdhouse steady while Grandpa screwed it to the top of the pole.",
        "Then they stepped back to admire their work."
      ],
      clue: "Picture each action. What has to be in the ground before anything can be fastened to it? What do people do once a job is finished?",
      why: "The correct order is: \"Grandpa dug a deep hole in the open, sunny part of the yard.\" Then \"He set a metal pole in the hole and packed dirt around it.\" Next, \"Lena held the birdhouse steady while Grandpa screwed it to the top of the pole.\" Last, \"Then they stepped back to admire their work.\" The hole must be dug before the pole can go in it, the pole must stand firm before the birdhouse can be screwed to it, and they can only admire their work after it is done."
    },
    {
      id: "W-REV-02-7",
      type: "mc",
      points: 1,
      std: ["3.T.T.1.e"],
      dok: 3,
      prompt: "Sentence 10 is a weak ending. Which sentence should replace sentence 10 to give the story a better ending?",
      choices: [
        { text: "Lena grinned as it peeked out of the round door, and she was glad she had not given up.", correct: true },
        { text: "Bluebirds eat insects in the summer and berries in the winter, and they like open fields." },
        { text: "The next morning, Lena and Grandpa went to the hardware store to buy more nails." },
        { text: "Then Lena went inside to play, and she forgot all about the little blue birdhouse." }
      ],
      clue: "A good ending wraps up the story. It often shows how the main character feels and connects back to the problem she had.",
      why: "The answer is \"Lena grinned as it peeked out of the round door, and she was glad she had not given up.\" It shows Lena's feeling and connects back to her problem in sentence 5, when she felt like giving up. The bluebird facts belong in an informational text, the trip to the store starts a new event, and forgetting the birdhouse does not fit a story about how proud she is of her work."
    },
    {
      id: "W-REV-02-8",
      type: "mc",
      points: 1,
      std: ["3.T.SS.1.b"],
      dok: 2,
      prompt: "Tasha's class will put their stories in a book to share with families. Tasha wants readers to see what Lena's finished birdhouse looked like. Which feature should she add to her story?",
      choices: [
        { text: "a drawing of the light blue birdhouse on its pole, with a caption", correct: true },
        { text: "a timeline that shows the steps for building the birdhouse" },
        { text: "a list of the tools and supplies Lena and Grandpa used" },
        { text: "a heading at the top of each part of the story" }
      ],
      clue: "Think about Tasha's purpose: what does she want readers to be able to do? Which feature helps with that purpose?",
      why: "The answer is \"a drawing of the light blue birdhouse on its pole, with a caption.\" A drawing lets families see the finished birdhouse, and the caption tells what it shows. A timeline shows the order of the steps, a list names the tools, and headings help readers find each part of the story. Each of those can help a reader, but none of them shows what the birdhouse looked like."
    }
  ]
});

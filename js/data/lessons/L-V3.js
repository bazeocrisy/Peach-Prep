/* Lessons: 3.L.V.3 Vocabulary: word meanings and word relationships. Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.L.V.3.a",
  title: "Context clues: using nearby words to find meaning",
  teach: {
    big: "When I meet a word I don't know, the words and sentences around it can tell me what it means.",
    points: [
      "A definition clue tells you the meaning right there. Look for words like \"which is,\" \"which means\" or \"or.\"",
      "An example clue gives examples of the word. Look for \"such as\" or \"like.\"",
      "A synonym clue is a nearby word that means the same thing. An antonym clue is a nearby word that means the opposite. Words like \"but\" and \"not\" often point to an antonym.",
      "Clues work for phrases too. A phrase is a small group of words, like \"make up your mind,\" that has its own meaning. Use the clues around it to figure out what the whole group of words means.",
      "Some words have more than one meaning, like bark or pitcher. Choose the meaning that fits. Then check: put your meaning in place of the word or phrase. If the sentence still makes sense, you are probably right.",
      "Pictures, captions, charts and graphs can show what a word means. Read the caption and the labels on a picture. On a chart or graph, read the title and the words on the side and bottom. Then check the meaning in the sentence."
    ],
    words: [
      { term: "context clue", means: "a hint in the words around a word that helps you know what it means" },
      { term: "synonym", means: "a word that means the same or almost the same as another word" },
      { term: "antonym", means: "a word that means the opposite of another word" },
      { term: "phrase", means: "a small group of words that go together" },
      { term: "multiple-meaning word", means: "a word that is spelled the same but has more than one meaning" }
    ],
    examples: [
      {
        label: "Example: a definition clue",
        lines: ["Our class garden needs compost, which is a mix of rotted leaves and food scraps that helps plants grow."],
        note: "The words \"which is\" are a signal. Everything after them tells you what compost means. This is a definition clue."
      },
      {
        label: "Example: an example clue",
        lines: ["Mom keeps utensils such as forks, spoons and ladles in the top kitchen drawer."],
        note: "The words \"such as\" are a signal that examples are coming. Forks, spoons and ladles are all tools for cooking and eating, so utensils are tools for cooking and eating."
      }
    ],
    tip: "On the test, a question may ask what a word means in a paragraph. Then Part B asks which sentence helps you know. The clue is often in the same sentence or the one right before or after it."
  },
  learn: [
    {
      show: ["Ben thought the old tree house was sturdy, but Mia said it was weak and might fall down."],
      ask: "What does sturdy mean?",
      steps: [
        "Look for a signal word. The word \"but\" tells you Mia thinks the opposite of Ben.",
        "Find what Mia says: the tree house is weak and might fall down.",
        "Sturdy must mean the opposite of weak. Try it: \"Ben thought the old tree house was strong and solid.\" It makes sense."
      ],
      answer: "Sturdy means strong and solid, not likely to break or fall."
    },
    {
      show: ["Our class kept a graph all spring. June had the most precipitation."],
      figure: { src: "assets/figures/v3a-rainfall-graph.svg", label: "Figure 1", caption: "Our class kept track of the rain.",
        alt: "Bar graph titled Rain in Our Garden. The side of the graph says inches of rain. The bars show March 4 inches, April 3 inches, May 2 inches and June 5 inches. June has the tallest bar." },
      ask: "What does precipitation mean? Use the graph.",
      steps: [
        "Read the title. It tells what the graph measures: Rain in Our Garden.",
        "Read the words on the side: inches of rain. Each bar shows how much rain came down in one month. June has the tallest bar, 5 inches.",
        "Check the sentence. It says June had the most precipitation, and the graph shows June had the most rain. So precipitation must mean rain, or other water that falls from the sky."
      ],
      answer: "Precipitation means rain, or other water like snow, that falls from the sky."
    },
    {
      show: ["At the picnic, Aunt Rosa poured cold lemonade from a glass pitcher into our cups."],
      ask: "Which meaning of pitcher is used here: a baseball player who throws the ball, or a container that holds and pours drinks?",
      steps: [
        "Pitcher is a multiple-meaning word. Name both meanings before you choose.",
        "Find the words around it: poured, lemonade, glass, cups.",
        "A baseball player cannot be made of glass or pour lemonade. Only one meaning fits."
      ],
      answer: "Here, pitcher means a container that holds and pours drinks."
    }
  ],
  parent: "When you read together, stop at a word your child does not know. Ask, \"What words nearby give us a hint?\" Then have your child try a meaning in place of the word to see if it makes sense. Pictures, charts and captions in books are clues too, so point to them when a word is new.",
  passages: [
    { id: "p1", title: "The Class Bake Sale", genre: "Literary text",
      paragraphs: [
        ["Every spring, Mr. Lee's third graders hold a bake sale to raise money for new library books."],
        ["This year, the class baked assorted treats, such as banana bread, oatmeal cookies and lemon bars.", "They set everything out on two long tables in the front hall."],
        ["At first, buyers were scarce.", "Only two people stopped by in the whole first hour.", "Leah sat at the table and sighed."],
        ["Then the lunch bell rang, and a crowd of hungry students rushed in.", "They devoured the cookies, gobbling up every last crumb in ten minutes."],
        ["After the sale, Mr. Lee counted the money.", "Then he helped the class write a budget, which is a plan for how to spend money.", "There was enough to buy twelve new books."],
        ["Leah grinned.", "\"Next year, let's bake twice as many cookies!\""]
      ] },
    { id: "p2", title: "A Trip to the Okefenokee Swamp", genre: "Informational text",
      paragraphs: [
        ["The Okefenokee Swamp is in the southeast corner of Georgia.", "A swamp is a kind of wetland, which is land that is covered by water for much of the year."],
        ["The water in the swamp looks dark brown, like a cup of tea.", "Leaves and other plant parts fall into the water and slowly break down.", "As they break down, they stain the water and change its color."],
        ["Many animals dwell in the swamp.", "They find food, build nests and raise their young there.", "Alligators, turtles, frogs and herons all make their homes in the Okefenokee."],
        ["Visitors can paddle canoes along the swamp's narrow waterways.", "Guides tell them to keep an eye out for alligators.", "Alligators often rest along the edges of the water, and they can be hard to see.", "In some spots, thick mats of plants float on top of the water.", "These mats look like land, but they are not firm.", "They are soft and can shake when something moves on them."],
        ["If you visit, be cautious.", "Stay in your boat, keep your hands out of the water and never feed the alligators."]
      ],
      figures: [
        { after: 3, src: "assets/figures/v3a-heron.svg", label: "Figure 1", caption: "A heron hunts for fish in the shallow water.",
          alt: "A drawing of a heron, a tall bird, standing in shallow water. Labels point to its long neck, its sharp beak and its long legs." }
      ] },
    /* PP-004 form B (testB) passage, written by formB-lang. Needs independent review. */
    { id: "p3", title: "How a Hot-Air Balloon Flies", genre: "Informational text",
      paragraphs: [
        ["A hot-air balloon has no engine and no wings.", "Still, it can float high above the trees."],
        ["A balloon has three main parts, plus a few smaller ones.", "The big cloth bag on top is called the envelope.", "Under the envelope is a burner, and under the burner hangs a basket for the pilot and riders."],
        ["To make the balloon go up, the pilot turns on the burner.", "It shoots a tall flame up into the envelope and heats the air inside.", "Hot air is lighter than cool air.", "The same amount of hot air weighs less, so it rises and carries the balloon with it."],
        ["As the air inside gets hotter, the balloon begins to ascend.", "It floats higher and higher.", "Soon the houses below look as small as toy blocks."],
        ["A pilot cannot steer a balloon the way a driver steers a car.", "The balloon drifts wherever the wind pushes it.", "That is why pilots like to fly early in the morning, when the air is usually calm.", "Later in the day, the wind is often gusty instead, and it can push a balloon the wrong way."],
        ["When it is time to come down, the pilot pulls a long cord that opens the vent.", "Some of the hot air escapes, and the balloon sinks slowly.", "The pilot looks for an open field where the balloon can touch down.", "A few minutes later, the basket bumps gently onto the grass."]
      ],
      figures: [
        { after: 2, src: "assets/figures/v3a-b-balloon-parts.svg", label: "Figure 1", caption: "The parts of a hot-air balloon",
          alt: "A drawing of a hot-air balloon with four labels. The label vent points to a small dashed circle at the very top of the balloon. The label envelope points to the big balloon. The label burner points to a small box under the balloon, with a flame pointing up into it. The label basket points to the basket that hangs from ropes at the bottom." }
      ] },
    /* B5-b5b:passages:start */
    {
      id: "p4",
      title: "Weaving Day",
      genre: "Literary text",
      paragraphs: [
        [
          "Nia went to a weaving class at the town library on Saturday."
        ],
        [
          "Her teacher, Ms. Reyes, showed her a loom, which is a frame that holds the long threads in place."
        ],
        [
          "Nia picked bold hues, such as red, orange and gold.",
          "She tied each thread to the frame."
        ],
        [
          "At first, her threads were loose, but Ms. Reyes helped her pull them until they were taut.",
          "Then Nia could pass the yarn over and under, row after row."
        ],
        [
          "By noon, the cloth was finished.",
          "Nia felt very proud of her work."
        ]
      ]
    },
    {
      id: "p5",
      title: "Life on the Tundra",
      genre: "Informational text",
      paragraphs: [
        [
          "The tundra is a cold land near the top of the world.",
          "No trees grow there, and the ground is frozen hard in winter."
        ],
        [
          "The tundra is barren.",
          "Only moss, grass and a few tiny flowers can grow there."
        ],
        [
          "Arctic foxes live on the tundra.",
          "In winter, their thick fur turns white, which helps them hide in the snow."
        ],
        [
          "Summer is short.",
          "The top layer of soil thaws, and small flowers bloom.",
          "Birds fly in to nest, and insects hum over the ponds."
        ]
      ]
    },
    {
      id: "p6",
      title: "A Morning at the River",
      genre: "Literary text",
      paragraphs: [
        [
          "On Sunday, Dad and I walked down to the bank of the river."
        ],
        [
          "The current was strong, so we stayed back from the edge."
        ],
        [
          "I dropped a stick into the water and watched it race away."
        ],
        [
          "By noon, my arms were tired from tossing stones.",
          "Dad said, \"Let's call it a day.\"",
          "We packed our bag and walked home."
        ]
      ]
    }
    /* B5-b5b:passages:end */
  ],
  practice: [
    { id: "SK-V3a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What does assorted mean in paragraph 2?",
      choices: [
        { text: "of many different kinds", correct: true },
        { text: "baked early in the day" },
        { text: "very sweet and sticky" },
        { text: "wrapped in paper bags" }
      ],
      clue: "Look for the words \"such as\" in the sentence. What do the examples after them tell you about the treats?",
      why: "The answer is \"of many different kinds.\" The words \"such as\" give examples: banana bread, oatmeal cookies and lemon bars. Those are all different kinds of treats, so assorted means of many different kinds." },
    { id: "SK-V3a-P2", type: "ebsr", points: 2, dok: 2, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does scarce mean in paragraph 3?",
        choices: [
          { text: "very few; not many", correct: true },
          { text: "loud and rude" },
          { text: "tired and hungry" },
          { text: "far away" }
        ] },
      partB: { prompt: "Which sentence from the story BEST helps you know what scarce means?",
        choices: [
          { text: "\"Only two people stopped by in the whole first hour.\"", correct: true },
          { text: "\"They set everything out on two long tables in the front hall.\"" },
          { text: "\"Every spring, Mr. Lee's third graders hold a bake sale to raise money for new library books.\"" },
          { text: "\"Leah sat at the table and sighed.\"" }
        ] },
      clue: "Read the sentences around the word. Which one helps you picture what the first part of the sale was like?",
      why: "Part A: very few; not many. Part B: \"Only two people stopped by in the whole first hour.\" Only two buyers in a whole hour is very few, so scarce means very few. Leah's sigh shows she felt let down, but it does not tell you anything about how many buyers there were." },
    { id: "SK-V3a-P3", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read paragraph 4. Choose the meaning of devoured.",
      text: "In paragraph 4, devoured means {0}.",
      slots: [
        { options: ["ate quickly and hungrily", "looked at every crumb with care", "sold for a low price"], answer: 0 }
      ],
      clue: "Find another word or phrase in the same sentence that means almost the same thing. That is a synonym clue.",
      why: "The answer is \"ate quickly and hungrily.\" The same sentence says the students were gobbling up every last crumb in ten minutes. Gobbling up is a synonym clue for devoured." },
    { id: "SK-V3a-P4", type: "hottext", points: 1, dok: 1, passages: ["p1"],
      prompt: "Which sentence gives a definition clue that tells exactly what a word means? Choose the sentence in the story.",
      targets: ["p1:2:1", "p1:3:2", "p1:4:2", "p1:5:2"],
      answer: ["p1:5:2"], pick: 1,
      clue: "A definition clue often uses the signal words \"which is\" or \"which means.\" Look for them.",
      why: "The answer is \"Then he helped the class write a budget, which is a plan for how to spend money.\" The words \"which is\" lead right into the meaning of budget. The other sentences give an example clue, a sentence that is itself a clue for the word scarce, and a synonym clue." },
    { id: "SK-V3a-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each sentence to the kind of context clue it gives for the word in front of it.",
      cols: ["Definition clue", "Example clue", "Synonym clue", "Antonym clue"],
      rows: [
        { text: "arid: A cactus can grow in arid places, which are very dry places with little rain.", answer: 0 },
        { text: "legumes: Grandpa grows legumes, such as peas, beans and peanuts.", answer: 1 },
        { text: "drowsy: The puppy was drowsy. It was so sleepy it could hardly keep its eyes open.", answer: 2 },
        { text: "tidy: Sam's room was tidy, but his brother's room was a big mess.", answer: 3 }
      ],
      clue: "For each sentence, find the words that help you know the meaning. Do they tell the meaning, give examples, mean the same thing or mean the opposite?",
      why: "Arid has a definition clue (\"which are very dry places\"). Legumes has an example clue (\"such as peas, beans and peanuts\"). Drowsy has a synonym clue (sleepy). Tidy has an antonym clue (\"but ... a big mess\")." },
    { id: "SK-V3a-P6", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Trunk has more than one meaning. Use the sentence and the picture. What does trunk mean here?",
      stem: ["Grandpa leaned the ladder against the trunk."],
      figure: { src: "assets/figures/v3a-tree-ladder.svg",
        alt: "A drawing of a ladder leaning against a tree. The top of the ladder touches the tree a little below its lowest branch. Labels point to a branch and the roots." },
      choices: [
        { text: "the thick main stem of a tree", correct: true },
        { text: "the back part of a car used for storage" },
        { text: "the long nose of an elephant" },
        { text: "a pair of shorts worn for swimming" }
      ],
      clue: "The sentence alone could fit more than one meaning. Look at the picture. What is the ladder leaning on? Which meaning matches that?",
      why: "The answer is \"the thick main stem of a tree.\" The sentence does not say what kind of trunk it is, but the picture does. The ladder leans on the thick wooden part of the tree, between the roots and the branches. That part is the trunk, and it holds the tree up. A car, an elephant and swim shorts are not in the picture." },
    { id: "SK-V3a-P7", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read paragraph 2. Choose the meaning of the phrase set everything out.",
      text: "In paragraph 2, set everything out means {0}.",
      slots: [
        { options: ["packed it up for a long, slow trip", "put it where people could see it", "threw it all away"], answer: 1 }
      ],
      clue: "Read the whole sentence. Where did the treats go, and why would a bake sale need them there?",
      why: "The answer is \"put it where people could see it.\" The class put the treats on two long tables in the front hall so buyers could see them and pick some. Read together, the words set everything out mean to lay things out for people to see." }
  ],
  /* B5-b5b:core:start */
  /* ---------- Expansion 2026-10-22, batch B5 (author b5b) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Author log: docs/expansion-2026-10-22/batches/B5-b5b-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          {
            id: "SK-V3a-C01",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.a"
            ],
            passages: [
              "p4"
            ],
            prompt: "What does loom mean in paragraph 2?",
            choices: [
              {
                text: "a frame that holds long threads",
                correct: true
              },
              {
                text: "a tool that cuts the yarn"
              },
              {
                text: "a box for storing wool and yarn"
              },
              {
                text: "a table where the class eats lunch"
              }
            ],
            clue: "Look for a signal word near the new word. It can point to the meaning.",
            hints: [
              "Look for a signal word near the new word. It can point to the meaning.",
              "Read the sentence the word is in. Look at the words that come right after the signal.",
              "One choice is about lunch, which has nothing to do with weaving. Decide which of the others fits the words after the signal."
            ],
            how: [
              "Find the word: \"a loom, which is a frame that holds the long threads in place.\"",
              "The words which is are a signal. The meaning comes right after them.",
              "After which is: a frame that holds the long threads in place."
            ],
            misconception: "A common mix-up is guessing a meaning from the topic of weaving. The words after which is give the exact meaning.",
            why: "The answer is \"a frame that holds long threads.\" The words which is lead into the meaning: a frame that holds the long threads in place. A tool that cuts yarn, a box for storing yarn and a lunch table are not what the sentence says."
          },
          {
            id: "SK-V3a-C02",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.3.a"
            ],
            passages: [
              "p4"
            ],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "What does hues mean in paragraph 3?",
              choices: [
                {
                  text: "colors",
                  correct: true
                },
                {
                  text: "sizes"
                },
                {
                  text: "sounds"
                },
                {
                  text: "patterns"
                }
              ]
            },
            partB: {
              prompt: "Which sentence from the story BEST helps you know what hues means?",
              choices: [
                {
                  text: "Nia picked bold hues, such as red, orange and gold.",
                  correct: true
                },
                {
                  text: "Nia went to a weaving class at the town library on Saturday."
                },
                {
                  text: "Then Nia could pass the yarn over and under, row after row."
                },
                {
                  text: "By noon, the cloth was finished."
                }
              ]
            },
            clue: "Authors sometimes give examples to show what a word means. For Part B, look for the sentence that gives them.",
            hints: [
              "Authors sometimes give examples to show what a word means. For Part B, look for the sentence that gives them.",
              "Think about the whole story, not only the part with the word. Which sentences give details you could picture?",
              "For Part B, a true sentence about the weaving class may not tell you anything about the word."
            ],
            how: [
              "Part A: look at the examples in the sentence: red, orange and gold. They are all colors.",
              "Examples that share one kind of thing tell you what the word means.",
              "Part B: the sentence with such as red, orange and gold gives the examples.",
              "The other sentences tell about the class and the work, not about the word."
            ],
            misconception: "A common mix-up is picking a sentence just because it is about weaving. The sentence has to explain the word.",
            why: "Part A: colors. Red, orange and gold are colors, so hues means colors. Part B: \"Nia picked bold hues, such as red, orange and gold.\" The words such as lead to examples that show the meaning. The other sentences do not explain the word."
          },
          {
            id: "SK-V3a-C03",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.a"
            ],
            passages: [
              "p4"
            ],
            prompt: "Read the sentence. Choose the word that gives an antonym clue for taut.",
            stem: [
              "At first, her threads were loose, but Ms. Reyes helped her pull them until they were taut."
            ],
            options: [
              "loose",
              "taut",
              "pull",
              "helped"
            ],
            answer: [
              0
            ],
            pick: 1,
            clue: "An antonym clue is a word that means the opposite. Look for a word that points the other way.",
            hints: [
              "An antonym clue is a word that means the opposite. Look for a word that points the other way.",
              "Read the sentence and look for the small word that signals a change. Look at the words on either side of it.",
              "The word taut is the word you are trying to understand, so it cannot be its own clue. Check the other choices."
            ],
            how: [
              "The word but shows a change: the threads were one way at first, and then another way.",
              "At first the threads were loose, but later they were taut. So taut is the opposite of loose.",
              "Pull and helped tell what Ms. Reyes did. They do not show the opposite of taut."
            ],
            misconception: "A common mix-up is choosing a word that tells what happened. An antonym clue means the opposite.",
            why: "The answer is \"loose.\" The word but tells you the threads changed from loose to taut, so taut means the opposite of loose: pulled tight. Pull and helped are actions, and taut is the word being explained."
          },
          {
            id: "SK-V3a-C04",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.3.a"
            ],
            passages: [
              "p4"
            ],
            prompt: "Which TWO word groups in paragraphs 2 and 3 are signals that a clue is coming?",
            pick: 2,
            choices: [
              {
                text: "which is",
                correct: true
              },
              {
                text: "such as",
                correct: true
              },
              {
                text: "in place"
              },
              {
                text: "each thread"
              },
              {
                text: "row after row"
              }
            ],
            clue: "Signal words are small word groups that tell you a clue is coming. Think about the ones you learned.",
            hints: [
              "Signal words are small word groups that tell you a clue is coming. Think about the ones you learned.",
              "Read paragraphs 2 and 3 and look for small word groups that come before an explanation or a list.",
              "A signal word group is followed by an explanation or a list. Check what comes after each choice."
            ],
            how: [
              "In paragraph 2, which is comes right before the meaning of loom.",
              "In paragraph 3, such as comes right before a list of examples.",
              "In place, each thread and row after row are parts of the story, and nothing explains a word after them."
            ],
            misconception: "A common mix-up is choosing any short group of words. A signal word group is followed by a meaning or examples.",
            why: "The answers are \"which is\" and \"such as.\" Which is leads to the meaning of loom, and such as leads to a list of examples that shows the meaning of hues. The other word groups are not followed by a meaning or examples."
          },
          {
            ref: "SK-V3a-P3"
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-V3a-C05",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.a"
            ],
            passages: [
              "p5"
            ],
            prompt: "What does barren mean in paragraph 2?",
            choices: [
              {
                text: "with very little growing",
                correct: true
              },
              {
                text: "full of tall trees and bushes"
              },
              {
                text: "covered with deep water"
              },
              {
                text: "busy with many animals"
              }
            ],
            clue: "Sometimes the clue to a word comes in the sentence after it. Read on.",
            hints: [
              "Sometimes the clue to a word comes in the sentence after it. Read on.",
              "Read the sentence the word is in and the one that follows it. Look at what grows there.",
              "Some choices talk about trees or water or animals. Check what the first paragraph says about the land."
            ],
            how: [
              "Find the word: \"The tundra is barren.\" The sentence does not explain it.",
              "Read the next sentence: only moss, grass and a few tiny flowers can grow there.",
              "So barren means with very little growing."
            ],
            misconception: "A common mix-up is stopping at the sentence with the word. The next sentence holds the clue.",
            why: "The answer is \"with very little growing.\" The next sentence says only moss, grass and a few tiny flowers can grow there. Paragraph 1 says no trees grow there, so the land is not full of trees, and nothing says it is covered with water or busy with animals."
          },
          {
            id: "SK-V3a-C06",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.3.a"
            ],
            passages: [
              "p5"
            ],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "What does thaws mean in paragraph 4?",
              choices: [
                {
                  text: "melts and turns soft",
                  correct: true
                },
                {
                  text: "freezes hard"
                },
                {
                  text: "dries out in the sun"
                },
                {
                  text: "fills up with water"
                }
              ]
            },
            partB: {
              prompt: "Which sentence from the article BEST helps you know what thaws means?",
              choices: [
                {
                  text: "No trees grow there, and the ground is frozen hard in winter.",
                  correct: true
                },
                {
                  text: "The tundra is a cold land near the top of the world."
                },
                {
                  text: "Only moss, grass and a few tiny flowers can grow there."
                },
                {
                  text: "Birds fly in to nest, and insects hum over the ponds."
                }
              ]
            },
            clue: "Think about what this word describes happening and what that thing was like before. For Part B, look for a sentence about how things were before summer.",
            hints: [
              "Think about what this word describes happening and what that thing was like before. For Part B, look for a sentence about how things were before summer.",
              "Think about the whole article, not only the paragraph with the word. What changes between winter and summer?",
              "For Part A, thaws is a change that happens in summer, not in winter. For Part B, a true detail about the plants may not tell about the ground."
            ],
            how: [
              "Part A: paragraph 4 says summer is short and flowers bloom, so something changes in the soil.",
              "Part B: paragraph 1 says the ground is frozen hard in winter.",
              "Frozen hard in winter and thaws in summer are opposites, so thaws means melts and turns soft.",
              "The other sentences are true, but they do not tell what the ground is like."
            ],
            misconception: "A common mix-up is looking only at the paragraph with the word. A clue can be in an earlier paragraph.",
            why: "Part A: melts and turns soft. Part B: \"No trees grow there, and the ground is frozen hard in winter.\" The soil is frozen in winter and thaws in summer, so thaws means melts and turns soft. The other sentences are true, but they do not tell what the ground is like."
          },
          {
            id: "SK-V3a-C07",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.a"
            ],
            passages: [],
            prompt: "Read the sentence and look at the graph. What does scant mean?",
            stem: [
              "By December, daylight on the tundra was scant."
            ],
            figure: {
              src: "assets/figures/v3a-c-daylight-graph.svg",
              alt: "Bar graph titled Hours of Daylight on the Tundra. The words at the bottom say hours. The bars show September 12, October 9, November 5 and December 3. December has the shortest bar."
            },
            choices: [
              {
                text: "very little; hardly any",
                correct: true
              },
              {
                text: "plenty for everyone"
              },
              {
                text: "bright and warm all day"
              },
              {
                text: "the same as in summer"
              }
            ],
            clue: "Read the title of the graph and the words at the bottom. Think about what the bars count.",
            hints: [
              "Read the title of the graph and the words at the bottom. Think about what the bars count.",
              "Compare the bars for different months. Look at which way the bars go as the months go by.",
              "The word is about an amount, not about color or weather. Decide which choices are about how much."
            ],
            how: [
              "The title tells what the graph counts: hours of daylight on the tundra.",
              "The bars get shorter each month, and December has the shortest bar: 3 hours.",
              "Three hours is very little compared with twelve, so scant means very little."
            ],
            misconception: "A common mix-up is choosing a meaning from the word daylight. Use the graph to see how much daylight there is.",
            why: "The answer is \"very little; hardly any.\" The graph shows hours of daylight getting smaller each month, down to only 3 hours in December. Bars that short mean there is very little daylight. September, not December, was the month with the most daylight."
          },
          {
            id: "SK-V3a-C08",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.a"
            ],
            passages: [],
            prompt: "Read the sentence and look at the picture. What is a den?",
            stem: [
              "The fox cubs stayed safe in the den."
            ],
            figure: {
              src: "assets/figures/v3a-c-fox-den.svg",
              alt: "A cutaway drawing of snowy ground. A tunnel leads from the snow down to a small room under the ground. Two fox cubs sleep in the room. Labels name the snow, the tunnel and the room."
            },
            choices: [
              {
                text: "an animal's hidden home under the ground",
                correct: true
              },
              {
                text: "a tool for digging through hard snow"
              },
              {
                text: "a trail that foxes follow to the sea"
              },
              {
                text: "a thick white coat that keeps foxes warm"
              }
            ],
            clue: "Read the sentence, then look at the picture and its labels.",
            hints: [
              "Read the sentence, then look at the picture and its labels.",
              "Look at where the cubs are in the picture. Look at what is around them.",
              "Think about what a place must be like for cubs to stay safe inside it. Decide which choices are places."
            ],
            how: [
              "The sentence says the cubs stayed safe in the den, so a den is a place.",
              "The picture shows a tunnel from the snow to a room under the ground, and the cubs sleep in the room.",
              "So a den is an animal's hidden home under the ground."
            ],
            misconception: "A common mix-up is picking a meaning that is about foxes but not about a place. The cubs stayed in the den.",
            why: "The answer is \"an animal's hidden home under the ground.\" The cubs are inside the den, and the picture shows a room under the snow with a tunnel to reach it. A tool, a trail and a coat are not places where cubs can stay."
          },
          {
            id: "SK-V3a-C09",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.a"
            ],
            passages: [],
            prompt: "Read the sentence and look at the table. Choose the meaning of prey.",
            stem: [
              "Lemmings are the Arctic fox's main prey."
            ],
            figure: {
              src: "assets/figures/v3a-c-fox-table.svg",
              alt: "Table titled Arctic Fox Meals. The columns are animal and how often. Lemming, most days. Bird, some days. Hare, few days."
            },
            text: "In this sentence, prey means {0}.",
            slots: [
              {
                options: [
                  "dens where young foxes sleep and hide",
                  "animals that are hunted for food",
                  "thick fur that keeps foxes warm"
                ],
                answer: 1
              }
            ],
            clue: "Read the title of the table and the words in the rows. Think about what the table lists.",
            hints: [
              "Read the title of the table and the words in the rows. Think about what the table lists.",
              "Look at the two columns. Think about what the fox does with each animal in the first column.",
              "Put each meaning in the sentence and check it against the table."
            ],
            how: [
              "The title is Arctic Fox Meals, so the table lists what the fox eats.",
              "Lemming, bird and hare are animals, and the fox eats them most days, some days or few days.",
              "So prey means animals that are hunted for food."
            ],
            misconception: "A common mix-up is choosing a meaning about foxes in general. The table is about what the fox eats.",
            why: "The answer is \"animals that are hunted for food.\" The title says the table is about Arctic fox meals, and lemmings are the animal it eats most days. Dens and thick fur are not on the table."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-V3a-C10",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.a"
            ],
            passages: [
              "p6"
            ],
            prompt: "Bank has more than one meaning. What does bank mean in paragraph 1?",
            choices: [
              {
                text: "the land along the side of a river",
                correct: true
              },
              {
                text: "a place that keeps people's money"
              },
              {
                text: "a pile of snow beside a road"
              },
              {
                text: "a long, straight row of lights on a wall"
              }
            ],
            clue: "Say more than one meaning of bank before you choose.",
            hints: [
              "Say more than one meaning of bank before you choose.",
              "Read the sentence the word is in. Look for the words that tell where Dad and the writer were going.",
              "Put each meaning in place of the word and read the sentence again. Cross out any meaning that does not make sense."
            ],
            how: [
              "Bank has more than one meaning: land by water, a place for money, a pile of snow.",
              "Paragraph 1 says Dad and the writer walked down to the bank of the river.",
              "Only the land along the side of a river fits next to the river."
            ],
            misconception: "A common mix-up is choosing the meaning you know best. Check which meaning fits the sentence.",
            why: "The answer is \"the land along the side of a river.\" The sentence says they walked down to the bank of the river, so bank means the land beside the water. A place for money, a pile of snow and a row of lights do not fit."
          },
          {
            id: "SK-V3a-C11",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.a"
            ],
            passages: [],
            prompt: "Choose the sentence in which current has the SAME meaning as in paragraph 2 of the story.",
            stem: [
              "Paragraph 2 says: \"The current was strong, so we stayed back from the edge.\""
            ],
            options: [
              "A strong current pulled the raft downstream.",
              "The current price of milk is on the sign.",
              "The electric current made the bulb glow.",
              "Her current teacher is Mr. Ross."
            ],
            answer: [
              0
            ],
            pick: 1,
            clue: "First decide what current means in the story. Then check each sentence for that same meaning.",
            hints: [
              "First decide what current means in the story. Then check each sentence for that same meaning.",
              "Put the story meaning in place of current in each sentence. Does the sentence still make sense?",
              "Two of the sentences use current to mean happening now. Compare the other two with the story."
            ],
            how: [
              "In the story, the current is the moving water in the river, and it was strong.",
              "A current of water pulling a raft downstream is the same meaning.",
              "The price and the teacher are about now, and the bulb is about electricity."
            ],
            misconception: "A common mix-up is choosing a sentence that has the same word but a different meaning.",
            why: "The answer is \"A strong current pulled the raft downstream.\" Both sentences use current to mean moving water. The price and the teacher use it to mean happening now, and the bulb uses it to mean electricity."
          },
          {
            id: "SK-V3a-C12",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.3.a"
            ],
            passages: [
              "p6"
            ],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "What does the phrase call it a day mean in paragraph 4?",
              choices: [
                {
                  text: "stop for the rest of the day",
                  correct: true
                },
                {
                  text: "give the day a new name"
                },
                {
                  text: "phone someone later today"
                },
                {
                  text: "wait one more day to start"
                }
              ]
            },
            partB: {
              prompt: "Which sentence from the story shows what they did after Dad said it?",
              choices: [
                {
                  text: "We packed our bag and walked home.",
                  correct: true
                },
                {
                  text: "On Sunday, Dad and I walked down to the bank of the river."
                },
                {
                  text: "I dropped a stick into the water and watched it race away."
                },
                {
                  text: "By noon, my arms were tired from tossing stones."
                }
              ]
            },
            clue: "A phrase can have a meaning that is different from its separate words. Read the sentences around it.",
            hints: [
              "A phrase can have a meaning that is different from its separate words. Read the sentences around it.",
              "Think about the whole story, not only paragraph 4. What happened first, and what happened last?",
              "For Part A, a phrase about a day is not always about naming or calling. For Part B, think about when each event happened compared with Dad's words."
            ],
            how: [
              "Part A: Dad says it when the writer is tired, near noon.",
              "Part B: look for what happened after Dad spoke.",
              "They packed the bag and walked home, so they stopped for the day.",
              "The other sentences tell what happened earlier in the morning."
            ],
            misconception: "A common mix-up is reading each word of the phrase by itself. The whole phrase has its own meaning.",
            why: "Part A: stop for the rest of the day. Part B: \"We packed our bag and walked home.\" After Dad said it, they packed up and went home, so call it a day means to stop for the day. The other sentences tell what happened before Dad spoke."
          },
          {
            ref: "SK-V3a-P6"
          },
          {
            ref: "SK-V3a-P7"
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-V3a-S01",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-C01"
      ],
      prompt: "What does easel mean in the sentence?",
      stem: [
        "Mia set up her easel, which is a stand that holds a painting while it is made."
      ],
      choices: [
        {
          text: "a stand that holds a painting",
          correct: true
        },
        {
          text: "a brush that makes very thin lines"
        },
        {
          text: "a jar of water for rinsing paint"
        },
        {
          text: "a cloth for wiping hands"
        }
      ],
      clue: "Look for a signal word near the new word. It can point to the meaning.",
      hints: [
        "Look for a signal word near the new word. It can point to the meaning.",
        "Read the sentence and look at the words that come after the signal.",
        "One of the choices is a tool you hold in your hand. Think about what the sentence says an easel does."
      ],
      how: [
        "Find the word: \"her easel, which is a stand that holds a painting while it is made.\"",
        "The words which is are a signal, and the meaning comes right after them.",
        "After which is: a stand that holds a painting while it is made."
      ],
      misconception: "A common mix-up is picking a thing that painters use. The words after which is give the exact meaning.",
      why: "The answer is \"a stand that holds a painting.\" The words which is lead into the meaning: a stand that holds a painting while it is made. A brush, a jar and a cloth are other things a painter might use, but the sentence does not describe them."
    },
    {
      id: "SK-V3a-S02",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-C02"
      ],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: [
        "Mia's list: \"We leave at nine from the school parking lot in the morning. For the hike, pack footwear, like boots, sandals and sneakers. Also bring a hat and a big bottle of cold water for the trail. Meet us by the front gate before the school bus comes.\""
      ],
      partA: {
        prompt: "In Mia's list, footwear names which kind of things?",
        choices: [
          {
            text: "things you wear on your feet",
            correct: true
          },
          {
            text: "things you wear on your head"
          },
          {
            text: "things you carry water in"
          },
          {
            text: "things you sit on to rest"
          }
        ]
      },
      partB: {
        prompt: "Which line gives examples that explain the word?",
        choices: [
          {
            text: "For the hike, pack footwear, like boots, sandals and sneakers.",
            correct: true
          },
          {
            text: "We leave at nine from the school parking lot in the morning."
          },
          {
            text: "Also bring a hat and a big bottle of cold water for the trail."
          },
          {
            text: "Meet us by the front gate before the school bus comes."
          }
        ]
      },
      clue: "Authors sometimes give examples to show what a word means. For Part B, look for the sentence that gives them.",
      hints: [
        "Authors sometimes give examples to show what a word means. For Part B, look for the sentence that gives them.",
        "Think about the whole list, not only the part with the word. Which sentences name things you could picture?",
        "For Part B, a sentence about what to bring may not be about the word."
      ],
      how: [
        "Part A: look at the examples: boots, sandals and sneakers. All of them go on your feet.",
        "Examples that share one kind of thing tell you what the word means.",
        "Part B: the sentence with like boots, sandals and sneakers gives the examples.",
        "The other sentences tell the time, the hat and water, and where to meet."
      ],
      misconception: "A common mix-up is picking any sentence about the hike. The sentence has to explain the word.",
      why: "Part A: things you wear on your feet. Boots, sandals and sneakers all go on your feet. Part B: \"For the hike, pack footwear, like boots, sandals and sneakers.\" The word like leads to examples that show the meaning. The other sentences do not explain the word."
    },
    {
      id: "SK-V3a-S03",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-C03"
      ],
      prompt: "Which word in this sentence points to the opposite of scorching?",
      stem: [
        "The soup was scorching, but the lemonade was icy."
      ],
      options: [
        "icy",
        "scorching",
        "soup",
        "lemonade"
      ],
      answer: [
        0
      ],
      pick: 1,
      clue: "An opposite clue is a word that means the reverse. Look for a word that points the other way.",
      hints: [
        "An opposite clue is a word that means the reverse. Look for a word that points the other way.",
        "Read the sentence and look for the small word that signals a change. Look at what comes on each side of it.",
        "The word scorching is the word you are trying to understand, so it cannot be its own clue. Check the other choices."
      ],
      how: [
        "The word but shows a change: one thing is one way, and the other thing is the opposite way.",
        "The lemonade is icy, so the soup must be the opposite of icy: very hot.",
        "Soup and lemonade are the things being described, not the clue."
      ],
      misconception: "A common mix-up is choosing a noun in the sentence. The clue is the word that means the opposite.",
      why: "The answer is \"icy.\" The word but tells you the soup and the lemonade are opposites. Icy means very cold, so scorching means very hot. Soup and lemonade only name the two foods."
    },
    {
      id: "SK-V3a-S04",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-C04"
      ],
      prompt: "Which TWO choices tell you that a meaning or examples are about to follow?",
      stem: [
        "Ava's note: \"My map has a legend, which means a list that explains the symbols. I also enjoy landmarks, like the old mill and the tall bridge.\""
      ],
      pick: 2,
      choices: [
        {
          text: "which means",
          correct: true
        },
        {
          text: "like",
          correct: true
        },
        {
          text: "the tall bridge"
        },
        {
          text: "a map"
        },
        {
          text: "I also"
        }
      ],
      clue: "Signal words are small word groups that tell you a clue is coming. Think about the ones you learned.",
      hints: [
        "Signal words are small word groups that tell you a clue is coming. Think about the ones you learned.",
        "Read the note and look for small word groups that come before an explanation or a list.",
        "A signal word group is followed by an explanation or a list. Check what comes after each choice."
      ],
      how: [
        "In the first sentence, which means comes right before the meaning of legend.",
        "In the second sentence, the word like comes right before a list of examples.",
        "The tall bridge, a map and I also are parts of the sentences, and nothing explains a word after them."
      ],
      misconception: "A common mix-up is choosing any short group of words. A signal word group is followed by a meaning or examples.",
      why: "The answers are \"which means\" and \"like.\" Which means leads to the meaning of legend, and like leads to examples of landmarks. The other choices are not followed by a meaning or examples."
    },
    {
      id: "SK-V3a-S05",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-P3"
      ],
      prompt: "Pick the best meaning for ravenous.",
      stem: [
        "After the long hike, the hikers were ravenous. They were so hungry that they ate every crumb."
      ],
      text: "Here, ravenous describes hikers who are {0}.",
      slots: [
        {
          options: [
            "extremely hungry",
            "extremely tired",
            "extremely noisy"
          ],
          answer: 0
        }
      ],
      clue: "Find another word or phrase near the new word that means almost the same thing. That is a synonym clue.",
      hints: [
        "Find another word or phrase near the new word that means almost the same thing. That is a synonym clue.",
        "Read the sentence after the word. Look for words that tell how the hikers felt.",
        "A long hike can make people tired, but check what the clue words actually say."
      ],
      how: [
        "Find the word ravenous in the first sentence.",
        "The next sentence says they were so hungry that they ate every crumb.",
        "So the clue word is hungry, and ravenous means extremely hungry."
      ],
      misconception: "A common mix-up is picking a feeling that goes with a hike. Use the words in the clue.",
      why: "The answer is \"extremely hungry.\" The next sentence says the hikers were so hungry that they ate every crumb. Hungry is a synonym clue. Nothing in the sentences says they were noisy, and tired is not the clue."
    },
    {
      id: "SK-V3a-S06",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-C05"
      ],
      prompt: "What does deserted mean in the sentences?",
      stem: [
        "The beach was deserted. No people walked on the sand, and no boats floated near the shore."
      ],
      choices: [
        {
          text: "with no one there",
          correct: true
        },
        {
          text: "full of loud noise"
        },
        {
          text: "covered by big waves"
        },
        {
          text: "warm and sunny"
        }
      ],
      clue: "Sometimes the clue to a word comes in the sentence after it. Read on.",
      hints: [
        "Sometimes the clue to a word comes in the sentence after it. Read on.",
        "Read the sentence the word is in and the one that follows it. Look at who is on the beach.",
        "Some choices talk about noise or waves or weather. Check what the second sentence tells about people and boats."
      ],
      how: [
        "Find the word: \"The beach was deserted.\" The sentence does not explain it.",
        "Read the next sentence: no people walked on the sand, and no boats floated near the shore.",
        "So deserted means with no one there."
      ],
      misconception: "A common mix-up is stopping at the sentence with the word. The next sentence holds the clue.",
      why: "The answer is \"with no one there.\" The next sentence says no people walked on the sand and no boats floated near the shore. The sentences say nothing about noise, waves or the weather."
    },
    {
      id: "SK-V3a-S07",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-C06"
      ],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: [
        "Tara's note: \"The lilies grew beside the front gate. Last week they stood tall and fresh. Then the heat came. By Friday they had wilted. Mom watered them in the evening.\""
      ],
      partA: {
        prompt: "Which meaning fits wilted in Tara's note?",
        choices: [
          {
            text: "became droopy and weak",
            correct: true
          },
          {
            text: "grew taller and greener"
          },
          {
            text: "turned bright blue"
          },
          {
            text: "stayed the same"
          }
        ]
      },
      partB: {
        prompt: "Which line in the note gives the best clue to the word?",
        choices: [
          {
            text: "Last week they stood tall and fresh.",
            correct: true
          },
          {
            text: "The lilies grew beside the front gate."
          },
          {
            text: "Mom watered them in the evening."
          },
          {
            text: "By Friday they had wilted."
          }
        ]
      },
      clue: "Think about how the lilies looked before this word and how they looked after it. For Part B, look for a detail about how the lilies looked.",
      hints: [
        "Think about how the lilies looked before this word and how they looked after it. For Part B, look for a detail about how the lilies looked.",
        "Think about the whole note, not only the sentence with the word. What changed for the lilies?",
        "For Part A, wilted is a change for the worse. For Part B, a true detail about where the lilies grew may not show how they looked."
      ],
      how: [
        "Part A: the lilies stood tall and fresh last week. After the heat, they had wilted.",
        "Part B: look for the detail that shows how they looked before.",
        "Tall and fresh is the opposite of droopy and weak, so wilted means became droopy and weak.",
        "The other sentences tell where they grew, when Mom watered them, or repeat the word."
      ],
      misconception: "A common mix-up is looking only at the sentence with the word. A clue can come in an earlier sentence.",
      why: "Part A: became droopy and weak. Part B: \"Last week they stood tall and fresh.\" The lilies changed from tall and fresh to wilted, so wilted means the opposite: droopy and weak. The other sentences do not show how the lilies looked."
    },
    {
      id: "SK-V3a-S08",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-C07"
      ],
      prompt: "Use the graph and the sentence together to decide what abundant means.",
      stem: [
        "Row B had an abundant crop of pumpkins."
      ],
      figure: {
        src: "assets/figures/v3a-s-pumpkin-graph.svg",
        alt: "Bar graph titled Pumpkins in Our Garden. The words at the bottom say number of pumpkins. The bars show Row A 3, Row B 14 and Row C 5. Row B has the longest bar."
      },
      choices: [
        {
          text: "a large amount; more than enough",
          correct: true
        },
        {
          text: "a tiny amount, almost none"
        },
        {
          text: "rotten and ready to throw away"
        },
        {
          text: "painted in many colors"
        }
      ],
      clue: "Read the title of the graph and the words at the bottom. Think about what the bars count.",
      hints: [
        "Read the title of the graph and the words at the bottom. Think about what the bars count.",
        "Compare the bar for Row B with the other bars. Look at how long each bar is.",
        "The word is about an amount, not about how the pumpkins look. Decide which choices are about how much."
      ],
      how: [
        "The title tells what the graph counts: pumpkins in the garden rows.",
        "Row B has the longest bar: 14 pumpkins, much more than Row A or Row C.",
        "So abundant means a large amount."
      ],
      misconception: "A common mix-up is choosing a meaning from the word pumpkins. Use the graph to see how many there are.",
      why: "The answer is \"a large amount; more than enough.\" Row B has 14 pumpkins, while Row A has 3 and Row C has 5. That is far more than the other rows. Nothing on the graph shows rot or paint."
    },
    {
      id: "SK-V3a-S09",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-C08"
      ],
      prompt: "Which meaning of perch matches the picture beside the sentence?",
      stem: [
        "The owl sat on its perch."
      ],
      figure: {
        src: "assets/figures/v3a-s-owl-perch.svg",
        alt: "A drawing of an owl standing on a thick tree branch. Labels name the owl and the branch."
      },
      choices: [
        {
          text: "a place where a bird sits to rest",
          correct: true
        },
        {
          text: "a fish that lives in lakes and rivers"
        },
        {
          text: "a long pole for pushing a boat"
        },
        {
          text: "a loud call that a bird makes"
        }
      ],
      clue: "Say more than one meaning of perch before you choose. Then look at the picture and its labels.",
      hints: [
        "Say more than one meaning of perch before you choose. Then look at the picture and its labels.",
        "Look at where the owl is in the picture. Look at what is under it.",
        "Put each meaning in place of the word and read the sentence again. Check which ones can be sat on."
      ],
      how: [
        "Perch has more than one meaning: a kind of fish, a resting place for a bird, and others.",
        "The picture shows the owl sitting on a branch.",
        "So perch here means a place where a bird sits to rest."
      ],
      misconception: "A common mix-up is choosing the meaning you know best. The picture shows which meaning fits.",
      why: "The answer is \"a place where a bird sits to rest.\" The picture shows the owl sitting on a branch, and the sentence says it sat on its perch. A fish cannot be sat on, and a pole and a call are not in the picture."
    },
    {
      id: "SK-V3a-S10",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-C09"
      ],
      prompt: "Use the table to decide what forage means in the sentence.",
      stem: [
        "The squirrel likes to forage in the fall."
      ],
      figure: {
        src: "assets/figures/v3a-s-squirrel-table.svg",
        alt: "Table titled Squirrel Search Spots. The columns are season and where. Fall, on the ground. Winter, under the snow. Spring, in tree holes."
      },
      text: "To forage means {0}.",
      slots: [
        {
          options: [
            "to sleep in a warm, cozy nest",
            "to look around for something to eat",
            "to bury a nut"
          ],
          answer: 1
        }
      ],
      clue: "Read the title of the table and the words in the rows. Think about what the table lists.",
      hints: [
        "Read the title of the table and the words in the rows. Think about what the table lists.",
        "Look at the two columns. Think about what the squirrel does in each place.",
        "Put each meaning in the sentence and check it against the table."
      ],
      how: [
        "The title is Squirrel Search Spots, so the table lists places where the squirrel goes searching.",
        "Fall, winter and spring each have a place where the squirrel looks.",
        "So forage means to look around for something to eat."
      ],
      misconception: "A common mix-up is choosing something a squirrel does that is not on the table. Use the title.",
      why: "The answer is \"to look around for something to eat.\" The title says the table lists squirrel search spots, and the sentence says it likes to forage in the fall. Sleeping in a nest and burying a nut are not on the table."
    },
    {
      id: "SK-V3a-S11",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-C10"
      ],
      prompt: "Read the sentence about the show. Which meaning of row fits?",
      stem: [
        "Our class sat in the third row and waited for the play to start."
      ],
      choices: [
        {
          text: "a line of seats, one next to another",
          correct: true
        },
        {
          text: "to paddle a small boat across a quiet pond"
        },
        {
          text: "a loud fight between two people"
        },
        {
          text: "cans stacked high in a store"
        }
      ],
      clue: "Say more than one meaning of row before you choose.",
      hints: [
        "Say more than one meaning of row before you choose.",
        "Read the sentence the word is in. Look at what the children did and where.",
        "Put each meaning in place of the word and read the sentence again. Cross out any meaning that does not make sense."
      ],
      how: [
        "Row has more than one meaning: a line of things, to move a boat, a loud fight.",
        "The sentence says the class sat in the third row and waited for a play.",
        "Only a line of seats fits where children sit to watch a show."
      ],
      misconception: "A common mix-up is choosing the meaning you know best. Check which meaning fits the sentence.",
      why: "The answer is \"a line of seats, one next to another.\" The class sat in the third row, and the third in a line of seats makes sense at a play. Moving a boat, a fight and a stack of cans do not fit."
    },
    {
      id: "SK-V3a-S12",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-C11"
      ],
      prompt: "Which sentence uses light the way the first sentence does?",
      stem: [
        "The box was light, so I carried it with one hand."
      ],
      options: [
        "The light from the sun woke us up.",
        "Dad's new coat is light enough for summer.",
        "Please turn on the light by the door.",
        "She wore a light green sweater."
      ],
      answer: [
        1
      ],
      pick: 1,
      clue: "First decide what light means in the first sentence. Then check each sentence for that same meaning.",
      hints: [
        "First decide what light means in the first sentence. Then check each sentence for that same meaning.",
        "Put the first meaning in place of light in each sentence. Does the sentence still make sense?",
        "Two of the sentences use light to mean something you can see. Compare the other two with the first sentence."
      ],
      how: [
        "In the first sentence, light means not heavy, because the box was carried with one hand.",
        "A coat that is light enough for summer is not heavy, so it is the same meaning.",
        "Light from the sun and a light by the door are about seeing, and light green is about color."
      ],
      misconception: "A common mix-up is choosing a sentence that has the same word but a different meaning.",
      why: "The answer is \"Dad's new coat is light enough for summer.\" In both sentences light means not heavy. The sun and the door light give off light, and light green is a pale color."
    },
    {
      id: "SK-V3a-S13",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-C12"
      ],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: [
        "Mr. Bell's class had to clean the gym after the big game on Friday. Everyone pitched in. Some swept the floor, some wiped the walls, and some carried chairs. The gym had a shiny wooden floor that the janitor waxed the week before. The janitor thanked all of them and gave out cold juice at lunch."
      ],
      partA: {
        prompt: "What does the phrase pitched in mean?",
        choices: [
          {
            text: "helped with the work",
            correct: true
          },
          {
            text: "threw a ball"
          },
          {
            text: "left the room"
          },
          {
            text: "waited for a turn"
          }
        ]
      },
      partB: {
        prompt: "Which sentence BEST shows what pitched in means?",
        choices: [
          {
            text: "Some swept the floor, some wiped the walls, and some carried chairs.",
            correct: true
          },
          {
            text: "The gym had a shiny wooden floor that the janitor waxed the week before."
          },
          {
            text: "The janitor thanked all of them and gave out cold juice at lunch."
          },
          {
            text: "Mr. Bell's class had to clean the gym after the big game on Friday."
          }
        ]
      },
      clue: "A phrase can have a meaning that is different from its separate words. Think about what the class did.",
      hints: [
        "A phrase can have a meaning that is different from its separate words. Think about what the class did.",
        "Think about the whole passage, not only the sentence with the phrase. What did each person do?",
        "For Part A, a phrase about a job is not always about a ball or leaving. For Part B, a sentence about the floor or the thanks may not show what people did."
      ],
      how: [
        "Part A: everyone pitched in, and then the passage names jobs.",
        "Part B: look for the sentence that shows what the students did.",
        "Some swept, some wiped and some carried, so everyone helped with the work.",
        "The other sentences tell about the floor, the thanks and the job."
      ],
      misconception: "A common mix-up is reading each word of the phrase by itself. The whole phrase has its own meaning.",
      why: "Part A: helped with the work. Part B: \"Some swept the floor, some wiped the walls, and some carried chairs.\" Each student did a job, so pitched in means helped with the work. The other sentences do not show what the students did."
    },
    {
      id: "SK-V3a-S14",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-P6"
      ],
      prompt: "Which meaning of palm matches the picture beside the sentence?",
      stem: [
        "A coconut fell on the sand beside the palm."
      ],
      figure: {
        src: "assets/figures/v3a-s-palm.svg",
        alt: "A drawing of a tree with a curved trunk and long leaves at the top, standing on a sandy beach. Coconuts hang under the leaves. A coconut lies on the sand. Labels name the coconuts and the sand."
      },
      choices: [
        {
          text: "a kind of tree with big leaves on top",
          correct: true
        },
        {
          text: "the flat inside part of a hand"
        },
        {
          text: "a computer that fits in a hand"
        },
        {
          text: "a large square sail on an old sailing ship"
        }
      ],
      clue: "Say more than one meaning of palm before you choose. Then look at the picture and its labels.",
      hints: [
        "Say more than one meaning of palm before you choose. Then look at the picture and its labels.",
        "Look at what stands on the sand in the picture. Look at what is beside the coconut.",
        "Put each meaning in place of the word and read the sentence again. Check which ones could stand beside a coconut."
      ],
      how: [
        "Palm has more than one meaning: part of the hand, a kind of tree, a small computer.",
        "The picture shows a tree with long leaves and coconuts on a sandy beach.",
        "So palm here means a kind of tree with big leaves on top."
      ],
      misconception: "A common mix-up is choosing the meaning you know best. The picture shows which meaning fits.",
      why: "The answer is \"a kind of tree with big leaves on top.\" The picture shows a tree with coconuts standing on the sand. A hand, a small computer and a sail are not in the picture."
    },
    {
      id: "SK-V3a-S15",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.a"
      ],
      passages: [],
      like: [
        "SK-V3a-P7"
      ],
      prompt: "Read the sentences. Choose the meaning of the phrase under the weather.",
      stem: [
        "Sam stayed home because he was feeling under the weather. He had a cough and a fever."
      ],
      text: "In the sentences, under the weather means {0}.",
      slots: [
        {
          options: [
            "a little sick",
            "standing in the rain",
            "very happy"
          ],
          answer: 0
        }
      ],
      clue: "A phrase can have a meaning that is different from its separate words. Read the sentences around it.",
      hints: [
        "A phrase can have a meaning that is different from its separate words. Read the sentences around it.",
        "Read the sentence after the phrase. Look at what is wrong with Sam.",
        "Think about why a person would stay home. Check which choices could be a reason."
      ],
      how: [
        "The phrase is in the first sentence, and the next sentence says he had a cough and a fever.",
        "A cough and a fever are signs that a person is sick.",
        "So under the weather means a little sick."
      ],
      misconception: "A common mix-up is reading each word by itself. The whole phrase has its own meaning.",
      why: "The answer is \"a little sick.\" Sam stayed home and had a cough and a fever, so he was not feeling well. The phrase does not mean standing in the rain, and a person who is very happy would not stay home for those reasons."
    }
  ],
  addons: {
    "SK-V3a-P1": {
      hints: [
        "Look for signal words near the new word. They can point to the meaning.",
        "Read the sentence the word is in and look at the words that come after the signal.",
        "Some choices tell how the treats were made or where they were put. Check which one the examples in the sentence agree with."
      ],
      how: [
        "Find assorted: the sentence says the class baked assorted treats, such as banana bread, oatmeal cookies and lemon bars.",
        "Such as is a signal word for examples.",
        "The examples are different kinds of treats, so assorted means of many different kinds."
      ],
      misconception: "A common mix-up is picking a detail about how the treats look or taste. The examples show how many kinds there are."
    },
    "SK-V3a-P2": {
      hints: [
        "Think about what the first part of the sale was like. A clue can be in a sentence near the word.",
        "Think about the whole paragraph, not only the sentence with the word. Which sentence tells you the number of buyers?",
        "For Part B, a sentence can tell about Leah or the tables and not about the buyers."
      ],
      how: [
        "Find scarce in paragraph 3: at first, buyers were scarce.",
        "The next sentence says only two people stopped by in the whole first hour.",
        "Two people in a whole hour is very few, so scarce means very few."
      ],
      misconception: "A common mix-up is picking a sentence that shows how Leah felt. The clue is about how many buyers came."
    },
    "SK-V3a-P3": {
      hints: [
        "Find another word or phrase in the sentence that means almost the same thing as the new word.",
        "Read the whole sentence. Look at what the students did to the cookies.",
        "Check each choice against what the students did, and cross out any that do not fit."
      ],
      how: [
        "Find devoured in paragraph 4.",
        "The same sentence says they were gobbling up every last crumb in ten minutes.",
        "Gobbling up is a synonym clue, so devoured means ate quickly and hungrily."
      ],
      misconception: "A common mix-up is picking a meaning from a different part of the story. The clue is in the same sentence."
    },
    "SK-V3a-P4": {
      hints: [
        "A definition clue tells you the exact meaning of a word. Think about the signal words that come before it.",
        "Read each sentence and look for small word groups that come before a meaning.",
        "Some sentences give examples or other clues instead. Check what each sentence does."
      ],
      how: [
        "Which is leads into the meaning of budget.",
        "The sentence that tells what a budget is has the definition clue.",
        "The other sentences give an example, a clue for scarce, and a clue for devoured."
      ],
      misconception: "A common mix-up is choosing any sentence with a clue. A definition clue tells exactly what the word means."
    },
    "SK-V3a-P5": {
      hints: [
        "For each sentence, find the words that help you know the meaning of the word in front of it.",
        "Ask whether the clue tells the meaning, gives examples, means the same thing or means the opposite.",
        "Start with the sentence that has the word but in it and decide what kind of clue it gives."
      ],
      how: [
        "Arid: which are very dry places tells the meaning, so it is a definition clue.",
        "Legumes: such as peas, beans and peanuts gives examples. Drowsy: sleepy means almost the same thing.",
        "Tidy: but a big mess shows the opposite."
      ],
      misconception: "A common mix-up is matching by the topic of the sentence. Match by what the clue does."
    },
    "SK-V3a-P6": {
      hints: [
        "Say more than one meaning of trunk before you choose. Then look at the picture and its labels.",
        "Look at what the ladder is leaning on in the picture.",
        "Put each meaning in place of the word and read the sentence again. Check which ones could hold a ladder."
      ],
      how: [
        "Trunk has more than one meaning: part of a tree, part of a car, an elephant's nose, swim shorts.",
        "The picture shows a ladder leaning on the thick stem of a tree.",
        "So trunk here means the thick main stem of a tree."
      ],
      misconception: "A common mix-up is choosing the meaning you know best. The picture shows which meaning fits."
    },
    "SK-V3a-P7": {
      hints: [
        "A phrase can have a meaning that is different from its separate words. Read the sentence around it.",
        "Read the whole sentence. Look at where the treats went and why a bake sale would need them there.",
        "Think about what the class wanted the buyers to do. Check which choices help with that."
      ],
      how: [
        "Set everything out is in a sentence about the treats at the bake sale.",
        "The class put the treats on two long tables in the front hall.",
        "So set everything out means put it where people could see it."
      ],
      misconception: "A common mix-up is reading each word by itself. The whole phrase has its own meaning."
    }
  },
  /* B5-b5b:core:end */
  test: [
    { id: "SK-V3a-T8", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the sentence and look at the graph. What does attendance mean?",
      stem: ["Attendance at the swamp's nature center was highest in spring."],
      figure: { src: "assets/figures/v3a-visitors-graph.svg",
        alt: "Bar graph titled People Who Came to the Nature Center. The words at the bottom say number of people. The bars show winter 20, spring 50, summer 40 and fall 30. Spring has the longest bar." },
      choices: [
        { text: "the number of people who come to a place", correct: true },
        { text: "the kind of weather a place has each season" },
        { text: "the price of a ticket to get into a place" },
        { text: "the number of animals that live in a place" }
      ],
      clue: "Read the title of the graph and the words at the bottom. What does the graph count?",
      why: "The answer is \"the number of people who come to a place.\" The title is People Who Came to the Nature Center, and the bottom says number of people. Spring has the longest bar, 50 people, and the sentence says attendance was highest in spring. So attendance is how many people come. The graph does not show weather, ticket prices or animals." },
    { id: "SK-V3a-T2", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does dwell mean in paragraph 3?",
        choices: [
          { text: "to live in a place", correct: true },
          { text: "to swim very fast" },
          { text: "to hide from danger" },
          { text: "to visit for a short time" }
        ] },
      partB: { prompt: "Which TWO sentences from the article BEST help you know what dwell means?", pick: 2,
        choices: [
          { text: "\"They find food, build nests and raise their young there.\"", correct: true },
          { text: "\"Alligators, turtles, frogs and herons all make their homes in the Okefenokee.\"", correct: true },
          { text: "\"Visitors can paddle canoes along the swamp's narrow waterways.\"" },
          { text: "\"The water in the swamp looks dark brown, like a cup of tea.\"" },
          { text: "\"Leaves and other plant parts fall into the water and slowly break down.\"" }
        ] },
      clue: "Read the sentences right after the word dwell. What do the animals do in the swamp, day after day?",
      why: "Part A: to live in a place. Part B: \"They find food, build nests and raise their young there.\" and \"Alligators, turtles, frogs and herons all make their homes in the Okefenokee.\" Animals that eat, nest, raise babies and make homes in a place live there." },
    { id: "SK-V3a-T7", type: "dropdown", points: 1, dok: 2, passages: ["p2"],
      prompt: "Paragraph 3 names herons, but the words do not tell what a heron is. Use Figure 1 to choose the meaning.",
      text: "In paragraph 3, a heron is {0}.",
      slots: [
        { options: ["a long fish that swims in dark water", "a tall bird that hunts in shallow water", "a plant that floats on top of the water"], answer: 1 }
      ],
      clue: "Look at the picture and read its labels and caption. What kind of living thing has those body parts?",
      why: "The answer is \"a tall bird that hunts in shallow water.\" Figure 1 shows a sharp beak, a long neck and two long legs standing in shallow water. Fish and plants do not have beaks or legs, so a heron is a tall bird. The caption tells what the bird does: it hunts for fish in the shallow water." },
    { id: "SK-V3a-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Pen has more than one meaning. What does pen mean in this sentence?",
      stem: ["The farmer opened the pen and let the pigs run out into the muddy field."],
      choices: [
        { text: "a small fenced area for animals", correct: true },
        { text: "a tool for writing with ink" },
        { text: "a big barn for storing hay" },
        { text: "a gate that leads into a yard" }
      ],
      clue: "What came out of the pen when the farmer opened it? Think of a meaning of pen that could hold them.",
      why: "The answer is \"a small fenced area for animals.\" The farmer opened the pen and the pigs ran out, so the pen held the pigs. A writing tool cannot hold pigs, and a barn or a gate is not a meaning of pen." },
    { id: "SK-V3a-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What does firm mean in paragraph 4?",
      choices: [
        { text: "solid and hard to push down", correct: true },
        { text: "wet and full of mud" },
        { text: "cold and dark" },
        { text: "flat and very wide" }
      ],
      clue: "Look for an antonym clue. The next sentence tells what the mats are like instead.",
      why: "The answer is \"solid and hard to push down.\" The mats are not firm. They are soft and can shake. Firm means the opposite of soft and shaky, so it means solid and hard to push down." },
    { id: "SK-V3a-T6", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What does the phrase keep an eye out for mean in paragraph 4?",
      choices: [
        { text: "watch carefully for", correct: true },
        { text: "stay far away from" },
        { text: "take a photo of" },
        { text: "listen for the sound of" }
      ],
      clue: "Read the sentence after the phrase. Why would guides warn visitors about animals that are hard to see? What would visitors need to do?",
      why: "The answer is \"watch carefully for.\" The next sentence says alligators rest along the edges of the water and can be hard to see. Something hard to see is something you must look for carefully, and the phrase uses the word eye. Staying away from alligators is smart, but it is not what the phrase means." }
  ],
  /* PP-004 form B of the skill check, written by formB-lang (see docs/audits/work/pp004-formB-formB-lang.md).
     Same code, 7 points and DOK 2 throughout, like form A, on a new passage (p3) and a new graph.
     NEEDS INDEPENDENT REVIEW before it is relied on. */
  testB: [
    { id: "SK-V3a-TB1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the sentences and look at the graph. What does dwindled mean?",
      stem: ["Every November, Grandpa's family picks pecans on his farm in south Georgia.", "After week 3, the pecans the family picked dwindled."],
      figure: { src: "assets/figures/v3a-b-pecan-graph.svg",
        alt: "Bar graph titled Pecans We Picked in November. The words at the bottom say buckets of pecans. The bars show week 1, 3 buckets; week 2, 6 buckets; week 3, 8 buckets; and week 4, 4 buckets. Week 3 has the longest bar." },
      choices: [
        { text: "became fewer", correct: true },
        { text: "grew bigger" },
        { text: "stayed the same" },
        { text: "turned brown" }
      ],
      clue: "Read the title of the graph and the words at the bottom. Then compare the bar for week 3 with the bar for week 4.",
      why: "The answer is \"became fewer.\" The graph counts buckets of pecans picked each week. Week 3 has eight buckets, but week 4 has only four buckets. The family picked fewer buckets of pecans after week 3, so dwindled means became fewer. The bars do not get bigger or stay the same after week 3, and the graph does not show color."
    },
    { id: "SK-V3a-TB2", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Lighter has more than one meaning. What does lighter mean in paragraph 3?",
      choices: [
        { text: "weighing less", correct: true },
        { text: "giving off more light" },
        { text: "paler in color" },
        { text: "a small tool that makes a flame" }
      ],
      clue: "Think of the different meanings of lighter. Then read the sentence right after it. Which meaning does that sentence point to?",
      why: "The answer is \"weighing less.\" The next sentence says the same amount of hot air weighs less, so it rises. The paragraph compares how much hot air and cool air weigh, not how bright they are or what color they are. A tool that makes a flame does not fit the sentence \"Hot air is lighter than cool air.\"" },
    { id: "SK-V3a-TB3", type: "ebsr", points: 2, dok: 2, passages: ["p3"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does ascend mean in paragraph 4?",
        choices: [
          { text: "to go up higher", correct: true },
          { text: "to come down slowly" },
          { text: "to float from side to side" },
          { text: "to fill up with air" }
        ] },
      partB: { prompt: "Which TWO sentences from the article BEST help you know what ascend means?", pick: 2,
        choices: [
          { text: "\"It floats higher and higher.\"", correct: true },
          { text: "\"Soon the houses below look as small as toy blocks.\"", correct: true },
          { text: "\"The big cloth bag on top is called the envelope.\"" },
          { text: "\"The balloon drifts wherever the wind pushes it.\"" },
          { text: "\"Some of the hot air escapes, and the balloon sinks slowly.\"" }
        ] },
      clue: "Read the two sentences right after the word ascend. Where is the balloon going? How do things on the ground look from there?",
      why: "Part A: to go up higher. Part B: \"It floats higher and higher.\" and \"Soon the houses below look as small as toy blocks.\" The balloon keeps rising, and houses look tiny when you are high above them. Drifting with the wind is moving sideways, and sinking is coming down, so those sentences do not show what ascend means." },
    { id: "SK-V3a-TB4", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "What does gusty mean in paragraph 5?",
      choices: [
        { text: "blowing hard in sudden bursts", correct: true },
        { text: "quiet and still, with no wind" },
        { text: "warm and bright with sunshine" },
        { text: "cool and damp, like fog" }
      ],
      clue: "Look for an antonym clue. The word instead tells you the wind later in the day is different from the morning air. How does the paragraph describe the morning air?",
      why: "The answer is \"blowing hard in sudden bursts.\" In the morning the air is usually calm, but later the wind is gusty instead. Instead tells you gusty is the opposite of calm. The same sentence says this wind can push a balloon the wrong way, so it blows hard. Quiet and still, with no wind, describes calm air, which is the opposite of gusty. The paragraph says nothing about sunshine or fog." },
    { id: "SK-V3a-TB5", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Read paragraph 6 and look at Figure 1. What is the vent?",
      choices: [
        { text: "an opening at the very top of the envelope", correct: true },
        { text: "a door on the side of the basket" },
        { text: "a pipe that the burner's flame comes out of" },
        { text: "a flap at the bottom of the envelope" }
      ],
      clue: "The paragraph tells what the vent does. The picture shows where it is. Find the label vent in Figure 1.",
      why: "The answer is \"an opening at the very top of the envelope.\" Paragraph 6 says that opening the vent lets some hot air escape, but it does not say where the vent is. Figure 1 shows the label vent pointing to a round opening at the very top of the balloon. The bottom of the envelope, the burner and the basket are all lower down, and the burner and the basket have their own labels." },
    { id: "SK-V3a-TB6", type: "dropdown", points: 1, dok: 2, passages: ["p3"],
      prompt: "What does the phrase touch down mean in paragraph 6? Choose the best meaning.",
      text: "In paragraph 6, touch down means {0}.",
      slots: [
        { options: ["tap something with your hand", "land on the ground", "fly low over the trees"], answer: 1 }
      ],
      clue: "Read the sentence after the phrase. What happens to the basket a few minutes later?",
      why: "The answer is \"land on the ground.\" The pilot looks for an open field, and a few minutes later the basket bumps gently onto the grass. That is a landing. The phrase is not about touching something with a hand, and the balloon does more than fly low: it comes all the way down." }
  ]
});

PP.addLesson({
  code: "3.L.V.3.b",
  title: "Homophones, homographs, synonyms and antonyms",
  teach: {
    big: "Some words sound the same, some are spelled the same, and some mean the same or the opposite. Knowing how words are related helps me understand them.",
    points: [
      "Homophones sound the same but have different spellings and meanings, like pear (a fruit) and pair (two of something).",
      "Homographs are spelled the same but have different meanings. Some sound different too, like tear (a drop from your eye) and tear (to rip).",
      "Synonyms are words that mean the same or almost the same, like big and large.",
      "Antonyms are words that mean the opposite, like empty and full.",
      "If you don't know a word, look nearby for a synonym or an antonym. It can tell you what the word means."
    ],
    words: [
      { term: "homophone", means: "a word that sounds like another word but is spelled differently and means something different" },
      { term: "homograph", means: "a word that is spelled like another word but means something different" },
      { term: "synonym", means: "a word that means the same or almost the same as another word" },
      { term: "antonym", means: "a word that means the opposite of another word" }
    ],
    examples: [
      { label: "Homophones", lines: ["The knight rode his horse all night."], note: "Knight (a soldier on a horse long ago) and night (the dark part of the day) sound the same but are spelled differently." },
      { label: "Homographs", lines: ["Ty tied a bow on the gift. After the play, he took a bow."], note: "The first bow rhymes with go and means a knot of ribbon. The second bow rhymes with cow and means to bend at the waist. Same spelling, different meanings." }
    ],
    tip: "On the test, you may be asked which word means the same as or the opposite of a word in a passage, or which spelling of a sound-alike word fits a sentence."
  },
  learn: [
    {
      show: ["Lila ate a ripe ____ for her snack.", "Which word fits: pair or pear?"],
      ask: "Which homophone belongs in the sentence?",
      steps: [
        "Both words sound the same, so you have to think about meaning.",
        "Pair means two things that go together, like a pair of socks. Pear is a fruit.",
        "The sentence says Lila ate it for a snack and it was ripe. You eat fruit, not socks."
      ],
      answer: "Pear belongs in the sentence: \"Lila ate a ripe pear for her snack.\""
    },
    {
      show: ["Dad will record the game so we can watch it later.", "Mia set a new school record in the long jump."],
      ask: "Record is a homograph. How is it different in the two sentences?",
      steps: [
        "Notice that the spelling is the same in both sentences.",
        "Read the words around the first one: \"Dad will record.\" It is an action. It means to save sounds or pictures to watch later.",
        "Read the words around the second one: \"set a new school record.\" It is a thing. It means the best that anyone has done.",
        "Say both out loud. The first is re-CORD and the second is REC-ord, so they even sound different."
      ],
      answer: "In the first sentence, record means to save something to watch later. In the second, it means the best ever done."
    },
    {
      show: ["The first puzzle was simple, but the second puzzle was difficult."],
      ask: "Which word in the sentence is an antonym of simple?",
      steps: [
        "An antonym means the opposite.",
        "The word \"but\" shows that the two puzzles are not alike.",
        "Find the word that tells about the second puzzle. Check it: simple means easy, and difficult means hard."
      ],
      answer: "Difficult is the antonym of simple."
    }
  ],
  parent: "Play a quick word game in the car or at dinner: say a word and have your child give a synonym and an antonym (big: large, small). For homophones, say a word like \"sea\" and ask your child to spell both ways and use each in a sentence.",
  passages: [
    { id: "p1", title: "Kofi's Big Catch", genre: "Literary text",
      paragraphs: [
        ["Early on Saturday, Kofi and his grandpa carried their fishing poles down to the lake.", "The water was calm and still, without a single ripple."],
        ["Grandpa showed Kofi how to tie a hook onto the line.", "\"Make the knot tight,\" he said.", "\"A loose knot will let the fish get away.\""],
        ["They waited and waited, but nothing bit.", "At last, Kofi wound the line back onto the reel to try a new spot."],
        ["Suddenly, the line jerked.", "Kofi pulled hard, and a fish flipped out of the water.", "Its shiny scales flashed in the sun."],
        ["\"What a huge fish!\" Kofi shouted.", "\"It is enormous!\""],
        ["Grandpa snapped a picture.", "Then Kofi gently let the fish slip back into the lake."]
      ] },
    { id: "p2", title: "Nadia's Volcano", genre: "Literary text",
      paragraphs: [
        ["On the morning of the science fair, Nadia felt nervous.", "Her hands were shaky, and her stomach felt full of butterflies."],
        ["Her project was a model volcano made of clay.", "When vinegar is poured onto baking soda inside, foam bubbles up and spills over the top."],
        ["Nadia set the volcano on the table and took a deep breath.", "Then she poured in the vinegar.", "Nothing happened!"],
        ["Her friend Grace peeked inside.", "\"I think you forgot the baking soda,\" Grace whispered.", "Nadia quickly added two big spoonfuls.", "This time, foam rushed up and spilled down the sides."],
        ["The crowd clapped and cheered.", "By the end of the day, Nadia was not nervous anymore, and she felt calm and proud."]
      ] },
    /* B5-b5b:passages:start */
    {
      id: "p3",
      title: "Tessa Writes Home",
      genre: "Student draft (letter)",
      paragraphs: [
        [
          "Dear Mom,",
          "Camp is great, and I have made two new friends."
        ],
        [
          "Our cabin is near the lake, and we sail a small boat every day.",
          "The camp store had a sail on hats, so I bought a blue one.",
          "After dinner, we toast apples and tell stories."
        ],
        [
          "I hope you can hear my news from here.",
          "Love, Tessa"
        ]
      ]
    },
    {
      id: "p4",
      title: "A Walk to the Pond",
      genre: "Literary text",
      paragraphs: [
        [
          "On Saturday, Dad and I took a walk to the pond behind our school.",
          "The wind blew the leaves across the grass."
        ],
        [
          "The path would wind around the pond, so the walk took longer than we planned.",
          "It went left, then right, then left again, and it curved around the old willow tree."
        ],
        [
          "We stopped to look at a turtle on a log.",
          "It was swift to dive when it heard us."
        ],
        [
          "Soon the sun was low, and the sky turned orange.",
          "We walked home slowly, tired and happy."
        ]
      ]
    },
    {
      id: "p5",
      title: "Market Day",
      genre: "Literary text",
      paragraphs: [
        [
          "Every Saturday, Mrs. Cole sells fruit at the town market.",
          "Her stall is small, but the fruit is always fresh."
        ],
        [
          "One day, a boy came with only a few coins.",
          "Mrs. Cole was generous, not selfish, so she gave him extra plums."
        ],
        [
          "The next week, the boy came back and helped her carry boxes.",
          "Mrs. Cole was delighted.",
          "She was so glad that she thanked him with a big smile."
        ],
        [
          "At noon, the market was noisy, but by closing time it was quiet.",
          "Mrs. Cole counted her coins and smiled."
        ]
      ]
    }
    /* B5-b5b:passages:end */
  ],
  practice: [
    { id: "SK-V3b-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the homophone that correctly completes the sentence.",
      text: "We need {0} more chairs so everyone can sit down.",
      slots: [
        { options: ["to", "too", "two"], answer: 2 }
      ],
      clue: "All three words sound the same. Read the sentence. Is the missing word telling where, telling \"also,\" or telling how many chairs? Then match that to a spelling.",
      why: "The answer is two. Two is the number 2, and the sentence tells how many more chairs are needed. To shows direction (go to school), and too means also or more than enough." },
    { id: "SK-V3b-P2", type: "ebsr", points: 2, dok: 2, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does enormous mean in paragraph 5?",
        choices: [
          { text: "very big", correct: true },
          { text: "very fast" },
          { text: "very shiny" },
          { text: "very wet" }
        ] },
      partB: { prompt: "Which sentence from the story BEST helps you know what enormous means?",
        choices: [
          { text: "\"'What a huge fish!' Kofi shouted.\"", correct: true },
          { text: "\"Its shiny scales flashed in the sun.\"" },
          { text: "\"Suddenly, the line jerked.\"" },
          { text: "\"Grandpa snapped a picture.\"" }
        ] },
      clue: "Look at the words near enormous. Is there a word that means almost the same thing?",
      why: "Part A: very big. Part B: \"What a huge fish!\" Kofi shouted. Huge is a synonym of enormous. Both words mean very big." },
    { id: "SK-V3b-P3", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Scales is a homograph. What does scales mean in paragraph 4?",
      choices: [
        { text: "small, thin plates that cover a fish", correct: true },
        { text: "tools used to find how heavy things are" },
        { text: "climbs up something steep, like a wall" },
        { text: "sets of music notes played up and down" }
      ],
      clue: "What has the scales in this sentence? Think about what would flash in the sun on that thing.",
      why: "The answer is \"small, thin plates that cover a fish.\" The sentence is about the fish that just flipped out of the water, and its shiny scales flash in the sun. That is the covering on a fish's body. All four meanings are spelled scales, so it is a homograph." },
    { id: "SK-V3b-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read paragraph 3. Wound is a homograph. What does wound mean in this story?",
      choices: [
        { text: "wrapped around and around", correct: true },
        { text: "a cut or hurt on the body" },
        { text: "pulled hard and very fast" },
        { text: "tied in a tight knot" }
      ],
      clue: "Read the rest of the sentence. Where did Kofi put the line, and what does a reel do?",
      why: "The answer is \"wrapped around and around.\" Kofi wound the line back onto the reel. A reel holds fishing line by turning, so the line is wrapped around and around it. Here wound rhymes with sound. The word that means a cut on the body is spelled the same but sounds like \"woond.\"" },
    { id: "SK-V3b-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Are the two words in each pair synonyms or antonyms? Match each pair.",
      cols: ["Synonyms", "Antonyms"],
      rows: [
        { text: "calm / still", answer: 0 },
        { text: "tight / loose", answer: 1 },
        { text: "huge / enormous", answer: 0 },
        { text: "early / late", answer: 1 }
      ],
      clue: "For each pair, ask: Do these words mean the same thing, or the opposite?",
      why: "Calm and still both mean quiet and not moving, so they are synonyms. Huge and enormous both mean very big, so they are synonyms. Tight and loose are opposites, and so are early and late, so they are antonyms." },
    { id: "SK-V3b-P6", type: "ms", points: 2, dok: 1, passages: [],
      prompt: "Which TWO pairs of words are homophones?",
      pick: 2,
      choices: [
        { text: "knows / nose", correct: true },
        { text: "sea / see", correct: true },
        { text: "shell / shall" },
        { text: "cold / colt" },
        { text: "fast / quick" }
      ],
      clue: "Homophones sound exactly the same when you say them. Say each pair out loud slowly.",
      why: "The answers are knows / nose and sea / see. Each pair sounds exactly the same but has a different spelling and meaning. Shell and shall, and cold and colt, sound close but not the same. Fast and quick are synonyms, not homophones." }
  ],
  /* B5-b5b:core:start */
  /* ---------- Expansion 2026-10-22, batch B5 (author b5b) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Author log: docs/expansion-2026-10-22/batches/B5-b5b-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          {
            id: "SK-V3b-C01",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.3.b"
            ],
            passages: [],
            prompt: "Choose the homophone that fits each blank.",
            text: "Mina filled the {0} with water and put on a {1} yellow shirt.",
            slots: [
              {
                options: [
                  "pail",
                  "pale",
                  "pall"
                ],
                answer: 0
              },
              {
                options: [
                  "pale",
                  "pail",
                  "pole"
                ],
                answer: 0
              }
            ],
            clue: "Homophones sound alike but are spelled differently. Think about what each blank needs to mean.",
            hints: [
              "Homophones sound alike but are spelled differently. Think about what each blank needs to mean.",
              "Read the words around each blank. What does each blank need to mean?",
              "Start with the first blank. Say each spelling and think about what it means."
            ],
            how: [
              "Blank one: Mina filled it with water, so it is a container. A pail is a bucket.",
              "Blank two: it tells about the color of the shirt. Pale means light in color.",
              "Pail and pale sound the same, so the meaning decides the spelling."
            ],
            misconception: "A common mix-up is picking the spelling that looks familiar. Use the meaning to choose.",
            why: "The answers are \"pail\" and \"pale.\" A pail is a bucket that holds water, and pale means light in color, as in a pale yellow shirt. Pall and pole are not the words these sentences need."
          },
          {
            id: "SK-V3b-C02",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.b"
            ],
            passages: [
              "p3"
            ],
            prompt: "One sentence in Tessa's letter uses the wrong homophone. Choose that sentence.",
            targets: [
              "p3:2:1",
              "p3:2:2",
              "p3:2:3",
              "p3:3:1"
            ],
            answer: [
              "p3:2:2"
            ],
            pick: 1,
            clue: "Say each sound-alike word in the letter and think about what it means in that sentence.",
            hints: [
              "Say each sound-alike word in the letter and think about what it means in that sentence.",
              "Read each sentence and look for a word that has a sound-alike twin with a different spelling.",
              "A word can be spelled right for one meaning and wrong for another. Check the meaning in each sentence, not only the spelling."
            ],
            how: [
              "Check each sound-alike word: sail, sail, hear.",
              "In the first sentence, sail is an action: to move a boat. It fits.",
              "In the second sentence, a sail on hats should be a sale, because a store sells things for less. Sail is the wrong homophone."
            ],
            misconception: "A common mix-up is choosing the sentence with the rarest word. Check the meaning of each sound-alike word.",
            why: "The answer is \"The camp store had a sail on hats, so I bought a blue one.\" A store has a sale, not a sail. Sail is correct in the first sentence because it names an action with a boat. Hear is spelled right for listening."
          },
          {
            id: "SK-V3b-C03",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.b"
            ],
            passages: [],
            prompt: "Present has more than one meaning. What does present mean in the sentence?",
            stem: [
              "Mr. Lane will present the prize to the winner."
            ],
            choices: [
              {
                text: "to hand something over",
                correct: true
              },
              {
                text: "a gift in a box"
              },
              {
                text: "the time that is now"
              },
              {
                text: "being here and not away"
              }
            ],
            clue: "Say more than one meaning of present before you choose.",
            hints: [
              "Say more than one meaning of present before you choose.",
              "Read the sentence and ask what job the word does. Is it a thing, an action or a describing word?",
              "Put each meaning in place of the word. Check which ones still make a sentence."
            ],
            how: [
              "Present has more than one meaning: a gift, the time now, here, and to give.",
              "In this sentence, Mr. Lane does something with the prize, so it is an action.",
              "To present the prize means to hand it over."
            ],
            misconception: "A common mix-up is choosing the meaning you know best. Check which meaning fits the sentence.",
            why: "The answer is \"to hand something over.\" Mr. Lane will do something with the prize, so present is an action here. A gift, the time now and being here are other meanings of the same spelling."
          },
          {
            id: "SK-V3b-C04",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.3.b"
            ],
            passages: [
              "p4"
            ],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "What does wind mean in paragraph 2? It rhymes with kind.",
              choices: [
                {
                  text: "to bend and turn in curves",
                  correct: true
                },
                {
                  text: "moving air outdoors"
                },
                {
                  text: "to tighten a toy with a key"
                },
                {
                  text: "to come to an end"
                }
              ]
            },
            partB: {
              prompt: "Which sentence from the story BEST helps you know the answer to Part A?",
              choices: [
                {
                  text: "It went left, then right, then left again, and it curved around the old willow tree.",
                  correct: true
                },
                {
                  text: "The wind blew the leaves across the grass."
                },
                {
                  text: "We stopped to look at a turtle on a log."
                },
                {
                  text: "Soon the sun was low, and the sky turned orange."
                }
              ]
            },
            clue: "Say more than one meaning of wind before you choose. For Part B, look for the sentence that shows what the path did.",
            hints: [
              "Say more than one meaning of wind before you choose. For Part B, look for the sentence that shows what the path did.",
              "Think about the whole story, not only paragraph 2. Which sentences tell about the path?",
              "For Part A, the word is said with a long i sound here. For Part B, a sentence can have the same spelling and still not show this meaning."
            ],
            how: [
              "Part A: the word wind rhymes with kind here, so it is an action, not air.",
              "Part B: look for the sentence that tells how the path went.",
              "It went left, then right, then left again, and curved around the tree, so the path bent and turned.",
              "The sentence about leaves has the same spelling but a different meaning and sound."
            ],
            misconception: "A common mix-up is picking the sentence with the same spelling. That sentence uses the other meaning.",
            why: "Part A: to bend and turn in curves. Part B: \"It went left, then right, then left again, and it curved around the old willow tree.\" That shows a path that bends. The sentence about the wind blowing leaves uses the same spelling, but it means moving air."
          },
          {
            ref: "SK-V3b-P4"
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-V3b-C05",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.b"
            ],
            passages: [
              "p4"
            ],
            prompt: "Which word means about the same as swift in paragraph 3?",
            choices: [
              {
                text: "fast",
                correct: true
              },
              {
                text: "slow"
              },
              {
                text: "sleepy"
              },
              {
                text: "loud"
              }
            ],
            clue: "A synonym means about the same. Think about what swift tells about the turtle.",
            hints: [
              "A synonym means about the same. Think about what swift tells about the turtle.",
              "Read the sentence the word is in. Ask what the turtle did and how it did it.",
              "An antonym is a word that means the opposite. Make sure your choice is not an antonym."
            ],
            how: [
              "Find swift: \"It was swift to dive when it heard us.\"",
              "A turtle that dives right away is quick.",
              "So fast means about the same, and slow is the opposite."
            ],
            misconception: "A common mix-up is choosing a word that means the opposite. A synonym means about the same.",
            why: "The answer is \"fast.\" The turtle dived quickly when it heard them, so swift means fast. Slow is an antonym, and sleepy and loud do not describe how it dove."
          },
          {
            id: "SK-V3b-C06",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.3.b"
            ],
            passages: [],
            prompt: "Which TWO words are synonyms of frightened?",
            pick: 2,
            choices: [
              {
                text: "scared",
                correct: true
              },
              {
                text: "afraid",
                correct: true
              },
              {
                text: "brave"
              },
              {
                text: "calm"
              },
              {
                text: "tired"
              }
            ],
            clue: "Synonyms are words that mean about the same. Say each word in the sentence \"The boy was ___ of the dark.\"",
            hints: [
              "Synonyms are words that mean about the same. Say each word in the sentence \"The boy was ___ of the dark.\"",
              "Try each choice in the same sentence. Ask which ones keep the meaning of frightened.",
              "Some choices mean the opposite and some name a different feeling. Check each choice against the meaning, not the sound."
            ],
            how: [
              "Frightened means feeling fear.",
              "Scared and afraid both mean feeling fear, so they are synonyms.",
              "Brave and calm are the opposite of frightened, and tired is a different feeling."
            ],
            misconception: "A common mix-up is choosing a word about feelings. A synonym has to mean about the same as frightened.",
            why: "The answers are \"scared\" and \"afraid.\" Both mean feeling fear, like frightened. Brave and calm mean the opposite, and tired is a different feeling."
          },
          {
            id: "SK-V3b-C07",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.3.b"
            ],
            passages: [],
            prompt: "Choose the word that is an antonym.",
            text: "An antonym of damp is {0}. An antonym of ancient is {1}.",
            slots: [
              {
                options: [
                  "dry",
                  "soaked",
                  "cold"
                ],
                answer: 0
              },
              {
                options: [
                  "modern",
                  "very old",
                  "dusty"
                ],
                answer: 0
              }
            ],
            clue: "An antonym means the opposite. Say what each word means, then think of the opposite.",
            hints: [
              "An antonym means the opposite. Say what each word means, then think of the opposite.",
              "For each blank, test each choice: does it mean the opposite, the same, or something else?",
              "Start with the first blank. Damp means a little wet, so ask which choices go the other way."
            ],
            how: [
              "Damp means a little wet. The opposite is dry.",
              "Ancient means very, very old. The opposite is modern, or new.",
              "Soaked and very old mean about the same as the word, and cold and dusty are about something else."
            ],
            misconception: "A common mix-up is choosing a word that means the same. An antonym means the opposite.",
            why: "The answers are \"dry\" and \"modern.\" Damp means a little wet, so dry is the opposite. Ancient means very old, so modern is the opposite. Soaked and very old are synonyms, and cold and dusty are not opposites."
          },
          {
            id: "SK-V3b-C08",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.b"
            ],
            passages: [
              "p5"
            ],
            prompt: "Read the sentence from paragraph 4. Choose the antonym of noisy.",
            stem: [
              "At noon, the market was noisy, but by closing time it was quiet."
            ],
            options: [
              "quiet",
              "market",
              "closing",
              "noon"
            ],
            answer: [
              0
            ],
            pick: 1,
            clue: "An antonym is a word that means the opposite. Look for a word that points the other way.",
            hints: [
              "An antonym is a word that means the opposite. Look for a word that points the other way.",
              "Read the sentence and look for the small word that shows a change. Look at the words on each side of it.",
              "Say noisy and a choice together as a pair. Ask whether the two words point the same way or opposite ways."
            ],
            how: [
              "The word but shows that the market changed from one way to the other.",
              "At noon it was noisy, and later it was the opposite.",
              "Quiet is the opposite of noisy, so it is the antonym."
            ],
            misconception: "A common mix-up is picking a noun in the sentence. An antonym is a word that means the opposite.",
            why: "The answer is \"quiet.\" The word but shows a change from noisy to the opposite, and quiet means with little sound. Market, closing and noon are about the place and time."
          },
          {
            ref: "SK-V3b-P5"
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-V3b-C09",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.3.b"
            ],
            passages: [
              "p5"
            ],
            prompt: "Use the antonym clue. What does generous mean in paragraph 2?",
            choices: [
              {
                text: "willing to give and share",
                correct: true
              },
              {
                text: "unwilling to share what you have"
              },
              {
                text: "good at counting coins"
              },
              {
                text: "quick to finish a job"
              }
            ],
            clue: "An antonym clue is a word that means the opposite. Look for a word near the new word that points the other way.",
            hints: [
              "An antonym clue is a word that means the opposite. Look for a word near the new word that points the other way.",
              "Read the sentence the word is in. Look for a small word that shows the two words are not alike.",
              "Decide what the word near it means. Then think about what the opposite would be."
            ],
            how: [
              "The sentence says Mrs. Cole was generous, not selfish.",
              "Selfish means not wanting to share, so generous means the opposite.",
              "She gave the boy extra plums, which shows she was willing to give."
            ],
            misconception: "A common mix-up is choosing the meaning of the clue word. The clue word means the opposite of the new word.",
            why: "The answer is \"willing to give and share.\" The sentence says generous, not selfish. Selfish means not wanting to share, so generous means the opposite, and she gave extra plums. Unwilling to share is the meaning of selfish."
          },
          {
            id: "SK-V3b-C10",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.3.b"
            ],
            passages: [
              "p5"
            ],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "In paragraph 3, which meaning fits delighted?",
              choices: [
                {
                  text: "greatly pleased",
                  correct: true
                },
                {
                  text: "worn out"
                },
                {
                  text: "taken by surprise"
                },
                {
                  text: "too shy to speak"
                }
              ]
            },
            partB: {
              prompt: "Which line gives the best clue for Part A?",
              choices: [
                {
                  text: "She was so glad that she thanked him with a big smile.",
                  correct: true
                },
                {
                  text: "The next week, the boy came back and helped her carry boxes."
                },
                {
                  text: "One day, a boy came with only a few coins."
                },
                {
                  text: "Mrs. Cole counted her coins and smiled."
                }
              ]
            },
            clue: "A synonym is a word that means about the same. Look for a word near the new word that means about the same.",
            hints: [
              "A synonym is a word that means about the same. Look for a word near the new word that means about the same.",
              "Think about the whole story, not only paragraph 3. Which sentences tell how Mrs. Cole felt?",
              "For Part B, a sentence can tell what happened without telling how someone felt. Look for how she felt."
            ],
            how: [
              "Part A: after delighted, the next sentence says she was so glad that she thanked him with a big smile.",
              "Glad is a synonym for pleased, so delighted means greatly pleased.",
              "Part B: that sentence tells how she felt and gives the synonym."
            ],
            misconception: "A common mix-up is choosing a sentence about what happened. The sentence has to give a word that means the same.",
            why: "Part A: greatly pleased. Part B: \"She was so glad that she thanked him with a big smile.\" Glad means pleased, so it is a synonym that shows what delighted means. The other sentences tell what happened but do not give a word that means about the same."
          },
          {
            id: "SK-V3b-C11",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.3.b"
            ],
            passages: [],
            prompt: "Choose the TWO sentences that use the correct word.",
            pick: 2,
            choices: [
              {
                text: "Dad will write a note for the teacher.",
                correct: true
              },
              {
                text: "We have a spelling test every week.",
                correct: true
              },
              {
                text: "Put the letter in the male box."
              },
              {
                text: "The movie starts in one weak."
              },
              {
                text: "She will right a story about her cat."
              }
            ],
            clue: "Each sentence has a word that has a sound-alike twin. Think about what the sentence needs the word to mean.",
            hints: [
              "Each sentence has a word that has a sound-alike twin. Think about what the sentence needs the word to mean.",
              "Say each sentence and ask what the sound-alike word means there. Check whether it fits.",
              "A word can be a real word and still be wrong for the sentence. Check the meaning, not only the spelling."
            ],
            how: [
              "Write means to put words on paper, and week means seven days.",
              "Male is a boy or man, and mail is what comes in the post. Weak means not strong, and right means correct.",
              "Only two sentences have the word that matches what is meant."
            ],
            misconception: "A common mix-up is choosing a sentence because every word is a real word. Check the meaning of the sound-alike word.",
            why: "The answers are \"Dad will write a note for the teacher.\" and \"We have a spelling test every week.\" Write means to put words on paper, and week is seven days. The other sentences use male, weak and right where mail, week and write belong."
          },
          {
            id: "SK-V3b-C12",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.3.b"
            ],
            passages: [],
            prompt: "Match each word to its antonym.",
            cols: [
              "smooth",
              "timid",
              "quiet",
              "dim"
            ],
            rows: [
              {
                text: "rough",
                answer: 0
              },
              {
                text: "brave",
                answer: 1
              },
              {
                text: "noisy",
                answer: 2
              },
              {
                text: "bright",
                answer: 3
              }
            ],
            clue: "An antonym means the opposite. Say what each word means, then think of its opposite.",
            hints: [
              "An antonym means the opposite. Say what each word means, then think of its opposite.",
              "Read each word and try each choice. Ask whether the two words are opposites.",
              "Start with the word that tells about a surface you can touch. Decide which choice is its opposite."
            ],
            how: [
              "Rough and smooth are opposites for how a surface feels.",
              "Brave and timid are opposites for how a person acts around danger.",
              "Noisy and quiet are opposites for sound, and bright and dim are opposites for light."
            ],
            misconception: "A common mix-up is matching words that go together. Antonyms are opposites.",
            why: "Rough is the opposite of smooth. Brave is the opposite of timid. Noisy is the opposite of quiet. Bright is the opposite of dim."
          },
          {
            id: "SK-V3b-C13",
            type: "dropdown",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.3.b"
            ],
            passages: [],
            prompt: "Choose the best word for each blank.",
            text: "Wide and narrow are {0}. Large and huge are {1}.",
            slots: [
              {
                options: [
                  "antonyms",
                  "synonyms",
                  "homophones"
                ],
                answer: 0
              },
              {
                options: [
                  "synonyms",
                  "antonyms",
                  "homographs"
                ],
                answer: 0
              }
            ],
            clue: "Say what each pair of words means. Then ask how the two words in the pair are related.",
            hints: [
              "Say what each pair of words means. Then ask how the two words in the pair are related.",
              "For each pair, ask whether the words mean the same, mean the opposite, or sound alike.",
              "Start with the second pair. Think about whether large and huge point the same way or opposite ways."
            ],
            how: [
              "Wide and narrow mean the opposite of each other, so they are antonyms.",
              "Large and huge both mean big, so they are synonyms.",
              "Homophones sound alike and homographs are spelled alike, and neither pair is like that."
            ],
            misconception: "A common mix-up is thinking all word pairs are synonyms. First decide if the words mean the same or the opposite.",
            why: "The answers are \"antonyms\" and \"synonyms.\" Wide and narrow are opposites. Large and huge both mean big. Neither pair sounds alike or is spelled alike."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-V3b-S01",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C01"
      ],
      prompt: "Pick the sound-alike word that goes in each blank.",
      text: "Please {0} here while I check the {1} of this box.",
      slots: [
        {
          options: [
            "wait",
            "weight",
            "wheat"
          ],
          answer: 0
        },
        {
          options: [
            "weight",
            "wait",
            "wet"
          ],
          answer: 0
        }
      ],
      clue: "Sound-alike words are spelled differently. Think about what each blank needs to mean.",
      hints: [
        "Sound-alike words are spelled differently. Think about what each blank needs to mean.",
        "Read the words around each blank. What does each blank need to mean?",
        "Start with the second blank. Say each spelling and think about what it means."
      ],
      how: [
        "Blank one: it is something a person does, to stay until something happens. Wait.",
        "Blank two: it is how heavy the box is. Weight.",
        "Wait and weight sound the same, so the meaning decides the spelling."
      ],
      misconception: "A common mix-up is picking the spelling that looks familiar. Use the meaning to choose.",
      why: "The answers are \"wait\" and \"weight.\" To wait is to stay until something happens, and weight is how heavy something is. Wheat and wet are not the words these sentences need."
    },
    {
      id: "SK-V3b-S02",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C02"
      ],
      prompt: "Which sentence uses a wrong sound-alike word?",
      stem: [
        "From a class news page:"
      ],
      options: [
        "Our class grew pumpkins behind the gym.",
        "Mr. Ortiz sells tickets for the fall fair.",
        "Everyone will meat in the gym on Friday.",
        "Dad drove us home after the show."
      ],
      answer: [
        2
      ],
      pick: 1,
      clue: "Say each sound-alike word and think about what it means in that sentence.",
      hints: [
        "Say each sound-alike word and think about what it means in that sentence.",
        "Read each sentence and look for a word that has a sound-alike twin with a different spelling.",
        "A word can be spelled right for one meaning and wrong for another. Check the meaning in each sentence, not only the spelling."
      ],
      how: [
        "Check each sound-alike word: grew, sells, meat, drove.",
        "Meat is food that comes from animals. A group of people comes together to meet.",
        "Everyone will meet in the gym, so meat is the wrong word."
      ],
      misconception: "A common mix-up is choosing a sentence with a hard word. Check the meaning of each sound-alike word.",
      why: "The answer is \"Everyone will meat in the gym on Friday.\" People meet in a gym, and meat is a kind of food. The other sentences use sound-alike words correctly."
    },
    {
      id: "SK-V3b-S03",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C03"
      ],
      prompt: "Which meaning of lead fits the sentence?",
      stem: [
        "Our guide will lead us up the trail."
      ],
      choices: [
        {
          text: "to show the way",
          correct: true
        },
        {
          text: "a heavy gray metal"
        },
        {
          text: "the first place in a race"
        },
        {
          text: "a thin stick inside a pencil"
        }
      ],
      clue: "Say more than one meaning of lead before you choose.",
      hints: [
        "Say more than one meaning of lead before you choose.",
        "Read the sentence and ask what job the word does. Look at who is doing something.",
        "Put each meaning in place of the word. Check which ones still make a sentence."
      ],
      how: [
        "Lead has more than one meaning: a metal, the front place, the stick in a pencil, and to guide.",
        "In this sentence, the guide does something to show the group the way.",
        "So lead here means to show the way."
      ],
      misconception: "A common mix-up is choosing the meaning you know best. Check which meaning fits the sentence.",
      why: "The answer is \"to show the way.\" The guide will take the group up the trail, so lead is an action. A metal, the first place in a race and the stick in a pencil are other meanings of the same spelling."
    },
    {
      id: "SK-V3b-S04",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C04"
      ],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: [
        "Sam's note: \"The ants in the yard were minute. I had to use a magnifying glass to see them. I watched them march across a leaf. Then Mom called me inside for lunch.\""
      ],
      partA: {
        prompt: "Said my-NOOT, minute has what meaning in Sam's note?",
        choices: [
          {
            text: "very tiny",
            correct: true
          },
          {
            text: "sixty seconds long"
          },
          {
            text: "very fast"
          },
          {
            text: "very quiet"
          }
        ]
      },
      partB: {
        prompt: "Pick the line in Sam's note that best backs up Part A.",
        choices: [
          {
            text: "I had to use a magnifying glass to see them.",
            correct: true
          },
          {
            text: "I watched them march across a leaf."
          },
          {
            text: "Then Mom called me inside for lunch."
          },
          {
            text: "The ants in the yard were minute."
          }
        ]
      },
      clue: "Say more than one meaning of minute before you choose. Then look at how the word is said.",
      hints: [
        "Say more than one meaning of minute before you choose. Then look at how the word is said.",
        "Think about the whole note, not only the first sentence. Which lines tell about seeing the ants?",
        "For Part A, the word is not about time here. For Part B, a line can tell what the ants did without showing how big they were."
      ],
      how: [
        "Part A: minute said my-NOOT means very tiny.",
        "Part B: look for the line that shows how small the ants were.",
        "Sam needed a magnifying glass to see them, so they were very tiny.",
        "The other lines tell what the ants did, what Mom did, or repeat the word."
      ],
      misconception: "A common mix-up is choosing the meaning about time. The way the word is said shows the meaning.",
      why: "Part A: very tiny. Part B: \"I had to use a magnifying glass to see them.\" Only very tiny things need a magnifying glass. The other lines do not show how small the ants were."
    },
    {
      id: "SK-V3b-S05",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-P4"
      ],
      prompt: "Close is a homograph. In which sentence does close mean \"very near\"?",
      choices: [
        {
          text: "The park is close to our school.",
          correct: true
        },
        {
          text: "Please close the window before it rains."
        },
        {
          text: "The shop will close at nine tonight."
        },
        {
          text: "She will close her eyes and make a wish."
        }
      ],
      clue: "Say the word in each sentence. Some sentences use a different sound and meaning.",
      hints: [
        "Say the word in each sentence. Some sentences use a different sound and meaning.",
        "Read each sentence and ask what job close does: telling where something is or doing something.",
        "Put the words very near in place of close in each sentence. Check which ones still make sense."
      ],
      how: [
        "Close can rhyme with rose, as in to shut, or with dose, as in near.",
        "In the sentence about the park, close tells where the park is.",
        "In the other sentences, close is something a person does, such as shut a window."
      ],
      misconception: "A common mix-up is choosing the sentence that looks the same. Check the meaning and how the word sounds.",
      why: "The answer is \"The park is close to our school.\" Close tells how near the park is. In the other sentences, close means to shut or to end, and it sounds different."
    },
    {
      id: "SK-V3b-S06",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C05"
      ],
      prompt: "Choose the synonym for weary.",
      stem: [
        "The weary hikers sat down to rest."
      ],
      choices: [
        {
          text: "tired",
          correct: true
        },
        {
          text: "eager"
        },
        {
          text: "frightened"
        },
        {
          text: "hungry"
        }
      ],
      clue: "A synonym means about the same. Think about what the hikers need.",
      hints: [
        "A synonym means about the same. Think about what the hikers need.",
        "Read the sentence and ask why the hikers sat down to rest.",
        "An antonym is a word that means the opposite. Make sure your choice is not an antonym."
      ],
      how: [
        "The hikers sat down to rest.",
        "People rest when they are worn out.",
        "So tired means about the same as weary."
      ],
      misconception: "A common mix-up is choosing a feeling that is not a synonym. A synonym means about the same.",
      why: "The answer is \"tired.\" People sit down to rest when they are worn out, so weary means tired. Eager, frightened and hungry are different feelings."
    },
    {
      id: "SK-V3b-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C06"
      ],
      prompt: "Which TWO words mean about the same as silent?",
      pick: 2,
      choices: [
        {
          text: "quiet",
          correct: true
        },
        {
          text: "hushed",
          correct: true
        },
        {
          text: "noisy"
        },
        {
          text: "busy"
        },
        {
          text: "rough"
        }
      ],
      clue: "Synonyms are words that mean about the same. Say each word in the sentence \"The room was ___.\"",
      hints: [
        "Synonyms are words that mean about the same. Say each word in the sentence \"The room was ___.\"",
        "Try each choice in the same sentence. Ask which ones keep the meaning of silent.",
        "Some choices mean the opposite and some are about something else. Check each choice against the meaning."
      ],
      how: [
        "Silent means making no sound.",
        "Quiet and hushed both mean making little or no sound, so they are synonyms.",
        "Noisy is the opposite, and busy and rough are about other things."
      ],
      misconception: "A common mix-up is choosing a word about a room. A synonym has to mean about the same as silent.",
      why: "The answers are \"quiet\" and \"hushed.\" Both mean with little or no sound, like silent. Noisy means the opposite, and busy and rough are not about sound."
    },
    {
      id: "SK-V3b-S08",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C07"
      ],
      prompt: "Complete each pair of opposites.",
      text: "Cheerful and {0} are opposites. Rapid and {1} are opposites.",
      slots: [
        {
          options: [
            "happy",
            "gloomy",
            "bright"
          ],
          answer: 1
        },
        {
          options: [
            "slow",
            "quick",
            "speedy"
          ],
          answer: 0
        }
      ],
      clue: "An antonym means the opposite. Say what each word means, then think of the opposite.",
      hints: [
        "An antonym means the opposite. Say what each word means, then think of the opposite.",
        "For each blank, test each choice: does it mean the opposite, the same, or something else?",
        "Start with the second blank. Rapid means moving fast, so ask which choices go the other way."
      ],
      how: [
        "Cheerful means full of good spirits. The opposite is gloomy.",
        "Rapid means very fast. The opposite is slow.",
        "Happy, quick and speedy mean about the same as the word, and bright is about light."
      ],
      misconception: "A common mix-up is choosing a word that means the same. An antonym means the opposite.",
      why: "The answers are \"gloomy\" and \"slow.\" Cheerful means in good spirits, so gloomy is the opposite. Rapid means very fast, so slow is the opposite. Happy, quick and speedy are synonyms."
    },
    {
      id: "SK-V3b-S09",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C08"
      ],
      prompt: "Pick the word that is the opposite of shallow.",
      stem: [
        "Toddlers splashed at one shallow end, while grown swimmers dived into the deep end."
      ],
      options: [
        "deep",
        "splashed",
        "grown",
        "end"
      ],
      answer: [
        0
      ],
      pick: 1,
      clue: "An antonym is a word that means the opposite. Look for a word that points the other way.",
      hints: [
        "An antonym is a word that means the opposite. Look for a word that points the other way.",
        "Read the sentence and look for the small word that compares the two ends. Look at the words on each side of it.",
        "Say shallow and a choice together as a pair. Ask whether the two words point the same way or opposite ways."
      ],
      how: [
        "The word while compares one end with the other end.",
        "At one end it was shallow, and at the other end it was the opposite.",
        "Deep is the opposite of shallow, so it is the antonym."
      ],
      misconception: "A common mix-up is picking a noun in the sentence. An antonym is a word that means the opposite.",
      why: "The answer is \"deep.\" The word while compares the two ends, and deep means going far down, the opposite of shallow. Splashed, grown and end do not tell how deep the water was."
    },
    {
      id: "SK-V3b-S10",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-P5"
      ],
      prompt: "Sort each word pair by how its words are related.",
      cols: [
        "Same meaning",
        "Opposite meaning"
      ],
      rows: [
        {
          text: "glad / cheerful",
          answer: 0
        },
        {
          text: "hot / cold",
          answer: 1
        },
        {
          text: "tiny / little",
          answer: 0
        },
        {
          text: "wet / dry",
          answer: 1
        }
      ],
      clue: "For each pair, say what each word means.",
      hints: [
        "For each pair, say what each word means.",
        "Ask whether the two words point the same way or opposite ways.",
        "Start with a pair about the weather or temperature. Decide whether the words match or go against each other."
      ],
      how: [
        "Glad and cheerful both mean happy, so they mean the same.",
        "Hot and cold are opposite temperatures. Wet and dry are opposite too.",
        "Tiny and little both mean small, so they mean the same."
      ],
      misconception: "A common mix-up is thinking two words that go together mean the same. Check the meanings.",
      why: "Glad and cheerful mean the same, and tiny and little mean the same. Hot and cold are opposites, and wet and dry are opposites."
    },
    {
      id: "SK-V3b-S11",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C09"
      ],
      prompt: "Use the antonym clue. What does reluctant mean?",
      stem: [
        "At the talent show, Dan was reluctant to go on stage, but his sister was eager to go first."
      ],
      choices: [
        {
          text: "not wanting to do something",
          correct: true
        },
        {
          text: "very excited to begin"
        },
        {
          text: "unable to see the stage"
        },
        {
          text: "tired from practice"
        }
      ],
      clue: "An antonym clue is a word that means the opposite. Look for a word near the new word that points the other way.",
      hints: [
        "An antonym clue is a word that means the opposite. Look for a word near the new word that points the other way.",
        "Read the sentence the word is in. Look for a small word that shows the two people are not alike.",
        "Decide what the word near it means. Then think about what the opposite would be."
      ],
      how: [
        "The sentence says Dan was reluctant, but his sister was eager.",
        "Eager means wanting to do something, so reluctant means the opposite.",
        "So reluctant means not wanting to do something."
      ],
      misconception: "A common mix-up is choosing the meaning of the clue word. The clue word means the opposite of the new word.",
      why: "The answer is \"not wanting to do something.\" The word but shows Dan and his sister are not alike. His sister was eager, so reluctant is the opposite: not wanting to. Very excited is the meaning of eager."
    },
    {
      id: "SK-V3b-S12",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C10"
      ],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: [
        "Ben's journal: \"Our puppy was ecstatic when I got home. It was so overjoyed that it spun in circles and licked my hands. Then it fell asleep on the rug.\""
      ],
      partA: {
        prompt: "What is the best meaning of ecstatic here?",
        choices: [
          {
            text: "extremely happy",
            correct: true
          },
          {
            text: "very sleepy"
          },
          {
            text: "a little scared"
          },
          {
            text: "a bit confused"
          }
        ]
      },
      partB: {
        prompt: "Which sentence is the strongest clue to that word?",
        choices: [
          {
            text: "It was so overjoyed that it spun in circles and licked my hands.",
            correct: true
          },
          {
            text: "Then it fell asleep on the rug."
          },
          {
            text: "Our puppy was ecstatic when I got home."
          },
          {
            text: "The journal was kept on a shelf."
          }
        ]
      },
      clue: "A synonym is a word that means about the same. Look for a word near the new word that means about the same.",
      hints: [
        "A synonym is a word that means about the same. Look for a word near the new word that means about the same.",
        "Think about the whole journal, not only the first sentence. Which lines tell how the puppy felt?",
        "For Part B, a line can tell what the puppy did without telling how it felt. Look for how it felt."
      ],
      how: [
        "Part A: the next sentence says it was so overjoyed that it spun in circles.",
        "Overjoyed means very happy, so ecstatic means extremely happy.",
        "Part B: that line gives a word that means about the same."
      ],
      misconception: "A common mix-up is choosing a line about what happened. The line has to give a word that means about the same.",
      why: "Part A: extremely happy. Part B: \"It was so overjoyed that it spun in circles and licked my hands.\" Overjoyed means very happy, so it is a synonym that shows the meaning. The other lines do not give a word like that."
    },
    {
      id: "SK-V3b-S13",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C11"
      ],
      prompt: "Which TWO sentences use the right sound-alike word?",
      pick: 2,
      choices: [
        {
          text: "Grandma added flour to the bread dough.",
          correct: true
        },
        {
          text: "The cat's tail swished back and forth.",
          correct: true
        },
        {
          text: "The bridge is made of strong steal."
        },
        {
          text: "The baker mixed flower into the dough."
        },
        {
          text: "Our dog chased its own tale around the yard."
        }
      ],
      clue: "Each sentence has a word that has a sound-alike twin. Think about what the sentence needs the word to mean.",
      hints: [
        "Each sentence has a word that has a sound-alike twin. Think about what the sentence needs the word to mean.",
        "Say each sentence and ask what the sound-alike word means there. Check whether it fits.",
        "A word can be a real word and still be wrong for the sentence. Check the meaning, not only the spelling."
      ],
      how: [
        "Flour is what bread is made of, and a tail is on the back of a cat.",
        "Steal means to take what is not yours, and a flower grows in a garden. A tale is a story.",
        "Only two sentences have the word that matches what is meant."
      ],
      misconception: "A common mix-up is choosing a sentence because every word is a real word. Check the meaning of the sound-alike word.",
      why: "The answers are \"Grandma added flour to the bread dough.\" and \"The cat's tail swished back and forth.\" Flour goes in dough, and a cat has a tail. The other sentences use steal, flower and tale where steel, flour and tail belong."
    },
    {
      id: "SK-V3b-S14",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C12"
      ],
      prompt: "Which word is the opposite of each word on the left?",
      cols: [
        "thin",
        "dirty",
        "sell",
        "leave"
      ],
      rows: [
        {
          text: "thick",
          answer: 0
        },
        {
          text: "clean",
          answer: 1
        },
        {
          text: "buy",
          answer: 2
        },
        {
          text: "arrive",
          answer: 3
        }
      ],
      clue: "Say what each word means, then think of its opposite.",
      hints: [
        "Say what each word means, then think of its opposite.",
        "Read each word and try each choice. Ask whether the two words are opposites.",
        "Start with the word about washing. Decide which choice is its opposite."
      ],
      how: [
        "Thick and thin are opposite for how wide something is.",
        "Clean and dirty are opposites. Buy and sell are opposites.",
        "Arrive and leave are opposites, for coming and going."
      ],
      misconception: "A common mix-up is matching words that go together. Opposites go against each other.",
      why: "Thick is the opposite of thin. Clean is the opposite of dirty. Buy is the opposite of sell. Arrive is the opposite of leave."
    },
    {
      id: "SK-V3b-S15",
      type: "dropdown",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.3.b"
      ],
      passages: [],
      like: [
        "SK-V3b-C13"
      ],
      prompt: "Finish each sentence about the word pair.",
      text: "Pale and pail are a pair that {0}. Quick and fast are a pair that {1}.",
      slots: [
        {
          options: [
            "sound alike but are spelled differently",
            "are spelled alike but sound different",
            "mean the opposite"
          ],
          answer: 0
        },
        {
          options: [
            "mean about the same",
            "mean the opposite",
            "sound alike"
          ],
          answer: 0
        }
      ],
      clue: "Say what each pair of words sounds like and means. Then ask how the two words are related.",
      hints: [
        "Say what each pair of words sounds like and means. Then ask how the two words are related.",
        "For each pair, ask whether the words sound alike, mean the same, or mean the opposite.",
        "Start with the second pair. Think about whether quick and fast point the same way or opposite ways."
      ],
      how: [
        "Pale and pail sound the same but are spelled differently and mean different things.",
        "Quick and fast both mean moving at a high speed, so they mean about the same.",
        "Words spelled alike that sound different are homographs, and opposites go against each other."
      ],
      misconception: "A common mix-up is thinking all word pairs mean the same. First decide how the two words are related.",
      why: "The answers are \"sound alike but are spelled differently\" and \"mean about the same.\" Pale and pail are homophones. Quick and fast are synonyms. Neither pair is spelled alike or means the opposite."
    }
  ],
  addons: {
    "SK-V3b-P1": {
      hints: [
        "Sound-alike words are spelled differently. Think about what the blank needs to mean.",
        "Read the words around the blank. Ask whether it tells where, tells also, or tells how many.",
        "The sentence asks how many chairs. Think about what each spelling means, one at a time."
      ],
      how: [
        "All three words sound the same.",
        "The blank tells how many more chairs are needed, so it names a number.",
        "Two is the number 2. To and too are other words."
      ],
      misconception: "A common mix-up is picking the spelling you see most. Use the meaning to choose."
    },
    "SK-V3b-P2": {
      hints: [
        "Look at the words near enormous. A word near it may mean about the same.",
        "Think about the whole story, not only paragraph 5. Which sentences tell how big the fish was?",
        "For Part B, a sentence can tell about the fish without telling how big it was."
      ],
      how: [
        "Find enormous in paragraph 5: Kofi says it is enormous.",
        "Kofi also says what a huge fish.",
        "Huge and enormous both mean very big."
      ],
      misconception: "A common mix-up is picking a sentence that tells about the fish. The sentence has to give a word that means about the same."
    },
    "SK-V3b-P3": {
      hints: [
        "Say more than one meaning of scales before you choose.",
        "Read the sentence and ask what has the scales. Think about what would flash in the sun.",
        "Put each meaning in place of the word and read the sentence again. Cross out any that do not make sense."
      ],
      how: [
        "Scales has more than one meaning: plates on a fish, tools for weighing, climbs, and music notes.",
        "The sentence is about the fish that flipped out of the water.",
        "Small, thin plates cover a fish and shine in the sun."
      ],
      misconception: "A common mix-up is choosing the meaning you know best. Check which meaning fits the sentence."
    },
    "SK-V3b-P4": {
      hints: [
        "Say more than one meaning of wound before you choose. Then look at how it is said.",
        "Read the sentence and ask what Kofi did with the line. Look at what a reel does.",
        "Put each meaning in place of the word and read the sentence again. Cross out any that do not make sense."
      ],
      how: [
        "Wound has more than one meaning: wrapped around, or a cut on the body.",
        "Kofi wound the line back onto the reel, and a reel holds line by turning.",
        "So wound here means wrapped around and around."
      ],
      misconception: "A common mix-up is choosing the meaning you know best. The way the word is said shows the meaning."
    },
    "SK-V3b-P5": {
      hints: [
        "For each pair, say what each word means.",
        "Ask whether the two words point the same way or opposite ways.",
        "Start with the pair about how something feels. Decide whether the words match or go against each other."
      ],
      how: [
        "Calm and still both mean quiet and not moving.",
        "Tight and loose are opposites, and early and late are opposites.",
        "Huge and enormous both mean very big."
      ],
      misconception: "A common mix-up is thinking words that go together mean the same. Check the meanings."
    },
    "SK-V3b-P6": {
      hints: [
        "Homophones sound exactly the same. Say each pair slowly.",
        "Look for pairs where the two words sound alike but have different spellings and meanings.",
        "Some pairs sound close but not the same, and some pairs mean the same thing. Decide which are which."
      ],
      how: [
        "Knows and nose sound the same but mean different things.",
        "Sea and see sound the same but mean different things.",
        "Shell and shall and cold and colt sound close, and fast and quick are synonyms."
      ],
      misconception: "A common mix-up is choosing pairs that sound close. Homophones sound exactly the same."
    }
  },
  /* B5-b5b:core:end */
  test: [
    { id: "SK-V3b-T1", type: "dropdown", points: 2, dok: 1, passages: [],
      prompt: "Choose the homophone that correctly completes each part of the sentence.",
      text: "Ava's red balloon got away, and the wind {0} it high into the {1} sky.",
      slots: [
        { options: ["blue", "blew", "blow"], answer: 1 },
        { options: ["blew", "blow", "blue"], answer: 2 }
      ],
      clue: "Blew and blue sound the same. One is an action the wind did. The other is a color.",
      why: "The answers are blew and blue. The wind blew the balloon, which is something the wind did in the past. The sky is blue, which is a color." },
    { id: "SK-V3b-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Tear is a homograph. In which sentence does tear mean \"a drop of water from your eye\"?",
      choices: [
        { text: "A tear rolled down Ben's cheek at the sad part.", correct: true },
        { text: "Be careful not to tear the page when you turn it." },
        { text: "Dad sewed up the tear in the knee of my jeans." },
        { text: "The puppy tried to tear the pillow into pieces." }
      ],
      clue: "Look for a sentence with clue words about eyes, faces or feeling sad.",
      why: "The answer is \"A tear rolled down Ben's cheek at the sad part.\" A drop of water rolls down your cheek when you feel sad. In the other sentences, tear means to rip or a rip, which sounds different." },
    { id: "SK-V3b-T3", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Which word from the story is an antonym of nervous?",
        choices: [
          { text: "calm", correct: true },
          { text: "proud" },
          { text: "shaky" },
          { text: "deep" }
        ] },
      partB: { prompt: "Which sentence from the story BEST helps you know the answer to Part A?",
        choices: [
          { text: "\"By the end of the day, Nadia was not nervous anymore, and she felt calm and proud.\"", correct: true },
          { text: "\"Her hands were shaky, and her stomach felt full of butterflies.\"" },
          { text: "\"Nadia set the volcano on the table and took a deep breath.\"" },
          { text: "\"The crowd clapped and cheered.\"" }
        ] },
      clue: "An antonym means the opposite. Find the part of the story where Nadia stops feeling nervous. What does she feel instead?",
      why: "Part A: calm. Part B: \"By the end of the day, Nadia was not nervous anymore, and she felt calm and proud.\" Nervous means worried and jumpy. Calm means quiet and not worried, which is the opposite. Proud is a different feeling, not the opposite of nervous." },
    { id: "SK-V3b-T4", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes each sentence.",
      text: "A synonym of begin is {0}. An antonym of shiny is {1}.",
      slots: [
        { options: ["finish", "start", "stop"], answer: 1 },
        { options: ["bright", "glowing", "dull"], answer: 2 }
      ],
      clue: "A synonym means the same. An antonym means the opposite. Try each word in a sentence in place of begin or shiny.",
      why: "The answers are start and dull. Start means the same as begin, so it is a synonym. Dull means not shiny, so it is an antonym. Bright and glowing mean almost the same as shiny, and finish and stop are opposites of begin." },
    { id: "SK-V3b-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "One sentence uses the wrong homophone. Choose that sentence.",
      options: [
        "We ate a whole pizza after the game.",
        "The deer ran into the woods.",
        "I can hear the rain on the roof.",
        "Our team one the game on Friday."
      ],
      answer: [3], pick: 1,
      clue: "Read each sentence and check each sound-alike word. Does its spelling match its meaning in that sentence?",
      why: "The answer is \"Our team one the game on Friday.\" It should say won, which means came out ahead in a game. One is the number 1. Whole, deer and hear are all spelled correctly for their meanings." }
  ]
});

PP.addLesson({
  code: "3.L.V.3.c",
  title: "Shades of meaning: words that are close but not the same",
  teach: {
    big: "Some words mean almost the same thing, but one is a little stronger, bigger or faster than another. I pick the one that fits just right.",
    points: [
      "Close words can be different amounts of the same thing. Cool, warm, hot and boiling all tell about temperature, but each is a different amount of heat.",
      "You can line up close words like steps on a ladder, from weakest to strongest: tap, knock, pound.",
      "Verbs can show how an action is done. To stroll is to walk slowly and calmly. To march is to walk with strong, even steps, like in a parade.",
      "Adjectives can show how much. Glad and happy both mean pleased. Thrilled is much stronger.",
      "Look for clues in the sentence that tell how much, how fast or how strong. Then choose the word that matches."
    ],
    words: [
      { term: "shades of meaning", means: "small differences between words that mean almost the same thing" }
    ],
    example: {
      label: "Example",
      lines: ["cool → warm → hot → boiling"],
      note: "All four words tell about temperature. Each one is hotter than the one before it. Bath water should be warm. Water for cooking noodles is boiling."
    },
    tip: "On the test, you may put words in order from weakest to strongest, or choose the word that best fits a sentence. Look for clue words that tell how much or how fast."
  },
  learn: [
    {
      show: ["gobble   nibble   eat"],
      ask: "Put these words in order from the smallest, slowest way of eating to the biggest, fastest way.",
      steps: [
        "All three words mean to eat. Now think about how each one is done.",
        "To nibble is to take tiny bites. That is the smallest and slowest.",
        "Eat is the plain, middle word. To gobble is to eat fast in big bites, so it goes last."
      ],
      answer: "nibble, eat, gobble"
    },
    {
      show: ["Leo was ____ when he won first prize in the whole state art contest.", "glad   happy   thrilled"],
      ask: "Which word fits best?",
      steps: [
        "All three words mean pleased. Glad and happy are about the same. Thrilled is much stronger.",
        "Look for clues about how big the moment is: first prize, in the whole state.",
        "Winning in the whole state is a huge deal, so choose the strongest word."
      ],
      answer: "Thrilled fits best: \"Leo was thrilled when he won first prize in the whole state art contest.\""
    },
    {
      show: ["The band ____ down Main Street in the parade, stepping to the beat of the drum.", "strolled   marched   wandered"],
      ask: "Which word fits best?",
      steps: [
        "All three words describe walking. Think about how each kind of walk looks.",
        "Strolled is a slow, relaxed walk. Wandered is walking with no plan of where to go.",
        "The clues \"parade\" and \"stepping to the beat of the drum\" show strong, even steps."
      ],
      answer: "Marched fits best: \"The band marched down Main Street in the parade, stepping to the beat of the drum.\""
    }
  ],
  parent: "Make word ladders together: pick a plain word like cold or walk and line up three or four close words from weakest to strongest (cool, cold, freezing). During cooking or a walk, ask your child which word fits exactly right.",
  passages: [
    { id: "p1", title: "Up Stone Mountain", genre: "Literary text",
      paragraphs: [
        ["Dev and his mom started up the trail at Stone Mountain early on a fall morning.", "The air was chilly, so Dev zipped up his jacket."],
        ["At first, they strolled along the path and looked at the trees.", "The leaves were turning red and gold."],
        ["Soon the trail got steep.", "Dev's legs felt heavy, and he trudged up the rocky slope one slow step at a time."],
        ["Near the top, the wind picked up.", "Now the air felt freezing, and Dev pulled his hat down over his ears."],
        ["When they finally reached the top, Dev forgot all about his tired legs.", "Far away, he could see the tall buildings of Atlanta.", "He was not just happy.", "He was overjoyed."],
        ["On the way down, Dev raced ahead, and Mom called for him to slow down."]
      ] }
  ],
  practice: [
    { id: "SK-V3c-P1", type: "order", points: 2, dok: 2, passages: [],
      prompt: "These words all tell how cold something is. Put them in order from LEAST cold to MOST cold.",
      steps: ["cool", "cold", "freezing"],
      orderNote: "Tap the words in order, from least cold to most cold. Tap a placed word to take it back.",
      clue: "Picture a glass of water getting colder and colder. Which word comes first, and which comes last?",
      why: "The order is cool, cold, freezing. Cool is a little cold, like shade on a summer day. Cold is more. Freezing is the coldest, cold enough for water to turn to ice." },
    { id: "SK-V3c-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "In paragraph 3, the author says Dev trudged up the slope. What does trudged show about how Dev walked?",
      choices: [
        { text: "He walked slowly, as if his legs were tired.", correct: true },
        { text: "He walked quickly and happily up the hill." },
        { text: "He walked with even steps to a drum beat." },
        { text: "He walked quietly on the tips of his toes." }
      ],
      clue: "Look at the other words in the same sentence. What do they tell you about how Dev felt and how fast he moved?",
      why: "The answer is \"He walked slowly, as if his legs were tired.\" The sentence says Dev's legs felt heavy and he went one slow step at a time. To trudge is to walk slowly with heavy, tired steps." },
    { id: "SK-V3c-P3", type: "ebsr", points: 2, dok: 2, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Why does the author use the word overjoyed in paragraph 5?",
        choices: [
          { text: "to show Dev's feeling was much stronger than happy", correct: true },
          { text: "to show Dev was only a little bit happy at the top" },
          { text: "to show Dev was tired and ready to go back home" },
          { text: "to show Dev was surprised by the color of the trees" }
        ] },
      partB: { prompt: "Which sentence from the story BEST supports the answer to Part A?",
        choices: [
          { text: "\"He was not just happy.\"", correct: true },
          { text: "\"Soon the trail got steep.\"" },
          { text: "\"The leaves were turning red and gold.\"" },
          { text: "\"The air was chilly, so Dev zipped up his jacket.\"" }
        ] },
      clue: "Find the place where the author puts two words side by side. What does that tell you about Dev?",
      why: "Part A: to show Dev's feeling was much stronger than happy. Part B: \"He was not just happy.\" The author says Dev was not just happy, then picks overjoyed, a stronger word that means very, very happy." },
    { id: "SK-V3c-P4", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the word that best completes each sentence.",
      text: "The bath water was too {0}, so Mia added just a little cold water. Now the water is {1}, just right for a bath.",
      slots: [
        { options: ["cool", "hot", "chilly"], answer: 1 },
        { options: ["cool", "warm", "hot"], answer: 1 }
      ],
      clue: "Mia added cold water to fix the first problem. What was wrong? Then pick the word for water that is comfortable to sit in.",
      why: "The answers are hot and warm. Mia added cold water because the water was too hot. A little cold water made it warm, a step down from hot on the ladder. It is not hot anymore, because it is just right, and only a little cold water was added, so it did not get all the way to cool." },
    { id: "SK-V3c-P5", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Which TWO words mean to run very fast?",
      pick: 2,
      choices: [
        { text: "sprint", correct: true },
        { text: "dash", correct: true },
        { text: "jog" },
        { text: "stroll" },
        { text: "tiptoe" }
      ],
      clue: "Picture each word. Which ones are running at all? Of those, which ones are as fast as you can go?",
      why: "The answers are sprint and dash. Both mean to run as fast as you can for a short way. To jog is to run slowly. Stroll and tiptoe are kinds of walking, not running." }
  ],
  test: [
    { id: "SK-V3c-T1", type: "order", points: 2, dok: 2, passages: [],
      prompt: "These words all tell about size. Put them in order from SMALLEST to BIGGEST.",
      steps: ["tiny", "small", "large", "huge"],
      orderNote: "Tap the words in order, from smallest to biggest. Tap a placed word to take it back.",
      clue: "Find the two words for little things and the two words for big things first. Then decide which is the more extreme in each pair.",
      why: "The order is tiny, small, large, huge. Tiny is smaller than small, like an ant compared to a mouse. Huge is bigger than large, like a whale compared to a horse." },
    { id: "SK-V3c-T2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that best completes the sentence.",
      text: "The baby was asleep in the next room, so Ari {0} to his sister, \"Let's play quietly.\"",
      slots: [
        { options: ["shouted", "whispered", "yelled"], answer: 1 }
      ],
      clue: "All three words are ways to speak. Think about how loudly you would talk if a baby were sleeping nearby.",
      why: "The answer is whispered. To whisper is to speak very softly. Ari did not want to wake the baby. Shouted and yelled both mean to speak very loudly." },
    { id: "SK-V3c-T3", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "All of these words describe feeling mad. Which word shows the STRONGEST feeling?",
      choices: [
        { text: "furious", correct: true },
        { text: "annoyed" },
        { text: "grumpy" },
        { text: "irritated" }
      ],
      clue: "Line up the words from a little mad to very, very mad. Which one is at the top of the ladder?",
      why: "The answer is furious. Furious means very, very angry. Annoyed, grumpy and irritated are milder ways to feel mad." },
    { id: "SK-V3c-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the sentences. Which word BEST describes Kai?",
      stem: ["Kai got caught in the rain without an umbrella. Water dripped from his hair, his shirt and even his socks."],
      choices: [
        { text: "soaked", correct: true },
        { text: "damp" },
        { text: "dry" },
        { text: "sweaty" }
      ],
      clue: "How wet is Kai? Look at all the places the water is dripping from.",
      why: "The answer is soaked. Soaked means completely wet, all the way through. Water dripped from Kai's hair, shirt and even his socks. Damp means only a little wet, so it is not strong enough." },
    { id: "SK-V3c-T5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Tap and pound both mean to hit. Match each sentence to the word that fits the blank best.",
      cols: ["tap", "pound"],
      rows: [
        { text: "Ella will ____ her friend's shoulder gently to say hello.", answer: 0 },
        { text: "The angry giant began to ____ on the castle door with his fists.", answer: 1 },
        { text: "Leo will ____ lightly on the fish tank so he does not scare the fish.", answer: 0 },
        { text: "Workers ____ the tent stakes deep into the ground with a hammer.", answer: 1 }
      ],
      clue: "Tap is a soft, light hit. Pound is a hard, strong hit. Look for words in each sentence that tell how hard.",
      why: "Gently and lightly show soft hits, so Ella and Leo tap. An angry giant using his fists and workers using a hammer to drive stakes deep show hard hits, so they pound." }
  ]
});

PP.addLesson({
  code: "3.L.V.3.d",
  title: "Using a dictionary and a glossary",
  teach: {
    big: "A dictionary or glossary, in a book or on a screen, tells me how to spell a word and what a word or phrase means. I find the entry, then pick the meaning that fits.",
    points: [
      "Words in a dictionary are in ABC order. If two words start with the same letter, look at the second letter. If those match too, look at the third. If one word runs out of letters first, like plan and plane, the shorter word comes first.",
      "Guide words are the two words at the top of a dictionary page. The first guide word is the first word on the page, and the second is the last. Every word on the page comes between them in ABC order.",
      "An entry shows a word, its part of speech and its meanings. Many words have more than one meaning, and each one has a number. To choose, read the sentence, then try each meaning in place of the word. Pick the one that makes sense.",
      "A glossary is like a small dictionary at the back of a book or article. It explains only the important words from that text. You can also use a dictionary to check how to spell a word.",
      "A digital dictionary is on a computer, tablet or phone. Instead of using guide words, you type the word in the search box. If you spell it wrong, it may ask \"Did you mean ...?\" and show the right spelling. A Hear it button says the word out loud, and a Synonyms tab shows words that mean almost the same.",
      "Dictionaries and glossaries also explain phrases. A phrase is a group of words that means something together, like look after. Look up the main word, then find the phrase in its entry. A phrase can mean something different from its words one by one."
    ],
    words: [
      { term: "guide words", means: "the two words at the top of a dictionary page that show the first and last words on it" },
      { term: "entry", means: "a word in a dictionary and all the information about it" },
      { term: "glossary", means: "a list of important words and their meanings at the back of a book or article" },
      { term: "digital dictionary", means: "a dictionary on a computer, tablet or phone, where you type the word you want" },
      { term: "phrase", means: "a group of words that means something together" }
    ],
    examples: [
      {
        label: "A dictionary entry",
        lines: [
          "crane (noun) 1. a tall bird with long legs and a long neck 2. a large machine that lifts and moves heavy things",
          "Sentence: The crane lifted the steel beam to the top of the new building."
        ],
        note: "Crane has two meanings. A bird cannot lift a steel beam to the top of a building, so the sentence uses meaning 2."
      },
      {
        label: "A phrase in an entry",
        lines: [
          "look (verb) 1. to turn your eyes toward something so you can see it 2. to seem **look after** to take care of someone or something",
          "Sentence: Ana will look after her baby brother while Mom cooks dinner."
        ],
        note: "Look after is a phrase, so it is listed in bold inside the entry for its main word, look. It does not mean to look behind someone. It means to take care of him."
      }
    ],
    tip: "On the test, you may see a dictionary entry next to a sentence. Read every numbered meaning before you choose, and try each one in the sentence."
  },
  learn: [
    {
      show: ["sneeze   snail   snack"],
      ask: "Put these words in ABC order.",
      steps: [
        "All three start with s-n. Look at the third letter: e in sneeze, a in snail, a in snack.",
        "Sneeze has e, which comes after a, so it goes last.",
        "Snail and snack both start with s-n-a, so look at the fourth letter: i in snail, c in snack. C comes before i."
      ],
      answer: "snack, snail, sneeze"
    },
    {
      show: ["Guide words: pebble – pickle", "Would the word pencil be on this page?"],
      ask: "Does pencil come between pebble and pickle?",
      steps: [
        "Compare pencil to the first guide word, pebble. Both start with p-e. Next letters: n in pencil, b in pebble. N comes after b, so pencil comes after pebble.",
        "Compare pencil to the second guide word, pickle. Second letters: e in pencil, i in pickle. E comes before i, so pencil comes before pickle.",
        "Pencil comes after the first guide word and before the second one."
      ],
      answer: "Yes. Pencil would be on the page with the guide words pebble and pickle."
    },
    {
      show: [
        "Sentence: The hikers filled their bottles with cool water from a spring in the hills.",
        "Ravi looks up spring in a dictionary app on a tablet."
      ],
      figure: { src: "assets/figures/v3d-app-spring.svg", width: 320,
        alt: "A dictionary app screen. The search box says spring. The entry shows the word spring in bold, a Hear it button with a speaker, a Meanings tab (open) and a Synonyms tab, the part of speech noun, and three numbered meanings: 1. the season between winter and summer. 2. a metal coil that bounces back after it is pushed. 3. a place where water comes up out of the ground.",
        caption: "A digital dictionary" },
      ask: "How does Ravi use the app, and which meaning of spring is used in the sentence?",
      steps: [
        "Ravi types spring in the search box at the top. He does not need guide words, because the app finds the entry for him.",
        "He taps Hear it to hear the word said out loud. He stays on the Meanings tab, checks the part of speech (noun) and reads all three numbered meanings.",
        "He finds clue words in the sentence: filled their bottles, cool water, in the hills.",
        "He tries each meaning. You cannot fill a bottle with water from a season or from a metal coil. You can fill it from a place where water comes out of the ground."
      ],
      answer: "Meaning 3: a place where water comes up out of the ground."
    }
  ],
  parent: "Grab any dictionary or the glossary in a school book. Call out a word and race to find it, then talk about the guide words on that page. Try a free online children's dictionary too: type the word, press the button to hear it, and read every meaning before you pick one. When your child asks how to spell a word, look it up together instead of just telling them.",
  passages: [
    { id: "p1", title: "The Life of a Monarch Butterfly", genre: "Informational text",
      paragraphs: [
        ["A monarch butterfly starts life as a tiny egg on a milkweed leaf."],
        ["When the egg hatches, a larva crawls out.", "A monarch larva is also called a caterpillar.", "It eats milkweed leaves and grows bigger and bigger."],
        ["Next, the caterpillar hangs upside down and forms a chrysalis.", "Inside this hard case, its body slowly changes."],
        ["At last, an adult butterfly comes out.", "It spreads its orange and black wings to dry."],
        ["In the fall, many monarchs migrate.", "They fly south to Mexico.", "They spend the winter there in the forests."],
        ["## Glossary"],
        ["Box: chrysalis (noun): the hard outer shell a caterpillar's body forms while it turns into a butterfly.", "larva (noun): a young insect after it hatches from an egg.", "migrate (verb): to move to a new place when the seasons change."]
      ] },
    { id: "p2", title: "How Peanuts Grow", genre: "Informational text",
      paragraphs: [
        ["Georgia grows more peanuts than any other state.", "Peanuts are legumes, just like beans and peas."],
        ["A peanut plant starts as a seed planted in warm soil in the spring.", "Soon, small yellow flowers bloom above the ground."],
        ["After a flower fades, something surprising happens.", "A stem called a peg grows down and pushes into the soil.", "The tip of the peg swells, and a peanut pod forms underground."],
        ["In the fall, farmers use a machine to dig up the plants.", "The machine flips them over so the pods can dry in the sun.", "This is the start of the harvest."],
        ["## Glossary"],
        ["Box: harvest (noun): the gathering of crops when they are ready.", "legume (noun): a plant that grows its seeds in pods, such as beans, peas and peanuts.", "peg (noun): a stem on a peanut plant that grows down into the soil.", "pod (noun): the part of a plant that holds its seeds."]
      ] }
  ],
  practice: [
    { id: "SK-V3d-P1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "A dictionary page has these guide words at the top. Which word would you find on this page?",
      stem: ["Guide words: mitten – mouse"],
      choices: [
        { text: "money", correct: true },
        { text: "milk" },
        { text: "mouth" },
        { text: "mud" }
      ],
      clue: "Compare letter by letter. The word must come AFTER mitten and BEFORE mouse in ABC order. Some words match for three letters, so keep going.",
      why: "The answer is money. M-o comes after m-i, so money is after mitten. Money and mouse both start with m-o, and n comes before u, so money is before mouse. Milk comes before mitten (l is before t). Mouth comes after mouse (t is after s). Mud comes after mouse (u is after o)." },
    { id: "SK-V3d-P2", type: "order", points: 2, dok: 2, passages: [],
      prompt: "Put these words in ABC order.",
      steps: ["star", "stare", "start", "step"],
      orderNote: "Tap the words in ABC order, first to last. Tap a placed word to take it back.",
      clue: "All four words start with s-t. Look at the third letter first. If one word runs out of letters while the others keep going, the shorter word comes first.",
      why: "The order is star, stare, start, step. Star, stare and start begin with s-t-a, and step begins with s-t-e, so step is last. Star runs out of letters first, so it comes before stare and start. Then compare stare and start: the fifth letters are e and t, and e comes first." },
    { id: "SK-V3d-P3", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Read the dictionary entry and the sentence. Which meaning of match is used in the sentence?",
      stem: [
        "match 1. (noun) a short stick that makes a flame when it is rubbed on a rough surface 2. (noun) a game or contest between two players or teams 3. (verb) to go well with something or be the same as it",
        "Sentence: Tia's socks do not match, because one is red and the other is green."
      ],
      text: "In Tia's sentence, match is used with meaning {0}.",
      slots: [
        { options: ["1", "2", "3"], answer: 2 }
      ],
      clue: "Try each meaning in place of match. Which one makes sense when talking about a red sock and a green sock?",
      why: "The answer is 3. Tia's socks are different colors, so they do not go well together or look the same. That is meaning 3. Socks are not a stick that makes a flame or a game between teams." },
    { id: "SK-V3d-P6", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the dictionary entry and the sentence. What does the phrase give up mean in the sentence?",
      stem: [
        "give (verb) 1. to hand something to someone 2. to let someone have something as a present **give up** to stop trying",
        "Sentence: The puzzle had 500 pieces, but Jada did not give up until every piece was in place."
      ],
      choices: [
        { text: "to stop trying", correct: true },
        { text: "to hand something to someone" },
        { text: "to lift something up high" },
        { text: "to let someone have a present" }
      ],
      clue: "Give up is a phrase, so look for it in bold inside the entry for give. Do not add up the meanings of give and up one by one.",
      why: "The answer is to stop trying. The dictionary lists the phrase give up in bold, with its own meaning. Jada kept working until every piece was in place, so she did not stop trying. To hand something over and to let someone have a present are meanings of give by itself, and lifting something up high is a guess from the word up." },
    { id: "SK-V3d-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "The writer wants to add the word milkweed to the glossary. Where should it go so the glossary stays in ABC order?",
      choices: [
        { text: "after migrate", correct: true },
        { text: "before chrysalis" },
        { text: "between chrysalis and larva" },
        { text: "between larva and migrate" }
      ],
      clue: "Milkweed starts with m. Find the other m word in the glossary and compare them letter by letter.",
      why: "The answer is after migrate. Milkweed and migrate both start with m-i. The third letters are l in milkweed and g in migrate. G comes before l, so milkweed goes after migrate, at the end of the glossary." },
    { id: "SK-V3d-P5", type: "hottext", points: 1, dok: 1, passages: [],
      prompt: "Leo is not sure how to spell because. He turns to the dictionary page with the guide words beach – bell and finds the entry. Which spelling will he see?",
      options: ["becuase", "because", "becaus", "beacuse"],
      answer: [1], pick: 1,
      clue: "Say the word slowly: be-cause. Check each spelling letter by letter. Which one has every sound, with the letters in the right order?",
      why: "The answer is because, spelled b-e-c-a-u-s-e. Becuase and beacuse have letters in the wrong order, and becaus is missing the e at the end." },
    { id: "SK-V3d-P7", type: "dropdown", points: 2, dok: 2, passages: [],
      stem: ["Nia's sentence: The woodpecker pecked at the bark of the old oak to find bugs.", "Nia was not sure of the spelling, so she typed barck into a dictionary app."],
      prompt: "Use the dictionary screen. Choose the spelling and the meaning that fit Nia's sentence.",
      figure: { src: "assets/figures/v3d-app-bark.svg", width: 320,
        alt: "A dictionary app screen. The search box says barck. Under it the app asks: Did you mean: bark? The entry shows the word bark, a Hear it button, a Meanings tab and a Synonyms tab, the part of speech noun, and two numbered meanings: 1. the short, loud sound a dog makes. 2. the hard outer covering of a tree trunk." },
      text: "The word is spelled {0}, and in Nia's sentence it means {1}.",
      slots: [
        { options: ["barck", "bark", "barke"], answer: 1 },
        { options: ["the short, loud sound a dog makes", "the hard outer covering of a tree trunk", "a tool that a bird uses to peck wood"], answer: 1 }
      ],
      clue: "First, look under the search box: what spelling does the app suggest? Then read both meanings and ask: what does a woodpecker peck at on an oak?",
      why: "The answers are bark and \"the hard outer covering of a tree trunk.\" The app asked \"Did you mean: bark?\", so barck is not the right spelling, and barke is not shown anywhere. A woodpecker pecks at the hard outer covering of a tree trunk, so the sentence uses meaning 2, not meaning 1, the sound a dog makes. A tool for pecking is not one of the meanings on the screen." }
  ],
  test: [
    { id: "SK-V3d-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "A dictionary page has these guide words at the top. Which word would you find on this page?",
      stem: ["Guide words: candle – cave"],
      choices: [
        { text: "carrot", correct: true },
        { text: "camel" },
        { text: "cabin" },
        { text: "celery" }
      ],
      clue: "All the words start with c. Look at the second letter, then the third, and check that the word is AFTER candle and BEFORE cave.",
      why: "The answer is carrot. Carrot and candle both start with c-a, and r comes after n, so carrot is after candle. Carrot and cave both start with c-a, and r comes before v, so carrot is before cave. Camel and cabin come before candle (m and b are before n). Celery comes after cave (e is after a)." },
    { id: "SK-V3d-T2", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Use the glossary. What is a peg on a peanut plant?",
        choices: [
          { text: "a stem that grows down into the soil", correct: true },
          { text: "a seed that is planted in warm soil" },
          { text: "a yellow flower that blooms in spring" },
          { text: "a machine that digs up the plants" }
        ] },
      partB: { prompt: "Which sentence from the article BEST matches the glossary meaning of peg?",
        choices: [
          { text: "\"A stem called a peg grows down and pushes into the soil.\"", correct: true },
          { text: "\"Soon, small yellow flowers bloom above the ground.\"" },
          { text: "\"In the fall, farmers use a machine to dig up the plants.\"" },
          { text: "\"The machine flips them over so the pods can dry in the sun.\"" }
        ] },
      clue: "Glossary words are in ABC order. Find peg between legume and pod. Then find the paragraph in the article that uses the same word.",
      why: "Part A: a stem that grows down into the soil. Part B: \"A stem called a peg grows down and pushes into the soil.\" The glossary and the article both say a peg is a stem that grows down into the soil." },
    { id: "SK-V3d-T3", type: "order", points: 2, dok: 2, passages: [],
      prompt: "Put these words in ABC order.",
      steps: ["plan", "plane", "planet", "plant"],
      orderNote: "Tap the words in ABC order, first to last. Tap a placed word to take it back.",
      clue: "All four words start with p-l-a-n. When one word runs out of letters, it comes first. Then compare the next letter of the others.",
      why: "The order is plan, plane, planet, plant. Plan is the shortest and runs out of letters first. Plane, planet and plant come next. Plane and planet both start with p-l-a-n-e, and plane runs out first. Planet has e as its fifth letter and plant has t, and e comes before t." },
    { id: "SK-V3d-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the dictionary entry and the sentence. Which meaning of pick is used in the sentence?",
      stem: [
        "pick 1. (verb) to choose 2. (verb) to pull a fruit or flower off a plant 3. (noun) a tool with a pointed metal end, used to break up hard ground 4. (noun) a small, flat piece used to play a guitar",
        "Sentence: Grandpa reached up and gave a gentle tug to pick a peach off the branch."
      ],
      choices: [
        { text: "to pull a fruit or flower off a plant", correct: true },
        { text: "to choose" },
        { text: "a tool with a pointed metal end" },
        { text: "a small, flat piece used to play a guitar" }
      ],
      clue: "Look at what Grandpa does with his hands, and where the peach is. Then try each meaning in place of pick.",
      why: "The answer is \"to pull a fruit or flower off a plant.\" Grandpa gave a gentle tug to get the peach off the branch. A peach is a fruit, and he pulled it off the tree. In this sentence pick is an action, so it cannot be a tool or a guitar piece." },
    { id: "SK-V3d-T6", type: "mc", points: 1, dok: 2, passages: [],
      stem: ["Mateo's sentence: My sister is so ____ that she read a whole chapter book in one day.", "He is not sure how to spell the word he wants, so he types brite into a dictionary app."],
      prompt: "Use the dictionary screen. Which spelling and meaning should Mateo use?",
      figure: { src: "assets/figures/v3d-app-bright.svg", width: 320,
        alt: "A dictionary app screen. The search box says brite. Under it the app asks: Did you mean: bright? The entry shows the word bright, a Hear it button, a Meanings tab and a Synonyms tab, the part of speech adjective, and two numbered meanings: 1. full of light; shining. 2. smart and quick to learn." },
      choices: [
        { text: "bright, with meaning 2", correct: true },
        { text: "bright, with meaning 1" },
        { text: "brite, with meaning 2" },
        { text: "brite, with meaning 1" }
      ],
      clue: "Check two things on the screen: the spelling the app suggests under the search box, and the meaning that fits a sister who reads a whole book in one day.",
      why: "The answer is bright, with meaning 2. The app asked \"Did you mean: bright?\", so brite is not the right spelling. A sister who reads a chapter book in one day is smart and quick to learn. She is not full of light, so meaning 1 does not fit." },
    { id: "SK-V3d-T7", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the dictionary entry and the sentence. What does ran out of mean in the sentence?",
      stem: [
        "run (verb) 1. to move fast on your feet 2. to be in charge of something **run out of** to use up all of something so none is left",
        "Sentence: We ran out of glue, so we could not finish the poster."
      ],
      choices: [
        { text: "used up all of", correct: true },
        { text: "moved fast away from" },
        { text: "was in charge of" },
        { text: "hurried outside with" }
      ],
      clue: "Ran is a form of run. Find the phrase in bold inside the entry for run, then try its meaning in the sentence.",
      why: "The answer is used up all of. Ran out of is the past form of the phrase run out of, which the entry lists in bold: to use up all of something so none is left. With no glue left, they could not finish the poster. Moving fast and being in charge are meanings of run by itself, and hurrying outside is a guess from the word out." }
  ]
});

PP.addLesson({
  code: "3.L.V.3.e",
  title: "Choosing the most exact word",
  teach: {
    big: "Good writers choose exact words so readers can see, hear and feel just what they mean.",
    points: [
      "Plain words like good, nice, big, went and said tell only a little. Exact words tell a lot.",
      "Change a plain verb to an exact one that shows how something was done: went could become hurried, tiptoed or raced.",
      "Change a plain describing word to an exact one: nice could become friendly, cozy or delicious.",
      "Use the details in your sentence to pick the word that fits. If the sentence says \"quietly,\" a word like shouted does not fit.",
      "Reread your sentence. Ask: Does this word show exactly what I mean?"
    ],
    words: [
      { term: "exact word", means: "a word that tells just what you mean, with more detail than a plain word" }
    ],
    example: {
      label: "Plain and exact",
      lines: ["Plain: The dog ate the food.", "Exact: The hungry beagle gulped down its dinner."],
      note: "Gulped shows how the dog ate. Beagle tells what kind of dog. Hungry and dinner add more detail, so the reader can picture it."
    },
    tip: "On the test, you may read a student's draft and choose the word that makes a sentence clearer or more exact. Pick the word that fits the details already in the draft."
  },
  learn: [
    {
      show: ["Mia said, \"Watch out for the ball!\" as it flew toward her brother's head."],
      ask: "Which word is more exact than said: shouted, whispered or asked?",
      steps: [
        "Find the details. A ball is flying at someone's head, and Mia is warning him.",
        "Think about how a person sounds when she warns someone fast. She would be loud.",
        "Whispered is too quiet, and asked is for a question. Shouted shows a loud, quick warning."
      ],
      answer: "Shouted is the most exact word: Mia shouted, \"Watch out for the ball!\""
    },
    {
      show: ["Grandma's peach cobbler was good."],
      ask: "Which word tells more exactly how the cobbler tasted: delicious, kind or tidy?",
      steps: [
        "Good is a plain word. Ask what about the cobbler you want to tell: how it tasted.",
        "Kind tells about people, and tidy tells about rooms. Neither tells about taste.",
        "Delicious means it tasted very good, so it fits a food."
      ],
      answer: "Delicious: \"Grandma's peach cobbler was delicious.\""
    }
  ],
  write: {
    prompt: "Write 3 or 4 sentences about a time you played outside or ate a food you love. Then find two plain words, like good, nice, big, went or said. Change each one to a more exact word.",
    checklist: [
      "I used at least one exact verb that shows how something moved or was done.",
      "I used at least one exact describing word that tells how something looked, sounded, felt or tasted.",
      "I changed two plain words into more exact words.",
      "I read my sentences again to check that each word fits the details."
    ],
    rows: 6
  },
  parent: "When your child tells you about their day, pick out one plain word (\"It was fun,\" \"We went outside\") and ask, \"Can you find a more exact word?\" Keep a short list of exact words on the fridge to borrow when writing.",
  passages: [
    { id: "p1", draft: true, title: "A Day at the Aquarium", byline: "Malik's first draft", genre: "Student draft (narrative)",
      paragraphs: [
        ["(1) Last Saturday, my family visited the aquarium in Atlanta.", "(2) The first tank we saw was big, and it went all the way up to the ceiling.", "(3) A whale shark moved slowly past the glass, gently waving its giant tail."],
        ["(4) Next, we walked through a tunnel with water all around us.", "(5) Small silver fish went by quickly in a group, all turning at the same time.", "(6) My little brother said, \"Look, a stingray!\" so loudly that people turned to stare."],
        ["(7) At the touch tank, I put two fingers on a stingray's back.", "(8) Its skin felt nice.", "(9) It was a fun day, and I can't wait to go back."]
      ] },
    { id: "p2", draft: true, title: "Our Backyard Garden", byline: "Sofia's first draft", genre: "Student draft (narrative)",
      paragraphs: [
        ["(1) This spring, my family planted a garden in our backyard.", "(2) We dug holes in the dirt and put in tomato and pepper plants.", "(3) Every morning, we gave the plants water."],
        ["(4) One night, a big storm came, and the wind was really bad.", "(5) Rain came down so hard that it made puddles all over the yard."],
        ["(6) The next morning, we went outside to check on our garden.", "(7) Some of the tomato plants were bent over, but none of them were broken.", "(8) Dad helped us tie them to sticks so they would stand up straight."],
        ["(9) By summer, we picked our first red tomatoes, and they tasted good."]
      ] }
  ],
  practice: [
    { id: "SK-V3e-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Malik wants a more exact verb in sentence 3. Which word should replace moved?",
      choices: [
        { text: "glided", correct: true },
        { text: "rushed" },
        { text: "stomped" },
        { text: "bounced" }
      ],
      clue: "Look for details in sentence 3 about how the whale shark moved. Is it fast or slow? Rough or smooth?",
      why: "The answer is glided. To glide is to move slowly and smoothly. Sentence 3 says the whale shark moved slowly and gently waved its tail. Rushed is too fast, and stomped and bounced do not fit a fish swimming smoothly." },
    { id: "SK-V3e-P2", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Choose the most exact verb to replace went in sentence 5.",
      text: "Small silver fish {0} by quickly in a group, all turning at the same time.",
      slots: [
        { options: ["crawled", "wandered", "darted"], answer: 2 }
      ],
      clue: "Sentence 5 tells how fast the fish moved. Which verb matches that speed?",
      why: "The answer is darted. To dart is to move suddenly and quickly. The fish went by quickly and all turned at once. Crawled and wandered are slow, so they do not fit." },
    { id: "SK-V3e-P3", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Malik wants to replace one plain describing word with thrilling, which means very exciting. Choose the sentence where thrilling fits best.",
      targets: ["p1:1:2", "p1:1:3", "p1:2:1", "p1:2:2", "p1:2:3", "p1:3:1", "p1:3:2", "p1:3:3"],
      answer: ["p1:3:3"], pick: 1,
      clue: "Find each plain describing word in the draft. Try thrilling in its place. Does the sentence still make sense and tell more exactly what Malik meant?",
      why: "The answer is \"(9) It was a fun day, and I can't wait to go back.\" Thrilling can replace fun to show how exciting the day was. In sentence 2, big is about size, and in sentence 8, nice is about how skin feels, so thrilling does not fit there." },
    { id: "SK-V3e-P4", type: "ms", points: 2, dok: 2, passages: ["p1"],
      prompt: "Malik wants to replace nice in sentence 8 with a word that tells exactly how the stingray's skin felt. Which TWO words could he use?",
      pick: 2,
      choices: [
        { text: "smooth", correct: true },
        { text: "slippery", correct: true },
        { text: "friendly" },
        { text: "pretty" },
        { text: "shiny" }
      ],
      clue: "The sentence is about touching. Which words tell how something feels under your fingers?",
      why: "The answers are smooth and slippery. Both tell how something feels when you touch it. Friendly tells about how someone acts. Pretty and shiny tell how something looks, not how it feels." },
    { id: "SK-V3e-P5", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Choose the most exact word to replace big in sentence 2.",
      text: "The first tank we saw was {0}, and it went all the way up to the ceiling.",
      slots: [
        { options: ["wide", "towering", "long"], answer: 1 }
      ],
      clue: "All three words can describe something big. Read the rest of sentence 2. Which way was the tank big?",
      why: "The answer is towering. Towering means very tall, and the detail in sentence 2 is about height: the tank went all the way up to the ceiling. Wide and long tell about size from side to side, not how tall something is." }
  ],
  test: [
    { id: "SK-V3e-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which word should replace bad in sentence 4 to describe the wind more exactly?",
      choices: [
        { text: "fierce", correct: true },
        { text: "steady" },
        { text: "sticky" },
        { text: "gentle" }
      ],
      clue: "Sentence 4 tells about a big storm. What kind of wind comes with a big storm?",
      why: "The answer is fierce. Fierce wind is very strong and wild, which matches a big storm and the word bad. Steady wind blows evenly, gentle wind is calm, and sticky tells how air feels on your skin, not how strong wind is." },
    { id: "SK-V3e-T2", type: "dropdown", points: 1, dok: 2, passages: ["p2"],
      prompt: "Choose the most exact verb to replace came down in sentence 5.",
      text: "Rain {0} down so hard that it made puddles all over the yard.",
      slots: [
        { options: ["dripped", "sprinkled", "poured"], answer: 2 }
      ],
      clue: "The rain fell so hard it made puddles all over. Which word shows a lot of rain falling fast?",
      why: "The answer is poured. When rain pours, a lot falls very hard and fast. That matches puddles all over the yard. Dripped and sprinkled describe only a little rain." },
    { id: "SK-V3e-T3", type: "ms", points: 2, dok: 2, passages: ["p2"],
      prompt: "Sofia wants to replace good in sentence 9 with words that tell exactly how the tomatoes tasted or felt to eat. Which TWO words could she use?",
      pick: 2,
      choices: [
        { text: "sweet", correct: true },
        { text: "juicy", correct: true },
        { text: "red" },
        { text: "round" },
        { text: "tall" }
      ],
      clue: "Sentence 9 is about taste. Which words tell what you notice when you bite into a tomato?",
      why: "The answers are sweet and juicy. Sweet tells how a tomato tastes, and juicy tells what it is like to bite into it. Red and round tell how it looks, and tall does not describe a tomato at all." },
    { id: "SK-V3e-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which revision of sentence 6 uses the most exact verb?",
      choices: [
        { text: "The next morning, we hurried outside to check on our garden.", correct: true },
        { text: "The next morning, we got outside to check on our garden." },
        { text: "The next morning, we came outside to check on our garden." },
        { text: "The next morning, we were outside to check on our garden." }
      ],
      clue: "After a big storm, the family would want to check the garden fast. Which verb shows HOW they went, not just that they went?",
      why: "The answer is \"The next morning, we hurried outside to check on our garden.\" Hurried shows they went quickly, which makes sense after a big storm. Got, came and were are plain words that do not show how they moved." },
    { id: "SK-V3e-T5", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "In one sentence, Sofia could use the exact verb watered to say the same thing in fewer words. Choose that sentence.",
      targets: ["p2:1:1", "p2:1:2", "p2:1:3", "p2:2:1", "p2:2:2", "p2:3:1", "p2:3:2", "p2:3:3"],
      answer: ["p2:1:3"], pick: 1,
      clue: "Watered means to give water to something. Look for a sentence that uses several words to say that.",
      why: "The answer is \"(3) Every morning, we gave the plants water.\" Sofia could write \"Every morning, we watered the plants.\" One exact verb says the same thing as \"gave ... water.\"" }
  ]
});

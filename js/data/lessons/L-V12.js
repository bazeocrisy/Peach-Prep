/* Lessons: 3-5.L.V.1 General, academic & specialized vocabulary and 3-5.L.V.2 Word analysis. Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.L.V.1.a",
  title: "Learning new school words from what you read",
  teach: {
    big: "When I meet a new school word, I keep reading, because the words around it often tell me what it means.",
    points: [
      "Some new words are school words you use in every subject, like describe, compare and explain.",
      "Other new words belong to one subject, like habitat in science or citizen in social studies. Some new ideas are phrases, a small group of words that have one meaning together, like food chain.",
      "Authors often explain a new word right away. Look for helper words such as is called, means, is a, or a meaning set off by commas.",
      "If the author does not explain the word, read the next sentence. It may tell what the thing does or give examples of it. The clue can also come in the sentences just before the word.",
      "Try your meaning in the sentence. If it makes sense, you figured out the word."
    ],
    words: [
      { term: "academic word", means: "a school word you use in many subjects, like describe or compare" },
      { term: "content word", means: "a word that belongs to one subject, like habitat in science (also called a specialized word)" },
      { term: "definition", means: "the meaning of a word" }
    ],
    examples: [
      {
        label: "Example: a word",
        lines: ["Bees carry pollen, a fine powder made by flowers, from one flower to the next."],
        note: "Pollen is a science word. The words between the commas, a fine powder made by flowers, tell you what it means right away."
      },
      {
        label: "Example: a phrase",
        lines: ["Grass is eaten by a rabbit. The rabbit is eaten by a fox. This path of who eats what is called a food chain."],
        note: "Food chain is a phrase, so read the two words as one idea. The sentences just before it show the path, and the helper words is called give the name."
      }
    ],
    tip: "On the test, a question may ask what a science or social studies word or phrase means in a passage. The help is usually in the same sentence or the ones right next to it, so read around the word."
  },
  learn: [
    {
      show: ["Many towns have volunteers. A volunteer is a person who helps out without getting paid. Volunteers might pick up trash in a park or read to children at the library."],
      ask: "What does volunteer mean?",
      steps: [
        "Look for helper words right after the new word. The words is a come next.",
        "Read what comes after is a: a person who helps out without getting paid.",
        "Check with the examples. Picking up trash and reading to children are ways to help out."
      ],
      answer: "A volunteer is a person who helps out without getting paid."
    },
    {
      show: ["Some animals are nocturnal. They sleep during the day and look for food at night. Owls and bats are nocturnal animals."],
      ask: "What does nocturnal mean?",
      steps: [
        "The first sentence does not explain the word, so read the next sentence.",
        "The next sentence tells what these animals do: they sleep in the day and find food at night.",
        "The examples fit too. Owls and bats are both awake at night."
      ],
      answer: "Nocturnal means awake and active at night and asleep during the day."
    },
    {
      show: ["Sequoyah was a Cherokee man who made a syllabary for his people. In a syllabary, each symbol stands for a syllable, or one beat in a word. With it, the Cherokee could read and write their own language."],
      ask: "What is a syllabary?",
      steps: [
        "This is a social studies word. Look for the sentence that starts with In a syllabary.",
        "That sentence says each symbol stands for a syllable. The words after the comma tell you a syllable is one beat in a word.",
        "The last sentence tells what it was for: reading and writing."
      ],
      answer: "A syllabary is a set of symbols for writing, where each symbol stands for one beat in a word."
    }
  ],
  parent: "When your child reads a science or social studies book, stop at one new word and ask, \"What sentence helps you know what it means?\" Let your child point to it before you look the word up together.",
  passages: [
    { id: "p1", title: "Life in the Salt Marsh", genre: "Informational text",
      paragraphs: [
        ["Along the coast of Georgia, there are wide, flat salt marshes.", "A salt marsh is wet, grassy land where the ocean meets the land.", "Twice a day, the tide comes in and covers the marsh with salty water.", "Then the tide goes out again."],
        ["The salt marsh is a habitat for many animals.", "A habitat is the place where an animal finds the food, water and shelter it needs.", "Fiddler crabs dig small holes in the mud.", "They hide in their burrows when the water rises."],
        ["Some animals in the marsh are predators.", "They hunt other animals for food.", "A tall heron stands very still in the shallow water.", "The water is so low that it barely covers the bird's feet.", "When a fish swims by, the heron grabs it with its sharp beak."],
        ["Marsh grass has a special way to survive in salty water.", "It gets rid of extra salt through its leaves.", "Sometimes you can see tiny white bits of salt on the grass."],
        ["Scientists compare the marsh in summer and in winter.", "They look for what stays the same and what is different.", "The grass is green and tall in summer, but it turns brown in winter."]
      ] },
    { id: "p2", title: "Where Does Rain Come From?", genre: "Informational text",
      paragraphs: [
        ["Water on Earth moves in a big circle called the water cycle.", "The same water is used again and again."],
        ["First, the sun warms water in oceans, lakes and puddles.", "The water turns into a gas called water vapor and rises into the air.", "This change is called evaporation.", "You cannot see water vapor, but it is all around you."],
        ["High in the sky, the air is cold.", "The cold air cools the water vapor, and it turns back into tiny drops of water.", "This change is called condensation.", "Many of these tiny drops crowd together to make a cloud."],
        ["When the drops in a cloud join and get too heavy, they fall to the ground.", "Water that falls from clouds is called precipitation.", "Rain, snow, sleet and hail are all kinds of precipitation."],
        ["Some of the water soaks into the ground.", "Much of it flows into rivers, lakes and oceans.", "Then the cycle begins again."],
        ["Weather scientists study clouds and wind every day.", "This helps them predict rain.", "They can tell us a day or two ahead that a storm is coming, so we know to bring an umbrella."]
      ] },
    /* B5-b5b:passages:start */
    {
      id: "p3",
      title: "The Trading Post",
      genre: "Informational text",
      paragraphs: [
        [
          "Long ago in Georgia, people did not always use money.",
          "Instead, many went to a trading post.",
          "A trading post was a store where people traded goods, or things that are made, grown or caught."
        ],
        [
          "A hunter might bring deerskins to the post.",
          "The trader gave him cloth and a metal pot in return.",
          "This kind of trading is called barter.",
          "Nobody pays with coins when they barter."
        ],
        [
          "Many posts stood beside rivers, because boats could carry heavy loads easily.",
          "Even so, a trip to the post could take many days.",
          "Travelers had to be patient.",
          "They stayed calm and waited for the weather to clear."
        ],
        [
          "Deerskins were very valuable.",
          "One skin could buy a warm blanket."
        ],
        [
          "Today, you can still barter.",
          "Two friends might swap a baseball card for a book, with no money at all."
        ]
      ]
    },
    {
      id: "p4",
      title: "Life on a Fallen Log",
      genre: "Informational text",
      paragraphs: [
        [
          "A fallen log may look dead, but it is full of life.",
          "Beetles chew tunnels in its soft wood.",
          "Spiders and ants hide in the cracks of its bark."
        ],
        [
          "Some small animals on the log are decomposers.",
          "They break down dead plants and animals into tiny bits.",
          "These bits go back into the soil and help new plants grow."
        ],
        [
          "Moss grows best where the air is damp.",
          "The cool, shady side of the log stays a little wet all day.",
          "Green moss covers that side like a soft rug."
        ]
      ]
    },
    {
      id: "p5",
      title: "Gold in the Georgia Hills",
      genre: "Informational text",
      paragraphs: [
        [
          "In 1828, a man found gold near Dahlonega, a town in the hills of north Georgia.",
          "News spread fast.",
          "Soon thousands of people hurried there to hunt for gold."
        ],
        [
          "A person who searches for gold is called a prospector.",
          "Many prospectors scooped gravel and water into a metal pan.",
          "They swirled the pan.",
          "The heavy gold sank to the bottom, and the light gravel washed away.",
          "This was called panning for gold."
        ],
        [
          "The prospectors were eager to find gold, so they worked from sunrise to sunset.",
          "Large nuggets, or lumps of gold, were rare.",
          "Most prospectors found only a few tiny bits, and many went home with little."
        ],
        [
          "Today, visitors can pan for gold in Dahlonega too."
        ]
      ]
    }
    /* B5-b5b:passages:end */
  ],
  practice: [
    { id: "SK-V1a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read paragraph 2. What does the word burrows mean?",
      choices: [
        { text: "holes that animals dig to live in", correct: true },
        { text: "piles of grass that float on water" },
        { text: "animals that hunt other animals" },
        { text: "deep pools of salty ocean water" }
      ],
      clue: "Read the sentence just before the one with burrows. What do the crabs make in the mud?",
      why: "The answer is \"holes that animals dig to live in.\" The sentence before says fiddler crabs dig small holes in the mud. Then they hide in their burrows, so burrows are those holes." },
    { id: "SK-V1a-P2", type: "hottext", points: 1, dok: 1, passages: ["p1"],
      prompt: "Which sentence tells what the word habitat means? Choose the sentence in the passage.",
      targets: ["p1:2:1", "p1:2:2", "p1:2:3", "p1:2:4", "p1:3:1"],
      answer: ["p1:2:2"], pick: 1,
      clue: "Authors often explain a new word with helper words such as is a or is the. Which sentence tells what a habitat is, not just that the marsh is one?",
      why: "The answer is \"A habitat is the place where an animal finds the food, water and shelter it needs.\" The words is the place tell you the meaning. The first sentence uses the word but does not explain it." },
    { id: "SK-V1a-P3", type: "ebsr", points: 2, dok: 2, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does the word tide mean in paragraph 1?",
        choices: [
          { text: "ocean water that moves in and out each day", correct: true },
          { text: "a strong wind that blows across the marsh" },
          { text: "tall grass that grows in salty water" },
          { text: "a storm that floods the land once a year" }
        ] },
      partB: { prompt: "Which sentence from the passage best helps you know what tide means?",
        choices: [
          { text: "\"Twice a day, the tide comes in and covers the marsh with salty water.\"", correct: true },
          { text: "\"Along the coast of Georgia, there are wide, flat salt marshes.\"" },
          { text: "\"A salt marsh is wet, grassy land where the ocean meets the land.\"" },
          { text: "\"It gets rid of extra salt through its leaves.\"" }
        ] },
      clue: "Find the sentences in paragraph 1 that use the word tide. What does the tide do, and how often?",
      why: "Part A: ocean water that moves in and out each day. Part B: \"Twice a day, the tide comes in and covers the marsh with salty water.\" The tide comes in twice a day and then goes out again, so it is ocean water moving in and out. The sentence about the salt marsh explains a different word." },
    { id: "SK-V1a-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read paragraph 4. What does the word survive mean?",
      choices: [
        { text: "to stay alive", correct: true },
        { text: "to turn white" },
        { text: "to grow very tall" },
        { text: "to move to a new place" }
      ],
      clue: "Salty water can be hard on a plant. Read the next sentence to see what the grass does about the salt, and why that would help it.",
      why: "The answer is \"to stay alive.\" Marsh grass gets rid of extra salt so it can keep living in salty water. The white bits are salt on the grass, not the grass turning white." },
    { id: "SK-V1a-P5", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read paragraph 5. What does the word compare mean?",
      choices: [
        { text: "to look at how things are alike and different", correct: true },
        { text: "to visit the same place many times" },
        { text: "to draw a picture of a place" },
        { text: "to count the animals in a place" }
      ],
      clue: "Read the sentence right after the one with compare. What do the scientists look for?",
      why: "The answer is \"to look at how things are alike and different.\" The next sentence says the scientists look for what stays the same and what is different. The scientists do go to the marsh in two seasons, but compare means looking for what is alike and different, not just visiting. Compare is a school word you will use in every subject, not only in science." }
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
            ref: "SK-V1a-P4"
          },
          {
            ref: "SK-V1a-P5"
          },
          {
            id: "SK-V1a-C03",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.1.a"
            ],
            passages: [
              "p1"
            ],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "What does predators mean as it is used in paragraph 3?",
              choices: [
                {
                  text: "animals that catch other animals to eat",
                  correct: true
                },
                {
                  text: "animals that hide in the mud when the tide rises"
                },
                {
                  text: "animals that eat only the grass in the marsh"
                },
                {
                  text: "animals that live in salty water all year long"
                }
              ]
            },
            partB: {
              prompt: "Which sentence from the passage BEST supports the answer to Part A?",
              choices: [
                {
                  text: "\"They hunt other animals for food.\"",
                  correct: true
                },
                {
                  text: "\"The water is so low that it barely covers the bird's feet.\""
                },
                {
                  text: "\"Fiddler crabs dig small holes in the mud.\""
                },
                {
                  text: "\"The grass is green and tall in summer, but it turns brown in winter.\""
                }
              ]
            },
            clue: "Read around a new word. The author may tell you what it means in the same sentence or in the next one.",
            hints: [
              "Read around a new word. The author may tell you what it means in the same sentence or in the next one.",
              "Find predators in paragraph 3 and read the whole paragraph. Ask what those animals do.",
              "The sentence about the low water tells where a heron stands, not what a predator is. Check the other choices."
            ],
            how: [
              "Find the word: \"Some animals in the marsh are predators.\" This sentence does not say what the word means.",
              "Read the next sentence: \"They hunt other animals for food.\" The word They stands for the predators, so predators are animals that hunt other animals to eat.",
              "Part A: animals that catch other animals to eat. Part B: \"They hunt other animals for food.\"",
              "The low water and the crab holes are about other things in the marsh."
            ],
            misconception: "A common mix-up is choosing a detail about the heron or the water. The meaning is in the sentence right after the word.",
            why: "Part A: animals that catch other animals to eat. Part B: \"They hunt other animals for food.\" The sentence after the word tells what predators do. The sentence about the low water tells where the heron stands, and the crab sentence is about burrows."
          },
          {
            id: "SK-V1a-C04",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.1.a"
            ],
            passages: [],
            prompt: "Read the paragraph. What does the phrase gives off mean?",
            stem: [
              "On a cold night, a campfire gives off heat and light. Even from a few steps away, you can feel the warmth on your face and see the glow on the trees."
            ],
            choices: [
              {
                text: "sends out into the air",
                correct: true
              },
              {
                text: "soaks up from the air"
              },
              {
                text: "hands over to a friend"
              },
              {
                text: "puts out and stops"
              }
            ],
            clue: "A group of words can have its own meaning, like a single word. Think about what the whole group tells you is happening.",
            hints: [
              "A group of words can have its own meaning, like a single word. Think about what the whole group tells you is happening.",
              "Read the sentence with the phrase, and then the next sentence. Where do the warmth and the glow reach?",
              "Think about which way the heat and light move: toward the fire or away from it."
            ],
            how: [
              "The first sentence says a campfire gives off heat and light.",
              "The next sentence says you can feel the warmth and see the glow from a few steps away. The heat and light travel out from the fire to you.",
              "So gives off means sends out into the air.",
              "The fire is not soaking anything up, handing it to a friend or stopping."
            ],
            misconception: "A common mix-up is reading give and off as two separate words. Together they mean something different.",
            why: "The answer is \"sends out into the air.\" The heat and light reach people a few steps away, so they travel out from the fire. The fire does not soak them up, hand them to a friend or put them out."
          },
          {
            id: "SK-V1a-C05",
            type: "hottext",
            points: 1,
            dok: 3,
            std: [
              "3.L.V.1.a"
            ],
            passages: [
              "p1"
            ],
            prompt: "Jonah says the word shallow in paragraph 3 means full of fish. Choose the sentence that shows Jonah is wrong.",
            targets: [
              "p1:3:2",
              "p1:3:3",
              "p1:3:4",
              "p1:3:5"
            ],
            answer: [
              "p1:3:4"
            ],
            pick: 1,
            clue: "To check what someone says a word means, look for a sentence that gives a clue about the word. Does the clue fit what he says?",
            hints: [
              "To check what someone says a word means, look for a sentence that gives a clue about the word. Does the clue fit what he says?",
              "Find the sentence that uses shallow. Read it and the sentence after it. What does the author tell you about the water?",
              "The sentence about the fish tells what the heron does. It does not tell how deep the water is. Look at the other sentences."
            ],
            how: [
              "Find shallow: \"A tall heron stands very still in the shallow water.\" This sentence does not say what shallow means.",
              "Read the sentence after it: \"The water is so low that it barely covers the bird's feet.\" Water that barely covers feet is not deep.",
              "That sentence shows shallow means not deep, so it shows Jonah is wrong. The sentence about the fish names fish but says nothing about how deep the water is."
            ],
            misconception: "A common mix-up is choosing the sentence that has the word fish in it. A clue must tell what the word means, not just match Jonah's words.",
            why: "The answer is \"The water is so low that it barely covers the bird's feet.\" Water that barely covers a bird's feet is not deep, so shallow means not deep. The sentence about the fish only tells what the heron does."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-V1a-C06",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.1.a"
            ],
            passages: [
              "p3"
            ],
            prompt: "What does the word barter mean in paragraph 2?",
            choices: [
              {
                text: "to trade things without using money",
                correct: true
              },
              {
                text: "to sell goods for a higher price"
              },
              {
                text: "to pay with coins at a store"
              },
              {
                text: "to give something away as a gift"
              }
            ],
            clue: "The words around a new word can tell what it means. Look at what the sentences before and after it say.",
            hints: [
              "The words around a new word can tell what it means. Look at what the sentences before and after it say.",
              "Read the sentence with barter and the sentence after it. What do they say about money?",
              "A gift is given for nothing, but the hunter gets cloth and a pot back for his deerskins. Check the other choices."
            ],
            how: [
              "Find barter: \"This kind of trading is called barter.\" Before it, a hunter brings deerskins and the trader gives him cloth and a pot.",
              "Read the sentence after it: \"Nobody pays with coins when they barter.\" So barter is trading with no money.",
              "The answer is \"to trade things without using money.\"",
              "The hunter does not pay coins, and he does not get something for nothing."
            ],
            misconception: "A common mix-up is choosing a meaning about buying or selling. In barter, nobody pays coins.",
            why: "The answer is \"to trade things without using money.\" The hunter gives deerskins and gets cloth and a pot, and the next sentence says nobody pays with coins. Selling and paying with coins both use money. A gift is given for nothing in return."
          },
          {
            id: "SK-V1a-C07",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.1.a"
            ],
            passages: [
              "p3"
            ],
            prompt: "Choose the meaning of each phrase from the passage.",
            text: "In paragraph 1, a trading post is {0}. In paragraph 2, in return means {1}.",
            slots: [
              {
                options: [
                  "a stop where travelers rest for the night",
                  "a store where people trade goods",
                  "a boat that carries heavy loads"
                ],
                answer: 1
              },
              {
                options: [
                  "on the trip back home",
                  "at the very same time",
                  "in exchange for it"
                ],
                answer: 2
              }
            ],
            clue: "Some words work together as a group. Read the whole group of words as one idea, then check it in the sentence.",
            hints: [
              "Some words work together as a group. Read the whole group of words as one idea, then check it in the sentence.",
              "For each blank, find the group of words in the passage. Read the words right before and right after it.",
              "For the second blank, think about who gave something first and who gave something after. Does anyone go back anywhere?"
            ],
            how: [
              "Blank one: paragraph 1 says \"A trading post was a store where people traded goods.\" The words right after the phrase tell what it is.",
              "Blank two: the hunter brings deerskins, and the trader gave him cloth and a pot in return. The cloth and pot are what he gets for the deerskins.",
              "So in return means in exchange for it. The hunter is not going back home, and the trades do not happen at the same time."
            ],
            misconception: "A common mix-up is reading in return as going back, because return can mean go back. Here it means one thing is given for another.",
            why: "The answers are \"a store where people trade goods\" and \"in exchange for it.\" Paragraph 1 says a trading post was a store where people traded goods. In paragraph 2 the trader gives cloth and a pot for the deerskins. A resting stop and a boat are not what the passage says, and nobody goes back home."
          },
          {
            id: "SK-V1a-C08",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.1.a"
            ],
            passages: [
              "p3"
            ],
            prompt: "Which TWO groups of words from paragraph 3 help you know what patient means?",
            pick: 2,
            choices: [
              {
                text: "stayed calm",
                correct: true
              },
              {
                text: "waited for the weather to clear",
                correct: true
              },
              {
                text: "Travelers had to be"
              },
              {
                text: "stood beside rivers"
              },
              {
                text: "carry heavy loads easily"
              }
            ],
            clue: "Words that tell what people do or feel can show a word's meaning. Look for words that describe how the people acted.",
            hints: [
              "Words that tell what people do or feel can show a word's meaning. Look for words that describe how the people acted.",
              "Read all of paragraph 3. Which parts tell what the travelers did, and which parts only tell about the posts or the boats?",
              "Words about where the posts stood are about a place. They do not tell what the travelers were like. Look at what is left."
            ],
            how: [
              "Read paragraph 3 and find who must be patient: the travelers.",
              "Look for what the travelers did. They \"stayed calm\" and \"waited for the weather to clear.\"",
              "Those two groups of words show patient means staying calm while you wait.",
              "\"Travelers had to be\" holds the word but gives no meaning. The words about the posts and the boats do not tell about the travelers."
            ],
            misconception: "A common mix-up is choosing the group of words that holds the new word. That group names the word but does not explain it.",
            why: "The answers are \"stayed calm\" and \"waited for the weather to clear.\" They tell what the travelers did, so they show patient means able to wait calmly. \"Travelers had to be\" does not explain the word. \"Stood beside rivers\" and \"carry heavy loads easily\" are about the posts and the boats."
          },
          {
            id: "SK-V1a-C09",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.1.a"
            ],
            passages: [
              "p3"
            ],
            prompt: "How does the author help you understand the word goods in paragraph 1?",
            choices: [
              {
                text: "It explains the word right after it, using the word or.",
                correct: true
              },
              {
                text: "It lists deerskins and cloth as examples of goods."
              },
              {
                text: "It uses a word that means the opposite of goods."
              },
              {
                text: "It tells a story about a trader who sold goods."
              }
            ],
            clue: "Authors can help readers with a new word in different ways. Ask what this author does.",
            hints: [
              "Authors can help readers with a new word in different ways. Ask what this author does.",
              "Find the sentence with goods in paragraph 1. Look at the words that come with the word.",
              "The deerskins and the cloth appear in paragraph 2, not in this sentence. Check the other choices against the sentence."
            ],
            how: [
              "Find goods in paragraph 1: \"A trading post was a store where people traded goods, or things that are made, grown or caught.\"",
              "After goods comes a comma and the word or. The words after or say what goods are: things that are made, grown or caught.",
              "So the author gives the meaning right after the word.",
              "There is no list of examples in that sentence, no opposite word and no story."
            ],
            misconception: "A common mix-up is choosing examples, because deerskins and cloth appear later. The sentence with goods gives a meaning, not examples.",
            why: "The answer is \"It explains the word right after it, using the word or.\" The words after or tell what goods are. Deerskins and cloth come later, in paragraph 2. The sentence has no word with the opposite meaning and no story about a trader."
          },
          {
            id: "SK-V1a-C10",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.1.a"
            ],
            passages: [
              "p3"
            ],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "What does the word valuable mean in paragraph 4?",
              choices: [
                {
                  text: "worth a lot",
                  correct: true
                },
                {
                  text: "soft and warm"
                },
                {
                  text: "easy to find"
                },
                {
                  text: "very old"
                }
              ]
            },
            partB: {
              prompt: "Which sentence from the passage BEST helps you know what valuable means?",
              choices: [
                {
                  text: "\"One skin could buy a warm blanket.\"",
                  correct: true
                },
                {
                  text: "\"Deerskins were very valuable.\""
                },
                {
                  text: "\"A hunter might bring deerskins to the post.\""
                },
                {
                  text: "\"Even so, a trip to the post could take many days.\""
                }
              ]
            },
            clue: "Sometimes a word is explained by what happens next. Ask what the author tells you about the thing right after the new word.",
            hints: [
              "Sometimes a word is explained by what happens next. Ask what the author tells you about the thing right after the new word.",
              "Find valuable in paragraph 4 and read the whole paragraph. What could one skin do?",
              "The sentence that holds the word valuable only repeats it, so it cannot explain it. Check the other three."
            ],
            how: [
              "Find the word: \"Deerskins were very valuable.\" This sentence does not say what valuable means.",
              "Read the next sentence: \"One skin could buy a warm blanket.\" One skin could buy something people needed.",
              "Something that can buy a lot is worth a lot. Part A: worth a lot. Part B: the sentence about the blanket.",
              "The sentence that holds the word only repeats it."
            ],
            misconception: "A common mix-up is choosing the sentence that has the word valuable in it. A clue must tell what the word means.",
            why: "Part A: worth a lot. Part B: \"One skin could buy a warm blanket.\" One skin could buy something people needed, so skins were worth a lot. The sentence with valuable only repeats the word. The other sentences are about the hunter and the trip."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-V1a-C11",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.V.1.a"
            ],
            passages: [],
            prompt: "What does rotate mean in the coach's sentence, and what clue shows it?",
            stem: [
              "Coach Ellis told the soccer team, \"We will rotate positions after each game.\" After the first game, Dana moved from goalie to defender. After the second game, she moved from defender to forward."
            ],
            choices: [
              {
                text: "to take turns in new spots, because Dana changed spots after each game",
                correct: true
              },
              {
                text: "to spin in a circle, because players run around the field in a game"
              },
              {
                text: "to join a new team, because Dana did not stay with the same players"
              },
              {
                text: "to rest on the bench, because Dana did not play in the last game"
              }
            ],
            clue: "Use what the story shows to test each meaning. Ask what happens to the players, and which meaning fits those events.",
            hints: [
              "Use what the story shows to test each meaning. Ask what happens to the players, and which meaning fits those events.",
              "Look at what happened to Dana after the first game and after the second game. What stayed the same, and what is different?",
              "Dana is on the same team the whole time. Check each choice to see whether it matches what really happened to her."
            ],
            how: [
              "Read the coach's sentence: players will rotate positions after each game.",
              "Look at the example. Dana was a goalie, then a defender, then a forward. She changed her spot after every game.",
              "So rotate means to take turns in new spots.",
              "Dana stays on the same team and keeps playing, so the choices about a new team or sitting out do not fit. Nothing in the story shows players spinning."
            ],
            misconception: "A common mix-up is choosing the meaning you already know, spin around. Here the example shows a different meaning.",
            why: "The answer is \"to take turns in new spots, because Dana changed spots after each game.\" She went from goalie to defender to forward. She stayed on the team, so she did not join a new one. She kept playing, so she did not rest on the bench. Nothing in the story shows players spinning."
          },
          {
            id: "SK-V1a-C12",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.1.a"
            ],
            passages: [],
            prompt: "Choose the meaning of each word or phrase in the recipe.",
            stem: [
              "Dad's recipe said, \"Dissolve the sugar in the warm water.\" We stirred until we could not see any sugar. Then Dad told us to add a pinch of salt. \"A pinch is the small bit you can hold between two fingers,\" he said."
            ],
            text: "In the recipe, dissolve means {0}. A pinch is {1}.",
            slots: [
              {
                options: [
                  "pour out and throw away",
                  "mix in until it seems to disappear",
                  "heat until it turns brown"
                ],
                answer: 1
              },
              {
                options: [
                  "a quick, sharp squeeze",
                  "a big spoonful",
                  "a very small amount"
                ],
                answer: 2
              }
            ],
            clue: "Use what the family does and says in the story. The actions and the words after a new word can show its meaning.",
            hints: [
              "Use what the family does and says in the story. The actions and the words after a new word can show its meaning.",
              "For the first blank, read what the family did after they were told to dissolve. For the second blank, read what Dad said right after.",
              "For the first blank, the family stirred until the sugar was gone from sight. Think about whether the sugar was thrown away or heated."
            ],
            how: [
              "Blank one: the family stirred until they could not see any sugar. The sugar did not leave the bowl. It mixed into the water and seemed to disappear.",
              "Blank two: Dad says a pinch is the small bit you can hold between two fingers. That is a very small amount.",
              "A pinch can also mean a sharp squeeze, but that meaning does not fit a recipe with salt."
            ],
            misconception: "A common mix-up is choosing the meaning of pinch you already know, a squeeze. Check which meaning fits the recipe.",
            why: "The answers are \"mix in until it seems to disappear\" and \"a very small amount.\" The family stirred until the sugar could not be seen, so it mixed into the water. Dad says a pinch is the small bit you can hold between two fingers. A sharp squeeze is another meaning of pinch, but it does not fit salt in a recipe."
          },
          {
            id: "SK-V1a-C13",
            type: "hottext",
            points: 1,
            dok: 3,
            std: [
              "3.L.V.1.a"
            ],
            passages: [],
            prompt: "Amir is writing about erosion. Which sentence should come next so a reader can figure out what the word means?",
            stem: [
              "Erosion changes the land in many places."
            ],
            options: [
              "Many scientists study erosion at beaches, in canyons and on farms.",
              "Wind and rain slowly carry soil and rock from one place to another.",
              "Erosion is a topic that students learn about in science class.",
              "Erosion is easy to see after a very big rainstorm."
            ],
            answer: [
              1
            ],
            pick: 1,
            clue: "A helpful sentence gives a reader a clue that tells what the new word means. Ask what each sentence lets a reader find out.",
            hints: [
              "A helpful sentence gives a reader a clue that tells what the new word means. Ask what each sentence lets a reader find out.",
              "Read each choice as if you had never heard the word erosion. Which one lets you picture what is happening to the land?",
              "A sentence that says where scientists study something tells where to find it, but not what it is. Check the other choices."
            ],
            how: [
              "The reader does not know erosion, so the next sentence must tell what it is or what it does.",
              "Check each choice. One says where scientists study it. One says students learn it in class. One says when it is easy to see. Each leaves the reader asking, \"But what is erosion?\"",
              "\"Wind and rain slowly carry soil and rock from one place to another\" tells what happens, so it gives the meaning."
            ],
            misconception: "A common mix-up is choosing a sentence that repeats the word. A good clue explains it.",
            why: "The answer is \"Wind and rain slowly carry soil and rock from one place to another.\" It tells what erosion does, so a reader can figure out the word. The other sentences use the word but never say what it is."
          },
          {
            id: "SK-V1a-C14",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.1.a"
            ],
            passages: [],
            prompt: "Match each word from the field trip to its meaning.",
            stem: [
              "Our class visited an observatory, a building with big tools for studying the sky. The guide let us look through the lens, the clear curved glass that makes far things look closer. She said the moon is a satellite, an object that circles a larger one."
            ],
            cols: [
              "a building for studying the sky",
              "an object that circles a larger one",
              "a machine that makes electricity",
              "clear curved glass that makes far things look closer"
            ],
            rows: [
              {
                text: "observatory",
                answer: 0
              },
              {
                text: "satellite",
                answer: 1
              },
              {
                text: "lens",
                answer: 3
              }
            ],
            clue: "In this paragraph, each new word is followed by words that explain it. Look for the comma after the word.",
            hints: [
              "In this paragraph, each new word is followed by words that explain it. Look for the comma after the word.",
              "Find each word in the paragraph. Read the words that come right after it, up to the next period.",
              "One meaning in the list is not explained anywhere in the paragraph. Decide which row each of the others goes with."
            ],
            how: [
              "Find observatory. After the comma: \"a building with big tools for studying the sky.\"",
              "Find lens. After the comma: \"the clear curved glass that makes far things look closer.\"",
              "Find satellite. After the comma: \"an object that circles a larger one.\" The moon circles Earth, and Earth is larger.",
              "No part of the paragraph talks about a machine that makes electricity."
            ],
            misconception: "A common mix-up is guessing from a word you already know. Use the words the author puts right after each new word.",
            why: "Observatory means a building for studying the sky. Satellite means an object that circles a larger one. Lens means clear curved glass that makes far things look closer. The paragraph never mentions a machine that makes electricity."
          },
          {
            id: "SK-V1a-C15",
            type: "dropdown",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.1.a"
            ],
            passages: [],
            prompt: "Use the meaning of perimeter to solve the problem.",
            stem: [
              "Mr. Hill's garden is a rectangle. The perimeter of a shape is the distance all the way around its edges. The garden is 6 feet long and 4 feet wide. Marcus wants to put a fence around the whole garden."
            ],
            text: "The perimeter is the distance {0}. The fence must be {1} feet long.",
            slots: [
              {
                options: [
                  "across the middle of a shape",
                  "inside the corners of a shape",
                  "all the way around a shape"
                ],
                answer: 2
              },
              {
                options: [
                  "10",
                  "20",
                  "24"
                ],
                answer: 1
              }
            ],
            clue: "Use the definition in the problem. Say in your own words what the new word measures.",
            hints: [
              "Use the definition in the problem. Say in your own words what the new word measures.",
              "Draw the garden. Mark each side and its length, then ask which sides the fence has to go along.",
              "A rectangle has four sides, and the two long sides match, and so do the two short sides. Find the length of one long side and one short side before adding."
            ],
            how: [
              "The problem says the perimeter is the distance all the way around the edges of a shape.",
              "The fence goes around the whole garden, so it must cover all four sides: 6 feet, 4 feet, 6 feet and 4 feet.",
              "Add: 6 + 4 + 6 + 4 = 20. The fence must be 20 feet long.",
              "Ten feet adds only two sides, and 24 is a different measure (6 times 4)."
            ],
            misconception: "A common mix-up is adding only the length and the width. A fence around the garden covers all four sides.",
            why: "The answers are \"all the way around a shape\" and 20. The fence goes around all four sides: 6 + 4 + 6 + 4 = 20 feet. Ten feet counts only two sides. Twenty-four comes from multiplying 6 by 4, which does not measure the distance around."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-V1a-S01",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.1.a"
      ],
      passages: [],
      like: [
        "SK-V1a-P4"
      ],
      prompt: "Read the paragraph. What does the word conserve mean?",
      stem: [
        "Our town asked families to conserve water this summer. Dad turned off the tap while he brushed his teeth. Mom watered the garden from a bucket instead of letting the hose run."
      ],
      choices: [
        {
          text: "to use only what you need",
          correct: true
        },
        {
          text: "to pour out on the ground"
        },
        {
          text: "to clean with soap"
        },
        {
          text: "to carry to another place"
        }
      ],
      clue: "Read the sentences after the new word. They may show what people do.",
      hints: [
        "Read the sentences after the new word. They may show what people do.",
        "Look at what Dad and Mom each did. What did they stop doing, and why would that matter for water?",
        "Nobody in the paragraph carries water anywhere or washes anything with it. Check the other choices against what Dad and Mom did."
      ],
      how: [
        "Find conserve: the town asked families to conserve water.",
        "Read what the family did. Dad turned off the tap while brushing, and Mom used a bucket instead of a running hose.",
        "Both of them used less water. Conserve means to use only what you need.",
        "Pouring water out would waste it, and nobody washed or moved water in the paragraph."
      ],
      misconception: "A common mix-up is guessing from the word water. Use what the family does.",
      why: "The answer is \"to use only what you need.\" Dad turned off the tap and Mom used a bucket, so they used less water. Pouring water on the ground would waste it. Nobody cleans or carries water in the paragraph."
    },
    {
      id: "SK-V1a-S02",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.1.a"
      ],
      passages: [],
      like: [
        "SK-V1a-P5"
      ],
      prompt: "Read the paragraph. What does the word classify mean?",
      stem: [
        "Our teacher asked us to classify the rocks in the tray. We put the smooth ones in one pile and the rough ones in another. Then we sorted each pile by color."
      ],
      choices: [
        {
          text: "to sort into groups",
          correct: true
        },
        {
          text: "to break into pieces"
        },
        {
          text: "to wash with water"
        },
        {
          text: "to count one by one"
        }
      ],
      clue: "Read the sentences after the new word. They may show what the class did.",
      hints: [
        "Read the sentences after the new word. They may show what the class did.",
        "Look at what the students did with the rocks. What did they make?",
        "The students did not break or wash any rock. Check the other choices against what they did."
      ],
      how: [
        "Find classify: the teacher asked the class to classify the rocks.",
        "Read what the students did: smooth rocks in one pile, rough rocks in another, then each pile sorted by color.",
        "They put the rocks into groups. Classify means to sort into groups.",
        "Nobody broke, washed or counted the rocks."
      ],
      misconception: "A common mix-up is picking a meaning about touching the rocks. Use the piles the students made.",
      why: "The answer is \"to sort into groups.\" The students made piles for smooth and rough rocks and then sorted each pile by color. Nobody broke, washed or counted the rocks."
    },
    {
      id: "SK-V1a-S03",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.1.a"
      ],
      passages: [
        "p4"
      ],
      like: [
        "SK-V1a-C03"
      ],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "According to paragraph 2, what are decomposers?",
        choices: [
          {
            text: "living things which turn what has died into bits",
            correct: true
          },
          {
            text: "beetles which chew tunnels in soft wood"
          },
          {
            text: "mosses which grow best in damp places"
          },
          {
            text: "young plants which grow on top of a log"
          }
        ]
      },
      partB: {
        prompt: "Which line from the article offers the strongest support for Part A?",
        choices: [
          {
            text: "\"They break down dead plants and animals into tiny bits.\"",
            correct: true
          },
          {
            text: "\"Beetles chew tunnels in its soft wood.\""
          },
          {
            text: "\"Moss grows best where the air is damp.\""
          },
          {
            text: "\"These bits go back into the soil and help new plants grow.\""
          }
        ]
      },
      clue: "When a writer uses a word you do not know, the lines near it often say what it means.",
      hints: [
        "When a writer uses a word you do not know, the lines near it often say what it means.",
        "Find decomposers in paragraph 2 and read the whole paragraph. Ask what those living things do.",
        "The beetles chewing tunnels are in a different paragraph, and the article never calls them decomposers. Check the other choices."
      ],
      how: [
        "Find the word: \"Some small animals on the log are decomposers.\"",
        "Read the next line: \"They break down dead plants and animals into tiny bits.\" They means the decomposers.",
        "Part A: living things which turn what has died into bits. Part B: that line.",
        "The lines about beetles and moss are about other living things on the log."
      ],
      misconception: "A common mix-up is choosing a line about another animal on the log. The meaning is in the line right after the word.",
      why: "Part A: living things which turn what has died into bits. Part B: \"They break down dead plants and animals into tiny bits.\" The line after the word tells what decomposers do. The beetle and moss lines describe other things on the log."
    },
    {
      id: "SK-V1a-S04",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.1.a"
      ],
      passages: [],
      like: [
        "SK-V1a-C04"
      ],
      prompt: "Read the paragraph. What does the phrase took shelter mean?",
      stem: [
        "When the storm began, the hikers took shelter under a rock ledge. They sat there with dry clothes and warm drinks until the rain stopped."
      ],
      choices: [
        {
          text: "went to a safe place out of the weather",
          correct: true
        },
        {
          text: "hurried to the top of the hill"
        },
        {
          text: "packed up their camp to leave"
        },
        {
          text: "took pictures of the dark clouds"
        }
      ],
      clue: "A group of words can have its own meaning, like one word. Think about what the whole group tells you the hikers did.",
      hints: [
        "A group of words can have its own meaning, like one word. Think about what the whole group tells you the hikers did.",
        "Read the sentence with the phrase, and then the next sentence. Where were the hikers, and how did they feel?",
        "The hikers sat under the ledge until the rain stopped. Check each choice to see if it fits staying put."
      ],
      how: [
        "Find the phrase: the hikers took shelter under a rock ledge when the storm began.",
        "Read the next sentence. They sat there with dry clothes until the rain stopped. The ledge kept the rain off them.",
        "Took shelter means went to a safe place out of the weather.",
        "They did not climb, leave or take pictures."
      ],
      misconception: "A common mix-up is reading the phrase one word at a time. Took shelter is a group of words with one meaning.",
      why: "The answer is \"went to a safe place out of the weather.\" The hikers sat under a ledge and stayed dry until the rain stopped. Nothing in the paragraph says they climbed, packed up or took pictures."
    },
    {
      id: "SK-V1a-S05",
      type: "hottext",
      points: 1,
      dok: 3,
      std: [
        "3.L.V.1.a"
      ],
      passages: [
        "p4"
      ],
      like: [
        "SK-V1a-C05"
      ],
      prompt: "Eli claims that damp means very dry. Pick the sentence in paragraph 3 that proves him wrong.",
      targets: [
        "p4:3:1",
        "p4:3:2",
        "p4:3:3",
        "p4:2:3"
      ],
      answer: [
        "p4:3:2"
      ],
      pick: 1,
      clue: "To test what a person claims about a word, look for a sentence that gives a clue about the word. Does the clue fit the claim?",
      hints: [
        "To test what a person claims about a word, look for a sentence that gives a clue about the word. Does the clue fit the claim?",
        "Find the sentence that uses damp. Read it and the sentence after it. What does the writer say about the shady side of the log?",
        "The sentence about the soft rug tells how the moss looks. It does not tell if the log is wet or dry. Look at the other sentences."
      ],
      how: [
        "Find damp: \"Moss grows best where the air is damp.\" This sentence does not say what damp means.",
        "Read the sentence after it: \"The cool, shady side of the log stays a little wet all day.\" A place that stays a little wet is not dry.",
        "So damp means a little wet, and Eli is wrong.",
        "The sentence about the rug only describes how the moss looks."
      ],
      misconception: "A common mix-up is choosing the sentence that contains the word damp. A clue must tell what the word means.",
      why: "The answer is \"The cool, shady side of the log stays a little wet all day.\" It shows the moss grows where things stay a little wet, so damp does not mean dry. The sentence with the word itself only repeats it, and the rug sentence is about how the moss looks."
    },
    {
      id: "SK-V1a-S06",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.1.a"
      ],
      passages: [
        "p5"
      ],
      like: [
        "SK-V1a-C06"
      ],
      prompt: "In paragraph 2, who is a prospector?",
      choices: [
        {
          text: "someone who looks for gold",
          correct: true
        },
        {
          text: "someone who sells gold to a banker"
        },
        {
          text: "someone who digs deep tunnels under a hill"
        },
        {
          text: "someone who builds a town by a stream"
        }
      ],
      clue: "A new word can be explained by the words right around it. Look for words that tell who or what it is.",
      hints: [
        "A new word can be explained by the words right around it. Look for words that tell who or what it is.",
        "Read the sentence with prospector and then the sentences about the pan. What do the people in those sentences do?",
        "The people in the paragraph work in a stream with a pan. Think about whether anyone sells or builds in those sentences."
      ],
      how: [
        "Find prospector: \"A person who searches for gold is called a prospector.\"",
        "The words before called tell who the word names: a person who searches for gold.",
        "The next sentences show prospectors scooping gravel and water into a pan, not selling gold, digging tunnels or building a town.",
        "So a prospector is someone who looks for gold."
      ],
      misconception: "A common mix-up is choosing a miner who digs tunnels. The paragraph shows prospectors using a pan in a stream.",
      why: "The answer is \"someone who looks for gold.\" The sentence says so before the word called. The prospectors use a pan, so they do not sell to a banker, dig deep tunnels or build a town."
    },
    {
      id: "SK-V1a-S07",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.1.a"
      ],
      passages: [
        "p5"
      ],
      like: [
        "SK-V1a-C07"
      ],
      prompt: "Finish each sentence with the best meaning.",
      text: "Panning for gold means {0}. When a prospector went home with little, {1}.",
      slots: [
        {
          options: [
            "painting gold onto a pan",
            "washing away gravel to find gold",
            "melting gold in a hot pan"
          ],
          answer: 1
        },
        {
          options: [
            "there was not much gold to show",
            "the trip home was very short",
            "the family had lots of nuggets"
          ],
          answer: 0
        }
      ],
      clue: "A group of words can mean one thing. Read each phrase with the sentences around it.",
      hints: [
        "A group of words can mean one thing. Read each phrase with the sentences around it.",
        "For the first blank, read the steps just before the words panning for gold. For the second blank, read the whole last sentence of paragraph 3.",
        "For the second blank, the sentence says most prospectors found only a few tiny bits. Think about what that means for how much they took home."
      ],
      how: [
        "Blank one: the prospectors scooped gravel and water, swirled the pan, and the light gravel washed away. Then the passage says, \"This was called panning for gold.\"",
        "Blank two: most prospectors found only a few tiny bits, and many went home with little. They had little gold to show.",
        "So the answers are washing away gravel to find gold and there was not much gold to show."
      ],
      misconception: "A common mix-up is guessing from the words pan and gold. Use the steps the author describes.",
      why: "The answers are \"washing away gravel to find gold\" and \"there was not much gold to show.\" The steps describe washing light gravel out of the pan so the heavy gold stays. Most prospectors found only tiny bits, so they came home with little gold."
    },
    {
      id: "SK-V1a-S08",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.1.a"
      ],
      passages: [
        "p5"
      ],
      like: [
        "SK-V1a-C08"
      ],
      prompt: "Choose TWO details from the passage that show what eager means.",
      pick: 2,
      choices: [
        {
          text: "hurried there to hunt for gold",
          correct: true
        },
        {
          text: "worked from sunrise to sunset",
          correct: true
        },
        {
          text: "found gold near Dahlonega"
        },
        {
          text: "swirled the pan"
        },
        {
          text: "found only a few tiny bits"
        }
      ],
      clue: "Words that tell how people act can show how they feel. Look for actions that show strong wanting.",
      hints: [
        "Words that tell how people act can show how they feel. Look for actions that show strong wanting.",
        "Look across the passage for what the prospectors did when they heard the news and what they did during the day.",
        "Swirling the pan was a step in the work. It tells how to find gold, not how much the people wanted it. Look at what is left."
      ],
      how: [
        "The passage says the prospectors were eager to find gold. Ask what they did.",
        "When the news spread, thousands of people hurried to hunt for gold. Later they worked from sunrise to sunset.",
        "Hurrying and working all day show they wanted gold very much. That is what eager means.",
        "Swirling the pan, where the gold was found and how little most people found do not show wanting."
      ],
      misconception: "A common mix-up is choosing facts about the gold. Choose actions that show how the people felt.",
      why: "The answers are \"hurried there to hunt for gold\" and \"worked from sunrise to sunset.\" Both show people who wanted gold very much. Where the gold was found, how the pan was swirled and how little most people found do not show how they felt."
    },
    {
      id: "SK-V1a-S09",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.1.a"
      ],
      passages: [
        "p5"
      ],
      like: [
        "SK-V1a-C09"
      ],
      prompt: "Where does the author explain what panning for gold means?",
      choices: [
        {
          text: "In the steps just before the words.",
          correct: true
        },
        {
          text: "In the title at the top of the passage."
        },
        {
          text: "In the last paragraph about visitors today."
        },
        {
          text: "In the first sentence about the town."
        }
      ],
      clue: "Meaning can come before a word as well as after it. Ask where the author shows the idea.",
      hints: [
        "Meaning can come before a word as well as after it. Ask where the author shows the idea.",
        "Find the words panning for gold. Then read the sentences just before them. What do they describe?",
        "The last paragraph says visitors can pan for gold today, but it does not show how it is done. Check the other choices."
      ],
      how: [
        "Find the words: \"This was called panning for gold.\" The word This points back to something.",
        "Read the sentences just before it. They show the steps: scoop gravel and water into a pan, swirl it, and let the light gravel wash away.",
        "So the author explains the phrase in the steps before it.",
        "The title, the first sentence and the last paragraph do not show the steps."
      ],
      misconception: "A common mix-up is looking only after the new word. The clue can come in the sentences before it.",
      why: "The answer is \"In the steps just before the words.\" The sentence uses This to point back to the steps. The title, the first sentence and the last paragraph do not show how the work was done."
    },
    {
      id: "SK-V1a-S10",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.1.a"
      ],
      passages: [
        "p5"
      ],
      like: [
        "SK-V1a-C10"
      ],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "Paragraph 3 calls large nuggets rare. What is the reader being told about those lumps of gold from the streams?",
        choices: [
          {
            text: "They were not often found.",
            correct: true
          },
          {
            text: "They were bright and shiny."
          },
          {
            text: "They were heavy to lift."
          },
          {
            text: "They fit in a pocket."
          }
        ]
      },
      partB: {
        prompt: "Choose the line that gives the strongest support for Part A.",
        choices: [
          {
            text: "\"Most prospectors found only a few tiny bits, and many went home with little.\"",
            correct: true
          },
          {
            text: "\"The prospectors were eager to find gold, so they worked from sunrise to sunset.\""
          },
          {
            text: "\"Soon thousands of people hurried there to hunt for gold.\""
          },
          {
            text: "\"Many prospectors scooped gravel and water into a metal pan.\""
          }
        ]
      },
      clue: "A word can be explained by what happens next. Ask what the writer tells you right after the new word.",
      hints: [
        "A word can be explained by what happens next. Ask what the writer tells you right after the new word.",
        "Find rare in paragraph 3 and read the whole paragraph. How much gold did most people find?",
        "The line about people hurrying is about the news of gold. It does not say how often nuggets were found. Check the other choices."
      ],
      how: [
        "Find the word: \"Large nuggets, or lumps of gold, were rare.\" It does not say what rare means.",
        "Read the next line: most prospectors found only a few tiny bits. Few people found big nuggets.",
        "Something few people find is not often found. Part A: they were not often found. Part B: the line about the tiny bits.",
        "The lines about sunrise and the hurrying crowd do not tell how often nuggets were found."
      ],
      misconception: "A common mix-up is choosing a line about gold being shiny or heavy. The clue tells how often it was found.",
      why: "Part A: they were not often found. Part B: \"Most prospectors found only a few tiny bits, and many went home with little.\" It shows large nuggets were hard to find. The sunrise line and the hurrying line do not tell how often nuggets were found."
    },
    {
      id: "SK-V1a-S11",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.V.1.a"
      ],
      passages: [],
      like: [
        "SK-V1a-C11"
      ],
      prompt: "What does alternate mean in Mr. Cole's sentence, and what clue shows it?",
      stem: [
        "Mr. Cole said, \"Our class will alternate between the library and the gym.\" In week one, the class went to the library. In week two, it went to the gym. In week three, it went back to the library."
      ],
      choices: [
        {
          text: "switch back and forth, since the class went from library to gym and back",
          correct: true
        },
        {
          text: "stay in one room, since the class sat in the same seats every week"
        },
        {
          text: "visit both at once, since the class split up between two rooms"
        },
        {
          text: "go somewhere new each week, since the class never repeated a place"
        }
      ],
      clue: "Use what the class does to test each meaning. Ask which meaning fits the three weeks.",
      hints: [
        "Use what the class does to test each meaning. Ask which meaning fits the three weeks.",
        "List where the class went in weeks one, two and three. What pattern do you see?",
        "In week three the class goes to a place it already visited. Check each choice against that."
      ],
      how: [
        "Read the sentence: the class will alternate between the library and the gym.",
        "Look at the weeks: library, gym, library. The class goes to one place, then the other, then back to the first.",
        "That pattern is switching back and forth, so alternate means to switch back and forth.",
        "The class does not stay in one room, split up or visit a new place each week."
      ],
      misconception: "A common mix-up is choosing a meaning that ignores week three, when the class goes back to a place it already visited.",
      why: "The answer is \"switch back and forth, since the class went from library to gym and back.\" The pattern goes back to the first place in week three. The class did not stay in one room, split up or go somewhere new every week."
    },
    {
      id: "SK-V1a-S12",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.1.a"
      ],
      passages: [],
      like: [
        "SK-V1a-C12"
      ],
      prompt: "Finish each sentence with the best meaning.",
      stem: [
        "The label on the plant food said to dilute it with water. Aunt Tia poured one capful into a full bucket and stirred. \"A capful is as much as the bottle cap holds,\" she said. The bucket water turned a pale green."
      ],
      text: "To dilute plant food is {0}. One capful is {1}.",
      slots: [
        {
          options: [
            "to make weaker by adding water",
            "to make hotter by stirring",
            "to pour out all the water"
          ],
          answer: 0
        },
        {
          options: [
            "the amount of a whole bottle",
            "as much as a bottle cap holds",
            "a long, thin spoonful"
          ],
          answer: 1
        }
      ],
      clue: "Use what happens in the story and what the speaker says right after a new word.",
      hints: [
        "Use what happens in the story and what the speaker says right after a new word.",
        "For the first blank, read what Aunt Tia did with the plant food and the water. For the second blank, read what she said next.",
        "For the second blank, Aunt Tia says exactly how much a capful is. Check which choice matches her words."
      ],
      how: [
        "Blank one: Aunt Tia put a small amount of plant food into a full bucket of water and stirred. The water turned only a pale green. The plant food became weaker.",
        "Blank two: Aunt Tia says a capful is as much as the bottle cap holds.",
        "She did not heat anything or pour the water out."
      ],
      misconception: "A common mix-up is choosing a meaning that is about stirring. Look at what the plant food and the water did.",
      why: "The answers are \"to make weaker by adding water\" and \"as much as a bottle cap holds.\" A small amount of plant food went into a full bucket, so the water turned only pale green. Aunt Tia says what a capful is. Nothing was heated or poured out."
    },
    {
      id: "SK-V1a-S13",
      type: "hottext",
      points: 1,
      dok: 3,
      std: [
        "3.L.V.1.a"
      ],
      passages: [],
      like: [
        "SK-V1a-C13"
      ],
      prompt: "Nia's report begins with the sentence below. Which sentence could follow it to explain camouflage to a reader?",
      stem: [
        "Animals use camouflage to stay safe."
      ],
      options: [
        "Their colors and patterns help them blend in with the places they live.",
        "The word camouflage comes from a language spoken in another country.",
        "A museum in town has a room where visitors can learn about camouflage.",
        "Art teachers sometimes ask students to draw animals that use camouflage."
      ],
      answer: [
        0
      ],
      pick: 1,
      clue: "A helpful sentence gives a clue that tells a reader what the new word means. Ask what each sentence lets a reader find out.",
      hints: [
        "A helpful sentence gives a clue that tells a reader what the new word means. Ask what each sentence lets a reader find out.",
        "Imagine you have never heard camouflage. Which choice would let you picture what the animals are doing?",
        "A sentence that says where you can learn about something tells where to look, but not what it is. Check the other choices."
      ],
      how: [
        "The reader does not know camouflage, so the next sentence must tell what it is or what it does.",
        "Check each choice. One is about where a word comes from, one is about a museum, and one is about art class. None of them tells what camouflage does.",
        "\"Their colors and patterns help them blend in with the places they live\" tells what animals do, so it explains the word."
      ],
      misconception: "A common mix-up is choosing a sentence that repeats the word. A good clue explains it.",
      why: "The answer is \"Their colors and patterns help them blend in with the places they live.\" It tells what camouflage does. The other sentences use the word but never say what it is."
    },
    {
      id: "SK-V1a-S14",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.1.a"
      ],
      passages: [],
      like: [
        "SK-V1a-C14"
      ],
      prompt: "Match each word from the visit to its meaning.",
      stem: [
        "At the animal clinic, we met a veterinarian, a doctor who takes care of animals. She wore a stethoscope, a tool that lets a doctor hear a heartbeat. A puppy waited in the kennel, a small pen where a pet stays."
      ],
      cols: [
        "a doctor who takes care of animals",
        "a small pen where a pet stays",
        "a tool that lets a doctor hear a heartbeat",
        "a bowl that holds a pet's water"
      ],
      rows: [
        {
          text: "kennel",
          answer: 1
        },
        {
          text: "stethoscope",
          answer: 2
        },
        {
          text: "veterinarian",
          answer: 0
        }
      ],
      clue: "In this paragraph, each new word is followed by words that explain it. Look for the comma after each word.",
      hints: [
        "In this paragraph, each new word is followed by words that explain it. Look for the comma after each word.",
        "Find each word in the paragraph. Read the words that come right after it, up to the next period.",
        "One meaning in the list is not explained anywhere in the paragraph. Decide which row each of the others goes with."
      ],
      how: [
        "Find veterinarian. After the comma: \"a doctor who takes care of animals.\"",
        "Find stethoscope. After the comma: \"a tool that lets a doctor hear a heartbeat.\"",
        "Find kennel. After the comma: \"a small pen where a pet stays.\"",
        "A bowl for a pet's water is never mentioned."
      ],
      misconception: "A common mix-up is guessing from a word you already know. Use the words the author puts right after each new word.",
      why: "A veterinarian is a doctor who takes care of animals. A stethoscope is a tool that lets a doctor hear a heartbeat. A kennel is a small pen where a pet stays. The paragraph never mentions a water bowl."
    },
    {
      id: "SK-V1a-S15",
      type: "dropdown",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.1.a"
      ],
      passages: [],
      like: [
        "SK-V1a-C15"
      ],
      prompt: "Read the problem. Then finish each sentence.",
      stem: [
        "A circle's diameter is its width, measured straight across through its center. Jada's round pizza pan has a diameter of 12 inches. Her round pie plate has a diameter of 9 inches. Jada wants to know how much wider her pan is. She bakes pies with her aunt on Saturdays."
      ],
      text: "Diameter means {0}. Her pan is wider than her plate by {1} inches.",
      slots: [
        {
          options: [
            "the distance around the outside",
            "the distance straight across, through the center",
            "the distance from the center to the edge"
          ],
          answer: 1
        },
        {
          options: [
            "21",
            "3",
            "9"
          ],
          answer: 1
        }
      ],
      clue: "Use the definition in the problem. Say in your own words what the new word measures.",
      hints: [
        "Use the definition in the problem. Say in your own words what the new word measures.",
        "Find the diameter of the pan and the diameter of the plate. Then ask what the question wants you to do with them.",
        "Wider means the pan reaches farther across than the plate. Think about whether you should join the two numbers or find the difference."
      ],
      how: [
        "The problem says the diameter is the distance straight across a circle, through its center.",
        "The pan's diameter is 12 inches and the plate's is 9 inches.",
        "To find how much wider the pan is, find the difference: 12 - 9 = 3 inches.",
        "Adding gives 21, which is not a difference. Nine is the plate's diameter."
      ],
      misconception: "A common mix-up is adding the two numbers. The question asks how much wider, which means how much more.",
      why: "The answers are \"the distance straight across, through the center\" and 3. The pan is 12 inches across and the plate is 9 inches across, and 12 - 9 = 3. Twenty-one adds the numbers. Nine is only the plate's diameter."
    }
  ],
  addons: {
    "SK-V1a-P4": {
      hints: [
        "A word's meaning may be clear from what the author says next. Think about what the grass needs in order to live where it grows.",
        "Read paragraph 4. What does the grass do about the salt, and why would that help it?",
        "The tiny white bits are salt on the grass. They are not the grass changing color. Check the other choices."
      ],
      how: [
        "Find survive: \"Marsh grass has a special way to survive in salty water.\"",
        "The next sentences tell the special way: the grass gets rid of extra salt through its leaves. Too much salt would hurt a plant.",
        "A plant that gets rid of the salt can keep living in salty water. Survive means to stay alive.",
        "The white bits are salt on the grass. The grass is not turning white, growing tall or moving."
      ],
      misconception: "A common mix-up is choosing turn white, because the paragraph mentions white bits. They are salt, not the grass."
    },
    "SK-V1a-P5": {
      hints: [
        "Look at what the people in the paragraph do. Ask what they are trying to find out.",
        "Read paragraph 5. Look at what the scientists do about summer and winter, and what they look for.",
        "Visiting a place is not the same as studying it. Check each choice against what the scientists look for."
      ],
      how: [
        "Find compare: \"Scientists compare the marsh in summer and in winter.\"",
        "Read the next sentence: they look for what stays the same and what is different.",
        "Looking at how things are alike and different is what compare means.",
        "The scientists do not draw, count or only visit. They look for what is alike and different."
      ],
      misconception: "A common mix-up is choosing the choice about visiting a place many times. The paragraph says what the scientists look for."
    },
    "SK-V1a-P1": {
      hints: [
        "A new word can be explained by the sentences around it. Look at what the sentences near the word say.",
        "Find burrows in paragraph 2. Read the sentence just before it. What do the crabs do in the mud?",
        "The crabs are not hunting, and the passage does not say the mud is deep. Check the other choices against the crabs."
      ],
      how: [
        "Find burrows: \"They hide in their burrows when the water rises.\"",
        "Read the sentence before it: \"Fiddler crabs dig small holes in the mud.\" The crabs hide in the holes they dug.",
        "So burrows are holes that animals dig to live in.",
        "The other choices are about grass, hunters and ocean pools, and none of them is where the crabs hide."
      ],
      misconception: "A common mix-up is choosing a choice about water because the sentence mentions rising water. The crabs hide in holes."
    },
    "SK-V1a-P2": {
      hints: [
        "An author may explain a new word with helper words such as is a or is the. Look for a sentence that tells what the thing is.",
        "Read paragraph 2. Find the sentences that use the word habitat, and ask which one tells what a habitat is.",
        "The first sentence in paragraph 2 says the marsh is a habitat, but it does not say what a habitat is. Check the other sentences."
      ],
      how: [
        "Find the sentences that use the word habitat in paragraph 2.",
        "\"The salt marsh is a habitat for many animals.\" This says the marsh is a habitat but does not explain it.",
        "\"A habitat is the place where an animal finds the food, water and shelter it needs.\" The helper words is the place start the meaning."
      ],
      misconception: "A common mix-up is choosing the first sentence because it names the marsh. Naming is not explaining."
    },
    "SK-V1a-P3": {
      hints: [
        "Find the sentences that use the word tide. Think about what the tide does, and how often.",
        "Look at paragraph 1. Which sentences use the word tide, and which ones are about something else?",
        "The sentence about the salt marsh explains a different word. Check the other choices."
      ],
      how: [
        "Find tide: \"Twice a day, the tide comes in and covers the marsh with salty water.\" Then \"the tide goes out again.\"",
        "Water that comes in and goes out is ocean water moving in and out each day.",
        "Part B is the sentence that says the tide comes in twice a day. The sentence about the salt marsh explains marsh."
      ],
      misconception: "A common mix-up is choosing wind or a storm. Nothing in the paragraph says the tide is weather."
    }
  },
  /* B5-b5b:core:end */
  test: [
    { id: "SK-V1a-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Read paragraph 2. What does the word evaporation mean?",
      choices: [
        { text: "when water turns into a gas and rises", correct: true },
        { text: "when water vapor turns into tiny drops" },
        { text: "when drops of water fall from a cloud" },
        { text: "when water flows into rivers and lakes" }
      ],
      clue: "Evaporation is a name for a change. Read the sentence just before it to find what change the sun causes.",
      why: "The answer is \"when water turns into a gas and rises.\" Paragraph 2 says the water turns into a gas called water vapor and rises into the air, and then says, \"This change is called evaporation.\" The other choices name other steps in the water cycle." },
    { id: "SK-V1a-T2", type: "hottext", points: 1, dok: 1, passages: ["p2"],
      prompt: "Which sentence tells what the word precipitation means? Choose the sentence in the passage.",
      targets: ["p2:3:4", "p2:4:1", "p2:4:2", "p2:4:3", "p2:5:1"],
      answer: ["p2:4:2"], pick: 1,
      clue: "Look for the helper words is called. A sentence that gives the meaning tells what the thing is, not only examples of it.",
      why: "The answer is \"Water that falls from clouds is called precipitation.\" The words is called give the meaning. The sentence about rain, snow, sleet and hail gives examples, but it does not say what precipitation is." },
    { id: "SK-V1a-T3", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does the word condensation mean in paragraph 3?",
        choices: [
          { text: "water vapor turning back into tiny drops", correct: true },
          { text: "the sun warming water in lakes and puddles" },
          { text: "big drops of water falling to the ground" },
          { text: "water soaking down into the ground" }
        ] },
      partB: { prompt: "Which sentence from the passage best supports the answer to Part A?",
        choices: [
          { text: "\"The cold air cools the water vapor, and it turns back into tiny drops of water.\"", correct: true },
          { text: "\"The water turns into a gas called water vapor and rises into the air.\"" },
          { text: "\"Water that falls from clouds is called precipitation.\"" },
          { text: "\"Much of it flows into rivers, lakes and oceans.\"" }
        ] },
      clue: "The sentence that names condensation says this change. Read the sentence right before it to find out what the change is.",
      why: "Part A: water vapor turning back into tiny drops. Part B: \"The cold air cools the water vapor, and it turns back into tiny drops of water.\" The next sentence says, \"This change is called condensation,\" so condensation is that change." },
    { id: "SK-V1a-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Read paragraph 6. What does the word predict mean?",
      choices: [
        { text: "to tell what will happen before it happens", correct: true },
        { text: "to measure how much rain has fallen" },
        { text: "to make a storm go away" },
        { text: "to name the different kinds of clouds" }
      ],
      clue: "Read the sentence after the one with predict. When do the scientists tell us about the storm?",
      why: "The answer is \"to tell what will happen before it happens.\" The next sentence says the scientists tell us a day or two ahead that a storm is coming. Telling ahead of time is what predict means. They do not measure rain that already fell, and they cannot stop a storm. Predict is a school word you can use in reading, science and math." },
    { id: "SK-V1a-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the paragraph. What does the word observe mean?",
      stem: ["Our class will observe the bean plant every morning. We will look closely at its leaves and stem. Then we will write down any changes we see in our science notebooks."],
      choices: [
        { text: "to watch carefully", correct: true },
        { text: "to give water to" },
        { text: "to measure with a ruler" },
        { text: "to plant in the soil" }
      ],
      clue: "Read the sentences after the word observe. What will the class do with their eyes each morning?",
      why: "The answer is \"to watch carefully.\" The class will look closely at the plant and write down changes they see. Looking closely to notice changes is what observe means." }
  ]
});

PP.addLesson({
  code: "3.L.V.1.b",
  title: "Using school words when you speak and write",
  teach: {
    big: "When I talk or write about what I learned, I use the real school words, like habitat or citizen, because they say exactly what I mean in fewer words.",
    points: [
      "Every subject has its own words. Science has words like habitat and predator. Social studies has words like citizen and mayor. Math has words like measure and estimate.",
      "When you write a report or answer a question in class, use the school word instead of a long group of plain words. Predators says more, in fewer words, than animals that hunt other animals.",
      "Pick words that fit the subject and the setting. In a science report, use science words. In a letter to your town, use words about your community.",
      "Be sure the school word means the same thing as the words it replaces. Read your sentence again to check.",
      "Fit your words to your reader. A letter to a leader uses polite words, and a talk with a friend can be casual. A written report leaves out things that only work when someone is listening."
    ],
    words: [
      { term: "academic word", means: "a school word you use in many subjects, like measure or explain" },
      { term: "content word", means: "a word that belongs to one subject, like predator in science (also called a specialized word)" }
    ],
    examples: [
      {
        label: "Example: a school word",
        lines: ["Plain: Frogs start out as little swimming babies with tails.", "With a school word: Frogs start out as tadpoles."],
        note: "Tadpoles is the science word for baby frogs that swim and have tails. One school word takes the place of five plain words and sounds like a real science report."
      },
      {
        label: "Example: fitting the reader",
        lines: ["Casual: Hey, can we get more books for our room?", "For a principal: Dear Ms. Lee, may our class please have more books for our reading corner?"],
        note: "Both sentences ask for books. The second uses polite words that fit a letter to a school leader."
      }
    ],
    tip: "On the test, you may read a student's report and choose the school word that should replace a group of plain words. Find what the plain words describe, then pick the word that means the same thing."
  },
  learn: [
    {
      show: ["Ana's science report: Cactus plants can live in dry places that get very little rain."],
      ask: "Which science word could Ana use for dry places that get very little rain: deserts, oceans or forests?",
      steps: [
        "Find the plain words to replace: dry places that get very little rain.",
        "Think about the science words you know for kinds of places. Oceans are water, so they are not dry.",
        "A desert is a dry place that gets very little rain. That is the same meaning."
      ],
      answer: "Ana could write: Cactus plants can live in deserts."
    },
    {
      show: ["Jalen's letter to his town: All the people who live in our town and belong to it should help keep the park clean."],
      ask: "Which social studies word could Jalen use: citizens, visitors or leaders?",
      steps: [
        "Find the plain words to replace: the people who live in our town and belong to it.",
        "Visitors only come for a short time, and leaders are just a few people. Neither one means everyone who lives there.",
        "Citizens are the people who belong to a town or a country."
      ],
      answer: "Jalen could write: All the citizens of our town should help keep the park clean."
    },
    {
      show: ["Mila tells her math group: \"I did not count every bean in the jar. I made a careful guess that there are about 50.\""],
      ask: "Which math word could Mila use instead of made a careful guess?",
      steps: [
        "Find the plain words to replace: made a careful guess.",
        "In math, a careful guess about how many or how much has its own name.",
        "That word is estimate. The past form is estimated."
      ],
      answer: "Mila could say: I estimated that there are about 50 beans."
    }
  ],
  write: {
    prompt: "Pick something you learned in science or social studies this year. Write 4 or 5 sentences to teach a younger child about it. Use at least three school words from that subject, and tell what one of them means.",
    checklist: [
      "I wrote about one thing I learned in science or social studies.",
      "I used at least three school words from that subject.",
      "I told what one of the school words means.",
      "I read each sentence to check that each school word fits the meaning."
    ],
    rows: 6
  },
  parent: "At dinner, ask your child to explain something from science or social studies class, like how plants grow or what the mayor does. Listen for the school words, and if your child says a long plain phrase, ask, \"Is there a school word for that?\"",
  passages: [
    { id: "p1", draft: true, title: "Our Class Garden", byline: "Ana's science report draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) This spring, our class planted a garden behind the school.", "(2) First, we put bean seeds in the soil and watered them.", "(3) A few days later, tiny young plants began to push up out of the soil.", "(4) Every Friday, we used a ruler to find out how tall each plant was."],
        ["(5) Plants need sunlight, water and air to grow.", "(6) Bees came to the bean flowers and carried the yellow powder from one flower to another.", "(7) Some bugs chewed holes in a few of our bean leaves."],
        ["(8) By June, we picked and gathered a whole basket of ripe beans.", "(9) We shared them with the lunchroom.", "(10) Next year, we want to grow tomatoes and peppers too."]
      ] },
    { id: "p2", draft: true, title: "Sea Turtles on Our Beach", byline: "Theo's report draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) Every summer, loggerhead sea turtles come to the land along the edge of the sea in Georgia.", "(2) A sea turtle is a kind of animal that has scaly skin, breathes air and lays eggs.", "(3) At night, a mother turtle crawls onto the sand.", "(4) She digs a deep hole with her back flippers.", "(5) She lays her eggs in the hole she dug and covers them with sand."],
        ["(6) About two months later, the baby turtles break out of their eggs.", "(7) Crabs and birds try to catch them.", "(8) The babies hurry across the sand to the sea."],
        ["(9) People who study sea animals walk the beach each morning to look for turtle tracks.", "(10) We should all help keep their beaches safe from harm."]
      ] },
    /* B5-b5b:passages:start */
    {
      id: "p3",
      title: "A Letter to the Mayor",
      byline: "Maya's draft",
      genre: "Student draft (letter)",
      draft: true,
      paragraphs: [
        [
          "(1) Dear Mayor Banks,",
          "(2) My class walked to Riverside Park last week."
        ],
        [
          "(3) The park is free, and anyone in our town can use it.",
          "(4) The swings by the pond are broken.",
          "(5) Some of the people who live here say the park needs fixing."
        ],
        [
          "(6) We would like you to make the park better for everyone.",
          "(7) A new swing set costs money, but families could help raise it.",
          "(8) Thank you for reading my letter."
        ]
      ]
    },
    {
      id: "p4",
      title: "My Toy Car Talk",
      byline: "Jamal's talk",
      genre: "Student talk (script)",
      draft: true,
      paragraphs: [
        [
          "(1) Good morning, everyone.",
          "(2) Today I will show you how my toy car moves on different floors."
        ],
        [
          "(3) On the smooth wood floor, my car rolled across the whole room.",
          "(4) On the thick rug, it stopped after only a few feet.",
          "(5) The rubbing between the wheels and the rug slowed it down.",
          "(6) There is much less rubbing on the wood floor."
        ],
        [
          "(7) I did the test ten times on each one and got about the same answer every time.",
          "(8) That means my results are fair.",
          "(9) Thank you for listening."
        ]
      ]
    },
    {
      id: "p5",
      title: "Our Class Map of Georgia",
      byline: "Kendra's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class made a big map of Georgia for the hallway.",
          "(2) Atlanta is the city where our state leaders work.",
          "(3) A line on the map shows where Georgia stops and Alabama starts."
        ],
        [
          "(4) We colored the land near the ocean light blue.",
          "(5) The people who live in each town helped us label it.",
          "(6) Everyone in the class took part in the project."
        ],
        [
          "(7) We hung the map where other classes could see it.",
          "(8) Next, we will make a map of the whole country."
        ]
      ]
    },
    {
      id: "p6",
      title: "A Letter to Dr. Ellis",
      byline: "Tariq's draft",
      genre: "Student draft (letter)",
      draft: true,
      paragraphs: [
        [
          "(1) Dear Dr. Ellis,",
          "(2) My family visited Paws Place, the animal shelter in our town, last Saturday."
        ],
        [
          "(3) The people who live and work near the shelter brought in food and blankets.",
          "(4) The shelter has many dogs but not enough cages.",
          "(5) The folks who work there are very busy."
        ],
        [
          "(6) We would like you to find a way to give the dogs more room.",
          "(7) My class could wash cars to get money for new cages.",
          "(8) Thank you for your time."
        ]
      ]
    }
    /* B5-b5b:passages:end */
  ],
  practice: [
    { id: "SK-V1b-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Ana wants to use a science word in sentence 3. Which word should replace tiny young plants?",
      choices: [
        { text: "seedlings", correct: true },
        { text: "roots" },
        { text: "petals" },
        { text: "stems" }
      ],
      clue: "All four choices are science words about plants. Which one names a whole plant that has just started to grow, not one part of a plant?",
      why: "The answer is \"seedlings.\" Seedlings are young plants that have just grown from seeds. Roots, petals and stems are parts of a plant, not young plants." },
    { id: "SK-V1b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Read sentence 4. Which word should replace used a ruler to find out?",
      choices: [
        { text: "measured", correct: true },
        { text: "estimated" },
        { text: "counted" },
        { text: "guessed" }
      ],
      clue: "Think about what you do with a ruler in math and science. Is it a guess, or do you find the real size?",
      why: "The answer is \"measured.\" To measure means to use a tool, like a ruler, to find the exact size of something. Estimated and guessed mean a careful guess without a tool, and counted is for how many, not how tall." },
    { id: "SK-V1b-P3", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which science word should replace the yellow powder in sentence 6?",
      text: "Bees came to the bean flowers and carried the {0} from one flower to another.",
      slots: [{ options: ["nectar", "pollen", "seeds"], answer: 1 }],
      clue: "Think of the science word for the powder that bees carry from flower to flower. Then try each choice in the sentence.",
      why: "The answer is \"pollen.\" Pollen is the fine powder flowers make, and bees carry it from flower to flower. Nectar is a sweet liquid that bees drink, not a powder. Seeds are what new plants grow from, and they are not a powder either." },
    { id: "SK-V1b-P4", type: "dropdown", points: 2, dok: 2, passages: ["p1"],
      prompt: "Choose the school words that should replace bugs in sentence 7 and picked and gathered in sentence 8.",
      text: "Some {0} chewed holes in a few of our bean leaves. By June, we {1} a whole basket of ripe beans.",
      slots: [
        { options: ["insects", "seedlings", "predators"], answer: 0 },
        { options: ["planted", "harvested", "watered"], answer: 1 }
      ],
      clue: "For each blank, ask what the plain words mean. Then try each choice in the sentence and check that it means the same thing.",
      why: "The answers are \"insects\" and \"harvested.\" Insects is the science word for bugs. Predators hunt other animals, but these bugs ate leaves. To harvest means to pick and gather crops when they are ready. Planting and watering happen at the start, not in June when the beans are ripe." },
    { id: "SK-V1b-P5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Diego is giving a talk about his town. Which word could he use in place of the person who leads our town?",
      stem: ["\"The person who leads our town signed a new rule to keep dogs on a leash in the park.\""],
      choices: [
        { text: "mayor", correct: true },
        { text: "citizen" },
        { text: "volunteer" },
        { text: "visitor" }
      ],
      clue: "Think of the social studies word for the leader of a town or city.",
      why: "The answer is \"mayor.\" A mayor is the leader of a town or city. A citizen is any person who belongs to the town, a volunteer helps without pay, and a visitor is there for a short time." }
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
            ref: "SK-V1b-P4"
          },
          {
            id: "SK-V1b-C02",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.1.b"
            ],
            passages: [
              "p1"
            ],
            prompt: "In sentence 9, which words should replace shared them with so Ana's report sounds more exact?",
            choices: [
              {
                text: "donated them to",
                correct: true
              },
              {
                text: "traded them to"
              },
              {
                text: "sold them to"
              },
              {
                text: "stored them in"
              }
            ],
            clue: "A school word must mean the same thing as the plain words it replaces. Read your choice back in the sentence to check.",
            hints: [
              "A school word must mean the same thing as the plain words it replaces. Read your choice back in the sentence to check.",
              "Look at sentences 8 and 9 together. What did the class do with the beans, and did anyone pay for them?",
              "Trading brings something back to the class, but sentence 9 says nothing about getting anything back. Check the other choices."
            ],
            how: [
              "Find the plain words: \"We shared them with the lunchroom.\" The class gave the beans to the lunchroom.",
              "Test each choice. Sold and traded mean the class got something back. Stored means the class kept the beans somewhere.",
              "Donated them to means gave them for free to help. That matches shared them with."
            ],
            misconception: "A common mix-up is picking a word that sounds like a school word but changes what happened.",
            why: "The answer is \"donated them to.\" The class gave the beans away to help the lunchroom, and the report does not say anyone paid or traded. Sold and traded mean something came back to the class. Stored means the beans stayed with the class."
          },
          {
            ref: "SK-V1b-P5"
          },
          {
            id: "SK-V1b-C04",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.V.1.b"
            ],
            passages: [],
            prompt: "Ana's teacher wants her to use fewer words. Ana changes her sentence. Which statement about the change is true?",
            stem: [
              "Before: Next year, we want to grow tomatoes and peppers too.",
              "After: Next year, we want to grow more crops too."
            ],
            choices: [
              {
                text: "Crops includes every plant grown for food, so the new sentence covers more than two.",
                correct: true
              },
              {
                text: "Crops means only tomatoes and peppers, so the new sentence says exactly the same thing."
              },
              {
                text: "Crops means young plants, so the new sentence is now about seedlings in the garden."
              },
              {
                text: "Crops is a plain word, so the new sentence is less exact than the old one was."
              }
            ],
            clue: "A school word can take the place of a whole list. Ask which things the new word could also take in, and whether that matches the old words.",
            hints: [
              "A school word can take the place of a whole list. Ask which things the new word could also take in, and whether that matches the old words.",
              "Think about tomatoes and peppers. What kind of plants are they, and what else could a class grow?",
              "Young plants that have just started to grow have another name. Decide whether the sentence is about young plants or about plants grown for food."
            ],
            how: [
              "Look at the old words: tomatoes and peppers are two plants people grow for food.",
              "Crops is the school word for all the plants that people grow for food.",
              "So the new sentence uses one word for the whole group, and it covers more than the two plants.",
              "It does not mean only those two plants, it does not mean young plants, and it is a school word."
            ],
            misconception: "A common mix-up is thinking the school word names only the two things it replaced. It can name the whole group.",
            why: "The answer is \"Crops includes every plant grown for food, so the new sentence covers more than two.\" One school word takes the place of a list. Crops does not mean only two plants, and it does not mean seedlings. It is a school word, so it is not less exact."
          },
          {
            id: "SK-V1b-C05",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.1.b"
            ],
            passages: [
              "p1"
            ],
            prompt: "Ana wants to add school words to tell the reader what she will do. Choose the best word for each blank.",
            text: "In paragraph 1, Ana could add: Let me {0} what our young plants looked like. In paragraph 2, she could add: Let me {1} how bees help our beans.",
            slots: [
              {
                options: [
                  "explain",
                  "describe",
                  "compare"
                ],
                answer: 1
              },
              {
                options: [
                  "describe",
                  "compare",
                  "explain"
                ],
                answer: 2
              }
            ],
            clue: "Each academic word has its own job. Think about what job each blank needs done.",
            hints: [
              "Each academic word has its own job. Think about what job each blank needs done.",
              "Read the words after each blank. What is the reader going to learn: what something is like, or how and why something happens?",
              "For the second blank, bees help the beans in a certain way, and the reader will learn how. Think about which word is for how or why."
            ],
            how: [
              "Blank one: the reader will learn what the young plants looked like. Describe means to tell what something is like.",
              "Blank two: the reader will learn how bees help the beans. Explain means to tell how or why something happens.",
              "Compare means to tell how things are alike and different, and it does not fit either sentence."
            ],
            misconception: "A common mix-up is thinking describe and explain mean the same thing. Describe tells what it is like. Explain tells how or why.",
            why: "The answers are \"describe\" and \"explain.\" Telling what young plants looked like is describing. Telling how bees help beans is explaining how something works. Compare means to tell how things are alike and different."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-V1b-C06",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.1.b"
            ],
            passages: [
              "p3"
            ],
            prompt: "In sentence 3, Maya wants one school word to show that the park belongs to everyone in town. Which word should she use?",
            choices: [
              {
                text: "public",
                correct: true
              },
              {
                text: "private"
              },
              {
                text: "famous"
              },
              {
                text: "natural"
              }
            ],
            clue: "A school word should say in one word what the longer plain words say. Find the plain words first.",
            hints: [
              "A school word should say in one word what the longer plain words say. Find the plain words first.",
              "Read sentence 3. Who can use the park, and who owns it?",
              "Private is a word for the opposite idea, so it cannot say what the sentence says. Look at the other choices."
            ],
            how: [
              "The plain words are \"The park is free, and anyone in our town can use it.\"",
              "A place that belongs to everyone in the community and is open to all is called public.",
              "Private means only for certain people, famous means many people know it, and natural means made by nature."
            ],
            misconception: "A common mix-up is picking the opposite word, private, because it is also a place word.",
            why: "The answer is \"public.\" A public park belongs to the whole community, and anyone can use it. Private means only for certain people. Famous and natural do not say who can use the park."
          },
          {
            id: "SK-V1b-C07",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.1.b"
            ],
            passages: [
              "p3"
            ],
            prompt: "Maya wants to use exact school words in sentences 5 and 6. Choose the best word for each blank.",
            text: "Some {0} say the park needs fixing. We would like you to {1} the park for everyone.",
            slots: [
              {
                options: [
                  "visitors",
                  "residents",
                  "tourists"
                ],
                answer: 1
              },
              {
                options: [
                  "improve",
                  "inspect",
                  "imagine"
                ],
                answer: 0
              }
            ],
            clue: "Pick the school word that means the same as the plain words in the draft. Say the plain words in your head, then try each choice.",
            hints: [
              "Pick the school word that means the same as the plain words in the draft. Say the plain words in your head, then try each choice.",
              "For the first blank, look at who is talking in sentence 5. For the second blank, look at what Maya wants done to the park in sentence 6.",
              "For the first blank, the people live in the town all year. Think about whether visitors and tourists live there."
            ],
            how: [
              "Blank one: the plain words are \"the people who live here.\" People who live in a place are called residents. Visitors and tourists only come for a short time.",
              "Blank two: the plain words are \"make the park better.\" To improve something is to make it better. Inspect means look at closely, and imagine means picture in your mind.",
              "So the answers are residents and improve."
            ],
            misconception: "A common mix-up is choosing a word that sounds important but does not match the plain words.",
            why: "The answers are \"residents\" and \"improve.\" Residents are the people who live in a place, and to improve is to make something better. Visitors and tourists do not live there. Inspect means to look closely, and imagine means to picture something."
          },
          {
            id: "SK-V1b-C08",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.1.b"
            ],
            passages: [],
            prompt: "Maya wants to end her letter to the mayor. Choose the sentence that fits a letter to a town leader.",
            options: [
              "Thank you for taking the time to read my letter.",
              "Thanks a bunch, and see you at the park!",
              "That is all I have to say, so bye for now.",
              "Hope you like my letter, and write back soon."
            ],
            answer: [
              0
            ],
            pick: 1,
            clue: "Words should fit who will read them. Ask how you would talk to a mayor, and how you would talk to a friend.",
            hints: [
              "Words should fit who will read them. Ask how you would talk to a mayor, and how you would talk to a friend.",
              "Read each choice as if you were the mayor. Which one sounds respectful and clear?",
              "A choice that sounds like a goodbye to a friend does not fit a letter to a leader. Decide which of the other choices sounds the most respectful."
            ],
            how: [
              "The reader is the mayor, a town leader, so the words should be polite and clear.",
              "\"Thanks a bunch, and see you at the park!\" and \"That is all I have to say, so bye for now.\" sound like talking to a friend.",
              "\"Hope you like my letter, and write back soon.\" asks the mayor to do something in a casual way.",
              "\"Thank you for taking the time to read my letter.\" is polite and fits a letter to a leader."
            ],
            misconception: "A common mix-up is thinking the friendliest sentence is the best one. The words should fit the reader.",
            why: "The answer is \"Thank you for taking the time to read my letter.\" It is polite and clear for a letter to the mayor. The other choices sound like talking to a friend or ask for something in a casual way."
          },
          {
            id: "SK-V1b-C09",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.1.b"
            ],
            passages: [],
            prompt: "Match each sentence to the place where it fits best.",
            cols: [
              "a letter to the mayor",
              "a science report",
              "a talk with a friend"
            ],
            rows: [
              {
                text: "We request that the town repair the swings.",
                answer: 0
              },
              {
                text: "The seedlings grew taller each week.",
                answer: 1
              },
              {
                text: "Let's race to the swings after lunch!",
                answer: 2
              }
            ],
            clue: "Words fit a place when they sound like the people who will read or hear them. Ask who each sentence is talking to.",
            hints: [
              "Words fit a place when they sound like the people who will read or hear them. Ask who each sentence is talking to.",
              "Read each sentence out loud. Ask whether it asks a leader for something, tells what happened in an experiment, or invites a friend.",
              "One sentence invites someone to join in a game. Decide who would say that, and then match the other two."
            ],
            how: [
              "\"We request that the town repair the swings.\" asks a town leader to do something, in polite words, so it fits a letter to the mayor.",
              "\"The seedlings grew taller each week.\" tells what happened over time, in science words, so it fits a science report.",
              "\"Let's race to the swings after lunch!\" invites a friend to play, so it fits a talk with a friend."
            ],
            misconception: "A common mix-up is matching by topic, since two of the sentences mention the park or plants. Match by who is reading or listening.",
            why: "The request to repair the swings fits a letter to the mayor. The seedlings sentence uses science words, so it fits a science report. The race invitation is how you talk with a friend."
          },
          {
            id: "SK-V1b-C10",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.1.b"
            ],
            passages: [
              "p3"
            ],
            prompt: "Maya wants to rewrite sentence 7 for her letter. Choose TWO rewrites that sound right for a town leader and keep Maya's meaning.",
            pick: 2,
            choices: [
              {
                text: "A new swing set would be costly, but families could help pay for it.",
                correct: true
              },
              {
                text: "A new swing set would need funds, and families could help raise them.",
                correct: true
              },
              {
                text: "A new swing set would be nice, and families could play on it."
              },
              {
                text: "A new swing set is costly, so families should not help with it."
              },
              {
                text: "Swings are fun, so the town should buy a great many of them."
              }
            ],
            clue: "A good rewrite keeps all of Maya's ideas and changes only the words. Check each choice for both ideas in sentence 7.",
            hints: [
              "A good rewrite keeps all of Maya's ideas and changes only the words. Check each choice for both ideas in sentence 7.",
              "Reread sentence 7 and list its two ideas. Then check which choices keep both ideas.",
              "One choice says the families should not help, which changes what Maya wants. Look at the other four."
            ],
            how: [
              "Sentence 7 has two ideas: a new swing set costs money, and families could help raise the money.",
              "\"Costly\" and \"funds\" are school words for the first idea. \"Help pay for it\" and \"help raise them\" keep the second idea.",
              "The choice about playing leaves out the money. The choice that says families should not help changes the meaning. The choice about buying a great many swings is a different idea."
            ],
            misconception: "A common mix-up is choosing a rewrite that sounds polite but leaves out or changes one of Maya's ideas.",
            why: "The answers are \"A new swing set would be costly, but families could help pay for it.\" and \"A new swing set would need funds, and families could help raise them.\" Both keep the cost and the families' help. The others leave out the cost, say families should not help, or ask for something else."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-V1b-C11",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.1.b"
            ],
            passages: [
              "p4"
            ],
            prompt: "In sentence 5, Jamal wants a science word for the rubbing between the wheels and the rug. Which word should he use?",
            choices: [
              {
                text: "friction",
                correct: true
              },
              {
                text: "gravity"
              },
              {
                text: "energy"
              },
              {
                text: "motion"
              }
            ],
            clue: "A science word should name the exact idea. Find what the plain words in the sentence describe.",
            hints: [
              "A science word should name the exact idea. Find what the plain words in the sentence describe.",
              "Read sentence 5 and the sentences around it. What is happening between the wheels and the rug?",
              "Gravity is a science word about a pull toward the ground. Decide whether sentence 5 is about a pull or about two things rubbing."
            ],
            how: [
              "The plain words are \"the rubbing between the wheels and the rug.\"",
              "The science word for the force that comes from two things rubbing together is friction. The rug has more of it than the smooth floor.",
              "Gravity is a pull toward the ground, energy is the power to do work, and motion is moving."
            ],
            misconception: "A common mix-up is choosing a famous science word, such as gravity, that does not match this idea.",
            why: "The answer is \"friction.\" Friction is the rubbing force between two things that touch, and it slows moving things down. Gravity pulls things toward the ground, energy is the power to do work, and motion is moving."
          },
          {
            id: "SK-V1b-C12",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.1.b"
            ],
            passages: [],
            prompt: "Choose the math word that fits each blank.",
            stem: [
              "Zuri explains her work in math class. \"I multiplied 6 by 4 and got 24. Then I added 6 and 4 and got 10.\""
            ],
            text: "The answer to Zuri's multiplying is the {0}. The answer to her adding is the {1}.",
            slots: [
              {
                options: [
                  "sum",
                  "difference",
                  "product"
                ],
                answer: 2
              },
              {
                options: [
                  "sum",
                  "product",
                  "quotient"
                ],
                answer: 0
              }
            ],
            clue: "Math words name the answer to each kind of problem. Match each kind of problem to the name for its answer.",
            hints: [
              "Math words name the answer to each kind of problem. Match each kind of problem to the name for its answer.",
              "Find the operation in Zuri's words for each blank. Then say the name for its answer.",
              "The answer to dividing has its own name, and Zuri did not divide. Decide which blank that choice could fit."
            ],
            how: [
              "Blank one: Zuri multiplied. The answer to a multiplication problem is called the product.",
              "Blank two: Zuri added. The answer to an addition problem is called the sum.",
              "A difference is the answer to subtracting, and a quotient is the answer to dividing. Zuri did neither."
            ],
            misconception: "A common mix-up is thinking sum means any answer in math. Each kind of problem has its own word.",
            why: "The answers are \"product\" and \"sum.\" A product is the answer to multiplying, and a sum is the answer to adding. A difference is the answer to subtracting, and a quotient is the answer to dividing."
          },
          {
            id: "SK-V1b-C13",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.1.b"
            ],
            passages: [],
            prompt: "Mr. Ford wants a social studies word for an area that has its own kind of land. Which word should he use?",
            stem: [
              "Mr. Ford said, \"North Georgia has mountains. South Georgia has flat land near the coast. Each of these big areas of the state is called a ___.\""
            ],
            choices: [
              {
                text: "region",
                correct: true
              },
              {
                text: "treaty"
              },
              {
                text: "harbor"
              },
              {
                text: "citizen"
              }
            ],
            clue: "Use the plain words in the sentence to decide what the blank must name. Think about the size of what is being named.",
            hints: [
              "Use the plain words in the sentence to decide what the blank must name. Think about the size of what is being named.",
              "Read what Mr. Ford says about North Georgia and South Georgia. What kind of thing is each one?",
              "A harbor is a place for boats, and a citizen is a person. Decide whether Mr. Ford is naming a place for boats, a person or a big area."
            ],
            how: [
              "Mr. Ford names big areas of the state that have their own kind of land: mountains in the north and flat land in the south.",
              "A big area with its own kind of land is a region.",
              "A treaty is an agreement between countries, a harbor is a place on the coast where boats stay safe, and a citizen is a person."
            ],
            misconception: "A common mix-up is choosing a map word that sounds right, such as harbor, instead of matching the meaning.",
            why: "The answer is \"region.\" A region is a big area that is alike in some way, such as having the same kind of land. A treaty is an agreement between countries, a harbor is a place where boats stay safe, and a citizen is a person who belongs to a place."
          },
          {
            id: "SK-V1b-C14",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.1.b"
            ],
            passages: [],
            prompt: "Which TWO sentences use the school word correctly?",
            pick: 2,
            choices: [
              {
                text: "Our group recorded how far each car rolled in a chart.",
                correct: true
              },
              {
                text: "From the chart, we concluded that heavier cars rolled farther.",
                correct: true
              },
              {
                text: "We recorded the cars by hoping they would roll farther."
              },
              {
                text: "We concluded the chart by measuring it with a ruler."
              },
              {
                text: "Our group concluded each car to the finish line."
              }
            ],
            clue: "Check each school word against its meaning. Say what the word means, then see if the sentence does that.",
            hints: [
              "Check each school word against its meaning. Say what the word means, then see if the sentence does that.",
              "Record means to write down what you see or measure. Conclude means to decide something after thinking about the facts. Which sentences do exactly that?",
              "A sentence can have a school word that sounds right but is used in the wrong way. Look for sentences where the action does not match the word."
            ],
            how: [
              "Recorded means wrote down. \"Our group recorded how far each car rolled in a chart\" does that.",
              "Concluded means decided after thinking about facts. \"From the chart, we concluded that heavier cars rolled farther\" does that.",
              "Hoping, measuring a chart with a ruler and moving a car to the finish line do not match recorded or concluded."
            ],
            misconception: "A common mix-up is choosing any sentence that has a school word in it. The word has to fit what is happening.",
            why: "The answers are \"Our group recorded how far each car rolled in a chart.\" and \"From the chart, we concluded that heavier cars rolled farther.\" The first writes down what was measured, and the second decides something from facts. Hoping is not recording, a ruler does not conclude a chart, and nobody can conclude a car to the finish line."
          },
          {
            id: "SK-V1b-C15",
            type: "hottext",
            points: 1,
            dok: 3,
            std: [
              "3.L.V.1.b"
            ],
            passages: [
              "p4"
            ],
            prompt: "Jamal is going to turn his talk into a written report. Choose the TWO sentences he should take out because they only fit a talk.",
            targets: [
              "p4:1:1",
              "p4:2:3",
              "p4:2:4",
              "p4:3:2",
              "p4:3:3"
            ],
            answer: [
              "p4:1:1",
              "p4:3:3"
            ],
            pick: 2,
            clue: "A talk and a report are different. Think about words that only make sense when someone is listening in the room.",
            hints: [
              "A talk and a report are different. Think about words that only make sense when someone is listening in the room.",
              "Look at the first and last sentences of the talk, and the sentences that tell about the test. Which would a reader of a report not need?",
              "The sentences about the floor and the rug tell what happened in the test, so a report needs them. Decide which others belong to a talk."
            ],
            how: [
              "A written report tells facts and results. It does not greet the audience or thank them for listening.",
              "\"Good morning, everyone.\" greets the people in the room.",
              "\"Thank you for listening.\" thanks the people who just heard the talk.",
              "The sentences about the smooth floor, the rug and what the test showed are facts a report needs."
            ],
            misconception: "A common mix-up is taking out sentences with plain words. The sentences to remove are the ones that only work when someone is listening.",
            why: "The answers are \"Good morning, everyone.\" and \"Thank you for listening.\" Both speak to people in the room, so they fit a talk but not a written report. The sentences about the floor, the rug and the results are facts a report would keep."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-V1b-S01",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.1.b"
      ],
      passages: [
        "p5"
      ],
      like: [
        "SK-V1b-P4"
      ],
      prompt: "Kendra wants to use exact social studies words. Choose the best word for each blank.",
      text: "In sentence 2, Atlanta is the {0} of our state. In sentence 3, the line that shows where Georgia stops is the {1}.",
      slots: [
        {
          options: [
            "coast",
            "county",
            "capital"
          ],
          answer: 2
        },
        {
          options: [
            "border",
            "bridge",
            "river"
          ],
          answer: 0
        }
      ],
      clue: "Pick the social studies word that means the same as the plain words. Say the plain words in your head, then try each choice.",
      hints: [
        "Pick the social studies word that means the same as the plain words. Say the plain words in your head, then try each choice.",
        "For each blank, find the plain words in the draft. Ask what is being named: a city, a line or a body of water.",
        "For the second blank, the plain words name a line on the map, not something you can swim in or cross on a road."
      ],
      how: [
        "Blank one: the plain words are \"the city where our state leaders work.\" That is the capital of a state. A coast is land by the ocean, and a county is a part of a state.",
        "Blank two: the plain words are \"a line on the map that shows where Georgia stops and Alabama starts.\" A line between places is a border.",
        "A bridge and a river are things you can see on the ground, not a line on a map."
      ],
      misconception: "A common mix-up is choosing a map word that sounds right but names something else.",
      why: "The answers are \"capital\" and \"border.\" A capital is the city where the leaders of a state work. A border is the line between two states. A coast is land by the ocean, a county is a part of a state, and a bridge and a river are things on the ground."
    },
    {
      id: "SK-V1b-S02",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.1.b"
      ],
      passages: [
        "p5"
      ],
      like: [
        "SK-V1b-C02"
      ],
      prompt: "Kendra wants a school phrase for took part in, in sentence 6. Which one means the same thing?",
      choices: [
        {
          text: "participated in",
          correct: true
        },
        {
          text: "watched over"
        },
        {
          text: "waited for"
        },
        {
          text: "stayed away from"
        }
      ],
      clue: "A school word must mean the same thing as the plain words it replaces. Read your choice back in the sentence to check.",
      hints: [
        "A school word must mean the same thing as the plain words it replaces. Read your choice back in the sentence to check.",
        "Read sentence 6. What did everyone in the class do with the project?",
        "A choice that means the class only looked at the project does not match someone taking part. Check the other choices."
      ],
      how: [
        "Find the plain words: \"Everyone in the class took part in the project.\" Everyone joined in and helped.",
        "Participated in means joined in and took part, so it matches.",
        "Watched over, waited for and stayed away from do not mean joined in."
      ],
      misconception: "A common mix-up is picking a longer word because it sounds smart. The word must mean the same thing.",
      why: "The answer is \"participated in.\" It means took part in, which is what everyone in the class did. Watching over, waiting for and staying away from are different actions."
    },
    {
      id: "SK-V1b-S03",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.1.b"
      ],
      passages: [],
      like: [
        "SK-V1b-P5"
      ],
      prompt: "Lena is giving a talk about deer. Which science word could she use in place of an animal that eats only plants?",
      stem: [
        "\"A deer is an animal that eats only plants, so it spends its day looking for leaves and grass.\""
      ],
      choices: [
        {
          text: "herbivore",
          correct: true
        },
        {
          text: "carnivore"
        },
        {
          text: "omnivore"
        },
        {
          text: "producer"
        }
      ],
      clue: "A science word should name the exact idea. Find what the plain words describe.",
      hints: [
        "A science word should name the exact idea. Find what the plain words describe.",
        "Read what the deer eats in the sentence. Is it only plants, only meat, or both?",
        "A carnivore is a word for an animal that eats meat. Decide whether the deer in the sentence eats meat."
      ],
      how: [
        "The plain words are \"an animal that eats only plants.\"",
        "An animal that eats only plants is called a herbivore.",
        "A carnivore eats meat, an omnivore eats both plants and meat, and a producer is a living thing, such as a plant, that makes its own food."
      ],
      misconception: "A common mix-up is choosing omnivore or carnivore, because they sound like the same kind of word. Each one names a different diet.",
      why: "The answer is \"herbivore.\" A herbivore is an animal that eats only plants. A carnivore eats meat, an omnivore eats both plants and meat, and a producer makes its own food."
    },
    {
      id: "SK-V1b-S04",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.V.1.b"
      ],
      passages: [],
      like: [
        "SK-V1b-C04"
      ],
      prompt: "Mia shortens a sentence for her teacher. What is true about the shorter version?",
      stem: [
        "Mia's first try: Zookeepers showed dogs, bears and whales.",
        "Her second try: Zookeepers showed many mammals."
      ],
      choices: [
        {
          text: "Mammals takes in dogs, bears and whales and many other animals too.",
          correct: true
        },
        {
          text: "Mammals is the same as saying only dogs, bears and whales."
        },
        {
          text: "Mammals is a group of egg-laying animals, so it describes birds."
        },
        {
          text: "Mammals is an everyday word, so it tells the reader less than before."
        }
      ],
      clue: "A school word can stand for many animals at once. Ask which animals the new word could also include.",
      hints: [
        "A school word can stand for many animals at once. Ask which animals the new word could also include.",
        "Think about dogs, bears and whales. What do they have in common, and what other animals might share it?",
        "Animals that lay eggs belong to a different group. Decide whether the sentence is about egg layers or about the group the three animals share."
      ],
      how: [
        "Look at the old words: dogs, bears and whales all have hair or fur, breathe air and feed milk to their babies.",
        "Mammals is the school word for that whole group.",
        "So the new sentence uses one word for the group, and it covers more than those three animals."
      ],
      misconception: "A common mix-up is thinking the school word names only the things it replaced.",
      why: "The answer is \"Mammals takes in dogs, bears and whales and many other animals too.\" Dogs, bears and whales are all mammals, and so are many other animals. Mammals does not mean animals that lay eggs."
    },
    {
      id: "SK-V1b-S05",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.1.b"
      ],
      passages: [],
      like: [
        "SK-V1b-C05"
      ],
      prompt: "Mr. Hill's class is studying flowers. Choose the best word for each blank.",
      text: "Before we begin, please {0} each part of the flower by writing its name next to it. Then we will {1} how tall the stem is with a ruler.",
      slots: [
        {
          options: [
            "measure",
            "label",
            "wonder"
          ],
          answer: 1
        },
        {
          options: [
            "measure",
            "label",
            "wonder"
          ],
          answer: 0
        }
      ],
      clue: "Each school word has its own job. Think about what job each blank needs done.",
      hints: [
        "Each school word has its own job. Think about what job each blank needs done.",
        "Read the words after each blank. Is the class writing names, or finding out a size?",
        "For the second blank, a ruler is a tool for finding a size. Think about which word goes with using a tool to find out how tall."
      ],
      how: [
        "Blank one: the class writes the name of each part next to it. Label means to put a name on something.",
        "Blank two: the class uses a ruler to find how tall the stem is. Measure means to find a size with a tool.",
        "Wonder means to ask yourself a question, and it does not fit either sentence."
      ],
      misconception: "A common mix-up is using the same word for both blanks. Each blank needs a different job.",
      why: "The answers are \"label\" and \"measure.\" Writing each part's name is labeling, and using a ruler to find how tall the stem is is measuring. Wondering is asking yourself a question."
    },
    {
      id: "SK-V1b-S06",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.1.b"
      ],
      passages: [
        "p6"
      ],
      like: [
        "SK-V1b-C06"
      ],
      prompt: "In sentence 3, which school word could Tariq use for the people who live and work near the shelter?",
      choices: [
        {
          text: "community",
          correct: true
        },
        {
          text: "audience"
        },
        {
          text: "crowd"
        },
        {
          text: "team"
        }
      ],
      clue: "A school word should say in one word what the longer plain words say. Find the plain words first.",
      hints: [
        "A school word should say in one word what the longer plain words say. Find the plain words first.",
        "Read sentence 3. Who is helping the shelter, and what do they share?",
        "A team works together on one job. Decide whether these people share a job or share a place."
      ],
      how: [
        "The plain words are \"the people who live and work near the shelter.\"",
        "People who live and work in the same place are a community.",
        "An audience watches or listens to something, a crowd is a lot of people in one spot, and a team works together on a job."
      ],
      misconception: "A common mix-up is picking crowd, because it also names many people.",
      why: "The answer is \"community.\" A community is the people who live and work in the same place. An audience listens or watches, a crowd is many people in one spot, and a team works together on one job."
    },
    {
      id: "SK-V1b-S07",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.1.b"
      ],
      passages: [
        "p6"
      ],
      like: [
        "SK-V1b-C07"
      ],
      prompt: "Tariq's draft uses plain words. Pick the school word that fits each blank.",
      text: "The {0} are very busy. Tariq asks Dr. Ellis to {1} more room for the dogs.",
      slots: [
        {
          options: [
            "strangers",
            "neighbors",
            "staff"
          ],
          answer: 2
        },
        {
          options: [
            "create",
            "collect",
            "protest"
          ],
          answer: 0
        }
      ],
      clue: "Say the plain words from the draft in your head, then try each choice in the sentence.",
      hints: [
        "Say the plain words from the draft in your head, then try each choice in the sentence.",
        "For the first blank, look at who works at the shelter. For the second blank, look at what Tariq wants for the dogs.",
        "For the second blank, Tariq wants room that does not exist now. Think about which word means to make something new."
      ],
      how: [
        "Blank one: the plain words are \"the folks who work there.\" The people who work at a place together are its staff. Neighbors live nearby, and strangers are people you do not know.",
        "Blank two: Tariq wants someone to give the dogs more room. To create room is to make it. Collect means to gather things, and protest means to speak against something.",
        "So the answers are staff and create."
      ],
      misconception: "A common mix-up is choosing a word that sounds important but does not match the plain words.",
      why: "The answers are \"staff\" and \"create.\" Staff are the people who work at a place, and to create room is to make it. Neighbors live nearby, and strangers are people you do not know. Collecting is gathering, and protesting is speaking against something."
    },
    {
      id: "SK-V1b-S08",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.1.b"
      ],
      passages: [],
      like: [
        "SK-V1b-C08"
      ],
      prompt: "Tariq is closing his letter to the shelter director. Which sentence suits that reader?",
      options: [
        "I respectfully ask that you consider my idea.",
        "You gotta check out my idea, okay?",
        "Say yes, because my idea is the greatest.",
        "I bet you will love it, so just say yes."
      ],
      answer: [
        0
      ],
      pick: 1,
      clue: "Words should fit who will read them. Ask how you would talk to the head of a shelter, and how you would talk to a friend.",
      hints: [
        "Words should fit who will read them. Ask how you would talk to the head of a shelter, and how you would talk to a friend.",
        "Read each choice as if you were Dr. Ellis. Which one sounds respectful and gives you room to decide?",
        "A choice that tells the reader what to say sounds bossy, not polite. Decide which of the others leaves the decision to the reader."
      ],
      how: [
        "The reader is Dr. Ellis, the director of the shelter, so the words should be polite and clear.",
        "\"You gotta check out my idea, okay?\" sounds like talking to a friend.",
        "\"Please say yes\" and \"just say yes\" tell Dr. Ellis what to decide.",
        "\"I respectfully ask that you consider my idea.\" is polite and leaves the decision to the reader."
      ],
      misconception: "A common mix-up is choosing the most excited sentence. The words should fit the reader.",
      why: "The answer is \"I respectfully ask that you consider my idea.\" It is polite and leaves the decision to Dr. Ellis. The other choices sound like talking to a friend or tell the reader what to say."
    },
    {
      id: "SK-V1b-S09",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.1.b"
      ],
      passages: [],
      like: [
        "SK-V1b-C09"
      ],
      prompt: "Decide where each line would be said or written.",
      cols: [
        "a chat at recess",
        "a note to the principal",
        "a social studies report"
      ],
      rows: [
        {
          text: "I would like to ask whether the class may use the gym on Friday.",
          answer: 1
        },
        {
          text: "Early settlers built homes near rivers so they could get water.",
          answer: 2
        },
        {
          text: "Want to trade seats at the game tomorrow?",
          answer: 0
        }
      ],
      clue: "Words fit a place when they sound like the people who will read or hear them. Ask who each line is talking to.",
      hints: [
        "Words fit a place when they sound like the people who will read or hear them. Ask who each line is talking to.",
        "Read each line out loud. Ask whether it asks an adult for something, tells facts about the past, or checks with a friend.",
        "One line asks someone to swap seats at a game. Decide who would say that, and then match the other two."
      ],
      how: [
        "\"I would like to ask whether the class may use the gym on Friday.\" asks an adult for permission in polite words, so it fits a note to the principal.",
        "\"Early settlers built homes near rivers so they could get water.\" tells facts about the past, so it fits a social studies report.",
        "\"Want to trade seats at the game tomorrow?\" is how you talk at recess."
      ],
      misconception: "A common mix-up is matching by topic. Match by who is reading or listening.",
      why: "The polite request about the gym fits a note to the principal. The sentence about settlers states facts about the past, so it fits a social studies report. The seat trade is how you talk at recess."
    },
    {
      id: "SK-V1b-S10",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.1.b"
      ],
      passages: [
        "p6"
      ],
      like: [
        "SK-V1b-C10"
      ],
      prompt: "Tariq is revising sentence 4. Pick TWO versions that suit a director and say what he said.",
      pick: 2,
      choices: [
        {
          text: "The shelter has many dogs but lacks enough kennels.",
          correct: true
        },
        {
          text: "The shelter has more dogs than it has space for.",
          correct: true
        },
        {
          text: "The shelter has many dogs, so it needs fewer volunteers."
        },
        {
          text: "The shelter has enough room, and it welcomes every dog."
        },
        {
          text: "Dogs love shelters, so the town should build lots of them."
        }
      ],
      clue: "A good rewrite keeps all of Tariq's ideas and changes only the words. Check each choice for both ideas in sentence 4.",
      hints: [
        "A good rewrite keeps all of Tariq's ideas and changes only the words. Check each choice for both ideas in sentence 4.",
        "Reread sentence 4 and list its two ideas. Then check which choices keep both ideas.",
        "One choice says the shelter has enough room, which changes what Tariq says. Look at the other four."
      ],
      how: [
        "Sentence 4 has two ideas: the shelter has many dogs, and it does not have enough cages for them.",
        "\"Lacks enough kennels\" and \"more dogs than it has space for\" both keep the two ideas.",
        "The choice about needing fewer volunteers is a different idea, the one about enough room says the opposite, and the one about building lots of shelters is a different idea."
      ],
      misconception: "A common mix-up is choosing a rewrite that sounds polite but changes one of Tariq's ideas.",
      why: "The answers are \"The shelter has many dogs but lacks enough kennels.\" and \"The shelter has more dogs than it has space for.\" Both keep many dogs and not enough room. The others change the meaning or bring in a new idea."
    },
    {
      id: "SK-V1b-S11",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.1.b"
      ],
      passages: [],
      like: [
        "SK-V1b-C11"
      ],
      prompt: "Mara is giving a talk about her drum. Which science word could she use in place of the shaking back and forth?",
      stem: [
        "\"When I hit the drum, the top skin moves up and down very fast. The shaking back and forth makes the sound you hear.\""
      ],
      choices: [
        {
          text: "vibration",
          correct: true
        },
        {
          text: "pressure"
        },
        {
          text: "temperature"
        },
        {
          text: "reflection"
        }
      ],
      clue: "A science word should name the exact idea. Find what the plain words describe.",
      hints: [
        "A science word should name the exact idea. Find what the plain words describe.",
        "Read what the drum skin does when it is hit. What kind of motion is it?",
        "Temperature is about how hot or cold something is. Decide whether the drum skin is getting hotter or colder in the talk."
      ],
      how: [
        "The plain words are \"the shaking back and forth.\"",
        "A quick shaking back and forth is called a vibration. The drum skin vibrates and makes the sound.",
        "Pressure is pushing on something, temperature is how hot or cold, and reflection is light bouncing back."
      ],
      misconception: "A common mix-up is choosing a science word that sounds right but names a different idea.",
      why: "The answer is \"vibration.\" A vibration is a quick shaking back and forth, and it makes sound. Pressure is pushing, temperature is how hot or cold something is, and reflection is light bouncing back."
    },
    {
      id: "SK-V1b-S12",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.1.b"
      ],
      passages: [],
      like: [
        "SK-V1b-C12"
      ],
      prompt: "Pick the math word that fits each blank.",
      stem: [
        "Dev cut a pizza into 8 equal slices and ate 3 of them. He wrote the fraction 3/8 on the board."
      ],
      text: "In 3/8, the top number, 3, is the {0}. The bottom number, 8, is the {1}.",
      slots: [
        {
          options: [
            "denominator",
            "numerator",
            "fraction"
          ],
          answer: 1
        },
        {
          options: [
            "numerator",
            "denominator",
            "equation"
          ],
          answer: 1
        }
      ],
      clue: "Math words name the parts of a fraction. Think about what each number in 3/8 tells you about the pizza.",
      hints: [
        "Math words name the parts of a fraction. Think about what each number in 3/8 tells you about the pizza.",
        "Find what 3 tells about the pizza and what 8 tells about the pizza. Then match each number to a part name.",
        "The whole fraction has its own name, and it is the one that names the entire thing, not one number in it. Decide which blank that choice could fit."
      ],
      how: [
        "The 3 tells how many slices Dev ate. The top number of a fraction, which counts the parts you have, is the numerator.",
        "The 8 tells how many equal slices the whole pizza was cut into. The bottom number, which tells the total equal parts, is the denominator.",
        "A fraction is the whole 3/8, and an equation has an equals sign."
      ],
      misconception: "A common mix-up is thinking the top number is the denominator because it is first. The denominator is the bottom number.",
      why: "The answers are \"numerator\" and \"denominator.\" The numerator is the top number and counts the parts you have. The denominator is the bottom number and tells how many equal parts make the whole. A fraction is the entire 3/8, and an equation has an equals sign."
    },
    {
      id: "SK-V1b-S13",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.1.b"
      ],
      passages: [],
      like: [
        "SK-V1b-C13"
      ],
      prompt: "Which word completes Ms. Reed's sentence about Africa, Asia and Europe?",
      stem: [
        "Each of these is one of Earth's seven huge areas of land, which is called a ___."
      ],
      choices: [
        {
          text: "continent",
          correct: true
        },
        {
          text: "county"
        },
        {
          text: "capital"
        },
        {
          text: "coast"
        }
      ],
      clue: "Use the plain words in the sentence to decide what the blank must name. Think about the size of what is being named.",
      hints: [
        "Use the plain words in the sentence to decide what the blank must name. Think about the size of what is being named.",
        "Read how big the sentence says each area is. Is it a part of one state or something much bigger?",
        "A county is a part of one state. Decide whether the sentence is naming a part of a state or something far bigger."
      ],
      how: [
        "The sentence names huge areas of land, and there are seven of them on Earth.",
        "The biggest areas of land on Earth are called continents.",
        "A county is part of a state, a capital is a city, and a coast is land next to the ocean."
      ],
      misconception: "A common mix-up is choosing a map word that sounds right but names something much smaller.",
      why: "The answer is \"continent.\" A continent is one of the biggest areas of land on Earth. A county is part of a state, a capital is a city, and a coast is the land next to the ocean."
    },
    {
      id: "SK-V1b-S14",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.1.b"
      ],
      passages: [],
      like: [
        "SK-V1b-C14"
      ],
      prompt: "Pick the TWO sentences where the school word is used the right way.",
      pick: 2,
      choices: [
        {
          text: "Kofi investigated why the ice melted faster in the sun.",
          correct: true
        },
        {
          text: "Nia described the shape of each snowflake in her notebook.",
          correct: true
        },
        {
          text: "Dev investigated the ice by wishing it would melt."
        },
        {
          text: "Rosa described the ice by weighing it on a scale."
        },
        {
          text: "Sam described his answer to the principal's office."
        }
      ],
      clue: "Check each school word against its meaning. Say what the word means, then see if the sentence does that.",
      hints: [
        "Check each school word against its meaning. Say what the word means, then see if the sentence does that.",
        "Investigate means to look closely to find out the reason for something. Describe means to tell what something is like. Which sentences do exactly that?",
        "A sentence can have a school word that sounds right but is used in the wrong way. Look for sentences where the action does not match the word."
      ],
      how: [
        "Investigated means looked closely to find out why. \"Kofi investigated why the ice melted faster in the sun\" does that.",
        "Described means told what something is like. \"Nia described the shape of each snowflake in her notebook\" does that.",
        "Wishing, weighing and going to an office do not match investigated or described."
      ],
      misconception: "A common mix-up is choosing any sentence that has a school word in it. The word has to fit what is happening.",
      why: "The answers are \"Kofi investigated why the ice melted faster in the sun.\" and \"Nia described the shape of each snowflake in her notebook.\" The first looks closely to find a reason, and the second tells what the snowflakes are like. Wishing is not investigating, weighing is not describing, and nobody can describe an answer to an office."
    },
    {
      id: "SK-V1b-S15",
      type: "hottext",
      points: 1,
      dok: 3,
      std: [
        "3.L.V.1.b"
      ],
      passages: [],
      like: [
        "SK-V1b-C15"
      ],
      prompt: "Zuri will turn her talk into a written report. Which TWO lines should she cut?",
      stem: [
        "Zuri's talk about the class plant:"
      ],
      options: [
        "Hi, class, I am so glad you came.",
        "Our bean plant grew six inches in two weeks.",
        "It grew faster in the window than in the closet.",
        "Now I am happy to take your questions.",
        "We measured the plant every Monday."
      ],
      answer: [
        0,
        3
      ],
      pick: 2,
      clue: "A talk and a report are different. Think about words that only make sense when someone is listening in the room.",
      hints: [
        "A talk and a report are different. Think about words that only make sense when someone is listening in the room.",
        "Look at the first and the fourth lines, and the lines that tell about the plant. Which would a reader of a report not need?",
        "The sentences about measuring and about the window tell what happened, so a report needs them. Decide which others belong to a talk."
      ],
      how: [
        "A written report tells facts and results. It does not welcome the audience or invite questions.",
        "\"Hi, class, I am so glad you came.\" greets the people in the room.",
        "\"Now I am happy to take your questions.\" talks to people who are listening right now.",
        "The sentences about the growth, the window and the measuring are facts a report needs."
      ],
      misconception: "A common mix-up is taking out sentences with numbers. The sentences to remove are the ones that only work when someone is listening.",
      why: "The answers are \"Hi, class, I am so glad you came.\" and \"Now I am happy to take your questions.\" Both speak to people in the room, so they fit a talk but not a written report. The sentences about growth, the window and measuring are facts a report would keep."
    }
  ],
  addons: {
    "SK-V1b-P4": {
      hints: [
        "Pick the school word that means the same as the plain words. Say the plain words in your head, then try each choice in the sentence.",
        "For the first blank, look at what the bugs did to the leaves. For the second blank, look at the month and the ripe beans.",
        "For the second blank, planting and watering happen at the start of the year. June is near the end."
      ],
      how: [
        "Blank one: the plain word is \"bugs.\" The science word for small animals like beetles is insects. Predators hunt other animals, but these bugs ate leaves.",
        "Blank two: the plain words are \"picked and gathered.\" To harvest is to pick crops when they are ready. By June the beans are ripe, so the class harvested them.",
        "Planted and watered happen at the start, not in June."
      ],
      misconception: "A common mix-up is choosing a word that is a science word but does not fit the moment in the story."
    },
    "SK-V1b-P5": {
      hints: [
        "A school word should mean the same thing as the plain words. Find the plain words in the quote.",
        "Look at the words the person who leads our town. What job does that person have?",
        "A citizen is anyone who belongs to the town. Decide whether the sentence names anyone or one leader."
      ],
      how: [
        "Find the plain words: \"the person who leads our town.\"",
        "The leader of a town or city is called the mayor.",
        "A citizen belongs to the town, a volunteer helps without pay, and a visitor is only there for a short time."
      ],
      misconception: "A common mix-up is choosing citizen, because it is also a town word. It names everyone, not the leader."
    },
    "SK-V1b-P1": {
      hints: [
        "All four choices are science words about plants. Ask whether each one names a whole plant or only one part of a plant.",
        "Read sentence 3. What does the writer say about the plants: are they young, or are they only a part?",
        "A root is one part that grows under the ground. Check whether the sentence is about a part or a whole plant."
      ],
      how: [
        "Find the plain words: \"tiny young plants.\"",
        "Roots, petals and stems are parts of a plant, not whole plants.",
        "Seedlings are young plants that have just started to grow from seeds."
      ],
      misconception: "A common mix-up is picking a plant part because it is a plant word. The sentence names whole young plants."
    },
    "SK-V1b-P2": {
      hints: [
        "Think about what you do with a ruler in math and science. Does it give a guess, or the real size?",
        "Read sentence 4. What does the class use, and what do they want to know?",
        "Estimated and guessed both mean to say about how much without a tool. Check whether the class used a tool."
      ],
      how: [
        "Find the plain words: \"used a ruler to find out how tall.\"",
        "Using a tool to find the exact size of something is measuring.",
        "Estimated and guessed mean a careful guess without a tool, and counted is for how many."
      ],
      misconception: "A common mix-up is picking estimated, because it is also a math word. The ruler tells you the class found the real size."
    },
    "SK-V1b-P3": {
      hints: [
        "Think of the science word for the powder bees carry from flower to flower. Try each choice in the sentence.",
        "Read sentence 6. What do the bees carry, and what does it look like?",
        "Nectar is a sweet liquid. Decide whether the sentence is about a liquid or a powder."
      ],
      how: [
        "Find the plain words: \"the yellow powder.\"",
        "The fine powder that flowers make is called pollen, and bees carry it from flower to flower.",
        "Nectar is a sweet liquid, and seeds are what new plants grow from."
      ],
      misconception: "A common mix-up is choosing nectar, because bees are linked to it. Nectar is a liquid, not a powder."
    }
  },
  /* B5-b5b:core:end */
  test: [
    { id: "SK-V1b-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Theo wants to use a science word in sentence 2. Which word should replace a kind of animal that has scaly skin, breathes air and lays eggs?",
      choices: [
        { text: "reptile", correct: true },
        { text: "mammal" },
        { text: "amphibian" },
        { text: "insect" }
      ],
      clue: "All four choices are groups of animals. Which group has scaly skin, breathes air and lays eggs on land?",
      why: "The answer is \"reptile.\" Reptiles, like turtles and alligators, have scaly skin, breathe air and lay eggs. Mammals have hair or fur, amphibians like frogs have moist skin with no scales, and insects have six legs." },
    { id: "SK-V1b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Read sentence 5. Which word should replace hole she dug to be more exact?",
      choices: [
        { text: "nest", correct: true },
        { text: "den" },
        { text: "hive" },
        { text: "shelter" }
      ],
      clue: "All four choices are places animals use. Think about what each place is for, and which one fits what the turtle does in this hole.",
      why: "The answer is \"nest.\" A nest is a place an animal makes for its eggs, and the turtle digs this hole to lay her eggs in it. A den is a home where an animal like a fox rests and hides. A hive is a home that bees build. Shelter can mean any place that keeps an animal safe, so it is not as exact." },
    { id: "SK-V1b-T3", type: "dropdown", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which science word should replace break out of their eggs in sentence 6?",
      text: "About two months later, the baby turtles {0}.",
      slots: [{ options: ["hatch", "migrate", "hibernate"], answer: 0 }],
      clue: "There is a science word for what a baby animal does when it comes out of its egg.",
      why: "The answer is \"hatch.\" To hatch means to break out of an egg. Migrate means to move to a new place for part of the year, and hibernate means to sleep through the winter." },
    { id: "SK-V1b-T4", type: "match", points: 2, dok: 2, passages: ["p2"],
      prompt: "Match each group of plain words to the school word that means the same thing.",
      cols: ["shore", "scientists", "protect"],
      rows: [
        { text: "the land along the edge of the sea (sentence 1)", answer: 0 },
        { text: "people who study sea animals (sentence 9)", answer: 1 },
        { text: "keep safe from harm (sentence 10)", answer: 2 }
      ],
      clue: "Read each group of plain words. Ask which school word names the same thing, then try it in the sentence.",
      why: "The land along the edge of the sea is the shore. People who study animals, plants and the world around us are scientists. To protect something means to keep it safe from harm." },
    { id: "SK-V1b-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Lucy is telling her class about a map. Which words could she use in place of a box that tells what each symbol means?",
      stem: ["\"Our map of Georgia has a box that tells what each symbol means. A star stands for the capital city.\""],
      choices: [
        { text: "a map key", correct: true },
        { text: "a compass rose" },
        { text: "a map title" },
        { text: "a map scale" }
      ],
      clue: "Think about the parts of a map you learned in social studies. Which part explains the symbols?",
      why: "The answer is \"a map key.\" A map key tells what each symbol on a map means. A compass rose shows directions, a title tells what the map is about, and a scale helps you find distances." }
  ]
});

PP.addLesson({
  code: "3.L.V.2.a",
  title: "Using word parts to figure out meaning",
  teach: {
    big: "Many long words are built from parts, like a base word or a root with a part added to the front or the end, so I find each part and put the meanings together.",
    points: [
      "The base word (also called the root word) is a whole English word you know. In unkind, the base word is kind.",
      "A prefix is a part added to the front. Un- and dis- mean not or the opposite of. Re- means again. Pre- means before. Mis- means wrongly, so misspell means spell wrongly.",
      "A suffix is a part added to the end. -ful means full of. -less means without. -able means can be. -ly means in a ___ way.",
      "Some words are built on a common root instead. A common root is an old word part from Latin or Greek with its own meaning, like spect (look). Some roots are also words, like port, but in a long word, use the root's meaning. The roots to know are in the second example below.",
      "Put the meanings together and check the sentence. Watch out for look-alikes. Uncle and ready start with un and re, but nothing is left that is a word, so they have no prefix."
    ],
    words: [
      { term: "base word", means: "a whole English word you know that a prefix or suffix is added to, like kind in unkind (also called a root word)" },
      { term: "common root", means: "an old word part from Latin or Greek that has its own meaning and shows up in many words, like graph (write) in autograph" },
      { term: "prefix", means: "a word part added to the front of a base word or root" },
      { term: "suffix", means: "a word part added to the end of a base word or root" }
    ],
    examples: [
      {
        label: "Example: a suffix",
        lines: ["hopeless = hope + less", "-less means without.", "So hopeless means without hope."],
        note: "Cover the suffix and read the base word. Then put the two meanings together."
      },
      {
        label: "Example: roots to know",
        lines: ["port = carry, as in portable", "graph = write, as in autograph", "tele = far, as in television", "phon = sound, as in phonics", "rupt = break, as in interrupt (to break in while someone is talking)", "spect = look, as in spectacles", "telephone = tele + phone. Tele means far. Phone comes from phon, which means sound.", "So a telephone brings sound from far away."],
        note: "Find each root you know and say its meaning. Then put the meanings together."
      },
      {
        label: "Example: a prefix and a suffix",
        lines: ["unequally = un + equal + ly", "Un- means not. -ly means in a ___ way.", "So unequally means not in an equal way."],
        note: "Some words have a part at the front and a part at the end. Find the base word in the middle, then add the meaning of each part."
      }
    ],
    tip: "On the test, a question may tell you what a prefix, suffix or root means and ask what the whole word means. Find each part first, add the meanings together, and check that your answer makes sense in the sentence."
  },
  learn: [
    {
      show: ["Dad had to reheat the soup because it got cold while we played outside."],
      ask: "What does reheat mean?",
      steps: [
        "Split the word: re + heat. The base word is heat.",
        "The prefix re- means again.",
        "Put them together and check the sentence. The soup was hot, got cold, and needed to be heated again."
      ],
      answer: "Reheat means to heat again."
    },
    {
      show: ["The new puppy was so playful that it chased its own tail for ten minutes."],
      ask: "What does playful mean?",
      steps: [
        "Split the word: play + ful. The base word is play.",
        "The suffix -ful means full of.",
        "Check the sentence. A puppy that chases its tail for ten minutes is full of play."
      ],
      answer: "Playful means full of play, or liking to play a lot."
    },
    {
      show: ["At science night, our class looked at the moon through a telescope."],
      ask: "What does telescope mean?",
      steps: [
        "Split the word: tele + scope. Tele is a root that means far.",
        "Scope is a part that means a tool for looking.",
        "Put them together and check the sentence. The moon is far away, and the class looked at it through the tool."
      ],
      answer: "A telescope is a tool for looking at things that are far away."
    }
  ],
  parent: "Make a word-part hunt out of cereal boxes, signs and mail. When you spot a word like refill, unlocked or helpful, ask your child to cover the prefix or suffix, read the base word, and tell you what the whole word means. For roots, hunt for words with port (carry), graph (write) or phon (sound), like report, autograph or phonics. Not every word with the letters port uses this root: in airport, port means a harbor for planes, not carry. If carry does not fit the meaning, it is a look-alike, just like uncle and ready.",
  passages: [
    { id: "p1", title: "Nia's Kite", genre: "Literary text",
      paragraphs: [
        ["Nia and her grandpa took her new kite to a park in Savannah.", "The wind was strong, and the kite rose high above the trees."],
        ["Suddenly, the string snapped.", "The kite dipped and crashed into a bush.", "One of its thin sticks broke in half."],
        ["Nia felt hopeless.", "\"My kite is ruined,\" she said sadly."],
        ["Grandpa turned the kite over in his hands.", "\"Don't be unhappy,\" he said.", "\"This kite is fixable.\""],
        ["At home, they taped a new stick in place and retied the string.", "Nia was thankful for her grandpa's help."],
        ["The next day, they went back to the park.", "This time, Nia held the string tightly, and the kite flew all afternoon."]
      ] },
    { id: "p2", title: "The Lunchroom Challenge", genre: "Literary text",
      paragraphs: [
        ["The third graders at Pine Hill School saw a problem.", "After lunch, the trash cans were full of paper bags and plastic forks."],
        ["The class made a plan.", "They asked families to pack lunches in reusable boxes instead of paper bags."],
        ["Some students disliked the plan at first.", "\"Lunch boxes are heavy,\" one boy said."],
        ["But the class did not give up.", "They made posters that said, \"Don't be careless with trash!\"", "Each week, they counted the paper bags in the trash cans."],
        ["Little by little, the number of bags went down.", "By spring, the trash cans were only half full.", "The principal said the plan was very helpful."],
        ["Next fall, the class will give the new third graders a preview of the plan."]
      ] },
    /* PP-004 form B (testB) passage, written by formB-lang. Needs independent review. */
    { id: "p3", title: "The Muffin Mix-Up", genre: "Literary text",
      paragraphs: [
        ["On Saturday morning, Theo and his mom decided to bake blueberry muffins for Grandma."],
        ["\"First, we need to preheat the oven,\" Mom said.", "Theo turned the oven on and set it to 375 degrees.", "That way, it would already be hot when the muffins were ready to bake."],
        ["Next, Theo read the recipe card out loud.", "\"Seven cups of sugar!\" he said.", "Mom looked at the card and laughed.", "\"You misread it,\" she said.", "\"The 1 on the card looks a little like a 7, but we only need one cup.\""],
        ["Theo grabbed a big plastic bowl from the shelf.", "It slipped out of his hands and hit the floor with a clunk.", "Theo held his breath, but the bowl did not have a single crack.", "\"I'm glad this bowl is unbreakable,\" Mom said with a smile."],
        ["Soon the whole kitchen smelled sweet and warm.", "Theo saved the biggest muffin for Grandma."]
      ] },
    /* B5-b5b:passages:start */
    {
      id: "p4",
      title: "The Scarecrow",
      genre: "Literary text",
      paragraphs: [
        [
          "Jalen and his cousin Keisha built a scarecrow for Grandpa's cornfield.",
          "They made it from old overalls and a straw hat."
        ],
        [
          "One windy night, the scarecrow's arms fell off.",
          "Jalen had misjudged how strong the wind could be.",
          "In the morning, he had to restuff the sleeves with fresh straw.",
          "Keisha tried to untie the old ropes, but the knots were too tight."
        ],
        [
          "At last, the scarecrow stood tall again.",
          "The crows stayed away from the corn all week."
        ]
      ]
    },
    {
      id: "p5",
      title: "The Class Sundial",
      genre: "Informational text",
      paragraphs: [
        [
          "Our class made a sundial on the playground.",
          "A sundial tells the time with a shadow."
        ],
        [
          "We pushed a stick into the middle of a flat board.",
          "We set it down carefully so it would stand straight."
        ],
        [
          "On a cloudless day, the sun made a sharp shadow.",
          "Each hour, we marked where the shadow fell.",
          "At noon, the shadow was short.",
          "In the afternoon, it grew long again."
        ],
        [
          "A sundial is useful on sunny days.",
          "On cloudy days, it cannot tell the time."
        ]
      ]
    },
    {
      id: "p6",
      title: "A Life Story",
      genre: "Informational text",
      paragraphs: [
        [
          "Kendra's class wrote a biography of a person in their town.",
          "Kendra chose her great-grandmother, Mrs. Dixon."
        ],
        [
          "Mrs. Dixon grew up in Albany, Georgia.",
          "She drove a school bus for thirty years."
        ],
        [
          "Kendra asked Mrs. Dixon many questions and wrote down her answers.",
          "Then she put the facts in order.",
          "Her teacher said the biography gave a clear picture of Mrs. Dixon's life."
        ]
      ]
    }
    /* B5-b5b:passages:end */
  ],
  practice: [
    { id: "SK-V2a-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "The suffix -less means \"without.\" What does hopeless mean in paragraph 3?",
      choices: [
        { text: "without hope", correct: true },
        { text: "full of hope" },
        { text: "hoping again" },
        { text: "hoping before" }
      ],
      clue: "Cover -less and read the base word. Then add the meaning the question gives you for -less.",
      why: "The answer is \"without hope.\" Hope + less means without hope. Nia thinks her kite is ruined, so she has no hope it will fly again. Full of hope would be hopeful." },
    { id: "SK-V2a-P2", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "The suffix -able means \"can be.\" What does fixable mean in paragraph 4?",
      choices: [
        { text: "can be fixed", correct: true },
        { text: "fixed before" },
        { text: "not fixed" },
        { text: "fixed again" }
      ],
      clue: "Find the base word in fixable. Then put it together with the meaning of -able.",
      why: "The answer is \"can be fixed.\" Fix + able means can be fixed. Grandpa tells Nia not to be unhappy, and then they really do fix the kite." },
    { id: "SK-V2a-P6", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Read the sentence. The root spect means \"look,\" and the suffix -or means \"a person who.\" What is a spectator?",
      stem: ["Every spectator in the stands cheered when Maya kicked the winning goal."],
      choices: [
        { text: "a person who watches", correct: true },
        { text: "a person who plays" },
        { text: "a person who keeps score" },
        { text: "a person who teaches" }
      ],
      clue: "Find the root spect at the start of the word and the suffix -or at the end. Put their meanings together.",
      why: "The answer is \"a person who watches.\" Spect means look and -or means a person who, so a spectator is a person who looks on, or watches. The spectators sat in the stands. Maya was the one who played." },
    { id: "SK-V2a-P4", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Match each word from the story to the meaning of its prefix or suffix.",
      cols: ["not", "full of", "in a ___ way", "again"],
      rows: [
        { text: "unhappy", answer: 0 },
        { text: "thankful", answer: 1 },
        { text: "tightly", answer: 2 },
        { text: "retied", answer: 3 }
      ],
      clue: "Cover the base word in each one. Look at the part that is left, and remember what that part means.",
      why: "Un- in unhappy means not. -ful in thankful means full of. -ly in tightly means in a ___ way (in a tight way). Re- in retied means again." },
    { id: "SK-V2a-P5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO words have a prefix added to a base word?",
      choices: [
        { text: "unsure", correct: true },
        { text: "misspell", correct: true },
        { text: "uncle" },
        { text: "ready" },
        { text: "misty" },
        { text: "reach" }
      ],
      clue: "Cover the letters at the front that look like a prefix: un, re or mis. If a real word is left, that word may have a prefix. If no word is left, it does not.",
      why: "The answers are \"unsure\" and \"misspell.\" Take away un- and sure is left, so unsure means not sure. Take away mis- and spell is left, so misspell means spell wrongly. In uncle, ready, misty and reach, the letters left over are not words, so those words have no prefix." },
    { id: "SK-V2a-P7", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the sentence. The prefix trans- means \"across.\" Use the root in transport to figure out what it means.",
      stem: ["A big truck will transport the new desks from the store to our school."],
      choices: [
        { text: "to carry from one place to another", correct: true },
        { text: "to write a list of things" },
        { text: "to look closely at something" },
        { text: "to break something into pieces" }
      ],
      clue: "Cover trans-. What root is left? Think about what that root means, then check it with the truck in the sentence.",
      why: "The answer is \"to carry from one place to another.\" Trans means across and port means carry, so transport means to carry across, from one place to another. The truck carries the desks from the store to the school. Writing is graph, looking is spect, and breaking is rupt." }
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
            ref: "SK-V2a-P4"
          },
          {
            id: "SK-V2a-C02",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.2.a"
            ],
            passages: [
              "p4"
            ],
            prompt: "The prefix un- can mean \"to undo an action.\" What does untie mean in paragraph 2?",
            choices: [
              {
                text: "to take a knot apart",
                correct: true
              },
              {
                text: "to tie a knot again"
              },
              {
                text: "to tie a knot tighter"
              },
              {
                text: "to tie a knot ahead of time"
              }
            ],
            clue: "A prefix can change a word to mean the opposite action. Find the base word, then think about what undoing it would be.",
            hints: [
              "A prefix can change a word to mean the opposite action. Find the base word, then think about what undoing it would be.",
              "Think about the old ropes and the knots in the story, and what the sleeves need.",
              "Re- means again, and pre- means before. Neither of those is the job of un-."
            ],
            how: [
              "Split the word: un + tie. The base word is tie.",
              "Un- here means to undo the action. To undo tying is to take the tie apart.",
              "Re- would mean tie again, and pre- would mean tie before. The word does not say tighter."
            ],
            misconception: "A common mix-up is thinking every beginning part means the same thing. Un- undoes an action, and re- repeats it.",
            why: "The answer is \"to take a knot apart.\" Un + tie means to undo a tie. Keisha cannot get the knots loose, so she must take them apart before the sleeves can be fixed. Re- would mean again, and pre- would mean before."
          },
          {
            id: "SK-V2a-C03",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.2.a"
            ],
            passages: [
              "p4"
            ],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "What does misjudged mean in paragraph 2?",
              choices: [
                {
                  text: "guessed wrongly",
                  correct: true
                },
                {
                  text: "guessed again"
                },
                {
                  text: "guessed before"
                },
                {
                  text: "did not guess"
                }
              ]
            },
            partB: {
              prompt: "Which detail from the story shows that Jalen misjudged the wind?",
              choices: [
                {
                  text: "The scarecrow's arms fell off in the night.",
                  correct: true
                },
                {
                  text: "Jalen and Keisha built the scarecrow for the cornfield."
                },
                {
                  text: "The crows stayed away from the corn all week."
                },
                {
                  text: "Keisha tried to untie the old ropes."
                }
              ]
            },
            clue: "Split the word into a prefix and a base word, and remember what the prefix means. For Part B, think about what would happen if someone made a mistake about how strong the wind was.",
            hints: [
              "Split the word into a prefix and a base word, and remember what the prefix means. For Part B, think about what would happen if someone made a mistake about how strong the wind was.",
              "Think about the whole story, not only the part with the word. What changed after the windy night, and what did Jalen have to do?",
              "For Part A, mis- does not mean again or before. For Part B, a sentence can be true in the story and still not show a mistake."
            ],
            how: [
              "Part A: split the word: mis + judged. Mis- means wrongly, so misjudged means judged wrongly.",
              "Part B: look for the result of the wrong guess about the wind.",
              "The arms fell off in the night, which shows the wind was stronger than Jalen thought.",
              "The other details are true, but none of them shows the mistake."
            ],
            misconception: "A common mix-up is picking a true detail from the story that has nothing to do with the mistake.",
            why: "Part A: guessed wrongly. Mis- means wrongly, so misjudged means judged wrongly. Part B: The scarecrow's arms fell off in the night. That shows the wind was stronger than Jalen thought. The other details are true, but they do not show a wrong guess."
          },
          {
            id: "SK-V2a-C04",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.2.a"
            ],
            passages: [],
            prompt: "Use what each prefix means to finish the meanings.",
            text: "Mislead means to lead {0}. Reappear means to appear {1}.",
            slots: [
              {
                options: [
                  "wrongly",
                  "again",
                  "before"
                ],
                answer: 0
              },
              {
                options: [
                  "wrongly",
                  "before",
                  "again"
                ],
                answer: 2
              }
            ],
            clue: "Each prefix adds its own meaning to the base word. Split each word, say what the base word means, then add the meaning of the prefix.",
            hints: [
              "Each prefix adds its own meaning to the base word. Split each word, say what the base word means, then add the meaning of the prefix.",
              "Mis- and re- each add their own meaning. Remember what each one does to a base word.",
              "Pre- means before, and neither word has it. Decide which of the other two ideas fits each blank."
            ],
            how: [
              "Blank one: split mis + lead. Mis- means wrongly, so mislead means to lead wrongly.",
              "Blank two: split re + appear. Re- means again, so reappear means to appear again.",
              "Before would use pre-, and neither word has pre-."
            ],
            misconception: "A common mix-up is thinking all prefixes add the same idea. Each one adds a different meaning.",
            why: "The answers are \"wrongly\" and \"again.\" Mis- means wrongly, so mislead means to lead wrongly. Re- means again, so reappear means to appear again. Before would use pre-, and neither word has it."
          },
          {
            id: "SK-V2a-C05",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.2.a"
            ],
            passages: [
              "p4"
            ],
            prompt: "Choose the sentence in paragraph 2 that has a word with a prefix meaning \"again.\"",
            targets: [
              "p4:2:1",
              "p4:2:2",
              "p4:2:3",
              "p4:2:4"
            ],
            answer: [
              "p4:2:3"
            ],
            pick: 1,
            clue: "Look for a word that begins with a part you can cover and still read a whole word. Then ask what that part means.",
            hints: [
              "Look for a word that begins with a part you can cover and still read a whole word. Then ask what that part means.",
              "Say the four sentences to yourself. Which ones have a word that starts with a part like un-, mis- or re-?",
              "Two of the sentences have prefixes, but the prefixes have other meanings. Check what each prefix means before you choose."
            ],
            how: [
              "Sentence 1 has no prefix word. Fell and windy do not start with a prefix.",
              "Sentence 2 has misjudged. Mis- means wrongly, not again.",
              "Sentence 3 has restuff. Re- means again, so restuff means to stuff again.",
              "Sentence 4 has untie. Un- means to undo, not again."
            ],
            misconception: "A common mix-up is picking the first prefix you see. Check which prefix means again.",
            why: "The answer is \"In the morning, he had to restuff the sleeves with fresh straw.\" Re- means again, so restuff means to stuff again. Misjudged has mis-, which means wrongly, and untie has un-, which means to undo."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-V2a-C06",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.2.a"
            ],
            passages: [
              "p5"
            ],
            prompt: "The suffix -ful means \"full of,\" and the suffix -ly means \"in a ___ way.\" What does carefully mean in paragraph 2?",
            choices: [
              {
                text: "in a way full of care",
                correct: true
              },
              {
                text: "in a way that shows no care"
              },
              {
                text: "full of care once more"
              },
              {
                text: "able to be cared for"
              }
            ],
            clue: "This word has two endings. Cover them one at a time, starting from the end, and add each meaning.",
            hints: [
              "This word has two endings. Cover them one at a time, starting from the end, and add each meaning.",
              "Think about how the class set the stick down so it would stand straight. How did they do it?",
              "Showing no care would be a different word. Check which choice fits a stick that stands straight."
            ],
            how: [
              "Split the word: care + ful + ly. The base word is care.",
              "The question says -ful means full of and -ly means in a ___ way, so carefully means in a way full of care.",
              "Check the sentence. The class set the stick down with care so it would stand straight."
            ],
            misconception: "A common mix-up is stopping after one ending. A word with two endings needs both meanings.",
            why: "The answer is \"in a way full of care.\" Care + ful + ly means in a way full of care. The class set the stick down with care so it would stand straight. Showing no care would be carelessly."
          },
          {
            ref: "SK-V2a-P5"
          },
          {
            id: "SK-V2a-C08",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.V.2.a"
            ],
            passages: [],
            prompt: "Dev wants to figure out unhelpful. Which choice shows the best way to do it?",
            choices: [
              {
                text: "Cover un- and -ful to find help, then add the parts: not full of help.",
                correct: true
              },
              {
                text: "Cover un- and -ful to find help, then add the parts: full of help again."
              },
              {
                text: "Cover only -ful, read unhelp, and guess what it might mean."
              },
              {
                text: "Find help, and say the whole word means help."
              }
            ],
            clue: "A word can have a prefix and a suffix at the same time. Plan how to handle both parts.",
            hints: [
              "A word can have a prefix and a suffix at the same time. Plan how to handle both parts.",
              "Think about where the base word sits in unhelpful, and what is on each side of it.",
              "A good plan uses the meaning of every part. Check which choices leave a part out."
            ],
            how: [
              "Find the base word in the middle: help.",
              "The prefix un- means not. The suffix -ful means full of.",
              "Put the parts together: not full of help.",
              "A plan that uses only one part, or that uses a meaning that does not match, will not work."
            ],
            misconception: "A common mix-up is covering only one part. A word with a prefix and a suffix needs both meanings.",
            why: "The answer is \"Cover un- and -ful to find help, then add the parts: not full of help.\" It uses the meaning of both un- and -ful. Full of help again uses the wrong meaning for un-. Covering only -ful or saying the word means help leaves out parts."
          },
          {
            id: "SK-V2a-C09",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.2.a"
            ],
            passages: [],
            prompt: "Choose the TWO words that end in a real suffix added to a base word.",
            pick: 2,
            choices: [
              {
                text: "tearful",
                correct: true
              },
              {
                text: "sleepless",
                correct: true
              },
              {
                text: "belly"
              },
              {
                text: "silly"
              },
              {
                text: "only"
              }
            ],
            clue: "Cover the ending of each word. If a whole word is left, the ending may be a suffix.",
            hints: [
              "Cover the ending of each word. If a whole word is left, the ending may be a suffix.",
              "Say the base word you would have for each choice. Does the ending change the meaning in a way you can explain?",
              "Some words end with letters that look like a suffix but only belong to the word. Check which choices have a real word left."
            ],
            how: [
              "Cover -ful in tearful. Tear is left, so tearful means full of tears.",
              "Cover -less in sleepless. Sleep is left, so sleepless means without sleep.",
              "In belly, silly and only, covering the ending leaves letters that are not words."
            ],
            misconception: "A common mix-up is choosing words because the ending looks like a suffix. A real suffix leaves a real word.",
            why: "The answers are \"tearful\" and \"sleepless.\" Cover -ful and tear is left. Cover -less and sleep is left. Belly, silly and only have endings that look like suffixes, but nothing real is left over when you cover them."
          },
          {
            id: "SK-V2a-C10",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.2.a"
            ],
            passages: [],
            prompt: "Which TWO words have BOTH a prefix and a suffix?",
            pick: 2,
            choices: [
              {
                text: "unevenly",
                correct: true
              },
              {
                text: "unkindly",
                correct: true
              },
              {
                text: "carelessly"
              },
              {
                text: "bravely"
              },
              {
                text: "hopeful"
              }
            ],
            clue: "A word can have a part at the front and a part at the end. Cover both ends of each word and see what is left.",
            hints: [
              "A word can have a part at the front and a part at the end. Cover both ends of each word and see what is left.",
              "Check each choice. Is there a part you can cover at the front and a part you can cover at the end, with a real word in the middle?",
              "Two of the words have two endings and no prefix. Decide whether covering the front leaves a real word for each choice."
            ],
            how: [
              "Unevenly: cover un- and -ly. Even is left, so it has a prefix and a suffix.",
              "Unkindly: cover un- and -ly. Kind is left, so it has a prefix and a suffix.",
              "Carelessly has two endings and no prefix. Bravely and hopeful have only one ending."
            ],
            misconception: "A common mix-up is counting two endings as a prefix and a suffix. A prefix comes at the front.",
            why: "The answers are \"unevenly\" and \"unkindly.\" Each has a prefix, un-, and a suffix, -ly, around a base word. Carelessly has two suffixes and no prefix. Bravely and hopeful have only a suffix."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            ref: "SK-V2a-P7"
          },
          {
            id: "SK-V2a-C12",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.2.a"
            ],
            passages: [],
            prompt: "Use the root meanings to finish each sentence.",
            stem: [
              "The root phon means \"sound.\" The root xylo means \"wood.\""
            ],
            text: "A xylophone is an instrument with bars of {0} that make {1}.",
            slots: [
              {
                options: [
                  "wood",
                  "metal",
                  "glass"
                ],
                answer: 0
              },
              {
                options: [
                  "sound",
                  "light",
                  "heat"
                ],
                answer: 0
              }
            ],
            clue: "Find the roots in the word. The question tells you what each one means.",
            hints: [
              "Find the roots in the word. The question tells you what each one means.",
              "Read the word xylophone slowly and find where xylo ends and phon begins.",
              "Each blank needs one root meaning. Decide which root goes with the first blank and which goes with the second."
            ],
            how: [
              "Split the word: xylo + phone. The question says xylo means wood.",
              "The question says phon means sound. The ending -phone comes from that root.",
              "So a xylophone has wooden bars that make sound."
            ],
            misconception: "A common mix-up is guessing from what you already know. Use the root meanings the question gives you.",
            why: "The answers are \"wood\" and \"sound.\" Xylo means wood and phon means sound, so a xylophone is an instrument with wooden bars that make sound. Metal and glass are other materials, and light and heat are not what an instrument makes."
          },
          {
            id: "SK-V2a-C13",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.2.a"
            ],
            passages: [],
            prompt: "The root rupt means \"break.\" The prefix ab- means \"away.\" What does abrupt mean in the sentence?",
            stem: [
              "The bus came to an abrupt stop, and everyone jerked forward."
            ],
            choices: [
              {
                text: "sudden, as if broken off",
                correct: true
              },
              {
                text: "slow and smooth"
              },
              {
                text: "loud and long"
              },
              {
                text: "happening again"
              }
            ],
            clue: "Find the root in the word. The question tells you what it means. Think about how a break feels.",
            hints: [
              "Find the root in the word. The question tells you what it means. Think about how a break feels.",
              "Picture what happens to everyone on the bus. How did the bus stop?",
              "Rupt means break. Read the sentence again with each choice in place of abrupt, and see which ones make sense."
            ],
            how: [
              "Split the word: ab + rupt. Ab- means away, and rupt means break.",
              "Put the meanings together: broken away, or cut off all at once.",
              "The riders jerk forward, so the stop was sudden."
            ],
            misconception: "A common mix-up is picking a choice that fits the bus but not the word parts. Use the meaning of the root.",
            why: "The answer is \"sudden, as if broken off.\" Ab- means away and rupt means break, so abrupt means broken off all at once. That is why everyone jerked forward. Slow and smooth is the opposite."
          },
          {
            id: "SK-V2a-C14",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.2.a"
            ],
            passages: [
              "p6"
            ],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "The root bio means \"life,\" and graph means \"write.\" What is a biography?",
              choices: [
                {
                  text: "a written story of a person's life",
                  correct: true
                },
                {
                  text: "a picture of a person's face"
                },
                {
                  text: "a list of a person's favorite things"
                },
                {
                  text: "a map of where a person lived"
                }
              ]
            },
            partB: {
              prompt: "Which sentence from the passage shows what kind of text Kendra wrote?",
              choices: [
                {
                  text: "Kendra's class wrote a biography of a person in their town.",
                  correct: true
                },
                {
                  text: "Mrs. Dixon grew up in Albany, Georgia."
                },
                {
                  text: "She drove a school bus for thirty years."
                },
                {
                  text: "Kendra asked Mrs. Dixon many questions and wrote down her answers."
                }
              ]
            },
            clue: "Split the word into its roots. The question tells you what each one means.",
            hints: [
              "Split the word into its roots. The question tells you what each one means.",
              "For Part B, think about the whole passage. Which sentence tells you what Kendra's class made, not only a fact about the person?",
              "For Part A, only one choice uses both roots. For Part B, some sentences are facts about Mrs. Dixon and some are about Kendra's work."
            ],
            how: [
              "Part A: bio means life and graph means write, so a biography is life writing, a written story of a person's life.",
              "Part B: the question asks what kind of text Kendra wrote.",
              "One sentence tells what the class wrote and who it is about.",
              "The other sentences give facts about Mrs. Dixon or steps Kendra took."
            ],
            misconception: "A common mix-up is picking a sentence that is a fact from the life story. The sentence you need tells what the class wrote.",
            why: "Part A: a written story of a person's life. Bio means life and graph means write. Part B: Kendra's class wrote a biography of a person in their town. That sentence names what was written. The other sentences are facts about Mrs. Dixon or steps Kendra took."
          },
          {
            id: "SK-V2a-C15",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.2.a"
            ],
            passages: [],
            prompt: "Graph is a root meaning \"write.\" Which TWO of these words contain it?",
            pick: 2,
            choices: [
              {
                text: "paragraph",
                correct: true
              },
              {
                text: "photograph",
                correct: true
              },
              {
                text: "grape"
              },
              {
                text: "grain"
              },
              {
                text: "gravel"
              }
            ],
            clue: "Look for the root inside each word. The word must have graph, and the root must mean write.",
            hints: [
              "Look for the root inside each word. The word must have graph, and the root must mean write.",
              "Say each word. Some words start with letters that look like graph but are not that root.",
              "A word can start like graph and still not have the root. Check what is left in each word."
            ],
            how: [
              "Paragraph has graph at the end. A paragraph is writing that groups sentences.",
              "Photograph has graph at the end. A photograph is a picture made with light.",
              "Grape, grain and gravel start with gra but do not have the root graph."
            ],
            misconception: "A common mix-up is choosing words that start with gra. The root graph must be the whole piece.",
            why: "The answers are \"paragraph\" and \"photograph.\" Both end with the root graph. Grape, grain and gravel have similar letters, but they do not contain graph."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-V2a-S01",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-P4"
      ],
      prompt: "What does the part added to each word mean? Match each word to that meaning.",
      cols: [
        "the opposite of",
        "before",
        "without",
        "can be"
      ],
      rows: [
        {
          text: "unplug",
          answer: 0
        },
        {
          text: "preorder",
          answer: 1
        },
        {
          text: "pointless",
          answer: 2
        },
        {
          text: "wearable",
          answer: 3
        }
      ],
      clue: "Find the base word in each one and cover it. Look at the part that is left, and remember what that part means.",
      hints: [
        "Find the base word in each one and cover it. Look at the part that is left, and remember what that part means.",
        "Each word has a different part added. Say what the part means before you pick.",
        "One word has a part at the front that means before. Decide which word that could be."
      ],
      how: [
        "Unplug: cover plug. Un- means the opposite of, so unplug means to undo plugging in.",
        "Preorder: cover order. Pre- means before, so preorder means to order before.",
        "Pointless: cover point. -less means without.",
        "Wearable: cover wear. -able means can be."
      ],
      misconception: "A common mix-up is matching by the base word. Match by the part added.",
      why: "Un- in unplug means the opposite of. Pre- in preorder means before. -less in pointless means without. -able in wearable means can be."
    },
    {
      id: "SK-V2a-S02",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-C02"
      ],
      prompt: "Dad said disconnect, and dis- means \"the opposite of.\" Which meaning fits his sentence?",
      stem: [
        "Before the storm, Dad had to disconnect the hose from the faucet."
      ],
      choices: [
        {
          text: "to take two joined things apart",
          correct: true
        },
        {
          text: "to put two things together the wrong way"
        },
        {
          text: "to join two things for the first time"
        },
        {
          text: "to keep two things joined for a long time"
        }
      ],
      clue: "A prefix can change a word to mean the opposite action. Find the base word, then think about what undoing it would be.",
      hints: [
        "A prefix can change a word to mean the opposite action. Find the base word, then think about what undoing it would be.",
        "Think about the hose and the faucet, and what Dad needs to do before the storm.",
        "Mis- means wrongly, and pre- means before. Decide whether either one is the job of dis-."
      ],
      how: [
        "Split the word: dis + connect. The base word is connect.",
        "Dis- means the opposite of, so disconnect means to undo a connection.",
        "The hose and faucet are joined, so Dad takes them apart."
      ],
      misconception: "A common mix-up is thinking every beginning part adds the same idea. Dis- undoes an action.",
      why: "The answer is \"to take two joined things apart.\" Dis + connect means to undo a connection. Dad takes the hose off the faucet. The other choices describe joining, not undoing."
    },
    {
      id: "SK-V2a-S03",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-C03"
      ],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: [
        "Mia's note: \"The puzzle is still unfinished. Two pieces are missing from the corner. Grandma bought it at a garage sale, and the picture shows a red barn.\""
      ],
      partA: {
        prompt: "Which meaning fits unfinished as Mia uses it?",
        choices: [
          {
            text: "not done",
            correct: true
          },
          {
            text: "done twice"
          },
          {
            text: "done too early"
          },
          {
            text: "done badly"
          }
        ]
      },
      partB: {
        prompt: "Which detail in the note proves some work is left?",
        choices: [
          {
            text: "Two pieces were still missing from the corner.",
            correct: true
          },
          {
            text: "The puzzle had one thousand pieces."
          },
          {
            text: "Grandma bought it at a garage sale."
          },
          {
            text: "The picture showed a red barn."
          }
        ]
      },
      clue: "Split the word into a prefix and a base word, and remember what the prefix means. For Part B, think about what a puzzle with work left to do would look like.",
      hints: [
        "Split the word into a prefix and a base word, and remember what the prefix means. For Part B, think about what a puzzle with work left to do would look like.",
        "Think about the whole note, not only the first sentence. Which detail tells you something is left to do?",
        "For Part A, un- does not mean again or wrongly. For Part B, a true detail about the puzzle does not always show it is unfinished."
      ],
      how: [
        "Part A: split the word: un + finished. Un- means not, so unfinished means not finished.",
        "Part B: look for the detail that shows work is left.",
        "Two pieces are missing, so the puzzle is not done.",
        "The other details are about the puzzle but do not show it is unfinished."
      ],
      misconception: "A common mix-up is picking a true detail that has nothing to do with the meaning of the word.",
      why: "Part A: not done. Un- means not, so unfinished means not finished. Part B: Two pieces were still missing from the corner. That shows the puzzle is not complete. The other details are true, but they do not show work is left."
    },
    {
      id: "SK-V2a-S04",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-C04"
      ],
      prompt: "Pick the meaning that completes each sentence.",
      text: "Replay means {0}. A pregame show happens {1}.",
      slots: [
        {
          options: [
            "to play once more",
            "to play badly",
            "to play loudly"
          ],
          answer: 0
        },
        {
          options: [
            "during the game",
            "earlier than the game",
            "after the game"
          ],
          answer: 1
        }
      ],
      clue: "Each prefix adds its own meaning to the base word. Split each word and say what the base word means.",
      hints: [
        "Each prefix adds its own meaning to the base word. Split each word and say what the base word means.",
        "Re- and pre- each have their own meaning. Think about when a person would use each word.",
        "Mis- means wrongly, and it fits neither word. Decide which blank can use it, if any."
      ],
      how: [
        "Blank one: split re + play. Re- means again, so replay means to play again.",
        "Blank two: split pre + game. Pre- means before, so a pregame show happens before the game.",
        "Wrongly would use mis-, and it fits neither word."
      ],
      misconception: "A common mix-up is mixing up re- and pre-. Re- means again, and pre- means before.",
      why: "The answers are \"to play once more\" and \"earlier than the game.\" Re- means again, so replay means to play again. Pre- means before, so a pregame show happens before the game. Mis- means wrongly, and it does not fit either word."
    },
    {
      id: "SK-V2a-S05",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-C05"
      ],
      prompt: "Choose the sentence that has a word with a prefix meaning \"not.\"",
      stem: [
        "Read about Tariq's lunch."
      ],
      options: [
        "Tariq opened his lunch box.",
        "He was unsure about the new snack.",
        "He replaced the lid carefully.",
        "Then he ate every bite."
      ],
      answer: [
        1
      ],
      pick: 1,
      clue: "Look for a word that begins with a part you can cover and still read a whole word. Then ask what that part means.",
      hints: [
        "Look for a word that begins with a part you can cover and still read a whole word. Then ask what that part means.",
        "Say the four sentences to yourself. Which ones have a word that starts with a part like un-, mis- or re-?",
        "One sentence has a prefix that means again. Check what each prefix means before you choose."
      ],
      how: [
        "\"Tariq opened his lunch box.\" has no prefix word.",
        "\"He was unsure about the new snack.\" has unsure. Un- means not, so unsure means not sure.",
        "\"He replaced the lid carefully.\" has replaced. Re- means again, not not.",
        "\"Then he ate every bite.\" has no prefix word."
      ],
      misconception: "A common mix-up is picking the first prefix you see. Check which prefix means not.",
      why: "The answer is \"He was unsure about the new snack.\" Un- means not, so unsure means not sure. Replaced has re-, which means again. The other sentences have no prefix."
    },
    {
      id: "SK-V2a-S06",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-C06"
      ],
      prompt: "Use these meanings: -less is \"without\" and -ly is \"in a ___ way.\" Pick the best meaning of noiselessly.",
      stem: [
        "The cat crept noiselessly across the kitchen floor."
      ],
      choices: [
        {
          text: "without any sound at all",
          correct: true
        },
        {
          text: "with a great deal of sound"
        },
        {
          text: "making sound a second time"
        },
        {
          text: "a sound heard from far off"
        }
      ],
      clue: "This word has two endings. Cover them one at a time, starting from the end, and add each meaning.",
      hints: [
        "This word has two endings. Cover them one at a time, starting from the end, and add each meaning.",
        "Think about how a cat creeps across a floor. What would a person hear?",
        "Full of noise would be a different word. Check which choice fits a cat that is creeping."
      ],
      how: [
        "Split the word: noise + less + ly. The base word is noise.",
        "The question says -less means without and -ly means in a ___ way, so noiselessly means in a way without noise, or with no sound.",
        "Check the sentence. A cat that creeps makes no sound."
      ],
      misconception: "A common mix-up is stopping after one ending. A word with two endings needs both meanings.",
      why: "The answer is \"without any sound at all.\" Noise + less + ly means in a way without noise. A cat that creeps across a floor makes no sound. A great deal of sound is the opposite."
    },
    {
      id: "SK-V2a-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-P5"
      ],
      prompt: "Choose the TWO words that begin with a real prefix.",
      pick: 2,
      choices: [
        {
          text: "unlucky",
          correct: true
        },
        {
          text: "refold",
          correct: true
        },
        {
          text: "under"
        },
        {
          text: "real"
        },
        {
          text: "mister"
        }
      ],
      clue: "Cover the letters at the front that look like a prefix. If a real word is left, that word may have a prefix.",
      hints: [
        "Cover the letters at the front that look like a prefix. If a real word is left, that word may have a prefix.",
        "Say the base word you would have for each choice. Does the front part change the meaning in a way you can explain?",
        "Some words start with letters that look like a prefix but only belong to the word. Check which choices have a real word left."
      ],
      how: [
        "Cover un- in unlucky. Lucky is left, so unlucky means not lucky.",
        "Cover re- in refold. Fold is left, so refold means fold again.",
        "In under, real and mister, the letters left over are not words that fit."
      ],
      misconception: "A common mix-up is choosing words because the start looks like a prefix. A real prefix leaves a real word.",
      why: "The answers are \"unlucky\" and \"refold.\" Cover un- and lucky is left. Cover re- and fold is left. Under, real and mister start with letters that look like prefixes, but the letters left over are not words that fit."
    },
    {
      id: "SK-V2a-S08",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-C08"
      ],
      prompt: "Zuri's partner read the word disrespectful. Whose explanation is correct?",
      choices: [
        {
          text: "It means not showing respect, because dis- means not and -ful means full of.",
          correct: true
        },
        {
          text: "It means showing respect again, because dis- means again and -ful means full of."
        },
        {
          text: "It means without respect, because dis- means without and -ful means full of."
        },
        {
          text: "It means showing great respect, because the first part adds nothing at all."
        }
      ],
      clue: "A word can have a prefix and a suffix at the same time. The explanation has to use the right meaning for each part.",
      hints: [
        "A word can have a prefix and a suffix at the same time. The explanation has to use the right meaning for each part.",
        "Think about the base word in the middle, and what is on each side of it.",
        "Check each explanation for both parts. One part may be given the wrong meaning in some of them."
      ],
      how: [
        "Find the base word in the middle: respect.",
        "The prefix dis- means not. The suffix -ful means full of.",
        "Put the parts together: not full of respect, or not showing respect.",
        "An explanation that gives a part the wrong meaning, or ignores a part, will not work."
      ],
      misconception: "A common mix-up is giving one part the wrong meaning. Each part has its own job.",
      why: "The answer is \"It means not showing respect, because dis- means not and -ful means full of.\" It gives both dis- and -ful the right meaning. The other explanations give dis- the wrong meaning or ignore the first part."
    },
    {
      id: "SK-V2a-S09",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-C09"
      ],
      prompt: "Which TWO of these have an ending that can come off and leave a whole word?",
      pick: 2,
      choices: [
        {
          text: "painful",
          correct: true
        },
        {
          text: "hopeless",
          correct: true
        },
        {
          text: "bully"
        },
        {
          text: "family"
        },
        {
          text: "ugly"
        }
      ],
      clue: "Cover the ending of each word. If a whole word is left, the ending may be a suffix.",
      hints: [
        "Cover the ending of each word. If a whole word is left, the ending may be a suffix.",
        "Say the base word you would have for each choice. Does the ending change the meaning in a way you can explain?",
        "Some words end with letters that look like a suffix but only belong to the word. Check which choices have a real word left."
      ],
      how: [
        "Cover -ful in painful. Pain is left, so painful means full of pain.",
        "Cover -less in hopeless. Hope is left, so hopeless means without hope.",
        "In bully, family and ugly, covering the ending leaves letters that are not words."
      ],
      misconception: "A common mix-up is choosing words because the ending looks like a suffix. A real suffix leaves a real word.",
      why: "The answers are \"painful\" and \"hopeless.\" Cover -ful and pain is left. Cover -less and hope is left. Bully, family and ugly end in letters that look like suffixes, but no real word is left."
    },
    {
      id: "SK-V2a-S10",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-C10"
      ],
      prompt: "Choose the two words with a part added at the front and another added at the end.",
      pick: 2,
      choices: [
        {
          text: "unwisely",
          correct: true
        },
        {
          text: "unbendable",
          correct: true
        },
        {
          text: "hopelessly"
        },
        {
          text: "slowly"
        },
        {
          text: "painful"
        }
      ],
      clue: "A word can have a part at the front and a part at the end. Cover both ends of each word and see what is left.",
      hints: [
        "A word can have a part at the front and a part at the end. Cover both ends of each word and see what is left.",
        "Check each choice. Is there a part you can cover at the front and a part you can cover at the end, with a real word in the middle?",
        "Two of the words have two endings and no prefix. Decide whether covering the front leaves a real word for each choice."
      ],
      how: [
        "Unwisely: cover un- and -ly. Wise is left, so it has a prefix and a suffix.",
        "Unbendable: cover un- and -able. Bend is left, so it has a prefix and a suffix.",
        "Hopelessly has two endings and no prefix. Slowly and painful have only one ending."
      ],
      misconception: "A common mix-up is counting two endings as a prefix and a suffix. A prefix comes at the front.",
      why: "The answers are \"unwisely\" and \"unbendable.\" Each has a prefix, un-, and a suffix around a base word. Hopelessly has two suffixes and no prefix. Slowly and painful have only a suffix."
    },
    {
      id: "SK-V2a-S11",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-P7"
      ],
      prompt: "The root struct means \"build,\" and the prefix con- means \"together.\" What does construct mean in the sentence?",
      stem: [
        "Workers will construct a new fire station on Maple Street this spring."
      ],
      choices: [
        {
          text: "to build by putting parts together",
          correct: true
        },
        {
          text: "to take a building apart"
        },
        {
          text: "to paint a building a new color"
        },
        {
          text: "to draw a plan for a building"
        }
      ],
      clue: "Find the root in the word. The question tells you what it means, and what the prefix means.",
      hints: [
        "Find the root in the word. The question tells you what it means, and what the prefix means.",
        "Picture what the workers will do on Maple Street. What will be there when they finish?",
        "Think about whether the workers are making something or taking it away. Check which choices fit."
      ],
      how: [
        "Split the word: con + struct. Con- means together, and struct means build.",
        "Put the meanings together: to build by putting parts together.",
        "The workers will end up with a new fire station."
      ],
      misconception: "A common mix-up is picking a choice that fits a building job but not the word parts. Use both meanings.",
      why: "The answer is \"to build by putting parts together.\" Con- means together and struct means build. The workers will end up with a new fire station. Taking a building apart is the opposite."
    },
    {
      id: "SK-V2a-S12",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-C12"
      ],
      prompt: "Pick the meaning that completes each sentence.",
      stem: [
        "aqua: water",
        "therm: heat"
      ],
      text: "Aquatic plants grow in {0}. A thermos keeps a drink from losing {1}.",
      slots: [
        {
          options: [
            "water",
            "sand",
            "snow"
          ],
          answer: 0
        },
        {
          options: [
            "heat",
            "taste",
            "weight"
          ],
          answer: 0
        }
      ],
      clue: "Find the roots in each word. The question tells you what each one means.",
      hints: [
        "Find the roots in each word. The question tells you what each one means.",
        "Read each sentence and decide which meaning it needs. Then look for the matching root.",
        "Each blank needs one meaning. Decide which root goes with the first blank and which goes with the second."
      ],
      how: [
        "Blank one: aquatic has the root aqua, which means water. Aquatic plants grow in water.",
        "Blank two: thermos has the root therm, which means heat. A thermos keeps a drink from losing heat.",
        "Sand and snow do not match aqua, and taste and weight do not match therm."
      ],
      misconception: "A common mix-up is guessing from what you already know. Use the root meanings the question gives you.",
      why: "The answers are \"water\" and \"heat.\" Aqua means water, so aquatic plants grow in water. Therm means heat, so a thermos keeps a drink from losing heat."
    },
    {
      id: "SK-V2a-S13",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-C13"
      ],
      prompt: "The root vis means \"see,\" and the suffix -ible means \"can be.\" What does visible mean in the sentence?",
      stem: [
        "On a clear night, the faint star was barely visible from our yard."
      ],
      choices: [
        {
          text: "able to be seen",
          correct: true
        },
        {
          text: "able to be heard"
        },
        {
          text: "able to be reached"
        },
        {
          text: "able to be counted"
        }
      ],
      clue: "Find the root in the word. The question tells you what it means. Then add the meaning of the ending.",
      hints: [
        "Find the root in the word. The question tells you what it means. Then add the meaning of the ending.",
        "Think about the star and the night sky. What can a person do with a faint star when the sky is clear?",
        "Check which of the senses each choice uses. Only one choice matches the root."
      ],
      how: [
        "Split the word: vis + ible. Vis means see, and -ible means can be.",
        "Put the meanings together: can be seen.",
        "The faint star can still be seen on a clear night."
      ],
      misconception: "A common mix-up is picking a choice that uses the right ending but the wrong root. Use both meanings.",
      why: "The answer is \"able to be seen.\" Vis means see and -ible means can be, so visible means able to be seen. Heard, reached and counted use other roots."
    },
    {
      id: "SK-V2a-S14",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-C14"
      ],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "The root dict means \"say.\" What does dictate mean?",
        choices: [
          {
            text: "to say words aloud so someone can write them down",
            correct: true
          },
          {
            text: "to read words silently to yourself at your own desk"
          },
          {
            text: "to copy words out of a book into a notebook"
          },
          {
            text: "to spell words with a loud voice in a contest"
          }
        ]
      },
      partB: {
        prompt: "Pick the action that is an example of dictating.",
        choices: [
          {
            text: "A coach reads each word aloud while players write it on cards.",
            correct: true
          },
          {
            text: "A boy reads silently at his desk until lunch time."
          },
          {
            text: "A girl copies a poem into her notebook with a pen."
          },
          {
            text: "A child sketches a cat on paper with a pencil."
          }
        ]
      },
      clue: "Split the word into its root and ending. The question tells you what dict means.",
      hints: [
        "Split the word into its root and ending. The question tells you what dict means.",
        "For Part B, think about a classroom. Which action has words being spoken for others to write?",
        "For Part A, one choice has both saying and writing in it. For Part B, some actions have writing but no speaking."
      ],
      how: [
        "Part A: dict means say, so dictate means to say words so someone else can write them.",
        "Part B: look for the action where someone says words and others write them.",
        "A coach reads a word aloud and the players write it.",
        "The other actions have reading, copying or drawing, but no one is speaking words for others to write."
      ],
      misconception: "A common mix-up is picking an action with writing in it. Dictating needs someone speaking too.",
      why: "Part A: to say words aloud so someone can write them down. Dict means say. Part B: A coach reads each word aloud while players write it on cards. That is saying words for others to write. The other actions have no one speaking words for others to write."
    },
    {
      id: "SK-V2a-S15",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.2.a"
      ],
      passages: [],
      like: [
        "SK-V2a-C15"
      ],
      prompt: "Pick the TWO words built on aud, a root that means \"hear.\"",
      pick: 2,
      choices: [
        {
          text: "audio",
          correct: true
        },
        {
          text: "auditorium",
          correct: true
        },
        {
          text: "autumn"
        },
        {
          text: "author"
        },
        {
          text: "award"
        }
      ],
      clue: "Look for the root inside each word. The word must have aud, and the root must mean hear.",
      hints: [
        "Look for the root inside each word. The word must have aud, and the root must mean hear.",
        "Say each word. Some words start with letters that look like aud but are not that root.",
        "A word can start like aud and still not have the root. Check what is left in each word."
      ],
      how: [
        "Audio has aud at the start. Audio is sound that you hear.",
        "Auditorium has aud at the start. An auditorium is a big room where people sit to hear a show.",
        "Autumn, author and award start with au but do not have the root aud."
      ],
      misconception: "A common mix-up is choosing words that start with au. The root aud must be there.",
      why: "The answers are \"audio\" and \"auditorium.\" Both have the root aud, which means hear. Autumn, author and award start with au, but they do not have the root aud."
    }
  ],
  addons: {
    "SK-V2a-P4": {
      hints: [
        "Each word has a part added to it. Cover the base word and think about what the part left over means.",
        "Say each word from the story. Which words have a part in front, and which have a part at the end?",
        "One of the endings describes the way something is done. Decide which word that could be."
      ],
      how: [
        "Cover the base word in each one and look at the part that is left.",
        "Un- means not, -ful means full of, -ly means in a ___ way, and re- means again.",
        "Match each word to the meaning of its part."
      ],
      misconception: "A common mix-up is matching by the base word. Match by the part that is added."
    },
    "SK-V2a-P5": {
      hints: [
        "Cover the letters at the front that look like a prefix. If a real word is left, that word may have a prefix.",
        "Say the base word you would have for each choice. Does the front part change the meaning in a way you can explain?",
        "Some words start with letters that look like a prefix but only belong to the word. Check which choices have a real word left."
      ],
      how: [
        "Cover un- in unsure. Sure is left, so unsure means not sure.",
        "Cover mis- in misspell. Spell is left, so misspell means spell wrongly.",
        "In uncle, ready, misty and reach, the letters left over are not words that fit."
      ],
      misconception: "A common mix-up is choosing words because the start looks like a prefix. A real prefix leaves a real word."
    },
    "SK-V2a-P7": {
      hints: [
        "Find the root in the word. The question tells you what the prefix means. Think about what the root means.",
        "Picture what the truck will do with the desks. Where do they start and where do they end up?",
        "Think about whether the desks stay in one place or move. Check which choices fit."
      ],
      how: [
        "Split the word: trans + port. Trans- means across, and port means carry.",
        "Put the meanings together: to carry across.",
        "The truck will carry the desks from the store to the school."
      ],
      misconception: "A common mix-up is picking a choice that fits the sentence but not the word parts. Use both meanings."
    },
    "SK-V2a-P1": {
      hints: [
        "Cover the ending and read the base word. Then add the meaning the question gives you.",
        "Think about how Nia feels when the kite crashes. Which choice fits her feelings?",
        "Full of hope would be a different word. Check which choice says the opposite."
      ],
      how: [
        "Split the word: hope + less. The base word is hope.",
        "The question says -less means without, so hopeless means without hope.",
        "Nia thinks the kite is ruined, so she has no hope."
      ],
      misconception: "A common mix-up is mixing up -less and -ful. -less means without, and -ful means full of."
    },
    "SK-V2a-P2": {
      hints: [
        "Find the base word in the word. Then put it together with the meaning the question gives you.",
        "Think about what Grandpa and Nia do after the crash. Which choice fits?",
        "Not fixed would be a different idea. Check what the ending adds."
      ],
      how: [
        "Split the word: fix + able. The base word is fix.",
        "The question says -able means can be, so fixable means can be fixed.",
        "They tape a new stick in place, so the kite really can be fixed."
      ],
      misconception: "A common mix-up is thinking the ending means the opposite. -able means can be."
    },
    "SK-V2a-P6": {
      hints: [
        "Find the root at the start of the word and the ending at the back. Put their meanings together.",
        "Picture where the spectators are sitting and what they are doing when Maya scores.",
        "The person who plays is a different job. Check what a spectator does."
      ],
      how: [
        "Split the word: spect + ator. The question says spect means look and -or means a person who.",
        "Put the meanings together: a person who looks.",
        "The spectators sit in the stands and cheer, so they watch."
      ],
      misconception: "A common mix-up is thinking a spectator plays. A spectator watches."
    }
  },
  /* B5-b5b:core:end */
  test: [
    { id: "SK-V2a-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "The prefix re- means \"again,\" and the suffix -able means \"can be.\" What does reusable mean in paragraph 2?",
      choices: [
        { text: "can be used again", correct: true },
        { text: "used only one time" },
        { text: "cannot be used at all" },
        { text: "can be used by many people" }
      ],
      clue: "This word has a prefix AND a suffix. Find the base word in the middle, then add both meanings.",
      why: "The answer is \"can be used again.\" Re + use + able means can be used again. Lunch boxes can be used day after day, unlike paper bags that get thrown away." },
    { id: "SK-V2a-T2", type: "mc", points: 1, dok: 1, passages: ["p2"],
      prompt: "The prefix dis- means \"not\" or \"the opposite of.\" What does disliked mean in paragraph 3?",
      choices: [
        { text: "did not like", correct: true },
        { text: "liked again" },
        { text: "liked a lot" },
        { text: "liked before" }
      ],
      clue: "Cover dis- and read the base word. Then add the meaning of the prefix.",
      why: "The answer is \"did not like.\" Dis + liked means did not like. One boy complains that lunch boxes are heavy, which shows some students did not like the plan." },
    { id: "SK-V2a-T3", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does careless mean in paragraph 4?",
        choices: [
          { text: "not taking care", correct: true },
          { text: "taking great care" },
          { text: "taking care again" },
          { text: "taking care first" }
        ] },
      partB: { prompt: "Which word has a suffix with the same meaning as the suffix in careless?",
        choices: [
          { text: "spotless", correct: true },
          { text: "playful" },
          { text: "softly" },
          { text: "readable" }
        ] },
      clue: "Split careless into a base word and a suffix. Remember what that suffix means. Then look for another word with the same ending.",
      why: "Part A: not taking care. Care + less means without care, so a careless person is not taking care. Part B: spotless. It ends in -less too, and it means without a spot." },
    { id: "SK-V2a-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each word to the meaning of its prefix or suffix.",
      cols: ["not", "before", "full of", "wrongly"],
      rows: [
        { text: "unfair", answer: 0 },
        { text: "preview", answer: 1 },
        { text: "helpful", answer: 2 },
        { text: "misplace", answer: 3 }
      ],
      clue: "Cover the base word in each one. Look at the part that is left, and remember what it means.",
      why: "Un- in unfair means not. Pre- in preview means before. -ful in helpful means full of. Mis- in misplace means wrongly (to put something in the wrong place)." },
    { id: "SK-V2a-T6", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the sentence. Use the root in inspect to figure out what Coach will do.",
      stem: ["Before the bike race, Coach will inspect each bike to make sure the brakes work."],
      choices: [
        { text: "look closely at each bike", correct: true },
        { text: "carry each bike to the start" },
        { text: "write a name on each bike" },
        { text: "break each old bike apart" }
      ],
      clue: "Find the root in inspect. What does that root mean? Then check your answer with the brakes in the sentence.",
      why: "The answer is \"look closely at each bike.\" The root spect means look, so to inspect is to look closely at something. Coach looks at each bike to check that the brakes work. Carry would be port, write would be graph, and break would be rupt." }
  ],
  /* PP-004 form B of the skill check, written by formB-lang (see docs/audits/work/pp004-formB-formB-lang.md).
     Same code, 7 points and DOK mix (one DOK 1, four DOK 2) as form A, on a new passage (p3).
     NEEDS INDEPENDENT REVIEW before it is relied on. */
  testB: [
    { id: "SK-V2a-TB1", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "The prefix un- means \"not,\" and the suffix -able means \"can be.\" What does unbreakable mean in paragraph 4?",
      choices: [
        { text: "cannot be broken", correct: true },
        { text: "can be broken easily" },
        { text: "broken one more time" },
        { text: "broken a long time ago" }
      ],
      clue: "This word has a prefix and a suffix. Find the base word in the middle. Then add the meanings of both parts.",
      why: "The answer is \"cannot be broken.\" Break + able means can be broken, and un- means not, so un + break + able means not able to be broken. The bowl falls on the floor and does not even crack. Can be broken easily leaves out the meaning of un-." },
    { id: "SK-V2a-TB2", type: "mc", points: 1, dok: 1, passages: ["p3"],
      prompt: "The prefix mis- means \"wrongly.\" What does misread mean in paragraph 3?",
      choices: [
        { text: "read wrongly", correct: true },
        { text: "read again" },
        { text: "did not read" },
        { text: "read before" }
      ],
      clue: "Cover mis- and read the base word. Then add the meaning the question gives you for mis-.",
      why: "The answer is \"read wrongly.\" Mis + read means read wrongly. Theo did read the card, but he thought the 1 was a 7, so he read it the wrong way." },
    { id: "SK-V2a-TB3", type: "ebsr", points: 2, dok: 2, passages: ["p3"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What does preheat mean in paragraph 2?",
        choices: [
          { text: "to heat ahead of time", correct: true },
          { text: "to heat one more time" },
          { text: "to stop heating" },
          { text: "to heat a little bit" }
        ] },
      partB: { prompt: "Which word has a prefix with the same meaning as the prefix in preheat?",
        choices: [
          { text: "preschool", correct: true },
          { text: "pretty" },
          { text: "press" },
          { text: "unpack" }
        ] },
      clue: "Split preheat into a prefix and a base word, and remember what the prefix means. For Part B, cover the same letters in each word. Is a real word left, and does the meaning fit?",
      why: "Part A: to heat ahead of time. Pre- means before, so preheat means to heat before, or ahead of time. The oven is hot before the muffins go in. Part B: preschool. Take away pre- and school is left, so preschool is the school children go to before kindergarten. In pretty and press, the letters left over are not words, so they have no prefix. Un- in unpack means the opposite of." },
    { id: "SK-V2a-TB4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "What does the prefix or suffix in each word mean? Match each word to that meaning.",
      cols: ["the opposite of", "again", "without", "in a ___ way"],
      rows: [
        { text: "disagree", answer: 0 },
        { text: "reopen", answer: 1 },
        { text: "seedless", answer: 2 },
        { text: "slowly", answer: 3 }
      ],
      clue: "Find the base word in each one and cover it. Look at the part that is left, and remember what that part means.",
      why: "Dis- in disagree means the opposite of (the opposite of agree). Re- in reopen means again (to open again). -less in seedless means without (seedless grapes have no seeds). -ly in slowly means in a ___ way (in a slow way)." },
    { id: "SK-V2a-TB5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the sentence. Use the root in disrupted to figure out what it means.",
      stem: ["A loud fire drill disrupted our spelling test, so we had to finish it after lunch."],
      choices: [
        { text: "broke into it and stopped it for a while", correct: true },
        { text: "carried it away to a different place" },
        { text: "made a soft and quiet sound near it" },
        { text: "looked at it closely for a long time" }
      ],
      clue: "Find the root in disrupted. What does that root mean? Then check your answer with what happened to the spelling test.",
      why: "The answer is \"broke into it and stopped it for a while.\" The root rupt means break. The fire drill broke into the spelling test, so the class stopped and finished it later. Carry would be port, sound would be phon, and look would be spect." }
  ]
});

PP.addLesson({
  code: "3.L.V.2.b",
  title: "Endings that tell what kind of word it is",
  teach: {
    big: "Some endings are clues to a word's job: -ly often tells how, -er and -or can name a person who does something, and -ness and -ment make naming words.",
    points: [
      "Many adverbs end in -ly. An adverb can tell how something happens: The cat crept softly.",
      "When -er or -or is added to an action word, the new word often names a person who does that action. A painter paints. A sailor sails.",
      "Watch out: -er added to a describing word means more, as in taller or faster. Check the base word first.",
      "The endings -ness and -ment turn a word into a noun. Dark becomes darkness, and enjoy becomes enjoyment. These nouns often name a feeling or an idea.",
      "Not every word with these letters has a suffix. Take -ly off family or -er off sister, and no base word is left."
    ],
    words: [
      { term: "noun", means: "a word that names a person, place, thing or idea" },
      { term: "adverb", means: "a word that tells how, when or where something happens" },
      { term: "suffix", means: "a word part added to the end of a base word" }
    ],
    example: {
      label: "Example",
      lines: ["The visitor waved happily. Everyone could see her excitement."],
      note: "Visitor (visit + or) names a person who visits. Happily (happy + ly) is an adverb that tells how she waved. Excitement (excite + ment) is a noun that names a feeling."
    },
    tip: "On the test, a question may ask what job a word does in a sentence, or which word names a person. Look at the ending, then check the base word to be sure the ending is really a suffix."
  },
  learn: [
    {
      show: ["The inventor worked on her robot every night."],
      ask: "What does the ending -or tell you about the word inventor?",
      steps: [
        "Cover -or. The base word is invent, which is an action.",
        "When -or is added to an action word, the new word often names a person who does that action.",
        "Check the sentence. The inventor is a person who works on a robot."
      ],
      answer: "The -or tells you that an inventor is a person who invents things."
    },
    {
      show: ["Jamal spoke softly so he would not wake the baby."],
      ask: "What job does the word softly do in this sentence?",
      steps: [
        "Split the word: soft + ly. The -ly ending is a clue.",
        "Ask what softly tells about. It tells how Jamal spoke.",
        "A word that tells how an action happens is an adverb."
      ],
      answer: "Softly is an adverb. It tells how Jamal spoke."
    },
    {
      show: ["The darkness of the cave surprised the campers."],
      ask: "What kind of word is darkness?",
      steps: [
        "Split the word: dark + ness. Dark is a describing word.",
        "The ending -ness turns a word into a noun.",
        "Check the sentence. The darkness is the thing that surprised the campers, so it is a naming word."
      ],
      answer: "Darkness is a noun. It names something the campers noticed."
    }
  ],
  parent: "Sort words on a walk or in a book: find one word that ends in -er or -or and names a person, one -ly word that tells how, and one -ness or -ment word that names a feeling or idea.",
  passages: [
    { id: "p1", title: "Parade Day", genre: "Literary text",
      paragraphs: [
        ["Every spring, the town of Maple Creek holds a big parade on Main Street.", "Families bring chairs and blankets and wait along the curb."],
        ["A drummer marches proudly at the front of the band.", "A dancer spins in a sparkly dress.", "Behind them, a juggler tosses three bright balls high into the air.", "He never drops a single one."],
        ["The crowd cheers loudly when the red fire truck rolls by.", "A firefighter waves from the window and rings the bell."],
        ["Children wave little flags with excitement.", "The music gets louder as the band comes closer.", "Even the smallest kids clap along."],
        ["At the end, the mayor gives a short speech.", "She thanks every helper for their hard work.", "She says the parade brings happiness to the whole town."]
      ] },
    { id: "p2", title: "Science Fair Day", genre: "Literary text",
      paragraphs: [
        ["Last Friday, our school held its first science fair in the gym.", "Long tables filled the room, and every student had a project."],
        ["Lena built a small boat out of clay.", "She explained clearly how the boat could float on a tub of water."],
        ["Next to her, Mateo showed a model of the planets.", "He painted each planet carefully.", "His bright yellow sun showed the brightness of the real sun."],
        ["A visitor from the high school walked from table to table.", "She asked each student a question about the project."],
        ["At the end of the day, every student got a ribbon.", "Lena could not stop smiling.", "The amazement on her face made her mom laugh."]
      ] },
    /* B5-b5b:passages:start */
    {
      id: "p3",
      title: "A Visit from a Sculptor",
      genre: "Informational text",
      paragraphs: [
        [
          "A sculptor named Mr. Reed visited our art class.",
          "He makes animals out of clay."
        ],
        [
          "First, he shaped a turtle slowly.",
          "He pressed his thumbs into the clay to make two small eyes."
        ],
        [
          "A collector from the next town watched too.",
          "She buys small statues and keeps them in her home."
        ],
        [
          "We sat quietly as the turtle took shape.",
          "When it was done, everyone clapped and cheered."
        ]
      ]
    },
    {
      id: "p4",
      title: "The Lost Dog",
      genre: "Literary text",
      paragraphs: [
        [
          "When Jaylen's dog ran away, he felt great sadness.",
          "He made a poster with a picture and a phone number."
        ],
        [
          "A neighbor named Ms. Gray saw the poster.",
          "Her kindness surprised him.",
          "She helped him hang one on every street."
        ],
        [
          "The next day, a worker at the shoe store called.",
          "He had seen the dog near the park."
        ],
        [
          "Jaylen offered payment for the help.",
          "\"No payment is needed,\" the man said, smiling."
        ],
        [
          "Jaylen ran to the park and found his dog, happy and safe."
        ]
      ]
    },
    {
      id: "p5",
      title: "Field Day",
      genre: "Literary text",
      paragraphs: [
        [
          "On Field Day, our class ran races on the long grass field."
        ],
        [
          "Marcus was smaller than the other runners, but he started quickly.",
          "The winner crossed the line in twelve seconds."
        ],
        [
          "Everyone cheered, and the coach gave out ribbons."
        ]
      ]
    }
    /* B5-b5b:passages:end */
  ],
  practice: [
    { id: "SK-V2b-P1", type: "mc", points: 1, dok: 1, passages: ["p1"],
      prompt: "Read paragraph 2. What does the ending -er tell you about the word juggler?",
      choices: [
        { text: "It names a person who juggles.", correct: true },
        { text: "It means juggling more balls." },
        { text: "It tells how high the balls go." },
        { text: "It means to juggle again." }
      ],
      clue: "Cover -er. Is the base word an action or a describing word? Then remember what -er does to that kind of word.",
      why: "The answer is \"It names a person who juggles.\" Juggle is an action, and -er added to an action word names a person who does it. The juggler tosses balls in the air." },
    { id: "SK-V2b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What job does the word loudly do in paragraph 3?",
      choices: [
        { text: "It tells how the crowd cheers.", correct: true },
        { text: "It names the people in the crowd." },
        { text: "It describes the red fire truck." },
        { text: "It tells when the parade starts." }
      ],
      clue: "Look at the ending of loudly. Then find the action word it tells about.",
      why: "The answer is \"It tells how the crowd cheers.\" Loud + ly is an adverb. It tells how the action cheers happens." },
    { id: "SK-V2b-P3", type: "ms", points: 2, dok: 2, passages: ["p1"], pick: 2,
      prompt: "Which TWO words from the passage name a person who does something?",
      choices: [
        { text: "firefighter", correct: true },
        { text: "helper", correct: true },
        { text: "louder" },
        { text: "proudly" },
        { text: "excitement" },
        { text: "happiness" }
      ],
      clue: "Look for words that end in -er or -or. Cover the ending. Is the part left an action someone can do?",
      why: "The answers are \"firefighter\" and \"helper.\" A firefighter fights fires, and a helper helps. Louder ends in -er, but loud is a describing word, so louder means more loud. Proudly tells how, and excitement and happiness are nouns that name feelings." },
    { id: "SK-V2b-P4", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Match each word to the job it does.",
      cols: ["names a person", "names a feeling", "tells how"],
      rows: [
        { text: "dancer", answer: 0 },
        { text: "happiness", answer: 1 },
        { text: "proudly", answer: 2 },
        { text: "excitement", answer: 1 }
      ],
      clue: "Check each ending: -er names a person, -ness and -ment make nouns, and -ly often tells how.",
      why: "Dancer (dance + er) names a person who dances. Happiness (happy + ness) and excitement (excite + ment) are nouns that name feelings. Proudly (proud + ly) tells how the drummer marches." },
    { id: "SK-V2b-P5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "In which sentence does the -er ending mean \"more,\" not \"a person who\"? Choose the sentence.",
      options: [
        "The baker frosted the cake.",
        "My kite flew higher than yours.",
        "The camper set up a tent.",
        "The reader turned the page."
      ],
      answer: [1], pick: 1,
      clue: "Cover -er in each word. Is the base word an action someone does, or a word that describes?",
      why: "The answer is \"My kite flew higher than yours.\" High is a describing word, so higher means more high. Bake, camp and read are actions, so baker, camper and reader name people." }
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
            ref: "SK-V2b-P2"
          },
          {
            id: "SK-V2b-C02",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.2.b"
            ],
            passages: [
              "p3"
            ],
            prompt: "Use the endings to finish the sentences.",
            text: "The word sculptor names {0}. The word slowly tells {1}.",
            slots: [
              {
                options: [
                  "a person",
                  "a place",
                  "a feeling"
                ],
                answer: 0
              },
              {
                options: [
                  "how the turtle was shaped",
                  "who shaped the turtle",
                  "where the turtle was shaped"
                ],
                answer: 0
              }
            ],
            clue: "An ending can be a clue to the job a word does. Cover each ending and think about what it usually tells you.",
            hints: [
              "An ending can be a clue to the job a word does. Cover each ending and think about what it usually tells you.",
              "Find each word in the passage and read the sentence around it. Ask what the word is describing or naming.",
              "For the second blank, the ending -ly belongs to words that tell about an action. Decide which of the three choices is about an action."
            ],
            how: [
              "Blank one: cover -or in sculptor. Sculpt is an action, so -or makes a word that names a person who does it.",
              "Blank two: cover -ly in slowly. Slow plus -ly makes an adverb that tells how an action happens.",
              "Mr. Reed shaped the turtle, so slowly tells how it was shaped."
            ],
            misconception: "A common mix-up is thinking an ending only changes the spelling. Endings give clues to a word's job.",
            why: "The answers are \"a person\" and \"how the turtle was shaped.\" Sculpt is an action, so sculptor names a person who sculpts. Slow plus -ly is an adverb, and it tells how Mr. Reed shaped the turtle."
          },
          {
            id: "SK-V2b-C03",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.2.b"
            ],
            passages: [
              "p3"
            ],
            prompt: "Choose the sentence in paragraph 3 that has a word ending in -or that names a person.",
            targets: [
              "p3:2:1",
              "p3:2:2",
              "p3:3:1",
              "p3:3:2"
            ],
            answer: [
              "p3:3:1"
            ],
            pick: 1,
            clue: "Look for a word that ends in -or. Cover the ending and see whether an action word is left.",
            hints: [
              "Look for a word that ends in -or. Cover the ending and see whether an action word is left.",
              "Read all four sentences. Which ones have a word with an ending, and which have none?",
              "One sentence has an ending that tells how, and it is not the -or ending. Check which ending each sentence uses."
            ],
            how: [
              "\"First, he shaped a turtle slowly.\" has slowly, which ends in -ly and tells how.",
              "\"He pressed his thumbs into the clay to make two small eyes.\" has no ending that names a person.",
              "\"A collector from the next town watched too.\" has collector. Collect is an action, so a collector is a person who collects.",
              "\"She buys small statues and keeps them in her home.\" has no ending that names a person."
            ],
            misconception: "A common mix-up is choosing the first sentence with an ending. Check which ending it is.",
            why: "The answer is \"A collector from the next town watched too.\" Collect is an action, so collector names a person who collects. Slowly ends in -ly and tells how. The other sentences have no word that names a person with -or."
          },
          {
            id: "SK-V2b-C04",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.2.b"
            ],
            passages: [
              "p3"
            ],
            prompt: "Which TWO words from paragraphs 2 and 4 tell how something happens?",
            pick: 2,
            choices: [
              {
                text: "slowly",
                correct: true
              },
              {
                text: "quietly",
                correct: true
              },
              {
                text: "sculptor"
              },
              {
                text: "collector"
              },
              {
                text: "statues"
              }
            ],
            clue: "Words that tell how something happens often have the same ending. Find that ending in the passage.",
            hints: [
              "Words that tell how something happens often have the same ending. Find that ending in the passage.",
              "Read the sentences with the words in them. Ask what each word tells about the action.",
              "Some words in the list name people. Decide what kind of word each of them is before you choose."
            ],
            how: [
              "Slowly: slow + ly. It tells how the turtle was shaped.",
              "Quietly: quiet + ly. It tells how the class sat.",
              "Sculptor and collector name people. Statues names things."
            ],
            misconception: "A common mix-up is choosing any word that ends in a suffix. Check what job the word does.",
            why: "The answers are \"slowly\" and \"quietly.\" Both end in -ly and tell how an action happened: how the turtle was shaped and how the class sat. Sculptor and collector name people, and statues names things."
          },
          {
            id: "SK-V2b-C05",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.V.2.b"
            ],
            passages: [
              "p3"
            ],
            prompt: "Which statement about the words slowly and sculptor is true?",
            choices: [
              {
                text: "Slowly tells how the turtle was shaped, and sculptor names the person who shaped it.",
                correct: true
              },
              {
                text: "Slowly names the person who shaped the turtle, and sculptor tells how it was shaped."
              },
              {
                text: "Both words tell how the turtle was shaped."
              },
              {
                text: "Both words name people in the art class."
              }
            ],
            clue: "Each ending gives a clue to the job of the word. Work out the job of each word separately.",
            hints: [
              "Each ending gives a clue to the job of the word. Work out the job of each word separately.",
              "Find both words in the passage. For each one, ask what question it answers: who or how?",
              "Check whether the choices give the two words the same job or different jobs."
            ],
            how: [
              "Sculptor: sculpt + or. The -or ending names a person who does the action.",
              "Slowly: slow + ly. The -ly ending makes a word that tells how an action happens.",
              "So the words do different jobs: one names a person and one tells how."
            ],
            misconception: "A common mix-up is giving both words the same job because both have endings.",
            why: "The answer is \"Slowly tells how the turtle was shaped, and sculptor names the person who shaped it.\" The -ly ending makes slowly tell how, and the -or ending makes sculptor name a person. The words do different jobs."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-V2b-C06",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.2.b"
            ],
            passages: [
              "p4"
            ],
            prompt: "Which word in paragraph 2 names a feeling or an idea?",
            choices: [
              {
                text: "kindness",
                correct: true
              },
              {
                text: "neighbor"
              },
              {
                text: "poster"
              },
              {
                text: "street"
              }
            ],
            clue: "Some endings turn a word into a noun that names a feeling or an idea. Look for one in the paragraph.",
            hints: [
              "Some endings turn a word into a noun that names a feeling or an idea. Look for one in the paragraph.",
              "Read paragraph 2 slowly. Which words name a person or a thing, and which one names something you cannot touch?",
              "A person and a thing can both be named by a noun. Decide which choices you could touch or point to."
            ],
            how: [
              "Kindness: kind + ness. The -ness ending makes a noun that names an idea or a feeling.",
              "Neighbor names a person. Poster and street name things you can see.",
              "Kindness is the only one you cannot touch."
            ],
            misconception: "A common mix-up is picking a noun that names a person. Ask whether the word names an idea.",
            why: "The answer is \"kindness.\" Kind plus -ness makes a noun that names an idea. Neighbor names a person, and poster and street name things you can see."
          },
          {
            ref: "SK-V2b-P4"
          },
          {
            id: "SK-V2b-C08",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.2.b"
            ],
            passages: [
              "p4"
            ],
            prompt: "Choose the word from the story that fits each blank.",
            text: "In paragraph 4, {0} is a noun made with -ment. In paragraph 1, {1} is a noun made with -ness.",
            slots: [
              {
                options: [
                  "payment",
                  "offered",
                  "needed"
                ],
                answer: 0
              },
              {
                options: [
                  "sadness",
                  "felt",
                  "great"
                ],
                answer: 0
              }
            ],
            clue: "Look for the ending in each word. A noun made with an ending names something, not an action.",
            hints: [
              "Look for the ending in each word. A noun made with an ending names something, not an action.",
              "Read the words in paragraphs 4 and 1. Ask which word has the ending the blank names.",
              "Some choices are action words or describing words. Decide which kind of word each blank needs."
            ],
            how: [
              "Blank one: pay + ment makes payment, a noun. Offered and needed are action words.",
              "Blank two: sad + ness makes sadness, a noun. Felt is an action word, and great describes.",
              "So the answers are payment and sadness."
            ],
            misconception: "A common mix-up is picking a word without checking its ending. Look at the end of each word.",
            why: "The answers are \"payment\" and \"sadness.\" Pay plus -ment makes the noun payment, and sad plus -ness makes the noun sadness. Offered, needed and felt are action words, and great describes."
          },
          {
            id: "SK-V2b-C09",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.2.b"
            ],
            passages: [
              "p4"
            ],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "In paragraph 4, what does the ending -ment do to the word pay?",
              choices: [
                {
                  text: "It makes a noun that names what is given for help.",
                  correct: true
                },
                {
                  text: "It makes an adverb that tells how someone pays."
                },
                {
                  text: "It makes a word that names a person who pays."
                },
                {
                  text: "It makes the word mean to pay more."
                }
              ]
            },
            partB: {
              prompt: "Which word from the passage has an ending that does the same job as -ment?",
              choices: [
                {
                  text: "sadness",
                  correct: true
                },
                {
                  text: "worker"
                },
                {
                  text: "quickly"
                },
                {
                  text: "safe"
                }
              ]
            },
            clue: "Cover the ending and read the base word. Then ask what job the whole word does in the sentence.",
            hints: [
              "Cover the ending and read the base word. Then ask what job the whole word does in the sentence.",
              "For Part B, think about which ending in the passage also turns a word into a noun. Look at the endings of the words.",
              "For Part A, an adverb tells how and a person word names someone. Decide which of those jobs payment does."
            ],
            how: [
              "Part A: pay is an action, and -ment turns it into a noun, payment, that names what is given for help.",
              "Part B: look for another ending that turns a word into a noun.",
              "Sad plus -ness makes the noun sadness. Worker names a person, quickly tells how, and safe describes."
            ],
            misconception: "A common mix-up is thinking every ending makes an adverb. Some endings make nouns.",
            why: "Part A: It makes a noun that names what is given for help. Pay is an action, and -ment turns it into a noun. Part B: sadness. The ending -ness also turns a word into a noun. Worker names a person, and quickly tells how."
          },
          {
            ref: "SK-V2b-P5"
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-V2b-C11",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.2.b"
            ],
            passages: [],
            prompt: "Which TWO words end in -er, but nothing is left when you cover the ending?",
            pick: 2,
            choices: [
              {
                text: "finger",
                correct: true
              },
              {
                text: "number",
                correct: true
              },
              {
                text: "singer"
              },
              {
                text: "keeper"
              },
              {
                text: "joker"
              }
            ],
            clue: "Cover -er in each word. If a real word is left, the ending may be a suffix.",
            hints: [
              "Cover -er in each word. If a real word is left, the ending may be a suffix.",
              "Say what is left in each word after you cover the ending. Is it a word you know?",
              "Some of these words name a person who does an action. Decide which of them have a real action word left."
            ],
            how: [
              "Cover -er in singer. Sing is left, so a singer is a person who sings.",
              "Cover -er in keeper. Keep is left. Cover -er in joker. Joke is left.",
              "Cover -er in finger and number. Fing and numb are not what those words mean, so the -er is not a suffix."
            ],
            misconception: "A common mix-up is thinking every word that ends in -er has a suffix. A real suffix leaves a real base word.",
            why: "The answers are \"finger\" and \"number.\" Covering -er leaves fing and numb, which do not give the meanings of those words. Singer, keeper and joker each have a real action word left."
          },
          {
            id: "SK-V2b-C12",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.V.2.b"
            ],
            passages: [],
            prompt: "Choose the sentence in which the word ending in -ly is an adverb that tells how.",
            options: [
              "She spoke calmly to the class.",
              "He packed a jelly sandwich.",
              "We will reply to the letter soon.",
              "The art supply closet was full."
            ],
            answer: [
              0
            ],
            pick: 1,
            clue: "An adverb that ends in -ly tells how something is done. Check each word that ends in -ly.",
            hints: [
              "An adverb that ends in -ly tells how something is done. Check each word that ends in -ly.",
              "Cover -ly in each of the four words. Is a base word left that makes sense with the sentence?",
              "Two of the words end in -ly but tell about things, not about how something is done. Look at what each word is doing."
            ],
            how: [
              "Calmly: calm + ly. It tells how she spoke.",
              "Jelly has no base word jel, and it names a food.",
              "Reply has no base word rep, and it names an action.",
              "Supply has no base word sup, and it names things the class uses."
            ],
            misconception: "A common mix-up is thinking every word that ends in -ly is an adverb. Check whether a base word is left.",
            why: "The answer is \"She spoke calmly to the class.\" Calm plus -ly is an adverb that tells how she spoke. Jelly, reply and supply end in -ly, but no base word is left and they do not tell how something is done."
          },
          {
            id: "SK-V2b-C13",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.V.2.b"
            ],
            passages: [],
            prompt: "Match each word to the job it does.",
            cols: [
              "names a person",
              "names a feeling or idea",
              "tells how",
              "has no real suffix"
            ],
            rows: [
              {
                text: "inspector",
                answer: 0
              },
              {
                text: "weakness",
                answer: 1
              },
              {
                text: "gently",
                answer: 2
              },
              {
                text: "mirror",
                answer: 3
              }
            ],
            clue: "Check the ending of each word. Then ask whether a real base word is left when you cover it.",
            hints: [
              "Check the ending of each word. Then ask whether a real base word is left when you cover it.",
              "Say each word and cover the ending. Ask what job the whole word does.",
              "One word ends like a person word but nothing is left when you cover the ending. Decide which one that could be."
            ],
            how: [
              "Inspector: inspect + or names a person who inspects.",
              "Weakness: weak + ness names an idea.",
              "Gently: gentle + ly tells how something is done.",
              "Mirror: cover -or and mirr is left, which is not a word, so there is no suffix."
            ],
            misconception: "A common mix-up is matching by the ending alone. Check that a real base word is left.",
            why: "Inspector names a person who inspects. Weakness names an idea. Gently tells how. Mirror ends in -or, but mirr is not a word, so the ending is not a suffix."
          },
          {
            id: "SK-V2b-C14",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.V.2.b"
            ],
            passages: [
              "p4"
            ],
            prompt: "Marcus says that every word ending in -or has an action word and a suffix. Which word from the passage shows he is wrong?",
            choices: [
              {
                text: "neighbor",
                correct: true
              },
              {
                text: "worker"
              },
              {
                text: "payment"
              },
              {
                text: "kindness"
              }
            ],
            clue: "A real suffix leaves a real base word when you cover it. Test Marcus's idea on words that end in -or.",
            hints: [
              "A real suffix leaves a real base word when you cover it. Test Marcus's idea on words that end in -or.",
              "Look through the passage for words that end in -or. Cover that ending and see what is left.",
              "Some choices do not end in -or at all. Decide which choices could test Marcus's rule."
            ],
            how: [
              "Marcus says every -or word is an action word plus a suffix.",
              "Cover -or in neighbor. Neighb is left, which is not an action word.",
              "Worker ends in -er, and payment and kindness do not end in -or.",
              "So neighbor ends in -or but has no action word, which shows Marcus is wrong."
            ],
            misconception: "A common mix-up is picking a word that does not test the rule. The word must end in -or.",
            why: "The answer is \"neighbor.\" It ends in -or, but covering the ending leaves neighb, which is not an action word. Worker ends in -er, and payment and kindness do not end in -or."
          },
          {
            id: "SK-V2b-C15",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.V.2.b"
            ],
            passages: [
              "p5"
            ],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Which word in paragraph 2 is an adverb?",
              choices: [
                {
                  text: "quickly",
                  correct: true
                },
                {
                  text: "smaller"
                },
                {
                  text: "winner"
                },
                {
                  text: "seconds"
                }
              ]
            },
            partB: {
              prompt: "Which clue best shows the answer to Part A?",
              choices: [
                {
                  text: "The -ly ending tells how Marcus started.",
                  correct: true
                },
                {
                  text: "The -er ending names a person."
                },
                {
                  text: "The -er ending means more."
                },
                {
                  text: "The -s ending shows more than one."
                }
              ]
            },
            clue: "An adverb tells how, when or where something happens. Look at the endings of the words in paragraph 2.",
            hints: [
              "An adverb tells how, when or where something happens. Look at the endings of the words in paragraph 2.",
              "Find a word that tells how someone did something. Then check which ending helped you find it.",
              "Some of the words name a person or compare. Decide what job each one does."
            ],
            how: [
              "Part A: quickly is quick + ly. It tells how Marcus started.",
              "Smaller compares, winner names a person, and seconds names a unit of time.",
              "Part B: the -ly ending is the clue that quickly tells how."
            ],
            misconception: "A common mix-up is picking a word with an -er ending. The -er in smaller means more, and in winner it names a person.",
            why: "Part A: quickly. Quick plus -ly makes an adverb. Part B: The -ly ending tells how Marcus started. Smaller compares, winner names a person, and seconds names a unit of time."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-V2b-S01",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-P2"
      ],
      prompt: "Look at smoothly in the sentence. Which choice best explains its work?",
      stem: [
        "The pilot landed the plane smoothly."
      ],
      choices: [
        {
          text: "It shows the way the plane landed.",
          correct: true
        },
        {
          text: "It gives the pilot a title."
        },
        {
          text: "It counts the planes on the runway."
        },
        {
          text: "It paints a picture of the plane's color."
        }
      ],
      clue: "Look at the ending of smoothly. Then find the action word it tells about.",
      hints: [
        "Look at the ending of smoothly. Then find the action word it tells about.",
        "Find the action in the sentence. Ask what the word smoothly adds to it.",
        "Names, counts and colors are jobs for other kinds of words. Decide which kind of job the ending -ly suggests."
      ],
      how: [
        "Split the word: smooth + ly. The -ly ending is a clue.",
        "The action is landed. Smoothly tells about it.",
        "A word that tells how an action happens is an adverb."
      ],
      misconception: "A common mix-up is thinking a word with an ending names a person or a thing. Check the ending.",
      why: "The answer is \"It shows the way the plane landed.\" Smooth plus -ly is an adverb that tells how the pilot landed the plane. It does not give a title, count planes or describe a color."
    },
    {
      id: "SK-V2b-S02",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-C02"
      ],
      prompt: "Complete each sentence about the story.",
      stem: [
        "The rancher rode home swiftly."
      ],
      text: "Rancher is a word for {0}. Swiftly shows {1}.",
      slots: [
        {
          options: [
            "someone who works on a ranch",
            "a kind of horse",
            "a field of grass"
          ],
          answer: 0
        },
        {
          options: [
            "the speed of the ride",
            "the owner of the horse",
            "the road he took"
          ],
          answer: 0
        }
      ],
      clue: "An ending can be a clue to the job a word does. Cover each ending and think about what it usually tells you.",
      hints: [
        "An ending can be a clue to the job a word does. Cover each ending and think about what it usually tells you.",
        "Find each word in the sentence. Ask what the word is describing or naming.",
        "For the second blank, the ending -ly belongs to words that tell about an action. Decide which choice is about an action."
      ],
      how: [
        "Blank one: cover -er in rancher. Ranch is where the work happens, and -er names the person who does it.",
        "Blank two: cover -ly in swiftly. Swift plus -ly tells about the way an action happens.",
        "The man rode home, so swiftly tells about the speed of his ride."
      ],
      misconception: "A common mix-up is thinking an ending only changes the spelling. Endings give clues to a word's job.",
      why: "The answers are \"someone who works on a ranch\" and \"the speed of the ride.\" Rancher is a person who works on a ranch. Swift plus -ly tells about the speed of the man's ride home."
    },
    {
      id: "SK-V2b-S03",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-C03"
      ],
      prompt: "Which sentence includes a person word built with the ending -or?",
      options: [
        "The cold wind blew hard.",
        "The instructor showed us how to tie knots.",
        "A red scarf hung on the hook.",
        "Rain fell on the roof all night."
      ],
      answer: [
        1
      ],
      pick: 1,
      clue: "Look for a word that ends in -or. Cover the ending and see whether an action word is left.",
      hints: [
        "Look for a word that ends in -or. Cover the ending and see whether an action word is left.",
        "Read all four sentences. Which ones have a word with an ending, and which have none?",
        "Only one sentence has a word built from an action plus an ending. Check each sentence for one."
      ],
      how: [
        "\"The cold wind blew hard.\" has no word that names a person.",
        "\"The instructor showed us how to tie knots.\" has instructor. Instruct is an action, so an instructor is a person who instructs.",
        "\"A red scarf hung on the hook.\" has no ending that names a person.",
        "\"Rain fell on the roof all night.\" has no ending that names a person."
      ],
      misconception: "A common mix-up is choosing the first sentence with an ending. Check which ending it is.",
      why: "The answer is \"The instructor showed us how to tie knots.\" Instruct is an action, so instructor names a person who instructs. The other sentences have no word that names a person with -or."
    },
    {
      id: "SK-V2b-S04",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-C04"
      ],
      prompt: "Pick the two words that answer the question \"How?\"",
      stem: [
        "The bus driver turned left quickly, and the children cheered loudly."
      ],
      pick: 2,
      choices: [
        {
          text: "quickly",
          correct: true
        },
        {
          text: "loudly",
          correct: true
        },
        {
          text: "driver"
        },
        {
          text: "children"
        },
        {
          text: "left"
        }
      ],
      clue: "Words that tell how something happens often have the same ending. Find that ending in the sentence.",
      hints: [
        "Words that tell how something happens often have the same ending. Find that ending in the sentence.",
        "Read the sentence with each word in it. Ask what each word tells about the action.",
        "Some words in the list name people. Decide what kind of word each of them is before you choose."
      ],
      how: [
        "Quickly: quick + ly. It tells how the driver turned.",
        "Loudly: loud + ly. It tells how the children cheered.",
        "Driver and children name people. Left tells which way."
      ],
      misconception: "A common mix-up is choosing any word that has an ending. Check what job the word does.",
      why: "The answers are \"quickly\" and \"loudly.\" Both end in -ly and tell how an action happened. Driver and children name people, and left tells which way."
    },
    {
      id: "SK-V2b-S05",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-C05"
      ],
      prompt: "Which claim about neatly and packer is correct?",
      stem: [
        "The packer folded the shirts neatly."
      ],
      choices: [
        {
          text: "Neatly shows the way the shirts were folded, while packer is the worker who folded them.",
          correct: true
        },
        {
          text: "Packer shows the way the shirts were folded, while neatly is the worker who folded them."
        },
        {
          text: "Neatly and packer both show the way the shirts were folded."
        },
        {
          text: "Neatly and packer are both workers in the store."
        }
      ],
      clue: "Each ending gives a clue to the job of the word. Work out the job of each word separately.",
      hints: [
        "Each ending gives a clue to the job of the word. Work out the job of each word separately.",
        "Find both words in the sentence. For each one, ask what question it answers: who or how?",
        "Check whether the choices give the two words the same job or different jobs."
      ],
      how: [
        "Packer: pack + er. The -er ending names a person who does the action.",
        "Neatly: neat + ly. The -ly ending makes a word that tells how an action happens.",
        "So the words do different jobs."
      ],
      misconception: "A common mix-up is giving both words the same job because both have endings.",
      why: "The answer is \"Neatly shows the way the shirts were folded, while packer is the worker who folded them.\" The -ly ending makes neatly tell how, and the -er ending makes packer name a person. The words do different jobs."
    },
    {
      id: "SK-V2b-S06",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-C06"
      ],
      prompt: "Pick the noun that stands for an idea, not a thing you can touch.",
      stem: [
        "The weakness in the old fence worried the farmer."
      ],
      choices: [
        {
          text: "weakness",
          correct: true
        },
        {
          text: "fence"
        },
        {
          text: "farmer"
        },
        {
          text: "worried"
        }
      ],
      clue: "Some endings turn a word into a noun that names a feeling or an idea. Look for one in the sentence.",
      hints: [
        "Some endings turn a word into a noun that names a feeling or an idea. Look for one in the sentence.",
        "Read the sentence slowly. Which words name a person or a thing, and which one names something you cannot touch?",
        "A person and a thing can both be named by a noun. Decide which choices you could touch or point to."
      ],
      how: [
        "Weakness: weak + ness. The -ness ending makes a noun that names an idea.",
        "Fence names a thing, and farmer names a person. Worried is an action.",
        "Weakness is the only one you cannot touch."
      ],
      misconception: "A common mix-up is picking a noun that names a person or a thing. Ask whether the word names an idea.",
      why: "The answer is \"weakness.\" Weak plus -ness makes a noun that names an idea. Fence names a thing, farmer names a person, and worried is an action."
    },
    {
      id: "SK-V2b-S07",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-P4"
      ],
      prompt: "Sort each word by what its ending tells you.",
      cols: [
        "the doer of an action",
        "an idea",
        "the way an action is done",
        "a comparison"
      ],
      rows: [
        {
          text: "waiter",
          answer: 0
        },
        {
          text: "stillness",
          answer: 1
        },
        {
          text: "boldly",
          answer: 2
        },
        {
          text: "stronger",
          answer: 3
        }
      ],
      clue: "Check each ending, then ask what job the whole word does.",
      hints: [
        "Check each ending, then ask what job the whole word does.",
        "Cover the ending of each word and say what is left. Ask what the ending adds.",
        "One word describes something and compares. Decide which one that could be."
      ],
      how: [
        "Waiter: wait + er names a person who waits on tables.",
        "Stillness: still + ness names an idea.",
        "Boldly: bold + ly tells how something is done.",
        "Stronger: strong + er means more strong."
      ],
      misconception: "A common mix-up is treating every -er word the same. Check the base word first.",
      why: "Waiter names a person who does an action. Stillness names an idea. Boldly tells how. Stronger means more strong."
    },
    {
      id: "SK-V2b-S08",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-C08"
      ],
      prompt: "Read the sentence and complete the explanation.",
      stem: [
        "Her improvement made the teacher proud, and her gladness showed."
      ],
      text: "The ending on {0} makes a noun from an action. The ending on {1} makes a noun from a describing word.",
      slots: [
        {
          options: [
            "improvement",
            "proud",
            "showed"
          ],
          answer: 0
        },
        {
          options: [
            "gladness",
            "teacher",
            "showed"
          ],
          answer: 0
        }
      ],
      clue: "Look for the ending in each word. A noun made with an ending names something, not an action.",
      hints: [
        "Look for the ending in each word. A noun made with an ending names something, not an action.",
        "Read the sentence. Ask which word has the ending the blank names.",
        "Some choices are action words or describing words. Decide which kind of word each blank needs."
      ],
      how: [
        "Blank one: improve + ment makes improvement, a noun. Proud describes and showed is an action.",
        "Blank two: glad + ness makes gladness, a noun. Teacher names a person, and her is a pronoun.",
        "So the answers are improvement and gladness."
      ],
      misconception: "A common mix-up is picking a word without checking its ending. Look at the end of each word.",
      why: "The answers are \"improvement\" and \"gladness.\" Improve plus -ment makes a noun, and glad plus -ness makes a noun. Proud describes, showed is an action, teacher names a person, and her is a pronoun."
    },
    {
      id: "SK-V2b-S09",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-C09"
      ],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: [
        "Everyone liked the coach's fairness."
      ],
      partA: {
        prompt: "How does -ness change the word fair in fairness?",
        choices: [
          {
            text: "It builds a noun for a quality someone has.",
            correct: true
          },
          {
            text: "It builds an adverb for a way of playing."
          },
          {
            text: "It builds a title for a player."
          },
          {
            text: "It builds a word that compares."
          }
        ]
      },
      partB: {
        prompt: "Pick another word where an ending does the job -ness does.",
        choices: [
          {
            text: "illness",
            correct: true
          },
          {
            text: "slowly"
          },
          {
            text: "teacher"
          },
          {
            text: "taller"
          }
        ]
      },
      clue: "Cover the ending and read the base word. Then ask what job the whole word does in the sentence.",
      hints: [
        "Cover the ending and read the base word. Then ask what job the whole word does in the sentence.",
        "For Part B, think about which word is a noun made by adding an ending to a describing word.",
        "For Part A, an adverb tells how and a player word names someone. Decide which of those jobs fairness does."
      ],
      how: [
        "Part A: fair describes, and -ness turns it into a noun that names a quality.",
        "Part B: look for another noun made from a describing word with -ness.",
        "Ill plus -ness makes illness. Slowly tells how, teacher names a person, and taller compares."
      ],
      misconception: "A common mix-up is thinking every ending makes an adverb. Some endings make nouns.",
      why: "Part A: It builds a noun for a quality someone has. Fair describes, and -ness turns it into a noun. Part B: illness. Ill plus -ness makes a noun. Slowly tells how, teacher names a person, and taller compares."
    },
    {
      id: "SK-V2b-S10",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-P5"
      ],
      prompt: "Pick the sentence in which the -er word compares instead of naming someone.",
      options: [
        "The plant grew greener than the weeds.",
        "A builder drove past our house.",
        "My uncle is a singer.",
        "The helper carried the box."
      ],
      answer: [
        0
      ],
      pick: 1,
      clue: "Cover -er in each word. Is the base word an action, or a word that describes?",
      hints: [
        "Cover -er in each word. Is the base word an action, or a word that describes?",
        "Check each word with -er. Ask whether it names someone or compares things.",
        "Three of the words name someone who does an action. Look for the one that compares."
      ],
      how: [
        "Greener: green describes a color, so greener compares.",
        "Builder, singer and helper each have an action word, so they name people who do the action."
      ],
      misconception: "A common mix-up is treating every -er word the same. Check the base word first.",
      why: "The answer is \"The plant grew greener than the weeds.\" Green describes, so greener compares. Builder, singer and helper each name a person who does an action."
    },
    {
      id: "SK-V2b-S11",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-C11"
      ],
      prompt: "Pick the TWO words where the letters -er are not a suffix.",
      pick: 2,
      choices: [
        {
          text: "ladder",
          correct: true
        },
        {
          text: "winter",
          correct: true
        },
        {
          text: "jumper"
        },
        {
          text: "buyer"
        },
        {
          text: "speaker"
        }
      ],
      clue: "Cover -er in each word. If a real word is left, the ending may be a suffix.",
      hints: [
        "Cover -er in each word. If a real word is left, the ending may be a suffix.",
        "Say what is left in each word after you cover the ending. Is it a word you know?",
        "Some of these words name a person who does an action. Decide which of them have a real action word left."
      ],
      how: [
        "Cover -er in jumper, buyer and speaker. Jump, buy and speak are left, so each names a person who does it.",
        "Cover -er in ladder and winter. Ladd and wint are not words, so the -er is not a suffix."
      ],
      misconception: "A common mix-up is thinking every word that ends in -er has a suffix. A real suffix leaves a real base word.",
      why: "The answers are \"ladder\" and \"winter.\" Covering -er leaves ladd and wint, which are not words. Jumper, buyer and speaker each have a real action word left."
    },
    {
      id: "SK-V2b-S12",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-C12"
      ],
      prompt: "Pick the line with a true adverb, one that shows the way something is done.",
      options: [
        "The band played joyfully at the party.",
        "A fly buzzed near the window.",
        "Mom planted a holly bush.",
        "We saw a lily in the pond."
      ],
      answer: [
        0
      ],
      pick: 1,
      clue: "An adverb that ends in -ly tells how something is done. Check each word that ends in -ly.",
      hints: [
        "An adverb that ends in -ly tells how something is done. Check each word that ends in -ly.",
        "Cover -ly in each of the four words. Is a base word left that makes sense with the sentence?",
        "Some of the words end in -ly but name things. Look at what each word is doing."
      ],
      how: [
        "Joyfully: joy + ful + ly. It tells how the band played.",
        "Fly, holly and lily have no real base word, and they name an animal and plants."
      ],
      misconception: "A common mix-up is thinking every word that ends in -ly is an adverb. Check whether a base word is left.",
      why: "The answer is \"The band played joyfully at the party.\" Joyful plus -ly is an adverb that tells how the band played. Fly, holly and lily end in -ly, but they name an animal and plants."
    },
    {
      id: "SK-V2b-S13",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-C13"
      ],
      prompt: "Sort each word.",
      cols: [
        "someone who does it",
        "a quality",
        "the way it is done",
        "no suffix here"
      ],
      rows: [
        {
          text: "builder",
          answer: 0
        },
        {
          text: "gladness",
          answer: 1
        },
        {
          text: "cheerfully",
          answer: 2
        },
        {
          text: "monster",
          answer: 3
        }
      ],
      clue: "Check the ending of each word. Then ask whether a real base word is left when you cover it.",
      hints: [
        "Check the ending of each word. Then ask whether a real base word is left when you cover it.",
        "Say each word and cover the ending. Ask what job the whole word does.",
        "One word ends like a person word but nothing is left when you cover the ending. Decide which one that could be."
      ],
      how: [
        "Builder: build + er names a person who builds.",
        "Gladness: glad + ness names a feeling.",
        "Cheerfully: cheer + ful + ly tells how something is done.",
        "Monster: cover -er and monst is left, which is not a word."
      ],
      misconception: "A common mix-up is matching by the ending alone. Check that a real base word is left.",
      why: "Builder names a person who builds. Gladness names a feeling. Cheerfully tells how. Monster ends in -er, but monst is not a word, so the ending is not a suffix."
    },
    {
      id: "SK-V2b-S14",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-C14"
      ],
      prompt: "Dev's rule: every -er word names someone who does something. Which word in the sentence breaks his rule?",
      stem: [
        "The farmer saw a tiger near the barn."
      ],
      choices: [
        {
          text: "tiger",
          correct: true
        },
        {
          text: "farmer"
        },
        {
          text: "barn"
        },
        {
          text: "saw"
        }
      ],
      clue: "A real suffix leaves a real base word when you cover it. Test Dev's idea on words that end in -er.",
      hints: [
        "A real suffix leaves a real base word when you cover it. Test Dev's idea on words that end in -er.",
        "Look through the sentence for words that end in -er. Cover that ending and see what is left.",
        "Some choices do not end in -er at all. Decide which choices could test Dev's rule."
      ],
      how: [
        "Dev says every -er word names a person who does something.",
        "Cover -er in tiger. Tig is left, which is not an action word, and a tiger is an animal.",
        "Farmer is a person, and barn and saw do not end in -er.",
        "So tiger ends in -er but does not name a person, which shows Dev is wrong."
      ],
      misconception: "A common mix-up is picking a word that does not test the rule. The word must end in -er.",
      why: "The answer is \"tiger.\" It ends in -er, but covering the ending leaves tig, which is not an action word, and a tiger is an animal. Farmer does name a person, and barn and saw do not end in -er."
    },
    {
      id: "SK-V2b-S15",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.V.2.b"
      ],
      passages: [],
      like: [
        "SK-V2b-C15"
      ],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      stem: [
        "The scout hiked steadily up the hill."
      ],
      partA: {
        prompt: "Pick the word that tells how the scout moved.",
        choices: [
          {
            text: "steadily",
            correct: true
          },
          {
            text: "scout"
          },
          {
            text: "hill"
          },
          {
            text: "taller"
          }
        ]
      },
      partB: {
        prompt: "What in that word helps you know?",
        choices: [
          {
            text: "Its -ly ending usually shows how an action is done.",
            correct: true
          },
          {
            text: "Its -er ending usually points to a worker."
          },
          {
            text: "Its -er ending usually shows a comparison."
          },
          {
            text: "Its -s ending usually shows many."
          }
        ]
      },
      clue: "An adverb tells how, when or where something happens. Look at the endings of the words in the sentence.",
      hints: [
        "An adverb tells how, when or where something happens. Look at the endings of the words in the sentence.",
        "Find a word that tells how someone did something. Then check which ending helped you find it.",
        "Some of the words name a person or a place. Decide what job each one does."
      ],
      how: [
        "Part A: steadily is steady + ly. It tells how the scout hiked.",
        "Scout names a person, hill names a place, and taller compares.",
        "Part B: the -ly ending is the clue that steadily tells how."
      ],
      misconception: "A common mix-up is picking a word with an -er ending. Check the job of each word.",
      why: "Part A: steadily. Steady plus -ly makes an adverb. Part B: Its -ly ending usually shows how an action is done. Scout names a person, and hill names a place."
    }
  ],
  addons: {
    "SK-V2b-P2": {
      hints: [
        "Look at the ending of the word. Then find the action word it tells about.",
        "Find the word in the paragraph and read the sentence. Ask what the word adds to the action.",
        "A word that names or counts something does a different job from this one. Decide which job the ending -ly suggests."
      ],
      how: [
        "Split the word: loud + ly. The -ly ending is a clue.",
        "The action is cheers. Loudly tells about it.",
        "A word that tells how an action happens is an adverb."
      ],
      misconception: "A common mix-up is thinking a word with an ending names a person or a thing. Check the ending."
    },
    "SK-V2b-P4": {
      hints: [
        "Check each ending: -er and -or can name people, -ness and -ment make nouns, and -ly often tells how.",
        "Say each word and cover the ending. Ask what job the whole word does.",
        "Two of the words are nouns that name a feeling. Decide which two they could be."
      ],
      how: [
        "Dancer: dance + er names a person who dances.",
        "Happiness: happy + ness, and excitement: excite + ment, both name a feeling.",
        "Proudly: proud + ly tells how something is done."
      ],
      misconception: "A common mix-up is thinking every noun names a person. Some nouns name a feeling."
    },
    "SK-V2b-P5": {
      hints: [
        "Cover -er in each word. Is the base word an action someone does, or a word that describes?",
        "Check each word with -er. Ask whether it names someone or compares things.",
        "Three of the words name someone who does an action. Look for the one that compares."
      ],
      how: [
        "Baker, camper and reader each have an action word, so they name people who do it.",
        "Higher: high describes, so higher compares.",
        "The -er in higher means more."
      ],
      misconception: "A common mix-up is treating every -er word the same. Check the base word first."
    },
    "SK-V2b-P1": {
      hints: [
        "Cover -er. Is the base word an action or a describing word? Then remember what -er does to that kind of word.",
        "Find the word in paragraph 2. Ask what the performer is doing with the balls.",
        "Juggling more balls would be a different meaning of -er. Check whether juggle is an action."
      ],
      how: [
        "Cover -er in juggler. Juggle is left, and it is an action.",
        "When -er is added to an action word, the new word often names a person who does that action.",
        "A juggler is a person who juggles."
      ],
      misconception: "A common mix-up is thinking every -er word means more. Check the base word first."
    },
    "SK-V2b-P3": {
      hints: [
        "Look for words that end in -er or -or. Cover the ending. Is the part left an action someone can do?",
        "Say each choice and cover its ending. Which ones leave an action word?",
        "Some choices end in -er but compare, tell how or name a feeling. Decide which of them name a person."
      ],
      how: [
        "Firefighter: fire + fight + er, a person who fights fires.",
        "Helper: help + er, a person who helps.",
        "Louder compares, proudly tells how, and excitement and happiness name feelings."
      ],
      misconception: "A common mix-up is picking every word with an ending. Check which ones name a person."
    }
  },
  /* B5-b5b:core:end */
  test: [
    { id: "SK-V2b-T1", type: "mc", points: 1, dok: 1, passages: ["p2"],
      prompt: "Which word from the passage names a person?",
      choices: [
        { text: "visitor", correct: true },
        { text: "clearly" },
        { text: "brightness" },
        { text: "amazement" }
      ],
      clue: "Look at the endings. Which ending is added to an action word to name someone who does it?",
      why: "The answer is \"visitor.\" Visit + or names a person who visits. Clearly is an adverb, and brightness and amazement are nouns that do not name people." },
    { id: "SK-V2b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What job does the word carefully do in paragraph 3?",
      choices: [
        { text: "It tells how Mateo painted.", correct: true },
        { text: "It names what Mateo made." },
        { text: "It describes the planets." },
        { text: "It tells when Mateo painted." }
      ],
      clue: "Look at the ending of carefully. Then find the action word it tells about.",
      why: "The answer is \"It tells how Mateo painted.\" Careful + ly is an adverb. It tells how the action painted happened." },
    { id: "SK-V2b-T3", type: "ebsr", points: 2, dok: 2, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "In paragraph 3, what kind of word is brightness?",
        choices: [
          { text: "a noun that names something", correct: true },
          { text: "a verb that shows an action" },
          { text: "an adverb that tells how" },
          { text: "a word that names a person" }
        ] },
      partB: { prompt: "Which word part is the best clue for the answer to Part A?",
        choices: [
          { text: "-ness", correct: true },
          { text: "bright" },
          { text: "-ess" },
          { text: "-ight" }
        ] },
      clue: "Split brightness into a base word and an ending. Think about what that ending does to a word.",
      why: "Part A: a noun that names something. Part B: -ness. Bright is a describing word, and -ness turns it into a noun. In the sentence, brightness names something the model sun showed." },
    { id: "SK-V2b-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Some of these words end in -ment, and some do not. Match each sentence to the job of the enjoy, move or agree word in it.",
      cols: ["names a thing or a feeling (noun)", "shows an action (verb)"],
      rows: [
        { text: "Ana smiled with enjoyment.", answer: 0 },
        { text: "We enjoy the park.", answer: 1 },
        { text: "The movement of the waves rocked the boat.", answer: 0 },
        { text: "The kids move to the music.", answer: 1 },
        { text: "Grandpa signed an agreement.", answer: 0 }
      ],
      clue: "Look at the word that comes from enjoy, move or agree in each sentence. Check its ending, and ask whether it names something or shows what someone does.",
      why: "Enjoyment, movement and agreement end in -ment, which makes a noun. They name a feeling or a thing. Enjoy and move have no ending, and in these sentences they show what someone does, so they are verbs." },
    { id: "SK-V2b-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "In which sentence does the -er word name a person who does something? Choose the sentence.",
      options: [
        "This box is lighter than that one.",
        "The hiker rested on a big rock.",
        "It is colder in the mountains.",
        "Her shoes are newer than mine."
      ],
      answer: [1], pick: 1,
      clue: "Cover -er in each word. Is the base word an action or a describing word?",
      why: "The answer is \"The hiker rested on a big rock.\" Hike is an action, so a hiker is a person who hikes. Light, cold and new are describing words, so lighter, colder and newer mean more." }
  ]
});

PP.addLesson({
  code: "3.L.V.2.c",
  title: "Building new words with roots, prefixes and suffixes",
  teach: {
    big: "I can build a new word by adding a prefix to the front or a suffix to the end of a base word or a root, and each part I add changes the meaning.",
    points: [
      "Start with a base word, like help, or a common root, like port, which means carry.",
      "Add a prefix to the front to change the meaning: un + fair = unfair (not fair). Re + build = rebuild (build again). Mis + spell = misspell (spell wrongly).",
      "Add a suffix to the end to make a new word: help + ful = helpful. Help + less = helpless. Help + er = helper. Choose the part that matches the meaning you want.",
      "You can build on a root, too. Add a part that has its own meaning, then put the meanings together. Phon means sound, so tele (far) + phone = telephone, a tool that brings sound from far away.",
      "Sometimes the spelling changes. In most words that end in a consonant and y, change the y to i before adding -ly or -ness: happy + ness = happiness."
    ],
    words: [
      { term: "base word", means: "the main word you build on" },
      { term: "common root", means: "a word part from Latin or Greek with its own meaning, like port (carry) or graph (write)" },
      { term: "prefix", means: "a part added to the front of a word" },
      { term: "suffix", means: "a part added to the end of a word" }
    ],
    examples: [
      {
        label: "Example: one base word",
        lines: ["color + ful = colorful (full of color)", "color + less = colorless (without color)", "re + color = recolor (color again)"],
        note: "One base word can grow into many new words. Each part you add brings its own meaning."
      },
      {
        label: "Example: one root",
        lines: ["Port means carry.", "port + able = portable (can be carried)", "re + port = report (to carry news back)", "ex + port = export (to carry things out to sell in another country)", "Look-alike: airport. Here port means a harbor for planes, not carry."],
        note: "Every word built on the root port has something to do with carrying. If carry does not fit the meaning, the letters port are a look-alike."
      }
    ],
    tip: "On the test, you may need to choose the word that best completes a sentence, like hopeful or hopeless, or the word that was built from the right root. Read the whole sentence, decide what meaning fits, then pick the word with the right parts."
  },
  learn: [
    {
      show: ["Root: graph means write.", "Prefix: auto- means self.", "Meaning you want: a person's own name, written by that person"],
      ask: "What new word can you build?",
      steps: [
        "Find the part that means self. That is the prefix auto-.",
        "Find the part that means write. That is the root graph.",
        "Put them together: auto + graph. Try it in a sentence: The baseball player signed his autograph on my cap."
      ],
      answer: "The new word is autograph. An autograph is a person's own name, written by that person."
    },
    {
      show: ["Ava had to ___ her story because she left out the ending.", "Base word: write"],
      ask: "Which word fits the blank: rewrite or writer?",
      steps: [
        "Think about what Ava needs to do. She left out the ending, so she must write the story again.",
        "The prefix re- means again, so re + write = rewrite.",
        "Writer names a person, and Ava needs an action word here, so writer does not fit."
      ],
      answer: "Ava had to rewrite her story."
    },
    {
      show: ["Base word: happy", "Suffix: -ness"],
      ask: "How do you spell the new word?",
      steps: [
        "Look at the end of happy. It ends in a consonant, p, and then y.",
        "Change the y to i before you add the suffix.",
        "Add -ness: happi + ness."
      ],
      answer: "The new word is happiness."
    }
  ],
  write: {
    prompt: "Pick one base word (help, care or hope) or one root (port means carry, graph means write). Build at least three new words by adding a prefix, a suffix or another word part. Write what each new word means. Then write a sentence that uses each new word.",
    checklist: [
      "I built at least three new words from one base word or root.",
      "I wrote what each new word means.",
      "I used each new word in a sentence that makes sense.",
      "I checked the spelling of each new word."
    ],
    rows: 8
  },
  parent: "Pick a base word at breakfast, like kind, play or use, and take turns building new words from it (kindness, unkind, kindly). Each person has to use their new word in a sentence. Try it with a root too: how many words can you build with port (carry) or phon (sound)? If a word only looks like it has port, like airport, talk about why carry does not fit.",
  passages: [],
  practice: [
    { id: "SK-V2c-P2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Add a prefix to the base word pay. Which new word means \"to pay before\"?",
      choices: [
        { text: "prepay", correct: true },
        { text: "repay" },
        { text: "unpaid" },
        { text: "payment" }
      ],
      clue: "Think about which prefix means before. Find the word that starts with it.",
      why: "The answer is \"prepay.\" Pre- means before, so pre + pay means to pay before. Repay means to pay again, or pay back, unpaid means not paid, and payment is a noun." },
    { id: "SK-V2c-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each meaning to the word you would build.",
      cols: ["retell", "dishonest", "harmless", "powerful"],
      rows: [
        { text: "to tell again", answer: 0 },
        { text: "not honest", answer: 1 },
        { text: "without harm", answer: 2 },
        { text: "full of power", answer: 3 }
      ],
      clue: "For each meaning, find the base word first. Then pick the part that means again, not, without or full of.",
      why: "Re- means again, so to tell again is retell. Dis- means not, so not honest is dishonest. -less means without, so without harm is harmless. -ful means full of, so full of power is powerful." },
    { id: "SK-V2c-P6", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "The prefix e- means \"out.\" The root rupt means \"break.\" Which word would you build to mean \"to break out\"?",
      choices: [
        { text: "erupt", correct: true },
        { text: "export" },
        { text: "rupture" },
        { text: "inspect" }
      ],
      clue: "You need TWO parts: one that means out and one that means break. Check that both parts are in your word.",
      why: "The answer is \"erupt.\" E- (out) + rupt (break) = erupt, to break out, like hot rock that breaks out of a volcano. Export starts with ex-, which also means out, but port means carry, not break. Rupture has rupt but no part that means out. Inspect has spect, which means look." },
    { id: "SK-V2c-P4", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Add the suffix -ly to the base word easy. Which new word is spelled correctly?",
      choices: [
        { text: "easily", correct: true },
        { text: "easyly" },
        { text: "easly" },
        { text: "easely" }
      ],
      clue: "Easy ends in a consonant and then y. What do you do to the y before adding a suffix?",
      why: "The answer is \"easily.\" Easy ends in s and then y, so you change the y to i and add -ly." },
    { id: "SK-V2c-P5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the sentence from a student's draft. Which word could replace not happy?",
      stem: ["Marco was not happy when the rain stopped his soccer game."],
      choices: [
        { text: "unhappy", correct: true },
        { text: "happily" },
        { text: "happiness" },
        { text: "happier" }
      ],
      clue: "You need one word that means not happy. Which prefix means not?",
      why: "The answer is \"unhappy.\" Un- means not, so un + happy means not happy. Happily tells how, happiness is a noun, and happier means more happy." },
    { id: "SK-V2c-P7", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the word built from the root that fits each sentence.",
      text: "Grandpa's radio is light and has a handle, so it is {0}. The loud thunder {1} our picnic, and we had to stop eating and run inside.",
      slots: [
        { options: ["breakable", "portable", "washable"], answer: 1 },
        { options: ["inspected", "reported", "interrupted"], answer: 2 }
      ],
      clue: "For the radio, which root means carry? For the thunder, which root means break? Find the word with that root.",
      why: "The first answer is portable. Port means carry and -able means can be, and a light radio with a handle can be carried. Breakable and washable have -able but no root that means carry. The second answer is interrupted. Rupt means break, and the thunder broke into the picnic so it had to stop. Inspected has spect (look), and reported has port (carry)." }
  ],
  test: [
    { id: "SK-V2c-T1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that best completes the sentence.",
      text: "The paint on the old fence was peeling, so Dad had to {0} it.",
      slots: [{ options: ["repaint", "painter", "painless"], answer: 0 }],
      clue: "Think about what Dad must do to peeling paint. Then find the part that means again.",
      why: "The answer is \"repaint.\" Re- means again, so Dad had to paint the fence again. Painter names a person, and painless means without pain." },
    { id: "SK-V2c-T7", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "The prefix micro- means \"small.\" Which word would you build to name a tool that picks up small sounds so everyone can hear them?",
      choices: [
        { text: "microphone", correct: true },
        { text: "microscope" },
        { text: "telephone" },
        { text: "megaphone" }
      ],
      clue: "You need one part that means small and one part that means sound.",
      why: "The answer is \"microphone.\" Micro- (small) + phon (sound) = microphone. Microscope has micro-, but scope means a tool for looking, not sound. Telephone and megaphone have phon, but tele means far and mega means big, not small." },
    { id: "SK-V2c-T8", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Every word below has the letters port. The root port means \"carry.\" In which TWO words is port the root that means carry?",
      choices: [
        { text: "transport", correct: true },
        { text: "porter", correct: true },
        { text: "portion" },
        { text: "portrait" },
        { text: "passport" }
      ],
      clue: "Think about what each whole word means. Does carry fit that meaning?",
      why: "The answers are \"transport\" and \"porter.\" Transport means to carry from one place to another. Port + er makes porter, a person who carries bags at a hotel or a train station. In the other words, carry does not fit the meaning. A portion is a part or share of something, like a portion of a pie. A portrait is a picture of a person. In passport, port means a harbor or gate, the place where a traveler comes into a country." },
    { id: "SK-V2c-T4", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Add the suffix -ness to the base word lazy. Which new word is spelled correctly?",
      choices: [
        { text: "laziness", correct: true },
        { text: "lazyness" },
        { text: "lazness" },
        { text: "lazieness" }
      ],
      clue: "Look at the last two letters of lazy. What is the rule for a word that ends in a consonant and y?",
      why: "The answer is \"laziness.\" Lazy ends in z and then y, so you change the y to i and add -ness." },
    { id: "SK-V2c-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the sentence from a student's draft. Which words could replace had no way to help itself?",
      stem: ["The tiny kitten had no way to help itself when it got stuck in the tree."],
      choices: [
        { text: "was helpless", correct: true },
        { text: "was helpful" },
        { text: "was a helper" },
        { text: "was helping" }
      ],
      clue: "You need words that mean without help. Which suffix means without?",
      why: "The answer is \"was helpless.\" -less means without, and a helpless kitten cannot help itself. Helpful means full of help, a helper is a person who helps, and helping does not fit the meaning." },
    { id: "SK-V2c-T6", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each meaning to the word you would build.",
      cols: ["prewash", "disagree", "misuse", "loudly"],
      rows: [
        { text: "to wash before", answer: 0 },
        { text: "to not agree", answer: 1 },
        { text: "to use wrongly", answer: 2 },
        { text: "in a loud way", answer: 3 }
      ],
      clue: "For each meaning, find the base word first. Then pick the word with the part that means before, not, wrongly, or in a ___ way.",
      why: "Pre- means before, so to wash before is prewash. Dis- means not, so to not agree is disagree. Mis- means wrongly, so to use wrongly is misuse. -ly means in a ___ way, so in a loud way is loudly." }
  ]
});

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
      "Be sure the school word means the same thing as the words it replaces. Read your sentence again to check."
    ],
    words: [
      { term: "academic word", means: "a school word you use in many subjects, like measure or explain" },
      { term: "content word", means: "a word that belongs to one subject, like predator in science (also called a specialized word)" }
    ],
    example: {
      label: "Example",
      lines: ["Plain: Frogs start out as little swimming babies with tails.", "With a school word: Frogs start out as tadpoles."],
      note: "Tadpoles is the science word for baby frogs that swim and have tails. One school word takes the place of five plain words and sounds like a real science report."
    },
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
      ] }
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
      ] }
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
      ] }
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

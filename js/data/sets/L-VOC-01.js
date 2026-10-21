/*
 * L-VOC-01 — Vocabulary: Clues around the word.
 * Context clues within and beyond a sentence (3.L.V.3.a), multiple-meaning words in context
 * (3.L.V.3.a), and academic/content words learned from context (3.L.V.1.a).
 * Standalone set (SPEC §5b): no passage. Mini-paragraphs sit in the item's `stem` (shown in a
 * box above the answer choices), so the clue is outside the sentence that holds the word.
 */
PP.addSet({
  id: "L-VOC-01",
  section: "language",
  kind: "vocabulary",
  title: "Clues around the word",
  blurb: "Use the words around a new word to figure out what it means.",
  passages: [],
  items: [
    {
      id: "L-VOC-01-1",
      type: "mc",
      points: 1,
      std: ["3.L.V.3.a"],
      dok: 2,
      prompt: "Read the sentence. \"The puppy was so timid that it hid under the porch whenever a stranger walked by.\" What does timid mean?",
      choices: [
        { text: "shy and easily scared", correct: true },
        { text: "playful and full of energy" },
        { text: "hungry and looking for food" },
        { text: "sleepy and ready for a nap" }
      ],
      clue: "Ask yourself what the puppy DOES when a stranger comes. A puppy that acts that way feels a certain way.",
      why: "The answer is \"shy and easily scared.\" The puppy hid under the porch whenever a stranger walked by. Hiding from strangers shows the puppy is shy and easily scared."
    },
    {
      id: "L-VOC-01-2",
      type: "dropdown",
      points: 1,
      std: ["3.L.V.3.a"],
      dok: 1,
      prompt: "Read the sentence. \"At sunset, a bat swooped over the pond to catch bugs.\" Choose the meaning of bat in this sentence.",
      text: "In this sentence, bat means {0}.",
      slots: [
        { options: ["a wooden stick used to hit a ball", "a small animal that flies at night", "to hit at something with your hand"], answer: 1 }
      ],
      clue: "Bat has more than one meaning. Look at what this bat does: it swoops over a pond and catches bugs. What kind of bat can do that?",
      why: "The answer is \"a small animal that flies at night.\" The bat swooped over the pond at sunset to catch bugs. A wooden stick cannot fly or catch bugs, so this bat is the animal."
    },
    {
      id: "L-VOC-01-3",
      type: "hottext",
      points: 1,
      std: ["3.L.V.3.a"],
      dok: 2,
      prompt: "The word ring has more than one meaning. Which sentence uses ring to mean a sound?",
      options: [
        "Grandma wore a gold ring on her finger.",
        "We sat in a ring around the campfire.",
        "We heard a loud ring at the front door.",
        "The old bell hung from a metal ring by the door."
      ],
      answer: [2],
      pick: 1,
      clue: "Read the words around ring in each sentence. Which words tell you what kind of ring it is?",
      why: "The answer is \"We heard a loud ring at the front door.\" The words heard and loud show that this ring is a sound. In the other sentences, ring is a piece of jewelry, a circle of people, and a metal loop that holds up the bell."
    },
    {
      id: "L-VOC-01-4",
      type: "match",
      points: 2,
      std: ["3.L.V.3.a"],
      dok: 2,
      prompt: "The word light has more than one meaning. Match each sentence to the meaning of light in that sentence.",
      cols: ["not heavy", "something that makes it bright, like a lamp", "to make something start to burn"],
      rows: [
        { text: "The bag of feathers was so light that Kai lifted it with one finger.", answer: 0 },
        { text: "Please turn on the light so we can read.", answer: 1 },
        { text: "Grandpa will light the candles on the cake.", answer: 2 }
      ],
      clue: "For each sentence, read the words around light and ask which meaning makes sense there.",
      why: "Kai lifted the bag with one finger, so light means \"not heavy.\" You turn on a light to read, so it means \"something that makes it bright, like a lamp.\" Grandpa will light candles, so it means \"to make something start to burn.\""
    },
    {
      id: "L-VOC-01-5",
      type: "ebsr",
      points: 2,
      std: ["3.L.V.3.a"],
      dok: 2,
      prompt: "Read the paragraph. Then answer Part A and Part B.",
      stem: [
        "Maya walked home from the library after school. She carried two new books about sharks. Halfway there, dark clouds rolled in, and rain poured down. The rain drenched her from head to toe. At home, her mom handed her a towel and dry clothes right away."
      ],
      partA: {
        prompt: "Part A: What does drenched mean in the paragraph?",
        choices: [
          { text: "to make very wet all the way through", correct: true },
          { text: "to make very tired from a long walk" },
          { text: "to make very scared of a storm" },
          { text: "to make very glad to get home" }
        ]
      },
      partB: {
        prompt: "Part B: Which TWO sentences from the paragraph help you know what drenched means?",
        pick: 2,
        choices: [
          { text: "Maya walked home from the library after school." },
          { text: "She carried two new books about sharks." },
          { text: "Halfway there, dark clouds rolled in, and rain poured down.", correct: true },
          { text: "At home, her mom handed her a towel and dry clothes right away.", correct: true }
        ]
      },
      clue: "The clues are not all in the sentence with drenched. Look at what happened BEFORE the rain drenched Maya and what her mom did AFTER.",
      why: "Part A: The answer is \"to make very wet all the way through.\" Part B: Rain poured down while Maya walked (\"Halfway there, dark clouds rolled in, and rain poured down.\"), and her mom gave her a towel and dry clothes (\"At home, her mom handed her a towel and dry clothes right away.\"). You need a towel and dry clothes when rain has made you wet all the way through."
    },
    {
      id: "L-VOC-01-6",
      type: "mc",
      points: 1,
      std: ["3.L.V.1.a", "3.L.V.3.a"],
      dok: 2,
      prompt: "Read the paragraph. What does hibernate mean?",
      stem: [
        "Some animals hibernate in winter. Bears eat a lot of food in the fall. Then they crawl into their dens and sleep through the coldest months. They wake up in the spring, when food is easy to find again."
      ],
      choices: [
        { text: "to spend the winter in a long, deep sleep", correct: true },
        { text: "to travel to a warmer place for the winter" },
        { text: "to gather food and store it for later" },
        { text: "to dig a new home under the ground" }
      ],
      clue: "The sentence with hibernate does not explain it. Read the sentences after it. What do the bears do all winter?",
      why: "The answer is \"to spend the winter in a long, deep sleep.\" The paragraph says bears \"sleep through the coldest months\" and \"wake up in the spring.\" They do not travel away, and the paragraph never says they store food or dig new homes."
    },
    {
      id: "L-VOC-01-7",
      type: "ms",
      points: 2,
      std: ["3.L.V.1.a", "3.L.V.3.a"],
      dok: 2,
      prompt: "Read the paragraph. Which TWO sentences tell what it means to estimate?",
      stem: [
        "Mr. Ortiz held up a jar of marbles. \"Don't count them,\" he said. \"Just estimate how many there are.\" Jada looked closely at the jar and guessed that there were about one hundred marbles."
      ],
      pick: 2,
      choices: [
        { text: "When you estimate, you make a careful guess.", correct: true },
        { text: "When you estimate, you find a number that is close, but not exact.", correct: true },
        { text: "When you estimate, you count each thing one at a time." },
        { text: "When you estimate, you measure something with a ruler." },
        { text: "When you estimate, you always find the exact answer." }
      ],
      clue: "Mr. Ortiz tells the class what NOT to do. Then look at what Jada does and the word about in her answer.",
      why: "The answers are \"When you estimate, you make a careful guess.\" and \"When you estimate, you find a number that is close, but not exact.\" Jada looked closely and guessed, and she said about one hundred, which is close but not exact. Mr. Ortiz said \"Don't count them,\" so estimating is not counting each one."
    },
    {
      id: "L-VOC-01-8",
      type: "dropdown",
      points: 2,
      std: ["3.L.V.3.a"],
      dok: 2,
      prompt: "Read the sentence. \"After Dad found a spot to park the car, we walked into the park to fly our kites.\" The word park is used two times. Choose the meaning of each one.",
      text: "The first park means {0}. The second park means {1}.",
      slots: [
        { options: ["to stop a car and leave it in a spot", "an outdoor area with grass and trees", "a lot where people buy cars"], answer: 0 },
        { options: ["to stop a car and leave it in a spot", "an outdoor area with grass and trees", "a lot where people buy cars"], answer: 1 }
      ],
      clue: "Read the words right before and after each park. Then try each meaning in that spot and ask which one makes sense.",
      why: "The first park means \"to stop a car and leave it in a spot,\" because Dad needed a spot to park the car. The second park means \"an outdoor area with grass and trees,\" because the family walked into it to fly kites."
    },
    {
      id: "L-VOC-01-9",
      type: "mc",
      points: 1,
      std: ["3.L.V.1.a", "3.L.V.3.a"],
      dok: 2,
      prompt: "Read the paragraph. What does contributed mean?",
      stem: [
        "Our town needed a new playground. Many people wanted to help. Some gave money, and others gave their time to build it. Because so many people contributed, the town finished the playground in just one month."
      ],
      choices: [
        { text: "gave something to help reach a goal", correct: true },
        { text: "asked other people for money" },
        { text: "argued about what to build" },
        { text: "watched while others did the work" }
      ],
      clue: "Read the sentence just before the one with contributed. What did the people of the town do?",
      why: "The answer is \"gave something to help reach a goal.\" The paragraph says \"Some gave money, and others gave their time to build it.\" Giving money and time to finish the playground is what contributed means."
    },
    {
      id: "L-VOC-01-10",
      type: "mc",
      points: 1,
      std: ["3.L.V.3.a"],
      dok: 2,
      prompt: "Read the paragraph. What does bank mean in this paragraph?",
      stem: [
        "On Saturday, Sam and his grandfather went fishing. They carried their poles and a cooler down a dirt path. Soon they reached the river and sat down on the bank. Grandpa said this soft, muddy ground beside the water was the best place to catch catfish."
      ],
      choices: [
        { text: "the land along the side of a river", correct: true },
        { text: "a place where people keep their money" },
        { text: "a dirt path that goes through the woods" },
        { text: "a wooden dock that sticks out over the water" }
      ],
      clue: "Bank has more than one meaning. Find where Sam and Grandpa sat. Then read the LAST sentence. What does it tell you about that place?",
      why: "The answer is \"the land along the side of a river.\" Sam and Grandpa reached the river and sat on the bank, and the next sentence calls that place \"this soft, muddy ground beside the water.\" It is not a dock, because a dock is a wooden platform, not muddy ground."
    }
  ]
});

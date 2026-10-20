/* Lessons: 3-5.L.V.1 General, academic & specialized vocabulary and 3-5.L.V.2 Word analysis. Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.L.V.1.a",
  title: "Learning new school words from what you read",
  teach: {
    big: "When I meet a new school word, I keep reading, because the words around it often tell me what it means.",
    points: [
      "Some new words are school words you use in every subject, like describe, compare and explain.",
      "Other new words belong to one subject, like habitat in science or citizen in social studies.",
      "Authors often explain a new word right away. Look for helper words such as is called, means, is a, or a meaning set off by commas.",
      "If the author does not explain the word, read the next sentence. It may tell what the thing does or give examples of it.",
      "Try your meaning in the sentence. If it makes sense, you figured out the word."
    ],
    words: [
      { term: "academic word", means: "a school word you use in many subjects, like describe or compare" },
      { term: "content word", means: "a word that belongs to one subject, like habitat in science (also called a specialized word)" },
      { term: "definition", means: "the meaning of a word" }
    ],
    example: {
      label: "Example",
      lines: ["Bees carry pollen, a fine powder made by flowers, from one flower to the next."],
      note: "Pollen is a science word. The words between the commas, a fine powder made by flowers, tell you what it means right away."
    },
    tip: "On the test, a question may ask what a science or social studies word means in a passage. The help is usually in the same sentence or the one right after it, so read around the word."
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
        ["Marsh grass has a special way to survive in salty water.", "It gets rid of extra salt through its leaves.", "Sometimes you can see tiny white bits of salt on the grass."]
      ] },
    { id: "p2", title: "Where Does Rain Come From?", genre: "Informational text",
      paragraphs: [
        ["Water on Earth moves in a big circle called the water cycle.", "The same water is used again and again."],
        ["First, the sun warms water in oceans, lakes and puddles.", "The water turns into a gas called water vapor and rises into the air.", "This change is called evaporation.", "You cannot see water vapor, but it is all around you."],
        ["High in the sky, the air is cold.", "The cold air cools the water vapor, and it turns back into tiny drops of water.", "This change is called condensation.", "Many of these tiny drops crowd together to make a cloud."],
        ["When the drops in a cloud join and get too heavy, they fall to the ground.", "Water that falls from clouds is called precipitation.", "Rain, snow, sleet and hail are all kinds of precipitation."],
        ["Some of the water soaks into the ground.", "Much of it flows into rivers, lakes and oceans.", "Then the cycle begins again."]
      ] }
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
    { id: "SK-V1a-P5", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Match each word from the passage to what it means.",
      cols: ["wet, grassy land by the ocean", "an animal that hunts other animals", "not deep"],
      rows: [
        { text: "salt marsh", answer: 0 },
        { text: "predator", answer: 1 },
        { text: "shallow", answer: 2 }
      ],
      clue: "Find each word in the passage. Then read the sentence it is in and the sentence right after it.",
      why: "A salt marsh is wet, grassy land where the ocean meets the land (paragraph 1). A predator hunts other animals for food (paragraph 3). Shallow means not deep: the water barely covers the heron's feet (paragraph 3)." }
  ],
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
    { id: "SK-V1a-T4", type: "match", points: 2, dok: 2, passages: ["p2"],
      prompt: "Match each word from the passage to what it means.",
      cols: ["water in the form of a gas", "something that happens again and again in a circle", "many tiny drops of water crowded together"],
      rows: [
        { text: "water vapor", answer: 0 },
        { text: "cycle", answer: 1 },
        { text: "cloud", answer: 2 }
      ],
      clue: "Find each word in the passage. Read the sentence it is in, and look for the words called or make.",
      why: "Water vapor is water that has turned into a gas (paragraph 2). The water cycle is a big circle, and the same water is used again and again (paragraph 1). A cloud is made of many tiny drops crowded together (paragraph 3)." },
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
        lines: ["port = carry, as in portable", "graph = write, as in autograph", "tele = far, as in television", "phon = sound, as in phonics", "rupt = break, as in rupture", "spect = look, as in spectacles", "telephone = tele + phone. Tele means far. Phone comes from phon, which means sound.", "So a telephone brings sound from far away."],
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

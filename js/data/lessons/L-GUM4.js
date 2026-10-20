/* Lessons: 3.L.GC.1 Grammar, usage & mechanics, grade 3 Continue (C) and Introduce (I) rows. Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.L.GC.1:C:form-and-use-prepositional-phrases",
  title: "Prepositional phrases",
  teach: {
    big: "A prepositional phrase is a group of words that starts with a preposition, like under or after, and adds a detail such as where or when.",
    points: [
      "A preposition is a small word like in, on, under, behind, across, before, after, during or with.",
      "A prepositional phrase starts with a preposition and ends with a noun or pronoun: under the porch, after lunch, with my sister.",
      "Prepositional phrases add details. Many of them tell where or when something happens."
    ],
    words: [
      { term: "preposition", means: "a small word like in, on, under or after that starts a phrase" },
      { term: "prepositional phrase", means: "a preposition plus the words up to its noun, like under the porch" }
    ],
    example: {
      label: "Example",
      lines: ["After lunch, the cat napped under the porch."],
      note: "After lunch is a prepositional phrase that tells when. Under the porch is a prepositional phrase that tells where. Each one starts with a preposition and ends with a noun."
    },
    tip: "When you write, add a prepositional phrase to give more detail. \"We played\" can become \"We played by the creek after school.\""
  },
  learn: [
    {
      show: ["Kayla hid the birthday present behind the couch."],
      ask: "What is the prepositional phrase, and what does it tell?",
      steps: [
        "Look for a preposition, a small word like in, on, under or behind. Here it is behind.",
        "Read on until you reach the noun it points to: behind the couch.",
        "Ask what the phrase tells. Behind the couch tells where Kayla hid the present."
      ],
      answer: "The prepositional phrase is behind the couch. It tells where."
    },
    {
      show: ["During the storm, we played board games in the kitchen."],
      ask: "Find both prepositional phrases. Which one tells when?",
      steps: [
        "Find the prepositions: during and in.",
        "Read each one to its noun: during the storm and in the kitchen.",
        "Ask when or where for each one. During the storm tells when. In the kitchen tells where."
      ],
      answer: "The phrases are during the storm and in the kitchen. During the storm tells when."
    }
  ],
  parent: "On a walk or in the car, take turns telling where things are with a prepositional phrase, like \"The bird is on the fence\" or \"The ball is under the bench.\"",
  passages: [],
  practice: [
    { id: "SK-GUM4-1-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which group of words in this sentence is a prepositional phrase?",
      stem: "The ducks swam across the pond.",
      choices: [
        { text: "across the pond", correct: true },
        { text: "The ducks" },
        { text: "ducks swam" },
        { text: "swam across" }
      ],
      clue: "Find the preposition first. Then read on until you reach the noun it points to.",
      why: "The answer is across the pond. Across is the preposition, and pond is the noun that ends the phrase. It tells where the ducks swam." },
    { id: "SK-GUM4-1-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the preposition that best completes the sentence.",
      text: "Grandpa keeps his fishing poles {0} the garage.",
      slots: [ { options: ["in", "during", "after", "about"], answer: 0 } ],
      clue: "The phrase should tell where the poles are kept. Try each word in the sentence and listen.",
      why: "The answer is in. In the garage tells where Grandpa keeps his poles. During and after tell about time, and about does not make sense here." },
    { id: "SK-GUM4-1-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each prepositional phrase tell where or when?",
      cols: ["Where", "When"],
      rows: [
        { text: "before breakfast", answer: 1 },
        { text: "on the top shelf", answer: 0 },
        { text: "after the game", answer: 1 },
        { text: "beside the mailbox", answer: 0 },
        { text: "at noon", answer: 1 }
      ],
      clue: "Ask \"Is this a place or a time?\" for each phrase.",
      why: "On the top shelf and beside the mailbox name places, so they tell where. Before breakfast, after the game and at noon name times, so they tell when." },
    { id: "SK-GUM4-1-P4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences have a prepositional phrase that tells where?",
      choices: [
        { text: "The kite got stuck in a tall pine tree.", correct: true },
        { text: "Malik left his shoes by the back door.", correct: true },
        { text: "We will eat dinner at six o'clock." },
        { text: "The baby giggled after her bath." },
        { text: "Rosa sang a song very loudly." }
      ],
      clue: "Find the prepositional phrase in each sentence. Then ask whether it names a place or a time.",
      why: "The answers are \"The kite got stuck in a tall pine tree.\" and \"Malik left his shoes by the back door.\" In a tall pine tree and by the back door tell where. At six o'clock and after her bath tell when. The sentence about Rosa has no prepositional phrase." },
    { id: "SK-GUM4-1-P5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Which sentence has a prepositional phrase that tells when?",
      options: [
        "Ben read a book on the bus.",
        "Ben read a book before bedtime.",
        "Ben read a book with his sister.",
        "Ben read a book about sharks."
      ],
      answer: [1], pick: 1,
      clue: "Every sentence has a prepositional phrase. Look for the one that names a time.",
      why: "The answer is \"Ben read a book before bedtime.\" Before bedtime names a time. On the bus tells where, with his sister tells who was with him, and about sharks tells what the book is about." }
  ],
  test: [
    { id: "SK-GUM4-1-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which group of words in this sentence is a prepositional phrase?",
      stem: "The puppy slept beside the warm fireplace.",
      choices: [
        { text: "beside the warm fireplace", correct: true },
        { text: "The puppy slept" },
        { text: "slept beside" },
        { text: "The puppy" }
      ],
      clue: "Find the preposition first. Then read on until you reach the noun it points to.",
      why: "The answer is beside the warm fireplace. Beside is the preposition, and fireplace is the noun that ends the phrase." },
    { id: "SK-GUM4-1-T2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the preposition that best completes the sentence.",
      text: "We always wash our hands {0} lunch.",
      slots: [ { options: ["before", "under", "across", "inside"], answer: 0 } ],
      clue: "The phrase should tell when we wash our hands. Try each word in the sentence and listen.",
      why: "The answer is before. Before lunch tells when we wash our hands. Under, across and inside tell about places, and they do not make sense with lunch." },
    { id: "SK-GUM4-1-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each prepositional phrase tell where or when?",
      cols: ["Where", "When"],
      rows: [
        { text: "under the bridge", answer: 0 },
        { text: "during recess", answer: 1 },
        { text: "through the tunnel", answer: 0 },
        { text: "in the morning", answer: 1 }
      ],
      clue: "Ask \"Is this a place or a time?\" for each phrase.",
      why: "Under the bridge and through the tunnel name places, so they tell where. During recess and in the morning name times, so they tell when." },
    { id: "SK-GUM4-1-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences have a prepositional phrase?",
      choices: [
        { text: "The frog jumped into the water.", correct: true },
        { text: "Dad baked bread for our neighbors.", correct: true },
        { text: "The frog jumped very high." },
        { text: "Dad smiled and waved." },
        { text: "We laughed and laughed." }
      ],
      clue: "Look for a preposition followed by a noun. A sentence without that pair does not have a prepositional phrase.",
      why: "The answers are \"The frog jumped into the water.\" and \"Dad baked bread for our neighbors.\" Into the water and for our neighbors are prepositional phrases. The other sentences have no preposition." },
    { id: "SK-GUM4-1-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence has a prepositional phrase that tells where?",
      choices: [
        { text: "Lena planted seeds in the garden.", correct: true },
        { text: "Lena planted seeds on Saturday." },
        { text: "Lena planted seeds very quickly." },
        { text: "Lena planted seeds and bulbs." }
      ],
      clue: "Find the sentence with a phrase that names a place.",
      why: "The answer is \"Lena planted seeds in the garden.\" In the garden names a place. On Saturday tells when, and the other two sentences have no prepositional phrase." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti",
  title: "Comparing words: -er, -est, more and most",
  teach: {
    big: "Use -er or more to compare two things, and use -est or most to compare three or more.",
    points: [
      "Use -er or more to compare two things. Use -est or most to compare three or more things.",
      "Short words add -er and -est: fast, faster, fastest. Many longer words use more and most: more careful, most careful. Never use both, like more faster.",
      "A few words change completely: good, better, best and bad, worse, worst. The word well also changes: well, better, best."
    ],
    words: [
      { term: "comparative", means: "the form that compares two, like taller or more careful" },
      { term: "superlative", means: "the form that compares three or more, like tallest or most careful" }
    ],
    example: {
      label: "Example",
      lines: ["Jada's tower is tall.", "Eli's tower is taller than Jada's.", "Sam's tower is the tallest of all three."],
      note: "Taller compares two towers. Tallest compares all three. These rules work for words that tell how, too: Sam builds faster than Eli."
    },
    tip: "Count what you are comparing. Two things? Use -er or more. Three or more? Use -est or most."
  },
  learn: [
    {
      show: ["Of all the kids in my class, Marco runs the ___."],
      ask: "Should the blank be faster or fastest?",
      steps: [
        "Count what is being compared. Marco is compared with all the kids in his class.",
        "That is more than two, so use the -est form.",
        "Read it back: Of all the kids in my class, Marco runs the fastest."
      ],
      answer: "Fastest, because Marco is compared with the whole class."
    },
    {
      show: ["My cold was bad on Monday, but it was even ___ on Tuesday."],
      ask: "Which word fits: badder, worse or worst?",
      steps: [
        "Bad is one of the words that changes completely: bad, worse, worst.",
        "Two days are compared, Monday and Tuesday, so use the word for two.",
        "Badder is not correct in school writing, so cross it out."
      ],
      answer: "Worse, because it compares two days."
    }
  ],
  parent: "At the store or in the kitchen, compare things in twos and threes: \"Which apple is bigger? Which one is the biggest?\" Let your child choose the -er or -est word.",
  passages: [],
  practice: [
    { id: "SK-GUM4-2-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "A whale is {0} than a dolphin.",
      slots: [ { options: ["bigger", "biggest", "more bigger", "most big"], answer: 0 } ],
      clue: "Count the animals being compared. Then choose the form that fits that number.",
      why: "The answer is bigger. The sentence compares two animals, so use -er. Big doubles its g before -er. More bigger uses two comparing parts, which is never correct." },
    { id: "SK-GUM4-2-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Of the three puppies, Pepper is the {0}.",
      slots: [ { options: ["smaller", "smallest", "most small", "more smaller"], answer: 1 } ],
      clue: "How many puppies are being compared? Choose the form that fits that number.",
      why: "The answer is smallest. Pepper is compared with three puppies, so use -est. Small is a short word, so it adds -est instead of using most." },
    { id: "SK-GUM4-2-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "This is the most beautiful garden in Savannah.", correct: true },
        { text: "This puzzle is more harder than the last one." },
        { text: "Kai is the goodest swimmer on our team." },
        { text: "Today is more hot than it was yesterday." }
      ],
      clue: "Check each comparing word. Short words add -er or -est, long words use more or most, and some words change completely.",
      why: "The answer is \"This is the most beautiful garden in Savannah.\" Beautiful is a long word, so it uses most. The others should say harder (not more harder), best (not goodest) and hotter (not more hot)." },
    { id: "SK-GUM4-2-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is each word used to compare two things, or three or more things?",
      cols: ["Two things", "Three or more things"],
      rows: [
        { text: "brighter", answer: 0 },
        { text: "most careful", answer: 1 },
        { text: "better", answer: 0 },
        { text: "worst", answer: 1 },
        { text: "quieter", answer: 0 },
        { text: "happiest", answer: 1 }
      ],
      clue: "Words with -er or more compare two. Words with -est or most compare three or more. Remember the words that change completely.",
      why: "Brighter, quieter and better compare two things. Most careful, happiest and worst compare three or more things. Better comes from good, and worst comes from bad." },
    { id: "SK-GUM4-2-P5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Sami sings {0} than his brother, but their sister sings the {1} of all.",
      slots: [
        { options: ["well", "better", "best", "gooder"], answer: 1 },
        { options: ["better", "best", "most good", "goodest"], answer: 1 }
      ],
      clue: "Well and good change completely when you compare. One part compares two people, and the other compares all three.",
      why: "The answers are better and best. Sami is compared with his brother, two people, so use better. Their sister is compared with all three, so use best. Gooder and goodest are not correct." }
  ],
  test: [
    { id: "SK-GUM4-2-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The blue kite flew {0} than the red kite.",
      slots: [ { options: ["higher", "highest", "more high", "most higher"], answer: 0 } ],
      clue: "Count the kites being compared. Then choose the form that fits that number.",
      why: "The answer is higher. Two kites are compared, so use -er. High is a short word, so it adds -er instead of using more." },
    { id: "SK-GUM4-2-T2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "That was the {0} movie I have ever seen!",
      slots: [ { options: ["funnier", "funniest", "most funniest", "more funny"], answer: 1 } ],
      clue: "The movie is compared with every movie the speaker has seen. Is that two, or more than two?",
      why: "The answer is funniest. The movie is compared with every movie the speaker has seen, which is more than two, so use -est. Funny changes y to i before -est." },
    { id: "SK-GUM4-2-T3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "My cough is worse today than it was yesterday.", correct: true },
        { text: "Lucy is the most tallest girl in our class." },
        { text: "This is the baddest storm we have had." },
        { text: "Our new couch is more softer than the old one." }
      ],
      clue: "Check each comparing word. Never use more or most with -er or -est, and remember the words that change completely.",
      why: "The answer is \"My cough is worse today than it was yesterday.\" Bad changes to worse when you compare two days. The others should say tallest (not most tallest), worst (not baddest) and softer (not more softer)." },
    { id: "SK-GUM4-2-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each word compare two things, or three or more things?",
      cols: ["Compares two", "Compares three or more"],
      rows: [
        { text: "slower", answer: 0 },
        { text: "most helpful", answer: 1 },
        { text: "worse", answer: 0 },
        { text: "best", answer: 1 },
        { text: "more careful", answer: 0 },
        { text: "greatest", answer: 1 }
      ],
      clue: "Words with -er or more compare two. Words with -est or most compare three or more. Remember the words that change completely.",
      why: "Slower, more careful and worse compare two things. Most helpful, greatest and best compare three or more things. Worse comes from bad, and best comes from good." },
    { id: "SK-GUM4-2-T5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences use the comparing word correctly?",
      choices: [
        { text: "Tia is older than her cousin.", correct: true },
        { text: "This is the most exciting book on the shelf.", correct: true },
        { text: "Zeke ran more faster than his dog." },
        { text: "That was the goodest peach in the basket." },
        { text: "This box is more heavier than that one." }
      ],
      clue: "Look for a short word with -er or -est, or a long word with more or most. Watch for words that use both, and for words that should change completely.",
      why: "The answers are \"Tia is older than her cousin.\" and \"This is the most exciting book on the shelf.\" The others should say faster (not more faster), best (not goodest) and heavier (not more heavier)." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:C:ensure-pronoun-antecedent-agreement",
  title: "Pronouns that match their nouns",
  teach: {
    big: "A pronoun takes the place of a noun, so it has to match that noun: one or more than one, and boy, girl or thing.",
    points: [
      "The noun a pronoun stands for is called its antecedent. In \"Ava lost her mitten,\" the pronoun her stands for Ava.",
      "If the noun means one, use a pronoun for one, like he, she, it, him, her, his or its. If the noun means more than one, use they, them or their.",
      "Match boy, girl or thing, too. Use he, him or his for a boy or man, she or her for a girl or woman, and it or its for a thing."
    ],
    words: [
      { term: "pronoun", means: "a word that takes the place of a noun, like she, it or them" },
      { term: "antecedent", means: "the noun a pronoun stands for" }
    ],
    example: {
      label: "Example",
      lines: ["The twins packed their bags, and Mom carried them to the car."],
      note: "The twins means more than one, so the pronoun is their. Bags means more than one, so the pronoun is them."
    },
    tip: "To check a pronoun, find the noun it stands for. Then ask: Is it one or more than one? Is it a boy, a girl or a thing?"
  },
  learn: [
    {
      show: ["The players grabbed ___ water bottles after the game."],
      ask: "Which pronoun fits: his, her or their?",
      steps: [
        "Find the noun the pronoun stands for. The bottles belong to the players.",
        "Ask whether players means one or more than one. It means more than one.",
        "Choose the pronoun for more than one."
      ],
      answer: "Their, because players means more than one."
    },
    {
      show: ["Grandma Rose found an old quilt in the attic and washed ___."],
      ask: "Which pronoun fits: it, them or her?",
      steps: [
        "Ask what was washed. The quilt was washed, so quilt is the antecedent.",
        "A quilt is one thing, not a person.",
        "Use the pronoun for one thing."
      ],
      answer: "It, because the quilt is one thing."
    }
  ],
  parent: "While you read together, stop at a pronoun like they or her and ask, \"Who is that?\" Your child points to the noun the pronoun stands for.",
  passages: [],
  practice: [
    { id: "SK-GUM4-3-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the pronoun that stands for Mr. Okafor.",
      text: "Mr. Okafor cleaned {0} glasses with a soft cloth.",
      slots: [ { options: ["his", "her", "their", "its"], answer: 0 } ],
      clue: "Mr. is a title for a man. Is Mr. Okafor one person or more than one?",
      why: "The answer is his. Mr. Okafor is one man, so the pronoun is his." },
    { id: "SK-GUM4-3-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the pronoun that stands for the cookies.",
      text: "The cookies smelled so good that we ate {0} right away.",
      slots: [ { options: ["them", "it", "they", "him"], answer: 0 } ],
      clue: "Does cookies mean one or more than one? Also notice that the pronoun comes after the action word ate.",
      why: "The answer is them. Cookies means more than one, so use them. They also means more than one, but it is used before the action word, as in \"They smelled good,\" not after it." },
    { id: "SK-GUM4-3-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "In this sentence, which noun does the pronoun their stand for?",
      stem: "The girls showed their science project to Mr. Hill.",
      choices: [
        { text: "the girls", correct: true },
        { text: "the science project" },
        { text: "Mr. Hill" },
        { text: "the science fair" }
      ],
      clue: "Their means belongs to more than one person. Who owns the project?",
      why: "The answer is the girls. The project belongs to the girls, and their is used for more than one. Mr. Hill is one person, and a project cannot own anything." },
    { id: "SK-GUM4-3-P4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the pronoun correctly?",
      choices: [
        { text: "The books fell, so Omar picked them up.", correct: true },
        { text: "The book fell, so Omar picked them up." },
        { text: "The lamp broke, so Dad fixed them." },
        { text: "The cups were dirty, so Nora washed it." }
      ],
      clue: "In each sentence, find the noun the pronoun stands for. Is that noun one thing or more than one?",
      why: "The answer is \"The books fell, so Omar picked them up.\" Books means more than one, so them matches. Book and lamp mean one, so they need it. Cups means more than one, so it needs them." },
    { id: "SK-GUM4-3-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which pronoun could take the place of each noun?",
      cols: ["he", "she", "it", "they"],
      rows: [
        { text: "Uncle Ray", answer: 0 },
        { text: "my aunt", answer: 1 },
        { text: "the bicycle", answer: 2 },
        { text: "the students", answer: 3 }
      ],
      clue: "Ask two questions for each noun: one or more than one? A boy or man, a girl or woman, or a thing?",
      why: "Uncle Ray is one man, so he. My aunt is one woman, so she. The bicycle is one thing, so it. The students means more than one, so they." }
  ],
  test: [
    { id: "SK-GUM4-3-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the pronoun that stands for the blankets.",
      text: "The blankets were warm from the dryer, so Ivy folded {0} carefully.",
      slots: [ { options: ["them", "it", "her", "they"], answer: 0 } ],
      clue: "Does blankets mean one or more than one? Also notice that the pronoun comes after the action word folded.",
      why: "The answer is them. Blankets means more than one, so use them after the action word folded." },
    { id: "SK-GUM4-3-T2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the pronoun that stands for Aunt Lucia.",
      text: "Aunt Lucia brought {0} guitar to the family picnic.",
      slots: [ { options: ["her", "his", "their", "its"], answer: 0 } ],
      clue: "An aunt is a woman. Is Aunt Lucia one person or more than one?",
      why: "The answer is her. Aunt Lucia is one woman, so the pronoun is her." },
    { id: "SK-GUM4-3-T3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the pronoun correctly?",
      choices: [
        { text: "The window was heavy, so Dad pushed it open.", correct: true },
        { text: "The window was heavy, so Dad pushed them open." },
        { text: "The doors were open, so Mom closed it." },
        { text: "The gate was loose, so Grandpa fixed them." }
      ],
      clue: "In each sentence, find the noun the pronoun stands for. Is that noun one thing or more than one?",
      why: "The answer is \"The window was heavy, so Dad pushed it open.\" Window means one thing, so it matches. The gate and the window need it, not them, and the doors need them, not it." },
    { id: "SK-GUM4-3-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences have a pronoun that matches the noun it stands for?",
      choices: [
        { text: "The ducks flapped their wings.", correct: true },
        { text: "Mrs. Diaz read her favorite poem to us.", correct: true },
        { text: "The pencils rolled away, and Jo picked it up." },
        { text: "Our car is old, but Dad still likes them." },
        { text: "The apple was ripe, so Kim ate them." }
      ],
      clue: "For each pronoun, find its noun. Then check one or more than one, and boy, girl or thing.",
      why: "The answers are \"The ducks flapped their wings.\" and \"Mrs. Diaz read her favorite poem to us.\" Ducks means more than one, so their matches, and Mrs. Diaz is one woman, so her matches. Pencils needs them, and car and apple need it." },
    { id: "SK-GUM4-3-T5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which pronoun belongs in each sentence?",
      cols: ["its", "their", "her"],
      rows: [
        { text: "The oak tree lost all of ___ leaves.", answer: 0 },
        { text: "The boys tied ___ shoes.", answer: 1 },
        { text: "My sister brushed ___ hair.", answer: 2 },
        { text: "The houses had snow on ___ roofs.", answer: 1 }
      ],
      clue: "Find the noun each pronoun stands for. Is it one thing, more than one, or a girl?",
      why: "The tree is one thing, so its. Boys and houses mean more than one, so their. My sister is one girl, so her." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-",
  title: "Punctuating what people say",
  teach: {
    big: "Put quotation marks around a speaker's exact words, start them with a capital letter, and use a comma to set them apart from words like she said.",
    points: [
      "Quotation marks go around the exact words someone says. The first word inside them starts with a capital letter.",
      "If the speaker comes first, put a comma after said and before the quotation marks: Mia said, \"Let's go.\" The period goes inside the closing quotation marks.",
      "If the speaker comes last, put a comma inside the closing quotation marks: \"Let's go,\" Mia said. A question mark or exclamation point also goes inside, with no comma: \"Can I come?\" asked Leo."
    ],
    words: [
      { term: "quotation marks", means: "the marks \" \" that go around a speaker's exact words" },
      { term: "dialogue", means: "the words characters say to each other" }
    ],
    example: {
      label: "Example",
      lines: ["Dad said, \"The bus is here.\"", "\"Grab your lunch,\" Mom added.", "\"Wait for me!\" Theo shouted."],
      note: "In each sentence, the period, comma or exclamation point comes before the closing quotation marks. The first word inside the quotation marks is capitalized."
    },
    tip: "Say the sentence out loud. The words you would hear the person say are the words that go inside the quotation marks."
  },
  learn: [
    {
      show: ["Ms. Reyes said please line up at the door."],
      ask: "How should this sentence be punctuated?",
      steps: [
        "Find the exact words Ms. Reyes says: please line up at the door.",
        "The speaker comes first, so put a comma after said.",
        "Put quotation marks around her words, capitalize the first word, and put the period inside the closing quotation marks."
      ],
      answer: "Ms. Reyes said, \"Please line up at the door.\""
    },
    {
      show: ["\"This soup is too hot\" said Grandpa."],
      ask: "What is missing from this sentence?",
      steps: [
        "Find the speaker. Grandpa comes last, after his words.",
        "When the speaker comes last, a comma ends the spoken words.",
        "The comma goes inside the closing quotation marks."
      ],
      answer: "A comma is missing: \"This soup is too hot,\" said Grandpa."
    }
  ],
  parent: "Write down something your child said today with no punctuation. Let your child add the quotation marks, the comma and the capital letter.",
  passages: [],
  practice: [
    { id: "SK-GUM4-4-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence is punctuated correctly?",
      choices: [
        { text: "Nadia said, \"My kitten is asleep.\"", correct: true },
        { text: "Nadia said \"My kitten is asleep.\"" },
        { text: "Nadia said, \"my kitten is asleep.\"" },
        { text: "Nadia said, \"My kitten is asleep\"." }
      ],
      clue: "Check three things: a comma after said, a capital letter at the start of the spoken words, and the period inside the closing quotation marks.",
      why: "The answer is Nadia said, \"My kitten is asleep.\" It has a comma after said, a capital M, and the period inside the quotation marks. Each other choice is missing one of these." },
    { id: "SK-GUM4-4-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the correct way to write the spoken words.",
      text: "{0} Jamal asked.",
      slots: [ { options: ["\"Is it cold outside?\"", "\"Is it cold outside\"?", "\"Is it cold outside?,\"", "\"is it cold outside?\""], answer: 0 } ],
      clue: "Jamal is asking a question. Where does the question mark go, and does the sentence also need a comma?",
      why: "The answer is \"Is it cold outside?\" The question mark goes inside the closing quotation marks, and no comma is added after it. The first word, Is, starts with a capital letter." },
    { id: "SK-GUM4-4-P3", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences are punctuated correctly?",
      choices: [
        { text: "\"Let's plant the seeds today,\" said Aunt May.", correct: true },
        { text: "Carlos whispered, \"The baby is asleep.\"", correct: true },
        { text: "\"We won the game\" Lily told her dad." },
        { text: "Ruby asked, \"can we go to the park?\"" },
        { text: "\"Thank you\", said Mr. Lee." }
      ],
      clue: "Check the comma, the capital letter, and where each mark sits next to the closing quotation marks.",
      why: "The answers are \"Let's plant the seeds today,\" said Aunt May. and Carlos whispered, \"The baby is asleep.\" The sentence about Lily needs a comma after game, inside the quotation marks. Ruby's question needs a capital C. The comma after Thank you belongs inside the quotation marks." },
    { id: "SK-GUM4-4-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is written correctly?",
      options: [
        "\"I found a shiny rock,\" Ella said.",
        "\"I found a shiny rock\" Ella said.",
        "\"I found a shiny rock\", Ella said.",
        "I found a shiny rock,\" Ella said."
      ],
      answer: [0], pick: 1,
      clue: "The speaker comes last. Look for a comma inside the closing quotation marks and marks at both ends of the spoken words.",
      why: "The answer is \"I found a shiny rock,\" Ella said. The comma is inside the closing quotation marks. One sentence has no comma, one has the comma outside, and one is missing the opening quotation marks." },
    { id: "SK-GUM4-4-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Each sentence has one mistake. What does each sentence need?",
      cols: ["A comma", "A capital letter", "Quotation marks"],
      rows: [
        { text: "Ben said \"It is my turn.\"", answer: 0 },
        { text: "Ava said, \"we need more glue.\"", answer: 1 },
        { text: "Grandma said, Supper is ready.", answer: 2 },
        { text: "Mom said \"Turn off the light.\"", answer: 0 },
        { text: "Dev asked, \"where are my shoes?\"", answer: 1 }
      ],
      clue: "Check each sentence for three things: a comma after said or asked, a capital letter at the start of the spoken words, and quotation marks around them.",
      why: "Ben's and Mom's sentences need a comma after said. Ava's and Dev's sentences need a capital letter at the start of the spoken words: We and Where. Grandma's sentence needs quotation marks around Supper is ready." }
  ],
  test: [
    { id: "SK-GUM4-4-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence is punctuated correctly?",
      choices: [
        { text: "\"The bus is late,\" said Marcus.", correct: true },
        { text: "\"The bus is late\" said Marcus." },
        { text: "\"The bus is late\", said Marcus." },
        { text: "\"the bus is late,\" said Marcus." }
      ],
      clue: "The speaker comes last. Check for a comma, where the comma sits, and a capital letter.",
      why: "The answer is \"The bus is late,\" said Marcus. The comma is inside the closing quotation marks, and The starts with a capital letter. Each other choice has one mistake." },
    { id: "SK-GUM4-4-T2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence is punctuated correctly?",
      choices: [
        { text: "Hana asked, \"Where is my red sweater?\"", correct: true },
        { text: "Hana asked, \"Where is my red sweater\"?" },
        { text: "Hana asked \"Where is my red sweater?\"" },
        { text: "Hana asked, Where is my red sweater?" }
      ],
      clue: "The speaker comes first. Check for a comma after asked, quotation marks around the question, and where the question mark sits.",
      why: "The answer is Hana asked, \"Where is my red sweater?\" It has a comma after asked, quotation marks around her words, and the question mark inside the closing quotation marks." },
    { id: "SK-GUM4-4-T3", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences are punctuated correctly?",
      choices: [
        { text: "Coach Bell said, \"Great job today.\"", correct: true },
        { text: "\"May I have some water?\" asked Nico.", correct: true },
        { text: "\"It's my birthday\" Sara told us." },
        { text: "Dad said, \"don't forget your hat.\"" },
        { text: "Pablo said, \"I can help\"." }
      ],
      clue: "Check the comma, the capital letter, and where each mark sits next to the closing quotation marks.",
      why: "The answers are Coach Bell said, \"Great job today.\" and \"May I have some water?\" asked Nico. Sara's sentence needs a comma inside the quotation marks after birthday. Dad's sentence needs a capital D in Don't. Pablo's period belongs inside the quotation marks." },
    { id: "SK-GUM4-4-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Each sentence has one mistake. What does each sentence need?",
      cols: ["A comma", "A capital letter", "Quotation marks"],
      rows: [
        { text: "Ms. Grant said \"Open your books.\"", answer: 0 },
        { text: "Jin said, \"the movie starts soon.\"", answer: 1 },
        { text: "Kenji yelled, Look at the rainbow!", answer: 2 },
        { text: "Mia said, \"we are almost there.\"", answer: 1 }
      ],
      clue: "Check each sentence for three things: a comma after the speaking word, a capital letter at the start of the spoken words, and quotation marks around them.",
      why: "Ms. Grant's sentence needs a comma after said. Jin's and Mia's sentences need a capital letter: The and We. Kenji's sentence needs quotation marks around Look at the rainbow!" },
    { id: "SK-GUM4-4-T5", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the correct way to write the spoken words.",
      text: "{0} said Grandma.",
      slots: [ { options: ["\"Supper is ready,\"", "\"Supper is ready\",", "\"Supper is ready\"", "\"supper is ready,\""], answer: 0 } ],
      clue: "The speaker comes last. The spoken words need a comma, a capital letter, and the comma in the right place.",
      why: "The answer is \"Supper is ready,\" with the comma inside the closing quotation marks and a capital S at the start." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs",
  title: "Who, which, that, where and when",
  teach: {
    big: "Words like who, which, that, where and when can start a part of a sentence that tells more about a noun.",
    points: [
      "Use who to tell more about a person: I have a friend who plays the drums.",
      "Use which or that to tell more about a thing or an animal: We crossed the bridge that goes over the river.",
      "Use where to tell more about a place, and when to tell more about a time: This is the park where we fly kites. Saturday is the day when we visit Grandma."
    ],
    words: [
      { term: "relative pronoun", means: "who, which or that, used to tell more about a noun" },
      { term: "relative adverb", means: "where or when, used to tell more about a place or a time" }
    ],
    example: {
      label: "Example",
      lines: ["Ms. Kim is the teacher who helped me read.", "Macon is the city where my cousins live."],
      note: "Who tells more about the teacher, a person. Where tells more about Macon, a place."
    },
    tip: "Look at the noun right before the blank. Is it a person, a thing, a place or a time? That tells you which word to use."
  },
  learn: [
    {
      show: ["We visited the farm ___ Grandpa grew up."],
      ask: "Which word fits: who, where or when?",
      steps: [
        "Look at the noun right before the blank: farm.",
        "A farm is a place.",
        "Use the word that tells more about a place."
      ],
      answer: "Where: We visited the farm where Grandpa grew up."
    },
    {
      show: ["I read a book ___ has a talking fox in it."],
      ask: "Which word fits: who, that or when?",
      steps: [
        "Look at the noun right before the blank: book.",
        "A book is a thing. It is not a person or a time.",
        "Use the word that tells more about a thing."
      ],
      answer: "That: I read a book that has a talking fox in it."
    }
  ],
  parent: "Play a riddle game: \"I am thinking of a person who ...\" or \"I am thinking of a place where ...\" Take turns finishing the clue and guessing.",
  passages: [],
  practice: [
    { id: "SK-GUM4-5-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "My aunt is the person {0} taught me to swim.",
      slots: [ { options: ["who", "which", "where", "when"], answer: 0 } ],
      clue: "Look at the noun right before the blank. Is it a person, a thing, a place or a time?",
      why: "The answer is who. The noun before the blank is person, and who tells more about a person." },
    { id: "SK-GUM4-5-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Winter is the season {0} the pond freezes.",
      slots: [ { options: ["when", "who", "where", "whose"], answer: 0 } ],
      clue: "Look at the noun right before the blank. Is it a person, a place or a time?",
      why: "The answer is when. A season is a time of year, and when tells more about a time." },
    { id: "SK-GUM4-5-P3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Tybee Island is the place {0} we found the seashells.",
      slots: [ { options: ["where", "who", "when", "which"], answer: 0 } ],
      clue: "Look at the noun right before the blank. Is it a person, a place or a time?",
      why: "The answer is where. Place is the noun before the blank, and where tells more about a place." },
    { id: "SK-GUM4-5-P4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the word who correctly?",
      choices: [
        { text: "Dr. Patel is the vet who took care of our cat.", correct: true },
        { text: "This is the cake who Mom baked for my party." },
        { text: "That is the pond who has frogs and turtles." },
        { text: "June is the month who school ends for summer." }
      ],
      clue: "Who tells more about a person. Find the sentence where who comes right after a person.",
      why: "The answer is \"Dr. Patel is the vet who took care of our cat.\" A vet is a person. A cake and a pond are things, and June is a time, so who does not fit them." },
    { id: "SK-GUM4-5-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which word would you use to tell more about each noun?",
      cols: ["who", "where", "when"],
      rows: [
        { text: "the coach", answer: 0 },
        { text: "the library", answer: 1 },
        { text: "the morning", answer: 2 },
        { text: "my neighbor", answer: 0 },
        { text: "the kitchen", answer: 1 }
      ],
      clue: "Ask whether each noun is a person, a place or a time.",
      why: "The coach and my neighbor are people, so who. The library and the kitchen are places, so where. The morning is a time, so when." }
  ],
  test: [
    { id: "SK-GUM4-5-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "We met a firefighter {0} showed us the big red truck.",
      slots: [ { options: ["who", "which", "where", "when"], answer: 0 } ],
      clue: "Look at the noun right before the blank. Is it a person, a thing, a place or a time?",
      why: "The answer is who. A firefighter is a person, and who tells more about a person." },
    { id: "SK-GUM4-5-T2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Lunch is the time {0} we sit with our friends.",
      slots: [ { options: ["when", "who", "where", "whose"], answer: 0 } ],
      clue: "Look at the noun right before the blank. Is it a person, a place or a time?",
      why: "The answer is when. Time is the noun before the blank, and when tells more about a time." },
    { id: "SK-GUM4-5-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "This is the creek {0} we saw the turtles.",
      slots: [ { options: ["where", "who", "when", "whose"], answer: 0 } ],
      clue: "Look at the noun right before the blank. Is it a person, a place or a time?",
      why: "The answer is where. A creek is a place, and where tells more about a place." },
    { id: "SK-GUM4-5-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the word where correctly?",
      choices: [
        { text: "Atlanta is the city where my dad works.", correct: true },
        { text: "Mr. Ford is the man where fixed our sink." },
        { text: "Here is the pencil where I lost at school." },
        { text: "Ana is the girl where won the spelling bee." }
      ],
      clue: "Where tells more about a place. Find the sentence where it comes right after a place.",
      why: "The answer is \"Atlanta is the city where my dad works.\" A city is a place. Mr. Ford and Ana are people, so they need who, and a pencil is a thing, so it needs that." },
    { id: "SK-GUM4-5-T5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences use who, where or when correctly?",
      choices: [
        { text: "Ms. Lopez is the nurse who helped me.", correct: true },
        { text: "Spring is the season when dogwoods bloom.", correct: true },
        { text: "The park who has a slide is near us." },
        { text: "That is the store when we buy bread." },
        { text: "Liam is the boy where lives next door." }
      ],
      clue: "For each sentence, look at the noun before who, where or when. Is it a person, a place or a time?",
      why: "The answers are \"Ms. Lopez is the nurse who helped me.\" and \"Spring is the season when dogwoods bloom.\" A nurse is a person, and spring is a time. A park and a store are places, and Liam is a person, so those words do not fit." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:I:use-interjections",
  title: "Interjections: Wow! Oh no!",
  teach: {
    big: "An interjection is a word or short phrase that shows a feeling, like Wow! or Oh no!",
    points: [
      "Interjections show feelings such as surprise, joy, pain or worry. Some interjections are wow, hooray, ouch, oh no, oops and yikes.",
      "When the feeling is strong, put an exclamation point after the interjection. Start the next word with a capital letter: Hooray! We won!",
      "When the feeling is mild, put a comma after the interjection and keep going: Oh, I forgot my pencil."
    ],
    words: [
      { term: "interjection", means: "a word or short phrase that shows a feeling, like wow or ouch" }
    ],
    example: {
      label: "Example",
      lines: ["Ouch! I bumped my knee.", "Oops, I spilled a little juice."],
      note: "Ouch shows a strong feeling of pain, so an exclamation point follows it. Oops shows a small surprise, so a comma follows it."
    },
    tip: "Interjections fit best in stories and in what characters say. Reports and letters to your principal usually do not need them."
  },
  learn: [
    {
      show: ["Hooray! The rain stopped, so we can play outside."],
      ask: "What is the interjection, and what feeling does it show?",
      steps: [
        "Look for a word that shows a feeling and could stand by itself.",
        "Hooray stands by itself, with an exclamation point after it.",
        "Think about why the speaker says it. The rain stopped, so the speaker can play outside."
      ],
      answer: "Hooray is the interjection. It shows joy."
    },
    {
      show: ["___! There is a spider on my shoe!"],
      ask: "Which interjection fits best: Hooray, Yikes or Yum?",
      steps: [
        "Read the rest of the sentence to find the feeling. A spider on a shoe is scary.",
        "Hooray shows joy, and Yum shows that food tastes good. Neither one fits.",
        "Choose the word that shows fear or alarm."
      ],
      answer: "Yikes! There is a spider on my shoe!"
    }
  ],
  parent: "When something surprising happens at home, ask your child which interjection fits: Wow? Oops? Yikes? Then write it down together with the right mark after it.",
  passages: [],
  practice: [
    { id: "SK-GUM4-6-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word in this sentence is the interjection?",
      stem: "Wow! That roller coaster is so tall.",
      choices: [
        { text: "Wow", correct: true },
        { text: "roller" },
        { text: "tall" },
        { text: "That" }
      ],
      clue: "An interjection shows a feeling and can stand by itself.",
      why: "The answer is Wow. It shows surprise, and it stands by itself with an exclamation point after it." },
    { id: "SK-GUM4-6-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the interjection that fits best.",
      text: "{0} I dropped my ice cream cone on the ground.",
      slots: [ { options: ["Oh no!", "Hooray!", "Yum!", "Bravo!"], answer: 0 } ],
      clue: "Read the rest of the sentence. How would you feel if this happened to you?",
      why: "The answer is Oh no! Dropping an ice cream cone is sad and upsetting. Hooray and Bravo show joy or praise, and Yum shows that food tastes good." },
    { id: "SK-GUM4-6-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "What feeling does each interjection show?",
      cols: ["Pain", "Joy", "A small mistake"],
      rows: [
        { text: "Ouch!", answer: 0 },
        { text: "Hooray!", answer: 1 },
        { text: "Oops,", answer: 2 },
        { text: "Ow!", answer: 0 },
        { text: "Yay!", answer: 1 }
      ],
      clue: "Think of when you would say each word out loud. Would you be hurt, happy, or sorry you slipped up?",
      why: "Ouch and Ow show pain. Hooray and Yay show joy. Oops shows a small mistake." },
    { id: "SK-GUM4-6-P4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences have an interjection?",
      choices: [
        { text: "Yikes! The pot boiled over.", correct: true },
        { text: "Oh, I left my book at school.", correct: true },
        { text: "The puppy barked at the mail carrier." },
        { text: "We will go to the fair on Friday." },
        { text: "Please pass the green beans." }
      ],
      clue: "Look for a word at the start that shows a feeling and is followed by a comma or an exclamation point.",
      why: "The answers are \"Yikes! The pot boiled over.\" and \"Oh, I left my book at school.\" Yikes shows alarm, and Oh shows a mild surprise. The other sentences have no word that shows a feeling." },
    { id: "SK-GUM4-6-P5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is written correctly?",
      choices: [
        { text: "Hooray! We won the game.", correct: true },
        { text: "Hooray! we won the game." },
        { text: "hooray! We won the game." },
        { text: "Hooray, We won the game." }
      ],
      clue: "After an exclamation point, the next word starts with a capital letter. After a comma, it does not, unless it is a name or I.",
      why: "The answer is \"Hooray! We won the game.\" Hooray starts with a capital letter, and after the exclamation point, We starts with a capital letter too. After a comma, we would stay lowercase." }
  ],
  test: [
    { id: "SK-GUM4-6-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word in this sentence is the interjection?",
      stem: "Yum! This peach pie tastes great.",
      choices: [
        { text: "Yum", correct: true },
        { text: "peach" },
        { text: "great" },
        { text: "This" }
      ],
      clue: "An interjection shows a feeling and can stand by itself.",
      why: "The answer is Yum. It shows that the pie tastes good, and it stands by itself with an exclamation point after it." },
    { id: "SK-GUM4-6-T2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the interjection that fits best.",
      text: "{0} That bee stung my arm!",
      slots: [ { options: ["Ouch!", "Hooray!", "Yum!", "Bravo!"], answer: 0 } ],
      clue: "Read the rest of the sentence. How would a bee sting feel?",
      why: "The answer is Ouch! A bee sting hurts, and ouch shows pain. The other words show joy, praise or good taste." },
    { id: "SK-GUM4-6-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the interjection that fits best.",
      text: "{0} We are going to the zoo tomorrow!",
      slots: [ { options: ["Hooray!", "Ouch!", "Oops!", "Yuck!"], answer: 0 } ],
      clue: "Read the rest of the sentence. Is this happy news, a hurt, a mistake, or something gross?",
      why: "The answer is Hooray! A trip to the zoo is happy news, and hooray shows joy." },
    { id: "SK-GUM4-6-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "What feeling does the interjection in each sentence show?",
      cols: ["Pain", "Joy", "Disgust"],
      rows: [
        { text: "Ow! My tooth hurts.", answer: 0 },
        { text: "Yay! Grandma is here.", answer: 1 },
        { text: "Yuck! This milk smells sour.", answer: 2 },
        { text: "Ouch! The pan is hot.", answer: 0 },
        { text: "Ew! There is mud in my shoe.", answer: 2 }
      ],
      clue: "Read the whole sentence. The words after the interjection tell you why the speaker feels that way.",
      why: "Ow and Ouch show pain: a sore tooth and a hot pan. Yay shows joy about Grandma's visit. Yuck and Ew show disgust: sour milk and mud in a shoe." },
    { id: "SK-GUM4-6-T5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences are written correctly?",
      choices: [
        { text: "Wow! Look at that rainbow.", correct: true },
        { text: "Oh, I forgot my jacket.", correct: true },
        { text: "Hey! you dropped your glove." },
        { text: "Yikes the dog got out!" },
        { text: "oh no! The bus left." }
      ],
      clue: "Check three things: a capital letter at the start, a comma or exclamation point after the interjection, and a capital letter after an exclamation point.",
      why: "The answers are \"Wow! Look at that rainbow.\" and \"Oh, I forgot my jacket.\" The sentence about the glove needs a capital Y after the exclamation point. Yikes needs a mark after it. Oh no needs a capital O." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:I:use-helping-and-linking-verbs",
  title: "Helping verbs and linking verbs",
  teach: {
    big: "A helping verb helps the main verb, like has in has walked. A linking verb links the subject to a word that tells about it, like is in is happy.",
    points: [
      "A helping verb comes before the main verb. Some helping verbs are has, have, had, will, can, could and should: We have finished. Kai will swim.",
      "A linking verb does not show action. It links the subject to a word that names it or describes it: The soup is hot. My dad was a pilot.",
      "Am, is, are, was and were are often linking verbs. Seem and become can be linking verbs too: The puppy seems tired."
    ],
    words: [
      { term: "main verb", means: "the most important verb in a sentence" },
      { term: "helping verb", means: "a verb that comes before the main verb and helps it, like will or has" },
      { term: "linking verb", means: "a verb that links the subject to a word that names or describes it, like is" }
    ],
    example: {
      label: "Example",
      lines: ["Grandpa has planted a fig tree.", "The figs are sweet."],
      note: "Has is a helping verb. It helps the main verb planted. Are is a linking verb. It links figs to sweet, a word that describes them."
    },
    tip: "Look at the word after the verb. If it is another verb, the first verb is a helping verb. If it is a word that names or describes the subject, the verb is a linking verb."
  },
  learn: [
    {
      show: ["Rosa will bake muffins for the bake sale."],
      ask: "What is the helping verb, and what is the main verb?",
      steps: [
        "Find the action. Bake is the action, so bake is the main verb.",
        "Look at the word right before it: will.",
        "Will helps tell when the baking happens, so it is the helping verb."
      ],
      answer: "Will is the helping verb, and bake is the main verb."
    },
    {
      show: ["The lake was calm this morning."],
      ask: "Is was a helping verb or a linking verb?",
      steps: [
        "Look for an action. Nobody is doing anything in this sentence.",
        "Look at the word after was: calm. Calm describes the lake.",
        "A verb that connects the subject to a describing word is a linking verb."
      ],
      answer: "Was is a linking verb. It links the lake to calm."
    }
  ],
  parent: "At dinner, take turns saying one sentence with will or can and one sentence with is or seems. Then name the helping verb and the linking verb in each other's sentences.",
  passages: [],
  practice: [
    { id: "SK-GUM4-7-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "What is the helping verb in this sentence?",
      stem: "Jamal has finished his library book.",
      choices: [
        { text: "has", correct: true },
        { text: "finished" },
        { text: "his" },
        { text: "book" }
      ],
      clue: "Find the main verb, the action. Then look at the word right before it.",
      why: "The answer is has. Finished is the main verb, the action. Has comes before it and helps it." },
    { id: "SK-GUM4-7-P2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "What is the linking verb in this sentence?",
      stem: "The kittens were sleepy after lunch.",
      choices: [
        { text: "were", correct: true },
        { text: "sleepy" },
        { text: "kittens" },
        { text: "after" }
      ],
      clue: "There is no action in this sentence. Find the verb that connects the kittens to a word that describes them.",
      why: "The answer is were. It links the kittens to sleepy, a word that describes them. Sleepy is an adjective, not a verb." },
    { id: "SK-GUM4-7-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each sentence have a helping verb or a linking verb?",
      cols: ["Helping verb", "Linking verb"],
      rows: [
        { text: "We can see the river from here.", answer: 0 },
        { text: "The pie is warm.", answer: 1 },
        { text: "Ana should wear her boots.", answer: 0 },
        { text: "My uncle was a firefighter.", answer: 1 },
        { text: "The puppy seems hungry.", answer: 1 }
      ],
      clue: "Look at the word after the verb. Is it another verb, or a word that names or describes the subject?",
      why: "Can and should are helping verbs. They help the main verbs see and wear. Is, was and seems are linking verbs. They link the pie to warm, my uncle to a firefighter, and the puppy to hungry." },
    { id: "SK-GUM4-7-P4", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the helping verb that correctly completes the sentence.",
      text: "Tomorrow, Leo {0} visit his cousins in Augusta.",
      slots: [ { options: ["will", "is", "has", "was"], answer: 0 } ],
      clue: "The word tomorrow tells when this happens. Which helping verb tells about something that has not happened yet?",
      why: "The answer is will. Will helps the main verb visit tell about tomorrow. Is visit, has visit and was visit are not correct." },
    { id: "SK-GUM4-7-P5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences have a linking verb?",
      choices: [
        { text: "The peaches are ripe.", correct: true },
        { text: "Ms. Hall is our music teacher.", correct: true },
        { text: "Ben has cleaned his room." },
        { text: "We could hear the thunder." },
        { text: "Mia will draw a map." }
      ],
      clue: "A linking verb has no action. Look for a sentence where the verb connects the subject to a word that names or describes it.",
      why: "The answers are \"The peaches are ripe.\" and \"Ms. Hall is our music teacher.\" Are links peaches to ripe, and is links Ms. Hall to music teacher. Has, could and will are helping verbs." }
  ],
  test: [
    { id: "SK-GUM4-7-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "What is the helping verb in this sentence?",
      stem: "The team had practiced every day.",
      choices: [
        { text: "had", correct: true },
        { text: "practiced" },
        { text: "team" },
        { text: "every" }
      ],
      clue: "Find the main verb, the action. Then look at the word right before it.",
      why: "The answer is had. Practiced is the main verb, the action. Had comes before it and helps it." },
    { id: "SK-GUM4-7-T2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "What is the linking verb in this sentence?",
      stem: "My grandmother is a nurse.",
      choices: [
        { text: "is", correct: true },
        { text: "nurse" },
        { text: "grandmother" },
        { text: "My" }
      ],
      clue: "There is no action in this sentence. Find the verb that connects the subject to a word that names it.",
      why: "The answer is is. It links my grandmother to nurse, a word that names her." },
    { id: "SK-GUM4-7-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the helping verb that correctly completes the sentence.",
      text: "Dad said we {0} plant the garden this weekend.",
      slots: [ { options: ["can", "are", "is", "was"], answer: 0 } ],
      clue: "Try each word before plant and listen. Which one helps plant make sense?",
      why: "The answer is can. Can helps the main verb plant. Are plant, is plant and was plant are not correct." },
    { id: "SK-GUM4-7-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each sentence have a helping verb or a linking verb?",
      cols: ["Helping verb", "Linking verb"],
      rows: [
        { text: "Kofi has painted a bird.", answer: 0 },
        { text: "The sky was gray.", answer: 1 },
        { text: "I am ready for school.", answer: 1 },
        { text: "Lily could reach the top shelf.", answer: 0 }
      ],
      clue: "Look at the word after the verb. Is it another verb, or a word that names or describes the subject?",
      why: "Has and could are helping verbs. They help the main verbs painted and reach. Was and am are linking verbs. They link the sky to gray and I to ready." },
    { id: "SK-GUM4-7-T5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences have a helping verb?",
      choices: [
        { text: "Nora will read the poem aloud.", correct: true },
        { text: "We have cleaned the whole garage.", correct: true },
        { text: "The garage is dusty." },
        { text: "Our dog seems happy." },
        { text: "The bread was fresh." }
      ],
      clue: "A helping verb comes right before another verb. Look for two verbs side by side.",
      why: "The answers are \"Nora will read the poem aloud.\" and \"We have cleaned the whole garage.\" Will helps read, and have helps cleaned. Is, seems and was are linking verbs." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t",
  title: "Sound-alike words: to, too, two and more",
  teach: {
    big: "Some words sound the same but have different spellings and meanings, so choose the one whose meaning fits the sentence.",
    points: [
      "To shows where something goes or comes before an action word: go to school, time to eat. Too means also or more than enough. Two is the number 2.",
      "There tells where. Their means it belongs to them. They're is short for they are.",
      "Your means it belongs to you, and you're is short for you are. Its means it belongs to it, and it's is short for it is (or it has)."
    ],
    words: [
      { term: "contraction", means: "two words joined into one with an apostrophe, like they're for they are" }
    ],
    example: {
      label: "Example",
      lines: ["They're sure their bikes are over there."],
      note: "They're means they are. Their means the bikes belong to them. There tells where the bikes are."
    },
    tip: "If the word has an apostrophe, say the two words it stands for. If the sentence still makes sense, keep the apostrophe."
  },
  learn: [
    {
      show: ["I want to come ___."],
      ask: "Which word fits: to, too or two?",
      steps: [
        "Think about what the word should mean here: also.",
        "Remember the meanings. To shows where or comes before an action word. Two is a number.",
        "The word that means also is spelled with two o's."
      ],
      answer: "Too: I want to come too."
    },
    {
      show: ["___ a great artist!"],
      ask: "Which word fits: your or you're?",
      steps: [
        "Try saying you are in the blank: You are a great artist!",
        "It makes sense, so use the contraction with an apostrophe.",
        "Your means something belongs to you, which does not fit here."
      ],
      answer: "You're: You're a great artist!"
    }
  ],
  parent: "Write a short note with one sound-alike word used the wrong way, like \"I have to dogs.\" Ask your child to find the mistake and fix it.",
  passages: [],
  practice: [
    { id: "SK-GUM4-8-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "We walked {0} the library after school.",
      slots: [ { options: ["to", "too", "two"], answer: 0 } ],
      clue: "Does the word tell where you went, mean also, or name a number?",
      why: "The answer is to. To shows where we walked: to the library. Too means also, and two is a number." },
    { id: "SK-GUM4-8-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The kids hung {0} coats on the hooks.",
      slots: [ { options: ["their", "there", "they're"], answer: 0 } ],
      clue: "Ask who the coats belong to. Then choose the word that shows something belongs to someone.",
      why: "The answer is their. The coats belong to the kids, and their means belongs to them. There tells where, and they're means they are." },
    { id: "SK-GUM4-8-P3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The bird flapped {0} wings and flew away.",
      slots: [ { options: ["its", "it's", "its'"], answer: 0 } ],
      clue: "Try saying it is in the blank. Does the sentence still make sense?",
      why: "The answer is its. The wings belong to the bird, and its means belongs to it. It's means it is, and \"flapped it is wings\" does not make sense. Its' is never correct." },
    { id: "SK-GUM4-8-P4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "They're ready to go home now.", correct: true },
        { text: "Their ready to go home now." },
        { text: "There ready to go home now." },
        { text: "They're ready too go home now." }
      ],
      clue: "Check each sound-alike word. Try saying they are, and check the little word before go.",
      why: "The answer is \"They're ready to go home now.\" They're means they are, and to comes before the action word go. Their and there do not mean they are, and too means also." },
    { id: "SK-GUM4-8-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which word belongs in each sentence?",
      cols: ["your", "you're"],
      rows: [
        { text: "___ shoe is untied.", answer: 0 },
        { text: "___ a fast runner.", answer: 1 },
        { text: "Is this ___ lunch box?", answer: 0 },
        { text: "I think ___ right.", answer: 1 }
      ],
      clue: "Try saying you are in each blank. If it makes sense, use the word with the apostrophe.",
      why: "Your shoe and your lunch box belong to you, so use your. You are a fast runner and I think you are right make sense, so use you're." }
  ],
  test: [
    { id: "SK-GUM4-8-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Mom bought {0} pumpkins for the porch.",
      slots: [ { options: ["two", "to", "too"], answer: 0 } ],
      clue: "Does the word tell where, mean also, or name a number?",
      why: "The answer is two. It tells how many pumpkins Mom bought." },
    { id: "SK-GUM4-8-T2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Please put the books over {0} on the shelf.",
      slots: [ { options: ["there", "their", "they're"], answer: 0 } ],
      clue: "Does the word tell where, show that something belongs to someone, or mean they are?",
      why: "The answer is there. There tells where to put the books." },
    { id: "SK-GUM4-8-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "{0} too cold to swim today.",
      slots: [ { options: ["It's", "Its", "Its'"], answer: 0 } ],
      clue: "Try saying it is in the blank. Does the sentence make sense?",
      why: "The answer is It's. It's means it is: It is too cold to swim today. Its means belongs to it, and its' is never correct." },
    { id: "SK-GUM4-8-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences are correct?",
      choices: [
        { text: "The dog wagged its tail.", correct: true },
        { text: "Your backpack is on the bus.", correct: true },
        { text: "You're sister is at the door." },
        { text: "The cat licked it's paw." },
        { text: "I ate to cookies after dinner." }
      ],
      clue: "Check each sound-alike word. Try saying the long form of any word with an apostrophe.",
      why: "The answers are \"The dog wagged its tail.\" and \"Your backpack is on the bus.\" The others should say your sister (not you are sister), its paw (not it is paw) and two cookies (the number)." },
    { id: "SK-GUM4-8-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Which sentence has a mistake?",
      options: [
        "This box is too heavy to lift.",
        "Their dog likes to swim.",
        "I think your a great singer.",
        "It's time for bed."
      ],
      answer: [2], pick: 1,
      clue: "Check each sound-alike word. Try saying the long form of each one that could be a contraction.",
      why: "The answer is \"I think your a great singer.\" It should say you're, which means you are: I think you are a great singer. The other sentences are correct." }
  ]
});

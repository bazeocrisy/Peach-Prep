/* Lessons: 3-5.L.GC.1 Grammar, usage and mechanics (GUM chart, grade 3 Reinforce rows, part 1). Schema: docs/SPEC.md §8. */

/* ---------- GUM1-1: nouns and verbs make complete thoughts ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in",
  title: "Complete sentences: a who and a did what",
  teach: {
    big: "A complete sentence has a part that tells who or what, and a verb, so it makes a whole thought.",
    points: [
      "Every sentence has a naming part that tells who or what the sentence is about. It can be a noun, like Maria or the dog, or a word like I, we, she or they.",
      "Every sentence has a verb. Most verbs tell an action, like splashed or runs. Some verbs, like is and was, tell what someone or something is like.",
      "If a group of words has nothing that tells who or what, or has no verb, the thought is not complete. Add the missing part."
    ],
    words: [
      { term: "noun", means: "a word that names a person, place, animal or thing" },
      { term: "verb", means: "a word that tells an action, or tells what someone or something is like" },
      { term: "complete sentence", means: "a group of words that tells a whole thought" }
    ],
    example: {
      label: "Example",
      lines: ["Not complete: Splashed in the puddle.", "Complete: Maria splashed in the puddle."],
      note: "The first group of words has an action (splashed) but does not say who splashed. Adding the noun Maria makes a whole thought."
    },
    tip: "On the test, you may be asked which group of words is a complete sentence. Check each one for a who or what and a verb."
  },
  learn: [
    {
      show: ["The red kite."],
      ask: "Is this a complete sentence? If not, how can you fix it?",
      steps: [
        "Look for the who or what. The red kite names a thing, so there is a naming part.",
        "Look for the verb. Ask: what did the kite do? No word tells that.",
        "Add a verb that tells what the kite did."
      ],
      answer: "It is not complete because it has no verb. A fix is: The red kite flew over the beach."
    },
    {
      show: ["Chased the ball into the yard."],
      ask: "Is this a complete sentence? If not, how can you fix it?",
      steps: [
        "Look for the action first. Chased is a verb.",
        "Ask: who or what chased the ball? The words do not say.",
        "Add a noun at the start to tell who did the action."
      ],
      answer: "It is not complete because it does not tell who chased the ball. A fix is: The puppy chased the ball into the yard."
    }
  ],
  parent: "This skill is about speaking in complete thoughts, so practice it out loud. When your child answers with a few words, like \"the park,\" ask them to say it again as a whole sentence, such as \"We went to the park.\"",
  passages: [],
  practice: [
    { id: "SK-GUM1-1-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which group of words is a complete sentence?",
      choices: [
        { text: "The kids splashed in the creek.", correct: true },
        { text: "The muddy boots by the door." },
        { text: "Jumped over the big puddle." },
        { text: "After lunch on a rainy Saturday." }
      ],
      clue: "Check each group of words for two things: a who or what, and a verb.",
      why: "The answer is \"The kids splashed in the creek.\" It tells who (the kids) and what they did (splashed). The muddy boots and After lunch have no verb, and Jumped over the big puddle does not tell who jumped." },
    { id: "SK-GUM1-1-P2", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is each group of words complete? If not, what does it need? Sort each one.",
      cols: ["Complete sentence", "Needs a who or what", "Needs a verb"],
      rows: [
        { text: "Hopped onto a lily pad.", answer: 1 },
        { text: "The tiny green frog.", answer: 2 },
        { text: "The frog croaked at the moon.", answer: 0 },
        { text: "Swam to the bottom of the pond.", answer: 1 }
      ],
      clue: "For each one, ask: Who or what is it about? What did they do? If one question has no answer, that part is missing.",
      why: "The frog croaked at the moon is complete. Hopped onto a lily pad and Swam to the bottom of the pond need a who or what, because they do not say who hopped or swam. The tiny green frog needs a verb, because it does not say what the frog did." },
    { id: "SK-GUM1-1-P3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that makes this a complete sentence.",
      text: "Every morning, my grandmother {0} in the garden.",
      slots: [ { options: ["works", "tomatoes", "early"], answer: 0 } ],
      clue: "The sentence already tells who. What is missing is what she does.",
      why: "The answer is works. My grandmother tells who, and works tells what she does. Tomatoes is a noun and early tells when, so neither one is a verb." },
    { id: "SK-GUM1-1-P4", type: "hottext", points: 2, dok: 2, passages: [],
      prompt: "Select the TWO groups of words that are complete sentences.",
      options: [
        "Our class planted bean seeds.",
        "Watered them every single day.",
        "The seeds sprouted in a week.",
        "Tall green stems with leaves.",
        "Next to the sunny window."
      ],
      answer: [0, 2], pick: 2,
      clue: "A complete sentence has both a naming part and a verb. Cover each one with your finger and ask: who did what?",
      why: "The answers are \"Our class planted bean seeds.\" and \"The seeds sprouted in a week.\" Each tells who or what and what they did. Watered them every single day does not say who watered. The other two have no verb." },
    { id: "SK-GUM1-1-P5", type: "mc", points: 1, dok: 2, passages: [],
      stem: "The big yellow school bus.",
      prompt: "What does this group of words need to be a complete sentence?",
      choices: [
        { text: "a verb that tells what the bus did", correct: true },
        { text: "a noun that tells who or what" },
        { text: "a capital letter at the start" },
        { text: "a question mark at the end" }
      ],
      clue: "Find the who or what. Then look for a word that tells what it did.",
      why: "The answer is a verb that tells what the bus did. The bus is the who or what, but no verb tells what it did. A fix is: The big yellow school bus stopped at the corner." }
  ],
  test: [
    { id: "SK-GUM1-1-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which group of words is a complete sentence?",
      choices: [
        { text: "Grandpa fixed the broken swing.", correct: true },
        { text: "The broken swing in the backyard." },
        { text: "Fixed it with a hammer and nails." },
        { text: "On a sunny afternoon last week." }
      ],
      clue: "Look for a who or what and a verb in the same group.",
      why: "The answer is \"Grandpa fixed the broken swing.\" Grandpa tells who, and fixed tells what he did. The other groups are each missing a who or an action." },
    { id: "SK-GUM1-1-T2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the words that make this a complete sentence.",
      text: "{0} barked at the mail truck.",
      slots: [ { options: ["Our puppy", "Loudly", "At the door"], answer: 0 } ],
      clue: "The sentence has an action. Ask: who or what barked?",
      why: "The answer is Our puppy. Barked tells the action, and Our puppy tells who barked. Loudly and At the door do not name who did it." },
    { id: "SK-GUM1-1-T3", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO groups of words that are complete sentences.",
      choices: [
        { text: "The baby giggled.", correct: true },
        { text: "Lena kicked the ball.", correct: true },
        { text: "A soft wool blanket." },
        { text: "Rolled down the hill." },
        { text: "Under the kitchen table." }
      ],
      pick: 2,
      clue: "A sentence can be short and still be complete. Look for a who or what plus a verb.",
      why: "The answers are \"The baby giggled.\" and \"Lena kicked the ball.\" Each tells who and what they did. A soft wool blanket and Under the kitchen table have no verb. Rolled down the hill does not say who rolled." },
    { id: "SK-GUM1-1-T4", type: "mc", points: 1, dok: 2, passages: [],
      stem: "Ran all the way to the bus stop.",
      prompt: "Which change makes this a complete sentence?",
      choices: [
        { text: "Add Tomas to the beginning.", correct: true },
        { text: "Add quickly to the end." },
        { text: "Change the period to a question mark." },
        { text: "Take out the word all." }
      ],
      clue: "Find the verb. Then ask what the group of words does not tell you.",
      why: "The answer is \"Add Tomas to the beginning.\" Ran is the action, but the words do not say who ran. Tomas ran all the way to the bus stop is a whole thought." },
    { id: "SK-GUM1-1-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the group of words that is NOT a complete sentence.",
      options: [
        "Mom baked bread.",
        "The bread cooled on the rack.",
        "Warm butter on top.",
        "We ate two slices."
      ],
      answer: [2], pick: 1,
      clue: "Check each one for a verb. One of them names things but never tells what anyone did.",
      why: "The answer is \"Warm butter on top.\" It names butter but has no verb, so it is not a whole thought. The others each tell who or what and have a verb that tells what they did." }
  ]
});

/* ---------- GUM1-2: singular and plural nouns ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:form-and-use-singular-and-plural-nouns-in-speech",
  title: "One or more than one: singular and plural nouns",
  teach: {
    big: "Use the one form of a noun for one thing and the more-than-one form for two or more things.",
    points: [
      "A singular noun names one thing, like one cat.",
      "A plural noun names more than one thing. Most nouns add -s to make the plural, like two cats.",
      "Clue words help you choose. A, an, one, each and every go with one thing. Two, three, many, several and a few go with more than one.",
      "When you talk, listen for the -s sound at the end of the word when you mean more than one."
    ],
    words: [
      { term: "singular", means: "one" },
      { term: "plural", means: "more than one" }
    ],
    example: {
      label: "Example",
      lines: ["I have one pencil.", "Jada has three pencils."],
      note: "The clue word one goes with pencil. The clue word three goes with pencils, which ends in -s."
    },
    tip: "On the test, look for a number word or a clue word like many or a near the blank. It tells you whether you need one or more than one."
  },
  learn: [
    {
      show: ["Grandma gave me two (coin / coins) for the jar."],
      ask: "Which word belongs in the sentence?",
      steps: [
        "Find the clue word right before the blank. It is two.",
        "Two means more than one, so you need the plural noun.",
        "Most plurals end in -s. Coins ends in -s."
      ],
      answer: "Grandma gave me two coins for the jar."
    },
    {
      show: ["I saw a (rabbit / rabbits) under the bush."],
      ask: "Which word belongs in the sentence?",
      steps: [
        "Find the clue word right before the blank. It is a.",
        "A means just one, so you need the singular noun.",
        "Say it out loud: I saw a rabbit. It sounds right."
      ],
      answer: "I saw a rabbit under the bush."
    }
  ],
  parent: "This skill is about speaking, so practice it out loud. Count things around the house together (\"one spoon, four spoons\"), and when your child says \"three cup,\" repeat it back the right way (\"three cups\") and have them say it too.",
  passages: [],
  practice: [
    { id: "SK-GUM1-2-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Dad bought three {0} at the farmers market.",
      slots: [ { options: ["melon", "melons", "melon's"], answer: 1 } ],
      clue: "Find the number word before the blank. Does it mean one or more than one?",
      why: "The answer is melons. Three means more than one, so the noun needs -s. Melon's with an apostrophe shows that something belongs to a melon, so it does not fit." },
    { id: "SK-GUM1-2-P2", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "I packed one {0} and two {1} in my lunch box.",
      slots: [
        { options: ["apple", "apples", "apple's"], answer: 0 },
        { options: ["cookie", "cookies", "cookie's"], answer: 1 }
      ],
      clue: "Each blank has its own number word right before it. Match each noun to its number word.",
      why: "The answers are apple and cookies. One goes with the singular noun apple. Two means more than one, so cookie adds -s to make cookies." },
    { id: "SK-GUM1-2-P3", type: "match", points: 2, dok: 1, passages: [],
      prompt: "Does each group of words name one thing or more than one? Sort them.",
      cols: ["Singular (one)", "Plural (more than one)"],
      rows: [
        { text: "a pencil", answer: 0 },
        { text: "several crayons", answer: 1 },
        { text: "one notebook", answer: 0 },
        { text: "many markers", answer: 1 },
        { text: "an eraser", answer: 0 }
      ],
      clue: "Look at the clue word and at the end of the noun. Does the noun end in -s?",
      why: "A pencil, one notebook and an eraser are singular. A, one and an mean one. Several crayons and many markers are plural. They have clue words for more than one, and the nouns end in -s." },
    { id: "SK-GUM1-2-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Ava found two shells on the beach.",
        "We saw many bird at the lake.",
        "A frog sat on a log.",
        "My uncle has three dogs."
      ],
      answer: [1], pick: 1,
      clue: "Find each clue word that means more than one. Check that the noun after it is plural.",
      why: "The error is in \"We saw many bird at the lake.\" Many means more than one, so it should say many birds." },
    { id: "SK-GUM1-2-P5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses nouns correctly?",
      choices: [
        { text: "Each student got a new folder.", correct: true },
        { text: "Five student lined up at the door." },
        { text: "Mom planted a flowers by the porch." },
        { text: "We counted four duck in the pond." }
      ],
      clue: "Match each noun to its clue word. Words like each and a go with one. Number words above one go with more than one.",
      why: "The answer is \"Each student got a new folder.\" Each and a go with one, and student and folder are singular. The others should say five students, a flower and four ducks." }
  ],
  test: [
    { id: "SK-GUM1-2-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Our team scored two {0} in the last game.",
      slots: [ { options: ["goal", "goals", "goal's"], answer: 1 } ],
      clue: "Look at the number word before the blank.",
      why: "The answer is goals. Two means more than one, so goal adds -s." },
    { id: "SK-GUM1-2-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "Several kites flew over the park.", correct: true },
        { text: "One kites got stuck in a tree." },
        { text: "Many kite had long tails." },
        { text: "A kites landed on the grass." }
      ],
      clue: "Check the clue word in each sentence. Does it mean one or more than one? Then look at the end of the noun.",
      why: "The answer is \"Several kites flew over the park.\" Several means more than one, and kites is plural. One and a need kite, and many needs kites." },
    { id: "SK-GUM1-2-T3", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO sentences that are correct.",
      choices: [
        { text: "Jamal read three books this week.", correct: true },
        { text: "The farmer has ten cows.", correct: true },
        { text: "I saw a squirrels in the yard." },
        { text: "There are two bed in my room." },
        { text: "Every girls got a sticker." }
      ],
      pick: 2,
      clue: "Find the clue word that comes before each noun. Make sure one goes with one and more goes with more.",
      why: "The answers are \"Jamal read three books this week.\" and \"The farmer has ten cows.\" The others should say a squirrel, two beds and every girl." },
    { id: "SK-GUM1-2-T4", type: "match", points: 2, dok: 1, passages: [],
      prompt: "Does each group of words name one thing or more than one? Sort them.",
      cols: ["Singular (one)", "Plural (more than one)"],
      rows: [
        { text: "a turtle", answer: 0 },
        { text: "four kittens", answer: 1 },
        { text: "one window", answer: 0 },
        { text: "many trees", answer: 1 }
      ],
      clue: "Read the clue word first. Then check whether the noun ends in -s.",
      why: "A turtle and one window are singular. Four kittens and many trees are plural, and those nouns end in -s." },
    { id: "SK-GUM1-2-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "My sister has two cats.",
        "We planted six tree in the yard.",
        "A bee landed on the flower.",
        "The farmer sold ten eggs."
      ],
      answer: [1], pick: 1,
      clue: "Look for a number word. Is the noun after it the right form?",
      why: "The error is in \"We planted six tree in the yard.\" Six means more than one, so it should say six trees." }
  ]
});

/* ---------- GUM1-3: question words ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:use-interrogatives-to-ask-questions-in-speech",
  title: "Question words: who, what, where, when, why and how",
  teach: {
    big: "Pick the question word that matches what you want to find out.",
    points: [
      "Who, what, where, when, why and how are question words. A question often starts with one of them.",
      "Each question word asks for a different kind of answer. Who asks about a person. Where asks about a place. When asks about a time.",
      "Why asks for a reason. How asks about the way something happens, and how many or how much asks about an amount. What asks about a thing or an action.",
      "A written question ends with a question mark."
    ],
    words: [
      { term: "who", means: "asks about a person" },
      { term: "what", means: "asks about a thing or an action" },
      { term: "where", means: "asks about a place" },
      { term: "when", means: "asks about a time" },
      { term: "why", means: "asks for a reason" },
      { term: "how", means: "asks about the way something happens" }
    ],
    example: {
      label: "Example",
      lines: ["Where did you find the shell?", "I found it at the beach."],
      note: "The answer names a place, the beach. So the question starts with where."
    },
    tip: "On the test, you may choose the question word that fits an answer. Ask yourself: is the answer a person, a thing, a place, a time, a reason or a way?"
  },
  learn: [
    {
      show: ["Answer: The game starts at six o'clock."],
      ask: "Which question word would you use to ask for this answer?",
      steps: [
        "Find the new information in the answer. It is at six o'clock.",
        "Decide what kind of information it is. Six o'clock is a time.",
        "The question word for a time is when."
      ],
      answer: "When does the game start?"
    },
    {
      show: ["Answer: We stayed home because it snowed."],
      ask: "Which question word would you use to ask for this answer?",
      steps: [
        "Find the new information. It is because it snowed.",
        "The word because gives a reason.",
        "The question word for a reason is why."
      ],
      answer: "Why did you stay home?"
    }
  ],
  parent: "This skill is about asking questions out loud. Play a quick game: you say an answer (\"At the grocery store\") and your child asks a question that fits it (\"Where did you buy the milk?\"). Try to use all six question words.",
  passages: [],
  practice: [
    { id: "SK-GUM1-3-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      stem: "Answer: My party is on Saturday.",
      prompt: "Read the answer. Then choose the question word that asks for it.",
      text: "{0} is your birthday party?",
      slots: [ { options: ["When", "Where", "Who"], answer: 0 } ],
      clue: "What kind of information does the answer give: a person, a place or a time?",
      why: "The answer is When. Saturday is a time, and when asks about a time." },
    { id: "SK-GUM1-3-P2", type: "match", points: 2, dok: 1, passages: [],
      prompt: "What does each question word ask about? Match each word.",
      cols: ["a person", "a place", "a time", "a reason"],
      rows: [
        { text: "Who", answer: 0 },
        { text: "Where", answer: 1 },
        { text: "When", answer: 2 },
        { text: "Why", answer: 3 }
      ],
      clue: "Make up a quick question with each word and think about what the answer would be.",
      why: "Who asks about a person. Where asks about a place. When asks about a time. Why asks for a reason." },
    { id: "SK-GUM1-3-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Kenji wants to know the reason the park closed today. Which question should he ask?",
      choices: [
        { text: "Why did the park close today?", correct: true },
        { text: "When will the park open again?" },
        { text: "Who closed the park today?" },
        { text: "Where is the closest park?" }
      ],
      clue: "Kenji wants a reason. Which question word asks for a reason?",
      why: "The answer is \"Why did the park close today?\" Why asks for a reason. When asks about a time, who asks about a person and where asks about a place." },
    { id: "SK-GUM1-3-P4", type: "hottext", points: 2, dok: 2, passages: [],
      prompt: "Select the TWO questions that ask about a place.",
      options: [
        "Where did you put the leash?",
        "When does the movie start?",
        "Where do penguins live?",
        "Who baked these muffins?",
        "Why is the sky so dark?"
      ],
      answer: [0, 2], pick: 2,
      clue: "Think about the answer to each question. Would the answer name a place?",
      why: "The answers are \"Where did you put the leash?\" and \"Where do penguins live?\" Both start with where, and both answers would name a place." },
    { id: "SK-GUM1-3-P5", type: "dropdown", points: 1, dok: 2, passages: [],
      stem: "Answer: We fixed the flat tire with a patch kit.",
      prompt: "Read the answer. Then choose the question word that asks for it.",
      text: "{0} did you fix the flat tire?",
      slots: [ { options: ["How", "Who", "When"], answer: 0 } ],
      clue: "The answer tells the way the job got done. Which question word asks about a way?",
      why: "The answer is How. With a patch kit tells the way they fixed the tire, and how asks about the way something happens." }
  ],
  test: [
    { id: "SK-GUM1-3-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      stem: "Answer: Ms. Ortiz drives the school bus.",
      prompt: "Read the answer. Then choose the question word that asks for it.",
      text: "{0} drives the school bus?",
      slots: [ { options: ["Who", "Where", "Why"], answer: 0 } ],
      clue: "The answer names someone. Which question word asks about a person?",
      why: "The answer is Who. Ms. Ortiz is a person, and who asks about a person." },
    { id: "SK-GUM1-3-T2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which question asks about a time?",
      choices: [
        { text: "When does the library open?", correct: true },
        { text: "Where is the library?" },
        { text: "Who works at the library?" },
        { text: "Why is the library quiet?" }
      ],
      clue: "Look at the question word at the start of each one.",
      why: "The answer is \"When does the library open?\" When asks about a time. The answer might be nine o'clock." },
    { id: "SK-GUM1-3-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each question to the answer that fits it.",
      cols: ["At the lake", "After school", "Because it rained", "My cousin Ben"],
      rows: [
        { text: "Where did you go fishing?", answer: 0 },
        { text: "When can we play?", answer: 1 },
        { text: "Why did they cancel the game?", answer: 2 },
        { text: "Who came to dinner?", answer: 3 }
      ],
      clue: "Look at the question word. Does it ask about a place, a time, a reason or a person?",
      why: "Where asks about a place: at the lake. When asks about a time: after school. Why asks for a reason: because it rained. Who asks about a person: my cousin Ben." },
    { id: "SK-GUM1-3-T4", type: "dropdown", points: 1, dok: 2, passages: [],
      stem: "Answer: We will go to the zoo.",
      prompt: "Read the answer. Then choose the question word that asks for it.",
      text: "{0} will we go on the field trip?",
      slots: [ { options: ["Where", "When", "How"], answer: 0 } ],
      clue: "What kind of information is the zoo?",
      why: "The answer is Where. The zoo is a place, and where asks about a place." },
    { id: "SK-GUM1-3-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Mia wants to know the kind of food her friend's dog eats. Which question should she ask?",
      choices: [
        { text: "What does your dog eat?", correct: true },
        { text: "When does your dog eat?" },
        { text: "Where does your dog eat?" },
        { text: "Why does your dog eat so fast?" }
      ],
      clue: "Mia wants to know about a thing, the food. Which question word asks about a thing?",
      why: "The answer is \"What does your dog eat?\" What asks about a thing. When would ask about a time, where about a place and why about a reason, not the kind of food." }
  ]
});

/* ---------- GUM1-4: capitalize the first word and I ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:capitalize-the-first-word-of-a-sentence-and-the-",
  title: "Capital letters: the first word and I",
  teach: {
    big: "Every sentence starts with a capital letter, and the word I is always a capital letter.",
    points: [
      "The first word of every sentence begins with a capital letter, even a short word like the or on.",
      "When you write about yourself, the word I is always a capital letter, no matter where it is in the sentence.",
      "I stays a capital in short forms like I'm and I'll, too."
    ],
    example: {
      label: "Example",
      lines: ["Not correct: yesterday my dad and i made pancakes.", "Correct: Yesterday my dad and I made pancakes."],
      note: "Yesterday is the first word, so it needs a capital Y. The word I is in the middle of the sentence, but it still needs a capital."
    },
    tip: "On the test, a sentence may have a small letter where a capital belongs. Check the first word and every I."
  },
  learn: [
    {
      show: ["after school, Leo and i played catch."],
      ask: "Which words need capital letters?",
      steps: [
        "Look at the very first word. After starts the sentence, so it needs a capital A.",
        "Hunt for the word I by itself. Here it is a small i, so it needs a capital.",
        "Leo is a name, and it already has a capital."
      ],
      answer: "After school, Leo and I played catch."
    },
    {
      show: ["Can I have a turn on the swing?"],
      ask: "Does this sentence need any changes to its capital letters?",
      steps: [
        "Check the first word. Can starts with a capital C.",
        "Check every I. The word I is a capital.",
        "Both checks pass, so nothing needs to change."
      ],
      answer: "No change is needed. The sentence is correct."
    }
  ],
  parent: "When your child writes a note or a grocery list sentence, have them do a two-step check: circle the first letter of each sentence and every I, and make sure each one is a capital.",
  passages: [],
  practice: [
    { id: "SK-GUM1-4-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "My friend and I built a fort.", correct: true },
        { text: "my brother and I raked leaves." },
        { text: "Mom and i baked some muffins." },
        { text: "on Friday, I lost a front tooth." }
      ],
      clue: "Check two things in each sentence: the first letter, and the word I.",
      why: "The answer is \"My friend and I built a fort.\" It starts with a capital and has a capital I. The others need a capital M in my, a capital I, and a capital O in on." },
    { id: "SK-GUM1-4-P2", type: "hottext", points: 1, dok: 1, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Yesterday I fed the ducks.",
        "Can I borrow your ruler?",
        "We went to the pool, and i swam.",
        "The baby smiled at me."
      ],
      answer: [2], pick: 1,
      clue: "Look past the first word. Find every place the word I is used.",
      why: "The error is in \"We went to the pool, and i swam.\" The word I must always be a capital, even in the middle of a sentence." },
    { id: "SK-GUM1-4-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is each sentence correct, or does it need a capital letter? Sort them.",
      cols: ["Correct", "Needs a capital letter"],
      rows: [
        { text: "the bus came late today.", answer: 1 },
        { text: "Grace and I sang a song.", answer: 0 },
        { text: "Dad said i could help.", answer: 1 },
        { text: "Is it time for lunch?", answer: 0 }
      ],
      clue: "For each sentence, check the first letter and look for the word I.",
      why: "Grace and I sang a song and Is it time for lunch are correct. The bus came late today needs a capital T at the start. Dad said I could help needs a capital I." },
    { id: "SK-GUM1-4-P4", type: "mc", points: 1, dok: 1, passages: [],
      stem: "on Saturday, my cousin and I went fishing.",
      prompt: "Which word should begin with a capital letter?",
      choices: [
        { text: "on", correct: true },
        { text: "my" },
        { text: "cousin" },
        { text: "fishing" }
      ],
      clue: "Think about the two capital-letter rules. Which word breaks one of them?",
      why: "The answer is on. It is the first word of the sentence, so it should be On. My, cousin and fishing are in the middle of the sentence and are not names." },
    { id: "SK-GUM1-4-P5", type: "hottext", points: 2, dok: 2, passages: [],
      prompt: "Select the TWO sentences that are written correctly.",
      options: [
        "Tomorrow I will visit Aunt Rosa.",
        "i like to draw horses.",
        "Our garden has six sunflowers.",
        "may I have some water?",
        "the puppy chewed my sock."
      ],
      answer: [0, 2], pick: 2,
      clue: "Check the first letter of each sentence, then look for the word I.",
      why: "The answers are \"Tomorrow I will visit Aunt Rosa.\" and \"Our garden has six sunflowers.\" The others start with a small letter: i, may and the should be I, May and The." }
  ],
  test: [
    { id: "SK-GUM1-4-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "Last night I saw a shooting star.", correct: true },
        { text: "last week we went to the aquarium." },
        { text: "Then i made a wish on the star." },
        { text: "my dad and I fixed the gate." }
      ],
      clue: "Check the first word and every I in each sentence.",
      why: "The answer is \"Last night I saw a shooting star.\" The others need a capital L in last, a capital I, and a capital M in my." },
    { id: "SK-GUM1-4-T2", type: "hottext", points: 1, dok: 1, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "I'm ready for the spelling test.",
        "where are my rain boots?",
        "Kim and I walked home.",
        "Do you want to play tag?"
      ],
      answer: [1], pick: 1,
      clue: "Look at how each sentence begins.",
      why: "The error is in \"where are my rain boots?\" The first word of a sentence needs a capital, so it should be Where." },
    { id: "SK-GUM1-4-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is each sentence correct, or does it need a capital letter? Sort them.",
      cols: ["Correct", "Needs a capital letter"],
      rows: [
        { text: "the river felt cold.", answer: 1 },
        { text: "Can I come too?", answer: 0 },
        { text: "We think i should go first.", answer: 1 },
        { text: "Mr. Lee and I painted a sign.", answer: 0 },
        { text: "every morning I make my bed.", answer: 1 }
      ],
      clue: "Check the first letter of each sentence. Then find the word I.",
      why: "Can I come too and Mr. Lee and I painted a sign are correct. The river felt cold needs a capital T. We think I should go first needs a capital I. Every morning I make my bed needs a capital E." },
    { id: "SK-GUM1-4-T4", type: "mc", points: 1, dok: 1, passages: [],
      stem: "Ty and i planted carrots in the garden.",
      prompt: "Which word should begin with a capital letter?",
      choices: [
        { text: "i", correct: true },
        { text: "planted" },
        { text: "carrots" },
        { text: "garden" }
      ],
      clue: "The first word is already correct. Look for a word that means the person talking.",
      why: "The answer is i. When it means the person talking, I is always a capital: Ty and I planted carrots in the garden." },
    { id: "SK-GUM1-4-T5", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "After lunch, {0} played kickball with my friends.",
      slots: [ { options: ["I", "i", "me"], answer: 0 } ],
      clue: "The word goes before the action and tells who played. Then think about how it must be written.",
      why: "The answer is I. The word I tells who played, and I is always a capital. We do not say me played." }
  ]
});

/* ---------- GUM1-5: plurals with -s or -es ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:form-regular-plural-nouns-with-s-or-es",
  title: "Making plurals with -s or -es",
  teach: {
    big: "Most nouns add -s to mean more than one, but nouns that end in s, x, z, ch or sh add -es.",
    points: [
      "To make most nouns mean more than one, add -s: one lamp, two lamps.",
      "If a noun ends in s, x, z, ch or sh, add -es: one box, two boxes. One dish, two dishes.",
      "Say the plural out loud. When you add -es, you hear an extra beat at the end: box-es, dish-es."
    ],
    words: [
      { term: "plural", means: "a word that names more than one" }
    ],
    example: {
      label: "Example",
      lines: ["one bus, two buses", "one peach, three peaches", "one crayon, four crayons"],
      note: "Bus ends in s and peach ends in ch, so they add -es. Crayon does not, so it just adds -s."
    },
    tip: "On the test, look at the last letters of the noun before you choose -s or -es."
  },
  learn: [
    {
      show: ["Ming tied two (bow / bows / bowes) on the gift."],
      ask: "Which word is the correct plural?",
      steps: [
        "Two means more than one, so you need a plural.",
        "Look at the last letter of bow. It ends in w, which is not s, x, z, ch or sh.",
        "So bow just adds -s."
      ],
      answer: "Ming tied two bows on the gift."
    },
    {
      show: ["The kids sat on three (benchs / benches / bench) at the park."],
      ask: "Which word is the correct plural?",
      steps: [
        "Three means more than one, so you need a plural.",
        "Look at the last letters of bench. It ends in ch.",
        "Nouns that end in ch add -es. Say it: bench-es. You hear the extra beat."
      ],
      answer: "The kids sat on three benches at the park."
    }
  ],
  parent: "Make a quick sorting game with things in the kitchen: say a noun (cup, glass, dish, spoon) and have your child say and spell the plural, then tell you whether it took -s or -es. A few words break the pattern (quiz becomes quizzes, stomach becomes stomachs), so check a dictionary together if your child asks.",
  passages: [],
  practice: [
    { id: "SK-GUM1-5-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "We need two {0} to carry all the books.",
      slots: [ { options: ["boxs", "boxes", "box"], answer: 1 } ],
      clue: "Two means more than one. Look at the last letter of box.",
      why: "The answer is boxes. Box ends in x, so it adds -es to mean more than one." },
    { id: "SK-GUM1-5-P2", type: "match", points: 2, dok: 2, passages: [],
      prompt: "How does each noun change to mean more than one? Sort each word by its ending.",
      cols: ["Add -s", "Add -es"],
      rows: [
        { text: "dish", answer: 1 },
        { text: "lamp", answer: 0 },
        { text: "brush", answer: 1 },
        { text: "glass", answer: 1 },
        { text: "pencil", answer: 0 },
        { text: "peach", answer: 1 }
      ],
      clue: "Check the end of each word for s, x, z, ch or sh. Say the plural out loud and listen for an extra beat.",
      why: "Dish, brush, glass and peach end in sh, sh, s and ch, so they add -es: dishes, brushes, glasses, peaches. Lamp and pencil just add -s: lamps, pencils." },
    { id: "SK-GUM1-5-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence spells the plural noun correctly?",
      choices: [
        { text: "We picked six peaches from the tree.", correct: true },
        { text: "Mom bought new dishs for the kitchen." },
        { text: "The bus stopped at two churchs." },
        { text: "I put all my toyes in the bin." }
      ],
      clue: "Find the plural noun in each sentence. Check its last letters before the ending.",
      why: "The answer is \"We picked six peaches from the tree.\" Peach ends in ch, so it adds -es. The others should be dishes, churches and toys." },
    { id: "SK-GUM1-5-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "The foxes ran into the woods.",
        "We packed our lunchs in a bag.",
        "Two buses waited at the corner.",
        "The girls planted flowers."
      ],
      answer: [1], pick: 1,
      clue: "Look at each plural noun. Does its singular form end in s, x, z, ch or sh?",
      why: "The error is in \"We packed our lunchs in a bag.\" Lunch ends in ch, so the plural is lunches." },
    { id: "SK-GUM1-5-P5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Leo washed six {0} and four {1}.",
      slots: [
        { options: ["cup", "cups", "cupes"], answer: 1 },
        { options: ["glass", "glasss", "glasses"], answer: 2 }
      ],
      clue: "Both blanks need a word for more than one. Check the last letter of each noun to choose -s or -es.",
      why: "The answers are cups and glasses. Cup ends in p, so it just adds -s. Glass ends in s, so it adds -es." }
  ],
  test: [
    { id: "SK-GUM1-5-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "My aunt keeps four {0} on her porch.",
      slots: [ { options: ["benches", "benchs", "bench"], answer: 0 } ],
      clue: "Four means more than one. Look at the last two letters of bench.",
      why: "The answer is benches. Bench ends in ch, so it adds -es." },
    { id: "SK-GUM1-5-T2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word correctly names more than one brush?",
      choices: [
        { text: "brushes", correct: true },
        { text: "brushs" },
        { text: "brushies" },
        { text: "brushe" }
      ],
      clue: "Look at the last two letters of brush. Say the plural and listen for an extra beat.",
      why: "The answer is brushes. Brush ends in sh, so it adds -es." },
    { id: "SK-GUM1-5-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "How does each noun change to mean more than one? Sort each word by its ending.",
      cols: ["Add -s", "Add -es"],
      rows: [
        { text: "fox", answer: 1 },
        { text: "crayon", answer: 0 },
        { text: "sandwich", answer: 1 },
        { text: "kiss", answer: 1 },
        { text: "rock", answer: 0 }
      ],
      clue: "Check the end of each word for s, x, z, ch or sh.",
      why: "Fox, sandwich and kiss end in x, ch and s, so they add -es: foxes, sandwiches, kisses. Crayon and rock just add -s: crayons, rocks." },
    { id: "SK-GUM1-5-T4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "The cooks made pancakes.",
        "Our class went on two field trips.",
        "The wind knocked over the boxs.",
        "Three ducks swam by."
      ],
      answer: [2], pick: 1,
      clue: "Find each word that means more than one. Check its ending.",
      why: "The error is in \"The wind knocked over the boxs.\" Box ends in x, so the plural is boxes." },
    { id: "SK-GUM1-5-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "The bushes by the fence grew tall.", correct: true },
        { text: "I wrote two wishs on a card." },
        { text: "The lunch boxs sat on the shelf." },
        { text: "We ate the salad with forkes." }
      ],
      clue: "Find the plural noun in each sentence. Should it end in -s or -es?",
      why: "The answer is \"The bushes by the fence grew tall.\" Bush ends in sh, so it adds -es. The others should be wishes, boxes and forks." }
  ]
});

/* ---------- GUM1-6: verbs with -ing, -ed or -s ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:form-and-use-verbs-with-ing-ed-or-s",
  title: "Verb endings: -s, -ed and -ing",
  teach: {
    big: "The ending on a verb has to fit the sentence: -s, -ed or -ing.",
    points: [
      "Add -s when one person or thing does the action now or again and again: Ben kicks the ball every day.",
      "Do not add -s after I, you, we, they, or a noun that means more than one: I kick. The boys kick.",
      "Add -ed when the action already happened: Yesterday, Ben kicked the ball.",
      "Add -ing to make words like kicking. You often use them after words like love, start, stop and keep: Ben loves kicking the ball.",
      "The verbs in this lesson keep their spelling and just add the ending."
    ],
    words: [
      { term: "verb", means: "an action word" },
      { term: "ending", means: "letters added to the end of a word" }
    ],
    example: {
      label: "Example",
      lines: ["Every day, Rosa walks to school.", "Yesterday, Rosa walked to school.", "Rosa loves walking to school."],
      note: "Walks has -s because Rosa is one person and it happens every day. Walked has -ed because yesterday already happened. Walking comes after loves."
    },
    tip: "On the test, look for clue words like yesterday, last week or every day. They help you choose the right ending."
  },
  learn: [
    {
      show: ["Last night, the wind (howls / howled / howling) outside my window."],
      ask: "Which verb form fits the sentence?",
      steps: [
        "Look for a time clue. Last night already happened.",
        "An action that already happened gets -ed.",
        "Read it back: Last night, the wind howled outside my window."
      ],
      answer: "Howled is correct."
    },
    {
      show: ["My little brother started (laughs / laughed / laughing) at the clown."],
      ask: "Which verb form fits the blank?",
      steps: [
        "The sentence already has an action word with an ending: started.",
        "After words like start, keep and love, we can use the -ing form.",
        "Read it back: My little brother started laughing at the clown."
      ],
      answer: "Laughing is correct."
    }
  ],
  parent: "At dinner, take turns telling one thing you did today (\"I walked the dog\") and one thing you do every day (\"Dad cooks dinner\"). Listen together for the -ed and -s endings.",
  passages: [],
  practice: [
    { id: "SK-GUM1-6-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Yesterday, Grandpa {0} us how to fish.",
      slots: [ { options: ["showed", "shows", "showing"], answer: 0 } ],
      clue: "Look at the first word of the sentence. Did this happen already?",
      why: "The answer is showed. Yesterday already happened, so the verb gets -ed." },
    { id: "SK-GUM1-6-P2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Every morning, our rooster {0} before the sun comes up.",
      slots: [ { options: ["crowing", "crows", "crowed"], answer: 1 } ],
      clue: "Look at the first words. Does this happen once, or every morning? Then think about how many roosters there are.",
      why: "The answer is crows. It happens every morning, and the rooster is one animal, so the verb gets -s. Crowed tells about the past, so it does not match comes. Crowing cannot be the only verb in this sentence." },
    { id: "SK-GUM1-6-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which ending does the verb in ( ) need? Sort each sentence.",
      cols: ["Add -s", "Add -ed", "Add -ing"],
      rows: [
        { text: "Last night, it ___ (rain) for hours.", answer: 1 },
        { text: "My brother ___ (help) Dad every Saturday, and I help too.", answer: 0 },
        { text: "The kids started ___ (laugh) at the joke.", answer: 2 },
        { text: "Two days ago, we ___ (plant) beans.", answer: 1 }
      ],
      clue: "Look for a time clue in each sentence. Also check for a word like started right before the blank.",
      why: "Last night and two days ago already happened, so rained and planted get -ed. My brother is one person and it happens every Saturday, so helps gets -s. After started, use laughing with -ing." },
    { id: "SK-GUM1-6-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Sara painted a picture of her cat.",
        "The baby loves splashing in the tub.",
        "Yesterday, Mom cook pancakes for us.",
        "My dog barks at the mail truck."
      ],
      answer: [2], pick: 1,
      clue: "Look for a time clue that tells the action already happened. Check that verb's ending.",
      why: "The error is in \"Yesterday, Mom cook pancakes for us.\" Yesterday already happened, so it should say cooked." },
    { id: "SK-GUM1-6-P5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the verb correctly?",
      choices: [
        { text: "Last week, Kiara jumped into the leaf pile.", correct: true },
        { text: "Last week, Kiara jumps into the leaf pile." },
        { text: "Last week, Kiara jumping into the leaf pile." },
        { text: "Last week, Kiara jump into the leaf pile." }
      ],
      clue: "All four sentences start with the same time clue. What does that clue tell you about when it happened?",
      why: "The answer is \"Last week, Kiara jumped into the leaf pile.\" Last week already happened, so the verb gets -ed." }
  ],
  test: [
    { id: "SK-GUM1-6-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Two days ago, our class {0} the playground.",
      slots: [ { options: ["cleaned", "cleans", "cleaning"], answer: 0 } ],
      clue: "Find the time clue. Did this already happen?",
      why: "The answer is cleaned. Two days ago already happened, so the verb gets -ed." },
    { id: "SK-GUM1-6-T2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "My puppy loves {0} with his rope toy.",
      slots: [ { options: ["played", "plays", "playing"], answer: 2 } ],
      clue: "Look at the word right before the blank. What ending comes after a word like loves?",
      why: "The answer is playing. After loves, we use the -ing form: My puppy loves playing with his rope toy." },
    { id: "SK-GUM1-6-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which ending does the verb in ( ) need? Sort each sentence.",
      cols: ["Add -s", "Add -ed", "Add -ing"],
      rows: [
        { text: "Yesterday, we ___ (walk) to the library.", answer: 1 },
        { text: "Tim kept ___ (kick) the ball against the wall.", answer: 2 },
        { text: "Each night, my dad ___ (read) to me before I fall asleep.", answer: 0 },
        { text: "Last fall, the leaves ___ (turn) red.", answer: 1 }
      ],
      clue: "Find the time clue in each sentence, and look at the word right before each blank.",
      why: "Yesterday and last fall already happened, so walked and turned get -ed. After kept, use kicking with -ing. My dad is one person and it happens each night, so reads gets -s." },
    { id: "SK-GUM1-6-T4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "We heard the frogs croaking.",
        "Aunt Mae plants roses each spring.",
        "Last night, the dog bark at a raccoon.",
        "Jada started laughing at the clown."
      ],
      answer: [2], pick: 1,
      clue: "Look for a time clue that tells the action already happened.",
      why: "The error is in \"Last night, the dog bark at a raccoon.\" Last night already happened, so it should say barked." },
    { id: "SK-GUM1-6-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the verb correctly?",
      choices: [
        { text: "My sister looks for shells when we go to the beach.", correct: true },
        { text: "My sister look for shells when we go to the beach." },
        { text: "My sister looking for shells when we go to the beach." },
        { text: "My sister lookes for shells when we go to the beach." }
      ],
      clue: "My sister is one person, and the sentence tells about something that happens now. Check the spelling of the ending too.",
      why: "The answer is \"My sister looks for shells when we go to the beach.\" One person does the action now, so look adds just -s." }
  ]
});

/* ---------- GUM1-7: action verbs ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:use-action-verbs",
  title: "Action verbs",
  teach: {
    big: "An action verb tells what someone or something does.",
    points: [
      "An action verb names something a person, animal or thing does, like run, swim or bake.",
      "Some actions happen in your mind, like think, remember and wonder. Those are action verbs too.",
      "To find the action verb, ask: what does the who or what in the sentence do?",
      "A strong action verb paints a picture. Raced tells more than went."
    ],
    words: [
      { term: "action verb", means: "a word that tells what someone or something does" }
    ],
    example: {
      label: "Example",
      lines: ["The cat stretched and yawned in the sun."],
      note: "Ask: what did the cat do? It stretched and yawned. Those two words are the action verbs."
    },
    tip: "On the test, you may be asked to find the action verb in a sentence. Find who or what the sentence is about, then ask what it does."
  },
  learn: [
    {
      show: ["The firefighter climbed the tall ladder."],
      ask: "What is the action verb?",
      steps: [
        "Find who the sentence is about: the firefighter.",
        "Ask: what did the firefighter do? Climbed.",
        "Tall describes the ladder, and ladder is a thing, so neither one is an action."
      ],
      answer: "The action verb is climbed."
    },
    {
      show: ["Ben thought about the riddle for a long time."],
      ask: "What is the action verb?",
      steps: [
        "Find who the sentence is about: Ben.",
        "Ask: what did Ben do? He thought.",
        "You cannot see thinking, but it is still something Ben does, so it is an action verb."
      ],
      answer: "The action verb is thought."
    }
  ],
  parent: "Play action charades: one person acts out a verb (hop, whisper, stir) and the other guesses it. Then have your child say a sentence with that verb.",
  passages: [],
  practice: [
    { id: "SK-GUM1-7-P1", type: "mc", points: 1, dok: 1, passages: [],
      stem: "The children giggled at the silly puppet.",
      prompt: "Which word is the action verb?",
      choices: [
        { text: "giggled", correct: true },
        { text: "children" },
        { text: "silly" },
        { text: "puppet" }
      ],
      clue: "Find who the sentence is about. Then ask: what did they do?",
      why: "The answer is giggled. It tells what the children did. Children and puppet are nouns, and silly describes the puppet." },
    { id: "SK-GUM1-7-P2", type: "hottext", points: 2, dok: 2, passages: [],
      stem: "Owen grabbed his glove and raced onto the field.",
      prompt: "Select the TWO action verbs in the sentence.",
      options: ["Owen", "grabbed", "glove", "raced", "field"],
      answer: [1, 3], pick: 2,
      clue: "Owen does two things in this sentence. Find both of them.",
      why: "The answers are grabbed and raced. They tell the two things Owen did. Owen, glove and field are nouns." },
    { id: "SK-GUM1-7-P3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the action verb that completes the sentence.",
      text: "The hungry rabbit {0} the carrot in two bites.",
      slots: [ { options: ["ate", "orange", "slowly"], answer: 0 } ],
      clue: "The sentence tells who. The missing word should tell what the rabbit did.",
      why: "The answer is ate. It tells what the rabbit did. Orange is a color word that describes things, and slowly tells how, so neither one is an action." },
    { id: "SK-GUM1-7-P4", type: "match", points: 2, dok: 2, passages: [],
      stem: "Grandma hummed a song and stirred the soup.",
      prompt: "Sort the words from the sentence.",
      cols: ["Action verb", "Not an action verb"],
      rows: [
        { text: "Grandma", answer: 1 },
        { text: "hummed", answer: 0 },
        { text: "song", answer: 1 },
        { text: "stirred", answer: 0 },
        { text: "soup", answer: 1 }
      ],
      clue: "Ask: what did Grandma do? The words that answer that question are the action verbs.",
      why: "Hummed and stirred are action verbs because they tell what Grandma did. Grandma, song and soup are nouns that name a person and things." },
    { id: "SK-GUM1-7-P5", type: "mc", points: 1, dok: 2, passages: [],
      stem: "Nina remembered her lunch at the last minute.",
      prompt: "Which word is the action verb?",
      choices: [
        { text: "remembered", correct: true },
        { text: "lunch" },
        { text: "last" },
        { text: "minute" }
      ],
      clue: "Some actions happen in your mind. What did Nina do?",
      why: "The answer is remembered. Remembering is something Nina does in her mind, so it is an action verb. Lunch and minute are nouns, and last describes the minute." }
  ],
  test: [
    { id: "SK-GUM1-7-T1", type: "mc", points: 1, dok: 1, passages: [],
      stem: "A squirrel buried an acorn under the oak tree.",
      prompt: "Which word is the action verb?",
      choices: [
        { text: "buried", correct: true },
        { text: "squirrel" },
        { text: "acorn" },
        { text: "under" }
      ],
      clue: "Ask: what did the squirrel do?",
      why: "The answer is buried. It tells what the squirrel did. Squirrel and acorn are nouns, and under tells where." },
    { id: "SK-GUM1-7-T2", type: "hottext", points: 2, dok: 2, passages: [],
      stem: "The batter swung hard and hit the ball over the fence.",
      prompt: "Select the TWO action verbs in the sentence.",
      options: ["batter", "swung", "hard", "hit", "fence"],
      answer: [1, 3], pick: 2,
      clue: "The batter does two things. Find both of them.",
      why: "The answers are swung and hit. They tell what the batter did. Batter and fence are nouns, and hard tells how the batter swung." },
    { id: "SK-GUM1-7-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the action verb that completes the sentence.",
      text: "When the storm came, the kitten {0} under the bed.",
      slots: [ { options: ["hid", "fluffy", "quiet"], answer: 0 } ],
      clue: "The missing word should tell what the kitten did.",
      why: "The answer is hid. It tells what the kitten did. Fluffy and quiet are describing words, not actions." },
    { id: "SK-GUM1-7-T4", type: "mc", points: 1, dok: 2, passages: [],
      stem: "Lily guessed the answer to the riddle.",
      prompt: "Which word is the action verb?",
      choices: [
        { text: "guessed", correct: true },
        { text: "answer" },
        { text: "riddle" },
        { text: "Lily" }
      ],
      clue: "Some actions happen in your mind. Ask: what did Lily do?",
      why: "The answer is guessed. Guessing is something Lily does with her mind, so it is an action verb. Lily, answer and riddle are nouns." },
    { id: "SK-GUM1-7-T5", type: "match", points: 2, dok: 2, passages: [],
      stem: "Dad sliced the bread and spread jam on it.",
      prompt: "Sort the words from the sentence.",
      cols: ["Action verb", "Not an action verb"],
      rows: [
        { text: "Dad", answer: 1 },
        { text: "sliced", answer: 0 },
        { text: "bread", answer: 1 },
        { text: "spread", answer: 0 },
        { text: "jam", answer: 1 }
      ],
      clue: "Ask: what did Dad do? Those words are the action verbs.",
      why: "Sliced and spread are action verbs because they tell what Dad did. Dad, bread and jam are nouns." }
  ]
});

/* ---------- GUM1-8: adjectives and adverbs ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:use-adjectives-and-adverbs",
  title: "Adjectives and adverbs: describing words",
  teach: {
    big: "An adjective describes a noun, and an adverb describes a verb.",
    points: [
      "An adjective tells more about a noun. It can tell what kind or how many: a fluffy kitten, three kittens.",
      "An adverb tells more about a verb. It can tell how, when or where an action happens.",
      "Many adverbs that tell how end in -ly, like quickly and softly.",
      "To tell them apart, find the word being described. If it is a noun, use an adjective. If it is a verb, use an adverb."
    ],
    words: [
      { term: "adjective", means: "a word that describes a noun" },
      { term: "adverb", means: "a word that tells how, when or where an action happens" }
    ],
    example: {
      label: "Example",
      lines: ["The quiet owl flew silently through the dark woods."],
      note: "Quiet and dark are adjectives. They describe the nouns owl and woods. Silently is an adverb. It tells how the owl flew."
    },
    tip: "On the test, you may choose between a word like happy and a word like happily. Ask whether the word describes a thing or an action."
  },
  learn: [
    {
      show: ["The (proud / proudly) runner waved to the crowd."],
      ask: "Which word belongs in the sentence?",
      steps: [
        "Find the word being described. The blank comes right before runner.",
        "Runner is a noun, a person.",
        "A word that describes a noun is an adjective."
      ],
      answer: "The proud runner waved to the crowd."
    },
    {
      show: ["The runner waved (proud / proudly) to the crowd."],
      ask: "Which word belongs in the sentence?",
      steps: [
        "Find the word being described. The blank tells about how the runner waved.",
        "Waved is a verb, an action.",
        "A word that tells how an action happens is an adverb, and this one ends in -ly."
      ],
      answer: "The runner waved proudly to the crowd."
    }
  ],
  parent: "On a walk, take turns describing things you see with an adjective (\"a tall tree\") and actions with an adverb (\"the dog ran quickly\"). Ask your child which word describes a thing and which describes an action.",
  passages: [],
  practice: [
    { id: "SK-GUM1-8-P1", type: "mc", points: 1, dok: 1, passages: [],
      stem: "The fluffy kitten napped in the sun.",
      prompt: "Which word is an adjective?",
      choices: [
        { text: "fluffy", correct: true },
        { text: "kitten" },
        { text: "napped" },
        { text: "sun" }
      ],
      clue: "An adjective describes a noun. Find the nouns, then look for a word that tells more about one of them.",
      why: "The answer is fluffy. It describes the noun kitten and tells what kind. Kitten and sun are nouns, and napped is a verb." },
    { id: "SK-GUM1-8-P2", type: "mc", points: 1, dok: 1, passages: [],
      stem: "The turtle crawled slowly across the road.",
      prompt: "Which word is an adverb?",
      choices: [
        { text: "slowly", correct: true },
        { text: "turtle" },
        { text: "crawled" },
        { text: "road" }
      ],
      clue: "An adverb tells how an action happens. Find the action, then ask: how?",
      why: "The answer is slowly. It tells how the turtle crawled. Crawled is the verb, and turtle and road are nouns." },
    { id: "SK-GUM1-8-P3", type: "match", points: 2, dok: 2, passages: [],
      stem: "Yesterday, the tiny bird sang sweetly in the tall tree.",
      prompt: "Is each word from the sentence an adjective or an adverb? Sort them.",
      cols: ["Adjective", "Adverb"],
      rows: [
        { text: "Yesterday", answer: 1 },
        { text: "tiny", answer: 0 },
        { text: "sweetly", answer: 1 },
        { text: "tall", answer: 0 }
      ],
      clue: "For each word, ask: does it describe a noun (bird, tree) or does it tell how or when the bird sang?",
      why: "Tiny and tall are adjectives. They describe the nouns bird and tree. Sweetly and yesterday are adverbs. Sweetly tells how the bird sang, and yesterday tells when." },
    { id: "SK-GUM1-8-P4", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "The {0} dog barked {1} at the squirrel.",
      slots: [
        { options: ["noisy", "noisily", "noise"], answer: 0 },
        { options: ["angry", "angrily", "anger"], answer: 1 }
      ],
      clue: "The first blank describes the dog, a noun. The second blank tells how the dog barked, an action.",
      why: "The answers are noisy and angrily. Noisy is an adjective that describes the dog. Angrily is an adverb that tells how the dog barked." },
    { id: "SK-GUM1-8-P5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that uses an adverb to tell HOW.",
      options: [
        "Maya carefully carried the eggs.",
        "Maya carried the brown eggs.",
        "Maya carried the eggs yesterday.",
        "Maya carried six eggs."
      ],
      answer: [0], pick: 1,
      clue: "Look for a word that describes the action carried. Does it tell how, or when?",
      why: "The answer is \"Maya carefully carried the eggs.\" Carefully tells how Maya carried them. Yesterday is an adverb too, but it tells when. Brown and six are adjectives that describe the eggs." }
  ],
  test: [
    { id: "SK-GUM1-8-T1", type: "mc", points: 1, dok: 1, passages: [],
      stem: "Jamal wore a bright jacket to the game.",
      prompt: "Which word is an adjective?",
      choices: [
        { text: "bright", correct: true },
        { text: "jacket" },
        { text: "wore" },
        { text: "game" }
      ],
      clue: "Find the nouns in the sentence. Which word tells more about one of them?",
      why: "The answer is bright. It describes the noun jacket. Jacket and game are nouns, and wore is a verb." },
    { id: "SK-GUM1-8-T2", type: "mc", points: 1, dok: 1, passages: [],
      stem: "The children whispered quietly in the library.",
      prompt: "Which word is an adverb?",
      choices: [
        { text: "quietly", correct: true },
        { text: "children" },
        { text: "whispered" },
        { text: "library" }
      ],
      clue: "Find the action. Then find the word that tells how it happened.",
      why: "The answer is quietly. It tells how the children whispered. Whispered is the verb, and children and library are nouns." },
    { id: "SK-GUM1-8-T3", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The baby smiled {0} at her grandfather.",
      slots: [ { options: ["happy", "happily", "happiness"], answer: 1 } ],
      clue: "The blank tells how the baby smiled. Smiled is an action.",
      why: "The answer is happily. It is an adverb that tells how the baby smiled. Happy describes a noun, and happiness is a noun." },
    { id: "SK-GUM1-8-T4", type: "match", points: 2, dok: 2, passages: [],
      stem: "Outside, the brave firefighter climbed quickly up the long ladder.",
      prompt: "Is each word from the sentence an adjective or an adverb? Sort them.",
      cols: ["Adjective", "Adverb"],
      rows: [
        { text: "Outside", answer: 1 },
        { text: "brave", answer: 0 },
        { text: "quickly", answer: 1 },
        { text: "long", answer: 0 }
      ],
      clue: "Does the word describe a noun (firefighter, ladder), or does it tell how or where the firefighter climbed?",
      why: "Brave and long are adjectives. They describe the nouns firefighter and ladder. Quickly and outside are adverbs. Quickly tells how the firefighter climbed, and outside tells where." },
    { id: "SK-GUM1-8-T5", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "We drank {0} lemonade on the porch.",
      slots: [ { options: ["cold", "coldly", "colds"], answer: 0 } ],
      clue: "The blank describes the lemonade. Is lemonade a thing or an action?",
      why: "The answer is cold. Lemonade is a noun, so it needs an adjective. Cold tells what kind of lemonade." }
  ]
});

/* ---------- GUM1-9: common and proper nouns ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:use-common-and-proper-nouns",
  title: "Common and proper nouns",
  teach: {
    big: "A common noun names any person, place or thing, and a proper noun names a special one.",
    points: [
      "A common noun is a general word, like girl, city or dog. It starts with a small letter unless it begins a sentence.",
      "A proper noun is the name of one special person, place or thing, like Maya, Atlanta or Rover.",
      "A proper noun always starts with a capital letter, even in the middle of a sentence.",
      "Days of the week, months and holidays are proper nouns too, like Monday, May and Thanksgiving."
    ],
    words: [
      { term: "common noun", means: "a general name for a person, place or thing" },
      { term: "proper noun", means: "the special name of one person, place or thing" }
    ],
    example: {
      label: "Example",
      lines: ["Common noun: city. Proper noun: Savannah.", "Common noun: boy. Proper noun: Marcus."],
      note: "City could be any city. Savannah is the name of one special city, so it starts with a capital letter."
    },
    tip: "On the test, you may sort nouns or find a proper noun that needs a capital letter. Ask: is this the special name of one person, place or thing?"
  },
  learn: [
    {
      show: ["On Tuesday, my teacher read a book about Georgia."],
      ask: "Which nouns are common and which are proper?",
      steps: [
        "Find the nouns: Tuesday, teacher, book, Georgia.",
        "Ask about each one: is it a special name? Tuesday is the name of a day, and Georgia is the name of a state.",
        "Teacher and book are general words. They could be any teacher or any book."
      ],
      answer: "Tuesday and Georgia are proper nouns. Teacher and book are common nouns."
    },
    {
      show: ["We swam in the lake."],
      ask: "How could you change the common noun lake into a proper noun?",
      steps: [
        "Lake is a common noun. It could be any lake.",
        "Swap in the name of one special lake, like Lake Lanier in Georgia.",
        "Give each important word in the name a capital letter."
      ],
      answer: "We swam in Lake Lanier."
    }
  ],
  parent: "Play \"name it\": you say a common noun (a store, a street, a friend, a holiday) and your child answers with a proper noun for it, then tells you which letters need capitals.",
  passages: [],
  practice: [
    { id: "SK-GUM1-9-P1", type: "mc", points: 1, dok: 1, passages: [],
      stem: "My cousin Andre lives in Savannah.",
      prompt: "Which word is a common noun?",
      choices: [
        { text: "cousin", correct: true },
        { text: "Andre" },
        { text: "Savannah" },
        { text: "lives" }
      ],
      clue: "A common noun is a general word, not a special name. Which noun could be about many different people?",
      why: "The answer is cousin. It is a general word for a family member. Andre and Savannah are proper nouns, and lives is a verb." },
    { id: "SK-GUM1-9-P2", type: "match", points: 2, dok: 1, passages: [],
      prompt: "Is each noun common or proper? Sort them.",
      cols: ["Common noun", "Proper noun"],
      rows: [
        { text: "river", answer: 0 },
        { text: "Chattahoochee River", answer: 1 },
        { text: "school", answer: 0 },
        { text: "Monday", answer: 1 },
        { text: "Ms. Patel", answer: 1 },
        { text: "teacher", answer: 0 }
      ],
      clue: "Ask: is it the special name of one person, place, day or thing? Special names start with capital letters.",
      why: "River, school and teacher are common nouns. They are general words. Chattahoochee River, Monday and Ms. Patel are proper nouns. They name one special river, day and person." },
    { id: "SK-GUM1-9-P3", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "The sentence needs the name of one special mountain. Choose the proper noun that fits.",
      text: "Our class took a trip to {0} last spring.",
      slots: [ { options: ["Stone Mountain", "Savannah", "a mountain"], answer: 0 } ],
      clue: "You need a special name, not a general word. Then check that the name is for a mountain.",
      why: "The answer is Stone Mountain. It is a proper noun that names one special mountain in Georgia. Savannah is a proper noun too, but it names a city. A mountain is a common noun." },
    { id: "SK-GUM1-9-P4", type: "hottext", points: 2, dok: 2, passages: [],
      stem: "On Saturday, Keisha took her dog to the park.",
      prompt: "Select the TWO proper nouns in the sentence.",
      options: ["Saturday", "Keisha", "dog", "park"],
      answer: [0, 1], pick: 2,
      clue: "Look for the special name of a day and the special name of a person.",
      why: "The answers are Saturday and Keisha. Saturday names one special day, and Keisha names one special person. Dog and park are common nouns." },
    { id: "SK-GUM1-9-P5", type: "mc", points: 1, dok: 2, passages: [],
      stem: "Our dog Max chased a cat down Elm Street.",
      prompt: "Which is a proper noun that names a place?",
      choices: [
        { text: "Elm Street", correct: true },
        { text: "Max" },
        { text: "dog" },
        { text: "cat" }
      ],
      clue: "First find the special names in the sentence. Then ask which one names a place.",
      why: "The answer is Elm Street. It is the name of one special street, so it is a proper noun that names a place. Max is a proper noun too, but it names a pet. Dog and cat are common nouns." }
  ],
  test: [
    { id: "SK-GUM1-9-T1", type: "mc", points: 1, dok: 1, passages: [],
      stem: "Mr. Okafor read a story to our class.",
      prompt: "Which is a proper noun?",
      choices: [
        { text: "Mr. Okafor", correct: true },
        { text: "story" },
        { text: "class" },
        { text: "read" }
      ],
      clue: "Look for the special name of one person.",
      why: "The answer is Mr. Okafor. It names one special person, so it is a proper noun. Story and class are common nouns, and read is a verb." },
    { id: "SK-GUM1-9-T2", type: "match", points: 2, dok: 1, passages: [],
      prompt: "Is each noun common or proper? Sort them.",
      cols: ["Common noun", "Proper noun"],
      rows: [
        { text: "holiday", answer: 0 },
        { text: "Thanksgiving", answer: 1 },
        { text: "ocean", answer: 0 },
        { text: "Atlantic Ocean", answer: 1 },
        { text: "girl", answer: 0 }
      ],
      clue: "Ask: is it a general word, or the special name of one thing?",
      why: "Holiday, ocean and girl are common nouns. Thanksgiving and Atlantic Ocean are proper nouns, because they name one special holiday and one special ocean." },
    { id: "SK-GUM1-9-T3", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "We visited my aunt in a big {0}.",
      slots: [ { options: ["city", "City", "Augusta"], answer: 0 } ],
      clue: "Look at the words a big before the blank. Do they go with a general word or with a special name?",
      why: "The answer is city. A big goes with a general word, so the sentence needs a common noun. A common noun in the middle of a sentence starts with a small letter, so City is wrong. Augusta is a proper noun, and we do not say a big Augusta." },
    { id: "SK-GUM1-9-T4", type: "hottext", points: 2, dok: 2, passages: [],
      stem: "In July, Pedro swam in the lake with his brother.",
      prompt: "Select the TWO common nouns in the sentence.",
      options: ["July", "Pedro", "lake", "brother"],
      answer: [2, 3], pick: 2,
      clue: "Common nouns are general words. Which nouns could be about any place or any person?",
      why: "The answers are lake and brother. They are general words. July and Pedro are proper nouns because they name one special month and one special person." },
    { id: "SK-GUM1-9-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence writes the proper noun correctly?",
      choices: [
        { text: "Our family drove to Texas in April.", correct: true },
        { text: "My friend Ava lives in florida." },
        { text: "We have art class on tuesday." },
        { text: "We named our new puppy max." }
      ],
      clue: "Find each proper noun. Check that every one starts with a capital letter.",
      why: "The answer is \"Our family drove to Texas in April.\" Texas and April are proper nouns, and both start with capitals. The others should say Florida, Tuesday and Max." }
  ]
});

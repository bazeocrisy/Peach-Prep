/* Lessons: 3-5.L.GC.1 Grammar, usage and mechanics, grade 3 Master rows. Schema: docs/SPEC.md §8. */

/* 1. Apostrophes in contractions and singular possessive nouns */
PP.addLesson({
  code: "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos",
  title: "Apostrophes: short words and words that own",
  teach: {
    big: "An apostrophe ( ' ) has two jobs: it takes the place of missing letters in a short word, and it shows that something belongs to one person or thing.",
    points: [
      "A contraction squeezes two words into one. The apostrophe goes where letters were left out: do not becomes don't, and I am becomes I'm.",
      "A few contractions change more than that. Will not becomes won't.",
      "To show that something belongs to one person or thing, add 's: the dog's bowl, Rosa's kite.",
      "A word that only means more than one gets no apostrophe: three dogs, two kites.",
      "It's is short for it is or it has. Its with no apostrophe means \"belonging to it\": The bird flapped its wings."
    ],
    words: [
      { term: "apostrophe", means: "a little mark ( ' ) that sits up high between letters" },
      { term: "contraction", means: "two words joined into one short word, like can't" },
      { term: "possessive", means: "a word that shows who or what owns something, like Kofi's" }
    ],
    example: {
      label: "Example",
      lines: ["Kofi's puppy can't sit still.", "The puppy's tail wags all day long."],
      note: "Kofi's and puppy's show belonging: the puppy belongs to Kofi, and the tail belongs to the puppy. Can't is short for cannot. The apostrophe stands where the letters n and o were left out."
    },
    tip: "The test often shows four sentences and asks which one is correct. Check every apostrophe. Is it standing in for missing letters, or showing belonging? If a word just means more than one, it should not have one."
  },
  learn: [
    {
      show: ["We are going to the zoo.", "We do not want to be late."],
      ask: "How can you write we are and do not as contractions?",
      steps: [
        "Find the letters you can leave out. In we are, you can drop the a.",
        "Put the apostrophe where the a was: we're.",
        "In do not, drop the o in not, and put the apostrophe there: don't."
      ],
      answer: "We're going to the zoo. We don't want to be late."
    },
    {
      show: ["The (girls / girl's) bike has two flat (tires / tire's)."],
      ask: "Which word in each pair is correct?",
      steps: [
        "Ask about each word: Does it show belonging, or does it just mean more than one?",
        "The bike belongs to one girl, so it needs 's: girl's.",
        "Tires just means more than one tire. Nothing belongs to the tires, so there is no apostrophe."
      ],
      answer: "The girl's bike has two flat tires."
    }
  ],
  parent: "Hunt for apostrophes on cereal boxes, signs and mail together. For each one, ask your child: Is it a short word with letters left out, or does it show that something belongs to someone?",
  passages: [],
  practice: [
    { id: "SK-GUM3-1-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Grandpa says {0} going to rain later today.",
      slots: [{ options: ["its", "it's", "its'"], answer: 1 }],
      clue: "Try saying \"it is\" in the blank. If it is makes sense, you need the short word with an apostrophe.",
      why: "The answer is it's. The sentence means \"it is going to rain,\" so you need the contraction it's. The apostrophe takes the place of the i in is." },
    { id: "SK-GUM3-1-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "Our teacher's desk is next to the window.", correct: true },
        { text: "The two puppy's chased a ball in the yard." },
        { text: "I dont like to swim in cold water at all." },
        { text: "We rode in Lenas wagon down to the park." }
      ],
      clue: "Check each word with an apostrophe or one that might need one. Does it stand for missing letters, show belonging, or just mean more than one?",
      why: "The answer is \"Our teacher's desk is next to the window.\" The desk belongs to the teacher, so teacher's is right. The others should say puppies (more than one, nothing owned), don't (do not) and Lena's (the wagon belongs to Lena)." },
    { id: "SK-GUM3-1-P3", type: "match", points: 2, dok: 1, passages: [],
      prompt: "What job does the apostrophe do in each one? Match each to the right column.",
      cols: ["Short for two words", "Shows belonging"],
      rows: [
        { text: "wasn't", answer: 0 },
        { text: "Andre's lunch box", answer: 1 },
        { text: "the bird's nest", answer: 1 },
        { text: "they'll", answer: 0 }
      ],
      clue: "Try to stretch each word out into two words. If you can, it is a contraction. If something belongs to someone, it shows belonging.",
      why: "Wasn't is short for was not, and they'll is short for they will. Andre's lunch box and the bird's nest show belonging: the lunch box belongs to Andre, and the nest belongs to the bird." },
    { id: "SK-GUM3-1-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Hana's garden has tall sunflowers.",
        "We can't find the key to the back door.",
        "The frog's jumped into the pond.",
        "I'm happy that you're here."
      ],
      answer: [2], pick: 1,
      clue: "Look at each word with an apostrophe. Does each one stand for missing letters or show belonging? Or does a word just mean more than one?",
      why: "The error is in \"The frog's jumped into the pond.\" Frogs just means more than one frog. Nothing belongs to them, so it should be frogs with no apostrophe." },
    { id: "SK-GUM3-1-P5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO sentences that use apostrophes correctly.",
      choices: [
        { text: "The baby's blanket is soft and blue.", correct: true },
        { text: "We'll eat lunch under the big oak tree.", correct: true },
        { text: "Theo cant find his other red shoe." },
        { text: "The library has new book's on the shelf." },
        { text: "The tree dropped all of it's leaves." }
      ],
      clue: "For each sentence, find every word that needs an apostrophe. Then check that the apostrophe is there and that no plain plural has one.",
      why: "The answers are \"The baby's blanket is soft and blue.\" and \"We'll eat lunch under the big oak tree.\" The blanket belongs to the baby, and we'll is short for we will. The others should say can't (cannot), books (just more than one) and its (belonging to the tree, not \"it is\")." }
  ],
  test: [
    { id: "SK-GUM3-1-T1", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "We {0} go outside until we feed {1} cat.",
      slots: [
        { options: ["cant", "can't", "ca'nt"], answer: 1 },
        { options: ["Amaras", "Amaras'", "Amara's"], answer: 2 }
      ],
      clue: "The first blank is a short way to say two words. The second blank tells who the cat belongs to.",
      why: "The answers are can't and Amara's. Can't is short for cannot, and the apostrophe stands where the n and o were left out. Amara's shows that the cat belongs to Amara, one person, so the 's goes right after her name." },
    { id: "SK-GUM3-1-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "The horse's mane was long and shiny.", correct: true },
        { text: "My cousin's are coming to visit Sunday." },
        { text: "Ivy didnt bring her jacket to school." },
        { text: "The kitten chased it's own fuzzy tail." }
      ],
      clue: "Check every apostrophe and every word that might need one. Ask what job each apostrophe is doing.",
      why: "The answer is \"The horse's mane was long and shiny.\" The mane belongs to the horse. The others should say cousins (just more than one), didn't (did not) and its (belonging to the kitten)." },
    { id: "SK-GUM3-1-T3", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word is the contraction for will not?",
      choices: [
        { text: "won't", correct: true },
        { text: "willn't" },
        { text: "wo'nt" },
        { text: "wont" }
      ],
      clue: "This is one of the contractions that changes more than just dropping letters. The apostrophe still goes where the o in not was.",
      why: "The answer is won't. Will not changes to won't. The apostrophe takes the place of the o in not, so it sits between n and t." },
    { id: "SK-GUM3-1-T4", type: "hottext", points: 2, dok: 2, passages: [],
      prompt: "Select the TWO sentences that have an error.",
      options: [
        "The pond's water was cold and clear.",
        "Jamal said hes ready for the game.",
        "Two bird's sat on the fence.",
        "Don't forget your lunch today.",
        "Grandma's quilt keeps me warm."
      ],
      answer: [1, 2], pick: 2,
      clue: "Look for a short word that is missing its apostrophe, and for a word that only means more than one but has an apostrophe anyway.",
      why: "The errors are in \"Jamal said hes ready for the game.\" and \"Two bird's sat on the fence.\" Hes should be he's, short for he is. Birds just means more than one bird, so it needs no apostrophe." },
    { id: "SK-GUM3-1-T5", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which is the correct way to write \"the toy that belongs to the puppy\"?",
      choices: [
        { text: "the puppy's toy", correct: true },
        { text: "the puppys toy" },
        { text: "the puppies toy" },
        { text: "the puppys' toy" }
      ],
      clue: "There is one puppy, and the toy belongs to it. What do you add to one owner?",
      why: "The answer is the puppy's toy. To show that something belongs to one puppy, add 's to puppy. Puppies means more than one puppy." }
  ]
});

/* 2. Irregular plural nouns */
PP.addLesson({
  code: "3.L.GC.1:M:form-and-use-irregular-plural-nouns",
  title: "Special plurals: children, mice and feet",
  teach: {
    big: "Most nouns add -s to mean more than one, but some special nouns change their spelling or stay the same.",
    points: [
      "A plural noun names more than one: one cat, two cats.",
      "Some nouns change the letters inside: man becomes men, foot becomes feet, tooth becomes teeth, mouse becomes mice, and goose becomes geese.",
      "Some nouns change in other ways: child becomes children, person becomes people, and ox becomes oxen.",
      "A few nouns stay the same: one sheep, ten sheep; one deer, two deer.",
      "Never add -s to a special plural. Childrens, feets and mices are not words."
    ],
    words: [
      { term: "plural noun", means: "a noun that names more than one" },
      { term: "irregular plural", means: "a plural that does not just add -s or -es" }
    ],
    example: {
      label: "Example",
      lines: ["The child lost a tooth.", "The children lost three teeth."],
      note: "Child changes to children, and tooth changes to teeth. Neither one adds -s."
    },
    tip: "The test may ask you to pick the right word for a blank. Read each choice in the sentence. If it sounds like \"two foots,\" it is a trap."
  },
  learn: [
    {
      show: ["Five (mouses / mice) ran under the barn door."],
      ask: "Which word is correct?",
      steps: [
        "Find the number word. Five means more than one, so you need a plural.",
        "Ask: Is mouse a special noun? Yes. One mouse, two mice.",
        "Mouses is not a word, so cross it out."
      ],
      answer: "Five mice ran under the barn door."
    },
    {
      show: ["We saw two ____ at the edge of the woods. (deer)"],
      ask: "What is the plural of deer?",
      steps: [
        "Two means more than one, so you need a plural.",
        "Deer is one of the nouns that stays the same: one deer, two deer.",
        "Read it back to check: We saw two deer. It sounds right."
      ],
      answer: "We saw two deer at the edge of the woods."
    }
  ],
  parent: "Play \"one, two\" in the car: you say \"one mouse,\" and your child says \"two mice.\" Mix in easy ones (cat, cats) and special ones (foot, child, goose, sheep).",
  passages: [],
  practice: [
    { id: "SK-GUM3-2-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The dentist said all of my {0} look healthy.",
      slots: [{ options: ["tooths", "teeth", "teeths", "tooth"], answer: 1 }],
      clue: "All of my means more than one. Tooth is a special noun that changes the letters inside.",
      why: "The answer is teeth. One tooth, many teeth. Tooth changes its spelling instead of adding -s." },
    { id: "SK-GUM3-2-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "Two women sold peaches at the market.", correct: true },
        { text: "The farmer has ten sheeps in the field." },
        { text: "Our class has twenty childs this year." },
        { text: "My feets were cold after the long walk." }
      ],
      clue: "Look at each word that means more than one. Is it a special noun that changes or stays the same?",
      why: "The answer is \"Two women sold peaches at the market.\" One woman, two women. The others should say sheep (it stays the same), children and feet." },
    { id: "SK-GUM3-2-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "How does each noun make its plural? Match each noun to the right column.",
      cols: ["Changes its spelling", "Stays the same"],
      rows: [
        { text: "goose", answer: 0 },
        { text: "sheep", answer: 1 },
        { text: "foot", answer: 0 },
        { text: "deer", answer: 1 }
      ],
      clue: "Say \"one ___, two ___\" for each noun. Listen: does the word change, or does it sound the same both times?",
      why: "Goose becomes geese, and foot becomes feet, so they change their spelling. Sheep and deer stay the same: one sheep, two sheep; one deer, two deer." },
    { id: "SK-GUM3-2-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Three geese swam across the lake.",
        "Two mans fixed our broken fence.",
        "The oxen pulled the heavy cart.",
        "Both men wore orange hats."
      ],
      answer: [1], pick: 1,
      clue: "Find the word in each sentence that means more than one. Is it spelled the special way?",
      why: "The error is in \"Two mans fixed our broken fence.\" Man is a special noun. One man, two men." },
    { id: "SK-GUM3-2-P5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "The {0} on the field trip laughed when two {1} ran across the barn floor.",
      slots: [
        { options: ["childs", "children", "childrens"], answer: 1 },
        { options: ["mouses", "mice", "mices"], answer: 1 }
      ],
      clue: "Both blanks need a word for more than one. Neither word adds -s.",
      why: "The answers are children and mice. One child, many children. One mouse, two mice. Childrens and mices add an extra -s that does not belong." }
  ],
  test: [
    { id: "SK-GUM3-2-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word correctly completes the sentence?",
      stem: "Both ____ in the band played the drums.",
      choices: [
        { text: "women", correct: true },
        { text: "womans" },
        { text: "womens" },
        { text: "woman" }
      ],
      clue: "Both means two. Think of how man changes when there is more than one.",
      why: "The answer is women. One woman, two women, just like one man, two men." },
    { id: "SK-GUM3-2-T2", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO sentences that use plural nouns correctly.",
      choices: [
        { text: "We counted four deer near the creek.", correct: true },
        { text: "Grandpa has big feet and wears big boots.", correct: true },
        { text: "The two mouses ate all of the cheese." },
        { text: "Mr. Patel read a story to the childrens." },
        { text: "Six gooses walked slowly across the road." }
      ],
      clue: "Find every word that means more than one. Remember which nouns change their spelling and which stay the same.",
      why: "The answers are \"We counted four deer near the creek.\" and \"Grandpa has big feet and wears big boots.\" Deer stays the same, and foot becomes feet. The others should say mice, children and geese." },
    { id: "SK-GUM3-2-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Please wipe your {0} on the mat before you come inside.",
      slots: [{ options: ["foots", "feet", "feets"], answer: 1 }],
      clue: "You have two of these. The word changes the letters inside instead of adding -s.",
      why: "The answer is feet. One foot, two feet." },
    { id: "SK-GUM3-2-T4", type: "match", points: 2, dok: 1, passages: [],
      prompt: "Match each noun to its plural.",
      cols: ["men", "teeth", "children", "mice"],
      rows: [
        { text: "man", answer: 0 },
        { text: "tooth", answer: 1 },
        { text: "child", answer: 2 },
        { text: "mouse", answer: 3 }
      ],
      clue: "Say \"one ___, two ___\" for each word. Listen for the plural that sounds right.",
      why: "One man, two men. One tooth, two teeth. One child, two children. One mouse, two mice." },
    { id: "SK-GUM3-2-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "The two deer ran into the woods.",
        "My baby sister has four new tooths.",
        "The men carried the long ladder.",
        "Three sheep slept under a tree."
      ],
      answer: [1], pick: 1,
      clue: "Check each plural noun. Does it change, stay the same, or add -s the way it should?",
      why: "The error is in \"My baby sister has four new tooths.\" Tooth is a special noun, so the plural is teeth." }
  ]
});

/* 3. Past tense of irregular verbs */
PP.addLesson({
  code: "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs",
  title: "Special past-tense verbs: went, ran and caught",
  teach: {
    big: "Most verbs add -ed to tell about the past, but special verbs change into a new word, like go becomes went.",
    points: [
      "A past tense verb tells about something that already happened.",
      "Most verbs add -ed: jump becomes jumped, and play becomes played.",
      "Irregular verbs change their spelling instead: run becomes ran, eat becomes ate, see becomes saw, and catch becomes caught.",
      "Never add -ed to an irregular verb. Goed, runned and eated are not words.",
      "Time words like yesterday, last week and this morning tell you to use the past tense."
    ],
    words: [
      { term: "past tense", means: "a verb form that tells what already happened" },
      { term: "irregular verb", means: "a verb that does not add -ed for the past" }
    ],
    example: {
      label: "Example",
      lines: ["Today I swim and sing.", "Yesterday I swam and sang."],
      note: "Swim changes to swam, and sing changes to sang. The i changes to a, and no -ed is added."
    },
    tip: "Look for a time word like yesterday or last night. Then say each verb choice out loud in the sentence. Made-up words like throwed or buyed are traps."
  },
  learn: [
    {
      show: ["Last night, Priya (throwed / threw) the ball to her dog."],
      ask: "Which verb is correct?",
      steps: [
        "Find the time clue: last night. The verb must tell about the past.",
        "Ask: Does throw just add -ed? Say \"throwed.\" It does not sound right.",
        "Throw is an irregular verb. Its past tense is threw."
      ],
      answer: "Last night, Priya threw the ball to her dog."
    },
    {
      show: ["Yesterday, Mateo bring his kite to the beach on Tybee Island."],
      ask: "This sentence has a verb error. How do you fix it?",
      steps: [
        "Find the time word: yesterday. The action already happened.",
        "Find the verb: bring. It tells about now, not the past.",
        "Bring is irregular. Its past tense is brought, not bringed."
      ],
      answer: "Yesterday, Mateo brought his kite to the beach on Tybee Island."
    }
  ],
  parent: "At dinner, ask \"What did you do today?\" and listen for special past-tense verbs. If your child says \"I eated,\" just repeat it back the right way: \"Oh, you ate pizza!\"",
  passages: [],
  practice: [
    { id: "SK-GUM3-3-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Last summer, our family {0} to Savannah in a van.",
      slots: [{ options: ["drived", "drove", "drive", "droved"], answer: 1 }],
      clue: "Last summer already happened. Drive is a special verb that does not add -ed.",
      why: "The answer is drove. Drive is an irregular verb, so in the past it changes to drove." },
    { id: "SK-GUM3-3-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "Kenji wrote a letter to his grandma last week.", correct: true },
        { text: "Yesterday we eated pizza for lunch at school." },
        { text: "The bird flied over the pond this morning." },
        { text: "Last night I sleeped in a tent in the yard." }
      ],
      clue: "Each sentence tells about the past. Look for a verb that adds -ed when it should change into a new word.",
      why: "The answer is \"Kenji wrote a letter to his grandma last week.\" Write changes to wrote. The others should say ate, flew and slept." },
    { id: "SK-GUM3-3-P3", type: "match", points: 2, dok: 1, passages: [],
      prompt: "Match each verb to its past tense.",
      cols: ["sat", "found", "grew", "bought"],
      rows: [
        { text: "sit", answer: 0 },
        { text: "find", answer: 1 },
        { text: "grow", answer: 2 },
        { text: "buy", answer: 3 }
      ],
      clue: "Put each verb after the word yesterday: \"Yesterday I ___.\" Which past-tense word sounds right?",
      why: "Sit becomes sat, find becomes found, grow becomes grew, and buy becomes bought." },
    { id: "SK-GUM3-3-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Aisha drew a picture of a horse.",
        "We sang songs around the campfire.",
        "The pond freezed last winter.",
        "Ben found a shiny rock by the creek."
      ],
      answer: [2], pick: 1,
      clue: "Find the verb in each sentence. Did any special verb get -ed added by mistake?",
      why: "The error is in \"The pond freezed last winter.\" Freeze is an irregular verb. Its past tense is froze." },
    { id: "SK-GUM3-3-P5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Last Saturday, Elena {0} her bike to the park and {1} a red balloon stuck in a tree.",
      slots: [
        { options: ["rided", "rode", "rides"], answer: 1 },
        { options: ["seen", "saw", "seed"], answer: 1 }
      ],
      clue: "Last Saturday already happened, so both verbs must tell about the past. Neither verb adds -ed.",
      why: "The answers are rode and saw. Ride becomes rode, and see becomes saw. Seen needs a helper word like has, so it does not fit here." }
  ],
  test: [
    { id: "SK-GUM3-3-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word correctly completes the sentence?",
      stem: "Yesterday the wind ____ my hat right off my head.",
      choices: [
        { text: "blew", correct: true },
        { text: "blowed" },
        { text: "blown" },
        { text: "blows" }
      ],
      clue: "Yesterday tells you the action is in the past. Blow is a special verb.",
      why: "The answer is blew. Blow is irregular, so its past tense is blew. Blowed is not a word, blows tells about now, and blown needs a helper like has." },
    { id: "SK-GUM3-3-T2", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO sentences that use past-tense verbs correctly.",
      choices: [
        { text: "Our class built a tall tower of blocks.", correct: true },
        { text: "Zoe felt sleepy after the long hike.", correct: true },
        { text: "Last week Andre teached me a card game." },
        { text: "The baby drinked all of her milk." },
        { text: "We goed to the library after school." }
      ],
      clue: "Find the verb in each sentence. Is it the real past-tense word, or a made-up word with -ed?",
      why: "The answers are \"Our class built a tall tower of blocks.\" and \"Zoe felt sleepy after the long hike.\" Build becomes built, and feel becomes felt. The others should say taught, drank and went." },
    { id: "SK-GUM3-3-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Jamal {0} the sack race at field day last spring.",
      slots: [{ options: ["winned", "won", "win", "wonned"], answer: 1 }],
      clue: "Last spring already happened. Win is a special verb.",
      why: "The answer is won. Win is an irregular verb, so its past tense is won." },
    { id: "SK-GUM3-3-T4", type: "hottext", points: 2, dok: 2, passages: [],
      prompt: "Select the TWO sentences that have an error.",
      options: [
        "The kitten hid under the porch.",
        "Grandma maked a peach pie for us.",
        "We swam in the lake last July.",
        "Last night the dog digged a hole.",
        "Luis gave me half of his orange."
      ],
      answer: [1, 3], pick: 2,
      clue: "Check every verb. Two of them added -ed when they should have changed into a new word.",
      why: "The errors are in \"Grandma maked a peach pie for us.\" and \"Last night the dog digged a hole.\" Make becomes made, and dig becomes dug." },
    { id: "SK-GUM3-3-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "How should this sentence be fixed?",
      stem: "Last fall, my brother breaked his arm on the playground.",
      choices: [
        { text: "Change breaked to broke.", correct: true },
        { text: "Change breaked to broken." },
        { text: "Change breaked to breaks." },
        { text: "Change breaked to brokes." }
      ],
      clue: "Last fall already happened. Break is a special verb. Which word tells about the past with no helper word?",
      why: "The answer is \"Change breaked to broke.\" Break is irregular, so its past tense is broke. Broken needs a helper like has, and breaks tells about now." }
  ]
});

/* 4. Coordinating conjunctions */
PP.addLesson({
  code: "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra",
  title: "Joining words: and, but, or, so",
  teach: {
    big: "Joining words like and, but, or and so hook words and ideas together, and each one has its own job.",
    points: [
      "Coordinating conjunctions are joining words. You can remember all seven with the word FANBOYS: for, and, nor, but, or, yet, so.",
      "In third grade, you will use four of them the most: and, but, or, so.",
      "And adds one more thing. But shows something different or surprising. Or gives a choice. So tells what happened because of something.",
      "They can join two words (apples and pears), two groups of words (in the yard or at the park), or two whole sentences."
    ],
    words: [
      { term: "conjunction", means: "a word that joins words or ideas" },
      { term: "FANBOYS", means: "a trick for remembering the seven joining words: for, and, nor, but, or, yet, so" }
    ],
    example: {
      label: "Example",
      lines: ["I wanted to go swimming, but the pool was closed.", "It was raining, so we played a board game."],
      note: "But shows that the second idea goes against the first: I wanted to swim, but I could not. So tells what happened because it rained."
    },
    tip: "The test often gives a sentence with a blank and asks which joining word makes sense. Read both parts and ask: Is it adding, different, a choice or a result?"
  },
  learn: [
    {
      show: ["Do you want milk ____ juice with your lunch?"],
      ask: "Which joining word fits in the blank?",
      steps: [
        "Read the two things being joined: milk and juice.",
        "The question asks you to pick one of them. That is a choice.",
        "The joining word for a choice is or."
      ],
      answer: "Do you want milk or juice with your lunch?"
    },
    {
      show: ["Malik studied his spelling words every night.", "He got every word right on the test."],
      ask: "Which joining word best joins these two sentences?",
      steps: [
        "Ask how the two ideas connect. Did the second thing happen because of the first?",
        "Yes. He got every word right because he studied.",
        "So tells a result. Because so joins two complete sentences, put a comma before it."
      ],
      answer: "Malik studied his spelling words every night, so he got every word right on the test."
    }
  ],
  parent: "Say the first half of a sentence and a joining word, like \"I was hungry, so...\" or \"I was hungry, but...\" and let your child finish it. Talk about how the ending changes with each joining word.",
  passages: [],
  practice: [
    { id: "SK-GUM3-4-P1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the joining word that makes the most sense.",
      text: "The sky was dark and cloudy, {0} we brought our umbrellas.",
      slots: [{ options: ["but", "or", "so"], answer: 2 }],
      clue: "Why did they bring umbrellas? Look for the joining word that tells a result.",
      why: "The answer is so. The dark clouds are the reason they brought umbrellas. So tells what happened because of something." },
    { id: "SK-GUM3-4-P2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the joining word that makes the most sense.",
      text: "Talia likes peaches, {0} her brother does not like them at all.",
      slots: [{ options: ["so", "but", "or"], answer: 1 }],
      clue: "Do the two parts agree, or does the second part show something different?",
      why: "The answer is but. Talia likes peaches, and her brother does not. But joins two ideas that are different." },
    { id: "SK-GUM3-4-P3", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word in the sentence is a joining word?",
      stem: "We can ride bikes to the park or walk to the library.",
      choices: [
        { text: "or", correct: true },
        { text: "to" },
        { text: "can" },
        { text: "walk" }
      ],
      clue: "Think of FANBOYS. Which word from that list is in the sentence?",
      why: "The answer is or. Or is a joining word that gives a choice: ride bikes to the park, or walk to the library." },
    { id: "SK-GUM3-4-P4", type: "match", points: 2, dok: 1, passages: [],
      prompt: "Match each joining word to its job.",
      cols: ["and", "but", "or", "so"],
      rows: [
        { text: "adds one more thing", answer: 0 },
        { text: "shows something different", answer: 1 },
        { text: "gives a choice", answer: 2 },
        { text: "tells a result", answer: 3 }
      ],
      clue: "Try each joining word in a sentence like \"I like cats ___ dogs.\" or \"It rained, ___ we stayed in.\" Which job does it do?",
      why: "And adds one more thing. But shows something different. Or gives a choice. So tells a result." },
    { id: "SK-GUM3-4-P5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO sentences that use a joining word that makes sense.",
      choices: [
        { text: "I was hungry, so I ate a banana.", correct: true },
        { text: "Hana can play the piano and the drums.", correct: true },
        { text: "It was cold outside, so I left my coat at home." },
        { text: "Do you want to draw but paint today?" },
        { text: "The movie was funny, or we laughed a lot." }
      ],
      clue: "Read each sentence and ask: Does the joining word do the right job? Adding, different, choice or result?",
      why: "The answers are \"I was hungry, so I ate a banana.\" and \"Hana can play the piano and the drums.\" Being hungry is why I ate, so so fits, and and adds the drums. Leaving a coat at home when it is cold needs but. A choice between drawing and painting needs or. Laughing because the movie was funny needs so." }
  ],
  test: [
    { id: "SK-GUM3-4-T1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the joining word that makes the most sense.",
      text: "Should we walk to the park, {0} should we ride our bikes?",
      slots: [{ options: ["or", "so", "but"], answer: 0 }],
      clue: "The sentence asks you to pick between two things. Which joining word gives a choice?",
      why: "The answer is or. The question asks which of two things to do, and or gives a choice." },
    { id: "SK-GUM3-4-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses but correctly?",
      choices: [
        { text: "Ezra wanted to fly his kite, but there was no wind.", correct: true },
        { text: "Ezra loves kites, but he flies one every weekend." },
        { text: "Ezra was excited about his kite, but he could not wait to fly it." },
        { text: "Ezra got a new kite, but he was very happy." }
      ],
      clue: "But joins two ideas that are different or surprising. In which sentence does the second part go against the first part?",
      why: "The answer is \"Ezra wanted to fly his kite, but there was no wind.\" He wanted to fly it, but no wind means he could not. In the others, the second part does not go against the first. Loving kites is why he flies one, and being excited goes along with not being able to wait. Getting a new kite would make him happy, so but does not fit." },
    { id: "SK-GUM3-4-T3", type: "hottext", points: 2, dok: 2, passages: [],
      prompt: "Select the TWO sentences where the joining word does NOT make sense.",
      options: [
        "Rosa fed the cat, and Ben fed the dog.",
        "We missed the bus, so Mom drove us to school.",
        "I like grapes, or I eat them every day.",
        "Would you like a pencil or a crayon?",
        "The cookies smelled great, so they tasted burnt."
      ],
      answer: [2, 4], pick: 2,
      clue: "For each sentence, name the job the joining word should do: adding, different, choice or result. Then check if the right word was used.",
      why: "The answers are \"I like grapes, or I eat them every day.\" and \"The cookies smelled great, so they tasted burnt.\" Liking grapes is why I eat them, so it needs so, not or. Smelling great but tasting burnt is a surprise, so it needs but, not so." },
    { id: "SK-GUM3-4-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "What does the joining word join in each one? Match each to the right column.",
      cols: ["Two words", "Two groups of words", "Two sentences"],
      rows: [
        { text: "cats and dogs", answer: 0 },
        { text: "under the bed or behind the door", answer: 1 },
        { text: "The bell rang, and we went inside.", answer: 2 },
        { text: "salt or pepper", answer: 0 }
      ],
      clue: "Cover the joining word. Look at what is on each side. Is it one word, a few words, or a whole sentence that could stand alone?",
      why: "Cats and dogs and salt or pepper join two single words. Under the bed or behind the door joins two groups of words. The bell rang, and we went inside joins two complete sentences." },
    { id: "SK-GUM3-4-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which joining word best completes the sentence?",
      stem: "The puppy was very tired, ____ it took a long nap.",
      choices: [
        { text: "so", correct: true },
        { text: "or" },
        { text: "but" }
      ],
      clue: "Ask why the puppy took a nap. Which joining word tells a result?",
      why: "The answer is so. The puppy took a nap because it was tired. So tells what happened because of something." }
  ]
});

/* 5. Collective and abstract nouns */
PP.addLesson({
  code: "3.L.GC.1:M:use-collective-and-abstract-nouns",
  title: "Group nouns and idea nouns",
  teach: {
    big: "A collective noun names a group as one thing, like team. An abstract noun names an idea or a feeling you cannot touch, like kindness.",
    points: [
      "A collective noun is one word for a whole group: a team of players, a flock of birds, a herd of cows, a class of students.",
      "When the group acts together, treat it as one thing: The team is ready. The flock flies south.",
      "A plural like birds is not a collective noun. A collective noun is one word that names the whole group.",
      "An abstract noun names an idea, a feeling or a quality: joy, courage, friendship, honesty.",
      "You cannot see, hear, touch, taste or smell an abstract noun. You can see a friend, but you cannot touch friendship."
    ],
    words: [
      { term: "collective noun", means: "a noun that names a group, like team or family" },
      { term: "abstract noun", means: "a noun that names an idea or feeling, like hope or fear" }
    ],
    example: {
      label: "Example",
      lines: ["The class cheered with joy when the band began to play."],
      note: "Class and band are collective nouns. Each one names a group of people. Joy is an abstract noun. It names a feeling."
    },
    tip: "The test may ask you to find the abstract noun in a sentence, or to choose the verb that goes with a group word like team or family."
  },
  learn: [
    {
      show: ["The herd crossed the muddy road slowly."],
      ask: "Which word is a collective noun?",
      steps: [
        "Look for a word that names a group of people or animals.",
        "Herd names a group of animals, like cows, that move together.",
        "Road is a thing you can touch, but it is not a group."
      ],
      answer: "Herd is the collective noun."
    },
    {
      show: ["Diego showed kindness to the new student at lunch."],
      ask: "Which word is the abstract noun?",
      steps: [
        "Find the nouns: Diego, kindness, student, lunch.",
        "Ask about each one: Can I see it or touch it? You can see Diego, the student and lunch.",
        "You cannot touch kindness. It names a way of being, so it is an abstract noun."
      ],
      answer: "Kindness is the abstract noun."
    }
  ],
  parent: "At the park or the store, name groups together (a crowd of shoppers, a flock of pigeons). At bedtime, ask your child to name one feeling or idea from the day, like joy, fear or patience.",
  passages: [],
  practice: [
    { id: "SK-GUM3-5-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word in the sentence is an abstract noun?",
      stem: "Amara felt pride when she finished the puzzle.",
      choices: [
        { text: "pride", correct: true },
        { text: "puzzle" },
        { text: "Amara" },
        { text: "finished" }
      ],
      clue: "An abstract noun names a feeling or an idea. Which word names something you cannot see or touch?",
      why: "The answer is pride. Pride is a feeling, so it is an abstract noun. You can see Amara and the puzzle, and finished is a verb." },
    { id: "SK-GUM3-5-P2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The choir {0} at our school every spring.",
      slots: [{ options: ["sing", "sings", "singing"], answer: 1 }],
      clue: "A choir is one group. Would you say \"the group sing\" or \"the group sings\"?",
      why: "The answer is sings. Choir is a collective noun. The group sings together as one, so it takes the verb for one: sings." },
    { id: "SK-GUM3-5-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is each noun a group noun or an idea noun? Match each to the right column.",
      cols: ["Collective noun", "Abstract noun"],
      rows: [
        { text: "team", answer: 0 },
        { text: "honesty", answer: 1 },
        { text: "flock", answer: 0 },
        { text: "bravery", answer: 1 },
        { text: "crowd", answer: 0 }
      ],
      clue: "Ask: Does this word name a group of people or animals? Or does it name something you cannot touch?",
      why: "Team, flock and crowd each name a group, so they are collective nouns. Honesty and bravery name qualities you cannot touch, so they are abstract nouns." },
    { id: "SK-GUM3-5-P4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO sentences that use a collective noun.",
      choices: [
        { text: "A swarm of bees buzzed near the hive.", correct: true },
        { text: "Our family went camping near Helen.", correct: true },
        { text: "Three dogs barked at the mail carrier." },
        { text: "The kittens slept in a warm basket." },
        { text: "Grace felt happy at the county fair." }
      ],
      clue: "Look for one word that stands for a whole group. A word that just adds -s, like cats, does not count.",
      why: "The answers are \"A swarm of bees buzzed near the hive.\" and \"Our family went camping near Helen.\" Swarm names a group of bees, and family names a group of people. Dogs and kittens are plurals, not group words, and the fair sentence has no group word." },
    { id: "SK-GUM3-5-P5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an abstract noun.",
      options: [
        "The goat ate the grass by the fence.",
        "Our friendship began in first grade.",
        "Liam put his shoes by the door.",
        "The rain fell hard on the roof."
      ],
      answer: [1], pick: 1,
      clue: "Check each noun. Can you see it, hear it or touch it? Find the one you cannot.",
      why: "The answer is \"Our friendship began in first grade.\" Friendship is an idea you cannot touch, so it is an abstract noun. Goat, grass, shoes, door, rain and roof are all things you can see or touch." }
  ],
  test: [
    { id: "SK-GUM3-5-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word in the sentence is an abstract noun?",
      stem: "Lena never lost hope that her cat would come home.",
      choices: [
        { text: "hope", correct: true },
        { text: "cat" },
        { text: "home" },
        { text: "Lena" }
      ],
      clue: "Which word names something you cannot see, hear or touch?",
      why: "The answer is hope. Hope is a feeling, so it is an abstract noun. Lena, her cat and her home can all be seen." },
    { id: "SK-GUM3-5-T2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The flock {0} over our pond every fall.",
      slots: [{ options: ["fly", "flies", "flying"], answer: 1 }],
      clue: "A flock is one group. Would you say \"it fly\" or \"it flies\"?",
      why: "The answer is flies. Flock is a collective noun. The whole group moves together as one, so it takes the verb for one: flies." },
    { id: "SK-GUM3-5-T3", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO words that are abstract nouns.",
      choices: [
        { text: "joy", correct: true },
        { text: "patience", correct: true },
        { text: "pencil" },
        { text: "herd" },
        { text: "teacher" },
        { text: "garden" }
      ],
      clue: "For each word, ask: Could I hold it, see it or point to it? If not, it may be an idea or a feeling.",
      why: "The answers are joy and patience. Joy is a feeling, and patience is a quality. You cannot touch either one. A pencil, a teacher and a garden can be seen. Herd is a collective noun, a group of animals you can see." },
    { id: "SK-GUM3-5-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "What kind of noun is each word? Match each to the right column.",
      cols: ["Collective noun", "Abstract noun", "Neither"],
      rows: [
        { text: "audience", answer: 0 },
        { text: "freedom", answer: 1 },
        { text: "pencils", answer: 2 },
        { text: "crew", answer: 0 }
      ],
      clue: "Group word, idea word, or just a plural of a thing you can touch? Ask that for each one.",
      why: "Audience and crew each name a group of people, so they are collective nouns. Freedom is an idea, so it is abstract. Pencils is just the plural of a thing you can touch, so it is neither." },
    { id: "SK-GUM3-5-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that uses a collective noun.",
      options: [
        "The band marched down the street in Athens.",
        "Two horses ran across the field.",
        "My cousins visited us in May.",
        "The ducks swam in the pond."
      ],
      answer: [0], pick: 1,
      clue: "Look for one word that names a whole group. A word that ends in -s and means more than one is just a plural.",
      why: "The answer is \"The band marched down the street in Athens.\" Band is one word for a group of musicians, so it is a collective noun. Horses, cousins and ducks are plurals." }
  ]
});

/* 6. Reflexive pronouns */
PP.addLesson({
  code: "3.L.GC.1:M:use-reflexive-pronouns",
  title: "Pronouns that end in -self and -selves",
  teach: {
    big: "A reflexive pronoun ends in -self or -selves and points back to the same person or thing the sentence is about: Mia hugged herself.",
    points: [
      "The reflexive pronouns are myself, yourself, himself, herself, itself, ourselves, yourselves and themselves.",
      "Use one when the person doing the action is also the one it happens to: I see myself in the mirror.",
      "Match the pronoun to the word it points back to: Ben, himself; the girls, themselves; we, ourselves.",
      "One person or thing ends in -self. More than one ends in -selves.",
      "Hisself and theirselves are not correct words. Also, do not use myself in place of I or me: say \"Dad and I went,\" not \"Dad and myself went.\""
    ],
    words: [
      { term: "pronoun", means: "a word that takes the place of a noun, like he, she or they" },
      { term: "reflexive pronoun", means: "a pronoun ending in -self or -selves that points back to the subject" }
    ],
    example: {
      label: "Example",
      lines: ["The twins made themselves a snack.", "Jada taught herself to whistle."],
      note: "Themselves points back to the twins, who are more than one. Herself points back to Jada, one girl."
    },
    tip: "On the test, find who the pronoun points back to. Is it one or more than one? A boy, a girl, a group or a thing? Then pick the matching -self or -selves word."
  },
  learn: [
    {
      show: ["Marcus cut ____ a slice of bread."],
      ask: "Which reflexive pronoun fits in the blank?",
      steps: [
        "Find who did the action: Marcus.",
        "Marcus is also the one getting the bread, so use a reflexive pronoun.",
        "Marcus is one boy, so the word is himself, not hisself."
      ],
      answer: "Marcus cut himself a slice of bread."
    },
    {
      show: ["We built ourself a fort out of blankets."],
      ask: "This sentence has a pronoun error. How do you fix it?",
      steps: [
        "Find who did the action: we.",
        "We means more than one person, so the word must end in -selves.",
        "The reflexive pronoun for we is ourselves."
      ],
      answer: "We built ourselves a fort out of blankets."
    }
  ],
  parent: "When your child does something alone, like pouring cereal or tying shoes, ask \"Who did that?\" and have them answer with a -self word: \"I did it myself.\" Then try it for others: \"Dad did it himself.\"",
  passages: [],
  practice: [
    { id: "SK-GUM3-6-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The old gate swung shut by {0} in the wind.",
      slots: [{ options: ["itself", "herself", "themselves"], answer: 0 }],
      clue: "The pronoun points back to the gate. A gate is one thing, not a person.",
      why: "The answer is itself. The gate is one thing, so the reflexive pronoun is itself." },
    { id: "SK-GUM3-6-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "The girls painted themselves a sign.", correct: true },
        { text: "Andre fixed the flat tire by hisself." },
        { text: "We cooked ourself a big breakfast." },
        { text: "My aunt made himself a cheese snack." }
      ],
      clue: "Find who each pronoun points back to. Is it one person or more than one? Is the word a real -self or -selves word?",
      why: "The answer is \"The girls painted themselves a sign.\" The girls are more than one, so themselves fits. The others should say himself (Andre is one boy), ourselves (we is more than one) and herself (an aunt is a woman)." },
    { id: "SK-GUM3-6-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each subject to the reflexive pronoun that points back to it.",
      cols: ["himself", "herself", "themselves", "ourselves"],
      rows: [
        { text: "my uncle", answer: 0 },
        { text: "Grandma", answer: 1 },
        { text: "the players", answer: 2 },
        { text: "my friends and I", answer: 3 }
      ],
      clue: "Ask: One person or more? If it is more than one, does it include me?",
      why: "My uncle is one man, so himself. Grandma is one woman, so herself. The players are more than one, so themselves. My friends and I includes me, so ourselves." },
    { id: "SK-GUM3-6-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "I taught myself to tie my shoes.",
        "The cat licked itself clean.",
        "The boys helped theirselves to more corn.",
        "You should be proud of yourself."
      ],
      answer: [2], pick: 1,
      clue: "Look at each -self or -selves word. Is it a real word, and does it match who it points back to?",
      why: "The error is in \"The boys helped theirselves to more corn.\" Theirselves is not a correct word. It should be themselves." },
    { id: "SK-GUM3-6-P5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Nia wrapped {0} in a blanket, and her parents made {1} some hot cocoa.",
      slots: [
        { options: ["herself", "himself", "itself"], answer: 0 },
        { options: ["theirselves", "themselves", "ourselves"], answer: 1 }
      ],
      clue: "The first blank points back to Nia. The second blank points back to her parents. Count how many people each one is.",
      why: "The answers are herself and themselves. Nia is one girl, so herself. Her parents are two people, so themselves. Theirselves is not a correct word." }
  ],
  test: [
    { id: "SK-GUM3-6-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word correctly completes the sentence?",
      stem: "Ms. Lopez reminded ____ to bring her keys.",
      choices: [
        { text: "herself", correct: true },
        { text: "himself" },
        { text: "themselves" },
        { text: "itself" }
      ],
      clue: "Who did the reminding? The pronoun points back to that same person.",
      why: "The answer is herself. Ms. Lopez is one woman, and she reminded herself." },
    { id: "SK-GUM3-6-T2", type: "hottext", points: 2, dok: 2, passages: [],
      prompt: "Select the TWO sentences that have an error.",
      options: [
        "Kofi bought hisself a new notebook.",
        "My sister and I made ourselves a fort.",
        "The puppy saw itself in the puddle.",
        "Grandma made himself a cup of tea.",
        "You can help yourself to an apple."
      ],
      answer: [0, 3], pick: 2,
      clue: "For each -self or -selves word, find who it points back to. Check that it is a real word and that it matches.",
      why: "The errors are in \"Kofi bought hisself a new notebook.\" and \"Grandma made himself a cup of tea.\" Hisself is not a correct word, so it should be himself. Grandma is a woman, so it should be herself." },
    { id: "SK-GUM3-6-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The players gave {0} a big cheer after the game.",
      slots: [{ options: ["themselves", "theirselves", "himself"], answer: 0 }],
      clue: "The players are more than one. Which real word ends in -selves?",
      why: "The answer is themselves. The players are more than one, so the word ends in -selves. Theirselves is not a correct word." },
    { id: "SK-GUM3-6-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO sentences that use pronouns correctly.",
      choices: [
        { text: "I washed all of the dishes by myself.", correct: true },
        { text: "The kids cleaned up the room themselves.", correct: true },
        { text: "Dad and myself went fishing at the lake." },
        { text: "Theo made hisself a cheese sandwich." },
        { text: "We packed ourself a picnic lunch." }
      ],
      clue: "Check that each -self or -selves word is real and points back to someone who is the subject. Remember: myself never takes the place of I.",
      why: "The answers are \"I washed all of the dishes by myself.\" and \"The kids cleaned up the room themselves.\" Myself points back to I, and themselves points back to the kids. The others should say \"Dad and I,\" himself and ourselves." },
    { id: "SK-GUM3-6-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which word correctly completes what Coach said?",
      stem: "Coach said, \"You and your brother should be proud of ____.\"",
      choices: [
        { text: "yourselves", correct: true },
        { text: "yourself" },
        { text: "themselves" },
        { text: "ourselves" }
      ],
      clue: "Coach is talking to two people. Which word means \"you\" for more than one?",
      why: "The answer is yourselves. Coach is talking to two people, you and your brother, so the word must end in -selves and match you." }
  ]
});

/* 7. Commas with coordinating conjunctions */
PP.addLesson({
  code: "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi",
  title: "Commas before and, but, or, so",
  teach: {
    big: "When a joining word (and, but, or, so) links two complete sentences, put a comma right before the joining word.",
    points: [
      "When you join two complete sentences with a joining word (and, but, or, so), put a comma right before it: The bell rang, and we lined up.",
      "Test it: cover the joining word. Can each side stand alone as a sentence, with a naming part and a doing part? If yes, add the comma.",
      "If one side cannot stand alone, do not add a comma: We sang and danced. (Danced is not a sentence by itself.)",
      "The comma goes before the joining word, never after it.",
      "A comma alone cannot join two sentences. You need the joining word too."
    ],
    words: [
      { term: "complete sentence", means: "a group of words that tells who or what and what they do, and makes sense alone" },
      { term: "comma", means: "a mark ( , ) that shows a small pause" }
    ],
    example: {
      label: "Example",
      lines: ["Jamal kicked the ball, and it flew over the fence.", "Jamal kicked the ball and ran after it."],
      note: "In the first sentence, both sides are complete sentences, so there is a comma before and. In the second, \"ran after it\" cannot stand alone, so there is no comma."
    },
    tip: "The test may ask which sentence uses a comma correctly, or where a comma belongs. Cover the joining word and check both sides."
  },
  learn: [
    {
      show: ["The rain stopped so we went outside to play."],
      ask: "Does this sentence need a comma? If so, where?",
      steps: [
        "Find the joining word: so.",
        "Cover it. \"The rain stopped\" is a sentence. \"We went outside to play\" is also a sentence.",
        "Both sides are complete sentences, so put a comma right before so."
      ],
      answer: "The rain stopped, so we went outside to play."
    },
    {
      show: ["Mei fed the fish and watered the plants."],
      ask: "Does this sentence need a comma before and?",
      steps: [
        "Find the joining word: and.",
        "Cover it. \"Mei fed the fish\" is a sentence. \"Watered the plants\" has no naming part, so it is not a sentence.",
        "Only one side is complete, so no comma is needed."
      ],
      answer: "No comma is needed. The sentence is correct as it is."
    }
  ],
  parent: "Write two short sentences about your day on a sticky note, like \"We went to the store. We bought apples.\" Ask your child to join them with and, but or so and add the comma in the right spot.",
  passages: [],
  practice: [
    { id: "SK-GUM3-7-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence uses a comma correctly?",
      choices: [
        { text: "We wanted to swim, but the pool was closed.", correct: true },
        { text: "We wanted to swim but, the pool was closed." },
        { text: "We wanted, to swim but the pool was closed." },
        { text: "We wanted to swim but the pool, was closed." }
      ],
      clue: "Find the joining word. Where does the comma belong when it joins two complete sentences?",
      why: "The answer is \"We wanted to swim, but the pool was closed.\" Both sides are complete sentences, so the comma goes right before but, never after it." },
    { id: "SK-GUM3-7-P2", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that needs a comma.",
      options: [
        "Grandpa grilled corn and baked a pie.",
        "The bus was late so we missed the first bell.",
        "Rosa likes cats and dogs.",
        "We picked apples, and Dad made applesauce."
      ],
      answer: [1], pick: 1,
      clue: "Cover the joining word in each sentence. Look for one where both sides are complete sentences but there is no comma yet.",
      why: "The answer is \"The bus was late so we missed the first bell.\" \"The bus was late\" and \"we missed the first bell\" are both complete sentences, so it needs a comma before so." },
    { id: "SK-GUM3-7-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each sentence need a comma before the joining word? Match each to the right column.",
      cols: ["Needs a comma", "No comma"],
      rows: [
        { text: "Ava found a shell and she gave it to her mom.", answer: 0 },
        { text: "Ava found a shell and gave it to her mom.", answer: 1 },
        { text: "The dog barked but nobody came to the door.", answer: 0 },
        { text: "Leo wanted pizza but not salad.", answer: 1 }
      ],
      clue: "Cover the joining word. Is the part after it a whole sentence with its own naming part?",
      why: "\"Ava found a shell and she gave it to her mom\" and \"The dog barked but nobody came to the door\" each join two complete sentences, so they need a comma. \"Gave it to her mom\" and \"not salad\" are not sentences, so those two need no comma." },
    { id: "SK-GUM3-7-P4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO sentences that use commas correctly.",
      choices: [
        { text: "The sun came out, so we hung the wet towels outside.", correct: true },
        { text: "Yusuf can sing and play the guitar.", correct: true },
        { text: "Kim drew a map, and labeled every road." },
        { text: "My brother likes math but, I like reading." },
        { text: "Lucas wanted to stay up late so he asked his mom." }
      ],
      clue: "For each sentence, cover the joining word and check both sides. Then check where the comma is, or whether one is missing.",
      why: "The answers are \"The sun came out, so we hung the wet towels outside.\" and \"Yusuf can sing and play the guitar.\" The first joins two complete sentences with a comma before so. The second joins two actions, so it needs no comma. Kim's sentence should have no comma, because \"labeled every road\" is not a sentence. The math sentence needs the comma before but, not after it. Lucas's sentence needs a comma before so." },
    { id: "SK-GUM3-7-P5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the two sentences. Which is the best way to combine them?",
      stem: ["Grandma planted tomatoes.", "Grandpa planted beans."],
      choices: [
        { text: "Grandma planted tomatoes, and Grandpa planted beans.", correct: true },
        { text: "Grandma planted tomatoes and, Grandpa planted beans." },
        { text: "Grandma planted tomatoes, Grandpa planted beans." },
        { text: "Grandma planted, tomatoes and Grandpa planted beans." }
      ],
      clue: "You need a joining word and a comma. Look closely at where the comma sits.",
      why: "The answer is \"Grandma planted tomatoes, and Grandpa planted beans.\" Both parts are complete sentences, so they are joined with and, and the comma goes right before and. A comma alone cannot join two sentences." }
  ],
  test: [
    { id: "SK-GUM3-7-T1", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that uses a comma correctly.",
      options: [
        "Sam swept the floor, and wiped the table.",
        "The movie was long, but we liked every part.",
        "Do you want soup or, do you want a sandwich?",
        "The ice melted, the yard was muddy."
      ],
      answer: [1], pick: 1,
      clue: "Check three things: Are both sides complete sentences? Is there a joining word? Is the comma right before it?",
      why: "The answer is \"The movie was long, but we liked every part.\" Both sides are complete sentences, and the comma comes right before but. Sam's sentence should have no comma, the soup sentence has the comma after or instead of before it, and the ice sentence is missing a joining word." },
    { id: "SK-GUM3-7-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "What is the correct way to write this sentence?",
      stem: "Tariq studied his notes all week so he felt ready for the test.",
      choices: [
        { text: "Tariq studied his notes all week, so he felt ready for the test.", correct: true },
        { text: "Tariq studied his notes all week so, he felt ready for the test." },
        { text: "Tariq studied his notes, all week so he felt ready for the test." },
        { text: "Tariq studied his notes all week so he felt ready, for the test." }
      ],
      clue: "Find the joining word. Cover it and check whether both sides are complete sentences.",
      why: "The answer is \"Tariq studied his notes all week, so he felt ready for the test.\" \"Tariq studied his notes all week\" and \"he felt ready for the test\" are both complete sentences, so the comma goes right before so." },
    { id: "SK-GUM3-7-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each sentence need a comma before the joining word? Match each to the right column.",
      cols: ["Needs a comma", "No comma"],
      rows: [
        { text: "You can wear the red hat or you can wear the blue one.", answer: 0 },
        { text: "Carmen fixed the swing and pushed her sister.", answer: 1 },
        { text: "The frog jumped but it missed the bug.", answer: 0 },
        { text: "Kai washed the car and the dog.", answer: 1 }
      ],
      clue: "Cover the joining word. Does the part after it have its own naming part and doing part?",
      why: "\"You can wear the red hat or you can wear the blue one\" and \"The frog jumped but it missed the bug\" each join two complete sentences, so they need a comma before the joining word. \"Pushed her sister\" and \"the dog\" are not sentences, so those two need no comma." },
    { id: "SK-GUM3-7-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO sentences that need a comma before the joining word.",
      choices: [
        { text: "The baby woke up so Dad warmed a bottle.", correct: true },
        { text: "Aunt Rosa called but nobody was home.", correct: true },
        { text: "Mom and I baked muffins for the sale." },
        { text: "Eli stretched and ran around the track." },
        { text: "We can eat inside or out on the porch." }
      ],
      clue: "Cover the joining word in each sentence. Only add a comma when both sides could stand alone as sentences.",
      why: "The answers are \"The baby woke up so Dad warmed a bottle.\" and \"Aunt Rosa called but nobody was home.\" Each one joins two complete sentences, so each needs a comma before the joining word. The other three join words or parts that are not whole sentences, so they need no comma." },
    { id: "SK-GUM3-7-T5", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence is written correctly?",
      choices: [
        { text: "Owen dropped his tray, but nothing spilled.", correct: true },
        { text: "Owen dropped his tray but, nothing spilled." },
        { text: "Owen dropped his tray, nothing spilled." },
        { text: "Owen dropped, his tray but nothing spilled." }
      ],
      clue: "Two complete sentences need a joining word and a comma. Check where the comma sits.",
      why: "The answer is \"Owen dropped his tray, but nothing spilled.\" Both sides are complete sentences, so they are joined with but, and the comma goes right before but." }
  ]
});

/* 8. Hyphens at line breaks */
PP.addLesson({
  code: "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks",
  title: "Hyphens: splitting a word at the end of a line",
  teach: {
    big: "When a long word does not fit at the end of a line, you can split it between two syllables and put a hyphen (-) at the end of the line.",
    points: [
      "A hyphen is a short line (-). At the end of a line, it shows that the word keeps going on the next line.",
      "Only split a word between its syllables, the beats you hear when you clap it: gar-den, pen-cil.",
      "The hyphen goes at the end of the first line, not at the start of the next line.",
      "Never split a word that has only one syllable, like school or bright. Move the whole word to the next line instead.",
      "In some questions, a | mark shows where the first line ends: gar- | den."
    ],
    words: [
      { term: "hyphen", means: "a short line (-) that joins or splits words" },
      { term: "syllable", means: "one beat in a word, like the two beats in pen-cil" }
    ],
    example: {
      label: "Example",
      lines: ["Yesterday we planted seeds in the gar-", "den behind our school."],
      note: "Garden has two beats: gar-den. The word is split between the beats, and the hyphen goes at the end of the first line, right after gar."
    },
    tip: "The test may show a word broken across two lines and ask if it is split correctly. Clap the word. The break must fall between two beats, and the hyphen must end the first line."
  },
  learn: [
    {
      show: ["Rosa found a tiny tur-", "tle near the creek."],
      ask: "Is the word turtle split correctly?",
      steps: [
        "Find the broken word: tur- ends the first line, and tle starts the next.",
        "Clap turtle: tur-tle. It has two beats.",
        "Check the split. It falls between the beats, and the hyphen is at the end of the first line."
      ],
      answer: "Yes. Turtle is split correctly, between its syllables tur and tle."
    },
    {
      show: ["We walked to the scho-", "ol in the rain."],
      ask: "Is the word school split correctly?",
      steps: [
        "Clap school. It has only one beat.",
        "A word with one beat can never be split.",
        "Move the whole word school down to the next line."
      ],
      answer: "No. School has only one syllable, so it should not be split. Write the whole word on the next line."
    }
  ],
  parent: "Clap out long words together, like wa-ter-mel-on or bas-ket-ball. Then write one on paper, split it at a clap with a hyphen at the end of the line, and let your child check your work.",
  passages: [],
  practice: [
    { id: "SK-GUM3-8-P1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Look at how the word pumpkin is split. Is it split correctly?",
      stem: ["Our class grew a pump-", "kin in the school garden."],
      choices: [
        { text: "Yes, because it is split between the syllables pump and kin.", correct: true },
        { text: "No, because the hyphen should go at the start of the next line." },
        { text: "No, because pumpkin has only one syllable and cannot be split." },
        { text: "No, because it should be split between the letters pu and mpkin." }
      ],
      clue: "Clap the word pumpkin. Count the beats. Then check where the hyphen sits.",
      why: "The answer is \"Yes, because it is split between the syllables pump and kin.\" Pumpkin has two beats, pump-kin. The split falls between them, and the hyphen is at the end of the first line." },
    { id: "SK-GUM3-8-P2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word could be split with a hyphen at the end of a line?",
      choices: [
        { text: "window", correct: true },
        { text: "school" },
        { text: "bright" },
        { text: "friend" }
      ],
      clue: "Clap each word. A word can only be split if it has more than one beat.",
      why: "The answer is window. It has two syllables, win-dow, so it can be split between them. School, bright and friend each have only one syllable, so they can never be split." },
    { id: "SK-GUM3-8-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Each word was split at the end of a line. The | mark shows where the first line ends. Is each split correct?",
      cols: ["Correct", "Not correct"],
      rows: [
        { text: "rab- | bit", answer: 0 },
        { text: "wi- | ndow", answer: 1 },
        { text: "sis- | ter", answer: 0 },
        { text: "bri- | ght", answer: 1 }
      ],
      clue: "Clap each word. Does the break fall between two beats? Remember that a one-beat word is never split.",
      why: "Rab-bit and sis-ter are split between their syllables, so they are correct. Window should be split as win- | dow. Bright has only one syllable, so it should not be split at all." },
    { id: "SK-GUM3-8-P4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "The | mark shows where the first line ends. Choose the TWO words that are split correctly.",
      choices: [
        { text: "bas- | ket", correct: true },
        { text: "doc- | tor", correct: true },
        { text: "gard- | en" },
        { text: "mo- | nkey" },
        { text: "jum- | p" }
      ],
      clue: "Clap each word slowly. The break must fall exactly between two beats.",
      why: "The answers are bas- | ket and doc- | tor. Each is split between its two syllables. Garden should be gar- | den, monkey should be mon- | key, and jump has only one syllable, so it should not be split." },
    { id: "SK-GUM3-8-P5", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "The word birthday will not fit at the end of a line. The | mark shows where the line ends. Choose the correct way to split it.",
      text: "Split it like this: {0}",
      slots: [{ options: ["bir- | thday", "birth- | day", "birthd- | ay"], answer: 1 }],
      clue: "Clap birthday. Where does the first beat end?",
      why: "The answer is birth- | day. Birthday has two syllables, birth and day, so the break goes between them." }
  ],
  test: [
    { id: "SK-GUM3-8-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Three words are split at the ends of lines. Which word is split correctly?",
      stem: ["On Saturday we walked to the mark-", "et and bought a bas-", "ket of peaches and some ho-", "ney for Grandma."],
      choices: [
        { text: "basket", correct: true },
        { text: "market" },
        { text: "honey" }
      ],
      clue: "Clap each split word. Check whether each break falls between two beats.",
      why: "The answer is basket. It is split as bas- and ket, between its syllables. Market should be split as mar- and ket, and honey should be split as hon- and ey." },
    { id: "SK-GUM3-8-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "The word butterfly is split at the end of the first line. The | mark shows where a line ends. Which is another correct way to split it?",
      stem: ["The puppy chased a butter-", "fly across the yard."],
      choices: [
        { text: "but- | terfly", correct: true },
        { text: "butt- | erfly" },
        { text: "bu- | tterfly" },
        { text: "butterf- | ly" }
      ],
      clue: "Clap butterfly. It has three beats. A break can fall between any two of them.",
      why: "The answer is but- | terfly. Butterfly has three syllables, but-ter-fly, so it can be split after but or after butter. The other splits break a syllable apart." },
    { id: "SK-GUM3-8-T3", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO words that should never be split at the end of a line.",
      choices: [
        { text: "night", correct: true },
        { text: "clown", correct: true },
        { text: "napkin" },
        { text: "turtle" },
        { text: "popcorn" }
      ],
      clue: "Clap each word. Which ones have only one beat?",
      why: "The answers are night and clown. Each has only one syllable, so it can never be split. Napkin (nap-kin), turtle (tur-tle) and popcorn (pop-corn) each have two syllables." },
    { id: "SK-GUM3-8-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Each word was split at the end of a line. The | mark shows where the first line ends. Is each split correct?",
      cols: ["Correct", "Not correct"],
      rows: [
        { text: "won- | derful", answer: 0 },
        { text: "kit- | ten", answer: 0 },
        { text: "yesterd- | ay", answer: 1 },
        { text: "hu- | ngry", answer: 1 }
      ],
      clue: "Clap each word. Does each break fall exactly between two beats?",
      why: "Won- | derful and kit- | ten are split between syllables, so they are correct. Yesterday should be split as yes- | terday or yester- | day, and hungry should be split as hun- | gry." },
    { id: "SK-GUM3-8-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "A student split the word rainbow at the end of a line. What is wrong?",
      stem: ["Grandpa and I watched the rain", "-bow over the lake."],
      choices: [
        { text: "The hyphen should be at the end of the first line.", correct: true },
        { text: "Rainbow has only one syllable, so it cannot be split." },
        { text: "The word should be split between rai and nbow." },
        { text: "A hyphen should never be used to split a word." }
      ],
      clue: "Clap rainbow and check where the break falls. Then look at where the hyphen was placed.",
      why: "The answer is \"The hyphen should be at the end of the first line.\" Rainbow is split in the right place, between rain and bow, but the hyphen was put at the start of the next line. It should read rain- on the first line and bow on the next." }
  ]
});

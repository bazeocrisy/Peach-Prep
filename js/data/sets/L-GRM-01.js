/* L-GRM-01 — Words that change. Grammar (GUM Master and Reinforce rows only). */
PP.addSet({
  id: "L-GRM-01",
  section: "language",
  kind: "grammar",
  title: "Words that change",
  blurb: "Special plurals, special past-tense verbs, -s/-es/-ies, group and idea nouns, and pronouns like me and myself.",
  passages: [],
  items: [
    {
      id: "L-GRM-01-1",
      type: "dropdown",
      points: 1,
      std: ["3.L.GC.1:M:form-and-use-irregular-plural-nouns"],
      dok: 1,
      prompt: "Choose the word that correctly completes the sentence.",
      text: "We counted six {0} swimming in the pond at the farm.",
      slots: [
        { options: ["gooses", "geese", "geeses", "goose"], answer: 1 }
      ],
      clue: "Some nouns do not add -s to mean more than one. They change their spelling instead, like one man and two men, or one child and two children.",
      why: "The answer is geese. Goose is a special noun. To mean more than one, it changes to geese. We never add -s or -es to it."
    },
    {
      id: "L-GRM-01-2",
      type: "dropdown",
      points: 2,
      std: ["3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"],
      dok: 2,
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Grandpa {0} us to the lake last Saturday, and we {1} three fish.",
      slots: [
        { options: ["taked", "takes", "took", "tooked"], answer: 2 },
        { options: ["catched", "caught", "catch", "caughted"], answer: 1 }
      ],
      clue: "Last Saturday already happened, so both verbs must tell about the past. Some verbs do not add -ed in the past. Say each choice aloud in the sentence and listen.",
      why: "The answers are took and caught. Take and catch are special verbs. In the past, take becomes took and catch becomes caught. Taked and catched are not correct in school writing."
    },
    {
      id: "L-GRM-01-3",
      type: "mc",
      points: 1,
      std: ["3.L.GC.1:M:form-and-use-irregular-plural-nouns"],
      dok: 2,
      prompt: "Which sentence is correct?",
      choices: [
        { text: "The two mice hid under the old porch steps.", correct: true },
        { text: "The dentist checked all of my tooths today." },
        { text: "Three mans fixed the fence by the barn." },
        { text: "The childs lined up for the school bus." }
      ],
      clue: "Look at each word that means more than one. Some nouns change their spelling instead of adding -s.",
      why: "The answer is \"The two mice hid under the old porch steps.\" One mouse, two mice. The other sentences should say teeth, men and children."
    },
    {
      id: "L-GRM-01-4",
      type: "match",
      points: 2,
      std: ["3.L.GC.1:R:form-regular-plural-nouns-with-s-or-es", "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"],
      dok: 2,
      prompt: "How does each word change to mean more than one? Sort each word by its rule.",
      cols: ["Add -s", "Add -es", "Change y to i and add -es"],
      rows: [
        { text: "fox", answer: 1 },
        { text: "cherry", answer: 2 },
        { text: "monkey", answer: 0 },
        { text: "bench", answer: 1 },
        { text: "pony", answer: 2 },
        { text: "kite", answer: 0 }
      ],
      clue: "Words that end in s, x, z, ch or sh add -es. A word that ends in a consonant and then y changes y to i and adds -es. If a vowel comes right before the y, just add -s.",
      why: "Fox and bench add -es: foxes, benches. Cherry and pony end in a consonant and y, so they become cherries and ponies. Monkey has a vowel (e) before the y, so it just adds -s: monkeys. Kite just adds -s: kites."
    },
    {
      id: "L-GRM-01-5",
      type: "dropdown",
      points: 1,
      std: ["3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"],
      dok: 1,
      prompt: "Choose the word that correctly completes the sentence.",
      text: "My sister {0} her spelling words at the kitchen table every evening.",
      slots: [
        { options: ["studys", "study", "studyes", "studies"], answer: 3 }
      ],
      clue: "The sentence tells about one person, so the verb needs an ending. Look closely at the last letter of study. What happens to a y at the end of a word when you add an ending?",
      why: "The answer is studies. My sister is one person, so the verb needs an ending. Study ends in d and then y, so the y changes to i and we add -es."
    },
    {
      id: "L-GRM-01-6",
      type: "hottext",
      points: 1,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      dok: 2,
      prompt: "Select the sentence that has an error.",
      options: [
        "Kayla made herself a turkey sandwich for lunch.",
        "The twins painted the birdhouse by themselves.",
        "I reminded myself to feed the fish.",
        "Marcus taught hisself how to juggle three balls.",
        "The cat cleaned itself in the sunny window."
      ],
      answer: [3],
      pick: 1,
      clue: "Words that end in -self or -selves point back to the person who did the action. Check that each one is the right form for its person.",
      why: "The error is in \"Marcus taught hisself how to juggle three balls.\" Hisself is not correct in school writing. Use himself: \"Marcus taught himself how to juggle three balls.\""
    },
    {
      id: "L-GRM-01-7",
      type: "mc",
      points: 1,
      std: ["3.L.GC.1:M:use-collective-and-abstract-nouns"],
      dok: 1,
      prompt: "Read the sentence: \"The firefighter showed great courage during the storm.\" Which word in the sentence is an abstract noun?",
      choices: [
        { text: "courage", correct: true },
        { text: "firefighter" },
        { text: "storm" },
        { text: "showed" }
      ],
      clue: "An abstract noun names an idea or a feeling. You cannot see it, hear it or touch it.",
      why: "The answer is courage. Courage is a way of being brave, so it is an idea, not a thing you can touch. You can see a firefighter and hear a storm. Showed is a verb."
    },
    {
      id: "L-GRM-01-8",
      type: "ms",
      points: 2,
      std: ["3.L.GC.1:M:use-collective-and-abstract-nouns"],
      dok: 2,
      prompt: "A collective noun names a group as one thing. Choose the TWO sentences that use a collective noun.",
      choices: [
        { text: "A flock of birds flew over the barn.", correct: true },
        { text: "The team cheered after the last game.", correct: true },
        { text: "The puppy chased a red ball across the yard." },
        { text: "Two horses ran across the field." },
        { text: "Grandma baked bread for the neighbors." }
      ],
      pick: 2,
      clue: "Look for one word that stands for a whole group of people or animals. A plural word like cats is not a collective noun.",
      why: "The answers are \"A flock of birds flew over the barn.\" and \"The team cheered after the last game.\" Flock names a group of birds, and team names a group of players. Horses is a plural noun, not a group word."
    },
    {
      id: "L-GRM-01-9",
      type: "dropdown",
      points: 1,
      std: ["3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"],
      dok: 2,
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The librarian gave Jada and {0} new bookmarks.",
      slots: [
        { options: ["I", "me", "myself", "mine"], answer: 1 }
      ],
      clue: "Cover up \"Jada and.\" Then try each word by itself after \"gave.\"",
      why: "The answer is me. Without Jada, the sentence says \"The librarian gave me new bookmarks.\" Me is the word to use after an action word like gave. We use myself only when the same person does the action and gets it, like \"I helped myself.\" Here the librarian does the giving, so myself does not fit."
    },
    {
      id: "L-GRM-01-10",
      type: "mc",
      points: 1,
      std: ["3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"],
      dok: 2,
      prompt: "Read the sentence: \"The wind BLOWED the leaves across our yard.\" What is the correct way to write the word in ALL capital letters?",
      choices: [
        { text: "blew", correct: true },
        { text: "blown" },
        { text: "blewed" },
        { text: "No change" }
      ],
      clue: "Blow is a special verb. It does not add -ed to tell about the past. Say \"Yesterday the wind ___ the leaves\" with each choice.",
      why: "The answer is blew. Blow is a special verb, so the past tense is blew, not blowed. Blew already tells about the past, so it never gets an -ed ending, and blown does not fit by itself after \"The wind.\" \"The wind blew the leaves\" is correct."
    }
  ]
});

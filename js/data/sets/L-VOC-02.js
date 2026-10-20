/*
 * L-VOC-02 — Vocabulary: Word parts.
 * Prefixes un-, re-, dis-, pre-, mis-; suffixes -ful, -less, -ly, -er, -able, -ness (3.L.V.2.a);
 * affixes that signal part of speech (3.L.V.2.b); building words from parts (3.L.V.2.c);
 * a common root (port) and root words.
 * Standalone set (SPEC §5b): no passage. A mini-paragraph sits in the item's `stem`.
 */
PP.addSet({
  id: "L-VOC-02",
  section: "language",
  kind: "vocabulary",
  title: "Word parts",
  blurb: "Use prefixes, suffixes and roots to figure out and build words.",
  passages: [],
  items: [
    {
      id: "L-VOC-02-1",
      type: "mc",
      points: 1,
      std: ["3.L.V.2.a"],
      dok: 1,
      prompt: "Read the sentence. \"Our kitten likes to disappear under the bed whenever the vacuum turns on.\" The prefix dis- means \"not\" or \"the opposite of.\" What does disappear mean?",
      choices: [
        { text: "to go out of sight", correct: true },
        { text: "to show up again" },
        { text: "to show up early" },
        { text: "to show up by mistake" }
      ],
      clue: "Find the base word after dis-. Then think of the opposite of that word.",
      why: "The answer is \"to go out of sight.\" Disappear is dis- + appear. To appear is to come into sight, so to disappear is the opposite: to go out of sight. The kitten hides under the bed."
    },
    {
      id: "L-VOC-02-2",
      type: "match",
      points: 2,
      std: ["3.L.V.2.a"],
      dok: 1,
      prompt: "Each word begins with a prefix. Match each word to the meaning of its prefix.",
      cols: ["not", "before", "wrongly", "again"],
      rows: [
        { text: "unsafe", answer: 0 },
        { text: "preheat", answer: 1 },
        { text: "misread", answer: 2 },
        { text: "refill", answer: 3 },
        { text: "disobey", answer: 0 }
      ],
      clue: "Cover the prefix and read the base word. Then ask what the prefix adds to the meaning.",
      why: "Un- in unsafe means \"not\" (not safe). Pre- in preheat means \"before\" (heat before). Mis- in misread means \"wrongly\" (read wrongly). Re- in refill means \"again\" (fill again). Dis- in disobey also means \"not\" (not obey)."
    },
    {
      id: "L-VOC-02-3",
      type: "dropdown",
      points: 1,
      std: ["3.L.V.2.a"],
      dok: 2,
      prompt: "Choose the word that best completes the sentence.",
      text: "The old flashlight was {0} because its batteries were dead and it would not turn on.",
      slots: [
        { options: ["useful", "useless", "usable"], answer: 1 }
      ],
      clue: "The suffix -ful means \"full of,\" -less means \"without,\" and -able means \"can be.\" Which ending fits a flashlight that will not turn on?",
      why: "The answer is useless. The suffix -less means \"without,\" so useless means without use. Nobody can use a flashlight with dead batteries that will not turn on."
    },
    {
      id: "L-VOC-02-4",
      type: "mc",
      points: 1,
      std: ["3.L.V.2.b"],
      dok: 2,
      prompt: "Read the sentence. \"The turtle moved slowly across the warm sand.\" Adding -ly to slow makes the word slowly. What job does slowly do in this sentence?",
      choices: [
        { text: "It tells how the turtle moved.", correct: true },
        { text: "It tells what kind of sand it was." },
        { text: "It names the animal in the sentence." },
        { text: "It shows the action the turtle did." }
      ],
      clue: "The suffix -ly often makes an adverb. Adverbs tell more about a verb. What is the verb in this sentence?",
      why: "The answer is \"It tells how the turtle moved.\" The -ly ending makes slowly an adverb, and it tells how the turtle moved. The word warm tells what kind of sand, turtle names the animal, and moved is the action."
    },
    {
      id: "L-VOC-02-5",
      type: "ms",
      points: 2,
      std: ["3.L.V.2.b"],
      dok: 2,
      prompt: "An adjective is a word that describes a noun. Which TWO words are adjectives made by adding a suffix to a base word?",
      pick: 2,
      choices: [
        { text: "careful", correct: true },
        { text: "fearless", correct: true },
        { text: "quickly" },
        { text: "teacher" },
        { text: "kindness" },
        { text: "replay" }
      ],
      clue: "Some suffixes make describing words, some make words that tell how, and some make words that name a person or thing. Try each word in this blank: The dog was very ___.",
      why: "The answers are careful and fearless. The suffixes -ful and -less make adjectives: the dog was very careful, the dog was very fearless. Quickly ends in -ly, which makes an adverb. Teacher (-er) names a person, and kindness (-ness) names an idea. Replay has a prefix, not a suffix."
    },
    {
      id: "L-VOC-02-6",
      type: "ebsr",
      points: 2,
      std: ["3.L.V.2.a", "3.L.V.3.a"],
      dok: 2,
      prompt: "Read the paragraph. Then answer Part A and Part B.",
      stem: [
        "Our school got new lunch trays this year. They come in red, blue, and green. Each tray has a spot for milk and a spot for fruit. The trays use thick, hard plastic, so they are unbreakable. Even when a tray falls off a table, it stays in one piece."
      ],
      partA: {
        prompt: "Part A: What does unbreakable mean?",
        choices: [
          { text: "not able to be broken", correct: true },
          { text: "able to be broken again" },
          { text: "broken before anyone used it" },
          { text: "easy to break into pieces" }
        ]
      },
      partB: {
        prompt: "Part B: Which sentence from the paragraph BEST helps you know what unbreakable means?",
        choices: [
          { text: "Our school got new lunch trays this year." },
          { text: "They come in red, blue, and green." },
          { text: "Each tray has a spot for milk and a spot for fruit." },
          { text: "Even when a tray falls off a table, it stays in one piece.", correct: true }
        ]
      },
      clue: "Split unbreakable into a prefix, a base word and a suffix, and think about what each part means. Then read the paragraph again. Which sentence shows that meaning in action?",
      why: "Part A: The answer is \"not able to be broken.\" Un- means not, break is the base word, and -able means can be, so unbreakable means not able to be broken. Part B: The answer is \"Even when a tray falls off a table, it stays in one piece.\" A tray that falls and stays in one piece did not break. The other sentences tell when the school got the trays, their colors and their spots for food, but not whether they can break."
    },
    {
      id: "L-VOC-02-7",
      type: "dropdown",
      points: 2,
      std: ["3.L.V.2.b", "3.L.V.2.c"],
      dok: 2,
      prompt: "Choose the word that correctly completes each sentence.",
      text: "Mia was {0} when the rain canceled her picnic. The {1} of the gray sky made her want to stay inside.",
      slots: [
        { options: ["happily", "unhappy", "happiness"], answer: 1 },
        { options: ["darken", "darkly", "darkness"], answer: 2 }
      ],
      clue: "After \"Mia was,\" you need a word that describes how Mia felt. After \"The,\" you need a word that names a thing. Look at the beginning and the end of each choice. What kind of word does each one make?",
      why: "The first answer is unhappy. After \"Mia was\" you need a describing word. Happily (-ly) tells how, and happiness (-ness) names a thing, so neither fits. Unhappy describes how Mia felt. The second answer is darkness. After \"The\" you need a word that names a thing, and the suffix -ness makes that kind of word: darkness means the state of being dark. Darken is an action, and darkly tells how."
    },
    {
      id: "L-VOC-02-8",
      type: "hottext",
      points: 1,
      std: ["3.L.V.2.a"],
      dok: 2,
      prompt: "Some words start with the letters p-r-e but do not have the prefix pre-. Which sentence has a word with the prefix pre-, meaning \"before\"?",
      options: [
        "Mom bought a warm pretzel at the county fair.",
        "At the theater, we watched a preview of a new cartoon.",
        "Grandma pressed flowers between the pages of a heavy book.",
        "My sister drew a pretty picture of our cat."
      ],
      answer: [1],
      pick: 1,
      clue: "Cover the letters p-r-e in each word. If a real word is left, and the meaning is \"before\" + that word, you found the prefix.",
      why: "The answer is \"At the theater, we watched a preview of a new cartoon.\" Preview is pre- + view, and a preview is a short look at something before you see all of it. In pretzel, pressed and pretty, taking away p-r-e does not leave a real word, so pre- is not a prefix in those words."
    },
    {
      id: "L-VOC-02-9",
      type: "mc",
      points: 1,
      std: ["3.L.V.2.a"],
      dok: 2,
      prompt: "The root port means \"carry.\" Which word means \"able to be carried\"?",
      choices: [
        { text: "portable", correct: true },
        { text: "transport" },
        { text: "report" },
        { text: "breakable" }
      ],
      clue: "Break each word into its parts. Which part means carry? Which part means able to be? Then put the meanings together.",
      why: "The answer is portable. It is port (carry) + -able (able to be), so it means able to be carried, like a portable fan. Transport and report have port, but they do not have -able. Breakable has -able, but it means able to be broken, not carried."
    },
    {
      id: "L-VOC-02-10",
      type: "mc",
      points: 1,
      std: ["3.L.V.2.a"],
      dok: 2,
      prompt: "Read the sentence. \"The best singer in the choir sang the first song.\" What does the suffix -er mean in the word singer?",
      choices: [
        { text: "a person who", correct: true },
        { text: "more than" },
        { text: "again" },
        { text: "without" }
      ],
      clue: "The ending -er does not always mean the same thing. Think about what a singer does. Then try each meaning with the base word sing.",
      why: "The answer is \"a person who.\" A singer is a person who sings. The -er in faster or taller means more than, but singer is not comparing anything. It names the person in the choir who sang."
    }
  ]
});

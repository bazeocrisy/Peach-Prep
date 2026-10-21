/*
 * L-VOC-03 — Vocabulary: Word relationships.
 * Synonyms and antonyms, homophones and homographs (3.L.V.3.b); shades of meaning among
 * closely related verbs and adjectives (3.L.V.3.c); dictionary use (3.L.V.3.d);
 * precise word choice (3.L.V.3.e).
 * Standalone set (SPEC §5b): no passage. Dictionary entries, guide words and sentences to
 * compare sit in the item's `stem`, one line per string.
 */
PP.addSet({
  id: "L-VOC-03",
  section: "language",
  kind: "vocabulary",
  title: "Word relationships",
  blurb: "Synonyms, antonyms, sound-alike words, shades of meaning and the dictionary.",
  passages: [],
  items: [
    {
      id: "L-VOC-03-1",
      type: "match",
      points: 2,
      std: ["3.L.V.3.b"],
      dok: 1,
      prompt: "Are the two words in each pair synonyms or antonyms? Match each pair to the right group.",
      cols: ["Synonyms (same meaning)", "Antonyms (opposite meaning)"],
      rows: [
        { text: "brave – fearless", answer: 0 },
        { text: "shallow – deep", answer: 1 },
        { text: "begin – start", answer: 0 },
        { text: "rough – smooth", answer: 1 }
      ],
      clue: "Try using each word in the same sentence. If both words make the sentence mean the same thing, they are synonyms. If they flip the meaning, they are antonyms.",
      why: "Brave and fearless are synonyms. Begin and start are synonyms. Shallow and deep are antonyms, because shallow water is not deep. Rough and smooth are antonyms, because a smooth surface has no bumps and a rough one does."
    },
    {
      id: "L-VOC-03-2",
      type: "dropdown",
      points: 1,
      std: ["3.L.V.3.b"],
      dok: 2,
      prompt: "Choose the word that best completes the sentence.",
      text: "The first night at camp was noisy, but the second night was so {0} that we could hear the crickets chirping.",
      slots: [
        { options: ["loud", "quiet", "crowded"], answer: 1 }
      ],
      clue: "The word but tells you the second night was DIFFERENT from the first. What would a night have to be like for you to hear crickets?",
      why: "The answer is quiet. The word but shows a change, so the second night was the opposite of noisy. Quiet is an antonym of noisy, and it was quiet enough to hear the crickets."
    },
    {
      id: "L-VOC-03-3",
      type: "mc",
      points: 1,
      std: ["3.L.V.3.b"],
      dok: 1,
      prompt: "Homophones are words that sound the same but have different spellings and meanings. Which pair of words are homophones?",
      choices: [
        { text: "blew – blue", correct: true },
        { text: "wind – wind" },
        { text: "big – large" },
        { text: "hot – cold" }
      ],
      clue: "Say each pair out loud. Do the two words sound exactly the same? Then check: are they spelled differently, and do they mean different things?",
      why: "The answer is blew – blue. They sound the same, but they are spelled differently and mean different things: blew is what the wind did, and blue is a color. Wind and wind are spelled the same, so they are not homophones. They are homographs: one means moving air, and the other means to wrap around. Big and large are synonyms, and hot and cold are antonyms."
    },
    {
      id: "L-VOC-03-4",
      type: "mc",
      points: 1,
      std: ["3.L.V.3.b"],
      dok: 2,
      prompt: "Read the two sentences. The word wind is spelled the same way in both. How are the two words different?",
      stem: [
        "The wind blew the kite high into the sky.",
        "Please wind the string around the stick."
      ],
      choices: [
        { text: "They sound different and have different meanings.", correct: true },
        { text: "They sound the same and have the same meaning." },
        { text: "They sound the same but have different meanings." },
        { text: "They sound different but have the same meaning." }
      ],
      clue: "Read each sentence out loud. Listen to the vowel sound in wind each time. Then think about what wind means in each one.",
      why: "The answer is \"They sound different and have different meanings.\" In the first sentence, wind rhymes with pinned and means moving air. In the second, wind rhymes with kind and means to wrap around. Words like this are called homographs."
    },
    {
      id: "L-VOC-03-5",
      type: "order",
      points: 2,
      std: ["3.L.V.3.c"],
      dok: 2,
      prompt: "These verbs all describe moving on foot. Put them in order from the SLOWEST way to move to the FASTEST way to move.",
      steps: ["walk", "jog", "run", "sprint"],
      clue: "Picture someone doing each one. Which one is a normal, easy pace? Which one means going as fast as you possibly can?",
      why: "The order is walk, jog, run, sprint. You walk at an easy pace. To jog is to run slowly. To run is faster. To sprint is to run as fast as you can for a short way."
    },
    {
      id: "L-VOC-03-6",
      type: "dropdown",
      points: 1,
      std: ["3.L.V.3.c", "3.L.V.3.e"],
      dok: 2,
      prompt: "Choose the verb that best completes the sentence.",
      text: "Kayla looked up from her book for only a second to see who came in. She {0} at the door and went back to reading.",
      slots: [
        { options: ["stared", "glanced", "gazed"], answer: 1 }
      ],
      clue: "All three words mean to look. How long did Kayla look up?",
      why: "The answer is glanced. To glance is to look quickly. Kayla looked for only a second and went back to reading. Stared and gazed both mean to look at something for a long time."
    },
    {
      id: "L-VOC-03-7",
      type: "mc",
      points: 1,
      std: ["3.L.V.3.d"],
      dok: 2,
      prompt: "A dictionary page has two guide words at the top. All the words on the page come between these two words in ABC order. Which word would you find on this page?",
      stem: ["Guide words: garden – gift"],
      choices: [
        { text: "gentle", correct: true },
        { text: "game" },
        { text: "giraffe" },
        { text: "glad" }
      ],
      clue: "Compare letter by letter. A word on this page must come AFTER garden and BEFORE gift in ABC order.",
      why: "The answer is gentle. Gentle starts with g-e, and e comes after the a in garden and before the i in gift. Game comes before garden (m is before r), giraffe comes after gift (r is after f), and glad comes after gift (l is after i)."
    },
    {
      id: "L-VOC-03-8",
      type: "ebsr",
      points: 2,
      std: ["3.L.V.3.d", "3.L.V.3.a"],
      dok: 2,
      prompt: "Read the dictionary entry and the sentence. Then answer Part A and Part B.",
      stem: [
        "Dictionary entry for stamp:",
        "1. noun: a small paper square stuck on a letter to pay for mailing it",
        "2. noun: a tool that presses ink onto paper to make a picture",
        "3. verb: to bring your foot down hard",
        "4. verb: to press a mark onto something",
        "Sentence: \"Dad told us to stamp our feet on the mat to knock the snow off.\""
      ],
      partA: {
        prompt: "Part A: Which meaning of stamp is used in the sentence?",
        choices: [
          { text: "a small paper square stuck on a letter to pay for mailing it" },
          { text: "a tool that presses ink onto paper to make a picture" },
          { text: "to bring your foot down hard", correct: true },
          { text: "to press a mark onto something" }
        ]
      },
      partB: {
        prompt: "Part B: Which words from the sentence BEST help you choose that meaning?",
        choices: [
          { text: "Dad told us" },
          { text: "our feet", correct: true },
          { text: "on the mat" },
          { text: "the snow" }
        ]
      },
      clue: "First decide if stamp is a noun (a thing) or a verb (an action) in the sentence. Then find the words that show which meaning fits.",
      why: "Part A: The answer is \"to bring your foot down hard.\" Part B: The answer is \"our feet.\" In the sentence, stamp is an action, and the children stamp their feet to knock the snow off. That matches meaning 3."
    },
    {
      id: "L-VOC-03-9",
      type: "ms",
      points: 2,
      std: ["3.L.V.3.e"],
      dok: 2,
      prompt: "Rosa wrote this sentence: \"The puppy went across the yard to get the ball.\" Which TWO words could Rosa use in place of went to show exactly HOW the puppy moved?",
      pick: 2,
      choices: [
        { text: "dashed", correct: true },
        { text: "scampered", correct: true },
        { text: "moved" },
        { text: "came" },
        { text: "got" }
      ],
      clue: "Picture the puppy. Which words help you SEE the way it moved, not just that it moved?",
      why: "The answers are dashed and scampered. Dashed shows the puppy moved very fast, and scampered shows it ran with quick, light steps. Moved, came and got are as general as went, so they do not show how the puppy moved."
    },
    {
      id: "L-VOC-03-10",
      type: "mc",
      points: 1,
      std: ["3.L.V.3.c", "3.L.V.3.e"],
      dok: 2,
      prompt: "Read the sentence. \"The pond had turned to solid ice, and our breath made little clouds in the air.\" Which word BEST describes the weather?",
      choices: [
        { text: "cool" },
        { text: "chilly" },
        { text: "warm" },
        { text: "freezing", correct: true }
      ],
      clue: "Three of these words describe cold weather, but some are colder than others. How cold does it have to be for a pond to turn to solid ice?",
      why: "The answer is freezing. Water turns to ice only when it is freezing cold. Cool and chilly describe weather that is only a little cold, and warm is the opposite of cold."
    }
  ]
});

/* L-GRM-03 — Building strong sentences. Grammar (3.L.GC.2 a-d). */
PP.addSet({
  id: "L-GRM-03",
  section: "language",
  kind: "grammar",
  title: "Building strong sentences",
  blurb: "Simple, compound and complex sentences, verbs that stay in the same time, and exact describing words.",
  passages: [],
  items: [
    {
      id: "L-GRM-03-1",
      type: "match",
      points: 2,
      std: ["3.L.GC.2.a"],
      dok: 2,
      prompt: "Sort each sentence. Is it simple, compound or complex?",
      cols: ["Simple", "Compound", "Complex"],
      rows: [
        { text: "The bus stopped at the corner.", answer: 0 },
        { text: "My dog barks at squirrels, but he never catches one.", answer: 1 },
        { text: "Maria wore her raincoat because the sky looked cloudy.", answer: 2 },
        { text: "Ben and his sister planted a tree in the yard.", answer: 0 },
        { text: "The bell rang, and the students lined up for lunch.", answer: 1 },
        { text: "We stayed inside because the wind was very strong.", answer: 2 }
      ],
      clue: "A simple sentence is one complete sentence. A compound sentence is two complete sentences joined with a comma and a word like and, but or so. A complex sentence has a part that starts with a word like because and cannot stand alone.",
      why: "Simple: \"The bus stopped at the corner.\" and \"Ben and his sister planted a tree in the yard.\" (two people, but only one action and one sentence). Compound: the dog sentence and the bell sentence, each made of two sentences joined by but or and. Complex: the raincoat sentence and the wind sentence, because \"because the sky looked cloudy\" and \"because the wind was very strong\" cannot stand alone."
    },
    {
      id: "L-GRM-03-2",
      type: "mc",
      points: 1,
      std: ["3.L.GC.2.a"],
      dok: 2,
      prompt: "Which sentence is written correctly?",
      choices: [
        { text: "My uncle fixed the fence, and then he painted it white.", correct: true },
        { text: "Because the puppy was hungry and wanted its dinner." },
        { text: "The kite flew high it got stuck in a tall tree." },
        { text: "Running across the wet grass early in the morning." }
      ],
      clue: "A correct sentence tells who or what, and what they did, and it is a complete thought. Two sentences cannot be smashed together without a joining word.",
      why: "The answer is \"My uncle fixed the fence, and then he painted it white.\" It is two complete sentences joined with a comma and and. The puppy sentence and the grass sentence are not complete thoughts, and the kite sentence runs two sentences together."
    },
    {
      id: "L-GRM-03-3",
      type: "hottext",
      points: 1,
      std: ["3.L.GC.2.a"],
      dok: 2,
      prompt: "One of these is not a complete sentence. Select it.",
      options: [
        "The library opens at nine on Saturdays.",
        "Our teacher read us a funny poem.",
        "Since the old bridge needed repairs.",
        "Grandma grows peppers and tomatoes.",
        "The baby giggled at the puppy."
      ],
      answer: [2],
      pick: 1,
      clue: "Read each one by itself. Does it make you ask, \"Then what happened?\" If so, it is only part of a sentence.",
      why: "The answer is \"Since the old bridge needed repairs.\" It starts with since, so it leaves you waiting to find out what happened. It needs another part, like \"we took a different road.\""
    },
    {
      id: "L-GRM-03-4",
      type: "dropdown",
      points: 2,
      std: ["3.L.GC.2.b"],
      dok: 2,
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Tara {0} her grandmother's quilt to school yesterday, and everyone {1} the bright colors.",
      slots: [
        { options: ["brings", "brought", "will bring"], answer: 1 },
        { options: ["admires", "will admire", "admired"], answer: 2 }
      ],
      clue: "Find the word that tells when this happened. Both verbs must tell about that same time.",
      why: "The answers are brought and admired. The word yesterday tells us this happened in the past, so both verbs must be past tense."
    },
    {
      id: "L-GRM-03-5",
      type: "mc",
      points: 1,
      std: ["3.L.GC.2.b"],
      dok: 2,
      prompt: "Which sentence keeps the verbs in the same tense?",
      choices: [
        { text: "Mom baked a pie, and we ate it after dinner.", correct: true },
        { text: "Mom bakes a pie, and we ate it after dinner." },
        { text: "Mom baked a pie, and we eat it after dinner." },
        { text: "Mom will bake a pie, and we ate it after dinner." }
      ],
      clue: "Find both verbs in each sentence. Do they both tell about the past, both about now, or both about the future?",
      why: "The answer is \"Mom baked a pie, and we ate it after dinner.\" Baked and ate are both past tense. Each other sentence mixes two different times."
    },
    {
      id: "L-GRM-03-6",
      type: "hottext",
      points: 2,
      std: ["3.L.GC.2.b"],
      dok: 3,
      prompt: "Read Jayden's story. Select the TWO sentences where the verb tense does not match the rest of the story.",
      options: [
        "My family went to the outdoor market last Saturday.",
        "We bought peaches, corn, and fresh honey.",
        "A man plays the fiddle near the bread table.",
        "My little sister danced to the music.",
        "Then she asks for a peach of her own.",
        "We all walked home with full bags."
      ],
      answer: [2, 4],
      pick: 2,
      clue: "The story happened last Saturday, so it is told in the past. Look for verbs that sound like they are happening right now.",
      why: "The answers are \"A man plays the fiddle near the bread table.\" and \"Then she asks for a peach of her own.\" The story is told in the past, so they should say played and asked."
    },
    {
      id: "L-GRM-03-7",
      type: "dropdown",
      points: 1,
      std: ["3.L.GC.2.c"],
      dok: 2,
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The puppies in the pet store window {0} at everyone who walks by.",
      slots: [
        { options: ["barks", "bark", "barking"], answer: 1 }
      ],
      clue: "Who is doing the action? Skip the words \"in the pet store window\" and find the main noun. Is it one or more than one?",
      why: "The answer is bark. The ones barking are the puppies, which means more than one, so we say \"the puppies bark.\" Window is not the subject."
    },
    {
      id: "L-GRM-03-8",
      type: "hottext",
      points: 1,
      std: ["3.L.GC.2.c"],
      dok: 2,
      prompt: "Select the sentence that has an error.",
      options: [
        "My cousins live near the beach.",
        "The bell rings at three o'clock.",
        "The flowers in the pot needs more water.",
        "She and her brother ride the same bus.",
        "Our dog sleeps on a blanket by the door."
      ],
      answer: [2],
      pick: 1,
      clue: "Find who or what each sentence is about. One thing takes a verb with -s (the dog sleeps). More than one takes a verb without -s (the dogs sleep).",
      why: "The error is in \"The flowers in the pot needs more water.\" The sentence is about the flowers, which means more than one, so it should say \"the flowers need more water.\""
    },
    {
      id: "L-GRM-03-9",
      type: "mc",
      points: 1,
      std: ["3.L.GC.2.d"],
      dok: 2,
      prompt: "Read the sentence: \"Grandpa's soup tasted good.\" Which word BEST replaces good to tell exactly how the soup tasted?",
      choices: [
        { text: "spicy", correct: true },
        { text: "nice" },
        { text: "okay" },
        { text: "fine" }
      ],
      clue: "Some describing words are too general. Pick the one that helps the reader almost taste the soup.",
      why: "The answer is spicy. Spicy tells exactly how the soup tasted. Nice, okay and fine are like good: they do not give the reader a clear picture."
    },
    {
      id: "L-GRM-03-10",
      type: "dropdown",
      points: 1,
      std: ["3.L.GC.2.d"],
      dok: 2,
      prompt: "Choose the word that best tells how to close the door.",
      text: "The baby is asleep, so please close the door {0}.",
      slots: [
        { options: ["loudly", "quietly", "angrily", "carelessly"], answer: 1 }
      ],
      clue: "Think about why you need to close the door in a certain way. What could wake up the baby?",
      why: "The answer is quietly. The baby is asleep, so you need to close the door without making noise. Quietly tells exactly how to do it."
    }
  ]
});

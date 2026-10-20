/* L-GRM-02 — Capitals and punctuation. Grammar (GUM Master and Reinforce rows only). */
PP.addSet({
  id: "L-GRM-02",
  section: "language",
  kind: "grammar",
  title: "Capitals and punctuation",
  blurb: "Apostrophes, capital letters, commas, end marks, and joining words like and, but and so.",
  passages: [],
  items: [
    {
      id: "L-GRM-02-1",
      type: "mc",
      points: 1,
      std: ["3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"],
      dok: 2,
      prompt: "Which sentence is written correctly?",
      choices: [
        { text: "Leo's backpack hangs on a hook by the door.", correct: true },
        { text: "We cant go outside until the rain stops." },
        { text: "The bird's sing in the oak tree every morning." },
        { text: "Shes my partner for the science project." }
      ],
      clue: "An apostrophe shows that letters were left out (a contraction) or that something belongs to someone. A word that only means more than one does not get an apostrophe.",
      why: "The answer is \"Leo's backpack hangs on a hook by the door.\" The backpack belongs to Leo, so Leo's needs an apostrophe. The others should say can't and She's, and birds needs no apostrophe because it only means more than one bird."
    },
    {
      id: "L-GRM-02-2",
      type: "dropdown",
      points: 2,
      std: ["3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"],
      dok: 2,
      prompt: "Choose the words that correctly complete the sentence.",
      text: "{0} going to help in {1} garden this weekend.",
      slots: [
        { options: ["Were", "We're", "Wer'e"], answer: 1 },
        { options: ["Grandmas", "Grandma", "Grandma's"], answer: 2 }
      ],
      clue: "The first blank is a short way to say two words. The apostrophe goes where letters were left out. The second blank tells who the garden belongs to.",
      why: "The answers are We're and Grandma's. We're is short for \"we are,\" and the apostrophe takes the place of the a. Grandma's shows that the garden belongs to Grandma."
    },
    {
      id: "L-GRM-02-3",
      type: "hottext",
      points: 1,
      std: ["3.L.GC.1:R:capitalize-proper-nouns"],
      dok: 2,
      prompt: "Select the sentence that has an error.",
      options: [
        "Our family drove to Savannah for the Fourth of July.",
        "My friend Aiden was born in March.",
        "We hiked up stone mountain with my uncle last summer.",
        "The library does not open on Thanksgiving Day.",
        "Grandma mailed me a postcard from Texas."
      ],
      answer: [2],
      pick: 1,
      clue: "Names of special people, places, months and holidays begin with capital letters. Words like uncle and summer are not names.",
      why: "The error is in \"We hiked up stone mountain with my uncle last summer.\" Stone Mountain is the name of a real place, so both words need capitals. Uncle and summer are not names, so they stay lowercase."
    },
    {
      id: "L-GRM-02-4",
      type: "mc",
      points: 1,
      std: ["3.L.GC.1:R:capitalize-proper-nouns"],
      dok: 2,
      prompt: "Which sentence is written correctly?",
      choices: [
        { text: "Our class wrote letters to a pen pal in Ohio.", correct: true },
        { text: "My Teacher showed us a map of the Chattahoochee River." },
        { text: "We will go to the beach in july." },
        { text: "Uncle Ray lives on oak Street in Macon." }
      ],
      clue: "Check every word. Does each name have a capital? Does any plain word have a capital it should not have?",
      why: "The answer is \"Our class wrote letters to a pen pal in Ohio.\" Ohio is a name, and it has a capital. The others should say teacher (not a name), July (a month), and Oak Street (the name of a street)."
    },
    {
      id: "L-GRM-02-5",
      type: "ms",
      points: 2,
      std: ["3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"],
      dok: 2,
      prompt: "Choose the TWO sentences that use commas correctly.",
      choices: [
        { text: "We packed sandwiches, apples, and juice for the picnic.", correct: true },
        { text: "My grandmother lives in Albany, Georgia.", correct: true },
        { text: "We bought paint, brushes and, paper for art class." },
        { text: "The parade will be on June, 14, 2027." },
        { text: "Our new address is 12 Pine Road Valdosta, Georgia." }
      ],
      pick: 2,
      clue: "In a list, a comma goes after each item, before the word and. In a date, a comma goes between the day and the year. In an address, commas go between the street, the city and the state.",
      why: "The answers are \"We packed sandwiches, apples, and juice for the picnic.\" and \"My grandmother lives in Albany, Georgia.\" The list has commas after sandwiches and apples, and the city and state are split by a comma. The others should say \"brushes, and paper,\" \"June 14, 2027,\" and \"12 Pine Road, Valdosta, Georgia.\""
    },
    {
      id: "L-GRM-02-6",
      type: "mc",
      points: 1,
      std: ["3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"],
      dok: 1,
      prompt: "Nia is writing a letter to her aunt. Which greeting is written correctly?",
      choices: [
        { text: "Dear Aunt Lena,", correct: true },
        { text: "Dear, Aunt Lena" },
        { text: "Dear Aunt Lena." },
        { text: "dear Aunt Lena," }
      ],
      clue: "A letter greeting starts with a capital letter. The comma comes at the very end of the greeting, after the name.",
      why: "The answer is \"Dear Aunt Lena,\" with a capital D and a comma after the name. A greeting does not end with a period, and there is no comma between Dear and the name."
    },
    {
      id: "L-GRM-02-7",
      type: "mc",
      points: 1,
      std: ["3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"],
      dok: 2,
      prompt: "Read the two sentences: \"The storm knocked out the power in our neighborhood. We read books by flashlight all evening.\" Which is the best way to combine these sentences?",
      choices: [
        { text: "The storm knocked out the power in our neighborhood, so we read books by flashlight all evening.", correct: true },
        { text: "The storm knocked out the power in our neighborhood so, we read books by flashlight all evening." },
        { text: "The storm knocked out the power in our neighborhood, we read books by flashlight all evening." },
        { text: "The storm knocked out the power, in our neighborhood so we read books by flashlight all evening." }
      ],
      clue: "When you join two complete sentences, you need a joining word, and the comma goes right before that word.",
      why: "The answer is \"The storm knocked out the power in our neighborhood, so we read books by flashlight all evening.\" The joining word so tells why they used flashlights, and the comma goes before so. A comma alone cannot join two sentences."
    },
    {
      id: "L-GRM-02-8",
      type: "hottext",
      points: 1,
      std: ["3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"],
      dok: 2,
      prompt: "Each sentence joins two complete sentences with a joining word. Select the sentence that is missing a comma.",
      options: [
        "Maya likes to draw horses, and her brother likes to draw trains.",
        "The library was not open today, so we went to the park instead.",
        "We can play checkers after dinner or we can watch a movie about sharks.",
        "Dad turned on the porch light, but the backyard was still dark."
      ],
      answer: [2],
      pick: 1,
      clue: "Find the joining word in each sentence (and, but, or, so). Is there a comma right before it?",
      why: "The answer is \"We can play checkers after dinner or we can watch a movie about sharks.\" It joins two complete sentences with or, so it needs a comma after dinner, right before or."
    },
    {
      id: "L-GRM-02-9",
      type: "hottext",
      points: 2,
      std: ["3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"],
      dok: 2,
      prompt: "Select the TWO sentences that have the wrong end mark.",
      options: [
        "Do you know where my library book is?",
        "Watch out for that bee!",
        "Can we eat lunch outside today.",
        "Our garden has three rows of beans.",
        "What a great surprise that was!",
        "Where did you put the paintbrushes."
      ],
      answer: [2, 5],
      pick: 2,
      clue: "A sentence that asks something ends with a question mark. A sentence that tells something ends with a period. Strong feelings can end with an exclamation point.",
      why: "The answers are \"Can we eat lunch outside today.\" and \"Where did you put the paintbrushes.\" Both of them ask a question, so they should end with a question mark (?)."
    },
    {
      id: "L-GRM-02-10",
      type: "dropdown",
      points: 1,
      std: ["3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"],
      dok: 2,
      prompt: "Choose the joining word that makes the most sense.",
      text: "Sam wanted to play soccer, {0} his ankle still hurt from last week.",
      slots: [
        { options: ["so", "but", "or"], answer: 1 }
      ],
      clue: "Read both parts. Do they agree with each other, or does the second part go against the first part?",
      why: "The answer is but. Sam wanted to play, but his sore ankle is a problem. But joins two ideas that go against each other."
    }
  ]
});

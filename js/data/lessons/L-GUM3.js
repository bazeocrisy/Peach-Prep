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
      "To show that something belongs to one person or thing, add 's: the dog's bowl, Rosa's kite. Careful: 's can also stand for is, as in Rosa's ready. Try is in its place. If it makes sense, the word is a contraction.",
      "A word that only means more than one gets no apostrophe: three dogs, two kites.",
      "It's is short for it is or it has. Its with no apostrophe means \"belonging to it\": The bird flapped its wings. The same trick works for you're (you are) and they're (they are)."
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
    },
    {
      show: ["The snail (wont / won't) leave (its / it's) shell until the rain stops."],
      ask: "Which word is correct in each pair?",
      steps: [
        "First pair: will not squeezes into won't. The apostrophe takes the place of the o in not.",
        "Second pair: try it is. \"The snail will not leave it is shell\" does not make sense, so there is no apostrophe.",
        "Its with no apostrophe shows that the shell belongs to the snail."
      ],
      answer: "The snail won't leave its shell until the rain stops."
    }
  ],
  parent: "Hunt for apostrophes on cereal boxes, signs and mail together. For each one, ask your child: Is it a short word with letters left out, or does it show that something belongs to someone?",
  passages: [
    /* B6:passages:start */
    {
      id: "p1",
      title: "Getting Ready for the Pep Rally",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Every Thursday, our class helps Mr. Alvarez set up the gym.",
          "(2) This week, we are hanging banners for the big pep rally.",
          "(3) We wont have time to paint one more sign."
        ],
        [
          "(4) Our school has just one mascot, a tiger named Rumble.",
          "(5) The mascots costume was too big, so Simone pinned the sleeves.",
          "(6) The costume lost its tail, but it's still fun to wear."
        ],
        [
          "(7) By lunch, four banners were hanging from the ceiling.",
          "(8) Mr. Alvarez said he'll check the ropes before the rally.",
          "(9) On Friday, we hope the whole school will cheer!"
        ]
      ]
    },
    {
      id: "p2",
      title: "Stargazing on the Back Steps",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Saturday night, my sister and I watched the sky from our back steps.",
          "(2) The moon's light was so bright that we did not need a lamp.",
          "(3) Dad said that Jupiter isn't a star at all."
        ],
        [
          "(4) Mom's flashlight had a red cover, so it did not hurt our eyes.",
          "(5) My sister counted the star's in the Big Dipper.",
          "(6) We also saw an airplane, and it's lights blinked as it crossed the sky."
        ],
        [
          "(7) Then clouds rolled in, so we couldnt see anything else.",
          "(8) She's going to draw the sky tomorrow.",
          "(9) I hope the next clear night comes soon."
        ]
      ]
    },
    {
      id: "p3",
      title: "Flea Market Flyer",
      byline: "A third grader's draft",
      genre: "Student draft (flyer)",
      draft: true,
      paragraphs: [
        [
          "(1) Join us at the big Saturday flea market on Maple Street!",
          "(2) Families will sell toys, books, plants and old tools.",
          "(3) You can buy a used bike for five dollars."
        ],
        [
          "(4) Dont leave trash on the ground.",
          "(5) The school band's concert starts at noon.",
          "(6) Our principal's lemonade stand will be near the stage."
        ],
        [
          "(7) Kids can win prize's at the ring toss.",
          "(8) It's going to be a great day!",
          "(9) We hope you'll come."
        ],
        [
          "(10) Parking is free behind the church.",
          "(11) Come early to get the best deals!",
          "(12) We hope to see you there."
        ]
      ]
    },
    {
      id: "p4",
      title: "Our Toy Drive",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) In December, our class ran a toy drive for the hospital downtown.",
          "(2) Every morning, we checked the big cardboard box by the door.",
          "(3) Malik says the box wasnt even half full on Monday."
        ],
        [
          "(4) Imani found a teddy bear in the box, but the bears nose was missing.",
          "(5) The robot beeped when its batteries were new, and it's quiet now.",
          "(6) Our teacher said she'd drive everything to the hospital."
        ],
        [
          "(7) By Friday, we had counted nine puzzles and six games.",
          "(8) We felt proud of ourselves.",
          "(9) Thanks to everyone who gave a toy!"
        ],
        [
          "(10) Next year, we want to collect even more."
        ]
      ]
    },
    {
      id: "p5",
      title: "A Cookout at the Lake",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Sunday, my cousins and I went to a cookout at the lake.",
          "(2) Uncle Ray's grill was already hot when we got there.",
          "(3) We couldn't wait to eat."
        ],
        [
          "(4) Aunt Tia brought two big watermelons in her truck.",
          "(5) My cousin cut the watermelon's into thick slices.",
          "(6) A duck waddled over, and it's beak was full of bread."
        ],
        [
          "(7) Dad told me I shouldnt feed the ducks.",
          "(8) They're wild, and they find food on their own.",
          "(9) After lunch, the duck flapped its wings and flew away."
        ],
        [
          "(10) We packed up our chairs and drove home before dark."
        ]
      ]
    },
    {
      id: "p6",
      title: "Dog Wash Sign-Up Sheet",
      byline: "A third grader's draft",
      genre: "Student draft (sign)",
      draft: true,
      paragraphs: [
        [
          "(1) Bring your dog to our dog wash on Saturday morning!",
          "(2) We're raising money for the animal shelter.",
          "(3) Each wash costs four dollars."
        ],
        [
          "(4) Please keep your dog on it's leash.",
          "(5) We will have three big tubs and lots of towel's.",
          "(6) The shelter's director will thank every dog owner."
        ],
        [
          "(7) It's easy to sign up.",
          "(8) Just write your dog's name on the sheet.",
          "(9) We can't wait to meet your dog!"
        ],
        [
          "(10) Every dollar helps a dog find a new home.",
          "(11) Bring a friend, and bring a smile!",
          "(12) Thank you for helping us."
        ]
      ]
    }
    /* B6:passages:end */
  ],
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
        "Three frog's sat on a log.",
        "I'm happy that you're here."
      ],
      answer: [2], pick: 1,
      clue: "Look at each word with an apostrophe. Does each one stand for missing letters or show belonging? Or does a word just mean more than one?",
      why: "The error is in \"Three frog's sat on a log.\" Frogs just means more than one frog. Nothing belongs to them, so it should be frogs with no apostrophe." },
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
  /* B6:core:start */
  /* ---------- Expansion 2026-10-22, batch B6 (GUM Master) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test or testB.
     Author log: docs/expansion-2026-10-22/batches/B6-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          { ref: "SK-GUM3-1-P4" },
          { ref: "SK-GUM3-1-P5" },
          {
            id: "SK-GUM3-1-C03",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: ["p1"],
            prompt: "Sentence 3 of the draft needs an apostrophe. Which revision is correct?",
            choices: [
              { text: "We wo'nt have time to paint one more sign." },
              { text: "We won't have time to paint one more sign.", correct: true },
              { text: "We wont' have time to paint one more sign." },
              { text: "We will'nt have time to paint one more sign." }
            ],
            clue: "A contraction squeezes two words into one. Think of the two words first, then decide which letters were left out.",
            hints: [
              "A contraction squeezes two words into one. Think of the two words first, then decide which letters were left out.",
              "Read sentence 3 and say the two words that the short word stands for. Then look at where the letters are missing.",
              "In a contraction, the apostrophe is not placed at the end of the word. Check where each choice puts it."
            ],
            how: [
              "Find the short word in sentence 3 that is missing its apostrophe: wont. It stands for will not.",
              "Will not squeezes into won't. The apostrophe takes the place of the o in not, so it sits between n and t.",
              "The answer is \"We won't have time to paint one more sign.\" The other choices put the apostrophe in the wrong spot or squeeze the words together the wrong way."
            ],
            misconception: "A common mix-up is putting the apostrophe at the end of the word, or in the middle of the first part. It goes where the letters were left out.",
            why: "The answer is \"We won't have time to paint one more sign.\" Will not becomes won't, and the apostrophe stands where the o in not was left out. Wo'nt and wont' put the apostrophe in the wrong spot, and will'nt does not squeeze the words the way English does."
          },
          {
            id: "SK-GUM3-1-C04",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: ["p1"],
            prompt: "Sentence 5 of the draft needs an apostrophe. Choose the word that fixes it.",
            text: "The {0} costume was too big, so Simone pinned the sleeves.",
            slots: [
              {
                options: ["mascots", "mascot's", "mascots'"],
                answer: 1
              }
            ],
            clue: "Ask who or what the costume belongs to, and whether that is one or more than one.",
            hints: [
              "Ask who or what the costume belongs to, and whether that is one or more than one.",
              "Look at sentence 4 to see how many mascots the school has. Then read sentence 5.",
              "A word that only means more than one has no apostrophe. Decide whether more than one mascot is what the draft says."
            ],
            how: [
              "Ask who owns the costume. It belongs to the mascot.",
              "Sentence 4 says the school has just one mascot, so there is one owner. For one owner, add an apostrophe and s right after the word.",
              "The answer is mascot's. Mascots only means more than one, and mascots' is for more than one owner."
            ],
            misconception: "A common mix-up is leaving off the apostrophe because the word already ends in s once you add it. The apostrophe shows the costume belongs to one mascot.",
            why: "The answer is mascot's. Sentence 4 says the school has just one mascot, and the costume belongs to it, so the word needs 's. Mascots means more than one and shows no owner, and mascots' would mean the costume belongs to several mascots."
          },
          {
            id: "SK-GUM3-1-C05",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: ["p1"],
            prompt: "Sentence 6 uses both its and it's, and both are correct. Which explanation is right?",
            choices: [
              { text: "Its shows that the tail belongs to the costume, and it's is short for it is.", correct: true },
              { text: "It's shows that the tail belongs to the costume, and its is short for it is." },
              { text: "Both words show that something belongs to the costume, but only one needs an apostrophe." },
              { text: "Its is plural, so it has no apostrophe, and it's is singular, so it has one." }
            ],
            clue: "Say the sentence with the two words it is in place of each word. If the sentence still makes sense, that word is a contraction.",
            hints: [
              "Say the sentence with the two words it is in place of each word. If the sentence still makes sense, that word is a contraction.",
              "Try it on sentence 6. Read it once with it is in place of its, then again with it is in place of it's.",
              "The costume has one tail, so plural and singular will not help you here. Use the it is test on both words."
            ],
            how: [
              "Put it is in place of its: \"The costume lost it is tail.\" That does not make sense, so its is not a contraction.",
              "Its shows that the tail belongs to the costume, so it has no apostrophe.",
              "Put it is in place of it's: \"it is still fun to wear.\" That makes sense, so it's is short for it is.",
              "Check the other explanations: they swap the jobs, say both show belonging, or bring in plural and singular, which has nothing to do with it."
            ],
            misconception: "A common mix-up is thinking that its needs an apostrophe because it shows belonging, like Rosa's. Its is the exception.",
            why: "The answer is \"Its shows that the tail belongs to the costume, and it's is short for it is.\" Try it is in place of each word: it is tail makes no sense, but it is still fun to wear does. Its with no apostrophe shows belonging, and it's stands for it is. Plural and singular do not decide which one to use."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM3-1-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: ["p2"],
            prompt: "Select the TWO sentences in which an apostrophe correctly stands for missing letters.",
            targets: ["p2:1:2", "p2:1:3", "p2:2:1", "p2:2:3", "p2:3:2"],
            answer: ["p2:1:3", "p2:3:2"],
            pick: 2,
            clue: "A contraction is two words squeezed into one. Look for a short word you can stretch back into two words.",
            hints: [
              "A contraction is two words squeezed into one. Look for a short word you can stretch back into two words.",
              "Read the sentences with apostrophes in the draft. For each apostrophe, ask whether it shows belonging or stands for missing letters.",
              "Two of the apostrophes show that something belongs to someone. Look at the sentences that are left."
            ],
            how: [
              "For each sentence, find the word with an apostrophe and try to stretch it into two words.",
              "Isn't stretches into is not, and she's stretches into she is. Both make sense in their sentences.",
              "Moon's and Mom's show belonging: the light belongs to the moon, and the flashlight belongs to Mom. They cannot be stretched into two words that make sense.",
              "Sentence 6 has an apostrophe too, but it's lights does not make sense as it is lights, so that sentence is not a contraction."
            ],
            misconception: "A common mix-up is thinking every 's is a contraction. It can also show that something belongs to one person or thing.",
            why: "The answers are \"Dad said that Jupiter isn't a star at all.\" and \"She's going to draw the sky tomorrow.\" Isn't is short for is not, and she's is short for she is. Moon's and Mom's show belonging, and it's in sentence 6 cannot be stretched into two words that make sense."
          },
          {
            id: "SK-GUM3-1-C07",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: ["p2"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Sentence 6 of the draft has a mistake with an apostrophe. Which revision fixes it?",
              choices: [
                { text: "We also saw an airplane, and its' lights blinked as it crossed the sky." },
                { text: "We also saw an airplane, and it's light's blinked as it crossed the sky." },
                { text: "We also saw an airplane, and its lights blinked as it crossed the sky.", correct: true },
                { text: "We also saw an airplane, and it is lights blinked as it crossed the sky." }
              ]
            },
            partB: {
              prompt: "Which reason best explains the revision in Part A?",
              choices: [
                { text: "The word means it is, so it needs an apostrophe to show that two words were squeezed together." },
                { text: "The lights belong to the airplane, so the word shows belonging and has no apostrophe.", correct: true },
                { text: "The word shows that the airplane owns something, so it needs 's like Mom's." },
                { text: "The word is plural, so it needs an apostrophe after the letter s." }
              ]
            },
            clue: "Try it is in place of the word with the apostrophe. If the sentence stops making sense, the apostrophe is wrong.",
            hints: [
              "Try it is in place of the word with the apostrophe. If the sentence stops making sense, the apostrophe is wrong.",
              "For Part A, read sentence 6 with the two words it is in place of it's. For Part B, ask what the lights have to do with the airplane.",
              "In Part A, one choice adds an apostrophe after the s. Think about whether any word in English is spelled that way."
            ],
            how: [
              "Part A: read sentence 6 with it is in place of it's: \"it is lights blinked.\" That does not make sense, so the apostrophe is wrong.",
              "The lights belong to the airplane. The word that shows belonging to it has no apostrophe: its.",
              "Part A answer: \"We also saw an airplane, and its lights blinked as it crossed the sky.\"",
              "Part B answer: the lights belong to the airplane, so the word shows belonging and has no apostrophe. It's would only be right if it could mean it is."
            ],
            misconception: "A common mix-up is thinking that a word that shows belonging needs 's. With it, belonging is the one time you leave the apostrophe out.",
            why: "Part A: \"We also saw an airplane, and its lights blinked as it crossed the sky.\" Part B: \"The lights belong to the airplane, so the word shows belonging and has no apostrophe.\" It's means it is, and it is lights makes no sense. Its' is not a word, and light's would break the plain plural lights."
          },
          {
            id: "SK-GUM3-1-C08",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: ["p2"],
            prompt: "Which TWO changes would fix mistakes in the draft?",
            pick: 2,
            choices: [
              { text: "In sentence 3, change isn't to is'nt." },
              { text: "In sentence 5, change star's to stars.", correct: true },
              { text: "In sentence 4, change Mom's to Moms." },
              { text: "In sentence 7, change couldnt to couldn't.", correct: true },
              { text: "In sentence 2, change moon's to moons." }
            ],
            clue: "A good fix makes a word match its job. Check whether each word in the choices shows belonging, stands for two words, or just means more than one.",
            hints: [
              "A good fix makes a word match its job. Check whether each word in the choices shows belonging, stands for two words, or just means more than one.",
              "Look back at sentences 2, 3, 4, 5 and 7 in the draft. For each, decide whether the word is already doing its job correctly.",
              "Two of the changes would take an apostrophe out of a word that shows belonging. Check the other three."
            ],
            how: [
              "Check each sentence and decide whether its apostrophe is already doing a job.",
              "Moon's and Mom's show belonging, so they are correct. Isn't stands for is not, and the apostrophe is already where the o was left out.",
              "Sentence 5: star's only means more than one, so it should be stars.",
              "Sentence 7: couldnt stands for could not, so it needs the apostrophe where the o was left out: couldn't."
            ],
            misconception: "A common mix-up is taking the apostrophe out of a word that shows belonging, because it also ends in s.",
            why: "The answers are \"In sentence 5, change star's to stars.\" and \"In sentence 7, change couldnt to couldn't.\" Star's only means more than one, so it needs no apostrophe, and couldn't needs one in place of the o. Moon's and Mom's show belonging and are correct. Is'nt puts the apostrophe in the wrong place."
          },
          {
            id: "SK-GUM3-1-C09",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: [],
            prompt: "Choose the word that correctly completes the sentence.",
            text: "A hungry owl watched the {0} den, where one young fox slept.",
            slots: [
              {
                options: ["foxes", "fox's", "foxes'"],
                answer: 1
              }
            ],
            clue: "Decide who owns the den, and whether that is one animal or more than one.",
            hints: [
              "Decide who owns the den, and whether that is one animal or more than one.",
              "Look for the clue about how many foxes are in the den. Then ask whose den it is.",
              "Foxes is the plural of fox. Decide whether the sentence tells you that the den belongs to a group or to one animal."
            ],
            how: [
              "Ask who owns the den. It belongs to a fox.",
              "A den belongs to one animal here, so add an apostrophe and s right after the owner: fox's.",
              "Foxes means more than one fox, and nothing in the sentence shows an owner. Foxes' would mean the den belongs to several foxes."
            ],
            misconception: "A common mix-up is adding -es the way you do for more than one, when the word needs to show that something belongs to one animal.",
            why: "The answer is fox's. One fox owns the den, so the word needs an apostrophe and s. Foxes means more than one fox, and foxes' would mean the den belongs to several foxes."
          },
          {
            id: "SK-GUM3-1-C10",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: ["p2"],
            prompt: "Sentence 4 has Mom's with an apostrophe, and sentence 8 has She's with an apostrophe. Which explanation of the two words is right?",
            choices: [
              { text: "Mom's is short for Mom is, but She's shows that something belongs to her." },
              { text: "Both words show belonging, because every word with 's tells who owns something." },
              { text: "Neither word needs an apostrophe, because each one is only about one person." },
              { text: "Mom's shows that the flashlight belongs to Mom, but She's is short for she is.", correct: true }
            ],
            clue: "An apostrophe needs a job: missing letters, or belonging to one owner. Ask what job each word is doing.",
            hints: [
              "An apostrophe needs a job: missing letters, or belonging to one owner. Ask what job each word is doing.",
              "Read sentences 4 and 8 side by side. In each one, ask what comes right after the word with the apostrophe.",
              "Try stretching Mom's into Mom is in sentence 4. Check whether the sentence still makes sense."
            ],
            how: [
              "Ask what job each apostrophe is doing.",
              "In sentence 4, the flashlight belongs to Mom. Mom's shows belonging to one owner, so it is not a contraction.",
              "In sentence 8, She's stretches into she is, so the apostrophe stands for a missing letter.",
              "The answer is that Mom's shows that the flashlight belongs to Mom, but She's is short for she is."
            ],
            misconception: "A common mix-up is thinking every word that ends in 's is a contraction, or that every one shows belonging.",
            why: "The answer is \"Mom's shows that the flashlight belongs to Mom, but She's is short for she is.\" Mom's cannot be stretched into Mom is and still make sense, so the apostrophe shows belonging. She's stretches into she is, so its apostrophe stands for a missing letter."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM3-1-C11",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: ["p3"],
            prompt: "Select the TWO sentences in the flyer that have a mistake with an apostrophe.",
            targets: ["p3:2:1", "p3:2:2", "p3:3:1", "p3:3:2", "p3:3:3"],
            answer: ["p3:2:1", "p3:3:1"],
            pick: 2,
            clue: "Check every apostrophe, and every word that might need one. Ask what job it does.",
            hints: [
              "Check every apostrophe, and every word that might need one. Ask what job it does.",
              "Look at sentences 4 to 9. Check each word that has an apostrophe, and each word that should have one.",
              "Sentence 5 shows belonging and is written correctly. Check the other four."
            ],
            how: [
              "Go through each sentence and find the word that might need an apostrophe.",
              "Sentence 4: Dont is short for do not, so it needs an apostrophe: Don't.",
              "Sentence 7: prize's only means more than one, so it should be prizes.",
              "Sentence 5 (band's) shows belonging, sentence 8 (It's) stands for it is, and sentence 9 (you'll) stands for you will, so they are correct."
            ],
            misconception: "A common mix-up is spotting only one kind of mistake. Look for a missing apostrophe and for an extra one.",
            why: "The answers are sentence 4 and sentence 7. Dont needs an apostrophe because it is short for do not. Prize's has an apostrophe it does not need, because it only means more than one. Band's shows belonging, it's stands for it is, and you'll stands for you will."
          },
          {
            id: "SK-GUM3-1-C12",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: [],
            prompt: "Choose the words that correctly complete the note.",
            text: "The twins {0} here yet, so the relay {1} started.",
            slots: [
              {
                options: ["aren't", "are'nt", "arent"],
                answer: 0
              },
              {
                options: ["hasn't", "has'nt", "hasnt"],
                answer: 0
              }
            ],
            clue: "Each blank stands for two words squeezed into one. Say the two words first.",
            hints: [
              "Each blank stands for two words squeezed into one. Say the two words first.",
              "For each blank, stretch the short word into two words. Then think about where the letters are missing.",
              "In the second blank, a word that ends with nt and has no apostrophe is not a contraction. Decide about the first blank on your own."
            ],
            how: [
              "Blank 1: the twins are not here yet. Are not squeezes into aren't, with the apostrophe where the o in not was left out.",
              "Blank 2: the relay has not started. Has not squeezes into hasn't, with the apostrophe where the o in not was left out.",
              "Check the other options: are'nt and has'nt put the apostrophe in the wrong place, and arent and hasnt leave it out."
            ],
            misconception: "A common mix-up is leaving out the apostrophe, or putting it right after the first word.",
            why: "The answers are aren't and hasn't. Are not squeezes into aren't, and has not squeezes into hasn't. The apostrophe stands where the o in not was left out, so are'nt and has'nt are wrong, and arent and hasnt have no apostrophe at all."
          },
          {
            id: "SK-GUM3-1-C13",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: [],
            prompt: "This sentence from Coach's note has one mistake. Which revision fixes it?",
            stem: "Bring each players hat to the game on Friday.",
            choices: [
              { text: "Bring each players' hat to the game on Friday." },
              { text: "Bring each player's hat's to the game on Friday." },
              { text: "Bring each player's hat to the game on Friday.", correct: true },
              { text: "Bring each players's hat to the game on Friday." }
            ],
            clue: "Ask who owns the hat, and whether that is one person or more than one.",
            hints: [
              "Ask who owns the hat, and whether that is one person or more than one.",
              "Reread the sentence. Which word tells you how many players are meant?",
              "A word that already ends in -s does not need an extra 's after it. Decide among the rest."
            ],
            how: [
              "Find the word that is missing its apostrophe. Hat belongs to a player.",
              "Each player means one player at a time, so there is one owner. Add an apostrophe and s right after the owner: player's.",
              "Players' is for several owners. A second apostrophe in hat's would turn a plain noun into a possessive."
            ],
            misconception: "A common mix-up is putting the apostrophe after the s because there are many players. Each player is one owner at a time.",
            why: "The answer is \"Bring each player's hat to the game on Friday.\" The word each points to one player at a time, so the word needs 's. Players' is for more than one owner. The other choices add letters or apostrophes that do not belong."
          },
          {
            id: "SK-GUM3-1-C14",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: [],
            prompt: "Which sentence uses you're correctly?",
            choices: [
              { text: "I hope you're coach lets you swim first." },
              { text: "You're the fastest swimmer on our team.", correct: true },
              { text: "Is this you're towel on the bench?" },
              { text: "Please put you're goggles in the blue bin." }
            ],
            clue: "You're is a contraction, so it must stand for two words that fit in the sentence. Try putting the two words in its place.",
            hints: [
              "You're is a contraction, so it must stand for two words that fit in the sentence. Try putting the two words in its place.",
              "Read each sentence with the words you are in place of you're. Only keep a choice if the sentence still makes sense.",
              "Try the words you are in the sentence about the coach. Check whether it still makes sense."
            ],
            how: [
              "You're is short for you are. Try you are in place of you're in each sentence.",
              "\"You are the fastest swimmer on our team.\" makes sense.",
              "In the other three, you are does not make sense: \"you are coach,\" \"you are towel\" and \"you are goggles.\" In each one the word is used to show belonging."
            ],
            misconception: "A common mix-up is using you're where a word that shows belonging should go. If you are does not fit, it is the wrong word.",
            why: "The answer is \"You're the fastest swimmer on our team.\" You are fits in place of you're. In the other sentences, you are does not make sense: coach, towel and goggles belong to someone, and you're cannot show belonging."
          },
          {
            id: "SK-GUM3-1-C15",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
            ],
            passages: [],
            prompt: "Read both sentences. The same ending, 's, does a different job in each. Which explanation is right?",
            stem: ["Zuri's tired after the game.", "Zuri's backpack is open."],
            choices: [
              {
                text: "In the first sentence, Zuri's means Zuri is. In the second, Zuri's shows that the backpack belongs to Zuri.",
                correct: true
              },
              { text: "In the first sentence, Zuri's shows that the game belongs to Zuri. In the second, Zuri's means Zuri is." },
              { text: "In both sentences, Zuri's shows that something belongs to Zuri." },
              { text: "In both sentences, Zuri's is short for two words." }
            ],
            clue: "Try stretching the word with the apostrophe into two words. Then try it in the other sentence.",
            hints: [
              "Try stretching the word with the apostrophe into two words. Then try it in the other sentence.",
              "Say the first sentence with Zuri is in place of Zuri's. Then say the second sentence with Zuri is in place of Zuri's.",
              "The word after Zuri's in the second sentence names a thing a person can own. Check whether is fits in front of it."
            ],
            how: [
              "Try Zuri is in place of Zuri's in the first sentence: \"Zuri is tired after the game.\" It makes sense, so the 's is a contraction.",
              "Try it in the second sentence: \"Zuri is backpack is open.\" It does not make sense. The backpack belongs to Zuri, so the 's shows belonging.",
              "The answer is that the first Zuri's means Zuri is and the second shows belonging."
            ],
            misconception: "A common mix-up is thinking 's always shows belonging. It can also be short for is.",
            why: "The answer is \"In the first sentence, Zuri's means Zuri is. In the second, Zuri's shows that the backpack belongs to Zuri.\" Zuri is tired makes sense, but Zuri is backpack does not. The same two letters can do two different jobs."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM3-1-S01",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Maria's umbrella is on the bus.",
        "The two truck's blocked our street.",
        "We haven't seen that movie yet.",
        "She's learning to play the drums."
      ],
      answer: [1],
      pick: 1,
      clue: "Check each word with an apostrophe. Ask whether it stands for missing letters, shows belonging, or only means more than one.",
      hints: [
        "Check each word with an apostrophe. Ask whether it stands for missing letters, shows belonging, or only means more than one.",
        "Find the word in each sentence that ends in s, and ask whether anything belongs to it.",
        "Haven't stands for have not, and the apostrophe is in the right place. Check the other three."
      ],
      how: [
        "Find each word with an apostrophe and ask what job it does.",
        "Maria's umbrella: the umbrella belongs to Maria. Haven't is short for have not. She's is short for she is.",
        "The two truck's blocked our street: nothing belongs to the trucks, and the word only means more than one. It should be trucks."
      ],
      misconception: "A common mix-up is thinking every word that ends in s needs an apostrophe.",
      why: "The error is in \"The two truck's blocked our street.\" Trucks only means more than one truck, so it needs no apostrophe. Maria's shows belonging, haven't is short for have not, and she's is short for she is.",
      like: ["SK-GUM3-1-P4"]
    },
    {
      id: "SK-GUM3-1-S02",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: [],
      prompt: "Choose the TWO sentences that use apostrophes correctly.",
      pick: 2,
      choices: [
        { text: "Dad said we shouldnt run near the pool." },
        { text: "My neighbor's dog naps on our porch.", correct: true },
        { text: "The farmer sold six pumpkin's at his stand." },
        { text: "They've planted tomatoes along the fence.", correct: true },
        { text: "The goat scratched it's ear on the gate." }
      ],
      clue: "For each sentence, find every word that needs an apostrophe. Then check that it is there and that no plain plural has one.",
      hints: [
        "For each sentence, find every word that needs an apostrophe. Then check that it is there and that no plain plural has one.",
        "Say each short word as two words, and ask who owns each thing. Look for a plain plural that has an apostrophe.",
        "One of the sentences uses it's where a word that shows belonging should go. Check the other four."
      ],
      how: [
        "Check each sentence for a contraction, a word that shows belonging, and a plain plural.",
        "\"My neighbor's dog naps on our porch.\" The dog belongs to the neighbor. \"They've planted tomatoes along the fence.\" They've is short for they have.",
        "The others are wrong: shouldnt needs an apostrophe (shouldn't), pumpkin's should be pumpkins, and it's should be its."
      ],
      misconception: "A common mix-up is adding an apostrophe to a plain plural, or using it's where the word shows belonging.",
      why: "The answers are \"My neighbor's dog naps on our porch.\" and \"They've planted tomatoes along the fence.\" The first shows belonging, and the second is short for they have. The others should say shouldn't, pumpkins and its.",
      like: ["SK-GUM3-1-P5"]
    },
    {
      id: "SK-GUM3-1-S03",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: ["p4"],
      prompt: "Sentence 3 of this draft is missing an apostrophe. Choose the correct revision.",
      choices: [
        { text: "Malik says the box was'nt even half full on Monday." },
        { text: "Malik says the box wasnt' even half full on Monday." },
        { text: "Malik says the box wa'snt even half full on Monday." },
        { text: "Malik says the box wasn't even half full on Monday.", correct: true }
      ],
      clue: "A contraction squeezes two words into one. Say the two words first, then find which letter was left out.",
      hints: [
        "A contraction squeezes two words into one. Say the two words first, then find which letter was left out.",
        "Stretch the short word in sentence 3 into two words. The apostrophe takes the place of the missing letter.",
        "An apostrophe does not go at the very end of a contraction. Check where each choice puts it."
      ],
      how: [
        "Find the short word that is missing its apostrophe: wasnt. It stands for was not.",
        "The o in not is left out, so the apostrophe takes its place between n and t: wasn't.",
        "The answer is \"Malik says the box wasn't even half full on Monday.\" The other choices put the apostrophe in the wrong spot."
      ],
      misconception: "A common mix-up is putting the apostrophe where the two words meet, instead of where the letter was left out.",
      why: "The answer is \"Malik says the box wasn't even half full on Monday.\" Was not becomes wasn't, and the apostrophe stands where the o in not was left out. Was'nt, wasnt' and wa'snt put the apostrophe in the wrong spot.",
      like: ["SK-GUM3-1-C03"]
    },
    {
      id: "SK-GUM3-1-S04",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: ["p4"],
      prompt: "One word in sentence 4 should show who owns something. Which word fits in the blank?",
      text: "Imani found a teddy bear in the box, but the {0} nose was missing.",
      slots: [
        {
          options: ["bears", "bear's", "bears'"],
          answer: 1
        }
      ],
      clue: "Ask who the nose belongs to, and whether that is one or more than one.",
      hints: [
        "Ask who the nose belongs to, and whether that is one or more than one.",
        "Look at the first part of the sentence to see how many bears Imani found.",
        "A word that only means more than one has no apostrophe. Decide whether that is what this sentence needs."
      ],
      how: [
        "Ask who owns the nose. It belongs to the bear.",
        "Imani found a teddy bear, so there is one owner. For one owner, add an apostrophe and s right after the word.",
        "The answer is bear's. Bears only means more than one bear, and bears' is for more than one owner."
      ],
      misconception: "A common mix-up is leaving off the apostrophe because the word already looks complete with an s.",
      why: "The answer is bear's. Imani found one teddy bear, and the nose belongs to it, so the word needs 's. Bears means more than one and shows no owner, and bears' would mean the nose belongs to several bears.",
      like: ["SK-GUM3-1-C04"]
    },
    {
      id: "SK-GUM3-1-S05",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: ["p4"],
      prompt: "Sentence 5 uses its and it's correctly. Which TWO statements about the sentence are true?",
      pick: 2,
      choices: [
        { text: "It's can be stretched into it is and still make sense.", correct: true },
        { text: "Its can be stretched into it is and still make sense." },
        { text: "Its shows that the batteries belong to the robot.", correct: true },
        { text: "Both words need an apostrophe because the robot is one thing." },
        { text: "It's shows that the robot owns the batteries." }
      ],
      clue: "Try saying it is in place of each word. A contraction can be stretched into two words that still make sense.",
      hints: [
        "Try saying it is in place of each word. A contraction can be stretched into two words that still make sense.",
        "Read sentence 5 two times, once with it is in place of its and once with it is in place of it's.",
        "The robot is one thing, but that fact does not decide which word gets an apostrophe. Use the it is test on each word."
      ],
      how: [
        "Put it is in place of its: \"The robot beeped when it is batteries were new.\" That does not make sense, so its shows belonging.",
        "Put it is in place of it's: \"it is quiet now.\" That makes sense, so it's is short for it is.",
        "So its shows that the batteries belong to the robot, and it's can be stretched into it is."
      ],
      misconception: "A common mix-up is thinking its needs an apostrophe because it shows belonging. With it, belonging is the one time you leave it out.",
      why: "The answers are \"Its shows that the batteries belong to the robot.\" and \"It's can be stretched into it is and still make sense.\" It is batteries makes no sense, but it is quiet now does. The robot being one thing does not decide it.",
      like: ["SK-GUM3-1-C05"]
    },
    {
      id: "SK-GUM3-1-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: ["p5"],
      prompt: "Select the TWO sentences in which an apostrophe correctly stands for missing letters.",
      targets: ["p5:1:2", "p5:1:3", "p5:2:3", "p5:3:1", "p5:3:2"],
      answer: ["p5:1:3", "p5:3:2"],
      pick: 2,
      clue: "A contraction is two words squeezed into one, and the apostrophe stands for the letters that were left out.",
      hints: [
        "A contraction is two words squeezed into one, and the apostrophe stands for the letters that were left out.",
        "Read the sentences with apostrophes in the draft. For each one, try stretching the word into two words.",
        "Uncle Ray's grill shows belonging, so that sentence is not a contraction. Check the other four."
      ],
      how: [
        "For each sentence, find the word with an apostrophe and try to stretch it into two words.",
        "Couldn't stretches into could not, and they're stretches into they are. Both make sense in their sentences.",
        "Ray's shows belonging. The word it's in sentence 6 and the missing apostrophe in shouldnt are mistakes, not correct contractions."
      ],
      misconception: "A common mix-up is picking a sentence with an apostrophe that is used wrongly. Check that the apostrophe is both needed and in the right place.",
      why: "The answers are \"We couldn't wait to eat.\" and \"They're wild, and they find food on their own.\" Couldn't is short for could not, and they're is short for they are. Ray's shows belonging, it's in sentence 6 cannot be stretched into two words that make sense, and shouldnt has no apostrophe at all.",
      like: ["SK-GUM3-1-C06"]
    },
    {
      id: "SK-GUM3-1-S07",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: ["p5"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "Which sentence in the draft has a mistake with its or it's?",
        choices: [
          { text: "(9) After lunch, the duck flapped its wings and flew away." },
          { text: "(6) A duck waddled over, and it's beak was full of bread.", correct: true },
          { text: "(3) We couldn't wait to eat." },
          { text: "(2) Uncle Ray's grill was already hot when we got there." }
        ]
      },
      partB: {
        prompt: "Which revision fixes the sentence you chose in Part A?",
        choices: [
          { text: "A duck waddled over, and its' beak was full of bread." },
          { text: "A duck waddled over, and it is beak was full of bread." },
          { text: "A duck waddled over, and it's beak's was full of bread." },
          { text: "A duck waddled over, and its beak was full of bread.", correct: true }
        ]
      },
      clue: "Try it is in place of a word with it in it. If the sentence stops making sense, the word is wrong.",
      hints: [
        "Try it is in place of a word with it in it. If the sentence stops making sense, the word is wrong.",
        "For Part A, test each sentence that has a word spelled with its in it. For Part B, ask who owns the thing that comes right after the word.",
        "In Part B, no word in English ends with an apostrophe after the s of its. Check the other choices."
      ],
      how: [
        "Part A: find the sentences with its or it's. Sentence 9 says its wings, which makes sense because the wings belong to the duck.",
        "Sentence 6 says it's beak. Put it is in place of it's: \"it is beak was full of bread.\" That does not make sense, so the apostrophe is wrong.",
        "Part B: the beak belongs to the duck, so the word that shows belonging has no apostrophe: its.",
        "Part B answer: \"A duck waddled over, and its beak was full of bread.\""
      ],
      misconception: "A common mix-up is thinking a word that shows belonging needs an apostrophe. With it, it is the other way around.",
      why: "Part A: \"(6) A duck waddled over, and it's beak was full of bread.\" Part B: \"A duck waddled over, and its beak was full of bread.\" The beak belongs to the duck, so the word that shows belonging is its, with no apostrophe. It's would only be right if it could mean it is.",
      like: ["SK-GUM3-1-C07"]
    },
    {
      id: "SK-GUM3-1-S08",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: ["p5"],
      prompt: "Which TWO changes would fix mistakes in the draft?",
      pick: 2,
      choices: [
        { text: "Take the apostrophe out of Ray's in sentence 2." },
        { text: "Write watermelons, with no apostrophe, in sentence 5.", correct: true },
        { text: "Move the apostrophe in couldn't to after the d in sentence 3." },
        { text: "Take the apostrophe out of They're in sentence 8." },
        { text: "Write shouldn't, with an apostrophe, in sentence 7.", correct: true }
      ],
      clue: "A good fix makes a word match its job. Check whether each word in the choices shows belonging, stands for two words, or just means more than one.",
      hints: [
        "A good fix makes a word match its job. Check whether each word in the choices shows belonging, stands for two words, or just means more than one.",
        "Look back at sentences 2, 3, 5, 7 and 8 in the draft. For each, decide whether the word is already doing its job correctly.",
        "Two of the changes would take an apostrophe out of a word that is already correct. Check the other three."
      ],
      how: [
        "Check each sentence and decide whether its apostrophe is already doing a job.",
        "Ray's shows belonging, couldn't stands for could not, and they're stands for they are. Those three are correct as they are.",
        "Sentence 5: watermelon's only means more than one, so it should be watermelons.",
        "Sentence 7: shouldnt stands for should not, so it needs the apostrophe where the o was left out: shouldn't."
      ],
      misconception: "A common mix-up is taking the apostrophe out of a word that is already correct, because it ends in s or looks too long.",
      why: "The answers are \"Write watermelons, with no apostrophe, in sentence 5.\" and \"Write shouldn't, with an apostrophe, in sentence 7.\" Watermelon's only means more than one, so it needs no apostrophe, and shouldn't needs one in place of the o. Ray's, couldn't and they're are already correct.",
      like: ["SK-GUM3-1-C08"]
    },
    {
      id: "SK-GUM3-1-S09",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The park bench was old, and the {0} legs were wobbly.",
      slots: [
        {
          options: ["benches", "bench's", "benches'"],
          answer: 1
        }
      ],
      clue: "Ask who owns the legs, and whether that is one thing or more than one.",
      hints: [
        "Ask who owns the legs, and whether that is one thing or more than one.",
        "Look at the first part of the sentence to see how many benches there are.",
        "A word that only means more than one has no apostrophe. Decide whether this sentence is about more than one bench."
      ],
      how: [
        "Ask who owns the legs. They belong to the bench.",
        "The first part of the sentence talks about one bench, so there is one owner. Add an apostrophe and s right after it: bench's.",
        "Benches means more than one bench, and benches' would mean the legs belong to several benches."
      ],
      misconception: "A common mix-up is adding -es the way you do for more than one, when the word needs to show that something belongs to one thing.",
      why: "The answer is bench's. The sentence is about one bench, and the legs belong to it, so the word needs 's. Benches means more than one bench, and benches' would mean the legs belong to several benches.",
      like: ["SK-GUM3-1-C09"]
    },
    {
      id: "SK-GUM3-1-S10",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: ["p5"],
      prompt: "Sentences 3 and 5 each have a word with an apostrophe. Which explanation of the two words is right?",
      choices: [
        { text: "Couldn't is wrong because nobody owns anything in sentence 3, but watermelon's is right." },
        { text: "Both words are right, because any word that ends in t or s needs an apostrophe." },
        {
          text: "Couldn't is short for could not, but watermelon's only counts the melons and should be watermelons.",
          correct: true
        },
        { text: "Watermelon's is right because an apostrophe tells the reader there is more than one." }
      ],
      clue: "An apostrophe needs a job: missing letters, or belonging to one owner. Ask what job each word is doing.",
      hints: [
        "An apostrophe needs a job: missing letters, or belonging to one owner. Ask what job each word is doing.",
        "Read sentences 3 and 5 side by side. Try stretching the word in each one into two words.",
        "Sentence 4 tells you how many watermelons there are. Check whether anything in sentence 5 belongs to them."
      ],
      how: [
        "Ask what job each apostrophe is doing.",
        "In sentence 3, couldn't stretches into could not, so the apostrophe stands for a missing letter.",
        "In sentence 5, nothing belongs to the watermelons. Sentence 4 says there are two, so the word only means more than one and should be watermelons.",
        "The answer is that couldn't is short for could not, but watermelon's only counts the melons."
      ],
      misconception: "A common mix-up is thinking an apostrophe can make a word mean more than one.",
      why: "The answer is \"Couldn't is short for could not, but watermelon's only counts the melons and should be watermelons.\" Apostrophes show missing letters or belonging. They do not make a word mean more than one.",
      like: ["SK-GUM3-1-C10"]
    },
    {
      id: "SK-GUM3-1-S11",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: ["p6"],
      prompt: "Select the TWO sentences in the sign-up sheet that have a mistake with an apostrophe.",
      targets: ["p6:2:1", "p6:2:2", "p6:2:3", "p6:3:1", "p6:3:3"],
      answer: ["p6:2:1", "p6:2:2"],
      pick: 2,
      clue: "Check every apostrophe, and every word that might need one. Ask what job it does.",
      hints: [
        "Check every apostrophe, and every word that might need one. Ask what job it does.",
        "Look at the sentences with apostrophes in the middle and end of the sheet. Say each short word as two words, and ask who owns each thing.",
        "Sentence 6 shows belonging and is written correctly. Check the other four."
      ],
      how: [
        "Go through each sentence and find the word with an apostrophe.",
        "Sentence 4: it's would mean it is, but the leash belongs to the dog, so the word should be its.",
        "Sentence 5: towel's only means more than one, so it should be towels.",
        "Sentence 6 (shelter's) shows belonging, sentence 7 (It's) stands for it is, and sentence 9 (can't) stands for cannot, so they are correct."
      ],
      misconception: "A common mix-up is spotting only one kind of mistake. Look for an apostrophe that stands for the wrong thing, and for one that is not needed.",
      why: "The answers are sentence 4 and sentence 5. It's is wrong because the leash belongs to the dog, so the word should be its. Towel's only means more than one, so it needs no apostrophe. Shelter's shows belonging, it's stands for it is, and can't stands for cannot.",
      like: ["SK-GUM3-1-C11"]
    },
    {
      id: "SK-GUM3-1-S12",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "The coach says the game {0} start until noon, and the field {1} dry yet.",
      slots: [
        {
          options: ["won't", "wo'nt", "wont"],
          answer: 0
        },
        {
          options: ["isn't", "is'nt", "isnt"],
          answer: 0
        }
      ],
      clue: "Each blank stands for two words squeezed into one. Say the two words first.",
      hints: [
        "Each blank stands for two words squeezed into one. Say the two words first.",
        "For each blank, stretch the short word into two words. Then think about where the letters are missing.",
        "In the second blank, a word with no apostrophe is not a contraction. Decide about the first blank on your own."
      ],
      how: [
        "Blank 1: the game will not start until noon. Will not squeezes into won't, with the apostrophe where the o in not was left out.",
        "Blank 2: the field is not dry yet. Is not squeezes into isn't, with the apostrophe where the o was left out.",
        "The other options put the apostrophe in the wrong place or leave it out."
      ],
      misconception: "A common mix-up is putting the apostrophe where the two words meet, or leaving it out.",
      why: "The answers are won't and isn't. Will not becomes won't, and is not becomes isn't. The apostrophe stands where the o in not was left out, so wo'nt and is'nt are wrong, and wont and isnt have no apostrophe at all.",
      like: ["SK-GUM3-1-C12"]
    },
    {
      id: "SK-GUM3-1-S13",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: [],
      prompt: "Choose the correct way to write this sentence from a teacher's note.",
      stem: "Please tape each students name to the cubby.",
      choices: [
        { text: "Please tape each students' name to the cubby." },
        { text: "Please tape each student's name's to the cubby." },
        { text: "Please tape each students's name to the cubby." },
        { text: "Please tape each student's name to the cubby.", correct: true }
      ],
      clue: "Ask who owns the name, and whether that is one person or more than one.",
      hints: [
        "Ask who owns the name, and whether that is one person or more than one.",
        "Reread the sentence. Which word tells you how many students are meant?",
        "A word that already ends in -s does not need an extra 's after it. Decide among the rest."
      ],
      how: [
        "Find the word that is missing its apostrophe. The name belongs to a student.",
        "Each student means one student at a time, so there is one owner. Add an apostrophe and s right after the owner: student's.",
        "Students' is for several owners, and name's would turn a plain noun into a word that shows belonging."
      ],
      misconception: "A common mix-up is putting the apostrophe after the s because there are many students. Each student is one owner at a time.",
      why: "The answer is \"Please tape each student's name to the cubby.\" The word each points to one student at a time, so the word needs 's. Students' is for more than one owner, and the other choices add letters or apostrophes that do not belong.",
      like: ["SK-GUM3-1-C13"]
    },
    {
      id: "SK-GUM3-1-S14",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: [],
      prompt: "Which sentence uses they're correctly?",
      choices: [
        { text: "They're the best team in our league.", correct: true },
        { text: "The players left they're bags in the van." },
        { text: "Is that they're coach on the field?" },
        { text: "We cheered for they're first goal." }
      ],
      clue: "They're is a contraction, so it must stand for two words that fit in the sentence. Try putting the two words in its place.",
      hints: [
        "They're is a contraction, so it must stand for two words that fit in the sentence. Try putting the two words in its place.",
        "Read each sentence with the words they are in place of they're. Only keep a choice if the sentence still makes sense.",
        "Try the words they are in the sentence about the bags. Check whether it still makes sense."
      ],
      how: [
        "They're is short for they are. Try they are in place of they're in each sentence.",
        "\"They are the best team in our league.\" makes sense.",
        "In the other three, they are does not make sense: \"they are bags,\" \"they are coach\" and \"they are first goal.\" In each one the word is used to show belonging."
      ],
      misconception: "A common mix-up is using they're where a word that shows belonging should go. If they are does not fit, it is the wrong word.",
      why: "The answer is \"They're the best team in our league.\" They are fits in place of they're. In the other sentences, they are does not make sense: bags, coach and goal belong to someone, and they're cannot show belonging.",
      like: ["SK-GUM3-1-C14"]
    },
    {
      id: "SK-GUM3-1-S15",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-apostrophes-in-contractions-and-singular-pos"
      ],
      passages: [],
      prompt: "Look at the two sentences. Which TWO statements about Ben's are true?",
      stem: ["Ben's hungry.", "Ben's lunch is in the bag."],
      pick: 2,
      choices: [
        { text: "In the second sentence, Ben's can be stretched into Ben is." },
        { text: "In the first sentence, Ben's can be stretched into Ben is.", correct: true },
        { text: "In both sentences, Ben's is short for two words." },
        { text: "In the second sentence, Ben's shows that the lunch belongs to Ben.", correct: true },
        { text: "In the first sentence, Ben's shows that something belongs to Ben." }
      ],
      clue: "Try stretching the word with the apostrophe into two words. Then try it in the other sentence.",
      hints: [
        "Try stretching the word with the apostrophe into two words. Then try it in the other sentence.",
        "Say the first sentence with Ben is in place of Ben's. Then say the second sentence with Ben is in place of Ben's.",
        "The word after Ben's in the second sentence names a thing a person can own. Check whether is fits in front of it."
      ],
      how: [
        "Try Ben is in place of Ben's in the first sentence: \"Ben is hungry.\" It makes sense, so the 's is a contraction.",
        "Try it in the second sentence: \"Ben is lunch is in the bag.\" It does not make sense. The lunch belongs to Ben, so the 's shows belonging.",
        "So the true statements are that the first Ben's can be stretched into Ben is, and that the second Ben's shows the lunch belongs to Ben."
      ],
      misconception: "A common mix-up is thinking 's always shows belonging. It can also be short for is.",
      why: "The answers are \"In the first sentence, Ben's can be stretched into Ben is.\" and \"In the second sentence, Ben's shows that the lunch belongs to Ben.\" Ben is hungry makes sense, but Ben is lunch does not. The same two letters do two different jobs.",
      like: ["SK-GUM3-1-C15"]
    }
  ],
  addons: {
    "SK-GUM3-1-P1": {
      hints: [
        "A short word with an apostrophe stands for two words. Ask whether two words fit in the blank.",
        "Say the sentence with it is in the blank, then say it again with the other word. Which one sounds right?",
        "Its' is not a word in English. Decide between the other two choices."
      ],
      how: [
        "Read the sentence: \"Grandpa says ___ going to rain later today.\"",
        "Try it is in the blank: \"Grandpa says it is going to rain later today.\" That makes sense, so you need a word that squeezes it is together.",
        "It is squeezes into it's, with the apostrophe where the i in is was left out. Its with no apostrophe would show belonging, and that does not fit here."
      ],
      misconception: "A common mix-up is using its because it looks shorter. Its is the word that shows belonging."
    },
    "SK-GUM3-1-P2": {
      hints: [
        "Ask what job each apostrophe does: missing letters, belonging, or neither.",
        "Look at the four sentences one at a time. Find the word in each that is the likely problem.",
        "Two of the sentences are missing an apostrophe. Check the other two."
      ],
      how: [
        "Look at each sentence and find the word that might need an apostrophe.",
        "\"Our teacher's desk is next to the window.\" The desk belongs to the teacher, so teacher's is right.",
        "The others are wrong: puppy's only means more than one, dont needs an apostrophe (don't), and Lenas needs an apostrophe because the wagon belongs to Lena."
      ],
      misconception: "A common mix-up is adding an apostrophe to every word that ends in s."
    },
    "SK-GUM3-1-P3": {
      hints: [
        "Try to stretch each word into two words. If you can, it is a contraction. If something belongs to someone, it shows belonging.",
        "Start with the row you are surest about, and decide the rest one at a time.",
        "Try stretching they'll into two words. Does it make sense? Then decide the other rows."
      ],
      how: [
        "Try stretching each word. Wasn't becomes was not, and they'll becomes they will. Both are short for two words.",
        "Andre's lunch box: the lunch box belongs to Andre. The bird's nest: the nest belongs to the bird.",
        "So wasn't and they'll go in the first column, and the other two go in the second."
      ],
      misconception: "A common mix-up is thinking every word with 's is a contraction. Belonging also uses 's."
    },
    "SK-GUM3-1-P4": {
      hints: [
        "An apostrophe stands for missing letters or shows belonging. A word that only means more than one needs neither.",
        "Find each word with an apostrophe and say what job it does: missing letters or belonging.",
        "Can't stands for cannot, so that sentence is correct. Check the other three."
      ],
      how: [
        "Find each word with an apostrophe and ask what job it does.",
        "Hana's garden: the garden belongs to Hana. Can't is short for cannot, and I'm and you're are short for I am and you are.",
        "Three frog's sat on a log: nothing belongs to the frogs, and the word only means more than one. It should be frogs."
      ],
      misconception: "A common mix-up is thinking every word that ends in s needs an apostrophe."
    },
    "SK-GUM3-1-P5": {
      hints: [
        "For each sentence, find every word that needs an apostrophe. Then check that it is there and that no plain plural has one.",
        "Say each short word as two words, and ask who owns each thing. Look for a word that only means more than one.",
        "One of the sentences uses it's where a word that shows belonging should go. Check the other four."
      ],
      how: [
        "Check each sentence for a contraction, a word that shows belonging, and a plain plural.",
        "\"The baby's blanket is soft and blue.\" The blanket belongs to the baby. \"We'll eat lunch under the big oak tree.\" We'll is short for we will.",
        "The others are wrong: cant needs an apostrophe (can't), book's should be books, and it's should be its."
      ],
      misconception: "A common mix-up is adding an apostrophe to a plain plural, or using it's where the word shows belonging."
    }
  },
  /* B6:core:end */
  test: [
    { id: "SK-GUM3-1-T1", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Amara {0} home when we left, so we fed {1} cat.",
      slots: [
        { options: ["wasnt", "wasn't", "was'nt"], answer: 1 },
        { options: ["Amaras", "Amara", "Amara's"], answer: 2 }
      ],
      clue: "The first blank is a short way to say two words. The second blank tells who the cat belongs to.",
      why: "The answers are wasn't and Amara's. Wasn't is short for was not, and the apostrophe stands where the o was left out. Amara's shows that the cat belongs to Amara, one person, so the 's goes right after her name." },
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
      prompt: "Which word is the contraction for should not?",
      choices: [
        { text: "shouldn't", correct: true },
        { text: "should'nt" },
        { text: "shouldnt" },
        { text: "shouldno't" }
      ],
      clue: "Say should not fast, the way you talk. Which word do you hear? Then check where the apostrophe goes.",
      why: "The answer is shouldn't. Should not changes to shouldn't. The apostrophe takes the place of the o in not, so it sits between n and t." },
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
      "Some nouns change their spelling: man becomes men, foot becomes feet, tooth becomes teeth, mouse becomes mice, and goose becomes geese.",
      "Some nouns change in other ways: child becomes children, person becomes people, ox becomes oxen, and wolf becomes wolves. Knife becomes knives the same way. A noun that ends in -man changes to -men: snowman becomes snowmen.",
      "A few nouns stay the same: one sheep, ten sheep; one deer, two deer; one moose, two moose; one fish, two fish; one bison, two bison.",
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
    },
    {
      show: ["The baker set six warm (loafs / loaves) on the shelf."],
      ask: "Which word is correct?",
      steps: [
        "Six means more than one, so you need a plural.",
        "Loaf ends in f. For some nouns like this, the f changes to v: one loaf, two loaves.",
        "Loafs only adds -s, so cross it out."
      ],
      answer: "The baker set six warm loaves on the shelf."
    }
  ],
  parent: "Play \"one, two\" in the car: you say \"one mouse,\" and your child says \"two mice.\" Mix in easy ones (cat, cats) and special ones (foot, child, goose, sheep).",
  passages: [
    /* B6:passages:start */
    {
      id: "p1",
      title: "A Morning at the State Park",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Tuesday, our class rode a bus to the state park.",
          "(2) A ranger named Ms. Bell met our class at the gate.",
          "(3) First, we walked past a pond where six geese were floating."
        ],
        [
          "(4) Then we picked up red and gold leafs from the path.",
          "(5) Ms. Bell showed us tracks left by two foxes.",
          "(6) Far away, we saw three mooses standing in a field."
        ],
        [
          "(7) She taught us about the lifes of the animals there.",
          "(8) We wrote notes about everything we saw.",
          "(9) The bus got us back to school before dark."
        ],
        [
          "(10) I want to go back to the park next spring."
        ]
      ]
    },
    {
      id: "p2",
      title: "Snowed In at the Cabin",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last winter, my family rented a cabin in the mountains.",
          "(2) The snow was so deep that it covered our boots.",
          "(3) On the first morning, we saw four deers drinking from the stream."
        ],
        [
          "(4) We watched them from the porch.",
          "(5) At dawn, six gooses flew over the roof.",
          "(6) My cousins and I counted them twice."
        ],
        [
          "(7) Mom put the dishes on two shelfs by the stove.",
          "(8) Dad told stories until the fire burned low.",
          "(9) We hoped to come back to the cabin next winter.",
          "(10) On the last night, we all sat by the window and watched the snow."
        ]
      ]
    },
    {
      id: "p3",
      title: "Willow Farm Visitor Poster",
      byline: "A third grader's draft",
      genre: "Student draft (poster)",
      draft: true,
      paragraphs: [
        [
          "(1) Welcome to Willow Farm!",
          "(2) Our visitors love to meet the baby goats.",
          "(3) This spring, four calfs were born in the red barn."
        ],
        [
          "(4) The sheeps graze in the north field.",
          "(5) Please do not feed the ponies.",
          "(6) Two wagons take visitors around the farm on Saturdays."
        ],
        [
          "(7) Visitors can watch the farmers care for the oxes.",
          "(8) Wear sturdy shoes, because the paths can get muddy.",
          "(9) We hope you enjoy your visit."
        ],
        [
          "(10) Come back soon to see what is new.",
          "(11) Ask any helper at the gate if you have a question.",
          "(12) The gift shop is open until four o'clock every day."
        ]
      ]
    },
    {
      id: "p4",
      title: "A Day at the Zoo",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class went to the zoo on a sunny Wednesday.",
          "(2) The first exhibit had two otters that played in the water.",
          "(3) Next to them, a keeper was cutting apples into halfs for the monkeys."
        ],
        [
          "(4) At the plains exhibit, we counted five bisons near the fence.",
          "(5) A guide told us that the zoo has more than two hundred animals.",
          "(6) We ate our lunch under the shady trees."
        ],
        [
          "(7) In the forest exhibit, two wolfs slept in the shade.",
          "(8) A zookeeper let each child touch a snake's skin.",
          "(9) By three o'clock, we were ready to go home."
        ],
        [
          "(10) I hope we can visit again next year.",
          "(11) My favorite part was the quiet forest exhibit."
        ]
      ]
    },
    {
      id: "p5",
      title: "Blizzard Day",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last February, a big blizzard hit our town.",
          "(2) School was closed, so my brother and I stayed home.",
          "(3) We looked out the window and saw two mans shoveling snow."
        ],
        [
          "(4) Dad made hot cocoa for everyone.",
          "(5) Our neighbor's tractor was buried under a huge drift.",
          "(6) Later, he dug it out and fed his sheeps."
        ],
        [
          "(7) Mom sharpened the kitchen knifes before she made soup.",
          "(8) We played board games by the window.",
          "(9) The next day, the sun came out and the snow began to melt."
        ],
        ["(10) It was the best snow day ever.", "(11) I hope it snows again next year."]
      ]
    },
    {
      id: "p6",
      title: "Costume Contest Flyer",
      byline: "A third grader's draft",
      genre: "Student draft (flyer)",
      draft: true,
      paragraphs: [
        [
          "(1) Join our costume contest at the town hall on Friday night!",
          "(2) Everyone is invited, from tiny babies to grandparents.",
          "(3) Last year, we saw three elfs and a very tall robot."
        ],
        [
          "(4) This year, there will be prizes for the funniest costume.",
          "(5) Two judges will walk around the room.",
          "(6) Wear shoes that are comfortable, because your feets can get tired from dancing."
        ],
        [
          "(7) Dancing starts at seven o'clock.",
          "(8) We will serve hot chocolate and warm pretzels.",
          "(9) We hope to see you there!"
        ],
        [
          "(10) Bring a friend, and bring a smile.",
          "(11) Questions can be sent to the main office at the town hall."
        ]
      ]
    }
    /* B6:passages:end */
  ],
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
      text: "The {0} on the field trip laughed when two {1} marched across the yard.",
      slots: [
        { options: ["childs", "children", "childrens"], answer: 1 },
        { options: ["gooses", "geese", "geeses"], answer: 1 }
      ],
      clue: "Both blanks need a word for more than one. Child and goose are special nouns. Say \"one ___, two ___\" for each.",
      why: "The answers are children and geese. One child, many children. One goose, two geese. Childrens and geeses add an extra -s that does not belong." }
  ],
  /* B6:core:start */
  /* ---------- Expansion 2026-10-22, batch B6 (GUM Master) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test or testB.
     Author log: docs/expansion-2026-10-22/batches/B6-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          { ref: "SK-GUM3-2-P4" },
          { ref: "SK-GUM3-2-P5" },
          {
            id: "SK-GUM3-2-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: ["p1"],
            prompt: "Sentence 4 of the draft has a plural noun that is spelled the wrong way. Choose the word that fixes it.",
            text: "Then we picked up red and gold {0} from the path.",
            slots: [
              {
                options: ["leafs", "leaves", "leafes"],
                answer: 1
              }
            ],
            clue: "Some nouns change when they mean more than one. Say the noun for one, then say it for many.",
            hints: [
              "Some nouns change when they mean more than one. Say the noun for one, then say it for many.",
              "Read sentence 4. Picture the path, and say the noun for just one of the red or gold things. Then say it for many.",
              "Leafes is not a word, because -es is never added right after an f. Decide between the other two."
            ],
            how: [
              "Say the noun for one thing: leaf. The sentence needs the noun for many.",
              "Leaf ends in f. For nouns like knife and wolf, the f changes to v before the ending: knife, knives and wolf, wolves.",
              "The answer is leaves. Leafs only adds -s, and leafes adds -es after an f."
            ],
            misconception: "A common mix-up is adding -s to every noun. Some nouns that end in f change the f to v.",
            why: "The answer is leaves. Leaf is a noun that changes its f to v when it means more than one, the way knife becomes knives. Leafs just adds -s, and leafes is not a word."
          },
          {
            id: "SK-GUM3-2-C04",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: ["p1"],
            prompt: "Select the sentence that has a plural noun that should stay the same as the singular noun.",
            targets: ["p1:1:3", "p1:2:1", "p1:2:2", "p1:2:3", "p1:3:1"],
            answer: ["p1:2:3"],
            pick: 1,
            clue: "Some nouns do not change at all when they mean more than one. Think about which plural noun should look just like its singular.",
            hints: [
              "Some nouns do not change at all when they mean more than one. Think about which plural noun should look just like its singular.",
              "Read each plural noun in the sentences. Say the noun for one, then for many, and listen for the one that should sound the same.",
              "Foxes adds -es the usual way. Check the other four sentences."
            ],
            how: [
              "Find the plural noun in each sentence and say the noun for one.",
              "Geese, foxes, leafs and lifes are plurals that change in some way. Foxes adds -es the usual way, geese changes its vowels, and leafs and lifes need their f changed to v.",
              "Mooses is wrong, because moose is a noun that stays the same: one moose, three moose. The sentence should say three moose."
            ],
            misconception: "A common mix-up is adding -s or -es to a noun that stays the same, like moose, sheep or deer.",
            why: "The answer is sentence 6, \"Far away, we saw three mooses standing in a field.\" Moose stays the same for one or many: one moose, three moose. Geese changes its vowels, foxes adds -es, and leafs and lifes need their f changed to v."
          },
          {
            id: "SK-GUM3-2-C05",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Sentence 7 of the draft has a plural noun that is spelled the wrong way. Which revision fixes it?",
              choices: [
                { text: "She taught us about the life's of the animals there." },
                { text: "She taught us about the lives of the animals there.", correct: true },
                { text: "She taught us about the lifs of the animals there." },
                { text: "She taught us about the lifes' of the animals there." }
              ]
            },
            partB: {
              prompt: "Which rule best explains the revision in Part A?",
              choices: [
                { text: "The word life stays the same when it means more than one, the same way sheep does." },
                { text: "The vowel in life changes, the same way foot changes to feet." },
                { text: "The f in life changes to v, the same way knife changes to knives.", correct: true },
                { text: "The word life adds -en, the same way child changes to children." }
              ]
            },
            clue: "Say the noun for one, then decide how it changes when it means more than one.",
            hints: [
              "Say the noun for one, then decide how it changes when it means more than one.",
              "For Part A, read sentence 7 and ask whether the animals have one life or many. For Part B, think about which other nouns change in a similar way.",
              "In Part A, a word with an apostrophe before the s shows belonging, not more than one. Check the other choices."
            ],
            how: [
              "Part A: sentence 7 is about the animals, so the noun life needs to mean more than one.",
              "Life ends in fe. When a noun like this means more than one, the f changes to v and -s is added: life, lives.",
              "Part A answer: \"She taught us about the lives of the animals there.\" Life's has an apostrophe for belonging, and lifs and lifes' are not spelled that way.",
              "Part B answer: \"The f in life changes to v, the same way knife changes to knives.\""
            ],
            misconception: "A common mix-up is adding only -s to a noun that ends in f or fe. For many of these nouns, the f changes to v.",
            why: "Part A: \"She taught us about the lives of the animals there.\" Part B: \"The f in life changes to v, the same way knife changes to knives.\" Life's would show belonging, and lifs and lifes' are not words. Sheep stays the same, foot changes its vowels, and child adds -en, so they are different patterns."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM3-2-C06",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: ["p2"],
            prompt: "Sentence 5 of the draft has a plural noun that is spelled the wrong way. Which revision fixes it?",
            choices: [
              { text: "At dawn, six geeses flew over the roof." },
              { text: "At dawn, six goose flew over the roof." },
              { text: "At dawn, six gese flew over the roof." },
              { text: "At dawn, six geese flew over the roof.", correct: true }
            ],
            clue: "Some nouns change their spelling when they mean more than one. Say the noun for one, then for six.",
            hints: [
              "Some nouns change their spelling when they mean more than one. Say the noun for one, then for six.",
              "Read the number word in sentence 5, then think about how the noun changes for more than one.",
              "A noun that changes its spelling does not also add -es. Check which choices do both."
            ],
            how: [
              "Find the noun: goose. The number word six tells you it must mean more than one.",
              "Goose is a noun that changes the letters inside it: goose, geese. It does not add -s or -es.",
              "The answer is \"At dawn, six geese flew over the roof.\" Geeses adds -es to a word that already changed, goose is for one, and gese is not spelled that way."
            ],
            misconception: "A common mix-up is changing the word and then adding -s or -es too, as in geeses or mices.",
            why: "The answer is \"At dawn, six geese flew over the roof.\" Goose changes its spelling for more than one: goose, geese. Geeses adds an ending it does not need, goose means only one, and gese is not spelled that way."
          },
          {
            id: "SK-GUM3-2-C07",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: ["p2"],
            prompt: "Select the TWO sentences that have a plural noun spelled the wrong way.",
            targets: ["p2:1:2", "p2:1:3", "p2:2:3", "p2:3:1", "p2:3:2"],
            answer: ["p2:1:3", "p2:3:1"],
            pick: 2,
            clue: "Say each plural noun, then say the noun for one. Check that the plural changes, or stays the same, the way it should.",
            hints: [
              "Say each plural noun, then say the noun for one. Check that the plural changes, or stays the same, the way it should.",
              "Look at the sentences with plural nouns in the first and last parts of the draft. Say each noun for one and then for many.",
              "Boots adds -s the usual way. Check the other four sentences."
            ],
            how: [
              "Find the plural noun in each sentence and say the noun for one.",
              "Boots, cousins and stories follow the usual rules, so those sentences are fine.",
              "Sentence 3: deer is a noun that stays the same, so deers is wrong. It should be four deer.",
              "Sentence 7: shelf changes its f to v for more than one, so shelfs is wrong. It should be shelves."
            ],
            misconception: "A common mix-up is thinking every plural noun just adds -s. Deer stays the same, and shelf changes its f to v.",
            why: "The answers are \"On the first morning, we saw four deers drinking from the stream.\" and \"Mom put the dishes on two shelfs by the stove.\" Deer stays the same for one or many, and shelf changes to shelves. Boots, cousins and stories are spelled correctly."
          },
          {
            id: "SK-GUM3-2-C08",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: [],
            prompt: "Foot changes to feet. Which noun changes in the same way?",
            choices: [
              { text: "tooth, which becomes teeth", correct: true },
              { text: "wolf, which becomes wolves" },
              { text: "child, which becomes children" },
              { text: "deer, which stays the same" }
            ],
            clue: "Look for a noun that changes in the same way, not just any noun that changes.",
            hints: [
              "Look for a noun that changes in the same way, not just any noun that changes.",
              "Say foot and feet aloud. Notice which part of the word changes, then say each pair in the choices.",
              "Deer does not change at all, but foot does. Check the other three."
            ],
            how: [
              "Say foot and feet. The oo in the middle of foot changes to ee. The beginning and end stay the same.",
              "Now check each pair. Tooth becomes teeth, with the oo changing to ee in the middle. That is the same change.",
              "Wolf changes its f to v, child adds -ren, and deer does not change, so none of those match."
            ],
            misconception: "A common mix-up is picking any noun that changes. Look at which part changes, not just that it changes.",
            why: "The answer is \"tooth, which becomes teeth.\" Foot changes the letters inside the word, from oo to ee, and tooth does the same thing. Wolf changes its f to v, child adds letters at the end, and deer stays the same."
          },
          {
            id: "SK-GUM3-2-C09",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: [],
            prompt: "Choose the TWO sentences that use plural nouns correctly.",
            pick: 2,
            choices: [
              { text: "The wolfs howled at the moon." },
              { text: "Two mailmen waved from the truck.", correct: true },
              { text: "Mia hurt her feets on the hot sand." },
              { text: "Two moose waded into the cold lake.", correct: true },
              { text: "Both policemans stood near the crosswalk." }
            ],
            clue: "Find the plural noun in each sentence. Ask whether it changes, stays the same, or adds -s the way it should.",
            hints: [
              "Find the plural noun in each sentence. Ask whether it changes, stays the same, or adds -s the way it should.",
              "Say the noun for one, and then for many. Check that each sentence has the right plural.",
              "One of the wrong choices has a noun that needs its f changed to v. Check the other four."
            ],
            how: [
              "Find the plural noun in each sentence and say the noun for one.",
              "\"Two mailmen waved from the truck.\" Mailman changes man to men, like man and men. \"Two moose waded into the cold lake.\" Moose stays the same.",
              "The others are wrong: it should be policemen, wolves and feet."
            ],
            misconception: "A common mix-up is adding -s to a noun that changes (like feets) or to a noun that stays the same.",
            why: "The answers are \"Two mailmen waved from the truck.\" and \"Two moose waded into the cold lake.\" Mailman changes to mailmen, and moose stays the same. The others should say policemen, wolves and feet."
          },
          {
            id: "SK-GUM3-2-C10",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: [],
            prompt: "Match each plural noun to the noun that means only one.",
            cols: ["calf", "policeman", "wolf", "tooth"],
            rows: [
              { text: "calves", answer: 0 },
              { text: "policemen", answer: 1 },
              { text: "wolves", answer: 2 },
              { text: "teeth", answer: 3 }
            ],
            clue: "Think of the noun for just one. Say it, and then say the plural to check that they go together.",
            hints: [
              "Think of the noun for just one. Say it, and then say the plural to check that they go together.",
              "Start with the row you are surest about, and then decide the rest one at a time.",
              "Two of the plurals end in ves. Decide about the other two rows first."
            ],
            how: [
              "For each plural, think of the noun for just one thing.",
              "Calves has ves at the end, so its singular is calf. Wolves is wolf in the same way.",
              "Policemen ends in men, so its singular ends in man: policeman. Teeth changes the vowels back to the oo in tooth."
            ],
            misconception: "A common mix-up is matching a plural to a word that only looks similar. Say the plural for each choice to check.",
            why: "Calves goes with calf and wolves goes with wolf, because the v changes back to f. Policemen goes with policeman, because men changes back to man. Teeth goes with tooth, because ee changes back to oo."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM3-2-C11",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: ["p3"],
            prompt: "Select the TWO sentences in the poster that have a plural noun spelled the wrong way.",
            targets: ["p3:1:2", "p3:1:3", "p3:2:1", "p3:2:3", "p3:3:2"],
            answer: ["p3:1:3", "p3:2:1"],
            pick: 2,
            clue: "Say each plural noun, and then say the noun for one. Check that the plural changes, or stays the same, the way it should.",
            hints: [
              "Say each plural noun, and then say the noun for one. Check that the plural changes, or stays the same, the way it should.",
              "Look at the first four sentences with plural nouns on the poster. Say each noun for one and then for many.",
              "Goats follows the usual rule. Check the other four sentences."
            ],
            how: [
              "Find the plural noun in each sentence and say the noun for one.",
              "Goats and wagons add -s the usual way, and shoes is spelled correctly.",
              "Sentence 3: calf changes its f to v, so calfs is wrong. It should be calves.",
              "Sentence 4: sheep stays the same for one or many, so sheeps is wrong."
            ],
            misconception: "A common mix-up is adding -s to every plural. Calf changes its f to v, and sheep stays the same.",
            why: "The answers are \"This spring, four calfs were born in the red barn.\" and \"The sheeps graze in the north field.\" Calf becomes calves, and sheep stays the same for one or many. Goats, wagons and shoes are spelled correctly."
          },
          {
            id: "SK-GUM3-2-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: [],
            prompt: "Choose the word that correctly completes the sentence.",
            text: "After the long chase, both {0} sat down to rest.",
            slots: [
              {
                options: ["policemans", "policemen", "policemens"],
                answer: 1
              }
            ],
            clue: "Both means more than one, so the noun needs to change. Say the noun for one first.",
            hints: [
              "Both means more than one, so the noun needs to change. Say the noun for one first.",
              "Look at the end of the noun for one. Think about another noun that ends the same way and how it changes.",
              "Policemens adds -s to a word that has already changed. Decide between the other two."
            ],
            how: [
              "Both tells you there are two, so the noun must mean more than one.",
              "The noun for one is policeman. It ends in man, and man changes to men: man, men.",
              "The answer is policemen. Policemans only adds -s, and policemens changes the word and then adds -s."
            ],
            misconception: "A common mix-up is adding -s to a noun that ends in man. These nouns change to men.",
            why: "The answer is policemen. Policeman ends in man, so the plural changes man to men. Policemans only adds -s, and policemens adds an extra -s to a word that already changed."
          },
          {
            id: "SK-GUM3-2-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: [],
            prompt: "Mr. Park says, \"Every noun that means more than one ends in the letter s.\" Which TWO examples show that his rule is wrong?",
            pick: 2,
            choices: [
              { text: "one pencil, two pencils" },
              { text: "one mouse, two mice", correct: true },
              { text: "one puppy, two puppies" },
              { text: "one deer, two deer", correct: true },
              { text: "one wolf, two wolves" }
            ],
            clue: "To test a rule, look for examples that break it. Check how each plural noun ends.",
            hints: [
              "To test a rule, look for examples that break it. Check how each plural noun ends.",
              "Read each pair. Look at the last letter of the plural noun in each one.",
              "Pencils and puppies end in the letter s. Decide about the other three."
            ],
            how: [
              "Check the last letter of each plural noun against the rule.",
              "Pencils, wolves and puppies all end in s. Wolves is a special plural, but it still ends in s, so it does not break this rule.",
              "Mice ends in e, and deer ends in r. Those two plurals do not end in s, so they show that the rule is wrong."
            ],
            misconception: "A common mix-up is picking every special plural. The rule is only about the last letter, and wolves still ends in s.",
            why: "The answers are \"one mouse, two mice\" and \"one deer, two deer.\" Mice ends in e and deer ends in r, so neither plural ends in s. Pencils, wolves and puppies all end in s, so they do not break Mr. Park's rule."
          },
          {
            id: "SK-GUM3-2-C14",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: ["p3"],
            prompt: "Sentence 7 of the poster has a plural noun spelled the wrong way. Which revision fixes it?",
            choices: [
              { text: "Visitors can watch the farmers care for the oxes." },
              { text: "Visitors can watch the farmers care for the oxen.", correct: true },
              { text: "Visitors can watch the farmers care for the oxs." },
              { text: "Visitors can watch the farmers care for the ox." }
            ],
            clue: "Say the noun for one, then say it for more than one, the way you would say it aloud.",
            hints: [
              "Say the noun for one, then say it for more than one, the way you would say it aloud.",
              "Read sentence 7. The farmers care for more than one animal. Think about how the noun for just one changes.",
              "The ox is for only one animal. Decide among the other three."
            ],
            how: [
              "Find the noun: ox. The farmers care for more than one, so it must be a plural.",
              "Ox is one of the nouns that adds -en to mean more than one: ox, oxen.",
              "The answer is \"Visitors can watch the farmers care for the oxen.\" Oxes and oxs add the usual -s, and ox means only one."
            ],
            misconception: "A common mix-up is adding -es to a noun that ends in x. Ox is one of the nouns that adds -en.",
            why: "The answer is \"Visitors can watch the farmers care for the oxen.\" Ox adds -en to mean more than one: ox, oxen. Oxes and oxs add endings that do not belong, and ox means only one animal."
          },
          {
            id: "SK-GUM3-2-C15",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
            ],
            passages: [],
            prompt: "Which sentence stays correct when you change the word One to Two and leave the noun exactly the same?",
            choices: [
              { text: "One goose waded across the stream." },
              { text: "One child waded across the stream." },
              { text: "One deer waded across the stream.", correct: true },
              { text: "One mouse waded across the stream." }
            ],
            clue: "Look for a noun that does not change at all when it means more than one.",
            hints: [
              "Look for a noun that does not change at all when it means more than one.",
              "Try changing One to Two in each sentence. Ask whether the noun would have to change too.",
              "Goose and mouse both change the letters inside the word. Decide about the other two."
            ],
            how: [
              "For each sentence, try Two in place of One and check the noun.",
              "Two goose, two child and two mouse are all wrong. They need geese, children and mice.",
              "Deer stays the same for one or many, so \"Two deer waded across the stream.\" is correct with the noun unchanged."
            ],
            misconception: "A common mix-up is thinking every plural noun must look different from the noun for one.",
            why: "The answer is \"One deer waded across the stream.\" Deer stays the same for one or many, so only the number word changes. Goose, child and mouse all change when they mean more than one: geese, children and mice."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM3-2-S01",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Five geese landed on the lake.",
        "My little sister lost two front tooths.",
        "Grandma packed two sharp knives.",
        "The farmer counted nine sheep."
      ],
      answer: [1],
      pick: 1,
      clue: "Find the plural noun in each sentence. Say the noun for one, then check that the plural is spelled the special way.",
      hints: [
        "Find the plural noun in each sentence. Say the noun for one, then check that the plural is spelled the special way.",
        "Look at each noun that means more than one. Ask whether it should change its spelling, stay the same, or add -s.",
        "Knives changes its f to v the way it should. Check the other three sentences."
      ],
      how: [
        "Find each noun that means more than one.",
        "Geese changes the letters inside goose, knives changes its f to v, and sheep stays the same.",
        "Tooths adds -s to a noun that changes its spelling. Tooth becomes teeth."
      ],
      misconception: "A common mix-up is adding -s to a noun that changes its spelling.",
      why: "The error is in \"My little sister lost two front tooths.\" Tooth is a special noun: one tooth, two teeth. Geese, knives and sheep are all spelled correctly.",
      like: ["SK-GUM3-2-P4"]
    },
    {
      id: "SK-GUM3-2-S02",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "The {0} on the hike watched five {1} fly over the lake.",
      slots: [
        {
          options: ["mans", "men", "mens"],
          answer: 1
        },
        {
          options: ["gooses", "geese", "geeses"],
          answer: 1
        }
      ],
      clue: "Both blanks need a word for more than one. Say the noun for one, then change it.",
      hints: [
        "Both blanks need a word for more than one. Say the noun for one, then change it.",
        "Look at each blank. Think about how a noun that ends in man changes, and how goose changes.",
        "Mens and geeses add -s or -es to a word that has already changed. Decide about the other options."
      ],
      how: [
        "Both blanks need nouns that mean more than one. Five tells you the second one is plural, and the hikers are more than one person.",
        "Man changes to men. Goose changes to geese. Neither one adds -s or -es.",
        "Mans and gooses add the usual ending to a word that should change. Mens and geeses add a second ending."
      ],
      misconception: "A common mix-up is changing the word and also adding -s or -es.",
      why: "The answers are men and geese. One man, many men. One goose, many geese. Mans, mens, gooses and geeses add endings that do not belong.",
      like: ["SK-GUM3-2-P5"]
    },
    {
      id: "SK-GUM3-2-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: ["p4"],
      prompt: "The third sentence of the draft has a plural noun that is spelled the wrong way. Which word belongs in the blank?",
      text: "A keeper sliced each apple into {0} and tossed them to the monkeys.",
      slots: [
        {
          options: ["halfs", "halves", "halfes"],
          answer: 1
        }
      ],
      clue: "Some nouns change when they mean more than one. Say the noun for one piece, then for two.",
      hints: [
        "Some nouns change when they mean more than one. Say the noun for one piece, then for two.",
        "Read sentence 3. A keeper cuts an apple into more than one piece. Say the noun for one piece, then for many.",
        "Halfes is not a word, because -es is never added right after an f. Decide between the other two."
      ],
      how: [
        "Say the noun for one piece: half. The sentence needs the noun for many pieces.",
        "Half ends in f. For nouns like knife and wolf, the f changes to v before the ending.",
        "The answer is halves. Halfs only adds -s, and halfes adds -es after an f."
      ],
      misconception: "A common mix-up is adding -s to every noun. Some nouns that end in f change the f to v.",
      why: "The answer is halves. Half changes its f to v when it means more than one. Halfs just adds -s, and halfes is not a word.",
      like: ["SK-GUM3-2-C03"]
    },
    {
      id: "SK-GUM3-2-S04",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: ["p4"],
      prompt: "Select the sentence that has a plural noun that should stay the same as the singular noun.",
      targets: ["p4:1:2", "p4:1:3", "p4:2:1", "p4:2:2", "p4:3:1"],
      answer: ["p4:2:1"],
      pick: 1,
      clue: "Some nouns do not change at all when they mean more than one. Think about which plural noun should look just like its singular.",
      hints: [
        "Some nouns do not change at all when they mean more than one. Think about which plural noun should look just like its singular.",
        "Read each plural noun in the sentences. Say the noun for one, then for many, and listen for the one that should sound the same.",
        "Otters adds -s the usual way. Check the other four sentences."
      ],
      how: [
        "Find the plural noun in each sentence and say the noun for one.",
        "Otters and animals add -s the usual way. Halfs and wolfs need their f changed to v.",
        "Sheeps is wrong, because sheep stays the same: one sheep, five sheep."
      ],
      misconception: "A common mix-up is adding -s to a noun that stays the same, like moose, sheep or deer.",
      why: "The answer is sentence 4, \"At the plains exhibit, we counted five sheeps near the fence.\" Sheep stays the same for one or many. Otters and animals add -s the usual way, and halfs and wolfs need their f changed to v.",
      like: ["SK-GUM3-2-C04"]
    },
    {
      id: "SK-GUM3-2-S05",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: ["p4"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "Look at the last sentence in the forest exhibit part of the draft. Which choice writes its plural noun correctly?",
        choices: [
          { text: "In the forest exhibit, two wolfs slept in the shade." },
          { text: "In the forest exhibit, two wolfes slept in the shade." },
          { text: "In the forest exhibit, two wolve slept in the shade." },
          { text: "In the forest exhibit, two wolves slept in the shade.", correct: true }
        ]
      },
      partB: {
        prompt: "Why is the answer to Part A correct?",
        choices: [
          { text: "Wolf is a noun that never changes, so the plural looks just like the singular." },
          { text: "Wolf swaps the vowels inside the word, so the plural is spelled with a new vowel." },
          {
            text: "Wolf ends in f, and an f like this changes to v before the plural ending, as in elf and elves.",
            correct: true
          },
          { text: "Wolf adds the letters -en at the end, so the plural is spelled with those letters." }
        ]
      },
      clue: "Say the noun for one, then decide how it changes when it means more than one.",
      hints: [
        "Say the noun for one, then decide how it changes when it means more than one.",
        "For Part A, read sentence 7 and picture the forest exhibit. For Part B, think about which other nouns end in f and what happens to them.",
        "In Part A, wolve leaves off the ending. Check the other choices."
      ],
      how: [
        "Part A: two tells you the noun must mean more than one. The noun for one is wolf.",
        "Wolf ends in f. The f changes to v and the ending is added: wolf, wolves.",
        "Part A answer: \"In the forest exhibit, two wolves slept in the shade.\" Wolfs only adds -s, and wolfes and wolve are not spelled that way.",
        "Part B answer: \"Wolf ends in f, and an f like this changes to v before the plural ending, as in elf and elves.\""
      ],
      misconception: "A common mix-up is adding only -s to a noun that ends in f. For many of these nouns, the f changes to v.",
      why: "Part A: \"In the forest exhibit, two wolves slept in the shade.\" Part B: \"Wolf ends in f, and an f like this changes to v before the plural ending, as in elf and elves.\" Wolfs only adds -s, and wolfes and wolve are not words. Wolf does not stay the same, swap vowels, or add -en.",
      like: ["SK-GUM3-2-C05"]
    },
    {
      id: "SK-GUM3-2-S06",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: ["p5"],
      prompt: "Which choice fixes the plural noun that is spelled the wrong way in the third sentence of the draft?",
      choices: [
        { text: "Late at night, we heard mices scratching inside the walls." },
        { text: "Late at night, we heard mouse scratching inside the walls." },
        { text: "Late at night, we heard mice scratching inside the walls.", correct: true },
        { text: "Late at night, we heard mouses' scratching inside the walls." }
      ],
      clue: "Some nouns change their spelling when they mean more than one. Say the noun for one, then for many.",
      hints: [
        "Some nouns change their spelling when they mean more than one. Say the noun for one, then for many.",
        "Think about how many animals could be scratching at the same time. Say the noun for just one, then change it.",
        "A noun that changes its spelling does not also add -s. Check which choices do both."
      ],
      how: [
        "Find the noun: mouse. The sentence tells about more than one.",
        "Mouse changes the letters inside it: mouse, mice. It does not add -s.",
        "The answer is \"Late at night, we heard mice scratching inside the walls.\" Mices adds -s to a word that already changed, mouse is for one, and mouses' is not spelled that way."
      ],
      misconception: "A common mix-up is changing the word and then adding -s too, as in mices.",
      why: "The answer is \"Late at night, we heard mice scratching inside the walls.\" Mouse changes its spelling for more than one: mouse, mice. Mices adds an extra ending, mouse means only one, and mouses' is not spelled that way.",
      like: ["SK-GUM3-2-C06"]
    },
    {
      id: "SK-GUM3-2-S07",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: ["p5"],
      prompt: "Select the TWO sentences that have a plural noun spelled the wrong way.",
      targets: ["p5:1:2", "p5:2:1", "p5:2:3", "p5:3:1", "p5:3:2"],
      answer: ["p5:2:3", "p5:3:1"],
      pick: 2,
      clue: "Say each plural noun, then say the noun for one. Check that the plural changes, or stays the same, the way it should.",
      hints: [
        "Say each plural noun, then say the noun for one. Check that the plural changes, or stays the same, the way it should.",
        "Look at the sentences with plural nouns in the second and third parts of the draft. Say each noun for one and then for many.",
        "Games adds -s the usual way. Check the other four sentences."
      ],
      how: [
        "Find the plural noun in each sentence and say the noun for one.",
        "Games, and the other plural nouns in the first sentences, follow the usual rules.",
        "Sentence 6: sheep stays the same, so sheeps is wrong.",
        "Sentence 7: knife changes its f to v, so knifes is wrong. It should be knives."
      ],
      misconception: "A common mix-up is thinking every plural noun just adds -s. Sheep stays the same, and knife changes its f to v.",
      why: "The answers are \"Later, he dug it out and fed his sheeps.\" and \"Mom sharpened the kitchen knifes before she made soup.\" Sheep stays the same for one or many, and knife becomes knives. The other sentences are spelled correctly.",
      like: ["SK-GUM3-2-C07"]
    },
    {
      id: "SK-GUM3-2-S08",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: [],
      prompt: "Look at how goose becomes geese. Which noun follows the same pattern?",
      choices: [
        { text: "knife (knives)" },
        { text: "foot (feet)", correct: true },
        { text: "ox (oxen)" },
        { text: "sheep (sheep)" }
      ],
      clue: "Look for a noun that changes in the same way, not just any noun that changes.",
      hints: [
        "Look for a noun that changes in the same way, not just any noun that changes.",
        "Say goose and geese aloud. Notice which part of the word changes, then say each pair in the choices.",
        "Sheep does not change at all, but goose does. Check the other three."
      ],
      how: [
        "Say goose and geese. The oo in the middle changes to ee.",
        "Now check each pair. Foot becomes feet, with the oo in the middle changing to ee. That is the same pattern.",
        "Knife changes its f to v, ox adds -en, and sheep does not change."
      ],
      misconception: "A common mix-up is picking any noun that changes. Look at which part changes.",
      why: "The answer is \"foot (feet).\" Goose changes the oo in the middle to ee, and foot does the same thing. Knife changes its f to v, ox adds letters at the end, and sheep stays the same.",
      like: ["SK-GUM3-2-C08"]
    },
    {
      id: "SK-GUM3-2-S09",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: [],
      prompt: "Choose the TWO sentences that use plural nouns correctly.",
      pick: 2,
      choices: [
        { text: "The elfs hid behind the big oak tree." },
        { text: "My little brother lost three tooths on the swing." },
        { text: "The farmer fed his oxen at sunrise.", correct: true },
        { text: "Dad bought three loafs of bread." },
        { text: "Seven bison grazed on the open plain.", correct: true }
      ],
      clue: "Find the plural noun in each sentence. Ask whether it changes, stays the same, or adds -s the way it should.",
      hints: [
        "Find the plural noun in each sentence. Ask whether it changes, stays the same, or adds -s the way it should.",
        "Say the noun for one, and then for many. Check that each sentence has the right plural.",
        "One of the wrong choices is about something you eat. Check the other four."
      ],
      how: [
        "Find the plural noun in each sentence and say the noun for one.",
        "Ox adds -en, so oxen is correct. Sheep stays the same for one or many.",
        "The others are wrong: it should be elves, loaves and teeth."
      ],
      misconception: "A common mix-up is adding -s to a noun that changes its spelling or stays the same.",
      why: "The answers are \"The farmer fed his oxen at sunrise.\" and \"Seven bison grazed on the open plain.\" Ox becomes oxen, and bison stays the same. The others should say elves, loaves and teeth.",
      like: ["SK-GUM3-2-C09"]
    },
    {
      id: "SK-GUM3-2-S10",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: [],
      prompt: "Match each plural noun to the noun that means only one.",
      cols: ["elf", "man", "mouse", "ox"],
      rows: [
        { text: "mice", answer: 2 },
        { text: "oxen", answer: 3 },
        { text: "men", answer: 1 },
        { text: "elves", answer: 0 }
      ],
      clue: "Think of the noun for just one. Say it, and then say the plural to check that they go together.",
      hints: [
        "Think of the noun for just one. Say it, and then say the plural to check that they go together.",
        "Start with the row you are surest about, and then decide the rest one at a time.",
        "Oxen and men both end in en. Decide about the other two rows first."
      ],
      how: [
        "For each plural, think of the noun for just one thing.",
        "Elves ends in ves, so its singular is elf. Mice goes with mouse.",
        "Men goes back to man, and oxen goes back to ox."
      ],
      misconception: "A common mix-up is matching a plural to a word that only looks similar. Say the plural for each choice to check.",
      why: "Elves goes with elf, because the v changes back to f. Mice goes with mouse, men goes with man, and oxen goes with ox.",
      like: ["SK-GUM3-2-C10"]
    },
    {
      id: "SK-GUM3-2-S11",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: ["p6"],
      prompt: "Select the TWO sentences in the flyer that have a plural noun spelled the wrong way.",
      targets: ["p6:1:2", "p6:1:3", "p6:2:2", "p6:2:3", "p6:3:2"],
      answer: ["p6:1:3", "p6:2:3"],
      pick: 2,
      clue: "Say each plural noun, and then say the noun for one. Check that the plural changes, or stays the same, the way it should.",
      hints: [
        "Say each plural noun, and then say the noun for one. Check that the plural changes, or stays the same, the way it should.",
        "Look at the sentences with plural nouns in the first two parts of the flyer. Say each noun for one and then for many.",
        "Judges adds -s the usual way. Check the other four sentences."
      ],
      how: [
        "Find the plural noun in each sentence and say the noun for one.",
        "Babies, judges and pretzels follow the usual rules for their endings.",
        "Sentence 3: elf changes its f to v, so elfs is wrong. It should be elves.",
        "Sentence 6: foot changes the letters inside, so feets is wrong. It should be feet."
      ],
      misconception: "A common mix-up is adding -s to every plural. Elf changes its f to v, and foot changes its vowels.",
      why: "The answers are \"Last year, we saw three elfs and a very tall robot.\" and \"Wear shoes that are comfortable, because your feets can get tired from dancing.\" Elf becomes elves, and foot becomes feet. Babies, judges and pretzels are spelled correctly.",
      like: ["SK-GUM3-2-C11"]
    },
    {
      id: "SK-GUM3-2-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "On the stage stood three {0} holding bright flags.",
      slots: [
        {
          options: ["womans", "women", "womens"],
          answer: 1
        }
      ],
      clue: "Three means more than one, so the noun needs to change. Say the noun for one first.",
      hints: [
        "Three means more than one, so the noun needs to change. Say the noun for one first.",
        "Look at the end of the noun for one. Think about another noun that ends the same way and how it changes.",
        "Womens adds -s to a word that has already changed. Decide between the other two."
      ],
      how: [
        "Three tells you there is more than one, so the noun must be plural.",
        "The noun for one is woman. It ends in man, and man changes to men: woman, women.",
        "The answer is women. Womans only adds -s, and womens changes the word and then adds -s."
      ],
      misconception: "A common mix-up is adding -s to a noun that ends in man. These nouns change to men.",
      why: "The answer is women. Woman ends in man, so the plural changes man to men. Womans only adds -s, and womens adds an extra -s to a word that already changed.",
      like: ["SK-GUM3-2-C12"]
    },
    {
      id: "SK-GUM3-2-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: [],
      prompt: "Max says, \"To make a noun mean more than one, just add -s.\" Which TWO examples show that he is wrong?",
      pick: 2,
      choices: [
        { text: "one moose, two moose", correct: true },
        { text: "one hat, two hats" },
        { text: "one goose, two geese", correct: true },
        { text: "one desk, two desks" },
        { text: "one kite, two kites" }
      ],
      clue: "To test a rule, look for examples that break it. Ask whether the plural is made by adding -s.",
      hints: [
        "To test a rule, look for examples that break it. Ask whether the plural is made by adding -s.",
        "Read each pair. Ask whether the plural is the noun for one with an s on the end.",
        "Kites and hats both just add -s. Decide about the other three."
      ],
      how: [
        "Check each pair against the rule: add -s to the noun for one.",
        "Kites, hats and desks all add just -s, so the rule works for them.",
        "Geese changes the letters inside goose, and moose stays the same. Neither one is made by adding -s."
      ],
      misconception: "A common mix-up is thinking every plural noun follows the same rule. Some nouns change, and some stay the same.",
      why: "The answers are \"one goose, two geese\" and \"one moose, two moose.\" Geese changes the letters inside the word, and moose stays the same, so neither one just adds -s. Kites, hats and desks follow Max's rule.",
      like: ["SK-GUM3-2-C13"]
    },
    {
      id: "SK-GUM3-2-S14",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: [],
      prompt: "Choose the correct way to write this sentence.",
      stem: "The coach gave a snack to all the childs after the game.",
      choices: [
        { text: "The coach gave a snack to all the childrens after the game." },
        { text: "The coach gave a snack to all the childes after the game." },
        { text: "The coach gave a snack to all the child after the game." },
        { text: "The coach gave a snack to all the children after the game.", correct: true }
      ],
      clue: "Say the noun for one, then say it for more than one, the way you would say it aloud.",
      hints: [
        "Say the noun for one, then say it for more than one, the way you would say it aloud.",
        "Read the sentence. All the means more than one. Think about how the noun for just one changes.",
        "One of the choices names only one child. Decide among the other three."
      ],
      how: [
        "Find the noun: child. The words all the tell you it must mean more than one.",
        "Child is one of the nouns that adds letters at the end: child, children.",
        "Childrens adds an -s to a word that already shows more than one, childes is not a word, and child means only one."
      ],
      misconception: "A common mix-up is adding -s to children, which already means more than one.",
      why: "The answer is \"The coach gave a snack to all the children after the game.\" Child becomes children for more than one. Childrens adds an extra -s, childes is not a word, and child means only one.",
      like: ["SK-GUM3-2-C14"]
    },
    {
      id: "SK-GUM3-2-S15",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:M:form-and-use-irregular-plural-nouns"
      ],
      passages: [],
      prompt: "Mia swaps A for Six in each sentence and does not touch the noun. Which sentence is still correct?",
      choices: [
        { text: "A bison crossed the muddy road.", correct: true },
        { text: "A goose crossed the muddy road." },
        { text: "A wolf crossed the muddy road." },
        { text: "A child crossed the muddy road." }
      ],
      clue: "Look for a noun that does not change at all when it means more than one.",
      hints: [
        "Look for a noun that does not change at all when it means more than one.",
        "Try Six in place of A in each sentence. Ask whether the noun would have to change too.",
        "Goose and child both change when they mean more than one. Decide about the other two."
      ],
      how: [
        "For each sentence, try Six in place of A and check the noun.",
        "Six goose, six wolf and six child are wrong. They need geese, wolves and children.",
        "Bison stays the same for one or many, so \"Six bison crossed the muddy road.\" is correct with the noun unchanged."
      ],
      misconception: "A common mix-up is thinking every plural noun must look different from the noun for one.",
      why: "The answer is \"A bison crossed the muddy road.\" Bison stays the same for one or many, so only the number word changes. Goose, wolf and child all change: geese, wolves and children.",
      like: ["SK-GUM3-2-C15"]
    }
  ],
  addons: {
    "SK-GUM3-2-P1": {
      hints: [
        "Think about whether the noun changes when it means more than one. All of my tells you there is more than one.",
        "Say the noun for one tooth, then say it for many. Does the word just add an s, or does it change inside?",
        "Teeths adds an -s to a word that already changed. Decide among the other three."
      ],
      how: [
        "All of my tells you the sentence needs a plural noun.",
        "Tooth is a special noun. It changes the letters inside it instead of adding -s: tooth, teeth.",
        "The answer is teeth. Tooths and teeths add -s, and tooth means only one."
      ],
      misconception: "A common mix-up is adding -s to a noun that changes its spelling."
    },
    "SK-GUM3-2-P2": {
      hints: [
        "Look at each word that means more than one. Ask whether it is a special noun that changes or stays the same.",
        "Read the four sentences one at a time. For each, find the noun that means more than one and say the noun for one.",
        "Sheep stays the same for one or many. Check the other sentences."
      ],
      how: [
        "Find the noun that means more than one in each sentence.",
        "\"Two women sold peaches at the market.\" Woman changes to women, so this one is correct.",
        "The others are wrong: it should be sheep (it stays the same), children and feet."
      ],
      misconception: "A common mix-up is adding -s to a special noun, like sheeps, childs or feets."
    },
    "SK-GUM3-2-P3": {
      hints: [
        "Say one ___, two ___ for each noun. Listen: does the word change, or does it sound the same both times?",
        "Start with the noun you know best, and decide the rest one at a time.",
        "Say one deer, two deer. Does the word change? Then decide the other rows."
      ],
      how: [
        "Say one ___, two ___ for each noun.",
        "Goose becomes geese, and foot becomes feet. Both change their spelling.",
        "Sheep and deer stay the same: one sheep, two sheep and one deer, two deer."
      ],
      misconception: "A common mix-up is thinking every plural has to look different from the noun for one."
    },
    "SK-GUM3-2-P4": {
      hints: [
        "Find the word in each sentence that means more than one. Ask whether it is spelled the special way.",
        "Say the noun for one, then for many, in each sentence. Ask whether the plural changes the way it should.",
        "Oxen adds -en, the way the noun ox should. Check the other three sentences."
      ],
      how: [
        "Find the word in each sentence that means more than one.",
        "Geese, oxen and men are all spelled the special way.",
        "\"Two mans fixed our broken fence.\" Man is a special noun. One man, two men."
      ],
      misconception: "A common mix-up is adding -s to a noun that ends in man. These nouns change to men."
    },
    "SK-GUM3-2-P5": {
      hints: [
        "Both blanks need a word for more than one. Say one ___, two ___ for each blank.",
        "Look at each blank and its clue words. In the first, ask how many went on the trip. In the second, two tells you.",
        "Childrens and geeses add -s to words that already changed. Decide about the other options."
      ],
      how: [
        "Both blanks need a word for more than one.",
        "One child, many children. One goose, two geese. Both change their spelling.",
        "Childs and gooses add the usual -s to nouns that should change. Childrens and geeses add an extra -s."
      ],
      misconception: "A common mix-up is changing the word and then adding -s as well."
    }
  },
  /* B6:core:end */
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
      clue: "Both means two. Woman is a special noun. Say \"one woman, two ___.\"",
      why: "The answer is women. One woman, two women, just like one man, two men." },
    { id: "SK-GUM3-2-T2", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO sentences that use plural nouns correctly.",
      choices: [
        { text: "Our class saw two moose at the zoo.", correct: true },
        { text: "Three sheep slept under a shady tree.", correct: true },
        { text: "The two mouses ate all of the cheese." },
        { text: "Mr. Patel read a story to the childrens." },
        { text: "Six gooses walked slowly across the road." }
      ],
      clue: "Find every word that means more than one. Remember which nouns change their spelling and which stay the same.",
      why: "The answers are \"Our class saw two moose at the zoo.\" and \"Three sheep slept under a shady tree.\" Moose and sheep both stay the same. The others should say mice, children and geese." },
    { id: "SK-GUM3-2-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Please wipe your {0} on the mat before you come inside.",
      slots: [{ options: ["foots", "feet", "feets"], answer: 1 }],
      clue: "You have two of these. The word changes its spelling instead of adding -s.",
      why: "The answer is feet. One foot, two feet." },
    { id: "SK-GUM3-2-T4", type: "match", points: 2, dok: 1, passages: [],
      prompt: "Match each noun to its plural.",
      cols: ["women", "shelves", "calves", "teeth"],
      rows: [
        { text: "woman", answer: 0 },
        { text: "shelf", answer: 1 },
        { text: "calf", answer: 2 },
        { text: "tooth", answer: 3 }
      ],
      clue: "Say \"one ___, two ___\" for each word. Listen for the plural that sounds right.",
      why: "One woman, two women. One shelf, two shelves. One calf, two calves. One tooth, two teeth." },
    { id: "SK-GUM3-2-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "The farmers sold peaches at the market.",
        "My baby sister has four new tooths.",
        "The boxes were full of old books.",
        "The puppies slept on a soft blanket."
      ],
      answer: [1], pick: 1,
      clue: "Check each plural noun. Does it change, stay the same, or add -s the way it should?",
      why: "The error is in \"My baby sister has four new tooths.\" Tooth is a special noun, so the plural is teeth." }
  ],
  /* PP-004 form B of the skill check, written by formB-lang (see docs/audits/work/pp004-formB-formB-lang.md).
     Reworked by rc3fix (docs/audits/work/pp004-rc3fix.md, findings RC3-2/RC3-3): every key target (lead round 5-6: TB4 rows now salmon and bison)
     is a special plural that is not in this lesson's teach, Watch Me, practice or form A.
     Same code and 7 points as form A; each special noun is used in only one item.
     NEEDS INDEPENDENT REVIEW before it is relied on. */
  testB: [
    { id: "SK-GUM3-2-TB1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that belongs in the blank.",
      stem: "After the big storm, we built three ____ in the front yard.",
      choices: [
        { text: "snowmen", correct: true },
        { text: "snowmans" },
        { text: "snowmens" },
        { text: "snowman" }
      ],
      clue: "Three means more than one, so the blank needs a plural. Snowman ends with the word man. Say \"one man, two ___.\"",
      why: "The answer is snowmen. Snowman ends with man, and man is a special noun: one man, two men. So one snowman, three snowmen. Snowmans and snowmens are not words. Snowman names only one, and we built three." },
    { id: "SK-GUM3-2-TB2", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Read each sentence. Which TWO sentences have no mistakes with plural nouns?",
      choices: [
        { text: "The farmer's two calves drank milk from a big bucket.", correct: true },
        { text: "The elves in our class play wore pointy green hats.", correct: true },
        { text: "In the story, two thiefs tried to take the king's gold." },
        { text: "Grandma gave each of her grandchilds a hug." },
        { text: "Dad cut each sandwich into two halfs." }
      ],
      clue: "Find the word in each sentence that names more than one. Is it a special noun? Say \"one ___, two ___\" to check it.",
      why: "The answers are \"The farmer's two calves drank milk from a big bucket.\" and \"The elves in our class play wore pointy green hats.\" One calf, two calves. One elf, many elves. In both words, the f changes to v before -es is added. The other sentences should say thieves, grandchildren and halves. Thief and half change the same way as calf: one thief, two thieves; one half, two halves. Grandchild changes like child and children. So thiefs, grandchilds and halfs are not words." },
    { id: "SK-GUM3-2-TB3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The police caught two {0} near the bank.",
      slots: [{ options: ["thiefs", "thieves", "thief"], answer: 1 }],
      clue: "Two means more than one, so you need a plural. Thief ends in f. Think of another noun that ends in f or fe, like knife. How does it make its plural?",
      why: "The answer is thieves. One thief, two thieves. Like knife and knives, the f changes to v before -es is added. Thiefs is not the plural of thief, and thief names only one." },
    { id: "SK-GUM3-2-TB4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is the plural noun in each sentence correct, or does it need a fix? Match each sentence.",
      cols: ["Correct", "Needs a fix"],
      rows: [
        { text: "Dad put up two new shelfs in my room.", answer: 1 },
        { text: "Two salmon swam up the cold river.", answer: 0 },
        { text: "Three fishermans sat on the dock with their poles.", answer: 1 },
        { text: "Five bison ate grass on the wide prairie.", answer: 0 }
      ],
      clue: "Find the word in each sentence that names more than one. Is it spelled the special way, with no extra -s?",
      why: "\"Two salmon swam up the cold river.\" and \"Five bison ate grass on the wide prairie.\" are correct: one salmon, two salmon; one bison, five bison. These nouns stay the same for one or more. \"Dad put up two new shelfs in my room.\" needs a fix: one shelf, two shelves, because the f changes to v before -es. \"Three fishermans sat on the dock with their poles.\" needs a fix too: fisherman ends in man, so it changes the way man does. One fisherman, three fishermen." },
    { id: "SK-GUM3-2-TB5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "One of these sentences has a mistake with a plural noun. Select that sentence.",
      options: [
        "The buses waited in a long line.",
        "My uncles came to the picnic with their wifes.",
        "Mom bought two bunches of grapes.",
        "Both babies napped in their strollers."
      ],
      answer: [1], pick: 1,
      clue: "Check the word in each sentence that names more than one. Is it a regular plural that adds -s or -es, or a special noun?",
      why: "The error is in \"My uncles came to the picnic with their wifes.\" Wife is a special noun: one wife, two wives. The f changes to v, so wifes is not a word. Buses, bunches and babies are all spelled correctly." }
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
      "Time words like yesterday, last week and last night tell you to use the past tense."
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
        "Find the verb: bring. Bring is not a past-tense word.",
        "Bring is irregular. Its past tense is brought, not bringed."
      ],
      answer: "Yesterday, Mateo brought his kite to the beach on Tybee Island."
    },
    {
      show: ["Last week, the coach (cutted / cut) the long rope in two."],
      ask: "Which verb is correct?",
      steps: [
        "Find the time clue: last week. The verb must tell about the past.",
        "Cut is an irregular verb, but it does not change at all. Cut is also the past tense.",
        "Cutted is not a word, so cross it out."
      ],
      answer: "Last week, the coach cut the long rope in two."
    }
  ],
  parent: "At dinner, ask \"What did you do today?\" and listen for special past-tense verbs. If your child says \"I eated,\" just repeat it back the right way: \"Oh, you ate pizza!\"",
  passages: [
    /* B6:passages:start */
    {
      id: "p1",
      title: "The Treasure Hunt",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Saturday, our class had a treasure hunt on the playground.",
          "(2) Ms. Ortiz put a small chest under the big slide.",
          "(3) She gave each team a map and a pencil."
        ],
        [
          "(4) My team drawed a path across the grass to the first clue.",
          "(5) We keeped the clue safe in my backpack.",
          "(6) It said to look near the tallest tree."
        ],
        [
          "(7) Dev thinked the chest was by the swings.",
          "(8) I knew he was wrong, so I led the team to the oak tree.",
          "(9) Everyone cheered when we opened the chest."
        ],
        [
          "(10) Inside, there were stickers for every player.",
          "(11) It was the best recess ever, and I hope we play again soon."
        ]
      ]
    },
    {
      id: "p2",
      title: "Birthday at the Trampoline Park",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last month, I went to my cousin's birthday party at a trampoline park.",
          "(2) We wore special socks with grips on the bottom.",
          "(3) A tall worker speaked to us about the safety rules before we began."
        ],
        [
          "(4) First, I jumped into a pit of soft foam blocks.",
          "(5) My cousin Ava bounced so high that she almost hitted the ceiling.",
          "(6) After that, we ate pizza at a long table."
        ],
        [
          "(7) When the cake came out, ten candles glowed on top.",
          "(8) Everyone sang to Ava, and she made a wish.",
          "(9) Then Ava cutted the first slice, and her fork sinked into the soft frosting."
        ],
        [
          "(10) At the end, our parents picked us up.",
          "(11) I was tired and happy."
        ]
      ]
    },
    {
      id: "p3",
      title: "Room 12 News",
      byline: "A third grader's draft",
      genre: "Student draft (class newsletter)",
      draft: true,
      paragraphs: [
        [
          "(1) Welcome to Room 12 News!",
          "(2) Here is what happened in our class this week."
        ],
        [
          "(3) On Monday, we meeted a real beekeeper named Mr. Cho.",
          "(4) He wore a white suit and a hat with a net.",
          "(5) Bees sticked to his gloves, but he was not afraid.",
          "(6) We tasted fresh honey on crackers."
        ],
        [
          "(7) On Wednesday, we sold painted rocks at the school gate.",
          "(8) We spended the money on new books for the library.",
          "(9) Everyone was proud of the work."
        ],
        [
          "(10) On Friday, the weather turned cold, so we stayed inside.",
          "(11) Thank you for reading, and see you next week!"
        ]
      ]
    },
    {
      id: "p4",
      title: "Hike to the Waterfall",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Sunday, my family hiked to a waterfall in the mountains.",
          "(2) Dad carried the water bottles in his backpack.",
          "(3) After an hour, we comed to a bridge over a stream."
        ],
        [
          "(4) My sister and I leaned over the rail to look at the fish.",
          "(5) Then we lefted the bridge and climbed a rocky hill.",
          "(6) The path was steep, and my legs felt tired."
        ],
        [
          "(7) Mom sayed that the falls were close.",
          "(8) Soon we heard a loud roar.",
          "(9) The water splashed over the rocks and sprayed our faces."
        ],
        ["(10) We ate sandwiches on a flat rock.", "(11) It was a perfect day."]
      ]
    },
    {
      id: "p5",
      title: "My Hamster Biscuit",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last year, I begged my parents for a pet.",
          "(2) Finally, Dad took me to the pet store on Elm Street.",
          "(3) He payed for a small hamster and a wheel."
        ],
        [
          "(4) I named the hamster Biscuit.",
          "(5) That night, I feeded him seeds and a slice of apple.",
          "(6) Biscuit stuffed the food into his cheeks."
        ],
        [
          "(7) My mom agreed he could sleep in my room.",
          "(8) At midnight, Biscuit creeped out of his cage, and I finded him before he reached the door.",
          "(9) I was too tired to be upset."
        ],
        ["(10) Now Biscuit has a lid on his cage."]
      ]
    },
    {
      id: "p6",
      title: "Camp Lakeside News",
      byline: "A third grader's draft",
      genre: "Student draft (camp newsletter)",
      draft: true,
      paragraphs: [
        [
          "(1) Welcome to Camp Lakeside News!",
          "(2) Here is what the campers did this week."
        ],
        [
          "(3) On Tuesday, the older kids builded a raft from wood and rope.",
          "(4) They carried it to the edge of the lake.",
          "(5) Later, the raft floated near the dock, and everyone clapped.",
          "(6) Our counselor, Mr. Diaz, grinned at us."
        ],
        [
          "(7) On Thursday, a camper named Priya forgived her brother for losing her sock.",
          "(8) I knowed it was hard to do.",
          "(9) We ended the night with songs by the fire."
        ],
        [
          "(10) On Saturday, we packed our bags and rode home.",
          "(11) See you next summer!"
        ]
      ]
    }
    /* B6:passages:end */
  ],
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
      clue: "Last Saturday already happened, so both verbs must tell about the past.",
      why: "The answers are rode and saw. Ride becomes rode, and see becomes saw. Seen needs a helper word like has, so it does not fit here." }
  ],
  /* B6:core:start */
  /* ---------- Expansion 2026-10-22, batch B6 (GUM Master) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test or testB.
     Author log: docs/expansion-2026-10-22/batches/B6-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          { ref: "SK-GUM3-3-P4" },
          { ref: "SK-GUM3-3-P5" },
          {
            id: "SK-GUM3-3-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: ["p1"],
            prompt: "Sentence 4 of the draft has a verb mistake. Choose the word that fixes it.",
            text: "My team {0} a path across the grass to the first clue.",
            slots: [
              {
                options: ["drawed", "drew", "draws"],
                answer: 1
              }
            ],
            clue: "Find the time clue in the draft. The verb must tell about the past.",
            hints: [
              "Find the time clue in the draft. The verb must tell about the past.",
              "Read sentence 4. Say each choice in the sentence and ask which one is a real past-tense word.",
              "Draws tells about now. Decide between the other two."
            ],
            how: [
              "The draft tells about last Saturday, so the verb must tell about the past.",
              "Draw is an irregular verb. It changes into a new word instead of adding -ed.",
              "The answer is drew. Drawed is not a word, and draws tells about now."
            ],
            misconception: "A common mix-up is adding -ed to a special verb. Say the word out loud: drawed does not sound right.",
            why: "The answer is drew. Draw is an irregular verb, so its past tense is drew. Drawed is not a word, and draws tells about now."
          },
          {
            id: "SK-GUM3-3-C04",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: ["p1"],
            prompt: "Sentence 5 of the draft has a verb mistake. Which revision fixes it?",
            choices: [
              { text: "We keep the clue safe in my backpack." },
              { text: "We keeped the clue safe in my backpack." },
              { text: "We kept the clue safe in my backpack.", correct: true },
              { text: "We kepted the clue safe in my backpack." }
            ],
            clue: "Say the verb, then ask whether it is a real past-tense word.",
            hints: [
              "Say the verb, then ask whether it is a real past-tense word.",
              "Read sentence 5 and say the verb. Then try each choice in the sentence.",
              "Keep tells about now, but the draft tells about last Saturday. Check the other three."
            ],
            how: [
              "Find the verb in sentence 5: keeped. The draft tells about the past.",
              "Keep is an irregular verb. It changes into kept and does not add -ed.",
              "The answer is \"We kept the clue safe in my backpack.\" Keep tells about now, and keeped and kepted are not real words."
            ],
            misconception: "A common mix-up is adding -ed to the new word, as in kepted.",
            why: "The answer is \"We kept the clue safe in my backpack.\" Keep is irregular, so its past tense is kept. Keep tells about now, and keeped and kepted are not words."
          },
          {
            id: "SK-GUM3-3-C05",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Sentence 7 of the draft has a verb mistake. Which revision fixes it?",
              choices: [
                { text: "Dev thinks the chest was by the swings." },
                { text: "Dev thinked the chest was by the swings." },
                { text: "Dev thoughted the chest was by the swings." },
                { text: "Dev thought the chest was by the swings.", correct: true }
              ]
            },
            partB: {
              prompt: "Why is the revision in Part A correct?",
              choices: [
                { text: "Think already tells about the past, so the sentence needs no change." },
                { text: "Think is irregular, so its past tense is a new word that does not end in -ed.", correct: true },
                { text: "Think needs a helper word like has before it to show the past." },
                { text: "Think adds -s because Dev is only one person." }
              ]
            },
            clue: "Say the verb, then decide whether it is a real past-tense word.",
            hints: [
              "Say the verb, then decide whether it is a real past-tense word.",
              "For Part A, read sentence 7 and say each choice in it. For Part B, think about whether thinked follows the pattern most verbs follow, and what the correct word looks like.",
              "In Part A, thinks tells about now. Check the other choices."
            ],
            how: [
              "Part A: find the verb in sentence 7. The draft tells about the past.",
              "Think is irregular. Its past tense is thought, and it does not add -ed.",
              "Part A answer: \"Dev thought the chest was by the swings.\" Thinks tells about now, and thinked and thoughted add -ed to a verb that changes.",
              "Part B answer: \"Think is irregular, so its past tense is a new word that does not end in -ed.\""
            ],
            misconception: "A common mix-up is adding -ed to every verb in the past. Special verbs change into a new word.",
            why: "Part A: \"Dev thought the chest was by the swings.\" Part B: \"Think is irregular, so its past tense is a new word that does not end in -ed.\" Thinks tells about now, and thinked and thoughted are not words. Think does not use has here, and it does not add -s to tell about the past."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM3-3-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: ["p2"],
            prompt: "Select the TWO sentences that have a verb mistake.",
            targets: ["p2:1:3", "p2:2:1", "p2:2:2", "p2:2:3", "p2:3:1"],
            answer: ["p2:1:3", "p2:2:2"],
            pick: 2,
            clue: "Check every verb. Two of them are not real past-tense words.",
            hints: [
              "Check every verb. Two of them are not real past-tense words.",
              "Say the verb in each of the five sentences. Ask whether it is a real word that tells about the past.",
              "Jumped is a real past-tense word, and it is spelled correctly. Check the other four sentences."
            ],
            how: [
              "Find the verb in each sentence and ask whether it is a real past-tense word.",
              "Jumped, ate and came are correct. Jump adds -ed, and eat and come change into new words.",
              "Sentence 3: speaked is wrong. Speak becomes spoke.",
              "Sentence 5: hitted is wrong. Hit stays hit in the past."
            ],
            misconception: "A common mix-up is thinking a verb that does not end in -ed must be wrong. Hit stays the same, so hitted is the mistake.",
            why: "The errors are in \"A tall worker speaked to us about the safety rules before we began.\" and \"My cousin Ava bounced so high that she almost hitted the ceiling.\" Speak becomes spoke, and hit stays hit. Jumped, ate and came are correct."
          },
          {
            id: "SK-GUM3-3-C07",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: [],
            prompt: "Choose the TWO sentences that use past-tense verbs correctly.",
            pick: 2,
            choices: [
              { text: "Tomas sweeped the porch before dinner." },
              { text: "Mina slid down the muddy hill after the rain.", correct: true },
              { text: "The puppy bited the rope toy." },
              { text: "Dad sold his old truck last year.", correct: true },
              { text: "A bee stinged my arm at the picnic." }
            ],
            clue: "Find the verb in each sentence. Ask whether it is a real past-tense word or a special verb with -ed added.",
            hints: [
              "Find the verb in each sentence. Ask whether it is a real past-tense word or a special verb with -ed added.",
              "Say each verb with the word yesterday in front of it. Listen for the ones that sound made up.",
              "Sweeped is not a real word. Decide about the other four."
            ],
            how: [
              "Find the verb in each sentence and ask whether it is a real past-tense word.",
              "Slide becomes slid, and sell becomes sold. Both change into new words.",
              "The others are wrong: it should be stung, swept and bit."
            ],
            misconception: "A common mix-up is thinking that every past-tense verb ends in -ed. Slid and sold do not, and they are correct.",
            why: "The answers are \"Mina slid down the muddy hill after the rain.\" and \"Dad sold his old truck last year.\" Slide becomes slid, and sell becomes sold. The others should say stung, swept and bit."
          },
          {
            id: "SK-GUM3-3-C08",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: [],
            prompt: "Match each past-tense verb to the verb that tells about now.",
            cols: ["spring", "shoot", "bend", "swing"],
            rows: [
              { text: "bent", answer: 2 },
              { text: "sprang", answer: 0 },
              { text: "swung", answer: 3 },
              { text: "shot", answer: 1 }
            ],
            clue: "Say each word after yesterday, then think of the verb you would use for today.",
            hints: [
              "Say each word after yesterday, then think of the verb you would use for today.",
              "Start with the row you are surest about. Think about the middle sound of each word.",
              "Shot goes with the verb that starts with sh. Decide the other rows one at a time."
            ],
            how: [
              "Think of the verb for now that turns into each past-tense word.",
              "Sprang goes with spring, and swung goes with swing. Both have a vowel that changed.",
              "Bent goes with bend, and shot goes with shoot."
            ],
            misconception: "A common mix-up is matching words that only look alike. Say Today I ___, Yesterday I ___ to check each pair.",
            why: "Sprang goes with spring, shot goes with shoot, bent goes with bend, and swung goes with swing."
          },
          {
            id: "SK-GUM3-3-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: [],
            prompt: "Which list has only verbs that change into a new word in the past tense?",
            choices: [
              { text: "lend, jump, lead" },
              { text: "feed, wash, lead" },
              { text: "paint, play, walk" },
              { text: "lend, feed, lead", correct: true }
            ],
            clue: "Say each verb in a sentence with yesterday. Ask whether it adds -ed or changes into a new word.",
            hints: [
              "Say each verb in a sentence with yesterday. Ask whether it adds -ed or changes into a new word.",
              "Test the words one at a time. Which words in each list add -ed in the past?",
              "Jump adds -ed in the past, so the list that has it has a regular verb. Check the other three."
            ],
            how: [
              "Say Yesterday I ___ for each verb in the lists.",
              "Lend becomes lent, feed becomes fed, and lead becomes led. All three change into new words.",
              "Jump, wash, paint, play and walk all add -ed, so each of the other lists has at least one regular verb."
            ],
            misconception: "A common mix-up is picking a list that has one special verb. Every verb in the list must change.",
            why: "The answer is \"lend, feed, lead.\" Lend becomes lent, feed becomes fed, and lead becomes led. Each other list has a verb that adds -ed, like jump, wash, paint, play or walk."
          },
          {
            id: "SK-GUM3-3-C10",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: ["p2"],
            prompt: "Sentence 9 of the draft has two verb mistakes. Choose the words that fix them.",
            text: "Then Ava {0} the first slice, and her fork {1} into the soft frosting.",
            slots: [
              {
                options: ["cuts", "cut", "cutted"],
                answer: 1
              },
              {
                options: ["sinked", "sank", "sinks"],
                answer: 1
              }
            ],
            clue: "Both verbs must tell about the past. Ask whether each choice is a real past-tense word.",
            hints: [
              "Both verbs must tell about the past. Ask whether each choice is a real past-tense word.",
              "Read sentence 9. Say each choice in its blank, and listen for the one that tells about last month.",
              "Sinks tells about now. Decide the rest."
            ],
            how: [
              "Both verbs must tell about the past, because the draft tells about last month.",
              "Cut stays the same in the past tense. Cutted is not a word, and cuts tells about now.",
              "Sink changes to sank. Sinked is not a word, and sinks tells about now."
            ],
            misconception: "A common mix-up is adding -ed to a verb that stays the same or changes. Cutted and sinked are both made up.",
            why: "The answers are cut and sank. Cut stays the same in the past, and sink becomes sank. Cutted and sinked are not words, and cuts and sinks tell about now."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM3-3-C11",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: ["p3"],
            prompt: "In the newsletter, two verbs added -ed when they should have changed into a new word. Select the TWO sentences that have them.",
            targets: ["p3:2:1", "p3:2:2", "p3:2:3", "p3:2:4", "p3:3:1"],
            answer: ["p3:2:1", "p3:2:3"],
            pick: 2,
            clue: "Look for verbs that sound made up when you say them about the past.",
            hints: [
              "Look for verbs that sound made up when you say them about the past.",
              "Read the five sentences aloud, one at a time. Stop at any verb that you have never heard anyone say.",
              "Wore is a special verb, and it is spelled correctly. Check the other four sentences."
            ],
            how: [
              "Find the verb in each sentence and ask whether it is a real past-tense word.",
              "Wore, tasted and sold are correct. Wear becomes wore, taste adds -ed, and sell becomes sold.",
              "Sentence 3: meeted is wrong. Meet becomes met.",
              "Sentence 5: sticked is wrong. Stick becomes stuck."
            ],
            misconception: "A common mix-up is thinking every past-tense verb adds -ed. Meet and stick change into new words.",
            why: "The errors are in \"On Monday, we meeted a real beekeeper named Mr. Cho.\" and \"Bees sticked to his gloves, but he was not afraid.\" Meet becomes met, and stick becomes stuck. Wore, tasted and sold are correct."
          },
          {
            id: "SK-GUM3-3-C12",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: ["p3"],
            prompt: "Sentence 8 of the draft has a verb mistake. Which revision fixes it?",
            choices: [
              { text: "We spent the money on new books for the library.", correct: true },
              { text: "We spend the money on new books for the library." },
              { text: "We spended the money on new books for the library." },
              { text: "We spented the money on new books for the library." }
            ],
            clue: "Say the verb, then ask whether it is a real past-tense word.",
            hints: [
              "Say the verb, then ask whether it is a real past-tense word.",
              "Read sentence 8 and say the verb. Then try each choice in the sentence.",
              "Spend tells about now, but the newsletter tells about this week. Check the other three."
            ],
            how: [
              "Find the verb in sentence 8: spended. The newsletter tells about things that already happened.",
              "Spend is irregular. It changes to spent and does not add -ed.",
              "The answer is \"We spent the money on new books for the library.\" Spend tells about now, and spended and spented are not real words."
            ],
            misconception: "A common mix-up is adding -ed to a verb that already changed. Spent has a t where spended has -ed.",
            why: "The answer is \"We spent the money on new books for the library.\" Spend is irregular, so its past tense is spent. Spend tells about now, and spended and spented are not words."
          },
          {
            id: "SK-GUM3-3-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: [],
            prompt: "Mina says, \"Every verb that tells about the past ends in -ed.\" Which TWO examples show that she is wrong?",
            pick: 2,
            choices: [
              { text: "Today my knee hurts. Last week my knee hurt.", correct: true },
              { text: "Today I paint a sign. Yesterday I painted a sign." },
              { text: "Today I wake up early. Yesterday I woke up early.", correct: true },
              { text: "Today I play outside. Yesterday I played outside." },
              { text: "Today I walk to school. Yesterday I walked to school." }
            ],
            clue: "To test a rule, look for examples that break it. Check how each past-tense verb ends.",
            hints: [
              "To test a rule, look for examples that break it. Check how each past-tense verb ends.",
              "Read each pair. Look at the end of the verb in the second sentence of each pair.",
              "Walked and painted both end in -ed. Decide about the other three."
            ],
            how: [
              "Look at the verb that tells about the past in each pair.",
              "Walked, painted and played all end in -ed, so they follow Mina's rule.",
              "Woke ends in e, and hurt ends in t. Neither one ends in -ed, so those two examples show that the rule is wrong."
            ],
            misconception: "A common mix-up is picking only special verbs that change a lot. Hurt looks the same in the past, and it still breaks the rule.",
            why: "The answers are \"Today I wake up early. Yesterday I woke up early.\" and \"Today my knee hurts. Last week my knee hurt.\" Woke and hurt do not end in -ed, so they break Mina's rule. Walked, painted and played all end in -ed."
          },
          {
            id: "SK-GUM3-3-C14",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: [],
            prompt: "Which verb belongs in the blank?",
            text: "Our puppy {0} a hole in the pillow last night.",
            slots: [
              {
                options: ["teared", "tore", "torn", "tears"],
                answer: 1
              }
            ],
            clue: "Last night tells you the verb must tell about the past. Tear is a special verb.",
            hints: [
              "Last night tells you the verb must tell about the past. Tear is a special verb.",
              "Say each choice in the sentence. Ask which one is a real word that works with no helper word.",
              "Tears tells about now. Decide among the other three."
            ],
            how: [
              "Last night tells you the action already happened.",
              "Tear is irregular, so it changes to tore in the past.",
              "The answer is tore. Teared is not a word, torn needs a helper word like has, and tears tells about now."
            ],
            misconception: "A common mix-up is picking torn. Torn needs a helper word like has or had.",
            why: "The answer is tore. Tear is irregular, so its past tense is tore. Teared is not a word, torn needs a helper word like has, and tears tells about now."
          },
          {
            id: "SK-GUM3-3-C15",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
            ],
            passages: [],
            prompt: "Which sentence keeps both verbs in the past tense?",
            choices: [
              { text: "Yesterday, Omar rose early and sits on the porch." },
              { text: "Yesterday, Omar rose early and sat on the porch.", correct: true },
              { text: "Yesterday, Omar rises early and sat on the porch." },
              { text: "Yesterday, Omar rised early and sat on the porch." }
            ],
            clue: "Yesterday tells you both verbs must tell about the past. Check each verb in each sentence.",
            hints: [
              "Yesterday tells you both verbs must tell about the past. Check each verb in each sentence.",
              "Find the two verbs in each choice. Say each one with the word yesterday in front of it.",
              "Sits tells about now, so any choice with it has a verb that does not fit. Check the others."
            ],
            how: [
              "Yesterday tells you both actions already happened.",
              "Rise changes to rose, and sit changes to sat. Both are past-tense words.",
              "The answer is \"Yesterday, Omar rose early and sat on the porch.\" The others have a verb that tells about now, or rised, which is not a word."
            ],
            misconception: "A common mix-up is fixing only one verb in a sentence. Check both.",
            why: "The answer is \"Yesterday, Omar rose early and sat on the porch.\" Rose and sat are both past-tense words. Sits and rises tell about now, and rised is not a word."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM3-3-S01",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Our team won the big game on Saturday.",
        "Tara lended Jo her red crayon.",
        "Dad drove us to the lake last summer.",
        "I wrote my name on the card."
      ],
      answer: [1],
      pick: 1,
      clue: "Find the verb in each sentence. Did any special verb get -ed added by mistake?",
      hints: [
        "Find the verb in each sentence. Did any special verb get -ed added by mistake?",
        "Say each verb with the word yesterday in front of it. Listen for the one that sounds made up.",
        "Drove is a real past-tense word. Check the other three sentences."
      ],
      how: [
        "Find the verb in each sentence.",
        "Won, drove and wrote are special verbs that changed the right way.",
        "Lended is wrong. Lend becomes lent."
      ],
      misconception: "A common mix-up is adding -ed to a special verb. Lend changes into lent.",
      why: "The error is in \"Tara lended Jo her red crayon.\" Lend is an irregular verb. Its past tense is lent. Won, drove and wrote are correct.",
      like: ["SK-GUM3-3-P4"]
    },
    {
      id: "SK-GUM3-3-S02",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Last night, Kai {0} a strange noise and {1} to the window.",
      slots: [
        {
          options: ["heared", "heard", "hears"],
          answer: 1
        },
        {
          options: ["went", "goed", "goes"],
          answer: 0
        }
      ],
      clue: "Last night already happened, so both verbs must tell about the past.",
      hints: [
        "Last night already happened, so both verbs must tell about the past.",
        "Say each choice in its blank. Ask which one is a real word that tells about the past.",
        "Goes tells about now. Decide the rest."
      ],
      how: [
        "Last night tells you both actions already happened.",
        "Hear changes to heard, and go changes to went. Neither one adds -ed.",
        "Heared and goed are not words, and hears and goes tell about now."
      ],
      misconception: "A common mix-up is adding -ed to a special verb, as in heared or goed.",
      why: "The answers are heard and went. Hear becomes heard, and go becomes went. Heared and goed are not words, and hears and goes tell about now.",
      like: ["SK-GUM3-3-P5"]
    },
    {
      id: "SK-GUM3-3-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: ["p4"],
      prompt: "The third sentence of the draft has a verb mistake. Which word belongs in the blank?",
      text: "An hour later, we {0} to a bridge over a stream.",
      slots: [
        {
          options: ["comed", "came", "comes"],
          answer: 1
        }
      ],
      clue: "Find the time clue in the draft. The verb must tell about the past.",
      hints: [
        "Find the time clue in the draft. The verb must tell about the past.",
        "Read the sentence and say each choice in the blank. Ask which one is a real past-tense word.",
        "Comes tells about now. Decide between the other two."
      ],
      how: [
        "The draft tells about last Sunday, so the verb must tell about the past.",
        "Come is an irregular verb. It changes to came instead of adding -ed.",
        "The answer is came. Comed is not a word, and comes tells about now."
      ],
      misconception: "A common mix-up is adding -ed to a special verb. Comed does not sound right.",
      why: "The answer is came. Come is an irregular verb, so its past tense is came. Comed is not a word, and comes tells about now.",
      like: ["SK-GUM3-3-C03"]
    },
    {
      id: "SK-GUM3-3-S04",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: ["p4"],
      prompt: "Which revision fixes the verb mistake in the fifth sentence of the draft?",
      choices: [
        { text: "Then we left the bridge and climbed a rocky hill.", correct: true },
        { text: "Then we leave the bridge and climbed a rocky hill." },
        { text: "Then we lefted the bridge and climbed a rocky hill." },
        { text: "Then we leaved the bridge and climbed a rocky hill." }
      ],
      clue: "Say the verb, then ask whether it is a real past-tense word.",
      hints: [
        "Say the verb, then ask whether it is a real past-tense word.",
        "Find the fifth sentence in the draft. Say its verb, then try each choice in the sentence.",
        "Leave tells about now, but the hike already happened. Check the other three."
      ],
      how: [
        "Find the verb in the fifth sentence: lefted. The hike happened last Sunday.",
        "Leave is irregular. It changes to left and does not add -ed.",
        "The answer is \"Then we left the bridge and climbed a rocky hill.\" Leave tells about now, and lefted and leaved are not real words."
      ],
      misconception: "A common mix-up is adding -ed to the new word. Left is already the past-tense word.",
      why: "The answer is \"Then we left the bridge and climbed a rocky hill.\" Leave is irregular, so its past tense is left. Leave tells about now, and lefted and leaved are not words.",
      like: ["SK-GUM3-3-C04"]
    },
    {
      id: "SK-GUM3-3-S05",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: ["p4"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "Look at the seventh sentence of the draft. Which choice writes its verb correctly?",
        choices: [
          { text: "Mom says that the falls were close." },
          { text: "Mom sayed that the falls were close." },
          { text: "Mom said that the falls were close.", correct: true },
          { text: "Mom saided that the falls were close." }
        ]
      },
      partB: {
        prompt: "What makes the answer to Part A correct?",
        choices: [
          { text: "The verb say becomes a different word in the past, so -ed is left off.", correct: true },
          { text: "The verb say is already in the past, so the sentence stays as it is." },
          { text: "The verb say must follow a helper word like had to show the past." },
          { text: "The verb say takes an -s in the past because Mom is one person." }
        ]
      },
      clue: "Say the verb, then decide whether it is a real past-tense word.",
      hints: [
        "Say the verb, then decide whether it is a real past-tense word.",
        "For Part A, read the sentence and say each choice in it. For Part B, think about what the verb say does in the past.",
        "In Part A, says tells about now. Check the other choices."
      ],
      how: [
        "Part A: find the verb in sentence 7. The hike already happened.",
        "Say is irregular. Its past tense is said, and it does not add -ed.",
        "Part A answer: \"Mom said that the falls were close.\" Says tells about now, and sayed and saided add -ed to a verb that changes.",
        "Part B answer: \"The verb say becomes a different word in the past, so -ed is left off.\""
      ],
      misconception: "A common mix-up is adding -ed to every verb in the past. Special verbs change into a new word.",
      why: "Part A: \"Mom said that the falls were close.\" Part B: \"The verb say becomes a different word in the past, so -ed is left off.\" Says tells about now, and sayed and saided are not words. Say does not need had here, and it does not add -s to tell about the past.",
      like: ["SK-GUM3-3-C05"]
    },
    {
      id: "SK-GUM3-3-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: ["p5"],
      prompt: "Select the TWO sentences that have a verb mistake.",
      targets: ["p5:1:3", "p5:2:1", "p5:2:2", "p5:2:3", "p5:3:1"],
      answer: ["p5:1:3", "p5:2:2"],
      pick: 2,
      clue: "Check every verb. Two of them are not real past-tense words.",
      hints: [
        "Check every verb. Two of them are not real past-tense words.",
        "Say the verb in each of the five sentences. Ask whether it is a real word that tells about the past.",
        "Named is a real past-tense word, and it is spelled correctly. Check the other four sentences."
      ],
      how: [
        "Find the verb in each sentence and ask whether it is a real past-tense word.",
        "Named, stuffed and agreed are correct, because each one adds -ed the right way.",
        "Sentence 3: payed is wrong. Pay becomes paid.",
        "Sentence 5: feeded is wrong. Feed becomes fed."
      ],
      misconception: "A common mix-up is adding -ed to every verb. Pay and feed change into new words.",
      why: "The errors are in \"He payed for a small hamster and a wheel.\" and \"That night, I feeded him seeds and a slice of apple.\" Pay becomes paid, and feed becomes fed. Named, stuffed and agreed are correct.",
      like: ["SK-GUM3-3-C06"]
    },
    {
      id: "SK-GUM3-3-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: [],
      prompt: "Choose the TWO sentences that use past-tense verbs correctly.",
      pick: 2,
      choices: [
        { text: "The scratch bleeded a little." },
        { text: "The old clock struck noon.", correct: true },
        { text: "Our team leaded the whole game." },
        { text: "The class swimmed in the pond." },
        { text: "Ben heard a loud whistle from the field.", correct: true }
      ],
      clue: "Find the verb in each sentence. Ask whether it is a real past-tense word or a special verb with -ed added.",
      hints: [
        "Find the verb in each sentence. Ask whether it is a real past-tense word or a special verb with -ed added.",
        "Say each verb with the word yesterday in front of it. Listen for the ones that sound made up.",
        "Swimmed is not a real word. Decide about the other four."
      ],
      how: [
        "Find the verb in each sentence and ask whether it is a real past-tense word.",
        "Strike becomes struck, and hear becomes heard. Both change into new words.",
        "The others are wrong: it should be bled, led and swam."
      ],
      misconception: "A common mix-up is thinking every past-tense verb ends in -ed. Struck and heard do not, and they are correct.",
      why: "The answers are \"The old clock struck noon.\" and \"Ben heard a loud whistle from the field.\" Strike becomes struck, and hear becomes heard. The others should say bled, led and swam.",
      like: ["SK-GUM3-3-C07"]
    },
    {
      id: "SK-GUM3-3-S08",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: [],
      prompt: "Match each past-tense word to the verb it comes from.",
      cols: ["weep", "steal", "bleed", "mean"],
      rows: [
        { text: "wept", answer: 0 },
        { text: "meant", answer: 3 },
        { text: "bled", answer: 2 },
        { text: "stole", answer: 1 }
      ],
      clue: "Say each word after yesterday, then think of the verb you would use for today.",
      hints: [
        "Say each word after yesterday, then think of the verb you would use for today.",
        "Start with the row you are surest about. Think about the first letters and the vowel of each word.",
        "Meant goes with the verb that starts with m. Decide the other rows one at a time."
      ],
      how: [
        "Think of the verb for now that turns into each past-tense word.",
        "Wept goes with weep, and stole goes with steal. The vowel changed in each one.",
        "Bled goes with bleed, and meant goes with mean."
      ],
      misconception: "A common mix-up is matching words that only look alike. Say Today I ___, Yesterday I ___ to check each pair.",
      why: "Wept goes with weep, meant goes with mean, bled goes with bleed, and stole goes with steal.",
      like: ["SK-GUM3-3-C08"]
    },
    {
      id: "SK-GUM3-3-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: [],
      prompt: "Which group of verbs never adds -ed to tell about the past?",
      choices: [
        { text: "pay, wait, sit" },
        { text: "say, call, sit" },
        { text: "pay, say, sit", correct: true },
        { text: "wait, call, walk" }
      ],
      clue: "Say each verb in a sentence with yesterday. Ask whether it adds -ed or becomes a new word.",
      hints: [
        "Say each verb in a sentence with yesterday. Ask whether it adds -ed or becomes a new word.",
        "Test the words one at a time. Which words in each list add -ed in the past?",
        "Wait adds -ed in the past, so any list that has it has a regular verb. Check the other lists."
      ],
      how: [
        "Say Yesterday I ___ for each verb in the lists.",
        "Pay becomes paid, say becomes said, and sit becomes sat. All three become new words.",
        "Wait, call and walk all add -ed, so each of the other lists has at least one regular verb."
      ],
      misconception: "A common mix-up is picking a list that has one special verb. Every verb in the list must change.",
      why: "The answer is \"pay, say, sit.\" Pay becomes paid, say becomes said, and sit becomes sat. Each other list has a verb that adds -ed, like wait, call or walk.",
      like: ["SK-GUM3-3-C09"]
    },
    {
      id: "SK-GUM3-3-S10",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: ["p5"],
      prompt: "Sentence 8 of the draft has two verb mistakes. Choose the words that fix them.",
      text: "At midnight, Biscuit {0} out of his cage, and I {1} him before he reached the door.",
      slots: [
        {
          options: ["crept", "creeped", "creeps"],
          answer: 0
        },
        {
          options: ["finds", "found", "finded"],
          answer: 1
        }
      ],
      clue: "Both verbs must tell about the past. Ask whether each choice is a real past-tense word.",
      hints: [
        "Both verbs must tell about the past. Ask whether each choice is a real past-tense word.",
        "Read sentence 8. Say each choice in its blank, and listen for the one that tells about last year.",
        "Finds tells about now. Decide the rest."
      ],
      how: [
        "Both verbs must tell about the past, because the draft tells about last year.",
        "Creep changes to crept. Creeped is not a word, and creeps tells about now.",
        "Find changes to found. Finded is not a word, and finds tells about now."
      ],
      misconception: "A common mix-up is adding -ed to a verb that changes. Creeped and finded are both made up.",
      why: "The answers are crept and found. Creep becomes crept, and find becomes found. Creeped and finded are not words, and creeps and finds tell about now.",
      like: ["SK-GUM3-3-C10"]
    },
    {
      id: "SK-GUM3-3-S11",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: ["p6"],
      prompt: "Select the TWO sentences that have a verb mistake.",
      targets: ["p6:2:1", "p6:2:2", "p6:2:3", "p6:3:1", "p6:3:3"],
      answer: ["p6:2:1", "p6:3:1"],
      pick: 2,
      clue: "Check every verb. Two of them added -ed when they should have changed into a new word.",
      hints: [
        "Check every verb. Two of them added -ed when they should have changed into a new word.",
        "Say the verb in each of the five sentences. Ask whether it is a real word that tells about the past.",
        "Carried is a real past-tense word, and it is spelled correctly. Check the other four sentences."
      ],
      how: [
        "Find the verb in each sentence and ask whether it is a real past-tense word.",
        "Carried, floated and ended are correct, because each one adds -ed the right way.",
        "Sentence 3: builded is wrong. Build becomes built.",
        "Sentence 7: forgived is wrong. Forgive becomes forgave."
      ],
      misconception: "A common mix-up is thinking every past-tense verb adds -ed. Build and forgive change into new words.",
      why: "The errors are in \"On Tuesday, the older kids builded a raft from wood and rope.\" and \"On Thursday, a camper named Priya forgived her brother for losing her sock.\" Build becomes built, and forgive becomes forgave. Carried, floated and ended are correct.",
      like: ["SK-GUM3-3-C11"]
    },
    {
      id: "SK-GUM3-3-S12",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: ["p6"],
      prompt: "Which revision fixes the verb mistake in sentence 8 of the draft?",
      choices: [
        { text: "I knowed it was hard to do." },
        { text: "I know it was hard to do." },
        { text: "I knewed it was hard to do." },
        { text: "I knew it was hard to do.", correct: true }
      ],
      clue: "Say the verb, then ask whether it is a real past-tense word.",
      hints: [
        "Say the verb, then ask whether it is a real past-tense word.",
        "Find sentence 8 and say its verb. Then try each choice in the sentence.",
        "Know tells about now, but the newsletter tells about this week. Check the other three."
      ],
      how: [
        "Find the verb in sentence 8: knowed. The newsletter tells about things that already happened.",
        "Know is irregular. It changes to knew and does not add -ed.",
        "The answer is \"I knew it was hard to do.\" Know tells about now, and knowed and knewed are not real words."
      ],
      misconception: "A common mix-up is adding -ed to a verb that already changed. Knew is already the past-tense word.",
      why: "The answer is \"I knew it was hard to do.\" Know is irregular, so its past tense is knew. Know tells about now, and knowed and knewed are not words.",
      like: ["SK-GUM3-3-C12"]
    },
    {
      id: "SK-GUM3-3-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: [],
      prompt: "Ravi says, \"To tell about the past, just add -ed to the verb.\" Which TWO examples show that he is wrong?",
      pick: 2,
      choices: [
        { text: "Today I clap along. Yesterday I clapped along." },
        { text: "Today I say hello. Yesterday I said hello.", correct: true },
        { text: "Today I wash the cup. Yesterday I washed the cup." },
        { text: "Today I begin to read. Yesterday I began to read.", correct: true },
        { text: "Today I kick the ball. Yesterday I kicked the ball." }
      ],
      clue: "To test a rule, look for examples that break it. Ask whether the past is made by adding -ed.",
      hints: [
        "To test a rule, look for examples that break it. Ask whether the past is made by adding -ed.",
        "Read each pair. Ask whether the verb that tells about yesterday is the other verb with -ed added.",
        "Kicked and clapped both add -ed. Decide about the other three."
      ],
      how: [
        "Check each pair against Ravi's rule: add -ed to the verb.",
        "Kicked, clapped and washed all add -ed, so the rule works for them.",
        "Began and said are new words, not the verb with -ed on the end. Those two examples show that the rule is wrong."
      ],
      misconception: "A common mix-up is thinking every verb follows the same rule. Some verbs become new words.",
      why: "The answers are \"Today I begin to read. Yesterday I began to read.\" and \"Today I say hello. Yesterday I said hello.\" Began and said are new words, not the verb with -ed added. Kicked, clapped and washed follow Ravi's rule.",
      like: ["SK-GUM3-3-C13"]
    },
    {
      id: "SK-GUM3-3-S14",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: [],
      prompt: "Which verb belongs in the blank?",
      text: "Dad {0} the garage door before bed last night.",
      slots: [
        {
          options: ["shutted", "shut", "shuts", "shutting"],
          answer: 1
        }
      ],
      clue: "Last night tells you the verb must tell about the past. Look for a verb that is a real word.",
      hints: [
        "Last night tells you the verb must tell about the past. Look for a verb that is a real word.",
        "Say each choice in the sentence. Ask which one is a real word that tells about the past.",
        "Shuts tells about now. Decide among the other three."
      ],
      how: [
        "Last night tells you the action already happened.",
        "Shut stays the same in the past tense, so shut is correct.",
        "Shutted is not a word, shuts tells about now, and shutting needs a helper word like was."
      ],
      misconception: "A common mix-up is thinking a verb must change to show the past. Shut looks the same in both.",
      why: "The answer is shut. Shut stays the same in the past tense. Shutted is not a word, shuts tells about now, and shutting needs a helper word like was.",
      like: ["SK-GUM3-3-C14"]
    },
    {
      id: "SK-GUM3-3-S15",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs"
      ],
      passages: [],
      prompt: "Which sentence keeps both verbs in the past tense?",
      choices: [
        { text: "Last Friday, Lena hears a noise and hid under her blanket." },
        { text: "Last Friday, Lena heard a noise and hides under her blanket." },
        { text: "Last Friday, Lena heard a noise and hid under her blanket.", correct: true },
        { text: "Last Friday, Lena heared a noise and hid under her blanket." }
      ],
      clue: "Last Friday tells you both verbs must tell about the past. Check each verb in each sentence.",
      hints: [
        "Last Friday tells you both verbs must tell about the past. Check each verb in each sentence.",
        "Find the two verbs in each choice. Say each one with the words last Friday in front of it.",
        "Hides tells about now, so any choice with it has a verb that does not fit. Check the others."
      ],
      how: [
        "Last Friday tells you both actions already happened.",
        "Hear changes to heard, and hide changes to hid. Both are past-tense words.",
        "The answer is \"Last Friday, Lena heard a noise and hid under her blanket.\" The others have a verb that tells about now, or heared, which is not a word."
      ],
      misconception: "A common mix-up is fixing only one verb in a sentence. Check both.",
      why: "The answer is \"Last Friday, Lena heard a noise and hid under her blanket.\" Heard and hid are both past-tense words. Hears and hides tell about now, and heared is not a word.",
      like: ["SK-GUM3-3-C15"]
    }
  ],
  addons: {
    "SK-GUM3-3-P1": {
      hints: [
        "Find the time clue in the sentence. Last summer tells you the verb must tell about the past.",
        "Say each choice in the sentence. Ask which one is a real past-tense word.",
        "Drive tells about now. Decide among the other three."
      ],
      how: [
        "Last summer tells you the action already happened.",
        "Drive is irregular. It changes to drove and does not add -ed.",
        "The answer is drove. Drived and droved are not words, and drive tells about now."
      ],
      misconception: "A common mix-up is adding -ed to a special verb. Drived does not sound right."
    },
    "SK-GUM3-3-P2": {
      hints: [
        "Each sentence tells about the past. Find the verb in each one and ask whether it is a real word.",
        "Say each verb with the word yesterday in front of it. Listen for the ones that sound made up.",
        "Eated is not a real word. Check the other three sentences."
      ],
      how: [
        "Find the verb in each sentence.",
        "Write changes to wrote, so \"Kenji wrote a letter to his grandma last week.\" is correct.",
        "The others are wrong: it should be ate, flew and slept."
      ],
      misconception: "A common mix-up is adding -ed to every verb in the past."
    },
    "SK-GUM3-3-P3": {
      hints: [
        "Put each verb after the word yesterday: \"Yesterday I ___.\" Which past-tense word sounds right?",
        "Start with the row you are surest about. Then decide the rest one at a time.",
        "Sat goes with the verb that starts with s. Decide the other rows."
      ],
      how: [
        "Say Today I ___, Yesterday I ___ for each verb.",
        "Sit becomes sat, and find becomes found.",
        "Grow becomes grew, and buy becomes bought."
      ],
      misconception: "A common mix-up is matching words that only look alike. Say the pair out loud to check."
    },
    "SK-GUM3-3-P4": {
      hints: [
        "Find the verb in each sentence. Did any special verb get -ed added by mistake?",
        "Say each verb with the word yesterday in front of it. Listen for the one that sounds made up.",
        "Drew is a real past-tense word. Check the other three sentences."
      ],
      how: [
        "Find the verb in each sentence.",
        "Drew, sang and found are special verbs that changed the right way.",
        "Freezed is wrong. Freeze becomes froze."
      ],
      misconception: "A common mix-up is adding -ed to a special verb. Freeze changes into froze."
    },
    "SK-GUM3-3-P5": {
      hints: [
        "Last Saturday already happened, so both verbs must tell about the past.",
        "Say each choice in its blank. Ask which one is a real past-tense word.",
        "Rides tells about now. Decide the rest."
      ],
      how: [
        "Last Saturday tells you both actions already happened.",
        "Ride changes to rode, and see changes to saw.",
        "Rided and seed are not words, rides tells about now, and seen needs a helper word like has."
      ],
      misconception: "A common mix-up is picking seen. Seen needs a helper word like has or had."
    }
  },
  /* B6:core:end */
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
  ],
  /* PP-004 form B of the skill check, written by formB-lang (see docs/audits/work/pp004-formB-formB-lang.md).
     Same code, 7 points and DOK mix as form A; new sentences, and every verb is new to this lesson
     and used in only one item. NEEDS INDEPENDENT REVIEW before it is relied on. */
  testB: [
    { id: "SK-GUM3-3-TB1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Choose the verb that belongs in the blank.",
      stem: "At recess yesterday, Ruby ____ off the monkey bars and scraped her knee.",
      choices: [
        { text: "fell", correct: true },
        { text: "falled" },
        { text: "fallen" },
        { text: "falls" }
      ],
      clue: "Yesterday tells you the action already happened. Fall is a special verb. Which word tells about the past with no helper word?",
      why: "The answer is fell. Fall is an irregular verb, so its past tense is fell. Falled is not a word, fallen needs a helper word like has, and falls tells about now." },
    { id: "SK-GUM3-3-TB2", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO sentences use the correct past-tense verb?",
      choices: [
        { text: "Mom told us a funny story at dinner last night.", correct: true },
        { text: "The whole class stood in line by the door.", correct: true },
        { text: "Keisha holded the baby kitten in her lap." },
        { text: "The wind shaked our windows during the storm." },
        { text: "Our team losed the soccer game on Saturday." }
      ],
      clue: "Find the verb in each sentence. Is it a real past-tense word, or a special verb with -ed added by mistake?",
      why: "The answers are \"Mom told us a funny story at dinner last night.\" and \"The whole class stood in line by the door.\" Tell becomes told, and stand becomes stood. The others should say held, shook and lost." },
    { id: "SK-GUM3-3-TB3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the verb that correctly completes the sentence.",
      text: "Last Sunday, Grandpa {0} his lucky blue hat to the fishing pond.",
      slots: [{ options: ["weared", "wore", "wear", "worn"], answer: 1 }],
      clue: "Last Sunday already happened. Wear is a special verb that does not add -ed.",
      why: "The answer is wore. Wear is an irregular verb, so its past tense is wore. Weared is not a word, wear tells about now, and worn needs a helper word like has." },
    { id: "SK-GUM3-3-TB4", type: "hottext", points: 2, dok: 2, passages: [],
      prompt: "Two of these sentences have a verb mistake. Select the TWO sentences.",
      options: [
        "We chose a puppy at the animal shelter.",
        "The phone ringed three times before Mom answered it.",
        "Nia forgot her jacket on the bus.",
        "Leo sended a birthday card to his cousin in Macon.",
        "The top spun across the kitchen floor."
      ],
      answer: [1, 3], pick: 2,
      clue: "Find the past-tense verb in each sentence. Which two special verbs got -ed added when they should have changed into a new word?",
      why: "The errors are in \"The phone ringed three times before Mom answered it.\" and \"Leo sended a birthday card to his cousin in Macon.\" Ring becomes rang, and send becomes sent. Chose, forgot and spun are the correct past tense of choose, forget and spin." },
    { id: "SK-GUM3-3-TB5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "This sentence has one verb mistake. Which change fixes it?",
      stem: "On Friday, Imani took her dog to the park, and it chased a ball until it getted tired.",
      choices: [
        { text: "Change getted to got.", correct: true },
        { text: "Change getted to gotten." },
        { text: "Change took to taked." },
        { text: "Change took to taken." }
      ],
      clue: "Check each verb in the sentence. Which one is not a real past-tense word? Then pick the past-tense word that needs no helper word.",
      why: "The answer is \"Change getted to got.\" Get is an irregular verb, so its past tense is got. Gotten needs a helper word like has. Took is already correct, because take changes to took. Taked is not a word, and taken needs a helper word too." }
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
      "They can join two words (apples and pears), two groups of words (in the yard or at the park), or two whole sentences.",
      "Three more have jobs too. Yet works like but. For gives a reason, like because. Nor goes with a no: I did not call, nor did I write."
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
    },
    {
      show: ["The hill was steep, (yet / so) we climbed all the way to the top."],
      ask: "Which joining word fits in the parentheses?",
      steps: [
        "Read both parts. A steep hill is hard to climb, but the people climbed it.",
        "The second part is a surprise. It goes against what you would expect.",
        "Yet works like but and shows a surprise. So would tell a result, and that does not fit."
      ],
      answer: "The hill was steep, yet we climbed all the way to the top."
    }
  ],
  parent: "Say the first half of a sentence and a joining word, like \"I was hungry, so...\" or \"I was hungry, but...\" and let your child finish it. Talk about how the ending changes with each joining word.",
  passages: [
    /* B6:passages:start */
    {
      id: "p1",
      title: "Yoga for Kids",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class tried yoga for the first time on Monday.",
          "(2) Mr. Lee gave each of us a blue mat for the gym floor.",
          "(3) At first I felt silly, but then I started to like it."
        ],
        [
          "(4) We stretched our arms up high, or we reached for our toes.",
          "(5) Balancing on one foot looked easy, so it was really hard.",
          "(6) We breathed slowly, and the room grew quiet."
        ],
        [
          "(7) Next week we can do yoga inside, so we can do it outside under the trees.",
          "(8) Mr. Lee will pick only one place on Friday.",
          "(9) I hope we choose the trees, for the shade feels nice.",
          "(10) Mr. Lee said we could not bring snacks, nor could we bring toys."
        ],
        [
          "(11) Yoga is fun, and I want to do it again."
        ]
      ]
    },
    {
      id: "p2",
      title: "Chalk Art Day",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Friday, our class drew chalk art on the sidewalk by the gym.",
          "(2) Ms. Rao gave each of us a bucket of colorful chalk.",
          "(3) My whale was going to be huge, and the sidewalk square was too small, or I drew a small one."
        ],
        [
          "(4) My friend Omar drew a bright sun with a big smile.",
          "(5) Then the sky grew gray.",
          "(6) The rain clouds looked dark.",
          "(7) We kept drawing."
        ],
        [
          "(8) Soon the first drops fell, and we ran inside.",
          "(9) Our art washed away, but we had fun.",
          "(10) Next time, we will check the weather first."
        ]
      ]
    },
    {
      id: "p3",
      title: "Swim Lesson Day",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Saturday, I had my first swim lesson at the town pool.",
          "(2) I was nervous, but my coach smiled and waved."
        ],
        [
          "(3) She told us to kick our legs, yet to keep our faces down.",
          "(4) The water was cold, so I wanted to get out.",
          "(5) I could stay in the shallow end, so I could swim to the rope.",
          "(6) My coach said I could not swim past the rope, nor could I go under it."
        ],
        [
          "(7) I kicked hard, for I wanted to reach the wall.",
          "(8) My coach clapped when I touched it."
        ],
        ["(9) I cannot wait for next Saturday."]
      ]
    },
    {
      id: "p4",
      title: "Jump Rope Club",
      byline: "A third grader's draft",
      genre: "Student draft (announcement)",
      draft: true,
      paragraphs: [
        [
          "(1) Welcome to the Jump Rope Club!",
          "(2) We meet every Thursday for an hour after school in the gym.",
          "(3) Beginners can start with short ropes and slow jumps."
        ],
        [
          "(4) Our coach, Ms. Yang, shows us a new trick each week, or she helps us practice the old ones.",
          "(5) Double jumps look easy, so they take lots of practice.",
          "(6) The club has two rules for every member, and both are easy."
        ],
        [
          "(7) You can bring your own rope, so you can borrow one from the closet.",
          "(8) You only need one rope, so choose the one you like.",
          "(9) Please be on time, for we start right at three o'clock."
        ],
        ["(10) We hope to see you there!"]
      ]
    },
    {
      id: "p5",
      title: "The Scarecrow Contest",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last October, our town held a scarecrow contest in the park.",
          "(2) Each family got a pile of old clothes and a bag of straw.",
          "(3) My dad wanted to make a pirate, and we did not have a hat, or we used a paper bag."
        ],
        [
          "(4) My sister gave our scarecrow a big red nose.",
          "(5) Then the wind began to blow.",
          "(6) The scarecrows shook on their poles.",
          "(7) Nobody left the park.",
          "(8) Soon the judges walked past our scarecrow."
        ],
        [
          "(9) Our scarecrow did not win, but we got a ribbon for trying.",
          "(10) Next year, we will make two."
        ]
      ]
    },
    {
      id: "p6",
      title: "Snow Cone Stand",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last spring, our class ran a snow cone stand at the school fair.",
          "(2) We had cherry syrup and lime syrup, but grape was the favorite."
        ],
        [
          "(3) The sun was hot, or the line grew long.",
          "(4) Some kids wanted cherry, so some kids wanted lime.",
          "(5) We worked quickly, for the line kept growing.",
          "(6) I spilled syrup on my shirt, but I did not mind."
        ],
        [
          "(7) By four o'clock, the ice was gone.",
          "(8) We counted the money and cleaned the stand.",
          "(9) Our class raised enough to buy two new soccer balls.",
          "(10) Everyone agreed that it was our best day of the year."
        ]
      ]
    }
    /* B6:passages:end */
  ],
  practice: [
    { id: "SK-GUM3-4-P1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the joining word that makes the most sense.",
      text: "The sky was dark and cloudy, {0} we brought our umbrellas.",
      slots: [{ options: ["but", "or", "so"], answer: 2 }],
      clue: "Why did they bring umbrellas? Read both parts and think about how they connect.",
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
      clue: "Find the word that links the two things you could do. Cover it and see if the two parts are still connected.",
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
      why: "The answers are \"I was hungry, so I ate a banana.\" and \"Hana can play the piano and the drums.\" Being hungry is why I ate, the word so fits, and and adds the drums. Leaving a coat at home when it is cold needs but. A choice between drawing and painting needs or. Laughing because the movie was funny needs so." }
  ],
  /* B6:core:start */
  /* ---------- Expansion 2026-10-22, batch B6 (GUM Master) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test or testB.
     Author log: docs/expansion-2026-10-22/batches/B6-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          { ref: "SK-GUM3-4-P5" },
          {
            id: "SK-GUM3-4-C02",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: ["p1"],
            prompt: "Sentence 4 of the draft uses the wrong joining word. Choose the word that fixes it.",
            text: "We stretched our arms up high, {0} we reached for our toes.",
            slots: [
              {
                options: ["or", "and", "but", "so"],
                answer: 1
              }
            ],
            clue: "Ask how the two parts connect. Are they a choice, a result, a difference, or two things that go together?",
            hints: [
              "Ask how the two parts connect. Are they a choice, a result, a difference, or two things that go together?",
              "Read sentence 4 and picture the class doing both actions. Then try each joining word in the blank.",
              "But shows that the second part is different from the first. Decide among the other three."
            ],
            how: [
              "Read both parts: the class stretched up high, and the class reached for their toes.",
              "The students did both actions. They are not a choice, a difference, or a result.",
              "The answer is and, because and adds one more thing. Or gives a choice, but shows something different, and so tells a result."
            ],
            misconception: "A common mix-up is picking or because two actions are named. Or is for a choice, and the class did both.",
            why: "The answer is and. The class did both things, so the second part adds one more thing. Or gives a choice, but shows something different, and so tells a result."
          },
          {
            id: "SK-GUM3-4-C03",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: ["p1"],
            prompt: "Sentence 5 of the draft uses the wrong joining word. Which revision fixes it?",
            choices: [
              { text: "Balancing on one foot looked easy, so it was really hard." },
              { text: "Balancing on one foot looked easy, but it was really hard.", correct: true },
              { text: "Balancing on one foot looked easy, or it was really hard." },
              { text: "Balancing on one foot looked easy, for it was really hard." }
            ],
            clue: "Read both parts. Ask whether the second part is a result, a choice, or something different.",
            hints: [
              "Read both parts. Ask whether the second part is a result, a choice, or something different.",
              "Read sentence 5. Ask what you would expect after the word easy, and what the writer says instead.",
              "Or gives a choice, and the writer is not choosing between two things. Check the other three."
            ],
            how: [
              "Read both parts: the balance looked easy, but it was really hard.",
              "The second part is different from what you would expect. That is a surprise.",
              "The answer is \"Balancing on one foot looked easy, but it was really hard.\" So tells a result, or gives a choice, and for gives a reason."
            ],
            misconception: "A common mix-up is using so for any two ideas. So only tells a result, and being easy does not cause being hard.",
            why: "The answer is \"Balancing on one foot looked easy, but it was really hard.\" But joins two ideas that are different. The other joining words do not fit: so tells a result, or gives a choice, and for gives a reason."
          },
          {
            id: "SK-GUM3-4-C04",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Sentence 7 of the draft uses the wrong joining word. Which revision fixes it?",
              choices: [
                { text: "Next week we can do yoga inside, but we can do it outside under the trees." },
                { text: "Next week we can do yoga inside, nor we can do it outside under the trees." },
                { text: "Next week we can do yoga inside, or we can do it outside under the trees.", correct: true },
                { text: "Next week we can do yoga inside, so we can do it outside under the trees." }
              ]
            },
            partB: {
              prompt: "Which sentence from the draft best supports the revision in Part A?",
              choices: [
                { text: "We breathed slowly, and the room grew quiet." },
                { text: "Mr. Lee will pick only one place on Friday.", correct: true },
                { text: "At first I felt silly, but then I started to like it." },
                { text: "Yoga is fun, and I want to do it again." }
              ]
            },
            clue: "Find the two ideas the joining word connects, and ask how they are related.",
            hints: [
              "Find the two ideas the joining word connects, and ask how they are related.",
              "For Part A, say each choice and ask what job the joining word does. For Part B, reread the draft and decide which sentence tells you something about choosing.",
              "In Part A, nor goes with a sentence that says no, and sentence 7 does not say no. Check the other choices."
            ],
            how: [
              "Part A: sentence 7 names two places, inside and outside. The class cannot be in both places at the same time.",
              "Two places to pick from make a choice, and or is the joining word for a choice.",
              "Part A answer: \"Next week we can do yoga inside, or we can do it outside under the trees.\" But, nor and so do not fit the meaning.",
              "Part B answer: \"Mr. Lee will pick only one place on Friday.\" It shows that only one of the two places will be chosen."
            ],
            misconception: "A common mix-up is picking so because the sentence is about next week. So tells a result, and the second part is not a result of the first.",
            why: "Part A: \"Next week we can do yoga inside, or we can do it outside under the trees.\" Part B: \"Mr. Lee will pick only one place on Friday.\" Only one place will be chosen, so the two parts are a choice and need or. The other sentences do not talk about choosing between two places."
          },
          {
            id: "SK-GUM3-4-C05",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: ["p1"],
            prompt: "Select the sentence in which the word for works as a joining word that gives a reason.",
            targets: ["p1:1:1", "p1:1:2", "p1:1:3", "p1:3:3", "p1:3:4"],
            answer: ["p1:3:3"],
            pick: 1,
            clue: "Some words have more than one job. Ask whether for joins two parts of a sentence or only starts a short phrase.",
            hints: [
              "Some words have more than one job. Ask whether for joins two parts of a sentence or only starts a short phrase.",
              "Look for the word for in the sentences. Then ask what comes right after it, a whole new idea or just a few words.",
              "In sentence 1, for starts the phrase for the first time. Check the other sentences."
            ],
            how: [
              "Find the word for in each sentence. A joining word has a whole idea on each side of it.",
              "In sentences 1 and 2, for begins a short phrase: for the first time, and for the gym floor. Those are not joining words.",
              "Sentence 9 says I hope we choose the trees, for the shade feels nice. For joins two ideas and gives a reason, like because."
            ],
            misconception: "A common mix-up is picking any sentence that has the word for. A joining word must connect two ideas.",
            why: "The answer is sentence 9, \"I hope we choose the trees, for the shade feels nice.\" For joins two ideas and gives the reason for choosing the trees. In sentences 1 and 2, for only starts a short phrase, and the other sentences do not use for."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM3-4-C06",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: [],
            prompt: "Which sentence joins the two short sentences best?",
            stem: "Luis wanted a new book. He did not have enough money.",
            choices: [
              { text: "Luis wanted a new book, so he did not have enough money." },
              { text: "Luis wanted a new book, or he did not have enough money." },
              { text: "Luis wanted a new book, but he did not have enough money.", correct: true },
              { text: "Luis wanted a new book, for he did not have enough money." }
            ],
            clue: "Ask how the second idea connects to the first. Is it a result, a choice, or something different?",
            hints: [
              "Ask how the second idea connects to the first. Is it a result, a choice, or something different?",
              "Say each sentence aloud. Ask whether the two parts make sense together.",
              "Or gives a choice, and Luis is not choosing between the two parts. Check the other three."
            ],
            how: [
              "Wanting a book and not having enough money work against each other.",
              "The second part is different from what Luis wanted. That calls for but.",
              "The answer is \"Luis wanted a new book, but he did not have enough money.\" So and for make the second part a result or reason, and or makes it a choice."
            ],
            misconception: "A common mix-up is picking so because both parts are about the same story. So must tell a result.",
            why: "The answer is \"Luis wanted a new book, but he did not have enough money.\" But joins two ideas that are different. So tells a result, or gives a choice, and for gives a reason, and none of those fit."
          },
          {
            id: "SK-GUM3-4-C07",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: [],
            prompt: "Choose the TWO sentences that use nor correctly.",
            pick: 2,
            choices: [
              { text: "We can have soup, nor we can have salad." },
              { text: "Kofi did not pack a coat, nor did he pack gloves.", correct: true },
              { text: "I wanted to swim, nor the pool was closed." },
              { text: "The cat would not eat, nor would it drink.", correct: true },
              { text: "Mina likes apples, nor she likes grapes." }
            ],
            clue: "Nor goes with a sentence that says no. Look at what the first part says.",
            hints: [
              "Nor goes with a sentence that says no. Look at what the first part says.",
              "Read each sentence. Ask whether the first part says something did not happen.",
              "Mina likes apples says yes, not no. Decide about the other four."
            ],
            how: [
              "Nor is used after a part that says something did not happen.",
              "Kofi did not pack a coat, and the cat would not eat. Both start with a no, so nor can follow.",
              "Mina likes apples, we can have soup, and I wanted to swim all say yes, so nor does not fit."
            ],
            misconception: "A common mix-up is using nor like or in a sentence that has no no. Nor needs a no in the first part.",
            why: "The answers are \"Kofi did not pack a coat, nor did he pack gloves.\" and \"The cat would not eat, nor would it drink.\" Each first part says something did not happen, so nor can follow. In the other sentences, the first part says yes, so nor does not fit."
          },
          {
            id: "SK-GUM3-4-C08",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: [],
            prompt: "Match each joining word to the sentence it completes.",
            cols: ["for", "yet", "nor", "so"],
            rows: [
              { text: "The path was muddy, ___ we kept going.", answer: 1 },
              { text: "Tomas did not wave, ___ did he smile.", answer: 2 },
              { text: "Luis was sick, ___ he stayed home.", answer: 3 },
              { text: "Bring a hat, ___ the sun is strong.", answer: 0 }
            ],
            clue: "Read each sentence with a joining word in the blank. Ask how the second part connects to the first.",
            hints: [
              "Read each sentence with a joining word in the blank. Ask how the second part connects to the first.",
              "Start with the sentence you are surest about. Think about which sentence begins with a no.",
              "Tomas did not wave begins with a no. Decide the other rows one at a time."
            ],
            how: [
              "Ask how the second part connects to the first in each sentence.",
              "Tomas did not wave, nor did he smile. Nor goes with a no.",
              "Sick is the reason Luis stayed home, so so fits. The sun is the reason for the hat, so for fits. Keeping going on a muddy path is a surprise, so yet fits."
            ],
            misconception: "A common mix-up is mixing up for and so. For gives the reason, and so tells the result.",
            why: "Yet goes with the path sentence, because going on through mud is a surprise. Nor goes with Tomas did not wave. So goes with Luis was sick, because sick is why he stayed home. For goes with the hat sentence, because the sun is the reason."
          },
          {
            id: "SK-GUM3-4-C09",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: ["p2"],
            prompt: "Sentence 3 of the draft uses the wrong joining word two times. Choose the words that fix it.",
            text: "My whale was going to be huge, {0} the sidewalk square was too small, {1} I drew a small one.",
            slots: [
              {
                options: ["or", "but", "so"],
                answer: 1
              },
              {
                options: ["but", "so", "for"],
                answer: 1
              }
            ],
            clue: "Read the whole sentence. Ask how each part connects to the part before it.",
            hints: [
              "Read the whole sentence. Ask how each part connects to the part before it.",
              "Say each choice in its blank. Think about what the writer wanted, what went wrong, and what the writer did.",
              "Or gives a choice, and the writer is not choosing between two things in the first blank. Decide the rest."
            ],
            how: [
              "The whale was going to be huge, and the square was too small. That is a problem, so the first blank shows something different.",
              "The square was too small, and the writer drew a small whale. The small whale is the result.",
              "The answers are but and so."
            ],
            misconception: "A common mix-up is choosing the same kind of joining word for both blanks. Each blank connects its parts in a different way.",
            why: "The answers are but and so. The plan for a huge whale goes against the small square, so but fits first. The small square is why the writer drew a small whale, so so fits second."
          },
          {
            id: "SK-GUM3-4-C10",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: ["p2"],
            prompt: "Sentences 6 and 7 of the draft are short. Which choice joins them best?",
            choices: [
              { text: "The rain clouds looked dark, yet we kept drawing.", correct: true },
              { text: "The rain clouds looked dark, so we kept drawing." },
              { text: "The rain clouds looked dark, or we kept drawing." },
              { text: "The rain clouds looked dark, nor we kept drawing." }
            ],
            clue: "Ask how the second idea connects to the first. Would the clouds make you stop or keep going?",
            hints: [
              "Ask how the second idea connects to the first. Would the clouds make you stop or keep going?",
              "Read sentences 6 and 7 together. Then try each joining word between them.",
              "Nor goes with a sentence that says no, and sentence 6 does not say no. Check the other three."
            ],
            how: [
              "Dark rain clouds are a reason to stop drawing, but the class kept going.",
              "The second part is a surprise. Yet works like but and shows that surprise.",
              "The answer is \"The rain clouds looked dark, yet we kept drawing.\" So would tell a result, and or gives a choice."
            ],
            misconception: "A common mix-up is thinking yet is a time word, as in not yet. Here yet works like but.",
            why: "The answer is \"The rain clouds looked dark, yet we kept drawing.\" Yet works like but, and it shows that the second idea is a surprise. So tells a result, or gives a choice, and nor needs a no."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM3-4-C11",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: ["p3"],
            prompt: "Select the TWO sentences that use the wrong joining word.",
            targets: ["p3:1:2", "p3:2:1", "p3:2:2", "p3:2:3", "p3:3:1"],
            answer: ["p3:2:1", "p3:2:3"],
            pick: 2,
            clue: "Read each sentence and ask how its two parts connect. Two of the joining words do not fit.",
            hints: [
              "Read each sentence and ask how its two parts connect. Two of the joining words do not fit.",
              "Say each sentence aloud. Stop when a joining word makes the sentence sound odd.",
              "In sentence 2, but fits, because nervous and smiled are different. Check the other four sentences."
            ],
            how: [
              "Read each sentence and ask what job the joining word does.",
              "Sentence 2 uses but, sentence 4 uses so, and sentence 7 uses for. Each one fits its sentence.",
              "Sentence 3 uses yet, but the coach tells the class to do two things together, so and fits better. Sentence 5 uses so, but staying in the shallow end and swimming to the rope are two choices, so or fits better."
            ],
            misconception: "A common mix-up is thinking a joining word is wrong because it is a rare one. The word has to fit the meaning.",
            why: "The wrong joining words are in \"She told us to kick our legs, yet to keep our faces down.\" and \"I could stay in the shallow end, so I could swim to the rope.\" The first should use and, and the second should use or. The joining words in sentences 2, 4 and 7 all fit."
          },
          {
            id: "SK-GUM3-4-C12",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: [],
            prompt: "In which sentence does the joining word join two whole sentences?",
            choices: [
              { text: "The kitten was small yet brave." },
              { text: "We packed apples and pears for the trip." },
              { text: "Please sit on the rug or in your chair." },
              { text: "Nina likes tea, but her brother likes juice.", correct: true }
            ],
            clue: "A joining word can connect words, groups of words, or whole sentences. Look at what is on each side.",
            hints: [
              "A joining word can connect words, groups of words, or whole sentences. Look at what is on each side.",
              "Cover the joining word in each choice. Ask whether each side could stand alone as a sentence.",
              "Apples and pears are two words, not two sentences. Check the other three."
            ],
            how: [
              "Look at what the joining word connects in each choice.",
              "In \"Nina likes tea, but her brother likes juice.\" both sides could stand alone: Nina likes tea. Her brother likes juice.",
              "Small yet brave joins two words, and on the rug or in your chair joins two groups of words."
            ],
            misconception: "A common mix-up is picking a sentence with a comma. Check whether each side could stand alone.",
            why: "The answer is \"Nina likes tea, but her brother likes juice.\" Each side could stand alone as a sentence. In the other choices, the joining word links two words or two groups of words."
          },
          {
            id: "SK-GUM3-4-C13",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: [],
            prompt: "Which sentence means the same as the sentence below?",
            stem: "Carlos was cold, so he put on a coat.",
            choices: [
              { text: "Carlos put on a coat, so he was cold." },
              { text: "Carlos put on a coat, for he was cold.", correct: true },
              { text: "Carlos put on a coat, but he was cold." },
              { text: "Carlos put on a coat, or he was cold." }
            ],
            clue: "Find the cause and the result in the first sentence. Then find them in each choice.",
            hints: [
              "Find the cause and the result in the first sentence. Then find them in each choice.",
              "In the first sentence, being cold comes first. In the choices, the coat comes first. Ask what the joining word must show.",
              "Or gives a choice, and Carlos is not choosing. Check the other three."
            ],
            how: [
              "In the first sentence, being cold is the reason, and putting on a coat is the result.",
              "The new sentence names the coat first, so the joining word must lead to the reason. For gives a reason, like because.",
              "The answer is \"Carlos put on a coat, for he was cold.\" The choice with so says the coat made him cold, but shows a surprise, and or shows a choice."
            ],
            misconception: "A common mix-up is keeping the same joining word when the parts switch places. When the parts switch, so changes to for.",
            why: "The answer is \"Carlos put on a coat, for he was cold.\" Being cold is still the reason, and for gives the reason. So would say the coat made him cold, but shows a surprise, and or shows a choice."
          },
          {
            id: "SK-GUM3-4-C14",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: [],
            prompt: "Which joining word belongs in the blank?",
            text: "Mom said I could have a cookie {0} a granola bar, but not both.",
            slots: [
              {
                options: ["and", "or", "so"],
                answer: 1
              }
            ],
            clue: "Read the whole sentence, including the end. Ask what Mom is letting you do.",
            hints: [
              "Read the whole sentence, including the end. Ask what Mom is letting you do.",
              "The last part says but not both. Ask what that tells you about the two snacks.",
              "So tells a result, and nothing in the sentence is a result. Decide between the other two."
            ],
            how: [
              "The end of the sentence says but not both, so the snacks are two choices.",
              "Or is the joining word that gives a choice.",
              "The answer is or. And would mean you get both, and so tells a result."
            ],
            misconception: "A common mix-up is picking and because two snacks are named. The end of the sentence says not both.",
            why: "The answer is or. Mom lets you pick one snack but not both, so the joining word must give a choice. And would add both snacks, and so would tell a result."
          },
          {
            id: "SK-GUM3-4-C15",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
            ],
            passages: [],
            prompt: "Which TWO joining words make sense in the blank?",
            stem: "The sand was very hot, ____ we still ran across it.",
            pick: 2,
            choices: [
              { text: "nor" },
              { text: "but", correct: true },
              { text: "for" },
              { text: "yet", correct: true },
              { text: "or" }
            ],
            clue: "Read the whole sentence, including the word still. Ask how the second part connects to the first.",
            hints: [
              "Read the whole sentence, including the word still. Ask how the second part connects to the first.",
              "Try each word in the blank. Ask whether the sentence makes sense and sounds right.",
              "Nor goes with a sentence that says no, and the first part does not. Decide about the other four."
            ],
            how: [
              "Hot sand is a reason not to run, but the children ran anyway. The second part is a surprise.",
              "But and yet both show a surprise.",
              "Or gives a choice, nor goes with a no, and for gives a reason, so those three do not fit."
            ],
            misconception: "A common mix-up is picking only but. Yet works like but, so both fit.",
            why: "The answers are but and yet. Running across hot sand is a surprise, and both words show something different. Or gives a choice, nor goes with a no, and for gives a reason."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM3-4-S01",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: [],
      prompt: "Which TWO sentences have a joining word that fits the meaning?",
      pick: 2,
      choices: [
        { text: "Mara can sing and dance.", correct: true },
        { text: "Do you want a pear but a plum?" },
        { text: "Tom was sleepy, so he went to bed early.", correct: true },
        { text: "The game was fun, or we cheered a lot." },
        { text: "It was snowing, so we wore shorts." }
      ],
      clue: "Read each sentence and ask: Does the joining word do the right job? Adding, different, choice or result?",
      hints: [
        "Read each sentence and ask: Does the joining word do the right job? Adding, different, choice or result?",
        "Say each sentence aloud. Ask whether the two parts fit together the way the joining word says.",
        "Snow is not a reason to wear shorts. Decide about the other four."
      ],
      how: [
        "Read each sentence and think about what the joining word does.",
        "Being sleepy is the reason Tom went to bed, so so fits. Singing and dancing are two things Mara can do, so and fits.",
        "The others do not fit: snow would not lead to shorts, a choice needs or and not but, and cheering a lot is not a choice."
      ],
      misconception: "A common mix-up is picking a sentence because the joining word is common. Check what the word does.",
      why: "The answers are \"Tom was sleepy, so he went to bed early.\" and \"Mara can sing and dance.\" Being sleepy is why Tom went to bed, and and adds one more thing Mara can do. In the other sentences, the joining word does not match the meaning.",
      like: ["SK-GUM3-4-P5"]
    },
    {
      id: "SK-GUM3-4-S02",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: ["p4"],
      prompt: "The fourth sentence of the draft uses a joining word that does not fit. Which word belongs in the blank?",
      text: "Our coach, Ms. Yang, shows us a new trick each week, {0} she helps us practice the old ones.",
      slots: [
        {
          options: ["or", "and", "so"],
          answer: 1
        }
      ],
      clue: "Ask how the two parts connect. Are they a choice, a result, a difference, or two things that go together?",
      hints: [
        "Ask how the two parts connect. Are they a choice, a result, a difference, or two things that go together?",
        "Read the sentence and picture what the coach does. Then try each joining word in the blank.",
        "So tells a result, and teaching a trick does not cause practice. Decide between the other two."
      ],
      how: [
        "Read both parts: the coach shows a new trick, and the coach helps the club practice old tricks.",
        "She does both things. They are not a choice, a difference, or a result.",
        "The answer is and, because and adds one more thing. Or gives a choice, and so tells a result."
      ],
      misconception: "A common mix-up is picking or because two actions are named. Or is for a choice, and the coach does both.",
      why: "The answer is and. The coach does both things, so the second part adds one more thing. Or gives a choice, and so tells a result.",
      like: ["SK-GUM3-4-C02"]
    },
    {
      id: "SK-GUM3-4-S03",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: ["p4"],
      prompt: "The fifth sentence of the draft has a joining word that does not fit. What is the best way to write it?",
      choices: [
        { text: "Double jumps look easy, so they take lots of practice." },
        { text: "Double jumps look easy, or they take lots of practice." },
        { text: "Double jumps look easy, for they take lots of practice." },
        { text: "Double jumps look easy, but they take lots of practice.", correct: true }
      ],
      clue: "Read both parts. Ask whether the second part is a result, a choice, or something different.",
      hints: [
        "Read both parts. Ask whether the second part is a result, a choice, or something different.",
        "Find the fifth sentence. Ask what you would expect after the word easy, and what the writer says instead.",
        "Or gives a choice, and the writer is not choosing between two things. Check the other three."
      ],
      how: [
        "Read both parts: double jumps look easy, but they take lots of practice.",
        "The second part is different from what you would expect. That is a surprise.",
        "The answer is \"Double jumps look easy, but they take lots of practice.\" So tells a result, or gives a choice, and for gives a reason."
      ],
      misconception: "A common mix-up is using so for any two ideas. So only tells a result, and looking easy does not cause practice.",
      why: "The answer is \"Double jumps look easy, but they take lots of practice.\" But joins two ideas that are different. The other joining words do not fit: so tells a result, or gives a choice, and for gives a reason.",
      like: ["SK-GUM3-4-C03"]
    },
    {
      id: "SK-GUM3-4-S04",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: ["p4"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "Look at the first sentence of the third paragraph in the draft. Which choice uses the right joining word?",
        choices: [
          { text: "You can bring your own rope, or you can borrow one from the closet.", correct: true },
          { text: "You can bring your own rope, but you can borrow one from the closet." },
          { text: "You can bring your own rope, nor you can borrow one from the closet." },
          { text: "You can bring your own rope, so you can borrow one from the closet." }
        ]
      },
      partB: {
        prompt: "Which sentence from the draft best supports the answer to Part A?",
        choices: [
          { text: "Please be on time, for we start right at three o'clock." },
          { text: "Beginners can start with short ropes and slow jumps." },
          { text: "You only need one rope, so choose the one you like.", correct: true },
          { text: "The club has two rules for every member, and both are easy." }
        ]
      },
      clue: "Find the two ideas the joining word connects, and ask how they are related.",
      hints: [
        "Find the two ideas the joining word connects, and ask how they are related.",
        "For Part A, say each choice and ask what job the joining word does. For Part B, reread the draft and decide which sentence tells you something about choosing.",
        "In Part A, nor goes with a sentence that says no, and this sentence does not say no. Check the other choices."
      ],
      how: [
        "Part A: the sentence names two ways to get a rope, your own or one from the closet. A member would not use both.",
        "Two ways to pick from make a choice, and or is the joining word for a choice.",
        "Part A answer: \"You can bring your own rope, or you can borrow one from the closet.\" But, nor and so do not fit the meaning.",
        "Part B answer: \"You only need one rope, so choose the one you like.\" It shows that a member picks only one rope."
      ],
      misconception: "A common mix-up is picking so because the sentence tells what you can do. So tells a result, and the second part is not a result of the first.",
      why: "Part A: \"You can bring your own rope, or you can borrow one from the closet.\" Part B: \"You only need one rope, so choose the one you like.\" A member needs only one rope, so the two parts are a choice and need or. The other sentences do not talk about choosing a rope.",
      like: ["SK-GUM3-4-C04"]
    },
    {
      id: "SK-GUM3-4-S05",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: ["p4"],
      prompt: "Select the sentence in which the word for works as a joining word that gives a reason.",
      targets: ["p4:1:2", "p4:1:3", "p4:2:3", "p4:3:2", "p4:3:3"],
      answer: ["p4:3:3"],
      pick: 1,
      clue: "Some words have more than one job. Ask whether for joins two parts of a sentence or only starts a short phrase.",
      hints: [
        "Some words have more than one job. Ask whether for joins two parts of a sentence or only starts a short phrase.",
        "Look for the word for in the sentences. Then ask what comes right after it, a whole new idea or just a few words.",
        "In sentence 2, for starts the phrase for an hour. Check the other sentences."
      ],
      how: [
        "Find the word for in each sentence. A joining word has a whole idea on each side of it.",
        "In sentences 2 and 6, for begins a short phrase: for an hour, and for every member. Those are not joining words.",
        "Sentence 9 says Please be on time, for we start right at three o'clock. For joins two ideas and gives a reason, like because."
      ],
      misconception: "A common mix-up is picking any sentence that has the word for. A joining word must connect two ideas.",
      why: "The answer is sentence 9, \"Please be on time, for we start right at three o'clock.\" For joins two ideas and gives the reason to be on time. In sentences 2 and 6, for only starts a short phrase, and the other sentences do not use for.",
      like: ["SK-GUM3-4-C05"]
    },
    {
      id: "SK-GUM3-4-S06",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: [],
      prompt: "Which sentence puts the two short sentences together best?",
      stem: "Dana wanted to play outside. It started to rain.",
      choices: [
        { text: "Dana wanted to play outside, so it started to rain." },
        { text: "Dana wanted to play outside, but it started to rain.", correct: true },
        { text: "Dana wanted to play outside, or it started to rain." },
        { text: "Dana wanted to play outside, for it started to rain." }
      ],
      clue: "Ask how the second idea connects to the first. Is it a result, a choice, or something different?",
      hints: [
        "Ask how the second idea connects to the first. Is it a result, a choice, or something different?",
        "Say each sentence aloud. Ask whether the two parts make sense together.",
        "Or gives a choice, and Dana is not choosing between the two parts. Check the other three."
      ],
      how: [
        "Wanting to play outside and rain starting work against each other.",
        "The second part gets in the way of what Dana wanted. That calls for but.",
        "The answer is \"Dana wanted to play outside, but it started to rain.\" So and for make the rain a result or a reason, and or makes it a choice."
      ],
      misconception: "A common mix-up is picking so because the sentences are about the same day. So must tell a result.",
      why: "The answer is \"Dana wanted to play outside, but it started to rain.\" But joins two ideas that are different. So tells a result, or gives a choice, and for gives a reason, and none of those fit.",
      like: ["SK-GUM3-4-C06"]
    },
    {
      id: "SK-GUM3-4-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: [],
      prompt: "Choose the TWO sentences where nor is used correctly.",
      pick: 2,
      choices: [
        { text: "Ana likes cats, nor she likes dogs." },
        { text: "I washed the car, nor the sun came out." },
        { text: "Ben did not bring lunch, nor did he bring a snack.", correct: true },
        { text: "We can walk, nor we can drive." },
        { text: "The bus was not late, nor was it early.", correct: true }
      ],
      clue: "Nor goes with a sentence that says no. Look at what the first part says.",
      hints: [
        "Nor goes with a sentence that says no. Look at what the first part says.",
        "Read each sentence. Ask whether the first part says something did not happen.",
        "Ana likes cats says yes, not no. Decide about the other four."
      ],
      how: [
        "Nor is used after a part that says something did not happen.",
        "Ben did not bring lunch, and the bus was not late. Both start with a no, so nor can follow.",
        "Ana likes cats, we can walk, and I washed the car all say yes, so nor does not fit."
      ],
      misconception: "A common mix-up is using nor like or in a sentence that has no no. Nor needs a no in the first part.",
      why: "The answers are \"Ben did not bring lunch, nor did he bring a snack.\" and \"The bus was not late, nor was it early.\" Each first part says something did not happen, so nor can follow. In the other sentences, the first part says yes, so nor does not fit.",
      like: ["SK-GUM3-4-C07"]
    },
    {
      id: "SK-GUM3-4-S08",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: [],
      prompt: "Which joining word goes in the blank of each sentence?",
      cols: ["for", "yet", "nor", "so"],
      rows: [
        { text: "It was dark, ___ I was not afraid.", answer: 1 },
        { text: "Take a snack, ___ the trip is long.", answer: 0 },
        { text: "Pam felt ill, ___ she stayed in bed.", answer: 3 },
        { text: "Rob did not laugh, ___ did he cry.", answer: 2 }
      ],
      clue: "Read each sentence with a joining word in the blank. Ask how the second part connects to the first.",
      hints: [
        "Read each sentence with a joining word in the blank. Ask how the second part connects to the first.",
        "Start with the sentence you are surest about. Think about which sentence begins with a no.",
        "Rob did not laugh begins with a no. Decide the other rows one at a time."
      ],
      how: [
        "Ask how the second part connects to the first in each sentence.",
        "Rob did not laugh, nor did he cry. Nor goes with a no.",
        "Staying in bed is the result of feeling ill, so so fits. The long trip is the reason for a snack, so for fits. Not being afraid in the dark is a surprise, so yet fits."
      ],
      misconception: "A common mix-up is mixing up for and so. For gives the reason, and so tells the result.",
      why: "Yet goes with the dark sentence, because not being afraid is a surprise. Nor goes with Rob did not laugh. So goes with Pam felt ill, because feeling ill is why she stayed in bed. For goes with the snack sentence, because the long trip is the reason.",
      like: ["SK-GUM3-4-C08"]
    },
    {
      id: "SK-GUM3-4-S09",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: ["p5"],
      prompt: "Sentence 3 of the draft has two joining words that do not fit. Choose the words that fix them.",
      text: "My dad wanted to make a pirate, {0} we did not have a hat, {1} we used a paper bag.",
      slots: [
        {
          options: ["so", "but", "nor"],
          answer: 1
        },
        {
          options: ["or", "so", "yet"],
          answer: 1
        }
      ],
      clue: "Read the whole sentence. Ask how each part connects to the part before it.",
      hints: [
        "Read the whole sentence. Ask how each part connects to the part before it.",
        "Say each choice in its blank. Think about what Dad wanted, what was missing, and what they did.",
        "Or gives a choice, and Dad is not choosing between two things in the first blank. Decide the rest."
      ],
      how: [
        "Dad wanted a pirate, and they had no hat. That is a problem, so the first blank shows something different.",
        "They had no hat, and they used a paper bag. The paper bag is the result.",
        "The answers are but and so."
      ],
      misconception: "A common mix-up is choosing the same kind of joining word for both blanks. Each blank connects its parts in a different way.",
      why: "The answers are but and so. The wish to make a pirate goes against having no hat, so but fits first. Having no hat is why they used a paper bag, so so fits second.",
      like: ["SK-GUM3-4-C09"]
    },
    {
      id: "SK-GUM3-4-S10",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: ["p5"],
      prompt: "Which choice puts sentences 6 and 7 of the draft together best?",
      choices: [
        { text: "The scarecrows shook on their poles, so nobody left the park." },
        { text: "The scarecrows shook on their poles, or nobody left the park." },
        { text: "The scarecrows shook on their poles, yet nobody left the park.", correct: true },
        { text: "The scarecrows shook on their poles, for nobody left the park." }
      ],
      clue: "Ask how the second idea connects to the first. Would shaking scarecrows make people stay or leave?",
      hints: [
        "Ask how the second idea connects to the first. Would shaking scarecrows make people stay or leave?",
        "Read sentences 6 and 7 together. Then try each joining word between them.",
        "For gives a reason, and the park was not emptied because the scarecrows shook. Check the other three."
      ],
      how: [
        "Shaking scarecrows in the wind are a reason to go home, but nobody left.",
        "The second part is a surprise. Yet works like but and shows that surprise.",
        "The answer is \"The scarecrows shook on their poles, yet nobody left the park.\" So would tell a result, or would give a choice, and for would give a reason."
      ],
      misconception: "A common mix-up is thinking yet is a time word, as in not yet. Here yet works like but.",
      why: "The answer is \"The scarecrows shook on their poles, yet nobody left the park.\" Yet works like but, and it shows that the second idea is a surprise. So tells a result, or gives a choice, and for gives a reason.",
      like: ["SK-GUM3-4-C10"]
    },
    {
      id: "SK-GUM3-4-S11",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: ["p6"],
      prompt: "Select the TWO sentences that use the wrong joining word.",
      targets: ["p6:1:2", "p6:2:1", "p6:2:2", "p6:2:3", "p6:2:4"],
      answer: ["p6:2:1", "p6:2:2"],
      pick: 2,
      clue: "Read each sentence and ask how its two parts connect. Two of the joining words do not fit.",
      hints: [
        "Read each sentence and ask how its two parts connect. Two of the joining words do not fit.",
        "Say each sentence aloud. Stop when a joining word makes the sentence sound odd.",
        "In sentence 6, but fits, because spilling syrup and not minding are different. Check the other four sentences."
      ],
      how: [
        "Read each sentence and ask what job the joining word does.",
        "Sentence 2 uses but, sentence 5 uses for, and sentence 6 uses but. Each one fits its sentence.",
        "Sentence 3 uses or, but the hot sun made the line grow, so so fits better. Sentence 4 uses so, but some kids wanted cherry and some wanted lime, so and fits better."
      ],
      misconception: "A common mix-up is thinking a joining word is wrong because it is a rare one. The word has to fit the meaning.",
      why: "The wrong joining words are in \"The sun was hot, or the line grew long.\" and \"Some kids wanted cherry, so some kids wanted lime.\" The first should use so, and the second should use and. The joining words in sentences 2, 5 and 6 all fit.",
      like: ["SK-GUM3-4-C11"]
    },
    {
      id: "SK-GUM3-4-S12",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: [],
      prompt: "In which sentence does the joining word connect two whole sentences?",
      choices: [
        { text: "Pedro hurt his knee, so he sat on the bench.", correct: true },
        { text: "Grandpa grows tomatoes and peppers." },
        { text: "The path was narrow yet safe." },
        { text: "Do you want to sit by the door or near the stage?" }
      ],
      clue: "A joining word can connect words, groups of words, or whole sentences. Look at what is on each side.",
      hints: [
        "A joining word can connect words, groups of words, or whole sentences. Look at what is on each side.",
        "Cover the joining word in each choice. Ask whether each side could stand alone as a sentence.",
        "Tomatoes and peppers are two words, not two sentences. Check the other three."
      ],
      how: [
        "Look at what the joining word connects in each choice.",
        "In \"Pedro hurt his knee, so he sat on the bench.\" both sides could stand alone: Pedro hurt his knee. He sat on the bench.",
        "Narrow yet safe joins two words, and by the door or near the stage joins two groups of words."
      ],
      misconception: "A common mix-up is picking a sentence with a comma. Check whether each side could stand alone.",
      why: "The answer is \"Pedro hurt his knee, so he sat on the bench.\" Each side could stand alone as a sentence. In the other choices, the joining word links two words or two groups of words.",
      like: ["SK-GUM3-4-C12"]
    },
    {
      id: "SK-GUM3-4-S13",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: [],
      prompt: "Choose the version that tells it in a new order but keeps the idea.",
      stem: "Lena grabbed an umbrella, for it was raining.",
      choices: [
        { text: "It was raining, but Lena grabbed an umbrella." },
        { text: "It was raining, or Lena grabbed an umbrella." },
        { text: "It was raining, so Lena grabbed an umbrella.", correct: true },
        { text: "It was raining, for Lena grabbed an umbrella." }
      ],
      clue: "Find the reason and the result in the first sentence. Then find them in each choice.",
      hints: [
        "Find the reason and the result in the first sentence. Then find them in each choice.",
        "In the first sentence, the umbrella comes first. In the choices, the weather comes first. Ask what the joining word must show.",
        "Or gives a choice, and Lena is not choosing. Check the other three."
      ],
      how: [
        "In the first sentence, the rain is the reason, and grabbing the umbrella is the result.",
        "The new sentence names the rain first, so the joining word must lead to the result. So tells what happened because of something.",
        "The answer is \"It was raining, so Lena grabbed an umbrella.\" The choice with for says the umbrella was the reason for the rain, but shows a surprise, and or shows a choice."
      ],
      misconception: "A common mix-up is keeping the same joining word when the parts switch places. When the parts switch, for changes to so.",
      why: "The answer is \"It was raining, so Lena grabbed an umbrella.\" The rain is still the reason, and so tells the result. For would say the umbrella was the reason for the rain, but shows a surprise, and or shows a choice.",
      like: ["SK-GUM3-4-C13"]
    },
    {
      id: "SK-GUM3-4-S14",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: [],
      prompt: "Choose the joining word that completes the sentence.",
      text: "You may take a pencil {0} a marker from the box, but only one.",
      slots: [
        {
          options: ["yet", "and", "or"],
          answer: 2
        }
      ],
      clue: "Read the whole sentence, including the end. Ask what the box lets you take.",
      hints: [
        "Read the whole sentence, including the end. Ask what the box lets you take.",
        "The last part says but only one. Ask what that tells you about the pencil and the marker.",
        "Yet shows something different, and nothing in the sentence is a surprise. Decide between the other two."
      ],
      how: [
        "The end of the sentence says but only one, so the pencil and the marker are two choices.",
        "Or is the joining word that gives a choice.",
        "The answer is or. And would mean you take both, and yet shows something different."
      ],
      misconception: "A common mix-up is picking and because two things are named. The end of the sentence says only one.",
      why: "The answer is or. You may take only one thing, so the joining word must give a choice. And would add both things, and yet would show something different.",
      like: ["SK-GUM3-4-C14"]
    },
    {
      id: "SK-GUM3-4-S15",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-coordinating-conjunctions-to-join-words-phra"
      ],
      passages: [],
      prompt: "Choose the TWO joining words that fit the blank.",
      stem: "The lake was freezing, ____ we jumped in anyway.",
      pick: 2,
      choices: [
        { text: "but", correct: true },
        { text: "or" },
        { text: "yet", correct: true },
        { text: "nor" },
        { text: "so" }
      ],
      clue: "Read the whole sentence, including the word anyway. Ask how the second part connects to the first.",
      hints: [
        "Read the whole sentence, including the word anyway. Ask how the second part connects to the first.",
        "Try each word in the blank. Ask whether the sentence makes sense and sounds right.",
        "Nor goes with a sentence that says no, and the first part does not. Decide about the other four."
      ],
      how: [
        "A freezing lake is a reason not to jump in, but the children jumped anyway. The second part is a surprise.",
        "But and yet both show a surprise.",
        "So tells a result, nor goes with a no, and or gives a choice, so those three do not fit."
      ],
      misconception: "A common mix-up is picking only but. Yet works like but, so both fit.",
      why: "The answers are yet and but. Jumping into a freezing lake is a surprise, and both words show something different. So tells a result, nor goes with a no, and or gives a choice.",
      like: ["SK-GUM3-4-C15"]
    }
  ],
  addons: {
    "SK-GUM3-4-P1": {
      hints: [
        "Ask why the family brought umbrellas. Read both parts and think about how they connect.",
        "Say each joining word in the blank. Ask which one tells what happened because of the clouds.",
        "But shows something different, and nothing in the sentence is different. Decide between the other two."
      ],
      how: [
        "Dark clouds are the reason the family brought umbrellas.",
        "So tells what happened because of something.",
        "The answer is so. But shows something different, and or gives a choice."
      ],
      misconception: "A common mix-up is picking and for any two ideas. Check whether the second idea happened because of the first."
    },
    "SK-GUM3-4-P2": {
      hints: [
        "Do the two parts agree, or does the second part show something different?",
        "Say each joining word in the blank. Think about what Talia likes and what her brother does.",
        "So tells a result, and nothing in the sentence is a result. Decide between the other two."
      ],
      how: [
        "Talia likes peaches, and her brother does not like them.",
        "The two parts are different, so the joining word must show something different.",
        "The answer is but. So tells a result, and or gives a choice."
      ],
      misconception: "A common mix-up is picking so because both parts are about the same fruit. So tells a result."
    },
    "SK-GUM3-4-P3": {
      hints: [
        "Find the word that links the two things you could do. Cover it and see if the two parts are still connected.",
        "Read the sentence with one word covered at a time. Ask which word connects two ideas.",
        "To is a small word that points to a place. Decide among the other three."
      ],
      how: [
        "Look for the word that connects the two actions: ride bikes and walk.",
        "Or gives a choice between the two actions.",
        "The answer is or. Can, to and walk are not joining words."
      ],
      misconception: "A common mix-up is picking the first small word you see. A joining word must connect two ideas."
    },
    "SK-GUM3-4-P4": {
      hints: [
        "Try each joining word in a sentence like \"I like cats ___ dogs.\" or \"It rained, ___ we stayed in.\" Which job does it do?",
        "Start with the job you are surest about. Then decide the rest one at a time.",
        "Gives a choice goes with or. Decide the other rows."
      ],
      how: [
        "Say a short sentence with each joining word.",
        "And adds one more thing, and but shows something different.",
        "Or gives a choice, and so tells a result."
      ],
      misconception: "A common mix-up is mixing up and and so. And adds a thing, and so tells a result."
    },
    "SK-GUM3-4-P5": {
      hints: [
        "Read each sentence and ask: Does the joining word do the right job? Adding, different, choice or result?",
        "Say each sentence aloud. Ask whether the two parts fit together the way the joining word says.",
        "A coat is not a reason to leave it at home when it is cold. Decide about the other four."
      ],
      how: [
        "Read each sentence and think about what the joining word does.",
        "Being hungry is why I ate, so so fits. The piano and the drums are two things Hana can play, so and fits.",
        "The others do not fit: it was cold, so the coat should come along; a choice needs or; and a funny movie is not a choice."
      ],
      misconception: "A common mix-up is picking a sentence because the joining word is common. Check what the word does."
    }
  },
  /* B6:core:end */
  test: [
    { id: "SK-GUM3-4-T1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the joining word that makes the most sense.",
      text: "Should we walk to the park, {0} should we ride our bikes?",
      slots: [{ options: ["or", "so", "but"], answer: 0 }],
      clue: "Read the whole sentence. What is it asking you to do?",
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
      prompt: "Which sentence makes the most sense?",
      choices: [
        { text: "The puppy was very tired, so it took a long nap.", correct: true },
        { text: "The puppy was very tired, but it took a long nap." },
        { text: "The puppy was very tired, or it took a long nap." },
        { text: "The puppy was wide awake, so it took a long nap." }
      ],
      clue: "Read each sentence and ask: Does the second part really go with the first part? Why would a puppy take a nap?",
      why: "The answer is \"The puppy was very tired, so it took a long nap.\" The puppy took a nap because it was tired, and so tells what happened because of something. But would mean the nap was a surprise, or would mean a choice, and a wide-awake puppy is not a reason to nap." }
  ]
});

/* 5. Collective and abstract nouns */
PP.addLesson({
  code: "3.L.GC.1:M:use-collective-and-abstract-nouns",
  title: "Group nouns and idea nouns",
  teach: {
    big: "A collective noun names a group as one thing, like team. An abstract noun names an idea or a feeling you cannot touch, like kindness.",
    points: [
      "A collective noun is one word for a whole group: a team of players, a flock of birds, a herd of cows, a class of students. Animals have their own group words: a pack of wolves, a school of fish, a colony of ants, a litter of puppies.",
      "When the group acts together, treat it as one thing: The team is ready. The crew sings. Helper verbs match too: The team was ready. The team has a new coach.",
      "A plural like birds is not a collective noun. A collective noun is one word that names the whole group.",
      "An abstract noun names an idea, a feeling or a quality: pride, freedom, patience, trust.",
      "You cannot see, hear, touch, taste or smell an abstract noun. You can see a friend, but you cannot touch friendship."
    ],
    words: [
      { term: "collective noun", means: "a noun that names a group, like team or family" },
      { term: "abstract noun", means: "a noun that names an idea or feeling, like pride or trust" }
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
    },
    {
      show: ["The swarm (buzz / buzzes) around the hive."],
      ask: "Which verb goes with the group noun?",
      steps: [
        "Find the group noun: swarm. It names a whole group of bees.",
        "The swarm moves together, so it acts as one thing.",
        "A group that acts as one takes the verb for one. In the present tense, that verb ends in -s."
      ],
      answer: "The swarm buzzes around the hive."
    }
  ],
  parent: "At the park or the store, name groups together (a crowd of shoppers, a flock of pigeons). At bedtime, ask your child to name one feeling or idea from the day, like joy, fear or patience.",
  passages: [
    /* B6:passages:start */
    {
      id: "p1",
      title: "Fleet Day at the Harbor",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Every June, our town holds Fleet Day at the harbor.",
          "(2) A fleet of fishing boats sails past the dock in a long line.",
          "(3) The whole crowd gathers on the pier to watch."
        ],
        [
          "(4) Together, the crowd cheer for the lead boat.",
          "(5) The crew on that boat is proud of its bright flag.",
          "(6) My uncle waved from the deck of his own boat."
        ],
        [
          "(7) After the parade, a band played songs by the water.",
          "(8) My little brother showed courage when he climbed the rope net.",
          "(9) We stayed until the sun went down."
        ],
        [
          "(10) I cannot wait for Fleet Day next year."
        ]
      ]
    },
    {
      id: "p2",
      title: "Orchestra Rehearsal",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Tuesday, our school orchestra practiced for the spring concert.",
          "(2) A small audience of teachers sat in the back of the hall.",
          "(3) The whole orchestra were ready to play, and the audience were quiet."
        ],
        [
          "(4) At first, the violins played too fast.",
          "(5) Mr. Bell showed patience and asked us to start again.",
          "(6) Soon the group sounded smooth and clear."
        ],
        [
          "(7) After rehearsal, the class felt excitement about the concert.",
          "(8) The staff in the front office clapped from the hall.",
          "(9) I hope my family comes to hear us.",
          "(10) The concert is on Friday at seven o'clock."
        ]
      ]
    },
    {
      id: "p3",
      title: "Our Class Ant Farm",
      byline: "A third grader's draft",
      genre: "Student draft (report)",
      draft: true,
      paragraphs: [
        [
          "(1) Last week, our class set up an ant farm.",
          "(2) A colony of ants moved into the clear plastic box.",
          "(3) Ms. Ruiz told us to be gentle with them."
        ],
        [
          "(4) Each day, we watch the ants dig tunnels.",
          "(5) The colony work together to find food.",
          "(6) Their teamwork amazes everyone."
        ],
        [
          "(7) Every student feels curiosity about the tiny tunnels.",
          "(8) Our class keeps a log of what the ants do.",
          "(9) We hope the colony stay healthy."
        ],
        [
          "(10) Next week, we will make a chart of our findings.",
          "(11) Ms. Ruiz says we can watch the farm for two more weeks."
        ]
      ]
    },
    {
      id: "p4",
      title: "The Ferry Ride",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Every Saturday, a ferry carries visitors to the island.",
          "(2) A pod of dolphins often swims beside the boat.",
          "(3) The whole crowd rushes to the rail to look."
        ],
        [
          "(4) Together, the crowd gasp when a dolphin jumps.",
          "(5) The crew on the ferry is kind to every rider.",
          "(6) My aunt felt great surprise when she saw a baby dolphin."
        ],
        [
          "(7) After the ride, a group of fiddlers played songs on the dock.",
          "(8) My cousin showed generosity when he shared his sandwiches with a hungry seagull.",
          "(9) We stayed on the dock until the last ferry left."
        ],
        [
          "(10) I want to ride the ferry again soon."
        ]
      ]
    },
    {
      id: "p5",
      title: "Pet Show Day",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Saturday, our town held a pet show at the park.",
          "(2) The judge, Ms. Ortega, held up a gold ribbon.",
          "(3) The panel have chosen a winner, and the group have cheered."
        ],
        [
          "(4) At first, the puppies ran in circles.",
          "(5) My neighbor's old dog showed loyalty, because it stayed by her side.",
          "(6) A litter of kittens slept in a basket near the gate.",
          "(7) Soon the judges chose a winner."
        ],
        [
          "(8) After the show, my sister felt relief because her dog behaved.",
          "(9) Everyone agreed that it was a fun day.",
          "(10) We took home a blue ribbon and a bag of treats."
        ]
      ]
    },
    {
      id: "p6",
      title: "Bird Watching Club",
      byline: "A third grader's draft",
      genre: "Student draft (report)",
      draft: true,
      paragraphs: [
        [
          "(1) Last month, our class started a bird watching club.",
          "(2) A flock of geese landed on the field behind the school.",
          "(3) Mr. Haas told us to stay quiet and still."
        ],
        [
          "(4) Each morning, we count the birds that visit the field.",
          "(5) The flock stay together when they eat.",
          "(6) Their beauty is amazing."
        ],
        [
          "(7) Every member feels delight about spotting a new bird.",
          "(8) Our club keeps a log of every bird we see.",
          "(9) We hope the flock return tomorrow."
        ],
        [
          "(10) Next month, we will draw pictures of our favorite birds.",
          "(11) I hope to see a hawk someday."
        ]
      ]
    }
    /* B6:passages:end */
  ],
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
      clue: "Is a choir one group or many separate things? Think about which verb goes with that.",
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
  /* B6:core:start */
  /* ---------- Expansion 2026-10-22, batch B6 (GUM Master) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test or testB.
     Author log: docs/expansion-2026-10-22/batches/B6-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          { ref: "SK-GUM3-5-P4" },
          { ref: "SK-GUM3-5-P5" },
          {
            id: "SK-GUM3-5-C03",
            type: "mc",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: ["p1"],
            prompt: "Which word in sentence 2 of the draft is a collective noun?",
            choices: [
              { text: "fleet", correct: true },
              { text: "boats" },
              { text: "dock" },
              { text: "sails" }
            ],
            clue: "A collective noun is one word that names a whole group. Look for a word that stands for many things together.",
            hints: [
              "A collective noun is one word that names a whole group. Look for a word that stands for many things together.",
              "Read sentence 2 and find the nouns. Ask which noun names a group and which only names things.",
              "Sails is a verb, not a noun. Decide among the other three."
            ],
            how: [
              "Find the nouns in sentence 2: fleet, boats, dock and line.",
              "Boats is a plural noun, and dock names one place. Neither names a group as one thing.",
              "The answer is fleet. A fleet is one word for a group of boats."
            ],
            misconception: "A common mix-up is picking boats because it means more than one. A collective noun is one word that names a whole group.",
            why: "The answer is fleet. A fleet is one word that names a group of boats. Boats is a plural, dock names one place, and sails is a word for what boats do."
          },
          {
            id: "SK-GUM3-5-C04",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: ["p1"],
            prompt: "Sentence 4 of the draft has a verb that does not match the group. The crowd acts together as one. Choose the word that fixes it.",
            text: "Together, the crowd {0} for the lead boat.",
            slots: [
              {
                options: ["cheer", "cheers", "cheering"],
                answer: 1
              }
            ],
            clue: "Is the crowd one group or many separate people? Think about which verb goes with that.",
            hints: [
              "Is the crowd one group or many separate people? Think about which verb goes with that.",
              "Read sentence 4 and say each choice in the blank. Listen for the one that goes with a single group.",
              "Cheering needs a helper word like is, and the sentence has none. Decide between the other two."
            ],
            how: [
              "The word together tells you the crowd acts as one group.",
              "A collective noun that acts as one takes the verb for one thing. For present tense, that verb ends in -s.",
              "The answer is cheers. Cheer is the verb for many, and cheering needs a helper word."
            ],
            misconception: "A common mix-up is choosing the plural verb because a crowd has many people. When the group acts together, use the verb for one.",
            why: "The answer is cheers. Crowd is a collective noun, and the crowd acts together as one. A group that acts as one takes the verb for one: cheers."
          },
          {
            id: "SK-GUM3-5-C05",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Which word in sentence 8 of the draft is an abstract noun?",
              choices: [
                { text: "brother" },
                { text: "rope" },
                { text: "courage", correct: true },
                { text: "net" }
              ]
            },
            partB: {
              prompt: "Why is the word in Part A an abstract noun?",
              choices: [
                { text: "It names a group of sailors who work together on a boat." },
                { text: "It names a place on the pier where children like to play." },
                { text: "It tells what the little brother did on the rope net." },
                { text: "You can see him climb, but you cannot touch courage itself.", correct: true }
              ]
            },
            clue: "An abstract noun names an idea, a feeling or a quality. Ask which word you cannot see or touch.",
            hints: [
              "An abstract noun names an idea, a feeling or a quality. Ask which word you cannot see or touch.",
              "For Part A, find the nouns in sentence 8. For Part B, think about what makes an abstract noun different from the others.",
              "In Part A, a brother can be seen and a net can be touched. Check the other choices."
            ],
            how: [
              "Part A: find the nouns in sentence 8: brother, courage, rope and net.",
              "You can see a brother, a rope and a net. Courage is a quality that you cannot touch.",
              "Part A answer: courage.",
              "Part B answer: \"You can see him climb, but you cannot touch courage itself.\""
            ],
            misconception: "A common mix-up is thinking an abstract noun names an action. Courage names a quality, not an action.",
            why: "Part A: courage. Part B: \"You can see him climb, but you cannot touch courage itself.\" Courage names a quality, so it is abstract. A group noun names a group, a place noun names a place, and a verb tells what someone did."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM3-5-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: ["p2"],
            prompt: "Select the TWO sentences that have an abstract noun.",
            targets: ["p2:1:1", "p2:2:2", "p2:2:3", "p2:3:1", "p2:3:2"],
            answer: ["p2:2:2", "p2:3:1"],
            pick: 2,
            clue: "An abstract noun names an idea, a feeling or a quality. Look for words you cannot see or touch.",
            hints: [
              "An abstract noun names an idea, a feeling or a quality. Look for words you cannot see or touch.",
              "Read the nouns in each of the five sentences. Ask whether you could see or touch the thing the noun names.",
              "In sentence 1, orchestra names a group of people. Check the other four sentences."
            ],
            how: [
              "Find the nouns in each sentence and ask whether you could see or touch the thing.",
              "Orchestra, group and staff name groups of people. A group can be seen.",
              "Sentence 5 has patience, and sentence 7 has excitement. You cannot see or touch either one, so both are abstract nouns."
            ],
            misconception: "A common mix-up is picking a sentence with a group noun. A group of people can be seen, so it is not abstract.",
            why: "The answers are \"Mr. Bell showed patience and asked us to start again.\" and \"After rehearsal, the class felt excitement about the concert.\" Patience and excitement name a quality and a feeling, so they are abstract nouns. Orchestra, group and staff name groups of people."
          },
          {
            id: "SK-GUM3-5-C07",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: [],
            prompt: "Each group acts together as one. Choose the TWO sentences where the verb goes with the group noun.",
            pick: 2,
            choices: [
              { text: "The crew paint the fence together." },
              { text: "Our club meets in the library on Fridays.", correct: true },
              { text: "The class walk to the library as one." },
              { text: "The herd drinks at the river each evening.", correct: true },
              { text: "The family eat dinner at six o'clock." }
            ],
            clue: "Find the group noun in each sentence. A group that acts as one takes the verb for one.",
            hints: [
              "Find the group noun in each sentence. A group that acts as one takes the verb for one.",
              "Say each verb aloud. The verb for one group usually ends in -s when it tells about now.",
              "Eat does not end in -s, so it is the verb for many. Decide about the other four."
            ],
            how: [
              "Find the group noun in each sentence: club, herd, crew, family and class.",
              "Each group acts as one, so the verb should be the one for a single thing. In the present tense it ends in -s.",
              "Meets and drinks are correct. Paint, eat and walk are the verbs for many, so they do not match."
            ],
            misconception: "A common mix-up is choosing the plural verb because a group has many members. When the group acts as one, the verb is for one.",
            why: "The answers are \"Our club meets in the library on Fridays.\" and \"The herd drinks at the river each evening.\" Club and herd are group nouns that act as one, so they take the verbs meets and drinks. The others use paint, eat and walk, which are the verbs for many."
          },
          {
            id: "SK-GUM3-5-C08",
            type: "match",
            points: 2,
            dok: 1,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: [],
            prompt: "Match each group of things to the collective noun that names it.",
            cols: ["pack", "school", "flock", "bunch"],
            rows: [
              { text: "grapes", answer: 3 },
              { text: "wolves", answer: 0 },
              { text: "sheep", answer: 2 },
              { text: "fish", answer: 1 }
            ],
            clue: "Say each group out loud with of in front of it, as in a ___ of grapes. Which collective noun sounds right?",
            hints: [
              "Say each group out loud with of in front of it, as in a ___ of grapes. Which collective noun sounds right?",
              "Start with the group you know best. Then decide the rest one at a time.",
              "A pack goes with animals that hunt together. Decide the other rows."
            ],
            how: [
              "Say a ___ of for each group of things.",
              "A pack of wolves, a school of fish, a flock of sheep and a bunch of grapes are the usual names.",
              "Each collective noun is one word that names the whole group."
            ],
            misconception: "A common mix-up is guessing from the animal's size. Each collective noun is a name you learn with its group.",
            why: "A bunch of grapes, a pack of wolves, a flock of sheep and a school of fish. Each collective noun is one word that names a whole group."
          },
          {
            id: "SK-GUM3-5-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: [],
            prompt: "Which sentence has BOTH a collective noun and an abstract noun?",
            choices: [
              { text: "The squad ran two laps around the track." },
              { text: "Fear grew as the storm moved closer." },
              { text: "The squad felt fear before the race.", correct: true },
              { text: "The runners drank water after the race." }
            ],
            clue: "Look for one group word and one idea or feeling word in the same sentence.",
            hints: [
              "Look for one group word and one idea or feeling word in the same sentence.",
              "Check each choice for two things: a word that names a group, and a word you cannot see or touch.",
              "The runners drank water has no feeling or idea word. Check the other three."
            ],
            how: [
              "Check each sentence for a collective noun and an abstract noun.",
              "\"The squad felt fear before the race.\" has squad, a group, and fear, a feeling.",
              "The other choices have only one kind of noun: squad alone, fear alone, or neither."
            ],
            misconception: "A common mix-up is picking a sentence that has only one of the two kinds. The sentence needs both.",
            why: "The answer is \"The squad felt fear before the race.\" Squad is a collective noun, and fear is an abstract noun. One choice has only squad, one has only fear, and one has neither."
          },
          {
            id: "SK-GUM3-5-C10",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: ["p2"],
            prompt: "Sentence 3 of the draft has two verbs that do not match the groups. Each group acts together as one. Choose the words that fix them.",
            text: "The whole orchestra {0} ready to play, and the audience {1} quiet.",
            slots: [
              {
                options: ["were", "was", "are"],
                answer: 1
              },
              {
                options: ["is", "was", "were"],
                answer: 1
              }
            ],
            clue: "Is each group one thing or many separate people? Think about which verb goes with that.",
            hints: [
              "Is each group one thing or many separate people? Think about which verb goes with that.",
              "Read sentence 3 and say each choice in its blank. The draft tells about Tuesday, so both verbs must tell about the past.",
              "Are tells about now, but the draft tells about Tuesday. Decide the rest."
            ],
            how: [
              "Both groups act together as one, so each needs the verb for one thing.",
              "The draft tells about something that already happened on Tuesday, so the verb must tell about the past.",
              "The answers are was and was. Were is the past verb for many, and is and are tell about now."
            ],
            misconception: "A common mix-up is choosing were because orchestra and audience have many people. A group that acts as one takes was.",
            why: "The answers are was and was. Orchestra and audience are collective nouns that act as one, and the draft tells about the past. Was matches one group in the past, while were is for many, and is and are tell about now."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM3-5-C11",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: ["p3"],
            prompt: "Select the TWO sentences where the verb does not match the collective noun.",
            targets: ["p3:1:2", "p3:2:2", "p3:3:1", "p3:3:2", "p3:3:3"],
            answer: ["p3:2:2", "p3:3:3"],
            pick: 2,
            clue: "Find the group word in a sentence, then check its verb. A group that acts as one needs the verb for one.",
            hints: [
              "Find the group word in a sentence, then check its verb. A group that acts as one needs the verb for one.",
              "Read each sentence and say its verb. Ask whether the verb matches one group or many.",
              "Sentence 8 uses keeps, and it matches the group class. Check the other four sentences."
            ],
            how: [
              "Find the collective noun in each sentence and check its verb.",
              "Sentence 2 uses moved, sentence 7 has no group noun, and sentence 8 uses keeps with class. Those are correct.",
              "Sentence 5 says the colony work, and sentence 9 says the colony stay. A colony acts as one, so the verbs should be works and stays."
            ],
            misconception: "A common mix-up is thinking a verb is right because it follows the word ants. The subject is colony, which is one group.",
            why: "The errors are in \"The colony work together to find food.\" and \"We hope the colony stay healthy.\" Colony is one group, so the verbs should be works and stays. Sentences 2, 7 and 8 are correct."
          },
          {
            id: "SK-GUM3-5-C12",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: [],
            prompt: "Which word is NOT a collective noun?",
            choices: [
              { text: "pack" },
              { text: "dogs", correct: true },
              { text: "herd" },
              { text: "crew" }
            ],
            clue: "A collective noun is one word that names a whole group. Look for the word that does not do that.",
            hints: [
              "A collective noun is one word that names a whole group. Look for the word that does not do that.",
              "Say a ___ of for each word. Ask which one makes the phrase sound odd.",
              "A crew names a group of workers. Decide among the other three."
            ],
            how: [
              "Ask whether each word is one word for a whole group.",
              "A pack, a herd and a crew each name a group as one thing.",
              "Dogs is the plural of dog. It means more than one, but it is not a name for a group."
            ],
            misconception: "A common mix-up is thinking every word that means many is a collective noun. A plural is not a collective noun.",
            why: "The answer is dogs. Dogs is the plural of dog, so it just means more than one. Pack, herd and crew are each one word that names a whole group."
          },
          {
            id: "SK-GUM3-5-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: [],
            prompt: "Mia says, \"Every abstract noun names a feeling.\" Which TWO sentences show that Mia is wrong?",
            pick: 2,
            choices: [
              { text: "Anger made his face turn red." },
              { text: "Her strength surprised everyone at the gym.", correct: true },
              { text: "Excitement filled the room." },
              { text: "Teamwork helped our class win the relay.", correct: true },
              { text: "Fear grew as the thunder got louder." }
            ],
            clue: "To test a rule, look for examples that break it. Find the abstract noun in each sentence and ask whether it is a feeling.",
            hints: [
              "To test a rule, look for examples that break it. Find the abstract noun in each sentence and ask whether it is a feeling.",
              "Read each sentence and name the idea or feeling word. Ask whether a person could feel it inside.",
              "Fear is a feeling, so that sentence does not break Mia's rule. Decide about the other four."
            ],
            how: [
              "Find the abstract noun in each sentence.",
              "Fear, anger and excitement are feelings, so they follow Mia's rule.",
              "Teamwork and strength are not feelings. Teamwork is working together, and strength is a quality, so those two sentences show the rule is wrong."
            ],
            misconception: "A common mix-up is thinking every abstract noun is a feeling. Some name qualities or ideas.",
            why: "The answers are \"Teamwork helped our class win the relay.\" and \"Her strength surprised everyone at the gym.\" Teamwork and strength are abstract nouns that are not feelings. Fear, anger and excitement are feelings, so they match Mia's rule."
          },
          {
            id: "SK-GUM3-5-C14",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: [],
            prompt: "Choose the word that correctly completes the sentence. The troop acts together as one.",
            text: "Every Friday, the troop {0} a hike together.",
            slots: [
              {
                options: ["take", "takes", "taking"],
                answer: 1
              }
            ],
            clue: "Is the troop one group or many separate people? Think about which verb goes with that.",
            hints: [
              "Is the troop one group or many separate people? Think about which verb goes with that.",
              "Say each choice in the blank. Listen for the one that goes with one group.",
              "Taking needs a helper word like is, and the sentence has none. Decide between the other two."
            ],
            how: [
              "The word together tells you the troop acts as one group.",
              "A group that acts as one takes the verb for one thing, which ends in -s in the present tense.",
              "The answer is takes. Take is the verb for many, and taking needs a helper word."
            ],
            misconception: "A common mix-up is choosing take because a troop has many members. A group that acts as one takes the verb for one.",
            why: "The answer is takes. Troop is a collective noun that acts as one, so it takes the verb for one: takes. Take is the verb for many, and taking needs a helper word."
          },
          {
            id: "SK-GUM3-5-C15",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-collective-and-abstract-nouns"
            ],
            passages: [],
            prompt: "Which sentence has a collective noun that names a group of people?",
            choices: [
              { text: "A school of fish swam under the dock." },
              { text: "A colony of ants crossed the path." },
              { text: "A pack of wolves howled at the moon." },
              { text: "The committee chose a new mascot.", correct: true }
            ],
            clue: "A collective noun is one word that names a group. Ask who or what is in each group.",
            hints: [
              "A collective noun is one word that names a group. Ask who or what is in each group.",
              "Find the group word in each sentence. Ask whether the group is made of people or of animals.",
              "Fish are animals, not people. Decide among the other choices."
            ],
            how: [
              "Find the collective noun in each sentence: school, colony, pack and committee.",
              "A school of fish, a colony of ants and a pack of wolves are groups of animals.",
              "The answer is \"The committee chose a new mascot.\" A committee is a group of people."
            ],
            misconception: "A common mix-up is picking the first group word you see. Check whether the group is made of people.",
            why: "The answer is \"The committee chose a new mascot.\" A committee is a group of people. The other sentences name groups of fish, ants and wolves."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM3-5-S01",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: [],
      prompt: "Choose the TWO sentences that use a collective noun.",
      pick: 2,
      choices: [
        { text: "The jury listened to the story.", correct: true },
        { text: "Mateo felt calm at the lake." },
        { text: "A troop of scouts hiked up the trail.", correct: true },
        { text: "The hungry goats ate the hay." },
        { text: "Five mice ran across the floor." }
      ],
      clue: "Look for one word that stands for a whole group. A word that only means more than one does not count.",
      hints: [
        "Look for one word that stands for a whole group. A word that only means more than one does not count.",
        "Read each sentence and find the nouns. Ask which noun is one word for a group of people or animals.",
        "Mice means more than one, but it does not name a group. Decide about the other four."
      ],
      how: [
        "Find the nouns in each sentence and ask which one names a whole group.",
        "Troop names a group of scouts, and jury names a group of people who listen and decide.",
        "Mice and goats are plurals, and calm names a feeling, so those sentences have no collective noun."
      ],
      misconception: "A common mix-up is picking a plural noun. Mice and goats mean more than one, but each is not a name for a group.",
      why: "The answers are \"A troop of scouts hiked up the trail.\" and \"The jury listened to the story.\" Troop and jury each name a group as one thing. Mice and goats are plurals, and calm is a feeling.",
      like: ["SK-GUM3-5-P4"]
    },
    {
      id: "SK-GUM3-5-S02",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: [],
      prompt: "Select the sentence that has an abstract noun.",
      options: [
        "The baker put the bread in the oven.",
        "A strong wind shook the old fence.",
        "Her honesty made everyone trust her.",
        "Three ducks sat on the wooden dock."
      ],
      answer: [2],
      pick: 1,
      clue: "Check each noun. Can you see it, hear it or touch it? Find the one you cannot.",
      hints: [
        "Check each noun. Can you see it, hear it or touch it? Find the one you cannot.",
        "Read the nouns in each sentence and ask whether they name things that can be seen or touched.",
        "Bread, oven, wind and fence can all be seen or felt. Check the other sentences."
      ],
      how: [
        "Check the nouns in each sentence.",
        "Baker, bread, oven, fence, ducks and dock can be seen or touched.",
        "Honesty is a quality that you cannot touch, so it is an abstract noun."
      ],
      misconception: "A common mix-up is picking a noun for something you can feel, like wind. An abstract noun names an idea, a feeling or a quality.",
      why: "The answer is \"Her honesty made everyone trust her.\" Honesty is a quality you cannot see or touch, so it is an abstract noun. The other sentences have only nouns for things you can see or touch.",
      like: ["SK-GUM3-5-P5"]
    },
    {
      id: "SK-GUM3-5-S03",
      type: "mc",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: ["p4"],
      prompt: "Look at the second sentence of the draft. Which word names a group as one thing?",
      choices: [
        { text: "swims" },
        { text: "dolphins" },
        { text: "pod", correct: true },
        { text: "boat" }
      ],
      clue: "A collective noun is one word that names a whole group. Look for a word that stands for many things together.",
      hints: [
        "A collective noun is one word that names a whole group. Look for a word that stands for many things together.",
        "Read sentence 2 and find the nouns. Ask which noun names a group and which only names things.",
        "Swims is a verb, not a noun. Decide among the other three."
      ],
      how: [
        "Find the nouns in sentence 2: pod, dolphins and boat.",
        "Dolphins is a plural noun, and boat names one thing. Neither names a group as one thing.",
        "The answer is pod. A pod is one word for a group of dolphins."
      ],
      misconception: "A common mix-up is picking dolphins because it means more than one. A collective noun is one word that names a whole group.",
      why: "The answer is pod. A pod is one word that names a group of dolphins. Dolphins is a plural, boat names one thing, and swims is a verb.",
      like: ["SK-GUM3-5-C03"]
    },
    {
      id: "SK-GUM3-5-S04",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: ["p4"],
      prompt: "In sentence 4, the crowd acts as one. Which verb belongs in the blank?",
      text: "Together, the crowd {0} when a dolphin jumps.",
      slots: [
        {
          options: ["gasp", "gasps", "gasping"],
          answer: 1
        }
      ],
      clue: "Is the crowd one group or many separate people? Think about which verb goes with that.",
      hints: [
        "Is the crowd one group or many separate people? Think about which verb goes with that.",
        "Read sentence 4 and say each choice in the blank. Listen for the one that goes with a single group.",
        "Gasping needs a helper word like is, and the sentence has none. Decide between the other two."
      ],
      how: [
        "The word together tells you the crowd acts as one group.",
        "A collective noun that acts as one takes the verb for one thing. For present tense, that verb ends in -s.",
        "The answer is gasps. Gasp is the verb for many, and gasping needs a helper word."
      ],
      misconception: "A common mix-up is choosing the plural verb because a crowd has many people. When the group acts together, use the verb for one.",
      why: "The answer is gasps. Crowd is a collective noun, and the crowd acts together as one. A group that acts as one takes the verb for one: gasps.",
      like: ["SK-GUM3-5-C04"]
    },
    {
      id: "SK-GUM3-5-S05",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: ["p4"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "Which word in sentence 8 of the draft names a quality instead of a thing?",
        choices: [
          { text: "cousin" },
          { text: "generosity", correct: true },
          { text: "sandwiches" },
          { text: "seagull" }
        ]
      },
      partB: {
        prompt: "What makes the word in Part A an abstract noun?",
        choices: [
          { text: "You can see sandwiches being shared, but not generosity itself.", correct: true },
          { text: "It names a group of birds that fly together over the water." },
          { text: "It names a person who likes to give things to other people." },
          { text: "It tells how the sandwiches tasted when everyone ate them." }
        ]
      },
      clue: "An abstract noun names an idea, a feeling or a quality. Ask which word you cannot see or touch.",
      hints: [
        "An abstract noun names an idea, a feeling or a quality. Ask which word you cannot see or touch.",
        "For Part A, find the nouns in the sentence. For Part B, think about what makes an abstract noun different from the others.",
        "In Part A, a cousin can be seen and sandwiches can be touched. Check the other choices."
      ],
      how: [
        "Part A: find the nouns in sentence 8: cousin, generosity, sandwiches and seagull.",
        "You can see a cousin, sandwiches and a seagull. Generosity is a quality that you cannot touch.",
        "Part A answer: generosity.",
        "Part B answer: \"You can see sandwiches being shared, but not generosity itself.\""
      ],
      misconception: "A common mix-up is thinking an abstract noun names a person. Generosity names a quality, not the person.",
      why: "Part A: generosity. Part B: \"You can see sandwiches being shared, but not generosity itself.\" Generosity names a quality, so it is abstract. A group noun names a group, a person noun names a person, and a describing word tells how something tasted.",
      like: ["SK-GUM3-5-C05"]
    },
    {
      id: "SK-GUM3-5-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: ["p5"],
      prompt: "Select the TWO sentences that have an abstract noun.",
      targets: ["p5:1:3", "p5:2:2", "p5:2:3", "p5:3:1", "p5:3:2"],
      answer: ["p5:2:2", "p5:3:1"],
      pick: 2,
      clue: "An abstract noun names an idea, a feeling or a quality. Look for words you cannot see or touch.",
      hints: [
        "An abstract noun names an idea, a feeling or a quality. Look for words you cannot see or touch.",
        "Read the nouns in each of the five sentences. Ask whether you could see or touch the thing the noun names.",
        "In sentence 3, panel names a group of people. Check the other four sentences."
      ],
      how: [
        "Find the nouns in each sentence and ask whether you could see or touch the thing.",
        "Panel, group and litter name groups, and a group can be seen.",
        "Sentence 5 has loyalty, and sentence 8 has relief. You cannot see or touch either one, so both are abstract nouns."
      ],
      misconception: "A common mix-up is picking a sentence with a group noun. A group of people or animals can be seen, so it is not abstract.",
      why: "The answers are \"My neighbor's old dog showed loyalty, because it stayed by her side.\" and \"After the show, my sister felt relief because her dog behaved.\" Loyalty and relief name a quality and a feeling, so they are abstract nouns. Panel, group and litter name groups.",
      like: ["SK-GUM3-5-C06"]
    },
    {
      id: "SK-GUM3-5-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: [],
      prompt: "Each group acts together as one. Which TWO sentences have a verb that goes with the group noun?",
      pick: 2,
      choices: [
        { text: "The staff clean the room after lunch." },
        { text: "The band plays at every home game.", correct: true },
        { text: "The choir sing in the gym today." },
        { text: "My class visit the zoo in May." },
        { text: "Our team wins when we help each other.", correct: true }
      ],
      clue: "Find the group noun in each sentence. A group that acts as one takes the verb for one.",
      hints: [
        "Find the group noun in each sentence. A group that acts as one takes the verb for one.",
        "Say each verb aloud. The verb for one group usually ends in -s when it tells about now.",
        "Sing does not end in -s, so it is the verb for many. Decide about the other four."
      ],
      how: [
        "Find the group noun in each sentence: band, team, choir, staff and class.",
        "Each group acts as one, so the verb should be the one for a single thing. In the present tense it ends in -s.",
        "Plays and wins are correct. Sing, clean and visit are the verbs for many, so they do not match."
      ],
      misconception: "A common mix-up is choosing the plural verb because a group has many members. When the group acts as one, the verb is for one.",
      why: "The answers are \"The band plays at every home game.\" and \"Our team wins when we help each other.\" Band and team are group nouns that act as one, so they take the verbs plays and wins. The others use sing, clean and visit, which are the verbs for many.",
      like: ["SK-GUM3-5-C07"]
    },
    {
      id: "SK-GUM3-5-S08",
      type: "match",
      points: 2,
      dok: 1,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: [],
      prompt: "Which collective noun names each group of living things?",
      cols: ["litter", "pod", "colony", "troop"],
      rows: [
        { text: "scouts", answer: 3 },
        { text: "kittens", answer: 0 },
        { text: "ants", answer: 2 },
        { text: "whales", answer: 1 }
      ],
      clue: "Say each group out loud with of in front of it, as in a ___ of kittens. Which collective noun sounds right?",
      hints: [
        "Say each group out loud with of in front of it, as in a ___ of kittens. Which collective noun sounds right?",
        "Start with the group you know best. Then decide the rest one at a time.",
        "A litter goes with newborn animals. Decide the other rows."
      ],
      how: [
        "Say a ___ of for each group of things.",
        "A troop of scouts, a litter of kittens, a colony of ants and a pod of whales are the usual names.",
        "Each collective noun is one word that names the whole group."
      ],
      misconception: "A common mix-up is guessing from the animal's size. Each collective noun is a name you learn with its group.",
      why: "A troop of scouts, a litter of kittens, a colony of ants and a pod of whales. Each collective noun is one word that names a whole group.",
      like: ["SK-GUM3-5-C08"]
    },
    {
      id: "SK-GUM3-5-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: [],
      prompt: "Which sentence has BOTH a collective noun and an abstract noun?",
      choices: [
        { text: "The crew showed bravery during the storm.", correct: true },
        { text: "The crew painted the old ship bright blue." },
        { text: "Bravery helped her climb the steep hill alone." },
        { text: "The sailors tied the heavy ropes to the dock." }
      ],
      clue: "Look for one group word and one idea or feeling word in the same sentence.",
      hints: [
        "Look for one group word and one idea or feeling word in the same sentence.",
        "Check each choice for two things: a word that names a group, and a word you cannot see or touch.",
        "The sailors tied the heavy ropes to the dock has no feeling or idea word. Check the other three."
      ],
      how: [
        "Check each sentence for a collective noun and an abstract noun.",
        "\"The crew showed bravery during the storm.\" has crew, a group, and bravery, a quality.",
        "The other choices have only one kind of noun: crew alone, bravery alone, or neither."
      ],
      misconception: "A common mix-up is picking a sentence that has only one of the two kinds. The sentence needs both.",
      why: "The answer is \"The crew showed bravery during the storm.\" Crew is a collective noun, and bravery is an abstract noun. One choice has only crew, one has only bravery, and one has neither.",
      like: ["SK-GUM3-5-C09"]
    },
    {
      id: "SK-GUM3-5-S10",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: ["p5"],
      prompt: "Each group in sentence 3 of the draft acts together as one. Which helper words make the verbs match?",
      text: "The panel {0} chosen a winner, and the group {1} cheered.",
      slots: [
        {
          options: ["have", "has", "having"],
          answer: 1
        },
        {
          options: ["have", "has", "are"],
          answer: 1
        }
      ],
      clue: "Is each group one thing or many separate people? Think about which helper verb goes with that.",
      hints: [
        "Is each group one thing or many separate people? Think about which helper verb goes with that.",
        "Read sentence 3 and say each choice in its blank. Listen for the helper verb that goes with one group.",
        "Having cannot stand alone as the helper verb here. Decide the rest."
      ],
      how: [
        "Both groups act together as one, so each needs the helper verb for one thing.",
        "Has goes with one group, and have goes with many.",
        "The answers are has and has. Having does not work as the helper verb here, and are does not go with cheered."
      ],
      misconception: "A common mix-up is choosing have because a panel and a group have many people. A group that acts as one takes has.",
      why: "The answers are has and has. Panel and group are collective nouns that act as one, so each takes has. Have is for many, having cannot stand alone as the helper verb, and are does not go with cheered.",
      like: ["SK-GUM3-5-C10"]
    },
    {
      id: "SK-GUM3-5-S11",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: ["p6"],
      prompt: "Select the TWO sentences where the verb does not go with the collective noun.",
      targets: ["p6:1:2", "p6:2:2", "p6:3:1", "p6:3:2", "p6:3:3"],
      answer: ["p6:2:2", "p6:3:3"],
      pick: 2,
      clue: "Find the group word in a sentence, then check its verb. A group that acts as one needs the verb for one.",
      hints: [
        "Find the group word in a sentence, then check its verb. A group that acts as one needs the verb for one.",
        "Read each sentence and say its verb. Ask whether the verb matches one group or many.",
        "Sentence 8 uses keeps, and it matches the group club. Check the other four sentences."
      ],
      how: [
        "Find the collective noun in each sentence and check its verb.",
        "Sentence 2 uses landed, sentence 7 has no group noun, and sentence 8 uses keeps with club. Those are correct.",
        "Sentence 5 says the flock stay, and sentence 9 says the flock return. A flock acts as one, so the verbs should be stays and returns."
      ],
      misconception: "A common mix-up is thinking a verb is right because it follows the word birds. The subject is flock, which is one group.",
      why: "The errors are in \"The flock stay together when they eat.\" and \"We hope the flock return tomorrow.\" Flock is one group, so the verbs should be stays and returns. Sentences 2, 7 and 8 are correct.",
      like: ["SK-GUM3-5-C11"]
    },
    {
      id: "SK-GUM3-5-S12",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: [],
      prompt: "Which word does NOT name a group as one thing?",
      choices: [
        { text: "herd" },
        { text: "fleet" },
        { text: "aunts", correct: true },
        { text: "family" }
      ],
      clue: "Look for the word that means more than one person but is not one word for the whole group.",
      hints: [
        "Look for the word that means more than one person but is not one word for the whole group.",
        "Say a ___ of for each word. Ask which one makes the phrase sound odd.",
        "A herd names a group of animals. Decide among the other three."
      ],
      how: [
        "Ask whether each word is one word for a whole group.",
        "A herd, a fleet and a family each name a group as one thing.",
        "Aunts is the plural of aunt. It means more than one, but it is not a name for a group."
      ],
      misconception: "A common mix-up is thinking every word that means many is a collective noun. A plural is not a collective noun.",
      why: "The answer is aunts. Aunts is the plural of aunt, so it just means more than one. Herd, fleet and family are each one word that names a whole group.",
      like: ["SK-GUM3-5-C12"]
    },
    {
      id: "SK-GUM3-5-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: [],
      prompt: "Jay says, \"Every abstract noun names a feeling.\" Which TWO sentences show that Jay is wrong?",
      pick: 2,
      choices: [
        { text: "Sadness filled the quiet room." },
        { text: "Joy lit up her face." },
        { text: "Wisdom helps people make good choices.", correct: true },
        { text: "His worry grew all night." },
        { text: "Her beauty was in the way she sang.", correct: true }
      ],
      clue: "To test a rule, look for examples that break it. Find the abstract noun in each sentence and ask whether it is a feeling.",
      hints: [
        "To test a rule, look for examples that break it. Find the abstract noun in each sentence and ask whether it is a feeling.",
        "Read each sentence and name the idea or feeling word. Ask whether a person could feel it inside.",
        "Worry is a feeling, so that sentence does not break Jay's rule. Decide about the other four."
      ],
      how: [
        "Find the abstract noun in each sentence.",
        "Sadness, worry and joy are feelings, so they follow Jay's rule.",
        "Wisdom and beauty are not feelings. Wisdom is a quality of thinking, and beauty is a quality of how something looks or sounds, so those two sentences show the rule is wrong."
      ],
      misconception: "A common mix-up is thinking every abstract noun is a feeling. Some name qualities or ideas.",
      why: "The answers are \"Wisdom helps people make good choices.\" and \"Her beauty was in the way she sang.\" Wisdom and beauty are abstract nouns that are not feelings. Sadness, worry and joy are feelings, so they match Jay's rule.",
      like: ["SK-GUM3-5-C13"]
    },
    {
      id: "SK-GUM3-5-S14",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: [],
      prompt: "Which verb goes with the group? The herd moves as one.",
      text: "Each morning, the herd {0} to the river together.",
      slots: [
        {
          options: ["walk", "walks", "walking"],
          answer: 1
        }
      ],
      clue: "Is the herd one group or many separate animals? Think about which verb goes with that.",
      hints: [
        "Is the herd one group or many separate animals? Think about which verb goes with that.",
        "Say each choice in the blank. Listen for the one that goes with one group.",
        "Walking needs a helper word like is, and the sentence has none. Decide between the other two."
      ],
      how: [
        "The word together tells you the herd acts as one group.",
        "A group that acts as one takes the verb for one thing, which ends in -s in the present tense.",
        "The answer is walks. Walk is the verb for many, and walking needs a helper word."
      ],
      misconception: "A common mix-up is choosing walk because a herd has many animals. A group that acts as one takes the verb for one.",
      why: "The answer is walks. Herd is a collective noun that acts as one, so it takes the verb for one: walks. Walk is the verb for many, and walking needs a helper word.",
      like: ["SK-GUM3-5-C14"]
    },
    {
      id: "SK-GUM3-5-S15",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-collective-and-abstract-nouns"
      ],
      passages: [],
      prompt: "Which sentence has a collective noun that names a group of animals?",
      choices: [
        { text: "The staff planned the field trip for May." },
        { text: "A gaggle of geese crossed the road.", correct: true },
        { text: "The council met in the town hall on Tuesday." },
        { text: "The class lined up outside the cafeteria for lunch." }
      ],
      clue: "A collective noun is one word that names a group. Ask who or what is in each group.",
      hints: [
        "A collective noun is one word that names a group. Ask who or what is in each group.",
        "Find the group word in each sentence. Ask whether the group is made of people or of animals.",
        "A class is a group of students, not animals. Decide among the other choices."
      ],
      how: [
        "Find the collective noun in each sentence: staff, gaggle, council and class.",
        "A staff, a council and a class are groups of people.",
        "The answer is \"A gaggle of geese crossed the road.\" A gaggle is a group of geese."
      ],
      misconception: "A common mix-up is picking the first group word you see. Check whether the group is made of animals.",
      why: "The answer is \"A gaggle of geese crossed the road.\" A gaggle is a group of geese. The other sentences name groups of people.",
      like: ["SK-GUM3-5-C15"]
    }
  ],
  addons: {
    "SK-GUM3-5-P1": {
      hints: [
        "An abstract noun names a feeling or an idea. Which word names something you cannot see or touch?",
        "Find the nouns in the sentence, then ask whether you could see or touch each one.",
        "Finished is a verb, not a noun. Decide among the other three."
      ],
      how: [
        "Find the nouns: Amara, pride and puzzle.",
        "You can see Amara and the puzzle. Pride is a feeling you cannot touch.",
        "The answer is pride, and finished is a verb."
      ],
      misconception: "A common mix-up is picking a name. Amara is a person you can see, so it is not abstract."
    },
    "SK-GUM3-5-P2": {
      hints: [
        "Is a choir one group or many separate things? Think about which verb goes with that.",
        "Say each choice in the blank. Listen for the one that goes with one group.",
        "Singing needs a helper word like is, and the sentence has none. Decide between the other two."
      ],
      how: [
        "Choir is a collective noun that acts as one group.",
        "A group that acts as one takes the verb for one thing, which ends in -s in the present tense.",
        "The answer is sings. Sing is the verb for many, and singing needs a helper word."
      ],
      misconception: "A common mix-up is choosing sing because a choir has many singers. A group that acts as one takes the verb for one."
    },
    "SK-GUM3-5-P3": {
      hints: [
        "Ask: Does this word name a group of people or animals? Or does it name something you cannot touch?",
        "Start with the word you are surest about. Then decide the rest one at a time.",
        "Honesty is a quality. Decide the other rows."
      ],
      how: [
        "Ask whether each word names a group or an idea.",
        "Team, flock and crowd each name a group.",
        "Honesty and bravery name qualities you cannot touch."
      ],
      misconception: "A common mix-up is thinking a word for people must be a collective noun. Only a word for a whole group counts."
    },
    "SK-GUM3-5-P4": {
      hints: [
        "Look for one word that stands for a whole group. A word that just adds -s, like cats, does not count.",
        "Read each sentence and find the nouns. Ask which noun is one word for a group.",
        "Dogs is a plural, not a group word. Decide about the other four."
      ],
      how: [
        "Find the nouns in each sentence and ask which one names a whole group.",
        "Swarm names a group of bees, and family names a group of people.",
        "Dogs and kittens are plurals, and happy is a feeling word."
      ],
      misconception: "A common mix-up is picking a plural noun. Dogs means more than one, but it is not a name for a group."
    },
    "SK-GUM3-5-P5": {
      hints: [
        "Check each noun. Can you see it, hear it or touch it? Find the one you cannot.",
        "Read the nouns in each sentence and ask whether they name things that can be seen or touched.",
        "Goat, grass, shoes and door can all be seen. Check the other sentences."
      ],
      how: [
        "Check the nouns in each sentence.",
        "Goat, grass, shoes, door, rain and roof can be seen or touched.",
        "Friendship is an idea you cannot touch, so it is an abstract noun."
      ],
      misconception: "A common mix-up is picking a noun for something you can feel, like rain. An abstract noun names an idea, a feeling or a quality."
    }
  },
  /* B6:core:end */
  test: [
    { id: "SK-GUM3-5-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word in the sentence is an abstract noun?",
      stem: "Lena never lost hope that her cat would come back.",
      choices: [
        { text: "hope", correct: true },
        { text: "cat" },
        { text: "lost" },
        { text: "Lena" }
      ],
      clue: "Which word names something you cannot see, hear or touch?",
      why: "The answer is hope. Hope is a feeling, so it is an abstract noun. Lena and her cat can be seen, and lost is a verb." },
    { id: "SK-GUM3-5-T2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The flock {0} over our pond every fall.",
      slots: [{ options: ["fly", "flies", "flying"], answer: 1 }],
      clue: "Is a flock one group or many separate things? Think about which verb goes with that.",
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
      "Match the pronoun to the word it points back to. One person or thing ends in -self (Ben, himself). More than one ends in -selves (the girls, themselves; we, ourselves). When you talk to one person, use yourself. When you talk to more than one, use yourselves.",
      "You can also use a -self word after by to mean alone (I did it by myself).",
      "Hisself and theirselves are not correct words. Also, do not use myself in place of I or me: say \"Sam and I walked,\" not \"Sam and myself walked.\""
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
      show: ["The girls built theirselves a fort out of blankets."],
      ask: "This sentence has a pronoun error. How do you fix it?",
      steps: [
        "Find who did the action: the girls.",
        "The girls are more than one person, so the word must end in -selves.",
        "Theirselves is not a correct word. The reflexive pronoun for the girls is themselves."
      ],
      answer: "The girls built themselves a fort out of blankets."
    },
    {
      show: ["Tia and (myself / I) planted the seeds by (myself / ourselves)."],
      ask: "Which words are correct?",
      steps: [
        "Look at the subject. Tia and the writer did the planting, so the first blank is part of the subject.",
        "Say the sentence without Tia and: ___ planted the seeds. You would say I, not myself.",
        "For the second blank, who did it alone? Tia and the writer, which is more than one, so use ourselves."
      ],
      answer: "Tia and I planted the seeds by ourselves."
    }
  ],
  parent: "When your child does something alone, like pouring cereal or tying shoes, ask \"Who did that?\" and have them answer with a -self word: \"I did it myself.\" Then try it for others: \"Dad did it himself.\"",
  passages: [
    /* B6:passages:start */
    {
      id: "p1",
      title: "Building Our Treehouse",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last summer, my cousin Luis and I built a treehouse.",
          "(2) Luis and myself carried the boards to the backyard.",
          "(3) Dad showed us how to use the saw safely."
        ],
        [
          "(4) We measured every board with a long tape.",
          "(5) Luis hurt hisself on a splinter, so we found a bandage.",
          "(6) The next day, the treehouse looked finished."
        ],
        [
          "(7) We were proud of ourself.",
          "(8) Mom made us a snack to celebrate.",
          "(9) She told us that we could add a rope ladder next summer."
        ],
        [
          "(10) Now the treehouse has a small flag on top.",
          "(11) We plan to sleep inside it on the first cool night."
        ]
      ]
    },
    {
      id: "p2",
      title: "The Puppet Show",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Friday, our class put on a puppet show for the first graders.",
          "(2) My partner Ellie made a fox puppet, and I made a rabbit.",
          "(3) Ellie painted a bright smile on the fox by herself."
        ],
        [
          "(4) The rabbit looked at itself in a toy mirror.",
          "(5) The twins in the front row gave theirselves a loud cheer.",
          "(6) I forgot my lines, so I told myself to stay calm."
        ],
        [
          "(7) The old fox puppet fell and bumped themselves on the floor.",
          "(8) The first graders asked for a second show.",
          "(9) We promised to practice more at home.",
          "(10) It was a loud and happy afternoon."
        ]
      ]
    },
    {
      id: "p3",
      title: "Learning Cartwheels",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last month, I decided to learn how to do a cartwheel.",
          "(2) My big sister Nora offered to teach me.",
          "(3) She told me to keep my arms straight."
        ],
        [
          "(4) At first, I kept falling and hurting myself.",
          "(5) Nora laughed at herself when she fell too.",
          "(6) After a week, my friends and I taught ourselves a new trick."
        ],
        [
          "(7) Dad and myself practiced on the grass every night.",
          "(8) Nora said I should be proud of myself.",
          "(9) She brushed himself off and tried one more time."
        ],
        [
          "(10) Now I can do a cartwheel by myself.",
          "(11) Next, I want to learn how to do a handstand."
        ]
      ]
    },
    {
      id: "p4",
      title: "Sandcastle Day",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Saturday, my cousin Theo and I built a huge sandcastle.",
          "(2) Theo and myself dug a deep moat around it.",
          "(3) Grandpa showed us how to pack the wet sand."
        ],
        [
          "(4) We carried water in a bucket from the waves.",
          "(5) Theo splashed hisself with cold water, so we laughed.",
          "(6) By noon, the castle had four tall towers."
        ],
        [
          "(7) The older kids next to us built a castle by theirselves.",
          "(8) Aunt Jo took a photo to celebrate.",
          "(9) She said we could enter the contest next summer."
        ],
        [
          "(10) That night, the waves washed our castle away."
        ]
      ]
    },
    {
      id: "p5",
      title: "Sewing Club",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Tuesday, our class held a sewing club after school.",
          "(2) My partner Gus made a pillow, and I made a bookmark.",
          "(3) Gus stitched a blue star on the pillow by himself."
        ],
        [
          "(4) The needle slipped, and I pricked myself.",
          "(5) The members of the club gave theirselves a loud cheer.",
          "(6) I told myself to stay calm and keep going."
        ],
        [
          "(7) The big quilt caught on a chair and ripped themselves.",
          "(8) The teacher asked for a second club next week.",
          "(9) Everyone promised to practice more at home.",
          "(10) The room was quiet and full of busy hands."
        ]
      ]
    },
    {
      id: "p6",
      title: "Pottery Class",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last month, I joined a pottery class at the art center.",
          "(2) My teacher, Mr. Singh, showed us how to shape a bowl.",
          "(3) He told us to keep the clay wet."
        ],
        [
          "(4) At first, I dropped my bowl and surprised myself.",
          "(5) Mr. Singh laughed at himself when his own bowl cracked.",
          "(6) After a week, my friends and I taught ourselves a new glaze."
        ],
        [
          "(7) Grandma and myself picked up my first bowl on Friday.",
          "(8) Mr. Singh said I should be proud of myself.",
          "(9) My friend Tessa admired himself in the shiny glaze."
        ],
        ["(10) Now I can shape a bowl by myself."]
      ]
    }
    /* B6:passages:end */
  ],
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
  /* B6:core:start */
  /* ---------- Expansion 2026-10-22, batch B6 (GUM Master) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test or testB.
     Author log: docs/expansion-2026-10-22/batches/B6-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          { ref: "SK-GUM3-6-P4" },
          { ref: "SK-GUM3-6-P5" },
          {
            id: "SK-GUM3-6-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: ["p1"],
            prompt: "Sentence 2 of the draft uses the wrong pronoun. Choose the word that fixes it.",
            text: "Luis and {0} carried the boards to the backyard.",
            slots: [
              {
                options: ["myself", "I", "me", "mine"],
                answer: 1
              }
            ],
            clue: "Look at who did the carrying. A -self word points back to someone, so ask whether it is needed here.",
            hints: [
              "Look at who did the carrying. A -self word points back to someone, so ask whether it is needed here.",
              "Read sentence 2 and leave out the words Luis and. Then say the sentence with each choice.",
              "Mine shows that something belongs to me, and nothing here is owned. Decide among the other three."
            ],
            how: [
              "Luis and the writer did the carrying together, so the blank is part of the subject.",
              "Leave out Luis and: \"___ carried the boards.\" You would say I, not me and not myself.",
              "The answer is I. Myself needs an I earlier in the sentence to point back to, and mine shows belonging."
            ],
            misconception: "A common mix-up is thinking myself sounds more polite than I. Use myself only when I already did the action to myself.",
            why: "The answer is I. The writer and Luis did the carrying, so the subject needs I. Myself points back to an I that is already in the sentence, me is not used as the one who acts, and mine shows belonging."
          },
          {
            id: "SK-GUM3-6-C04",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: ["p1"],
            prompt: "Sentence 5 of the draft has a word that is not correct. Which revision fixes it?",
            choices: [
              { text: "Luis hurt himself on a splinter, so we found a bandage.", correct: true },
              { text: "Luis hurt hisself on a splinter, so we found a bandage." },
              { text: "Luis hurt itself on a splinter, so we found a bandage." },
              { text: "Luis hurt themselves on a splinter, so we found a bandage." }
            ],
            clue: "Find who got hurt. Then find the -self word that points back to that person.",
            hints: [
              "Find who got hurt. Then find the -self word that points back to that person.",
              "Read sentence 5 and check each -self word. Ask whether it is a real word and whether it matches Luis.",
              "Themselves is for more than one, and Luis is only one person. Check the other three."
            ],
            how: [
              "Luis is one boy, so the word must be the -self word for one boy.",
              "The word hisself is not a correct word. The correct word for one boy is himself.",
              "The answer is \"Luis hurt himself on a splinter, so we found a bandage.\" Itself is for a thing, and themselves is for more than one."
            ],
            misconception: "A common mix-up is saying hisself, because it sounds like his. The correct word is himself.",
            why: "The answer is \"Luis hurt himself on a splinter, so we found a bandage.\" Luis is one boy, so the pronoun is himself. Hisself is not a correct word, itself is for a thing, and themselves is for more than one."
          },
          {
            id: "SK-GUM3-6-C05",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Sentence 7 of the draft has a pronoun that does not match. Which revision fixes it?",
              choices: [
                { text: "We were proud of ourself." },
                { text: "We were proud of myself." },
                { text: "We were proud of themselves." },
                { text: "We were proud of ourselves.", correct: true }
              ]
            },
            partB: {
              prompt: "Why is the revision in Part A correct?",
              choices: [
                { text: "We is only one person, so the word has to end in the letters -self." },
                { text: "We is more than one person, so the word has to end in -selves.", correct: true },
                { text: "The words proud of must always be followed by the word myself." },
                { text: "The sentence is about Mom, so the word has to be herself." }
              ]
            },
            clue: "Find who the pronoun points back to. Then decide whether that is one person or more than one.",
            hints: [
              "Find who the pronoun points back to. Then decide whether that is one person or more than one.",
              "For Part A, read sentence 7 and check who was proud. For Part B, think about what the word we tells you.",
              "In Part A, myself would point back to only one person. Check the other choices."
            ],
            how: [
              "Part A: sentence 7 begins with we, so the pronoun must point back to we.",
              "We means more than one person, so the word must end in -selves.",
              "Part A answer: \"We were proud of ourselves.\" Ourself has the wrong ending, myself is for one person, and themselves points back to someone else.",
              "Part B answer: \"We is more than one person, so the word has to end in -selves.\""
            ],
            misconception: "A common mix-up is using ourself because it sounds like myself. We means more than one, so the word ends in -selves.",
            why: "Part A: \"We were proud of ourselves.\" Part B: \"We is more than one person, so the word has to end in -selves.\" Ourself has the wrong ending, myself is for one person, and themselves points back to someone else. The sentence is about the writer and Luis, not Mom."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM3-6-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: ["p2"],
            prompt: "Select the TWO sentences that have an error with a -self or -selves word.",
            targets: ["p2:2:1", "p2:2:2", "p2:2:3", "p2:3:1", "p2:3:2"],
            answer: ["p2:2:2", "p2:3:1"],
            pick: 2,
            clue: "Look at each -self or -selves word. Ask whether it is a real word and whether it matches who it points back to.",
            hints: [
              "Look at each -self or -selves word. Ask whether it is a real word and whether it matches who it points back to.",
              "Read the five sentences. For each one, find who the -self word points back to, and count how many that is.",
              "In sentence 6, myself points back to I, and it is correct. Check the other four sentences."
            ],
            how: [
              "Find each -self or -selves word and who it points back to.",
              "Sentence 4: itself points back to the rabbit, one thing, so it is correct. Sentence 6: myself points back to I, so it is correct.",
              "Sentence 5: theirselves is not a correct word. Sentence 7: the puppet is one thing, so it should be itself."
            ],
            misconception: "A common mix-up is thinking every -selves word is wrong when it follows a puppet or object. Check whether the word matches one thing or more than one.",
            why: "The errors are in \"The twins in the front row gave theirselves a loud cheer.\" and \"The old fox puppet fell and bumped themselves on the floor.\" Theirselves is not a correct word, and the puppet is one thing, so it needs itself. Itself and myself are used correctly in the other sentences."
          },
          {
            id: "SK-GUM3-6-C07",
            type: "ms",
            points: 2,
            dok: 2,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: [],
            prompt: "Choose the TWO sentences that use -self or -selves words correctly.",
            pick: 2,
            choices: [
              { text: "My uncle bought herself a new hat." },
              { text: "Priya gave herself extra time to finish.", correct: true },
              { text: "We made ourself a big salad." },
              { text: "Pablo built the shelf by himself.", correct: true },
              { text: "The kids taught theirselves to swim." }
            ],
            clue: "Find the -self or -selves word in each sentence. Ask whether it is a real word and whether it matches who it points back to.",
            hints: [
              "Find the -self or -selves word in each sentence. Ask whether it is a real word and whether it matches who it points back to.",
              "Say who each word points back to, and count how many that is. Then check the ending of the word.",
              "Theirselves is not a correct word. Decide about the other four."
            ],
            how: [
              "Find the -self or -selves word in each sentence and who it points back to.",
              "Priya is one girl, so herself is right. Pablo is one boy, so himself is right.",
              "The others are wrong: it should be themselves, himself and ourselves."
            ],
            misconception: "A common mix-up is picking a word that sounds right but is spelled wrong, like theirselves or ourself.",
            why: "The answers are \"Priya gave herself extra time to finish.\" and \"Pablo built the shelf by himself.\" Priya is one girl and Pablo is one boy, so herself and himself fit. The others should say themselves, himself and ourselves."
          },
          {
            id: "SK-GUM3-6-C08",
            type: "match",
            points: 2,
            dok: 2,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: [],
            prompt: "Match each sentence to the word that completes it.",
            cols: ["myself", "yourself", "itself", "ourselves"],
            rows: [
              { text: "The robot turned ___ off.", answer: 2 },
              { text: "I looked at ___ in the window.", answer: 0 },
              { text: "Ben, please be careful. Do not cut ___.", answer: 1 },
              { text: "My brother and I gave ___ a high five.", answer: 3 }
            ],
            clue: "Find who did the action in each sentence. Then pick the word that points back to that same person or thing.",
            hints: [
              "Find who did the action in each sentence. Then pick the word that points back to that same person or thing.",
              "Start with the sentence you are surest about. Think about who is talking and who is being talked to.",
              "A robot is one thing, so its sentence goes with itself. Decide the other rows."
            ],
            how: [
              "Find who did the action in each sentence and who the pronoun points back to.",
              "I looked at ___ points back to I, so it is myself. Ben, please be careful is talking to Ben, so it is yourself.",
              "My brother and I is more than one, so it is ourselves. The robot is one thing, so it is itself."
            ],
            misconception: "A common mix-up is using yourself when the talker is the one who acted. Use myself when I did the action to I.",
            why: "The robot is one thing, so itself. I looked at ___ points back to I, so myself. Please be careful, Ben is talking to Ben, so yourself. My brother and I is more than one, so ourselves."
          },
          {
            id: "SK-GUM3-6-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: [],
            prompt: "Which sentence means that Maya looked at her own reflection?",
            choices: [
              { text: "Maya looked at her in the mirror." },
              { text: "Maya looked at herself in the mirror.", correct: true },
              { text: "Maya looked at her friend in the mirror." },
              { text: "Maya looked at she in the mirror." }
            ],
            clue: "Think about who the pronoun must point to. It has to be the same girl who did the looking.",
            hints: [
              "Think about who the pronoun must point to. It has to be the same girl who did the looking.",
              "Say each sentence and ask who the last pronoun means. Only one of them must mean Maya.",
              "She cannot follow the word at in a sentence like this one. Check the other three."
            ],
            how: [
              "The sentence must tell that Maya looked at Maya, so the pronoun must point back to her.",
              "Her would mean some other girl. Her friend is another person, and she is the wrong form for this spot.",
              "The answer is \"Maya looked at herself in the mirror.\" Herself points back to Maya."
            ],
            misconception: "A common mix-up is thinking her can point back to the subject. Her means a different girl, so use herself.",
            why: "The answer is \"Maya looked at herself in the mirror.\" Herself points back to Maya, so Maya looked at her own reflection. Her would mean some other girl, her friend is another person, and she is not used after at."
          },
          {
            id: "SK-GUM3-6-C10",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: [],
            prompt: "Choose the words that correctly complete the sentence.",
            text: "The twins taught {0} to juggle, and their little brother taught {1} to whistle.",
            slots: [
              {
                options: ["themselves", "theirselves", "himself"],
                answer: 0
              },
              {
                options: ["himself", "hisself", "itself"],
                answer: 0
              }
            ],
            clue: "Find who did the teaching in each part. Then pick the word that points back to that same person or group.",
            hints: [
              "Find who did the teaching in each part. Then pick the word that points back to that same person or group.",
              "Count how many people are in each part. Then check that each word you pick is a real word.",
              "Theirselves is not a correct word. Decide the rest."
            ],
            how: [
              "The first blank points back to the twins, who are more than one person.",
              "The second blank points back to the little brother, who is one boy.",
              "The answers are themselves and himself. Theirselves and hisself are not correct words, and itself is for a thing."
            ],
            misconception: "A common mix-up is using theirselves or hisself. Both sound right, but neither one is a correct word.",
            why: "The answers are themselves and himself. The twins are more than one person, so themselves fits. The little brother is one boy, so himself fits. Theirselves and hisself are not correct words."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM3-6-C11",
            type: "hottext",
            points: 2,
            dok: 2,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: ["p3"],
            prompt: "Select the TWO sentences that use myself or himself in the wrong way.",
            targets: ["p3:2:1", "p3:2:2", "p3:2:3", "p3:3:1", "p3:3:3"],
            answer: ["p3:3:1", "p3:3:3"],
            pick: 2,
            clue: "Check each -self word. Does it point back to the person who did the action, and is it the right word for that person?",
            hints: [
              "Check each -self word. Does it point back to the person who did the action, and is it the right word for that person?",
              "Read each sentence and find who did the action. Then look at the -self word and ask whether it matches.",
              "In sentence 5, herself points back to Nora, and it is correct. Check the other four sentences."
            ],
            how: [
              "Find who did the action in each sentence and what the -self word points back to.",
              "Sentences 4, 5 and 6 use myself, herself and ourselves. Each one points back to the right person.",
              "Sentence 7 uses myself in a place where I belongs. Sentence 9 uses himself for Nora, but she is a girl, so it should be herself."
            ],
            misconception: "A common mix-up is using myself when I am doing the action with someone else. Say the sentence without the other person to check.",
            why: "The errors are in \"Dad and myself practiced on the grass every night.\" and \"She brushed himself off and tried one more time.\" The first should say Dad and I, and the second should say herself because Nora is a girl. The -self words in sentences 4, 5 and 6 are correct."
          },
          {
            id: "SK-GUM3-6-C12",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: [],
            prompt: "Which sentence tells that Rosa finished the project alone?",
            choices: [
              { text: "Rosa finished the project with her friends." },
              { text: "Rosa finished the project with help from her teacher." },
              { text: "Rosa finished the project by herself.", correct: true },
              { text: "Rosa and her cousin finished the project." }
            ],
            clue: "Alone means with no one else helping. Look for the choice that shows that.",
            hints: [
              "Alone means with no one else helping. Look for the choice that shows that.",
              "Read each choice and ask who did the work. Only one choice has just Rosa doing it.",
              "Rosa and her cousin means two people worked. Check the other three."
            ],
            how: [
              "Alone means nobody else helped.",
              "By herself tells that Rosa did the whole project by only herself.",
              "The answer is \"Rosa finished the project by herself.\" The other choices name friends, a teacher or a cousin who helped."
            ],
            misconception: "A common mix-up is thinking by herself means near herself. By herself means alone.",
            why: "The answer is \"Rosa finished the project by herself.\" By herself means alone, with no help. The other choices tell about help from her friends, her teacher, or her cousin."
          },
          {
            id: "SK-GUM3-6-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: [],
            prompt: "Lee says, \"You can use the word myself in place of I or me.\" Choose the TWO sentences where myself is used when I or me should be used.",
            pick: 2,
            choices: [
              { text: "I looked at myself in the mirror." },
              { text: "Dad gave Tia and myself some juice.", correct: true },
              { text: "I fixed the bike by myself." },
              { text: "Mia and myself raced to the gate.", correct: true },
              { text: "I gave myself a haircut." }
            ],
            clue: "Find each myself. In which sentences does it stand in for a person, instead of pointing back to the one who acts?",
            hints: [
              "Find each myself. In which sentences does it stand in for a person, instead of pointing back to the one who acts?",
              "Read each sentence. Ask whether myself points back to an I that is already in the sentence.",
              "In I gave myself a haircut, myself points back to I. Decide about the other four."
            ],
            how: [
              "Look at where myself appears in each sentence.",
              "In the three sentences that start with I, myself points back to I, so it is correct.",
              "In the other two sentences, there is no I for myself to point back to. They should say Mia and I, and Tia and me."
            ],
            misconception: "A common mix-up is thinking myself is the fancy word for I. It only points back to an I that is already in the sentence.",
            why: "The answers are \"Mia and myself raced to the gate.\" and \"Dad gave Tia and myself some juice.\" Neither sentence has an I for myself to point back to. They should say Mia and I, and Tia and me. In the other three sentences, myself points back to I."
          },
          {
            id: "SK-GUM3-6-C14",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: [],
            prompt: "Which word belongs in the blank?",
            text: "Please be careful, kids. You could hurt {0} on the wet floor.",
            slots: [
              {
                options: ["yourself", "yourselves", "themselves"],
                answer: 1
              }
            ],
            clue: "Find who is being talked to. Count how many people that is.",
            hints: [
              "Find who is being talked to. Count how many people that is.",
              "Read the sentence and look at the word kids. Then pick the word that points back to that same group.",
              "Themselves is for people who are being talked about, not talked to. Decide between the other two."
            ],
            how: [
              "The speaker is talking to kids, which is more than one person.",
              "The word that points back to you for more than one person is yourselves.",
              "The answer is yourselves. Yourself is for one person, and themselves is for people being talked about."
            ],
            misconception: "A common mix-up is choosing yourself when talking to a group. For more than one person, use yourselves.",
            why: "The answer is yourselves. The speaker is talking to kids, which is more than one person, so the word ends in -selves. Yourself is for one person, and themselves is for people being talked about."
          },
          {
            id: "SK-GUM3-6-C15",
            type: "mc",
            points: 1,
            dok: 2,
            std: ["3.L.GC.1:M:use-reflexive-pronouns"],
            passages: [],
            prompt: "Which sentence uses the -self word correctly?",
            choices: [
              { text: "My brother and I surprised ourselves with a win.", correct: true },
              { text: "My brother and I surprised ourself with a win." },
              { text: "My brother and I surprised myself with a win." },
              { text: "My brother and I surprised yourselves with a win." }
            ],
            clue: "Find who did the action. Then find the -self word that points back to all of them.",
            hints: [
              "Find who did the action. Then find the -self word that points back to all of them.",
              "My brother and I is more than one person. Check the ending of each -self word.",
              "Yourselves points back to you, and nobody is being talked to. Check the other three."
            ],
            how: [
              "My brother and I did the surprising, so the pronoun must point back to both of them.",
              "That is more than one person, including the writer, so the word is ourselves.",
              "The answer is \"My brother and I surprised ourselves with a win.\" Ourself has the wrong ending, myself is for one person, and yourselves points back to you."
            ],
            misconception: "A common mix-up is picking myself because I is in the sentence. When someone else is with me, use ourselves.",
            why: "The answer is \"My brother and I surprised ourselves with a win.\" The brother and I are more than one person, so ourselves fits. Ourself has the wrong ending, myself is for one person, and yourselves points back to you."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM3-6-S01",
      type: "hottext",
      points: 1,
      dok: 2,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Kenji taught himself to juggle.",
        "The kitten washed itself in the sun.",
        "We gave ourself a short rest.",
        "The twins gave themselves a high five."
      ],
      answer: [2],
      pick: 1,
      clue: "Look at each -self or -selves word. Is it a real word, and does it match who it points back to?",
      hints: [
        "Look at each -self or -selves word. Is it a real word, and does it match who it points back to?",
        "Find who each -self word points back to. Then count how many that is and check the ending.",
        "Himself is the right word for Kenji. Check the other three sentences."
      ],
      how: [
        "Find each -self or -selves word and who it points back to.",
        "Himself points back to Kenji, itself points back to the kitten, and themselves points back to the twins.",
        "We means more than one, so ourself has the wrong ending. It should be ourselves."
      ],
      misconception: "A common mix-up is using ourself because it sounds like myself. We means more than one, so the word ends in -selves.",
      why: "The error is in \"We gave ourself a short rest.\" We is more than one person, so the word should be ourselves. The other sentences use himself, itself and themselves correctly.",
      like: ["SK-GUM3-6-P4"]
    },
    {
      id: "SK-GUM3-6-S02",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: [],
      prompt: "Which words make the sentence correct?",
      text: "Kara bought {0} a new notebook, and her parents treated {1} to lunch.",
      slots: [
        {
          options: ["herself", "yourself", "itself"],
          answer: 0
        },
        {
          options: ["themselves", "theirself", "ourselves"],
          answer: 0
        }
      ],
      clue: "The first blank points back to Kara. The second blank points back to her parents. Count how many people each one is.",
      hints: [
        "The first blank points back to Kara. The second blank points back to her parents. Count how many people each one is.",
        "Find who did the action in each part. Then pick the word that points back to that same person or group.",
        "Theirself has the wrong ending. Decide the rest."
      ],
      how: [
        "Kara is one girl, so the first blank needs the word for one girl.",
        "Her parents are more than one person, so the second blank needs a word that ends in -selves.",
        "The answers are herself and themselves. Yourself points back to you, itself is for a thing, theirself has the wrong ending, and ourselves points back to we."
      ],
      misconception: "A common mix-up is picking theirself because it sounds like herself. More than one person needs the ending -selves.",
      why: "The answers are herself and themselves. Kara is one girl, so herself fits. Her parents are more than one person, so themselves fits. Theirself has the wrong ending.",
      like: ["SK-GUM3-6-P5"]
    },
    {
      id: "SK-GUM3-6-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: ["p4"],
      prompt: "The second sentence of the draft uses the wrong pronoun. Which word belongs in the blank?",
      text: "Theo and {0} dug a deep moat around it.",
      slots: [
        {
          options: ["myself", "I", "me"],
          answer: 1
        }
      ],
      clue: "Look at who did the digging. A -self word points back to someone, so ask whether it is needed here.",
      hints: [
        "Look at who did the digging. A -self word points back to someone, so ask whether it is needed here.",
        "Read the sentence and leave out the words Theo and. Then say the sentence with each choice.",
        "Me is used for the person something happens to, not for the person who acts. Decide between the other two."
      ],
      how: [
        "Theo and the writer did the digging together, so the blank is part of the subject.",
        "Leave out Theo and: \"___ dug a deep moat.\" You would say I, not me and not myself.",
        "The answer is I. Myself needs an I earlier in the sentence to point back to, and me does not name who acts."
      ],
      misconception: "A common mix-up is thinking myself sounds more polite than I. Use myself only when I already did the action to myself.",
      why: "The answer is I. The writer and Theo did the digging, so the subject needs I. Myself points back to an I that is already in the sentence, and me is not used as the one who acts.",
      like: ["SK-GUM3-6-C03"]
    },
    {
      id: "SK-GUM3-6-S04",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: ["p4"],
      prompt: "Which revision fixes the incorrect word in the fifth sentence of the draft?",
      choices: [
        { text: "Theo splashed hisself with cold water, so we laughed." },
        { text: "Theo splashed herself with cold water, so we laughed." },
        { text: "Theo splashed itself with cold water, so we laughed." },
        { text: "Theo splashed himself with cold water, so we laughed.", correct: true }
      ],
      clue: "Find who got splashed. Then find the -self word that points back to that person.",
      hints: [
        "Find who got splashed. Then find the -self word that points back to that person.",
        "Check each -self word. Ask whether it is a real word and whether it matches Theo.",
        "Itself is for a thing, and Theo is a boy. Check the other three."
      ],
      how: [
        "Theo is one boy, so the word must be the -self word for one boy.",
        "The word hisself is not a correct word. The correct word for one boy is himself.",
        "The answer is \"Theo splashed himself with cold water, so we laughed.\" Herself is for a girl, and itself is for a thing."
      ],
      misconception: "A common mix-up is saying hisself, because it sounds like his. The correct word is himself.",
      why: "The answer is \"Theo splashed himself with cold water, so we laughed.\" Theo is one boy, so the pronoun is himself. Hisself is not a correct word, herself is for a girl, and itself is for a thing.",
      like: ["SK-GUM3-6-C04"]
    },
    {
      id: "SK-GUM3-6-S05",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: ["p4"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "Look at the seventh sentence of the draft. Which choice writes its -self word correctly?",
        choices: [
          { text: "The older kids next to us built a castle by themselves.", correct: true },
          { text: "The older kids next to us built a castle by theirselves." },
          { text: "The older kids next to us built a castle by themself." },
          { text: "The older kids next to us built a castle by himself." }
        ]
      },
      partB: {
        prompt: "Which reason explains the answer to Part A?",
        choices: [
          { text: "Only one kid built the castle, so the word has to be himself." },
          { text: "Every sentence with the word by needs the word myself after it." },
          { text: "Theirselves is not a real word, so a group of kids needs themselves.", correct: true },
          { text: "The sentence tells about Theo, so the word has to be himself." }
        ]
      },
      clue: "Find who the pronoun points back to. Then decide whether that is one person or more than one.",
      hints: [
        "Find who the pronoun points back to. Then decide whether that is one person or more than one.",
        "For Part A, read sentence 7 and check who built the castle. For Part B, think about what the word kids tells you.",
        "In Part A, himself would point back to only one boy. Check the other choices."
      ],
      how: [
        "Part A: sentence 7 is about the older kids, so the pronoun must point back to them.",
        "Kids is more than one, so the word must end in -selves. The word theirselves is not a correct word.",
        "Part A answer: \"The older kids next to us built a castle by themselves.\" Themself has the wrong ending, and himself is for one boy.",
        "Part B answer: \"Theirselves is not a real word, so a group of kids needs themselves.\""
      ],
      misconception: "A common mix-up is using theirselves because it sounds like their. The correct word is themselves.",
      why: "Part A: \"The older kids next to us built a castle by themselves.\" Part B: \"Theirselves is not a real word, so a group of kids needs themselves.\" Themself has the wrong ending, and himself is for one boy. The sentence is about the older kids, not Theo.",
      like: ["SK-GUM3-6-C05"]
    },
    {
      id: "SK-GUM3-6-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: ["p5"],
      prompt: "Two sentences in the draft have a mistake with a -self or -selves word. Select them.",
      targets: ["p5:1:3", "p5:2:1", "p5:2:2", "p5:2:3", "p5:3:1"],
      answer: ["p5:2:2", "p5:3:1"],
      pick: 2,
      clue: "Look at each -self or -selves word. Ask whether it is a real word and whether it matches who it points back to.",
      hints: [
        "Look at each -self or -selves word. Ask whether it is a real word and whether it matches who it points back to.",
        "Read the five sentences. For each one, find who the -self word points back to, and count how many that is.",
        "In sentence 3, himself points back to Gus, and it is correct. Check the other four sentences."
      ],
      how: [
        "Find each -self or -selves word and who it points back to.",
        "Sentence 3: himself points back to Gus, so it is correct. Sentences 4 and 6: myself points back to I, so both are correct.",
        "Sentence 5: theirselves is not a correct word. Sentence 7: the quilt is one thing, so it should be itself."
      ],
      misconception: "A common mix-up is thinking every -selves word is wrong when it follows an object. Check whether the word matches one thing or more than one.",
      why: "The errors are in \"The members of the club gave theirselves a loud cheer.\" and \"The big quilt caught on a chair and ripped themselves.\" Theirselves is not a correct word, and the quilt is one thing, so it needs itself. Himself and myself are used correctly in the other sentences.",
      like: ["SK-GUM3-6-C06"]
    },
    {
      id: "SK-GUM3-6-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: [],
      prompt: "Which TWO sentences use -self or -selves words correctly?",
      pick: 2,
      choices: [
        { text: "My aunt fixed the car by himself." },
        { text: "Jon bought hisself a new hat." },
        { text: "Tess surprised herself with a high score.", correct: true },
        { text: "The puppies shook itself dry." },
        { text: "The twins did the dishes by themselves.", correct: true }
      ],
      clue: "Find the -self or -selves word in each sentence. Ask whether it is a real word and whether it matches who it points back to.",
      hints: [
        "Find the -self or -selves word in each sentence. Ask whether it is a real word and whether it matches who it points back to.",
        "Say who each word points back to, and count how many that is. Then check the ending of the word.",
        "Hisself is not a correct word. Decide about the other four."
      ],
      how: [
        "Find the -self or -selves word in each sentence and who it points back to.",
        "Tess is one girl, so herself is right. The twins are more than one, so themselves is right.",
        "The others are wrong: it should be herself, themselves and himself."
      ],
      misconception: "A common mix-up is picking a word that sounds right but does not match, like himself for an aunt.",
      why: "The answers are \"Tess surprised herself with a high score.\" and \"The twins did the dishes by themselves.\" Tess is one girl and the twins are more than one, so herself and themselves fit. The others should say herself, themselves and himself.",
      like: ["SK-GUM3-6-C07"]
    },
    {
      id: "SK-GUM3-6-S08",
      type: "match",
      points: 2,
      dok: 2,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: [],
      prompt: "Which word completes each sentence?",
      cols: ["myself", "yourself", "itself", "themselves"],
      rows: [
        { text: "The players stretched ___ before the game.", answer: 3 },
        { text: "Dana, please give ___ more time.", answer: 1 },
        { text: "I told ___ to be brave.", answer: 0 },
        { text: "The calculator turned ___ off.", answer: 2 }
      ],
      clue: "Find who did the action in each sentence. Then pick the word that points back to that same person or thing.",
      hints: [
        "Find who did the action in each sentence. Then pick the word that points back to that same person or thing.",
        "Start with the sentence you are surest about. Think about who is talking and who is being talked to.",
        "A calculator is one thing, so its sentence goes with itself. Decide the other rows."
      ],
      how: [
        "Find who did the action in each sentence and who the pronoun points back to.",
        "I told ___ points back to I, so it is myself. Dana, please give ___ points to Dana, who is being talked to, so it is yourself.",
        "The players are more than one, so it is themselves. The calculator is one thing, so it is itself."
      ],
      misconception: "A common mix-up is using yourself when the talker is the one who acted. Use myself when I did the action to I.",
      why: "The calculator is one thing, so itself. I told ___ points back to I, so myself. Please give ___ more time, Dana is talking to Dana, so yourself. The players are more than one, so themselves.",
      like: ["SK-GUM3-6-C08"]
    },
    {
      id: "SK-GUM3-6-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: [],
      prompt: "Which sentence means that Omar saw his own face in the pond?",
      choices: [
        { text: "Omar saw him in the pond." },
        { text: "Omar saw his friend in the pond." },
        { text: "Omar saw himself in the pond.", correct: true },
        { text: "Omar saw he in the pond." }
      ],
      clue: "Think about who the pronoun must point to. It has to be the same boy who did the seeing.",
      hints: [
        "Think about who the pronoun must point to. It has to be the same boy who did the seeing.",
        "Say each sentence and ask who the last pronoun means. Only one of them must mean Omar.",
        "He cannot follow the word saw in a sentence like this one. Check the other three."
      ],
      how: [
        "The sentence must tell that Omar saw Omar, so the pronoun must point back to him.",
        "Him would mean some other boy. His friend is another person, and he is the wrong form for this spot.",
        "The answer is \"Omar saw himself in the pond.\" Himself points back to Omar."
      ],
      misconception: "A common mix-up is thinking him can point back to the subject. Him means a different boy, so use himself.",
      why: "The answer is \"Omar saw himself in the pond.\" Himself points back to Omar, so Omar saw his own face. Him would mean some other boy, his friend is another person, and he is not used after saw.",
      like: ["SK-GUM3-6-C09"]
    },
    {
      id: "SK-GUM3-6-S10",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: [],
      prompt: "Which words make the sentence correct?",
      text: "The skaters cheered {0} on, and the puppy rolled {1} in the grass.",
      slots: [
        {
          options: ["themselves", "theirselves", "herself"],
          answer: 0
        },
        {
          options: ["itself", "hisself", "themselves"],
          answer: 0
        }
      ],
      clue: "Find who did the action in each part. Then pick the word that points back to the same person or group.",
      hints: [
        "Find who did the action in each part. Then pick the word that points back to the same person or group.",
        "Count how many are in each part. Then check that each word you pick is a real word.",
        "Theirselves is not a correct word. Decide the rest."
      ],
      how: [
        "The first blank points back to the skaters, who are more than one person.",
        "The second blank points back to the puppy, which is one animal.",
        "The answers are themselves and itself. Theirselves and hisself are not correct words, and herself is for one girl."
      ],
      misconception: "A common mix-up is using theirselves or hisself. Both sound right, but neither one is a correct word.",
      why: "The answers are themselves and itself. The skaters are more than one, so themselves fits. The puppy is one animal, so itself fits. Theirselves and hisself are not correct words.",
      like: ["SK-GUM3-6-C10"]
    },
    {
      id: "SK-GUM3-6-S11",
      type: "hottext",
      points: 2,
      dok: 2,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: ["p6"],
      prompt: "Select the TWO sentences in which myself or himself does not fit.",
      targets: ["p6:2:2", "p6:2:3", "p6:3:1", "p6:3:2", "p6:3:3"],
      answer: ["p6:3:1", "p6:3:3"],
      pick: 2,
      clue: "Check each -self word. Does it point back to the person who did the action, and is it the right word for that person?",
      hints: [
        "Check each -self word. Does it point back to the person who did the action, and is it the right word for that person?",
        "Read each sentence and find who did the action. Then look at the -self word and ask whether it matches.",
        "In sentence 5, himself points back to Mr. Singh, and it is correct. Check the other four sentences."
      ],
      how: [
        "Find who did the action in each sentence and what the -self word points back to.",
        "Sentences 5, 6 and 8 use himself, ourselves and myself. Each one points back to the right person.",
        "Sentence 7 uses myself in a place where I belongs. Sentence 9 uses himself for Tessa, but she is a girl, so it should be herself."
      ],
      misconception: "A common mix-up is using myself when I am doing the action with someone else. Say the sentence without the other person to check.",
      why: "The errors are in \"Grandma and myself picked up my first bowl on Friday.\" and \"My friend Tessa admired himself in the shiny glaze.\" The first should say Grandma and I, and the second should say herself because Tessa is a girl. The -self words in sentences 5, 6 and 8 are correct.",
      like: ["SK-GUM3-6-C11"]
    },
    {
      id: "SK-GUM3-6-S12",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: [],
      prompt: "Which sentence shows that Lila made dinner without any help?",
      choices: [
        { text: "Lila made dinner for the family with her aunt." },
        { text: "Lila made dinner for the family by herself.", correct: true },
        { text: "Lila made dinner for the family with help from her dad." },
        { text: "Lila and her cousin made dinner for the family." }
      ],
      clue: "Alone means with no one else helping. Look for the choice that shows that.",
      hints: [
        "Alone means with no one else helping. Look for the choice that shows that.",
        "Read each choice and ask who did the work. Only one choice has just Lila doing it.",
        "Lila and her cousin means two people worked. Check the other three."
      ],
      how: [
        "Alone means nobody else helped.",
        "By herself tells that Lila did the whole job by only herself.",
        "The answer is \"Lila made dinner for the family by herself.\" The other choices name an aunt, a dad or a cousin."
      ],
      misconception: "A common mix-up is thinking by herself means near herself. By herself means alone.",
      why: "The answer is \"Lila made dinner for the family by herself.\" By herself means alone, with no help. The other choices tell about her aunt, her dad, or her cousin.",
      like: ["SK-GUM3-6-C12"]
    },
    {
      id: "SK-GUM3-6-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: [],
      prompt: "Kim says, \"The word myself is just a fancy way to say me.\" Choose the TWO sentences where myself takes the place of I or me.",
      pick: 2,
      choices: [
        { text: "The coach told Ana and myself to line up.", correct: true },
        { text: "I surprised myself at the race." },
        { text: "Aunt Rosa gave Tom and myself a ride.", correct: true },
        { text: "I did all of it by myself." },
        { text: "I made myself some toast." }
      ],
      clue: "Find each myself. In which sentences does it stand in for a person, instead of pointing back to the one who acts?",
      hints: [
        "Find each myself. In which sentences does it stand in for a person, instead of pointing back to the one who acts?",
        "Read each sentence. Ask whether myself points back to an I that is already in the sentence.",
        "In I made myself some toast, myself points back to I. Decide about the other four."
      ],
      how: [
        "Look at where myself appears in each sentence.",
        "In the three sentences that start with I, myself points back to I, so it is correct.",
        "In the other two sentences, there is no I for myself to point back to. They should say Tom and me, and Ana and me."
      ],
      misconception: "A common mix-up is thinking myself is the fancy word for me. It only points back to an I that is already in the sentence.",
      why: "The answers are \"Aunt Rosa gave Tom and myself a ride.\" and \"The coach told Ana and myself to line up.\" Neither sentence has an I for myself to point back to. They should say Tom and me, and Ana and me. In the other three sentences, myself points back to I.",
      like: ["SK-GUM3-6-C13"]
    },
    {
      id: "SK-GUM3-6-S14",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: [],
      prompt: "Which word completes the sentence?",
      text: "Slow down, you two. You might trip {0} on the loose rug.",
      slots: [
        {
          options: ["yourself", "yourselves", "ourselves"],
          answer: 1
        }
      ],
      clue: "Find who is being talked to. Count how many people that is.",
      hints: [
        "Find who is being talked to. Count how many people that is.",
        "Read the sentence and look at the words you two. Then pick the word that points back to that same pair.",
        "Ourselves includes the speaker, and the speaker is not on the rug. Decide between the other two."
      ],
      how: [
        "The speaker is talking to you two, which is more than one person.",
        "The word that points back to you for more than one person is yourselves.",
        "The answer is yourselves. Yourself is for one person, and ourselves includes the speaker."
      ],
      misconception: "A common mix-up is choosing yourself when talking to two people. For more than one person, use yourselves.",
      why: "The answer is yourselves. The speaker is talking to you two, which is more than one person, so the word ends in -selves. Yourself is for one person, and ourselves includes the speaker.",
      like: ["SK-GUM3-6-C14"]
    },
    {
      id: "SK-GUM3-6-S15",
      type: "mc",
      points: 1,
      dok: 2,
      std: ["3.L.GC.1:M:use-reflexive-pronouns"],
      passages: [],
      prompt: "Choose the sentence that has the right -self word.",
      choices: [
        { text: "Ben and I made ourself a snack." },
        { text: "Ben and I made myself a snack." },
        { text: "Ben and I made themselves a snack." },
        { text: "Ben and I made ourselves a snack.", correct: true }
      ],
      clue: "Find who did the action. Then find the -self word that points back to all of them.",
      hints: [
        "Find who did the action. Then find the -self word that points back to all of them.",
        "Ben and I is more than one person. Check the ending of each -self word.",
        "Themselves points back to other people, and the sentence is not about other people. Check the other three."
      ],
      how: [
        "Ben and I did the making, so the pronoun must point back to both of them.",
        "That is more than one person, including the writer, so the word is ourselves.",
        "The answer is \"Ben and I made ourselves a snack.\" Ourself has the wrong ending, myself is for one person, and themselves points back to other people."
      ],
      misconception: "A common mix-up is picking myself because I is in the sentence. When someone else is with me, use ourselves.",
      why: "The answer is \"Ben and I made ourselves a snack.\" Ben and I are more than one person, so ourselves fits. Ourself has the wrong ending, myself is for one person, and themselves points back to other people.",
      like: ["SK-GUM3-6-C15"]
    }
  ],
  addons: {
    "SK-GUM3-6-P1": {
      hints: [
        "The pronoun points back to the gate. Is a gate a person or a thing, and is it one or more than one?",
        "Say each choice in the blank. Ask which one matches a single thing.",
        "Themselves is for more than one. Decide between the other two."
      ],
      how: [
        "The pronoun points back to the gate.",
        "A gate is one thing, not a person.",
        "The answer is itself. Herself is for a girl, and themselves is for more than one."
      ],
      misconception: "A common mix-up is using herself or himself for a thing. Use itself for one thing."
    },
    "SK-GUM3-6-P2": {
      hints: [
        "Find who each pronoun points back to. Is it one person or more than one? Is the word a real -self or -selves word?",
        "Check each -self or -selves word in the four sentences, one at a time.",
        "Hisself is not a correct word. Check the other three sentences."
      ],
      how: [
        "Find who each pronoun points back to and count how many.",
        "The girls are more than one, so \"The girls painted themselves a sign.\" is correct.",
        "The others should say himself, ourselves and herself."
      ],
      misconception: "A common mix-up is picking a word that sounds right, like hisself. Check that the word is real and matches."
    },
    "SK-GUM3-6-P3": {
      hints: [
        "Ask: One person or more? If it is more than one, does it include me?",
        "Start with the subject you are surest about. Then decide the rest one at a time.",
        "My uncle is one man. Decide the other rows."
      ],
      how: [
        "Count how many people each subject names.",
        "My uncle is one man, and Grandma is one woman.",
        "The players are more than one, and my friends and I includes me."
      ],
      misconception: "A common mix-up is picking themselves when I am part of the group. If I am included, use ourselves."
    },
    "SK-GUM3-6-P4": {
      hints: [
        "Look at each -self or -selves word. Is it a real word, and does it match who it points back to?",
        "Check each sentence one at a time. Find who the -self word points back to.",
        "In I taught myself, myself points back to I and is correct. Check the other three."
      ],
      how: [
        "Check each -self word and who it points back to.",
        "Myself, itself and yourself all match the words they point back to.",
        "Theirselves is not a correct word. It should be themselves."
      ],
      misconception: "A common mix-up is using theirselves. It sounds right, but the correct word is themselves."
    },
    "SK-GUM3-6-P5": {
      hints: [
        "The first blank points back to Nia. The second blank points back to her parents. Count how many people each one is.",
        "Find who did the action in each part. Then pick the word that points back to that same person or group.",
        "Himself is for a boy, and Nia is a girl. Decide the rest."
      ],
      how: [
        "Nia is one girl, so the first blank needs the word for one girl.",
        "Her parents are more than one person, so the second blank needs a word that ends in -selves.",
        "The answers are herself and themselves. Theirselves is not a correct word."
      ],
      misconception: "A common mix-up is picking theirselves because it sounds right. The correct word is themselves."
    }
  },
  /* B6:core:end */
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
      clue: "Who gave the cheer? Count how many, and check that the word you pick is a real word.",
      why: "The answer is themselves. The players are more than one, so the word ends in -selves. Theirselves is not a correct word." },
    { id: "SK-GUM3-6-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO sentences that use pronouns correctly.",
      choices: [
        { text: "I washed all of the dishes by myself.", correct: true },
        { text: "The kids poured themselves some cold milk.", correct: true },
        { text: "Dad and myself went fishing at the lake." },
        { text: "Theo made hisself a cheese sandwich." },
        { text: "We packed ourself a picnic lunch." }
      ],
      clue: "Check that each -self or -selves word is real and points back to someone who is the subject. Remember: myself never takes the place of I.",
      why: "The answers are \"I washed all of the dishes by myself.\" and \"The kids poured themselves some cold milk.\" Myself points back to I. The kids poured the milk for the kids, so themselves points back to the kids. The others should say \"Dad and I,\" himself and ourselves." },
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
    },
    {
      show: ["The dog barked, the mail carrier left."],
      ask: "A comma alone is joining these two sentences. How do you fix it?",
      steps: [
        "Cover the comma and read each side. \"The dog barked\" and \"the mail carrier left\" are both complete sentences.",
        "A comma alone cannot join two sentences. Add a joining word that shows how they connect.",
        "The barking made the carrier leave, so use so, and keep the comma right before it."
      ],
      answer: "The dog barked, so the mail carrier left."
    }
  ],
  parent: "Write two short sentences about your day on a sticky note, like \"We went to the store. We bought apples.\" Ask your child to join them with and, but or so and add the comma in the right spot.",
  passages: [
    /* B6:passages:start */
    {
      id: "p1",
      title: "Mini Golf with Dad",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Sunday, Dad took me to play mini golf.",
          "(2) The course had a windmill and a tiny castle.",
          "(3) I wanted to hit a hole in one, but my ball rolled into the water."
        ],
        [
          "(4) Dad laughed and gave me a new ball.",
          "(5) I tried again, I missed the windmill by an inch.",
          "(6) The next hole was easy so I finished in two strokes."
        ],
        [
          "(7) Dad can pick the next course, or I can pick it.",
          "(8) We shook hands and, we went for ice cream."
        ],
        [
          "(9) It was the best Sunday of the summer.",
          "(10) I hope we can go back again soon."
        ]
      ]
    },
    {
      id: "p2",
      title: "Our Clubhouse",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) My friends and I built a clubhouse behind the garage.",
          "(2) We used old boards and a blue tarp.",
          "(3) Mia hammered the nails, and Jo held the boards."
        ],
        [
          "(4) The roof leaked at first so we added another tarp.",
          "(5) Jo wanted a door, but we had no hinges.",
          "(6) Mia cut the tarp and taped it to the roof."
        ],
        [
          "(7) We could paint the walls, or we could hang a sign.",
          "(8) Everyone voted, the sign won.",
          "(9) Mia grabbed the broom and Jo grabbed the dustpan so we cleaned up quickly."
        ],
        [
          "(10) Now we have a place to hide on rainy days."
        ]
      ]
    },
    {
      id: "p3",
      title: "The Climbing Wall",
      byline: "A third grader's draft",
      genre: "Student draft (report)",
      draft: true,
      paragraphs: [
        [
          "(1) Our school gym has a new climbing wall.",
          "(2) The wall is tall, but it has soft mats at the bottom.",
          "(3) Mr. Cole checks every harness, and he makes sure the ropes are tight."
        ],
        [
          "(4) Nia climbed to the top, and rang the bell.",
          "(5) I wanted to climb too, so I put on a helmet.",
          "(6) My hands shook but, I held on tight."
        ],
        [
          "(7) Now everyone wants a turn.",
          "(8) The line is long, but nobody minds waiting.",
          "(9) Mr. Cole says we can all try next week.",
          "(10) I cannot wait to reach the top."
        ]
      ]
    },
    {
      id: "p4",
      title: "Zipline Day",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Friday, our camp had zipline day.",
          "(2) The zipline ran over a pond and through tall pine trees.",
          "(3) I felt nervous, but my counselor showed me the safety rules."
        ],
        [
          "(4) She clipped my harness and checked it twice.",
          "(5) I took a deep breath, I stepped off the platform.",
          "(6) The ride was fast so I laughed the whole way down."
        ],
        [
          "(7) Next time, I can ride in the morning, or I can ride after lunch.",
          "(8) I waved goodbye and, I ran to tell my friends."
        ],
        ["(9) It was the best day of camp.", "(10) I want to go again next summer."]
      ]
    },
    {
      id: "p5",
      title: "Hayride Night",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Saturday, our town held a hayride night at the Miller farm.",
          "(2) We rode in a wagon pulled by two horses.",
          "(3) Dad held the blanket, and I held the cocoa."
        ],
        [
          "(4) The wagon bumped over the hill so we held on tight.",
          "(5) Mia wanted to sing, but the horses were too loud.",
          "(6) We passed a barn and waved to the farmer."
        ],
        [
          "(7) We could stop at the pond, or we could ride to the barn.",
          "(8) Dad paid the driver, we hopped off the wagon.",
          "(9) Dad hummed a song and I sang along so the ride felt short."
        ],
        ["(10) I hope we can go again next fall."]
      ]
    },
    {
      id: "p6",
      title: "Corn Maze Visit",
      byline: "A third grader's draft",
      genre: "Student draft (report)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class visited a corn maze on a cool October morning.",
          "(2) The corn was tall, but the paths were wide.",
          "(3) The guide hands out maps, and he tells us where the exits are."
        ],
        [
          "(4) Kofi grabbed a map, and led our group.",
          "(5) I wanted to turn left, so I pointed at the sign.",
          "(6) We walked in circles but, we finally found the exit."
        ],
        [
          "(7) Everyone cheered when we got out.",
          "(8) We were tired, but we were proud.",
          "(9) The guide said we can all come back next year.",
          "(10) I hope the corn will be shorter by then."
        ]
      ]
    }
    /* B6:passages:end */
  ],
  practice: [
    { id: "SK-GUM3-7-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence uses a comma correctly?",
      choices: [
        { text: "Jada wanted to bake cookies, but we had no eggs.", correct: true },
        { text: "Jada wanted to bake cookies but, we had no eggs." },
        { text: "Jada wanted, to bake cookies but we had no eggs." },
        { text: "Jada wanted to bake cookies but we had, no eggs." }
      ],
      clue: "Find the joining word. Where does the comma belong when it joins two complete sentences?",
      why: "The answer is \"Jada wanted to bake cookies, but we had no eggs.\" Both sides are complete sentences, so the comma goes right before but, never after it." },
    { id: "SK-GUM3-7-P2", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that needs a comma.",
      options: [
        "Grandpa grilled corn and baked a pie.",
        "The bus was late this morning so we missed the first bell.",
        "Rosa likes cats and dogs.",
        "We picked apples, and Dad made applesauce."
      ],
      answer: [1], pick: 1,
      clue: "Cover the joining word in each sentence. Look for one where both sides are complete sentences but there is no comma yet.",
      why: "The answer is \"The bus was late this morning so we missed the first bell.\" \"The bus was late this morning\" and \"we missed the first bell\" are both complete sentences, so it needs a comma before so." },
    { id: "SK-GUM3-7-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each sentence need a comma before the joining word? Match each to the right column.",
      cols: ["Needs a comma", "No comma"],
      rows: [
        { text: "Ava found a shell and she gave it to her mom.", answer: 0 },
        { text: "Ava found a shell and gave it to her mom.", answer: 1 },
        { text: "The big dog barked loudly but nobody came to the door.", answer: 0 },
        { text: "Leo wanted pizza but not salad.", answer: 1 }
      ],
      clue: "Cover the joining word. Is the part after it a whole sentence with its own naming part?",
      why: "\"Ava found a shell and she gave it to her mom\" and \"The big dog barked loudly but nobody came to the door\" each join two complete sentences, so they need a comma. \"Gave it to her mom\" and \"not salad\" are not sentences, so those two need no comma." },
    { id: "SK-GUM3-7-P4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO sentences that are punctuated correctly.",
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
      prompt: "Two short sentences are shown. Which choice joins them into one correct sentence?",
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
  /* B6:core:start */
  /* ---------- Expansion 2026-10-22, batch B6 (GUM Master) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test or testB.
     Author log: docs/expansion-2026-10-22/batches/B6-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          { ref: "SK-GUM3-7-P2" },
          { ref: "SK-GUM3-7-P4" },
          {
            id: "SK-GUM3-7-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: ["p1"],
            prompt: "Sentence 6 of the draft is missing a comma. Choose the words that fix it.",
            text: "The next hole was easy{0} I finished in two strokes.",
            slots: [
              {
                options: [", so", " so,", " so"],
                answer: 0
              }
            ],
            clue: "Find the joining word. Then decide whether both sides could stand alone as sentences.",
            hints: [
              "Find the joining word. Then decide whether both sides could stand alone as sentences.",
              "Read sentence 6 and cover the joining word. Say each side by itself.",
              "A comma right after the joining word is never correct here. Decide between the other two."
            ],
            how: [
              "The joining word is so. Cover it.",
              "\"The next hole was easy\" and \"I finished in two strokes\" are both complete sentences.",
              "Two complete sentences joined by so need a comma right before so. The answer is a comma, then so."
            ],
            misconception: "A common mix-up is putting the comma after the joining word. The comma goes before it.",
            why: "The answer is a comma and then so. Both sides are complete sentences, so the comma goes right before the joining word. A comma after so is in the wrong place, and no comma at all leaves the sentences joined with nothing to mark the break."
          },
          {
            id: "SK-GUM3-7-C04",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: ["p1"],
            prompt: "Sentence 5 of the draft joins two sentences with only a comma. Which revision fixes it?",
            choices: [
              { text: "I tried again but, I missed the windmill by an inch." },
              { text: "I tried again, but I missed the windmill by an inch.", correct: true },
              { text: "I tried again, I missed the windmill by an inch." },
              { text: "I tried again I missed, the windmill by an inch." }
            ],
            clue: "Two complete sentences need more than a comma to join them. Look for what is missing.",
            hints: [
              "Two complete sentences need more than a comma to join them. Look for what is missing.",
              "Read sentence 5 and check whether the two parts are joined by a joining word.",
              "The choice that keeps only a comma is the mistake in the draft. Check the other three."
            ],
            how: [
              "Both parts of sentence 5 are complete sentences, and a comma alone cannot join them.",
              "A joining word is needed, and the comma goes right before it.",
              "The answer is \"I tried again, but I missed the windmill by an inch.\" The comma comes before but, not after it."
            ],
            misconception: "A common mix-up is thinking a comma is enough to join two sentences. A comma needs a joining word with it.",
            why: "The answer is \"I tried again, but I missed the windmill by an inch.\" Both sides are complete sentences, so they need a joining word and a comma right before it. The other choices keep only a comma, put the comma after but, or put it in the middle of a part."
          },
          {
            id: "SK-GUM3-7-C05",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Sentence 8 of the draft has a comma in the wrong place. Which revision fixes it?",
              choices: [
                { text: "We shook hands and, we went for ice cream." },
                { text: "We shook, hands and we went for ice cream." },
                { text: "We shook hands, and we went for ice cream.", correct: true },
                { text: "We shook hands and we went for ice cream." }
              ]
            },
            partB: {
              prompt: "Which reason explains why the comma belongs where it does in Part A?",
              choices: [
                { text: "Both sides could stand alone as sentences, so the comma goes before and.", correct: true },
                { text: "A comma always goes after the word and." },
                { text: "The sentence is a question, so it needs a comma in the middle." },
                { text: "Only the first side could stand alone, so the comma goes after and." }
              ]
            },
            clue: "Find the joining word. Then check both sides of it.",
            hints: [
              "Find the joining word. Then check both sides of it.",
              "For Part A, read sentence 8 and cover the joining word. For Part B, think about what the two sides have to be before a comma is used.",
              "In Part A, a comma in the middle of a part splits the words that belong together. Check the other choices."
            ],
            how: [
              "Part A: the joining word in sentence 8 is and. Cover it.",
              "\"We shook hands\" and \"we went for ice cream\" are both complete sentences.",
              "Part A answer: \"We shook hands, and we went for ice cream.\" The comma goes right before and.",
              "Part B answer: \"Both sides could stand alone as sentences, so the comma goes before and.\""
            ],
            misconception: "A common mix-up is putting the comma after the joining word. The comma goes before it.",
            why: "Part A: \"We shook hands, and we went for ice cream.\" Part B: \"Both sides could stand alone as sentences, so the comma goes before and.\" A comma after and is in the wrong place, and no comma leaves the break unmarked. The sentence is not a question, and both sides, not only the first, are complete."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM3-7-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: ["p2"],
            prompt: "Look at sentences 3 through 8 of the draft. Select the TWO that have a comma problem.",
            targets: ["p2:1:3", "p2:2:1", "p2:2:2", "p2:2:3", "p2:3:2"],
            answer: ["p2:2:1", "p2:3:2"],
            pick: 2,
            clue: "Cover the joining word in each sentence. Check whether both sides are complete sentences, then check the comma.",
            hints: [
              "Cover the joining word in each sentence. Check whether both sides are complete sentences, then check the comma.",
              "Read each sentence and look at what comes before the joining word. Ask whether a comma is there when it should be.",
              "Sentence 3 has a comma in the right place. Check the other four sentences."
            ],
            how: [
              "Check each sentence: cover the joining word and see whether both sides are complete sentences.",
              "Sentence 3 and sentence 5 have the comma before the joining word, and sentence 6 joins two actions, so it needs no comma.",
              "Sentence 4 joins two complete sentences with so but has no comma. Sentence 8 joins two complete sentences with only a comma."
            ],
            misconception: "A common mix-up is thinking a comma alone is enough. A comma needs a joining word with it, and some sentences need no comma at all.",
            why: "The problems are in \"The roof leaked at first so we added another tarp.\" and \"Everyone voted, the sign won.\" The first needs a comma before so, and the second needs a joining word after the comma. Sentences 3, 5 and 6 are punctuated correctly."
          },
          {
            id: "SK-GUM3-7-C07",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: [],
            prompt: "Which sentence is punctuated correctly?",
            choices: [
              { text: "Dev picked up the pencil and handed it to Ms. Kane.", correct: true },
              { text: "Dev picked up the pencil, and handed it to Ms. Kane." },
              { text: "Dev picked up the pencil and, handed it to Ms. Kane." },
              { text: "Dev picked up, the pencil and handed it to Ms. Kane." }
            ],
            clue: "Cover the joining word. Check whether the part after it could stand alone as a sentence.",
            hints: [
              "Cover the joining word. Check whether the part after it could stand alone as a sentence.",
              "Look at the words after and. Ask whether they have their own naming part.",
              "A comma after and is never correct here. Check the other three."
            ],
            how: [
              "Cover and. The part after it, handed it to Ms. Kane, has no naming part, so it is not a complete sentence.",
              "Only one side is complete, so no comma belongs before and.",
              "The answer is \"Dev picked up the pencil and handed it to Ms. Kane.\" The other choices add a comma where none belongs."
            ],
            misconception: "A common mix-up is putting a comma before every and. A comma is only needed when both sides could stand alone.",
            why: "The answer is \"Dev picked up the pencil and handed it to Ms. Kane.\" Handed it to Ms. Kane cannot stand alone, so the sentence needs no comma. The other choices put a comma where none belongs."
          },
          {
            id: "SK-GUM3-7-C08",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: [],
            prompt: "Match each sentence to the way to fix its comma problem.",
            cols: [
              "Add a comma before the joining word",
              "Take out the extra comma",
              "Move the comma before the joining word",
              "Add a joining word after the comma"
            ],
            rows: [
              { text: "Lena fed the cat, and washed the bowl.", answer: 1 },
              { text: "We missed the bus, we walked to school.", answer: 3 },
              { text: "Amir lost his favorite red hat and Lena found it under the bench.", answer: 0 },
              { text: "The lake was cold but, we swam anyway.", answer: 2 }
            ],
            clue: "Read each sentence and check where the comma is, whether there is a joining word, and whether both sides are complete sentences.",
            hints: [
              "Read each sentence and check where the comma is, whether there is a joining word, and whether both sides are complete sentences.",
              "Start with the sentence you are surest about. Decide the rest one at a time.",
              "The sentence about the bus has a comma but no joining word. Decide the other rows."
            ],
            how: [
              "Check each sentence for a comma, a joining word, and two complete sentences.",
              "\"Amir lost his favorite red hat and Lena found it under the bench\" has two complete sentences and no comma, so add one before and. \"The lake was cold but, we swam anyway\" has the comma after but, so move it.",
              "\"Lena fed the cat, and washed the bowl\" has a comma before an action that cannot stand alone, so take it out. \"We missed the bus, we walked to school\" needs a joining word."
            ],
            misconception: "A common mix-up is adding a comma to every sentence. Some sentences need the comma taken out.",
            why: "The bus sentence needs a joining word after the comma. Lena fed the cat, and washed the bowl needs the extra comma taken out. Amir lost his favorite red hat and Lena found it under the bench needs a comma before and. The lake sentence needs the comma moved before but."
          },
          {
            id: "SK-GUM3-7-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: [],
            prompt: "Two students fixed the sentence. Which statement is true?",
            stem: [
              "The oven beeped, the cookies were done.",
              "Jo changed it to: The oven beeped, and the cookies were done.",
              "Max changed it to: The oven beeped and, the cookies were done."
            ],
            choices: [
              { text: "Only Max's sentence is correct." },
              { text: "Both sentences are correct." },
              { text: "Neither sentence is correct." },
              { text: "Only Jo's sentence is correct.", correct: true }
            ],
            clue: "Check each fix on its own. Look at the joining word and where the comma sits.",
            hints: [
              "Check each fix on its own. Look at the joining word and where the comma sits.",
              "Cover the joining word in each new sentence and check both sides. Then see where the comma is.",
              "Look at Max's sentence. The comma sits after the word and."
            ],
            how: [
              "The original sentence joins two complete sentences with only a comma, so it needs a joining word.",
              "Jo added and and put the comma right before it, which is correct. Max put the comma after and, which is not correct.",
              "The answer is \"Only Jo's sentence is correct.\""
            ],
            misconception: "A common mix-up is thinking any fix that adds a joining word is right. The comma must be before the joining word.",
            why: "The answer is \"Only Jo's sentence is correct.\" Jo added and with the comma right before it. Max put the comma after and, so his sentence is still wrong."
          },
          {
            id: "SK-GUM3-7-C10",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: ["p2"],
            prompt: "Sentence 9 of the draft is missing two commas. Choose the words that fix it.",
            text: "Mia grabbed the broom{0} Jo grabbed the dustpan{1} we cleaned up quickly.",
            slots: [
              {
                options: [", and", " and,", " and"],
                answer: 0
              },
              {
                options: [", so", " so,", " so"],
                answer: 0
              }
            ],
            clue: "Find the two joining words. Then check whether each one has two complete sentences on its sides.",
            hints: [
              "Find the two joining words. Then check whether each one has two complete sentences on its sides.",
              "Read sentence 9 in three parts. Say each part by itself and decide which parts could stand alone.",
              "A comma right after a joining word is never correct here. Decide the rest."
            ],
            how: [
              "The joining words are and and so. There are three parts, and each part has its own naming part and doing part.",
              "Each joining word connects two complete sentences, so each needs a comma right before it.",
              "The answers are a comma then and, and a comma then so."
            ],
            misconception: "A common mix-up is fixing only one of the two joining words. Check each one.",
            why: "The answers are a comma then and, and a comma then so. Mia grabbed the broom, Jo grabbed the dustpan, and we cleaned up quickly are all complete sentences, so each joining word needs a comma right before it."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM3-7-C11",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: ["p3"],
            prompt: "Select the TWO sentences in which the comma should not be where it is.",
            targets: ["p3:1:2", "p3:1:3", "p3:2:1", "p3:2:2", "p3:2:3"],
            answer: ["p3:2:1", "p3:2:3"],
            pick: 2,
            clue: "Cover the joining word in each sentence. Check both sides, and check where each comma sits.",
            hints: [
              "Cover the joining word in each sentence. Check both sides, and check where each comma sits.",
              "Read each sentence and find its comma. Ask whether the comma should be there, and whether it is right before the joining word.",
              "Sentence 5 has its comma right before so, and both sides are complete sentences. Check the other four sentences."
            ],
            how: [
              "Check each sentence: find the comma, then cover the joining word.",
              "Sentences 2, 3 and 5 have the comma right before the joining word, with two complete sentences.",
              "Sentence 4: rang the bell cannot stand alone, so the comma should come out. Sentence 6: the comma comes after but, so it is in the wrong place."
            ],
            misconception: "A common mix-up is thinking every comma near a joining word is right. The comma must come before the joining word, and only when both sides can stand alone.",
            why: "The problems are in \"Nia climbed to the top, and rang the bell.\" and \"My hands shook but, I held on tight.\" The first has a comma before something that cannot stand alone. The second has the comma after but instead of before it. Sentences 2, 3 and 5 are punctuated correctly."
          },
          {
            id: "SK-GUM3-7-C12",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: [],
            prompt: "Where does a comma belong in this sentence?",
            stem: "We looked everywhere for the key but we could not find it.",
            choices: [
              { text: "after the word looked" },
              { text: "after the word key", correct: true },
              { text: "after the word but" },
              { text: "after the word everywhere" }
            ],
            clue: "Find the joining word. A comma goes right before it when both sides can stand alone.",
            hints: [
              "Find the joining word. A comma goes right before it when both sides can stand alone.",
              "Read the sentence and cover the joining word. Say each side by itself.",
              "A comma goes before the joining word, not after it. Check the other three."
            ],
            how: [
              "The joining word is but. Cover it.",
              "\"We looked everywhere for the key\" and \"we could not find it\" are both complete sentences.",
              "The comma goes right before but, which is after the word key."
            ],
            misconception: "A common mix-up is putting the comma after the joining word. The comma goes before it.",
            why: "The answer is after the word key. Both sides are complete sentences, so the comma goes right before but, after the word key. A comma after but is in the wrong place, and the other spots split words that belong together."
          },
          {
            id: "SK-GUM3-7-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: [],
            prompt: "Pia says, \"Always put a comma before the word and.\" Which TWO sentences show that Pia is wrong?",
            pick: 2,
            choices: [
              { text: "The sun set, and the stars came out." },
              { text: "Mom washed the pots and dried them.", correct: true },
              { text: "We can sing, and we can dance." },
              { text: "Salt and pepper are on the table.", correct: true },
              { text: "Tia drew a bird, and Sam drew a fish." }
            ],
            clue: "To test a rule, look for examples that break it. Find sentences with and that are correct without a comma.",
            hints: [
              "To test a rule, look for examples that break it. Find sentences with and that are correct without a comma.",
              "Read each sentence and cover the word and. Ask whether both sides could stand alone as sentences.",
              "In The sun set, and the stars came out, both sides are complete sentences. Decide about the other four."
            ],
            how: [
              "Cover and in each sentence and check both sides.",
              "In the three sentences with a comma, both sides are complete sentences, so the comma belongs.",
              "In \"Mom washed the pots and dried them\" and \"Salt and pepper are on the table,\" and joins words or actions, so no comma belongs. They show the rule is wrong."
            ],
            misconception: "A common mix-up is thinking and always needs a comma. Use the comma only when and joins two complete sentences.",
            why: "The answers are \"Mom washed the pots and dried them.\" and \"Salt and pepper are on the table.\" In each, and joins words or actions, not two complete sentences, so no comma is needed. The other three join complete sentences, so the commas belong."
          },
          {
            id: "SK-GUM3-7-C14",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: [],
            prompt: "The sentence joins two complete sentences with only a comma. Choose the words that fix it.",
            text: "The baby fell asleep{0} we tiptoed out of the room.",
            slots: [
              {
                options: [", so", ",", " so,"],
                answer: 0
              }
            ],
            clue: "Two complete sentences need a joining word as well as a comma. Look for the choice that has both in the right order.",
            hints: [
              "Two complete sentences need a joining word as well as a comma. Look for the choice that has both in the right order.",
              "Say each choice in the blank. Ask which one has a joining word with the comma right before it.",
              "A comma alone is the mistake in the sentence. Decide between the other two."
            ],
            how: [
              "Both parts are complete sentences, and a comma alone cannot join them.",
              "The sentence needs a joining word, with the comma right before it.",
              "The answer is a comma, then so. A comma after so is in the wrong place."
            ],
            misconception: "A common mix-up is thinking a comma alone can join sentences. It needs a joining word with it.",
            why: "The answer is a comma and then so. The baby fell asleep, so we tiptoed out. A comma alone cannot join two sentences, and a comma after so is in the wrong place."
          },
          {
            id: "SK-GUM3-7-C15",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
            ],
            passages: [],
            prompt: "Which sentence is punctuated correctly?",
            choices: [
              { text: "We can ride the train or, we can take the bus." },
              { text: "We can ride the train or we can take the bus." },
              { text: "We can ride the train, or we can take the bus.", correct: true },
              { text: "We can ride, the train or we can take the bus." }
            ],
            clue: "Find the joining word. Check both sides, and check where the comma sits.",
            hints: [
              "Find the joining word. Check both sides, and check where the comma sits.",
              "Cover the joining word. Say each side by itself, then look for the comma.",
              "A comma after the joining word is never correct here. Check the other three."
            ],
            how: [
              "The joining word is or. Both sides are complete sentences, so they need a comma.",
              "The comma must go right before or.",
              "The answer is \"We can ride the train, or we can take the bus.\" The others have no comma, a comma after or, or a comma in the middle of a part."
            ],
            misconception: "A common mix-up is putting the comma after the joining word. The comma goes before it.",
            why: "The answer is \"We can ride the train, or we can take the bus.\" Both sides are complete sentences, so the comma goes right before or. The other choices have no comma, a comma after or, or a comma in the middle of a part."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM3-7-S01",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: [],
      prompt: "Select the sentence that needs a comma.",
      options: [
        "Mara baked bread and made soup.",
        "It started to snow hard so we built a tall snowman in the yard.",
        "Salt and pepper sat on the shelf.",
        "We played tag, and Dad watched."
      ],
      answer: [1],
      pick: 1,
      clue: "Cover the joining word in each sentence. Check what each side could be by itself.",
      hints: [
        "Cover the joining word in each sentence. Check what each side could be by itself.",
        "Check the sentences one at a time. Ask whether the part after the joining word has its own naming part.",
        "The tag sentence already has its comma in the right place. Check the other three sentences."
      ],
      how: [
        "Cover the joining word in each sentence and check both sides.",
        "Mara baked bread and made soup joins two actions, and Salt and pepper joins two things, so neither needs a comma. The tag sentence already has its comma.",
        "\"It started to snow hard\" and \"we built a tall snowman in the yard\" are both complete sentences, so the sentence needs a comma before so."
      ],
      misconception: "A common mix-up is adding a comma before every joining word. Only add it when both sides could stand alone.",
      why: "The answer is \"It started to snow hard so we built a tall snowman in the yard.\" Both sides are complete sentences, so it needs a comma before so. The other sentences join words or actions, or already have the comma.",
      like: ["SK-GUM3-7-P2"]
    },
    {
      id: "SK-GUM3-7-S02",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: [],
      prompt: "Which TWO sentences are punctuated correctly?",
      pick: 2,
      choices: [
        { text: "Pablo can swim and dive.", correct: true },
        { text: "I like tea but, my sister likes juice." },
        { text: "The movie ended, and everyone clapped.", correct: true },
        { text: "Our team lost the game so we went for pizza." },
        { text: "Lena ran home, and told her mom." }
      ],
      clue: "For each sentence, cover the joining word and check both sides. Then check where the comma is, or whether one is missing.",
      hints: [
        "For each sentence, cover the joining word and check both sides. Then check where the comma is, or whether one is missing.",
        "Look at the part after the joining word in each sentence. Ask whether it could stand alone as a sentence.",
        "Lena ran home, and told her mom has a comma before something that cannot stand alone. Decide about the other four."
      ],
      how: [
        "Cover the joining word in each sentence and check both sides.",
        "\"The movie ended, and everyone clapped\" has two complete sentences and a comma before and. \"Pablo can swim and dive\" joins two actions, so it needs no comma.",
        "The others are wrong: Lena's comma should come out, the tea sentence has the comma after but, and the team sentence needs a comma before so."
      ],
      misconception: "A common mix-up is adding a comma before every joining word. Some sentences need no comma, and some need it somewhere else.",
      why: "The answers are \"The movie ended, and everyone clapped.\" and \"Pablo can swim and dive.\" The first joins two complete sentences with a comma before and, and the second joins two actions, so it needs no comma. The others have a comma where none belongs, after the joining word, or missing.",
      like: ["SK-GUM3-7-P4"]
    },
    {
      id: "SK-GUM3-7-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: ["p4"],
      prompt: "Sentence 6 of the draft is missing a comma. Which words belong in the blank?",
      text: "The ride was fast{0} I laughed the whole way down.",
      slots: [
        {
          options: [" so,", ", so", " so"],
          answer: 1
        }
      ],
      clue: "Find the joining word. Then decide whether both sides could stand alone as sentences.",
      hints: [
        "Find the joining word. Then decide whether both sides could stand alone as sentences.",
        "Read sentence 6 and cover the joining word. Say each side by itself.",
        "A comma right after the joining word is never correct here. Decide between the other two."
      ],
      how: [
        "The joining word is so. Cover it.",
        "\"The ride was fast\" and \"I laughed the whole way down\" are both complete sentences.",
        "Two complete sentences joined by so need a comma right before so. The answer is a comma, then so."
      ],
      misconception: "A common mix-up is putting the comma after the joining word. The comma goes before it.",
      why: "The answer is a comma and then so. Both sides are complete sentences, so the comma goes right before the joining word. A comma after so is in the wrong place, and no comma at all leaves the break unmarked.",
      like: ["SK-GUM3-7-C03"]
    },
    {
      id: "SK-GUM3-7-S04",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: ["p4"],
      prompt: "Which revision fixes the comma problem in the fifth sentence of the draft?",
      choices: [
        { text: "I took a deep breath and, I stepped off the platform." },
        { text: "I took a deep breath, I stepped off the platform." },
        { text: "I took a deep, breath and I stepped off the platform." },
        { text: "I took a deep breath, and I stepped off the platform.", correct: true }
      ],
      clue: "Two complete sentences need more than a comma to join them. Look for what is missing.",
      hints: [
        "Two complete sentences need more than a comma to join them. Look for what is missing.",
        "Find the fifth sentence and check whether the two parts are joined by a joining word.",
        "The choice that keeps only a comma is the mistake in the draft. Check the other three."
      ],
      how: [
        "Both parts of the sentence are complete sentences, and a comma alone cannot join them.",
        "A joining word is needed, and the comma goes right before it.",
        "The answer is \"I took a deep breath, and I stepped off the platform.\" The comma comes before and, not after it."
      ],
      misconception: "A common mix-up is thinking a comma is enough to join two sentences. A comma needs a joining word with it.",
      why: "The answer is \"I took a deep breath, and I stepped off the platform.\" Both sides are complete sentences, so they need a joining word and a comma right before it. The other choices keep only a comma, put the comma after and, or put it in the middle of a part.",
      like: ["SK-GUM3-7-C04"]
    },
    {
      id: "SK-GUM3-7-S05",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: ["p4"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "Look at the last sentence of the third paragraph in the draft. Which revision puts the comma in the right place?",
        choices: [
          { text: "I waved goodbye and, I ran to tell my friends." },
          { text: "I waved goodbye, and I ran to tell my friends.", correct: true },
          { text: "I waved, goodbye and I ran to tell my friends." },
          { text: "I waved goodbye and I ran to tell my friends." }
        ]
      },
      partB: {
        prompt: "What is the reason for the comma in the answer to Part A?",
        choices: [
          { text: "Every and needs a comma right after it, no matter what else the sentence says." },
          { text: "Only the second side is a complete sentence, so the comma goes after and." },
          { text: "Both sides have their own naming part and doing part, so the comma goes before and.", correct: true },
          { text: "The sentence is fairly long, so a comma is needed somewhere in the middle of it." }
        ]
      },
      clue: "Find the joining word. Then check both sides of it.",
      hints: [
        "Find the joining word. Then check both sides of it.",
        "For Part A, find the sentence and cover the joining word. For Part B, think about what each side has to be before a comma is used.",
        "In Part A, a comma in the middle of a part splits words that belong together. Check the other choices."
      ],
      how: [
        "Part A: the joining word is and. Cover it.",
        "\"I waved goodbye\" and \"I ran to tell my friends\" are both complete sentences.",
        "Part A answer: \"I waved goodbye, and I ran to tell my friends.\" The comma goes right before and.",
        "Part B answer: \"Both sides have their own naming part and doing part, so the comma goes before and.\""
      ],
      misconception: "A common mix-up is putting the comma after the joining word. The comma goes before it.",
      why: "Part A: \"I waved goodbye, and I ran to tell my friends.\" Part B: \"Both sides have their own naming part and doing part, so the comma goes before and.\" A comma after and is in the wrong place, and no comma leaves the break unmarked. The length of a sentence does not decide where the comma goes, and both sides are complete.",
      like: ["SK-GUM3-7-C05"]
    },
    {
      id: "SK-GUM3-7-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: ["p5"],
      prompt: "Look at sentences 3 through 8 of the draft. Select the TWO that have a comma problem.",
      targets: ["p5:1:3", "p5:2:1", "p5:2:2", "p5:2:3", "p5:3:2"],
      answer: ["p5:2:1", "p5:3:2"],
      pick: 2,
      clue: "Cover the joining word in each sentence. Check whether both sides are complete sentences, then check the comma.",
      hints: [
        "Cover the joining word in each sentence. Check whether both sides are complete sentences, then check the comma.",
        "Read each sentence and look at what comes before the joining word. Ask whether a comma is there when it should be.",
        "Sentence 3 has a comma in the right place. Check the other four sentences."
      ],
      how: [
        "Check each sentence: cover the joining word and see whether both sides are complete sentences.",
        "Sentence 3 and sentence 5 have the comma before the joining word, and sentence 6 joins two actions, so it needs no comma.",
        "Sentence 4 joins two complete sentences with so but has no comma. Sentence 8 joins two complete sentences with only a comma."
      ],
      misconception: "A common mix-up is thinking a comma alone is enough. A comma needs a joining word with it, and some sentences need no comma at all.",
      why: "The problems are in \"The wagon bumped over the hill so we held on tight.\" and \"Dad paid the driver, we hopped off the wagon.\" The first needs a comma before so, and the second needs a joining word after the comma. Sentences 3, 5 and 6 are punctuated correctly.",
      like: ["SK-GUM3-7-C06"]
    },
    {
      id: "SK-GUM3-7-S07",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: [],
      prompt: "Which of these sentences needs no comma?",
      choices: [
        { text: "Rosa opened the big window and the cool breeze came in." },
        { text: "Rosa opened the big window but the room stayed very warm." },
        { text: "Rosa opened the window and let in the breeze.", correct: true },
        { text: "Rosa opened the big window so the whole room cooled off." }
      ],
      clue: "Cover the joining word. Check whether the part after it could stand alone as a sentence.",
      hints: [
        "Cover the joining word. Check whether the part after it could stand alone as a sentence.",
        "Look at the words after the joining word in each sentence. Ask whether they have their own naming part.",
        "In the choice with so, both sides could stand alone as sentences. Check the other three."
      ],
      how: [
        "Cover the joining word in each sentence and check the part after it.",
        "The breeze came in, the room stayed warm, and the room cooled off all have their own naming parts, so each of those sentences needs a comma.",
        "Let in the breeze has no naming part, so it cannot stand alone. The answer is \"Rosa opened the window and let in the breeze.\""
      ],
      misconception: "A common mix-up is putting a comma before every joining word. A comma is only needed when both sides could stand alone.",
      why: "The answer is \"Rosa opened the window and let in the breeze.\" Let in the breeze cannot stand alone, so the sentence needs no comma. The other sentences join two complete sentences, so each one needs a comma before the joining word.",
      like: ["SK-GUM3-7-C07"]
    },
    {
      id: "SK-GUM3-7-S08",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: [],
      prompt: "What should be done to fix each sentence?",
      cols: ["Put in a comma", "Delete the comma", "Move the comma", "Add a joining word"],
      rows: [
        { text: "It rained all day, we stayed inside.", answer: 3 },
        { text: "Kai likes playing soccer after school and Jun likes playing tennis.", answer: 0 },
        { text: "Dara swept the floor, and mopped it.", answer: 1 },
        { text: "I wanted pizza but, we had pasta.", answer: 2 }
      ],
      clue: "Read each sentence and check where the comma is, whether there is a joining word, and whether both sides are complete sentences.",
      hints: [
        "Read each sentence and check where the comma is, whether there is a joining word, and whether both sides are complete sentences.",
        "Start with the sentence you are surest about. Decide the rest one at a time.",
        "The rain sentence has a comma but no joining word. Decide the other rows."
      ],
      how: [
        "Check each sentence for a comma, a joining word, and two complete sentences.",
        "\"Kai likes playing soccer after school and Jun likes playing tennis\" has two complete sentences and no comma, so put one in before and. \"I wanted pizza but, we had pasta\" has the comma after but, so move it.",
        "\"Dara swept the floor, and mopped it\" has a comma before an action that cannot stand alone, so delete it. \"It rained all day, we stayed inside\" needs a joining word."
      ],
      misconception: "A common mix-up is adding a comma to every sentence. Some sentences need the comma deleted.",
      why: "The rain sentence needs a joining word after the comma. Dara swept the floor, and mopped it needs the extra comma deleted. Kai likes playing soccer after school and Jun likes playing tennis needs a comma put in before and. The pizza sentence needs the comma moved before but.",
      like: ["SK-GUM3-7-C08"]
    },
    {
      id: "SK-GUM3-7-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: [],
      prompt: "Which statement about the two fixes is true?",
      stem: [
        "The kettle whistled, the water was hot.",
        "Eli changed it to: The kettle whistled, so the water was hot.",
        "Una changed it to: The kettle whistled so the water, was hot."
      ],
      choices: [
        { text: "Eli's fix is the only correct one.", correct: true },
        { text: "Una's fix is the only correct one." },
        { text: "Both fixes are correct." },
        { text: "Neither fix is correct." }
      ],
      clue: "Check each fix on its own. Look at the joining word and where the comma sits.",
      hints: [
        "Check each fix on its own. Look at the joining word and where the comma sits.",
        "Cover the joining word in each new sentence and check both sides. Then see where the comma is.",
        "Look at Una's sentence. The comma sits after the word water."
      ],
      how: [
        "The original sentence joins two complete sentences with only a comma, so it needs a joining word.",
        "Eli added so and put the comma right before it, which is correct. Una's comma sits in the middle of the second part, which is not correct.",
        "The answer is \"Eli's fix is the only correct one.\""
      ],
      misconception: "A common mix-up is thinking any fix that adds a joining word is right. The comma must be before the joining word.",
      why: "The answer is \"Eli's fix is the only correct one.\" Eli added so with the comma right before it. Una put the comma in the middle of the second part, so her sentence is still wrong.",
      like: ["SK-GUM3-7-C09"]
    },
    {
      id: "SK-GUM3-7-S10",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: ["p5"],
      prompt: "Sentence 9 of the draft is missing two commas. Which words fix it?",
      text: "Dad hummed a song{0} I sang along{1} the ride felt short.",
      slots: [
        {
          options: [", and", " and,", " and"],
          answer: 0
        },
        {
          options: ["so,", ", so", " so"],
          answer: 1
        }
      ],
      clue: "Find the two joining words. Then check whether each one has two complete sentences on its sides.",
      hints: [
        "Find the two joining words. Then check whether each one has two complete sentences on its sides.",
        "Read sentence 9 in three parts. Say each part by itself and decide which parts could stand alone.",
        "A comma right after a joining word is never correct here. Decide the rest."
      ],
      how: [
        "The joining words are and and so. There are three parts, and each part has its own naming part and doing part.",
        "Each joining word connects two complete sentences, so each needs a comma right before it.",
        "The answers are a comma then and, and a comma then so."
      ],
      misconception: "A common mix-up is fixing only one of the two joining words. Check each one.",
      why: "The answers are a comma then and, and a comma then so. Dad hummed a song, I sang along, and the ride felt short are all complete sentences, so each joining word needs a comma right before it.",
      like: ["SK-GUM3-7-C10"]
    },
    {
      id: "SK-GUM3-7-S11",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: ["p6"],
      prompt: "Select the TWO sentences in which a comma is not where it belongs.",
      targets: ["p6:1:2", "p6:1:3", "p6:2:1", "p6:2:2", "p6:2:3"],
      answer: ["p6:2:1", "p6:2:3"],
      pick: 2,
      clue: "Cover the joining word in each sentence. Check both sides, and check where each comma sits.",
      hints: [
        "Cover the joining word in each sentence. Check both sides, and check where each comma sits.",
        "Read each sentence and find its comma. Ask whether the comma should be there, and whether it is right before the joining word.",
        "Sentence 5 has its comma right before so, and both sides are complete sentences. Check the other four sentences."
      ],
      how: [
        "Check each sentence: find the comma, then cover the joining word.",
        "Sentences 2, 3 and 5 have the comma right before the joining word, with two complete sentences.",
        "Sentence 4: led our group cannot stand alone, so the comma should come out. Sentence 6: the comma comes after but, so it is in the wrong place."
      ],
      misconception: "A common mix-up is thinking every comma near a joining word is right. The comma must come before the joining word, and only when both sides can stand alone.",
      why: "The problems are in \"Kofi grabbed a map, and led our group.\" and \"We walked in circles but, we finally found the exit.\" The first has a comma before something that cannot stand alone. The second has the comma after but instead of before it. Sentences 2, 3 and 5 are punctuated correctly.",
      like: ["SK-GUM3-7-C11"]
    },
    {
      id: "SK-GUM3-7-S12",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: [],
      prompt: "Where should the comma go in this sentence?",
      stem: "The coach blew the whistle and the players ran onto the field.",
      choices: [
        { text: "after the word coach" },
        { text: "after the word and" },
        { text: "after the word players" },
        { text: "after the word whistle", correct: true }
      ],
      clue: "Find the joining word. A comma goes right before it when both sides can stand alone.",
      hints: [
        "Find the joining word. A comma goes right before it when both sides can stand alone.",
        "Read the sentence and cover the joining word. Say each side by itself.",
        "A comma goes before the joining word, not after it. Check the other three."
      ],
      how: [
        "The joining word is and. Cover it.",
        "\"The coach blew the whistle\" and \"the players ran onto the field\" are both complete sentences.",
        "The comma goes right before and, which is after the word whistle."
      ],
      misconception: "A common mix-up is putting the comma after the joining word. The comma goes before it.",
      why: "The answer is after the word whistle. Both sides are complete sentences, so the comma goes right before and, after the word whistle. A comma after and is in the wrong place, and the other spots split words that belong together.",
      like: ["SK-GUM3-7-C12"]
    },
    {
      id: "SK-GUM3-7-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: [],
      prompt: "Leo says, \"Always put a comma before the word but.\" Which TWO sentences show that Leo is wrong?",
      pick: 2,
      choices: [
        { text: "I wanted a puppy, but we have a cat." },
        { text: "It was late, but we kept playing." },
        { text: "Mina wanted tea but not milk.", correct: true },
        { text: "She tried hard, but she lost." },
        { text: "The pie looked small but tasty.", correct: true }
      ],
      clue: "To test a rule, look for examples that break it. Find sentences with but that are correct without a comma.",
      hints: [
        "To test a rule, look for examples that break it. Find sentences with but that are correct without a comma.",
        "Read each sentence and cover the word but. Ask whether both sides could stand alone as sentences.",
        "In She tried hard, but she lost, both sides are complete sentences. Decide about the other four."
      ],
      how: [
        "Cover but in each sentence and check both sides.",
        "In the three sentences with a comma, both sides are complete sentences, so the comma belongs.",
        "In \"Mina wanted tea but not milk\" and \"The pie looked small but tasty,\" but joins words or groups of words, so no comma belongs. They show the rule is wrong."
      ],
      misconception: "A common mix-up is thinking but always needs a comma. Use the comma only when but joins two complete sentences.",
      why: "The answers are \"Mina wanted tea but not milk.\" and \"The pie looked small but tasty.\" In each, but joins words or groups of words, not two complete sentences, so no comma is needed. The other three join complete sentences, so the commas belong.",
      like: ["SK-GUM3-7-C13"]
    },
    {
      id: "SK-GUM3-7-S14",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: [],
      prompt: "Two complete sentences are joined with only a comma. Which words fix it?",
      text: "The lights flickered{0} we grabbed a flashlight.",
      slots: [
        {
          options: [", so", " so,", ","],
          answer: 0
        }
      ],
      clue: "Two complete sentences need a joining word as well as a comma. Look for the choice that has both in the right order.",
      hints: [
        "Two complete sentences need a joining word as well as a comma. Look for the choice that has both in the right order.",
        "Say each choice in the blank. Ask which one has a joining word with the comma right before it.",
        "A comma alone is the mistake in the sentence. Decide between the other two."
      ],
      how: [
        "Both parts are complete sentences, and a comma alone cannot join them.",
        "The sentence needs a joining word, with the comma right before it.",
        "The answer is a comma, then so. A comma after so is in the wrong place."
      ],
      misconception: "A common mix-up is thinking a comma alone can join sentences. It needs a joining word with it.",
      why: "The answer is a comma and then so. The lights flickered, so we grabbed a flashlight. A comma alone cannot join two sentences, and a comma after so is in the wrong place.",
      like: ["SK-GUM3-7-C14"]
    },
    {
      id: "SK-GUM3-7-S15",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-commas-with-coordinating-conjunctions-to-joi"
      ],
      passages: [],
      prompt: "Choose the sentence with the correct punctuation.",
      choices: [
        { text: "I wanted to help, but my hands were full.", correct: true },
        { text: "I wanted to help but, my hands were full." },
        { text: "I wanted to help but my hands were full." },
        { text: "I wanted, to help but my hands were full." }
      ],
      clue: "Find the joining word. Check both sides, and check where the comma sits.",
      hints: [
        "Find the joining word. Check both sides, and check where the comma sits.",
        "Cover the joining word. Say each side by itself, then look for the comma.",
        "A comma after the joining word is never correct here. Check the other three."
      ],
      how: [
        "The joining word is but. Both sides are complete sentences, so they need a comma.",
        "The comma must go right before but.",
        "The answer is \"I wanted to help, but my hands were full.\" The others have no comma, a comma after but, or a comma in the middle of a part."
      ],
      misconception: "A common mix-up is putting the comma after the joining word. The comma goes before it.",
      why: "The answer is \"I wanted to help, but my hands were full.\" Both sides are complete sentences, so the comma goes right before but. The other choices have no comma, a comma after but, or a comma in the middle of a part.",
      like: ["SK-GUM3-7-C15"]
    }
  ],
  addons: {
    "SK-GUM3-7-P1": {
      hints: [
        "Find the joining word. Where does the comma belong when it joins two complete sentences?",
        "Look at each choice and find its comma. Ask whether it sits right before the joining word.",
        "A comma after the joining word is never correct here. Decide among the other choices."
      ],
      how: [
        "The joining word is but, and both sides are complete sentences.",
        "The comma goes right before but.",
        "The answer is \"Jada wanted to bake cookies, but we had no eggs.\" The others put the comma after but or in the middle of a part."
      ],
      misconception: "A common mix-up is putting the comma after the joining word. The comma goes before it."
    },
    "SK-GUM3-7-P2": {
      hints: [
        "Cover the joining word in each sentence. Check what each side could be by itself.",
        "Check the sentences one at a time. Ask whether the part after the joining word has its own naming part.",
        "The tag sentence already has its comma in the right place. Check the other three sentences."
      ],
      how: [
        "Cover the joining word in each sentence and check both sides.",
        "Grandpa grilled corn and baked a pie joins two actions, and Rosa likes cats and dogs joins two things, so neither needs a comma.",
        "\"The bus was late this morning\" and \"we missed the first bell\" are both complete sentences, so the sentence needs a comma before so."
      ],
      misconception: "A common mix-up is adding a comma before every joining word. Only add it when both sides could stand alone."
    },
    "SK-GUM3-7-P3": {
      hints: [
        "Cover the joining word. Is the part after it a whole sentence with its own naming part?",
        "Start with the sentence you are surest about. Then decide the rest one at a time.",
        "Not salad cannot stand alone as a sentence. Decide the other rows."
      ],
      how: [
        "Cover the joining word in each sentence and check the part after it.",
        "She gave it to her mom and nobody came to the door each have their own naming part, so they need a comma.",
        "Gave it to her mom and not salad cannot stand alone, so they need no comma."
      ],
      misconception: "A common mix-up is adding a comma before every joining word. Only add it when both sides could stand alone."
    },
    "SK-GUM3-7-P4": {
      hints: [
        "For each sentence, cover the joining word and check both sides. Then check where the comma is, or whether one is missing.",
        "Look at the part after the joining word in each sentence. Ask whether it could stand alone as a sentence.",
        "Kim drew a map, and labeled every road has a comma before something that cannot stand alone. Decide about the other four."
      ],
      how: [
        "Cover the joining word in each sentence and check both sides.",
        "\"The sun came out, so we hung the wet towels outside\" has two complete sentences and a comma before so. \"Yusuf can sing and play the guitar\" joins two actions, so it needs no comma.",
        "The others are wrong: Kim's comma should come out, the math sentence has the comma after but, and the Lucas sentence needs a comma before so."
      ],
      misconception: "A common mix-up is adding a comma before every joining word. Some sentences need no comma, and some need it somewhere else."
    },
    "SK-GUM3-7-P5": {
      hints: [
        "You need a joining word and a comma. Look closely at where the comma sits.",
        "Check each choice for a joining word and a comma. Ask whether the comma is right before the joining word.",
        "A comma alone cannot join two sentences. Check the other choices."
      ],
      how: [
        "Both parts are complete sentences, so they need a joining word and a comma.",
        "The comma goes right before the joining word.",
        "The answer is \"Grandma planted tomatoes, and Grandpa planted beans.\" The others put the comma after and, leave out the joining word, or put the comma in the middle of a part."
      ],
      misconception: "A common mix-up is thinking a comma alone can join sentences. It needs a joining word with it."
    }
  },
  /* B6:core:end */
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
        { text: "The tiny green frog jumped high but it missed the bug.", answer: 0 },
        { text: "Kai washed the car and the dog.", answer: 1 }
      ],
      clue: "Cover the joining word. Does the part after it have its own naming part and doing part?",
      why: "\"You can wear the red hat or you can wear the blue one\" and \"The tiny green frog jumped high but it missed the bug\" each join two complete sentences, so they need a comma before the joining word. \"Pushed her sister\" and \"the dog\" are not sentences, so those two need no comma." },
    { id: "SK-GUM3-7-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO sentences that need a comma before the joining word.",
      choices: [
        { text: "The baby woke up crying so Dad warmed a bottle.", correct: true },
        { text: "Aunt Rosa called us twice but nobody was home.", correct: true },
        { text: "Mom and I baked muffins for the sale." },
        { text: "Eli stretched and ran around the track." },
        { text: "We can eat inside or out on the porch." }
      ],
      clue: "Cover the joining word in each sentence. Only add a comma when both sides could stand alone as sentences.",
      why: "The answers are \"The baby woke up crying so Dad warmed a bottle.\" and \"Aunt Rosa called us twice but nobody was home.\" Each one joins two complete sentences, so each needs a comma before the joining word. The other three join words or parts that are not whole sentences, so they need no comma." },
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
      "A hyphen is a short line (-). It goes at the end of the first line, never at the start of the next line, and it shows that the word keeps going.",
      "Clap the word to count its syllables. A word with only one syllable, like school or bright, is never split. Move the whole word to the next line instead. Also, never leave a single letter alone at the end or the start of a line. Break after a syllable, not after the first or last letter.",
      "When two different consonants sit between two vowels, split between the consonants: gar-den, sis-ter, pen-cil. But letters that make one sound together, like th, sh, ch and ck, stay together: fish-er, lock-er.",
      "When the same consonant comes twice in the middle, split between the two letters: hap-py, bub-ble.",
      "When a word is made of two smaller words, split between the two words: sun-set, rail-road."
    ],
    words: [
      { term: "hyphen", means: "a short line (-) that joins or splits words" },
      { term: "syllable", means: "one beat in a word, like the two beats in pen-cil" },
      { term: "consonant", means: "any letter that is not a vowel (a, e, i, o, u)" }
    ],
    example: {
      label: "Example",
      lines: ["Yesterday we planted seeds in the gar-", "den behind our school."],
      note: "Garden has two beats. The two consonants r and d sit in the middle, so the split goes between them: gar-den. The hyphen ends the first line, right after gar."
    },
    tip: "The test may show a word broken across two lines and ask if it is split correctly. First clap it. Then look at the letters in the middle and use the rules. In some questions, a | mark shows where the first line ends: gar- | den."
  },
  learn: [
    {
      show: ["Andre opened the win-", "dow to let in the breeze."],
      ask: "Is the word window split correctly?",
      steps: [
        "Clap window: two beats, so it can be split.",
        "Look at the middle letters: n and d are two different consonants between the vowels i and o.",
        "The rule says split between them: win-dow. The hyphen is at the end of the first line, so the split is correct."
      ],
      answer: "Yes. Window is split correctly, between the consonants n and d."
    },
    {
      show: ["I lost my red mi-", "tten on the bus."],
      ask: "Is the word mitten split correctly?",
      steps: [
        "Clap mitten: two beats, so it can be split.",
        "Look at the middle letters: the same consonant, t, comes twice.",
        "The rule says split between the two t's: mit-ten. This split comes too early."
      ],
      answer: "No. Mitten should be split between the two t's: mit- on the first line and ten on the next."
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
  parent: "Write long words like button, puppy and sunflower on paper. Ask your child to clap each one, then draw a line where it could be split and say which rule they used.",
  passages: [
    /* B6:passages:start */
    {
      id: "p1",
      title: "Packing a Suitcase",
      byline: "A third grader's draft",
      genre: "Student draft (narrative; | marks the end of a line)",
      draft: true,
      paragraphs: [
        [
          "(1) Tomorrow we fly to see Grandma, so I need to pack my suit- | case.",
          "(2) First, I put in my blan- | ket and my teddy bear.",
          "(3) Mom told me to take a warm jack- | et."
        ],
        [
          "(4) Next, I packed a yellow rib- | bon for the party.",
          "(5) I found my toothb- | rush under the bed.",
          "(6) Dad put my pil | -low in the backpack."
        ],
        [
          "(7) At the airport, we waited in a long li- | ne.",
          "(8) The pilot said the flight would be smooth.",
          "(9) I held my ticket tight and looked out the win- | dow."
        ],
        [
          "(10) I can't wait to hug Grandma at the gate."
        ]
      ]
    },
    {
      id: "p2",
      title: "Basement Clean-Up",
      byline: "A third grader's draft",
      genre: "Student draft (narrative; | marks the end of a line)",
      draft: true,
      paragraphs: [
        [
          "(1) On Saturday, our whole family cleaned the basement.",
          "(2) Dad found a dusty flash- | light behind the shelf.",
          "(3) My sister swept the cement floor with a stiff broom."
        ],
        [
          "(4) I stacked the old card- | board boxes by the door.",
          "(5) Mom used a lad- | der to reach the top shelf.",
          "(6) Under it, we found a rubb- | er ball and a tin cup."
        ],
        [
          "(7) Dad hung a heavy picture of our dog on the wall.",
          "(8) My brother carried the pail to the sink.",
          "(9) We rested and ate our lun- | ch on the stairs."
        ],
        [
          "(10) By dark, the basement looked clean and bright."
        ]
      ]
    },
    {
      id: "p3",
      title: "Train Museum Trip",
      byline: "A third grader's draft",
      genre: "Student draft (report; | marks the end of a line)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class took a bus to the train museum last Friday.",
          "(2) The guide showed us an old engine with a shiny bell.",
          "(3) She told us how the cond- | uctor used to call out each stop."
        ],
        [
          "(4) Next, we climbed into a bright red box- | car.",
          "(5) The seats had thin cush- | ions.",
          "(6) The guide handed each of us a tick- | et for the ride."
        ],
        [
          "(7) After lunch, we saw a model village with a bridge and a wind- | mill.",
          "(8) My friend Leo bought a postc- | ard for his grandma."
        ],
        [
          "(9) The bus took us back to school before the last bell."
        ]
      ]
    },
    {
      id: "p4",
      title: "Campsite Chores",
      byline: "A third grader's draft",
      genre: "Student draft (narrative; | marks the end of a line)",
      draft: true,
      paragraphs: [
        [
          "(1) Our family spent the weekend at a campsite by the lake.",
          "(2) First, Dad put up the tent while I unpacked my back- | pack.",
          "(3) Mom filled the ket- | tle with cold water."
        ],
        [
          "(4) We toasted some marshmallows over the bonf- | ire.",
          "(5) We skipped a flat peb | -ble across the lake.",
          "(6) Later, we sat by the stre- | am and listened to the frogs."
        ],
        [
          "(7) After dark, I curled up in my ham- | mock and watched the stars.",
          "(8) On Sunday, we packed up and drove home."
        ],
        ["(9) I can't wait for our next trip."]
      ]
    },
    {
      id: "p5",
      title: "Grocery Store Helper",
      byline: "A third grader's draft",
      genre: "Student draft (narrative; | marks the end of a line)",
      draft: true,
      paragraphs: [
        [
          "(1) Every Saturday, I help my aunt at her small grocery store.",
          "(2) First, I stack the cans and wash the cab- | bage.",
          "(3) Next, I sort the fresh carr- | ots by size."
        ],
        [
          "(4) Customers often ask me where the pep- | per is.",
          "(5) I point to the right aisle and say, \"It's on the shelf over the bread.\"",
          "(6) One customer thanked me and bought a pump- | kin."
        ],
        [
          "(7) Then I take out the trash and sweep the flo- | or.",
          "(8) My aunt gives me a candy bar when the work is done."
        ],
        ["(9) I love helping at the store."]
      ]
    },
    {
      id: "p6",
      title: "Pond Cleanup Day",
      byline: "A third grader's draft",
      genre: "Student draft (report; | marks the end of a line)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class went to the pond near school to clean up.",
          "(2) Mr. Ortiz gave each of us a plastic bag and a pair of gloves.",
          "(3) We learned that trash can hurt the tur- | tles and fish."
        ],
        [
          "(4) By the cat- | tails, I found an empty bot- | tle.",
          "(5) Maya spotted a tiny mi- | nnow near the rocks.",
          "(6) Soon every bag was full of cans and a torn rain- | coat."
        ],
        [
          "(7) The sun was bright, and the sunl- | ight sparkled on the pond.",
          "(8) A duck shook the water from its feat- | hers.",
          "(9) We waved goodbye to the pond and walked back to school."
        ]
      ]
    }
    /* B6:passages:end */
  ],
  practice: [
    { id: "SK-GUM3-8-P1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Look at how the word doctor is split. Is it split correctly?",
      stem: ["My little brother went to the doc-", "tor for a checkup."],
      choices: [
        { text: "Yes, because it is split between the consonants c and t.", correct: true },
        { text: "No, because the hyphen should go at the start of the next line." },
        { text: "No, because doctor has only one syllable and cannot be split." },
        { text: "Yes, because it is fine to split a word after any two letters." }
      ],
      clue: "Clap the word. Then look at the letters in the middle and at where the hyphen sits.",
      why: "The answer is \"Yes, because it is split between the consonants c and t.\" Doctor has two beats, and c and t are two different consonants between vowels, so the split goes between them. The hyphen is at the end of the first line, where it belongs. A split cannot go after just any two letters." },
    { id: "SK-GUM3-8-P2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word could be split with a hyphen at the end of a line?",
      choices: [
        { text: "carpet", correct: true },
        { text: "school" },
        { text: "bright" },
        { text: "friend" }
      ],
      clue: "Clap each word. A word can only be split if it has more than one beat.",
      why: "The answer is carpet. It has two syllables, car-pet, so it can be split between the consonants r and p. School, bright and friend each have only one syllable, so they can never be split." },
    { id: "SK-GUM3-8-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Each word was split at the end of a line. The | mark shows where the first line ends. Is each split correct?",
      cols: ["Correct", "Not correct"],
      rows: [
        { text: "muf- | fin", answer: 0 },
        { text: "wi- | nter", answer: 1 },
        { text: "sum- | mer", answer: 0 },
        { text: "brig- | ht", answer: 1 }
      ],
      clue: "Clap each word first. Then look for two consonants or a double letter in the middle.",
      why: "Muf- | fin and sum- | mer are split between double letters, so they are correct. Winter has the consonants n and t in the middle, so it should be win- | ter. Bright has only one syllable, so it should not be split at all." },
    { id: "SK-GUM3-8-P4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "The | mark shows where the first line ends. Choose the TWO words that are split correctly.",
      choices: [
        { text: "bas- | ket", correct: true },
        { text: "pop- | corn", correct: true },
        { text: "le- | tter" },
        { text: "monk- | ey" },
        { text: "jum- | p" }
      ],
      clue: "Clap each word. Then use the rules: two consonants, a double letter, or two small words.",
      why: "The answers are bas- | ket and pop- | corn. Basket splits between the consonants s and k. Popcorn is made of pop and corn, so it splits between the two words. Letter should be let- | ter (between the double t), monkey should be mon- | key (between n and k), and jump has only one syllable, so it should not be split." },
    { id: "SK-GUM3-8-P5", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "The word birthday will not fit at the end of a line. The | mark shows where the line ends. Choose the correct way to split it.",
      text: "Split it like this: {0}",
      slots: [{ options: ["bir- | thday", "birth- | day", "birthd- | ay"], answer: 1 }],
      clue: "Clap the word. Then use the split rules from the lesson: two different consonants, a double letter, or two smaller words. Remember that some letter pairs stay together.",
      why: "The answer is birth- | day. Birthday is made of two smaller words, birth and day, so the split goes between them. Bir- | thday breaks up th, which makes one sound and stays together. Birthd- | ay does not split between the two beats, birth and day." }
  ],
  /* B6:core:start */
  /* ---------- Expansion 2026-10-22, batch B6 (GUM Master) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test or testB.
     Author log: docs/expansion-2026-10-22/batches/B6-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          { ref: "SK-GUM3-8-P3" },
          { ref: "SK-GUM3-8-P4" },
          {
            id: "SK-GUM3-8-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: ["p1"],
            prompt: "Sentence 5 of the draft splits the word toothbrush in the wrong place. Choose the correct split. The | mark shows where the line ends.",
            text: "The word toothbrush is split correctly as {0}",
            slots: [
              {
                options: ["tooth- | brush", "toothb- | rush", "toot- | hbrush"],
                answer: 0
              }
            ],
            clue: "Say the whole word. Ask whether it is made of smaller words, and where one of them ends.",
            hints: [
              "Say the whole word. Ask whether it is made of smaller words, and where one of them ends.",
              "Read sentence 5 and say each choice. Check whether the break falls between the smaller words.",
              "Toot- | hbrush cuts the first small word in half. Decide between the other two."
            ],
            how: [
              "Say the whole word: toothbrush.",
              "It is made of two smaller words, tooth and brush. A word made of two smaller words is split between them.",
              "The answer is tooth- | brush. The other splits cut one of the smaller words apart."
            ],
            misconception: "A common mix-up is splitting where the line happens to run out. Split where the two smaller words meet.",
            why: "The answer is tooth- | brush. Toothbrush is made of the smaller words tooth and brush, so it is split between them. Toothb- | rush and toot- | hbrush cut a smaller word apart."
          },
          {
            id: "SK-GUM3-8-C04",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: ["p1"],
            prompt: "Sentence 6 of the draft has the hyphen in the wrong place. Which revision fixes it? The | mark shows where the line ends.",
            choices: [
              { text: "Dad put my pil | -low in the backpack." },
              { text: "Dad put my pil- | low in the backpack.", correct: true },
              { text: "Dad put my pill- | ow in the backpack." },
              { text: "Dad put my pillow- | in the backpack." }
            ],
            clue: "Check where the hyphen sits. Remember which line it belongs on.",
            hints: [
              "Check where the hyphen sits. Remember which line it belongs on.",
              "Read sentence 6 and find the | mark. Ask which side of the mark the hyphen is on, and where the word breaks.",
              "The draft has the hyphen after the | mark, and it needs to be fixed. Check the other three."
            ],
            how: [
              "The hyphen belongs at the end of the first line, before the | mark, not at the start of the next line.",
              "Pillow has a double l in the middle, so it is split between the two l's: pil- | low.",
              "The answer is \"Dad put my pil- | low in the backpack.\" Pill- | ow splits after both l's, and pillow- | does not split the word."
            ],
            misconception: "A common mix-up is putting the hyphen at the start of the next line. The hyphen goes at the end of the first line.",
            why: "The answer is \"Dad put my pil- | low in the backpack.\" The hyphen goes at the end of the first line, and the double l is split between the two letters. The draft has the hyphen on the second line, pill- | ow splits in the wrong place, and pillow- | does not split the word at all."
          },
          {
            id: "SK-GUM3-8-C05",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: ["p1"],
            prompt: "Work through the fix in two steps.",
            partA: {
              prompt: "A word in sentence 7 should never have been broken. What fix is best?",
              choices: [
                { text: "Put the hyphen where the next line starts." },
                { text: "Split the word after the first letter instead." },
                { text: "Write the entire word below, with no hyphen.", correct: true },
                { text: "Add one more hyphen after the word." }
              ]
            },
            partB: {
              prompt: "Which lesson fact explains the fix in Part A?",
              choices: [
                { text: "A word with only one syllable is never split.", correct: true },
                { text: "A hyphen goes at the end of the first line." },
                { text: "Two different consonants in the middle are split between them." },
                { text: "A word made of two smaller words is split between them." }
              ]
            },
            clue: "Clap the word that is split in sentence 7. Count the beats.",
            hints: [
              "Clap the word that is split in sentence 7. Count the beats.",
              "For Part A, say the word out loud and clap it. For Part B, think about which rule tells you when a word cannot be split.",
              "In Part A, moving the hyphen would still leave the word split. Check the other choices."
            ],
            how: [
              "Part A: clap the word in sentence 7. Line has one beat, so it has only one syllable.",
              "A word with one syllable cannot be split, so the whole word must go on the next line.",
              "Part A answer: \"Write the entire word below, with no hyphen.\"",
              "Part B answer: \"A word with only one syllable is never split.\""
            ],
            misconception: "A common mix-up is thinking any word can be split if the hyphen is in the right place. A word with one beat is never split.",
            why: "Part A: \"Write the entire word below, with no hyphen.\" Part B: \"A word with only one syllable is never split.\" Line has only one beat, so it stays whole. Moving the hyphen or splitting after the first letter still breaks the word, and one more hyphen does not help. The other facts are true, but they do not explain this fix."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM3-8-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: ["p2"],
            prompt: "Select the TWO sentences that have a word split in the wrong way. The | mark shows where the line ends.",
            targets: ["p2:1:2", "p2:2:1", "p2:2:2", "p2:2:3", "p2:3:3"],
            answer: ["p2:2:3", "p2:3:3"],
            pick: 2,
            clue: "Clap each split word. Then check the break against the rules.",
            hints: [
              "Clap each split word. Then check the break against the rules.",
              "Say each split word whole. Ask whether the break follows a rule, and whether the word has more than one beat.",
              "Lad- | der splits between the double d, which is correct. Check the other four sentences."
            ],
            how: [
              "Say each split word whole, clap it, and check the break.",
              "Flash- | light and card- | board split between two smaller words, and lad- | der splits between the double d. Those are correct.",
              "Rubb- | er should be rub- | ber, between the double b. Lun- | ch has only one beat, so it should not be split at all."
            ],
            misconception: "A common mix-up is thinking a split is right if it comes after a few letters. Check the break against the rules.",
            why: "The wrong splits are in \"Under it, we found a rubb- | er ball and a tin cup.\" and \"We rested and ate our lun- | ch on the stairs.\" Rubber should be rub- | ber, and lunch has only one syllable. Flash- | light, card- | board and lad- | der are split correctly."
          },
          {
            id: "SK-GUM3-8-C07",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: [],
            prompt: "The | mark shows where the first line ends. Choose the TWO words that are NOT split correctly.",
            pick: 2,
            choices: [
              { text: "pitch- | er" },
              { text: "pe- | ncil", correct: true },
              { text: "pup- | pet" },
              { text: "trum- | pet" },
              { text: "wa- | sher", correct: true }
            ],
            clue: "Clap each word. Then check each break against the split rules.",
            hints: [
              "Clap each word. Then check each break against the split rules.",
              "Say each word whole, then check the letters at the break. Ask whether the break follows a rule.",
              "Trum- | pet splits between the consonants m and p. Decide about the other four."
            ],
            how: [
              "Say each word whole and check the break.",
              "Pencil has n and c between vowels, so it should be pen- | cil. Washer has the letters sh, which stay together, so it should be wash- | er.",
              "Trum- | pet, pitch- | er and pup- | pet follow the rules."
            ],
            misconception: "A common mix-up is splitting after the first vowel. Look at the consonants and split by the rules.",
            why: "The answers are pe- | ncil and wa- | sher. Pencil should be pen- | cil, between the consonants n and c. Washer should be wash- | er, because the letters sh stay together. Trum- | pet, pitch- | er and pup- | pet follow the rules."
          },
          {
            id: "SK-GUM3-8-C08",
            type: "mc",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: [],
            prompt: "Which word is split correctly between the double letters? The | mark shows where the line ends.",
            choices: [
              { text: "ra- | bbit" },
              { text: "rabb- | it" },
              { text: "rabbi- | t" },
              { text: "rab- | bit", correct: true }
            ],
            clue: "Look for the two matching letters in the middle of the word. Where should the break go?",
            hints: [
              "Look for the two matching letters in the middle of the word. Where should the break go?",
              "Say the word and find the two matching letters. Then check where each choice puts the break.",
              "Rabbi- | t leaves a single letter alone on the next line. Check the other three."
            ],
            how: [
              "Find the two matching letters in rabbit: bb.",
              "When the same consonant comes twice in the middle, the split goes between the two letters.",
              "The answer is rab- | bit. The other choices put the break before both b's, after both b's, or after the i."
            ],
            misconception: "A common mix-up is putting both matching letters on one line. Split between them.",
            why: "The answer is rab- | bit. The same consonant comes twice in the middle, so the split goes between the two b's. Ra- | bbit puts both b's on the second line, rabb- | it puts both on the first line, and rabbi- | t leaves one letter alone."
          },
          {
            id: "SK-GUM3-8-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: [],
            prompt: "Two students split the same word. Which statement is true?",
            stem: [
              "The word bucket will not fit at the end of a line.",
              "Pia split it like this: buck- | et",
              "Sam split it like this: bu- | cket"
            ],
            choices: [
              { text: "Only Pia's split is correct.", correct: true },
              { text: "Only Sam's split is correct." },
              { text: "Both splits are correct." },
              { text: "Neither split is correct." }
            ],
            clue: "Check each split against the rules. Remember that some letters stay together.",
            hints: [
              "Check each split against the rules. Remember that some letters stay together.",
              "Look at the letters on each side of the break in both splits. Ask whether any letters that make one sound were pulled apart.",
              "In Sam's split, the c and the k are on different lines. Check what that means."
            ],
            how: [
              "Bucket has two beats, so it can be split.",
              "The letters ck make one sound, so they stay together. The split goes after them: buck- | et.",
              "Pia kept ck together, and Sam pulled it apart. The answer is \"Only Pia's split is correct.\""
            ],
            misconception: "A common mix-up is splitting before the k because the k starts the second beat. The letters ck stay together.",
            why: "The answer is \"Only Pia's split is correct.\" The letters ck make one sound and stay together, so bucket splits as buck- | et. Sam pulled the c and the k apart."
          },
          {
            id: "SK-GUM3-8-C10",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: [],
            prompt: "Neither word will fit at the end of a line. The | mark shows where the line ends. Choose the correct split for each word.",
            text: "Split tunnel like this: {0} Split cupcake like this: {1}",
            slots: [
              {
                options: ["tu- | nnel", "tun- | nel", "tunn- | el"],
                answer: 1
              },
              {
                options: ["cupc- | ake", "cu- | pcake", "cup- | cake"],
                answer: 2
              }
            ],
            clue: "Say each word whole. Ask whether it has a double letter, or whether it is made of two smaller words.",
            hints: [
              "Say each word whole. Ask whether it has a double letter, or whether it is made of two smaller words.",
              "Look at the middle of each word. Then check where each choice puts the break.",
              "Cu- | pcake cuts the first small word in half. Decide the rest."
            ],
            how: [
              "Tunnel has a double n in the middle, so it is split between the two n's.",
              "Cupcake is made of the smaller words cup and cake, so it is split between them.",
              "The answers are tun- | nel and cup- | cake."
            ],
            misconception: "A common mix-up is using the same rule for both words. Tunnel has a double letter, and cupcake is made of two smaller words.",
            why: "The answers are tun- | nel and cup- | cake. Tunnel has a double n, so it splits between the two n's. Cupcake is made of cup and cake, so it splits between the two smaller words."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM3-8-C11",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: ["p3"],
            prompt: "Two sentences in the report break a word where a break does not belong. Select both. The | mark shows where the line ends.",
            targets: ["p3:1:3", "p3:2:1", "p3:2:2", "p3:3:1", "p3:3:2"],
            answer: ["p3:1:3", "p3:3:2"],
            pick: 2,
            clue: "Say each split word whole. Then check the break against the rules.",
            hints: [
              "Say each split word whole. Then check the break against the rules.",
              "Clap each split word. Ask whether the break comes between two consonants, between two smaller words, or between double letters.",
              "Box- | car splits between two smaller words, so it is correct. Check the other four sentences."
            ],
            how: [
              "Say each split word whole, clap it, and check the break.",
              "Box- | car and wind- | mill split between two smaller words, and cush- | ions keeps sh together. Those are correct.",
              "Cond- | uctor should be con- | ductor, between n and d. Postc- | ard should be post- | card, between the two smaller words."
            ],
            misconception: "A common mix-up is thinking a split is right if the first part looks like a word. Check the break against the rules.",
            why: "The wrong splits are in \"She told us how the cond- | uctor used to call out each stop.\" and \"My friend Leo bought a postc- | ard for his grandma.\" Conductor should be con- | ductor, and postcard should be post- | card. Box- | car, cush- | ions and wind- | mill are split correctly."
          },
          {
            id: "SK-GUM3-8-C12",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: [],
            prompt: "Ana broke the word ticket as tic- | ket at the end of a line. Which break is the better one? A | mark shows where the line ends.",
            choices: [
              { text: "ti- | cket" },
              { text: "tic- | ket" },
              { text: "tick- | et", correct: true },
              { text: "t- | icket" }
            ],
            clue: "Look for letters that make one sound together. Those letters stay on the same line.",
            hints: [
              "Look for letters that make one sound together. Those letters stay on the same line.",
              "Say ticket and look at the letters on each side of every break. Ask which break pulls a pair of letters apart.",
              "T- | icket leaves a single letter alone on a line. Check the other three."
            ],
            how: [
              "Say ticket. It has two beats, so it can be split.",
              "The letters ck make one sound, so they stay together. The split goes after them: tick- | et.",
              "The answer is tick- | et. Tic- | ket and ti- | cket pull the c and k apart, and t- | icket leaves one letter alone."
            ],
            misconception: "A common mix-up is splitting before the k. The letters ck make one sound and stay together.",
            why: "The answer is tick- | et. The letters ck make one sound and stay together, so the split goes after them. Tic- | ket and ti- | cket pull the c and k apart, and t- | icket leaves one letter alone."
          },
          {
            id: "SK-GUM3-8-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: [],
            prompt: "The word lantern is split as lan- | tern. Choose the TWO reasons that make this split correct.",
            pick: 2,
            choices: [
              { text: "The letters nt make one sound, so they must stay together." },
              { text: "Lantern has two beats, so it can be split.", correct: true },
              { text: "Lantern is made of two smaller words, lan and tern." },
              { text: "Two different consonants, n and t, sit between the vowels, so the split goes between them.", correct: true },
              { text: "The same consonant comes twice in the middle." }
            ],
            clue: "Look at the middle letters of lantern. Check each reason against the word.",
            hints: [
              "Look at the middle letters of lantern. Check each reason against the word.",
              "Say the word and clap it. Then check each reason against the letters in the word.",
              "Lantern does not have any double letters. Decide about the other four."
            ],
            how: [
              "Clap lantern: two beats, so it can be split. Look at the middle letters: n and t are two different consonants between two vowels.",
              "The rule says to split between them, so the reasons that fit are the two beats and the two different consonants.",
              "The other reasons do not fit: there is no double letter, lan is not a word, and nt does not make one sound."
            ],
            misconception: "A common mix-up is picking a rule because it sounds familiar. Check that the rule matches the letters in the word.",
            why: "The answers are \"Two different consonants, n and t, sit between the vowels, so the split goes between them.\" and \"Lantern has two beats, so it can be split.\" Lantern has no double letter, lan is not a word, and n and t do not make one sound together."
          },
          {
            id: "SK-GUM3-8-C14",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: [],
            prompt: "Match each word to the rule that tells where to split it.",
            cols: ["Two different consonants", "Double letter", "Two smaller words", "Letters that stay together"],
            rows: [
              { text: "pocket", answer: 3 },
              { text: "candle", answer: 0 },
              { text: "football", answer: 2 },
              { text: "hammer", answer: 1 }
            ],
            clue: "Say each word and look at the middle letters. Ask which rule fits them best.",
            hints: [
              "Say each word and look at the middle letters. Ask which rule fits them best.",
              "Start with the word you are surest about. Then decide the rest one at a time.",
              "Football is made of two smaller words. Decide the other rows."
            ],
            how: [
              "Look at the middle letters of each word.",
              "Candle has the different consonants n and d. Hammer has the double letter m.",
              "Football is made of foot and ball. Pocket has ck, which makes one sound and stays together."
            ],
            misconception: "A common mix-up is matching by how the word starts. Look at the middle letters.",
            why: "Candle has two different consonants, n and d. Hammer has a double m. Football is made of two smaller words. Pocket has the letters ck, which stay together."
          },
          {
            id: "SK-GUM3-8-C15",
            type: "dropdown",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
            ],
            passages: [],
            prompt: "Magnet has to be broken at the end of a line. Which break is right? A | shows where the first line ends.",
            text: "{0}",
            slots: [
              {
                options: ["mag- | net", "ma- | gnet", "magn- | et"],
                answer: 0
              }
            ],
            clue: "Say the word and look at the letters in the middle. Ask which rule fits them.",
            hints: [
              "Say the word and look at the letters in the middle. Ask which rule fits them.",
              "Find the consonants between the two vowels. Then check where each choice puts the break.",
              "Magn- | et leaves two consonants with the first part and pulls them from the e. Decide between the other two."
            ],
            how: [
              "Magnet has two beats, so it can be split.",
              "The letters g and n are two different consonants between two vowels, so the split goes between them.",
              "The answer is mag- | net."
            ],
            misconception: "A common mix-up is putting the break after the first vowel. When two different consonants sit in the middle, split between them.",
            why: "The answer is mag- | net. The consonants g and n are different, so the split goes between them. Ma- | gnet puts both consonants on the second line, and magn- | et puts both on the first line."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM3-8-S01",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: [],
      prompt: "Tell whether the writer broke each word properly. A bar (|) stands for the line break.",
      cols: ["Broken properly", "Broken badly"],
      rows: [
        { text: "tur- | key", answer: 0 },
        { text: "ro- | cket", answer: 1 },
        { text: "ten- | nis", answer: 0 },
        { text: "clo- | ck", answer: 1 }
      ],
      clue: "Clap each word first. Then look at the letters in the middle.",
      hints: [
        "Clap each word first. Then look at the letters in the middle.",
        "Say each word whole and check the break. Remember that a word with one beat is never split.",
        "Clock has one beat, so it is not split. Decide the other rows."
      ],
      how: [
        "Clap each word and look at the middle letters.",
        "Turkey has the consonants r and k, so tur- | key is correct. Tennis has a double n, so ten- | nis is correct.",
        "Rocket should be rock- | et, because ck stays together. Clock has one beat, so it is never split."
      ],
      misconception: "A common mix-up is splitting after the first vowel. Check the letters in the middle against the rules.",
      why: "Tur- | key and ten- | nis are correct. Rocket should be rock- | et, because the letters ck stay together. Clock has only one syllable, so it should not be split at all.",
      like: ["SK-GUM3-8-P3"]
    },
    {
      id: "SK-GUM3-8-S02",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: [],
      prompt: "Two of these words were divided at the right spot for a line break. Pick them. A bar (|) shows the break.",
      pick: 2,
      choices: [
        { text: "bu- | tter" },
        { text: "cir- | cus", correct: true },
        { text: "hel- | p" },
        { text: "sun- | flower", correct: true },
        { text: "gla- | ss" }
      ],
      clue: "Clap each word. Then use the rules: two consonants, a double letter, or two small words.",
      hints: [
        "Clap each word. Then use the rules: two consonants, a double letter, or two small words.",
        "Say each word whole. Ask whether the break follows a rule, and whether the word has more than one beat.",
        "Help has only one beat, so it cannot be split. Decide about the other four."
      ],
      how: [
        "Clap each word and check the break.",
        "Circus has the consonants r and c, so it splits between them. Sunflower is made of sun and flower.",
        "Butter should be but- | ter, glass has one beat, and help has one beat."
      ],
      misconception: "A common mix-up is thinking every word can be split. A word with one beat never is.",
      why: "The answers are cir- | cus and sun- | flower. Circus splits between the consonants r and c. Sunflower is made of two smaller words. Butter should be but- | ter, and glass and help each have only one syllable.",
      like: ["SK-GUM3-8-P4"]
    },
    {
      id: "SK-GUM3-8-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: ["p4"],
      prompt: "The writer made a bad break in sentence 4 of the draft. Pick the better one. A bar (|) marks where the line stops.",
      text: "Better: {0}",
      slots: [
        {
          options: ["bon- | fire", "bonf- | ire", "bo- | nfire"],
          answer: 0
        }
      ],
      clue: "Say the whole word. Ask whether it is made of smaller words.",
      hints: [
        "Say the whole word. Ask whether it is made of smaller words.",
        "Read sentence 4 and say each choice. Check where the smaller words meet.",
        "Bo- | nfire starts the break before the first small word is done. Decide between the other two."
      ],
      how: [
        "Say the whole word: bonfire.",
        "It is made of the smaller words bon and fire. A word made of two smaller words is split between them.",
        "The answer is bon- | fire. Bonf- | ire and bo- | nfire cut a smaller word apart."
      ],
      misconception: "A common mix-up is splitting where the line happens to run out. Split where the smaller words meet.",
      why: "The answer is bon- | fire. Bonfire is made of the smaller words bon and fire, so it splits between them. Bonf- | ire and bo- | nfire cut a smaller word apart.",
      like: ["SK-GUM3-8-C03"]
    },
    {
      id: "SK-GUM3-8-S04",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: ["p4"],
      prompt: "Which version of sentence 5 puts the hyphen where it belongs? A bar (|) shows the line break.",
      choices: [
        { text: "We skipped a flat peb | -ble across the lake." },
        { text: "We skipped a flat pe- | bble across the lake." },
        { text: "We skipped a flat pebble- | across the lake." },
        { text: "We skipped a flat peb- | ble across the lake.", correct: true }
      ],
      clue: "Check where the hyphen sits. Remember which line it belongs on.",
      hints: [
        "Check where the hyphen sits. Remember which line it belongs on.",
        "Read sentence 5 and find the | mark. Ask which side of the mark the hyphen is on.",
        "The draft has the hyphen after the | mark, and it needs to be fixed. Check the other three."
      ],
      how: [
        "The hyphen belongs at the end of the first line, before the | mark.",
        "Pebble has a double b in the middle, so it splits between the two b's: peb- | ble.",
        "The answer is \"We skipped a flat peb- | ble across the lake.\" Pe- | bble puts both b's on the second line, and pebble- | does not split the word."
      ],
      misconception: "A common mix-up is putting the hyphen at the start of the next line. The hyphen goes at the end of the first line.",
      why: "The answer is \"We skipped a flat peb- | ble across the lake.\" The hyphen goes at the end of the first line, and the double b is split between the two letters. The draft has the hyphen on the second line, pe- | bble splits in the wrong place, and pebble- | does not split the word at all.",
      like: ["SK-GUM3-8-C04"]
    },
    {
      id: "SK-GUM3-8-S05",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: ["p4"],
      prompt: "Both parts go together. Do Part A first.",
      partA: {
        prompt: "Sentence 6 breaks a word that has no place to break. What is the best repair?",
        choices: [
          { text: "Shift the hyphen to the front of line two." },
          { text: "Leave it whole and begin it down on the following line.", correct: true },
          { text: "Cut it after its opening pair of letters and add a hyphen there." },
          { text: "Mark both lines with a long dash." }
        ]
      },
      partB: {
        prompt: "Pick the rule that supports your choice in Part A.",
        choices: [
          { text: "Small words inside a longer word show the break spot." },
          { text: "Sound pairs like th and sh must not be pulled apart." },
          { text: "A one-beat word cannot be divided.", correct: true },
          { text: "The mark for a break belongs on the upper line." }
        ]
      },
      clue: "Clap the word that is split in sentence 6. Count the beats.",
      hints: [
        "Clap the word that is split in sentence 6. Count the beats.",
        "For Part A, say the word and clap it. For Part B, think about which fact tells you when a word cannot be split.",
        "In Part A, moving the hyphen would still leave the word split. Check the other choices."
      ],
      how: [
        "Part A: clap the word in sentence 6. Stream has one beat, so it has only one syllable.",
        "A word with one syllable cannot be split, so the whole word must go on the next line.",
        "Part A answer: \"Leave it whole and begin it down on the following line.\"",
        "Part B answer: \"A one-beat word cannot be divided.\""
      ],
      misconception: "A common mix-up is thinking any word can be split if the hyphen is in the right place. A word with one beat is never split.",
      why: "Part A: \"Leave it whole and begin it down on the following line.\" Part B: \"A one-beat word cannot be divided.\" Stream has only one beat, so it stays whole. Moving the hyphen, splitting after two letters, or adding a second hyphen still breaks the word. The other facts are true, but they do not explain this fix.",
      like: ["SK-GUM3-8-C05"]
    },
    {
      id: "SK-GUM3-8-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: ["p5"],
      prompt: "Which TWO sentences break a word at a bad spot? A bar (|) shows where the line stops.",
      targets: ["p5:1:2", "p5:1:3", "p5:2:1", "p5:2:3", "p5:3:1"],
      answer: ["p5:1:3", "p5:3:1"],
      pick: 2,
      clue: "Say each split word whole. Then check the break against the rules.",
      hints: [
        "Say each split word whole. Then check the break against the rules.",
        "Clap each split word. Ask whether the break follows a rule, and whether the word has more than one beat.",
        "Pump- | kin splits between the consonants m and p, which is correct. Check the other four sentences."
      ],
      how: [
        "Say each split word whole, clap it, and check the break.",
        "Cab- | bage, pep- | per and pump- | kin follow the rules.",
        "Carr- | ots should be car- | rots, between the double r. Flo- | or has only one beat, so it should not be split."
      ],
      misconception: "A common mix-up is thinking a split is right if it comes after a few letters. Check the break against the rules.",
      why: "The wrong splits are in \"Next, I sort the fresh carr- | ots by size.\" and \"Then I take out the trash and sweep the flo- | or.\" Carrots should be car- | rots, and floor has one syllable. Cab- | bage, pep- | per and pump- | kin are split correctly.",
      like: ["SK-GUM3-8-C06"]
    },
    {
      id: "SK-GUM3-8-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: [],
      prompt: "Find the TWO words whose line break is in a bad spot. A bar (|) shows the break.",
      pick: 2,
      choices: [
        { text: "bu- | tton", correct: true },
        { text: "sun- | set" },
        { text: "tra- | ctor", correct: true },
        { text: "mar- | ket" },
        { text: "yel- | low" }
      ],
      clue: "Clap each word. Then use the rules: two different consonants, a double letter, or two smaller words.",
      hints: [
        "Clap each word. Then use the rules: two different consonants, a double letter, or two smaller words.",
        "Say each word whole, then check the letters at the break. Ask whether the break follows a rule.",
        "Sun- | set is made of two smaller words, so it is correct. Decide about the other four."
      ],
      how: [
        "Say each word whole and check the break.",
        "Tractor has c and t between vowels, so it should be trac- | tor. Button has a double t, so it should be but- | ton.",
        "Yel- | low, sun- | set and mar- | ket follow the rules."
      ],
      misconception: "A common mix-up is splitting after the first vowel. Look at the consonants and split by the rules.",
      why: "The answers are tra- | ctor and bu- | tton. Tractor should be trac- | tor, between the consonants c and t. Button should be but- | ton, between the double t. Yel- | low, sun- | set and mar- | ket follow the rules.",
      like: ["SK-GUM3-8-C07"]
    },
    {
      id: "SK-GUM3-8-S08",
      type: "mc",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: [],
      prompt: "Pick the best place to break puppy when the line runs out. A bar (|) is the break.",
      choices: [
        { text: "pu- | ppy" },
        { text: "pup- | py", correct: true },
        { text: "pupp- | y" },
        { text: "p- | uppy" }
      ],
      clue: "Look for the two matching letters in the middle. Where should the break go?",
      hints: [
        "Look for the two matching letters in the middle. Where should the break go?",
        "Say the word and find the two matching letters. Then check where each choice puts the break.",
        "P- | uppy leaves a single letter alone on the first line. Check the other three."
      ],
      how: [
        "Find the two matching letters in puppy: pp.",
        "When the same consonant comes twice in the middle, the split goes between the two letters.",
        "The answer is pup- | py. The other choices put the break before both p's, after both p's, or after the first letter."
      ],
      misconception: "A common mix-up is keeping both matching letters together. Split between them.",
      why: "The answer is pup- | py. The same consonant comes twice in the middle, so the split goes between the two p's. Pu- | ppy puts both p's on the second line, pupp- | y puts both on the first line, and p- | uppy leaves one letter alone.",
      like: ["SK-GUM3-8-C08"]
    },
    {
      id: "SK-GUM3-8-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: [],
      prompt: "Who broke the word correctly?",
      stem: [
        "Mother does not fit on the first line.",
        "Lia broke it as mo- | ther.",
        "Omar broke it as moth- | er."
      ],
      choices: [
        { text: "Lia is right, because a break should come right after a vowel." },
        { text: "Lia is right, because t and h are two consonants that must be split." },
        { text: "Omar is right, because th makes one sound and stays together.", correct: true },
        { text: "Both are right, because a word can be split in any place." }
      ],
      clue: "Check each split against the rules.",
      hints: [
        "Check each split against the rules.",
        "Look at the letters on each side of the break in both splits. Ask which split pulled a pair of letters apart.",
        "In Lia's split, the t and the h are on different lines. Check what that means."
      ],
      how: [
        "Mother has two beats, so it can be split.",
        "The letters th make one sound, so they stay together. The split goes after them: moth- | er.",
        "Omar kept th together, and Lia pulled it apart. The answer is \"Omar is right, because th makes one sound and stays together.\""
      ],
      misconception: "A common mix-up is splitting right after the first vowel. The letters th stay together.",
      why: "The answer is \"Omar is right, because th makes one sound and stays together.\" Mother splits as moth- | er. Lia pulled the t and the h apart.",
      like: ["SK-GUM3-8-C09"]
    },
    {
      id: "SK-GUM3-8-S10",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: [],
      prompt: "Break each word so it can wrap onto a new line. A bar (|) shows the break.",
      text: "{0} for happen; {1} for doorbell.",
      slots: [
        {
          options: ["ha- | ppen", "hap- | pen", "happ- | en"],
          answer: 1
        },
        {
          options: ["door- | bell", "doo- | rbell", "doorb- | ell"],
          answer: 0
        }
      ],
      clue: "Say each word whole. Ask whether it has a double letter, or whether it is made of two smaller words.",
      hints: [
        "Say each word whole. Ask whether it has a double letter, or whether it is made of two smaller words.",
        "Look at the middle of each word. Then check where each choice puts the break.",
        "Doo- | rbell cuts the first small word in half. Decide the rest."
      ],
      how: [
        "Happen has a double p in the middle, so it is split between the two p's.",
        "Doorbell is made of the smaller words door and bell, so it is split between them.",
        "The answers are hap- | pen and door- | bell."
      ],
      misconception: "A common mix-up is using the same rule for both words. Happen has a double letter, and doorbell is made of two smaller words.",
      why: "The answers are hap- | pen and door- | bell. Happen has a double p, so it splits between the two p's. Doorbell is made of door and bell, so it splits between the two smaller words.",
      like: ["SK-GUM3-8-C10"]
    },
    {
      id: "SK-GUM3-8-S11",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: ["p6"],
      prompt: "Select the TWO sentences that have a word split in the wrong way. The | mark shows where the line ends.",
      targets: ["p6:1:3", "p6:2:1", "p6:2:2", "p6:2:3", "p6:3:1"],
      answer: ["p6:2:2", "p6:3:1"],
      pick: 2,
      clue: "Say each split word whole. Then check the break against the rules.",
      hints: [
        "Say each split word whole. Then check the break against the rules.",
        "Clap each split word. Ask whether the break comes between two consonants, between double letters, or between two smaller words.",
        "Rain- | coat splits between two smaller words, so it is correct. Check the other four sentences."
      ],
      how: [
        "Say each split word whole, clap it, and check the break.",
        "Tur- | tles splits between r and t. Cat- | tails and bot- | tle split between double letters. Rain- | coat splits between two smaller words.",
        "Mi- | nnow should be min- | now, between n and n. Sunl- | ight should be sun- | light, between the two smaller words."
      ],
      misconception: "A common mix-up is thinking a split is right if the first part looks like a word. Check the break against the rules.",
      why: "The wrong splits are in \"Maya spotted a tiny mi- | nnow near the rocks.\" and \"The sun was bright, and the sunl- | ight sparkled on the pond.\" Minnow should be min- | now, and sunlight should be sun- | light. Tur- | tles, cat- | tails, bot- | tle and rain- | coat are split correctly.",
      like: ["SK-GUM3-8-C11"]
    },
    {
      id: "SK-GUM3-8-S12",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: [],
      prompt: "Which break of feathers keeps its letter pairs together? Use the bar (|) as the line end.",
      choices: [
        { text: "feath- | ers", correct: true },
        { text: "feat- | hers" },
        { text: "fea- | thers" },
        { text: "feathe- | rs" }
      ],
      clue: "Look for letters that make one sound together. Those letters stay on the same line.",
      hints: [
        "Look for letters that make one sound together. Those letters stay on the same line.",
        "Say feathers and look at the letters on each side of every break. Ask which break pulls a pair apart.",
        "Feathe- | rs leaves two letters alone on a line. Check the other three."
      ],
      how: [
        "Say feathers. It has two beats, so it can be split.",
        "The letters th make one sound, so they stay together. The split goes after them: feath- | ers.",
        "The answer is feath- | ers. Feat- | hers and fea- | thers pull the t and h apart, and feathe- | rs leaves two letters alone."
      ],
      misconception: "A common mix-up is splitting between the t and the h. The letters th make one sound and stay together.",
      why: "The answer is feath- | ers. The letters th make one sound and stay together, so the split goes after them. Feat- | hers and fea- | thers pull the t and h apart, and feathe- | rs leaves two letters alone.",
      like: ["SK-GUM3-8-C12"]
    },
    {
      id: "SK-GUM3-8-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: [],
      prompt: "Name the TWO best reasons den- | tist is a fine break.",
      pick: 2,
      choices: [
        { text: "Its middle holds a matching pair." },
        { text: "N and t blend into a single sound that cannot be pulled apart." },
        { text: "N and t are unlike letters standing among vowels, which is where the word breaks.", correct: true },
        { text: "It is built from small words, den and tist." },
        { text: "More than one beat means a break is allowed.", correct: true }
      ],
      clue: "Look at the middle of dentist. Check each reason against the word.",
      hints: [
        "Look at the middle of dentist. Check each reason against the word.",
        "Say the word and clap it. Then check each reason against the word.",
        "Dentist does not have any double letters. Decide about the other four."
      ],
      how: [
        "Clap dentist: two beats, so it can be split. Look at the middle letters: n and t are two different consonants between two vowels.",
        "The rule says to split between them, so the reasons that fit are the two beats and the two different consonants.",
        "The other reasons do not fit: there is no double letter, tist is not a word, and nt does not make one sound."
      ],
      misconception: "A common mix-up is picking a rule because it sounds familiar. Check that the rule matches the letters in the word.",
      why: "The answers are \"N and t are unlike letters standing among vowels, which is where the word breaks.\" and \"More than one beat means a break is allowed.\" Dentist has no double letter, tist is not a word, and n and t do not make one sound together.",
      like: ["SK-GUM3-8-C13"]
    },
    {
      id: "SK-GUM3-8-S14",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: [],
      prompt: "Sort each word by the rule that decides its break.",
      cols: [
        "Unlike consonants in the middle",
        "Matching pair in the middle",
        "Built from small words",
        "Sound pair kept whole"
      ],
      rows: [
        { text: "chicken", answer: 3 },
        { text: "pancake", answer: 2 },
        { text: "problem", answer: 0 },
        { text: "button", answer: 1 }
      ],
      clue: "Say each word and look at the middle letters. Ask which rule fits them best.",
      hints: [
        "Say each word and look at the middle letters. Ask which rule fits them best.",
        "Start with the word you are surest about. Then decide the rest one at a time.",
        "Pancake is made of two smaller words. Decide the other rows."
      ],
      how: [
        "Look at the middle letters of each word.",
        "Problem has the different consonants b and l. Button has the double letter t.",
        "Pancake is made of pan and cake. Chicken has ck, which makes one sound and stays together."
      ],
      misconception: "A common mix-up is matching by how the word starts. Look at the middle letters.",
      why: "Problem has two different consonants, b and l. Button has a double t. Pancake is made of two smaller words. Chicken has the letters ck, which stay together.",
      like: ["SK-GUM3-8-C14"]
    },
    {
      id: "SK-GUM3-8-S15",
      type: "dropdown",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks"
      ],
      passages: [],
      prompt: "Pick how insect should break when the line runs out. A bar (|) marks it.",
      text: "Break it as {0}",
      slots: [
        {
          options: ["in- | sect", "ins- | ect", "i- | nsect"],
          answer: 0
        }
      ],
      clue: "Say the word and look at the letters in the middle. Ask which rule fits them.",
      hints: [
        "Say the word and look at the letters in the middle. Ask which rule fits them.",
        "Find the consonants between the two vowels. Then check where each choice puts the break.",
        "I- | nsect leaves one letter alone on the first line. Decide between the other two."
      ],
      how: [
        "Insect has two beats, so it can be split.",
        "The letters n and s are two different consonants between two vowels, so the split goes between them.",
        "The answer is in- | sect."
      ],
      misconception: "A common mix-up is putting the break after the first vowel. When two different consonants sit in the middle, split between them.",
      why: "The answer is in- | sect. The consonants n and s are different, so the split goes between them. I- | nsect leaves one letter alone, and ins- | ect puts both consonants on the first line.",
      like: ["SK-GUM3-8-C15"]
    }
  ],
  addons: {
    "SK-GUM3-8-P1": {
      hints: [
        "Clap the word. Then look at the letters in the middle and at where the hyphen sits.",
        "Say doctor out loud. Check where the hyphen is, and which letters sit on each side of the break.",
        "Doctor has two beats, so a reason that calls it one syllable cannot be right. Decide about the other three."
      ],
      how: [
        "Clap doctor: two beats, so it can be split.",
        "The letters c and t are two different consonants between vowels, so the split goes between them. The hyphen is at the end of the first line.",
        "The answer is \"Yes, because it is split between the consonants c and t.\""
      ],
      misconception: "A common mix-up is thinking the hyphen starts the next line. The hyphen goes at the end of the first line."
    },
    "SK-GUM3-8-P2": {
      hints: [
        "Clap each word. A word can only be split if it has more than one beat.",
        "Say each word and count the beats. Remember that a word with one beat is never split.",
        "Bright has only one beat. Decide about the other three."
      ],
      how: [
        "Clap each word and count the beats.",
        "Carpet has two beats, car and pet, so it can be split.",
        "School, bright and friend each have one beat, so none of them can be split."
      ],
      misconception: "A common mix-up is thinking a long-looking word has many beats. Count the beats, not the letters."
    },
    "SK-GUM3-8-P3": {
      hints: [
        "Clap each word first. Then look for two consonants or a double letter in the middle.",
        "Check each row one at a time. Ask whether the break follows a rule, and whether the word has more than one beat.",
        "Bright has only one beat, so it is not split. Decide the other rows."
      ],
      how: [
        "Clap each word and look at the middle letters.",
        "Muffin and summer have double letters, and the splits fall between them.",
        "Winter should be win- | ter, and bright has one beat, so it should not be split."
      ],
      misconception: "A common mix-up is thinking any break is fine if the hyphen is there. The break has to follow a rule."
    },
    "SK-GUM3-8-P4": {
      hints: [
        "Clap each word. Then use the rules: two consonants, a double letter, or two small words.",
        "Say each word whole, then check the break. Ask whether the break follows a rule.",
        "Jump has only one beat, so it is not split. Decide about the other four."
      ],
      how: [
        "Clap each word and check the break.",
        "Basket splits between s and k. Popcorn is made of pop and corn.",
        "Letter should be let- | ter, monkey should be mon- | key, and jump cannot be split."
      ],
      misconception: "A common mix-up is splitting before a double letter. The split goes between the two letters."
    },
    "SK-GUM3-8-P5": {
      hints: [
        "Clap the word. Then use the split rules from the lesson.",
        "Say birthday whole and ask whether it is made of two smaller words. Check where each choice puts the break.",
        "Birthd- | ay cuts the second small word in half. Decide between the other two."
      ],
      how: [
        "Say the whole word: birthday.",
        "It is made of the smaller words birth and day, so the split goes between them.",
        "The answer is birth- | day. Bir- | thday breaks up th."
      ],
      misconception: "A common mix-up is splitting th apart. The letters th make one sound and stay together."
    }
  },
  /* B6:core:end */
  test: [
    { id: "SK-GUM3-8-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Four words are split at the ends of lines. Which word is split correctly?",
      stem: ["On Saturday we had a pic-", "nic by the lake. Dad set up a la-", "dder to hang the silv-", "er lights. Each plate had a napk-", "in on it."],
      choices: [
        { text: "picnic", correct: true },
        { text: "ladder" },
        { text: "silver" },
        { text: "napkin" }
      ],
      clue: "Look at the letters in the middle of each split word. Is each break exactly between two consonants or between double letters?",
      why: "The answer is picnic. It is split between the consonants c and n: pic-nic. Ladder should be lad-der (between the double d), silver should be sil-ver (between l and v), and napkin should be nap-kin (between p and k)." },
    { id: "SK-GUM3-8-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "The word butterfly is split at the end of the first line. The | mark shows where a line ends. Which is another correct way to split it?",
      stem: ["The puppy chased a butter-", "fly across the yard."],
      choices: [
        { text: "but- | terfly", correct: true },
        { text: "butt- | erfly" },
        { text: "bu- | tterfly" },
        { text: "butterf- | ly" }
      ],
      clue: "Butterfly has a double letter in it. It is also made of two smaller words. Which split follows a rule?",
      why: "The answer is but- | terfly. Butterfly has a double t, and the rule says to split between the two t's. (The split in the passage, butter- | fly, is also correct, because it falls between the two smaller words butter and fly.) The other splits do not follow any rule." },
    { id: "SK-GUM3-8-T3", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Choose the TWO words that should never be split at the end of a line.",
      choices: [
        { text: "night", correct: true },
        { text: "clown", correct: true },
        { text: "hammer" },
        { text: "candy" },
        { text: "marble" }
      ],
      clue: "Clap each word. Which ones have only one beat?",
      why: "The answers are night and clown. Each has only one syllable, so it can never be split. Hammer (ham-mer), candy (can-dy) and marble (mar-ble) each have two syllables." },
    { id: "SK-GUM3-8-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Each word was split at the end of a line. The | mark shows where the first line ends. Is each split correct?",
      cols: ["Correct", "Not correct"],
      rows: [
        { text: "hel- | met", answer: 0 },
        { text: "kit- | ten", answer: 0 },
        { text: "pi- | llow", answer: 1 },
        { text: "cact- | us", answer: 1 }
      ],
      clue: "Look at the middle of each word. Is the break exactly between two consonants or between double letters?",
      why: "Hel- | met splits between the consonants l and m, and kit- | ten splits between the double t, so both are correct. Pillow should be pil- | low (between the double l), and cactus should be cac- | tus (between c and t)." },
    { id: "SK-GUM3-8-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "A student split the word rainbow at the end of a line. What is wrong?",
      stem: ["Grandpa and I watched the rain", "-bow over the lake."],
      choices: [
        { text: "The hyphen should be at the end of the first line.", correct: true },
        { text: "Rainbow has only one syllable, so it cannot be split." },
        { text: "The word should be split between rai and nbow." },
        { text: "A hyphen should never be used to split a word." }
      ],
      clue: "Check where the word is split. Then look at where the hyphen was placed.",
      why: "The answer is \"The hyphen should be at the end of the first line.\" Rainbow is split in the right place, between the two smaller words rain and bow, but the hyphen was put at the start of the next line. It should read rain- on the first line and bow on the next." }
  ]
});

/* Lessons: 3.L.GC.1 Grammar, usage & mechanics (GUM chart, grade 3 Reinforce rows, part 2). Schema: docs/SPEC.md §8. */

/* ---------- GUM2-1: simple verb tenses ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:form-and-use-simple-verb-tenses",
  title: "Verb tenses: past, present and future",
  teach: {
    big: "A verb's tense tells when something happens: in the past, in the present, or in the future.",
    points: [
      "Past tense tells about something that already happened. Many past tense verbs end in -ed: walked, played.",
      "Present tense tells about something that happens now or happens again and again: I walk, she walks.",
      "Future tense tells about something that has not happened yet. Put the helping word will before the verb: will walk. After will, use the plain verb with no ending.",
      "Time words are clues. Yesterday and last week point to the past. Every day points to the present. Tomorrow and next week point to the future."
    ],
    words: [
      { term: "verb", means: "a word that shows an action, like jump or walk" },
      { term: "tense", means: "the form of a verb that shows when the action happens" }
    ],
    example: {
      label: "Example",
      lines: ["Yesterday, I walked to the park.", "Every day, I walk to the park.", "Tomorrow, I will walk to the park."],
      note: "The time word changes, so the verb changes too: walked (past), walk (present), will walk (future)."
    },
    tip: "On the test, you may choose the verb that fits a sentence. Find the time word first, then pick the verb that matches it."
  },
  learn: [
    {
      show: ["Last summer, our class ___ seeds in the school garden. (plant, planted, will plant)"],
      ask: "Which verb fits the sentence?",
      steps: [
        "Look for a time word. The sentence says last summer.",
        "Last summer already happened, so the verb must be in the past tense.",
        "Many past tense verbs end in -ed. Find the choice with that ending."
      ],
      answer: "Planted. Last summer, our class planted seeds in the school garden."
    },
    {
      show: ["Next Saturday, Aunt Lena ___ us at our new house. (visited, will visit, will visited)"],
      ask: "Which verb fits the sentence?",
      steps: [
        "Find the time word: next Saturday.",
        "Next Saturday has not happened yet, so the verb must be in the future tense.",
        "Future tense uses will plus the plain verb. Will visited mixes the past and the future, so it is wrong."
      ],
      answer: "Will visit. Next Saturday, Aunt Lena will visit us at our new house."
    },
    {
      show: ["Every Tuesday, the mail carrier ___ a package to our door. (delivers, delivered, will deliver)"],
      ask: "Which verb fits the sentence?",
      steps: [
        "Find the time clue: Every Tuesday. It happens again and again, so the verb is in the present tense.",
        "One person, the mail carrier, does the action. A present tense verb for one person usually adds -s.",
        "Delivered tells about the past, and will deliver tells about the future. Delivers is the present."
      ],
      answer: "Delivers. Every Tuesday, the mail carrier delivers a package to our door."
    }
  ],
  parent: "At dinner, take turns telling one thing you did yesterday, one thing you do every day and one thing you will do tomorrow. Listen together for the verb in each sentence.",
  passages: [
    /* B7b:passages:start */
    {
      "id": "p1",
      "title": "The Recycling Bins",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last month, Room 12 began a recycling project at school.",
          "(2) Every morning, Ms. Duran checks the blue bins in the hall.",
          "(3) Yesterday, Jada will count the cans and bottles in the gym."
        ],
        [
          "(4) Today, two helpers sort the old paper into tall stacks.",
          "(5) Last Monday, we weighed the stacks on a big scale.",
          "(6) Next week, the class collects the cardboard from every room."
        ],
        [
          "(7) Tomorrow, Mr. Boyd will pick up the heavy bins.",
          "(8) Every Friday, our class paints a new poster for the hall.",
          "(9) Last Friday, the poster showed a smiling bottle with big eyes.",
          "(10) Soon, our whole school will join the project."
        ]
      ]
    },
    {
      "id": "p2",
      "title": "Fix-It Day at the Park",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Every spring, our neighbors gather at Maple Park for the big Fix-It Day.",
          "(2) Last Saturday, Mr. Reyes paints the old picnic tables green.",
          "(3) Tomorrow, the Scouts planted flowers near the gate.",
          "(4) Today, Ana's mom hands out gloves to the helpers.",
          "(5) Two weeks ago, we repaired the squeaky swings.",
          "(6) Next month, a crew will build a new bench by the pond."
        ],
        [
          "(7) Today, I carry water to the thirsty workers.",
          "(8) Yesterday, we cleaned the brushes at the pump.",
          "(9) Last week, the mayor joins our picnic lunch.",
          "(10) Soon, everyone will see the new picnic area.",
          "(11) Every year, our park looks better than it did before."
        ]
      ]
    },
    {
      "id": "p3",
      "title": "The Rain Barrel",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last spring, my dad placed a rain barrel behind our house.",
          "(2) Every time it rains, water runs down the roof into the barrel.",
          "(3) Today, the barrel holds a lot of water for the whole garden.",
          "(4) Yesterday, we watered the tomato plants with a small can."
        ],
        [
          "(5) Tomorrow, my sister will draw a big fish on the side.",
          "(6) Last Sunday, I paint the lid bright blue.",
          "(7) Every evening, Dad checks the water level with a stick.",
          "(8) Next month, our neighbors will copy our rain barrel idea."
        ],
        [
          "(9) Today, our garden looks greener than last year.",
          "(10) We like our barrel because it saves water for the dry days."
        ]
      ]
    },
    {
      "id": "p4",
      "title": "The Lost-and-Found Box",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Every Monday, Mr. Sims opens the lost-and-found box in the lunchroom.",
          "(2) Last week, the box held three jackets and a lunch bag.",
          "(3) Yesterday, two students returned a blue scarf to its owner."
        ],
        [
          "(4) Today, Kiana lists all the lost items on a chart.",
          "(5) Last Tuesday, she tapes the chart by the office door.",
          "(6) Tomorrow, the helpers sorted the extra mittens by size."
        ],
        [
          "(7) Next Monday, our class will wash the old water bottles.",
          "(8) Every afternoon, Mr. Sims locks the box at the last bell.",
          "(9) Soon, the box will look neat and tidy again.",
          "(10) Many families smile when they find a missing coat."
        ]
      ]
    },
    {
      "id": "p5",
      "title": "Neighborhood Soup Supper",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Every November, our street holds a soup supper at the community hall.",
          "(2) Last year, neighbors carried twelve pots of soup to the tables.",
          "(3) Yesterday, Mrs. Hall stirs a huge pot of bean soup.",
          "(4) These days, the twins fold the paper napkins by the door.",
          "(5) Tomorrow, volunteers lined the long benches with cloths.",
          "(6) Three days ago, Mrs. Ortiz baked twenty loaves of warm bread for the supper."
        ],
        [
          "(7) Last night, I practiced my welcome speech in the mirror.",
          "(8) Soon, I welcomed the guests at the door.",
          "(9) Every year, the supper raises money for the food pantry.",
          "(10) Next November, we will serve even more soup to our hungry neighbors."
        ]
      ]
    },
    {
      "id": "p6",
      "title": "The Lemonade Test",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Three days ago, my cousin and I tested three kinds of lemonade in the backyard.",
          "(2) These days, the cups sit on the porch rail in the cool shade.",
          "(3) Two hours ago, we measured the sugar with a tiny spoon and a paper cup.",
          "(4) Later today, our neighbors will taste each cup and vote."
        ],
        [
          "(5) Last night, I mix the juice too fast.",
          "(6) Each day, Dad squeezes fresh lemons for us.",
          "(7) In two weeks, we will make a bigger batch."
        ],
        [
          "(8) Today, my cousin writes the labels on the cups.",
          "(9) Each time, the sweetest cup disappears before the others.",
          "(10) Each summer, our family sells lemonade by the road on hot days."
        ]
      ]
    }
    /* B7b:passages:end */
  ],
  practice: [
    { id: "SK-GUM2-1-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the verb that correctly completes the sentence.",
      text: "Yesterday, Rosa {0} her bike all the way to the library.",
      slots: [ { options: ["pedals", "pedaled", "will pedal"], answer: 1 } ],
      clue: "Find the time word. Did this already happen, does it happen now, or has it not happened yet?",
      why: "The answer is pedaled. Yesterday already happened, so the verb must be in the past tense. Pedaled ends in -ed, which shows the past." },
    { id: "SK-GUM2-1-P2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence tells about something that will happen in the future?",
      choices: [
        { text: "The team will practice after school on Monday.", correct: true },
        { text: "The team practiced after school on Monday." },
        { text: "The team practices after school on Mondays." },
        { text: "The team cheered after the big game on Monday." }
      ],
      clue: "Future tense tells about something that has not happened yet. Look for the helping word that shows the future.",
      why: "The answer is \"The team will practice after school on Monday.\" Will practice is the future tense. Practiced and cheered tell about the past, and practices tells about the present." },
    { id: "SK-GUM2-1-P3", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has a verb in the wrong tense.",
      options: [
        "Last night, we watched the stars from the porch.",
        "Tomorrow, my cousin will help me rake the leaves.",
        "Yesterday, Dad cooks soup for the whole family.",
        "Every Sunday, Grandma calls us on the phone.",
        "Next week, our class will visit the fire station."
      ],
      answer: [2], pick: 1,
      clue: "Check that the time word and the verb in each sentence match. A past time word needs a past tense verb.",
      why: "The answer is \"Yesterday, Dad cooks soup for the whole family.\" Yesterday is in the past, but cooks is present tense. It should say cooked." },
    { id: "SK-GUM2-1-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is the verb in each sentence in the past, present or future tense? Sort each sentence.",
      cols: ["Past", "Present", "Future"],
      rows: [
        { text: "Kofi locked the gate.", answer: 0 },
        { text: "Kofi will lock the gate.", answer: 2 },
        { text: "Kofi locks the gate every night.", answer: 1 },
        { text: "The frogs croaked at sunset.", answer: 0 },
        { text: "The frogs croak by the pond.", answer: 1 },
        { text: "The frogs will croak after the rain.", answer: 2 }
      ],
      clue: "Look at the verb. An -ed ending shows the past. The word will shows the future. If there is no will, a verb with no ending or with -s shows the present.",
      why: "Locked and croaked are past tense. Locks and croak are present tense. Will lock and will croak are future tense." },
    { id: "SK-GUM2-1-P5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the verbs that correctly complete the sentences.",
      text: "Last spring, we {0} a tiny tree in the yard. Next spring, we {1} another one.",
      slots: [
        { options: ["plant", "planted", "will plant"], answer: 1 },
        { options: ["planted", "will plant", "will planted"], answer: 1 }
      ],
      clue: "Each sentence has its own time word. Match each verb to its time word. Remember what kind of verb comes after will.",
      why: "The answers are planted and will plant. Last spring already happened, so it needs the past tense, planted. Next spring has not happened yet, so it needs the future tense, will plant. After will, use the plain verb, so will planted is wrong." }
  ],
  /* B7b:core:start */
  /* ---------- Expansion 2026-10-22, batch B7b (GUM Reinforce, second half) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test.
     Author log: docs/expansion-2026-10-22/batches/B7b-author-log.md. NOT ACCEPTED: needs independent review. */
  core: {
    "rev": "1",
    "sets": [
      {
        "title": "Set 1",
        "items": [
          {
            "ref": "SK-GUM2-1-P3"
          },
          {
            "ref": "SK-GUM2-1-P4"
          },
          {
            "id": "SK-GUM2-1-C03",
            "type": "mc",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "The verb in sentence 3 does not fit the clue at its start. Which revision is correct?",
            "choices": [
              {
                "text": "Yesterday, Jada counted the cans and bottles in the gym.",
                "correct": true
              },
              {
                "text": "Yesterday, Jada counts the cans and bottles in the gym."
              },
              {
                "text": "Yesterday, Jada will counted the cans and bottles in the gym."
              },
              {
                "text": "Yesterday, Jada counting the cans and bottles in the gym."
              }
            ],
            "clue": "Find the time clue at the start of the sentence. Decide whether it points to the past, the present or the future.",
            "hints": [
              "Find the time clue at the start of the sentence. Decide whether it points to the past, the present or the future.",
              "Read sentence 3 aloud. Say what time its first word shows, then listen for whether the verb tells the same time.",
              "A verb that ends in -ing with no helping word does not make a whole sentence here. Think about the other choices."
            ],
            "how": [
              "Sentence 3 begins with Yesterday, so it tells about the past. The verb will count is future tense, so it does not match.",
              "A regular verb shows the past by adding -ed: counted.",
              "The answer is \"Yesterday, Jada counted the cans and bottles in the gym.\" The other choices keep a wrong tense or mix two tenses."
            ],
            "misconception": "A common mix-up is keeping will because the work is part of a project plan. The clue Yesterday shows the past.",
            "why": "The answer is \"Yesterday, Jada counted the cans and bottles in the gym.\" Yesterday already happened, so the verb needs the past tense, counted. Counts is present tense, and will counted mixes the future and the past.",
            "like": [
              "SK-GUM2-1-S03"
            ]
          },
          {
            "id": "SK-GUM2-1-C04",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "The verb in sentence 6 does not fit the clue at its start. Choose the words that repair it.",
            "text": "Next week, the class {0} the cardboard from every room.",
            "slots": [
              {
                "options": [
                  "will collects",
                  "collected",
                  "will collect"
                ],
                "answer": 2
              }
            ],
            "clue": "Look at the time clue at the start of the sentence, then pick the verb form that tells the same time.",
            "hints": [
              "Look at the time clue at the start of the sentence, then pick the verb form that tells the same time.",
              "Say the clue out loud. Ask whether the cardboard has already been collected, is being collected now, or has not been collected yet.",
              "Collected ends in -ed, which shows the past. Think about the other two choices."
            ],
            "how": [
              "Next week has not happened yet, so the verb has to be future tense.",
              "Future tense uses will plus the plain verb.",
              "The answer is will collect. Collected is past tense, and will collects puts an ending on the verb after will."
            ],
            "misconception": "A common mix-up is adding -s after will. The word will already shows the future, so the verb stays plain.",
            "why": "The answer is will collect. Next week is in the future, so the verb needs will plus the plain verb. Collected is past tense, and will collects wrongly adds -s after will.",
            "like": [
              "SK-GUM2-1-S04"
            ]
          },
          {
            "id": "SK-GUM2-1-C05",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 7 says will pick and sentence 8 says paints. Why does only paints end in -s?",
            "choices": [
              {
                "text": "Paints is present tense for one class, but a verb after will keeps its plain form.",
                "correct": true
              },
              {
                "text": "Paints is past tense, and a verb after will must end in -ed instead."
              },
              {
                "text": "Pick is a plural verb because it follows Mr. Boyd, who is one person."
              },
              {
                "text": "Paints ends in -s because it comes after the word Every, which makes verbs plural."
              }
            ],
            "clue": "A verb changes for a reason. Look for the clue or the helping word in sentences 7 and 8.",
            "hints": [
              "A verb changes for a reason. Look for the clue or the helping word in sentences 7 and 8.",
              "In sentence 7, find the helping word in front of pick. In sentence 8, find the clue at the start and count who does the painting.",
              "Neither sentence 7 nor sentence 8 begins with a clue about the past. Think about the choices again."
            ],
            "how": [
              "Sentence 7 has the helping word will in front of pick. After will, the verb stays plain.",
              "Sentence 8 begins with Every Friday, so it tells what happens again and again. One class does the painting, so the verb adds -s.",
              "The answer is \"Paints is present tense for one class, but a verb after will keeps its plain form.\""
            ],
            "misconception": "A common mix-up is thinking an ending always means the past. Present tense can end in -s too.",
            "why": "The answer is \"Paints is present tense for one class, but a verb after will keeps its plain form.\" Every Friday points to the present, and one class does the painting, so paints takes -s. Will shows the future, so pick stays plain.",
            "like": [
              "SK-GUM2-1-S05"
            ]
          }
        ]
      },
      {
        "title": "Set 2",
        "items": [
          {
            "id": "SK-GUM2-1-C06",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Look at sentences 2 through 6. Mark the TWO sentences in which the verb and the clue point to different times.",
            "targets": [
              "p2:1:2",
              "p2:1:3",
              "p2:1:4",
              "p2:1:5",
              "p2:1:6"
            ],
            "answer": [
              "p2:1:2",
              "p2:1:3"
            ],
            "pick": 2,
            "clue": "Check each sentence in the list: the time clue must point to the same time as the verb.",
            "hints": [
              "Check each sentence in the list: the time clue must point to the same time as the verb.",
              "Take sentences 2 through 6 one at a time. Circle the clue, then circle the verb, and say whether they tell the same time.",
              "Sentence 5 has a clue and a verb that tell the same time. Think about the rest."
            ],
            "how": [
              "Check each sentence from 2 through 6 for a clue and a verb that agree.",
              "Sentence 2 begins with Last Saturday, which is past, but paints is present tense. Sentence 3 begins with Tomorrow, which is future, but planted is past tense.",
              "Sentences 4, 5 and 6 match: Today with hands, Two weeks ago with repaired, and Next month with will build."
            ],
            "misconception": "A common mix-up is picking a sentence just because its verb has an -ed ending. Compare the verb with its own clue.",
            "why": "The answers are sentences 2 and 3: \"Last Saturday, Mr. Reyes paints the old picnic tables green.\" and \"Tomorrow, the Scouts planted flowers near the gate.\" Last Saturday needs a past verb, and Tomorrow needs will plus a plain verb. Sentences 4, 5 and 6 match.",
            "like": [
              "SK-GUM2-1-S06"
            ]
          },
          {
            "id": "SK-GUM2-1-C07",
            "type": "ebsr",
            "points": 2,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "This question has two parts. Answer Part A, then Part B.",
            "partA": {
              "prompt": "What is wrong with sentence 9?",
              "choices": [
                {
                  "text": "The verb joins is present tense, but the clue Last week shows the past.",
                  "correct": true
                },
                {
                  "text": "The verb joins needs will, because the mayor has not come to the park yet."
                },
                {
                  "text": "The verb joins is spelled wrong, because it needs -es at the end."
                },
                {
                  "text": "The clue Last week is in the wrong place and belongs at the end."
                }
              ]
            },
            "partB": {
              "prompt": "Which rewrite of sentence 9 solves the problem named in Part A?",
              "choices": [
                {
                  "text": "Last week, the mayor joined our picnic lunch.",
                  "correct": true
                },
                {
                  "text": "Last week, the mayor will join our picnic lunch."
                },
                {
                  "text": "Last week, the mayor joins our picnic lunch yesterday."
                },
                {
                  "text": "Last week, the mayor will joined our picnic lunch."
                }
              ]
            },
            "clue": "Start with the time clue in sentence 9, then compare it with the verb.",
            "hints": [
              "Start with the time clue in sentence 9, then compare it with the verb.",
              "For Part A, decide what time the clue gives and what time the verb gives. For Part B, test each revision the same way.",
              "In Part B, a revision that keeps joins and adds another clue word still has a present tense verb. Think about the others."
            ],
            "how": [
              "Part A: sentence 9 begins with Last week, which is the past. The verb joins is present tense, so they do not match.",
              "Part B: a past tense verb fixes the mismatch. Joined ends in -ed.",
              "The answers are \"The verb joins is present tense, but the clue Last week shows the past.\" and \"Last week, the mayor joined our picnic lunch.\" The other revisions use future tense, mix tenses, or add a second clue."
            ],
            "misconception": "A common mix-up is changing the clue instead of the verb, or using will for something that is over. Match the verb to the clue.",
            "why": "Part A: \"The verb joins is present tense, but the clue Last week shows the past.\" Part B: \"Last week, the mayor joined our picnic lunch.\" Last week is over, so the verb needs the past tense. Will join is future, and will joined mixes two tenses.",
            "like": [
              "SK-GUM2-1-S07"
            ]
          },
          {
            "id": "SK-GUM2-1-C08",
            "type": "ms",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [],
            "prompt": "Pick the TWO sentences that use the past tense correctly.",
            "pick": 2,
            "choices": [
              {
                "text": "Last winter, my uncle shoveled snow from our long driveway.",
                "correct": true
              },
              {
                "text": "Two nights ago, a storm rattled the windows of our house.",
                "correct": true
              },
              {
                "text": "Tomorrow, my uncle shoveled the snow from the front steps."
              },
              {
                "text": "This week, my cousin will visited us at the lake."
              },
              {
                "text": "Every day, the baker bakes warm bread for the town."
              }
            ],
            "clue": "Look at the time clue in each sentence, then check that the verb shows the past.",
            "hints": [
              "Look at the time clue in each sentence, then check that the verb shows the past.",
              "Sort the sentences by clue first: past, present or future. Then check each verb. A sentence can have the right tense for its clue and still not be the past.",
              "Every day points to something that happens again and again. Decide which other choices the past clue fits."
            ],
            "how": [
              "Find the clue in each sentence and ask what time it shows.",
              "Last winter and Two nights ago are past clues, and shoveled and rattled end in -ed. Those two sentences use the past tense correctly.",
              "Tomorrow does not fit a past verb. Will visited mixes tenses. Bakes is present tense, so it is not the past."
            ],
            "misconception": "A common mix-up is picking any sentence that is written correctly. The question asks for the past tense only.",
            "why": "The answers are \"Last winter, my uncle shoveled snow from our long driveway.\" and \"Two nights ago, a storm rattled the windows of our house.\" Both have past clues and past tense verbs. Tomorrow needs the future, will visited mixes tenses, and bakes is present tense.",
            "like": [
              "SK-GUM2-1-S08"
            ]
          },
          {
            "id": "SK-GUM2-1-C09",
            "type": "mc",
            "points": 1,
            "dok": 1,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [],
            "prompt": "Which verb shows an action that is already over?",
            "choices": [
              {
                "text": "cleaned",
                "correct": true
              },
              {
                "text": "cleans"
              },
              {
                "text": "will clean"
              },
              {
                "text": "cleaning"
              }
            ],
            "clue": "Think about what each verb form says about time: the past, the present or the future.",
            "hints": [
              "Think about what each verb form says about time: the past, the present or the future.",
              "Say each choice in a sentence about yesterday and listen for the one that fits.",
              "Will is a helping word for things that have not happened yet. Think about the other choices."
            ],
            "how": [
              "Past tense tells about something that is over.",
              "A regular verb adds -ed for the past, so cleaned tells about the past.",
              "The answer is cleaned. Cleans is present, will clean is future, and cleaning has no helping word."
            ],
            "misconception": "A common mix-up is thinking any verb with an ending is past. Only -ed shows the past for a regular verb.",
            "why": "The answer is cleaned. Cleaned ends in -ed, so it tells about something that already happened. Cleans is present tense, will clean is future tense, and cleaning is not a past tense verb.",
            "like": [
              "SK-GUM2-1-S09"
            ]
          },
          {
            "id": "SK-GUM2-1-C10",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Ben says sentence 5 should be \"Two weeks ago, we repair the squeaky swings.\" Why is Ben wrong?",
            "choices": [
              {
                "text": "Two weeks ago is over, so the verb must end in -ed.",
                "correct": true
              },
              {
                "text": "The swings are still squeaky today, so the verb has to stay present."
              },
              {
                "text": "A verb that follows we always keeps the plain form with no ending."
              },
              {
                "text": "The word we is plural, so the sentence needs will before the verb."
              }
            ],
            "clue": "To judge someone's idea, ask what the time clue shows. Then check whether his verb shows the same time.",
            "hints": [
              "To judge someone's idea, ask what the time clue shows. Then check whether his verb shows the same time.",
              "Find the time clue in sentence 5 and say what time it shows.",
              "How the swings are today does not change the time that the clue words show. Think about the other choices."
            ],
            "how": [
              "Find the clue in sentence 5: Two weeks ago. That is a time that is over.",
              "A time that is over needs a past tense verb. For a regular verb, that means -ed: repaired.",
              "The answer is \"Two weeks ago is over, so the verb must end in -ed.\" Ben's repair is present tense, and the word we does not decide the tense."
            ],
            "misconception": "A common mix-up is letting the picture in your head decide the tense. The time clue decides it.",
            "why": "The answer is \"Two weeks ago is over, so the verb must end in -ed.\" Ben's version, we repair, is present tense and does not match the clue. The word we can go with a past, present or future verb.",
            "like": [
              "SK-GUM2-1-S10"
            ]
          }
        ]
      },
      {
        "title": "Set 3",
        "items": [
          {
            "id": "SK-GUM2-1-C11",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Select the TWO sentences about a time that has not arrived.",
            "targets": [
              "p3:1:3",
              "p3:1:4",
              "p3:2:1",
              "p3:2:3",
              "p3:2:4",
              "p3:3:1"
            ],
            "answer": [
              "p3:2:1",
              "p3:2:4"
            ],
            "pick": 2,
            "clue": "Future tense tells about something that has not happened yet. Look for the sentences that show it.",
            "hints": [
              "Future tense tells about something that has not happened yet. Look for the sentences that show it.",
              "Skim the sentences listed for a time clue and a helping word that point to later. Skip the ones about now or about the past.",
              "Sentence 4 tells about something that is over. Think about the rest."
            ],
            "how": [
              "Future tense uses will plus the plain verb, and the clue often points to later.",
              "Sentence 5 says Tomorrow and will draw. Sentence 8 says Next month and will copy.",
              "Sentences 3, 7 and 9 are present tense, and sentence 4 is past."
            ],
            "misconception": "A common mix-up is picking a sentence that has a time clue but not the future. Check the verb, too.",
            "why": "The answers are \"Tomorrow, my sister will draw a big fish on the side.\" and \"Next month, our neighbors will copy our rain barrel idea.\" Both use will plus a plain verb. The other sentences tell about the present or the past.",
            "like": [
              "SK-GUM2-1-S11"
            ]
          },
          {
            "id": "SK-GUM2-1-C12",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Line 6 has a verb that clashes with its opening words. Which verb fixes it?",
            "text": "Last Sunday, I {0} the lid bright blue.",
            "slots": [
              {
                "options": [
                  "paint",
                  "will paint",
                  "painted"
                ],
                "answer": 2
              }
            ],
            "clue": "Find the time clue and decide what time it shows. Then choose the verb form that tells the same time.",
            "hints": [
              "Find the time clue and decide what time it shows. Then choose the verb form that tells the same time.",
              "Last Sunday is already over. Say the sentence with each choice.",
              "Will paint tells about a job that has not been done. Think about the other two choices."
            ],
            "how": [
              "Last Sunday is in the past, so the verb must be past tense.",
              "A regular verb adds -ed to show the past.",
              "The answer is painted. Paint is present tense, and will paint is future."
            ],
            "misconception": "A common mix-up is leaving the plain verb because the sentence sounds fine. The clue Last Sunday needs a past tense verb.",
            "why": "The answer is painted. Last Sunday is over, so the verb needs the past tense, painted. Paint is present tense, and will paint is future tense.",
            "like": [
              "SK-GUM2-1-S12"
            ]
          },
          {
            "id": "SK-GUM2-1-C13",
            "type": "dropdown",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [],
            "prompt": "Choose the correct verb for each blank.",
            "text": "Last night, a gust {0} the trash can down our street. Tomorrow, the neighbors {1} the broken mailbox.",
            "slots": [
              {
                "options": [
                  "pushes",
                  "pushed",
                  "will push"
                ],
                "answer": 1
              },
              {
                "options": [
                  "fixed",
                  "will fixes",
                  "will fix"
                ],
                "answer": 2
              }
            ],
            "clue": "Each sentence starts with its own time clue. Match each verb to its own clue.",
            "hints": [
              "Each sentence starts with its own time clue. Match each verb to its own clue.",
              "Last night is over. Tomorrow has not come yet. Think about which verb form tells each time.",
              "After the word will, a verb stays in its plain form. Use that to check the second blank."
            ],
            "how": [
              "Blank one follows Last night, which is the past. A regular verb shows the past with -ed: pushed.",
              "Blank two follows Tomorrow, which is the future. Future tense uses will plus the plain verb: will fix.",
              "The answers are pushed and will fix. Pushes is present tense, will push is future, fixed is past, and will fixes adds -es after will."
            ],
            "misconception": "A common mix-up is using one tense for both blanks. Each sentence has its own clue.",
            "why": "The answers are pushed and will fix. Last night is in the past, so the first verb is pushed. Tomorrow is in the future, so the second verb is will fix. Will fixes is wrong because a verb after will stays plain.",
            "like": [
              "SK-GUM2-1-S13"
            ]
          },
          {
            "id": "SK-GUM2-1-C14",
            "type": "hottext",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [],
            "prompt": "Select the sentence that uses the future tense correctly.",
            "options": [
              "Next summer, my cousins will camp beside the river.",
              "Next summer, my cousins camped beside the river.",
              "Next summer, my cousins will camped beside the river.",
              "Next summer, my cousins will camps beside the river."
            ],
            "answer": [
              0
            ],
            "pick": 1,
            "clue": "Future tense tells about something that has not happened yet. Check how each verb is built.",
            "hints": [
              "Future tense tells about something that has not happened yet. Check how each verb is built.",
              "All four sentences begin with the same clue, so compare only the verbs. Ask which ones use will and which do not.",
              "Camped ends in -ed, which shows the past. Think about the other choices."
            ],
            "how": [
              "Next summer has not happened yet, so the verb must be future tense.",
              "Future tense is will plus the plain verb: will camp.",
              "The answer is \"Next summer, my cousins will camp beside the river.\" Camped is past, will camped mixes tenses, and will camps adds -s after will."
            ],
            "misconception": "A common mix-up is picking the sentence that sounds like a story. A clue about next summer needs will.",
            "why": "The answer is \"Next summer, my cousins will camp beside the river.\" Next summer is in the future, so the verb is will plus the plain verb. Camped is past tense, will camped mixes two tenses, and will camps adds -s after will.",
            "like": [
              "SK-GUM2-1-S14"
            ]
          },
          {
            "id": "SK-GUM2-1-C15",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:form-and-use-simple-verb-tenses"
            ],
            "passages": [],
            "prompt": "Nora thinks you can only tell that a sentence is in the past if it has a clue like yesterday. Which sentence shows that Nora is wrong?",
            "choices": [
              {
                "text": "The goalie blocked the last shot of the game.",
                "correct": true
              },
              {
                "text": "Tomorrow, the goalie will block the last shot."
              },
              {
                "text": "Every game, the goalie blocks the last shot."
              },
              {
                "text": "Yesterday, the goalie blocked the last shot."
              }
            ],
            "clue": "To show that an idea is wrong, find an example that breaks it. Check each sentence for a clue word and for a verb ending.",
            "hints": [
              "To show that an idea is wrong, find an example that breaks it. Check each sentence for a clue word and for a verb ending.",
              "Underline any time clue in each choice. Then ask what tells the time in a sentence that has none.",
              "The sentence about Yesterday does have a clue, so it fits Nora's idea. Think about the other choices."
            ],
            "how": [
              "Nora says a past sentence needs a clue word. Look for a past sentence with no clue word.",
              "Most choices begin with a clue. One sentence has none, but its verb ends in -ed and tells about the past.",
              "The answer is \"The goalie blocked the last shot of the game.\" The -ed ending shows the past without a clue word."
            ],
            "misconception": "A common mix-up is thinking the clue word is the only way to show time. The verb form shows it too.",
            "why": "The answer is \"The goalie blocked the last shot of the game.\" It has no time clue, but blocked ends in -ed, so it still tells about the past. That proves Nora wrong. The other sentences all begin with a clue word.",
            "like": [
              "SK-GUM2-1-S15"
            ]
          }
        ]
      }
    ]
  },
  similar: [
    {
      "id": "SK-GUM2-1-S01",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [],
      "prompt": "Which line has a verb that disagrees with the clue at its start?",
      "options": [
        "Long ago, farmers worked this hill.",
        "Each spring, ducks nest along the muddy bank.",
        "At this moment, Ellie packed her lunch.",
        "Soon, the bus will carry us to the museum.",
        "Later today, my brother will mow the grass."
      ],
      "answer": [
        2
      ],
      "pick": 1,
      "clue": "Compare each opening clue with its verb. They must point to the same time.",
      "hints": [
        "Compare each opening clue with its verb. They must point to the same time.",
        "Go line by line. Say whether the clue points to before, now or later, and whether the verb does too.",
        "The line about the museum has a clue about later and a helping word for later. Check the rest."
      ],
      "how": [
        "Read the clue first, then the verb, in each line.",
        "At this moment is the present, but packed is past tense, so they do not match.",
        "The answer is \"At this moment, Ellie packed her lunch.\" The other lines match: Long ago with worked, Each spring with nest, and Soon and Later today with will."
      ],
      "misconception": "A common mix-up is hunting only for will. A past verb with a present clue is an error too.",
      "why": "The answer is \"At this moment, Ellie packed her lunch.\" At this moment tells about the present, but packed is past tense. In the other lines, the clue and the verb point to the same time.",
      "like": [
        "SK-GUM2-1-P3"
      ]
    },
    {
      "id": "SK-GUM2-1-S02",
      "type": "match",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [],
      "prompt": "Read each sentence. When does the action happen? Sort each one.",
      "cols": [
        "Already happened",
        "Happens now or again and again",
        "Has not happened yet"
      ],
      "rows": [
        {
          "text": "Nell fixed the clock.",
          "answer": 0
        },
        {
          "text": "Nell fixes the clock on Fridays.",
          "answer": 1
        },
        {
          "text": "Nell will fix the clock soon.",
          "answer": 2
        },
        {
          "text": "The owls hooted all night.",
          "answer": 0
        },
        {
          "text": "The owls hoot in the old oak tree.",
          "answer": 1
        },
        {
          "text": "The owls will hoot at sunrise.",
          "answer": 2
        }
      ],
      "clue": "Look at each verb. Is there an -ed ending, the helping word will, or neither?",
      "hints": [
        "Look at each verb. Is there an -ed ending, the helping word will, or neither?",
        "Sort the sentences that use a helping word first. Then decide the rest by looking at the ending.",
        "A verb that ends in -ed shows the past. Use that to sort a few of the rows first."
      ],
      "how": [
        "Find the verb in each sentence.",
        "Fixed and hooted end in -ed, so the actions already happened. Fixes and hoot have no -ed and no will, so they are present.",
        "Will fix and will hoot use will, so they have not happened yet."
      ],
      "misconception": "A common mix-up is putting every verb with -s in the past. Past tense for a regular verb ends in -ed.",
      "why": "Fixed and hooted are past tense. Fixes and hoot are present tense. Will fix and will hoot are future tense.",
      "like": [
        "SK-GUM2-1-P4"
      ]
    },
    {
      "id": "SK-GUM2-1-S03",
      "type": "mc",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "In sentence 5, the verb and the opening words tell different times. Which choice repairs the sentence?",
      "choices": [
        {
          "text": "Last Tuesday, she taped the chart by the office door.",
          "correct": true
        },
        {
          "text": "Last Tuesday, she tapes the chart by the office door."
        },
        {
          "text": "Last Tuesday, she will tape the chart by the office door."
        },
        {
          "text": "Last Tuesday, she will taped the chart by the office door."
        }
      ],
      "clue": "Find the opening words and decide which time they show. Then compare that time with the verb.",
      "hints": [
        "Find the opening words and decide which time they show. Then compare that time with the verb.",
        "The opening words name a day that is over. Say each choice.",
        "Will taped has a helping word and an -ed ending. Think about whether that makes sense."
      ],
      "how": [
        "Last Tuesday is over, so it is the past.",
        "Tapes is present tense, so the verb needs to change to the past: taped.",
        "The answer is \"Last Tuesday, she taped the chart by the office door.\" The other choices keep the present or use will."
      ],
      "misconception": "A common mix-up is leaving a present verb because the chart is still hanging. The clue Last Tuesday decides the tense.",
      "why": "The answer is \"Last Tuesday, she taped the chart by the office door.\" Last Tuesday is over, so the verb needs the past tense. Tapes is present tense, will tape is future, and will taped mixes two tenses.",
      "like": [
        "SK-GUM2-1-C03"
      ]
    },
    {
      "id": "SK-GUM2-1-S04",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Which choice repairs the mismatch in line 6?",
      "text": "Tomorrow, the helpers {0} the extra mittens by size.",
      "slots": [
        {
          "options": [
            "will sort",
            "will sorted",
            "sorts"
          ],
          "answer": 0
        }
      ],
      "clue": "Read the clue first. Then decide which verb form tells the same time.",
      "hints": [
        "Read the clue first. Then decide which verb form tells the same time.",
        "Say the clue aloud and ask whether the mittens are already sorted, being sorted now, or still waiting.",
        "Sorts has no helping word and no ending for later. Think about the other two choices."
      ],
      "how": [
        "Tomorrow has not come yet, so the verb has to be future tense.",
        "Future tense is will plus the plain verb: will sort.",
        "The answer is will sort. Will sorted puts -ed after will, and sorts is present tense."
      ],
      "misconception": "A common mix-up is adding -ed after will. The verb after will stays plain.",
      "why": "The answer is will sort. Tomorrow is in the future, so the verb needs will plus the plain verb. Will sorted mixes the future and the past, and sorts is present tense.",
      "like": [
        "SK-GUM2-1-C04"
      ]
    },
    {
      "id": "SK-GUM2-1-S05",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "What explains the -s on locks in sentence 8 but no ending on look in sentence 9?",
      "choices": [
        {
          "text": "Look has the helper will in front of it, but locks is alone and tells about now.",
          "correct": true
        },
        {
          "text": "Look has a helper, so it is past, while locks is alone and tells about the future."
        },
        {
          "text": "Both verbs tell about now, so the writer should add -s to look as well."
        },
        {
          "text": "Locks is spelled with -s because box is one thing, and look is for many boxes."
        }
      ],
      "clue": "A verb can change form because of a helping word, a time clue, or who does the action. Look for those in sentences 8 and 9.",
      "hints": [
        "A verb can change form because of a helping word, a time clue, or who does the action. Look for those in sentences 8 and 9.",
        "In sentence 9, see which word sits right before look. In sentence 8, see who locks the box and when.",
        "Locks has no -ed ending, and neither sentence starts with a clue about the past. Think about the choices again."
      ],
      "how": [
        "Sentence 9 has will in front of look, so look stays plain.",
        "Sentence 8 starts with Every afternoon, which is a repeated action in the present. One person locks the box, so the verb adds -s.",
        "The answer is \"Look has the helper will in front of it, but locks is alone and tells about now.\""
      ],
      "misconception": "A common mix-up is thinking -s shows the future or the past. It goes with present tense for one person or thing.",
      "why": "The answer is \"Look has the helper will in front of it, but locks is alone and tells about now.\" Every afternoon tells about the present, and Mr. Sims is one person, so locks takes -s. Will shows the future, so look has no ending.",
      "like": [
        "SK-GUM2-1-C05"
      ]
    },
    {
      "id": "SK-GUM2-1-S06",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Tap the two sentences among 2 to 6 whose verb belongs to another time than the opening words.",
      "targets": [
        "p5:1:2",
        "p5:1:3",
        "p5:1:4",
        "p5:1:5",
        "p5:1:6"
      ],
      "answer": [
        "p5:1:3",
        "p5:1:5"
      ],
      "pick": 2,
      "clue": "Compare the clue at the start of each sentence with its verb. Do they point to the same time?",
      "hints": [
        "Compare the clue at the start of each sentence with its verb. Do they point to the same time?",
        "Work through sentences 2 to 6 in order. Mark each clue as before, now or later, and do the same for each verb.",
        "Sentence 6 has a past clue and a past verb. Check the rest."
      ],
      "how": [
        "Check sentences 2 through 6 one at a time.",
        "Yesterday is past, but stirs is present. Tomorrow is future, but lined is past.",
        "Sentences 2, 4 and 6 match: Last year with carried, These days with fold, and Three days ago with baked."
      ],
      "misconception": "A common mix-up is picking the sentence that sounds odd rather than checking the clue and verb. Compare them one by one.",
      "why": "The answers are \"Yesterday, Mrs. Hall stirs a huge pot of bean soup.\" and \"Tomorrow, volunteers lined the long benches with cloths.\" Yesterday needs a past verb, and Tomorrow needs will plus a plain verb. The other sentences match.",
      "like": [
        "SK-GUM2-1-C06"
      ]
    },
    {
      "id": "SK-GUM2-1-S07",
      "type": "ebsr",
      "points": 2,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Complete both halves, starting with the first.",
      "partA": {
        "prompt": "Which statement explains the error in sentence 8?",
        "choices": [
          {
            "text": "Welcomed names a finished action, but Soon looks ahead to later.",
            "correct": true
          },
          {
            "text": "Welcomed should end in -s, since I is one person at the door."
          },
          {
            "text": "Soon should be swapped for Last night so the verb can stay as it is."
          },
          {
            "text": "Soon looks back to a finished time, but welcomed looks ahead to later."
          }
        ]
      },
      "partB": {
        "prompt": "Choose the repair.",
        "choices": [
          {
            "text": "Soon, I will welcome the guests at the door.",
            "correct": true
          },
          {
            "text": "Soon, I will welcomed the guests at the door."
          },
          {
            "text": "Soon, I welcomes the guests at the door."
          },
          {
            "text": "Soon, I welcoming the guests at the door."
          }
        ]
      },
      "clue": "Find the clue in sentence 8, then compare it with the verb.",
      "hints": [
        "Find the clue in sentence 8, then compare it with the verb.",
        "In the first half, say what time Soon points to and what time welcomed shows. In the second half, test each rewrite the same way.",
        "In the second half, a verb with -ing and no helping word is not a complete verb for this sentence. Think about the others."
      ],
      "how": [
        "Part A: Soon points to later, so it is the future. Welcomed ends in -ed, so it is past tense.",
        "Part B: the future needs will plus the plain verb: will welcome.",
        "The answers are \"Welcomed names a finished action, but Soon looks ahead to later.\" and \"Soon, I will welcome the guests at the door.\""
      ],
      "misconception": "A common mix-up is fixing the clue instead of the verb. The verb should change to match the clue.",
      "why": "Part A: \"Welcomed names a finished action, but Soon looks ahead to later.\" Part B: \"Soon, I will welcome the guests at the door.\" Soon has not happened yet, so the verb needs will plus the plain verb.",
      "like": [
        "SK-GUM2-1-C07"
      ]
    },
    {
      "id": "SK-GUM2-1-S08",
      "type": "ms",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [],
      "prompt": "Tap the TWO sentences about habits, actions that repeat.",
      "pick": 2,
      "choices": [
        {
          "text": "On Saturdays, my dad washes the car in the driveway.",
          "correct": true
        },
        {
          "text": "Each winter, the pond freezes near the old bridge.",
          "correct": true
        },
        {
          "text": "Two Saturdays ago, my dad washed the car in the driveway."
        },
        {
          "text": "Later this winter, the pond will freeze near the old bridge."
        },
        {
          "text": "These days, the water drips from the car roof."
        }
      ],
      "clue": "Look for clue words that mean a habit, and check that the verb is in the present.",
      "hints": [
        "Look for clue words that mean a habit, and check that the verb is in the present.",
        "Read the clue at the start of each sentence. Ask whether it tells about one time or about every time.",
        "These days tells about a stretch of time. Decide among the rest."
      ],
      "how": [
        "Find the clue in each sentence.",
        "On Saturdays and Each winter mean again and again, and washes and freezes are present tense verbs.",
        "Two Saturdays ago and Later this winter tell about one time, and These days tells about the present."
      ],
      "misconception": "A common mix-up is picking sentences about the same people and things. The clue shows whether it repeats.",
      "why": "The answers are \"On Saturdays, my dad washes the car in the driveway.\" and \"Each winter, the pond freezes near the old bridge.\" Both have clues that mean again and again and present tense verbs. The other sentences tell about one time.",
      "like": [
        "SK-GUM2-1-C08"
      ]
    },
    {
      "id": "SK-GUM2-1-S09",
      "type": "mc",
      "points": 1,
      "dok": 1,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [],
      "prompt": "Which form of bake goes in a sentence about next week?",
      "choices": [
        {
          "text": "will bake",
          "correct": true
        },
        {
          "text": "will baked"
        },
        {
          "text": "baked"
        },
        {
          "text": "bakes"
        }
      ],
      "clue": "Think about what each verb form says about time.",
      "hints": [
        "Think about what each verb form says about time.",
        "Say each choice in a sentence about next week and listen for the one that fits.",
        "Baked ends in -ed, which shows the past. Think about the other choices."
      ],
      "how": [
        "Future tense tells about something that has not happened yet.",
        "It uses the helping word will with the plain verb: will bake.",
        "The answer is will bake. Baked is past, bakes is present, and will baked mixes tenses."
      ],
      "misconception": "A common mix-up is putting an -ed ending after will. The verb after will stays plain.",
      "why": "The answer is will bake. It uses will plus the plain verb, so it tells about the future. Baked is past tense, bakes is present tense, and will baked mixes two tenses.",
      "like": [
        "SK-GUM2-1-C09"
      ]
    },
    {
      "id": "SK-GUM2-1-S10",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Luis rewrites sentence 7 as \"Last night, I practice my welcome speech in the mirror.\" Which statement about his rewrite is true?",
      "choices": [
        {
          "text": "It is worse, because Last night is over and practiced shows that.",
          "correct": true
        },
        {
          "text": "It is better, because the speech still needs more work today."
        },
        {
          "text": "It is better, because I is one person and always takes the plain form."
        },
        {
          "text": "It is worse, because the speech should be moved to the future."
        }
      ],
      "clue": "To judge a rewrite, ask what the opening words say about time. Then see whether the new verb tells the same time.",
      "hints": [
        "To judge a rewrite, ask what the opening words say about time. Then see whether the new verb tells the same time.",
        "Find the opening words of sentence 7. Say whether they are about the past, the present or the future.",
        "Whether the speech is perfect today is a different question from when the sentence takes place. Think about the other choices."
      ],
      "how": [
        "Find the clue in sentence 7: Last night. That time is over.",
        "A regular verb shows the past with -ed: practiced.",
        "The answer is \"It is worse, because Last night is over and practiced shows that.\" The word I can go with any tense."
      ],
      "misconception": "A common mix-up is letting what is true now decide the tense. The clue decides it.",
      "why": "The answer is \"It is worse, because Last night is over and practiced shows that.\" Luis's version, I practice, is present tense and does not match the clue. The word I can go with a past, present or future verb.",
      "like": [
        "SK-GUM2-1-C10"
      ]
    },
    {
      "id": "SK-GUM2-1-S11",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Which TWO listed sentences look ahead to a time still to come?",
      "targets": [
        "p6:1:2",
        "p6:1:3",
        "p6:1:4",
        "p6:2:2",
        "p6:2:3",
        "p6:3:1"
      ],
      "answer": [
        "p6:1:4",
        "p6:2:3"
      ],
      "pick": 2,
      "clue": "Look for sentences about a time that has not arrived. The verb should show it too.",
      "hints": [
        "Look for sentences about a time that has not arrived. The verb should show it too.",
        "Check the clue and the helping word in each listed sentence. Skip the ones about now or about the past.",
        "Sentence 3 tells about a job that is finished. Think about the rest."
      ],
      "how": [
        "The future is shown with will plus the plain verb, and the clue points to later.",
        "Sentence 4 says Later today and will taste. Sentence 7 says In two weeks and will make.",
        "Sentences 2 and 8 are present tense, sentence 6 is a habit, and sentence 3 is past."
      ],
      "misconception": "A common mix-up is picking a sentence with a clue but no will. Check the verb as well.",
      "why": "The answers are \"Later today, our neighbors will taste each cup and vote.\" and \"In two weeks, we will make a bigger batch.\" Both use will plus a plain verb. The other sentences tell about the present or the past.",
      "like": [
        "SK-GUM2-1-C11"
      ]
    },
    {
      "id": "SK-GUM2-1-S12",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Pick the choice that mends the mix-up in sentence 5.",
      "text": "Last night, I {0} the juice too fast.",
      "slots": [
        {
          "options": [
            "mix",
            "mixed",
            "will mix"
          ],
          "answer": 1
        }
      ],
      "clue": "Find the clue and decide what time it shows. Then pick the verb form that fits.",
      "hints": [
        "Find the clue and decide what time it shows. Then pick the verb form that fits.",
        "Last night is over. Say the sentence with each choice.",
        "Mix is the plain verb with no ending. Think about the other two choices."
      ],
      "how": [
        "Last night is in the past, so the verb has to be past tense.",
        "A regular verb adds -ed to show the past: mixed.",
        "The answer is mixed. Mix is present, and will mix is future."
      ],
      "misconception": "A common mix-up is leaving the plain verb because it looks short and simple. The clue Last night needs a past tense verb.",
      "why": "The answer is mixed. Last night is over, so the verb needs the past tense. Mix is present tense, and will mix is future tense.",
      "like": [
        "SK-GUM2-1-C12"
      ]
    },
    {
      "id": "SK-GUM2-1-S13",
      "type": "dropdown",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [],
      "prompt": "Fill each gap with the verb form that suits its clue.",
      "text": "Two nights ago, my sister {0} her science poster with glue. In a few days, she {1} it to class.",
      "slots": [
        {
          "options": [
            "finishes",
            "finished",
            "will finish"
          ],
          "answer": 1
        },
        {
          "options": [
            "carried",
            "will carries",
            "will carry"
          ],
          "answer": 2
        }
      ],
      "clue": "Each sentence has its own clue. Match each verb to its own clue.",
      "hints": [
        "Each sentence has its own clue. Match each verb to its own clue.",
        "Two nights ago is over, and In a few days has not come yet. Decide which tense each clue shows.",
        "Whatever follows the word will stays plain. Use that to check the second gap."
      ],
      "how": [
        "Use the clue in each sentence.",
        "Two nights ago shows the past, so the first gap needs a past form: finished.",
        "In a few days shows the future, so the second gap needs will plus the plain verb. The answers are finished and will carry."
      ],
      "misconception": "A common mix-up is using one tense for both gaps. Each sentence has its own clue.",
      "why": "The answers are finished and will carry. Two nights ago is in the past, so my sister finished her poster. In a few days is in the future, so she will carry it. Finishes is present tense, carried is past, and will carries adds -s after will.",
      "like": [
        "SK-GUM2-1-C13"
      ]
    },
    {
      "id": "SK-GUM2-1-S14",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [],
      "prompt": "Which sentence tells about a finished action and writes the verb correctly?",
      "options": [
        "Last Friday, the choir performed for the new principal.",
        "Last Friday, the choir perform for the new principal.",
        "Last Friday, the choir will perform for the new principal.",
        "Last Friday, the choir will performed for the new principal."
      ],
      "answer": [
        0
      ],
      "pick": 1,
      "clue": "Past tense tells about something that already happened. Check how each verb is built.",
      "hints": [
        "Past tense tells about something that already happened. Check how each verb is built.",
        "All four sentences begin with the same clue, so compare only the verbs. Which ones use will, and which do not?",
        "Will perform is a future form. Think about the other choices."
      ],
      "how": [
        "Last Friday is over, so the verb must show the past.",
        "A regular verb adds -ed for the past: performed.",
        "The answer is \"Last Friday, the choir performed for the new principal.\" Perform is present, will perform is future, and will performed mixes two tenses."
      ],
      "misconception": "A common mix-up is choosing the plain verb because it looks safe. The clue Last Friday needs a past verb.",
      "why": "The answer is \"Last Friday, the choir performed for the new principal.\" Last Friday is over, so the verb is past tense. Perform is present tense, will perform is future tense, and will performed mixes two tenses.",
      "like": [
        "SK-GUM2-1-C14"
      ]
    },
    {
      "id": "SK-GUM2-1-S15",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:form-and-use-simple-verb-tenses"
      ],
      "passages": [],
      "prompt": "Rex believes a future sentence must contain tomorrow, soon or next week. Which choice proves him mistaken?",
      "choices": [
        {
          "text": "The tide will rise slowly over the sand.",
          "correct": true
        },
        {
          "text": "Tomorrow, the tide will rise slowly over the sand."
        },
        {
          "text": "Every night, the tide rises slowly over the sand."
        },
        {
          "text": "Last night, the tide rose slowly over the sand."
        }
      ],
      "clue": "To prove an idea wrong, find an example that breaks it. Check each sentence for a clue word and for the verb.",
      "hints": [
        "To prove an idea wrong, find an example that breaks it. Check each sentence for a clue word and for the verb.",
        "Underline the clue words in each choice. Then ask what tells the time in a sentence that has none.",
        "The sentence with Tomorrow has the clue Rex wants, so it cannot prove him wrong. Think about the others."
      ],
      "how": [
        "Rex says a future sentence needs one of those clue words. Look for a future sentence with none.",
        "Most choices start with a clue. One does not, but the word will in front of the verb tells about later.",
        "The answer is \"The tide will rise slowly over the sand.\" The helping word will shows the future without a clue."
      ],
      "misconception": "A common mix-up is thinking the clue word is the only way to show time. The helping word will shows the future by itself.",
      "why": "The answer is \"The tide will rise slowly over the sand.\" It has no clue word, but will rise tells about the future. That proves Rex wrong. The other sentences all begin with a clue word.",
      "like": [
        "SK-GUM2-1-C15"
      ]
    }
  ],
  addons: {
    "SK-GUM2-1-P1": {
      "hints": [
        "Find the time word in the sentence. Decide whether it points to the past, the present or the future.",
        "Think about the bike ride. Has Rosa finished it, is she doing it now, or is it still to come?",
        "A verb with will in front tells about the future. Think about the other two choices."
      ],
      "how": [
        "Look at the time word: Yesterday. It is over, so the verb must be past tense.",
        "A regular verb adds -ed for the past.",
        "The answer is pedaled. Pedals is present tense, and will pedal is future tense."
      ],
      "misconception": "A common mix-up is picking the verb that sounds most like the bike. The time word Yesterday decides the tense."
    },
    "SK-GUM2-1-P2": {
      "hints": [
        "Future tense tells about something that has not happened yet. Look at how each verb is built.",
        "Check each sentence for the helping word that shows the future.",
        "Practiced tells about something that is over. Think about the other three choices."
      ],
      "how": [
        "Check each sentence for a verb that shows later.",
        "Will practice uses the helping word will, so it is future tense.",
        "Practiced and cheered are past, and practices is present."
      ],
      "misconception": "A common mix-up is picking a sentence that mentions Monday. The verb shows the time, not the day."
    },
    "SK-GUM2-1-P3": {
      "hints": [
        "Check that the time word in each sentence and its verb tell the same time.",
        "Take the sentences one at a time. Underline the time word, then the verb.",
        "The sentence about next week has a clue and a helping word that agree. Think about the rest."
      ],
      "how": [
        "Read each time word and its verb.",
        "Yesterday is in the past, but cooks is present tense.",
        "The other sentences match: Last night with watched, Tomorrow with will help, Every Sunday with calls, and Next week with will visit."
      ],
      "misconception": "A common mix-up is hunting only for the word will. A present verb with a past time word is an error too."
    },
    "SK-GUM2-1-P4": {
      "hints": [
        "Look at each verb. Check for -ed, for the helping word will, or for neither.",
        "Sort the sentences that have will first. Then decide about the rest by looking at the ending.",
        "A verb that ends in -ed shows the past. Use that to sort some of the sentences first."
      ],
      "how": [
        "Find the verb in each sentence.",
        "Locked and croaked end in -ed, so they are past. Locks and croak have no -ed and no will, so they are present.",
        "Will lock and will croak use will, so they are future."
      ],
      "misconception": "A common mix-up is calling every verb with -s past tense. Past tense for a regular verb ends in -ed."
    },
    "SK-GUM2-1-P5": {
      "hints": [
        "Each sentence has its own time word. Match each verb to its own time word.",
        "Last spring has already happened, and Next spring has not. Think about which tense each time word shows.",
        "Whatever follows will stays plain. Use that to check the second blank."
      ],
      "how": [
        "The first blank follows Last spring, which is over, so it needs a past verb.",
        "The second blank follows Next spring, which has not come yet, so it needs will plus the plain verb.",
        "The answers are planted and will plant. Will planted puts -ed after will."
      ],
      "misconception": "A common mix-up is copying the first verb into the second blank. Each sentence has its own time word."
    }
  },
  /* B7b:core:end */
  test: [
    { id: "SK-GUM2-1-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the verb that correctly completes the sentence.",
      text: "Tomorrow, Ms. Cruz {0} the winners of the art contest.",
      slots: [ { options: ["named", "will name", "will named"], answer: 1 } ],
      clue: "Tomorrow has not happened yet. Which tense is that, and how is it formed?",
      why: "The answer is will name. Tomorrow is in the future, so the verb needs will plus the plain verb name." },
    { id: "SK-GUM2-1-T2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence uses the correct verb tense?",
      choices: [
        { text: "Last week, Ben fixed the flat tire on his bike.", correct: true },
        { text: "Last week, Ben fixes the flat tire on his bike." },
        { text: "Last week, Ben will fix the flat tire on his bike." },
        { text: "Last week, Ben will fixed the flat tire on his bike." }
      ],
      clue: "Every sentence starts with the same time words. Decide whether they point to the past, present or future.",
      why: "The answer is \"Last week, Ben fixed the flat tire on his bike.\" Last week already happened, so the verb must be past tense: fixed." },
    { id: "SK-GUM2-1-T3", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO sentences tell about something that will happen in the future?",
      choices: [
        { text: "We will paint the fence on Saturday.", correct: true },
        { text: "Our neighbor painted her fence last fall." },
        { text: "Grandpa will show me how to fish.", correct: true },
        { text: "Lena shows her puppy a new trick." },
        { text: "The van stopped by the mailbox." }
      ],
      clue: "Look at the verb in each sentence. Which helping word shows that something has not happened yet?",
      why: "The answers are \"We will paint the fence on Saturday.\" and \"Grandpa will show me how to fish.\" Both use will, so they are future tense. Painted and stopped are past tense. Shows is present tense." },
    { id: "SK-GUM2-1-T4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has a verb in the wrong tense.",
      options: [
        "Two days ago, a storm knocked down our mailbox.",
        "Every night, my sister reads to me before bed.",
        "Next month, our family moved to a new town.",
        "This morning, we packed our lunches."
      ],
      answer: [2], pick: 1,
      clue: "Read the time words at the start of each sentence. Then check whether the verb tells the same time.",
      why: "The answer is \"Next month, our family moved to a new town.\" Next month has not happened yet, so the verb should be future tense: will move." },
    { id: "SK-GUM2-1-T5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the verbs that correctly complete the sentences.",
      text: "Yesterday, Mr. Ito {0} the hallway floor. Tomorrow, he {1} the windows.",
      slots: [
        { options: ["mopped", "mops", "will mop"], answer: 0 },
        { options: ["washed", "will wash", "will washed"], answer: 1 }
      ],
      clue: "Match each verb to the time word in its own sentence.",
      why: "The answers are mopped and will wash. Yesterday is in the past, so mopped is correct. Tomorrow is in the future, so will wash is correct." }
  ]
});

/* ---------- GUM2-2: determiners ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr",
  title: "Determiners: a, an, the, this, that and my",
  teach: {
    big: "A determiner is a small word that comes before a noun, like a, an, the, this, those or my.",
    points: [
      "A, an and the are called articles. Use a before a word that starts with a consonant sound (a dog). Use an before a word that starts with a vowel sound (an egg). Listen to the sound, not the letter: an X-ray, a unit.",
      "This, that, these and those point to things. This and that go with one thing. These and those go with more than one. This and these are close by. That and those are far away.",
      "My, your, his, her, its, our and their tell who owns something: our dog, their house. Its has no apostrophe when it shows owning. Mine, yours, hers, ours and theirs stand alone: The red bike is mine."
    ],
    words: [
      { term: "determiner", means: "a small word that comes before a noun, like a, the, this or my" },
      { term: "article", means: "the words a, an and the" },
      { term: "demonstrative adjective", means: "a pointing word before a noun: this, that, these or those" },
      { term: "possessive determiner", means: "an owning word before a noun, like my, his, its or their (some books call it a possessive adjective)" }
    ],
    example: {
      label: "Example",
      lines: ["May I use these crayons for my picture?", "An owl lives in that tall tree."],
      note: "These goes with crayons, which are more than one and close by. My tells whose picture. An comes before owl because owl starts with a vowel sound. That points to one tree far away."
    },
    tip: "On the test, look at the word right after the blank. Is it one thing or more than one? Does it start with a vowel sound? That tells you which small word fits."
  },
  learn: [
    {
      show: ["Look at ___ birds way up on the wire! (this, these, that, those)"],
      ask: "Which word fits the sentence?",
      steps: [
        "Is the noun one thing or more than one? Birds means more than one, so this and that are out.",
        "Are the birds close by or far away? Way up on the wire is far away.",
        "More than one and far away means those."
      ],
      answer: "Those. Look at those birds way up on the wire!"
    },
    {
      show: ["Mom packed ___ apple and ___ banana in my lunch."],
      ask: "Should each blank be a or an?",
      steps: [
        "Say the word right after each blank aloud and listen to its first sound.",
        "Apple starts with a vowel sound, so it gets an.",
        "Banana starts with a consonant sound, so it gets a."
      ],
      answer: "Mom packed an apple and a banana in my lunch."
    },
    {
      show: ["Maya and Noah put ___ coats on the hooks. (they, them, their)"],
      ask: "Which word fits the sentence?",
      steps: [
        "Look at the noun after the blank: coats. The blank needs a word that comes before a noun.",
        "Ask who owns the coats. Maya and Noah are two people.",
        "Their is the owning word for more than one owner. They is a subject word and them is an object word, so neither goes before a noun."
      ],
      answer: "Their. Maya and Noah put their coats on the hooks."
    }
  ],
  parent: "While you put away groceries, point and ask: Is it this box or that box? These cans or those cans? Let your child also say a or an for each item (an onion, a lemon).",
  passages: [
    /* B7b:passages:start */
    {
      "id": "p1",
      "title": "The Science Fair Table",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On Friday, our class held a science fair in the gym.",
          "(2) Every group brought its project and a tall poster.",
          "(3) Lena carried a engine model made of paper and wire.",
          "(4) Her partner, Omar, held an hourglass up to the light."
        ],
        [
          "(5) Across the gym, those big volcano bubbled over with red foam.",
          "(6) Close to me, these magnets lifted a pile of paper clips.",
          "(7) Mr. Cho smiled at our display and shook his head in wonder."
        ],
        [
          "(8) The judges gave every team an award ribbon for hard work.",
          "(9) My group won first place for our bean plant chart.",
          "(10) We pinned the ribbon on the wall beside our poster."
        ]
      ]
    },
    {
      "id": "p2",
      "title": "Tide Pool Day",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On Saturday, our class visited the tide pools on the Georgia coast.",
          "(2) Ms. Pruitt gave each of us a bucket and a small net.",
          "(3) Close to my feet, these pebble rested under a flat rock.",
          "(4) Kayla found a oyster shell stuck in the wet sand.",
          "(5) Out by the waves, those two sea stars clung to a wet rock.",
          "(6) Sam looked at his net and laughed at the empty bottom."
        ],
        [
          "(7) A hermit crab pulled it legs inside the shell.",
          "(8) We watched an empty shell roll back and forth in the foam.",
          "(9) The children put their buckets in a line beside the bus.",
          "(10) Ms. Pruitt counted our buckets and smiled at us.",
          "(11) On the ride home, we shared what we found."
        ]
      ]
    },
    {
      "id": "p3",
      "title": "Bike Rodeo Day",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Our town held a bike rodeo in the parking lot on Saturday.",
          "(2) An officer showed us how to check our brakes.",
          "(3) Beside me, these cones marked the start of the slow lane.",
          "(4) Far down the lot, this ramp was too tall for the little riders.",
          "(5) Right in front of us, that bike helmets sat in a neat row.",
          "(6) Across the lot, those flags waved over the finish line."
        ],
        [
          "(7) Near my hands, that whistle hung from a long string.",
          "(8) Mr. Dean, the judge, held a clipboard and a stopwatch.",
          "(9) The riders buckled them helmets and rolled to the line.",
          "(10) Everyone cheered when the last rider rolled across.",
          "(11) The town gave every rider an award sticker."
        ]
      ]
    },
    {
      "id": "p4",
      "title": "Chess Club Sign-Up",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) The chess club needs new players for the spring season.",
          "(2) Ms. Vega keeps the sign-up sheet by the library door.",
          "(3) Last week, Devin put a name on the list and drew a smiling knight.",
          "(4) Next to him, a eighth grader wrote a long email address."
        ],
        [
          "(5) Way up on the shelf, those chessboard waits for the first game.",
          "(6) Right here beside me, these pieces are made of smooth wood.",
          "(7) The club holds its meetings after school on Wednesdays."
        ],
        [
          "(8) Every player carries his or her own pencil and notebook.",
          "(9) Winning an honor is nice, but fun matters more.",
          "(10) Come join our club and learn some clever moves."
        ]
      ]
    },
    {
      "id": "p5",
      "title": "Painting the Porch Swing",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last weekend, my family painted the old swing on our porch.",
          "(2) Dad sanded the wood while Mom opened a can of yellow paint.",
          "(3) My brother brought a ladder and a old hat to block the sun.",
          "(4) Down by the garden, that tools lay in a heap on the grass.",
          "(5) Next to me, these brushes dripped paint onto the old sheet.",
          "(6) Gran sat on the steps and watched us with her cup of tea."
        ],
        [
          "(7) My sister painted the chains and left me her smallest brush.",
          "(8) The cat licked it paw and walked through the wet paint.",
          "(9) Gran washed she brushes at the sink with an old rag.",
          "(10) By supper, the swing was bright, and our hands were yellow."
        ]
      ]
    },
    {
      "id": "p6",
      "title": "The Fossil Dig",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Our class went to a fossil dig on the edge of town.",
          "(2) A guide gave every student a brush and a small shovel.",
          "(3) By my left boot, those tiny shell lay in the gray dirt.",
          "(4) Under the oak, this heavy rocks hid a surprise."
        ],
        [
          "(5) Mia held an ancient tooth in her palm and gasped.",
          "(6) Out past the trees, that digging crew worked on a huge bone.",
          "(7) My partner and I wrote our names on the label bag.",
          "(8) The guide checked each find and gave us an answer card.",
          "(9) Close to us, these boxes held a dozen more fossils.",
          "(10) Next to the gate, that fossils sat in a crate for the museum."
        ]
      ]
    }
    /* B7b:passages:end */
  ],
  practice: [
    { id: "SK-GUM2-2-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Dad found {0} old map in the attic.",
      slots: [ { options: ["a", "an", "these"], answer: 1 } ],
      clue: "Say the word that comes right after the blank. What sound does it start with? Is it one thing or more than one?",
      why: "The answer is an. The word right after the blank is old, which starts with a vowel sound. A map is one thing, so these does not fit." },
    { id: "SK-GUM2-2-P2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "{0} boots on my feet are too tight.",
      slots: [ { options: ["This", "These", "That", "Them"], answer: 1 } ],
      clue: "Is the noun one thing or more than one? Are the boots close by or far away?",
      why: "The answer is These. These goes with more than one thing that is close by. This and that go with only one thing, and them is a pronoun that never comes before a noun like boots." },
    { id: "SK-GUM2-2-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "We saw an eagle on that branch over there.", correct: true },
        { text: "We saw a eagle on that branch over there." },
        { text: "We saw an eagle on those branch over there." },
        { text: "We saw an eagle on them branch over there." }
      ],
      clue: "Check each small word before a noun. Does a or an match the first sound of the next word? Does the pointing word match one or more than one?",
      why: "The answer is \"We saw an eagle on that branch over there.\" Eagle starts with a vowel sound, so it needs an. Branch is one thing far away, so it needs that." },
    { id: "SK-GUM2-2-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Our class has a pet turtle named Pickles.",
        "The puppy wagged its tail at the mail carrier.",
        "Did you bring your raincoat today?",
        "Can I try one of this grapes?",
        "Their garden has the biggest sunflowers on our street."
      ],
      answer: [3], pick: 1,
      clue: "Look at each pointing word and the noun after it. Do they agree about one or more than one?",
      why: "The answer is \"Can I try one of this grapes?\" Grapes means more than one, so it needs these, not this." },
    { id: "SK-GUM2-2-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "What does each word do? Sort each word.",
      cols: ["Article", "Points to which one", "Tells who owns it"],
      rows: [
        { text: "an", answer: 0 },
        { text: "those", answer: 1 },
        { text: "their", answer: 2 },
        { text: "the", answer: 0 },
        { text: "this", answer: 1 },
        { text: "my", answer: 2 }
      ],
      clue: "There are only three articles. Pointing words tell near or far. Owning words tell whose.",
      why: "An and the are articles. Those and this point to which one. Their and my tell who owns something." }
  ],
  /* B7b:core:start */
  /* ---------- Expansion 2026-10-22, batch B7b (GUM Reinforce, second half) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test.
     Author log: docs/expansion-2026-10-22/batches/B7b-author-log.md. NOT ACCEPTED: needs independent review. */
  core: {
    "rev": "1",
    "sets": [
      {
        "title": "Set 1",
        "items": [
          {
            "ref": "SK-GUM2-2-P4"
          },
          {
            "ref": "SK-GUM2-2-P5"
          },
          {
            "id": "SK-GUM2-2-C03",
            "type": "mc",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 3 has a mistake with a small word before a noun. What is the mistake?",
            "choices": [
              {
                "text": "Engine starts with a vowel sound, so the small word should be an.",
                "correct": true
              },
              {
                "text": "Model starts with a consonant sound, so the small word should be the."
              },
              {
                "text": "Engine names more than one thing, so the small word should be these."
              },
              {
                "text": "Lena is a name, so the small word should be her."
              }
            ],
            "clue": "Small words before a noun, like a and an, are chosen by the sound that comes next. Check what sentence 3 puts there.",
            "hints": [
              "Small words before a noun, like a and an, are chosen by the sound that comes next. Check what sentence 3 puts there.",
              "Find the small word in sentence 3 and say it together with the noun that follows. Listen to how that noun begins.",
              "Does each small word match the sound that follows it? Think about the other choices."
            ],
            "how": [
              "Sentence 3 says a engine. The small word comes right before engine.",
              "Say engine aloud. It begins with a short e, which is a vowel sound, so it needs an.",
              "The answer is \"Engine starts with a vowel sound, so the small word should be an.\" Engine is one thing, and Lena is a name that does not take her here."
            ],
            "misconception": "A common mix-up is choosing a because the word model sounds like a consonant. The word right after the small word decides.",
            "why": "The answer is \"Engine starts with a vowel sound, so the small word should be an.\" Use an before a vowel sound. Engine is one thing, so these does not fit, and her would change the meaning.",
            "like": [
              "SK-GUM2-2-S03"
            ]
          },
          {
            "id": "SK-GUM2-2-C04",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 5 has the wrong pointing word. Choose the word that fixes it.",
            "text": "Across the gym, {0} big volcano bubbled over with red foam.",
            "slots": [
              {
                "options": [
                  "those",
                  "this",
                  "that"
                ],
                "answer": 2
              }
            ],
            "clue": "A pointing word has to match the noun in number and match how near or far the thing is.",
            "hints": [
              "A pointing word has to match the noun in number and match how near or far the thing is.",
              "Count how many volcanoes there are. Then notice the place named at the start of the sentence and decide if it is close or far.",
              "Those goes with more than one thing. Think about the other two choices."
            ],
            "how": [
              "The noun volcano is one thing, so the pointing word must go with one.",
              "Across the gym is far away, so a pointing word for far away things is needed.",
              "The answer is that. This is for a close thing, and those is for more than one thing."
            ],
            "misconception": "A common mix-up is choosing a pointing word that fits the number but not the distance, or the distance but not the number. Check both.",
            "why": "The answer is that. The volcano is one thing and it is far away across the gym, so that fits. This points to something close, and those goes with more than one thing.",
            "like": [
              "SK-GUM2-2-S04"
            ]
          },
          {
            "id": "SK-GUM2-2-C05",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 4 uses an before hourglass, even though hourglass begins with the letter h. Why is an correct?",
            "choices": [
              {
                "text": "Hourglass begins with a vowel sound because the h is silent.",
                "correct": true
              },
              {
                "text": "Hourglass names a single thing, so it always takes an."
              },
              {
                "text": "Any word that begins with the letter h takes an before it."
              },
              {
                "text": "An is used because the sentence names Omar, who is a partner."
              }
            ],
            "clue": "Look at the word, but listen to it too. The choice between a and an depends on what you hear next.",
            "hints": [
              "Look at the word, but listen to it too. The choice between a and an depends on what you hear next.",
              "Say hourglass out loud, slowly. Notice whether your mouth makes a puff of air at the start.",
              "Words like hat and hill begin with the same letter but take a. Think about the other choices."
            ],
            "how": [
              "Say hourglass. You hear OW-er-glass, with no h sound at the start.",
              "A word that starts with a vowel sound takes an, even when the first letter is a consonant.",
              "The answer is \"Hourglass begins with a vowel sound because the h is silent.\" Words like hat sound the h, so they take a."
            ],
            "misconception": "A common mix-up is looking only at the first letter. A silent h means the word begins with a vowel sound.",
            "why": "The answer is \"Hourglass begins with a vowel sound because the h is silent.\" The choice depends on sound, not spelling. A word that begins with a sounded h, like hat, takes a.",
            "like": [
              "SK-GUM2-2-S05"
            ]
          }
        ]
      },
      {
        "title": "Set 2",
        "items": [
          {
            "id": "SK-GUM2-2-C06",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Look at sentences 2 through 6. Select the TWO sentences with a mistake in a small word before a noun.",
            "targets": [
              "p2:1:2",
              "p2:1:3",
              "p2:1:4",
              "p2:1:5",
              "p2:1:6"
            ],
            "answer": [
              "p2:1:3",
              "p2:1:4"
            ],
            "pick": 2,
            "clue": "For each sentence, check the small word before each noun. Does it match the number and the sound of the noun?",
            "hints": [
              "For each sentence, check the small word before each noun. Does it match the number and the sound of the noun?",
              "Take sentences 2 through 6 one at a time. Look at every small word that comes before a noun and say the pair aloud.",
              "Sentence 5 has a pointing word that fits both the number and the distance. Think about the rest."
            ],
            "how": [
              "Check each sentence from 2 through 6 for small words that do not match their nouns.",
              "Sentence 3 says these pebble. Pebble is one thing, so these does not fit. Sentence 4 says a oyster, but oyster begins with a vowel sound.",
              "Sentences 2, 5 and 6 are fine: a bucket and a small net, those two sea stars, and his net."
            ],
            "misconception": "A common mix-up is picking a sentence just because it has a pointing word. Check whether the word fits.",
            "why": "The answers are \"Close to my feet, these pebble rested under a flat rock.\" and \"Kayla found a oyster shell stuck in the wet sand.\" These does not go with one pebble, and oyster needs an. Sentences 2, 5 and 6 are correct.",
            "like": [
              "SK-GUM2-2-S06"
            ]
          },
          {
            "id": "SK-GUM2-2-C07",
            "type": "ebsr",
            "points": 2,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "This question has two parts. Answer Part A, then Part B.",
            "partA": {
              "prompt": "Sentence 7 has a mistake with an owning word. What is the mistake?",
              "choices": [
                {
                  "text": "It is not an owning word, so it should be its.",
                  "correct": true
                },
                {
                  "text": "It is a pointing word, so it should be this one."
                },
                {
                  "text": "It is an article, so it should be a or an."
                },
                {
                  "text": "It is a name, so it should be the crab."
                }
              ]
            },
            "partB": {
              "prompt": "Which rewrite of sentence 7 is correct?",
              "choices": [
                {
                  "text": "A hermit crab pulled its legs inside the shell.",
                  "correct": true
                },
                {
                  "text": "A hermit crab pulled it's legs inside the shell."
                },
                {
                  "text": "A hermit crab pulled itself legs inside the shell."
                },
                {
                  "text": "A hermit crab pulled them legs inside the shell."
                }
              ]
            },
            "clue": "Find the small word before legs in sentence 7. Ask what job it should do: point, name or show who owns.",
            "hints": [
              "Find the small word before legs in sentence 7. Ask what job it should do: point, name or show who owns.",
              "In Part A, decide what the word before legs should tell. In Part B, check each rewrite for a word that does the job and is spelled right.",
              "In Part B, one rewrite puts an apostrophe in the word before legs. Think about whether an apostrophe belongs there."
            ],
            "how": [
              "Part A: the legs belong to the crab, so the word before legs must show owning. It is not an owning word.",
              "Part B: its is the owning word for one animal or thing. It has no apostrophe.",
              "The answers are \"It is not an owning word, so it should be its.\" and \"A hermit crab pulled its legs inside the shell.\" The other rewrites use an apostrophe, a made-up word, or a pronoun."
            ],
            "misconception": "A common mix-up is adding an apostrophe to its. The word it's means it is, so the owning word has none.",
            "why": "Part A: \"It is not an owning word, so it should be its.\" Part B: \"A hermit crab pulled its legs inside the shell.\" Its shows that the legs belong to the crab and has no apostrophe. It's means it is, and them and itself do not fit before legs.",
            "like": [
              "SK-GUM2-2-S07"
            ]
          },
          {
            "id": "SK-GUM2-2-C08",
            "type": "ms",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [],
            "prompt": "Choose the TWO sentences in which a or an is used correctly.",
            "pick": 2,
            "choices": [
              {
                "text": "We spread an oval rug across the wooden floor.",
                "correct": true
              },
              {
                "text": "A clown rode a unicycle across the parking lot.",
                "correct": true
              },
              {
                "text": "Mia needs a umbrella for the long rainy walk."
              },
              {
                "text": "Please hand me an pencil from the top of the desk."
              },
              {
                "text": "Dad packed a egg salad for the long trip."
              }
            ],
            "clue": "Say each noun aloud and listen to its first sound. Then check whether a or an matches that sound.",
            "hints": [
              "Say each noun aloud and listen to its first sound. Then check whether a or an matches that sound.",
              "Check every a and an in the choices, including the ones inside the correct sentences. Do not decide by the first letter alone.",
              "Umbrella begins with a vowel sound. Think about the other choices."
            ],
            "how": [
              "Say each noun after a or an and listen for a vowel or consonant sound.",
              "Oval begins with a vowel sound, so an is right. Unicycle begins with a y sound, which is a consonant sound, so a is right.",
              "Umbrella needs an, pencil needs a, and egg needs an, so those three sentences have mistakes."
            ],
            "misconception": "A common mix-up is going by the first letter. Unicycle starts with a vowel letter but a consonant sound.",
            "why": "The answers are \"We spread an oval rug across the wooden floor.\" and \"A clown rode a unicycle across the parking lot.\" Oval begins with a vowel sound, and unicycle begins with a y sound. Umbrella needs an, pencil needs a, and egg needs an.",
            "like": [
              "SK-GUM2-2-S08"
            ]
          },
          {
            "id": "SK-GUM2-2-C09",
            "type": "mc",
            "points": 1,
            "dok": 1,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [],
            "prompt": "Which phrase is written correctly?",
            "choices": [
              {
                "text": "an elephant",
                "correct": true
              },
              {
                "text": "a elephant"
              },
              {
                "text": "an butterfly"
              },
              {
                "text": "a insect"
              }
            ],
            "clue": "Say each phrase out loud and listen to how the second word begins.",
            "hints": [
              "Say each phrase out loud and listen to how the second word begins.",
              "Listen to the first sound of the second word in each phrase. Then think about which small word goes with that sound.",
              "A word that begins with a consonant sound takes a. Think about the other choices."
            ],
            "how": [
              "Say the second word of each phrase and listen to its first sound.",
              "Elephant begins with a vowel sound, so it takes an. Butterfly begins with a consonant sound, so it takes a.",
              "The answer is an elephant. Insect begins with a vowel sound, so it needs an."
            ],
            "misconception": "A common mix-up is guessing from how the phrase looks. Say it aloud and listen for the first sound.",
            "why": "The answer is an elephant. Elephant begins with a vowel sound, so it takes an. Butterfly begins with a consonant sound, so an butterfly is wrong, and insect begins with a vowel sound, so a insect is wrong.",
            "like": [
              "SK-GUM2-2-S09"
            ]
          },
          {
            "id": "SK-GUM2-2-C10",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "A student asks why sentence 5 says those two sea stars instead of these two sea stars. Which explanation is correct?",
            "choices": [
              {
                "text": "The sea stars are far away, and those is for more than one far thing.",
                "correct": true
              },
              {
                "text": "The sea stars are far away, and those is for just one far thing."
              },
              {
                "text": "The sea stars are far away, and these is the word for things that are far."
              },
              {
                "text": "The sea stars are close by, and those is the word for things that are close."
              }
            ],
            "clue": "A pointing word shows two things: how many there are and how far away they are. Check both in sentence 5.",
            "hints": [
              "A pointing word shows two things: how many there are and how far away they are. Check both in sentence 5.",
              "Find the words at the start of sentence 5 that tell where the sea stars are. Then notice the number two before sea stars.",
              "Those can never go with just one thing. Think about the other choices."
            ],
            "how": [
              "Out by the waves is far from the speaker, so the pointing word must be for far away things.",
              "Two sea stars is more than one, so the pointing word must be a plural one.",
              "The answer is \"The sea stars are far away, and those is for more than one far thing.\" These is for close things."
            ],
            "misconception": "A common mix-up is thinking those and these both mean far. These is for close things and those is for far things.",
            "why": "The answer is \"The sea stars are far away, and those is for more than one far thing.\" Out by the waves is far away and two sea stars is more than one, so those fits. These points to close things.",
            "like": [
              "SK-GUM2-2-S10"
            ]
          }
        ]
      },
      {
        "title": "Set 3",
        "items": [
          {
            "id": "SK-GUM2-2-C11",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Select the TWO sentences in which the pointing word fits both the number and the distance.",
            "targets": [
              "p3:1:3",
              "p3:1:4",
              "p3:1:5",
              "p3:1:6",
              "p3:2:1"
            ],
            "answer": [
              "p3:1:3",
              "p3:1:6"
            ],
            "pick": 2,
            "clue": "A pointing word must match two things: how many there are and how near or far they are. Check both.",
            "hints": [
              "A pointing word must match two things: how many there are and how near or far they are. Check both.",
              "For each sentence, find the words that tell where the thing is. Then see whether the pointing word is for one or for more than one.",
              "In the sentence about the ramp, the thing is far away. Think about the rest."
            ],
            "how": [
              "Check the number first, then the distance, in each sentence.",
              "Beside me is close and cones is more than one, so these fits. Across the lot is far and flags is more than one, so those fits.",
              "Far down the lot is far, but this is for close things. That does not go with helmets, and that does not fit a whistle near my hands."
            ],
            "misconception": "A common mix-up is checking only the number or only the distance. A pointing word has to fit both.",
            "why": "The answers are \"Beside me, these cones marked the start of the slow lane.\" and \"Across the lot, those flags waved over the finish line.\" Both match the number and the distance. The other three do not fit.",
            "like": [
              "SK-GUM2-2-S11"
            ]
          },
          {
            "id": "SK-GUM2-2-C12",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Sentence 9 uses the wrong kind of word before helmets. Choose the owning word that fixes it.",
            "text": "The riders buckled {0} helmets and rolled to the line.",
            "slots": [
              {
                "options": [
                  "they",
                  "them",
                  "theirs",
                  "their"
                ],
                "answer": 3
              }
            ],
            "clue": "An owning word goes before a noun and tells whose it is. Decide which choices can do that job.",
            "hints": [
              "An owning word goes before a noun and tells whose it is. Decide which choices can do that job.",
              "Say each choice right before the word helmets. Listen for the one that sounds right and tells who owns them.",
              "Theirs stands alone and does not go before a noun. Think about the other three choices."
            ],
            "how": [
              "The helmets belong to the riders, and there is more than one rider.",
              "The owning word that goes before a noun for more than one owner is their.",
              "The answer is their. They is a subject word, them is an object word, and theirs stands alone."
            ],
            "misconception": "A common mix-up is using them or they before a noun. Those words never come before a noun like helmets.",
            "why": "The answer is their. The riders own the helmets, and their is the owning word for more than one owner. They and them do not show owning, and theirs does not go before a noun.",
            "like": [
              "SK-GUM2-2-S12"
            ]
          },
          {
            "id": "SK-GUM2-2-C13",
            "type": "dropdown",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [],
            "prompt": "Choose the correct word for each blank.",
            "text": "There is {0} hour left before the picnic, so please pack {1} lunch.",
            "slots": [
              {
                "options": [
                  "a",
                  "an",
                  "those"
                ],
                "answer": 1
              },
              {
                "options": [
                  "you",
                  "your",
                  "yours"
                ],
                "answer": 1
              }
            ],
            "clue": "Each blank needs a different kind of small word. One is chosen by a sound, and the other tells who owns something.",
            "hints": [
              "Each blank needs a different kind of small word. One is chosen by a sound, and the other tells who owns something.",
              "For the first blank, say the word hour aloud and listen. For the second blank, ask whose lunch it is.",
              "Yours stands alone and does not go before a noun like lunch. Use that to check the second blank."
            ],
            "how": [
              "The first blank comes before hour. Hour begins with a vowel sound because the h is silent, so it takes an.",
              "The second blank comes before lunch and tells whose lunch it is. Your is the owning word that goes before a noun.",
              "The answers are an and your. A would need a consonant sound, and you and yours do not go before a noun."
            ],
            "misconception": "A common mix-up is choosing a because hour starts with the letter h. The silent h makes the sound a vowel sound.",
            "why": "The answers are an and your. Hour begins with a vowel sound, so it takes an. Your is the owning word that goes before lunch. Those cannot go with one hour, and you and yours do not go before a noun.",
            "like": [
              "SK-GUM2-2-S13"
            ]
          },
          {
            "id": "SK-GUM2-2-C14",
            "type": "hottext",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [],
            "prompt": "Select the sentence that has a mistake with an owning word.",
            "options": [
              "My cousin lost his bike key at the lake.",
              "The kitten licked its paw after dinner.",
              "Ben and I cleaned we room on Sunday.",
              "Is this your jacket on the bench?",
              "The twins packed their lunches in a cooler."
            ],
            "answer": [
              2
            ],
            "pick": 1,
            "clue": "An owning word goes before a noun and tells whose it is. Check each one.",
            "hints": [
              "An owning word goes before a noun and tells whose it is. Check each one.",
              "Find the word before each noun that tells who owns it. Then ask whether it is the right kind of word to go before a noun.",
              "The sentence about the kitten uses an owning word for an animal, and it is fine. Think about the rest."
            ],
            "how": [
              "Look at each word that tells who owns something.",
              "In the sentence about the room, we is a word for people doing something. It does not go before room.",
              "The answer is \"Ben and I cleaned we room on Sunday.\" It should be our room. The other sentences use his, its, your and their correctly."
            ],
            "misconception": "A common mix-up is thinking we and our are the same. We names the people doing something, and our shows they own it.",
            "why": "The answer is \"Ben and I cleaned we room on Sunday.\" It should say our room. His, its, your and their are all owning words used correctly in the other sentences.",
            "like": [
              "SK-GUM2-2-S14"
            ]
          },
          {
            "id": "SK-GUM2-2-C15",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
            ],
            "passages": [],
            "prompt": "Jo says, \"Use an before every word that begins with a vowel letter.\" Which phrase shows that Jo is wrong?",
            "choices": [
              {
                "text": "a uniform for the band",
                "correct": true
              },
              {
                "text": "an old coat for the winter"
              },
              {
                "text": "an ice cube for the drink"
              },
              {
                "text": "an elbow pad for the game"
              }
            ],
            "clue": "To show a rule is wrong, find an example that breaks it. Check the first sound, not just the first letter, of the word after a or an.",
            "hints": [
              "To show a rule is wrong, find an example that breaks it. Check the first sound, not just the first letter, of the word after a or an.",
              "All four phrases begin with a vowel letter. Say the second word of each phrase and listen to its first sound.",
              "Jo's idea is about letters, but a or an goes by sounds. Think about the other choices."
            ],
            "how": [
              "Jo's rule only looks at letters. A better rule listens to sounds.",
              "Old, ice and elbow begin with vowel sounds, so an works. Uniform begins with a y sound, which is a consonant sound, so it takes a.",
              "The answer is \"a uniform for the band.\" It starts with a vowel letter but uses a."
            ],
            "misconception": "A common mix-up is thinking vowel letters always make vowel sounds. Uniform begins with a y sound.",
            "why": "The answer is \"a uniform for the band.\" Uniform begins with the letter u but starts with a y sound, so it takes a. That proves Jo wrong. Old, ice and elbow begin with vowel sounds and take an.",
            "like": [
              "SK-GUM2-2-S15"
            ]
          }
        ]
      }
    ]
  },
  similar: [
    {
      "id": "SK-GUM2-2-S01",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [],
      "prompt": "Tap the line that mixes up a pointing word with its noun.",
      "options": [
        "Our band meets in the music room on Tuesdays.",
        "Where did you buy that shoes?",
        "The bear scratched its back on a tree.",
        "Those cookies on the counter are for the party.",
        "Did you bring your reading book?"
      ],
      "answer": [
        1
      ],
      "pick": 1,
      "clue": "Pointing words have to agree with their nouns in number. Check each noun.",
      "hints": [
        "Pointing words have to agree with their nouns in number. Check each noun.",
        "Find each pointing word and its noun. Say whether the noun is one thing or more than one.",
        "The line about the cookies uses a pointing word and a plural noun that agree. Think about the rest."
      ],
      "how": [
        "Look at each pointing word and the noun after it.",
        "That goes with one thing, but shoes is more than one.",
        "The answer is \"Where did you buy that shoes?\" It should be those shoes or that shoe."
      ],
      "misconception": "A common mix-up is trusting a pointing word because it sounds natural. Check the noun after it.",
      "why": "The answer is \"Where did you buy that shoes?\" That goes with one thing, but shoes means more than one, so it should be those shoes.",
      "like": [
        "SK-GUM2-2-P4"
      ]
    },
    {
      "id": "SK-GUM2-2-S02",
      "type": "match",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [],
      "prompt": "Decide how each word helps a noun, then place it in a column.",
      "cols": [
        "Plain article",
        "Shows near or far",
        "Shows the owner"
      ],
      "rows": [
        {
          "text": "a",
          "answer": 0
        },
        {
          "text": "that",
          "answer": 1
        },
        {
          "text": "her",
          "answer": 2
        },
        {
          "text": "these",
          "answer": 1
        },
        {
          "text": "its",
          "answer": 2
        },
        {
          "text": "your",
          "answer": 2
        }
      ],
      "clue": "Ask whether the word only marks a noun, tells how far away it is, or tells who has it.",
      "hints": [
        "Ask whether the word only marks a noun, tells how far away it is, or tells who has it.",
        "Say the word before a noun, such as ___ dog. Decide which job it does.",
        "An article marks a noun without pointing or owning. Think about which word only marks."
      ],
      "how": [
        "Think of a noun to go with each word.",
        "A is the article. That and these show near or far. Her, its and your show the owner.",
        "Place each word in the column for its job."
      ],
      "misconception": "A common mix-up is thinking its is the same as it's. Its shows an owner and has no apostrophe.",
      "why": "A is an article. That and these show near or far. Her, its and your show the owner.",
      "like": [
        "SK-GUM2-2-P5"
      ]
    },
    {
      "id": "SK-GUM2-2-S03",
      "type": "mc",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Pick the rewrite of sentence 4 that has no mistake with a or an.",
      "choices": [
        {
          "text": "Next to him, an eighth grader wrote a long email address.",
          "correct": true
        },
        {
          "text": "Next to him, a eighth grader wrote a long email address."
        },
        {
          "text": "Next to him, an eighth grader wrote an long email address."
        },
        {
          "text": "Next to him, a eighth grader wrote an long email address."
        }
      ],
      "clue": "Say the word that follows each a or an and listen to its first sound. Sentence 4 has two places to check.",
      "hints": [
        "Say the word that follows each a or an and listen to its first sound. Sentence 4 has two places to check.",
        "Check the small word before eighth, and then the small word before long.",
        "Long begins with a consonant sound. Think about the other choices."
      ],
      "how": [
        "Sentence 4 has two small words, one before eighth and one before long.",
        "Eighth begins with a vowel sound, so it needs an. Long begins with a consonant sound, so it keeps a.",
        "The answer is \"Next to him, an eighth grader wrote a long email address.\" The other choices keep a before eighth or use an before long."
      ],
      "misconception": "A common mix-up is fixing one small word and then changing the one that was already right. Check every a and an.",
      "why": "The answer is \"Next to him, an eighth grader wrote a long email address.\" Eighth begins with a vowel sound, so it needs an, and long begins with a consonant sound, so it keeps a. Each other choice leaves one small word wrong.",
      "like": [
        "SK-GUM2-2-C03"
      ]
    },
    {
      "id": "SK-GUM2-2-S04",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Which word belongs in the blank so the sentence points correctly?",
      "text": "Way up on the shelf, {0} chessboard waits for the first game.",
      "slots": [
        {
          "options": [
            "these",
            "this",
            "that"
          ],
          "answer": 2
        }
      ],
      "clue": "A pointing word has to match how many things there are and how far away they are.",
      "hints": [
        "A pointing word has to match how many things there are and how far away they are.",
        "Count the chessboards. Then look at the place named at the start of the sentence and decide whether it is close or far.",
        "These is a pointing word for more than one thing. Think about the other two choices."
      ],
      "how": [
        "Chessboard is one thing, so the pointing word must be for one.",
        "Way up on the shelf is not close to the speaker, so the word must be for a far thing.",
        "The answer is that. These goes with more than one, and this is for a close thing."
      ],
      "misconception": "A common mix-up is picking a plural pointing word because the board sits among other things. The noun is one board.",
      "why": "The answer is that. The chessboard is one thing that is far away, so that fits. These goes with more than one thing, and this points to something close.",
      "like": [
        "SK-GUM2-2-C04"
      ]
    },
    {
      "id": "SK-GUM2-2-S05",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Why does sentence 9 say an honor?",
      "choices": [
        {
          "text": "Honor is spoken without its first letter, much like the word on.",
          "correct": true
        },
        {
          "text": "Names of prizes always want an in front of them, whatever comes next."
        },
        {
          "text": "Nouns with many letters want an in front of them, even when others do not."
        },
        {
          "text": "Winning ends with the letter g, and that calls for an in front of honor."
        }
      ],
      "clue": "Say the noun out loud. A or an depends on what you hear.",
      "hints": [
        "Say the noun out loud. A or an depends on what you hear.",
        "Say honor slowly. Notice whether you hear a breathy h at the very beginning.",
        "Words like help and home start with the same letter but take a. Think about the other choices."
      ],
      "how": [
        "Say honor. You hear ON-er, with no h at the start.",
        "A word that opens with a vowel sound takes an.",
        "The answer is \"Honor is spoken without its first letter, much like the word on.\" Words like home sound the h, so they take a."
      ],
      "misconception": "A common mix-up is thinking an goes with certain meanings or lengths. It goes with a vowel sound.",
      "why": "The answer is \"Honor is spoken without its first letter, much like the word on.\" The choice depends on sound, not spelling or meaning. A word with a sounded h, like home, takes a.",
      "like": [
        "SK-GUM2-2-C05"
      ]
    },
    {
      "id": "SK-GUM2-2-S06",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Two of sentences 2 to 6 contain a small word that does not suit its noun. Tap them.",
      "targets": [
        "p5:1:2",
        "p5:1:3",
        "p5:1:4",
        "p5:1:5",
        "p5:1:6"
      ],
      "answer": [
        "p5:1:3",
        "p5:1:4"
      ],
      "pick": 2,
      "clue": "Check every small word before a noun. It must suit the noun's sound and number.",
      "hints": [
        "Check every small word before a noun. It must suit the noun's sound and number.",
        "Go through sentences 2 to 6 in order. Pair each small word with its noun and say them aloud.",
        "Sentence 2 uses a and an with nouns that begin with the sounds they need. Think about the rest."
      ],
      "how": [
        "Test each small word with its noun, one sentence at a time.",
        "Sentence 3 says a old hat, but old begins with a vowel sound. Sentence 4 says that tools, but tools is more than one.",
        "Sentences 2, 5 and 6 are fine."
      ],
      "misconception": "A common mix-up is stopping after the first mistake you find. Check every sentence in the range.",
      "why": "The answers are \"My brother brought a ladder and a old hat to block the sun.\" and \"Down by the garden, that tools lay in a heap on the grass.\" Old needs an, and that goes with one thing, not tools. Sentences 2, 5 and 6 are correct.",
      "like": [
        "SK-GUM2-2-C06"
      ]
    },
    {
      "id": "SK-GUM2-2-S07",
      "type": "ebsr",
      "points": 2,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Work out the first half, then use it for the second half.",
      "partA": {
        "prompt": "What kind of word does sentence 8 need before paw?",
        "choices": [
          {
            "text": "A word showing who has the paw, because the paw is the cat's.",
            "correct": true
          },
          {
            "text": "A word showing how far away the paw is, because the cat is across the room."
          },
          {
            "text": "A word that follows a sound rule, because paw begins with a consonant sound."
          },
          {
            "text": "A word telling the kind of animal, because cat is not specific enough."
          }
        ]
      },
      "partB": {
        "prompt": "Which version of sentence 8 is written correctly?",
        "choices": [
          {
            "text": "The cat licked its paw and walked through the wet paint.",
            "correct": true
          },
          {
            "text": "The cat licked it's paw and walked through the wet paint."
          },
          {
            "text": "The cat licked itself paw and walked through the wet paint."
          },
          {
            "text": "The cat licked it paw and walked through the wet paint."
          }
        ]
      },
      "clue": "Find the word before paw in sentence 8. Ask what job that spot needs done.",
      "hints": [
        "Find the word before paw in sentence 8. Ask what job that spot needs done.",
        "In the first half, decide what the spot before paw should tell. In the second, check each version for an owning word that is spelled right.",
        "In the second half, one version puts an apostrophe in the owning word. Think about whether it belongs."
      ],
      "how": [
        "Part A: the paw belongs to the cat, so the spot needs a word that shows who has it.",
        "Part B: its is the owning word for one animal, and it has no apostrophe.",
        "The answers are \"A word showing who has the paw, because the paw is the cat's.\" and \"The cat licked its paw and walked through the wet paint.\""
      ],
      "misconception": "A common mix-up is adding an apostrophe to its. The apostrophe form it's means it is.",
      "why": "Part A: \"A word showing who has the paw, because the paw is the cat's.\" Part B: \"The cat licked its paw and walked through the wet paint.\" Its shows the paw belongs to the cat and takes no apostrophe.",
      "like": [
        "SK-GUM2-2-C07"
      ]
    },
    {
      "id": "SK-GUM2-2-S08",
      "type": "ms",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [],
      "prompt": "Tap both phrases where the small word suits the sound of the next word.",
      "pick": 2,
      "choices": [
        {
          "text": "an honest answer on the quiz",
          "correct": true
        },
        {
          "text": "a useful tool for the job",
          "correct": true
        },
        {
          "text": "a open window in the attic"
        },
        {
          "text": "an little brown bird"
        },
        {
          "text": "a ant on the leaf"
        }
      ],
      "clue": "Say the word after each a or an and listen to how it begins. Compare the sound with the small word.",
      "hints": [
        "Say the word after each a or an and listen to how it begins. Compare the sound with the small word.",
        "Check all five phrases, including the ones that look right. Go by the sound that follows, not the first letter.",
        "Little begins with a consonant sound. Think about the other choices."
      ],
      "how": [
        "Listen to the first sound of the word after the small word.",
        "Honest begins with a vowel sound because the h is silent, so an is right. Useful begins with a y sound, so a is right.",
        "Open and ant need an, and little needs a."
      ],
      "misconception": "A common mix-up is going by the first letter. Honest starts with h but sounds like it starts with a vowel.",
      "why": "The answers are \"an honest answer on the quiz\" and \"a useful tool for the job.\" Honest begins with a vowel sound, and useful begins with a y sound. Open and ant need an, and little needs a.",
      "like": [
        "SK-GUM2-2-C08"
      ]
    },
    {
      "id": "SK-GUM2-2-S09",
      "type": "mc",
      "points": 1,
      "dok": 1,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [],
      "prompt": "Karen is writing a label for each box in the attic. Which label has the small word and the noun matched correctly?",
      "choices": [
        {
          "text": "an ocean",
          "correct": true
        },
        {
          "text": "a ocean"
        },
        {
          "text": "an river"
        },
        {
          "text": "a island"
        }
      ],
      "clue": "Say each label out loud and listen to how the second word begins.",
      "hints": [
        "Say each label out loud and listen to how the second word begins.",
        "Listen to the first sound of the second word each time. Then decide which small word fits that sound.",
        "A word that begins with a consonant sound takes a. Think about the other choices."
      ],
      "how": [
        "Say the second word of each label and listen to its first sound.",
        "Ocean begins with a vowel sound, so it takes an. River begins with a consonant sound, so it takes a.",
        "The answer is an ocean. Island begins with a vowel sound, so it needs an."
      ],
      "misconception": "A common mix-up is guessing from how the label looks. Say it and listen.",
      "why": "The answer is an ocean. Ocean begins with a vowel sound, so it takes an. River begins with a consonant sound, so an river is wrong, and island begins with a vowel sound, so a island is wrong.",
      "like": [
        "SK-GUM2-2-C09"
      ]
    },
    {
      "id": "SK-GUM2-2-S10",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Which pair of clues in sentence 5 leads to the word these?",
      "choices": [
        {
          "text": "Next to me points nearby, and brushes names a group.",
          "correct": true
        },
        {
          "text": "Next to me points nearby, but brushes names a single brush."
        },
        {
          "text": "Across the yard points away, and brushes names a group."
        },
        {
          "text": "Dripped shows past time, and brushes names a group."
        }
      ],
      "clue": "A pointing word reacts to two clues. Find one clue about the place and one about the number.",
      "hints": [
        "A pointing word reacts to two clues. Find one clue about the place and one about the number.",
        "Look at the words at the start of sentence 5 and at the noun that follows the blank. Decide what each one tells you.",
        "Dripped is a verb, and a pointing word does not depend on the verb. Think about the other choices."
      ],
      "how": [
        "The words at the start of sentence 5 tell where the brushes are: next to the speaker.",
        "Brushes ends in -es, so it names more than one thing. These is the pointing word for more than one close thing.",
        "The answer is \"Next to me points nearby, and brushes names a group.\""
      ],
      "misconception": "A common mix-up is thinking a plural pointing word always means far. These means close.",
      "why": "The answer is \"Next to me points nearby, and brushes names a group.\" Next to me is near and brushes is more than one, so these fits. A far place would call for those, and one thing would call for this or that.",
      "like": [
        "SK-GUM2-2-C10"
      ]
    },
    {
      "id": "SK-GUM2-2-S11",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Which two listed lines choose their pointing word correctly?",
      "targets": [
        "p6:1:3",
        "p6:1:4",
        "p6:2:2",
        "p6:2:5",
        "p6:2:6"
      ],
      "answer": [
        "p6:2:2",
        "p6:2:5"
      ],
      "pick": 2,
      "clue": "A pointing word should fit two things: the number and the distance. Check both in each sentence.",
      "hints": [
        "A pointing word should fit two things: the number and the distance. Check both in each sentence.",
        "Find the words that say where the thing is. Then see whether the noun is one or more than one.",
        "In the sentence about the shell, the noun is only one thing. Think about the rest."
      ],
      "how": [
        "Check the noun's number and the thing's distance in each listed sentence.",
        "Out past the trees is far, and crew is one group, so that fits. Close to us is near, and boxes is more than one, so these fits.",
        "Those tiny shell, this heavy rocks and that fossils each have a number that does not fit the noun."
      ],
      "misconception": "A common mix-up is checking only the number or only the distance. A pointing word has to fit both.",
      "why": "The answers are \"Out past the trees, that digging crew worked on a huge bone.\" and \"Close to us, these boxes held a dozen more fossils.\" Each pointing word fits the number and the distance. The other three have a pointing word that does not fit the noun.",
      "like": [
        "SK-GUM2-2-C11"
      ]
    },
    {
      "id": "SK-GUM2-2-S12",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "In sentence 9, the word before brushes cannot show owning. Which choice can?",
      "text": "Gran washed {0} brushes at the sink with an old rag.",
      "slots": [
        {
          "options": [
            "she",
            "hers",
            "her"
          ],
          "answer": 2
        }
      ],
      "clue": "An owning word goes before a noun and tells whose it is. Decide which choices can do that job.",
      "hints": [
        "An owning word goes before a noun and tells whose it is. Decide which choices can do that job.",
        "Say each choice right before the word brushes. Listen for the one that sounds right and tells who owns them.",
        "Hers stands alone and does not go before a noun. Think about the other two choices."
      ],
      "how": [
        "The brushes belong to Gran, who is one woman.",
        "The owning word that goes before a noun for one woman is her.",
        "The answer is her. She is a subject word, and hers stands alone."
      ],
      "misconception": "A common mix-up is using she before a noun. She names who does something and never comes before a noun like brushes.",
      "why": "The answer is her. Gran is one woman, and her is the owning word that goes before a noun. She does not show owning, and hers does not go before a noun.",
      "like": [
        "SK-GUM2-2-C12"
      ]
    },
    {
      "id": "SK-GUM2-2-S13",
      "type": "dropdown",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [],
      "prompt": "Complete the sentence by filling both gaps.",
      "text": "Dana asked for {0} extra minute, and Pablo handed over {1} stopwatch.",
      "slots": [
        {
          "options": [
            "a",
            "an",
            "these"
          ],
          "answer": 1
        },
        {
          "options": [
            "him",
            "his",
            "he"
          ],
          "answer": 1
        }
      ],
      "clue": "Each gap needs a different kind of small word. One is chosen by a sound, and the other tells who owns something.",
      "hints": [
        "Each gap needs a different kind of small word. One is chosen by a sound, and the other tells who owns something.",
        "For the first gap, say the word after it aloud and listen. For the second gap, ask whose stopwatch it is.",
        "He does the action and does not go before a noun like stopwatch. Use that to check the second gap."
      ],
      "how": [
        "The first gap comes before extra. Extra begins with a vowel sound, so it takes an.",
        "The second gap comes before stopwatch and tells whose it is. His is the owning word that goes before a noun.",
        "The answers are an and his. These goes with more than one thing, and he and him do not go before a noun."
      ],
      "misconception": "A common mix-up is choosing him because Pablo is a person. Before a noun, the owning word is his.",
      "why": "The answers are an and his. Extra begins with a vowel sound, so it takes an. His is the owning word that goes before stopwatch. These cannot go with one extra minute, and he and him do not go before a noun.",
      "like": [
        "SK-GUM2-2-C13"
      ]
    },
    {
      "id": "SK-GUM2-2-S14",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [],
      "prompt": "Tap the line where the word before the noun cannot show owning.",
      "options": [
        "The cow swished its tail at the flies.",
        "Rosa tied him shoes before the race.",
        "We left our boots by the back door.",
        "Are those your keys on the table?",
        "Mr. Fox forgot his lunch at home."
      ],
      "answer": [
        1
      ],
      "pick": 1,
      "clue": "An owning word goes before a noun and tells whose it is. Check each one.",
      "hints": [
        "An owning word goes before a noun and tells whose it is. Check each one.",
        "Find the word before each noun that tells who owns it. Ask whether it can do that job.",
        "The sentence about the cow uses an owning word for an animal, and it is fine. Think about the rest."
      ],
      "how": [
        "Look at each word that tells who owns something.",
        "Rosa is a girl, and him is not an owning word. The word before shoes should show that the shoes belong to her.",
        "The answer is \"Rosa tied him shoes before the race.\" It should be her shoes. The other sentences use its, our, your and his correctly."
      ],
      "misconception": "A common mix-up is using him where an owning word is needed. Him is for the person who gets an action.",
      "why": "The answer is \"Rosa tied him shoes before the race.\" It should say her shoes. Its, our, your and his are all owning words used correctly in the other sentences.",
      "like": [
        "SK-GUM2-2-C14"
      ]
    },
    {
      "id": "SK-GUM2-2-S15",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr"
      ],
      "passages": [],
      "prompt": "Ty thinks a can never be followed by a word that starts with a, e, i, o or u. Which phrase proves him wrong?",
      "choices": [
        {
          "text": "a one-day trip to the lake",
          "correct": true
        },
        {
          "text": "a big yellow bus for the team"
        },
        {
          "text": "a cold glass of milk at lunch"
        },
        {
          "text": "a noisy crowd of fans on the hill"
        }
      ],
      "clue": "To show an idea is wrong, find an example that breaks it. Think about the sounds that begin the words after a.",
      "hints": [
        "To show an idea is wrong, find an example that breaks it. Think about the sounds that begin the words after a.",
        "Look at the first letter of each word after a. Then say the words aloud and listen to how they really begin.",
        "Ty's idea is about letters, but a goes by sounds. Think about the other choices."
      ],
      "how": [
        "Ty's idea looks at letters only. Look for a word after a that begins with a vowel letter.",
        "Big, cold and noisy begin with consonant letters. One starts with the letter o but sounds like w.",
        "The answer is \"a one-day trip to the lake.\" The word one begins with a w sound, so it takes a."
      ],
      "misconception": "A common mix-up is thinking vowel letters always make vowel sounds. One begins with a w sound.",
      "why": "The answer is \"a one-day trip to the lake.\" One begins with the letter o but starts with a w sound, so it takes a. That proves Ty wrong. The other phrases begin with consonant letters.",
      "like": [
        "SK-GUM2-2-C15"
      ]
    }
  ],
  addons: {
    "SK-GUM2-2-P1": {
      "hints": [
        "Say the word that comes right after the blank. Listen to how it starts.",
        "Think about whether the word after the blank begins with a vowel sound or a consonant sound.",
        "These goes with more than one thing. Think about the other two choices."
      ],
      "how": [
        "Say the word after the blank: old. It begins with a vowel sound.",
        "A word that begins with a vowel sound takes an.",
        "The answer is an. A would go with a consonant sound, and these goes with more than one thing."
      ],
      "misconception": "A common mix-up is choosing a because it is the shorter word. Listen to the sound that follows."
    },
    "SK-GUM2-2-P2": {
      "hints": [
        "Check whether the noun is one thing or more than one, and whether the thing is close or far.",
        "Look at the noun after the blank and at where the boots are.",
        "Them is not a word that goes before a noun like boots. Think about the other choices."
      ],
      "how": [
        "Boots is more than one thing.",
        "The boots are on my feet, which is close. A pointing word for more than one close thing is these.",
        "This and that go with only one thing, and them does not go before a noun."
      ],
      "misconception": "A common mix-up is choosing this because the boots are close. The boots are more than one."
    },
    "SK-GUM2-2-P3": {
      "hints": [
        "Check each small word before a noun. Does it match the sound or the number of the noun?",
        "Look at the word before eagle and the word before branch in each choice. Say each pair aloud.",
        "A sentence with a before eagle is a candidate for the mistake. Think about the other choices."
      ],
      "how": [
        "Check a or an before eagle and the pointing word before branch.",
        "Eagle begins with a vowel sound, so it takes an. Branch is one thing far away, so it takes that.",
        "The answer is \"We saw an eagle on that branch over there.\" Those and them do not go with one branch."
      ],
      "misconception": "A common mix-up is choosing a because eagle looks like a short word. Listen to its first sound."
    },
    "SK-GUM2-2-P4": {
      "hints": [
        "Check each sentence for a small word that does not agree with its noun.",
        "Look at each pointing word and the noun after it. Ask if the noun is one thing or more than one.",
        "The sentence about the sunflowers has an owning word that fits. Think about the rest."
      ],
      "how": [
        "Check each pointing word with its noun.",
        "This goes with one thing, but grapes means more than one.",
        "The answer is \"Can I try one of this grapes?\" It should be these grapes."
      ],
      "misconception": "A common mix-up is trusting this because it sounds natural in a spoken question."
    },
    "SK-GUM2-2-P5": {
      "hints": [
        "Ask what job each word does before a noun: mark it, point to it, or show who owns it.",
        "Say each word before a noun, like ___ cat. Decide which job fits.",
        "There are only three articles. Use that to sort some of the words first."
      ],
      "how": [
        "Think of a noun to go with each word.",
        "An and the are articles. Those and this point. Their and my tell who owns something.",
        "Sort each word into the job it does."
      ],
      "misconception": "A common mix-up is putting their with the pointing words because they look alike. Their shows owning."
    }
  },
  /* B7b:core:end */
  test: [
    { id: "SK-GUM2-2-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Ramon ate {0} orange after soccer practice.",
      slots: [ { options: ["a", "an", "those"], answer: 1 } ],
      clue: "Say the next word aloud. Listen to its first sound, and count how many there are.",
      why: "The answer is an. Orange starts with a vowel sound, so it needs an. Ramon ate one orange, so those does not fit." },
    { id: "SK-GUM2-2-T2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Do you see {0} kite stuck at the very top of the pine tree?",
      slots: [ { options: ["these", "those", "that"], answer: 2 } ],
      clue: "Is there one kite or more than one? Is it close by or far away?",
      why: "The answer is that. There is one kite, and it is far away at the top of a tree. These and those go with more than one thing." },
    { id: "SK-GUM2-2-T3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "These shells came from a beach in Georgia.", correct: true },
        { text: "This shells came from a beach in Georgia." },
        { text: "These shells came from an beach in Georgia." },
        { text: "Them shells came from a beach in Georgia." }
      ],
      clue: "Check the word before shells and the word before beach.",
      why: "The answer is \"These shells came from a beach in Georgia.\" Shells means more than one, so it needs these. Beach starts with a consonant sound, so it needs a." },
    { id: "SK-GUM2-2-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO sentences have an error?",
      choices: [
        { text: "My brother lost his left shoe at the park." },
        { text: "We packed a umbrella for the beach trip.", correct: true },
        { text: "That bus is the one that goes to our school." },
        { text: "Those horse lives in the red barn.", correct: true },
        { text: "Your backpack is under the table." },
        { text: "An ant crawled across the sidewalk." }
      ],
      clue: "Check every small word before a noun. Listen for the first sound of the next word, and count whether the noun is one or more than one.",
      why: "The answers are \"We packed a umbrella for the beach trip.\" and \"Those horse lives in the red barn.\" Umbrella starts with a vowel sound, so it needs an. Horse is one animal, so it needs that, not those." },
    { id: "SK-GUM2-2-T5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Kenji wrote {0} thank-you note and put it in {1} backpack.",
      slots: [
        { options: ["a", "an", "these"], answer: 0 },
        { options: ["him", "he", "his"], answer: 2 }
      ],
      clue: "The first blank needs an article that matches the sound of the next word. The second blank needs a word that tells whose backpack.",
      why: "The answers are a and his. Thank-you starts with a consonant sound, so it needs a. His tells that the backpack belongs to Kenji." }
  ]
});

/* ---------- GUM2-3: capitalize proper nouns ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:capitalize-proper-nouns",
  title: "Capital letters for proper nouns",
  teach: {
    big: "A proper noun names one special person, place or thing, and it always starts with a capital letter.",
    points: [
      "Names of people and pets get capitals: Maya, a cat named Biscuit. Titles right before a name do too: Dr. Patel, Aunt Rosa.",
      "Names of special places get capitals: Atlanta, Georgia, Elm Street, Lake Lanier.",
      "Days of the week, months and holidays get capitals: Monday, April, Labor Day. In a holiday name with more than one word, the big words get capitals, and small words like of stay small.",
      "Common nouns like city, street and teacher do not get capitals. Neither does aunt, unless it comes right before a name. Seasons like summer and winter stay small too."
    ],
    words: [
      { term: "proper noun", means: "the name of one special person, place or thing" },
      { term: "common noun", means: "a word for any person, place or thing, like girl or city" }
    ],
    example: {
      label: "Example",
      lines: ["On Friday, my aunt drove us to Savannah to see the big ships on the river."],
      note: "Friday and Savannah name a special day and a special place, so they start with capitals. Aunt, ships and river are common nouns here, so they stay small."
    },
    tip: "On the test, you may need to find the word that should start with a capital letter. Ask: Is this the name of one special person, place, day, month or holiday?"
  },
  learn: [
    {
      show: ["Last july, my family went to the beach on tybee island."],
      ask: "Which words need capital letters?",
      steps: [
        "Look for names of days, months and holidays. July is a month, so it needs a capital.",
        "Look for names of special places. Tybee Island is the name of one island, so both words need capitals.",
        "Check the common nouns. Family and beach are not names, so they stay small."
      ],
      answer: "Last July, my family went to the beach on Tybee Island."
    },
    {
      show: ["My Teacher, Mr. Reed, reads to us every Morning."],
      ask: "Which words have capital letters that do not belong?",
      steps: [
        "Find the names. Mr. Reed is a person's name, so it keeps its capitals.",
        "Teacher does not name one special person. It is a common noun, so it should be small.",
        "Morning is a time of day, not the name of a day or a holiday, so it should be small too."
      ],
      answer: "My teacher, Mr. Reed, reads to us every morning."
    },
    {
      show: ["My neighbor Mr. Singh drives to lake Norman every august."],
      ask: "Which words need capital letters?",
      steps: [
        "Look for the name of a person. Mr. Singh is a title and a name, and it already has capitals. Neighbor is an everyday word, so it stays small.",
        "Look for the name of a place. Lake Norman is the name of one lake, so both words need capitals.",
        "Look for a month. August is a month, so it needs a capital."
      ],
      answer: "My neighbor Mr. Singh drives to Lake Norman every August."
    }
  ],
  parent: "Look at a calendar or a piece of mail together. Have your child point to each word with a capital letter and tell you whether it names a person, a place, a day, a month or a holiday.",
  passages: [
    /* B7b:passages:start */
    {
      "id": "p1",
      "title": "Camping Weekend",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last weekend, my cousin Jada and I went camping in the mountains of Georgia.",
          "(2) We left on friday after school in her uncle's truck.",
          "(3) Uncle Marcus drove us past a farm and through the town of Dahlonega.",
          "(4) Our tent went up beside Lake Burton."
        ],
        [
          "(5) A ranger named ms. Patel gave us a map of the trails.",
          "(6) On Saturday, we hiked up a steep hill and found a small cave.",
          "(7) Jada's dog, Pepper, chased a squirrel around a big oak tree."
        ],
        [
          "(8) Back at camp, we cooked beans on a little stove.",
          "(9) By Sunday morning, our sleeping bags smelled like smoke.",
          "(10) We packed up the tent and drove home with sleepy smiles."
        ]
      ]
    },
    {
      "id": "p2",
      "title": "The Museum Trip",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On Tuesday, we all went by yellow bus to a museum in Atlanta.",
          "(2) Our teacher, Mr. Brooks, counted us twice at the door.",
          "(3) A guide named Ms. Lopez led us into a room full of old maps."
        ],
        [
          "(4) Her favorite map showed the atlantic ocean and a tiny ship.",
          "(5) Later, we ate lunch at a Park across the street.",
          "(6) Eli found a coin by the fountain and gave it to a guard."
        ],
        [
          "(7) On the ride home, we sang songs about the sea.",
          "(8) We got back to brookside school just before three o'clock.",
          "(9) That night, I told my family about every map I saw.",
          "(10) Now I want to see the real ocean someday."
        ]
      ]
    },
    {
      "id": "p3",
      "title": "Parade Day",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Our town holds a big parade every November on Veterans Day.",
          "(2) The parade starts on Cedar street and ends at the fire station.",
          "(3) Mayor Hale rides in front on a shiny red wagon.",
          "(4) The Jackson Elementary band plays loud drums and horns."
        ],
        [
          "(5) My neighbor, mrs. Ortiz, waves a flag from her porch.",
          "(6) Little kids on the Sidewalk throw candy to the crowd.",
          "(7) A float shaped like a giant Peach rolls past the library."
        ],
        [
          "(8) By noon, everyone is tired but happy and a little bit sunburned.",
          "(9) We watch the last band march away beyond the bridge.",
          "(10) Next year, I want to ride on a float of my own."
        ]
      ]
    },
    {
      "id": "p4",
      "title": "A Day at the Zoo",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last spring, our class took a long trip to the zoo in Memphis.",
          "(2) Our bus rolled out early on wednesday, packed with snacks.",
          "(3) My grandpa came along as a helper for our whole class.",
          "(4) Grandpa Leo carried a camera and a floppy hat."
        ],
        [
          "(5) The otters were shown to us by dr. Rowe, a keeper.",
          "(6) The zoo sits beside the Mississippi River.",
          "(7) A seal clapped its flippers when the crowd cheered and laughed."
        ],
        [
          "(8) After a picnic lunch, we bought small gifts at the shop.",
          "(9) Grandpa Leo picked a toy tiger for my sister.",
          "(10) We rode home tired and happy, and I fell asleep before dinner."
        ]
      ]
    },
    {
      "id": "p5",
      "title": "The Bake Sale",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On Saturday, our school held a big bake sale in the lunchroom.",
          "(2) Mrs. Haynes, the principal, cut the first cake.",
          "(3) A parent named Mr. Tran brought a pan of lemon bars."
        ],
        [
          "(4) Some cookies came from a shop in tampa.",
          "(5) My friend Ana sold muffins at the Table by the door.",
          "(6) A boy bought three cupcakes with a crumpled five-dollar bill."
        ],
        [
          "(7) By noon, every pie and every loaf of bread was gone.",
          "(8) We counted all the money in the office with the secretary.",
          "(9) We plan to buy more books for the pine hill library with it.",
          "(10) Everyone agreed it was a sweet and happy morning."
        ]
      ]
    },
    {
      "id": "p6",
      "title": "Moving Day",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) In January, my whole family moved into a different house.",
          "(2) Our street is called birch lane, and it ends at a pond.",
          "(3) Coach Dunn, who lives next door, helped us carry boxes.",
          "(4) His daughter, tia, brought us warm bread."
        ],
        [
          "(5) My brother carried a lamp up the Stairs.",
          "(6) We unpacked the kitchen boxes before supper that night.",
          "(7) Next sunday, we plan a picnic by the pond with all our new friends."
        ],
        [
          "(8) The first meal in our new home was soup eaten on the floor.",
          "(9) Our new neighbor waved at us from across the lane.",
          "(10) I think we will like it here very much, and I cannot wait."
        ]
      ]
    }
    /* B7b:passages:end */
  ],
  practice: [
    { id: "SK-GUM2-3-P1", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has a capitalization error.",
      options: [
        "Our school has no classes on Memorial Day.",
        "Grandpa Joe grew up in Alabama.",
        "My best friend moved to dallas last year.",
        "We swim at the pool every summer.",
        "Ms. Rivera teaches music on Tuesdays."
      ],
      answer: [2], pick: 1,
      clue: "Look for the name of a special person, place, day, month or holiday that starts with a small letter.",
      why: "The answer is \"My best friend moved to dallas last year.\" Dallas is the name of a city, so it needs a capital D. Summer is a season, so it stays small." },
    { id: "SK-GUM2-3-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses capital letters correctly?",
      choices: [
        { text: "In October, we visited a pumpkin farm near Athens.", correct: true },
        { text: "In october, we visited a pumpkin farm near Athens." },
        { text: "In October, we visited a Pumpkin Farm near Athens." },
        { text: "In October, we visited a pumpkin farm near athens." }
      ],
      clue: "Find the month and the town. Then check the other nouns. Are they names or just everyday words?",
      why: "The answer is \"In October, we visited a pumpkin farm near Athens.\" October is a month and Athens is a town, so both need capitals. A pumpkin farm is not a name, so it stays small." },
    { id: "SK-GUM2-3-P3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Our class will sing songs at the {0} parade.",
      slots: [ { options: ["Fourth of July", "fourth of July", "fourth of july"], answer: 0 } ],
      clue: "Is this the name of a holiday? Which words in the name are big, important words?",
      why: "The answer is Fourth of July. It is the name of a holiday, so Fourth and July start with capitals. The small word of stays small." },
    { id: "SK-GUM2-3-P4", type: "ms", points: 2, dok: 2, passages: [], pick: 3,
      prompt: "Which THREE words in the sentence should begin with a capital letter?",
      stem: "My cousin lives on maple street in the city of macon.",
      choices: [
        { text: "cousin" },
        { text: "lives" },
        { text: "maple", correct: true },
        { text: "street", correct: true },
        { text: "city" },
        { text: "macon", correct: true }
      ],
      clue: "Find the name of a street and the name of a city. Then check every word in each name.",
      why: "The answers are maple, street and macon. Maple Street is the name of one street, so both words need capitals. Macon is the name of a city. Cousin and city are common nouns, and lives is an action word." },
    { id: "SK-GUM2-3-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "These words are written with no capital letters. Sort each one: should it start with a capital letter or not?",
      cols: ["Needs a capital", "Stays small"],
      rows: [
        { text: "saturday", answer: 0 },
        { text: "holiday", answer: 1 },
        { text: "mexico", answer: 0 },
        { text: "country", answer: 1 },
        { text: "thanksgiving", answer: 0 },
        { text: "teacher", answer: 1 }
      ],
      clue: "Ask: Does this word name one special day, place or holiday? Or is it a word for any day, place or person?",
      why: "Saturday, Mexico and Thanksgiving are names of a special day, country and holiday, so they need capitals. Holiday, country and teacher are common nouns, so they stay small." }
  ],
  /* B7b:core:start */
  /* ---------- Expansion 2026-10-22, batch B7b (GUM Reinforce, second half) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test.
     Author log: docs/expansion-2026-10-22/batches/B7b-author-log.md. NOT ACCEPTED: needs independent review. */
  core: {
    "rev": "1",
    "sets": [
      {
        "title": "Set 1",
        "items": [
          {
            "ref": "SK-GUM2-3-P4"
          },
          {
            "ref": "SK-GUM2-3-P5"
          },
          {
            "id": "SK-GUM2-3-C03",
            "type": "mc",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "There is a capital-letter mistake in sentence 2. What is it?",
            "choices": [
              {
                "text": "Friday names one day of the week, and it must begin with a capital F.",
                "correct": true
              },
              {
                "text": "School names a place where we learn, and it must begin with a capital S."
              },
              {
                "text": "Truck names a vehicle that rolls, and it must begin with a capital T."
              },
              {
                "text": "Left names an action word, and it must begin with a capital L."
              }
            ],
            "clue": "Capital letters go on the names of one special person, place, day, month or holiday. Look for one in sentence 2.",
            "hints": [
              "Capital letters go on the names of one special person, place, day, month or holiday. Look for one in sentence 2.",
              "Read sentence 2 and find each noun. Decide which ones are names and which are everyday words.",
              "Left tells what the group did. It is an action word, not a name, so check the other choices."
            ],
            "how": [
              "Sentence 2 says friday with a small f.",
              "Friday is the name of one day of the week, so it needs a capital F. School and truck are everyday words.",
              "The answer is \"Friday names one day of the week, and it must begin with a capital F.\" Left is an action word, so it stays small."
            ],
            "misconception": "A common mix-up is thinking every noun needs a capital letter. Only the name of one special thing does, so school and truck stay small.",
            "why": "The answer is \"Friday names one day of the week, and it must begin with a capital F.\" Friday is the name of a day. School, truck and left are everyday words, so they stay small.",
            "like": [
              "SK-GUM2-3-S03"
            ]
          },
          {
            "id": "SK-GUM2-3-C04",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 5 writes a person's title and name the wrong way. Pick the correct version.",
            "text": "A ranger named {0} gave us a map of the trails.",
            "slots": [
              {
                "options": [
                  "Ms. Patel",
                  "ms. Patel",
                  "Ms. patel"
                ],
                "answer": 0
              }
            ],
            "clue": "A person's name and the title in front of it follow the same capital-letter rules. Look at both parts in each choice.",
            "hints": [
              "A person's name and the title in front of it follow the same capital-letter rules. Look at both parts in each choice.",
              "Say the name as it is written in the sentence. Compare it with how each choice starts.",
              "The three choices differ in whether the title and the last name start with capitals."
            ],
            "how": [
              "Ms. Patel is the name of one person, with a title in front of it.",
              "A title right before a name is part of the name, so the title and the last name both start with capitals.",
              "The answer is Ms. Patel. The draft wrote ms. with a small m, and Ms. patel leaves the last name small."
            ],
            "misconception": "A common mix-up is fixing only the last name. A title in front of a name needs a capital letter too.",
            "why": "The answer is Ms. Patel. A title right before a person's name is part of the name, so the title and the last name both start with capitals.",
            "like": [
              "SK-GUM2-3-S04"
            ]
          },
          {
            "id": "SK-GUM2-3-C05",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 2 writes her uncle's truck, but sentence 3 writes Uncle Marcus. Why does only the second one have a capital letter?",
            "choices": [
              {
                "text": "Marcus follows Uncle in sentence 3 to make a name; no name follows uncle's in sentence 2.",
                "correct": true
              },
              {
                "text": "Both sentences are right, because every word for a relative always needs a capital letter."
              },
              {
                "text": "Sentence 2 is wrong, because uncle's names a family member and so needs a capital letter."
              },
              {
                "text": "Sentence 3 is wrong, because Uncle is an everyday word that should always stay small."
              }
            ],
            "clue": "Compare how the word uncle is written in each sentence. Then think about what the word is doing in each one.",
            "hints": [
              "Compare how the word uncle is written in each sentence. Then think about what the word is doing in each one.",
              "Read the words around uncle in each sentence out loud.",
              "Words like aunt and cousin are written small in everyday sentences. Think about the other choices."
            ],
            "how": [
              "Sentence 2 says her uncle's truck. Sentence 3 says Uncle Marcus.",
              "A word like uncle gets a capital letter when it comes right before a person's name. It stays small when it is just a word for a relative.",
              "The answer is \"Marcus follows Uncle in sentence 3 to make a name; no name follows uncle's in sentence 2.\""
            ],
            "misconception": "A common mix-up is capitalizing every family word. Uncle, aunt and grandpa get capitals only when they come right before a name.",
            "why": "The answer is \"Marcus follows Uncle in sentence 3 to make a name; no name follows uncle's in sentence 2.\" In sentence 3 the word is part of a name, so it needs a capital. In sentence 2 it is only a word for a relative, so it stays small.",
            "like": [
              "SK-GUM2-3-S05"
            ]
          }
        ]
      },
      {
        "title": "Set 2",
        "items": [
          {
            "id": "SK-GUM2-3-C06",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Look at sentences 2 through 6. Select the TWO sentences with a capital-letter mistake.",
            "targets": [
              "p2:1:2",
              "p2:1:3",
              "p2:2:1",
              "p2:2:2",
              "p2:2:3"
            ],
            "answer": [
              "p2:2:1",
              "p2:2:2"
            ],
            "pick": 2,
            "clue": "Check each sentence for names of one special person, place or title. Also look for capital letters on words that are not names.",
            "hints": [
              "Check each sentence for names of one special person, place or title. Also look for capital letters on words that are not names.",
              "Take sentences 2 through 6 one at a time. For every capital letter, ask whether the word names one special thing. For every small letter, ask whether it should.",
              "Sentence 6 uses fountain with a small letter, and that matches an everyday thing. Think about the rest."
            ],
            "how": [
              "Check sentences 2 through 6 one at a time.",
              "Sentence 4 names one special ocean, so both words need capitals. Sentence 5 has a park with no name, so it should stay small.",
              "Mr. Brooks, Ms. Lopez and the fountain in sentences 2, 3 and 6 are written correctly."
            ],
            "misconception": "A common mix-up is thinking a capital letter makes a word look important. Only names of one special thing get one.",
            "why": "The answers are \"Her favorite map showed the atlantic ocean and a tiny ship.\" and \"Later, we ate lunch at a Park across the street.\" Atlantic Ocean is the name of one ocean, so both words need capitals. The park has no name, so it stays small. Sentences 2, 3 and 6 are correct.",
            "like": [
              "SK-GUM2-3-S06"
            ]
          },
          {
            "id": "SK-GUM2-3-C07",
            "type": "ebsr",
            "points": 2,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "This question has two parts. Answer Part A, then Part B.",
            "partA": {
              "prompt": "What mistake does sentence 8 have with capital letters?",
              "choices": [
                {
                  "text": "Brookside School names one special school, so both words need capitals.",
                  "correct": true
                },
                {
                  "text": "School is an everyday noun, so only Brookside needs a capital in this sentence."
                },
                {
                  "text": "Three o'clock names a special time, so it needs a capital T in this sentence."
                },
                {
                  "text": "Back begins a new idea, so it should start with a capital B in this sentence."
                }
              ]
            },
            "partB": {
              "prompt": "Which version of sentence 8 fixes the problem?",
              "choices": [
                {
                  "text": "We got back to Brookside School just before three o'clock.",
                  "correct": true
                },
                {
                  "text": "We got back to Brookside school just before three o'clock."
                },
                {
                  "text": "We got back to brookside School just before three o'clock."
                },
                {
                  "text": "We got back to Brookside School just before Three o'clock."
                }
              ]
            },
            "clue": "Look at the name of the school in sentence 8. Decide how many words belong to that name.",
            "hints": [
              "Look at the name of the school in sentence 8. Decide how many words belong to that name.",
              "In Part B, compare how each rewrite writes the name of the school. Then check the other words too.",
              "Three o'clock is a time, not a name. Think about the other choices."
            ],
            "how": [
              "Part A: Brookside School is the name of one special school, so every word in the name starts with a capital.",
              "Part B: the rewrite must capitalize both words in the name and leave the other words as they are.",
              "The answers are \"Brookside School names one special school, so both words need capitals.\" and \"We got back to Brookside School just before three o'clock.\""
            ],
            "misconception": "A common mix-up is capitalizing only the first word of a name. Every important word in the name of a school needs a capital.",
            "why": "Part A: \"Brookside School names one special school, so both words need capitals.\" Part B: \"We got back to Brookside School just before three o'clock.\" Back and before are everyday words, so they stay small.",
            "like": [
              "SK-GUM2-3-S07"
            ]
          },
          {
            "id": "SK-GUM2-3-C08",
            "type": "ms",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [],
            "prompt": "Choose the TWO sentences that use capital letters correctly.",
            "pick": 2,
            "choices": [
              {
                "text": "Grandma Ruth sent us a box of peaches from Georgia.",
                "correct": true
              },
              {
                "text": "Our family eats pancakes every Sunday in the spring.",
                "correct": true
              },
              {
                "text": "We visited aunt Nell in Orlando with my cousins last week."
              },
              {
                "text": "Our Teacher read a poem about Winter to the whole class."
              },
              {
                "text": "In march, the Class planted beans in the garden by the fence."
              }
            ],
            "clue": "Check each capital letter and each small letter in the choices. Ask whether each word is a name.",
            "hints": [
              "Check each capital letter and each small letter in the choices. Ask whether each word is a name.",
              "Look at the names of people, places, days and months in each choice. Then look at the seasons and the everyday nouns.",
              "One choice has a name with a title in front of it that is spelled with a small letter. Think about which one."
            ],
            "how": [
              "Look for names that begin with a small letter and everyday words that begin with a capital.",
              "Grandma Ruth, Georgia and Sunday are written correctly, and spring and pancakes stay small.",
              "Aunt Nell needs a capital A, teacher and winter stay small, and March needs a capital M while class stays small."
            ],
            "misconception": "A common mix-up is capitalizing a season. Spring, summer, fall and winter are not names, so they stay small.",
            "why": "The answers are \"Grandma Ruth sent us a box of peaches from Georgia.\" and \"Our family eats pancakes every Sunday in the spring.\" Ruth, Georgia and Sunday are names, and spring is a season. The other choices have a title, a month, a season or an everyday noun written the wrong way.",
            "like": [
              "SK-GUM2-3-S08"
            ]
          },
          {
            "id": "SK-GUM2-3-C09",
            "type": "mc",
            "points": 1,
            "dok": 1,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [],
            "prompt": "Which choice has every capital letter in the right place?",
            "choices": [
              {
                "text": "We played soccer on Thursday.",
                "correct": true
              },
              {
                "text": "we played soccer on Thursday."
              },
              {
                "text": "We played Soccer on Thursday."
              },
              {
                "text": "We played soccer on thursday."
              }
            ],
            "clue": "Check the first word of the sentence and the name of the day.",
            "hints": [
              "Check the first word of the sentence and the name of the day.",
              "Look for a name that should have a capital letter and for an everyday word that should not.",
              "Soccer is the name of a game, not the name of one special thing. Think about the other choices."
            ],
            "how": [
              "The first word of every sentence starts with a capital letter.",
              "Thursday is the name of a day, so it needs a capital T. Soccer is an everyday word, so it stays small.",
              "The answer is \"We played soccer on Thursday.\""
            ],
            "misconception": "A common mix-up is capitalizing the name of a game or sport. Soccer stays small.",
            "why": "The answer is \"We played soccer on Thursday.\" The sentence starts with a capital, Thursday is a day so it has a capital, and soccer is an everyday word so it stays small.",
            "like": [
              "SK-GUM2-3-S09"
            ]
          },
          {
            "id": "SK-GUM2-3-C10",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Ravi says museum in sentence 1 needs a capital letter because it names a place. Which reply shows the problem with his idea?",
            "choices": [
              {
                "text": "Museum names any building of that kind, but Atlanta is one special city.",
                "correct": true
              },
              {
                "text": "A capital letter belongs on any word that names a place, so Ravi is right about museum."
              },
              {
                "text": "A capital letter belongs on any noun in a sentence, so museum and bus both need one."
              },
              {
                "text": "A capital letter belongs only on people's names, so no place ever gets one."
              }
            ],
            "clue": "Think about the difference between one particular place and places in general.",
            "hints": [
              "Think about the difference between one particular place and places in general.",
              "Read sentence 1 again. Does it say which museum it is?",
              "Some places do get capital letters. Think about the other choices."
            ],
            "how": [
              "Ravi's idea is that every place word gets a capital.",
              "Atlanta is the name of one special city, so it gets a capital. A museum with no name given is just any museum.",
              "The answer is \"Museum names any building of that kind, but Atlanta is one special city.\""
            ],
            "misconception": "A common mix-up is capitalizing a word because it names a place. Only the name of one special place gets a capital.",
            "why": "The answer is \"Museum names any building of that kind, but Atlanta is one special city.\" Atlanta is a special place with a name. The museum in sentence 1 has no name given, so it stays museum.",
            "like": [
              "SK-GUM2-3-S10"
            ]
          }
        ]
      },
      {
        "title": "Set 3",
        "items": [
          {
            "id": "SK-GUM2-3-C11",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Look at sentences 3 through 7. Pick the TWO sentences written with the right capital letters.",
            "targets": [
              "p3:1:3",
              "p3:1:4",
              "p3:2:1",
              "p3:2:2",
              "p3:2:3"
            ],
            "answer": [
              "p3:1:3",
              "p3:1:4"
            ],
            "pick": 2,
            "clue": "Check each sentence for names of people and places. Also check for capital letters on everyday words.",
            "hints": [
              "Check each sentence for names of people and places. Also check for capital letters on everyday words.",
              "Take sentences 3 through 7 one at a time. Mark each name that starts with a capital, and mark each everyday word that starts with a capital.",
              "The sentence about the float has a fruit word written with a capital. Think about the rest."
            ],
            "how": [
              "Test each sentence for a title, a name or an everyday noun written the wrong way.",
              "Sentence 3 has a title and a name that both start with capitals. Sentence 4 has the name of a school written with capitals.",
              "Sentence 5 needs Mrs., sentence 6 needs sidewalk, and sentence 7 needs peach."
            ],
            "misconception": "A common mix-up is stopping once you find one sentence that looks right. Check every sentence in the range.",
            "why": "The answers are \"Mayor Hale rides in front on a shiny red wagon.\" and \"The Jackson Elementary band plays loud drums and horns.\" Mayor Hale is a title and a name. Jackson Elementary is the name of a school. The other three sentences have a title with a small letter or an everyday noun with a capital.",
            "like": [
              "SK-GUM2-3-S11"
            ]
          },
          {
            "id": "SK-GUM2-3-C12",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Sentence 2 spells the street's name the wrong way. Pick the correct way.",
            "text": "The parade starts on {0} and ends at the fire station.",
            "slots": [
              {
                "options": [
                  "Cedar Street",
                  "Cedar street",
                  "cedar street"
                ],
                "answer": 0
              }
            ],
            "clue": "A name for one special street is a proper noun. Check how each choice writes the name of the street.",
            "hints": [
              "A name for one special street is a proper noun. Check how each choice writes the name of the street.",
              "Look at both words in the name. The three choices start them in different ways.",
              "The fire station is an everyday place, so it is not written with capitals. Look at the choices for the street."
            ],
            "how": [
              "Cedar Street is the name of one special street.",
              "A name with more than one word needs a capital on every important word.",
              "The answer is Cedar Street. The draft left the word street small, and cedar street leaves both words small."
            ],
            "misconception": "A common mix-up is capitalizing only the first word of a name. Both words in the name of a street need capitals.",
            "why": "The answer is Cedar Street. It is the name of one special street, so both Cedar and Street start with capitals. The fire station is an everyday place, so it stays small.",
            "like": [
              "SK-GUM2-3-S12"
            ]
          },
          {
            "id": "SK-GUM2-3-C13",
            "type": "dropdown",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [],
            "prompt": "Pick the right words for the two blanks.",
            "text": "Our class cleans the shore of {0} every year on {1}.",
            "slots": [
              {
                "options": [
                  "Lake Erie",
                  "lake Erie",
                  "Lake erie"
                ],
                "answer": 0
              },
              {
                "options": [
                  "Earth Day",
                  "earth day",
                  "Earth day"
                ],
                "answer": 0
              }
            ],
            "clue": "One blank holds the name of a lake and the other holds the name of a holiday. Check how each choice starts its words.",
            "hints": [
              "One blank holds the name of a lake and the other holds the name of a holiday. Check how each choice starts its words.",
              "Names of holidays and names of lakes follow the same rule. Look at every word in each choice.",
              "Names of holidays are special names. Check how each choice for the second blank starts its words."
            ],
            "how": [
              "The first blank is the name of one lake, and the second blank is the name of one holiday.",
              "In both names, every important word starts with a capital letter.",
              "The answers are Lake Erie and Earth Day."
            ],
            "misconception": "A common mix-up is leaving the kind of place small, as in lake Erie. The word Lake is part of the name.",
            "why": "The answers are Lake Erie and Earth Day. Lake Erie is the name of one lake, and Earth Day is the name of a holiday, so each word in them starts with a capital.",
            "like": [
              "SK-GUM2-3-S13"
            ]
          },
          {
            "id": "SK-GUM2-3-C14",
            "type": "hottext",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [],
            "prompt": "Select the sentence in which a word has a capital letter that it should not have.",
            "options": [
              "Mayor Chu cut the ribbon at the new library.",
              "My brother plays drums in a band called the Wildcats.",
              "We camped near the Colorado River last summer.",
              "My Cousin lives in Tennessee.",
              "A man on Harper Road sold us peaches."
            ],
            "answer": [
              3
            ],
            "pick": 1,
            "clue": "Check each capital letter. Ask whether the word is the name of one special person, place or thing.",
            "hints": [
              "Check each capital letter. Ask whether the word is the name of one special person, place or thing.",
              "Look at the everyday words that come in the middle of each sentence, such as the words for kinds of people and places.",
              "The sentence about the river names one special river. Think about the rest."
            ],
            "how": [
              "Every capital in the middle of a sentence should be part of a name.",
              "Mayor Chu, the Wildcats, the Colorado River, Tennessee and Harper Road are all names.",
              "The answer is \"My Cousin lives in Tennessee.\" Cousin is an everyday word here, so it should stay small."
            ],
            "misconception": "A common mix-up is capitalizing a word for a relative. It gets a capital only right before a name.",
            "why": "The answer is \"My Cousin lives in Tennessee.\" Cousin does not come right before a name, so it should be cousin. The other sentences capitalize only names.",
            "like": [
              "SK-GUM2-3-S14"
            ]
          },
          {
            "id": "SK-GUM2-3-C15",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:capitalize-proper-nouns"
            ],
            "passages": [],
            "prompt": "Ben says, \"Any word that names a person needs a capital letter.\" Which sentence shows that Ben is wrong?",
            "choices": [
              {
                "text": "Our neighbor waved at the crowd from her porch.",
                "correct": true
              },
              {
                "text": "Principal Wu waved at the crowd from the stage."
              },
              {
                "text": "Nurse Cole waved at the crowd from the doorway."
              },
              {
                "text": "Dr. Ames waved at the crowd from the hallway."
              }
            ],
            "clue": "To show an idea is wrong, find a sentence where the idea does not work. Look at how each sentence writes the word that names a person.",
            "hints": [
              "To show an idea is wrong, find a sentence where the idea does not work. Look at how each sentence writes the word that names a person.",
              "In each choice, find the word or words that name a person and check whether they begin with a capital letter.",
              "Ben's idea is about every word for a person. Think about the other choices."
            ],
            "how": [
              "Ben's idea says every word for a person gets a capital. Look for a person word that does not.",
              "A title right before a name is part of the name, so it gets a capital. A plain word like neighbor is not a name.",
              "The answer is \"Our neighbor waved at the crowd from her porch.\""
            ],
            "misconception": "A common mix-up is thinking all person words are names. A word like neighbor names a kind of person, not one special person.",
            "why": "The answer is \"Our neighbor waved at the crowd from her porch.\" Neighbor names a person but is not the name of one special person, so it stays small. That proves Ben wrong. The other sentences use titles with names.",
            "like": [
              "SK-GUM2-3-S15"
            ]
          }
        ]
      }
    ]
  },
  similar: [
    {
      "id": "SK-GUM2-3-S01",
      "type": "ms",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [],
      "prompt": "Jo is fixing a postcard for her grandma. Tap three spots where Jo's note needs capitals.",
      "stem": "Our neighbor sells peaches at a stand on mill road in dalton.",
      "pick": 3,
      "choices": [
        {
          "text": "mill",
          "correct": true
        },
        {
          "text": "road",
          "correct": true
        },
        {
          "text": "dalton",
          "correct": true
        },
        {
          "text": "neighbor"
        },
        {
          "text": "peaches"
        },
        {
          "text": "stand"
        }
      ],
      "clue": "Look for the name of a road and the name of a town. Then check every word in each name.",
      "hints": [
        "Look for the name of a road and the name of a town. Then check every word in each name.",
        "A name can have more than one word. Look at each word in the sentence and ask if it belongs to a name.",
        "Peaches is an everyday word. Think about the other choices."
      ],
      "how": [
        "Find the name of a road and the name of a town.",
        "Mill Road is the name of one road, so both words need capitals. Dalton is the name of a town.",
        "The answers are mill, road and dalton. Neighbor, peaches and stand are everyday words."
      ],
      "misconception": "A common mix-up is leaving the kind of place small. Road is part of the name Mill Road.",
      "why": "The answers are mill, road and dalton. Mill Road is the name of one road, and Dalton is a town. Neighbor, peaches and stand are everyday words.",
      "like": [
        "SK-GUM2-3-P4"
      ]
    },
    {
      "id": "SK-GUM2-3-S02",
      "type": "match",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [],
      "prompt": "Decide how each word should be written.",
      "cols": [
        "Capital letter",
        "Small letter"
      ],
      "rows": [
        {
          "text": "tuesday",
          "answer": 0
        },
        {
          "text": "weekday",
          "answer": 1
        },
        {
          "text": "canada",
          "answer": 0
        },
        {
          "text": "island",
          "answer": 1
        },
        {
          "text": "easter",
          "answer": 0
        },
        {
          "text": "principal",
          "answer": 1
        }
      ],
      "clue": "Ask whether the word is the name of one special thing or a word for a whole group of things.",
      "hints": [
        "Ask whether the word is the name of one special thing or a word for a whole group of things.",
        "Make a sentence for each word, such as We visit ___ in the summer. See if the word names one special thing.",
        "Think of one real day, one real country and one real holiday."
      ],
      "how": [
        "Think about whether each word names one special day, place or holiday.",
        "Tuesday, Canada and Easter are names. Weekday, island and principal are everyday words.",
        "Place each word in the column that matches."
      ],
      "misconception": "A common mix-up is capitalizing a word because it sounds important. Principal is a job word, not a name.",
      "why": "Tuesday, Canada and Easter are the names of a day, a country and a holiday, so they get capitals. Weekday, island and principal are everyday words, so they stay small.",
      "like": [
        "SK-GUM2-3-P5"
      ]
    },
    {
      "id": "SK-GUM2-3-S03",
      "type": "mc",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Which version of sentence 2 has no mistakes?",
      "choices": [
        {
          "text": "Our bus rolled out early on Wednesday, packed with snacks.",
          "correct": true
        },
        {
          "text": "Our bus rolled out early on Wednesday, packed with Snacks."
        },
        {
          "text": "Our Bus rolled out early on wednesday, packed with snacks."
        },
        {
          "text": "Our bus rolled out early on wednesday, packed with snacks."
        }
      ],
      "clue": "Look for a name that must begin with a capital letter. Then check whether any everyday noun has been given one.",
      "hints": [
        "Look for a name that must begin with a capital letter. Then check whether any everyday noun has been given one.",
        "Check the name of the day in each rewrite, and then check the nouns snacks and bus.",
        "Bus and snacks are things anyone can ride in or eat. Think about the other choices."
      ],
      "how": [
        "Sentence 2 has a day of the week that begins with a small letter.",
        "Wednesday is the name of a day, so it needs a capital W. Snacks and bus stay small.",
        "The answer is \"Our bus rolled out early on Wednesday, packed with snacks.\""
      ],
      "misconception": "A common mix-up is fixing the name and then adding capitals to other nouns too. Only the name changes.",
      "why": "The answer is \"Our bus rolled out early on Wednesday, packed with snacks.\" Wednesday is the name of a day. Snacks and bus are everyday nouns, so they stay small.",
      "like": [
        "SK-GUM2-3-C03"
      ]
    },
    {
      "id": "SK-GUM2-3-S04",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Pick the way to write the keeper's name.",
      "text": "The otters were shown to us by {0}, a keeper.",
      "slots": [
        {
          "options": [
            "Dr. Rowe",
            "dr. Rowe",
            "Dr. rowe"
          ],
          "answer": 0
        }
      ],
      "clue": "A title before a person's name and the name itself follow the same rules for first letters. Look at both parts of each choice.",
      "hints": [
        "A title before a person's name and the name itself follow the same rules for first letters. Look at both parts of each choice.",
        "Read the name aloud as it is written in the draft. Compare it with how each choice begins.",
        "The three choices differ in whether the title and the last name begin with capitals."
      ],
      "how": [
        "Dr. Rowe is one person's name with a title.",
        "The title is part of the name, so it and the last name both begin with capitals.",
        "The answer is Dr. Rowe. The draft wrote dr. with a small d, and Dr. rowe leaves the last name small."
      ],
      "misconception": "A common mix-up is thinking a short title like Dr. does not need a capital. It does when it comes right before a name.",
      "why": "The answer is Dr. Rowe. A title right before a name is part of the name, so Dr. and Rowe both begin with capitals.",
      "like": [
        "SK-GUM2-3-C04"
      ]
    },
    {
      "id": "SK-GUM2-3-S05",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Sentence 4 spells Grandpa with a big G, while sentence 3 spells grandpa with a little g. Which fact explains this?",
      "choices": [
        {
          "text": "Leo follows Grandpa in sentence 4, forming a name, while my comes first in sentence 3.",
          "correct": true
        },
        {
          "text": "The mistake is in sentence 3, since grandpa is spelled with a G on every page."
        },
        {
          "text": "The mistake is in sentence 4, since words for relatives take a lowercase g everywhere."
        },
        {
          "text": "Later lines in a draft take capitals, so the fourth line is capitalized and the third is not."
        }
      ],
      "clue": "Compare the two places. Notice what sits beside the word each time.",
      "hints": [
        "Compare the two places. Notice what sits beside the word each time.",
        "Say each phrase out loud: my grandpa and Grandpa Leo. Notice what the word does in each one.",
        "Look at what comes right after the word each time. Think about the other choices."
      ],
      "how": [
        "Sentence 3 uses my grandpa. Sentence 4 uses Grandpa Leo.",
        "A relative word gets a capital when it is joined to a person's name. With the word my in front, it stays small.",
        "The answer is \"Leo follows Grandpa in sentence 4, forming a name, while my comes first in sentence 3.\""
      ],
      "misconception": "A common mix-up is thinking that a relative word always needs a capital. It needs one only when it is part of a name.",
      "why": "The answer is \"Leo follows Grandpa in sentence 4, forming a name, while my comes first in sentence 3.\" In sentence 4 the word is part of his name. In sentence 3 it is an everyday noun with my in front of it.",
      "like": [
        "SK-GUM2-3-C05"
      ]
    },
    {
      "id": "SK-GUM2-3-S06",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "In sentences 2 to 6, two words are capitalized wrongly. Tap those sentences.",
      "targets": [
        "p5:1:2",
        "p5:1:3",
        "p5:2:1",
        "p5:2:2",
        "p5:2:3"
      ],
      "answer": [
        "p5:2:1",
        "p5:2:2"
      ],
      "pick": 2,
      "clue": "Look for names that should begin with capitals and for everyday words that should not.",
      "hints": [
        "Look for names that should begin with capitals and for everyday words that should not.",
        "Go through sentences 2 to 6 in order. Check each title, each place and each object.",
        "Sentence 3 has a title and a name that are both written with capitals. Think about the rest."
      ],
      "how": [
        "Read each sentence and look at every word that begins with a capital or a small letter.",
        "Sentence 4 names a city with a small letter, and sentence 5 gives a capital to an everyday piece of furniture.",
        "Sentences 2, 3 and 6 are fine."
      ],
      "misconception": "A common mix-up is stopping after the first mistake you find. Check every sentence in the range.",
      "why": "The answers are \"Some cookies came from a shop in tampa.\" and \"My friend Ana sold muffins at the Table by the door.\" Tampa is a city and needs a capital. A table by a door has no special name, so it stays small. Sentences 2, 3 and 6 are correct.",
      "like": [
        "SK-GUM2-3-C06"
      ]
    },
    {
      "id": "SK-GUM2-3-S07",
      "type": "ebsr",
      "points": 2,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Answer the first half, then use your answer for the second half.",
      "partA": {
        "prompt": "Pick the best description of what is wrong in sentence 9.",
        "choices": [
          {
            "text": "Pine Hill Library has its own name, so small letters are the error there.",
            "correct": true
          },
          {
            "text": "Books are objects on the shelves of this town, so writing them with a small b is the error."
          },
          {
            "text": "Plan starts a thought right here, so writing it with a small p is the error at the front."
          },
          {
            "text": "It stands for a person that we all know, so writing it with a small i is the error."
          }
        ]
      },
      "partB": {
        "prompt": "Pick the rewrite of sentence 9 that has no errors.",
        "choices": [
          {
            "text": "We plan to buy more books for the Pine Hill Library with it.",
            "correct": true
          },
          {
            "text": "We plan to buy more books for the Pine hill library with it."
          },
          {
            "text": "We plan to buy more books for the Pine Hill library with it."
          },
          {
            "text": "We plan to buy more books for the pine hill Library with it."
          }
        ]
      },
      "clue": "Find the nouns in sentence 9. Ask which ones point to one special thing.",
      "hints": [
        "Find the nouns in sentence 9. Ask which ones point to one special thing.",
        "In the second half, compare how each version writes the library and the other nouns.",
        "Books is an everyday word for things on a shelf. Think about the other choices."
      ],
      "how": [
        "Part A: the library in sentence 9 has its own name.",
        "Part B: the correct version gives every word in the library's name a capital and leaves the everyday nouns small.",
        "The answers are \"Pine Hill Library has its own name, so small letters are the error there.\" and \"We plan to buy more books for the Pine Hill Library with it.\""
      ],
      "misconception": "A common mix-up is capitalizing the kind of place and not the name. Every word in the name of the library needs a capital.",
      "why": "Part A: \"Pine Hill Library has its own name, so small letters are the error there.\" Part B: \"We plan to buy more books for the Pine Hill Library with it.\" Books and plan are everyday words, so they stay small.",
      "like": [
        "SK-GUM2-3-C07"
      ]
    },
    {
      "id": "SK-GUM2-3-S08",
      "type": "ms",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [],
      "prompt": "Tap both sentences that have the right capital letters.",
      "pick": 2,
      "choices": [
        {
          "text": "Uncle Ben took the twins to the fair in August.",
          "correct": true
        },
        {
          "text": "Her favorite game is checkers, and she plays on Saturdays.",
          "correct": true
        },
        {
          "text": "My Brother lives in Ohio near lake Erie."
        },
        {
          "text": "We celebrate Mother's day with a picnic each May."
        },
        {
          "text": "Mr. rios, our coach, ran onto the field."
        }
      ],
      "clue": "Look at each name and each everyday noun. Ask whether its first letter is right.",
      "hints": [
        "Look at each name and each everyday noun. Ask whether its first letter is right.",
        "Check the sentences you think are wrong as well as the ones you think are right. Look for titles and holidays too.",
        "One choice names a holiday with a small letter. Think about which one."
      ],
      "how": [
        "Check the first letter of each name and each everyday noun.",
        "Uncle Ben, August, checkers and Saturdays are all written correctly.",
        "The other three sentences give a capital to brother, give a small letter to a holiday, or write the coach's title and name Mr. rios with a small r."
      ],
      "misconception": "A common mix-up is thinking a day or month written in the plural is not a name. Saturdays still starts with a capital.",
      "why": "The answers are \"Uncle Ben took the twins to the fair in August.\" and \"Her favorite game is checkers, and she plays on Saturdays.\" Uncle Ben is a title and name, and August and Saturdays are names. The other choices have a name or title with a small letter, or an everyday noun with a capital.",
      "like": [
        "SK-GUM2-3-C08"
      ]
    },
    {
      "id": "SK-GUM2-3-S09",
      "type": "mc",
      "points": 1,
      "dok": 1,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [],
      "prompt": "Pick the sentence with no capital-letter mistakes.",
      "choices": [
        {
          "text": "Our library is closed on Monday.",
          "correct": true
        },
        {
          "text": "Our Library is closed on Monday."
        },
        {
          "text": "Our library is closed on monday."
        },
        {
          "text": "our library is closed on Monday."
        }
      ],
      "clue": "Check the first word of the sentence and the name of the day.",
      "hints": [
        "Check the first word of the sentence and the name of the day.",
        "Look for an everyday noun that does not need a capital, and a name that does.",
        "The first word of every sentence is capitalized. Think about the other choices."
      ],
      "how": [
        "Library is an everyday word here, not the name of one place.",
        "Monday is the name of a day, so it needs a capital M.",
        "The answer is \"Our library is closed on Monday.\""
      ],
      "misconception": "A common mix-up is capitalizing a place word that has no name. Library stays small.",
      "why": "The answer is \"Our library is closed on Monday.\" The sentence begins with a capital, Monday is a day, and library is an everyday word.",
      "like": [
        "SK-GUM2-3-C09"
      ]
    },
    {
      "id": "SK-GUM2-3-S10",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Ana thinks school in sentence 1 should start big since bake sales are fun. What is the best reply?",
      "choices": [
        {
          "text": "Only a school's real name begins big, and none is given here.",
          "correct": true
        },
        {
          "text": "Fun events earn big letters at the start of a word, so the S is a good choice."
        },
        {
          "text": "Buildings of every sort begin with big letters, so Ana has this one right."
        },
        {
          "text": "People's names alone begin with big letters, so Ana should write her own name as ana."
        }
      ],
      "clue": "Think about why a word gets a capital. Is it because the word is important, or because of something else?",
      "hints": [
        "Think about why a word gets a capital. Is it because the word is important, or because of something else?",
        "Read sentence 1 again. Does it give the school a name of its own?",
        "Some people in the draft do get capitals, such as Ana. Think about the other choices."
      ],
      "how": [
        "Ana's idea is that fun things get capitals.",
        "Capitals go on the names of people, places and things. A school with no name given is just any school.",
        "The answer is \"Only a school's real name begins big, and none is given here.\""
      ],
      "misconception": "A common mix-up is capitalizing a word because it seems important. Capitals mark names, not importance.",
      "why": "The answer is \"Only a school's real name begins big, and none is given here.\" Ana is a name, so it gets a capital. The school in sentence 1 has no name given.",
      "like": [
        "SK-GUM2-3-C10"
      ]
    },
    {
      "id": "SK-GUM2-3-S11",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Which two lines are written with correct capital letters? Tap them.",
      "targets": [
        "p6:1:3",
        "p6:1:4",
        "p6:2:1",
        "p6:2:2",
        "p6:2:3"
      ],
      "answer": [
        "p6:1:3",
        "p6:2:2"
      ],
      "pick": 2,
      "clue": "Check each sentence for names and titles and for everyday nouns that have been given capitals.",
      "hints": [
        "Check each sentence for names and titles and for everyday nouns that have been given capitals.",
        "Go through lines 3 to 7 in order. Mark each word that starts with a capital and ask whether it is a name.",
        "The line about the stairs gives a capital to an everyday word. Think about the rest."
      ],
      "how": [
        "Look at the title, the name, the furniture word and the day in each line.",
        "Coach Dunn is a title and a name. The kitchen boxes are everyday objects, so they stay small.",
        "The other three lines have a name with a small letter or an everyday word with a capital."
      ],
      "misconception": "A common mix-up is picking a line because it has a capital letter. Check whether each capital belongs.",
      "why": "The answers are \"Coach Dunn, who lives next door, helped us carry boxes.\" and \"We unpacked the kitchen boxes before supper that night.\" Coach Dunn is a title and name. The other lines have tia, Stairs or sunday written the wrong way.",
      "like": [
        "SK-GUM2-3-C11"
      ]
    },
    {
      "id": "SK-GUM2-3-S12",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Which choice writes the name of the street correctly?",
      "text": "Our street is called {0}, and it ends at a pond.",
      "slots": [
        {
          "options": [
            "Birch Lane",
            "Birch lane",
            "birch lane"
          ],
          "answer": 0
        }
      ],
      "clue": "A name for one special street is a proper noun. Check how each choice writes the street's name.",
      "hints": [
        "A name for one special street is a proper noun. Check how each choice writes the street's name.",
        "Look at both words in the name. The three choices start them in different ways.",
        "The pond is an everyday place, so it is not written with capitals. Focus on the choices for the street."
      ],
      "how": [
        "Birch Lane is the name of one special street.",
        "Every important word in a name begins with a capital.",
        "The answer is Birch Lane. The draft wrote it with small letters, and Birch lane leaves the second word small."
      ],
      "misconception": "A common mix-up is capitalizing only the first word. Both words in the street's name need capitals.",
      "why": "The answer is Birch Lane. It is the name of one special street, so Birch and Lane both begin with capitals. The pond is an everyday place and stays small.",
      "like": [
        "SK-GUM2-3-C12"
      ]
    },
    {
      "id": "SK-GUM2-3-S13",
      "type": "dropdown",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [],
      "prompt": "Complete each blank with the best words.",
      "text": "Soon we will paddle down {0} to celebrate {1}.",
      "slots": [
        {
          "options": [
            "Cedar Creek",
            "cedar creek",
            "Cedar creek"
          ],
          "answer": 0
        },
        {
          "options": [
            "New Year's Day",
            "new year's day",
            "New Year's day"
          ],
          "answer": 0
        }
      ],
      "clue": "One blank holds the name of a creek and the other holds the name of a holiday. Look at how each choice starts its words.",
      "hints": [
        "One blank holds the name of a creek and the other holds the name of a holiday. Look at how each choice starts its words.",
        "Names of creeks and names of holidays follow the same rule. Check every word in each choice.",
        "Names of holidays are special names. Check how each choice for the second gap starts its words."
      ],
      "how": [
        "The first blank is the name of one creek, and the second blank is the name of one holiday.",
        "In both names, every important word begins with a capital letter.",
        "The answers are Cedar Creek and New Year's Day."
      ],
      "misconception": "A common mix-up is leaving the word Day small. It is part of the name of the holiday.",
      "why": "The answers are Cedar Creek and New Year's Day. Each is the name of one special thing, so each important word begins with a capital.",
      "like": [
        "SK-GUM2-3-C13"
      ]
    },
    {
      "id": "SK-GUM2-3-S14",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [],
      "prompt": "Tap the line where a word is capitalized that should stay small.",
      "options": [
        "Our dentist, Dr. Fong, keeps a fish tank.",
        "We rode bikes along the Ohio River.",
        "Aunt Lila bakes bread on Fridays.",
        "The Squirrels in our yard hide nuts.",
        "On Friday, we visit Peach Park."
      ],
      "answer": [
        3
      ],
      "pick": 1,
      "clue": "Check each capital letter. Ask whether the word is the name of one special person, place, day or thing.",
      "hints": [
        "Check each capital letter. Ask whether the word is the name of one special person, place, day or thing.",
        "Look at the everyday nouns in the middle of each line, such as animals, jobs and places.",
        "The line about the river names one special river. Think about the rest."
      ],
      "how": [
        "Every capital in the middle of a sentence should belong to a name.",
        "Dr. Fong, the Ohio River, Aunt Lila, Fridays and Peach Park are all names.",
        "The answer is \"The Squirrels in our yard hide nuts.\" Squirrels is an everyday word, so it should stay small."
      ],
      "misconception": "A common mix-up is capitalizing an animal word. Names of animals as a kind stay small.",
      "why": "The answer is \"The Squirrels in our yard hide nuts.\" Squirrels names a kind of animal, so it should be written squirrels. The other lines capitalize only names.",
      "like": [
        "SK-GUM2-3-C14"
      ]
    },
    {
      "id": "SK-GUM2-3-S15",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:capitalize-proper-nouns"
      ],
      "passages": [],
      "prompt": "Mia says, \"Place words are always capitalized.\" Which sentence proves Mia is mistaken?",
      "choices": [
        {
          "text": "We sat on a bench in the park near the school.",
          "correct": true
        },
        {
          "text": "We sat on a bench in Hill Park near Lee School."
        },
        {
          "text": "We sat on a bench in Rosa Park near Ford School."
        },
        {
          "text": "We sat on a bench in Elm Park near Lake School."
        }
      ],
      "clue": "To show an idea is mistaken, find a sentence where the idea fails. Look at how each sentence writes the words for places.",
      "hints": [
        "To show an idea is mistaken, find a sentence where the idea fails. Look at how each sentence writes the words for places.",
        "In each choice, find the place words and check how they begin.",
        "Mia's idea is about words for places. Think about the other choices."
      ],
      "how": [
        "Mia's idea says every place word gets a capital. Look for a place word that does not.",
        "Names of special places get capitals. A plain word like park, with no name, does not.",
        "The answer is \"We sat on a bench in the park near the school.\""
      ],
      "misconception": "A common mix-up is thinking all place words are names. The words park and school name kinds of places.",
      "why": "The answer is \"We sat on a bench in the park near the school.\" Park and school do not name one special place, so they stay small. That proves Mia mistaken. The other sentences use names.",
      "like": [
        "SK-GUM2-3-C15"
      ]
    }
  ],
  addons: {
    "SK-GUM2-3-P1": {
      "hints": [
        "Look for the name of a special person, place, day, month or holiday in each sentence. Check how it begins.",
        "Check the sentences one at a time. Find every name and see whether its first letter is a capital.",
        "The sentence about Memorial Day names a holiday, and both of its big words begin with capitals. Think about the rest."
      ],
      "how": [
        "Find the names in each sentence.",
        "Memorial Day, Alabama and Ms. Rivera are written with capitals. Dallas is the name of a city, but it begins with a small d.",
        "The answer is \"My best friend moved to dallas last year.\" Summer is a season, so it stays small."
      ],
      "misconception": "A common mix-up is picking the sentence with summer because it is a word for a time of year. Seasons are not names, so they stay small."
    },
    "SK-GUM2-3-P2": {
      "hints": [
        "Find the month and the town in each choice. Check how each one begins.",
        "Then check the other nouns. A pumpkin farm is not the name of one special place.",
        "Choose a sentence where the month starts with a capital letter."
      ],
      "how": [
        "Find the month, the town and the farm in each choice.",
        "October is a month and Athens is a town, so each needs a capital. A pumpkin farm is only a kind of place, so it stays small.",
        "The answer is \"In October, we visited a pumpkin farm near Athens.\""
      ],
      "misconception": "A common mix-up is capitalizing a farm because it is a place. Only the name of one special place gets a capital."
    },
    "SK-GUM2-3-P3": {
      "hints": [
        "Is this the name of a holiday? Decide whether it names one special day.",
        "July is the name of a month, so check how each choice writes it.",
        "Compare the three choices. They differ in the first letter of Fourth and the first letter of July."
      ],
      "how": [
        "Fourth of July is the name of a holiday.",
        "Important words in a holiday name begin with capitals. A small joining word like of stays small.",
        "The answer is Fourth of July."
      ],
      "misconception": "A common mix-up is capitalizing the small word of. Small joining words stay small inside a name."
    },
    "SK-GUM2-3-P4": {
      "hints": [
        "Look for the name of a street and the name of a city. Names of places begin with capital letters.",
        "A street name can have more than one word. Check each word in the name.",
        "City is an everyday word for any city, not the name of one. Think about the other choices."
      ],
      "how": [
        "Find the name of a street and the name of a city.",
        "Maple Street is the name of one street, so both words need capitals. Macon is the name of a city.",
        "The answers are maple, street and macon. Cousin and city are everyday nouns, and lives is an action word."
      ],
      "misconception": "A common mix-up is leaving street small. When Street is part of the name, it needs a capital."
    },
    "SK-GUM2-3-P5": {
      "hints": [
        "Ask whether the word names one special day, place or holiday, or whether it is an everyday word for a whole group.",
        "Make a sentence for each word, such as We visit ___ in the summer. Decide whether it names one special thing.",
        "Think of a real day, a real country and a real holiday."
      ],
      "how": [
        "Decide whether each word is a name or an everyday word.",
        "Saturday, Mexico and Thanksgiving are names, so they need capitals.",
        "Holiday, country and teacher are everyday words, so they stay small."
      ],
      "misconception": "A common mix-up is capitalizing holiday because it sounds like Thanksgiving. Holiday is a word for any holiday."
    }
  },
  /* B7b:core:end */
  test: [
    { id: "SK-GUM2-3-T1", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has a capitalization error.",
      options: [
        "We flew to Chicago to visit my uncle.",
        "The museum opens late on Sundays.",
        "Dr. Okafor checked my ears and eyes.",
        "My sister has a birthday in january.",
        "The Chattahoochee River runs past our town."
      ],
      answer: [3], pick: 1,
      clue: "Check every name of a person, place, day and month. One of them starts with a small letter.",
      why: "The answer is \"My sister has a birthday in january.\" January is the name of a month, so it needs a capital J." },
    { id: "SK-GUM2-3-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses capital letters correctly?",
      choices: [
        { text: "Kayla and her dog, Rocket, ran around Piedmont Park.", correct: true },
        { text: "Kayla and her Dog, Rocket, ran around Piedmont Park." },
        { text: "Kayla and her dog, rocket, ran around Piedmont Park." },
        { text: "Kayla and her dog, Rocket, ran around piedmont park." }
      ],
      clue: "A pet's name and the name of a park are proper nouns. The word for the kind of animal is a common noun.",
      why: "The answer is \"Kayla and her dog, Rocket, ran around Piedmont Park.\" Rocket is the dog's name and Piedmont Park is the name of a park, so they get capitals. Dog is a common noun." },
    { id: "SK-GUM2-3-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "We made cards for our moms on {0}.",
      slots: [ { options: ["Mother's Day", "mother's day", "Mother's day"], answer: 0 } ],
      clue: "Is this the name of a holiday? Which words in its name need capitals?",
      why: "The answer is Mother's Day. It is the name of a holiday, so both words start with capitals." },
    { id: "SK-GUM2-3-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO words in the sentence should begin with a capital letter?",
      stem: "In the spring, uncle Ray took us to a baseball game in albany.",
      choices: [
        { text: "spring" },
        { text: "uncle", correct: true },
        { text: "baseball" },
        { text: "game" },
        { text: "albany", correct: true }
      ],
      clue: "Find a title that comes right before a person's name, and find the name of a city. Seasons stay small.",
      why: "The answers are uncle and albany. Uncle comes right before the name Ray, so it is part of his name: Uncle Ray. Albany is the name of a city. Spring is a season, so it stays small." },
    { id: "SK-GUM2-3-T5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "These words are written with no capital letters. Sort each one: should it start with a capital letter or not?",
      cols: ["Needs a capital", "Stays small"],
      rows: [
        { text: "florida", answer: 0 },
        { text: "state", answer: 1 },
        { text: "december", answer: 0 },
        { text: "month", answer: 1 },
        { text: "wednesday", answer: 0 },
        { text: "weekend", answer: 1 }
      ],
      clue: "Ask: Is this the name of one special place, month or day? Or is it a word for any of them?",
      why: "Florida, December and Wednesday are names of a special state, month and day, so they need capitals. State, month and weekend are common nouns, so they stay small." }
  ]
});

/* ---------- GUM2-4: end punctuation ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que",
  title: "End marks: period, question mark and exclamation point",
  teach: {
    big: "Every sentence needs an end mark: a period for telling, a question mark for asking, and an exclamation point for strong feeling.",
    points: [
      "A telling sentence ends with a period. A sentence that politely tells someone what to do usually ends with a period too: Please close the door. But if it starts with can you, could you or will you, it asks, so it gets a question mark: Could you close the door?",
      "An asking sentence ends with a question mark. Asking sentences often begin with words like who, what, where, why, how, can, could, will, do or is.",
      "A sentence that shows strong feeling, like surprise, joy or fear, ends with an exclamation point.",
      "Be careful: a sentence that only tells about a question, like I wonder where my hat is, is a telling sentence. It ends with a period."
    ],
    words: [
      { term: "period", means: "the end mark ( . ) for a telling sentence" },
      { term: "question mark", means: "the end mark ( ? ) for an asking sentence" },
      { term: "exclamation point", means: "the end mark ( ! ) for a sentence with strong feeling" }
    ],
    example: {
      label: "Example",
      lines: ["We are going to the zoo.", "Are we going to the zoo?", "Hooray, we are going to the zoo!"],
      note: "The same idea gets three different end marks. Telling gets a period, asking gets a question mark, and strong feeling gets an exclamation point."
    },
    tip: "On the test, say the sentence in your head the way a person would say it. Does it tell, ask, or show strong feeling? Then check the first word for an asking word."
  },
  learn: [
    {
      show: ["Where did you put the dog's leash"],
      ask: "Which end mark does this sentence need?",
      steps: [
        "Look at the first word. Where is an asking word.",
        "Ask yourself: Does the speaker want an answer? Yes, the speaker wants to know where the leash is.",
        "An asking sentence ends with a question mark."
      ],
      answer: "Where did you put the dog's leash?"
    },
    {
      show: ["I wonder why the sky is blue"],
      ask: "Which end mark does this sentence need?",
      steps: [
        "This sentence has the asking word why in it, so it might look like a question.",
        "Read it again. The speaker is telling you what they wonder. The sentence does not ask you anything.",
        "A telling sentence ends with a period."
      ],
      answer: "I wonder why the sky is blue."
    },
    {
      show: ["Could you pass me the glue"],
      ask: "Which end mark does this sentence need?",
      steps: [
        "Look at the first words. Could you asks someone to do something.",
        "The speaker wants an answer, and the speaker wants the glue passed. The sentence is not just telling a fact.",
        "A sentence that asks ends with a question mark."
      ],
      answer: "Could you pass me the glue?"
    }
  ],
  parent: "Take turns saying one sentence three ways: telling, asking and excited (We have pizza. Do we have pizza? We have pizza!). Have your child name the end mark for each one.",
  passages: [
    /* B7b:passages:start */
    {
      "id": "p1",
      "title": "The Lost Kitten",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last night, a tiny gray kitten with white paws wandered into our yard.",
          "(2) Where did she come from?",
          "(3) I looked all around the yard and under the porch for her owner."
        ],
        [
          "(4) Her fur was wet from the rain, and she was shaking.",
          "(5) She was the softest kitten I had ever held.",
          "(6) My sister asked if we could keep her?"
        ],
        [
          "(7) Dad said we should call the animal shelter first thing in the morning.",
          "(8) Do you think her owner is looking for her.",
          "(9) We put up a paper sign at the end of our street.",
          "(10) Wow, by morning, a girl named Tia came running down the sidewalk!"
        ]
      ]
    },
    {
      "id": "p2",
      "title": "At the Pool",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On Saturday morning, my cousin Dan took me to the town pool.",
          "(2) How deep is the water at the shallow end?",
          "(3) The lifeguard told us to walk, not run?"
        ],
        [
          "(4) Wow, Dan jumped in first and made a giant splash that got everyone wet!",
          "(5) Can you swim across the whole pool.",
          "(6) I held my breath and kicked as hard as I could until I reached the wall."
        ],
        [
          "(7) We ate cold ice pops on the warm cement beside the fence.",
          "(8) Then Dan asked what time the pool closed.",
          "(9) I wondered if we could stay for one more swim.",
          "(10) Hooray, we still had an hour left!"
        ]
      ]
    },
    {
      "id": "p3",
      "title": "Field Day",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Field Day was our favorite day of the entire school year, and the sun was out.",
          "(2) Who was ready for the sack race?",
          "(3) Hooray, the sack race had finally begun!"
        ],
        [
          "(4) Do you know who won the big relay race.",
          "(5) My team crossed the finish line first, ahead of the other three teams.",
          "(6) I wonder how we ran so fast?",
          "(7) Did the whole crowd cheer loudly for us."
        ],
        [
          "(8) After all the games, we drank cold water under the shady branches of an elm.",
          "(9) Mr. Fenn asked who wanted to hold the trophy.",
          "(10) Next spring, we will play again on Field Day, and I will be ready."
        ]
      ]
    },
    {
      "id": "p4",
      "title": "The Magic Show",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last Friday afternoon, our whole school had a magic show in the gym.",
          "(2) Who wanted to help the magician on the stage?",
          "(3) Everyone in the room raised a hand and waved it around.",
          "(4) The magician chose a boy named Omar from the front row."
        ],
        [
          "(5) What was hiding inside the tall black hat?",
          "(6) Omar asked if the rabbit was real?",
          "(7) The magician smiled and held up one finger, and the room went quiet."
        ],
        [
          "(8) Where did the rabbit go after the show.",
          "(9) I clapped until my hands turned red and sore.",
          "(10) After the show, we all walked back to class and told our friends."
        ]
      ]
    },
    {
      "id": "p5",
      "title": "The Class Garden",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) In April, our class planted a big garden behind the school.",
          "(2) What kind of seeds did Mr. Lee bring?",
          "(3) Mr. Lee showed us how deep each hole should be?"
        ],
        [
          "(4) Nina dug a long row of tiny holes with a spoon.",
          "(5) Will the sunflowers grow taller than the fence.",
          "(6) Each of us watered the seeds with a paper cup from the sink."
        ],
        [
          "(7) Sam asked when the first sprout would appear.",
          "(8) Two weeks later, a green shoot poked up!",
          "(9) We jumped up and down with joy and gave Nina a high five.",
          "(10) Now we check the garden every single morning before class."
        ]
      ]
    },
    {
      "id": "p6",
      "title": "The Soccer Game",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On Sunday, our soccer team played against the Tigers at the park.",
          "(2) Could you hear the crowd from the parking lot?",
          "(3) Whew, our goalie caught the ball with both hands!",
          "(4) Who kicked the ball straight into the net."
        ],
        [
          "(5) The Tigers scored a goal late in the game.",
          "(6) I asked my coach how much time was left in the game?",
          "(7) Did our team win by one point."
        ],
        [
          "(8) After the whistle, we shook hands with every Tiger.",
          "(9) Our coach bought us orange slices and cold juice for the long ride home.",
          "(10) It was the best Sunday I have had all season, even with the tired legs."
        ]
      ]
    }
    /* B7b:passages:end */
  ],
  practice: [
    { id: "SK-GUM2-4-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the correct end mark for the sentence.",
      text: "Can you help me carry these bags to the car{0}",
      slots: [ { options: [".", "?", "!"], answer: 1 } ],
      clue: "Look at the first word. Is the speaker telling something, asking something, or showing strong feeling?",
      why: "The answer is the question mark (?). The sentence begins with can, and the speaker is asking for help, so it is an asking sentence." },
    { id: "SK-GUM2-4-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the best end mark for the sentence.",
      text: "Ouch, I just bumped my elbow on the door{0}",
      slots: [ { options: [".", "?", "!"], answer: 2 } ],
      clue: "Think about how the speaker feels. What word at the start shows that feeling?",
      why: "The answer is the exclamation point (!). Ouch shows a strong feeling of pain, so the sentence ends with an exclamation point." },
    { id: "SK-GUM2-4-P3", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has the wrong end mark.",
      options: [
        "My little brother is afraid of thunder.",
        "How many legs does a spider have?",
        "Our bus driver waves to us every morning.",
        "Who left the milk out on the counter.",
        "Wow, that was the biggest wave I have ever seen!"
      ],
      answer: [3], pick: 1,
      clue: "Read each sentence and decide if it tells, asks or shows strong feeling. Then check its end mark.",
      why: "The answer is \"Who left the milk out on the counter.\" It begins with who and asks for an answer, so it needs a question mark, not a period." },
    { id: "SK-GUM2-4-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "These sentences have no end marks. Sort each sentence by the end mark it needs.",
      cols: ["Period ( . )", "Question mark ( ? )", "Exclamation point ( ! )"],
      rows: [
        { text: "The bakery closes at noon", answer: 0 },
        { text: "Do owls sleep during the day", answer: 1 },
        { text: "Hooray, we won the spelling bee", answer: 2 },
        { text: "I wonder what time it is", answer: 0 },
        { text: "Is your birthday in June", answer: 1 },
        { text: "Oh no, our boat floated away", answer: 2 }
      ],
      clue: "Ask of each sentence: Does it tell, ask, or show strong feeling? Watch out for a sentence that only tells what someone wonders.",
      why: "The bakery closes at noon and I wonder what time it is are telling sentences, so they get periods. Do owls sleep during the day and Is your birthday in June ask questions, so they get question marks. Hooray, we won the spelling bee and Oh no, our boat floated away show strong feeling, so they get exclamation points." },
    { id: "SK-GUM2-4-P5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the correct end mark?",
      choices: [
        { text: "Please wipe your feet before you come inside.", correct: true },
        { text: "When does the movie start tonight." },
        { text: "Did Ana feed the goldfish today." },
        { text: "The bread is on the kitchen table?" }
      ],
      clue: "Decide what kind of sentence each one is: telling, asking or showing strong feeling. Then check whether its end mark fits.",
      why: "The answer is \"Please wipe your feet before you come inside.\" It politely tells someone what to do, so a period fits. The sentences that begin with when and did ask questions and need question marks. The sentence about the bread tells something, so it needs a period." }
  ],
  /* B7b:core:start */
  /* ---------- Expansion 2026-10-22, batch B7b (GUM Reinforce, second half) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test.
     Author log: docs/expansion-2026-10-22/batches/B7b-author-log.md. NOT ACCEPTED: needs independent review. */
  core: {
    "rev": "1",
    "sets": [
      {
        "title": "Set 1",
        "items": [
          {
            "ref": "SK-GUM2-4-P3"
          },
          {
            "ref": "SK-GUM2-4-P4"
          },
          {
            "id": "SK-GUM2-4-C03",
            "type": "mc",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 8 ends with the wrong mark. What is the mistake?",
            "choices": [
              {
                "text": "It asks about something, so a question mark should replace the period.",
                "correct": true
              },
              {
                "text": "It shows strong feeling, so an exclamation point should replace the period."
              },
              {
                "text": "It tells what someone thinks, so the period is already the right mark."
              },
              {
                "text": "It asks about something, so a question mark and a period should both be used."
              }
            ],
            "clue": "Say sentence 8 aloud the way a person would. Decide whether it tells, asks or shows strong feeling.",
            "hints": [
              "Say sentence 8 aloud the way a person would. Decide whether it tells, asks or shows strong feeling.",
              "Look at the first word of sentence 8 and ask whether the writer wants an answer.",
              "Nothing in sentence 8 shows surprise or fear. Think about the other choices."
            ],
            "how": [
              "Sentence 8 begins with Do and wants an answer from the reader.",
              "A sentence that wants an answer is an asking sentence, and it ends with a question mark.",
              "The answer is \"It asks about something, so a question mark should replace the period.\" A sentence ends with only one mark."
            ],
            "misconception": "A common mix-up is thinking the word think makes a sentence a telling sentence. Here the reader is asked to answer.",
            "why": "The answer is \"It asks about something, so a question mark should replace the period.\" Sentence 8 begins with Do and wants an answer. It shows no strong feeling, and a sentence ends with only one mark.",
            "like": [
              "SK-GUM2-4-S03"
            ]
          },
          {
            "id": "SK-GUM2-4-C04",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 6 has the wrong end mark. Choose the mark that fixes it.",
            "text": "My sister asked if we could keep her{0}",
            "slots": [
              {
                "options": [
                  ".",
                  "?",
                  "!"
                ],
                "answer": 0
              }
            ],
            "clue": "Decide whether the sentence tells, asks or shows strong feeling. Read it as a speaker would say it.",
            "hints": [
              "Decide whether the sentence tells, asks or shows strong feeling. Read it as a speaker would say it.",
              "Ask who is wanting an answer. Is the writer asking the reader something, or is the writer reporting what someone else did?",
              "A strong feeling sentence often starts with a word such as wow or oops. Look at how this sentence starts."
            ],
            "how": [
              "The sentence says what the sister asked. It does not ask the reader anything.",
              "A sentence that tells about a question is a telling sentence, so it ends with a period.",
              "The answer is the period (.). A question mark would be used only if the writer were asking the reader."
            ],
            "misconception": "A common mix-up is seeing the word asked and adding a question mark. Words like asked and wonder can sit inside a telling sentence.",
            "why": "The answer is the period (.). The sentence tells what the sister asked and does not ask the reader a question. It shows no strong feeling, so it does not take an exclamation point.",
            "like": [
              "SK-GUM2-4-S04"
            ]
          },
          {
            "id": "SK-GUM2-4-C05",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentences 2 and 10 end with different marks, yet both are correct. Why?",
            "choices": [
              {
                "text": "Sentence 2 asks the reader something, while sentence 10 shows strong surprise.",
                "correct": true
              },
              {
                "text": "Sentence 10 is the last one, and the last sentence in a draft always takes an exclamation point."
              },
              {
                "text": "Sentence 2 is much shorter, and short sentences always take a question mark."
              },
              {
                "text": "The two marks mean the same thing, so a writer may use either one in either sentence."
              }
            ],
            "clue": "Compare sentence 2 with sentence 10. Think about what each one is doing.",
            "hints": [
              "Compare sentence 2 with sentence 10. Think about what each one is doing.",
              "Say each sentence aloud the way a person would say it. Listen to how each one sounds.",
              "Where a sentence sits in a draft does not decide its end mark. Think about the other choices."
            ],
            "how": [
              "Sentence 2 says Where did she come from. Sentence 10 says Wow, by morning, a girl named Tia came running down the sidewalk.",
              "Sentence 2 wants an answer, so it takes a question mark. Sentence 10 shows surprise, so it takes an exclamation point.",
              "The answer is \"Sentence 2 asks the reader something, while sentence 10 shows strong surprise.\""
            ],
            "misconception": "A common mix-up is thinking the place of a sentence in a draft decides its mark. What the sentence does decides it.",
            "why": "The answer is \"Sentence 2 asks the reader something, while sentence 10 shows strong surprise.\" Sentence 2 asks directly, so it takes a question mark. Sentence 10 shows surprise, so it takes an exclamation point.",
            "like": [
              "SK-GUM2-4-S05"
            ]
          }
        ]
      },
      {
        "title": "Set 2",
        "items": [
          {
            "id": "SK-GUM2-4-C06",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Look at sentences 2 through 6. Select the TWO sentences with the wrong end mark.",
            "targets": [
              "p2:1:2",
              "p2:1:3",
              "p2:2:1",
              "p2:2:2",
              "p2:2:3"
            ],
            "answer": [
              "p2:1:3",
              "p2:2:2"
            ],
            "pick": 2,
            "clue": "Decide whether each sentence tells, asks or shows strong feeling. Then check its end mark.",
            "hints": [
              "Decide whether each sentence tells, asks or shows strong feeling. Then check its end mark.",
              "Go through sentences 2 through 6 one at a time. Read each one aloud the way a person would say it.",
              "The sentence about the giant splash shows strong feeling and ends with an exclamation point. Think about the rest."
            ],
            "how": [
              "Check each end mark against what the sentence does.",
              "Sentence 3 tells what the lifeguard said, but it ends with a question mark. Sentence 5 asks, but it ends with a period.",
              "Sentences 2, 4 and 6 have end marks that fit."
            ],
            "misconception": "A common mix-up is trusting the end mark instead of reading the sentence. Decide first what the sentence does.",
            "why": "The answers are \"The lifeguard told us to walk, not run?\" and \"Can you swim across the whole pool.\" The first one tells something, so it needs a period. The second one asks something, so it needs a question mark. Sentences 2, 4 and 6 are correct.",
            "like": [
              "SK-GUM2-4-S06"
            ]
          },
          {
            "id": "SK-GUM2-4-C07",
            "type": "ebsr",
            "points": 2,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "This question has two parts. Answer Part A, then Part B.",
            "partA": {
              "prompt": "What kind of sentence is sentence 2?",
              "choices": [
                {
                  "text": "An asking sentence, which calls for a question mark.",
                  "correct": true
                },
                {
                  "text": "A telling sentence, so a period should close it instead."
                },
                {
                  "text": "A feeling sentence, so it needs an exclamation point."
                },
                {
                  "text": "A telling sentence, so a comma has to follow it instead."
                }
              ]
            },
            "partB": {
              "prompt": "Which words in sentence 2 are the best clue?",
              "choices": [
                {
                  "text": "How deep is",
                  "correct": true
                },
                {
                  "text": "at the shallow end"
                },
                {
                  "text": "the water at"
                },
                {
                  "text": "the shallow end"
                }
              ]
            },
            "clue": "Read sentence 2 aloud. Decide whether the writer wants an answer from the reader.",
            "hints": [
              "Read sentence 2 aloud. Decide whether the writer wants an answer from the reader.",
              "In Part B, ask which words tell you what kind of sentence this is.",
              "The words at the shallow end tell where, but they do not show the kind of sentence."
            ],
            "how": [
              "Part A: the sentence wants the reader to say how deep the water is.",
              "Part B: the first three words begin the sentence the way an asking sentence often begins.",
              "The answers are \"An asking sentence, which calls for a question mark.\" and \"How deep is\"."
            ],
            "misconception": "A common mix-up is picking words from the end of the sentence. The first words are the clue.",
            "why": "Part A: \"An asking sentence, which calls for a question mark.\" Part B: \"How deep is\". The sentence begins with words that ask, and it wants an answer, so it takes a question mark.",
            "like": [
              "SK-GUM2-4-S07"
            ]
          },
          {
            "id": "SK-GUM2-4-C08",
            "type": "ms",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [],
            "prompt": "Choose the TWO sentences that end with the correct mark.",
            "pick": 2,
            "choices": [
              {
                "text": "Will you help me hang this poster?",
                "correct": true
              },
              {
                "text": "I asked who made the cookies.",
                "correct": true
              },
              {
                "text": "What time does the show start."
              },
              {
                "text": "The parade is coming down our street?"
              },
              {
                "text": "Can we go outside when the rain stops."
              }
            ],
            "clue": "Decide whether each sentence asks, tells or shows strong feeling. Then look at its end mark.",
            "hints": [
              "Decide whether each sentence asks, tells or shows strong feeling. Then look at its end mark.",
              "Check all five sentences, including the ones that look right at first glance.",
              "A question word does not decide the mark by itself. Check each sentence."
            ],
            "how": [
              "Say each sentence aloud and decide what kind it is.",
              "Will you help me hang this poster asks, so a question mark fits. I asked who made the cookies tells, so a period fits.",
              "What time does the show start and Can we go outside both ask, so they need question marks. The parade sentence tells, so it needs a period."
            ],
            "misconception": "A common mix-up is thinking a sentence is a question because it has a question word. I asked who made the cookies only tells.",
            "why": "The answers are \"Will you help me hang this poster?\" and \"I asked who made the cookies.\" The first asks the listener, and the second tells what the speaker asked. The other three have the wrong end mark.",
            "like": [
              "SK-GUM2-4-S08"
            ]
          },
          {
            "id": "SK-GUM2-4-C09",
            "type": "mc",
            "points": 1,
            "dok": 1,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [],
            "prompt": "Which end mark belongs at the end of this sentence? Where did the ball roll",
            "choices": [
              {
                "text": "?",
                "correct": true
              },
              {
                "text": "."
              },
              {
                "text": "!"
              },
              {
                "text": ","
              }
            ],
            "clue": "Say the sentence aloud. Decide whether it tells, asks or shows strong feeling.",
            "hints": [
              "Say the sentence aloud. Decide whether it tells, asks or shows strong feeling.",
              "Look at the first word. Think about what kind of sentence starts that way.",
              "A comma is not an end mark. Think about the other choices."
            ],
            "how": [
              "The sentence begins with Where, and the speaker wants an answer.",
              "A sentence that asks for an answer ends with a question mark.",
              "The answer is (?)."
            ],
            "misconception": "A common mix-up is choosing a period for every sentence. Check whether the speaker wants an answer.",
            "why": "The answer is (?). The sentence begins with where and asks for an answer. It does not tell a fact or show strong feeling.",
            "like": [
              "SK-GUM2-4-S09"
            ]
          },
          {
            "id": "SK-GUM2-4-C10",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Zoe thinks sentence 9 needs a (?) because the writer wondered about something. Which reply fixes her thinking?",
            "choices": [
              {
                "text": "The writer only tells what was wondered, and nobody is being asked anything.",
                "correct": true
              },
              {
                "text": "A sentence about wondering should shout, so the mark for surprise is best."
              },
              {
                "text": "Any sentence with the word if in it always asks the reader, so Zoe is right about it."
              },
              {
                "text": "Sentences near the end of a story never ask anything, so the period stays."
              }
            ],
            "clue": "Think about who is wondering in sentence 9. Is the writer asking the reader something?",
            "hints": [
              "Think about who is wondering in sentence 9. Is the writer asking the reader something?",
              "Read sentence 9 aloud. Does it want you to give an answer?",
              "Strong feeling sentences usually have a word like hooray or wow. Think about the other choices."
            ],
            "how": [
              "Sentence 9 says that the writer wondered about staying. The writer is not asking the reader.",
              "A sentence that reports a wondering tells what happened, so it ends with a period.",
              "The answer is \"The writer only tells what was wondered, and nobody is being asked anything.\""
            ],
            "misconception": "A common mix-up is seeing a word like wondered and adding a question mark. The sentence has to ask the reader something.",
            "why": "The answer is \"The writer only tells what was wondered, and nobody is being asked anything.\" Sentence 9 reports a wondering, so it is a telling sentence. Zoe's idea would work only if the writer were asking.",
            "like": [
              "SK-GUM2-4-S10"
            ]
          }
        ]
      },
      {
        "title": "Set 3",
        "items": [
          {
            "id": "SK-GUM2-4-C11",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Among sentences 3 to 7, which TWO end with the right mark?",
            "targets": [
              "p3:1:3",
              "p3:2:1",
              "p3:2:2",
              "p3:2:3",
              "p3:2:4"
            ],
            "answer": [
              "p3:1:3",
              "p3:2:2"
            ],
            "pick": 2,
            "clue": "Decide whether each sentence tells, asks or shows strong feeling. Then check its end mark.",
            "hints": [
              "Decide whether each sentence tells, asks or shows strong feeling. Then check its end mark.",
              "Go through sentences 3 through 7 in order. Say each one aloud and listen to what it does.",
              "Sentence 6 tells about something the writer wonders and is not a question itself. Think about the rest."
            ],
            "how": [
              "Match each sentence's job to its end mark.",
              "Sentence 3 shows strong joy with Hooray and ends with an exclamation point. Sentence 5 tells and ends with a period.",
              "Sentences 4 and 7 ask but end with periods, and sentence 6 only tells what the writer wonders but ends with a question mark."
            ],
            "misconception": "A common mix-up is picking a sentence that looks right once you have found one mistake. Check all five sentences.",
            "why": "The answers are \"Hooray, the sack race had finally begun!\" and \"My team crossed the finish line first, ahead of the other three teams.\" The first shows strong joy, and the second tells. Sentences 4 and 7 ask and need question marks. Sentence 6 only tells what the writer wonders, so it needs a period.",
            "like": [
              "SK-GUM2-4-S11"
            ]
          },
          {
            "id": "SK-GUM2-4-C12",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Which end mark finishes line 4 of the draft?",
            "text": "Do you know who won the big relay race{0}",
            "slots": [
              {
                "options": [
                  ".",
                  "?",
                  "!"
                ],
                "answer": 1
              }
            ],
            "clue": "Say the line aloud as a person would. Listen for whether it wants a reply.",
            "hints": [
              "Say the line aloud as a person would. Listen for whether it wants a reply.",
              "Look at the first words of the line and ask what they invite the listener to do.",
              "A period ends a plain fact. Think about the other two choices."
            ],
            "how": [
              "The speaker wants the listener to say whether he or she knows who won.",
              "A sentence that wants an answer is an asking sentence, so it ends with a question mark.",
              "The answer is the question mark (?)."
            ],
            "misconception": "A common mix-up is choosing a period because the sentence is long. Length does not decide the end mark.",
            "why": "The answer is the question mark (?). The sentence begins with Do and wants an answer. It shows no strong feeling, so it does not take an exclamation point.",
            "like": [
              "SK-GUM2-4-S12"
            ]
          },
          {
            "id": "SK-GUM2-4-C13",
            "type": "dropdown",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [],
            "prompt": "Pick the right mark for each blank.",
            "text": "Maya wonders when the bus will come{0} When will it get here{1}",
            "slots": [
              {
                "options": [
                  ".",
                  "?",
                  "!"
                ],
                "answer": 0
              },
              {
                "options": [
                  ".",
                  "?",
                  "!"
                ],
                "answer": 1
              }
            ],
            "clue": "The two sentences are about the same idea, but they do different jobs. Decide what each one does.",
            "hints": [
              "The two sentences are about the same idea, but they do different jobs. Decide what each one does.",
              "For each blank, ask whether the sentence tells about a question or asks the question itself.",
              "Neither sentence shouts, so one of the three marks is not needed. Look at how these sentences start."
            ],
            "how": [
              "The first sentence tells what Maya wonders. The second sentence asks the question out loud.",
              "A telling sentence ends with a period, and an asking sentence ends with a question mark.",
              "The answers are the period (.) and the question mark (?)."
            ],
            "misconception": "A common mix-up is giving both sentences the same mark because they share the same idea. They do different jobs.",
            "why": "The answers are the period (.) and the question mark (?). The first sentence tells what Maya wonders, and the second sentence asks when the bus will arrive. Neither shows strong feeling.",
            "like": [
              "SK-GUM2-4-S13"
            ]
          },
          {
            "id": "SK-GUM2-4-C14",
            "type": "hottext",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [],
            "prompt": "None of these sentences has an end mark yet. Select the one that needs an exclamation point.",
            "options": [
              "Whoa, the roller coaster just dropped",
              "The roller coaster opens at ten",
              "Does the roller coaster have a loop",
              "My brother asked if the roller coaster was fast",
              "We rode the roller coaster twice"
            ],
            "answer": [
              0
            ],
            "pick": 1,
            "clue": "Think about how the speaker feels in each one. Which one is said with a strong feeling?",
            "hints": [
              "Think about how the speaker feels in each one. Which one is said with a strong feeling?",
              "Say each one with feeling and decide which sounds like shouting.",
              "A sentence that begins with Does asks a question. Think about the rest."
            ],
            "how": [
              "Say each sentence aloud as a person would. Which one would be said loudly?",
              "Whoa is a word people shout when they are surprised.",
              "The answer is \"Whoa, the roller coaster just dropped\". The other four tell or ask."
            ],
            "misconception": "A common mix-up is putting an exclamation point on every sentence about something exciting. The words must show strong feeling.",
            "why": "The answer is \"Whoa, the roller coaster just dropped\" because it shows surprise. The sentence with Does asks, and the other three tell.",
            "like": [
              "SK-GUM2-4-S14"
            ]
          },
          {
            "id": "SK-GUM2-4-C15",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
            ],
            "passages": [],
            "prompt": "Lee says, \"Any sentence with the word asked needs a question mark.\" Which sentence breaks Lee's rule?",
            "choices": [
              {
                "text": "Ms. Cole asked us to line up at the door.",
                "correct": true
              },
              {
                "text": "Who asked for the red marker from the supply closet?"
              },
              {
                "text": "Please tell me where the extra glue sticks went."
              },
              {
                "text": "What did Ms. Cole ask us to bring to the picnic?"
              }
            ],
            "clue": "To show an idea is wrong, find a sentence where it does not work. Look at the end mark of each sentence that has the word asked.",
            "hints": [
              "To show an idea is wrong, find a sentence where it does not work. Look at the end mark of each sentence that has the word asked.",
              "Find the sentences that have the word asked in them. Then decide which of them asks the reader something.",
              "Lee's idea is about the word asked. Think about the other choices."
            ],
            "how": [
              "Lee's idea says the word asked always means a question mark. Look for asked in a sentence that does not ask.",
              "Ms. Cole asked us to line up only tells what Ms. Cole did. It tells, so it ends with a period.",
              "The answer is \"Ms. Cole asked us to line up at the door.\""
            ],
            "misconception": "A common mix-up is thinking a clue word decides the end mark. What the whole sentence does decides it.",
            "why": "The answer is \"Ms. Cole asked us to line up at the door.\" It has the word asked, but it only tells what happened, so it ends with a period. That proves Lee wrong. The other three sentences either ask a question or do not use the word asked.",
            "like": [
              "SK-GUM2-4-S15"
            ]
          }
        ]
      }
    ]
  },
  similar: [
    {
      "id": "SK-GUM2-4-S01",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [],
      "prompt": "Tap the line that ends with the wrong mark.",
      "options": [
        "Our class is learning about volcanoes.",
        "What time does recess begin?",
        "Hooray, I finished my whole book!",
        "My aunt asked if I wanted pancakes?",
        "Who knows where my glove went?"
      ],
      "answer": [
        3
      ],
      "pick": 1,
      "clue": "Decide whether each line tells, asks or shows strong feeling. Then check how it ends.",
      "hints": [
        "Decide whether each line tells, asks or shows strong feeling. Then check how it ends.",
        "Read each line the way a person would say it. Check the mark at the end.",
        "The line about volcanoes tells something and ends with a period. Think about the rest."
      ],
      "how": [
        "Look at what each line does and compare it with its mark.",
        "My aunt asked if I wanted pancakes reports a question, but the writer is not asking the reader.",
        "The answer is \"My aunt asked if I wanted pancakes?\" It should end with a period."
      ],
      "misconception": "A common mix-up is trusting a question mark because the line has the word asked. The line only tells.",
      "why": "The answer is \"My aunt asked if I wanted pancakes?\" It tells what the aunt asked, so it needs a period. The other lines have marks that fit.",
      "like": [
        "SK-GUM2-4-P3"
      ]
    },
    {
      "id": "SK-GUM2-4-S02",
      "type": "match",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [],
      "prompt": "Decide which mark finishes each line, then sort the lines.",
      "cols": [
        "Ends with .",
        "Ends with ?",
        "Ends with !"
      ],
      "rows": [
        {
          "text": "Our teacher reads aloud every Friday",
          "answer": 0
        },
        {
          "text": "Are the crayons in the red box",
          "answer": 1
        },
        {
          "text": "Whoa, that kite is flying so high",
          "answer": 2
        },
        {
          "text": "Pablo wonders where the crayons went",
          "answer": 0
        },
        {
          "text": "Can we borrow your jump rope",
          "answer": 1
        },
        {
          "text": "Oh my, the ice cream is melting",
          "answer": 2
        }
      ],
      "clue": "For each line, ask whether it tells, asks or shows strong feeling. A line that tells about a question is a telling line.",
      "hints": [
        "For each line, ask whether it tells, asks or shows strong feeling. A line that tells about a question is a telling line.",
        "Say each line aloud. Think about whether the speaker wants an answer or is feeling something strongly.",
        "A line that begins with a word of strong feeling gets an exclamation point. Use that to sort some of the lines first."
      ],
      "how": [
        "Decide what each line does.",
        "Our teacher reads aloud every Friday and Pablo wonders where the crayons went tell. Are the crayons in the red box and Can we borrow your jump rope ask.",
        "Whoa, that kite is flying so high and Oh my, the ice cream is melting show strong feeling."
      ],
      "misconception": "A common mix-up is putting Pablo wonders where the crayons went with the questions. It only tells.",
      "why": "Our teacher reads aloud every Friday and Pablo wonders where the crayons went tell, so they end with a period. Are the crayons in the red box and Can we borrow your jump rope ask, so they end with a question mark. Whoa, that kite is flying so high and Oh my, the ice cream is melting show strong feeling, so they end with an exclamation point.",
      "like": [
        "SK-GUM2-4-P4"
      ]
    },
    {
      "id": "SK-GUM2-4-S03",
      "type": "mc",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "What should replace the last mark in sentence 8?",
      "choices": [
        {
          "text": "(?), because Where begins a line that wants a reply",
          "correct": true
        },
        {
          "text": "(!), because rabbits do surprising things after a show"
        },
        {
          "text": "(,), because the line should pause after the word show"
        },
        {
          "text": "(.), because the line tells where the rabbit went"
        }
      ],
      "clue": "Read sentence 8 aloud. Decide whether it tells, asks or shows strong feeling.",
      "hints": [
        "Read sentence 8 aloud. Decide whether it tells, asks or shows strong feeling.",
        "Look at the first word of sentence 8 and think about what kind of line starts that way.",
        "A comma is not an end mark. Think about the other choices."
      ],
      "how": [
        "Sentence 8 begins with Where and asks the reader about the rabbit.",
        "A line that asks gets the mark that shows a question.",
        "The answer is \"(?), because Where begins a line that wants a reply\"."
      ],
      "misconception": "A common mix-up is thinking a sentence with a place word tells where something is. This one asks where.",
      "why": "The answer is \"(?), because Where begins a line that wants a reply\". Sentence 8 asks about the rabbit. It does not show strong feeling, and a comma is not an end mark.",
      "like": [
        "SK-GUM2-4-C03"
      ]
    },
    {
      "id": "SK-GUM2-4-S04",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "What ending mark closes the line about Omar and the rabbit?",
      "text": "Omar asked if the rabbit was real{0}",
      "slots": [
        {
          "options": [
            ".",
            "?",
            "!"
          ],
          "answer": 0
        }
      ],
      "clue": "Read the sentence aloud. Decide who wants an answer in it.",
      "hints": [
        "Read the sentence aloud. Decide who wants an answer in it.",
        "Ask whether the writer is putting a question to the reader, or telling about something Omar did.",
        "A strong feeling sentence often starts with a word such as wow or oops. Look at how this sentence begins."
      ],
      "how": [
        "The sentence says what Omar asked. The writer is not asking the reader.",
        "A sentence that reports a question tells what happened, so it ends with a period.",
        "The answer is the period (.)."
      ],
      "misconception": "A common mix-up is adding a question mark whenever a sentence mentions a question. This sentence only tells.",
      "why": "The answer is the period (.). The sentence tells what Omar asked and does not ask the reader. It shows no strong feeling, so it does not take an exclamation point.",
      "like": [
        "SK-GUM2-4-C04"
      ]
    },
    {
      "id": "SK-GUM2-4-S05",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Pia insists line 9 must end like line 5, which has (?). How should you reply?",
      "choices": [
        {
          "text": "Every line is judged by what it does itself, and line 9 only reports.",
          "correct": true
        },
        {
          "text": "Lines that sit near each other share one ending, so Pia is entirely correct."
        },
        {
          "text": "Line 9 has to do with clapping, so a (?) would show how loud it was."
        },
        {
          "text": "Neighbors in a draft take turns, so a (?) fits sentence 9 next."
        }
      ],
      "clue": "Look at the two sentences side by side. Ask what each one is doing.",
      "hints": [
        "Look at the two sentences side by side. Ask what each one is doing.",
        "Say each sentence aloud and listen to how each one sounds.",
        "Judge sentence 9 by its own words. Think about the other choices."
      ],
      "how": [
        "Sentence 5 says What was hiding inside the tall black hat. Sentence 9 says I clapped until my hands turned red and sore.",
        "Sentence 5 wants an answer, so it takes a question mark. Sentence 9 tells what the writer did, so it takes a period.",
        "The answer is \"Every line is judged by what it does itself, and line 9 only reports.\""
      ],
      "misconception": "A common mix-up is thinking nearby sentences must share a mark. What each sentence does decides its mark.",
      "why": "The answer is \"Every line is judged by what it does itself, and line 9 only reports.\" Sentence 5 asks directly, so it takes a question mark. Sentence 9 tells, so it takes a period.",
      "like": [
        "SK-GUM2-4-C05"
      ]
    },
    {
      "id": "SK-GUM2-4-S06",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Pick the two lines of this draft that end with the wrong mark.",
      "targets": [
        "p5:1:2",
        "p5:1:3",
        "p5:2:1",
        "p5:2:2",
        "p5:2:3"
      ],
      "answer": [
        "p5:1:3",
        "p5:2:2"
      ],
      "pick": 2,
      "clue": "Decide what each sentence does. Then compare that with the mark that finishes it.",
      "hints": [
        "Decide what each sentence does. Then compare that with the mark that finishes it.",
        "Take sentences 2 to 6 in order. Read each aloud and ask whether it wants an answer.",
        "Sentence 4 tells what Nina did and ends with a period. Think about the rest."
      ],
      "how": [
        "Read each sentence aloud and check its job against its mark.",
        "Sentence 3 tells how deep the holes should be but ends with a question mark. Sentence 5 asks about the sunflowers but ends with a period.",
        "Sentences 2, 4 and 6 are correct."
      ],
      "misconception": "A common mix-up is stopping after the first mistake. Check each sentence in the range.",
      "why": "The answers are \"Mr. Lee showed us how deep each hole should be?\" and \"Will the sunflowers grow taller than the fence.\" The first only tells, so it needs a period. The second asks, so it needs a question mark. Sentences 2, 4 and 6 are correct.",
      "like": [
        "SK-GUM2-4-C06"
      ]
    },
    {
      "id": "SK-GUM2-4-S07",
      "type": "ebsr",
      "points": 2,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Use the first half to help you with the second half.",
      "partA": {
        "prompt": "Which statement explains how sentence 2 should end?",
        "choices": [
          {
            "text": "It wants a reply from you, so (?) closes it.",
            "correct": true
          },
          {
            "text": "It reports what Mr. Lee did, so (.) should close it."
          },
          {
            "text": "It shows great surprise, so it ends with (!)."
          },
          {
            "text": "It goes on after a short pause, so it ends with (,)."
          }
        ]
      },
      "partB": {
        "prompt": "Pick the words from sentence 2 that back up your choice.",
        "choices": [
          {
            "text": "What kind of",
            "correct": true
          },
          {
            "text": "Mr. Lee bring"
          },
          {
            "text": "seeds did Mr. Lee"
          },
          {
            "text": "did Mr. Lee"
          }
        ]
      },
      "clue": "Read sentence 2 aloud. Decide whether the writer is putting a question to you or reporting what happened.",
      "hints": [
        "Read sentence 2 aloud. Decide whether the writer is putting a question to you or reporting what happened.",
        "In the second half, decide which group of words is the best clue to the kind of sentence.",
        "The word bring is an action, but it does not show the kind of sentence."
      ],
      "how": [
        "Part A: the sentence wants a reply, and it does not report anything.",
        "Part B: the first words ask about the seeds, which is how an asking sentence often begins.",
        "The answers are \"It wants a reply from you, so (?) closes it.\" and \"What kind of\"."
      ],
      "misconception": "A common mix-up is picking the words that name a person. The clue is how the sentence begins.",
      "why": "Part A: \"It wants a reply from you, so (?) closes it.\" Part B: \"What kind of\". The sentence begins with words that ask, and it wants an answer.",
      "like": [
        "SK-GUM2-4-C07"
      ]
    },
    {
      "id": "SK-GUM2-4-S08",
      "type": "ms",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [],
      "prompt": "Tap the two sentences below that are punctuated correctly.",
      "pick": 2,
      "choices": [
        {
          "text": "Did the bus leave without us?",
          "correct": true
        },
        {
          "text": "My mom wonders where the keys went.",
          "correct": true
        },
        {
          "text": "Where did we park the car."
        },
        {
          "text": "The snow is falling very fast?"
        },
        {
          "text": "Do you want another pear."
        }
      ],
      "clue": "Say each sentence aloud. Decide whether it asks, tells or shows strong feeling, and then look at its mark.",
      "hints": [
        "Say each sentence aloud. Decide whether it asks, tells or shows strong feeling, and then look at its mark.",
        "Check every sentence, including the ones that look right at first glance.",
        "A question word does not decide the mark by itself. Check each sentence."
      ],
      "how": [
        "Decide what each sentence does.",
        "Did the bus leave without us asks, so the question mark fits. My mom wonders where the keys went tells, so the period fits.",
        "Where did we park the car and Do you want another pear ask, so they need question marks. The snow sentence tells, so it needs a period."
      ],
      "misconception": "A common mix-up is thinking the word wonders turns a sentence into a question. It only tells what someone thinks.",
      "why": "The answers are \"Did the bus leave without us?\" and \"My mom wonders where the keys went.\" The first asks, and the second tells what the mom wonders. The other three have the wrong mark.",
      "like": [
        "SK-GUM2-4-C08"
      ]
    },
    {
      "id": "SK-GUM2-4-S09",
      "type": "mc",
      "points": 1,
      "dok": 1,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [],
      "prompt": "Pick the closing mark for the line below. Our dog loves to chase the mail truck",
      "choices": [
        {
          "text": ".",
          "correct": true
        },
        {
          "text": "?"
        },
        {
          "text": "!"
        },
        {
          "text": ","
        }
      ],
      "clue": "Say the sentence aloud. Decide whether it tells, asks or shows strong feeling.",
      "hints": [
        "Say the sentence aloud. Decide whether it tells, asks or shows strong feeling.",
        "Look at the first word and the last word. Think about what kind of sentence this is.",
        "A comma is not an end mark. Think about the other choices."
      ],
      "how": [
        "The sentence tells what the dog loves to do.",
        "A telling sentence ends with a period.",
        "The answer is a period."
      ],
      "misconception": "A common mix-up is picking an exclamation point for anything about a dog. The sentence must show strong feeling.",
      "why": "The answer is a period. The sentence tells a fact about the dog. It does not ask anything and shows no strong feeling.",
      "like": [
        "SK-GUM2-4-C09"
      ]
    },
    {
      "id": "SK-GUM2-4-S10",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "A classmate wants to change the end of sentence 7 to (?). What should you tell her?",
      "choices": [
        {
          "text": "Leave the (.) alone, since Sam's wondering is simply being reported to us.",
          "correct": true
        },
        {
          "text": "Change it to (?), since waiting for plants is a puzzling thing to describe."
        },
        {
          "text": "Change it to (?), since when is a word that always opens a puzzle line."
        },
        {
          "text": "Change it to (!), since sprouts popping up make everyone cheer and shout."
        }
      ],
      "clue": "Think about who is speaking in sentence 7 and who is being spoken to.",
      "hints": [
        "Think about who is speaking in sentence 7 and who is being spoken to.",
        "Read sentence 7 aloud. Does it want a reply from you?",
        "Strong feeling needs a word that shows it. Look for such a word in the line."
      ],
      "how": [
        "Sentence 7 says that Sam asked something. The writer is not putting a question to the reader.",
        "A line that reports a question is a telling line, so it ends with a period.",
        "The answer is \"Leave the (.) alone, since Sam's wondering is simply being reported to us.\""
      ],
      "misconception": "A common mix-up is thinking the word when always starts a question. Here it sits inside a telling line.",
      "why": "The answer is \"Leave the (.) alone, since Sam's wondering is simply being reported to us.\" The word when can begin a question, but here it sits inside a telling line.",
      "like": [
        "SK-GUM2-4-C10"
      ]
    },
    {
      "id": "SK-GUM2-4-S11",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Tap the two lines from the heart of this draft that are finished correctly.",
      "targets": [
        "p6:1:3",
        "p6:1:4",
        "p6:2:1",
        "p6:2:2",
        "p6:2:3"
      ],
      "answer": [
        "p6:1:3",
        "p6:2:1"
      ],
      "pick": 2,
      "clue": "Decide what each sentence does. Then compare it with the mark at the end.",
      "hints": [
        "Decide what each sentence does. Then compare it with the mark at the end.",
        "Say each line aloud, one at a time, and listen to whether it asks, tells or shows strong feeling.",
        "Line 6 tells about something the writer asked and is not a question itself. Think about the rest."
      ],
      "how": [
        "Match what each line does with its mark.",
        "Whew shows relief and fits an exclamation point. The Tigers sentence tells and fits a period.",
        "The lines about who kicked and about winning ask and need question marks. The coach line only tells."
      ],
      "misconception": "A common mix-up is choosing a line just because it ends in a familiar mark. Compare the mark with the job.",
      "why": "The answers are \"Whew, our goalie caught the ball with both hands!\" and \"The Tigers scored a goal late in the game.\" The first shows relief, and the second tells. Sentences 4 and 7 ask and need question marks. Sentence 6 only tells and needs a period.",
      "like": [
        "SK-GUM2-4-C11"
      ]
    },
    {
      "id": "SK-GUM2-4-S12",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Pick the ending mark that the sentence about the soccer ball needs.",
      "text": "Who kicked the ball straight into the net{0}",
      "slots": [
        {
          "options": [
            ".",
            "?",
            "!"
          ],
          "answer": 1
        }
      ],
      "clue": "Read the line aloud. Decide whether the speaker wants an answer.",
      "hints": [
        "Read the line aloud. Decide whether the speaker wants an answer.",
        "Look at the first word. Think about what kind of sentence begins that way.",
        "Nothing in this line sounds surprised or shouted. Think about the other two choices."
      ],
      "how": [
        "The speaker wants someone to say who kicked the ball.",
        "A sentence that wants an answer is an asking sentence, so it ends with a question mark.",
        "The answer is the question mark (?)."
      ],
      "misconception": "A common mix-up is choosing a period because the sentence is about a past event. Check whether it wants an answer.",
      "why": "The answer is the question mark (?). The sentence begins with Who and wants an answer. It shows no strong feeling, so it does not take an exclamation point.",
      "like": [
        "SK-GUM2-4-C12"
      ]
    },
    {
      "id": "SK-GUM2-4-S13",
      "type": "dropdown",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [],
      "prompt": "Fill in the mark that ends each sentence.",
      "text": "Tess wants to know why the sky turns red{0} Why does the sky turn red{1}",
      "slots": [
        {
          "options": [
            ".",
            "?",
            "!"
          ],
          "answer": 0
        },
        {
          "options": [
            ".",
            "?",
            "!"
          ],
          "answer": 1
        }
      ],
      "clue": "The two sentences share one idea but do different jobs. Decide what each one does.",
      "hints": [
        "The two sentences share one idea but do different jobs. Decide what each one does.",
        "For each blank, ask whether the sentence reports a question or puts the question itself.",
        "Neither sentence sounds surprised, so one of the three marks is not needed. Look at how these sentences start."
      ],
      "how": [
        "The first sentence reports what Tess wants to know. The second asks the question out loud.",
        "A telling sentence ends with a period, and an asking sentence ends with a question mark.",
        "The answers are the period (.) and the question mark (?)."
      ],
      "misconception": "A common mix-up is giving both sentences the same mark because the idea is the same. They do different jobs.",
      "why": "The answers are the period (.) and the question mark (?). The first sentence tells what Tess wants to know, and the second asks why the sky turns red. Neither shows strong feeling.",
      "like": [
        "SK-GUM2-4-C13"
      ]
    },
    {
      "id": "SK-GUM2-4-S14",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [],
      "prompt": "Tap the line that needs an exclamation point at the end.",
      "options": [
        "Oh no, the pizza is burning",
        "The pizza comes with extra cheese",
        "Is the pizza ready yet",
        "I wonder how long the pizza will bake",
        "Dad baked the pizza for supper"
      ],
      "answer": [
        0
      ],
      "pick": 1,
      "clue": "Think about how the speaker feels in each line. Which one is said with a strong feeling?",
      "hints": [
        "Think about how the speaker feels in each line. Which one is said with a strong feeling?",
        "Say each one with feeling and decide which sounds like calling out.",
        "A line that begins with Is asks a question. Think about the rest."
      ],
      "how": [
        "Say each line aloud as a person would. Which one would be said loudly?",
        "Oh no is what people say when they are worried.",
        "The answer is \"Oh no, the pizza is burning\". The other four tell or ask."
      ],
      "misconception": "A common mix-up is adding an exclamation point to a line that is only about something tasty. The words must show strong feeling.",
      "why": "The answer is \"Oh no, the pizza is burning\" because it shows worry. The line with Is asks, and the other three tell.",
      "like": [
        "SK-GUM2-4-C14"
      ]
    },
    {
      "id": "SK-GUM2-4-S15",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-end-punctuation-period-exclamation-point-que"
      ],
      "passages": [],
      "prompt": "Ana says, \"Whenever a sentence has the word who in it, a question mark must finish it.\" Which sentence proves Ana wrong?",
      "choices": [
        {
          "text": "My neighbor knows who built the old clock tower.",
          "correct": true
        },
        {
          "text": "Who built the old clock tower on Main Street?"
        },
        {
          "text": "Please tell me which man told the story about the clock tower."
        },
        {
          "text": "Can anyone tell me who painted the old clock tower?"
        }
      ],
      "clue": "To show an idea is wrong, find a sentence where it does not hold. Look at the end mark of each sentence that has who.",
      "hints": [
        "To show an idea is wrong, find a sentence where it does not hold. Look at the end mark of each sentence that has who.",
        "Three of the sentences have the word who in them. Decide which of those asks the reader something.",
        "Ana's idea is about the word who. Think about the other choices."
      ],
      "how": [
        "Ana's idea says the word who always means a question mark. Look for who in a sentence that does not ask.",
        "My neighbor knows who built the tower only tells what the neighbor knows. It ends with a period.",
        "The answer is \"My neighbor knows who built the old clock tower.\""
      ],
      "misconception": "A common mix-up is thinking a question word always makes a question. What the whole sentence does decides.",
      "why": "The answer is \"My neighbor knows who built the old clock tower.\" It has the word who, but it only tells what the neighbor knows, so it ends with a period. That proves Ana wrong.",
      "like": [
        "SK-GUM2-4-C15"
      ]
    }
  ],
  addons: {
    "SK-GUM2-4-P1": {
      "hints": [
        "Decide whether the speaker is telling something, asking something or showing strong feeling.",
        "Read the sentence aloud the way a person would say it. Does the speaker want an answer?",
        "A strong feeling sentence often starts with a word such as wow or oops. Look at how this sentence starts."
      ],
      "how": [
        "Say the sentence aloud. The speaker wants someone to help.",
        "A sentence that begins with Can you asks for something.",
        "The answer is the question mark (?)."
      ],
      "misconception": "A common mix-up is thinking a request is a telling sentence. A sentence that begins with Can you asks."
    },
    "SK-GUM2-4-P2": {
      "hints": [
        "Think about how the speaker feels. Is it a plain fact or a strong feeling?",
        "Look at the first word. Some words are said when people feel pain or surprise.",
        "Nothing in the sentence asks for an answer. Think about the other two marks."
      ],
      "how": [
        "The speaker says Ouch, which shows a strong feeling.",
        "A sentence that shows strong feeling ends with an exclamation point.",
        "The answer is the exclamation point (!)."
      ],
      "misconception": "A common mix-up is choosing a period because the sentence tells what happened. The word Ouch shows strong feeling."
    },
    "SK-GUM2-4-P3": {
      "hints": [
        "Decide whether each sentence tells, asks or shows strong feeling. Then check its end mark.",
        "Read each sentence aloud the way a person would say it. Check the mark at the end.",
        "The sentence about the spider asks a question and ends with a question mark. Think about the rest."
      ],
      "how": [
        "Look at what each sentence does and compare it with its mark.",
        "Who left the milk out on the counter asks for an answer, but it ends with a period.",
        "The answer is \"Who left the milk out on the counter.\" It should end with a question mark."
      ],
      "misconception": "A common mix-up is skipping a question that looks long. Any sentence that asks for an answer needs a question mark."
    },
    "SK-GUM2-4-P4": {
      "hints": [
        "For each sentence, ask whether it tells, asks or shows strong feeling. A sentence that tells about a question is a telling sentence.",
        "Say each sentence aloud. Think about whether the speaker wants an answer or is feeling something strongly.",
        "A sentence that begins with a word of strong feeling gets an exclamation point. Use that to sort some of the sentences first."
      ],
      "how": [
        "Decide what each sentence does.",
        "The bakery closes at noon and I wonder what time it is tell. Do owls sleep during the day and Is your birthday in June ask.",
        "Hooray, we won the spelling bee and Oh no, our boat floated away show strong feeling."
      ],
      "misconception": "A common mix-up is putting I wonder what time it is with the questions. It only tells."
    },
    "SK-GUM2-4-P5": {
      "hints": [
        "Decide what kind of sentence each choice is: telling, asking or showing strong feeling.",
        "Then check whether its end mark fits what the sentence does.",
        "A sentence that begins with When or Did asks a question. Think about the other choices."
      ],
      "how": [
        "Decide what each sentence does.",
        "Please wipe your feet before you come inside tells someone what to do, so a period fits.",
        "The answer is \"Please wipe your feet before you come inside.\" The sentences with When and Did ask, and the bread sentence tells."
      ],
      "misconception": "A common mix-up is thinking a polite request must end with a question mark. A sentence that begins with Please usually tells."
    }
  },
  /* B7b:core:end */
  test: [
    { id: "SK-GUM2-4-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the correct end mark for the sentence.",
      text: "Why do leaves change color in the fall{0}",
      slots: [ { options: [".", "?", "!"], answer: 1 } ],
      clue: "Look at the first word. Does the speaker want an answer?",
      why: "The answer is the question mark (?). The sentence begins with why and asks for an answer." },
    { id: "SK-GUM2-4-T2", type: "hottext", points: 2, dok: 2, passages: [],
      prompt: "Select the TWO sentences that have the wrong end mark.",
      options: [
        "What a beautiful rainbow that is!",
        "Will it snow this weekend?",
        "My cousin plays the trumpet in the band?",
        "I asked Dad if we could get a kitten.",
        "Where are my new soccer shoes.",
        "The cookies are ready to eat."
      ],
      answer: [2, 4], pick: 2,
      clue: "Decide whether each sentence tells, asks or shows strong feeling. A sentence that only tells about asking is still a telling sentence.",
      why: "The answers are \"My cousin plays the trumpet in the band?\" and \"Where are my new soccer shoes.\" The first one tells something, so it needs a period. The second one asks where the shoes are, so it needs a question mark." },
    { id: "SK-GUM2-4-T3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence should end with an exclamation point?",
      choices: [
        { text: "Yikes, there is a snake right by your foot", correct: true },
        { text: "There is a little snake in the tall grass" },
        { text: "Have you ever held a snake in your hands" },
        { text: "My friend wants a pet snake for his birthday" }
      ],
      clue: "Which sentence would someone say loudly, with a strong feeling like surprise or fear?",
      why: "The answer is \"Yikes, there is a snake right by your foot\" because it shows surprise and fear. Yikes is a word people shout when they are scared. The sentence that begins with have asks a question, and the other two are telling sentences." },
    { id: "SK-GUM2-4-T4", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the correct end mark for the sentence.",
      text: "Tamika wonders if the pool is open today{0}",
      slots: [ { options: [".", "?", "!"], answer: 0 } ],
      clue: "Does this sentence ask you something, or does it tell you what Tamika is thinking?",
      why: "The answer is the period (.). The sentence tells what Tamika wonders. It does not ask the reader a question, so it is a telling sentence." },
    { id: "SK-GUM2-4-T5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "These sentences have no end marks. Which TWO sentences should end with a question mark?",
      choices: [
        { text: "Could you read this story to me", correct: true },
        { text: "Mr. Hall asked who wanted to read" },
        { text: "Which way is the gym", correct: true },
        { text: "We read a story about a brave fox" },
        { text: "I know where the gym is" }
      ],
      clue: "A question asks the listener for an answer. A sentence that only tells about someone asking is a telling sentence.",
      why: "The answers are \"Could you read this story to me\" and \"Which way is the gym\" because both ask for an answer. Mr. Hall asked who wanted to read only tells what Mr. Hall did, so it ends with a period." }
  ]
});

/* ---------- GUM2-5: plurals with y to ies ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies",
  title: "Plurals that change y to ies",
  teach: {
    big: "When a word ends in a consonant and then y, change the y to i and add -es to mean more than one.",
    points: [
      "Before you make the plural, look at the letter right before the y.",
      "If it is a consonant, like b, n, p, r or t, change the y to i and add -es: baby becomes babies, city becomes cities.",
      "If it is a vowel, like a, e, o or u, keep the y and just add -s: toy becomes toys, key becomes keys."
    ],
    words: [
      { term: "plural", means: "a word that means more than one" },
      { term: "vowel", means: "the letters a, e, i, o and u" },
      { term: "consonant", means: "any letter that is not a vowel, like b, n or t" }
    ],
    example: {
      label: "Example",
      lines: ["one puppy → two puppies", "one monkey → two monkeys"],
      note: "Puppy has a p, a consonant, before the y, so the y changes to i and -es is added. Monkey has an e, a vowel, before the y, so it just adds -s."
    },
    tip: "On the test, you may choose the correct spelling of a plural. Cover the y with your finger and look at the letter right before it."
  },
  learn: [
    {
      show: ["There are three ___ on our street. (bakery)"],
      ask: "How do you spell the plural of bakery?",
      steps: [
        "Find the letter right before the y. In bakery, it is r.",
        "R is a consonant, so the y must change.",
        "Change y to i and add -es: bakeries."
      ],
      answer: "Bakeries. There are three bakeries on our street."
    },
    {
      show: ["We fed carrots to the ___ at the farm. (donkey)"],
      ask: "How do you spell the plural of donkey?",
      steps: [
        "Find the letter right before the y. In donkey, it is e.",
        "E is a vowel, so the y stays.",
        "Just add -s: donkeys."
      ],
      answer: "Donkeys. We fed carrots to the donkeys at the farm."
    },
    {
      show: ["Both hotel ___ were full of people. (lobby)"],
      ask: "How do you spell the plural of lobby?",
      steps: [
        "Find the letter right before the y. In lobby, it is b.",
        "B is a consonant, so the y must change.",
        "Change y to i and add -es: lobbies."
      ],
      answer: "Lobbies. Both hotel lobbies were full of people."
    }
  ],
  parent: "Make a list of things around the house that end in y (penny, key, battery, toy). Have your child say whether each one changes to -ies or just adds -s, and then write the plural.",
  passages: [
    /* B7b:passages:start */
    {
      "id": "p1",
      "title": "A Day at the Berry Farm",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last June, our class visited a berry farm outside of town.",
          "(2) The farm grew raspberrys and blackberries in long green rows.",
          "(3) Farmer Hill gave each of us a basket and a pair of gloves."
        ],
        [
          "(4) Two horses pulled a wagon full of children down the lane.",
          "(5) We saw three busy bees and a green lizard in the clover.",
          "(6) Both boies in my group filled their baskets to the top."
        ],
        [
          "(7) My basket was heavy, and my hands were stained red.",
          "(8) Before we left, we ate a sweet snack under a tree.",
          "(9) The farmer's wife gave us two jars of jam to take home.",
          "(10) I will tell my family all about the trip tonight."
        ]
      ]
    },
    {
      "id": "p2",
      "title": "Pony Club",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Every Saturday morning, the pony club meets at the big red barn on Elm Road.",
          "(2) Mia brushes the ponys before the lesson begins.",
          "(3) The riders wear helmets and sturdy boots to stay safe."
        ],
        [
          "(4) Two shiny trophies sit on the shelf in the office.",
          "(5) Jake hangs the keys on a hook near the door.",
          "(6) Our coach has many hobbys, such as painting and baking."
        ],
        [
          "(7) After the lesson, we give each pony a handful of carrots.",
          "(8) Then we line up our saddles by the two doorways.",
          "(9) Last week, two kittys napped in the hay.",
          "(10) We left the barn tired, dusty and very happy after two long days."
        ]
      ]
    },
    {
      "id": "p3",
      "title": "Garden Club",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Our garden club plants flowers behind the gym every spring.",
          "(2) Ms. Gray planted rows of tulips and lilies by the fence.",
          "(3) The soil felt soft after two days of rain."
        ],
        [
          "(4) We spotted ladybugs and two dragonflys near the pond.",
          "(5) Jo saw two blue jays hop in the dirt behind the shed.",
          "(6) Birds fed their babys in a nest above us.",
          "(7) We sold bunches of poppys at the spring fair."
        ],
        [
          "(8) By noon, our arms were sore and our shoes were very muddy.",
          "(9) Ms. Gray said the garden had never looked better than it did today.",
          "(10) We cannot wait to plant again next year."
        ]
      ]
    },
    {
      "id": "p4",
      "title": "The Craft Fair",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last weekend, my aunt took me to a craft fair in the park.",
          "(2) One table sold jars of homemade cranberrys and honey.",
          "(3) A man carved wooden whistles and painted birds at his stand."
        ],
        [
          "(4) Two girls sold paper fairies at a small blue booth.",
          "(5) A boy handed out free maps of the fair to every visitor.",
          "(6) Many shoppers rode the subwaies to get to the park."
        ],
        [
          "(7) By noon, the lines grew long, and the sun grew hot.",
          "(8) My aunt bought me a bracelet made of blue glass beads.",
          "(9) We ate fresh bread and drank cold lemonade in the shade.",
          "(10) I told her it was the best Saturday of my whole summer."
        ]
      ]
    },
    {
      "id": "p5",
      "title": "Art Class",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On Tuesday, our art class painted a giant mural about the sea.",
          "(2) Ms. Park gave every group extra supplys and a jar of water.",
          "(3) Dev painted three big whales on the left wall."
        ],
        [
          "(4) Nora made copys of the sketches for each group.",
          "(5) A few delays slowed us down, but we kept painting.",
          "(6) We hung the finished mural in the hallway outside the gym."
        ],
        [
          "(7) Lena filled two trays with paint and added a bright white lighthouse.",
          "(8) Visitors admired the colorful pastries painted in the corner.",
          "(9) Our teacher took pictures of the happy familys beside the wall.",
          "(10) I hope we get to paint another mural before summer."
        ]
      ]
    },
    {
      "id": "p6",
      "title": "Music Night",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Our school held a music night in the gym last Thursday.",
          "(2) The band played soft lullabies for the crowd.",
          "(3) The chorus rode home in two vans with their buddys."
        ],
        [
          "(4) Two big hallways led to pictures from past concerts.",
          "(5) Ms. Lee thanked every helper for the happy memorys.",
          "(6) Our bake table sold candys and cookies to raise money."
        ],
        [
          "(7) My little brother sat in the front row and clapped for every song.",
          "(8) The drummer dropped a stick, but she laughed and kept going.",
          "(9) At the end, everyone stood up and cheered for a long time.",
          "(10) We walked home under a sky full of bright stars."
        ]
      ]
    }
    /* B7b:passages:end */
  ],
  practice: [
    { id: "SK-GUM2-5-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Grandma picked a big bowl of {0} from the bushes behind her house.",
      slots: [ { options: ["blueberrys", "blueberries", "blueberryes"], answer: 1 } ],
      clue: "Look at the letter right before the y in blueberry. Is it a vowel or a consonant?",
      why: "The answer is blueberries. Blueberry has an r, a consonant, before the y. So the y changes to i and -es is added." },
    { id: "SK-GUM2-5-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Our town has two public {0}.",
      slots: [ { options: ["librarys", "libraries", "libraryes"], answer: 1 } ],
      clue: "Find the letter right before the y in library. That letter tells you which rule to use.",
      why: "The answer is libraries. Library has an r, a consonant, before the y, so the y changes to i and -es is added." },
    { id: "SK-GUM2-5-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which plural word is spelled correctly?",
      choices: [
        { text: "families", correct: true },
        { text: "keies" },
        { text: "storys" },
        { text: "dayes" }
      ],
      clue: "For each word, think of the word for one. Then check the letter before its y.",
      why: "The answer is families. Family has an l, a consonant, before the y, so it becomes families. Key and day have vowels before the y, so they are keys and days. Story has a consonant before the y, so it is stories." },
    { id: "SK-GUM2-5-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "How does each word change to mean more than one? Sort each word.",
      cols: ["Change y to i and add -es", "Just add -s"],
      rows: [
        { text: "lady", answer: 0 },
        { text: "boy", answer: 1 },
        { text: "penny", answer: 0 },
        { text: "holiday", answer: 1 },
        { text: "butterfly", answer: 0 },
        { text: "chimney", answer: 1 }
      ],
      clue: "Cover the y and look at the letter just before it. A consonant means one rule. A vowel means the other rule.",
      why: "Lady, penny and butterfly have consonants before the y, so they become ladies, pennies and butterflies. Boy, holiday and chimney have vowels before the y, so they become boys, holidays and chimneys." },
    { id: "SK-GUM2-5-P5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has a spelling error.",
      options: [
        "The kittens chased two flies around the kitchen.",
        "We packed our toys into three big boxes.",
        "Both of my grandmas tell funny storys.",
        "The parade had marching bands and floats.",
        "My uncle grows cherries and strawberries."
      ],
      answer: [2], pick: 1,
      clue: "Find each plural that comes from a word ending in y. Check the letter before the y in the word for one.",
      why: "The answer is \"Both of my grandmas tell funny storys.\" Story has an r, a consonant, before the y, so the plural is stories." }
  ],
  /* B7b:core:start */
  /* ---------- Expansion 2026-10-22, batch B7b (GUM Reinforce, second half) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test.
     Author log: docs/expansion-2026-10-22/batches/B7b-author-log.md. NOT ACCEPTED: needs independent review. */
  core: {
    "rev": "1",
    "sets": [
      {
        "title": "Set 1",
        "items": [
          {
            "ref": "SK-GUM2-5-P4"
          },
          {
            "ref": "SK-GUM2-5-P5"
          },
          {
            "id": "SK-GUM2-5-C03",
            "type": "mc",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 2 has a plural that is spelled wrong. Which spelling should replace it?",
            "choices": [
              {
                "text": "raspberries",
                "correct": true
              },
              {
                "text": "raspberrys"
              },
              {
                "text": "raspberryes"
              },
              {
                "text": "raspberryies"
              }
            ],
            "clue": "Think of the word for one. Then look at the letter just before the y.",
            "hints": [
              "Think of the word for one. Then look at the letter just before the y.",
              "Ask whether that letter is a vowel (a, e, i, o or u) or a consonant.",
              "Adding only -s after a consonant and a y is not how this kind of word works. Think about the other choices."
            ],
            "how": [
              "The word for one is raspberry. The letter just before the y is r.",
              "R is a consonant, so the y changes to i and -es is added.",
              "The answer is raspberries."
            ],
            "misconception": "A common mix-up is adding only -s to every word that ends in y. After a consonant, the y changes to i first.",
            "why": "The answer is raspberries. Raspberry has an r, a consonant, before the y, so the y changes to i and -es is added. Raspberrys leaves the y, and the other choices add extra letters.",
            "like": [
              "SK-GUM2-5-S03"
            ]
          },
          {
            "id": "SK-GUM2-5-C04",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 6 has a misspelled plural. Pick the correct spelling.",
            "text": "Both {0} in my group filled their baskets to the top.",
            "slots": [
              {
                "options": [
                  "boys",
                  "boies",
                  "boyes"
                ],
                "answer": 0
              }
            ],
            "clue": "Think of the word for one. Then look at the letter just before the y.",
            "hints": [
              "Think of the word for one. Then look at the letter just before the y.",
              "Ask whether that letter is a vowel (a, e, i, o or u) or a consonant.",
              "The y changes to i only when a consonant comes before it. Think about the other choices."
            ],
            "how": [
              "The word for one is boy. The letter just before the y is o.",
              "O is a vowel, so the y stays and only -s is added.",
              "The answer is boys. The draft changed the y to i, and boyes adds extra letters."
            ],
            "misconception": "A common mix-up is changing the y to i in every word. When a vowel comes before the y, the y stays.",
            "why": "The answer is boys. Boy has an o, a vowel, before the y, so the y stays and -s is added. Boies changes the y when it should not, and boyes adds -es.",
            "like": [
              "SK-GUM2-5-S04"
            ]
          },
          {
            "id": "SK-GUM2-5-C05",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Mia writes guppies with -ies, but Lee writes turkeys with -ys. Why do the two words follow different rules?",
            "choices": [
              {
                "text": "A consonant stands next to the y in guppy, but a vowel does in turkey.",
                "correct": true
              },
              {
                "text": "Guppy names a small animal and turkey names a big one, and words for big animals only add -s."
              },
              {
                "text": "Guppy is a shorter word than turkey, and shorter words change the y to i."
              },
              {
                "text": "Guppy is written first in the pair, so the first word of each pair changes."
              }
            ],
            "clue": "Think of the word for one in each plural. Then look closely at the letter right in front of the y in each word.",
            "hints": [
              "Think of the word for one in each plural. Then look closely at the letter right in front of the y in each word.",
              "Compare the two letters. Ask what kind of letter each one is.",
              "The kind of thing a word names does not decide how its plural is spelled. Think about the other choices."
            ],
            "how": [
              "Guppies comes from guppy, and turkeys comes from turkey.",
              "In guppy, the letter before the y is p, a consonant. In turkey, the letter before the y is e, a vowel.",
              "The answer is \"A consonant stands next to the y in guppy, but a vowel does in turkey.\""
            ],
            "misconception": "A common mix-up is thinking the meaning of a word decides its plural. Only the letter before the y matters.",
            "why": "The answer is \"A consonant stands next to the y in guppy, but a vowel does in turkey.\" A consonant before the y means the y changes to i and -es is added. A vowel before the y means just -s is added.",
            "like": [
              "SK-GUM2-5-S05"
            ]
          }
        ]
      },
      {
        "title": "Set 2",
        "items": [
          {
            "id": "SK-GUM2-5-C06",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "In sentences 2 through 6, find the TWO with a misspelled plural.",
            "targets": [
              "p2:1:2",
              "p2:1:3",
              "p2:2:1",
              "p2:2:2",
              "p2:2:3"
            ],
            "answer": [
              "p2:1:2",
              "p2:2:3"
            ],
            "pick": 2,
            "clue": "Find each plural in sentences 2 through 6. For the ones that come from a word ending in y, think of the word for one.",
            "hints": [
              "Find each plural in sentences 2 through 6. For the ones that come from a word ending in y, think of the word for one.",
              "Check the letter right in front of the y in each of those words. Then see whether the plural follows the rule for that letter.",
              "The sentence about the shelf has a plural from a word that ends in a consonant and y, and it is spelled with -ies. Think about the rest."
            ],
            "how": [
              "Go through the sentences one at a time and find each plural.",
              "Sentence 2 has ponys, but pony has a consonant before the y. Sentence 6 has hobbys, but hobby has a consonant before the y.",
              "Trophies and keys in sentences 4 and 5 are spelled right, and helmets and boots in sentence 3 have no y at all."
            ],
            "misconception": "A common mix-up is checking only plurals that look unusual. Check every plural in the range.",
            "why": "The answers are \"Mia brushes the ponys before the lesson begins.\" and \"Our coach has many hobbys, such as painting and baking.\" Pony and hobby have consonants before the y, so they become ponies and hobbies. Trophies and keys are correct.",
            "like": [
              "SK-GUM2-5-S06"
            ]
          },
          {
            "id": "SK-GUM2-5-C07",
            "type": "ebsr",
            "points": 2,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Do Part A first and use it for Part B.",
            "partA": {
              "prompt": "What is the mistake in sentence 9?",
              "choices": [
                {
                  "text": "A consonant stands next to the y in kitty, so the plural should be kitties.",
                  "correct": true
                },
                {
                  "text": "The y in kitty follows a vowel, so the plural should be kitteys."
                },
                {
                  "text": "Kitty is a name, so its plural needs a capital K."
                },
                {
                  "text": "A consonant stands next to the y in kitty, so the plural should be kittyes."
                }
              ]
            },
            "partB": {
              "prompt": "Which phrase in the draft has a plural formed the same way as kitties?",
              "choices": [
                {
                  "text": "two shiny trophies",
                  "correct": true
                },
                {
                  "text": "keys on a hook"
                },
                {
                  "text": "the two doorways"
                },
                {
                  "text": "handful of carrots"
                }
              ]
            },
            "clue": "Think of the word for one: kitty. Look at the letter just before the y.",
            "hints": [
              "Think of the word for one: kitty. Look at the letter just before the y.",
              "In Part B, find plurals in the draft that also come from words ending in y. Check the letter before the y in each one.",
              "Check the letter before the y in each word that is left."
            ],
            "how": [
              "Part A: the letter before the y in kitty is t, a consonant, so the y changes to i.",
              "Part B: look for another plural from a word with a consonant before the y.",
              "The answers are \"A consonant stands next to the y in kitty, so the plural should be kitties.\" and \"two shiny trophies\"."
            ],
            "misconception": "A common mix-up is thinking any plural that ends in y plus s follows the same rule. Check the letter before the y.",
            "why": "Part A: \"A consonant stands next to the y in kitty, so the plural should be kitties.\" Part B: \"two shiny trophies\". Trophy has a consonant before the y, just like kitty. Keys and doorways have vowels before the y.",
            "like": [
              "SK-GUM2-5-S07"
            ]
          },
          {
            "id": "SK-GUM2-5-C08",
            "type": "ms",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [],
            "prompt": "Pick the TWO plurals that are spelled correctly.",
            "pick": 2,
            "choices": [
              {
                "text": "lilies",
                "correct": true
              },
              {
                "text": "driveways",
                "correct": true
              },
              {
                "text": "fairys"
              },
              {
                "text": "trolleies"
              },
              {
                "text": "enemyes"
              }
            ],
            "clue": "Think of the word for one for each choice. Then look at the letter just before the y.",
            "hints": [
              "Think of the word for one for each choice. Then look at the letter just before the y.",
              "Check every choice, including the ones that look right at first glance. A vowel before the y and a consonant before the y follow different rules.",
              "A vowel before the y keeps it, and a consonant before the y changes it. Check each choice against its own word."
            ],
            "how": [
              "Find the letter before the y in lily, driveway, fairy, trolley and enemy.",
              "Lily has a consonant before the y, so it becomes lilies. Driveway has a vowel before the y, so it becomes driveways.",
              "Fairy needs -ies, trolley needs just -s, and enemy needs -ies."
            ],
            "misconception": "A common mix-up is changing the y to i in every word. A word like trolley has a vowel before the y and just adds -s.",
            "why": "The answers are lilies and driveways. Lily has a consonant before the y, so it becomes lilies. Driveway has a vowel before the y, so it just adds -s. Fairys, trolleies and enemyes break the rules.",
            "like": [
              "SK-GUM2-5-S08"
            ]
          },
          {
            "id": "SK-GUM2-5-C09",
            "type": "mc",
            "points": 1,
            "dok": 1,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [],
            "prompt": "Which word is the plural of pantry?",
            "choices": [
              {
                "text": "pantries",
                "correct": true
              },
              {
                "text": "pantrys"
              },
              {
                "text": "pantryes"
              },
              {
                "text": "pantryies"
              }
            ],
            "clue": "Look at the letter just before the y in pantry.",
            "hints": [
              "Look at the letter just before the y in pantry.",
              "Ask whether that letter is a vowel or a consonant. Then think about what happens to the y.",
              "Adding only -s after a consonant and a y is not the rule here. Think about the other choices."
            ],
            "how": [
              "The letter before the y in pantry is r.",
              "R is a consonant, so the y changes to i and -es is added.",
              "The answer is pantries."
            ],
            "misconception": "A common mix-up is adding only -s. A consonant before the y means the y must change.",
            "why": "The answer is pantries. Pantry has an r, a consonant, before the y, so the y changes to i and -es is added.",
            "like": [
              "SK-GUM2-5-S09"
            ]
          },
          {
            "id": "SK-GUM2-5-C10",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Ben says sentence 5 should say keies, because plurals change the y to i. Which reply explains what is wrong with his rule?",
            "choices": [
              {
                "text": "In key, a vowel stands next to the y, so only s is added.",
                "correct": true
              },
              {
                "text": "Keys are small objects, so tiny objects ignore every spelling rule."
              },
              {
                "text": "Key ends in y, so the plural needs -es with the y untouched."
              },
              {
                "text": "Ben reads the draft aloud, so the sound of the word picks its ending."
              }
            ],
            "clue": "Think of the word for one in sentence 5. Look at the letter right in front of the y.",
            "hints": [
              "Think of the word for one in sentence 5. Look at the letter right in front of the y.",
              "Ask what kind of letter it is, and then think about what Ben's rule does to it.",
              "Ben's rule fits some words but not all. Think about the other choices."
            ],
            "how": [
              "Sentence 5 has keys, which comes from key. The letter before the y in key is e.",
              "E is a vowel, so the y stays and -s is added.",
              "The answer is \"In key, a vowel stands next to the y, so only s is added.\""
            ],
            "misconception": "A common mix-up is changing every y to i. The change happens only after a consonant.",
            "why": "The answer is \"In key, a vowel stands next to the y, so only s is added.\" Ben's rule works for trophies, which has a consonant before the y, but not for keys.",
            "like": [
              "SK-GUM2-5-S10"
            ]
          }
        ]
      },
      {
        "title": "Set 3",
        "items": [
          {
            "id": "SK-GUM2-5-C11",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Only two of sentences 3 to 7 spell their plurals correctly. Select them.",
            "targets": [
              "p3:1:3",
              "p3:2:1",
              "p3:2:2",
              "p3:2:3",
              "p3:2:4"
            ],
            "answer": [
              "p3:1:3",
              "p3:2:2"
            ],
            "pick": 2,
            "clue": "Find the plural in each sentence. For the ones that come from a word ending in y, think of the word for one.",
            "hints": [
              "Find the plural in each sentence. For the ones that come from a word ending in y, think of the word for one.",
              "Check the letter just before the y in each word. Then see whether the plural follows the rule for that letter.",
              "The sentence about the pond has a plural from a word that ends in a consonant and y. Look at how it ends."
            ],
            "how": [
              "Go through the sentences one at a time.",
              "Sentence 3 has days, and day has a vowel before the y. Sentence 5 has jays, and jay has a vowel before the y.",
              "Sentence 4 needs dragonflies, sentence 6 needs babies, and sentence 7 needs poppies."
            ],
            "misconception": "A common mix-up is picking a sentence because it has an -ies word. Check that the word needs -ies.",
            "why": "The answers are \"The soil felt soft after two days of rain.\" and \"Jo saw two blue jays hop in the dirt behind the shed.\" Day and jay have vowels before the y, so they just add -s. Dragonflys, babys and poppys need -ies.",
            "like": [
              "SK-GUM2-5-S11"
            ]
          },
          {
            "id": "SK-GUM2-5-C12",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Which spelling completes the line about the birds?",
            "text": "Birds fed their {0} in a nest above us.",
            "slots": [
              {
                "options": [
                  "babies",
                  "babys",
                  "babyes"
                ],
                "answer": 0
              }
            ],
            "clue": "Picture just one of them. What is the word for one?",
            "hints": [
              "Picture just one of them. What is the word for one?",
              "Is the letter in front of the y a vowel or a consonant?",
              "Babys keeps the y. Think about the other choices."
            ],
            "how": [
              "The word for one is baby. The letter just before the y is b.",
              "B is a consonant, so the y changes to i and -es is added.",
              "The answer is babies."
            ],
            "misconception": "A common mix-up is adding only -s because baby is short. A consonant before the y means the y changes.",
            "why": "The answer is babies. Baby has a b, a consonant, before the y, so the y changes to i and -es is added.",
            "like": [
              "SK-GUM2-5-S12"
            ]
          },
          {
            "id": "SK-GUM2-5-C13",
            "type": "dropdown",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [],
            "prompt": "Choose the correct plural for each blank.",
            "text": "On the table were jars of {0} and a book about long {1}.",
            "slots": [
              {
                "options": [
                  "jellies",
                  "jellys",
                  "jellyes"
                ],
                "answer": 0
              },
              {
                "options": [
                  "journeys",
                  "journeies",
                  "journeyes"
                ],
                "answer": 0
              }
            ],
            "clue": "The two blanks need different spelling rules. Think of the word for one for each blank.",
            "hints": [
              "The two blanks need different spelling rules. Think of the word for one for each blank.",
              "For each blank, look at the letter just before the y and decide whether it is a vowel or a consonant.",
              "Look at the choices for each blank. Check the letter before the y in each word."
            ],
            "how": [
              "The first blank comes from jelly, and the letter before the y is l. The second blank comes from journey, and the letter before the y is e.",
              "L is a consonant, so jelly changes to jellies. E is a vowel, so journey just adds -s.",
              "The answers are jellies and journeys."
            ],
            "misconception": "A common mix-up is using the same rule for both words. Look at the letter before each y.",
            "why": "The answers are jellies and journeys. Jelly has a consonant before the y, so it changes to jellies. Journey has a vowel before the y, so it becomes journeys.",
            "like": [
              "SK-GUM2-5-S13"
            ]
          },
          {
            "id": "SK-GUM2-5-C14",
            "type": "hottext",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [],
            "prompt": "Select the sentence where a y was changed to i by mistake.",
            "options": [
              "Both babies wore tiny hats to the park today.",
              "The cowboys rode across the dusty plain at sunset.",
              "Smoke rose from the old factories near the river.",
              "We walked down two narrow alleies to the market.",
              "The shelves were full of jellies and pickles."
            ],
            "answer": [
              3
            ],
            "pick": 1,
            "clue": "Look at each plural that comes from a word ending in y. Think of the word for one.",
            "hints": [
              "Look at each plural that comes from a word ending in y. Think of the word for one.",
              "Check the letter just before the y in each of those words. A vowel there means the y stays.",
              "The sentence about the cowboys has a plural that keeps its y after a vowel. Think about the rest."
            ],
            "how": [
              "Find the plural words and think of the word for one for each.",
              "Babies, factories and jellies have consonants before the y, so the change to -ies is right. Cowboys has a vowel before the y.",
              "The answer is \"We walked down two narrow alleies to the market.\" Alley has a vowel before the y, so it should be alleys."
            ],
            "misconception": "A common mix-up is changing the y in every plural. After a vowel, the y stays.",
            "why": "The answer is \"We walked down two narrow alleies to the market.\" Alley has an l, but the letter just before the y is e, a vowel, so it should be alleys. The other sentences spell their plurals correctly.",
            "like": [
              "SK-GUM2-5-S14"
            ]
          },
          {
            "id": "SK-GUM2-5-C15",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
            ],
            "passages": [],
            "prompt": "Dee says, \"Every plural of a word that ends in y is made by swapping the y for i and adding es.\" Which pair shows that Dee is wrong?",
            "choices": [
              {
                "text": "one birthday, two birthdays",
                "correct": true
              },
              {
                "text": "one mystery, two mysteries"
              },
              {
                "text": "one pantry, two pantries"
              },
              {
                "text": "one dictionary, two dictionaries"
              }
            ],
            "clue": "To show a rule is wrong, find an example that breaks it. Think of the letter just before the y in each word.",
            "hints": [
              "To show a rule is wrong, find an example that breaks it. Think of the letter just before the y in each word.",
              "All four words end in y. Look at the letter just before the y in each one.",
              "Dee's rule is about the letter before the y. Think about the other choices."
            ],
            "how": [
              "Dee's rule changes every y to i. Look for a word where that would make a mistake.",
              "Mystery, pantry and dictionary all have consonants before the y, so the change works for them.",
              "The answer is \"one birthday, two birthdays\". Birthday has a vowel before the y, so it keeps the y."
            ],
            "misconception": "A common mix-up is thinking one rule works for every word that ends in y. The letter before the y decides.",
            "why": "The answer is \"one birthday, two birthdays\". Birthday has an a, a vowel, before the y, so it just adds -s. That proves Dee wrong. The other pairs have consonants before the y, so they follow Dee's rule.",
            "like": [
              "SK-GUM2-5-S15"
            ]
          }
        ]
      }
    ]
  },
  similar: [
    {
      "id": "SK-GUM2-5-S01",
      "type": "match",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [],
      "prompt": "How does each word become plural? Place it in the right column.",
      "cols": [
        "Becomes -ies",
        "Becomes -ys"
      ],
      "rows": [
        {
          "text": "fairy",
          "answer": 0
        },
        {
          "text": "monkey",
          "answer": 1
        },
        {
          "text": "belly",
          "answer": 0
        },
        {
          "text": "essay",
          "answer": 1
        },
        {
          "text": "country",
          "answer": 0
        },
        {
          "text": "play",
          "answer": 1
        }
      ],
      "clue": "Think of what comes just before the y in each word. A vowel and a consonant lead to different endings.",
      "hints": [
        "Think of what comes just before the y in each word. A vowel and a consonant lead to different endings.",
        "Say the letter before the y for each word. Decide whether it is a vowel or a consonant.",
        "Words with a vowel before the y keep the y, so their plurals end in -ys. Use that to sort some of them first."
      ],
      "how": [
        "Find the letter before the y in each word.",
        "Fairy, belly and country have consonants before the y. Monkey, essay and play have vowels before the y.",
        "Place each word in the column that matches its rule."
      ],
      "misconception": "A common mix-up is putting a word like essay with the -ies words because it looks long. Check the letter before the y.",
      "why": "Fairy, belly and country have consonants before the y, so they become fairies, bellies and countries. Monkey, essay and play have vowels before the y, so they become monkeys, essays and plays.",
      "like": [
        "SK-GUM2-5-P4"
      ]
    },
    {
      "id": "SK-GUM2-5-S02",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [],
      "prompt": "Tap the line that spells a plural wrongly.",
      "options": [
        "Mom packed jellies and crackers for the trip.",
        "The cowhands rode into the valley at dawn.",
        "Our teacher gave us two diarys to write in.",
        "Warm rays came through the window at dawn.",
        "The factories closed at five o'clock."
      ],
      "answer": [
        2
      ],
      "pick": 1,
      "clue": "Find each plural that comes from a word ending in y. Think of the word for one.",
      "hints": [
        "Find each plural that comes from a word ending in y. Think of the word for one.",
        "Check the letter just before the y in each of those words. Decide whether the plural fits its rule.",
        "The line about the jellies uses an -ies plural from a word with a consonant before the y. Think about the rest."
      ],
      "how": [
        "Find the plural words and think of the word for one for each.",
        "Jellies, rays and factories are spelled correctly. Diary has an r, a consonant, before the y.",
        "The answer is \"Our teacher gave us two diarys to write in.\" It should be diaries."
      ],
      "misconception": "A common mix-up is trusting a word because it looks neat. Check the letter before the y.",
      "why": "The answer is \"Our teacher gave us two diarys to write in.\" Diary has a consonant before the y, so the plural is diaries. The other lines spell their plurals correctly.",
      "like": [
        "SK-GUM2-5-P5"
      ]
    },
    {
      "id": "SK-GUM2-5-S03",
      "type": "mc",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Fix the plural in sentence 2 by picking its correct form.",
      "choices": [
        {
          "text": "cranberries",
          "correct": true
        },
        {
          "text": "cranberrys"
        },
        {
          "text": "cranberryes"
        },
        {
          "text": "cranberryies"
        }
      ],
      "clue": "Think of the word for one. Then look at the letter right in front of the y.",
      "hints": [
        "Think of the word for one. Then look at the letter right in front of the y.",
        "Decide whether that letter is a vowel (a, e, i, o or u) or a consonant.",
        "Just adding -s after a consonant and a y does not follow the rule. Think about the other choices."
      ],
      "how": [
        "The word for one is cranberry. The letter in front of the y is r.",
        "R is a consonant, so the y becomes i and -es is added.",
        "The answer is cranberries."
      ],
      "misconception": "A common mix-up is adding only -s to words that end in y. A consonant before the y means the y changes.",
      "why": "The answer is cranberries. Cranberry has an r, a consonant, before the y, so the y changes to i and -es is added.",
      "like": [
        "SK-GUM2-5-C03"
      ]
    },
    {
      "id": "SK-GUM2-5-S04",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Pick the plural that finishes the sentence about the shoppers.",
      "text": "Many shoppers rode the {0} to get to the park.",
      "slots": [
        {
          "options": [
            "subways",
            "subwaies",
            "subwayes"
          ],
          "answer": 0
        }
      ],
      "clue": "Think of the word for one. Then look at the letter right in front of the y.",
      "hints": [
        "Think of the word for one. Then look at the letter right in front of the y.",
        "Decide whether that letter is a vowel (a, e, i, o or u) or a consonant.",
        "The y changes to i only after a consonant. Think about the other choices."
      ],
      "how": [
        "The word for one is subway. The letter in front of the y is a.",
        "A is a vowel, so the y stays and -s is added.",
        "The answer is subways."
      ],
      "misconception": "A common mix-up is changing the y to i in every plural. After a vowel, the y stays.",
      "why": "The answer is subways. Subway has an a, a vowel, before the y, so the y stays and -s is added.",
      "like": [
        "SK-GUM2-5-C04"
      ]
    },
    {
      "id": "SK-GUM2-5-S05",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Why does fairies lose its y while valleys keeps its y?",
      "choices": [
        {
          "text": "In fairy the y follows an r, but in valley the y follows an e.",
          "correct": true
        },
        {
          "text": "Fairy is a magical creature, and magical creatures always swap the y for i."
        },
        {
          "text": "Valley ends in more letters, and extra letters make a y stay put."
        },
        {
          "text": "Fairies comes earlier in the alphabet, so its ending gets an i."
        }
      ],
      "clue": "Write the word for one of each plural. Then study the letter that sits next to each y.",
      "hints": [
        "Write the word for one of each plural. Then study the letter that sits next to each y.",
        "Name the kind of letter next to each y.",
        "What a word names does not choose its ending. Think about the other choices."
      ],
      "how": [
        "Fairies comes from fairy, and valleys comes from valley.",
        "In fairy, the letter next to the y is r, a consonant. In valley, the letter next to the y is e, a vowel.",
        "The answer is \"In fairy the y follows an r, but in valley the y follows an e.\""
      ],
      "misconception": "A common mix-up is thinking meaning or length decides the ending. Only the letter before the y matters.",
      "why": "The answer is \"In fairy the y follows an r, but in valley the y follows an e.\" A consonant means the y changes to i. A vowel means the y stays.",
      "like": [
        "SK-GUM2-5-C05"
      ]
    },
    {
      "id": "SK-GUM2-5-S06",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Tap the pair of sentences that contain a misspelled plural.",
      "targets": [
        "p5:1:2",
        "p5:1:3",
        "p5:2:1",
        "p5:2:2",
        "p5:2:3"
      ],
      "answer": [
        "p5:1:2",
        "p5:2:1"
      ],
      "pick": 2,
      "clue": "Find the plurals in sentences 2 to 6. Think of the word for one when a plural comes from a word ending in y.",
      "hints": [
        "Find the plurals in sentences 2 to 6. Think of the word for one when a plural comes from a word ending in y.",
        "Check the letter just before the y in each of those words. Then see whether the plural fits the rule.",
        "The sentence about the delays has a plural from a word with a vowel before the y. Think about the rest."
      ],
      "how": [
        "Go through the sentences one at a time and find each plural.",
        "Sentence 2 has supplys, and sentence 4 has copys. Supply and copy both have consonants before the y.",
        "Whales in sentence 3 has no y. Delays in sentence 5 is right, and sentence 6 has no plural from a word ending in y."
      ],
      "misconception": "A common mix-up is stopping once you find one mistake. Check every sentence in the range.",
      "why": "The answers are \"Ms. Park gave every group extra supplys and a jar of water.\" and \"Nora made copys of the sketches for each group.\" Supply and copy have consonants before the y, so they become supplies and copies.",
      "like": [
        "SK-GUM2-5-C06"
      ]
    },
    {
      "id": "SK-GUM2-5-S07",
      "type": "ebsr",
      "points": 2,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Work the first half, then lean on it for the second.",
      "partA": {
        "prompt": "What goes wrong with the plural in sentence 9?",
        "choices": [
          {
            "text": "An l sits right beside the y, so i replaces it and es follows.",
            "correct": true
          },
          {
            "text": "Nothing is wrong, since y can stay put when s joins on."
          },
          {
            "text": "An apostrophe is needed, since the word shows who owns something."
          },
          {
            "text": "An l sits right beside the y, so i and an extra e both join it."
          }
        ]
      },
      "partB": {
        "prompt": "Pick the plural from the draft built just like families.",
        "choices": [
          {
            "text": "pastries",
            "correct": true
          },
          {
            "text": "delays"
          },
          {
            "text": "two trays"
          },
          {
            "text": "whales"
          }
        ]
      },
      "clue": "Think of the word for one: family. Look at the letter beside the y.",
      "hints": [
        "Think of the word for one: family. Look at the letter beside the y.",
        "In the second half, hunt for other plurals in the draft that come from words ending in y. Check the letter beside the y in each.",
        "Check the letter beside the y in each word that is left."
      ],
      "how": [
        "Part A: the letter beside the y in family is l, a consonant, so the y changes to i.",
        "Part B: look for another plural made from a word with a consonant beside the y.",
        "The answers are \"An l sits right beside the y, so i replaces it and es follows.\" and \"pastries\"."
      ],
      "misconception": "A common mix-up is picking a plural just because it ends in -s. Check the letter beside the y.",
      "why": "Part A: \"An l sits right beside the y, so i replaces it and es follows.\" Part B: \"pastries\". Pastry has a consonant before the y, just like family. Delays and trays have vowels before the y.",
      "like": [
        "SK-GUM2-5-C07"
      ]
    },
    {
      "id": "SK-GUM2-5-S08",
      "type": "ms",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [],
      "prompt": "Two of these plurals are spelled right. Tap them.",
      "pick": 2,
      "choices": [
        {
          "text": "melodies",
          "correct": true
        },
        {
          "text": "runways",
          "correct": true
        },
        {
          "text": "bullys"
        },
        {
          "text": "displaies"
        },
        {
          "text": "cavityes"
        }
      ],
      "clue": "Think of the word for one for each choice. Look at the letter next to its y.",
      "hints": [
        "Think of the word for one for each choice. Look at the letter next to its y.",
        "Check all five choices, including the ones that look right. A vowel and a consonant next to the y lead to different endings.",
        "A vowel next to the y keeps it, and a consonant next to the y changes it. Check each choice against its own word."
      ],
      "how": [
        "Find the letter next to the y in melody, runway, bully, display and cavity.",
        "Melody has a consonant next to the y, so it becomes melodies. Runway has a vowel next to the y, so it becomes runways.",
        "Bully needs -ies, display needs just -s, and cavity needs -ies."
      ],
      "misconception": "A common mix-up is changing every y to i, as in displaies. A vowel next to the y keeps the y.",
      "why": "The answers are melodies and runways. Melody has a consonant before the y, and runway has a vowel before the y. Bullys, displaies and cavityes break the rules.",
      "like": [
        "SK-GUM2-5-C08"
      ]
    },
    {
      "id": "SK-GUM2-5-S09",
      "type": "mc",
      "points": 1,
      "dok": 1,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [],
      "prompt": "Pick the plural form of colony.",
      "choices": [
        {
          "text": "colonies",
          "correct": true
        },
        {
          "text": "colonys"
        },
        {
          "text": "colonyes"
        },
        {
          "text": "colonyies"
        }
      ],
      "clue": "Look at the letter right next to the y in colony.",
      "hints": [
        "Look at the letter right next to the y in colony.",
        "Decide whether that letter is a vowel or a consonant. Then think about what happens to the y.",
        "Adding only -s after a consonant and a y does not follow the rule. Think about the other choices."
      ],
      "how": [
        "The letter next to the y in colony is n.",
        "N is a consonant, so the y changes to i and -es is added.",
        "The answer is colonies."
      ],
      "misconception": "A common mix-up is adding only -s. A consonant before the y means the y must change.",
      "why": "The answer is colonies. Colony has an n, a consonant, before the y, so the y changes to i and -es is added.",
      "like": [
        "SK-GUM2-5-C09"
      ]
    },
    {
      "id": "SK-GUM2-5-S10",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Pia thinks delays should read delaies, since pastries lost its y. What is wrong with her thinking?",
      "choices": [
        {
          "text": "Delay keeps its y because an a sits next to it, so s alone is added.",
          "correct": true
        },
        {
          "text": "Delay should lose its y just as pastries did, since each ending gets an i."
        },
        {
          "text": "Delay is longer than pastry, so its y is never able to change anywhere."
        },
        {
          "text": "Words that name events never follow the same endings as objects do."
        }
      ],
      "clue": "Think of the word for one in sentence 5. Look at the letter beside the y.",
      "hints": [
        "Think of the word for one in sentence 5. Look at the letter beside the y.",
        "Decide what kind of letter it is, and then think about what Pia's idea does to it.",
        "Pia's idea fits some words but not all. Think about the other choices."
      ],
      "how": [
        "Sentence 5 has delays, which comes from delay. The letter next to the y in delay is a.",
        "A is a vowel, so the y stays and -s is added.",
        "The answer is \"Delay keeps its y because an a sits next to it, so s alone is added.\""
      ],
      "misconception": "A common mix-up is changing the y to i whenever you see a plural. The change happens only after a consonant.",
      "why": "The answer is \"Delay keeps its y because an a sits next to it, so s alone is added.\" Pia's idea works for pastries, which has a consonant before the y, but not for delays.",
      "like": [
        "SK-GUM2-5-C10"
      ]
    },
    {
      "id": "SK-GUM2-5-S11",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Which two sentences among 2 to 6 have plurals that are spelled correctly? Tap them.",
      "targets": [
        "p6:1:2",
        "p6:1:3",
        "p6:2:1",
        "p6:2:2",
        "p6:2:3"
      ],
      "answer": [
        "p6:1:2",
        "p6:2:1"
      ],
      "pick": 2,
      "clue": "Find the plural in each sentence. For the ones that come from a word ending in y, think of the word for one.",
      "hints": [
        "Find the plural in each sentence. For the ones that come from a word ending in y, think of the word for one.",
        "Check the letter right before the y in each of those words. Then see whether the plural follows the rule for that letter.",
        "The sentence about the bake table has a plural from a word with a consonant before the y. Look at how it ends."
      ],
      "how": [
        "Go through the sentences one at a time.",
        "Sentence 2 has lullabies, and lullaby has a consonant before the y. Sentence 4 has hallways, and hallway has a vowel before the y.",
        "Sentence 3 needs buddies, sentence 5 needs memories, and sentence 6 needs candies."
      ],
      "misconception": "A common mix-up is picking a sentence because it has an -ys word. Check that the word needs -ys.",
      "why": "The answers are \"The band played soft lullabies for the crowd.\" and \"Two big hallways led to pictures from past concerts.\" Lullaby has a consonant before the y, and hallway has a vowel before the y. Buddys, memorys and candys need -ies.",
      "like": [
        "SK-GUM2-5-C11"
      ]
    },
    {
      "id": "SK-GUM2-5-S12",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Choose the spelling that fixes sentence 5.",
      "text": "Ms. Lee thanked every helper for the happy {0}.",
      "slots": [
        {
          "options": [
            "memories",
            "memorys",
            "memoryes"
          ],
          "answer": 0
        }
      ],
      "clue": "Think of the word for one. Then look at the letter right before the y.",
      "hints": [
        "Think of the word for one. Then look at the letter right before the y.",
        "Decide whether that letter is a vowel (a, e, i, o or u) or a consonant.",
        "Adding only -s after a consonant and a y does not follow the rule. Think about the other choices."
      ],
      "how": [
        "The word for one is memory. The letter right before the y is r.",
        "R is a consonant, so the y changes to i and -es is added.",
        "The answer is memories."
      ],
      "misconception": "A common mix-up is adding only -s to a word that ends in y. A consonant before the y means the y changes.",
      "why": "The answer is memories. Memory has an r, a consonant, before the y, so the y changes to i and -es is added.",
      "like": [
        "SK-GUM2-5-C12"
      ]
    },
    {
      "id": "SK-GUM2-5-S13",
      "type": "dropdown",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [],
      "prompt": "Fill each gap with the right form.",
      "text": "We visited two {0} and sailed in the {1} on our trip.",
      "slots": [
        {
          "options": [
            "galleries",
            "gallerys",
            "galleryes"
          ],
          "answer": 0
        },
        {
          "options": [
            "bays",
            "baies",
            "bayes"
          ],
          "answer": 0
        }
      ],
      "clue": "The two gaps follow different spelling rules. Think of the word for one for each gap.",
      "hints": [
        "The two gaps follow different spelling rules. Think of the word for one for each gap.",
        "For each gap, look at the letter next to the y and decide whether it is a vowel or a consonant.",
        "Look at the choices for each gap. Check the letter next to the y in each word."
      ],
      "how": [
        "The first gap comes from gallery, and the letter next to the y is l. The second gap comes from bay, and the letter next to the y is a.",
        "L is a consonant, so gallery changes to galleries. A is a vowel, so bay just adds -s.",
        "The answers are galleries and bays."
      ],
      "misconception": "A common mix-up is using the same rule for both words. Look at the letter next to each y.",
      "why": "The answers are galleries and bays. Gallery has a consonant before the y, so it changes to galleries. Bay has a vowel before the y, so it becomes bays.",
      "like": [
        "SK-GUM2-5-C13"
      ]
    },
    {
      "id": "SK-GUM2-5-S14",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [],
      "prompt": "One line has an -ies plural that should end in -ys. Tap it.",
      "options": [
        "The deputies handed out badges to the children.",
        "Workers raised the beam with two pulleies.",
        "Three armies met on the wide plain.",
        "The pastries were still warm from the oven.",
        "Our enemies hid behind the hill."
      ],
      "answer": [
        1
      ],
      "pick": 1,
      "clue": "Look at each plural that comes from a word ending in y. Think of the word for one.",
      "hints": [
        "Look at each plural that comes from a word ending in y. Think of the word for one.",
        "Check the letter next to the y in each of those words. A vowel there means the y stays.",
        "The line about the pastries has a plural from a word with a consonant next to the y. Think about the rest."
      ],
      "how": [
        "Find the plural words and think of the word for one for each.",
        "Deputies, armies, pastries and enemies have consonants next to the y, so the change to -ies is right.",
        "The answer is \"Workers raised the beam with two pulleies.\" Pulley has a vowel next to the y, so it should be pulleys."
      ],
      "misconception": "A common mix-up is changing the y in every plural. After a vowel, the y stays.",
      "why": "The answer is \"Workers raised the beam with two pulleies.\" Pulley has an e, a vowel, before the y, so it should be pulleys. The other lines spell their plurals correctly.",
      "like": [
        "SK-GUM2-5-C14"
      ]
    },
    {
      "id": "SK-GUM2-5-S15",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:form-plural-nouns-by-changing-y-to-ies"
      ],
      "passages": [],
      "prompt": "Ravi claims no plural ever finishes with -ys. Which choice proves him mistaken?",
      "choices": [
        {
          "text": "one jockey, two jockeys",
          "correct": true
        },
        {
          "text": "one sky, two skies"
        },
        {
          "text": "one fly, two flies"
        },
        {
          "text": "one colony, two colonies"
        }
      ],
      "clue": "A claim fails if one example breaks it. Look at how each plural ends.",
      "hints": [
        "A claim fails if one example breaks it. Look at how each plural ends.",
        "Look at how each plural ends, and ask whether it fits Ravi's claim.",
        "Think about what the letter next to the y does in each word. Think about the other choices."
      ],
      "how": [
        "Ravi's claim says no plural ends in -ys. Look for one that does.",
        "Sky, fly and colony have consonants next to the y, so their plurals end in -ies.",
        "The answer is \"one jockey, two jockeys\". Jockey has a vowel next to the y, so its plural ends in -ys."
      ],
      "misconception": "A common mix-up is thinking every y changes. A vowel before the y keeps it, and the plural ends in -ys.",
      "why": "The answer is \"one jockey, two jockeys\". Jockey has an e, a vowel, before the y, so its plural ends in -ys. That proves Ravi mistaken. The other plurals come from words with consonants before the y.",
      "like": [
        "SK-GUM2-5-C15"
      ]
    }
  ],
  addons: {
    "SK-GUM2-5-P1": {
      "hints": [
        "Think of the word for one: blueberry. Look at the letter right before the y.",
        "Decide whether that letter is a vowel (a, e, i, o or u) or a consonant.",
        "Adding only -s after a consonant and a y does not follow the rule. Think about the other choices."
      ],
      "how": [
        "The letter right before the y in blueberry is r.",
        "R is a consonant, so the y changes to i and -es is added.",
        "The answer is blueberries."
      ],
      "misconception": "A common mix-up is adding only -s because the word is long. A consonant before the y means the y changes."
    },
    "SK-GUM2-5-P2": {
      "hints": [
        "Think of the word for one: library. Find the letter right before the y.",
        "That letter tells you which rule to use. Decide whether it is a vowel or a consonant.",
        "Adding -es without changing the y is not the rule for this kind of word. Think about the other choices."
      ],
      "how": [
        "The letter right before the y in library is r.",
        "R is a consonant, so the y changes to i and -es is added.",
        "The answer is libraries."
      ],
      "misconception": "A common mix-up is keeping the y and adding -es. After a consonant, the y must change to i."
    },
    "SK-GUM2-5-P3": {
      "hints": [
        "For each word, think of the word for one. Then check the letter before its y.",
        "Decide for each choice whether a vowel or a consonant comes before the y.",
        "One of the choices adds an extra e to a word that has a vowel before the y. Think about the other choices."
      ],
      "how": [
        "Think of the word for one for each choice.",
        "Family has an l before the y, so it becomes families. Key and day have vowels before the y, so they are keys and days. Story has an r before the y, so it is stories.",
        "The answer is families. The other choices break the rule."
      ],
      "misconception": "A common mix-up is changing the y to i in every word. A vowel before the y keeps the y."
    },
    "SK-GUM2-5-P4": {
      "hints": [
        "Cover the y and look at the letter just before it.",
        "Decide whether that letter is a vowel or a consonant for each word.",
        "A vowel before the y means the y stays. Use that to sort some of the words first."
      ],
      "how": [
        "Look at the letter before the y in each word.",
        "Lady, penny and butterfly have consonants before the y, so they change the y to i and add -es.",
        "Boy, holiday and chimney have vowels before the y, so they just add -s."
      ],
      "misconception": "A common mix-up is sorting by how long a word is. Only the letter before the y matters."
    },
    "SK-GUM2-5-P5": {
      "hints": [
        "Find each plural that comes from a word ending in y. Think of the word for one.",
        "Check the letter right before the y in each of those words. Then see whether the plural fits the rule.",
        "The sentence about the kittens has a plural that fits its rule. Think about the rest."
      ],
      "how": [
        "Find the plurals that come from words ending in y.",
        "Flies, toys, bands, cherries and strawberries are spelled correctly. Story has an r before the y.",
        "The answer is \"Both of my grandmas tell funny storys.\" It should be stories."
      ],
      "misconception": "A common mix-up is trusting a plural that ends in -s. Check the letter before the y."
    }
  },
  /* B7b:core:end */
  test: [
    { id: "SK-GUM2-5-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Big {0} carry people and cars across the bay.",
      slots: [ { options: ["ferrys", "ferries", "ferryes"], answer: 1 } ],
      clue: "Look at the letter right before the y in ferry.",
      why: "The answer is ferries. Ferry has an r, a consonant, before the y, so the y changes to i and -es is added." },
    { id: "SK-GUM2-5-T2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The players washed their muddy {0} after the game.",
      slots: [ { options: ["jersies", "jerseys", "jerseyes"], answer: 1 } ],
      clue: "Look at the letter right before the y in jersey. Is it a vowel or a consonant?",
      why: "The answer is jerseys. Jersey has an e, a vowel, before the y, so the y stays and you just add -s." },
    { id: "SK-GUM2-5-T3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence spells the plural correctly?",
      choices: [
        { text: "The twins had two birthday parties this year.", correct: true },
        { text: "The twins had two birthday partys this year." },
        { text: "The twins had two birthday partyes this year." },
        { text: "The twins had two birthday party's this year." }
      ],
      clue: "Think of the word for one: party. Check the letter before the y. Plural words like this one do not need an apostrophe.",
      why: "The answer is \"The twins had two birthday parties this year.\" Party has a t, a consonant, before the y, so it becomes parties." },
    { id: "SK-GUM2-5-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO words change y to i and add -es to mean more than one?",
      choices: [
        { text: "bunny", correct: true },
        { text: "turkey" },
        { text: "spy", correct: true },
        { text: "tray" },
        { text: "boy" }
      ],
      clue: "Cover the y in each word and look at the letter just before it.",
      why: "The answers are bunny and spy. Bunny has an n and spy has a p before the y. Both are consonants, so they become bunnies and spies. Turkey, tray and boy have vowels before the y, so they just add -s." },
    { id: "SK-GUM2-5-T5", type: "hottext", points: 2, dok: 2, passages: [],
      prompt: "Select the TWO sentences that have a spelling error.",
      options: [
        "The bees buzzed around the daisys.",
        "The trays sat in a pile by the lunch line.",
        "We counted fifteen ladybugs on the leaf.",
        "Ten fireflys glowed in the dark yard.",
        "The valleys were green after the rain."
      ],
      answer: [0, 3], pick: 2,
      clue: "Find each plural that comes from a word ending in y. Check the letter before the y in the word for one.",
      why: "The answers are \"The bees buzzed around the daisys.\" and \"Ten fireflys glowed in the dark yard.\" Daisy and firefly have consonants before the y, so the plurals are daisies and fireflies. Trays and valleys are correct because a vowel comes before the y." }
  ]
});

/* ---------- GUM2-6: personal pronouns ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive",
  title: "Pronouns: subject, object and owning",
  teach: {
    big: "A pronoun takes the place of a noun, and you choose the pronoun by the job it does in the sentence.",
    points: [
      "Subject pronouns do the action. They usually come before the verb: I, you, he, she, it, we, they. (She kicked the ball.)",
      "Object pronouns get the action or come after words like to, with and for: me, you, him, her, it, us, them. (The coach thanked them.)",
      "Owning words tell who owns something. My, your, his, her, its, our and their come before a noun. These are the same owning words from the determiners lesson. Mine, yours, his, hers, ours and theirs stand alone: The red bike is mine.",
      "When you name yourself and another person, cover up the other person and say the sentence with just you. Ana and I went home (I went home). Mom called Ana and me (Mom called me)."
    ],
    words: [
      { term: "pronoun", means: "a word that takes the place of a noun, like she, them or our" },
      { term: "subject", means: "who or what does the action in a sentence" },
      { term: "object", means: "who or what gets the action in a sentence" }
    ],
    example: {
      label: "Example",
      lines: ["Jada gave Leo her book.", "She gave him her book."],
      note: "She takes the place of Jada and does the action. Him takes the place of Leo and gets the book. Her tells whose book it is."
    },
    tip: "On the test, cover up the other person's name and say the sentence with just the pronoun. Your ear will often tell you whether I or me sounds right."
  },
  learn: [
    {
      show: ["Grandpa took Tasha and ___ fishing. (I or me)"],
      ask: "Which pronoun fits the sentence?",
      steps: [
        "Cover up Tasha and. The sentence becomes Grandpa took ___ fishing.",
        "Grandpa took me fishing sounds right. Grandpa took I fishing does not.",
        "Grandpa does the action. The pronoun gets the action, so it is an object pronoun: me."
      ],
      answer: "Me. Grandpa took Tasha and me fishing."
    },
    {
      show: ["The twins left ___ jackets on the bus. (they, them or their)"],
      ask: "Which pronoun fits the sentence?",
      steps: [
        "The blank comes right before a noun, jackets.",
        "The sentence needs a word that tells who owns the jackets.",
        "Their is the owning word for more than one person."
      ],
      answer: "Their. The twins left their jackets on the bus."
    },
    {
      show: ["___ and Dana ran to the bus stop. (She or Her)", "The green scooter by the gate is ___. (my or mine)"],
      ask: "Which word fits each sentence?",
      steps: [
        "In the first sentence, cover up and Dana. She ran to the bus stop sounds right, because the pronoun does the running.",
        "In the second sentence, no noun comes after the blank, so the word must stand alone. My comes before a noun, as in my scooter.",
        "Use she, a subject pronoun, in the first sentence. Use mine, an owning word that stands alone, in the second."
      ],
      answer: "She and mine. She and Dana ran to the bus stop. The green scooter by the gate is mine."
    }
  ],
  parent: "When your child says something like \"Me and Sam played,\" ask them to say it with just themselves (\"I played\") and then try again. Praise it when they say \"Sam and I played.\"",
  passages: [
    /* B7b:passages:start */
    {
      "id": "p1",
      "title": "The Lemonade Stand",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On Saturday, Jada and I set up a lemonade stand on our corner.",
          "(2) Jada and me made a big sign with red markers.",
          "(3) Dad gave Jada and me a pitcher of ice and a bag of lemons."
        ],
        [
          "(4) Our neighbors smelled the sweet drink, so them bought six cups.",
          "(5) Mrs. Reed handed Jada a dollar, and she smiled back.",
          "(6) We counted the coins, and they made a loud jingle in the jar."
        ],
        [
          "(7) By noon, the sun was hot, and the ice was gone.",
          "(8) Dad brought us fresh ice, and we thanked him.",
          "(9) At the end, Jada gave me half of the money, and I gave her a hug.",
          "(10) We plan to run the stand again next weekend."
        ]
      ]
    },
    {
      "id": "p2",
      "title": "Rainy Day Games",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On Sunday, it rained all day, so Ben and I stayed in the house.",
          "(2) Mom gave Ben and I a deck of cards.",
          "(3) We played a game while she cooked supper in the kitchen."
        ],
        [
          "(4) Him won the first round with a lucky card.",
          "(5) I asked him to deal again, and he laughed.",
          "(6) Our cards were old and bent, but they still worked."
        ],
        [
          "(7) After supper, Dad joined us at the table.",
          "(8) He had never played this game before, so us taught him the rules.",
          "(9) By bedtime, the rain had stopped, and the grass was shiny.",
          "(10) I hope it rains again next Sunday."
        ]
      ]
    },
    {
      "id": "p3",
      "title": "The Library Visit",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last week, my whole class visited the big school library on Tuesday morning.",
          "(2) Ms. Gold showed us where the new books were shelved.",
          "(3) Zoe grabbed a whale book, and she opened it right away."
        ],
        [
          "(4) Him and Caleb found a long shelf of comic books near the window.",
          "(5) The librarian told I to whisper.",
          "(6) Pia asked for help, and Ms. Gold gave her a stool.",
          "(7) Me and Pia searched the top shelf together for a book about sharks."
        ],
        [
          "(8) At the end, each of us checked out two books to take home for the long weekend.",
          "(9) Ms. Gold stamped the cards and wished us a happy weekend.",
          "(10) I read my whale book twice before bedtime that night."
        ]
      ]
    },
    {
      "id": "p4",
      "title": "Recess Kickball",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) At recess on Monday, my friends picked teams for a big game of kickball on the field.",
          "(2) Noah and me were chosen as the captains.",
          "(3) Mr. Hart handed Noah and me the big red ball."
        ],
        [
          "(4) Maya cheered, and her ran to second base.",
          "(5) Kofi kicked the ball far, and he raced to first base.",
          "(6) I caught the ball once, and I threw it to Noah."
        ],
        [
          "(7) The bell rang before we could finish the last inning.",
          "(8) Everyone groaned, but Mr. Hart promised we could play again soon.",
          "(9) We stood in a line by the door, tired, hot and dusty from the long game.",
          "(10) I cannot wait for recess tomorrow so we can finish."
        ]
      ]
    },
    {
      "id": "p5",
      "title": "Grandpa's Workshop",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Every summer, my cousins and I visit Grandpa's workshop at the end of his street.",
          "(2) Grandpa let Ravi and I sand the old stool.",
          "(3) He showed us how to hold the sandpaper and rub with the grain."
        ],
        [
          "(4) Us hammered the nails while Grandpa watched.",
          "(5) Grandma left her tools here, and the shiny red toolbox on the high shelf is hers.",
          "(6) I asked him why his saw was so old."
        ],
        [
          "(7) Grandpa said his father gave him that saw long ago.",
          "(8) When we finished, the stool stood straight and strong on its four legs.",
          "(9) Grandpa painted it blue, and us let it dry in the warm sun all afternoon.",
          "(10) We all agreed it was the best stool in the world."
        ]
      ]
    },
    {
      "id": "p6",
      "title": "A Birthday Surprise",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On Friday, my sister and I planned a surprise for Mom's birthday.",
          "(2) We hid the cake in the garage until the guests arrived and the party began.",
          "(3) Dad helped my sister and me hang the banner."
        ],
        [
          "(4) Her and I blew up forty bright balloons in the living room.",
          "(5) Our neighbors brought their own snacks to share.",
          "(6) Mom walked in the front door, and us shouted surprise together.",
          "(7) Dad hugged she and gave her a gift wrapped in shiny paper."
        ],
        [
          "(8) Everyone sang loudly, and the dog barked along with the song from under the table.",
          "(9) Mom blew out the candles on the first try.",
          "(10) It was the best party we ever planned together, and Mom said so."
        ]
      ]
    }
    /* B7b:passages:end */
  ],
  practice: [
    { id: "SK-GUM2-6-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Marco and {0} built a fort out of couch cushions.",
      slots: [ { options: ["I", "me", "us"], answer: 0 } ],
      clue: "Cover up Marco and. Which word sounds right at the start of the sentence by itself?",
      why: "The answer is I. Marco and I do the action of building, so the sentence needs a subject pronoun. I built a fort sounds right. Me built a fort does not." },
    { id: "SK-GUM2-6-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Ms. Lopez asked {0} to water the class plants.",
      slots: [ { options: ["we", "us", "our"], answer: 1 } ],
      clue: "Ms. Lopez does the asking. Does the blank do the action or get the action?",
      why: "The answer is us. Ms. Lopez does the action, and the blank gets the action, so the sentence needs an object pronoun." },
    { id: "SK-GUM2-6-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses pronouns correctly?",
      choices: [
        { text: "Dad drove my friend and me to the museum.", correct: true },
        { text: "Dad drove my friend and I to the museum." },
        { text: "Dad drove I and my friend to the museum." },
        { text: "Dad drove mine friend and me to the museum." }
      ],
      clue: "Cover up the friend in each sentence. Then say it with just the pronoun. Also check the word that tells whose friend.",
      why: "The answer is \"Dad drove my friend and me to the museum.\" Dad drove me sounds right, so me is correct. My is the owning word that goes before a noun like friend." },
    { id: "SK-GUM2-6-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has a pronoun error.",
      options: [
        "The bird built its nest in our old green mailbox.",
        "Him and his sister walk to school together.",
        "Can you share your new markers with us today?",
        "The blue lunchbox is mine.",
        "They invited her to the party on Saturday."
      ],
      answer: [1], pick: 1,
      clue: "Find the pronoun that does the action in each sentence. A pronoun that does the action must be a subject pronoun.",
      why: "The answer is \"Him and his sister walk to school together.\" The pronoun does the action of walking, so it should be the subject pronoun he: He and his sister walk to school together." },
    { id: "SK-GUM2-6-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Sort each pronoun by the job it does.",
      cols: ["Does the action", "Gets the action", "Tells who owns"],
      rows: [
        { text: "we", answer: 0 },
        { text: "them", answer: 1 },
        { text: "our", answer: 2 },
        { text: "he", answer: 0 },
        { text: "me", answer: 1 },
        { text: "their", answer: 2 }
      ],
      clue: "Try each word in a sentence: ___ ran. The dog chased ___. ___ dog barked. Which spot does each word fit?",
      why: "We and he are subject pronouns, so they do the action. Them and me are object pronouns, so they get the action. Our and their tell who owns something." }
  ],
  /* B7b:core:start */
  /* ---------- Expansion 2026-10-22, batch B7b (GUM Reinforce, second half) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test.
     Author log: docs/expansion-2026-10-22/batches/B7b-author-log.md. NOT ACCEPTED: needs independent review. */
  core: {
    "rev": "1",
    "sets": [
      {
        "title": "Set 1",
        "items": [
          {
            "ref": "SK-GUM2-6-P4"
          },
          {
            "ref": "SK-GUM2-6-P5"
          },
          {
            "id": "SK-GUM2-6-C03",
            "type": "mc",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 2 has a pronoun mistake. What is the mistake?",
            "choices": [
              {
                "text": "Me should be I, because Jada and the writer are doing the action.",
                "correct": true
              },
              {
                "text": "Me should be my, because the sign belongs to both Jada and the writer."
              },
              {
                "text": "Me should be us, because two people made the sign with red markers."
              },
              {
                "text": "Me should be mine, because the sign is owned by the writer alone."
              }
            ],
            "clue": "A pronoun takes the place of a noun. Ask what job the pronoun does in sentence 2.",
            "hints": [
              "A pronoun takes the place of a noun. Ask what job the pronoun does in sentence 2.",
              "Cover up Jada and, and read the sentence with just the pronoun.",
              "Mine stands alone and does not come before a noun like sign. Think about the other choices."
            ],
            "how": [
              "Cover up Jada and. The sentence becomes Me made a big sign, which sounds wrong.",
              "The people who made the sign are doing the action, so the sentence needs a subject pronoun.",
              "The answer is \"Me should be I, because Jada and the writer are doing the action.\""
            ],
            "misconception": "A common mix-up is thinking me is correct because it is how people talk. The writer does the action, so the sentence needs I.",
            "why": "The answer is \"Me should be I, because Jada and the writer are doing the action.\" I made a big sign sounds right, and Me made does not. My and mine tell who owns something, and us would change the meaning.",
            "like": [
              "SK-GUM2-6-S03"
            ]
          },
          {
            "id": "SK-GUM2-6-C04",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 4 has the wrong pronoun. Choose the pronoun that fixes it.",
            "text": "Our neighbors smelled the sweet drink, so {0} bought six cups.",
            "slots": [
              {
                "options": [
                  "they",
                  "them",
                  "their"
                ],
                "answer": 0
              }
            ],
            "clue": "A pronoun takes the place of a noun. Decide what job the blank does in the sentence.",
            "hints": [
              "A pronoun takes the place of a noun. Decide what job the blank does in the sentence.",
              "Find the verb that comes right after the blank.",
              "Their tells who owns something, and it needs a noun after it. Look at what follows the blank."
            ],
            "how": [
              "The blank takes the place of Our neighbors, and it does the buying.",
              "A pronoun that does the action is a subject pronoun.",
              "The answer is they. Them gets an action, and their tells who owns something."
            ],
            "misconception": "A common mix-up is using them because it sounds like a word for more than one person. Them is for the person who gets the action.",
            "why": "The answer is they. Our neighbors do the buying, so the blank needs a subject pronoun. Them gets an action, and their must be followed by a noun.",
            "like": [
              "SK-GUM2-6-S04"
            ]
          },
          {
            "id": "SK-GUM2-6-C05",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentences 2 and 3 both say Jada and me, yet only sentence 2 has a mistake. Why?",
            "choices": [
              {
                "text": "In sentence 2 the two girls do the action, but in sentence 3 they receive it.",
                "correct": true
              },
              {
                "text": "Sentence 3 is longer than sentence 2, so it may use a word that sentence 2 cannot."
              },
              {
                "text": "Sentence 2 comes first, so it must use I, and a later sentence may use me."
              },
              {
                "text": "The word Dad changes the name Jada, so the pronoun after it may change too."
              }
            ],
            "clue": "Compare the two sentences. In each one, ask what job Jada and the writer have.",
            "hints": [
              "Compare the two sentences. In each one, ask what job Jada and the writer have.",
              "Cover up Jada and in each sentence and say the sentence with just the pronoun.",
              "Where a sentence sits in a draft does not decide the pronoun. Think about the other choices."
            ],
            "how": [
              "Sentence 2: Jada and the writer made the sign. Sentence 3: Dad gave something to them.",
              "A pronoun that receives the action is an object pronoun, so me is right in sentence 3. A pronoun that does the action needs I.",
              "The answer is \"In sentence 2 the two girls do the action, but in sentence 3 they receive it.\""
            ],
            "misconception": "A common mix-up is thinking the words Jada and me are always wrong. The job in the sentence decides.",
            "why": "The answer is \"In sentence 2 the two girls do the action, but in sentence 3 they receive it.\" Dad gave me a pitcher sounds right, so me is correct there. Me made a sign does not, so sentence 2 needs I.",
            "like": [
              "SK-GUM2-6-S05"
            ]
          }
        ]
      },
      {
        "title": "Set 2",
        "items": [
          {
            "id": "SK-GUM2-6-C06",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Two of sentences 2 through 6 have a pronoun mistake. Select both.",
            "targets": [
              "p2:1:2",
              "p2:1:3",
              "p2:2:1",
              "p2:2:2",
              "p2:2:3"
            ],
            "answer": [
              "p2:1:2",
              "p2:2:1"
            ],
            "pick": 2,
            "clue": "Find each pronoun in sentences 2 through 6. Ask what job each one does.",
            "hints": [
              "Find each pronoun in sentences 2 through 6. Ask what job each one does.",
              "For a pronoun with another name, cover up the name and say the sentence with just the pronoun.",
              "The sentence about the old bent cards uses a pronoun that does the action, and it fits. Think about the rest."
            ],
            "how": [
              "Go through the sentences one at a time and check each pronoun.",
              "Sentence 2 gives the cards to Ben and the writer, so the writer gets the action. Sentence 4 uses a word that gets an action to do the winning.",
              "In sentences 3, 5 and 6, the pronouns fit their jobs."
            ],
            "misconception": "A common mix-up is trusting a pronoun because it sounds natural in speech. Check its job.",
            "why": "The answers are \"Mom gave Ben and I a deck of cards.\" and \"Him won the first round with a lucky card.\" Mom gave me sounds right, so sentence 2 needs me. Him cannot do the winning, so sentence 4 needs he. Sentences 3, 5 and 6 are correct.",
            "like": [
              "SK-GUM2-6-S06"
            ]
          },
          {
            "id": "SK-GUM2-6-C07",
            "type": "ebsr",
            "points": 2,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Answer Part A first. Then use it to answer Part B.",
            "partA": {
              "prompt": "What is wrong with the pronoun in sentence 8?",
              "choices": [
                {
                  "text": "Us gets the action, but here the pronoun does the teaching, so it should be we.",
                  "correct": true
                },
                {
                  "text": "Us does the action, but here the pronoun owns the rules, so it should be our."
                },
                {
                  "text": "Us gets the teaching, so it is correct, but the word him should be changed to he."
                },
                {
                  "text": "Us does the action, but here the pronoun is a single speaker, so it should be I."
                }
              ]
            },
            "partB": {
              "prompt": "Which version fixes sentence 8?",
              "choices": [
                {
                  "text": "He had never played this game before, so we taught him the rules.",
                  "correct": true
                },
                {
                  "text": "He had never played this game before, so us taught him the rules."
                },
                {
                  "text": "He had never played this game before, so our taught him the rules."
                },
                {
                  "text": "He had never played this game before, so ours taught him the rules."
                }
              ]
            },
            "clue": "Say sentence 8 aloud. Ask who is doing the teaching.",
            "hints": [
              "Say sentence 8 aloud. Ask who is doing the teaching.",
              "In Part B, test each version by saying the word before taught with the rest of the sentence.",
              "Ours stands alone and does not start a clause like this. Think about the other versions."
            ],
            "how": [
              "Part A: the pronoun in sentence 8 is the one doing the teaching.",
              "Part B: a pronoun that does the action is a subject pronoun, so we fits.",
              "The answers are \"Us gets the action, but here the pronoun does the teaching, so it should be we.\" and \"He had never played this game before, so we taught him the rules.\""
            ],
            "misconception": "A common mix-up is using us whenever a sentence is about a group. Us names a receiver and does not do the action.",
            "why": "Part A: \"Us gets the action, but here the pronoun does the teaching, so it should be we.\" Part B: \"He had never played this game before, so we taught him the rules.\" We taught sounds right. Us taught does not.",
            "like": [
              "SK-GUM2-6-S07"
            ]
          },
          {
            "id": "SK-GUM2-6-C08",
            "type": "ms",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [],
            "prompt": "Pick the TWO sentences in which every pronoun fits its job.",
            "pick": 2,
            "choices": [
              {
                "text": "Kyle and I built a snow fort in the yard.",
                "correct": true
              },
              {
                "text": "Coach Dunn asked them to carry the equipment bags.",
                "correct": true
              },
              {
                "text": "Us painted the fence behind the barn."
              },
              {
                "text": "The prize is for Maya and I because we won."
              },
              {
                "text": "Her and Sofia raced down the long hill."
              }
            ],
            "clue": "Find the pronoun in each sentence. Ask whether it does the action or gets the action.",
            "hints": [
              "Find the pronoun in each sentence. Ask whether it does the action or gets the action.",
              "Check all five choices, including the ones that look right at first glance. Cover up the other name when a name is joined to a pronoun.",
              "One choice joins a name and a pronoun after the word for. Think about whether that pronoun gets the action."
            ],
            "how": [
              "Test each pronoun by saying the sentence with just that pronoun.",
              "Kyle and I built: I built sounds right. Asked them to carry: them gets the asking, so it fits.",
              "Us painted, for Maya and I and Her and Sofia raced use the wrong kind of pronoun."
            ],
            "misconception": "A common mix-up is picking I every time two names are joined. After words like for, the pronoun gets the action and needs me.",
            "why": "The answers are \"Kyle and I built a snow fort in the yard.\" and \"Coach Dunn asked them to carry the equipment bags.\" I built sounds right, and asked them sounds right. Us painted, for Maya and I, and Her and Sofia raced are incorrect.",
            "like": [
              "SK-GUM2-6-S08"
            ]
          },
          {
            "id": "SK-GUM2-6-C09",
            "type": "mc",
            "points": 1,
            "dok": 1,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [],
            "prompt": "Fill the blank with the correct word. ___ ate lunch under the oak tree.",
            "choices": [
              {
                "text": "We",
                "correct": true
              },
              {
                "text": "Us"
              },
              {
                "text": "Our"
              },
              {
                "text": "Ours"
              }
            ],
            "clue": "The blank is at the start of the sentence. Ask who is doing the eating.",
            "hints": [
              "The blank is at the start of the sentence. Ask who is doing the eating.",
              "A word that does the action is a subject pronoun. Think about which choices do that job.",
              "Ours stands alone and does not begin a sentence like this. Think about the other choices."
            ],
            "how": [
              "Someone is eating, so the blank does the action.",
              "We is a subject pronoun, so it can do the action.",
              "The answer is We."
            ],
            "misconception": "A common mix-up is choosing us because it sounds like more than one person. Us gets an action and does not do it.",
            "why": "The answer is We. The blank does the eating, so it needs a subject pronoun. Us gets an action, our must come before a noun, and ours stands alone.",
            "like": [
              "SK-GUM2-6-S09"
            ]
          },
          {
            "id": "SK-GUM2-6-C10",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Kai says sentence 1 should say Ben and me because me sounds friendlier than I. Which reply is best?",
            "choices": [
              {
                "text": "Cover up Ben, and Me stayed in the house sounds wrong, so I is right.",
                "correct": true
              },
              {
                "text": "Ben and me is warmer to say, so Kai is correct and the sentence needs a change."
              },
              {
                "text": "Kai is right because the name Ben comes first, so the word after Ben has to be me."
              },
              {
                "text": "The sentence starts with a day, so the pronoun in it must be an object pronoun."
              }
            ],
            "clue": "Think about what Kai is trusting. Is it the job of the pronoun, or how the words sound together?",
            "hints": [
              "Think about what Kai is trusting. Is it the job of the pronoun, or how the words sound together?",
              "Take Ben out of sentence 1 and read the sentence with just the pronoun.",
              "Sounding friendly does not decide which pronoun is right. Think about the other choices."
            ],
            "how": [
              "Take Ben out of the sentence and see which pronoun is left.",
              "Me stayed in the house does not sound right, but I stayed in the house does.",
              "The answer is \"Cover up Ben, and Me stayed in the house sounds wrong, so I is right.\""
            ],
            "misconception": "A common mix-up is thinking me is friendlier than I. The job of the pronoun decides.",
            "why": "The answer is \"Cover up Ben, and Me stayed in the house sounds wrong, so I is right.\" The pronoun does the staying, so it must be a subject pronoun. Sounding friendly does not change that.",
            "like": [
              "SK-GUM2-6-S10"
            ]
          }
        ]
      },
      {
        "title": "Set 3",
        "items": [
          {
            "id": "SK-GUM2-6-C11",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Only two of sentences 3 to 7 use their pronouns correctly. Select them.",
            "targets": [
              "p3:1:3",
              "p3:2:1",
              "p3:2:2",
              "p3:2:3",
              "p3:2:4"
            ],
            "answer": [
              "p3:1:3",
              "p3:2:3"
            ],
            "pick": 2,
            "clue": "Find each pronoun in sentences 3 to 7. Ask what job each one does.",
            "hints": [
              "Find each pronoun in sentences 3 to 7. Ask what job each one does.",
              "For a pronoun with another name, cover up the name and say the sentence with just the pronoun.",
              "The sentence about the librarian has a pronoun that does not fit its job. Think about the rest."
            ],
            "how": [
              "Go through the sentences one at a time and test each pronoun.",
              "Sentence 3 has she doing the opening, and sentence 6 has her receiving the stool. Both fit.",
              "Sentences 4, 5 and 7 use him, I and me in jobs where they do not fit."
            ],
            "misconception": "A common mix-up is choosing a sentence because the pronoun sounds familiar. Check what the pronoun does.",
            "why": "The answers are \"Zoe grabbed a whale book, and she opened it right away.\" and \"Pia asked for help, and Ms. Gold gave her a stool.\" She does the opening, and her receives the stool. Sentence 4 needs He, sentence 5 needs me, and sentence 7 needs I.",
            "like": [
              "SK-GUM2-6-S11"
            ]
          },
          {
            "id": "SK-GUM2-6-C12",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Which pronoun repairs the line about the librarian?",
            "text": "The librarian told {0} to whisper.",
            "slots": [
              {
                "options": [
                  "I",
                  "me",
                  "my"
                ],
                "answer": 1
              }
            ],
            "clue": "A pronoun takes the place of a noun. Decide what job the blank does in the sentence.",
            "hints": [
              "A pronoun takes the place of a noun. Decide what job the blank does in the sentence.",
              "Look at the word that comes right before the blank.",
              "My tells who owns something, and it needs a noun after it. Look at what follows the blank."
            ],
            "how": [
              "The librarian does the telling, and the blank gets it.",
              "A pronoun that gets the action is an object pronoun.",
              "The answer is me. I does the action, and my tells who owns something."
            ],
            "misconception": "A common mix-up is using I because the writer is the one speaking. I does the action and does not get it.",
            "why": "The answer is me. The librarian does the telling, so the blank gets the action and needs an object pronoun. I does the action, and my must be followed by a noun.",
            "like": [
              "SK-GUM2-6-S12"
            ]
          },
          {
            "id": "SK-GUM2-6-C13",
            "type": "dropdown",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [],
            "prompt": "Choose the correct pronoun for each blank.",
            "text": "The twins carried {0} lunches outside, and Dad walked with {1}.",
            "slots": [
              {
                "options": [
                  "their",
                  "theirs",
                  "them"
                ],
                "answer": 0
              },
              {
                "options": [
                  "they",
                  "them",
                  "their"
                ],
                "answer": 1
              }
            ],
            "clue": "The two blanks need different kinds of pronouns. Decide what job each one does.",
            "hints": [
              "The two blanks need different kinds of pronouns. Decide what job each one does.",
              "The first blank comes right before a noun. The second blank comes after the word with.",
              "They does the action and cannot come after with. Look at the choices for the second blank."
            ],
            "how": [
              "The first blank tells whose lunches they are. The second blank gets the action of walking with.",
              "An owning word goes before a noun, and an object pronoun comes after with.",
              "The answers are their and them."
            ],
            "misconception": "A common mix-up is using the same pronoun twice. The two blanks do different jobs.",
            "why": "The answers are their and them. Their tells who owns the lunches and comes before the noun. Them follows with and gets the action.",
            "like": [
              "SK-GUM2-6-S13"
            ]
          },
          {
            "id": "SK-GUM2-6-C14",
            "type": "hottext",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [],
            "prompt": "Which sentence puts an owning word where it does not belong?",
            "options": [
              "That bike with the blue seat is mine.",
              "Our team practiced after school.",
              "Hers backpack is hanging by the door.",
              "The last cookie is yours if you want it.",
              "The puppy chewed its leash."
            ],
            "answer": [
              2
            ],
            "pick": 1,
            "clue": "Some owning words go before a noun, and some stand alone. Look at each owning word and what follows it.",
            "hints": [
              "Some owning words go before a noun, and some stand alone. Look at each owning word and what follows it.",
              "Find the owning words in the five sentences. Ask whether a noun follows each one.",
              "The sentence about the cookie has an owning word that stands alone at the end of a thought. Think about the rest."
            ],
            "how": [
              "Find the owning words and look at what comes after each.",
              "Mine and yours stand alone, and our, her and its come before nouns.",
              "The answer is \"Hers backpack is hanging by the door.\" It should be Her backpack."
            ],
            "misconception": "A common mix-up is thinking hers and her are the same. Hers stands alone, and her comes before a noun.",
            "why": "The answer is \"Hers backpack is hanging by the door.\" Hers cannot come before a noun like backpack, so it should be her. The other sentences use their owning words correctly.",
            "like": [
              "SK-GUM2-6-S14"
            ]
          },
          {
            "id": "SK-GUM2-6-C15",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
            ],
            "passages": [],
            "prompt": "Tia says, \"Use I every time another person is named next to you.\" Which sentence shows that Tia is wrong?",
            "choices": [
              {
                "text": "The coach called Ravi and me to the front.",
                "correct": true
              },
              {
                "text": "Ravi and I walked to the front of the room."
              },
              {
                "text": "Ravi and I carried the equipment to the car."
              },
              {
                "text": "Mrs. Lee said that Ravi and I could go first."
              }
            ],
            "clue": "To show a rule is wrong, find an example that breaks it. Look at what each pronoun is doing.",
            "hints": [
              "To show a rule is wrong, find an example that breaks it. Look at what each pronoun is doing.",
              "In each sentence, cover up Ravi and and say the sentence with just the pronoun.",
              "Tia's rule is about the words Ravi and plus a pronoun. Think about the other choices."
            ],
            "how": [
              "Tia's rule says I is always right. Look for a sentence where I would be wrong.",
              "In three sentences, I does the action. In the other, the pronoun gets the action.",
              "The answer is \"The coach called Ravi and me to the front.\""
            ],
            "misconception": "A common mix-up is thinking one pronoun works whenever two people are named. The job in the sentence decides.",
            "why": "The answer is \"The coach called Ravi and me to the front.\" The coach called me sounds right, because the pronoun gets the action. That proves Tia wrong. In the other sentences, I does the action.",
            "like": [
              "SK-GUM2-6-S15"
            ]
          }
        ]
      }
    ]
  },
  similar: [
    {
      "id": "SK-GUM2-6-S01",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [],
      "prompt": "Tap the line with a pronoun mistake.",
      "options": [
        "The goat chewed its rope after breakfast.",
        "Please hand the map to Dev and me.",
        "The note was left for Dana and I.",
        "That red seat is yours.",
        "They found their coats on the bench."
      ],
      "answer": [
        2
      ],
      "pick": 1,
      "clue": "Find the pronoun in each line. Ask what job it does.",
      "hints": [
        "Find the pronoun in each line. Ask what job it does.",
        "When a name is joined to a pronoun, cover up the name and say the line with just the pronoun.",
        "The line about the goat uses an owning word before a noun, and it fits. Think about the rest."
      ],
      "how": [
        "Test each pronoun by itself.",
        "The goat chewed its rope, the map to me, that seat is yours, and they found their coats all fit.",
        "The answer is \"The note was left for Dana and I.\" A note left for me sounds right, so it should be Dana and me."
      ],
      "misconception": "A common mix-up is picking I after the word for. The pronoun gets the action there, so it needs me.",
      "why": "The answer is \"The note was left for Dana and I.\" The pronoun comes after for, so it gets the action and should be me. The other lines use their pronouns correctly.",
      "like": [
        "SK-GUM2-6-P4"
      ]
    },
    {
      "id": "SK-GUM2-6-S02",
      "type": "match",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [],
      "prompt": "Sort each pronoun into the group it belongs to.",
      "cols": [
        "Subject pronoun",
        "Object pronoun",
        "Owning word"
      ],
      "rows": [
        {
          "text": "she",
          "answer": 0
        },
        {
          "text": "him",
          "answer": 1
        },
        {
          "text": "my",
          "answer": 2
        },
        {
          "text": "they",
          "answer": 0
        },
        {
          "text": "us",
          "answer": 1
        },
        {
          "text": "your",
          "answer": 2
        }
      ],
      "clue": "Try each word in a sentence, such as ___ ran, the dog saw ___, or ___ hat. See which blank it fits.",
      "hints": [
        "Try each word in a sentence, such as ___ ran, the dog saw ___, or ___ hat. See which blank it fits.",
        "A subject pronoun can start a sentence and do an action. An object pronoun comes after the action or after a word like to.",
        "Owning words come before a noun. Use that to sort some of the words first."
      ],
      "how": [
        "Say each word in a short sentence.",
        "She and they do the action. Him and us get the action. My and your come before a noun.",
        "Place each word in the group that matches its job."
      ],
      "misconception": "A common mix-up is putting us with the subject pronouns because it sounds like we. Us gets the action.",
      "why": "She and they are subject pronouns, so they do the action. Him and us are object pronouns, so they get the action. My and your are owning words, so they tell who owns something.",
      "like": [
        "SK-GUM2-6-P5"
      ]
    },
    {
      "id": "SK-GUM2-6-S03",
      "type": "mc",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Which fix does sentence 2 need, and why?",
      "choices": [
        {
          "text": "Swap in I, since Noah and the speaker were picked as captains.",
          "correct": true
        },
        {
          "text": "Swap in my, since Noah and the speaker jointly own the kickball field."
        },
        {
          "text": "Swap in us, since any pair of kids named together needs a plural word."
        },
        {
          "text": "Swap in mine, since captain is a job held only by the speaker."
        }
      ],
      "clue": "A pronoun takes the place of a noun. Ask what job the pronoun does in sentence 2.",
      "hints": [
        "A pronoun takes the place of a noun. Ask what job the pronoun does in sentence 2.",
        "Take the other captain's name out, and read the sentence with just the pronoun.",
        "Mine stands alone and does not come before a noun. Think about the other choices."
      ],
      "how": [
        "Take the other name out. The sentence becomes Me were chosen, which sounds wrong.",
        "The people who were chosen are the subject of the sentence, so it needs a subject pronoun.",
        "The answer is \"Swap in I, since Noah and the speaker were picked as captains.\""
      ],
      "misconception": "A common mix-up is thinking me is fine because it is common in speech. The sentence needs a subject pronoun.",
      "why": "The answer is \"Swap in I, since Noah and the speaker were picked as captains.\" I was chosen sounds right. My and mine tell who owns something, and us would change who is meant.",
      "like": [
        "SK-GUM2-6-C03"
      ]
    },
    {
      "id": "SK-GUM2-6-S04",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Which word completes sentence 4 correctly?",
      "text": "Maya cheered, and {0} ran to second base.",
      "slots": [
        {
          "options": [
            "she",
            "her",
            "hers"
          ],
          "answer": 0
        }
      ],
      "clue": "A pronoun takes the place of a noun. Decide what job the blank does in the sentence.",
      "hints": [
        "A pronoun takes the place of a noun. Decide what job the blank does in the sentence.",
        "Look at the verb that comes right after the blank.",
        "Hers stands alone and does not do an action. Think about the other choices."
      ],
      "how": [
        "The blank takes the place of Maya, and it does the running.",
        "A pronoun that does the action is a subject pronoun.",
        "The answer is she. Her gets an action or comes before a noun, and hers stands alone."
      ],
      "misconception": "A common mix-up is using her because it sounds natural in speech. Her gets an action and does not do it.",
      "why": "The answer is she. Maya does the running, so the blank needs a subject pronoun. Her gets an action or comes before a noun, and hers stands alone.",
      "like": [
        "SK-GUM2-6-C04"
      ]
    },
    {
      "id": "SK-GUM2-6-S05",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "One of the two Noah pairings is wrong. What is the difference between them?",
      "choices": [
        {
          "text": "Sentence 2 names the pair as captains, while sentence 3 has them handed the ball.",
          "correct": true
        },
        {
          "text": "Neither sentence has a flaw, since me and I may trade places whenever someone likes."
        },
        {
          "text": "The ball is a thing, so a sentence about a thing must use a different kind of pronoun."
        },
        {
          "text": "Captains are the leaders, so leaders always take I while helpers always take me."
        }
      ],
      "clue": "Look at the two sentences side by side. Ask what Noah is doing or getting in each one.",
      "hints": [
        "Look at the two sentences side by side. Ask what Noah is doing or getting in each one.",
        "Take Noah out of each sentence and read it with just the pronoun.",
        "Whether a name is a leader or a helper does not decide the pronoun. Think about the other choices."
      ],
      "how": [
        "Sentence 2: Noah and the speaker were chosen. Sentence 3: Mr. Hart handed something to them.",
        "A pronoun that is handed something is an object pronoun, so me works in sentence 3. In sentence 2 the pronoun is part of the subject.",
        "The answer is \"Sentence 2 names the pair as captains, while sentence 3 has them handed the ball.\""
      ],
      "misconception": "A common mix-up is thinking the words Noah and me are always wrong. The job in the sentence decides.",
      "why": "The answer is \"Sentence 2 names the pair as captains, while sentence 3 has them handed the ball.\" Mr. Hart handed me the ball sounds right. Me were chosen does not, so sentence 2 needs I.",
      "like": [
        "SK-GUM2-6-C05"
      ]
    },
    {
      "id": "SK-GUM2-6-S06",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Two of sentences 2 to 6 have a pronoun that does not fit. Tap them.",
      "targets": [
        "p5:1:2",
        "p5:1:3",
        "p5:2:1",
        "p5:2:2",
        "p5:2:3"
      ],
      "answer": [
        "p5:1:2",
        "p5:2:1"
      ],
      "pick": 2,
      "clue": "Find each pronoun in sentences 2 to 6. Ask what job each one does.",
      "hints": [
        "Find each pronoun in sentences 2 to 6. Ask what job each one does.",
        "When a name is joined to a pronoun, cover up the name and say the sentence with just the pronoun.",
        "The sentence about the red toolbox uses an owning word that stands alone, and it fits. Think about the rest."
      ],
      "how": [
        "Check each pronoun in order.",
        "Sentence 2 gives the stool job to Ravi and the writer, so they get the action. Sentence 4 has a word that gets an action doing the hammering.",
        "Sentences 3, 5 and 6 use he, hers and I with jobs that fit."
      ],
      "misconception": "A common mix-up is stopping at the first mistake. Check every sentence in the range.",
      "why": "The answers are \"Grandpa let Ravi and I sand the old stool.\" and \"Us hammered the nails while Grandpa watched.\" Grandpa let me sound right, so sentence 2 needs me. Us cannot do the hammering, so sentence 4 needs we. Sentences 3, 5 and 6 are correct.",
      "like": [
        "SK-GUM2-6-C06"
      ]
    },
    {
      "id": "SK-GUM2-6-S07",
      "type": "ebsr",
      "points": 2,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Work through the two parts in order.",
      "partA": {
        "prompt": "Why is the word us a poor fit in sentence 9?",
        "choices": [
          {
            "text": "Us goes with words that receive, but this spot is for the one who lets.",
            "correct": true
          },
          {
            "text": "Us belongs to words that do things, but this spot is for the one who receives."
          },
          {
            "text": "Us is for a crowd, but this spot is for a single helper at the table."
          },
          {
            "text": "Us shows ownership, but this spot is for the one who receives something."
          }
        ]
      },
      "partB": {
        "prompt": "Pick the best fix for sentence 9.",
        "choices": [
          {
            "text": "Grandpa painted it blue, and we let it dry in the warm sun all afternoon.",
            "correct": true
          },
          {
            "text": "Grandpa painted it blue, and us let it dry in the warm sun all afternoon."
          },
          {
            "text": "Grandpa painted it blue, and our let it dry in the warm sun all afternoon."
          },
          {
            "text": "Grandpa painted it blue, and ours let it dry in the warm sun all afternoon."
          }
        ]
      },
      "clue": "Say sentence 9 aloud. Ask who is doing the letting.",
      "hints": [
        "Say sentence 9 aloud. Ask who is doing the letting.",
        "In Part B, test each version by saying the word after and with the rest of the sentence.",
        "Ours stands alone and does not start a clause like this. Think about the other versions."
      ],
      "how": [
        "Part A: the pronoun in sentence 9 is the one doing the letting.",
        "Part B: a pronoun that does the action is a subject pronoun, so we fits.",
        "The answers are \"Us goes with words that receive, but this spot is for the one who lets.\" and \"Grandpa painted it blue, and we let it dry in the warm sun all afternoon.\""
      ],
      "misconception": "A common mix-up is using us whenever a sentence is about a group. Us names a receiver and does not do the action.",
      "why": "Part A: \"Us goes with words that receive, but this spot is for the one who lets.\" Part B: \"Grandpa painted it blue, and we let it dry in the warm sun all afternoon.\" We let sounds right. Us let does not.",
      "like": [
        "SK-GUM2-6-C07"
      ]
    },
    {
      "id": "SK-GUM2-6-S08",
      "type": "ms",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [],
      "prompt": "Which two choices have a pronoun that fits its job? Pick both.",
      "pick": 2,
      "choices": [
        {
          "text": "Lena and I picked ripe apples at the farm.",
          "correct": true
        },
        {
          "text": "The nurse gave him a sticker.",
          "correct": true
        },
        {
          "text": "Me waved at the passing train from the bridge."
        },
        {
          "text": "Nobody told Sam or I about the field trip."
        },
        {
          "text": "Him and Rita fed the goats."
        }
      ],
      "clue": "Find the pronoun in each sentence. Ask whether it does an action or gets one.",
      "hints": [
        "Find the pronoun in each sentence. Ask whether it does an action or gets one.",
        "Check every sentence, including the ones that look right. Cover up the other name when a name is joined to a pronoun.",
        "One choice joins a name and a pronoun right after told. Think about whether that pronoun gets the action."
      ],
      "how": [
        "Test each pronoun by saying the sentence with just that pronoun.",
        "Lena and I picked: I picked sounds right. Gave him: him gets the sticker, so it fits.",
        "Me waved, Nobody told Sam or I, and Him and Rita fed use the wrong kind of pronoun."
      ],
      "misconception": "A common mix-up is choosing I whenever a name comes before the pronoun. After told, the pronoun gets the action and needs me.",
      "why": "The answers are \"Lena and I picked ripe apples at the farm.\" and \"The nurse gave him a sticker.\" I picked sounds right, and gave him sounds right. Me waved, Nobody told Sam or I, and Him and Rita fed are incorrect.",
      "like": [
        "SK-GUM2-6-C08"
      ]
    },
    {
      "id": "SK-GUM2-6-S09",
      "type": "mc",
      "points": 1,
      "dok": 1,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [],
      "prompt": "Which pronoun finishes this sentence? ___ waved to the bus driver.",
      "choices": [
        {
          "text": "He",
          "correct": true
        },
        {
          "text": "Him"
        },
        {
          "text": "His"
        },
        {
          "text": "Himself"
        }
      ],
      "clue": "The blank is at the start of the sentence. Ask who is doing the waving.",
      "hints": [
        "The blank is at the start of the sentence. Ask who is doing the waving.",
        "A word that does the action is a subject pronoun. Think about which choices do that job.",
        "His tells who owns something and comes before a noun. Think about the other choices."
      ],
      "how": [
        "Someone is waving, so the blank does the action.",
        "He is a subject pronoun, so it can do the action.",
        "The answer is He."
      ],
      "misconception": "A common mix-up is choosing him because it sounds natural in speech. Him gets an action and does not do it.",
      "why": "The answer is He. The blank does the waving, so it needs a subject pronoun. Him gets an action, his must come before a noun, and himself is not used to start this sentence.",
      "like": [
        "SK-GUM2-6-C09"
      ]
    },
    {
      "id": "SK-GUM2-6-S10",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "A classmate rewrites sentence 1 as my cousins and me visit. Is that edit an improvement?",
      "choices": [
        {
          "text": "No, since I belongs there when it names whoever does the visiting.",
          "correct": true
        },
        {
          "text": "Yes, since any word following a plural noun must be an object form."
        },
        {
          "text": "Yes, since a short word like me is safer than a long one."
        },
        {
          "text": "No, since sentence 1 must use an owning word for the workshop."
        }
      ],
      "clue": "Think about the job the pronoun has in sentence 1. Does it do the action or get it?",
      "hints": [
        "Think about the job the pronoun has in sentence 1. Does it do the action or get it?",
        "Take my cousins and out, and say the sentence with just the pronoun.",
        "The length of a pronoun does not decide anything. Think about the other choices."
      ],
      "how": [
        "Take the cousins out and see which pronoun is left.",
        "Me visit does not sound right, but I visit does.",
        "The answer is \"No, since I belongs there when it names whoever does the visiting.\""
      ],
      "misconception": "A common mix-up is thinking me sounds nicer than I. The job of the pronoun decides.",
      "why": "The answer is \"No, since I belongs there when it names whoever does the visiting.\" The pronoun does the action, so it needs a subject pronoun. How short or soft it sounds does not change that.",
      "like": [
        "SK-GUM2-6-C10"
      ]
    },
    {
      "id": "SK-GUM2-6-S11",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Tap the two sentences, numbered 3 through 7, where the pronoun does its job.",
      "targets": [
        "p6:1:3",
        "p6:2:1",
        "p6:2:2",
        "p6:2:3",
        "p6:2:4"
      ],
      "answer": [
        "p6:1:3",
        "p6:2:2"
      ],
      "pick": 2,
      "clue": "Find each pronoun in sentences 3 to 7. Ask what job each one does.",
      "hints": [
        "Find each pronoun in sentences 3 to 7. Ask what job each one does.",
        "When a name is joined to a pronoun, cover up the name and say the sentence with just the pronoun.",
        "Sentence 7 has a pronoun that does not fit its job. Think about the rest."
      ],
      "how": [
        "Test each pronoun one sentence at a time.",
        "Sentence 3 has me getting help with the banner. Sentence 5 has their before the noun snacks.",
        "Sentences 4, 6 and 7 use her, us and she in jobs where they do not fit."
      ],
      "misconception": "A common mix-up is choosing a sentence because the pronoun sounds familiar. Check what the pronoun does.",
      "why": "The answers are \"Dad helped my sister and me hang the banner.\" and \"Our neighbors brought their own snacks to share.\" Me gets the help, and their comes before snacks. Sentence 4 needs She, sentence 6 needs we, and sentence 7 needs her.",
      "like": [
        "SK-GUM2-6-C11"
      ]
    },
    {
      "id": "SK-GUM2-6-S12",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Pick the pronoun that belongs in sentence 6.",
      "text": "Mom walked in, and {0} shouted surprise.",
      "slots": [
        {
          "options": [
            "we",
            "us",
            "our"
          ],
          "answer": 0
        }
      ],
      "clue": "A pronoun takes the place of a noun. Decide what job the blank does in the sentence.",
      "hints": [
        "A pronoun takes the place of a noun. Decide what job the blank does in the sentence.",
        "Look at the verb that comes right after the blank.",
        "Our tells who owns something, and it needs a noun after it. Look at what follows the blank."
      ],
      "how": [
        "The blank takes the place of the writer and the family, and it does the shouting.",
        "A pronoun that does the action is a subject pronoun.",
        "The answer is we. Us gets an action, and our tells who owns something."
      ],
      "misconception": "A common mix-up is using us because the shouting is done by a group. Us gets an action.",
      "why": "The answer is we. The group does the shouting, so the blank needs a subject pronoun. Us gets an action, and our must be followed by a noun.",
      "like": [
        "SK-GUM2-6-C12"
      ]
    },
    {
      "id": "SK-GUM2-6-S13",
      "type": "dropdown",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [],
      "prompt": "Fill both gaps so the sentence reads well.",
      "text": "Pedro washed {0} bike, and Mom helped {1} dry it.",
      "slots": [
        {
          "options": [
            "his",
            "him",
            "he"
          ],
          "answer": 0
        },
        {
          "options": [
            "him",
            "he",
            "his"
          ],
          "answer": 0
        }
      ],
      "clue": "The two gaps need different kinds of pronouns. Decide what job each one does.",
      "hints": [
        "The two gaps need different kinds of pronouns. Decide what job each one does.",
        "The first gap comes right before a noun. The second gap comes right after the word helped.",
        "He does the action and cannot come after helped. Look at the choices for the second gap."
      ],
      "how": [
        "The first gap tells whose bike it is. The second gap gets the helping.",
        "An owning word goes before a noun, and an object pronoun gets the action.",
        "The answers are his and him."
      ],
      "misconception": "A common mix-up is using the same pronoun twice. The two gaps do different jobs.",
      "why": "The answers are his and him. His tells whose bike it is and comes before the noun. Him gets the helping.",
      "like": [
        "SK-GUM2-6-C13"
      ]
    },
    {
      "id": "SK-GUM2-6-S14",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [],
      "prompt": "Pick the line where an owning word sits in the wrong spot.",
      "options": [
        "The green coat hanging on the hook is hers.",
        "Is this lunch box on the shelf ours or theirs?",
        "Theirs dog barked at the mail truck.",
        "Her class planted a new tree by the gate.",
        "The gray cat washed its face in the sun."
      ],
      "answer": [
        2
      ],
      "pick": 1,
      "clue": "Some owning words go before a noun, and some stand alone. Look at each owning word and what follows it.",
      "hints": [
        "Some owning words go before a noun, and some stand alone. Look at each owning word and what follows it.",
        "Find the owning words in the five lines. Ask whether a noun follows each one.",
        "The line about the lunch box has two owning words that stand alone. Think about the rest."
      ],
      "how": [
        "Find the owning words and look at what comes after each.",
        "Hers, ours and theirs stand alone, and her and its come before nouns.",
        "The answer is \"Theirs dog barked at the mail truck.\" It should be Their dog."
      ],
      "misconception": "A common mix-up is thinking theirs and their are the same. Theirs stands alone, and their comes before a noun.",
      "why": "The answer is \"Theirs dog barked at the mail truck.\" Theirs cannot come before a noun like dog, so it should be their. The other lines use their owning words correctly.",
      "like": [
        "SK-GUM2-6-C14"
      ]
    },
    {
      "id": "SK-GUM2-6-S15",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-personal-pronouns-subject-object-possessive"
      ],
      "passages": [],
      "prompt": "Ruben thinks me is correct every time a pronoun follows a friend's name. Which example proves his idea false?",
      "choices": [
        {
          "text": "Dev and I won the three-legged race.",
          "correct": true
        },
        {
          "text": "Ms. Park drove Dev and me home after the race."
        },
        {
          "text": "Mom gave Dev and me a snack after the race."
        },
        {
          "text": "Several kids waved at Dev and me from the bus."
        }
      ],
      "clue": "To prove an idea false, find an example that breaks it. Look at what each pronoun is doing.",
      "hints": [
        "To prove an idea false, find an example that breaks it. Look at what each pronoun is doing.",
        "In each sentence, take Dev out and say the sentence with just the pronoun.",
        "Ruben's idea is about the words Dev and plus a pronoun. Think about the other choices."
      ],
      "how": [
        "Ruben's idea says me is always right. Look for a sentence where me would be wrong.",
        "In three sentences, the pronoun gets the action. In the other, the pronoun does it.",
        "The answer is \"Dev and I won the three-legged race.\""
      ],
      "misconception": "A common mix-up is thinking one pronoun works whenever two people are named. The job in the sentence decides.",
      "why": "The answer is \"Dev and I won the three-legged race.\" I won sounds right, because the pronoun does the action. That proves Ruben wrong. In the other sentences, me gets the action.",
      "like": [
        "SK-GUM2-6-C15"
      ]
    }
  ],
  addons: {
    "SK-GUM2-6-P1": {
      "hints": [
        "A pronoun takes the place of a noun. Decide what job the blank does in the sentence.",
        "Cover up Marco and, and read the sentence with just the blank.",
        "Us would take the place of a group that includes the speaker. Think about the other choices."
      ],
      "how": [
        "Cover up Marco and. The sentence becomes ___ built a fort out of couch cushions.",
        "The blank does the building, so it needs a subject pronoun.",
        "The answer is I. I built a fort sounds right, and me built does not."
      ],
      "misconception": "A common mix-up is choosing me because it is how people often talk. The blank does the building, so it needs I."
    },
    "SK-GUM2-6-P2": {
      "hints": [
        "Ms. Lopez does the asking. Decide whether the blank does an action or gets one.",
        "Say the sentence with each choice. Listen for the one that sounds right after asked.",
        "Our tells who owns something, and it needs a noun after it. Look at what follows the blank."
      ],
      "how": [
        "Ms. Lopez does the asking, and the blank gets the asking.",
        "A pronoun that gets the action is an object pronoun.",
        "The answer is us. We does the action, and our tells who owns something."
      ],
      "misconception": "A common mix-up is choosing we because the plants belong to the class. We does the action, and here the blank gets it."
    },
    "SK-GUM2-6-P3": {
      "hints": [
        "Cover up the friend in each choice, and then say the sentence with just the pronoun.",
        "Also check the word that comes before friend, which tells whose friend.",
        "Mine stands alone and does not come before a noun like friend. Think about the other choices."
      ],
      "how": [
        "Cover up the friend in each sentence.",
        "Dad drove me sounds right, so me is correct. My is the owning word that goes before friend.",
        "The answer is \"Dad drove my friend and me to the museum.\" Dad drove I does not sound right."
      ],
      "misconception": "A common mix-up is choosing I because it comes after a friend's name. Dad does the driving, so the pronoun gets it."
    },
    "SK-GUM2-6-P4": {
      "hints": [
        "Find the pronoun in each sentence. Ask what job it does.",
        "When a pronoun joins another word in a pair, say the sentence with just the pronoun.",
        "The sentence about the bird uses an owning word before a noun, and it fits. Think about the rest."
      ],
      "how": [
        "Test each pronoun by itself.",
        "The bird built its nest, share with us, the lunchbox is mine and they invited her all fit.",
        "The answer is \"Him and his sister walk to school together.\" Him walk does not sound right, so it should be He."
      ],
      "misconception": "A common mix-up is trusting a pronoun because it is joined to a name. Check what job it does."
    },
    "SK-GUM2-6-P5": {
      "hints": [
        "Try each word in a sentence, such as ___ ran, the dog chased ___, or ___ dog barked.",
        "See which blank each word fits. Words that do the action fit differently from words that get it.",
        "Owning words come before a noun. Use that to sort some of the words first."
      ],
      "how": [
        "Try each word in a short sentence.",
        "We and he do the action. Them and me get the action. Our and their come before a noun.",
        "Place each word in the group that matches its job."
      ],
      "misconception": "A common mix-up is putting them with the owning words because it looks like their. Them gets the action."
    }
  },
  /* B7b:core:end */
  test: [
    { id: "SK-GUM2-6-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "{0} raced to the end of the dock and jumped into the lake.",
      slots: [ { options: ["Them", "They", "Their"], answer: 1 } ],
      clue: "The blank is the one doing the racing and jumping. Which kind of pronoun does the action?",
      why: "The answer is They. The pronoun does the action, so it must be a subject pronoun." },
    { id: "SK-GUM2-6-T2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Aunt Rosa made a quilt for my brother and {0}.",
      slots: [ { options: ["I", "me", "mine"], answer: 1 } ],
      clue: "Cover up my brother and. Then say the sentence with just the pronoun after for.",
      why: "The answer is me. A quilt for me sounds right. The pronoun comes after for, so it is an object pronoun." },
    { id: "SK-GUM2-6-T3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence has a pronoun error?",
      choices: [
        { text: "Us played tag at recess today.", correct: true },
        { text: "She wrote a letter to her pen pal." },
        { text: "Grandma hugged us at the airport." },
        { text: "Is this green scarf yours?" }
      ],
      clue: "Find the pronoun in each sentence. Ask whether it does the action, gets the action or tells who owns something. Then check that it is the right kind.",
      why: "The answer is \"Us played tag at recess today.\" The pronoun does the action of playing, so it should be the subject pronoun we: We played tag at recess today." },
    { id: "SK-GUM2-6-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO sentences use pronouns correctly?",
      choices: [
        { text: "My sister and I painted a birdhouse.", correct: true },
        { text: "Me and my sister painted a birdhouse." },
        { text: "The teacher read a story to Omar and me.", correct: true },
        { text: "The teacher read a story to Omar and I." },
        { text: "Them painted a birdhouse for the yard." }
      ],
      clue: "Cover up the other person's name in each sentence and say it with just the pronoun.",
      why: "The answers are \"My sister and I painted a birdhouse.\" and \"The teacher read a story to Omar and me.\" I painted sounds right, and read a story to me sounds right. Me painted, to I and them painted are not correct." },
    { id: "SK-GUM2-6-T5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Liam lost {0} hat, so Kiara lent {1} a spare one.",
      slots: [
        { options: ["him", "his", "he"], answer: 1 },
        { options: ["he", "his", "him"], answer: 2 }
      ],
      clue: "The first blank tells whose hat. The second blank gets the action of lending.",
      why: "The answers are his and him. His tells that the hat belongs to Liam. Him gets the action, because Kiara lent the hat to him." }
  ]
});

/* ---------- GUM2-7: prepositions ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:use-frequently-occurring-prepositions",
  title: "Prepositions: words that tell where and when",
  teach: {
    big: "A preposition is a small word that starts a group of words and links it to the rest of the sentence. Many show where or when, like in, on, under, before and after.",
    points: [
      "Some prepositions tell where: in, on, under, over, behind, beside, between, across, through, along, toward and near.",
      "Some prepositions tell when: before, after, during and until. Some, like through, can tell where or when: through the woods, through the night.",
      "A preposition starts a group of words that ends with a noun, like under the bed or during the game. The group adds a detail to the sentence. Some prepositions tell other things, like with, for, to and about: a walk with Dad.",
      "Choose the preposition that says exactly what you mean. The cat is on the box and the cat is in the box tell about different places."
    ],
    words: [
      { term: "preposition", means: "a word like in, under or after that shows where or when" }
    ],
    example: {
      label: "Example",
      lines: ["After school, Nia hid the gift under her bed."],
      note: "After tells when (after school). Under tells where (under her bed). Each preposition starts a group of words that ends with a noun."
    },
    tip: "On the test, try each choice in the sentence and picture what it says. Pick the one that makes sense."
  },
  learn: [
    {
      show: ["The ducks swam ___ the pond. (across, between, during)"],
      ask: "Which preposition fits the sentence?",
      steps: [
        "Picture the ducks and the pond. The blank needs a word that tells where the ducks swam.",
        "During tells when, not where. Between usually goes with two things, and there is only one pond.",
        "Across shows the ducks moving from one side of the pond to the other."
      ],
      answer: "Across. The ducks swam across the pond."
    },
    {
      show: ["We cannot talk during the fire drill."],
      ask: "Which word is the preposition, and what does it tell?",
      steps: [
        "Look for a small word that starts a group of words ending in a noun. During starts the group during the fire drill.",
        "Ask: Does it tell where or when? During tells when we cannot talk."
      ],
      answer: "During is the preposition. It tells when."
    },
    {
      show: ["Grandpa read us a story under the quilt before bed."],
      ask: "Which two words are prepositions, and what does each one tell?",
      steps: [
        "Look for small words that start a group of words ending in a noun. Under starts under the quilt, and before starts before bed.",
        "Ask what each group tells. Under the quilt tells where Grandpa read. Before bed tells when.",
        "Under tells where, and before tells when."
      ],
      answer: "Under tells where, and before tells when."
    }
  ],
  parent: "Play a hiding game with a small toy. Hide it, then give your child clues that use prepositions (It is under something soft. It is behind something tall.). Then trade places.",
  passages: [
    /* B7b:passages:start */
    {
      "id": "p1",
      "title": "Saturday at the Lake",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last Saturday, we packed the van and drove out to Lake Pine for a picnic lunch.",
          "(2) We spread a red blanket during the soft grass near the water.",
          "(3) Dad set the cooler beside the old oak tree, and Mom opened it."
        ],
        [
          "(4) She pulled sandwiches out of the cooler and passed them around to everyone.",
          "(5) After lunch, my brother and I skipped flat stones across the lake.",
          "(6) A turtle rested until a warm log and watched us closely."
        ],
        [
          "(7) We stayed at the lake until sunset and watched the hills turn gold.",
          "(8) Before we left, we picked up all of our trash and cans.",
          "(9) The ride home was quiet, and I fell asleep in the car.",
          "(10) I hope we visit the lake again next summer."
        ]
      ]
    },
    {
      "id": "p2",
      "title": "The Pet Parade",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Our class held a pet parade on the playground last Friday.",
          "(2) Every child waited during the front gate with a leash or a box.",
          "(3) Mr. Ortiz checked each pet and each leash carefully before the parade."
        ],
        [
          "(4) Jin's rabbit hopped beside the long line of excited kids.",
          "(5) A parrot rode on Tess's shoulder and squawked as loudly as it could.",
          "(6) Pedro's puppy hid until a bench and would not come out."
        ],
        [
          "(7) After the parade, we sat until the shady tree and gave each pet a snack.",
          "(8) Mr. Ortiz said the parade could return in the spring.",
          "(9) We stayed outside until the end of recess.",
          "(10) Everyone went inside happy and a little dusty."
        ]
      ]
    },
    {
      "id": "p3",
      "title": "Muffins with Aunt Pilar",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On Sunday, Aunt Pilar and I baked blueberry muffins in her kitchen.",
          "(2) She tied an apron around my waist before we started.",
          "(3) We mixed the flour and eggs inside a huge steel bowl."
        ],
        [
          "(4) Aunt Pilar set the muffin tin across the oven for twenty minutes.",
          "(5) Steam drifted up from the oven and curled between the ceiling.",
          "(6) After the buzzer, we pulled the hot pan out of the oven.",
          "(7) We let the muffins cool until a wire rack."
        ],
        [
          "(8) Aunt Pilar packed six muffins in a paper bag for me to take home.",
          "(9) I ate one on the porch steps while the sun set.",
          "(10) The rest went to my neighbors next door."
        ]
      ]
    },
    {
      "id": "p4",
      "title": "The Science Fair",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Our school held its science fair in the gym on Thursday afternoon.",
          "(2) Posters hung between the wall, and every one had a bright title.",
          "(3) Mrs. Brooks welcomed the families at the front door of the gym."
        ],
        [
          "(4) My volcano sat on a small table beside a tray of baking soda.",
          "(5) Parents walked between two long rows of tables and asked many questions.",
          "(6) A boy named Omar set his magnet display until the window."
        ],
        [
          "(7) The judges visited every table before lunch.",
          "(8) Then they handed out ribbons in the middle of the gym.",
          "(9) I earned a blue ribbon, and I held it all the way home.",
          "(10) I cannot wait for next year's science fair."
        ]
      ]
    },
    {
      "id": "p5",
      "title": "A Windy Soccer Practice",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On Tuesday, our soccer team met on the field after school.",
          "(2) Coach Rivera told everyone to line up during the goal.",
          "(3) We jogged slowly around the muddy track to warm up our legs."
        ],
        [
          "(4) Then we kicked the ball back and forth between two orange cones.",
          "(5) The wind blew the ball until the fence, and a boy chased it.",
          "(6) Leah stood beside me and counted every pass out loud."
        ],
        [
          "(7) After practice, we drank cold water during a big cooler.",
          "(8) Coach Rivera clapped and said we played well during the windy afternoon.",
          "(9) We packed our bags and walked home before dark.",
          "(10) I am excited for our first game next week."
        ]
      ]
    },
    {
      "id": "p6",
      "title": "Learning to Swim",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) This summer, I took swimming lessons at the town pool.",
          "(2) My teacher, Ms. Vega, met us beside the shallow end each morning.",
          "(3) We sat on the warm edge and kicked our feet in the water."
        ],
        [
          "(4) First, we blew bubbles during the pool and practiced breathing.",
          "(5) Next, I held a foam board and kicked across the shallow end.",
          "(6) Ms. Vega waited until my side as I swam my very first lap of the pool.",
          "(7) At the end, I climbed out between the ladder and sat down."
        ],
        [
          "(8) Afterward, we dried off under the big blue umbrella.",
          "(9) Ms. Vega gave every student a sticker for being brave.",
          "(10) I will swim in the deep end before summer ends."
        ]
      ]
    }
    /* B7b:passages:end */
  ],
  practice: [
    { id: "SK-GUM2-7-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Put the milk back {0} the refrigerator so it stays cold.",
      slots: [ { options: ["in", "across", "through", "between"], answer: 0 } ],
      clue: "Picture where the milk needs to go to stay cold. Try each word in the sentence.",
      why: "The answer is in. The milk goes inside the refrigerator to stay cold. Across, through and between do not make sense with one refrigerator." },
    { id: "SK-GUM2-7-P2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word in this sentence is a preposition?",
      stem: "The kitten slept beside the warm stove.",
      choices: [
        { text: "beside", correct: true },
        { text: "slept" },
        { text: "warm" },
        { text: "kitten" }
      ],
      clue: "A preposition comes before a noun and tells where or when. Find the word that tells where the kitten slept.",
      why: "The answer is beside. Beside comes before the warm stove and tells where the kitten slept. Slept is a verb, warm describes the stove, and kitten is a noun." },
    { id: "SK-GUM2-7-P3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "We brush our teeth {0} bedtime.",
      slots: [ { options: ["before", "under", "across", "until"], answer: 0 } ],
      clue: "Is bedtime a place or a time? Picture each choice in the sentence. When do people brush their teeth?",
      why: "The answer is before. Bedtime is a time, so under and across, which tell where, do not fit. Until also tells when, but it would mean brushing your teeth for hours until bedtime. People brush their teeth before bedtime." },
    { id: "SK-GUM2-7-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each group of words tell where or when? Sort each one.",
      cols: ["Where", "When"],
      rows: [
        { text: "under the bridge", answer: 0 },
        { text: "after breakfast", answer: 1 },
        { text: "behind the barn", answer: 0 },
        { text: "during the storm", answer: 1 },
        { text: "near the river", answer: 0 },
        { text: "before sunrise", answer: 1 }
      ],
      clue: "Look at the noun after each preposition. Is it a place or a time?",
      why: "Under the bridge, behind the barn and near the river tell where. After breakfast, during the storm and before sunrise tell when." },
    { id: "SK-GUM2-7-P5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence where the preposition does not make sense.",
      options: [
        "The children waded into the creek.",
        "A plane flew over the clouds.",
        "Max stood between his two best friends.",
        "The fish swam during the bowl.",
        "We ate popcorn at the movies."
      ],
      answer: [3], pick: 1,
      clue: "Picture each sentence. Does the small word before each noun tell a where or when that makes sense?",
      why: "The answer is \"The fish swam during the bowl.\" A bowl is a place, but during tells when. The sentence should say in the bowl." }
  ],
  /* B7b:core:start */
  /* ---------- Expansion 2026-10-22, batch B7b (GUM Reinforce, second half) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test.
     Author log: docs/expansion-2026-10-22/batches/B7b-author-log.md. NOT ACCEPTED: needs independent review. */
  core: {
    "rev": "1",
    "sets": [
      {
        "title": "Set 1",
        "items": [
          {
            "ref": "SK-GUM2-7-P4"
          },
          {
            "ref": "SK-GUM2-7-P5"
          },
          {
            "id": "SK-GUM2-7-C03",
            "type": "mc",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 2 has a preposition that does not make sense. What is the problem?",
            "choices": [
              {
                "text": "During points to a time, but the soft grass is a place, so another preposition is needed.",
                "correct": true
              },
              {
                "text": "During points to a place, but the soft grass is a time, so another preposition is needed."
              },
              {
                "text": "During is a verb, but the blanket needs a noun to show who spread it out."
              },
              {
                "text": "During is correct, but the word spread should come after the grass instead of before it."
              }
            ],
            "clue": "A preposition starts a group of words that ends with a noun. Find the group in sentence 2.",
            "hints": [
              "A preposition starts a group of words that ends with a noun. Find the group in sentence 2.",
              "Ask what kind of noun ends the group in sentence 2.",
              "Spread is the action word in the sentence. Think about the other choices."
            ],
            "how": [
              "The group of words that starts with during ends with the noun grass.",
              "Grass is a place, so the group needs a preposition that tells where.",
              "The answer is \"During points to a time, but the soft grass is a place, so another preposition is needed.\""
            ],
            "misconception": "A common mix-up is thinking any small word can start the group. The word has to fit the noun that comes after it.",
            "why": "The answer is \"During points to a time, but the soft grass is a place, so another preposition is needed.\" Grass is a place, so the sentence needs a different preposition. During is a preposition, not a verb, and moving spread would not fix anything.",
            "like": [
              "SK-GUM2-7-S03"
            ]
          },
          {
            "id": "SK-GUM2-7-C04",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 6 has the wrong preposition. Which word repairs it?",
            "text": "A turtle rested {0} a warm log and watched us closely.",
            "slots": [
              {
                "options": [
                  "near",
                  "until",
                  "during"
                ],
                "answer": 0
              }
            ],
            "clue": "Decide whether the log is a place or a time.",
            "hints": [
              "Decide whether the log is a place or a time.",
              "Picture the turtle and the log, and say each choice in the sentence.",
              "During tells when something happens. Look at the other choices."
            ],
            "how": [
              "The group of words ends with the noun log, which is a place.",
              "The blank needs a word that tells where the turtle rested.",
              "The answer is near. Until and during both tell when."
            ],
            "misconception": "A common mix-up is choosing until because it sounds like a small joining word. Until tells when, and a log is a place.",
            "why": "The answer is near. A log is a place, so the blank needs a word that tells where. Until and during tell when, so they do not fit.",
            "like": [
              "SK-GUM2-7-S04"
            ]
          },
          {
            "id": "SK-GUM2-7-C05",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentences 6 and 7 both use until, yet only sentence 6 is a mistake. Why?",
            "choices": [
              {
                "text": "In sentence 7 until goes with a time, but in sentence 6 it goes with a place.",
                "correct": true
              },
              {
                "text": "Until tells where something is, so sentence 6 is fine and sentence 7 is the mistake."
              },
              {
                "text": "Both sentences use until in the same way, so neither one needs to be fixed at all."
              },
              {
                "text": "Sentence 7 has the word began in it, and began permits every preposition after it."
              }
            ],
            "clue": "Look at the group of words that follows until in each sentence.",
            "hints": [
              "Look at the group of words that follows until in each sentence.",
              "Ask what kind of noun follows until in each sentence.",
              "Until tells when, so one of the choices cannot be true. Think about the other choices."
            ],
            "how": [
              "Sentence 6: until a warm log. Sentence 7: until sunset.",
              "Sunset is a time, and a log is a place.",
              "The answer is \"In sentence 7 until goes with a time, but in sentence 6 it goes with a place.\""
            ],
            "misconception": "A common mix-up is thinking a word is right or wrong by itself. The noun that follows it decides.",
            "why": "The answer is \"In sentence 7 until goes with a time, but in sentence 6 it goes with a place.\" Until tells when, so it fits sunset. It does not fit a log.",
            "like": [
              "SK-GUM2-7-S05"
            ]
          }
        ]
      },
      {
        "title": "Set 2",
        "items": [
          {
            "id": "SK-GUM2-7-C06",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Two sentences from 2 through 6 pair a preposition with the wrong noun. Select them.",
            "targets": [
              "p2:1:2",
              "p2:1:3",
              "p2:2:1",
              "p2:2:2",
              "p2:2:3"
            ],
            "answer": [
              "p2:1:2",
              "p2:2:3"
            ],
            "pick": 2,
            "clue": "Find the preposition in each of sentences 2 through 6. Ask whether the noun after it names a place or a time.",
            "hints": [
              "Find the preposition in each of sentences 2 through 6. Ask whether the noun after it names a place or a time.",
              "Picture each sentence and ask whether the small word makes sense with the words after it.",
              "The sentence about the parrot and the shoulder makes sense. Think about the rest."
            ],
            "how": [
              "Check each preposition one sentence at a time.",
              "Before the parade, beside the long line and on Tess's shoulder all fit their nouns.",
              "The other two use a word that tells when with a place."
            ],
            "misconception": "A common mix-up is stopping at the first mistake. Check every sentence in the range.",
            "why": "The answers are \"Every child waited during the front gate with a leash or a box.\" and \"Pedro's puppy hid until a bench and would not come out.\" Gate and bench are places, but during and until tell when. Sentences 3, 4 and 5 are correct.",
            "like": [
              "SK-GUM2-7-S06"
            ]
          },
          {
            "id": "SK-GUM2-7-C07",
            "type": "ebsr",
            "points": 2,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Complete Part A, then move to Part B.",
            "partA": {
              "prompt": "What is wrong with the preposition in sentence 7?",
              "choices": [
                {
                  "text": "Until tells when, but the shady tree is a place, so a word for where is needed.",
                  "correct": true
                },
                {
                  "text": "Until tells where, but the shady tree is a time, so a word for when is needed."
                },
                {
                  "text": "Until is correct as written, but sat should change to sits to match the tree."
                },
                {
                  "text": "Until starts the group correctly, but the group should end with a verb, not a noun."
                }
              ]
            },
            "partB": {
              "prompt": "Pick the version that repairs sentence 7.",
              "choices": [
                {
                  "text": "After the parade, we sat under the shady tree and gave each pet a snack.",
                  "correct": true
                },
                {
                  "text": "After the parade, we sat until the shady tree and gave each pet a snack."
                },
                {
                  "text": "After the parade, we sat among the shady tree and gave each pet a snack."
                },
                {
                  "text": "After the parade, we sat during the shady tree and gave each pet a snack."
                }
              ]
            },
            "clue": "Find the group of words that starts with until. Ask what kind of noun ends the group.",
            "hints": [
              "Find the group of words that starts with until. Ask what kind of noun ends the group.",
              "In Part B, read each version and picture where the children sat.",
              "Among usually goes with several things. Think about the other versions."
            ],
            "how": [
              "Part A: the group ends with the noun tree, which names a place.",
              "Part B: the fix needs a preposition that tells where the children sat.",
              "The answers are \"Until tells when, but the shady tree is a place, so a word for where is needed.\" and \"After the parade, we sat under the shady tree and gave each pet a snack.\""
            ],
            "misconception": "A common mix-up is trusting the first preposition that sounds familiar. Check the noun that follows it.",
            "why": "Part A: \"Until tells when, but the shady tree is a place, so a word for where is needed.\" Part B: \"After the parade, we sat under the shady tree and gave each pet a snack.\" Under tells where the children sat. Until and during tell when.",
            "like": [
              "SK-GUM2-7-S07"
            ]
          },
          {
            "id": "SK-GUM2-7-C08",
            "type": "ms",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [],
            "prompt": "Which TWO sentences use a preposition that tells when?",
            "pick": 2,
            "choices": [
              {
                "text": "Tia stretched her legs after the long concert.",
                "correct": true
              },
              {
                "text": "The library stays closed until Monday morning.",
                "correct": true
              },
              {
                "text": "A bird built its nest on the porch roof near the door."
              },
              {
                "text": "Ana walked through the tunnel to the playground."
              },
              {
                "text": "The mail truck stopped near the old red mailbox."
              }
            ],
            "clue": "Find the preposition in each sentence. Ask what the noun that follows it names.",
            "hints": [
              "Find the preposition in each sentence. Ask what the noun that follows it names.",
              "Check all five choices, including the ones that look right at first glance. A time word and a place word lead to different answers.",
              "One choice has a long group of words. Be sure to check its last noun too."
            ],
            "how": [
              "Look at the noun after each preposition.",
              "Concert and Monday morning name times. Porch roof, tunnel and mailbox name places.",
              "The answers are after the long concert and until Monday morning."
            ],
            "misconception": "A common mix-up is picking a sentence because it mentions the day or the night. The preposition itself has to tell when.",
            "why": "The answers are \"Tia stretched her legs after the long concert.\" and \"The library stays closed until Monday morning.\" After and until tell when. On, through and near tell where.",
            "like": [
              "SK-GUM2-7-S08"
            ]
          },
          {
            "id": "SK-GUM2-7-C09",
            "type": "mc",
            "points": 1,
            "dok": 1,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [],
            "prompt": "Pick the preposition in this sentence.",
            "stem": "The frog jumped behind a green lily pad.",
            "choices": [
              {
                "text": "behind",
                "correct": true
              },
              {
                "text": "jumped"
              },
              {
                "text": "green"
              },
              {
                "text": "frog"
              }
            ],
            "clue": "A preposition starts a group of words that ends with a noun. Find that group.",
            "hints": [
              "A preposition starts a group of words that ends with a noun. Find that group.",
              "The group in this sentence names a place. Look at the small word that starts it.",
              "Green describes the lily pad. Think about the other choices."
            ],
            "how": [
              "The group of words is behind a green lily pad.",
              "Behind starts the group and tells where the frog jumped.",
              "The answer is behind."
            ],
            "misconception": "A common mix-up is picking the action word. Jumped tells what the frog did, not where.",
            "why": "The answer is behind. Behind starts the group behind a green lily pad and tells where the frog jumped. Jumped is a verb, green describes the lily pad, and frog is a noun.",
            "like": [
              "SK-GUM2-7-S09"
            ]
          },
          {
            "id": "SK-GUM2-7-C10",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Ana says until in sentence 9 is wrong because the end of recess is not a time. Which reply is best?",
            "choices": [
              {
                "text": "Until tells how long the kids stayed, and the end of recess is when it stopped.",
                "correct": true
              },
              {
                "text": "Events such as recess always need a word for where, so Ana has the better idea."
              },
              {
                "text": "Until can only be followed by a day or a month, so Ana is correct about sentence 9."
              },
              {
                "text": "Until works only before a person's name, so sentence 9 should say until Mr. Ortiz."
              }
            ],
            "clue": "Think about what Ana is trusting. Is it the kind of noun, or what until tells?",
            "hints": [
              "Think about what Ana is trusting. Is it the kind of noun, or what until tells?",
              "Read sentence 9 and ask what happens at the end of recess.",
              "Until does not need a day or a name after it. Think about the other choices."
            ],
            "how": [
              "Until tells when something stops.",
              "The kids stayed outside, and the end of recess stopped it. That is a time idea.",
              "The answer is \"Until tells how long the kids stayed, and the end of recess is when it stopped.\""
            ],
            "misconception": "A common mix-up is thinking a time word must be followed by a clock time. An event can name a time too.",
            "why": "The answer is \"Until tells how long the kids stayed, and the end of recess is when it stopped.\" Until tells when, and the end of recess marks the moment. Until does not need a day or a name.",
            "like": [
              "SK-GUM2-7-S10"
            ]
          }
        ]
      },
      {
        "title": "Set 3",
        "items": [
          {
            "id": "SK-GUM2-7-C11",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Two sentences from 3 to 7 have a preposition that makes sense. Select them.",
            "targets": [
              "p3:1:3",
              "p3:2:1",
              "p3:2:2",
              "p3:2:3",
              "p3:2:4"
            ],
            "answer": [
              "p3:1:3",
              "p3:2:3"
            ],
            "pick": 2,
            "clue": "Find the preposition in each of sentences 3 to 7. Ask what each one is supposed to show.",
            "hints": [
              "Find the preposition in each of sentences 3 to 7. Ask what each one is supposed to show.",
              "Picture each sentence. Check whether the noun that comes next fits a where or a when idea.",
              "The sentence about the steam uses a word that usually goes with two things. Think about the rest."
            ],
            "how": [
              "Check each sentence one at a time.",
              "Sentence 3 puts the flour inside a bowl, and sentence 6 pulls the hot pan out of the oven. Both make sense.",
              "Sentences 4, 5 and 7 use across, between and until in places where they do not fit."
            ],
            "misconception": "A common mix-up is choosing a sentence because it sounds familiar. Picture what the preposition says.",
            "why": "The answers are \"We mixed the flour and eggs inside a huge steel bowl.\" and \"After the buzzer, we pulled the hot pan out of the oven.\" Inside a bowl and out of the oven make sense. Across the oven, between the ceiling and until a wire rack do not.",
            "like": [
              "SK-GUM2-7-S11"
            ]
          },
          {
            "id": "SK-GUM2-7-C12",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Which word fixes the preposition in sentence 7?",
            "text": "We let the muffins cool {0} a wire rack.",
            "slots": [
              {
                "options": [
                  "on",
                  "since",
                  "among"
                ],
                "answer": 0
              }
            ],
            "clue": "Decide whether the wire rack is a place or a time.",
            "hints": [
              "Decide whether the wire rack is a place or a time.",
              "Picture the muffins and the wire rack, and say each choice in the sentence.",
              "Among usually goes with several things. Look at the other choices."
            ],
            "how": [
              "The group ends with the noun rack, which is a place.",
              "The blank needs a word that tells where the muffins cooled.",
              "The answer is on. Since tells when, and among goes with several things."
            ],
            "misconception": "A common mix-up is picking since because the muffins cool for a while. The noun after it is a place.",
            "why": "The answer is on. A wire rack is a place, so the blank needs a word that tells where. Since tells when, and among goes with several things.",
            "like": [
              "SK-GUM2-7-S12"
            ]
          },
          {
            "id": "SK-GUM2-7-C13",
            "type": "dropdown",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [],
            "prompt": "Pick a preposition to fill each blank.",
            "text": "The mail carrier walks {0} our street every day and stops {1} noon to eat lunch.",
            "slots": [
              {
                "options": [
                  "along",
                  "during",
                  "until"
                ],
                "answer": 0
              },
              {
                "options": [
                  "at",
                  "in",
                  "between"
                ],
                "answer": 0
              }
            ],
            "clue": "The two blanks need different kinds of prepositions. Decide whether each noun is a place or a time.",
            "hints": [
              "The two blanks need different kinds of prepositions. Decide whether each noun is a place or a time.",
              "The first blank comes before street. The second blank comes before noon.",
              "Between usually goes with two things. Look at the choices for the second blank."
            ],
            "how": [
              "The first blank tells where the carrier walks. The second blank tells when the carrier stops.",
              "Street is a place, and noon is a time.",
              "The answers are along and at."
            ],
            "misconception": "A common mix-up is using the same kind of word twice. One blank tells where, and the other tells when.",
            "why": "The answers are along and at. Along tells where the carrier walks. At noon tells when the carrier stops to eat.",
            "like": [
              "SK-GUM2-7-S13"
            ]
          },
          {
            "id": "SK-GUM2-7-C14",
            "type": "hottext",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [],
            "prompt": "Which sentence has a preposition that tells the wrong thing?",
            "options": [
              "Zara rode her bike along the quiet trail.",
              "The movers carried the couch through the narrow door.",
              "Our class waited inside until lunch.",
              "Leo found his missing shoe between the sofa and the wall.",
              "The cookies cooled during the kitchen counter."
            ],
            "answer": [
              4
            ],
            "pick": 1,
            "clue": "Find the preposition in each sentence. Ask whether the noun after it names a place or a time.",
            "hints": [
              "Find the preposition in each sentence. Ask whether the noun after it names a place or a time.",
              "Picture each sentence and check that the small word makes sense with the words after it.",
              "The sentence about the shoe uses a word that usually goes with two things, and it fits. Think about the rest."
            ],
            "how": [
              "Look at the noun after each preposition.",
              "Trail, door, lunch and the sofa and the wall all fit their prepositions.",
              "The answer is \"The cookies cooled during the kitchen counter.\" A counter is a place, so the sentence should say on."
            ],
            "misconception": "A common mix-up is thinking during works anywhere. During tells when, so it needs a time.",
            "why": "The answer is \"The cookies cooled during the kitchen counter.\" A counter is a place, but during tells when. The sentence should say on the kitchen counter.",
            "like": [
              "SK-GUM2-7-S14"
            ]
          },
          {
            "id": "SK-GUM2-7-C15",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-frequently-occurring-prepositions"
            ],
            "passages": [],
            "prompt": "Kai says, \"A preposition always tells where something is.\" Which sentence shows that Kai is wrong?",
            "choices": [
              {
                "text": "We practiced our song before the show.",
                "correct": true
              },
              {
                "text": "The tent stood beside the frozen pond."
              },
              {
                "text": "A tiny frog hid behind the flower pot."
              },
              {
                "text": "The path wound across the sunny hill."
              }
            ],
            "clue": "To test a statement, look for an example that breaks it. Look at what each preposition tells.",
            "hints": [
              "To test a statement, look for an example that breaks it. Look at what each preposition tells.",
              "In each sentence, ask whether the preposition tells a place or a time.",
              "The claim is about what prepositions tell. Think about the other choices."
            ],
            "how": [
              "Kai says every preposition tells where. Look for one that tells when.",
              "Beside, behind and across tell where.",
              "The answer is \"We practiced our song before the show.\""
            ],
            "misconception": "A common mix-up is thinking prepositions only tell place. Some tell time.",
            "why": "The answer is \"We practiced our song before the show.\" Before tells when, which proves Kai wrong. Beside, behind and across tell where.",
            "like": [
              "SK-GUM2-7-S15"
            ]
          }
        ]
      }
    ]
  },
  similar: [
    {
      "id": "SK-GUM2-7-S01",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [],
      "prompt": "Tap the line with a preposition that does not fit.",
      "options": [
        "The ferry sailed across the wide harbor on Sunday.",
        "Our class lined up beside the yellow school bus.",
        "The sled raced over the snowy hill at top speed.",
        "Dad parked the truck until the garage.",
        "We sang songs around the glowing campfire."
      ],
      "answer": [
        3
      ],
      "pick": 1,
      "clue": "Find the preposition in each line. Ask whether the noun after it names a place or a time.",
      "hints": [
        "Find the preposition in each line. Ask whether the noun after it names a place or a time.",
        "Picture each line. Check that the small word makes sense with the words after it.",
        "The line about the sled makes sense. Think about the rest."
      ],
      "how": [
        "Look at the noun after each preposition.",
        "Across the harbor, beside the bus, over the hill and around the campfire all tell where.",
        "The answer is \"Dad parked the truck until the garage.\" A garage is a place, but until tells when."
      ],
      "misconception": "A common mix-up is picking a line because it is short. Check what the preposition tells.",
      "why": "The answer is \"Dad parked the truck until the garage.\" A garage is a place, but until tells when. The sentence should say in the garage.",
      "like": [
        "SK-GUM2-7-P5"
      ]
    },
    {
      "id": "SK-GUM2-7-S02",
      "type": "match",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [],
      "prompt": "Place every phrase under the heading it fits.",
      "cols": [
        "Place",
        "Time"
      ],
      "rows": [
        {
          "text": "on the shelf",
          "answer": 0
        },
        {
          "text": "until midnight",
          "answer": 1
        },
        {
          "text": "beside the gate",
          "answer": 0
        },
        {
          "text": "at noon",
          "answer": 1
        },
        {
          "text": "across the field",
          "answer": 0
        },
        {
          "text": "since Monday",
          "answer": 1
        }
      ],
      "clue": "Look at the noun that ends each group of words. Ask whether it names a spot or a moment.",
      "hints": [
        "Look at the noun that ends each group of words. Ask whether it names a spot or a moment.",
        "Say each group in a sentence, such as The box sat ___ or We waited ___.",
        "Some of these words tell time only. Use them to sort a few first."
      ],
      "how": [
        "Look at the last word of each group.",
        "Shelf, gate and field are places. Midnight, noon and Monday are times.",
        "Place each group where its noun belongs."
      ],
      "misconception": "A common mix-up is sorting by the first word. The noun that ends the group tells you which group it is.",
      "why": "On the shelf, beside the gate and across the field show a place. Until midnight, at noon and since Monday show a time.",
      "like": [
        "SK-GUM2-7-P4"
      ]
    },
    {
      "id": "SK-GUM2-7-S03",
      "type": "mc",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "What change would repair sentence 2, and why?",
      "choices": [
        {
          "text": "Swap in on, since the posters were stuck against one wall.",
          "correct": true
        },
        {
          "text": "Swap in during, since the posters hung for the whole afternoon."
        },
        {
          "text": "Swap in among, since posters are always grouped by their colors."
        },
        {
          "text": "Swap in until, since the posters stayed up for a long time."
        }
      ],
      "clue": "Find the group of words in sentence 2 that ends with a noun.",
      "hints": [
        "Find the group of words in sentence 2 that ends with a noun.",
        "Ask how many walls the sentence names, and what the posters need to do with it.",
        "Until tells when. Think about the other choices."
      ],
      "how": [
        "The group of words ends with the noun wall.",
        "The sentence names one wall, so between does not fit.",
        "The answer is \"Swap in on, since the posters were stuck against one wall.\""
      ],
      "misconception": "A common mix-up is changing the word to another time word. The posters need a word that tells where.",
      "why": "The answer is \"Swap in on, since the posters were stuck against one wall.\" Between usually goes with two things, and the sentence names one wall. During, among and until do not fit one wall.",
      "like": [
        "SK-GUM2-7-C03"
      ]
    },
    {
      "id": "SK-GUM2-7-S04",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Pick the preposition that suits the line about Omar's display.",
      "text": "A boy named Omar set his magnet display {0} the window.",
      "slots": [
        {
          "options": [
            "by",
            "since",
            "between"
          ],
          "answer": 0
        }
      ],
      "clue": "Decide whether the window is a place or a time.",
      "hints": [
        "Decide whether the window is a place or a time.",
        "Picture the magnet display and the window.",
        "Between usually goes with two things. Look at the choices again."
      ],
      "how": [
        "The group ends with the noun window, which is a place.",
        "The blank needs a word that tells where the display sat.",
        "The answer is by. Since tells when, and between usually goes with two things."
      ],
      "misconception": "A common mix-up is choosing between because it sounds like a place word. It usually goes with two things.",
      "why": "The answer is by. A window is a place, so the blank needs a word that tells where. Since tells when, and between usually goes with two things.",
      "like": [
        "SK-GUM2-7-C04"
      ]
    },
    {
      "id": "SK-GUM2-7-S05",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Between appears in sentence 2 and in sentence 5. What makes just one of them wrong?",
      "choices": [
        {
          "text": "Two rows leave a gap for parents to walk through, yet a single wall leaves no gap.",
          "correct": true
        },
        {
          "text": "Between suits people who walk, so the parents may use it while the posters may not."
        },
        {
          "text": "Between can point at every spot in a room, so each of these sentences is properly written."
        },
        {
          "text": "Between shows a stretch of time in the first case, while it shows a spot in the second."
        }
      ],
      "clue": "Look at what follows between in each sentence.",
      "hints": [
        "Look at what follows between in each sentence.",
        "Count how many things each sentence has after between.",
        "Between does not tell when. Think about the other choices."
      ],
      "how": [
        "Sentence 2: between the wall. Sentence 5: between two long rows of tables.",
        "Between points to the middle of two things. Sentence 5 has two rows, and sentence 2 has one wall.",
        "The answer is \"Two rows leave a gap for parents to walk through, yet a single wall leaves no gap.\""
      ],
      "misconception": "A common mix-up is thinking a word is wrong every time. What follows it decides.",
      "why": "The answer is \"Two rows leave a gap for parents to walk through, yet a single wall leaves no gap.\" Between points to the middle of two things. Sentence 5 has two rows, and sentence 2 has only one wall.",
      "like": [
        "SK-GUM2-7-C05"
      ]
    },
    {
      "id": "SK-GUM2-7-S06",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Tap the two preposition mistakes hiding in sentences 2 to 6.",
      "targets": [
        "p5:1:2",
        "p5:1:3",
        "p5:2:1",
        "p5:2:2",
        "p5:2:3"
      ],
      "answer": [
        "p5:1:2",
        "p5:2:2"
      ],
      "pick": 2,
      "clue": "Find the preposition in each of sentences 2 to 6, and ask what each noun names.",
      "hints": [
        "Find the preposition in each of sentences 2 to 6, and ask what each noun names.",
        "Picture each sentence and ask whether the small word fits the words after it.",
        "The sentence about the cones makes sense. Think about the rest, including the ones that look fine."
      ],
      "how": [
        "Check each preposition one sentence at a time.",
        "Around the muddy track, between two orange cones and beside me all fit.",
        "The other two use a word that tells when with a place."
      ],
      "misconception": "A common mix-up is stopping at the first mistake. Check every sentence in the range.",
      "why": "The answers are \"Coach Rivera told everyone to line up during the goal.\" and \"The wind blew the ball until the fence, and a boy chased it.\" A goal and a fence are places, but during and until tell when. Sentences 3, 4 and 6 are correct.",
      "like": [
        "SK-GUM2-7-C06"
      ]
    },
    {
      "id": "SK-GUM2-7-S07",
      "type": "ebsr",
      "points": 2,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Part A comes first, and it sets up what you need for the second part.",
      "partA": {
        "prompt": "Why does the line about the water sound odd?",
        "choices": [
          {
            "text": "During is a word about time, yet the big cooler names a place the water came from.",
            "correct": true
          },
          {
            "text": "During is a word about place, yet the big cooler names a time the water came from."
          },
          {
            "text": "During is a word about speed, yet the big cooler names how fast the water was poured."
          },
          {
            "text": "During is a word about people, yet the big cooler names a group the kids were with."
          }
        ]
      },
      "partB": {
        "prompt": "Choose the rewrite that corrects the line about the water.",
        "choices": [
          {
            "text": "After practice, we drank cold water from a big cooler.",
            "correct": true
          },
          {
            "text": "After practice, we drank cold water since a big cooler."
          },
          {
            "text": "After practice, we drank cold water between a big cooler."
          },
          {
            "text": "After practice, we drank cold water during a big cooler."
          }
        ]
      },
      "clue": "Find the group that starts with during, and ask what kind of noun ends it.",
      "hints": [
        "Find the group that starts with during, and ask what kind of noun ends it.",
        "In Part B, read each sentence and picture the water and the cooler.",
        "Since tells when. Think about the other choices, and picture each one."
      ],
      "how": [
        "Part A: the group ends with the noun cooler, which names a place.",
        "Part B: the fix needs a preposition that fits water coming out of a cooler.",
        "The answers are \"During is a word about time, yet the big cooler names a place the water came from.\" and \"After practice, we drank cold water from a big cooler.\""
      ],
      "misconception": "A common mix-up is picking any preposition that sounds familiar. Check the noun that follows it.",
      "why": "Part A: \"During is a word about time, yet the big cooler names a place the water came from.\" Part B: \"After practice, we drank cold water from a big cooler.\" From fits water coming out of a cooler. Since, between and during do not.",
      "like": [
        "SK-GUM2-7-C07"
      ]
    },
    {
      "id": "SK-GUM2-7-S08",
      "type": "ms",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [],
      "prompt": "Select both choices where a preposition points to a time.",
      "pick": 2,
      "choices": [
        {
          "text": "Yuki feeds the chickens before sunrise.",
          "correct": true
        },
        {
          "text": "The skating rink opens at six on Fridays.",
          "correct": true
        },
        {
          "text": "The wooden ladder leans against the side of the garage wall."
        },
        {
          "text": "A kite got stuck in the tall maple tree beside the road."
        },
        {
          "text": "Mia hid the key under a flowerpot on the back steps."
        }
      ],
      "clue": "Find the preposition in each sentence. Ask what the noun that follows it names.",
      "hints": [
        "Find the preposition in each sentence. Ask what the noun that follows it names.",
        "Check every sentence, including the ones that look right. A moment and a spot lead to different answers.",
        "One choice has a long group of words. Be sure to check its last noun too."
      ],
      "how": [
        "Look at the noun after each preposition.",
        "Sunrise and six name times. The garage wall, the maple tree and a flowerpot name places.",
        "The answers are before sunrise and at six."
      ],
      "misconception": "A common mix-up is picking a sentence because it mentions a day of the week. The preposition itself has to tell when.",
      "why": "The answers are \"Yuki feeds the chickens before sunrise.\" and \"The skating rink opens at six on Fridays.\" Before and at tell when. Against, in and under tell where.",
      "like": [
        "SK-GUM2-7-C08"
      ]
    },
    {
      "id": "SK-GUM2-7-S09",
      "type": "mc",
      "points": 1,
      "dok": 1,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [],
      "prompt": "Which of these words is a preposition?",
      "stem": "A red kite floated above the busy beach.",
      "choices": [
        {
          "text": "above",
          "correct": true
        },
        {
          "text": "floated"
        },
        {
          "text": "red"
        },
        {
          "text": "kite"
        }
      ],
      "clue": "A preposition starts a group of words that ends with a noun. Find that group.",
      "hints": [
        "A preposition starts a group of words that ends with a noun. Find that group.",
        "The group in this sentence names a place. Look at the small word that starts it.",
        "Red describes the kite. Think about the other choices."
      ],
      "how": [
        "The group of words is above the busy beach.",
        "Above starts the group and tells where the kite floated.",
        "The answer is above."
      ],
      "misconception": "A common mix-up is picking the action word. Floated tells what the kite did, not where.",
      "why": "The answer is above. Above starts the group above the busy beach and tells where the kite floated. Floated is a verb, red describes the kite, and kite is a noun.",
      "like": [
        "SK-GUM2-7-C09"
      ]
    },
    {
      "id": "SK-GUM2-7-S10",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Dani wants to swap before for under in sentence 9. How would you respond?",
      "choices": [
        {
          "text": "Dark is a moment, so before already suits sentence 9.",
          "correct": true
        },
        {
          "text": "Dani is right, since going home is a trip, and every trip needs the word under."
        },
        {
          "text": "Dani is right, since under reads more smoothly than before in every draft."
        },
        {
          "text": "Dani is wrong since under is a word for water, and the sentence is about dry land."
        }
      ],
      "clue": "Think about what the last noun in sentence 9 names.",
      "hints": [
        "Think about what the last noun in sentence 9 names.",
        "Picture when the team walked home, and what before can show.",
        "Under is a real preposition. Think about the other choices."
      ],
      "how": [
        "Sentence 9 says walked home before dark.",
        "Dark names a moment, and before can point to a moment.",
        "The answer is \"Dark is a moment, so before already suits sentence 9.\""
      ],
      "misconception": "A common mix-up is thinking before only points to a spot. Before can also point to a moment.",
      "why": "The answer is \"Dark is a moment, so before already suits sentence 9.\" Under would point to a spot, and the sentence needs a moment.",
      "like": [
        "SK-GUM2-7-C10"
      ]
    },
    {
      "id": "SK-GUM2-7-S11",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Tap the pair of sentences between 3 and 7 where the preposition works.",
      "targets": [
        "p6:1:3",
        "p6:2:1",
        "p6:2:2",
        "p6:2:3",
        "p6:2:4"
      ],
      "answer": [
        "p6:1:3",
        "p6:2:2"
      ],
      "pick": 2,
      "clue": "Find the preposition in each of sentences 3 to 7. Ask what each one is supposed to show.",
      "hints": [
        "Find the preposition in each of sentences 3 to 7. Ask what each one is supposed to show.",
        "Picture each sentence. Check whether the noun that follows fits a where or a when idea.",
        "The sentence about the lap and the side makes no sense. Think about the rest."
      ],
      "how": [
        "Check each sentence one at a time.",
        "Sentence 3 puts feet in the water, and sentence 5 kicks across the shallow end. Both make sense.",
        "Sentences 4, 6 and 7 use during, until and between where they do not fit."
      ],
      "misconception": "A common mix-up is choosing a sentence because it sounds familiar. Picture what the preposition says.",
      "why": "The answers are \"We sat on the warm edge and kicked our feet in the water.\" and \"Next, I held a foam board and kicked across the shallow end.\" In the water and across the shallow end make sense. During the pool, until my side and between the ladder do not.",
      "like": [
        "SK-GUM2-7-C11"
      ]
    },
    {
      "id": "SK-GUM2-7-S12",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Pick the word that fits sentence 6.",
      "text": "Ms. Vega waited {0} my side as I swam my very first lap of the pool.",
      "slots": [
        {
          "options": [
            "at",
            "during",
            "under"
          ],
          "answer": 0
        }
      ],
      "clue": "Decide whether my side is a place or a time.",
      "hints": [
        "Decide whether my side is a place or a time.",
        "Picture Ms. Vega and the swimmer, and say each choice in the sentence.",
        "During tells when something happens. Look at the other choices."
      ],
      "how": [
        "The group ends with the noun side, which is a place.",
        "The blank needs a word that tells where Ms. Vega waited.",
        "The answer is at. During tells when, and under puts her below the swimmer."
      ],
      "misconception": "A common mix-up is picking during because the lap takes a while. The noun after it is a place.",
      "why": "The answer is at. My side is a place, so the blank needs a word that tells where. During tells when, and under does not fit a teacher standing next to a swimmer.",
      "like": [
        "SK-GUM2-7-C12"
      ]
    },
    {
      "id": "SK-GUM2-7-S13",
      "type": "dropdown",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [],
      "prompt": "Complete each gap with the word that suits it best.",
      "text": "The scouts hiked {0} the canyon, then slept {1} the stars.",
      "slots": [
        {
          "options": [
            "through",
            "until",
            "between"
          ],
          "answer": 0
        },
        {
          "options": [
            "under",
            "during",
            "between"
          ],
          "answer": 0
        }
      ],
      "clue": "Both gaps need a preposition. Decide what each noun names.",
      "hints": [
        "Both gaps need a preposition. Decide what each noun names.",
        "The first gap comes before canyon. The second gap comes before stars.",
        "During tells when. Look at the choices for the second gap."
      ],
      "how": [
        "The first gap tells where the scouts hiked. The second gap tells where they slept.",
        "Both nouns are places.",
        "The answers are through and under."
      ],
      "misconception": "A common mix-up is thinking one gap needs a time word. Both nouns here are places.",
      "why": "The answers are through and under. Through the canyon tells where the scouts hiked. Under the stars tells where they slept.",
      "like": [
        "SK-GUM2-7-C13"
      ]
    },
    {
      "id": "SK-GUM2-7-S14",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [],
      "prompt": "In one line, a small word and its noun do not match. Tap it.",
      "options": [
        "A cyclist pedaled up the winding street at dusk.",
        "The soccer team practiced after the sun went down.",
        "Ben hung his coat on the hook near the closet.",
        "We swam during the shallow end of the lake.",
        "A squirrel dashed across the yard to the tree."
      ],
      "answer": [
        3
      ],
      "pick": 1,
      "clue": "Find the preposition in each line. Ask whether the noun after it names a place or a time.",
      "hints": [
        "Find the preposition in each line. Ask whether the noun after it names a place or a time.",
        "Picture each line and check that the small word fits the words after it.",
        "The line about the practice names a time with a time word, and it fits. Think about the rest."
      ],
      "how": [
        "Look at the noun after each preposition.",
        "Street, the sun going down, the hook and the yard all fit their prepositions.",
        "The answer is \"We swam during the shallow end of the lake.\" A shallow end is a place, so the sentence should say in."
      ],
      "misconception": "A common mix-up is thinking during works anywhere. During tells when, so it needs a time.",
      "why": "The answer is \"We swam during the shallow end of the lake.\" A shallow end is a place, but during tells when. The sentence should say in the shallow end.",
      "like": [
        "SK-GUM2-7-C14"
      ]
    },
    {
      "id": "SK-GUM2-7-S15",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-frequently-occurring-prepositions"
      ],
      "passages": [],
      "prompt": "Mina claims every preposition tells a time. Which sentence proves her wrong?",
      "choices": [
        {
          "text": "A cat curled up beside the warm heater.",
          "correct": true
        },
        {
          "text": "Dad reads to us after supper every night."
        },
        {
          "text": "The parade starts before noon on Saturday."
        },
        {
          "text": "Class ends at three o'clock each afternoon."
        }
      ],
      "clue": "To prove a claim wrong, find an example that breaks it. Look at what each preposition tells.",
      "hints": [
        "To prove a claim wrong, find an example that breaks it. Look at what each preposition tells.",
        "In each sentence, ask whether the preposition tells a place or a time.",
        "The claim is about what prepositions tell. Think about the other choices."
      ],
      "how": [
        "Mina says every preposition tells a time. Look for one that tells where.",
        "After, before and at tell when in these sentences.",
        "The answer is \"A cat curled up beside the warm heater.\""
      ],
      "misconception": "A common mix-up is thinking prepositions only tell time. Some tell place.",
      "why": "The answer is \"A cat curled up beside the warm heater.\" Beside tells where, which proves Mina wrong. After, before and at tell when.",
      "like": [
        "SK-GUM2-7-C15"
      ]
    }
  ],
  addons: {
    "SK-GUM2-7-P1": {
      "hints": [
        "Picture where the milk needs to go to stay cold.",
        "Try each word in the sentence and picture the refrigerator.",
        "Across means from one side to the other. Think about the other choices."
      ],
      "how": [
        "The milk needs to go into a cold place.",
        "Try each word. Across, through and between do not fit one refrigerator.",
        "The answer is in."
      ],
      "misconception": "A common mix-up is choosing between because it sounds like a place word. Between usually goes with two things."
    },
    "SK-GUM2-7-P2": {
      "hints": [
        "A preposition starts a group of words that ends with a noun. Find that group.",
        "The group in this sentence tells where the kitten slept. Look at the small word that starts it.",
        "Warm describes the stove. Think about the other choices."
      ],
      "how": [
        "The group of words is beside the warm stove.",
        "Beside starts the group and tells where the kitten slept.",
        "The answer is beside."
      ],
      "misconception": "A common mix-up is picking the action word. Slept tells what the kitten did, not where."
    },
    "SK-GUM2-7-P3": {
      "hints": [
        "Is bedtime a place or a time?",
        "Try each choice in the sentence and picture it.",
        "Under and across tell where. Look at the other choices."
      ],
      "how": [
        "Bedtime is a time, so the blank needs a word that tells when.",
        "Under and across tell where, so they do not fit.",
        "The answer is before. Until would mean brushing for hours."
      ],
      "misconception": "A common mix-up is choosing until because it also tells when. It changes the meaning."
    },
    "SK-GUM2-7-P4": {
      "hints": [
        "Look at the noun after each preposition.",
        "Ask whether each noun is a place or a time.",
        "Use the noun at the end of one group to sort it first."
      ],
      "how": [
        "Look at the noun at the end of each group.",
        "Bridge, barn and river are places. Breakfast, storm and sunrise are times.",
        "Place each group where its noun belongs."
      ],
      "misconception": "A common mix-up is sorting by the first word. The noun at the end tells you which group it is."
    },
    "SK-GUM2-7-P5": {
      "hints": [
        "Picture each sentence.",
        "Does the small word before each noun tell a where or a when that makes sense?",
        "The sentence about the plane and the clouds makes sense. Think about the others."
      ],
      "how": [
        "Look at the noun after each preposition.",
        "The creek, the clouds, his two best friends and the movies all fit their prepositions.",
        "The answer is \"The fish swam during the bowl.\" A bowl is a place, but during tells when."
      ],
      "misconception": "A common mix-up is thinking any small word can come before a noun. It has to make sense with the noun."
    }
  },
  /* B7b:core:end */
  test: [
    { id: "SK-GUM2-7-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The cat climbed {0} the tall fence to get to the yard.",
      slots: [ { options: ["over", "during", "until"], answer: 0 } ],
      clue: "The blank needs a word that tells where the cat climbed. Picture the cat and the fence.",
      why: "The answer is over. Over tells where the cat climbed to get to the yard. During and until tell when, so they do not fit." },
    { id: "SK-GUM2-7-T2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word in this sentence is a preposition?",
      stem: "Ravi fed his goldfish before school.",
      choices: [
        { text: "before", correct: true },
        { text: "fed" },
        { text: "his" },
        { text: "goldfish" }
      ],
      clue: "A preposition comes before a noun and tells where or when. Find the word that tells when Ravi fed his fish.",
      why: "The answer is before. Before comes before the noun school and tells when Ravi fed his goldfish." },
    { id: "SK-GUM2-7-T3", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO prepositions in the sentence tell when something happens?",
      stem: "Before dinner, Lily ran across the yard and played with the dog until dark.",
      choices: [
        { text: "Before", correct: true },
        { text: "across" },
        { text: "until", correct: true },
        { text: "yard" },
        { text: "played" }
      ],
      clue: "Find the prepositions first. Then look at the noun after each one. Is it a time or a place?",
      why: "The answers are Before and until. Before dinner and until dark tell when. Across the yard tells where. Yard is a noun and played is a verb." },
    { id: "SK-GUM2-7-T4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence where the preposition does not make sense.",
      options: [
        "The sun set behind the mountains near our town.",
        "Rosa put a stamp on the envelope for her aunt.",
        "We slept through the noisy thunderstorm.",
        "The bus stopped under the corner to pick us up.",
        "A spider crawled up the wall."
      ],
      answer: [3], pick: 1,
      clue: "Picture each sentence. Does the small word make sense with the words after it?",
      why: "The answer is \"The bus stopped under the corner to pick us up.\" A bus cannot stop under a corner. The sentence should say at the corner." },
    { id: "SK-GUM2-7-T5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "{0} the game, the team rested {1} the shade of a big oak tree.",
      slots: [
        { options: ["After", "Across", "Under"], answer: 0 },
        { options: ["during", "in", "until"], answer: 1 }
      ],
      clue: "The first blank needs a word that tells when. The second blank needs a word that tells where.",
      why: "The answers are After and in. After the game tells when the team rested. In the shade tells where they rested." }
  ]
});

/* ---------- GUM2-8: commas ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa",
  title: "Commas in lists, dates, places and letters",
  teach: {
    big: "Commas keep words apart so they are easy to read: in lists, in dates, between a city and a state, and in letters.",
    points: [
      "Use commas to separate three or more things in a list: We packed apples, cheese, and crackers.",
      "In a date, put a comma between the day and the year: May 4, 2026. Do not put a comma between the month and the day.",
      "Put a comma between a city and its state: Columbus, Georgia. In a whole address, a comma also comes after the street: 12 Oak Lane, Macon, Georgia.",
      "In a letter, put a comma after the greeting and after the closing: Dear Sam, and Your friend,"
    ],
    words: [
      { term: "series", means: "a list of three or more things" },
      { term: "greeting", means: "the hello at the start of a letter, like Dear Sam," },
      { term: "closing", means: "the goodbye at the end of a letter, like Love, or Your friend," }
    ],
    example: {
      label: "Example",
      lines: ["July 9, 2026", "Dear Grandpa,", "Thank you for the trip to Augusta, Georgia. We saw swans, ducks, and geese at the lake.", "Love,", "Imani"],
      note: "Find the comma in the date, after the greeting, between the city and state, between the things in the list, and after the closing."
    },
    tip: "On the test, check the spots where these rules apply: lists, dates, a city and state, and letter greetings and closings. A comma in the wrong spot, like between a month and a day, is an error too."
  },
  learn: [
    {
      show: ["Our class grew beans peas and carrots."],
      ask: "Where do the commas go?",
      steps: [
        "Find the list. The class grew three things: beans and peas and carrots.",
        "Put a comma after each thing in the list that comes before and.",
        "Do not put a comma after the last thing in the list."
      ],
      answer: "Our class grew beans, peas, and carrots."
    },
    {
      show: ["My cousin lives at 8 Pine Street Dalton Georgia. She moved there on March 3 2019."],
      ask: "Where do the commas go?",
      steps: [
        "Find the address. Put a comma after the street and another between the city and state: 8 Pine Street, Dalton, Georgia.",
        "Find the date. Put a comma between the day and the year: March 3, 2019.",
        "Check that no comma sits between the month and the day."
      ],
      answer: "My cousin lives at 8 Pine Street, Dalton, Georgia. She moved there on March 3, 2019."
    },
    {
      show: ["Dear Uncle Tom", "Thank you for the sweater.", "Your niece", "Kim"],
      ask: "Where do the commas go?",
      steps: [
        "Find the greeting. It is the hello at the top of the letter: Dear Uncle Tom.",
        "Put a comma after the whole greeting. Then find the closing near the end: Your niece.",
        "Put a comma after the closing too. The name below it needs none."
      ],
      answer: "Dear Uncle Tom, and Your niece,"
    }
  ],
  parent: "Write a short thank-you note together. Let your child add the date, the greeting, the closing and a list of three things, and check each comma with you.",
  passages: [
    /* B7b:passages:start */
    {
      "id": "p1",
      "title": "A Letter from Camp",
      "byline": "A third grader's draft",
      "genre": "Student draft (letter)",
      "draft": true,
      "paragraphs": [
        [
          "(1) June 14 2026",
          "(2) Dear Grandma,"
        ],
        [
          "(3) I am having a wonderful time at a big summer camp in Dayton Ohio.",
          "(4) Every morning we eat pancakes, eggs, and toast with our cabin mates.",
          "(5) My cabin has two beds three shelves, and four hooks for towels.",
          "(6) We swim, paddle, and hike around the lake each day."
        ],
        [
          "(7) Please write back to me at 25 Birch Road, Provo, Utah.",
          "(8) The bus brings us home on August 2, 2026.",
          "(9) I miss you and Grandpa very much every day.",
          "(10) The food here is really great and there is always plenty.",
          "(11) My new friends are kind and funny and we play games."
        ],
        [
          "(12) Your granddaughter,",
          "(13) Zoe"
        ]
      ]
    },
    {
      "id": "p2",
      "title": "A Thank-You Note",
      "byline": "A third grader's draft",
      "genre": "Student draft (letter)",
      "draft": true,
      "paragraphs": [
        [
          "(1) May 20, 2026",
          "(2) Dear Ms. Okafor"
        ],
        [
          "(3) Thank you for visiting our class at Maple School in Tulsa, Oklahoma.",
          "(4) You told us about wolves, otters, and eagles.",
          "(5) We drew bears turtles, and owls in our science notebooks.",
          "(6) My favorite part was the soft gray fur."
        ],
        [
          "(7) Please send your reply to 18 Elm Street, Tulsa, Oklahoma.",
          "(8) Everyone in Room 12 says you are the best visitor.",
          "(9) We loved every minute of your talk with us.",
          "(10) The otters were my favorite animals.",
          "(11) We still draw them every day.",
          "(12) We hope you can come back next year.",
          "(13) That would make all of us very happy."
        ],
        [
          "(14) Your friend",
          "(15) Mateo"
        ]
      ]
    },
    {
      "id": "p3",
      "title": "A Letter to the Principal",
      "byline": "A third grader's draft",
      "genre": "Student draft (letter)",
      "draft": true,
      "paragraphs": [
        [
          "(1) March 3, 2026",
          "(2) Dear Principal Reyes,"
        ],
        [
          "(3) We need new swings, slides, and jump ropes.",
          "(4) Some of us live at 42 Ash Lane Reno, Nevada.",
          "(5) The new gear could arrive by June 1 2026.",
          "(6) We visited a park in Carson City, Nevada.",
          "(7) We would use balls, cones and, whistles after lunch."
        ],
        [
          "(8) Right now, our class has only one old slide and two flat balls to share.",
          "(9) Many kids wait in a long line at recess just to take a turn.",
          "(10) Thank you for reading our letter and thinking about our idea.",
          "(11) Please let us know what you decide about the playground."
        ],
        [
          "(12) Sincerely,",
          "(13) The students in Room 14"
        ]
      ]
    },
    {
      "id": "p4",
      "title": "A Letter About the Zoo",
      "byline": "A third grader's draft",
      "genre": "Student draft (letter)",
      "draft": true,
      "paragraphs": [
        [
          "(1) April 18 2026",
          "(2) Dear Uncle Ben,"
        ],
        [
          "(3) Our class rode a long bus to the zoo in Fresno California.",
          "(4) We saw monkeys, parrots, and snakes in the jungle house.",
          "(5) I bought a map a hat, and a water bottle at the gift shop.",
          "(6) My friend Omar fed a goat near the gate."
        ],
        [
          "(7) Please send your next letter to 77 Cedar Court, Salina, Kansas.",
          "(8) Our teacher says we may visit again soon.",
          "(9) I hope you can come with us next time too.",
          "(10) The giraffes were my favorite animals.",
          "(11) They ate leaves from the tall trees.",
          "(12) The baby elephant was tiny and cute."
        ],
        [
          "(13) Your nephew,",
          "(14) Eli"
        ]
      ]
    },
    {
      "id": "p5",
      "title": "A Note to the Firefighter",
      "byline": "A third grader's draft",
      "genre": "Student draft (letter)",
      "draft": true,
      "paragraphs": [
        [
          "(1) June 2, 2026",
          "(2) Dear Captain Lopez,"
        ],
        [
          "(3) The kids loved climbing into the big red fire truck in Missoula Montana.",
          "(4) We tried on helmets, boots, and gloves in the parking lot.",
          "(5) He taught us how to stay safe at home, in the car, and outside.",
          "(6) The kids made a poster with stickers crayons, and markers."
        ],
        [
          "(7) Please mail your next note to 6 Hill Road, Billings, Montana.",
          "(8) Everyone in Room 9 wants to be a firefighter.",
          "(9) We hope you can come and visit our school again soon.",
          "(10) The fire truck was louder than I ever imagined.",
          "(11) The siren was the loudest sound I ever heard."
        ],
        [
          "(12) Yours truly",
          "(13) Rin"
        ]
      ]
    },
    {
      "id": "p6",
      "title": "A Letter to the Mayor",
      "byline": "A third grader's draft",
      "genre": "Student draft (letter)",
      "draft": true,
      "paragraphs": [
        [
          "(1) October 5, 2026",
          "(2) Dear Mayor Kim,"
        ],
        [
          "(3) Riders need bike racks benches, and bins.",
          "(4) Our school stands at 90 Pond Road, Albany, New York.",
          "(5) Our benches will be ready for use by May 1 2027.",
          "(6) Our museum trip was in Syracuse New York.",
          "(7) Kids can sit, rest, and talk on them for hours."
        ],
        [
          "(8) Right now, riders lock their bikes to the school fence and the old pole.",
          "(9) Many families walk past the park each morning without a place to sit and rest.",
          "(10) We are very grateful that you took time to read this letter.",
          "(11) Please tell us what you decide about the park."
        ],
        [
          "(12) Respectfully,",
          "(13) The students in Room 6"
        ]
      ]
    }
    /* B7b:passages:end */
  ],
  practice: [
    { id: "SK-GUM2-8-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the date that is written correctly.",
      text: "We moved into our new house on {0}.",
      slots: [ { options: ["August 15, 2025", "August, 15 2025", "August 15 2025"], answer: 0 } ],
      clue: "Where does the comma go in a date? Think of the date example in the lesson.",
      why: "The answer is August 15, 2025. The comma goes between the day (15) and the year (2025). There is no comma between the month and the day." },
    { id: "SK-GUM2-8-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses commas correctly?",
      choices: [
        { text: "Dad bought milk, bread, and eggs at the store.", correct: true },
        { text: "Dad bought milk bread, and eggs at the store." },
        { text: "Dad bought, milk, bread, and eggs at the store." },
        { text: "Dad bought milk, bread and, eggs at the store." }
      ],
      clue: "Find the list of things Dad bought. Commas go between the things in the list, not before the list starts.",
      why: "The answer is \"Dad bought milk, bread, and eggs at the store.\" The commas separate the three things in the list. No comma comes after bought or after and." },
    { id: "SK-GUM2-8-P3", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Here are the lines of a letter. Select the line that has a comma error.",
      options: [
        "October 2, 2026",
        "Dear Coach Hill",
        "Thank you for teaching us to kick, pass, and dribble.",
        "Your player,",
        "Mateo"
      ],
      answer: [1], pick: 1,
      clue: "Check the date, the list, the greeting and the closing. Which part of a letter always ends with a comma?",
      why: "The answer is \"Dear Coach Hill\". The greeting of a letter needs a comma after it: Dear Coach Hill," },
    { id: "SK-GUM2-8-P4", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Our team flew to a tournament in {0}.",
      slots: [ { options: ["Orlando Florida", "Orlando, Florida", "Orlando. Florida"], answer: 1 } ],
      clue: "This is a city and a state. What mark goes between them?",
      why: "The answer is Orlando, Florida. A comma goes between the name of a city and the name of its state." },
    { id: "SK-GUM2-8-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Why does each comma belong? Match each example to its comma rule.",
      cols: ["List", "Date", "City and state", "Letter"],
      rows: [
        { text: "pens, paper, and glue", answer: 0 },
        { text: "April 9, 2026", answer: 1 },
        { text: "Rome, Georgia", answer: 2 },
        { text: "Dear Aunt Rosa,", answer: 3 },
        { text: "June 1, 2025", answer: 1 },
        { text: "Sincerely,", answer: 3 }
      ],
      clue: "Look at what the comma separates: things in a list, a day and a year, a city and a state, or the words that start or end a letter.",
      why: "Pens, paper, and glue is a list. April 9, 2026 and June 1, 2025 are dates. Rome, Georgia is a city and state. Dear Aunt Rosa, is a letter greeting and Sincerely, is a letter closing." }
  ],
  /* B7b:core:start */
  /* ---------- Expansion 2026-10-22, batch B7b (GUM Reinforce, second half) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test.
     Author log: docs/expansion-2026-10-22/batches/B7b-author-log.md. NOT ACCEPTED: needs independent review. */
  core: {
    "rev": "1",
    "sets": [
      {
        "title": "Set 1",
        "items": [
          {
            "ref": "SK-GUM2-8-P3"
          },
          {
            "ref": "SK-GUM2-8-P5"
          },
          {
            "id": "SK-GUM2-8-C03",
            "type": "mc",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Line 1 has a comma mistake. What is the mistake?",
            "choices": [
              {
                "text": "A comma is missing after the day, so it should read June 14, 2026.",
                "correct": true
              },
              {
                "text": "A comma is missing after the month, so it should read June, 14 2026."
              },
              {
                "text": "Two commas are needed, one after June and one after 14, so it should read June, 14, 2026."
              },
              {
                "text": "The date is correct, but the line should finish with a period after the year."
              }
            ],
            "clue": "A date has three parts: a month, a day and a year. Find them in line 1.",
            "hints": [
              "A date has three parts: a month, a day and a year. Find them in line 1.",
              "Ask which two parts a comma should keep apart.",
              "A date is not a full sentence, so it does not end with a period. Think about the other choices."
            ],
            "how": [
              "Line 1 has the month June, the day 14 and the year 2026.",
              "A date needs one comma, and it keeps the day and the year apart.",
              "The answer is \"A comma is missing after the day, so it should read June 14, 2026.\""
            ],
            "misconception": "A common mix-up is putting the comma right after the month. The comma goes after the day.",
            "why": "The answer is \"A comma is missing after the day, so it should read June 14, 2026.\" A date has one comma, between the day and the year. A comma after the month, or two commas, do not match the rule.",
            "like": [
              "SK-GUM2-8-S03"
            ]
          },
          {
            "id": "SK-GUM2-8-C04",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Which version of the place name is right for line 3?",
            "text": "I am having a wonderful time at a big summer camp in {0}.",
            "slots": [
              {
                "options": [
                  "Dayton, Ohio",
                  "Dayton Ohio",
                  "Dayton. Ohio"
                ],
                "answer": 0
              }
            ],
            "clue": "Find the name of the city and the name of the state in line 3.",
            "hints": [
              "Find the name of the city and the name of the state in line 3.",
              "Decide what mark, if any, belongs between the city and the state.",
              "A period ends a sentence. Think about the other choices."
            ],
            "how": [
              "Dayton is the city, and Ohio is the state.",
              "A comma goes between the name of a city and the name of its state.",
              "The answer is Dayton, Ohio."
            ],
            "misconception": "A common mix-up is leaving out the comma because the two names are said together. The comma keeps the city and the state apart.",
            "why": "The answer is Dayton, Ohio. A comma goes between a city and its state. A period would end the sentence too soon, and no mark makes the names run together.",
            "like": [
              "SK-GUM2-8-S04"
            ]
          },
          {
            "id": "SK-GUM2-8-C05",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Lines 4 and 5 both list three things, but only one of them needs a repair. Why?",
            "choices": [
              {
                "text": "Line 4 has a comma after pancakes and eggs, while line 5 has none after beds.",
                "correct": true
              },
              {
                "text": "Line 5 lists furniture, and furniture needs no commas, unlike food."
              },
              {
                "text": "Line 4 is the shorter line, so it needs commas, while a longer one can skip them."
              },
              {
                "text": "Both lines are fine, because a list may leave out any comma it likes."
              }
            ],
            "clue": "Count the things named in each of lines 4 and 5.",
            "hints": [
              "Count the things named in each of lines 4 and 5.",
              "Look at what comes between the things in each line.",
              "What the things are does not decide the commas. Think about the other choices."
            ],
            "how": [
              "Line 4: pancakes, eggs, and toast. Line 5: two beds three shelves, and four hooks.",
              "A list needs a comma after each thing that comes before and. Line 5 is missing the first one.",
              "The answer is \"Line 4 has a comma after pancakes and eggs, while line 5 has none after beds.\""
            ],
            "misconception": "A common mix-up is thinking commas depend on what is listed. A list needs the same commas for food or for furniture.",
            "why": "The answer is \"Line 4 has a comma after pancakes and eggs, while line 5 has none after beds.\" Both lines are lists of three, and each thing needs a comma after it until the last one.",
            "like": [
              "SK-GUM2-8-S05"
            ]
          }
        ]
      },
      {
        "title": "Set 2",
        "items": [
          {
            "id": "SK-GUM2-8-C06",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Two lines from 2 through 6 have a comma mistake. Select them.",
            "targets": [
              "p2:1:2",
              "p2:2:1",
              "p2:2:2",
              "p2:2:3",
              "p2:2:4"
            ],
            "answer": [
              "p2:1:2",
              "p2:2:3"
            ],
            "pick": 2,
            "clue": "Check each of lines 2 through 6 for a greeting, a list, or a place.",
            "hints": [
              "Check each of lines 2 through 6 for a greeting, a list, or a place.",
              "A greeting ends with a comma, and the things in a list are kept apart with commas.",
              "The line about the soft fur needs no commas. Think about the rest."
            ],
            "how": [
              "Check each line one at a time.",
              "Line 3 has a comma between Tulsa and Oklahoma. Line 4 has commas between the animals. Line 6 needs none.",
              "Line 2 has no comma after the greeting, and line 5 has no comma between bears and turtles."
            ],
            "misconception": "A common mix-up is stopping at the first mistake. Check every line in the range.",
            "why": "The answers are \"Dear Ms. Okafor\" and \"We drew bears turtles, and owls in our science notebooks.\" A greeting needs a comma after it, and a list needs a comma after each thing before and. Lines 3, 4 and 6 are correct.",
            "like": [
              "SK-GUM2-8-S06"
            ]
          },
          {
            "id": "SK-GUM2-8-C07",
            "type": "ebsr",
            "points": 2,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Do Part A before you start Part B.",
            "partA": {
              "prompt": "What is wrong with line 14?",
              "choices": [
                {
                  "text": "Line 14 has no comma after friend, and a closing always ends with a comma.",
                  "correct": true
                },
                {
                  "text": "Line 14 should end with a period, since a closing finishes off the entire letter."
                },
                {
                  "text": "Line 14 needs a comma after Your, since a closing pauses after its first word."
                },
                {
                  "text": "Line 14 needs two commas, one after Your and one after friend, as a closing has two words."
                }
              ]
            },
            "partB": {
              "prompt": "Pick the version that repairs line 14.",
              "choices": [
                {
                  "text": "Your friend,",
                  "correct": true
                },
                {
                  "text": "Your, friend"
                },
                {
                  "text": "Your friend."
                },
                {
                  "text": "Your, friend,"
                }
              ]
            },
            "clue": "Look at how the last lines of a letter are written, the closing and then the name.",
            "hints": [
              "Look at how the last lines of a letter are written, the closing and then the name.",
              "In Part B, compare each version with the closings in the lesson.",
              "A period ends a sentence, and a closing is not a sentence. Think about the other versions."
            ],
            "how": [
              "Part A: the closing in line 14 has no mark after friend.",
              "Part B: the repaired closing has one comma at the end.",
              "The answers are \"Line 14 has no comma after friend, and a closing always ends with a comma.\" and \"Your friend,\""
            ],
            "misconception": "A common mix-up is adding a comma after Your. The comma goes at the end of the closing.",
            "why": "Part A: \"Line 14 has no comma after friend, and a closing always ends with a comma.\" Part B: \"Your friend,\" The comma goes after the whole closing, not after Your.",
            "like": [
              "SK-GUM2-8-S07"
            ]
          },
          {
            "id": "SK-GUM2-8-C08",
            "type": "ms",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [],
            "prompt": "Which TWO sentences have commas in all the right places?",
            "pick": 2,
            "choices": [
              {
                "text": "The fair opens on July 4, 2026.",
                "correct": true
              },
              {
                "text": "My aunt moved to Mesa, Arizona.",
                "correct": true
              },
              {
                "text": "Mom bought plums, pears and, grapes at the market."
              },
              {
                "text": "The play starts on May, 9 2026 at the school."
              },
              {
                "text": "Our principal, read us a funny story after lunch."
              }
            ],
            "clue": "Look at what each comma separates. Ask whether it belongs there.",
            "hints": [
              "Look at what each comma separates. Ask whether it belongs there.",
              "Check all five choices, including the ones that look right at first glance. A comma in the wrong spot is a mistake too.",
              "Each choice has at least one comma. Check where each one sits."
            ],
            "how": [
              "Check where each comma sits.",
              "July 4, 2026 has its comma between the day and the year. Mesa, Arizona has its comma between the city and the state.",
              "The other three have commas after and, after May, or after the principal."
            ],
            "misconception": "A common mix-up is choosing a sentence because it has a comma in it. The comma has to be in the right place.",
            "why": "The answers are \"The fair opens on July 4, 2026.\" and \"My aunt moved to Mesa, Arizona.\" The date and the city and state each have their comma in the right place. The commas after and, after May and after principal do not belong.",
            "like": [
              "SK-GUM2-8-S08"
            ]
          },
          {
            "id": "SK-GUM2-8-C09",
            "type": "mc",
            "points": 1,
            "dok": 1,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [],
            "prompt": "Where does the missing comma go?",
            "stem": "The class trip is on May 21 2026.",
            "choices": [
              {
                "text": "after 21",
                "correct": true
              },
              {
                "text": "after May"
              },
              {
                "text": "after trip"
              },
              {
                "text": "after 2026"
              }
            ],
            "clue": "Find the month, the day and the year in the sentence.",
            "hints": [
              "Find the month, the day and the year in the sentence.",
              "A comma in a date goes between two of its parts.",
              "A comma does not belong after the year at the end of the sentence. Think about the other choices."
            ],
            "how": [
              "The date is May 21 2026.",
              "The comma goes between the day and the year.",
              "The answer is after 21."
            ],
            "misconception": "A common mix-up is putting the comma after the month. The comma goes after the day.",
            "why": "The answer is after 21. A date needs a comma between the day and the year: May 21, 2026. A comma after May, trip or 2026 does not follow the rule.",
            "like": [
              "SK-GUM2-8-S09"
            ]
          },
          {
            "id": "SK-GUM2-8-C10",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Kai crosses out the commas in line 7, saying an address is just one thing. Which reply is best?",
            "choices": [
              {
                "text": "Line 7 is correct, because commas keep the parts of an address apart.",
                "correct": true
              },
              {
                "text": "Kai is right, since an address names a single place, and one place never needs a comma."
              },
              {
                "text": "Line 7 needs only one comma, since only the last two parts are kept apart."
              },
              {
                "text": "Kai is right, because the comma after the street should be a period."
              }
            ],
            "clue": "Look at line 7 and think about the parts an address has.",
            "hints": [
              "Look at line 7 and think about the parts an address has.",
              "Ask what job a comma does inside an address.",
              "An address names one place, yet it is still made of parts. Think about the other choices."
            ],
            "how": [
              "Line 7 says 18 Elm Street, Tulsa, Oklahoma.",
              "Each comma keeps one part of the address apart from the next.",
              "The answer is \"Line 7 is correct, because commas keep the parts of an address apart.\""
            ],
            "misconception": "A common mix-up is thinking an address is one piece of information. It has parts, and commas keep them apart.",
            "why": "The answer is \"Line 7 is correct, because commas keep the parts of an address apart.\" The commas in line 7 are in the right places, so Kai is wrong.",
            "like": [
              "SK-GUM2-8-S10"
            ]
          }
        ]
      },
      {
        "title": "Set 3",
        "items": [
          {
            "id": "SK-GUM2-8-C11",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Two lines from 3 to 7 have commas in all the right places. Select them.",
            "targets": [
              "p3:2:1",
              "p3:2:2",
              "p3:2:3",
              "p3:2:4",
              "p3:2:5"
            ],
            "answer": [
              "p3:2:1",
              "p3:2:4"
            ],
            "pick": 2,
            "clue": "Check each of lines 3 to 7 for a list, a date, a place or an address.",
            "hints": [
              "Check each of lines 3 to 7 for a list, a date, a place or an address.",
              "In a full address, commas separate the parts of the address.",
              "Check each line for a missing comma and for a comma that does not belong."
            ],
            "how": [
              "Check each line one at a time.",
              "Line 3 has commas between the three things, and line 6 has a comma between the city and the state.",
              "Lines 4 and 5 are missing commas, and line 7 has a comma after and."
            ],
            "misconception": "A common mix-up is choosing a line because it has a lot of commas. They all have to be in the right places.",
            "why": "The answers are \"We need new swings, slides, and jump ropes.\" and \"We visited a park in Carson City, Nevada.\" The list and the city and state have their commas in the right places. Line 4 is missing a comma after the street, line 5 is missing the date comma, and line 7 has a comma after and.",
            "like": [
              "SK-GUM2-8-S11"
            ]
          },
          {
            "id": "SK-GUM2-8-C12",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Which date fits line 5?",
            "text": "The new gear could arrive by {0}.",
            "slots": [
              {
                "options": [
                  "June 1, 2026",
                  "June, 1 2026",
                  "June 1 2026"
                ],
                "answer": 0
              }
            ],
            "clue": "Find the month, the day and the year in line 5.",
            "hints": [
              "Find the month, the day and the year in line 5.",
              "Decide which two parts of the date a comma should keep apart.",
              "The month and the day belong together. Look at the other choices."
            ],
            "how": [
              "The date is June 1 2026, with a month, a day and a year.",
              "The comma goes between the day and the year.",
              "The answer is June 1, 2026."
            ],
            "misconception": "A common mix-up is leaving the comma out because the date is short. A date needs one comma.",
            "why": "The answer is June 1, 2026. A comma goes between the day and the year. A comma after June splits the month from the day, and no comma leaves the date without its mark.",
            "like": [
              "SK-GUM2-8-S12"
            ]
          },
          {
            "id": "SK-GUM2-8-C13",
            "type": "dropdown",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [],
            "prompt": "Choose the correct writing for each blank.",
            "text": "Our cousins moved to {0}. They arrived on {1}.",
            "slots": [
              {
                "options": [
                  "Tampa, Florida",
                  "Tampa Florida",
                  "Tampa. Florida"
                ],
                "answer": 0
              },
              {
                "options": [
                  "March 8, 2025",
                  "March, 8 2025",
                  "March 8 2025"
                ],
                "answer": 0
              }
            ],
            "clue": "The two blanks need different commas. Decide what each blank names.",
            "hints": [
              "The two blanks need different commas. Decide what each blank names.",
              "The first blank names a place. The second blank names a day.",
              "A comma does not go between a month and its day. Look at the choices for the second blank."
            ],
            "how": [
              "The first blank has a city and a state. The second blank has a month, a day and a year.",
              "The city and the state need a comma between them. The date needs a comma between the day and the year.",
              "The answers are Tampa, Florida and March 8, 2025."
            ],
            "misconception": "A common mix-up is using the comma in the same spot twice. A place and a date put their commas in different spots.",
            "why": "The answers are Tampa, Florida and March 8, 2025. The first comma separates a city and a state. The second comma separates a day and a year.",
            "like": [
              "SK-GUM2-8-S13"
            ]
          },
          {
            "id": "SK-GUM2-8-C14",
            "type": "hottext",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [],
            "prompt": "Which sentence has a misplaced comma?",
            "options": [
              "We planted tulips, daisies, and roses in May.",
              "The concert is on April 12, 2027.",
              "My grandparents live in Salem, Oregon.",
              "The coach, handed out water bottles.",
              "Send the package to 9 Lake Drive, Boise, Idaho."
            ],
            "answer": [
              3
            ],
            "pick": 1,
            "clue": "Look at each comma and ask what it separates.",
            "hints": [
              "Look at each comma and ask what it separates.",
              "A comma can separate things in a list, parts of a date, or parts of an address.",
              "The sentence about the concert has its comma in the right place. Think about the rest."
            ],
            "how": [
              "Look at what each comma separates.",
              "The tulips, the concert date, Salem, Oregon and the address all have commas that separate listed things or parts of a date or place.",
              "The answer is \"The coach, handed out water bottles.\" The comma separates a person from what the person did."
            ],
            "misconception": "A common mix-up is putting a comma wherever the voice pauses. A comma needs a rule behind it.",
            "why": "The answer is \"The coach, handed out water bottles.\" The comma does not separate a list, a date, a place or a letter part. The other sentences use their commas for those jobs.",
            "like": [
              "SK-GUM2-8-S14"
            ]
          },
          {
            "id": "SK-GUM2-8-C15",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
            ],
            "passages": [],
            "prompt": "Lee says, \"Commas belong only in lists.\" Pick the sentence that proves Lee wrong.",
            "choices": [
              {
                "text": "The party is on June 9, 2026.",
                "correct": true
              },
              {
                "text": "We bought apples, pears, and plums."
              },
              {
                "text": "She packed socks, shoes, and hats."
              },
              {
                "text": "He has a bat, a ball, and a glove."
              }
            ],
            "clue": "To test a statement, look for an example that breaks it. Look at what each comma separates.",
            "hints": [
              "To test a statement, look for an example that breaks it. Look at what each comma separates.",
              "In each sentence, ask whether the commas separate a list or something else.",
              "The claim is about what commas do. Think about the other choices."
            ],
            "how": [
              "Lee says commas are only for lists. Look for a comma that does something else.",
              "The commas in the other three sentences separate things in a list.",
              "The answer is \"The party is on June 9, 2026.\""
            ],
            "misconception": "A common mix-up is thinking commas have only one job. They also separate dates, places, greetings and closings.",
            "why": "The answer is \"The party is on June 9, 2026.\" The comma separates the day and the year, which is not a list. That proves Lee wrong. The other sentences each have a list.",
            "like": [
              "SK-GUM2-8-S15"
            ]
          }
        ]
      }
    ]
  },
  similar: [
    {
      "id": "SK-GUM2-8-S01",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [],
      "prompt": "Which line in this note has a comma mistake?",
      "options": [
        "Hello Nana,",
        "Your gifts were books, games, and puzzles.",
        "March 15 2027",
        "With love,",
        "Priya"
      ],
      "answer": [
        2
      ],
      "pick": 1,
      "clue": "Check the greeting, the list, the date and the closing.",
      "hints": [
        "Check the greeting, the list, the date and the closing.",
        "Say what each comma in the lines is separating.",
        "The closing at the bottom is written correctly. Think about the rest."
      ],
      "how": [
        "Look at each line and ask which rule it follows.",
        "The greeting, the list and the closing all have their commas.",
        "The answer is \"March 15 2027\". The date needs a comma between the day and the year: March 15, 2027."
      ],
      "misconception": "A common mix-up is thinking a short line cannot have a mistake. Check every line.",
      "why": "The answer is \"March 15 2027\". A date needs a comma between the day and the year: March 15, 2027. The other lines have the commas they need.",
      "like": [
        "SK-GUM2-8-P3"
      ]
    },
    {
      "id": "SK-GUM2-8-S02",
      "type": "match",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [],
      "prompt": "What does each comma do? Sort every example.",
      "cols": [
        "Things in a list",
        "Day and year",
        "City and state",
        "Greeting or closing"
      ],
      "rows": [
        {
          "text": "hats, gloves, and boots",
          "answer": 0
        },
        {
          "text": "May 6, 2027",
          "answer": 1
        },
        {
          "text": "Laramie, Wyoming",
          "answer": 2
        },
        {
          "text": "Dear Mr. Chen,",
          "answer": 3
        },
        {
          "text": "January 14, 2025",
          "answer": 1
        },
        {
          "text": "Best wishes,",
          "answer": 3
        }
      ],
      "clue": "Look at what the comma sits between in each example.",
      "hints": [
        "Look at what the comma sits between in each example.",
        "Look for a month with numbers, two place names, or the start or end of a letter.",
        "Three or more things in a row make a list. Sort that one first."
      ],
      "how": [
        "Read the words just before and just after each comma.",
        "Hats, gloves and boots are things in a list. May 6, 2027 and January 14, 2025 are dates. Laramie, Wyoming is a city and state.",
        "Dear Mr. Chen, and Best wishes, are parts of a letter."
      ],
      "misconception": "A common mix-up is sorting by how many commas are in the example. What the comma separates decides the group.",
      "why": "Hats, gloves, and boots is a list. May 6, 2027 and January 14, 2025 are dates. Laramie, Wyoming is a city and state. Dear Mr. Chen, and Best wishes, are a greeting and a closing.",
      "like": [
        "SK-GUM2-8-P5"
      ]
    },
    {
      "id": "SK-GUM2-8-S03",
      "type": "mc",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "How should line 1 be fixed?",
      "choices": [
        {
          "text": "Insert a comma beside the 18 to get April 18, 2026.",
          "correct": true
        },
        {
          "text": "Insert a comma beside the April to get April, 18 2026."
        },
        {
          "text": "Insert a period beside the 18 to get April 18. 2026."
        },
        {
          "text": "Insert a comma beside the 2026 to get April 18 2026,."
        }
      ],
      "clue": "Find the month, the day and the year in line 1.",
      "hints": [
        "Find the month, the day and the year in line 1.",
        "Ask which two parts a mark should keep apart.",
        "A date is not a full sentence. Think about the other choices."
      ],
      "how": [
        "Line 1 has the month April, the day 18 and the year 2026.",
        "Only one comma is needed, and it falls between the day and the year.",
        "The answer is \"Insert a comma beside the 18 to get April 18, 2026.\""
      ],
      "misconception": "A common mix-up is thinking a date needs a mark at its end. The comma goes inside the date.",
      "why": "The answer is \"Insert a comma beside the 18 to get April 18, 2026.\" A date has one comma, between the day and the year.",
      "like": [
        "SK-GUM2-8-C03"
      ]
    },
    {
      "id": "SK-GUM2-8-S04",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Choose the city and state as they should appear in line 3.",
      "text": "Our class rode a long bus to the zoo in {0}.",
      "slots": [
        {
          "options": [
            "Fresno, California",
            "Fresno California",
            "Fresno. California"
          ],
          "answer": 0
        }
      ],
      "clue": "Find the city and the state in line 3.",
      "hints": [
        "Find the city and the state in line 3.",
        "Decide what mark, if any, belongs between the two names.",
        "The names of places are not joined by a period. Think about the other choices."
      ],
      "how": [
        "Fresno is the city, and California is the state.",
        "Between a city and its state, a comma is the mark that goes.",
        "The answer is Fresno, California."
      ],
      "misconception": "A common mix-up is leaving the comma out because the two names are said together. The comma keeps them apart.",
      "why": "The answer is Fresno, California. A comma goes between a city and its state. A period would end the sentence too soon, and no mark makes the names run together.",
      "like": [
        "SK-GUM2-8-C04"
      ]
    },
    {
      "id": "SK-GUM2-8-S05",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "One of these two zoo lines breaks a rule for a series. What explains that?",
      "choices": [
        {
          "text": "The animal line separates its items, but map and hat stick together.",
          "correct": true
        },
        {
          "text": "The shop line works as written, since and already separates its things."
        },
        {
          "text": "Zoo creatures get commas, yet store goods get none, since goods are lifeless."
        },
        {
          "text": "Line 5 is the lengthier line, so one missing comma there hardly counts."
        }
      ],
      "clue": "Name the things listed in each of the two zoo lines.",
      "hints": [
        "Name the things listed in each of the two zoo lines.",
        "Look at what comes between the things in each of the two lines.",
        "A lengthier line does not earn an exception. Think about the other choices."
      ],
      "how": [
        "Line 4: monkeys, parrots, and snakes. Line 5: a map a hat, and a water bottle.",
        "A list needs a comma after each thing before and. Line 5 is missing the first one.",
        "The answer is \"The animal line separates its items, but map and hat stick together.\""
      ],
      "misconception": "A common mix-up is thinking commas depend on what is listed. A list needs the same commas for animals or for objects.",
      "why": "The answer is \"The animal line separates its items, but map and hat stick together.\" Animals and objects are punctuated the same way in a list.",
      "like": [
        "SK-GUM2-8-C05"
      ]
    },
    {
      "id": "SK-GUM2-8-S06",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Choose the two lines from 2 to 6 of this note that need comma repairs.",
      "targets": [
        "p5:1:2",
        "p5:2:1",
        "p5:2:2",
        "p5:2:3",
        "p5:2:4"
      ],
      "answer": [
        "p5:2:1",
        "p5:2:4"
      ],
      "pick": 2,
      "clue": "Check each of lines 2 to 6 for a greeting, a list, or a place.",
      "hints": [
        "Check each of lines 2 to 6 for a greeting, a list, or a place.",
        "A greeting ends with a comma, and a city and a state are kept apart with a comma.",
        "The greeting at the top of this letter is written correctly. Think about the rest."
      ],
      "how": [
        "Take lines 2 to 6 in order and check the commas.",
        "Line 2 has its comma, and lines 4 and 5 have commas between their listed things.",
        "Line 3 has no comma between Missoula and Montana, and line 6 has no comma between stickers and crayons."
      ],
      "misconception": "A common mix-up is trusting a line because it is long. Check every comma and every place that needs one.",
      "why": "The answers are \"The kids loved climbing into the big red fire truck in Missoula Montana.\" and \"The kids made a poster with stickers crayons, and markers.\" A city and a state need a comma between them, and a list needs a comma after each thing before and. Lines 2, 4 and 5 are correct.",
      "like": [
        "SK-GUM2-8-C06"
      ]
    },
    {
      "id": "SK-GUM2-8-S07",
      "type": "ebsr",
      "points": 2,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Work through both halves of this question.",
      "partA": {
        "prompt": "Why does line 12 need fixing?",
        "choices": [
          {
            "text": "Yours truly stands alone with no mark, yet a closing should end with a comma.",
            "correct": true
          },
          {
            "text": "Yours truly stands alone with no mark, yet a closing should end with a dash."
          },
          {
            "text": "A comma follows Yours in line 12, yet a closing should have none inside it."
          },
          {
            "text": "Line 12 is a full sentence, yet it has no period at the end to finish the thought."
          }
        ]
      },
      "partB": {
        "prompt": "Choose the rewrite that corrects line 12.",
        "choices": [
          {
            "text": "Yours truly,",
            "correct": true
          },
          {
            "text": "Yours truly-"
          },
          {
            "text": "Yours, truly"
          },
          {
            "text": "Yours truly."
          }
        ]
      },
      "clue": "Look at the closing in line 12 and at what comes right after it.",
      "hints": [
        "Look at the closing in line 12 and at what comes right after it.",
        "In Part B, read each rewrite and look at where its mark sits.",
        "A dash is not a comma. Think about the other rewrites."
      ],
      "how": [
        "Part A: line 12 has no mark after truly.",
        "Part B: the rewrite needs one comma at the end of the closing.",
        "The answers are \"Yours truly stands alone with no mark, yet a closing should end with a comma.\" and \"Yours truly,\""
      ],
      "misconception": "A common mix-up is putting a mark inside the closing instead of after it. The comma goes at the end.",
      "why": "Part A: \"Yours truly stands alone with no mark, yet a closing should end with a comma.\" Part B: \"Yours truly,\" The comma goes after the whole closing.",
      "like": [
        "SK-GUM2-8-C07"
      ]
    },
    {
      "id": "SK-GUM2-8-S08",
      "type": "ms",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [],
      "prompt": "Pick the two sentences where every comma is placed well.",
      "pick": 2,
      "choices": [
        {
          "text": "Dad packed pretzels, grapes, and juice.",
          "correct": true
        },
        {
          "text": "The recital is on November 3, 2026.",
          "correct": true
        },
        {
          "text": "We drove to Helena Montana last summer."
        },
        {
          "text": "The kitten, jumped onto the shelf above the sink."
        },
        {
          "text": "Her birthday is on August 5 2026 at noon."
        }
      ],
      "clue": "Ask what each comma separates and whether it belongs there.",
      "hints": [
        "Ask what each comma separates and whether it belongs there.",
        "Check every sentence, including the ones that look right. A missing comma is a mistake too.",
        "Check what each comma separates, and look for sentences that have none."
      ],
      "how": [
        "Check where each comma sits and whether one is missing.",
        "The list of foods has commas between the things, and the date has a comma between the day and the year.",
        "Helena Montana needs a comma, the kitten has a comma it does not need, and the August date needs one."
      ],
      "misconception": "A common mix-up is choosing a sentence because it has a comma in it. Check that every needed comma is there.",
      "why": "The answers are \"Dad packed pretzels, grapes, and juice.\" and \"The recital is on November 3, 2026.\" The list and the date have every comma they need. The other three sentences have a missing or an extra comma.",
      "like": [
        "SK-GUM2-8-C08"
      ]
    },
    {
      "id": "SK-GUM2-8-S09",
      "type": "mc",
      "points": 1,
      "dok": 1,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [],
      "prompt": "At which spot should a comma be added?",
      "stem": "My sister was born on March 7 2019.",
      "choices": [
        {
          "text": "between 7 and 2019",
          "correct": true
        },
        {
          "text": "between March and 7"
        },
        {
          "text": "between born and on"
        },
        {
          "text": "before March"
        }
      ],
      "clue": "Look at the date in the sentence and name its three parts.",
      "hints": [
        "Look at the date in the sentence and name its three parts.",
        "Ask which two parts a comma should keep apart.",
        "A comma does not belong before the month. Think about the other choices."
      ],
      "how": [
        "March, 7 and 2019 are the month, the day and the year.",
        "A comma separates the day from the year.",
        "The answer is between 7 and 2019."
      ],
      "misconception": "A common mix-up is putting the comma after the month. The comma goes after the day.",
      "why": "The answer is between 7 and 2019. A date needs a comma between the day and the year: March 7, 2019. A comma between March and 7, between born and on, or before March does not follow the rule.",
      "like": [
        "SK-GUM2-8-C09"
      ]
    },
    {
      "id": "SK-GUM2-8-S10",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Tara wants to take out the first mark in the address line of her note. Is that wise?",
      "choices": [
        {
          "text": "No, Hill Road and Billings are two separate things, so the mark stays.",
          "correct": true
        },
        {
          "text": "Yes, because Hill Road and Billings read together as one single long label."
        },
        {
          "text": "Yes, because only the final mark before Montana is ever needed here."
        },
        {
          "text": "No, but a second one belongs after Montana to finish the line off."
        }
      ],
      "clue": "Read line 7 and think about the parts an address has.",
      "hints": [
        "Read line 7 and think about the parts an address has.",
        "Name the parts that sit on each side of that comma.",
        "Think about whether a street and a city are the same thing. Think about the other choices."
      ],
      "how": [
        "Line 7 says 6 Hill Road, Billings, Montana.",
        "The comma after Road keeps the street apart from the city.",
        "The answer is \"No, Hill Road and Billings are two separate things, so the mark stays.\""
      ],
      "misconception": "A common mix-up is thinking a street and a city are one thing. They are separate parts, and a comma keeps them apart.",
      "why": "The answer is \"No, Hill Road and Billings are two separate things, so the mark stays.\" Each comma in line 7 keeps two parts of the address apart.",
      "like": [
        "SK-GUM2-8-C10"
      ]
    },
    {
      "id": "SK-GUM2-8-S11",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Tap the pair of lines in the middle of this letter that are punctuated perfectly.",
      "targets": [
        "p6:2:1",
        "p6:2:2",
        "p6:2:3",
        "p6:2:4",
        "p6:2:5"
      ],
      "answer": [
        "p6:2:2",
        "p6:2:5"
      ],
      "pick": 2,
      "clue": "Look at each of the five lines for a list, a date, or an address.",
      "hints": [
        "Look at each of the five lines for a list, a date, or an address.",
        "Say what each comma in a line is doing, and look for any spot where one is missing.",
        "The line about the museum trip has no comma where one belongs. Think about the rest."
      ],
      "how": [
        "Test one line at a time.",
        "The address and the list of three actions each have their commas where they belong.",
        "The bike line, the date line and the museum line each have a missing comma."
      ],
      "misconception": "A common mix-up is choosing a line because it has a lot of commas. They all have to be in the right places.",
      "why": "The answers are \"Our school stands at 90 Pond Road, Albany, New York.\" and \"Kids can sit, rest, and talk on them for hours.\" The address and the list have their commas in the right places. Line 3 is missing a comma after racks, line 5 is missing the date comma, and line 6 is missing a comma between Syracuse and New York.",
      "like": [
        "SK-GUM2-8-C11"
      ]
    },
    {
      "id": "SK-GUM2-8-S12",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Pick how the deadline should look in line 5.",
      "text": "Our benches will be ready for use by {0}.",
      "slots": [
        {
          "options": [
            "May 1, 2027",
            "May, 1 2027",
            "May 1 2027"
          ],
          "answer": 0
        }
      ],
      "clue": "Look at the three parts of the date: a month, a day and a year.",
      "hints": [
        "Look at the three parts of the date: a month, a day and a year.",
        "Decide where a comma, if any, belongs inside the date.",
        "A comma between a month and its day is not part of the rule. Look at the other choices."
      ],
      "how": [
        "May, 1 and 2027 are the month, the day and the year.",
        "A comma separates the day from the year.",
        "The answer is May 1, 2027."
      ],
      "misconception": "A common mix-up is leaving the comma out because the date is short. A date needs one comma.",
      "why": "The answer is May 1, 2027. A comma goes between the day and the year. A comma after May splits the month from the day, and no comma leaves the date without its mark.",
      "like": [
        "SK-GUM2-8-C12"
      ]
    },
    {
      "id": "SK-GUM2-8-S13",
      "type": "dropdown",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [],
      "prompt": "Pick the correct writing for each gap.",
      "text": "Grandpa was born in {0}. His birthday is {1}.",
      "slots": [
        {
          "options": [
            "Mobile, Alabama",
            "Mobile Alabama",
            "Mobile. Alabama"
          ],
          "answer": 0
        },
        {
          "options": [
            "January 12, 1950",
            "January, 12 1950",
            "January 12 1950"
          ],
          "answer": 0
        }
      ],
      "clue": "Each gap needs its commas in its own place. Decide what each gap names.",
      "hints": [
        "Each gap needs its commas in its own place. Decide what each gap names.",
        "The first gap holds a city and a state. The second gap holds a date.",
        "A comma does not belong between a month and its day. Look at the choices for the second gap."
      ],
      "how": [
        "Mobile and Alabama are a city and a state. January, 12 and 1950 are a date.",
        "A comma goes between the city and the state, and another goes between the day and the year.",
        "The answers are Mobile, Alabama and January 12, 1950."
      ],
      "misconception": "A common mix-up is using the comma in the same spot twice. A place and a date put their commas in different spots.",
      "why": "The answers are Mobile, Alabama and January 12, 1950. The first comma separates a city and a state. The second comma separates a day and a year.",
      "like": [
        "SK-GUM2-8-C13"
      ]
    },
    {
      "id": "SK-GUM2-8-S14",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [],
      "prompt": "Find the sentence that needs one more comma.",
      "options": [
        "Pack your shorts, shirts, and socks for camp.",
        "Write to us at 3 Reed Road Austin, Texas.",
        "The race is on October 9, 2026.",
        "My cousin lives in Ames, Iowa.",
        "Mia sang, danced, and played the drums."
      ],
      "answer": [
        1
      ],
      "pick": 1,
      "clue": "Look at each sentence and ask what its commas separate.",
      "hints": [
        "Look at each sentence and ask what its commas separate.",
        "A list, a date and an address each have places where commas belong.",
        "The sentence about the race has its comma in the right place. Think about the rest."
      ],
      "how": [
        "Check each list, date and place for every comma it needs.",
        "The shorts, the race date, Ames, Iowa and Mia's list all have the commas they need.",
        "The answer is \"Write to us at 3 Reed Road Austin, Texas.\" An address needs a comma after the street."
      ],
      "misconception": "A common mix-up is stopping once you see one comma. An address needs a comma after the street and another between the city and the state.",
      "why": "The answer is \"Write to us at 3 Reed Road Austin, Texas.\" An address needs a comma after the street: 3 Reed Road, Austin, Texas. The other sentences have every comma they need.",
      "like": [
        "SK-GUM2-8-C14"
      ]
    },
    {
      "id": "SK-GUM2-8-S15",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:use-commas-in-a-series-and-in-dates-addresses-sa"
      ],
      "passages": [],
      "prompt": "Dee believes dates are the only place for a comma. Which example proves her wrong?",
      "choices": [
        {
          "text": "My uncle lives in Fargo, North Dakota.",
          "correct": true
        },
        {
          "text": "Our school year finally ends on June 8, 2027."
        },
        {
          "text": "The swim meet begins on August 12, 2026."
        },
        {
          "text": "Her party is planned for March 7, 2026."
        }
      ],
      "clue": "To test a thought, look for an example that breaks it. Look at what each comma separates.",
      "hints": [
        "To test a thought, look for an example that breaks it. Look at what each comma separates.",
        "In each sentence, ask whether the comma is part of a date or something else.",
        "Dee's claim is about dates only. Think about the other choices."
      ],
      "how": [
        "Dee says commas are only for dates. Look for a comma that does something else.",
        "The commas in the other three sentences separate parts of a date.",
        "The answer is \"My uncle lives in Fargo, North Dakota.\""
      ],
      "misconception": "A common mix-up is thinking commas have only one job. They also separate lists, places, greetings and closings.",
      "why": "The answer is \"My uncle lives in Fargo, North Dakota.\" The comma separates a city and a state, which is not a date. That proves Dee wrong. The other sentences each have a date.",
      "like": [
        "SK-GUM2-8-C15"
      ]
    }
  ],
  addons: {
    "SK-GUM2-8-P1": {
      "hints": [
        "Look at the three ways the date is written.",
        "Find the month, the day and the year. Decide which two parts a comma should keep apart.",
        "A comma between the month and the day does not match the rule in the lesson. Think about the other choices."
      ],
      "how": [
        "The date has a month, a day and a year.",
        "A comma keeps the day and the year apart.",
        "The answer is August 15, 2025."
      ],
      "misconception": "A common mix-up is putting the comma right after the month. The comma goes after the day."
    },
    "SK-GUM2-8-P2": {
      "hints": [
        "Find the list of things Dad bought.",
        "Commas go between the things in the list, not before the list starts.",
        "One choice puts a comma right after bought. Think about the other choices."
      ],
      "how": [
        "The list is milk, bread and eggs.",
        "Commas separate the things in the list. No comma comes after bought or after and.",
        "The answer is \"Dad bought milk, bread, and eggs at the store.\""
      ],
      "misconception": "A common mix-up is putting a comma after the verb. The commas go between the things in the list."
    },
    "SK-GUM2-8-P3": {
      "hints": [
        "Check the date, the list, the greeting and the closing.",
        "Ask what each part of the letter needs after it, if anything.",
        "The list is written correctly. Think about the rest."
      ],
      "how": [
        "Check each line one at a time.",
        "The date, the list and the closing have their commas. The name Mateo needs none.",
        "The answer is \"Dear Coach Hill\". It needs a comma: Dear Coach Hill,"
      ],
      "misconception": "A common mix-up is thinking the greeting does not need a comma. A greeting always ends with one."
    },
    "SK-GUM2-8-P4": {
      "hints": [
        "This is a city and a state.",
        "Think about what mark, if any, goes between them.",
        "A period ends a sentence. Think about the other choices."
      ],
      "how": [
        "Orlando is the city, and Florida is the state.",
        "A comma goes between a city and its state.",
        "The answer is Orlando, Florida."
      ],
      "misconception": "A common mix-up is leaving the comma out because the names are said together. The comma keeps them apart."
    },
    "SK-GUM2-8-P5": {
      "hints": [
        "Look at what the comma separates in each example.",
        "Some examples have a month and a number. Some have two place names. Some start or end a letter.",
        "A list has three or more things. Use that to sort one example first."
      ],
      "how": [
        "Look at the words on each side of the comma.",
        "Pens, paper and glue are a list. April 9, 2026 and June 1, 2025 are dates. Rome, Georgia is a city and state.",
        "Dear Aunt Rosa, and Sincerely, are parts of a letter."
      ],
      "misconception": "A common mix-up is sorting by how many commas are in the example. What the comma separates decides the group."
    }
  },
  /* B7b:core:end */
  test: [
    { id: "SK-GUM2-8-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the date that is written correctly.",
      text: "Grandma wrote the date at the top of her letter: {0}",
      slots: [ { options: ["December 1, 2026", "December, 1, 2026", "December 1 2026"], answer: 0 } ],
      clue: "How many commas does a date need, and where does it go?",
      why: "The answer is December 1, 2026. A date has one comma, between the day and the year." },
    { id: "SK-GUM2-8-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses commas correctly?",
      choices: [
        { text: "We saw lions, zebras, and giraffes at the zoo.", correct: true },
        { text: "We saw lions zebras, and giraffes at the zoo." },
        { text: "We saw lions, zebras, and, giraffes at the zoo." },
        { text: "We, saw lions, zebras, and giraffes at the zoo." }
      ],
      clue: "Find the list. Commas belong only between the things in the list.",
      why: "The answer is \"We saw lions, zebras, and giraffes at the zoo.\" The commas separate the animals in the list. There is no comma after We or after and." },
    { id: "SK-GUM2-8-T3", type: "hottext", points: 2, dok: 2, passages: [],
      prompt: "Here are the lines of a letter. Select the TWO lines that have a comma error.",
      options: [
        "March 8 2026",
        "Dear Mr. Banks,",
        "Thank you for showing our class the trains in Savannah, Georgia.",
        "Sincerely",
        "Priya"
      ],
      answer: [0, 3], pick: 2,
      clue: "Check the date, the greeting, the city and state, and the closing. Two of them are missing a comma.",
      why: "The answers are \"March 8 2026\" and \"Sincerely\". The date needs a comma between the day and the year: March 8, 2026. The closing needs a comma after it: Sincerely," },
    { id: "SK-GUM2-8-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses commas correctly?",
      choices: [
        { text: "Our aunt lives in Athens, Georgia.", correct: true },
        { text: "Our aunt lives in Athens Georgia." },
        { text: "Our aunt, lives in Athens Georgia." },
        { text: "Our aunt lives, in Athens Georgia." }
      ],
      clue: "Find the city and the state. Where does a comma belong?",
      why: "The answer is \"Our aunt lives in Athens, Georgia.\" A comma goes between the city, Athens, and the state, Georgia." },
    { id: "SK-GUM2-8-T5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO sentences use commas correctly?",
      choices: [
        { text: "The fall concert is on October 17, 2026.", correct: true },
        { text: "Our flag is red, white, and blue.", correct: true },
        { text: "We hiked, in the woods on Saturday." },
        { text: "The fair starts on June, 5 2026." },
        { text: "I like soup salad, and rice." }
      ],
      clue: "Ask of each comma: Is it in a list, a date, a city and state, or a letter? Also look for a list or date that is missing a comma.",
      why: "The answers are \"The fall concert is on October 17, 2026.\" and \"Our flag is red, white, and blue.\" The date has its comma between the day and the year, and the list has commas between the colors. The comma after hiked does not belong, the June date has its comma in the wrong place, and the list of foods needs a comma after soup." }
  ]
});

/* ---------- GUM2-9: verbs with -d or -es ---------- */
PP.addLesson({
  code: "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es",
  title: "Adding -d or -es to verbs",
  teach: {
    big: "Look at how a verb ends before you add an ending: some verbs need just -d, and some need -es.",
    points: [
      "To tell about the past, a verb that already ends in e just adds -d: bake becomes baked, and smile becomes smiled. A verb that does not end in e adds -ed: jump becomes jumped.",
      "When one person or thing does an action now, the verb usually adds -s. If the verb ends in s, sh, ch, x or z, add -es instead: wash becomes washes, catch becomes catches, and fix becomes fixes.",
      "If a verb ends in a consonant and then y, change the y to i and add -es: study becomes studies, and cry becomes cries.",
      "Two short verbs also add -es: go becomes goes, and do becomes does."
    ],
    words: [
      { term: "verb", means: "a word that shows an action, like bake or wash" },
      { term: "ending", means: "letters added to the end of a word, like -d or -es" },
      { term: "plain verb", means: "the verb with no ending added, like wash or bake" }
    ],
    example: {
      label: "Example",
      lines: ["Mia hoped for snow.", "Mia watches the sky.", "Mia studies the clouds."],
      note: "Hope ends in e, so it just adds -d. Watch ends in ch, so it adds -es. Study ends in a consonant and y, so the y changes to i before -es."
    },
    tip: "On the test, you may choose the correct spelling of a verb. Look at the last letters of the plain verb first, then pick the ending that fits."
  },
  learn: [
    {
      show: ["Every night, my dad ___ the dishes. (wash)"],
      ask: "How do you spell the verb?",
      steps: [
        "One person, my dad, does the action, and it happens every night. So the verb needs an ending.",
        "Look at how wash ends. It ends in sh.",
        "Verbs that end in sh add -es: washes."
      ],
      answer: "Washes. Every night, my dad washes the dishes."
    },
    {
      show: ["Last week, we ___ a cake for Grandma. (bake)"],
      ask: "How do you spell the verb?",
      steps: [
        "Last week is in the past, so the verb needs a past ending.",
        "Bake already ends in e.",
        "Just add -d: baked. Do not add another e."
      ],
      answer: "Baked. Last week, we baked a cake for Grandma."
    },
    {
      show: ["Every night, Dad ___ about the weather. (worry)", "Every afternoon, my cat ___ on the sofa. (stay)"],
      ask: "How do you spell each verb?",
      steps: [
        "One person or animal does each action every time, so each verb needs an ending.",
        "Worry ends in a consonant, r, and then y, so the y changes to i. Stay ends in a vowel, a, and then y, so the y stays.",
        "Add -es to the changed word: worries. Just add -s to stay: stays."
      ],
      answer: "Worries and stays. Every night, Dad worries about the weather. Every afternoon, my cat stays on the sofa."
    }
  ],
  parent: "As you do chores, name each one in a sentence about someone else (Dad washes, Grandma fixes, the baby cries). Have your child spell the verb aloud and say which ending it needs.",
  passages: [
    /* B7b:passages:start */
    {
      "id": "p1",
      "title": "Dad's Busy Morning",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Every morning, my dad wakes up before the sun comes up.",
          "(2) He brushs his teeth and combs his hair in the dark bathroom.",
          "(3) Then he fixes a big breakfast for all of us."
        ],
        [
          "(4) He mixes the eggs in a bowl and cooks them in a pan.",
          "(5) My sister trys a bite of everything on her plate.",
          "(6) My brother passs the toast down the long table to me."
        ],
        [
          "(7) Dad catches the early bus when the bell on the corner rings.",
          "(8) He tosses his lunch bag onto the seat and waves goodbye to us.",
          "(9) Then the house gets quiet, and we get ready for school.",
          "(10) I love our busy mornings together."
        ]
      ]
    },
    {
      "id": "p2",
      "title": "The Garden Party",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last Friday, our class planned a garden party for the families.",
          "(2) Mrs. Diaz inviteed every parent with a bright paper card."
        ],
        [
          "(3) We shared lemonade and fruit with everyone on the soft green grass.",
          "(4) Omar smiled at the little kids and waved hello to their parents.",
          "(5) Two girls dancd to the radio near the big white tent.",
          "(6) A bee landed on a cup, and Jin scared it away."
        ],
        [
          "(7) Later, the families admireed every flower bed.",
          "(8) Our teacher thanked us for all our hard work.",
          "(9) We cleaned up the cups and the napkins.",
          "(10) The garden looked lovely when the sun went down.",
          "(11) I hope we plan another party next spring."
        ]
      ]
    },
    {
      "id": "p3",
      "title": "Our Weekend Chores",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) In our house, every person has a chore to do on Saturday morning.",
          "(2) Mom sweeps the porch and stacks the chairs by the front door."
        ],
        [
          "(3) My brother sprayes the garden with the hose each night.",
          "(4) Uncle Ray patches the leaky faucet with a wrench.",
          "(5) I pushs the vacuum across the rug in the hall.",
          "(6) Grandpa dries the plates and puts them away.",
          "(7) Dad do the grocery shopping on Sunday morning."
        ],
        [
          "(8) When we finish, everyone sits down to eat pancakes together.",
          "(9) The house smells clean, and the dog naps in the warm sun.",
          "(10) I feel proud when our whole family works together as a team."
        ]
      ]
    },
    {
      "id": "p4",
      "title": "A Day on the Farm",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) On our farm, everyone starts work when the sun comes up.",
          "(2) My aunt latchs the wooden gate near the hen house.",
          "(3) Uncle Joe mends the old fence with wire and nails."
        ],
        [
          "(4) Gus feeds the goats and fills their water pail.",
          "(5) Luna hurrys through the field with a heavy bucket.",
          "(6) Gus mixs corn and oats for the hungry horses."
        ],
        [
          "(7) At noon, we all sit under the shady apple tree to eat.",
          "(8) The farm dog barks at the crows and chases them away.",
          "(9) By evening, my arms feel tired, but my heart feels happy.",
          "(10) I would never trade our farm for a house in the city."
        ]
      ]
    },
    {
      "id": "p5",
      "title": "The School Play",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Last spring, our class performed a play about a brave knight.",
          "(2) Mr. Park shapeed a shiny cardboard sword for the knight by hand."
        ],
        [
          "(3) We practiced our lines during recess for two whole weeks.",
          "(4) Priya bowed to the crowd and thanked her grandma.",
          "(5) The audience lovd every joke and clapped for a long time.",
          "(6) After the show, the judges praised each actor on the big stage."
        ],
        [
          "(7) Then the cast celebrateed backstage with juice and cookies.",
          "(8) My friend Leo tripped on his cape, but he laughed about it later.",
          "(9) Our teacher hugged us all and told us we did a great job.",
          "(10) I will remember that play for the rest of my life."
        ]
      ]
    },
    {
      "id": "p6",
      "title": "Weekend Jobs at Grandma's",
      "byline": "A third grader's draft",
      "genre": "Student draft (narrative)",
      "draft": true,
      "paragraphs": [
        [
          "(1) Every weekend, we visit Grandma and help her with all of her jobs.",
          "(2) She keeps the garden neat and tidy all year long."
        ],
        [
          "(3) Grandpa enjoyes every letter from his old friends.",
          "(4) Aunt Rose reaches the top shelf without a stool.",
          "(5) Cousin Max boxs the apples for the market stand.",
          "(6) Pop tries a new tool every single week.",
          "(7) Our neighbor do the milking before the sun comes up."
        ],
        [
          "(8) At lunch, we all sit on the porch and eat peach pie together.",
          "(9) Grandma says our help is the best gift that she gets all week.",
          "(10) I feel lucky to have such a kind and hardworking family."
        ]
      ]
    }
    /* B7b:passages:end */
  ],
  practice: [
    { id: "SK-GUM2-9-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The baby {0} when she is hungry.",
      slots: [ { options: ["cryes", "cries", "crys"], answer: 1 } ],
      clue: "Look at the letter before the y in cry. Is it a vowel or a consonant?",
      why: "The answer is cries. Cry ends in a consonant and then y, so the y changes to i and -es is added." },
    { id: "SK-GUM2-9-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Yesterday, our class {0} to go outside for art.",
      slots: [ { options: ["voted", "voteed", "votes"], answer: 0 } ],
      clue: "Yesterday is in the past. Vote already ends in e. What do you add?",
      why: "The answer is voted. Yesterday is in the past, and vote already ends in e, so you just add -d." },
    { id: "SK-GUM2-9-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence spells the verb correctly?",
      choices: [
        { text: "Kai fixes his bike chain with a small tool.", correct: true },
        { text: "Kai fixs his bike chain with a small tool." },
        { text: "Kai fixies his bike chain with a small tool." },
        { text: "Kai fixxes his bike chain with a small tool." }
      ],
      clue: "Fix ends in x. What ending do verbs that end in x get?",
      why: "The answer is \"Kai fixes his bike chain with a small tool.\" Fix ends in x, so it adds -es: fixes." },
    { id: "SK-GUM2-9-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Each sentence needs the verb in ( ) with a new ending. Sort each sentence by the ending the verb gets.",
      cols: ["Add -d", "Add -es", "Change y to i and add -es"],
      rows: [
        { text: "Last night, we ___ our coins in a jar. (save)", answer: 0 },
        { text: "Every morning, Mom ___ the pancake batter. (mix)", answer: 1 },
        { text: "Lily always ___ to catch the bus. (hurry)", answer: 2 },
        { text: "Last week, the class ___ a new song. (practice)", answer: 0 },
        { text: "A bee ___ from flower to flower. (buzz)", answer: 1 },
        { text: "Every day, Ben ___ the mail up the steps. (carry)", answer: 2 }
      ],
      clue: "Look at the last letters of each verb in ( ). An e at the end, an x or z at the end, and a consonant plus y at the end each get a different ending.",
      why: "Save and practice end in e, so they become saved and practiced. Mix and buzz end in x and z, so they become mixes and buzzes. Hurry and carry end in a consonant and y, so they become hurries and carries." },
    { id: "SK-GUM2-9-P5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has a spelling error.",
      options: [
        "My brother rides the old horse every evening.",
        "The goat nibbled the fence post.",
        "Our teacher teachs us a new word each day.",
        "Grandma writes a new recipe every week.",
        "Sam closed the gate behind the goats."
      ],
      answer: [2], pick: 1,
      clue: "Look at each verb and how its plain form ends. Check that it has the right ending.",
      why: "The answer is \"Our teacher teachs us a new word each day.\" Teach ends in ch, so it needs -es: teaches." }
  ],
  /* B7b:core:start */
  /* ---------- Expansion 2026-10-22, batch B7b (GUM Reinforce, second half) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test.
     Author log: docs/expansion-2026-10-22/batches/B7b-author-log.md. NOT ACCEPTED: needs independent review. */
  core: {
    "rev": "1",
    "sets": [
      {
        "title": "Set 1",
        "items": [
          {
            "ref": "SK-GUM2-9-P4"
          },
          {
            "ref": "SK-GUM2-9-P5"
          },
          {
            "id": "SK-GUM2-9-C03",
            "type": "mc",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "One verb in sentence 2 is misspelled. What is the mistake?",
            "choices": [
              {
                "text": "Brush ends in sh, so the verb needs -es and should be spelled brushes.",
                "correct": true
              },
              {
                "text": "Brush ends in a consonant plus y, so the spelling should change to brushies."
              },
              {
                "text": "Brush ends in e, so the verb needs only -d and should be spelled brushed."
              },
              {
                "text": "Brush is a short verb, so the ending is -ing and it should be spelled brushing."
              }
            ],
            "clue": "Find the verb in sentence 2 that has an ending added.",
            "hints": [
              "Find the verb in sentence 2 that has an ending added.",
              "Look at the last letters of the plain verb before any ending is added.",
              "Look at the last two letters of brush. Think about the other choices."
            ],
            "how": [
              "The plain verb is brush. Its last two letters are sh.",
              "A verb that ends in sh adds -es when one person does the action now.",
              "The answer is \"Brush ends in sh, so the verb needs -es and should be spelled brushes.\""
            ],
            "misconception": "A common mix-up is adding only -s to every verb. Verbs that end in sh need -es.",
            "why": "The answer is \"Brush ends in sh, so the verb needs -es and should be spelled brushes.\" Brush does not end in e or y, and adding only -s leaves the ending hard to say.",
            "like": [
              "SK-GUM2-9-S03"
            ]
          },
          {
            "id": "SK-GUM2-9-C04",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentence 5 has a verb spelled wrong. Choose the correct spelling.",
            "text": "My sister {0} a bite of everything on her plate.",
            "slots": [
              {
                "options": [
                  "tries",
                  "trys",
                  "tryes"
                ],
                "answer": 0
              }
            ],
            "clue": "Think of the plain verb. Then look at the letter in front of the y.",
            "hints": [
              "Think of the plain verb. Then look at the letter in front of the y.",
              "Decide whether that letter is a vowel (a, e, i, o or u) or a consonant.",
              "Just adding -s after a consonant and a y does not follow the rule. Look at the other choices."
            ],
            "how": [
              "The plain verb is try. The letter in front of the y is r.",
              "R is a consonant, so the y changes to i and -es is added.",
              "The answer is tries."
            ],
            "misconception": "A common mix-up is adding only -s after a y. A consonant before the y means the y changes to i.",
            "why": "The answer is tries. Try has an r, a consonant, before the y, so the y changes to i and -es is added.",
            "like": [
              "SK-GUM2-9-S04"
            ]
          },
          {
            "id": "SK-GUM2-9-C05",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [
              "p1"
            ],
            "prompt": "Sentences 5 and 6 each have a verb that needs fixing. How do the two fixes differ?",
            "choices": [
              {
                "text": "Sentence 5 depends on the letter before its y, while sentence 6 just adds -es after the s.",
                "correct": true
              },
              {
                "text": "Both fixes only add -es to the end of the word, so the two sentences need exactly the same change."
              },
              {
                "text": "Sentence 6 needs the y changed to i, while sentence 5 needs -es added to the whole word."
              },
              {
                "text": "Sentence 5 needs -d because it is in the past, while sentence 6 needs -es."
              }
            ],
            "clue": "Write the plain form of each verb in sentences 5 and 6.",
            "hints": [
              "Write the plain form of each verb in sentences 5 and 6.",
              "Look at the last letters of each plain verb.",
              "Both sentences tell about every morning, so neither one is in the past. Think about the other choices."
            ],
            "how": [
              "Try ends in a consonant and y. Pass ends in ss.",
              "A consonant and y means the y changes to i. Ending in ss means -es is just added.",
              "The answer is \"Sentence 5 depends on the letter before its y, while sentence 6 just adds -es after the s.\""
            ],
            "misconception": "A common mix-up is thinking every fix is the same. The last letters of the plain verb decide the change.",
            "why": "The answer is \"Sentence 5 depends on the letter before its y, while sentence 6 just adds -es after the s.\" Try changes its y to i. Pass already ends in s, so it just adds -es.",
            "like": [
              "SK-GUM2-9-S05"
            ]
          }
        ]
      },
      {
        "title": "Set 2",
        "items": [
          {
            "id": "SK-GUM2-9-C06",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Select the TWO sentences in 2 through 6 where a verb is not spelled right.",
            "targets": [
              "p2:1:2",
              "p2:2:1",
              "p2:2:2",
              "p2:2:3",
              "p2:2:4"
            ],
            "answer": [
              "p2:1:2",
              "p2:2:3"
            ],
            "pick": 2,
            "clue": "Find the verb in each of sentences 2 through 6. Ask what its plain form ends in.",
            "hints": [
              "Find the verb in each of sentences 2 through 6. Ask what its plain form ends in.",
              "These sentences tell about the past. Check how each verb was changed.",
              "The sentence about the bee uses a verb that is spelled right. Think about the rest."
            ],
            "how": [
              "Check each verb one sentence at a time.",
              "Shared, smiled, waved and scared are all spelled correctly.",
              "In sentences 2 and 5, the verbs are spelled with the wrong ending."
            ],
            "misconception": "A common mix-up is trusting a verb because it looks long and careful. Check its ending against its plain form.",
            "why": "The answers are \"Mrs. Diaz inviteed every parent with a bright paper card.\" and \"Two girls dancd to the radio near the big white tent.\" Invite and dance already end in e, so they just add -d: invited and danced. Sentences 3, 4 and 6 are spelled correctly.",
            "like": [
              "SK-GUM2-9-S06"
            ]
          },
          {
            "id": "SK-GUM2-9-C07",
            "type": "ebsr",
            "points": 2,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Start with Part A, then finish Part B.",
            "partA": {
              "prompt": "Why is the verb in sentence 7 spelled wrong?",
              "choices": [
                {
                  "text": "Admire ends in e already, which means -d alone is enough, giving admired.",
                  "correct": true
                },
                {
                  "text": "Admire is already in past form, so nothing more is needed, giving admire."
                },
                {
                  "text": "Admire shows an action that happens now, so the ending should be -s, giving admires."
                },
                {
                  "text": "Admire ends in e, so the e should be dropped and -ing added, giving admiring."
                }
              ]
            },
            "partB": {
              "prompt": "Which sentence correctly repairs sentence 7?",
              "choices": [
                {
                  "text": "Later, the families admired every flower bed.",
                  "correct": true
                },
                {
                  "text": "Later, the families admird every flower bed."
                },
                {
                  "text": "Later, the families admires every flower bed."
                },
                {
                  "text": "Later, the families admireed every flower bed."
                }
              ]
            },
            "clue": "Think of the plain verb in sentence 7. Look at how it ends.",
            "hints": [
              "Think of the plain verb in sentence 7. Look at how it ends.",
              "In Part B, read each version and think about whether the sentence tells about the past.",
              "Adding -ing changes the time the verb tells about. Think about the other choices."
            ],
            "how": [
              "Part A: the plain verb is admire, and it ends in e.",
              "Part B: the sentence begins with Later, so the verb needs a past ending.",
              "The answers are \"Admire ends in e already, which means -d alone is enough, giving admired.\" and \"Later, the families admired every flower bed.\""
            ],
            "misconception": "A common mix-up is adding a whole -ed to a verb that already ends in e. Only -d is added.",
            "why": "Part A: \"Admire ends in e already, which means -d alone is enough, giving admired.\" Part B: \"Later, the families admired every flower bed.\" Admires would not tell about the past.",
            "like": [
              "SK-GUM2-9-S07"
            ]
          },
          {
            "id": "SK-GUM2-9-C08",
            "type": "ms",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [],
            "prompt": "Choose the TWO sentences whose verb has the correct spelling.",
            "pick": 2,
            "choices": [
              {
                "text": "My uncle waxes the old truck every spring.",
                "correct": true
              },
              {
                "text": "Last night, we hiked up the steep trail.",
                "correct": true
              },
              {
                "text": "My sister catchs fireflies in a jar every summer."
              },
              {
                "text": "Yesterday, the boys rakeed the leaves into a big pile."
              },
              {
                "text": "Our baby cryes when the thunder booms outside."
              }
            ],
            "clue": "Find the verb in each sentence. Think of its plain form and look at how it ends.",
            "hints": [
              "Find the verb in each sentence. Think of its plain form and look at how it ends.",
              "Check all five choices, including the ones that look right at first glance. Each plain verb needs the ending that fits the way it ends.",
              "Compare each ending with the last letters of its plain verb, one sentence at a time."
            ],
            "how": [
              "Look at each plain verb: wax, hike, catch, rake and cry.",
              "Wax ends in x, so it adds -es. Hike ends in e, so it just adds -d.",
              "Catch needs -es, rake needs only -d, and cry needs the y changed to i."
            ],
            "misconception": "A common mix-up is picking a sentence because the verb looks familiar. Check the ending against the plain verb.",
            "why": "The answers are \"My uncle waxes the old truck every spring.\" and \"Last night, we hiked up the steep trail.\" Wax adds -es, and hike just adds -d. Catchs, rakeed and cryes are misspelled.",
            "like": [
              "SK-GUM2-9-S08"
            ]
          },
          {
            "id": "SK-GUM2-9-C09",
            "type": "mc",
            "points": 1,
            "dok": 1,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [],
            "prompt": "Pick the correct spelling to finish the sentence. Last night, Dad ___ with us at dinner.",
            "stem": "Last night, Dad joked with us at dinner.",
            "choices": [
              {
                "text": "joked",
                "correct": true
              },
              {
                "text": "jokeed"
              },
              {
                "text": "jokd"
              },
              {
                "text": "jokes"
              }
            ],
            "clue": "Last night already happened. Look at how the plain verb joke ends.",
            "hints": [
              "Last night already happened. Look at how the plain verb joke ends.",
              "A final e means the past needs only a short ending.",
              "Jokes tells about the present. Think about the other choices."
            ],
            "how": [
              "The sentence tells about the past, and joke ends in e.",
              "Only -d is added when a verb ends in e.",
              "The answer is joked."
            ],
            "misconception": "A common mix-up is adding a whole -ed to a verb that ends in e. Only -d is added.",
            "why": "The answer is joked. Joke already ends in e, so only -d is added for the past. Jokeed has an extra e, jokd drops the e, and jokes does not tell about the past.",
            "like": [
              "SK-GUM2-9-S09"
            ]
          },
          {
            "id": "SK-GUM2-9-C10",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [
              "p2"
            ],
            "prompt": "Ben says cleaned in sentence 9 should be cleand because past verbs only take -d. Which reply is best?",
            "choices": [
              {
                "text": "Clean has no final e, so it keeps the full -ed, and cleaned is already right.",
                "correct": true
              },
              {
                "text": "Ben is right, because every past verb takes just -d, so cleand is the spelling."
              },
              {
                "text": "Ben is right, since shorter endings are always the correct ones."
              },
              {
                "text": "Clean ends in n, so the n should double, which gives the spelling cleanned."
              }
            ],
            "clue": "Find the word cleaned in sentence 9 and think about the plain form of that word.",
            "hints": [
              "Find the word cleaned in sentence 9 and think about the plain form of that word.",
              "Look at the last letter of clean. Is it an e?",
              "Shorter endings are not always the correct ones. Think about the other choices."
            ],
            "how": [
              "Clean ends in n.",
              "Only -d is added to a verb that ends in e, and clean does not end in e.",
              "The answer is \"Clean has no final e, so it keeps the full -ed, and cleaned is already right.\""
            ],
            "misconception": "A common mix-up is using just -d for every verb. Only verbs that end in e take just -d.",
            "why": "The answer is \"Clean has no final e, so it keeps the full -ed, and cleaned is already right.\" Cleand is not a word, and cleanned doubles a letter it does not need.",
            "like": [
              "SK-GUM2-9-S10"
            ]
          }
        ]
      },
      {
        "title": "Set 3",
        "items": [
          {
            "id": "SK-GUM2-9-C11",
            "type": "hottext",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Two sentences from 3 to 7 have verbs that are spelled and used correctly. Select them.",
            "targets": [
              "p3:2:1",
              "p3:2:2",
              "p3:2:3",
              "p3:2:4",
              "p3:2:5"
            ],
            "answer": [
              "p3:2:2",
              "p3:2:4"
            ],
            "pick": 2,
            "clue": "Find the verb in each of sentences 3 to 7. Ask what its plain form ends in.",
            "hints": [
              "Find the verb in each of sentences 3 to 7. Ask what its plain form ends in.",
              "Check the ending that was added, and whether it matches one person doing the action now.",
              "Check each sentence for a wrong ending and for a wrong word for one person."
            ],
            "how": [
              "Check each sentence one at a time.",
              "Patches and dries have the endings that match their plain verbs.",
              "Sprayes, pushs and do do not match."
            ],
            "misconception": "A common mix-up is picking a sentence because it looks simple. Check each verb's ending.",
            "why": "The answers are \"Uncle Ray patches the leaky faucet with a wrench.\" and \"Grandpa dries the plates and puts them away.\" Patch ends in ch, so it adds -es. Dry ends in a consonant and y, so the y changes to i. Sprayes, pushs and do are wrong.",
            "like": [
              "SK-GUM2-9-S11"
            ]
          },
          {
            "id": "SK-GUM2-9-C12",
            "type": "dropdown",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [
              "p3"
            ],
            "prompt": "Which spelling of the verb completes the line about the garden hose?",
            "text": "My brother {0} the garden with the hose each night.",
            "slots": [
              {
                "options": [
                  "sprays",
                  "sprayes",
                  "spraies"
                ],
                "answer": 0
              }
            ],
            "clue": "Think of the plain verb, and look at its last two letters.",
            "hints": [
              "Think of the plain verb, and look at its last two letters.",
              "Ask whether the y has a vowel or a consonant in front of it.",
              "Sprayes keeps the y and adds -es. Think about the other choices."
            ],
            "how": [
              "The plain verb is spray. The letter in front of the y is a.",
              "A is a vowel, so the y stays and just -s is added.",
              "The answer is sprays."
            ],
            "misconception": "A common mix-up is changing the y to i every time. A vowel before the y means the y stays.",
            "why": "The answer is sprays. Spray has an a, a vowel, before the y, so the y stays and just -s is added.",
            "like": [
              "SK-GUM2-9-S12"
            ]
          },
          {
            "id": "SK-GUM2-9-C13",
            "type": "dropdown",
            "points": 2,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [],
            "prompt": "Select the spelling that suits each blank.",
            "text": "Every day, Ben {0} his notes in class, and he {1} his homework first.",
            "slots": [
              {
                "options": [
                  "copies",
                  "copys",
                  "copyes"
                ],
                "answer": 0
              },
              {
                "options": [
                  "finishes",
                  "finishs",
                  "finishies"
                ],
                "answer": 0
              }
            ],
            "clue": "Each blank needs a verb that tells about one person now. Think of each plain verb.",
            "hints": [
              "Each blank needs a verb that tells about one person now. Think of each plain verb.",
              "The first plain verb is copy. The second ends in sh.",
              "Just adding -s after sh does not follow the rule. Look at the choices for the second blank."
            ],
            "how": [
              "Copy ends in a consonant and y, so the y changes to i. Finish ends in sh, so it adds -es.",
              "The first blank changes a letter, and the second one does not.",
              "The answers are copies and finishes."
            ],
            "misconception": "A common mix-up is adding only -s to both verbs. Copy changes its y, and finish needs -es.",
            "why": "The answers are copies and finishes. Copy has a p before the y, so the y changes to i and -es is added. Finish ends in sh, so it adds -es.",
            "like": [
              "SK-GUM2-9-S13"
            ]
          },
          {
            "id": "SK-GUM2-9-C14",
            "type": "hottext",
            "points": 1,
            "dok": 2,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [],
            "prompt": "Which sentence has a verb spelled wrong?",
            "options": [
              "The little boy sneezes whenever the dust rises.",
              "Grandma tidies her desk when the bell rings.",
              "Our cat relaxs in the sun every afternoon.",
              "Yesterday, my cousins strolled along the river.",
              "The mechanic tightens the bolt for free."
            ],
            "answer": [
              2
            ],
            "pick": 1,
            "clue": "Look for the one verb whose ending does not suit its plain form.",
            "hints": [
              "Look for the one verb whose ending does not suit its plain form.",
              "Name the last letter of each plain verb and decide what ending it needs.",
              "The sentence about Grandma and her desk has a verb that is spelled right. Think about the rest."
            ],
            "how": [
              "Look at each verb and how its plain form ends.",
              "Sneezes, tidies, strolled and tightens all have endings that match their plain verbs.",
              "The answer is \"Our cat relaxs in the sun every afternoon.\" Relax ends in x, so it needs -es."
            ],
            "misconception": "A common mix-up is adding only -s after x. Verbs that end in x need -es.",
            "why": "The answer is \"Our cat relaxs in the sun every afternoon.\" Relax ends in x, so it adds -es: relaxes. The other sentences have verbs with the right endings.",
            "like": [
              "SK-GUM2-9-S14"
            ]
          },
          {
            "id": "SK-GUM2-9-C15",
            "type": "mc",
            "points": 1,
            "dok": 3,
            "std": [
              "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
            ],
            "passages": [],
            "prompt": "Lia says, \"To make a verb fit one person, always add -s.\" Which sentence shows that Lia is wrong?",
            "choices": [
              {
                "text": "The cook mashes the beans for dinner.",
                "correct": true
              },
              {
                "text": "Our cat naps on the porch after lunch."
              },
              {
                "text": "The bell rings at noon on school days."
              },
              {
                "text": "Dad cooks dinner for us on Fridays."
              }
            ],
            "clue": "To test a rule, look for an example that breaks it. Look at how each verb ends.",
            "hints": [
              "To test a rule, look for an example that breaks it. Look at how each verb ends.",
              "In each sentence, think of the plain verb and what it ends in.",
              "Lia's rule is about the ending added to a verb. Think about the other choices."
            ],
            "how": [
              "Lia says every verb just adds -s. Look for a verb that needs more.",
              "Nap, ring and cook just add -s.",
              "The answer is \"The cook mashes the beans for dinner.\""
            ],
            "misconception": "A common mix-up is thinking every verb adds only -s. Verbs that end in ch, sh, s, x or z need -es.",
            "why": "The answer is \"The cook mashes the beans for dinner.\" Mash ends in sh, so it needs -es. That proves Lia wrong. Naps, rings and cooks just add -s.",
            "like": [
              "SK-GUM2-9-S15"
            ]
          }
        ]
      }
    ]
  },
  similar: [
    {
      "id": "SK-GUM2-9-S01",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [],
      "prompt": "Tap the sentence where a verb is spelled wrong.",
      "options": [
        "Our neighbor mows his lawn each Friday.",
        "The chef sprinkles cheese on the pizza.",
        "My brother pitchs the tent each summer.",
        "Yesterday, Ana skated on the frozen pond.",
        "The toddler giggles at the pigeons."
      ],
      "answer": [
        2
      ],
      "pick": 1,
      "clue": "Pick out the verb in every sentence and think of the plain verb.",
      "hints": [
        "Pick out the verb in every sentence and think of the plain verb.",
        "Compare the last letters of each plain verb with the ending that was added.",
        "The sentence about the lawn has a verb that is spelled right. Think about the rest."
      ],
      "how": [
        "Check each verb against the last letters of its plain verb.",
        "Mows, sprinkles, skated and giggles all have endings that match their plain verbs.",
        "The answer is \"My brother pitchs the tent each summer.\" Pitch ends in ch, so it needs -es."
      ],
      "misconception": "A common mix-up is picking a sentence because it is short. Check every verb.",
      "why": "The answer is \"My brother pitchs the tent each summer.\" Pitch ends in ch, so it adds -es: pitches. The other sentences have verbs with the right endings.",
      "like": [
        "SK-GUM2-9-P5"
      ]
    },
    {
      "id": "SK-GUM2-9-S02",
      "type": "match",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [],
      "prompt": "Choose the group for every sentence, based on its verb in ( ).",
      "cols": [
        "Just -d",
        "Just -es",
        "Swap y for i, then -es"
      ],
      "rows": [
        {
          "text": "Long ago, the twins ___ a snack. (share)",
          "answer": 0
        },
        {
          "text": "On Mondays, Gran ___ me goodnight. (kiss)",
          "answer": 1
        },
        {
          "text": "These days, Dad ___ the jar. (empty)",
          "answer": 2
        },
        {
          "text": "Yesterday, we ___ up the hill. (hike)",
          "answer": 0
        },
        {
          "text": "On weekends, Rosa ___ on a star. (wish)",
          "answer": 1
        },
        {
          "text": "Each week, Dara ___ to her mom. (reply)",
          "answer": 2
        }
      ],
      "clue": "For each verb in ( ), think of how the plain verb ends.",
      "hints": [
        "For each verb in ( ), think of how the plain verb ends.",
        "An e at the end, an s, sh, ch, x or z at the end, and a consonant plus y at the end each get a different ending.",
        "Use words like Long ago to see which verbs tell about the past."
      ],
      "how": [
        "Check the last letters of every plain verb in ( ).",
        "Share and hike end in e. Kiss and wish end in ss and sh. Empty and reply end in a consonant and y.",
        "Put each sentence in the group that fits its verb."
      ],
      "misconception": "A common mix-up is sorting by the time word. The last letters of the verb decide the group.",
      "why": "Share and hike end in e, so they become shared and hiked. Kiss and wish end in ss and sh, so they become kisses and wishes. Empty and reply end in a consonant and y, so they become empties and replies.",
      "like": [
        "SK-GUM2-9-P4"
      ]
    },
    {
      "id": "SK-GUM2-9-S03",
      "type": "mc",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Pick the spelling that repairs the verb in line two of the farm story, with its reason.",
      "choices": [
        {
          "text": "latches, since verbs ending in ch take -es",
          "correct": true
        },
        {
          "text": "latchies, since verbs ending in ch take -ies"
        },
        {
          "text": "latchd, since every farm verb takes just -d"
        },
        {
          "text": "latchs, since every verb for one person takes just -s"
        }
      ],
      "clue": "Pick out the verb in sentence 2 that has an ending.",
      "hints": [
        "Pick out the verb in sentence 2 that has an ending.",
        "Look at how the plain verb latch ends.",
        "Look at the last two letters of latch. Think about the other choices."
      ],
      "how": [
        "The plain verb is latch. Its last two letters are ch.",
        "A verb that ends in ch adds -es when one person does the action now.",
        "The answer is \"latches, since verbs ending in ch take -es\"."
      ],
      "misconception": "A common mix-up is adding only -s to every verb. Verbs that end in ch need -es.",
      "why": "The answer is \"latches, since verbs ending in ch take -es\". Latch ends in ch, so it adds -es.",
      "like": [
        "SK-GUM2-9-C03"
      ]
    },
    {
      "id": "SK-GUM2-9-S04",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Which spelling belongs in sentence 5?",
      "text": "Luna {0} through the field with a heavy bucket.",
      "slots": [
        {
          "options": [
            "hurries",
            "hurrys",
            "hurryes"
          ],
          "answer": 0
        }
      ],
      "clue": "Name the plain verb, then check the letter just before its y.",
      "hints": [
        "Name the plain verb, then check the letter just before its y.",
        "Is that letter a vowel (a, e, i, o or u) or a consonant?",
        "Only adding -s after a consonant plus y breaks the rule. Look at the other choices."
      ],
      "how": [
        "Hurry is the plain verb, and r comes before its y.",
        "R is a consonant, so the y turns into i and -es follows.",
        "The answer is hurries."
      ],
      "misconception": "A common mix-up is adding only -s after a y. A consonant before the y means the y changes to i.",
      "why": "The answer is hurries. Hurry has an r, a consonant, before the y, so the y changes to i and -es is added.",
      "like": [
        "SK-GUM2-9-C04"
      ]
    },
    {
      "id": "SK-GUM2-9-S05",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [
        "p4"
      ],
      "prompt": "Fixing hurry changes a letter, but fixing mix does not. Why?",
      "choices": [
        {
          "text": "Hurry has a y after a consonant to swap out, while mix has no y to swap.",
          "correct": true
        },
        {
          "text": "Mix has a y after a consonant to swap out, while hurry has no y to swap."
        },
        {
          "text": "Hurry came first in the story, so it alone is allowed to lose a letter."
        },
        {
          "text": "Each word loses a letter, but mix loses a bigger one than hurry does."
        }
      ],
      "clue": "Name the plain verb in each of sentences 5 and 6.",
      "hints": [
        "Name the plain verb in each of sentences 5 and 6.",
        "Look at how each plain verb finishes.",
        "A word's place in the story does not change how its ending works. Think about the other choices."
      ],
      "how": [
        "Hurry finishes with r and y. Mix finishes with x.",
        "A consonant and y means the y changes to i. An x means -es is just added.",
        "The answer is \"Hurry has a y after a consonant to swap out, while mix has no y to swap.\""
      ],
      "misconception": "A common mix-up is treating all the fixes alike. The last letters of the plain verb decide the change.",
      "why": "The answer is \"Hurry has a y after a consonant to swap out, while mix has no y to swap.\" Hurry changes its y to i. Mix ends in x, so it just adds -es.",
      "like": [
        "SK-GUM2-9-C05"
      ]
    },
    {
      "id": "SK-GUM2-9-S06",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Tap the pair of sentences where a verb has the wrong ending.",
      "targets": [
        "p5:1:2",
        "p5:2:1",
        "p5:2:2",
        "p5:2:3",
        "p5:2:4"
      ],
      "answer": [
        "p5:1:2",
        "p5:2:3"
      ],
      "pick": 2,
      "clue": "Find the verb in each of sentences 2 to 6. Ask what its plain form ends in.",
      "hints": [
        "Find the verb in each of sentences 2 to 6. Ask what its plain form ends in.",
        "These sentences are about last spring. Check how each verb was changed.",
        "The sentence about Priya uses a verb that is spelled right. Think about the rest."
      ],
      "how": [
        "Take the verbs one sentence at a time and check each ending.",
        "Practiced, bowed, thanked and praised all have endings that match their plain verbs.",
        "In sentences 2 and 5, the verbs have the wrong ending."
      ],
      "misconception": "A common mix-up is trusting a verb because it looks long and careful. Check its ending against its plain form.",
      "why": "The answers are \"Mr. Park shapeed a shiny cardboard sword for the knight by hand.\" and \"The audience lovd every joke and clapped for a long time.\" Shape and love already end in e, so they just add -d: shaped and loved. Sentences 3, 4 and 6 are spelled correctly.",
      "like": [
        "SK-GUM2-9-C06"
      ]
    },
    {
      "id": "SK-GUM2-9-S07",
      "type": "ebsr",
      "points": 2,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Take both halves of this question in order.",
      "partA": {
        "prompt": "Which rule did the writer forget in sentence 7?",
        "choices": [
          {
            "text": "A verb already ending in e only takes -d.",
            "correct": true
          },
          {
            "text": "A verb whose last two letters are a consonant and y swaps the y for i."
          },
          {
            "text": "A verb telling about right now takes -s."
          },
          {
            "text": "A verb ending in e drops the e and takes -ing."
          }
        ]
      },
      "partB": {
        "prompt": "Pick the rewrite that fixes sentence 7.",
        "choices": [
          {
            "text": "Then the cast celebrated backstage with juice and cookies.",
            "correct": true
          },
          {
            "text": "Then the cast celebratd backstage with juice and cookies."
          },
          {
            "text": "Then the cast celebrates backstage with juice and cookies."
          },
          {
            "text": "Then the cast celebrateed backstage with juice and cookies."
          }
        ]
      },
      "clue": "Name the plain verb in sentence 7. Look at how it ends.",
      "hints": [
        "Name the plain verb in sentence 7. Look at how it ends.",
        "In the second half, read each rewrite and think about whether the story is in the past.",
        "Dropping the e and adding -ing changes the time the verb tells about. Think about the other choices."
      ],
      "how": [
        "Part A: the plain verb is celebrate, and it ends in e.",
        "Part B: the story is about last spring, so the verb needs a past ending.",
        "The answers are \"A verb already ending in e only takes -d.\" and \"Then the cast celebrated backstage with juice and cookies.\""
      ],
      "misconception": "A common mix-up is adding a whole -ed to a verb that already ends in e. Only -d is added.",
      "why": "Part A: \"A verb already ending in e only takes -d.\" Part B: \"Then the cast celebrated backstage with juice and cookies.\" Celebrates would not tell about the past.",
      "like": [
        "SK-GUM2-9-C07"
      ]
    },
    {
      "id": "SK-GUM2-9-S08",
      "type": "ms",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [],
      "prompt": "Two of these sentences use a verb with the proper ending. Which two?",
      "pick": 2,
      "choices": [
        {
          "text": "The girl munches popcorn on the roof after dark.",
          "correct": true
        },
        {
          "text": "My cousins raced along the dusty road in June.",
          "correct": true
        },
        {
          "text": "The teacher pushs the cart to the library each day."
        },
        {
          "text": "On Monday, the class glueed the paper onto a poster."
        },
        {
          "text": "The little puppy trys to climb the stairs by himself."
        }
      ],
      "clue": "Find the verb in each sentence. Think of its plain form and how it ends.",
      "hints": [
        "Find the verb in each sentence. Think of its plain form and how it ends.",
        "Check every sentence, including the ones that look right. Each plain verb needs the ending that fits the way it ends.",
        "Match each ending to the last letters of its plain verb, sentence by sentence."
      ],
      "how": [
        "Look at each plain verb: munch, race, push, glue and try.",
        "Munch ends in ch, so it adds -es. Race ends in e, so it just adds -d.",
        "Push needs -es, glue needs only -d, and try needs the y changed to i."
      ],
      "misconception": "A common mix-up is choosing a sentence because the verb looks familiar. Check the ending against the plain verb.",
      "why": "The answers are \"The girl munches popcorn on the roof after dark.\" and \"My cousins raced along the dusty road in June.\" Munch adds -es, and race just adds -d. Pushs, glueed and trys are misspelled.",
      "like": [
        "SK-GUM2-9-C08"
      ]
    },
    {
      "id": "SK-GUM2-9-S09",
      "type": "mc",
      "points": 1,
      "dok": 1,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [],
      "prompt": "Pick the spelling that fits this sentence. Yesterday, Kai ___ me about my hat.",
      "choices": [
        {
          "text": "teased",
          "correct": true
        },
        {
          "text": "teaseed"
        },
        {
          "text": "teasd"
        },
        {
          "text": "teases"
        }
      ],
      "clue": "Yesterday already happened. Look at how the plain verb tease ends.",
      "hints": [
        "Yesterday already happened. Look at how the plain verb tease ends.",
        "A verb with a final e needs only a short ending in the past.",
        "Teases tells about the present. Think about the other choices."
      ],
      "how": [
        "The sentence tells about the past, and tease ends in e.",
        "A final e means only -d is added.",
        "The answer is teased."
      ],
      "misconception": "A common mix-up is adding a whole -ed to a verb that ends in e. Only -d is added.",
      "why": "The answer is teased. Tease already ends in e, so only -d is added for the past. Teaseed has an extra e, teasd drops the e, and teases does not tell about the past.",
      "like": [
        "SK-GUM2-9-C09"
      ]
    },
    {
      "id": "SK-GUM2-9-S10",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [
        "p5"
      ],
      "prompt": "Rita crosses out the e in bowed and writes bowd. How should you answer?",
      "choices": [
        {
          "text": "Bowed is correct: bow lacks a final e, so a full -ed attaches.",
          "correct": true
        },
        {
          "text": "Bowd is better: a short ending saves space whenever a verb ends with a consonant."
        },
        {
          "text": "Bowes is better: bow ends with w, a letter that demands a plural-style ending."
        },
        {
          "text": "Neither works: the ending after bow should be a lone letter, never a pair."
        }
      ],
      "clue": "Think about whether every past verb is built the same way.",
      "hints": [
        "Think about whether every past verb is built the same way.",
        "Look at how bow ends, and whether it ends in e.",
        "A short ending does not always save space. Think about the other choices."
      ],
      "how": [
        "Bow ends in w.",
        "A verb that ends in e only takes -d, and bow does not end in e.",
        "The answer is \"Bowed is correct: bow lacks a final e, so a full -ed attaches.\""
      ],
      "misconception": "A common mix-up is using just -d for every verb. Only verbs that end in e take just -d.",
      "why": "The answer is \"Bowed is correct: bow lacks a final e, so a full -ed attaches.\" Bowd is not a word, and bowes uses a present ending.",
      "like": [
        "SK-GUM2-9-C10"
      ]
    },
    {
      "id": "SK-GUM2-9-S11",
      "type": "hottext",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Tap the pair in sentences 3 through 7 whose verbs fit their sentences.",
      "targets": [
        "p6:2:1",
        "p6:2:2",
        "p6:2:3",
        "p6:2:4",
        "p6:2:5"
      ],
      "answer": [
        "p6:2:2",
        "p6:2:4"
      ],
      "pick": 2,
      "clue": "Look at the verb in each of the five sentences and picture its plain form.",
      "hints": [
        "Look at the verb in each of the five sentences and picture its plain form.",
        "Ask whether each ending suits one person doing the action now.",
        "A sentence can also have a wrong word for one person. Look for that too."
      ],
      "how": [
        "Go sentence by sentence.",
        "Reaches and tries carry the endings their plain verbs need.",
        "Enjoyes, boxs and do do not match."
      ],
      "misconception": "A common mix-up is picking a sentence because it looks simple. Check each verb's ending.",
      "why": "The answers are \"Aunt Rose reaches the top shelf without a stool.\" and \"Pop tries a new tool every single week.\" Reach ends in ch, so it adds -es. Try ends in a consonant and y, so the y changes to i. Enjoyes, boxs and do are wrong.",
      "like": [
        "SK-GUM2-9-C11"
      ]
    },
    {
      "id": "SK-GUM2-9-S12",
      "type": "dropdown",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [
        "p6"
      ],
      "prompt": "Pick the right form of the verb in the line about Grandpa and his letters.",
      "text": "Grandpa {0} every letter from his old friends.",
      "slots": [
        {
          "options": [
            "enjoys",
            "enjoyes",
            "enjoies"
          ],
          "answer": 0
        }
      ],
      "clue": "Find the plain verb, and look at the two letters at its end.",
      "hints": [
        "Find the plain verb, and look at the two letters at its end.",
        "Does a vowel or a consonant sit in front of the y?",
        "Enjoyes keeps the y and adds -es. Think about the other choices."
      ],
      "how": [
        "Enjoy is the plain verb, and o comes before its y.",
        "O is a vowel, so the y stays and only -s is added.",
        "The answer is enjoys."
      ],
      "misconception": "A common mix-up is changing the y to i every time. A vowel before the y means the y stays.",
      "why": "The answer is enjoys. Enjoy has an o, a vowel, before the y, so the y stays and just -s is added.",
      "like": [
        "SK-GUM2-9-C12"
      ]
    },
    {
      "id": "SK-GUM2-9-S13",
      "type": "dropdown",
      "points": 2,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [],
      "prompt": "Fill each gap with the spelling that fits.",
      "text": "Each night, Mia {0} her bag to the door, and she {1} the cat's ears before bed.",
      "slots": [
        {
          "options": [
            "carries",
            "carrys",
            "carryes"
          ],
          "answer": 0
        },
        {
          "options": [
            "scratches",
            "scratchs",
            "scratchies"
          ],
          "answer": 0
        }
      ],
      "clue": "Each gap needs a verb that tells about one person now. Think of each plain verb.",
      "hints": [
        "Each gap needs a verb that tells about one person now. Think of each plain verb.",
        "The first plain verb is carry. The second ends in ch.",
        "Just adding -s after ch does not follow the rule. Look at the choices for the second gap."
      ],
      "how": [
        "Carry ends in a consonant and y, so the y changes to i. Scratch ends in ch, so it adds -es.",
        "The first gap changes a letter, and the second one does not.",
        "The answers are carries and scratches."
      ],
      "misconception": "A common mix-up is adding only -s to both verbs. Carry changes its y, and scratch needs -es.",
      "why": "The answers are carries and scratches. Carry has an r before the y, so the y changes to i and -es is added. Scratch ends in ch, so it adds -es.",
      "like": [
        "SK-GUM2-9-C13"
      ]
    },
    {
      "id": "SK-GUM2-9-S14",
      "type": "hottext",
      "points": 1,
      "dok": 2,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [],
      "prompt": "One of these sentences misspells its verb. Tap it.",
      "options": [
        "The girl buzzes the doorbell twice.",
        "My neighbor fries onions on every single Sunday.",
        "The kids dashs across the field at recess.",
        "In June, we baked bread for the fair.",
        "A turtle crosses the road very slowly."
      ],
      "answer": [
        2
      ],
      "pick": 1,
      "clue": "Find the verb in each sentence. Think of its plain form.",
      "hints": [
        "Find the verb in each sentence. Think of its plain form.",
        "Look at the last letters of each plain verb. Check that the ending matches.",
        "The sentence about the onions has a verb that is spelled right. Think about the rest."
      ],
      "how": [
        "Look at each verb and the last letters of its plain form.",
        "Buzzes, fries, baked and crosses all have endings that match their plain verbs.",
        "The answer is \"The kids dashs across the field at recess.\" Dash ends in sh, so it needs -es."
      ],
      "misconception": "A common mix-up is adding only -s after sh. Verbs that end in sh need -es.",
      "why": "The answer is \"The kids dashs across the field at recess.\" Dash ends in sh, so it adds -es: dashes. The other sentences have verbs with the right endings.",
      "like": [
        "SK-GUM2-9-C14"
      ]
    },
    {
      "id": "SK-GUM2-9-S15",
      "type": "mc",
      "points": 1,
      "dok": 3,
      "std": [
        "3.L.GC.1:R:form-and-use-verbs-by-adding-d-or-es"
      ],
      "passages": [],
      "prompt": "Rob claims that a verb for one person never needs more than -s. Which sentence proves him mistaken?",
      "choices": [
        {
          "text": "My sister polishes the car on Saturdays.",
          "correct": true
        },
        {
          "text": "The dog digs a deep hole by the fence."
        },
        {
          "text": "A bird sings in the tall tree each dawn."
        },
        {
          "text": "Mr. Lee walks to work every single day."
        }
      ],
      "clue": "To test a claim, look for an example that breaks it. Look at how each verb ends.",
      "hints": [
        "To test a claim, look for an example that breaks it. Look at how each verb ends.",
        "Think of the plain verb in every sentence and how it ends.",
        "Rob's claim is about the ending added to a verb. Think about the other choices."
      ],
      "how": [
        "Rob says every verb just adds -s. Look for a verb that needs more.",
        "Dig, sing and walk just add -s.",
        "The answer is \"My sister polishes the car on Saturdays.\""
      ],
      "misconception": "A common mix-up is thinking every verb adds only -s. Verbs that end in ch, sh, s, x or z need -es.",
      "why": "The answer is \"My sister polishes the car on Saturdays.\" Polish ends in sh, so it needs -es. That proves Rob mistaken. Digs, sings and walks just add -s.",
      "like": [
        "SK-GUM2-9-C15"
      ]
    }
  ],
  addons: {
    "SK-GUM2-9-P1": {
      "hints": [
        "Think of the plain verb. Then look at the letter in front of the y.",
        "Decide whether that letter is a vowel (a, e, i, o or u) or a consonant.",
        "Just adding -s after a consonant and a y does not follow the rule. Look at the other choices."
      ],
      "how": [
        "The plain verb is cry. The letter in front of the y is r.",
        "R is a consonant, so the y changes to i and -es is added.",
        "The answer is cries."
      ],
      "misconception": "A common mix-up is adding only -s after a y. A consonant before the y means the y changes to i."
    },
    "SK-GUM2-9-P2": {
      "hints": [
        "Yesterday already happened. Look at how the plain verb vote ends.",
        "A verb that ends in e needs a short ending for the past.",
        "Votes tells about the present. Think about the other choices."
      ],
      "how": [
        "Yesterday tells about the past, and vote ends in e.",
        "Only -d is added when a verb ends in e.",
        "The answer is voted."
      ],
      "misconception": "A common mix-up is adding a whole -ed to a verb that ends in e. Only -d is added."
    },
    "SK-GUM2-9-P3": {
      "hints": [
        "Find the verb in each sentence. Think of its plain form.",
        "Look at how fix ends, and think about what ending that needs.",
        "Fixies does not follow the rule for words that end in x. Look at the other choices."
      ],
      "how": [
        "The plain verb is fix, and it ends in x.",
        "A verb that ends in x adds -es.",
        "The answer is \"Kai fixes his bike chain with a small tool.\""
      ],
      "misconception": "A common mix-up is adding only -s after x. Verbs that end in x need -es."
    },
    "SK-GUM2-9-P4": {
      "hints": [
        "Think of each plain verb in ( ) and how it ends.",
        "An e at the end, an x or z at the end, and a consonant plus y at the end each get a different ending.",
        "Use the words Last night and Every morning to see which verbs tell about the past."
      ],
      "how": [
        "Look at the last letters of each plain verb.",
        "Save and practice end in e. Mix and buzz end in x and z. Hurry and carry end in a consonant and y.",
        "Place each sentence in the group that matches its verb."
      ],
      "misconception": "A common mix-up is sorting by the time word. The last letters of the verb decide the group."
    },
    "SK-GUM2-9-P5": {
      "hints": [
        "Find the verb in each sentence. Think of its plain form.",
        "Look at the last letters of each plain verb. Check that the ending matches.",
        "The sentence about the goat and the fence has a verb that is spelled right. Think about the rest."
      ],
      "how": [
        "Look at each verb and how its plain form ends.",
        "Rides, nibbled, writes and closed all have endings that match their plain verbs.",
        "The answer is \"Our teacher teachs us a new word each day.\" Teach ends in ch, so it needs -es."
      ],
      "misconception": "A common mix-up is adding only -s after ch. Verbs that end in ch need -es."
    }
  },
  /* B7b:core:end */
  test: [
    { id: "SK-GUM2-9-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Every Saturday, Mr. Quinn {0} the trophies in the front hall.",
      slots: [ { options: ["polishs", "polishes", "polishies"], answer: 1 } ],
      clue: "Look at how polish ends. Which ending do verbs with those last letters get?",
      why: "The answer is polishes. Polish ends in sh, so it adds -es." },
    { id: "SK-GUM2-9-T2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "This morning, Ella {0} a picture of her cat.",
      slots: [ { options: ["traceed", "traced", "tracd"], answer: 1 } ],
      clue: "This morning already happened. Trace ends in e. What do you add?",
      why: "The answer is traced. Trace already ends in e, so you just add -d for the past." },
    { id: "SK-GUM2-9-T3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence spells the verb correctly?",
      choices: [
        { text: "The puppy scratches at the back door.", correct: true },
        { text: "The puppy scratchs at the back door." },
        { text: "The puppy scratchies at the back door." },
        { text: "The puppy scratchees at the back door." }
      ],
      clue: "Look at the last two letters of scratch. What ending do verbs with those letters get?",
      why: "The answer is \"The puppy scratches at the back door.\" Scratch ends in ch, so it adds -es: scratches." },
    { id: "SK-GUM2-9-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO sentences spell the verb correctly?",
      choices: [
        { text: "My cousin copies the spelling words.", correct: true },
        { text: "My cousin copys the spelling words." },
        { text: "We danced at the party all night.", correct: true },
        { text: "We danceed at the party all night." },
        { text: "The kite flys high above the beach." }
      ],
      clue: "For each verb, think of its plain form and look at how it ends. Then check the ending that was added.",
      why: "The answers are \"My cousin copies the spelling words.\" and \"We danced at the party all night.\" Copy ends in a consonant and y, so it becomes copies. Dance ends in e, so it just adds -d. Copys, danceed and flys are misspelled; fly should be flies." },
    { id: "SK-GUM2-9-T5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentences.",
      text: "Last night, Ana {0} the shelf with her books. Now she {1} for her favorite one.",
      slots: [
        { options: ["lined", "lineed", "linned"], answer: 0 },
        { options: ["reachs", "reaches", "reachies"], answer: 1 }
      ],
      clue: "Look at how line and reach end. Each one gets a different ending.",
      why: "The answers are lined and reaches. Line ends in e, so it just adds -d for the past. Reach ends in ch, so it adds -es." }
  ]
});

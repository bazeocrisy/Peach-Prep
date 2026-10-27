/* Lessons: 3-5.L.GC.1 Grammar, usage & mechanics, grade 3 Introduce (I) rows, part 5. Not assessed on the Milestones. Schema: docs/SPEC.md §8. */

/* 1. Capitalization in abbreviations, proper adjectives and formal titles */
PP.addLesson({
  code: "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations",
  title: "Capital letters in Mr., Dr., St. and words like American",
  teach: {
    big: "Titles like Mr. and Dr., short forms of names like Jan. and St., and describing words made from place names like American all start with a capital letter.",
    points: [
      "A title right before a person's name starts with a capital letter: Mr. Cole, Dr. Shah, Mayor Green. The short titles Mr., Mrs., Ms. and Dr. end with a period. When no name comes after it, a word like mayor or doctor usually stays lowercase.",
      "An abbreviation is a short way to write a word. We use short forms of days, months and streets in addresses, dates and schedules, not in ordinary sentences. If the long word is a name, the short form gets a capital too: Mon. for Monday, Jan. for January, Pine St. for Pine Street, Lake Rd. for Lake Road, Elm Blvd. for Elm Boulevard.",
      "Some describing words are made from names, like the names of places. Mexico is a place, and Mexican is a describing word: Mexican food. These words start with a capital: an American flag, a Chinese kite."
    ],
    words: [
      { term: "abbreviation", means: "a short way to write a word, like Dr. for Doctor" },
      { term: "title", means: "a word like Mr., Dr. or Mayor that comes before a person's name" }
    ],
    example: {
      label: "Example",
      lines: [
        "Dr. Moore checked my teeth.",
        "The mayor ate Mexican food at our school fair.",
        "Fair schedule: Mon., Jan. 12, at 14 Elm St."
      ],
      note: "Dr. comes before a name, so it has a capital and a period. Mexican comes from Mexico, so it has a capital. Mayor stays lowercase because no name comes after it. In the schedule, Mon., Jan. and St. are short for names, so they have capitals."
    },
    tip: "When a question asks you to find the mistake, check every title, every short form and every word made from the name of a place. Ask: Does it need a capital?"
  },
  learn: [
    {
      show: ["Our class wrote a thank-you note to dr. Rivera, and the doctor wrote back."],
      ask: "Which word needs a capital letter, and which word stays lowercase?",
      steps: [
        "Look for a title in front of a person's name.",
        "The word dr. comes right before the name Rivera, so it is a title. A title before a name starts with a capital letter.",
        "The word doctor comes later, and no name follows it. It names a job, so it stays lowercase."
      ],
      answer: "The word dr. should be Dr.: \"Our class wrote a thank-you note to Dr. Rivera, and the doctor wrote back.\""
    },
    {
      show: ["Grandma showed us how to fold a japanese paper crane."],
      ask: "Which word needs a capital letter?",
      steps: [
        "Find the describing words that tell what kind. Paper and japanese tell what kind of crane.",
        "Ask: Is either word made from the name of a place?",
        "Japanese comes from Japan, the name of a country, so it needs a capital."
      ],
      answer: "The word japanese should be Japanese: \"Grandma showed us how to fold a Japanese paper crane.\""
    },
    {
      show: ["The picnic is on tues., sept. 8, at 9 Rose rd."],
      ask: "Which short forms need capital letters?",
      steps: [
        "Find the short forms. Tues. is short for Tuesday, sept. is short for September, and rd. is short for Road.",
        "Ask: Is each long word a name? Tuesday and September are names, and Road is part of the street name Rose Road.",
        "If the long word is a name, the short form gets a capital too."
      ],
      answer: "All three need capitals: \"The picnic is on Tues., Sept. 8, at 9 Rose Rd.\""
    }
  ],
  parent: "When you see street signs, menus or mail, point out short forms like Dr., St. and Ave. and words like Mexican or Korean. Ask your child why each one starts with a capital letter.",
  passages: [
    /* B8:passages:start */
    {
      id: "p1",
      title: "The Book Fair",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our school held a book fair on sat., Oct. 17, in the gym.",
          "(2) At the door, principal Hale cut the ribbon and welcomed every family.",
          "(3) The tables were full of books about space, sharks and soccer."
        ],
        [
          "(4) My friend Dev found a peruvian folk tale with bright pictures.",
          "(5) His mom, Ms. Kapoor, helped him count his money at the register.",
          "(6) A helper near the door sold bookmarks and pencils for one dollar."
        ],
        [
          "(7) The leftover books went to the library on Birch Ave. for the little kids.",
          "(8) The principal thanked everyone who stopped by and bought a book.",
          "(9) We raised enough money for forty new books and two shelves.",
          "(10) I hope the fair comes back again next year."
        ]
      ]
    },
    {
      id: "p2",
      title: "Clean-Up Day on Our Block",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our block held a clean-up day on Sun., Nov. 8, after lunch.",
          "(2) Before we began, Mayor Ortiz sent a note to thank every neighbor who helped.",
          "(3) Next, officer Greer parked by the curb and passed out bright safety vests.",
          "(4) Mr. Pruitt handed out gloves and trash bags at the corner."
        ],
        [
          "(5) We picked up cans and paper along Cedar rd. until noon.",
          "(6) A woman from the Nigerian bakery brought warm buns for everyone.",
          "(7) The mayor said that clean streets make a proud town."
        ],
        [
          "(8) By evening, a jamaican band played happy music in the park.",
          "(9) We filled thirty bags and cleaned every ditch on our block.",
          "(10) I hope our block holds another clean-up day soon."
        ]
      ]
    },
    {
      id: "p3",
      title: "Our Soccer Season",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our spring soccer season began on a sunny Saturday in March.",
          "(2) Coach Dawson gave every player a bright yellow shirt.",
          "(3) We practice twice a week, and our team is called the Hawks."
        ],
        [
          "(4) At the first game, a Swedish player on the other team scored.",
          "(5) Ms. Okoro, the referee, blew her whistle at halftime.",
          "(6) At halftime, the Coach told us to pass the ball more."
        ],
        [
          "(7) In the second half, our goalie made three big saves.",
          "(8) We lost the game, but we cheered for both teams.",
          "(9) Afterward, our families took us out for ice cream on Pecan St.",
          "(10) I cannot wait for our next game on sat., Mar. 13."
        ]
      ]
    },
    {
      id: "p4",
      title: "Garden Day",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class built a vegetable garden next to the gym on fri., Apr. 9.",
          "(2) First, nurse Alba showed us how to wash our hands after digging.",
          "(3) Mr. Lang brought bags of soil and small tools in his truck."
        ],
        [
          "(4) We watered every row and gave each plant a small sign.",
          "(5) Our teacher, Mrs. Diaz, helped us measure the rows with a string.",
          "(6) Kai planted seeds for a haitian pepper that grows very hot."
        ],
        [
          "(7) We mailed a thank-you card to the garden shop on Cole St.",
          "(8) The principal said the garden will feed our whole lunch room.",
          "(9) Every day, two helpers will check the plants for bugs.",
          "(10) I hope we pick our first tomatoes before summer break."
        ]
      ]
    },
    {
      id: "p5",
      title: "Library Night",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our town library held a reading night on Wed., Dec. 2, for every family.",
          "(2) After dinner, Chief Dunn of the fire station told us a funny tale about a brave dog.",
          "(3) Then sheriff Moss helped us find the best picture books on the top shelf.",
          "(4) Ms. Reyes handed out free bookmarks at the front desk."
        ],
        [
          "(5) The line of cars stretched all the way down Linden rd.",
          "(6) A man from the Ethiopian cafe brought hot tea and snacks.",
          "(7) The chief said that stories help people feel close to each other."
        ],
        [
          "(8) Later, an indian dancer told us a tale using only her hands.",
          "(9) We stayed until the library closed and the lights went out.",
          "(10) I want to come back again next month."
        ]
      ]
    },
    {
      id: "p6",
      title: "Swim Meet",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our swim team raced against another school on a warm day in June.",
          "(2) Coach Lopez gave us a short talk before the first race.",
          "(3) We lined up on the deck, and the cool water looked bright blue."
        ],
        [
          "(4) A Colombian swimmer on the other team won the first race.",
          "(5) Mrs. Park, the judge, held a flag at the end of each lane.",
          "(6) After the relay, the Judge gave each winner a blue ribbon."
        ],
        [
          "(7) My brother swam the last lap and finished in third place.",
          "(8) Our team did not win, yet every swimmer heard loud claps from the fans.",
          "(9) Later, everyone ate lunch together at the park on Hill Ave.",
          "(10) Come cheer for us at the pool on sun., Aug. 15."
        ]
      ]
    }
    /* B8:passages:end */
  ],
  practice: [
    { id: "SK-GUM5-1-P1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "Our dentist, Dr. Patel, gave me a new toothbrush.", correct: true },
        { text: "We waved to mr. Brooks at the park." },
        { text: "My aunt cooked a mexican dish for dinner." },
        { text: "Our class met mayor Green at city hall." }
      ],
      clue: "Check each title in front of a name and each word that comes from the name of a place.",
      why: "The answer is \"Our dentist, Dr. Patel, gave me a new toothbrush.\" Dr. comes before a name, so it has a capital and a period. The others should say Mr. Brooks, Mexican (from Mexico) and Mayor Green." },
    { id: "SK-GUM5-1-P2", type: "dropdown", points: 2, dok: 1, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Our neighbor {0} Ruiz taught us to cook {1} rice and beans.",
      slots: [
        { options: ["mrs.", "Mrs.", "Mrs"], answer: 1 },
        { options: ["cuban", "Cuban", "Cuba"], answer: 1 }
      ],
      clue: "The first blank is a title before a name. Think about how it starts and how it ends. The second blank tells what kind of rice and beans.",
      why: "The answers are Mrs. and Cuban. Mrs. is a title before a name, so it needs a capital letter and a period. Cuban is a describing word made from Cuba, the name of a country, so it needs a capital. Cuba is the country's name, not a describing word." },
    { id: "SK-GUM5-1-P3", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the line that has an error.",
      options: [
        "Ms. Ito read us a story about a Korean kite festival.",
        "Library hours: Mon. to Sat.",
        "Our new address: 22 Peach ave.",
        "Captain Harris steered the boat across the lake.",
        "My cousin has an American flag on her porch."
      ],
      answer: [2], pick: 1,
      clue: "Read each short form and each title. If the long word is part of a name, the short form needs a capital too.",
      why: "The error is in \"Our new address: 22 Peach ave.\" Peach Avenue is the name of a street, so the short form needs a capital: Peach Ave." },
    { id: "SK-GUM5-1-P4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which word in the sentence needs a capital letter?",
      stem: "My uncle took our family to an italian restaurant downtown.",
      choices: [
        { text: "italian", correct: true },
        { text: "family" },
        { text: "restaurant" },
        { text: "downtown" }
      ],
      clue: "Check each word. Is it a title before a name, or a word made from the name of a place?",
      why: "The answer is italian. It comes from Italy, the name of a country, so it should be Italian. Family, restaurant and downtown are not names, titles or words made from names." },
    { id: "SK-GUM5-1-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does the word in each row need a capital letter? Match each one.",
      cols: ["Needs a capital", "Stays lowercase"],
      rows: [
        { text: "president, in \"We read about president Lincoln.\"", answer: 0 },
        { text: "doctor, in \"The doctor said I was healthy.\"", answer: 1 },
        { text: "spanish, in \"We sang a spanish song.\"", answer: 0 },
        { text: "street, in \"We live on a busy street.\"", answer: 1 }
      ],
      clue: "Ask two questions. Is the word a title right before a name? Is it made from the name of a place?",
      why: "President needs a capital because it comes right before the name Lincoln. Spanish needs a capital because it comes from Spain. Doctor and street stay lowercase because they are not names and no name comes after them." }
  ],
  /* B8:core:start */
  /* ---------- Expansion 2026-10-22, batch B8 (GUM Introduce/Continue) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test or testB.
     Author log: docs/expansion-2026-10-22/batches/B8b-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          { ref: "SK-GUM5-1-P3" },
          { ref: "SK-GUM5-1-P5" },
          {
            id: "SK-GUM5-1-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: ["p1"],
            prompt: "Sentence 2 of the draft has a title that is written wrongly. Choose the words that fix it.",
            text: "At the door, {0} cut the ribbon and welcomed every family.",
            slots: [
              {
                options: ["principal Hale", "Principal hale", "Principal Hale"],
                answer: 2
              }
            ],
            clue: "A title that comes right before a person's name starts with a capital letter. Check the title and the name.",
            hints: [
              "A title that comes right before a person's name starts with a capital letter. Check the title and the name.",
              "Say each choice at the start of the sentence. Check every word in it.",
              "Principal hale gives the title a capital but leaves the name small, and a name always starts with a capital. Decide between the other two."
            ],
            how: [
              "Find the title in sentence 2. Principal comes right before the name Hale.",
              "A title before a name needs a capital letter, and so does the name.",
              "The answer is Principal Hale."
            ],
            misconception: "A common mix-up is keeping the title small because principal is an everyday word. When it comes right before a name, it is part of the name.",
            why: "The answer is Principal Hale. Principal comes right before the name Hale, so it is a title and starts with a capital letter. The name Hale starts with a capital too. The other choices leave one of the two words small."
          },
          {
            id: "SK-GUM5-1-C04",
            type: "mc",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: ["p1"],
            prompt: "What is the correct way to write the day and the month in sentence 1 of the draft?",
            choices: [
              { text: "sat., Oct. 17" },
              { text: "Sat., Oct. 17", correct: true },
              { text: "Sat., oct. 17" },
              { text: "sat., oct. 17" }
            ],
            clue: "Say the long word each short form stands for. If the long word is a name, the short form gets a capital letter too.",
            hints: [
              "Say the long word each short form stands for. If the long word is a name, the short form gets a capital letter too.",
              "Check the short form of the day and the short form of the month, one at a time.",
              "One choice leaves both short forms small, and both of them stand for names. Decide among the other three."
            ],
            how: [
              "Say the long words: sat. is short for Saturday, and Oct. is short for October.",
              "Saturday and October are names, so both short forms need capital letters.",
              "The answer is Sat., Oct. 17."
            ],
            misconception: "A common mix-up is fixing only one short form. Both the day and the month are names, so both get a capital.",
            why: "The answer is Sat., Oct. 17. Saturday and October are names, so the short forms Sat. and Oct. both start with a capital letter. The other choices leave one or both short forms small."
          },
          {
            id: "SK-GUM5-1-C05",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Which word in sentence 4 of the draft needs a capital letter?",
              choices: [
                { text: "folk" },
                { text: "tale" },
                { text: "peruvian", correct: true },
                { text: "pictures" }
              ]
            },
            partB: {
              prompt: "Why does the word in Part A need a capital letter?",
              choices: [
                { text: "Short forms of days, months and streets start with capitals." },
                { text: "Words made from a country's name start with capitals.", correct: true },
                { text: "The names of friends and classmates start with capitals." },
                { text: "Titles right before a person's name start with capitals." }
              ]
            },
            clue: "Ask what each word in the sentence does. Is it made from the name of a place? Then ask why that matters.",
            hints: [
              "Ask what each word in the sentence does. Is it made from the name of a place? Then ask why that matters.",
              "Read sentence 4 and ask about each word. For Part B, think about which rule from Learn It the word follows.",
              "In Part A, a tale is an everyday thing, not a name or a title. Decide among the other three."
            ],
            how: [
              "Part A: read sentence 4 and check each word. Peruvian tells what kind of folk tale, and it comes from Peru.",
              "Peru is the name of a country, so a describing word made from it starts with a capital letter.",
              "Part A answer: peruvian.",
              "Part B answer: \"Words made from a country's name start with capitals.\""
            ],
            misconception: "A common mix-up is keeping a describing word small because it is not a name itself. A word made from a place name still gets a capital.",
            why: "Part A: peruvian. Part B: \"Words made from a country's name start with capitals.\" Peruvian is a describing word made from a place name, so it starts with a capital letter: Peruvian. It is not a title and not a person's name."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM5-1-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: ["p2"],
            prompt: "Look at sentences 2 through 6 of the draft. Select the TWO sentences that have a word that needs a capital letter.",
            targets: ["p2:1:2", "p2:1:3", "p2:1:4", "p2:2:1", "p2:2:2"],
            answer: ["p2:1:3", "p2:2:1"],
            pick: 2,
            clue: "Check each title, each short form and each describing word made from a place name. Ask whether every capital letter is there.",
            hints: [
              "Check each title, each short form and each describing word made from a place name. Ask whether every capital letter is there.",
              "Read the five sentences one at a time. Pick TWO.",
              "In sentence 6, the word made from a place name already has its capital letter. Check the other four."
            ],
            how: [
              "Read each sentence and look for titles, short forms and words made from place names.",
              "Sentence 3 has officer right before the name Greer, so it needs a capital: Officer Greer.",
              "Sentence 5 has Cedar rd. Road is part of a street name, so its short form needs a capital: Cedar Rd.",
              "Mayor Ortiz, Mr. Pruitt and Nigerian already have their capitals."
            ],
            misconception: "A common mix-up is picking a sentence just because it has a title or a short form. Check whether the capital letter is already there.",
            why: "The answers are sentence 3 (officer Greer) and sentence 5 (Cedar rd.). Officer comes right before a name, so it needs a capital. Rd. is the short form of part of a street name, so it needs a capital too. The other three sentences already have the capitals they need."
          },
          {
            id: "SK-GUM5-1-C07",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: [],
            prompt: "Choose the TWO sentences that use capital letters correctly.",
            pick: 2,
            choices: [
              { text: "My neighbor plays an egyptian drum at night." },
              { text: "We tasted Kenyan tea at the school fair.", correct: true },
              { text: "Meet me at 5 Fox blvd. before noon." },
              { text: "Judge Ramos spoke to our class about rules.", correct: true },
              { text: "Our Principal read us a poem at noon." }
            ],
            clue: "Check each sentence for a title, a short form and a describing word made from a place name. Ask whether each capital letter is right.",
            hints: [
              "Check each sentence for a title, a short form and a describing word made from a place name. Ask whether each capital letter is right.",
              "Pick TWO. In some sentences a capital is missing, and in one a capital does not belong.",
              "In the sentence with Principal, no name comes right after the title. Decide about the other four."
            ],
            how: [
              "Check the titles, short forms and place-name words in each sentence.",
              "Kenyan comes from Kenya, so \"We tasted Kenyan tea at the school fair.\" is right.",
              "Judge comes right before the name Ramos, so \"Judge Ramos spoke to our class about rules.\" is right.",
              "The other three are not right: egyptian and blvd. need capitals, and Principal has no name after it."
            ],
            misconception: "A common mix-up is thinking every title needs a capital letter. A title stays small when no name comes right after it.",
            why: "The answers are \"We tasted Kenyan tea at the school fair.\" and \"Judge Ramos spoke to our class about rules.\" Kenyan is made from a country name, and Judge comes right before a name. The others should say Egyptian, Fox Blvd. and our principal."
          },
          {
            id: "SK-GUM5-1-C08",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: [],
            prompt: "Is the day, month or street short form written correctly? Match each sentence.",
            cols: ["Written correctly", "Needs a capital letter"],
            rows: [
              { text: "The class play is on Wed., Dec. 9.", answer: 0 },
              { text: "Please mail the card to 17 Hill st.", answer: 1 },
              { text: "Our trip home is on sun., Jan. 10.", answer: 1 },
              { text: "The fair is held on Oak Ave. in town.", answer: 0 }
            ],
            clue: "Say the long word each short form stands for. If the long word is a name, its short form needs a capital letter.",
            hints: [
              "Say the long word each short form stands for. If the long word is a name, its short form needs a capital letter.",
              "Check each sentence one at a time. Look at the day and month short forms and at the street short forms.",
              "Wed. and Dec. stand for Wednesday and December, and both already have capitals. Decide about the other rows."
            ],
            how: [
              "Say the long word for each short form: Wed. is Wednesday, st. is Street, sun. is Sunday and Ave. is Avenue.",
              "Wednesday, December, Street, Sunday and Avenue are all names or parts of names, so their short forms need capitals.",
              "Wed., Dec. and Oak Ave. already have capitals. The sentences with hill st. and sun. do not."
            ],
            misconception: "A common mix-up is thinking a short form is an ordinary word, so it can stay small. If the long word is a name, the short form needs a capital.",
            why: "The sentences with Wed., Dec. and Oak Ave. are written correctly. The sentences with Hill st. and sun. need capital letters, because Street and Sunday are names. The short forms should be Hill St. and Sun."
          },
          {
            id: "SK-GUM5-1-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: ["p2"],
            prompt: "In the draft, sentence 2 says Mayor Ortiz, and sentence 7 says the mayor. Why does mayor have a capital letter in one sentence and not the other?",
            choices: [
              { text: "Mayor has a capital in sentence 2 because it comes in the first paragraph, and later ones stay small." },
              { text: "Mayor always needs a capital letter when it names the person who runs the town." },
              { text: "Sentence 2 is the one that is wrong, because a title needs a capital only at the start of a sentence." },
              {
                text: "Mayor gets a capital letter when a name comes right after it and stays small when it stands alone.",
                correct: true
              }
            ],
            clue: "Compare how the word mayor is used in the two sentences. Ask what is different about the words around it.",
            hints: [
              "Compare how the word mayor is used in the two sentences. Ask what is different about the words around it.",
              "Reread sentence 2 and sentence 7 side by side. Look for every difference in how mayor is used.",
              "Sentence 2 is not a mistake, so the answer cannot say it is wrong. Check the other choices."
            ],
            how: [
              "Read sentence 2: Mayor comes right before the name Ortiz, so it is a title.",
              "Read sentence 7: the mayor has no name after it, so it is just a word for a job.",
              "The answer is \"Mayor gets a capital letter when a name comes right after it and stays small when it stands alone.\""
            ],
            misconception: "A common mix-up is thinking a title needs a capital letter every time. It needs one only when a name comes right after it.",
            why: "The answer is \"Mayor gets a capital letter when a name comes right after it and stays small when it stands alone.\" In sentence 2, Mayor Ortiz is a title and a name. In sentence 7, the mayor names a job and no name follows. Both sentences are correct."
          },
          {
            id: "SK-GUM5-1-C10",
            type: "dropdown",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: ["p2"],
            prompt: "Sentence 8 of the draft has a word that is written wrongly. Choose the word that fixes it.",
            text: "By evening, a {0} band played happy music in the park.",
            slots: [
              {
                options: ["jamaican", "Jamaica", "Jamaican"],
                answer: 2
              }
            ],
            clue: "Ask whether the word tells what kind of band and is made from the name of a place.",
            hints: [
              "Ask whether the word tells what kind of band and is made from the name of a place.",
              "Say each choice in the blank. Think about how the word is used in the sentence.",
              "Jamaica is the name of the place, but it does not tell what kind of band. Decide between the other two."
            ],
            how: [
              "Read the sentence. The blank tells what kind of band played.",
              "Jamaica is the name of a country, but a describing word made from it is Jamaican.",
              "A describing word made from a place name starts with a capital letter, so the answer is Jamaican."
            ],
            misconception: "A common mix-up is leaving the word small because it only describes the band. A describing word from a place name still gets a capital.",
            why: "The answer is Jamaican. It tells what kind of band played, and it is made from Jamaica, the name of a country. A describing word made from a place name starts with a capital letter. Jamaica is the place itself."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM5-1-C11",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: ["p3"],
            prompt: "Look at sentences 5 through 9 of the draft. Select the sentence that has a capital letter that does not belong.",
            targets: ["p3:2:2", "p3:2:3", "p3:3:1", "p3:3:2", "p3:3:3"],
            answer: ["p3:2:3"],
            pick: 1,
            clue: "Some words need capitals, and some words are capitalized by mistake. Ask whether each capital letter has a reason.",
            hints: [
              "Some words need capitals, and some words are capitalized by mistake. Ask whether each capital letter has a reason.",
              "Read the five sentences one at a time. Look at each capital letter that is not at the start of the sentence.",
              "In sentence 9, Pecan St. is part of a street name, so its capital letters belong. Check the other four."
            ],
            how: [
              "Read each sentence and find every capital letter that is not at the start.",
              "Ms. Okoro and Pecan St. are names, so those capitals belong. Goalie and teams are everyday words with no capitals.",
              "In sentence 6, the Coach has no name after it, so it is only a job word. It should be the coach."
            ],
            misconception: "A common mix-up is thinking a title always needs a capital letter. If no name comes right after it, the title stays small.",
            why: "The answer is sentence 6, \"At halftime, the Coach told us to pass the ball more.\" Coach has no name after it, so it should be small: the coach. In sentence 5, Ms. Okoro is a title and a name, and Pecan St. in sentence 9 is a street name, so those capitals belong."
          },
          {
            id: "SK-GUM5-1-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: ["p3"],
            prompt: "Sentence 10 of the draft has a short form that is written wrongly. Choose the words that fix it.",
            text: "I cannot wait for our next game on {0}.",
            slots: [
              {
                options: ["sat., Mar. 13", "Sat., mar. 13", "Sat., Mar. 13"],
                answer: 2
              }
            ],
            clue: "Say the long word each short form stands for. If the long word is a name, the short form gets a capital letter.",
            hints: [
              "Say the long word each short form stands for. If the long word is a name, the short form gets a capital letter.",
              "Say each choice in the blank. Check the short form of the day and the short form of the month.",
              "One choice fixes the day but leaves the month small, and a month is a name. Decide between the other two."
            ],
            how: [
              "The short forms are sat. for Saturday and Mar. for March.",
              "Both Saturday and March are names, so both short forms need capital letters.",
              "The answer is Sat., Mar. 13."
            ],
            misconception: "A common mix-up is fixing only the day. The month is a name too, so its short form also needs a capital.",
            why: "The answer is Sat., Mar. 13. Saturday and March are names, so both short forms start with a capital letter. In the draft, sat. is small, and Sat., mar. leaves the month small."
          },
          {
            id: "SK-GUM5-1-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: [],
            prompt: "Dan says, \"A title always starts with a capital letter.\" Choose the TWO sentences that show Dan is not right.",
            pick: 2,
            choices: [
              { text: "Our principal waved from the stage.", correct: true },
              { text: "Judge Ramos told us to listen." },
              { text: "The nurse handed each of us a sticker.", correct: true },
              { text: "Mrs. Diaz called our names." },
              { text: "Principal Hale waved from the stage." }
            ],
            clue: "A title keeps its capital in one kind of sentence, not another. Find where it stays small.",
            hints: [
              "A title keeps its capital in one kind of sentence, not another. Find where it stays small.",
              "Pick TWO. Check whether a name comes right after each title.",
              "Judge Ramos has a name right after the title. Decide about the other four."
            ],
            how: [
              "Find the title in each sentence. Then check whether a name comes right after it.",
              "In \"The nurse handed each of us a sticker.\" and \"Our principal waved from the stage.\" no name follows, so the titles stay small.",
              "Principal Hale, Judge Ramos and Mrs. Diaz each have a name after the title, so those capitals are right."
            ],
            misconception: "A common mix-up is picking the sentences with capitals because they show titles. Dan is wrong when a title stays small.",
            why: "The answers are \"The nurse handed each of us a sticker.\" and \"Our principal waved from the stage.\" In both, no name follows the title, so it stays small. That shows a title does not always start with a capital letter. The other three titles come right before names."
          },
          {
            id: "SK-GUM5-1-C14",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: [],
            prompt: "Finish the address on the envelope. Choose the words that give each blank the right capital letters.",
            text: "To: {0} Reed, 90 Palm {1}",
            slots: [
              {
                options: ["dr.", "Doc.", "Dr."],
                answer: 2
              },
              {
                options: ["ave.", "Av.", "Ave."],
                answer: 2
              }
            ],
            clue: "Ask which short forms stand for a title and for part of a street name. Then ask which way of writing each one is correct.",
            hints: [
              "Ask which short forms stand for a title and for part of a street name. Then ask which way of writing each one is correct.",
              "Choose one blank at a time. Read the short form out loud with its long word.",
              "Doc. is a nickname, not the short form of a title. Decide about the other choices."
            ],
            how: [
              "The first blank is a title before the name Reed. Doctor is shortened to Dr., with a capital and a period.",
              "The second blank is part of a street name. Avenue is shortened to Ave., with a capital and a period.",
              "The answers are Dr. and Ave."
            ],
            misconception: "A common mix-up is writing a short form with a small letter. A short form of a name or title keeps its capital.",
            why: "The answers are Dr. and Ave. Dr. is the short form of the title Doctor, and Ave. is the short form of Avenue, part of a street name. Both keep their capital letters. Doc. and Av. are not the standard short forms."
          },
          {
            id: "SK-GUM5-1-C15",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
            ],
            passages: [],
            prompt: "Ravi wrote, \"The vietnamese farmer showed us how rice grows.\" He says vietnamese can stay small because farmer is not a title. Is Ravi right?",
            choices: [
              { text: "No. Vietnamese is made from the name of a country, so it needs a capital letter.", correct: true },
              { text: "Yes. A describing word stays small when it comes before an everyday noun like farmer." },
              { text: "Yes. A describing word needs a capital only when it is the first word in a sentence." },
              { text: "No. Farmer is a title, so farmer needs the capital letter and vietnamese can stay small." }
            ],
            clue: "Ask what vietnamese does in the sentence and where the word comes from. Then ask whether the word farmer changes that.",
            hints: [
              "Ask what vietnamese does in the sentence and where the word comes from. Then ask whether the word farmer changes that.",
              "Read the sentence without the word farmer. Ask what kind of word vietnamese is.",
              "Farmer is an everyday word for a job, and no name follows it. Decide among the other choices."
            ],
            how: [
              "Ask what vietnamese tells about the farmer: where the farmer is from.",
              "Vietnamese is made from Vietnam, the name of a country, so it is a describing word from a place name.",
              "The answer is \"No. Vietnamese is made from the name of a country, so it needs a capital letter.\""
            ],
            misconception: "A common mix-up is thinking the next word decides the capital. A word made from a place name needs one wherever it appears.",
            why: "The answer is \"No. Vietnamese is made from the name of a country, so it needs a capital letter.\" It does not matter that farmer is an everyday word. Ravi should write Vietnamese. A describing word made from a place name always starts with a capital letter."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM5-1-S01",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: [],
      prompt: "Which line has a short form that is written wrongly?",
      options: [
        "Principal Cole will speak to the whole school at noon.",
        "Please send the package to 31 Larch rd. before Friday.",
        "Our class trip is on Fri., Feb. 12, at nine.",
        "The Swedish choir sang two songs after lunch.",
        "Our new neighbor, Dr. Abbott, grows peppers in the yard."
      ],
      answer: [1],
      pick: 1,
      clue: "Ask which words are short forms of names. If the long word is a name, its short form needs a capital letter.",
      hints: [
        "Ask which words are short forms of names. If the long word is a name, its short form needs a capital letter.",
        "Read the five lines one at a time. Pick ONE line.",
        "Fri. and Feb. stand for names, and in one line both have capitals. Check the other four."
      ],
      how: [
        "Read each line and look for short forms of names.",
        "Fri. and Feb. already have capitals, and Dr. Abbott does too.",
        "In the line with rd., Road is part of the street name Larch Road, so the short form needs a capital: Larch Rd."
      ],
      misconception: "A common mix-up is thinking a short form is just an ordinary word. If the long word is a name, the short form needs a capital.",
      why: "The error is in \"Please send the package to 31 Larch rd. before Friday.\" Road is part of a street name, so its short form needs a capital: Larch Rd. The other lines already have the capitals they need.",
      like: ["SK-GUM5-1-P3"]
    },
    {
      id: "SK-GUM5-1-S02",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: [],
      prompt: "Each row shows one word inside its sentence. Which words must begin with a capital where they are used?",
      cols: ["Capital", "Small letter"],
      rows: [
        { text: "captain, in \"Everyone cheered for captain Ruiz.\"", answer: 0 },
        { text: "nurse, in \"The nurse took my temperature.\"", answer: 1 },
        { text: "filipino, in \"We tried a filipino dessert.\"", answer: 0 },
        { text: "lane, in \"Our house sits on a quiet lane.\"", answer: 1 }
      ],
      clue: "For each word, ask two things. Does it come right before a name? Is it made from the name of a place?",
      hints: [
        "For each word, ask two things. Does it come right before a name? Is it made from the name of a place?",
        "Do one row at a time. Look at the words next to the word, and at what it tells about.",
        "In the sentence with nurse, no name comes after it. Decide about the other rows."
      ],
      how: [
        "Ask about each word: is it a title before a name, or made from a place name?",
        "Captain comes right before the name Ruiz, and filipino is made from the Philippines.",
        "Nurse and lane are everyday words with no name after them, so they stay small."
      ],
      misconception: "A common mix-up is thinking every job word needs a capital. A title gets one only when a name comes right after it.",
      why: "Captain needs a capital because it comes right before the name Ruiz. Filipino needs a capital because it is made from the name of a country. Nurse and lane are everyday words, and no name follows them.",
      like: ["SK-GUM5-1-P5"]
    },
    {
      id: "SK-GUM5-1-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: ["p4"],
      prompt: "Pick the version of the nurse's title and name that is right.",
      text: "First, {0} showed us how to wash our hands after digging.",
      slots: [
        {
          options: ["Nurse alba", "nurse Alba", "Nurse Alba"],
          answer: 2
        }
      ],
      clue: "Find the title in front of the person's name. Ask whether the title and the name both begin the way a name should.",
      hints: [
        "Find the title in front of the person's name. Ask whether the title and the name both begin the way a name should.",
        "Say each choice after the word First and check the first letter of both words.",
        "Nurse alba gives the title a capital but leaves the person's name small. Decide between the other two."
      ],
      how: [
        "Look at sentence 2. Nurse comes right before the name Alba, so it is a title.",
        "A title before a name starts with a capital letter, and the name does too.",
        "The answer is Nurse Alba."
      ],
      misconception: "A common mix-up is fixing the title but forgetting the name. Both words in Nurse Alba start with capitals.",
      why: "The answer is Nurse Alba. Nurse comes right before the name Alba, so both words start with capital letters. The other choices leave the title or the name small.",
      like: ["SK-GUM5-1-C03"]
    },
    {
      id: "SK-GUM5-1-S04",
      type: "mc",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: ["p4"],
      prompt: "Which choice shows the date in sentence 1 written the way it should be?",
      choices: [
        { text: "fri., Apr. 9" },
        { text: "Fri., apr. 9" },
        { text: "Fri., Apr. 9", correct: true },
        { text: "fri., apr. 9" }
      ],
      clue: "Think of the long word for each short form. A short form of a name needs a capital letter, just like the long word.",
      hints: [
        "Think of the long word for each short form. A short form of a name needs a capital letter, just like the long word.",
        "Look at the short form of the day and the short form of the month, one at a time.",
        "One choice leaves both short forms in small letters, even though both come from names. Decide among the other three."
      ],
      how: [
        "Say the long words: fri. is Friday, and Apr. is April.",
        "Friday and April are names, so both short forms start with capital letters.",
        "The answer is Fri., Apr. 9."
      ],
      misconception: "A common mix-up is fixing one short form and leaving the other small. The day and the month are both names.",
      why: "The answer is Fri., Apr. 9. Friday and April are names, so their short forms both start with capital letters. The other choices leave one or both short forms small.",
      like: ["SK-GUM5-1-C04"]
    },
    {
      id: "SK-GUM5-1-S05",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: ["p4"],
      prompt: "Start with A, and finish with B.",
      partA: {
        prompt: "Sentence 6 has one word with a mistake. Pick it.",
        choices: [
          { text: "haitian", correct: true },
          { text: "planted" },
          { text: "pepper" },
          { text: "seeds" }
        ]
      },
      partB: {
        prompt: "Which reason explains that choice?",
        choices: [
          { text: "Because it comes ahead of a teacher's last name, as Dr. or Mr. would." },
          { text: "Because it shortens the word for one calendar day." },
          { text: "Because it names the gardener who planted these seeds." },
          { text: "Because it describes the pepper and comes from Haiti, a place.", correct: true }
        ]
      },
      clue: "Ask which word in the sentence tells what sort of something. Then ask where that word comes from.",
      hints: [
        "Ask which word in the sentence tells what sort of something. Then ask where that word comes from.",
        "Reread sentence 6 and ask about each word. For Part B, think about which Learn It rule the word follows.",
        "In Part A, planted is a verb that tells what Kai did. Decide among the other three."
      ],
      how: [
        "Part A: read sentence 6. Haitian tells what sort of pepper it is, and it comes from Haiti.",
        "Haiti is the name of a country, so a describing word made from it needs a capital letter.",
        "Part A answer: haitian.",
        "Part B answer: \"Because it describes the pepper and comes from Haiti, a place.\""
      ],
      misconception: "A common mix-up is leaving the word small because it sits in the middle of a sentence. Describing words made from place names always get capitals.",
      why: "Part A: haitian. Part B: \"Because it describes the pepper and comes from Haiti, a place.\" Haitian is made from a place name, so it starts with a capital letter: Haitian. It is not a teacher's name and not a title.",
      like: ["SK-GUM5-1-C05"]
    },
    {
      id: "SK-GUM5-1-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: ["p5"],
      prompt: "Read sentences 2 through 6 of the draft. Pick the TWO sentences where a capital letter is missing.",
      targets: ["p5:1:2", "p5:1:3", "p5:1:4", "p5:2:1", "p5:2:2"],
      answer: ["p5:1:3", "p5:2:1"],
      pick: 2,
      clue: "Look at each title before a name, each short form and each word made from a place name. Is every capital letter there?",
      hints: [
        "Look at each title before a name, each short form and each word made from a place name. Is every capital letter there?",
        "Go through the five sentences in order. Two of them are missing a capital.",
        "In sentence 4, Ms. Reyes already has her capital letter. Check the other four."
      ],
      how: [
        "Read each sentence and check its titles, short forms and place-name words.",
        "In sentence 3, sheriff comes right before the name Moss, so it needs a capital: Sheriff Moss.",
        "In sentence 5, rd. is short for Road in a street name, so it needs a capital: Linden Rd.",
        "Chief Dunn, Ms. Reyes and Ethiopian already have capitals."
      ],
      misconception: "A common mix-up is picking a sentence just because it has a title or a short form. Check whether the capital letter is already there.",
      why: "The answers are sentence 3 (sheriff Moss) and sentence 5 (Linden rd.). Sheriff comes right before a name, and Rd. is the short form of part of a street name, so both need capitals. The other three sentences already have the capitals they need.",
      like: ["SK-GUM5-1-C06"]
    },
    {
      id: "SK-GUM5-1-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: [],
      prompt: "Which TWO sentences have every capital letter in the right place?",
      pick: 2,
      choices: [
        { text: "Our neighbor bakes turkish bread on Saturday." },
        { text: "Captain Reyes taught us how to tie a strong knot.", correct: true },
        { text: "Please call dr. Lopez if your cough stays." },
        { text: "We thanked our Teacher for the fun trip." },
        { text: "We watched a Norwegian film about whales.", correct: true }
      ],
      clue: "Look at each title, short form and describing word from a place name. Ask whether each capital letter is right.",
      hints: [
        "Look at each title, short form and describing word from a place name. Ask whether each capital letter is right.",
        "Pick TWO. In some sentences a capital is missing, and in one a capital should be small.",
        "In the sentence with Teacher, no name comes right after the title. Decide about the other four."
      ],
      how: [
        "Check the titles, short forms and place-name words in each sentence.",
        "Captain comes right before the name Reyes, so \"Captain Reyes taught us how to tie a strong knot.\" is right.",
        "Norwegian is made from Norway, so \"We watched a Norwegian film about whales.\" is right.",
        "The others need dr. and turkish capitalized, and Teacher should be small."
      ],
      misconception: "A common mix-up is capitalizing every job word. A title gets a capital only when a name comes right after it.",
      why: "The answers are \"Captain Reyes taught us how to tie a strong knot.\" and \"We watched a Norwegian film about whales.\" Captain comes right before a name, and Norwegian is made from a country name. The others should say Dr. Lopez, Turkish and our teacher.",
      like: ["SK-GUM5-1-C07"]
    },
    {
      id: "SK-GUM5-1-S08",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: [],
      prompt: "Sort these sentences. Which ones have every short form capitalized, and which are still missing one?",
      cols: ["Capitals are right", "A capital is missing"],
      rows: [
        { text: "Bake sale: Fri., Feb. 12, in the gym.", answer: 0 },
        { text: "Send your reply to 20 Lake ave.", answer: 1 },
        { text: "Choir meets again on mon., Mar. 22.", answer: 1 },
        { text: "Our school stands on Grove Rd. beside the creek.", answer: 0 }
      ],
      clue: "Say the long word that each short form stands for. A short form of a name needs a capital, like the long word.",
      hints: [
        "Say the long word that each short form stands for. A short form of a name needs a capital, like the long word.",
        "Look at one sentence at a time. Check the short forms of days, months and streets.",
        "Fri. and Feb. stand for Friday and February, and both already have capitals. Decide about the other rows."
      ],
      how: [
        "Say the long word for each short form: Fri. is Friday, ave. is Avenue, mon. is Monday and Rd. is Road.",
        "Friday, Avenue, Monday, February and Road are names or parts of names, so their short forms need capitals.",
        "Fri., Feb. and Grove Rd. have capitals. The sentences with Lake ave. and mon. do not."
      ],
      misconception: "A common mix-up is thinking a short form is an ordinary word that can stay small. If the long word is a name, the short form needs a capital.",
      why: "The sentences with Fri., Feb. and Grove Rd. are written correctly. The sentences with Lake ave. and mon. need capital letters, because Avenue and Monday are names. They should say Lake Ave. and Mon.",
      like: ["SK-GUM5-1-C08"]
    },
    {
      id: "SK-GUM5-1-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: [],
      prompt: "Which pair of sentences shows one title used with a name and then used alone, with the capital letters right in both?",
      choices: [
        { text: "professor Lin spoke first. Then the professor asked a question." },
        { text: "Professor Lin spoke first. Then the Professor asked a question." },
        { text: "Professor Lin spoke first. Then the professor asked a question.", correct: true },
        { text: "professor Lin spoke first. Then the Professor asked a question." }
      ],
      clue: "Look at the title in each pair of sentences. Ask what comes right after it each time.",
      hints: [
        "Look at the title in each pair of sentences. Ask what comes right after it each time.",
        "Check the first sentence of a pair, then the second. Each one needs its own check.",
        "In one pair the title is small both times. Decide among the other three."
      ],
      how: [
        "Check the first sentence of each pair. A name comes right after the title, so the title needs a capital.",
        "Check the second sentence. No name follows the title there, so it stays small.",
        "The answer is \"Professor Lin spoke first. Then the professor asked a question.\""
      ],
      misconception: "A common mix-up is thinking a title needs a capital letter every time. It needs one only when a name comes right after it.",
      why: "The answer is \"Professor Lin spoke first. Then the professor asked a question.\" Professor comes right before the name Lin, so it has a capital. In the second sentence no name follows, so the professor stays small. The other pairs miss one of those two rules.",
      like: ["SK-GUM5-1-C09"]
    },
    {
      id: "SK-GUM5-1-S10",
      type: "dropdown",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: ["p5"],
      prompt: "Fix the mistake in sentence 8 by choosing the right word for the blank.",
      text: "Later, an {0} dancer told us a tale using only her hands.",
      slots: [
        {
          options: ["India", "Indian", "indian"],
          answer: 1
        }
      ],
      clue: "Ask whether the word tells what kind of dancer and comes from the name of a place.",
      hints: [
        "Ask whether the word tells what kind of dancer and comes from the name of a place.",
        "Say each choice in the blank and think about the job the word does.",
        "India is the place itself, but the sentence needs a word that describes the dancer. Decide between the other two."
      ],
      how: [
        "Read the sentence. The blank describes the dancer.",
        "India is a country, and a describing word made from it is Indian.",
        "A describing word made from a place name starts with a capital letter, so the answer is Indian."
      ],
      misconception: "A common mix-up is leaving the word small because it only describes the dancer. A describing word from a place name still gets a capital.",
      why: "The answer is Indian. It tells where the dancer is from, and it is made from India, the name of a country. A describing word made from a place name starts with a capital letter. India is the place itself.",
      like: ["SK-GUM5-1-C10"]
    },
    {
      id: "SK-GUM5-1-S11",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: ["p6"],
      prompt: "In sentences 5 to 9, one capital letter was added by mistake. Select that sentence.",
      targets: ["p6:2:2", "p6:2:3", "p6:3:1", "p6:3:2", "p6:3:3"],
      answer: ["p6:2:3"],
      pick: 1,
      clue: "Some capital letters are missing, and some are there by mistake. Ask whether each capital in the middle of a sentence has a reason.",
      hints: [
        "Some capital letters are missing, and some are there by mistake. Ask whether each capital in the middle of a sentence has a reason.",
        "Go through the five sentences one at a time. Look at every capital letter that is not the first letter of the sentence.",
        "In sentence 9, Hill Ave. is part of a street name, so its capitals have a reason. Check the other four."
      ],
      how: [
        "Read each sentence and find the capitals that are not at the start.",
        "Mrs. Park and Hill Ave. are names, so their capitals belong. The words place, brother and claps are everyday words with no capitals.",
        "In sentence 6, the Judge has no name after it, so it only names a job. It should be the judge."
      ],
      misconception: "A common mix-up is thinking a job word always needs a capital. If no name comes right after the title, it stays small.",
      why: "The answer is sentence 6, \"After the relay, the Judge gave each winner a blue ribbon.\" Judge has no name after it, so it should be small: the judge. In sentence 5, Mrs. Park is a title and a name, and Hill Ave. in sentence 9 is a street name.",
      like: ["SK-GUM5-1-C11"]
    },
    {
      id: "SK-GUM5-1-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: ["p6"],
      prompt: "Which version of the date in sentence 10 is written correctly?",
      text: "Come cheer for us at the pool on {0}.",
      slots: [
        {
          options: ["Sun., aug. 15", "sun., Aug. 15", "Sun., Aug. 15"],
          answer: 2
        }
      ],
      clue: "Say the long word that each short form stands for. If it is a name, the short form needs a capital letter.",
      hints: [
        "Say the long word that each short form stands for. If it is a name, the short form needs a capital letter.",
        "Say each choice in the blank. Check the short form of the day and the short form of the month.",
        "One choice fixes the day but leaves the month small, and a month is a name. Decide between the other two."
      ],
      how: [
        "The short forms are sun. for Sunday and Aug. for August.",
        "Sunday and August are names, so both short forms need capital letters.",
        "The answer is Sun., Aug. 15."
      ],
      misconception: "A common mix-up is fixing only the day. The month is also a name, so its short form needs a capital too.",
      why: "The answer is Sun., Aug. 15. Sunday and August are names, so both short forms start with a capital letter. In the draft, sun. is small, and Sun., aug. leaves the month small.",
      like: ["SK-GUM5-1-C12"]
    },
    {
      id: "SK-GUM5-1-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: [],
      prompt: "Mia says, \"Every title needs a capital letter, even when no name follows it.\" Pick the TWO sentences that show Mia is wrong.",
      pick: 2,
      choices: [
        { text: "Officer Gray gave our class a long safety talk." },
        { text: "Dr. Cruz checked my ears and my nose today." },
        { text: "We waved to the sheriff as he drove away.", correct: true },
        { text: "Coach Nell set up all the orange cones early." },
        { text: "My cousin wants to be a captain someday.", correct: true }
      ],
      clue: "A title keeps a capital in one kind of sentence and not in another. Look for the sentences where the title stays small.",
      hints: [
        "A title keeps a capital in one kind of sentence and not in another. Look for the sentences where the title stays small.",
        "Pick TWO. Check whether a name comes right after each title.",
        "Officer Gray has a name right after the title. Decide about the other four."
      ],
      how: [
        "Find the title in each sentence. Then check whether a name comes right after it.",
        "In \"We waved to the sheriff as he drove away.\" and \"My cousin wants to be a captain someday.\" no name follows, so the titles stay small.",
        "Officer Gray, Coach Nell and Dr. Cruz each have a name after the title, so those capitals are right."
      ],
      misconception: "A common mix-up is picking the sentences with capitals because they show titles. Mia is wrong when a title stays small.",
      why: "The answers are \"We waved to the sheriff as he drove away.\" and \"My cousin wants to be a captain someday.\" In both, no name follows the title, so it stays small. That shows a title does not always need a capital letter. The other three titles come right before names.",
      like: ["SK-GUM5-1-C13"]
    },
    {
      id: "SK-GUM5-1-S14",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: [],
      prompt: "A label on a package needs two short forms. Pick the right way to write each one.",
      text: "Mail to: {0} Cruz, 25 Maple {1}",
      slots: [
        {
          options: ["Ms.", "ms.", "Mz."],
          answer: 0
        },
        {
          options: ["st.", "Str.", "St."],
          answer: 2
        }
      ],
      clue: "Ask which short forms stand for a title and for part of a street name. Then ask how each should be written.",
      hints: [
        "Ask which short forms stand for a title and for part of a street name. Then ask how each should be written.",
        "Work on one blank at a time. Say the short form with its long word.",
        "Mz. is not a standard short form of any title. Think about the other choices."
      ],
      how: [
        "The first blank is a title before the name Cruz. Ms. is written with a capital and a period.",
        "The second blank is part of a street name. Street is shortened to St., with a capital and a period.",
        "The answers are Ms. and St."
      ],
      misconception: "A common mix-up is writing a short form in small letters. A short form of a title or a street name keeps its capital.",
      why: "The answers are Ms. and St. Ms. is a title before a name, and St. is the short form of Street in a street name. Both start with a capital letter and end with a period. The choices mz. and Str. are not standard.",
      like: ["SK-GUM5-1-C14"]
    },
    {
      id: "SK-GUM5-1-S15",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations"
      ],
      passages: [],
      prompt: "A student labeled a photo, \"A moroccan weaver at work.\" Her partner thinks the label is fine as typed, because weaver is a plain job word. What is the best reply?",
      choices: [
        { text: "Leave it, since capitals are for the opening word of a label only." },
        { text: "Leave it, since describing words never take capitals next to job words." },
        { text: "Change it to Moroccan, since the word is built from Morocco, a place.", correct: true },
        { text: "Change weaver instead, since it names a worker." }
      ],
      clue: "Ask what moroccan tells about the weaver and where the word comes from. Then ask whether the next word changes that.",
      hints: [
        "Ask what moroccan tells about the weaver and where the word comes from. Then ask whether the next word changes that.",
        "Cover the word weaver and look at moroccan by itself. What kind of word is it?",
        "Weaver is a plain word for a worker, and no name follows it. Decide among the other choices."
      ],
      how: [
        "Ask what moroccan tells: where the weaver is from.",
        "Moroccan is built from Morocco, the name of a country, so it is a describing word from a place name.",
        "The answer is \"Change it to Moroccan, since the word is built from Morocco, a place.\""
      ],
      misconception: "A common mix-up is letting the next word decide. A word made from a place name needs a capital wherever it appears.",
      why: "The answer is \"Change it to Moroccan, since the word is built from Morocco, a place.\" It does not matter that weaver is a plain job word. A describing word made from a place name always starts with a capital letter.",
      like: ["SK-GUM5-1-C15"]
    }
  ],
  addons: {
    "SK-GUM5-1-P1": {
      hints: [
        "Check each title in front of a name and each word made from the name of a place. Ask whether its capital letters are right.",
        "Read the four sentences one at a time. In each, look at the word that might need a capital letter.",
        "The sentence about mayor Green has a title that is written small. Check the other three."
      ],
      how: [
        "Check each sentence for a title before a name and for a word made from a place name.",
        "Mr. Brooks, Mexican and Mayor Green need capitals, but those sentences write them small.",
        "The answer is \"Our dentist, Dr. Patel, gave me a new toothbrush.\" Dr. has its capital and its period."
      ],
      misconception: "A common mix-up is treating a word like mexican as an everyday word. A describing word made from a place name needs a capital."
    },
    "SK-GUM5-1-P2": {
      hints: [
        "Ask what each blank is. One is a title before a name, and one tells what kind of rice and beans.",
        "Fill one blank at a time. For the first, think about how a short title starts and how it ends.",
        "Cuba is the name of a country, but the blank needs a word that tells what kind. Think about the other choices."
      ],
      how: [
        "The first blank is a title before the name Ruiz. A short title like Mrs. starts with a capital and ends with a period.",
        "The second blank tells what kind of rice and beans. A describing word made from Cuba is Cuban.",
        "The answers are Mrs. and Cuban."
      ],
      misconception: "A common mix-up is choosing the place name itself. Cuba names the country, but Cuban describes the rice."
    },
    "SK-GUM5-1-P3": {
      hints: [
        "Ask which words are names, titles or short forms of names. Each one needs its capital letter.",
        "Read the five lines one at a time. Pick ONE line.",
        "Mon. and Sat. stand for the names Monday and Saturday, and in one line both have capitals. Check the other four."
      ],
      how: [
        "Read each line and look for titles, short forms and words made from place names.",
        "Ms. Ito, Mon., Sat., Captain Harris and American already have their capitals.",
        "In \"Our new address: 22 Peach ave.\" the short form of Avenue needs a capital: Peach Ave."
      ],
      misconception: "A common mix-up is thinking a short form of a street can stay small. If the long word is a name, the short form needs a capital."
    },
    "SK-GUM5-1-P4": {
      hints: [
        "Ask whether each word is a title before a name or is made from the name of a place.",
        "Check the four words one at a time. Ask what each word is doing in the sentence.",
        "Downtown is an everyday word for part of a town, not a name. Check the other three."
      ],
      how: [
        "Check each word: is it a title, a short form, or made from the name of a place?",
        "Family, restaurant and downtown are everyday words, not names.",
        "Italian is made from Italy, the name of a country, so the answer is italian, which should be Italian."
      ],
      misconception: "A common mix-up is thinking only names of people need capitals. A word made from a country name needs one too."
    },
    "SK-GUM5-1-P5": {
      hints: [
        "For each word, ask two things. Does it come right before a name? Is it made from the name of a place?",
        "Do one row at a time. Check what the word is next to, and what it tells about.",
        "In the sentence with doctor, no name comes after it. Decide about the other rows."
      ],
      how: [
        "Ask about each word: is a name right after it, or is it made from a place name?",
        "President comes right before Lincoln, and spanish is made from Spain, so both need capitals.",
        "Doctor and street are everyday words with no name after them, so they stay small."
      ],
      misconception: "A common mix-up is capitalizing every job word. A title needs a capital only when a name comes right after it."
    }
  },
  /* B8:core:end */
  test: [
    { id: "SK-GUM5-1-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which one is correct?",
      choices: [
        { text: "We bought Greek olives at the market.", correct: true },
        { text: "My sister has a checkup with dr. Kim today." },
        { text: "Parade route: Main st. to the park." },
        { text: "Grandpa told us about his trip to the irish coast." }
      ],
      clue: "Check every title, every short form and every word made from the name of a place.",
      why: "The answer is \"We bought Greek olives at the market.\" Greek comes from Greece, so it has a capital. The others should say Dr. Kim, Main St. and Irish." },
    { id: "SK-GUM5-1-T2", type: "dropdown", points: 2, dok: 1, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "{0} Okafor showed our class an {1} drum.",
      slots: [
        { options: ["Mr.", "mr.", "Mr"], answer: 0 },
        { options: ["african", "African", "Africa"], answer: 1 }
      ],
      clue: "The first blank is a title before a name. The second blank tells what kind of drum.",
      why: "The answers are Mr. and African. Mr. is a title before a name, so it has a capital letter and a period. African is a describing word made from Africa, so it needs a capital." },
    { id: "SK-GUM5-1-T3", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the line that has an error.",
      options: [
        "Dr. Evans is the vet who takes care of our cat.",
        "Play practice: Fri., Oct. 9",
        "Coach Reed gave every player a high five.",
        "We tasted canadian maple syrup at the fair.",
        "Mrs. Nguyen grows Thai basil in her garden."
      ],
      answer: [3], pick: 1,
      clue: "Look for a describing word that comes from the name of a place. Does each one start with a capital?",
      why: "The error is in \"We tasted canadian maple syrup at the fair.\" Canadian comes from Canada, so it should start with a capital: Canadian." },
    { id: "SK-GUM5-1-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which word in the sentence should start with a capital letter?",
      stem: "We met governor Ellis on our class trip to Atlanta.",
      choices: [
        { text: "governor", correct: true },
        { text: "class" },
        { text: "trip" },
        { text: "our" }
      ],
      clue: "For each choice, ask: Is this word a name, a title before a name, or a word made from a name?",
      why: "The answer is governor. It is a title right before the name Ellis, so it should be Governor Ellis." },
    { id: "SK-GUM5-1-T5", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO lines that are correct.",
      choices: [
        { text: "Ms. Lopez hung a Brazilian flag in our classroom.", correct: true },
        { text: "Address: 14 Pine St.", correct: true },
        { text: "Mr Jackson coaches our soccer team." },
        { text: "We ate german pretzels at the fall festival." },
        { text: "Address: 9 Maple rd." }
      ],
      pick: 2,
      clue: "Check that each title has a capital and a period, that each short form of a name has a capital, and that each word made from a place name has a capital.",
      why: "The answers are \"Ms. Lopez hung a Brazilian flag in our classroom.\" and \"Address: 14 Pine St.\" The others should say Mr. Jackson (with a period), German (from Germany) and Maple Rd. (a street name)." }
  ]
});

/* 2. Commas for direct address and to set off yes and no */
PP.addLesson({
  code: "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes",
  title: "Commas with names and with yes and no",
  teach: {
    big: "When you talk to someone by name, or start an answer with yes or no, a comma separates those words from the rest of the sentence.",
    points: [
      "When you speak to a person and use the person's name, put a comma between the name and the rest of the sentence: Ava, please close the door. Thank you, Ben. If the name is in the middle, put a comma on each side.",
      "Use the comma only when you are talking TO the person. In \"Ava closed the door,\" you are talking about Ava, so there is no comma after her name.",
      "When yes or no starts an answer, put a comma right after it: Yes, I finished my snack. No, thank you."
    ],
    words: [
      { term: "direct address", means: "talking right to someone and using the person's name" }
    ],
    example: {
      label: "Example",
      lines: [
        "Dad, can we go to the park?",
        "Yes, we can go after lunch.",
        "Dad took us to the park."
      ],
      note: "In the first sentence, the speaker talks to Dad, so a comma comes after Dad. In the second, Yes starts the answer, so a comma comes after it. In the last sentence, we are only telling about Dad, so there is no comma."
    },
    tip: "Ask two questions: Is someone being spoken to by name? Does the sentence start with yes or no? If so, look for the comma."
  },
  learn: [
    {
      show: ["Marcus please hand me the glue stick."],
      ask: "Where does a comma belong?",
      steps: [
        "Ask: Is the speaker talking to someone by name?",
        "Yes. The speaker is asking Marcus to do something.",
        "Put a comma right after the name to separate it from the rest of the sentence."
      ],
      answer: "A comma goes after Marcus: \"Marcus, please hand me the glue stick.\""
    },
    {
      show: ["No I have not seen your red mitten."],
      ask: "Where does a comma belong?",
      steps: [
        "Look at the first word. It is No, and it answers a question.",
        "When yes or no starts an answer, a comma comes right after it."
      ],
      answer: "A comma goes after No: \"No, I have not seen your red mitten.\""
    }
  ],
  parent: "Ask your child yes-or-no questions and have them write one answer on a sticky note with the comma, like \"Yes, I want more beans.\" Then help them write a short note to a family member that starts with that person's name and a comma.",
  passages: [
    /* B8:passages:start */
    {
      id: "p1",
      title: "Building a Cardboard Fort",
      byline: "A third grader's draft",
      genre: "Student draft (play script)",
      draft: true,
      paragraphs: [
        [
          "(1) Three friends build a fort from big boxes in Mia's garage on a cloudy afternoon.",
          "(2) Mia: Ben please hold this box while I tape it.",
          "(3) Ben: Yes I can hold it with both hands."
        ],
        [
          "(4) Tess: Mia, where should we put the door?",
          "(5) Mia: Put it on the long side, Tess.",
          "(6) Ben: No, the tape will not stick to that rough part.",
          "(7) Tess: Ben can you find the other roll of tape?"
        ],
        [
          "(8) Ben: Here it is, Mia.",
          "(9) Mia: Thank you, Ben. Now we can add a roof.",
          "(10) Tess: This fort is the best one on our street!"
        ]
      ]
    },
    {
      id: "p2",
      title: "The Class Hamster",
      byline: "A third grader's draft",
      genre: "Student draft (play script)",
      draft: true,
      paragraphs: [
        [
          "(1) Two students search the room after the class hamster escapes from his cage.",
          "(2) Dev: Nina, have you seen him under the shelf?",
          "(3) Nina: No I looked there already.",
          "(4) Dev: Then we should check the reading corner, Nina."
        ],
        [
          "(5) Nina: Dev he is hiding behind the big pillow!",
          "(6) Dev: Yes, that is him, and he looks very sleepy.",
          "(7) Nina: I will get a small box from the shelf."
        ],
        [
          "(8) Dev: Please hold the box low, Nina, while he walks in.",
          "(9) Nina: He is in! Now we can shut the lid.",
          "(10) Dev: Thank you Nina. I think he is happy to be home."
        ]
      ]
    },
    {
      id: "p3",
      title: "A Rainy Day Picnic",
      byline: "A third grader's draft",
      genre: "Student draft (play script)",
      draft: true,
      paragraphs: [
        [
          "(1) The family picnic moves inside the gym because heavy rain starts to fall.",
          "(2) Mom: Grandpa, please sit by the window.",
          "(3) Grandpa: Yes, I can see the whole room from here.",
          "(4) Lee: Rosa, can you bring me a napkin?"
        ],
        [
          "(5) Rosa: Yes, I have a big stack of them.",
          "(6) Rosa, handed the napkins to Lee and Mom.",
          "(7) Lee: Thank you, Rosa.",
          "(8) Mom: Grandpa, would you like some warm soup?",
          "(9) Grandpa: No, I am full already."
        ],
        [
          "(10) Mom: Please hang your wet coat on the hook Lee.",
          "(11) Lee: Yes, Mom, I will do it right now.",
          "(12) Rosa: I will hang mine there too."
        ]
      ]
    },
    {
      id: "p4",
      title: "Puppet Show Rehearsal",
      byline: "A third grader's draft",
      genre: "Student draft (play script)",
      draft: true,
      paragraphs: [
        [
          "(1) Three classmates practice a puppet show behind a tall cloth screen.",
          "(2) Omar: Jade lift the dragon a little higher.",
          "(3) Jade: Yes I see him now."
        ],
        [
          "(4) Pablo: Omar, the curtain is stuck again.",
          "(5) Omar: Slide it over to the left, Pablo.",
          "(6) Jade: No, the dragon needs more room on that side.",
          "(7) Pablo: Jade can you hold the curtain open?"
        ],
        [
          "(8) Jade: I have it, Omar.",
          "(9) Omar: Thank you, Jade. Now we can start the show.",
          "(10) Pablo: Our puppets look great together!"
        ]
      ]
    },
    {
      id: "p5",
      title: "Washing the Car",
      byline: "A third grader's draft",
      genre: "Student draft (play script)",
      draft: true,
      paragraphs: [
        [
          "(1) Two cousins wash the family car on a sunny Saturday.",
          "(2) Raj: Ana please hand me the big sponge.",
          "(3) Ana: Yes, I have one right here.",
          "(4) Raj: Then rinse the roof, Ana."
        ],
        [
          "(5) Ana: The hose is leaking again, Raj!",
          "(6) Raj: Yes I see the puddle by the tire.",
          "(7) Ana: I will turn off the water."
        ],
        [
          "(8) Raj: We can rest, Ana, after we dry the wheels.",
          "(9) Ana: It shines like a new coin!",
          "(10) Raj: Ana you did a great job today."
        ]
      ]
    },
    {
      id: "p6",
      title: "Moving Day",
      byline: "A third grader's draft",
      genre: "Student draft (play script)",
      draft: true,
      paragraphs: [
        [
          "(1) A family carries boxes into a new apartment on moving day.",
          "(2) Dad: Zoe, please carry the lamp.",
          "(3) Zoe: Yes, I have it.",
          "(4) Luis: Zoe can you open the door for me?"
        ],
        [
          "(5) Zoe: Yes, I am coming.",
          "(6) Zoe, pushed the heavy door open with her foot.",
          "(7) Luis: Thank you, Zoe.",
          "(8) Dad: Luis, do you need help with that box?",
          "(9) Luis: No, I can carry it myself."
        ],
        [
          "(10) Dad: Set the plants by the window Luis.",
          "(11) Luis: Yes, Dad, I will do it right away.",
          "(12) Zoe: I will water them after dinner."
        ]
      ]
    }
    /* B8:passages:end */
  ],
  practice: [
    { id: "SK-GUM5-2-P1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "Grandma, will you braid my hair?", correct: true },
        { text: "Yes the library is open today." },
        { text: "Ella, rode her scooter to school." },
        { text: "Can you hear the thunder Malik?" }
      ],
      clue: "Is someone being spoken to by name? Does a sentence start with yes or no? Remember: no comma when you only tell about a person.",
      why: "The answer is \"Grandma, will you braid my hair?\" The speaker is talking to Grandma, so a comma comes after her name. The others should say \"Yes, the library is open today\" and \"Can you hear the thunder, Malik?\" In the Ella sentence, we are telling about Ella, not talking to her, so there should be no comma." },
    { id: "SK-GUM5-2-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "{0} would like to join the reading club.",
      slots: [
        { options: ["Yes I", "Yes, I", "Yes I,"], answer: 1 }
      ],
      clue: "The sentence starts with an answer word. Where does the comma go when yes or no starts an answer?",
      why: "The answer is Yes, I. When yes starts an answer, a comma comes right after it: \"Yes, I would like to join the reading club.\"" },
    { id: "SK-GUM5-2-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "These sentences have no commas yet. Decide if each one needs a comma after the name.",
      cols: ["Needs a comma", "No comma needed"],
      rows: [
        { text: "Nora your shoe is untied.", answer: 0 },
        { text: "Nora tied her shoe.", answer: 1 },
        { text: "Diego come see this bug!", answer: 0 },
        { text: "Diego found a bug on the step.", answer: 1 }
      ],
      clue: "Ask: Is someone talking TO this person, or just telling ABOUT this person?",
      why: "\"Nora, your shoe is untied.\" and \"Diego, come see this bug!\" need commas because someone is talking to Nora and Diego. \"Nora tied her shoe.\" and \"Diego found a bug on the step.\" only tell about them, so no comma is needed." },
    { id: "SK-GUM5-2-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Yes, I packed my lunch.",
        "Aunt Rosa, the cookies smell great!",
        "No, the bus has not come yet.",
        "Owen please pass the crayons.",
        "Sofia waved to her friends from the bus."
      ],
      answer: [3], pick: 1,
      clue: "Find the sentence where someone is spoken to by name. Is the name set off with a comma?",
      why: "The error is in \"Owen please pass the crayons.\" The speaker is talking to Owen, so a comma belongs after his name: \"Owen, please pass the crayons.\"" },
    { id: "SK-GUM5-2-P5", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO sentences that use commas correctly.",
      choices: [
        { text: "No, we are not going to the pool today.", correct: true },
        { text: "Let's go outside, Kayla.", correct: true },
        { text: "Yes I can tie my own shoes." },
        { text: "Mom, packed apples in my lunch." },
        { text: "Wait for me Andre!" }
      ],
      pick: 2,
      clue: "Check each name. Is the speaker talking to that person? Then check each yes or no at the start.",
      why: "The answers are \"No, we are not going to the pool today.\" and \"Let's go outside, Kayla.\" No starts the answer, and the speaker talks to Kayla. The others should say \"Yes, I can\" and \"Wait for me, Andre!\" In the Mom sentence, we are telling about Mom, so there should be no comma." }
  ],
  /* B8:core:start */
  /* ---------- Expansion 2026-10-22, batch B8 (GUM Introduce/Continue) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test or testB.
     Author log: docs/expansion-2026-10-22/batches/B8b-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          { ref: "SK-GUM5-2-P3" },
          { ref: "SK-GUM5-2-P5" },
          {
            id: "SK-GUM5-2-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: ["p1"],
            prompt: "Sentence 2 of the draft is missing a comma. Choose the words that fix it.",
            text: "Mia: {0} hold this box while I tape it.",
            slots: [
              {
                options: ["Ben please", "Ben, please", "Ben please,"],
                answer: 1
              }
            ],
            clue: "Ask whether the speaker is talking to a person by name. Then ask what should separate that name from the words after it.",
            hints: [
              "Ask whether the speaker is talking to a person by name. Then ask what should separate that name from the words after it.",
              "Say each choice out loud and think about where a small pause would go. Look at where the mark sits.",
              "One choice puts the mark after the request word instead of after the name. Decide between the other two."
            ],
            how: [
              "Read sentence 2. Mia is talking to Ben and asks him to do something.",
              "When you talk to a person by name, a comma separates the name from the rest of the sentence.",
              "The answer is Ben, please."
            ],
            misconception: "A common mix-up is leaving out the comma because the sentence reads smoothly. A name used to speak to someone still needs a comma.",
            why: "The answer is Ben, please. Mia is talking to Ben, so a comma separates his name from the rest of the sentence. Ben please leaves out the comma, and Ben please, puts it in the wrong place."
          },
          {
            id: "SK-GUM5-2-C04",
            type: "mc",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: ["p1"],
            prompt: "Which choice shows sentence 3 of the draft written correctly?",
            choices: [
              { text: "Yes I can hold it." },
              { text: "Yes I, can hold it." },
              { text: "Yes, I can hold it.", correct: true },
              { text: "Yes, I can, hold it." }
            ],
            clue: "Look at the first word of the line. Ask what kind of word it is and what it does at the start of a reply.",
            hints: [
              "Look at the first word of the line. Ask what kind of word it is and what it does at the start of a reply.",
              "Read each choice out loud. Count the commas, and ask whether each one has a reason.",
              "One choice puts its only comma after I, between the speaker and the rest of what he says. Decide among the other three."
            ],
            how: [
              "Look at the first word. Yes begins Ben's answer.",
              "When yes starts an answer, a comma comes right after it.",
              "The answer is \"Yes, I can hold it.\""
            ],
            misconception: "A common mix-up is putting the comma later in the line. The comma goes right after yes.",
            why: "The answer is \"Yes, I can hold it.\" Yes begins Ben's answer, so a comma comes right after it. The other choices leave out the comma or put commas where they do not belong."
          },
          {
            id: "SK-GUM5-2-C05",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Which sentence in paragraph 2 of the draft is missing a comma?",
              choices: [
                { text: "Put it on the long side, Tess." },
                { text: "No, the tape will not stick to that rough part." },
                { text: "Ben can you find the other roll of tape?", correct: true },
                { text: "Mia, where should we put the door?" }
              ]
            },
            partB: {
              prompt: "Which rule explains why the sentence in Part A needs a comma?",
              choices: [
                { text: "A comma goes after the first word of every question." },
                { text: "A comma goes before the word can when a sentence asks for help." },
                { text: "A comma goes after any name, even in a sentence that only tells about a person." },
                { text: "A comma sets off the name of a person who is spoken to.", correct: true }
              ]
            },
            clue: "Ask who is being spoken to in each sentence. Then ask which rule fits the sentence that is missing a mark.",
            hints: [
              "Ask who is being spoken to in each sentence. Then ask which rule fits the sentence that is missing a mark.",
              "Check each sentence in paragraph 2 and look for a name. For Part B, think about what the commas in the other sentences are doing.",
              "The sentence about the tape not sticking starts with an answer word and already has its comma. Check the other three."
            ],
            how: [
              "Part A: read each sentence in paragraph 2 and ask who is being spoken to.",
              "In \"Ben can you find the other roll of tape?\" Tess is talking to Ben, but nothing sets his name off.",
              "Part A answer: Ben can you find the other roll of tape?",
              "Part B answer: \"A comma sets off the name of a person who is spoken to.\""
            ],
            misconception: "A common mix-up is thinking a question needs a comma after its first word. The comma is there to set off the name of the person who is spoken to.",
            why: "Part A: Ben can you find the other roll of tape? Part B: \"A comma sets off the name of a person who is spoken to.\" Tess is talking to Ben, so a comma must separate his name from the rest of the question: Ben, can you find the other roll of tape? The other three sentences already have the commas they need."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM5-2-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: ["p2"],
            prompt: "Look at sentences 2 through 6 of the draft. Select the TWO sentences that are missing a comma.",
            targets: ["p2:1:2", "p2:1:3", "p2:1:4", "p2:2:1", "p2:2:2"],
            answer: ["p2:1:3", "p2:2:1"],
            pick: 2,
            clue: "Ask who is being spoken to, and whether a line starts with an answer word. Then check each line for the comma that should be there.",
            hints: [
              "Ask who is being spoken to, and whether a line starts with an answer word. Then check each line for the comma that should be there.",
              "Read the five sentences one at a time. Pick TWO.",
              "In sentence 6, the answer word already has its comma. Check the other four."
            ],
            how: [
              "Check each sentence for a name that is spoken to and for yes or no at the start.",
              "Sentence 3 starts with an answer word and has no comma after it: \"No, I looked there already.\"",
              "Sentence 5 speaks to Dev, but his name has no comma after it: \"Dev, he is hiding behind the big pillow!\"",
              "Sentences 2, 4 and 6 already have the commas they need."
            ],
            misconception: "A common mix-up is picking every sentence that has a name in it. Pick only the sentences where a needed comma is missing.",
            why: "The answers are sentence 3 and sentence 5. In sentence 3, the answer word No needs a comma right after it. In sentence 5, Nina is talking to Dev, so his name needs a comma after it. Sentences 2, 4 and 6 already have the commas they need."
          },
          {
            id: "SK-GUM5-2-C07",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: [],
            prompt: "Choose the TWO sentences that use commas correctly.",
            pick: 2,
            choices: [
              { text: "Mom made, dinner for all of us." },
              { text: "Please sit down, Mr. Cho.", correct: true },
              { text: "Cara asked Dad, to drive us home." },
              { text: "No, I did not take the last cookie.", correct: true },
              { text: "Yes I brought my library book." }
            ],
            clue: "Check each sentence for a name that is spoken to and for yes or no that starts an answer. Ask whether each comma has a reason, and whether any comma is missing.",
            hints: [
              "Check each sentence for a name that is spoken to and for yes or no that starts an answer. Ask whether each comma has a reason, and whether any comma is missing.",
              "Pick TWO. Some sentences leave out a comma they need, and some have a comma that does not belong.",
              "In the Cara sentence, the comma splits the person who is asked from what the person is asked to do. Decide about the other four."
            ],
            how: [
              "Check each sentence: is a name spoken to, and does yes or no start an answer?",
              "\"Please sit down, Mr. Cho.\" speaks to Mr. Cho, so a comma comes before his name.",
              "\"No, I did not take the last cookie.\" has a comma right after No.",
              "The other three are wrong: Yes I needs a comma after Yes, and the commas after made and after Dad do not belong."
            ],
            misconception: "A common mix-up is thinking more commas make a sentence better. A comma belongs only next to a name that is spoken to or after yes or no that starts an answer.",
            why: "The answers are \"Please sit down, Mr. Cho.\" and \"No, I did not take the last cookie.\" The first speaks to Mr. Cho, and the second starts with an answer word. The others should say \"Yes, I brought my library book.\", \"Mom made dinner for all of us.\" and \"Cara asked Dad to drive us home.\""
          },
          {
            id: "SK-GUM5-2-C08",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: [],
            prompt: "None of these sentences has a comma yet. Each one speaks to a person by name. Decide where the comma belongs.",
            cols: ["Before the name", "After the name"],
            rows: [
              { text: "Please pass the salt Dad.", answer: 0 },
              { text: "Mia please help me with this.", answer: 1 },
              { text: "Can you see the board Mrs. Fox?", answer: 0 },
              { text: "Grandma I made this for you.", answer: 1 }
            ],
            clue: "Find the name of the person who is spoken to in each sentence. Ask whether the name comes first or last.",
            hints: [
              "Find the name of the person who is spoken to in each sentence. Ask whether the name comes first or last.",
              "Do one row at a time. Say the sentence out loud and listen for where the pause comes next to the name.",
              "In the sentence with Mrs. Fox, the name comes last. Decide about the other rows."
            ],
            how: [
              "Find the name in each sentence: Dad, Mia, Mrs. Fox and Grandma.",
              "A name at the end of a sentence gets a comma before it. A name at the start gets a comma after it.",
              "Dad and Mrs. Fox come last, so the comma goes before the name. Mia and Grandma come first, so the comma goes after the name."
            ],
            misconception: "A common mix-up is putting the comma on the same side of every name. The comma goes between the name and the rest of the sentence, so its side depends on where the name sits.",
            why: "The commas go before Dad and before Mrs. Fox, because those names come at the end: \"Please pass the salt, Dad.\" and \"Can you see the board, Mrs. Fox?\" The commas go after Mia and after Grandma, because those names come first: \"Mia, please help me with this.\" and \"Grandma, I made this for you.\""
          },
          {
            id: "SK-GUM5-2-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: ["p2"],
            prompt: "In sentence 8 of the draft, Nina has a comma on each side: \"Please hold the box low, Nina, while he walks in.\" Why does her name need two commas?",
            choices: [
              { text: "Dev is only telling about Nina, so her name needs a comma on each side." },
              { text: "Dev is talking to Nina, and her name is in the middle, so a comma goes on each side.", correct: true },
              { text: "The second comma is there because the word while always needs a comma before it." },
              { text: "A name needs two commas whenever a sentence has more than six words in it." }
            ],
            clue: "Ask who is being spoken to in the sentence, and where the name sits. Then ask what the commas do for the name.",
            hints: [
              "Ask who is being spoken to in the sentence, and where the name sits. Then ask what the commas do for the name.",
              "Read the sentence again without the name. Ask what changes when the name is added.",
              "Dev is not telling a story about Nina, so one choice cannot be right. Check the other three."
            ],
            how: [
              "Read sentence 8. Dev is speaking right to Nina.",
              "The name is in the middle of the sentence, so it needs a comma before it and a comma after it.",
              "The answer is \"Dev is talking to Nina, and her name is in the middle, so a comma goes on each side.\""
            ],
            misconception: "A common mix-up is thinking commas depend on how long the sentence is. They depend on whether the name is spoken to and where it sits.",
            why: "The answer is \"Dev is talking to Nina, and her name is in the middle, so a comma goes on each side.\" A name in the middle of a sentence is set off on both sides. The length of the sentence and the word while do not decide where the commas go."
          },
          {
            id: "SK-GUM5-2-C10",
            type: "dropdown",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: ["p2"],
            prompt: "Sentence 10 of the draft is missing a comma. Choose the words that fix it.",
            text: "Dev: {0} I think he is happy to be home.",
            slots: [
              {
                options: ["Thank you, Nina.", "Thank you Nina.", "Thank, you Nina."],
                answer: 0
              }
            ],
            clue: "Ask who Dev is thanking, and think about what should separate that name from the rest.",
            hints: [
              "Ask who Dev is thanking, and think about what should separate that name from the rest.",
              "Say each choice out loud. Listen for where the speaker would pause.",
              "One choice puts the comma after the first word, where the speaker would not pause. Decide between the other two."
            ],
            how: [
              "Read sentence 10. Dev is talking to Nina.",
              "When you talk to a person by name, a comma separates the name from the other words.",
              "The answer is Thank you, Nina."
            ],
            misconception: "A common mix-up is leaving the comma off when the name is at the end. The comma goes before the name.",
            why: "The answer is Thank you, Nina. Dev is talking to Nina, so a comma comes before her name. Thank you Nina. leaves out the comma, and Thank, you Nina. puts it in the wrong place."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM5-2-C11",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: ["p3"],
            prompt: "Look at sentences 5 through 9 of the draft. Select the sentence that has a comma that does not belong.",
            targets: ["p3:2:1", "p3:2:2", "p3:2:3", "p3:2:4", "p3:2:5"],
            answer: ["p3:2:2"],
            pick: 1,
            clue: "A comma should have a reason. Ask whether each comma sets off a name that is spoken to, or an answer word.",
            hints: [
              "A comma should have a reason. Ask whether each comma sets off a name that is spoken to, or an answer word.",
              "Read the five sentences one at a time. Pick ONE. Ask who each sentence speaks to or tells about.",
              "In sentence 7, Lee speaks right to Rosa, and the comma sets off her name. Check the other four."
            ],
            how: [
              "Find every comma in the five sentences and ask what it is doing.",
              "Sentences 5, 7, 8 and 9 each have a comma after yes, no or a name that is spoken to.",
              "In sentence 6, nobody is talking to Rosa. The sentence only tells what Rosa did, so the comma does not belong."
            ],
            misconception: "A common mix-up is thinking a name always needs a comma next to it. A comma belongs only when the sentence speaks to that person.",
            why: "The answer is sentence 6, \"Rosa, handed the napkins to Lee and Mom.\" Nobody is talking to Rosa. The sentence only tells what she did, so the comma should be taken out. In the other four sentences, each comma sets off a spoken-to name or an answer word."
          },
          {
            id: "SK-GUM5-2-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: ["p3"],
            prompt: "Sentence 10 of the draft is missing a comma. Choose the words that fix it.",
            text: "Mom: Please hang your wet coat on the {0}",
            slots: [
              {
                options: ["hook, Lee.", "hook Lee.", "hook Lee,"],
                answer: 0
              }
            ],
            clue: "Ask who Mom is talking to, and where that name sits in the sentence.",
            hints: [
              "Ask who Mom is talking to, and where that name sits in the sentence.",
              "Say each choice at the end of the sentence. Listen for the pause between the last two words.",
              "One choice leaves its comma at the very end, where nothing follows it. Decide between the other two."
            ],
            how: [
              "Read sentence 10. Mom is talking to Lee, and his name comes last.",
              "A name at the end of a sentence gets a comma before it.",
              "The answer is hook, Lee."
            ],
            misconception: "A common mix-up is putting the comma after the name instead of before it. A name at the end needs its comma on the left.",
            why: "The answer is hook, Lee. Mom is talking to Lee, and his name comes last, so the comma goes before it. Hook Lee. leaves the comma out, and hook Lee, puts it after the name where nothing follows."
          },
          {
            id: "SK-GUM5-2-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: [],
            prompt: "Kai says, \"A name always needs a comma next to it.\" Choose the TWO sentences that show Kai is not right.",
            pick: 2,
            choices: [
              { text: "Mom hugged Tim at the door.", correct: true },
              { text: "Is the pizza ready, Tim?" },
              { text: "Tim carried the box to the car.", correct: true },
              { text: "Please wait here, Tim, and sit." },
              { text: "Tim, carry the box to the car." }
            ],
            clue: "Kai says a name needs a comma every time. Look for sentences where a name has no comma next to it and the sentence is still right.",
            hints: [
              "Kai says a name needs a comma every time. Look for sentences where a name has no comma next to it and the sentence is still right.",
              "Pick TWO. Check whether each sentence speaks to the person or only tells about the person.",
              "The sentence that starts with Tim, speaks right to Tim. Decide about the other four."
            ],
            how: [
              "Look for a name with no comma next to it in a sentence that is correct.",
              "\"Tim carried the box to the car.\" and \"Mom hugged Tim at the door.\" only tell about Tim, so no comma is needed.",
              "The other three speak right to Tim, so each has a comma next to his name."
            ],
            misconception: "A common mix-up is picking sentences that have commas. Kai is wrong when a sentence only tells about a person, so the name needs no comma.",
            why: "The answers are \"Tim carried the box to the car.\" and \"Mom hugged Tim at the door.\" Both only tell about Tim, so his name needs no comma. In the other three, someone is talking to Tim, so a comma sets off his name."
          },
          {
            id: "SK-GUM5-2-C14",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: [],
            prompt: "Aunt Bea talks to Leo, and Leo answers her. Choose the words that finish what each one says.",
            text: "Aunt Bea: {0} Leo: {1}",
            slots: [
              {
                options: ["Leo, can you carry this box?", "Leo can you carry this box?", "Leo can, you carry this box?"],
                answer: 0
              },
              {
                options: ["No, it is too heavy for me.", "No it is too heavy for me.", "No it is, too heavy for me."],
                answer: 0
              }
            ],
            clue: "Ask who is talking to whom in each line. Then ask what should separate the name, or the answer word, from the rest of the line.",
            hints: [
              "Ask who is talking to whom in each line. Then ask what should separate the name, or the answer word, from the rest of the line.",
              "Fill one blank at a time. Say each choice out loud and listen for where the speaker pauses.",
              "In the second blank, one choice puts its only comma after the word is. Decide about the other choices."
            ],
            how: [
              "The first blank is Aunt Bea talking to Leo. His name starts the line, so a comma comes right after it.",
              "The second blank is Leo's answer. No starts the answer, so a comma comes right after it.",
              "The answers are \"Leo, can you carry this box?\" and \"No, it is too heavy for me.\""
            ],
            misconception: "A common mix-up is putting the comma later in the line. The comma goes right after the name and right after the answer word.",
            why: "The answers are \"Leo, can you carry this box?\" and \"No, it is too heavy for me.\" Aunt Bea speaks to Leo, so his name is followed by a comma. No starts Leo's answer, so it is followed by a comma. The other choices leave the comma out or put it in the wrong place."
          },
          {
            id: "SK-GUM5-2-C15",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
            ],
            passages: [],
            prompt: "Sam wrote, \"Mom said yes to the sleepover.\" He thinks it needs a comma after yes, because yes always needs one. Is Sam right?",
            choices: [
              { text: "No. Yes needs a comma only when it starts an answer, and here it tells what Mom said.", correct: true },
              { text: "Yes. The word yes needs a comma every time it is used in a sentence." },
              { text: "Yes. A comma is needed after any word that tells what a person said." },
              { text: "No. Yes needs a comma only when it comes at the end of a sentence." }
            ],
            clue: "Ask what the word yes is doing in the sentence. Is it the start of an answer, or is it telling what Mom said?",
            hints: [
              "Ask what the word yes is doing in the sentence. Is it the start of an answer, or is it telling what Mom said?",
              "Think about a reply that starts with yes. Ask where its comma goes, and why.",
              "The end of a sentence is not the reason a word needs a comma. Check the other three."
            ],
            how: [
              "Ask what yes is doing. Mom is not answering anyone in this sentence.",
              "Yes is just telling what Mom said, so it needs no comma after it.",
              "The answer is \"No. Yes needs a comma only when it starts an answer, and here it tells what Mom said.\""
            ],
            misconception: "A common mix-up is thinking the word yes always gets a comma. The comma is for a yes that starts an answer.",
            why: "The answer is \"No. Yes needs a comma only when it starts an answer, and here it tells what Mom said.\" Sam should leave the sentence as it is. A comma follows yes in a reply like \"Yes, we can go.\" It does not follow yes when the word only tells what someone said."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM5-2-S01",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: [],
      prompt: "Each sentence below has a name in it. Decide whether the sentence needs a comma next to that name.",
      cols: ["Add a comma", "Leave as is"],
      rows: [
        { text: "Omar close the gate.", answer: 0 },
        { text: "Omar closed the gate.", answer: 1 },
        { text: "Bring me a towel Priya.", answer: 0 },
        { text: "Priya brought a towel.", answer: 1 }
      ],
      clue: "Ask whether each sentence talks TO the person or only tells ABOUT the person.",
      hints: [
        "Ask whether each sentence talks TO the person or only tells ABOUT the person.",
        "Do one row at a time. Say each sentence as if you were reading it to the person who is named.",
        "In the sentence about Omar closing the gate, nobody is being spoken to. Decide about the other rows."
      ],
      how: [
        "Ask about each row: is someone talking to the person, or telling about the person?",
        "\"Omar close the gate.\" and \"Bring me a towel Priya.\" speak right to a person, so each needs a comma next to the name.",
        "\"Omar closed the gate.\" and \"Priya brought a towel.\" only tell about people, so they stay as they are."
      ],
      misconception: "A common mix-up is adding a comma next to every name. Add one only when the sentence speaks to that person.",
      why: "\"Omar, close the gate.\" and \"Bring me a towel, Priya.\" need commas because someone is talking to Omar and Priya. \"Omar closed the gate.\" and \"Priya brought a towel.\" only tell about them, so nothing is added.",
      like: ["SK-GUM5-2-P3"]
    },
    {
      id: "SK-GUM5-2-S02",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: [],
      prompt: "Select the TWO sentences with correct commas.",
      pick: 2,
      choices: [
        { text: "Pass me the bread, Rita.", correct: true },
        { text: "No I do not like peas." },
        { text: "Yes, the soup is ready now.", correct: true },
        { text: "Kiran poured milk, for Rita." },
        { text: "Dad stirred, the soup slowly." }
      ],
      clue: "For each sentence, ask whether it starts with an answer word or speaks to a person by name. Then ask whether its commas are right.",
      hints: [
        "For each sentence, ask whether it starts with an answer word or speaks to a person by name. Then ask whether its commas are right.",
        "Pick TWO. In some sentences a comma is missing, and in some a comma does not belong.",
        "The sentence that starts with No needs a mark that it does not have. Decide about the other four."
      ],
      how: [
        "Check each sentence for an answer word at the start or a person who is spoken to.",
        "\"Yes, the soup is ready now.\" has a comma right after Yes.",
        "\"Pass me the bread, Rita.\" speaks to Rita, so a comma comes before her name.",
        "The other three are wrong: No I needs a comma after No, and the commas after stirred and milk do not belong."
      ],
      misconception: "A common mix-up is thinking a comma can go wherever you would take a breath. It belongs after an answer word or next to a name that is spoken to.",
      why: "The answers are \"Yes, the soup is ready now.\" and \"Pass me the bread, Rita.\" The first starts with an answer word, and the second speaks to Rita. The others should say \"No, I do not like peas.\", \"Dad stirred the soup slowly.\" and \"Kiran poured milk for Rita.\"",
      like: ["SK-GUM5-2-P5"]
    },
    {
      id: "SK-GUM5-2-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: ["p4"],
      prompt: "One line in paragraph 1 of the draft needs a mark. Pick the version that is right.",
      text: "Omar: {0} the dragon a little higher.",
      slots: [
        {
          options: ["Jade lift", "Jade, lift", "Jade lift,"],
          answer: 1
        }
      ],
      clue: "Ask who Omar is talking to. Then ask what should separate that name from the rest of the line.",
      hints: [
        "Ask who Omar is talking to. Then ask what should separate that name from the rest of the line.",
        "Say each choice out loud and notice where a pause would fall.",
        "One choice puts the mark after the action word instead of after the name. Decide between the other two."
      ],
      how: [
        "Read sentence 2. Omar is talking to Jade and tells her what to do.",
        "A name used to speak to someone is separated from the rest of the sentence by a comma.",
        "The answer is Jade, lift."
      ],
      misconception: "A common mix-up is skipping the comma because the line is short. A short line still needs a comma after the name.",
      why: "The answer is Jade, lift. Omar is talking to Jade, so a comma comes right after her name. Jade lift leaves the comma out, and Jade lift, puts it after the wrong word.",
      like: ["SK-GUM5-2-C03"]
    },
    {
      id: "SK-GUM5-2-S04",
      type: "mc",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: ["p4"],
      prompt: "Pick the way sentence 3 should be written.",
      choices: [
        { text: "Yes, I see him now.", correct: true },
        { text: "Yes I see him now." },
        { text: "Yes I, see him now." },
        { text: "Yes, I see, him now." }
      ],
      clue: "Look at the first word of the line and ask what it does at the start of a reply.",
      hints: [
        "Look at the first word of the line and ask what it does at the start of a reply.",
        "Read each choice out loud. Check where each comma sits, and ask whether it has a reason.",
        "One choice puts its only comma after I, between the speaker and what he sees. Decide among the other three."
      ],
      how: [
        "The line starts with yes, and yes begins Jade's reply.",
        "When yes starts a reply, a comma comes right after it.",
        "The answer is \"Yes, I see him now.\""
      ],
      misconception: "A common mix-up is putting the comma after the first few words. The comma goes right after yes.",
      why: "The answer is \"Yes, I see him now.\" Yes begins Jade's reply, so a comma comes right after it. The other choices leave out the comma or put commas in places where they do not belong.",
      like: ["SK-GUM5-2-C04"]
    },
    {
      id: "SK-GUM5-2-S05",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: ["p4"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: {
        prompt: "Which line from paragraph 2 should have a comma but does not?",
        choices: [
          { text: "Slide it over to the left, Pablo." },
          { text: "Jade can you hold the curtain open?", correct: true },
          { text: "No, the dragon needs more room on that side." },
          { text: "Omar, the curtain is stuck again." }
        ]
      },
      partB: {
        prompt: "Which reason fits the line you chose in Part A?",
        choices: [
          { text: "A comma comes before every word that begins a question." },
          { text: "Every name in a line must be followed by a comma." },
          { text: "A comma separates the name of the one being talked to from the other words.", correct: true },
          { text: "A comma is needed after the second word of each request." }
        ]
      },
      clue: "Think about who is talking to whom in each line. Then ask which reason fits the line that is missing a mark.",
      hints: [
        "Think about who is talking to whom in each line. Then ask which reason fits the line that is missing a mark.",
        "Look at the four lines in paragraph 2 and find the names. For Part B, think about what the commas in the other lines are doing.",
        "The line that starts with No already has its comma. Check the other three."
      ],
      how: [
        "Part A: read each line in paragraph 2 and find the person who is talked to.",
        "In \"Jade can you hold the curtain open?\" Pablo is talking to Jade, but nothing sets her name off.",
        "Part A answer: Jade can you hold the curtain open?",
        "Part B answer: \"A comma separates the name of the one being talked to from the other words.\""
      ],
      misconception: "A common mix-up is thinking every name needs a comma after it. The comma is for the name of the person who is talked to.",
      why: "Part A: Jade can you hold the curtain open? Part B: \"A comma separates the name of the one being talked to from the other words.\" Pablo is talking to Jade, so her name needs a comma after it: Jade, can you hold the curtain open? The other three lines already have the commas they need.",
      like: ["SK-GUM5-2-C05"]
    },
    {
      id: "SK-GUM5-2-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: ["p5"],
      prompt: "Read sentences 2 through 6 of the draft. Select the TWO sentences that leave out a comma they need.",
      targets: ["p5:1:2", "p5:1:3", "p5:1:4", "p5:2:1", "p5:2:2"],
      answer: ["p5:1:2", "p5:2:2"],
      pick: 2,
      clue: "Ask who is spoken to, and whether a line starts with an answer word. Then check each line for the comma it should have.",
      hints: [
        "Ask who is spoken to, and whether a line starts with an answer word. Then check each line for the comma it should have.",
        "Go through the five sentences one by one. Pick TWO.",
        "In sentence 4, the name at the end already has a comma before it. Check the other four."
      ],
      how: [
        "Check each sentence for a spoken-to name and for yes or no at the start.",
        "Sentence 2 speaks to Ana, but her name has no comma after it: \"Ana, please hand me the big sponge.\"",
        "Sentence 6 starts with an answer word and has no comma after it: \"Yes, I see the puddle by the tire.\"",
        "Sentences 3, 4 and 5 already have the commas they need."
      ],
      misconception: "A common mix-up is picking a sentence just because it has a comma in it. Pick only the sentences where a needed comma is missing.",
      why: "The answers are sentence 2 and sentence 6. In sentence 2, Raj is talking to Ana, so her name needs a comma after it. In sentence 6, the answer word Yes needs a comma right after it. Sentences 3, 4 and 5 already have the commas they need.",
      like: ["SK-GUM5-2-C06"]
    },
    {
      id: "SK-GUM5-2-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: [],
      prompt: "Pick the TWO lines in which the commas are placed correctly.",
      pick: 2,
      choices: [
        { text: "No I did not see the movie." },
        { text: "Come inside, Mrs. Hale.", correct: true },
        { text: "My sister baked, cookies for the team." },
        { text: "Tell the story to Gran, again." },
        { text: "Yes, the park is open on Sunday.", correct: true }
      ],
      clue: "Look at each line for a spoken-to name or an answer word at the start. Ask whether its commas are right, and whether any is missing.",
      hints: [
        "Look at each line for a spoken-to name or an answer word at the start. Ask whether its commas are right, and whether any is missing.",
        "Choose TWO. A few lines leave a needed comma out, and a few have one that has no reason to be there.",
        "In the Gran line, the comma comes between a request and the word again. Decide about the other four."
      ],
      how: [
        "Check each line for a person who is spoken to or for yes or no at the start.",
        "\"Come inside, Mrs. Hale.\" speaks to Mrs. Hale, so a comma comes before her name.",
        "\"Yes, the park is open on Sunday.\" has a comma right after Yes.",
        "The other three are wrong: No I needs a comma after No, and the commas after baked and after Gran do not belong."
      ],
      misconception: "A common mix-up is putting a comma wherever a line seems to pause. A comma goes next to a spoken-to name or after an answer word.",
      why: "The answers are \"Come inside, Mrs. Hale.\" and \"Yes, the park is open on Sunday.\" One speaks to Mrs. Hale, and the other starts with an answer word. The rest should say \"No, I did not see the movie.\", \"My sister baked cookies for the team.\" and \"Tell the story to Gran again.\"",
      like: ["SK-GUM5-2-C07"]
    },
    {
      id: "SK-GUM5-2-S08",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: [],
      prompt: "Each line below speaks to someone by name but has no comma. Decide on which side of the name the comma belongs.",
      cols: ["Left of the name", "Right of the name"],
      rows: [
        { text: "Look at this shell Aunt Jo.", answer: 0 },
        { text: "Sam did you hear that noise?", answer: 1 },
        { text: "Hold the rope tight Ruth.", answer: 0 },
        { text: "Papa I lost a tooth today!", answer: 1 }
      ],
      clue: "Find the name of the person who is spoken to in each line. Notice whether it opens or closes the line.",
      hints: [
        "Find the name of the person who is spoken to in each line. Notice whether it opens or closes the line.",
        "Take one row at a time. Read the line aloud and listen for the pause beside the name.",
        "In the line with Ruth, the name closes the line. Decide about the other rows."
      ],
      how: [
        "Find the name in each line: Aunt Jo, Sam, Ruth and Papa.",
        "A name that closes a line gets a comma on its left. A name that opens a line gets a comma on its right.",
        "Aunt Jo and Ruth close their lines, so the comma goes on the left. Sam and Papa open their lines, so it goes on the right."
      ],
      misconception: "A common mix-up is putting the comma on the same side of every name. The comma sits between the name and the other words.",
      why: "The commas go to the left of Aunt Jo and Ruth, because those names close their lines: \"Look at this shell, Aunt Jo.\" and \"Hold the rope tight, Ruth.\" The commas go to the right of Sam and Papa, because those names open their lines: \"Sam, did you hear that noise?\" and \"Papa, I lost a tooth today!\"",
      like: ["SK-GUM5-2-C08"]
    },
    {
      id: "SK-GUM5-2-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: ["p5"],
      prompt: "In sentence 8 of the draft, Ana's name sits between two commas: \"We can rest, Ana, after we dry the wheels.\" What do the pair of commas tell the reader?",
      choices: [
        { text: "Ana is being told about, and the commas show she is the subject of the sentence." },
        { text: "The words between the commas are the most important ones in the sentence." },
        { text: "Ana is being spoken to, and the commas keep her name apart from the other words.", correct: true },
        { text: "Any word that sits in the middle of a sentence needs a comma on each side." }
      ],
      clue: "Ask who Raj is talking to and what the commas do for that name.",
      hints: [
        "Ask who Raj is talking to and what the commas do for that name.",
        "Read the sentence once with the name and once without it. Think about what the commas are doing.",
        "The commas have nothing to do with how important a word is. Check the other three."
      ],
      how: [
        "Read sentence 8. Raj is speaking right to Ana.",
        "Her name is in the middle, so the commas keep it apart from the other words.",
        "The answer is \"Ana is being spoken to, and the commas keep her name apart from the other words.\""
      ],
      misconception: "A common mix-up is thinking the commas mark an important word. They mark a name that is spoken to.",
      why: "The answer is \"Ana is being spoken to, and the commas keep her name apart from the other words.\" Raj talks right to Ana, and her name sits in the middle, so it has a comma on each side. A middle word does not get commas just for being in the middle.",
      like: ["SK-GUM5-2-C09"]
    },
    {
      id: "SK-GUM5-2-S10",
      type: "dropdown",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: ["p5"],
      prompt: "The last line of the draft needs a mark. Choose the words that make it right.",
      text: "Raj: {0} did a great job today.",
      slots: [
        {
          options: ["Ana, you", "Ana you", "Ana you,"],
          answer: 0
        }
      ],
      clue: "Ask who Raj is talking to, and think about what should come between that name and the next word.",
      hints: [
        "Ask who Raj is talking to, and think about what should come between that name and the next word.",
        "Say each choice out loud and listen for the pause.",
        "One choice puts the mark at the end, after the word you. Decide between the other two."
      ],
      how: [
        "Read sentence 10. Raj is talking to Ana.",
        "A name at the start of a sentence is followed by a comma.",
        "The answer is Ana, you."
      ],
      misconception: "A common mix-up is leaving out the comma because the name and the next word seem to go together. A spoken-to name still needs its comma.",
      why: "The answer is Ana, you. Raj is talking to Ana, so a comma comes right after her name. Ana you leaves it out, and Ana you, puts it after the wrong word.",
      like: ["SK-GUM5-2-C10"]
    },
    {
      id: "SK-GUM5-2-S11",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: ["p6"],
      prompt: "Read sentences 5 through 9 of the draft. Select the sentence in which a comma should be taken out.",
      targets: ["p6:2:1", "p6:2:2", "p6:2:3", "p6:2:4", "p6:2:5"],
      answer: ["p6:2:2"],
      pick: 1,
      clue: "Every comma needs a reason. Ask whether each one follows an answer word or sets off a name that is spoken to.",
      hints: [
        "Every comma needs a reason. Ask whether each one follows an answer word or sets off a name that is spoken to.",
        "Go through the five sentences one by one. Pick ONE. Ask who is spoken to and who is only told about.",
        "In sentence 8, Dad speaks right to Luis, and the comma sets off his name. Check the other four."
      ],
      how: [
        "Find each comma in the five sentences and ask what it does.",
        "Sentences 5, 7, 8 and 9 each have a comma after yes, no or a name that is spoken to.",
        "In sentence 6, nobody is talking to Zoe. The sentence only tells what she did, so the comma does not belong."
      ],
      misconception: "A common mix-up is leaving every comma that sits beside a name. A comma stays only when the sentence speaks to that person.",
      why: "The answer is sentence 6, \"Zoe, pushed the heavy door open with her foot.\" Nobody is talking to Zoe, because the line only tells what she did. The comma should come out. In the other four sentences, each comma follows an answer word or sets off a name that is spoken to.",
      like: ["SK-GUM5-2-C11"]
    },
    {
      id: "SK-GUM5-2-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: ["p6"],
      prompt: "The line near the end of the draft has no comma where one belongs. Pick the right ending.",
      text: "Dad: Set the plants by the {0}",
      slots: [
        {
          options: ["window, Luis.", "window Luis.", "window Luis,"],
          answer: 0
        }
      ],
      clue: "Ask who Dad is talking to, and where that name falls in the line.",
      hints: [
        "Ask who Dad is talking to, and where that name falls in the line.",
        "Say each choice at the end of the line and listen for the pause before the last word.",
        "One choice puts a comma after the name, where nothing comes next. Decide between the other two."
      ],
      how: [
        "Read sentence 10. Dad is talking to Luis, and his name is last.",
        "A name at the end of a sentence has a comma before it.",
        "The answer is window, Luis."
      ],
      misconception: "A common mix-up is putting the comma after the name. At the end of a sentence, the comma goes before it.",
      why: "The answer is window, Luis. Dad is talking to Luis, and the name closes the line, so the comma goes before it. Window Luis. leaves it out, and window Luis, puts it after the name.",
      like: ["SK-GUM5-2-C12"]
    },
    {
      id: "SK-GUM5-2-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: [],
      prompt: "Gus says, \"Any sentence with a name in it has to have commas.\" Pick the TWO sentences that prove Gus wrong.",
      pick: 2,
      choices: [
        { text: "Dan, look at this seashell." },
        { text: "Dan found a seashell on the beach.", correct: true },
        { text: "I think, Dan, that it is time to go." },
        { text: "Our team cheered for Nell.", correct: true },
        { text: "Can you swim, Nell?" }
      ],
      clue: "Gus says every sentence with a name has commas. Look for sentences that have a name, no commas, and are still right.",
      hints: [
        "Gus says every sentence with a name has commas. Look for sentences that have a name, no commas, and are still right.",
        "Pick TWO. Ask whether each sentence speaks to a person or only tells about a person.",
        "The sentence with I think speaks to Dan in the middle of a line. Decide about the other four."
      ],
      how: [
        "Look for a sentence that has a name and no commas and is still right.",
        "\"Dan found a seashell on the beach.\" and \"Our team cheered for Nell.\" only tell about people, so they need no commas.",
        "The other three speak right to Dan or Nell, so each has commas next to the name."
      ],
      misconception: "A common mix-up is choosing sentences with commas, because those are the ones that follow the rule. Gus is wrong where a name needs no commas.",
      why: "The answers are \"Dan found a seashell on the beach.\" and \"Our team cheered for Nell.\" Both only tell about a person, so no commas are needed. In the other three, someone speaks to Dan or Nell, so commas set off the name.",
      like: ["SK-GUM5-2-C13"]
    },
    {
      id: "SK-GUM5-2-S14",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: [],
      prompt: "Uncle Joe asks a question, and Pia answers it. Pick the words that complete each line.",
      text: "Uncle Joe: {0} Pia: {1}",
      slots: [
        {
          options: ["Pia, did you feed the fish?", "Pia did you feed the fish?", "Pia did, you feed the fish?"],
          answer: 0
        },
        {
          options: ["Yes, I fed them this morning.", "Yes I fed them this morning.", "Yes I fed, them this morning."],
          answer: 0
        }
      ],
      clue: "Think about who speaks to whom in each line, and which words should be set off.",
      hints: [
        "Think about who speaks to whom in each line, and which words should be set off.",
        "Work on one blank at a time. Read each choice aloud and notice where the speaker would pause.",
        "In the second blank, one choice has its only comma after the word fed. Decide about the other choices."
      ],
      how: [
        "In the first blank, Uncle Joe speaks to Pia. Her name opens the line, so a comma follows it.",
        "In the second blank, Pia answers with yes. Yes opens her answer, so a comma follows it.",
        "The answers are \"Pia, did you feed the fish?\" and \"Yes, I fed them this morning.\""
      ],
      misconception: "A common mix-up is putting the comma deeper into the line. It goes right after the name and right after the answer word.",
      why: "The answers are \"Pia, did you feed the fish?\" and \"Yes, I fed them this morning.\" Uncle Joe speaks to Pia, so her name gets a comma after it. Yes opens Pia's answer, so it gets a comma after it. The other choices leave the comma out or put it in the wrong place.",
      like: ["SK-GUM5-2-C14"]
    },
    {
      id: "SK-GUM5-2-S15",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes"
      ],
      passages: [],
      prompt: "Rita wrote, \"Dad said no to a second dessert.\" She believes a comma belongs after no, because no must always have one. Is she correct?",
      choices: [
        { text: "Yes. Every no in a sentence has to be followed by a comma." },
        { text: "Yes. A comma belongs after any word that comes right after said." },
        { text: "Not here. A comma follows no only when the sentence also has a name in it." },
        {
          text: "Not here. A comma follows no when it opens a reply, but here the word only names what Dad answered.",
          correct: true
        }
      ],
      clue: "Think about what the word no is doing in the sentence. Does it open a reply, or does it only name an answer?",
      hints: [
        "Think about what the word no is doing in the sentence. Does it open a reply, or does it only name an answer?",
        "Picture someone replying with no. Ask where a comma would go in that reply, and why.",
        "The reason for a comma does not depend on a name being in the sentence. Check the other three."
      ],
      how: [
        "Ask what no is doing. Nobody is replying to Dad in this sentence.",
        "No just names the answer Dad gave, so no comma follows it.",
        "The answer is \"Not here. A comma follows no when it opens a reply, but here the word only names what Dad answered.\""
      ],
      misconception: "A common mix-up is thinking the word no always needs a comma. The comma is for a no that opens a reply.",
      why: "The answer is \"Not here. A comma follows no when it opens a reply, but here the word only names what Dad answered.\" Rita should leave the sentence as it is. A reply like \"No, thank you\" has a comma after no, but this sentence only reports what Dad said.",
      like: ["SK-GUM5-2-C15"]
    }
  ],
  addons: {
    "SK-GUM5-2-P1": {
      hints: [
        "Check each sentence for a spoken-to name and for yes or no at the start. Ask whether each comma is where it belongs.",
        "Read the four sentences one at a time. In each, ask whether a comma is missing or whether one is there for no reason.",
        "The sentence about Ella has a comma, but nobody is talking to Ella. Check the other three."
      ],
      how: [
        "Check each sentence for a spoken-to name and for yes or no at the start.",
        "\"Yes the library is open today.\" needs a comma after Yes, and \"Can you hear the thunder Malik?\" needs one before Malik.",
        "In the Ella sentence, the comma does not belong because the sentence only tells about Ella. The answer is \"Grandma, will you braid my hair?\""
      ],
      misconception: "A common mix-up is thinking a comma after a name is always right. It is right only when the sentence speaks to that person."
    },
    "SK-GUM5-2-P2": {
      hints: [
        "Look at the first word. Ask what kind of word it is and what it does at the start of an answer.",
        "Say each choice out loud and listen for where the pause comes.",
        "One choice puts the comma after I, where the speaker would not pause. Decide between the other two."
      ],
      how: [
        "The sentence starts with yes, and yes begins an answer.",
        "A comma comes right after yes when it starts an answer.",
        "The answer is Yes, I."
      ],
      misconception: "A common mix-up is putting the comma later in the line. The comma goes right after yes."
    },
    "SK-GUM5-2-P3": {
      hints: [
        "Ask whether each sentence talks TO the person or only tells ABOUT the person.",
        "Do one row at a time. Say each sentence as if you were reading it to the person who is named.",
        "\"Nora tied her shoe.\" tells what Nora did. Decide about the other rows."
      ],
      how: [
        "Ask about each row: is someone talking to the person, or telling about the person?",
        "\"Nora your shoe is untied.\" and \"Diego come see this bug!\" speak right to a person, so each needs a comma after the name.",
        "\"Nora tied her shoe.\" and \"Diego found a bug on the step.\" only tell about people, so they need no comma."
      ],
      misconception: "A common mix-up is adding a comma after every name. Add one only when the sentence speaks to that person."
    },
    "SK-GUM5-2-P4": {
      hints: [
        "Ask who is spoken to, and whether a line starts with an answer word. Check each line for the comma it should have.",
        "Read the five sentences one at a time. Pick ONE.",
        "\"Sofia waved to her friends from the bus.\" only tells about Sofia, so it needs no comma. Check the other four."
      ],
      how: [
        "Check each sentence for a spoken-to name and for yes or no at the start.",
        "The sentences that start with Yes, No and Aunt Rosa have the commas they need, and the Sofia sentence only tells about Sofia.",
        "In \"Owen please pass the crayons.\" the speaker talks to Owen, so a comma belongs after his name."
      ],
      misconception: "A common mix-up is picking the sentence that has no comma at all. That sentence needs none, because it only tells about a person."
    },
    "SK-GUM5-2-P5": {
      hints: [
        "Check each name to see whether the speaker talks to that person. Then check each yes or no at the start.",
        "Pick TWO. In some of the sentences, a needed comma is missing.",
        "In the Mom sentence, nobody is talking to Mom, but a comma follows her name. Decide about the other four."
      ],
      how: [
        "Check each sentence for a spoken-to name and for yes or no at the start.",
        "\"No, we are not going to the pool today.\" has a comma after No, and \"Let's go outside, Kayla.\" has a comma before Kayla.",
        "The other three are wrong: Yes I and Wait for me Andre! each need a comma, and the comma after Mom does not belong."
      ],
      misconception: "A common mix-up is thinking every name needs a comma. A comma is needed only when the sentence speaks to that person."
    }
  },
  /* B8:core:end */
  test: [
    { id: "SK-GUM5-2-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "Yes, the puppy can sleep in my room.", correct: true },
        { text: "Ms. Brown, gave us a spelling test." },
        { text: "Is this your backpack Hector?" },
        { text: "No I do not want a turn on the swing." }
      ],
      clue: "Look for a person spoken to by name and for yes or no at the start. Then look for a comma that does not belong.",
      why: "The answer is \"Yes, the puppy can sleep in my room.\" Yes starts the answer, so a comma follows it. The others should say \"Is this your backpack, Hector?\" and \"No, I do not want a turn on the swing.\" The Ms. Brown sentence only tells about her, so it needs no comma." },
    { id: "SK-GUM5-2-T2", type: "dropdown", points: 2, dok: 1, passages: [],
      prompt: "Mom says the first sentence to Leah, and Leah answers with the second. Choose the words that correctly complete what they say.",
      text: "{0} please feed the fish. {1} I will feed them right now.",
      slots: [
        { options: ["Leah", "Leah,", "Leah;"], answer: 1 },
        { options: ["Yes", "Yes,", "Yes;"], answer: 1 }
      ],
      clue: "Mom is talking to a person by name. Leah's answer starts with an answer word.",
      why: "The answers are Leah, and Yes, with commas. Mom is talking to Leah, so a comma follows her name. Yes starts Leah's answer, so a comma follows it: \"Leah, please feed the fish.\" \"Yes, I will feed them right now.\"" },
    { id: "SK-GUM5-2-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "These sentences have no commas yet. Decide if each one needs a comma after the first word or name.",
      cols: ["Needs a comma", "No comma needed"],
      rows: [
        { text: "Yes we can stay up late tonight.", answer: 0 },
        { text: "Mr. Lee you dropped your keys.", answer: 0 },
        { text: "Mr. Lee dropped his keys.", answer: 1 },
        { text: "Jordan rode the bus home.", answer: 1 }
      ],
      clue: "Does the sentence start with yes or no? Is someone talking TO the person, or only telling ABOUT the person?",
      why: "\"Yes, we can stay up late tonight.\" needs a comma after Yes. \"Mr. Lee, you dropped your keys.\" needs a comma because someone is talking to Mr. Lee. \"Mr. Lee dropped his keys.\" and \"Jordan rode the bus home.\" only tell about people, so no comma is needed." },
    { id: "SK-GUM5-2-T4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Lily, your painting is beautiful.",
        "Come inside now Ruby.",
        "Abby, may I borrow your eraser?",
        "We sang songs with Grandpa on the porch.",
        "No, the store is closed on Sunday."
      ],
      answer: [1], pick: 1,
      clue: "Find each sentence where someone is spoken to by name. Is every name set off with a comma?",
      why: "The error is in \"Come inside now Ruby.\" The speaker is talking to Ruby, so a comma belongs before her name: \"Come inside now, Ruby.\"" },
    { id: "SK-GUM5-2-T5", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Where should a comma go in this sentence?",
      stem: "Carlos can you help me carry this box?",
      choices: [
        { text: "after Carlos", correct: true },
        { text: "after you" },
        { text: "after me" },
        { text: "after carry" }
      ],
      clue: "Who is being spoken to? Separate that name from the rest of the sentence.",
      why: "The answer is after Carlos. The speaker is talking to Carlos, so a comma separates his name from the rest: \"Carlos, can you help me carry this box?\"" }
  ]
});

/* 3. Apostrophes to form plural possessive nouns */
PP.addLesson({
  code: "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns",
  title: "Apostrophes for more than one owner",
  teach: {
    big: "To show that something belongs to more than one owner, write the plural word first. If it ends in s, add just an apostrophe. If it does not end in s, add 's.",
    points: [
      "You already know that one owner gets 's: one student's desk. Now there is more than one owner, so start with the plural word.",
      "Most plurals end in s. To show they own something, put the apostrophe after the s: the students' desks, the two dogs' bowls.",
      "A few plurals do not end in s, like children, men and women. Add 's to these: the children's books, the women's team."
    ],
    words: [
      { term: "plural", means: "more than one" },
      { term: "possessive", means: "a word that shows who owns something" }
    ],
    example: {
      label: "Example",
      lines: [
        "one girl's coat → many girls' coats",
        "one child's toy → many children's toys"
      ],
      note: "Girls already ends in s, so only an apostrophe is added after the s. Children does not end in s, so 's is added."
    },
    tip: "Before you choose, ask: How many owners are there? Look for words like two, all or many."
  },
  learn: [
    {
      show: ["All of the ___ cars were parked in the front row.", "(The cars belong to all of the teachers.)"],
      ask: "How should you write teachers to show the cars belong to all of them?",
      steps: [
        "Count the owners. All of the teachers means more than one.",
        "Write the plural: teachers. It ends in s.",
        "When the plural ends in s, add only an apostrophe after the s."
      ],
      answer: "Write teachers': \"All of the teachers' cars were parked in the front row.\""
    },
    {
      show: ["The ___ coats hung on hooks by the door.", "(The coats belong to many children.)"],
      ask: "How should you write children to show the coats belong to them?",
      steps: [
        "There is more than one owner, so start with the plural: children.",
        "Check the end of the word. Children does not end in s.",
        "When a plural does not end in s, add 's."
      ],
      answer: "Write children's: \"The children's coats hung on hooks by the door.\""
    }
  ],
  parent: "Around the house, name things that belong to more than one person, like the boys' room or your grandparents' car. Have your child write the words on a sticky note and check where the apostrophe goes.",
  passages: [],
  practice: [
    { id: "SK-GUM5-3-P1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "All four players' shirts were muddy after the game.", correct: true },
        { text: "The childrens' kites flew over the hill." },
        { text: "The two teacher's cars are parked out front." },
        { text: "Our dogs's leashes hang by the back door." }
      ],
      clue: "Count the owners in each sentence. Then check: Does the plural end in s or not?",
      why: "The answer is \"All four players' shirts were muddy after the game.\" Players is plural and ends in s, so only an apostrophe is added. The others should say children's, teachers' and dogs'." },
    { id: "SK-GUM5-3-P2", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "The jackets belong to twenty students. The garden belongs to all the children at school. Choose the words that correctly complete the sentence.",
      text: "All twenty {0} jackets were piled on a bench next to the {1} garden.",
      slots: [
        { options: ["student's", "students'", "students"], answer: 1 },
        { options: ["childrens'", "children's", "childrens"], answer: 1 }
      ],
      clue: "Both blanks show more than one owner. For each plural, check whether it ends in s.",
      why: "The answers are students' and children's. Students ends in s, so the apostrophe goes after the s. Children does not end in s, so it gets 's." },
    { id: "SK-GUM5-3-P3", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which words show the nests that belong to many birds?",
      choices: [
        { text: "the birds' nests", correct: true },
        { text: "the bird's nests" },
        { text: "the birds's nests" },
        { text: "the birds nests'" }
      ],
      clue: "Start with the plural word for many birds. Then decide where the apostrophe goes.",
      why: "The answer is the birds' nests. Birds is plural and ends in s, so only an apostrophe goes after the s. Bird's would mean just one bird." },
    { id: "SK-GUM5-3-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each one show one owner or more than one owner?",
      cols: ["One owner", "More than one owner"],
      rows: [
        { text: "the girl's bike", answer: 0 },
        { text: "the girls' bikes", answer: 1 },
        { text: "the children's songs", answer: 1 },
        { text: "my brother's room", answer: 0 }
      ],
      clue: "Cover the apostrophe and the s after it. Is the word left over one thing or more than one?",
      why: "The girl's bike and my brother's room each have one owner. The girls' bikes has more than one owner because girls is plural. The children's songs has more than one owner because children is plural." },
    { id: "SK-GUM5-3-P5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "The babies' blankets were folded in a pile.",
        "Both of my aunts' houses are in Augusta.",
        "The mens' choir sang at the fair.",
        "My two cousins' dog is named Biscuit.",
        "The kittens' basket sat by the warm stove."
      ],
      answer: [2], pick: 1,
      clue: "For each owner word, decide if it is plural. Then check where the apostrophe goes.",
      why: "The error is in \"The mens' choir sang at the fair.\" Men does not end in s, so it gets 's: the men's choir." }
  ],
  test: [
    { id: "SK-GUM5-3-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which words show the hats that belong to many women?",
      choices: [
        { text: "the women's hats", correct: true },
        { text: "the womens' hats" },
        { text: "the woman's hats" },
        { text: "the womens hats" }
      ],
      clue: "Write the plural of woman first. Does it end in s?",
      why: "The answer is the women's hats. Women is already plural and does not end in s, so it gets 's. Woman's would mean only one woman." },
    { id: "SK-GUM5-3-T2", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Ari has two puppies, and each puppy has a bowl. The boots belong to Ari's dad and uncle. Choose the words that correctly complete the sentence.",
      text: "The two {0} bowls sit by the door, next to the {1} work boots.",
      slots: [
        { options: ["puppies'", "puppy's", "puppies"], answer: 0 },
        { options: ["mens'", "men's", "mans'"], answer: 1 }
      ],
      clue: "Both blanks show more than one owner. Write each plural, then check whether it ends in s.",
      why: "The answers are puppies' and men's. Two puppies is plural and ends in s, so only an apostrophe is added. Men does not end in s, so it gets 's." },
    { id: "SK-GUM5-3-T3", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO sentences that are correct.",
      choices: [
        { text: "The students' paintings hung in the hall.", correct: true },
        { text: "The two teams' coaches shook hands.", correct: true },
        { text: "The three bakers's pies cooled on the table." },
        { text: "Both of the twins' bike's had flat tires." },
        { text: "The childrens' tickets were in an envelope." }
      ],
      pick: 2,
      clue: "Check every apostrophe. Does it show an owner? If the owner is plural, does the word end the right way?",
      why: "The answers are \"The students' paintings hung in the hall.\" and \"The two teams' coaches shook hands.\" Students and teams end in s, so each gets only an apostrophe. The others should say bakers', bikes (no apostrophe, because the bikes do not own anything) and children's." },
    { id: "SK-GUM5-3-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "The towels belong to all of the swimmers on the team. Which word correctly completes the sentence?",
      stem: "The ___ towels were drying in the sun.",
      choices: [
        { text: "swimmers'", correct: true },
        { text: "swimmer's" },
        { text: "swimmers" },
        { text: "swimmers's" }
      ],
      clue: "How many owners are there? Write the plural, then decide where the apostrophe goes.",
      why: "The answer is swimmers'. The towels belong to many swimmers. Swimmers ends in s, so only an apostrophe is added after the s." },
    { id: "SK-GUM5-3-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "The farmers' trucks lined up at the market.",
        "The painters' brushes soaked in a jar of water.",
        "Our neighbors' yards are full of leaves.",
        "The two friend's tents were set up by the lake.",
        "The girls' relay team won first place."
      ],
      answer: [3], pick: 1,
      clue: "Check each apostrophe. Count the owners, then decide where the apostrophe goes.",
      why: "The error is in \"The two friend's tents were set up by the lake.\" Two friends is plural and ends in s, so the apostrophe goes after the s: the two friends' tents." }
  ]
});

/* 4. Indefinite pronouns with correct agreement */
PP.addLesson({
  code: "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement",
  title: "Matching verbs to everyone, each, both and many",
  teach: {
    big: "Everyone and each are treated as one, so they go with verbs like is, has and likes. Both and many mean more than one, so they go with verbs like are, have and like.",
    points: [
      "Some pronouns do not name a certain person. Everyone, everybody, someone and each are like this. They are singular, so they take a singular verb: Everyone is ready. Each has a turn. Everybody likes recess.",
      "Both and many always mean more than one. They are plural, so they take a plural verb: Both are ready. Many have a turn. Both like recess.",
      "Words like \"of the students\" can come right after the pronoun. Match the verb to the pronoun, not to the word next to the verb: Each of the students has a pencil. Many of the students have pencils."
    ],
    words: [
      { term: "pronoun", means: "a word that takes the place of a noun" },
      { term: "singular", means: "one" },
      { term: "plural", means: "more than one" }
    ],
    example: {
      label: "Example",
      lines: [
        "Everyone likes the new slide.",
        "Each of the kittens has a soft bed.",
        "Both of my brothers play soccer.",
        "Many of the trees have red leaves."
      ],
      note: "Everyone and each are singular, so they go with likes and has. Both and many are plural, so they go with play and have. In \"Each of the kittens has,\" the verb matches each, not kittens."
    },
    tip: "Cover up any words like \"of the kittens.\" Then read the pronoun with the verb: Each has, Both have."
  },
  learn: [
    {
      show: ["Both of my sisters (like / likes) to draw."],
      ask: "Which verb is correct?",
      steps: [
        "Find the pronoun at the start: Both.",
        "Both always means two, so it is plural.",
        "A plural pronoun goes with the plural verb. Read it: Both like."
      ],
      answer: "like: \"Both of my sisters like to draw.\""
    },
    {
      show: ["Each of the puppies (has / have) a blue collar."],
      ask: "Which verb is correct?",
      steps: [
        "Find the pronoun at the start: Each.",
        "Cover up \"of the puppies.\" The verb must match Each, not puppies.",
        "Each is treated as one, so it is singular. Read it: Each has."
      ],
      answer: "has: \"Each of the puppies has a blue collar.\""
    }
  ],
  parent: "Play a quick game at dinner. Say a starter like \"Everyone at this table ___\" or \"Both of us ___\" and let your child finish it with the right verb, such as likes or like.",
  passages: [],
  practice: [
    { id: "SK-GUM5-4-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Everyone on the bus {0} ready for the field trip.",
      slots: [
        { options: ["is", "are", "be"], answer: 0 }
      ],
      clue: "Is everyone singular or plural? Skip \"on the bus\" and read the pronoun with each verb.",
      why: "The answer is is. Everyone is treated as one, so it takes the singular verb is: \"Everyone on the bus is ready for the field trip.\"" },
    { id: "SK-GUM5-4-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "Many of the flowers have yellow petals.", correct: true },
        { text: "Each of the boys have a library card." },
        { text: "Both of the cookies is still warm." },
        { text: "Everybody want to see the baby goats." }
      ],
      clue: "Find the pronoun in each sentence. Is it singular or plural? Then check the verb.",
      why: "The answer is \"Many of the flowers have yellow petals.\" Many is plural, so it takes have. The others should say \"Each of the boys has,\" \"Both of the cookies are\" and \"Everybody wants.\"" },
    { id: "SK-GUM5-4-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which verb belongs in each sentence? Match each one.",
      cols: ["is", "are"],
      rows: [
        { text: "Everyone ___ excited.", answer: 0 },
        { text: "Both of my shoes ___ wet.", answer: 1 },
        { text: "Each of the cups ___ blue.", answer: 0 },
        { text: "Many of the apples ___ ripe.", answer: 1 }
      ],
      clue: "Look only at the first word of each sentence. Is it treated as one, or does it mean more than one?",
      why: "Everyone is excited, and Each of the cups is blue, because everyone and each are singular. Both of my shoes are wet, and Many of the apples are ripe, because both and many are plural." },
    { id: "SK-GUM5-4-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Each of the players has a water bottle.",
        "Both of my grandparents live in Valdosta.",
        "Everyone in the class likes the new fish tank.",
        "Many of the birds flies south for the winter.",
        "Somebody left a jacket on the bench."
      ],
      answer: [3], pick: 1,
      clue: "Cover the words after each pronoun and read the pronoun with its verb. Which pair does not sound right?",
      why: "The error is in \"Many of the birds flies south for the winter.\" Many is plural, so it takes the plural verb fly: \"Many of the birds fly south for the winter.\"" },
    { id: "SK-GUM5-4-P5", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO sentences that are correct.",
      choices: [
        { text: "Both of the kites are stuck in the tree.", correct: true },
        { text: "Each of the kids gets a sticker.", correct: true },
        { text: "Everyone have a partner for the game." },
        { text: "Many of the books is about animals." },
        { text: "Both of the dogs barks at the mail truck." }
      ],
      pick: 2,
      clue: "Singular pronouns: everyone, each. Plural pronouns: both, many. Check that each verb matches its pronoun.",
      why: "The answers are \"Both of the kites are stuck in the tree.\" and \"Each of the kids gets a sticker.\" Both is plural and takes are. Each is singular and takes gets. The others should say \"Everyone has,\" \"Many of the books are\" and \"Both of the dogs bark.\"" }
  ],
  test: [
    { id: "SK-GUM5-4-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "Each of the bikes has a bell.", correct: true },
        { text: "Everyone are welcome at the picnic." },
        { text: "Many of my friends likes to swim." },
        { text: "Both of the windows was open." }
      ],
      clue: "Find the pronoun in each sentence. Decide if it is singular or plural, then check its verb.",
      why: "The answer is \"Each of the bikes has a bell.\" Each is singular, so it takes has. The others should say \"Everyone is,\" \"Many of my friends like\" and \"Both of the windows were.\"" },
    { id: "SK-GUM5-4-T2", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Both of the twins {0} in third grade, and each of them {1} in a different class.",
      slots: [
        { options: ["is", "are", "be"], answer: 1 },
        { options: ["is", "are", "be"], answer: 0 }
      ],
      clue: "Find the pronoun before each blank. Is it treated as one, or does it mean more than one?",
      why: "The answers are are and is. Both is plural, so \"Both of the twins are.\" Each is singular, so \"each of them is.\"" },
    { id: "SK-GUM5-4-T3", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "Everybody gets one scoop of ice cream.",
        "Many of the leaves look orange and red.",
        "Each of the drums make a loud sound.",
        "Both of the jars hold buttons.",
        "Someone knocks on our door every morning."
      ],
      answer: [2], pick: 1,
      clue: "Cover the words after each pronoun. Read the pronoun with its verb and listen for the pair that does not match.",
      why: "The error is in \"Each of the drums make a loud sound.\" Each is singular, so it takes the singular verb makes: \"Each of the drums makes a loud sound.\"" },
    { id: "SK-GUM5-4-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which verb belongs in each sentence? Match each one.",
      cols: ["has", "have"],
      rows: [
        { text: "Everyone ___ a library book.", answer: 0 },
        { text: "Many of the students ___ lunch boxes.", answer: 1 },
        { text: "Each of the rooms ___ a window.", answer: 0 },
        { text: "Both of my uncles ___ beards.", answer: 1 }
      ],
      clue: "Look at the pronoun that starts each sentence, not the word right before the blank.",
      why: "Everyone has a library book, and Each of the rooms has a window, because everyone and each are singular. Many of the students have lunch boxes, and Both of my uncles have beards, because many and both are plural." },
    { id: "SK-GUM5-4-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which word correctly begins the sentence?",
      stem: "___ of the students wants to read the new book first.",
      choices: [
        { text: "Each", correct: true },
        { text: "Both" },
        { text: "Many" },
        { text: "All" }
      ],
      clue: "Look at the verb wants. Does it go with one or with more than one?",
      why: "The answer is Each. Wants is a singular verb, and each is the only choice treated as one. Both, many and all of the students mean more than one, so they would take want." }
  ]
});

/* 5. Subordinating conjunctions to join clauses */
PP.addLesson({
  code: "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses",
  title: "Joining ideas with because, when, after and if",
  teach: {
    big: "Joining words like because, when, after and if put two ideas into one sentence and show how the ideas connect.",
    points: [
      "A clause is a group of words with a naming part and a telling part (what someone or something does or is), like \"the bell rang\" or \"the bus was late.\" Words like because, when, after, before, until, if and although can join two clauses into one sentence.",
      "Pick the joining word that fits the meaning. Because tells why. When, after, before and until tell when. If tells what must happen for the other part to happen. Although shows a surprise.",
      "A part that starts with one of these words cannot stand alone. \"Because the bus was late\" is not a complete sentence. Join it to another clause: We missed the bell because the bus was late."
    ],
    words: [
      { term: "clause", means: "a group of words with a naming part and a telling part" },
      { term: "conjunction", means: "a joining word" }
    ],
    example: {
      label: "Example",
      lines: [
        "Two ideas: We stayed inside. It was raining.",
        "Joined: We stayed inside because it was raining."
      ],
      note: "Because joins the two ideas and tells why we stayed inside. \"Because it was raining\" could not stand alone as a sentence."
    },
    tip: "Read the sentence with each choice in the blank. Ask: Does this joining word make sense? Does it tell why, when or if?"
  },
  learn: [
    {
      show: ["I brush my teeth. I go to bed.", "I brush my teeth ___ I go to bed."],
      ask: "Which joining word fits best: because, before or if?",
      steps: [
        "Think about how the two ideas connect. First I brush my teeth, then I go to bed.",
        "That is about time, so I need a word that tells when.",
        "Brushing comes first, so the word that fits is before."
      ],
      answer: "before: \"I brush my teeth before I go to bed.\""
    },
    {
      show: ["After the game ended."],
      ask: "Is this a complete sentence? How could you fix it?",
      steps: [
        "Look at the first word. After is a joining word.",
        "A part that starts with a joining word leaves you asking, \"Then what happened?\"",
        "Add a complete idea to finish it."
      ],
      answer: "It is not complete. One fix: \"After the game ended, we shook hands with the other team.\""
    }
  ],
  parent: "Ask your child why and when questions during the day, and have them answer in one sentence with because, when, after or if, like \"We wear coats because it is cold.\"",
  passages: [],
  practice: [
    { id: "SK-GUM5-5-P1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that best completes the sentence.",
      text: "We could not see the stars {0} the sky was full of clouds.",
      slots: [
        { options: ["because", "although", "before"], answer: 0 }
      ],
      clue: "How do the two ideas connect? Does the second part tell why, tell when, or show a surprise?",
      why: "The answer is because. The clouds are the reason we could not see the stars, and because tells why." },
    { id: "SK-GUM5-5-P2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which word best completes the sentence?",
      stem: "Mia will feed the cat ___ she gets home from school.",
      choices: [
        { text: "when", correct: true },
        { text: "because" },
        { text: "although" },
        { text: "until" }
      ],
      clue: "Is the second part telling why, telling when, or showing a surprise? Try each word in the blank.",
      why: "The answer is when. The second part tells when Mia will feed the cat: at the time she gets home." },
    { id: "SK-GUM5-5-P3", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the group of words that is NOT a complete sentence.",
      options: [
        "We ate lunch under the big oak tree.",
        "When the music started.",
        "The puppy chased its tail in circles.",
        "I will call you after I finish my chores.",
        "Because it was cold, we wore mittens."
      ],
      answer: [1], pick: 1,
      clue: "Look for a group of words that starts with a joining word and leaves you asking, \"Then what happened?\"",
      why: "The answer is \"When the music started.\" It starts with the joining word when, but there is no second clause to finish the idea. It could say, \"When the music started, we danced.\"" },
    { id: "SK-GUM5-5-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does the joining word in each sentence tell why or tell when?",
      cols: ["Tells why", "Tells when"],
      rows: [
        { text: "Sam smiled because he found his hat.", answer: 0 },
        { text: "Sam smiled after he found his hat.", answer: 1 },
        { text: "Lee yawned because she was sleepy.", answer: 0 },
        { text: "Lee yawned before she went to bed.", answer: 1 }
      ],
      clue: "Find the joining word in each sentence. Which one gives a reason? Which ones are about time?",
      why: "The sentences with because tell why: Sam found his hat, and Lee was sleepy. The sentences with after and before tell when." },
    { id: "SK-GUM5-5-P5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which word best completes the sentence?",
      stem: "___ it rains on Saturday, the picnic will move inside.",
      choices: [
        { text: "If", correct: true },
        { text: "Unless" },
        { text: "Although" },
        { text: "Until" }
      ],
      clue: "The picnic moves inside only in one case. Which word sets up that case?",
      why: "The answer is If. If tells what must happen for the picnic to move inside: rain on Saturday." }
  ],
  test: [
    { id: "SK-GUM5-5-T1", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that best completes the sentence.",
      text: "Dad turned on the porch light {0} it got dark outside.",
      slots: [
        { options: ["when", "although", "until"], answer: 0 }
      ],
      clue: "Try each word in the blank. Which one makes sense with the two ideas?",
      why: "The answer is when. It tells the time Dad turned on the light: as it got dark." },
    { id: "SK-GUM5-5-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which word best completes the sentence?",
      stem: "We had to wait in the car ___ the rain stopped.",
      choices: [
        { text: "until", correct: true },
        { text: "because" },
        { text: "if" },
        { text: "although" }
      ],
      clue: "Try each word in the blank. Which one makes the two ideas fit together?",
      why: "The answer is until. It tells how long they waited: up to the time the rain stopped." },
    { id: "SK-GUM5-5-T3", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO groups of words that are complete sentences.",
      choices: [
        { text: "Because my bike had a flat tire." },
        { text: "I walked to school because my bike had a flat tire.", correct: true },
        { text: "If you finish your homework." },
        { text: "We can play outside if you finish your homework.", correct: true },
        { text: "After we planted the seeds in rows." }
      ],
      pick: 2,
      clue: "A part that starts with a joining word needs another clause to finish the idea. Check whether each one feels finished.",
      why: "The answers are \"I walked to school because my bike had a flat tire.\" and \"We can play outside if you finish your homework.\" Each one joins two clauses. The others start with because, if or after and stop before the idea is finished." },
    { id: "SK-GUM5-5-T4", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that best complete the sentence.",
      text: "Kim wore shorts {0} the day was chilly, and she put on a jacket {1} she got to the park.",
      slots: [
        { options: ["although", "because", "if"], answer: 0 },
        { options: ["although", "after", "until"], answer: 1 }
      ],
      clue: "Read the sentence with each word in each blank. Which words make the ideas fit together?",
      why: "The answers are although and after. Wearing shorts on a chilly day is a surprise, and although shows a surprise. Kim put on the jacket once she got to the park, and after tells when." },
    { id: "SK-GUM5-5-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence correctly joins these two ideas?",
      stem: ["The puppy was tired.", "It had played all day."],
      choices: [
        { text: "The puppy was tired because it had played all day.", correct: true },
        { text: "The puppy was tired although it had played all day." },
        { text: "The puppy was tired. Because it had played all day." },
        { text: "The puppy was tired before it had played all day." }
      ],
      clue: "First decide how the ideas connect. Then make sure the joined words form one complete sentence.",
      why: "The answer is \"The puppy was tired because it had played all day.\" Playing all day is the reason the puppy was tired, and because tells why. \"Because it had played all day.\" cannot stand alone as its own sentence." }
  ]
});

/* 6. Commas after introductory phrases or clauses */
PP.addLesson({
  code: "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses",
  title: "Commas after an opening part",
  teach: {
    big: "When a sentence starts with an opening part like \"After lunch\" or \"When the bell rang,\" a comma usually goes after that part.",
    points: [
      "Some sentences begin with an opening part that tells when, where, why or what if. \"After school,\" \"In the morning\" and \"When the bell rang\" are opening parts.",
      "Put a comma at the end of the opening part, right before the main part of the sentence: When the bell rang, we lined up. After an opening part like \"When the bell rang,\" you need the comma. After a short one like \"After lunch,\" the comma is always OK.",
      "If the same part comes at the end of the sentence, you usually do not need a comma: We lined up when the bell rang."
    ],
    words: [
      { term: "opening part", means: "words at the start of a sentence that come before the main idea" }
    ],
    example: {
      label: "Example",
      lines: [
        "After the storm, we found a rainbow.",
        "If you are cold, you can borrow my sweater.",
        "We found a rainbow after the storm."
      ],
      note: "In the first two sentences, a comma comes right after the opening part. In the last sentence, \"after the storm\" comes at the end, so no comma is needed."
    },
    tip: "To find where the comma goes, cover the opening part. The words left over should make a complete sentence."
  },
  learn: [
    {
      show: ["When the oven timer beeped Mom took out the bread."],
      ask: "Where does the comma go?",
      steps: [
        "Find the opening part. It starts with When.",
        "Look for where the main idea begins. \"Mom took out the bread\" could be a sentence by itself.",
        "Put the comma between the opening part and the main idea."
      ],
      answer: "The comma goes after beeped: \"When the oven timer beeped, Mom took out the bread.\""
    },
    {
      show: ["On the way to the zoo we sang songs."],
      ask: "Where does the comma go?",
      steps: [
        "Find the opening part. It tells where: on the way to the zoo.",
        "Check the rest. \"We sang songs\" is a complete sentence.",
        "The comma goes at the end of the opening part."
      ],
      answer: "The comma goes after zoo: \"On the way to the zoo, we sang songs.\""
    }
  ],
  parent: "When you read together, hunt for sentences that start with words like After, When, If or In the morning. Have your child point to the comma that ends the opening part.",
  passages: [],
  practice: [
    { id: "SK-GUM5-6-P1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "When the movie ended, we clapped and cheered.", correct: true },
        { text: "After we ate dinner we washed the dishes." },
        { text: "Because the road was icy school, was closed." },
        { text: "Before the game started we stretched our legs." }
      ],
      clue: "Find the opening part of each sentence. Is there a comma right where the main idea begins?",
      why: "The answer is \"When the movie ended, we clapped and cheered.\" The comma comes right after the opening part. The others should say \"After we ate dinner, we...,\" \"Because the road was icy, school was closed,\" and \"Before the game started, we...\"" },
    { id: "SK-GUM5-6-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "{0} the kids ran outside to play.",
      slots: [
        { options: ["As soon as the rain stopped,", "As soon as, the rain stopped", "As soon as the rain, stopped"], answer: 0 }
      ],
      clue: "The comma goes at the end of the whole opening part, right before the main idea.",
      why: "The answer is \"As soon as the rain stopped,\" with the comma at the end. The opening part is \"As soon as the rain stopped,\" and the main idea, \"the kids ran outside to play,\" comes after the comma." },
    { id: "SK-GUM5-6-P3", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "In the spring, our class planted bean seeds.",
        "If you need help, raise your hand.",
        "While Dad cooked we set the table.",
        "After the fire drill, we went back inside.",
        "We set the table while Dad cooked."
      ],
      answer: [2], pick: 1,
      clue: "Find each sentence that starts with an opening part. Does each one have a comma before the main idea?",
      why: "The error is in \"While Dad cooked we set the table.\" The opening part, \"While Dad cooked,\" needs a comma after it: \"While Dad cooked, we set the table.\" The last sentence needs no comma because the while part comes at the end." },
    { id: "SK-GUM5-6-P4", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO sentences that use commas correctly.",
      choices: [
        { text: "Since it was Grandpa's birthday, we baked a cake.", correct: true },
        { text: "During the summer, we swim at the lake.", correct: true },
        { text: "When the puppy saw us it wagged its tail." },
        { text: "After, the parade we ate ice cream." },
        { text: "If the store is open we can buy milk." }
      ],
      pick: 2,
      clue: "Cover the opening part of each sentence. Is the comma right before the words that could stand alone?",
      why: "The answers are \"Since it was Grandpa's birthday, we baked a cake.\" and \"During the summer, we swim at the lake.\" Each comma ends the opening part. The puppy and store sentences are missing a comma, and the parade sentence has the comma in the wrong place. It should say \"After the parade, we ate ice cream.\"" },
    { id: "SK-GUM5-6-P5", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Where does a comma belong in this sentence?",
      stem: "Because the library was closed we read books at home.",
      choices: [
        { text: "after closed", correct: true },
        { text: "after Because" },
        { text: "after library" },
        { text: "after read" }
      ],
      clue: "Find the words that could be a sentence by themselves. The comma goes right before them.",
      why: "The answer is after closed. The opening part is \"Because the library was closed,\" and the main idea is \"we read books at home.\"" }
  ],
  test: [
    { id: "SK-GUM5-6-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "After the long hike, everyone took a nap.", correct: true },
        { text: "When the lights went out we lit a candle." },
        { text: "If you, look closely you can see the moon." },
        { text: "While the baby slept we played quietly." }
      ],
      clue: "Find the opening part in each sentence. Check that the comma comes right where the main idea starts.",
      why: "The answer is \"After the long hike, everyone took a nap.\" The comma ends the opening part. The others should say \"When the lights went out, we...,\" \"If you look closely, you...\" and \"While the baby slept, we...\"" },
    { id: "SK-GUM5-6-T2", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "At the end of the day, we cleaned our desks.",
        "When the whistle blew the swimmers jumped in.",
        "Because it was hot, we drank lots of water.",
        "The swimmers jumped in when the whistle blew.",
        "Before bedtime, I read a chapter of my book."
      ],
      answer: [1], pick: 1,
      clue: "Look at each sentence that begins with an opening part. Is a comma missing before the main idea?",
      why: "The error is in \"When the whistle blew the swimmers jumped in.\" It needs a comma after the opening part: \"When the whistle blew, the swimmers jumped in.\" The sentence with the when part at the end needs no comma." },
    { id: "SK-GUM5-6-T3", type: "dropdown", points: 2, dok: 1, passages: [],
      prompt: "Choose the words that correctly complete the sentences.",
      text: "{0} we pulled weeds in the garden. {1} we picked ripe tomatoes.",
      slots: [
        { options: ["In the morning,", "In the, morning", "In, the morning"], answer: 0 },
        { options: ["When the sun, went down", "When, the sun went down", "When the sun went down,"], answer: 2 }
      ],
      clue: "In each sentence, the comma goes at the end of the whole opening part.",
      why: "The answers are \"In the morning,\" and \"When the sun went down,\" with each comma at the end of the opening part, right before the main idea." },
    { id: "SK-GUM5-6-T4", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO sentences that use commas correctly.",
      choices: [
        { text: "After the bell rang, we lined up at the door.", correct: true },
        { text: "If it snows tomorrow, school might close.", correct: true },
        { text: "Before we left the house we fed the fish." },
        { text: "When we got to Savannah we saw a big bridge." },
        { text: "Because, I was thirsty I drank some water." }
      ],
      pick: 2,
      clue: "Cover the opening part. Is the comma right before the words that could stand alone?",
      why: "The answers are \"After the bell rang, we lined up at the door.\" and \"If it snows tomorrow, school might close.\" The fish and Savannah sentences are missing a comma after the opening part. The water sentence has the comma in the wrong place. It should say \"Because I was thirsty, I drank some water.\"" },
    { id: "SK-GUM5-6-T5", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Where does a comma belong in this sentence?",
      stem: "While we waited for the bus we played a word game.",
      choices: [
        { text: "after bus", correct: true },
        { text: "after While" },
        { text: "after waited" },
        { text: "after played" }
      ],
      clue: "Find the words that could be a sentence by themselves. The comma goes right before them.",
      why: "The answer is after bus. The opening part is \"While we waited for the bus,\" and the main idea is \"we played a word game.\"" }
  ]
});

/* 7. Capitalization and underlining, quotation marks or italics for titles of works */
PP.addLesson({
  code: "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar",
  title: "Writing titles of books, stories, poems and songs",
  teach: {
    big: "In a title, the first word and the important words start with capital letters. Book titles are in italics or underlined, and titles of stories, poems and songs go in quotation marks.",
    points: [
      "Capitalize the first word, the last word and every important word in a title. Small words like a, an, the, and, of, in, on, at, to and for stay lowercase unless they come first or last: The Fox and the Hen.",
      "The title of a whole book is shown in a special way. When you type it, use italics, which are slanted letters. When you write it by hand, draw a line under it.",
      "Titles of short works, such as stories, poems and songs, go inside quotation marks: We sang \"The Crickets Hum\" at camp."
    ],
    words: [
      { term: "title", means: "the name of a book, story, poem or song" },
      { term: "italics", means: "slanted letters used in typed writing" }
    ],
    example: {
      label: "Example",
      lines: [
        "Book: Tia and the Talking Pumpkin (typed in italics, or underlined by hand)",
        "Poem: \"A Song for the Rain\"",
        "Song: \"Ride the Yellow Bus\""
      ],
      note: "Important words like Tia, Talking, Pumpkin, Song and Rain have capitals. Small words like and, the and for stay lowercase in the middle. The poem and the song are short works, so they go in quotation marks."
    },
    tip: "This site cannot show underlining, so these questions check quotation marks and capital letters. Look at every word in the title and ask: Is it a small word or an important word?"
  },
  learn: [
    {
      show: ["Fix the capital letters in this story title: the dog in the snow"],
      ask: "Which words need capital letters, and how should the title look in a sentence?",
      steps: [
        "The first word always gets a capital: The.",
        "Dog and Snow are important words, so they get capitals.",
        "In and the are small words in the middle, so they stay lowercase.",
        "It is a story, a short work, so in a sentence it goes in quotation marks."
      ],
      answer: "\"The Dog in the Snow\""
    },
    {
      show: ["Kofi is typing a report about two things he likes: a chapter book called Night of the Owls and a song called The Frog Song."],
      ask: "How should Kofi show each title?",
      steps: [
        "Ask: Is it a whole book, or a short work like a story, poem or song?",
        "Night of the Owls is a whole book. He is typing, so he uses italics. If he wrote by hand, he would underline it.",
        "The Frog Song is a song, a short work, so it goes in quotation marks."
      ],
      answer: "The book title goes in italics, and the song title goes in quotation marks: \"The Frog Song.\""
    }
  ],
  parent: "Have your child write the title of a favorite book by hand and underline it, then write the name of a favorite song in quotation marks. Check together that the first word and the important words have capitals.",
  passages: [],
  practice: [
    { id: "SK-GUM5-7-P1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence writes the poem title correctly?",
      choices: [
        { text: "My sister read the poem \"The Moon and the Fox\" to me.", correct: true },
        { text: "My sister read the poem \"the Moon and the Fox\" to me." },
        { text: "My sister read the poem \"The Moon and the fox\" to me." },
        { text: "My sister read the poem The Moon and the Fox to me." }
      ],
      clue: "Check two things: Does the poem title have quotation marks? Do the first word and the important words have capitals?",
      why: "The answer is 'My sister read the poem \"The Moon and the Fox\" to me.' A poem title goes in quotation marks, and The, Moon and Fox get capitals. The others have a lowercase the at the start, a lowercase fox, or no quotation marks." },
    { id: "SK-GUM5-7-P2", type: "match", points: 2, dok: 1, passages: [],
      prompt: "How should each title be shown in typed writing? Match each one.",
      cols: ["Italics (or underline by hand)", "Quotation marks"],
      rows: [
        { text: "the title of a chapter book", answer: 0 },
        { text: "the title of a poem", answer: 1 },
        { text: "the title of a song", answer: 1 },
        { text: "the title of a short story", answer: 1 },
        { text: "the title of a picture book", answer: 0 }
      ],
      clue: "Ask: Is it a whole book, or a short work?",
      why: "Chapter books and picture books are whole books, so their titles go in italics when typed or are underlined by hand. Poems, songs and short stories are short works, so their titles go in quotation marks." },
    { id: "SK-GUM5-7-P3", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        'Our teacher read "A Gift for Grandpa" to the class.',
        'Jamal wrote a poem called "My Best Friend" for art day.',
        'We sang "the Bells of Winter" at the concert.',
        'Lucy hums "Sunny Day Parade" while she draws.',
        'Dad told us the story "The Turtle and the Kite" at bedtime.'
      ],
      answer: [2], pick: 1,
      clue: "Look at the first word of every title. Then look at each important word.",
      why: "The error is in 'We sang \"the Bells of Winter\" at the concert.' The first word of a title always gets a capital, so it should be \"The Bells of Winter.\"" },
    { id: "SK-GUM5-7-P4", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the title that correctly completes the sentence.",
      text: "Our class read the story {0} during reading time.",
      slots: [
        { options: ['"The Owl on the Fence"', '"The owl on the Fence"', 'The Owl on the Fence'], answer: 0 }
      ],
      clue: "A story is a short work. Check the marks around the title and the capital on each important word.",
      why: "The answer is \"The Owl on the Fence\" in quotation marks. A story title goes in quotation marks, and the important words Owl and Fence get capitals." },
    { id: "SK-GUM5-7-P5", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which title uses capital letters correctly?",
      choices: [
        { text: "A Picnic at the Lake", correct: true },
        { text: "A Picnic at The Lake" },
        { text: "a Picnic at the Lake" },
        { text: "A picnic at the Lake" }
      ],
      clue: "The first word and the important words get capitals. Small words in the middle stay lowercase.",
      why: "The answer is A Picnic at the Lake. A is the first word, Picnic and Lake are important words, and at and the are small words in the middle." }
  ],
  test: [
    { id: "SK-GUM5-7-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence writes the song title correctly?",
      choices: [
        { text: "We danced to \"The Rainy Day Shuffle\" at the party.", correct: true },
        { text: "We danced to \"The rainy Day Shuffle\" at the party." },
        { text: "We danced to The Rainy Day Shuffle at the party." },
        { text: "We danced to \"the Rainy Day Shuffle\" at the party." }
      ],
      clue: "Check the marks around the song title. Then check the first word and every important word.",
      why: "The answer is 'We danced to \"The Rainy Day Shuffle\" at the party.' A song title goes in quotation marks, and every word in this title is important or first, so each one gets a capital." },
    { id: "SK-GUM5-7-T2", type: "ms", points: 2, dok: 2, passages: [],
      prompt: "Choose the TWO sentences that write the title correctly.",
      choices: [
        { text: "Grandma read the poem \"Leaves in the Wind\" to me.", correct: true },
        { text: "Our class acted out the story \"The Goat and the Bridge\" today.", correct: true },
        { text: "We sang \"Sunshine on The Farm\" on the bus." },
        { text: "Ty wrote a poem called \"my Pet Snail\" for class." },
        { text: "Ana read us her story Night at the Pond after lunch." }
      ],
      pick: 2,
      clue: "Each title here is a short work. Check for quotation marks, a capital on the first word, and the right capitals on the other words.",
      why: "The answers are the sentences with \"Leaves in the Wind\" and \"The Goat and the Bridge.\" The others should say \"Sunshine on the Farm\" (the is a small word in the middle), \"My Pet Snail\" (first word) and \"Night at the Pond\" in quotation marks." },
    { id: "SK-GUM5-7-T3", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the titles that correctly complete the sentence.",
      text: "We listened to the song {0} in art class, and then Ms. Bell read the poem {1} to us.",
      slots: [
        { options: ['"Paint the Sky Blue"', '"Paint The Sky Blue"', 'Paint the Sky Blue'], answer: 0 },
        { options: ['"the Snowman\'s Hat"', '"The Snowman\'s Hat"', '"The Snowman\'s hat"'], answer: 1 }
      ],
      clue: "Both titles are short works. Check the quotation marks, the first word, and the small words in the middle.",
      why: "The answers are \"Paint the Sky Blue\" and \"The Snowman's Hat,\" both in quotation marks. The is a small word in the middle of the song title, so it stays lowercase. In the poem title, The is first and Hat is important, so both get capitals." },
    { id: "SK-GUM5-7-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Ruby is writing a report by hand about a book called Rocket Dog Saves the Day. How should she show the book title?",
      choices: [
        { text: "Underline it.", correct: true },
        { text: "Put it in quotation marks." },
        { text: "Write it in slanted letters (italics)." },
        { text: "Capitalize only the first word." }
      ],
      clue: "Is it a whole book or a short work? Is Ruby typing or writing by hand?",
      why: "The answer is \"Underline it.\" It is a whole book, and Ruby is writing by hand, so she draws a line under the title. Slanted letters (italics) are for typed writing, not handwriting. Quotation marks are for short works like stories, poems and songs. Every important word in the title still gets a capital." },
    { id: "SK-GUM5-7-T5", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which title uses capital letters correctly?",
      choices: [
        { text: "The Secret of the Old Barn", correct: true },
        { text: "The Secret Of the Old Barn" },
        { text: "The secret of the Old Barn" },
        { text: "the Secret of the Old Barn" }
      ],
      clue: "Capitalize the first word and the important words. Leave small words in the middle lowercase.",
      why: "The answer is The Secret of the Old Barn. The is first, Secret, Old and Barn are important words, and of and the are small words in the middle." }
  ]
});

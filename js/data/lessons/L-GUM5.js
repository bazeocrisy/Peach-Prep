/* Lessons: 3-5.L.GC.1 Grammar, usage & mechanics, grade 3 Introduce (I) rows, part 5. Not assessed on the Milestones. Schema: docs/SPEC.md §8. */

/* 1. Capitalization in abbreviations, proper adjectives and formal titles */
PP.addLesson({
  code: "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations",
  title: "Capital letters in Mr., Dr., St. and words like American",
  teach: {
    big: "Titles like Mr. and Dr., short forms of names like Jan. and St., and describing words made from place names like American all start with a capital letter.",
    points: [
      "A title right before a person's name starts with a capital letter: Mr. Cole, Dr. Shah, Mayor Green. The short titles Mr., Mrs., Ms. and Dr. end with a period. When no name comes after it, a word like mayor or doctor usually stays lowercase.",
      "An abbreviation is a short way to write a word. We use short forms of days, months and streets in addresses, dates and schedules, not in ordinary sentences. If the long word is a name, the short form gets a capital too: Mon. for Monday, Jan. for January, Pine St. for Pine Street, Lake Rd. for Lake Road, Pine Ave. for Pine Avenue, Elm Blvd. for Elm Boulevard.",
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
          "(1) The third grade built a vegetable garden next to the gym on fri., Apr. 9.",
          "(2) First, nurse Alba showed us how to wash our hands after digging.",
          "(3) Mr. Lang hauled sacks of soil and light tools in his truck."
        ],
        [
          "(4) We watered each row and gave each plant a tiny sign.",
          "(5) Our teacher, Mrs. Diaz, helped us measure the rows with a string.",
          "(6) Kai planted seeds for a haitian pepper that grows very hot."
        ],
        [
          "(7) We mailed a thank-you card to the garden shop on Cole St.",
          "(8) The principal said the garden will feed the whole lunch room.",
          "(9) Every day, two helpers will check the plants for bugs.",
          "(10) I wish we could pick red tomatoes soon."
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
          "(1) Our town library hosted a story night on Wed., Dec. 2, for all ages.",
          "(2) After dinner, Chief Dunn of the fire station told us a funny tale about a brave dog.",
          "(3) Then sheriff Moss helped us find the funniest picture stories on the top shelf.",
          "(4) Ms. Reyes handed out free stickers at the front desk."
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
            prompt: "Fix the title in sentence 2 of the draft.",
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
                { text: "Abbreviations for days, months and roads start with capitals." },
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
            prompt: "Pick the TWO sentences whose capital letters are all correct.",
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
            cols: ["Correct as written", "Needs a capital"],
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
              { text: "Sentence 2 is the one that is wrong, because titles need a capital just when they begin a sentence." },
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
            prompt: "Pick the word for the blank in sentence 8.",
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
            prompt: "Choose the date that repairs sentence 10.",
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
            prompt: "Dan says, \"Every title begins with a capital letter.\" Choose the TWO sentences that show Dan is not right.",
            pick: 2,
            choices: [
              { text: "Our principal waved from the stage.", correct: true },
              { text: "Judge Ramos told us to listen." },
              { text: "The nurse handed each of us a sticker.", correct: true },
              { text: "Mrs. Diaz called our names." },
              { text: "Principal Hale waved from the stage." }
            ],
            clue: "Dan says always. Look for sentences that prove him wrong.",
            hints: [
              "Dan says always. Look for sentences that prove him wrong.",
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
                options: ["rd.", "rD.", "Rd."],
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
              "The second blank is part of a street name. Road is shortened to Rd., with a capital and a period.",
              "The answers are Dr. and Rd."
            ],
            misconception: "A common mix-up is writing a short form with a small letter. A short form of a name or title keeps its capital.",
            why: "The answers are Dr. and Rd. Dr. is the short form of the title Doctor, and Rd. is the short form of Road, part of a street name. Both keep their capital letters, and the small-letter forms dr. and rd. are wrong."
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
              { text: "No. The word is built from Vietnam, so it gets a capital.", correct: true },
              { text: "Yes. A word stays small when an everyday noun like farmer follows it." },
              { text: "Yes. Only the opening word of a sentence needs a capital." },
              { text: "No. Farmer is a title, so farmer needs the capital and vietnamese can stay small." }
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
              "The answer is \"No. The word is built from Vietnam, so it gets a capital.\""
            ],
            misconception: "A common mix-up is thinking the next word decides the capital. A word made from a place name needs one wherever it appears.",
            why: "The answer is \"No. The word is built from Vietnam, so it gets a capital.\" It does not matter that farmer is an everyday word. Ravi should write Vietnamese. A describing word made from a place name always starts with a capital letter."
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
      prompt: "Sentences 2 to 6 hide two missing capitals. Mark both sentences.",
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
      prompt: "Which TWO sentences are free of capital-letter mistakes?",
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
      prompt: "Choose what fills the blank correctly.",
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
      prompt: "A capital in one of sentences 5 to 9 should be small. Mark that sentence.",
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
      prompt: "Choose the right date.",
      text: "Swim meet: {0}.",
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
      clue: "Mia says every title needs one. Look for the sentences that prove her wrong.",
      hints: [
        "Mia says every title needs one. Look for the sentences that prove her wrong.",
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
          options: ["Ms.", "ms.", "mS."],
          answer: 0
        },
        {
          options: ["st.", "sT.", "St."],
          answer: 2
        }
      ],
      clue: "Ask which short forms stand for a title and for part of a street name. Then ask how each should be written.",
      hints: [
        "Ask which short forms stand for a title and for part of a street name. Then ask how each should be written.",
        "Work on one blank at a time. Say the short form with its long word.",
        "One choice has a capital letter in the wrong place. Think about the other choices."
      ],
      how: [
        "The first blank is a title before the name Cruz. Ms. is written with a capital and a period.",
        "The second blank is part of a street name. Street is shortened to St., with a capital and a period.",
        "The answers are Ms. and St."
      ],
      misconception: "A common mix-up is writing a short form in small letters. A short form of a title or a street name keeps its capital.",
      why: "The answers are Ms. and St. Ms. is a title before a name, and St. is the short form of Street in a street name. Both start with a capital letter and end with a period. The choices mS. and sT. put a capital in the wrong place.",
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
      "When you speak to a person and use the person's name, set the name off with a comma. If the name comes first, the comma follows it: Ava, please close the door. If the name comes last, the comma comes before it: Please close the door, Ava. If the name is in the middle, put a comma on each side.",
      "Use the comma only when you are talking TO the person. In \"Ava closed the door,\" you are talking about Ava, so there is no comma after her name.",
      "When yes or no starts an answer, put a comma right after it: Yes, I finished my snack. No, thank you.",
      "Yes and no get a comma only when they start an answer. When the word just tells what someone said, there is no comma: Dad said no to more cake."
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
    },
    {
      show: ["Please wait here Dan until I come back."],
      ask: "Where do the commas belong?",
      steps: [
        "Ask: Is the speaker talking to someone by name? Yes, the speaker is talking to Dan.",
        "Find where the name sits. Dan is in the middle of the sentence, between two parts.",
        "A name in the middle gets a comma before it and a comma after it."
      ],
      answer: "Commas go on both sides of Dan: \"Please wait here, Dan, until I come back.\""
    }
  ],
  parent: "Ask your child yes-or-no questions and have them write one answer on a sticky note with the comma, like \"Yes, I want more beans.\" Then help them write a short note to a family member that starts with that person's name and a comma.",
  passages: [
    /* B8:passages:start */
    {
      id: "p1",
      title: "Jigsaw Puzzle Table",
      byline: "A third grader's draft",
      genre: "Student draft (play script)",
      draft: true,
      paragraphs: [
        [
          "(1) Three friends build a jigsaw puzzle at a long table in Mia's den on a cloudy afternoon.",
          "(2) Mia: Ben please hold this corner piece while I find its match.",
          "(3) Ben: Yes I can hold it with both hands."
        ],
        [
          "(4) Tess: Mia, where should we put the blue sky pieces?",
          "(5) Mia: Put them along the top edge, Tess.",
          "(6) Ben: No, those pieces have too many bumps to fit in that spot.",
          "(7) Tess: Ben can you find the piece with the red barn on it?"
        ],
        [
          "(8) Ben: Here it is, Mia. I found it under the old lamp.",
          "(9) Mia: Thank you, Ben. Now the barn is whole.",
          "(10) Tess: This puzzle is the biggest and hardest one we have ever built!"
        ]
      ]
    },
    {
      id: "p2",
      title: "The Pet Rock Show",
      byline: "A third grader's draft",
      genre: "Student draft (play script)",
      draft: true,
      paragraphs: [
        [
          "(1) Two students set up a pet rock show on a long table in the school yard.",
          "(2) Dev: Nina, where did you put the rock with the googly eyes?",
          "(3) Nina: No I looked under the table already and it was not there.",
          "(4) Dev: Then we should check the paint box, Nina."
        ],
        [
          "(5) Nina: Dev it is sitting inside the lid of the paint box!",
          "(6) Dev: Yes, that is the one, and it looks very silly.",
          "(7) Nina: I will get a small ribbon from the supply shelf by the window."
        ],
        [
          "(8) Dev: Please set the rock down, Nina, while I tie the ribbon.",
          "(9) Nina: It looks great! Now we can show it to the judges.",
          "(10) Dev: Thank you Nina. I think it will win a prize today."
        ]
      ]
    },
    {
      id: "p3",
      title: "Making a Terrarium",
      byline: "A third grader's draft",
      genre: "Student draft (play script)",
      draft: true,
      paragraphs: [
        [
          "(1) The family builds a terrarium in a big glass jar because the weather outside is too cold for gardening.",
          "(2) Mom: Grandpa, please pour the small rocks into the bottom of the jar.",
          "(3) Grandpa: Yes, I can reach the whole jar from here.",
          "(4) Lee: Rosa, can you bring me a spoon?"
        ],
        [
          "(5) Rosa: Yes, I have a big spoon right here.",
          "(6) Rosa, handed the spoon to Lee and Mom.",
          "(7) Lee: Thank you, Rosa. You always know what we need.",
          "(8) Mom: Grandpa, would you like some more soil?",
          "(9) Grandpa: No, I have plenty already."
        ],
        [
          "(10) Mom: Please set the fern Lee in the middle.",
          "(11) Lee: Yes, Mom, I will do it right now.",
          "(12) Rosa: I will water the moss too and then I will close the lid."
        ]
      ]
    },
    {
      id: "p4",
      title: "Obstacle Course",
      byline: "A third grader's draft",
      genre: "Student draft (play script)",
      draft: true,
      paragraphs: [
        [
          "(1) Three classmates set up an obstacle course with cones and ropes on the field behind the gym.",
          "(2) Omar: Jade raise the rope a bit higher so the runners can duck under it.",
          "(3) Jade: Yes we see it now and it looks tricky."
        ],
        [
          "(4) Pablo: Omar, our cones are scattered again and our race starts soon.",
          "(5) Omar: Slide them over to the left, Pablo.",
          "(6) Jade: The hoops need extra space near our fence.",
          "(7) Pablo: Jade would you hold this rope tight?"
        ],
        [
          "(8) Jade: I have it, Omar. Now the runners can start the race.",
          "(9) Pablo: Nice work, Jade. Our course looks great.",
          "(10) Omar: Let us cheer when the first runner finishes."
        ]
      ]
    },
    {
      id: "p5",
      title: "Hopscotch Squares",
      byline: "A third grader's draft",
      genre: "Student draft (play script)",
      draft: true,
      paragraphs: [
        [
          "(1) Two cousins draw a hopscotch game with bright chalk on the driveway on a sunny Saturday morning.",
          "(2) Raj: Ana hand me the blue chalk before the sun dries the pavement.",
          "(3) Ana: Yes, we have one right here in the red bucket by the steps.",
          "(4) Raj: Then draw the last square and the numbers, Ana."
        ],
        [
          "(5) Ana: The chalk is breaking again, Raj!",
          "(6) Raj: Yes we see the pieces on the ground by the front step.",
          "(7) Ana: I will get the other box from the garage."
        ],
        [
          "(8) Raj: We can rest, Ana, after we number the squares.",
          "(9) Ana: It looks like a brand new game in the sun!",
          "(10) Raj: Ana this game looks better than it did last summer."
        ]
      ]
    },
    {
      id: "p6",
      title: "Origami Cranes",
      byline: "A third grader's draft",
      genre: "Student draft (play script)",
      draft: true,
      paragraphs: [
        [
          "(1) Three relatives fold paper cranes at the kitchen table on the first rainy evening of spring.",
          "(2) Dad: Zoe, bend the corners toward the center of the square.",
          "(3) Zoe: Yes, I have it and it is not hard.",
          "(4) Luis: Zoe could you steady the paper?"
        ],
        [
          "(5) Zoe: Yes, the paper lies flat on my knee.",
          "(6) Zoe, pressed the crease flat with her thumb.",
          "(7) Luis: Many thanks, Zoe. Folding wings takes patience.",
          "(8) Dad: Luis, does this wing need help?",
          "(9) Luis: No, my wing is going fine."
        ],
        [
          "(10) Dad: Set the cranes Luis by the window.",
          "(11) Luis: Yes, Dad, I will put them there soon.",
          "(12) Zoe: Later I plan to fold another one before bed."
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
            prompt: "Fix the start of sentence 2.",
            text: "Mia: {0} hold this corner piece while I find its match.",
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
              { text: "Yes I can hold it with both hands." },
              { text: "Yes I, can hold it with both hands." },
              { text: "Yes, I can hold it with both hands.", correct: true },
              { text: "Yes, I can, hold it with both hands." }
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
              "The answer is \"Yes, I can hold it with both hands.\""
            ],
            misconception: "A common mix-up is putting the comma later in the line. The comma goes right after yes.",
            why: "The answer is \"Yes, I can hold it with both hands.\" Yes begins Ben's answer, so a comma comes right after it. The other choices leave out the comma or put commas where they do not belong."
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
                { text: "Put them along the top edge, Tess." },
                { text: "No, those pieces have too many bumps to fit in that spot." },
                { text: "Ben can you find the piece with the red barn on it?", correct: true },
                { text: "Mia, where should we put the blue sky pieces?" }
              ]
            },
            partB: {
              prompt: "What rule makes the Part A sentence need a comma?",
              choices: [
                { text: "A comma goes after the first word of every question." },
                { text: "A comma goes before the word can when a sentence asks for help." },
                { text: "A comma goes after any name, even when the sentence just talks about someone." },
                { text: "A comma sets off the name of a person who is spoken to.", correct: true }
              ]
            },
            clue: "Ask who is being spoken to in each sentence. Then ask which rule fits the sentence that is missing a mark.",
            hints: [
              "Ask who is being spoken to in each sentence. Then ask which rule fits the sentence that is missing a mark.",
              "Check each sentence in paragraph 2 and look for a name. For Part B, think about what the commas in the other sentences are doing.",
              "The sentence about the bumps starts with an answer word and already has its comma. Check the other three."
            ],
            how: [
              "Part A: read each sentence in paragraph 2 and ask who is being spoken to.",
              "In \"Ben can you find the piece with the red barn on it?\" Tess is talking to Ben, but nothing sets his name off.",
              "Part A answer: Ben can you find the piece with the red barn on it?",
              "Part B answer: \"A comma sets off the name of a person who is spoken to.\""
            ],
            misconception: "A common mix-up is thinking a question needs a comma after its first word. The comma is there to set off the name of the person who is spoken to.",
            why: "Part A: Ben can you find the piece with the red barn on it? Part B: \"A comma sets off the name of a person who is spoken to.\" Tess is talking to Ben, so a comma must separate his name from the rest of the question: Ben, can you find the piece with the red barn on it? The other three sentences already have the commas they need."
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
            clue: "Check each line for a spoken-to name or an answer word at the start. Is its comma there?",
            hints: [
              "Check each line for a spoken-to name or an answer word at the start. Is its comma there?",
              "Read the five sentences one at a time. Pick TWO.",
              "In sentence 6, the answer word already has its comma. Check the other four."
            ],
            how: [
              "Check each sentence for a name that is spoken to and for yes or no at the start.",
              "Sentence 3 starts with an answer word and has no comma after it: \"No, I looked under the table already and it was not there.\"",
              "Sentence 5 speaks to Dev, but his name has no comma after it: \"Dev, it is sitting inside the lid of the paint box!\"",
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
            prompt: "Which TWO of these sentences have every comma where it belongs?",
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
            prompt: "In sentence 8 of the draft, Nina has a comma on each side: \"Please set the rock down, Nina, while I tie the ribbon.\" Why does her name need two commas?",
            choices: [
              { text: "Dev is only telling about Nina, and a name that is told about needs a comma on each side." },
              { text: "Dev is talking to Nina, and her name is in the middle, so a comma goes on each side.", correct: true },
              { text: "The second comma belongs to the word while, which always needs one right before it." },
              { text: "A name needs two commas whenever the sentence around it has more than six words." }
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
            prompt: "Which words repair Dev's thank-you in sentence 10?",
            text: "Dev: {0} I think it will win a prize today.",
            slots: [
              {
                options: ["Thank you, Nina.", "Thank you Nina.", "Thank, you Nina."],
                answer: 0
              }
            ],
            clue: "Ask who Dev is thanking, and think about what should separate that name from the rest.",
            hints: [
              "Ask who Dev is thanking, and think about what should separate that name from the rest.",
              "Try each choice in the line. Notice what follows the name.",
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
            why: "The answer is sentence 6, \"Rosa, handed the spoon to Lee and Mom.\" Nobody is talking to Rosa. The sentence only tells what she did, so the comma should be taken out. In the other four sentences, each comma sets off a spoken-to name or an answer word."
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
            prompt: "Choose the words that fix sentence 10.",
            text: "Mom: Please set the {0} in the middle.",
            slots: [
              {
                options: ["fern, Lee,", "fern, Lee", "fern; Lee;"],
                answer: 0
              }
            ],
            clue: "Ask who Mom is talking to, and where that name sits in the sentence.",
            hints: [
              "Ask who Mom is talking to, and where that name sits in the sentence.",
              "Say each choice inside the sentence. Count the pauses before and after the name.",
              "One choice sets the name off on only one side. Decide between the other two."
            ],
            how: [
              "Read sentence 10. Mom is talking to Lee, and his name sits in the middle.",
              "A name in the middle of a sentence gets a comma before it and a comma after it.",
              "The answer is fern, Lee, with a comma on each side of the name."
            ],
            misconception: "A common mix-up is putting only one comma next to a name in the middle. It needs one on each side.",
            why: "The answer is fern, Lee, with a comma on each side of the name. Mom is talking to Lee, and his name sits in the middle. One choice has only one comma, and one uses semicolons instead of commas."
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
              { text: "Tim carry the box to the car." }
            ],
            clue: "Kai says a name needs a comma every time. Find sentences that prove him wrong.",
            hints: [
              "Kai says a name needs a comma every time. Find sentences that prove him wrong.",
              "Pick TWO. Check whether each sentence speaks to the person or only tells about the person.",
              "The sentence about the pizza has a name with a comma that belongs. Decide about the other four."
            ],
            how: [
              "Look for a name with no comma next to it in a sentence that is correct.",
              "\"Tim carried the box to the car.\" and \"Mom hugged Tim at the door.\" only tell about Tim, so no comma is needed.",
              "The other three speak right to Tim, so a comma belongs next to his name. Two of them have it, and one is missing it, so none of them shows Kai is wrong."
            ],
            misconception: "A common mix-up is picking sentences that have commas. Kai is wrong when a sentence only tells about a person, so the name needs no comma.",
            why: "The answers are \"Tim carried the box to the car.\" and \"Mom hugged Tim at the door.\" Both only tell about Tim, so his name needs no comma. In the other three, someone is talking to Tim, so a comma belongs next to his name, and one of them leaves it out."
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
            prompt: "Sam wrote, \"Mom said yes to a kitten.\" He thinks it needs a comma after yes, because yes always needs one. Is Sam right?",
            choices: [
              { text: "No. Yes needs a comma only when it starts an answer, and here it tells what Mom said.", correct: true },
              { text: "Yes. The word yes needs a comma every single time that it is used in any sentence at all." },
              { text: "Yes. A comma is needed after any word that tells what a person has said to another person." },
              { text: "No. Yes needs a comma only when a name follows it, and here none does." }
            ],
            clue: "Ask what the word yes is doing in the sentence. Is it being said to a person, or is it telling what Mom said?",
            hints: [
              "Ask what the word yes is doing in the sentence. Is it being said to a person, or is it telling what Mom said?",
              "Think about someone who says yes to a question. Ask where the comma goes, and why.",
              "A name after the word is not what decides it here. Check the other three."
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
      prompt: "Line 2 of the script is missing a mark. Pick the version that is right.",
      text: "Omar: {0} the rope a bit higher so the runners can duck under it.",
      slots: [
        {
          options: ["Jade raise", "Jade, raise", "Jade raise,"],
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
        "Read line 2. Omar is talking to Jade and tells her what to do.",
        "A name used to speak to someone is separated from the rest of the sentence by a comma.",
        "The answer is Jade, raise."
      ],
      misconception: "A common mix-up is skipping the comma because the line is short. A short line still needs a comma after the name.",
      why: "The answer is Jade, raise. Omar is talking to Jade, so a comma comes right after her name. Jade raise leaves the comma out, and Jade raise, puts it after the wrong word.",
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
      prompt: "Pick the reply in line 3 that Jade wrote with the right punctuation.",
      choices: [
        { text: "Yes, we see it now and it looks tricky.", correct: true },
        { text: "Yes we see it now and it looks tricky." },
        { text: "Yes we, see it now and it looks tricky." },
        { text: "Yes, we see, it now and it looks tricky." }
      ],
      clue: "Look at the first word of the reply and ask what it does at the start of an answer.",
      hints: [
        "Look at the first word of the reply and ask what it does at the start of an answer.",
        "Read each choice out loud. Check where each comma sits, and ask whether it has a reason.",
        "One choice puts its only comma after we, between the speakers and what they see. Decide among the other three."
      ],
      how: [
        "The reply starts with yes, and yes begins Jade's answer.",
        "When yes starts an answer, a comma comes right after it.",
        "The answer is \"Yes, we see it now and it looks tricky.\""
      ],
      misconception: "A common mix-up is putting the comma after the first few words. The comma goes right after yes.",
      why: "The answer is \"Yes, we see it now and it looks tricky.\" Yes begins Jade's answer, so a comma comes right after it. The other choices leave out the comma or put commas in places where they do not belong.",
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
      prompt: "Answer Part A first, and then answer Part B.",
      partA: {
        prompt: "Look at lines 4 through 7 of the script. Pick the one that needs another comma.",
        choices: [
          { text: "Slide them over to the left, Pablo." },
          { text: "Jade would you hold this rope tight?", correct: true },
          { text: "The hoops need extra space near our fence." },
          { text: "Omar, our cones are scattered again and our race starts soon." }
        ]
      },
      partB: {
        prompt: "Pick the reason behind your choice in Part A.",
        choices: [
          { text: "Requests need commas between their first two words and what follows." },
          { text: "Speaker labels, such as Pablo or Jade, take commas every time." },
          { text: "Listeners must have their names set off from all other words.", correct: true },
          { text: "Names get commas behind them, whether spoken to or not." }
        ]
      },
      clue: "Think about who is talking to whom in each line. Then ask which reason fits the line that is missing a mark.",
      hints: [
        "Think about who is talking to whom in each line. Then ask which reason fits the line that is missing a mark.",
        "Look at the four lines in paragraph 2 and find the names. For Part B, think about what the commas in the other lines are doing.",
        "The line about the hoops needing space has no name and no answer word. Check the other three."
      ],
      how: [
        "Part A: read each line in paragraph 2 and find the person who is talked to.",
        "In \"Jade would you hold this rope tight?\" Pablo is talking to Jade, but nothing sets her name off.",
        "Part A answer: Jade would you hold this rope tight?",
        "Part B answer: \"Listeners must have their names set off from all other words.\""
      ],
      misconception: "A common mix-up is thinking every name needs a comma after it. The comma is for the name of the person who is talked to.",
      why: "Part A: Jade would you hold this rope tight? Part B: \"Listeners must have their names set off from all other words.\" Pablo is talking to Jade, so her name needs a comma after it: Jade, would you hold this rope tight? The other three lines already have the commas they need, or need none.",
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
      prompt: "Two of lines 2 to 6 skip a needed comma. Mark both lines.",
      targets: ["p5:1:2", "p5:1:3", "p5:1:4", "p5:2:1", "p5:2:2"],
      answer: ["p5:1:2", "p5:2:2"],
      pick: 2,
      clue: "Ask who is spoken to, and whether a line starts with an answer word. Then check each line for the comma that should be there.",
      hints: [
        "Ask who is spoken to, and whether a line starts with an answer word. Then check each line for the comma that should be there.",
        "Go through the five lines one by one. Pick TWO.",
        "In line 4, the name at the end already has a comma before it. Check the other four."
      ],
      how: [
        "Check each line for a spoken-to name and for yes or no at the start.",
        "Line 2 speaks to Ana, but her name has no comma after it: \"Ana, hand me the blue chalk before the sun dries the pavement.\"",
        "Line 6 starts with an answer word and has no comma after it: \"Yes, we see the pieces on the ground by the front step.\"",
        "Lines 3, 4 and 5 already have the commas they need."
      ],
      misconception: "A common mix-up is picking a line just because it has a comma in it. Pick only the lines where a needed comma is missing.",
      why: "The answers are line 2 and line 6. In line 2, Raj is talking to Ana, so her name needs a comma after it. In line 6, the answer word Yes needs a comma right after it. Lines 3, 4 and 5 already have the commas they need.",
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
      prompt: "Find the TWO lines that have every comma in the right place.",
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
      prompt: "These lines are spoken to a person, and none has its comma. Tell which side of the name gets it.",
      cols: ["Left side", "Right side"],
      rows: [
        { text: "Find the red shell Aunt Jo.", answer: 0 },
        { text: "Sam did the bell ring?", answer: 1 },
        { text: "Hold the rope tight Ruth.", answer: 0 },
        { text: "Papa a tooth fell out today!", answer: 1 }
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
      why: "The commas go to the left of Aunt Jo and Ruth, because those names close their lines: \"Find the red shell, Aunt Jo.\" and \"Hold the rope tight, Ruth.\" The commas go to the right of Sam and Papa, because those names open their lines: \"Sam, did the bell ring?\" and \"Papa, a tooth fell out today!\"",
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
      prompt: "Line 8 of the script puts Ana between a pair of commas. What does that pair show the reader?",
      choices: [
        { text: "Ana is just mentioned, so the pair marks her as the topic of the line." },
        { text: "The pair highlights the most important part of the line." },
        { text: "Raj talks straight to Ana, so the pair of commas frames the name.", correct: true },
        { text: "Whatever lands mid-line gets a comma on both sides." }
      ],
      clue: "Ask who Raj is talking to and what the commas do for that person.",
      hints: [
        "Ask who Raj is talking to and what the commas do for that person.",
        "Read the line once with Ana in it and once without her. Think about what the commas are doing.",
        "The commas have nothing to do with how important a word is. Check the other three."
      ],
      how: [
        "Read line 8. Raj is speaking right to Ana.",
        "Her name is in the middle, so the commas keep it apart from the other words.",
        "The answer is \"Raj talks straight to Ana, so the pair of commas frames the name.\""
      ],
      misconception: "A common mix-up is thinking the commas mark an important word. They mark a name that is spoken to.",
      why: "The answer is \"Raj talks straight to Ana, so the pair of commas frames the name.\" Raj talks right to Ana, and her name sits in the middle, so it has a comma on each side. A middle word does not get commas just for being in the middle.",
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
      prompt: "Pick the correct way to begin Raj's last line.",
      text: "Raj: {0} game looks better than it did last summer.",
      slots: [
        {
          options: ["Ana, this", "Ana this", "Ana this,"],
          answer: 0
        }
      ],
      clue: "Ask who Raj is talking to, and think about what should come between that name and the next word.",
      hints: [
        "Ask who Raj is talking to, and think about what should come between that name and the next word.",
        "Say each choice out loud and listen for the pause.",
        "One choice puts the mark at the end, after the word this. Decide between the other two."
      ],
      how: [
        "Read line 10. Raj is talking to Ana.",
        "A name at the start of a sentence is followed by a comma.",
        "The answer is Ana, this."
      ],
      misconception: "A common mix-up is leaving out the comma because the name and the next word seem to go together. A spoken-to name still needs its comma.",
      why: "The answer is Ana, this. Raj is talking to Ana, so a comma comes right after her name. Ana this leaves it out, and Ana this, puts it after the wrong word.",
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
      prompt: "Each of lines 5 to 9 in the script has a comma. Mark the one line where a comma is a mistake.",
      targets: ["p6:2:1", "p6:2:2", "p6:2:3", "p6:2:4", "p6:2:5"],
      answer: ["p6:2:2"],
      pick: 1,
      clue: "Every comma needs a reason. Ask whether each one follows an answer word or sets off a name that is spoken to.",
      hints: [
        "Every comma needs a reason. Ask whether each one follows an answer word or sets off a name that is spoken to.",
        "Go through the five lines one by one. Pick ONE. Ask who is spoken to and who is only told about.",
        "In line 8, Dad speaks right to Luis, and the comma sets off his name. Check the other four."
      ],
      how: [
        "Find each comma in the five lines and ask what it does.",
        "Lines 5, 7, 8 and 9 each have a comma after yes, no or a name that is spoken to.",
        "In line 6, nobody is talking to Zoe. The line only tells what she did, so the comma does not belong."
      ],
      misconception: "A common mix-up is leaving every comma that sits beside a name. A comma stays only when the line speaks to that person.",
      why: "The answer is line 6, \"Zoe, pressed the crease flat with her thumb.\" Nobody is talking to Zoe, because the line only tells what she did. The comma should come out. In the other four lines, each comma follows an answer word or sets off a name that is spoken to.",
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
      prompt: "Which choice makes the line right?",
      text: "Dad: Set the {0} by the window.",
      slots: [
        {
          options: ["cranes, Luis,", "cranes, Luis", "cranes; Luis;"],
          answer: 0
        }
      ],
      clue: "Ask who Dad is talking to, and where that name falls in the line.",
      hints: [
        "Ask who Dad is talking to, and where that name falls in the line.",
        "Say each choice inside the line and listen for the pauses around the name.",
        "One choice sets the name off on only the left side. Decide between the other two."
      ],
      how: [
        "Read line 10. Dad is talking to Luis, and his name sits in the middle.",
        "A name in the middle of a line gets a comma on its left and a comma on its right.",
        "The answer is cranes, Luis, with a comma on each side of the name."
      ],
      misconception: "A common mix-up is stopping after one comma. A name in the middle needs a comma on both sides.",
      why: "The answer is cranes, Luis, with a comma on each side of the name. Dad is talking to Luis, and his name sits in the middle. One choice has only one comma, and one uses semicolons instead of commas.",
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
        { text: "Dan look at this seashell." },
        { text: "Dan found a seashell on the beach.", correct: true },
        { text: "I think, Dan, that it is time to go." },
        { text: "Our team cheered for Nell.", correct: true },
        { text: "Can you swim, Nell?" }
      ],
      clue: "Gus says every sentence with a name has commas. Find the sentences that prove him wrong.",
      hints: [
        "Gus says every sentence with a name has commas. Find the sentences that prove him wrong.",
        "Pick TWO. Ask whether each sentence speaks to a person or only tells about a person.",
        "The sentence with I think has its commas where they belong. Decide about the other four."
      ],
      how: [
        "Look for a sentence that has a name and no commas and is still right.",
        "\"Dan found a seashell on the beach.\" and \"Our team cheered for Nell.\" only tell about people, so they need no commas.",
        "The other three speak right to Dan or Nell, so commas belong next to the name. Two of them have them, and one is missing its comma, so none of them proves Gus wrong."
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
      prompt: "Pick the words for each line.",
      text: "Uncle Joe: {0} Pia: {1}",
      slots: [
        {
          options: ["Pia, did the fish eat?", "Pia did the fish eat?", "Pia did, the fish eat?"],
          answer: 0
        },
        {
          options: ["Yes, they ate at dawn.", "Yes they ate at dawn.", "Yes they ate, at dawn."],
          answer: 0
        }
      ],
      clue: "Think about who speaks to whom in each line, and which words should be set off.",
      hints: [
        "Think about who speaks to whom in each line, and which words should be set off.",
        "Work on one blank at a time. Read each choice aloud and notice where the speaker would pause.",
        "In the second blank, one choice has its only comma after the word ate. Decide about the other choices."
      ],
      how: [
        "In the first blank, Uncle Joe speaks to Pia. Her name opens the line, so a comma follows it.",
        "In the second blank, Pia answers with yes. Yes opens her answer, so a comma follows it.",
        "The answers are \"Pia, did the fish eat?\" and \"Yes, they ate at dawn.\""
      ],
      misconception: "A common mix-up is putting the comma deeper into the line. It goes right after the name and right after the answer word.",
      why: "The answers are \"Pia, did the fish eat?\" and \"Yes, they ate at dawn.\" Uncle Joe speaks to Pia, so her name gets a comma after it. Yes opens Pia's answer, so it gets a comma after it. The other choices leave the comma out or put it in the wrong place.",
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
      prompt: "Tia reads \"Our teacher gave a firm no to extra recess.\" She claims a comma must come after each no she sees. Which choice judges her claim?",
      choices: [
        { text: "She is right. Wherever a no shows up on a page, a comma has to come right after it, without exception." },
        { text: "She is wrong. Only the word yes gets a comma, so no is left alone." },
        { text: "She is right. A teacher is the one speaking here, so whatever the teacher says gets a comma." },
        {
          text: "She is wrong. A comma follows a no that begins a reply, but this no is something the teacher gave.",
          correct: true
        }
      ],
      clue: "Is no being said back to a person here, or is it being reported?",
      hints: [
        "Is no being said back to a person here, or is it being reported?",
        "Picture someone saying no back to a question. Ask where a comma would go, and why.",
        "Who is speaking does not decide where a comma goes. Check the other three."
      ],
      how: [
        "Ask what no is doing. Nobody is replying to the teacher in this sentence.",
        "No is only something the teacher gave, so no comma follows it.",
        "The answer is \"She is wrong. A comma follows a no that begins a reply, but this no is something the teacher gave.\""
      ],
      misconception: "A common mix-up is thinking every no needs a comma. The comma is for a no that begins a reply.",
      why: "The answer is \"She is wrong. A comma follows a no that begins a reply, but this no is something the teacher gave.\" The sentence is correct as it is, so it shows Tia is wrong. A reply like \"No, thank you\" has a comma after no, but this sentence only reports what the teacher did.",
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
      "A few plurals do not end in s, like geese. Add 's to this kind of word: the geese's pond.",
      "A plural that owns nothing needs no apostrophe at all: two cats sat on the step."
    ],
    words: [
      { term: "plural", means: "more than one" },
      { term: "possessive", means: "a word that shows who owns something" }
    ],
    example: {
      label: "Example",
      lines: [
        "one girl's coat → many girls' coats",
        "one goose's feather → many geese's feathers"
      ],
      note: "Girls already ends in s, so only an apostrophe is added after the s. Geese does not end in s, so 's is added."
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
      show: ["The ___ nests were high in the tall pine tree.", "(The nests belong to many geese.)"],
      ask: "How should you write geese to show the nests belong to them?",
      steps: [
        "There is more than one owner, so start with the plural: geese.",
        "Check the end of the word. Geese does not end in s.",
        "When a plural does not end in s, add 's."
      ],
      answer: "Write geese's: \"The geese's nests were high in the tall pine tree.\""
    }
  ],
  parent: "Around the house, name things that belong to more than one person, like the boys' room or your grandparents' car. Have your child write the words on a sticky note and check where the apostrophe goes.",
  passages: [
    /* B8:passages:start */
    {
      id: "p1",
      title: "Band Practice",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) The school band met in the music room for its first practice of the new year.",
          "(2) Mr. Hale said that the drummers sticks were stacked in a neat pile by the big drum.",
          "(3) The girls music stands stood in a row near the tall window."
        ],
        [
          "(4) Next, the flutists tuned up while the drummers warmed up their wrists.",
          "(5) The clarinet players' reeds were soaking in a cup of water.",
          "(6) A pair of trumpets sat on the table beside the spare mouthpieces.",
          "(7) Mr. Hale checked the trombone players slides before the song began."
        ],
        [
          "(8) The band played a loud march for the whole school on Friday morning.",
          "(9) The parents' chairs filled up quickly with smiling faces.",
          "(10) Everyone agreed that the band sounded better than ever before."
        ]
      ]
    },
    {
      id: "p2",
      title: "Coat Drive",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our school held a coat drive to help families get ready for the cold months.",
          "(2) The firefighters' truck brought the first boxes of coats to the front door.",
          "(3) Two volunteers hung the boys jackets on a long metal rack.",
          "(4) Piles of scarves and gloves sat beside the sorting table."
        ],
        [
          "(5) The childrens' mittens were counted twice and packed in a bag.",
          "(6) The fifth graders' notes were pinned to each box to say thank you.",
          "(7) By noon, the shelves were full of warm things for the neighbors."
        ],
        [
          "(8) The principal read a note about the families' kind gifts.",
          "(9) Our two janitors carried the last boxes out to the truck.",
          "(10) The childrens closet was empty by the end of the day."
        ]
      ]
    },
    {
      id: "p3",
      title: "Toboggan Hill",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) The first snow of the winter covered Pine Hill on Saturday morning.",
          "(2) Kids pulled their sleds up the slope and lined up at the top.",
          "(3) The boys' sleds were red and the girls' sleds were blue.",
          "(4) A long toboggan sat at the front of the line."
        ],
        [
          "(5) Three of the dads waited at the bottom with warm drinks.",
          "(6) Two dog's chased the sleds all the way down the hill.",
          "(7) The riders' hats flew off as they raced over the bumps.",
          "(8) Everyone laughed when the sleds spun in circles.",
          "(9) The parents' cocoa was gone before the third run was over."
        ],
        [
          "(10) The peoples faces were red from the cold wind.",
          "(11) At sunset, the families walked home with tired legs and happy smiles.",
          "(12) I hope the snow comes back again next week."
        ]
      ]
    },
    {
      id: "p4",
      title: "Chili Cook-Off",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our neighborhood held a chili cook-off behind the old library last Saturday.",
          "(2) The cooks pots stood in a row along one long table in cool shade.",
          "(3) The judges spoons clinked while tasting every bowl of spicy beans and sweet corn."
        ],
        [
          "(4) First, neighbors brought their own bowls and napkins to share.",
          "(5) The kids' table held mild chili and crackers.",
          "(6) Three aprons hung on hooks near serving spoons.",
          "(7) The winners trophies shone on trays along one long table."
        ],
        [
          "(8) At two o'clock, our judges named three tasty winners.",
          "(9) Winners' cheers rang across our lawn as clouds drifted away.",
          "(10) Everyone agreed the chili tasted great."
        ]
      ]
    },
    {
      id: "p5",
      title: "Archery Lesson",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class took an archery lesson at a park on a bright spring morning.",
          "(2) The instructors bows leaned against a post near our picnic shelter.",
          "(3) Everyone put on safety glasses before our first arrow flew.",
          "(4) Targets stood at the far end of a flat field."
        ],
        [
          "(5) The boys's arrows rested in a long tube near our gate.",
          "(6) Our teachers' voices carried across grass as they gave directions.",
          "(7) Several archers hit center rings on their last turns."
        ],
        [
          "(8) Our coach read a note about students' best scores.",
          "(9) Our two coaches carried last bows back to their van.",
          "(10) Our coaches van was parked beside the gate."
        ]
      ]
    },
    {
      id: "p6",
      title: "Seed Swap",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our garden club held a seed swap in the hall on a rainy day.",
          "(2) Families set packets of seeds on tables along one long wall.",
          "(3) The girls' table had sunflower seeds while the boys' table had beans.",
          "(4) Big signs told everyone where to put extra packets."
        ],
        [
          "(5) Three moms checked every packet for clear labels.",
          "(6) Two grandpa's helped kids count beans into small bags.",
          "(7) Gardeners' tips were written on cards beside each jar.",
          "(8) Everyone talked about seeds.",
          "(9) Neighbors' extra packets went into a box for our class garden."
        ],
        [
          "(10) The womens table ran out of marigold seeds before lunch.",
          "(11) By dinner, the hall smelled like soil.",
          "(12) I took home a packet of purple flowers."
        ]
      ]
    }
    /* B8:passages:end */
  ],
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
        { text: "the teachers' songs", answer: 1 },
        { text: "my brother's room", answer: 0 }
      ],
      clue: "Cover the apostrophe and the s after it. Is the word left over one thing or more than one?",
      why: "The girl's bike and my brother's room each have one owner. The girls' bikes has more than one owner because girls is plural. The teachers' songs has more than one owner because teachers is plural." },
    { id: "SK-GUM5-3-P5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Select the sentence that has an error.",
      options: [
        "The babies' blankets were folded in a pile.",
        "Both of my aunts' houses are in Augusta.",
        "The childrens' choir sang at the fair.",
        "My two cousins' dog is named Biscuit.",
        "The kittens' basket sat by the warm stove."
      ],
      answer: [2], pick: 1,
      clue: "For each owner word, decide if it is plural. Then check where the apostrophe goes.",
      why: "The error is in \"The childrens' choir sang at the fair.\" Children does not end in s, so it gets 's: the children's choir." }
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
          { ref: "SK-GUM5-3-P4" },
          { ref: "SK-GUM5-3-P5" },
          {
            id: "SK-GUM5-3-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: ["p1"],
            prompt: "Sentence 2 of the draft needs an apostrophe fix. The sticks belong to all five drummers. Choose the word that fixes it.",
            text: "Mr. Hale said that the {0} sticks were stacked in a neat pile by the big drum.",
            slots: [
              {
                options: ["drummer's", "drummers'", "drummers"],
                answer: 1
              }
            ],
            clue: "Count the owners. Then ask what shows that more than one owner has the sticks.",
            hints: [
              "Count the owners. Then ask what shows that more than one owner has the sticks.",
              "Say each choice in the blank. Think about whether the word names one drummer or all of them, and where the apostrophe sits.",
              "One choice has no apostrophe at all, so it names the drummers but does not show who owns the sticks. Decide between the other two."
            ],
            how: [
              "Count the owners: the sticks belong to all five drummers.",
              "Drummers is plural and ends in s, so only an apostrophe goes after the s.",
              "The answer is drummers'."
            ],
            misconception: "A common mix-up is putting the apostrophe before the s. That shows only one owner.",
            why: "The answer is drummers'. The sticks belong to all five drummers, so the plural word drummers needs an apostrophe after the s. Drummer's would mean only one drummer, and drummers alone does not show ownership."
          },
          {
            id: "SK-GUM5-3-C04",
            type: "mc",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: ["p1"],
            prompt: "Sentence 3 of the draft tells about music stands that belong to several girls. Which choice shows the owners and the stands written correctly?",
            choices: [
              { text: "the girl's music stands" },
              { text: "the girls's music stands" },
              { text: "the girls' music stands", correct: true },
              { text: "the girls music stands'" }
            ],
            clue: "Count the owners first. Then think about where the apostrophe goes when the plural already ends in s.",
            hints: [
              "Count the owners first. Then think about where the apostrophe goes when the plural already ends in s.",
              "Look at the end of the word girls in each choice. Check what comes after it, and where the apostrophe sits.",
              "One choice puts the apostrophe at the very end of the whole phrase, after stands. Decide among the other three."
            ],
            how: [
              "Count the owners: several girls own the stands.",
              "Girls is plural and already ends in s, so only an apostrophe goes after it.",
              "The answer is the girls' music stands."
            ],
            misconception: "A common mix-up is adding an apostrophe and another s. When a plural ends in s, the apostrophe is all it needs.",
            why: "The answer is the girls' music stands. Several girls own the stands, and girls ends in s, so only an apostrophe goes after the s. The girl's would mean one girl, the girls's adds an extra s, and the phrase with the apostrophe after stands puts it after the wrong word."
          },
          {
            id: "SK-GUM5-3-C05",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Which sentence in paragraph 2 of the draft needs an apostrophe?",
              choices: [
                { text: "The clarinet players' reeds were soaking in a cup of water." },
                { text: "A pair of trumpets sat on the table beside the spare mouthpieces." },
                { text: "Next, the flutists tuned up while the drummers warmed up their wrists." },
                { text: "Mr. Hale checked the trombone players slides before the song began.", correct: true }
              ]
            },
            partB: {
              prompt: "Which rule explains why the sentence in Part A needs an apostrophe?",
              choices: [
                { text: "A plural noun that ends in s gets an apostrophe each time it is used, even when it owns nothing." },
                { text: "A plural noun that ends in s gets an apostrophe after the s to show that it owns something.", correct: true },
                { text: "A plural noun that ends in s gets an apostrophe and one more s to show that it owns something." },
                { text: "A noun gets an apostrophe before its s whenever more than one person owns something." }
              ]
            },
            clue: "Look for a noun that names more than one owner. Then ask which rule fits the sentence that is missing something.",
            hints: [
              "Look for a noun that names more than one owner. Then ask which rule fits the sentence that is missing something.",
              "Check each sentence in paragraph 2. Ask whether any word shows that more than one person owns something.",
              "The sentence about the clarinet players already has its apostrophe in the right place. Check the other three."
            ],
            how: [
              "Part A: read each sentence in paragraph 2 and look for a plural owner.",
              "In \"Mr. Hale checked the trombone players slides before the song began.\" the slides belong to the trombone players, but there is no apostrophe.",
              "Part A answer: Mr. Hale checked the trombone players slides before the song began.",
              "Part B answer: \"A plural noun that ends in s gets an apostrophe after the s to show that it owns something.\""
            ],
            misconception: "A common mix-up is adding an apostrophe to every plural that ends in s. Only a plural that owns something needs one.",
            why: "Part A: Mr. Hale checked the trombone players slides before the song began. Part B: \"A plural noun that ends in s gets an apostrophe after the s to show that it owns something.\" The slides belong to the trombone players, so the sentence should say players' slides. The plural words in the other sentences name more than one thing but do not own anything, or already have the apostrophe."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM5-3-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: ["p2"],
            prompt: "Look at sentences 2 through 6 of the draft. Select the TWO sentences that have an apostrophe mistake.",
            targets: ["p2:1:2", "p2:1:3", "p2:1:4", "p2:2:1", "p2:2:2"],
            answer: ["p2:1:3", "p2:2:1"],
            pick: 2,
            clue: "Look at each word that names who owns something. Ask whether it is plural, and whether the apostrophe is placed the way that kind of plural needs.",
            hints: [
              "Look at each word that names who owns something. Ask whether it is plural, and whether the apostrophe is placed the way that kind of plural needs.",
              "Read the five sentences one at a time. Pick TWO.",
              "In sentence 6, the apostrophe comes after the s of a plural that ends in s, which is right. Check the other four."
            ],
            how: [
              "Find each owner word and ask whether it is plural and how it ends.",
              "In sentence 3, the jackets belong to the boys, so boys needs an apostrophe after the s: boys' jackets.",
              "In sentence 5, children does not end in s either, so it needs 's: children's mittens.",
              "Sentences 2, 4 and 6 are already written correctly."
            ],
            misconception: "A common mix-up is thinking only a missing apostrophe can be wrong. One mistake here leaves the apostrophe out, and one puts it in the wrong place.",
            why: "The answers are sentence 3 and sentence 5. In sentence 3, the word boys needs an apostrophe: boys' jackets. In sentence 5, childrens' should be children's, because children does not end in s. Sentences 2, 4 and 6 are written correctly."
          },
          {
            id: "SK-GUM5-3-C07",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: [],
            prompt: "Pick the TWO sentences in which each apostrophe is placed correctly.",
            pick: 2,
            choices: [
              { text: "Both boys's jackets were left on the gym floor." },
              { text: "The nurses' office was closed on Monday.", correct: true },
              { text: "The geeses' pond froze overnight." },
              { text: "Two apple's fell from the tree." },
              { text: "The coaches' whistles hung by the gym door.", correct: true }
            ],
            clue: "Check each sentence for a word that names who owns something. Ask whether it is plural and how it ends.",
            hints: [
              "Check each sentence for a word that names who owns something. Ask whether it is plural and how it ends.",
              "Pick TWO. In some sentences the apostrophe is in the wrong place, and in some a word has one that does not belong.",
              "In the sentence about apples, the apostrophe sits on a plural that owns nothing. Decide about the other four."
            ],
            how: [
              "Check each sentence for an owner word and for the way it ends.",
              "Nurses ends in s, so \"The nurses' office was closed on Monday.\" needs only an apostrophe.",
              "Coaches ends in s, so \"The coaches' whistles hung by the gym door.\" needs only an apostrophe.",
              "The other three are wrong: apple's owns nothing, boys's adds an extra s, and geeses' puts the apostrophe where geese needs 's."
            ],
            misconception: "A common mix-up is thinking more marks make a word more correct. A plural that ends in s needs only an apostrophe, and a plural that does not end in s needs 's.",
            why: "The answers are \"The nurses' office was closed on Monday.\" and \"The coaches' whistles hung by the gym door.\" Nurses and coaches both end in s, so each needs only an apostrophe. The others should say \"Two apples fell from the tree.\", \"Both boys' jackets were left on the gym floor.\" and \"The geese's pond froze overnight.\""
          },
          {
            id: "SK-GUM5-3-C08",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: [],
            prompt: "Each row names a group of owners. Decide how the group's word needs to end to show that the group owns something.",
            cols: ["Add only an apostrophe", "Add an apostrophe and s"],
            rows: [
              { text: "players, when many players own the cleats", answer: 0 },
              { text: "geese, when many geese own the pond", answer: 1 },
              { text: "pilots, when two pilots share a plane", answer: 0 },
              { text: "mice, when several mice share the nest", answer: 1 }
            ],
            clue: "Look at the last letter of each plural word. Ask whether it is s.",
            hints: [
              "Look at the last letter of each plural word. Ask whether it is s.",
              "Do one row at a time. Say the plural word out loud and think about how it ends.",
              "Pilots already ends in s. Decide about the other rows."
            ],
            how: [
              "Look at the end of each plural: players, geese, pilots and mice.",
              "Players and pilots end in s, so each needs only an apostrophe after the s.",
              "Geese and mice do not end in s, so each needs an apostrophe and s."
            ],
            misconception: "A common mix-up is treating every plural the same way. The ending of the plural word decides what is added.",
            why: "Players and pilots end in s, so they need only an apostrophe: players' cleats and pilots' plane. Geese and mice do not end in s, so they need an apostrophe and s: geese's pond and mice's nest."
          },
          {
            id: "SK-GUM5-3-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: ["p2"],
            prompt: "In the draft, sentence 7 uses the word neighbors and sentence 8 uses the word families'. Why does one word have an apostrophe and the other does not?",
            choices: [
              {
                text: "Families' shows that the gifts belong to many families, and neighbors only names more than one person.",
                correct: true
              },
              {
                text: "Neighbors should have an apostrophe too, because every plural that ends in s needs one in any sentence at all."
              },
              { text: "Families' has an apostrophe only because it comes later in the draft than the word neighbors does." },
              { text: "Sentence 8 is wrong, because an apostrophe is used only with a singular noun that owns something." }
            ],
            clue: "Ask what each word does in its sentence. Does it show that something belongs to someone, or does it only name more than one?",
            hints: [
              "Ask what each word does in its sentence. Does it show that something belongs to someone, or does it only name more than one?",
              "Reread sentence 7 and sentence 8 side by side. Look at what comes right after each word.",
              "Sentence 8 is not a mistake, so the answer cannot say that it is wrong. Check the other choices."
            ],
            how: [
              "Read sentence 8: the gifts belong to the families, so families' shows ownership.",
              "Read sentence 7: the things are for the neighbors. Nothing belongs to the neighbors, so the word only names more than one person.",
              "The answer is \"Families' shows that the gifts belong to many families, and neighbors only names more than one person.\""
            ],
            misconception: "A common mix-up is thinking every plural that ends in s needs an apostrophe. A plural needs one only when it owns something.",
            why: "The answer is \"Families' shows that the gifts belong to many families, and neighbors only names more than one person.\" The gifts belong to the families, so families' has an apostrophe. In sentence 7, the neighbors own nothing, so neighbors has none. Both sentences are correct."
          },
          {
            id: "SK-GUM5-3-C10",
            type: "dropdown",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: ["p2"],
            prompt: "Some kids share a closet in sentence 10. Which choice shows who owns it?",
            text: "{0} closet was empty by the end of the day.",
            slots: [
              {
                options: ["The children's", "The childrens'", "The childrens"],
                answer: 0
              }
            ],
            clue: "Count the owners of the closet, then ask whether that plural ends in s.",
            hints: [
              "Count the owners of the closet, then ask whether that plural ends in s.",
              "Say each choice in the blank. Look at what comes before the apostrophe.",
              "The choice with no apostrophe cannot show who owns the closet. Decide between the other two."
            ],
            how: [
              "Read sentence 10. The closet belongs to several children.",
              "Children is plural, but it does not end in s, so it needs an apostrophe and s.",
              "The answer is The children's."
            ],
            misconception: "A common mix-up is treating children like a plural that ends in s. Children does not end in s, so it needs 's.",
            why: "The answer is The children's. Several children share the closet. Children is already plural and does not end in s, so it gets an apostrophe and s. The childrens' has the apostrophe in the wrong place, and childrens has none."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM5-3-C11",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: ["p3"],
            prompt: "Look at sentences 5 through 9 of the draft. Select the sentence that has an apostrophe that does not belong.",
            targets: ["p3:2:1", "p3:2:2", "p3:2:3", "p3:2:4", "p3:2:5"],
            answer: ["p3:2:2"],
            pick: 1,
            clue: "An apostrophe needs a reason. Ask whether each one shows that something belongs to someone.",
            hints: [
              "An apostrophe needs a reason. Ask whether each one shows that something belongs to someone.",
              "Read the five sentences one at a time. Pick ONE. Ask which words name owners and which only name more than one thing.",
              "In sentence 9, the apostrophe shows that the cocoa belongs to the parents. Check the other four."
            ],
            how: [
              "Find every apostrophe in the five sentences and ask what it shows.",
              "In sentences 7 and 9, the apostrophes show that the hats and the cocoa belong to someone.",
              "In sentence 6, nothing belongs to the dogs. The word dogs only names more than one dog, so it needs no apostrophe."
            ],
            misconception: "A common mix-up is adding an apostrophe to a plural just because it ends in s. A plural needs one only when it owns something.",
            why: "The answer is sentence 6, \"Two dog's chased the sleds all the way down the hill.\" Nothing belongs to the dogs, so the word should be dogs, with no apostrophe. In sentences 7 and 9, the riders' hats and the parents' cocoa show ownership, and sentences 5 and 8 need no apostrophe."
          },
          {
            id: "SK-GUM5-3-C12",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: ["p3"],
            prompt: "Sentence 10 of the draft says the faces belong to several people, but its first two words are not right. Which choice fixes them and gives the reason?",
            choices: [
              { text: "The peoples', because peoples ends in s and so takes just a mark." },
              { text: "The people's, because people does not end in s and so takes 's.", correct: true },
              { text: "The peoples, because a plural word like people just adds an s." },
              { text: "The person's, because the faces belong to one person and need 's." }
            ],
            clue: "Ask who owns the faces, then ask whether that plural word ends in s.",
            hints: [
              "Ask who owns the faces, then ask whether that plural word ends in s.",
              "Check both parts of each choice: the word and the reason that follows it.",
              "The choice about one person does not match the faces in the story. Compare the other three."
            ],
            how: [
              "Read sentence 10. The faces belong to several people.",
              "People is plural, but it does not end in s, so it needs an apostrophe and s.",
              "The answer is \"The people's, because people does not end in s and so takes 's.\""
            ],
            misconception: "A common mix-up is treating people like a plural that ends in s. Because people does not end in s, it needs 's.",
            why: "The answer is \"The people's, because people does not end in s and so takes 's.\" The faces belong to several people, and people is already plural without an s. The peoples' puts the apostrophe where a word ending in s would take it, and The peoples shows no owner. The person's names only one owner."
          },
          {
            id: "SK-GUM5-3-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: [],
            prompt: "Pat says, \"Every plural noun needs an apostrophe.\" Choose the TWO sentences that show Pat is not right.",
            pick: 2,
            choices: [
              { text: "My cousins visit us every summer.", correct: true },
              { text: "The cats' bowl was empty again by dinner." },
              { text: "Three bakers sold pies at the fair.", correct: true },
              { text: "The kittens food was gone by dinner." },
              { text: "The bakers' oven was hot after the long morning." }
            ],
            clue: "Pat says every plural noun needs one. Find sentences that prove Pat wrong.",
            hints: [
              "Pat says every plural noun needs one. Find sentences that prove Pat wrong.",
              "Pick TWO. Check whether a plural noun in each sentence owns something.",
              "In the sentence about the bakers' oven, the plural noun owns something and has its apostrophe. Decide about the other four."
            ],
            how: [
              "Look for a sentence with a plural noun and no apostrophe that is still correct.",
              "In \"Three bakers sold pies at the fair.\" and \"My cousins visit us every summer.\" the plural nouns own nothing, so they need no apostrophe.",
              "The other three have a plural noun that owns something, so an apostrophe belongs there. Two have it, and one is missing it, so none of them shows Pat is wrong."
            ],
            misconception: "A common mix-up is choosing the sentences with apostrophes, because those follow Pat's rule. Pat is wrong when a plural noun owns nothing.",
            why: "The answers are \"Three bakers sold pies at the fair.\" and \"My cousins visit us every summer.\" Their plural nouns own nothing, so they need no apostrophe. In the other three, the bakers, the cats and the kittens own something, so an apostrophe belongs on each plural noun, and one of them leaves it out."
          },
          {
            id: "SK-GUM5-3-C14",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: [],
            prompt: "The lunch boxes belong to both twins, and the nest belongs to several mice. Choose the words that finish the sentence.",
            text: "Both {0} lunch boxes sat beside the {1} nest.",
            slots: [
              {
                options: ["twin's", "twins'", "twins"],
                answer: 1
              },
              {
                options: ["mice's", "mices'", "mices"],
                answer: 0
              }
            ],
            clue: "Count the owners for each blank. Then ask whether each plural word ends in s.",
            hints: [
              "Count the owners for each blank. Then ask whether each plural word ends in s.",
              "Fill one blank at a time. Say each choice out loud and look at where the apostrophe sits.",
              "In the second blank, one choice has no apostrophe. Decide about the other choices."
            ],
            how: [
              "The first blank has two owners, the twins. Twins ends in s, so only an apostrophe goes after the s.",
              "The second blank has several mice. Mice does not end in s, so it needs an apostrophe and s.",
              "The answers are twins' and mice's."
            ],
            misconception: "A common mix-up is using the same ending for both plurals. Twins ends in s, and mice does not.",
            why: "The answers are twins' and mice's. Twins is plural and ends in s, so it needs only an apostrophe. Mice is plural but does not end in s, so it needs an apostrophe and s. The other choices put the apostrophe in the wrong place or leave it out."
          },
          {
            id: "SK-GUM5-3-C15",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
            ],
            passages: [],
            prompt: "Ravi wrote, \"The farmer's tractors were parked in the barn.\" Four farmers share the tractors. Ravi says the apostrophe belongs before the s, because tractors is the thing that is owned. Is Ravi right?",
            choices: [
              { text: "Yes. The apostrophe goes before the s, because the s on tractors shows what is owned." },
              { text: "Yes. A plural owner needs only an s on the end, so farmer's already shows many farmers." },
              { text: "No. Four farmers share the tractors, so the owner word needs an apostrophe and another s: farmers's." },
              {
                text: "No. Four farmers share the tractors, so the owner word must show more than one owner: farmers'.",
                correct: true
              }
            ],
            clue: "Count the owners. Then ask which word in the sentence names them and how it should end.",
            hints: [
              "Count the owners. Then ask which word in the sentence names them and how it should end.",
              "Think about which word is the owner and which is the thing owned. The apostrophe goes on the owner word.",
              "The word tractors names what is owned, so it is not where the apostrophe goes. Check the other choices."
            ],
            how: [
              "Count the owners: four farmers share the tractors.",
              "Farmers is plural and ends in s, so only an apostrophe goes after the s.",
              "The answer is \"No. Four farmers share the tractors, so the owner word must show more than one owner: farmers'.\""
            ],
            misconception: "A common mix-up is looking at the thing owned instead of the owners. The apostrophe goes on the word that names who owns.",
            why: "The answer is \"No. Four farmers share the tractors, so the owner word must show more than one owner: farmers'.\" Ravi should write farmers' tractors. Farmer's would mean one farmer, and farmers's adds a second s that a plural ending in s does not need."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM5-3-S01",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: [],
      prompt: "Cover the apostrophe (and the s after it, if there is one) in every row. What kind of name is left, a single person or a crowd?",
      cols: ["A single person", "A crowd"],
      rows: [
        { text: "the pilot's cap", answer: 0 },
        { text: "the pilots' caps", answer: 1 },
        { text: "the babies' blankets", answer: 1 },
        { text: "my sister's room", answer: 0 }
      ],
      clue: "Look at the name that comes before the mark and ask whether it names one person or many.",
      hints: [
        "Look at the name that comes before the mark and ask whether it names one person or many.",
        "Do one row at a time. Say who has the thing in each phrase.",
        "In the phrase with sister, one person has the room. Decide about the other rows."
      ],
      how: [
        "Look at the name before the mark in each phrase.",
        "Pilot and sister name one person each, so those rows show a single person.",
        "Pilots and babies name more than one, so those rows show a crowd."
      ],
      misconception: "A common mix-up is thinking a mark before an s always means many people. Check the name that comes before the mark.",
      why: "The pilot's cap and my sister's room each show a single person. The pilots' caps and the babies' blankets each show a crowd, because pilots and babies name more than one.",
      like: ["SK-GUM5-3-P4"]
    },
    {
      id: "SK-GUM5-3-S02",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: [],
      prompt: "One of these lines has a mark in the wrong place. Which one is it?",
      options: [
        "The sailors' boots dried on the dock after the storm.",
        "Three of the artists' brushes rolled under the easel.",
        "The childrens' soccer team won the final game.",
        "My two uncles' truck needs a new tire.",
        "The twins' lunch boxes were packed with grapes."
      ],
      answer: [2],
      pick: 1,
      clue: "For each word that names who has something, decide whether it names more than one. Then check how it ends and where its mark sits.",
      hints: [
        "For each word that names who has something, decide whether it names more than one. Then check how it ends and where its mark sits.",
        "Read the five lines one at a time. Pick ONE line.",
        "In the line about the sailors, the group's name ends in s and the mark follows it. Check the other four."
      ],
      how: [
        "Check each group's name: sailors, artists, children, uncles and twins.",
        "Sailors, artists, uncles and twins end in s, so each needs only the mark after the s, and each line has it.",
        "Children does not end in s, so it needs 's: the children's soccer team."
      ],
      misconception: "A common mix-up is thinking the mark after the s is right for every group. A group name that does not end in s needs 's.",
      why: "The error is in \"The childrens' soccer team won the final game.\" Children does not end in s, so it gets an apostrophe and s: the children's soccer team. The other lines already have the marks they need.",
      like: ["SK-GUM5-3-P5"]
    },
    {
      id: "SK-GUM5-3-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: ["p4"],
      prompt: "Line 2 is missing a mark. A pot was brought by each cook in the cook-off. Pick the best word for the blank.",
      text: "The {0} pots stood in a row along one long table in cool shade.",
      slots: [
        {
          options: ["cook's", "cooks'", "cooks"],
          answer: 1
        }
      ],
      clue: "Think about how many people brought pots. Then ask what shows that more than one of them has pots.",
      hints: [
        "Think about how many people brought pots. Then ask what shows that more than one of them has pots.",
        "Say each choice in the blank. Look at what comes after the k and where the mark sits.",
        "One choice has no mark at all, so it only names the cooks. Decide between the other two."
      ],
      how: [
        "Read line 2. The pots belong to all the cooks.",
        "Cooks is a group name that ends in s, so only the mark goes after the s.",
        "The answer is cooks'."
      ],
      misconception: "A common mix-up is putting the mark before the s. That would mean one cook.",
      why: "The answer is cooks'. The pots belong to all the cooks, so the group name cooks needs a mark after the s. Cook's would mean one cook, and cooks alone does not show who has the pots.",
      like: ["SK-GUM5-3-C03"]
    },
    {
      id: "SK-GUM5-3-S04",
      type: "mc",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: ["p4"],
      prompt: "In line 3, spoons are held by the judges as they sample chili. Pick the phrase with the right punctuation.",
      choices: [
        { text: "judges' spoons", correct: true },
        { text: "judge's spoons" },
        { text: "judges's spoons" },
        { text: "judges spoons'" }
      ],
      clue: "Think about how many people have the spoons. Then think about where the mark goes when the name already ends in s.",
      hints: [
        "Think about how many people have the spoons. Then think about where the mark goes when the name already ends in s.",
        "Look at the name judges in each choice. Notice what follows its last letter.",
        "One choice puts its mark at the very end of the phrase, after spoons. Decide among the other three."
      ],
      how: [
        "Count the people: more than one judge has the spoons.",
        "Judges already ends in s, so only the mark goes after it.",
        "The answer is judges' spoons."
      ],
      misconception: "A common mix-up is adding the mark and another s. A name that ends in s needs only the mark.",
      why: "The answer is judges' spoons. More than one judge has the spoons, and judges ends in s, so only the mark goes after it. Judge's would mean one judge, judges's adds an extra s, and the phrase with the mark after spoons puts it after the wrong word.",
      like: ["SK-GUM5-3-C04"]
    },
    {
      id: "SK-GUM5-3-S05",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: ["p4"],
      prompt: "Answer both parts. Start with Part A.",
      partA: {
        prompt: "Paragraph 2 hides one line with a missing mark. Find that line.",
        choices: [
          { text: "First, neighbors brought their own bowls and napkins to share." },
          { text: "The kids' table held mild chili and crackers." },
          { text: "The winners trophies shone on trays along one long table.", correct: true },
          { text: "Three aprons hung on hooks near serving spoons." }
        ]
      },
      partB: {
        prompt: "Which statement gives the reason for your choice in Part A?",
        choices: [
          {
            text: "Prizes belong to groups whose names finish with s, so the mark sits right behind that letter.",
            correct: true
          },
          { text: "Group names take the mark just ahead of their final letter, whatever that letter happens to be." },
          { text: "Group names finishing with s take the mark plus a second s whenever prizes are held by them." },
          { text: "Names for several people take the mark, even when those people hold nothing of any kind." }
        ]
      },
      clue: "Look for a group of people who have something. Then ask which statement fits the line that is missing a mark.",
      hints: [
        "Look for a group of people who have something. Then ask which statement fits the line that is missing a mark.",
        "Go through the four lines in paragraph 2. Ask whether anything in each one belongs to a group.",
        "The line about the kids' table already has its mark where it belongs. Check the other three."
      ],
      how: [
        "Part A: read each line in paragraph 2 and look for a group that has something.",
        "In \"The winners trophies shone on trays along one long table.\" the trophies belong to the winners, but there is no mark.",
        "Part A answer: The winners trophies shone on trays along one long table.",
        "Part B answer: \"Prizes belong to groups whose names finish with s, so the mark sits right behind that letter.\""
      ],
      misconception: "A common mix-up is marking every group name that ends in s. Only a group that has something needs the mark.",
      why: "Part A: The winners trophies shone on trays along one long table. Part B: \"Prizes belong to groups whose names finish with s, so the mark sits right behind that letter.\" The trophies belong to the winners, so the line should say winners' trophies. The other lines either name no group that has something or already have their marks.",
      like: ["SK-GUM5-3-C05"]
    },
    {
      id: "SK-GUM5-3-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: ["p5"],
      prompt: "Two of the lines numbered 2 to 6 contain a group name with a wrong ending. Mark both lines.",
      targets: ["p5:1:2", "p5:1:3", "p5:1:4", "p5:2:1", "p5:2:2"],
      answer: ["p5:1:2", "p5:2:1"],
      pick: 2,
      clue: "Find each name for a group that has something. Check how it ends and where its mark sits.",
      hints: [
        "Find each name for a group that has something. Check how it ends and where its mark sits.",
        "Go through the five lines one by one. Pick TWO.",
        "In line 6, the mark follows the s of a group name, which is right. Check the other four."
      ],
      how: [
        "Find each group name and ask how it should end.",
        "In line 2, the bows belong to the instructors, but instructors has no mark: instructors' bows.",
        "In line 5, boys's adds an extra s to a name that already ends in s: boys' arrows.",
        "Lines 3, 4 and 6 are written correctly."
      ],
      misconception: "A common mix-up is thinking a word that ends in 's is always right. A group name that ends in s needs only the mark.",
      why: "The answers are line 2 and line 5. In line 2, instructors needs a mark after the s: instructors' bows. In line 5, boys's should be boys', because the name already ends in s. Lines 3, 4 and 6 are written correctly.",
      like: ["SK-GUM5-3-C06"]
    },
    {
      id: "SK-GUM5-3-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: [],
      prompt: "Find the TWO lines where the marks are in the right spot.",
      pick: 2,
      choices: [
        { text: "Six goat's ate all of the fresh hay that morning." },
        { text: "The skaters' helmets hung by the door.", correct: true },
        { text: "The nurses's masks were on the shelf by the sink." },
        { text: "The children's table was set for lunch.", correct: true },
        { text: "The peoples' choir sang at noon in the big hall." }
      ],
      clue: "Look at each name for people or animals that have something. Check how it ends and where its mark sits.",
      hints: [
        "Look at each name for people or animals that have something. Check how it ends and where its mark sits.",
        "Pick TWO. In some lines the mark sits in the wrong place, and in one a name has a mark it should not have.",
        "In the line about goats, the mark is on a group that has nothing. Decide about the other four."
      ],
      how: [
        "Check each name for a group that has something and how it ends.",
        "Skaters ends in s, so \"The skaters' helmets hung by the door.\" needs only the mark.",
        "Children does not end in s, so \"The children's table was set for lunch.\" needs 's.",
        "The other three are wrong: goat's has nothing, nurses's adds an extra s, and peoples' puts the mark where people needs 's."
      ],
      misconception: "A common mix-up is picking the lines with the most marks. A group name that ends in s needs only the mark, and one that does not end in s needs 's.",
      why: "The answers are \"The skaters' helmets hung by the door.\" and \"The children's table was set for lunch.\" Skaters ends in s, and children does not. The others should say \"Six goats ate the fresh hay.\", \"The nurses' masks were on the shelf.\" and \"The people's choir sang at noon.\"",
      like: ["SK-GUM5-3-C07"]
    },
    {
      id: "SK-GUM5-3-S08",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: [],
      prompt: "Sort these groups by the way their names must finish when they have something.",
      cols: ["The mark alone", "The mark plus s"],
      rows: [
        { text: "firefighters, four of them share a truck", answer: 0 },
        { text: "children, many of them share a swing", answer: 1 },
        { text: "neighbors, three of them share a fence", answer: 0 },
        { text: "people, many of them share a park", answer: 1 }
      ],
      clue: "Look at how each group's name ends. Ask whether the last letter is s.",
      hints: [
        "Look at how each group's name ends. Ask whether the last letter is s.",
        "Take one row at a time. Say the group's name aloud and look at its last letter.",
        "Neighbors already ends in s. Decide about the other rows."
      ],
      how: [
        "Look at the end of each name: firefighters, children, neighbors and people.",
        "Firefighters and neighbors end in s, so each needs only the mark after the s.",
        "Children and people do not end in s, so each needs the mark and s."
      ],
      misconception: "A common mix-up is giving every group the same finish. The last letter of the name decides what is added.",
      why: "Firefighters and neighbors end in s, so they need only the mark: firefighters' truck and neighbors' fence. Children and people do not end in s, so they need the mark and s: children's swing and people's park.",
      like: ["SK-GUM5-3-C08"]
    },
    {
      id: "SK-GUM5-3-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: ["p5"],
      prompt: "Line 7 prints archers with no mark, but line 8 prints students' with one. What explains the difference?",
      choices: [
        { text: "Students' owns the scores, while archers just labels a group.", correct: true },
        { text: "Archers is missing a mark that the writer forgot to add in line 7." },
        { text: "Line 8 names a coach, so any word near a coach gets a mark." },
        { text: "Line 8 is the mistake, since marks fit a lone person alone." }
      ],
      clue: "Decide which word owns something and which one only names a group.",
      hints: [
        "Decide which word owns something and which one only names a group.",
        "In each line, find the thing that comes next and ask who has it.",
        "Line 8 is not a mistake, so it cannot be the one that is wrong. Check the other choices."
      ],
      how: [
        "Read line 8: the best scores belong to the students, so students' shows who has them.",
        "Read line 7: the archers hit a ring, but nothing belongs to the archers, so the word only names a group.",
        "The answer is \"Students' owns the scores, while archers just labels a group.\""
      ],
      misconception: "A common mix-up is thinking a group name needs the mark every time. It needs the mark only when the group has something.",
      why: "The answer is \"Students' owns the scores, while archers just labels a group.\" In line 8, the scores belong to the students. In line 7, nothing belongs to the archers, so the word only names a group. Both lines are correct.",
      like: ["SK-GUM5-3-C09"]
    },
    {
      id: "SK-GUM5-3-S10",
      type: "dropdown",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: ["p5"],
      prompt: "A white van waits beside a gate in the last line of the draft. It carries bows and targets for the archery team. Two coaches share it. Pick the word that is right.",
      text: "Our {0} van was parked beside the gate.",
      slots: [
        {
          options: ["coach's", "coaches'", "coaches's"],
          answer: 1
        }
      ],
      clue: "Ask who has the van and how many people that is.",
      hints: [
        "Ask who has the van and how many people that is.",
        "Say each choice in the blank and notice where the mark sits.",
        "One choice adds an extra s after the mark. Decide between the other two."
      ],
      how: [
        "Read the last line. The van belongs to two coaches.",
        "Coaches is a group name that ends in s, so only the mark goes after the s.",
        "The answer is coaches'."
      ],
      misconception: "A common mix-up is putting the mark before the last s. That would mean one coach.",
      why: "The answer is coaches'. Two coaches share the van, and coaches already ends in s, so only the mark goes after it. Coach's would mean one coach, and coaches's adds an extra s.",
      like: ["SK-GUM5-3-C10"]
    },
    {
      id: "SK-GUM5-3-S11",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: ["p6"],
      prompt: "Read sentences 5 through 9 of the draft. Which sentence has an apostrophe that should be taken out?",
      targets: ["p6:2:1", "p6:2:2", "p6:2:3", "p6:2:4", "p6:2:5"],
      answer: ["p6:2:2"],
      pick: 1,
      clue: "Every apostrophe needs a reason. Ask whether each one shows that something belongs to someone.",
      hints: [
        "Every apostrophe needs a reason. Ask whether each one shows that something belongs to someone.",
        "Read the five sentences one at a time. Pick ONE. Ask which words name owners.",
        "In sentence 7, the apostrophe shows that the tips belong to the gardeners. Check the other four."
      ],
      how: [
        "Find every apostrophe in the five sentences and ask what it shows.",
        "In sentences 7 and 9, the apostrophes show that the tips and the packets belong to someone.",
        "In sentence 6, nothing belongs to the grandpas. The word only names more than one grandpa, so it needs no apostrophe."
      ],
      misconception: "A common mix-up is thinking a plural needs an apostrophe because it ends in s. A plural needs one only when it owns something.",
      why: "The answer is sentence 6, \"Two grandpa's helped kids count the beans into small bags.\" Nothing belongs to the grandpas, so the word should be grandpas, with no apostrophe. In sentences 7 and 9, the gardeners' tips and the neighbors' packets show ownership, and sentences 5 and 8 need no apostrophe.",
      like: ["SK-GUM5-3-C11"]
    },
    {
      id: "SK-GUM5-3-S12",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: ["p6"],
      prompt: "Line 10 tells who ran the seed table. Pick the best repair with its why.",
      choices: [
        { text: "Womens: women takes a plain s." },
        { text: "Womens': this word ends in s, so a mark alone follows." },
        { text: "Women's: women has no s on its end, so add 's.", correct: true },
        { text: "Woman's: only one woman ran it." }
      ],
      clue: "Count who ran it, then check how that group word ends.",
      hints: [
        "Count who ran it, then check how that group word ends.",
        "Read both halves of each choice. Word and reason must both be right.",
        "Picking one woman does not fit a group. Weigh the other three."
      ],
      how: [
        "Read line 10. Several women ran the table.",
        "Women means several, but the word has no s on its end, so it needs 's.",
        "The answer is \"Women's: women has no s on its end, so add 's.\""
      ],
      misconception: "A common mix-up is adding an s to women first. Because women already means more than one, the ending is 's.",
      why: "The answer is \"Women's: women has no s on its end, so add 's.\" Several women ran the table. The womens' puts the mark where a word ending in s would take it, and The womens shows no owner. The woman's names only one owner.",
      like: ["SK-GUM5-3-C12"]
    },
    {
      id: "SK-GUM5-3-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: [],
      prompt: "Lena says, \"Plural nouns that end in s always take an apostrophe.\" Pick the TWO sentences that prove Lena wrong.",
      pick: 2,
      choices: [
        { text: "The neighbors' fence was freshly painted yesterday." },
        { text: "Our neighbors planted tulips along the sunny fence.", correct: true },
        { text: "The sparrows' nest was tucked under the old roof." },
        { text: "The squirrels nest was high in the old oak." },
        { text: "Two sparrows sat on the wire near the barn.", correct: true }
      ],
      clue: "Lena says always. Find the sentences that prove her wrong.",
      hints: [
        "Lena says always. Find the sentences that prove her wrong.",
        "Pick TWO. Check whether a plural noun in each sentence owns something.",
        "The sentence about the fence has a plural noun with its apostrophe, so it fits Lena's rule. Decide about the other four."
      ],
      how: [
        "Look for a sentence with a plural noun that ends in s and has no apostrophe, but is still correct.",
        "In \"Our neighbors planted tulips along the sunny fence.\" and \"Two sparrows sat on the wire near the barn.\" the plural nouns own nothing, so they need no apostrophe.",
        "In the other three, a plural noun owns something, so it needs an apostrophe. The squirrels sentence lacks one, so it is not a correct sentence."
      ],
      misconception: "A common mix-up is choosing the sentences with apostrophes, because those follow Lena's rule. She is wrong when a plural noun owns nothing.",
      why: "The answers are \"Our neighbors planted tulips along the sunny fence.\" and \"Two sparrows sat on the wire near the barn.\" Their plural nouns own nothing, so they need no apostrophe. In the other three, the sparrows, the neighbors and the squirrels own something, so each needs an apostrophe, and the squirrels sentence is missing it.",
      like: ["SK-GUM5-3-C13"]
    },
    {
      id: "SK-GUM5-3-S14",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: [],
      prompt: "Skaters own the caps, and a crowd owns that bench. Pick words that complete the line below.",
      text: "Some {0} caps lay near the {1} bench.",
      slots: [
        {
          options: ["skater's", "skaters'", "skaters"],
          answer: 1
        },
        {
          options: ["people's", "peoples'", "peoples"],
          answer: 0
        }
      ],
      clue: "Think about how many have something in each blank. Then look at how each group's name ends.",
      hints: [
        "Think about how many have something in each blank. Then look at how each group's name ends.",
        "Work on one blank at a time. Say each choice aloud and notice where the mark sits.",
        "In the first blank, one choice has no mark at all. Decide about the other choices."
      ],
      how: [
        "The first blank has several skaters. Skaters ends in s, so only the mark goes after the s.",
        "The second blank has several people. People does not end in s, so it needs the mark and s.",
        "The answers are skaters' and people's."
      ],
      misconception: "A common mix-up is giving both groups the same finish. Skaters ends in s, and people does not.",
      why: "The answers are skaters' and people's. Skaters is a group name that ends in s, so it needs only the mark. People means more than one but does not end in s, so it needs the mark and s. The other choices put the mark in the wrong place or leave it out.",
      like: ["SK-GUM5-3-C14"]
    },
    {
      id: "SK-GUM5-3-S15",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns"
      ],
      passages: [],
      prompt: "Mia reads her line aloud: \"The pilot's caps hung on the wall.\" Six pilots have the caps. She believes the line is fine, because a name with a mark always looks like pilot's. Is she correct?",
      choices: [
        { text: "Mia is right because a name with a mark takes it ahead of the s, however many people there are." },
        {
          text: "Mia is wrong because six pilots hold the caps, so the mark sits right behind the s in pilots.",
          correct: true
        },
        { text: "Mia is right because caps names the thing that needs the mark, as the caps hang there." },
        { text: "Mia is wrong because six pilots hold the caps, so the name should end with a mark and a second s." }
      ],
      clue: "Count the people who have the caps. Then ask which word names them and what its ending should be.",
      hints: [
        "Count the people who have the caps. Then ask which word names them and what its ending should be.",
        "Think about which word names the people and which names the thing they have. The mark goes on the people word.",
        "The word caps names the thing that is had, not the people. Check the other choices."
      ],
      how: [
        "Count the people: six pilots have the caps.",
        "Pilots already ends in s, so only the mark goes after the s.",
        "The answer is \"Mia is wrong because six pilots hold the caps, so the mark sits right behind the s in pilots.\""
      ],
      misconception: "A common mix-up is thinking one pattern fits every name. The ending of the name, and the number of people, decide where the mark goes.",
      why: "The answer is \"Mia is wrong because six pilots hold the caps, so the mark sits right behind the s in pilots.\" Mia should write pilots' caps. Pilot's would mean one pilot, and the extra s in pilots's is not needed.",
      like: ["SK-GUM5-3-C15"]
    }
  ],
  addons: {
    "SK-GUM5-3-P1": {
      hints: [
        "Count the owners in each sentence. Then check how each owner word ends and where its apostrophe sits.",
        "Read the sentences one at a time. Look at each word that shows who owns something.",
        "\"Our dogs's leashes\" adds an extra s to a plural that already ends in s. Check the other three."
      ],
      how: [
        "Count the owners and check how each owner word ends.",
        "Children does not end in s, so it needs 's. Teachers and dogs end in s, so each needs only an apostrophe.",
        "The answer is \"All four players' shirts were muddy after the game.\" Players ends in s and has its apostrophe after it."
      ],
      misconception: "A common mix-up is putting the apostrophe before the s for every plural. When a plural ends in s, the apostrophe goes after it."
    },
    "SK-GUM5-3-P2": {
      hints: [
        "Count the owners in each blank. Then ask whether each plural word ends in s.",
        "Fill one blank at a time. Say each choice out loud and look at where the apostrophe sits.",
        "In the first blank, one choice has no apostrophe at all. Decide about the other choices."
      ],
      how: [
        "Both blanks show more than one owner, so write each plural first.",
        "Students ends in s, so only an apostrophe goes after the s.",
        "Children does not end in s, so it needs an apostrophe and s. The answers are students' and children's."
      ],
      misconception: "A common mix-up is using the same ending for both plurals. Students ends in s, and children does not."
    },
    "SK-GUM5-3-P3": {
      hints: [
        "Start with the plural word for many birds. Then decide where the apostrophe goes.",
        "Look at the end of the word birds in each choice. Check what comes after it.",
        "One choice puts the apostrophe after the whole phrase, at the very end. Decide among the other three."
      ],
      how: [
        "Many birds own the nests, so start with the plural birds.",
        "Birds already ends in s, so only an apostrophe goes after it.",
        "The answer is the birds' nests."
      ],
      misconception: "A common mix-up is putting the apostrophe before the s. That would mean only one bird."
    },
    "SK-GUM5-3-P4": {
      hints: [
        "Cover the apostrophe and any s after it. Ask whether the word that is left names one owner or more than one.",
        "Do one row at a time. Look at where the apostrophe sits in each phrase.",
        "In the phrase about the brother, the word before the apostrophe names one person. Decide about the other rows."
      ],
      how: [
        "Cover the apostrophe and any s after it, and look at the word that is left.",
        "Girl and brother name one person each, so those rows have one owner.",
        "Girls and teachers name more than one person, so those rows have more than one owner."
      ],
      misconception: "A common mix-up is thinking every apostrophe before an s shows many owners. Count the owners in the word before the apostrophe."
    },
    "SK-GUM5-3-P5": {
      hints: [
        "For each owner word, decide whether it is plural. Then check how the plural ends and where the apostrophe goes.",
        "Read the five sentences one at a time. Pick ONE.",
        "The sentence about the babies already has its apostrophe after the s of a plural that ends in s. Check the other four."
      ],
      how: [
        "Check each owner word: babies, aunts, children, cousins and kittens.",
        "Babies, aunts, cousins and kittens end in s, so each needs only an apostrophe after the s, and each sentence has one.",
        "Children does not end in s, so it needs 's. The error is childrens' in \"The childrens' choir sang at the fair.\""
      ],
      misconception: "A common mix-up is thinking an apostrophe after s is right for every plural. A plural like children needs 's."
    }
  },
  /* B8:core:end */
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
      "Some pronouns do not name a certain person. Everyone, everybody, someone, somebody, nobody and each are like this. They are singular, so they take a singular verb: Everyone is ready. Each has a turn. Everybody likes recess.",
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
    },
    {
      show: ["Somebody on the porch (hum / hums) a happy tune."],
      ask: "Which verb is correct?",
      steps: [
        "Find the pronoun at the start: Somebody.",
        "Skip the words \"on the porch.\" The verb must match Somebody.",
        "Somebody is treated as one, so it takes the singular verb. Read it: Somebody hums."
      ],
      answer: "hums: \"Somebody on the porch hums a happy tune.\""
    }
  ],
  parent: "Play a quick game at dinner. Say a starter like \"Everyone at this table ___\" or \"Both of us ___\" and let your child finish it with the right verb, such as likes or like.",
  passages: [
    /* B8:passages:start */
    {
      id: "p1",
      title: "Pizza Night",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our family makes pizza on Friday nights.",
          "(2) Everyone bring a bowl and a spoon to the big table.",
          "(3) Both of my uncles carry flour and cheese from the car."
        ],
        [
          "(4) First, we roll the dough into flat round shapes.",
          "(5) Many of the toppings sits in small bowls on the counter.",
          "(6) Each of the kids adds sauce and a handful of cheese to every pizza.",
          "(7) Somebody slices red peppers near the sink."
        ],
        [
          "(8) Nobody talk while the pizzas bake in the oven.",
          "(9) Both of my cousins point at the oven and smile.",
          "(10) Everybody agrees this is the best meal of the week.",
          "(11) I love pizza night at home."
        ]
      ]
    },
    {
      id: "p2",
      title: "Bug Hunt",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our club meets in the school garden for a bug hunt on Saturday morning.",
          "(2) Each of the members carries a clear jar with a lid.",
          "(3) Both of the leaders wears tall boots and wide sun hats.",
          "(4) Everyone checks under leaves and rocks for tiny bugs."
        ],
        [
          "(5) Nobody want to miss the big green beetle.",
          "(6) Many of the ants carry crumbs across the dusty path.",
          "(7) By noon, somebody finds a snail under a flat stone."
        ],
        [
          "(8) Both of the jars hold a ladybug by lunch.",
          "(9) Everybody clap when the leader counts the bugs.",
          "(10) Each of the members gets a sticker for helping.",
          "(11) I take home a clear jar and a big smile."
        ]
      ]
    },
    {
      id: "p3",
      title: "Cornhole Contest",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) The cornhole contest starts at the park at ten o'clock.",
          "(2) Each of the teams tosses four bean bags at a painted board.",
          "(3) Both of the boards have a round hole and a slanted top.",
          "(4) Nobody steps past the line while the first team tosses."
        ],
        [
          "(5) Many of the families cheer from the lawn chairs.",
          "(6) Somebody wave a green flag after each round.",
          "(7) Both of my cousins toss bags from the left side.",
          "(8) Everyone leans forward on the last toss.",
          "(9) Each of the bags lands near the hole in a flash."
        ],
        [
          "(10) Both of the winners shakes hands at the end.",
          "(11) By dinner time, the park is quiet again.",
          "(12) I hope the contest comes back next year."
        ]
      ]
    },
    {
      id: "p4",
      title: "Chicken Coop",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our family keeps four hens in a coop behind our old red barn.",
          "(2) Nobody forget to fill the water bowl each morning.",
          "(3) Both of our hens lay brown eggs in soft straw.",
          "(4) Our coop has one tiny door, warm walls and soft floors."
        ],
        [
          "(5) On cold days, hens scratch at dusty ground.",
          "(6) Many of those chicks peep under warm lamps.",
          "(7) Each of our nests holds soft hay.",
          "(8) Somebody collect eggs after breakfast."
        ],
        [
          "(9) Everybody have chores on our farm.",
          "(10) Both of my brothers clean our coop on Sunday.",
          "(11) Everyone agrees hens are the best pets.",
          "(12) I hope we get five more chicks this spring."
        ]
      ]
    },
    {
      id: "p5",
      title: "Karaoke Night",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our school holds a karaoke night in the gym on a cold Thursday evening.",
          "(2) Each of our teachers picks a silly song to sing.",
          "(3) Both of us sets up speakers near the stage.",
          "(4) Everyone here wears a shiny hat or a bright scarf."
        ],
        [
          "(5) Nobody speak when the music starts.",
          "(6) Many of those songs sound like old cartoon themes.",
          "(7) Somebody hands out cups of cold water."
        ],
        [
          "(8) Both of my sisters sing a duet on the stage.",
          "(9) Everybody cheer loudly as lights flash.",
          "(10) Each of our guests goes home with a big smile.",
          "(11) I wish this fun night would last much longer."
        ]
      ]
    },
    {
      id: "p6",
      title: "Sign Language Club",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our school club learns sign language every Tuesday after lunch.",
          "(2) Each of the students practices ten new signs each week.",
          "(3) Both of the teachers know the alphabet by heart.",
          "(4) Everyone sits in one big circle on soft rugs."
        ],
        [
          "(5) Nobody laughs when signs look silly.",
          "(6) Somebody make the sign for the word friend with two hands.",
          "(7) Many of those signs look like tiny pictures.",
          "(8) Both of us wave when class begins.",
          "(9) Everybody in the circle claps with open hands."
        ],
        [
          "(10) Both of those helpers waves goodbye as bells ring.",
          "(11) By spring, our club knows one hundred signs.",
          "(12) I love my new club and my new friends."
        ]
      ]
    }
    /* B8:passages:end */
  ],
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
          { ref: "SK-GUM5-4-P4" },
          { ref: "SK-GUM5-4-P5" },
          {
            id: "SK-GUM5-4-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: ["p1"],
            prompt: "Sentence 2 of the draft needs a fix. Choose the word that makes it correct.",
            text: "Everyone {0} a bowl and a spoon to the big table.",
            slots: [
              {
                options: ["brings", "bring", "have brought"],
                answer: 0
              }
            ],
            clue: "Ask whether everyone is treated as one or as more than one. Then think about which verb goes with that.",
            hints: [
              "Ask whether everyone is treated as one or as more than one. Then think about which verb goes with that.",
              "Say each choice in the blank. Think about whether it goes with one person or with more than one.",
              "The choice with have goes with plural words. Choose between the other two."
            ],
            how: [
              "Find the pronoun at the start: Everyone.",
              "Everyone is treated as one, so it takes the singular verb.",
              "The answer is brings."
            ],
            misconception: "A common mix-up is thinking everyone means many people, so it needs a plural verb. Everyone is treated as one.",
            why: "The answer is brings. Everyone is treated as one, so it takes the singular verb brings: \"Everyone brings a bowl and a spoon to the big table.\" Bring and have brought go with plural words."
          },
          {
            id: "SK-GUM5-4-C04",
            type: "mc",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: ["p1"],
            prompt: "Sentence 8 of the draft has a verb problem. Which choice shows the sentence written correctly?",
            choices: [
              { text: "Nobody talk while the pizzas bake in the oven." },
              { text: "Nobody talking while the pizzas bake in the oven." },
              { text: "Nobody talks while the pizzas bake in the oven.", correct: true },
              { text: "Nobody are talking while the pizzas bake in the oven." }
            ],
            clue: "Find the pronoun that starts the sentence. Then check which verb goes with it.",
            hints: [
              "Find the pronoun that starts the sentence. Then check which verb goes with it.",
              "Look only at the verb in each choice. Ask whether it goes with one or with more than one.",
              "One choice has talking with no helper word, so it is not a whole sentence. Decide among the other three."
            ],
            how: [
              "Find the pronoun at the start: Nobody.",
              "Nobody is treated as one, so it takes a singular verb.",
              "The answer is \"Nobody talks while the pizzas bake in the oven.\""
            ],
            misconception: "A common mix-up is leaving the s off the verb because the sentence tells about a whole group. Nobody is treated as one.",
            why: "The answer is \"Nobody talks while the pizzas bake in the oven.\" Nobody is treated as one, so it takes talks. Talk is a plural verb, talking has no helper word, and are does not go with nobody."
          },
          {
            id: "SK-GUM5-4-C05",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Which sentence in paragraph 2 of the draft pairs a pronoun with the wrong verb?",
              choices: [
                { text: "First, we roll the dough into flat round shapes." },
                { text: "Many of the toppings sits in small bowls on the counter.", correct: true },
                { text: "Each of the kids adds sauce and a handful of cheese to every pizza." },
                { text: "Somebody slices red peppers near the sink." }
              ]
            },
            partB: {
              prompt: "Which rule gives the reason for the verb change in Part A?",
              choices: [
                { text: "Many stands for a single thing, so the verb must take the s ending." },
                { text: "Every verb must end in s whenever the sentence names more than one thing." },
                { text: "Many means more than one, so it takes a plural verb, one with no s on the end.", correct: true },
                { text: "A verb stays the same no matter which pronoun the writer picks for the sentence." }
              ]
            },
            clue: "Find the pronoun in each sentence. Then ask which rule fits the sentence whose verb does not go with it.",
            hints: [
              "Find the pronoun in each sentence. Then ask which rule fits the sentence whose verb does not go with it.",
              "Read each sentence in paragraph 2 and pair its pronoun with its verb.",
              "The sentence with Each already pairs it with a verb that fits. Check the other three."
            ],
            how: [
              "Part A: read each sentence in paragraph 2 and pair each pronoun with its verb.",
              "In \"Many of the toppings sits in small bowls on the counter.\" the pronoun Many does not match the verb sits.",
              "Part A answer: Many of the toppings sits in small bowls on the counter.",
              "Part B answer: \"Many means more than one, so it takes a plural verb, one with no s on the end.\""
            ],
            misconception: "A common mix-up is thinking every verb needs an s. Many means more than one, so its verb has no s.",
            why: "Part A: Many of the toppings sits in small bowls on the counter. Part B: \"Many means more than one, so it takes a plural verb, one with no s on the end.\" The sentence should say sing. The other sentences already pair a pronoun with a verb that fits."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM5-4-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: ["p2"],
            prompt: "Look at sentences 2 through 6 of the draft. Select the TWO sentences that pair a pronoun with the wrong verb.",
            targets: ["p2:1:2", "p2:1:3", "p2:1:4", "p2:2:1", "p2:2:2"],
            answer: ["p2:1:3", "p2:2:1"],
            pick: 2,
            clue: "Find the pronoun in each sentence. Ask whether it is treated as one or means more than one, and whether its verb fits.",
            hints: [
              "Find the pronoun in each sentence. Ask whether it is treated as one or means more than one, and whether its verb fits.",
              "Read the five sentences one at a time. Pick TWO.",
              "In sentence 4, the pronoun Everyone goes with a verb that fits. Check the other four."
            ],
            how: [
              "Pair each pronoun with its verb in the five sentences.",
              "In sentence 3, Both means more than one, so wears does not match. It should be wear.",
              "In sentence 5, Nobody is treated as one, so want does not match. It should be wants.",
              "Sentences 2, 4 and 6 already pair each pronoun with a verb that fits."
            ],
            misconception: "A common mix-up is picking a sentence just because its verb ends in s. Both needs a verb with no s, and Nobody needs one that ends in s.",
            why: "The answers are sentence 3 and sentence 5. In sentence 3, Both means more than one, so wears should be wear. In sentence 5, Nobody is treated as one, so want should be wants. Sentences 2, 4 and 6 are written correctly."
          },
          {
            id: "SK-GUM5-4-C07",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: [],
            prompt: "Choose the TWO sentences in which the verb matches its pronoun.",
            pick: 2,
            choices: [
              { text: "Many of the kids is hungry by noon." },
              { text: "Nobody wants to leave the pool early.", correct: true },
              { text: "Somebody paint the fence every spring." },
              { text: "Everybody go to the gym after lunch." },
              { text: "Both of the ponies eat hay in the barn.", correct: true }
            ],
            clue: "Find the pronoun in each sentence. Ask whether it is treated as one or means more than one.",
            hints: [
              "Find the pronoun in each sentence. Ask whether it is treated as one or means more than one.",
              "Pick TWO. In some sentences the verb is made for one, but the pronoun needs one made for more than one, or the other way around.",
              "In the sentence about the kids, Many means more than one, and the verb is made for one. Decide about the other four."
            ],
            how: [
              "Pair each pronoun with its verb.",
              "Nobody is treated as one, so \"Nobody wants to leave the pool early.\" fits.",
              "Both means more than one, so \"Both of the ponies eat hay in the barn.\" fits.",
              "The other three do not match: Everybody go, Many of the kids is, and Somebody paint."
            ],
            misconception: "A common mix-up is trusting the sentence that sounds natural when spoken fast. Check the pronoun, then check the verb.",
            why: "The answers are \"Nobody wants to leave the pool early.\" and \"Both of the ponies eat hay in the barn.\" Nobody is treated as one, and both means more than one. The others should say \"Everybody goes,\" \"Many of the kids are\" and \"Somebody paints.\""
          },
          {
            id: "SK-GUM5-4-C08",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: [],
            prompt: "Each sentence has a pronoun and a blank. Match each sentence with the verb that fits the blank.",
            cols: ["paints", "paint"],
            rows: [
              { text: "Everybody ___ a picture of a pond.", answer: 0 },
              { text: "Both of my cousins ___ a picture of a barn.", answer: 1 },
              { text: "Nobody ___ a picture of a snake.", answer: 0 },
              { text: "Many of the kids ___ a picture of a dragon.", answer: 1 }
            ],
            clue: "Look at each pronoun. Does it count as one or as more?",
            hints: [
              "Look at each pronoun. Does it count as one or as more?",
              "Do one row at a time. Cover the words after the pronoun and read the pronoun with each verb.",
              "Nobody is treated as one. Decide about the other rows."
            ],
            how: [
              "Look at the pronouns: Everybody, Both, Nobody and Many.",
              "Everybody and Nobody are treated as one, so those rows take the verb that ends in s.",
              "Both and Many mean more than one, so those rows take the verb with no s."
            ],
            misconception: "A common mix-up is matching the verb to the word next to the blank, such as cousins or kids. Match it to the pronoun at the start.",
            why: "Everybody paints and Nobody paints, because everybody and nobody are treated as one. Both of my cousins paint and Many of the kids paint, because both and many mean more than one."
          },
          {
            id: "SK-GUM5-4-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: ["p2"],
            prompt: "In the draft, sentence 8 uses the verb hold and sentence 10 uses the verb gets. Why does one verb end in s and the other does not?",
            choices: [
              { text: "Both means more than one, so it takes hold, but each counts as one, so it takes gets.", correct: true },
              { text: "Gets should lose its s, because a verb that comes after members must match that plural word." },
              { text: "Hold has no s only because sentence 8 comes before sentence 10 in the draft." },
              { text: "Sentence 8 is wrong, because both is treated as one and needs the verb holds." }
            ],
            clue: "Ask which pronoun starts each sentence. Is it treated as one, or does it mean more than one?",
            hints: [
              "Ask which pronoun starts each sentence. Is it treated as one, or does it mean more than one?",
              "Reread sentence 8 and sentence 10 side by side. Look at the first word of each.",
              "Sentence 8 is not a mistake, so the answer cannot say that it is wrong. Check the other choices."
            ],
            how: [
              "Read sentence 8: Both means more than one, so it takes the verb hold.",
              "Read sentence 10: Each is treated as one, so it takes the verb gets.",
              "The answer is \"Both means more than one, so it takes hold, but each counts as one, so it takes gets.\""
            ],
            misconception: "A common mix-up is thinking the noun after the pronoun picks the verb. The pronoun picks it.",
            why: "The answer is \"Both means more than one, so it takes hold, but each counts as one, so it takes gets.\" The pronouns decide the verbs, so each sentence is correct. Members and jars are the nouns that follow, but they do not choose the verb."
          },
          {
            id: "SK-GUM5-4-C10",
            type: "dropdown",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: ["p2"],
            prompt: "Pick the verb for sentence 9 of the draft.",
            text: "Everybody {0} when the leader counts the bugs.",
            slots: [
              {
                options: ["claps", "clap", "do clap"],
                answer: 0
              }
            ],
            clue: "Ask whether Everybody is treated as one or as more than one.",
            hints: [
              "Ask whether Everybody is treated as one or as more than one.",
              "Try each choice after the pronoun and listen for the one that sounds like one clapper.",
              "Do goes with more than one, so skip that choice. Think about the other two."
            ],
            how: [
              "Read sentence 9. The pronoun is Everybody.",
              "Everybody is treated as one, so it takes the singular verb.",
              "The answer is claps."
            ],
            misconception: "A common mix-up is dropping the s because the group is clapping together. Everybody is still treated as one.",
            why: "The answer is claps. Everybody is treated as one, so it takes claps. Clap and do clap go with plural words."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM5-4-C11",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: ["p3"],
            prompt: "Look at sentences 5 through 9 of the draft. Select the sentence that pairs a pronoun with the wrong verb.",
            targets: ["p3:2:1", "p3:2:2", "p3:2:3", "p3:2:4", "p3:2:5"],
            answer: ["p3:2:2"],
            pick: 1,
            clue: "Find the pronoun in each sentence. Ask whether it is treated as one or means more than one, and whether its verb fits.",
            hints: [
              "Find the pronoun in each sentence. Ask whether it is treated as one or means more than one, and whether its verb fits.",
              "Read the five sentences one at a time. Pick ONE.",
              "In sentence 8, the pronoun Everyone goes with a verb that fits. Check the other four."
            ],
            how: [
              "Pair each pronoun with its verb in the five sentences.",
              "In sentence 5, Many means more than one, and cheer fits. In sentence 7, Both means more than one, and toss fits.",
              "In sentence 6, Somebody is treated as one, so wave does not match. It should be waves."
            ],
            misconception: "A common mix-up is thinking a verb with no s is always wrong. Verbs for Many and Both have no s.",
            why: "The answer is sentence 6, \"Somebody wave a green flag after each round.\" Somebody is treated as one, so wave should be waves. Sentences 5, 7, 8 and 9 each pair a pronoun with a verb that fits."
          },
          {
            id: "SK-GUM5-4-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: ["p3"],
            prompt: "Fill the blank in sentence 10 so the pronoun and verb match.",
            text: "Both of the winners {0} hands at the end.",
            slots: [
              {
                options: ["shakes", "shake", "is shaking"],
                answer: 1
              }
            ],
            clue: "Ask whether Both is treated as one or means more than one. Then think about which verb goes with that.",
            hints: [
              "Ask whether Both is treated as one or means more than one. Then think about which verb goes with that.",
              "Cover the words between Both and the blank, then read Both with each verb.",
              "One choice has is, which goes with one. Decide between the other two."
            ],
            how: [
              "Read sentence 10. The pronoun is Both.",
              "Both means more than one, so it takes the plural verb.",
              "The answer is shake."
            ],
            misconception: "A common mix-up is adding an s because winners ends in s. The verb must match Both, not the noun.",
            why: "The answer is shake. Both means more than one, so it takes shake: \"Both of the winners shake hands at the end.\" Shakes and is shaking go with one."
          },
          {
            id: "SK-GUM5-4-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: [],
            prompt: "Pat says, \"A verb always matches the word right before it.\" Choose the TWO sentences that prove Pat wrong.",
            pick: 2,
            choices: [
              { text: "Nobody in the two classes wants to be late.", correct: true },
              { text: "Many of the cars park near the gate." },
              { text: "Each of the girls carries a tray to the table.", correct: true },
              { text: "Everyone in the room sings a song before lunch." },
              { text: "Both of the girls carry a tray to the table." }
            ],
            clue: "Pat says the verb goes with the word right before it. Look for sentences where the verb goes with a pronoun farther back.",
            hints: [
              "Pat says the verb goes with the word right before it. Look for sentences where the verb goes with a pronoun farther back.",
              "Pick TWO. Find the pronoun in each sentence and the word that sits right before the verb.",
              "In the sentence about the room, the word before the verb names one thing, so it fits Pat's idea. Decide about the other four."
            ],
            how: [
              "Find the pronoun and the word right before the verb in each sentence.",
              "In \"Each of the girls carries a tray to the table.\" the verb carries goes with Each, not with girls.",
              "In \"Nobody in the two classes wants to be late.\" the verb wants goes with Nobody, not with classes.",
              "In the other three, the verb fits the word before it and the pronoun too, so they do not prove Pat wrong."
            ],
            misconception: "A common mix-up is picking sentences with a plural word before the verb. Look for a verb that fits the pronoun, not the plural word.",
            why: "The answers are \"Each of the girls carries a tray to the table.\" and \"Nobody in the two classes wants to be late.\" In both, the verb goes with the pronoun, not with the plural word right before it. In the other three, the verb fits both the pronoun and the word before it."
          },
          {
            id: "SK-GUM5-4-C14",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: [],
            prompt: "Choose the words that finish the sentence.",
            text: "Nobody on the team {0} the ball too long, and both of the coaches {1} the game.",
            slots: [
              {
                options: ["keeps", "keep", "have kept"],
                answer: 0
              },
              {
                options: ["watches", "watch", "is watching"],
                answer: 1
              }
            ],
            clue: "Find the pronoun before each blank. Ask whether it is treated as one or means more than one.",
            hints: [
              "Find the pronoun before each blank. Ask whether it is treated as one or means more than one.",
              "Fill one blank at a time. Say each choice out loud and ask which goes with the pronoun.",
              "In the first blank, the choice with have goes with more than one. Decide about the other choices."
            ],
            how: [
              "The first blank follows Nobody, which is treated as one, so it takes the singular verb.",
              "The second blank follows both, which means more than one, so it takes the plural verb.",
              "The answers are keeps and watch."
            ],
            misconception: "A common mix-up is using the same kind of verb in both blanks. Nobody takes an s, and both does not.",
            why: "The answers are keeps and watch. Nobody is treated as one, so it takes keeps. Both means more than one, so it takes watch. Have kept goes with more than one, and is watching goes with one."
          },
          {
            id: "SK-GUM5-4-C15",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
            ],
            passages: [],
            prompt: "Ravi wrote, \"Everybody in the two classes want a turn.\" He says want is right, because classes is plural and sits right before the verb. Is Ravi right?",
            choices: [
              { text: "Yes. The verb must match the plural word classes beside it, so want is correct." },
              { text: "Yes. Everybody names many people, so it always takes a plural verb, like want." },
              { text: "No. Everybody is treated as one, so the noun must change, and classes should be written as class." },
              { text: "No. Everybody is treated as one, so the verb must be wants, even though classes is plural.", correct: true }
            ],
            clue: "Find the pronoun. Then ask which word the verb should go with, the pronoun or the word beside the verb.",
            hints: [
              "Find the pronoun. Then ask which word the verb should go with, the pronoun or the word beside the verb.",
              "Think about what Everybody is treated as, one or more than one. Then think about what that means for the verb.",
              "The word classes only tells where the people are. It does not choose the verb. Check the other choices."
            ],
            how: [
              "Find the pronoun: Everybody.",
              "Everybody is treated as one, so it takes the singular verb wants.",
              "The answer is \"No. Everybody is treated as one, so the verb must be wants, even though classes is plural.\""
            ],
            misconception: "A common mix-up is matching the verb to the plural word next to it. The verb goes with the pronoun at the start.",
            why: "The answer is \"No. Everybody is treated as one, so the verb must be wants, even though classes is plural.\" Ravi should write wants. The word classes tells where the people are, but it does not choose the verb."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM5-4-S01",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: [],
      prompt: "One line pairs its first word with the wrong verb. Which one is it?",
      options: [
        "Each of our lambs follows its mother up a hill.",
        "Both of those tents stand beside a quiet lake.",
        "Everyone in our van sing along to loud music.",
        "Many of her paintings hang in museum halls.",
        "Nobody here misses parades on Main Street."
      ],
      answer: [2],
      pick: 1,
      clue: "Find the pronoun in each line and ask whether it goes with one or with more than one.",
      hints: [
        "Find the pronoun in each line and ask whether it goes with one or with more than one.",
        "Read the five lines one at a time. Pick ONE line.",
        "The line about the lambs pairs its pronoun with a verb that fits. Check the other four."
      ],
      how: [
        "Pair each pronoun with its verb: Each follows, Both stand, Everyone sing, Many hang and Nobody misses.",
        "Each, Nobody and Everyone are treated as one. Both and Many mean more than one.",
        "Everyone is treated as one, so sing does not match. The error is sing in \"Everyone in our van sing along to loud music.\""
      ],
      misconception: "A common mix-up is thinking a verb with an s is wrong when the line names a crowd. Everyone is still treated as one.",
      why: "The error is in \"Everyone in our van sing along to loud music.\" Everyone is treated as one, so the verb should be sings.",
      like: ["SK-GUM5-4-P4"]
    },
    {
      id: "SK-GUM5-4-S02",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: [],
      prompt: "Pick the TWO lines that pair the pronoun with the right verb.",
      pick: 2,
      choices: [
        { text: "Somebody leave coats on buses." },
        { text: "Nobody in my family likes cold soup.", correct: true },
        { text: "Both of those swings is empty." },
        { text: "Many of those clowns juggles three balls." },
        { text: "Both of our puppies chew on ropes.", correct: true }
      ],
      clue: "Find the pronoun in each line. Ask whether it goes with one or with more than one.",
      hints: [
        "Find the pronoun in each line. Ask whether it goes with one or with more than one.",
        "Pick TWO. Read each pronoun with its verb and skip the words in between.",
        "The line about the swings pairs a pronoun that means more than one with a verb made for one. Decide about the other four."
      ],
      how: [
        "Pair each pronoun with its verb.",
        "Nobody is treated as one, so \"Nobody in my family likes cold soup.\" fits.",
        "Both means more than one, so \"Both of our puppies chew on ropes.\" fits.",
        "The other three do not match: Many of those clowns juggles, Somebody leave, and Both of those swings is."
      ],
      misconception: "A common mix-up is picking a line because its verb sounds right beside the noun. Pair the verb with the pronoun instead.",
      why: "The answers are \"Nobody in my family likes cold soup.\" and \"Both of our puppies chew on ropes.\" Nobody is treated as one, and both means more than one. The others should say \"Many of those clowns juggle,\" \"Somebody leaves\" and \"Both of those swings are.\"",
      like: ["SK-GUM5-4-P5"]
    },
    {
      id: "SK-GUM5-4-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: ["p4"],
      prompt: "Line 2 needs one verb form. Which one belongs?",
      text: "Nobody {0} to fill the water bowl each morning.",
      slots: [
        {
          options: ["forgets", "forget", "have forgotten"],
          answer: 0
        }
      ],
      clue: "Ask whether Nobody is treated as one or as more than one. Then think about what that means for the verb.",
      hints: [
        "Ask whether Nobody is treated as one or as more than one. Then think about what that means for the verb.",
        "Say each choice in the blank. Think about whether it goes with one person or with several.",
        "Nobody does not fit with a helper word like have. Compare the other two."
      ],
      how: [
        "Read line 2. The pronoun is Nobody.",
        "Nobody is treated as one, so it takes the singular verb.",
        "The answer is forgets."
      ],
      misconception: "A common mix-up is dropping the s because the family has many members. Nobody is still treated as one.",
      why: "The answer is forgets. Nobody is treated as one, so it takes forgets. Forget and have forgotten go with plural words.",
      like: ["SK-GUM5-4-C03"]
    },
    {
      id: "SK-GUM5-4-S04",
      type: "mc",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: ["p4"],
      prompt: "Line 9 is the one with a problem. Pick the version that is written right.",
      choices: [
        { text: "Everybody have chores on our farm." },
        { text: "Everybody has chores on our farm.", correct: true },
        { text: "Everybody having chores on our farm." },
        { text: "Everybody do have chores on our farm." }
      ],
      clue: "Find the pronoun that starts the line. Then check which verb goes with it.",
      hints: [
        "Find the pronoun that starts the line. Then check which verb goes with it.",
        "Look at the verb part in each choice and ask whether it goes with one or with more than one.",
        "One choice has having with no helper word, so it is not a whole line. Decide among the other three."
      ],
      how: [
        "Find the pronoun at the start: Everybody.",
        "Everybody is treated as one, so it takes a singular verb.",
        "The answer is \"Everybody has chores on our farm.\""
      ],
      misconception: "A common mix-up is choosing have because the farm has many people. Everybody is treated as one.",
      why: "The answer is \"Everybody has chores on our farm.\" Everybody is treated as one, so it takes has. Have and do have go with plural words, and having has no helper word.",
      like: ["SK-GUM5-4-C04"]
    },
    {
      id: "SK-GUM5-4-S05",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: ["p4"],
      prompt: "Work in two steps.",
      partA: {
        prompt: "Find the line in paragraph 2 whose action word clashes with the word that starts it.",
        choices: [
          { text: "On cold days, hens scratch at dusty ground." },
          { text: "Many of those chicks peep under warm lamps." },
          { text: "Somebody collect eggs after breakfast.", correct: true },
          { text: "Each of our nests holds soft hay." }
        ]
      },
      partB: {
        prompt: "Which statement explains your first choice?",
        choices: [
          { text: "Somebody counts as one person, so its action word gets an s.", correct: true },
          { text: "Somebody counts as many people, so its action word stays bare." },
          { text: "Only lines about hens or chicks give action words an s." },
          { text: "Pronouns never change action words, so any verb works everywhere." }
        ]
      },
      clue: "Find the first word of each line. Then ask which statement fits the line whose verb does not go with it.",
      hints: [
        "Find the first word of each line. Then ask which statement fits the line whose verb does not go with it.",
        "Read each line in the second paragraph and pair its first word with its verb.",
        "The line with Each already pairs it with a verb that fits. Check the other three."
      ],
      how: [
        "Part A: read each line in the second paragraph and pair each pronoun with its verb.",
        "In \"Somebody collect eggs after breakfast.\" the pronoun Somebody does not match the verb collect.",
        "Part A answer: Somebody collect eggs after breakfast.",
        "Part B answer: \"Somebody counts as one person, so its action word gets an s.\""
      ],
      misconception: "A common mix-up is leaving the s off because the farm has many people. Somebody is still treated as one.",
      why: "Part A: Somebody collect eggs after breakfast. Part B: \"Somebody counts as one person, so its action word gets an s.\" The line should say collects. The other lines already pair a pronoun with a verb that fits.",
      like: ["SK-GUM5-4-C05"]
    },
    {
      id: "SK-GUM5-4-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: ["p5"],
      prompt: "Lines 2 to 6 hold two mistakes in verb choice. Mark both.",
      targets: ["p5:1:2", "p5:1:3", "p5:1:4", "p5:2:1", "p5:2:2"],
      answer: ["p5:1:3", "p5:2:1"],
      pick: 2,
      clue: "Read each line's first word. Does it stand for one or for more than one, and does its verb fit?",
      hints: [
        "Read each line's first word. Does it stand for one or for more than one, and does its verb fit?",
        "Go through the five lines one by one. Pick TWO.",
        "In line 6, the pronoun Many goes with a verb that fits. Check the other four."
      ],
      how: [
        "Pair each pronoun with its verb in the five lines.",
        "In line 3, Both means more than one, so sets does not match. It should be set.",
        "In line 5, Nobody is treated as one, so speak does not match. It should be speaks.",
        "Lines 2, 4 and 6 already pair each pronoun with a verb that fits."
      ],
      misconception: "A common mix-up is marking lines just because the verb has no s. Nobody needs a verb with an s, and Both needs one without.",
      why: "The answers are line 3 and line 5. In line 3, Both means more than one, so sets should be set. In line 5, Nobody is treated as one, so speak should be speaks. Lines 2, 4 and 6 are written correctly.",
      like: ["SK-GUM5-4-C06"]
    },
    {
      id: "SK-GUM5-4-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: [],
      prompt: "Two of these lines are written correctly. Mark them.",
      pick: 2,
      choices: [
        { text: "Everyone in our group bring snacks." },
        { text: "Nobody on that late bus wave at drivers." },
        { text: "Everybody in our choir wears blue scarves.", correct: true },
        { text: "Both of her mugs is on shelves." },
        { text: "Both of my uncles tie ropes to docks.", correct: true }
      ],
      clue: "Look at the pronoun in each line. Check whether it is treated as one or means more than one.",
      hints: [
        "Look at the pronoun in each line. Check whether it is treated as one or means more than one.",
        "Pick TWO. In some lines the verb is made for one but the pronoun needs the other kind, or the other way around.",
        "In the line about the mugs, Both means more than one, and the verb is made for one. Decide about the other four."
      ],
      how: [
        "Pair each pronoun with its verb.",
        "Everybody is treated as one, so \"Everybody in our choir wears blue scarves.\" fits.",
        "Both means more than one, so \"Both of my uncles tie ropes to docks.\" fits.",
        "The other three do not match: Everyone bring, Both of her mugs is, and Nobody wave."
      ],
      misconception: "A common mix-up is trusting a line that sounds fine when it is read fast. Pair the pronoun with its verb.",
      why: "The answers are \"Everybody in our choir wears blue scarves.\" and \"Both of my uncles tie ropes to docks.\" The others should say \"Everyone brings,\" \"Both of her mugs are\" and \"Nobody waves.\"",
      like: ["SK-GUM5-4-C07"]
    },
    {
      id: "SK-GUM5-4-S08",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: [],
      prompt: "Sort these lines by the verb their blank needs.",
      cols: ["rides", "ride"],
      rows: [
        { text: "Everyone ___ in our front boat.", answer: 0 },
        { text: "Both of my aunts ___ on that ferry.", answer: 1 },
        { text: "Nobody ___ on slow trains.", answer: 0 },
        { text: "Many of those boys ___ on big wheels.", answer: 1 }
      ],
      clue: "Look at each pronoun. Does it count as one or as more?",
      hints: [
        "Look at each pronoun. Does it count as one or as more?",
        "Take one row at a time. Cover the words after the pronoun and read the pronoun with each verb.",
        "Nobody is treated as one. Decide about the other rows."
      ],
      how: [
        "Look at the pronouns: Everyone, Both, Nobody and Many.",
        "Everyone and Nobody are treated as one, so those rows take the verb that ends in s.",
        "Both and Many mean more than one, so those rows take the verb with no s."
      ],
      misconception: "A common mix-up is matching the verb to the plural word near the blank, such as aunts or boys. Match it to the pronoun.",
      why: "Everyone rides and Nobody rides, because everyone and nobody are treated as one. Both of my aunts ride and Many of those boys ride, because both and many mean more than one.",
      like: ["SK-GUM5-4-C08"]
    },
    {
      id: "SK-GUM5-4-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: ["p5"],
      prompt: "Compare sing in line 8 with goes in line 10. What makes their endings differ?",
      choices: [
        { text: "Goes is a mistake, since guests are several and sit right next to that verb in line 10." },
        { text: "Both means two girls, so sing stays plain. Each means one guest, so goes takes s.", correct: true },
        { text: "Sing stays plain just since line 8 appears early on that page." },
        { text: "Line 8 should read sings, since both means a single girl there." }
      ],
      clue: "Ask which pronoun starts each line. Is it a word for one, or for more than one?",
      hints: [
        "Ask which pronoun starts each line. Is it a word for one, or for more than one?",
        "Reread line 8 and line 10 side by side. Look at the first word of each.",
        "Line 8 is correct as written, so a choice that calls it wrong cannot be the answer. Check the other choices."
      ],
      how: [
        "Read line 8: Both is a word for two, so its verb sing has no s.",
        "Read line 10: Each is a word for one at a time, so its verb goes ends in s.",
        "The answer is \"Both means two girls, so sing stays plain. Each means one guest, so goes takes s.\""
      ],
      misconception: "A common mix-up is letting the noun after the pronoun pick the verb. The pronoun picks it.",
      why: "The answer is \"Both means two girls, so sing stays plain. Each means one guest, so goes takes s.\" The pronouns decide the verbs, so both lines are correct. My sisters and our guests are the nouns that follow, but they do not choose the verb.",
      like: ["SK-GUM5-4-C09"]
    },
    {
      id: "SK-GUM5-4-S10",
      type: "dropdown",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: ["p5"],
      prompt: "Choose what fits the blank in line 9.",
      text: "Everybody {0} loudly as lights flash.",
      slots: [
        {
          options: ["cheers", "cheer", "are cheering"],
          answer: 0
        }
      ],
      clue: "Ask whether Everybody is treated as one or as more than one.",
      hints: [
        "Ask whether Everybody is treated as one or as more than one.",
        "Picture one cheerer and then many. Which choices match each picture?",
        "Look at the choice that starts with are. Does it fit Everybody?"
      ],
      how: [
        "Read line 9. The pronoun is Everybody.",
        "Everybody is treated as one, so it takes the singular verb.",
        "The answer is cheers."
      ],
      misconception: "A common mix-up is dropping the s because many people cheer at once. Everybody is still treated as one.",
      why: "The answer is cheers. Everybody is treated as one, so it takes cheers. Cheer and are cheering go with plural words.",
      like: ["SK-GUM5-4-C10"]
    },
    {
      id: "SK-GUM5-4-S11",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: ["p6"],
      prompt: "Read lines 5 to 9. Which line needs its verb changed?",
      targets: ["p6:2:1", "p6:2:2", "p6:2:3", "p6:2:4", "p6:2:5"],
      answer: ["p6:2:2"],
      pick: 1,
      clue: "Read each line's first word. Does it stand for one or for more than one, and does its verb fit?",
      hints: [
        "Read each line's first word. Does it stand for one or for more than one, and does its verb fit?",
        "Go through the five lines one by one. Pick ONE.",
        "In line 9, the pronoun Everybody goes with a verb that fits. Check the other four."
      ],
      how: [
        "Pair each pronoun with its verb in the five lines.",
        "In line 5, Nobody takes laughs. In line 7, Many takes look. In line 8, Both takes wave. In line 9, Everybody takes claps.",
        "In line 6, Somebody is treated as one, so make does not match. It should be makes."
      ],
      misconception: "A common mix-up is thinking a verb that ends in s is the problem. Somebody needs a verb that ends in s.",
      why: "The answer is line 6, \"Somebody make the sign for the word friend with two hands.\" Somebody is treated as one, so make should be makes. Lines 5, 7, 8 and 9 each pair a pronoun with a verb that fits.",
      like: ["SK-GUM5-4-C11"]
    },
    {
      id: "SK-GUM5-4-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: ["p6"],
      prompt: "Which form fits line 10?",
      text: "Both of those helpers {0} goodbye as bells ring.",
      slots: [
        {
          options: ["waves", "wave", "is waving"],
          answer: 1
        }
      ],
      clue: "Does Both name one helper or more than one? Use that to choose the verb.",
      hints: [
        "Does Both name one helper or more than one? Use that to choose the verb.",
        "Skip the words between Both and the blank. Read Both with each choice.",
        "Look at the choice that starts with is. Does it fit Both?"
      ],
      how: [
        "Read line 10. The pronoun is Both.",
        "Both means more than one, so it takes the plural verb.",
        "The answer is wave."
      ],
      misconception: "A common mix-up is adding an s because helpers ends in s. The verb must go with Both.",
      why: "The answer is wave. Both means more than one, so it takes wave. Waves and is waving go with one.",
      like: ["SK-GUM5-4-C12"]
    },
    {
      id: "SK-GUM5-4-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: [],
      prompt: "Lena says, \"A verb copies whichever noun sits closest to it.\" Pick the TWO lines that show Lena is mistaken.",
      pick: 2,
      choices: [
        { text: "Each of those dancers wears bright scarves.", correct: true },
        { text: "Many of those pies cool by open windows." },
        { text: "Nobody in our busy kitchens cooks without aprons.", correct: true },
        { text: "Everybody in our van sings loudly." },
        { text: "Both of those dancers wear bright scarves on stage." }
      ],
      clue: "Lena makes a rule about the noun nearest the verb. Test her rule on each line.",
      hints: [
        "Lena makes a rule about the noun nearest the verb. Test her rule on each line.",
        "Pick TWO. In each line, find the pronoun and the noun just before the verb, then compare how many each names.",
        "In the line about the van, the noun near the verb names one thing, so Lena's rule works there. Decide about the other four."
      ],
      how: [
        "Look at Lena's rule: the verb copies the noun closest to it.",
        "In \"Each of those dancers wears bright scarves.\" the closest noun is dancers, which is more than one, but wears goes with Each.",
        "In \"Nobody in our busy kitchens cooks without aprons.\" the closest noun is kitchens, which is more than one, but cooks goes with Nobody.",
        "In the other three lines, the verb also fits the closest noun, so they do not prove Lena wrong."
      ],
      misconception: "A common mix-up is choosing lines with a plural noun next to the verb. Lena is wrong when the verb fits the pronoun but not the noun beside it.",
      why: "The answers are \"Each of those dancers wears bright scarves.\" and \"Nobody in our busy kitchens cooks without aprons.\" In both, the verb goes with the pronoun, not with the plural noun beside it. In the other three lines, the verb fits the closest noun too.",
      like: ["SK-GUM5-4-C13"]
    },
    {
      id: "SK-GUM5-4-S14",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: [],
      prompt: "Pick the words that complete the line below.",
      text: "Many of the ducks {0} bread from our hands, and each of the geese {1} a different spot.",
      slots: [
        {
          options: ["peck", "pecks", "is pecking"],
          answer: 0
        },
        {
          options: ["picks", "pick", "are picking"],
          answer: 0
        }
      ],
      clue: "Look at the pronoun in front of each blank. Check whether it is treated as one or means more than one.",
      hints: [
        "Look at the pronoun in front of each blank. Check whether it is treated as one or means more than one.",
        "Work on one blank at a time. Say each choice aloud and ask which goes with the pronoun.",
        "In the second blank, the choice with are goes with more than one. Decide about the other choices."
      ],
      how: [
        "The first blank follows Many, which means more than one, so it takes the verb with no s.",
        "The second blank follows each, which is treated as one, so it takes the verb that ends in s.",
        "The answers are peck and picks."
      ],
      misconception: "A common mix-up is picking the same kind of verb twice. Many takes no s, and each takes an s.",
      why: "The answers are peck and picks. Many means more than one, so it takes peck. Each is treated as one, so it takes picks. Is pecking goes with one, and are picking goes with more than one.",
      like: ["SK-GUM5-4-C14"]
    },
    {
      id: "SK-GUM5-4-S15",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement"
      ],
      passages: [],
      prompt: "Mia's line: \"Both of the pies is cooling on the sill.\" Mia thinks a pair is one thing. Was she correct?",
      choices: [
        { text: "She was, since a pair counts as one thing and a verb for one thing fits." },
        { text: "She was not, since both means a lone pie and only pies must change to pie." },
        { text: "She was not, since both means two pies and the verb should be are cooling.", correct: true },
        { text: "She was not, since both is plural and the verb should be was cooling." }
      ],
      clue: "Find the pronoun. Then ask whether it names one thing or more than one.",
      hints: [
        "Find the pronoun. Then ask whether it names one thing or more than one.",
        "Think about Mia's idea that a pair is one thing. Ask what both really tells about the pies.",
        "The form was cooling goes with one thing, not with more than one. Check the other choices."
      ],
      how: [
        "Find the pronoun: Both.",
        "Both means two pies, even if the pies make a pair, so it takes a plural verb.",
        "The answer is \"She was not, since both means two pies and the verb should be are cooling.\""
      ],
      misconception: "A common mix-up is thinking a pair is a single thing. Both still means more than one, so its verb must be plural.",
      why: "The answer is \"She was not, since both means two pies and the verb should be are cooling.\" Mia should write are cooling. Both means more than one pie, so it needs a plural verb. Was is made for one.",
      like: ["SK-GUM5-4-C15"]
    }
  ],
  addons: {
    "SK-GUM5-4-P1": {
      hints: [
        "Ask whether Everyone counts as one or as more than one. Then think about which verb goes with that.",
        "Skip the words on the bus. Read the pronoun with each choice.",
        "One choice, be, does not fit this sentence by itself. Decide between the other two."
      ],
      how: [
        "Find the pronoun at the start: Everyone.",
        "Everyone is treated as one, so it takes a singular verb.",
        "The answer is is: \"Everyone on the bus is ready for the field trip.\""
      ],
      misconception: "A common mix-up is thinking everyone means many people, so it needs a plural verb. Everyone is treated as one."
    },
    "SK-GUM5-4-P2": {
      hints: [
        "Find the pronoun in each sentence. Then decide whether it goes with one or with more than one.",
        "Read each pronoun with its verb. Skip the words that come between them.",
        "The sentence about the cookies pairs both, which means more than one, with the verb is. Check the other choices."
      ],
      how: [
        "Find the pronoun in each sentence.",
        "Many means more than one, so it takes have. The other three each pair a pronoun with the wrong kind of verb.",
        "The answer is \"Many of the flowers have yellow petals.\""
      ],
      misconception: "A common mix-up is matching the verb to the word beside it, such as boys or cookies. Match the verb to the pronoun."
    },
    "SK-GUM5-4-P3": {
      hints: [
        "Look at the first word of each sentence. Ask whether it is treated as one or means more than one.",
        "Do one row at a time. Cover the words after the pronoun and read the pronoun with each verb.",
        "In the row that starts with Both, the pronoun means more than one. Decide about the other rows."
      ],
      how: [
        "Look at the pronouns: Everyone, Both, Each and Many.",
        "Everyone and Each are treated as one, so those rows take is.",
        "Both and Many mean more than one, so those rows take are."
      ],
      misconception: "A common mix-up is matching the verb to the word before the blank, such as shoes or apples. Match it to the pronoun."
    },
    "SK-GUM5-4-P4": {
      hints: [
        "Find the pronoun in each sentence and ask whether it goes with one or with more than one.",
        "Read the five sentences one at a time. Pick ONE.",
        "The sentence about the players pairs Each, which is treated as one, with has. Check the other four."
      ],
      how: [
        "Pair each pronoun with its verb: Each has, Both live, Everyone likes, Many flies and Somebody left.",
        "Each, Everyone and Somebody are treated as one, and Both means more than one. Left fits Somebody.",
        "Many means more than one, so flies does not match. The error is flies in \"Many of the birds flies south for the winter.\""
      ],
      misconception: "A common mix-up is thinking a verb with an s is right after a plural noun such as birds. Many needs a verb with no s."
    },
    "SK-GUM5-4-P5": {
      hints: [
        "Find the pronoun in each sentence. Ask whether it goes with one or with more than one.",
        "Pick TWO. Read each pronoun with its verb and skip the words in between.",
        "The sentence about the books pairs Many, which means more than one, with the verb is. Decide about the other four."
      ],
      how: [
        "Pair each pronoun with its verb.",
        "Both means more than one, so \"Both of the kites are stuck in the tree.\" fits. Each is treated as one, so \"Each of the kids gets a sticker.\" fits.",
        "The other three do not match: Everyone have, Many of the books is, and Both of the dogs barks."
      ],
      misconception: "A common mix-up is trusting the sentence that sounds right beside the noun. Match the verb to the pronoun."
    }
  },
  /* B8:core:end */
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
      "A clause is a group of words with a naming part and a telling part (what someone or something does or is), like \"the bell rang\" or \"the dog barked.\" Words like because, when, while, after, before, until, if and although can join two clauses into one sentence.",
      "Pick the joining word that fits the meaning. Because tells why. When, while, after and before tell about time. Until tells how long something lasts. If names something that may or may not occur. Although is for an unexpected result.",
      "A part that starts with one of these words cannot stand alone. \"Because the dog barked\" is not a complete sentence. Join it to another clause: We woke up because the dog barked."
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
      show: ["After the movie ended."],
      ask: "Is this a complete sentence? How could you fix it?",
      steps: [
        "Look at the first word. After is a joining word.",
        "A part that starts with a joining word leaves you asking, \"Then what happened?\"",
        "Add a complete idea to finish it."
      ],
      answer: "It is not complete. One fix: \"After the movie ended, we went home.\""
    },
    {
      show: ["Maya won the race. She started late.", "Maya won the race ___ she started late."],
      ask: "Which joining word fits best: because, although or when?",
      steps: [
        "Think about how the two ideas connect. Starting late makes winning harder.",
        "Winning is a surprise, so I need a word that shows a surprise.",
        "The word that fits is although."
      ],
      answer: "although: \"Maya won the race although she started late.\""
    }
  ],
  parent: "Ask your child why and when questions during the day, and have them answer in one sentence with because, when, after or if, like \"We wear coats because it is cold.\"",
  passages: [
    /* B8:passages:start */
    {
      id: "p1",
      title: "Bocce Game",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class played bocce on the grass near the library.",
          "(2) First, the coach rolled a small white ball across the lawn.",
          "(3) We waited until our teammates finished their turns.",
          "(4) Our team lost the first round although we played our best."
        ],
        [
          "(5) We wore sweaters because the morning was cold.",
          "(6) The balls slid far across the wet lawn.",
          "(7) Because the ground was wet.",
          "(8) We laughed when the balls rolled away."
        ],
        [
          "(9) We washed our hands until we ate lunch.",
          "(10) After the game ended, we shook hands with every player.",
          "(11) I hope we play again if the sun comes out.",
          "(12) I smiled when my mom picked me up."
        ]
      ]
    },
    {
      id: "p2",
      title: "Croquet Afternoon",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our family set up a croquet game in the backyard on Sunday.",
          "(2) Grandpa hammered the wickets into the grass because the ground was soft.",
          "(3) We could not start although Dad had not found the red ball.",
          "(4) My sister hit first because she was the oldest."
        ],
        [
          "(5) After we finished the first game.",
          "(6) We played another round when the sun began to set.",
          "(7) Dad kept score on a small chalkboard."
        ],
        [
          "(8) My ball rolled through the wicket although it hit a rock first.",
          "(9) We stopped playing when it got too dark to see.",
          "(10) Mom brought lemonade after we finished the last round.",
          "(11) I hope we play again if the weather stays nice."
        ]
      ]
    },
    {
      id: "p3",
      title: "Badminton Match",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our gym teacher set up a badminton match on Friday afternoon.",
          "(2) Everyone lined up along the wall.",
          "(3) The first game began when the teacher blew the whistle.",
          "(4) I held my racket tightly because the birdie moved fast."
        ],
        [
          "(5) My partner served first because she had the best aim.",
          "(6) We lost a point if the birdie hit the floor.",
          "(7) We cheered although our team scored a point.",
          "(8) Our teacher watched from a chair until the match ended.",
          "(9) I felt tired although I had eaten a big breakfast."
        ],
        [
          "(10) We shook hands after the match was over.",
          "(11) We were all happy.",
          "(12) Next week, I will pack a water bottle."
        ]
      ]
    },
    {
      id: "p4",
      title: "Ping Pong Club",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Kai joined a ping pong club at school on Monday.",
          "(2) Rosa set a bright orange ball on a long green table.",
          "(3) Kai stretched his arms while Rosa counted aloud.",
          "(4) Rosa kept serving although her arm was sore."
        ],
        [
          "(5) The club took turns because it owned only two paddles.",
          "(6) The ball bounced high off a bumpy table.",
          "(7) Until a paddle slipped.",
          "(8) Players cheered when the ball sailed over the net."
        ],
        [
          "(9) Rosa packed the paddles away although the last game ended.",
          "(10) If rain returns next week, Kai will bring his own spare paddle.",
          "(11) Everyone clapped when the winner got a prize.",
          "(12) Kai grinned while he walked to the bus."
        ]
      ]
    },
    {
      id: "p5",
      title: "Pogo Stick Contest",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) A pogo stick contest filled the street on a bright Saturday in May.",
          "(2) Neighbors drew a chalk line because jumpers needed a place to begin.",
          "(3) Dana stopped jumping although she was tired.",
          "(4) Her brother went next when she passed him the stick."
        ],
        [
          "(5) Before the second round started.",
          "(6) Everybody drank cold water while judges counted jumps.",
          "(7) A tall judge wrote scores on a clipboard."
        ],
        [
          "(8) One small boy won although he fell twice.",
          "(9) When the final jump ended, fans clapped loudly.",
          "(10) Dana's mom brought juice after the last winner got a medal.",
          "(11) Neighbors hope to jump again if the weather stays dry."
        ]
      ]
    },
    {
      id: "p6",
      title: "Cheerleading Practice",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) A squad practiced a new cheer in the gym on Thursday.",
          "(2) Everyone stood in two long straight rows.",
          "(3) The coach started music when Tia found her spot.",
          "(4) Tia waved pom-poms high because the music was loud."
        ],
        [
          "(5) Captain Pam counted aloud because the cheer had many steps.",
          "(6) Squad members started over if someone dropped a pom-pom.",
          "(7) Tia felt proud although she learned the whole cheer.",
          "(8) The coach waited until the music stopped.",
          "(9) Feet hurt although everyone smiled the whole time."
        ],
        [
          "(10) Squad members stretched before practice began.",
          "(11) Tia felt tired but very proud.",
          "(12) Next week, the squad will wear matching red shirts."
        ]
      ]
    }
    /* B8:passages:end */
  ],
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
          { ref: "SK-GUM5-5-P3" },
          { ref: "SK-GUM5-5-P4" },
          {
            id: "SK-GUM5-5-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: [],
            prompt: "The rain began at noon and stopped at one. Jo's team sat on the bench from noon to one. Choose the words that finish Jo's sentence.",
            text: "Jo's team rested on the bench {0}.",
            slots: [
              {
                options: ["until the rain stopped", "because the rain stopped", "if the rain stopped"],
                answer: 0
              }
            ],
            clue: "Ask how the resting and the rain are connected.",
            hints: [
              "Ask how the resting and the rain are connected.",
              "Say each choice after the bench. Ask which one makes sense for the whole sentence.",
              "One choice gives a reason, but the story says the rain ended when the resting did. Decide between the other two."
            ],
            how: [
              "Read the story. The rain and the resting both lasted from noon to one.",
              "A joining word that tells how long something lasts is until.",
              "The answer is until the rain stopped."
            ],
            misconception: "A common mix-up is picking the choice that gives a reason. The rain stopping is the time the resting lasted up to, not the reason for it.",
            why: "The answer is until the rain stopped. The team rested up to the time the rain ended. One choice gives a reason, and the other sets up a case that may not happen."
          },
          {
            id: "SK-GUM5-5-C04",
            type: "mc",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: ["p1"],
            prompt: "Which sentence from the draft uses a joining word to tell why?",
            choices: [
              { text: "Our team lost the first round although we played our best." },
              { text: "We laughed when the balls rolled away." },
              { text: "We wore sweaters because the morning was cold.", correct: true },
              { text: "I hope we play again if the sun comes out." }
            ],
            clue: "A joining word that tells why gives a reason. Look for the reason in each sentence.",
            hints: [
              "A joining word that tells why gives a reason. Look for the reason in each sentence.",
              "Read each choice and ask what its second part gives: a reason, a time, a surprise or a case that may happen.",
              "The sentence about the sun sets up a case that may happen, which is not a reason. Check the other choices."
            ],
            how: [
              "Look at the joining word in each choice.",
              "The cold morning is the reason the players wore sweaters, so that sentence tells why.",
              "The answer is \"We wore sweaters because the morning was cold.\""
            ],
            misconception: "A common mix-up is picking the sentence with a joining word that shows a surprise. A reason answers the question why.",
            why: "The answer is \"We wore sweaters because the morning was cold.\" The cold morning is the reason for the sweaters. One sentence shows a surprise, one tells a time, and one sets up a case that may happen."
          },
          {
            id: "SK-GUM5-5-C05",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Which sentence in paragraph 3 of the draft has a joining word that makes its ideas clash?",
              choices: [
                { text: "After the game ended, we shook hands with every player." },
                { text: "We washed our hands until we ate lunch.", correct: true },
                { text: "I hope we play again if the sun comes out." },
                { text: "I smiled when my mom picked me up." }
              ]
            },
            partB: {
              prompt: "Which statement explains why the sentence in Part A needs a different joining word?",
              choices: [
                { text: "Until means the same thing as because, so the writer should choose because to tell why." },
                { text: "A joining word may be used only at the start of a sentence, so until cannot sit in the middle of one." },
                {
                  text: "Washing comes first and eating comes next, so the joining word needs to tell which happens first.",
                  correct: true
                },
                { text: "The sentence is fine as written, because any joining word can tell when something happens." }
              ]
            },
            clue: "Read each sentence in paragraph 3. Ask whether its joining word fits the two ideas.",
            hints: [
              "Read each sentence in paragraph 3. Ask whether its joining word fits the two ideas.",
              "Say what each joining word shows, then check it against the order of the ideas.",
              "The sentence with After already tells a time that makes sense. Check the other three."
            ],
            how: [
              "Part A: read each sentence in paragraph 3 and check its joining word.",
              "In \"We washed our hands until we ate lunch.\" the washing does not go on up to lunch. It comes first.",
              "Part A answer: We washed our hands until we ate lunch.",
              "Part B answer: \"Washing comes first and eating comes next, so the joining word needs to tell which happens first.\""
            ],
            misconception: "A common mix-up is thinking any word that joins two ideas will work. The joining word has to match how the ideas connect.",
            why: "Part A: We washed our hands until we ate lunch. Part B: \"Washing comes first and eating comes next, so the joining word needs to tell which happens first.\" The sentence should say before, not until. The other sentences use joining words that fit."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM5-5-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: ["p2"],
            prompt: "Look at sentences 2 through 6 of the draft. Select the TWO sentences that are not written correctly.",
            targets: ["p2:1:2", "p2:1:3", "p2:1:4", "p2:2:1", "p2:2:2"],
            answer: ["p2:1:3", "p2:2:1"],
            pick: 2,
            clue: "Check each sentence. Ask whether it is a whole sentence and whether its joining word fits the ideas.",
            hints: [
              "Check each sentence. Ask whether it is a whole sentence and whether its joining word fits the ideas.",
              "Read the five sentences one at a time. Pick TWO.",
              "In sentence 4, the joining word gives a reason that fits. Check the other four."
            ],
            how: [
              "Check each sentence for a whole idea and a joining word that fits.",
              "In sentence 3, not finding the ball is the reason they could not start, so although does not fit. The sentence should say because.",
              "In sentence 5, \"After we finished the first game.\" has a joining word but no second idea, so it cannot stand alone.",
              "Sentences 2, 4 and 6 are already written correctly."
            ],
            misconception: "A common mix-up is picking only the sentence that sounds strange. One mistake is a joining word that does not fit, and the other is a group of words that is not finished.",
            why: "The answers are sentence 3 and sentence 5. In sentence 3, although does not fit, and the sentence should say because. In sentence 5, \"After we finished the first game.\" is not a complete sentence. Sentences 2, 4 and 6 are written correctly."
          },
          {
            id: "SK-GUM5-5-C07",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: [],
            prompt: "Choose the TWO groups of words that are complete sentences.",
            pick: 2,
            choices: [
              { text: "Although the bus was late." },
              { text: "We cleaned the room before Grandma arrived.", correct: true },
              { text: "Because the snow kept falling all night." },
              { text: "Until the rain stopped on Friday." },
              { text: "If it snows, we will build a snowman.", correct: true }
            ],
            clue: "Check each group of words. Does it give a whole idea, or does it leave you waiting for more?",
            hints: [
              "Check each group of words. Does it give a whole idea, or does it leave you waiting for more?",
              "Pick TWO. Look at how each group begins and whether another idea comes with it.",
              "The group about the bus begins with a joining word and stops before the idea is finished. Decide about the other four."
            ],
            how: [
              "Check each group for a joining word and a second idea.",
              "\"We cleaned the room before Grandma arrived.\" joins two ideas, so it is complete.",
              "\"If it snows, we will build a snowman.\" has a second idea after the comma, so it is complete.",
              "The other three begin with until, although or because and stop before the idea is finished."
            ],
            misconception: "A common mix-up is thinking any group of words with a joining word is a sentence. A joining word needs a second idea to go with it.",
            why: "The answers are \"We cleaned the room before Grandma arrived.\" and \"If it snows, we will build a snowman.\" Each one joins two ideas. The others begin with until, although or because and stop before the idea is finished."
          },
          {
            id: "SK-GUM5-5-C08",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: [],
            prompt: "Each sentence uses a joining word. Does it show a surprise or set up a case that may happen?",
            cols: ["A surprise", "A case that may happen"],
            rows: [
              { text: "The kite flew although the wind was weak.", answer: 0 },
              { text: "The kite will fly if the wind picks up.", answer: 1 },
              { text: "Nan sang although she had a cold.", answer: 0 },
              { text: "Nan will sing if she feels better.", answer: 1 }
            ],
            clue: "Find the joining word in each sentence. Ask what it shows.",
            hints: [
              "Find the joining word in each sentence. Ask what it shows.",
              "Do one row at a time. Say the sentence with each label and see which one fits.",
              "In the row about the cold, the singing is a surprise. Decide about the other rows."
            ],
            how: [
              "Look at the joining word in each row: although, if, although and if.",
              "Although shows a surprise, since the kite flew in weak wind and Nan sang with a cold.",
              "If sets up a case that may happen: the wind may pick up, or Nan may feel better."
            ],
            misconception: "A common mix-up is treating every joining word as a reason. One shows a surprise, and the other sets up a case.",
            why: "The kite flew although the wind was weak, and Nan sang although she had a cold, are surprises. The kite will fly if the wind picks up, and Nan will sing if she feels better, are cases that may happen."
          },
          {
            id: "SK-GUM5-5-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: ["p2"],
            prompt: "In the draft, sentence 8 uses although and sentence 10 uses after. Why does the writer use a different joining word in each?",
            choices: [
              {
                text: "Although shows a surprise, since the ball rolled through the wicket anyway, and after tells when the lemonade came.",
                correct: true
              },
              {
                text: "The two joining words mean the same thing, so the writer could swap them with no change in the meaning of either sentence at all."
              },
              { text: "Sentence 10 is wrong, because after may be used only at the start of a sentence and never in the middle." },
              { text: "Sentence 8 is wrong, because although is used only when the second idea gives the reason for the first." }
            ],
            clue: "Ask what each joining word does. Think about reasons, times, unexpected results and possible cases.",
            hints: [
              "Ask what each joining word does. Think about reasons, times, unexpected results and possible cases.",
              "Reread sentence 8 and sentence 10 side by side. Look at how the second idea connects to the first in each.",
              "Sentence 10 is not a mistake, so the answer cannot say that it is wrong. Check the other choices."
            ],
            how: [
              "Read sentence 8: the ball rolled through even though it hit a rock, so although shows a surprise.",
              "Read sentence 10: the lemonade came once the last round was finished, so after tells when.",
              "The answer is \"Although shows a surprise, since the ball rolled through the wicket anyway, and after tells when the lemonade came.\""
            ],
            misconception: "A common mix-up is thinking all joining words do the same job. Each one shows a different connection between ideas.",
            why: "The answer is \"Although shows a surprise, since the ball rolled through the wicket anyway, and after tells when the lemonade came.\" Each joining word shows a different connection, so both sentences are correct."
          },
          {
            id: "SK-GUM5-5-C10",
            type: "dropdown",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: [],
            prompt: "Pick the best ending.",
            text: "The kitten crept behind the couch {0}.",
            slots: [
              {
                options: ["because the thunder was loud", "although the thunder was loud", "until the thunder was loud"],
                answer: 0
              }
            ],
            clue: "Ask how the creeping and the thunder are connected.",
            hints: [
              "Ask how the creeping and the thunder are connected.",
              "Try each choice after couch. Say the whole sentence.",
              "Hiding is not a surprise when thunder is loud, so one choice cannot be right. Check the other two."
            ],
            how: [
              "Read the sentence. The loud thunder is the reason the kitten crept behind the couch.",
              "A joining word that gives a reason is because.",
              "The answer is because the thunder was loud."
            ],
            misconception: "A common mix-up is picking the choice about time. The loud thunder tells why the kitten crept away, not how long.",
            why: "The answer is because the thunder was loud. The thunder is the reason the kitten crept behind the couch. One choice shows a surprise, and one tells how long something lasts."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM5-5-C11",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: ["p3"],
            prompt: "Look at sentences 5 through 9 of the draft. Select the sentence whose joining word clashes with the ideas around it.",
            targets: ["p3:2:1", "p3:2:2", "p3:2:3", "p3:2:4", "p3:2:5"],
            answer: ["p3:2:3"],
            pick: 1,
            clue: "Find the joining word in each sentence. Ask whether it matches how the two ideas connect.",
            hints: [
              "Find the joining word in each sentence. Ask whether it matches how the two ideas connect.",
              "Read the five sentences one at a time. Pick ONE.",
              "In sentence 8, the joining word tells how long the teacher watched, which makes sense. Check the other four."
            ],
            how: [
              "Find the joining word in each sentence and check how the ideas connect.",
              "Sentence 5 gives a reason, sentence 6 sets up a case, sentence 8 tells how long, and sentence 9 shows a surprise.",
              "In sentence 7, cheering for your own team's point is not a surprise, so although does not fit."
            ],
            misconception: "A common mix-up is picking the sentence that sounds longest. Check whether each joining word matches the connection.",
            why: "The answer is sentence 7, \"We cheered although our team scored a point.\" Cheering for your own team's point is not a surprise, so although does not fit. Sentences 5, 6, 8 and 9 each use a joining word that fits."
          },
          {
            id: "SK-GUM5-5-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: [],
            prompt: "Nia set the table at eleven, and her guests came at noon. Pick the words that start her next sentence.",
            text: "{0}, Nia set the table.",
            slots: [
              {
                options: ["Before the guests came", "After the guests came", "Although the guests came"],
                answer: 0
              }
            ],
            clue: "Look at the times in the story. Ask which thing came first.",
            hints: [
              "Look at the times in the story. Ask which thing came first.",
              "Say each choice at the start of the sentence. Check it against the times.",
              "The choice with although would need a surprise, and none happens here. Compare the other two with the times."
            ],
            how: [
              "Read the times. Nia set the table at eleven, and the guests came at noon, so the setting came first.",
              "A joining word that tells what comes first is before.",
              "The answer is Before the guests came."
            ],
            misconception: "A common mix-up is picking a time word without checking the order. The table was set first, so the word has to match that order.",
            why: "The answer is Before the guests came. Nia set the table at eleven, and the guests came at noon. One choice shows a surprise, and one puts the guests first."
          },
          {
            id: "SK-GUM5-5-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: [],
            prompt: "Pat says, \"Every piece that starts with because is a whole sentence.\" Choose the TWO groups of words that show Pat is wrong.",
            pick: 2,
            choices: [
              { text: "Because we ran too slowly.", correct: true },
              { text: "We stayed in because it rained." },
              { text: "Because the line was long.", correct: true },
              { text: "Because it rained, we stayed in." },
              { text: "Because the lake was frozen, the trip was canceled." }
            ],
            clue: "Pat says each piece that starts with because is whole. Look for groups that begin with because and still leave you waiting.",
            hints: [
              "Pat says each piece that starts with because is whole. Look for groups that begin with because and still leave you waiting.",
              "Pick TWO. Check whether a second idea comes with each group.",
              "In the group about the lake, a second idea follows the comma. Decide about the other four."
            ],
            how: [
              "Look for groups of words that begin with because and are not finished.",
              "\"Because the line was long.\" and \"Because we ran too slowly.\" give a reason but no second idea, so Pat is wrong about them.",
              "The other three each have a second idea, so they do not show Pat is wrong."
            ],
            misconception: "A common mix-up is choosing the groups that have because in the middle. Pat is only wrong about groups that begin with because and stop.",
            why: "The answers are \"Because the line was long.\" and \"Because we ran too slowly.\" Each begins with because but has no second idea, so it is not a complete sentence. The other three are complete."
          },
          {
            id: "SK-GUM5-5-C14",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: [],
            prompt: "Mara stood outside for an hour, and the bus arrived at eight. Pick what belongs in each blank.",
            text: "Mara rubbed her hands {0}, and she stayed on the porch {1}.",
            slots: [
              {
                options: ["because the air was chilly", "although the air was chilly", "until the air was chilly"],
                answer: 0
              },
              {
                options: ["until the bus arrived", "because the bus arrived", "if the bus arrived"],
                answer: 0
              }
            ],
            clue: "Read the whole sentence. Ask how each blank connects its two ideas.",
            hints: [
              "Read the whole sentence. Ask how each blank connects its two ideas.",
              "Fill one blank at a time. Say each choice and see whether it makes sense.",
              "In the first blank, one choice says the rubbing lasted up to a time, which does not fit. Decide about the other choices."
            ],
            how: [
              "The first blank: the chilly air is the reason she rubbed her hands, so because gives a reason.",
              "The second blank: she stood outside for an hour until the bus arrived, so until tells how long.",
              "The answers are because the air was chilly and until the bus arrived."
            ],
            misconception: "A common mix-up is using one kind of joining word in both blanks. The first blank gives a reason, and the second tells how long.",
            why: "The answers are because the air was chilly and until the bus arrived. The chilly air is why she rubbed her hands, and she stayed on the porch up to the time the bus arrived."
          },
          {
            id: "SK-GUM5-5-C15",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
            ],
            passages: [],
            prompt: "Ravi wrote, \"The team won although it practiced every day.\" He says although is right, because the sentence tells about practice. Is Ravi right?",
            choices: [
              { text: "Yes. Although is right, because it joins the idea about practice to the idea about winning." },
              { text: "Yes. Although can join any two ideas, so no word in this sentence needs to change." },
              { text: "No. Practice tells when the team won, so the sentence needs until, not although." },
              { text: "No. Practice is the reason the team won, so the sentence needs because, not although.", correct: true }
            ],
            clue: "Ask how practicing every day and winning are connected.",
            hints: [
              "Ask how practicing every day and winning are connected.",
              "Think about what although shows. Then ask whether winning is a surprise after practice.",
              "The word until tells how long something lasts. Ask whether that fits here, then check the other choices."
            ],
            how: [
              "Think about the two ideas: the team practiced every day, and the team won.",
              "Practice is the reason for winning, and although shows a surprise, so although does not fit.",
              "The answer is \"No. Practice is the reason the team won, so the sentence needs because, not although.\""
            ],
            misconception: "A common mix-up is thinking any joining word works when two ideas belong together. The word must show the right connection.",
            why: "The answer is \"No. Practice is the reason the team won, so the sentence needs because, not although.\" Ravi should write because. Although shows a surprise, and winning is not a surprise after practice."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM5-5-S01",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: [],
      prompt: "Which one is only a piece of a sentence?",
      options: [
        "Dad grilled corn on Friday.",
        "When the lights came back on.",
        "Maya painted a blue door.",
        "Nan reads aloud while it rains.",
        "If Ben calls, the club meets at noon."
      ],
      answer: [1],
      pick: 1,
      clue: "Look for the piece that starts with a joining word and leaves you waiting for more.",
      hints: [
        "Look for the piece that starts with a joining word and leaves you waiting for more.",
        "Read all five, one at a time. Pick ONE.",
        "The one about the blue door gives a whole idea with no joining word. Check the other four."
      ],
      how: [
        "Check each group of words for a whole idea.",
        "\"Nan reads aloud while it rains.\" and \"If Ben calls, the club meets at noon.\" each join two ideas, so they are complete.",
        "\"When the lights came back on.\" has a joining word but no second idea, so it cannot stand alone."
      ],
      misconception: "A common mix-up is choosing a group just because it has a joining word. A joining word is fine when a second idea goes with it.",
      why: "The answer is \"When the lights came back on.\" It begins with a joining word but has no second idea. It could say, \"As soon as the lights came back on, we played cards.\"",
      like: ["SK-GUM5-5-P3"]
    },
    {
      id: "SK-GUM5-5-S02",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: [],
      prompt: "What job does each joining word do?",
      cols: ["Time", "A surprise"],
      rows: [
        { text: "Rita hummed while dishes needed washing.", answer: 0 },
        { text: "Rita hummed although her throat hurt.", answer: 1 },
        { text: "Omar rested after the race was over.", answer: 0 },
        { text: "Omar ran although the shoe was loose.", answer: 1 }
      ],
      clue: "Spot the joining word in every line. Ask what job it does.",
      hints: [
        "Spot the joining word in every line. Ask what job it does.",
        "Take one line at a time. Try each label and see which one fits.",
        "In the line about the loose shoe, the running is unexpected. Decide about the other lines."
      ],
      how: [
        "Look at the joining word in each row: while, although, after and although.",
        "While and after tell about time: Rita hummed during the dishwashing, and Omar rested when the race was over.",
        "Although shows a surprise: Rita's throat hurt and the shoe was loose, yet each kept going."
      ],
      misconception: "A common mix-up is thinking every joining word is about time. Some of them show a surprise.",
      why: "Rita hummed while dishes needed washing, and Omar rested when the race was over, are about time. Rita hummed although her throat hurt, and Omar ran although the shoe was loose, show a surprise.",
      like: ["SK-GUM5-5-P4"]
    },
    {
      id: "SK-GUM5-5-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: [],
      prompt: "Tess began jogging in full daylight. Dark fell much later. Pick the ending that fits.",
      text: "Tess jogged around the track {0}.",
      slots: [
        {
          options: ["until dark fell", "because dark fell", "if dark fell"],
          answer: 0
        }
      ],
      clue: "Ask how the jogging and the dark are connected.",
      hints: [
        "Ask how the jogging and the dark are connected.",
        "Say each choice after track. Ask which one makes sense.",
        "One choice sets up a case that may not happen, but dark did fall. Decide between the other two."
      ],
      how: [
        "Read the sentence. Tess jogged, and dark fell.",
        "A joining word that tells how long something lasts is until.",
        "The answer is until dark fell."
      ],
      misconception: "A common mix-up is picking the choice that sets up a case that may not happen. Dark did fall.",
      why: "The answer is until dark fell. Tess jogged up to the time dark came. One choice gives a reason, and one sets up a case that may not happen.",
      like: ["SK-GUM5-5-C03"]
    },
    {
      id: "SK-GUM5-5-S04",
      type: "mc",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: ["p4"],
      prompt: "Pick the line that joins two ideas to show something unexpected.",
      choices: [
        { text: "Rosa kept serving although her arm was sore.", correct: true },
        { text: "The club took turns because it owned only two paddles." },
        { text: "Players cheered when the ball sailed over the net." },
        { text: "If rain returns next week, Kai will bring his own spare paddle." }
      ],
      clue: "Something unexpected joins two ideas that do not seem to go together.",
      hints: [
        "Something unexpected joins two ideas that do not seem to go together.",
        "Ask what each second part does: it might give a reason, name a time, show a surprise or set up a case.",
        "The line about next week sets up a case that may happen, which is not unexpected. Check the other choices."
      ],
      how: [
        "Look at the joining word in each choice.",
        "A sore arm would make serving harder, so serving anyway is unexpected.",
        "The answer is \"Rosa kept serving although her arm was sore.\""
      ],
      misconception: "A common mix-up is picking the line with because. A reason explains why, and a surprise shows something unexpected.",
      why: "The answer is \"Rosa kept serving although her arm was sore.\" Serving with a sore arm is unexpected. One line gives a reason, one tells a time, and one sets up a case that may happen.",
      like: ["SK-GUM5-5-C04"]
    },
    {
      id: "SK-GUM5-5-S05",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: ["p4"],
      prompt: "Do Part A, then Part B.",
      partA: {
        prompt: "Find the one line from 9 to 12 whose joining word does not suit it.",
        choices: [
          { text: "If rain returns next week, Kai will bring his own spare paddle." },
          { text: "Everyone clapped when the winner got a prize." },
          { text: "Kai grinned while he walked to the bus." },
          { text: "Rosa packed the paddles away although the last game ended.", correct: true }
        ]
      },
      partB: {
        prompt: "Pick the reason the line needs another word.",
        choices: [
          { text: "Packing follows game ends, so it needs a time word.", correct: true },
          { text: "Although has to start a line, so it cannot sit inside one." },
          { text: "Although works only for ideas that agree." },
          { text: "Any joining word works here, so no change is needed." }
        ]
      },
      clue: "Read lines 9 to 12 one at a time. Ask whether its joining word fits the two ideas.",
      hints: [
        "Read lines 9 to 12 one at a time. Ask whether its joining word fits the two ideas.",
        "Say what each joining word shows, then check it against the ideas.",
        "The line with If already sets up a case that makes sense. Check the other three."
      ],
      how: [
        "Part A: read lines 9 to 12 and check its joining word.",
        "In \"Rosa packed the paddles away although the last game ended.\" packing is not a surprise. It comes when the game ends.",
        "Part A answer: Rosa packed the paddles away although the last game ended.",
        "Part B answer: \"Packing follows game ends, so it needs a time word.\""
      ],
      misconception: "A common mix-up is thinking any word that links two ideas will work. The word has to match how the ideas connect.",
      why: "Part A: Rosa packed the paddles away although the last game ended. Part B: \"Packing follows game ends, so it needs a time word.\" The line should say after, not although. The other lines use joining words that fit.",
      like: ["SK-GUM5-5-C05"]
    },
    {
      id: "SK-GUM5-5-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: ["p5"],
      prompt: "Lines 2 to 6 hide two problems. Mark both lines that have one.",
      targets: ["p5:1:2", "p5:1:3", "p5:1:4", "p5:2:1", "p5:2:2"],
      answer: ["p5:1:3", "p5:2:1"],
      pick: 2,
      clue: "Read every line. Does it hold a whole idea, and does its joining word suit the ideas?",
      hints: [
        "Read every line. Does it hold a whole idea, and does its joining word suit the ideas?",
        "Go through the five lines one by one. Pick TWO.",
        "In line 6, the joining word tells two things happened together, which fits. Check the other four."
      ],
      how: [
        "Check each line for a whole idea and a joining word that fits.",
        "In line 3, being tired is the reason Dana stopped, so although does not fit. The line should say because.",
        "In line 5, \"Before the second round started.\" has a joining word but no second idea, so it cannot stand alone.",
        "Lines 2, 4 and 6 are already written correctly."
      ],
      misconception: "A common mix-up is marking only the line that sounds odd. One mistake is a joining word that does not fit, and the other is a group of words that is not finished.",
      why: "The answers are line 3 and line 5. In line 3, although does not fit, and the line should say because. In line 5, \"Before the second round started.\" is not a complete sentence. Lines 2, 4 and 6 are written correctly.",
      like: ["SK-GUM5-5-C06"]
    },
    {
      id: "SK-GUM5-5-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: [],
      prompt: "Pick TWO lines that stand alone.",
      pick: 2,
      choices: [
        { text: "While soup bubbled." },
        { text: "If the old roof was fixed by Friday." },
        { text: "Dad cooked dinner while we set the table.", correct: true },
        { text: "When it rained." },
        { text: "After the show ended, we clapped.", correct: true }
      ],
      clue: "Look at each line. Does it hold a whole idea, or does it stop too soon?",
      hints: [
        "Look at each line. Does it hold a whole idea, or does it stop too soon?",
        "Pick TWO. Check how each line begins and whether a second idea joins it.",
        "The line about the soup starts with a joining word and stops before the idea is done. Decide about the other four."
      ],
      how: [
        "Check each line for a joining word and a second idea.",
        "\"Dad cooked dinner while we set the table.\" joins two ideas, so it is complete.",
        "\"After the show ended, we clapped.\" has a second idea after the comma, so it is complete.",
        "The other three begin with while, when or if and stop before the idea is done."
      ],
      misconception: "A common mix-up is trusting any line that has a joining word. A joining word needs a second idea to go with it.",
      why: "The answers are \"Dad cooked dinner while we set the table.\" and \"After the show ended, we clapped.\" Each one joins two ideas. The others begin with while, when or if and stop before the idea is done.",
      like: ["SK-GUM5-5-C07"]
    },
    {
      id: "SK-GUM5-5-S08",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: [],
      prompt: "What does each joining word tell?",
      cols: ["Tells how long", "Gives a reason"],
      rows: [
        { text: "Noor sang until her voice cracked.", answer: 0 },
        { text: "Noor sang because her friend asked.", answer: 1 },
        { text: "Theo hiked until dusk fell.", answer: 0 },
        { text: "Theo hiked because his legs felt strong.", answer: 1 }
      ],
      clue: "Spot the joining word in every line. Ask what it tells.",
      hints: [
        "Spot the joining word in every line. Ask what it tells.",
        "Take one line at a time. Try each label and see which one fits.",
        "In the line about the friend asking, the singing has a reason. Decide about the other lines."
      ],
      how: [
        "Look at the joining word in each row: until, because, until and because.",
        "Until tells how long: Noor sang up to the moment her voice cracked, and Theo hiked up to the moment dusk fell.",
        "Because gives a reason: her friend asked, and his legs felt strong."
      ],
      misconception: "A common mix-up is thinking every joining word tells how long. Some of them give a reason.",
      why: "Noor sang until her voice cracked, and Theo hiked until dusk fell, tell how long. Noor sang because her friend asked, and Theo hiked because his legs felt strong, give a reason.",
      like: ["SK-GUM5-5-C08"]
    },
    {
      id: "SK-GUM5-5-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: ["p5"],
      prompt: "Compare lines 10 and 11. What is different about after and if?",
      choices: [
        { text: "They do the same job, so either word works in either line without any change." },
        { text: "After sets a time, and if sets a case that may happen.", correct: true },
        { text: "Line 10 needs fixing, because after cannot join two ideas in one line." },
        { text: "Line 11 needs fixing, because if must follow an event that is already finished." }
      ],
      clue: "Ask what each joining word does. Think about reasons, surprises and possible cases.",
      hints: [
        "Ask what each joining word does. Think about reasons, surprises and possible cases.",
        "Reread line 10 and line 11 side by side. Look at how the second idea connects to the first.",
        "Line 10 is not a mistake, so the answer cannot say that it needs fixing. Check the other choices."
      ],
      how: [
        "Read line 10: the juice came when the last winner got a medal, so after sets a time.",
        "Read line 11: more jumping depends on dry weather, so if sets a case that may happen.",
        "The answer is \"After sets a time, and if sets a case that may happen.\""
      ],
      misconception: "A common mix-up is thinking all joining words do the same job. Each one shows a different connection.",
      why: "The answer is \"After sets a time, and if sets a case that may happen.\" Each joining word shows a different connection, so both lines are correct.",
      like: ["SK-GUM5-5-C09"]
    },
    {
      id: "SK-GUM5-5-S10",
      type: "dropdown",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: [],
      prompt: "Complete the line.",
      text: "Gus pulled mittens over his hands {0}.",
      slots: [
        {
          options: ["when frost formed", "although frost formed", "until frost formed"],
          answer: 0
        }
      ],
      clue: "Ask how the mittens and the frost are connected.",
      hints: [
        "Ask how the mittens and the frost are connected.",
        "Say each choice after mittens. Ask which one makes sense.",
        "Pulling on mittens in frost is not a surprise, so one choice cannot be right. Check the other two."
      ],
      how: [
        "Read the line. Gus pulled mittens on at the time frost formed.",
        "A joining word that tells when something happened is when.",
        "The answer is when frost formed."
      ],
      misconception: "A common mix-up is picking until because the line is about time. Until tells how long something lasts, but the mittens went on at one moment.",
      why: "The answer is when frost formed. The mittens went on at the time frost formed. One choice shows a surprise, and one tells how long something lasts.",
      like: ["SK-GUM5-5-C10"]
    },
    {
      id: "SK-GUM5-5-S11",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: ["p6"],
      prompt: "Read lines five to nine. Which line has a joining word that seems wrong?",
      targets: ["p6:2:1", "p6:2:2", "p6:2:3", "p6:2:4", "p6:2:5"],
      answer: ["p6:2:3"],
      pick: 1,
      clue: "Spot the joining word in each line. Does it fit how its two ideas relate?",
      hints: [
        "Spot the joining word in each line. Does it fit how its two ideas relate?",
        "Go through the five lines one by one. Pick ONE.",
        "Line 8 tells how long the coach waited, and its joining word fits. Check the other four."
      ],
      how: [
        "Spot each line's joining word and test it against its ideas.",
        "Line 5 gives a reason, line 6 sets up a case, line 8 tells how long, and line 9 shows a surprise.",
        "In line 7, learning the cheer is not a surprise, so although does not fit."
      ],
      misconception: "A common mix-up is picking the line that sounds longest. Check whether each joining word matches the connection.",
      why: "The answer is line 7, \"Tia felt proud although she learned the whole cheer.\" Learning the cheer is not a surprise, so although does not fit. Lines 5, 6, 8 and 9 each use a joining word that fits.",
      like: ["SK-GUM5-5-C11"]
    },
    {
      id: "SK-GUM5-5-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: [],
      prompt: "Mia reached the corner early. The bus left later. Choose how the line should close.",
      text: "Mia reached the corner {0}.",
      slots: [
        {
          options: ["before the bus left", "after the bus left", "although the bus left"],
          answer: 0
        }
      ],
      clue: "Compare when each thing happened. Which came first?",
      hints: [
        "Compare when each thing happened. Which came first?",
        "Try each choice after corner and test it against the story.",
        "The choice with although would show a surprise, and nothing surprising happens. Weigh the other two against the story."
      ],
      how: [
        "Read the story. Mia reached the corner early, and the bus left later, so she came first.",
        "A joining word that tells what comes first is before.",
        "The answer is before the bus left."
      ],
      misconception: "A common mix-up is picking a time word without checking the order. Mia came first, so the word has to match that order.",
      why: "The answer is before the bus left. Mia reached the corner early, and the bus left later. One choice shows a surprise, and one puts the bus first.",
      like: ["SK-GUM5-5-C12"]
    },
    {
      id: "SK-GUM5-5-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: [],
      prompt: "Lena claims no line with although inside can be a whole sentence. Pick the TWO lines that prove her wrong.",
      pick: 2,
      choices: [
        { text: "Our team won although the field was muddy.", correct: true },
        { text: "Although it was very late." },
        { text: "Although it was late, I felt awake.", correct: true },
        { text: "Although the ice was thin near the shore." },
        { text: "Although the music was loud." }
      ],
      clue: "Lena says no line with although is ever a whole sentence. Look for lines with although that give a whole idea.",
      hints: [
        "Lena says no line with although is ever a whole sentence. Look for lines with although that give a whole idea.",
        "Pick TWO. Check whether each line is finished or leaves you waiting.",
        "The line about thin ice stops before the idea is finished. Decide about the other four."
      ],
      how: [
        "Look for lines with although that are finished.",
        "\"Our team won although the field was muddy.\" and \"Although it was late, I felt awake.\" each hold two ideas, so Lena is wrong about them.",
        "The other three stop after the although part, so they do not prove Lena wrong."
      ],
      misconception: "A common mix-up is choosing the lines that stop too soon. Lena is wrong about lines with although that are finished.",
      why: "The answers are \"Our team won although the field was muddy.\" and \"Although it was late, I felt awake.\" Each holds two ideas, so each is a complete sentence. The other three stop before the idea is finished.",
      like: ["SK-GUM5-5-C13"]
    },
    {
      id: "SK-GUM5-5-S14",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: [],
      prompt: "Omar sat down at four. Dad came at five. Fill both blanks.",
      text: "{0}, Omar zipped his jacket, and he sat on the step {1}.",
      slots: [
        {
          options: ["Because gusts blew", "Although gusts blew", "Until gusts blew"],
          answer: 0
        },
        {
          options: ["until Dad came", "because Dad came", "if Dad came"],
          answer: 0
        }
      ],
      clue: "Think about what each blank must tell about its two ideas.",
      hints: [
        "Think about what each blank must tell about its two ideas.",
        "Take the blanks one by one and test each choice aloud.",
        "In the second blank, one choice sets up a case that may not happen, but Dad did come. Decide about the other choices."
      ],
      how: [
        "The first blank: the wind is the reason he zipped his jacket, so Because gives a reason.",
        "The second blank: he sat for an hour until Dad came, so until tells how long.",
        "The answers are Because gusts blew and until Dad came."
      ],
      misconception: "A common mix-up is using one kind of joining word in both blanks. The first blank gives a reason, and the second tells how long.",
      why: "The answers are Because gusts blew and until Dad came. The wind is why he zipped his jacket, and he sat on the step up to the time Dad came.",
      like: ["SK-GUM5-5-C14"]
    },
    {
      id: "SK-GUM5-5-S15",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses"
      ],
      passages: [],
      prompt: "Mia swaps one word. \"We waited until the bell rang\" turns into \"We waited when the bell rang.\" Does the meaning stay put?",
      choices: [
        { text: "Yes. Both words are about time, so the meaning stays put after any swap." },
        { text: "Yes. Mia kept every other word the same, so nothing about the waiting changed." },
        { text: "No. Until stretches the waiting up to the bell, but when names a single moment.", correct: true },
        { text: "No. The new line cannot stand alone, so the swap leaves only a piece of a sentence." }
      ],
      clue: "Say both lines aloud, one after the other.",
      hints: [
        "Say both lines aloud, one after the other.",
        "Ask whether the two lines tell the same thing about the waiting.",
        "The new line has a joining word and two ideas, so it is whole. Check the other choices."
      ],
      how: [
        "Read both lines. The first says the waiting went on up to the bell.",
        "The second sounds like the waiting happened at a single moment, so the meaning changes.",
        "The answer is \"No. Until stretches the waiting up to the bell, but when names a single moment.\""
      ],
      misconception: "A common mix-up is thinking two words about time are the same. Each one shows a different link between the ideas.",
      why: "The answer is \"No. Until stretches the waiting up to the bell, but when names a single moment.\" Mia's swap shows that the two words are not the same.",
      like: ["SK-GUM5-5-C15"]
    }
  ],
  addons: {
    "SK-GUM5-5-P1": {
      hints: [
        "Ask how the clouds and not seeing the stars are connected.",
        "Say each choice in the blank. Ask which one makes sense for the two ideas.",
        "The word before would make the clouds happen earlier than the stars. Check the other two."
      ],
      how: [
        "Read the sentence. The sky was full of clouds, and we could not see the stars.",
        "The clouds are the reason, and a joining word that gives a reason is because.",
        "The answer is because."
      ],
      misconception: "A common mix-up is picking the choice that shows a surprise because the stars were hidden. A reason answers why."
    },
    "SK-GUM5-5-P2": {
      hints: [
        "Ask about the time Mia feeds the cat.",
        "Try each word in the blank. Ask which one fits both ideas.",
        "The word although shows a surprise, and nothing here is surprising. Check the other choices."
      ],
      how: [
        "Read the sentence. Mia feeds the cat at a certain time.",
        "A joining word that tells when something happens is when.",
        "The answer is when."
      ],
      misconception: "A common mix-up is picking until because the sentence is about time. Until tells how long something lasts."
    },
    "SK-GUM5-5-P3": {
      hints: [
        "Look for a group of words that begins with a joining word and leaves you waiting for more.",
        "Read the five groups one at a time. Pick ONE.",
        "The group about the puppy gives a whole idea with no joining word. Check the other four."
      ],
      how: [
        "Check each group of words for a whole idea.",
        "The other four each give a whole idea, and two of them join clauses with a joining word.",
        "\"When the music started.\" has a joining word but no second idea, so it cannot stand alone."
      ],
      misconception: "A common mix-up is choosing a group just because it has a joining word. A joining word is fine when a second idea goes with it."
    },
    "SK-GUM5-5-P4": {
      hints: [
        "Find the joining word in each sentence. Ask what it gives.",
        "Do one row at a time. Say the sentence with each label and see which one fits.",
        "The row about being sleepy gives a reason. Decide about the other rows."
      ],
      how: [
        "Find the joining word in each row: because, after, because and before.",
        "Because gives a reason: Sam found his hat, and Lee was sleepy.",
        "After and before tell when: Sam smiled when he found his hat, and Lee yawned before she went to bed."
      ],
      misconception: "A common mix-up is thinking every joining word tells when. Some of them give a reason."
    },
    "SK-GUM5-5-P5": {
      hints: [
        "Ask whether the picnic moves inside every time or only in one case.",
        "Try each word at the start. Say the whole sentence.",
        "The word although shows a surprise, and nothing here is surprising. Check the other choices."
      ],
      how: [
        "Read the sentence. The picnic moves inside only in one case, if it rains on Saturday.",
        "A joining word that sets up a case is if.",
        "The answer is If."
      ],
      misconception: "A common mix-up is picking until because the sentence is about a day. Until tells how long, not what must happen."
    }
  },
  /* B8:core:end */
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
    big: "When a sentence starts with an opening part like \"After lunch\" or \"While we ate,\" a comma usually goes after that part.",
    points: [
      "Some sentences begin with an opening part that tells when, where, why or what if. \"After school,\" \"In the morning\" and \"While we ate\" are opening parts.",
      "Put a comma at the end of the opening part, right before the main part of the sentence: While we ate, Dad told a joke. An opening part with its own naming and telling words, like \"While we ate,\" needs the comma. After a short opening phrase like \"After lunch,\" the comma is optional, and using it is fine.",
      "If the same part comes at the end of the sentence, you do not need a comma before it. This works for ending parts that begin with when, after, before or if: We lined up when the bell rang."
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
    },
    {
      show: ["We painted the fence, after lunch ended."],
      ask: "Does this sentence need the comma?",
      steps: [
        "Find the part that starts with after. It is \"after lunch ended.\"",
        "That part comes at the end, after the main idea.",
        "A part at the end needs no comma ahead of it."
      ],
      answer: "No. Take the comma out: \"We painted the fence after lunch ended.\""
    }
  ],
  parent: "When you read together, hunt for sentences that start with words like After, When, If or In the morning. Have your child point to the comma that ends the opening part.",
  passages: [
    /* B8:passages:start */
    {
      id: "p1",
      title: "Walking Bus",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our school has a walking bus every Tuesday and Thursday morning.",
          "(2) Mr. Ortiz leads the line from the corner of Pine Street.",
          "(3) When the clock struck eight, we left the park gate.",
          "(4) We walked in pairs because the sidewalk was narrow."
        ],
        [
          "(5) Before we crossed the street the leader raised a flag.",
          "(6) Cars stopped for the bright orange flag.",
          "(7) After we passed the bakery, we smelled fresh bread.",
          "(8) A light rain fell on our hoods and backpacks all morning."
        ],
        [
          "(9) We sang a song, when the rain began.",
          "(10) When the school came into view, we walked faster.",
          "(11) We thanked Mr. Ortiz at the front gate.",
          "(12) We will walk again on Thursday if the weather stays dry."
        ]
      ]
    },
    {
      id: "p2",
      title: "Rollerblade Day",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) The third graders held a rollerblade day in the gym on Friday.",
          "(2) Before the coach gave out helmets we sat in a circle.",
          "(3) Kira tied her laces tightly because the wheels felt wobbly.",
          "(4) We rolled slowly along the painted line on the floor."
        ],
        [
          "(5) Our teacher clapped, when we reached the far wall.",
          "(6) After the first lap, we took a water break.",
          "(7) After we cleaned the floor, the coach counted the helmets.",
          "(8) The coach smiled after we returned every helmet."
        ],
        [
          "(9) When the last skater finished, the coach blew a whistle.",
          "(10) We packed our skates into a big blue bag.",
          "(11) Nobody wanted the happy day to end."
        ]
      ]
    },
    {
      id: "p3",
      title: "Sled Dog Visit",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) A sled dog team visited our school on a snowy morning.",
          "(2) The driver parked the big wooden sled near the flagpole.",
          "(3) Eight furry dogs wore little blue boots.",
          "(4) We stood in a line while the driver told stories."
        ],
        [
          "(5) Because the dogs were so eager, they barked and jumped.",
          "(6) The lead dog pulled the sled forward when the driver called.",
          "(7) When the dogs ran past the fence we cheered loudly.",
          "(8) After the run, each dog drank cold water.",
          "(9) One dog licked my glove."
        ],
        [
          "(10) If you visit the farm, you can meet the whole team.",
          "(11) The driver gave each class a team poster.",
          "(12) We hung our poster beside the door."
        ]
      ]
    },
    {
      id: "p4",
      title: "Balance Beam Meet",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our gym club held a balance beam meet last Saturday.",
          "(2) Coach Rivera set four low beams along the blue mat.",
          "(3) As soon as the music began, the first girl stepped up.",
          "(4) Nell held her arms wide since the beam looked thin."
        ],
        [
          "(5) Once she reached the end she hopped down.",
          "(6) Judges held up small white score cards.",
          "(7) Since the crowd stayed quiet, we heard every landing.",
          "(8) One tiny girl landed with a wobble."
        ],
        [
          "(9) We clapped loudly, after the last turn ended.",
          "(10) Whenever a girl finished, her friends hugged her.",
          "(11) Coach Rivera handed out ribbons to the whole team.",
          "(12) Everyone left the gym smiling and tired."
        ]
      ]
    },
    {
      id: "p5",
      title: "Recess Helpers",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Some older students helped on the playground at recess this week.",
          "(2) While Jo handed out jump ropes the little ones lined up.",
          "(3) Marcus kept the ball bin full since the balls kept rolling away.",
          "(4) A shy first grader asked for a turn."
        ],
        [
          "(5) We drew a hopscotch grid, if the chalk was dry.",
          "(6) Once the bell rang, everyone ran back to class.",
          "(7) Before we went inside, we stacked the ropes in a bin.",
          "(8) Jo checked the gate before the last child left."
        ],
        [
          "(9) As soon as the line reached the door, Jo waved goodbye.",
          "(10) It was a long but happy day.",
          "(11) We hope to help again next week."
        ]
      ]
    },
    {
      id: "p6",
      title: "Bell Choir Practice",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) A bell choir practiced in the music room on Wednesday.",
          "(2) Mrs. Hale gave each player two shiny brass bells.",
          "(3) Eight small hands waited for the signal.",
          "(4) We watched her baton while we counted the beats."
        ],
        [
          "(5) Although the bells were heavy, we held them still.",
          "(6) The ringing began when Mrs. Hale nodded.",
          "(7) As soon as the last note faded we all grinned.",
          "(8) After practice, we put the bells in padded cases.",
          "(9) One bell slipped from my hand."
        ],
        [
          "(10) If we practice twice a week, we can play at the fair.",
          "(11) Mrs. Hale gave us a new song to learn.",
          "(12) I hummed it all the way home."
        ]
      ]
    }
    /* B8:passages:end */
  ],
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
        "While Dad cooked dinner in the kitchen we set the table.",
        "After the fire drill, we went back inside.",
        "We set the table while Dad cooked dinner in the kitchen."
      ],
      answer: [2], pick: 1,
      clue: "Find each sentence that starts with an opening part. Does each one have a comma before the main idea?",
      why: "The error is in \"While Dad cooked dinner in the kitchen we set the table.\" The opening part, \"While Dad cooked dinner in the kitchen,\" needs a comma after it: \"While Dad cooked dinner in the kitchen, we set the table.\" The last sentence needs no comma because the while part comes at the end." },
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
          { ref: "SK-GUM5-6-P3" },
          { ref: "SK-GUM5-6-P4" },
          {
            id: "SK-GUM5-6-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: [],
            prompt: "Choose the words that start Eli's sentence.",
            text: "{0} we lined up by the door.",
            slots: [
              {
                options: ["When the lunch bell rang,", "When the lunch bell rang", "When the lunch, bell rang"],
                answer: 0
              }
            ],
            clue: "Find where the opening part ends and the main idea begins.",
            hints: [
              "Find where the opening part ends and the main idea begins.",
              "Say each choice, then the rest of the sentence. Listen for where you pause.",
              "One choice cuts the opening part in two, with a comma before the last word. Decide between the other two."
            ],
            how: [
              "Read the sentence. The opening part tells when, and the main idea is \"we lined up by the door.\"",
              "The comma goes at the end of the opening part, right before the main idea.",
              "The answer is \"When the lunch bell rang,\" with the comma after rang."
            ],
            misconception: "A common mix-up is leaving the comma out because the sentence still reads smoothly. The comma marks where the opening part ends.",
            why: "The answer is \"When the lunch bell rang,\" with the comma after rang. The opening part tells when, and the main idea comes after the comma. One choice has no comma, and one cuts the opening part short."
          },
          {
            id: "SK-GUM5-6-C04",
            type: "mc",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: ["p1"],
            prompt: "Which sentence from the draft has a comma in the right place after its opening part?",
            choices: [
              { text: "We will walk again on Thursday if the weather stays dry." },
              { text: "When the school came into view, we walked faster.", correct: true },
              { text: "We sang a song, when the rain began." },
              { text: "We walked in pairs because the sidewalk was narrow." }
            ],
            clue: "Look for a sentence that starts with an opening part. Ask where its main idea begins.",
            hints: [
              "Look for a sentence that starts with an opening part. Ask where its main idea begins.",
              "Check each choice. Ask whether a comma sits right at that spot.",
              "The sentence about the pairs has no opening part and no comma, so it does not fit the question. Check the other choices."
            ],
            how: [
              "Look at the start of each choice for an opening part.",
              "In \"When the school came into view, we walked faster.\" the comma comes right after the opening part.",
              "The answer is \"When the school came into view, we walked faster.\""
            ],
            misconception: "A common mix-up is picking a sentence just because it has a comma. The comma has to come right after the opening part.",
            why: "The answer is \"When the school came into view, we walked faster.\" The comma comes right after the opening part. One choice has a comma it does not need, and two have no opening part."
          },
          {
            id: "SK-GUM5-6-C05",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Which sentence in paragraph 2 of the draft is missing a comma?",
              choices: [
                { text: "Cars stopped for the bright orange flag." },
                { text: "After we passed the bakery, we smelled fresh bread." },
                { text: "Before we crossed the street the leader raised a flag.", correct: true },
                { text: "A light rain fell on our hoods and backpacks all morning." }
              ]
            },
            partB: {
              prompt: "Which statement explains where the comma belongs in the sentence from Part A?",
              choices: [
                {
                  text: "The comma goes after street, because the opening part ends there and the main idea comes next.",
                  correct: true
                },
                {
                  text: "The comma goes after Before, because every sentence needs a comma after its first word, no matter what follows."
                },
                { text: "The comma goes after leader, because a comma should always come right after the person who does the action." },
                { text: "The comma goes after flag, because every sentence needs a comma at its very end, just before the period." }
              ]
            },
            clue: "Read each sentence in paragraph 2. Look for an opening part that tells when, where or why.",
            hints: [
              "Read each sentence in paragraph 2. Look for an opening part that tells when, where or why.",
              "Find the spot where an opening part ends and the main idea begins.",
              "The sentence about the bakery already has its comma where it belongs. Check the other three."
            ],
            how: [
              "Part A: read each sentence in paragraph 2 and look for an opening part.",
              "In \"Before we crossed the street the leader raised a flag.\" the opening part is \"Before we crossed the street,\" and no comma follows it.",
              "Part A answer: Before we crossed the street the leader raised a flag.",
              "Part B answer: \"The comma goes after street, because the opening part ends there and the main idea comes next.\""
            ],
            misconception: "A common mix-up is putting the comma after the first word or the subject. The comma belongs at the end of the whole opening part.",
            why: "Part A: Before we crossed the street the leader raised a flag. Part B: \"The comma goes after street, because the opening part ends there and the main idea comes next.\" The sentence should read \"Before we crossed the street, the leader raised a flag.\" The other sentences are written correctly."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM5-6-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: ["p2"],
            prompt: "Look at sentences 2 through 6 of the draft. Select the TWO sentences with a comma mistake.",
            targets: ["p2:1:2", "p2:1:3", "p2:1:4", "p2:2:1", "p2:2:2"],
            answer: ["p2:1:2", "p2:2:1"],
            pick: 2,
            clue: "Check each sentence for its commas. Ask whether one is missing or one does not belong.",
            hints: [
              "Check each sentence for its commas. Ask whether one is missing or one does not belong.",
              "Read the five sentences one at a time. Pick TWO.",
              "In sentence 6, the comma comes right after the opening part, which is correct. Check the other four."
            ],
            how: [
              "Check each sentence for an opening part and for any comma it has.",
              "Sentence 2 is missing a comma after \"Before the coach gave out helmets.\"",
              "Sentence 5 has a comma before \"when we reached the far wall,\" which comes last and needs no comma.",
              "Sentences 3, 4 and 6 are already written correctly."
            ],
            misconception: "A common mix-up is thinking every comma mistake is a missing comma. One mistake here is a comma that is not needed.",
            why: "The answers are sentence 2 and sentence 5. Sentence 2 needs a comma after \"Before the coach gave out helmets.\" In sentence 5, the comma before \"when we reached the far wall\" is not needed because that part comes last. Sentences 3, 4 and 6 are written correctly."
          },
          {
            id: "SK-GUM5-6-C07",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: [],
            prompt: "Decide whether each sentence needs a comma after an opening part or needs none.",
            cols: ["Needs a comma", "Needs no comma"],
            rows: [
              { text: "After the heavy rain stopped on the field we ran outside.", answer: 0 },
              { text: "We ran outside after the heavy rain stopped on the field.", answer: 1 },
              { text: "If you call me after supper tonight I will answer.", answer: 0 },
              { text: "I will answer if you call me after supper tonight.", answer: 1 }
            ],
            clue: "Find the opening part in each sentence. Ask whether the sentence begins with it.",
            hints: [
              "Find the opening part in each sentence. Ask whether the sentence begins with it.",
              "Do one row at a time. Say the sentence and listen for a pause after the first idea.",
              "In the row that starts with If, the opening part comes first. Decide about the other rows."
            ],
            how: [
              "Look at where the After and If parts sit in each row.",
              "When the After or If part starts the sentence, a comma goes after it: After the heavy rain stopped on the field, we ran outside. If you call me after supper tonight, I will answer.",
              "When the same part comes last, no comma is needed: We ran outside after the heavy rain stopped on the field. I will answer if you call me after supper tonight."
            ],
            misconception: "A common mix-up is thinking a sentence with after or if always needs a comma. The comma depends on where that part sits.",
            why: "After the heavy rain stopped on the field we ran outside, and If you call me after supper tonight I will answer, each need a comma after the opening part. We ran outside after the heavy rain stopped on the field, and I will answer if you call me after supper tonight, need no comma because the part comes last."
          },
          {
            id: "SK-GUM5-6-C08",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: [],
            prompt: "Is the comma in each sentence placed in the right spot or the wrong spot?",
            cols: ["Right spot", "Wrong spot"],
            rows: [
              { text: "Because the wind was cold, we wore hats.", answer: 0 },
              { text: "We wore hats, when the wind was cold.", answer: 1 },
              { text: "After the show, we all clapped.", answer: 0 },
              { text: "We all clapped, after the curtain fell.", answer: 1 }
            ],
            clue: "Find the opening part, if there is one, in each sentence. Ask where the main idea begins.",
            hints: [
              "Find the opening part, if there is one, in each sentence. Ask where the main idea begins.",
              "Do one row at a time. Say each sentence and listen for whether the pause sounds right.",
              "In the row that begins with After, the comma follows the opening part. Decide about the other rows."
            ],
            how: [
              "Look at where each comma sits in each row.",
              "A comma after an opening part is in the right spot: Because the wind was cold, we wore hats. After the show, we all clapped.",
              "A comma before a part that comes last is in the wrong spot: We wore hats, when the wind was cold. We all clapped, after the curtain fell."
            ],
            misconception: "A common mix-up is thinking any comma before when or after is fine. A comma belongs after an opening part, not before an ending part.",
            why: "Because the wind was cold, we wore hats, and After the show, we all clapped, have commas in the right spot after an opening part. We wore hats, when the wind was cold, and We all clapped, after the curtain fell, have commas before an ending part, which are in the wrong spot."
          },
          {
            id: "SK-GUM5-6-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: ["p2"],
            prompt: "In the draft, sentence 7 has a comma and sentence 8 has none. Why are both sentences correct?",
            choices: [
              {
                text: "Sentence 8 left out a comma by mistake, because an after part needs a comma in front of it whatever its place in the sentence."
              },
              {
                text: "The after part comes first in sentence 7, so a comma follows it, but it comes last in sentence 8, so none is needed.",
                correct: true
              },
              { text: "Sentence 7 has a comma it does not need, because a comma is used only when a sentence is very long." },
              { text: "The commas depend on which sentence is longer, since only the longer sentence can be given a comma." }
            ],
            clue: "Look at where the after part sits in each sentence.",
            hints: [
              "Look at where the after part sits in each sentence.",
              "Ask which part opens sentence 7 and which part opens sentence 8.",
              "Sentence 8 is not a mistake, so the answer cannot say that a comma was left out there. Check the other choices."
            ],
            how: [
              "Read sentence 7: the after part comes first, so a comma follows it.",
              "Read sentence 8: the after part comes last, so no comma is needed.",
              "The answer is \"The after part comes first in sentence 7, so a comma follows it, but it comes last in sentence 8, so none is needed.\""
            ],
            misconception: "A common mix-up is thinking a comma always goes with the word after. The comma depends on where the after part sits.",
            why: "The answer is \"The after part comes first in sentence 7, so a comma follows it, but it comes last in sentence 8, so none is needed.\" Both sentences are correct. The length of a sentence does not decide where a comma goes."
          },
          {
            id: "SK-GUM5-6-C10",
            type: "dropdown",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: [],
            prompt: "Mia's draft says, \"Because the snow kept falling we stayed home.\" Pick the words that fix the start of her sentence.",
            text: "{0} we stayed home.",
            slots: [
              {
                options: [
                  "Because the snow kept falling,",
                  "Because, the snow kept falling",
                  "Because the snow kept, falling"
                ],
                answer: 0
              }
            ],
            clue: "Ask which words are the opening part and which words are the main idea.",
            hints: [
              "Ask which words are the opening part and which words are the main idea.",
              "Put each comma where it sits in the choice and listen to the pause.",
              "A comma right after Because would leave that opening part with only one word. Check the other choices."
            ],
            how: [
              "Read the draft. The opening part tells why, and the main idea is \"we stayed home.\"",
              "A comma goes right after the opening part, before the main idea.",
              "The answer is \"Because the snow kept falling,\" with a comma at the end."
            ],
            misconception: "A common mix-up is putting the comma after the first word. The comma belongs after the whole opening part.",
            why: "The answer is \"Because the snow kept falling,\" with a comma at the end. The comma marks where the opening part stops and the main idea begins. One choice puts the comma after Because, and one puts it before the last word."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM5-6-C11",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: ["p3"],
            prompt: "Look at sentences 5 through 9 of the draft. Select the sentence with a comma mistake.",
            targets: ["p3:2:1", "p3:2:2", "p3:2:3", "p3:2:4", "p3:2:5"],
            answer: ["p3:2:3"],
            pick: 1,
            clue: "Check each sentence for an opening part. Ask whether a comma sits where the main idea begins.",
            hints: [
              "Check each sentence for an opening part. Ask whether a comma sits where the main idea begins.",
              "Read the five sentences one at a time. Pick ONE.",
              "In sentence 8, the comma comes right after the opening part, so it is correct. Check the other four."
            ],
            how: [
              "Check each sentence for an opening part and a comma.",
              "Sentences 5 and 8 have a comma after their opening parts, sentence 6 ends with a part that needs no comma, and sentence 9 has no opening part.",
              "In sentence 7, \"When the dogs ran past the fence\" is an opening part, so a comma belongs after fence."
            ],
            misconception: "A common mix-up is picking the sentence that has the most commas. Check whether each comma is needed and whether one is missing.",
            why: "The answer is sentence 7, \"When the dogs ran past the fence we cheered loudly.\" It needs a comma after fence. Sentences 5, 6, 8 and 9 are written correctly."
          },
          {
            id: "SK-GUM5-6-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: [],
            prompt: "Pick the correct ending.",
            text: "Mrs. Lee read to the class {0}.",
            slots: [
              {
                options: ["after the recess bell rang", ", after the recess bell rang", "after the recess, bell rang"],
                answer: 0
              }
            ],
            clue: "Ask whether the part about the bell opens the sentence or closes it.",
            hints: [
              "Ask whether the part about the bell opens the sentence or closes it.",
              "Say each choice after class. Listen for whether a pause is needed there.",
              "One choice puts a comma inside the part about the bell, which cuts it in half. Decide between the other two."
            ],
            how: [
              "Read the sentence. The part about the bell comes last.",
              "A part that comes last does not need a comma in front of it.",
              "The answer is after the recess bell rang."
            ],
            misconception: "A common mix-up is putting a comma before every word like after. A comma is not needed when that part comes last.",
            why: "The answer is after the recess bell rang. The part about the bell comes last, so no comma is needed. One choice puts a comma before it, and one puts a comma inside it."
          },
          {
            id: "SK-GUM5-6-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: [],
            prompt: "Dev says, \"A sentence that uses when, after, before or if always needs a comma.\" Choose the TWO sentences that show Dev is wrong.",
            pick: 2,
            choices: [
              { text: "Before we left, we waved goodbye." },
              { text: "I will share my snack if you forget yours.", correct: true },
              { text: "We cheered when the parade came by.", correct: true },
              { text: "If the sky clears, we will have our picnic." },
              { text: "After the bell rang, the class lined up." }
            ],
            clue: "Dev says a sentence with those words always needs a comma. Look for sentences that are correct without one.",
            hints: [
              "Dev says a sentence with those words always needs a comma. Look for sentences that are correct without one.",
              "Pick TWO. Check where the part that begins with when, after, before or if sits in each sentence.",
              "In the sentence about the bell, a comma follows an opening part, which is correct. Decide about the other four."
            ],
            how: [
              "Look for sentences that use when, after, before or if and have no comma.",
              "\"We cheered when the parade came by.\" and \"I will share my snack if you forget yours.\" are correct, and each has that part last.",
              "The other three start with the part, so a comma follows it, which does not show Dev is wrong."
            ],
            misconception: "A common mix-up is choosing the sentences that have commas. Dev is wrong about sentences where the part comes last.",
            why: "The answers are \"We cheered when the parade came by.\" and \"I will share my snack if you forget yours.\" Each is correct with no comma because the part comes last. The other three start with an opening part, so they need the comma."
          },
          {
            id: "SK-GUM5-6-C14",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: [],
            prompt: "Choose the words that best finish the sentence.",
            text: "{0} the singers stood up, and they bowed {1}.",
            slots: [
              {
                options: ["Before the curtain opened,", "Before the curtain opened", "Before, the curtain opened"],
                answer: 0
              },
              {
                options: ["after the song ended", ", after the song ended", "after, the song ended"],
                answer: 0
              }
            ],
            clue: "Read the whole sentence. Ask which part is an opening part and which part comes last.",
            hints: [
              "Read the whole sentence. Ask which part is an opening part and which part comes last.",
              "Fill one blank at a time. Say each choice with the words around it.",
              "In the second blank, one choice puts a comma before a part that comes last, which is not needed. Decide about the other choices."
            ],
            how: [
              "The first blank holds an opening part, so a comma belongs at its end.",
              "The second blank holds a part that comes last, so no comma is needed.",
              "The answers are Before the curtain opened, and after the song ended."
            ],
            misconception: "A common mix-up is using the same comma rule in both blanks. An opening part needs a comma, but an ending part does not.",
            why: "The answers are \"Before the curtain opened,\" and \"after the song ended.\" The opening part needs a comma after it. The part at the end needs no comma."
          },
          {
            id: "SK-GUM5-6-C15",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
            ],
            passages: [],
            prompt: "Pia wrote, \"When the movie began, we hushed.\" She says the comma is wrong, because it splits one idea in two. Is Pia right?",
            choices: [
              { text: "Yes. A comma should never come in the middle of a sentence, so the writer should take this one out." },
              { text: "Yes. A comma belongs only before the word when, so it should be moved in front of that word." },
              { text: "No. The opening part cannot stand alone, so the comma shows where the main idea begins.", correct: true },
              { text: "No. A comma is used whenever a sentence has two verbs, so one belongs in this sentence." }
            ],
            clue: "Ask what the first part of Pia's sentence can do on its own.",
            hints: [
              "Ask what the first part of Pia's sentence can do on its own.",
              "Say the first part by itself. Ask whether it feels finished.",
              "Commas can come in the middle of sentences, so the answer cannot say that they never do. Check the other choices."
            ],
            how: [
              "Say the first part alone. It leaves you waiting for more, so it is not a whole idea.",
              "A comma marks where the opening part ends and the main idea starts.",
              "The answer is \"No. The opening part cannot stand alone, so the comma shows where the main idea begins.\""
            ],
            misconception: "A common mix-up is thinking a comma splits one idea in two. The comma only marks where the opening part ends.",
            why: "The answer is \"No. The opening part cannot stand alone, so the comma shows where the main idea begins.\" The comma is correct, so Pia is not right."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM5-6-S01",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: [],
      prompt: "Which sentence leaves out a comma it needs?",
      options: [
        "Last night, the stars shone brightly.",
        "If it is windy, we will stay indoors.",
        "As soon as the cake cooled we spread the icing.",
        "At noon, the whistle blew twice.",
        "We spread the icing as soon as the cake cooled."
      ],
      answer: [2],
      pick: 1,
      clue: "Look for a sentence that begins with an opening part and keeps going without a pause.",
      hints: [
        "Look for a sentence that begins with an opening part and keeps going without a pause.",
        "Read the five sentences one at a time. Pick ONE.",
        "The sentence about the stars already has a comma where it belongs. Check the other four."
      ],
      how: [
        "Check each sentence for an opening part and a comma after it.",
        "\"Last night,\" \"If it is windy,\" and \"At noon,\" each have a comma after the opening part, and the last sentence puts its as soon as part at the end.",
        "\"As soon as the cake cooled we spread the icing.\" has an opening part with no comma after cooled."
      ],
      misconception: "A common mix-up is picking a sentence just because it has a comma. Look for the one that has an opening part and no comma.",
      why: "The answer is \"As soon as the cake cooled we spread the icing.\" The opening part, \"As soon as the cake cooled,\" needs a comma after it. The last sentence puts that part at the end, so it needs no comma.",
      like: ["SK-GUM5-6-P3"]
    },
    {
      id: "SK-GUM5-6-S02",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: [],
      prompt: "Pick the TWO lines with commas in the right places.",
      pick: 2,
      choices: [
        { text: "Whenever it snowed the roads closed." },
        { text: "Once the paint dried, we hung the sign.", correct: true },
        { text: "If, you need a pencil ask me." },
        { text: "On Saturday morning, we raked the yard.", correct: true },
        { text: "We walked home, after the long show ended." }
      ],
      clue: "Look at where each line puts its opening part. Ask whether a comma sits right after it.",
      hints: [
        "Look at where each line puts its opening part. Ask whether a comma sits right after it.",
        "Pick TWO. Check lines where a comma is missing, too early, or not needed.",
        "In the line about the show, the comma comes before a part at the end. Decide about the other four."
      ],
      how: [
        "Check each line for an opening part and the comma that goes with it.",
        "\"Once the paint dried, we hung the sign.\" and \"On Saturday morning, we raked the yard.\" each have the comma right after the opening part.",
        "The other three leave the comma out, add one before an ending part, or place it too early."
      ],
      misconception: "A common mix-up is picking a line because a comma shows up somewhere in it. The comma has to sit right after the opening part.",
      why: "The answers are \"Once the paint dried, we hung the sign.\" and \"On Saturday morning, we raked the yard.\" Each comma follows an opening part. One line is missing its comma, one has a comma before an ending part, and one has the comma too early.",
      like: ["SK-GUM5-6-P4"]
    },
    {
      id: "SK-GUM5-6-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: [],
      prompt: "Pick the choice with the comma in the right place.",
      text: "{0} the rider tightened her helmet.",
      slots: [
        {
          options: ["Before the race began,", "Before the race, began", "Before, the race began"],
          answer: 0
        }
      ],
      clue: "Ask which words make up the whole opening part.",
      hints: [
        "Ask which words make up the whole opening part.",
        "Say each choice, then the rest. Listen for the natural pause.",
        "One choice puts the comma right after Before, so the opening part is only one word long. Decide between the other two."
      ],
      how: [
        "Read the sentence. The opening part tells when the rider tightened her helmet.",
        "The comma goes at the end of the opening part, before the main idea.",
        "The answer is \"Before the race began,\" with the comma after began."
      ],
      misconception: "A common mix-up is placing the comma in the middle of the opening part. It belongs where that part ends.",
      why: "The answer is \"Before the race began,\" with the comma after began. The opening part ends there, and the main idea comes next. One choice cuts it off after race, and one cuts it off after Before.",
      like: ["SK-GUM5-6-C03"]
    },
    {
      id: "SK-GUM5-6-S04",
      type: "mc",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: ["p4"],
      prompt: "Pick the line whose comma sits where its opening part ends.",
      choices: [
        { text: "Nell held her arms wide since the beam looked thin." },
        { text: "We clapped loudly, after the last turn ended." },
        { text: "Our gym club held a balance beam meet last Saturday." },
        { text: "Whenever a girl finished, her friends hugged her.", correct: true }
      ],
      clue: "Look for a line that begins with an opening part. Ask where its main idea starts.",
      hints: [
        "Look for a line that begins with an opening part. Ask where its main idea starts.",
        "Check each choice for a comma at that spot.",
        "The line about the gym club has no opening part and no comma, so it does not fit the question. Check the other choices."
      ],
      how: [
        "Look at the start of each choice.",
        "In \"Whenever a girl finished, her friends hugged her.\" the comma sits right after the opening part.",
        "The answer is \"Whenever a girl finished, her friends hugged her.\""
      ],
      misconception: "A common mix-up is choosing the line that has any comma at all. The comma must follow the opening part.",
      why: "The answer is \"Whenever a girl finished, her friends hugged her.\" The comma sits where the opening part ends. One choice has a comma it does not need, and two have no opening part.",
      like: ["SK-GUM5-6-C04"]
    },
    {
      id: "SK-GUM5-6-S05",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: ["p4"],
      prompt: "Do both steps.",
      partA: {
        prompt: "Find the line in the second paragraph that skips a comma.",
        choices: [
          { text: "Judges held up small white score cards." },
          { text: "Once she reached the end she hopped down.", correct: true },
          { text: "Since the crowd stayed quiet, we heard every landing." },
          { text: "One tiny girl landed with a wobble." }
        ]
      },
      partB: {
        prompt: "Pick the best fix for the missing comma.",
        choices: [
          { text: "Add one after Once, since the first word of any line always needs one right behind it." },
          { text: "Add one after she, since a mark belongs right behind whoever acts." },
          { text: "Add one after down, since every line wants a mark ahead of its period." },
          { text: "Add one after end, since the starting words stop there and the action begins.", correct: true }
        ]
      },
      clue: "Read each line in paragraph 2. Look for a line that opens with a part telling when or why.",
      hints: [
        "Read each line in paragraph 2. Look for a line that opens with a part telling when or why.",
        "Find the point where that opening part is finished and the main idea starts.",
        "The line about the crowd already has its comma in the right place. Check the other three."
      ],
      how: [
        "Part A: read each line in paragraph 2 and look for an opening part.",
        "In \"Once she reached the end she hopped down.\" the opening part is \"Once she reached the end,\" and no comma follows it.",
        "Part A answer: Once she reached the end she hopped down.",
        "Part B answer: \"Add one after end, since the starting words stop there and the action begins.\""
      ],
      misconception: "A common mix-up is putting the comma after the first word. The comma goes after the whole opening part.",
      why: "Part A: Once she reached the end she hopped down. Part B: \"Add one after end, since the starting words stop there and the action begins.\" The line should read \"Once she reached the end, she hopped down.\" The other lines are written correctly.",
      like: ["SK-GUM5-6-C05"]
    },
    {
      id: "SK-GUM5-6-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: ["p5"],
      prompt: "Two of the lines numbered 2 to 6 have a comma problem. Mark both.",
      targets: ["p5:1:2", "p5:1:3", "p5:1:4", "p5:2:1", "p5:2:2"],
      answer: ["p5:1:2", "p5:2:1"],
      pick: 2,
      clue: "Look at the commas in each line. Ask whether one is missing or one does not belong.",
      hints: [
        "Look at the commas in each line. Ask whether one is missing or one does not belong.",
        "Go through the five lines one by one. Pick TWO.",
        "In line 6, the comma follows the opening part, which fits. Check the other four."
      ],
      how: [
        "Check each line for an opening part and for any comma it has.",
        "Line 2 is missing a comma after \"While Jo handed out jump ropes.\"",
        "Line 5 has a comma before \"if the chalk was dry,\" which comes last and needs no comma.",
        "Lines 3, 4 and 6 are written correctly."
      ],
      misconception: "A common mix-up is thinking every comma problem means a missing comma. One problem here is a comma that is not needed.",
      why: "The answers are line 2 and line 5. Line 2 needs a comma after \"While Jo handed out jump ropes.\" In line 5, the comma before \"if the chalk was dry\" is not needed because that part comes last. Lines 3, 4 and 6 are written correctly.",
      like: ["SK-GUM5-6-C06"]
    },
    {
      id: "SK-GUM5-6-S07",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: [],
      prompt: "Sort the lines by whether a comma is needed.",
      cols: ["A comma is needed", "No comma is needed"],
      rows: [
        { text: "When Mom unlocked the front door we rushed inside.", answer: 0 },
        { text: "We rushed inside when Mom unlocked the front door.", answer: 1 },
        { text: "Because it was foggy on the hill road we drove slowly.", answer: 0 },
        { text: "We drove slowly because it was foggy on the hill road.", answer: 1 }
      ],
      clue: "Spot the opening part in each line. Ask whether the line starts with it.",
      hints: [
        "Spot the opening part in each line. Ask whether the line starts with it.",
        "Take one row at a time. Say the line and listen for a pause after the first idea.",
        "In the row that starts with Because, the opening part comes first. Decide about the other rows."
      ],
      how: [
        "Look at where the When and Because parts sit in each row.",
        "When the When or Because part starts the line, a comma follows it: When Mom unlocked the front door, we rushed inside. Because it was foggy on the hill road, we drove slowly.",
        "When the same part comes last, no comma is needed: We rushed inside when Mom unlocked the front door. We drove slowly because it was foggy on the hill road."
      ],
      misconception: "A common mix-up is thinking a line with when or because always needs a comma. The comma depends on where that part sits.",
      why: "When Mom unlocked the front door we rushed inside, and Because it was foggy on the hill road we drove slowly, need a comma after the opening part. We rushed inside when Mom unlocked the front door, and We drove slowly because it was foggy on the hill road, need no comma because the part comes last.",
      like: ["SK-GUM5-6-C07"]
    },
    {
      id: "SK-GUM5-6-S08",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: [],
      prompt: "Is each comma placed well or placed badly?",
      cols: ["Placed well", "Placed badly"],
      rows: [
        { text: "Although it was late, Dad kept reading.", answer: 0 },
        { text: "Dad kept reading, if the baby slept.", answer: 1 },
        { text: "Before bedtime, I sweep the porch.", answer: 0 },
        { text: "I sweep the porch, before I go to school.", answer: 1 }
      ],
      clue: "Look for an opening part in each line, if there is one. Ask where the main idea starts.",
      hints: [
        "Look for an opening part in each line, if there is one. Ask where the main idea starts.",
        "Take one row at a time. Say each line and listen for whether the pause sounds natural.",
        "In the row that begins with Before bedtime, the comma follows the opening part. Decide about the other rows."
      ],
      how: [
        "Look at where the comma sits in each row.",
        "A comma after an opening part is placed well: Although it was late, Dad kept reading. Before bedtime, I sweep the porch.",
        "A comma before a part that comes last is placed badly: Dad kept reading, if the baby slept. I sweep the porch, before I go to school."
      ],
      misconception: "A common mix-up is thinking a comma before if or before is fine. A comma goes after an opening part, not before an ending part.",
      why: "Although it was late, Dad kept reading, and Before bedtime, I sweep the porch, have commas placed well after an opening part. Dad kept reading, if the baby slept, and I sweep the porch, before I go to school, have commas before an ending part, which are placed badly.",
      like: ["SK-GUM5-6-C08"]
    },
    {
      id: "SK-GUM5-6-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: ["p5"],
      prompt: "Look at lines 7 and 8. What makes only one of them use a comma?",
      choices: [
        { text: "Line 7 starts with before words that need a comma after them, but line 8 ends with them.", correct: true },
        { text: "Line 8 forgot a comma, since before words always need one in front of them, wherever they sit." },
        { text: "Line 7 has too many commas, because commas belong only in lines that hold a list." },
        { text: "The two lines must look alike, so a writer should copy every mark from one line into the other." }
      ],
      clue: "Look at where the before words sit in each line.",
      hints: [
        "Look at where the before words sit in each line.",
        "Ask what opens line 7 and what opens line 8.",
        "Line 8 is not a mistake, so the answer cannot say that a comma was forgotten there. Check the other choices."
      ],
      how: [
        "Read line 7: the before words start the line, so a comma follows them.",
        "Read line 8: the before words end the line, so no comma is wanted.",
        "The answer is \"Line 7 starts with before words that need a comma after them, but line 8 ends with them.\""
      ],
      misconception: "A common mix-up is thinking a comma always goes with the word before. The comma depends on where the before words sit.",
      why: "The answer is \"Line 7 starts with before words that need a comma after them, but line 8 ends with them.\" Both lines are correct. Lines that look alike can still need different marks.",
      like: ["SK-GUM5-6-C09"]
    },
    {
      id: "SK-GUM5-6-S10",
      type: "dropdown",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: [],
      prompt: "Ty wrote, \"Before the guests arrived we hid the cake.\" Choose the repair for his opening part.",
      text: "{0} we hid the cake.",
      slots: [
        {
          options: ["Before the guests arrived,", "Before, the guests arrived", "Before the guests, arrived"],
          answer: 0
        }
      ],
      clue: "Find the words that tell when, then find the main idea.",
      hints: [
        "Find the words that tell when, then find the main idea.",
        "Say each choice and listen for the pause before the main idea.",
        "One choice puts a comma inside the opening part, before arrived. Decide between the other two."
      ],
      how: [
        "Read Ty's sentence. The opening part tells when, and the main idea is \"we hid the cake.\"",
        "A comma goes right after the opening part.",
        "The answer is \"Before the guests arrived,\" with a comma at the end."
      ],
      misconception: "A common mix-up is putting the comma too early. It goes after the whole opening part.",
      why: "The answer is \"Before the guests arrived,\" with a comma at the end. The comma marks where the opening part ends. One choice puts it after Before, and one puts it before arrived.",
      like: ["SK-GUM5-6-C10"]
    },
    {
      id: "SK-GUM5-6-S11",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: ["p6"],
      prompt: "Read lines 5 to 9. Which line has a comma problem?",
      targets: ["p6:2:1", "p6:2:2", "p6:2:3", "p6:2:4", "p6:2:5"],
      answer: ["p6:2:3"],
      pick: 1,
      clue: "Look at each line for an opening part. Ask whether a comma follows it.",
      hints: [
        "Look at each line for an opening part. Ask whether a comma follows it.",
        "Go through the five lines one by one. Pick ONE.",
        "In line 8, the comma follows the opening part, so it is correct. Check the other four."
      ],
      how: [
        "Check each line for an opening part and a comma.",
        "Lines 5 and 8 have a comma after their opening parts, line 6 ends with a part that needs no comma, and line 9 has no opening part.",
        "In line 7, \"As soon as the last note faded\" is an opening part, so a comma belongs after faded."
      ],
      misconception: "A common mix-up is choosing the line with a comma in it. Check whether any comma is missing.",
      why: "The answer is line 7, \"As soon as the last note faded we all grinned.\" It needs a comma after faded. Lines 5, 6, 8 and 9 are written correctly.",
      like: ["SK-GUM5-6-C11"]
    },
    {
      id: "SK-GUM5-6-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: [],
      prompt: "Pick the ending.",
      text: "Jo danced in the kitchen {0}.",
      slots: [
        {
          options: ["before the music began", ", before the music began", "before the music, began"],
          answer: 0
        }
      ],
      clue: "Ask whether the part about the music opens the sentence or closes it.",
      hints: [
        "Ask whether the part about the music opens the sentence or closes it.",
        "Say each choice after kitchen. Listen for whether a pause belongs there.",
        "One choice puts a comma in the middle of the part about the music. Decide between the other two."
      ],
      how: [
        "Read the sentence. The part about the music closes the sentence.",
        "A part that closes the sentence needs no comma before it.",
        "The answer is before the music began."
      ],
      misconception: "A common mix-up is adding a comma ahead of a closing part every time. A closing part needs no comma.",
      why: "The answer is before the music began. The part about the music closes the sentence, so no comma is needed. One choice adds a comma before it, and one puts a comma inside it.",
      like: ["SK-GUM5-6-C12"]
    },
    {
      id: "SK-GUM5-6-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: [],
      prompt: "Lia says, \"A sentence with while, because or although always needs a comma.\" Which TWO sentences show she is wrong?",
      pick: 2,
      choices: [
        { text: "We stayed inside while it stormed.", correct: true },
        { text: "If the roads freeze, school will close." },
        { text: "While the kettle whistled, Gran poured tea." },
        { text: "Tom smiled because the test was easy.", correct: true },
        { text: "Although the soup boiled, Dad added salt." }
      ],
      clue: "Lia thinks a comma is always needed with those words. Look for sentences that are correct without one.",
      hints: [
        "Lia thinks a comma is always needed with those words. Look for sentences that are correct without one.",
        "Pick TWO. Check each sentence that uses one of those words for its commas.",
        "In the sentence about the roads, a comma follows an opening part, which is correct. Decide about the other four."
      ],
      how: [
        "Look for sentences that use while, because or although and have no comma.",
        "\"We stayed inside while it stormed.\" and \"Tom smiled because the test was easy.\" are correct, and each closes with that part.",
        "The other three open with a part and a comma follows it, or use none of those words, so they do not show Lia is wrong."
      ],
      misconception: "A common mix-up is choosing the sentences that contain commas. Lia is wrong about sentences where the part closes the sentence.",
      why: "The answers are \"We stayed inside while it stormed.\" and \"Tom smiled because the test was easy.\" Each is correct with no comma because the part closes the sentence. The other three open with a part, so the comma follows it, or use none of those words.",
      like: ["SK-GUM5-6-C13"]
    },
    {
      id: "SK-GUM5-6-S14",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: [],
      prompt: "Fill both blanks so the commas are right.",
      text: "{0} Dad packed the car, and we ate breakfast {1}.",
      slots: [
        {
          options: ["While the kids slept,", "While the kids slept", "While, the kids slept"],
          answer: 0
        },
        {
          options: ["before we drove away", ", before we drove away", "before, we drove away"],
          answer: 0
        }
      ],
      clue: "Read the whole sentence. Ask which blank opens it and which blank closes it.",
      hints: [
        "Read the whole sentence. Ask which blank opens it and which blank closes it.",
        "Work on one blank at a time. Say each choice with the words next to it.",
        "In the second blank, one choice adds a comma before a closing part, which is not needed. Decide about the other choices."
      ],
      how: [
        "The first blank opens the sentence, so its opening part needs a comma at the end.",
        "The second blank closes the sentence, so no comma is needed in front of it.",
        "The answers are While the kids slept, and before we drove away."
      ],
      misconception: "A common mix-up is putting a comma in both blanks. Only the opening part needs one.",
      why: "The answers are \"While the kids slept,\" and \"before we drove away.\" The opening part needs a comma after it. The closing part needs none.",
      like: ["SK-GUM5-6-C14"]
    },
    {
      id: "SK-GUM5-6-S15",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses"
      ],
      passages: [],
      prompt: "Dana says the comma in \"If it rains, we will stay home\" only makes readers pause. Is Dana's claim right?",
      choices: [
        { text: "Dana is right, since commas only mark breath pauses, and a reader may add one anywhere." },
        { text: "Dana is wrong, since the comma tells where the first part stops and the plan starts.", correct: true },
        { text: "Dana is right, since any writer may drop it with no change." },
        { text: "Dana is wrong, since it splits two list items, rain and home." }
      ],
      clue: "Ask what comes before the comma and what comes after it.",
      hints: [
        "Ask what comes before the comma and what comes after it.",
        "Say the opening part by itself. Ask whether it feels finished.",
        "There is no list in the sentence, so a choice about list items cannot be right. Check the other choices."
      ],
      how: [
        "Read the sentence. The words before the comma tell a condition, and the words after it tell the plan.",
        "The comma tells readers where the first part stops and the plan starts, not just where to pause.",
        "The answer is \"Dana is wrong, since the comma tells where the first part stops and the plan starts.\""
      ],
      misconception: "A common mix-up is thinking a comma only shows a pause. This one marks the end of the opening part.",
      why: "The answer is \"Dana is wrong, since the comma tells where the first part stops and the plan starts.\" Dana is not correct, because the comma has a job beyond a pause.",
      like: ["SK-GUM5-6-C15"]
    }
  ],
  addons: {
    "SK-GUM5-6-P1": {
      hints: [
        "Find the opening part of each sentence. Ask where its main idea begins.",
        "Check whether each comma sits right at that spot.",
        "The sentence about the road puts its comma inside the main idea, which cuts it in two. Check the other choices."
      ],
      how: [
        "Find the opening part of each choice.",
        "In the movie sentence, the comma comes right after the opening part, \"When the movie ended.\"",
        "The answer is \"When the movie ended, we clapped and cheered.\""
      ],
      misconception: "A common mix-up is thinking any sentence with a comma is correct. The comma must come right after the opening part."
    },
    "SK-GUM5-6-P2": {
      hints: [
        "Ask which words make up the whole opening part.",
        "Say each choice, then the rest of the sentence. Listen for where you pause.",
        "One choice puts the comma right after As soon as, which cuts the opening part short. Decide between the other two."
      ],
      how: [
        "Read the sentence. The opening part tells when the kids ran outside.",
        "The comma goes at the end of the opening part.",
        "The answer is \"As soon as the rain stopped,\" with the comma at the end."
      ],
      misconception: "A common mix-up is placing the comma in the middle of the opening part. It belongs where that part ends."
    },
    "SK-GUM5-6-P3": {
      hints: [
        "Look for a sentence that starts with an opening part. Check for a comma before the main idea.",
        "Read the five sentences one at a time. Pick ONE.",
        "The sentence about the fire drill has its comma right after the opening part. Check the other four."
      ],
      how: [
        "Check each sentence for an opening part and a comma.",
        "The other four are correct, and one of them puts its while part at the end, where no comma is needed.",
        "\"While Dad cooked dinner in the kitchen we set the table.\" has an opening part with no comma after kitchen."
      ],
      misconception: "A common mix-up is picking the sentence that sounds odd. Look for the opening part with no comma after it."
    },
    "SK-GUM5-6-P4": {
      hints: [
        "Cover the opening part of each sentence. Ask whether the comma sits right before the main idea.",
        "Pick TWO. Check every sentence, including ones where the comma is missing or in the wrong place.",
        "In the sentence about the parade, the comma comes too early. Decide about the other four."
      ],
      how: [
        "Check each sentence for an opening part and the comma that goes with it.",
        "\"Since it was Grandpa's birthday, we baked a cake.\" and \"During the summer, we swim at the lake.\" each have the comma after the opening part.",
        "The other three are missing a comma or have it in the wrong place."
      ],
      misconception: "A common mix-up is picking a sentence because it has a comma somewhere. The comma must follow the whole opening part."
    },
    "SK-GUM5-6-P5": {
      hints: [
        "Find where the opening part stops.",
        "Say the sentence aloud and listen for the pause.",
        "A comma right after Because would leave the opening part with only one word. Check the other choices."
      ],
      how: [
        "Read the sentence. The opening part tells why we read books at home.",
        "The comma goes where the opening part ends, before the main idea.",
        "The answer is after closed."
      ],
      misconception: "A common mix-up is putting the comma after the first word. It belongs after the whole opening part."
    }
  },
  /* B8:core:end */
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
    tip: "This site cannot show underlining, so most questions check quotation marks and capital letters, and a few ask which titles are italicized or underlined. Look at every word in the title and ask: Is it a small word or an important word?"
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
    },
    {
      show: ["Pip is writing a report by hand about a picture book called Moose and the Marching Band."],
      ask: "How should Pip show the book title?",
      steps: [
        "Ask: Is it a whole book or a short work? A picture book is a whole book.",
        "A whole book is shown in italics when typed.",
        "Pip is writing by hand and cannot make italics, so Pip draws a line under the title."
      ],
      answer: "Pip underlines the title: Moose and the Marching Band."
    }
  ],
  parent: "Have your child write the title of a favorite book by hand and underline it, then write the name of a favorite song in quotation marks. Check together that the first word and the important words have capitals.",
  passages: [
    /* B8:passages:start */
    {
      id: "p1",
      title: "Story Exchange Day",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class held a story exchange day on Friday afternoon.",
          "(2) Each reader shared a short story with a friend.",
          "(3) Ana read \"The Weasel and the Teapot\" to her partner.",
          "(4) Her partner told a story called \"A Hedgehog on the Caboose.\""
        ],
        [
          "(5) Leo read \"marmalade for the Meerkat\" aloud.",
          "(6) The listeners laughed at the silly ending.",
          "(7) Rosa shared \"The Tuba in the Attic\" with the group.",
          "(8) Everyone voted for a favorite story."
        ],
        [
          "(9) Max chose \"The Zeppelin and The Dandelion\" for his turn.",
          "(10) The winner was the story The Brave Buttercup.",
          "(11) Mia smiled at \"A Ferret on the roof\" most of all.",
          "(12) We want to hold another exchange soon."
        ]
      ]
    },
    {
      id: "p2",
      title: "Sing and Share Hour",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Our music club met in the gym for sing and share hour on Tuesday.",
          "(2) Kai led the group in \"The Banjo and the Bagpipe.\"",
          "(3) Next we hummed \"Tambourine Parade\" while we clapped.",
          "(4) Dana sang \"a Kazoo for the King\" with a big grin."
        ],
        [
          "(5) Everyone clapped along to the song Marimba in the Snow.",
          "(6) Several of us tapped a steady beat on our desks.",
          "(7) Mrs. Cho taught us a new song called \"The Clover Waltz.\"",
          "(8) Our last song was Turnips For The Tuba and it was silly."
        ],
        [
          "(9) At the end, we sang \"Cobwebs and Candlelight\" as a group.",
          "(10) Then we all took a deep bow.",
          "(11) Everyone left the gym humming and smiling."
        ]
      ]
    },
    {
      id: "p3",
      title: "Poem Parade",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class made a poem parade for the hallway wall.",
          "(2) Every student chose a favorite poem to copy.",
          "(3) Zoe copied \"The Snowdrift and the Igloo\" in her best handwriting.",
          "(4) Some poems were funny and others were quiet."
        ],
        [
          "(5) Nora copied \"Moon on the Marmalade Sea\" neatly.",
          "(6) Theo wrote \"The Walrus and the Accordion\" in green marker.",
          "(7) Lily chose \"a Meerkat at the Window\" for her page.",
          "(8) Omar picked \"Ice Cream for the Ostrich\" with a smile.",
          "(9) Pia drew a bright border around her poem."
        ],
        [
          "(10) Our teacher added her own poem, \"Clover in the Orchard.\"",
          "(11) Other classes stopped to read the poems every morning.",
          "(12) We felt proud of our long wall."
        ]
      ]
    },
    {
      id: "p4",
      title: "Author Visit",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) A kind author came to visit our school on Monday.",
          "(2) She told us about stories she wrote as a child.",
          "(3) Her first story was \"Harmonica Hill.\"",
          "(4) She also wrote a poem called \"A Submarine at Sunrise.\""
        ],
        [
          "(5) Gus read aloud \"Windmills For Mules\" before lunch.",
          "(6) Everybody asked her many questions.",
          "(7) Ivy shared \"A Mermaid in a Bucket\" with our guest.",
          "(8) The author smiled at every answer."
        ],
        [
          "(9) Cal liked \"Robots at the ladder\" best.",
          "(10) Her last poem was Mittens for Pirates.",
          "(11) Fay picked \"a Castle in a Pocket\" for her favorite.",
          "(12) We asked her to visit us again.",
          "(13) She waved goodbye at the door.",
          "(14) We waved back until she left.",
          "(15) It was a fun morning.",
          "(16) We wrote thank-you notes after lunch."
        ]
      ]
    },
    {
      id: "p5",
      title: "Open Mic Friday",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) An open mic show filled the library on Friday.",
          "(2) Quinn strummed \"Ukulele Rain\" very softly.",
          "(3) Wes recited \"Tadpoles at Midnight\" without a pause.",
          "(4) Ruth sang \"the Mushroom Dance\" in a tiny voice."
        ],
        [
          "(5) The crowd cheered for the song Xylophone Sunrise.",
          "(6) Several kids waited quietly on a rug.",
          "(7) Mr. Dean read the poem \"Ladders to the Sky.\"",
          "(8) We ended the show with Pirates And Mermaids."
        ],
        [
          "(9) Everyone applauded \"Wizards of the Wind\" for one full minute.",
          "(10) Families clapped for a long time.",
          "(11) Parents hugged each performer.",
          "(12) Then the lights came on.",
          "(13) We all went home happy.",
          "(14) It was a great night.",
          "(15) Our teacher smiled at everyone."
        ]
      ]
    },
    {
      id: "p6",
      title: "Storytelling Circle",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Kids sat cross-legged to trade tall tales on Thursday.",
          "(2) Every teller used only memory and a loud voice.",
          "(3) Hana whispered \"A Castle on a Hill\" with spooky eyes.",
          "(4) A few tales were scary and a few were silly."
        ],
        [
          "(5) Ivan boomed \"The Giant Mitten\" with noisy sound effects.",
          "(6) Jada acted out \"Buckets for Wizards\" and made us giggle.",
          "(7) Kofi shared \"A Jar Of Stars\" with a grin.",
          "(8) Lena murmured \"Rivers for Robots\" without a hurry.",
          "(9) Milo flapped both arms and stomped his feet."
        ],
        [
          "(10) Our teacher closed with a story, \"A Candle on the Bridge.\"",
          "(11) Applause lasted until our palms stung.",
          "(12) Nobody wanted to go to lunch."
        ]
      ]
    }
    /* B8:passages:end */
  ],
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
          { ref: "SK-GUM5-7-P3" },
          { ref: "SK-GUM5-7-P4" },
          {
            id: "SK-GUM5-7-C03",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: ["p1"],
            prompt: "Which sentence from the draft writes its title correctly?",
            choices: [
              { text: "Ana read \"The Weasel and the Teapot\" to her partner.", correct: true },
              { text: "Max chose \"The Zeppelin and The Dandelion\" for his turn." },
              { text: "The winner was the story The Brave Buttercup." },
              { text: "Mia smiled at \"A Ferret on the roof\" most of all." }
            ],
            clue: "Look at the marks around each title, then at its capital letters.",
            hints: [
              "Look at the marks around each title, then at its capital letters.",
              "Check the first word, then the important words, then the small words in the middle.",
              "The sentence about the winner has no quotation marks around its title. Check the other choices."
            ],
            how: [
              "Check the marks and the capital letters in each title.",
              "In \"Ana read \"The Weasel and the Teapot\" to her partner.\" the title has quotation marks, capitals on The, Weasel and Teapot, and lowercase and and the.",
              "The answer is \"Ana read \"The Weasel and the Teapot\" to her partner.\""
            ],
            misconception: "A common mix-up is picking the sentence with the most capital letters. Small words in the middle of a title stay lowercase.",
            why: "The answer is \"Ana read \"The Weasel and the Teapot\" to her partner.\" The title has quotation marks, and every capital letter is in the right place. One title capitalizes a small word, one has no quotation marks, and one has a lowercase last word."
          },
          {
            id: "SK-GUM5-7-C04",
            type: "ebsr",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Which sentence in paragraph 2 of the draft has a mistake in its title?",
              choices: [
                { text: "The listeners laughed at the silly ending." },
                { text: "Leo read \"marmalade for the Meerkat\" aloud.", correct: true },
                { text: "Rosa shared \"The Tuba in the Attic\" with the group." },
                { text: "Everyone voted for a favorite story." }
              ]
            },
            partB: {
              prompt: "Which statement explains the mistake in the sentence from Part A?",
              choices: [
                { text: "The first word of a title always gets a capital letter, so marmalade should begin with M.", correct: true },
                { text: "Meerkat is a small word in the middle, so it should be written with a lowercase m." },
                { text: "A story title belongs in italics, so the quotation marks around it should be erased from the sentence." },
                { text: "The word for counts as an important word, so this title needs a capital there." }
              ]
            },
            clue: "Read each sentence in paragraph 2. Check any title for its marks and capital letters.",
            hints: [
              "Read each sentence in paragraph 2. Check any title for its marks and capital letters.",
              "Check the first word of each title, then the important words, then the small words.",
              "The sentence about Rosa has a title with every capital letter in the right place. Check the other three."
            ],
            how: [
              "Part A: read each sentence in paragraph 2 and check any title.",
              "In \"Leo read \"marmalade for the Meerkat\" aloud.\" the first word of the title starts with a lowercase letter.",
              "Part A answer: Leo read \"marmalade for the Meerkat\" aloud.",
              "Part B answer: \"The first word of a title always gets a capital letter, so marmalade should begin with M.\""
            ],
            misconception: "A common mix-up is thinking a lowercase first word is fine because it is a small word. The first word of a title always gets a capital letter.",
            why: "Part A: Leo read \"marmalade for the Meerkat\" aloud. Part B: \"The first word of a title always gets a capital letter, so marmalade should begin with M.\" The title should be \"Marmalade for the Meerkat.\" The other sentences are written correctly."
          },
          {
            id: "SK-GUM5-7-C05",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: [],
            prompt: "Choose the TWO sentences that write the title correctly.",
            pick: 2,
            choices: [
              { text: "Sam acted out \"The Ferret and The Pelican\" at recess." },
              { text: "Grandpa sang \"The Bugle in the Barn\" to the cows.", correct: true },
              { text: "Ellie hummed \"the Caboose Song\" all day." },
              { text: "Tia loves the song Buttercup Boogie." },
              { text: "We read the poem \"A Turnip for the Walrus\" in class.", correct: true }
            ],
            clue: "Check the marks around each title. Then check the capital letters.",
            hints: [
              "Check the marks around each title. Then check the capital letters.",
              "Pick TWO. Look at the first word, the important words and the small words in the middle.",
              "The sentence about Tia has no quotation marks around its title. Decide about the other four."
            ],
            how: [
              "Check each title for quotation marks and for correct capital letters.",
              "\"Grandpa sang \"The Bugle in the Barn\" to the cows.\" and \"We read the poem \"A Turnip for the Walrus\" in class.\" each have quotation marks, a capital on the first word, and lowercase small words in the middle.",
              "The other three have a lowercase first word, a capital on a small word, or no quotation marks."
            ],
            misconception: "A common mix-up is picking the title that has the most capital letters. Small words in the middle of a title stay lowercase.",
            why: "The answers are \"Grandpa sang \"The Bugle in the Barn\" to the cows.\" and \"We read the poem \"A Turnip for the Walrus\" in class.\" Each title is a short work with quotation marks and correct capitals. The other three have a lowercase first word, a capital on a small word, or no quotation marks."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM5-7-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: ["p2"],
            prompt: "Look at sentences 2 through 6 of the draft. Select the TWO sentences with a mistake in a title.",
            targets: ["p2:1:2", "p2:1:3", "p2:1:4", "p2:2:1", "p2:2:2"],
            answer: ["p2:1:4", "p2:2:1"],
            pick: 2,
            clue: "Check each sentence for a title. Ask whether its marks and capital letters are right.",
            hints: [
              "Check each sentence for a title. Ask whether its marks and capital letters are right.",
              "Read the five sentences one at a time. Pick TWO.",
              "In sentence 6, there is no title to check, so it has no mistake. Check the other four."
            ],
            how: [
              "Check each title for quotation marks and capital letters.",
              "In sentence 4, the title starts with a lowercase letter, so a should be A.",
              "In sentence 5, the title has no quotation marks around it.",
              "Sentences 2 and 3 are written correctly, and sentence 6 has no title."
            ],
            misconception: "A common mix-up is thinking every mistake is a capital letter. One mistake here is missing quotation marks.",
            why: "The answers are sentence 4 and sentence 5. In sentence 4, the title should start with a capital A. In sentence 5, the song title needs quotation marks. Sentences 2 and 3 are written correctly, and sentence 6 has no title."
          },
          {
            id: "SK-GUM5-7-C07",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: [],
            prompt: "Which marks does each title take?",
            cols: ["Quotation marks", "Italics (underline by hand)"],
            rows: [
              { text: "the song Pickle Parade", answer: 0 },
              { text: "the picture book Otter Island", answer: 1 },
              { text: "the short story The Tin Whistle", answer: 0 },
              { text: "the book Penguin Express", answer: 1 }
            ],
            clue: "Ask whether each title names a whole book or a short work.",
            hints: [
              "Ask whether each title names a whole book or a short work.",
              "Do one row at a time. Ask what kind of work it is before you decide.",
              "In the row about the short story, the title belongs to a short work. Decide about the other rows."
            ],
            how: [
              "Look at what kind of work each title names.",
              "Songs and short stories are short works, so their titles go in quotation marks.",
              "The picture book and the book are whole books, so their titles go in italics when typed or are underlined by hand."
            ],
            misconception: "A common mix-up is putting every title in quotation marks. Whole books use italics or underlining.",
            why: "The song and the short story are short works, so their titles go in quotation marks. The picture book and the book are whole books, so their titles go in italics when typed or are underlined by hand."
          },
          {
            id: "SK-GUM5-7-C08",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: ["p2"],
            prompt: "Sentence 8 of the draft has a title that is not written correctly. Choose the title that fixes it.",
            text: "Our last song was {0} and it was silly.",
            slots: [
              {
                options: ["\"Turnips for the Tuba\"", "\"Turnips For the Tuba\"", "\"Turnips for the tuba\""],
                answer: 0
              }
            ],
            clue: "Ask which words in the title are important and which are small.",
            hints: [
              "Ask which words in the title are important and which are small.",
              "Say each choice and check its capital letters.",
              "One choice makes the last word lowercase, but the last word of a title is always capitalized. Decide between the other two."
            ],
            how: [
              "Read sentence 8. The title names a song, a short work, so it goes in quotation marks.",
              "Turnips and Tuba are important words, and for is a small word in the middle, so it stays lowercase.",
              "The answer is \"Turnips for the Tuba\" with quotation marks."
            ],
            misconception: "A common mix-up is capitalizing a small word because it looks important. Small words in the middle of a title stay lowercase.",
            why: "The answer is \"Turnips for the Tuba\" with quotation marks. The draft shows the title with no quotation marks and with capitals on small words. One choice capitalizes For, and one lowercases the last word."
          },
          {
            id: "SK-GUM5-7-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: [],
            prompt: "Sam wrote the poem title \"Moon on the Pond\" with quotation marks. Ava wrote the same title with a line under it. Who is right, and why?",
            choices: [
              { text: "Ava is right, since every title gets a line under it, whatever work it names." },
              { text: "Ava is right, because a poem is long enough to count as a whole book." },
              { text: "Sam is right, since a poem is short and its title takes quotation marks.", correct: true },
              { text: "Both are right, since marks never matter when the capital letters are correct." }
            ],
            clue: "Ask whether a poem is a whole book or something you read in a minute.",
            hints: [
              "Ask whether a poem is a whole book or something you read in a minute.",
              "Think about which kind of work gets quotation marks and which kind gets a line under it.",
              "A poem is not a whole book, so the answer cannot say it counts as one. Check the other choices."
            ],
            how: [
              "Think about the kind of work: a poem is short, not a whole book.",
              "Titles of short works go in quotation marks, and titles of whole books are underlined when written by hand.",
              "The answer is \"Sam is right, since a poem is short and its title takes quotation marks.\""
            ],
            misconception: "A common mix-up is thinking every title is underlined. Only whole books are underlined by hand.",
            why: "The answer is \"Sam is right, since a poem is short and its title takes quotation marks.\" A line under a title is for a whole book."
          },
          {
            id: "SK-GUM5-7-C10",
            type: "dropdown",
            points: 1,
            dok: 1,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: [],
            prompt: "Which choice shows the poem title written correctly?",
            text: "{0} was the funniest poem in the book.",
            slots: [
              {
                options: ["\"Cheese for the Chimp\"", "\"Cheese For the Chimp\"", "Cheese for the Chimp"],
                answer: 0
              }
            ],
            clue: "Ask what kind of work the title names and which words need capitals.",
            hints: [
              "Ask what kind of work the title names and which words need capitals.",
              "Say each choice and check the marks around it.",
              "One choice has no quotation marks at all. Decide between the other two."
            ],
            how: [
              "Read the choices. A poem is a short work, so its title goes in quotation marks.",
              "Cheese and Chimp are important words, and for and the are small words in the middle, so they stay lowercase.",
              "The answer is \"Cheese for the Chimp\" with quotation marks."
            ],
            misconception: "A common mix-up is leaving off quotation marks. The title of a poem goes inside them.",
            why: "The answer is \"Cheese for the Chimp\" in quotation marks. A poem title goes in quotation marks, and for and the stay lowercase in the middle. One choice has no quotation marks, and one capitalizes For."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM5-7-C11",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: ["p3"],
            prompt: "Look at sentences 5 through 9 of the draft. Select the sentence with a mistake in a title.",
            targets: ["p3:2:1", "p3:2:2", "p3:2:3", "p3:2:4", "p3:2:5"],
            answer: ["p3:2:3"],
            pick: 1,
            clue: "Check each sentence for a title. Ask whether its marks and capital letters are right.",
            hints: [
              "Check each sentence for a title. Ask whether its marks and capital letters are right.",
              "Read the five sentences one at a time. Pick ONE.",
              "The sentence about Omar has a title with every capital letter in the right place. Check the other four."
            ],
            how: [
              "Check each title for quotation marks and capital letters.",
              "Sentences 5, 6 and 8 have titles written correctly, and sentence 9 has no title.",
              "In sentence 7, the title starts with a lowercase letter, so a should be A."
            ],
            misconception: "A common mix-up is picking the sentence with the most small words. Small words in the middle of a title are meant to be lowercase.",
            why: "The answer is sentence 7, \"Lily chose \"a Meerkat at the Window\" for her page.\" The first word of a title always gets a capital letter, so it should be \"A Meerkat at the Window.\" Sentences 5, 6 and 8 are written correctly, and sentence 9 has no title."
          },
          {
            id: "SK-GUM5-7-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: [],
            prompt: "Which title fits the blank?",
            text: "Mr. Reyes announced a story named \"{0}\" at assembly.",
            slots: [
              {
                options: ["Pigs in the Rain", "Pigs In the Rain", "pigs in the Rain"],
                answer: 0
              }
            ],
            clue: "Ask which words in the title are important and which are small.",
            hints: [
              "Ask which words in the title are important and which are small.",
              "Say each choice and look at its first letter and its small words.",
              "One choice starts with a lowercase letter, but the first word always gets a capital. Decide between the other two."
            ],
            how: [
              "Read the sentence. The quotation marks are already there, so only the capital letters matter.",
              "Pigs and Rain are important words, and in and the are small words in the middle, so they stay lowercase.",
              "The answer is Pigs in the Rain."
            ],
            misconception: "A common mix-up is capitalizing a small word because it sits in a title. Small words in the middle stay lowercase.",
            why: "The answer is Pigs in the Rain. Pigs and Rain are important words, and in and the are small words in the middle. One choice capitalizes In, and one starts with a lowercase letter."
          },
          {
            id: "SK-GUM5-7-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: [],
            prompt: "Pat says, \"Every word in a title needs a capital letter.\" Choose the TWO titles that show Pat is wrong.",
            pick: 2,
            choices: [
              { text: "The Giant Mushroom" },
              { text: "The Pelican and the Bagpipe", correct: true },
              { text: "Silver Spoon Soup" },
              { text: "Honey for the Bear", correct: true },
              { text: "Rainy Day Parade" }
            ],
            clue: "Pat says every word needs a capital letter. Look for titles where some words stay lowercase.",
            hints: [
              "Pat says every word needs a capital letter. Look for titles where some words stay lowercase.",
              "Pick TWO. Check each title for small words in the middle.",
              "The title about the mushroom has a capital on every word. Decide about the other four."
            ],
            how: [
              "Look for titles with small words in the middle.",
              "\"The Pelican and the Bagpipe\" and \"Honey for the Bear\" are written correctly, and each has lowercase small words in the middle.",
              "The other three have a capital on every word, so they do not show Pat is wrong."
            ],
            misconception: "A common mix-up is choosing titles with the most capitals. Pat is wrong about titles that have small words in the middle.",
            why: "The answers are \"The Pelican and the Bagpipe\" and \"Honey for the Bear.\" In each, small words in the middle stay lowercase, so not every word has a capital. The other three have a capital on every word."
          },
          {
            id: "SK-GUM5-7-C14",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: [],
            prompt: "Is each title written correctly, or does it have a mistake?",
            cols: ["Written correctly", "Has a mistake"],
            rows: [
              { text: "Fish for the Heron", answer: 0 },
              { text: "A Bagpipe on The Hill", answer: 1 },
              { text: "the Last Snowflake", answer: 1 },
              { text: "Soup in the Pitcher", answer: 0 }
            ],
            clue: "Check the first word, then the important words, then the small words in each title.",
            hints: [
              "Check the first word, then the important words, then the small words in each title.",
              "Do one row at a time. Say the title and look at each capital letter.",
              "In the row about the heron, the small words are lowercase, which is right. Decide about the other rows."
            ],
            how: [
              "Look at the capital letters in each row.",
              "\"Fish for the Heron\" and \"Soup in the Pitcher\" have capitals on the first and important words and lowercase small words.",
              "\"A Bagpipe on The Hill\" capitalizes a small word, and \"the Last Snowflake\" has a lowercase first word."
            ],
            misconception: "A common mix-up is thinking a capital on every word makes a title correct. Small words in the middle stay lowercase.",
            why: "\"Fish for the Heron\" and \"Soup in the Pitcher\" are written correctly. \"A Bagpipe on The Hill\" has a capital on the small word The, and \"the Last Snowflake\" has a lowercase first word."
          },
          {
            id: "SK-GUM5-7-C15",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
            ],
            passages: [],
            prompt: "Jin typed \"The Goat And The Pie\" as a story title. He says every word in a title gets a capital. Is Jin right?",
            choices: [
              { text: "Yes. Every word in a title always gets a capital letter, so Jin wrote it correctly." },
              { text: "No. And and the are small words in the middle of a title, so they stay lowercase.", correct: true },
              { text: "Yes. And is an important word because it joins two things, so it earns a capital letter." },
              { text: "No. Only the last word of a title gets a capital letter, so all the other words should be lowercase." }
            ],
            clue: "Sort the words in the title into two groups.",
            hints: [
              "Sort the words in the title into two groups.",
              "Think about what and and the do inside a title.",
              "The first and last words of a title are always capitalized, so the answer cannot say that only the last word gets a capital. Check the other choices."
            ],
            how: [
              "Look at the middle of the title: And and The are small words.",
              "Small words in the middle of a title stay lowercase, so the title should be \"The Goat and the Pie.\"",
              "The answer is \"No. And and the are small words in the middle of a title, so they stay lowercase.\""
            ],
            misconception: "A common mix-up is thinking every word in a title needs a capital. Small words in the middle stay lowercase.",
            why: "The answer is \"No. And and the are small words in the middle of a title, so they stay lowercase.\" The title should be \"The Goat and the Pie.\" Jin is not right."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM5-7-S01",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: [],
      prompt: "Which line has a title written the wrong way?",
      options: [
        "Gran whistles \"Pretzel Boogie\" when she paints.",
        "Aunt Kay recited \"The Mouse and the Magnet\" at rest time.",
        "Bo hummed \"the Lemon Train\" on the way home.",
        "Uncle Raj read \"Pillow Mountain\" aloud last night.",
        "Eli penned \"Stars for the Fisherman\" in poem club."
      ],
      answer: [2],
      pick: 1,
      clue: "Look at the first word of every title. Then look at each important word.",
      hints: [
        "Look at the first word of every title. Then look at each important word.",
        "Read the five sentences one at a time. Pick ONE.",
        "The sentence about Eli has a title with every capital letter in the right place. Check the other four."
      ],
      how: [
        "Check each title for quotation marks and capital letters.",
        "Four of the titles start with a capital letter, and the small words in the middle are lowercase.",
        "In \"Bo hummed \"the Lemon Train\" on the way home.\" the first word of the title starts with a lowercase letter."
      ],
      misconception: "A common mix-up is picking a title that has small words in the middle. Those small words are meant to be lowercase.",
      why: "The answer is \"Bo hummed \"the Lemon Train\" on the way home.\" The first word of a title always gets a capital letter, so it should be \"The Lemon Train.\" The other sentences write their titles correctly.",
      like: ["SK-GUM5-7-P3"]
    },
    {
      id: "SK-GUM5-7-S02",
      type: "dropdown",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: [],
      prompt: "Which way of writing the song's name is right?",
      text: "Pat hummed the song {0} on the bus.",
      slots: [
        {
          options: ["\"The Lemon Wagon\"", "\"The lemon Wagon\"", "The Lemon Wagon"],
          answer: 0
        }
      ],
      clue: "A song is a short work. Check the marks around the name.",
      hints: [
        "A song is a short work. Check the marks around the name.",
        "Then check the capital on each important word.",
        "One choice has no quotation marks at all. Decide between the other two."
      ],
      how: [
        "A song is a short work, so its title goes in quotation marks.",
        "The, Lemon and Wagon are the first word and an important word each, so they get capitals.",
        "The answer is \"The Lemon Wagon\" with quotation marks."
      ],
      misconception: "A common mix-up is leaving off the quotation marks. The title of a song goes inside them.",
      why: "The answer is \"The Lemon Wagon\" in quotation marks. A song title goes in quotation marks, and the first word and the important words get capitals. One choice has a lowercase lemon, and one has no quotation marks.",
      like: ["SK-GUM5-7-P4"]
    },
    {
      id: "SK-GUM5-7-S03",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: ["p4"],
      prompt: "Pick the line where the title is done right.",
      choices: [
        { text: "Cal liked \"Robots at the ladder\" best." },
        { text: "Her last poem was Mittens for Pirates." },
        { text: "Fay picked \"a Castle in a Pocket\" for her favorite." },
        { text: "We all loved \"Harmonica Hill\" most of all.", correct: true }
      ],
      clue: "Check the marks around each title and then its capital letters.",
      hints: [
        "Check the marks around each title and then its capital letters.",
        "Look at the opening word, the important words, and the small words in the middle.",
        "The line about her last poem has no quotation marks around its title. Check the other choices."
      ],
      how: [
        "Check the marks and the capital letters in each title.",
        "In \"We all loved \"Harmonica Hill\" most of all.\" the title has quotation marks and a capital on each important word.",
        "The answer is \"We all loved \"Harmonica Hill\" most of all.\""
      ],
      misconception: "A common mix-up is trusting a line because it looks neat. Check each mark and each capital letter.",
      why: "The answer is \"We all loved \"Harmonica Hill\" most of all.\" Its title has quotation marks and correct capitals. One title has a lowercase last word, one has no quotation marks, and one has a lowercase first word.",
      like: ["SK-GUM5-7-C03"]
    },
    {
      id: "SK-GUM5-7-S04",
      type: "ebsr",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: ["p4"],
      prompt: "Two steps follow.",
      partA: {
        prompt: "Find the line in the second paragraph whose title looks wrong.",
        choices: [
          { text: "Everybody asked her many questions." },
          { text: "Ivy shared \"A Mermaid in a Bucket\" with our guest." },
          { text: "Gus read aloud \"Windmills For Mules\" before lunch.", correct: true },
          { text: "The author smiled at every answer." }
        ]
      },
      partB: {
        prompt: "Pick the best fix for that line.",
        choices: [
          { text: "Lowercase For, since small words in the middle stay lowercase.", correct: true },
          { text: "Lowercase Windmills, since only the first word gets a capital." },
          { text: "Erase the quotation marks, since stories get underlined." },
          { text: "Lowercase Mules, since the last word stays lowercase." }
        ]
      },
      clue: "Read each line in the second paragraph. Check any title for its marks and capital letters.",
      hints: [
        "Read each line in the second paragraph. Check any title for its marks and capital letters.",
        "Look at the first word of each title, then the important words, then the small words.",
        "The line about Ivy has a title with every capital letter in the right place. Check the other three."
      ],
      how: [
        "Part A: read each line in the second paragraph and check any title.",
        "In \"Gus read aloud \"Windmills For Mules\" before lunch.\" the small word For has a capital letter.",
        "Part A answer: Gus read aloud \"Windmills For Mules\" before lunch.",
        "Part B answer: \"Lowercase For, since small words in the middle stay lowercase.\""
      ],
      misconception: "A common mix-up is changing an important word. The small word in the middle is the one that needs fixing.",
      why: "Part A: Gus read aloud \"Windmills For Mules\" before lunch. Part B: \"Lowercase For, since small words in the middle stay lowercase.\" The title should be \"Windmills for Mules.\" The other lines are written correctly.",
      like: ["SK-GUM5-7-C04"]
    },
    {
      id: "SK-GUM5-7-S05",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: [],
      prompt: "Find TWO lines that show the song or poem name done right.",
      pick: 2,
      choices: [
        { text: "Roy whistled the song \"Ladders to Stars\" at breakfast.", correct: true },
        { text: "Ty hummed \"Lanterns For Harbors\" quietly all morning." },
        { text: "Beth chanted the poem \"Pebbles for Giants\" on stage.", correct: true },
        { text: "Mia adores the story Sparks and Sundaes." },
        { text: "Jo whispered \"the Tiny Dragon\" to her cat." }
      ],
      clue: "Look at the marks around each title, then check how the words are capitalized.",
      hints: [
        "Look at the marks around each title, then check how the words are capitalized.",
        "Pick TWO. Check lines where a mark or a capital is missing, or where one is not needed.",
        "The line about the story has no quotation marks around the title. Decide about the other four."
      ],
      how: [
        "Check each line for quotation marks and for correct capital letters.",
        "\"Beth chanted the poem \"Pebbles for Giants\" on stage.\" and \"Roy whistled the song \"Ladders to Stars\" at breakfast.\" each have quotation marks and correct capitals.",
        "The other three have a lowercase first word, no quotation marks, or a capital on a small word."
      ],
      misconception: "A common mix-up is picking a line because it has many capitals. The small words in the middle of a title stay lowercase.",
      why: "The answers are \"Beth chanted the poem \"Pebbles for Giants\" on stage.\" and \"Roy whistled the song \"Ladders to Stars\" at breakfast.\" Each title has quotation marks and correct capitals. One line has a lowercase first word, one has no quotation marks, and one capitalizes a small word.",
      like: ["SK-GUM5-7-C05"]
    },
    {
      id: "SK-GUM5-7-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: ["p5"],
      prompt: "Mark both lines from 2 to 6 where a song or poem name is written wrongly.",
      targets: ["p5:1:2", "p5:1:3", "p5:1:4", "p5:2:1", "p5:2:2"],
      answer: ["p5:1:4", "p5:2:1"],
      pick: 2,
      clue: "Look at each line for a title. Check its marks and its capital letters.",
      hints: [
        "Look at each line for a title. Check its marks and its capital letters.",
        "Go through the five lines one by one. Pick TWO.",
        "In line 6, there is no title, so it has no title mistake. Check the other four."
      ],
      how: [
        "Check each title for quotation marks and capital letters.",
        "In line 4, the title starts with a lowercase letter, so the t should be T.",
        "In line 5, the title has no quotation marks around it.",
        "Lines 2 and 3 are written correctly, and line 6 has no title."
      ],
      misconception: "A common mix-up is thinking every mistake is about capitals. One mistake here is missing quotation marks.",
      why: "The answers are line 4 and line 5. In line 4, the title should begin with a capital T. In line 5, the song title needs quotation marks. Lines 2 and 3 are written correctly, and line 6 has no title.",
      like: ["SK-GUM5-7-C06"]
    },
    {
      id: "SK-GUM5-7-S07",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: [],
      prompt: "How would each name look in a handwritten report?",
      cols: ["Underlined", "In quotation marks"],
      rows: [
        { text: "a poem named Honeybee Hour", answer: 1 },
        { text: "a joke book named Giggle Garage", answer: 0 },
        { text: "a song named Rocket Rhumba", answer: 1 },
        { text: "a whole book of riddles named Cricket Corner", answer: 0 }
      ],
      clue: "Ask whether each name belongs to a whole book or to a short piece.",
      hints: [
        "Ask whether each name belongs to a whole book or to a short piece.",
        "Take one row at a time. Name the kind of work before you decide.",
        "In the row about the poem, the name belongs to a short piece. Decide about the other rows."
      ],
      how: [
        "Look at what kind of work each name belongs to.",
        "Poems and songs are short works, so their titles go in quotation marks.",
        "A joke book and a book of riddles are whole books, so their titles are underlined when written by hand."
      ],
      misconception: "A common mix-up is using quotation marks for every title. Whole books are underlined by hand.",
      why: "The poem and the song are short works, so their titles go in quotation marks. The joke book and the book of riddles are whole books, so their titles are underlined when written by hand.",
      like: ["SK-GUM5-7-C07"]
    },
    {
      id: "SK-GUM5-7-S08",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: ["p5"],
      prompt: "Line 8 shows a song name written wrongly. Pick the repair.",
      text: "We ended the show with {0}",
      slots: [
        {
          options: ["\"Pirates and Mermaids.\"", "\"Pirates And Mermaids.\"", "\"Pirates and mermaids.\""],
          answer: 0
        }
      ],
      clue: "Think about which words in the title are important and which one is small.",
      hints: [
        "Think about which words in the title are important and which one is small.",
        "Say each choice and look at its capital letters.",
        "One choice has a lowercase last word, but a last word is always capitalized. Decide between the other two."
      ],
      how: [
        "Read line 8. The title is a short work, so it goes in quotation marks.",
        "Pirates and Mermaids are important words, and the middle word and is small, so it stays lowercase.",
        "The answer is \"Pirates and Mermaids.\" with quotation marks."
      ],
      misconception: "A common mix-up is capitalizing a joining word. A small word in the middle of a title stays lowercase.",
      why: "The answer is \"Pirates and Mermaids.\" Pirates and Mermaids are important words, and the word between them is small. One choice capitalizes And, and one lowercases the last word.",
      like: ["SK-GUM5-7-C08"]
    },
    {
      id: "SK-GUM5-7-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: [],
      prompt: "Kofi typed Penguin Parade, a whole book, in italics. Lena typed it in quotation marks. Which classmate is correct?",
      choices: [
        { text: "Lena: italics are only for stories." },
        { text: "Kofi: books are typed in italics.", correct: true },
        { text: "Lena: all titles use quotation marks." },
        { text: "Neither: typed titles stay plain." }
      ],
      clue: "Ask whether Penguin Parade is a whole book or a short piece.",
      hints: [
        "Ask whether Penguin Parade is a whole book or a short piece.",
        "Think about how a typed whole book is shown and how a typed short piece is shown.",
        "A typed book title is not left plain, so one choice cannot be right. Check the other choices."
      ],
      how: [
        "Think about the kind of work: Penguin Parade is a whole book.",
        "A whole book is shown in italics when typed, and a short story, poem or song goes in quotation marks.",
        "The answer is \"Kofi: books are typed in italics.\""
      ],
      misconception: "A common mix-up is putting every title in quotation marks. Whole books use italics or underlining.",
      why: "The answer is \"Kofi: books are typed in italics.\" Quotation marks are for short works such as songs and poems.",
      like: ["SK-GUM5-7-C09"]
    },
    {
      id: "SK-GUM5-7-S10",
      type: "dropdown",
      points: 1,
      dok: 1,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: [],
      prompt: "Pick the right way to write the song.",
      text: "Beth sang {0} after supper.",
      slots: [
        {
          options: ["\"Pickles in the Pool\"", "\"pickles in the Pool\"", "Pickles in the Pool"],
          answer: 0
        }
      ],
      clue: "Ask what kind of work the title names and which words need capitals.",
      hints: [
        "Ask what kind of work the title names and which words need capitals.",
        "Read each choice aloud and check the marks around it, then its first letter.",
        "One choice has no quotation marks at all. Decide between the other two."
      ],
      how: [
        "Read the choices. A song is a short work, so its title goes in quotation marks.",
        "Pickles and Pool are important words, and in and the are small words in the middle, so they stay lowercase.",
        "The answer is \"Pickles in the Pool\" with quotation marks."
      ],
      misconception: "A common mix-up is leaving off quotation marks. The title of a song goes inside them.",
      why: "The answer is \"Pickles in the Pool\" in quotation marks. A song title goes in quotation marks, and the first word always gets a capital. One choice has no quotation marks, and one starts with a lowercase letter.",
      like: ["SK-GUM5-7-C10"]
    },
    {
      id: "SK-GUM5-7-S11",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: ["p6"],
      prompt: "Read lines 5 to 9. Which line has a title mistake?",
      targets: ["p6:2:1", "p6:2:2", "p6:2:3", "p6:2:4", "p6:2:5"],
      answer: ["p6:2:3"],
      pick: 1,
      clue: "Look at each line for a title. Check its marks and its capital letters.",
      hints: [
        "Look at each line for a title. Check its marks and its capital letters.",
        "Go through the five lines one by one. Pick ONE.",
        "The line about Lena has a title with every capital letter in the right place. Check the other four."
      ],
      how: [
        "Check each title for quotation marks and capital letters.",
        "Lines 5, 6 and 8 have titles written correctly, and line 9 has no title.",
        "In line 7, the title capitalizes the small word Of in the middle."
      ],
      misconception: "A common mix-up is picking the line whose title is longest. Check each small word in the middle.",
      why: "The answer is line 7, \"Kofi shared \"A Jar Of Stars\" with a grin.\" The small word of stays lowercase in the middle of a title, so it should be \"A Jar of Stars.\" Lines 5, 6 and 8 are written correctly, and line 9 has no title.",
      like: ["SK-GUM5-7-C11"]
    },
    {
      id: "SK-GUM5-7-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: [],
      prompt: "Which title did Gran sing?",
      text: "Gran sang \"{0}\" while supper cooked.",
      slots: [
        {
          options: ["Ladders to the Moon", "Ladders To the Moon", "ladders to the Moon"],
          answer: 0
        }
      ],
      clue: "Think about which words in the title are important and which are small.",
      hints: [
        "Think about which words in the title are important and which are small.",
        "Try each choice. Compare first letters and small words.",
        "One choice makes the first word lowercase, but a first word always gets a capital. Decide between the other two."
      ],
      how: [
        "Read the line. The quotation marks are already there, so only the capital letters matter.",
        "Ladders and Moon are important words, and to and the are small words in the middle, so they stay lowercase.",
        "The answer is Ladders to the Moon."
      ],
      misconception: "A common mix-up is capitalizing a small word in the middle. Words like to and the stay lowercase there.",
      why: "The answer is Ladders to the Moon. Ladders and Moon are important words, and to and the are small words in the middle. One choice capitalizes To, and one starts with a lowercase letter.",
      like: ["SK-GUM5-7-C12"]
    },
    {
      id: "SK-GUM5-7-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: [],
      prompt: "Rae claims small words must always start with a capital. Which TWO titles prove her wrong?",
      pick: 2,
      choices: [
        { text: "Mittens for the Penguin", correct: true },
        { text: "Wobbly Yellow Boat" },
        { text: "Cheerful Brown Pony" },
        { text: "The Tiny Pumpkin" },
        { text: "The Cat in the Rain", correct: true }
      ],
      clue: "Rae makes a claim about small words. Look for titles that keep small words lowercase.",
      hints: [
        "Rae makes a claim about small words. Look for titles that keep small words lowercase.",
        "Pick TWO. Check each title for small words in the middle.",
        "The title about the pumpkin has a capital on every word. Decide about the other four."
      ],
      how: [
        "Look for titles with small words in the middle.",
        "\"Mittens for the Penguin\" and \"The Cat in the Rain\" each keep small words lowercase in the middle, so they prove Rae wrong.",
        "The other three have a capital on every word, so they say nothing against Rae."
      ],
      misconception: "A common mix-up is picking titles with many capitals. Rae is wrong about titles that have small words in the middle.",
      why: "The answers are \"Mittens for the Penguin\" and \"The Cat in the Rain.\" Each has small words that stay lowercase in the middle. The other three have a capital on every word.",
      like: ["SK-GUM5-7-C13"]
    },
    {
      id: "SK-GUM5-7-S14",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: [],
      prompt: "Sort the titles: right or wrong?",
      cols: ["Right", "Wrong"],
      rows: [
        { text: "Plums for the Giraffe", answer: 0 },
        { text: "The Mouse In the Boat", answer: 1 },
        { text: "an Elephant at the Door", answer: 1 },
        { text: "Snow on the Chimney", answer: 0 }
      ],
      clue: "Look at the first word, then the important words, then the small words in each title.",
      hints: [
        "Look at the first word, then the important words, then the small words in each title.",
        "Take one row at a time. Say the title and check each capital letter.",
        "In the row about the chimney, the small words are lowercase, which is correct. Decide about the other rows."
      ],
      how: [
        "Look at the capital letters in each row.",
        "\"Plums for the Giraffe\" and \"Snow on the Chimney\" have capitals on the first and important words and lowercase small words.",
        "\"The Mouse In the Boat\" capitalizes a small word, and \"an Elephant at the Door\" has a lowercase first word."
      ],
      misconception: "A common mix-up is thinking every capital is a good sign. A small word in the middle should not have one.",
      why: "\"Plums for the Giraffe\" and \"Snow on the Chimney\" are right. \"The Mouse In the Boat\" has a capital on the small word In, and \"an Elephant at the Door\" has a lowercase first word.",
      like: ["SK-GUM5-7-C14"]
    },
    {
      id: "SK-GUM5-7-S15",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar"
      ],
      passages: [],
      prompt: "Cora wrote \"the Frog And the Lamp\" as her story title. What should she change?",
      choices: [
        { text: "Start with T, and capitalize each remaining word." },
        { text: "Lowercase Frog, since just the opening word is capitalized." },
        { text: "Start with T, and make And lowercase.", correct: true },
        { text: "Capitalize the second the, since every small word needs it." }
      ],
      clue: "Check the first word of the title. Then sort the other words into important words and small words.",
      hints: [
        "Check the first word of the title. Then sort the other words into important words and small words.",
        "Look at what and does in the middle of a title.",
        "Frog is an important word, so it keeps its capital letter. Check the other choices."
      ],
      how: [
        "Look at each word: the first word needs a capital letter, and And is a small word in the middle.",
        "Frog and Lamp are important words, so they keep their capitals.",
        "The answer is \"Start with T, and make And lowercase.\""
      ],
      misconception: "A common mix-up is fixing only one thing. This title has a first-word mistake and a small-word mistake.",
      why: "The answer is \"Start with T, and make And lowercase.\" The title should be \"The Frog and the Lamp.\" Frog and Lamp are important words and keep their capitals.",
      like: ["SK-GUM5-7-C15"]
    }
  ],
  addons: {
    "SK-GUM5-7-P1": {
      hints: [
        "Check two things in each title: the marks around it and the capital letters.",
        "Look at the first word, then the important words, then the small words in the middle.",
        "One choice has no quotation marks around the title. Check the other choices."
      ],
      how: [
        "Check the marks and the capital letters in each title.",
        "A poem title goes in quotation marks, and The, Moon and Fox get capitals while and and the stay lowercase.",
        "The answer is 'My sister read the poem \"The Moon and the Fox\" to me.'"
      ],
      misconception: "A common mix-up is thinking a lowercase first word is fine. The first word of a title always gets a capital letter."
    },
    "SK-GUM5-7-P2": {
      hints: [
        "Ask whether each title names a whole book or a short work.",
        "Do one row at a time. Name the kind of work before you decide.",
        "The title of a poem belongs to a short work. Decide about the other rows."
      ],
      how: [
        "Look at what kind of work each row names.",
        "Chapter books and picture books are whole books, so their titles go in italics when typed or are underlined by hand.",
        "Poems, songs and short stories are short works, so their titles go in quotation marks."
      ],
      misconception: "A common mix-up is putting every title in quotation marks. Whole books use italics or underlining."
    },
    "SK-GUM5-7-P3": {
      hints: [
        "Look at the first word of every title. Then look at each important word.",
        "Read the five sentences one at a time. Pick ONE.",
        "The sentence about Lucy has a title with every capital letter in the right place. Check the other four."
      ],
      how: [
        "Check each title for quotation marks and capital letters.",
        "Four of the titles start with a capital letter and keep small words lowercase in the middle.",
        "In 'We sang \"the Bells of Winter\" at the concert.' the title starts with a lowercase letter."
      ],
      misconception: "A common mix-up is picking the title with the most small words. Small words in the middle are meant to be lowercase."
    },
    "SK-GUM5-7-P4": {
      hints: [
        "A story is a short work. Check the marks around the title.",
        "Then check the capital on each important word.",
        "One choice has no quotation marks at all. Decide between the other two."
      ],
      how: [
        "A story is a short work, so its title goes in quotation marks.",
        "The, Owl and Fence are the first word and important words, so they get capitals.",
        "The answer is \"The Owl on the Fence\" in quotation marks."
      ],
      misconception: "A common mix-up is leaving off quotation marks. The title of a story goes inside them."
    },
    "SK-GUM5-7-P5": {
      hints: [
        "Look at the first word, then the important words, then the small words in the middle.",
        "Say each title and check every capital letter.",
        "One choice has a lowercase first word. Check the other choices."
      ],
      how: [
        "Check the capital letters in each title.",
        "A is the first word, Picnic and Lake are important words, and at and the are small words in the middle.",
        "The answer is A Picnic at the Lake."
      ],
      misconception: "A common mix-up is capitalizing a small word in the middle. Words like at and the stay lowercase there."
    }
  },
  /* B8:core:end */
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

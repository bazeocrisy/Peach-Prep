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
    }
  ],
  parent: "At dinner, take turns telling one thing you did yesterday, one thing you do every day and one thing you will do tomorrow. Listen together for the verb in each sentence.",
  passages: [],
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
      "A, an and the are called articles. Use a before a word that starts with a consonant sound (a dog). Use an before a word that starts with a vowel sound (an egg).",
      "This, that, these and those point to things. This and that go with one thing. These and those go with more than one. This and these are close by. That and those are far away.",
      "My, your, his, her, its, our and their tell who owns something: our dog, their house. Its has no apostrophe when it shows owning."
    ],
    words: [
      { term: "determiner", means: "a small word that comes before a noun, like a, the, this or my" },
      { term: "article", means: "the words a, an and the" },
      { term: "demonstrative adjective", means: "a pointing word before a noun: this, that, these or those" },
      { term: "possessive adjective", means: "an owning word before a noun, like my, his, its or their" }
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
    }
  ],
  parent: "While you put away groceries, point and ask: Is it this box or that box? These cans or those cans? Let your child also say a or an for each item (an onion, a lemon).",
  passages: [],
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
    }
  ],
  parent: "Look at a calendar or a piece of mail together. Have your child point to each word with a capital letter and tell you whether it names a person, a place, a day, a month or a holiday.",
  passages: [],
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
      clue: "Find the name of a street and the name of a city. Is a street's name one word or more than one?",
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
    }
  ],
  parent: "Take turns saying one sentence three ways: telling, asking and excited (We have pizza. Do we have pizza? We have pizza!). Have your child name the end mark for each one.",
  passages: [],
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
        { text: "Look out, a snake is right by your foot", correct: true },
        { text: "There is a little snake in the tall grass" },
        { text: "Have you ever held a snake in your hands" },
        { text: "My friend wants a pet snake for his birthday" }
      ],
      clue: "Which sentence would someone say loudly, with a strong feeling like surprise or fear?",
      why: "The answer is \"Look out, a snake is right by your foot\" because it is a warning said with strong feeling. The sentence that begins with have asks a question, and the other two are telling sentences." },
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
    }
  ],
  parent: "Make a list of things around the house that end in y (penny, key, battery, toy). Have your child say whether each one changes to -ies or just adds -s, and then write the plural.",
  passages: [],
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
    }
  ],
  parent: "When your child says something like \"Me and Sam played,\" ask them to say it with just themselves (\"I played\") and then try again. Praise it when they say \"Sam and I played.\"",
  passages: [],
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
        "The bird built its nest in our mailbox.",
        "Him and his sister walk to school together.",
        "Can you share your markers with us?",
        "The blue lunchbox is mine.",
        "They invited her to the party."
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
      "Some prepositions tell where: in, on, under, over, behind, beside, between, across, through and near.",
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
        "During tells when, not where. Between needs two things, and there is only one pond.",
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
    }
  ],
  parent: "Play a hiding game with a small toy. Hide it, then give your child clues that use prepositions (It is under something soft. It is behind something tall.). Then trade places.",
  passages: [],
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
        "The sun set behind the mountains.",
        "Rosa put a stamp on the envelope.",
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
      show: ["My cousin lives in Dalton Georgia. She moved there on March 3 2019."],
      ask: "Where do the commas go?",
      steps: [
        "Find the city and state. Put a comma between them: Dalton, Georgia.",
        "Find the date. Put a comma between the day and the year: March 3, 2019.",
        "Check that no comma sits between the month and the day."
      ],
      answer: "My cousin lives in Dalton, Georgia. She moved there on March 3, 2019."
    }
  ],
  parent: "Write a short thank-you note together. Let your child add the date, the greeting, the closing and a list of three things, and check each comma with you.",
  passages: [],
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
      "To tell about the past, a verb that already ends in e just adds -d: bake becomes baked, and smile becomes smiled.",
      "When one person or thing does an action now, the verb usually adds -s. If the verb ends in s, sh, ch, x or z, add -es instead: wash becomes washes, catch becomes catches, and fix becomes fixes.",
      "If a verb ends in a consonant and then y, change the y to i and add -es: study becomes studies, and cry becomes cries.",
      "Two short verbs also add -es: go becomes goes, and do becomes does."
    ],
    words: [
      { term: "verb", means: "a word that shows an action, like bake or wash" },
      { term: "ending", means: "letters added to the end of a word, like -d or -es" }
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
    }
  ],
  parent: "As you do chores, name each one in a sentence about someone else (Dad washes, Grandma fixes, the baby cries). Have your child spell the verb aloud and say which ending it needs.",
  passages: [],
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
        "My brother brushes the horse every evening.",
        "The goat nibbled the fence post.",
        "Our teacher teachs us a new word each day.",
        "Grandma tries a new recipe every week.",
        "Sam closed the gate behind the goats."
      ],
      answer: [2], pick: 1,
      clue: "Look at each verb and how its plain form ends. Check that it has the right ending.",
      why: "The answer is \"Our teacher teachs us a new word each day.\" Teach ends in ch, so it needs -es: teaches." }
  ],
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

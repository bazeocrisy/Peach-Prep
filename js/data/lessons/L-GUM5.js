/* Lessons: 3-5.L.GC.1 Grammar, usage & mechanics, grade 3 Introduce (I) rows, part 5. Not assessed on the Milestones. Schema: docs/SPEC.md §8. */

/* 1. Capitalization in abbreviations, proper adjectives and formal titles */
PP.addLesson({
  code: "3.L.GC.1:I:use-conventional-capitalization-in-abbreviations",
  title: "Capital letters in Mr., Dr., St. and words like American",
  teach: {
    big: "Titles like Mr. and Dr., short forms of names like Jan. and St., and describing words made from place names like American all start with a capital letter.",
    points: [
      "A title right before a person's name starts with a capital letter: Mr. Cole, Dr. Shah, Mayor Green. The short titles Mr., Mrs., Ms. and Dr. end with a period. When no name comes after it, a word like mayor or doctor usually stays lowercase.",
      "An abbreviation is a short way to write a word. We use short forms of days, months and streets in addresses, dates and schedules, not in ordinary sentences. If the long word is a name, the short form gets a capital too: Mon. for Monday, Jan. for January, Pine St. for Pine Street.",
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
        "The mayor ate Italian food at our school fair.",
        "Fair schedule: Mon., Jan. 12, at 14 Elm St."
      ],
      note: "Dr. comes before a name, so it has a capital and a period. Italian comes from Italy, so it has a capital. Mayor stays lowercase because no name comes after it. In the schedule, Mon., Jan. and St. are short for names, so they have capitals."
    },
    tip: "When a question asks you to find the mistake, check every title, every short form and every word made from the name of a place. Ask: Does it need a capital?"
  },
  learn: [
    {
      show: ["Our class wrote a thank-you note to dr. Rivera."],
      ask: "Which word needs a capital letter?",
      steps: [
        "Look for a title in front of a person's name.",
        "The word dr. comes right before the name Rivera, so it is a title.",
        "A title before a name starts with a capital letter."
      ],
      answer: "The word dr. should be Dr.: \"Our class wrote a thank-you note to Dr. Rivera.\""
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
    }
  ],
  parent: "When you see street signs, menus or mail, point out short forms like Dr., St. and Ave. and words like Mexican or Korean. Ask your child why each one starts with a capital letter.",
  passages: [],
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
  test: [
    { id: "SK-GUM5-1-T1", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which one is correct?",
      choices: [
        { text: "We bought Greek olives at the market.", correct: true },
        { text: "My sister has a checkup with dr. Kim today." },
        { text: "Parade route: Main st. to Pine Ave." },
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
      prompt: "Choose the TWO sentences that are correct.",
      choices: [
        { text: "Ms. Lopez hung a Brazilian flag in our classroom.", correct: true },
        { text: "We mailed the letter to 14 Pine St.", correct: true },
        { text: "Mr Jackson coaches our soccer team." },
        { text: "We ate german pretzels at the fall festival." },
        { text: "Our new address is 9 Maple rd." }
      ],
      pick: 2,
      clue: "Check that each title has a capital and a period, that each short form of a name has a capital, and that each word made from a place name has a capital.",
      why: "The answers are \"Ms. Lopez hung a Brazilian flag in our classroom.\" and \"We mailed the letter to 14 Pine St.\" The others should say Mr. Jackson (with a period), German (from Germany) and Maple Rd. (a street name in an address)." }
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
  passages: [],
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
      prompt: "Mom asks Leah to feed the fish, and Leah answers. Choose the words that correctly complete what they say.",
      text: "Mom: {0} please feed the fish. Leah: {1} I will feed them right now.",
      slots: [
        { options: ["Leah", "Leah,", "Leah:"], answer: 1 },
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
        "The children's laughter filled the gym.",
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
        { options: ["although", "after", "unless"], answer: 1 }
      ],
      clue: "Read the sentence with each word in each blank. Is the first idea a surprise, a reason or a case? Is the second idea about time?",
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

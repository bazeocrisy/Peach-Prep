/* Lessons: 3.L.GC.1 Grammar, usage & mechanics, grade 3 Continue (C) and Introduce (I) rows. Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.L.GC.1:C:form-and-use-prepositional-phrases",
  title: "Prepositional phrases",
  teach: {
    big: "A prepositional phrase is a group of words that starts with a preposition, like under or after, and adds a detail such as where or when.",
    points: [
      "A preposition is a small word like in, on, under, behind, across, before, after, during, with, near, inside, toward, until, since, by or around.",
      "A prepositional phrase starts with a preposition and ends with a noun or pronoun: under the porch, after lunch, with my sister.",
      "Prepositional phrases add details. Many of them tell where or when something happens.",
      "A prepositional phrase needs its noun. Words that stop on the preposition, like jumped over, are not a whole phrase yet. Add the noun: jumped over the log.",
      "The same preposition can tell different things. In the box tells where, and in July tells when. Read the noun at the end of the phrase to decide. A few phrases tell something else, like who with: with my sister."
    ],
    words: [
      { term: "preposition", means: "a small word like in, on, under or after that starts a phrase" },
      { term: "prepositional phrase", means: "a preposition plus the words up to its noun, like under the porch" }
    ],
    example: {
      label: "Example",
      lines: ["After lunch, the cat napped under the porch."],
      note: "After lunch is a prepositional phrase that tells when. Under the porch is a prepositional phrase that tells where. Each one starts with a preposition and ends with a noun."
    },
    tip: "When you write, add a prepositional phrase to give more detail. \"We played\" can become \"We played by the creek after school.\""
  },
  learn: [
    {
      show: ["Kayla hid the birthday present behind the couch."],
      ask: "What is the prepositional phrase, and what does it tell?",
      steps: [
        "Look for a preposition, a small word like in, on, under or behind. Here it is behind.",
        "Read on until you reach the noun it points to: behind the couch.",
        "Ask what the phrase tells. Behind the couch tells where Kayla hid the present."
      ],
      answer: "The prepositional phrase is behind the couch. It tells where."
    },
    {
      show: ["During the storm, we played board games in the kitchen."],
      ask: "Find both prepositional phrases. Which one tells when?",
      steps: [
        "Find the prepositions: during and in.",
        "Read each one to its noun: during the storm and in the kitchen.",
        "Ask when or where for each one. During the storm tells when. In the kitchen tells where."
      ],
      answer: "The phrases are during the storm and in the kitchen. During the storm tells when."
    },
    {
      show: ["Mia packed her bag before the trip.", "Mia packed her bag beside the door."],
      ask: "Which sentence has a phrase that tells when?",
      steps: [
        "Find the prepositional phrase in each sentence: before the trip and beside the door.",
        "Name the noun that ends each phrase. A door is a place you can point to, and a trip is something that happens at a time.",
        "Use the noun to decide what each phrase tells."
      ],
      answer: "The first sentence. Before the trip tells when, and beside the door tells where."
    }
  ],
  parent: "On a walk or in the car, take turns telling where things are with a prepositional phrase, like \"The bird is on the fence\" or \"The ball is under the bench.\"",
  passages: [
    /* B8a:passages:start */
    {
      id: "p1",
      title: "Reading Buddies",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Every Tuesday morning, my class walks down the hall to the first-grade room.",
          "(2) We meet our reading buddies and say hello to Mrs. Cole.",
          "(3) My buddy Jaylen is six years old, and he sits on a big blue rug."
        ],
        [
          "(4) He holds a thick book about dragons and turns the pages.",
          "(5) I read the words slowly, and he points at the pictures.",
          "(6) Sometimes we both laugh out loud when the little dragon sneezes.",
          "(7) Under the story, we draw our best scene and color it."
        ],
        [
          "(8) Jaylen tapes his drawing above his desk so all can see it.",
          "(9) Then the bell rings, and we say goodbye to our buddies for the day.",
          "(10) We will read together again on Tuesday, and I cannot wait."
        ]
      ]
    },
    {
      id: "p2",
      title: "Saturday at the Market",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Saturday, Dad and I went to the farmers market.",
          "(2) A friendly man sold juicy peaches under a big white tent.",
          "(3) The peaches smelled sweet and looked ripe, so Dad bought a whole bag."
        ],
        [
          "(4) We tasted sweet corn after our walk, and it was warm and salty.",
          "(5) Dad chatted with the baker while I counted the warm loaves.",
          "(6) I carried our heavy basket across the busy street."
        ],
        [
          "(7) A band played loud music near the fountain every hour.",
          "(8) We stayed until the last song because the music was so cheerful.",
          "(9) Dad wants to go again.",
          "(10) I hope the peaches are still sweet next time."
        ]
      ]
    },
    {
      id: "p3",
      title: "Hike Along the Creek",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our family hiked along a quiet creek last weekend.",
          "(2) A tall gray heron stood in the shallow water.",
          "(3) It watched the tiny minnows swim past its long legs and thin feet."
        ],
        [
          "(4) Suddenly, the heron jumped into the air and flapped its wings.",
          "(5) My little brother pointed at a green turtle on a log.",
          "(6) We ate our sandwiches during a flat rock, and the sun felt warm."
        ],
        [
          "(7) Then we climbed the steep hill and looked down at the water.",
          "(8) The creek sparkled, and I felt happy and a little sleepy.",
          "(9) I hope we can come back before winter, and I want to bring a net."
        ]
      ]
    },
    {
      id: "p4",
      title: "Grandma's Birthday Surprise",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last month, my cousins and I planned a surprise party for Grandma.",
          "(2) Mom hid the cake inside the pantry until the party began.",
          "(3) We hung bright paper chains across the porch."
        ],
        [
          "(4) Aunt Rita took Grandma to the garden store so we had time to work.",
          "(5) I watched for her car and counted the minutes.",
          "(6) Beside the cake, we put twenty tiny candles and a little card."
        ],
        [
          "(7) Beside dinner, Grandma walked up the front steps and rang the bell.",
          "(8) Everyone jumped out and shouted surprise as loudly as we could.",
          "(9) We cheered at sunset, and Grandma cried happy tears.",
          "(10) She hugged us all and said it was the best birthday ever."
        ]
      ]
    },
    {
      id: "p5",
      title: "Our Ice Experiment",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) In science class, we tested whether sunlight melts ice faster than shade does.",
          "(2) Ms. Grant set one dish beside the fan, and it stayed cool.",
          "(3) She set another dish on the window sill, and the sun shone on it."
        ],
        [
          "(4) We checked both dishes after lunch and wrote down what we saw.",
          "(5) Sam measured the puddle with a ruler while Kai wrote the numbers.",
          "(6) The cube in the sunshine melted into a puddle, but the other cube stayed hard."
        ],
        [
          "(7) The class waited until the bell, and then we made a chart.",
          "(8) Sunlight makes ice melt faster than cool air does, so shade keeps it cold.",
          "(9) Our class will repeat the experiment."
        ]
      ]
    },
    {
      id: "p6",
      title: "Swim Meet Saturday",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our swim team met at the pool on Saturday morning.",
          "(2) I stood behind the starting block and shook out my arms.",
          "(3) My friend Tia waved and smiled from the bleachers."
        ],
        [
          "(4) The whistle blew, and I dove into the cool water.",
          "(5) I kicked hard and reached for the wall.",
          "(6) Coach Bell cheered loudly, and the whole crowd clapped too."
        ],
        [
          "(7) After the race, Coach Bell gave me a high five.",
          "(8) I dried my hair and my legs with a big towel, and then I put on my warm socks.",
          "(9) My team cheered across the last relay, and our voices were loud.",
          "(10) We went home with two blue ribbons and big smiles."
        ]
      ]
    }
    /* B8a:passages:end */
  ],
  practice: [
    { id: "SK-GUM4-1-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which group of words in this sentence is a prepositional phrase?",
      stem: "The ducks swam across the pond.",
      choices: [
        { text: "across the pond", correct: true },
        { text: "The ducks" },
        { text: "ducks swam" },
        { text: "swam across" }
      ],
      clue: "Find the preposition first. Then read on until you reach the noun it points to.",
      why: "The answer is across the pond. Across is the preposition, and pond is the noun that ends the phrase. It tells where the ducks swam." },
    { id: "SK-GUM4-1-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the preposition that best completes the sentence.",
      text: "Grandpa keeps his fishing poles {0} the garage.",
      slots: [ { options: ["in", "during", "after", "about"], answer: 0 } ],
      clue: "The phrase should tell where the poles are kept. Try each word in the sentence and listen.",
      why: "The answer is in. In the garage tells where Grandpa keeps his poles. During and after tell about time, and about does not make sense here." },
    { id: "SK-GUM4-1-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each prepositional phrase tell where or when?",
      cols: ["Where", "When"],
      rows: [
        { text: "before breakfast", answer: 1 },
        { text: "on the top shelf", answer: 0 },
        { text: "after the game", answer: 1 },
        { text: "beside the mailbox", answer: 0 },
        { text: "at noon", answer: 1 }
      ],
      clue: "Ask \"Is this a place or a time?\" for each phrase.",
      why: "On the top shelf and beside the mailbox name places, so they tell where. Before breakfast, after the game and at noon name times, so they tell when." },
    { id: "SK-GUM4-1-P4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences have a prepositional phrase that tells where?",
      choices: [
        { text: "The kite got stuck in a tall pine tree.", correct: true },
        { text: "Malik left his shoes by the back door.", correct: true },
        { text: "We will eat dinner at six o'clock." },
        { text: "The baby giggled after her bath." },
        { text: "Rosa sang a song very loudly." }
      ],
      clue: "Find the prepositional phrase in each sentence. Then ask whether it names a place or a time.",
      why: "The answers are \"The kite got stuck in a tall pine tree.\" and \"Malik left his shoes by the back door.\" In a tall pine tree and by the back door tell where. At six o'clock and after her bath tell when. The sentence about Rosa has no prepositional phrase." },
    { id: "SK-GUM4-1-P5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Which sentence has a prepositional phrase that tells when?",
      options: [
        "Ben read a book on the bus.",
        "Ben read a book before bedtime.",
        "Ben read a book with his sister.",
        "Ben read a book about sharks."
      ],
      answer: [1], pick: 1,
      clue: "Every sentence has a prepositional phrase. Look for the one that names a time.",
      why: "The answer is \"Ben read a book before bedtime.\" Before bedtime names a time. On the bus tells where, with his sister tells who was with him, and about sharks tells what the book is about." }
  ],
  /* B8a:core:start */
  /* ---------- Expansion 2026-10-22, batch B8a (GUM Reinforce, first half) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test.
     Author log: docs/expansion-2026-10-22/batches/B8a-author-log.md. NOT ACCEPTED: needs independent review. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          {
            ref: "SK-GUM4-1-P3"
          },
          {
            ref: "SK-GUM4-1-P5"
          },
          {
            id: "SK-GUM4-1-C03",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: ["p1"],
            prompt: "In sentence 4 of the draft, which group of words is a prepositional phrase?",
            choices: [
              {
                text: "about dragons",
                correct: true
              },
              {
                text: "holds a thick book"
              },
              {
                text: "a thick book about"
              },
              {
                text: "He holds a thick book"
              }
            ],
            clue: "A prepositional phrase starts with a preposition and ends with a noun. Look for the small word that starts it, then read on to its noun.",
            hints: [
              "A prepositional phrase starts with a preposition and ends with a noun. Look for the small word that starts it, then read on to its noun.",
              "Reread sentence 4 and find the small word that links the book to more information. Then read on until you reach a noun.",
              "A group of words that stops on a small word has no noun after it, so it cannot be a whole phrase."
            ],
            how: [
              "Find the preposition in sentence 4. It is about, a small word that starts a phrase.",
              "Read on to the noun it points to: dragons. The phrase is about dragons.",
              "The answer is \"about dragons\". Holds a thick book and He holds a thick book have no preposition, and a thick book about stops before the noun."
            ],
            misconception: "A common mix-up is picking the words around the preposition. The phrase starts at the preposition and ends at its noun.",
            why: "The answer is \"about dragons\" About is the preposition that starts the phrase, and dragons is the noun that ends it. The other choices have no preposition or stop before the noun."
          },
          {
            id: "SK-GUM4-1-C04",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: ["p1"],
            prompt: "Sentence 7 of the draft has a mistake. Choose the word that fixes it.",
            text: "{0} the story, we draw our best scene and color it.",
            slots: [
              {
                options: ["After","Under","Beside"],
                answer: 0
              }
            ],
            clue: "Read the sentence and think about what its phrase should tell. Then try each word in the blank and listen.",
            hints: [
              "Read the sentence and think about what its phrase should tell. Then try each word in the blank and listen.",
              "Look at the sentences just before sentence 7 to see what the class has already done.",
              "Nobody can draw beneath a story, so the word that is in the draft now does not fit."
            ],
            how: [
              "Read the sentence with each word in the blank: Under the story, After the story, Beside the story.",
              "The class draws once the story is done, so the phrase should tell when.",
              "The answer is After. Under and Beside name places, and a story is not a place."
            ],
            misconception: "A common mix-up is leaving the word that is already in the draft. Read the whole phrase and ask whether it makes sense.",
            why: "The answer is After. After the story tells when the class draws. Under and Beside are place words, and they do not make sense with a story."
          },
          {
            id: "SK-GUM4-1-C05",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: ["p1"],
            prompt: "A classmate says on Tuesday in sentence 10 tells where, because on often starts a place phrase. What is the best response?",
            choices: [
              {
                text: "Tuesday names a day, so the phrase tells when.",
                correct: true
              },
              {
                text: "Tuesday names a spot, so the phrase tells where."
              },
              {
                text: "Tuesday has no noun after on, so it is not a phrase."
              },
              {
                text: "Tuesday describes the buddies, so the phrase tells who."
              }
            ],
            clue: "Read the whole phrase, not just its first word. Then decide what the noun at the end of the phrase names.",
            hints: [
              "Read the whole phrase, not just its first word. Then decide what the noun at the end of the phrase names.",
              "Look at the last word of the phrase in sentence 10. Ask whether it names a place, a time or a person.",
              "A phrase that ends with a noun is a real phrase, so one of the responses cannot be right."
            ],
            how: [
              "Find the phrase in sentence 10: on Tuesday. It ends with the noun Tuesday.",
              "Ask what Tuesday names. It is a day, and a day is a time.",
              "The answer is \"Tuesday names a day, so the phrase tells when.\" The word on can start a place phrase, but the noun decides what the phrase tells."
            ],
            misconception: "A common mix-up is thinking a preposition always tells the same thing. Read the noun after it to decide.",
            why: "The answer is \"Tuesday names a day, so the phrase tells when.\" Tuesday is a day, which is a time, so on Tuesday tells when. The word on often starts a place phrase, but the noun decides what a phrase tells."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM4-1-C06",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: ["p2"],
            prompt: "Among sentences 2, 4, 5, 6 and 8, select the TWO shown sentences that have a prepositional phrase that tells where.",
            targets: ["p2:1:2","p2:2:1","p2:2:2","p2:2:3","p2:3:2"],
            answer: ["p2:1:2","p2:2:3"],
            pick: 2,
            clue: "A where phrase ends with a noun that names a place. Find each preposition and read to its noun.",
            hints: [
              "A where phrase ends with a noun that names a place. Find each preposition and read to its noun.",
              "For each shown sentence, name the noun that ends its phrase. Ask whether that noun names a place, a time or a person.",
              "Sentence 5 is about who Dad talked to, so it does not name a place."
            ],
            how: [
              "Find the prepositional phrase in each shown sentence and name its noun.",
              "Sentence 2 has under a big white tent, a place. Sentence 6 has across the busy street, a place.",
              "Sentences 4 and 8 have after our walk and until the last song, which name times. Sentence 5 has with the baker, a person."
            ],
            misconception: "A common mix-up is choosing a sentence just because it has a phrase. The phrase has to name a place.",
            why: "The answers are sentences 2 and 6: \"A friendly man sold juicy peaches under a big white tent.\" and \"I carried our heavy basket across the busy street.\" Under a big white tent and across the busy street both name places. After our walk and until the last song name times, and with the baker names a person."
          },
          {
            id: "SK-GUM4-1-C07",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: ["p2"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Sentence 9 should tell when Dad wants to go again. Which revision does that?",
              choices: [
                {
                  text: "Dad wants to go again on Saturday.",
                  correct: true
                },
                {
                  text: "Dad wants to go again at the market."
                },
                {
                  text: "Dad wants to go again with the baker."
                },
                {
                  text: "Dad wants to go again near the fountain."
                }
              ]
            },
            partB: {
              prompt: "Which fact explains why the phrase in the correct revision tells when?",
              choices: [
                {
                  text: "Saturday names a day, and a day is a time.",
                  correct: true
                },
                {
                  text: "Market names a store, and a store is a place."
                },
                {
                  text: "Baker names a worker, and a worker is a person."
                },
                {
                  text: "Fountain names a statue, and a statue is a thing."
                }
              ]
            },
            clue: "Think about what kind of noun ends each new phrase. Then check which kind answers a when question.",
            hints: [
              "Think about what kind of noun ends each new phrase. Then check which kind answers a when question.",
              "For Part A, add each phrase to sentence 9 and listen for the one that answers when. For Part B, name the kind of noun that ends the phrase you chose.",
              "A baker is a person, so a fact about a baker cannot explain a time."
            ],
            how: [
              "Part A: a when phrase must end with a noun that names a time. The answer is \"Dad wants to go again on Saturday.\" because Saturday is a day.",
              "The other revisions end with market, baker and fountain, which are a place, a person and a place.",
              "Part B: the fact that matches is \"Saturday names a day, and a day is a time.\""
            ],
            misconception: "A common mix-up is picking the phrase that sounds most like the draft. Check what the noun at the end of the phrase names.",
            why: "Part A: \"Dad wants to go again on Saturday.\" Part B: \"Saturday names a day, and a day is a time.\" On Saturday ends with a day, so it tells when. The other phrases end with a store, a worker and a statue, which are a place, a person and a thing."
          },
          {
            id: "SK-GUM4-1-C08",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: [],
            prompt: "Finish the sentence so that it tells one place and one time.",
            text: "The puppy hid {0} the sofa {1} the thunderstorm.",
            slots: [
              {
                options: ["under","during","after"],
                answer: 0
              },
              {
                options: ["during","behind","beside"],
                answer: 0
              }
            ],
            clue: "Try each word in the blank and listen. A phrase that tells where names a place, and a phrase that tells when names a time.",
            hints: [
              "Try each word in the blank and listen. A phrase that tells where names a place, and a phrase that tells when names a time.",
              "Test each word with the noun that follows its blank, one blank at a time.",
              "Look only at the first blank. After tells when something happens, so it cannot show where the puppy hid."
            ],
            how: [
              "A sofa is a place, so the blank before it needs a word for where.",
              "A storm happens at a time, so the blank before it needs a word for when.",
              "The answers are under and during. Read it back: The puppy hid under the sofa during the thunderstorm."
            ],
            misconception: "A common mix-up is using the same kind of word twice. One phrase names a place, and the other names a time.",
            why: "The answers are under and during. Under the sofa tells where the puppy hid, and during the thunderstorm tells when. After and during are time words, and behind and beside are place words, so each would be in the wrong blank."
          },
          {
            id: "SK-GUM4-1-C09",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: [],
            stem: "The children played ___.",
            prompt: "Choose the TWO phrases that tell where when they are added to the sentence.",
            pick: 2,
            choices: [
              {
                text: "under the shady tree",
                correct: true
              },
              {
                text: "behind the school",
                correct: true
              },
              {
                text: "after the last bell"
              },
              {
                text: "with a bright red ball"
              },
              {
                text: "before supper"
              }
            ],
            clue: "Add each phrase to the sentence and read it out loud. A where phrase names a place.",
            hints: [
              "Add each phrase to the sentence and read it out loud. A where phrase names a place.",
              "Choose the two phrases whose last words name a place you could point to.",
              "Supper is a meal, so before supper tells about a time."
            ],
            how: [
              "Add each phrase to The children played ___ and read it.",
              "Under the shady tree and behind the school both end with a place.",
              "After the last bell and before supper name times, and with a bright red ball tells what they played with."
            ],
            misconception: "A common mix-up is picking any phrase that fits the sentence. The phrase also has to name a place.",
            why: "The answers are \"under the shady tree\" and \"behind the school\". Both phrases end with a place, so each tells where the children played. The other phrases tell when or what they used."
          },
          {
            id: "SK-GUM4-1-C10",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: [],
            stem: "Sentence A: The goats slept in the barn. Sentence B: The goats woke in the morning.",
            prompt: "How are the phrases in the two sentences alike and different?",
            choices: [
              {
                text: "Both start with in, but the first tells where and the second tells when.",
                correct: true
              },
              {
                text: "Both start with in, so both phrases must tell where the goats were."
              },
              {
                text: "Neither phrase starts with a preposition, so neither one is a prepositional phrase."
              },
              {
                text: "The first phrase tells when, and the second phrase tells where the goats woke."
              }
            ],
            clue: "Compare the first word of each phrase. Then compare the noun at the end of each phrase.",
            hints: [
              "Compare the first word of each phrase. Then compare the noun at the end of each phrase.",
              "Say the noun after in in each sentence. Ask whether each noun names a place or a time.",
              "Both phrases start with a word from the list of prepositions, so one choice cannot be right."
            ],
            how: [
              "Both phrases start with in, so they begin alike.",
              "Barn names a place, so in the barn tells where. Morning names a time, so in the morning tells when.",
              "The answer is \"Both start with in, but the first tells where and the second tells when.\""
            ],
            misconception: "A common mix-up is thinking the same preposition always gives the same kind of detail. The noun decides.",
            why: "The answer is \"Both start with in, but the first tells where and the second tells when.\" In the barn tells where the goats slept, and in the morning tells when they woke. The same preposition starts both phrases."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM4-1-C11",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: ["p3"],
            prompt: "Among sentences 2, 4, 5, 8 and 9, select the ONE shown sentence that has no prepositional phrase.",
            targets: ["p3:1:2","p3:2:1","p3:2:2","p3:3:2","p3:3:3"],
            answer: ["p3:3:2"],
            pick: 1,
            clue: "A prepositional phrase has a preposition and a noun. Read each shown sentence and look for that pair.",
            hints: [
              "A prepositional phrase has a preposition and a noun. Read each shown sentence and look for that pair.",
              "Check each shown sentence for a small word that links a noun to the rest of the sentence. Then see whether a noun follows it.",
              "Sentence 9 has a time word followed by a noun, so it does have a phrase."
            ],
            how: [
              "Check each shown sentence for a preposition and a noun after it.",
              "Sentence 2 has in the shallow water, sentence 4 has into the air, sentence 5 has at a turtle and on a log, and sentence 9 has before winter.",
              "Sentence 8 has no preposition at all, so it is the one without a prepositional phrase."
            ],
            misconception: "A common mix-up is thinking every sentence needs a prepositional phrase. Many sentences have none.",
            why: "The answer is sentence 8: \"The creek sparkled, and I felt happy and a little sleepy.\" The creek sparkled, and I felt happy and a little sleepy has no preposition followed by a noun. Each of the other shown sentences has a phrase such as in the shallow water or before winter."
          },
          {
            id: "SK-GUM4-1-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: ["p3"],
            prompt: "Sentence 6 of the draft has a mistake. Choose the word that fixes it.",
            text: "We ate our sandwiches {0} a flat rock, and the sun felt warm.",
            slots: [
              {
                options: ["on","during","after"],
                answer: 0
              }
            ],
            clue: "Read the sentence and think about what the phrase should tell. Then try each word in the blank and listen.",
            hints: [
              "Read the sentence and think about what the phrase should tell. Then try each word in the blank and listen.",
              "Say the noun after the blank. Then read the words before the blank and test each choice with both.",
              "A rock is not an event that has a start and an end, so the word that is in the draft now does not fit."
            ],
            how: [
              "Read the sentence with each word in the blank.",
              "A flat rock is a place where you can sit, so the phrase should tell where.",
              "The answer is on. During and after are time words, and they do not make sense with a rock."
            ],
            misconception: "A common mix-up is trusting the word that is already in the draft. Read the whole phrase out loud.",
            why: "The answer is on. On a flat rock tells where the family ate. During and after are time words, so they do not fit with a rock."
          },
          {
            id: "SK-GUM4-1-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: ["p3"],
            prompt: "Look at the phrases in sentence 2 and sentence 4 of the draft. Choose the TWO true statements.",
            pick: 2,
            choices: [
              {
                text: "Both phrases end with a noun.",
                correct: true
              },
              {
                text: "Both phrases tell where the heron was or went.",
                correct: true
              },
              {
                text: "Both phrases start with the same preposition."
              },
              {
                text: "The word Suddenly is part of the phrase in sentence 4."
              },
              {
                text: "The phrase in sentence 2 tells when the heron stood there."
              }
            ],
            clue: "Find the prepositional phrase in each sentence. Then check each statement against both phrases.",
            hints: [
              "Find the prepositional phrase in each sentence. Then check each statement against both phrases.",
              "Name the preposition and the last word of each phrase, then decide what each phrase gives.",
              "The word Suddenly comes before the preposition into, so it stays outside the phrase."
            ],
            how: [
              "Find the phrases: in the shallow water in sentence 2 and into the air in sentence 4.",
              "Both end with a noun, water and air. Both name places the heron was or went.",
              "The other statements are false. The prepositions are in and into, Suddenly is not in the phrase, and sentence 2 tells where, not when."
            ],
            misconception: "A common mix-up is choosing a statement that sounds true about one sentence. Each choice must be true of both phrases.",
            why: "The answers are \"Both phrases end with a noun.\" and \"Both phrases tell where the heron was or went.\" Water and air are nouns, so both phrases end with a noun, and both name places the heron was or went. The prepositions in and into are different, and Suddenly is not part of either phrase."
          },
          {
            id: "SK-GUM4-1-C14",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: [],
            stem: "The plant grew.",
            prompt: "Which revision adds a prepositional phrase that tells when?",
            choices: [
              {
                text: "The plant grew during the warm summer.",
                correct: true
              },
              {
                text: "The plant grew beside the sunny window."
              },
              {
                text: "The plant grew very tall and green."
              },
              {
                text: "The plant grew with plenty of water."
              }
            ],
            clue: "A when phrase ends with a noun that names a time. Add each detail and read it.",
            hints: [
              "A when phrase ends with a noun that names a time. Add each detail and read it.",
              "Look at the last word of each revision and ask what it names.",
              "One revision has no prepositional phrase at all, only describing words."
            ],
            how: [
              "Check each revision for a prepositional phrase and name its noun.",
              "During the warm summer ends with a time, so it tells when.",
              "The answer is \"The plant grew during the warm summer.\" Beside the sunny window names a place, with plenty of water tells what the plant had, and very tall and green has no phrase."
            ],
            misconception: "A common mix-up is picking the revision with the most details. Look for a phrase that names a time.",
            why: "The answer is \"The plant grew during the warm summer.\" During the warm summer ends with a time, so it tells when the plant grew. The other revisions name a place, tell what the plant had, or add no phrase."
          },
          {
            id: "SK-GUM4-1-C15",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:C:form-and-use-prepositional-phrases"
            ],
            passages: [],
            prompt: "Which sentence has one phrase that tells where and one phrase that tells when?",
            choices: [
              {
                text: "Before the game, our coach waited at the gate.",
                correct: true
              },
              {
                text: "Our coach waited at the gate and beside the bus."
              },
              {
                text: "Before the game and after the game, our coach waited."
              },
              {
                text: "Our coach waited with a whistle during the game."
              }
            ],
            clue: "Find the prepositional phrases in each sentence. Then decide what each one tells.",
            hints: [
              "Find the prepositional phrases in each sentence. Then decide what each one tells.",
              "Each correct sentence needs two different kinds of phrases. Check each choice for one place and one time.",
              "One choice has two phrases, but both of them name times, not places."
            ],
            how: [
              "Mark each phrase in every choice and ask where or when.",
              "Before the game tells when, and at the gate tells where.",
              "The answer is \"Before the game, our coach waited at the gate.\" The other choices have two places, two times, or a how phrase and a time."
            ],
            misconception: "A common mix-up is counting phrases without checking what each one tells. Look for one place and one time.",
            why: "The answer is \"Before the game, our coach waited at the gate.\" Before the game names a time, and at the gate names a place. The other choices have two place phrases, two time phrases, or no place phrase."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM4-1-S01",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: [],
      prompt: "Sort these phrases by the kind of detail they add.",
      cols: ["A place","A time"],
      rows: [
        {
          text: "inside the cave",
          answer: 0
        },
        {
          text: "since Monday",
          answer: 1
        },
        {
          text: "toward the lighthouse",
          answer: 0
        },
        {
          text: "until midnight",
          answer: 1
        },
        {
          text: "around the corner",
          answer: 0
        }
      ],
      clue: "Look at the noun at the end of each phrase. Ask whether it names a spot or a moment.",
      hints: [
        "Look at the noun at the end of each phrase. Ask whether it names a spot or a moment.",
        "Sort the phrases you are sure about first. Then use the same question on the rest.",
        "Cover the first word of each phrase, then ask whether what is left is somewhere you could stand."
      ],
      how: [
        "Read each phrase and find its noun.",
        "Cave, lighthouse and corner are places, so those phrases add a place.",
        "Monday and midnight are times, so since Monday and until midnight add a time."
      ],
      misconception: "A common mix-up is going by the first word. Read the noun at the end to see if it is a spot or a moment.",
      why: "Inside the cave, toward the lighthouse and around the corner end with places. Since Monday and until midnight end with times.",
      like: ["SK-GUM4-1-P3"]
    },
    {
      id: "SK-GUM4-1-S02",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: [],
      prompt: "Select the sentence in which the phrase shows a location.",
      options: [
        "Nina painted a picture for her aunt Rosa.",
        "Nina painted a picture after a big dinner.",
        "Nina painted a picture under the stairs.",
        "Nina painted a picture of a lighthouse."
      ],
      answer: [2],
      pick: 1,
      clue: "Each sentence ends with a group of words that starts with a small word. Check what each group names.",
      hints: [
        "Each sentence ends with a group of words that starts with a small word. Check what each group names.",
        "Find the small word in each sentence, then read to its noun. Ask whether the noun is somewhere you could stand.",
        "A dinner is a meal, so the group of words that ends with it is about a time."
      ],
      how: [
        "Find the phrase in each sentence.",
        "For her aunt Rosa names a person, after a big dinner names a time, and of a lighthouse tells what the picture shows.",
        "The answer is \"Nina painted a picture under the stairs.\" Under the stairs names a place, so it shows a location."
      ],
      misconception: "A common mix-up is picking any sentence with a phrase. The phrase has to end with a place.",
      why: "The answer is \"Nina painted a picture under the stairs.\" Under the stairs names a place. For her aunt Rosa tells who, after a big dinner tells when, and of a lighthouse tells what the picture shows.",
      like: ["SK-GUM4-1-P5"]
    },
    {
      id: "SK-GUM4-1-S03",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: ["p4"],
      prompt: "Sentence 3 tells where the paper chains went. Which choice is a preposition together with the noun it points to?",
      choices: [
        {
          text: "across the porch",
          correct: true
        },
        {
          text: "bright paper chains"
        },
        {
          text: "chains across the"
        },
        {
          text: "hung bright paper chains"
        }
      ],
      clue: "Begin by finding the small linking word. A phrase has that word at its start and a noun at its finish.",
      hints: [
        "Begin by finding the small linking word. A phrase has that word at its start and a noun at its finish.",
        "Reread sentence 3 and find the small word that shows direction, then keep reading until you hit a noun.",
        "Words that only name the chains and describe them do not start with a small linking word."
      ],
      how: [
        "Find the small word that starts a phrase in sentence 3: across.",
        "Read on to the noun it points to: porch. The phrase is across the porch.",
        "The answer is \"across the porch\". Bright paper chains and hung bright paper chains have no preposition, and chains across the stops before the noun."
      ],
      misconception: "A common mix-up is picking words that include the thing being hung. The phrase begins at the preposition.",
      why: "The answer is \"across the porch\" Across is the preposition, and porch is the noun that ends the phrase. The other choices have no preposition or stop before the noun.",
      like: ["SK-GUM4-1-C03"]
    },
    {
      id: "SK-GUM4-1-S04",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: ["p4"],
      prompt: "Grandma's arrival is described badly in sentence 7. Pick the preposition that repairs its opening.",
      text: "{0} dinner, Grandma walked up the front steps and rang the bell.",
      slots: [
        {
          options: ["Before","Inside","Behind"],
          answer: 0
        }
      ],
      clue: "Say the whole sentence with each word in the blank. Decide which one makes sense next to the noun.",
      hints: [
        "Say the whole sentence with each word in the blank. Decide which one makes sense next to the noun.",
        "Look at the sentences next to sentence 7, then test each word.",
        "Nobody can stand behind a meal as if it were a place, so one of the words does not fit."
      ],
      how: [
        "Read the sentence with each word in the blank.",
        "Grandma arrived just ahead of the meal, so the opening should tell when.",
        "The answer is Before. Inside and Behind name places, and dinner is not a place."
      ],
      misconception: "A common mix-up is picking a place word because it sounds like the draft. Say the full opening and ask if it makes sense.",
      why: "The answer is Before. Before dinner tells when Grandma walked up the steps. Inside and Behind are place words, and dinner is a meal.",
      like: ["SK-GUM4-1-C04"]
    },
    {
      id: "SK-GUM4-1-S05",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: ["p4"],
      prompt: "A cousin thinks the words at sunset in sentence 9 show a location, since at points to a spot. How should you answer?",
      choices: [
        {
          text: "Sunset is part of each evening, so those words give the moment everyone cheered.",
          correct: true
        },
        {
          text: "Sunset is a hill behind the house, so those words name the place for the cheer."
        },
        {
          text: "At is a describing word here, so those words cannot be counted as a real phrase."
        },
        {
          text: "Sunset is a feeling, so those words give the way everyone cheered."
        }
      ],
      clue: "Do not stop at the small word at the start of a group of words. Look at what the last word of the group names.",
      hints: [
        "Do not stop at the small word at the start of a group of words. Look at what the last word of the group names.",
        "Find those words in sentence 9 and name the last one. Ask whether it names a spot, a part of the day or a way.",
        "At is a preposition in this line, so the reply that calls it a describing word cannot be right."
      ],
      how: [
        "Find the words in sentence 9: at sunset. The last word is sunset.",
        "Sunset is part of each evening, so those words give a moment.",
        "The answer is \"Sunset is part of each evening, so those words give the moment everyone cheered.\" The small word at can show a spot, but the noun decides."
      ],
      misconception: "A common mix-up is trusting the small word to settle what a phrase tells. The noun at the end decides.",
      why: "The answer is \"Sunset is part of each evening, so those words give the moment everyone cheered.\" Sunset is part of each evening, so at sunset gives a moment. The small word at can show a spot, but the noun decides what a phrase tells.",
      like: ["SK-GUM4-1-C05"]
    },
    {
      id: "SK-GUM4-1-S06",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: ["p5"],
      prompt: "Look at sentences 2, 3, 4, 5 and 7. Pick the TWO shown sentences that give a location.",
      targets: ["p5:1:2","p5:1:3","p5:2:1","p5:2:2","p5:3:1"],
      answer: ["p5:1:2","p5:1:3"],
      pick: 2,
      clue: "A location phrase finishes with a noun naming somewhere. Find each small linking word.",
      hints: [
        "A location phrase finishes with a noun naming somewhere. Find each small linking word.",
        "Name the noun that finishes the first phrase in each shown sentence. Ask whether it names somewhere, a moment or a tool.",
        "A ruler is a tool, so the phrase in sentence 5 does not name somewhere."
      ],
      how: [
        "Find the first prepositional phrase in each shown sentence.",
        "Sentence 2 has beside the fan and sentence 3 has on the window sill. Both name places.",
        "Sentences 4 and 7 have after lunch and until the bell, which name times. Sentence 5 has with a ruler, which names a tool."
      ],
      misconception: "A common mix-up is choosing a sentence because it mentions classroom objects. The phrase has to end with a place.",
      why: "The answers are sentences 2 and 3: \"Ms. Grant set one dish beside the fan, and it stayed cool.\" and \"She set another dish on the window sill, and the sun shone on it.\" Beside the fan and on the window sill both end with places. After lunch and until the bell end with times, and with a ruler ends with a tool.",
      like: ["SK-GUM4-1-C06"]
    },
    {
      id: "SK-GUM4-1-S07",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: ["p5"],
      prompt: "Answer Part A first, and then answer Part B.",
      partA: {
        prompt: "Sentence 9 needs words that show where the class will do the work. Which new version does that job?",
        choices: [
          {
            text: "Our class will repeat the experiment behind the gym.",
            correct: true
          },
          {
            text: "Our class will repeat the experiment on Monday afternoon."
          },
          {
            text: "Our class will repeat the experiment after the winter holiday."
          },
          {
            text: "Our class will repeat the experiment with a brand new timer."
          }
        ]
      },
      partB: {
        prompt: "Which statement proves that the added words name a location?",
        choices: [
          {
            text: "A gym is a building that students can walk to.",
            correct: true
          },
          {
            text: "Monday is a school day that comes once each week."
          },
          {
            text: "A holiday is a break from school that lasts for days."
          },
          {
            text: "A timer is a small tool that counts the seconds."
          }
        ]
      },
      clue: "Think about what kind of noun finishes each new group of words. Then see which kind answers a where question.",
      hints: [
        "Think about what kind of noun finishes each new group of words. Then see which kind answers a where question.",
        "For Part A, add each group of words to sentence 9 and listen for the one that answers where. For Part B, name the kind of noun that finishes the one you picked.",
        "A timer is a tool, so a statement about a timer cannot prove a place."
      ],
      how: [
        "Part A: a where phrase must end with a noun that names somewhere to go. The answer is \"Our class will repeat the experiment behind the gym.\"",
        "The other versions end with Monday afternoon, winter holiday and timer, which are two times and a tool.",
        "Part B: the statement is \"A gym is a building that students can walk to.\""
      ],
      misconception: "A common mix-up is choosing the version with the most words. Check what the noun at the end of the phrase names.",
      why: "Part A: \"Our class will repeat the experiment behind the gym.\" Part B: \"A gym is a building that students can walk to.\" Behind the gym ends with a building, so it shows where. The other phrases end with a time of day, a break and a tool.",
      like: ["SK-GUM4-1-C07"]
    },
    {
      id: "SK-GUM4-1-S08",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: [],
      prompt: "Pick the best preposition for each blank.",
      text: "The kitten curled up {0} the basket {1} the long walk.",
      slots: [
        {
          options: ["near","since","until"],
          answer: 0
        },
        {
          options: ["after","toward","along"],
          answer: 0
        }
      ],
      clue: "Try each word in a blank and listen. Spot words go with spots, and moment words go with moments.",
      hints: [
        "Try each word in a blank and listen. Spot words go with spots, and moment words go with moments.",
        "Test each word with the noun that follows its blank, one blank at a time.",
        "Look only at the second blank. Toward names a direction, so it cannot show when the kitten curled up."
      ],
      how: [
        "The first phrase names a spot, so the first blank needs a word that fits a basket.",
        "The second phrase names a moment, so the second blank needs a word that fits a walk that has ended.",
        "The answers are near and after. Read it back: The kitten curled up near the basket after the long walk."
      ],
      misconception: "A common mix-up is putting a moment word in the spot blank. Match each blank to what its noun names.",
      why: "The answers are near and after. Near the basket tells where the kitten curled up, and after the long walk tells when. Since and until are time words, and toward and along are place words, so each would sit in the wrong blank.",
      like: ["SK-GUM4-1-C08"]
    },
    {
      id: "SK-GUM4-1-S09",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: [],
      stem: "The campers set up their tents ___.",
      prompt: "Which TWO endings show where the campers put their tents?",
      pick: 2,
      choices: [
        {
          text: "beside the river",
          correct: true
        },
        {
          text: "near the old stone bridge",
          correct: true
        },
        {
          text: "until sunrise"
        },
        {
          text: "without a sound"
        },
        {
          text: "during the long storm"
        }
      ],
      clue: "Put each group of words at the end of the sentence and read it. A location ends with somewhere you could walk to.",
      hints: [
        "Put each group of words at the end of the sentence and read it. A location ends with somewhere you could walk to.",
        "Choose the two groups of words that end with a spot on a map.",
        "A storm is an event with a start and an end, so a group of words that ends with it is about a time."
      ],
      how: [
        "Add each phrase to the sentence and read it.",
        "Beside the river and near the old stone bridge end with places.",
        "Until sunrise and during the long storm name times, and without a sound tells how the campers worked."
      ],
      misconception: "A common mix-up is picking the phrases that sound natural with camping. The phrase has to end with a place.",
      why: "The answers are \"beside the river\" and \"near the old stone bridge\". The campers set up their tents beside the river and near the old stone bridge both name places. The other phrases name times or a way of working.",
      like: ["SK-GUM4-1-C09"]
    },
    {
      id: "SK-GUM4-1-S10",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: [],
      stem: "1. The kayaks rested by the dock. 2. The kayaks were back by noon.",
      prompt: "Mia says both groups of words begin with by, so they must give the same kind of detail. Is she right?",
      choices: [
        {
          text: "No, a dock is a spot and noon is a moment, so the details differ.",
          correct: true
        },
        {
          text: "Yes, any group of words that begins with by gives a spot."
        },
        {
          text: "Yes, the small word by alone decides what a group of words gives."
        },
        {
          text: "No, by is not a preposition, so neither group is a real phrase."
        }
      ],
      clue: "Find the noun that finishes each piece that starts with by. Then compare the two nouns.",
      hints: [
        "Find the noun that finishes each piece that starts with by. Then compare the two nouns.",
        "Say dock and noon. Ask whether each word names a spot or a time of day.",
        "By is a preposition in both lines, so the reply that says it is not cannot be right."
      ],
      how: [
        "Both groups of words start with by.",
        "A dock is a spot, so by the dock points to a place. Noon is a moment, so by noon points to a time.",
        "The answer is \"No, a dock is a spot and noon is a moment, so the details differ.\""
      ],
      misconception: "A common mix-up is believing one preposition always means the same thing. Read the noun to decide.",
      why: "The answer is \"No, a dock is a spot and noon is a moment, so the details differ.\" By the dock names where the kayaks rested, and by noon names when they were back. The same small word starts both, but the nouns differ.",
      like: ["SK-GUM4-1-C10"]
    },
    {
      id: "SK-GUM4-1-S11",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: ["p6"],
      prompt: "Sentences 2 to 6 are shown from the swim meet draft. Pick the ONE with no group of words that starts with a preposition.",
      targets: ["p6:1:2","p6:1:3","p6:2:1","p6:2:2","p6:2:3"],
      answer: ["p6:2:3"],
      pick: 1,
      clue: "A prepositional phrase needs a preposition and a noun that follows it. Check each shown sentence for that pair.",
      hints: [
        "A prepositional phrase needs a preposition and a noun that follows it. Check each shown sentence for that pair.",
        "Look in each shown sentence for a small word that links a noun to the rest. Then see whether a noun comes right after it.",
        "Sentence 4 has a word that shows the direction the swimmer went, followed by a noun, so it has a phrase."
      ],
      how: [
        "Check each shown sentence for a preposition and its noun.",
        "Sentence 2 has behind the starting block, sentence 3 has from the bleachers, sentence 4 has into the cool water, and sentence 5 has for the wall.",
        "Sentence 6 has no preposition, so it is the sentence without a prepositional phrase."
      ],
      misconception: "A common mix-up is picking a short sentence. Check every shown sentence for a preposition and its noun.",
      why: "The answer is sentence 6: \"Coach Bell cheered loudly, and the whole crowd clapped too.\" Coach Bell cheered loudly, and the whole crowd clapped too has no preposition followed by a noun. The other shown sentences have phrases such as behind the starting block and into the cool water.",
      like: ["SK-GUM4-1-C11"]
    },
    {
      id: "SK-GUM4-1-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: ["p6"],
      prompt: "Pick a better preposition for the blank so sentence 9 makes sense.",
      text: "My team cheered {0} the last relay, and our voices were loud.",
      slots: [
        {
          options: ["during","beside","toward"],
          answer: 0
        }
      ],
      clue: "Say the sentence out loud with each word in the blank. Decide which one makes sense with the noun.",
      hints: [
        "Say the sentence out loud with each word in the blank. Decide which one makes sense with the noun.",
        "Say the noun after the blank. Then read the words before the blank and test each choice with both.",
        "A relay is a race, not a road, so one of the place words cannot fit."
      ],
      how: [
        "Read the sentence with each word in the blank.",
        "A relay is a race that takes a few minutes, so the phrase should tell when.",
        "The answer is during. Beside and toward name places or directions, and a race is not a place."
      ],
      misconception: "A common mix-up is leaving the word in the draft. Say the full phrase and ask if it makes sense.",
      why: "The answer is during. During the last relay tells when the team cheered. Beside and toward are place words, so they do not fit a race.",
      like: ["SK-GUM4-1-C12"]
    },
    {
      id: "SK-GUM4-1-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: ["p6"],
      prompt: "Read the groups of words that begin with from and into. Select the TWO correct claims.",
      pick: 2,
      choices: [
        {
          text: "The words from and into are the prepositions.",
          correct: true
        },
        {
          text: "Bleachers and water are the nouns that finish the groups.",
          correct: true
        },
        {
          text: "Both groups of words give the time of the swim meet."
        },
        {
          text: "The verb dove belongs inside the group in sentence 4."
        },
        {
          text: "Tia and I are the nouns that finish the groups."
        }
      ],
      clue: "Find the group that begins with from in sentence 3 and the group that begins with into in sentence 4. Then check each claim.",
      hints: [
        "Find the group that begins with from in sentence 3 and the group that begins with into in sentence 4. Then check each claim.",
        "Name the first word and the last word of each group, then decide what each group gives.",
        "The word dove comes before the preposition into, so it is outside the group in sentence 4."
      ],
      how: [
        "Find the groups: from the bleachers in sentence 3 and into the cool water in sentence 4.",
        "From and into are the prepositions, and bleachers and water are the nouns that end the groups.",
        "The other claims are false: neither group gives a time, dove is not in the group, and Tia and I are not the nouns that end the groups."
      ],
      misconception: "A common mix-up is choosing a claim that names words from the sentence but not from the phrase. Check the exact words inside each group.",
      why: "The answers are \"The words from and into are the prepositions.\" and \"Bleachers and water are the nouns that finish the groups.\" From and into are prepositions, and bleachers and water end the groups. Neither group gives a time, dove is not in the group, and Tia and I are not the ending nouns.",
      like: ["SK-GUM4-1-C13"]
    },
    {
      id: "SK-GUM4-1-S14",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: [],
      stem: "The ice melted.",
      prompt: "Choose the revision that adds words about time.",
      choices: [
        {
          text: "The ice melted after the first hot hour.",
          correct: true
        },
        {
          text: "The ice melted on the bright windowsill outside."
        },
        {
          text: "The ice melted into a tiny clear puddle."
        },
        {
          text: "The ice melted quickly and silently today."
        }
      ],
      clue: "Add each detail and read it. Words about time end with a noun that names a time.",
      hints: [
        "Add each detail and read it. Words about time end with a noun that names a time.",
        "Look at the noun at the end of each phrase. Ask whether it names a time, a place or a result.",
        "One revision has only a how word and no preposition, so it adds no phrase."
      ],
      how: [
        "Check each revision for a prepositional phrase and name its noun.",
        "After the first hot hour ends with a time, so it tells when.",
        "The answer is \"The ice melted after the first hot hour.\" On the bright windowsill outside names a place, into a tiny clear puddle shows what the ice became, and quickly and silently today has no phrase."
      ],
      misconception: "A common mix-up is picking a phrase that describes the ice. Look for a noun that names a time.",
      why: "The answer is \"The ice melted after the first hot hour.\" After the first hot hour ends with a time, so it tells when the ice melted. The other revisions name a place, show a result or have no phrase.",
      like: ["SK-GUM4-1-C14"]
    },
    {
      id: "SK-GUM4-1-S15",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:C:form-and-use-prepositional-phrases"
      ],
      passages: [],
      prompt: "Which choice adds exactly one detail about time and exactly one about location?",
      choices: [
        {
          text: "Until dark, hikers waited inside a stone shelter.",
          correct: true
        },
        {
          text: "Hikers waited inside a stone shelter and along a mossy wall."
        },
        {
          text: "Until dark and since breakfast, hikers waited together."
        },
        {
          text: "Hikers waited carrying a map until noon."
        }
      ],
      clue: "Find the prepositional phrases in each sentence. Then decide what each gives.",
      hints: [
        "Find the prepositional phrases in each sentence. Then decide what each gives.",
        "A correct sentence needs two different kinds of phrases. Check each choice for one time and one place.",
        "One choice has two phrases, but both of them name places, not times."
      ],
      how: [
        "Mark each phrase in every choice and ask whether it gives a time or a place.",
        "Until dark gives a time, and inside a stone shelter gives a place.",
        "The answer is \"Until dark, hikers waited inside a stone shelter.\" The other choices have two places, two times, or only a time."
      ],
      misconception: "A common mix-up is counting phrases without checking what each one gives. Look for one time and one place.",
      why: "The answer is \"Until dark, hikers waited inside a stone shelter.\" Until dark names a time, and inside a stone shelter names a place. The other choices have two place phrases, two time phrases, or only one time phrase.",
      like: ["SK-GUM4-1-C15"]
    }
  ],
  addons: {
    "SK-GUM4-1-P1": {
      hints: [
        "A prepositional phrase begins with a preposition and ends with a noun. Look for both.",
        "Read the sentence and find the little word that points to a noun. Then check where the phrase begins and ends.",
        "One choice stops on a small word and has no noun after it."
      ],
      how: [
        "Find the preposition, a small word like across.",
        "Read on to the noun it points to. The phrase is across the pond.",
        "The other choices leave out the preposition or stop too soon."
      ],
      misconception: "A common mix-up is picking the words that name the action. The phrase starts at the preposition."
    },
    "SK-GUM4-1-P2": {
      hints: [
        "Think about what the phrase should tell. Then try each word in the blank and listen.",
        "Look at the noun after the blank. Ask whether it names a place or a time.",
        "The word about does not make sense with a garage, whatever the phrase tells."
      ],
      how: [
        "The phrase should tell where the poles are kept.",
        "Try each word before the garage.",
        "In the garage names a place, so in fits."
      ],
      misconception: "A common mix-up is picking the first word that sounds right. Say the whole phrase to check it."
    },
    "SK-GUM4-1-P3": {
      hints: [
        "Look at the noun at the end of each phrase. Ask whether it names a place or a time.",
        "Do the phrases you are sure about first. Then use the same question for the rest.",
        "Some of these nouns name places you could point to, and some name moments in the day. Sort the nouns first, then match each phrase."
      ],
      how: [
        "Find the noun at the end of each phrase.",
        "Shelf and mailbox are places. Breakfast, game and noon are times.",
        "Match the places to Where and the times to When."
      ],
      misconception: "A common mix-up is judging by the first word. The noun at the end decides."
    },
    "SK-GUM4-1-P4": {
      hints: [
        "Find the phrase in each sentence. Then ask what it names.",
        "Check each sentence for a small word followed by a noun. Then decide whether the noun is a place.",
        "One sentence has no preposition at all, so it has no phrase."
      ],
      how: [
        "Find the phrase in each sentence.",
        "In a tall pine tree and by the back door name places.",
        "At six o'clock and after her bath name times, and the sentence about Rosa has no phrase."
      ],
      misconception: "A common mix-up is choosing any sentence with a phrase. The phrase has to name a place."
    },
    "SK-GUM4-1-P5": {
      hints: [
        "Find the prepositional phrase in each sentence. Then ask what its noun names.",
        "Read each phrase and ask whether its noun names a place, a time or a person.",
        "The phrase about sharks tells what the book is about, not when."
      ],
      how: [
        "Find the phrase in each sentence.",
        "On the bus is a place, with his sister is a person, and about sharks is a topic.",
        "Before bedtime is a time, so it tells when."
      ],
      misconception: "A common mix-up is picking the sentence with a place phrase. This question asks for a time."
    }
  },
  /* B8a:core:end */
  test: [
    { id: "SK-GUM4-1-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which group of words in this sentence is a prepositional phrase?",
      stem: "The puppy slept beside the warm fireplace.",
      choices: [
        { text: "beside the warm fireplace", correct: true },
        { text: "The puppy slept" },
        { text: "slept beside" },
        { text: "The puppy" }
      ],
      clue: "Find the preposition first. Then read on until you reach the noun it points to.",
      why: "The answer is beside the warm fireplace. Beside is the preposition, and fireplace is the noun that ends the phrase." },
    { id: "SK-GUM4-1-T2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the preposition that best completes the sentence.",
      text: "We always wash our hands {0} lunch.",
      slots: [ { options: ["before", "under", "across", "inside"], answer: 0 } ],
      clue: "The phrase should tell when we wash our hands. Try each word in the sentence and listen.",
      why: "The answer is before. Before lunch tells when we wash our hands. Under, across and inside tell about places, and they do not make sense with lunch." },
    { id: "SK-GUM4-1-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each prepositional phrase tell where or when?",
      cols: ["Where", "When"],
      rows: [
        { text: "under the bridge", answer: 0 },
        { text: "during recess", answer: 1 },
        { text: "through the tunnel", answer: 0 },
        { text: "in the morning", answer: 1 }
      ],
      clue: "Ask \"Is this a place or a time?\" for each phrase.",
      why: "Under the bridge and through the tunnel name places, so they tell where. During recess and in the morning name times, so they tell when." },
    { id: "SK-GUM4-1-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences have a prepositional phrase?",
      choices: [
        { text: "The frog jumped into the water.", correct: true },
        { text: "Dad baked bread for our neighbors.", correct: true },
        { text: "The frog jumped very high." },
        { text: "Dad smiled and waved." },
        { text: "We laughed and laughed." }
      ],
      clue: "Look for a preposition followed by a noun. A sentence without that pair does not have a prepositional phrase.",
      why: "The answers are \"The frog jumped into the water.\" and \"Dad baked bread for our neighbors.\" Into the water and for our neighbors are prepositional phrases. The other sentences have no preposition." },
    { id: "SK-GUM4-1-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence has a prepositional phrase that tells where?",
      choices: [
        { text: "Lena planted seeds in the garden.", correct: true },
        { text: "Lena planted seeds on Saturday." },
        { text: "Lena planted seeds very quickly." },
        { text: "Lena planted seeds and bulbs." }
      ],
      clue: "Find the sentence with a phrase that names a place.",
      why: "The answer is \"Lena planted seeds in the garden.\" In the garden names a place. On Saturday tells when, and the other two sentences have no prepositional phrase." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti",
  title: "Comparing words: -er, -est, more and most",
  teach: {
    big: "Use -er or more to compare two things, and use -est or most to compare three or more.",
    points: [
      "Use -er or more to compare two things. Use -est or most to compare three or more things.",
      "Short words add -er and -est: fast, faster, fastest. Some short words double the last letter first: big, bigger, biggest. Words that end in a consonant and y change the y to i: funny, funnier, funniest.",
      "Many longer words use more and most: more careful, most careful. Never use both, like more faster. A few words change completely: good, better, best; bad, worse, worst; and well, better, best."
    ],
    words: [
      { term: "comparative", means: "the form that compares two, like taller or more careful" },
      { term: "superlative", means: "the form that compares three or more, like tallest or most careful" }
    ],
    example: {
      label: "Example",
      lines: ["Jada's tower is tall.", "Eli's tower is taller than Jada's.", "Sam's tower is the tallest of all three."],
      note: "Taller compares two towers. Tallest compares all three. These rules work for words that tell how, too: Sam builds faster than Eli."
    },
    tip: "Count what you are comparing. Two things? Use -er or more. Three or more? Use -est or most."
  },
  learn: [
    {
      show: ["Of all the kids in my class, Marco runs the ___."],
      ask: "Should the blank be faster or fastest?",
      steps: [
        "Count what is being compared. Marco is compared with all the kids in his class.",
        "That is more than two, so use the -est form.",
        "Read it back: Of all the kids in my class, Marco runs the fastest."
      ],
      answer: "Fastest, because Marco is compared with the whole class."
    },
    {
      show: ["My cold was bad on Monday, but it was even ___ on Tuesday."],
      ask: "Which word fits: badder, worse or worst?",
      steps: [
        "Bad is one of the words that changes completely: bad, worse, worst.",
        "Two days are compared, Monday and Tuesday, so use the word for two.",
        "Badder is not correct in school writing, so cross it out."
      ],
      answer: "Worse, because it compares two days."
    }
  ],
  parent: "At the store or in the kitchen, compare things in twos and threes: \"Which apple is bigger? Which one is the biggest?\" Let your child choose the -er or -est word.",
  passages: [
    /* B8a:passages:start */
    {
      id: "p1",
      title: "Our Class Garden",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class planted a garden behind the school in April.",
          "(2) The sunflowers grew tallest than the beans, so we put them in the back row.",
          "(3) Of all our plants, the pumpkin vine spread the most quickly."
        ],
        [
          "(4) Dev says the carrots are the more colorful plants in the whole garden.",
          "(5) Mr. Ruiz says the soil by the fence is gooder than the soil by the gate.",
          "(6) We water the garden every morning, and Ana pours more gently than I do."
        ],
        [
          "(7) The beans look happier now than they did before the rain.",
          "(8) Our garden is bigger than the garden at the library.",
          "(9) It is the most beautiful garden I have ever seen.",
          "(10) Next month, we will pick the ripest tomatoes and share them."
        ]
      ]
    },
    {
      id: "p2",
      title: "Field Day Races",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Field Day was last Friday, and every grade ran in the races.",
          "(2) Of all the third graders, Nia ran the fastest in the long race.",
          "(3) Zane ran more quickly than his friend Leo in the relay."
        ],
        [
          "(4) Coach Bell said the heat made this the most hardest race of the year.",
          "(5) She promised that tomorrow's practice would be more easier than today's, so we cheered.",
          "(6) The tug of war was the loudest game of all, and the crowd cheered."
        ],
        [
          "(7) My team pulled harder than the other team, so we won the first round.",
          "(8) At the end, everyone got a ribbon and a cold drink of water.",
          "(9) I think Field Day is the best day of the school year."
        ]
      ]
    },
    {
      id: "p3",
      title: "A Visit to the Shelter",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Saturday, my family visited the animal shelter in town.",
          "(2) The kittens were smaller than I expected, and they were very soft.",
          "(3) The brown puppy ran more faster than the gray kitten in the play yard.",
          "(4) Of all the animals, the old dog was the calmest, so Dad petted him."
        ],
        [
          "(5) The parrot was the loudest bird in the room.",
          "(6) The rabbit had the worse day of the whole week, since she got a shot.",
          "(7) She hopped more slowly than the turtle after her shot."
        ],
        [
          "(8) My sister picked the sleepiest kitten, and I picked the friendliest one.",
          "(9) The nicest worker wrapped the kitten in a blanket.",
          "(10) I hope the kitten grows bigger and happier at our house."
        ]
      ]
    },
    {
      id: "p4",
      title: "Fishing With Grandpa",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last summer, my grandpa took me fishing at the lake.",
          "(2) My fishing pole was shortest than his, but it felt light in my hands.",
          "(3) The morning sun rose slowly over the water, and the air felt cool."
        ],
        [
          "(4) Grandpa says the cabin is the more peaceful place in the whole county.",
          "(5) He thinks his bait works more better than mine, but I caught the first fish.",
          "(6) We stayed quiet because loud noise scares fish away from the hook."
        ],
        [
          "(7) My cousin cast his line farther than I did, and it landed near a log.",
          "(8) Grandpa caught the biggest fish of the morning, so he grinned at us.",
          "(9) It was the happiest day I had all summer.",
          "(10) Next time, I will pack the warmest jacket I own."
        ]
      ]
    },
    {
      id: "p5",
      title: "The Paper Airplane Test",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) In science class, we tested how far three paper airplanes could fly.",
          "(2) Rosa folded the wings wide, and her plane flew farther than Eli's plane.",
          "(3) Of the three planes, Jon's plane flew the straightest down the hall."
        ],
        [
          "(4) The hallway floor was shiny, so the planes landed smoothly.",
          "(5) Ms. Park said Rosa's plane made the most longest flight of the day.",
          "(6) She thinks the next sheet will be more flatter than this one."
        ],
        [
          "(7) We learned that heavy paper falls faster than light paper.",
          "(8) Eli's plane crashed sooner than Jon's plane.",
          "(9) Everyone felt proud because the test was the most exciting event of the week.",
          "(10) We will try new paper next Friday."
        ]
      ]
    },
    {
      id: "p6",
      title: "The Last Day Parade",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our neighborhood held a parade on the last day of school.",
          "(2) The band marched more proudly than the dancers, and the crowd clapped along.",
          "(3) The tallest float had a giant paper dragon on top."
        ],
        [
          "(4) A girl on a bike rode more slower than the other kids in the line.",
          "(5) Mr. Lopez had the worse job of all, because he cleaned the street after the parade.",
          "(6) The fireworks were the better show of the whole summer, so everyone stayed late."
        ],
        [
          "(7) My brother clapped louder than anyone near us.",
          "(8) The last song was shorter than the first one.",
          "(9) I will remember this parade for a long time."
        ]
      ]
    }
    /* B8a:passages:end */
  ],
  practice: [
    { id: "SK-GUM4-2-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "A whale is {0} than a dolphin.",
      slots: [ { options: ["bigger", "biggest", "more bigger", "most big"], answer: 0 } ],
      clue: "Count the animals being compared. Then choose the form that fits that number.",
      why: "The answer is bigger. The sentence compares two animals, so use -er. Big doubles its g before -er. More bigger uses two comparing parts, which is never correct." },
    { id: "SK-GUM4-2-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Of the three puppies, Pepper is the {0}.",
      slots: [ { options: ["smaller", "smallest", "most small", "more smaller"], answer: 1 } ],
      clue: "How many puppies are being compared? Choose the form that fits that number.",
      why: "The answer is smallest. Pepper is compared with three puppies, so use -est. Small is a short word, so it adds -est instead of using most." },
    { id: "SK-GUM4-2-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "This is the most beautiful garden in Savannah.", correct: true },
        { text: "This puzzle is more harder than the last one." },
        { text: "Kai is the goodest swimmer on our team." },
        { text: "Today is more hot than it was yesterday." }
      ],
      clue: "Check each comparing word. Short words add -er or -est, long words use more or most, and some words change completely.",
      why: "The answer is \"This is the most beautiful garden in Savannah.\" Beautiful is a long word, so it uses most. The others should say harder (not more harder), best (not goodest) and hotter (not more hot)." },
    { id: "SK-GUM4-2-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is each word used to compare two things, or three or more things?",
      cols: ["Two things", "Three or more things"],
      rows: [
        { text: "brighter", answer: 0 },
        { text: "most careful", answer: 1 },
        { text: "better", answer: 0 },
        { text: "worst", answer: 1 },
        { text: "quieter", answer: 0 },
        { text: "happiest", answer: 1 }
      ],
      clue: "Words with -er or more compare two. Words with -est or most compare three or more. Remember the words that change completely.",
      why: "Brighter, quieter and better compare two things. Most careful, happiest and worst compare three or more things. Better comes from good, and worst comes from bad." },
    { id: "SK-GUM4-2-P5", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the words that correctly complete the sentence.",
      text: "Sami sings {0} than his brother, but their sister sings the {1} of all.",
      slots: [
        { options: ["well", "better", "best", "gooder"], answer: 1 },
        { options: ["better", "best", "most good", "goodest"], answer: 1 }
      ],
      clue: "Well and good change completely when you compare. One part compares two people, and the other compares all three.",
      why: "The answers are better and best. Sami is compared with his brother, two people, so use better. Their sister is compared with all three, so use best. Gooder and goodest are not correct." }
  ],
  /* B8a:core:start */
  /* ---------- Expansion 2026-10-22, batch B8a (GUM Reinforce, first half) ----------
     core: fifteen items in three sets of five. { ref } reuses a practice item; the other practice items stay in Practice Together.
     Passages are used only by core and the similar bank; none is used by test.
     Author log: docs/expansion-2026-10-22/batches/B8a-author-log.md. NOT ACCEPTED: needs independent review. */
  core: {
    rev: "1",
    sets: [
      {
        title: "Set 1",
        items: [
          {
            ref: "SK-GUM4-2-P4"
          },
          {
            ref: "SK-GUM4-2-P5"
          },
          {
            id: "SK-GUM4-2-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: ["p1"],
            prompt: "Sentence 2 of the draft has a mistake. Choose the word that fixes it.",
            text: "The sunflowers grew {0} than the beans, so we put them in the back row.",
            slots: [
              {
                options: ["taller","tallest","more tall","most tall"],
                answer: 0
              }
            ],
            clue: "Look at the little word right after the blank. Then think about what the sentence is comparing.",
            hints: [
              "Look at the little word right after the blank. Then think about what the sentence is comparing.",
              "Reread the sentence and name each kind of plant it talks about. Then test each choice in the blank.",
              "Tallest is the form for the top one in a group of three or more."
            ],
            how: [
              "Name what the sentence compares: the sunflowers and the beans, which are two kinds of plants.",
              "The word than shows a comparison of two, and tall is a short word, so it adds -er.",
              "The answer is taller. Tallest is for three or more, and more tall and most tall add a helper word that a short word does not need."
            ],
            misconception: "A common mix-up is leaving the word that is already in the draft. Count what is being compared before you choose.",
            why: "The answer is taller. Taller compares the sunflowers with the beans, which is two things. Tallest is for three or more things, and more tall and most tall add a helper word that a short word does not need."
          },
          {
            id: "SK-GUM4-2-C04",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: ["p1"],
            prompt: "Among sentences 3, 4, 7, 8 and 9, select the ONE shown sentence that has a mistake in a comparing word.",
            targets: ["p1:1:3","p1:2:1","p1:3:1","p1:3:2","p1:3:3"],
            answer: ["p1:2:1"],
            pick: 1,
            clue: "Read each shown sentence and find its comparing word. Then ask what the sentence compares.",
            hints: [
              "Read each shown sentence and find its comparing word. Then ask what the sentence compares.",
              "For each shown sentence, count the things that are being compared. Then check whether the comparing word fits that count.",
              "Sentence 8 compares the garden with one other garden, and its comparing word fits that."
            ],
            how: [
              "Check each shown sentence: what is compared, and which comparing word is used?",
              "Sentences 3, 7, 8 and 9 each use a comparing word that fits what is compared.",
              "Sentence 4 compares the carrots with all the plants in the whole garden, so it needs most colorful. It says more colorful, which fits only two."
            ],
            misconception: "A common mix-up is picking the sentence with the longest comparing word. Count the things that are compared instead.",
            why: "The answer is sentence 4: \"Dev says the carrots are the more colorful plants in the whole garden.\" The carrots are compared with all the plants in the garden, so the sentence needs most colorful. The other shown sentences use the right form: most quickly, happier than, bigger than and most beautiful."
          },
          {
            id: "SK-GUM4-2-C05",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Answer Part A, then Part B.",
            partA: {
              prompt: "Sentence 5 has a mistake. Which revision fixes it?",
              choices: [
                {
                  text: "Mr. Ruiz says the soil by the fence is better than the soil by the gate.",
                  correct: true
                },
                {
                  text: "Mr. Ruiz says the soil by the fence is more better than the soil by the gate."
                },
                {
                  text: "Mr. Ruiz says the soil by the fence is best than the soil by the gate."
                },
                {
                  text: "Mr. Ruiz says the soil by the fence is more good than the soil by the gate."
                }
              ]
            },
            partB: {
              prompt: "Which fact explains why the correct revision is right?",
              choices: [
                {
                  text: "Good changes completely to better when two things are compared.",
                  correct: true
                },
                {
                  text: "Short words add -er, so good becomes gooder when two things are compared."
                },
                {
                  text: "Long words use more, so good becomes more good when two things are compared."
                },
                {
                  text: "Best is the form that goes with than when two things are compared."
                }
              ]
            },
            clue: "Decide how many things the sentence compares. Then find the form that fits, and think about why it fits.",
            hints: [
              "Decide how many things the sentence compares. Then find the form that fits, and think about why it fits.",
              "For Part A, read each revision out loud and compare it with the draft. For Part B, look for the fact about what happens to the word good.",
              "Best is the form for three or more things, so it cannot be the fix for Part A."
            ],
            how: [
              "Part A: the sentence compares two soils, so it needs the comparing form of good. The answer is \"Mr. Ruiz says the soil by the fence is better than the soil by the gate.\"",
              "The other revisions add a helper word to a word that already compares, or use best, which is for three or more.",
              "Part B: the fact is \"Good changes completely to better when two things are compared.\""
            ],
            misconception: "A common mix-up is adding -er to every short word. A few words, like good, change completely.",
            why: "Part A: \"Mr. Ruiz says the soil by the fence is better than the soil by the gate.\" Part B: \"Good changes completely to better when two things are compared.\" Good is one of the words that changes completely: good, better, best. Two soils are compared, so better is the form to use, and the other revisions are not built correctly."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM4-2-C06",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: ["p2"],
            prompt: "Sentence 6 of the draft has a mistake. Choose the words that fix it.",
            text: "She promised that tomorrow's practice would be {0} than today's, so we cheered.",
            slots: [
              {
                options: ["easier","more easier","easyer","most easy"],
                answer: 0
              }
            ],
            clue: "Say the sentence with each choice and listen for the one that is built the way a comparing word should be.",
            hints: [
              "Say the sentence with each choice and listen for the one that is built the way a comparing word should be.",
              "Look at the words in the draft that come before than. Ask whether both of them are needed.",
              "Most easy uses the helper word for three or more, and this sentence compares today with tomorrow."
            ],
            how: [
              "Find the comparison: tomorrow's practice is compared with today's, which is two things.",
              "Easy is a short word that ends in a consonant and y, so the y changes to i before -er: easier.",
              "The answer is easier. More easier uses two comparing parts, easyer keeps the y, and most easy is for three or more."
            ],
            misconception: "A common mix-up is adding more to a word that already has -er. Use only one comparing part.",
            why: "The answer is easier. Easier changes the y to i before -er, and it compares tomorrow's practice with today's. More easier uses two comparing parts, easyer keeps the y, and most easy is for three or more."
          },
          {
            id: "SK-GUM4-2-C07",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: [],
            prompt: "Which TWO comparing words are spelled correctly?",
            pick: 2,
            choices: [
              {
                text: "sleepyer"
              },
              {
                text: "thinner",
                correct: true
              },
              {
                text: "wetest"
              },
              {
                text: "sleepier",
                correct: true
              },
              {
                text: "thiner"
              }
            ],
            clue: "Say each base word, then picture it with the comparing ending added. Check the spelling letter by letter.",
            hints: [
              "Say each base word, then picture it with the comparing ending added. Check the spelling letter by letter.",
              "Look at the last letters of each base word. Then see whether the new spelling keeps them or changes them.",
              "Wetest leaves out a letter that the base word needs."
            ],
            how: [
              "Write each base word and add the ending: sleepy, thin, wet.",
              "Sleepy ends with a consonant and y, so the y changes to i: sleepier. Thin ends with one vowel and one consonant, so the n doubles: thinner.",
              "The answers are thinner and sleepier. Sleepyer keeps the y, thiner skips the second n, and wetest skips the second t."
            ],
            misconception: "A common mix-up is adding the ending without changing the word. Check whether the last letters need to change first.",
            why: "The answers are \"thinner\" and \"sleepier\". Sleepier changes the y to i, and thinner doubles the n. Sleepyer keeps the y, thiner has only one n, and wetest has only one t."
          },
          {
            id: "SK-GUM4-2-C08",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: [],
            prompt: "Choose the words that make the sentence correct.",
            text: "Rosa writes {0} than her brother, but Grandpa writes the {1} of all.",
            slots: [
              {
                options: ["more neatly","neatlier","more neat","most neatly"],
                answer: 0
              },
              {
                options: ["most neatly","more neatly","neatlest","most neat"],
                answer: 0
              }
            ],
            clue: "Read the whole sentence out loud with a choice in each blank, and listen for a comparison that sounds complete.",
            hints: [
              "Read the whole sentence out loud with a choice in each blank, and listen for a comparison that sounds complete.",
              "Count the people in each part of the sentence. Then test each choice in its blank, one blank at a time.",
              "Look only at the first blank. Neatlier is not a word, so cross it out."
            ],
            how: [
              "The first part compares Rosa with her brother, which is two people. The second part compares Grandpa with both of them and the rest of his family.",
              "Words that end in -ly use more for two and most for three or more.",
              "The answers are more neatly and most neatly. Neatlier and neatlest are not words, and neat describes a noun instead of telling how someone writes."
            ],
            misconception: "A common mix-up is using the adjective form for a word that tells how. Writing neatly tells how, so it needs neatly.",
            why: "The answers are more neatly and most neatly. Rosa and her brother are two people, so more neatly fits the first blank. Grandpa is compared with everyone else, so most neatly fits the second. Neat describes a noun, and it does not tell how someone writes."
          },
          {
            id: "SK-GUM4-2-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: ["p2"],
            prompt: "A classmate says that most hardest in sentence 5 is correct because the race was very hard. What is the best response?",
            choices: [
              {
                text: "Hardest already shows the most, so most should be taken out.",
                correct: true
              },
              {
                text: "Hardest should change to harder because only two races are compared."
              },
              {
                text: "Most should change to more because the heat made the race hard."
              },
              {
                text: "Hardest should be spelled hardiest because it ends in a consonant."
              }
            ],
            clue: "Look at the two comparing parts in the phrase. Ask what each part is already doing.",
            hints: [
              "Look at the two comparing parts in the phrase. Ask what each part is already doing.",
              "Read the phrase most hardest and decide whether hardest needs any help to show the top one.",
              "The race is compared with every race of the year, so a response about two races does not fit."
            ],
            how: [
              "Find the phrase in sentence 5: the most hardest race of the year.",
              "Hardest has -est on it, so it already means the most. Adding most says it twice.",
              "The answer is \"Hardest already shows the most, so most should be taken out.\""
            ],
            misconception: "A common mix-up is adding most to make a word stronger. A word with -est never needs most.",
            why: "The answer is \"Hardest already shows the most, so most should be taken out.\" Hardest ends with -est, so it already means the most. Using most as well says it twice, so the sentence should say the hardest race of the year."
          },
          {
            id: "SK-GUM4-2-C10",
            type: "hottext",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: ["p2"],
            prompt: "Among sentences 1, 2, 3, 7 and 8, select the TWO shown sentences that compare exactly two things.",
            targets: ["p2:1:1","p2:1:2","p2:1:3","p2:3:1","p2:3:2"],
            answer: ["p2:1:3","p2:3:2"],
            pick: 2,
            clue: "A comparison has to name what is being compared. Check what each shown sentence compares.",
            hints: [
              "A comparison has to name what is being compared. Check what each shown sentence compares.",
              "For each shown sentence, count the people, teams or games that are being compared. Skip any sentence that compares nothing.",
              "Sentence 2 compares Nia with all the third graders, which is more than two."
            ],
            how: [
              "Check each shown sentence for a comparing word and count what it compares.",
              "Sentence 3 compares Zane with Leo, two people. Sentence 8 compares one team with the other team, two teams.",
              "Sentence 1 compares nothing, and sentences 2 and 7 compare with all the third graders and with every game."
            ],
            misconception: "A common mix-up is picking any sentence that has a comparing word. Count the things that are compared.",
            why: "The answers are sentences 3 and 8: \"Zane ran more quickly than his friend Leo in the relay.\" and \"At the end, everyone got a ribbon and a cold drink of water.\" Zane and Leo are two people, and my team and the other team are two teams. Sentences 2 and 7 compare more than two things, and sentence 1 has no comparing word."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM4-2-C11",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: [],
            stem: "Sentence A: The new filter works better than the old filter. Sentence B: It is the best filter in the lab.",
            prompt: "How are better and best alike and different?",
            choices: [
              {
                text: "Both come from good, but better compares two things and best compares three or more.",
                correct: true
              },
              {
                text: "Both come from good, but better compares three or more things and best compares two things."
              },
              {
                text: "Both come from bad, but better compares two things and best compares three or more."
              },
              {
                text: "They are not alike, because only one of them comes from the word good."
              }
            ],
            clue: "Think about where each comparing word comes from and when it is used.",
            hints: [
              "Think about where each comparing word comes from and when it is used.",
              "Reread both sentences and notice what each one is compared with.",
              "The filters work well, so a choice that traces the words to bad cannot be right."
            ],
            how: [
              "Sentence A compares the new filter with one old filter, so better is the word for two.",
              "Sentence B compares one filter with all the filters in the lab, so best is the word for three or more.",
              "Both words come from good: good, better, best. The answer is \"Both come from good, but better compares two things and best compares three or more.\""
            ],
            misconception: "A common mix-up is thinking a comparing word must end in -er or -est. Better and best come from good, so they are built differently.",
            why: "The answer is \"Both come from good, but better compares two things and best compares three or more.\" Better compares the new filter with one old filter, which is two things. Best compares one filter with all the filters in the lab, which is three or more. Both words come from good."
          },
          {
            id: "SK-GUM4-2-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: ["p3"],
            prompt: "Sentence 6 of the draft has a mistake. Choose the word that fixes it.",
            text: "The rabbit had the {0} day of the whole week, since she got a shot.",
            slots: [
              {
                options: ["worst","worse","most worse","more bad"],
                answer: 0
              }
            ],
            clue: "Read the sentence and count how many days are being compared. Then say each choice in the blank.",
            hints: [
              "Read the sentence and count how many days are being compared. Then say each choice in the blank.",
              "Look at the last words of the phrase that tell what the rabbit's day is compared with.",
              "Most worse puts the helper word for three or more in front of a word that already compares."
            ],
            how: [
              "The sentence compares the rabbit's day with every day in the whole week, which is more than two.",
              "Bad is a word that changes completely: bad, worse, worst. The word for three or more is worst.",
              "The answer is worst. Worse is for two things, and most worse and more bad are not correct."
            ],
            misconception: "A common mix-up is leaving worse because it sounds strong. Use the form that matches the number of things compared.",
            why: "The answer is worst. The rabbit's day is compared with every day of the whole week, which is more than two, so it needs the form for three or more. Bad changes completely: bad, worse, worst."
          },
          {
            id: "SK-GUM4-2-C13",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: ["p3"],
            prompt: "Sentence 3 of the draft has a mistake. Choose the TWO revisions that fix it.",
            pick: 2,
            choices: [
              {
                text: "The brown puppy ran faster than the gray kitten in the play yard.",
                correct: true
              },
              {
                text: "The brown puppy ran more quickly than the gray kitten in the play yard.",
                correct: true
              },
              {
                text: "The brown puppy ran fastest than the gray kitten in the play yard."
              },
              {
                text: "The brown puppy ran more fastest than the gray kitten in the play yard."
              },
              {
                text: "The brown puppy ran most quickly than the gray kitten in the play yard."
              }
            ],
            clue: "Both fixes must keep the meaning of the sentence. Check each choice for a comparing word that is built correctly.",
            hints: [
              "Both fixes must keep the meaning of the sentence. Check each choice for a comparing word that is built correctly.",
              "Find the comparing word in each choice. Ask whether it is built correctly and whether it fits a comparison of the puppy and the kitten.",
              "Fastest than puts the form for three or more next to than, which compares two."
            ],
            how: [
              "Find the comparison: the puppy is compared with the kitten, which is two animals.",
              "Fast is a short word, so it adds -er: faster. Quickly ends in -ly, so it uses more: more quickly.",
              "The answers are \"The brown puppy ran faster than the gray kitten in the play yard.\" and \"The brown puppy ran more quickly than the gray kitten in the play yard.\" The others use more or most with -est, or use most with than."
            ],
            misconception: "A common mix-up is picking only one kind of fix. A short word can add -er, and a word that ends in -ly can use more.",
            why: "The answers are \"The brown puppy ran faster than the gray kitten in the play yard.\" and \"The brown puppy ran more quickly than the gray kitten in the play yard.\" Faster and more quickly both compare the puppy with the kitten. The other choices use more with -est, or use -est or most with than, which compares only two."
          },
          {
            id: "SK-GUM4-2-C14",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: [],
            stem: "Three neighbors help at the farm: Mr. Cho, Ms. Diaz and Mr. Kent.",
            prompt: "Which sentence compares the three neighbors correctly?",
            choices: [
              {
                text: "Ms. Diaz is the friendliest of the three neighbors.",
                correct: true
              },
              {
                text: "Ms. Diaz is the friendlyest of the three neighbors."
              },
              {
                text: "Ms. Diaz is the most friendlier of the three neighbors."
              },
              {
                text: "Ms. Diaz is the more friendly of the three neighbors."
              }
            ],
            clue: "Count the neighbors, and look at how each choice builds its comparing word from friendly.",
            hints: [
              "Count the neighbors, and look at how each choice builds its comparing word from friendly.",
              "Compare the endings of the choices and the letters just before them.",
              "The more friendly names the better of a pair, and this sentence names three neighbors."
            ],
            how: [
              "Count the neighbors: Mr. Cho, Ms. Diaz and Mr. Kent make three.",
              "Friendly ends with a consonant and y, so the y changes to i before -est: friendliest.",
              "The answer is \"Ms. Diaz is the friendliest of the three neighbors.\" Friendlyest keeps the y, most friendlier uses two comparing parts, and the more friendly is for two."
            ],
            misconception: "A common mix-up is adding -est without changing the y. Change the y to i first.",
            why: "The answer is \"Ms. Diaz is the friendliest of the three neighbors.\" Three neighbors are compared, so the sentence needs the -est form, and friendly changes its y to i. The other choices keep the y, use two comparing parts, or use the form for two."
          },
          {
            id: "SK-GUM4-2-C15",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
            ],
            passages: [],
            stem: "Of all the dancers on the stage, Lila moved the most gracefully.",
            prompt: "A classmate says that most gracefully is wrong and it should be gracefulest. What is the best response?",
            choices: [
              {
                text: "Gracefully is a long word that ends in -ly, so it uses most instead of -est.",
                correct: true
              },
              {
                text: "Gracefully is a short word, so it should add -est to the end."
              },
              {
                text: "Gracefully should use more, because Lila is compared with all the other dancers on the stage."
              },
              {
                text: "Gracefully tells what Lila is, so it cannot be used with the word most."
              }
            ],
            clue: "Look at the word gracefully and think about how long it is and how it ends.",
            hints: [
              "Look at the word gracefully and think about how long it is and how it ends.",
              "Count the dancers that Lila is compared with. Then decide whether gracefully is a short word or a long word.",
              "Gracefully tells how Lila moved, not what she is."
            ],
            how: [
              "Gracefully is a long word, and it ends in -ly because it tells how Lila moved.",
              "Long words and words that end in -ly use more or most instead of -er or -est.",
              "Lila is compared with all the dancers, so the answer is \"Gracefully is a long word that ends in -ly, so it uses most instead of -est.\""
            ],
            misconception: "A common mix-up is adding -est to every word that tells how. Long words use most instead.",
            why: "The answer is \"Gracefully is a long word that ends in -ly, so it uses most instead of -est.\" Gracefully is a long word that ends in -ly, so it uses most instead of -est. Lila is compared with all the dancers, so most is the right helper word."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM4-2-S01",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: [],
      prompt: "Place each word in the group where it belongs.",
      cols: ["A pair","A whole group"],
      rows: [
        {
          text: "stronger",
          answer: 0
        },
        {
          text: "most polite",
          answer: 1
        },
        {
          text: "more comfortable",
          answer: 0
        },
        {
          text: "smartest",
          answer: 1
        },
        {
          text: "best",
          answer: 1
        },
        {
          text: "cooler",
          answer: 0
        }
      ],
      clue: "Look at how each word is built before you sort it.",
      hints: [
        "Look at how each word is built before you sort it.",
        "Sort the words you are sure about first, and leave the odd ones for last.",
        "Best changes completely from good, so think about what it stands for."
      ],
      how: [
        "Check each word for an ending or a helper word.",
        "Stronger, more comfortable and cooler describe a pair. Most polite, smartest and best describe a whole group.",
        "Best comes from good."
      ],
      misconception: "A common mix-up is sorting by how long a word looks. The ending or the helper word decides.",
      why: "Stronger, more comfortable and cooler set one thing beside one other. Most polite, smartest and best set one thing beside a whole group.",
      like: ["SK-GUM4-2-P4"]
    },
    {
      id: "SK-GUM4-2-S02",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: [],
      prompt: "Pick the words that complete the sentence correctly.",
      text: "Our team played {0} on Monday than on Friday, but Saturday was the {1} game of the season.",
      slots: [
        {
          options: ["worse","more badly","most bad","worst"],
          answer: 0
        },
        {
          options: ["worst","worse","most bad","more badly"],
          answer: 0
        }
      ],
      clue: "Test each choice in its blank, and notice what each blank sets side by side.",
      hints: [
        "Test each choice in its blank, and notice what each blank sets side by side.",
        "Read the blank that follows played, then the blank that follows the. Each one deals with a different number of days or games.",
        "Most bad is not built the way school writing builds a comparing word."
      ],
      how: [
        "The first blank sets Monday beside Friday, which is two days.",
        "The second blank sets Saturday beside every game of the season. Bad changes completely: bad, worse, worst.",
        "The answers are worse and worst."
      ],
      misconception: "A common mix-up is putting more or most in front of bad. Bad changes completely when you compare.",
      why: "The answers are worse and worst. Monday and Friday are two days, so the first blank needs worse. Saturday is set beside every game of the season, so the second blank needs worst. Bad changes completely: bad, worse, worst.",
      like: ["SK-GUM4-2-P5"]
    },
    {
      id: "SK-GUM4-2-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: ["p4"],
      prompt: "The writer made an error in sentence 2. Pick the word that corrects it.",
      text: "My fishing pole was {0} than his, but it felt light in my hands.",
      slots: [
        {
          options: ["shorter","shortest","more short","most short"],
          answer: 0
        }
      ],
      clue: "Think about how many poles are in the sentence before you choose.",
      hints: [
        "Think about how many poles are in the sentence before you choose.",
        "Find the two poles the writer mentions, then try every choice in the blank.",
        "Shortest is the form for the one at the bottom of a long line."
      ],
      how: [
        "The writer sets one pole beside one other pole, so two things are compared.",
        "The word than goes with a pair, and short takes -er.",
        "The answer is shorter. Shortest is for three or more, and the choices with more or most add a helper word that short does not need."
      ],
      misconception: "A common mix-up is trusting the word that the writer first wrote. Count what the sentence compares before you decide.",
      why: "The answer is shorter. Shorter sets the writer's pole beside one other pole. Shortest is for three or more, and more short and most short add a helper word that a short word does not need.",
      like: ["SK-GUM4-2-C03"]
    },
    {
      id: "SK-GUM4-2-S04",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: ["p4"],
      prompt: "Look at sentences 4, 6, 7, 8 and 10 on the draft. Pick the ONE of them with a faulty comparing word.",
      targets: ["p4:2:1","p4:2:3","p4:3:1","p4:3:2","p4:3:4"],
      answer: ["p4:2:1"],
      pick: 1,
      clue: "Find the comparing word in each of the five sentences. Skip any sentence that has none.",
      hints: [
        "Find the comparing word in each of the five sentences. Skip any sentence that has none.",
        "Ask how many things each comparing word sets side by side, then see if the word suits that number.",
        "Sentence 8 names one fish and the whole morning, and its comparing word suits that."
      ],
      how: [
        "Look for a comparing word in each of the five sentences.",
        "Sentences 7, 8 and 10 use words that suit what they compare, and sentence 6 has no comparing word.",
        "Sentence 4 sets the cabin beside every place in the county, so it needs most peaceful, not more peaceful."
      ],
      misconception: "A common mix-up is trusting a sentence that sounds smooth. Count what each comparing word sets side by side.",
      why: "The answer is sentence 4: \"Grandpa says the cabin is the more peaceful place in the whole county.\" The cabin is set beside every place in the county, so the sentence needs most peaceful. Sentence 6 has no comparing word, and sentences 7, 8 and 10 use farther than, biggest and warmest correctly.",
      like: ["SK-GUM4-2-C04"]
    },
    {
      id: "SK-GUM4-2-S05",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: ["p4"],
      prompt: "Answer Part A first, and then answer Part B.",
      partA: {
        prompt: "Which new version of sentence 5 corrects the draft?",
        choices: [
          {
            text: "He thinks his bait works better than mine, but I caught the first fish.",
            correct: true
          },
          {
            text: "He thinks his bait works more better than mine, but I caught the first fish."
          },
          {
            text: "He thinks his bait works gooder than mine, but I caught the first fish."
          },
          {
            text: "He thinks his bait works most good than mine, but I caught the first fish."
          }
        ]
      },
      partB: {
        prompt: "Which statement supports the corrected version?",
        choices: [
          {
            text: "Well and good become better when the writer sets one thing beside one other.",
            correct: true
          },
          {
            text: "Words that tell how always add -est when the writer sets one thing beside one other."
          },
          {
            text: "Better needs a helper word in front of it when the writer sets one thing beside one other."
          },
          {
            text: "Than tells the reader to use best when the writer sets one thing beside one other."
          }
        ]
      },
      clue: "Work out whether the writer sets two things or a group side by side. Then pick the new version that suits it and a statement that backs it up.",
      hints: [
        "Work out whether the writer sets two things or a group side by side. Then pick the new version that suits it and a statement that backs it up.",
        "For Part A, say each new version out loud next to the draft. For Part B, look for the statement about the words good and well.",
        "Better never needs a helper word, so one statement about better cannot be true."
      ],
      how: [
        "Part A: bait is set beside bait, which is a pair, so the draft needs the comparing form. The answer is \"He thinks his bait works better than mine, but I caught the first fish.\"",
        "The other versions add a helper word to better or use gooder or most good, which are not built correctly.",
        "Part B: the statement is \"Well and good become better when the writer sets one thing beside one other.\""
      ],
      misconception: "A common mix-up is choosing the version that looks the most careful. Check how the comparing word is built.",
      why: "Part A: \"He thinks his bait works better than mine, but I caught the first fish.\" Part B: \"Well and good become better when the writer sets one thing beside one other.\" Well and good become better when two things are compared. The other versions add a helper word to better, or use gooder or most good, and the other statements are not true.",
      like: ["SK-GUM4-2-C05"]
    },
    {
      id: "SK-GUM4-2-S06",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: ["p5"],
      prompt: "The writer slipped up in sentence 6. Which choice belongs in the blank?",
      text: "She thinks the next sheet will be {0} than this one.",
      slots: [
        {
          options: ["flatter","more flatter","flater","most flat"],
          answer: 0
        }
      ],
      clue: "Try each choice in the blank and notice which one is built the way a comparing word should be.",
      hints: [
        "Try each choice in the blank and notice which one is built the way a comparing word should be.",
        "Look at the part of the draft that comes before than. Ask whether it has two jobs that do the same thing.",
        "Most flat has the helper word for a group, and the sentence sets one sheet beside one other."
      ],
      how: [
        "One sheet is set beside one other sheet, which is two things.",
        "Flat ends with one vowel and one consonant, so the last letter doubles before -er: flatter.",
        "The answer is flatter. More flatter has two comparing parts, flater has one t, and most flat is for a group."
      ],
      misconception: "A common mix-up is stacking two comparing parts. One is enough.",
      why: "The answer is flatter. Flatter doubles the t, and it sets one sheet beside one other sheet. More flatter has two comparing parts, flater has one t, and most flat is for a group.",
      like: ["SK-GUM4-2-C06"]
    },
    {
      id: "SK-GUM4-2-S07",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: [],
      prompt: "Pick the TWO comparing words with the correct spelling.",
      pick: 2,
      choices: [
        {
          text: "shinyer"
        },
        {
          text: "redder",
          correct: true
        },
        {
          text: "hotest"
        },
        {
          text: "shinier",
          correct: true
        },
        {
          text: "reder"
        }
      ],
      clue: "Write each base word on paper, then add the ending and check every letter.",
      hints: [
        "Write each base word on paper, then add the ending and check every letter.",
        "Study the last letters of each base word, then see if the new word keeps them or changes them.",
        "Hotest drops a letter that its base word needs."
      ],
      how: [
        "Write the base words: shiny, red, hot.",
        "Shiny ends with a consonant and y, so the y becomes i: shinier. Red ends with one vowel and one consonant, so the d doubles: redder.",
        "The answers are redder and shinier. Shinyer keeps the y, reder has one d, and hotest has one t."
      ],
      misconception: "A common mix-up is sticking the ending on as it is. Check the last letters of the base word first.",
      why: "The answers are \"redder\" and \"shinier\". Shinier changes the y to i, and redder doubles the d. Shinyer keeps the y, reder has one d, and hotest has one t.",
      like: ["SK-GUM4-2-C07"]
    },
    {
      id: "SK-GUM4-2-S08",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: [],
      prompt: "Select the words that finish the sentence correctly.",
      text: "Nadia waits {0} than her cousin does, and Uncle Lee waits the {1} of the whole family.",
      slots: [
        {
          options: ["more patiently","patientlier","more patient","most patiently"],
          answer: 0
        },
        {
          options: ["most patiently","more patiently","patientlest","most patient"],
          answer: 0
        }
      ],
      clue: "Say the sentence with a choice in each blank, and listen for the one that makes a full comparison.",
      hints: [
        "Say the sentence with a choice in each blank, and listen for the one that makes a full comparison.",
        "Count who is set side by side in each half of the sentence, then test one blank at a time.",
        "Look at the first blank only. Patientlier is not a word."
      ],
      how: [
        "The first half sets Nadia beside her cousin, which is a pair. The second half sets Uncle Lee beside the whole family.",
        "A word that ends in -ly takes more for a pair and most for a group.",
        "The answers are more patiently and most patiently. Patientlier and patientlest are not words, and patient describes a person, not how someone waits."
      ],
      misconception: "A common mix-up is picking the word that describes a person. Waiting tells how, so it needs patiently.",
      why: "The answers are more patiently and most patiently. Nadia and her cousin are a pair, so more patiently fits the first blank. Uncle Lee is set beside the whole family, so most patiently fits the second. Patient describes a person, not how someone waits.",
      like: ["SK-GUM4-2-C08"]
    },
    {
      id: "SK-GUM4-2-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: ["p5"],
      prompt: "Mara thinks most longest in sentence 5 is fine because the flight was very long. How should you answer her?",
      choices: [
        {
          text: "Longest already means the most, so the word most is not needed.",
          correct: true
        },
        {
          text: "Longest should change to longer because only two flights were measured on that day."
        },
        {
          text: "Most should change to more because the plane flew a long way down the hall."
        },
        {
          text: "Longest should be spelled longgest because a short vowel comes before the g."
        }
      ],
      clue: "Examine the two parts of the phrase. Ask whether either part repeats the work of the other.",
      hints: [
        "Examine the two parts of the phrase. Ask whether either part repeats the work of the other.",
        "Say the phrase without the first part and decide whether the meaning is still complete.",
        "The sentence names the longest flight of the whole day, so an answer about only two flights does not suit it."
      ],
      how: [
        "Find the phrase in sentence 5: the most longest flight of the day.",
        "Longest ends in -est, so it already means the most. Most in front says it again.",
        "The answer is \"Longest already means the most, so the word most is not needed.\""
      ],
      misconception: "A common mix-up is thinking an extra word makes a comparison stronger. A word that ends in -est stands alone.",
      why: "The answer is \"Longest already means the most, so the word most is not needed.\" Longest ends in -est, so it already means the most. The sentence should say the longest flight of the day.",
      like: ["SK-GUM4-2-C09"]
    },
    {
      id: "SK-GUM4-2-S10",
      type: "hottext",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: ["p5"],
      prompt: "Look at sentences 2, 3, 4, 8 and 9 on the draft. Pick the TWO of them that compare one thing with one other thing.",
      targets: ["p5:1:2","p5:1:3","p5:2:1","p5:3:2","p5:3:3"],
      answer: ["p5:1:2","p5:3:2"],
      pick: 2,
      clue: "Find what each sentence sets beside something else. One of the five sets nothing beside anything.",
      hints: [
        "Find what each sentence sets beside something else. One of the five sets nothing beside anything.",
        "For each sentence, count the planes or events that are compared, then keep the sentences that compare a single pair.",
        "Sentence 3 sets Jon's plane beside all of the planes in the test."
      ],
      how: [
        "Look at what each of the five sentences compares.",
        "Sentence 2 sets Rosa's plane beside Eli's plane, and sentence 8 sets Eli's plane beside Jon's plane. Each is a single pair.",
        "Sentence 4 compares nothing, and sentences 3 and 9 set one thing beside a whole group."
      ],
      misconception: "A common mix-up is choosing every sentence with a comparing word. Keep the ones that name one pair.",
      why: "The answers are sentences 2 and 8: \"Rosa folded the wings wide, and her plane flew farther than Eli's plane.\" and \"Eli's plane crashed sooner than Jon's plane.\" Rosa's plane and Eli's plane are a pair, and Eli's plane and Jon's plane are a pair. Sentence 4 compares nothing, and sentences 3 and 9 set one thing beside a group.",
      like: ["SK-GUM4-2-C10"]
    },
    {
      id: "SK-GUM4-2-S11",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: [],
      stem: "Sentence A: Yesterday's storm was worse than last week's storm. Sentence B: It was the worst storm of the whole year.",
      prompt: "What do worse and worst share, and how do they differ?",
      choices: [
        {
          text: "Both come from bad, but worse sets one storm beside one other and worst sets one beside the whole year.",
          correct: true
        },
        {
          text: "Both come from bad, but worse sets one storm beside the whole year and worst sets one beside one other."
        },
        {
          text: "Both come from good, but worse sets one storm beside one other and worst sets one beside the whole year."
        },
        {
          text: "They share nothing, because worse is built from -er and worst is built from most."
        }
      ],
      clue: "Think about which base word each comparing word is built from and what each one sets side by side.",
      hints: [
        "Think about which base word each comparing word is built from and what each one sets side by side.",
        "Reread both sentences and notice what each storm is set beside.",
        "Yesterday's storm was harmful, so a choice that traces the words to good cannot be right."
      ],
      how: [
        "Sentence A sets yesterday's storm beside one other storm, so worse is the word for a pair.",
        "Sentence B sets one storm beside the whole year, so worst is the word for a group.",
        "Both words come from bad: bad, worse, worst. The answer is \"Both come from bad, but worse sets one storm beside one other and worst sets one beside the whole year.\""
      ],
      misconception: "A common mix-up is hunting for -er and -est on every word. Worse and worst come from bad, so they look different.",
      why: "The answer is \"Both come from bad, but worse sets one storm beside one other and worst sets one beside the whole year.\" Worse sets yesterday's storm beside one other storm, and worst sets it beside the whole year. Both words come from bad.",
      like: ["SK-GUM4-2-C11"]
    },
    {
      id: "SK-GUM4-2-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: ["p6"],
      prompt: "Sentence 6 has an error. Pick the word that corrects it.",
      text: "The fireworks were the {0} show of the whole summer, so everyone stayed late.",
      slots: [
        {
          options: ["best","better","most good","goodest"],
          answer: 0
        }
      ],
      clue: "Say each choice in the blank and think about how many shows the writer has in mind.",
      hints: [
        "Say each choice in the blank and think about how many shows the writer has in mind.",
        "Notice the words after the blank that name how long a time the writer is talking about.",
        "Goodest is not a word that school writing accepts."
      ],
      how: [
        "The writer sets the fireworks beside every show of the summer, which is more than two.",
        "Good changes completely: good, better, best. The form for a group is best.",
        "The answer is best. Better is for a pair, and most good and goodest are not correct."
      ],
      misconception: "A common mix-up is keeping better because it sounds nice. Match the form to the number of shows.",
      why: "The answer is best. The fireworks are set beside every show of the whole summer, so the sentence needs the form for a group. Good changes completely: good, better, best.",
      like: ["SK-GUM4-2-C12"]
    },
    {
      id: "SK-GUM4-2-S13",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: ["p6"],
      prompt: "Sentence 4 contains an error. Pick the TWO new versions that repair it.",
      pick: 2,
      choices: [
        {
          text: "A girl on a bike rode slower than the other kids in the line.",
          correct: true
        },
        {
          text: "A girl on a bike rode more slowly than the other kids in the line.",
          correct: true
        },
        {
          text: "A girl on a bike rode slowest than the other kids in the line."
        },
        {
          text: "A girl on a bike rode more slowlier than the other kids in the line."
        },
        {
          text: "A girl on a bike rode most slowly than the other kids in the line."
        }
      ],
      clue: "Both repairs must keep the meaning. Look at the comparing word in each version and check how it is built.",
      hints: [
        "Both repairs must keep the meaning. Look at the comparing word in each version and check how it is built.",
        "Find the comparing word in every version. Ask whether it is built correctly and whether it suits a girl and the other kids.",
        "Slowest than puts the form for a group beside than, which sets only two things side by side."
      ],
      how: [
        "The girl is set beside the other kids in the line, so the sentence compares her with the rest.",
        "Slow adds -er: slower. Slowly ends in -ly, so it takes more: more slowly.",
        "The answers are \"A girl on a bike rode slower than the other kids in the line.\" and \"A girl on a bike rode more slowly than the other kids in the line.\" The others stack comparing parts or use most with than."
      ],
      misconception: "A common mix-up is thinking only one repair works. Slow can add -er, and slowly can take more.",
      why: "The answers are \"A girl on a bike rode slower than the other kids in the line.\" and \"A girl on a bike rode more slowly than the other kids in the line.\" Slower and more slowly both set the girl beside the other kids. The other versions stack comparing parts or use -est or most with than.",
      like: ["SK-GUM4-2-C13"]
    },
    {
      id: "SK-GUM4-2-S14",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: [],
      stem: "Three kittens nap in a basket: Pip, Dot and Sox.",
      prompt: "Which sentence compares all three kittens correctly?",
      choices: [
        {
          text: "Dot is the noisiest of the three kittens.",
          correct: true
        },
        {
          text: "Dot is the noisyest of the three kittens."
        },
        {
          text: "Dot is the most noisier of the three kittens."
        },
        {
          text: "Dot is the more noisy of the three kittens."
        }
      ],
      clue: "Count the kittens, then look at how each choice builds its comparing word from noisy.",
      hints: [
        "Count the kittens, then look at how each choice builds its comparing word from noisy.",
        "Study the endings of the choices and the letters that come right before them.",
        "The more noisy names the louder one of a pair, and the sentence names three kittens."
      ],
      how: [
        "Count the kittens: Pip, Dot and Sox make three.",
        "Noisy ends with a consonant and y, so the y becomes i before -est: noisiest.",
        "The answer is \"Dot is the noisiest of the three kittens.\" Noisyest keeps the y, most noisier stacks two comparing parts, and the more noisy is for a pair."
      ],
      misconception: "A common mix-up is putting -est straight after the y. Change the y to i first.",
      why: "The answer is \"Dot is the noisiest of the three kittens.\" Three kittens are compared, so the sentence needs the -est form, and noisy changes its y to i. The other choices keep the y, stack two comparing parts, or use the form for a pair.",
      like: ["SK-GUM4-2-C14"]
    },
    {
      id: "SK-GUM4-2-S15",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:C:form-and-use-comparative-and-superlative-adjecti"
      ],
      passages: [],
      stem: "Of all the painters at the fair, Ben worked the most carefully.",
      prompt: "A friend says that most carefully is a mistake and the word should be carefullest. What is the best answer to give?",
      choices: [
        {
          text: "Carefully is a long word that ends in -ly, so it takes most in place of -est.",
          correct: true
        },
        {
          text: "Carefully is a short word, so the ending -est should be added to it."
        },
        {
          text: "Carefully should take more, because Ben is set beside all the other painters at the fair."
        },
        {
          text: "Carefully names what Ben is, so it can never come after the word most."
        }
      ],
      clue: "Check the length of carefully and the way it ends.",
      hints: [
        "Check the length of carefully and the way it ends.",
        "Count the painters that Ben is set beside, then decide whether carefully is short or long.",
        "Carefully tells how Ben worked, not what he is."
      ],
      how: [
        "Carefully is a long word, and it ends in -ly because it tells how Ben worked.",
        "Long words and words that end in -ly take more or most in place of -er or -est.",
        "Ben is set beside all the painters, so the answer is \"Carefully is a long word that ends in -ly, so it takes most in place of -est.\""
      ],
      misconception: "A common mix-up is adding -est to every word that tells how. Long words take most in place of it.",
      why: "The answer is \"Carefully is a long word that ends in -ly, so it takes most in place of -est.\" Carefully is a long word that ends in -ly, so it takes most in place of -est. Ben is set beside all the painters, so most is the right helper word.",
      like: ["SK-GUM4-2-C15"]
    }
  ],
  addons: {
    "SK-GUM4-2-P1": {
      hints: [
        "Look at the little word after the blank, and count the animals being compared.",
        "Check each choice for the size word and the letters that come before its ending.",
        "More bigger uses two comparing parts at once."
      ],
      how: [
        "Count the animals: a whale and a dolphin make two.",
        "Big is a short word and doubles its last letter before -er: bigger.",
        "More bigger uses two comparing parts, and most big is for three or more."
      ],
      misconception: "A common mix-up is adding more to a word that already has -er. Use only one comparing part."
    },
    "SK-GUM4-2-P2": {
      hints: [
        "Count the puppies in the sentence, then choose the form that fits that count.",
        "Look at the words at the start of the sentence that tell how many puppies are in the group.",
        "More smaller has two comparing parts, so it cannot be right."
      ],
      how: [
        "Count: the sentence says three puppies.",
        "Small is a short word, so it adds -est for three or more: smallest.",
        "Smaller is for two, and most small and more smaller are not correct."
      ],
      misconception: "A common mix-up is picking the -er form for any group. Count the puppies first."
    },
    "SK-GUM4-2-P3": {
      hints: [
        "Check the comparing word in each choice, one at a time.",
        "Look at how long the word is in each sentence, and at how its ending is built.",
        "Goodest is not a word, so one choice can be crossed out."
      ],
      how: [
        "Find the comparing word in each choice.",
        "Beautiful is a long word, so it uses most: most beautiful.",
        "The others should say harder, best and hotter."
      ],
      misconception: "A common mix-up is adding more to every comparing word. Check whether the word is short or long first."
    },
    "SK-GUM4-2-P4": {
      hints: [
        "Look at the ending or the helper word in each choice before you sort it.",
        "Sort the words you are sure about first. Then deal with the words that look different.",
        "Better comes from good, and worst comes from bad. Think about how many things each one compares."
      ],
      how: [
        "Look at each word for -er or more, and for -est or most.",
        "Brighter, quieter and better compare two. Most careful, happiest and worst compare three or more.",
        "Better comes from good, and worst comes from bad."
      ],
      misconception: "A common mix-up is guessing from the length of the word. Check the ending or the helper word."
    },
    "SK-GUM4-2-P5": {
      hints: [
        "Count the people in each part of the sentence. Then test each choice in its blank.",
        "Look at the first blank, then the second. Each blank compares a different number of people.",
        "Gooder is not a word in school writing, so cross it out."
      ],
      how: [
        "Sami and his brother are two people, and the sisters make three with them.",
        "Well and good change completely: well, better, best.",
        "Better fits the first blank, and best fits the second."
      ],
      misconception: "A common mix-up is adding -er or -est to good. Good changes completely when you compare."
    }
  },
  /* B8a:core:end */
  test: [
    { id: "SK-GUM4-2-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The blue kite flew {0} than the red kite.",
      slots: [ { options: ["higher", "highest", "more high", "most higher"], answer: 0 } ],
      clue: "Count the kites being compared. Then choose the form that fits that number.",
      why: "The answer is higher. Two kites are compared, so use -er. High is a short word, so it adds -er instead of using more." },
    { id: "SK-GUM4-2-T2", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "That was the {0} movie I have ever seen!",
      slots: [ { options: ["funnier", "funniest", "most funniest", "more funny"], answer: 1 } ],
      clue: "The movie is compared with every movie the speaker has seen. Is that two, or more than two?",
      why: "The answer is funniest. The movie is compared with every movie the speaker has seen, which is more than two, so use -est. Funny changes y to i before -est." },
    { id: "SK-GUM4-2-T3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "Mia's drawing is better than mine.", correct: true },
        { text: "Lucy is the most tallest girl in our class." },
        { text: "This is the baddest storm we have had." },
        { text: "Our new couch is more softer than the old one." }
      ],
      clue: "Check each comparing word. Never use more or most with -er or -est, and remember the words that change completely.",
      why: "The answer is \"Mia's drawing is better than mine.\" Good changes to better when you compare two drawings. The others should say tallest (not most tallest), worst (not baddest) and softer (not more softer)." },
    { id: "SK-GUM4-2-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each word compare two things, or three or more things?",
      cols: ["Compares two", "Compares three or more"],
      rows: [
        { text: "slower", answer: 0 },
        { text: "most helpful", answer: 1 },
        { text: "worse", answer: 0 },
        { text: "tallest", answer: 1 },
        { text: "more careful", answer: 0 },
        { text: "greatest", answer: 1 }
      ],
      clue: "Words with -er or more compare two. Words with -est or most compare three or more. Remember the words that change completely.",
      why: "Slower, more careful and worse compare two things. Most helpful, greatest and tallest compare three or more things. Worse comes from bad." },
    { id: "SK-GUM4-2-T5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences use the comparing word correctly?",
      choices: [
        { text: "Tia is older than her cousin.", correct: true },
        { text: "This is the most exciting book on the shelf.", correct: true },
        { text: "Zeke ran more faster than his dog." },
        { text: "That was the goodest peach in the basket." },
        { text: "This box is more heavier than that one." }
      ],
      clue: "Look for a short word with -er or -est, or a long word with more or most. Watch for words that use both, and for words that should change completely.",
      why: "The answers are \"Tia is older than her cousin.\" and \"This is the most exciting book on the shelf.\" The others should say faster (not more faster), best (not goodest) and heavier (not more heavier)." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:C:ensure-pronoun-antecedent-agreement",
  title: "Pronouns that match their nouns",
  teach: {
    big: "A pronoun takes the place of a noun, so it has to match that noun: one or more than one, and boy, girl or thing.",
    points: [
      "The noun a pronoun stands for is called its antecedent. In \"Ava lost her mitten,\" the pronoun her stands for Ava.",
      "If the noun means one, use a pronoun for one, like he, she, it, him, her, his or its. If the noun means more than one, use they, them or their.",
      "Match boy, girl or thing, too. Use he, him or his for a boy or man, she or her for a girl or woman, and it or its for a thing."
    ],
    words: [
      { term: "pronoun", means: "a word that takes the place of a noun, like she, it or them" },
      { term: "antecedent", means: "the noun a pronoun stands for" }
    ],
    example: {
      label: "Example",
      lines: ["The twins packed their bags and zipped them shut."],
      note: "The twins means more than one, so the pronoun is their. Bags means more than one, so the pronoun is them."
    },
    tip: "To check a pronoun, find the noun it stands for. Then ask: Is it one or more than one? Is it a boy, a girl or a thing?"
  },
  learn: [
    {
      show: ["The players grabbed ___ water bottles after the game."],
      ask: "Which pronoun fits: his, her or their?",
      steps: [
        "Find the noun the pronoun stands for. The bottles belong to the players.",
        "Ask whether players means one or more than one. It means more than one.",
        "Choose the pronoun for more than one."
      ],
      answer: "Their, because players means more than one."
    },
    {
      show: ["Grandma Rose found an old quilt in the attic and washed ___."],
      ask: "Which pronoun fits: it, them or her?",
      steps: [
        "Ask what Grandma Rose washed. She washed the quilt, so quilt is the antecedent.",
        "A quilt is one thing, not a person.",
        "Use the pronoun for one thing."
      ],
      answer: "It, because the quilt is one thing."
    }
  ],
  parent: "While you read together, stop at a pronoun like they or her and ask, \"Who is that?\" Your child points to the noun the pronoun stands for.",
  passages: [],
  practice: [
    { id: "SK-GUM4-3-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the pronoun that stands for Mr. Okafor.",
      text: "Mr. Okafor cleaned {0} glasses with a soft cloth.",
      slots: [ { options: ["his", "her", "their", "its"], answer: 0 } ],
      clue: "Ask two questions about the noun: one or more than one? A boy or man, a girl or woman, or a thing?",
      why: "The answer is his. Mr. Okafor is one man, so the pronoun is his." },
    { id: "SK-GUM4-3-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the pronoun that stands for the cookies.",
      text: "The cookies smelled so good that we ate {0} right away.",
      slots: [ { options: ["them", "it", "him", "her"], answer: 0 } ],
      clue: "Does cookies mean one or more than one?",
      why: "The answer is them. Cookies means more than one, so use them. It, him and her each stand for just one." },
    { id: "SK-GUM4-3-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "In this sentence, which noun does the pronoun their stand for?",
      stem: "The girls showed their science project to Mr. Hill.",
      choices: [
        { text: "the girls", correct: true },
        { text: "the science project" },
        { text: "Mr. Hill" },
        { text: "the project and Mr. Hill" }
      ],
      clue: "Ask two questions about the noun: one or more than one? A person or a thing?",
      why: "The answer is the girls. Their stands for more than one, and girls means more than one. Mr. Hill and the science project each mean one. The project cannot own itself, and Mr. Hill did not make it, so their does not stand for them together." },
    { id: "SK-GUM4-3-P4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the pronoun correctly?",
      choices: [
        { text: "The books fell, so Omar picked them up.", correct: true },
        { text: "The book fell, so Omar picked them up." },
        { text: "The lamp broke, so Dad fixed them." },
        { text: "The cups were dirty, so Nora washed it." }
      ],
      clue: "In each sentence, find the noun the pronoun stands for. Is that noun one thing or more than one?",
      why: "The answer is \"The books fell, so Omar picked them up.\" Books means more than one, so them matches. Book and lamp mean one, so they need it. Cups means more than one, so it needs them." },
    { id: "SK-GUM4-3-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which pronoun could take the place of each noun?",
      cols: ["he", "she", "it", "they"],
      rows: [
        { text: "Uncle Ray", answer: 0 },
        { text: "my aunt", answer: 1 },
        { text: "the bicycle", answer: 2 },
        { text: "the students", answer: 3 }
      ],
      clue: "Ask two questions for each noun: one or more than one? A boy or man, a girl or woman, or a thing?",
      why: "Uncle Ray is one man, so he. My aunt is one woman, so she. The bicycle is one thing, so it. The students means more than one, so they." }
  ],
  test: [
    { id: "SK-GUM4-3-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the pronoun that stands for the blankets.",
      text: "The blankets were warm from the dryer, so Ivy folded {0} carefully.",
      slots: [ { options: ["them", "it", "her", "they"], answer: 0 } ],
      clue: "Does blankets mean one or more than one? Also notice that the pronoun comes after the action word folded.",
      why: "The answer is them. Blankets means more than one, so use them after the action word folded." },
    { id: "SK-GUM4-3-T2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the pronoun that stands for Aunt Lucia.",
      text: "Aunt Lucia brought {0} guitar to the family picnic.",
      slots: [ { options: ["her", "his", "their", "its"], answer: 0 } ],
      clue: "Ask two questions about the noun: one or more than one? A boy or man, a girl or woman, or a thing?",
      why: "The answer is her. Aunt Lucia is one woman, so the pronoun is her." },
    { id: "SK-GUM4-3-T3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence uses the pronoun correctly?",
      choices: [
        { text: "The window was heavy, so Dad pushed it open.", correct: true },
        { text: "The window was heavy, so Dad pushed them open." },
        { text: "The doors were open, so Mom closed it." },
        { text: "The gate was loose, so Grandpa fixed them." }
      ],
      clue: "In each sentence, find the noun the pronoun stands for. Is that noun one thing or more than one?",
      why: "The answer is \"The window was heavy, so Dad pushed it open.\" Window means one thing, so it matches. The gate and the window need it, not them, and the doors need them, not it." },
    { id: "SK-GUM4-3-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences have a pronoun that matches the noun it stands for?",
      choices: [
        { text: "The ducks flapped their wings.", correct: true },
        { text: "Mrs. Diaz read her favorite poem to us.", correct: true },
        { text: "The pencils rolled away, and Jo picked it up." },
        { text: "Our car is old, but Dad still likes them." },
        { text: "The apple was ripe, so Kim ate them." }
      ],
      clue: "For each pronoun, find its noun. Then check one or more than one, and boy, girl or thing.",
      why: "The answers are \"The ducks flapped their wings.\" and \"Mrs. Diaz read her favorite poem to us.\" Ducks means more than one, so their matches, and Mrs. Diaz is one woman, so her matches. Pencils needs them, and car and apple need it." },
    { id: "SK-GUM4-3-T5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which pronoun belongs in each sentence?",
      cols: ["its", "their", "her"],
      rows: [
        { text: "The oak tree lost all of ___ leaves.", answer: 0 },
        { text: "The boys tied ___ shoes.", answer: 1 },
        { text: "My sister brushed ___ hair.", answer: 2 },
        { text: "The houses had snow on ___ roofs.", answer: 1 }
      ],
      clue: "Find the noun each pronoun stands for. Is it one thing, more than one, or a girl?",
      why: "The tree is one thing, so its. Boys and houses mean more than one, so their. My sister is one girl, so her." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-",
  title: "Punctuating what people say",
  teach: {
    big: "Put quotation marks around a speaker's exact words, start them with a capital letter, and use a comma to set them apart from words like she said.",
    points: [
      "Quotation marks go around the exact words someone says. The first word inside them starts with a capital letter.",
      "If the speaker comes first, put a comma after said and before the quotation marks: Mia said, \"Let's go.\" The period goes inside the closing quotation marks.",
      "If the speaker comes last, put a comma inside the closing quotation marks: \"Let's go,\" Mia said. A question mark or exclamation point also goes inside, with no comma: \"Can I come?\" asked Leo."
    ],
    words: [
      { term: "quotation marks", means: "the marks \" \" that go around a speaker's exact words" },
      { term: "dialogue", means: "the words characters say to each other" }
    ],
    example: {
      label: "Example",
      lines: ["Dad said, \"The bus is here.\"", "\"Grab your lunch,\" Mom added.", "\"Wait for me!\" Theo shouted."],
      note: "In each sentence, the period, comma or exclamation point comes before the closing quotation marks. The first word inside the quotation marks is capitalized."
    },
    tip: "Say the sentence out loud. The words you would hear the person say are the words that go inside the quotation marks."
  },
  learn: [
    {
      show: ["Ms. Reyes said please line up at the door."],
      ask: "How should this sentence be punctuated?",
      steps: [
        "Find the exact words Ms. Reyes says: please line up at the door.",
        "The speaker comes first, so put a comma after said.",
        "Put quotation marks around her words, capitalize the first word, and put the period inside the closing quotation marks."
      ],
      answer: "Ms. Reyes said, \"Please line up at the door.\""
    },
    {
      show: ["\"This soup is too hot\" said Grandpa."],
      ask: "What is missing from this sentence?",
      steps: [
        "Find the speaker. Grandpa comes last, after his words.",
        "When the speaker comes last, a comma ends the spoken words.",
        "The comma goes inside the closing quotation marks."
      ],
      answer: "A comma is missing: \"This soup is too hot,\" said Grandpa."
    }
  ],
  parent: "Write down something your child said today with no punctuation. Let your child add the quotation marks, the comma and the capital letter.",
  passages: [],
  practice: [
    { id: "SK-GUM4-4-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence is punctuated correctly?",
      choices: [
        { text: "Nadia said, \"My kitten is asleep.\"", correct: true },
        { text: "Nadia said \"My kitten is asleep.\"" },
        { text: "Nadia said, \"my kitten is asleep.\"" },
        { text: "Nadia said, \"My kitten is asleep\"." }
      ],
      clue: "Check three things: a comma after said, a capital letter at the start of the spoken words, and the period inside the closing quotation marks.",
      why: "The answer is Nadia said, \"My kitten is asleep.\" It has a comma after said, a capital M, and the period inside the quotation marks. Each other choice is missing one of these." },
    { id: "SK-GUM4-4-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the correct way to write the spoken words.",
      text: "{0} Jamal asked.",
      slots: [ { options: ["\"Is it cold outside?\"", "\"Is it cold outside\"?", "\"Is it cold outside?,\"", "\"is it cold outside?\""], answer: 0 } ],
      clue: "Jamal is asking a question. Where does the question mark go, and does the sentence also need a comma?",
      why: "The answer is \"Is it cold outside?\" The question mark goes inside the closing quotation marks, and no comma is added after it. The first word, Is, starts with a capital letter." },
    { id: "SK-GUM4-4-P3", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences are punctuated correctly?",
      choices: [
        { text: "\"Let's plant the seeds today,\" said Aunt May.", correct: true },
        { text: "Carlos whispered, \"The baby is asleep.\"", correct: true },
        { text: "\"We won the game\" Lily told her dad." },
        { text: "Ruby asked, \"can we go to the park?\"" },
        { text: "\"Thank you\", said Mr. Lee." }
      ],
      clue: "Check the comma, the capital letter, and where each mark sits next to the closing quotation marks.",
      why: "The answers are \"Let's plant the seeds today,\" said Aunt May. and Carlos whispered, \"The baby is asleep.\" The sentence about Lily needs a comma after game, inside the quotation marks. Ruby's question needs a capital C. The comma after Thank you belongs inside the quotation marks." },
    { id: "SK-GUM4-4-P4", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is written correctly?",
      options: [
        "\"I found a shiny rock,\" Ella said.",
        "\"I found a shiny rock\" Ella said.",
        "\"I found a shiny rock\", Ella said.",
        "I found a shiny rock,\" Ella said."
      ],
      answer: [0], pick: 1,
      clue: "The speaker comes last. Look for a comma inside the closing quotation marks and marks at both ends of the spoken words.",
      why: "The answer is \"I found a shiny rock,\" Ella said. The comma is inside the closing quotation marks. One sentence has no comma, one has the comma outside, and one is missing the opening quotation marks." },
    { id: "SK-GUM4-4-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Each sentence has one mistake. What does each sentence need?",
      cols: ["A comma", "A capital letter", "Quotation marks"],
      rows: [
        { text: "Ben said \"It is my turn.\"", answer: 0 },
        { text: "Ava said, \"we need more glue.\"", answer: 1 },
        { text: "Grandma said, Supper is ready.", answer: 2 },
        { text: "Mom said \"Turn off the light.\"", answer: 0 },
        { text: "Dev asked, \"where are my shoes?\"", answer: 1 }
      ],
      clue: "Check each sentence for three things: a comma after said or asked, a capital letter at the start of the spoken words, and quotation marks around them.",
      why: "Ben's and Mom's sentences need a comma after said. Ava's and Dev's sentences need a capital letter at the start of the spoken words: We and Where. Grandma's sentence needs quotation marks around Supper is ready." }
  ],
  test: [
    { id: "SK-GUM4-4-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence is punctuated correctly?",
      choices: [
        { text: "\"The bus is late,\" said Marcus.", correct: true },
        { text: "\"The bus is late\" said Marcus." },
        { text: "\"The bus is late\", said Marcus." },
        { text: "\"the bus is late,\" said Marcus." }
      ],
      clue: "The speaker comes last. Check for a comma, where the comma sits, and a capital letter.",
      why: "The answer is \"The bus is late,\" said Marcus. The comma is inside the closing quotation marks, and The starts with a capital letter. Each other choice has one mistake." },
    { id: "SK-GUM4-4-T2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which sentence is punctuated correctly?",
      choices: [
        { text: "Hana asked, \"Where is my red sweater?\"", correct: true },
        { text: "Hana asked, \"Where is my red sweater\"?" },
        { text: "Hana asked \"Where is my red sweater?\"" },
        { text: "Hana asked, Where is my red sweater?" }
      ],
      clue: "The speaker comes first. Check for a comma after asked, quotation marks around the question, and where the question mark sits.",
      why: "The answer is Hana asked, \"Where is my red sweater?\" It has a comma after asked, quotation marks around her words, and the question mark inside the closing quotation marks." },
    { id: "SK-GUM4-4-T3", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences are punctuated correctly?",
      choices: [
        { text: "Coach Bell said, \"Great job today.\"", correct: true },
        { text: "\"May I have some water?\" asked Nico.", correct: true },
        { text: "\"It's my birthday\" Sara told us." },
        { text: "Dad said, \"don't forget your hat.\"" },
        { text: "Pablo said, \"I can help\"." }
      ],
      clue: "Check the comma, the capital letter, and where each mark sits next to the closing quotation marks.",
      why: "The answers are Coach Bell said, \"Great job today.\" and \"May I have some water?\" asked Nico. Sara's sentence needs a comma inside the quotation marks after birthday. Dad's sentence needs a capital D in Don't. Pablo's period belongs inside the quotation marks." },
    { id: "SK-GUM4-4-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Is each sentence punctuated correctly?",
      cols: ["Correct", "Not correct"],
      rows: [
        { text: "Ms. Grant said, \"Open your books.\"", answer: 0 },
        { text: "\"The movie starts soon\" Jin said.", answer: 1 },
        { text: "Kenji yelled, \"Look at the rainbow!\"", answer: 0 },
        { text: "Mia said, \"we are almost there.\"", answer: 1 }
      ],
      clue: "Check each sentence for quotation marks around the spoken words, a capital letter at the start of them, a comma between the speaker and the words, and the end mark inside the closing quotation marks.",
      why: "Ms. Grant's and Kenji's sentences are correct. Jin's sentence needs a comma after soon, inside the quotation marks. Mia's sentence needs a capital letter: We." },
    { id: "SK-GUM4-4-T5", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the correct way to write the spoken words.",
      text: "{0} said Uncle Dev.",
      slots: [ { options: ["\"The game starts at noon,\"", "\"The game starts at noon\",", "\"The game starts at noon\"", "\"the game starts at noon,\""], answer: 0 } ],
      clue: "The speaker comes last. The spoken words need a comma, a capital letter, and the comma in the right place.",
      why: "The answer is \"The game starts at noon,\" with the comma inside the closing quotation marks and a capital T at the start." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs",
  title: "Who, which, that, where and when",
  teach: {
    big: "Words like who, which, that, where and when can start a part of a sentence that tells more about a noun.",
    points: [
      "Use who to tell more about a person: I have a friend who plays the drums.",
      "Use that or which to tell more about a thing or an animal: We crossed the bridge that goes over the river.",
      "Use where for a place or when for a time only if the words after it make a whole sentence when you add there or then: This is the park where we fly kites. (We fly kites there.) If they do not, use that or which, just as for a thing: The park that has a slide is near us. (\"Has a slide there\" is not a whole sentence, because it does not say who or what has a slide.)"
    ],
    words: [
      { term: "relative pronoun", means: "who, which or that, used to tell more about a noun" },
      { term: "relative adverb", means: "where or when, used to tell more about a place or a time" }
    ],
    example: {
      label: "Example",
      lines: ["Ms. Kim is the teacher who helped me read.", "Macon is the city where my cousins live.", "Macon is a city that has many old trees."],
      note: "Who tells more about the teacher, a person. Where fits the second sentence because \"my cousins live there\" is a whole sentence. In the third sentence, \"has many old trees there\" is not a whole sentence, so use that, even though Macon is a place."
    },
    tip: "Look at the noun before the blank. For a person, use who. For a thing or an animal, use that or which. For a place or a time, use where or when only if the words after the blank make a whole sentence with there or then. If they do not, use that or which."
  },
  learn: [
    {
      show: ["We visited the farm ___ Grandpa grew up."],
      ask: "Which word fits: who, where or that?",
      steps: [
        "Look at the noun right before the blank: farm. A farm is a place, not a person.",
        "For a place, add there to the words after the blank: Grandpa grew up there.",
        "That is a whole sentence, so use where."
      ],
      answer: "Where: We visited the farm where Grandpa grew up."
    },
    {
      show: ["I read a book ___ has a talking fox in it."],
      ask: "Which word fits: who, that or when?",
      steps: [
        "Look at the noun right before the blank: book.",
        "A book is a thing. It is not a person, a place or a time.",
        "Use that or which for a thing. Of the three choices, only that fits."
      ],
      answer: "That: I read a book that has a talking fox in it."
    }
  ],
  parent: "Play a riddle game: \"I am thinking of a person who ...\", \"I am thinking of a thing that ...\" or \"I am thinking of a place where ...\" Take turns finishing the clue and guessing.",
  passages: [],
  practice: [
    { id: "SK-GUM4-5-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "My aunt is the person {0} taught me to swim.",
      slots: [ { options: ["who", "which", "where", "when"], answer: 0 } ],
      clue: "Look at the noun right before the blank. Is it a person, a thing, a place or a time?",
      why: "The answer is who. The noun before the blank is person, and who tells more about a person." },
    { id: "SK-GUM4-5-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Winter is the season {0} the pond freezes.",
      slots: [ { options: ["when", "who", "where", "whose"], answer: 0 } ],
      clue: "Ask: Is the noun before the blank a person, a thing or animal, a place, or a time? For a place or a time, add there or then to the words after the blank. If they make a whole sentence, use where or when.",
      why: "The answer is when. A season is a time of year, and the pond freezes then. That is a whole sentence, so when fits." },
    { id: "SK-GUM4-5-P3", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Tybee Island is the place {0} we found the seashells.",
      slots: [ { options: ["where", "who", "when", "which"], answer: 0 } ],
      clue: "Ask: Is the noun before the blank a person, a thing or animal, a place, or a time? For a place or a time, add there or then to the words after the blank. If they make a whole sentence, use where or when.",
      why: "The answer is where. \"We found the seashells there\" is a whole sentence, so where fits. Which does not fit, because the words after the blank are already complete. Who is for people, and when is for times." },
    { id: "SK-GUM4-5-P4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which word correctly completes the sentence?",
      stem: "I found a shell ___ looks like a star.",
      choices: [
        { text: "that", correct: true },
        { text: "who" },
        { text: "where" },
        { text: "when" }
      ],
      clue: "Ask: Is the noun before the blank a person, a thing or animal, a place, or a time? For a place or a time, add there or then to the words after the blank. If they make a whole sentence, use where or when.",
      why: "The answer is that. A shell is a thing, so use that. Who is for people. \"Looks like a star there\" is not a whole sentence, because it does not say what looks like a star, so where and when are wrong." },
    { id: "SK-GUM4-5-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which word correctly fills each blank?",
      cols: ["that", "where"],
      rows: [
        { text: "the bike ___ has a bell", answer: 0 },
        { text: "the library ___ we borrow books", answer: 1 },
        { text: "the park ___ has a slide", answer: 0 },
        { text: "the kitchen ___ Dad cooks dinner", answer: 1 },
        { text: "the song ___ makes me dance", answer: 0 }
      ],
      clue: "Ask: Is the noun before the blank a person, a thing or animal, a place, or a time? For a place or a time, add there or then to the words after the blank. If they make a whole sentence, use where or when.",
      why: "Use where for the library and the kitchen: \"we borrow books there\" and \"Dad cooks dinner there\" are whole sentences. Use that for the bike and the song, which are things. Use that for the park too, because \"has a slide there\" is not a whole sentence." }
  ],
  test: [
    { id: "SK-GUM4-5-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "We met a firefighter {0} showed us the big red truck.",
      slots: [ { options: ["who", "which", "where", "when"], answer: 0 } ],
      clue: "Look at the noun right before the blank. Is it a person, a thing, a place or a time?",
      why: "The answer is who. A firefighter is a person, and who tells more about a person." },
    { id: "SK-GUM4-5-T2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Lunch is the time {0} we sit with our friends.",
      slots: [ { options: ["when", "who", "where", "whose"], answer: 0 } ],
      clue: "Ask: Is the noun before the blank a person, a thing or animal, a place, or a time? For a place or a time, add there or then to the words after the blank. If they make a whole sentence, use where or when.",
      why: "The answer is when. Time is the noun before the blank, and \"we sit with our friends then\" is a whole sentence." },
    { id: "SK-GUM4-5-T3", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "This is the creek {0} we saw the turtles.",
      slots: [ { options: ["where", "who", "when", "whose"], answer: 0 } ],
      clue: "Ask: Is the noun before the blank a person, a thing or animal, a place, or a time? For a place or a time, add there or then to the words after the blank. If they make a whole sentence, use where or when.",
      why: "The answer is where. A creek is a place, and \"we saw the turtles there\" is a whole sentence, so where fits. Who is for people, when is for times, and whose shows who owns something." },
    { id: "SK-GUM4-5-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which word correctly completes the sentence?",
      stem: "We rode the train ___ goes to the airport.",
      choices: [
        { text: "that", correct: true },
        { text: "who" },
        { text: "where" },
        { text: "when" }
      ],
      clue: "Ask: Is the noun before the blank a person, a thing or animal, a place, or a time? For a place or a time, add there or then to the words after the blank. If they make a whole sentence, use where or when.",
      why: "The answer is that. A train is a thing, so use that. Who is for people, and a train is not a place or a time, so where and when are wrong." },
    { id: "SK-GUM4-5-T5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences use who, that, where or when correctly?",
      choices: [
        { text: "Ms. Lopez is the nurse who helped me.", correct: true },
        { text: "Saturday is the day when we go to the library.", correct: true },
        { text: "The bus who takes us to school is yellow." },
        { text: "This is the store when we buy bread." },
        { text: "Liam is the boy where lives next door." }
      ],
      clue: "For each sentence, look at the noun before who, where or when. Is it a person, a thing, a place or a time? For a place or a time, add there or then to the words after it and check for a whole sentence.",
      why: "The answers are \"Ms. Lopez is the nurse who helped me.\" and \"Saturday is the day when we go to the library.\" (\"We go to the library then\" is a whole sentence.) The bus sentence should use that, because a bus is a thing. The store sentence should use where, because \"we buy bread there\" is a whole sentence. The Liam sentence should use who, because Liam is a person." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:I:use-interjections",
  title: "Interjections: Wow! Oh no!",
  teach: {
    big: "An interjection is a word or short phrase that shows a feeling, like Wow! or Oh no!",
    points: [
      "Interjections show feelings such as surprise, joy, pain or worry. Some interjections are wow, hooray, ouch, oh no, oops and yikes.",
      "When the feeling is strong, put an exclamation point after the interjection. Start the next word with a capital letter: Hooray! We won!",
      "When the feeling is mild, put a comma after the interjection and keep going: Oh, I forgot my pencil."
    ],
    words: [
      { term: "interjection", means: "a word or short phrase that shows a feeling, like wow or ouch" }
    ],
    example: {
      label: "Example",
      lines: ["Ouch! I bumped my knee.", "Oops, I spilled a little juice."],
      note: "Ouch shows a strong feeling of pain, so an exclamation point follows it. Oops shows a small mistake, a milder feeling, so a comma follows it."
    },
    tip: "Interjections fit best in stories and in what characters say. Reports and letters to your principal usually do not need them."
  },
  learn: [
    {
      show: ["Hooray! The rain stopped, so we can play outside."],
      ask: "What is the interjection, and what feeling does it show?",
      steps: [
        "Look for a word that shows a feeling and could stand by itself.",
        "Hooray stands by itself, with an exclamation point after it.",
        "Think about why the speaker says it. The rain stopped, so the speaker can play outside."
      ],
      answer: "Hooray is the interjection. It shows joy."
    },
    {
      show: ["___! There is a spider on my shoe!"],
      ask: "Which interjection fits best: Hooray, Yikes or Yum?",
      steps: [
        "Read the rest of the sentence to find the feeling. A spider on a shoe is scary.",
        "Hooray shows joy, and Yum shows that food tastes good. Neither one fits.",
        "Choose the word that shows fear or alarm."
      ],
      answer: "Yikes! There is a spider on my shoe!"
    }
  ],
  parent: "When something surprising happens at home, ask your child which interjection fits: Wow? Oops? Yikes? Then write it down together with the right mark after it.",
  passages: [],
  practice: [
    { id: "SK-GUM4-6-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word in this sentence is the interjection?",
      stem: "Wow! That roller coaster is so tall.",
      choices: [
        { text: "Wow", correct: true },
        { text: "roller" },
        { text: "tall" },
        { text: "That" }
      ],
      clue: "An interjection shows a feeling and can stand by itself.",
      why: "The answer is Wow. It shows surprise, and it stands by itself with an exclamation point after it." },
    { id: "SK-GUM4-6-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the interjection that fits best.",
      text: "{0} I dropped my ice cream cone on the ground.",
      slots: [ { options: ["Oh no!", "Hooray!", "Yum!", "Bravo!"], answer: 0 } ],
      clue: "Read the rest of the sentence. How would you feel if this happened to you?",
      why: "The answer is Oh no! Dropping an ice cream cone is sad and upsetting. Hooray and Bravo show joy or praise, and Yum shows that food tastes good." },
    { id: "SK-GUM4-6-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "When would you say each interjection?",
      cols: ["When you are hurt", "When you are happy", "When you make a small mistake"],
      rows: [
        { text: "Ouch!", answer: 0 },
        { text: "Hooray!", answer: 1 },
        { text: "Oops,", answer: 2 },
        { text: "Ow!", answer: 0 },
        { text: "Yay!", answer: 1 }
      ],
      clue: "Think of when you would say each word out loud. Would you be hurt, happy, or sorry you slipped up?",
      why: "Ouch and Ow show pain. Hooray and Yay show joy. Oops shows a small mistake." },
    { id: "SK-GUM4-6-P4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences have an interjection?",
      choices: [
        { text: "Yikes! The pot boiled over.", correct: true },
        { text: "Oh, I left my book at school.", correct: true },
        { text: "The puppy barked at the mail carrier." },
        { text: "We will go to the fair on Friday." },
        { text: "We fed the ducks at the pond." }
      ],
      clue: "Look for a word at the start that shows a feeling and is followed by a comma or an exclamation point.",
      why: "The answers are \"Yikes! The pot boiled over.\" and \"Oh, I left my book at school.\" Yikes shows alarm, and Oh shows a mild surprise. The other sentences have no word that shows a feeling." },
    { id: "SK-GUM4-6-P5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is written correctly?",
      choices: [
        { text: "Hooray! We won the game.", correct: true },
        { text: "Hooray! we won the game." },
        { text: "hooray! We won the game." },
        { text: "Hooray, We won the game." }
      ],
      clue: "After an exclamation point, the next word starts with a capital letter. After a comma, it does not, unless it is a name or I.",
      why: "The answer is \"Hooray! We won the game.\" Hooray starts with a capital letter, and after the exclamation point, We starts with a capital letter too. After a comma, we would stay lowercase." }
  ],
  test: [
    { id: "SK-GUM4-6-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word in this sentence is the interjection?",
      stem: "Bravo! You played that song so nicely.",
      choices: [
        { text: "Bravo", correct: true },
        { text: "song" },
        { text: "nicely" },
        { text: "You" }
      ],
      clue: "An interjection shows a feeling and can stand by itself.",
      why: "The answer is Bravo. It shows praise and joy, and it stands by itself with an exclamation point after it." },
    { id: "SK-GUM4-6-T2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the interjection that fits best.",
      text: "{0} This peach pie tastes amazing!",
      slots: [ { options: ["Yum!", "Ouch!", "Oops!", "Yikes!"], answer: 0 } ],
      clue: "Read the rest of the sentence. How does the pie taste, and which word shows that feeling?",
      why: "The answer is Yum! Yum shows that food tastes good. Ouch shows pain, oops shows a mistake, and yikes shows alarm." },
    { id: "SK-GUM4-6-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the interjection that fits best.",
      text: "{0} We are going to the zoo tomorrow!",
      slots: [ { options: ["Hooray!", "Ouch!", "Oops!", "Yuck!"], answer: 0 } ],
      clue: "Read the rest of the sentence. Is this happy news, a hurt, a mistake, or something gross?",
      why: "The answer is Hooray! A trip to the zoo is happy news, and hooray shows joy." },
    { id: "SK-GUM4-6-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "What feeling does the interjection in each sentence show?",
      cols: ["Pain", "Relief", "Disgust"],
      rows: [
        { text: "Ow! My tooth hurts.", answer: 0 },
        { text: "Phew! We made it on time.", answer: 1 },
        { text: "Yuck! This milk smells sour.", answer: 2 },
        { text: "Whew! The storm missed our town.", answer: 1 },
        { text: "Ew! There is mud in my shoe.", answer: 2 }
      ],
      clue: "Read the whole sentence. The words after the interjection tell you why the speaker feels that way.",
      why: "Ow shows pain from a sore tooth. Phew and Whew show relief: being on time and the storm missing the town. Yuck and Ew show disgust: sour milk and mud in a shoe." },
    { id: "SK-GUM4-6-T5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences are written correctly?",
      choices: [
        { text: "Wow! Look at that rainbow.", correct: true },
        { text: "Oh, the mail is here.", correct: true },
        { text: "Hey! you dropped your glove." },
        { text: "Yikes the dog got out!" },
        { text: "oh no! The bus left." }
      ],
      clue: "Check three things: a capital letter at the start, a comma or exclamation point after the interjection, and a capital letter after an exclamation point.",
      why: "The answers are \"Wow! Look at that rainbow.\" and \"Oh, the mail is here.\" The sentence about the glove needs a capital Y after the exclamation point. Yikes needs a mark after it. Oh no needs a capital O." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:I:use-helping-and-linking-verbs",
  title: "Helping verbs and linking verbs",
  teach: {
    big: "A helping verb helps the main verb, like has in has walked. A linking verb links the subject to a word that tells about it, like is in is happy.",
    points: [
      "A helping verb comes before the main verb. Some helping verbs are has, have, had, will, can, could and should: We have finished. Kai will swim.",
      "A linking verb does not show action. It links the subject to a word that names it or describes it: The soup is hot. My dad was a pilot.",
      "Am, is, are, was and were are often linking verbs. They can be helping verbs too, but in this lesson you will see them as linking verbs. Seem and become can be linking verbs as well: The puppy seems tired."
    ],
    words: [
      { term: "main verb", means: "the most important verb in a sentence" },
      { term: "helping verb", means: "a verb that comes before the main verb and helps it, like will or has" },
      { term: "linking verb", means: "a verb that links the subject to a word that names or describes it, like is" }
    ],
    example: {
      label: "Example",
      lines: ["Grandpa has planted a fig tree.", "The figs are sweet."],
      note: "Has is a helping verb. It helps the main verb planted. Are is a linking verb. It links figs to sweet, a word that describes them."
    },
    tip: "Look at the words after the verb. If the next word is another verb, the first verb is a helping verb. If the words name or describe the subject, the verb is a linking verb."
  },
  learn: [
    {
      show: ["Rosa will bake muffins for the bake sale."],
      ask: "What is the helping verb, and what is the main verb?",
      steps: [
        "Find the action. Bake is the action, so bake is the main verb.",
        "Look at the word right before it: will.",
        "Will helps tell when the baking happens, so it is the helping verb."
      ],
      answer: "Will is the helping verb, and bake is the main verb."
    },
    {
      show: ["The lake was calm this morning."],
      ask: "Is was a helping verb or a linking verb?",
      steps: [
        "Look for an action. Nobody is doing anything in this sentence.",
        "Look at the word after was: calm. Calm describes the lake.",
        "A verb that connects the subject to a describing word is a linking verb."
      ],
      answer: "Was is a linking verb. It links the lake to calm."
    }
  ],
  parent: "At dinner, take turns saying one sentence with will or can and one sentence with is or seems. Then name the helping verb and the linking verb in each other's sentences.",
  passages: [],
  practice: [
    { id: "SK-GUM4-7-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "What is the helping verb in this sentence?",
      stem: "Jamal has finished his library book.",
      choices: [
        { text: "has", correct: true },
        { text: "finished" },
        { text: "his" },
        { text: "book" }
      ],
      clue: "Find the main verb, the action. Then look at the word right before it.",
      why: "The answer is has. Finished is the main verb, the action. Has comes before it and helps it." },
    { id: "SK-GUM4-7-P2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "What is the linking verb in this sentence?",
      stem: "The kittens were sleepy after lunch.",
      choices: [
        { text: "were", correct: true },
        { text: "sleepy" },
        { text: "kittens" },
        { text: "after" }
      ],
      clue: "There is no action in this sentence. Find the verb that connects the kittens to a word that describes them.",
      why: "The answer is were. It links the kittens to sleepy, a word that describes them. Sleepy is an adjective, not a verb." },
    { id: "SK-GUM4-7-P3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each sentence have a helping verb or a linking verb?",
      cols: ["Helping verb", "Linking verb"],
      rows: [
        { text: "We can see the river from here.", answer: 0 },
        { text: "The pie is warm.", answer: 1 },
        { text: "Ana should wear her boots.", answer: 0 },
        { text: "My uncle was a firefighter.", answer: 1 },
        { text: "The puppy seems hungry.", answer: 1 }
      ],
      clue: "Look at the words after the verb. Is the next word another verb, or do the words name or describe the subject?",
      why: "Can and should are helping verbs. They help the main verbs see and wear. Is, was and seems are linking verbs. They link the pie to warm, my uncle to a firefighter, and the puppy to hungry." },
    { id: "SK-GUM4-7-P4", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the helping verb that correctly completes the sentence.",
      text: "Tomorrow, Leo {0} visit his cousins in Augusta.",
      slots: [ { options: ["will", "is", "has", "was"], answer: 0 } ],
      clue: "The word tomorrow tells when this happens. Which helping verb tells about something that has not happened yet?",
      why: "The answer is will. Will helps the main verb visit tell about tomorrow. Is visit, has visit and was visit are not correct." },
    { id: "SK-GUM4-7-P5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences have a linking verb?",
      choices: [
        { text: "The peaches are ripe.", correct: true },
        { text: "Ms. Hall is our music teacher.", correct: true },
        { text: "Ben has cleaned his room." },
        { text: "We could hear the thunder." },
        { text: "Mia will draw a map." }
      ],
      clue: "A linking verb has no action. Look for a sentence where the verb connects the subject to a word that names or describes it.",
      why: "The answers are \"The peaches are ripe.\" and \"Ms. Hall is our music teacher.\" Are links peaches to ripe, and is links Ms. Hall to music teacher. Has, could and will are helping verbs." }
  ],
  test: [
    { id: "SK-GUM4-7-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "What is the helping verb in this sentence?",
      stem: "The team had practiced every day.",
      choices: [
        { text: "had", correct: true },
        { text: "practiced" },
        { text: "team" },
        { text: "every" }
      ],
      clue: "Find the main verb, the action. Then look at the word right before it.",
      why: "The answer is had. Practiced is the main verb, the action. Had comes before it and helps it." },
    { id: "SK-GUM4-7-T2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "What is the linking verb in this sentence?",
      stem: "My grandmother is a nurse.",
      choices: [
        { text: "is", correct: true },
        { text: "nurse" },
        { text: "grandmother" },
        { text: "My" }
      ],
      clue: "There is no action in this sentence. Find the verb that connects the subject to a word that names it.",
      why: "The answer is the word is. It links my grandmother to nurse, a word that names her." },
    { id: "SK-GUM4-7-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the helping verb that correctly completes the sentence.",
      text: "Dad said we {0} plant the garden this weekend.",
      slots: [ { options: ["can", "are", "is", "was"], answer: 0 } ],
      clue: "Try each word before plant and listen. Which one helps plant make sense?",
      why: "The answer is can. Can helps the main verb plant. Are plant, is plant and was plant are not correct." },
    { id: "SK-GUM4-7-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Does each sentence have a helping verb or a linking verb?",
      cols: ["Helping verb", "Linking verb"],
      rows: [
        { text: "Kofi has painted a bird.", answer: 0 },
        { text: "The sky was gray.", answer: 1 },
        { text: "I am ready for school.", answer: 1 },
        { text: "Lily could reach the top shelf.", answer: 0 }
      ],
      clue: "Look at the words after the verb. Is the next word another verb, or do the words name or describe the subject?",
      why: "Has and could are helping verbs. They help the main verbs painted and reach. Was and am are linking verbs. They link the sky to gray and I to ready." },
    { id: "SK-GUM4-7-T5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences have a helping verb?",
      choices: [
        { text: "Nora will read the poem aloud.", correct: true },
        { text: "We have cleaned the whole garage.", correct: true },
        { text: "The garage is dusty." },
        { text: "Our dog seems happy." },
        { text: "The bread was fresh." }
      ],
      clue: "A helping verb comes right before another verb. Look for two verbs side by side.",
      why: "The answers are \"Nora will read the poem aloud.\" and \"We have cleaned the whole garage.\" Will helps read, and have helps cleaned. Is, seems and was are linking verbs." }
  ]
});

PP.addLesson({
  code: "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t",
  title: "Sound-alike words: to, too, two and more",
  teach: {
    big: "Some words sound the same but have different spellings and meanings, so choose the one whose meaning fits the sentence.",
    points: [
      "To shows where something goes or comes before an action word: go to school, time to eat. Too means also or more than enough. Two is the number 2.",
      "There tells where. Their means it belongs to them. They're is short for they are.",
      "Your means it belongs to you, and you're is short for you are. Its means it belongs to it, and it's is short for it is (or it has)."
    ],
    words: [
      { term: "contraction", means: "two words joined into one with an apostrophe, like they're for they are" }
    ],
    example: {
      label: "Example",
      lines: ["They're sure their bikes are over there."],
      note: "They're means they are. Their means the bikes belong to them. There tells where the bikes are."
    },
    tip: "If the word has an apostrophe, say the two words it stands for. If the sentence still makes sense, keep the apostrophe."
  },
  learn: [
    {
      show: ["I want to come ___."],
      ask: "Which word fits: to, too or two?",
      steps: [
        "Think about what the word should mean here: also.",
        "Remember the meanings. To shows where or comes before an action word. Two is a number.",
        "The word that means also is spelled with two o's."
      ],
      answer: "Too: I want to come too."
    },
    {
      show: ["___ a great artist!"],
      ask: "Which word fits: your or you're?",
      steps: [
        "Try saying you are in the blank: You are a great artist!",
        "It makes sense, so use the contraction with an apostrophe.",
        "Your means something belongs to you, which does not fit here."
      ],
      answer: "You're: You're a great artist!"
    }
  ],
  parent: "Write a short note with one sound-alike word used the wrong way, like \"I have to dogs.\" Ask your child to find the mistake and fix it.",
  passages: [],
  practice: [
    { id: "SK-GUM4-8-P1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "We walked {0} the library after school.",
      slots: [ { options: ["to", "too", "two"], answer: 0 } ],
      clue: "Does the word tell where you went, mean also, or name a number?",
      why: "The answer is to. To shows where we walked: to the library. Too means also, and two is a number." },
    { id: "SK-GUM4-8-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The kids hung {0} coats on the hooks.",
      slots: [ { options: ["their", "there", "they're"], answer: 0 } ],
      clue: "Ask who the coats belong to. Then choose the word that shows something belongs to someone.",
      why: "The answer is their. The coats belong to the kids, and their means belongs to them. There tells where, and they're means they are." },
    { id: "SK-GUM4-8-P3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "The bird flapped {0} wings and flew away.",
      slots: [ { options: ["its", "it's", "its'"], answer: 0 } ],
      clue: "Try saying it is in the blank. Does the sentence still make sense?",
      why: "The answer is its. The wings belong to the bird, and its means belongs to it. It's means it is, and \"flapped it is wings\" does not make sense. Its' is never correct." },
    { id: "SK-GUM4-8-P4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which sentence is correct?",
      choices: [
        { text: "They're ready to go home now.", correct: true },
        { text: "Their ready to go home now." },
        { text: "There ready to go home now." },
        { text: "They're ready too go home now." }
      ],
      clue: "Check each sound-alike word. Try saying they are, and check the little word before go.",
      why: "The answer is \"They're ready to go home now.\" They're means they are, and to comes before the action word go. Their and there do not mean they are, and too means also." },
    { id: "SK-GUM4-8-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Which word belongs in each sentence?",
      cols: ["your", "you're"],
      rows: [
        { text: "___ shoe is untied.", answer: 0 },
        { text: "___ a fast runner.", answer: 1 },
        { text: "Is this ___ lunch box?", answer: 0 },
        { text: "I think ___ right.", answer: 1 }
      ],
      clue: "Try saying you are in each blank. If it makes sense, use the word with the apostrophe.",
      why: "Your shoe and your lunch box belong to you, so use your. You are a fast runner and I think you are right make sense, so use you're." }
  ],
  test: [
    { id: "SK-GUM4-8-T1", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Mom bought {0} pumpkins for the porch.",
      slots: [ { options: ["two", "to", "too"], answer: 0 } ],
      clue: "Does the word tell where, mean also, or name a number?",
      why: "The answer is two. It tells how many pumpkins Mom bought." },
    { id: "SK-GUM4-8-T2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "Please put the books over {0} on the shelf.",
      slots: [ { options: ["there", "their", "they're"], answer: 0 } ],
      clue: "Does the word tell where, show that something belongs to someone, or mean they are?",
      why: "The answer is there. There tells where to put the books." },
    { id: "SK-GUM4-8-T3", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that correctly completes the sentence.",
      text: "{0} too cold to swim today.",
      slots: [ { options: ["It's", "Its", "Its'"], answer: 0 } ],
      clue: "Try saying it is in the blank. Does the sentence make sense?",
      why: "The answer is It's. It's means it is: It is too cold to swim today. Its means belongs to it, and its' is never correct." },
    { id: "SK-GUM4-8-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which two sentences are correct?",
      choices: [
        { text: "The dog wagged its tail.", correct: true },
        { text: "Your backpack is on the bus.", correct: true },
        { text: "You're sister is at the door." },
        { text: "The cat licked it's paw." },
        { text: "I ate to cookies after dinner." }
      ],
      clue: "Check each sound-alike word. Try saying the long form of any word with an apostrophe.",
      why: "The answers are \"The dog wagged its tail.\" and \"Your backpack is on the bus.\" The others should say your sister (not you are sister), its paw (not it is paw) and two cookies (the number)." },
    { id: "SK-GUM4-8-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Which sentence has a mistake?",
      options: [
        "This box is too heavy to lift.",
        "Their dog likes to swim.",
        "Call me when your home.",
        "We walked to the park after school."
      ],
      answer: [2], pick: 1,
      clue: "Check each sound-alike word. Try saying the long form of each one that could be a contraction.",
      why: "The answer is \"Call me when your home.\" It should say you're, which means you are: Call me when you are home. The other sentences are correct." }
  ]
});

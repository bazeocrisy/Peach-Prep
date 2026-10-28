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
      "Many longer words use more and most: more careful, most careful. Never use both, like more faster. A few words change completely: good, better, best; bad, worse, worst; and well, better, best.",
      "Words that tell how can compare too. Most of them end in -ly and use more and most: more carefully, most carefully. A few short ones add -er and -est: fast, faster, fastest. Never use two comparing parts on one word."
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
    },
    {
      show: ["Mia answers the phone ___ than her brother does."],
      ask: "Which fits the blank: more politely, most politely or more polite?",
      steps: [
        "Count what is compared. Mia and her brother are two people.",
        "The blank tells how Mia answers, so use a word that ends in -ly. Two people means more, not most.",
        "More polite describes a noun, and this blank tells how, so cross it out."
      ],
      answer: "More politely, because it tells how and it compares two people."
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
          "(1) Our class planted a garden near the gym in April.",
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
          "(9) I hope Field Day comes back again next spring."
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
          "(1) My family went to the animal shelter on a rainy morning.",
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
          "(4) The cabin is the more peaceful spot for miles, my grandpa says.",
          "(5) He says his bait is more better than mine, but I caught the first fish.",
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
          "(6) Fireworks over the river were the better show of that summer, so everyone stayed late."
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
            prompt: "Sentence 5 of the draft has a mistake. Choose the word that fixes it.",
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
            clue: "Say each base word, then picture it with the ending added. Check every letter.",
            hints: [
              "Say each base word, then picture it with the ending added. Check every letter.",
              "Look at the last letters of each base word. Then see whether the new spelling keeps them or changes them.",
              "Wetest leaves out a letter that the base word needs to keep its short vowel sound."
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
            prompt: "A classmate says that most hardest in sentence 4 is correct because the race was very hard. What is the best response?",
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
            clue: "Look at the two comparing parts in the phrase. Ask what each part does on its own.",
            hints: [
              "Look at the two comparing parts in the phrase. Ask what each part does on its own.",
              "Read the phrase most hardest and decide whether hardest needs any help to show the top one.",
              "The race is compared with every race of the year, so a response about two races does not fit."
            ],
            how: [
              "Find the phrase in sentence 4: the most hardest race of the year.",
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
            prompt: "Among sentences 1, 2, 3, 6 and 7, select the TWO shown sentences that compare exactly two things.",
            targets: ["p2:1:1","p2:1:2","p2:1:3","p2:2:3","p2:3:1"],
            answer: ["p2:1:3","p2:3:1"],
            pick: 2,
            clue: "A comparison has to name what is being compared. Check what each shown sentence compares.",
            hints: [
              "A comparison has to name what is being compared. Check what each shown sentence compares.",
              "For each shown sentence, count the people, teams or games that are being compared. Skip any sentence that compares nothing.",
              "Sentence 2 compares Nia with all the third graders, which is more than two."
            ],
            how: [
              "Check each shown sentence for a comparing word and count what it compares.",
              "Sentence 3 compares Zane with Leo, two people. Sentence 7 compares one team with the other team, two teams.",
              "Sentence 1 compares nothing, and sentences 2 and 6 compare with all the third graders and with every game."
            ],
            misconception: "A common mix-up is picking any sentence that has a comparing word. Count the things that are compared.",
            why: "The answers are sentences 3 and 7: \"Zane ran more quickly than his friend Leo in the relay.\" and \"My team pulled harder than the other team, so we won the first round.\" Zane and Leo are two people, and my team and the other team are two teams. Sentences 2 and 6 compare more than two things, and sentence 1 has no comparing word."
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
              "Putting the helper word for three or more in front of a word that already compares makes a double comparison."
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
              "The answers are \"The brown puppy ran faster than the gray kitten in the play yard.\" and \"The brown puppy ran more quickly than the gray kitten in the play yard.\" The others stack more with -est, or use -est or most with than."
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
            clue: "Look at the word gracefully and think about its size and its last two letters.",
            hints: [
              "Look at the word gracefully and think about its size and its last two letters.",
              "Count the dancers that Lila is compared with. Then think about the size and the ending of the word that tells how.",
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
      prompt: "Fill both blanks so the report about our soccer club reads correctly.",
      text: "Our soccer team played {0} on rainy Monday than on sunny Friday, but cloudy Saturday was the {1} game of the entire season.",
      slots: [
        {
          options: ["worse","more worse","most bad","worst"],
          answer: 0
        },
        {
          options: ["worst","worse","most worst","more bad"],
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
        "Find each pole the writer mentions, then try every choice in the blank.",
        "Shortest picks out one pole from a whole row of poles."
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
        "Sentence 4 sets the cabin beside every spot for miles around, so it needs most peaceful, not more peaceful."
      ],
      misconception: "A common mix-up is trusting a sentence that sounds smooth. Count what each comparing word sets side by side.",
      why: "The answer is sentence 4: \"The cabin is the more peaceful spot for miles, my grandpa says.\" The cabin is set beside every spot for miles around, so the sentence needs most peaceful. Sentence 6 has no comparing word, and sentences 7, 8 and 10 use farther than, biggest and warmest correctly.",
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
        prompt: "Which new version of line 5 corrects the draft?",
        choices: [
          {
            text: "He says his bait is better than mine, but I caught the first fish.",
            correct: true
          },
          {
            text: "He says his bait is more better than mine, but I caught the first fish."
          },
          {
            text: "He says his bait is most well than mine, but I caught the first fish."
          },
          {
            text: "He says his bait is best than mine, but I caught the first fish."
          }
        ]
      },
      partB: {
        prompt: "Which statement supports the corrected version?",
        choices: [
          {
            text: "Well and good turn into better when a writer sets a pair side by side.",
            correct: true
          },
          {
            text: "Words that tell how always take -est when a writer sets a pair side by side."
          },
          {
            text: "Better needs a helper word in front when a writer sets a pair side by side."
          },
          {
            text: "The little word than tells a writer to pick best for a pair of items."
          }
        ]
      },
      clue: "Work out whether the writer compares two things or a group. Then match a new version and a statement.",
      hints: [
        "Work out whether the writer compares two things or a group. Then match a new version and a statement.",
        "For Part A, say each new version out loud next to the draft. For Part B, look for the statement about the words good and well.",
        "Better never needs a helper word in front of it, so one statement about better cannot be true."
      ],
      how: [
        "Part A: bait is set beside bait, which is a pair, so the draft needs the comparing form. The answer is \"He says his bait is better than mine, but I caught the first fish.\"",
        "The other versions add a helper word to better, use most well, or use best, which is for a group.",
        "Part B: the statement is \"Well and good turn into better when a writer sets a pair side by side.\""
      ],
      misconception: "A common mix-up is choosing the version that looks the most careful. Check how the comparing word is built.",
      why: "Part A: \"He says his bait is better than mine, but I caught the first fish.\" Part B: \"Well and good turn into better when a writer sets a pair side by side.\" Well and good turn into better when two things are compared. The other versions add a helper word to better, use most well, or use best, and the other statements are not true.",
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
      clue: "Write each base word on paper, then add the ending and check each letter.",
      hints: [
        "Write each base word on paper, then add the ending and check each letter.",
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
      prompt: "Select the words that finish this clinic story correctly.",
      text: "At the clinic, Nadia waits {0} than the other patients do, and Uncle Lee waits the {1} among everyone in the crowded room.",
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
      clue: "Say the story with a choice in each blank, and listen for a full comparison.",
      hints: [
        "Say the story with a choice in each blank, and listen for a full comparison.",
        "Count who is set side by side in each half, then test one blank at a time.",
        "Look at the first blank only. Patientlier is not a word."
      ],
      how: [
        "The first half uses than to set Nadia beside the other patients. The second half sets Uncle Lee beside everyone in the room.",
        "A word that ends in -ly takes more with than, and most when a whole group is named.",
        "The answers are more patiently and most patiently. Patientlier and patientlest are not words, and patient describes a person, not how someone waits."
      ],
      misconception: "A common mix-up is picking the word that describes a person. Waiting tells how, so it needs patiently.",
      why: "The answers are more patiently and most patiently. Nadia is compared with the other patients, so more patiently fits the first blank. Uncle Lee is set beside everyone in the room, so most patiently fits the second. Patient describes a person, not how someone waits.",
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
      prompt: "Mara reads most longest in sentence 5 and sees no problem. Which reply is the strongest?",
      choices: [
        {
          text: "Longest ends in -est and names the top one by itself, so the extra word most can go.",
          correct: true
        },
        {
          text: "Longest should turn into longer, since only a pair of flights was timed on that day."
        },
        {
          text: "Most should turn into more, since the plane glided so far down the hall."
        },
        {
          text: "Longest needs a second g, since a lone vowel sits in front of the n."
        }
      ],
      clue: "Examine the two parts of the phrase. Ask whether either part repeats the work of the other.",
      hints: [
        "Examine the two parts of the phrase. Ask whether either part repeats the work of the other.",
        "Say the phrase without the first part and decide whether the meaning is still complete.",
        "The sentence names the longest flight of the whole day, so a reply about only two flights does not suit it."
      ],
      how: [
        "Find the phrase in sentence 5: the most longest flight of the day.",
        "Longest ends in -est, so it already means the most. Most in front says it again.",
        "The answer is \"Longest ends in -est and names the top one by itself, so the extra word most can go.\""
      ],
      misconception: "A common mix-up is thinking an extra word makes a comparison stronger. A word that ends in -est stands alone.",
      why: "The answer is \"Longest ends in -est and names the top one by itself, so the extra word most can go.\" Longest ends in -est and names the top one by itself, so the extra word most can go. The sentence should say the longest flight of the day.",
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
      stem: "Yesterday's storm was worse than last week's storm. It was also the worst storm of the whole year.",
      prompt: "Which statement explains the link between worse and worst?",
      choices: [
        {
          text: "Each is a form of bad: worse points to a pair of storms, and worst points to a whole year of storms.",
          correct: true
        },
        {
          text: "Each is a form of bad: worse points to a whole year of storms, and worst points to a pair of storms."
        },
        {
          text: "Each is a form of good: worse points to a pair of storms, and worst points to a whole year of storms."
        },
        {
          text: "Neither one is linked to the other, because worse adds -er and worst adds most to the same base word."
        }
      ],
      clue: "Think about which base word each comparing word is built from and what each one sets side by side.",
      hints: [
        "Think about which base word each comparing word is built from and what each one sets side by side.",
        "Reread the two lines and notice what each storm is set beside.",
        "A storm called worse is a bad storm, so a statement that traces the words to good cannot be right."
      ],
      how: [
        "The first line sets yesterday's storm beside one other storm, so worse is the word for a pair.",
        "The second line sets one storm beside the whole year, so worst is the word for a group.",
        "Both words come from bad: bad, worse, worst. The answer is \"Each is a form of bad: worse points to a pair of storms, and worst points to a whole year of storms.\""
      ],
      misconception: "A common mix-up is hunting for -er and -est on every word. Worse and worst come from bad, so they look different.",
      why: "The answer is \"Each is a form of bad: worse points to a pair of storms, and worst points to a whole year of storms.\" Worse sets yesterday's storm beside one other storm, and worst sets it beside the whole year. Both words come from bad.",
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
      prompt: "Line 6 in this account is wrong. Pick the choice that repairs it.",
      text: "Fireworks over the river were the {0} show of that summer, and everyone stayed late.",
      slots: [
        {
          options: ["best","better","most best","more good"],
          answer: 0
        }
      ],
      clue: "Say each choice in the blank and think about how many shows the writer has in mind.",
      hints: [
        "Say each choice in the blank and think about how many shows the writer has in mind.",
        "Notice the words after the blank that name how long a time the writer is talking about.",
        "More good is not built the way school writing builds a comparing word."
      ],
      how: [
        "The writer sets the fireworks beside every show of the summer, which is more than two.",
        "Good changes completely: good, better, best. The form for a group is best.",
        "The answer is best. Better is for a pair, and most best and more good are not correct."
      ],
      misconception: "A common mix-up is keeping better because it sounds nice. Match the form to the number of shows.",
      why: "The answer is best. The fireworks are set beside every show of that summer, so the line needs the form for a group. Good changes completely: good, better, best.",
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
      prompt: "Line 4 is wrong. Which pair of new versions repairs it?",
      pick: 2,
      choices: [
        {
          text: "A girl on a red bike rode slower than the other kids in the long line.",
          correct: true
        },
        {
          text: "A girl on a red bike rode more slowly than the other kids in the long line.",
          correct: true
        },
        {
          text: "A girl on a red bike rode slowest than the other kids in the long line."
        },
        {
          text: "A girl on a red bike rode more slowlier than the other kids in the long line."
        },
        {
          text: "A girl on a red bike rode most slowly than the other kids in the long line."
        }
      ],
      clue: "Both repairs must keep the meaning. Look at the comparing word in each version and check how it is built.",
      hints: [
        "Both repairs must keep the meaning. Look at the comparing word in each version and check how it is built.",
        "Find the comparing word in every version. Ask whether it is built correctly and whether it suits the girl and the rest of the line.",
        "Slowest than puts the form for a group beside than, which sets only two things side by side."
      ],
      how: [
        "The girl is set beside the other kids in the line, so the sentence compares her with the rest.",
        "Slow adds -er: slower. Slowly ends in -ly, so it takes more: more slowly.",
        "The answers are \"A girl on a red bike rode slower than the other kids in the long line.\" and \"A girl on a red bike rode more slowly than the other kids in the long line.\" The others stack comparing parts or use -est or most with than."
      ],
      misconception: "A common mix-up is thinking only one repair works. Slow can add -er, and slowly can take more.",
      why: "The answers are \"A girl on a red bike rode slower than the other kids in the long line.\" and \"A girl on a red bike rode more slowly than the other kids in the long line.\" Slower and more slowly both set the girl beside the other kids. The other versions stack comparing parts or use -est or most with than.",
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
      stem: "A basket holds a trio of kittens: Pip, Dot and Sox.",
      prompt: "Pick the line with no comparing error.",
      choices: [
        {
          text: "In that basket, Dot is the noisiest kitten.",
          correct: true
        },
        {
          text: "In that basket, Dot is the noisyest kitten."
        },
        {
          text: "In that basket, Dot is the most noisier kitten."
        },
        {
          text: "In that basket, Dot is the more noisy kitten."
        }
      ],
      clue: "Count the kittens, then look at how each line builds its comparing word from noisy.",
      hints: [
        "Count the kittens, then look at how each line builds its comparing word from noisy.",
        "Study the endings of the lines and the letters that come right before them.",
        "The more noisy names the louder one of a pair, and the basket holds a trio."
      ],
      how: [
        "Count the kittens: Pip, Dot and Sox make three.",
        "Noisy ends with a consonant and y, so the y becomes i before -est: noisiest.",
        "The answer is \"In that basket, Dot is the noisiest kitten.\" Noisyest keeps the y, most noisier stacks two comparing parts, and the more noisy is for a pair."
      ],
      misconception: "A common mix-up is putting -est straight after the y. Change the y to i first.",
      why: "The answer is \"In that basket, Dot is the noisiest kitten.\" Three kittens are compared, so the line needs the -est form, and noisy changes its y to i. The other lines keep the y, stack two comparing parts, or use the form for a pair.",
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
      stem: "Dana sang more clearly than Pablo did at the talent show.",
      prompt: "Kim would like clearlier in place of more clearly. Which reply shows why Dana's wording works?",
      choices: [
        {
          text: "Clearly ends in -ly, so a helper word such as more takes the place of -er when Dana is set beside one singer.",
          correct: true
        },
        {
          text: "Clearly has only one syllable, so the ending -er has to be added right onto its last letter by the writer, always."
        },
        {
          text: "Clearly belongs to a group comparison at the show, so the wording needs most clearly in this spot, not more."
        },
        {
          text: "Clearly describes a singer instead of an action, so no helper word may sit in front of it at all, ever."
        }
      ],
      clue: "Check how many syllables clearly has and what letters finish it.",
      hints: [
        "Check how many syllables clearly has and what letters finish it.",
        "Count the singers that Dana is compared with, then think about what job the word clearly does.",
        "Clearly tells how Dana sang, not what she is."
      ],
      how: [
        "Clearly tells how Dana sang, and it ends in -ly.",
        "A word that ends in -ly takes more for two things and most for three or more, in place of -er and -est.",
        "Dana is set beside only Pablo, so the answer is \"Clearly ends in -ly, so a helper word such as more takes the place of -er when Dana is set beside one singer.\""
      ],
      misconception: "A common mix-up is adding -er to every word that tells how. A word that ends in -ly takes more instead.",
      why: "The answer is \"Clearly ends in -ly, so a helper word such as more takes the place of -er when Dana is set beside one singer.\" Clearly ends in -ly, so a helper word such as more takes the place of -er when Dana is set beside one singer. Dana is set beside only Pablo, so more clearly is right.",
      like: ["SK-GUM4-2-C15"]
    }
  ],
  addons: {
    "SK-GUM4-2-P1": {
      hints: [
        "Look at the little word after the blank, and count the animals being compared.",
        "Check each choice for the size word and the letters that come before its ending.",
        "More bigger uses two comparing parts at once, which is never correct in school writing."
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
        "Sami and his brother are two people, and their sister joins them to make three.",
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
      "Match boy, girl or thing, too. Use he, him or his for a boy or man, she or her for a girl or woman, and it or its for a thing.",
      "Two nouns joined by and mean more than one. In \"Dan and Rosa hung their coats,\" the pronoun their stands for both children.",
      "A pronoun for a thing that owns something is its, with no apostrophe. The word it's is short for it is, so it cannot show ownership."
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
    },
    {
      show: ["Dan and Rosa hung ___ coats on the hooks by the door."],
      ask: "Which pronoun fits: his, her or their?",
      steps: [
        "Find the nouns the pronoun stands for. The coats belong to Dan and Rosa.",
        "Two nouns joined by and add up to more than one person.",
        "Choose the pronoun for more than one."
      ],
      answer: "Their, because Dan and Rosa are more than one person."
    }
  ],
  parent: "While you read together, stop at a pronoun like they or her and ask, \"Who is that?\" Your child points to the noun the pronoun stands for.",
  passages: [
    /* B8a:passages:start */
    {
      id: "p1",
      title: "Our Library Visit",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Friday, our class walked to the school library.",
          "(2) Mrs. Pratt put on his glasses and read the rules to us.",
          "(3) The first graders were already there, and they sat on a big rug."
        ],
        [
          "(4) The boys picked up her books and looked for a quiet table.",
          "(5) My friend Ana found a book about birds, and she showed it to me.",
          "(6) The new globe is huge, and it spins on their stand."
        ],
        [
          "(7) Luis and I chose a mystery book and read it together.",
          "(8) The books about space were my favorite, so I carried it home.",
          "(9) Mrs. Pratt thanked the class and gave us a big smile.",
          "(10) We hope to go back to the library soon."
        ]
      ]
    },
    {
      id: "p2",
      title: "The Fire Station Visit",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class visited the fire station on Tuesday.",
          "(2) Chief Romero met us at the door with a big smile.",
          "(3) Mr. Davis put on his boots and climbed the tall ladder."
        ],
        [
          "(4) The ladder is heavy, so the crew carries them with two hands.",
          "(5) Ms. Chen showed us the truck, and he explained how the siren works.",
          "(6) The truck is red, and it has a loud siren on its roof."
        ],
        [
          "(7) Two firefighters slid down the pole and landed on her feet.",
          "(8) We asked many questions, and the chief answered them all.",
          "(9) My brother wants to be a firefighter, so he took notes.",
          "(10) At the end, we thanked the firefighters for their time."
        ]
      ]
    },
    {
      id: "p3",
      title: "Our Camping Trip",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last weekend, my family went camping by a lake.",
          "(2) Dad put up the tent, and Mom helped him hold the poles.",
          "(3) Grandma packed the food, and he put it in the cooler.",
          "(4) The tent was small, but it kept us dry in the storm."
        ],
        [
          "(5) The lantern gave a soft glow, and we loved their light.",
          "(6) Mom cooked the fish, and we ate it with warm rice.",
          "(7) Grandpa told a story, and he made us laugh."
        ],
        [
          "(8) My uncles arrived late, and he set up camp quickly.",
          "(9) We watched the stars until our eyes felt heavy.",
          "(10) I hope we can go camping again next summer."
        ]
      ]
    },
    {
      id: "p4",
      title: "Art Class",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) In art class, we painted pictures of the zoo.",
          "(2) Mr. Brooks mixed the paint and wiped her brush on a rag.",
          "(3) The twins shared their blue paint with the girls at the next table."
        ],
        [
          "(4) The girls hung her pictures on the long wall.",
          "(5) Sam drew a big tent, and he colored it bright red.",
          "(6) Ella's brush fell on the floor, so she picked them up."
        ],
        [
          "(7) Ms. Gomez smiled and told us that she loved our colors.",
          "(8) The pictures looked great, so we took it home to show our families.",
          "(9) Eli and Ben carried the brushes back, and they washed them.",
          "(10) Our class will paint again on Friday."
        ]
      ]
    },
    {
      id: "p5",
      title: "The Bake Sale",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our neighbors held a bake sale on Saturday.",
          "(2) Mrs. Park spread a long cloth on the table and laid out her best pies.",
          "(3) The pie is warm, so the baker covers them with a towel."
        ],
        [
          "(4) Mr. Reed sold bread, and she wrapped it in paper.",
          "(5) The twins ran the cash box, and they counted the coins.",
          "(6) The sign is bright, and it hangs on its pole by the road."
        ],
        [
          "(7) Two workers loaded the chairs and drove his truck home.",
          "(8) We counted the money, and the total made us proud.",
          "(9) My aunt baked a cake, so she gave us a slice.",
          "(10) We thanked the bakers for their hard work."
        ]
      ]
    },
    {
      id: "p6",
      title: "A Day at the Beach",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last July, my family spent a day at the beach.",
          "(2) Dad carried the cooler, and Mom brought the umbrella.",
          "(3) My brothers dug a big hole, and he filled it with water."
        ],
        [
          "(4) The waves were big, and they splashed on the rocks.",
          "(5) My sister built a sandcastle with tall towers and decorated it with shells.",
          "(6) The gulls flew over us, and we watched them dive."
        ],
        [
          "(7) Grandma sat under the umbrella and read her book.",
          "(8) My aunts walked slowly along the sandy shore beside the rolling waves, and he looked for pink shells and smooth stones.",
          "(9) The sun set, and its light turned the sky orange.",
          "(10) We packed our things and drove home after a long, happy day."
        ]
      ]
    }
    /* B8a:passages:end */
  ],
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
            ref: "SK-GUM4-3-P5"
          },
          {
            id: "SK-GUM4-3-C03",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: ["p1"],
            prompt: "In sentence 5 of the draft, which noun does the pronoun it stand for?",
            choices: [
              {
                text: "a book about birds",
                correct: true
              },
              {
                text: "my friend Ana"
              },
              {
                text: "the birds in the book"
              },
              {
                text: "Ana and me"
              }
            ],
            clue: "A pronoun stands for a noun named earlier. Find the pronoun, then look back for its noun.",
            hints: [
              "A pronoun stands for a noun named earlier. Find the pronoun, then look back for its noun.",
              "Look at the first half of the sentence, before the word and. Then say the sentence with each choice in place of the pronoun.",
              "Ana is a person, so a pronoun for a thing cannot stand for her."
            ],
            how: [
              "Find the pronoun in sentence 5: it.",
              "Look back for the noun it replaces. Ana found a book about birds, and then she showed it.",
              "The answer is a book about birds. Ana and me are people, and the birds are only what the book is about."
            ],
            misconception: "A common mix-up is picking the noun closest to the pronoun. The pronoun stands for the thing that was found and then shown.",
            why: "The answer is \"a book about birds\" It stands for the thing Ana found and showed, which is a book about birds. Ana and me are people, and the birds are only what the book is about."
          },
          {
            id: "SK-GUM4-3-C04",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: ["p1"],
            prompt: "Sentence 4 of the draft has a mistake. Choose the pronoun that fixes it.",
            text: "The boys picked up {0} books and looked for a quiet table.",
            slots: [
              {
                options: ["their","his","him","theirs"],
                answer: 0
              }
            ],
            clue: "Find the noun that the blank stands for. Then ask how many it names.",
            hints: [
              "Find the noun that the blank stands for. Then ask how many it names.",
              "Look at the first two words of the sentence to see who owns the books.",
              "An ownership word that can stand alone never comes right before a noun, so one choice is not the fix."
            ],
            how: [
              "Find the noun the blank stands for: the boys.",
              "The boys means more than one, so the pronoun must mean more than one.",
              "The answer is their. His and him are for one boy, and theirs cannot come before a noun."
            ],
            misconception: "A common mix-up is trusting the pronoun that is already in the draft. Check it against the noun it stands for.",
            why: "The answer is their. The boys means more than one, so the pronoun is their. His and him are for one boy, and theirs cannot come right before a noun like books."
          },
          {
            id: "SK-GUM4-3-C05",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: ["p1"],
            prompt: "From sentences 3, 5, 6, 7 and 9, select the ONE where a pronoun fails to match its noun.",
            targets: ["p1:1:3","p1:2:2","p1:2:3","p1:3:1","p1:3:3"],
            answer: ["p1:2:3"],
            pick: 1,
            clue: "Find each pronoun in the shown sentences. Then find the noun each one stands for.",
            hints: [
              "Find each pronoun in the shown sentences. Then find the noun each one stands for.",
              "For each pronoun, ask one question: does it match its noun in number and in boy, girl or thing?",
              "In sentence 7, the pronoun stands for a book, and it fits a thing."
            ],
            how: [
              "Find the pronouns: they in sentence 3, she and it in sentence 5, it and their in sentence 6, and it in sentence 7.",
              "They stands for the first graders, she stands for Ana, and it stands for a book in sentences 5 and 7.",
              "In sentence 6, it stands for the globe, but their means more than one, and the globe is one thing, so the sentence needs its."
            ],
            misconception: "A common mix-up is checking only the first pronoun in a sentence. Check every pronoun against its noun.",
            why: "The answer is sentence 6: \"The new globe is huge, and it spins on their stand.\" Their means more than one, but the globe is one thing, so the sentence needs its. In the other shown sentences each pronoun matches its noun."
          },
          {
            id: "SK-GUM4-3-C06",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: ["p1"],
            prompt: "This question has two parts. Work on Part A, then move to Part B.",
            partA: {
              prompt: "Sentence 8 has a mistake. Which revision fixes it?",
              choices: [
                {
                  text: "The books about space were my favorite, so I carried them home.",
                  correct: true
                },
                {
                  text: "The books about space were my favorite, so I carried it home."
                },
                {
                  text: "The books about space were my favorite, so I carried him home."
                },
                {
                  text: "The books about space were my favorite, so I carried theirs home."
                }
              ]
            },
            partB: {
              prompt: "Which fact explains why the correct revision is right?",
              choices: [
                {
                  text: "Books means more than one, so the pronoun must mean more than one.",
                  correct: true
                },
                {
                  text: "Space is the main word in the sentence, so the pronoun must stand for a place."
                },
                {
                  text: "Favorite describes the pronoun, so the pronoun must stand for a person."
                },
                {
                  text: "Home is one thing, so the pronoun must be a pronoun for one thing."
                }
              ]
            },
            clue: "Find the noun that the pronoun in sentence 8 stands for. Then ask whether that noun means one or more than one.",
            hints: [
              "Find the noun that the pronoun in sentence 8 stands for. Then ask whether that noun means one or more than one.",
              "For Part A, try each pronoun in place of the one in the draft. For Part B, look for the fact about the noun the pronoun stands for.",
              "Theirs shows who owns something, and this sentence does not say whose books they are."
            ],
            how: [
              "Part A: the pronoun stands for the books, which is more than one thing. The answer is \"The books about space were my favorite, so I carried them home.\"",
              "It is for one thing, him is for one boy, and theirs shows who owns something.",
              "Part B: the fact is \"Books means more than one, so the pronoun must mean more than one.\""
            ],
            misconception: "A common mix-up is choosing the pronoun that sits next to home. The pronoun must match the books.",
            why: "Part A: \"The books about space were my favorite, so I carried them home.\" Part B: \"Books means more than one, so the pronoun must mean more than one.\" Books means more than one, so the pronoun must be them. It is for one thing, him is for one boy, and theirs shows who owns something."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM4-3-C07",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: ["p2"],
            prompt: "The pronoun in sentence 4 does not suit its noun. Pick the word for the blank that repairs it.",
            text: "The ladder is heavy, so the crew carries {0} with two hands.",
            slots: [
              {
                options: ["it","them","him","her"],
                answer: 0
              }
            ],
            clue: "Find the noun that the blank stands for. Then ask whether that noun is one thing or more than one.",
            hints: [
              "Find the noun that the blank stands for. Then ask whether that noun is one thing or more than one.",
              "Read the words that come before the comma, and name the thing they describe.",
              "Her is a pronoun for a girl or woman, and nothing in this sentence is one."
            ],
            how: [
              "Find the noun the blank stands for: the ladder.",
              "A ladder is one thing, not a person, so the pronoun must be the one for a thing.",
              "The answer is it. Them is for more than one, and him and her are for people."
            ],
            misconception: "A common mix-up is choosing a pronoun for the crew. The blank stands for the thing that is heavy.",
            why: "The answer is it. The ladder is one thing, so the pronoun is it. Them is for more than one, and him and her are for people."
          },
          {
            id: "SK-GUM4-3-C08",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: ["p2"],
            prompt: "Look at sentences 3, 5, 6, 8 and 10 on the draft. Select the ONE of them in which a pronoun does not match the noun it stands for.",
            targets: ["p2:1:3","p2:2:2","p2:2:3","p2:3:2","p2:3:4"],
            answer: ["p2:2:2"],
            pick: 1,
            clue: "Find each pronoun and the noun it stands for. Then compare the two.",
            hints: [
              "Find each pronoun and the noun it stands for. Then compare the two.",
              "For each pronoun, check whether its noun is a boy or man, a girl or woman, or a thing.",
              "In sentence 8, the pronoun stands for the questions, which is more than one, and the pronoun fits."
            ],
            how: [
              "Find the pronouns: his in sentence 3, he in sentence 5, it and its in sentence 6, them in sentence 8, and their in sentence 10.",
              "His stands for Mr. Davis, it and its stand for the truck, them stands for the questions, and their stands for the firefighters.",
              "He in sentence 5 stands for Ms. Chen, who is a woman, so the sentence needs she."
            ],
            misconception: "A common mix-up is trusting a pronoun because it sounds natural. Check that it matches a boy, a girl or a thing.",
            why: "The answer is sentence 5: \"Ms. Chen showed us the truck, and he explained how the siren works.\" Ms. Chen is a woman, so the pronoun must be she. In the other shown sentences each pronoun matches its noun."
          },
          {
            id: "SK-GUM4-3-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: ["p2"],
            prompt: "In sentence 7, a classmate says that her is fine because the firefighters could be women. What is the best response?",
            choices: [
              {
                text: "Two firefighters means more than one, so the pronoun must be a plural one such as their.",
                correct: true
              },
              {
                text: "Firefighters is the name of a job, so the pronoun should be a pronoun for a thing."
              },
              {
                text: "Her is right only when it stands for one girl or woman, so the sentence should say his instead of her."
              },
              {
                text: "Landed is an action, so a pronoun for a thing should come right before it."
              }
            ],
            clue: "Look at the noun that the pronoun stands for. Ask what that noun tells you about how many.",
            hints: [
              "Look at the noun that the pronoun stands for. Ask what that noun tells you about how many.",
              "Reread the first words of sentence 7 and decide what matters most here: how many, or boy or girl.",
              "A firefighter is a person, so a response that calls the firefighters a thing cannot be right."
            ],
            how: [
              "Find the pronoun in sentence 7: her. It stands for two firefighters.",
              "Two firefighters means more than one. A pronoun for more than one fits, whether the firefighters are men or women.",
              "The answer is \"Two firefighters means more than one, so the pronoun must be a plural one such as their.\""
            ],
            misconception: "A common mix-up is checking only boy or girl. First check whether the noun means one or more than one.",
            why: "The answer is \"Two firefighters means more than one, so the pronoun must be a plural one such as their.\" Two firefighters means more than one, so the pronoun must be a plural one such as their. Her is for one woman, so it cannot fit two firefighters, whoever they are."
          },
          {
            id: "SK-GUM4-3-C10",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: [],
            prompt: "Which TWO sentences have a pronoun that matches the noun it stands for?",
            pick: 2,
            choices: [
              {
                text: "The swimmers waved their towels at the crowd.",
                correct: true
              },
              {
                text: "Mr. Rivera blew his whistle before the race.",
                correct: true
              },
              {
                text: "The goalie caught the ball and threw them back."
              },
              {
                text: "The runner tied its shoes and stepped to the line."
              },
              {
                text: "The players cheered for her team all season."
              }
            ],
            clue: "For each sentence, find the pronoun and the noun it stands for. Then check whether the two match.",
            hints: [
              "For each sentence, find the pronoun and the noun it stands for. Then check whether the two match.",
              "Keep the sentences in which the noun and the pronoun agree about how many and about boy, girl or thing.",
              "A runner is a person, so a pronoun for a thing cannot stand for one."
            ],
            how: [
              "Find the pronoun and its noun in each sentence.",
              "In \"The swimmers waved their towels at the crowd.\" their stands for the swimmers. In \"Mr. Rivera blew his whistle before the race.\" his stands for Mr. Rivera. Each pair agrees.",
              "In the other sentences, them stands for one ball, its stands for a runner, and her stands for the players."
            ],
            misconception: "A common mix-up is picking a sentence because the pronoun sounds familiar. Check each pronoun against its noun.",
            why: "The answers are \"The swimmers waved their towels at the crowd.\" and \"Mr. Rivera blew his whistle before the race.\" Their matches the swimmers, which is more than one, and his matches Mr. Rivera, who is one man. In the other sentences them is used for one ball, its for a runner, and her for the players."
          },
          {
            id: "SK-GUM4-3-C11",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: [],
            stem: "Sentence A: Aunt Rosa opened her umbrella. Sentence B: The neighbors opened their umbrellas.",
            prompt: "How are the pronouns in the two sentences alike and different?",
            choices: [
              {
                text: "Both show who owns the umbrellas, but her stands for one woman and their stands for more than one person.",
                correct: true
              },
              {
                text: "Both show who owns the umbrellas, but her stands for more than one woman and their stands for one person."
              },
              {
                text: "Both stand for things, but her is for one umbrella and their is for many umbrellas."
              },
              {
                text: "Neither stands for a noun, because a pronoun cannot show who owns something."
              }
            ],
            clue: "Find each pronoun, then find the noun each one stands for.",
            hints: [
              "Find each pronoun, then find the noun each one stands for.",
              "Compare the two nouns. Ask how many people each one names.",
              "The pronouns stand for the people who opened the umbrellas, so a choice about umbrellas cannot be right."
            ],
            how: [
              "In Sentence A, her stands for Aunt Rosa. In Sentence B, their stands for the neighbors.",
              "Aunt Rosa is one woman, and the neighbors means more than one person.",
              "Both pronouns show ownership, so the answer is \"Both show who owns the umbrellas, but her stands for one woman and their stands for more than one person.\""
            ],
            misconception: "A common mix-up is thinking the pronoun stands for the nearest noun. Her and their stand for the people who did the opening.",
            why: "The answer is \"Both show who owns the umbrellas, but her stands for one woman and their stands for more than one person.\" Her stands for Aunt Rosa, who is one woman, and their stands for the neighbors, who are more than one person. Both pronouns show ownership."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM4-3-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: ["p3"],
            prompt: "Pick the blank word that repairs sentence 3, where the pronoun does not suit its noun.",
            text: "Grandma packed the food, and {0} put it in the cooler.",
            slots: [
              {
                options: ["she","he","they","it"],
                answer: 0
              }
            ],
            clue: "Find the noun that the blank stands for. Then decide: boy or man, girl or woman, or thing?",
            hints: [
              "Find the noun that the blank stands for. Then decide: boy or man, girl or woman, or thing?",
              "Check who did the packing in the opening words.",
              "They is for more than one, and the packing was done by one person."
            ],
            how: [
              "Find the noun the blank stands for: Grandma.",
              "Grandma is one woman, so the pronoun must be the one for a woman.",
              "The answer is she. He is for a man, they is for more than one, and it is for a thing."
            ],
            misconception: "A common mix-up is picking the pronoun for the nearest noun. The blank stands for the person who packed the food.",
            why: "The answer is she. Grandma is one woman, so the pronoun is she. He is for a man, they is for more than one, and it is for a thing."
          },
          {
            id: "SK-GUM4-3-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: ["p3"],
            prompt: "Sentence 8 of the draft has a mistake. Choose the TWO revisions that fix it.",
            pick: 2,
            choices: [
              {
                text: "My uncles arrived late, and they set up camp quickly.",
                correct: true
              },
              {
                text: "My uncle arrived late, and he set up camp quickly.",
                correct: true
              },
              {
                text: "My uncles arrived late, and it set up camp quickly."
              },
              {
                text: "My uncle arrived late, and they set up camp quickly."
              },
              {
                text: "My uncles arrived late, and she set up camp quickly."
              }
            ],
            clue: "A pronoun and its noun must agree. A fix may change either one.",
            hints: [
              "A pronoun and its noun must agree. A fix may change either one.",
              "Check each revision: find the noun and the pronoun, then see whether they agree about how many.",
              "She is for a girl or woman, and uncles are men."
            ],
            how: [
              "The draft pairs uncles, which is more than one, with he, which is one.",
              "A fix can make the pronoun match the noun, or make the noun match the pronoun.",
              "The answers are \"My uncles arrived late, and they set up camp quickly.\" and \"My uncle arrived late, and he set up camp quickly.\" In the others, it is for a thing, they does not match one uncle, and she is for a woman."
            ],
            misconception: "A common mix-up is thinking only the pronoun can change. The noun can change, too, as long as the two match.",
            why: "The answers are \"My uncles arrived late, and they set up camp quickly.\" and \"My uncle arrived late, and he set up camp quickly.\" They matches uncles, and he matches one uncle. In the other revisions it is for a thing, they does not match one uncle, and she is for a woman."
          },
          {
            id: "SK-GUM4-3-C14",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: [],
            prompt: "Which sentence has two pronouns that both match their nouns?",
            choices: [
              {
                text: "The neighbors planted a tree, and they watered it every day.",
                correct: true
              },
              {
                text: "The neighbors planted a tree, and they watered them every day."
              },
              {
                text: "The neighbors planted a tree, and he watered it every day."
              },
              {
                text: "The neighbors planted a tree, and it watered them every day."
              }
            ],
            clue: "Each sentence has two pronouns. Find the noun each pronoun stands for.",
            hints: [
              "Each sentence has two pronouns. Find the noun each pronoun stands for.",
              "Check the pronoun before the action word and the pronoun after it, one at a time.",
              "A tree cannot water anything, so one choice has a pronoun that stands for the wrong noun."
            ],
            how: [
              "Find the nouns: the neighbors, which is more than one, and a tree, which is one thing.",
              "The first pronoun stands for the neighbors, so it must mean more than one. The second stands for the tree, so it must mean one thing.",
              "The answer is \"The neighbors planted a tree, and they watered it every day.\" The others pair a pronoun for one person or thing with the neighbors, or use them for the tree."
            ],
            misconception: "A common mix-up is checking only one pronoun. Check both of them against their nouns.",
            why: "The answer is \"The neighbors planted a tree, and they watered it every day.\" They matches the neighbors, which is more than one, and it matches the tree, which is one thing. In the other sentences the pronoun for the neighbors or for the tree does not match."
          },
          {
            id: "SK-GUM4-3-C15",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: [],
            prompt: "Choose the pronouns that make the sentence correct.",
            text: "Mr. Lopez and his son washed {0} truck, and the truck shone in {1} new paint.",
            slots: [
              {
                options: ["their","theirs","its","it's"],
                answer: 0
              },
              {
                options: ["its","their","theirs","it's"],
                answer: 0
              }
            ],
            clue: "Find the noun that each blank stands for. Then decide how many and what kind it is.",
            hints: [
              "Find the noun that each blank stands for. Then decide how many and what kind it is.",
              "For the first blank, count the people who washed the truck. For the second blank, look at what the new paint is on.",
              "It's is short for it is, so it does not show ownership."
            ],
            how: [
              "The first blank stands for Mr. Lopez and his son, which is more than one person. The second blank stands for the truck, which is one thing.",
              "A pronoun for more than one person goes in the first blank. A pronoun for one thing goes in the second.",
              "The answers are their and its. Theirs cannot come before a noun, and it's means it is."
            ],
            misconception: "A common mix-up is leaving out the second washer. The first blank stands for both of them.",
            why: "The answers are their and its. Mr. Lopez and his son are more than one person, so the first blank needs their. The truck is one thing, so the second blank needs its. It's means it is, so it does not show ownership."
          },
          {
            id: "SK-GUM4-3-C16",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
            ],
            passages: [],
            stem: "The gloves were wet, so Dana hung it on the line to dry.",
            prompt: "Which explanation shows why the pronoun it is wrong in this sentence?",
            choices: [
              {
                text: "Gloves means more than one thing, so a pronoun for one thing does not match.",
                correct: true
              },
              {
                text: "Dana is a girl, so the pronoun should show that a girl owns the gloves."
              },
              {
                text: "Line is a thing, so the pronoun should stand for the line instead of the gloves."
              },
              {
                text: "Dry is an action, so the pronoun should be a pronoun for an action."
              }
            ],
            clue: "Find the noun that the pronoun it stands for. Then ask what that noun tells you about how many.",
            hints: [
              "Find the noun that the pronoun it stands for. Then ask what that noun tells you about how many.",
              "Compare the noun with the pronoun. Do the two agree about how many?",
              "Dry is an action word, and a pronoun in this sentence does not stand for an action."
            ],
            how: [
              "The pronoun it stands for the gloves, because the gloves are what Dana hung.",
              "Gloves means more than one thing, but it is for one thing, so the two do not match.",
              "The answer is \"Gloves means more than one thing, so a pronoun for one thing does not match.\""
            ],
            misconception: "A common mix-up is blaming the nearest noun. The pronoun must match the noun it stands for.",
            why: "The answer is \"Gloves means more than one thing, so a pronoun for one thing does not match.\" Gloves means more than one thing, and it is a pronoun for one thing, so they do not match. The sentence needs them."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM4-3-S01",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: [],
      prompt: "Pick the owning word that goes with each owner.",
      cols: ["his","her","its","their"],
      rows: [
        {
          text: "Ben",
          answer: 0
        },
        {
          text: "Ms. Cruz",
          answer: 1
        },
        {
          text: "the nest",
          answer: 2
        },
        {
          text: "the pilots",
          answer: 3
        },
        {
          text: "my grandfather",
          answer: 0
        }
      ],
      clue: "Ask two questions about each owner: how many, and what kind?",
      hints: [
        "Ask two questions about each owner: how many, and what kind?",
        "Fill in the owners you are sure about first, and then use the same two questions on the rest.",
        "A nest is not a person, so the words for a man or a woman cannot go with it."
      ],
      how: [
        "Ask how many and what kind for each owner.",
        "Ben and my grandfather are each one man, and Ms. Cruz is one woman.",
        "The nest is one thing, and the pilots are more than one person."
      ],
      misconception: "A common mix-up is matching by how a name sounds. Ask how many and what kind.",
      why: "Ben and my grandfather are each one man, so his. Ms. Cruz is one woman, so her. The nest is one thing, so its. The pilots are more than one person, so their.",
      like: ["SK-GUM4-3-P5"]
    },
    {
      id: "SK-GUM4-3-S02",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: ["p4"],
      stem: "Sam drew a big tent, and he colored it bright red. Then he added a green flag on top.",
      prompt: "In the first sentence above, what does the word it point back to?",
      choices: [
        {
          text: "a big tent",
          correct: true
        },
        {
          text: "Sam, the boy who held the red crayon"
        },
        {
          text: "the zoo in the picture"
        },
        {
          text: "bright red paint"
        }
      ],
      clue: "A pronoun replaces a noun that was already named. Look back to find that noun.",
      hints: [
        "A pronoun replaces a noun that was already named. Look back to find that noun.",
        "Read the words before the comma. Then say the sentence with each choice in place of the pronoun.",
        "Sam is a person, so a word for a thing cannot replace him."
      ],
      how: [
        "Find the pronoun: it.",
        "Look back for the noun it replaces. Sam drew a big tent, and then he colored it.",
        "The answer is a big tent. Sam is a person, the zoo is another noun, and bright red paint tells how the tent was colored."
      ],
      misconception: "A common mix-up is choosing the name at the start of the sentence. The pronoun stands for the thing that was drawn.",
      why: "The answer is \"a big tent\" It replaces the thing Sam drew, which is a big tent. Sam is a person, the zoo is a different noun, and bright red paint is a color.",
      like: ["SK-GUM4-3-C03"]
    },
    {
      id: "SK-GUM4-3-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: ["p4"],
      prompt: "The writer picked a wrong ownership word in the second line below. Choose the repair.",
      text: "In art class, we painted pictures of zoo animals with bright markers. The girls hung {0} pictures on the long wall.",
      slots: [
        {
          options: ["their","its","theirs","them"],
          answer: 0
        }
      ],
      clue: "Find the noun the blank stands for, then count how many it names.",
      hints: [
        "Find the noun the blank stands for, then count how many it names.",
        "Look at the second word of the second sentence.",
        "An ownership word that can stand alone never comes right before a noun, so one choice is not the answer."
      ],
      how: [
        "The blank stands for the girls.",
        "The girls means more than one, so the pronoun must mean more than one.",
        "The answer is their. Its is for a thing, theirs cannot come before a noun, and them does not show ownership."
      ],
      misconception: "A common mix-up is leaving the pronoun that is in the draft. Check it against the noun it stands for.",
      why: "The answer is their. The girls means more than one, so the pronoun is their. Its is for a thing, theirs cannot come before a noun, and them does not show ownership.",
      like: ["SK-GUM4-3-C04"]
    },
    {
      id: "SK-GUM4-3-S04",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: ["p4"],
      prompt: "Lines from a classmate's painting-class account are numbered below. Choose the single line in which a replacement word clashes with whatever it stands for.",
      targets: ["p4:1:3","p4:2:2","p4:2:3","p4:3:1","p4:3:3"],
      answer: ["p4:2:3"],
      pick: 1,
      clue: "Find every pronoun in the five sentences and the noun each one replaces.",
      hints: [
        "Find every pronoun in the five sentences and the noun each one replaces.",
        "Ask of each pronoun: does it agree with its noun about how many and about boy, girl or thing?",
        "In sentence 9, both pronouns stand for people or things that they match."
      ],
      how: [
        "Find the pronouns: their in sentence 3, he and it in sentence 5, she and them in sentence 6, she in sentence 7, and they and them in sentence 9.",
        "Each pronoun matches its noun except one pair.",
        "In sentence 6, them stands for one brush, but them means more than one, so the sentence needs it."
      ],
      misconception: "A common mix-up is checking only the first pronoun in a sentence. Check every pronoun against its noun.",
      why: "The answer is sentence 6: \"Ella's brush fell on the floor, so she picked them up.\" Ella's brush is one thing, but them means more than one, so the sentence needs it. In the other sentences each pronoun matches its noun.",
      like: ["SK-GUM4-3-C05"]
    },
    {
      id: "SK-GUM4-3-S05",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: ["p4"],
      prompt: "Finish Part A first, and after that finish Part B.",
      partA: {
        prompt: "Which change repairs line 8 of the art class story?",
        choices: [
          {
            text: "Swap it for them.",
            correct: true
          },
          {
            text: "Swap it for her."
          },
          {
            text: "Swap it for hers."
          },
          {
            text: "Swap families for family."
          }
        ]
      },
      partB: {
        prompt: "Which statement supports that change?",
        choices: [
          {
            text: "Pictures names several things, and a replacement for several things is needed.",
            correct: true
          },
          {
            text: "Families comes last, and a replacement for the last noun listed in the line is needed here."
          },
          {
            text: "Great describes the replacement, and a replacement for a person is needed."
          },
          {
            text: "Show tells what the class did, and a replacement for an action is needed."
          }
        ]
      },
      clue: "Find the noun that the pronoun in sentence 8 replaces, and decide whether it means one or more than one.",
      hints: [
        "Find the noun that the pronoun in sentence 8 replaces, and decide whether it means one or more than one.",
        "For Part A, try each change in the draft sentence. For Part B, look for the statement about the noun that the pronoun replaces.",
        "Hers shows who owns something, and the sentence does not say whose pictures they are."
      ],
      how: [
        "Part A: the pronoun replaces the pictures, which is more than one thing. The answer is \"Swap it for them.\"",
        "Her is for one girl, hers shows who owns something, and changing families does not fix the pronoun.",
        "Part B: the statement is \"Pictures names several things, and a replacement for several things is needed.\""
      ],
      misconception: "A common mix-up is changing a different noun. The pronoun is what does not match, so the pronoun is what changes.",
      why: "Part A: \"Swap it for them.\" Part B: \"Pictures names several things, and a replacement for several things is needed.\" Pictures names several things, so the pronoun has to be them. Her is for one girl, hers shows who owns something, and changing families leaves the pronoun wrong.",
      like: ["SK-GUM4-3-C06"]
    },
    {
      id: "SK-GUM4-3-S06",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: ["p5"],
      prompt: "Which choice repairs the second sentence below?",
      text: "Our neighbors held a bake sale on Saturday. The pie is warm, so the baker covers {0} with a clean towel until noon.",
      slots: [
        {
          options: ["it","them","us","you"],
          answer: 0
        }
      ],
      clue: "Find the noun the blank stands for, and ask whether that noun is one thing or more than one.",
      hints: [
        "Find the noun the blank stands for, and ask whether that noun is one thing or more than one.",
        "Read the first part of the second sentence, before the comma, and name what is warm.",
        "Us includes the speaker, and the baker is covering something that is not a person."
      ],
      how: [
        "Find the noun the blank stands for: the pie.",
        "A pie is one thing, not a person, so the pronoun must be the one for a thing.",
        "The answer is it. Them is for more than one, and us and you are for people."
      ],
      misconception: "A common mix-up is choosing a pronoun for the baker. The blank stands for the warm pie.",
      why: "The answer is it. The pie is one thing, so the pronoun is it. Them is for more than one, and us and you are for people.",
      like: ["SK-GUM4-3-C07"]
    },
    {
      id: "SK-GUM4-3-S07",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: ["p5"],
      prompt: "From one student's account of a neighborhood bake sale full of freshly baked treats, five numbered lines are shown. Exactly one links an owner or doer word to the wrong kind of person or thing. Select it.",
      targets: ["p5:1:2","p5:2:1","p5:2:3","p5:3:2","p5:3:4"],
      answer: ["p5:2:1"],
      pick: 1,
      clue: "Find each pronoun and the noun it replaces. Then compare the two.",
      hints: [
        "Find each pronoun and the noun it replaces. Then compare the two.",
        "For each pronoun, check whether its noun is a boy or man, a girl or woman, or a thing.",
        "Sentence 10 has a pronoun for the bakers, which is more than one, and the pronoun fits."
      ],
      how: [
        "Find the pronouns: her in sentence 2, she and it in sentence 4, it and its in sentence 6, us in sentence 8, and their in sentence 10.",
        "Her stands for Mrs. Park, it and its stand for the sign, us stands for the writer's group, and their stands for the bakers.",
        "She in sentence 4 stands for Mr. Reed, who is a man, so the sentence needs he."
      ],
      misconception: "A common mix-up is trusting a pronoun because it sounds natural. Check that it matches a boy, a girl or a thing.",
      why: "The answer is sentence 4: \"Mr. Reed sold bread, and she wrapped it in paper.\" Mr. Reed is a man, so the pronoun must be he. In the other sentences each pronoun matches its noun.",
      like: ["SK-GUM4-3-C08"]
    },
    {
      id: "SK-GUM4-3-S08",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: ["p5"],
      prompt: "A student wrote that two workers drove his truck home. Which fix for sentence 7, with its reason, is best?",
      choices: [
        {
          text: "their, since the workers add up to more than one person",
          correct: true
        },
        {
          text: "its, since a truck is a thing and not a person at all, whatever else is true"
        },
        {
          text: "hers, since both workers might turn out to be women"
        },
        {
          text: "our, since the writer was standing there to watch them work all day"
        }
      ],
      clue: "Find the noun that his stands for, and ask what it tells you about how many.",
      hints: [
        "Find the noun that his stands for, and ask what it tells you about how many.",
        "Reread the first words of sentence 7. Decide whether the number of workers or their gender matters more.",
        "A truck is not a worker, so a fix that wants a pronoun for the truck cannot be right."
      ],
      how: [
        "Find the pronoun in sentence 7: his. It stands for two workers.",
        "Two workers is more than one. A pronoun for more than one fits, even if both workers are men.",
        "The answer is \"their, since the workers add up to more than one person.\""
      ],
      misconception: "A common mix-up is thinking a boy pronoun fits two boys. His is for one man, and their is for more than one.",
      why: "The answer is \"their, since the workers add up to more than one person\" Two workers is more than one person, so the pronoun must be their. His is for one man, so it cannot fit two workers.",
      like: ["SK-GUM4-3-C09"]
    },
    {
      id: "SK-GUM4-3-S09",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: [],
      prompt: "Pick the pair of sentences in which each pronoun agrees with whatever it replaces.",
      pick: 2,
      choices: [
        {
          text: "Dancers lifted their arms high above the shining stage lights.",
          correct: true
        },
        {
          text: "Mr. Park tuned his guitar slowly before the concert began.",
          correct: true
        },
        {
          text: "A singer waved to its fans from the balcony of the old theater."
        },
        {
          text: "Drummers packed their drums and carried it to a van outside."
        },
        {
          text: "Mrs. Cole read a story to the class and then closed them."
        }
      ],
      clue: "In each sentence, find every pronoun and what it replaces. Then see whether the two agree.",
      hints: [
        "In each sentence, find every pronoun and what it replaces. Then see whether the two agree.",
        "Keep a sentence only if all of its pronouns agree with their nouns about how many and about boy, girl or thing.",
        "A singer is a person, so a pronoun for a thing cannot replace one."
      ],
      how: [
        "Find every pronoun and what it replaces.",
        "In \"Dancers lifted their arms high above the shining stage lights.\" their replaces the dancers. In \"Mr. Park tuned his guitar slowly before the concert began.\" his replaces Mr. Park. Each pair agrees.",
        "In the other sentences, its replaces a singer, it replaces drums, and them replaces one story."
      ],
      misconception: "A common mix-up is checking only the first pronoun in a sentence. Every pronoun has to agree with its noun.",
      why: "The answers are \"Dancers lifted their arms high above the shining stage lights.\" and \"Mr. Park tuned his guitar slowly before the concert began.\" Their agrees with the dancers, and his agrees with Mr. Park. In the other sentences its is used for a singer, it for several drums, and them for one story.",
      like: ["SK-GUM4-3-C10"]
    },
    {
      id: "SK-GUM4-3-S10",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: [],
      stem: "Sentence A: The farmer fed his goats. Sentence B: The farmers fed their goats.",
      prompt: "What does each pronoun tell the reader?",
      choices: [
        {
          text: "His points to a single man, and their points to a group of people.",
          correct: true
        },
        {
          text: "His points to a single goat, and their points to a group of goats."
        },
        {
          text: "His points to a group of men, and their points to a single person."
        },
        {
          text: "Neither one points to anyone, because a pronoun cannot replace a noun."
        }
      ],
      clue: "Find each pronoun, then find the noun that each one replaces.",
      hints: [
        "Find each pronoun, then find the noun that each one replaces.",
        "Count the farmers in each sentence.",
        "The pronouns replace the people who did the feeding, so a choice about goats cannot be right."
      ],
      how: [
        "In Sentence A, his replaces the farmer. In Sentence B, their replaces the farmers.",
        "The farmer is one man, and the farmers are more than one person.",
        "The answer is \"His points to a single man, and their points to a group of people.\""
      ],
      misconception: "A common mix-up is thinking the pronoun replaces the goats. It replaces the people who did the feeding.",
      why: "The answer is \"His points to a single man, and their points to a group of people.\" His replaces the farmer, who is one man, and their replaces the farmers, who are more than one person.",
      like: ["SK-GUM4-3-C11"]
    },
    {
      id: "SK-GUM4-3-S11",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: ["p6"],
      prompt: "One word in the second line below clashes with its subject. Pick the fix.",
      text: "Last July, my family spent a sunny day at the beach near our grandparents' cabin. My brothers dug a big hole, and {0} filled it with water from a blue bucket.",
      slots: [
        {
          options: ["they","he","them","us"],
          answer: 0
        }
      ],
      clue: "Find the noun the blank stands for, and ask how many it names.",
      hints: [
        "Find the noun the blank stands for, and ask how many it names.",
        "Check who did the digging in the opening words of the second line.",
        "Them is not able to act, so the line does not need it."
      ],
      how: [
        "The blank stands for my brothers.",
        "My brothers means more than one, so the pronoun must be one for more than one that can do an action.",
        "The answer is they. He is for one boy, them cannot do an action, and us includes the speaker."
      ],
      misconception: "A common mix-up is picking the pronoun for the hole. The blank stands for the people who dug.",
      why: "The answer is they. My brothers means more than one, so the pronoun is they. He is for one boy, them cannot do an action, and us includes the speaker.",
      like: ["SK-GUM4-3-C12"]
    },
    {
      id: "SK-GUM4-3-S12",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: ["p6"],
      prompt: "Which pair of new versions repairs line 8 of the seaside story told by a cousin?",
      pick: 2,
      choices: [
        {
          text: "My aunts walked slowly along the sandy shore beside the rolling waves, and they looked for pink shells and smooth stones.",
          correct: true
        },
        {
          text: "My aunt walked slowly along the sandy shore beside the rolling waves, and she looked for pink shells and smooth stones.",
          correct: true
        },
        {
          text: "My aunts walked slowly along the sandy shore beside the rolling waves, and it looked for pink shells and smooth stones."
        },
        {
          text: "My aunt walked slowly along the sandy shore beside the rolling waves, and they looked for pink shells and smooth stones."
        },
        {
          text: "My aunts walked slowly along the sandy shore beside the rolling waves, and he looked for pink shells and smooth stones."
        }
      ],
      clue: "A pronoun and its noun must agree. Either one can change to make the pair match.",
      hints: [
        "A pronoun and its noun must agree. Either one can change to make the pair match.",
        "Check each version: find the noun and the pronoun, then see whether they agree about how many.",
        "It is a pronoun for a thing, and aunts are people, not things."
      ],
      how: [
        "The draft pairs aunts, which is more than one, with he, which is one man.",
        "A repair can make the pronoun match the noun, or make the noun match the pronoun.",
        "The answers are \"My aunts walked slowly along the sandy shore beside the rolling waves, and they looked for pink shells and smooth stones.\" and \"My aunt walked slowly along the sandy shore beside the rolling waves, and she looked for pink shells and smooth stones.\" In the others, it is for a thing, they does not match one aunt, and he is for a man."
      ],
      misconception: "A common mix-up is thinking only the pronoun can change. The noun can change, too, as long as the pair matches.",
      why: "The answers are \"My aunts walked slowly along the sandy shore beside the rolling waves, and they looked for pink shells and smooth stones.\" and \"My aunt walked slowly along the sandy shore beside the rolling waves, and she looked for pink shells and smooth stones.\" They matches aunts, and she matches one aunt. In the other versions it is for a thing, they does not match one aunt, and he is for a man.",
      like: ["SK-GUM4-3-C13"]
    },
    {
      id: "SK-GUM4-3-S13",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: [],
      prompt: "Pick the line in which every stand-in word suits whatever it replaces, whether children or toys.",
      choices: [
        {
          text: "The twins grabbed a bright yellow kite, and they flew it high above the windy field.",
          correct: true
        },
        {
          text: "The twins grabbed a bright yellow kite, and they flew them high above the windy field."
        },
        {
          text: "The twins grabbed a bright yellow kite, and he flew it high above the windy field."
        },
        {
          text: "The twins grabbed a bright yellow kite, and it flew them high above the windy field."
        }
      ],
      clue: "Each line has two stand-in words. Find the noun that each one replaces.",
      hints: [
        "Each line has two stand-in words. Find the noun that each one replaces.",
        "Check the one before the action word and the one after it, one at a time.",
        "A kite cannot fly anything above a field, so one choice has a stand-in word for the wrong noun."
      ],
      how: [
        "Find the nouns: the twins, which is more than one, and a bright yellow kite, which is one thing.",
        "The first pronoun replaces the twins, so it must mean more than one. The second replaces the kite, so it must mean one thing.",
        "The answer is \"The twins grabbed a bright yellow kite, and they flew it high above the windy field.\" The others use he for the twins, or them for the kite, or it for the twins."
      ],
      misconception: "A common mix-up is checking only one of the two pronouns. Check both against their nouns.",
      why: "The answer is \"The twins grabbed a bright yellow kite, and they flew it high above the windy field.\" They matches the twins, and it matches the kite. In the other lines he is used for the twins, them for the kite, or it for the twins.",
      like: ["SK-GUM4-3-C14"]
    },
    {
      id: "SK-GUM4-3-S14",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: [],
      prompt: "Pick the words that finish this story about a fence.",
      text: "Mrs. Webb and her daughter painted {0} fence, and the fence looked bright in {1} fresh color.",
      slots: [
        {
          options: ["their","theirs","them","they"],
          answer: 0
        },
        {
          options: ["its","hers","it","his"],
          answer: 0
        }
      ],
      clue: "Find the noun each blank stands for. Then work out how many and what kind each noun is.",
      hints: [
        "Find the noun each blank stands for. Then work out how many and what kind each noun is.",
        "For the first blank, count the painters. For the second blank, look at what the fresh color covers.",
        "Hers shows who owns something, and the fence does not belong to a woman in this sentence."
      ],
      how: [
        "The first blank stands for Mrs. Webb and her daughter, which is more than one person. The second blank stands for the fence, which is one thing.",
        "The first blank needs a word for several people, and the second needs a word for a single thing.",
        "The answers are their and its. Theirs cannot come before a noun, them and they do not show ownership, and it does not show ownership either."
      ],
      misconception: "A common mix-up is leaving out the daughter. The first blank stands for both painters.",
      why: "The answers are their and its. Mrs. Webb and her daughter are more than one person, so the first blank needs their. The fence is one thing, so the second blank needs its. Hers is for a woman, and his is for a man.",
      like: ["SK-GUM4-3-C15"]
    },
    {
      id: "SK-GUM4-3-S15",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:C:ensure-pronoun-antecedent-agreement"
      ],
      passages: [],
      stem: "The lamp glowed brightly while Dad turned them off before bed.",
      prompt: "What makes them a poor choice in this line about a bedroom lamp?",
      choices: [
        {
          text: "The word lamp names a single thing, but them points to several, and the two clash.",
          correct: true
        },
        {
          text: "Dad is a man, and a word that shows a man is needed to stand in for the lamp; he is better."
        },
        {
          text: "Off is the last word, and the stand-in ought to point to the word off, since it ends the line."
        },
        {
          text: "Bright is a describing word, and a stand-in ought to point to a describing word in the line."
        }
      ],
      clue: "Find the noun that the word them replaces. Then ask what that noun tells you about how many.",
      hints: [
        "Find the noun that the word them replaces. Then ask what that noun tells you about how many.",
        "Put the noun and the pronoun side by side. Do they agree about how many?",
        "Bright is a describing word, and nothing in the line asks for a stand-in about a describing word."
      ],
      how: [
        "The word them replaces the lamp, because the lamp is what Dad turned off.",
        "Lamp names a single thing, but them points to several things, so the two do not agree.",
        "The answer is \"The word lamp names a single thing, but them points to several, and the two clash.\""
      ],
      misconception: "A common mix-up is blaming the closest word. The pronoun has to agree with the noun it replaces.",
      why: "The answer is \"The word lamp names a single thing, but them points to several, and the two clash.\" Lamp names a single thing, and them points to several things, so they do not agree. The sentence needs it.",
      like: ["SK-GUM4-3-C16"]
    }
  ],
  addons: {
    "SK-GUM4-3-P1": {
      hints: [
        "Find the noun that the blank stands for. Then ask how many and what kind.",
        "Look at the name and the title at the start of the sentence.",
        "Its is for a thing, and a man is not a thing of any kind."
      ],
      how: [
        "Find the noun the blank stands for: Mr. Okafor.",
        "He is one man, so the pronoun must be the one for a man.",
        "The answer is his. Her is for a woman, their is for more than one, and its is for a thing."
      ],
      misconception: "A common mix-up is picking the pronoun that sounds closest to the noun. Check one or more than one, and boy, girl or thing."
    },
    "SK-GUM4-3-P2": {
      hints: [
        "Find the noun that the blank stands for, and ask whether it means one or more than one.",
        "Look at the first noun in the sentence and at the action word before the blank.",
        "Him is for a boy or man, and no one in the sentence is one."
      ],
      how: [
        "Find the noun: cookies.",
        "Cookies means more than one, so the pronoun must mean more than one.",
        "The answer is them. It stands for one thing, and him and her stand for one person."
      ],
      misconception: "A common mix-up is choosing it because cookies is a thing. Check whether the noun means one or more than one."
    },
    "SK-GUM4-3-P3": {
      hints: [
        "A pronoun stands for a noun that is already in the sentence. Find the pronoun first.",
        "Their means more than one, so look at what each choice names and how many it is.",
        "Mr. Hill is one person, so a pronoun for more than one cannot stand for him alone."
      ],
      how: [
        "Find the pronoun: their.",
        "Their means more than one, so look for a choice that names more than one person who made the project.",
        "The answer is the girls. Mr. Hill is one person, and the project is the thing they showed."
      ],
      misconception: "A common mix-up is picking the noun next to the pronoun. The pronoun stands for the people who did the showing."
    },
    "SK-GUM4-3-P4": {
      hints: [
        "In each sentence, find the pronoun and the noun it stands for.",
        "Check each noun: is it one thing or more than one? Then check the pronoun against it.",
        "The cups are many, and the pronoun in that sentence is for one thing."
      ],
      how: [
        "Find the pronoun and its noun in each sentence.",
        "Books means more than one, so them matches. Book and lamp are one thing each, and cups is more than one.",
        "The answer is \"The books fell, so Omar picked them up.\" The others pair them with one thing or it with many."
      ],
      misconception: "A common mix-up is picking the sentence that sounds smoothest. Check each pronoun against its noun."
    },
    "SK-GUM4-3-P5": {
      hints: [
        "Ask two questions about each noun: one or more than one? Boy, girl or thing?",
        "Do the nouns you are sure about first. Then use the same two questions for the rest.",
        "A bicycle is not a person, so the pronouns for people cannot stand for it."
      ],
      how: [
        "Ask how many and what kind for each noun.",
        "Uncle Ray is one man, and my aunt is one woman.",
        "The bicycle is one thing, and the students means more than one."
      ],
      misconception: "A common mix-up is matching by the length of the noun. Ask how many and what kind."
    }
  },
  /* B8a:core:end */
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
      "If the speaker comes last, put a comma inside the closing quotation marks: \"Let's go,\" Mia said. A question mark or exclamation point also goes inside, with no comma: \"Can I come?\" asked Leo.",
      "If you only retell what someone said, leave out the quotation marks. Ms. Reyes said that we should line up at the door. These are not her exact words.",
      "A question mark or exclamation point that ends the spoken words stays inside the closing quotation marks, and it takes the place of the comma: \"Watch out!\" Dad yelled."
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
    },
    {
      show: ["Ruth shouted Watch out for the puddle"],
      ask: "How should this sentence be punctuated?",
      steps: [
        "Find the exact words Ruth shouts: Watch out for the puddle.",
        "The speaker comes first, so put a comma after shouted.",
        "Put quotation marks around her words and start with a capital letter. She is shouting, so end with an exclamation point inside the closing quotation marks."
      ],
      answer: "Ruth shouted, \"Watch out for the puddle!\""
    }
  ],
  parent: "Write down something your child said today with no punctuation. Let your child add the quotation marks, the comma and the capital letter.",
  passages: [
    /* B8a:passages:start */
    {
      id: "p1",
      title: "Our Class Hamster",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last week, our class got a small brown hamster named Biscuit.",
          "(2) Ms. Ortiz said, \"Biscuit needs a quiet place to sleep during the day.\"",
          "(3) Tess asked, \"can we give him a wheel?\"",
          "(4) \"Yes, he will love it,\" Ms. Ortiz answered."
        ],
        [
          "(5) Omar said \"I will fill his water bottle.\"",
          "(6) Then Priya whispered, \"Look, he is hiding in his little house!\"",
          "(7) \"He is shy\" said Noah."
        ],
        [
          "(8) Ms. Ortiz told us that Biscuit would be brave soon.",
          "(9) Tess said, \"We should be gentle with him\".",
          "(10) We all clapped when Biscuit finally ran on the squeaky wheel.",
          "(11) I think Biscuit is the best pet in our whole school.",
          "(12) Next week, we will choose a new toy for his cage."
        ]
      ]
    },
    {
      id: "p2",
      title: "The Picnic at the Park",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Saturday morning, our neighbors had a picnic at Maple Park by the big blue lake.",
          "(2) Mr. Singh brought a big bowl of fresh fruit and a basket of warm rolls.",
          "(3) \"Who wants some grapes?\" he asked.",
          "(4) Lina shouted, \"I do!\""
        ],
        [
          "(5) Mrs. Cole asked \"Where should we put the blanket?\"",
          "(6) \"Put it under the tall oak tree,\" said Mr. Singh.",
          "(7) Then Jack called, \"Come see the ducks\"!"
        ],
        [
          "(8) \"That duck is so loud!,\" laughed Lina.",
          "(9) \"It wants some bread\" Mr. Singh said.",
          "(10) We shared sandwiches and played games in the sunny grass all afternoon long.",
          "(11) We stayed by the lake until the sky turned orange and pink.",
          "(12) It was the best picnic our street ever had."
        ]
      ]
    },
    {
      id: "p3",
      title: "A Rainy Day at Home",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Sunday, heavy rain fell for hours, so my brother and I stayed inside with Grandpa.",
          "(2) Ravi sighed, \"I wish we could play outside.\"",
          "(3) \"Let's build a fort,\" I said.",
          "(4) Ravi asked \"Can we use the big blue blanket?\""
        ],
        [
          "(5) Grandpa smiled and said, \"Yes, but please fold it later.\"",
          "(6) \"Look at our tall fort!\" Ravi cheered.",
          "(7) Then Grandpa asked, \"who wants hot cocoa?\""
        ],
        [
          "(8) \"We do,\" we shouted.",
          "(9) Ravi said, \"This is the best rainy day ever\".",
          "(10) By dinner, the sun was out, but we stayed in our cozy fort.",
          "(11) Grandpa said it was the coziest fort he had ever seen, and we agreed.",
          "(12) Rain makes a day at home feel like a grand adventure."
        ]
      ]
    },
    {
      id: "p4",
      title: "A Lost Mitten",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Monday, Ellie lost her red mitten on the way to school.",
          "(2) \"Have you seen my mitten?\" she asked the bus driver.",
          "(3) The bus driver said \"Look under your seat.\"",
          "(4) Ellie searched under every seat but found only a gum wrapper."
        ],
        [
          "(5) At lunch, Mr. Hale asked, \"What does your mitten look like?\"",
          "(6) Ellie answered, \"it has a white stripe.\"",
          "(7) \"I saw one like that near the gym\" said Mr. Hale."
        ],
        [
          "(8) Mr. Hale told her that he would check the lost box.",
          "(9) After school, Ellie shouted, \"I found it!\"",
          "(10) She said, \"Thank you, Mr. Hale\".",
          "(11) Now Ellie keeps her mittens clipped to her coat.",
          "(12) She also checks her pockets twice before she leaves each day."
        ]
      ]
    },
    {
      id: "p5",
      title: "A Day at the Pond",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last spring, our family hiked to a quiet pond near our town, and the path was muddy.",
          "(2) Dad pointed and said, \"Look at the green frog!\"",
          "(3) \"Where did it go?\" Nina asked.",
          "(4) Mom said \"It jumped onto that big flat rock.\""
        ],
        [
          "(5) Then a duck splashed in the cool water, and tiny waves rolled to the shore.",
          "(6) \"Be very quiet,\" whispered Dad.",
          "(7) Nina giggled, \"That duck looks silly\"!"
        ],
        [
          "(8) \"May we toss the ducks some crackers?,\" I asked.",
          "(9) \"Ducks should eat seeds, not crackers\" Mom said.",
          "(10) We took a lot of pictures before we went home.",
          "(11) The ride back was long, and everyone fell asleep in the car.",
          "(12) I hope we visit the pond again when the flowers bloom."
        ]
      ]
    },
    {
      id: "p6",
      title: "Baking Day",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Saturday, Grandma and I baked cookies in her small, sunny kitchen with the radio on.",
          "(2) \"Measure the flour first,\" she said.",
          "(3) I asked \"How many cups of brown sugar go into the batter?\"",
          "(4) Grandma smiled and said, \"Two cups, please.\""
        ],
        [
          "(5) Then I dropped an egg on the floor.",
          "(6) Grandma laughed, \"no problem, we have more eggs.\"",
          "(7) \"I will clean it up,\" I said."
        ],
        [
          "(8) We baked the cookies for twelve minutes while we cleaned the counter and washed the bowls.",
          "(9) Grandma said, \"These smell wonderful\".",
          "(10) The cookies tasted sweet, and we shared them with everyone we knew.",
          "(11) Next weekend, we plan to bake a pie with fresh peaches from her tree.",
          "(12) Baking beside Grandma is the sweetest part of any slow weekend."
        ]
      ]
    }
    /* B8a:passages:end */
  ],
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
            ref: "SK-GUM4-4-P3"
          },
          {
            ref: "SK-GUM4-4-P5"
          },
          {
            id: "SK-GUM4-4-C03",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: ["p1"],
            prompt: "A classmate says sentence 8 needs quotation marks because Ms. Ortiz is the one talking. What is the best response?",
            choices: [
              {
                text: "Sentence 8 retells her idea in the writer's own words, and only exact words go inside quotation marks.",
                correct: true
              },
              {
                text: "Sentence 8 names a speaker, and every sentence that names a speaker needs quotation marks around its words."
              },
              {
                text: "Sentence 8 uses the word told, and that word always shows that quotation marks are needed right after it."
              },
              {
                text: "Sentence 8 is a plain statement, and quotation marks are only used with questions and exclamations."
              }
            ],
            clue: "Decide what sentence 8 does with the speaker's words, and what job quotation marks do.",
            hints: [
              "Decide what sentence 8 does with the speaker's words, and what job quotation marks do.",
              "Read sentence 8 aloud, then read sentence 2 aloud, and notice what each one does with what Ms. Ortiz said.",
              "Marks around speech work in statements, questions and exclamations alike, so one response gives a false rule."
            ],
            how: [
              "Read sentence 8: Ms. Ortiz told us that Biscuit would be brave soon.",
              "The writer retells her idea in the writer's own words. These are not the words she said out loud.",
              "The answer is \"Sentence 8 retells her idea in the writer's own words, and only exact words go inside quotation marks.\""
            ],
            misconception: "A common mix-up is putting quotation marks around any sentence that names a speaker. Only the exact words someone says go inside them.",
            why: "The answer is \"Sentence 8 retells her idea in the writer's own words, and only exact words go inside quotation marks.\" Sentence 8 tells her idea but not her exact words, so it needs no quotation marks. In sentence 2, the exact words she said are inside quotation marks."
          },
          {
            id: "SK-GUM4-4-C04",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: ["p1"],
            prompt: "Pick the version of Tess's question in sentence 3 that is punctuated correctly.",
            text: "Tess asked, {0}",
            slots: [
              {
                options: [
                  "\"Can we give him a wheel?\"",
                  "\"can we give him a wheel?\"",
                  "\"Can we give him a wheel\"?",
                  "\"Can we give him a wheel?,\""
                ],
                answer: 0
              }
            ],
            clue: "Compare how each choice begins and how each choice ends. Ask which one follows the rules for spoken words.",
            hints: [
              "Compare how each choice begins and how each choice ends. Ask which one follows the rules for spoken words.",
              "Read the first word inside the opening quotation marks. Then look at where the question mark sits.",
              "A comma after the question mark is only needed when the speaker comes last, and Tess comes first."
            ],
            how: [
              "Tess comes first, so a comma follows asked and her words come next in quotation marks.",
              "The first word inside the quotation marks starts with a capital letter, and the question mark stays inside them.",
              "The answer is \"Can we give him a wheel?\" The other choices use a small c, put the question mark outside, or add a comma after the question mark."
            ],
            misconception: "A common mix-up is fixing only the end mark. Check the first letter inside the quotation marks, too.",
            why: "The answer is \"Can we give him a wheel?\". The first word inside the quotation marks needs a capital C, and the question mark stays inside them with no comma after it. Each other choice breaks one of these rules."
          },
          {
            id: "SK-GUM4-4-C05",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: ["p1"],
            prompt: "From sentences 2, 4, 6, 7 and 8, select the ONE that is punctuated incorrectly.",
            targets: ["p1:1:2","p1:1:4","p1:2:2","p1:2:3","p1:3:1"],
            answer: ["p1:2:3"],
            pick: 1,
            clue: "Take the shown sentences in turn. Look for spoken words and test the marks around them.",
            hints: [
              "Take the shown sentences in turn. Look for spoken words and test the marks around them.",
              "In each shown sentence, check the capital letters, the commas and the marks that end the spoken words.",
              "Sentence 8 retells an idea with no quotation marks, and retelling needs none, so it is already correct."
            ],
            how: [
              "Examine every shown sentence for spoken words and for the marks around them.",
              "Sentences 2, 4 and 6 have correct capital letters, commas and end marks, and sentence 8 retells an idea with no quotation marks.",
              "Sentence 7 has no comma after shy, so it is the answer."
            ],
            misconception: "A common mix-up is choosing sentence 8 because it has no quotation marks. It only retells an idea, so it needs none.",
            why: "The answer is sentence 7: \"\"He is shy\" said Noah.\" Sentence 7 needs a comma after shy, inside the closing quotation marks. The other shown sentences are punctuated correctly."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM4-4-C06",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: ["p1"],
            prompt: "This item has two parts. Begin with Part A and then go on to Part B.",
            partA: {
              prompt: "Sentence 5 has a mistake. Which revision fixes it?",
              choices: [
                {
                  text: "Omar said, \"I will fill his water bottle.\"",
                  correct: true
                },
                {
                  text: "Omar said, \"i will fill his water bottle.\""
                },
                {
                  text: "Omar said, \"I will fill his water bottle\"."
                },
                {
                  text: "Omar said \"I will fill his water bottle.\""
                }
              ]
            },
            partB: {
              prompt: "Which fact explains why the correct revision is right?",
              choices: [
                {
                  text: "A comma sets off the speaker from the spoken words when the speaker comes first.",
                  correct: true
                },
                {
                  text: "A comma belongs after the closing quotation marks, because it is not part of the words Omar spoke."
                },
                {
                  text: "A comma is needed only after a question, and Omar's spoken words ask something."
                },
                {
                  text: "A comma belongs before every quotation mark, because a quotation is always a new idea."
                }
              ]
            },
            clue: "For Part A, compare what each choice puts after said and at the end of the quote. For Part B, look for the fact that matches the change.",
            hints: [
              "For Part A, compare what each choice puts after said and at the end of the quote. For Part B, look for the fact that matches the change.",
              "For Part B, think about what divides the name of the person talking from what that person says.",
              "The draft already has a capital I, so a choice that changes it to a small letter cannot be the fix."
            ],
            how: [
              "Part A: the speaker comes first, so a comma is needed right after said. The answer is \"Omar said, \"I will fill his water bottle.\"\"",
              "The other choices change the capital letter, move the period outside, or leave the comma out.",
              "Part B: the fact is \"A comma sets off the speaker from the spoken words when the speaker comes first.\""
            ],
            misconception: "A common mix-up is changing the capital letter or the end mark when the comma is what is missing. Look at what comes right after said.",
            why: "Part A: \"Omar said, \"I will fill his water bottle.\"\" Part B: \"A comma sets off the speaker from the spoken words when the speaker comes first.\" Part A needs a comma after said, because the speaker comes first. Part B: a comma sets off the speaker from the spoken words."
          },
          {
            id: "SK-GUM4-4-C07",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: ["p2"],
            prompt: "Choose the way to write Lina's words in sentence 8 that fixes the mistake.",
            text: "{0} laughed Lina.",
            slots: [
              {
                options: [
                  "\"That duck is so loud!\"",
                  "\"That duck is so loud!,\"",
                  "\"That duck is so loud\",",
                  "\"That duck is so loud\"!"
                ],
                answer: 0
              }
            ],
            clue: "Look at the mark that ends Lina's words. Ask what, if anything, may come after it.",
            hints: [
              "Look at the mark that ends Lina's words. Ask what, if anything, may come after it.",
              "Think about what an exclamation point already does at the end of spoken words.",
              "The exclamation is part of what Lina shouts, so it cannot sit outside the closing quotation marks."
            ],
            how: [
              "Lina's words end with an exclamation point, and the speaker comes last.",
              "An exclamation point already ends the spoken words, so no comma is added after it.",
              "The answer is \"That duck is so loud!\" The other choices keep the extra comma, move the mark outside, or lose the exclamation."
            ],
            misconception: "A common mix-up is thinking a comma must follow every set of spoken words when the speaker comes last. A question mark or exclamation point takes its place.",
            why: "The answer is \"That duck is so loud!\". The exclamation point stays inside the closing quotation marks, and no comma follows it. The other choices keep an extra comma or move a mark outside."
          },
          {
            id: "SK-GUM4-4-C08",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: ["p2"],
            prompt: "From sentences 3, 5, 6, 7 and 9, select the ONE where a mark sits outside the closing quotation marks that should sit inside them.",
            targets: ["p2:1:3","p2:2:1","p2:2:2","p2:2:3","p2:3:2"],
            answer: ["p2:2:3"],
            pick: 1,
            clue: "Find the spoken words in each shown sentence. Then find the quotation marks that close them.",
            hints: [
              "Find the spoken words in each shown sentence. Then find the quotation marks that close them.",
              "In each shown sentence, look at what is written right before and right after the closing quotation marks.",
              "Sentence 6 has its comma inside the closing quotation marks, so it is already correct."
            ],
            how: [
              "Find the closing quotation marks in each shown sentence and see which marks sit beside them.",
              "Sentences 3 and 6 have the question mark and the comma inside, and sentences 5 and 9 have no mark outside.",
              "In sentence 7, the exclamation point comes after the closing quotation marks, so it is the answer."
            ],
            misconception: "A common mix-up is choosing a sentence that is only missing a comma. Here, look for a mark placed outside the closing quotation marks.",
            why: "The answer is sentence 7: \"Then Jack called, \"Come see the ducks\"!\" The exclamation point in sentence 7 is outside the closing quotation marks, but it belongs inside them. In the other shown sentences no mark sits outside them."
          },
          {
            id: "SK-GUM4-4-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: ["p2"],
            prompt: "A classmate thinks sentence 9 needs no mark after the word bread. Which response is best?",
            choices: [
              {
                text: "A comma is needed inside the closing quotation marks, because the speaker comes after the words and the words end with no other mark.",
                correct: true
              },
              {
                text: "No mark is needed after bread, because the words Mr. Singh said already show who is talking, and that is enough."
              },
              {
                text: "A period is needed inside the closing quotation marks, because the spoken words are a complete statement, and a statement ends with one."
              },
              {
                text: "A comma is needed outside the closing quotation marks, because the comma is not part of the words that Mr. Singh said out loud."
              }
            ],
            clue: "Think about what must divide the words someone says from the name of the person saying them when that name is last.",
            hints: [
              "Think about what must divide the words someone says from the name of the person saying them when that name is last.",
              "Look at the end of what is said. Is there a question mark or an exclamation point there?",
              "Naming the speaker does show who is talking, but it does not take the place of a mark that finishes what is said."
            ],
            how: [
              "Find the spoken words in sentence 9: It wants some bread.",
              "The speaker comes last, and the words do not end with a question mark or an exclamation point.",
              "The answer is \"A comma is needed inside the closing quotation marks, because the speaker comes after the words and the words end with no other mark.\""
            ],
            misconception: "A common mix-up is thinking the speaker's name is enough to end the spoken words. A mark must still follow the words.",
            why: "The answer is \"A comma is needed inside the closing quotation marks, because the speaker comes after the words and the words end with no other mark.\" The spoken words end with no question mark or exclamation point, so a comma goes right after bread, inside the closing quotation marks. A period would end the whole sentence too early, and a comma outside the quotation marks sits in the wrong place."
          },
          {
            id: "SK-GUM4-4-C10",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: [],
            prompt: "Which TWO sentences are punctuated correctly?",
            pick: 2,
            choices: [
              {
                text: "\"Pass the ball!\" yelled Coach Reed.",
                correct: true
              },
              {
                text: "Dani asked, \"Who is on my team?\"",
                correct: true
              },
              {
                text: "Sam shouted \"Run to first base!\""
              },
              {
                text: "\"Did we win?,\" asked Luis."
              },
              {
                text: "\"Our team played well\", said Mr. Cho."
              }
            ],
            clue: "Go through each sentence in turn and study the marks around the spoken words.",
            hints: [
              "Go through each sentence in turn and study the marks around the spoken words.",
              "Keep the sentences in which the quotation marks, the commas and the end marks all follow the rules.",
              "A comma does not follow a question mark that sits inside the quotation marks, so one sentence is not right."
            ],
            how: [
              "Check the marks around the spoken words in each sentence.",
              "In \"Pass the ball!\" yelled Coach Reed., the exclamation point stays inside and no comma follows it. In Dani asked, \"Who is on my team?\" the comma follows asked and the question mark stays inside.",
              "The other sentences leave out a comma, add a comma after a question mark, or put a comma outside the quotation marks."
            ],
            misconception: "A common mix-up is picking a sentence because it has quotation marks. Check the comma and the end mark, too.",
            why: "The answers are \"\"Pass the ball!\" yelled Coach Reed.\" and \"Dani asked, \"Who is on my team?\"\". The first correct sentence keeps its exclamation point inside the quotation marks with no comma after it, and the second has a comma after asked with the question mark inside. Each other sentence has a misplaced or missing mark."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM4-4-C11",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: [],
            stem: "Sentence A: Ben asked, \"Where is my hat?\" Sentence B: \"Where is my hat?\" asked Ben.",
            prompt: "How are the marks in the two sentences alike and different?",
            choices: [
              {
                text: "Both keep the question mark inside the closing quotation marks, but only Sentence A uses a comma.",
                correct: true
              },
              {
                text: "Both use a comma after the speaker's name, but only Sentence B keeps the question mark inside the quotation marks."
              },
              {
                text: "Both end with a period after the speaker, but only Sentence A puts quotation marks around the question."
              },
              {
                text: "Neither needs a comma, because both sentences ask a question, so the two are punctuated in the same way."
              }
            ],
            clue: "Look at where Ben stands in each sentence. Then compare the marks that sit next to the spoken question.",
            hints: [
              "Look at where Ben stands in each sentence. Then compare the marks that sit next to the spoken question.",
              "Find the comma in each sentence, if there is one, and find the mark that ends each question.",
              "Sentence A ends with a mark that belongs to the question, so a choice that says both end with a period cannot be right."
            ],
            how: [
              "In Sentence A, the speaker comes first, so a comma follows asked.",
              "In Sentence B, the speaker comes last, so no comma follows the question mark.",
              "The answer is \"Both keep the question mark inside the closing quotation marks, but only Sentence A uses a comma.\""
            ],
            misconception: "A common mix-up is thinking both sentences need the same marks. The place of the speaker changes the comma.",
            why: "The answer is \"Both keep the question mark inside the closing quotation marks, but only Sentence A uses a comma.\" In both sentences the question mark stays inside the closing quotation marks. Sentence A has a comma after asked because the speaker comes first, and Sentence B needs none because the question mark already ends the words."
          },
          {
            id: "SK-GUM4-4-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: ["p3"],
            prompt: "Choose the marks that correct the end of sentence 9.",
            text: "Ravi said, \"This is the best rainy day ever{0}",
            slots: [
              {
                options: [".\"","\".","\",","\""],
                answer: 0
              }
            ],
            clue: "Look at how the spoken words end and where the closing quotation marks sit.",
            hints: [
              "Look at how the spoken words end and where the closing quotation marks sit.",
              "Ravi comes first in the sentence, and the words he says are a statement.",
              "A comma would only be right if the speaker came after the spoken words."
            ],
            how: [
              "Ravi comes first, and his words make a statement.",
              "A statement that ends the whole sentence takes a period, and the period stays inside the closing quotation marks.",
              "The answer is .\" The other choices put the period outside, use a comma, or leave off the end mark."
            ],
            misconception: "A common mix-up is putting the period after the closing quotation marks because it also ends the sentence. It belongs inside them.",
            why: "The answer is .\". The period ends Ravi's spoken words, so it stays inside the closing quotation marks. A comma would only be used if Ravi came after his words."
          },
          {
            id: "SK-GUM4-4-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: ["p3"],
            prompt: "Sentence 4 of the draft has a mistake. Choose the TWO revisions that fix it.",
            pick: 2,
            choices: [
              {
                text: "Ravi asked, \"Can we use the big blue blanket?\"",
                correct: true
              },
              {
                text: "\"Can we use the big blue blanket?\" Ravi asked.",
                correct: true
              },
              {
                text: "Ravi asked \"Can we use the big blue blanket\"?"
              },
              {
                text: "\"Can we use the big blue blanket?,\" Ravi asked."
              },
              {
                text: "Ravi asked, \"can we use the big blue blanket?\""
              }
            ],
            clue: "The speaker can come first or last. Check each revision for the marks that match where the speaker sits.",
            hints: [
              "The speaker can come first or last. Check each revision for the marks that match where the speaker sits.",
              "Keep the revisions in which the capital letters, the commas and the question marks all follow the rules.",
              "A question mark and a comma do not sit side by side inside the quotation marks, so one revision is not a fix."
            ],
            how: [
              "The draft leaves out the comma that belongs after asked.",
              "A fix can add the comma, or it can move Ravi to the end, where the question mark does the work of the comma.",
              "The answers are \"Ravi asked, \"Can we use the big blue blanket?\"\" and \"\"Can we use the big blue blanket?\" Ravi asked.\" The others put the mark outside, add a comma after the question mark, or use a small c."
            ],
            misconception: "A common mix-up is thinking the speaker must stay first. Moving the speaker to the end is a fix, too.",
            why: "The answers are \"Ravi asked, \"Can we use the big blue blanket?\"\" and \"\"Can we use the big blue blanket?\" Ravi asked.\" Ravi asked, \"Can we use the big blue blanket?\" adds the missing comma, and \"Can we use the big blue blanket?\" Ravi asked. moves the speaker last with the question mark inside. The other revisions misplace a mark or use a small letter."
          },
          {
            id: "SK-GUM4-4-C14",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: [],
            prompt: "Which sentence from a story about a hike is punctuated correctly?",
            choices: [
              {
                text: "\"Is that a hawk?\" asked Dad.",
                correct: true
              },
              {
                text: "\"Is that a hawk,\" asked Dad?"
              },
              {
                text: "\"Is that a hawk?,\" asked Dad."
              },
              {
                text: "\"Is that a hawk\"? asked Dad."
              }
            ],
            clue: "Find the spoken words, the question mark and the speaker in each choice. Ask where each mark belongs.",
            hints: [
              "Find the spoken words, the question mark and the speaker in each choice. Ask where each mark belongs.",
              "The question belongs to the words Dad speaks, so look at which side of the closing quotation marks it sits on.",
              "A question mark that belongs to the spoken words cannot sit outside the closing quotation marks."
            ],
            how: [
              "Dad asks the question, so the question mark is part of his spoken words.",
              "A question mark that ends spoken words stays inside the closing quotation marks, and no comma follows it.",
              "The answer is \"Is that a hawk?\" asked Dad. The others move the mark outside, use a comma where a question mark belongs, or add a comma after the question mark."
            ],
            misconception: "A common mix-up is putting the question mark at the end of the whole sentence. It belongs to Dad's words, so it goes inside.",
            why: "The answer is \"\"Is that a hawk?\" asked Dad.\" The question mark belongs to Dad's spoken words, so it stays inside the closing quotation marks with no comma after it. Each other choice misplaces a mark."
          },
          {
            id: "SK-GUM4-4-C15",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
            ],
            passages: [],
            prompt: "Choose the words that finish both sentences correctly.",
            text: "Aunt Beth called, {0} Uncle Raj answered, {1}",
            slots: [
              {
                options: [
                  "\"Dinner is ready!\"",
                  "\"dinner is ready!\"",
                  "\"Dinner is ready\"!",
                  "\"Dinner is ready!\","
                ],
                answer: 0
              },
              {
                options: [
                  "\"I will wash my hands.\"",
                  "\"i will wash my hands.\"",
                  "\"I will wash my hands\".",
                  "\"I will wash my hands,\""
                ],
                answer: 0
              }
            ],
            clue: "Read each blank as the words a person says out loud. Then check the capital letter and the end mark in each choice.",
            hints: [
              "Read each blank as the words a person says out loud. Then check the capital letter and the end mark in each choice.",
              "For the first blank, think about how Aunt Beth calls to the family. For the second blank, think about how Uncle Raj answers her.",
              "A comma after the closing quotation marks does not belong here, since Aunt Beth is the speaker and she comes first."
            ],
            how: [
              "Each speaker comes first, so a comma follows called and answered.",
              "Each blank holds the exact words a person says, so each needs a capital letter and an end mark inside the quotation marks.",
              "The answers are \"Dinner is ready!\" and \"I will wash my hands.\" The others use a small letter, put a mark outside, or add a comma after the end mark."
            ],
            misconception: "A common mix-up is fixing only one of the two quotations. Check the capital letter and the end mark in both.",
            why: "The answers are \"Dinner is ready!\" and \"I will wash my hands.\". Each quotation starts with a capital letter and keeps its end mark inside the closing quotation marks. The others use a small letter or misplace a mark."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM4-4-S01",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: [],
      prompt: "From a camping story, pick the TWO lines whose spoken words are written correctly.",
      pick: 2,
      choices: [
        {
          text: "\"Roast the marshmallows slowly,\" warned Uncle Tomas.",
          correct: true
        },
        {
          text: "Hana laughed, \"My hot dog fell in the dirt!\"",
          correct: true
        },
        {
          text: "Dev yelled \"Help me hold this heavy canvas tent!\""
        },
        {
          text: "\"Who has the big bright flashlight tonight?,\" called Mom."
        },
        {
          text: "\"We saw a big brown bear by the river\" whispered Grandma."
        }
      ],
      clue: "Read each line and find the words a camper says out loud. Then check the marks around those words.",
      hints: [
        "Read each line and find the words a camper says out loud. Then check the marks around those words.",
        "Keep the lines where the marks near the closing quotation marks fit the place of the speaker.",
        "Mom asks a question, and a comma after that question mark is not needed, so that line is not one of the two."
      ],
      how: [
        "Find the spoken words in each line and check the marks around them.",
        "The correct lines are \"Roast the marshmallows slowly,\" warned Uncle Tomas. and Hana laughed, \"My hot dog fell in the dirt!\" Uncle Tomas comes last, so a comma ends his words inside the quotation marks. Hana comes first, so a comma follows laughed and the exclamation point stays inside.",
        "The other lines leave out a comma twice or add a comma after a question mark."
      ],
      misconception: "A common mix-up is trusting a line because it has quotation marks. Check the comma and the end mark, too.",
      why: "The answers are \"\"Roast the marshmallows slowly,\" warned Uncle Tomas.\" and \"Hana laughed, \"My hot dog fell in the dirt!\"\". Uncle Tomas's line has the comma inside the closing quotation marks, and Hana's line has a comma after laughed with the exclamation point inside. The other lines leave out a comma or add a comma after a question mark.",
      like: ["SK-GUM4-4-P3"]
    },
    {
      id: "SK-GUM4-4-S02",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: [],
      prompt: "Every line below needs one repair. Match each line with its repair.",
      cols: ["Add a comma","Capitalize a letter","Add quotation marks"],
      rows: [
        {
          text: "Tina said \"Please close the window.\"",
          answer: 0
        },
        {
          text: "The coach shouted, \"run to the fence!\"",
          answer: 1
        },
        {
          text: "Dad called, Dinner is ready!",
          answer: 2
        },
        {
          text: "Aisha asked, \"when does the show start?\"",
          answer: 1
        },
        {
          text: "Mr. Lopez said, Walk, please.",
          answer: 2
        }
      ],
      clue: "Study each line for the spoken words and look at what surrounds them.",
      hints: [
        "Study each line for the spoken words and look at what surrounds them.",
        "Decide first which lines already have quotation marks. Then look at the first letter of the spoken words.",
        "Tina's line has quotation marks and a capital letter, so ask what is missing between her name and her words."
      ],
      how: [
        "Check each line for a comma after the speaker, a capital letter and quotation marks.",
        "Tina's line needs a comma. The coach's line and Aisha's line need a capital letter.",
        "Dad's line and Mr. Lopez's line need quotation marks."
      ],
      misconception: "A common mix-up is fixing the first problem you notice. Check the comma, the capital letter and the quotation marks in each line.",
      why: "Tina's line needs a comma after said. The coach's line needs a capital R and Aisha's line needs a capital W. Dad's line and Mr. Lopez's line need quotation marks around the spoken words.",
      like: ["SK-GUM4-4-P5"]
    },
    {
      id: "SK-GUM4-4-S03",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: ["p4"],
      prompt: "A friend argues that line 8 must be wrapped in quote marks since Mr. Hale appears in it. Which reply is strongest?",
      choices: [
        {
          text: "It reports his plan in the author's wording, so quote marks do not belong, since they mark only word-for-word speech.",
          correct: true
        },
        {
          text: "It names a person who speaks, so quote marks must wrap whatever follows his name, whatever the wording is."
        },
        {
          text: "It contains the verb told, and that verb is a signal that quote marks must appear somewhere in the same line of text."
        },
        {
          text: "It is a short statement, so quote marks can never be used in it unless the line turns into a question."
        }
      ],
      clue: "Decide whether line 8 gives a person's own words or only sums up what that person said, and think about what quote marks are for.",
      hints: [
        "Decide whether line 8 gives a person's own words or only sums up what that person said, and think about what quote marks are for.",
        "Compare sentence 8 with sentence 5 and notice which of the two repeats the speaker's actual words.",
        "Speech marks can surround statements as well as questions, so one reply makes a false claim about statements."
      ],
      how: [
        "Read sentence 8: Mr. Hale told her that he would check the lost box.",
        "The writer sums up his plan without his actual words, so nothing here is marked as speech.",
        "The answer is \"It reports his plan in the author's wording, so quote marks do not belong, since they mark only word-for-word speech.\""
      ],
      misconception: "A common mix-up is marking every line that names a speaker. Only word-for-word speech goes between quotation marks.",
      why: "The answer is \"It reports his plan in the author's wording, so quote marks do not belong, since they mark only word-for-word speech.\" Sentence 8 sums up what Mr. Hale said in the writer's words. In sentence 5, his actual words sit between quotation marks.",
      like: ["SK-GUM4-4-C03"]
    },
    {
      id: "SK-GUM4-4-S04",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: ["p4"],
      prompt: "Which way of writing Ellie's reply in sentence 6 is correct?",
      text: "Ellie answered, {0}",
      slots: [
        {
          options: [
            "\"It has a white stripe.\"",
            "\"it has a white stripe.\"",
            "\"It has a white stripe\".",
            "\"It has a white stripe,\""
          ],
          answer: 0
        }
      ],
      clue: "Look at the beginning and the ending of each choice. Ask which one follows the rules for a reply.",
      hints: [
        "Look at the beginning and the ending of each choice. Ask which one follows the rules for a reply.",
        "Read the first letter after the opening quotation mark, then check where the period sits.",
        "A comma at the end of her reply would only suit a line where Ellie is named after her words."
      ],
      how: [
        "Ellie comes first, so a comma follows answered, and her reply goes in quotation marks.",
        "The first word of her reply starts with a capital letter, and the period stays inside the closing quotation marks.",
        "The answer is \"It has a white stripe.\" The other choices use a small i, put the period outside, or end with a comma."
      ],
      misconception: "A common mix-up is fixing only the end of the reply. Check the first letter after the opening quotation mark, too.",
      why: "The answer is \"It has a white stripe.\". The first word of Ellie's reply needs a capital I, and the period stays inside the closing quotation marks. The other choices use a small letter, move the period, or end with a comma.",
      like: ["SK-GUM4-4-C04"]
    },
    {
      id: "SK-GUM4-4-S05",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: ["p4"],
      prompt: "Study sentences 2, 5, 7, 8 and 9. Which ONE has a punctuation error?",
      targets: ["p4:1:2","p4:2:1","p4:2:3","p4:3:1","p4:3:2"],
      answer: ["p4:2:3"],
      pick: 1,
      clue: "Take the shown sentences in order. Find the spoken words in each and test what surrounds them.",
      hints: [
        "Take the shown sentences in order. Find the spoken words in each and test what surrounds them.",
        "Check the capital letters, the commas and the marks that close each set of spoken words.",
        "Sentence 9 keeps its exclamation point inside the quotation marks, so it is already correct."
      ],
      how: [
        "Check each shown sentence for the spoken words and the marks around them.",
        "Sentences 2, 5 and 9 have the right capital letters, commas and end marks, and sentence 8 only retells what Mr. Hale said.",
        "Sentence 7 has no comma after gym, so it is the answer."
      ],
      misconception: "A common mix-up is picking sentence 8 because nothing there is in quotation marks. It only retells, so it needs none.",
      why: "The answer is sentence 7: \"\"I saw one like that near the gym\" said Mr. Hale.\" Sentence 7 needs a comma after gym, inside the closing quotation marks. The other shown sentences are punctuated correctly.",
      like: ["SK-GUM4-4-C05"]
    },
    {
      id: "SK-GUM4-4-S06",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: ["p4"],
      prompt: "Start with Part A, and finish with Part B.",
      partA: {
        prompt: "Line 3 of the school story lacks a mark. Which version puts it right?",
        choices: [
          {
            text: "The bus driver said, \"Look under your seat.\"",
            correct: true
          },
          {
            text: "The bus driver said, \"look under your seat.\""
          },
          {
            text: "The bus driver said, \"Look under your seat\"."
          },
          {
            text: "The bus driver said, Look under your seat."
          }
        ]
      },
      partB: {
        prompt: "Which reason supports the repaired version?",
        choices: [
          {
            text: "Someone is named first and talking follows, so a comma goes between name and talking.",
            correct: true
          },
          {
            text: "Nothing separates them, since quote marks alone do that job for any reader who looks at this page today."
          },
          {
            text: "A period must stand between them, since the speaker's name is a whole sentence by itself right here today."
          },
          {
            text: "A dash must stand between them, since a dash shows that someone is speaking to another person nearby."
          }
        ]
      },
      clue: "For Part A, compare what each revision places after said and around the spoken words. For Part B, pick the reason that fits that change.",
      hints: [
        "For Part A, compare what each revision places after said and around the spoken words. For Part B, pick the reason that fits that change.",
        "For Part B, think about what divides the speaker's name from the words that the speaker says.",
        "One revision removes the quotation marks, and spoken words need them, so that revision cannot be the repair."
      ],
      how: [
        "Part A: the speaker comes first, so a comma is needed right after said. The answer is \"The bus driver said, \"Look under your seat.\"\"",
        "The other revisions use a small letter, move the period outside, or drop the quotation marks.",
        "Part B: the reason is \"Someone is named first and talking follows, so a comma goes between name and talking.\""
      ],
      misconception: "A common mix-up is changing a capital letter or an end mark when a comma is missing. Look at what comes right after said.",
      why: "Part A: \"The bus driver said, \"Look under your seat.\"\" Part B: \"Someone is named first and talking follows, so a comma goes between name and talking.\" Part A needs a comma after said, because the speaker comes first. Part B: the comma separates the speaker's name from the spoken words.",
      like: ["SK-GUM4-4-C06"]
    },
    {
      id: "SK-GUM4-4-S07",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: ["p5"],
      prompt: "Which rewrite of my question in line 8 repairs the writer's slip?",
      text: "{0} I asked.",
      slots: [
        {
          options: [
            "\"May we toss the ducks some crackers?\"",
            "\"May we toss the ducks some crackers?,\"",
            "\"May we toss the ducks some crackers\",",
            "\"May we toss the ducks some crackers\"?"
          ],
          answer: 0
        }
      ],
      clue: "Look at how the question ends. Ask what may follow that ending before the words I asked.",
      hints: [
        "Look at how the question ends. Ask what may follow that ending before the words I asked.",
        "Think about the job a question mark already does when it closes a spoken question.",
        "The question mark belongs to the words that are asked, so it cannot sit outside the closing quotation marks."
      ],
      how: [
        "The spoken words are a question, and the speaker comes last.",
        "A question mark already ends the spoken words, so no comma is added after it.",
        "The answer is \"May we toss the ducks some crackers?\" The other choices keep the extra comma, move the mark outside, or lose the question mark."
      ],
      misconception: "A common mix-up is adding a comma after every set of spoken words that comes before the speaker. A question mark takes its place.",
      why: "The answer is \"May we toss the ducks some crackers?\". The question mark stays inside the closing quotation marks, and no comma follows it. The other choices keep an extra comma, move the mark, or lose it.",
      like: ["SK-GUM4-4-C07"]
    },
    {
      id: "SK-GUM4-4-S08",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: ["p5"],
      prompt: "Which ONE of sentences 2, 4, 6, 7 and 9 puts a punctuation mark beyond the final quote mark when it should come before it?",
      targets: ["p5:1:2","p5:1:4","p5:2:2","p5:2:3","p5:3:2"],
      answer: ["p5:2:3"],
      pick: 1,
      clue: "Locate the spoken words in each shown sentence. Then locate the quotation marks that end them.",
      hints: [
        "Locate the spoken words in each shown sentence. Then locate the quotation marks that end them.",
        "In each shown sentence, notice what stands right before and right after the closing quotation marks.",
        "Sentence 6 has its comma inside the closing quotation marks, so it is already fine."
      ],
      how: [
        "Find the closing quotation marks in each shown sentence and see which marks sit next to them.",
        "Sentences 2 and 6 have the exclamation point and the comma inside, and sentences 4 and 9 have no mark outside.",
        "In sentence 7, the exclamation point comes after the closing quotation marks, so it is the answer."
      ],
      misconception: "A common mix-up is picking a sentence that only lacks a comma. Here, look for a mark placed outside the closing quotation marks.",
      why: "The answer is sentence 7: \"Nina giggled, \"That duck looks silly\"!\" The exclamation point in sentence 7 is outside the closing quotation marks, but it belongs inside them. In the other shown sentences no mark sits outside them.",
      like: ["SK-GUM4-4-C08"]
    },
    {
      id: "SK-GUM4-4-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: ["p5"],
      prompt: "One reader says that line 9 reads fine with nothing following crackers. What reply is strongest?",
      choices: [
        {
          text: "Her remark finishes plainly and Mom is named afterward, so a comma belongs just behind crackers, before the last quote mark.",
          correct: true
        },
        {
          text: "Nothing more is called for, since naming Mom tells readers whom to hear, and extra punctuation would only repeat it all over again."
        },
        {
          text: "A period belongs right behind crackers, since this remark is a complete thought, and complete thoughts finish with one."
        },
        {
          text: "A comma belongs beyond the last quote mark, since commas are never part of whatever someone says aloud."
        }
      ],
      clue: "Ask what has to divide the spoken words from the speaker's name when the name comes last.",
      hints: [
        "Ask what has to divide the spoken words from the speaker's name when the name comes last.",
        "Look at the way the spoken words end. Is a question mark or an exclamation point there?",
        "Mom said shows the speaker, but naming a speaker does not take the place of a mark at the end of the words."
      ],
      how: [
        "Find the spoken words in sentence 9: Ducks should eat seeds, not crackers.",
        "The speaker comes last, and the words do not end with a question mark or an exclamation point.",
        "The answer is \"Her remark finishes plainly and Mom is named afterward, so a comma belongs just behind crackers, before the last quote mark.\""
      ],
      misconception: "A common mix-up is believing the speaker's name is enough to end the spoken words. A mark must still come after the words.",
      why: "The answer is \"Her remark finishes plainly and Mom is named afterward, so a comma belongs just behind crackers, before the last quote mark.\" The spoken words end with no question mark or exclamation point, so a comma goes right after crackers, inside the closing quotation marks, before Mom. A period would end the sentence too early, and a comma outside the quotation marks is misplaced.",
      like: ["SK-GUM4-4-C09"]
    },
    {
      id: "SK-GUM4-4-S10",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: [],
      prompt: "In music class, which TWO lines have every mark around the speech right?",
      pick: 2,
      choices: [
        {
          text: "\"Tap your drum twice,\" said Ms. Vega.",
          correct: true
        },
        {
          text: "Cal asked, \"May I play the flute?\"",
          correct: true
        },
        {
          text: "Mina cheered \"That song was great!\""
        },
        {
          text: "\"Who plays next?,\" asked Mr. Ito."
        },
        {
          text: "\"We practiced all week\", said Bea."
        }
      ],
      clue: "Go through each line and find the speech. Then look at the marks next to it one by one.",
      hints: [
        "Go through each line and find the speech. Then look at the marks next to it one by one.",
        "Keep the lines in which the quotation marks, the commas and the closing marks all follow the rules.",
        "A comma does not come after a question mark that sits inside the quotation marks, so one line is wrong."
      ],
      how: [
        "Look at the marks around the speech in each line.",
        "In \"Tap your drum twice,\" said Ms. Vega. the comma stays inside the closing quotation marks. In Cal asked, \"May I play the flute?\" the comma follows asked and the question mark stays inside.",
        "The other lines leave out a comma, add a comma after a question mark, or put a comma outside the quotation marks."
      ],
      misconception: "A common mix-up is choosing a line because it has quotation marks. Check the comma and the closing mark, too.",
      why: "The answers are \"\"Tap your drum twice,\" said Ms. Vega.\" and \"Cal asked, \"May I play the flute?\"\". Ms. Vega's line keeps its comma inside the closing quotation marks, and Cal's line has a comma after asked with the question mark inside. Every other line has a misplaced or missing mark.",
      like: ["SK-GUM4-4-C10"]
    },
    {
      id: "SK-GUM4-4-S11",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: [],
      stem: "Two lines from a field trip story. Line 1: Mia shouted, \"Wait for me!\" Line 2: \"Wait for me!\" shouted Mia.",
      prompt: "What do the two lines share, and what sets them apart?",
      choices: [
        {
          text: "Each line leaves its exclamation point snug against the final quote mark, though only Line 1 needs a comma after the verb.",
          correct: true
        },
        {
          text: "Each line puts a comma after Mia's name, though only Line 2 keeps its exclamation point within the final quote mark in this pair."
        },
        {
          text: "Each line closes with a period after her name, though only Line 1 wraps the shout in quote marks around it."
        },
        {
          text: "Neither line wants a comma, since each shout ends with an exclamation point, so punctuation matches throughout."
        }
      ],
      clue: "See where Mia's name stands in each line. Then compare the marks that stand near the quote marks.",
      hints: [
        "See where Mia's name stands in each line. Then compare the marks that stand near the quote marks.",
        "Find the comma in each line, if there is one, and find the exclamation point in each line.",
        "Line 1 finishes on the mark that shows the shout, so a choice saying each line closes with a period after the name cannot be right."
      ],
      how: [
        "In Line 1, Mia comes first, so a comma follows shouted.",
        "In Line 2, Mia comes last, so no comma follows the exclamation point.",
        "The answer is \"Each line leaves its exclamation point snug against the final quote mark, though only Line 1 needs a comma after the verb.\""
      ],
      misconception: "A common mix-up is believing both lines need the same marks. Where the speaker stands changes the comma.",
      why: "The answer is \"Each line leaves its exclamation point snug against the final quote mark, though only Line 1 needs a comma after the verb.\" In both lines the exclamation point stays inside the closing quotation marks. Line 1 has a comma after shouted because Mia comes first, and Line 2 needs none because the exclamation point already ends the words.",
      like: ["SK-GUM4-4-C11"]
    },
    {
      id: "SK-GUM4-4-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: ["p6"],
      prompt: "Which closing marks fix the last part of line 9, where Grandma praises the cookies?",
      text: "Grandma said, \"These smell wonderful{0}",
      slots: [
        {
          options: [".\"","\".","\",","\""],
          answer: 0
        }
      ],
      clue: "Notice how her remark ends and where the closing quotation marks stand.",
      hints: [
        "Notice how her remark ends and where the closing quotation marks stand.",
        "Grandma is named first, and the remark she makes is a statement.",
        "A comma would only be right if Grandma were named after the spoken remark."
      ],
      how: [
        "Grandma comes first, and her remark is a statement.",
        "A statement that closes the whole line takes a period, and the period stays inside the closing quotation marks.",
        "The answer is .\" The other choices put the period outside, use a comma, or leave off the end mark."
      ],
      misconception: "A common mix-up is placing the period after the closing quotation marks because it also finishes the line. It belongs inside them.",
      why: "The answer is .\". The period closes Grandma's remark, so it stays inside the closing quotation marks. A comma would only be used if Grandma were named after her words.",
      like: ["SK-GUM4-4-C12"]
    },
    {
      id: "SK-GUM4-4-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: ["p6"],
      prompt: "Pick the TWO versions that repair line 3 of the baking story.",
      pick: 2,
      choices: [
        {
          text: "I asked, \"How many cups of brown sugar go into the batter?\"",
          correct: true
        },
        {
          text: "\"How many cups of brown sugar go into the batter?\" I asked.",
          correct: true
        },
        {
          text: "I asked \"How many cups of brown sugar go into the batter\"?"
        },
        {
          text: "\"How many cups of brown sugar go into the batter?,\" I asked."
        },
        {
          text: "I asked, \"how many cups of brown sugar go into the batter?\""
        }
      ],
      clue: "The speaker may stand first or last. Check each version for marks that suit where the speaker stands.",
      hints: [
        "The speaker may stand first or last. Check each version for marks that suit where the speaker stands.",
        "Keep the versions in which capital letters, commas and question marks all follow the rules.",
        "A question mark and a comma never sit side by side inside the quotation marks, so one version is not a repair."
      ],
      how: [
        "The draft lacks a comma after asked.",
        "A repair can add the comma, or it can move the speaker to the end, where the question mark does the work of the comma.",
        "The answers are \"I asked, \"How many cups of brown sugar go into the batter?\"\" and \"\"How many cups of brown sugar go into the batter?\" I asked.\" The others put the mark outside, add a comma after the question mark, or use a small h."
      ],
      misconception: "A common mix-up is thinking the speaker has to stay first. Moving the speaker to the end repairs it, too.",
      why: "The answers are \"I asked, \"How many cups of brown sugar go into the batter?\"\" and \"\"How many cups of brown sugar go into the batter?\" I asked.\" I asked, \"How many cups of brown sugar go into the batter?\" adds the missing comma, and \"How many cups of brown sugar go into the batter?\" I asked. moves the speaker last with the question mark inside. The other versions misplace a mark or use a small letter.",
      like: ["SK-GUM4-4-C13"]
    },
    {
      id: "SK-GUM4-4-S14",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: [],
      prompt: "Select the winter-story line whose quote marks and end mark are placed properly.",
      choices: [
        {
          text: "\"What a giant snowdrift!\" cried Pablo.",
          correct: true
        },
        {
          text: "\"What a giant snowdrift,\" cried Pablo!"
        },
        {
          text: "\"What a giant snowdrift!,\" cried Pablo."
        },
        {
          text: "\"What a giant snowdrift\"! cried Pablo."
        }
      ],
      clue: "Find the shout, the exclamation point and the speaker in each choice. Ask where each mark belongs.",
      hints: [
        "Find the shout, the exclamation point and the speaker in each choice. Ask where each mark belongs.",
        "The shout belongs to the words that Pablo cries, so check which side of the closing quotation marks it is on.",
        "An exclamation point that belongs to the spoken words cannot sit outside the closing quotation marks."
      ],
      how: [
        "Pablo cries the words, so the exclamation point is part of what he says.",
        "An exclamation point that ends spoken words stays inside the closing quotation marks, and no comma follows it.",
        "The answer is \"What a giant snowdrift!\" cried Pablo. The others move the mark outside, use a comma where the exclamation point belongs, or add a comma after it."
      ],
      misconception: "A common mix-up is putting the exclamation point at the end of the whole line. It belongs to Pablo's words, so it goes inside.",
      why: "The answer is \"\"What a giant snowdrift!\" cried Pablo.\" The exclamation point belongs to Pablo's spoken words, so it stays inside the closing quotation marks with no comma after it. Each other choice misplaces a mark.",
      like: ["SK-GUM4-4-C14"]
    },
    {
      id: "SK-GUM4-4-S15",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:C:use-conventional-capitalization-quotation-marks-"
      ],
      passages: [],
      prompt: "Fill both blanks of the practice scene so each speech is punctuated properly.",
      text: "Coach Dunn announced, {0} Kira replied, {1}",
      slots: [
        {
          options: [
            "\"Practice starts now!\"",
            "\"practice starts now!\"",
            "\"Practice starts now\"!",
            "\"Practice starts now!\","
          ],
          answer: 0
        },
        {
          options: [
            "\"Give me one minute.\"",
            "\"give me one minute.\"",
            "\"Give me one minute\".",
            "\"Give me one minute,\""
          ],
          answer: 0
        }
      ],
      clue: "Read each blank as the words a person says out loud. Then check the capital letter and the closing mark in each choice.",
      hints: [
        "Read each blank as the words a person says out loud. Then check the capital letter and the closing mark in each choice.",
        "In the first blank, look at how loudly the coach speaks. In the second blank, look at how calmly Kira replies.",
        "A comma after the closing quotation marks does not fit here, since Coach Dunn is named first."
      ],
      how: [
        "Each speaker is named first, so a comma follows announced and replied.",
        "Each blank holds the exact words a person says, so each needs a capital letter and a closing mark inside the quotation marks.",
        "The answers are \"Practice starts now!\" and \"Give me one minute.\" The others use a small letter, put a mark outside, or add a comma after the closing mark."
      ],
      misconception: "A common mix-up is repairing only one of the two quotations. Check the capital letter and the closing mark in both.",
      why: "The answers are \"Practice starts now!\" and \"Give me one minute.\". Each quotation starts with a capital letter and keeps its closing mark inside the quotation marks. The others use a small letter or misplace a mark.",
      like: ["SK-GUM4-4-C15"]
    }
  ],
  addons: {
    "SK-GUM4-4-P1": {
      hints: [
        "Check each choice for the comma, the capital letter and the end mark, one at a time.",
        "Look at what comes right after the speaker's name and at the last mark in each choice.",
        "A period outside the closing quotation marks is never part of the spoken words."
      ],
      how: [
        "Check three things: a comma after said, a capital letter, and the period.",
        "The correct sentence has all three. Each other choice leaves one of them out.",
        "The answer is Nadia said, \"My kitten is asleep.\""
      ],
      misconception: "A common mix-up is picking the choice with the most marks. Check where each mark belongs."
    },
    "SK-GUM4-4-P2": {
      hints: [
        "Think about what Jamal is doing with the words, and look at how each choice ends.",
        "Look at the mark that ends the question and decide which side of the quotation marks it belongs on.",
        "A choice with a comma after the question mark is not needed, because Jamal comes last and the question mark already ends the words."
      ],
      how: [
        "Jamal asks a question, so the question mark is part of his spoken words.",
        "The question mark stays inside the closing quotation marks, and no comma follows it.",
        "The answer is \"Is it cold outside?\""
      ],
      misconception: "A common mix-up is adding a comma after the question mark. The question mark already does that job."
    },
    "SK-GUM4-4-P3": {
      hints: [
        "Check each sentence for quotation marks, a capital letter and the marks near the closing quotation marks.",
        "Keep the sentences in which the comma sits where the speaker comes first or last.",
        "Ruby asked a question, and a small letter starts her spoken words, so that sentence is not one of the two."
      ],
      how: [
        "Check the comma, the capital letter and the end mark in each sentence.",
        "The correct sentences are \"Let's plant the seeds today,\" said Aunt May. and Carlos whispered, \"The baby is asleep.\" Aunt May's comma sits inside the closing quotation marks, and Carlos's comma follows whispered.",
        "The other sentences leave out a comma, use a small letter, or put a comma outside the quotation marks."
      ],
      misconception: "A common mix-up is picking a sentence just because it has quotation marks. Check the comma and the capital letter, too."
    },
    "SK-GUM4-4-P4": {
      hints: [
        "Look for the choice with quotation marks at both ends of the spoken words.",
        "Ella comes last, so look at the mark between the spoken words and her name.",
        "A choice with only one quotation mark is not complete, since spoken words need marks at both ends."
      ],
      how: [
        "The speaker comes last, so a comma ends the spoken words.",
        "The comma goes inside the closing quotation marks.",
        "The answer is \"I found a shiny rock,\" Ella said."
      ],
      misconception: "A common mix-up is putting the comma after the closing quotation marks. It belongs inside them."
    },
    "SK-GUM4-4-P5": {
      hints: [
        "For each sentence, find the spoken words and ask what is missing from them.",
        "Check three things in each sentence: a comma, a capital letter and quotation marks.",
        "Grandma's sentence has a comma and a capital letter, so ask what else the spoken words need."
      ],
      how: [
        "Check each sentence for a comma after said or asked, a capital letter and quotation marks.",
        "Ben's and Mom's sentences need a comma, and Ava's and Dev's sentences need a capital letter.",
        "Grandma's sentence needs quotation marks around Supper is ready."
      ],
      misconception: "A common mix-up is fixing the first thing you notice. Check all three: comma, capital letter and quotation marks."
    }
  },
  /* B8a:core:end */
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
      "Use where for a place or when for a time only if the words after it make a whole sentence when you add there or then: This is the park where we fly kites. (We fly kites there.) If they do not, use that or which, just as for a thing: The park that has a slide is near us. (\"Has a slide there\" is not a whole sentence, because it does not say who or what has a slide.)",
      "Who is only for people. A bus, a park or a day is not a person, so write the bus that stops here, not the bus who stops here.",
      "Where and when never go with a person. Say the coach who cheers for us, not the coach where cheers for us."
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
    },
    {
      show: ["Mr. Diaz is the driver ___ takes us home."],
      ask: "Which word fits: who, where or when?",
      steps: [
        "Look at the noun right before the blank: driver. A driver is a person.",
        "Where is for places and when is for times, and a driver is neither.",
        "Use the word for a person."
      ],
      answer: "Who: Mr. Diaz is the driver who takes us home."
    }
  ],
  parent: "Play a riddle game: \"I am thinking of a person who ...\", \"I am thinking of a thing that ...\" or \"I am thinking of a place where ...\" Take turns finishing the clue and guessing.",
  passages: [
    /* B8a:passages:start */
    {
      id: "p1",
      title: "A Day at the Science Museum",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class rode a yellow bus to the science museum last Friday.",
          "(2) Our guide was a woman which knew everything about space.",
          "(3) She showed us a model of a rocket that is taller than a bus.",
          "(4) Next, we walked into the room who has the moon rocks."
        ],
        [
          "(5) Maya is a girl where loves planets, so she took many pictures.",
          "(6) We ate lunch in the hall where the dinosaur skeleton stands.",
          "(7) Spring is the season when many classes visit the museum."
        ],
        [
          "(8) I liked the gift shop when I bought a tiny telescope.",
          "(9) My friend who sat beside me on the bus fell asleep on the way home.",
          "(10) It was a trip that I will never forget, and I hope we go again soon."
        ]
      ]
    },
    {
      id: "p2",
      title: "Grandpa's Farm",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) In July, my cousins and I stay at the farm where our grandpa grew up.",
          "(2) Grandpa has a tractor who stopped working last week.",
          "(3) My cousin Rosa is a girl where helps with the cows.",
          "(4) The barn that holds the hay is bright red."
        ],
        [
          "(5) Morning is the time when we collect the eggs from the hens.",
          "(6) We found a kitten when was hiding behind a bucket.",
          "(7) Grandma is the cook who makes pancakes for everyone."
        ],
        [
          "(8) Her kitchen is the place where we all gather for breakfast.",
          "(9) After lunch, we swim at the creek that has cold, clear water.",
          "(10) I wish our summer on the farm could last all year long."
        ]
      ]
    },
    {
      id: "p3",
      title: "A Soccer Saturday",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Saturday, our team played at the field where the big oak tree grows.",
          "(2) Coach Ruiz is a woman which cheers for every player.",
          "(3) She gave us a plan that helped us pass the ball.",
          "(4) Marco is the player when scored the first goal."
        ],
        [
          "(5) The ball that he kicked bounced off the post and rolled in.",
          "(6) Halftime is the moment when we drink water and rest.",
          "(7) We cheered for the goalie who stopped three shots."
        ],
        [
          "(8) The bench where holds our bags is near the fence.",
          "(9) We won the game, and the whole town felt proud of us.",
          "(10) Later, we ate pizza at the shop where Dad works."
        ]
      ]
    },
    {
      id: "p4",
      title: "A Visit to the Bakery",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Tuesday, our scout troop toured the bakery on Pine Street.",
          "(2) At the bakery on Pine Street, the baker was a man which wore a tall white hat and a flour-dusted apron.",
          "(3) He showed us an oven that is as big as a closet.",
          "(4) Then we sat at a table who was covered in flour."
        ],
        [
          "(5) Tom, a boy where likes bread, asked questions all day.",
          "(6) We watched the room where dough is rolled and cut by hand.",
          "(7) Early morning is the time when sleepy bakers start kneading dough."
        ],
        [
          "(8) I smelled the shelf when warm rolls were stacked in rows.",
          "(9) My sister who came along ate two cinnamon buns before noon.",
          "(10) It was a visit that made us all hungry, and we bought a loaf to share."
        ]
      ]
    },
    {
      id: "p5",
      title: "Camping by the River",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last July, my uncle drove us to a rocky camp beside the river where he fished as a boy.",
          "(2) My uncle packed a green canvas tent who fits six sleeping bags and a lantern.",
          "(3) Nell is a quiet camper where knows every bird song in the forest.",
          "(4) A trail that leads to cold water is lined with tall pines."
        ],
        [
          "(5) Night is the time when thousands of stars fill our dark sky.",
          "(6) We spotted a deer when was drinking from the shallow edge.",
          "(7) Uncle Ben is a chef who stirs spicy campfire stew."
        ],
        [
          "(8) His cooking pot is the one that holds enough stew for ten.",
          "(9) In the morning, we skip stones on the pond that shines like glass.",
          "(10) I hope we can camp by the river again before the cold weather comes."
        ]
      ]
    },
    {
      id: "p6",
      title: "Moving Day",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) In March, my family moved into the house where my aunt used to live.",
          "(2) We hired a mover which carried our heavy couch up the stairs.",
          "(3) He drove a truck that was long enough to hold our whole living room.",
          "(4) My little brother is a boy where cried when we packed his shiny red bike into the long truck."
        ],
        [
          "(5) Evening is the hour when the new street grows quiet.",
          "(6) We found a tiny, shivering puppy when was sleeping on my front porch.",
          "(7) Our neighbor is a woman who gave us warm muffins."
        ],
        [
          "(8) My room is the space where I keep my books and paints.",
          "(9) I hung a shelf that holds my shells from the beach.",
          "(10) Our new home already feels cozy, and I am glad we came here."
        ]
      ]
    }
    /* B8a:passages:end */
  ],
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
            ref: "SK-GUM4-5-P3"
          },
          {
            ref: "SK-GUM4-5-P5"
          },
          {
            id: "SK-GUM4-5-C03",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: ["p1"],
            prompt: "A classmate says sentence 4 should use where, because a room is a place. What is the best response?",
            choices: [
              {
                text: "Where does not fit, because the words after it are not a whole sentence when there is added, so the word should be that.",
                correct: true
              },
              {
                text: "Where fits, because a room is a place, and where is the right word after every place that you can name in a sentence or story."
              },
              {
                text: "Who fits, because the room is full of moon rocks, and who tells more about anything that holds many things at once."
              },
              {
                text: "When fits, because the class walked into the room at a certain time, and when is used for any moment in a day."
              }
            ],
            clue: "Try the there test on what follows the blank, and think about what kind of noun comes before it.",
            hints: [
              "Try the there test on what follows the blank, and think about what kind of noun comes before it.",
              "Read what follows the blank by itself and ask what is missing from it.",
              "Rooms are not people, so a choice about people cannot be right."
            ],
            how: [
              "Read sentence 4: Next, we walked into the room who has the moon rocks.",
              "Add there to the words after the blank: has the moon rocks there. That is not a whole sentence, because it does not say what has the moon rocks.",
              "A room is a thing, so the word should be that. The answer is \"Where does not fit, because the words after it are not a whole sentence when there is added, so the word should be that.\""
            ],
            misconception: "A common mix-up is using where after every place word. Where needs words after it that make a whole sentence.",
            why: "The answer is \"Where does not fit, because the words after it are not a whole sentence when there is added, so the word should be that.\" Has the moon rocks there is not a whole sentence, so where does not fit, and a room is not a person or a time. The sentence needs that."
          },
          {
            id: "SK-GUM4-5-C04",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: ["p1"],
            prompt: "Choose the word that fixes sentence 2.",
            text: "Our guide was a woman {0} knew everything about space.",
            slots: [
              {
                options: ["which","who","where","when"],
                answer: 1
              }
            ],
            clue: "Look at the noun right before the blank and ask what kind of noun it is.",
            hints: [
              "Look at the noun right before the blank and ask what kind of noun it is.",
              "Read the sentence with each word in the blank, and listen for the one that suits the noun.",
              "Where is for places, and a woman is not a place."
            ],
            how: [
              "Find the noun right before the blank: woman. A woman is a person.",
              "Use who to tell more about a person.",
              "The answer is who. Which is for things, where is for places, and when is for times."
            ],
            misconception: "A common mix-up is choosing which because it sounds fancy. For a person, use who.",
            why: "The answer is who. A woman is a person, so who fits. Which is for things, where is for places, and when is for times."
          },
          {
            id: "SK-GUM4-5-C05",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: ["p1"],
            prompt: "From sentences 3, 6, 7, 8 and 9, select the ONE that uses who, that, where or when incorrectly.",
            targets: ["p1:1:3","p1:2:2","p1:2:3","p1:3:1","p1:3:2"],
            answer: ["p1:3:1"],
            pick: 1,
            clue: "Find the tell-more word in each shown sentence. Then find the noun right before it.",
            hints: [
              "Find the tell-more word in each shown sentence. Then find the noun right before it.",
              "For each noun, ask whether it is a person, a thing, a place or a time. Test where and when with there or then.",
              "Sentence 9 tells more about a person, and who is the word for a person, so it is correct."
            ],
            how: [
              "Find the tell-more word and the noun before it in each shown sentence.",
              "In sentence 3, that goes with a rocket. In sentence 6, where goes with a hall. In sentence 7, when goes with a season. In sentence 9, who goes with a friend.",
              "In sentence 8, when goes with a gift shop, but a gift shop is a place, so the sentence needs where."
            ],
            misconception: "A common mix-up is picking the sentence with the longest tell-more part. Check the noun before the word.",
            why: "The answer is sentence 8: \"I liked the gift shop when I bought a tiny telescope.\" A gift shop is a place, and I bought a tiny telescope there is a whole sentence, so the sentence needs where. In the other shown sentences each word matches its noun."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM4-5-C06",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: ["p1"],
            prompt: "This item has two parts. Begin with Part A and then go on to Part B.",
            partA: {
              prompt: "Sentence 5 has a mistake. Which revision fixes it?",
              choices: [
                {
                  text: "Maya is a girl who loves planets, so she took many pictures.",
                  correct: true
                },
                {
                  text: "Maya is a girl which loves planets, so she took many pictures."
                },
                {
                  text: "Maya is a girl when loves planets, so she took many pictures."
                },
                {
                  text: "Maya is a girl where she loves planets, so she took many pictures."
                }
              ]
            },
            partB: {
              prompt: "Which fact explains why the correct revision is right?",
              choices: [
                {
                  text: "Girl names a person, and who is the word that tells more about a person.",
                  correct: true
                },
                {
                  text: "Planets names a thing, and who is the word that tells more about a thing."
                },
                {
                  text: "Girl names a place, and where is the word that tells more about a place."
                },
                {
                  text: "Pictures names a time, and when is the word that tells more about a time."
                }
              ]
            },
            clue: "For Part A, look at the noun right before the wrong word in each choice. For Part B, look for the fact about that noun.",
            hints: [
              "For Part A, look at the noun right before the wrong word in each choice. For Part B, look for the fact about that noun.",
              "For Part B, think about what kind of noun girl is and which word goes with that kind.",
              "The draft already has where after the noun, so a choice that keeps where with a new ending is not the fix."
            ],
            how: [
              "Part A: find the noun before the wrong word: girl. A girl is a person, so the answer is \"Maya is a girl who loves planets, so she took many pictures.\"",
              "The other choices use which for a person, when for a time, or keep where.",
              "Part B: the fact is \"Girl names a person, and who is the word that tells more about a person.\""
            ],
            misconception: "A common mix-up is changing only the words after the blank. Check the noun before it: Maya is a girl, which is a person.",
            why: "Part A: \"Maya is a girl who loves planets, so she took many pictures.\" Part B: \"Girl names a person, and who is the word that tells more about a person.\" Part A: a girl is a person, so the sentence needs who. Part B: who tells more about a person."
          },
          {
            id: "SK-GUM4-5-C07",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: ["p2"],
            prompt: "Pick the word that repairs sentence 2.",
            text: "Grandpa has a tractor {0} stopped working last week.",
            slots: [
              {
                options: ["who","that","when","whose"],
                answer: 1
              }
            ],
            clue: "Find the noun right before the blank and ask what kind of noun it is.",
            hints: [
              "Find the noun right before the blank and ask what kind of noun it is.",
              "A tractor is a machine. Ask whether it is a person, a place, a time, or something else.",
              "Who is for people, and a tractor is not a person."
            ],
            how: [
              "Find the noun right before the blank: tractor. A tractor is a thing.",
              "Use that to tell more about a thing.",
              "The answer is that. Who is for people, when is for times, and whose shows who owns something."
            ],
            misconception: "A common mix-up is choosing who because Grandpa is a person. Check the noun right before the blank.",
            why: "The answer is that. A tractor is a thing, so that fits. Who is for people, when is for times, and whose shows who owns something."
          },
          {
            id: "SK-GUM4-5-C08",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: ["p2"],
            prompt: "Look at sentences 1, 3, 4, 5 and 7. Select the ONE that has the wrong word to tell more about its noun.",
            targets: ["p2:1:1","p2:1:3","p2:1:4","p2:2:1","p2:2:3"],
            answer: ["p2:1:3"],
            pick: 1,
            clue: "Find the word that starts the tell-more part in each shown sentence. Then find the noun before it.",
            hints: [
              "Find the word that starts the tell-more part in each shown sentence. Then find the noun before it.",
              "For a place or a time, try the there or then test on the words after the word.",
              "The cook in sentence 7 is a person, and who is for people, so that sentence is correct."
            ],
            how: [
              "Find the tell-more word and the noun before it in each shown sentence.",
              "Sentence 1 uses where for a farm, sentence 4 uses that for a barn, sentence 5 uses when for a time, and sentence 7 uses who for a cook.",
              "In sentence 3, where goes with a girl, but a girl is a person, so the sentence needs who."
            ],
            misconception: "A common mix-up is thinking where works after any noun. Where is for places, and Rosa is a girl.",
            why: "The answer is sentence 3: \"My cousin Rosa is a girl where helps with the cows.\" Rosa is a girl, which is a person, so the sentence needs who. In the other shown sentences each word matches its noun."
          },
          {
            id: "SK-GUM4-5-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: ["p2"],
            prompt: "A classmate says sentence 6 is correct, because the kitten was found at a certain time. Which response is best?",
            choices: [
              {
                text: "A kitten is an animal and not a time, and the words after the blank need a subject, so the word should be that.",
                correct: true
              },
              {
                text: "Time words like when can follow any noun, as long as the sentence tells about something that happened to us that day."
              },
              {
                text: "Where is needed instead, because the kitten was in one place, and where is used after any animal at all."
              },
              {
                text: "No change is needed, because when and that mean the same thing in a sentence about an animal or a pet."
              }
            ],
            clue: "Decide what kind of noun comes right before the wrong word.",
            hints: [
              "Decide what kind of noun comes right before the wrong word.",
              "Read what follows that word by itself and ask what is missing from it.",
              "A kitten was found, not a place, so a choice about places cannot be right."
            ],
            how: [
              "Read sentence 6: We found a kitten when was hiding behind a bucket.",
              "A kitten is an animal, not a time. The words after the blank are was hiding behind a bucket, and they have no subject of their own.",
              "The answer is \"A kitten is an animal and not a time, and the words after the blank need a subject, so the word should be that.\""
            ],
            misconception: "A common mix-up is trusting when because the sentence tells about something that happened. Check the noun right before it.",
            why: "The answer is \"A kitten is an animal and not a time, and the words after the blank need a subject, so the word should be that.\" A kitten is an animal, not a time, and was hiding behind a bucket has no subject, so the sentence needs that. Where would only fit if the words after it made a whole sentence."
          },
          {
            id: "SK-GUM4-5-C10",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: [],
            prompt: "Which TWO sentences use who, that, where or when correctly?",
            pick: 2,
            choices: [
              {
                text: "Mr. Chen is the coach who teaches us to swim.",
                correct: true
              },
              {
                text: "Dawn is the hour when the birds begin to sing.",
                correct: true
              },
              {
                text: "The meadow who is full of daisies is behind the school."
              },
              {
                text: "The cabin when we sleep is near the river."
              },
              {
                text: "My uncle where fixes boats lives by the dock."
              }
            ],
            clue: "For each sentence, find the noun right before the tell-more word and ask what kind of noun it is.",
            hints: [
              "For each sentence, find the noun right before the tell-more word and ask what kind of noun it is.",
              "Keep the sentences in which the tell-more word matches a person, a thing, a place or a time.",
              "A meadow is not a person, so one sentence has a word for people that does not fit."
            ],
            how: [
              "Find the noun before the tell-more word in each sentence.",
              "In \"Mr. Chen is the coach who teaches us to swim.\" who goes with a person. In \"Dawn is the hour when the birds begin to sing.\" when goes with a time.",
              "In the other sentences, who goes with a meadow, when goes with a cabin, and where goes with a person."
            ],
            misconception: "A common mix-up is picking a sentence because the tell-more word sounds familiar. Check the noun before it.",
            why: "The answers are \"Mr. Chen is the coach who teaches us to swim.\" and \"Dawn is the hour when the birds begin to sing.\" Who goes with the coach, who is a person, and when goes with the hour, which is a time. In the other sentences who is used for a meadow, when for a cabin, and where for a person."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM4-5-C11",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: [],
            stem: "Sentence A: The beach where we swim is warm. Sentence B: The beach that has a lifeguard is busy.",
            prompt: "How are the tell-more words in the two sentences alike and different?",
            choices: [
              {
                text: "Both tell more about a place, but where fits only when the words after it make a whole sentence with there.",
                correct: true
              },
              {
                text: "Both tell more about a person, but where fits only when the words after it name someone who lives there too."
              },
              {
                text: "Both tell more about a time, but that fits only when the words after it name a moment of the day or night."
              },
              {
                text: "Both tell more about a thing, but where and that mean the same thing in every sentence that you read."
              }
            ],
            clue: "Find the noun that each tell-more word describes. Then try the there test on what follows each word.",
            hints: [
              "Find the noun that each tell-more word describes. Then try the there test on what follows each word.",
              "Add there to what follows where in Sentence A and to what follows that in Sentence B, and see which one can stand alone as a sentence.",
              "The beach is not a person, so a choice about people cannot be right."
            ],
            how: [
              "Both sentences tell more about the beach, which is a place.",
              "In Sentence A, we swim there is a whole sentence, so where fits. In Sentence B, has a lifeguard there is not a whole sentence, so that is used.",
              "The answer is \"Both tell more about a place, but where fits only when the words after it make a whole sentence with there.\""
            ],
            misconception: "A common mix-up is thinking a place noun always takes where. The words after the word decide.",
            why: "The answer is \"Both tell more about a place, but where fits only when the words after it make a whole sentence with there.\" Both words tell more about the beach. We swim there is a whole sentence, so Sentence A uses where. Has a lifeguard there is not a whole sentence, so Sentence B uses that."
          },
          {
            id: "SK-GUM4-5-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: ["p3"],
            prompt: "Choose the word that corrects sentence 4.",
            text: "Marco is the player {0} scored the first goal.",
            slots: [
              {
                options: ["when","who","where","whose"],
                answer: 1
              }
            ],
            clue: "Look at the noun before the blank and decide what kind of noun it is.",
            hints: [
              "Look at the noun before the blank and decide what kind of noun it is.",
              "Read the sentence with each word in the blank, and listen for the one that suits the noun.",
              "Where is for places, and a player is not a place."
            ],
            how: [
              "Find the noun right before the blank: player. A player is a person.",
              "Use who to tell more about a person.",
              "The answer is who. When is for times, where is for places, and whose shows who owns something."
            ],
            misconception: "A common mix-up is choosing when because the goal happened at a time. Check the noun right before the blank.",
            why: "The answer is who. A player is a person, so who fits. When is for times, where is for places, and whose shows who owns something."
          },
          {
            id: "SK-GUM4-5-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: ["p3"],
            prompt: "Sentence 8 of the draft has a mistake. Choose the TWO revisions that fix it.",
            pick: 2,
            choices: [
              {
                text: "The bench that holds our bags is near the fence.",
                correct: true
              },
              {
                text: "The bench where our bags sit is near the fence.",
                correct: true
              },
              {
                text: "The bench who holds our bags is near the fence."
              },
              {
                text: "The bench when our bags sit is near the fence."
              },
              {
                text: "The bench where holds our bags is near the fence."
              }
            ],
            clue: "A fix can change the tell-more word or the words after it.",
            hints: [
              "A fix can change the tell-more word or the words after it.",
              "Keep the revisions in which the tell-more word and the words after it work together.",
              "Who is for people, and a bench is not a person."
            ],
            how: [
              "The draft pairs the bench with where, but holds our bags there is not a whole sentence.",
              "One fix uses that, which goes with a thing. The other fix changes the words after where so that our bags sit there is a whole sentence.",
              "The answers are \"The bench that holds our bags is near the fence.\" and \"The bench where our bags sit is near the fence.\" The others use who for a thing, use when for a place, or keep the draft."
            ],
            misconception: "A common mix-up is thinking only the tell-more word can change. The words after it can change, too.",
            why: "The answers are \"The bench that holds our bags is near the fence.\" and \"The bench where our bags sit is near the fence.\" That goes with a bench, which is a thing, and our bags sit there is a whole sentence, so where fits the second revision. The others use who for a thing, use when for a place, or keep the draft."
          },
          {
            id: "SK-GUM4-5-C14",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: [],
            prompt: "Which sentence uses the right word to tell more?",
            choices: [
              {
                text: "The town where we met Grandpa is small.",
                correct: true
              },
              {
                text: "The town when we met Grandpa is small today."
              },
              {
                text: "The town who we met Grandpa is small."
              },
              {
                text: "The town that we met Grandpa is small."
              }
            ],
            clue: "Find the noun right before the tell-more word. Ask whether it is a person, a thing, a place or a time.",
            hints: [
              "Find the noun right before the tell-more word. Ask whether it is a person, a thing, a place or a time.",
              "Try the there test on the words after the tell-more word in each choice.",
              "A town is not a person, so a choice about people cannot be right."
            ],
            how: [
              "Find the noun right before the tell-more word: town. A town is a place.",
              "We met Grandpa there is a whole sentence, so where fits.",
              "The answer is \"The town where we met Grandpa is small.\" The others use when for a place, who for a thing, or that where the words after it are already whole."
            ],
            misconception: "A common mix-up is choosing that because a town is a thing. The words after the word are already a whole sentence, so use where.",
            why: "The answer is \"The town where we met Grandpa is small.\" A town is a place, and we met Grandpa there is a whole sentence, so where fits. The others use when for a place, who for a thing, or that with words that are already whole."
          },
          {
            id: "SK-GUM4-5-C15",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
            ],
            passages: [],
            prompt: "Choose the words that complete the sentence.",
            text: "Fall is the season {0} leaves change color, and the park {1} has the old swing is my favorite place.",
            slots: [
              {
                options: ["when","who","whose","which"],
                answer: 0
              },
              {
                options: ["that","where","when","who"],
                answer: 0
              }
            ],
            clue: "Find the noun before each blank and decide what kind it is.",
            hints: [
              "Find the noun before each blank and decide what kind it is.",
              "For the first blank, add then to the words after it. For the second blank, check whether the words after it make a whole sentence with there.",
              "Who is for people, and neither noun is a person."
            ],
            how: [
              "Find the nouns: season, which is a time, and park, which is a place that has something in it.",
              "Leaves change color then is a whole sentence, so the first blank needs when. Has the old swing there is not a whole sentence, so the second blank needs that.",
              "The answers are when and that. Who is for people, whose shows who owns something, and which does not fit the first blank."
            ],
            misconception: "A common mix-up is putting where in the second blank because a park is a place. Check whether the words after it make a whole sentence.",
            why: "The answers are when and that. A season is a time, and leaves change color then is a whole sentence, so the first blank needs when. Has the old swing there is not a whole sentence, so the second blank needs that."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM4-5-S01",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: [],
      prompt: "Select the missing term for this line from a trail journal.",
      text: "On our hiking trip, the meadow {0} we ate our picnic lunch was covered in yellow daisies and buzzing bees.",
      slots: [
        {
          options: ["where","who","when","whose"],
          answer: 0
        }
      ],
      clue: "Look at the noun before the blank and decide what kind of noun it is.",
      hints: [
        "Look at the noun before the blank and decide what kind of noun it is.",
        "Add there to the words after the blank and check for a whole sentence.",
        "Who is for people, and a meadow is not a person."
      ],
      how: [
        "Find the noun before the blank: meadow. A meadow is a place.",
        "We ate our picnic lunch there is a whole sentence, so the word for a place fits.",
        "The answer is where. Who is for people, when is for times, and whose shows who owns something."
      ],
      misconception: "A common mix-up is choosing who because the writer ate with other people. Check the noun right before the blank.",
      why: "The answer is where. A meadow is a place, and we ate our picnic lunch there is a whole sentence, so where fits. Who is for people, when is for times, and whose shows who owns something.",
      like: ["SK-GUM4-5-P3"]
    },
    {
      id: "SK-GUM4-5-S02",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: [],
      prompt: "Match each phrase with the word that completes it.",
      cols: ["that","when"],
      rows: [
        {
          text: "the bell ___ rings at noon from the old tower",
          answer: 0
        },
        {
          text: "the hour ___ we eat lunch in the cafeteria",
          answer: 1
        },
        {
          text: "the atlas ___ has faded maps of oceans",
          answer: 0
        },
        {
          text: "the evening ___ we light the fire by the lake",
          answer: 1
        },
        {
          text: "the coat ___ keeps me warm in winter snow",
          answer: 0
        }
      ],
      clue: "For each row, find the noun and decide whether it is a thing or a time.",
      hints: [
        "For each row, find the noun and decide whether it is a thing or a time.",
        "For a time, add then to the words after the blank and check for a whole sentence.",
        "A coat is not a time, so the word for times cannot go with it."
      ],
      how: [
        "Look at each noun and the words after the blank.",
        "We eat lunch then and we light the fire then are whole sentences, so the hour and the evening take when.",
        "Rings at noon then, has old maps then and keeps me warm then are not whole sentences, so the bell, the atlas and the coat take that."
      ],
      misconception: "A common mix-up is choosing when for every row with a time word. Add then and check for a whole sentence.",
      why: "Use when for the hour and the evening: \"we eat lunch then\" and \"we light the fire then\" are whole sentences. Use that for the bell, the atlas and the coat, which are things.",
      like: ["SK-GUM4-5-P5"]
    },
    {
      id: "SK-GUM4-5-S03",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: ["p4"],
      prompt: "A scout believes where is right in line 4 since friends gather at a table. What is the strongest reply?",
      choices: [
        {
          text: "Added there, what follows cannot stand alone; that is correct.",
          correct: true
        },
        {
          text: "Tables are spots where friends gather; where suits any spot."
        },
        {
          text: "Tables are shared among everybody present; who suits shared objects."
        },
        {
          text: "Everyone sat once, briefly; when suits single events."
        }
      ],
      clue: "Try the there test on the words after the blank, and think about the noun before it.",
      hints: [
        "Try the there test on the words after the blank, and think about the noun before it.",
        "Read the words after the blank by themselves and ask what is missing from them.",
        "Tables are not people, so a choice about people cannot be right."
      ],
      how: [
        "Read sentence 4: Then we sat at a table who was covered in flour.",
        "Add there to what follows the blank: was covered in flour there. That is not a whole sentence, because it does not say what was covered.",
        "A table is a thing, so the joiner should be that. The answer is \"Added there, what follows cannot stand alone; that is correct.\""
      ],
      misconception: "A common mix-up is using where after anything people sit at. Where needs words after it that make a whole sentence.",
      why: "The answer is \"Added there, what follows cannot stand alone; that is correct.\" Was covered in flour there is not a whole sentence, so where does not fit, and a table is not a person or a time. The sentence needs that.",
      like: ["SK-GUM4-5-C03"]
    },
    {
      id: "SK-GUM4-5-S04",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: ["p4"],
      prompt: "Which term corrects line 2 of the bakery story?",
      text: "At the bakery on Pine Street, the baker was a man {0} wore a tall white hat and a flour-dusted apron.",
      slots: [
        {
          options: ["which","who","where","when"],
          answer: 1
        }
      ],
      clue: "Look at the noun before the blank and ask what kind it is.",
      hints: [
        "Look at the noun before the blank and ask what kind it is.",
        "Read the line with each word in the blank, and listen for the one that suits the noun.",
        "When is for times, and a man is not a time."
      ],
      how: [
        "Find the noun right before the blank: man. A man is a person.",
        "Use who to tell more about a person.",
        "The answer is who. Which is for things, where is for places, and when is for times."
      ],
      misconception: "A common mix-up is choosing which because the baker wears something fancy. For a person, use who.",
      why: "The answer is who. A man is a person, so who fits. Which is for things, where is for places, and when is for times.",
      like: ["SK-GUM4-5-C04"]
    },
    {
      id: "SK-GUM4-5-S05",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: ["p4"],
      prompt: "Just a single line among 3, 6, 7, 8 and 9 pairs its connector with an unsuitable partner. Which is it?",
      targets: ["p4:1:3","p4:2:2","p4:2:3","p4:3:1","p4:3:2"],
      answer: ["p4:3:1"],
      pick: 1,
      clue: "Locate the tell-more word in each shown sentence. Then locate the noun right before it.",
      hints: [
        "Locate the tell-more word in each shown sentence. Then locate the noun right before it.",
        "For each noun, decide whether it is a person, a thing, a place or a time. Test where and when with there or then.",
        "Sentence 9 tells more about a person, and who is the word for a person, so it is correct."
      ],
      how: [
        "Find the tell-more word and the noun before it in each shown sentence.",
        "In sentence 3, that goes with an oven. In sentence 6, where goes with a room. In sentence 7, when goes with early morning. In sentence 9, who goes with a sister.",
        "In sentence 8, when goes with the shelf, but a shelf is a place, so the sentence needs where."
      ],
      misconception: "A common mix-up is picking the sentence that has the most words after the tell-more word. Check the noun before the word.",
      why: "The answer is sentence 8: \"I smelled the shelf when warm rolls were stacked in rows.\" A shelf is a place, and the warm rolls were stacked there is a whole sentence, so the sentence needs where. In the other shown sentences each word matches its noun.",
      like: ["SK-GUM4-5-C05"]
    },
    {
      id: "SK-GUM4-5-S06",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: ["p4"],
      prompt: "Do Part A first, and then do Part B.",
      partA: {
        prompt: "Line 5 has a flaw. Which version cures it?",
        choices: [
          {
            text: "Tom, a boy who likes bread, asked questions all day.",
            correct: true
          },
          {
            text: "Tom, a boy which likes bread, asked questions all day."
          },
          {
            text: "Tom, a boy when likes bread, asked questions all day."
          },
          {
            text: "Tom, a boy where he likes bread, asked questions all day."
          }
        ]
      },
      partB: {
        prompt: "Which reason supports the cured version?",
        choices: [
          {
            text: "Boy stands for somebody human; the best partner for humans is who.",
            correct: true
          },
          {
            text: "Bread stands for food; the best partner for food is who."
          },
          {
            text: "Boy stands for a location; the best partner for locations is where."
          },
          {
            text: "Questions happen at noon; the best partner for noon is when."
          }
        ]
      },
      clue: "For Part A, look at the noun right before the wrong word in each version. For Part B, look for the reason about that noun.",
      hints: [
        "For Part A, look at the noun right before the wrong word in each version. For Part B, look for the reason about that noun.",
        "For Part B, think about what kind of noun boy is and which word goes with that kind.",
        "The draft already has where after the noun, so a version that keeps where with a new ending is not the cure."
      ],
      how: [
        "Part A: find the noun before the wrong word: boy. A boy is a person, so the answer is \"Tom, a boy who likes bread, asked questions all day.\"",
        "The other versions use which for a person, when for a time, or keep where.",
        "Part B: the reason is \"Boy stands for somebody human; the best partner for humans is who.\""
      ],
      misconception: "A common mix-up is changing only the words after the blank. Check the noun before it: Tom is a boy, which is a person.",
      why: "Part A: \"Tom, a boy who likes bread, asked questions all day.\" Part B: \"Boy stands for somebody human; the best partner for humans is who.\" Part A: a boy is a person, so the sentence needs who. Part B: who tells more about a person.",
      like: ["SK-GUM4-5-C06"]
    },
    {
      id: "SK-GUM4-5-S07",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: ["p5"],
      prompt: "Which term repairs line 2 of the camping story?",
      text: "My uncle packed a green canvas tent {0} fits six sleeping bags and a lantern.",
      slots: [
        {
          options: ["who","that","where","whose"],
          answer: 1
        }
      ],
      clue: "Find the noun right before the blank and ask what kind of noun it is.",
      hints: [
        "Find the noun right before the blank and ask what kind of noun it is.",
        "A tent is a shelter. Ask whether it is a person, a place, a time, or something else.",
        "Who is for people, and a tent is not a person."
      ],
      how: [
        "Find the noun right before the blank: tent. A tent is a thing.",
        "Use that to tell more about a thing.",
        "The answer is that. Who is for people, where is for places, and whose shows who owns something."
      ],
      misconception: "A common mix-up is choosing who because the uncle is a person. Check the noun right before the blank.",
      why: "The answer is that. A tent is a thing, so that fits. Who is for people, where is for places, and whose shows who owns something.",
      like: ["SK-GUM4-5-C07"]
    },
    {
      id: "SK-GUM4-5-S08",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: ["p5"],
      prompt: "Which ONE of lines 1, 3, 4, 5 and 7 attaches the wrong joining word to the person or thing it describes?",
      targets: ["p5:1:1","p5:1:3","p5:1:4","p5:2:1","p5:2:3"],
      answer: ["p5:1:3"],
      pick: 1,
      clue: "Locate the word that begins the tell-more part in each shown sentence. Then locate the noun before it.",
      hints: [
        "Locate the word that begins the tell-more part in each shown sentence. Then locate the noun before it.",
        "For a place or a time, try the there or then test on the words after the word.",
        "The chef in sentence 7 is a person, and who is for people, so that sentence is correct."
      ],
      how: [
        "Find the joining word and the noun before it in each shown sentence.",
        "Sentence 1 uses where for a river, sentence 4 uses that for a trail, sentence 5 uses when for a time, and sentence 7 uses who for a chef.",
        "In sentence 3, where goes with a camper, but a camper is a person, so the sentence needs who."
      ],
      misconception: "A common mix-up is thinking where works after any noun. Where is for places, and Nell is a camper.",
      why: "The answer is sentence 3: \"Nell is a quiet camper where knows every bird song in the forest.\" Nell is a camper, which is a person, so the sentence needs who. In the other shown sentences each word matches its noun.",
      like: ["SK-GUM4-5-C08"]
    },
    {
      id: "SK-GUM4-5-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: ["p5"],
      prompt: "A camper claims line 6 works as written, since a deer came at some hour. What reply explains the repair best?",
      choices: [
        {
          text: "Deer names an animal and the rest has no subject; that fits.",
          correct: true
        },
        {
          text: "Deer appeared at an hour; when fits any trip event or story."
        },
        {
          text: "Deer stood in one spot; where fits any wild animal here."
        },
        {
          text: "Both words carry one meaning here; leave this line completely alone."
        }
      ],
      clue: "Decide what kind of noun comes right before the blank word.",
      hints: [
        "Decide what kind of noun comes right before the blank word.",
        "Read the words after the blank by themselves and ask what is missing from them.",
        "A deer was spotted, not a place, so a choice about places cannot be right."
      ],
      how: [
        "Read sentence 6: We spotted a deer when was drinking from the shallow edge.",
        "A deer is an animal, not a time. What follows the blank is was drinking from the shallow edge, and it has no subject of its own.",
        "The answer is \"Deer names an animal and the rest has no subject; that fits.\""
      ],
      misconception: "A common mix-up is trusting when because the sentence describes an event. Check the noun right before it.",
      why: "The answer is \"Deer names an animal and the rest has no subject; that fits.\" A deer is an animal, not a time, and was drinking from the shallow edge has no subject, so the sentence needs that. Where would only fit if the words after it made a whole sentence.",
      like: ["SK-GUM4-5-C09"]
    },
    {
      id: "SK-GUM4-5-S10",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: [],
      prompt: "In school stories, which TWO lines match the joining word with the right kind of partner?",
      pick: 2,
      choices: [
        {
          text: "Ms. Park, the school nurse, helps students who feel dizzy during gym class.",
          correct: true
        },
        {
          text: "Lunch is a long break when we trade snacks at crowded tables.",
          correct: true
        },
        {
          text: "A cozy library who displays new comic books sits beside the gym."
        },
        {
          text: "A pen pal where lives in Ohio sends colorful postcards every month."
        },
        {
          text: "The auditorium when we rehearse the school play is down the hall."
        }
      ],
      clue: "Study each sentence for the noun right before the tell-more word, and decide what kind of noun it is.",
      hints: [
        "Study each sentence for the noun right before the tell-more word, and decide what kind of noun it is.",
        "Keep the sentences in which the tell-more word suits a person, a thing, a place or a time.",
        "A library is not a person, so one sentence uses a word for people that does not fit."
      ],
      how: [
        "Find the noun before the tell-more word in each sentence.",
        "In \"Ms. Park, the school nurse, helps students who feel dizzy during gym class.\" who goes with people. In \"Lunch is a long break when we trade snacks at crowded tables.\" when goes with a time.",
        "In the other sentences, who goes with a library, where goes with a person, and when goes with an auditorium."
      ],
      misconception: "A common mix-up is choosing a sentence because the tell-more word sounds right. Check the noun before it.",
      why: "The answers are \"Ms. Park, the school nurse, helps students who feel dizzy during gym class.\" and \"Lunch is a long break when we trade snacks at crowded tables.\" Who goes with the students, who are people, and when goes with the break, which is a time. In the other sentences who is used for a library, where for a person, and when for an auditorium.",
      like: ["SK-GUM4-5-C10"]
    },
    {
      id: "SK-GUM4-5-S11",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: [],
      stem: "Line 1: Beans grow in the garden where we plant them. Line 2: A scarecrow stands in a garden that has tall corn.",
      prompt: "What links and what separates the joining words in these two lines?",
      choices: [
        {
          text: "Each names a place; where works only if the rest could stand alone.",
          correct: true
        },
        {
          text: "Each names a person; where works only if the rest names somebody nearby."
        },
        {
          text: "Each names a moment; that works only if the rest names part of a day."
        },
        {
          text: "Each names an object; where and that carry one shared meaning always."
        }
      ],
      clue: "Find the noun that each tell-more word describes. Then try the there test on the words after each word.",
      hints: [
        "Find the noun that each tell-more word describes. Then try the there test on the words after each word.",
        "Add there to the words after where in Line 1 and to the words after that in Line 2, and see which makes a whole sentence.",
        "A garden is not a person, so a choice about people cannot be right."
      ],
      how: [
        "Both lines describe a garden, which is a place.",
        "In Line 1, we plant them there is a whole sentence, so where fits. In Line 2, has tall corn there is not a whole sentence, so that is used.",
        "The answer is \"Each names a place; where works only if the rest could stand alone.\""
      ],
      misconception: "A common mix-up is thinking a place noun always takes where. The words after the word decide.",
      why: "The answer is \"Each names a place; where works only if the rest could stand alone.\" Both words describe the garden. We planted beans there is a whole sentence, so Line 1 uses where. Has a scarecrow there is not a whole sentence, so Line 2 uses that.",
      like: ["SK-GUM4-5-C11"]
    },
    {
      id: "SK-GUM4-5-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: ["p6"],
      prompt: "Select the missing term in line 4 of the moving story.",
      text: "My little brother is a boy {0} cried when we packed his shiny red bike into the long truck.",
      slots: [
        {
          options: ["when","who","which","where"],
          answer: 1
        }
      ],
      clue: "Look at the noun before the blank and decide what kind of noun it is.",
      hints: [
        "Look at the noun before the blank and decide what kind of noun it is.",
        "Read the sentence with each word in the blank, and listen for the one that suits the noun.",
        "Which is for things, and a brother is not a thing."
      ],
      how: [
        "Find the noun right before the blank: boy. A boy is a person.",
        "Use who to tell more about a person.",
        "The answer is who. When is for times, which is for things, and where is for places."
      ],
      misconception: "A common mix-up is choosing where because the family is moving. Check the noun right before the blank.",
      why: "The answer is who. A boy is a person, so who fits. When is for times, which is for things, and where is for places.",
      like: ["SK-GUM4-5-C12"]
    },
    {
      id: "SK-GUM4-5-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: ["p6"],
      prompt: "Two of these versions repair line 6 of the moving story. Which two?",
      pick: 2,
      choices: [
        {
          text: "We found a tiny, shivering puppy that was sleeping on my front porch.",
          correct: true
        },
        {
          text: "We found a tiny, shivering puppy where it was sleeping on my front porch.",
          correct: true
        },
        {
          text: "We found a tiny, shivering puppy when was sleeping on my front porch."
        },
        {
          text: "We found a tiny, shivering puppy where was sleeping on my front porch."
        },
        {
          text: "We found a tiny, shivering puppy that it was sleeping on my front porch."
        }
      ],
      clue: "A repair can change the tell-more word or the words after it.",
      hints: [
        "A repair can change the tell-more word or the words after it.",
        "Keep the versions in which the tell-more word and the words after it work together.",
        "A puppy is not a time, so a word for times cannot go with it."
      ],
      how: [
        "The draft pairs the puppy with when, but a puppy is not a time, and was sleeping on my front porch has no subject.",
        "One repair uses that, which goes with a thing. The other repair gives the words after where a subject, so it was sleeping there is a whole sentence.",
        "The answers are \"We found a tiny, shivering puppy that was sleeping on my front porch.\" and \"We found a tiny, shivering puppy where it was sleeping on my front porch.\" The others keep the draft, leave where without a subject, or add a second subject after that."
      ],
      misconception: "A common mix-up is thinking only the tell-more word can change. The words after it can change, too.",
      why: "The answers are \"We found a tiny, shivering puppy that was sleeping on my front porch.\" and \"We found a tiny, shivering puppy where it was sleeping on my front porch.\" That goes with a puppy, which is a thing, and it was sleeping there is a whole sentence, so where fits the second version. The others keep the draft, leave where without a subject, or add a second subject after that.",
      like: ["SK-GUM4-5-C13"]
    },
    {
      id: "SK-GUM4-5-S14",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: [],
      prompt: "Select the line whose connector matches its partner.",
      choices: [
        {
          text: "The deep green lake where we paddled our blue canoe past the dusty dock last summer is very cold.",
          correct: true
        },
        {
          text: "The deep green lake when we paddled our blue canoe past the dusty dock last summer is very cold today."
        },
        {
          text: "The deep green lake who we paddled our blue canoe past the dusty dock last summer is very cold today."
        },
        {
          text: "The deep green lake that we paddled our blue canoe past the dusty dock last summer is very cold today."
        }
      ],
      clue: "Find the noun right before the tell-more word. Ask whether it is a person, a thing, a place or a time.",
      hints: [
        "Find the noun right before the tell-more word. Ask whether it is a person, a thing, a place or a time.",
        "Try the there test on the words after the tell-more word in each choice.",
        "A lake is not a person, so a choice about people cannot be right."
      ],
      how: [
        "Find the noun right before the tell-more word: lake. A lake is a place.",
        "We paddled our blue canoe past the dusty dock there is a whole sentence, so where fits.",
        "The answer is \"The deep green lake where we paddled our blue canoe past the dusty dock last summer is very cold.\" The others use when for a place, who for a thing, or that where the words after it are already whole."
      ],
      misconception: "A common mix-up is choosing that because a lake is a thing. The words after the word are already a whole sentence, so use where.",
      why: "The answer is \"The deep green lake where we paddled our blue canoe past the dusty dock last summer is very cold.\" A lake is a place, and we paddled our canoe there is a whole sentence, so where fits. The others use when for a place, who for a thing, or that with words that are already whole.",
      like: ["SK-GUM4-5-C14"]
    },
    {
      id: "SK-GUM4-5-S15",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-relative-pronouns-and-relative-adverbs"
      ],
      passages: [],
      prompt: "Fill both gaps in this line about the town fair.",
      text: "Spring is a season {0} flowers bloom beside our pond, and a wooden bridge {1} crosses a stream is painted green.",
      slots: [
        {
          options: ["when","whose","which","how"],
          answer: 0
        },
        {
          options: ["that","whom","where","while"],
          answer: 0
        }
      ],
      clue: "Find the noun before each blank. Then decide whether it is a person, a thing, a place or a time.",
      hints: [
        "Find the noun before each blank. Then decide whether it is a person, a thing, a place or a time.",
        "For the first blank, add then to the words after it. For the second blank, check whether the words after it make a whole sentence with there.",
        "Whose shows who owns something, and nothing in the first part names an owner."
      ],
      how: [
        "Find the nouns: season, which is a time, and bridge, which is a thing.",
        "Flowers bloom by the pond then is a whole sentence, so the first blank needs when. Crosses the stream there is not a whole sentence, so the second blank needs that.",
        "The answers are when and that. Whose shows who owns something, which does not fit the first blank, and how does not tell more about a noun."
      ],
      misconception: "A common mix-up is putting where in the second blank because a bridge stands in one spot. Check whether the words after it make a whole sentence.",
      why: "The answers are when and that. A season is a time, and flowers bloom by the pond then is a whole sentence, so the first blank needs when. Crosses the stream there is not a whole sentence, so the second blank needs that.",
      like: ["SK-GUM4-5-C15"]
    }
  ],
  addons: {
    "SK-GUM4-5-P1": {
      hints: [
        "Look at the noun right before the blank and decide what kind of noun it is.",
        "Read the sentence with each word in the blank, and listen for the one that suits the noun.",
        "Where is for places, and a person is not a place."
      ],
      how: [
        "Find the noun right before the blank: person. A person is not a thing, a place or a time.",
        "Use who to tell more about a person.",
        "The answer is who. Which is for things, where is for places, and when is for times."
      ],
      misconception: "A common mix-up is choosing which because it sounds fancy. For a person, use who."
    },
    "SK-GUM4-5-P2": {
      hints: [
        "Find the noun before the blank and decide what kind it is.",
        "For a time, add then to the words after the blank and check for a whole sentence.",
        "Who is for people, and a season is not a person."
      ],
      how: [
        "Find the noun right before the blank: season. A season is a time of year.",
        "The pond freezes then is a whole sentence, so the word for a time fits.",
        "The answer is when. Who is for people, where is for places, and whose shows who owns something."
      ],
      misconception: "A common mix-up is choosing where because a pond is a place. Check the noun before the blank: season."
    },
    "SK-GUM4-5-P3": {
      hints: [
        "Look at the noun before the blank, then test what follows.",
        "Check whether the words after the blank make a whole sentence with there.",
        "Who is for people, and a place is not a person."
      ],
      how: [
        "Find the noun before the blank: place. A place is where something is.",
        "We found the seashells there is a whole sentence, so where fits.",
        "The answer is where. Which does not fit because the words after the blank are already complete."
      ],
      misconception: "A common mix-up is choosing which because a place is a thing. The words after the blank are already complete, so use where."
    },
    "SK-GUM4-5-P4": {
      hints: [
        "Look at the noun right before the blank and decide what kind of noun it is.",
        "Add there or then to the words after the blank and check for a whole sentence.",
        "Who is for people, and a shell is not a person."
      ],
      how: [
        "Find the noun right before the blank: shell. A shell is a thing.",
        "Looks like a star there is not a whole sentence, so where and when do not fit.",
        "The answer is that. Who is for people."
      ],
      misconception: "A common mix-up is choosing where because shells come from beaches. A shell is a thing, so use that."
    },
    "SK-GUM4-5-P5": {
      hints: [
        "For each row, find the noun and decide whether it is a thing or a place.",
        "For a place, add there to the words after the blank and check for a whole sentence.",
        "A bike is not a place, so the word for places cannot go with it."
      ],
      how: [
        "Look at each noun and the words after the blank.",
        "We borrow books there and Dad cooks dinner there are whole sentences, so the library and the kitchen take where.",
        "Has a slide there is not a whole sentence, so the park takes that, just like the bike and the song."
      ],
      misconception: "A common mix-up is putting where after every place noun. Add there and check for a whole sentence."
    }
  },
  /* B8a:core:end */
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
      "When the feeling is mild, put a comma after the interjection and keep going: Oh, I forgot my pencil.",
      "An interjection always needs a mark after it. Either mark can work, but the opening letter of the following word must suit the mark you chose: a capital for a new sentence, or a small letter when the same sentence goes on, unless the word is I or a name.",
      "Pick the interjection that matches what happened. Use ouch for a hurt, yum for tasty food and oops for a slip. A joyful word like hooray does not fit a spill."
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
    },
    {
      show: ["Whew we made it to the bus on time."],
      ask: "What is wrong, and how can you fix it?",
      steps: [
        "Whew is the interjection, and it shows relief.",
        "Nothing separates Whew from the words after it, so it needs a mark.",
        "Add an exclamation point and begin the next word with a capital letter."
      ],
      answer: "Whew! We made it to the bus on time."
    }
  ],
  parent: "When something surprising happens at home, ask your child which interjection fits: Wow? Oops? Yikes? Then write it down together with the right mark after it.",
  passages: [
    /* B8a:passages:start */
    {
      id: "p1",
      title: "The Class Picnic",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Thursday, our class went to Pine Park for a picnic lunch.",
          "(2) Oops, I dropped my sandwich in the grass.",
          "(3) Yuck! it was covered in tiny ants.",
          "(4) Hooray, We found a table in the shade."
        ],
        [
          "(5) Yum! My cheese crackers tasted so good with the cold grapes.",
          "(6) Ouch I bumped my knee on the wooden bench.",
          "(7) Oh, I forgot to pack a cup for my juice."
        ],
        [
          "(8) Phew! Our teacher had an extra one in her bag.",
          "(9) Wow! The ducks swam right up to our blanket.",
          "(10) Yay! we get to come back to the park next month.",
          "(11) We tossed our paper plates in the bin and rode the bus back to class.",
          "(12) It was the best picnic of the whole year."
        ]
      ]
    },
    {
      id: "p2",
      title: "A Day at the County Fair",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Saturday, our family went to the county fair.",
          "(2) Wow! The Ferris wheel is taller than our school.",
          "(3) Hooray! I spilled lemonade all over my new shoes.",
          "(4) Yikes the roller coaster dropped so fast."
        ],
        [
          "(5) Oh, I forgot my tickets at the front gate.",
          "(6) Yum! The fresh popcorn smells salty and warm.",
          "(7) Ouch! My ice cream tasted so sweet."
        ],
        [
          "(8) Phew, The line was shorter than I thought.",
          "(9) Yay! We won a goldfish at the ring toss.",
          "(10) Bravo! my sister made a balloon animal that looks just like a dog.",
          "(11) We rode the bus home with sticky hands and sleepy eyes.",
          "(12) I hope our family goes back to the fair next summer."
        ]
      ]
    },
    {
      id: "p3",
      title: "A Night in the Mountains",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last summer, my cousins and I camped in the mountains for two nights.",
          "(2) Brr! The lake water was freezing cold.",
          "(3) Eek! A spider crawled across my sleeping bag.",
          "(4) Hooray, we found a perfect spot for the tent."
        ],
        [
          "(5) Yuck The soup burned at the bottom of the pot.",
          "(6) Aha! I found my flashlight under the blanket.",
          "(7) Oops! the marshmallow slid right off my stick."
        ],
        [
          "(8) Yum! The campfire smoke smelled terrible.",
          "(9) Oh no, The tent leaked during the thunderstorm.",
          "(10) Phew! The rain finally stopped before the sun came up.",
          "(11) We dried our blankets on a rope between two pine trees.",
          "(12) I will remember that trip for a long time."
        ]
      ]
    },
    {
      id: "p4",
      title: "A Trip to the Zoo",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Monday, our scout troop visited the city zoo with two parents.",
          "(2) Whoa! The giraffe was taller than the bus.",
          "(3) Hooray! My balloon popped, and the string flew away.",
          "(4) Eek the monkey grabbed my hat."
        ],
        [
          "(5) Oh, I should have held it tighter.",
          "(6) Yum! The pretzel was warm and soft.",
          "(7) Ouch! The baby penguins looked soft and fluffy."
        ],
        [
          "(8) Phew, The bear stayed behind a strong fence.",
          "(9) Yay! We saw the baby elephant take a bath.",
          "(10) Bravo! the keeper made the seals clap their flippers.",
          "(11) We ate our lunch on a bench beside the penguin pool.",
          "(12) The ride home on the troop bus was quiet and happy."
        ]
      ]
    },
    {
      id: "p5",
      title: "Grandma's Garden",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) After school, my sister and I helped Grandma plant seeds in her garden.",
          "(2) Wow! The tomatoes were bigger than my fist.",
          "(3) Hooray! A bee stung my hand when I touched a flower.",
          "(4) Oops the green watering can tipped over onto the carrot seeds again."
        ],
        [
          "(5) Oh, I put the carrot seeds in the wrong row.",
          "(6) Yum! The strawberries tasted sweet and juicy.",
          "(7) Ew! The garden smelled like fresh mint."
        ],
        [
          "(8) Whew, The weeds were pulled before dinner.",
          "(9) Yay! Grandma baked us a blueberry pie.",
          "(10) Bravo! my sister dug the longest row in the garden.",
          "(11) We washed our muddy boots with the hose on the porch.",
          "(12) I love helping Grandma in her garden every spring."
        ]
      ]
    },
    {
      id: "p6",
      title: "Game Day",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Sunday morning, our soccer team played its opening match against the Tigers.",
          "(2) Whoa! The other team ran faster than a speeding car.",
          "(3) Hooray! I tripped over my own shoelace near the corner flag.",
          "(4) Yikes the ball flew right at my face."
        ],
        [
          "(5) Oh, I did not see it coming.",
          "(6) Yum! The orange slices at halftime tasted fresh and cold.",
          "(7) Ow! My team scored a goal in the last minute."
        ],
        [
          "(8) Phew, The final whistle blew before they could tie it.",
          "(9) Yay! We beat the Tigers by a single point.",
          "(10) Bravo! our goalie stopped every shot in the second half.",
          "(11) We shook hands with the other team near the goal.",
          "(12) Then we drank water and sat in the shade of the bleachers."
        ]
      ]
    }
    /* B8a:passages:end */
  ],
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
            ref: "SK-GUM4-6-P3"
          },
          {
            ref: "SK-GUM4-6-P4"
          },
          {
            id: "SK-GUM4-6-C03",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: ["p1"],
            prompt: "A classmate thinks sentence 6 needs no mark after Ouch. What is the best response?",
            choices: [
              {
                text: "Ouch shows a feeling, so a mark must follow it, either an exclamation point or a comma, to set it apart.",
                correct: true
              },
              {
                text: "Ouch is already a whole sentence by itself, so a mark after it would only get in the way of the next words."
              },
              {
                text: "A question mark is needed after Ouch, because the writer is asking the reader how the knee is feeling today."
              },
              {
                text: "Quotation marks are needed around Ouch, because every interjection must be inside quotation marks in a story."
              }
            ],
            clue: "Think about how an interjection is kept separate from the words that come after it.",
            hints: [
              "Think about how an interjection is kept separate from the words that come after it.",
              "Look at sentence 6 and at sentences 5 and 7, and compare what stands right after the first word in each.",
              "The writer is not asking anything, so a choice about asking cannot be right."
            ],
            how: [
              "Read sentence 6: Ouch I bumped my knee on the wooden bench.",
              "Ouch shows a feeling of pain. The next words run right into it, with no mark between them.",
              "An interjection is set apart by an exclamation point or a comma. The answer is \"Ouch shows a feeling, so a mark must follow it, either an exclamation point or a comma, to set it apart.\""
            ],
            misconception: "A common mix-up is thinking an interjection can run into the next words. A mark must come after it.",
            why: "The answer is \"Ouch shows a feeling, so a mark must follow it, either an exclamation point or a comma, to set it apart.\" Ouch shows a feeling of pain, and a mark after it sets it apart from the rest of the sentence. An exclamation point or a comma would both work."
          },
          {
            id: "SK-GUM4-6-C04",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: ["p1"],
            prompt: "Choose the way to write sentence 3 that fixes the mistake.",
            text: "Picnic draft: {0}",
            slots: [
              {
                options: [
                  "Yuck! It was covered in tiny ants.",
                  "Yuck! it was covered in tiny ants.",
                  "Yuck, It was covered in tiny ants.",
                  "Yuck It was covered in tiny ants."
                ],
                answer: 0
              }
            ],
            clue: "Compare how each choice sets apart the interjection and how the next word begins.",
            hints: [
              "Compare how each choice sets apart the interjection and how the next word begins.",
              "Look at the mark after Yuck, then look at the first letter of the next word.",
              "No mark follows Yuck in one choice, and an interjection needs one."
            ],
            how: [
              "Yuck is the interjection, and it shows disgust.",
              "After an exclamation point, a new sentence begins, so the next word starts with a capital letter.",
              "The answer is \"Yuck! It was covered in tiny ants.\" The other choices use a small letter after the exclamation point, a capital letter after a comma, or no mark."
            ],
            misconception: "A common mix-up is fixing only the mark. Check the first letter of the word after it, too.",
            why: "The answer is Yuck! It was covered in tiny ants.. A new sentence follows the exclamation point, so It needs a capital I. The other choices use a small i, a capital after a comma, or no mark."
          },
          {
            id: "SK-GUM4-6-C05",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: ["p1"],
            prompt: "From sentences 2, 5, 7, 9 and 10, select the ONE that has a punctuation mistake.",
            targets: ["p1:1:2","p1:2:1","p1:2:3","p1:3:2","p1:3:3"],
            answer: ["p1:3:3"],
            pick: 1,
            clue: "Find the interjection in each shown sentence, then check what stands after it.",
            hints: [
              "Find the interjection in each shown sentence, then check what stands after it.",
              "Check the mark after each interjection and the first letter of the next word.",
              "Sentence 9 has an exclamation point and a capital letter after it, so it is already correct."
            ],
            how: [
              "Locate the interjection in each shown sentence and see what follows it.",
              "Sentences 2 and 7 use a comma followed by the word I, and sentences 5 and 9 use an exclamation point with a capital letter.",
              "In sentence 10, a small w follows the exclamation point, so it is the answer."
            ],
            misconception: "A common mix-up is picking the sentence with a comma instead of an exclamation point. Both marks can follow an interjection.",
            why: "The answer is sentence 10: \"Yay! we get to come back to the park next month.\" Sentence 10 needs a capital W after the exclamation point. In the other shown sentences each interjection has a mark and the right letter after it."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM4-6-C06",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: ["p1"],
            prompt: "This item has two parts. Begin with Part A and then go on to Part B.",
            partA: {
              prompt: "Sentence 4 has a mistake. Which revision fixes it?",
              choices: [
                {
                  text: "Hooray! We found a table in the shade.",
                  correct: true
                },
                {
                  text: "Hooray! we found a table in the shade."
                },
                {
                  text: "Hooray We found a table in the shade."
                },
                {
                  text: "hooray! We found a table in the shade."
                }
              ]
            },
            partB: {
              prompt: "Which fact explains why the correct revision is right?",
              choices: [
                {
                  text: "A word after an exclamation point starts a new sentence, so it begins with a capital letter.",
                  correct: true
                },
                {
                  text: "A word after an exclamation point stays in the same sentence, so it begins with a small letter."
                },
                {
                  text: "An interjection never takes a mark, so the sentence needs no mark after the first word."
                },
                {
                  text: "An exclamation point is only used when someone is hurt, so the revision shows a hurt."
                }
              ]
            },
            clue: "For Part A, compare the first word, the mark after it and the next word in each choice. Then, for Part B, find the fact that goes with the change.",
            hints: [
              "For Part A, compare the first word, the mark after it and the next word in each choice. Then, for Part B, find the fact that goes with the change.",
              "In Part B, ask what the first mark does to the word that comes next.",
              "The draft already has a capital H, so a choice that lowers the first letter cannot be the fix."
            ],
            how: [
              "Part A: the draft has a comma and then a capital W. The answer is \"Hooray! We found a table in the shade.\"",
              "The other choices use a small letter after the exclamation point, leave out the mark, or start with a small h.",
              "Part B: the fact is \"A word after an exclamation point starts a new sentence, so it begins with a capital letter.\""
            ],
            misconception: "A common mix-up is changing only the mark. A new sentence after an exclamation point also needs its capital letter.",
            why: "Part A: \"Hooray! We found a table in the shade.\" Part B: \"A word after an exclamation point starts a new sentence, so it begins with a capital letter.\" Part A: Hooray! We found a table in the shade. uses an exclamation point and a capital W. Part B: a word after an exclamation point starts a new sentence."
          },
          {
            id: "SK-GUM4-6-C07",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: ["p2"],
            prompt: "Pick the interjection that fits the feeling in sentence 3.",
            text: "{0} I spilled lemonade all over my new shoes.",
            slots: [
              {
                options: ["Hooray!","Oops!","Yum!","Brr!"],
                answer: 1
              }
            ],
            clue: "Check what the sentence goes on to say, and decide how the writer feels.",
            hints: [
              "Check what the sentence goes on to say, and decide how the writer feels.",
              "Think about how you would feel if this happened to you, and match that feeling to a word.",
              "Yum goes with tasty food, and this sentence says nothing about taste."
            ],
            how: [
              "Check the words after the blank: lemonade was spilled on new shoes.",
              "That is an accident, and it is upsetting.",
              "The answer is Oops! Hooray shows joy, Yum is for good-tasting food, and Brr shows that someone is cold."
            ],
            misconception: "A common mix-up is choosing Hooray because the writer is at a fair. Match the word to what happened in the sentence.",
            why: "The answer is Oops!. Spilling lemonade is an accident, so Oops fits. Hooray shows joy, Yum is for good-tasting food, and Brr shows that someone is cold."
          },
          {
            id: "SK-GUM4-6-C08",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: ["p2"],
            prompt: "Find the interjection in each of sentences 2, 5, 6, 7 and 9. Select the ONE whose interjection does not fit the feeling.",
            targets: ["p2:1:2","p2:2:1","p2:2:2","p2:2:3","p2:3:2"],
            answer: ["p2:2:3"],
            pick: 1,
            clue: "Read each shown sentence and decide what feeling the writer has.",
            hints: [
              "Read each shown sentence and decide what feeling the writer has.",
              "Then say whether the interjection at the start shows that same feeling.",
              "Sentence 6 is about popcorn that smells good, and Yum is about food that smells or tastes good, so it fits."
            ],
            how: [
              "Find the interjection in each shown sentence and decide what feeling the rest of the sentence shows.",
              "Wow fits a tall Ferris wheel, Oh fits a forgotten ticket, Yum fits warm popcorn, and Yay fits a won goldfish.",
              "In sentence 7, Ouch shows pain, but sweet ice cream does not hurt, so it is the answer."
            ],
            misconception: "A common mix-up is picking the sentence with the strongest word. Check whether the word fits what the sentence says.",
            why: "The answer is sentence 7: \"Ouch! My ice cream tasted so sweet.\" Ouch shows pain, but ice cream that tastes sweet does not hurt, so the interjection does not fit. In the other shown sentences each interjection matches the feeling."
          },
          {
            id: "SK-GUM4-6-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: ["p2"],
            prompt: "A classmate says Hooray fits sentence 3, because the writer is excited about the fair. Which response is best?",
            choices: [
              {
                text: "Hooray shows joy, but spilling lemonade on new shoes is upsetting, so a word like Oh no fits the feeling better.",
                correct: true
              },
              {
                text: "Hooray fits, because an interjection can show any strong feeling, whatever else the line goes on to say."
              },
              {
                text: "Hooray fits, because the exclamation point shows the writer is excited, and the exclamation point decides the feeling."
              },
              {
                text: "No interjection fits, because spilling lemonade is too small a thing to show any feeling at all to a reader."
              }
            ],
            clue: "Ask what happened in sentence 3 and how someone would feel about it.",
            hints: [
              "Ask what happened in sentence 3 and how someone would feel about it.",
              "Compare the feeling that the word Hooray shows with the feeling in what follows it.",
              "People do feel something when lemonade spills on their shoes, so a choice that denies any feeling cannot be right."
            ],
            how: [
              "Read sentence 3: Hooray! I spilled lemonade all over my new shoes.",
              "Hooray shows joy, but a spill on new shoes is upsetting.",
              "The answer is \"Hooray shows joy, but spilling lemonade on new shoes is upsetting, so a word like Oh no fits the feeling better.\""
            ],
            misconception: "A common mix-up is thinking the exclamation point picks the feeling. The interjection itself must match what happened.",
            why: "The answer is \"Hooray shows joy, but spilling lemonade on new shoes is upsetting, so a word like Oh no fits the feeling better.\" Hooray shows joy, but spilling lemonade on new shoes is upsetting, so the feeling does not match. A word like Oh no or Oops fits better."
          },
          {
            id: "SK-GUM4-6-C10",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: [],
            prompt: "Which TWO lines have the right mark and the right capital letter?",
            pick: 2,
            choices: [
              {
                text: "Hey! Pass the ball to me.",
                correct: true
              },
              {
                text: "Oh, I think the game starts at noon.",
                correct: true
              },
              {
                text: "Bravo! you scored two goals."
              },
              {
                text: "Wow The crowd is so loud."
              },
              {
                text: "Ow, My foot hurts after that kick."
              }
            ],
            clue: "Check each sentence for the mark after the interjection and the letter that comes next.",
            hints: [
              "Check each sentence for the mark after the interjection and the letter that comes next.",
              "Keep the sentences in which the mark and the next letter go together.",
              "One sentence has no mark at all after its first word, and an interjection needs one."
            ],
            how: [
              "Look at the mark after the interjection and the letter after it in each sentence.",
              "In \"Hey! Pass the ball to me.\" a capital letter follows the exclamation point. In \"Oh, I think the game starts at noon.\" the word I is always capitalized.",
              "The other sentences use a small letter after an exclamation point, leave out the mark, or use a capital letter after a comma."
            ],
            misconception: "A common mix-up is choosing a sentence only because it has an exclamation point. Check the letter after the mark.",
            why: "The answers are \"Hey! Pass the ball to me.\" and \"Oh, I think the game starts at noon.\" Hey is followed by an exclamation point and a capital P, and Oh is followed by a comma and the word I. In the other sentences a small letter follows an exclamation point, a mark is missing, or a capital letter follows a comma."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM4-6-C11",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: [],
            stem: "Sentence A: Yikes! The dog got loose. Sentence B: Oh, the dog got loose.",
            prompt: "How are the interjections in the two sentences alike and different?",
            choices: [
              {
                text: "Both show a feeling about the dog, but Yikes shows stronger alarm than Oh, which shows mild surprise.",
                correct: true
              },
              {
                text: "Both show a feeling about the dog, but Oh shows stronger alarm than Yikes, which shows mild surprise."
              },
              {
                text: "Both tell what the dog did, but Yikes names the action and Oh names the dog that got loose."
              },
              {
                text: "Both are complete sentences, but only Sentence B starts with a capital letter at the very beginning."
              }
            ],
            clue: "Find the interjection in each sentence and decide what feeling it shows.",
            hints: [
              "Find the interjection in each sentence and decide what feeling it shows.",
              "Compare how strong each feeling is, and see how each sentence sets the interjection apart.",
              "Both sentences begin with a capital letter, so a choice about only one of them cannot be right."
            ],
            how: [
              "The interjections are Yikes in Sentence A and Oh in Sentence B.",
              "Yikes shows alarm, and an exclamation point follows it. Oh shows mild surprise, and a comma follows it.",
              "The answer is \"Both show a feeling about the dog, but Yikes shows stronger alarm than Oh, which shows mild surprise.\""
            ],
            misconception: "A common mix-up is thinking an interjection names something in the sentence. It shows a feeling.",
            why: "The answer is \"Both show a feeling about the dog, but Yikes shows stronger alarm than Oh, which shows mild surprise.\" Both interjections show a feeling about the dog getting loose. Yikes shows strong alarm, so an exclamation point follows it, and Oh shows mild surprise, so a comma follows it."
          },
          {
            id: "SK-GUM4-6-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: ["p3"],
            prompt: "Pick the version of sentence 5 that is written correctly.",
            text: "Camp draft: {0}",
            slots: [
              {
                options: [
                  "Yuck The soup burned at the bottom of the pot.",
                  "Yuck! The soup burned at the bottom of the pot.",
                  "Yuck! the soup burned at the bottom of the pot.",
                  "Yuck, The soup burned at the bottom of the pot."
                ],
                answer: 1
              }
            ],
            clue: "Compare what stands right after Yuck in each choice, and how the next word begins.",
            hints: [
              "Compare what stands right after Yuck in each choice, and how the next word begins.",
              "Look for the choice in which the mark and the next letter go together.",
              "The choice that matches the draft has no mark after Yuck, and an interjection needs one."
            ],
            how: [
              "Yuck is the interjection, and it shows disgust.",
              "An exclamation point sets it apart, and the next sentence begins with a capital letter.",
              "The answer is \"Yuck! The soup burned at the bottom of the pot.\" The other choices skip the mark, start the next word with a small letter after an exclamation point, or begin it with a capital after a comma."
            ],
            misconception: "A common mix-up is leaving the draft alone because the words after Yuck read fine. An interjection still needs a mark.",
            why: "The answer is Yuck! The soup burned at the bottom of the pot.. Yuck needs a mark, and a sentence that follows an exclamation point opens with a capital. The other choices skip the mark, start the next word with a small letter after an exclamation point, or begin it with a capital after a comma."
          },
          {
            id: "SK-GUM4-6-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: ["p3"],
            prompt: "The ninth line of the camping draft is wrong. Pick the TWO revisions that repair it.",
            pick: 2,
            choices: [
              {
                text: "Oh no! The tent leaked during the thunderstorm.",
                correct: true
              },
              {
                text: "Oh no, the tent leaked during the thunderstorm.",
                correct: true
              },
              {
                text: "Oh no The tent leaked during the thunderstorm."
              },
              {
                text: "Oh no! the tent leaked during the thunderstorm."
              },
              {
                text: "Oh no, The tent leaked during the thunderstorm."
              }
            ],
            clue: "A fix can use a different mark, as long as the next letter goes with it. Check each revision.",
            hints: [
              "A fix can use a different mark, as long as the next letter goes with it. Check each revision.",
              "Keep the revisions in which the mark after Oh no and the next letter go together.",
              "One revision leaves out the mark after Oh no, and an interjection needs one."
            ],
            how: [
              "The draft has a comma and then a capital T, and those do not go together.",
              "One fix changes the comma to an exclamation point, so the capital T is right. The other fix keeps the comma and uses a small t.",
              "The answers are \"Oh no! The tent leaked during the thunderstorm.\" and \"Oh no, the tent leaked during the thunderstorm.\" The others leave out the mark, use a small letter after an exclamation point, or keep the draft."
            ],
            misconception: "A common mix-up is thinking only the mark can change. The letter after the mark can change, too.",
            why: "The answers are \"Oh no! The tent leaked during the thunderstorm.\" and \"Oh no, the tent leaked during the thunderstorm.\" An exclamation point goes with a capital T, and a comma goes with a small t. The other revisions leave out the mark, use a small letter after an exclamation point, or keep the draft."
          },
          {
            id: "SK-GUM4-6-C14",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: [],
            prompt: "Which sentence uses an interjection that fits the feeling?",
            choices: [
              {
                text: "Eek! A snake is in the garden.",
                correct: true
              },
              {
                text: "Yum! A snake is in the garden."
              },
              {
                text: "Hooray! My finger got pinched in the door."
              },
              {
                text: "Bravo! The milk smells sour."
              }
            ],
            clue: "Read the rest of each sentence and decide how a person would feel about it.",
            hints: [
              "Read the rest of each sentence and decide how a person would feel about it.",
              "Match each interjection to the feeling it shows, then compare that feeling with the sentence.",
              "Pinched fingers hurt, and Hooray shows joy, so one choice has a word that clashes."
            ],
            how: [
              "Read the rest of each sentence and decide how a person would feel.",
              "A snake in the garden is scary, and Eek shows fear.",
              "The answer is \"Eek! A snake is in the garden.\" Yum is for good-tasting food, Hooray shows joy, and Bravo shows praise."
            ],
            misconception: "A common mix-up is choosing a word because it is exciting. The word must match what happened.",
            why: "The answer is \"Eek! A snake is in the garden.\" A snake in the garden is scary, so Eek fits. Yum is for food that tastes good, Hooray shows joy, and Bravo shows praise, and none of them fit their sentences."
          },
          {
            id: "SK-GUM4-6-C15",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-interjections"
            ],
            passages: [],
            prompt: "Choose the words and the mark that complete the sentence.",
            text: "{0}{1} The soup is too hot to eat.",
            slots: [
              {
                options: ["Ouch","Hooray","Yum","Bravo"],
                answer: 0
              },
              {
                options: ["!",",",":",";"],
                answer: 0
              }
            ],
            clue: "For the first blank, think how a person feels when soup is too hot. For the second, look at the letter after the blank.",
            hints: [
              "For the first blank, think how a person feels when soup is too hot. For the second, look at the letter after the blank.",
              "A capital letter after the blank means a new sentence begins there.",
              "Yum is for good-tasting food, and soup that is too hot to eat does not taste good yet."
            ],
            how: [
              "Hot soup can burn a mouth, and Ouch shows pain.",
              "The next word, The, is capitalized, so a fresh sentence begins after the first one ends with an exclamation point.",
              "The answers are Ouch and ! because Hooray shows joy, Yum is for good-tasting food, and Bravo shows praise. A comma, a colon or a semicolon would not go before a new sentence."
            ],
            misconception: "A common mix-up is using a comma before a capital letter. A comma goes with a small letter, and an exclamation point goes with a capital letter.",
            why: "The answers are Ouch and !. Ouch shows pain from hot soup, and an exclamation point ends the interjection before the new sentence that starts with a capital letter. The other words show joy, taste or praise, and the other marks cannot end a feeling word."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM4-6-S01",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: [],
      prompt: "Which feeling does each word show?",
      cols: ["Fright","Disgust","Praise"],
      rows: [
        {
          text: "Eek!",
          answer: 0
        },
        {
          text: "Yuck!",
          answer: 1
        },
        {
          text: "Bravo!",
          answer: 2
        },
        {
          text: "Yikes!",
          answer: 0
        },
        {
          text: "Ew!",
          answer: 1
        }
      ],
      clue: "Picture a moment when someone would call out each word.",
      hints: [
        "Picture a moment when someone would call out each word.",
        "Sort the words you know first, then use the same picture for the rest.",
        "Bravo is said to a player who did well, and nobody cheers a snake."
      ],
      how: [
        "Picture a moment when each word would be said.",
        "Eek and Yikes show fear, Yuck and Ew show disgust, and Bravo shows praise.",
        "Put every row into one of the three columns."
      ],
      misconception: "A common mix-up is sorting by how loud a word sounds. Think about the feeling it shows.",
      why: "Eek and Yikes show fright, Yuck and Ew show disgust, and Bravo shows praise.",
      like: ["SK-GUM4-6-P3"]
    },
    {
      id: "SK-GUM4-6-S02",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: [],
      prompt: "Select the two lines that hold an interjection.",
      pick: 2,
      choices: [
        {
          text: "Aha! I found the missing sock.",
          correct: true
        },
        {
          text: "Hmm, the box feels very light.",
          correct: true
        },
        {
          text: "The kitten slept on the warm blanket."
        },
        {
          text: "Our team practices every Tuesday after school."
        },
        {
          text: "We painted the fence last weekend."
        }
      ],
      clue: "Check the opening word of every line for a word that is only a feeling.",
      hints: [
        "Check the opening word of every line for a word that is only a feeling.",
        "A word like that can stand alone, and a mark keeps it apart from what comes next.",
        "A kitten sleeping tells what happened, and that line has no feeling word."
      ],
      how: [
        "Look at the start of each line for a feeling word that is followed by a mark.",
        "The answers are \"Aha! I found the missing sock.\" and \"Hmm, the box feels very light.\" Aha shows that the writer just figured something out, and Hmm shows a thinking pause.",
        "The other lines tell about a cat, a team and a fence, but none has a feeling word."
      ],
      misconception: "A common mix-up is picking a line because it sounds lively. An interjection is a feeling word.",
      why: "The answers are \"Aha! I found the missing sock.\" and \"Hmm, the box feels very light.\" Aha shows sudden discovery, and Hmm shows a thinking pause, and a mark follows each. The other lines only tell what happened.",
      like: ["SK-GUM4-6-P4"]
    },
    {
      id: "SK-GUM4-6-S03",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: ["p4"],
      prompt: "Why does the monkey line in the zoo draft need a change before it goes up on the classroom wall?",
      choices: [
        {
          text: "Eek expresses fright, yet nothing splits it from the monkey words, so a ! or a , belongs there.",
          correct: true
        },
        {
          text: "Eek is complete on its own, so a ! or a , would only slow the reader down before the monkey words."
        },
        {
          text: "Eek asks the reader something about the monkey, so a ? belongs right there and nothing else."
        },
        {
          text: "Eek repeats what a person said aloud, so it must be placed inside quotation marks for every reader."
        }
      ],
      clue: "Think about how a word that is only a feeling gets split off from the rest.",
      hints: [
        "Think about how a word that is only a feeling gets split off from the rest.",
        "Read lines 3 and 5 of the draft, and see what stands right after the first word in each.",
        "The writer reports what happened and asks nothing, so a symbol for asking cannot be right."
      ],
      how: [
        "Read sentence 4: Eek the monkey grabbed my hat.",
        "Eek expresses fear, but the next words run right into it.",
        "A ! or a , splits it off. The answer is \"Eek expresses fright, yet nothing splits it from the monkey words, so a ! or a , belongs there.\""
      ],
      misconception: "A common mix-up is thinking a feeling word needs nothing after it. It must be set off from the rest.",
      why: "The answer is \"Eek expresses fright, yet nothing splits it from the monkey words, so a ! or a , belongs there.\" Eek expresses fright, and a mark after it splits it from the rest of the sentence. An exclamation point or a comma would both work.",
      like: ["SK-GUM4-6-C03"]
    },
    {
      id: "SK-GUM4-6-S04",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: ["p4"],
      prompt: "Pick the line that corrects the draft's tenth sentence.",
      text: "Zoo trip: {0}",
      slots: [
        {
          options: [
            "Bravo! the keeper made the seals clap their flippers.",
            "Bravo! The keeper made the seals clap their flippers.",
            "Bravo, The keeper made the seals clap their flippers.",
            "Bravo The keeper made the seals clap their flippers."
          ],
          answer: 1
        }
      ],
      clue: "Study how each line splits the first word from the next one.",
      hints: [
        "Study how each line splits the first word from the next one.",
        "Look at the letter that opens the word after the mark in each line.",
        "One line has no mark at all after the first word, and a feeling word needs one."
      ],
      how: [
        "Bravo is the interjection, and it shows praise.",
        "An exclamation point ends it, so the keeper sentence starts with a capital letter.",
        "The answer is \"Bravo! The keeper made the seals clap their flippers.\" The others use a small letter after the exclamation point, a capital after a comma, or no mark."
      ],
      misconception: "A common mix-up is trusting the mark and skipping the next letter. Check both.",
      why: "The answer is Bravo! The keeper made the seals clap their flippers.. A new sentence follows the exclamation point, so The needs a capital T. The other lines use a small t, a capital after a comma, or no mark.",
      like: ["SK-GUM4-6-C04"]
    },
    {
      id: "SK-GUM4-6-S05",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: ["p5"],
      prompt: "Tap the numbered line in the garden draft that breaks a rule for marks.",
      targets: ["p5:1:2","p5:2:1","p5:2:2","p5:3:1","p5:3:2"],
      answer: ["p5:3:1"],
      pick: 1,
      clue: "Spot the feeling word in every shown sentence, then check what follows it.",
      hints: [
        "Spot the feeling word in every shown sentence, then check what follows it.",
        "For each one, check the mark, then how the next word begins.",
        "Sentence 6 has an exclamation point and a capital letter after it, so it is written correctly."
      ],
      how: [
        "Spot the feeling word in every shown sentence and check what follows it.",
        "Sentences 2, 6 and 9 use an exclamation point and a capital letter. Sentence 5 uses a comma and the word I.",
        "In sentence 8, a capital T follows a comma, so it is the answer."
      ],
      misconception: "A common mix-up is picking the sentence with a comma. A comma is fine when a small letter follows.",
      why: "The answer is sentence 8: \"Whew, The weeds were pulled before dinner.\" Sentence 8 has a capital T after a comma, and that does not go together. The other shown sentences have a mark and a matching letter.",
      like: ["SK-GUM4-6-C05"]
    },
    {
      id: "SK-GUM4-6-S06",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: ["p5"],
      prompt: "Work through A, then through B.",
      partA: {
        prompt: "Pick the right fix for line 4 of the garden draft.",
        choices: [
          {
            text: "Oops! The green watering can tipped over onto the carrot seeds again.",
            correct: true
          },
          {
            text: "Oops! the green watering can tipped over onto the carrot seeds again."
          },
          {
            text: "Oops The green watering can tipped over onto the carrot seeds again."
          },
          {
            text: "oops! The green watering can tipped over onto the carrot seeds again."
          }
        ]
      },
      partB: {
        prompt: "Pick the rule that backs that fix.",
        choices: [
          {
            text: "What follows a ! is a fresh sentence, and a fresh sentence opens with a capital.",
            correct: true
          },
          {
            text: "What follows a ! continues the old sentence, and its next word keeps a small letter."
          },
          {
            text: "A word that expresses a feeling is never followed by any symbol at all."
          },
          {
            text: "A ! is reserved for anger, so the version shows that the gardener is mad."
          }
        ]
      },
      clue: "For Part A, compare the opening word, the mark and the next word in each version. For Part B, find the rule that matches the fix.",
      hints: [
        "For Part A, compare the opening word, the mark and the next word in each version. For Part B, find the rule that matches the fix.",
        "In Part B, ask what a ! does to whatever comes next.",
        "The first word in the draft already has a capital O, so a version with a small first letter is not the fix."
      ],
      how: [
        "Part A: the draft has no mark and a small t. The answer is \"Oops! The green watering can tipped over onto the carrot seeds again.\"",
        "The other versions leave out the capital T, leave out the mark, or start with a small o.",
        "Part B: the rule is \"What follows a ! is a fresh sentence, and a fresh sentence opens with a capital.\""
      ],
      misconception: "A common mix-up is adding only the mark. The next sentence also needs a capital letter.",
      why: "Part A: \"Oops! The green watering can tipped over onto the carrot seeds again.\" Part B: \"What follows a ! is a fresh sentence, and a fresh sentence opens with a capital.\" Part A: Oops! The green watering can tipped over onto the carrot seeds again. has a mark and a capital T. Part B: a new sentence follows an exclamation point, so it opens with a capital letter.",
      like: ["SK-GUM4-6-C06"]
    },
    {
      id: "SK-GUM4-6-S07",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: ["p6"],
      prompt: "Which word opens the third line of the game story best?",
      text: "{0} I tripped over my own shoelace near the corner flag.",
      slots: [
        {
          options: ["Yay!","Oh no!","Aha!","Bravo!"],
          answer: 1
        }
      ],
      clue: "Check the words after the blank and decide how the speaker feels.",
      hints: [
        "Check the words after the blank and decide how the speaker feels.",
        "Think how you would feel after such a fall, and match that to a word.",
        "Aha is said when something is suddenly figured out, and nothing is figured out here."
      ],
      how: [
        "Look at what follows the blank: the player tripped over a shoelace.",
        "That is an embarrassing accident.",
        "The answer is Oh no! Yay shows joy, Aha shows a sudden discovery, and Bravo shows praise."
      ],
      misconception: "A common mix-up is choosing Yay because it is game day. Match the word to what happened.",
      why: "The answer is Oh no!. A trip over a shoelace is an accident, so Oh no fits. Yay shows joy, Aha shows a sudden discovery, and Bravo shows praise.",
      like: ["SK-GUM4-6-C07"]
    },
    {
      id: "SK-GUM4-6-S08",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: ["p6"],
      prompt: "Which numbered line in this game draft opens with a word that clashes with what truly happens on grass during soccer play?",
      targets: ["p6:1:2","p6:2:1","p6:2:2","p6:2:3","p6:3:2"],
      answer: ["p6:2:3"],
      pick: 1,
      clue: "Work out what each shown sentence reports, then ask how the speaker feels.",
      hints: [
        "Work out what each shown sentence reports, then ask how the speaker feels.",
        "See whether the opening word of each sentence carries that same feeling.",
        "Sentence 6 is about cold orange slices that taste fresh, and Yum is for good-tasting food."
      ],
      how: [
        "Decide what each shown sentence says and how the speaker feels.",
        "Whoa fits a fast team, Oh fits a surprise, Yum fits fresh fruit, and Yay fits a win.",
        "In sentence 7, Ow shows pain, but scoring a goal does not hurt, so it is the answer."
      ],
      misconception: "A common mix-up is picking a sentence because it sounds exciting. Check whether the word fits the event.",
      why: "The answer is sentence 7: \"Ow! My team scored a goal in the last minute.\" Ow shows pain, but a goal in the last minute is not painful, so the word does not fit. The other shown sentences have words that match what happens.",
      like: ["SK-GUM4-6-C08"]
    },
    {
      id: "SK-GUM4-6-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: ["p4"],
      prompt: "The zoo draft opens line 3 with Hooray. Judge that word choice.",
      choices: [
        {
          text: "It misses: a cheer clashes with a balloon floating off; an Aw would suit better.",
          correct: true
        },
        {
          text: "It works: a lively opener always suits a line, whatever follows it on the printed page."
        },
        {
          text: "It works: the ! after it shows delight, so the ! alone settles the mood."
        },
        {
          text: "It fails: a balloon is too small an event for an author to react to in a story."
        }
      ],
      clue: "Ask what happened to the balloon and how a child would feel about it.",
      hints: [
        "Ask what happened to the balloon and how a child would feel about it.",
        "Compare the feeling that Hooray shows with the feeling in what follows it.",
        "Kids do react to a lost balloon, so a choice that says nobody reacts cannot be right."
      ],
      how: [
        "Read sentence 3: Hooray! My balloon popped, and the string flew away.",
        "Hooray shows joy, but losing a balloon is sad.",
        "The answer is \"It misses: a cheer clashes with a balloon floating off; an Aw would suit better.\""
      ],
      misconception: "A common mix-up is letting the mark choose the feeling. The word itself has to match the event.",
      why: "The answer is \"It misses: a cheer clashes with a balloon floating off; an Aw would suit better.\" Hooray shows joy, but a balloon that popped and flew off is a loss, so the feeling does not match. A word such as Aw or Oh no suits it better.",
      like: ["SK-GUM4-6-C09"]
    },
    {
      id: "SK-GUM4-6-S10",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: [],
      prompt: "Select the TWO lines that are punctuated and capitalized correctly.",
      pick: 2,
      choices: [
        {
          text: "Whoa! That cat jumped really high.",
          correct: true
        },
        {
          text: "Hmm, I wonder where my keys went.",
          correct: true
        },
        {
          text: "Aha! the answer is in the book."
        },
        {
          text: "Ugh The bus is late again."
        },
        {
          text: "Yippee, We get a day off at the end of this week."
        }
      ],
      clue: "For every line, look at the mark after the first word and the letter that follows it.",
      hints: [
        "For every line, look at the mark after the first word and the letter that follows it.",
        "Keep the lines where the mark and the next letter belong together.",
        "One line has no mark after its first word, and a feeling word needs one."
      ],
      how: [
        "Check the mark after the first word and the letter that follows it in every line.",
        "In \"Whoa! That cat jumped really high.\" a capital letter follows the exclamation point. In \"Hmm, I wonder where my keys went.\" the word I is always a capital.",
        "The other lines use a small letter after an exclamation point, skip the mark, or use a capital after a comma."
      ],
      misconception: "A common mix-up is trusting any line with a mark. Check the letter after it.",
      why: "The answers are \"Whoa! That cat jumped really high.\" and \"Hmm, I wonder where my keys went.\" Whoa is followed by an exclamation point and a capital T, and Hmm is followed by a comma and the word I. The other lines have a small letter after an exclamation point, no mark, or a capital after a comma.",
      like: ["SK-GUM4-6-C10"]
    },
    {
      id: "SK-GUM4-6-S11",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: [],
      stem: "Line A: Whoa! All the lights in the gym went dark. Line B: Hmm, all the lights in the gym went dark.",
      prompt: "Compare the opening words of the two lines. What is true?",
      choices: [
        {
          text: "Each one reacts to the blackout; Whoa is a loud jolt, while Hmm is a soft ponder.",
          correct: true
        },
        {
          text: "Each one reacts to the blackout; Hmm is a loud jolt, while Whoa is a soft ponder."
        },
        {
          text: "Each one reports an action; Whoa names the lights, while Hmm names the blackout."
        },
        {
          text: "Each one is a whole sentence; only Line A begins with a capital first letter."
        }
      ],
      clue: "Find the opening word in each line and decide what it shows.",
      hints: [
        "Find the opening word in each line and decide what it shows.",
        "Compare how big each feeling is, and see how each line sets the opening word apart.",
        "Both lines start with a capital letter, so a choice about only one of them cannot be right."
      ],
      how: [
        "The opening words are Whoa in Line A and Hmm in Line B.",
        "Whoa shows big surprise, and an exclamation point follows it. Hmm shows quiet wondering, and a comma follows it.",
        "The answer is \"Each one reacts to the blackout; Whoa is a loud jolt, while Hmm is a soft ponder.\""
      ],
      misconception: "A common mix-up is thinking a feeling word names a thing in the line. It shows a feeling.",
      why: "The answer is \"Each one reacts to the blackout; Whoa is a loud jolt, while Hmm is a soft ponder.\" Both words react to the lights going out. Whoa shows big surprise, so an exclamation point follows it, and Hmm shows quiet wondering, so a comma follows it.",
      like: ["SK-GUM4-6-C11"]
    },
    {
      id: "SK-GUM4-6-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: ["p6"],
      prompt: "Select the way to write the fourth sentence of the game draft correctly.",
      text: "Soccer story: {0}",
      slots: [
        {
          options: [
            "Yikes the ball flew right at my face.",
            "Yikes! the ball flew right at my face.",
            "Yikes! The ball flew right at my face.",
            "Yikes, The ball flew right at my face."
          ],
          answer: 2
        }
      ],
      clue: "Compare what comes right after Yikes in each line, and how the next word opens.",
      hints: [
        "Compare what comes right after Yikes in each line, and how the next word opens.",
        "Find the line where the mark and the next letter belong together.",
        "The line copied from the draft has no mark after Yikes, and a feeling word needs one."
      ],
      how: [
        "Yikes is the interjection, and it shows alarm.",
        "An exclamation point sets it off, so the next sentence opens with a capital letter.",
        "The answer is \"Yikes! The ball flew right at my face.\" The others skip the mark, use a small letter after an exclamation point, or use a capital after a comma."
      ],
      misconception: "A common mix-up is leaving the draft alone because it reads smoothly. A feeling word still needs a mark.",
      why: "The answer is Yikes! The ball flew right at my face.. Yikes needs a mark, and a new sentence after an exclamation point opens with a capital letter. The other lines skip the mark, use a small letter after an exclamation point, or use a capital after a comma.",
      like: ["SK-GUM4-6-C12"]
    },
    {
      id: "SK-GUM4-6-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: ["p6"],
      prompt: "Something is off in line eight of the soccer story. Select the TWO versions that put it right.",
      pick: 2,
      choices: [
        {
          text: "Phew! The final whistle blew before they could tie it.",
          correct: true
        },
        {
          text: "Phew, the final whistle blew before they could tie it.",
          correct: true
        },
        {
          text: "Phew The final whistle blew before they could tie it."
        },
        {
          text: "Phew! the final whistle blew before they could tie it."
        },
        {
          text: "Phew, The final whistle blew before they could tie it."
        }
      ],
      clue: "A repair may swap the mark, as long as the next letter goes with it. Check each version.",
      hints: [
        "A repair may swap the mark, as long as the next letter goes with it. Check each version.",
        "Keep the versions where the mark after Phew and the next letter belong together.",
        "One version leaves out the mark after Phew, and a feeling word needs one."
      ],
      how: [
        "The draft has a comma and a capital T, and those do not go together.",
        "One repair swaps the comma for an exclamation point, so the capital T is right. The other keeps the comma and uses a small t.",
        "The answers are \"Phew! The final whistle blew before they could tie it.\" and \"Phew, the final whistle blew before they could tie it.\" The others skip the mark, use a small letter after an exclamation point, or copy the draft."
      ],
      misconception: "A common mix-up is thinking only the mark may change. The next letter may change, too.",
      why: "The answers are \"Phew! The final whistle blew before they could tie it.\" and \"Phew, the final whistle blew before they could tie it.\" An exclamation point goes with a capital T, and a comma goes with a small t. The other versions skip the mark, use a small letter after an exclamation point, or copy the draft.",
      like: ["SK-GUM4-6-C13"]
    },
    {
      id: "SK-GUM4-6-S14",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: [],
      prompt: "Which line pairs its opening word with a matching feeling?",
      choices: [
        {
          text: "Ew! A slug crawled across my sandwich.",
          correct: true
        },
        {
          text: "Yay! A slug crawled across my sandwich."
        },
        {
          text: "Yippee! My tooth aches terribly today."
        },
        {
          text: "Whee! The rotten eggs reek badly."
        }
      ],
      clue: "Read what happens in each line and decide how a person would feel.",
      hints: [
        "Read what happens in each line and decide how a person would feel.",
        "Match each feeling word to the feeling it shows, then compare it with the event.",
        "A sore tooth hurts, and Yippee shows joy, so one line has a word that does not fit."
      ],
      how: [
        "Read what happens in each line and decide how a person would feel.",
        "A slug on a sandwich is gross, and Ew shows disgust.",
        "The answer is \"Ew! A slug crawled across my sandwich.\" Yay and Yippee show joy, and Whee shows delight."
      ],
      misconception: "A common mix-up is picking the most cheerful word. The word must match the event.",
      why: "The answer is \"Ew! A slug crawled across my sandwich.\" A slug on a sandwich is gross, so Ew fits. Yay, Yippee and Whee show joy or delight, and none of them fit their lines.",
      like: ["SK-GUM4-6-C14"]
    },
    {
      id: "SK-GUM4-6-S15",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-interjections"
      ],
      passages: [],
      prompt: "Pick a reaction word and its ending mark for the line below.",
      text: "{0}{1} That lemon tart tastes far too sour for me.",
      slots: [
        {
          options: ["Yuck","Hurray","Aha","Yay"],
          answer: 0
        },
        {
          options: ["!","?",":",";"],
          answer: 0
        }
      ],
      clue: "For the first blank, think how a person feels about a tart that is far too sour. For the second, see which letter follows the blank.",
      hints: [
        "For the first blank, think how a person feels about a tart that is far too sour. For the second, see which letter follows the blank.",
        "A capital letter after the blank means a new sentence starts there.",
        "Aha is said when something is suddenly figured out, and nothing is figured out in a sour tart."
      ],
      how: [
        "A tart that is far too sour is gross, and Yuck shows disgust.",
        "The next word, That, is capitalized, so a fresh sentence starts after the first one ends with an exclamation point.",
        "The answers are Yuck and ! because Hurray and Yay show joy, and Aha shows a discovery. A question mark, a colon or a semicolon would not end a feeling word before a new sentence."
      ],
      misconception: "A common mix-up is ending a feeling word with a colon. A colon does not end a feeling word.",
      why: "The answers are Yuck and !. Yuck shows disgust at a sour tart, and an exclamation point ends the feeling word before the new sentence. The other words show joy or discovery, and the other marks do not end a feeling word.",
      like: ["SK-GUM4-6-C15"]
    }
  ],
  addons: {
    "SK-GUM4-6-P1": {
      hints: [
        "Look for a feeling word that can stand by itself.",
        "Look at the first word, and ask whether that word shows how someone feels.",
        "Roller is a word for a ride, and it does not show a feeling."
      ],
      how: [
        "An interjection shows a feeling and can stand by itself.",
        "Wow shows surprise, and an exclamation point follows it.",
        "The answer is Wow. Roller, tall and That do not show a feeling by themselves."
      ],
      misconception: "A common mix-up is choosing the word that describes the ride. An interjection shows a feeling."
    },
    "SK-GUM4-6-P2": {
      hints: [
        "Check what the sentence goes on to say and think about how you would feel.",
        "Match each word to a feeling, and compare those feelings with what happened.",
        "Yum is for good-tasting food, and the ice cream fell on the ground."
      ],
      how: [
        "The ice cream cone fell on the ground, which is sad.",
        "Match the feeling to a word.",
        "The answer is Oh no! Hooray and Bravo show joy or praise, and Yum is for good-tasting food."
      ],
      misconception: "A common mix-up is choosing Yum because ice cream is food. Match the word to what happened."
    },
    "SK-GUM4-6-P3": {
      hints: [
        "For each row, think about when you would say the word out loud.",
        "Sort the words you know first. Then use the same question for the rest.",
        "Ouch shows pain, and a small mistake is not the same as being hurt."
      ],
      how: [
        "Think about when each word is said.",
        "Ouch and Ow are for pain, Hooray and Yay are for joy, and Oops is for a small mistake.",
        "Sort every row into one of the three columns."
      ],
      misconception: "A common mix-up is matching by how a word sounds. Think about the feeling."
    },
    "SK-GUM4-6-P4": {
      hints: [
        "Find a feeling word near the start of each sentence.",
        "Check what stands right after that word in each sentence.",
        "A puppy barking is only an action, and that sentence has no feeling word."
      ],
      how: [
        "Look for a feeling word that is followed by a mark.",
        "Yikes shows alarm, and Oh shows mild surprise. The answers are \"Yikes! The pot boiled over.\" and \"Oh, I left my book at school.\"",
        "The other sentences only report events, and none of them has a feeling word."
      ],
      misconception: "A common mix-up is picking a sentence with an exciting action. An interjection is a feeling word."
    },
    "SK-GUM4-6-P5": {
      hints: [
        "Check the capital letter, the mark and the letter after the mark in each choice.",
        "After an exclamation point, a new sentence begins. After a comma, the sentence goes on.",
        "A comma followed by a capital W does not go together, because the sentence would go on."
      ],
      how: [
        "Look at the first letter, the mark and the next letter.",
        "Hooray starts with a capital letter, and We starts with a capital letter after the exclamation point.",
        "The answer is \"Hooray! We won the game.\" The others use a small letter after an exclamation point, a small first letter, or a capital after a comma."
      ],
      misconception: "A common mix-up is changing only the mark. Check the letter after it, too."
    }
  },
  /* B8a:core:end */
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
      "Am, is, are, was and were are often linking verbs. They can be helping verbs too, but in this lesson you will see them as linking verbs. Seem and become can be linking verbs as well: The puppy seems tired.",
      "Right after will, can, could or should, the main verb stays plain, with no ending: We will paint. With has, have or had, the main verb usually ends in -ed: We have painted.",
      "A linking verb must agree with its subject. Use is for one thing and are for more than one: The path is wet. The paths are wet."
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
    },
    {
      show: ["Mia has paint her bedroom wall."],
      ask: "What is wrong, and how can you fix it?",
      steps: [
        "Has is the helping verb, and paint is the main verb.",
        "After has, the main verb needs the form that ends in -ed.",
        "Change paint to painted so the helper and the main verb go together."
      ],
      answer: "Mia has painted her bedroom wall."
    }
  ],
  parent: "At dinner, take turns saying one sentence with will or can and one sentence with is or seems. Then name the helping verb and the linking verb in each other's sentences.",
  passages: [
    /* B8a:passages:start */
    {
      id: "p1",
      title: "Our Garden Club",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Our school garden club meets after lunch on Tuesdays in the back yard.",
          "(2) We will plant carrots and beans in the new rows this week.",
          "(3) The soil is soft after the heavy rain.",
          "(4) Ms. Reyes says we can bring a small shovel from home."
        ],
        [
          "(5) The beans is green and tall in the front row.",
          "(6) We should wear gloves while we dig in the dirt.",
          "(7) My friends are happy about the bright new seeds."
        ],
        [
          "(8) Tomorrow, we will watered the plants before the bell rings.",
          "(9) The carrots seem tiny, but they will grow quickly.",
          "(10) By now, our club has plant ten rows of corn along the fence.",
          "(11) We water the garden each morning and pull the weeds every afternoon.",
          "(12) The cooks will use our tomatoes in a tasty salad for the whole school."
        ]
      ]
    },
    {
      id: "p2",
      title: "The Town Book Fair",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Today is the town book fair at the public library on Main Street.",
          "(2) The long tables are full of old picture books and new chapter books.",
          "(3) My mom says I can pick three books to take home.",
          "(4) The line for the face painting seem long right now."
        ],
        [
          "(5) I should saved some money for the bake sale near the front door.",
          "(6) The lemon cookies are fresh and sweet.",
          "(7) A librarian will read a funny story at noon."
        ],
        [
          "(8) We can sit on the soft rug by the big window.",
          "(9) The story becomes silly when the pirate loses his hat in the sea.",
          "(10) The kids laugh and clap after every page.",
          "(11) I buy two books and a lemon cookie before we leave.",
          "(12) We walk home with full bags and happy faces."
        ]
      ]
    },
    {
      id: "p3",
      title: "A Hike by the Lake",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Today, my uncle takes us hiking on the trail by the blue lake.",
          "(2) The water is clear and cold under the morning sun.",
          "(3) We can see tiny fish near the flat rocks.",
          "(4) My cousins is ready to swim before lunch."
        ],
        [
          "(5) My uncle says we should stay near the shore.",
          "(6) The sand becomes warm by noon.",
          "(7) We can build a castle with this wet sand."
        ],
        [
          "(8) My cousins has built a huge castle by the lake.",
          "(9) A big wave will crash over it soon.",
          "(10) Now the sky is orange and pink above the pine trees.",
          "(11) We pack our towels and walk back to the car.",
          "(12) My sister falls asleep on the long ride home."
        ]
      ]
    },
    {
      id: "p4",
      title: "Science Fair Day",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Our class holds a science fair in the big gym on Friday afternoon.",
          "(2) Our team will show a volcano model to the judges at the front table.",
          "(3) The gym is loud and crowded with families.",
          "(4) Mr. Cole says each team can ask the judges one question."
        ],
        [
          "(5) The posters is bright and colorful along the wall.",
          "(6) Every speaker should talk slowly and clearly into the microphone.",
          "(7) The judges are kind about our paper model."
        ],
        [
          "(8) Soon, our volcano will exploded for the whole crowd.",
          "(9) The volcano seems small, but it will erupt with red foam.",
          "(10) Today, the red team has earn a gold star from the judges.",
          "(11) We cheer and hug each other near the exit.",
          "(12) The judges give every team a shiny sticker to wear home."
        ]
      ]
    },
    {
      id: "p5",
      title: "Pancake Sunday",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) This Sunday, my dad cooks pancakes in the sunny kitchen for the whole family.",
          "(2) The table is full of fruit and warm syrup.",
          "(3) Mom says I can crack three eggs into the big bowl.",
          "(4) At this moment, the stack of pancakes become taller and taller."
        ],
        [
          "(5) My brother could stirred the batter slowly with the wooden spoon.",
          "(6) The blueberry pancakes are fluffy and light.",
          "(7) My sister will pour the juice at the table."
        ],
        [
          "(8) We can sit near the window and talk about the week.",
          "(9) The syrup seems sticky when it touches the plate.",
          "(10) My brothers giggle and tap their forks on the glass.",
          "(11) We eat until our plates are empty.",
          "(12) Dad washes the dishes and wipes the counter before he sits down."
        ]
      ]
    },
    {
      id: "p6",
      title: "Soccer Practice",
      byline: "A third grader's draft",
      genre: "Student draft (informational)",
      draft: true,
      paragraphs: [
        [
          "(1) Today, our coach takes us to the big field behind the school.",
          "(2) The grass is green and wet after the morning rain.",
          "(3) We can see tiny puddles near the goal.",
          "(4) The new cones is bright orange and easy to see from far away."
        ],
        [
          "(5) Our coach says we should stay near the sideline.",
          "(6) The ball becomes muddy by noon.",
          "(7) We can pass it along the white chalk line."
        ],
        [
          "(8) The tall goalie have blocked a long shot toward the far net.",
          "(9) The next kick will fly high over the bar.",
          "(10) Now the sky is gray and cloudy over the bleachers.",
          "(11) We pack our cones and walk back to the bus.",
          "(12) My friend falls asleep on the long ride home."
        ]
      ]
    }
    /* B8a:passages:end */
  ],
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
            ref: "SK-GUM4-7-P3"
          },
          {
            ref: "SK-GUM4-7-P5"
          },
          {
            id: "SK-GUM4-7-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: ["p1"],
            prompt: "Choose the way to write sentence 8 that fixes the verb mistake.",
            text: "Garden draft: {0}",
            slots: [
              {
                options: [
                  "Tomorrow, we will watered the plants before the bell rings.",
                  "Tomorrow, we will water the plants before the bell rings.",
                  "Tomorrow, we will waters the plants before the bell rings.",
                  "Tomorrow, we will watering the plants before the bell rings."
                ],
                answer: 1
              }
            ],
            clue: "Look at the helping verb will, and think about the form a main verb takes right after it.",
            hints: [
              "Look at the helping verb will, and think about the form a main verb takes right after it.",
              "Compare the word that follows will in each choice, and check which form fits after a helping verb.",
              "The choice that ends in -ing does not fit after will, because it would need a different helper."
            ],
            how: [
              "Find the helping verb: will. The main verb is the action word after it.",
              "After will, the main verb stays in its plain form, with no -ed, -s or -ing ending.",
              "The answer is \"Tomorrow, we will water the plants before the bell rings.\" The other choices add -ed, -s or -ing after will."
            ],
            misconception: "A common mix-up is adding -ed to a verb that follows will. Will already shows the time.",
            why: "The answer is Tomorrow, we will water the plants before the bell rings.. After the helping verb will, the main verb stays in its plain form, so water is right. The other choices add -ed, -s or -ing after will."
          },
          {
            id: "SK-GUM4-7-C04",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: ["p1"],
            prompt: "Select the ONE of sentences 2, 3, 4, 6 and 12 that has a linking verb.",
            targets: ["p1:1:2","p1:1:3","p1:1:4","p1:2:2","p1:3:5"],
            answer: ["p1:1:3"],
            pick: 1,
            clue: "Find the verb in each shown sentence, then ask whether it helps a verb or links the subject.",
            hints: [
              "Find the verb in each shown sentence, then ask whether it helps a verb or links the subject.",
              "A helping verb comes right before another verb. A linking verb ties the subject to a word that describes it.",
              "Sentence 6 has should right before wear, so its verb helps another verb, not a describing word."
            ],
            how: [
              "Spot the verb in every shown sentence and check what follows it.",
              "Will plant, can bring, should wear and will use each have a helping verb before a main verb.",
              "In sentence 3, is links the soil to soft, a word that describes it, so it is the answer."
            ],
            misconception: "A common mix-up is picking a sentence because its verb is short. Check what follows the verb.",
            why: "The answer is sentence 3: \"The soil is soft after the heavy rain.\" Is links the soil to soft, a word that describes it. The other shown sentences have a helping verb before a main verb: will plant, can bring, should wear and will use."
          },
          {
            id: "SK-GUM4-7-C05",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: ["p1"],
            prompt: "A classmate says seem in sentence 9 shows an action. What is the best response?",
            choices: [
              {
                text: "Seem shows no action; it links the carrots to tiny, so it is a linking verb.",
                correct: true
              },
              {
                text: "Seem shows an action, because it tells what the carrots do while they sit quietly in the dark soil."
              },
              {
                text: "Seem is a helping verb, because it helps the word tiny tell more about the carrots in the row."
              },
              {
                text: "Seem is not a verb, because only words that show motion can be verbs in a sentence."
              }
            ],
            clue: "Ask whether the carrots actually do anything in the first part of sentence 9.",
            hints: [
              "Ask whether the carrots actually do anything in the first part of sentence 9.",
              "Look at the last word before the comma, and think about what job it has for the carrots.",
              "A helper comes before another verb, and tiny is not a verb."
            ],
            how: [
              "Read sentence 9: The carrots seem tiny, but they will grow quickly.",
              "Nothing happens in the first part. Tiny describes the carrots, and seem connects the two.",
              "The answer is \"Seem shows no action; it links the carrots to tiny, so it is a linking verb.\""
            ],
            misconception: "A common mix-up is thinking every verb shows an action. A linking verb only connects words.",
            why: "The answer is \"Seem shows no action; it links the carrots to tiny, so it is a linking verb.\" Seem shows no action. It links the carrots to tiny, a word that describes them, so it is a linking verb. Tiny is not a verb."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM4-7-C06",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: ["p1"],
            prompt: "This item has two parts. Begin with Part A and then go on to Part B.",
            partA: {
              prompt: "Line 10 of the garden draft has a verb error. Which rewrite repairs it?",
              choices: [
                {
                  text: "By now, our club has planted ten rows of corn along the fence.",
                  correct: true
                },
                {
                  text: "By now, our club has plants ten rows of corn along the fence."
                },
                {
                  text: "By now, our club have plant ten rows of corn along the fence."
                },
                {
                  text: "By now, our club will planted ten rows of corn along the fence."
                }
              ]
            },
            partB: {
              prompt: "Which fact explains why the correct revision is right?",
              choices: [
                {
                  text: "Has is a helping verb, so the main verb after it needs its past form, planted.",
                  correct: true
                },
                {
                  text: "Has is a linking verb, so the word after it must describe the club."
                },
                {
                  text: "Has is a helping verb, so the main verb after it stays in its plain form, plant."
                },
                {
                  text: "Has is the main verb, so the word after it can end in -s like a noun."
                }
              ]
            },
            clue: "For Part A, find the helping verb and the word that follows it. For Part B, find the fact that matches the change.",
            hints: [
              "For Part A, find the helping verb and the word that follows it. For Part B, find the fact that matches the change.",
              "Think about the form a main verb takes after has, have or had.",
              "Will points to the future, but sentence 10 starts with By now, so a choice with will does not fit."
            ],
            how: [
              "Part A: the draft has the helping verb has before the plain verb plant. The answer is \"By now, our club has planted ten rows of corn along the fence.\"",
              "The other choices add -s to the main verb, change has to have, or use will with the past form.",
              "Part B: the fact is \"Has is a helping verb, so the main verb after it needs its past form, planted.\""
            ],
            misconception: "A common mix-up is leaving the plain verb after has. Has, have and had go with the past form.",
            why: "Part A: \"By now, our club has planted ten rows of corn along the fence.\" Part B: \"Has is a helping verb, so the main verb after it needs its past form, planted.\" Part A: By now, our club has planted ten rows of corn along the fence. uses has with the past form planted. Part B: has is a helping verb, so the main verb after it needs its past form."
          },
          {
            id: "SK-GUM4-7-C07",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: ["p2"],
            prompt: "Choose the linking verb that completes sentence 4.",
            text: "The line for the face painting {0} long right now.",
            slots: [
              {
                options: ["seems","seem","seemed","seeming"],
                answer: 0
              }
            ],
            clue: "Decide what the sentence is about, and ask whether that is one thing or several.",
            hints: [
              "Decide what the sentence is about, and ask whether that is one thing or several.",
              "The words right now show when this is true, so check the time as well as the subject.",
              "Seeming ends in -ing, and it cannot stand alone as the verb in this sentence."
            ],
            how: [
              "The subject is line, which names one thing, and right now shows the present.",
              "A present-tense verb for one thing ends in -s.",
              "The answer is seems. Seem goes with more than one thing, seemed is for the past, and seeming cannot stand alone as the verb."
            ],
            misconception: "A common mix-up is picking the verb that sounds right after face painting. The subject is line, not painting.",
            why: "The answer is seems. The subject, line, names one thing, and right now shows the present, so seems fits. Seem goes with more than one thing, seemed is for the past, and seeming cannot stand alone as the verb."
          },
          {
            id: "SK-GUM4-7-C08",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: ["p2"],
            prompt: "Select the ONE of sentences 2, 6, 7, 9 and 10 that has a helping verb.",
            targets: ["p2:1:2","p2:2:2","p2:2:3","p2:3:2","p2:3:3"],
            answer: ["p2:2:3"],
            pick: 1,
            clue: "Spot the verb in every shown sentence and see which word follows.",
            hints: [
              "Spot the verb in every shown sentence and see which word follows.",
              "A helping verb comes before another verb. A linking verb ties the subject to a describing word.",
              "Sentence 9 tells that the story becomes silly, and silly is not a verb."
            ],
            how: [
              "Find the verb in each shown sentence and check the word after it.",
              "Are full, are fresh and becomes silly each connect a subject to a describing word. Laugh and clap are actions.",
              "In sentence 7, will comes right before the main verb read, so it is the answer."
            ],
            misconception: "A common mix-up is picking a sentence with an action verb. A helping verb comes before another verb.",
            why: "The answer is sentence 7: \"A librarian will read a funny story at noon.\" In sentence 7, will comes before the main verb read, so it is a helping verb. The other shown sentences have linking verbs or action verbs alone."
          },
          {
            id: "SK-GUM4-7-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: ["p2"],
            prompt: "A classmate says sentence 5 is right, because saved shows the money is already put away. Which response is best?",
            choices: [
              {
                text: "Should is a helping verb, so the main verb after it keeps its plain form, save.",
                correct: true
              },
              {
                text: "Should is a linking verb, so a describing word, saved, must come after it."
              },
              {
                text: "The sentence is right, because every main verb in a story needs -ed on the end."
              },
              {
                text: "Should is the main verb, so saved is only a word that tells how much money."
              }
            ],
            clue: "Find the helper in sentence 5 and think about what shape the next verb takes after it.",
            hints: [
              "Find the helper in sentence 5 and think about what shape the next verb takes after it.",
              "Compare saved with the verb that would follow a helper such as will or can.",
              "Saved is not a describing word in this sentence, because it tells the action."
            ],
            how: [
              "Read sentence 5: I should saved some money for the bake sale near the front door.",
              "Should is the helping verb, and the action word after it must keep its plain form.",
              "The answer is \"Should is a helping verb, so the main verb after it keeps its plain form, save.\""
            ],
            misconception: "A common mix-up is putting -ed on a verb to show the past. A verb after should stays plain.",
            why: "The answer is \"Should is a helping verb, so the main verb after it keeps its plain form, save.\" Should is a helping verb, so the main verb after it keeps its plain form: I should save some money. Adding -ed does not fit after should."
          },
          {
            id: "SK-GUM4-7-C10",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: [],
            prompt: "Choose the TWO sentences that have a helping verb.",
            pick: 2,
            choices: [
              {
                text: "Our team will practice after school.",
                correct: true
              },
              {
                text: "The goalie can catch fast shots.",
                correct: true
              },
              {
                text: "The field is wide and flat."
              },
              {
                text: "The bench seems wet this morning."
              },
              {
                text: "The coach was a strong swimmer last year."
              }
            ],
            clue: "Spot each verb and see what word follows it.",
            hints: [
              "Spot each verb and see what word follows it.",
              "A helping verb stands before another verb. A linking verb ties the subject to a word that names or describes it.",
              "In the sentence about the field, the word after the verb is not a verb."
            ],
            how: [
              "Find the verb in each sentence and check what comes after it.",
              "In \"Our team will practice after school.\" will comes before practice. In \"The goalie can catch fast shots.\" can comes before catch.",
              "In the other sentences, the verb ties the subject to a word that describes it or names it."
            ],
            misconception: "A common mix-up is choosing every sentence with a short verb. Check whether another verb follows.",
            why: "The answers are \"Our team will practice after school.\" and \"The goalie can catch fast shots.\" Will helps the main verb practice, and can helps the main verb catch. In the other sentences, is, seems and was link the subject to a word that describes it or names it."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM4-7-C11",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: [],
            stem: "Sentence A: Dad will cook. Sentence B: Dad is a cook.",
            prompt: "How are the verbs in the two sentences different?",
            choices: [
              {
                text: "In A, will helps the main verb cook; in B, is links Dad to a word that names him.",
                correct: true
              },
              {
                text: "In A, will links Dad to a word that names him; in B, is helps the main verb cook."
              },
              {
                text: "In both, the verb is a helping verb, because each comes before a word about Dad."
              },
              {
                text: "In both, the verb shows action, because each tells what Dad does in the kitchen."
              }
            ],
            clue: "Spot the verb in every line and see what word follows it.",
            hints: [
              "Spot the verb in every line and see what word follows it.",
              "Ask whether the next word is another verb or a name for Dad.",
              "Neither sentence tells an action that is done by is, so a choice about action for both cannot be right."
            ],
            how: [
              "The verbs are will in Sentence A and is in Sentence B.",
              "In A, cook is the action, and will comes before it. In B, a cook names Dad, and is connects the two.",
              "The answer is \"In A, will helps the main verb cook; in B, is links Dad to a word that names him.\""
            ],
            misconception: "A common mix-up is treating the same word, cook, as a verb in both. In B it names Dad.",
            why: "The answer is \"In A, will helps the main verb cook; in B, is links Dad to a word that names him.\" In A, will helps the main verb cook. In B, is links Dad to a cook, a word that names him."
          },
          {
            id: "SK-GUM4-7-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: ["p3"],
            prompt: "Pick the helping verb that fixes sentence 8.",
            text: "My cousins {0} built a huge castle by the lake.",
            slots: [
              {
                options: ["have","has","will","is"],
                answer: 0
              }
            ],
            clue: "Look at the subject, and decide whether it names one person or more than one.",
            hints: [
              "Look at the subject, and decide whether it names one person or more than one.",
              "Check the verb built after the blank, and think about which helpers go with that form.",
              "Is built would tell what happens to something, and the cousins are the ones who built it."
            ],
            how: [
              "The subject, cousins, names more than one person.",
              "Built is the past form of the main verb, so a helper such as has or have goes before it.",
              "The answer is have. Has goes with one person, will needs a plain verb after it, and is does not show who built the castle."
            ],
            misconception: "A common mix-up is choosing has because the castle is one thing. The helper goes with the cousins.",
            why: "The answer is have. The subject, cousins, names more than one person, so the helping verb have goes with it. Has goes with one person, will needs a plain verb after it, and is does not fit before built."
          },
          {
            id: "SK-GUM4-7-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: ["p3"],
            prompt: "The fourth line of the lake draft is wrong. Pick the TWO revisions that repair it and stay in the present.",
            pick: 2,
            choices: [
              {
                text: "My cousins are ready to swim before lunch.",
                correct: true
              },
              {
                text: "My cousin is ready to swim before lunch.",
                correct: true
              },
              {
                text: "My cousins is ready to swim before lunch."
              },
              {
                text: "My cousins was ready to swim before lunch."
              },
              {
                text: "My cousin are ready to swim before lunch."
              }
            ],
            clue: "A fix can change the verb or the subject, as long as the two match and the time stays the same.",
            hints: [
              "A fix can change the verb or the subject, as long as the two match and the time stays the same.",
              "Keep the revisions in which the subject and the linking verb go together in the present.",
              "One revision uses was, and was points to the past, so it breaks the present tense."
            ],
            how: [
              "The draft pairs a plural subject, cousins, with the singular verb is.",
              "One fix changes the verb to are. The other fix changes the subject to the singular cousin.",
              "The answers are \"My cousins are ready to swim before lunch.\" and \"My cousin is ready to swim before lunch.\" The others keep the draft, use the past, or mismatch the subject."
            ],
            misconception: "A common mix-up is thinking only the verb can change. The subject can change, too.",
            why: "The answers are \"My cousins are ready to swim before lunch.\" and \"My cousin is ready to swim before lunch.\" Cousins goes with are, and cousin goes with is. The other revisions keep the draft, use the past with was, or pair a singular subject with are."
          },
          {
            id: "SK-GUM4-7-C14",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: [],
            prompt: "Which sentence has a linking verb?",
            choices: [
              {
                text: "The soup seems too salty for Grandpa.",
                correct: true
              },
              {
                text: "Dad will stir the soup again after lunch."
              },
              {
                text: "We can eat in about ten minutes."
              },
              {
                text: "Mom has cooked the rice already today."
              }
            ],
            clue: "Find the verb in each sentence, and check the word that follows it.",
            hints: [
              "Find the verb in each sentence, and check the word that follows it.",
              "A linking verb ties the subject to a word that describes it, and it does not come before another verb.",
              "Stir is a verb, so the sentence with will before it has a helper, not a link."
            ],
            how: [
              "Find the verb in each sentence and check the word after it.",
              "In the first sentence, seems connects the soup to salty, a word that describes it.",
              "The answer is \"The soup seems too salty for Grandpa.\" Will, can and has each come before another verb."
            ],
            misconception: "A common mix-up is picking the sentence with the most familiar verb. Check what follows the verb.",
            why: "The answer is \"The soup seems too salty for Grandpa.\" Seems links the soup to salty, a word that describes it. Will stir, can eat and has cooked each have a helping verb before a main verb."
          },
          {
            id: "SK-GUM4-7-C15",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:use-helping-and-linking-verbs"
            ],
            passages: [],
            prompt: "Choose the two words that complete the sentence.",
            text: "Last night, Mia {0} {1} her homework.",
            slots: [
              {
                options: ["had","will","can","should"],
                answer: 0
              },
              {
                options: ["finished","finish","finishes","finishing"],
                answer: 0
              }
            ],
            clue: "For the first blank, use the time clue, Last night. For the second, match the helper you pick.",
            hints: [
              "For the first blank, use the time clue, Last night. For the second, match the helper you pick.",
              "A helper that points to the past needs a main verb in its past form.",
              "Can tells what is possible now, not what happened last night, so it does not fit here."
            ],
            how: [
              "Last night is the time clue, and it places the action in the past.",
              "The helper had goes with the past form of the main verb, finished.",
              "The answers are had and finished. Will and should point ahead, can tells what is possible now, and finish, finishes and finishing do not fit after had."
            ],
            misconception: "A common mix-up is picking a helper and leaving the main verb plain. Had needs the past form.",
            why: "The answers are had and finished. Last night places the action in the past, so had goes with finished, the past form. Will, can and should point ahead or to now, and the other verb forms do not fit after had."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM4-7-S01",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: [],
      prompt: "Sort each line by the job its verb does.",
      cols: [
        "Helps a main verb",
        "Joins to a describing word"
      ],
      rows: [
        {
          text: "Nia will bake a lemon cake.",
          answer: 0
        },
        {
          text: "Our lake became calm today.",
          answer: 1
        },
        {
          text: "Both dogs could jump that fence.",
          answer: 0
        },
        {
          text: "Those boots are muddy.",
          answer: 1
        },
        {
          text: "Omar has finished his drawing.",
          answer: 0
        }
      ],
      clue: "Look at the word that follows each verb and decide what kind of word it is.",
      hints: [
        "Look at the word that follows each verb and decide what kind of word it is.",
        "Sort the lines you know first, then use the same check for the rest.",
        "In Those boots are muddy, muddy tells about the boots and is not a verb."
      ],
      how: [
        "Check the word that follows each verb.",
        "Will bake, could jump and has finished each have a helper before a main verb.",
        "Became calm and are muddy join the subject to a describing word."
      ],
      misconception: "A common mix-up is sorting by how long the verb is. Check what follows it.",
      why: "Will, could and has help the main verbs bake, jump and finished. Became and are join the lake and the boots to the describing words calm and muddy.",
      like: ["SK-GUM4-7-P3"]
    },
    {
      id: "SK-GUM4-7-S02",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: [],
      prompt: "Find the TWO lines in which the verb ties the subject to a word about it.",
      pick: 2,
      choices: [
        {
          text: "The lunch bags were heavy.",
          correct: true
        },
        {
          text: "Grandpa is a carpenter.",
          correct: true
        },
        {
          text: "Rita has mailed her letter."
        },
        {
          text: "Both guests should wait outside."
        },
        {
          text: "The class will visit a farm."
        }
      ],
      clue: "Scan each line for a verb that ties the subject to a word about it.",
      hints: [
        "Scan each line for a verb that ties the subject to a word about it.",
        "A line with a linking verb tells what something is or is like, not what it does.",
        "Rita mailing a letter tells what she did, so that line is about an action."
      ],
      how: [
        "Find the verb in each line and check what follows it.",
        "The answers are \"The lunch bags were heavy.\" and \"Grandpa is a carpenter.\" Were links the bags to heavy, and is links Grandpa to carpenter.",
        "Has mailed, should wait and will visit each have a helper before a main verb."
      ],
      misconception: "A common mix-up is picking a line with a person doing something. A linking verb tells what something is.",
      why: "The answers are \"The lunch bags were heavy.\" and \"Grandpa is a carpenter.\" Were links the lunch bags to heavy, and is links Grandpa to a carpenter. Has mailed, should wait and will visit each have a helping verb.",
      like: ["SK-GUM4-7-P5"]
    },
    {
      id: "SK-GUM4-7-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: ["p4"],
      prompt: "Pick the line that repairs the verb in sentence 8.",
      text: "Science draft: {0}",
      slots: [
        {
          options: [
            "Soon, our volcano will exploded for the whole crowd.",
            "Soon, our volcano will explode for the whole crowd.",
            "Soon, our volcano will explodes for the whole crowd.",
            "Soon, our volcano will exploding for the whole crowd."
          ],
          answer: 1
        }
      ],
      clue: "Study the helper will, and ask what shape the action word takes after it.",
      hints: [
        "Study the helper will, and ask what shape the action word takes after it.",
        "Compare the word after will in each line, and see which shape matches a helper.",
        "The line that ends the verb in -ing would need a different helper."
      ],
      how: [
        "The helper is will, and the action word comes next.",
        "After will, the action word stays plain, with no -ed, -s or -ing.",
        "The answer is \"Soon, our volcano will explode for the whole crowd.\" The others put -ed, -s or -ing on the verb."
      ],
      misconception: "A common mix-up is adding -ed because the story is about a school event. Will already shows the time.",
      why: "The answer is Soon, our volcano will explode for the whole crowd.. After the helper will, the action word stays plain, so explode is right. The other lines add -ed, -s or -ing after will.",
      like: ["SK-GUM4-7-C03"]
    },
    {
      id: "SK-GUM4-7-S04",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: ["p4"],
      prompt: "Tap the ONE line among numbers 2, 3, 4, 6 and 10 whose verb joins the subject to a describing word.",
      targets: ["p4:1:2","p4:1:3","p4:1:4","p4:2:2","p4:3:3"],
      answer: ["p4:1:3"],
      pick: 1,
      clue: "Pick out the verb in each shown line and decide what comes right after it.",
      hints: [
        "Pick out the verb in each shown line and decide what comes right after it.",
        "A helper stands before another verb. A joining verb ties the subject to a word that describes it.",
        "Line 4 has can before ask, so its verb helps another verb."
      ],
      how: [
        "Pick out the verb in each shown line and check the word after it.",
        "Will show, can ask, should speak and has earn each have a helper before a main verb.",
        "In sentence 3, is links the gym to loud, a word that describes it, so it is the answer."
      ],
      misconception: "A common mix-up is choosing a line because it is short. Check what comes after the verb.",
      why: "The answer is sentence 3: \"The gym is loud and crowded with families.\" Is links the gym to loud, a word that describes it. The other shown lines have a helper before a main verb: will show, can ask, should speak and has earn.",
      like: ["SK-GUM4-7-C04"]
    },
    {
      id: "SK-GUM4-7-S05",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: ["p4"],
      prompt: "A friend argues that seems in line 9 is something the volcano does. How should you answer?",
      choices: [
        {
          text: "No deed occurs; seems ties the volcano to small, which says what that model is like, so it is a linking verb.",
          correct: true
        },
        {
          text: "A deed occurs, since the volcano must be busy doing something while it sits upon the long table near the judges."
        },
        {
          text: "Seems works as a helper, since it stands beside the word small and lends that word extra meaning for readers."
        },
        {
          text: "Seems cannot be a verb, since a verb must show movement across a room, a yard, or a field of green grass."
        }
      ],
      clue: "Ask whether the volcano actually does anything in the first half of sentence 9.",
      hints: [
        "Ask whether the volcano actually does anything in the first half of sentence 9.",
        "Look at the word small, and think about what job it has for the volcano.",
        "A helper comes before another verb, and small is not a verb."
      ],
      how: [
        "Read sentence 9: The volcano seems small, but it will erupt with red foam.",
        "Nothing happens in the first half. Small tells what the volcano is like, and seems connects the two.",
        "The answer is \"No deed occurs; seems ties the volcano to small, which says what that model is like, so it is a linking verb.\""
      ],
      misconception: "A common mix-up is thinking every verb shows an action. A linking verb only connects words.",
      why: "The answer is \"No deed occurs; seems ties the volcano to small, which says what that model is like, so it is a linking verb.\" Seems does nothing here. It ties the volcano to small, which says what the model is like, so it is a linking verb.",
      like: ["SK-GUM4-7-C05"]
    },
    {
      id: "SK-GUM4-7-S06",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: ["p4"],
      prompt: "Work on both questions in order.",
      partA: {
        prompt: "What is the best repair for line 10?",
        choices: [
          {
            text: "Today, the red team has earned a gold star from the judges.",
            correct: true
          },
          {
            text: "Today, the red team has earns a gold star from the judges."
          },
          {
            text: "Today, the red team have earn a gold star from the judges."
          },
          {
            text: "Today, the red team will earned a gold star from the judges."
          }
        ]
      },
      partB: {
        prompt: "Pick the statement that gives the reason for that repair.",
        choices: [
          {
            text: "A helper such as has calls for the past shape of the next action word, earned.",
            correct: true
          },
          {
            text: "The word after has must keep its base shape, earn, just as it does after will."
          },
          {
            text: "Has joins the team to a describing word, so the next word stays as written."
          },
          {
            text: "Has is the only verb in the line, so the next word just names the shiny gold star."
          }
        ]
      },
      clue: "For Part A, find the helper and the word after it. For Part B, find the statement that fits the correction.",
      hints: [
        "For Part A, find the helper and the word after it. For Part B, find the statement that fits the correction.",
        "Think about the shape an action word takes after has, have or had.",
        "Will looks ahead, but line 10 begins with Today, so a version with will does not fit."
      ],
      how: [
        "Part A: the draft has the helper has before the plain verb earn. The answer is \"Today, the red team has earned a gold star from the judges.\"",
        "The other versions add -s to the action word, change has to have, or use will with the past form.",
        "Part B: the statement is \"A helper such as has calls for the past shape of the next action word, earned.\""
      ],
      misconception: "A common mix-up is leaving the action word plain after has. Has, have and had go with the past form.",
      why: "Part A: \"Today, the red team has earned a gold star from the judges.\" Part B: \"A helper such as has calls for the past shape of the next action word, earned.\" Part A: Today, the red team has earned a gold star from the judges. uses has with the past form earned. Part B: the past shape of the next action word is what a helper such as has calls for.",
      like: ["SK-GUM4-7-C06"]
    },
    {
      id: "SK-GUM4-7-S07",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: ["p5"],
      prompt: "Select the linking verb that finishes sentence 4.",
      text: "At this moment, the stack of pancakes {0} taller and taller.",
      slots: [
        {
          options: ["becomes","become","became","becoming"],
          answer: 0
        }
      ],
      clue: "Find what the sentence is about and decide whether that is one thing or several.",
      hints: [
        "Find what the sentence is about and decide whether that is one thing or several.",
        "The words at this moment show when this is true, so check the time as well as the subject.",
        "Becoming ends in -ing, and it cannot stand alone as the verb in this sentence."
      ],
      how: [
        "The subject is stack, which names one thing, and at this moment shows the present.",
        "A present-tense verb for one thing ends in -s.",
        "The answer is becomes. Become goes with more than one thing, became is for the past, and becoming cannot stand alone as the verb."
      ],
      misconception: "A common mix-up is picking the verb that sounds right after pancakes. The subject is stack.",
      why: "The answer is becomes. The subject, stack, names one thing, and at this moment shows the present, so becomes fits. Become goes with more than one thing, became is for the past, and becoming cannot stand alone as the verb.",
      like: ["SK-GUM4-7-C07"]
    },
    {
      id: "SK-GUM4-7-S08",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: ["p5"],
      prompt: "Tap the ONE line among numbers 2, 6, 7, 9 and 10 whose verb helps another verb.",
      targets: ["p5:1:2","p5:2:2","p5:2:3","p5:3:2","p5:3:3"],
      answer: ["p5:2:3"],
      pick: 1,
      clue: "Pick out the verb in each shown line and look at the word that follows it.",
      hints: [
        "Pick out the verb in each shown line and look at the word that follows it.",
        "A helper stands before another verb. A joining verb ties the subject to a describing word.",
        "Line 9 says the syrup becomes sticky, and sticky is not a verb."
      ],
      how: [
        "Pick out the verb in each shown line and check the word after it.",
        "Is full, are soft and becomes sticky each connect a subject to a describing word. Laugh and tap are actions.",
        "In sentence 7, will comes right before the main verb pour, so it is the answer."
      ],
      misconception: "A common mix-up is picking a line with an action verb. A helper comes before another verb.",
      why: "The answer is sentence 7: \"My sister will pour the juice at the table.\" In sentence 7, will comes before the main verb pour, so it is a helping verb. The other shown lines have linking verbs or action verbs alone.",
      like: ["SK-GUM4-7-C08"]
    },
    {
      id: "SK-GUM4-7-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: ["p5"],
      prompt: "Your partner argues that line 5 needs no repair, since stirred places the action in the past. How should you answer?",
      choices: [
        {
          text: "Could comes first, so the action word must stay basic; write stir, not stirred.",
          correct: true
        },
        {
          text: "Could ties my brother to a trait, so stirred tells what kind of cook he is."
        },
        {
          text: "Stirred is correct, since an event that already finished calls for the ending -ed."
        },
        {
          text: "Could acts as the lone verb, which leaves stirred as a noun for the batter in the bowl."
        }
      ],
      clue: "Find the helper in line 5 and think about what shape the next verb takes after it.",
      hints: [
        "Find the helper in line 5 and think about what shape the next verb takes after it.",
        "Compare stirred with the verb that would follow a helper such as will or can.",
        "Stirred is not a describing word in this line, because it tells the action."
      ],
      how: [
        "Read line 5: My brother could stirred the batter slowly with the wooden spoon.",
        "Could is the helper, and the action word after it must keep its basic form.",
        "The answer is \"Could comes first, so the action word must stay basic; write stir, not stirred.\""
      ],
      misconception: "A common mix-up is putting -ed on a verb to show the past. A verb after could stays basic.",
      why: "The answer is \"Could comes first, so the action word must stay basic; write stir, not stirred.\" Could is a helping verb, so the action word after it keeps its basic form: My brother could stir the batter. Adding -ed does not fit after could.",
      like: ["SK-GUM4-7-C09"]
    },
    {
      id: "SK-GUM4-7-S10",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: [],
      prompt: "Pick the TWO lines that hold a verb that helps another verb.",
      pick: 2,
      choices: [
        {
          text: "Our class will paint a mural.",
          correct: true
        },
        {
          text: "The twins can ride their bikes.",
          correct: true
        },
        {
          text: "The road became long and bumpy."
        },
        {
          text: "Fresh cookies are cheaper today."
        },
        {
          text: "My aunt was a nurse in Boston."
        }
      ],
      clue: "Pick out the verb in each line and check the word right after it.",
      hints: [
        "Pick out the verb in each line and check the word right after it.",
        "A helper stands before another verb. A joining verb ties the subject to a word that names or describes it.",
        "In the line about the road, the word after the verb is not a verb."
      ],
      how: [
        "Pick out the verb in each line and check what comes after it.",
        "In \"Our class will paint a mural.\" will comes before paint. In \"The twins can ride their bikes.\" can comes before ride.",
        "In the other lines, the verb ties the subject to a word that describes it or names it."
      ],
      misconception: "A common mix-up is choosing lines with a short verb. Check whether another verb follows.",
      why: "The answers are \"Our class will paint a mural.\" and \"The twins can ride their bikes.\" Will helps the main verb paint, and can helps the main verb ride. In the other lines, became, are and was join the subject to a word that describes it or names it.",
      like: ["SK-GUM4-7-C10"]
    },
    {
      id: "SK-GUM4-7-S11",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: [],
      stem: "Line A: The pup should rest. Line B: The pup seems tired.",
      prompt: "Judge the role of should and seems in these lines.",
      choices: [
        {
          text: "Should leads into rest, but seems ties the pup to tired.",
          correct: true
        },
        {
          text: "Seems leads into tired, but should ties the pup to rest."
        },
        {
          text: "Neither ties anything; both prop up a second action after them."
        },
        {
          text: "Neither tells about the pup; each describes a trip across the yard."
        }
      ],
      clue: "Pick out the verb in each line and check what comes after it.",
      hints: [
        "Pick out the verb in each line and check what comes after it.",
        "Ask whether the word after each verb is another verb or a word that tells about the pup.",
        "Resting is not motion, so a choice about movement in both lines cannot be right."
      ],
      how: [
        "The verbs are should in Line A and seems in Line B.",
        "In A, rest is the action, and should comes before it. In B, tired tells about the pup, and seems connects the two.",
        "The answer is \"Should leads into rest, but seems ties the pup to tired.\""
      ],
      misconception: "A common mix-up is treating tired as a verb. It tells about the pup.",
      why: "The answer is \"Should leads into rest, but seems ties the pup to tired.\" In A, should helps the main verb rest. In B, seems links the pup to tired, a word that tells about it.",
      like: ["SK-GUM4-7-C11"]
    },
    {
      id: "SK-GUM4-7-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: ["p6"],
      prompt: "Which helper makes line 8 correct?",
      text: "The tall goalie {0} blocked a long shot toward the far net.",
      slots: [
        {
          options: ["has","will","am","are"],
          answer: 0
        }
      ],
      clue: "Look at who is doing the blocking, and decide whether that is one player or several.",
      hints: [
        "Look at who is doing the blocking, and decide whether that is one player or several.",
        "Check the verb blocked after the blank, and think about which helpers go with that shape.",
        "Am goes only with the word I, and the subject here is not I."
      ],
      how: [
        "The subject, goalie, names one player.",
        "Blocked is the past form of the main verb, so a helper such as has goes before it.",
        "The answer is has. Will needs a plain verb after it, and am and are do not fit before blocked."
      ],
      misconception: "A common mix-up is choosing are because a shot has many parts. The helper goes with the goalie.",
      why: "The answer is has. The subject, goalie, names one player, so the helping verb has goes with it. Will needs a plain verb after it, and am and are do not fit before blocked.",
      like: ["SK-GUM4-7-C12"]
    },
    {
      id: "SK-GUM4-7-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: ["p6"],
      prompt: "Line 4 has an error. Mark both rewrites that correct the error without moving the story to another time.",
      pick: 2,
      choices: [
        {
          text: "The new cones are bright orange and easy to see from far away.",
          correct: true
        },
        {
          text: "The new cone is bright orange and easy to see from far away.",
          correct: true
        },
        {
          text: "The new cones is bright orange and easy to see from far away."
        },
        {
          text: "The new cones was bright orange and easy to see from far away."
        },
        {
          text: "The new cone are bright orange and easy to see from far away."
        }
      ],
      clue: "A rewrite can change the verb or the subject, as long as the two agree and the time stays the same.",
      hints: [
        "A rewrite can change the verb or the subject, as long as the two agree and the time stays the same.",
        "Keep the rewrites in which the subject and the linking verb match in the present.",
        "One rewrite uses was, and was points to the past, so it changes the time of the story."
      ],
      how: [
        "The draft pairs a plural subject, cones, with the singular verb is.",
        "One rewrite changes the verb to are. The other changes the subject to the singular cone.",
        "The answers are \"The new cones are bright orange and easy to see from far away.\" and \"The new cone is bright orange and easy to see from far away.\" The others keep the draft, use the past, or mismatch the subject."
      ],
      misconception: "A common mix-up is thinking only the verb can change. The subject can change, too.",
      why: "The answers are \"The new cones are bright orange and easy to see from far away.\" and \"The new cone is bright orange and easy to see from far away.\" Cones goes with are, and cone goes with is. The other rewrites keep the draft, use the past with was, or pair a singular subject with are.",
      like: ["SK-GUM4-7-C13"]
    },
    {
      id: "SK-GUM4-7-S14",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: [],
      prompt: "In which line does the verb connect the subject to a describing word?",
      choices: [
        {
          text: "Our new puppy became shy around strangers.",
          correct: true
        },
        {
          text: "Aunt Rosa should knit a scarf for winter."
        },
        {
          text: "We could carry the cake inside today."
        },
        {
          text: "Grandma had baked a pie for supper last night."
        }
      ],
      clue: "Pick out the verb in each line, and check the word that follows it.",
      hints: [
        "Pick out the verb in each line, and check the word that follows it.",
        "A linking verb does not stand before another verb, and it ties the subject to a word that tells about it.",
        "Knit is a verb, so the line with should before it has a helper, not a link."
      ],
      how: [
        "Pick out the verb in each line and check the word after it.",
        "In the first line, became connects the puppy to shy, a word that describes it.",
        "The answer is \"Our new puppy became shy around strangers.\" Should, could and had each stand before another verb."
      ],
      misconception: "A common mix-up is picking the line with the most familiar verb. Check what follows the verb.",
      why: "The answer is \"Our new puppy became shy around strangers.\" Became links the puppy to shy, a word that describes it. Should knit, could carry and had baked each have a helping verb before a main verb.",
      like: ["SK-GUM4-7-C14"]
    },
    {
      id: "SK-GUM4-7-S15",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:use-helping-and-linking-verbs"
      ],
      passages: [],
      prompt: "Fill both gaps so the line is correct.",
      text: "Yesterday, the twins {0} {1} a model.",
      slots: [
        {
          options: ["had","has","is","are"],
          answer: 0
        },
        {
          options: ["painted","paint","paints","painting"],
          answer: 0
        }
      ],
      clue: "For the first blank, use the time clue and the subject. For the second, match the helper.",
      hints: [
        "For the first blank, use the time clue and the subject. For the second, match the helper.",
        "A helper that points to the past needs an action word in its past shape.",
        "Has goes with one person, and the twins number two or more."
      ],
      how: [
        "Yesterday is the time clue, and it places the action in the past; twins names more than one person.",
        "The helper had goes with the past shape of the action word, painted.",
        "The answers are had and painted. Has goes with one person, is and are point to the present, and paint, paints and painting do not fit after had."
      ],
      misconception: "A common mix-up is choosing a helper and leaving the action word plain. Had needs the past shape.",
      why: "The answers are had and painted. Yesterday is in the past, so had goes with the past shape painted. Has goes with one person, is and are point to the present, and the other verb forms do not fit after had.",
      like: ["SK-GUM4-7-C15"]
    }
  ],
  addons: {
    "SK-GUM4-7-P1": {
      hints: [
        "Look for the action word, and decide whether another verb comes before it.",
        "Check each word and ask which one is a verb that does not show the action by itself.",
        "Book names a thing, so it is not a verb that could help another verb."
      ],
      how: [
        "Find the main verb, the action: finished.",
        "Look at the word right before it: has. Has helps the main verb.",
        "The answer is has. Finished is the main verb, and his and book are not verbs that help."
      ],
      misconception: "A common mix-up is choosing the action word. The helping verb comes before it."
    },
    "SK-GUM4-7-P2": {
      hints: [
        "Check whether anyone does something in this sentence.",
        "Look for the verb that connects the kittens to a word about them.",
        "Sleepy tells about the kittens, but it is not a verb."
      ],
      how: [
        "Nobody does anything in this sentence, so there is no action.",
        "The verb were connects the kittens to sleepy.",
        "The answer is were. Sleepy describes the kittens, so it is not a linking verb."
      ],
      misconception: "A common mix-up is choosing the describing word. The linking verb connects it to the subject."
    },
    "SK-GUM4-7-P3": {
      hints: [
        "Look at the word after each verb. Is it another verb, or a word about the subject?",
        "A helping verb comes before another verb. A linking verb ties the subject to a describing word.",
        "In The pie is warm, warm describes the pie and is not a verb."
      ],
      how: [
        "Check the word after each verb.",
        "Can see and should wear have a helping verb before a main verb.",
        "Is warm, was a firefighter and seems hungry connect the subject to a word that describes or names it."
      ],
      misconception: "A common mix-up is sorting by the verb's length. Check what follows it."
    },
    "SK-GUM4-7-P4": {
      hints: [
        "Look at the word tomorrow and at the word visit.",
        "Say the sentence with each choice and pick the one that sounds natural.",
        "Was points to the past, and tomorrow has not happened yet."
      ],
      how: [
        "Tomorrow tells when the visit happens.",
        "The helping verb must show a time that has not come yet.",
        "The answer is will. Is, has and was do not fit before visit."
      ],
      misconception: "A common mix-up is choosing was because it is a common verb. Tomorrow points ahead."
    },
    "SK-GUM4-7-P5": {
      hints: [
        "Look in each sentence for a verb that joins the subject to a word about it.",
        "A sentence with a linking verb has no action and no verb after the helper.",
        "Ben has cleaned his room tells about an action that was done."
      ],
      how: [
        "Find the verb in each sentence and check what follows it.",
        "The answers are \"The peaches are ripe.\" and \"Ms. Hall is our music teacher.\" Are links peaches to ripe, and is links Ms. Hall to teacher.",
        "Has cleaned, could hear and will draw each have a helping verb before a main verb."
      ],
      misconception: "A common mix-up is choosing a sentence because it has an action. A linking verb has none."
    }
  },
  /* B8a:core:end */
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
      "Your means it belongs to you, and you're is short for you are. Its means it belongs to it, and it's is short for it is (or it has).",
      "Advice is a noun, the help that someone gives, and it ends like ice. Advise is a verb, the act of giving help, and it ends with a z sound."
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
    },
    {
      show: ["Our coach will ___ us to stretch."],
      ask: "Which word fits: advice or advise?",
      steps: [
        "Check which word sits just ahead of the blank. Will is followed by an action word.",
        "Advise is the action word, and its last sound is z.",
        "Advice names the help itself, so it would not follow will."
      ],
      answer: "Advise: Our coach will advise us to stretch."
    }
  ],
  parent: "Write a short note with one sound-alike word used the wrong way, like \"I have to dogs.\" Ask your child to find the mistake and fix it.",
  passages: [
    /* B8a:passages:start */
    {
      id: "p1",
      title: "Our Class Trip to the Museum",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Friday, our class took a field trip to the science museum.",
          "(2) We rode to buses to get there.",
          "(3) Mr. Lopez said to stay with you're group.",
          "(4) There was a huge dinosaur skeleton in the main hall."
        ],
        [
          "(5) The guide gave us good advise about the exhibits.",
          "(6) It's long tail stretched across the whole room.",
          "(7) The kids wrote notes in there notebooks."
        ],
        [
          "(8) Some of the bones were too heavy to lift.",
          "(9) Our guide will advise us to be careful with the glass cases.",
          "(10) I want to see the planet show next time, too.",
          "(11) The other kids loved their gift shop prizes.",
          "(12) We sat on the bus and felt sleepy on the ride back to school."
        ]
      ]
    },
    {
      id: "p2",
      title: "The Neighborhood Clean-Up",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Saturday morning, our neighbors met at the park to clean up.",
          "(2) Their going to give every helper a bright orange vest.",
          "(3) There were two big trash bags for each group.",
          "(4) Mom said it's important to wear gloves."
        ],
        [
          "(5) Dad told me to bring to water bottles.",
          "(6) Our leader will advice us where to start.",
          "(7) We picked up cans and bottles too."
        ],
        [
          "(8) Some kids found a ball in the bushes and gave it back to a little boy.",
          "(9) It took two hours to finish the whole park.",
          "(10) The grass looked too clean to believe.",
          "(11) We threw the full bags into a big truck by the road.",
          "(12) Everyone cheered when the park looked clean again."
        ]
      ]
    },
    {
      id: "p3",
      title: "A Walk in the Woods",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Sunday, my family hiked on a trail in the woods.",
          "(2) The path was to muddy for our new shoes.",
          "(3) We saw a nest in a tall pine tree.",
          "(4) Dad said there were three eggs inside."
        ],
        [
          "(5) My sister pointed to a bird on a branch.",
          "(6) She asked if we could be quiet for two minutes.",
          "(7) The bird sat still and watched us.",
          "(8) It's feathers were soft, and they're colors were bright."
        ],
        [
          "(9) The bird flew off, and its nest stayed safe in the tree.",
          "(10) We walked back to the car before it got dark.",
          "(11) I hope we go there again next year.",
          "(12) The woods are my favorite place to visit with my family."
        ]
      ]
    },
    {
      id: "p4",
      title: "A Visit to the Aquarium",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) Last Thursday, our class took a field trip to the city aquarium.",
          "(2) Then we sat on to wide wooden benches to watch the playful seals splash around.",
          "(3) The otter loves to play, and it's favorite toy is a ball.",
          "(4) Over there, a glowing jellyfish tank filled the dark corner."
        ],
        [
          "(5) Our host gave everyone useful advise about feeding the sea turtles.",
          "(6) It's huge shell was as wide as a kitchen table.",
          "(7) The children drew pictures in there sketchbooks."
        ],
        [
          "(8) A few of the eels were too slippery to hold.",
          "(9) A ranger will advise visitors to walk slowly near the wet floor.",
          "(10) I want to touch a starfish next time, too.",
          "(11) Our group enjoyed their tasty snacks from the cafe.",
          "(12) We rested on the bus and felt sleepy on the long ride back to school."
        ]
      ]
    },
    {
      id: "p5",
      title: "The Beach Clean-Up",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Sunday morning, our neighbors met at the beach to clean up the shore.",
          "(2) Their ready to pass out blue gloves and sticky name tags to all the tired helpers.",
          "(3) Every helper got two thick garbage bags.",
          "(4) My uncle says it's smart to wear a hat in the sun."
        ],
        [
          "(5) Mom asked me to carry to jugs of water down the sandy path.",
          "(6) The ranger gave us helpful advise about picking up sharp glass.",
          "(7) A few helpers sang along with the radio too."
        ],
        [
          "(8) Some kids found a kite in the dune grass and returned it to its owner.",
          "(9) The job lasted two hours, from nine until eleven.",
          "(10) The water looked too blue to be real.",
          "(11) We dumped the full bags into a big truck near the road.",
          "(12) Everyone clapped when the shore sparkled again."
        ]
      ]
    },
    {
      id: "p6",
      title: "A Walk by the River",
      byline: "A third grader's draft",
      genre: "Student draft (narrative)",
      draft: true,
      paragraphs: [
        [
          "(1) On Saturday, my cousins and I hiked along a path by the river.",
          "(2) After three days of heavy rain, the trail by the river felt to slippery for hikers in smooth rubber boots.",
          "(3) We saw a nest in a tall oak tree.",
          "(4) Dad said there were four eggs inside."
        ],
        [
          "(5) My brother pointed to a heron standing on a flat rock.",
          "(6) He asked if we could stay quiet for two minutes.",
          "(7) The heron stood still and watched us.",
          "(8) Grandpa said your going to need to extra pairs of socks."
        ],
        [
          "(9) The heron flew off, and its nest stayed safe in the branches.",
          "(10) We walked back to the truck before it got dark.",
          "(11) I hope we visit there again next summer.",
          "(12) The river is my favorite place to spend time with my cousins."
        ]
      ]
    }
    /* B8a:passages:end */
  ],
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
            ref: "SK-GUM4-8-P4"
          },
          {
            ref: "SK-GUM4-8-P5"
          },
          {
            id: "SK-GUM4-8-C03",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: ["p1"],
            prompt: "Select the word that makes sentence 2 correct.",
            text: "We rode {0} buses to get there.",
            slots: [
              {
                options: ["two","to","too"],
                answer: 0
              }
            ],
            clue: "Ask what job the word has: a place, a meaning of also, or a count.",
            hints: [
              "Ask what job the word has: a place, a meaning of also, or a count.",
              "Look at the word buses right after the blank, and think about what the blank tells about them.",
              "Neither also nor more than enough fits in this sentence, so too is wrong."
            ],
            how: [
              "The blank comes right before buses and tells about them.",
              "A number tells how many, so look for the word that names a number.",
              "The answer is two. To shows where or comes before an action word, and too fits sentences about also or too much."
            ],
            misconception: "A common mix-up is choosing to because it is the shortest of the three. Check what the word tells about the buses.",
            why: "The answer is two. Two names how many buses the class rode. To shows where or comes before an action word, and too fits sentences about also or too much."
          },
          {
            id: "SK-GUM4-8-C04",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: ["p1"],
            prompt: "Select the ONE of sentences 4, 5, 8, 9 and 11 that uses a sound-alike word incorrectly.",
            targets: ["p1:1:4","p1:2:1","p1:3:1","p1:3:2","p1:3:4"],
            answer: ["p1:2:1"],
            pick: 1,
            clue: "Find the sound-alike word in each shown sentence, then ask what it means there.",
            hints: [
              "Find the sound-alike word in each shown sentence, then ask what it means there.",
              "Check whether each word fits its job: telling where, showing who owns something, naming a helpful idea, or naming an action.",
              "Sentence 8 uses too to mean more than enough, and that meaning fits heavy."
            ],
            how: [
              "Find the sound-alike word in each shown sentence and decide what it means.",
              "There tells where, too means more than enough, will advise tells an action, and their shows who owns something.",
              "In sentence 5, good advise needs the word for a helpful idea, advice, so it is the answer."
            ],
            misconception: "A common mix-up is thinking advise and advice can swap places. One names an action and the other names a helpful idea.",
            why: "The answer is sentence 5: \"The guide gave us good advise about the exhibits.\" Advice is the noun for a helpful idea, so good advice is correct. The other shown sentences use there, too, advise and their correctly."
          },
          {
            id: "SK-GUM4-8-C05",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: ["p1"],
            prompt: "A classmate says It's in sentence 6 is right, because it shows the tail belongs to the dinosaur. Which response is best?",
            choices: [
              {
                text: "It's means it is, so it cannot show belonging; the word for belonging is its.",
                correct: true
              },
              {
                text: "It's is right, because an apostrophe is how every word shows that something belongs to someone."
              },
              {
                text: "It's is wrong, because a dinosaur is a thing, and things can never have a tail or a long neck."
              },
              {
                text: "It's is wrong, because the sentence needs there to tell where the tail stretched across the room."
              }
            ],
            clue: "Try saying it is in place of It's in sentence 6.",
            hints: [
              "Try saying it is in place of It's in sentence 6.",
              "Ask what job the word is supposed to do for the tail.",
              "An apostrophe can show that a letter is missing, which is not the same as showing who owns something."
            ],
            how: [
              "Read sentence 6 with it is: It is long tail stretched across the whole room.",
              "That does not make sense, because the tail belongs to the dinosaur.",
              "The answer is \"It's means it is, so it cannot show belonging; the word for belonging is its.\""
            ],
            misconception: "A common mix-up is thinking an apostrophe shows ownership in every word. In it's, it stands for a missing letter.",
            why: "The answer is \"It's means it is, so it cannot show belonging; the word for belonging is its.\" It's means it is, so it cannot show that the tail belongs to the dinosaur. The word for belonging is its, with no apostrophe."
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-GUM4-8-C06",
            type: "ebsr",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: ["p1"],
            prompt: "This item has two parts. Begin with Part A and then go on to Part B.",
            partA: {
              prompt: "Sentence 3 uses the wrong word. Which revision corrects it?",
              choices: [
                {
                  text: "Mr. Lopez said to stay with your group.",
                  correct: true
                },
                {
                  text: "Mr. Lopez said to stay with you are group."
                },
                {
                  text: "Mr. Lopez said to stay with yours group."
                },
                {
                  text: "Mr. Lopez said to stay with you'r group."
                }
              ]
            },
            partB: {
              prompt: "Which fact explains why the correct revision is right?",
              choices: [
                {
                  text: "Your shows that the group belongs to you, but you're means you are.",
                  correct: true
                },
                {
                  text: "You're shows that the group belongs to you, but your means you are."
                },
                {
                  text: "Your is a shortened way to say you are, so the apostrophe is left out to save space."
                },
                {
                  text: "Group is a plural noun, so the word before it must end with an apostrophe."
                }
              ]
            },
            clue: "For A, compare the word before group. For B, find the fact matching the change.",
            hints: [
              "For A, compare the word before group. For B, find the fact matching the change.",
              "Put you are where the word before group sits, and see whether the sentence makes sense.",
              "You'r is not a word at all, so that choice cannot be the fix."
            ],
            how: [
              "Part A: you are group does not make sense, so the word before group must show belonging. The answer is \"Mr. Lopez said to stay with your group.\"",
              "The other choices use you are, yours or you'r, and none of them show that the group belongs to you.",
              "Part B: the fact is \"Your shows that the group belongs to you, but you're means you are.\""
            ],
            misconception: "A common mix-up is choosing you're because it looks more formal. You're only stands for you are.",
            why: "Part A: \"Mr. Lopez said to stay with your group.\" Part B: \"Your shows that the group belongs to you, but you're means you are.\" Part A: Mr. Lopez said to stay with your group. uses your to show the group belongs to you. Part B: your shows belonging, but you're means you are."
          },
          {
            id: "SK-GUM4-8-C07",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: ["p2"],
            prompt: "Select the spelling that makes sentence 2 correct.",
            text: "{0} going to give every helper a bright orange vest.",
            slots: [
              {
                options: ["They're","Their","There","Their's"],
                answer: 0
              }
            ],
            clue: "Try each choice in the blank and see which makes a whole sentence.",
            hints: [
              "Try each choice in the blank and see which makes a whole sentence.",
              "Say they are in the blank. Does the sentence still make sense?",
              "There tells where, and no place is named anywhere in this sentence."
            ],
            how: [
              "Read the sentence once with each choice and listen for one that sounds complete.",
              "They are going to give every helper a bright orange vest makes sense, so the contraction fits.",
              "The answer is They're. Their shows belonging, and there tells where."
            ],
            misconception: "A common mix-up is choosing Their because it comes first when people write fast. Test it with they are.",
            why: "The answer is They're. They're means they are, and They are going to give every helper a vest makes sense. Their shows belonging, and there tells where."
          },
          {
            id: "SK-GUM4-8-C08",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: ["p2"],
            prompt: "Select the ONE of sentences 3, 5, 7, 9 and 10 that uses to, too or two incorrectly.",
            targets: ["p2:1:3","p2:2:1","p2:2:3","p2:3:2","p2:3:3"],
            answer: ["p2:2:1"],
            pick: 1,
            clue: "Find the to, too or two in each shown sentence, and decide what it means there.",
            hints: [
              "Find the to, too or two in each shown sentence, and decide what it means there.",
              "Ask whether each word shows a place or comes before a verb, means also or too much, or names a number.",
              "Sentence 10 uses too to mean more than enough, and that meaning fits clean."
            ],
            how: [
              "Find the to, too or two in each shown sentence and decide what it means.",
              "Sentences 3 and 9 use two as a number, sentence 7 uses too to mean also, and sentence 10 uses too to mean more than enough.",
              "In sentence 5, the second to should name how many bottles, so it needs the number word two."
            ],
            misconception: "A common mix-up is trusting any word that sounds right. Sound-alike words need their meaning checked.",
            why: "The answer is sentence 5: \"Dad told me to bring to water bottles.\" In sentence 5, the writer means the number 2, so two is needed. The other shown sentences use two, too and to correctly."
          },
          {
            id: "SK-GUM4-8-C09",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: ["p2"],
            prompt: "A classmate says advice is right in sentence 6, because the leader is giving help. Which response is best?",
            choices: [
              {
                text: "Will needs a verb after it, and the verb is advise; advice is the noun for the help itself.",
                correct: true
              },
              {
                text: "Advice is right, because the ending -ice is the spelling for every word about giving help."
              },
              {
                text: "Advice is right, because will is a noun here, so the sentence needs one more noun after it."
              },
              {
                text: "Advise is wrong, because it is only used for a person who works as a doctor or a nurse."
              }
            ],
            clue: "Look at the word before advice and ask what kind of word comes next.",
            hints: [
              "Look at the word before advice and ask what kind of word comes next.",
              "Some words are things and others are actions, so decide which kind follows will.",
              "A spelling ending does not make a word a verb or a noun."
            ],
            how: [
              "Read sentence 6: Our leader will advice us where to start.",
              "Will is a helping verb, so a main verb must come next. The leader gives advice, but will advise tells what the leader does.",
              "The answer is \"Will needs a verb after it, and the verb is advise; advice is the noun for the help itself.\""
            ],
            misconception: "A common mix-up is choosing the word that names the help. After will, the sentence needs the word that tells what someone does.",
            why: "The answer is \"Will needs a verb after it, and the verb is advise; advice is the noun for the help itself.\" Will needs a verb after it, and advise is the verb. Advice is the noun for the help itself."
          },
          {
            id: "SK-GUM4-8-C10",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: [],
            prompt: "Which TWO sentences are written correctly?",
            pick: 2,
            choices: [
              {
                text: "The players left their cleats by the bench.",
                correct: true
              },
              {
                text: "Put the water bottles over there.",
                correct: true
              },
              {
                text: "There shoes are wet from the morning grass."
              },
              {
                text: "Their going to win the game this Saturday."
              },
              {
                text: "They're team scored first at the game today."
              }
            ],
            clue: "Check each there, their or they're by saying its meaning out loud.",
            hints: [
              "Check each there, their or they're by saying its meaning out loud.",
              "Keep the sentences in which the word tells where, or shows who owns something.",
              "One sentence needs they are, and no sentence about a team can use that meaning in the shown way."
            ],
            how: [
              "Say the meaning of each sound-alike word: where, belonging, or they are.",
              "In \"The players left their cleats by the bench.\" their shows whose cleats. In \"Put the water bottles over there.\" there tells where.",
              "The other sentences use there for belonging, their for they are, and they're for belonging."
            ],
            misconception: "A common mix-up is choosing a sentence because the word sounds right. Check what the word means.",
            why: "The answers are \"The players left their cleats by the bench.\" and \"Put the water bottles over there.\" Their shows whose cleats they are, and there tells where to put the bottles. The other sentences use there, their and they're with the wrong meaning."
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-GUM4-8-C11",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: [],
            stem: "Sentence A: They're on the bus. Sentence B: Their bus is yellow.",
            prompt: "How are they're and their used differently in the two sentences?",
            choices: [
              {
                text: "In A, they're means they are; in B, their shows that the bus belongs to them.",
                correct: true
              },
              {
                text: "In A, they're shows that the bus belongs to them; in B, their means they are."
              },
              {
                text: "In both, the word means they are, because each one comes before a word about the bus."
              },
              {
                text: "In both, the word shows belonging, because each one comes right next to the word bus."
              }
            ],
            clue: "Say they are in place of the first word of each sentence.",
            hints: [
              "Say they are in place of the first word of each sentence.",
              "Ask which sentence still makes sense with they are, and what job the other word does.",
              "The two words do not both mean they are, so a choice that says they do cannot be right."
            ],
            how: [
              "Try they are in each sentence: They are on the bus works, but They are bus is yellow does not.",
              "In B, their shows who owns the bus.",
              "The answer is \"In A, they're means they are; in B, their shows that the bus belongs to them.\""
            ],
            misconception: "A common mix-up is thinking the two words mean the same. They're means they are, and their shows belonging.",
            why: "The answer is \"In A, they're means they are; in B, their shows that the bus belongs to them.\" In A, they're means they are. In B, their shows that the bus belongs to them."
          },
          {
            id: "SK-GUM4-8-C12",
            type: "dropdown",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: ["p3"],
            prompt: "Which word correctly finishes sentence 2?",
            text: "The path was {0} muddy for our new shoes.",
            slots: [
              {
                options: ["too","to","two"],
                answer: 0
              }
            ],
            clue: "Ask which meaning the word needs here: a place, also, more than enough, or a count.",
            hints: [
              "Ask which meaning the word needs here: a place, also, more than enough, or a count.",
              "Try the words more than enough in the blank, and see whether the sentence still makes sense.",
              "Two is a number, and nothing in the sentence counts anything."
            ],
            how: [
              "The sentence says the path was muddy for new shoes, so the word must mean more than enough.",
              "Too can mean more than enough.",
              "The answer is too. To shows where or comes before an action word, and two is a number."
            ],
            misconception: "A common mix-up is choosing to because it is the word people write most. Check what the word means.",
            why: "The answer is too. Too means more than enough, so the path was more muddy than the shoes could handle. To shows where or comes before an action word, and two is a number."
          },
          {
            id: "SK-GUM4-8-C13",
            type: "ms",
            points: 2,
            dok: 3,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: ["p3"],
            prompt: "Sentence 8 has two mistakes. Choose the TWO corrections that fix it.",
            pick: 2,
            choices: [
              {
                text: "Change It's to Its.",
                correct: true
              },
              {
                text: "Change they're to their.",
                correct: true
              },
              {
                text: "Change they're to there."
              },
              {
                text: "Change It's to Its'."
              },
              {
                text: "Change were to we're."
              }
            ],
            clue: "Say the long form of each word with an apostrophe: it is, they are.",
            hints: [
              "Say the long form of each word with an apostrophe: it is, they are.",
              "A fix must keep the meaning: the feathers belong to the bird, and the colors belong to the feathers.",
              "Its' is never a correct word, so that correction cannot be one of the two."
            ],
            how: [
              "It is feathers and they are colors do not make sense, so both words need to show belonging.",
              "Its shows the feathers belong to the bird, and their shows the colors belong to the feathers.",
              "The answers are \"Change It's to Its.\" and \"Change they're to their.\" The others use there, its' or we're."
            ],
            misconception: "A common mix-up is fixing only one word. Both It's and they're stand for two words that do not fit.",
            why: "The answers are \"Change It's to Its.\" and \"Change they're to their.\" Its and their show belonging, so It's must change to Its and they're must change to their. The other corrections use there, its' or we're."
          },
          {
            id: "SK-GUM4-8-C14",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: [],
            prompt: "Which sentence uses advice or advise correctly?",
            choices: [
              {
                text: "My aunt will advise me about my science project.",
                correct: true
              },
              {
                text: "Please give me some good advise about my homework."
              },
              {
                text: "I need your advise about my science project."
              },
              {
                text: "The coach will advice us before the big game."
              }
            ],
            clue: "Decide whether each sentence needs a word that names help or a word that tells an action.",
            hints: [
              "Decide whether each sentence needs a word that names help or a word that tells an action.",
              "The word right after will, or right after good or your, shows which one is needed.",
              "The sentence with will advice has a noun where a verb is needed."
            ],
            how: [
              "Decide whether each sentence needs the help itself or the action of giving help.",
              "After will, a verb is needed, and advise is the verb. After good or your, the noun advice is needed.",
              "The answer is \"My aunt will advise me about my science project.\" The others use advise or advice in the wrong job."
            ],
            misconception: "A common mix-up is picking the spelling you see more often. Check whether the sentence needs a noun or a verb.",
            why: "The answer is \"My aunt will advise me about my science project.\" After will, a verb is needed, so advise fits. The other sentences use the verb advise where the noun advice is needed, or the noun advice where the verb advise is needed."
          },
          {
            id: "SK-GUM4-8-C15",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
            ],
            passages: [],
            prompt: "Choose the words that complete the sentence.",
            text: "{0} time to wash {1} hands before lunch.",
            slots: [
              {
                options: ["It's","Its","Its'","It"],
                answer: 0
              },
              {
                options: ["your","you're","yours","you"],
                answer: 0
              }
            ],
            clue: "For blank one, try saying it is. For blank two, ask who owns the hands.",
            hints: [
              "For blank one, try saying it is. For blank two, ask who owns the hands.",
              "The first word must stand for two words, and the second word must show belonging.",
              "Its' with a mark after the s is never a correct word."
            ],
            how: [
              "It is time to wash is a whole thought, so the first word stands for it is.",
              "The hands belong to you, so the second word shows belonging.",
              "The answers are It's and your. Its shows belonging, and its' is never correct. You're means you are, and yours stands alone."
            ],
            misconception: "A common mix-up is choosing you're because the sentence talks to you. The hands belong to you, so your is needed.",
            why: "The answers are It's and your. It's means it is, and your shows that the hands belong to you. The other words do not fit the sentence."
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-GUM4-8-S01",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: [],
      prompt: "Pick the line where every look-alike spelling is right.",
      choices: [
        {
          text: "Our cousins from Ohio, weary after a long highway trip, say they're driving over for supper too.",
          correct: true
        },
        {
          text: "Our cousins from Ohio, weary after a long highway trip, say their driving over for supper too."
        },
        {
          text: "Our cousins from Ohio, weary after a long highway trip, say there driving over for supper too."
        },
        {
          text: "Our cousins from Ohio, weary after a long highway trip, say they're driving over for supper, to."
        }
      ],
      clue: "Read the sound-alike words in each line and decide what each should mean.",
      hints: [
        "Read the sound-alike words in each line and decide what each should mean.",
        "Try they are for the word after say, and think about what the last word should mean.",
        "Their shows belonging, and nothing in the line belongs to the cousins."
      ],
      how: [
        "Say the long form for the word after say: they are.",
        "The last word means also, so it has two o's.",
        "The answer is \"Our cousins from Ohio, weary after a long highway trip, say they're driving over for supper too.\" The others use their or there for they are, or to for also."
      ],
      misconception: "A common mix-up is fixing only one word. Check every sound-alike word in the line.",
      why: "The answer is \"Our cousins from Ohio, weary after a long highway trip, say they're driving over for supper too.\" They're means they are, and too means also. The other lines use their or there for they are, or to for also.",
      like: ["SK-GUM4-8-P4"]
    },
    {
      id: "SK-GUM4-8-S02",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: [],
      prompt: "Pick the right word for each blank.",
      cols: ["its","it's"],
      rows: [
        {
          text: "___ raining hard outside.",
          answer: 1
        },
        {
          text: "The puppy chewed ___ rope.",
          answer: 0
        },
        {
          text: "___ a great day to swim.",
          answer: 1
        },
        {
          text: "The robot lost ___ battery.",
          answer: 0
        },
        {
          text: "I think ___ time for lunch.",
          answer: 1
        }
      ],
      clue: "Try saying it is in each blank.",
      hints: [
        "Try saying it is in each blank.",
        "If the sentence still makes sense, the word with the apostrophe fits.",
        "In The puppy chewed ___ rope, it is rope does not make sense."
      ],
      how: [
        "Say it is in each blank.",
        "It is raining hard, it is a great day and it is time for lunch make sense.",
        "The puppy's rope and the robot's battery show belonging, so those rows take its."
      ],
      misconception: "A common mix-up is adding an apostrophe to show belonging. Its needs none.",
      why: "It's means it is, so it fits It is raining, It is a great day and it is time for lunch. Its shows belonging for the puppy's rope and the robot's battery.",
      like: ["SK-GUM4-8-P5"]
    },
    {
      id: "SK-GUM4-8-S03",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: ["p4"],
      prompt: "Which spelling goes in the gap?",
      text: "Then we sat on {0} wide wooden benches to watch the playful seals splash around.",
      slots: [
        {
          options: ["two","to","too"],
          answer: 0
        }
      ],
      clue: "Decide what the gap tells about the benches.",
      hints: [
        "Decide what the gap tells about the benches.",
        "Say how many benches there were, then see which word names that amount.",
        "Too means also, and the sentence is not adding anything."
      ],
      how: [
        "The gap comes right before wide wooden benches and tells about them.",
        "A number tells how many, so choose the word that is a number.",
        "The answer is two. To shows where or comes before a verb, and too fits sentences about also or too much."
      ],
      misconception: "A common mix-up is choosing to because it appears later in the same sentence. Check the job of the gap.",
      why: "The answer is two. Two names how many benches the class sat on. To shows where or comes before a verb, and too fits sentences about also or too much.",
      like: ["SK-GUM4-8-C03"]
    },
    {
      id: "SK-GUM4-8-S04",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: ["p4"],
      prompt: "Somewhere among these five shown lines, a writer broke a spelling rule for look-alike meanings; tap whichever sentence deserves correction.",
      targets: ["p4:1:4","p4:2:1","p4:3:1","p4:3:2","p4:3:4"],
      answer: ["p4:2:1"],
      pick: 1,
      clue: "Spot the sound-alike word in every shown line, then ask what it means there.",
      hints: [
        "Spot the sound-alike word in every shown line, then ask what it means there.",
        "Check that each word does its own job: telling where, showing an owner, naming help, or naming an action.",
        "Line 8 uses too to mean more than enough, which suits slippery."
      ],
      how: [
        "Spot the sound-alike word in every shown line and decide what it means.",
        "There tells where, too means more than enough, will advise tells an action, and their shows an owner.",
        "In sentence 5, useful advise needs the word for help, advice, so it is the answer."
      ],
      misconception: "A common mix-up is thinking advise and advice can trade places. One names an action and the other names help.",
      why: "The answer is sentence 5: \"Our host gave everyone useful advise about feeding the sea turtles.\" Advice is the noun for help, so useful advice is correct. The other shown lines use there, too, advise and their correctly.",
      like: ["SK-GUM4-8-C04"]
    },
    {
      id: "SK-GUM4-8-S05",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: ["p4"],
      prompt: "What is wrong with the first word of line 6?",
      choices: [
        {
          text: "Two words squeezed into one cannot say whose shell this is; the owner spelling carries no mark.",
          correct: true
        },
        {
          text: "Turtles are animals, so every animal part must be written with extra letters added at the very end of it."
        },
        {
          text: "Shell starts the clause, so a contraction must always come first in lines of this kind here, no matter what."
        },
        {
          text: "The mark floats too high; moving it after the final letter would repair the whole spelling."
        }
      ],
      clue: "Swap in it is for It's in sentence 6 and listen.",
      hints: [
        "Swap in it is for It's in sentence 6 and listen.",
        "Ask what job the word must do for the shell.",
        "A letter that has been left out is different from an owner."
      ],
      how: [
        "Read sentence 6 with it is: It is huge shell was as wide as a kitchen table.",
        "That does not make sense, because the shell belongs to the turtle.",
        "The answer is \"Two words squeezed into one cannot say whose shell this is; the owner spelling carries no mark.\""
      ],
      misconception: "A common mix-up is thinking an apostrophe shows ownership in every word. In it's, it stands for a missing letter.",
      why: "The answer is \"Two words squeezed into one cannot say whose shell this is; the owner spelling carries no mark.\" It's is just it is squeezed together, so it cannot show that the shell belongs to the turtle. Its, with no apostrophe, shows belonging.",
      like: ["SK-GUM4-8-C05"]
    },
    {
      id: "SK-GUM4-8-S06",
      type: "ebsr",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: ["p4"],
      prompt: "Work through Part A first, then continue onward with Part B, giving careful attention throughout.",
      partA: {
        prompt: "Pick the best fix for sentence 3.",
        choices: [
          {
            text: "The otter loves to play, and its favorite toy is a ball.",
            correct: true
          },
          {
            text: "The otter loves to play, and its' favorite toy is a ball."
          },
          {
            text: "The otter loves to play, and it is favorite toy is a ball."
          },
          {
            text: "The otter loves to play, and its favorite toy are a ball."
          }
        ]
      },
      partB: {
        prompt: "Pick the statement that gives the reason for that fix.",
        choices: [
          {
            text: "A word for what the otter owns takes no apostrophe, and it's only stands for it is.",
            correct: true
          },
          {
            text: "A word for what the otter owns takes an apostrophe, and its only stands for it is."
          },
          {
            text: "It's is the right spelling, since the otter and the toy are two different things."
          },
          {
            text: "Favorite is a verb, so the word placed before it must be a contraction of two words."
          }
        ]
      },
      clue: "For A, compare the word before favorite. For B, find the statement matching the fix.",
      hints: [
        "For A, compare the word before favorite. For B, find the statement matching the fix.",
        "Say it is before favorite and judge whether the line still works.",
        "Its' is never a correct word, so that version cannot be the fix."
      ],
      how: [
        "Part A: it is favorite toy does not work, so the word before favorite must show belonging. The answer is \"The otter loves to play, and its favorite toy is a ball.\"",
        "The other versions use its', it is or a mismatched verb, and none of them fix the word before favorite.",
        "Part B: the statement is \"A word for what the otter owns takes no apostrophe, and it's only stands for it is.\""
      ],
      misconception: "A common mix-up is adding an apostrophe to show ownership. Its needs none.",
      why: "Part A: \"The otter loves to play, and its favorite toy is a ball.\" Part B: \"A word for what the otter owns takes no apostrophe, and it's only stands for it is.\" Part A: The otter loves to play, and its favorite toy is a ball. uses its to show the toy belongs to the otter. Part B: a word for what the otter owns takes no apostrophe, and it's only stands for it is.",
      like: ["SK-GUM4-8-C06"]
    },
    {
      id: "SK-GUM4-8-S07",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: ["p5"],
      prompt: "Choose the spelling that completes the second line of the beach story, so the whole thing reads smoothly.",
      text: "{0} ready to pass out blue gloves and sticky name tags to all the tired helpers.",
      slots: [
        {
          options: ["They're","Their","There","Their's"],
          answer: 0
        }
      ],
      clue: "Put each choice in the gap and see which one gives a whole, sensible sentence.",
      hints: [
        "Put each choice in the gap and see which one gives a whole, sensible sentence.",
        "Say they are in the gap and listen.",
        "There points to a place, and no place is named in this line."
      ],
      how: [
        "Say each choice in the gap and listen for a whole sentence.",
        "They are ready to pass out blue gloves makes sense, so the contraction fits.",
        "The answer is They're. Their shows belonging, there points to a place, and their's is never correct."
      ],
      misconception: "A common mix-up is choosing Their because it is the spelling seen first. Test it with they are.",
      why: "The answer is They're. They're means they are, and They are ready to pass out gloves makes sense. Their shows belonging, there points to a place, and their's is never correct.",
      like: ["SK-GUM4-8-C07"]
    },
    {
      id: "SK-GUM4-8-S08",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: ["p5"],
      prompt: "Somewhere among these five shown lines, a writer picked a mismatched spelling; tap whichever sentence deserves correction.",
      targets: ["p5:1:3","p5:2:1","p5:2:3","p5:3:2","p5:3:3"],
      answer: ["p5:2:1"],
      pick: 1,
      clue: "Spot the to, too or two in every shown line and decide what it means there.",
      hints: [
        "Spot the to, too or two in every shown line and decide what it means there.",
        "Check whether each word shows a place or comes before a verb, means also or too much, or names a number.",
        "Line 10 uses too to mean more than enough, which suits blue."
      ],
      how: [
        "Spot the to, too or two in every shown line and decide what it means.",
        "Sentences 3 and 9 use two as a number, sentence 7 uses too to mean also, and sentence 10 uses too to mean more than enough.",
        "In sentence 5, the first to is right before a verb, but the second to should name how many jugs, so it needs two."
      ],
      misconception: "A common mix-up is trusting any word that sounds right. Sound-alike words need their meaning checked.",
      why: "The answer is sentence 5: \"Mom asked me to carry to jugs of water down the sandy path.\" In sentence 5, the writer means the number 2, so two is needed. The other shown lines use two, too and to correctly.",
      like: ["SK-GUM4-8-C08"]
    },
    {
      id: "SK-GUM4-8-S09",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: ["p5"],
      prompt: "Line 6 has advise right after helpful. Should that spelling stay? Choose the strongest explanation.",
      choices: [
        {
          text: "No, the spot after helpful wants a thing someone receives, and that thing is spelled with a c.",
          correct: true
        },
        {
          text: "Yes, any spelling finishing with -ise belongs to action words, so the line can stay as printed."
        },
        {
          text: "Yes, because the ranger performs an action, and action spellings fit whenever somebody acts."
        },
        {
          text: "No, since advise cannot be found in school writing, so the line needs a fresh invention."
        }
      ],
      clue: "Look at the word before advise and ask what sort of word comes next.",
      hints: [
        "Look at the word before advise and ask what sort of word comes next.",
        "Some words are things and others are actions, so decide which kind follows helpful.",
        "How a word ends does not decide whether it is a verb or a noun."
      ],
      how: [
        "Read line 6: The ranger gave us helpful advise about picking up sharp glass.",
        "Helpful describes a thing, so a noun must come next. The ranger gave help, and the noun for that help is advice.",
        "The answer is \"No, the spot after helpful wants a thing someone receives, and that thing is spelled with a c.\""
      ],
      misconception: "A common mix-up is choosing the action word because the ranger is doing something. The line needs the word for the help.",
      why: "The answer is \"No, the spot after helpful wants a thing someone receives, and that thing is spelled with a c.\" The line needs the noun advice, which names the help. Advise is the action word.",
      like: ["SK-GUM4-8-C09"]
    },
    {
      id: "SK-GUM4-8-S10",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: [],
      prompt: "Pick the TWO lines that use sound-alike words correctly.",
      pick: 2,
      choices: [
        {
          text: "The puppy hid its toy under the couch cushion.",
          correct: true
        },
        {
          text: "You're welcome to sit by the window.",
          correct: true
        },
        {
          text: "Your a great singer, and everyone loved the song."
        },
        {
          text: "The oak tree lost it's leaves early this fall."
        },
        {
          text: "Its time to put the toys away before dinner."
        }
      ],
      clue: "Say the long form of each word with an apostrophe, and see whether the line still works.",
      hints: [
        "Say the long form of each word with an apostrophe, and see whether the line still works.",
        "Keep the lines where the word shows belonging with no apostrophe, or stands for a pair of words.",
        "One line needs it is, and no line about leaves can use that form to show owning."
      ],
      how: [
        "Say the long form of each word: you are, it is.",
        "In \"The puppy hid its toy under the couch cushion.\" its shows whose toy. In \"You're welcome to sit by the window.\" you're means you are.",
        "The other lines use your for you are, it's for belonging, and its for it is."
      ],
      misconception: "A common mix-up is choosing a line only because it has an apostrophe. Check what the word means.",
      why: "The answers are \"The puppy hid its toy under the couch cushion.\" and \"You're welcome to sit by the window.\" Its shows whose toy, and you're means you are. The other lines use your for you are, it's for belonging, and its for it is.",
      like: ["SK-GUM4-8-C10"]
    },
    {
      id: "SK-GUM4-8-S11",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: [],
      stem: "Line A: It's cold today. Line B: The cat licked its paw.",
      prompt: "Study this pair of sound-alikes carefully, then pick whichever statement describes their separate duties most accurately overall.",
      choices: [
        {
          text: "It's in Line A stands for it is, but its in Line B tells that the paw has an owner.",
          correct: true
        },
        {
          text: "It's in Line A tells that the weather has an owner, but its in Line B stands for it is."
        },
        {
          text: "Each one stands for it is, since both appear right before another word in the line."
        },
        {
          text: "Each one tells who owns something, since both follow a capital letter at the start."
        }
      ],
      clue: "Say it is for the word in each line.",
      hints: [
        "Say it is for the word in each line.",
        "See which line still makes sense with it is, and what the other word shows.",
        "The two words do different jobs, so a choice saying they match cannot be right."
      ],
      how: [
        "Try it is in each line: It is cold today works, but The cat licked it is paw does not.",
        "In B, its shows whose paw it is.",
        "The answer is \"It's in Line A stands for it is, but its in Line B tells that the paw has an owner.\""
      ],
      misconception: "A common mix-up is thinking the two words are spelled differently only for show. It's means it is, and its shows belonging.",
      why: "The answer is \"It's in Line A stands for it is, but its in Line B tells that the paw has an owner.\" In A, it's means it is. In B, its shows that the paw belongs to the cat.",
      like: ["SK-GUM4-8-C11"]
    },
    {
      id: "SK-GUM4-8-S12",
      type: "dropdown",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: ["p6"],
      prompt: "Which spelling goes in the gap?",
      text: "After three days of heavy rain, the trail by the river felt {0} slippery for hikers in smooth rubber boots.",
      slots: [
        {
          options: ["too","to","two"],
          answer: 0
        }
      ],
      clue: "Decide what the gap means here: where, also, beyond what is wanted, or how many.",
      hints: [
        "Decide what the gap means here: where, also, beyond what is wanted, or how many.",
        "Try each meaning in the gap, and see which one the rain and the boots support.",
        "Two is a number, and nothing in this line is being counted at all."
      ],
      how: [
        "The line says the trail felt slippery for smooth boots, so the word must mean more than enough.",
        "Too can mean more than enough.",
        "The answer is too. To shows where or comes before a verb, and two is a number."
      ],
      misconception: "A common mix-up is choosing to because it is the spelling used most often. Check what the word means.",
      why: "The answer is too. Too means more than enough, so the trail was more slippery than the boots could handle. To shows where or comes before a verb, and two is a number.",
      like: ["SK-GUM4-8-C12"]
    },
    {
      id: "SK-GUM4-8-S13",
      type: "ms",
      points: 2,
      dok: 3,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: ["p6"],
      prompt: "This particular passage line carries a pair of slipups, so mark both fixes that mend everything.",
      pick: 2,
      choices: [
        {
          text: "Change your to you're, which stands for you are.",
          correct: true
        },
        {
          text: "Change the second to to two, which names a number.",
          correct: true
        },
        {
          text: "Change your to yours, which stands alone without any noun after it."
        },
        {
          text: "Change the first to to too, which can mean also, as in me too."
        },
        {
          text: "Change going to gone, which fits an event finished long ago."
        }
      ],
      clue: "Say the long form of each word that could be a contraction, and check what each word should show.",
      hints: [
        "Say the long form of each word that could be a contraction, and check what each word should show.",
        "A fix must keep the meaning: Grandpa tells what someone is about to need, and he gives a count of pairs.",
        "Yours stands alone and cannot sit before going, so that fix cannot be one of the two."
      ],
      how: [
        "Your going and to extra do not make sense, so both words need new spellings.",
        "You're stands for you are, and two names how many pairs of socks.",
        "The answers are \"Change your to you're, which stands for you are.\" and \"Change the second to to two, which names a number.\" The others use yours, too or gone."
      ],
      misconception: "A common mix-up is fixing only one word. Both your and the second to are the wrong words here.",
      why: "The answers are \"Change your to you're, which stands for you are.\" and \"Change the second to to two, which names a number.\" You're means you are, and two names how many pairs. The other fixes use yours, too or gone.",
      like: ["SK-GUM4-8-C13"]
    },
    {
      id: "SK-GUM4-8-S14",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: [],
      prompt: "Which line has advice or advise in the right place?",
      choices: [
        {
          text: "A trainer will advise each swimmer on safe breathing.",
          correct: true
        },
        {
          text: "Kindly offer your helpful advise on safe breathing."
        },
        {
          text: "A nurse shared useful advise on healthy sleep habits."
        },
        {
          text: "A teacher will advice the whole team early next week."
        }
      ],
      clue: "Decide whether each line needs a word that names help or a word that tells an action.",
      hints: [
        "Decide whether each line needs a word that names help or a word that tells an action.",
        "The word after will, or after helpful or useful, shows which one is needed.",
        "The line with will advice puts a noun where a verb belongs."
      ],
      how: [
        "Decide whether each line needs the help itself or the act of giving help.",
        "After will, a verb is needed, and advise is the verb. After helpful or useful, the noun advice is needed.",
        "The answer is \"A trainer will advise each swimmer on safe breathing.\" The others use advise or advice in the wrong job."
      ],
      misconception: "A common mix-up is picking the spelling seen more often. Check whether the line needs a noun or a verb.",
      why: "The answer is \"A trainer will advise each swimmer on safe breathing.\" After will, a verb is needed, so advise fits. The other lines use the verb advise where the noun advice is needed, or the noun advice where the verb advise is needed.",
      like: ["SK-GUM4-8-C14"]
    },
    {
      id: "SK-GUM4-8-S15",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.L.GC.1:I:correctly-use-frequently-confused-words-e-g-to-t"
      ],
      passages: [],
      prompt: "Pick the two words that finish the line.",
      text: "{0} sure {1} bus will come soon.",
      slots: [
        {
          options: ["They're","Their","There","Their's"],
          answer: 0
        },
        {
          options: ["their","there","they're","theirs"],
          answer: 0
        }
      ],
      clue: "For blank one, try saying they are. For blank two, ask who owns the bus.",
      hints: [
        "For blank one, try saying they are. For blank two, ask who owns the bus.",
        "The first word must stand for two words, and the second word must show belonging.",
        "There points to a place, and no place is named anywhere in the line."
      ],
      how: [
        "They are sure is a whole thought, so the first word stands for they are.",
        "The bus belongs to them, so the second word shows belonging.",
        "The answers are They're and their. There points to a place, and theirs stands alone."
      ],
      misconception: "A common mix-up is using the same word twice because both blanks sound alike. The two blanks do different jobs.",
      why: "The answers are They're and their. They're means they are, and their shows that the bus belongs to them. The other words do not fit those jobs.",
      like: ["SK-GUM4-8-C15"]
    }
  ],
  addons: {
    "SK-GUM4-8-P1": {
      hints: [
        "Think about what the word tells: where something goes, also, or a count.",
        "Check whether a place follows the blank, and whether the word before it is an action.",
        "Two names a number, and the sentence does not count anything."
      ],
      how: [
        "The blank comes right before the library, a place.",
        "The word must show where the walk went.",
        "The answer is to. Too means also, and two is a number."
      ],
      misconception: "A common mix-up is choosing too because it sounds longer. Check what the word tells."
    },
    "SK-GUM4-8-P2": {
      hints: [
        "Ask whose coats they are.",
        "Choose the word that shows the coats belong to someone.",
        "There tells where, and the sentence already says where, on the hooks."
      ],
      how: [
        "The coats belong to the kids.",
        "The word before coats must show belonging.",
        "The answer is their. There tells where, and they're means they are."
      ],
      misconception: "A common mix-up is choosing there because it looks close. Their shows belonging."
    },
    "SK-GUM4-8-P3": {
      hints: [
        "Say it is in the blank and see if it works.",
        "Think about who the wings belong to.",
        "Its' is never a correct word, so it cannot fit any sentence."
      ],
      how: [
        "Try it is: The bird flapped it is wings does not make sense.",
        "The wings belong to the bird, so the word must show belonging.",
        "The answer is its. It's means it is, and its' is never correct."
      ],
      misconception: "A common mix-up is adding an apostrophe to show belonging. Its needs none."
    },
    "SK-GUM4-8-P4": {
      hints: [
        "Look at each sound-alike word and say what it should mean.",
        "Try saying they are in place of the first word, and check the word before go.",
        "Neither also nor more than enough fits before go, so too does not belong there."
      ],
      how: [
        "Say they are in place of the first word: They are ready to go home now.",
        "To comes before the action word go.",
        "The answer is \"They're ready to go home now.\" The others use their, there or too in the wrong place."
      ],
      misconception: "A common mix-up is choosing the sentence with the most familiar spelling. Check each word's meaning."
    },
    "SK-GUM4-8-P5": {
      hints: [
        "Put you are into each blank.",
        "If the sentence still makes sense, the word with the apostrophe fits.",
        "In ___ shoe is untied, you are shoe is not a phrase that makes sense."
      ],
      how: [
        "Say you are in each blank.",
        "You are a fast runner and I think you are right make sense.",
        "Your shoe and your lunch box show belonging."
      ],
      misconception: "A common mix-up is choosing the word with the apostrophe every time. Test it with you are."
    }
  },
  /* B8a:core:end */
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

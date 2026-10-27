/* Lessons: Foundations, fluency (3.F.F.1.b, c) and cursive (3.F.H.3.a, 3.F.H.4.a, b).
   Hands-on skills: practiced with the read-aloud timer or a printable tracing
   sheet, and checked off by a grown-up. Taught in class; not on the Milestones. */
(function () {
  const FLUENCY = {
    kind: "fluency",
    how: ["Pick a passage the reader has not read before. The reader reads out loud for one minute. A grown-up follows along on the screen and taps any word that is skipped or read wrong. If the reader fixes a word on their own, tap it a second time: it counts as correct and as a self-correction. When the minute is over, ask, \"What was it mostly about?\""],
    goal: { fall: 83, winter: 97, spring: 112 },
    goalSource: "the 50th percentile, or median, of national grade 3 norms for a first reading of a new passage: Hasbrouck and Tindal, 2017",
    passages: [
      { title: "The Night the Lights Went Out",
        text: "The storm started just after dinner. Rain tapped on the windows, and thunder rolled over the hills like a giant bowling ball. Then, with a loud pop, every light in the house went dark. \"Nobody move,\" said Dad. \"I will find the flashlight.\" Tasha sat very still on the couch. She could hear the clock ticking in the kitchen and the wind whistling around the porch. Her little brother, Marcus, grabbed her hand. \"Are you scared?\" he whispered. \"A little,\" Tasha said. \"But I have an idea.\" A beam of light swept across the room as Dad came back. Tasha took the flashlight and pointed it at the wall. She made a rabbit with her fingers. Its long ears wiggled in the bright circle. Marcus laughed and made a dog that barked at the rabbit. Soon the whole family was making shadow animals. Mom made a bird that flapped across the ceiling. Dad made a crocodile that snapped at everyone's toes. They laughed so hard that nobody noticed when the storm grew quiet. Then, with another pop, the lights came back on. Marcus groaned. \"Can we turn them off again?\" he asked. Dad smiled and reached for the switch. \"Just for ten more minutes,\" he said." },
      { title: "How Bees Make Honey",
        text: "Honey is made by bees, and it takes a lot of teamwork. It begins when a worker bee flies from flower to flower. Inside each flower is a sweet liquid called nectar. The bee sips the nectar with its long tongue and stores it in a special part of its body called the honey stomach. When the honey stomach is full, the bee flies back to the hive. There, it passes the nectar to younger bees that stay inside. These house bees mix the nectar in their mouths and pass it from bee to bee. Then they place it into the small six-sided rooms of the honeycomb. At first, the nectar is runny and full of water. To dry it out, the bees fan their wings over the honeycomb. The moving air helps the extra water dry up. Slowly, the nectar turns thick and sticky. When the honey is ready, the bees cover each room with a thin lid of wax. The honey is saved for the winter, when there are no flowers to visit. A single bee makes only a tiny bit of honey in its whole life. That is why a hive needs thousands of busy workers. The next time you taste honey, you can thank a whole team of bees." },
      { title: "Saturday at the Market",
        text: "Every Saturday morning, Luis and his grandmother walk to the farmers market in the town square. Grandma carries a big straw basket, and Luis carries the list. The market is busy and loud. Farmers set up tables under bright tents. One table is piled high with red tomatoes and green peppers. Another has jars of golden honey and baskets of fresh peaches. Luis likes the bread table best because it smells warm and sweet. \"First, we need six peaches,\" Luis reads from the list. Grandma picks each peach carefully. She presses it gently to see if it is ripe. \"A good peach is soft but not mushy,\" she tells him. Next, they buy a bunch of carrots with the leafy tops still on. The farmer tells Luis that the carrots were pulled from the ground only yesterday. Luis is surprised that food can be so fresh. Before they leave, Grandma lets Luis choose one treat. He thinks about the cookies and the lemonade. In the end, he picks a small loaf of cinnamon bread to share. On the walk home, the basket is heavy, so they take turns carrying it. Luis already knows what he wants to put on next week's list." },
      { title: "How Seeds Travel",
        text: "Plants cannot walk, but their seeds still find ways to travel. Moving away from the parent plant gives a new plant room to grow and plenty of sunlight. Some seeds ride on the wind. A dandelion seed has a tiny tuft of soft hairs that works like a parachute. One strong breeze can carry it far across a field. Maple seeds have flat wings. When they fall, they spin like little helicopters and drift away from the tree. Other seeds hitch a ride on animals. A burr is covered with tiny hooks. When a dog or a deer brushes past, the burr grabs its fur and gets carried along until it drops off somewhere new. Some seeds travel inside animals. Birds eat juicy berries, and the seeds pass through their bodies. Later, the seeds land on the ground far from the bush where the berries grew. A few seeds even float. A coconut can drift on the ocean for weeks before it washes up on a sandy beach and starts to grow. Wind, water and animals all help seeds move. The next time you see a dandelion puff, blow on it and watch the seeds fly. You will be helping them travel too." },
      { title: "The Backyard Campout",
        text: "Jamal had wanted to go camping all summer, but the family trip was months away. \"Why not camp tonight?\" Mom asked. \"Right here in the backyard.\" Jamal grinned so wide that his cheeks hurt. After dinner, he and his sister, Keisha, dragged the old tent out of the garage. The poles were tangled, and one stake was missing. Keisha read the directions out loud while Jamal held up the poles. It took three tries, but at last the tent stood straight. They found a flat rock to use in place of the missing stake. When the sky turned orange, Dad lit a lantern. The family sat in a circle and told stories. Keisha told one about a lost puppy that found its way home. Jamal told one about a dragon who was afraid of the dark. Everyone laughed when the dragon slept with a night-light. Later, Jamal and Keisha crawled into their sleeping bags. Crickets chirped, and an owl hooted from the pine tree. \"Do you hear that?\" Keisha whispered. \"It sounds like the owl is saying good night.\" Jamal listened. Then he yawned. \"Good night, owl,\" he said. In the morning, both of them agreed it was the best trip they had ever taken." },
      { title: "The Great Lunchbox Mix-Up",
        text: "On Monday, Ava opened her lunchbox and found a surprise. Instead of her turkey sandwich, there were two hard-boiled eggs, a pickle and a note that said, \"Have a great day, Benny!\" Ava looked at the lunchbox again. It was blue with a white star, just like hers. But hers had a scratch on the handle, and this one did not. Across the table, a boy named Benny was staring into his own lunchbox. He held up a turkey sandwich and a bag of grapes. \"This is not my lunch,\" he said. \"I think it is mine,\" Ava said with a laugh. They traded lunchboxes, but the next day the same thing happened. Their lunchboxes sat side by side on the cart, and nobody could tell them apart. Ava had an idea. She asked her teacher for a roll of bright yellow tape. She wrapped a strip around the handle of her lunchbox. Then she gave Benny a strip of green tape for his. On Wednesday, Ava spotted the yellow handle right away. Benny found his green one. From then on, there were no more mix-ups. And sometimes, just for fun, they traded a pickle for a few grapes." }
    ]
  };

  /* 3.F.F.1.c is about expression, so the reader practices one passage first.
     A practiced reading is not compared with the first-reading norms. */
  const FLUENCY_PRACTICED = Object.assign({}, FLUENCY, {
    practiced: true,
    how: ["For expression, pick one passage and read it together a few times this week. Then the reader reads it out loud for one minute while a grown-up follows along and taps any word that is skipped or read wrong. Use passage 5 or 6. Both have characters talking, which is great for practicing voices, and it leaves passages 1 to 4 new for the speed check."]
  });

  PP.addLesson({
    code: "3.F.F.1.b",
    title: "Reading accurately",
    teach: {
      big: "Good readers read the words on the page correctly, and they understand what they read.",
      points: [
        "Accuracy means reading each word the way it is written, without skipping, adding or changing words.",
        "When a word is new, slow down and use what you know: sound it out in parts, look for a base word, and check the sentence around it.",
        "If something does not sound right, go back and reread. Fixing your own mistakes is what strong readers do.",
        "A passage is a good fit for reading on your own when you can read nearly every word correctly. Many teachers use about 19 out of every 20 words as a rough guide, not a pass mark."
      ],
      example: {
        label: "Example",
        lines: ["The text says: \"The puppy chased the ball across the yard.\"", "A reader says: \"The puppy chased the ball across the yard.\""],
        note: "Every word matches the page. If the reader had said \"a ball\" instead of \"the ball\", or skipped \"the yard\", those would count as mistakes, even though the meaning is close."
      },
      tip: "The Milestones does not measure how fast you read out loud, but every question depends on reading the passage accurately. One misread word can change the answer."
    },
    learn: [
      {
        show: ["The text says: \"Grandpa planted carrots in the garden.\"", "A reader says: \"Grandpa painted carrots in the garden.\""],
        ask: "What went wrong, and how should the reader fix it?",
        steps: [
          "Compare the two sentences word by word. \"Planted\" was read as \"painted\".",
          "Ask: does \"painted carrots\" make sense in a garden? Not really.",
          "Look for the base word: plant + ed. Then reread the whole sentence."
        ],
        answer: "The reader changed planted to painted. Finding the base word plant, adding -ed and rereading fixes it, and now the sentence makes sense."
      },
      {
        show: ["A reader read a page with 100 words and made 3 mistakes."],
        ask: "Is this page a good fit for reading alone?",
        steps: [
          "Subtract the mistakes: 100 - 3 = 97 words read correctly.",
          "97 out of 100 is 97%.",
          "Compare with the goal of about 95%. 97% is above it."
        ],
        answer: "Yes. 97 out of 100 words correct is 97% accuracy, so this page is a good fit for reading alone."
      }
    ],
    parent: "Use the read-aloud timer on a new passage once or twice a week, starting with passages 1 to 4. When those have all been read, have your child read a page of a new grade 3 library book for one minute: count the words read, subtract the mistakes, and look at the typical grade 3 scores the timer shows (83 in fall, 97 in winter, 112 in spring) as a rough guide only: library pages differ in difficulty, and this is home practice, not a test. Accuracy matters more than speed: if your child misses more than about 5 words in 100, read the passage together first, then let them try again.",
    coach: {
      mixup: "Jumping in on every hard word. If you say the word right away, your child practices waiting for help, not reading. Give a few seconds, then a prompt, and only then the word.",
      strong: "On a passage they have not seen before, reads almost every word correctly (about 95 or more of every 100), slows down at a new word and works through it in parts, and goes back to fix a word that did not make sense.",
      notyet: "Guesses from the first letter, skips or adds small words, or keeps going when a sentence does not make sense. Try an easier passage, or read it together first and then let your child read it alone.",
      ido: "Read the first few sentences of a new passage aloud. At a long word, think out loud: \"I don't know this one. I'll cover the ending, read the first part, then add the rest.\" Then check that the sentence makes sense.",
      wedo: "Read the next paragraph together, at the same time. When either of you reaches a hard word, stop, break it into parts together, and reread the sentence.",
      youdo: "Your child reads a passage they have not read before, out loud, while you follow along with the timer and tap any word that is skipped or read wrong. When they stop on a word, wait about three seconds, then ask, \"What part do you know?\" before telling them. Afterward, ask what it was mostly about.",
      everyday: "Once or twice a week, have your child read aloud a page they have never seen from a different kind of text each time: a story, a science or history book, a poem, a recipe or directions. Watch for fewer and fewer stops on new pages over a few weeks. That is increasing accuracy."
    },
    activity: FLUENCY,
    /* B9:exception:start */
    /* Expansion 2026-10-22, batch B9: performance sequence instead of fifteen selected-response items (practice-exceptions.json). NEEDS INDEPENDENT REVIEW. */
    coreException: {
      kind: "performance",
      rationale: "Accuracy on text a reader has never seen is measured by listening, not by choosing answers. Three dated readings of new passages of different kinds take the place of fifteen items.",
      tasks: [
        {
          title: "Reading 1: A story",
          how: "Pick a short story passage the reader has not read. Write today's date. The reader reads it aloud once. The grown-up follows along and puts a tick above each word that is skipped, added or changed. Count the ticks. Many teachers use about 19 right out of every 20 words as a rough guide to a good fit. It is a guide, not a pass mark.",
          checklist: [
            "The date and passage name are written down.",
            "Mistakes were counted but the reader was not stopped.",
            "The reader said what the story was about when finished."
          ]
        },
        {
          title: "Reading 2: An information passage",
          how: "Use a new passage about real things, such as animals or places. Write the date. The reader reads aloud while the grown-up marks mistakes. Then talk about hard words. Ask the reader how they worked out any new word.",
          checklist: [
            "The reader read nearly every word correctly (the number of mistakes per 100 words was written down).",
            "The reader used word parts or the sentence to work out a new word.",
            "The date and the number of mistakes were written down."
          ]
        },
        {
          title: "Reading 3: A poem",
          how: "Use a short poem the reader has not seen. Write the date. The reader reads it aloud once. The grown-up marks any word that was skipped, added or changed. Compare the three dated readings by mistakes per 100 words, since the texts differ in length. A poem may be harder, so look for the overall direction, not one number.",
          checklist: [
            "The reader read each line the way it is written.",
            "The reader went back to fix a word that did not sound right.",
            "The grown-up compared mistakes per 100 words across the three readings."
          ]
        }
      ]
    },
    /* B9:exception:end */
    check: {
      intro: "Grown-up: over a week or two, listen to your child read new passages out loud with the timer, then check each line that is true.",
      items: [
        "Read two new passages of different kinds (a story and a fact passage) at about 95% accuracy or better. The timer works this out.",
        "When a word came out wrong, noticed it and fixed it without help. (If there were no mistakes, try a harder passage or a page of a chapter book. If there are still none, check this line.)",
        "Told in their own words what each passage was mostly about.",
        "Read long or new words by breaking them into parts, not by guessing.",
        "Over two weeks or more, accuracy on new passages stayed at about 95% or better, or went up. The timer's list of recent readings shows this."
      ]
    }
  });

  PP.addLesson({
    code: "3.F.F.1.c",
    title: "Reading smoothly with expression",
    teach: {
      big: "Read like you are talking: not too fast, not too slow, in phrases, with feeling that fits the words.",
      points: [
        "Read in phrases, which are groups of words that go together, instead of one word at a time.",
        "Let the punctuation guide your voice: stop at a period, pause at a comma, make a question sound like asking (yes-or-no questions usually go up at the end), and show feeling at an exclamation point.",
        "Change your voice for characters who are talking, the way they would really sound.",
        "Rereading the same passage a few times is a great way to get smoother."
      ],
      example: {
        label: "Example",
        lines: ["\"Wait! Is that a snake? No, it's just a stick.\""],
        note: "Read \"Wait!\" with surprise. Make the yes-or-no question go up at the end. Pause at the comma after \"No\", then say the last part calmly, with relief."
      },
      tip: "Smooth reading saves time on the Milestones, which has long passages. It also helps you understand what you read."
    },
    learn: [
      {
        show: ["After lunch the class walked to the library."],
        ask: "Where should the reader group the words?",
        steps: [
          "Look for words that belong together: who or what, what happened, and where or when.",
          "\"After lunch\" tells when. \"The class walked\" tells who did what. \"To the library\" tells where.",
          "Read each group smoothly, with a tiny pause between groups."
        ],
        answer: "Read it in three phrases: after lunch / the class walked / to the library."
      },
      {
        show: ["\"I can't find my shoe,\" Ben groaned. \"We are going to be late!\""],
        ask: "How should this sound when read aloud?",
        steps: [
          "Peek ahead before you read the quote: \"Ben groaned\" comes after his words and tells how he feels. He is upset.",
          "The first sentence should sound tired and frustrated.",
          "The exclamation point at the end shows worry, so read it a little louder and faster."
        ],
        answer: "Read Ben's words in an upset, frustrated voice, and make the last sentence sound worried and hurried."
      }
    ],
    parent: "Model it: read a page aloud with lots of expression, then have your child read the same page. Repeated reading of one short passage, three or four times over a week, builds smoothness fast. For a fair speed check against the national numbers, use the Reading accurately skill with a passage your child has not read before.",
    coach: {
      mixup: "Thinking that faster is better. A child who races and runs through periods and commas is not reading with expression, even if the words-per-minute number is high. Talking speed is the goal.",
      strong: "Sounds like talking: reads in phrases, drops the voice at periods, makes yes-or-no questions go up, shows feeling at exclamation points, and changes voice for characters. Can tell you afterward what happened and how a character felt.",
      notyet: "Reads word by word in a flat voice, runs through periods, or reads so fast that the meaning gets lost. Go back to We do and read short parts together.",
      ido: "Read three or four sentences of a passage aloud with lots of expression. Then read the same sentences in a flat robot voice. Ask which one was easier to understand, and why.",
      wedo: "Echo reading: read one sentence with expression, then your child reads the same sentence the same way. Next, read a whole paragraph together at the same time.",
      youdo: "Your child practices one passage three or four times over a week, then reads it to you with the timer. After the reading, mark the expression and pause notes under the result, then ask what happened and how a character felt.",
      everyday: "Use many kinds of text: read a poem like a performer, a page of a fact book like a news reporter, and a story with talking by giving each character a voice. Reading to a younger child, a pet or a relative on a call gives a real reason to practice."
    },
    activity: FLUENCY_PRACTICED,
    /* B9:exception:start */
    /* Expansion 2026-10-22, batch B9: performance sequence instead of fifteen selected-response items (practice-exceptions.json). NEEDS INDEPENDENT REVIEW. */
    coreException: {
      kind: "performance",
      rationale: "Phrasing and expression are heard, not selected. Three rehearse-and-perform rounds with an adult checklist take the place of fifteen items.",
      tasks: [
        {
          title: "Round 1: Pause at the marks",
          how: "Choose a short passage with commas and periods. Read it aloud to the child first, pausing at each mark. The reader practices it two times, then reads it once to the grown-up. The reader should stop briefly at commas and a little longer at periods.",
          checklist: [
            "The reader paused at commas.",
            "The reader paused longer at periods.",
            "The reader's voice went down at the end of statements."
          ]
        },
        {
          title: "Round 2: Questions and surprises",
          how: "Choose a passage with a question and an exclamation. Talk about how those sentences should sound. The reader practices, then performs it. The grown-up listens for a rising voice on yes or no questions such as \"Are you coming?\" and a strong voice on exclamations. Questions that start with who, what, where or why usually go down at the end. When the reading is done, the reader tells in one sentence what the passage was about.",
          checklist: [
            "The reader's voice went up on yes or no questions and down on who, what, where and why questions.",
            "The reader showed excitement on exclamations.",
            "The reader read in phrases, not word by word."
          ]
        },
        {
          title: "Round 3: Characters",
          how: "Choose a passage where characters talk. The reader practices a different voice for each speaker, then performs it for the grown-up. Ask the reader how each character feels and how the voice shows it.",
          checklist: [
            "The reader changed voice for each speaker.",
            "The reader's voice matched how the character feels.",
            "The reading sounded like talking."
          ]
        }
      ]
    },
    /* B9:exception:end */
    check: {
      intro: "Grown-up: listen to your child read a passage they have practiced (passage 5 or 6, which have characters talking), then check each line that is true.",
      items: [
        "Read at a talking pace: not rushed, and not word by word.",
        "Paused at commas and stopped at periods.",
        "Made questions sound like asking and showed feeling for exclamations.",
        "Read in phrases, groups of words that go together.",
        "Changed their voice for characters who were speaking.",
        "After reading, told what happened and how one character felt."
      ]
    }
  });

  PP.addLesson({
    code: "3.F.H.3.a",
    title: "Reading cursive",
    teach: {
      big: "Cursive letters are joined together, but they are the same letters you already know.",
      points: [
        "In cursive, the letters in a word connect, so look for where one letter ends and the next begins.",
        "Some letters look very different in cursive. Watch for lowercase r, s, z and f, and capital letters like G, Q, S, T and Z.",
        "Read cursive one word at a time. If a word is hard, find the letters you are sure of first, then think about what word would make sense.",
        "Spaces between words still show where each word ends. In this font, the letter s can leave a small gap after it, so look at the whole word and use the wider spaces to find where words end."
      ],
      examples: [
        { label: "Print and cursive", lines: ["Print: I like to read.", "Cursive: I like to read."], note: "Same words, same letters. In cursive the letters in each word are joined." },
        { label: "Tricky letters", lines: ["Cursive: r s z f", "Cursive: G Q S T Z"], note: "These are r, s, z, f and the capitals G, Q, S, T, Z. They look the least like print, so practice them first." }
      ],
      tip: "Not on the Milestones, but handwritten notes, cards and old letters are often in cursive."
    },
    learn: [
      {
        show: ["Cursive: The dog ran fast."],
        ask: "What does this cursive sentence say?",
        steps: [
          "Find the words using the spaces. There are four words.",
          "Read the easy letters first. The d, o and g look a lot like print, so the second word is dog. The first word has three letters and starts with a capital: The.",
          "Use the letters you know in the rest: r-a-n and f-a-s-t. Check that the sentence makes sense."
        ],
        answer: "It says: The dog ran fast."
      },
      {
        show: ["Cursive: Sam swims"],
        ask: "Which letters in this note are the tricky cursive s?",
        steps: [
          "Learn the shape: a lowercase cursive s swings up to a point, then curves down and closes on the bottom line, like a little sail.",
          "Look at the second word. It begins with that sail shape and ends with one. The capital S at the start of Sam is a big loop.",
          "Read the whole note: Sam swims."
        ],
        answer: "Sam starts with capital S, and swims has a lowercase s at the beginning and at the end."
      }
    ],
    parent: "Write your grocery list or a short note to your child in cursive, and let them read it to you. Birthday cards from relatives are great real-life cursive practice too. The cursive on this page uses one font, and your child's school may teach a different model, so letters can look a little different. In this font the letter s can leave a small gap after it, so a word may look as if it has been split. If your child pauses at a gap, point out that the whole word is joined and that the wider spaces show where words end.",
    practice: [
      { id: "SK-FH3a-P1", type: "mc", points: 1, dok: 1, passages: [],
        prompt: "Read the cursive sentence. Which sentence matches it?",
        stem: "Cursive: My cat is gray.",
        choices: [
          { text: "My cat is gray.", correct: true },
          { text: "My car is gray." },
          { text: "My car is green." },
          { text: "My cat is green." }
        ],
        clue: "Read one word at a time. Look closely at every letter of the second word and at the last word.",
        why: "The answer is \"My cat is gray.\" The second word ends in t, not r, and the last word is gray: g-r-a-y." },
      { id: "SK-FH3a-P2", type: "mc", points: 1, dok: 1, passages: [],
        prompt: "Read the cursive word. What word is it?",
        stem: "Cursive: frog",
        choices: [
          { text: "frog", correct: true },
          { text: "from" },
          { text: "flog" },
          { text: "flag" }
        ],
        clue: "Read the letters from the left. Look closely at the second letter and the last letter.",
        why: "The answer is frog: f-r-o-g. The second letter is the cursive r, and the last letter is g with a loop below the line. From ends in m, which has humps and stays on the line, and flog and flag have an l as the second letter." },
      { id: "SK-FH3a-P3", type: "mc", points: 1, dok: 2, passages: [],
        prompt: "Read the cursive note. What does it ask you to do?",
        stem: "Cursive: Please feed the fish.",
        choices: [
          { text: "Feed the fish.", correct: true },
          { text: "Find the dish." },
          { text: "Feed the dog." },
          { text: "Fill the sink." }
        ],
        clue: "Read the note word by word. Find the action word after Please, then the last word.",
        why: "The answer is \"Feed the fish.\" The note says Please feed the fish." },
      { id: "SK-FH3a-P4", type: "ms", points: 2, dok: 2, passages: [],
        prompt: "Read the cursive list. Which TWO of these things are on the list?",
        stem: ["Cursive: milk", "Cursive: bread", "Cursive: apples"],
        pick: 2,
        choices: [
          { text: "milk", correct: true },
          { text: "apples", correct: true },
          { text: "butter" },
          { text: "beans" },
          { text: "peaches" }
        ],
        clue: "Read each line of the list one at a time. Then check each choice against the list.",
        why: "The answers are milk and apples. The list says milk, bread and apples. Butter, beans and peaches are not on it." },
      { id: "SK-FH3a-P5", type: "mc", points: 1, dok: 1, passages: [],
        prompt: "Read the cursive name. Which name is it?",
        stem: "Cursive: Zoe",
        choices: [
          { text: "Zoe", correct: true },
          { text: "Zeke" },
          { text: "Joe" },
          { text: "Jack" }
        ],
        clue: "The capital letter is one of the tricky ones. Look at the letters after it too.",
        why: "The answer is Zoe. It starts with a cursive capital Z, followed by o and e. Zeke starts with Z too, but it has four letters and a k. Joe has the same last two letters, but it starts with a J. Jack starts with J and ends in ck." }
    ],
    /* B9:core:start */
    /* Expansion 2026-10-22, batch B9 (Foundations). core: fifteen items in three sets of five; { ref } reuses a practice item. NEEDS INDEPENDENT REVIEW. Author log: docs/expansion-2026-10-22/batches/B9-author-log.md */
    core: {
      rev: "1",
      sets: [
        {
          title: "Set 1",
          items: [
            {
              id: "SK-FH3a-C01",
              type: "mc",
              points: 1,
              dok: 1,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Look at the cursive word. What does it say?",
              stem: [
                "Cursive: window"
              ],
              choices: [
                {
                  text: "window",
                  correct: true
                },
                {
                  text: "widow"
                },
                {
                  text: "willow"
                },
                {
                  text: "wilder"
                }
              ],
              clue: "Count the letters first. Then look at the letters you know best.",
              hints: [
                "Count the letters first. Then look at the letters you know best.",
                "Compare the first letters and the last letters of the word with each choice.",
                "Check how many letters the word has. Then look at the letters in the middle."
              ],
              how: [
                "Count the letters in the cursive word: there are six.",
                "Read the first letters: w, i, n.",
                "The last letters are d, o, w. The word is window."
              ],
              misconception: "A common mix-up is choosing a word that starts the same way. Read all the letters, not only the first few.",
              why: "The answer is \"window.\" It has six letters: w-i-n-d-o-w. Widow has five letters, willow has two l's in the middle, and wilder ends in e-r."
            },
            {
              id: "SK-FH3a-C02",
              type: "dropdown",
              points: 2,
              dok: 2,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Read the cursive sentence. Choose the word that fits each blank.",
              stem: [
                "Cursive: Quinn rode a red scooter."
              ],
              text: "{0} rode a {1} scooter.",
              slots: [
                {
                  options: [
                    "Quinn",
                    "Gwen",
                    "Owen"
                  ],
                  answer: 0
                },
                {
                  options: [
                    "red",
                    "new",
                    "old"
                  ],
                  answer: 0
                }
              ],
              clue: "Read the cursive sentence one word at a time.",
              hints: [
                "Read the cursive sentence one word at a time.",
                "The first word starts with a capital letter. Look at it closely, then read the rest of the word.",
                "For the second blank, look at the word before scooter and read each letter."
              ],
              how: [
                "Read the first word. It starts with a capital letter and has five letters: Quinn.",
                "Read the word before scooter. It has three letters and starts with r: r-e-d.",
                "Check the sentence: Quinn rode a red scooter."
              ],
              misconception: "A common mix-up is guessing a word from its first letter. Read every letter.",
              why: "The answers are \"Quinn\" and \"red.\" The sentence starts with the name Quinn and says Quinn rode a red scooter. Gwen, Owen, new and old do not match the letters."
            },
            {
              id: "SK-FH3a-C03",
              type: "dropdown",
              points: 2,
              dok: 2,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Which words match the cursive sentence?",
              stem: [
                "Cursive: The baby dozed in a warm chair."
              ],
              text: "The baby {0} in a {1} chair.",
              slots: [
                {
                  options: [
                    "dozed",
                    "sulked",
                    "slept"
                  ],
                  answer: 0
                },
                {
                  options: [
                    "warm",
                    "wide",
                    "worn"
                  ],
                  answer: 0
                }
              ],
              clue: "Read the cursive sentence one word at a time.",
              hints: [
                "Read the cursive sentence one word at a time.",
                "Find the word right after baby, then the word right before chair.",
                "Look at the letters in the middle of the word after baby, and at the last letter of the word before chair."
              ],
              how: [
                "Read each word in the sentence: The baby dozed in a warm chair.",
                "The word after baby has a z in the middle: dozed.",
                "The word before chair has four letters: warm."
              ],
              misconception: "A common mix-up is choosing a word that starts the same way. Read every letter.",
              why: "The answers are \"dozed\" and \"warm.\" The sentence says The baby dozed in a warm chair. Sulked, slept, wide and worn do not match the letters."
            },
            {
              id: "SK-FH3a-C04",
              type: "match",
              points: 2,
              dok: 2,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Read the cursive lines. Match each child to the thing they brought.",
              stem: [
                "Cursive: Fay: gold cap",
                "Cursive: Wes: blue kite",
                "Cursive: Pia: green drum",
                "Cursive: Ray: yellow ball"
              ],
              cols: [
                "yellow ball",
                "gold cap",
                "green drum",
                "blue kite"
              ],
              rows: [
                {
                  text: "Fay",
                  answer: 1
                },
                {
                  text: "Wes",
                  answer: 3
                },
                {
                  text: "Pia",
                  answer: 2
                },
                {
                  text: "Ray",
                  answer: 0
                }
              ],
              clue: "Read each cursive line. It has a name, a colon, then a thing.",
              hints: [
                "Read each cursive line. It has a name, a colon, then a thing.",
                "Find a name you know well first. Then read the words after its colon.",
                "Start with Pia. Read the two words after her colon, then look for them in the choices."
              ],
              how: [
                "Read each line of the cursive list.",
                "Find the line for each name.",
                "Match each name to the words after its colon."
              ],
              misconception: "A common mix-up is matching by guess. Read each line to find the name and its thing.",
              why: "Fay brought the gold cap, Wes brought the blue kite, Pia brought the green drum, and Ray brought the yellow ball."
            },
            {
              ref: "SK-FH3a-P4"
            }
          ]
        },
        {
          title: "Set 2",
          items: [
            {
              id: "SK-FH3a-C05",
              type: "mc",
              points: 1,
              dok: 2,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Read the cursive sentence. Which sentence matches it?",
              stem: [
                "Cursive: Zara fixed the broken zipper."
              ],
              choices: [
                {
                  text: "Zara fixed the broken zipper.",
                  correct: true
                },
                {
                  text: "Zara fixed the broken ladder."
                },
                {
                  text: "Sara fixed the broken zipper."
                },
                {
                  text: "Sara mixed the broken ladder."
                }
              ],
              clue: "Read the cursive sentence one word at a time.",
              hints: [
                "Read the cursive sentence one word at a time.",
                "Compare each word in the cursive sentence with the same word in each choice.",
                "Check the first word and the second word. Then check the last word."
              ],
              how: [
                "Read each word: Zara, fixed, the, broken, zipper.",
                "The first word starts with the tricky capital Z.",
                "Match every word to a choice. Only one choice matches all five."
              ],
              misconception: "A common mix-up is stopping after the first few words. Check every word.",
              why: "The answer is \"Zara fixed the broken zipper.\" Every word matches the cursive. The other choices change the name, the action word, or the last word."
            },
            {
              id: "SK-FH3a-C06",
              type: "dropdown",
              points: 2,
              dok: 2,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Finish the cursive sentence with the right words.",
              stem: [
                "Cursive: A brown rabbit hid in the tall grass."
              ],
              text: "A brown {0} hid in the {1} grass.",
              slots: [
                {
                  options: [
                    "rabbit",
                    "robin",
                    "raccoon"
                  ],
                  answer: 0
                },
                {
                  options: [
                    "tall",
                    "thick",
                    "wet"
                  ],
                  answer: 0
                }
              ],
              clue: "Read the cursive sentence one word at a time.",
              hints: [
                "Read the cursive sentence one word at a time.",
                "Find the word right after brown, then the word right before grass.",
                "Count the letters in the word after brown, and look at the middle letters of the word before grass."
              ],
              how: [
                "Read each word: A brown rabbit hid in the tall grass.",
                "The word after brown has six letters and two b's in a row: rabbit.",
                "The word before grass has four letters: tall."
              ],
              misconception: "A common mix-up is choosing a word that names the same kind of thing. Read every letter.",
              why: "The answers are \"rabbit\" and \"tall.\" The sentence says A brown rabbit hid in the tall grass. Robin, raccoon, thick and wet do not match the letters."
            },
            {
              id: "SK-FH3a-C07",
              type: "order",
              points: 2,
              dok: 2,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Put the steps in order for reading a cursive sentence.",
              steps: [
                "Use the spaces to find each word.",
                "Read the letters you know best first.",
                "Use those letters to work out the rest of the word.",
                "Read the whole sentence to check that it makes sense."
              ],
              clue: "Think about what you look for before you read any letters.",
              hints: [
                "Think about what you look for before you read any letters.",
                "Think about which letters are easiest to read.",
                "The last step makes sure the sentence sounds right."
              ],
              how: [
                "First, use the spaces to find each word.",
                "Second, read the letters you know best.",
                "Third, use those letters to work out the rest.",
                "Fourth, read the whole sentence to check it."
              ],
              misconception: "A common mix-up is trying to read the whole sentence at once. Take it one word at a time.",
              why: "The order is: use the spaces to find each word; read the letters you know best first; use those letters to work out the rest of the word; read the whole sentence to check that it makes sense."
            },
            {
              id: "SK-FH3a-C08",
              type: "mc",
              points: 1,
              dok: 2,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Read the cursive sign. What does it tell you to do?",
              stem: [
                "Cursive: Please wipe your feet before you come in."
              ],
              choices: [
                {
                  text: "Please wipe your feet before you come in.",
                  correct: true
                },
                {
                  text: "Please wash your hands before you come in."
                },
                {
                  text: "Please take off your shoes before you come in."
                },
                {
                  text: "Please wipe your shoes before you come in."
                }
              ],
              clue: "Read the cursive sign one word at a time.",
              hints: [
                "Read the cursive sign one word at a time.",
                "Every choice would make a sensible sign, so only the letters can tell you which one is written. Read the word right after Please.",
                "Compare the action word and the word after your with each choice."
              ],
              how: [
                "Read the sign word by word.",
                "The action word after Please is wipe, and the word after your is feet.",
                "The rest says before you come in. Only one choice has wipe and feet."
              ],
              misconception: "A common mix-up is picking a choice with one right part. Both parts have to match.",
              why: "The answer is \"Please wipe your feet before you come in.\" The sign says to wipe your feet. The other choices change the action, the thing, or both. All four would make sense as a sign, so only the letters tell them apart."
            },
            {
              id: "SK-FH3a-C09",
              type: "dropdown",
              points: 2,
              dok: 2,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Read the cursive note. Choose the words that finish the sentence.",
              stem: [
                "Cursive: Leave the keys on the shelf."
              ],
              text: "The note says to leave the {0} on the {1}.",
              slots: [
                {
                  options: [
                    "keys",
                    "kites",
                    "books"
                  ],
                  answer: 0
                },
                {
                  options: [
                    "desk",
                    "shelf",
                    "step"
                  ],
                  answer: 1
                }
              ],
              clue: "Read the cursive note one word at a time.",
              hints: [
                "Read the cursive note one word at a time.",
                "Find the word after the first the, then the word after the second the.",
                "Check the last word of the note. Look at its first letter and its last letter."
              ],
              how: [
                "Read the note: Leave the keys on the shelf.",
                "The word after the first the is keys.",
                "The word after the second the is shelf."
              ],
              misconception: "A common mix-up is guessing a word that makes sense but does not match the letters. Read every letter.",
              why: "The answers are \"keys\" and \"shelf.\" The note says Leave the keys on the shelf. Kites, books, desk and step do not match the letters."
            }
          ]
        },
        {
          title: "Set 3",
          items: [
            {
              id: "SK-FH3a-C10",
              type: "mc",
              points: 1,
              dok: 2,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Read the cursive note. What does it ask someone to bring?",
              stem: [
                "Cursive: Please bring a large blanket, two cups and a jug of juice."
              ],
              choices: [
                {
                  text: "A large blanket, two cups and a jug of juice",
                  correct: true
                },
                {
                  text: "A large blanket, one cup and a jug of juice"
                },
                {
                  text: "A large basket, one cup and a jug of juice"
                },
                {
                  text: "A large blanket, two cups and a jar of juice"
                }
              ],
              clue: "Read the cursive note one word at a time.",
              hints: [
                "Read the cursive note one word at a time.",
                "There are three things on the list. Find each one and how many there are.",
                "Check the word before cups, then the word after the second a."
              ],
              how: [
                "Read the note: a large blanket, two cups and a jug of juice.",
                "Check each part of each choice against the note.",
                "Only one choice has the blanket, two cups and the jug."
              ],
              misconception: "A common mix-up is choosing the first choice that sounds right. Check every item.",
              why: "The answer is \"A large blanket, two cups and a jug of juice.\" The note asks for a large blanket, two cups and a jug of juice. The other choices change the blanket, the number of cups, or the jug."
            },
            {
              id: "SK-FH3a-C11",
              type: "match",
              points: 2,
              dok: 2,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Read the cursive schedule. Match each day to its activity.",
              stem: [
                "Cursive: Monday: swim class",
                "Cursive: Tuesday: art club",
                "Cursive: Saturday: piano",
                "Cursive: Sunday: judo"
              ],
              cols: [
                "piano",
                "swim class",
                "judo",
                "art club"
              ],
              rows: [
                {
                  text: "Sunday",
                  answer: 2
                },
                {
                  text: "Monday",
                  answer: 1
                },
                {
                  text: "Saturday",
                  answer: 0
                },
                {
                  text: "Tuesday",
                  answer: 3
                }
              ],
              clue: "Read each line of the cursive schedule.",
              hints: [
                "Read each line of the cursive schedule.",
                "Each line has a day, then a colon, then an activity.",
                "Start with the day you know best. Find its line and read the words after the colon."
              ],
              how: [
                "Read each line of the schedule.",
                "Find the line for each day.",
                "Match each day to the activity after its colon."
              ],
              misconception: "A common mix-up is matching by position. Read each line to find the day and its activity.",
              why: "Monday is swim class, Tuesday is art club, Saturday is piano, and Sunday is judo."
            },
            {
              id: "SK-FH3a-C12",
              type: "mc",
              points: 1,
              dok: 3,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Leo cannot read the third word in a cursive note. He knows the first letter and the last letter. What should he do next?",
              choices: [
                {
                  text: "Use the letters he knows and think about what fits.",
                  correct: true
                },
                {
                  text: "Skip the note and read only the capital letters."
                },
                {
                  text: "Guess any long word that starts with the same letter."
                },
                {
                  text: "Print the word and read it out loud two times."
                }
              ],
              clue: "Think about how a reader works out a word they cannot read yet.",
              hints: [
                "Think about how a reader works out a word they cannot read yet.",
                "Think about what the rest of the sentence can tell Leo.",
                "Printing the word does not read it. Decide which of the other choices helps Leo read the word."
              ],
              how: [
                "Leo knows some letters of the word.",
                "He also has the rest of the sentence.",
                "So he should use the letters he knows and think about what fits."
              ],
              misconception: "A common mix-up is guessing without using the sentence. The other words give clues.",
              why: "The answer is \"Use the letters he knows and think about what fits.\" The letters and the other words together help him work out the word. The other choices skip the note, guess, or change the word to print."
            },
            {
              id: "SK-FH3a-C13",
              type: "dropdown",
              points: 2,
              dok: 2,
              std: [
                "3.F.H.3.a"
              ],
              passages: [],
              prompt: "Read the cursive invitation. Choose the day and the time.",
              stem: [
                "Cursive: Dear Pam, the party is on Thursday at four o'clock. Love, Gran"
              ],
              text: "The party is on {0} at {1} o'clock.",
              slots: [
                {
                  options: [
                    "Thursday",
                    "Wednesday",
                    "Sunday"
                  ],
                  answer: 0
                },
                {
                  options: [
                    "four",
                    "five",
                    "nine"
                  ],
                  answer: 0
                }
              ],
              clue: "Read the cursive invitation one word at a time.",
              hints: [
                "Read the cursive invitation one word at a time.",
                "Find the word after on and the word after at.",
                "Check the first letter and the last letter of each answer word."
              ],
              how: [
                "Read the invitation: the party is on Thursday at four o'clock.",
                "The word after on is the day: Thursday.",
                "The word after at is the time: four."
              ],
              misconception: "A common mix-up is picking a day that looks close. Read every letter.",
              why: "The answers are \"Thursday\" and \"four.\" The invitation says the party is on Thursday at four o'clock. Wednesday, Sunday, five and nine do not match."
            },
            {
              ref: "SK-FH3a-P5"
            }
          ]
        }
      ]
    },
    similar: [
      {
        id: "SK-FH3a-S01",
        type: "mc",
        points: 1,
        dok: 1,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C01"
        ],
        prompt: "Which word is written here?",
        stem: [
          "Cursive: garden"
        ],
        choices: [
          {
            text: "garden",
            correct: true
          },
          {
            text: "gander"
          },
          {
            text: "guard"
          },
          {
            text: "grand"
          }
        ],
        clue: "Count the letters first. Then look at the letters you know best.",
        hints: [
          "Count the letters first. Then look at the letters you know best.",
          "Compare the first letters and the last letters of the word with each choice.",
          "Check how many letters the word has. Then look at the letters in the middle."
        ],
        how: [
          "Count the letters in the cursive word: there are six.",
          "Read the first letters: g, a, r.",
          "The last letters are d, e, n. The word is garden."
        ],
        misconception: "A common mix-up is choosing a word that starts the same way. Read all the letters.",
        why: "The answer is \"garden.\" It has six letters: g-a-r-d-e-n. Gander has a different middle, guard has five letters, and grand has five letters."
      },
      {
        id: "SK-FH3a-S02",
        type: "dropdown",
        points: 2,
        dok: 2,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C02"
        ],
        prompt: "Choose the missing words.",
        stem: [
          "Cursive: Tess carried a heavy basket."
        ],
        text: "{0} carried a {1} basket.",
        slots: [
          {
            options: [
              "Jess",
              "Tess",
              "Tim"
            ],
            answer: 1
          },
          {
            options: [
              "heavy",
              "empty",
              "woven"
            ],
            answer: 0
          }
        ],
        clue: "Read the cursive sentence one word at a time.",
        hints: [
          "Read the cursive sentence one word at a time.",
          "The first word starts with a capital letter. Look at it closely, then read the rest of the word.",
          "For the second blank, look at the word before basket and read each letter."
        ],
        how: [
          "Read the first word. It starts with a capital letter and has four letters: Tess.",
          "Read the word before basket. It has five letters: h-e-a-v-y.",
          "Check the sentence: Tess carried a heavy basket."
        ],
        misconception: "A common mix-up is guessing a word from its first letter. Read every letter.",
        why: "The answers are \"Tess\" and \"heavy.\" The sentence says Tess carried a heavy basket. Jess, Tim, empty and woven do not match the letters."
      },
      {
        id: "SK-FH3a-S03",
        type: "dropdown",
        points: 2,
        dok: 2,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C03"
        ],
        prompt: "Fill both gaps from the cursive line.",
        stem: [
          "Cursive: A quail ran past our rusty boat."
        ],
        text: "A {0} ran past our {1} boat.",
        slots: [
          {
            options: [
              "quail",
              "ferret",
              "pigeon"
            ],
            answer: 0
          },
          {
            options: [
              "rusty",
              "rotten",
              "wooden"
            ],
            answer: 0
          }
        ],
        clue: "Go through the cursive line one piece at a time.",
        hints: [
          "Go through the cursive line one piece at a time.",
          "Find the word right after A, then the word right before boat.",
          "Check each piece letter by letter, not only the first letter."
        ],
        how: [
          "Read each piece of the line.",
          "The word after A starts with q and has five letters: quail.",
          "The word before boat has five letters and starts with r: rusty."
        ],
        misconception: "A common mix-up is choosing a word that looks close. Read every letter.",
        why: "The answers are \"quail\" and \"rusty.\" The line says A quail ran past our rusty boat. Ferret, pigeon, rotten and wooden do not match the letters."
      },
      {
        id: "SK-FH3a-S04",
        type: "match",
        points: 2,
        dok: 2,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C04"
        ],
        prompt: "Which toy goes with each name in the cursive list? Match.",
        stem: [
          "Cursive: Hal: pink bike",
          "Cursive: Ivy: gray sled",
          "Cursive: Jon: tan boat",
          "Cursive: Kit: black skates"
        ],
        cols: [
          "tan boat",
          "pink bike",
          "black skates",
          "gray sled"
        ],
        rows: [
          {
            text: "Hal",
            answer: 1
          },
          {
            text: "Ivy",
            answer: 3
          },
          {
            text: "Jon",
            answer: 0
          },
          {
            text: "Kit",
            answer: 2
          }
        ],
        clue: "Read each cursive line. It has a name, a colon, then a toy.",
        hints: [
          "Read each cursive line. It has a name, a colon, then a toy.",
          "Find a name you know well first. Then read the words after its colon.",
          "Start with Jon. Read the two words after his colon, then look for them in the choices."
        ],
        how: [
          "Read each line of the cursive list.",
          "Find the line for each name.",
          "Match each name to the words after its colon."
        ],
        misconception: "A common mix-up is matching by guess. Read each line to find the name and its toy.",
        why: "Hal has the pink bike, Ivy has the gray sled, Jon has the tan boat, and Kit has the black skates."
      },
      {
        id: "SK-FH3a-S05",
        type: "ms",
        points: 2,
        dok: 2,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-P4"
        ],
        prompt: "Pick the pair written above.",
        stem: [
          "Cursive: pears",
          "Cursive: honey",
          "Cursive: rolls"
        ],
        pick: 2,
        choices: [
          {
            text: "pears",
            correct: true
          },
          {
            text: "rolls",
            correct: true
          },
          {
            text: "peas"
          },
          {
            text: "sausage"
          },
          {
            text: "jelly"
          }
        ],
        clue: "Read each line of the cursive list one at a time.",
        hints: [
          "Read each line of the cursive list one at a time.",
          "Then check each choice against the list.",
          "Look at the first letter and the last letter of each line."
        ],
        how: [
          "Read each line: pears, honey and rolls.",
          "Check each choice against the list.",
          "Pears and rolls are on the list. Peas, sausage and jelly are not."
        ],
        misconception: "A common mix-up is choosing a word that looks close. Read every letter.",
        why: "The answers are \"pears\" and \"rolls.\" The list says pears, honey and rolls. Peas, sausage and jelly are not on it."
      },
      {
        id: "SK-FH3a-S06",
        type: "mc",
        points: 1,
        dok: 2,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C05"
        ],
        prompt: "Look at the cursive sentence. Which sentence is the same?",
        stem: [
          "Cursive: Tara mended the torn jacket."
        ],
        choices: [
          {
            text: "Tara mended the torn jacket.",
            correct: true
          },
          {
            text: "Tara mended the worn jacket."
          },
          {
            text: "Sara mended the torn jacket."
          },
          {
            text: "Sara minded the worn jacket."
          }
        ],
        clue: "Read the cursive sentence one word at a time.",
        hints: [
          "Read the cursive sentence one word at a time.",
          "Compare each word in the cursive sentence with the same word in each choice.",
          "Check the first word and the second word. Then check the last word."
        ],
        how: [
          "Read each word: Tara, mended, the, torn, jacket.",
          "The first word starts with the tricky capital T.",
          "Match every word to a choice. Only one choice matches all five."
        ],
        misconception: "A common mix-up is stopping after the first few words. Check every word.",
        why: "The answer is \"Tara mended the torn jacket.\" Every word matches the cursive. The other choices change the name, the action word, or the describing word."
      },
      {
        id: "SK-FH3a-S07",
        type: "dropdown",
        points: 2,
        dok: 2,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C06"
        ],
        prompt: "Choose the words that complete the cursive line.",
        stem: [
          "Cursive: My aunt knits a purple scarf every winter."
        ],
        text: "My {0} knits a {1} scarf every winter.",
        slots: [
          {
            options: [
              "aunt",
              "mother",
              "cousin"
            ],
            answer: 0
          },
          {
            options: [
              "purple",
              "orange",
              "yellow"
            ],
            answer: 0
          }
        ],
        clue: "Go through the cursive line one piece at a time.",
        hints: [
          "Go through the cursive line one piece at a time.",
          "Find the word right after My, then the word right before scarf.",
          "Count the letters in the word after My, and look at the middle letters of the word before scarf."
        ],
        how: [
          "Read each piece of the line.",
          "The word after My has four letters and starts with a: aunt.",
          "The word before scarf has six letters and starts with p: purple."
        ],
        misconception: "A common mix-up is choosing a word that looks close. Read every letter.",
        why: "The answers are \"aunt\" and \"purple.\" The line says My aunt knits a purple scarf every winter. Mother, cousin, orange and yellow do not match the letters."
      },
      {
        id: "SK-FH3a-S08",
        type: "order",
        points: 2,
        dok: 2,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C07"
        ],
        prompt: "Put these in order for a stuck reader.",
        steps: [
          "Start at the capital letter.",
          "Say each word quietly.",
          "Skip ahead if you get stuck.",
          "Come back with clues from nearby words."
        ],
        clue: "Think about where a reader begins.",
        hints: [
          "Think about where a reader begins.",
          "Think about what to do when one word stops you.",
          "The last step uses clues to fix the problem."
        ],
        how: [
          "First, start at the capital letter.",
          "Second, say each word quietly.",
          "Third, skip ahead if you get stuck.",
          "Fourth, come back with clues from nearby words."
        ],
        misconception: "A common mix-up is staying stuck on the hard word. Move on and come back.",
        why: "The order is: start at the capital letter; say each word quietly; skip ahead if you get stuck; come back with clues from nearby words."
      },
      {
        id: "SK-FH3a-S09",
        type: "mc",
        points: 1,
        dok: 2,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C08"
        ],
        prompt: "Which chores are listed here?",
        stem: [
          "Cursive: Kindly wipe the table, then feed Rex."
        ],
        choices: [
          {
            text: "Wipe the table and feed Rex.",
            correct: true
          },
          {
            text: "Wipe the table and walk Rex."
          },
          {
            text: "Wipe the chairs and walk Rex."
          },
          {
            text: "Sweep the table and feed Rex."
          }
        ],
        clue: "Read the cursive line one word at a time.",
        hints: [
          "Read the cursive line one word at a time.",
          "Find the two action words.",
          "Compare each action word and its object with each choice."
        ],
        how: [
          "Read the line word by word.",
          "The first action is wipe, and the object is the table.",
          "The second action is feed, and the object is Rex."
        ],
        misconception: "A common mix-up is picking a choice with one right part. Both parts have to match.",
        why: "The answer is \"Wipe the table and feed Rex.\" The line says to wipe the table and feed Rex. The other choices change an action or an object."
      },
      {
        id: "SK-FH3a-S10",
        type: "dropdown",
        points: 2,
        dok: 2,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C09"
        ],
        prompt: "Choose what completes each line.",
        stem: [
          "Cursive: Wash the pans and stack the cups."
        ],
        text: "First {0} the pans. Then stack the {1}.",
        slots: [
          {
            options: [
              "wash",
              "dry",
              "wipe"
            ],
            answer: 0
          },
          {
            options: [
              "cups",
              "bowls",
              "plates"
            ],
            answer: 0
          }
        ],
        clue: "Read the cursive line one word at a time.",
        hints: [
          "Read the cursive line one word at a time.",
          "Find the first action word, then the last word.",
          "Check the first letter and the last letter of each answer word."
        ],
        how: [
          "Read the line: Wash the pans and stack the cups.",
          "The first action word is wash.",
          "The last word is cups."
        ],
        misconception: "A common mix-up is guessing a word that makes sense but does not match the letters. Read every letter.",
        why: "The answers are \"wash\" and \"cups.\" The line says Wash the pans and stack the cups. Dry, wipe, bowls and plates do not match the letters."
      },
      {
        id: "SK-FH3a-S11",
        type: "mc",
        points: 1,
        dok: 2,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C10"
        ],
        prompt: "What goes on the shopping list?",
        stem: [
          "Cursive: Buy brown eggs, ten plums and one loaf at the market."
        ],
        choices: [
          {
            text: "Brown eggs, ten plums, one loaf",
            correct: true
          },
          {
            text: "Brown eggs, ten plums, one cake"
          },
          {
            text: "White eggs, ten plums, one cake"
          },
          {
            text: "Brown eggs, ten pears, one loaf"
          }
        ],
        clue: "Read the cursive line one word at a time.",
        hints: [
          "Read the cursive line one word at a time.",
          "There are three things on the list. Find each one and how many there are.",
          "Check the word before eggs, then the word after ten."
        ],
        how: [
          "Read the line: brown eggs, ten plums and one loaf.",
          "Check each part of each choice against the line.",
          "Only one choice has all three parts right."
        ],
        misconception: "A common mix-up is choosing the first choice that sounds right. Check every item.",
        why: "The answer is \"Brown eggs, ten plums, one loaf.\" The line asks for all three. The other choices change the eggs, the fruit, or the bread."
      },
      {
        id: "SK-FH3a-S12",
        type: "match",
        points: 2,
        dok: 2,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C11"
        ],
        prompt: "Match each cook to the dish.",
        stem: [
          "Cursive: Nan: pear tart",
          "Cursive: Pop: lentil soup",
          "Cursive: Mom: fish pie",
          "Cursive: Dad: bean stew"
        ],
        cols: [
          "fish pie",
          "bean stew",
          "pear tart",
          "lentil soup"
        ],
        rows: [
          {
            text: "Dad",
            answer: 1
          },
          {
            text: "Nan",
            answer: 2
          },
          {
            text: "Mom",
            answer: 0
          },
          {
            text: "Pop",
            answer: 3
          }
        ],
        clue: "Read each line of the cursive menu.",
        hints: [
          "Read each line of the cursive menu.",
          "Each line has a name, then a colon, then a dish.",
          "Start with the name you know best. Find its line and read the words after the colon."
        ],
        how: [
          "Read each line of the menu.",
          "Find the line for each name.",
          "Match each name to the dish after its colon."
        ],
        misconception: "A common mix-up is matching by position. Read each line to find the name and its dish.",
        why: "Nan makes the pear tart, Pop makes the lentil soup, Mom makes the fish pie, and Dad makes the bean stew."
      },
      {
        id: "SK-FH3a-S13",
        type: "mc",
        points: 1,
        dok: 3,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C12"
        ],
        prompt: "A pupil is stuck on one scribbled word but can read its ending. What is the best plan?",
        choices: [
          {
            text: "Test words with that ending and see which fits.",
            correct: true
          },
          {
            text: "Tear out the page and begin a new one."
          },
          {
            text: "Choose whichever word looks the longest on the page."
          },
          {
            text: "Rewrite it in print and stop thinking about it."
          }
        ],
        clue: "Think about how a reader works out a word they cannot read yet.",
        hints: [
          "Think about how a reader works out a word they cannot read yet.",
          "Think about what the rest of the sentence can tell the pupil.",
          "Rewriting the word in print does not read it. Decide which of the other choices helps the pupil read the word."
        ],
        how: [
          "The pupil can read the ending.",
          "The pupil also has the rest of the sentence.",
          "So the best plan is to test words with that ending and see which fits."
        ],
        misconception: "A common mix-up is guessing without using the sentence. The other words give clues.",
        why: "The answer is \"Test words with that ending and see which fits.\" The letters and the story together help work out the word. The other choices give up, guess, or only change the word to print."
      },
      {
        id: "SK-FH3a-S14",
        type: "dropdown",
        points: 2,
        dok: 2,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-C13"
        ],
        prompt: "Where and when? Complete the message.",
        stem: [
          "Cursive: Meet me by the fountain on Wednesday. Jo"
        ],
        text: "Meet by the {0} on {1}.",
        slots: [
          {
            options: [
              "fountain",
              "library",
              "playground"
            ],
            answer: 0
          },
          {
            options: [
              "Wednesday",
              "Tuesday",
              "Monday"
            ],
            answer: 0
          }
        ],
        clue: "Read the cursive message one word at a time.",
        hints: [
          "Read the cursive message one word at a time.",
          "Find the word after by the and the word after on.",
          "Check the first letter and the last letter of each answer word."
        ],
        how: [
          "Read the message: Meet me by the fountain on Wednesday.",
          "The word after by the is fountain.",
          "The word after on is Wednesday."
        ],
        misconception: "A common mix-up is picking a word that looks close. Read every letter.",
        why: "The answers are \"fountain\" and \"Wednesday.\" The message says to meet by the fountain on Wednesday. Library, playground, Tuesday and Monday do not match."
      },
      {
        id: "SK-FH3a-S15",
        type: "mc",
        points: 1,
        dok: 1,
        std: [
          "3.F.H.3.a"
        ],
        passages: [],
        like: [
          "SK-FH3a-P5"
        ],
        prompt: "Whose name is this?",
        stem: [
          "Cursive: Tessa"
        ],
        choices: [
          {
            text: "Tessa",
            correct: true
          },
          {
            text: "Tasha"
          },
          {
            text: "Tilly"
          },
          {
            text: "Tori"
          }
        ],
        clue: "The capital letter is one of the tricky ones. Look at the letters after it too.",
        hints: [
          "The capital letter is one of the tricky ones. Look at the letters after it too.",
          "Count the letters in the name.",
          "Compare the middle letters of the name with each choice."
        ],
        how: [
          "Read the capital letter: T.",
          "Read the rest: e-s-s-a.",
          "The middle letters are e-s-s, so it is Tessa."
        ],
        misconception: "A common mix-up is choosing a name that starts the same way. Read all the letters.",
        why: "The answer is \"Tessa.\" It starts with a cursive capital T followed by e-s-s-a. Tasha has a-s-h in the middle, Tilly has i-l-l, and Tori has only four letters."
      }
    ],
    addons: {
      "SK-FH3a-P1": {
        hints: [
          "Read the cursive sentence one word at a time.",
          "Look closely at every letter of the second word and at the last word.",
          "Compare the second word and the last word with each choice."
        ],
        how: [
          "Read each word: My, cat, is, gray.",
          "The second word ends in t, not r.",
          "The last word is gray: g-r-a-y."
        ],
        misconception: "A common mix-up is stopping after the first word. Check every word."
      },
      "SK-FH3a-P2": {
        hints: [
          "Read the letters one at a time from the left.",
          "Look closely at the second letter and the last letter.",
          "Compare the last letter with each choice."
        ],
        how: [
          "Read the letters from the left: f, then the cursive r.",
          "The last letter has a loop below the line.",
          "That word is frog."
        ],
        misconception: "A common mix-up is choosing a word that starts the same way. Read every letter."
      },
      "SK-FH3a-P3": {
        hints: [
          "Read the cursive note one word at a time.",
          "Find the action word after Please, then the last word.",
          "Check the first letter of the action word and the last word."
        ],
        how: [
          "Read each word: Please, feed, the, fish.",
          "The action word is feed.",
          "The last word is fish, so the note asks you to feed the fish."
        ],
        misconception: "A common mix-up is choosing a choice with one right word. Check every word."
      },
      "SK-FH3a-P4": {
        hints: [
          "Read each line of the cursive list one at a time.",
          "Then check each choice against the list.",
          "Look at the first letter and the last letter of each line."
        ],
        how: [
          "Read each line: milk, bread and apples.",
          "Check each choice against the list.",
          "Milk and apples are on the list. Butter, beans and peaches are not."
        ],
        misconception: "A common mix-up is choosing a word that looks close. Read every letter."
      },
      "SK-FH3a-P5": {
        hints: [
          "The capital letter is one of the tricky ones. Look at it closely.",
          "Count the letters in the name.",
          "Compare the second letter of the name with each choice."
        ],
        how: [
          "Read the capital letter: Z.",
          "Read the rest: o-e.",
          "The name starts with Z and has three letters, so it is Zoe."
        ],
        misconception: "A common mix-up is choosing a name that starts the same way. Read all the letters."
      }
    },
    /* B9:core:end */
    test: [
      { id: "SK-FH3a-T1", type: "mc", points: 1, dok: 1, passages: [],
        prompt: "Read the cursive sentence. Which sentence matches it?",
        stem: "Cursive: We swim in the lake.",
        choices: [
          { text: "We swim in the lake.", correct: true },
          { text: "We swing in the lake." },
          { text: "We swing in the lane." },
          { text: "We swim at the lake." }
        ],
        clue: "Check every word, especially the second word and the last word.",
        why: "The answer is \"We swim in the lake.\" The second word is swim and the last word is lake." },
      { id: "SK-FH3a-T2", type: "mc", points: 1, dok: 1, passages: [],
        prompt: "Read the cursive word. What word is it?",
        stem: "Cursive: river",
        choices: [
          { text: "river", correct: true },
          { text: "liver" },
          { text: "giver" },
          { text: "diver" }
        ],
        clue: "Look closely at the first letter. Then check that the rest of the letters match.",
        why: "The answer is river. It begins with a cursive r, followed by i-v-e-r. Liver, giver and diver have the same ending, but they begin with l, g and d." },
      { id: "SK-FH3a-T3", type: "mc", points: 1, dok: 2, passages: [],
        prompt: "Read the cursive note. When is the game?",
        stem: "Cursive: The game is on Friday at six.",
        choices: [
          { text: "Friday at six", correct: true },
          { text: "Friday at five" },
          { text: "Sunday at five" },
          { text: "Sunday at six" }
        ],
        clue: "Find the day word, which starts with a capital letter. Then find the word after at.",
        why: "The answer is Friday at six. The note says the game is on Friday at six." },
      { id: "SK-FH3a-T4", type: "ms", points: 2, dok: 2, passages: [],
        prompt: "Read the cursive words. Which TWO of these words are in the box?",
        stem: ["Cursive: quiet", "Cursive: zebra", "Cursive: sunny"],
        pick: 2,
        choices: [
          { text: "quiet", correct: true },
          { text: "zebra", correct: true },
          { text: "queen" },
          { text: "zigzag" },
          { text: "funny" }
        ],
        clue: "Read each word slowly. Look at the first letter and at the end of each one.",
        why: "The answers are quiet and zebra. The box says quiet, zebra and sunny. Queen, zigzag and funny are not there." },
      { id: "SK-FH3a-T5", type: "mc", points: 1, dok: 2, passages: [],
        prompt: "Read the cursive sentence. Which sentence matches it?",
        stem: "Cursive: Grandma baked us a pie.",
        choices: [
          { text: "Grandma baked us a pie.", correct: true },
          { text: "Grandma made us a pie." },
          { text: "Grandpa made us a pie." },
          { text: "Grandma baked us a cake." }
        ],
        clue: "Check the first word carefully, then the action word and the last word.",
        why: "The answer is \"Grandma baked us a pie.\" The first word is Grandma, the action is baked, and the last word is pie." }
    ]
  });

  PP.addLesson({
    code: "3.F.H.4.a",
    title: "Writing cursive letters and joining them",
    teach: {
      big: "Cursive letters are made with a few basic strokes, and each letter flows into the next one.",
      points: [
        "Many lowercase letters start with the same stroke. Learn them in families: a, c, d, g, o and q start with a curve like c.",
        "i, t, u and w start with an up-stroke from the bottom line. e, l, h, k, b and f start with the same up-stroke, then loop back down. r, s, p and j start with the up-stroke too.",
        "m, n, v, x, y and z start with a hump, a stroke that curves over the top first.",
        "b, o, v and w end with a little swing at the middle line, so the next letter starts from up there, not from the bottom line.",
        "Keep your pencil on the paper inside a word. Lift it only at the end of the word, then go back to dot i and j and cross t and x.",
        "Letters sit on the bottom line. Tall letters touch the top line. g, j, p, q, y and z hang below the bottom line, and f goes both above and below.",
        "Capital letters start a name. Some capitals, like T, W, O and P, do not join the next letter."
      ],
      example: {
        label: "Example",
        lines: ["Cursive: a c d g o q", "Cursive: cat dog"],
        note: "The first line is the c-curve family. The second line shows how those letters join into words without lifting the pencil."
      },
      tip: "Cursive is not on the Milestones. It is a Georgia standard that is taught and checked in class."
    },
    learn: [
      {
        show: ["Cursive: it"],
        ask: "How do you write the word it in cursive?",
        steps: [
          "Start on the bottom line. Make an up-stroke to the middle line, come down, and swing up for the i.",
          "Without lifting, make a tall up-stroke for the t, come straight down, and finish with a small swing.",
          "Now lift your pencil. Dot the i and cross the t."
        ],
        answer: "Write i and t joined without lifting, then dot the i and cross the t at the end."
      },
      {
        show: ["Cursive: go"],
        ask: "Where does the g join the o?",
        steps: [
          "The g starts like a c, closes, then loops below the bottom line.",
          "The loop crosses at the bottom line and keeps swinging up to the middle line, where the o begins.",
          "The o ends with a little swing at the middle line, ready to join another letter."
        ],
        answer: "The tail loop of the g swings up to the middle line and leads straight into the o, so the pencil never leaves the paper."
      },
      {
        show: ["Cursive: ow"],
        ask: "How does the o join the w?",
        steps: [
          "The o ends with a little swing at the middle line, not at the bottom.",
          "Stay up at the middle line and slide right into the start of the w.",
          "Finish the w, which also ends with a swing at the middle line."
        ],
        answer: "The o's ending swing stays at the middle line and becomes the start of the w, so the join is high, not on the bottom line."
      }
    ],
    parent: "Print the tracing sheet and do one row a day, saying each stroke out loud. Five careful minutes beats a rushed page. Praise even, joined letters more than speed.",
    activity: {
      kind: "trace",
      title: "Trace, then write on the empty lines",
      how: ["Trace each gray row with a pencil. Then write it yourself on the empty lines below it. Print the sheet, or trace on paper laid over a tablet screen turned up bright."],
      rows: ["a c d g o q", "i t u w", "e l h k b f", "m n v x y z", "r s p j", "cat dog quit", "help bike fun", "my zoo jumps", "A B C D E F G", "H I J K L M N", "O P Q R S T U", "V W X Y Z"]
    },
    /* B9:exception:start */
    /* Expansion 2026-10-22, batch B9: performance sequence instead of fifteen selected-response items (practice-exceptions.json). NEEDS INDEPENDENT REVIEW. */
    coreException: {
      kind: "performance",
      rationale: "Cursive letter formation is a motor skill that has to be seen. Trace-then-write sessions with an adult checklist take the place of fifteen items.",
      tasks: [
        {
          title: "Session 1: Stroke families",
          how: "Trace one letter family at a time, such as a, c, d, g, o and q. Then write each letter three times with no tracing. The grown-up checks the start of each stroke and that the letter sits on the line.",
          checklist: [
            "Each letter starts with the right stroke.",
            "Letters sit on the bottom line.",
            "Round letters are closed and tall letters touch the top line."
          ]
        },
        {
          title: "Session 2: Joins",
          how: "Trace three joined words, such as \"mom\", \"run\" and \"hill\". Then write each one with no tracing. The pencil stays down inside each word and lifts only at the end. The letters b, o, v and w end with a little swing at the middle line, so the next letter starts from up there, not from the bottom line.",
          checklist: [
            "Letters in each word were joined without lifting.",
            "After b, o, v or w, the next letter started from the middle line.",
            "Dots and crosses were added after the word."
          ]
        },
        {
          title: "Session 3: Capitals",
          how: "Trace capital letters in the child's own name and one place name. Then write them with no tracing. In this model the capitals T, W, O and P do not join the next letter, so check for a small space after them. Follow your school's model if it is different.",
          checklist: [
            "Capitals were the right shape and height.",
            "T, W, O and P (or the capitals your school leaves unjoined) were not joined to the next letter.",
            "The name was written without tracing."
          ]
        }
      ]
    },
    /* B9:exception:end */
    check: {
      intro: "Grown-up: look at your child's cursive writing, then check each line that is true.",
      items: [
        "Writes every lowercase letter in cursive.",
        "Joins the letters inside a word without lifting the pencil.",
        "Dots i and j and crosses t and x after finishing the word.",
        "Tall letters reach the top line. g, j, p, q, y and z hang below the bottom line, and f goes both above and below.",
        "Writes their own first name in cursive, starting with a capital letter."
      ]
    }
  });

  PP.addLesson({
    code: "3.F.H.4.b",
    title: "Spacing words in cursive",
    teach: {
      big: "In cursive, letters inside a word touch, but there is an even space between words.",
      points: [
        "Lift your pencil at the end of each word, then leave a space before the next one.",
        "A good space is about as wide as a lowercase o.",
        "Keep spaces the same size across the whole line so the reader can tell where each word ends.",
        "Letters inside a word should be close and joined, never spread out with gaps. (Some capital letters, like T and W, do not join the next letter. That is fine.)"
      ],
      example: {
        label: "Example",
        lines: ["Cursive: We like to play outside."],
        note: "Each word is joined inside. The spaces between words are even, about the width of an o."
      },
      tip: "Cursive is not on the Milestones. Even spacing also makes print handwriting on tests easier to read."
    },
    learn: [
      {
        show: ["A child wrote three words with no spaces between them, so they look like one long word:", "Cursive: thebigtree"],
        ask: "How should it be fixed?",
        steps: [
          "Find where each word ends: the / big / tree.",
          "Lift the pencil after the and leave a space about as wide as an o.",
          "Do the same after big. Each word is still joined inside."
        ],
        answer: "Write the, lift, leave an o-sized space, write big, lift, leave the same space, then write tree."
      },
      {
        show: ["A child wrote \"sunny day\" but lifted the pencil in the middle of sunny and left a big gap, so it looks like three words: sun / ny / day."],
        ask: "What is wrong, and how should it look?",
        steps: [
          "Sunny is one word, so its letters must stay joined with no gap.",
          "The space belongs between sunny and day.",
          "Rewrite it with sunny joined and one even space before day."
        ],
        answer: "Sunny should be joined with no gap, and the only space should come between sunny and day."
      }
    ],
    parent: "Have your child put a finger or a small o between words as a spacer while writing a sentence. After a week, try without the spacer and compare.",
    activity: {
      kind: "trace",
      title: "Trace the sentences, keeping even spaces",
      how: ["Trace each gray sentence. Notice the even spaces. Then write the sentence on the empty lines, lifting your pencil after each word."],
      rows: ["I can run fast.", "The sun is hot.", "We read a book.", "My dog likes to play."]
    },
    /* B9:exception:start */
    /* Expansion 2026-10-22, batch B9: performance sequence instead of fifteen selected-response items (practice-exceptions.json). NEEDS INDEPENDENT REVIEW. */
    coreException: {
      kind: "performance",
      rationale: "Spacing in cursive writing is a motor skill that has to be seen on the page. Three dictated-sentence sessions with an adult checklist take the place of fifteen items.",
      tasks: [
        {
          title: "Session 1: Short sentence",
          how: "Say a short sentence of four or five words, such as \"The cat sat down.\" The child writes it in cursive. The grown-up uses a finger or a pencil width to check the space between words.",
          checklist: [
            "Spaces between words were about the width of one small letter.",
            "Spaces were the same all the way across.",
            "Letters inside each word were joined, with no gaps and no letters running into the next word."
          ]
        },
        {
          title: "Session 2: Longer sentence",
          how: "Say a sentence of eight words. The child writes it in cursive on lined paper. Check that all the words fit on the line without squeezing at the end.",
          checklist: [
            "The child planned the space for the whole sentence.",
            "Words were not crowded together at the end.",
            "No letters ran into the next word."
          ]
        },
        {
          title: "Session 3: Two sentences",
          how: "Say two sentences. The child writes both in cursive and then checks their own spacing with a finger. The grown-up compares this page with the first session.",
          checklist: [
            "Spacing was even in both sentences.",
            "The child fixed a space they found.",
            "The spacing looked better than in Session 1."
          ]
        }
      ]
    },
    /* B9:exception:end */
    check: {
      intro: "Grown-up: have your child write two sentences in cursive, then check each line that is true.",
      items: [
        "Every word is joined inside, with no gaps between its letters (capitals like T and W may stand alone).",
        "There is a space between every pair of words.",
        "The spaces are about the same size across the line, about the width of an o.",
        "Another person can read the sentence easily."
      ]
    }
  });
})();

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
        "A passage is a good fit for reading on your own when you can read about 95 out of every 100 words correctly."
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
    activity: FLUENCY_PRACTICED,
    check: {
      intro: "Grown-up: listen to your child read a passage they have practiced (passage 5 or 6, which have characters talking), then check each line that is true.",
      items: [
        "Read at a talking pace: not rushed, and not word by word.",
        "Paused at commas and stopped at periods.",
        "Made questions sound like asking and showed feeling for exclamations.",
        "Read in phrases, groups of words that go together.",
        "Changed their voice for characters who were speaking."
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
        "Spaces between words still show where each word ends."
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
    parent: "Write your grocery list or a short note to your child in cursive, and let them read it to you. Birthday cards from relatives are great real-life cursive practice too.",
    practice: [
      { id: "SK-FH3a-P1", type: "mc", points: 1, dok: 1, passages: [],
        prompt: "Read the cursive sentence. Which sentence matches it?",
        stem: "Cursive: My cat is gray.",
        choices: [
          { text: "My cat is gray.", correct: true },
          { text: "My car is gray." },
          { text: "My cat is green." },
          { text: "My hat is gray." }
        ],
        clue: "Read one word at a time. Look closely at every letter of the second word and at the last word.",
        why: "The answer is \"My cat is gray.\" The second word ends in t, not r, and the last word is gray: g-r-a-y." },
      { id: "SK-FH3a-P2", type: "mc", points: 1, dok: 1, passages: [],
        prompt: "Read the cursive word. What word is it?",
        stem: "Cursive: frog",
        choices: [
          { text: "frog", correct: true },
          { text: "flag" },
          { text: "from" },
          { text: "fog" }
        ],
        clue: "Count the letters first. Then look closely at the second letter and the last letter.",
        why: "The answer is frog: f-r-o-g. The second letter is the cursive r, and the last letter is g with a loop below the line. From ends in m, which has humps and stays on the line, and flag has an l." },
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
          { text: "Joe" },
          { text: "Moe" },
          { text: "Zack" }
        ],
        clue: "The capital letter is one of the tricky ones. Look at the letters after it too.",
        why: "The answer is Zoe. It starts with a cursive capital Z, followed by o and e. Zack starts with Z too, but it has four letters and ends in ck." }
    ],
    test: [
      { id: "SK-FH3a-T1", type: "mc", points: 1, dok: 1, passages: [],
        prompt: "Read the cursive sentence. Which sentence matches it?",
        stem: "Cursive: We swim in the lake.",
        choices: [
          { text: "We swim in the lake.", correct: true },
          { text: "We swing by the lake." },
          { text: "We swim in the lane." },
          { text: "We sing at the lake." }
        ],
        clue: "Check every word, especially the second word and the last word.",
        why: "The answer is \"We swim in the lake.\" The second word is swim and the last word is lake." },
      { id: "SK-FH3a-T2", type: "mc", points: 1, dok: 1, passages: [],
        prompt: "Read the cursive word. What word is it?",
        stem: "Cursive: river",
        choices: [
          { text: "river", correct: true },
          { text: "rider" },
          { text: "liver" },
          { text: "water" }
        ],
        clue: "Look for the cursive r. How many r's do you see, and where are they?",
        why: "The answer is river. It begins and ends with a cursive r, with i-v-e in the middle." },
      { id: "SK-FH3a-T3", type: "mc", points: 1, dok: 2, passages: [],
        prompt: "Read the cursive note. When is the game?",
        stem: "Cursive: The game is on Friday at six.",
        choices: [
          { text: "Friday at six", correct: true },
          { text: "Friday at five" },
          { text: "Sunday at six" },
          { text: "Monday at six" }
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
          { text: "zero" },
          { text: "funny" }
        ],
        clue: "Read each word slowly. Look at the first letter and at the end of each one.",
        why: "The answers are quiet and zebra. The box says quiet, zebra and sunny. Queen, zero and funny are not there." },
      { id: "SK-FH3a-T5", type: "mc", points: 1, dok: 2, passages: [],
        prompt: "Read the cursive sentence. Which sentence matches it?",
        stem: "Cursive: Grandma baked us a pie.",
        choices: [
          { text: "Grandma baked us a pie.", correct: true },
          { text: "Grandma made us a pie." },
          { text: "Grandpa baked us a pie." },
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

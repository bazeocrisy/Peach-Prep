/* Lessons: Foundations, phonics and word study (3.F.P.4) and fluency (3.F.F.1.a, 3.F.F.1.d). Classroom skills, not on the Milestones. Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.F.P.4.a",
  title: "Letters that can make more than one sound",
  teach: {
    big: "Some letters can make more than one sound, so if a word does not sound right, try the other sound.",
    points: [
      "The letters ea usually say long e, as in bead and team. In some words, like bread and head, ea says short e. In a few words, like great and steak, ea even says long a.",
      "The letters ow can say long o, as in snow and grow. They can also say the sound in cow and town, the same sound you hear in ouch.",
      "C is usually hard, like k, before a, o, u or a consonant, as in cat, cup and clap. C is usually soft, like s, when e, i or y comes right after it, as in face, city and fancy.",
      "G is usually hard, as in go and gum, before a, o or u. Before e, i or y, g is often soft and says j, as in gem, giant and gym. But not always: get, give and girl keep the hard g.",
      "Two more vowel teams have two sounds. The letters oo can say the sound in moon or the sound in book. The letters ou can say the sound in out or the sound in soup. Bonus trickster: ough sounds different in tough, though and through, so you learn those words one at a time."
    ],
    words: [
      { term: "vowel team", means: "two letters that work together to make one vowel sound, like ea or ow" },
      { term: "hard c, hard g", means: "c that sounds like k (cat), g that sounds like the g in go" },
      { term: "soft c, soft g", means: "c that sounds like s (city), g that sounds like j (gem)" }
    ],
    example: {
      label: "Same letters, different sounds",
      lines: [
        "ea: bead (long e) and bread (short e)",
        "ow: snow (long o) and cow (ow as in ouch)",
        "c: cat (hard, like k) and city (soft, like s)",
        "g: go (hard) and gem (soft, like j)"
      ],
      note: "Each pair uses the same letters, but the sound changes. When you read a new word, try one sound. If that is not a real word, or it does not fit the sentence, try the other sound."
    },
    tip: "This skill is checked in class, not on the Milestones. But every reading question depends on reading each word right, so try the other sound when a word looks strange."
  },
  learn: [
    {
      show: ["Put a hat on your head.", "Jon read the last word as \"heed.\""],
      ask: "How should Jon fix his reading of head?",
      steps: [
        "Jon used the long e sound for ea. That is a good first try, because ea usually says long e.",
        "Check the sentence. \"Put a hat on your heed\" does not make sense.",
        "Try the other sound ea can make: short e, as in bread. That gives h-e-d, head, and the sentence makes sense."
      ],
      answer: "The word is head. The ea makes a short e sound, like in bread."
    },
    {
      show: ["circle"],
      ask: "The word circle has two c's. Is each one hard or soft?",
      steps: [
        "Look at the letter right after each c.",
        "The first c comes before i. C before e, i or y is usually soft, so it says s.",
        "The second c comes before l. That is not e, i or y, so this c is hard and says k."
      ],
      answer: "The first c is soft (s) and the second c is hard (k), so you say SIR-kul."
    },
    {
      show: ["Hang the wet towel on the hook."],
      ask: "Which sound does ow make in towel?",
      steps: [
        "Try the long o sound first: \"toe-el.\" That is not a word you know.",
        "Try the other sound, the one in cow: \"tow-el,\" rhyming with how.",
        "Check the sentence. You hang a wet towel on a hook, so that sound is right."
      ],
      answer: "In towel, ow makes the sound in cow and how."
    }
  ],
  parent: "Play \"sound sort\" with words you see on cereal boxes, signs and mail. Write ea, ow, oo, c and g words on scraps of paper and have your child sort them into two piles by sound, then read each pile aloud. In Try It Yourself, the \"Read it, then spell it\" lists let you hear your child read these patterns and spell them on paper. The questions on this site can only check that your child picks the right sound or spelling; they cannot hear your child read or watch them write.",
  write: {
    prompt: [
      "**Read it, then spell it.** A grown-up runs this. Your child needs paper and a pencil.",
      "**Part 1: Read out loud.** Your child reads each word to you. If a word comes out wrong, ask, \"What other sound can those letters make?\" and let them try again. Words: instead, steak, beast, meadow, flower, elbow, fancy, magic, gerbil, cloud, group, wooden.",
      "**Part 2: Spell it (grown-up only).** Turn the screen away from your child. Say each word, read the sentence, then say the word again. Your child writes only the word.",
      "1. breath: Take a deep breath.", "2. teach: I will teach my dog a trick.", "3. crowd: A big crowd came to the game.", "4. shadow: My shadow follows me.", "5. circus: We saw clowns at the circus.",
      "6. bounce: Watch the ball bounce.", "7. gentle: Be gentle with the kitten.", "8. cage: The bird sang in its cage.", "9. spoon: Eat your soup with a spoon.", "10. cook: Dad likes to cook.",
      "**Check together.** Show the list. Your child puts a check next to each word that matches and circles the part that does not. Most mistakes will be in the tricky part, such as ea written as e (breth) or soft c written as s (sircus). Name the pattern (\"In breath, the short e sound is spelled ea\"), have your child write the word correctly three times while saying the letters, and type it in the box below. Spell the boxed words again in two or three days. If more than three words were missed, go back to Watch Me before trying a new list."
    ],
    checklist: [
      "I read the Part 1 words out loud to my grown-up.",
      "I wrote the Part 2 words on paper without looking at the screen.",
      "I checked my words with my grown-up and circled any part I missed.",
      "I wrote each missed word correctly three times."
    ],
    rows: 3
  },
  passages: [],
  practice: [
    { id: "SK-FP4a-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word has the same ea sound as bread?",
      choices: [
        { text: "head", correct: true },
        { text: "beach" },
        { text: "leaf" },
        { text: "team" }
      ],
      clue: "Say bread out loud. Does the ea sound like the e in bed, or like the ee in tree? Find the word that matches.",
      why: "The answer is head. In bread and head, ea says short e, like in bed. In beach, leaf and team, ea says long e." },
    { id: "SK-FP4a-P2", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Sort the words by the sound ow makes.",
      cols: ["ow as in snow", "ow as in cow"],
      rows: [
        { text: "grow", answer: 0 },
        { text: "town", answer: 1 },
        { text: "blow", answer: 0 },
        { text: "crown", answer: 1 },
        { text: "owl", answer: 1 }
      ],
      clue: "Say each word out loud. Does the ow sound like the o in go, or like the sound you make when you say ouch?",
      why: "Grow and blow use the long o sound, like snow. Town, crown and owl use the sound in cow." },
    { id: "SK-FP4a-P3", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "In which word does c make the s sound?",
      choices: [
        { text: "city", correct: true },
        { text: "cup" },
        { text: "cloud" },
        { text: "cave" }
      ],
      clue: "Look at the letter right after the c in each word. C is usually soft when e, i or y comes next.",
      why: "The answer is city. The c comes before i, so it is soft and says s. In cup, cloud and cave, the c comes before u, l or a, so it is hard and says k." },
    { id: "SK-FP4a-P4", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Read the sentence. Then choose the sound g makes in each word.",
      stem: "The giant ate a big plate of grapes.",
      text: "The g in giant sounds like {0}. The g in grapes sounds like {1}.",
      slots: [
        { options: ["the j in jam", "the g in go", "the k in kite"], answer: 0 },
        { options: ["the j in jam", "the g in go", "the k in kite"], answer: 1 }
      ],
      clue: "Look at the letter right after each g. Is it e, i or y, or is it a different letter? Then say each word out loud to check.",
      why: "The g in giant sounds like the j in jam. I comes right after it, and g is often soft before e, i or y. The g in grapes sounds like the g in go, because r comes right after it." },
    { id: "SK-FP4a-P5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO words have ea with the long e sound, like in bead?",
      choices: [
        { text: "dream", correct: true },
        { text: "peach", correct: true },
        { text: "bread" },
        { text: "head" },
        { text: "great" },
        { text: "feather" }
      ],
      clue: "Say each word slowly. Listen to the ea. Does it say its name, e, like in bead?",
      why: "Dream and peach have long e, like bead. Bread, head and feather have short e. Great has a long a sound." },
    { id: "SK-FP4a-P6", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Read the sentence: \"Carla cut the cake into slices.\" Which word has a soft c that sounds like s?",
      options: ["Carla", "cut", "cake", "slices"],
      answer: [3], pick: 1,
      clue: "Find each c. Then look at the letter right after it. C is usually soft before e, i or y.",
      why: "The answer is slices. The c comes before e, so it is soft and says s. In Carla, cut and cake, the c comes before a or u, so it is hard and says k." },
    { id: "SK-FP4a-P7", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that is spelled correctly.",
      text: "The baker sold a warm loaf of {0}.",
      slots: [
        { options: ["bread", "bred", "breed"], answer: 0 }
      ],
      clue: "Some of these are real words that mean something else. Read each one in the sentence, then picture the word on a bag at the store.",
      why: "The answer is bread. The food is spelled with ea, which makes a short e sound in this word. Bred and breed are different words." }
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
            id: "SK-FP4a-C01",
            type: "hottext",
            points: 1,
            dok: 1,
            std: [
              "3.F.P.4.a"
            ],
            passages: [],
            prompt: "Read the sentence. Choose the word in which ea says long a.",
            stem: [
              "Please break the bread and eat the beans."
            ],
            options: [
              "break",
              "bread",
              "eat",
              "beans"
            ],
            answer: [
              0
            ],
            pick: 1,
            clue: "Say each word out loud and listen to the ea.",
            hints: [
              "Say each word out loud and listen to the ea.",
              "Find the words that have ea in them. Then say each one slowly.",
              "Say bread and eat again. Listen for whether their vowels are the sound in day."
            ],
            how: [
              "Long a is the sound in day.",
              "Break has ea with the long a sound.",
              "Bread has short e, and eat and beans have long e."
            ],
            misconception: "A common mix-up is thinking ea always says long e. In a few words, ea says long a.",
            why: "The answer is \"break.\" The ea in break says long a, like the a in day. Bread has short e, and eat and beans have long e."
          },
          {
            id: "SK-FP4a-C02",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.F.P.4.a"
            ],
            passages: [],
            prompt: "Sort the words by the sound ea makes.",
            cols: [
              "long e (bead)",
              "short e (bread)"
            ],
            rows: [
              {
                text: "reach",
                answer: 0
              },
              {
                text: "health",
                answer: 1
              },
              {
                text: "steam",
                answer: 0
              },
              {
                text: "heavy",
                answer: 1
              }
            ],
            clue: "Say each word out loud and listen to the ea. Compare it with bead and bread.",
            hints: [
              "Say each word out loud and listen to the ea. Compare it with bead and bread.",
              "Try the long e sound first. Ask whether that makes a real word you know.",
              "Start with health. Say it with the long e sound, then with the short e sound, and decide which is a real word."
            ],
            how: [
              "Say each word slowly.",
              "Reach and steam have the long e sound, like bead.",
              "Health and heavy have the short e sound, like bread."
            ],
            misconception: "A common mix-up is thinking ea always says long e. In some words, it says short e.",
            why: "Reach and steam have long e, like bead. Health and heavy have short e, like bread."
          },
          {
            id: "SK-FP4a-C03",
            type: "dropdown",
            points: 2,
            dok: 2,
            std: [
              "3.F.P.4.a"
            ],
            passages: [],
            prompt: "Think about how each word rhymes.",
            stem: [
              "The clown sat on a yellow pillow."
            ],
            text: "Clown rhymes with {0}. The end of yellow rhymes with {1}.",
            slots: [
              {
                options: [
                  "frown",
                  "snow",
                  "moon"
                ],
                answer: 0
              },
              {
                options: [
                  "now",
                  "go",
                  "soon"
                ],
                answer: 1
              }
            ],
            clue: "Say each word out loud. The letters ow can make two different sounds.",
            hints: [
              "Say each word out loud. The letters ow can make two different sounds.",
              "Say each word one slow sound at a time and listen to the ow.",
              "Start with yellow. Listen to the last sound. Does it sound like ouch or like go?"
            ],
            how: [
              "Say clown. It rhymes with frown, so the ow sounds like the sound in cow.",
              "Say the end of yellow. It rhymes with go, so ow says long o.",
              "Moon and soon have the oo sound, which does not fit either word."
            ],
            misconception: "A common mix-up is using the same sound for ow in every word. Say the word to hear which sound it has.",
            why: "Clown rhymes with frown, so its ow sounds like the ow in cow. The end of yellow rhymes with go, so its ow says long o. Snow, now, moon and soon do not fit those blanks."
          },
          {
            id: "SK-FP4a-C04",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.F.P.4.a"
            ],
            passages: [],
            prompt: "Read the sentence. Which word has ow with the sound in cow?",
            stem: [
              "Dad will follow the slow truck down the road."
            ],
            choices: [
              {
                text: "follow",
                correct: true
              },
              {
                text: "slow"
              },
              {
                text: "down"
              },
              {
                text: "road"
              }
            ],
            clue: "Say each word and listen for the sound in cow.",
            hints: [
              "Say each word and listen for the sound in cow.",
              "Look at the letters in each word. Ask which words have ow in them.",
              "Say follow and slow slowly. Ask whether the ow sounds like ouch or like the o in go."
            ],
            how: [
              "Say cow. The ow makes the sound you hear in ouch.",
              "Follow and slow have ow, but it says long o, like in go.",
              "Down has ow with the sound in cow. Road has oa, not ow."
            ],
            misconception: "A common mix-up is choosing any word that has the letters ow. Say each word to hear its sound.",
            why: "The answer is \"down.\" The ow in down sounds like the ow in cow. In follow and slow, ow says long o, and road has oa, not ow."
          },
          {
            ref: "SK-FP4a-P5"
          }
        ]
      },
      {
        title: "Set 2",
        items: [
          {
            id: "SK-FP4a-C05",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.F.P.4.a"
            ],
            passages: [],
            prompt: "Which word has a hard c AND a soft c?",
            choices: [
              {
                text: "cancel",
                correct: true
              },
              {
                text: "coconut"
              },
              {
                text: "cactus"
              },
              {
                text: "juice"
              }
            ],
            clue: "Find every c in each word. Then look at the letter after each c.",
            hints: [
              "Find every c in each word. Then look at the letter after each c.",
              "Count the c's in each word. Then look at the letter after each one.",
              "In each word with two c's, ask whether the two c's sound the same or different."
            ],
            how: [
              "Find each c and look at the letter right after it.",
              "In cancel, c before a is hard, and c before e is soft. That is one of each.",
              "Coconut and cactus have two c's, but both are hard. Juice has one c."
            ],
            misconception: "A common mix-up is choosing a word with two c's. The two c's have to sound different.",
            why: "The answer is \"cancel.\" The first c comes before a, so it is hard. The second c comes before e, so it is soft. In coconut and cactus, both c's are hard, and juice has only one c."
          },
          {
            id: "SK-FP4a-C06",
            type: "hottext",
            points: 1,
            dok: 2,
            std: [
              "3.F.P.4.a"
            ],
            passages: [],
            prompt: "Read the sentence. Which word has a soft g, the kind that says j?",
            stem: [
              "The band stood on the stage and played a game."
            ],
            options: [
              "band",
              "stood",
              "stage",
              "game"
            ],
            answer: [
              2
            ],
            pick: 1,
            clue: "Find each g. Then look at the letter right after it.",
            hints: [
              "Find each g. Then look at the letter right after it.",
              "Only some of these words have a g in them. Find those words first.",
              "Say stage and game out loud. Ask whether each g sounds like the g in go or like j."
            ],
            how: [
              "Find the words with a g: stage and game.",
              "In game, g comes before a, so it is hard.",
              "In stage, g comes before e, so it is soft and says j."
            ],
            misconception: "A common mix-up is choosing a word because it has a g. Check the letter after the g.",
            why: "The answer is \"stage.\" The g comes before e, so it is soft and says j. In game, g comes before a, so it is hard. Band and stood do not have a g."
          },
          {
            id: "SK-FP4a-C07",
            type: "ms",
            points: 2,
            dok: 2,
            std: [
              "3.F.P.4.a"
            ],
            passages: [],
            prompt: "Which TWO words have a soft c that says s?",
            pick: 2,
            choices: [
              {
                text: "dance",
                correct: true
              },
              {
                text: "cabin",
                correct: true
              },
              {
                text: "spice"
              },
              {
                text: "coat"
              },
              {
                text: "cliff"
              }
            ],
            clue: "Find the c in each word. Then look at the letter right after it.",
            hints: [
              "Find the c in each word. Then look at the letter right after it.",
              "A soft c has a certain kind of letter after it. Check the letter after the c in each word.",
              "Check cliff. Is the c followed by e, i or y, or by another letter?"
            ],
            how: [
              "Find the c in each word and look at the next letter.",
              "In dance, c comes before e. In spice, c comes before e. Both are soft.",
              "In cabin, coat and cliff, c comes before a, o and l, so each is hard."
            ],
            misconception: "A common mix-up is choosing words because they have a c. Look at the letter after it.",
            why: "The answers are \"dance\" and \"spice.\" The c comes before e in both words, so it is soft and says s. Cabin, coat and cliff have a hard c, like k."
          },
          {
            id: "SK-FP4a-C08",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.F.P.4.a"
            ],
            passages: [],
            prompt: "Sort the words by the sound g makes.",
            cols: [
              "hard g, as in go",
              "soft g, as in gem"
            ],
            rows: [
              {
                text: "hinge",
                answer: 1
              },
              {
                text: "flag",
                answer: 0
              },
              {
                text: "orange",
                answer: 1
              },
              {
                text: "wiggle",
                answer: 0
              }
            ],
            clue: "Find the g in each word. Look at the letter right after it.",
            hints: [
              "Find the g in each word. Look at the letter right after it.",
              "Say each word out loud. Ask whether the g sounds like the one in go or like j.",
              "Start with flag. Look at what comes after the g."
            ],
            how: [
              "Find each g and the letter after it.",
              "In hinge and orange, g comes before e, so it is soft and says j.",
              "In flag and wiggle, g comes before the end or before l, so it is hard."
            ],
            misconception: "A common mix-up is thinking g is soft only before i. It can be soft before e or y too.",
            why: "Hinge and orange have a soft g, because e comes after it. Flag and wiggle have a hard g, like the g in go."
          },
          {
            ref: "SK-FP4a-P6"
          }
        ]
      },
      {
        title: "Set 3",
        items: [
          {
            id: "SK-FP4a-C09",
            type: "mc",
            points: 1,
            dok: 2,
            std: [
              "3.F.P.4.a"
            ],
            passages: [],
            prompt: "Say book. Which word has an oo that sounds the same?",
            choices: [
              {
                text: "wool",
                correct: true
              },
              {
                text: "pool"
              },
              {
                text: "broom"
              },
              {
                text: "noon"
              }
            ],
            clue: "Say book out loud and listen to its oo. Then say each choice.",
            hints: [
              "Say book out loud and listen to its oo. Then say each choice.",
              "Say each choice slowly. Ask whether the oo is a short sound, like book, or a long sound, like moon.",
              "Say each word again and listen to the letters after oo. Compare each oo with the oo in book."
            ],
            how: [
              "Say book. The oo is short, as in look.",
              "Say each choice. Wool has the short oo sound.",
              "Pool, broom and noon have the long oo sound, like in moon."
            ],
            misconception: "A common mix-up is thinking oo always sounds like moon. In some words it is short.",
            why: "The answer is \"wool.\" The oo in wool is short, like the oo in book. Pool, broom and noon have the long oo, like in moon."
          },
          {
            id: "SK-FP4a-C10",
            type: "match",
            points: 2,
            dok: 2,
            std: [
              "3.F.P.4.a"
            ],
            passages: [],
            prompt: "Sort the words by the sound ou makes.",
            cols: [
              "ou as in out",
              "ou as in soup"
            ],
            rows: [
              {
                text: "mouth",
                answer: 0
              },
              {
                text: "youth",
                answer: 1
              },
              {
                text: "ground",
                answer: 0
              },
              {
                text: "coupon",
                answer: 1
              }
            ],
            clue: "Say each word out loud and listen to the ou. Compare it with out and soup.",
            hints: [
              "Say each word out loud and listen to the ou. Compare it with out and soup.",
              "Say each word slowly. Ask whether the ou sounds like ow in cow or like oo in moon.",
              "Start with mouth. Say it out loud, then decide which sound you hear."
            ],
            how: [
              "Say each word and listen to the ou.",
              "Mouth and ground have the sound in out.",
              "Youth and coupon have the sound in soup."
            ],
            misconception: "A common mix-up is using one sound for ou in every word. Say each word to hear it.",
            why: "Mouth and ground have the ou sound in out. Youth and coupon have the ou sound in soup."
          },
          {
            id: "SK-FP4a-C11",
            type: "mc",
            points: 1,
            dok: 3,
            std: [
              "3.F.P.4.a"
            ],
            passages: [],
            prompt: "Zan says the ough in thought and in rough the same way. What should Zan do?",
            choices: [
              {
                text: "Say each word on its own, because ough can sound different in different words.",
                correct: true
              },
              {
                text: "Keep the same sound for both, because the letters ough match in each word."
              },
              {
                text: "Say both like the ou in out, because ou usually says that sound."
              },
              {
                text: "Say both with the long o, because ough has an o in the middle."
              }
            ],
            clue: "Think about how the letters ough are used in more than one word.",
            hints: [
              "Think about how the letters ough are used in more than one word.",
              "Say thought and rough out loud. Listen to whether the ending sounds match.",
              "Compare each choice with what you heard when you said both words."
            ],
            how: [
              "Say thought and rough out loud.",
              "The ough does not sound the same in both words.",
              "So Zan should say each word on its own, because ough can sound different in different words."
            ],
            misconception: "A common mix-up is trusting the letters to give the sound. Some letter groups, like ough, change from word to word.",
            why: "The answer is \"Say each word on its own, because ough can sound different in different words.\" Thought and rough end with different sounds. The other choices pick one sound for all ough words."
          },
          {
            id: "SK-FP4a-C12",
            type: "order",
            points: 2,
            dok: 2,
            std: [
              "3.F.P.4.a"
            ],
            passages: [],
            prompt: "Put the steps in order for reading a word that does not sound right.",
            steps: [
              "Say the word with the sound you know first.",
              "Ask if it is a real word that fits the sentence.",
              "If it does not fit, try the other sound the letters can make.",
              "Read the sentence again to check the word."
            ],
            clue: "Think about what you do first when you see a word.",
            hints: [
              "Think about what you do first when you see a word.",
              "Think about what you should check before you try something new.",
              "The last step is a way to make sure the word is right."
            ],
            how: [
              "First, say the word with the sound you know.",
              "Second, ask whether it is a real word that fits the sentence.",
              "Third, if it does not fit, try the other sound.",
              "Fourth, read the sentence again to check the word."
            ],
            misconception: "A common mix-up is trying the other sound before checking the first. Check first, then change.",
            why: "The order is: say the word with the sound you know first; ask if it is a real word that fits the sentence; if it does not fit, try the other sound the letters can make; read the sentence again to check the word."
          },
          {
            ref: "SK-FP4a-P7"
          }
        ]
      }
    ]
  },
  similar: [
    {
      id: "SK-FP4a-S01",
      type: "hottext",
      points: 1,
      dok: 1,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-C01"
      ],
      prompt: "Tap the word whose ea is said like the a in day.",
      stem: [
        "It was a great day to grill meat by the lake."
      ],
      options: [
        "great",
        "meat",
        "lake",
        "day"
      ],
      answer: [
        0
      ],
      pick: 1,
      clue: "Say each word out loud and listen to the vowels.",
      hints: [
        "Say each word out loud and listen to the vowels.",
        "Find the words that have ea in them. Then say each one slowly.",
        "Say meat again. Listen for whether its vowel is the sound in day."
      ],
      how: [
        "Long a is the sound in day.",
        "Great has ea with the long a sound.",
        "Meat has long e, and lake and day do not have ea."
      ],
      misconception: "A common mix-up is thinking ea always says long e. In a few words, ea says long a.",
      why: "The answer is \"great.\" The ea in great says long a, like the a in day. Meat has long e, and lake and day do not have ea."
    },
    {
      id: "SK-FP4a-S02",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-C02"
      ],
      prompt: "Match each word to the vowel sound in its middle.",
      cols: [
        "seat",
        "dead"
      ],
      rows: [
        {
          text: "cheap",
          answer: 0
        },
        {
          text: "treasure",
          answer: 1
        },
        {
          text: "leader",
          answer: 0
        },
        {
          text: "deaf",
          answer: 1
        }
      ],
      clue: "Say each word out loud and listen to the vowel made by ea.",
      hints: [
        "Say each word out loud and listen to the vowel made by ea.",
        "Try long e first. Ask whether that makes a word you have heard.",
        "Start with treasure. Say it each way and decide which is a real word."
      ],
      how: [
        "Say each word slowly.",
        "Cheap and leader have the sound in seat.",
        "Treasure and deaf have the sound in dead."
      ],
      misconception: "A common mix-up is thinking ea always says long e. Some words use the short e.",
      why: "Cheap and leader have the vowel sound of seat. Treasure and deaf have the vowel sound of dead."
    },
    {
      id: "SK-FP4a-S03",
      type: "dropdown",
      points: 2,
      dok: 2,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-C03"
      ],
      prompt: "Use rhymes to decide how ow is said in each word.",
      stem: [
        "A crowd saw a snowman by the brown window."
      ],
      text: "Crowd rhymes with {0}. The end of window rhymes with {1}.",
      slots: [
        {
          options: [
            "loud",
            "slow",
            "food"
          ],
          answer: 0
        },
        {
          options: [
            "flow",
            "loud",
            "boot"
          ],
          answer: 0
        }
      ],
      clue: "Say each word aloud. Think of a word that rhymes with it.",
      hints: [
        "Say each word aloud. Think of a word that rhymes with it.",
        "Say each word one slow sound at a time and listen to the ow.",
        "Start with the end of window. Ask whether it sounds like ouch or like go."
      ],
      how: [
        "Say crowd. It rhymes with loud, so the ow sounds like the ow in cow.",
        "Say the end of window. It rhymes with flow, so ow says long o.",
        "Food and boot have the oo sound, which does not fit."
      ],
      misconception: "A common mix-up is giving ow the same sound in every word. Rhymes help you hear it.",
      why: "Crowd rhymes with loud. The end of window rhymes with flow. Slow rhymes with the long o and food and boot have the oo sound, so they do not fit the ow words."
    },
    {
      id: "SK-FP4a-S04",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-C04"
      ],
      prompt: "Choose the sentence word with the same vowel as now.",
      stem: [
        "My mom grows a flower by the narrow path."
      ],
      choices: [
        {
          text: "grows",
          correct: true
        },
        {
          text: "flower"
        },
        {
          text: "narrow"
        },
        {
          text: "path"
        }
      ],
      clue: "Say now out loud, then say each word.",
      hints: [
        "Say now out loud, then say each word.",
        "Look at the letters in each word. Ask which words have ow in them.",
        "Say grows and narrow slowly. Ask whether the ow sounds like ouch or like the o in go."
      ],
      how: [
        "Say now. The ow makes the sound in ouch.",
        "Flower has that sound. Grows and narrow have ow with the long o sound.",
        "Path has no ow."
      ],
      misconception: "A common mix-up is choosing any word with ow. Say each word to hear its sound.",
      why: "The answer is \"flower.\" The ow in flower sounds like the ow in now. In grows and narrow, ow says long o, and path has no ow."
    },
    {
      id: "SK-FP4a-S05",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-P5"
      ],
      prompt: "Pick the pair of words with the vowel sound you hear in seat.",
      pick: 2,
      choices: [
        {
          text: "speak",
          correct: true
        },
        {
          text: "mean",
          correct: true
        },
        {
          text: "ready"
        },
        {
          text: "deaf"
        },
        {
          text: "break"
        },
        {
          text: "weather"
        }
      ],
      clue: "Say seat. Then say each choice and listen to its vowel.",
      hints: [
        "Say seat. Then say each choice and listen to its vowel.",
        "Say each word slowly. Ask whether the vowel is the same as in seat.",
        "Some choices have the vowel in bed and one has the vowel in day. Say each word to check."
      ],
      how: [
        "Say seat. The vowel is long e.",
        "Speak and mean have the long e sound.",
        "Ready, deaf and weather have short e, and break has long a."
      ],
      misconception: "A common mix-up is choosing any word with ea. The sound has to match the model word.",
      why: "The answers are \"speak\" and \"mean.\" Both have the long e sound, like seat. Ready, deaf and weather have short e, and break has long a."
    },
    {
      id: "SK-FP4a-S06",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-C05"
      ],
      prompt: "Only one of these words has a c that says k and another c that says s. Find it.",
      choices: [
        {
          text: "accept",
          correct: true
        },
        {
          text: "cocoa"
        },
        {
          text: "carrot"
        },
        {
          text: "ice"
        }
      ],
      clue: "Find every c in each word. Then look at the letter after each c.",
      hints: [
        "Find every c in each word. Then look at the letter after each c.",
        "Count the c's in each choice. Then listen to each c when you say the word.",
        "For each word with two c's, ask whether both say k, both say s, or one of each."
      ],
      how: [
        "Count the c's and say each word.",
        "Accept has two c's. The first says k and the second says s.",
        "Cocoa and carrot have c's that all say k, and ice has only one c."
      ],
      misconception: "A common mix-up is choosing a word because it has two c's. They have to sound different.",
      why: "The answer is \"accept.\" The first c says k and the second c says s, because it comes before e. Cocoa and carrot have c's that all say k, and ice has only one c."
    },
    {
      id: "SK-FP4a-S07",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-C06"
      ],
      prompt: "Tap the word that starts with a g you say like j.",
      stem: [
        "A giant took gold to a goat in a hole."
      ],
      options: [
        "giant",
        "gold",
        "goat",
        "hole"
      ],
      answer: [
        0
      ],
      pick: 1,
      clue: "Look at the first letter of each word. Then look at the letter right after it.",
      hints: [
        "Look at the first letter of each word. Then look at the letter right after it.",
        "Only some of these words begin with g. Find them first.",
        "Say gold and goat out loud. Ask whether the g sounds like the g in go or like j."
      ],
      how: [
        "Find the words that begin with g.",
        "In gold and goat, g comes before o, so it is hard.",
        "In giant, g comes before i and says j."
      ],
      misconception: "A common mix-up is choosing the first word that has a g. Check the letter after the g.",
      why: "The answer is \"giant.\" The g comes before i and says j. In gold and goat, g comes before o, so it is hard, and hole does not begin with g."
    },
    {
      id: "SK-FP4a-S08",
      type: "ms",
      points: 2,
      dok: 2,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-C07"
      ],
      prompt: "Pick the pair that holds a c you say like s.",
      pick: 2,
      choices: [
        {
          text: "peace",
          correct: true
        },
        {
          text: "camp",
          correct: true
        },
        {
          text: "bucket"
        },
        {
          text: "coin"
        },
        {
          text: "mice"
        },
        {
          text: "crab"
        }
      ],
      clue: "Find the c in each word. Then look at the next letter.",
      hints: [
        "Find the c in each word. Then look at the next letter.",
        "Check the letter after each c. Say each word to hear the sound.",
        "Check camp. Is the c followed by e, i or y, or by another letter?"
      ],
      how: [
        "Find each c and say its sound.",
        "In peace, c comes before e. In mice, c also comes before e. Both say s.",
        "Camp, bucket, coin and crab have a hard c."
      ],
      misconception: "A common mix-up is choosing words that only have a c. Look at the letter after the c.",
      why: "The answers are \"peace\" and \"mice.\" The c comes before e in both and says s. Camp, bucket, coin and crab have a hard c, like k."
    },
    {
      id: "SK-FP4a-S09",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-C08"
      ],
      prompt: "Each word has a g. Match it to goat or gym.",
      cols: [
        "goat",
        "gym"
      ],
      rows: [
        {
          text: "village",
          answer: 1
        },
        {
          text: "gather",
          answer: 0
        },
        {
          text: "dragon",
          answer: 0
        },
        {
          text: "energy",
          answer: 1
        }
      ],
      clue: "Find the g in each word and look at the letter after it.",
      hints: [
        "Find the g in each word and look at the letter after it.",
        "Say each word out loud. Listen for whether its g is the one in goat or in gym.",
        "Start with dragon. Look at the letter after the g."
      ],
      how: [
        "Find each g and the letter after it.",
        "In village and energy, g comes before e or y, so it is soft.",
        "In gather and dragon, g comes before a or o, so it says the g in go."
      ],
      misconception: "A common mix-up is thinking g is soft in every word. Check the letter after it.",
      why: "Village and energy have a soft g that says j. Gather and dragon have a hard g, like the g in go."
    },
    {
      id: "SK-FP4a-S10",
      type: "mc",
      points: 1,
      dok: 2,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-C09"
      ],
      prompt: "Pick the word where oo sounds like the oo in moon.",
      choices: [
        {
          text: "stool",
          correct: true
        },
        {
          text: "foot"
        },
        {
          text: "hook"
        },
        {
          text: "good"
        }
      ],
      clue: "Say moon out loud and listen to its oo. Then say each choice.",
      hints: [
        "Say moon out loud and listen to its oo. Then say each choice.",
        "Say each choice slowly. Ask whether the oo is long, like moon, or short, like book.",
        "Say each word again and compare its vowel with the one in moon."
      ],
      how: [
        "Say moon. The oo is long.",
        "Say each choice. Stool has the long oo sound.",
        "Foot, hook and good have the short oo sound, like in book."
      ],
      misconception: "A common mix-up is thinking all oo words sound the same. Say each word to hear it.",
      why: "The answer is \"stool.\" Its oo is long, like the oo in moon. Foot, hook and good have the short oo sound."
    },
    {
      id: "SK-FP4a-S11",
      type: "match",
      points: 2,
      dok: 2,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-C10"
      ],
      prompt: "Match each word to the way its ou is said.",
      cols: [
        "loud",
        "you"
      ],
      rows: [
        {
          text: "cloud",
          answer: 0
        },
        {
          text: "cougar",
          answer: 1
        },
        {
          text: "shout",
          answer: 0
        },
        {
          text: "routine",
          answer: 1
        }
      ],
      clue: "Say each word out loud and listen to the ou.",
      hints: [
        "Say each word out loud and listen to the ou.",
        "Say each word slowly. Ask whether the ou sounds like ow in cow or like the oo in moon.",
        "Start with cougar. Say it, then decide which sound you hear."
      ],
      how: [
        "Say each word.",
        "Cloud and shout have the sound in loud.",
        "Cougar and routine have the sound in you."
      ],
      misconception: "A common mix-up is giving ou one sound in every word. Listen to each word.",
      why: "Cloud and shout have the ou sound in loud. Cougar and routine have the sound in you."
    },
    {
      id: "SK-FP4a-S12",
      type: "mc",
      points: 1,
      dok: 3,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-C11"
      ],
      prompt: "Lila reads cough and dough as a rhyming pair. What is her best next move?",
      choices: [
        {
          text: "Check each one by itself, then read it.",
          correct: true
        },
        {
          text: "Let them rhyme, since their last letters match."
        },
        {
          text: "Use the sound of cow, for the ou stands for it."
        },
        {
          text: "Use a short u, as each ends in gh."
        }
      ],
      clue: "Think about how a group of letters can be used in different words.",
      hints: [
        "Think about how a group of letters can be used in different words.",
        "Say cough and dough out loud. Listen to the end of each one.",
        "Compare each choice with what you hear when you say both words."
      ],
      how: [
        "Say cough and dough out loud.",
        "The endings do not sound the same.",
        "So Lila should check each one by itself, then read it."
      ],
      misconception: "A common mix-up is trusting the letters to give the sound. Ough changes from word to word.",
      why: "The answer is \"Check each one by itself, then read it.\" Cough and dough end with different sounds. The other choices pick one sound for both."
    },
    {
      id: "SK-FP4a-S13",
      type: "order",
      points: 2,
      dok: 2,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-C12"
      ],
      prompt: "Order what you do to work out a c in a new word.",
      steps: [
        "Find the letter after the c.",
        "Is that letter e, i or y?",
        "Say s for a yes and k for a no.",
        "Go over the whole word once more."
      ],
      clue: "Think about what you look at before you say anything.",
      hints: [
        "Think about what you look at before you say anything.",
        "Think about what you must find out before you choose a sound.",
        "The last step is a way to make sure the word is right."
      ],
      how: [
        "First, find the letter after the c.",
        "Second, ask whether that letter is e, i or y.",
        "Third, say s for a yes and k for a no.",
        "Fourth, go over the whole word once more."
      ],
      misconception: "A common mix-up is choosing a sound before looking at the next letter. Look first.",
      why: "The order is: find the letter after the c; ask whether that letter is e, i or y; say s for a yes and k for a no; go over the whole word once more."
    },
    {
      id: "SK-FP4a-S14",
      type: "hottext",
      points: 1,
      dok: 2,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-P6"
      ],
      prompt: "Tap the word with a c that says s.",
      stem: [
        "We ate buns and rice in the cold hall."
      ],
      options: [
        "buns",
        "rice",
        "cold",
        "ate"
      ],
      answer: [
        1
      ],
      pick: 1,
      clue: "Find each c. Then look at the letter right after it.",
      hints: [
        "Find each c. Then look at the letter right after it.",
        "Only some of these words have a c. Find them first.",
        "Say rice and cold out loud. Ask whether each c says k or s."
      ],
      how: [
        "Find the words with a c: rice and cold.",
        "In cold, c comes before o, so it is hard.",
        "In rice, c comes before e, so it is soft."
      ],
      misconception: "A common mix-up is choosing the first word with a c. Check the letter after the c.",
      why: "The answer is \"rice.\" The c comes before e, so it says s. In cold, c is hard, and buns and ate have no c."
    },
    {
      id: "SK-FP4a-S15",
      type: "dropdown",
      points: 1,
      dok: 1,
      std: [
        "3.F.P.4.a"
      ],
      passages: [],
      like: [
        "SK-FP4a-P7"
      ],
      prompt: "Which spelling goes in the blank?",
      text: "Mom put a clean {0} on the table.",
      slots: [
        {
          options: [
            "plait",
            "plate",
            "playt"
          ],
          answer: 1
        }
      ],
      clue: "Say the word that fits the sentence. Then picture how it looks.",
      hints: [
        "Say the word that fits the sentence. Then picture how it looks.",
        "Some of these are real words that mean something else. Read each one in the sentence.",
        "Think about what goes on a table and what letters make the long a sound."
      ],
      how: [
        "Read the sentence and think of a dish you eat from.",
        "That word is spelled p-l-a-t-e.",
        "Plait is a real word, but it means a braid. Playt is not a word."
      ],
      misconception: "A common mix-up is picking a spelling that sounds right but is a different word.",
      why: "The answer is plate. A plate goes on a table, and the long a sound is spelled a-t-e. Plait means a braid, and playt is not a word."
    }
  ],
  addons: {
    "SK-FP4a-P1": {
      hints: [
        "Say bread out loud and listen to its ea. Then say each choice.",
        "Say each choice slowly. Ask whether its ea sounds like the e in bed or like the ee in tree.",
        "Say beach and team again. Compare their ea with the ea in bread."
      ],
      how: [
        "Say bread. The ea sounds like the e in bed.",
        "Say each choice. Head has the same short e sound.",
        "Beach, leaf and team have the long e sound."
      ],
      misconception: "A common mix-up is thinking ea always says long e. Say the word to hear it."
    },
    "SK-FP4a-P2": {
      hints: [
        "Say each word out loud and listen to the ow.",
        "Compare each ow with snow and cow. Ask which sound it matches.",
        "Start with owl. Say it and decide whether the ow sounds like ouch or like go."
      ],
      how: [
        "Say each word slowly.",
        "Grow and blow have the long o sound, like snow.",
        "Town, crown and owl have the sound in cow."
      ],
      misconception: "A common mix-up is giving ow one sound in every word. Say each word to hear it."
    },
    "SK-FP4a-P3": {
      hints: [
        "Look at the letter right after the c in each word.",
        "Say each word out loud. Ask whether the c says k or s.",
        "Check cloud. Is the c followed by e, i or y, or by another letter?"
      ],
      how: [
        "Find the c in each word and look at the next letter.",
        "In city, c comes before i, so it says s.",
        "In cup, cloud and cave, c comes before u, l and a, so it says k."
      ],
      misconception: "A common mix-up is choosing a word because it has a c. Check the letter after the c."
    },
    "SK-FP4a-P4": {
      hints: [
        "Look at the letter right after each g.",
        "Say each word out loud. Ask whether its g is hard or soft.",
        "Start with grapes. Look at the letter after the g."
      ],
      how: [
        "Find each g and the letter after it.",
        "In giant, g comes before i, so it says j.",
        "In grapes, g comes before r, so it says the g in go."
      ],
      misconception: "A common mix-up is thinking g always sounds the same. Check the letter after it."
    },
    "SK-FP4a-P5": {
      hints: [
        "Say bead out loud and listen to its ea. Then say each choice.",
        "Say each word slowly. Ask whether the ea says its name, e.",
        "Say bread and great again. Compare their vowels with the vowel in bead."
      ],
      how: [
        "Say bead. The ea says long e.",
        "Dream and peach have the long e sound.",
        "Bread, head and feather have short e, and great has long a."
      ],
      misconception: "A common mix-up is choosing any ea word. The sound has to match bead."
    },
    "SK-FP4a-P6": {
      hints: [
        "Find each c in the sentence. Then look at the letter right after it.",
        "Only some of the words have a c. Find them first.",
        "Say Carla and cut out loud. Ask whether each c says k or s."
      ],
      how: [
        "Find the words with a c.",
        "In Carla, cut and cake, c comes before a or u, so it is hard.",
        "In slices, c comes before e, so it says s."
      ],
      misconception: "A common mix-up is choosing the first word with a c. Check the letter after the c."
    },
    "SK-FP4a-P7": {
      hints: [
        "Say the word that fits the sentence. Then picture the word on a bag at the store.",
        "Some of these are real words that mean something else. Read each one in the sentence.",
        "Think about the vowel sound and which letters can spell it."
      ],
      how: [
        "Read the sentence. A baker sells a loaf of this food.",
        "That word is spelled b-r-e-a-d, with ea for the short e sound.",
        "Bred and breed are real words, but they mean something else."
      ],
      misconception: "A common mix-up is picking a spelling that sounds right but means something else."
    }
  },
  /* B9:core:end */
  test: [
    { id: "SK-FP4a-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word has the same ow sound as cow?",
      choices: [
        { text: "brown", correct: true },
        { text: "snow" },
        { text: "grow" },
        { text: "bowl" }
      ],
      clue: "Say cow out loud. Then say each word and listen for that same sound.",
      why: "The answer is brown. In cow and brown, ow makes the sound you hear in ouch. In snow, grow and bowl, ow says long o." },
    { id: "SK-FP4a-T2", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Sort the words by the sound c makes.",
      cols: ["soft c (like s)", "hard c (like k)"],
      rows: [
        { text: "cent", answer: 0 },
        { text: "camp", answer: 1 },
        { text: "pencil", answer: 0 },
        { text: "color", answer: 1 },
        { text: "rice", answer: 0 }
      ],
      clue: "For each word, find the c and look at the letter right after it.",
      why: "Cent, pencil and rice have a soft c, because e or i comes after the c. Camp and color have a hard c, because a or o comes after it." },
    { id: "SK-FP4a-T3", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which word has the same ea sound as thread?",
      choices: [
        { text: "sweater", correct: true },
        { text: "seat" },
        { text: "clean" },
        { text: "speak" }
      ],
      clue: "Say thread out loud. Is the ea long, like in team, or short, like the e in bed?",
      why: "The answer is sweater. In thread and sweater, ea says short e, like in bed. In seat, clean and speak, ea says long e." },
    { id: "SK-FP4a-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO words have a g that sounds like j?",
      choices: [
        { text: "giraffe", correct: true },
        { text: "page", correct: true },
        { text: "gift" },
        { text: "goose" },
        { text: "wagon" }
      ],
      clue: "Look at the letter after each g. Then say each word out loud, because some words break the rule.",
      why: "Giraffe and page have a soft g that says j. Goose and wagon have a hard g, because o comes after it. Gift breaks the rule: the g comes before i, but it is hard, like in go." },
    { id: "SK-FP4a-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Read the sentence. How do you say the two words spelled read?",
      stem: "I will read the book that Dad read last night.",
      choices: [
        { text: "The first rhymes with seed, and the second rhymes with red.", correct: true },
        { text: "Both of the words spelled read rhyme with seed." },
        { text: "Both of the words spelled read rhyme with red." },
        { text: "The first rhymes with red, and the second rhymes with seed." }
      ],
      clue: "Look for clues about time. Is each reading happening later, or did it already happen? Say the sentence both ways and listen.",
      why: "The answer is \"The first rhymes with seed, and the second rhymes with red.\" \"I will read\" is about later, so ea says long e. \"Dad read last night\" already happened, so ea says short e." },
    { id: "SK-FP4a-T6", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that is spelled correctly.",
      text: "The dog jumped over the {0}.",
      slots: [
        { options: ["fence", "fense", "fenc"], answer: 0 }
      ],
      clue: "Picture the word. Think about how the s sound is spelled at the end of words like this, and what keeps a c soft.",
      why: "The answer is fence. The s sound at the end is spelled ce, like in face and dance, and the e makes the c soft. Fense sounds the same but is not how the word is spelled. Fenc has no e, so its c would be hard, like k." }
  ]
});

PP.addLesson({
  code: "3.F.P.4.b",
  title: "Syllable types: breaking long words into parts",
  teach: {
    big: "Break a long word into syllables, and the kind of syllable tells you what sound the vowel makes.",
    points: [
      "Every syllable has one vowel sound. Clap a word to count its syllables: rab-bit has two claps.",
      "There are six kinds of syllables (see the key words). The kind of syllable is a clue to the vowel sound.",
      "When two consonants stand between two vowels, you usually split between them: nap-kin, rab-bit.",
      "When one consonant stands between two vowels, try splitting before it first, so the first vowel is long: ti-ger, ro-bot. If that is not a real word, split after it, so the vowel is short: cab-in, lem-on.",
      "When a word ends in a consonant plus le, those three letters usually make the last syllable: ta-ble, pur-ple, puz-zle."
    ],
    words: [
      { term: "closed", means: "ends with a consonant; the vowel is usually short, like cat or the nap in napkin" },
      { term: "open", means: "ends with a vowel; the vowel is usually long, like go or the ti in tiger" },
      { term: "vowel-consonant-e", means: "a vowel, a consonant, then a silent e; the first vowel is usually long, like cake" },
      { term: "vowel team", means: "two letters make one vowel sound, like ai in rain or oa in boat" },
      { term: "r-controlled", means: "a vowel followed by r; the r changes the sound, like car, her and bird" },
      { term: "consonant-le", means: "a consonant plus le at the end of a word, like the ble in table" }
    ],
    example: {
      label: "Split it, then read it",
      lines: [
        "sunset: sun / set (closed + closed)",
        "robot: ro / bot (open + closed)",
        "cupcake: cup / cake (closed + vowel-consonant-e)",
        "marble: mar / ble (r-controlled + consonant-le)"
      ],
      note: "Read one syllable at a time, then blend the parts. The ro in robot is open, so the o is long. The cup in cupcake is closed, so the u is short."
    },
    tip: "This skill is checked in class, not on the Milestones. On the test, it helps you read long words in passages, like remember or fantastic, one part at a time."
  },
  learn: [
    {
      show: ["basket"],
      ask: "How do you split basket into syllables?",
      steps: [
        "Find the vowels: a and e. Two vowel sounds means two syllables.",
        "Look between the vowels. There are two consonants, s and k, so split between them: bas / ket.",
        "Both parts end with a consonant, so both are closed and both vowels are short."
      ],
      answer: "bas / ket. Both syllables are closed, so both vowels are short."
    },
    {
      show: ["pilot"],
      ask: "How do you split pilot into syllables?",
      steps: [
        "Find the vowels: i and o. There is one consonant, l, between them.",
        "Try splitting before the l first: pi / lot. Pi is open, so the i is long: PIE-lut.",
        "PIE-lut is a real word: a person who flies a plane. So this split is right."
      ],
      answer: "pi / lot. The first syllable is open, so the i is long."
    },
    {
      show: ["camel"],
      ask: "How do you split camel into syllables?",
      steps: [
        "Find the vowels: a and e. There is one consonant, m, between them.",
        "Try splitting before the m: ca / mel. That makes KAY-mul, which is not a word you know.",
        "Split after the m instead: cam / el. Cam is closed, so the a is short: KAM-ul. That is the animal with a hump."
      ],
      answer: "cam / el. The first syllable is closed, so the a is short."
    }
  ],
  parent: "Clap out long words you see on signs, menus and cereal boxes together. Then cover part of the word with your finger and have your child read it one syllable at a time. In Try It Yourself, the \"Read it, then spell it\" lists let you hear your child read long words and spell them on paper. The questions on this site can only check that your child splits and sorts syllables correctly; they cannot hear your child read or watch them write.",
  write: {
    prompt: [
      "**Read it, then spell it.** A grown-up runs this. Your child needs paper and a pencil.",
      "**Part 1: Read out loud.** Your child reads each word to you. If a word stops them, cover all but the first syllable with your finger, then slide your finger to show one more syllable at a time. Words: hamster, tadpole, fifteen, tiger, cabin, beetle, cactus, explode, cucumber, thunderstorm.",
      "**Part 2: Spell it (grown-up only).** Turn the screen away from your child. Say each word, read the sentence, then say the word again. Your child claps the word first, then writes it one syllable at a time.",
      "1. shrimp: We ate shrimp for dinner.", "2. stripe: The flag has a red stripe.", "3. muffin: I had a muffin for breakfast.", "4. silent: The room was silent.", "5. invite: I will invite Sam to my party.",
      "6. rainbow: A rainbow came out after the rain.", "7. corner: Wait at the corner.", "8. puddle: The dog splashed in a puddle.", "9. maple: A maple tree grows in our yard.", "10. volcano: The volcano sent up smoke.",
      "**Check together.** Show the list. Your child checks each word that matches and circles the syllable with the mistake. Then ask what kind of syllable it is. For example, if your child wrote mapple, ask: \"Is the a in maple long or short?\" It is long, so the first syllable is open, ma, with one p. If puddle came out pudle, the u is short, so the first syllable must be closed: pud. Have your child write each missed word correctly three times, saying the syllables, and type it in the box below. Spell the boxed words again in two or three days."
    ],
    checklist: [
      "I read the Part 1 words out loud, one syllable at a time when I needed to.",
      "I clapped each Part 2 word before I wrote it, without looking at the screen.",
      "I checked my words with my grown-up and circled any syllable I missed.",
      "I wrote each missed word correctly three times."
    ],
    rows: 3
  },
  passages: [],
  practice: [
    { id: "SK-FP4b-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "How do you split the word fantastic into syllables?",
      choices: [
        { text: "fan / tas / tic", correct: true },
        { text: "fant / as / tic" },
        { text: "fa / ntas / tic" },
        { text: "fan / ta / stic" }
      ],
      clue: "Find the three vowels. Look at the consonants between each pair of vowels. When there are two, where do you usually split?",
      why: "The answer is fan / tas / tic. Between a and a stand n and t, so you split between them. Between a and i stand s and t, so you split between those too. All three syllables are closed." },
    { id: "SK-FP4b-P2", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each word to its kind of syllable.",
      cols: ["open", "vowel-consonant-e", "vowel team", "r-controlled"],
      rows: [
        { text: "she", answer: 0 },
        { text: "bike", answer: 1 },
        { text: "coat", answer: 2 },
        { text: "fork", answer: 3 }
      ],
      clue: "For each word, look at how the vowel is spelled. Does it end the word? Is there a silent e? Do two letters work together? Is there an r after it?",
      why: "She ends with a vowel, so it is open. Bike has i, a consonant, then a silent e. Coat has the vowel team oa. Fork has or, so it is r-controlled." },
    { id: "SK-FP4b-P3", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "In which word is the first syllable open, so the first vowel says its name?",
      choices: [
        { text: "spider", correct: true },
        { text: "rabbit" },
        { text: "picnic" },
        { text: "candle" }
      ],
      clue: "Split each word. Does the first syllable end with a vowel or with a consonant?",
      why: "The answer is spider. It splits as spi / der. Spi ends with a vowel, so it is open and the i is long. Rab, pic and can all end with a consonant, so they are closed." },
    { id: "SK-FP4b-P4", type: "order", points: 1, dok: 1, passages: [],
      prompt: "Put the syllables in order to build the word remember.",
      steps: ["re", "mem", "ber"],
      clue: "Say remember slowly and clap each part. Which part do you hear first?",
      why: "The order is re, mem, ber. Re is open, mem is closed, and ber is r-controlled." },
    { id: "SK-FP4b-P5", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Each word has one consonant between two vowels. Match each word to the way it splits.",
      cols: ["before the consonant (long first vowel)", "after the consonant (short first vowel)"],
      rows: [
        { text: "music", answer: 0 },
        { text: "wagon", answer: 1 },
        { text: "tulip", answer: 0 },
        { text: "planet", answer: 1 }
      ],
      clue: "Try splitting before the middle consonant first and say the word. If that is not a real word, split after it.",
      why: "Music (mu / sic) and tulip (tu / lip) split before the consonant, so the u is long. Wagon (wag / on) and planet (plan / et) split after it, so the a is short. Wa / gon would say WAY-gun, which is not the word." },
    { id: "SK-FP4b-P6", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO words end with a consonant-le syllable?",
      choices: [
        { text: "bubble", correct: true },
        { text: "turtle", correct: true },
        { text: "tunnel" },
        { text: "travel" },
        { text: "sunset" }
      ],
      clue: "Look at the last three letters of each word. Is it a consonant followed by l and e, in that order?",
      why: "Bubble ends with ble and turtle ends with tle, so both end with a consonant-le syllable. Tunnel and travel end with el, not le. Sunset ends with a closed syllable." },
    { id: "SK-FP4b-P7", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that is spelled correctly.",
      text: "Please blow out the {0} on the cake.",
      slots: [
        { options: ["candle", "candel", "candal"], answer: 0 }
      ],
      clue: "Clap the word and spell it one syllable at a time. Check each syllable against the syllable types you know.",
      why: "The answer is candle. It is can / dle: a closed syllable and then a consonant-le syllable, spelled d-l-e." }
  ],
  test: [
    { id: "SK-FP4b-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "How do you split the word September into syllables?",
      choices: [
        { text: "Sep / tem / ber", correct: true },
        { text: "Se / ptem / ber" },
        { text: "Sept / em / ber" },
        { text: "Sep / te / mber" }
      ],
      clue: "Find the vowels. Look at the consonants between each pair of vowels and count them.",
      why: "The answer is Sep / tem / ber. Two consonants, p and t, stand between the first two vowels, so you split between them. Two more, m and b, stand between the next two, so you split between those too." },
    { id: "SK-FP4b-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which word ends with a vowel-consonant-e syllable?",
      choices: [
        { text: "inside", correct: true },
        { text: "insect" },
        { text: "garden" },
        { text: "raining" }
      ],
      clue: "Look at the last syllable of each word. Is there a vowel, then one consonant, then a silent e?",
      why: "The answer is inside. It splits as in / side, and side has i, d and a silent e, so the i is long. Insect and garden end with consonants, and raining ends with ing." },
    { id: "SK-FP4b-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Each row shows one syllable from a longer word. Match each syllable to its kind.",
      cols: ["closed", "open", "consonant-le"],
      rows: [
        { text: "nap in napkin", answer: 0 },
        { text: "po in pony", answer: 1 },
        { text: "ple in apple", answer: 2 },
        { text: "ba in bacon", answer: 1 }
      ],
      clue: "Look at how each syllable ends. Does it end with a consonant, end with a vowel, or is it a consonant plus le at the end of the word?",
      why: "Nap ends with a consonant, so it is closed. Po and ba end with a vowel, so they are open and the vowel is long. Ple is a consonant plus le at the end of apple." },
    { id: "SK-FP4b-T4", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO words split after the middle consonant, so the first vowel is short?",
      choices: [
        { text: "robin", correct: true },
        { text: "seven", correct: true },
        { text: "paper" },
        { text: "baby" },
        { text: "hotel" }
      ],
      clue: "Say each word and listen to the first vowel. Is it short, or does it say its name?",
      why: "Robin (rob / in) and seven (sev / en) have a short first vowel, so the first syllable is closed. Paper (pa / per), baby (ba / by) and hotel (ho / tel) have a long first vowel, so they split before the consonant." },
    { id: "SK-FP4b-T5", type: "order", points: 2, dok: 1, passages: [],
      prompt: "Put the syllables in order to build the word umbrella.",
      steps: ["um", "brel", "la"],
      clue: "Say umbrella slowly and clap each part. Which part comes first, next and last?",
      why: "The order is um, brel, la. Um and brel are closed, and la is open." },
    { id: "SK-FP4b-T6", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Choose the word that is spelled correctly.",
      text: "Tom found a smooth {0} in the creek.",
      slots: [
        { options: ["pebble", "peble", "pebbel"], answer: 0 }
      ],
      clue: "Clap the word and spell it one syllable at a time. Use what each syllable type tells you about the vowel sound.",
      why: "The answer is pebble. It is peb / ble: the first syllable is closed, so the e is short, and the last syllable is consonant-le. Peble would split pe / ble, with a long e." }
  ]
});

PP.addLesson({
  code: "3.F.P.4.c",
  title: "Prefixes and suffixes: reading and spelling word parts",
  teach: {
    big: "Find the base word first, then add the beginning and the ending, and watch for spelling changes.",
    points: [
      "A prefix goes at the start of a word and changes its meaning. Re- means again (redo). Un- and dis- mean not or the opposite of (unhappy, unlock, dislike). Mis- means wrongly (misspell), and pre- means before (preheat).",
      "A suffix goes at the end. -ed often tells that something already happened (jumped). -ing tells that it is happening (jumping). -ly tells how (quickly). -ful means full of (helpful), and -less means without (helpless). The suffix -ful has only one l.",
      "To read a long word, cover the prefix and suffix, read the base word, then put the parts together: un / pack / ing. Be careful: un in uncle and under, and dis in dish, are not prefixes, because what is left is not a word.",
      "Before a suffix that starts with a vowel, like -ed or -ing, drop a silent e: bake becomes baking. Before a suffix that starts with a consonant, like -ful, -less or -ly, keep the e: hope becomes hopeful. When a short word ends with one short vowel and one consonant, you usually double the consonant before -ed or -ing: hop becomes hopping.",
      "When a word ends with a consonant and y, change the y to i before -ed or -ly: cry becomes cried, happy becomes happily. Keep the y before -ing (crying), and keep it when a vowel comes before it (played)."
    ],
    words: [
      { term: "base word", means: "the main word, before anything is added" },
      { term: "prefix", means: "a word part added to the beginning, like re-, un- or dis-" },
      { term: "suffix", means: "a word part added to the end, like -ed, -ing, -ly, -ful or -less" }
    ],
    example: {
      label: "Adding word parts",
      lines: [
        "re + build = rebuild (build again)",
        "un + lock = unlock (the opposite of lock)",
        "dis + agree = disagree (not agree)",
        "pain + ful = painful (full of pain); pain + less = painless (without pain)",
        "hope + ing = hoping (drop the e)",
        "hop + ing = hopping (double the p)",
        "cry + ed = cried (change y to i)"
      ],
      note: "Hoping and hopping look almost the same, but they are different words. The double p keeps the o short in hopping."
    },
    tip: "This skill is checked in class, not on the Milestones. On the test, finding the base word and its prefix or suffix helps you figure out what a new word means."
  },
  learn: [
    {
      show: ["unpacking"],
      ask: "How do you read unpacking, and what does it mean?",
      steps: [
        "Look for a prefix at the start: un-. Look for a suffix at the end: -ing.",
        "Cover them up. What is left is the base word: pack.",
        "Put the parts together: un / pack / ing. Un- means the opposite, and -ing means it is happening now."
      ],
      answer: "un-pack-ing: taking things out of a bag or box right now."
    },
    {
      show: ["smile + ed"],
      ask: "How do you spell smile with -ed added?",
      steps: [
        "Look at the end of smile. It ends with a silent e.",
        "The suffix -ed starts with a vowel, so drop the silent e first.",
        "Add -ed to smil. Check it: smiled."
      ],
      answer: "smiled"
    },
    {
      show: ["easy + ly"],
      ask: "How do you spell easy with -ly added?",
      steps: [
        "Look at the end of easy. It ends with a y, and the letter before the y is s, a consonant.",
        "A consonant and y means you change the y to i before adding -ly.",
        "Easi + ly makes easily."
      ],
      answer: "easily"
    }
  ],
  parent: "When you see a word with re-, un-, dis-, -ed, -ing, -ly, -ful or -less on a sign or package, ask your child to cover the extra parts with a finger and read the base word. For spelling, call out a base word and an ending (\"swim plus ing\") and have your child write it. In Try It Yourself, the \"Read it, then spell it\" lists let you hear your child read these words and spell them on paper. The questions on this site can only check that your child picks the right meaning or spelling; they cannot hear your child read or watch them write.",
  write: {
    prompt: [
      "**Read it, then spell it.** A grown-up runs this. Your child needs paper and a pencil.",
      "**Part 1: Read out loud.** Your child reads each word to you. If a word stops them, have them cover the prefix and suffix with their fingers, read the base word, then add the parts back one at a time. Words: disagree, unpacked, thankful, careless, rewriting, unlucky, disappear, spotless, playful, misplace, preview, carefully.",
      "**Part 2: Spell it (grown-up only).** Turn the screen away from your child. Say each word, read the sentence, then say the word again. Before writing, your child says the base word and the parts: \"hop, plus ing.\"",
      "1. hopping: The bunny is hopping across the yard.", "2. hoping: I am hoping for snow.", "3. baking: Mom is baking bread.", "4. cried: The baby cried at night.", "5. replayed: We replayed our favorite song.",
      "6. unfold: Unfold the map on the table.", "7. dislike: I dislike cold soup.", "8. careful: Be careful on the ice.", "9. helpless: The baby bird was helpless.", "10. happily: The dog wagged its tail happily.",
      "**Check together.** Show the list. Your child checks each word that matches and circles the part with the mistake. Then name the rule that was missed: hopping doubles the p (hop has one short vowel and one consonant), hoping and baking drop the e, cried and happily change y to i, replayed keeps the y because a vowel comes before it, and careful keeps the e and has only one l. Have your child write each missed word correctly three times while saying the parts, and type it in the box below. Spell the boxed words again in two or three days."
    ],
    checklist: [
      "I read the Part 1 words out loud, covering the parts when I needed to.",
      "I said the base word and the parts before I wrote each Part 2 word, without looking at the screen.",
      "I checked my words with my grown-up and circled any part I missed.",
      "I wrote each missed word correctly three times."
    ],
    rows: 3
  },
  passages: [],
  practice: [
    { id: "SK-FP4c-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "What does the word reread mean?",
      choices: [
        { text: "to read again", correct: true },
        { text: "to not read" },
        { text: "to read slowly" },
        { text: "to read before" }
      ],
      clue: "Find the base word. Then think about what the prefix re- adds to it.",
      why: "The answer is \"to read again.\" The base word is read, and the prefix re- means again." },
    { id: "SK-FP4c-P2", type: "dropdown", points: 1, dok: 1, passages: [],
      prompt: "Choose the word that is spelled correctly.",
      text: "Jada is {0} a card for her grandma.",
      slots: [
        { options: ["making", "makeing", "makking"], answer: 0 }
      ],
      clue: "Find the base word and look at how it ends. Then use the spelling rule that fits before -ing.",
      why: "The answer is making. Make ends with a silent e, so you drop the e before adding -ing." },
    { id: "SK-FP4c-P3", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which is the correct way to spell stop with -ed added?",
      choices: [
        { text: "stopped", correct: true },
        { text: "stoped" },
        { text: "stopt" },
        { text: "stopted" }
      ],
      clue: "Look at how the base word ends. Then use the spelling rule that fits before -ed.",
      why: "The answer is stopped. Stop ends with one short vowel, o, and one consonant, p, so you double the p before adding -ed." },
    { id: "SK-FP4c-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each word and ending to the spelling change it needs.",
      cols: ["drop the e", "double the last letter", "change y to i", "no change"],
      rows: [
        { text: "bake + ing", answer: 0 },
        { text: "run + ing", answer: 1 },
        { text: "carry + ed", answer: 2 },
        { text: "jump + ed", answer: 3 }
      ],
      clue: "Look at how each base word ends: a silent e, one short vowel and one consonant, a consonant and y, or something else.",
      why: "Bake drops the e (baking). Run doubles the n (running). Carry changes y to i (carried). Jump ends with two consonants, so nothing changes (jumped)." },
    { id: "SK-FP4c-P5", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO words have a prefix that means not or the opposite of?",
      choices: [
        { text: "unkind", correct: true },
        { text: "untie", correct: true },
        { text: "under" },
        { text: "uncle" },
        { text: "repaint" }
      ],
      clue: "Cover the un at the start of each word. Is the part that is left a real word? Also think about what re- means.",
      why: "Unkind means not kind, and untie means the opposite of tie. In under and uncle, the part left after un is not a word, so un is not a prefix. Repaint has re-, which means again." },
    { id: "SK-FP4c-P6", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "What is the base word in replanted?",
      choices: [
        { text: "plant", correct: true },
        { text: "replant" },
        { text: "planted" },
        { text: "plan" }
      ],
      clue: "Cover the prefix at the start and the suffix at the end. What word is left?",
      why: "The answer is plant. Re- is the prefix and -ed is the suffix, so plant is the base word." },
    { id: "SK-FP4c-P7", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each word to what its prefix or suffix means.",
      cols: ["not or the opposite of", "full of", "without"],
      rows: [
        { text: "disobey", answer: 0 },
        { text: "fearless", answer: 2 },
        { text: "joyful", answer: 1 },
        { text: "unfair", answer: 0 }
      ],
      clue: "Cover the extra part of each word and read the base word. Then think about what the part you covered adds to it. A column can be used more than once.",
      why: "Disobey means not obey, and unfair means not fair, so dis- and un- mean not. Joyful means full of joy, so -ful means full of. Fearless means without fear, so -less means without." }
  ],
  test: [
    { id: "SK-FP4c-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "What does the word unsafe mean?",
      choices: [
        { text: "not safe", correct: true },
        { text: "safe again" },
        { text: "very safe" },
        { text: "safe before" }
      ],
      clue: "Find the base word. Then think about what the prefix un- adds to it.",
      why: "The answer is \"not safe.\" The base word is safe, and the prefix un- means not." },
    { id: "SK-FP4c-T2", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Choose the word that is spelled correctly for each blank.",
      text: "Yesterday the frog {0} onto a rock. Now it is {1} in the sun.",
      slots: [
        { options: ["hopped", "hoped", "hopt"], answer: 0 },
        { options: ["napping", "naping", "napeing"], answer: 0 }
      ],
      clue: "Find the base word in each blank and look at how it ends. Then use the spelling rule that fits.",
      why: "The answers are hopped and napping. Hop and nap each end with one short vowel and one consonant, so you double the last letter. Hoped is a real word, but it comes from hope, not hop." },
    { id: "SK-FP4c-T3", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Which is the correct way to spell try with -ed added?",
      choices: [
        { text: "tried", correct: true },
        { text: "tryed" },
        { text: "tryd" },
        { text: "treid" }
      ],
      clue: "Look at the last two letters of the base word. Then use the spelling rule that fits before -ed.",
      why: "The answer is tried. Try ends with r and y, a consonant and y, so you change the y to i and add -ed." },
    { id: "SK-FP4c-T4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Match each word and ending to the spelling change it needs.",
      cols: ["drop the e", "double the last letter", "change y to i", "no change"],
      rows: [
        { text: "shine + ing", answer: 0 },
        { text: "skate + ed", answer: 0 },
        { text: "swim + ing", answer: 1 },
        { text: "happy + ly", answer: 2 },
        { text: "spy + ed", answer: 2 }
      ],
      clue: "Look at the last letters of each base word. For words that end in y, check the letter just before the y. A column can be used more than once, or not at all.",
      why: "Shine and skate drop the e (shining, skated). Swim doubles the m (swimming). Happy and spy end with a consonant and y, so the y changes to i (happily, spied). Every word here needs a change, so no row goes under no change." },
    { id: "SK-FP4c-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which word means \"to fill again\"?",
      choices: [
        { text: "refill", correct: true },
        { text: "unfilled" },
        { text: "filling" },
        { text: "filler" }
      ],
      clue: "Find the base word in each choice. Then think about what its prefix or suffix adds to it.",
      why: "The answer is refill. The prefix re- means again, so refill means to fill again." },
    { id: "SK-FP4c-T6", type: "ms", points: 2, dok: 2, passages: [], pick: 2,
      prompt: "Which TWO words are spelled correctly?",
      choices: [
        { text: "useful", correct: true },
        { text: "careless", correct: true },
        { text: "usful" },
        { text: "colorfull" },
        { text: "homless" }
      ],
      clue: "Find the base word and the suffix in each one. Does the suffix start with a vowel or a consonant? Then check the letters at the very end.",
      why: "Useful and careless are spelled correctly. Use and care end with a silent e, and -ful and -less start with a consonant, so the e stays. Usful and homless dropped the e by mistake (the base words are use and home), and colorfull has two l's, but -ful has only one." }
  ]
});

PP.addLesson({
  code: "3.F.F.1.a",
  title: "Sight words: know them in a snap",
  teach: {
    big: "Some words show up so often that you should read them in a snap, and some of them are tricky because they do not sound the way their letters look.",
    points: [
      "Sight words are words you see all the time. Some follow the rules, like and, went and just. Read them so often that you know them in a snap, without sounding them out.",
      "Other sight words have a tricky part that is not said the way it looks, like the ai in said. Find the tricky part and remember it.",
      "A tricky word can look like a word it does not rhyme with. Come looks like home, but it rhymes with drum. If a word you read does not sound right in the sentence, ask: Is this a tricky word?",
      "Some sight words look alike: was and saw, from and form, where and were. Read every letter, and check that the word makes sense in the sentence.",
      "Practice a few words each day until you can read each one in a snap, both by itself and in a sentence."
    ],
    words: [
      { term: "sight word", means: "a word you know right away when you see it" },
      { term: "tricky part", means: "the part of a word that is not said the way it looks" }
    ],
    example: {
      label: "Find the tricky part",
      lines: [
        "said: the ai sounds like the e in bed",
        "friend: the ie sounds like the e in bed",
        "through: the ough sounds like the oo in moon",
        "could: the oul sounds like the oo in book, and the l is silent"
      ],
      note: "Find the tricky part and remember how it sounds. The rest of each word follows the rules you already know."
    },
    tip: "This skill is checked in class, not on the Milestones. But passages on the test are full of these words, and knowing them in a snap leaves more time to think about the questions."
  },
  learn: [
    {
      show: ["come     home"],
      ask: "Come and home end with the same letters. Do they rhyme?",
      steps: [
        "Home follows a rule you know: o, then a consonant, then a silent e, so the o says its name.",
        "Come is a tricky sight word. Its o makes the short u sound, like the u in drum.",
        "So come rhymes with drum, not with home. Learn it as a sight word."
      ],
      answer: "No. Come rhymes with drum. Home rhymes with dome."
    },
    {
      show: ["We walked ____ the dark tunnel.", "though     through     thought"],
      ask: "Which word belongs in the sentence?",
      steps: [
        "These words look alike, so read every letter of each one.",
        "Thought is what you did when you were thinking. Though means something like but or even so. Through means in one side and out the other.",
        "You walk in one side of a tunnel and out the other, so through fits."
      ],
      answer: "We walked through the dark tunnel."
    },
    {
      show: ["The book says: \"Then we went home.\"", "A reader said: \"Them we want home.\""],
      ask: "Which two sight words did the reader mix up, and how can the reader fix them?",
      steps: [
        "Both mistakes are small words that follow the rules but look a lot like other words: then and them, went and want.",
        "Look at every letter. T-h-e-n ends with n. W-e-n-t has an e in the middle.",
        "Reread the sentence and check that it makes sense: Then we went home."
      ],
      answer: "The reader read then as them and went as want. Rereading with every letter in mind fixes it: \"Then we went home.\""
    }
  ],
  parent: "Write five sight words on cards and flash each one for a second or two. Your child should read it right away, without sounding it out; any word they stop on goes back in the practice pile. Then hunt for the words together in a book, menu or sign. The questions on this page check that your child knows how tricky words are said and can tell look-alike words apart in a sentence. They cannot check how quickly your child reads a word out loud: only a grown-up listening can. Use the quick-read list in Try It Yourself for that.",
  write: {
    prompt: [
      "**Quick-read list.** A grown-up listens while your child reads these words out loud. This is home practice. The site does not time or score it.",
      "Grown-up: point to one word at a time. If your child reads it correctly within about a second, without sounding it out, it is in a snap. If they sound it out, stop or misread it, say the word, have them say it back while looking at it, and type it in the box below. If you like, time the whole list with a phone stopwatch and see it get faster during the week. There is no grade-level target for this list.",
      "Tricky words: said, does, friend, could, once, enough, people, laugh, again, busy, build, through.",
      "Words that follow the rules: went, just, then, them, with, when, much, stop, made, these.",
      "Now in sentences. Your child reads each one out loud: Once a week, my friend and I build a fort. Mom said the store was busy, so we went home. Could you read it again? It does not make sense to me.",
      "Practice the words in the box for a minute a day. When a word is in a snap three days in a row, delete it. Add new words from your child's books."
    ],
    checklist: [
      "I read the tricky words out loud to my grown-up.",
      "I read the words that follow the rules out loud to my grown-up.",
      "I read the three sentences out loud.",
      "I practiced the words in the box until each one was in a snap."
    ],
    rows: 3
  },
  passages: [],
  practice: [
    { id: "SK-FF1a-P1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Read the word were. Which word rhymes with it?",
      choices: [
        { text: "fur", correct: true },
        { text: "here" },
        { text: "where" },
        { text: "fire" }
      ],
      clue: "Were is a tricky word. Say it the way it sounds in a sentence, like \"We were late,\" not the way its letters look.",
      why: "The answer is fur. Were sounds like wur, so it rhymes with fur. It looks like here and where, but it does not sound like them. Fire has a long i sound." },
    { id: "SK-FF1a-P2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Read the word done. Which word rhymes with it?",
      choices: [
        { text: "sun", correct: true },
        { text: "bone" },
        { text: "gone" },
        { text: "down" }
      ],
      clue: "Done is a tricky word. Say it in a sentence, like \"I am done with my lunch.\" Then listen for the rhyme.",
      why: "The answer is sun. In done, the o makes the short u sound, so it rhymes with sun. Done looks like bone, but bone follows the silent e rule and done does not. Gone and down have different vowel sounds." },
    { id: "SK-FF1a-P3", type: "dropdown", points: 2, dok: 2, passages: [],
      prompt: "Read the sentence. Choose the words that make sense.",
      text: "Grandma will {0} for us {1} the bus stop.",
      slots: [
        { options: ["wait", "want", "what"], answer: 0 },
        { options: ["by", "be", "buy"], answer: 0 }
      ],
      clue: "These small words look a lot alike. Read every letter, then read the whole sentence with each one and ask: Does that make sense?",
      why: "The answers are wait and by. Grandma will wait for us, which means stay until we come, by the bus stop, which means next to it. Want and what start the same way but do not make sense here, and be and buy do not tell where." },
    { id: "SK-FF1a-P4", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Read each word. Sort it by the vowel sound you hear when you say it.",
      cols: ["the oo sound in moon", "the u sound in sun"],
      rows: [
        { text: "who", answer: 0 },
        { text: "love", answer: 1 },
        { text: "two", answer: 0 },
        { text: "month", answer: 1 },
        { text: "do", answer: 0 }
      ],
      clue: "Each of these words has an o, but none of them uses the o sound in go. Say each word in a short sentence, then listen to the vowel.",
      why: "Who, two and do have the oo sound in moon. Love and month have the u sound in sun. All five are tricky words, because the o does not make the sound in go." },
    { id: "SK-FF1a-P5", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Read the sentence. Choose the word that makes sense.",
      text: "Our team {0} the big game, so we got a trophy.",
      slots: [
        { options: ["won", "own", "now"], answer: 0 }
      ],
      clue: "These three words have the same letters in a different order. Read every letter in order, then read the sentence with each word.",
      why: "The answer is won. Won is a tricky word: it sounds like one and means came in first. Own and now use the same letters in a different order, but they do not make sense in the sentence." },
    { id: "SK-FF1a-P6", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Read the sentence. Choose the word that makes sense.",
      text: "Yesterday I {0} a deer in our yard.",
      slots: [
        { options: ["saw", "was", "sew"], answer: 0 }
      ],
      clue: "These words look alike. Read each one in the sentence and ask: Does that make sense?",
      why: "The answer is saw. \"Yesterday I saw a deer\" tells what I looked at. \"Yesterday I was a deer\" would mean the writer was a deer, which does not make sense. Was has the same letters as saw in a different order, and sew means to stitch with a needle." },
    { id: "SK-FF1a-P7", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "One sentence uses a look-alike word that does not belong. Which sentence is it?",
      options: [
        "Where are my shoes?",
        "We were late for the bus.",
        "The letter came form Grandma.",
        "This gift is from Aunt Lucy."
      ],
      answer: [2], pick: 1,
      clue: "Read every letter of the short words. Then ask if each sentence makes sense.",
      why: "The answer is \"The letter came form Grandma.\" It should say from. A form is a paper you fill out, so form does not make sense here." }
  ],
  test: [
    { id: "SK-FF1a-T1", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Read the word four. Which word rhymes with it?",
      choices: [
        { text: "door", correct: true },
        { text: "hour" },
        { text: "sour" },
        { text: "fur" }
      ],
      clue: "Say the word the way you say it when you count. Then say each choice and listen for the same ending sound.",
      why: "The answer is door. Four is the number word, and it rhymes with door. It looks like hour and sour, but those have the sound in out." },
    { id: "SK-FF1a-T2", type: "mc", points: 1, dok: 1, passages: [],
      prompt: "Read the word touch. Which word rhymes with it?",
      choices: [
        { text: "much", correct: true },
        { text: "couch" },
        { text: "pouch" },
        { text: "coach" }
      ],
      clue: "This word has a tricky vowel. Say it in a sentence, like \"Do not touch the hot pan,\" and listen to the middle sound.",
      why: "The answer is much. In touch, the ou makes the short u sound, so it rhymes with much. Couch and pouch look alike, but their ou says the sound in out. Coach has a long o." },
    { id: "SK-FF1a-T3", type: "match", points: 2, dok: 2, passages: [],
      prompt: "Read each word. Does it rhyme with sun or with bone?",
      cols: ["rhymes with sun", "rhymes with bone"],
      rows: [
        { text: "one", answer: 0 },
        { text: "alone", answer: 1 },
        { text: "none", answer: 0 },
        { text: "shown", answer: 1 }
      ],
      clue: "Some of these words follow the rules and some are tricky. Say each word in a short sentence, then listen to its vowel sound.",
      why: "One and none rhyme with sun. They are tricky words: one sounds like won, and none sounds like nun. Alone and shown rhyme with bone. Alone follows the silent e rule, and shown has ow saying long o." },
    { id: "SK-FF1a-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Which word best completes the sentence?",
      stem: "____ did you put the map?",
      choices: [
        { text: "Where", correct: true },
        { text: "Were" },
        { text: "Wear" },
        { text: "Wore" }
      ],
      clue: "Read every letter of each word. Then read the sentence with each one and ask: Does that make sense?",
      why: "The answer is Where. Where asks about a place: Where did you put the map? Were, wear and wore look alike, but they do not ask about a place." },
    { id: "SK-FF1a-T5", type: "hottext", points: 1, dok: 2, passages: [],
      prompt: "Read each sentence. In which sentence is one word wrong?",
      options: [
        "Please turn of the lamp.",
        "We put on our coats and hats.",
        "Two birds sat on the wire.",
        "I want to go there someday."
      ],
      answer: [0], pick: 1,
      clue: "Read slowly and picture what each sentence tells you to do or shows you. Check every letter of the small words.",
      why: "The answer is \"Please turn of the lamp.\" It should say off, with two f's. You turn a lamp off. Of is a different word." }
  ]
});

PP.addLesson({
  code: "3.F.F.1.d",
  title: "Does it make sense? Catching and fixing reading mistakes",
  teach: {
    big: "Good readers check that every sentence makes sense, and when one does not, they stop, go back and reread.",
    points: [
      "As you read, ask yourself: Does that make sense? Does it sound right? Does it look right?",
      "If a sentence does not make sense, you may have read a word wrong. Stop and go back to the start of the sentence.",
      "Look closely at the word that seems wrong. Check all of its letters, not just the first one. Horse and house start the same way but mean very different things.",
      "Use the rest of the sentence to help. Find a word that makes sense and also matches the letters.",
      "Rereading is not a mistake. It is what strong readers do."
    ],
    words: [
      { term: "self-correct", means: "to notice your own reading mistake and fix it" },
      { term: "reread", means: "to go back and read again" }
    ],
    example: {
      label: "Catch it and fix it",
      lines: [
        "The book says: The bird built a nest in the tree.",
        "A reader said: The bird built a nest in the three.",
        "Stop! Three does not make sense. Look again: t-r-e-e. The word is tree."
      ],
      note: "The reader noticed the sentence did not make sense, found the word that did not fit, checked its letters and reread the sentence."
    },
    tip: "This skill is checked in class, not on the Milestones. On the test, if an answer seems strange, reread the part of the passage it comes from. You may have misread a word."
  },
  learn: [
    {
      show: ["The book says: Dad put the milk back in the fridge.", "Kayla read: Dad put the mile back in the fridge."],
      ask: "Which word did Kayla misread, and how can she fix it?",
      steps: [
        "Ask: Does it make sense? A mile is a distance. It cannot go in a fridge.",
        "Find the word that does not fit: mile.",
        "Look at all of its letters: m-i-l-k. The word is milk. Reread the whole sentence with milk."
      ],
      answer: "Kayla misread milk as mile. She should reread: \"Dad put the milk back in the fridge.\""
    },
    {
      show: ["Here is how Theo read three sentences aloud:", "Rosa grabbed her umbrella. Then she walked to the bus shop in the rain. She was glad to stay dry."],
      ask: "Which sentence does not make sense, and what should Theo do?",
      steps: [
        "Check each sentence. Grabbing an umbrella makes sense. Staying dry makes sense.",
        "The middle sentence sounds wrong. People wait for a bus at a bus stop, not a bus shop.",
        "Theo should go back, look at all the letters (s-t-o-p) and reread the sentence."
      ],
      answer: "\"Then she walked to the bus shop in the rain\" does not make sense. The word is stop, so Theo should reread it as bus stop."
    }
  ],
  parent: "When your child reads aloud and misreads a word, wait for the end of the sentence before helping. Then ask, \"Did that make sense?\" and let them find and fix the word themselves. The questions on this page use other readers' mistakes, so they show whether your child can spot and fix a misread word on the page. Only listening to your child read, or looking at the Fix-up log in Try It Yourself together, shows whether they do it in their own reading. To count self-corrections during a read-aloud, use the timer in the Reading accurately skill: tap a word a second time when your child fixes it.",
  coach: {
    mixup: "Fixing every misread word the moment it happens. If you correct it right away, your child never gets the chance to notice it. Wait until the end of the sentence, or even the paragraph.",
    strong: "Stops on their own when a sentence does not make sense, goes back, looks at all the letters of the word, fixes it and rereads the sentence. Rereads a paragraph when they cannot say what it was about.",
    notyet: "Keeps reading after a sentence that makes no sense, or fixes a word only when you point to it. Use the prompts in We do, and praise every fix you hear.",
    ido: "Read a sentence aloud and misread one word on purpose, such as horse for house. Stop and say, \"Wait, that does not make sense.\" Point to the word, check every letter out loud and reread the whole sentence.",
    wedo: "Your child reads aloud. When a misread word changes the meaning, wait until the end of the sentence, then ask, \"Did that make sense?\" If they cannot find the problem, point to the sentence. If they still cannot, point to the word and ask, \"What letters do you see?\"",
    youdo: "Your child reads two pages silently and keeps the Fix-up log in Try It Yourself. Then they tell you one word they fixed, how they knew, and what the pages were mostly about. If they cannot say what a page was about, read it again together and ask once more.",
    everyday: "Praise the fix, not only the right word: \"I heard you go back and fix that. That is what good readers do.\" Self-corrections that come quickly, before the end of the sentence, are a sign of growing fluency."
  },
  write: {
    prompt: [
      "**Fix-up log.** Read a page or two of a book on your own, silently. When something does not make sense, stop. Go back, check all the letters of the word, and reread the sentence.",
      "In the box, write each word you fixed, like this: I read horse, but it was house.",
      "If you get to the end of a page and cannot say what it was about, reread it. Then write: I reread page __ because ____.",
      "Last, tell a grown-up one fix and what the pages were mostly about."
    ],
    checklist: [
      "I stopped when something did not make sense.",
      "I checked all the letters of the word, not just the first one.",
      "I reread the sentence or the page after I fixed it.",
      "I told a grown-up what the pages were mostly about."
    ],
    rows: 5
  },
  passages: [
    { id: "p1", title: "Pancake Morning (as Ben read it aloud)", genre: "Literary text",
      paragraphs: [
        ["On Saturday, Grandpa Lou made pancakes for breakfast.", "He let Nia stir the batter in a big bowl."],
        ["Nia poured in the flour, the eggs and the milk.", "Then she stirred and stirred until the lumps were gone."],
        ["Grandpa heated the plan on the stove.", "He dropped a spoonful of batter into the pan.", "Soon little bubbles popped up on top."],
        ["\"Now it is time to flip it,\" Grandpa said.", "Nia slid the spatula under the pancake and turned it over.", "It landed with a soft plop."],
        ["They put berries and a little money on top.", "Then they sat at the table and ate every bite."]
      ] },
    { id: "p2", title: "The Class Garden (as Ava read it aloud)", genre: "Literary text",
      paragraphs: [
        ["Ms. Ortiz's class planted a garden behind their school in Athens.", "Each student got a small squirrel of dirt."],
        ["Luis planted bean seeds in neat rows.", "He covered them with soil and gave them a drink of water."],
        ["Every morning, the class checked the garden.", "After one week, tiny green sprouts poked up through the ground."],
        ["One day, a big crown landed on the fence.", "It looked hungry for the seeds.", "Luis made a scarecrow out of an old shirt and two sticks."],
        ["Weeks later, the bean vines had climbed up the fence.", "The class picked a whole basket of beans."]
      ] }
  ],
  practice: [
    { id: "SK-FF1d-P1", type: "hottext", points: 2, dok: 2, passages: ["p1"],
      prompt: "Ben read this story aloud. The passage shows the words he said. Which TWO sentences do not make sense? Choose two sentences in the passage.",
      targets: ["p1:1:2", "p1:2:2", "p1:3:1", "p1:3:3", "p1:4:2", "p1:5:1"],
      answer: ["p1:3:1", "p1:5:1"], pick: 2,
      clue: "Read each sentence and ask: Does that make sense? Picture what is happening in the kitchen.",
      why: "The answers are \"Grandpa heated the plan on the stove.\" and \"They put berries and a little money on top.\" You cannot heat a plan, and money is not something you put on pancakes." },
    { id: "SK-FF1d-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "In paragraph 3, Ben read the word plan. Which word does the story most likely say?",
      choices: [
        { text: "pan", correct: true },
        { text: "plant" },
        { text: "plane" },
        { text: "pen" }
      ],
      clue: "Read the sentences around it. Find a word that makes sense there and also looks like plan.",
      why: "The answer is pan. Grandpa heats a pan on the stove, and the next sentence says he drops batter into the pan. Pan looks like plan without the l." },
    { id: "SK-FF1d-P3", type: "dropdown", points: 1, dok: 2, passages: ["p1"],
      prompt: "In paragraph 5, Ben read the word money. Choose the word that makes sense and looks like money.",
      text: "They put berries and a little {0} on top.",
      slots: [
        { options: ["honey", "monkey", "many"], answer: 0 }
      ],
      clue: "Which word would make sense on top of pancakes? Check that it also looks like money.",
      why: "The answer is honey. Honey is a sweet topping for pancakes, and it looks like money except for the first letter." },
    { id: "SK-FF1d-P4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "A reader made a mistake in one of these sentences. Which sentence does NOT make sense?",
      choices: [
        { text: "Kim wrote her name with a pickle.", correct: true },
        { text: "The baby fell asleep in her crib." },
        { text: "We washed our hands with soap." },
        { text: "The fish swam around its bowl." }
      ],
      clue: "Picture each sentence in your mind. Which one could not really happen?",
      why: "The answer is \"Kim wrote her name with a pickle.\" You cannot write with a pickle. The reader most likely misread pencil, which also starts with p." },
    { id: "SK-FF1d-P5", type: "order", points: 1, dok: 1, passages: [],
      prompt: "Put the steps for fixing a reading mistake in order.",
      steps: [
        "Notice that the sentence does not make sense.",
        "Find the word that does not fit.",
        "Look at all the letters in that word.",
        "Reread the sentence with the right word."
      ],
      clue: "You cannot fix a mistake until you notice it. What do you do last to check your fix?",
      why: "First notice the sentence does not make sense. Then find the word that does not fit, look at all its letters, and reread the sentence with the right word." }
  ],
  test: [
    { id: "SK-FF1d-T1", type: "hottext", points: 2, dok: 2, passages: ["p2"],
      prompt: "Ava read this story aloud. The passage shows the words she said. Which TWO sentences do not make sense? Choose two sentences in the passage.",
      targets: ["p2:1:2", "p2:2:1", "p2:3:2", "p2:4:1", "p2:4:3", "p2:5:1"],
      answer: ["p2:1:2", "p2:4:1"], pick: 2,
      clue: "Read each sentence and ask: Does that make sense? Picture what is happening in the garden.",
      why: "The answers are \"Each student got a small squirrel of dirt.\" and \"One day, a big crown landed on the fence.\" A squirrel is not a piece of dirt, and a crown cannot land on a fence." },
    { id: "SK-FF1d-T2", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Leo misread one word in this sentence. Which word did the sentence most likely say?",
      stem: "Leo read: \"The firefighters sprayed the fire with a long horse.\"",
      choices: [
        { text: "hose", correct: true },
        { text: "house" },
        { text: "horn" },
        { text: "hoop" }
      ],
      clue: "Picture what is happening in the sentence. Find a word that makes sense and looks like the word Leo read.",
      why: "The answer is hose. Firefighters spray water through a long hose. Hose looks like horse without the r." },
    { id: "SK-FF1d-T3", type: "dropdown", points: 1, dok: 2, passages: [],
      prompt: "Mia misread one word in this sentence. Choose the word that makes sense.",
      stem: "Mia read: \"We rode our bikes down the hill as fast as we cold.\"",
      text: "The word that makes sense in place of cold is {0}.",
      slots: [
        { options: ["could", "call", "coat"], answer: 0 }
      ],
      clue: "Say the end of the sentence with each word: as fast as we ___. Which one sounds right and makes sense?",
      why: "The answer is could. \"As fast as we could\" means as fast as we were able to go. Could and cold share the letters c, o, l and d, so they are easy to mix up." },
    { id: "SK-FF1d-T4", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "A reader made a mistake in one of these sentences. Which sentence does NOT make sense?",
      choices: [
        { text: "Ella fed the coat a carrot.", correct: true },
        { text: "Dad cut the bread with a knife." },
        { text: "We sat by the fire to get warm." },
        { text: "The cows ate grass in the field." }
      ],
      clue: "Picture each sentence. Which one could not really happen?",
      why: "The answer is \"Ella fed the coat a carrot.\" A coat cannot eat. The reader most likely misread goat, which looks like coat." },
    { id: "SK-FF1d-T5", type: "mc", points: 1, dok: 2, passages: [],
      prompt: "Owen read this sentence aloud. Which word did he most likely misread?",
      stem: "Owen read: \"The kitten drank milk from a little fish.\"",
      choices: [
        { text: "fish", correct: true },
        { text: "kitten" },
        { text: "milk" },
        { text: "little" }
      ],
      clue: "Picture the sentence. Find the word that does not fit, then check its letters.",
      why: "The answer is fish. A kitten drinks milk from a dish, not a fish. Dish and fish look alike, so Owen should look at the first letter and reread." }
  ]
});

/* Lessons: 3.T.T.2 Expository techniques. Schema: docs/SPEC.md §8. */
PP.addLesson({
  code: "3.T.T.2.a",
  title: "Main idea and key details",
  clues: {
    words: ["for example", "such as", "also", "in addition", "has", "looks like"],
    ask: "What is this mostly about?",
    draw: "A web: the topic in a circle in the middle, with a line out to each detail."
  },
  coach: {
    mixup: "Main idea versus detail. A detail is one fact. The main idea is what all the details have in common. Test it: \"Does every paragraph tell more about this?\"",
    strong: "\"It's mostly about how a camel's body helps it live in the desert: its wide feet, its long eyelashes and going a long time without water.\"",
    notyet: "Picking one fun fact as the main idea: \"Camels have long eyelashes.\" Ask: \"Is the WHOLE thing about that, or just one sentence?\"",
    ido: "Describe your home with three details, then say: \"My main idea is our home is small but cozy. Every detail I gave tells more about that.\"",
    wedo: "Read a short nonfiction paragraph together. Underline each detail and its clue word, like also or for example, and ask, \"What do all these tell us about the topic?\"",
    youdo: "Your child picks a topic they know well, like a favorite animal or game, and gives you the main idea plus three details.",
    everyday: "Play \"Main Idea\": your child describes something with three clues and you guess what it is. Then switch."
  },
  teach: {
    big: "The main idea is what a whole text is mostly about, and the key details are the facts that prove it.",
    points: [
      "The topic is what the text is about in a word or two, like \"sharks.\" The main idea tells something important about the topic, like \"Sharks have lived on Earth for a very long time.\"",
      "Look at the title, the first paragraph and the last paragraph. Authors often put the main idea there on purpose, so readers can find it.",
      "Key details are facts that explain or prove the main idea. Clue words like for example, such as, also, in addition, has and looks like often point to a detail. Ask, \"Does this fact help show the main idea?\"",
      "Some details are fun to read but are not key details. If a fact does not tell more about the main idea, it is not a key detail.",
      "Check your main idea. It should fit the whole text, not just one paragraph. Sometimes no sentence states it. Then list what every sentence tells about and say what they have in common. To compare two paragraphs, find the main idea of each one first.",
      "Authors also design an article to help you find and understand the facts. A heading names a section. A text box sets apart an extra fact. A photo or drawing has a caption that tells what it shows. A diagram uses labels to name the parts. Ask, \"What does this part of the page help me understand?\" To choose a heading, ask what every sentence in the section is about. To choose a caption, ask what the whole picture shows."
    ],
    words: [
      { term: "topic", means: "what a text is about, in a word or two" },
      { term: "main idea", means: "the most important point the author makes about the topic" },
      { term: "key detail", means: "a fact that helps prove or explain the main idea" },
      { term: "diagram", means: "a drawing with labels that name its parts" }
    ],
    examples: [
      {
        label: "Example: main idea and key details",
        lines: ["A camel's body is built for life in the desert. Its wide, flat feet help it walk on soft sand without sinking. Long eyelashes help keep blowing sand out of its eyes. A camel can also go a long time without drinking water."],
        note: "Topic: camels. Main idea: a camel's body helps it live in the desert. Key details: wide feet for soft sand, long eyelashes against blowing sand, and going a long time without water. Each detail shows one way the body helps."
      },
      {
        label: "Example: a detail that is not a key detail",
        lines: ["Earthworms help gardens grow. As they tunnel through the dirt, they make spaces where air and water can reach plant roots. Worms also eat bits of dead leaves. What they leave behind makes the soil richer. Earthworms do not have any eyes."],
        note: "Main idea: earthworms help gardens grow. Tunnels for air and water and richer soil are key details, because they show how worms help. Having no eyes is a fun fact, but it does not show how worms help a garden, so it is not a key detail."
      }
    ],
    tip: "On the test, a main idea question may ask what a text is \"mostly about.\" A second part may ask which detail supports it. Pick a detail that proves the main idea, not just any true fact from the text. You may also be asked how a heading, caption or diagram helps the reader."
  },
  learn: [
    {
      show: ["Penguins cannot fly, but they are excellent swimmers. Their wings are shaped like flat flippers, and they use them to push through the water. Their smooth bodies slide easily through the waves. Their webbed feet help them steer."],
      ask: "What is the main idea, and what are two key details?",
      steps: [
        "Find the topic. Every sentence is about penguins.",
        "Ask what the author keeps saying about penguins. Most sentences tell how they move in the water.",
        "Find facts that prove it. The flipper wings push them, and their smooth bodies slide through the waves."
      ],
      answer: "The main idea is that penguins are excellent swimmers. Two key details are that their flipper wings push them through the water and their smooth bodies slide easily."
    },
    {
      show: ["Heading: Built for the Desert", "A camel's body is built for life in the desert. Its wide, flat feet help it walk on soft sand without sinking. Long eyelashes help keep blowing sand out of its eyes.", "Text box: Did You Know? A camel's hump stores fat, not water. Its body can use the fat when food is hard to find."],
      figure: { src: "assets/figures/tt2a-camel.svg", label: "Figure 1", caption: "Body parts that help a camel live in the desert",
        alt: "Diagram of a camel standing on sand. Labels point to its hump, its long eyelashes, and its wide, flat feet." },
      ask: "How do the heading, the diagram and the text box help the reader?",
      steps: [
        "Read the heading. It names what the section is about: how a camel is built for the desert.",
        "Read the caption under Figure 1. It tells what the whole diagram shows. Then follow each label's line. The feet and eyelashes labels point to the same key details the paragraph tells about, so now I can see them.",
        "Read the text box. It sets apart an extra fact about the hump. It is interesting, but the paragraph does not need it to make its point."
      ],
      answer: "The heading names the section. The caption tells what the diagram shows, and its labels let me see the key details from the paragraph. The text box adds an extra fact."
    },
    {
      show: ["A spider makes silk inside its body. Some spiders spin sticky webs to catch insects. Others use silk to wrap up their eggs and keep them safe. Baby spiders may even let out a long silk thread and float away on the wind."],
      ask: "No single sentence tells the main idea. What is it?",
      steps: [
        "List what each sentence is about: catching insects, wrapping eggs, floating on the wind.",
        "Find what all of them have in common. Each one is a way spiders use silk.",
        "Say the main idea in one sentence that covers every detail."
      ],
      answer: "Spiders use their silk in many different ways."
    }
  ],
  parent: "When you read a sign, a recipe card or a short news story together, ask, \"What is this mostly about?\" Then ask your child to point to two facts that prove it.",
  passages: [
    { id: "p1", title: "Teamwork in a Beehive", genre: "Informational text",
      paragraphs: [
        ["A honeybee hive can be home to thousands of bees.", "Inside, the bees are always busy.", "Each bee has a job, and by working together, the bees keep the whole hive alive."],
        ["Every hive has one queen.", "She is bigger than the other bees.", "Her job is to lay eggs, and she can lay hundreds of them in one day."],
        ["Most of the bees in a hive are worker bees.", "Worker bees are all female, and they do almost all of the work.", "Young workers stay inside the hive.", "They clean it, feed the baby bees, and build little wax rooms called cells."],
        ["Older workers fly outside to look for flowers.", "The workers gather a sweet liquid called nectar and a yellow powder called pollen.", "Back at the hive, the bees turn the nectar into honey.", "They store the honey in the wax cells so the hive has food in winter.", "A honeybee has five eyes."],
        ["Some workers guard the door of the hive.", "They keep out bees from other hives.", "On hot days, other workers stand near the door and fan their wings to cool the hive down."],
        ["No bee could keep a hive going alone.", "Together, the queen and the workers make the hive a busy, healthy home."]
      ],
      figures: [
        { after: 4, src: "assets/figures/tt2a-honeycomb.svg", label: "Figure 1", caption: "Wax cells in a honeycomb",
          alt: "Diagram of wax cells in a honeycomb. Each cell has six sides. Labels point to a cell with an egg, a cell full of honey and a cell with pollen." }
      ] },
    { id: "p2", title: "The Armored Digger", genre: "Informational text",
      paragraphs: [
        ["In Georgia, you might see an armadillo in a field or by a road.", "It is about the size of a house cat.", "An armadillo's body is made for digging and for staying safe."],
        ["An armadillo has short, strong legs with sharp claws.", "It uses its claws to dig in the dirt for beetles, ants, and worms.", "Its nose is good at smelling food in the ground.", "Then it grabs the bugs with its long, sticky tongue."],
        ["An armadillo also has a hard shell made of bony plates.", "The shell covers its back, its sides, and the top of its head.", "It keeps the armadillo safe from thorny bushes and from some animals that want to eat it.", "Only three-banded armadillos can roll up into a ball.", "They do not live in Georgia."],
        ["When an armadillo is scared, it may jump straight up into the air.", "This can surprise an enemy and give the armadillo time to run away.", "It hurries to its burrow, a hole it has dug in the ground."],
        ["A mother armadillo usually has four babies at a time.", "All four babies look exactly alike."],
        ["Strong claws, a good nose, and a tough shell all help the armadillo find food and stay safe."]
      ],
      figures: [
        { after: 3, src: "assets/figures/tt2a-armadillo.svg", label: "Figure 1", caption: "The parts of an armadillo",
          alt: "Diagram of an armadillo seen from the side. Labels point to its long nose, its sharp claws, the bony plates of its shell, and the bands across the middle of its shell. The bands label says: bands that let the shell bend." }
      ] },
    /* PP-004 form B (testB) passage, used only by testB. Needs independent review. */
    { id: "p3", title: "Inside a Tree Trunk", genre: "Informational text",
      paragraphs: [
        ["A tree trunk may look like one solid piece of wood.", "But if you could look inside, you would find several layers.", "Each layer has its own job, and together the layers keep the tree alive and growing."],
        ["The outside layer is the bark.", "Bark is rough and tough, like a suit of armor.", "It keeps out insects and germs that could make the tree sick.", "It also keeps the wood inside from drying out."],
        ["Just under the bark is a thin layer called the inner bark.", "A tree's leaves use sunlight to make food.", "The inner bark carries this food from the leaves down to the trunk and the roots."],
        ["The next layer is the sapwood.", "It is full of tiny tubes, like a bundle of drinking straws.", "These tubes carry water from the roots all the way up to the leaves."],
        ["The heartwood is in the very center of the trunk.", "It is old sapwood that no longer carries water.", "Heartwood is hard and strong.", "It works like a backbone to help hold the tree up.", "Some trees grow so old that their trunks are wider than a car."],
        ["A tree needs every one of its layers.", "Working together, they help the tree stay healthy and grow a little bigger each year."]
      ],
      figures: [
        { after: 5, src: "assets/figures/tt2a-b-tree-trunk.svg", label: "Figure 1", caption: "A slice of a tree trunk",
          alt: "Diagram of a slice cut across a tree trunk. Labels name the layers from the outside in: bark, inner bark, sapwood, and heartwood in the center. Thin rings circle the center. A note says: Each ring = 1 year. Count the rings to find the tree's age." }
      ] },
    /* B2 (expansion 2026-10-22, author b2a): p4 and p5 are used only by core sets 2 and 3.
       Never used by test or testB. NEEDS INDEPENDENT REVIEW. */
    { id: "p4", title: "Ready in a Flash", genre: "Informational text",
      paragraphs: [
        ["A fire station is a busy building.", "Firefighters may spend a whole day and night there.", "Every part of the station is planned so they can get to a fire fast."],
        ["## The Engine Bay"],
        ["The fire trucks wait in a big room called the engine bay.", "Its wide doors open right onto the street.", "Each firefighter's boots, pants and coat hang on a rack beside the truck.", "The pants are already tucked into the boots.", "A firefighter can step in, pull them up and be dressed in less than a minute."],
        ["## Living Upstairs"],
        ["Upstairs, there is a kitchen and a room full of beds.", "Firefighters cook meals and take turns washing dishes.", "When an alarm rings at night, bright lights flash on.", "In some stations, the firefighters slide down a shiny pole, because a pole is faster than the stairs."],
        ["## Did You Know?"],
        ["Box: Long ago, horses pulled fire wagons through the streets.", "The first fire hoses were made of leather."],
        ["From the pole to the boots beside the truck, a fire station is built to save time.", "When someone needs help, every second counts."]
      ],
      figures: [
        { after: 5, src: "assets/figures/tt2-c-fire-station.svg", label: "Figure 1", caption: "Inside a fire station",
          alt: "Diagram of a fire station cut open so you can see both floors. On the top floor, labels name the bunk room and the kitchen. A pole goes from the bunk room down through a hole in the floor to the bottom floor. On the bottom floor, the bottom of the pole is right next to a rack labeled gear rack, and the gear rack is right next to the fire truck. The front of the truck faces an opening labeled big doors, and the street is outside the doors." }
      ] },
    { id: "p5", title: "The Vine That Grew and Grew", genre: "Informational text",
      paragraphs: [
        ["Drive along a country road in Georgia in summer, and you may see trees covered in leaves from top to bottom.", "Those leaves may not belong to the trees.", "They may belong to a vine called kudzu."],
        ["## A Plan to Help"],
        ["Kudzu first came to the United States from Japan more than 100 years ago.", "In the 1930s, heavy rains washed away the soil on many Southern farms.", "Kudzu's roots grip the dirt, so farmers were paid to plant it to hold the soil in place."],
        ["## A Plan Gone Wrong"],
        ["Kudzu liked the hot, wet Southern summers a little too much.", "In summer, a kudzu vine can grow about a foot in one day.", "It climbs over trees, fences and even old barns.", "The thick leaves block the sunlight, so the trees underneath can die."],
        ["## Did You Know?"],
        ["Box: Kudzu has purple flowers that smell like grape candy.", "Some people use the flowers to make jelly."],
        ["## Keeping Kudzu Back"],
        ["Today, people work hard to stop kudzu from spreading.", "They cut the vines and dig up the roots.", "Kudzu was planted to help the land, but now people must work to protect the land from it."]
      ] },
    /* SIM-2 (expansion 2026-10-23): p6-p11 are used only by the similar bank (S07, S09, S11, S12, S13, S15).
       Never used by core, Together, test or testB. NEEDS INDEPENDENT REVIEW. */
    { id: "p6", title: "Big Eyes in the Dark", genre: "Informational text",
      paragraphs: [
        ["A tarsier is a tiny animal that lives in the forests of Asia.", "It is small enough to sit in your hand.", "Its body is made for hunting bugs at night."],
        ["## Eyes for the Dark"],
        ["A tarsier has huge, round eyes.", "Each eye is about as big as its whole brain.", "Big eyes let in lots of light, so it can see well when the forest is dark."],
        ["## A Head That Turns"],
        ["A tarsier cannot move its eyes.", "Instead, it can turn its head almost all the way around.", "That way, it can look behind itself for a moth or a cricket."],
        ["## Legs for Leaping"],
        ["Its back legs are long and strong.", "A tarsier can leap from tree to tree and grab a bug in the air."],
        ["From its big eyes to its strong legs, a tarsier is built to catch food at night.", "Tarsiers sleep in the day, often holding on to a tree trunk."]
      ] },
    { id: "p7", title: "A Home in the Treetops", genre: "Informational text",
      paragraphs: [
        ["A bald eagle builds its nest high in a tall tree.", "The nest is made of big sticks.", "It can be as wide as a bed."],
        ["## Building the Nest"],
        ["Both parents carry sticks in their feet.", "They lay soft grass and moss on top.", "The eggs and chicks stay warm and safe inside."],
        ["## A Nest That Grows"],
        ["Each year, the eagles come back to the same nest.", "They add more sticks.", "After many years, the nest can weigh more than a thousand pounds."],
        ["## Did You Know?"],
        ["Box: A young bald eagle has brown feathers.", "Its head does not turn white until it is about five years old."],
        ["A bald eagle's nest is a safe home that grows bigger every year."]
      ] },
    { id: "p8", title: "A Hippo's Hot Day", genre: "Informational text",
      paragraphs: [
        ["A hippo lives in Africa, where the sun is very hot.", "Its skin is thin and dries out fast.", "So a hippo plans its whole day around staying cool and finding food."],
        ["## Cooling Off in the River"],
        ["All day long, hippos rest in rivers and lakes.", "Only the tops of their heads poke out.", "Their skin also makes a red, oily goo that works like sunscreen."],
        ["## Eating at Night"],
        ["When the sun goes down, the air cools off.", "Then hippos climb out of the water and walk to grassy fields.", "A hippo can eat a huge pile of grass in one night."],
        ["## Did You Know?"],
        ["Box: A hippo cannot really swim.", "It walks or bounces along the bottom of the river."],
        ["Resting in the water by day and eating by night keeps a hippo safe from the hot sun."]
      ] },
    { id: "p9", title: "Nature's Cleanup Crew", genre: "Informational text",
      paragraphs: [
        ["A turkey vulture is a big, dark bird with a bare red head.", "You may see one circling high over a field or a road."],
        ["## Finding Food"],
        ["Vultures eat animals that have already died.", "A turkey vulture can smell a dead animal from far away.", "It glides on the wind for hours, sniffing the air as it goes."],
        ["## Built for the Job"],
        ["A vulture's head has no feathers.", "That helps it stay clean when it eats.", "Its stomach is very strong, so germs that would make other animals sick do not hurt it."],
        ["## Did You Know?"],
        ["Box: A group of vultures resting in a tree is called a committee."],
        ["Vultures may not be pretty.", "Still, they do an important job.", "By eating dead animals, vultures help keep fields and roads clean and stop germs from spreading."]
      ] },
    { id: "p10", title: "Life on the Sea Floor", genre: "Informational text",
      paragraphs: [
        ["A lobster lives on the rocky floor of the ocean.", "It hides in cracks during the day and comes out at night.", "Its body is well built for finding food in the dark."],
        ["## Claws for Every Job"],
        ["A lobster has two big claws, and they are not the same.", "One claw is thick and strong for crushing clam shells.", "The other is thin and sharp for tearing up soft food."],
        ["## Smelling the Way"],
        ["A lobster cannot see well.", "Instead, it uses tiny hairs on its legs and feelers to smell the water.", "It can find a fish or a crab even in the dark."],
        ["## Did You Know?"],
        ["Box: Most lobsters are greenish brown.", "But about one lobster in two million is bright blue!"],
        ["With two kinds of claws and a strong sense of smell, a lobster is ready to find food on the sea floor."]
      ] },
    { id: "p11", title: "The Bird That Sniffs", genre: "Informational text",
      paragraphs: [
        ["A kiwi is a bird that lives only in New Zealand.", "It is about the size of a chicken, and it cannot fly.", "Its feathers are soft and brown and look a little like hair."],
        ["A kiwi finds its food by smell.", "It has nostrils at the very tip of its long beak.", "At night, it pokes its beak into the dirt and sniffs for worms and bugs.", "When it smells one, it pulls it out of the ground.", "A kiwi lays a very big egg for its size."],
        ["In the daytime, a kiwi rests in a hole or a hollow log.", "It comes out after dark, when it is safer to hunt."],
        ["Today, people in New Zealand help kiwis.", "They keep cats and rats away from the places where kiwis live."]
      ] }
  ],
  practice: [
    { id: "SK-TT2a-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "What is the main idea of this article?",
      choices: [
        { text: "Honeybees in a hive each have a job, and they work together.", correct: true },
        { text: "The queen bee can lay hundreds of eggs in just one day." },
        { text: "Worker bees turn the nectar from flowers into sweet honey." },
        { text: "Some worker bees guard the hive from bees of other hives." }
      ],
      clue: "The main idea fits the whole article, not just one paragraph. Read the first and last paragraphs, then ask which choice covers every part.",
      why: "The answer is \"Honeybees in a hive each have a job, and they work together.\" Paragraphs 2 to 5 each tell about a different job, and the first and last paragraphs tie the jobs together. The other choices are true, but each one is a detail from only one paragraph." },
    { id: "SK-TT2a-P2", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Choose the sentence that best states the main idea of the whole article.",
      targets: ["p1:1:1", "p1:1:2", "p1:1:3", "p1:2:1", "p1:3:1"],
      answer: ["p1:1:3"], pick: 1,
      clue: "Look for a sentence that is big enough to cover the queen, the young workers, the older workers and the guards.",
      why: "The answer is \"Each bee has a job, and by working together, the bees keep the whole hive alive.\" It covers every paragraph. The sentences about the queen and about worker bees each tell about only one part of the hive." },
    { id: "SK-TT2a-P3", type: "ms", points: 2, dok: 2, passages: ["p1"], pick: 2,
      prompt: "Which two details best support the idea that worker bees do many different jobs? Choose two answers.",
      choices: [
        { text: "Young workers clean the hive and feed the baby bees.", correct: true },
        { text: "Older workers gather nectar and pollen from flowers.", correct: true },
        { text: "The queen is bigger than the other bees in the hive." },
        { text: "The queen lays hundreds of eggs in one day." },
        { text: "A hive can be home to thousands of bees." }
      ],
      clue: "The idea is about the jobs of worker bees. Cross out any detail about the queen, or any detail that does not name a job.",
      why: "The answers are \"Young workers clean the hive and feed the baby bees\" and \"Older workers gather nectar and pollen from flowers.\" Both name jobs that workers do. The queen details are not about workers, and thousands of bees is not a job." },
    { id: "SK-TT2a-P6", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Look at Figure 1. How does the diagram help the reader understand paragraphs 3 and 4?",
      choices: [
        { text: "It shows the six-sided shape of the wax cells that the workers build.", correct: true },
        { text: "It shows how older worker bees find their way to the flowers." },
        { text: "It shows how the guard bees keep other bees out of the hive." },
        { text: "It shows how much bigger the queen is than the worker bees." }
      ],
      clue: "Read the caption. Then find the paragraph that talks about the same thing.",
      why: "The answer is \"It shows the six-sided shape of the wax cells that the workers build.\" Paragraph 3 says young workers build little wax rooms called cells, but the words do not say what the cells look like. Figure 1 lets you see them. The diagram does not show flowers, guards or the queen." },
    { id: "SK-TT2a-P4", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "The main idea is that honeybees each have a job and work together. Decide whether each detail is a key detail or not a key detail.",
      cols: ["Key detail", "Not a key detail"],
      rows: [
        { text: "Workers fan their wings to cool the hive.", answer: 0 },
        { text: "Young workers build wax cells.", answer: 0 },
        { text: "A honeybee has five eyes.", answer: 1 },
        { text: "Guards keep out bees from other hives.", answer: 0 }
      ],
      clue: "For each detail, ask, \"Does this show a bee doing a job for the hive?\"",
      why: "Fanning wings, building wax cells and guarding the door are all jobs, so they are key details. \"A honeybee has five eyes\" is a fun fact, but it does not show a job or teamwork, so it is not a key detail." },
    { id: "SK-TT2a-P5", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is the main idea of paragraph 4?",
        choices: [
          { text: "Older worker bees gather food from flowers and make honey for the hive.", correct: true },
          { text: "Honeybees need all five of their eyes to find flowers to visit." },
          { text: "Honeybees eat all of the honey in the hive during the summer." },
          { text: "Young worker bees stay inside the hive and feed the baby bees." }
        ] },
      partB: { prompt: "Which two sentences from the article best support the answer to Part A?", pick: 2,
        choices: [
          { text: "\"The workers gather a sweet liquid called nectar and a yellow powder called pollen.\"", correct: true },
          { text: "\"Back at the hive, the bees turn the nectar into honey.\"", correct: true },
          { text: "\"A honeybee has five eyes.\"" },
          { text: "\"Young workers stay inside the hive.\"" },
          { text: "\"Every hive has one queen.\"" }
        ] },
      clue: "Read only paragraph 4. Ask what most of its sentences are about. Then find the sentences that prove it.",
      why: "Part A: Older worker bees gather food from flowers and make honey for the hive. Part B: \"The workers gather a sweet liquid called nectar and a yellow powder called pollen\" and \"Back at the hive, the bees turn the nectar into honey.\" Paragraph 4 does say a honeybee has five eyes, but that one fact is not about gathering food or making honey, so it does not support the main idea. Paragraph 4 also says the honey is saved for winter, not eaten in summer. Young workers are in paragraph 3." },
    { id: "SK-TT2a-P7", type: "dropdown", points: 2, dok: 2, passages: ["p1"],
      prompt: "Look at Figure 1 again. Choose the words that best complete the sentences.",
      text: "The caption tells {0}. The labels tell {1}.",
      slots: [
        { options: ["what the whole diagram shows", "who wrote the article", "the main idea of paragraph 2"], answer: 0 },
        { options: ["how many bees live in one hive", "when the queen lays her eggs", "what is inside some of the cells"], answer: 2 }
      ],
      clue: "Read the words under Figure 1. Then read each word that has a line pointing into the picture. Ask what job each kind of words does.",
      why: "The answers are \"what the whole diagram shows\" and \"what is inside some of the cells.\" The caption, \"Wax cells in a honeycomb,\" names the whole picture. The labels \"cell with an egg,\" \"honey\" and \"pollen\" each point to what is inside some of the cells." },
  ],
  /* ---------- B2 core (expansion 2026-10-22, author b2a; pattern: 3.T.T.1.c) ----------
     Refs: P4 and P7 (set 1), P3 (set 2) and P5 (set 3). Practice Together is therefore P1, P2 and P6.
     P3 and P5 are kept out of set 1 because each gives the other away, and P5's why would pre-answer P4.
     New ids are numbered by their place in the fifteen. Author log:
     docs/expansion-2026-10-22/batches/B2-b2a-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TT2a-P4" },
      { ref: "SK-TT2a-P7" },
      { id: "SK-TT2a-C03", type: "dropdown", points: 1, dok: 2, std: ["3.T.T.2.a"], passages: [],
        stem: ["On Saturday mornings, the Birch Street animal shelter is full of helpers. Two teenagers walk the dogs around the block. A grandfather fills every water bowl and sweeps the cat room. A girl sits on the floor and reads a story to a shy puppy. Before lunch, a family takes home a gray cat."],
        prompt: "No sentence in this paragraph states the main idea. Choose the answer that best tells what the paragraph is mostly about.",
        text: "The paragraph is mostly about {0}.",
        slots: [
          { options: ["helpers caring for the animals at a busy shelter", "a girl who reads a story to a shy puppy", "a family that takes home a gray cat", "animals waiting for new homes at the shelter"], answer: 0 }
        ],
        clue: "When no sentence states the main idea, list what each sentence tells about. Then find what all of them have in common.",
        hints: [
          "When no sentence states the main idea, list what each sentence tells about. Then find what all of them have in common.",
          "Read the paragraph one sentence at a time. Who is in each sentence, and what are they doing?",
          "The girl and the puppy are in only one sentence, so they are a detail, not the main idea. Test the choices that are left against every sentence."
        ],
        how: [
          "The sentences tell about teenagers walking dogs, a grandfather filling bowls and sweeping, a girl reading to a puppy and a family taking home a cat.",
          "Most of them are helpers doing jobs for the animals at the shelter.",
          "The answer is \"helpers caring for the animals at a busy shelter.\" The girl and the family taking home a cat are each only one detail. Animals are in many sentences, but the paragraph is about what the helpers do for them, not about the animals waiting."
        ],
        misconception: "A common mix-up is choosing one detail as the main idea. The main idea covers every sentence.",
        why: "The answer is \"helpers caring for the animals at a busy shelter.\" The first sentence says the shelter is full of helpers, and the others show them walking dogs, filling bowls, sweeping and reading. The girl with the puppy and the family with the cat are each one detail, and the animals waiting for homes leaves out the helpers, who are in every sentence." },
      { id: "SK-TT2a-C04", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.a"], passages: ["p1"],
        prompt: "The author wants to add a heading above paragraph 2. Which heading fits paragraph 2 best?",
        choices: [
          { text: "The Hive's Queen", correct: true },
          { text: "Laying Eggs All Day" },
          { text: "Thousands of Bees" },
          { text: "Working Together" }
        ],
        clue: "A heading names what a whole section is about. Read every sentence in the section, then ask what they all tell about.",
        hints: [
          "A heading names what a whole section is about. Read every sentence in the section, then ask what they all tell about.",
          "Reread paragraph 2.",
          "\"Working Together\" fits the whole article, so it is too big for one paragraph. Test the headings that are left against all three sentences."
        ],
        how: [
          "Paragraph 2 has three sentences: every hive has one queen, she is bigger than the other bees, and her job is to lay eggs.",
          "Every one of those sentences is about the queen.",
          "The answer is \"The Hive's Queen.\" Laying eggs fits only one sentence, thousands of bees is in paragraph 1, and working together fits the whole article."
        ],
        misconception: "A common mix-up is choosing a heading that names one detail. A heading should fit the whole section.",
        why: "The answer is \"The Hive's Queen.\" All three sentences in paragraph 2 tell about the queen. \"Laying Eggs All Day\" fits only one sentence, thousands of bees is in paragraph 1, and \"Working Together\" fits the whole article, not one paragraph." },
      { id: "SK-TT2a-C05", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.a"], passages: [],
        stem: ["Grandpa's Tomato Tips", "Spread a layer of mulch around each plant to keep the soil damp. Pick off any brown, spotted leaves near the bottom. Tie each plant to a stake so its heavy stems do not break. Tomatoes come in red, yellow and even purple."],
        prompt: "Grandpa's main idea is how to help tomato plants grow. Why is \"Tomatoes come in red, yellow and even purple\" NOT a key detail?",
        choices: [
          { text: "It is true, but it does not tell how to help a tomato plant grow.", correct: true },
          { text: "It is not about tomatoes or tomato plants at all." },
          { text: "It is not true, so it cannot be one of the key details." },
          { text: "It tells a step that a gardener must do before planting." }
        ],
        clue: "To decide whether a detail is a key detail, test it against the main idea: does it help prove it?",
        hints: [
          "To decide whether a detail is a key detail, test it against the main idea: does it help prove it?",
          "Read all four tips one at a time.",
          "The color sentence does tell about tomatoes, so \"It is not about tomatoes or tomato plants at all\" does not fit. Test the other reasons against Grandpa's main idea."
        ],
        how: [
          "The main idea is how to help tomato plants grow.",
          "The first three sentences each tell a gardener what to do: spread mulch, pick off spotted leaves and tie the plant to a stake.",
          "The last sentence tells what colors tomatoes can be. That is true, but it does not help a plant grow.",
          "The answer is \"It is true, but it does not tell how to help a tomato plant grow.\""
        ],
        misconception: "A common mix-up is thinking a detail is wrong or false when it is only off the main idea. A fact can be true and still not be a key detail.",
        why: "The answer is \"It is true, but it does not tell how to help a tomato plant grow.\" The other sentences each tell a gardener what to do, but the colors of tomatoes do not help a plant grow. The sentence is about tomatoes, nothing says it is untrue, and it does not tell a step to do." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT2a-C06", type: "hottext", points: 2, dok: 2, std: ["3.T.T.2.a"], passages: ["p4"],
        prompt: "The author states the main idea of this article in two places. Choose the TWO sentences that state it.",
        targets: ["p4:1:1", "p4:1:3", "p4:3:2", "p4:5:4", "p4:8:1", "p4:8:2"],
        answer: ["p4:1:3", "p4:8:1"], pick: 2,
        clue: "The main idea is what the whole article is about. A sentence that states it should fit every section, not just one.",
        hints: [
          "The main idea is what the whole article is about. A sentence that states it should fit every section, not just one.",
          "Read the headings first so you know what each section tells. Then look for sentences big enough to cover all of the sections. Choose two.",
          "\"When someone needs help, every second counts\" is a strong ending, but it tells why speed matters, not what the station is like. Test each other sentence: does it cover the engine bay and the upstairs?"
        ],
        how: [
          "The sections tell about the engine bay and the rooms upstairs.",
          "Two sentences cover both: \"Every part of the station is planned so they can get to a fire fast\" in the first paragraph, and \"From the pole to the boots beside the truck, a fire station is built to save time\" in the last paragraph.",
          "The other sentences tell about only one part, like the doors or the pole, or they give a reason why speed matters."
        ],
        misconception: "A common mix-up is choosing a sentence about one part, like the pole. A main idea sentence covers the whole article.",
        why: "The answers are \"Every part of the station is planned so they can get to a fire fast\" and \"From the pole to the boots beside the truck, a fire station is built to save time.\" Both cover every section. The sentences about the doors and the pole each tell one part, the busy-building sentence does not say how the station is set up, and \"every second counts\" tells why speed matters." },
      { ref: "SK-TT2a-P3" },
      { id: "SK-TT2a-C08", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.a"], passages: ["p4"],
        prompt: "Why does the author put the facts about horses and leather hoses in a text box instead of in one of the sections?",
        choices: [
          { text: "They are fun facts, but the article's point does not need them.", correct: true },
          { text: "They are the most important facts in the whole article." },
          { text: "They tell what happens when an alarm rings late at night." },
          { text: "They explain how firefighters get dressed in under a minute." }
        ],
        clue: "A text box sets a fact apart from the rest of the page. Ask whether the article would still work without that fact.",
        hints: [
          "A text box sets a fact apart from the rest of the page. Ask whether the article would still work without that fact.",
          "Read the text box. Then read the headings and notice what each section is about.",
          "The text box says nothing about alarms, so it is not telling what happens at night. Decide which of the other reasons fits what you noticed."
        ],
        how: [
          "The text box tells that horses once pulled fire wagons and that the first fire hoses were made of leather.",
          "The last paragraph sums up the article, and it does not mention horses or hoses. The article makes its point without them.",
          "The answer is \"They are fun facts, but the article's point does not need them.\"",
          "The box facts are not the most important ones, and they say nothing about alarms or getting dressed."
        ],
        misconception: "A common mix-up is thinking a fact set apart in a box must be the most important one. A text box often holds an extra fact.",
        why: "The answer is \"They are fun facts, but the article's point does not need them.\" The last paragraph sums up the article without horses or hoses. The box facts are not the most important ones, and they tell nothing about alarms or getting dressed." },
      { id: "SK-TT2a-C09", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.a"], passages: ["p4"],
        prompt: "Look at Figure 1. Why is the bottom of the pole placed where it is?",
        choices: [
          { text: "so firefighters land right next to their gear and the truck", correct: true },
          { text: "so firefighters land right next to the kitchen" },
          { text: "so firefighters land right next to the big doors" },
          { text: "so the pole stays far away from the fire truck" }
        ],
        clue: "A diagram shows where things are. Use it together with the words in the article.",
        hints: [
          "A diagram shows where things are. Use it together with the words in the article.",
          "In Figure 1, follow the pole down from the top floor. Read every label on the bottom floor.",
          "The kitchen is on the top floor in Figure 1, so the pole cannot drop anyone next to it. Check the other choices against the labels on the bottom floor."
        ],
        how: [
          "In Figure 1, the pole goes from the bunk room down through the floor to the bottom floor.",
          "It ends right beside the gear rack, and the gear rack is beside the fire truck.",
          "The article says each firefighter's gear hangs on a rack beside the truck, ready to put on.",
          "The answer is \"so firefighters land right next to their gear and the truck.\" The kitchen is upstairs, the big doors are on the far side of the truck, and the pole is close to the truck, not far away."
        ],
        misconception: "A common mix-up is using only the words or only the picture. Use the labels and the article together.",
        why: "The answer is \"so firefighters land right next to their gear and the truck.\" Figure 1 shows the pole ending beside the gear rack, which is beside the truck, and the article says the gear waits there. The kitchen is upstairs, the big doors are on the far side of the truck, and the pole is close to the truck." },
      { id: "SK-TT2a-C10", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.2.a"], passages: ["p4"],
        stem: ["New sentence: Each fire truck is parked facing the big doors, so it can drive straight out."],
        prompt: "The author wants to add the new sentence to the article. Choose the best answer for each blank.",
        text: "The new sentence belongs in the section {0}. It is {1}.",
        slots: [
          { options: ["\"The Engine Bay\"", "\"Living Upstairs\"", "\"Did You Know?\""], answer: 0 },
          { options: ["a key detail, because it shows how the trucks can leave quickly", "not a key detail, because it is only a fun fact", "not a key detail, because the article already tells about the doors"], answer: 0 }
        ],
        clue: "A heading names what its section is about. A key detail helps prove the main idea, and a text box holds extra facts.",
        hints: [
          "A heading names what its section is about. A key detail helps prove the main idea, and a text box holds extra facts.",
          "Read each heading. Then reread the new sentence and ask what part of the station it is about.",
          "The new sentence says nothing about beds or meals, so it does not belong in \"Living Upstairs.\" For the second blank, think about what parking a truck this way does when a call comes."
        ],
        how: [
          "The new sentence is about the trucks. The trucks wait in the engine bay, so the sentence belongs in that section.",
          "A truck that faces the doors can drive straight out when a call comes, so it helps the trucks leave quickly.",
          "That fits the article's big point, so it is a key detail, not an extra fact for the text box.",
          "The answers are \"The Engine Bay\" and \"a key detail, because it shows how the trucks can leave quickly.\""
        ],
        misconception: "A common mix-up is putting any new fact in the text box. A fact that helps prove the main idea belongs in a section.",
        why: "The answers are \"The Engine Bay\" and \"a key detail, because it shows how the trucks can leave quickly.\" The trucks wait in the engine bay, and parking them facing the doors lets them drive straight out. That fits the article's point, so it is a key detail, not a fun fact. The article mentions the doors, but not that the trucks face them." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT2a-C11", type: "hottext", points: 1, dok: 2, std: ["3.T.T.2.a"], passages: ["p5"],
        prompt: "Which sentence tells what the whole article is mostly about? Choose the sentence in the passage.",
        targets: ["p5:1:1", "p5:1:3", "p5:3:3", "p5:5:1", "p5:9:1", "p5:9:3"],
        answer: ["p5:9:3"], pick: 1,
        clue: "The main idea fits the whole article, not just one section. Authors often state it near the beginning or at the end.",
        hints: [
          "The main idea fits the whole article, not just one section. Authors often state it near the beginning or at the end.",
          "Read the headings to see what each section is about. The sentence you choose must fit every section.",
          "\"Today, people work hard to stop kudzu from spreading\" fits only the last section, so it is too small. Test the other sentences the same way: does each one fit every heading?"
        ],
        how: [
          "The headings show three parts: why kudzu was planted, how the plan went wrong and how people keep kudzu back.",
          "The last sentence of the article covers all three parts.",
          "The answer is \"Kudzu was planted to help the land, but now people must work to protect the land from it.\"",
          "The other sentences each fit only one part, like the farmers planting it or people working to stop it."
        ],
        misconception: "A common mix-up is choosing a sentence that fits one section, like the last one. The main idea covers the whole article.",
        why: "The answer is \"Kudzu was planted to help the land, but now people must work to protect the land from it.\" It covers why kudzu was planted, how it became a problem and what people do now. The other sentences each fit only the opening or one section." },
      { id: "SK-TT2a-C12", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.a"], passages: ["p5"],
        prompt: "A student says the main idea of \"The Vine That Grew and Grew\" is \"Kudzu flowers can be made into jelly.\" Why is the student wrong?",
        choices: [
          { text: "The jelly fact is only in the text box, and no section is about it.", correct: true },
          { text: "The article never tells anything about kudzu flowers." },
          { text: "Jelly is made from fruit, so the fact in the article must be wrong." },
          { text: "The jelly fact is in the last part of the article, so it is only a detail." }
        ],
        clue: "The main idea is what the whole article is about. A fact that shows up in only one spot is a detail.",
        hints: [
          "The main idea is what the whole article is about. A fact that shows up in only one spot is a detail.",
          "Find every place in the article that tells about kudzu flowers.",
          "The article does tell about kudzu flowers, so the student is not wrong about that. Decide which of the other reasons matches what you found."
        ],
        how: [
          "The flowers and the jelly are told about only in the text box under \"Did You Know?\"",
          "The sections tell why kudzu was planted, how it spread and how people fight it. None of them is about jelly.",
          "The answer is \"The jelly fact is only in the text box, and no section is about it.\"",
          "The article does tell about the flowers, it says people really make jelly from them, and the text box is not the last part of the article: \"Keeping Kudzu Back\" comes after it."
        ],
        misconception: "A common mix-up is taking a fun fact as the main idea because it is interesting. Ask whether the whole article is about it.",
        why: "The answer is \"The jelly fact is only in the text box, and no section is about it.\" The jelly appears only in the text box. The article does tell about the flowers, it says people use them for jelly, and the text box comes before the last section, not at the end." },
      { id: "SK-TT2a-C13", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.a"], passages: [],
        stem: ["Paragraph A: The week before the spring concert, Mr. Bell's class gets busy. Students practice their songs every morning. They fold paper programs and write each singer's name inside. On Thursday, they help set up rows of chairs in the gym.", "Paragraph B: On the night of the concert, families fill the gym. The class sings four songs, and two students play the drums. At the end, everyone claps and cheers. Afterward, the singers share cookies with their families."],
        prompt: "How are the main ideas of Paragraph A and Paragraph B different?",
        choices: [
          { text: "Paragraph A tells how the class gets ready, and Paragraph B tells what happens on the big night.", correct: true },
          { text: "Paragraph A is about folding programs, and Paragraph B is about sharing cookies." },
          { text: "Paragraph A tells what happens on the big night, and Paragraph B tells how the class gets ready." },
          { text: "Both paragraphs tell how the class gets ready for the concert." }
        ],
        clue: "To find a paragraph's main idea, ask what all of its sentences have in common. Do that for each paragraph, then compare.",
        hints: [
          "To find a paragraph's main idea, ask what all of its sentences have in common. Do that for each paragraph, then compare.",
          "List what the students do in Paragraph A. Then list what happens in Paragraph B.",
          "Folding programs and sharing cookies are each only one sentence, so they are details, not main ideas. Test the choices that are left against every sentence in each paragraph."
        ],
        how: [
          "Paragraph A: practicing songs, folding programs and setting up chairs all happen the week before the concert. Its main idea is getting ready.",
          "Paragraph B: families arriving, singing, clapping and sharing cookies all happen on the night of the concert.",
          "The answer is \"Paragraph A tells how the class gets ready, and Paragraph B tells what happens on the big night.\"",
          "Programs and cookies are single details, one choice has the paragraphs backward, and Paragraph B is not about getting ready."
        ],
        misconception: "A common mix-up is naming one detail from each paragraph instead of what all the sentences share.",
        why: "The answer is \"Paragraph A tells how the class gets ready, and Paragraph B tells what happens on the big night.\" Every sentence in Paragraph A tells about getting ready the week before, and every sentence in Paragraph B tells about the concert night. Programs and cookies are single details, the backward choice mixes up the paragraphs, and only Paragraph A is about getting ready." },
      { id: "SK-TT2a-C14", type: "dropdown", points: 1, dok: 2, std: ["3.T.T.2.a"], passages: [],
        stem: ["Kayla is writing a report about how a bike works. She drew Figure 1 for her report, but she forgot to write a caption under it."],
        figure: { src: "assets/figures/tt2-c-bike.svg", label: "Figure 1",
          alt: "Drawing of a bike seen from the side, with no rider on it. Five labels with lines point to the seat, the handlebars, a brake lever, a pedal and the chain." },
        prompt: "Choose the best caption for Kayla to write under Figure 1.",
        text: "Caption: {0}",
        slots: [
          { options: ["The main parts of a bike", "A bike's chain and pedal", "Kayla riding her bike to school"], answer: 0 }
        ],
        clue: "A caption should match what the picture shows and what the report is about. Look at the picture before you choose.",
        hints: [
          "A caption should match what the picture shows and what the report is about. Look at the picture before you choose.",
          "Look at the whole picture, and read each label in Figure 1.",
          "No one is riding the bike in Figure 1, so a caption about Kayla riding does not fit. Check the two choices that are left against every label."
        ],
        how: [
          "Figure 1 shows one bike with no rider. Its labels name the seat, the handlebars, a brake lever, a pedal and the chain.",
          "A caption should tell what the whole picture shows, and Kayla's report is about how a bike works.",
          "The answer is \"The main parts of a bike.\" The chain and the pedal are only two of the five labeled parts, and there is no rider, so it is not Kayla riding to school."
        ],
        misconception: "A common mix-up is choosing a caption that names only one part of the picture instead of what the whole picture shows.",
        why: "The answer is \"The main parts of a bike.\" Figure 1 shows one bike with labels on its seat, handlebars, brake lever, pedal and chain. A caption about the chain and pedal names only two parts, and no one is riding the bike." },
      { ref: "SK-TT2a-P5" }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text. */
  similar: [
    { id: "SK-TT2a-S01", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.a"], passages: [],
      like: ["SK-TT2a-C04"],
      stem: ["Every morning before the first stop, Ms. Greene walks all the way around her school bus. She looks at each tire. She tests the lights, the horn and the stop sign arm. Then she makes sure the back door opens in case of an emergency."],
      prompt: "Which heading best fits this paragraph?",
      choices: [
        { text: "Safety Checks Before the Ride", correct: true },
        { text: "The Stop Sign Arm" },
        { text: "Riding the Bus Home" },
        { text: "Fixing a Flat Tire" }
      ],
      clue: "A heading names what a whole section is about. It has to fit every sentence.",
      hints: [
        "A heading names what a whole section is about. It has to fit every sentence.",
        "List what Ms. Greene looks at in each sentence, and notice when she does it.",
        "\"The Stop Sign Arm\" is only one of the things she checks, so it is too small. Test the other headings against every sentence."
      ],
      how: [
        "Ms. Greene checks the tires, the lights, the horn, the stop sign arm and the back door.",
        "She does all of this before the first stop, to make sure the bus is safe.",
        "The answer is \"Safety Checks Before the Ride.\" The stop sign arm is one detail, and she looks at the tires but does not fix one, and nothing tells about riding home."
      ],
      why: "The answer is \"Safety Checks Before the Ride.\" Every sentence tells something Ms. Greene checks before the first stop. The stop sign arm is only one detail, and she only looks at the tires, and the paragraph does not tell about riding home." },
    { id: "SK-TT2a-S02", type: "ms", points: 2, dok: 2, std: ["3.T.T.2.a"], passages: [], pick: 2,
      like: ["SK-TT2a-P3", "SK-TT2a-P4"],
      stem: ["A duck's feathers are built to keep it dry. Near its tail, a duck has a gland that makes oil. The duck uses its beak to spread the oil over its feathers, so water rolls right off. Its outer feathers also overlap like shingles on a roof. Ducks have webbed feet for paddling, and many ducks quack loudly."],
      prompt: "Which TWO details best support the main idea of this paragraph?",
      choices: [
        { text: "The duck spreads oil over its feathers so water rolls off.", correct: true },
        { text: "Its outer feathers overlap like shingles on a roof.", correct: true },
        { text: "Ducks have webbed feet for paddling." },
        { text: "Many ducks quack loudly." },
        { text: "A duck uses its beak to find food." }
      ],
      clue: "First say the main idea. Then keep only the details that help prove it.",
      hints: [
        "First say the main idea. Then keep only the details that help prove it.",
        "The first sentence tells the main idea. Test each detail against it. Choose two.",
        "Webbed feet help a duck paddle, but they do not keep it dry. Test the other details the same way."
      ],
      how: [
        "The main idea: a duck's feathers are built to keep it dry.",
        "The oil makes water roll off, and the overlapping feathers work like a roof.",
        "The answers are \"The duck spreads oil over its feathers so water rolls off\" and \"Its outer feathers overlap like shingles on a roof.\"",
        "Webbed feet and quacking are true but are not about staying dry, and the paragraph never says a duck finds food with its beak."
      ],
      why: "The answers are \"The duck spreads oil over its feathers so water rolls off\" and \"Its outer feathers overlap like shingles on a roof.\" Both show how the feathers keep a duck dry. Webbed feet and quacking are not about staying dry, and finding food is not in the paragraph." },
    { id: "SK-TT2a-S03", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.a"], passages: [],
      like: ["SK-TT2a-C13"],
      stem: ["Paragraph A: In March, neighbors at the Cedar Avenue garden rake the beds and mix in old leaves to feed the soil. They build a low fence to keep rabbits out. Then they plant rows of seeds.", "Paragraph B: By August, the beds are full of tomatoes, peppers and okra. Neighbors fill baskets every morning. On the last Saturday of summer, they share the food at a big picnic."],
      prompt: "How are the main ideas of Paragraph A and Paragraph B different?",
      choices: [
        { text: "Paragraph A tells how the garden gets ready, and Paragraph B tells what the garden gives later.", correct: true },
        { text: "Paragraph A is about a fence, and Paragraph B is about a picnic." },
        { text: "Paragraph A tells what the garden gives later, and Paragraph B tells how it gets ready." },
        { text: "Both paragraphs tell how the neighbors get the garden ready." }
      ],
      clue: "Find what all the sentences in each paragraph have in common. Then compare the two paragraphs.",
      hints: [
        "Find what all the sentences in each paragraph have in common. Then compare the two paragraphs.",
        "List what the neighbors do in Paragraph A. Then list what happens in Paragraph B.",
        "The fence and the picnic are each only one sentence, so they are details, not main ideas. Test the choices that are left against every sentence."
      ],
      how: [
        "Paragraph A: raking, feeding the soil, building a fence and planting all happen in March to get the garden ready.",
        "Paragraph B: the full beds, the baskets and the picnic all happen later, when the garden gives food.",
        "The answer is \"Paragraph A tells how the garden gets ready, and Paragraph B tells what the garden gives later.\""
      ],
      why: "The answer is \"Paragraph A tells how the garden gets ready, and Paragraph B tells what the garden gives later.\" Every sentence in Paragraph A is about getting ready, and every sentence in Paragraph B is about what grows. The fence and the picnic are single details, one choice is backward, and Paragraph B is not about getting ready." },
    /* SIM-2 (expansion 2026-10-23): one extra question per core item that had none in a full sitting,
       so "Try a similar question" shows on every core item. Each like names one core item only, because
       the engine uses an extra question once. Log: docs/expansion-2026-10-22/batches/SIM-2-author-log.md.
       NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TT2a-S04", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.2.a"], passages: [],
      like: ["SK-TT2a-P7"],
      stem: ["Mia is making a poster about hermit crabs. A hermit crab does not grow a shell of its own. It moves into an empty snail shell, and it finds a bigger one as it grows.", "Mia's drawing shows one hermit crab peeking out of an empty snail shell. Four lines point from words to the crab's two claws, its eyes on stalks, its walking legs and the borrowed shell. She still needs words to go under the drawing."],
      prompt: "Choose the words that best complete the sentences about Mia's drawing.",
      text: "The best caption for Mia's drawing is {0}. The labels on the drawing {1}.",
      slots: [
        { options: ["\"The parts of a hermit crab\"", "\"A hermit crab's two claws\"", "\"Mia feeding her pet crab\""], answer: 0 },
        { options: ["name the parts that the lines point to", "tell where hermit crabs live", "give the title of the poster"], answer: 0 }
      ],
      clue: "Captions and labels are both words on a picture, but they do different jobs. Think about where each kind of words goes.",
      hints: [
        "Captions and labels are both words on a picture, but they do different jobs. Think about where each kind of words goes.",
        "Picture the drawing: one crab in a shell, with four lines that each end at a word. Ask what the whole drawing is about.",
        "No one is feeding the crab in the drawing, so that caption does not fit. Check the two captions that are left against every line in the drawing."
      ],
      how: [
        "A caption goes under a picture and tells what the whole picture shows. The drawing shows a hermit crab and four of its parts.",
        "So the caption is \"The parts of a hermit crab.\" The claws are only one of the four parts, and no one is feeding the crab.",
        "Each label sits at the end of a line and names the part the line points to. The answers are \"The parts of a hermit crab\" and \"name the parts that the lines point to.\""
      ],
      misconception: "A common mix-up is choosing a caption that names one labeled part. A caption tells about the whole picture.",
      why: "The answers are \"The parts of a hermit crab\" and \"name the parts that the lines point to.\" The drawing shows a crab and four of its parts, so the caption must cover all of them, not just the claws. Labels name the parts at the ends of the lines. They do not tell where crabs live or give the poster's title." },
    { id: "SK-TT2a-S05", type: "dropdown", points: 1, dok: 2, std: ["3.T.T.2.a"], passages: [],
      like: ["SK-TT2a-C03"],
      stem: ["It is six in the morning. The doors of the Maple Street ice rink are still locked. Inside, one worker drives a big machine across the ice. It makes the ice smooth and shiny. Another worker sharpens the blades on the skates that people rent. A third worker sets out orange cones for the first skating lesson. Near the front door, a man turns on the lights and the heaters in the snack room."],
      prompt: "No sentence in this paragraph states the main idea. Choose the answer that best tells what the paragraph is mostly about.",
      text: "The paragraph is mostly about {0}.",
      slots: [
        { options: ["workers getting the ice rink ready before it opens", "a machine that makes the ice smooth and shiny", "a skating lesson for kids early in the morning", "people renting skates at the ice rink"], answer: 0 }
      ],
      clue: "When no sentence states the main idea, list what each sentence tells about. Then find what all of them have in common.",
      hints: [
        "When no sentence states the main idea, list what each sentence tells about. Then find what all of them have in common.",
        "Read the paragraph one sentence at a time. Who is in each sentence, and what are they doing?",
        "The machine is in only one sentence, so it is a detail, not the main idea. Test each choice that is left against every sentence."
      ],
      how: [
        "The sentences tell about a worker smoothing the ice, a worker sharpening skates, a worker setting out cones and a man turning on lights and heaters.",
        "The doors are still locked, so the rink is not open yet. Every sentence shows someone getting it ready.",
        "The answer is \"workers getting the ice rink ready before it opens.\" The machine and the lesson are single details, and no one rents skates yet."
      ],
      misconception: "A common mix-up is choosing one detail, like the machine, as the main idea. The main idea covers every sentence.",
      why: "The answer is \"workers getting the ice rink ready before it opens.\" The doors are locked, and every sentence shows a worker doing a job to get ready. The machine and the cones for the lesson are single details, and the skates are being sharpened, not rented." },
    { id: "SK-TT2a-S06", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.a"], passages: [],
      like: ["SK-TT2a-C05"],
      stem: ["Coach Ana's Free-Throw Tips", "Stand with your toes just behind the line. Bend your knees a little before you shoot. Keep your eyes on the front of the rim, not on the ball. Push the ball up with your fingertips, and let your hand follow through like you are reaching into a cookie jar. Coach Ana played basketball on her college team."],
      prompt: "Coach Ana's main idea is how to shoot a good free throw. Why is \"Coach Ana played basketball on her college team\" NOT a key detail?",
      choices: [
        { text: "It does not tell a player anything to do when shooting.", correct: true },
        { text: "It is not a fact, so it cannot be a key detail." },
        { text: "It is the last sentence, and key details never come last." },
        { text: "It tells about shooting, but only for very tall players." }
      ],
      clue: "To decide whether a detail is a key detail, test it against the main idea: does it help prove or explain it?",
      hints: [
        "To decide whether a detail is a key detail, test it against the main idea: does it help prove or explain it?",
        "Read each sentence one at a time. Ask what each one tells a shooter to do.",
        "Key details can come anywhere, even at the end, so where the sentence sits is not the reason. Test the other reasons against Coach Ana's main idea."
      ],
      how: [
        "The main idea is how to shoot a good free throw.",
        "The other sentences each tell a player what to do: where to stand, bending the knees, where to look and how to push the ball.",
        "The college sentence tells about Coach Ana, not about shooting. The answer is \"It does not tell a player anything to do when shooting.\"",
        "It is a fact, key details can come last, and it says nothing about tall players."
      ],
      misconception: "A common mix-up is thinking a detail is false when it is only off the main idea. A true fact can still not be a key detail.",
      why: "The answer is \"It does not tell a player anything to do when shooting.\" Every other sentence gives a step for a free throw. The college sentence is a true fact about the coach, and it is not about tall players. Key details can come at the end, too." },
    { id: "SK-TT2a-S07", type: "hottext", points: 2, dok: 2, std: ["3.T.T.2.a"], passages: ["p6"],
      like: ["SK-TT2a-C06"],
      prompt: "Two sentences in this article tell what the whole article is mostly about. Choose those TWO sentences.",
      targets: ["p6:1:1", "p6:1:3", "p6:3:3", "p6:5:3", "p6:8:1", "p6:8:2"],
      answer: ["p6:1:3", "p6:8:1"], pick: 2,
      clue: "The main idea is what the whole article is about. A sentence that states it should fit every section, not just one.",
      hints: [
        "The main idea is what the whole article is about. A sentence that states it should fit every section, not just one.",
        "Read the headings first so you know what each section tells. Then look at the start and the end for sentences big enough to cover all of them.",
        "\"A tarsier is a tiny animal that lives in the forests of Asia\" names the topic, but it says nothing about eyes, a head or legs. Test each other sentence: does it cover all three sections?"
      ],
      how: [
        "The sections tell about the eyes, the head that turns and the legs for leaping.",
        "Two sentences cover all three: \"Its body is made for hunting bugs at night\" in the first paragraph, and \"From its big eyes to its strong legs, a tarsier is built to catch food at night\" in the last paragraph.",
        "The other sentences tell about one section only, name the topic, or tell when tarsiers sleep."
      ],
      misconception: "A common mix-up is choosing the very first sentence because it comes first. A sentence that only names the topic is not the main idea.",
      why: "The answers are \"Its body is made for hunting bugs at night.\" and \"From its big eyes to its strong legs, a tarsier is built to catch food at night.\" Both fit every section. The first sentence only names the topic, the sentences about seeing and looking behind fit one section each, and sleeping in the day is an extra fact." },
    { id: "SK-TT2a-S08", type: "ms", points: 2, dok: 2, std: ["3.T.T.2.a"], passages: [], pick: 2,
      like: ["SK-TT2a-P3"],
      stem: ["Gorillas live in groups in the forests of Africa. A baby gorilla needs its mother for a long time. At first, she carries it on her chest wherever she goes. When it is older, it rides on her back. Each night, she bends branches and leaves into a soft nest for the two of them. Gorillas eat mostly leaves, stems and fruit. The biggest males are called silverbacks because of the gray hair on their backs."],
      prompt: "Which TWO details best support the idea that a mother gorilla does many jobs to care for her baby? Choose two answers.",
      choices: [
        { text: "She builds a soft nest of leaves for the two of them each night.", correct: true },
        { text: "She carries the baby on her chest and later on her back.", correct: true },
        { text: "The biggest males have gray hair on their backs." },
        { text: "Gorillas eat mostly leaves, stems and fruit." },
        { text: "Gorillas live in groups in the forests of Africa." }
      ],
      clue: "The idea is about the jobs a mother does for her baby. Keep only the details that show one of those jobs.",
      hints: [
        "The idea is about the jobs a mother does for her baby. Keep only the details that show one of those jobs.",
        "Read each sentence in the box and ask: who is doing something here, and is it for the baby? Choose two.",
        "Leaves, stems and fruit are what all gorillas eat, so that detail is not a job a mother does for her baby. Test the other details the same way."
      ],
      how: [
        "The idea is that a mother gorilla does many jobs to care for her baby.",
        "Two details show her doing a job for the baby: carrying it, and building a nest each night.",
        "The answers are \"She builds a soft nest of leaves for the two of them each night.\" and \"She carries the baby on her chest and later on her back.\"",
        "Silverbacks, food and where gorillas live are true, but none of them is a job the mother does for her baby."
      ],
      misconception: "A common mix-up is choosing any true fact from the text. A supporting detail must help prove the idea.",
      why: "The answers are \"She builds a soft nest of leaves for the two of them each night.\" and \"She carries the baby on her chest and later on her back.\" Both are jobs the mother does for her baby. The silverbacks, the food and the forests are true facts, but they are not about caring for a baby." },
    { id: "SK-TT2a-S09", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.a"], passages: ["p7"],
      like: ["SK-TT2a-C08"],
      prompt: "The author wants to add one more fact to the \"Did You Know?\" box. Which fact fits the box best?",
      choices: [
        { text: "An eagle's eyes are about as big as a person's eyes.", correct: true },
        { text: "The eagles lay soft grass and moss on top of the sticks." },
        { text: "Each year, the eagles add more sticks to the same nest." },
        { text: "A bald eagle builds its nest high in a tall tree." }
      ],
      clue: "A text box holds an extra fact that the sections do not need. Ask which choice is not already part of the article.",
      hints: [
        "A text box holds an extra fact that the sections do not need. Ask which choice is not already part of the article.",
        "Read the sections again. For each choice, ask whether the article already tells it.",
        "The soft grass and moss are already told in \"Building the Nest,\" so that fact has a home. Check the other three the same way."
      ],
      how: [
        "The box in the article holds a fun fact about the color of a young eagle's head. The sections do not need it.",
        "Three choices are already told in the article: the grass and moss, the sticks added each year, and the nest in a tall tree.",
        "The fact about the eyes is new, and no section needs it. It is a fun extra fact.",
        "The answer is \"An eagle's eyes are about as big as a person's eyes.\""
      ],
      misconception: "A common mix-up is choosing a fact the sections already tell. The box holds an extra fact.",
      why: "The answer is \"An eagle's eyes are about as big as a person's eyes.\" It is a new, fun fact that no section needs. The grass and moss, the sticks added each year and the nest in a tall tree are already told in the article." },
    { id: "SK-TT2a-S10", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.a"], passages: [],
      like: ["SK-TT2a-C09"],
      stem: ["Nia and her grandpa built a tree house in the big tree behind their home. Nia likes to eat lunch up there, but it is hard to climb a ladder while holding a full plate.", "Figure 1 shows the tree house from the side. A ladder leans on the trunk and goes up to a trap door in the floor. On the other side of the tree house is a window. A rope runs from a small wheel above the window down to a bucket. The bucket hangs just over a little picnic table on the ground."],
      prompt: "Look at Figure 1. Why does the bucket hang right above the picnic table?",
      choices: [
        { text: "so food can go from the table up to the window without the ladder", correct: true },
        { text: "so Nia can sit in the bucket and ride up to the window" },
        { text: "so the ladder can lean against the bucket and stay still" },
        { text: "so the bucket stays far away from the tree house window" }
      ],
      clue: "A diagram shows where things are. Use it together with the words.",
      hints: [
        "A diagram shows where things are. Use it together with the words.",
        "Follow the rope in Figure 1 from the top to the bottom. Then reread the trouble Nia has at lunch.",
        "The ladder is on the other side of the tree house, so it cannot lean on the bucket. Check the other choices against the drawing and the words."
      ],
      how: [
        "The words say it is hard to climb the ladder with a full plate.",
        "In Figure 1, the rope goes from above the window down to a bucket that hangs over the picnic table.",
        "A plate set in the bucket at the table can be pulled straight up to the window. The answer is \"so food can go from the table up to the window without the ladder.\"",
        "A small bucket is not a seat, the ladder is on the other side, and the rope joins the bucket to the window."
      ],
      misconception: "A common mix-up is using only the picture or only the words. Use them together.",
      why: "The answer is \"so food can go from the table up to the window without the ladder.\" The words tell the trouble, and the drawing shows the bucket hanging from above the window to the table. The bucket is not a seat, the ladder is on the far side, and the rope ties the bucket to the window." },
    { id: "SK-TT2a-S11", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.2.a"], passages: ["p8"],
      like: ["SK-TT2a-C10"],
      stem: ["New sentence: A hippo's eyes and nose sit high on its head, so it can see and breathe while it rests in the water."],
      prompt: "The author wants to add the new sentence to the article. Choose the best answer for each blank.",
      text: "The new sentence belongs in the section {0}. It is {1}.",
      slots: [
        { options: ["\"Cooling Off in the River\"", "\"Eating at Night\"", "\"Did You Know?\""], answer: 0 },
        { options: ["a key detail, because it shows how a hippo can stay in the water all day", "not a key detail, because it is only a fun fact", "not a key detail, because the article already says hippos rest in rivers"], answer: 0 }
      ],
      clue: "A heading names what its section is about. A key detail helps prove the main idea, and a text box holds extra facts.",
      hints: [
        "A heading names what its section is about. A key detail helps prove the main idea, and a text box holds extra facts.",
        "Read each heading. Then reread the new sentence and ask when the hippo is doing what it tells about.",
        "The new sentence says nothing about grass or the night, so it does not belong in \"Eating at Night.\" For the second blank, think about what eyes and a nose up high let a hippo do."
      ],
      how: [
        "The new sentence is about a hippo resting in the water. That is what \"Cooling Off in the River\" tells about.",
        "With its eyes and nose up high, a hippo can stay almost all the way under the water and still see and breathe.",
        "That helps it stay cool all day, which is the article's point, so it is a key detail, not an extra fact for the box.",
        "The answers are \"Cooling Off in the River\" and \"a key detail, because it shows how a hippo can stay in the water all day.\""
      ],
      misconception: "A common mix-up is putting every new fact in the text box. A fact that helps prove the main idea belongs in a section.",
      why: "The answers are \"Cooling Off in the River\" and \"a key detail, because it shows how a hippo can stay in the water all day.\" The sentence tells how a hippo rests in the water, and that helps it stay cool, which is the article's point. The article says hippos rest in rivers, but not how they see and breathe there." },
    { id: "SK-TT2a-S12", type: "hottext", points: 1, dok: 2, std: ["3.T.T.2.a"], passages: ["p9"],
      like: ["SK-TT2a-C11"],
      prompt: "Which sentence tells what the whole article is mostly about? Choose the sentence in the passage.",
      targets: ["p9:1:1", "p9:3:2", "p9:5:1", "p9:7:1", "p9:8:2", "p9:8:3"],
      answer: ["p9:8:3"], pick: 1,
      clue: "The main idea fits the whole article, not just one section. Authors often state it near the beginning or at the end.",
      hints: [
        "The main idea fits the whole article, not just one section. Authors often state it near the beginning or at the end.",
        "Read the headings to see what each section is about. The sentence you choose must fit every section.",
        "\"A turkey vulture is a big, dark bird with a bare red head\" tells what a vulture looks like, not what the article is mostly about. Test the other sentences the same way: does each one fit every heading?"
      ],
      how: [
        "The sections tell how vultures find dead animals to eat and how their bodies are built for that job.",
        "The last sentence of the article covers both: \"By eating dead animals, vultures help keep fields and roads clean and stop germs from spreading.\"",
        "The answer is that sentence. \"Still, they do an important job\" points to it but does not say what the job is, and the other sentences each fit one section or the box."
      ],
      misconception: "A common mix-up is choosing a sentence that only says something is important. The main idea says what the important point is.",
      why: "The answer is \"By eating dead animals, vultures help keep fields and roads clean and stop germs from spreading.\" It covers finding food and the body built for the job. The other sentences describe the bird, fit one section, sit in the box, or say the job is important without saying what it is." },
    { id: "SK-TT2a-S13", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.a"], passages: ["p10"],
      like: ["SK-TT2a-C12"],
      prompt: "A student says the main idea of \"Life on the Sea Floor\" is \"A lobster has one thick claw and one thin claw.\" Why is the student wrong?",
      choices: [
        { text: "It is one detail from one section, not what the whole article is about.", correct: true },
        { text: "The article never tells anything about a lobster's claws." },
        { text: "The claw fact is only in the text box, and no section is about it." },
        { text: "A lobster's claws are really the same size, so the fact is false." }
      ],
      clue: "The main idea is what every part of the article tells about. A fact from only one section does not fit every part.",
      hints: [
        "The main idea is what every part of the article tells about. A fact from only one section does not fit every part.",
        "Find every place the article tells about claws. Then notice what else the article tells about.",
        "The text box is about the color of lobsters, not about claws. Decide which of the other reasons matches what you found."
      ],
      how: [
        "The claws are told about in one section, \"Claws for Every Job.\"",
        "The other sections tell how a lobster smells the water, and the first and last paragraphs say a lobster is built to find food. The claws are only one part.",
        "The answer is \"It is one detail from one section, not what the whole article is about.\"",
        "The article does tell about the claws and says they are not the same, and the text box is about color."
      ],
      misconception: "A common mix-up is taking a true fact from one section as the main idea. Ask whether the whole article is about it.",
      why: "The answer is \"It is one detail from one section, not what the whole article is about.\" The claws are only one section. The article also tells how a lobster smells its food, it does say the claws are not the same, and the text box is about color." },
    { id: "SK-TT2a-S14", type: "dropdown", points: 1, dok: 2, std: ["3.T.T.2.a"], passages: [],
      like: ["SK-TT2a-C14"],
      stem: ["Lena is writing a report about how a drum set works. She drew a drum set. Nobody is sitting at it. Five lines point to words. The words name a big bass drum, a foot pedal that hits it, a snare drum, a shiny cymbal and two drumsticks. Lena will put the picture next to her first page. But she forgot to write a caption under it."],
      prompt: "Choose the best caption for Lena to write under her picture.",
      text: "Caption: {0}",
      slots: [
        { options: ["The parts of a drum set", "A cymbal and a snare drum", "Lena playing drums in the band"], answer: 0 }
      ],
      clue: "A caption should match what the picture shows and what the report is about. Picture the drawing before you choose.",
      hints: [
        "A caption should match what the picture shows and what the report is about. Picture the drawing before you choose.",
        "Count the labels in Lena's picture, and notice who is in it.",
        "Nobody is sitting at the drums, so a caption about Lena playing does not fit. Check the two captions that are left against every label."
      ],
      how: [
        "The picture shows a whole drum set with nobody at it. Its five labels name the bass drum, the pedal, the snare drum, the cymbal and the sticks.",
        "A caption tells what the whole picture shows, and the report is about how a drum set works.",
        "The answer is \"The parts of a drum set.\" A cymbal and a snare drum are only two of the five parts, and Lena is not in the picture."
      ],
      misconception: "A common mix-up is choosing a caption that names only some of the labeled parts.",
      why: "The answer is \"The parts of a drum set.\" The picture labels five parts of one drum set. A caption about a cymbal and a snare drum names only two of them, and nobody is playing in the picture." },
    { id: "SK-TT2a-S15", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.2.a"], passages: ["p11"],
      like: ["SK-TT2a-P5"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is the main idea of paragraph 2?",
        choices: [
          { text: "A kiwi uses its sense of smell to find worms and bugs in the dirt.", correct: true },
          { text: "A kiwi lays a very big egg for a bird of its size." },
          { text: "A kiwi rests in a hole or a hollow log in the daytime." },
          { text: "People in New Zealand keep cats and rats away from kiwis." }
        ] },
      partB: { prompt: "Which two sentences from the article best support the answer to Part A?", pick: 2,
        choices: [
          { text: "\"It has nostrils at the very tip of its long beak.\"", correct: true },
          { text: "\"At night, it pokes its beak into the dirt and sniffs for worms and bugs.\"", correct: true },
          { text: "\"A kiwi lays a very big egg for its size.\"" },
          { text: "\"It is about the size of a chicken, and it cannot fly.\"" },
          { text: "\"It comes out after dark, when it is safer to hunt.\"" }
        ] },
      clue: "The main idea of a paragraph is what most of its sentences are about. Key details prove it.",
      hints: [
        "The main idea of a paragraph is what most of its sentences are about. Key details prove it.",
        "Reread paragraph 2 one sentence at a time. Say in a few words what each sentence tells.",
        "Resting in a hole and the help from people are told in other paragraphs, not paragraph 2. For Part B, choose sentences that prove your Part A answer."
      ],
      how: [
        "Paragraph 2 begins, \"A kiwi finds its food by smell.\" Most of its sentences tell how: nostrils at the tip of the beak, sniffing in the dirt and pulling out what it smells.",
        "Part A: A kiwi uses its sense of smell to find worms and bugs in the dirt.",
        "Part B: \"It has nostrils at the very tip of its long beak.\" and \"At night, it pokes its beak into the dirt and sniffs for worms and bugs.\"",
        "The big egg is in paragraph 2, but it is one fact that is not about finding food. The other sentences are from other paragraphs."
      ],
      misconception: "A common mix-up is choosing a surprising fact from the paragraph, like the big egg, as its main idea.",
      why: "Part A: A kiwi uses its sense of smell to find worms and bugs in the dirt. Part B: \"It has nostrils at the very tip of its long beak.\" and \"At night, it pokes its beak into the dirt and sniffs for worms and bugs.\" The big egg is in paragraph 2 but is not about finding food. The other choices come from other paragraphs." }
  ],
  /* Hints and Show me how for the refs (P3, P4, P5, P7) and for Practice Together (P1, P2, P6). */
  addons: {
    "SK-TT2a-P1": {
      hints: [
        "The main idea fits the whole article, not just one paragraph. Read the first and last paragraphs, then ask which choice covers every part.",
        "Paragraphs 2 to 5 each tell about different bees. Find the choice that is big enough to cover all of them.",
        "Guarding the hive is true, but it is only one job in one paragraph, so it is too small. Test the other choices the same way."
      ],
      how: [
        "The first paragraph says each bee has a job, and the last paragraph says no bee could keep the hive going alone.",
        "Paragraphs 2 to 5 each tell about a different kind of bee and its job.",
        "The answer is \"Honeybees in a hive each have a job, and they work together.\"",
        "The other choices are true details, but each comes from only one paragraph."
      ],
      misconception: "A common mix-up is choosing one true fact as the main idea. The main idea covers every paragraph." },
    "SK-TT2a-P2": {
      hints: [
        "The main idea sentence is big enough to cover the whole article.",
        "Look in the first two paragraphs. Ask which sentence could cover the queen, the young workers, the older workers and the guards.",
        "\"A honeybee hive can be home to thousands of bees\" tells how many bees there are, not what they do. Test each other sentence: does it cover every job?"
      ],
      how: [
        "The article tells about the queen in paragraph 2 and about different workers in paragraphs 3 to 5.",
        "The sentence must cover all of them and the idea that they work together.",
        "The answer is \"Each bee has a job, and by working together, the bees keep the whole hive alive.\"",
        "The other sentences tell how many bees there are, that the bees are busy, or about only the queen or only the workers."
      ] },
    "SK-TT2a-P3": {
      hints: [
        "A supporting detail must tell about the idea in the question: jobs that worker bees do.",
        "Reread paragraphs 1 to 4 and notice which bees each detail is about. Choose two.",
        "The queen lays hundreds of eggs, which is a job, but the queen is not a worker bee. Test each detail that is left against the question."
      ],
      how: [
        "The idea is about the jobs of worker bees.",
        "Paragraph 3 says young workers clean the hive and feed the baby bees. Paragraph 4 says older workers gather nectar and pollen.",
        "The answers are \"Young workers clean the hive and feed the baby bees\" and \"Older workers gather nectar and pollen from flowers.\"",
        "The queen details are not about workers, and thousands of bees is not a job."
      ],
      misconception: "A common mix-up is choosing a true detail about the wrong bee. The question asks only about worker bees." },
    "SK-TT2a-P4": {
      hints: [
        "For each detail, ask, \"Does this show a bee doing a job for the hive?\"",
        "Find each detail in the article. Read the sentences around it to see whether it tells about a job.",
        "Fanning wings to cool the hive is a job, so it is a key detail. Work out the other three rows the same way."
      ],
      how: [
        "The main idea is that the bees each have a job and work together.",
        "Fanning wings, building wax cells and guarding the door are each a job, so they are key details.",
        "Having five eyes is a fun fact, but it is not a job, so it is not a key detail."
      ],
      misconception: "A common mix-up is calling every true fact a key detail. A key detail has to help prove the main idea." },
    "SK-TT2a-P5": {
      hints: [
        "Read only paragraph 4. Ask what most of its sentences are about.",
        "Reread paragraph 4 sentence by sentence. Which sentence does not fit with the others? For Part B, choose two.",
        "Young workers are in paragraph 3, not paragraph 4, so that choice cannot be the main idea of paragraph 4. For Part B, the sentences you choose must match your Part A answer."
      ],
      how: [
        "Most of paragraph 4 tells how older workers gather nectar and pollen and turn the nectar into honey for winter.",
        "Part A: Older worker bees gather food from flowers and make honey for the hive.",
        "Part B: \"The workers gather a sweet liquid called nectar and a yellow powder called pollen\" and \"Back at the hive, the bees turn the nectar into honey.\"",
        "\"A honeybee has five eyes\" is in paragraph 4, but it is not about gathering food. The honey is saved for winter, and young workers are in paragraph 3."
      ],
      misconception: "A common mix-up is choosing a sentence only because it is in the right paragraph. It must also support the main idea." },
    "SK-TT2a-P6": {
      hints: [
        "A diagram helps you see something the words tell about. Read the caption first.",
        "The caption says what the diagram shows. Find the paragraphs that tell about the same thing.",
        "Figure 1 has no flowers or guard bees in it, so it cannot show how they work. Test each choice that is left against the labels."
      ],
      how: [
        "The caption says Figure 1 shows wax cells in a honeycomb.",
        "Paragraph 3 says young workers build little wax rooms called cells, but it does not say what they look like. The diagram shows their six sides.",
        "The answer is \"It shows the six-sided shape of the wax cells that the workers build.\"",
        "The diagram shows no flowers, no guards and no queen."
      ] },
    "SK-TT2a-P7": {
      hints: [
        "A caption and a label do different jobs. Ask what each kind of words tells you.",
        "Read the words under Figure 1. Then read each word that has a line pointing into the picture.",
        "Nothing in Figure 1 tells who wrote the article, so the caption does not tell that. For the labels, look at where each line points."
      ],
      how: [
        "The caption, \"Wax cells in a honeycomb,\" names what the whole diagram shows.",
        "The labels \"cell with an egg,\" \"honey\" and \"pollen\" each point to what is inside a cell.",
        "So the caption tells what the whole diagram shows, and the labels tell what is inside some of the cells."
      ],
      misconception: "A common mix-up is mixing up a caption and a label. The caption names the whole picture; a label names one part." }
  },
  test: [
    { id: "SK-TT2a-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What is this article mostly about?",
      choices: [
        { text: "how an armadillo's body helps it find food and stay safe", correct: true },
        { text: "where armadillos can be found in the state of Georgia" },
        { text: "how a mother armadillo takes care of her four babies" },
        { text: "why most armadillos cannot roll up into a tight ball" }
      ],
      clue: "Find the idea that the first and last paragraphs share. Then check that it fits the middle paragraphs too.",
      why: "The answer is \"how an armadillo's body helps it find food and stay safe.\" Paragraph 1 says the body is made for digging and staying safe, and the last paragraph says the same thing. Georgia, the babies and rolling into a ball are each only a small part of the article, not what the whole article is about." },
    { id: "SK-TT2a-T2", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is the main idea of paragraph 4?",
        choices: [
          { text: "An armadillo has quick ways to get away from danger.", correct: true },
          { text: "An armadillo digs in the dirt to find bugs to eat." },
          { text: "An armadillo's hard shell covers its back and head." },
          { text: "An armadillo rolls into a ball to fool its enemies." }
        ] },
      partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
        choices: [
          { text: "\"This can surprise an enemy and give the armadillo time to run away.\"", correct: true },
          { text: "\"It uses its claws to dig in the dirt for beetles, ants, and worms.\"" },
          { text: "\"The shell covers its back, its sides, and the top of its head.\"" },
          { text: "\"Only three-banded armadillos can roll up into a ball.\"" }
        ] },
      clue: "Read paragraph 4 by itself. What do the jump and the burrow have in common? Then find the sentence that proves it.",
      why: "Part A: An armadillo has quick ways to get away from danger. Part B: \"This can surprise an enemy and give the armadillo time to run away.\" Jumping and hurrying to the burrow are both ways to escape. Digging and the shell are in other paragraphs, and the article says the armadillos in Georgia cannot roll into a ball." },
    { id: "SK-TT2a-T3", type: "ms", points: 2, dok: 2, passages: ["p2"], pick: 2,
      prompt: "Which two details support the idea that an armadillo's body helps it find food? Choose two answers.",
      choices: [
        { text: "It has sharp claws for digging in the dirt.", correct: true },
        { text: "Its nose can smell food under the ground.", correct: true },
        { text: "Its shell is made of hard, bony plates." },
        { text: "It may jump straight up when it is scared." },
        { text: "A mother usually has four babies at a time." }
      ],
      clue: "This question is only about finding food. Cross out details about staying safe and details about babies.",
      why: "The answers are \"It has sharp claws for digging in the dirt\" and \"Its nose can smell food under the ground.\" Paragraph 2 says the claws dig for bugs and the nose smells food underground. The shell and the jump help the armadillo stay safe, not find food." },
    { id: "SK-TT2a-T4", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which detail from the article does NOT support the main idea?",
      choices: [
        { text: "A mother armadillo usually has four babies at a time.", correct: true },
        { text: "An armadillo grabs bugs with its long, sticky tongue." },
        { text: "An armadillo's shell covers its back and its sides." },
        { text: "An armadillo hurries to a burrow it has dug." }
      ],
      clue: "First say the main idea to yourself. Then test each detail: does it show how the body helps the armadillo eat or stay safe?",
      why: "The answer is \"A mother armadillo usually has four babies at a time.\" It is an interesting fact, but it does not show how the body helps with food or safety. The tongue helps it eat, and the shell and the burrow are part of how it stays safe." },
    { id: "SK-TT2a-T5", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "The last paragraph says a tough shell helps the armadillo. Choose the sentence that best shows how.",
      targets: ["p2:1:2", "p2:3:1", "p2:3:2", "p2:3:3", "p2:4:1"],
      answer: ["p2:3:3"], pick: 1,
      clue: "Some sentences only describe the shell. Find the one that tells what the shell does for the armadillo.",
      why: "The answer is \"It keeps the armadillo safe from thorny bushes and from some animals that want to eat it.\" It tells what the shell does for the armadillo. The other shell sentences only describe what the shell is made of and what it covers. The jump and the size sentences are not about the shell." },
    { id: "SK-TT2a-T6", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Look at Figure 1. Which fact does the reader learn ONLY from the diagram, not from the paragraphs?",
      choices: [
        { text: "Bands across the middle of the shell let it bend.", correct: true },
        { text: "The shell is made of hard, bony plates." },
        { text: "The shell covers the top of the head." },
        { text: "An armadillo has short, strong legs." }
      ],
      clue: "Read every label in Figure 1. Then check each choice: can you also find it in the paragraphs?",
      why: "The answer is \"Bands across the middle of the shell let it bend.\" Only the label in Figure 1 tells what the bands do. The bony plates, the shell on the head and the short, strong legs are all told about in paragraphs 2 and 3." }
  ],
  /* PP-004 form B of the skill check (formB-info). Same code, points (8) and DOK mix as form A,
     on the new passage p3 and figure tt2a-b-tree-trunk.svg. NEEDS INDEPENDENT REVIEW;
     see docs/audits/work/pp004-formB-formB-info.md. */
  testB: [
    { id: "SK-TT2a-TB1", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Which sentence best tells the main idea of \"Inside a Tree Trunk\"?",
      choices: [
        { text: "A tree trunk has layers, and each one does a job that helps the tree.", correct: true },
        { text: "Bark is rough and tough, and it covers the outside of the trunk." },
        { text: "The inner bark is a thin layer that is just under the bark." },
        { text: "A tree trunk may look like one solid piece of wood." }
      ],
      clue: "The main idea fits the whole article. Read the first and last paragraphs, then ask which choice tells about every layer, not just one.",
      why: "The answer is \"A tree trunk has layers, and each one does a job that helps the tree.\" Paragraph 1 says each layer has its own job, paragraphs 2 to 5 each tell about one layer, and the last paragraph says the tree needs every layer. The bark and inner bark choices tell about only one layer. The solid piece of wood is only how a trunk looks from the outside; the article goes on to show it is not one solid piece." },
    { id: "SK-TT2a-TB2", type: "ebsr", points: 2, dok: 3, passages: ["p3"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is paragraph 5 mostly about?",
        choices: [
          { text: "The center of the trunk is strong and gives the tree support.", correct: true },
          { text: "The wood in the center carries water to the leaves." },
          { text: "The bark protects the soft wood in the center." },
          { text: "The wood in the center is the newest wood in the tree." }
        ] },
      partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
        choices: [
          { text: "\"It works like a backbone to help hold the tree up.\"", correct: true },
          { text: "\"It is old sapwood that no longer carries water.\"" },
          { text: "\"Bark is rough and tough, like a suit of armor.\"" },
          { text: "\"It keeps out insects and germs that could make the tree sick.\"" }
        ] },
      clue: "Read paragraph 5 by itself. Ask what job the center wood does for the tree. Then find the sentence that tells that job.",
      why: "Part A: The center of the trunk is strong and gives the tree support. Part B: \"It works like a backbone to help hold the tree up.\" A backbone supports a body and holds it up, and the heartwood does the same for a tree. Paragraph 5 says this wood is old, hard and strong, and that it no longer carries water, so the water and newest-wood choices are wrong. The sentence about old sapwood is true, but it tells what the heartwood does not do, not the job it does. The bark sentences are from paragraph 2." },
    { id: "SK-TT2a-TB3", type: "ms", points: 2, dok: 2, passages: ["p3"], pick: 2,
      prompt: "Which two details tell how a tree trunk moves food and water through the tree? Choose two answers.",
      choices: [
        { text: "The inner bark carries food down from the leaves.", correct: true },
        { text: "Tiny tubes in the sapwood carry water up from the roots.", correct: true },
        { text: "The bark keeps insects and germs out of the tree." },
        { text: "The bark stops the wood inside from drying out." },
        { text: "The leaves use sunlight to make the tree's food." }
      ],
      clue: "The question is about carrying things through the trunk. Cross out details about keeping things out, and details about making food.",
      why: "The answers are \"The inner bark carries food down from the leaves\" and \"Tiny tubes in the sapwood carry water up from the roots.\" Paragraphs 3 and 4 tell how these layers carry food and water. The two bark details are about protecting the tree. The leaves make the food, but they do not move it through the trunk." },
    { id: "SK-TT2a-TB4", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "The author wants to add one more key detail to paragraph 2. Which sentence would fit best?",
      choices: [
        { text: "Thick bark can help keep a tree safe from a small fire.", correct: true },
        { text: "Bark can be gray, brown, red or even white." },
        { text: "Some children like to make crayon rubbings of bark." },
        { text: "The bark of some trees peels off in thin, papery strips." }
      ],
      clue: "Ask what job paragraph 2 says the bark does. Pick the sentence that tells one more part of that same job.",
      why: "The answer is \"Thick bark can help keep a tree safe from a small fire.\" Paragraph 2 tells how bark protects a tree, like armor, and this sentence gives one more way it protects. The colors of bark, crayon rubbings and peeling strips may be interesting, but none of them tells how bark helps the tree." },
    { id: "SK-TT2a-TB5", type: "hottext", points: 1, dok: 2, passages: ["p3"],
      prompt: "One sentence in the article is interesting, but it is NOT a key detail. Choose that sentence.",
      targets: ["p3:2:4", "p3:3:3", "p3:4:2", "p3:5:3", "p3:5:5"],
      answer: ["p3:5:5"], pick: 1,
      clue: "Say the main idea to yourself first. Then test each sentence: does it help prove the main idea?",
      why: "The answer is \"Some trees grow so old that their trunks are wider than a car.\" It is a fun fact, but it does not tell what any layer does for the tree. The other sentences each help show a layer's job: keeping the wood from drying out, carrying food, carrying water through tiny tubes, or being strong enough to hold the tree up." },
    { id: "SK-TT2a-TB6", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Look at Figure 1. Which question can a reader answer by using the diagram?",
      choices: [
        { text: "How can a person tell how old a tree is?", correct: true },
        { text: "How does bark keep insects out of a tree?" },
        { text: "What do a tree's leaves use to make food?" },
        { text: "Why does old sapwood stop carrying water?" }
      ],
      clue: "Read every label and the note in Figure 1. Then check each question: does the diagram give the answer?",
      why: "The answer is \"How can a person tell how old a tree is?\" The note in Figure 1 says each ring is one year, so you count the rings to find the tree's age. The paragraphs do not tell this. The diagram names the bark but does not show how it keeps insects out. It does not show leaves or sunlight, and it does not tell why old sapwood stops carrying water." }
  ]
});

PP.addLesson({
  code: "3.T.T.2.b",
  title: "How ideas connect: order of steps and cause and effect",
  clues: {
    words: ["first", "next", "then", "after that", "later", "finally", "because", "so", "since", "as a result", "that is why", "this caused"],
    ask: "What happened first? What happened because of it?",
    draw: "For steps, a row of boxes connected by arrows: First, Next, Then, Last. For cause and effect, boxes with arrows between them: Cause, then Effect. For a chain, keep adding boxes."
  },
  coach: {
    mixup: "Children often flip the cause and the effect, especially when the sentence puts the effect first: \"The game was canceled because it rained.\" Ask: \"Which one happened FIRST? The cause always happens first in time, even if the sentence says it second.\"",
    strong: "Steps in the right order with time words: \"First you fill the cup with soil, next you push the seed in, then you water it.\" Or a cause tied to its effect: \"Because the sawdust kept warm air away, the ice lasted for months.\"",
    notyet: "Steps out of order, or a fact with no cause: \"The ice was cold.\" Ask: \"Which one has to happen first? What made this happen?\"",
    ido: "Drop a ball. Say, \"I let go. That's the cause. The ball fell. That's the effect. The cause happens first.\" Then tell how to make a sandwich out of order on purpose (\"I eat it, then I get the bread\") and fix it together.",
    wedo: "Read a short how-to or science paragraph together. Your child finds each time word and each because or so. At each one, ask, \"What happened first? What happened because of it?\"",
    youdo: "Your child tells you how to do something they know well, using first, next, then and finally. Then they fill in a cause-and-effect chain for something that happened today.",
    everyday: "Ask your child to tell you how to do something step by step, like brushing teeth, and listen for time words. Use why talk all day: \"Why do you think the street is wet?\" Ask for an answer with because or so."
  },
  teach: {
    big: "Facts in a text are connected: some happen in order, one after another, and some happen because of something else.",
    points: [
      "Sequence is the order in which things happen. Words like first, next, then, after that, later and finally help you follow the order. A text can tell steps you follow, like a how-to, or events that happened in the past, like a history. Both are told in time order.",
      "A cause is why something happens. An effect is what happens because of it.",
      "Words like because, so, since, as a result, that is why and this caused often point to a cause and an effect.",
      "One effect can cause the next thing to happen, like a chain.",
      "Not every text uses signal words. Ask yourself, \"What happened first?\" and \"What made this happen?\""
    ],
    words: [
      { term: "sequence", means: "the order things happen in" },
      { term: "cause", means: "why something happens" },
      { term: "effect", means: "what happens because of a cause" },
      { term: "signal words", means: "words like first, then, because and so that show how ideas connect" }
    ],
    example: {
      label: "Example",
      lines: ["At night, the grass cools down. Because the grass is cool, water from the air turns into tiny drops on the blades. As a result, the grass is wet with dew in the morning."],
      note: "This is a chain. Cause: the grass cools. Effect: tiny drops of water form. That effect causes the next one: wet grass in the morning. The signal words are Because and As a result."
    },
    tip: "On the test, you may put steps in order, or answer \"What happens because...?\" Go back to that part of the text and look for signal words nearby."
  },
  learn: [
    {
      show: ["How to plant a bean seed: First, fill a cup with soil. Next, push a bean seed into the soil. Then, water the soil until it is damp but not soggy. Finally, set the cup in a sunny window and check on it each day."],
      ask: "What should you do right after you push the seed into the soil?",
      steps: [
        "This text gives steps, so the order matters.",
        "Find the step about pushing the seed. It starts with the signal word Next.",
        "Look at the step that comes after it. It starts with Then."
      ],
      answer: "Right after you push the seed into the soil, you water the soil until it is damp but not soggy."
    },
    {
      show: ["Long ago, before people had refrigerators, it was hard to keep food cold in summer. So in winter, workers cut big blocks of ice from frozen lakes and ponds. They packed the ice in sawdust inside buildings called icehouses. Because the sawdust kept warm air away from the ice, the ice could last for months."],
      ask: "Why could the ice last for months?",
      steps: [
        "Find the words from the question in the text: last for months. They are in the last sentence.",
        "Look for a signal word near them. The word Because points to the cause.",
        "Read what comes after Because. That is the cause."
      ],
      answer: "The ice could last for months because the sawdust kept warm air away from it."
    },
    {
      show: ["How to make ice pops: 1. Pour juice into the molds. 2. Push a stick into each mold. 3. Pull the ice pops out of the molds. 4. Put the molds in the freezer overnight."],
      ask: "One step is in the wrong place. Which one, and where should it go? How is a text like this different from a text about history?",
      steps: [
        "Picture doing each step in order. Pouring the juice and pushing in the sticks work.",
        "Step 3 says to pull the ice pops out, but the juice has not frozen yet. That step cannot work there.",
        "Ask what has to happen first: the pops must freeze. So pulling them out has to come after the freezer.",
        "A how-to tells steps for you to do. A history text tells events that already happened, in the order they happened. Both use time order."
      ],
      answer: "Step 3 belongs at the end: pour the juice, push in the sticks, freeze overnight, then pull the pops out. A how-to gives steps to follow, and a history text tells past events in order."
    }
  ],
  parent: "When you cook or do a chore together, talk through the steps with first, next, then and finally. When something changes, like ice melting in a glass, ask, \"What caused that?\"",
  passages: [
    { id: "p1", title: "From Egg to Butterfly", genre: "Informational text",
      paragraphs: [
        ["Every monarch butterfly starts its life as a tiny egg.", "A mother monarch lays her eggs on milkweed plants, one egg at a time.", "She chooses milkweed because it is the only kind of plant her babies can eat."],
        ["After a few days, a small caterpillar hatches from the egg.", "First, it eats its own eggshell.", "Then it begins to munch on milkweed leaves."],
        ["The caterpillar eats and eats, so it grows very fast.", "But its skin does not grow with it.", "When the skin gets too tight, the caterpillar wiggles out of it.", "A new, bigger skin is already underneath.", "This happens several times."],
        ["Milkweed leaves have a kind of poison in them.", "The poison does not hurt the caterpillar.", "Instead, it stays in the caterpillar's body and makes it taste bad.", "As a result, many birds learn to leave monarchs alone."],
        ["When the caterpillar is full grown, it hangs upside down from a leaf or a stem.", "Its skin splits open one last time.", "Under it, the new skin hardens into a green case called a chrysalis.", "Inside the chrysalis, the caterpillar's body slowly changes."],
        ["After one or two weeks, the chrysalis cracks open, and a butterfly climbs out.", "At first, its wings are wet and crumpled.", "The butterfly waits for its wings to dry.", "Then it flies off to find flowers."]
      ] },
    { id: "p2", title: "Where Does Rain Come From?", genre: "Informational text",
      paragraphs: [
        ["The rain that falls on your house has been on a long trip.", "It may once have been part of an ocean, a lake, or even a puddle.", "Water moves around and around between the ground and the sky.", "This trip is called the water cycle."],
        ["The trip begins when the sun warms the water on Earth.", "The sun's heat makes some of the water change into a gas called water vapor.", "That is why a puddle dries up on a sunny afternoon.", "Water vapor is invisible, so you cannot see it rise into the air."],
        ["High in the sky, the air is cooler.", "When water vapor cools, it turns back into tiny drops of water.", "The drops are so small and light that they float in the air.", "Millions of these drops together make a cloud."],
        ["Inside a cloud, the tiny drops bump into each other and join together.", "Little by little, the drops grow bigger and heavier.", "When they become too heavy to float, they fall to the ground as rain.", "If the air is very cold, the water may fall as snow instead."],
        ["Some of the rain soaks into the ground.", "The rest runs into streams, rivers, lakes, and oceans.", "Then the sun warms the water again, and the trip starts over."]
      ] },
    /* PP-004 form B (testB) passage, used only by testB. Needs independent review. */
    { id: "p3", title: "Riding for the Mail", genre: "Informational text",
      paragraphs: [
        ["In 1860, many families had moved west to California.", "They wanted letters from home, but the mail was slow.", "A letter sent by stagecoach took more than three weeks to get there.", "A letter sent by ship could take months."],
        ["So a company came up with a faster plan called the Pony Express.", "Riders on quick horses would carry the mail across the West.", "The first riders set out in April 1860.", "They rode from St. Joseph, Missouri, to Sacramento, California."],
        ["Here is how the mail moved.", "First, the letters were locked in a leather cover that fit over a saddle.", "Next, a rider rode as fast as he could to the next station.", "The stations were about 10 to 15 miles apart.", "A horse gets tired after a hard run like that.", "So at each station, the rider jumped onto a fresh horse.", "He moved the leather cover to the new saddle in about two minutes.", "After 75 to 100 miles, he handed the mail to a new rider, who raced on."],
        ["Because the riders changed horses so often, the mail never had to slow down.", "As a result, a letter could cross the West in about 10 days."],
        ["The Pony Express did not last long, though.", "At the same time, workers were putting up a telegraph line across the country.", "A telegraph sends messages through wires in just minutes.", "The line was finished in October 1861.", "People did not need riders to carry their news now, so the Pony Express closed two days later."],
        ["The Pony Express ran for only about 19 months.", "Still, people today remember the riders who kept the mail moving."]
      ] },
    /* B2 (expansion 2026-10-22, author b2a): p4 (a series of historical events) and p5 (steps in a
       technical procedure) are used only by core sets 2 and 3. Never used by test or testB. NEEDS INDEPENDENT REVIEW. */
    { id: "p4", title: "The Wheel That Topped a Tower", genre: "Informational text",
      paragraphs: [
        ["In 1889, a world's fair was held in Paris, France.", "Workers built the Eiffel Tower for it, the tallest tower in the world then.", "People came from all over to see it."],
        ["A few years later, Chicago planned its own world's fair for 1893.", "The planners wanted something even more amazing than the tower in Paris.", "So they asked builders for their best ideas."],
        ["An engineer named George Ferris drew a plan for a giant turning wheel.", "Many people doubted his plan.", "They said a wheel that big would fall down."],
        ["Ferris did not give up.", "He showed the planners how strong steel parts would hold it together.", "They said yes.", "Workers built the wheel all winter."],
        ["In June 1893, the wheel turned for the first time.", "It was taller than a 20-story building.", "It had 36 cars, and each one held about 60 people."],
        ["The wheel stayed strong all summer, even on windy days.", "Because it was safe, people stopped worrying and lined up to ride.", "Today, wheels like it, called Ferris wheels, are all over the world."]
      ] },
    { id: "p5", title: "How to Patch a Bike Tube", genre: "Informational text",
      paragraphs: [
        ["A flat tire can stop a bike ride, and often the problem is a tiny hole in the tube.", "The tube is the rubber ring inside the tire that holds the air.", "A grown-up can help you patch it."],
        ["First, take the wheel off and let out any air.", "Next, use two flat tools called tire levers to pry the tire off the rim.", "Then pull the tube out."],
        ["Now find the hole.", "Pump a little air into the tube, hold it near your ear and listen for a hiss.", "If you cannot hear one, dip the tube into a bowl of water, and bubbles will rise where the air escapes."],
        ["When you find the hole, dry the tube.", "Rub the spot with sandpaper so the glue can grip.", "Spread thin glue over the hole and wait until it looks dull.", "Then press the patch on hard and hold it for a minute."],
        ["Finally, tuck the tube back in, push the tire onto the rim and pump it up.", "Put the wheel back on, and you are ready to ride."]
      ] },
    /* SIM-2 (expansion 2026-10-23): p6-p8 are used only by the similar bank (S05, S08, S11).
       Never used by core, Together, test or testB. NEEDS INDEPENDENT REVIEW. */
    { id: "p6", title: "From Bean to Chocolate Bar", genre: "Informational text",
      paragraphs: [
        ["Chocolate starts on a tree.", "Cacao trees grow in hot, rainy places near the middle of the Earth.", "Big pods grow right on the trunk."],
        ["When the pods are ripe, farmers cut them down.", "They crack each pod open and scoop out the seeds, called beans.", "The beans are covered in sticky white pulp."],
        ["Next, the farmers pile the beans under big leaves.", "For about a week, the beans warm up and turn brown.", "Their bitter taste starts to change."],
        ["Then the beans are spread out in the sun to dry.", "Workers rake them every day so they dry evenly.", "Dry beans are packed in sacks and shipped to a factory."],
        ["At the factory, the beans are roasted in big ovens.", "Their shells are cracked off.", "Machines grind what is left into a thick, brown paste."],
        ["Last, sugar and milk are mixed into the paste.", "The chocolate is poured into molds and cooled into bars."]
      ] },
    { id: "p7", title: "A Car for Everyone", genre: "Informational text",
      paragraphs: [
        ["In the early 1900s, cars were a new invention.", "They cost so much that only rich families could buy one."],
        ["Henry Ford wanted to change that.", "He wanted to build a car that most families could pay for.", "In 1908, his company began selling a strong, simple car called the Model T."],
        ["At first, each car was built by a team of workers who moved around it.", "Building one car took more than twelve hours."],
        ["In 1913, Ford tried a new idea called a moving assembly line.", "The cars rolled slowly past the workers.", "Each worker did just one job, again and again.", "Now a car could be built in about an hour and a half."],
        ["Because the cars were faster to build, they cost less to make.", "So Ford lowered the price again and again.", "By 1927, more than 15 million Model T cars had been sold."]
      ] },
    { id: "p8", title: "A Gift That Needed a Base", genre: "Informational text",
      paragraphs: [
        ["In the 1870s, the people of France planned a gift for the United States.", "It was a giant copper statue of a woman holding a torch.", "The French would build the statue, and the Americans would build the base it would stand on."],
        ["Building the statue in France took years.", "Then workers took it apart and packed it into more than 200 crates.", "A ship carried the crates across the ocean."],
        ["In America, the base was not done.", "The builders had run out of money.", "Without a base, the statue could not stand."],
        ["A newspaper owner named Joseph Pulitzer wanted to help.", "His newspaper promised to print the name of every person who gave money, even if the gift was only a penny.", "Children sent coins from their piggy banks.", "In five months, more than 120,000 people gave money."],
        ["The base was finished in 1886.", "That fall, the Statue of Liberty was put together and stood tall in New York Harbor."]
      ] }
  ],
  practice: [
    { id: "SK-TT2b-P1", type: "order", points: 2, dok: 2, passages: ["p1"],
      prompt: "Put the stages of a monarch's life in order.",
      steps: [
        "A mother monarch lays an egg on milkweed.",
        "A caterpillar hatches and eats its eggshell.",
        "The caterpillar sheds its tight skin several times.",
        "The caterpillar's new skin hardens into a chrysalis.",
        "A butterfly climbs out and waits for its wings to dry."
      ],
      clue: "Use the signal words and the paragraph order. The article starts at the very beginning of a monarch's life and ends when it can fly.",
      why: "The order is: the mother lays an egg on milkweed, a caterpillar hatches and eats its eggshell, it sheds its tight skin several times, its new skin hardens into a chrysalis, and a butterfly climbs out and waits for its wings to dry." },
    { id: "SK-TT2b-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Why does the mother monarch lay her eggs on milkweed?",
      choices: [
        { text: "Milkweed is the only kind of plant her caterpillars can eat.", correct: true },
        { text: "Milkweed leaves keep her eggs warm during the cold nights." },
        { text: "Birds cannot find eggs that are hidden on milkweed leaves." },
        { text: "Milkweed has more flowers than any other plant in the field." }
      ],
      clue: "The question asks why. Look for a signal word that points to a cause.",
      why: "The answer is \"Milkweed is the only kind of plant her caterpillars can eat.\" Paragraph 1 says she chooses milkweed because it is the only kind of plant her babies can eat. The article does not say milkweed keeps eggs warm or hides them." },
    { id: "SK-TT2b-P3", type: "ebsr", points: 2, dok: 3, passages: ["p1"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What is one effect of the caterpillar eating milkweed leaves?",
        choices: [
          { text: "Many birds will not eat monarchs.", correct: true },
          { text: "The caterpillar gets sick from the poison." },
          { text: "The caterpillar's new skin stops growing." },
          { text: "The chrysalis turns a bright green color." }
        ] },
      partB: { prompt: "Which sentence from the article best explains why the answer to Part A happens?",
        choices: [
          { text: "\"Instead, it stays in the caterpillar's body and makes it taste bad.\"", correct: true },
          { text: "\"Then it flies off to find flowers.\"" },
          { text: "\"But its skin does not grow with it.\"" },
          { text: "\"Inside the chrysalis, the caterpillar's body slowly changes.\"" }
        ] },
      clue: "Read paragraph 4. Follow the chain one link at a time: the leaves, the poison, the caterpillar, and then what happens next.",
      why: "Part A: Many birds will not eat monarchs. Part B: \"Instead, it stays in the caterpillar's body and makes it taste bad.\" The milkweed poison stays in the caterpillar and makes it taste bad. As a result, many birds learn to leave monarchs alone. The article says the poison does not hurt the caterpillar." },
    { id: "SK-TT2b-P4", type: "dropdown", points: 2, dok: 2, passages: ["p1"],
      prompt: "Use the article. Choose the signal word that best completes each sentence.",
      text: "The caterpillar eats a lot, {0} it grows very fast. Its skin gets too tight {1} the skin does not grow with it.",
      slots: [
        { options: ["so", "although", "before"], answer: 0 },
        { options: ["because", "so", "until"], answer: 0 }
      ],
      clue: "In each sentence, decide which part is the cause and which part is the effect. So comes before an effect. Because comes before a cause.",
      why: "The first blank is \"so\": eating a lot is the cause, and growing fast is the effect. The second blank is \"because\": the skin not growing is the cause of the skin getting too tight." },
    { id: "SK-TT2b-P5", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Match each cause with its effect.",
      cols: ["It wiggles out of the old skin.", "Many birds leave it alone.", "It waits before flying."],
      rows: [
        { text: "The caterpillar's skin gets too tight.", answer: 0 },
        { text: "The monarch tastes bad.", answer: 1 },
        { text: "The new butterfly's wings are wet.", answer: 2 }
      ],
      clue: "For each cause, ask, \"So what happens next?\" Find that part of the article.",
      why: "When the skin gets too tight, the caterpillar wiggles out of the old skin (paragraph 3). Because the monarch tastes bad, many birds leave it alone (paragraph 4). Because its wings are wet, the butterfly waits before flying (paragraph 6)." },
    { id: "SK-TT2b-P6", type: "hottext", points: 1, dok: 1, passages: ["p1"],
      prompt: "Choose the sentence that tells what the caterpillar does first after it hatches.",
      targets: ["p1:1:2", "p1:2:1", "p1:2:2", "p1:2:3", "p1:3:1"],
      answer: ["p1:2:2"], pick: 1,
      clue: "Find the paragraph where the caterpillar hatches. Read its sentences in order.",
      why: "The answer is \"First, it eats its own eggshell.\" The signal word First shows this happens before it starts eating milkweed leaves." }
  ],
  /* ---------- B2 core (expansion 2026-10-22, author b2a; pattern: 3.T.T.1.c) ----------
     One ref: P4 (set 1). P5 and P6 stay in Practice Together (P1, P2, P3, P5, P6), because P1, P3 and P5
     pre-answer them (the order of the stages, the bad taste, the wet wings). Set 2 practises a series of
     historical events (p4), set 3 a technical procedure (p5) plus a science chain. Author log:
     docs/expansion-2026-10-22/batches/B2-b2a-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TT2b-P4" },
      { id: "SK-TT2b-C02", type: "hottext", points: 1, dok: 2, std: ["3.T.T.2.b"], passages: ["p1"],
        prompt: "Which sentence tells what the caterpillar does just before its skin splits open one last time? Choose the sentence in the passage.",
        targets: ["p1:3:3", "p1:5:1", "p1:5:3", "p1:5:4", "p1:6:1"],
        answer: ["p1:5:1"], pick: 1,
        clue: "Scientific ideas often happen in stages. Find the stage the question names, then look at what comes right before it.",
        hints: [
          "Scientific ideas often happen in stages. Find the stage the question names, then look at what comes right before it.",
          "Find the sentence that says the skin splits one last time. The sentences around it tell the stages just before and just after.",
          "\"When the skin gets too tight, the caterpillar wiggles out of it\" tells about the earlier times the skin comes off, not the last time. Check which of the other sentences comes before the last split."
        ],
        how: [
          "Paragraph 5 tells the last time the skin comes off: \"Its skin splits open one last time.\"",
          "The sentence right before it tells what the caterpillar does first.",
          "The answer is \"When the caterpillar is full grown, it hangs upside down from a leaf or a stem.\"",
          "The skin hardening and the body changing come after the split, the chrysalis opening comes much later, and wiggling out of a tight skin happens earlier, several times."
        ],
        misconception: "A common mix-up is choosing a sentence that comes right after the stage instead of right before it.",
        why: "The answer is \"When the caterpillar is full grown, it hangs upside down from a leaf or a stem.\" It comes just before \"Its skin splits open one last time.\" The hardening skin and the changing body come after, the chrysalis opens much later, and wiggling out of a tight skin happens earlier." },
      { id: "SK-TT2b-C03", type: "ms", points: 2, dok: 1, std: ["3.T.T.2.b"], passages: ["p1"], pick: 3,
        prompt: "Which THREE words or phrases from paragraph 6 help show the order in which things happen?",
        choices: [
          { text: "After one or two weeks", correct: true },
          { text: "At first", correct: true },
          { text: "Then", correct: true },
          { text: "cracks open" },
          { text: "wet and crumpled" },
          { text: "to find flowers" }
        ],
        clue: "Time-order words tell when something happens, like next, later or in the end. They are not the actions themselves.",
        hints: [
          "Time-order words tell when something happens, like next, later or in the end. They are not the actions themselves.",
          "Read paragraph 6 slowly. For each choice, ask: does it tell when, or does it tell what happens or what something is like? Choose three.",
          "\"Wet and crumpled\" tells what the wings look like, not when something happens. Check each of the other choices the same way."
        ],
        how: [
          "Time-order words tell when. Action words tell what happens.",
          "\"After one or two weeks\" tells how long before the chrysalis opens. \"At first\" tells how the wings are at the start. \"Then\" tells what comes next.",
          "The answers are \"After one or two weeks,\" \"At first\" and \"Then.\"",
          "\"Cracks open\" is an action, \"wet and crumpled\" describes the wings, and \"to find flowers\" tells why the butterfly flies off."
        ],
        misconception: "A common mix-up is choosing an action word. Time-order words tell when, not what happens.",
        why: "The answers are \"After one or two weeks,\" \"At first\" and \"Then.\" Each one tells when something happens. \"Cracks open\" is an action, \"wet and crumpled\" describes the wings, and \"to find flowers\" tells why the butterfly flies." },
      { id: "SK-TT2b-C04", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.b"], passages: [],
        stem: ["How to Make a Cup Phone", "1. Poke a small hole in the bottom of two paper cups.", "2. Push one end of a long string through each hole.", "3. Pull the string tight and talk into one cup while a friend listens.", "4. Tie a big knot in each end of the string, inside the cups."],
        prompt: "One step in these directions is in the wrong place. Which change fixes the directions, and why?",
        choices: [
          { text: "Move step 4 before step 3, because the string will slip out if it is pulled before the knots are tied.", correct: true },
          { text: "Move step 1 after step 2, because the string has to be in the cups before the holes are poked." },
          { text: "Move step 2 after step 4, because the knots must be tied before the string goes through the holes." },
          { text: "Leave the steps as they are, because the knots can be tied after you finish talking." }
        ],
        clue: "Steps in a procedure must be in an order that works. Picture yourself doing each step, one at a time.",
        hints: [
          "Steps in a procedure must be in an order that works. Picture yourself doing each step, one at a time.",
          "Act out the steps in your head in the order they are written. Stop at the first step that would not work.",
          "The holes have to be poked before the string can go through them, so step 1 is in the right place."
        ],
        how: [
          "Steps 1 and 2 work: you poke the holes, then push the string through them.",
          "In step 3 you pull the string tight, but nothing holds the ends inside the cups yet, so the string would slip out.",
          "The answer is \"Move step 4 before step 3, because the string will slip out if it is pulled before the knots are tied.\"",
          "The string cannot go through holes that are not poked yet, a knotted string end will not fit through a small hole, and the knots are needed before you talk, not after."
        ],
        misconception: "A common mix-up is keeping the steps in the order they are written. A procedure works only if each step is ready for the next one.",
        why: "The answer is \"Move step 4 before step 3, because the string will slip out if it is pulled before the knots are tied.\" The knots hold the string inside the cups, so they must be tied before the string is pulled tight. The holes must come first, and the string must go through the holes before its ends are knotted." },
      { id: "SK-TT2b-C05", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.b"], passages: [],
        stem: ["In the 1860s, the only way to cross the East River between Brooklyn and New York City was by boat. In some winters, ice stopped the boats. So leaders decided to build a bridge. An engineer named John Roebling planned it, but he was hurt in an accident and died before the building began. His son, Washington Roebling, took over. Then Washington became very sick from working deep under the river, and he had to stay in his room. His wife, Emily, carried his instructions to the workers every day. In 1883, the Brooklyn Bridge opened, and Emily was the first person to ride across it."],
        prompt: "Which sentence best tells how the events in this text are connected?",
        choices: [
          { text: "Each problem led to a next step: ice led to a bridge plan, and Washington's illness led Emily to help.", correct: true },
          { text: "The bridge opened first, and after that the river froze and the boats stopped running." },
          { text: "Emily planned the bridge, so John and Washington Roebling carried her instructions." },
          { text: "Ice led John Roebling to get hurt, and the bridge opening led Emily to help." }
        ],
        clue: "In a series of historical events, ask what happened first and what each event led to.",
        hints: [
          "In a series of historical events, ask what happened first and what each event led to.",
          "List the events in the order the text tells them.",
          "The bridge opened at the very end, in 1883, so a choice that puts the opening first has the order wrong. Check each link in the other choices against the text."
        ],
        how: [
          "First problem: ice sometimes stopped the boats, so leaders decided to build a bridge.",
          "Next problems: John Roebling died, so his son took over. Then Washington got sick, so Emily carried his instructions to the workers.",
          "The answer is \"Each problem led to a next step: ice led to a bridge plan, and Washington's illness led Emily to help.\"",
          "The bridge opened last, John planned it, not Emily, and the text never says ice hurt John or that Emily helped after the opening."
        ],
        misconception: "A common mix-up is flipping the order: a problem has to come before the step it leads to.",
        why: "The answer is \"Each problem led to a next step: ice led to a bridge plan, and Washington's illness led Emily to help.\" Each event caused the next one, and the bridge opened at the end, in 1883. John Roebling planned it, not Emily, the text does not say ice caused John's accident, and Emily helped before the bridge opened." },
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT2b-C06", type: "order", points: 2, dok: 2, std: ["3.T.T.2.b"], passages: ["p4"],
        prompt: "Put these events in the order they happened, from first to last.",
        steps: [
          "A very tall tower is built for a fair in Paris.",
          "Chicago's planners ask builders to send in ideas.",
          "George Ferris draws a plan for a giant wheel.",
          "Workers build the wheel all winter.",
          "The wheel turns for the first time."
        ],
        clue: "In a series of historical events, look for dates and time words like a few years later and today.",
        hints: [
          "In a series of historical events, look for dates and time words like a few years later and today.",
          "Each paragraph moves forward in time. Find which paragraph each event comes from.",
          "The tower in Paris was built for a fair in 1889, years before Chicago's fair, so it comes first. Put the other four in order the same way."
        ],
        how: [
          "Paragraph 1 is about 1889: the tower is built in Paris.",
          "Paragraph 2 says a few years later, Chicago's planners ask for ideas. In paragraph 3, Ferris draws his plan.",
          "Paragraph 4 ends with workers building the wheel through the winter, and paragraph 5 says it turned for the first time in June 1893.",
          "So the order is: the tower, the planners ask for ideas, Ferris draws his plan, workers build the wheel, the wheel turns."
        ],
        misconception: "A common mix-up is guessing the order from what seems likely. Use the dates and the time words.",
        why: "The order is: a very tall tower is built for a fair in Paris, Chicago's planners ask builders to send in ideas, George Ferris draws a plan for a giant wheel, workers build the wheel all winter, and the wheel turns for the first time. The article tells these events in this order, from 1889 to June 1893." },
      { id: "SK-TT2b-C07", type: "ebsr", points: 2, dok: 2, std: ["3.T.T.2.b"], passages: ["p4"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Why did the Chicago planners ask builders to send in their best ideas?",
          choices: [
            { text: "They hoped to top what Paris had built for its fair.", correct: true },
            { text: "They wanted to hold their fair before Paris held one." },
            { text: "The tower in Paris had fallen down in a storm." },
            { text: "George Ferris had already shown them his wheel." }
          ] },
        partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
          choices: [
            { text: "\"The planners wanted something even more amazing than the tower in Paris.\"", correct: true },
            { text: "\"A few years later, Chicago planned its own world's fair for 1893.\"" },
            { text: "\"People came from all over to see it.\"" },
            { text: "\"Workers built the wheel all winter.\"" }
          ] },
        clue: "A cause is why something happens. Ask what the planners wanted, and why they wanted it.",
        hints: [
          "A cause is why something happens. Ask what the planners wanted, and why they wanted it.",
          "Reread paragraph 2. What did the planners want their fair to have? For Part B, choose one sentence.",
          "The article never says the tower in Paris fell, so that reason does not fit. For Part B, the sentence you choose must match your Part A answer."
        ],
        how: [
          "Paragraph 2 says the planners wanted something even more amazing than the tower in Paris. That is why they asked for ideas.",
          "Part A: They hoped to top what Paris had built for its fair.",
          "Part B: \"The planners wanted something even more amazing than the tower in Paris.\" The word So in the next sentence links this reason to asking for ideas.",
          "Paris held its fair first, in 1889, the tower never fell, and Ferris drew his plan only after the planners asked."
        ],
        misconception: "A common mix-up is choosing a sentence that tells when something happened instead of why.",
        why: "Part A: They hoped to top what Paris had built for its fair. Part B: \"The planners wanted something even more amazing than the tower in Paris.\" The next sentence begins with So, which links this reason to asking for ideas. Paris held its fair first, the tower did not fall, and Ferris drew his plan only after the planners asked." },
      { id: "SK-TT2b-C08", type: "match", points: 2, dok: 2, std: ["3.T.T.2.b"], passages: ["p4"],
        prompt: "Did each event happen before or after the wheel turned for the first time? Match each event to the right time.",
        cols: ["Before the wheel first turned", "After the wheel first turned"],
        rows: [
          { text: "Many people doubt Ferris's plan.", answer: 0 },
          { text: "Ferris shows the planners how strong steel parts would hold the wheel.", answer: 0 },
          { text: "People line up to ride the wheel.", answer: 1 },
          { text: "Wheels like his are built in other places.", answer: 1 }
        ],
        clue: "Time words and the order of the paragraphs show when events happen. Find the moment the wheel first turns, then sort each event.",
        hints: [
          "Time words and the order of the paragraphs show when events happen. Find the moment the wheel first turns, then sort each event.",
          "Find the sentence that tells when the wheel turned for the first time. Then decide whether each event comes in an earlier paragraph or a later one.",
          "People doubting the plan happens before the wheel is even built, so it goes before. Sort the other three the same way."
        ],
        how: [
          "The wheel turns for the first time in June 1893, in paragraph 5.",
          "Before that, in paragraphs 3 and 4, people doubt the plan and Ferris shows the planners the steel parts.",
          "After that, in paragraph 6, people line up to ride, and since then wheels like his have been built all over the world."
        ],
        misconception: "A common mix-up is sorting by what seems important instead of by when it happened.",
        why: "Before the wheel first turned, people doubted the plan and Ferris showed the planners the steel parts (paragraphs 3 and 4). After it turned in June 1893, people lined up to ride, and wheels like his were built all over the world (paragraph 6)." },
      { id: "SK-TT2b-C09", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.b"], passages: ["p4"],
        prompt: "Why does the author tell that many people doubted Ferris's plan?",
        choices: [
          { text: "to show that Ferris kept going even when others thought he would fail", correct: true },
          { text: "to show that the wheel was only an idea and was never built" },
          { text: "to show that the planners wanted a wheel instead of a tower" },
          { text: "to show that riders were too scared to get on the wheel" }
        ],
        clue: "In a series of events, one event can set up the next. Ask what happens right after people doubt the plan.",
        hints: [
          "In a series of events, one event can set up the next. Ask what happens right after people doubt the plan.",
          "Keep reading after the people doubt the plan, and follow what happens to it.",
          "Workers do build the wheel, so it was not only an idea. Test the other choices against what comes next."
        ],
        how: [
          "In paragraph 3, many people doubt the plan and say the wheel would fall down.",
          "Paragraph 4 begins, \"Ferris did not give up.\" He shows the planners the steel parts, and they say yes.",
          "The answer is \"to show that Ferris kept going even when others thought he would fail.\"",
          "The wheel was built, the planners wanted something more amazing than the tower, not a swap, and later people lined up to ride."
        ],
        misconception: "A common mix-up is reading one event by itself. Ask how it connects to the event that comes next.",
        why: "The answer is \"to show that Ferris kept going even when others thought he would fail.\" Right after people doubt the plan, the article says Ferris did not give up, and the planners said yes. The wheel was built, the planners did not trade a tower for a wheel, and people did ride it." },
      { id: "SK-TT2b-C10", type: "hottext", points: 1, dok: 2, std: ["3.T.T.2.b"], passages: ["p4"],
        prompt: "The author says people stopped worrying because the wheel was safe. Which sentence shows how people could tell it was safe? Choose the sentence in the passage.",
        targets: ["p4:3:3", "p4:4:2", "p4:5:1", "p4:5:3", "p4:6:1"],
        answer: ["p4:6:1"], pick: 1,
        clue: "An effect needs a cause. Ask what people could see or learn that would make them trust the wheel.",
        hints: [
          "An effect needs a cause. Ask what people could see or learn that would make them trust the wheel.",
          "Reread paragraphs 4 to 6. Which sentences tell about the wheel itself?",
          "\"In June 1893, the wheel turned for the first time\" tells when the wheel started, not how people could tell it was safe. Check the sentences that are left."
        ],
        how: [
          "People had said a wheel that big would fall down. To stop worrying, they needed to see that it would not.",
          "Paragraph 6 says the wheel stayed strong all summer, even on windy days. Everyone could see that.",
          "The answer is \"The wheel stayed strong all summer, even on windy days.\"",
          "The steel parts were shown only to the planners, the first turn and the 36 cars do not show it is safe, and the sentence about falling down is the worry itself."
        ],
        misconception: "A common mix-up is choosing the worry instead of what ended it. Look for the cause that changed people's minds.",
        why: "The answer is \"The wheel stayed strong all summer, even on windy days.\" Seeing it stand up to the wind showed it was safe, so people stopped worrying. The steel parts were shown only to the planners, the first turn and the cars do not prove safety, and \"would fall down\" is the worry." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT2b-C11", type: "order", points: 2, dok: 2, std: ["3.T.T.2.b"], passages: ["p5"],
        prompt: "Put the steps for patching a bike tube in order, from first to last.",
        steps: [
          "Take the wheel off and let out the air.",
          "Pull the tube out of the tire.",
          "Find the hole by listening or by looking for bubbles.",
          "Rub the spot with sandpaper and spread on glue.",
          "Press the patch onto the tube."
        ],
        clue: "Steps in a procedure use time words like first, next, then and finally. Each step gets things ready for the next one.",
        hints: [
          "Steps in a procedure use time words like first, next, then and finally. Each step gets things ready for the next one.",
          "Find the time word that begins each part of the article, and match each step to its part.",
          "You cannot find the hole until the tube is out of the tire, so pulling the tube out comes before finding the hole. Put the other steps in order the same way."
        ],
        how: [
          "Paragraph 2 starts with First: take the wheel off. It ends with pulling the tube out.",
          "Paragraph 3 begins, \"Now find the hole.\"",
          "Paragraph 4 says to rub the spot with sandpaper and spread the glue, then press the patch on.",
          "So the order is: take the wheel off, pull the tube out, find the hole, sandpaper and glue, press the patch on."
        ],
        misconception: "A common mix-up is putting a step before the step that gets it ready, like finding the hole before the tube is out.",
        why: "The order is: take the wheel off and let out the air, pull the tube out of the tire, find the hole by listening or by looking for bubbles, rub the spot with sandpaper and spread on glue, and press the patch onto the tube. Each step gets things ready for the next one." },
      { id: "SK-TT2b-C12", type: "dropdown", points: 1, dok: 2, std: ["3.T.T.2.b"], passages: ["p5"],
        stem: ["Dev wrote the first steps from memory:", "1. Take the wheel off the bike and let out the air.", "2. ________", "3. Pull the tube out.", "4. Find the hole."],
        prompt: "Dev left out a step. Choose the step that belongs in the blank.",
        text: "Step 2: {0}",
        slots: [
          { options: ["Pry one edge of the tire off the rim with tire levers.", "Pump the tire up until it feels hard again.", "Rub the spot with sandpaper."], answer: 0 }
        ],
        clue: "In a procedure, each step gets things ready for the next one. Ask what must happen before you can do the next step.",
        hints: [
          "In a procedure, each step gets things ready for the next one. Ask what must happen before you can do the next step.",
          "Read Dev's steps 1 and 3. Then reread the article's steps in order and find what Dev skipped.",
          "Sandpaper is used after the hole is found, so it cannot be step 2. Check the two choices that are left: which one could happen before the tube comes out?"
        ],
        how: [
          "After the wheel is off, the tire still covers the tube, so the tube cannot come out yet.",
          "The article says to use two tire levers to pry the tire off the rim. Then you pull the tube out.",
          "The answer is \"Pry one edge of the tire off the rim with tire levers.\"",
          "Pumping comes at the very end, and the sandpaper comes after you find the hole."
        ],
        misconception: "A common mix-up is choosing a real step from the wrong place in the procedure.",
        why: "The answer is \"Pry one edge of the tire off the rim with tire levers.\" The tire covers the tube, so it has to be pried off before the tube can come out. Pumping comes at the end, and sanding comes after the hole is found." },
      { id: "SK-TT2b-C13", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.b"], passages: ["p5"],
        prompt: "What would most likely happen if someone skipped rubbing the spot with sandpaper?",
        choices: [
          { text: "The glue might not grip, so the patch could peel off and let air out.", correct: true },
          { text: "The glue would make a second hole somewhere else in the tube." },
          { text: "The bubbles would stop rising from the hole in the bowl of water." },
          { text: "The tire would be too big to push back onto the rim of the wheel." }
        ],
        clue: "In a procedure, many steps have a reason. Words like so and because often tell why a step matters.",
        hints: [
          "In a procedure, many steps have a reason. Words like so and because often tell why a step matters.",
          "Reread the steps in paragraph 4. Ask what each step does for the step after it.",
          "Sandpaper does not make holes, so skipping it would not make a new one. Test the other results: which one could really happen?"
        ],
        how: [
          "The article says to rub the spot with sandpaper so the glue can grip.",
          "If the glue cannot grip, the patch may not stick well, and air could leak out again.",
          "The answer is \"The glue might not grip, so the patch could peel off and let air out.\"",
          "Sandpaper does not make holes, the bubbles are used before this step, and the tire fits the rim either way."
        ],
        misconception: "A common mix-up is picking an effect that is not connected to the skipped step. Use the reason the text gives.",
        why: "The answer is \"The glue might not grip, so the patch could peel off and let air out.\" The article says the sandpaper is there so the glue can grip. Skipping it would not make a hole, the bubbles come earlier, and the tire size does not change." },
      { id: "SK-TT2b-C14", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.b"], passages: [],
        stem: ["Bakers mix yeast into bread dough. Yeast is a tiny living thing. It eats the sugar in the dough and gives off a gas. The gas makes thousands of tiny bubbles. The bubbles stretch the dough, so it puffs up, or rises. When the bread bakes, the bubbles leave little holes inside."],
        prompt: "Which chain shows how the ideas in this text are connected?",
        choices: [
          { text: "Yeast eats sugar, so it gives off gas, so bubbles make the dough rise.", correct: true },
          { text: "The dough rises, so yeast eats sugar, so it gives off a gas." },
          { text: "Bubbles leave holes, so yeast eats sugar, so the dough rises." },
          { text: "Yeast eats sugar, so the bread bakes, so the bubbles give off gas." }
        ],
        clue: "In a cause-and-effect chain, each effect becomes the cause of the next thing. The cause always happens first.",
        hints: [
          "In a cause-and-effect chain, each effect becomes the cause of the next thing. The cause always happens first.",
          "Find the first thing the yeast does in the text. Then ask what happens because of it, and what happens because of that.",
          "A chain that starts with the dough rising has the order backward, because the rising comes after the bubbles. Check the other chains link by link."
        ],
        how: [
          "First, the yeast eats the sugar in the dough and gives off a gas.",
          "The gas makes tiny bubbles, and the bubbles stretch the dough, so it rises.",
          "The answer is \"Yeast eats sugar, so it gives off gas, so bubbles make the dough rise.\"",
          "The holes are left only at the end, when the bread bakes, and baking does not make the bubbles give off gas."
        ],
        misconception: "A common mix-up is flipping a cause and its effect. The cause always happens first, even if it is told second.",
        why: "The answer is \"Yeast eats sugar, so it gives off gas, so bubbles make the dough rise.\" Each link causes the next. The dough rises after the bubbles form, the holes come last, when the bread bakes, and baking is not what makes the gas." },
      { id: "SK-TT2b-C15", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.b"], passages: ["p4", "p5"],
        prompt: "How is the way \"How to Patch a Bike Tube\" tells its ideas different from the way \"The Wheel That Topped a Tower\" tells its ideas?",
        choices: [
          { text: "The tube text gives steps for a reader to follow, and the wheel text tells events that already happened.", correct: true },
          { text: "The tube text tells events from long ago, and the wheel text gives steps for a reader to follow." },
          { text: "Both texts give steps for a reader to follow, one after another, from first to last." },
          { text: "The tube text uses no time words at all, but the wheel text uses many time words." }
        ],
        clue: "Some texts tell steps you can do yourself. Others tell events from the past. Both can use time words.",
        hints: [
          "Some texts tell steps you can do yourself. Others tell events from the past. Both can use time words.",
          "Look at the verbs in each text. Are they telling you what to do, or telling what someone did?",
          "The tube text uses words like First, Next and Finally, so it does use time words. Check the other choices against both texts."
        ],
        how: [
          "The tube text tells the reader what to do: take the wheel off, pull the tube out, find the hole.",
          "The wheel text tells what people did long ago, from 1889 to 1893.",
          "The answer is \"The tube text gives steps for a reader to follow, and the wheel text tells events that already happened.\"",
          "One choice has the two texts backward, the wheel text does not give steps for you to do, and the tube text uses First, Next and Finally."
        ],
        misconception: "A common mix-up is thinking that any text with time words is a set of steps. A history also goes in time order.",
        why: "The answer is \"The tube text gives steps for a reader to follow, and the wheel text tells events that already happened.\" The tube text tells you what to do, and the wheel text tells what people did from 1889 to 1893. Both use time order, and the tube text has First, Next and Finally." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own new short text. */
  similar: [
    { id: "SK-TT2b-S01", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.b"], passages: [],
      like: ["SK-TT2b-C04", "SK-TT2b-C12"],
      stem: ["How to Plant a Tree Seedling", "1. Dig a hole twice as wide as the roots.", "2. Fill the hole with soil and press it down gently.", "3. Set the seedling in the hole.", "4. Water the soil well."],
      prompt: "One step is in the wrong place. Which change fixes the directions?",
      choices: [
        { text: "Move step 3 before step 2, because the seedling must be in the hole before the soil goes in.", correct: true },
        { text: "Move step 4 to the beginning, because the soil should be wet before you dig the hole." },
        { text: "Move step 1 to the end, because the hole can be dug after the seedling is planted." },
        { text: "Leave the steps as they are, because the soil can be lifted out again later." }
      ],
      clue: "Picture doing each step in order. Stop at the first step that would not work.",
      hints: [
        "Picture doing each step in order. Stop at the first step that would not work.",
        "Act out the steps in order, one at a time, and stop at the first step you could not do.",
        "You cannot plant before the hole is dug, so step 1 is in the right place. Check the other changes."
      ],
      how: [
        "Step 1 works: you dig the hole.",
        "Step 2 fills the hole with soil, but the seedling is not in it yet. Then step 3 has nowhere to put it.",
        "The answer is \"Move step 3 before step 2, because the seedling must be in the hole before the soil goes in.\""
      ],
      why: "The answer is \"Move step 3 before step 2, because the seedling must be in the hole before the soil goes in.\" The seedling has to go in first, and then the soil fills in around it. The hole must be dug first, and watering comes last." },
    { id: "SK-TT2b-S02", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.b"], passages: [],
      like: ["SK-TT2b-C05", "SK-TT2b-C07"],
      stem: ["In 1905, the streets of Maple Grove were dirt. After every rain, wagons sank deep in the mud, and farmers could not bring their crops to town. So in 1908, the town paved Main Street with red bricks. After that, wagons rolled through even in wet weather, and new shops opened along the street."],
      prompt: "What caused the town to pave Main Street with bricks?",
      choices: [
        { text: "Wagons sank in the mud, so farmers could not get their crops to town.", correct: true },
        { text: "New shops on Main Street wanted the street to look red." },
        { text: "The bricks were left over after the new shops were built." },
        { text: "Too many wagons crowded Main Street, so the town wanted a wider road." }
      ],
      clue: "A cause happens first. Look for a signal word that links the problem to what the town did.",
      hints: [
        "A cause happens first. Look for a signal word that links the problem to what the town did.",
        "Find the sentence that tells what the town did. Then look before it and after it for the reason.",
        "The new shops opened after the street was paved, so they cannot be the cause. Check the other choices."
      ],
      how: [
        "The sentence about the bricks begins with So, which means it is an effect.",
        "The sentence before it tells the cause: wagons sank in the mud, and farmers could not bring their crops to town.",
        "The answer is \"Wagons sank in the mud, so farmers could not get their crops to town.\""
      ],
      why: "The answer is \"Wagons sank in the mud, so farmers could not get their crops to town.\" The word So shows that paving the street was the town's answer to the mud. The shops opened after the paving, nothing says the bricks were left over, and the text says the wagons sank in mud, not that the street was crowded." },
    { id: "SK-TT2b-S03", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.b"], passages: [],
      like: ["SK-TT2b-C14"],
      stem: ["Heat moves from hot things to cooler things. If you leave a metal spoon in a bowl of hot soup, heat moves from the soup into the spoon. The heat travels up the metal, so after a few minutes the handle feels warm. Heat does not move through wood as easily, so a wooden spoon's handle stays cooler."],
      prompt: "Why does the handle of the metal spoon get warm?",
      choices: [
        { text: "Heat moves from the soup into the metal and travels up to the handle.", correct: true },
        { text: "The handle gets warm first, and then it heats up the soup." },
        { text: "The wooden spoon sends its heat into the metal spoon." },
        { text: "The soup cools down because the metal spoon is cold." }
      ],
      clue: "In a cause-and-effect chain, follow the heat one step at a time.",
      hints: [
        "In a cause-and-effect chain, follow the heat one step at a time.",
        "Find where the heat starts and where it goes next.",
        "The soup is hot first, so the handle cannot heat the soup. Check the other choices."
      ],
      how: [
        "Heat moves from hot things to cooler things, so it moves from the hot soup into the spoon.",
        "It travels up the metal to the handle.",
        "The answer is \"Heat moves from the soup into the metal and travels up to the handle.\""
      ],
      why: "The answer is \"Heat moves from the soup into the metal and travels up to the handle.\" The heat starts in the soup and moves up the metal. The handle does not heat the soup, the wooden spoon is a different spoon, and the text does not say the soup cools because of the spoon." },
    /* SIM-2 (expansion 2026-10-23): one extra question per core item that had none in a full sitting.
       Each like names one core item only, because the engine uses an extra question once.
       Log: docs/expansion-2026-10-22/batches/SIM-2-author-log.md. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TT2b-S04", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.2.b"], passages: [],
      like: ["SK-TT2b-P4"],
      stem: ["When you heat water in a kettle, it gets hotter and hotter. At last it boils, and some of it turns into steam. Steam takes up much more room than water. The steam needs a way out, so it rushes up the spout. On top of the spout is a whistle with a tiny hole. As the steam squeezes through the hole, the air shakes very fast. That shaking makes a high, loud sound. Now you know the water is ready."],
      prompt: "Use the text. Choose the signal words that best complete the sentences.",
      text: "The steam needs a way out. {0} it rushes up the spout. The air in the whistle shakes very fast. {1} you hear a loud sound.",
      slots: [
        { options: ["As a result,", "Before that,", "In spite of this,"], answer: 0 },
        { options: ["Meanwhile,", "Because of this,", "Instead,"], answer: 1 }
      ],
      clue: "Signal words show how ideas connect. Some show that one thing makes the next thing happen. Others show time or a surprise.",
      hints: [
        "Signal words show how ideas connect. Some show that one thing makes the next thing happen. Others show time or a surprise.",
        "For each pair of sentences, find the same idea in the text. Ask whether the second sentence happens because of the first.",
        "In the second pair, the shaking air and the sound do not just happen at the same time, because one makes the other. Use that test on the other words."
      ],
      how: [
        "The steam needs a way out, and that makes it rush up the spout. The second sentence is the effect, so the first blank is \"As a result,\".",
        "The air shaking makes the loud sound. The sound is the effect again, so the second blank is \"Because of this,\".",
        "The answers are \"As a result,\" and \"Because of this,\". Before that and meanwhile tell about time, and in spite of this and instead show a surprise or a switch."
      ],
      misconception: "A common mix-up is choosing a word that tells about time when the text tells about cause and effect.",
      why: "The answers are \"As a result,\" and \"Because of this,\". Needing a way out makes the steam rush up the spout, and the shaking air makes the loud sound. Words like before that and meanwhile tell about time, and in spite of this and instead show a surprise or a switch." },
    { id: "SK-TT2b-S05", type: "hottext", points: 1, dok: 2, std: ["3.T.T.2.b"], passages: ["p6"],
      like: ["SK-TT2b-C02"],
      prompt: "Which sentence tells what happens to the beans just before they are roasted? Choose the sentence in the passage.",
      targets: ["p6:2:2", "p6:3:2", "p6:4:1", "p6:4:3", "p6:5:2", "p6:5:3"],
      answer: ["p6:4:3"], pick: 1,
      clue: "Many processes happen in stages. Find the stage the question names, then look at what comes right before it.",
      hints: [
        "Many processes happen in stages. Find the stage the question names, then look at what comes right before it.",
        "Find the sentence that tells about roasting. The sentences around it tell the stages just before and just after.",
        "\"Their shells are cracked off\" happens at the factory after the roasting, so it is too late. Check which of the other sentences comes right before."
      ],
      how: [
        "Paragraph 5 says, \"At the factory, the beans are roasted in big ovens.\"",
        "The sentence right before it tells what happens to the beans just before they get to the factory.",
        "The answer is \"Dry beans are packed in sacks and shipped to a factory.\"",
        "Scooping, warming under the leaves and drying in the sun all happen earlier. Cracking the shells and grinding happen after the roasting."
      ],
      misconception: "A common mix-up is choosing a stage that comes right after, not right before.",
      why: "The answer is \"Dry beans are packed in sacks and shipped to a factory.\" It comes just before \"At the factory, the beans are roasted in big ovens.\" Scooping, warming and drying come earlier, and the shells and grinding come after the roasting." },
    { id: "SK-TT2b-S06", type: "ms", points: 2, dok: 1, std: ["3.T.T.2.b"], passages: [], pick: 3,
      stem: ["A cicada begins its life as a tiny egg in a tree branch. After about six weeks, a small young cicada hatches. It drops to the ground and digs down into the dirt. For many years, it lives underground and sips juice from tree roots. At last, it crawls out of the dirt and climbs up a tree trunk. Its old shell cracks open, and an adult with clear wings climbs out."],
      like: ["SK-TT2b-C03"],
      prompt: "Which THREE words or phrases from the paragraph help show the order in which things happen?",
      choices: [
        { text: "After about six weeks", correct: true },
        { text: "For many years", correct: true },
        { text: "At last", correct: true },
        { text: "digs down" },
        { text: "clear wings" },
        { text: "from tree roots" }
      ],
      clue: "Time-order words tell when something happens. They are not the actions, and they do not tell what something looks like.",
      hints: [
        "Time-order words tell when something happens. They are not the actions, and they do not tell what something looks like.",
        "Read the paragraph one sentence at a time. For each choice, ask: does it tell when, or does it tell what happens? Choose three.",
        "\"Clear wings\" tells what the adult looks like, not when something happens. Check each other choice the same way."
      ],
      how: [
        "Time-order words tell when. Action words tell what happens.",
        "\"After about six weeks\" tells when the young cicada hatches. \"For many years\" tells how long it lives underground. \"At last\" tells that it finally comes out.",
        "The answers are \"After about six weeks,\" \"For many years\" and \"At last.\"",
        "\"Digs down\" is an action, \"clear wings\" describes the adult, and \"from tree roots\" tells where the juice comes from."
      ],
      misconception: "A common mix-up is choosing an action word. Time-order words tell when, not what happens.",
      why: "The answers are \"After about six weeks,\" \"For many years\" and \"At last.\" Each one tells when something happens. \"Digs down\" is an action, \"clear wings\" describes the adult, and \"from tree roots\" tells where." },
    { id: "SK-TT2b-S07", type: "order", points: 2, dok: 2, std: ["3.T.T.2.b"], passages: [],
      like: ["SK-TT2b-C06"],
      stem: ["Long ago, there was no bridge across the Golden Gate, the strip of water between San Francisco and the land to the north. People crossed by ferry boat. In 1933, workers began to build a bridge. First, they built two tall towers, one near each shore. Next, they spun two huge cables from the top of one tower to the other. Each cable was made of thousands of thin wires. Then they hung the road from the cables. In May 1937, the Golden Gate Bridge opened. On the first day, about 200,000 people walked across it."],
      prompt: "Put these events in the order they happened, from first to last.",
      steps: [
        "People cross the water only by ferry boat.",
        "Workers begin building the bridge.",
        "Workers build two tall towers.",
        "Workers spin cables between the towers.",
        "Crowds walk across the new bridge."
      ],
      clue: "In a series of historical events, look for dates and time words like long ago, first, next and then.",
      hints: [
        "In a series of historical events, look for dates and time words like long ago, first, next and then.",
        "Find each event in the text and the date or time word near it.",
        "The cables run from the top of one tower to the other, so the towers had to be built before the cables. Put the other events in order the same way."
      ],
      how: [
        "Long ago, people crossed only by ferry. In 1933, workers began the bridge.",
        "First they built the towers. Next they spun the cables between them.",
        "In May 1937, the bridge opened, and crowds walked across.",
        "So the order is: ferry, building begins, towers, cables, crowds walk across."
      ],
      misconception: "A common mix-up is guessing the order from what seems likely. Use the dates and the time words.",
      why: "The order is: people cross the water only by ferry boat, workers begin building the bridge, workers build two tall towers, workers spin cables between the towers, and crowds walk across the new bridge. The text gives long ago, 1933, first, next and May 1937." },
    { id: "SK-TT2b-S08", type: "ebsr", points: 2, dok: 2, std: ["3.T.T.2.b"], passages: ["p7"],
      like: ["SK-TT2b-C07"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Why was Ford able to lower the price of the Model T?",
        choices: [
          { text: "His factory could build each car faster, so it cost less to make.", correct: true },
          { text: "Rich families stopped wanting to buy any cars at all, so prices fell." },
          { text: "His company made the cars much bigger and fancier than before." },
          { text: "Each worker learned to do many different jobs on every car." }
        ] },
      partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
        choices: [
          { text: "\"Because the cars were faster to build, they cost less to make.\"", correct: true },
          { text: "\"In 1908, his company began selling a strong, simple car called the Model T.\"" },
          { text: "\"Building one car took more than twelve hours.\"" },
          { text: "\"By 1927, more than 15 million Model T cars had been sold.\"" }
        ] },
      clue: "A cause is why something happens. Ask what changed in how the cars were made before the price went down.",
      hints: [
        "A cause is why something happens. Ask what changed in how the cars were made before the price went down.",
        "Reread paragraphs 3 to 5. Follow how the building of a car changed. For Part B, choose one sentence.",
        "The article says the Model T was strong and simple, never bigger and fancier, so that reason does not fit. For Part B, the sentence you choose must match your Part A answer."
      ],
      how: [
        "Paragraph 4 says the assembly line let a car be built in about an hour and a half instead of more than twelve hours.",
        "Paragraph 5 says that because the cars were faster to build, they cost less to make, so Ford lowered the price.",
        "Part A: His factory could build each car faster, so it cost less to make. Part B: \"Because the cars were faster to build, they cost less to make.\"",
        "The article never says rich families stopped buying cars, and on the assembly line each worker did just one job."
      ],
      misconception: "A common mix-up is choosing a sentence that tells when something happened or how many were sold, instead of why.",
      why: "Part A: His factory could build each car faster, so it cost less to make. Part B: \"Because the cars were faster to build, they cost less to make.\" The next sentence begins with So and tells that Ford lowered the price. The car was simple, each worker did one job, and the sales came after the price went down." },
    { id: "SK-TT2b-S09", type: "match", points: 2, dok: 2, std: ["3.T.T.2.b"], passages: [],
      like: ["SK-TT2b-C08"],
      stem: ["Wilbur and Orville Wright ran a bike shop in Dayton, Ohio. They read about people trying to fly, and they wanted to try, too. First, they built gliders, planes with no engine. They tested the gliders on the windy sand hills of Kitty Hawk, North Carolina. Many tests did not go well, so they built a wind tunnel to test wing shapes. Then they built a plane with an engine. On December 17, 1903, Orville flew it for 12 seconds. A plane with an engine had carried a person through the air! Later that same day, Wilbur flew the plane for almost a minute. Later, the brothers built better planes that could stay up for half an hour."],
      prompt: "Did each event happen before or after the first flight with an engine? Match each event to the right time.",
      cols: ["Before the first engine flight", "After the first engine flight"],
      rows: [
        { text: "The brothers test gliders at Kitty Hawk.", answer: 0 },
        { text: "The brothers build a wind tunnel.", answer: 0 },
        { text: "Wilbur flies the plane for almost a minute.", answer: 1 },
        { text: "The brothers build planes that stay up for half an hour.", answer: 1 }
      ],
      clue: "Dates and time words like first, then and later show when events happen. Find the first engine flight, then sort each event.",
      hints: [
        "Dates and time words like first, then and later show when events happen. Find the first engine flight, then sort each event.",
        "Find the sentence with the date of the first engine flight. Then decide whether each event is told before it or after it, and check its time word.",
        "Testing the gliders happens before the brothers even build a plane with an engine, so it goes before. Sort the other three the same way."
      ],
      how: [
        "The first engine flight is on December 17, 1903.",
        "Before that, the brothers test gliders at Kitty Hawk, and when tests go badly they build a wind tunnel. Then they build the plane.",
        "After the flight, later that same day, Wilbur flies the plane for almost a minute. Later still, the brothers build planes that stay up for half an hour."
      ],
      misconception: "A common mix-up is sorting by what seems most important instead of by when it happened.",
      why: "Before the first engine flight, the brothers tested gliders at Kitty Hawk and built a wind tunnel. After the flight on December 17, 1903, Wilbur flew the plane for almost a minute that same day, and later the brothers built planes that could stay up for half an hour." },
    { id: "SK-TT2b-S10", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.b"], passages: [],
      like: ["SK-TT2b-C09"],
      stem: ["In the early 1800s, it was slow and hard to move goods from the Great Lakes to New York City. Wagons bumped along muddy roads for weeks. Governor DeWitt Clinton had a plan: dig a long canal, a river made by people, across New York State. Many people laughed at the idea. They called it \"Clinton's Ditch\" and said it was a waste of money. Clinton kept pushing for his plan. Workers dug for eight years, mostly with shovels and horses. In 1825, the Erie Canal opened. Boats pulled by mules could now carry goods much faster and for much less money."],
      prompt: "Why does the author tell that many people laughed at Clinton's plan?",
      choices: [
        { text: "to show that Clinton kept going when others laughed", correct: true },
        { text: "to show that the canal was never finished after all" },
        { text: "to show that most people liked the muddy roads better" },
        { text: "to show that the workers did not want to dig the canal" }
      ],
      clue: "In a series of events, one event can set up the next. Ask what happens right after people laugh at the plan.",
      hints: [
        "In a series of events, one event can set up the next. Ask what happens right after people laugh at the plan.",
        "Keep reading after people laugh, and follow what happens to the plan.",
        "The canal opened in 1825, so it was finished. Test the other choices against what comes next."
      ],
      how: [
        "People laugh, call the plan \"Clinton's Ditch\" and say it is a waste of money.",
        "The next sentence says Clinton kept pushing for his plan. Workers dig, and the canal opens in 1825.",
        "The answer is \"to show that Clinton kept going when others laughed.\"",
        "The canal was finished, the roads were slow and muddy, and the text never says the workers did not want to dig."
      ],
      misconception: "A common mix-up is reading one event by itself. Ask how it connects to the event that comes next.",
      why: "The answer is \"to show that Clinton kept going when others laughed.\" Right after people laugh, Clinton keeps pushing, and the canal opens. The canal was finished, the roads were the problem, and nothing says the workers did not want to dig." },
    { id: "SK-TT2b-S11", type: "hottext", points: 1, dok: 2, std: ["3.T.T.2.b"], passages: ["p8"],
      like: ["SK-TT2b-C10"],
      prompt: "The author says that many people gave money for the base. Which sentence tells what made so many people want to give? Choose the sentence in the passage.",
      targets: ["p8:2:2", "p8:3:2", "p8:4:1", "p8:4:2", "p8:4:3", "p8:4:4"],
      answer: ["p8:4:2"], pick: 1,
      clue: "An effect needs a cause. Ask what someone did that would make people want to give money.",
      hints: [
        "An effect needs a cause. Ask what someone did that would make people want to give money.",
        "Reread paragraphs 3 and 4. Which sentences tell about the people who gave, and which tell about something done before they gave?",
        "\"In five months, more than 120,000 people gave money\" tells how many people gave, not what made them want to. Check the sentences that are left."
      ],
      how: [
        "The builders had run out of money, so the base needed gifts.",
        "Pulitzer's newspaper promised to print the name of every person who gave, even for a penny. That made giving something anyone could do and be proud of.",
        "The answer is \"His newspaper promised to print the name of every person who gave money, even if the gift was only a penny.\"",
        "Pulitzer wanting to help is not yet something he did, the coins and the 120,000 people are the effect, and the crates and the lack of money do not make anyone give."
      ],
      misconception: "A common mix-up is choosing the effect itself, like the number of people who gave, instead of what caused it.",
      why: "The answer is \"His newspaper promised to print the name of every person who gave money, even if the gift was only a penny.\" That promise is what got so many people to give. The coins and the 120,000 people are the effect, and wanting to help, the lack of money and the crates are not the cause." },
    { id: "SK-TT2b-S12", type: "order", points: 2, dok: 2, std: ["3.T.T.2.b"], passages: [],
      like: ["SK-TT2b-C11"],
      stem: ["How to Make a Paper Plate Sundial", "You can tell time with the sun! First, poke a pencil through the middle of a paper plate. Next, take the plate outside to a sunny spot early in the morning. Tape it down flat so the wind cannot move it, and make sure the pencil stands straight up. When the clock says 9:00, look for the pencil's shadow and draw a line on it. Then come back every hour and draw a new line. At the end of the day, use your lines to tell the time."],
      prompt: "Put the steps for making a sundial in order, from first to last.",
      steps: [
        "Poke a pencil through the middle of a paper plate.",
        "Tape the plate down in a sunny spot.",
        "Draw a line on the pencil's shadow at 9:00.",
        "Come back each hour and draw a new line.",
        "Use the lines to tell the time."
      ],
      clue: "Steps in a procedure use time words like first, next, then and at the end. Each step gets things ready for the next one.",
      hints: [
        "Steps in a procedure use time words like first, next, then and at the end. Each step gets things ready for the next one.",
        "Find the time word or the clock time that goes with each step.",
        "The plate has to be taped down outside before you can draw on any shadow, so taping comes before the 9:00 line. Put the other steps in order the same way."
      ],
      how: [
        "First, poke the pencil through the plate. Next, tape the plate down in a sunny spot.",
        "At 9:00, draw a line on the shadow. Then come back every hour and draw a new line.",
        "At the end of the day, use the lines to tell the time.",
        "So the order is: poke the pencil, tape the plate, draw the 9:00 line, draw a new line each hour, use the lines."
      ],
      misconception: "A common mix-up is putting a step before the step that gets it ready, like drawing a line before the plate is outside.",
      why: "The order is: poke a pencil through the middle of a paper plate, tape the plate down in a sunny spot, draw a line on the pencil's shadow at 9:00, come back each hour and draw a new line, and use the lines to tell the time." },
    { id: "SK-TT2b-S13", type: "dropdown", points: 1, dok: 2, std: ["3.T.T.2.b"], passages: [],
      like: ["SK-TT2b-C12"],
      stem: ["How to Make a Jar Garden: First, put a layer of small rocks in the bottom of a clean jar. The rocks let extra water drain away from the roots. Next, spread a thick layer of soil over the rocks. Then dig small holes and plant tiny plants, like moss and ferns. Finally, sprinkle a little water on the plants and close the lid.", "Rosa made a card to help her remember the directions. It shows steps 1 to 3:", "1. Put small rocks in the jar.", "2. ________", "3. Plant the tiny plants."],
      prompt: "One step is missing from Rosa's card. Which step belongs in the blank?",
      text: "The missing step is: {0}",
      slots: [
        { options: ["Spread a layer of soil over the rocks.", "Sprinkle a little water on the plants.", "Close the lid on the jar."], answer: 0 }
      ],
      clue: "Each step in a procedure sets up the one after it. Ask what the step after the blank needs.",
      hints: [
        "Each step in a procedure sets up the one after it. Ask what the step after the blank needs.",
        "Compare Rosa's card with the directions, one step at a time, and find the gap.",
        "Closing the lid is the very last thing you do, so it cannot be step 2. Check the two choices that are left: could you do each one right after the rocks and before planting?"
      ],
      how: [
        "After the rocks go in, the plants need something to grow in, but rocks alone cannot hold them.",
        "The directions say to spread a thick layer of soil over the rocks next. Then you plant.",
        "The answer is \"Spread a layer of soil over the rocks.\"",
        "Watering and closing the lid both come at the end, after planting."
      ],
      misconception: "A common mix-up is choosing a real step from the wrong place in the procedure.",
      why: "The answer is \"Spread a layer of soil over the rocks.\" The plants need soil to grow in, so the soil must go in before planting. Watering and closing the lid come at the end." },
    { id: "SK-TT2b-S14", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.b"], passages: [],
      like: ["SK-TT2b-C13"],
      stem: ["How to Sprout an Avocado Pit", "Wash the pit so it is clean. Poke three toothpicks into its sides. Rest the toothpicks on the rim of a glass of water, so the bottom half of the pit sits in the water. Put the glass in a warm, sunny window. Add water every few days, because the bottom of the pit must stay wet. In a few weeks, roots will grow down and a stem will grow up."],
      prompt: "What would most likely happen if someone skipped adding water every few days?",
      choices: [
        { text: "The water would get low, the pit would dry out, and roots might not grow.", correct: true },
        { text: "The toothpicks would slide out of the pit and fall in the glass." },
        { text: "The pit would grow so fast that it would tip the glass over." },
        { text: "The stem would grow down into the glass instead of up." }
      ],
      clue: "In a procedure, many steps have a reason. Words like so and because often tell why a step matters.",
      hints: [
        "In a procedure, many steps have a reason. Words like so and because often tell why a step matters.",
        "Read each step and any reason that goes with it. Ask what each step does for the pit.",
        "Adding water has nothing to do with the toothpicks, so they would not slide out. Test the other results: which one could really happen?"
      ],
      how: [
        "The directions say to add water because the bottom of the pit must stay wet.",
        "Without new water, the glass would slowly empty, and the pit would dry out. A dry pit may not grow roots.",
        "The answer is \"The water would get low, the pit would dry out, and roots might not grow.\"",
        "The toothpicks hold the pit no matter how much water there is, less water would not make it grow faster, and nothing makes the stem grow down."
      ],
      misconception: "A common mix-up is picking a result that has nothing to do with the skipped step. Use the reason the text gives.",
      why: "The answer is \"The water would get low, the pit would dry out, and roots might not grow.\" The directions say the bottom of the pit must stay wet. Skipping the water would not move the toothpicks, speed up growing, or turn the stem around." },
    { id: "SK-TT2b-S15", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.b"], passages: [],
      like: ["SK-TT2b-C15"],
      stem: ["Text 1: How to Make a Braille Name Card. First, look at a Braille chart to find the dots for each letter of your name. Next, draw those dots on a card with a pencil. Then put a drop of white glue on each dot, and let the glue dry hard. Last, close your eyes and feel your name.", "Text 2: Louis Braille. Louis Braille lost his sight when he was three years old. At ten, he went to a school for blind children in Paris. The books there had big raised letters, and they were slow to read. When he was fifteen, Louis made a new code of raised dots. Later, his code was used around the world."],
      prompt: "How is the way Text 1 tells its ideas different from the way Text 2 tells its ideas?",
      choices: [
        { text: "Text 1 tells the reader what to do, and Text 2 tells what one person did long ago.", correct: true },
        { text: "Text 1 tells what one person did long ago, and Text 2 tells the reader what to do." },
        { text: "Both texts tell what Louis Braille did, in the order he did it." },
        { text: "Text 1 uses time words, but Text 2 does not use any time words." }
      ],
      clue: "Some texts tell steps you can do yourself. Others tell events from the past. Both kinds can use time words.",
      hints: [
        "Some texts tell steps you can do yourself. Others tell events from the past. Both kinds can use time words.",
        "Look at the verbs in each text. Are they telling you what to do, or telling what someone did?",
        "Text 2 uses words like at ten, when he was fifteen and later, so it does use time words. Check the other choices against both texts."
      ],
      how: [
        "Text 1 tells the reader what to do: look at a chart, draw the dots, put on glue, feel your name.",
        "Text 2 tells what Louis Braille did long ago, from the age of three to fifteen and later.",
        "The answer is \"Text 1 tells the reader what to do, and Text 2 tells what one person did long ago.\"",
        "One choice has the texts backward, Text 1 never tells what Louis did, and Text 2 uses time words too."
      ],
      misconception: "A common mix-up is thinking any text with time words is a set of steps. A life story also goes in time order.",
      why: "The answer is \"Text 1 tells the reader what to do, and Text 2 tells what one person did long ago.\" Text 1 gives steps for you, and Text 2 tells Louis Braille's life in time order. Both use time words, and only Text 2 is about Louis." }
  ],
  /* Hints and Show me how for the ref (P4) and for Practice Together (P1, P2, P3, P5, P6). */
  addons: {
    "SK-TT2b-P1": {
      hints: [
        "Use the signal words and the paragraph order. The article starts at the very beginning of a monarch's life.",
        "Each paragraph tells one stage. Read the first sentence of each paragraph to keep track.",
        "The mother lays the egg before anything else can happen, so that step comes first. Put the other four in order the same way."
      ],
      how: [
        "Paragraph 1: the mother lays an egg on milkweed. Paragraph 2: a caterpillar hatches and eats its eggshell.",
        "Paragraph 3: it sheds its tight skin several times. Paragraph 5: its new skin hardens into a chrysalis.",
        "Paragraph 6: a butterfly climbs out and waits for its wings to dry."
      ] },
    "SK-TT2b-P2": {
      hints: [
        "The question asks why. Look for a signal word that points to a cause.",
        "Think about what a caterpillar needs as soon as it hatches. Then check what the article says her babies can eat.",
        "The article never says milkweed keeps eggs warm, so that reason does not fit. Check the other reasons against the article."
      ],
      how: [
        "Paragraph 1 says she chooses milkweed because it is the only kind of plant her babies can eat.",
        "The word because points to the cause.",
        "The answer is \"Milkweed is the only kind of plant her caterpillars can eat.\"",
        "The article does not say milkweed keeps eggs warm, hides them from birds or has the most flowers."
      ] },
    "SK-TT2b-P3": {
      hints: [
        "Follow the chain one link at a time: the leaves, the poison, the caterpillar, and then what happens next.",
        "Follow the poison from the leaf into the caterpillar's body. What does it do there, and what happens because of that?",
        "The article says the poison does not hurt the caterpillar, so it does not get sick. For Part B, the sentence must explain why your Part A answer happens."
      ],
      how: [
        "The leaves have poison. It stays in the caterpillar's body and makes it taste bad.",
        "Part A: Many birds will not eat monarchs.",
        "Part B: \"Instead, it stays in the caterpillar's body and makes it taste bad.\" The bad taste is why birds leave monarchs alone.",
        "The poison does not hurt the caterpillar, and the other sentences are about other stages."
      ],
      misconception: "A common mix-up is choosing a sentence that is true but explains a different stage of the monarch's life." },
    "SK-TT2b-P4": {
      hints: [
        "In each sentence, decide which part is the cause and which part is the effect.",
        "So comes before an effect. Because comes before a cause. Try each word in the blank and read the sentence aloud.",
        "In the first sentence, eating a lot happens first and growing fast comes after it. Work out the second blank the same way."
      ],
      how: [
        "First sentence: eating a lot is the cause, and growing fast is the effect. So comes before an effect, so the word is so.",
        "Second sentence: the skin not growing is the cause of the skin getting too tight. Because comes before a cause, so the word is because.",
        "The answers are so and because."
      ],
      misconception: "A common mix-up is flipping the cause and the effect when the effect comes first in the sentence." },
    "SK-TT2b-P5": {
      hints: [
        "For each cause, ask, \"So what happens next?\"",
        "Find each cause in the article, then read the sentence after it.",
        "When the skin gets too tight, the caterpillar wiggles out of the old skin. Match the other two causes the same way."
      ],
      how: [
        "Paragraph 3: when the skin gets too tight, the caterpillar wiggles out of the old skin.",
        "Paragraph 4: because the monarch tastes bad, many birds leave it alone.",
        "Paragraph 6: because its wings are wet, the butterfly waits before flying."
      ] },
    "SK-TT2b-P6": {
      hints: [
        "Signal words like first, then and next tell the order of events.",
        "Find the paragraph where the caterpillar hatches. Read its sentences in order.",
        "The hatching itself is not something the caterpillar does after it hatches, so skip that sentence. Check the other sentences in that paragraph for a signal word."
      ],
      how: [
        "Paragraph 2 says a caterpillar hatches from the egg.",
        "The next sentence starts with the signal word First: it eats its own eggshell. Then it munches on milkweed.",
        "The answer is \"First, it eats its own eggshell.\""
      ] }
  },
  test: [
    { id: "SK-TT2b-T1", type: "order", points: 2, dok: 2, passages: ["p2"],
      prompt: "Put the steps of the water cycle in order.",
      steps: [
        "Water from a lake rises into the air as water vapor.",
        "A cloud forms high in the sky.",
        "The drops in the cloud grow bigger.",
        "Rain falls to the ground.",
        "Rain runs into streams and rivers."
      ],
      clue: "Each step has to happen before the next one can. Follow the water from the ground, up to the sky, and back down again.",
      why: "The order is: water from a lake rises into the air as water vapor, a cloud forms high in the sky, the drops in the cloud grow bigger, rain falls to the ground, and rain runs into streams and rivers. Paragraphs 2 to 5 tell these steps in this order." },
    { id: "SK-TT2b-T2", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "What causes water vapor to turn back into tiny drops of water?",
      choices: [
        { text: "The air high in the sky is cooler.", correct: true },
        { text: "The sun heats the water in a lake." },
        { text: "The drops bump into one another." },
        { text: "Some of the rain soaks into the ground." }
      ],
      clue: "Find where the article tells about water vapor turning into drops. What change happens to the vapor there?",
      why: "The answer is \"The air high in the sky is cooler.\" Paragraph 3 says the air high in the sky is cooler, and when water vapor cools, it turns back into tiny drops. The sun's heat does the opposite: it turns water into vapor." },
    { id: "SK-TT2b-T3", type: "ebsr", points: 2, dok: 3, passages: ["p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Why do drops of water fall out of a cloud?",
        choices: [
          { text: "They join together until they are too heavy to float.", correct: true },
          { text: "The sun warms them until they turn into a gas again." },
          { text: "The air around them becomes warmer and lighter." },
          { text: "The water vapor in the cloud pushes them downward." }
        ] },
      partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
        choices: [
          { text: "\"When they become too heavy to float, they fall to the ground as rain.\"", correct: true },
          { text: "\"The drops are so small and light that they float in the air.\"" },
          { text: "\"High in the sky, the air is cooler.\"" },
          { text: "\"Some of the rain soaks into the ground.\"" }
        ] },
      clue: "Read paragraph 4. Follow what happens to the drops, one change at a time, until they fall.",
      why: "Part A: They join together until they are too heavy to float. Part B: \"When they become too heavy to float, they fall to the ground as rain.\" The drops float while they are small and light. Joining together makes them heavy, and that causes them to fall." },
    { id: "SK-TT2b-T4", type: "dropdown", points: 1, dok: 2, passages: ["p2"],
      prompt: "Choose the word that best completes the sentence.",
      text: "A puddle dries up on a sunny day {0} the sun's heat changes some of the water into water vapor.",
      slots: [
        { options: ["because", "before", "but"], answer: 0 }
      ],
      clue: "Which part of the sentence is the cause, and which is the effect? Choose the word that joins an effect to its cause.",
      why: "The answer is \"because.\" The sun's heat changing water into vapor is the cause, and the puddle drying up is the effect. Paragraph 2 says this is why a puddle dries up on a sunny afternoon." },
    { id: "SK-TT2b-T5", type: "mc", points: 1, dok: 3, passages: ["p2"],
      prompt: "How does the last paragraph connect to paragraph 2?",
      choices: [
        { text: "It shows the cycle starts over when the sun warms the water again.", correct: true },
        { text: "It shows that water vapor is invisible, so you cannot see it rise." },
        { text: "It shows that clouds are made of millions of tiny drops of water." },
        { text: "It shows that cold air can make water fall as snow instead of rain." }
      ],
      clue: "Paragraph 2 tells how the trip begins. Read the last sentence of the article. What does it say happens next?",
      why: "The answer is \"It shows the cycle starts over when the sun warms the water again.\" Paragraph 2 says the trip begins when the sun warms the water. The last paragraph brings the water back to that same step, so the trip goes around and around." }
  ],
  /* PP-004 form B of the skill check (formB-info). Same code, points (7) and DOK mix as form A,
     on the new passage p3 (a series of historical events and the steps of a procedure, where
     form A used a science process). NEEDS INDEPENDENT REVIEW; see docs/audits/work/pp004-formB-formB-info.md. */
  testB: [
    { id: "SK-TT2b-TB1", type: "order", points: 2, dok: 2, passages: ["p3"],
      prompt: "Put the steps for moving the mail in order, from the first step to the last.",
      steps: [
        "The letters are locked in a leather cover that fits over a saddle.",
        "A rider races to the next station.",
        "The rider moves the leather cover onto a fresh horse.",
        "The rider hands the mail to a new rider."
      ],
      clue: "Paragraph 3 tells the steps. Look for the signal words First and Next, and think about what must happen before the next step can.",
      why: "The order is: the letters are locked in a leather cover, a rider races to the next station, the rider moves the cover onto a fresh horse, and then the rider hands the mail to a new rider. Paragraph 3 tells these steps in this order. A rider changed horses at many stations, but he handed off the mail only after 75 to 100 miles." },
    { id: "SK-TT2b-TB2", type: "mc", points: 1, dok: 2, passages: ["p3"],
      prompt: "Why did a Pony Express rider jump onto a fresh horse at each station?",
      choices: [
        { text: "A horse got tired after running hard for 10 to 15 miles.", correct: true },
        { text: "Each station had its own mail that needed a new horse." },
        { text: "The leather cover could only fit on one kind of saddle." },
        { text: "The rider had to stop and rest for a day at each station." }
      ],
      clue: "Find the sentence about the fresh horse. Then read the sentence right before it. What made the rider need a new horse?",
      why: "The answer is \"A horse got tired after running hard for 10 to 15 miles.\" Paragraph 3 says the stations were about 10 to 15 miles apart and a horse gets tired after a hard run like that, so the rider jumped onto a fresh horse. The article says the rider moved the cover to the new saddle in about two minutes and kept going, so he did not rest for a day." },
    { id: "SK-TT2b-TB3", type: "ebsr", points: 2, dok: 3, passages: ["p3"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "What caused the Pony Express to close?",
        choices: [
          { text: "A telegraph line could send news much faster than riders could.", correct: true },
          { text: "The leather covers were too small to hold many letters." },
          { text: "Families stopped moving west to live in California." },
          { text: "The stations were too far apart for the riders to reach." }
        ] },
      partB: { prompt: "Which sentence from the article best supports the answer to Part A?",
        choices: [
          { text: "\"A telegraph sends messages through wires in just minutes.\"", correct: true },
          { text: "\"The first riders set out in April 1860.\"" },
          { text: "\"The stations were about 10 to 15 miles apart.\"" },
          { text: "\"They rode from St. Joseph, Missouri, to Sacramento, California.\"" }
        ] },
      clue: "Read paragraph 5. Find what workers were putting up at the same time. How long did it take to pass along a message? Then find the sentence that tells that.",
      why: "Part A: A telegraph line could send news much faster than riders could. Part B: \"A telegraph sends messages through wires in just minutes.\" Riders took about 10 days, but the telegraph took minutes. Once the line was finished, people did not need riders, so the Pony Express closed. The article never says the covers were too small, that families stopped moving west, or that riders could not reach the stations." },
    { id: "SK-TT2b-TB4", type: "dropdown", points: 1, dok: 2, passages: ["p3"],
      prompt: "Use paragraph 4. Choose the word that best completes the sentence.",
      text: "The riders changed horses at every station, {0} the mail never had to slow down.",
      slots: [
        { options: ["so", "but", "until"], answer: 0 }
      ],
      clue: "Which part happened first and made the other part happen? Choose the word that comes before an effect.",
      why: "The answer is \"so.\" Changing horses is the cause, and the mail never slowing down is the effect. So comes right before an effect. But would mean the two ideas do not go together, and until would mean the riders stopped changing horses at some point." },
    { id: "SK-TT2b-TB5", type: "mc", points: 1, dok: 3, passages: ["p3"],
      prompt: "Which sentence best explains how the ideas in paragraph 1 and paragraph 4 are connected?",
      choices: [
        { text: "Paragraph 1 tells that mail was slow, and paragraph 4 shows how the Pony Express made it faster.", correct: true },
        { text: "Paragraph 1 tells why the Pony Express closed, and paragraph 4 tells what came after it." },
        { text: "Paragraph 1 tells about ships, and paragraph 4 tells why ships were faster than horses." },
        { text: "Paragraph 1 tells about the telegraph, and paragraph 4 tells how the telegraph was built." }
      ],
      clue: "Say what paragraph 1 is about in a few words. Then say what paragraph 4 is about. Compare the time a letter took in each one.",
      why: "The answer is \"Paragraph 1 tells that mail was slow, and paragraph 4 shows how the Pony Express made it faster.\" In paragraph 1, a letter took more than three weeks by stagecoach. In paragraph 4, a letter could cross the West in about 10 days. The closing and the telegraph are in paragraph 5, and the article never says ships were faster than horses." }
  ]
});

PP.addLesson({
  code: "3.T.T.2.c",
  title: "Putting together information from two texts",
  clues: {
    words: ["both", "alike", "same", "but", "however", "unlike", "different", "while"],
    ask: "How are they the same? How are they different?",
    draw: "Three columns: Text 1 only | Both | Text 2 only. Or a Venn diagram, two overlapping circles."
  },
  coach: {
    mixup: "Children often use facts from only one text, or forget which text a fact came from. Ask: \"Which text told us that? What did the other one add?\"",
    strong: "\"Both texts are about beavers. Text 1 tells how they cut wood with their teeth, and Text 2 tells what they build with it.\" One way alike, one way different, with a clue word.",
    notyet: "Facts about only one text, or only differences. Ask: \"What do they BOTH tell us?\"",
    ido: "Hold up two things, like a fork and a spoon. Say, \"Both are for eating. But a fork has points and a spoon is round.\"",
    wedo: "Read two short articles on the same topic together. Sort each fact into Text 1 only, Both, or Text 2 only.",
    youdo: "Your child answers a question that needs facts from both texts and says which text each fact came from. Check it afterward, not while they work.",
    everyday: "Read two short things about the same subject, like a library book and a kids' magazine article. Ask for one thing both tell and one thing only one tells."
  },
  teach: {
    big: "When two texts are about the same topic, each one teaches you something, and putting them together teaches you even more.",
    points: [
      "First, read each text and find what it is mostly about.",
      "Next, look for information that both texts give. That is how they are alike. Clue words like both, alike and same show this.",
      "Then look for information that only one text gives. That is how they are different, and it adds to what you know. Clue words like but, however, unlike, different and while show a difference.",
      "Last, put the facts from both texts together to answer a question that one text alone cannot answer.",
      "Always check which text a fact came from. Test questions often ask about one text or the other. For each fact, ask: Is it in Text 1? Is it in Text 2? Is it in both, even in different words?"
    ],
    words: [
      { term: "alike", means: "the same in some way" },
      { term: "different", means: "not the same" },
      { term: "combine", means: "to put things together" }
    ],
    example: {
      label: "Example",
      lines: [
        "Text 1: Beavers have large front teeth that never stop growing. They use their teeth to chew through trees and cut branches.",
        "Text 2: Beavers pile sticks and mud across a stream to build a dam. The dam makes a pond, where beavers build a home called a lodge."
      ],
      note: "Both texts are about beavers. Text 1 tells how beavers get wood. Text 2 tells what they build with wood. Together they teach more: beavers cut wood with their strong teeth and use it to build dams and homes."
    },
    tip: "On the test, you may read two passages and then answer \"What information is in both passages?\" or \"How does Passage 2 add to Passage 1?\" Make a quick list of what each passage teaches."
  },
  learn: [
    {
      show: [
        "Text 1: The moon does not make its own light. The light we see is sunlight bouncing off the moon.",
        "Text 2: The moon seems to change shape during the month. As the moon travels around Earth, we see different amounts of its sunny side."
      ],
      ask: "How do both texts help you know that the moon's light comes from the sun?",
      steps: [
        "Find what Text 1 says about light. It says the light is sunlight bouncing off the moon.",
        "Find what Text 2 says about light. It talks about the moon's sunny side, the side the sun shines on.",
        "Put the matching parts together."
      ],
      answer: "Text 1 says the moon's light is sunlight, and Text 2 agrees when it says we see the moon's sunny side."
    },
    {
      show: [
        "Text 1: In early spring, peach trees are covered with pink flowers. Each flower can grow into a peach.",
        "Text 2: Peaches are picked in summer, when they are ripe and sweet. Georgia is famous for its peaches and is called the Peach State."
      ],
      ask: "Using both texts, what happens to a peach tree from spring to summer?",
      steps: [
        "Find the part about spring. Only Text 1 tells about it: pink flowers that can grow into peaches.",
        "Find the part about summer. Only Text 2 tells about it: the ripe peaches are picked.",
        "Put the two parts in order to answer the question."
      ],
      answer: "In spring, the tree blooms with pink flowers, and in summer, the ripe peaches that grew from those flowers are picked."
    },
    {
      show: [
        "Text 1: Raccoons sleep in hollow trees during the day.",
        "Text 2: At night, raccoons search for food. They use their nimble front paws to feel for crayfish in streams."
      ],
      ask: "Which text tells when raccoons look for food? What do you learn by putting the two texts together?",
      steps: [
        "Check each text for the fact. Text 1 tells only about sleeping. Text 2 tells that raccoons search for food at night.",
        "Check what both texts share. Each one tells what raccoons do at a certain time of day.",
        "Put the parts together to answer a question that neither text answers alone: what does a raccoon's whole day look like?"
      ],
      answer: "Only Text 2 tells when raccoons look for food: at night. Together, the texts show that raccoons sleep in hollow trees during the day and hunt for food at night."
    }
  ],
  parent: "Read two short things about the same subject, like a library book and a kids' magazine article about sharks. Ask, \"What did both of them tell us? What did only one tell us?\"",
  passages: [
    { id: "p1", title: "Tiny Flyers", genre: "Informational text",
      paragraphs: [
        ["The ruby-throated hummingbird is the hummingbird that people see most often in Georgia.", "It is a very small bird.", "It weighs less than a nickel!"],
        ["Hummingbirds are amazing flyers.", "Their wings beat so fast that they look like a blur.", "The fast wings make a humming sound, which is how the bird got its name.", "A hummingbird can hover, or stay in one place in the air.", "It can even fly backward."],
        ["Hovering helps a hummingbird eat.", "It stays still in front of a flower and puts its long beak inside.", "Then it uses its long tongue to lap up the sweet nectar.", "Hummingbirds also eat tiny insects and spiders."],
        ["Flying so fast uses a lot of energy.", "That is why a hummingbird must eat many times every day."]
      ] },
    { id: "p2", title: "The Long Trip South", genre: "Informational text",
      paragraphs: [
        ["In spring and summer, hummingbirds zip around gardens all over Georgia.", "But when fall comes, they get ready for a long trip."],
        ["Before they leave, the birds eat and eat.", "They drink extra nectar and catch extra insects.", "Their bodies store the extra food as fat.", "The fat gives them energy for the journey."],
        ["Then they fly south to Mexico and Central America.", "It stays warm there all winter.", "Many of them fly across the Gulf of Mexico without stopping.", "That is a long way for such a tiny bird!"],
        ["In spring, the hummingbirds fly back north.", "Many people hang feeders filled with sugar water to welcome them back.", "The feeders must be cleaned often so the sugar water stays fresh."]
      ] },
    { id: "p3", title: "Built for the Water", genre: "Informational text",
      paragraphs: [
        ["The American alligator lives in many swamps, rivers, and lakes in south Georgia.", "It is a reptile, like snakes and turtles.", "An alligator spends much of its time in the water.", "Its body is built for that life."],
        ["An alligator's eyes and nostrils are on top of its head.", "Because of this, it can float with most of its body hidden underwater.", "It can still see and breathe while it waits for a fish or a turtle to swim by."],
        ["A long, strong tail pushes the alligator through the water.", "It swings its tail from side to side to swim fast."],
        ["Alligators cannot make their own body heat.", "On cool days, they crawl onto the bank and rest in the sun to warm up."]
      ] },
    { id: "p4", title: "Alligator Moms", genre: "Informational text",
      paragraphs: [
        ["Many reptiles lay their eggs and leave.", "But an alligator mother takes care of her babies."],
        ["In early summer, the mother builds a nest near the water.", "She piles up mud, sticks, and leaves into a big mound.", "Then she lays her eggs inside and covers them up."],
        ["As the leaves in the nest rot, they give off heat.", "This heat keeps the eggs warm.", "The mother stays close by and guards the nest from raccoons and other animals that eat eggs."],
        ["After about two months, the babies are ready to hatch.", "They make high squeaking sounds from inside their eggs.", "When the mother hears them, she digs open the nest.", "She may even carry the babies to the water in her mouth, very gently."],
        ["Baby alligators have bright yellow stripes.", "They stay near their mother for many months while they grow."]
      ] },
    /* B2 (expansion 2026-10-22, author b2a): three new pairs, used only by core sets 1 (p5/p6, with two
       items on p1/p2), 2 (p7/p8) and 3 (p9/p10). Never used by test. NEEDS INDEPENDENT REVIEW. */
    { id: "p5", title: "Sweetgrass", genre: "Informational text",
      paragraphs: [
        ["Sweetgrass is a plant that grows in sandy soil near the marshes along the coast of Georgia and South Carolina.", "It grows in thick clumps that can be as tall as a third grader.", "Its blades are long and thin, and they bend without breaking."],
        ["In late summer, the plant sends up soft, pink, feathery tops.", "Small birds and rabbits often hide in the tall, thick clumps."],
        ["In summer, people cut the grass and lay it in the sun to dry.", "Once it is dry, sweetgrass smells sweet, a little like fresh hay.", "People along the coast have made baskets from sweetgrass for hundreds of years."]
      ] },
    { id: "p6", title: "Baskets That Tell a Story", genre: "Informational text",
      paragraphs: [
        ["Along the coasts of Georgia and South Carolina, many Gullah Geechee families make sweetgrass baskets.", "Long ago, their ancestors were taken from West Africa and forced to work as enslaved people on rice plantations.", "They kept the skill of weaving baskets from grass and passed it down."],
        ["A basket maker winds dried sweetgrass into a tight coil.", "Then she sews the coil with thin strips of palmetto leaf.", "Round and round it grows until it is a basket."],
        ["Some baskets are made to hold bread or fruit.", "Others are made to be looked at, like a painting.", "A large basket can take weeks to finish.", "It is slow work.", "Grandparents teach children how to make the baskets, so the skill lives on."]
      ] },
    { id: "p7", title: "From Old Can to New Can", genre: "Informational text",
      paragraphs: [
        ["An empty metal can does not have to be trash.", "Most drink cans are made of aluminum, a light metal that can be used again and again."],
        ["First, a truck brings cans and bottles to a recycling center.", "There, everything rides along a moving belt.", "A strong magnet pulls out steel cans.", "Machines sort out the plastic and glass."],
        ["Next, the aluminum cans are crushed into big blocks.", "The blocks go to a factory, where the cans are shredded into tiny pieces and melted.", "The hot metal is rolled into thin sheets, and the sheets are made into new cans."],
        ["Making a can from old cans takes much less energy than digging up rock to make a new one.", "A recycled can may be back on a store shelf in about two months."]
      ] },
    { id: "p8", title: "Three Bins at Oak Hill School", genre: "Informational text",
      paragraphs: [
        ["At Oak Hill School, the lunchroom used to fill eight big trash bags every day.", "Then the students came up with a plan."],
        ["Now, at the end of the lunch line, there are three bins.", "The blue Recycle bin is for cans and plastic bottles.", "The green Compost bin is for food scraps, like banana peels and apple cores.", "The gray Trash bin is for everything else."],
        ["Each week, the city's recycling truck picks up the cans and bottles.", "The food scraps go to the compost pile in the school garden.", "There, worms and tiny living things break the scraps down into rich, dark soil.", "The students use that soil to grow tomatoes and beans."],
        ["Now the lunchroom fills only three trash bags a day.", "\"We used to throw almost everything away,\" said a fourth grader named Malia.", "\"Now most of it gets used again.\""]
      ] },
    { id: "p9", title: "A Game for a Cold Winter", genre: "Informational text",
      paragraphs: [
        ["In December 1891, a teacher named James Naismith had a problem.", "It was too cold for his students in Springfield, Massachusetts, to play outside.", "They were restless indoors, so he set out to invent a new indoor game."],
        ["Naismith nailed two peach baskets to the railing of a balcony above the gym floor.", "Each basket was 10 feet off the ground.", "The players tried to toss a soccer ball into the other team's basket."],
        ["The baskets still had their bottoms.", "Every time someone scored, a person had to climb a ladder and take the ball out.", "Then the game could start again."],
        ["Naismith wrote 13 simple rules for his game.", "One rule said that players could not run while holding the ball.", "The students loved the game, and they soon taught it to friends in other towns."]
      ] },
    { id: "p10", title: "How the Basket Changed", genre: "Informational text",
      paragraphs: [
        ["Basketball looks different today than it did when it was invented in 1891.", "Many of the changes made the game faster."],
        ["The first baskets were closed at the bottom.", "Later, people tried metal hoops with a net hanging below.", "At first, the nets were closed too, and someone pulled a cord to let the ball out.", "Finally, the nets were left open at the bottom, so the ball dropped right through after every basket."],
        ["Players also learned to dribble, or bounce the ball while they moved.", "Dribbling let a player carry the ball down the court without breaking the rule about running."],
        ["A flat board called a backboard was added behind each hoop.", "It kept fans in the balcony from reaching out and knocking the ball away.", "One thing has stayed the same, though.", "The hoop is still 10 feet off the ground."]
      ] },
    /* SIM-2 (expansion 2026-10-23): p11 and p12 are used only by similar item S10. Never used by core, Together or the check. NEEDS INDEPENDENT REVIEW. */
    { id: "p11", title: "The Giant Anteater", genre: "Informational text",
      paragraphs: [
        ["A giant anteater is a large animal that lives in the grasslands and forests of South America.", "It has a long, thin snout, and it has no teeth at all.", "Its coat is gray, with a wide black stripe across its shoulders."],
        ["An anteater finds its food by smell.", "When it smells an ant nest, it uses the strong claws on its front feet to tear the nest open.", "Then it pokes its snout inside.", "It licks up the ants with a tongue that can be two feet long."],
        ["A mother anteater carries her baby on her back.", "The baby rides there for almost a year."]
      ] },
    { id: "p12", title: "Quick Tongue, Many Ants", genre: "Informational text",
      paragraphs: [
        ["An anteater does not stay long at one nest.", "It eats for less than a minute at each nest, and then it walks on.", "That leaves enough ants behind to rebuild the nest, so the anteater can come back another day."],
        ["The tongue does most of the work.", "An anteater can flick its tongue in and out about 150 times in one minute.", "The tongue is sticky, so the ants cling to it."],
        ["In one day, a giant anteater can eat thousands of ants and termites.", "Because it eats so many, it must spend much of the day looking for food.", "It also sleeps up to fifteen hours each day."]
      ] }
  ],
  practice: [
    { id: "SK-TT2c-P1", type: "mc", points: 1, dok: 2, passages: ["p1", "p2"],
      prompt: "What information is in BOTH passages?",
      choices: [
        { text: "Hummingbirds need a lot of food for energy.", correct: true },
        { text: "Hummingbirds can fly backward in the air." },
        { text: "Hummingbirds fly across the Gulf of Mexico." },
        { text: "Hummingbirds weigh less than a nickel." }
      ],
      clue: "For each choice, ask, \"Is this in Tiny Flyers? Is it also in The Long Trip South?\" Only one choice is in both.",
      why: "The answer is \"Hummingbirds need a lot of food for energy.\" Tiny Flyers says flying fast uses a lot of energy, so the bird must eat many times a day. The Long Trip South says the birds eat extra food and store it as fat for energy. Flying backward and the nickel are only in Tiny Flyers, and the Gulf of Mexico is only in The Long Trip South." },
    { id: "SK-TT2c-P2", type: "match", points: 2, dok: 2, passages: ["p1", "p2"],
      prompt: "Where can you find each piece of information? Match each one to the passage that tells it, or to Both.",
      cols: ["Tiny Flyers", "The Long Trip South", "Both"],
      rows: [
        { text: "that a hummingbird can hover", answer: 0 },
        { text: "where hummingbirds go for the winter", answer: 1 },
        { text: "that hummingbirds drink nectar", answer: 2 },
        { text: "how people help hummingbirds in spring", answer: 1 },
        { text: "how the hummingbird got its name", answer: 0 }
      ],
      clue: "Check each piece of information in one passage, then in the other. Mark Both only if you find it in each passage.",
      why: "That a hummingbird can hover and how the bird got its name are in Tiny Flyers. Where the birds go for the winter and the feeders in spring are in The Long Trip South. Drinking nectar is in both: Tiny Flyers says they lap up nectar, and The Long Trip South says they drink extra nectar before the trip." },
    { id: "SK-TT2c-P3", type: "ebsr", points: 2, dok: 3, passages: ["p1", "p2"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Tiny Flyers tells that flying uses a lot of energy. How does The Long Trip South add to this idea?",
        choices: [
          { text: "It explains that the birds store extra food as fat to use on their trip.", correct: true },
          { text: "It explains that fast-beating wings make a loud humming sound." },
          { text: "It explains that hovering helps the birds drink from flowers." },
          { text: "It explains that sugar water keeps the birds warm all winter." }
        ] },
      partB: { prompt: "Which sentence from The Long Trip South best supports the answer to Part A?",
        choices: [
          { text: "\"Their bodies store the extra food as fat.\"", correct: true },
          { text: "\"In spring, the hummingbirds fly back north.\"" },
          { text: "\"That is a long way for such a tiny bird!\"" },
          { text: "\"But when fall comes, they get ready for a long trip.\"" }
        ] },
      clue: "Find what the second passage says about energy. It must be new information that the first passage does not give.",
      why: "Part A: It explains that the birds store extra food as fat to use on their trip. Part B: \"Their bodies store the extra food as fat.\" Tiny Flyers says flying uses energy. The Long Trip South adds how the birds save up energy for a long flight. The humming sound and hovering come from Tiny Flyers, and neither passage says sugar water keeps the birds warm." },
    { id: "SK-TT2c-P4", type: "ms", points: 2, dok: 3, passages: ["p1", "p2"], pick: 2,
      prompt: "A student is writing a report on why hummingbirds need so much food. Which two sentences from the passages belong in the report? Choose two answers.",
      choices: [
        { text: "Flying so fast uses a lot of energy.", correct: true },
        { text: "The fat gives them energy for the journey.", correct: true },
        { text: "Hovering helps a hummingbird eat." },
        { text: "Hummingbirds also eat tiny insects and spiders." },
        { text: "In spring, the hummingbirds fly back north." }
      ],
      clue: "The report is about why, not what or how. Look in both passages for sentences that tell what food does for a hummingbird.",
      why: "The answers are \"Flying so fast uses a lot of energy\" from Tiny Flyers and \"The fat gives them energy for the journey\" from The Long Trip South. Together they explain why: food gives hummingbirds the energy for fast flying and for their long trip. The hovering sentence tells how they eat, the insect sentence tells what they eat, and the spring sentence is about the trip home." },
    { id: "SK-TT2c-P5", type: "mc", points: 1, dok: 3, passages: ["p1", "p2"],
      prompt: "Which sentence best combines information from both passages?",
      choices: [
        { text: "Hummingbirds are tiny, fast flyers that travel far south each fall.", correct: true },
        { text: "Hummingbirds are tiny birds that can hover in front of flowers." },
        { text: "Hummingbirds fly south in the fall and come back north in spring." },
        { text: "Hummingbirds catch spiders on their trip across the Gulf of Mexico." }
      ],
      clue: "A sentence that combines both passages needs one idea from each passage.",
      why: "The answer is \"Hummingbirds are tiny, fast flyers that travel far south each fall.\" Fast flying comes from Tiny Flyers, and the trip south comes from The Long Trip South. Hovering is only from Tiny Flyers, the trip and return are only from The Long Trip South, and neither passage says they catch spiders on the trip." }
  ],
  /* ---------- B2 core (expansion 2026-10-22, author b2a; pattern: 3.T.T.1.c) ----------
     No refs: P4 and P5 are pre-answered by P1 and P3 (energy, fat, the trip south), so all five practice
     items stay in Practice Together, and the fifteen are new. Set 1 uses p1/p2 for two items that Together
     does not touch (Georgia, the blurred wings) and a new short pair (p5/p6). Sets 2 and 3 use new pairs.
     Author log: docs/expansion-2026-10-22/batches/B2-b2a-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { id: "SK-TT2c-C01", type: "hottext", points: 2, dok: 2, std: ["3.T.T.2.c"], passages: ["p1", "p2"],
        prompt: "Both passages tell the same fact about where hummingbirds can be seen. Choose one sentence from each passage that tells this fact.",
        targets: ["p1:1:1", "p1:2:4", "p1:3:2", "p2:1:1", "p2:3:1", "p2:3:3"],
        answer: ["p1:1:1", "p2:1:1"], pick: 2,
        clue: "Information in both texts is a fact that each text tells, even when the words are different.",
        hints: [
          "Information in both texts is a fact that each text tells, even when the words are different.",
          "Each passage names more than one place or kind of place. Choose one sentence from each passage.",
          "\"A hummingbird can hover, or stay in one place in the air\" uses the word place, but it tells how the bird flies, not where people see it. Check each sentence that is left."
        ],
        how: [
          "Tiny Flyers says the ruby-throated hummingbird is the one people see most often in Georgia.",
          "The Long Trip South says hummingbirds zip around gardens all over Georgia in spring and summer.",
          "The answers are \"The ruby-throated hummingbird is the hummingbird that people see most often in Georgia.\" and \"In spring and summer, hummingbirds zip around gardens all over Georgia.\"",
          "Mexico, Central America and the Gulf of Mexico are named only in The Long Trip South, and the flower sentence tells how a hummingbird eats."
        ],
        misconception: "A common mix-up is choosing two sentences that each name a place, but not the same place. A fact in both texts must match.",
        why: "The answers are \"The ruby-throated hummingbird is the hummingbird that people see most often in Georgia.\" and \"In spring and summer, hummingbirds zip around gardens all over Georgia.\" Each passage tells that hummingbirds are seen in Georgia. Mexico, Central America and the Gulf are only in The Long Trip South, and hovering in one place or in front of a flower tells how the bird flies or eats." },
      { id: "SK-TT2c-C02", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.c"], passages: ["p1", "p2"],
        prompt: "Which question is answered in Tiny Flyers but NOT in The Long Trip South?",
        choices: [
          { text: "Why do a hummingbird's wings look like a blur?", correct: true },
          { text: "Why must hummingbird feeders be cleaned often?" },
          { text: "What do hummingbirds eat besides nectar?" },
          { text: "How many eggs does a hummingbird lay?" }
        ],
        clue: "To track where a fact comes from, check each text one at a time. Is it here? Is it also in the other text?",
        hints: [
          "To track where a fact comes from, check each text one at a time. Is it here? Is it also in the other text?",
          "For each question, look for its answer in both passages, and keep track of what you find.",
          "Neither passage tells how many eggs a hummingbird lays, so that question is not answered at all. Check the other questions the same way."
        ],
        how: [
          "Tiny Flyers says the wings beat so fast that they look like a blur. The Long Trip South never tells about the wings.",
          "Cleaning feeders is only in The Long Trip South. Both passages say hummingbirds eat insects. Neither tells about eggs.",
          "The answer is \"Why do a hummingbird's wings look like a blur?\""
        ],
        misconception: "A common mix-up is choosing a question that both texts answer. The question must be answered in only one of them.",
        why: "The answer is \"Why do a hummingbird's wings look like a blur?\" Only Tiny Flyers tells that the wings beat so fast they look like a blur. Feeders are only in The Long Trip South, both passages tell about eating insects, and neither tells about eggs." },
      { id: "SK-TT2c-C03", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.c"], passages: ["p5", "p6"],
        prompt: "Which detail is told ONLY in \"Baskets That Tell a Story\"?",
        choices: [
          { text: "A large basket can take weeks to finish.", correct: true },
          { text: "People have made sweetgrass baskets for a very long time." },
          { text: "Sweetgrass smells a little like fresh hay." },
          { text: "Sweetgrass grows in sandy soil." }
        ],
        clue: "A detail told in only one text is new information. Check each detail in Text 1, then in Text 2.",
        hints: [
          "A detail told in only one text is new information. Check each detail in Text 1, then in Text 2.",
          "Look for each detail in \"Sweetgrass\" first. If it is there, it is not only in the second text.",
          "The hay smell is told in \"Sweetgrass,\" so it is not only in the basket text. Check each detail that is left in both texts."
        ],
        how: [
          "\"Sweetgrass\" tells where the grass grows, how it smells and that people have made baskets from it for hundreds of years.",
          "\"Baskets That Tell a Story\" also tells that the skill is old: the ancestors kept it and passed it down. It adds that a large basket can take weeks.",
          "The answer is \"A large basket can take weeks to finish.\""
        ],
        misconception: "A common mix-up is choosing a basket detail without checking the other text. A detail about baskets can be in both texts.",
        why: "The answer is \"A large basket can take weeks to finish.\" Only the basket text tells this. Both texts tell that people have made the baskets for a long time, and the hay smell and the sandy soil are in \"Sweetgrass.\"" },
      { id: "SK-TT2c-C04", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.c"], passages: ["p5", "p6"],
        prompt: "Use both texts. Why is sweetgrass a good material for these baskets?",
        choices: [
          { text: "Its blades bend without breaking, so they can be wound into a tight coil.", correct: true },
          { text: "Its pink tops are soft, so they make the basket's handle." },
          { text: "It is stitched with palmetto, so it never needs to be dried in the sun." },
          { text: "Its sweet smell keeps bugs away from the finished baskets for years." }
        ],
        clue: "To answer with two texts, find one piece of the answer in each text and put them together.",
        hints: [
          "To answer with two texts, find one piece of the answer in each text and put them together.",
          "Look in each text for a fact about the grass that matters when someone makes a basket.",
          "Neither text says the smell keeps bugs away, so that reason is not supported. Test the other reasons: does each part come from one of the texts, and does it make sense?"
        ],
        how: [
          "\"Sweetgrass\" says the blades are long and thin and bend without breaking.",
          "\"Baskets That Tell a Story\" says the basket maker winds the grass into a tight coil.",
          "Put them together. The answer is \"Its blades bend without breaking, so they can be wound into a tight coil.\"",
          "Neither text says the pink tops are used for handles, palmetto is for stitching, and neither text says the smell keeps bugs away."
        ],
        misconception: "A common mix-up is joining two true facts that do not explain each other. The two parts must fit together.",
        why: "The answer is \"Its blades bend without breaking, so they can be wound into a tight coil.\" Text 1 tells that the blades bend, and Text 2 tells that the basket maker winds them into a coil. The pink tops, the palmetto and the smell do not explain why the grass works for baskets." },
      { id: "SK-TT2c-C05", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.2.c"], passages: ["p5", "p6"],
        stem: ["Leo's note: Only \"Sweetgrass\" tells that the grass is dried before it is used. Only \"Sweetgrass\" tells who teaches the craft to children."],
        prompt: "Leo's note has two mistakes. Choose the words that fix it.",
        text: "The fact that the grass is dried is in {0}. The fact about who teaches the craft is in {1}.",
        slots: [
          { options: ["both texts", "only \"Sweetgrass\"", "only \"Baskets That Tell a Story\""], answer: 0 },
          { options: ["both texts", "only \"Sweetgrass\"", "only \"Baskets That Tell a Story\""], answer: 2 }
        ],
        clue: "Before you say which text tells a fact, check each text. A fact can be in one text or in both.",
        hints: [
          "Before you say which text tells a fact, check each text. A fact can be in one text or in both.",
          "For each fact, search \"Sweetgrass\" first. Then search the basket text.",
          "\"Sweetgrass\" never mentions grandparents or children. Use that to fix the second blank, and check the first blank yourself."
        ],
        how: [
          "\"Sweetgrass\" says people lay the grass in the sun to dry. The basket text says the basket maker winds dried sweetgrass. So drying is in both texts.",
          "Only the basket text tells that grandparents teach the craft to children.",
          "So the fixed note says the drying fact is in both texts, and the teaching fact is only in \"Baskets That Tell a Story.\""
        ],
        misconception: "A common mix-up is missing a fact that the second text tells in different words, like \"dried sweetgrass.\"",
        why: "The drying fact is in both texts, and the teaching fact is only in \"Baskets That Tell a Story.\" \"Sweetgrass\" tells about drying the grass in the sun, and the basket text says the maker uses dried sweetgrass. Only the basket text tells that grandparents teach children." }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT2c-C06", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.2.c"], passages: ["p7", "p8"],
        prompt: "Think about what each passage is mostly about. Choose the words that best complete the sentence.",
        text: "Together, the passages show how {0} and how {1}.",
        slots: [
          { options: ["a used can becomes a new can", "a magnet pulls out steel cans", "cans are crushed into big blocks"], answer: 0 },
          { options: ["one school throws away much less trash", "worms turn food into rich soil", "the lunch line ends at three bins"], answer: 0 }
        ],
        clue: "An important point is what a whole text is mostly about. A detail tells about only one part.",
        hints: [
          "An important point is what a whole text is mostly about. A detail tells about only one part.",
          "Say in a few words what each passage is mostly about, from its first paragraph to its last.",
          "A magnet is part of only one step at the recycling center, so it is a detail, not the important point. Choose the second blank yourself."
        ],
        how: [
          "\"From Old Can to New Can\" follows a can from the recycling center to the factory until it is made into a new can.",
          "\"Three Bins at Oak Hill School\" tells how one school changed its lunchroom so that much less gets thrown away.",
          "So the sentence reads: Together, the passages show how a used can becomes a new can and how one school throws away much less trash.",
          "Each of the other choices tells only one detail from one part of a passage."
        ],
        misconception: "A common mix-up is choosing a detail that is true but tells about only one step or one sentence.",
        why: "The answers are \"a used can becomes a new can\" and \"one school throws away much less trash.\" Those are what each whole passage is about. The magnet, the blocks, the worms and the three bins are each one detail." },
      { id: "SK-TT2c-C07", type: "match", points: 2, dok: 2, std: ["3.T.T.2.c"], passages: ["p7", "p8"],
        prompt: "Which passage tells each piece of information? Match each one to a passage, or to Both.",
        cols: ["From Old Can to New Can", "Three Bins at Oak Hill School", "Both"],
        rows: [
          { text: "how cans are melted down", answer: 0 },
          { text: "how many trash bags the lunchroom fills now", answer: 1 },
          { text: "that cans are recycled instead of thrown away", answer: 2 },
          { text: "what goes in each bin", answer: 1 },
          { text: "how long it takes a recycled can to get back to a store", answer: 0 }
        ],
        clue: "For each row, search one passage and then the other. A row goes under Both only when each passage tells it.",
        hints: [
          "For each row, search one passage and then the other. A row goes under Both only when each passage tells it.",
          "Keep a list as you read: things told only about the recycling center, things told only about the school, and things both passages tell.",
          "Only the school passage tells about the three bins, so \"what goes in each bin\" goes under its title. Sort the other rows the same way."
        ],
        how: [
          "Melting cans and the two months are told only in \"From Old Can to New Can.\"",
          "The trash bags and the three bins are told only in \"Three Bins at Oak Hill School.\"",
          "Both passages tell that cans are recycled instead of thrown away: the can passage says an empty can does not have to be trash, and the school passage has a Recycle bin for cans."
        ],
        misconception: "A common mix-up is putting a fact under Both because it fits the topic of both passages. Each passage must really tell it.",
        why: "Melting and the time it takes to get back to a store are only in \"From Old Can to New Can.\" The trash bags and the bins are only in \"Three Bins at Oak Hill School.\" Both passages tell that cans are recycled instead of thrown away." },
      { id: "SK-TT2c-C08", type: "ms", points: 2, dok: 2, std: ["3.T.T.2.c"], passages: ["p7", "p8"], pick: 2,
        prompt: "Which TWO facts are told in BOTH passages?",
        choices: [
          { text: "Plastic bottles are recycled along with cans.", correct: true },
          { text: "A truck carries the cans away to be recycled.", correct: true },
          { text: "Cans are rolled into thin sheets." },
          { text: "Cans are crushed into big blocks." },
          { text: "The students grow tomatoes and beans." }
        ],
        clue: "A fact is in both passages only if each one tells it, even in different words.",
        hints: [
          "A fact is in both passages only if each one tells it, even in different words.",
          "Check each fact in \"From Old Can to New Can\" first. If it is there, look for it in the other passage too. Choose two.",
          "Growing tomatoes and beans is told only in the school passage, so it is not in both. Test each fact that is left in both passages."
        ],
        how: [
          "The can passage says a truck brings cans and bottles to the recycling center, and machines sort out the plastic.",
          "The school passage says the Recycle bin is for cans and plastic bottles, and the city's recycling truck picks them up.",
          "The answers are \"Plastic bottles are recycled along with cans\" and \"A truck carries the cans away to be recycled.\"",
          "Thin sheets and big blocks are only in the can passage, and tomatoes and beans are only in the school passage."
        ],
        misconception: "A common mix-up is choosing a fact from only one passage because it is about recycling. Each passage must tell it.",
        why: "The answers are \"Plastic bottles are recycled along with cans\" and \"A truck carries the cans away to be recycled.\" Both passages tell about bottles and about a truck. The sheets and the blocks are only in the can passage, and the tomatoes and beans are only in the school passage." },
      { id: "SK-TT2c-C09", type: "order", points: 2, dok: 3, std: ["3.T.T.2.c"], passages: ["p7", "p8"],
        prompt: "Use both passages. Put the steps in order to show what happens to a can that a student at Oak Hill drops in the Recycle bin.",
        steps: [
          "A student drops the can into the blue Recycle bin.",
          "The can rides along a moving belt at the recycling center.",
          "The can is crushed into a big block with other cans.",
          "The can is shredded and melted at a factory.",
          "The metal is rolled into sheets and made into a new can."
        ],
        clue: "To follow something through two texts, start with the text where the journey begins, then keep going in the other text.",
        hints: [
          "To follow something through two texts, start with the text where the journey begins, then keep going in the other text.",
          "Start with the school passage. Then use the time words First and Next in the other passage.",
          "The can has to leave the school before anything happens at the recycling center, so dropping it in the bin comes first. Put the other four in order yourself."
        ],
        how: [
          "The journey starts at Oak Hill: a student drops the can into the blue Recycle bin.",
          "\"From Old Can to New Can\" picks up the story: at the recycling center, the can rides along a moving belt. Next, it is crushed into a block.",
          "At a factory, it is shredded and melted, and the metal is rolled into sheets and made into a new can."
        ],
        misconception: "A common mix-up is using only one passage. The school passage tells where the can starts, and the can passage tells what happens next.",
        why: "The order is: a student drops the can into the blue Recycle bin, the can rides along a moving belt at the recycling center, it is crushed into a big block, it is shredded and melted at a factory, and the metal is rolled into sheets and made into a new can. The first step comes from the school passage, and the rest come from the can passage." },
      { id: "SK-TT2c-C10", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.2.c"], passages: ["p7", "p8"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "How does \"Three Bins at Oak Hill School\" add to what \"From Old Can to New Can\" tells about using things again?",
          choices: [
            { text: "It shows that food scraps, not only cans, can be turned into something useful.", correct: true },
            { text: "It explains how a magnet pulls steel cans off a moving belt." },
            { text: "It tells how much energy is saved by recycling a can." },
            { text: "It explains that aluminum is a light kind of metal." }
          ] },
        partB: { prompt: "Which sentence from \"Three Bins at Oak Hill School\" best supports the answer to Part A?",
          choices: [
            { text: "\"There, worms and tiny living things break the scraps down into rich, dark soil.\"", correct: true },
            { text: "\"The blue Recycle bin is for cans and plastic bottles.\"" },
            { text: "\"Then the students came up with a plan.\"" },
            { text: "\"Now the lunchroom fills only three trash bags a day.\"" }
          ] },
        clue: "When a second text adds to a first, it gives new information that the first text does not have.",
        hints: [
          "When a second text adds to a first, it gives new information that the first text does not have.",
          "For each Part A choice, check: is it told in the school passage, the can passage or both? For Part B, choose one sentence.",
          "The magnet is in the can passage, so it is not something the school passage adds. For Part B, the sentence must match your Part A answer."
        ],
        how: [
          "The can passage tells only about cans and other things that get recycled.",
          "The school passage adds food scraps: they go to a compost pile, where worms turn them into rich soil for the garden.",
          "Part A: It shows that food scraps, not only cans, can be turned into something useful. Part B: \"There, worms and tiny living things break the scraps down into rich, dark soil.\"",
          "The other Part A choices tell about things in the can passage, so they are not new information."
        ],
        misconception: "A common mix-up is choosing information from the first text. The question asks what the second text adds.",
        why: "Part A: It shows that food scraps, not only cans, can be turned into something useful. Part B: \"There, worms and tiny living things break the scraps down into rich, dark soil.\" The can passage never mentions food scraps. The magnet, the energy and the light metal are all from the can passage." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT2c-C11", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.2.c"], passages: ["p9", "p10"],
        prompt: "This question has two parts. Answer Part A, then Part B.",
        partA: { prompt: "Use both passages. Why don't basketball games today have to stop after every basket?",
          choices: [
            { text: "The net is open at the bottom, so the ball drops through and no one has to climb up for it.", correct: true },
            { text: "Players now use a soccer ball, which bounces back out of the basket on its own." },
            { text: "The backboard knocks the ball back out of the basket after each score." },
            { text: "Fans in the balcony reach out and catch the ball for the players." }
          ] },
        partB: { prompt: "Which TWO sentences, one from each passage, best support the answer to Part A?", pick: 2,
          choices: [
            { text: "\"Every time someone scored, a person had to climb a ladder and take the ball out.\"", correct: true },
            { text: "\"Finally, the nets were left open at the bottom, so the ball dropped right through after every basket.\"", correct: true },
            { text: "\"Naismith nailed two peach baskets to the railing of a balcony above the gym floor.\"" },
            { text: "\"A flat board called a backboard was added behind each hoop.\"" },
            { text: "\"It kept fans in the balcony from reaching out and knocking the ball away.\"" }
          ] },
        clue: "To answer with two texts, find what one text says about the past and what the other says about the change.",
        hints: [
          "To answer with two texts, find what one text says about the past and what the other says about the change.",
          "Find why the first game had to stop in \"A Game for a Cold Winter.\" Then find what changed in \"How the Basket Changed.\" For Part B, choose one sentence from each passage.",
          "The backboard was added to stop fans from knocking the ball away, not to bounce the ball out. For Part B, the two sentences must work together to answer Part A."
        ],
        how: [
          "In the first game, someone had to climb a ladder to get the ball out after every score.",
          "Later, the nets were left open at the bottom, so the ball dropped right through.",
          "Part A: The net is open at the bottom, so the ball drops through and no one has to climb up for it. Part B: \"Every time someone scored, a person had to climb a ladder and take the ball out.\" and \"Finally, the nets were left open at the bottom, so the ball dropped right through after every basket.\"",
          "The backboard keeps fans from knocking the ball away, and neither passage says fans catch the ball or that the ball bounces out by itself."
        ],
        misconception: "A common mix-up is answering from one passage only. The question needs the old problem from one passage and the change from the other.",
        why: "Part A: The net is open at the bottom, so the ball drops through and no one has to climb up for it. Part B: \"Every time someone scored, a person had to climb a ladder and take the ball out.\" and \"Finally, the nets were left open at the bottom, so the ball dropped right through after every basket.\" The first passage tells the old problem, and the second tells the change that fixed it. The backboard was for the fans, not for getting the ball out." },
      { id: "SK-TT2c-C12", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.2.c"], passages: ["p9", "p10"],
        prompt: "Both passages tell two of the same facts. Choose the words that complete the sentence.",
        text: "Both passages tell that the game {0}, and that the hoop or basket {1}.",
        slots: [
          { options: ["was invented in 1891", "was first played with a soccer ball", "was first played outdoors"], answer: 0 },
          { options: ["was 10 feet off the ground", "had a backboard behind it", "had a net open at the bottom"], answer: 0 }
        ],
        clue: "A fact is in both texts only if each text tells it, even in different words.",
        hints: [
          "A fact is in both texts only if each text tells it, even in different words.",
          "For each choice, check \"A Game for a Cold Winter\" first, then \"How the Basket Changed.\"",
          "Only \"How the Basket Changed\" tells about the backboard, so the backboard choice is not in both. Check the choices for the first blank yourself."
        ],
        how: [
          "\"A Game for a Cold Winter\" says the game began in December 1891, and \"How the Basket Changed\" says it was invented in 1891.",
          "The first passage says each basket was 10 feet off the ground, and the second says the hoop is still 10 feet off the ground.",
          "The soccer ball is only in the first passage, and the backboard and the open net are only in the second. Neither says the game was played outdoors."
        ],
        misconception: "A common mix-up is choosing a true fact from only one passage. Check that each passage tells it.",
        why: "The answers are \"was invented in 1891\" and \"was 10 feet off the ground.\" Each passage tells both facts. The soccer ball is only in the first passage, the backboard and the open net are only in the second, and the game was invented to be played indoors." },
      { id: "SK-TT2c-C13", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.c"], passages: ["p9", "p10"],
        prompt: "How does \"How the Basket Changed\" help explain one of Naismith's rules?",
        choices: [
          { text: "It tells how players learned to dribble, so they could move the ball without running while holding it.", correct: true },
          { text: "It tells that the rule about running was dropped when the backboard was added." },
          { text: "It tells that players ran much faster once the nets were left open at the bottom." },
          { text: "It tells that fans in the balcony made up the rule about running with the ball." }
        ],
        clue: "When a second text adds to a first, look for a place where it explains or builds on something the first text said.",
        hints: [
          "When a second text adds to a first, look for a place where it explains or builds on something the first text said.",
          "Find the rule about running in \"A Game for a Cold Winter.\" Then read \"How the Basket Changed\" and ask which change has to do with that rule.",
          "The backboard was added to stop fans, and the second passage never says a rule was dropped. Test the other choices against what the second passage says."
        ],
        how: [
          "\"A Game for a Cold Winter\" says one rule was that players could not run while holding the ball.",
          "\"How the Basket Changed\" says players learned to dribble, and dribbling let a player carry the ball without breaking the rule about running.",
          "The answer is \"It tells how players learned to dribble, so they could move the ball without running while holding it.\"",
          "The rule was not dropped, the open nets are not about running, and fans did not make the rules."
        ],
        misconception: "A common mix-up is choosing a change that is in the second passage but has nothing to do with the rule.",
        why: "The answer is \"It tells how players learned to dribble, so they could move the ball without running while holding it.\" The first passage gives the rule, and the second explains how dribbling works with it. The rule was not dropped, the nets and the fans have nothing to do with it." },
      { id: "SK-TT2c-C14", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.c"], passages: ["p9", "p10"],
        prompt: "What do the two basketball passages show when you read them together?",
        choices: [
          { text: "how basketball began, and how it was changed to make the game faster", correct: true },
          { text: "how Naismith's students played their first game in a cold gym" },
          { text: "how the hoop and the net changed after the game was invented" },
          { text: "why the hoop is still as high as it was in 1891" }
        ],
        clue: "The important point of a text is what it is mostly about. When you read two texts together, use what each one is mostly about.",
        hints: [
          "The important point of a text is what it is mostly about. When you read two texts together, use what each one is mostly about.",
          "Say in a few words what each passage is mostly about.",
          "The height of the hoop is in both passages, but it is one small detail, and neither passage tells why. Check the choices that are left."
        ],
        how: [
          "\"A Game for a Cold Winter\" is mostly about how Naismith invented the game.",
          "\"How the Basket Changed\" is mostly about changes that made the game faster.",
          "Together they show how the game began and how it changed. The answer is \"how basketball began, and how it was changed to make the game faster.\"",
          "One choice fits only the first passage, one fits only the second, and the height of the hoop is a detail."
        ],
        misconception: "A common mix-up is choosing the important point of only one passage. Read together, the answer must fit both.",
        why: "The answer is \"how basketball began, and how it was changed to make the game faster.\" The first passage is mostly about how the game was invented, and the second is mostly about how it changed. The cold gym fits only the first passage, the hoop and net changes fit only the second, and the hoop's height is a detail." },
      { id: "SK-TT2c-C15", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.c"], passages: [],
        stem: ["Note 1, from Ms. Diaz: Our class trip to the Science Center is on Friday. The bus leaves at 8:30, so please be at school by 8:15. Wear sneakers, because we will walk on a nature trail.", "Note 2, from the Science Center: Welcome, students! After a rain, our nature trail can be very muddy. We do not sell lunch here, so please bring a packed lunch."],
        prompt: "Kiri reads both notes. Which plan uses information from BOTH notes?",
        choices: [
          { text: "Wear old sneakers that can get muddy, and bring a packed lunch.", correct: true },
          { text: "Wear sneakers, and get to school by 8:15 to catch the bus." },
          { text: "Wear sandals for the trail, and bring a packed lunch." },
          { text: "Buy lunch at the Science Center, and wear sneakers." }
        ],
        clue: "To use two texts together, take one useful fact from each and check that nothing in either text goes against your plan.",
        hints: [
          "To use two texts together, take one useful fact from each and check that nothing in either text goes against your plan.",
          "List what Note 1 asks students to do. Then list what Note 2 adds.",
          "Note 2 says lunch is not sold there, so buying lunch at the Science Center will not work. Test the other plans against both notes."
        ],
        how: [
          "Note 1 says to wear sneakers for the nature trail and to be at school by 8:15.",
          "Note 2 adds that the trail can be muddy and that students must bring a packed lunch.",
          "The answer is \"Wear old sneakers that can get muddy, and bring a packed lunch.\" It uses facts from both notes.",
          "Getting to school by 8:15 uses only Note 1, sandals go against Note 1, and buying lunch goes against Note 2."
        ],
        misconception: "A common mix-up is choosing a plan that is correct but uses only one note.",
        why: "The answer is \"Wear old sneakers that can get muddy, and bring a packed lunch.\" Sneakers come from Note 1, and the mud and the packed lunch come from Note 2. The 8:15 plan uses only Note 1, sandals go against Note 1, and buying lunch goes against Note 2." }
    ] }
  ] },
  /* Extra questions (not one of the fifteen), each on its own short pair. */
  similar: [
    { id: "SK-TT2c-S01", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C01", "SK-TT2c-C08", "SK-TT2c-C12"],
      stem: ["Text 1: In fall, a chipmunk stuffs seeds and nuts into the pouches in its cheeks. It carries them home and piles them up in its burrow.", "Text 2: All winter, a chipmunk stays in its burrow and sleeps for days at a time. When it wakes up, it eats from the food it stored there."],
      prompt: "Which fact is in BOTH texts?",
      choices: [
        { text: "A chipmunk keeps a store of food in its burrow.", correct: true },
        { text: "A chipmunk carries food in its cheek pouches." },
        { text: "A chipmunk sleeps for days at a time." },
        { text: "A chipmunk wakes up to eat." }
      ],
      clue: "A fact in both texts can be told in different words. Check each fact in Text 1, then in Text 2.",
      hints: [
        "A fact in both texts can be told in different words. Check each fact in Text 1, then in Text 2.",
        "Text 2 tells the same fact in different words. Check each choice in both texts.",
        "Sleeping for days at a time is told only in Text 2, so it is not in both. Check the other facts."
      ],
      how: [
        "Text 1 says the chipmunk piles up seeds and nuts in its burrow. Text 2 says it eats from the food it stored there.",
        "The answer is \"A chipmunk keeps a store of food in its burrow.\"",
        "The cheek pouches are only in Text 1, and sleeping and waking up to eat are only in Text 2."
      ],
      why: "The answer is \"A chipmunk keeps a store of food in its burrow.\" Text 1 tells it, and Text 2 tells it with the words \"the food it stored there.\" The cheek pouches are only in Text 1, and sleeping for days and waking to eat are only in Text 2." },
    { id: "SK-TT2c-S02", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C04", "SK-TT2c-C11"],
      stem: ["Text 1: A polar bear's thick fur looks white, like the snow and ice around it.", "Text 2: Seals rest on the sea ice near holes in the ice. A seal watches for danger and slips into the water if it sees something coming."],
      prompt: "Use both texts. How might a polar bear's white fur help it hunt seals?",
      choices: [
        { text: "It blends in with the ice, so a watching seal may not see the bear coming.", correct: true },
        { text: "It keeps the bear warm while it swims under the sea ice." },
        { text: "It helps the bear find the holes that seals use in the ice." },
        { text: "It scares the seals, so they stay on top of the ice." }
      ],
      clue: "Find one fact in each text, then ask how the two facts work together.",
      hints: [
        "Find one fact in each text, then ask how the two facts work together.",
        "Find one fact about the bear in Text 1 and one fact about the seal in Text 2.",
        "Neither text says the fur keeps the bear warm in the water, so that reason is not supported. Test the other reasons against both texts."
      ],
      how: [
        "Text 1: the white fur looks like the snow and ice.",
        "Text 2: a seal watches for danger and slips away if it sees something.",
        "Together: the answer is \"It blends in with the ice, so a watching seal may not see the bear coming.\""
      ],
      why: "The answer is \"It blends in with the ice, so a watching seal may not see the bear coming.\" Text 1 tells that the fur looks like the ice, and Text 2 tells that seals escape when they see danger. Neither text says the fur keeps the bear warm, finds holes or scares seals." },
    { id: "SK-TT2c-S03", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C02", "SK-TT2c-C03", "SK-TT2c-C05", "SK-TT2c-C07"],
      stem: ["Text 1: Dolphins are mammals, so they breathe air. They breathe through a blowhole on top of the head.", "Text 2: Dolphins must come up to breathe even while they rest. Scientists think a dolphin rests one half of its brain at a time, so the other half can help it swim up for air."],
      prompt: "Which fact is told ONLY in Text 2?",
      choices: [
        { text: "A dolphin may rest one half of its brain at a time.", correct: true },
        { text: "Dolphins need to breathe air." },
        { text: "A dolphin has a blowhole on top of its head." },
        { text: "Dolphins are mammals." }
      ],
      clue: "Check each fact in both texts. A fact told only in Text 2 is new information.",
      hints: [
        "Check each fact in both texts. A fact told only in Text 2 is new information.",
        "Read Text 1 first and mark what it tells. Then see what Text 2 adds.",
        "Both texts tell that dolphins breathe air, so that fact is in both. Check the other facts."
      ],
      how: [
        "Text 1 tells that dolphins are mammals, breathe air and have a blowhole.",
        "Text 2 also tells that they breathe, and it adds how they rest.",
        "The answer is \"A dolphin may rest one half of its brain at a time.\""
      ],
      why: "The answer is \"A dolphin may rest one half of its brain at a time.\" Only Text 2 tells how a dolphin rests. Breathing air is in both texts, and the blowhole and being mammals are only in Text 1." },
    /* SIM-2 (expansion 2026-10-23): one extra question per core item that had none in a full sitting.
       Each like names one core item only, because the engine uses an extra question once.
       Log: docs/expansion-2026-10-22/batches/SIM-2-author-log.md. NEEDS INDEPENDENT REVIEW. */
    { id: "SK-TT2c-S04", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C03"],
      stem: ["Text 1: Alpacas are woolly animals. They live in the mountains of South America. Their wool is soft and warm. It comes in many colors, like white, brown and black. Farmers cut the wool off once a year.", "Text 2: Alpaca wool is spun into yarn. The yarn is made into sweaters. Alpacas hum to each other. A baby alpaca is called a cria. Farmers cut the wool off in spring, so the alpacas stay cool in summer."],
      prompt: "Which detail is told ONLY in Text 2?",
      choices: [
        { text: "Alpacas hum to each other.", correct: true },
        { text: "Alpaca wool comes in many colors." },
        { text: "Alpacas live in the mountains." },
        { text: "Farmers cut the wool off the alpacas." }
      ],
      clue: "A detail told in only one text is new information in that text. Check each detail in both texts.",
      hints: [
        "A detail told in only one text is new information in that text. Check each detail in both texts.",
        "Look for each detail in Text 2 first. Then ask whether Text 1 also tells it.",
        "The colors of the wool are told in Text 1, so they are not told only in Text 2. Check the other details in both texts."
      ],
      how: [
        "Text 1 tells where alpacas live, what the wool is like and the colors, and that farmers cut the wool off once a year.",
        "Text 2 tells about yarn and sweaters, that alpacas hum, the word cria and that farmers cut the wool in spring.",
        "The answer is \"Alpacas hum to each other.\" Only Text 2 says it.",
        "The colors and the mountains are only in Text 1, and both texts say farmers cut the wool."
      ],
      misconception: "A common mix-up is choosing a detail because it is true. The question asks which text tells it.",
      why: "The answer is \"Alpacas hum to each other.\" Only Text 2 tells it. The colors and the mountains are told only in Text 1, and both texts say that farmers cut the wool off." },
    { id: "SK-TT2c-S05", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C05"],
      stem: ["Text 1: An igloo is a house made of blocks of hard snow. People in the far north sometimes built igloos as shelters when they went hunting. Snow holds in heat, so the inside is warmer than the air outside. The blocks are set in a circle that curves up to make a dome.", "Text 2: Inside an igloo, a small lamp and the heat from people's bodies can make it warm. The snow is full of tiny pockets of air, so it holds in heat. People sleep on a raised bench of snow that is covered with furs.", "Ben's note: Only Text 2 tells that snow holds in heat. Both texts tell how the blocks are set to make the dome."],
      prompt: "Ben's note has two mistakes. Choose the words that fix it.",
      text: "The fact about how the blocks make a dome is in {0}. The fact that snow holds in heat is in {1}.",
      slots: [
        { options: ["both texts", "only Text 1", "only Text 2"], answer: 1 },
        { options: ["both texts", "only Text 1", "only Text 2"], answer: 0 }
      ],
      clue: "Before you say which text tells a fact, check each text. A fact can be in one text or in both.",
      hints: [
        "Before you say which text tells a fact, check each text. A fact can be in one text or in both.",
        "For each fact, search Text 1 first. Then search Text 2.",
        "Which text says how the blocks are set? Use that to check the dome fact, and check the heat fact yourself."
      ],
      how: [
        "Search Text 1 for how the blocks are set. It says they are set in a circle that curves up to make a dome. Search Text 2. It never says. So the dome fact is in only Text 1.",
        "Search Text 1 for snow holding in heat. It says so. Search Text 2. It says the snow holds in heat, too. So the heat fact is in both texts.",
        "The answers are \"only Text 1\" and \"both texts.\""
      ],
      misconception: "A common mix-up is trusting a note without checking. Search each text for the fact yourself.",
      why: "The answers are only Text 1 and both texts. Only Text 1 tells how the blocks are set in a circle to make a dome. Text 1 says snow holds in heat, and Text 2 says the same thing with the pockets of air." },
    { id: "SK-TT2c-S06", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C06"],
      stem: ["Text 1: A wind turbine looks like a giant fan on a tall pole. When the wind blows, it spins the long blades. The spinning turns a machine inside that makes electricity. Some turbines are taller than a 30-story building.", "Text 2: The town of Pine Bluff put up six wind turbines on a hill outside town. Now the town makes much of its own electricity. It pays less to buy electricity from far away, so it had money left to fix up its park."],
      prompt: "Think about what each text is mostly about. Choose the words that best complete the sentence.",
      text: "Together, the texts show how {0} and how {1}.",
      slots: [
        { options: ["wind turns a turbine to make electricity", "a turbine can be taller than a tall building", "a turbine looks like a giant fan"], answer: 0 },
        { options: ["a town saves money by making its own electricity", "six turbines stand on a hill outside town", "a town fixed up its park"], answer: 0 }
      ],
      clue: "An important point is what a whole text is mostly about. A detail tells about only one part.",
      hints: [
        "An important point is what a whole text is mostly about. A detail tells about only one part.",
        "Say in a few words what each text is mostly about, from its first sentence to its last.",
        "How tall a turbine can be is only one sentence in Text 1, so it is a detail, not the important point. Choose the second blank yourself."
      ],
      how: [
        "Text 1 is mostly about how a turbine works: the wind spins the blades, and the spinning makes electricity.",
        "Text 2 is mostly about what a town gains: it makes its own electricity, so it spends less.",
        "The answers are \"wind turns a turbine to make electricity\" and \"a town saves money by making its own electricity.\"",
        "The height, the fan shape, the hill and the park are each only a small detail."
      ],
      misconception: "A common mix-up is choosing a detail because it is easy to spot. An important point covers the whole text.",
      why: "The answers are \"wind turns a turbine to make electricity\" and \"a town saves money by making its own electricity.\" Each one is what a whole text is mostly about. The height, the fan shape, the hill and the park are details." },
    { id: "SK-TT2c-S07", type: "match", points: 2, dok: 2, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C07"],
      stem: ["Text 1: A rattlesnake has a rattle at the end of its tail. The rattle is made of hard, hollow rings. When the snake shakes its tail, the rings click. They make a buzzing sound. The sound warns other animals to stay away.", "Text 2: Rattlesnakes hunt mice and other small animals. They hunt mostly at night. A rattlesnake has two tiny pits on its face. The pits can feel the heat of a warm animal in the dark. A snake that is afraid may shake its rattle as a warning."],
      prompt: "Which text tells each piece of information? Match each one to Text 1, Text 2 or Both.",
      cols: ["Text 1", "Text 2", "Both"],
      rows: [
        { text: "the rattle is made of hard, hollow rings", answer: 0 },
        { text: "rattlesnakes hunt mostly at night", answer: 1 },
        { text: "a shaken rattle is a warning", answer: 2 },
        { text: "pits on the face feel heat", answer: 1 },
        { text: "the rattle makes a buzzing sound", answer: 0 }
      ],
      clue: "For each row, search one text and then the other. A row goes under Both only when each text tells it.",
      hints: [
        "For each row, search one text and then the other. A row goes under Both only when each text tells it.",
        "Look in each text for the key words of the row, like rings, night, warning, pits or buzzing.",
        "Look in each text for when rattlesnakes hunt. Then sort the other rows yourself."
      ],
      how: [
        "Text 1 tells about the rings and the buzzing sound. Text 2 does not mention them.",
        "Text 2 tells about hunting at night and the pits that feel heat. Text 1 does not.",
        "Both texts tell that a shaken rattle is a warning: Text 1 says the sound warns other animals, and Text 2 says an afraid snake may shake its rattle as a warning."
      ],
      misconception: "A common mix-up is putting a row under Both because both texts are about the same snake. Each fact needs to be in each text.",
      why: "The rings and the buzzing sound are only in Text 1. Hunting at night and the heat pits are only in Text 2. The warning is told in both texts." },
    { id: "SK-TT2c-S08", type: "ms", points: 2, dok: 2, std: ["3.T.T.2.c"], passages: [], pick: 2,
      like: ["SK-TT2c-C08"],
      stem: ["Text 1: A green iguana is a big lizard. It lives in warm forests. It spends most of its day high in the trees. It eats leaves and flowers. If an iguana senses danger, it can drop from a branch into a river and swim away.", "Text 2: Iguanas need heat, so they lie in the sun to warm up. A male iguana has a flap of skin under its chin. Iguanas spend much of their time in trees. If a hungry animal comes near, an iguana may jump into the water below. Then it swims away."],
      prompt: "Which TWO facts are told in BOTH texts?",
      choices: [
        { text: "An iguana escapes danger by going into the water.", correct: true },
        { text: "Iguanas spend much of their time in trees.", correct: true },
        { text: "Iguanas eat leaves and flowers." },
        { text: "Iguanas lie in the sun to warm up." },
        { text: "A male iguana has a flap of skin under its chin." }
      ],
      clue: "A fact is in both texts only if each one tells it, even in different words.",
      hints: [
        "A fact is in both texts only if each one tells it, even in different words.",
        "Check each fact in Text 1 first. If it is there, look for it in Text 2 too. Choose two.",
        "Eating leaves and flowers is told in only one of the texts. Check the other facts in both texts."
      ],
      how: [
        "Text 1 says the iguana lives in the trees and drops into a river if it senses danger. Text 2 says iguanas spend much of their time in trees and jump into the water below.",
        "The answers are \"An iguana escapes danger by going into the water.\" and \"Iguanas spend much of their time in trees.\"",
        "Eating leaves and flowers is only in Text 1. Lying in the sun and the flap of skin are only in Text 2."
      ],
      misconception: "A common mix-up is choosing a fact that is true of iguanas but told in only one text.",
      why: "The answers are \"An iguana escapes danger by going into the water.\" and \"Iguanas spend much of their time in trees.\" Both texts tell them. The leaves and flowers are only in Text 1, and the sun and the chin flap are only in Text 2." },
    { id: "SK-TT2c-S09", type: "order", points: 2, dok: 3, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C09"],
      stem: ["Text 1: On a dairy farm, cows are milked early each morning. The fresh milk flows through pipes into a big, cold tank. Every other day, a milk truck pulls up to the tank and carries the milk to a plant.", "Text 2: At the plant, the milk is first heated to kill germs. Next, it is cooled down, and good bacteria are stirred in. Then the milk is poured into cups and kept in a warm room for hours. During that time, it thickens into yogurt. Last, the cups are chilled and sent to stores."],
      prompt: "Use both texts. Put the steps in order to show what happens to the milk that becomes yogurt.",
      steps: [
        "A cow is milked on the farm.",
        "A truck carries the milk to a plant.",
        "The milk is heated to kill germs.",
        "Good bacteria are stirred into the cooled milk.",
        "The milk sits in a warm room and thickens."
      ],
      clue: "To follow something through two texts, start with the text where the journey begins, then keep going in the other text.",
      hints: [
        "To follow something through two texts, start with the text where the journey begins, then keep going in the other text.",
        "Start with the farm text. Then use the time words in the plant text, like first, next and then.",
        "The milk has to leave the farm before the plant can do anything to it, so the truck's trip comes before the heating. Place the other steps the same way."
      ],
      how: [
        "Text 1 comes first: the cow is milked, the milk goes into a tank, and a truck carries it to a plant.",
        "Text 2 continues at the plant: the milk is first heated, next it is cooled and bacteria are stirred in, and then it sits in a warm room until it thickens.",
        "So the order is: milked, truck, heated, bacteria, warm room."
      ],
      misconception: "A common mix-up is mixing up the order of steps in the second text. Follow first, next and then.",
      why: "The order is: a cow is milked on the farm, a truck carries the milk to a plant, the milk is heated to kill germs, good bacteria are stirred into the cooled milk, and the milk sits in a warm room and thickens. Text 1 tells the first two steps, and Text 2 tells the rest." },
    { id: "SK-TT2c-S10", type: "ebsr", points: 2, dok: 3, std: ["3.T.T.2.c"], passages: ["p11", "p12"],
      like: ["SK-TT2c-C10"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "How does \"Quick Tongue, Many Ants\" add to what \"The Giant Anteater\" tells about how an anteater eats?",
        choices: [
          { text: "It shows how fast an anteater's tongue can move.", correct: true },
          { text: "It explains that the claws tear open an ant nest." },
          { text: "It tells that an anteater has no teeth at all." },
          { text: "It explains that the snout is long and thin." }
        ] },
      partB: { prompt: "Which sentence from \"Quick Tongue, Many Ants\" best supports the answer to Part A?",
        choices: [
          { text: "\"An anteater can flick its tongue in and out about 150 times in one minute.\"", correct: true },
          { text: "\"The tongue is sticky, so the ants cling to it.\"" },
          { text: "\"It eats for less than a minute at each nest, and then it walks on.\"" },
          { text: "\"It also sleeps up to fifteen hours each day.\"" }
        ] },
      clue: "When a second text adds to a first, it gives new information that the first text does not have.",
      hints: [
        "When a second text adds to a first, it gives new information that the first text does not have.",
        "For each Part A choice, ask whether the first passage already tells it. For Part B, choose one sentence.",
        "The claws are told in the first passage, so they are not something the second passage adds. For Part B, the sentence must match your Part A answer."
      ],
      how: [
        "The first passage tells about the long snout, the missing teeth, the claws that tear open the nest and a long tongue.",
        "The second passage adds how quickly the tongue moves.",
        "Part A: It shows how fast an anteater's tongue can move. Part B: \"An anteater can flick its tongue in and out about 150 times in one minute.\"",
        "The claws, the missing teeth and the snout are all told in the first passage, so they are not new."
      ],
      misconception: "A common mix-up is choosing information from the first text. The question asks what the second text adds.",
      why: "Part A: It shows how fast an anteater's tongue can move. Part B: \"An anteater can flick its tongue in and out about 150 times in one minute.\" The first passage never says how fast the tongue moves. The claws, the missing teeth and the snout are told in the first passage." },
    { id: "SK-TT2c-S11", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C11"],
      stem: ["Text 1: In deep snow, a person's boots sink down to the knees. Each step is hard work, and the walker gets tired fast. Long ago, people who lived in snowy lands had to travel far to find food.", "Text 2: A snowshoe is a wide frame with strips of leather woven across it. It is tied over a boot. Its wide shape spreads the person's weight over more snow."],
      prompt: "Use both texts. Why can a person in snowshoes walk on top of snow that a plain boot sinks into?",
      choices: [
        { text: "The wide frame spreads out the weight, so the person sinks less.", correct: true },
        { text: "Snowshoes are much lighter than boots, so they weigh nothing." },
        { text: "The leather strips stick to the snow and hold the walker up." },
        { text: "Snowshoes melt the snow under each step so it is easy to walk." }
      ],
      clue: "When you use two texts, one may tell a trouble and the other may tell what helps with it.",
      hints: [
        "When you use two texts, one may tell a trouble and the other may tell what helps with it.",
        "Say what trouble Text 1 tells about. Then read all of Text 2 and ask which choice would fix that trouble.",
        "Nothing in either text says snowshoes melt snow, so that choice does not fit. Test the other choices against both texts."
      ],
      how: [
        "Text 1 tells the trouble: boots sink deep into snow.",
        "Text 2 tells that a snowshoe is wide and spreads the person's weight over more snow.",
        "The answer is \"The wide frame spreads out the weight, so the person sinks less.\"",
        "Neither text says snowshoes are weightless, that the strips stick to snow, or that they melt snow."
      ],
      misconception: "A common mix-up is choosing a reason that sounds right but is in neither text. Use what the texts say.",
      why: "The answer is \"The wide frame spreads out the weight, so the person sinks less.\" Text 1 tells that boots sink, and Text 2 tells that the wide shape spreads weight over more snow. Neither text says snowshoes are weightless, sticky or able to melt snow." },
    { id: "SK-TT2c-S12", type: "dropdown", points: 2, dok: 2, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C12"],
      stem: ["Text 1: An earthquake starts when big pieces of rock under the ground slip and bump. The ground shakes, sometimes for just a few seconds. Most earthquakes are too small for people to feel. A big one can knock things off shelves.", "Text 2: When the ground starts to shake, drop to the floor, get under a strong table and hold on. Stay there until the shaking stops. An earthquake lasts only seconds or a minute, but things may fall while it lasts."],
      prompt: "Both texts tell two of the same facts. Choose the words that complete the sentence.",
      text: "Both texts tell that an earthquake {0}, and that an earthquake {1}.",
      slots: [
        { options: ["shakes the ground for a short time", "starts when rock slips under the ground", "is a time to get under a strong table"], answer: 0 },
        { options: ["can make things fall", "is too small to feel most of the time", "is over when the shaking stops"], answer: 0 }
      ],
      clue: "A fact is in both texts only if each text tells it, even in different words.",
      hints: [
        "A fact is in both texts only if each text tells it, even in different words.",
        "For each choice, check Text 1 first, then Text 2.",
        "Only Text 2 tells what a person should do, so the choice about a strong table is not in both. Check the choices for the first blank yourself."
      ],
      how: [
        "Text 1 says the ground shakes for a few seconds. Text 2 says an earthquake lasts only seconds or a minute. That is the first fact.",
        "Text 1 says a big one can knock things off shelves. Text 2 says things may fall. That is the second fact.",
        "Slipping rock and small earthquakes are only in Text 1, and the table and waiting are only in Text 2."
      ],
      misconception: "A common mix-up is choosing a fact told in only one text. Check each fact in both texts.",
      why: "The answers are \"shakes the ground for a short time\" and \"can make things fall.\" Both texts tell them. Rock that slips and earthquakes too small to feel are only in Text 1, and the table and waiting are only in Text 2." },
    { id: "SK-TT2c-S13", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C13"],
      stem: ["Text 1: A tugboat is small. But it can move a ship that is many times bigger. A big ship is too long to turn around in a narrow harbor by itself. So a tugboat pushes on the ship's side until the ship turns.", "Text 2: A tugboat has a very strong engine for its size. The engine turns big propellers. They push hard against the water. A tugboat also has a short, wide body. So it can turn fast in tight spaces."],
      prompt: "How does Text 2 help explain how a small tugboat can push a ship that is much bigger?",
      choices: [
        { text: "It tells that the tugboat has a strong engine and big propellers that push hard.", correct: true },
        { text: "It tells that the ship has its own engine that does most of the work." },
        { text: "It tells that a tugboat is really much bigger than the ship it pushes." },
        { text: "It tells that the harbor is wide enough for ships to turn around alone." }
      ],
      clue: "When a second text adds to a first, look for a place where it explains something the first text said.",
      hints: [
        "When a second text adds to a first, look for a place where it explains something the first text said.",
        "Find the fact in Text 1 about a small tugboat and a bigger ship. Then ask what Text 2 tells about the tugboat that could explain it.",
        "Text 1 says the harbor is narrow, so a choice that calls it wide goes against the text. Test the other choices against what Text 2 says."
      ],
      how: [
        "Text 1 says a small tugboat can move a much bigger ship by pushing against its side.",
        "Text 2 explains how: the tugboat has a strong engine and big propellers that push hard against the water.",
        "The answer is \"It tells that the tugboat has a strong engine and big propellers that push hard.\"",
        "Text 2 never mentions the ship's engine, it says the tugboat is small, and Text 1 says the harbor is narrow."
      ],
      misconception: "A common mix-up is choosing a change that is in the second text but has nothing to do with the first text's fact.",
      why: "The answer is \"It tells that the tugboat has a strong engine and big propellers that push hard.\" Text 1 says a small tugboat can move a big ship, and Text 2 tells what gives it the strength. Text 2 never mentions the ship's engine, the tugboat is small, and the harbor is narrow." },
    { id: "SK-TT2c-S14", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C14"],
      stem: ["Text 1: The Great Pyramid in Egypt was built about 4,500 years ago as a tomb for a king named Khufu. It took about twenty years to build. It is made of more than two million blocks of stone.", "Text 2: Workers cut blocks of stone from a quarry. They pulled the blocks on sleds over wet sand, which helped the sleds slide. As the pyramid grew taller, ramps of stone and dirt helped the workers lift the blocks higher."],
      prompt: "What do the two texts show when you read them together?",
      choices: [
        { text: "what the Great Pyramid was for, and how workers built it", correct: true },
        { text: "how a king named Khufu ruled Egypt for twenty years" },
        { text: "how many blocks of stone the Great Pyramid is made of" },
        { text: "how ramps were made from wet sand in a quarry" }
      ],
      clue: "The important point of a text is what it is mostly about. When you read two texts together, use what each one is mostly about.",
      hints: [
        "The important point of a text is what it is mostly about. When you read two texts together, use what each one is mostly about.",
        "Say in a few words what each text is mostly about.",
        "The number of blocks is one detail in Text 1, not what it is mostly about. Check the choices that are left."
      ],
      how: [
        "Text 1 is mostly about what the Great Pyramid is: a tomb for a king, built long ago.",
        "Text 2 is mostly about how workers moved the stone and lifted it higher.",
        "The answer is \"what the Great Pyramid was for, and how workers built it.\"",
        "Neither text tells how Khufu ruled, the number of blocks is only a detail, and the sand was for sleds, not for making ramps."
      ],
      misconception: "A common mix-up is choosing a detail from one text. Read together, the answer must fit both texts.",
      why: "The answer is \"what the Great Pyramid was for, and how workers built it.\" Text 1 is mostly about the pyramid as a tomb, and Text 2 is mostly about how it was built. Neither text tells how Khufu ruled, the number of blocks is a detail, and the wet sand was for sleds." },
    { id: "SK-TT2c-S15", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.c"], passages: [],
      like: ["SK-TT2c-C15"],
      stem: ["Note 1, from Mr. Ellis: Picture day is on Thursday. Please wear your green class shirt. Our class will go to the gym at 10:00. Please be on time, and please do not run in the hall.", "Note 2, from the photographer: Please bring the order form in an envelope. Write your name on the envelope. Pictures are taken in front of a blue screen, so please do not wear anything blue."],
      prompt: "Tia reads both notes. Which plan uses information from BOTH notes?",
      choices: [
        { text: "Wear the green class shirt, and bring the order form in an envelope.", correct: true },
        { text: "Wear the green class shirt, and be in the gym at 10:00." },
        { text: "Wear a blue shirt, and bring the order form in an envelope." },
        { text: "Wear a plain white shirt, and bring the order form in an envelope." }
      ],
      clue: "To use two texts together, take one useful fact from each and check that nothing in either text goes against your plan.",
      hints: [
        "To use two texts together, take one useful fact from each and check that nothing in either text goes against your plan.",
        "List what Note 1 asks students to do. Then list what Note 2 adds.",
        "Note 2 says not to wear blue, so a blue shirt will not work. Test the other plans against both notes."
      ],
      how: [
        "Note 1 says to wear the green class shirt and that the class goes to the gym at 10:00.",
        "Note 2 adds that the order form goes in an envelope, and that no one should wear blue.",
        "The answer is \"Wear the green class shirt, and bring the order form in an envelope.\" The shirt comes from Note 1 and the form from Note 2.",
        "The gym plan uses only Note 1, a blue shirt goes against Note 2, and a white shirt goes against Note 1."
      ],
      misconception: "A common mix-up is choosing a plan that is correct but uses only one note.",
      why: "The answer is \"Wear the green class shirt, and bring the order form in an envelope.\" The shirt comes from Note 1 and the envelope from Note 2. The gym plan uses only Note 1, a blue shirt goes against Note 2, and a white shirt goes against Note 1." }
  ],
  /* Hints and Show me how for Practice Together (P1-P5); core has no refs. */
  addons: {
    "SK-TT2c-P1": {
      hints: [
        "For each choice, ask, \"Is this in Tiny Flyers? Is it also in The Long Trip South?\"",
        "Read the last paragraph of Tiny Flyers and the second paragraph of The Long Trip South. Then check each choice.",
        "Flying backward is told only in Tiny Flyers, so it is not in both. Check the other choices the same way."
      ],
      how: [
        "Tiny Flyers says flying so fast uses a lot of energy, so a hummingbird must eat many times a day.",
        "The Long Trip South says the birds eat extra food and store it as fat for energy.",
        "The answer is \"Hummingbirds need a lot of food for energy.\"",
        "Flying backward and the nickel are only in Tiny Flyers, and the Gulf of Mexico is only in The Long Trip South."
      ] },
    "SK-TT2c-P2": {
      hints: [
        "Check each piece of information in one passage, then in the other. Mark Both only if you find it in each passage.",
        "Make two quick lists as you read: what Tiny Flyers tells and what The Long Trip South tells.",
        "Hovering is told only in Tiny Flyers, so that row goes under Tiny Flyers. Sort the other rows the same way."
      ],
      how: [
        "Hovering and how the bird got its name are in Tiny Flyers.",
        "Where the birds go for winter and the feeders in spring are in The Long Trip South.",
        "Drinking nectar is in both: Tiny Flyers says they lap up nectar, and The Long Trip South says they drink extra nectar."
      ] },
    "SK-TT2c-P3": {
      hints: [
        "Find what the second passage says about energy. It must be new information that the first passage does not give.",
        "Read the second passage and find a fact that Tiny Flyers does not give. For Part B, choose one sentence.",
        "The humming sound and hovering are told in Tiny Flyers, so they do not add anything new. For Part B, the sentence must match your Part A answer."
      ],
      how: [
        "Tiny Flyers says flying uses a lot of energy.",
        "The Long Trip South adds that the birds store extra food as fat for the trip.",
        "Part A: It explains that the birds store extra food as fat to use on their trip. Part B: \"Their bodies store the extra food as fat.\"",
        "Neither passage says sugar water keeps the birds warm."
      ] },
    "SK-TT2c-P4": {
      hints: [
        "The report is about why, not what or how. Look in both passages for sentences that tell what food does for a hummingbird.",
        "Look in both passages. Ask of each sentence: does it tell what food does for the bird, or only what or how it eats? Choose two.",
        "The hovering sentence tells how a hummingbird eats, not why it needs so much food. Check the other sentences the same way."
      ],
      how: [
        "Tiny Flyers: \"Flying so fast uses a lot of energy.\"",
        "The Long Trip South: \"The fat gives them energy for the journey.\"",
        "Together they explain why hummingbirds need so much food. The other sentences tell how, what or when."
      ] },
    "SK-TT2c-P5": {
      hints: [
        "A sentence that combines both passages needs one idea from each passage.",
        "For each choice, find where each part of the sentence comes from.",
        "Hovering in front of flowers is told only in Tiny Flyers, so that choice uses only one passage. Check the other choices the same way."
      ],
      how: [
        "Tiny Flyers tells that hummingbirds are tiny, fast flyers.",
        "The Long Trip South tells that they travel far south each fall.",
        "The answer is \"Hummingbirds are tiny, fast flyers that travel far south each fall.\"",
        "One choice uses only Tiny Flyers, one uses only The Long Trip South, and neither passage says they catch spiders on the trip."
      ] }
  },
  test: [
    { id: "SK-TT2c-T1", type: "mc", points: 1, dok: 3, passages: ["p3", "p4"],
      prompt: "Which statement uses information from BOTH passages?",
      choices: [
        { text: "An alligator can float with its eyes above water, and its babies squeak inside their eggs.", correct: true },
        { text: "Adult alligators warm up in the sun, and they swim by swinging their tails." },
        { text: "Mother alligators build nests, and they carry their babies to the water." },
        { text: "Baby alligators have stripes, and their nest is made of mud and sticks." }
      ],
      clue: "For each choice, find where each half of the sentence comes from. The answer needs one half from each passage.",
      why: "The answer is \"An alligator can float with its eyes above water, and its babies squeak inside their eggs.\" Only Built for the Water tells that the eyes are on top of the head so it can float and still see. Only Alligator Moms tells that the babies make squeaking sounds inside their eggs. Each of the other choices uses only one passage." },
    { id: "SK-TT2c-T2", type: "match", points: 2, dok: 2, passages: ["p3", "p4"],
      prompt: "Where can you find each piece of information? Match each one to the passage that tells it, or to Both.",
      cols: ["Built for the Water", "Alligator Moms", "Both"],
      rows: [
        { text: "how an alligator swims", answer: 0 },
        { text: "how alligator eggs are kept warm", answer: 1 },
        { text: "that alligators live near water", answer: 2 },
        { text: "what baby alligators look like", answer: 1 }
      ],
      clue: "Check each piece of information in one passage, then in the other. Mark Both only if you find it in each passage.",
      why: "How an alligator swims is in Built for the Water. How the eggs are kept warm and what the babies look like are in Alligator Moms. Both passages show that alligators live near water: Built for the Water names swamps, rivers and lakes, and Alligator Moms says the nest is near the water." },
    { id: "SK-TT2c-T3", type: "ebsr", points: 2, dok: 3, passages: ["p3", "p4"],
      prompt: "This question has two parts. Answer Part A, then Part B.",
      partA: { prompt: "Built for the Water tells how an alligator's body helps it in the water. How does Alligator Moms add to what you learn about alligators?",
        choices: [
          { text: "It tells how a mother alligator cares for her eggs and babies.", correct: true },
          { text: "It tells how an alligator waits to catch a fish or a turtle." },
          { text: "It tells why an alligator rests in the sun on cool days." },
          { text: "It tells how an alligator's tail pushes it through water." }
        ] },
      partB: { prompt: "Which sentence from the passages best supports the answer to Part A?",
        choices: [
          { text: "\"But an alligator mother takes care of her babies.\"", correct: true },
          { text: "\"It swings its tail from side to side to swim fast.\"" },
          { text: "\"Alligators cannot make their own body heat.\"" },
          { text: "\"Baby alligators have bright yellow stripes.\"" }
        ] },
      clue: "First decide what Alligator Moms is mostly about. Then cross out any choice that Built for the Water already tells.",
      why: "Part A: It tells how a mother alligator cares for her eggs and babies. Part B: \"But an alligator mother takes care of her babies.\" Catching food, resting in the sun and swimming with the tail are all in Built for the Water. The stripes are in Alligator Moms, but they do not show how the mother cares for her babies." },
    { id: "SK-TT2c-T4", type: "hottext", points: 1, dok: 2, passages: ["p3", "p4"],
      prompt: "Built for the Water says adult alligators rest in the sun to warm up. Choose the sentence from Alligator Moms that tells a different way alligators get warmth.",
      targets: ["p3:4:1", "p3:4:2", "p4:2:3", "p4:3:1", "p4:3:3"],
      answer: ["p4:3:1"], pick: 1,
      clue: "The sentence must come from Alligator Moms, and it must name a source of heat that is not the sun.",
      why: "The answer is \"As the leaves in the nest rot, they give off heat.\" Adult alligators get warmth from the sun, but the eggs get warmth from rotting leaves. The two sentences from Built for the Water are about body heat and the sun, and the other sentences from Alligator Moms tell how the eggs are covered and guarded." }
  ]
});

PP.addLesson({
  code: "3.T.T.2.d",
  title: "Writing to inform: introduction, facts and conclusion",
  teach: {
    big: "A good informational piece names the topic at the start, teaches facts in the middle, and wraps up at the end.",
    points: [
      "The introduction tells the reader what the topic is. It can start with something interesting, but it must make the topic clear.",
      "The middle gives facts, details and definitions. A picture or diagram with a caption can also help explain a fact. Choose one that shows the facts in that part of your writing. Every sentence should be about the topic. When facts tell steps, put them in the order they happen.",
      "A definition tells what a word means, like \"A burrow is a hole an animal digs for its home.\"",
      "If a sentence is about something else, like your own pet or your lunch, it does not belong. Take it out.",
      "The conclusion wraps up. It reminds the reader of the topic or the most important idea. It does not start a new topic."
    ],
    words: [
      { term: "introduction", means: "the beginning, which tells the topic" },
      { term: "fact", means: "something true that can be checked" },
      { term: "definition", means: "a sentence that tells what a word means" },
      { term: "conclusion", means: "the ending, which wraps up the topic" }
    ],
    example: {
      label: "Example",
      lines: [
        "Frogs are amazing animals that change as they grow.",
        "A frog starts life as a tadpole that swims with a tail and breathes with gills.",
        "As it grows, it loses its tail and grows legs and lungs.",
        "From tadpole to frog, these animals go through surprising changes."
      ],
      note: "The first sentence names the topic: frogs change as they grow. The middle sentences give facts. The last sentence wraps up the same idea without starting anything new."
    },
    tip: "On the Milestones, you will read a student's draft and choose the best introduction, the best fact to add, the best conclusion, or the sentence that does not belong. You may also put facts in order or match a picture to the sentences it explains. Reread the sentences around that spot before you choose."
  },
  learn: [
    {
      show: ["(1) Let me tell you something. (2) Cheetahs are the fastest animals on land. (3) They use their speed to chase down food. (4) My grandma has a cat named Pepper. (5) A cheetah's long tail helps it turn quickly while it runs."],
      ask: "Which sentence does not belong, and which sentence needs to be a better introduction?",
      steps: [
        "Find the topic. Sentence 2 tells it: cheetahs. Sentence 1 does not name any topic, so it needs a better introduction, such as \"Cheetahs are the fastest animals on land.\"",
        "Test each other sentence. Ask, \"Is this about cheetahs?\"",
        "Sentences 3 and 5 are about cheetahs. Sentence 4 is about Grandma's cat, which is a different topic."
      ],
      answer: "Sentence 4 does not belong, because it is about a pet cat, not about cheetahs. Sentence 1 needs to be replaced by a sentence that names the topic."
    },
    {
      show: [
        "(1) Rainbows are colorful arcs that appear in the sky. (2) A rainbow forms when sunlight shines through drops of rain. (3) The raindrops split the light into many colors. (4) To see a rainbow, you need the sun behind you and rain in front of you.",
        "Which sentence would make the best conclusion? \"Next, I will tell you about clouds.\" \"Sunlight and rain work together to paint a rainbow in the sky.\" \"What is your favorite color?\""
      ],
      ask: "Which sentence is the best conclusion?",
      steps: [
        "A conclusion wraps up the topic. The topic is rainbows.",
        "Cross out a sentence that starts a new topic. \"Next, I will tell you about clouds\" does that.",
        "Cross out a sentence that is not about the topic at all. The favorite color question is not about rainbows.",
        "The one left sums up the main idea: sun and rain make rainbows."
      ],
      answer: "\"Sunlight and rain work together to paint a rainbow in the sky\" is the best conclusion, because it wraps up how rainbows form."
    },
    {
      show: [
        "(1) Lighthouses help keep ships safe. (2) A lighthouse is a tall tower with a bright light at the top. (3) At night, the light shines out over the water.",
        "Which fact should be added after sentence 3? \"The light warns ships that rocks or land are close by.\" \"My family likes to swim at the beach.\""
      ],
      ask: "Which fact fits best after sentence 3?",
      steps: [
        "Find the topic. Sentence 1 says lighthouses keep ships safe.",
        "Read sentence 3 again. The light shines over the water. A good next fact tells more about the light.",
        "Swimming at the beach is about the writer's family, not lighthouses.",
        "A fact can also be a definition, such as \"A beacon is a bright light that guides ships.\" It tells what a word means and stays on the topic."
      ],
      answer: "\"The light warns ships that rocks or land are close by\" fits best, because it tells how the light keeps ships safe."
    }
  ],
  write: {
    prompt: "Write an informational paragraph about an animal, a plant or a place you know a lot about. Start with an introduction that names your topic. Give at least three facts or details. Explain what one word means. End with a conclusion that wraps up your topic.",
    checklist: [
      "I named my topic in my first sentence.",
      "I gave at least three true facts or details.",
      "I explained what one word means.",
      "If a picture would help explain a fact, I drew it and labeled it.",
      "Every sentence is about my topic.",
      "My last sentence wraps up my topic."
    ],
    rows: 8
  },
  parent: "Ask your child to teach you about something they know well, like a favorite animal or a game. Then help them write it with a first sentence that names the topic, three facts and an ending that wraps it up.",
  passages: [
    { id: "p1", draft: true, title: "Peanuts", byline: "Rosa's first draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) I am going to tell you about some stuff."],
        ["(2) Peanuts grow in a surprising way.", "(3) First, a peanut plant grows small yellow flowers above the ground.", "(4) After a flower fades, a stem called a peg grows down and pushes into the soil.", "(5) Under the ground, the tip of the peg grows into a shell with seeds inside.", "(6) In the fall, farmers dig up the plants and let them dry in the sun."],
        ["(7) Peanuts are not really nuts.", "(8) My best friend likes to eat apples with her lunch.", "(9) Georgia farmers grow more peanuts than the farmers in any other state."],
        ["(10) That is all."]
      ] },
    { id: "p2", draft: true, title: "Bats", byline: "Kenji's first draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) Bats are mammals, just like dogs, horses, and people.", "(2) Mother bats feed their babies milk.", "(3) Bats are the only mammals that can really fly."],
        ["(4) Most bats sleep during the day.", "(5) They hang upside down in caves, trees, or old buildings.", "(6) At night, they wake up and fly out to find food.", "(7) Many bats eat insects such as moths and beetles.", "(8) My sister wants to get a pet hamster."],
        ["(9) Bats have a special way to find food in the dark.", "(10) A bat makes high squeaks as it flies.", "(11) The sounds bounce off a moth and come back to the bat as echoes.", "(12) By listening to the echoes, the bat can tell where the moth is."],
        ["(13) Bats are cool, and that is the end."]
      ] },
    /* B4-b4a passages begin */
    { id: "p3", draft: true, title: "The Yellow School Bus", byline: "Amina's first draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) I am writing about a vehicle that many kids ride to school every day in the United States."],
        ["(2) A school bus is painted a bright yellow color.", "(3) That color is easy for other drivers to see.", "(4) Before the bus stops, its yellow lights flash to warn drivers to slow down.", "(5) When the bus stops, its red lights flash and a stop arm swings out from the side.", "(6) Drivers must stop and wait until the bus starts moving again."],
        ["(7) My uncle drives a red pickup truck with a loud horn.", "(8) Inside the bus, the seats are tall and padded to help keep riders safe."],
        ["(9) That is all about school buses."]
      ] },
    { id: "p4", draft: true, title: "Magnets", byline: "Kofi's first draft", genre: "Student draft (informational)",
      paragraphs: [
        ["(1) Here is my report."],
        ["(2) A magnet pulls on objects made of iron or steel.", "(3) Paper clips and steel nails stick to a magnet.", "(4) Objects made of plastic, wood or glass do not stick to a magnet.", "(5) My cousin got a new puppy last week."],
        ["(6) Every magnet has two poles.", "(7) One is the north pole, and the other is the south pole.", "(8) A north pole and a south pole pull toward each other.", "(9) Our lunch at school today was pizza and fruit.", "(10) Two north poles push each other away."],
        ["(11) That is all I know about magnets."]
      ] }
    /* B4-b4a passages end */
  ],
  practice: [
    { id: "SK-TT2d-P1", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Sentence 1 does not tell the reader the topic. Which sentence would be the best introduction to replace sentence 1?",
      choices: [
        { text: "Peanuts are a popular food, and there is a lot to learn about them.", correct: true },
        { text: "My family eats peanut butter sandwiches every single week." },
        { text: "Farmers in Georgia work very hard on their farms all year." },
        { text: "In the end, peanuts are a very useful plant for farmers." }
      ],
      clue: "An introduction names the topic of the whole draft. Read the rest of the draft and ask what every paragraph is about.",
      why: "The answer is \"Peanuts are a popular food, and there is a lot to learn about them.\" The whole draft is about peanuts, and this sentence tells the reader that. The sandwich sentence is about the writer's family, the farmer sentence is about farmers, and \"In the end\" sounds like a conclusion." },
    { id: "SK-TT2d-P2", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Rosa wants to add a sentence after sentence 7 to explain what peanuts really are. Which sentence fits best?",
      choices: [
        { text: "They are legumes, which are plants that grow seeds in pods, like peas.", correct: true },
        { text: "They can be roasted, boiled, or crushed to make smooth peanut butter." },
        { text: "Some people cannot eat them, so they need to choose other snacks." },
        { text: "Pecans are real nuts that grow on very tall trees in Georgia." }
      ],
      clue: "Sentence 7 says what peanuts are not. The next sentence should tell the reader what they are.",
      why: "The answer is \"They are legumes, which are plants that grow seeds in pods, like peas.\" It tells what peanuts really are and defines the word legumes. The other sentences are about cooking peanuts, about people who cannot eat them, or about pecans." },
    { id: "SK-TT2d-P3", type: "hottext", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence does not belong in Rosa's draft? Choose the sentence.",
      targets: ["p1:2:1", "p1:2:4", "p1:3:1", "p1:3:2", "p1:3:3"],
      answer: ["p1:3:2"], pick: 1,
      clue: "The topic is peanuts. Test each sentence by asking, \"Does this teach the reader about peanuts?\"",
      why: "The answer is \"(8) My best friend likes to eat apples with her lunch.\" It is about apples and the writer's friend, not peanuts. Every other sentence gives a fact about peanuts." },
    { id: "SK-TT2d-P4", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Which sentence would be the best conclusion to replace sentence 10?",
      choices: [
        { text: "From a yellow flower to a shell underground, peanuts are amazing plants.", correct: true },
        { text: "Next, I will tell you how to make a peanut butter and jelly sandwich." },
        { text: "Peanut plants need warm weather for many months to grow well." },
        { text: "I think that apples are a much better snack than peanuts will ever be." }
      ],
      clue: "A conclusion wraps up the whole topic. Ask of each choice: does it sum up the main idea of the whole draft?",
      why: "The answer is \"From a yellow flower to a shell underground, peanuts are amazing plants.\" It sums up how peanuts grow and ends the topic. The sandwich sentence starts a new topic, the warm weather sentence adds a new fact instead of wrapping up, and the apple sentence is an opinion about a different food." },
    { id: "SK-TT2d-P5", type: "match", points: 2, dok: 2, passages: ["p1"],
      prompt: "Rosa might add these sentences to a new version of her draft. Match each sentence to the part of the draft where it belongs.",
      cols: ["Introduction", "Middle (fact or detail)", "Conclusion"],
      rows: [
        { text: "Have you ever wondered how peanuts grow? Read on to find out.", answer: 0 },
        { text: "Peanut plants grow best in warm weather and sandy soil.", answer: 1 },
        { text: "Peanuts can be roasted, boiled, or made into peanut butter.", answer: 1 },
        { text: "Now you know why peanuts are such a special plant.", answer: 2 }
      ],
      clue: "Ask what job each sentence does. Does it open the topic, teach a fact, or wrap up what the reader learned?",
      why: "\"Have you ever wondered how peanuts grow? Read on to find out\" opens the topic, so it is the introduction. The sentences about warm weather and sandy soil and about roasting and boiling are facts for the middle. \"Now you know why peanuts are such a special plant\" wraps up, so it is the conclusion." },
    { id: "SK-TT2d-P6", type: "mc", points: 1, dok: 2, passages: ["p1"],
      prompt: "Rosa wants to add a picture with a caption next to sentences 4 and 5. Which one would best help readers understand those sentences?",
      choices: [
        { text: "a diagram of a peanut plant above and below the ground, labeled flower, peg and shell, with the caption \"How a peanut grows\"", correct: true },
        { text: "a photo of a jar of peanut butter on a kitchen table, with the caption \"Peanut butter is made from peanuts\"" },
        { text: "a drawing of a farmer on a tractor in a peanut field, with the caption \"Farmers dig up peanuts in the fall\"" },
        { text: "a map of Georgia with one star on it, with the caption \"Where many peanuts grow\"" }
      ],
      clue: "Reread sentences 4 and 5. What happens there that is hard to picture? Which picture would let the reader see it?",
      why: "The answer is a diagram of a peanut plant above and below the ground, labeled flower, peg and shell, with the caption \"How a peanut grows\". Sentences 4 and 5 tell how a peg pushes into the soil and grows a shell under the ground, and the diagram lets readers see that. The peanut butter photo is about peanuts but not about how they grow. The farmer drawing goes with sentence 6, not 4 and 5. The map of Georgia goes with sentence 9, which is about Georgia farmers, not with sentences 4 and 5." }
  ],
  /* ---------- B4-b4a begin ---------- */
  /* ---------- B4 (expansion 2026-10-22, author b4a; docs/expansion-2026-10-22/01-architecture.md 2.2-2.3) ----------
     Selected-response core (the Milestones assesses this standard through revise/edit items). The write task stays
     OUTSIDE the fifteen: it is adult-scored and never awards a pass. Set 1 reuses P4 and P5 by { ref } on Rosa's
     draft (p1) plus three new items; set 2 uses p3 (school bus, with Figure 1); set 3 uses p4 (magnets, with Figure 1)
     plus a two-draft stem on bike helmets. Practice Together is P1, P2, P3 and P6. Hints and Show me how for P1-P6 are in addons.
     Author log: docs/expansion-2026-10-22/batches/B4-b4a-author-log.md. NEEDS INDEPENDENT REVIEW. */
  core: { rev: "1", sets: [
    { title: "Set 1", items: [
      { ref: "SK-TT2d-P5" },
      { id: "SK-TT2d-C02", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: ["p1"],
        prompt: "Rosa plans a new paragraph after sentence 9. It begins, \"Peanuts are also used to make other foods and products.\" Which sentence supports that idea best?",
        choices: [
          { text: "Peanuts can be pressed to make cooking oil.", correct: true },
          { text: "Farmers use large machines to work in their fields." },
          { text: "Georgia is in the southeastern part of the United States." },
          { text: "Rosa's class visited a farm last spring." }
        ],
        clue: "A sentence that supports an idea gives more information about that same idea. Ask what idea the new first sentence promises to explain.",
        hints: [
          "A sentence that supports an idea gives more information about that same idea. Ask what idea the new first sentence promises to explain.",
          "Reread the new first sentence and look for the words foods and products. Then ask which choice gives an example of that.",
          "A sentence about the machines on a farm tells how farmers work, not what peanuts are used for. Look at the choices that are left."
        ],
        how: [
          "The new sentence says peanuts are used to make other foods and products, so a supporting sentence has to give an example of something made from peanuts.",
          "Cooking oil is a product made from peanuts. It gives the reader a real example of the idea.",
          "The answer is: Peanuts can be pressed to make cooking oil.",
          "Farm machines, the location of Georgia and Rosa's class trip are all true or harmless, but none of them tells what is made from peanuts."
        ],
        misconception: "A common mix-up is picking any sentence about farms or peanut places. A supporting sentence must tell more about the exact idea it supports.",
        why: "The answer is: Peanuts can be pressed to make cooking oil. It gives an example of a product made from peanuts, which supports the new first sentence. The other sentences are about farm machines, the location of Georgia and a class trip, so they do not give an example." },
      { id: "SK-TT2d-C03", type: "order", points: 2, dok: 2, std: ["3.T.T.2.d"], passages: ["p1"],
        prompt: "Rosa wants to add four sentences after sentence 9 to tell how peanut butter is made. Put them in the order that makes the most sense.",
        steps: [
          "The peanuts are roasted in a hot oven until they turn golden.",
          "After the peanuts cool, their thin skins are rubbed off.",
          "A machine grinds the peanuts into a thick, smooth paste.",
          "The paste is scooped into jars and sealed."
        ],
        clue: "Put the steps in the order they would really happen. Ask what must be finished before each next step can start.",
        hints: [
          "Put the steps in the order they would really happen. Ask what must be finished before each next step can start.",
          "Ask what each sentence needs to already be true before it can happen. Think about which sentences depend on another one.",
          "A jar cannot be filled with paste before the paste exists. Use that to place that one sentence, then decide where the others go."
        ],
        how: [
          "The first step has to be the one that does not need anything else done to the peanuts: roasting them in a hot oven.",
          "The sentence that starts \"After the peanuts cool\" comes after the roasting, and the skins come off before the peanuts can be ground smooth.",
          "Then a machine grinds the peanuts into a paste, and last the paste goes into jars.",
          "The order is: roasted in a hot oven, cooled and skins rubbed off, ground into paste, scooped into jars."
        ],
        misconception: "A common mix-up is putting the jars early because they are easy to picture. A step cannot happen until the one before it is finished.",
        why: "The order is: The peanuts are roasted in a hot oven until they turn golden; after they cool, their thin skins are rubbed off; a machine grinds the peanuts into a thick, smooth paste; the paste is scooped into jars and sealed. Each step needs the one before it." },
      { id: "SK-TT2d-C04", type: "dropdown", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: ["p1"],
        stem: [
          "Rosa wants to add this sentence after sentence 9: \"Peanuts have a lot of protein, which helps kids grow strong.\""
        ],
        prompt: "She also wants to tell what the word protein means. Choose the best answer for the blank.",
        text: "Protein is {0}.",
        slots: [
          { options: [
              "a part of food that helps the body grow and stay strong",
              "a kind of sticky oil that coats a food",
              "a mineral that is found in salty water"
            ],
            answer: 0 }
        ],
        clue: "A definition tells what a word means. Use the way the word is used in the sentence to figure it out.",
        hints: [
          "A definition tells what a word means. Use the way the word is used in the sentence to figure it out.",
          "Read Rosa's new sentence again. Ask what the sentence says protein does for kids.",
          "Oil that coats a food does not help anyone grow strong. Look at the choices that are left."
        ],
        how: [
          "Rosa's sentence says peanuts have protein, which helps kids grow strong.",
          "That shows protein is something in food that helps the body.",
          "The answer is: Protein is a part of food that helps the body grow and stay strong.",
          "Sticky oil on a food has nothing to do with growing strong, and a mineral in salty water is not part of a food that kids eat."
        ],
        misconception: "A common mix-up is choosing a word that sounds like food science. Use the words around the word protein to find what it does.",
        why: "The answer is: Protein is a part of food that helps the body grow and stay strong. Rosa's sentence says protein helps kids grow strong. A sticky oil on a food and a mineral in salty water do not match what the sentence says protein does." },
      { ref: "SK-TT2d-P4" }
    ] },
    { title: "Set 2", items: [
      { id: "SK-TT2d-C06", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: ["p3"],
        prompt: "Sentence 1 does not tell the reader exactly what Amina's draft is about. Which sentence should replace it as a better introduction?",
        choices: [
          { text: "School buses have special parts that help keep kids safe.", correct: true },
          { text: "Cars, trucks and buses all have wheels and drive on roads." },
          { text: "My bus stop is at the end of my street, near a big oak tree." },
          { text: "That is why a school bus is a safe way for kids to get to school." }
        ],
        clue: "An introduction names the topic of the whole draft. It should fit everything that comes after it, not just one small part.",
        hints: [
          "An introduction names the topic of the whole draft. It should fit everything that comes after it, not just one small part.",
          "Skim the four paragraphs and notice what they share. Then check each choice against that.",
          "A sentence that begins with \"That is why\" wraps up what came before it, so it sounds like an ending. Look at the choices that are left."
        ],
        how: [
          "An introduction tells the topic of the whole draft.",
          "Paragraph 2 is about the paint, lights and stop arm, and paragraph 3 is about the seats. They all tell about parts that help a bus keep riders safe.",
          "The answer is: School buses have special parts that help keep kids safe.",
          "The sentence about wheels is about many vehicles, the oak tree sentence is about Amina's bus stop, and \"That is why\" sounds like a conclusion."
        ],
        misconception: "A common mix-up is choosing the choice that mentions buses without checking it fits the whole draft. An introduction must name the topic everything else is about.",
        why: "The answer is: School buses have special parts that help keep kids safe. It names the topic and leads into the facts about the paint, lights, stop arm and seats. The wheels sentence is about many vehicles, the oak tree sentence is about Amina's stop, and the \"That is why\" sentence sounds like an ending." },
      { id: "SK-TT2d-C07", type: "dropdown", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: ["p3"],
        prompt: "Amina wants to add a sentence after sentence 5 that tells what a stop arm is. Choose the best answer for the blank.",
        text: "A stop arm is {0}.",
        slots: [
          { options: [
              "a sign that swings out from the bus to tell drivers to stop",
              "a door at the side of the bus that swings out so riders can climb on",
              "a flashing light that warns drivers the bus will stop soon",
              "a long bar that lifts to let the bus into the school lot"
            ],
            answer: 0 }
        ],
        clue: "A definition tells what a word means. Look for the job the thing does, not only where it is.",
        hints: [
          "A definition tells what a word means. Look for the job the thing does, not only where it is.",
          "Read sentences 4, 5 and 6 together. Ask what the stop arm does when it swings out and what drivers must do.",
          "Sentence 4 already tells about the yellow lights that flash before the bus stops, so that is a different part from the stop arm. Look at the choices that are left."
        ],
        how: [
          "Sentence 5 says a stop arm swings out from the side when the bus stops, and sentence 6 says drivers must stop and wait.",
          "So the stop arm is a sign, and its job is to tell drivers to stop.",
          "The answer is: A stop arm is a sign that swings out from the bus to tell drivers to stop.",
          "A door that swings out is about riders getting on, the flashing light is the yellow light from sentence 4, and a bar that lifts does not match anything in the draft."
        ],
        misconception: "A common mix-up is choosing the choice that uses the same action words, like swings out. A definition must tell what the thing is and what it does.",
        why: "The answer is: A stop arm is a sign that swings out from the bus to tell drivers to stop. Sentence 5 says it swings out when the bus stops, and sentence 6 says drivers must stop. A door is for riders, the flashing light is the yellow light, and a bar that lifts is not in the draft." },
      { id: "SK-TT2d-C08", type: "hottext", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: ["p3"], pick: 1,
        prompt: "One sentence in Amina's draft does not belong. Choose the sentence that she should take out.",
        targets: ["p3:2:3", "p3:2:5", "p3:3:1", "p3:3:2", "p3:4:1"],
        answer: ["p3:3:1"],
        clue: "Every sentence in an informational draft should teach about the topic. Ask of each sentence: is this about school buses?",
        hints: [
          "Every sentence in an informational draft should teach about the topic. Ask of each sentence: is this about school buses?",
          "Read each sentence with the one before it and the one after it. A sentence that belongs connects to its neighbors.",
          "Sentence 8 is about the seats inside the bus, so it gives a fact about the topic. Check the sentences that are left."
        ],
        how: [
          "The topic is school buses, so each sentence should tell about them.",
          "Sentence 4 is about the yellow lights, sentence 6 is about what drivers must do, and sentence 9 wraps up the draft about buses.",
          "The answer is sentence 7: \"My uncle drives a red pickup truck with a loud horn.\"",
          "It is about a pickup truck, not a school bus, so it does not teach the reader about the topic."
        ],
        misconception: "A common mix-up is keeping a sentence because it mentions a vehicle. A sentence belongs only if it teaches about school buses.",
        why: "The answer is sentence 7, \"My uncle drives a red pickup truck with a loud horn.\" It is about a pickup truck, not a school bus. Sentences 4, 6, 8 and 9 are all about school buses." },
      { id: "SK-TT2d-C09", type: "ms", points: 2, dok: 2, std: ["3.T.T.2.d"], passages: ["p3"], pick: 2,
        stem: [
          "(2) A school bus is painted a bright yellow color.",
          "(3) That color is easy for other drivers to see."
        ],
        prompt: "Which TWO sentences could Amina add after sentence 3 to give facts that support sentence 3?",
        choices: [
          { text: "Even in dim light at dawn or dusk, this yellow is easy to spot.", correct: true },
          { text: "The bright color stands out from far away, so drivers notice a bus.", correct: true },
          { text: "The first school buses were wagons that were pulled by horses down dirt roads." },
          { text: "Some school buses are built to carry more riders than other buses can carry." },
          { text: "Yellow is the same color as lemons, sunflowers and ripe bananas." }
        ],
        clue: "A fact that supports a sentence gives more information about the same idea. Ask what idea sentence 3 is about.",
        hints: [
          "A fact that supports a sentence gives more information about the same idea. Ask what idea sentence 3 is about.",
          "Reread sentences 2 and 3, and check each choice against the idea in sentence 3. Choose two.",
          "The wagons pulled by horses tell how school buses began, not why the color helps drivers. Look at the choices that are left."
        ],
        how: [
          "Sentence 3 says the color is easy for other drivers to see, so the added facts must tell more about how the color helps them see a bus.",
          "This yellow is easy to spot even in dim light, and a bright color stands out from far away. Both tell why drivers can see a bus.",
          "The answers are: Even in dim light at dawn or dusk, this yellow is easy to spot. And: The bright color stands out from far away, so drivers notice a bus.",
          "The horse wagons, the riders each bus can carry and the lemon-and-banana colors are true or harmless, but none of them tells how the color helps drivers see a bus."
        ],
        misconception: "A common mix-up is choosing a fact because it mentions school buses or the color yellow. A supporting fact must tell more about the same idea.",
        why: "The answers are \"Even in dim light at dawn or dusk, this yellow is easy to spot\" and \"The bright color stands out from far away, so drivers notice a bus.\" Both tell why the color is easy to see. The wagon, rider and fruit sentences do not explain how the color helps drivers." },
      { id: "SK-TT2d-C10", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: ["p3"],
        stem: ["Amina drew Figure 1 to go with her draft."],
        figure: { src: "assets/figures/tt2d-bus-stopped.svg",
          label: "Figure 1",
          caption: "A school bus that has stopped",
          alt: "Drawing of a school bus seen from the side. Two red lights flash on top of the bus, and a stop sign on an arm swings out from the left side. Labels point to the red lights and the stop arm." },
        prompt: "Which caption should Amina write under Figure 1?",
        choices: [
          { text: "A stopped bus has flashing red lights and a stop arm.", correct: true },
          { text: "A bus flashes yellow lights to warn drivers it will stop soon." },
          { text: "Tall, padded seats keep riders safe inside the bus." },
          { text: "Bright yellow paint helps drivers see a school bus from far away." }
        ],
        clue: "A caption tells what a picture shows. It should match what you can see in the picture, and it should help explain the draft.",
        hints: [
          "A caption tells what a picture shows. It should match what you can see in the picture, and it should help explain the draft.",
          "Study Figure 1 and read its labels. Then look for the part of Amina's draft that tells the same facts.",
          "The picture shows the outside of the bus, and the seats are inside. Look at the choices that are left."
        ],
        how: [
          "Read the labels first. Figure 1 labels red lights and a stop arm.",
          "The picture shows a bus that has stopped, so the caption should name what the bus shows when it stops.",
          "The answer is: A stopped bus has flashing red lights and a stop arm.",
          "The yellow lights come before a stop, and the picture labels red lights. The seats are inside the bus, and the picture does not label the paint."
        ],
        misconception: "A common mix-up is picking a true sentence about buses. A caption must describe what this picture shows.",
        why: "The answer is: A stopped bus has flashing red lights and a stop arm. Figure 1 labels red lights and a stop arm. The yellow lights come before the stop, the seats are inside the bus, and the picture does not label the paint." }
    ] },
    { title: "Set 3", items: [
      { id: "SK-TT2d-C11", type: "hottext", points: 2, dok: 2, std: ["3.T.T.2.d"], passages: ["p4"], pick: 2,
        prompt: "Two sentences in Kofi's draft do not belong. Choose the TWO sentences he should take out.",
        targets: ["p4:2:2", "p4:2:4", "p4:3:2", "p4:3:4", "p4:3:5"],
        answer: ["p4:2:4", "p4:3:4"],
        clue: "Every sentence in an informational draft should teach about the topic. Ask of each sentence: is this about magnets?",
        hints: [
          "Every sentence in an informational draft should teach about the topic. Ask of each sentence: is this about magnets?",
          "Read the sentences in paragraphs 2 and 3 one at a time. Choose two.",
          "Sentence 10 tells how two poles act, so it is about magnets. Check the sentences that are left."
        ],
        how: [
          "The topic is magnets, so each sentence should teach about them.",
          "Sentence 3 names things a magnet pulls, sentence 7 names the poles, and sentence 10 tells what two north poles do. Those all teach about magnets.",
          "The answers are sentence 5, \"My cousin got a new puppy last week,\" and sentence 9, \"Our lunch at school today was pizza and fruit.\"",
          "One is about a puppy and one is about lunch, so neither teaches the reader about magnets."
        ],
        misconception: "A common mix-up is stopping after finding one sentence. Read the whole draft, because more than one sentence can be off the topic.",
        why: "The answers are sentence 5, \"My cousin got a new puppy last week,\" and sentence 9, \"Our lunch at school today was pizza and fruit.\" Neither one is about magnets. Sentences 3, 7 and 10 each teach a fact about magnets." },
      { id: "SK-TT2d-C12", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.2.d"], passages: ["p4"],
        prompt: "Kofi wants a better first sentence and a better last sentence for his draft. Choose the best answer for each blank.",
        text: "First sentence: {0} Last sentence: {1}",
        slots: [
          { options: [
              "Magnets are objects that pull on some metals and have two poles.",
              "Refrigerators, toys and many tools use magnets in different ways.",
              "I played with a magnet in the science room at school."
            ],
            answer: 0 },
          { options: [
              "Now you know that magnets pull on some metals and that their poles pull or push each other.",
              "Next, I will write about the strongest magnets in the whole world.",
              "Magnets are the best toys in the world because they are so much fun."
            ],
            answer: 0 }
        ],
        clue: "An introduction names the topic of the whole draft, and a conclusion wraps up what the reader learned. Neither one starts a new topic or gives only one small part.",
        hints: [
          "An introduction names the topic of the whole draft, and a conclusion wraps up what the reader learned. Neither one starts a new topic or gives only one small part.",
          "Read sentences 2 to 10 and decide what the two big ideas are. Then test each choice for both blanks.",
          "A sentence that begins with \"Next, I will write about\" starts a new topic, so it cannot wrap up this draft. Look at the choices that are left for the second blank, and work out the first blank yourself."
        ],
        how: [
          "The first blank needs a sentence that names the topic of the whole draft, and the second blank needs one that wraps it up.",
          "Blank 1: the draft tells what magnets pull and about poles. \"Magnets are objects that pull on some metals and have two poles\" names the topic and fits both parts.",
          "Blank 2: \"Now you know that magnets pull on some metals and that their poles pull or push each other\" sums up what the reader learned.",
          "Using magnets on refrigerators is only one small part, and the science room sentence is about Kofi. \"Next, I will write about\" starts something new, and calling magnets the best toys is an opinion."
        ],
        misconception: "A common mix-up is choosing a sentence that mentions magnets without checking its job. The first sentence must name the whole topic, and the last must wrap it up.",
        why: "Blank 1 needs \"Magnets are objects that pull on some metals and have two poles,\" because it names the whole topic. Blank 2 needs \"Now you know that magnets pull on some metals and that their poles pull or push each other,\" because it wraps up what the reader learned. The other choices give one small part, talk about Kofi, start a new topic or give an opinion." },
      { id: "SK-TT2d-C13", type: "hottext", points: 2, dok: 2, std: ["3.T.T.2.d"], passages: ["p4"], pick: 2,
        figure: { src: "assets/figures/tt2d-magnet-test.svg",
          label: "Figure 1",
          caption: "Testing four objects with a magnet",
          alt: "Four small test pictures. A magnet pulls a paper clip and a steel nail. A magnet does not pull a plastic cup or a wood block. Each picture is labeled pulled or not pulled." },
        prompt: "Kofi wants to put Figure 1 next to his draft. Which TWO sentences does Figure 1 help explain? Choose the two sentences.",
        targets: ["p4:2:2", "p4:2:3", "p4:3:2", "p4:3:3", "p4:3:5"],
        answer: ["p4:2:2", "p4:2:3"],
        clue: "A figure helps explain facts that are hard to picture. Look at what the figure shows, then find the sentences that tell the same facts.",
        hints: [
          "A figure helps explain facts that are hard to picture. Look at what the figure shows, then find the sentences that tell the same facts.",
          "Study Figure 1 and write down what it shows. Then read the sentences in paragraphs 2 and 3 one at a time and ask whether each matches.",
          "Sentence 8 is about two poles, and Figure 1 shows magnets pulling or not pulling four objects. Check the sentences that are left."
        ],
        how: [
          "Figure 1 shows four small pictures of a magnet tested with an object. A paper clip and a steel nail are pulled, and a plastic cup and a wood block are not.",
          "Sentence 3 says paper clips and steel nails stick to a magnet, and sentence 4 says objects made of plastic, wood or glass do not.",
          "The answers are sentence 3 and sentence 4.",
          "Sentences 7, 8 and 10 are about poles. The figure does not show a north pole or a south pole."
        ],
        misconception: "A common mix-up is choosing any sentence about magnets. A figure helps explain only the facts that it actually shows.",
        why: "The answers are sentence 3, \"Paper clips and steel nails stick to a magnet,\" and sentence 4, \"Objects made of plastic, wood or glass do not stick to a magnet.\" Figure 1 shows the paper clip and nail pulled and the plastic cup and wood block not pulled. The sentences about poles are not shown in the figure." },
      { id: "SK-TT2d-C14", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: ["p4"],
        prompt: "Kofi wants to add a sentence after sentence 6 that tells what a pole is. Which sentence fits best?",
        choices: [
          { text: "A pole is an end of a magnet, where its pull is strongest.", correct: true },
          { text: "Magnets come in many shapes, such as bars, rings and horseshoes." },
          { text: "A pole is also a long stick that holds up a flag or a sign." },
          { text: "The Earth has a north pole and a south pole too." }
        ],
        clue: "A sentence that tells what a word means should tell what the thing is, in a way that fits this topic.",
        hints: [
          "A sentence that tells what a word means should tell what the thing is, in a way that fits this topic.",
          "Reread sentences 6 and 7 to see how the word pole is used in this draft. Then check each choice.",
          "A pole that holds up a flag is a different meaning of the word from the one in this draft. Look at the choices that are left."
        ],
        how: [
          "Sentence 6 says every magnet has two poles, and sentence 7 names them north and south. The new sentence must tell what a pole is on a magnet.",
          "The ends of a magnet are where its pull is strongest, so they are its poles.",
          "The answer is: A pole is an end of a magnet, where its pull is strongest.",
          "The shapes sentence is about magnets but does not define a pole. The flag pole is a different meaning, and the Earth sentence is about the planet, not a magnet."
        ],
        misconception: "A common mix-up is picking a sentence that uses the word pole. A definition has to give the meaning that fits the draft.",
        why: "The answer is: A pole is an end of a magnet, where its pull is strongest. It tells what a pole is on a magnet. The shapes sentence does not define pole, a flag pole is a different meaning, and the Earth sentence is about the planet." },
      { id: "SK-TT2d-C15", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.d"], passages: [],
        stem: [
          "Two students wrote about bike helmets.",
          "Draft A: (1) I will tell you a few things. (2) A helmet has a hard shell that spreads out a hit. (3) Soft foam inside slows the head down. (4) A helmet helps keep a rider's head safe.",
          "Draft B: (1) Bike helmets protect the head when a rider falls. (2) A hard shell spreads out a hit. (3) Soft foam inside slows the head down. (4) My bike is blue and has a basket. (5) A helmet helps keep a rider's head safe."
        ],
        prompt: "Which statement tells what each draft needs?",
        choices: [
          { text: "Draft A needs a better introduction, and Draft B has a sentence that should be taken out.", correct: true },
          { text: "Draft A has a sentence that should be taken out, and Draft B needs a better introduction." },
          { text: "Draft A needs a better conclusion, and Draft B has a sentence that should be taken out." },
          { text: "Each draft has a sentence that should be taken out." }
        ],
        clue: "Check each draft for an introduction, facts that stay on topic, and a conclusion.",
        hints: [
          "Check each draft for an introduction, facts that stay on topic, and a conclusion.",
          "Read the first sentence and the last sentence of each draft. Then read the sentences in between and ask whether each one is about helmets.",
          "Draft B's first sentence names its topic, helmets. Look at the choices that are left."
        ],
        how: [
          "Check the parts one at a time for each draft.",
          "Draft A's first sentence, \"I will tell you a few things,\" does not name the topic, so it needs a better introduction. All of its other sentences are about helmets.",
          "Draft B starts well and ends well, but \"My bike is blue and has a basket\" is not about helmets.",
          "The answer is: Draft A needs a better introduction, and Draft B has a sentence that should be taken out."
        ],
        misconception: "A common mix-up is looking for the same problem in both drafts. Each draft can have a different part that needs work.",
        why: "The answer is: Draft A needs a better introduction, and Draft B has a sentence that should be taken out. Draft A never names helmets in its first sentence. Draft B names helmets, but sentence 4 is about the writer's bike. Both drafts end with a good conclusion." }
    ] }
  ] },
  similar: [
    { id: "SK-TT2d-S01", type: "match", points: 2, dok: 2, std: ["3.T.T.2.d"], passages: [], like: ["SK-TT2d-P5"],
      prompt: "Sort each hourglass sentence into the introduction, the middle or the conclusion.",
      cols: ["Opens the topic", "Gives a fact or detail", "Wraps up the topic"],
      rows: [
        { text: "In short, falling sand lets an hourglass keep track of time.", answer: 2 },
        { text: "An hourglass has two glass bulbs joined by a narrow neck.", answer: 1 },
        { text: "Long ago, people needed a way to tell how much time had passed, and this report tells about one tool they used.", answer: 0 },
        { text: "The sand takes the same amount of time to fall each time the bulbs are turned over.", answer: 1 }
      ],
      clue: "Ask what job each sentence does. Does it open the topic, teach a fact, or wrap up what the reader learned?",
      hints: [
        "Ask what job each sentence does. Does it open the topic, teach a fact, or wrap up what the reader learned?",
        "Read each sentence by itself and ask whether it would work as the first sentence of a draft, a fact in the middle, or the last sentence.",
        "The sentence about the glass bulbs and the narrow neck gives a fact about what an hourglass is made of, so it belongs in the middle. Match the other rows yourself."
      ],
      how: [
        "The sentence about people long ago that says what the report tells about opens the topic, so it is the introduction.",
        "The sentences about the two glass bulbs and about the sand taking the same time are facts, so they belong in the middle.",
        "\"In short, falling sand lets an hourglass keep track of time\" wraps up what the reader learned, so it is the conclusion.",
        "So the matches are: the sentence about people long ago is the introduction, the bulbs and sand-time sentences are middle facts, and the \"In short\" sentence is the conclusion."
      ],
      misconception: "A common mix-up is putting a fact in the introduction because it is about the topic. The introduction opens the topic, and facts belong in the middle.",
      why: "The sentence about people long ago that says what the report tells about opens the topic, so it is the introduction. The sentences about the glass bulbs and about the sand taking the same time are facts for the middle. \"In short, falling sand lets an hourglass keep track of time\" wraps up, so it is the conclusion." },
    { id: "SK-TT2d-S02", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: [], like: ["SK-TT2d-C02"],
      stem: [
        "(1) A yo-yo goes up and down on a string.",
        "(2) The string is wrapped around a small axle between two round halves.",
        "(3) When you let go, the yo-yo spins down the string."
      ],
      prompt: "Which sentence could be added after sentence 3 to support sentence 1?",
      choices: [
        { text: "A quick tug on the string makes it spin back up to your hand.", correct: true },
        { text: "Some yo-yos are made of plastic, and some are made of wood." },
        { text: "Many toys come in boxes with bright pictures on the front." },
        { text: "Marbles and jacks are other toys that children like to play with." }
      ],
      clue: "A sentence that supports an idea gives more information about that same idea. Ask what idea sentence 1 states.",
      hints: [
        "A sentence that supports an idea gives more information about that same idea. Ask what idea sentence 1 states.",
        "Reread sentences 1 to 3 and picture a yo-yo moving. Then ask which choice tells more about how it goes up and down.",
        "A sentence about what yo-yos are made of tells about the material, not about how a yo-yo moves. Look at the choices that are left."
      ],
      how: [
        "Sentence 1 says a yo-yo goes up and down on a string, so a supporting sentence must tell more about that movement.",
        "Sentence 3 tells how it goes down. The sentence about the tug tells how it comes back up.",
        "The answer is: A quick tug on the string makes it spin back up to your hand.",
        "Plastic and wood, toy boxes, and marbles and jacks may be true, but they do not explain how a yo-yo goes up and down."
      ],
      misconception: "A common mix-up is picking any true fact about the topic. A supporting sentence must tell more about the exact idea it supports.",
      why: "The answer is: A quick tug on the string makes it spin back up to your hand. It tells more about how a yo-yo goes up and down. The other sentences are about materials, toy boxes or other toys." },
    { id: "SK-TT2d-S03", type: "order", points: 2, dok: 2, std: ["3.T.T.2.d"], passages: [], like: ["SK-TT2d-C03"],
      prompt: "A student wrote four sentences about making a jelly sandwich. Put them in the order that makes the most sense.",
      steps: [
        "First, lay two slices of bread on a plate.",
        "Next, spread jelly on one slice with a knife.",
        "Then press the two slices together.",
        "Last, cut the sandwich in half and enjoy it."
      ],
      clue: "Put the steps in the order they would really happen. Ask what must be finished before each next step can start.",
      hints: [
        "Put the steps in the order they would really happen. Ask what must be finished before each next step can start.",
        "Look for clue words such as first, next, then and last in the sentences. Then check that each step makes sense after the one before it.",
        "The slices cannot be pressed together until jelly is on one of them, so the pressing comes after the spreading. Use that to place two of the sentences, then decide where the others go."
      ],
      how: [
        "The bread has to be on the plate before anything can be spread on it, so laying the slices comes first.",
        "Then the jelly is spread, and then the slices are pressed together.",
        "Last, the sandwich is cut and eaten.",
        "The order is: lay two slices of bread on a plate, spread jelly, press the slices together, cut the sandwich in half."
      ],
      misconception: "A common mix-up is ignoring clue words. Words like first and last show where a step belongs.",
      why: "The order is: First, lay two slices of bread on a plate; next, spread jelly on one slice with a knife; then press the two slices together; last, cut the sandwich in half and enjoy it. Each step needs the one before it." },
    { id: "SK-TT2d-S04", type: "dropdown", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: [], like: ["SK-TT2d-C04"],
      stem: [
        "A student wrote this sentence about pencils: \"The ferrule holds the eraser on the end of the pencil.\""
      ],
      prompt: "Which meaning of ferrule fits her sentence best?",
      text: "Here, a ferrule is {0}.",
      slots: [
        { options: ["a metal band that holds the eraser in place", "a soft tip that makes dark marks on paper", "a small tool that sharpens the pencil"], answer: 0 }
      ],
      clue: "A definition tells what a word means. Use the way the word is used in the sentence to figure it out.",
      hints: [
        "A definition tells what a word means. Use the way the word is used in the sentence to figure it out.",
        "Read the sentence about the ferrule again. Ask what the ferrule does and where it is on the pencil.",
        "A tool that sharpens the pencil is not part of the pencil, so it cannot be something on the end that holds the eraser. Look at the choices that are left."
      ],
      how: [
        "The sentence says the ferrule holds the eraser on the end of the pencil, so it is a part of the pencil.",
        "A part that holds something in place is a band that wraps around it.",
        "The answer is: A ferrule is a metal band that holds the eraser in place.",
        "The soft tip that makes dark marks is the lead, and the sharpener is a separate tool."
      ],
      misconception: "A common mix-up is picking the pencil part you already know. Use what the sentence says the word does.",
      why: "The answer is: A ferrule is a metal band that holds the eraser in place. The sentence says the ferrule holds the eraser on the end of the pencil. The tip that makes marks is the lead, and a sharpener is a separate tool." },
    { id: "SK-TT2d-S05", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: [], like: ["SK-TT2d-P4"],
      stem: [
        "(1) An abacus is a counting tool with beads on rods.",
        "(2) A person slides the beads to show numbers.",
        "(3) People have used abaci to add and subtract for thousands of years.",
        "(4) That is all."
      ],
      prompt: "Sentence 4 is a weak ending. Which choice wraps up the abacus draft best?",
      choices: [
        { text: "With beads that slide on rods, an abacus helps people count and add.", correct: true },
        { text: "Next, I will tell you how a calculator works." },
        { text: "Some abaci have ten rods, and some have more than ten." },
        { text: "I think that counting on my fingers is much easier." }
      ],
      clue: "A conclusion wraps up the whole topic. Ask of each choice: does it sum up the main idea of the whole draft?",
      hints: [
        "A conclusion wraps up the whole topic. Ask of each choice: does it sum up the main idea of the whole draft?",
        "Reread sentences 1 to 3 and think about the big idea they share. Then compare each choice with it.",
        "A sentence that begins with \"Next, I will tell you about\" starts a new topic. Look at the choices that are left."
      ],
      how: [
        "A conclusion reminds the reader of the main idea without starting anything new.",
        "Sentences 1 to 3 all tell about how an abacus uses beads on rods to help people count.",
        "The answer is: With beads that slide on rods, an abacus helps people count and add.",
        "The calculator sentence starts a new topic, the sentence about ten rods adds a new fact, and the finger sentence is an opinion about something else."
      ],
      misconception: "A common mix-up is choosing a true sentence about abaci. A conclusion must wrap up the topic instead of adding a fact.",
      why: "The answer is: With beads that slide on rods, an abacus helps people count and add. It wraps up the main idea of the draft. The calculator sentence starts a new topic, the ten rods sentence adds a new fact, and the finger sentence is an opinion." },
    { id: "SK-TT2d-S06", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: [], like: ["SK-TT2d-C06"],
      stem: [
        "(1) I like gadgets.",
        "(2) A kitchen timer is set for a number of minutes.",
        "(3) It counts down until it reaches zero.",
        "(4) Then it rings so the cook knows the time is up."
      ],
      prompt: "Which sentence should replace sentence 1 as a better introduction?",
      choices: [
        { text: "A kitchen timer is a tool that helps a cook keep track of time.", correct: true },
        { text: "Clocks, watches and calendars are tools that people use every day." },
        { text: "My aunt gave me a red kitchen timer shaped like a tomato." },
        { text: "In the end, a timer makes cooking easier for everyone." }
      ],
      clue: "An introduction names the topic of the whole draft. It should fit everything that comes after it, not just one small part.",
      hints: [
        "An introduction names the topic of the whole draft. It should fit everything that comes after it, not just one small part.",
        "Read sentences 2 to 4 and notice what they share. Then check each choice against that.",
        "A sentence that begins with \"In the end\" sounds like a conclusion. Look at the choices that are left."
      ],
      how: [
        "An introduction tells the topic of the whole draft.",
        "Sentences 2 to 4 tell how a timer is set, how it counts down and how it rings. All of them are about kitchen timers.",
        "The answer is: A kitchen timer is a tool that helps a cook keep track of time.",
        "The sentence about clocks and calendars is about other tools, the tomato sentence is about the writer's aunt, and \"In the end\" sounds like an ending."
      ],
      misconception: "A common mix-up is choosing a sentence that names similar tools. The introduction must name the topic of this draft.",
      why: "The answer is: A kitchen timer is a tool that helps a cook keep track of time. It names the topic and fits the facts that follow. The clock sentence is about other tools, the tomato sentence is about the writer's aunt, and \"In the end\" sounds like a conclusion." },
    { id: "SK-TT2d-S07", type: "dropdown", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: [], like: ["SK-TT2d-C07"],
      stem: [
        "In a draft about the sea, one line reads: \"An iceberg floats in the ocean, and most of it is hidden under the water.\""
      ],
      prompt: "What should the next sentence say an iceberg is? Pick the best ending.",
      text: "A good definition: an iceberg is {0}.",
      slots: [
        { options: [
            "a huge piece of ice that floats in the sea",
            "a small ice cube that melts in a glass",
            "a thin layer of frost on a window",
            "a cold wind that blows over the water"
          ],
          answer: 0 }
      ],
      clue: "A definition tells what a word means. Look for what the thing is and what it does.",
      hints: [
        "A definition tells what a word means. Look for what the thing is and what it does.",
        "Read the student's sentence again. Ask where an iceberg is and what it is made of.",
        "A small ice cube melting in a glass cannot float in the ocean with most of it hidden. Look at the choices that are left."
      ],
      how: [
        "The sentence says an iceberg floats in the ocean and most of it is under the water, so it is something big that floats.",
        "A huge piece of ice that floats in the sea fits both parts.",
        "The answer is: An iceberg is a huge piece of ice that floats in the sea.",
        "An ice cube in a glass, frost on a window and a cold wind do not float in the ocean with most of them under the water."
      ],
      misconception: "A common mix-up is choosing any choice about cold things. A definition must match what the sentence says the thing does.",
      why: "The answer is: An iceberg is a huge piece of ice that floats in the sea. The sentence says an iceberg floats in the ocean with most of it under the water. An ice cube, frost and a cold wind do not." },
    { id: "SK-TT2d-S08", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: [], like: ["SK-TT2d-C08"],
      stem: [
        "(1) An anthill is a mound of soil built by ants.",
        "(2) Ants dig tunnels inside it.",
        "(3) Some tunnels lead to rooms where the queen lays eggs.",
        "(4) My brother is learning to play the trumpet.",
        "(5) Worker ants carry food into the anthill."
      ],
      prompt: "One sentence wanders away from the topic of this draft. Which one is it?",
      choices: [
        { text: "(4) My brother is learning to play the trumpet.", correct: true },
        { text: "(2) Ants dig tunnels inside it." },
        { text: "(3) Some tunnels lead to rooms where the queen lays eggs." },
        { text: "(5) Worker ants carry food into the anthill." }
      ],
      clue: "Every sentence in an informational draft should teach about the topic. Ask of each sentence: is this about anthills?",
      hints: [
        "Every sentence in an informational draft should teach about the topic. Ask of each sentence: is this about anthills?",
        "Read each sentence with the one before it and the one after it. A sentence that belongs connects to its neighbors.",
        "Sentence 5 tells what the worker ants do, so it gives a fact about the topic. Check the sentences that are left."
      ],
      how: [
        "The topic is anthills, so each sentence should teach about them.",
        "Sentence 2 tells about tunnels, sentence 3 tells about the queen's rooms, and sentence 5 tells about worker ants. All of them are about the anthill.",
        "The answer is sentence 4: \"My brother is learning to play the trumpet.\"",
        "It is about the writer's brother and music, not about anthills."
      ],
      misconception: "A common mix-up is keeping a sentence because it is a true statement. A sentence belongs only if it teaches about the topic.",
      why: "The answer is: (4) My brother is learning to play the trumpet. It is about the writer's brother, not about anthills. Sentences 2, 3 and 5 each give a fact about the anthill." },
    { id: "SK-TT2d-S09", type: "ms", points: 2, dok: 2, std: ["3.T.T.2.d"], passages: [], pick: 2, like: ["SK-TT2d-C09"],
      stem: [
        "(1) Windmills use the wind to do work.",
        "(2) The wind pushes on the long blades, and the blades turn."
      ],
      prompt: "Choose the two facts that back up sentence 1.",
      choices: [
        { text: "Some windmills use the turning blades to pump water out of the ground.", correct: true },
        { text: "Other windmills use the turning blades to grind grain into flour.", correct: true },
        { text: "Many windmills have four blades, and some have more than four." },
        { text: "Windmills are tall, and people can see them from far away." },
        { text: "Wind can also blow leaves across the yard." }
      ],
      clue: "A fact that supports a sentence gives more information about the same idea. Ask what idea sentence 1 is about.",
      hints: [
        "A fact that supports a sentence gives more information about the same idea. Ask what idea sentence 1 is about.",
        "Reread sentences 1 and 2, and check each choice against the idea in sentence 1. Choose two.",
        "The number of blades tells what a windmill looks like, not what work it does. Look at the choices that are left."
      ],
      how: [
        "Sentence 1 says windmills use the wind to do work, so the added facts must tell what work a windmill does.",
        "Pumping water out of the ground and grinding grain into flour are two jobs a windmill can do with its turning blades.",
        "The answers are: Some windmills use the turning blades to pump water out of the ground. And: Other windmills use the turning blades to grind grain into flour.",
        "The number of blades, how tall a windmill is and wind blowing leaves tell about looks or wind, not about work a windmill does."
      ],
      misconception: "A common mix-up is choosing a fact because it mentions windmills or wind. A supporting fact must tell more about the same idea.",
      why: "The answers are \"Some windmills use the turning blades to pump water out of the ground\" and \"Other windmills use the turning blades to grind grain into flour.\" Both tell what work windmills do. The other sentences tell about blades, height or wind." },
    { id: "SK-TT2d-S10", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: [], like: ["SK-TT2d-C10"],
      stem: ["A student drew Figure 1 for a report about windsocks."],
      figure: { src: "assets/figures/tt2d-windsock.svg",
        label: "Figure 1",
        caption: "A windsock",
        alt: "Drawing of a windsock on a tall pole. The cloth cone points to the right. Labels point to the pole, the wide end of the cone and the narrow end of the cone." },
      prompt: "Which caption should the student write under Figure 1?",
      choices: [
        { text: "The main parts of a windsock", correct: true },
        { text: "A windsock at an airport during a big storm" },
        { text: "How wind makes a kite fly high" },
        { text: "Where windsocks are made and sold" }
      ],
      clue: "A caption tells what a picture shows. It should match what you can see.",
      hints: [
        "A caption tells what a picture shows. It should match what you can see.",
        "Study Figure 1 and read its labels. Then compare what the labels name with what each caption says.",
        "Figure 1 has no clouds, lightning or airport in it. Look at the choices that are left."
      ],
      how: [
        "Read the labels first. Figure 1 labels a pole, a wide end and a narrow end.",
        "Labels that name parts show a picture of the parts of one thing.",
        "The answer is: The main parts of a windsock.",
        "The picture shows no storm or airport, it is not about a kite, and it does not show where windsocks are made."
      ],
      misconception: "A common mix-up is choosing a caption that fits the topic. A caption must describe what this picture shows.",
      why: "The answer is: The main parts of a windsock. Figure 1 labels the pole, the wide end and the narrow end. The picture shows no storm or airport, no kite, and no factory." },
    { id: "SK-TT2d-S11", type: "ms", points: 2, dok: 2, std: ["3.T.T.2.d"], passages: [], pick: 2, like: ["SK-TT2d-C11"],
      stem: [
        "(1) A parachute helps a person float down slowly.",
        "(2) It is a large piece of cloth that catches the air.",
        "(3) My shoes are wet from the puddle.",
        "(4) The air pushes up against the cloth and slows the fall.",
        "(5) Yesterday we ate noodles for dinner."
      ],
      prompt: "Two lines in this parachute draft wander off the topic. Which two should be cut?",
      choices: [
        { text: "(3) My shoes are wet from the puddle.", correct: true },
        { text: "(5) Yesterday we ate noodles for dinner.", correct: true },
        { text: "(2) It is a large piece of cloth that catches the air." },
        { text: "(4) The air pushes up against the cloth and slows the fall." }
      ],
      clue: "Every sentence in an informational draft should teach about the topic. Ask of each sentence: is this about parachutes?",
      hints: [
        "Every sentence in an informational draft should teach about the topic. Ask of each sentence: is this about parachutes?",
        "Read the sentences one at a time. Choose two.",
        "Sentence 4 tells how the cloth slows the fall, so it is about the parachute. Look at the choices that are left."
      ],
      how: [
        "The topic is parachutes, so each sentence should teach about them.",
        "Sentence 2 tells what a parachute is made of, and sentence 4 tells how it slows the fall.",
        "The answers are \"(3) My shoes are wet from the puddle.\" and \"(5) Yesterday we ate noodles for dinner.\"",
        "One is about wet shoes and one is about dinner, so neither teaches about parachutes."
      ],
      misconception: "A common mix-up is stopping after finding one sentence. More than one sentence can be off the topic.",
      why: "The answers are \"(3) My shoes are wet from the puddle.\" and \"(5) Yesterday we ate noodles for dinner.\" Neither is about parachutes. Sentences 2 and 4 tell facts about a parachute." },
    { id: "SK-TT2d-S12", type: "dropdown", points: 2, dok: 3, std: ["3.T.T.2.d"], passages: [], like: ["SK-TT2d-C12"],
      stem: [
        "(2) Maple syrup comes from the sap of maple trees.",
        "(3) People collect the sap in buckets or tubes.",
        "(4) Then they boil the sap until it turns into thick syrup."
      ],
      prompt: "Pick the opening and the closing that make this maple syrup report stronger.",
      text: "Opening: {0} Closing: {1}",
      slots: [
        { options: [
            "Maple syrup is a sweet food that people make from tree sap.",
            "Pancakes taste good with many kinds of toppings.",
            "I had maple syrup on my waffles this morning."
          ],
          answer: 0 },
        { options: [
            "Now you know that sap from maple trees becomes sweet syrup.",
            "Next, I will write about how to cook pancakes.",
            "Maple syrup is the very best food on any breakfast table."
          ],
          answer: 0 }
      ],
      clue: "An introduction names the topic of the whole draft, and a conclusion wraps up what the reader learned. Neither one starts a new topic or gives only one small part.",
      hints: [
        "An introduction names the topic of the whole draft, and a conclusion wraps up what the reader learned. Neither one starts a new topic or gives only one small part.",
        "Read sentences 2 to 4 and decide what the big idea is. Then test each choice for both blanks.",
        "A sentence that begins with \"Next, I will write about\" starts a new topic, so it cannot wrap up this draft. Look at the choices that are left for the second blank, and work out the first blank yourself."
      ],
      how: [
        "The first blank needs a sentence that names the topic of the whole draft, and the second blank needs one that wraps it up.",
        "Blank 1: the draft tells how syrup is made from sap. \"Maple syrup is a sweet food that people make from tree sap\" names that topic.",
        "Blank 2: \"Now you know that sap from maple trees becomes sweet syrup\" sums up what the reader learned.",
        "The pancake sentence is about a different food, the waffle sentence is about the writer, \"Next, I will write about\" starts something new, and \"the very best food\" is an opinion."
      ],
      misconception: "A common mix-up is choosing a sentence that mentions syrup without checking its job. The first sentence must name the whole topic, and the last must wrap it up.",
      why: "Blank 1 needs \"Maple syrup is a sweet food that people make from tree sap,\" because it names the whole topic. Blank 2 needs \"Now you know that sap from maple trees becomes sweet syrup,\" because it wraps up what the reader learned. The other choices are about a different food, the writer, a new topic or an opinion." },
    { id: "SK-TT2d-S13", type: "ms", points: 2, dok: 2, std: ["3.T.T.2.d"], passages: [], pick: 2, like: ["SK-TT2d-C13"],
      stem: [
        "(1) Some things float in water, and some things sink.",
        "(2) A cork and an apple float on top of the water.",
        "(3) A rock and a coin sink to the bottom.",
        "(4) Many people like to swim in a lake or a pool.",
        "(5) Boats can float even though they are very heavy."
      ],
      figure: { src: "assets/figures/tt2d-sink-float.svg",
        label: "Figure 1",
        caption: "Four objects in a tank of water",
        alt: "Drawing of a tank of water with four objects. A cork and an apple float at the top of the water. A rock and a coin rest on the bottom. Each object has a label." },
      prompt: "Figure 1 will sit beside this draft. Pick the TWO sentences it helps explain.",
      choices: [
        { text: "(2) A cork and an apple float on top of the water.", correct: true },
        { text: "(3) A rock and a coin sink to the bottom.", correct: true },
        { text: "(4) Many people like to swim in a lake or a pool." },
        { text: "(5) Boats can float even though they are very heavy." }
      ],
      clue: "A figure helps explain facts that are hard to picture. Look at what the figure shows, then find the sentences that tell the same facts.",
      hints: [
        "A figure helps explain facts that are hard to picture. Look at what the figure shows, then find the sentences that tell the same facts.",
        "Study Figure 1 and write down what it shows. Then read the sentences one at a time and ask whether each matches. Choose two.",
        "Figure 1 shows a tank with four small objects, and it has no boats. Look at the choices that are left."
      ],
      how: [
        "Figure 1 shows a tank of water with four objects. A cork and an apple float at the top, and a rock and a coin rest at the bottom.",
        "Sentence 2 says a cork and an apple float, and sentence 3 says a rock and a coin sink.",
        "The answers are sentence 2 and sentence 3.",
        "Sentence 4 is about swimming, and sentence 5 is about boats. The figure does not show either."
      ],
      misconception: "A common mix-up is choosing any sentence about floating. A figure helps explain only the facts that it actually shows.",
      why: "The answers are \"(2) A cork and an apple float on top of the water.\" and \"(3) A rock and a coin sink to the bottom.\" Figure 1 shows exactly those four objects. The swimming and boat sentences are not shown." },
    { id: "SK-TT2d-S14", type: "mc", points: 1, dok: 2, std: ["3.T.T.2.d"], passages: [], like: ["SK-TT2d-C14"],
      stem: [
        "(1) A harbor is a safe place for boats near the shore.",
        "(2) Many fishing boats and ferries stop at the harbor each day."
      ],
      prompt: "Which choice tells the reader what a harbor is?",
      choices: [
        { text: "A harbor is a part of the sea that is protected from strong waves.", correct: true },
        { text: "A harbor is also a word that means to keep a secret feeling inside." },
        { text: "Boats come in many sizes, from tiny rowboats to huge ships." },
        { text: "Fishing boats leave early in the morning and come back at night." }
      ],
      clue: "A sentence that tells what a word means should tell what the thing is, in a way that fits this topic.",
      hints: [
        "A sentence that tells what a word means should tell what the thing is, in a way that fits this topic.",
        "Reread sentences 1 and 2 to see how the word harbor is used in this draft. Then check each choice.",
        "A word that means keeping a feeling inside is a different meaning from the one in this draft. Look at the choices that are left."
      ],
      how: [
        "Sentence 1 says a harbor is a safe place for boats near the shore, and sentence 2 says boats stop there.",
        "So a harbor is a part of the sea where boats are protected from strong waves.",
        "The answer is: A harbor is a part of the sea that is protected from strong waves.",
        "The secret feeling sentence is a different meaning, the sentence about sizes is about boats, and the sentence about fishing is about when boats leave."
      ],
      misconception: "A common mix-up is picking a sentence that uses the word. A definition has to give the meaning that fits the draft.",
      why: "The answer is: A harbor is a part of the sea that is protected from strong waves. It tells what a harbor is. The secret feeling sentence is a different meaning, and the other sentences are about boats." },
    { id: "SK-TT2d-S15", type: "mc", points: 1, dok: 3, std: ["3.T.T.2.d"], passages: [], like: ["SK-TT2d-C15"],
      stem: [
        "Here are two short reports on tape measures.",
        "First draft: A tape measure is a tool that tells how long something is. It has a long, thin strip marked with inches or centimeters. A spring inside pulls the strip back into its case. The end.",
        "Second draft: Here is a page. A tape measure has a long, thin strip marked with inches or centimeters. A spring inside pulls the strip back into its case. With its numbers and its spring, a tape measure is a handy tool for measuring."
      ],
      prompt: "What does each student still need to fix?",
      choices: [
        { text: "The first draft needs a better conclusion, and the second draft needs a better introduction.", correct: true },
        { text: "The first draft needs a better introduction, and the second draft needs a better conclusion." },
        { text: "Both drafts need a better introduction." },
        { text: "The first draft needs a sentence taken out, and the second draft needs a better conclusion." }
      ],
      clue: "Check each draft for an introduction, facts that stay on topic, and a conclusion.",
      hints: [
        "Check each draft for an introduction, facts that stay on topic, and a conclusion.",
        "Read the first sentence and the last sentence of each draft. Then read the sentences in between.",
        "Every sentence in both drafts is about tape measures, so no sentence needs to be taken out. Look at the choices that are left."
      ],
      how: [
        "Check the parts one at a time for each draft.",
        "The first draft's first sentence names the topic, but \"The end\" does not wrap up what the reader learned, so it needs a better conclusion.",
        "The second draft's last sentence sums up the numbers and the spring, but \"Here is a page\" does not name the topic, so it needs a better introduction.",
        "The answer is: The first draft needs a better conclusion, and the second draft needs a better introduction."
      ],
      misconception: "A common mix-up is looking for the same problem in both drafts. Each draft can have a different part that needs work.",
      why: "The answer is: The first draft needs a better conclusion, and the second draft needs a better introduction. The first draft names tape measures at the start but ends with only \"The end.\" The second draft ends well, but its first sentence does not name the topic. Every sentence in both drafts is about tape measures." }
  ],
  addons: {
    "SK-TT2d-P1": {
      hints: [
        "An introduction names the topic of the whole draft. Read the whole draft and decide what every paragraph is about.",
        "Look at sentences 2 to 9 and find the idea that shows up in every paragraph. Then check each choice against it.",
        "A sentence that begins with \"In the end\" sounds like it belongs at the end of a draft. Look at the choices that are left."
      ],
      how: [
        "An introduction tells the reader the topic of the whole draft.",
        "Rosa's paragraphs are about how peanuts grow, what they are, and where they grow, so the topic is peanuts.",
        "The answer is: Peanuts are a popular food, and there is a lot to learn about them.",
        "The sandwich sentence is about Rosa's family, the farmer sentence is about farmers, and \"In the end\" sounds like a conclusion."
      ],
      misconception: "A common mix-up is choosing a sentence about a part of the topic. An introduction must name the topic of the whole draft." },
    "SK-TT2d-P2": {
      hints: [
        "Sentence 7 tells what peanuts are not. The new sentence should tell what they are.",
        "Reread sentence 7 and the words \"not really nuts.\" Ask which choice finishes that thought.",
        "Pecans are real nuts, so a sentence about them does not tell what peanuts are. Look at the choices that are left."
      ],
      how: [
        "Sentence 7 says peanuts are not really nuts, so the next sentence should say what they are.",
        "They are legumes, which are plants that grow seeds in pods, like peas.",
        "The answer is: They are legumes, which are plants that grow seeds in pods, like peas.",
        "Cooking peanuts, people who cannot eat them and pecans do not finish the thought."
      ],
      misconception: "A common mix-up is choosing a fact because it is about peanuts. The new sentence must answer the question that sentence 7 raises." },
    "SK-TT2d-P3": {
      hints: [
        "The topic is peanuts. Ask of each sentence: does it teach the reader about peanuts?",
        "Read sentences 2 to 9 one at a time, and read each with the sentence before it.",
        "Sentence 9 is about Georgia farmers and their peanuts, so it is about the topic. Check the sentences that are left."
      ],
      how: [
        "The topic is peanuts, so each sentence should teach about them.",
        "Sentences 3, 4 and 7 each teach something about peanuts, so they belong.",
        "The answer is sentence 8: \"My best friend likes to eat apples with her lunch.\"",
        "It is about apples and Rosa's friend, not about peanuts."
      ],
      misconception: "A common mix-up is keeping a sentence because it is about food. A sentence belongs only if it teaches about the topic." },
    "SK-TT2d-P4": {
      hints: [
        "A conclusion wraps up the whole topic. Ask of each choice: does it sum up the main idea of the whole draft?",
        "Read sentences 2 to 9, and think about the big idea they share. Then compare each choice with it.",
        "A sentence that begins with \"Next,\" starts a new topic. Look at the choices that are left."
      ],
      how: [
        "A conclusion reminds the reader of the topic and the most important idea.",
        "Rosa's draft is about how peanuts grow.",
        "The answer is: From a yellow flower to a shell underground, peanuts are amazing plants.",
        "The sandwich sentence starts a new topic, the warm weather sentence adds a new fact, and the apple sentence is an opinion about a different food."
      ],
      misconception: "A common mix-up is choosing a true fact about peanuts. A conclusion wraps up the draft instead of adding a new fact." },
    "SK-TT2d-P5": {
      hints: [
        "Ask what job each sentence does: open the topic, give a fact, or wrap up what the reader learned.",
        "Read each sentence by itself and ask whether it would work as the first sentence of a draft, a fact in the middle, or the last sentence.",
        "The sentence about roasting and boiling gives a fact about what people do with peanuts, so it belongs in the middle. Match the other rows yourself."
      ],
      how: [
        "A sentence that asks the reader a question and says \"Read on\" opens the topic, so it is the introduction.",
        "Warm weather and sandy soil, and roasting, boiling and peanut butter, are facts, so they belong in the middle.",
        "\"Now you know why peanuts are such a special plant\" wraps up what the reader learned, so it is the conclusion.",
        "So the matches are: the question is the introduction, the two fact sentences are the middle, and the \"Now you know\" sentence is the conclusion."
      ],
      misconception: "A common mix-up is putting a fact in the introduction because it names the topic. The introduction opens the topic, and facts belong in the middle." },
    "SK-TT2d-P6": {
      hints: [
        "A picture with a caption should help explain the facts it sits next to. Ask what sentences 4 and 5 say.",
        "Reread sentences 4 and 5, then ask what each choice's picture would show a reader about those sentences.",
        "The farmer in the field goes with sentence 6, where farmers dig up the plants. Look at the choices that are left."
      ],
      how: [
        "Sentences 4 and 5 describe a part of the plant that is hard to picture in words.",
        "A diagram that shows the plant above and below the ground, with labels, lets the reader see it.",
        "The answer is: a diagram of a peanut plant above and below the ground, labeled flower, peg and shell, with the caption \"How a peanut grows\".",
        "The jar of peanut butter does not show how peanuts grow, the farmer goes with sentence 6, and the map of Georgia goes with sentence 9."
      ],
      misconception: "A common mix-up is choosing a picture that is about peanuts. The picture must help explain the sentences it sits next to." }
  },
  /* B4-b4a end ---------- */
  test: [
    { id: "SK-TT2d-T1", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Kenji wants to add an opening sentence that tells the reader what his whole draft will be about. Which sentence should he add before sentence 1?",
      choices: [
        { text: "Bats may look strange, but they are amazing animals with special skills.", correct: true },
        { text: "Mice and rats are small animals that some people are afraid of." },
        { text: "I saw a movie last summer that had a scary bat in it." },
        { text: "In conclusion, bats are special in many different ways." }
      ],
      clue: "An introduction names the topic of the whole draft and makes the reader want to learn more. It does not sound like an ending.",
      why: "The answer is \"Bats may look strange, but they are amazing animals with special skills.\" It names the topic, bats, and leads into the facts. Mice and rats are a different topic, the movie sentence is about Kenji, and \"In conclusion\" belongs at the end." },
    { id: "SK-TT2d-T2", type: "hottext", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence does not belong in Kenji's draft? Choose the sentence.",
      targets: ["p2:2:2", "p2:2:4", "p2:2:5", "p2:3:1", "p2:3:3"],
      answer: ["p2:2:5"], pick: 1,
      clue: "Every sentence in an informational piece should teach about the topic. Find the sentence that is about something else.",
      why: "The answer is \"(8) My sister wants to get a pet hamster.\" It is about Kenji's sister and a hamster, not bats. The other sentences all give facts about bats." },
    { id: "SK-TT2d-T3", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Kenji wants to add a sentence after sentence 7 to tell more about what bats eat. Which sentence fits best?",
      choices: [
        { text: "Some kinds of bats eat fruit or drink nectar from flowers instead.", correct: true },
        { text: "Bats have wings made of thin skin stretched over long fingers." },
        { text: "Moths are insects that have soft wings covered in tiny scales." },
        { text: "I think that bats are much more interesting than birds are." }
      ],
      clue: "The new sentence must stay on the same idea as sentence 7: what bats eat.",
      why: "The answer is \"Some kinds of bats eat fruit or drink nectar from flowers instead.\" It tells more about what bats eat. The wing sentence is about bats but not about food, the moth sentence is about moths, and the last sentence is an opinion." },
    { id: "SK-TT2d-T4", type: "ms", points: 2, dok: 2, passages: ["p2"], pick: 3,
      prompt: "Sentence 9 says bats have a special way to find food in the dark. Which three sentences give details that support sentence 9? Choose three answers.",
      choices: [
        { text: "(10) A bat makes high squeaks as it flies.", correct: true },
        { text: "(11) The sounds bounce off a moth and come back to the bat as echoes.", correct: true },
        { text: "(12) By listening to the echoes, the bat can tell where the moth is.", correct: true },
        { text: "(4) Most bats sleep during the day." },
        { text: "(5) They hang upside down in caves, trees, or old buildings." },
        { text: "(7) Many bats eat insects such as moths and beetles." }
      ],
      clue: "Sentence 9 promises to explain a special way of finding food. Choose the sentences that explain how that way works.",
      why: "The answers are \"(10) A bat makes high squeaks as it flies,\" \"(11) The sounds bounce off a moth and come back to the bat as echoes,\" and \"(12) By listening to the echoes, the bat can tell where the moth is.\" Together they explain how a bat finds food in the dark. Sentences 4, 5 and 7 are facts about bats, but they do not explain the special way." },
    { id: "SK-TT2d-T5", type: "mc", points: 1, dok: 2, passages: ["p2"],
      prompt: "Which sentence would be the best conclusion to replace sentence 13?",
      choices: [
        { text: "Bats are amazing flyers with a special way to find food.", correct: true },
        { text: "Some bats live in caves, and some bats live in trees." },
        { text: "Next, let's find out about animals in the deep ocean." },
        { text: "My favorite animal at the zoo is the tall giraffe." }
      ],
      clue: "A conclusion wraps up the most important ideas of the whole draft. It does not add one small fact or start a new topic.",
      why: "The answer is \"Bats are amazing flyers with a special way to find food.\" It reminds the reader of the big ideas: bats fly, and they find food with echoes. The cave and tree sentence is one small fact, the ocean sentence starts a new topic, and the giraffe sentence is off topic." },
    { id: "SK-TT2d-T6", type: "mc", points: 1, dok: 3, passages: ["p2"],
      prompt: "Kenji can add only ONE more sentence to his draft. Which choice would best develop his topic, and why?",
      choices: [
        { text: "Add \"A mammal is an animal that has hair and feeds its babies milk\" after sentence 1, because it tells what a key word means.", correct: true },
        { text: "Add \"Bats come in many sizes and colors\" after sentence 12, because any new fact about bats makes a draft better." },
        { text: "Add \"Owls also hunt for food at night\" after sentence 6, because it tells about another animal that is awake at night." },
        { text: "Add \"I think bats are the best animals ever\" after sentence 3, because a strong feeling makes the reader care." }
      ],
      clue: "Check two things in each choice. Does the sentence teach about bats and fit the sentences around it? Is the reason a good reason for adding it?",
      why: "The answer is to add \"A mammal is an animal that has hair and feeds its babies milk\" after sentence 1, because it tells what a key word means. Sentence 1 uses the word mammals, and the definition helps the reader understand why bats belong with dogs, horses and people. The sizes fact is about bats, but sentences 9 to 12 explain how bats find food, so it does not fit there, and not every fact makes a draft better. The owl sentence is about owls, not bats. The last sentence is an opinion, not a fact." }
  ]
});

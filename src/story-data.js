export const storyData = {
  opening: {
    text: "Once upon a time...",
    choices: [
      { id: 'fairy', text: 'A fairy', image: '/assets/storyline/fairy.jpg' },
      { id: 'sailboat', text: 'A sailboat', image: '/assets/storyline/sail.jpg' },
      { id: 'fox', text: 'A fox', image: '/assets/storyline/fox.jpg' },
    ],
  },
  stories: {
    sailboat: {
      s1: {
        subtitles: [
          'There was a little blue sailboat named Sunny.',
          'Sunny loved to sail on the big, sparkly sea.',
        ],
        choice: {
          text: 'What happened next?',
          options: [
            { id: 'island', text: 'To a tropical island', image: '/assets/storyline/sail 1.jpg' },
            { id: 'whales', text: 'To visit the whales', image: '/assets/storyline/sail 2.jpg' },
            { id: 'waves', text: 'Through the big waves', image: '/assets/storyline/sail 3.jpg' },
          ],
        },
      },
      island: {
        subtitles: [
          'Sunny sailed to a beautiful island with tall palm trees.',
          'Colorful parrots flew down to say hello!',
        ],
        choice: {
          text: 'What happened next?',
          options: [
            { id: 'coconuts', text: 'Coconuts on the beach', image: '/assets/storyline/sail 1a.jpg' },
            { id: 'crab', text: 'A friendly crab', image: '/assets/storyline/sail 1b.jpg' },
            { id: 'treasure', text: 'A treasure chest', image: '/assets/storyline/sail 1c.jpg' },
          ],
        },
      },
      whales: {
        subtitles: [
          'Sunny found a big, friendly whale swimming nearby.',
          'The whale splashed water high into the air!',
        ],
        choice: {
          text: 'What happened next?',
          options: [
            { id: 'fish', text: 'A school of colorful fish', image: '/assets/storyline/sail 2a.jpg' },
            { id: 'sunset', text: 'A beautiful sunset spot', image: '/assets/storyline/sail 2b.jpg' },
            { id: 'dolphin', text: 'A singing dolphin friend', image: '/assets/storyline/sail 2c.jpg' },
          ],
        },
      },
      waves: {
        subtitles: [
          'Sunny sailed through the tall, rolling waves.',
          'Up and down, up and down went the little boat!',
        ],
        choice: {
          text: 'What happened next?',
          options: [
            { id: 'rainbow', text: 'A rainbow appears', image: '/assets/storyline/sail 3a.jpg' },
            { id: 'cove', text: 'Sunny finds a calm cove', image: '/assets/storyline/sail 3b.jpg' },
            { id: 'turtle', text: 'A sea turtle swims by', image: '/assets/storyline/sail 3c.jpg' },
          ],
        },
      },
      coconuts: { subtitles: ['Sunny explored all around the sandy beach.', 'The island was full of wonderful surprises!'], ending: ['As night came, Sunny rested on the warm sand.', 'The little boat fell asleep under the swaying palms.'] },
      crab: { subtitles: ['Sunny explored all around the sandy beach.', 'The island was full of wonderful surprises!'], ending: ['As night came, Sunny rested on the warm sand.', 'The little boat fell asleep under the swaying palms.'] },
      treasure: { subtitles: ['Sunny explored all around the sandy beach.', 'The island was full of wonderful surprises!'], ending: ['As night came, Sunny rested on the warm sand.', 'The little boat fell asleep under the swaying palms.'] },
      fish: { subtitles: ['The whale showed Sunny many amazing things.', 'Sunny had never seen such beautiful sights before!'], ending: ['The whale stayed close to Sunny as the stars came out.', 'Sunny drifted off to sleep, safe with a friend nearby.'] },
      sunset: { subtitles: ['The whale showed Sunny many amazing things.', 'Sunny had never seen such beautiful sights before!'], ending: ['The whale stayed close to Sunny as the stars came out.', 'Sunny drifted off to sleep, safe with a friend nearby.'] },
      dolphin: { subtitles: ['The whale showed Sunny many amazing things.', 'Sunny had never seen such beautiful sights before!'], ending: ['The whale stayed close to Sunny as the stars came out.', 'Sunny drifted off to sleep, safe with a friend nearby.'] },
      rainbow: { subtitles: ['The waves became gentle and calm again.', 'Sunny felt proud for being so brave!'], ending: ['After the adventure, Sunny found a quiet spot to rest.', 'The tired little boat closed its eyes and slept soundly.'] },
      cove: { subtitles: ['The waves became gentle and calm again.', 'Sunny felt proud for being so brave!'], ending: ['After the adventure, Sunny found a quiet spot to rest.', 'The tired little boat closed its eyes and slept soundly.'] },
      turtle: { subtitles: ['The waves became gentle and calm again.', 'Sunny felt proud for being so brave!'], ending: ['After the adventure, Sunny found a quiet spot to rest.', 'The tired little boat closed its eyes and slept soundly.'] },
    },
    fairy: {
      s1: {
        subtitles: [
          'There was a tiny fairy named Luna with sparkly wings.',
          'Luna lived in a magical garden full of flowers.',
        ],
        choice: {
          text: 'What happened next?',
          options: [
            { id: 'pond', text: 'To the moonlit pond', image: '/assets/storyline/fairy 1.jpg' },
            { id: 'meadow', text: 'To the flower meadow', image: '/assets/storyline/fairy 2.jpg' },
            { id: 'tree', text: 'To the tall oak tree', image: '/assets/storyline/fairy 3.jpg' },
          ],
        },
      },
      pond: {
        subtitles: [
          'Luna flew to the pond where the moon shone bright.',
          'The water sparkled like a thousand tiny stars!',
        ],
        choice: {
          text: 'What happened next?',
          options: [
            { id: 'fireflies', text: 'Fireflies dancing', image: '/assets/storyline/fairy 1a.jpg' },
            { id: 'lilypad', text: 'A lily pad boat', image: '/assets/storyline/fairy 1b.jpg' },
            { id: 'frog', text: 'A singing frog', image: '/assets/storyline/fairy 1c.jpg' },
          ],
        },
      },
      meadow: {
        subtitles: [
          'Luna danced through a meadow of colorful flowers.',
          'The flowers swayed and sang in the gentle breeze!',
        ],
        choice: {
          text: 'What happened next?',
          options: [
            { id: 'butterflies', text: 'Butterflies to play with', image: '/assets/storyline/fairy 2a.jpg' },
            { id: 'bee', text: 'A honey bee friend', image: '/assets/storyline/fairy 2b.jpg' },
            { id: 'petals', text: 'A rainbow of petals', image: '/assets/storyline/fairy 2c.jpg' },
          ],
        },
      },
      tree: {
        subtitles: [
          'Luna flew up to the top of the tallest tree.',
          'From there, she could see the whole magical garden!',
        ],
        choice: {
          text: 'What happened next?',
          options: [
            { id: 'nest', text: "A bird's nest", image: '/assets/storyline/fairy 3a.jpg' },
            { id: 'acorns', text: 'Acorns to collect', image: '/assets/storyline/fairy 3b.jpg' },
            { id: 'squirrel', text: 'A squirrel friend', image: '/assets/storyline/fairy 3c.jpg' },
          ],
        },
      },
      fireflies: { subtitles: ['Luna discovered many friends at the pond.', 'The pond was the most magical place she had seen!'], ending: ['Luna made a soft bed on a lily pad.', 'The little fairy fell asleep under the gentle moon.'] },
      lilypad: { subtitles: ['Luna discovered many friends at the pond.', 'The pond was the most magical place she had seen!'], ending: ['Luna made a soft bed on a lily pad.', 'The little fairy fell asleep under the gentle moon.'] },
      frog: { subtitles: ['Luna discovered many friends at the pond.', 'The pond was the most magical place she had seen!'], ending: ['Luna made a soft bed on a lily pad.', 'The little fairy fell asleep under the gentle moon.'] },
      butterflies: { subtitles: ['Luna played with all the meadow creatures.', 'Everyone was happy to see the little fairy!'], ending: ['Luna curled up inside a soft flower petal.', 'The flower rocked her gently as she drifted to sleep.'] },
      bee: { subtitles: ['Luna played with all the meadow creatures.', 'Everyone was happy to see the little fairy!'], ending: ['Luna curled up inside a soft flower petal.', 'The flower rocked her gently as she drifted to sleep.'] },
      petals: { subtitles: ['Luna played with all the meadow creatures.', 'Everyone was happy to see the little fairy!'], ending: ['Luna curled up inside a soft flower petal.', 'The flower rocked her gently as she drifted to sleep.'] },
      nest: { subtitles: ['Luna explored every branch of the big tree.', 'The tree was full of cozy hiding spots!'], ending: ['Luna found a cozy spot in the oak tree hollow.', 'She closed her eyes and dreamed of tomorrow\'s adventures.'] },
      acorns: { subtitles: ['Luna explored every branch of the big tree.', 'The tree was full of cozy hiding spots!'], ending: ['Luna found a cozy spot in the oak tree hollow.', 'She closed her eyes and dreamed of tomorrow\'s adventures.'] },
      squirrel: { subtitles: ['Luna explored every branch of the big tree.', 'The tree was full of cozy hiding spots!'], ending: ['Luna found a cozy spot in the oak tree hollow.', 'She closed her eyes and dreamed of tomorrow\'s adventures.'] },
    },
    fox: {
      s1: {
        subtitles: [
          'There was a clever little fox named Rusty.',
          'Rusty loved to explore the big, green forest.',
        ],
        choice: {
          text: 'What happened next?',
          options: [
            { id: 'bushes', text: 'To the berry bushes', image: '/assets/storyline/fox 1.jpg' },
            { id: 'brook', text: 'To the babbling brook', image: '/assets/storyline/fox 2.jpg' },
            { id: 'clearing', text: 'To the sunny clearing', image: '/assets/storyline/fox 3.jpg' },
          ],
        },
      },
      bushes: {
        subtitles: [
          'Rusty ran to the bushes filled with juicy berries.',
          'The berries were sweet and perfectly ripe!',
        ],
        choice: {
          text: 'What happened next?',
          options: [
            { id: 'rabbit', text: 'A rabbit appears', image: '/assets/storyline/fox 1a.jpg' },
            { id: 'birds', text: 'Birds chirping above', image: '/assets/storyline/fox 1b.jpg' },
            { id: 'more_berries', text: 'More berries to find', image: '/assets/storyline/fox 1c.jpg' },
          ],
        },
      },
      brook: {
        subtitles: [
          'Rusty found a stream with clear, cool water.',
          'The water bubbled and splashed over smooth stones!',
        ],
        choice: {
          text: 'What happened next?',
          options: [
            { id: 'fish', text: 'Fish swimming by', image: '/assets/storyline/fox 2a.jpg' },
            { id: 'stones', text: 'Smooth stones to cross', image: '/assets/storyline/fox 2b.jpg' },
            { id: 'deer', text: 'A deer drinking water', image: '/assets/storyline/fox 2c.jpg' },
          ],
        },
      },
      clearing: {
        subtitles: [
          'Rusty discovered a clearing full of warm sunshine.',
          'Soft grass covered the ground like a green blanket!',
        ],
        choice: {
          text: 'What happened next?',
          options: [
            { id: 'butterflies', text: 'Butterflies flying', image: '/assets/storyline/fox 3a.jpg' },
            { id: 'rocks', text: 'Warm rocks to rest on', image: '/assets/storyline/fox 3b.jpg' },
            { id: 'dandelions', text: 'Dandelions to blow', image: '/assets/storyline/fox 3c.jpg' },
          ],
        },
      },
      rabbit: { subtitles: ['Rusty met many forest friends at the bushes.', 'Everyone shared the delicious berries together!'], ending: ['With a full belly, Rusty curled up near the bushes.', 'The little fox fell asleep listening to the forest sounds.'] },
      birds: { subtitles: ['Rusty met many forest friends at the bushes.', 'Everyone shared the delicious berries together!'], ending: ['With a full belly, Rusty curled up near the bushes.', 'The little fox fell asleep listening to the forest sounds.'] },
      more_berries: { subtitles: ['Rusty met many forest friends at the bushes.', 'Everyone shared the delicious berries together!'], ending: ['With a full belly, Rusty curled up near the bushes.', 'The little fox fell asleep listening to the forest sounds.'] },
      fish: { subtitles: ['Rusty played by the brook all afternoon.', 'The cool water felt wonderful on such a warm day!'], ending: ['Rusty made a cozy den beside the gentle brook.', 'The sound of the water sang him softly to sleep.'] },
      stones: { subtitles: ['Rusty played by the brook all afternoon.', 'The cool water felt wonderful on such a warm day!'], ending: ['Rusty made a cozy den beside the gentle brook.', 'The sound of the water sang him softly to sleep.'] },
      deer: { subtitles: ['Rusty played by the brook all afternoon.', 'The cool water felt wonderful on such a warm day!'], ending: ['Rusty made a cozy den beside the gentle brook.', 'The sound of the water sang him softly to sleep.'] },
      butterflies: { subtitles: ['Rusty enjoyed the peaceful clearing.', 'It was the perfect spot to spend the day!'], ending: ['As the sun set, Rusty lay down in the warm grass.', 'The tired little fox closed his eyes and slept peacefully.'] },
      rocks: { subtitles: ['Rusty enjoyed the peaceful clearing.', 'It was the perfect spot to spend the day!'], ending: ['As the sun set, Rusty lay down in the warm grass.', 'The tired little fox closed his eyes and slept peacefully.'] },
      dandelions: { subtitles: ['Rusty enjoyed the peaceful clearing.', 'It was the perfect spot to spend the day!'], ending: ['As the sun set, Rusty lay down in the warm grass.', 'The tired little fox closed his eyes and slept peacefully.'] },
    },
  },
};

import promptSync from "prompt-sync";
const prompt = promptSync({ eot: true });
import {
  name,
  object1,
  object2,
  object3,
  adjectiv1,
  adjectiv2,
  color,
  place1,
  place2,
  verb1,
  verb2,
  animal1,
  animal2,
  job,
  number,
} from "./questions.js";
import chalk from "chalk";
import { answer16 } from "./index.js";

let day = new Date();
let dayoutput = chalk.red(
  `${day.getDate()}.${day.getMonth() + 1}.${day.getFullYear()}`
);

function allStories() {
  // Stories
  // Story 1 - Horror
  // Part 1
  let story1Part1 = `\nThe Story of the Skuda${name}kamooch is dwelled in my subconscious since I was a ${job}. Luckily I don't listen to the storys from my grandma anymore, and my mother doesn’t like any kind of horror, especially of Skuda${name}kamooch, for some reason she also avoids any questions whenever I ask. They say Skuda${name}kamooch or how I like to call her The ${color} Death, sleeps for many years. Apparently she sleeps in ${place1}. For ${number} years to be precise.\n`;

  // Part 2
  let story1Part2 = `\nShe supposedly enters the body of a child, only to murder and ${verb1} the family of the possessed ${job}. I don’t know when they said it was the last time since she did one of her ${adjectiv1} rituals, she does it as a groundwork for all ${adjectiv1}. Not that we need to be ${adjectiv2}, right?\n`;

  // Part 3
  let story1Part3 = `\nSkuda${name}kamooch has ${adjectiv1} standing hair embedded with twigs and ${animal1}s. The face is scarred, with ${animal2}-like nose and pearl ${color} eyes. A smell of burning ${object2} would fumigate the room. She doesn’t show any emotions and only speaks in a ${adjectiv2}, but frying voice. My grandma said she hears her speak. Poor soul, she’s already so ${adjectiv1}.\n`;

  // Part 4
  let story1Part4 = `\nThis year my ${job} started to stop ${verb2}ing. Without any warnings she just doesn’t ${verb2} anymore. The doctors are pretty sure it’s just ${adjectiv2}-${object2}’s. I don’t know why she behaves so weirdly. She even has a ${animal2} now that she found last week on a street corner. The ${animal2} is severely injured in its face. The upper face is half gone and her ${object1}s are always visible, even if she has her mouth closed. God I hate that ${animal2}, I look at her and she gives me chills. Last night that… thing… even stared at me and I had to scream when it laid on my bed while I was sleeping. Luckily she ran away.\n`;

  // Part 5
  let story1Part5 = `\nGod where does this ${adjectiv1} smell comes from? It smells like rotten ${job}. My mother looks at a piece of ${object1} that my grandma had left for her, but it’s more of a scribble than anything else. Almost looks like random symbols of no meaning. “Skuda${name}kamooch”, she says and looks at me with her ${color} eyes that almost look like in tears. “I asked grandmother what Skuda${name}kamooch has whispered in her ear", she said "she comes back soon”. I want to know when. She whispers it in my ear and I just want to run into my ${place2}. Do you want to know it too? She whispered: ${dayoutput}.\n\nTHE END\n`;

  // Story 2 - Adventure
  // Part 1
  let story2Part1 = `\nWhat should I wear today? Whatever you like! I don’t wear what I like, I wear whatever ${job} expect me to wear! There’s someone I want you to meet tonight. I don’t want to meet anyone tonight. My head is messy with thoughts and my own ${object1} feels hollow. Are you ready? Yes… No, I am ${adjectiv1} prepared. We leave. Why am I so ${adjectiv1}? In the back of the ${place2} I want to come across relaxed. I ${verb1} a casual smile. It seems I lost the ability to ${verb2} naturally like every other normal ${job}. I am not a natural ${job}. We may never reach our destiny.\n`;

  // Part 2
  let story2Part2 = `\nWhy won’t I let myself be ${adjectiv1}? Ah, we are here. How should I ${verb1}? I just don’t ask, that’s not what a real ${job} would ask, and I am definitely a real ${job}. I feel all TOO real right now. I practiced this. Just ${verb1} and ${verb2} at the right times. Just be ${adjectiv1} and ${verb2}. Does anyone here see that I don't belong? I just wait for the ${object2} to be pointed at me. All the ${object2}s. All the ${object3}. The game is up, what are you doing here?\n`;

  // Part 3
  let story2Part3 = `\nI want to leave! But who would understand? Why does it feel harder to breathe? Almost like a ${animal1} crawling down my throat. In the ${place2} of a ${place1} cabin I see the written evidence of a ${job} enjoying these kinds of moments. The ${adjectiv1} beats of the ${object2} through the walls and I smell the ${color} ${object2} on the floor, the ${adjectiv2} air enters through a ${adjectiv2} window. I will stay for as long as I can without arousing suspicion of my true motive. Were you hiding in there? It’s this familiar question to me that no one has ever asked.\n`;

  // Part 4
  let story2Part4 = `\nPlease don’t notice me. I ${verb1} from my inner core and it surely is amplified whether every other part of my being except my ${object1} that keeps silent, like so often. When I feel nothing is expected of me, I ${verb2} scenarios that may yet ${verb1} to my rescue. Struck down by a sudden ${object2}, a forgotten early morning engagement suddenly remembered, perhaps martial law and a curfew or a devastating ${job} invasion. Whatever gets me out of this situation. If I don’t belong anywhere, I sure as well I do not belong here. Is that enough? It is late, or early, it depends who you ask. Despite assurances to the contrary, the night does not end here, it keeps going, every hour goes slower. Just…${number}…more…drinks…just…${number}….more…hours…just….${number}….more….eternities. I don’t want to be here anymore. I feel ${adjectiv2} like an ${animal2}.\n`;

  // Part 5
  let story2Part5 = `\nThe ${object2} I feel when it is over is followed quickly by it’s own slipstream of ${adjectiv2}. Of course I will say yes next time again. The ${object3} is the result. And I replay the horrors of this night over and over again in my head. Was that a ${adjectiv2} night?! Is that supposed to be a question? Did you had a ${adjectiv2} time? I didn’t, or did i? How do you explain that? What was so ${adjectiv1} about it? I say yes to all questions. And wonder, as I have so often, how I still hold any expectations of ${verb2}ing a real answer. A real answer for a real ${name}.\n\nTHE END\n`;

  // Story 3 - Funny
  // Part 1
  let story3Part1 = `\n“Ha, you think you are funny?”, TheBeginning said. “We will see, we will see”, and suddenly my eyes are blinded by the light that comes from a big spotlight. After seconds of adjusting my eyes to the brightness, I can see where I am now, standing on ${place1}. ${number} people are sitting in the audience, watching me in silence. A last whispering in my head forming words: “Show them how funny you are”.\n`;

  // Part 2
  let story3Part2 = `\nNot knowing what to do or to say, I am saying the first words that enters my mind, knowing that my english is not the yellow from the egg: "How do you call a cheap hairstyling product?” Waiting … no one in the audience moves or is saying anything. Heavy silence is filling the ${place2}. Then, as the silence is ${adjectiv1}, a voice raises in the background: ”It’s called … SPARGEL!". But nobody laughs, no applause, only scowls. Seeing some people taking the tomatoes from the plates, I quickly have to fire my second joke: ”What is invisible and smells like Rabbit?”... This time a ${animal1} speaks: “A bunny fart!”. OMG, is it really that bad? Suddenly I sink into the ground ….\n`;

  // Part 3
  let story3Part3 = `\n... I am transported to the next ${place2}. Again, ${number} people sitting in front of me, but this time a man is sitting at a big piano behind me, doing a soundcheck. Then he raises his thumb and starts playing the intro. I know that song, feeling comfortable, I start to sing: ”The${animal1} ... the ${animal2} … at the ${place2}.The ${animal2} … cries …. Hurz!!”. Not a second after my last word, the audience stands up and throws ${number} tomatoes at me. And again, sinking into the ground I am transported to the next stage.\n`;

  // Part 4
  let story3Part4 = `\nBut this time, I am not at the stage, I am in the middle of the audience, looking at the ${animal1} on the stage. It is saying: ”Hello, I am Karl Lauer, and I have ${number} jokes for you. \nNumber 1: Two toothpicks go through the world. A hedgehog comes by. One of the toothpicks says: "I didn't even know there was a bus here." \nNumber 2: "What is a clown doing in the office? Faxing." \nNumber 3: What does a pirate do on the computer?- He presses the ENTER key. \nNumber 4: What is sunset in Finnish? - Hel(l)sinki.” \nSuch bad jokes, not ${adjectiv1}, I want to ${verb1}. I go through the Exit, and …\n`;

  // Part 5
  let story3Part5 = `\nAll of a sudden you walk straight into your ${place1}. ${verb2}ing to your bed, lying down, thinking “What a strange day.”, and slowly falling asleep.\n\nTHE END\n`;

  // Story 4 - Fantasy
  // Part 1
  let story4Part1 = `\nBut what now? Where do I need to go? There are no streets! What shall I do? Just thinking about this, The BEGINNING speaks in my head, ”Streets? Where you have to go, you need no streets!”. And all colors, even my favorite color ${color} comes together and builds a bridge under my feet, leading into the far distance. With my ${object1} in my hand, and ${object2} in my backpack, there can only be one, who will get the prize in the end. After hours of walking the rainbow bridge, I see a light, white, glistening, closing my eyes, ${verb1} ${object3} to save my eyesight.\n`;

  // Part 2
  let story4Part2 = `\nNow I can see the door, a little spherical ${color} monster standing by its side. \n\n“Hi, I am ${name}, and I welcome you to infinite vastness, a space where no man has gone before. Enter here, to ${place2}, far far away.”\n\n He opens the door and you are dragged through it, flung around, and slammed down on ${place1}, high Mountains around me, blue sky and High noon. Looking around, there are ${number} men and animals behind you, and five times more in front of you. All of them equipped with ${object1}s and looking ${adjectiv1}. The ${animal1} next to you said: \n\n“${name}, you are a braveheart, let's go and push the ${job} to ${place1}.”\n\n And with that, you start the attack. After hours, you and your army of ${animal2}s win, because the ${job} retreat. It is tea time o’clock. Suddenly Kurgan arrives on the plane and strikes you with his ${object2}. You are hit, falling into ${adjectiv2} darkness.\n`;

  // Part 3
  let story4Part3 = `\nAfter ${number} hours you awake, with this terrible headache. You are lying on ${place2}, feeling ${adjectiv1}. A little golden ${object2} talks to you: “I am Yoghurt, keeper of a power known as the Schwartz. You are here to save us from being vanished. Take this ${object1}, this ${object1} to ${verb2} them all, to enslave the enemy, ${verb1} into dark, bind them forever. But always remember, with great power comes great responsibility. Now go and fulfill your destiny and through ${object3} I reach the base of a gigantic steel frame. At the top there is ${animal1} wandering from left to right, throwing stone barrels at me while shouting: \n\n”Hasta la Vista, ${name}!"\n\n Me thinking: ”Huge-stone, now I have a problem.” Using my ${object1} I avoid all falling barrels and reach the top and ${verb1} ${animal1}, which I then throw over the ${object2}. The ${animal1} is falling down, screaming its last word “Rosebud”. Glad to win this challenge. I am taking my E.T.(Extraterrestrial Telephone) and call home. But ...\n`;

  // Part 4
  let story4Part4 = `\n… before I can use my E.T.(Extraterrestrial Telephone), a ${job} appears right in front of me, holding his belly with both hands, looking at me saying: ”What happened to me? Meal wasn’t bad at all.” And in this moment his stomach explodes and a ${animal2} jumps out of him and tries to get me with his ${object2}. “It’s alive”, thinking and turning around to run away. In the distance I see a ${adjectiv1} horse. This time I don't want to fight. May the horse be with me and let me ride it, away from this ${adjectiv2} ${animal2}. ${adjectiv1} & ${adjectiv2} riding the horse I am trying to escape. And yes… I am ${adjectiv1} enough, expanding the distance between me and ${animal2}. Looking back, raising my hands, shouting “I’ll be back!” steering the horse to the rainbow bridge, I am starting to feel the joy of riding fast, nearly flying over the plane.\n`;

  // Part 5
  let story4Part5 = `\nReaching the bridge, it puts me in one moment back to ${place1}. Being happy to survived I only want to eat and drink something. Opening the fridge, taking a watermelon and carrying it, then mixing myself a martini. Shaken, not stirred. Rethinking what happened, I feel tired and sink into deep sleep.\n\nTHE END\n`;

  // Story 5 - Fairytale
  // Part 1
  let story5Part1 = `\nReading is fun, but not everyone loves it. But! What if I told you, there’s a book you can climb in and escape to another world? See, I know you’d be liking this idea. Let me take you to a ${adjectiv1} ${place1}. I want to show you this secret world and tell you about the ${adjectiv2} things that happen there. Don’t forget to bring your ${object3}. Let’s go! ~ Glitch ~ Welcome to ${place1}! Isn’t it ${adjectiv1} here? I hope you did bring your ${object3}, you will need it. Oh… don’t look too obvious… there is the princes with the frog king. He once was a frog, then became a human and transformed back. What a pity!\n`;

  // Part 2
  let story5Part2 = `\nAnyway, we need to go to ${place2}, let me see… ah … this direction. You see the cave back there? This is the home of ${animal1}-${animal2}. It has ${color} teeth and used to be a dangerous animal, but is now tamed and belongs to the magician ${name}. They have a really strong bond. ${name} is super old, like ${number} years old. No human gets that old! ${name} uses the magical ${object2} to fight against wild ${animal1}-${animal2}s and other creatures. Not very successful… everyone knows that… that’s why no one bothers to attack him. Instead when they see ${name} they ${verb1}. And then ${name} waves around with the magical ${object2}… to let everyone know not to mess around with the ${adjectiv1} ${name}.\n`;

  // Part 3
  let story5Part3 = `\nOh my god! Do you see this? It’s a huge ${adjectiv2} ${job}! Watch out! Where is your ${object1}?! You lost it? Wow, what a great start. Ok, then use your ${object3}. You need to fight this annoying, smelly, ${adjectiv2} ${job}, otherwise it will bonk you on the head and take you to its spot at the ${place2}. It is the spot where ${adjectiv1} people like you never come back from! So be careful here! Throw your ${object3} in its face, stab the ${adjectiv2} ${job} with the ${object3}, it definitely doesn’t like that! … Oh my god! Try harder! … Dodge that! What a disaster! Wait! I can tell you what its week spot is! I remember! You ${verb2} with the ${object3} in your mouth, this should confuse the ${adjectiv2} ${job}! …  Yeah! Great job!\n`;

  // Part 4
  let story5Part4 = `\nOur next stop will be the hut of the peaceful, ${adjectiv1}${object2} that walks on all four backwards. It lives next to the Red Riding Hood and the Three Little Pigs. They built an alliance against the Big Bad ${animal1}-${animal2}. I don’t know what issues it has, but it’s always bothering them. I think it feels lonely and wants to be part of something. Just leave the ${animal1}-${animal2} alone. Not OUR issue. I need to tell you something about the peaceful, ${adjectiv1}${object2}. It is quite funny. You need to ${verb2} next to the peaceful, ${adjectiv1}${object2} and it will change its color to ${color} and ${verb1}. Try it right now! I will take a photo of it. Ha-ha! Nice!`;

  // Part 5
  let story5Part5 = `There it is. Our final chapter on this crazy ride. I hope you liked it and will come visit me from time to time. We can have a lot of fun. I know a bunch of different stories.\n\nTHE END\n` ;

  let mix = [
    [story1Part1, story1Part2, story1Part3, story1Part4, story1Part5],
    [story2Part1, story2Part2, story2Part3, story2Part4, story2Part5],
    [story3Part1, story3Part2, story3Part3, story3Part4, story3Part5],
    [story4Part1, story4Part2, story4Part3, story4Part4, story4Part5],
    [story5Part1, story5Part2, story5Part3, story5Part4, story5Part5],
  ];

  // Story 1: Horror
  if (answer16 === "Horror") {
    console.log(mix[0][0]);
  }
  for (let i = 1; i < 5; i++) {
    if (answer16 === "Horror") {
      const continue1 = prompt(`Type "w" then press Enter. `);
      if (continue1 === "w") {
        console.log(mix[0][i]);
      } else {
        console.log(`Hey, you were supposed to type "w"! `);
        i--;
      }
    }
  }

  // Story 2: Adventure
  if (answer16 === "Adventure") {
    console.log(mix[1][0]);
  }
  for (let i = 1; i < 5; i++) {
    if (answer16 === "Adventure") {
      const continue1 = prompt(`Type "w" then press Enter. `);
      if (continue1 === "w") {
        console.log(mix[1][i]);
      } else {
        console.log(`Hey, you were supposed to type "w"! `);
        i--;
      }
    }
  }

  // Story 3: Funny
  if (answer16 === "Funny") {
    console.log(mix[2][0]);
  }
  for (let i = 1; i < 5; i++) {
    if (answer16 === "Funny") {
      const continue1 = prompt(`Type "w" then press Enter. `);
      if (continue1 === "w") {
        console.log(mix[2][i]);
      } else {
        console.log(`Hey, you were supposed to type "w"! `);
        i--;
      }
    }
  }

  // Story 4: Fantasy
  if (answer16 === "Fantasy") {
    console.log(mix[3][0]);
  }
  for (let i = 1; i < 5; i++) {
    if (answer16 === "Fantasy") {
      const continue1 = prompt(`Type "w" then press Enter. `);
      if (continue1 === "w") {
        console.log(mix[3][i]);
      } else {
        console.log(`Hey, you were supposed to type "w"! `);
        i--;
      }
    }
  }

  // Story 5: Fairytale
  if (answer16 === "Fairytale") {
    console.log(mix[4][0]);
  }
  for (let i = 1; i < 5; i++) {
    if (answer16 === "Fairytale") {
      const continue1 = prompt(`Type "w" then press Enter. `);
      if (continue1 === "w") {
        console.log(mix[4][i]);
      } else {
        console.log(`Hey, you were supposed to type "w"! `);
        i--;
      }
    }
  }

  // Story 6: Mix
  function random() {
    if (answer16 === chalk.hidden("Mix")) {
      let num = Math.floor(Math.random() * 5);
      console.log(`${mix[num][0]}`);
      for (let i = 1; i < 5; i++) {
        const continue1 = prompt(`Type "w" then press Enter. `);
        if (continue1 === "w") {
          num = Math.floor(Math.random() * 5);
          console.log(`${mix[num][i + 0]}`);
        } else {
          console.log(`Hey, you were supposed to type "w"! `);
          i--;
        }
      }
    }
  }
  random();
}

export { allStories };

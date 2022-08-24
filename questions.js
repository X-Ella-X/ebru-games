import promptSync from "prompt-sync";
const prompt = promptSync({ eot: true }); // Strg. + D
import chalk from "chalk";
let name;
let object1;
let object2;
let object3;
let adjectiv1;
let adjectiv2;
let color;
let place1;
let place2;
let verb1;
let verb2;
let animal1;
let animal2;
let job;
let number;

// Prompt
// name
function questions() {
  name = chalk.red(prompt(`Tell me your name? `));
  const answer1 = chalk(`Hey ${name}! That is my big-headed cousins name too.`);
  console.log(answer1);
  console.log();

  // object 1
  object1 = chalk.red(prompt(`One object on your desk: `));
  const answer2 = chalk(`Good, you will need this.`);
  console.log(answer2);
  console.log();

  // object 2
  object2 = chalk.red(prompt(`What is an everyday item you use? `));
  const answer3 = chalk(`Cool, very handsome ${object2}.`);
  console.log(answer3);
  console.log();

  // object 3
  object3 = chalk.red(prompt(`What is an expensive gift you wish for christmas? `));
  const answer4 = chalk(`Nice, that should be everyones wish.`);
  console.log(answer4);
  console.log();

  // adjectiv 1
  adjectiv1 = chalk.red(prompt(`Describe yourself in 1 word: `));
  const answer5 = chalk(`Yeah, you are really ${adjectiv1}.`);
  console.log(answer5);
  console.log();

  // adjectiv 2
  adjectiv2 = chalk.red(prompt(`How would your friends and family discribe you? `));
  const answer6 = chalk(`And that's just them being nice, right?`);
  console.log(answer6);
  console.log();

  // color
  color = chalk.red(prompt(`Tell me your favourite color: `));
  const answer7 = chalk(`Such a lovely color.`);
  console.log(answer7);
  console.log();

  // place 1
  place1 = chalk.red(prompt(`What place do you want to visit one day? `));
  const answer8 = chalk(`Oh, yes, that's a really nice place!`);
  console.log(answer8);
  console.log();

  // place 2
  place2 = chalk.red(prompt(`A place, with romantic memories: `));
  const answer9 = chalk(`Mhhhh, very romantic.`);
  console.log(answer9);
  console.log();

  // verb 1
  verb1 = chalk.red(prompt(`I need a verb from you: `));
  const answer10 = chalk(`${verb1}? Seriously?`);
  console.log(answer10);
  console.log();

  // verb 2
  verb2 = chalk.red(prompt(`I don't like this one, give me a different one: `));
  const answer11 = chalk(`That's better!`);
  console.log(answer11);
  console.log();

  // animal 1
  animal1 = chalk.red(prompt(`Which animal would you like to adopt? `));
  const answer12 = chalk(`Hihihi, the future will see!`);
  console.log(answer12);
  console.log();

  // animal 2
  animal2 = chalk.red(prompt(`Which animal makes you shaking in fear? `));
  const answer13 = chalk(`Be scared, it is not over now.`);
  console.log(answer13);
  console.log();

  // job
  job = chalk.red(prompt(`What is your job? `));
  const answer14 = chalk(`That is one good job.`);
  console.log(answer14);
  console.log();

  // number
  number = chalk.red(prompt(`Tell me your lucky number: `));
  const answer15 = chalk(`I hope your number ${number} will help you.`);
  console.log(answer15);
  console.log();
}

export { questions };
export {
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
};

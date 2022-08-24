import promptSync from "prompt-sync";
const prompt = promptSync({ eot: true }); // Strg. + D
import chalk from "chalk";
import pkg from "enquirer";
const { Select } = pkg;
import { questions } from "./questions.js";
import { title } from "./title.js";
import { dsgvo } from "./dsgvo.js";
import {allStories} from "./allStories.js";

// Titel
title();

// DSGVO
dsgvo();

// Word-Variables
questions();

// stories Select
const stories = new Select({
  name: "Stories",
  message: chalk.red("Choose your adventure ..."),
  choices: ["Horror", "Adventure", "Funny", "Fantasy", "Fairytale", chalk.hidden("Mix")],
});

// Prompt-Abfrage: Which story?
let answer16 = await stories.run();

//Story Selection and display in console
allStories();

// Based on choice:
export {answer16};
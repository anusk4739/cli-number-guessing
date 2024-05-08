#! /usr/bin/env node

import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() *10 +1);

const answers = await inquirer.prompt([
{
    name: "userGuessednumber",
    type: "number",
    message: "please guess a number between 1-10",
}
])

if (answers.userGuessednumber === randomNumber) {
    console.log("Congratulations! You guess right number.");
} else {
    console.log("You guess wrong number");
}
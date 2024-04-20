"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// declare a constant for prompt function
const prompt = (0, prompt_sync_1.default)();
// displaying Welcome message
console.log(`Respected User! let us play a 'Game':
Specify a Range so that Computer may generate a Number!
Now, 'Guess' that Random Number in three attempts.\n`);
// take the desireable range from the user
let input = true;
while (input) {
    let minInput = parseInt(prompt("Please Enter Minimum Number: "));
    if (typeof minInput !== "number") {
        console.log("Invalid Value");
    }
    else {
        console.log("Input Accepted");
    }
}
;
while (true) {
    let maxInput = parseInt(prompt("Please Enter Maximum Number: "));
    if (typeof maxInput !== "number") {
        console.log("Invalid Value");
    }
    else {
        console.log("Input Accepted");
        break;
    }
}
;
// define the desired functionality for the computer
let randomNumber = Math.floor(Math.random() * 10 + 1);
// let randomNumber: number = Math.floor(Math.random() * (maxInput - minInput) + minInput);
// make a loop to guess the correct number
let guess = false;
while (!guess) {
    let userInput = parseInt(prompt("\nPlease Enter Your Guessed Number: "));
    if (randomNumber == userInput) {
        guess = true;
        console.log("Great! your 'Guess' is correct.");
        break;
    }
    else if (randomNumber < userInput) {
        console.log("Oh! your 'Guess' is greater than the desired Number.");
    }
    else if (randomNumber > userInput) {
        console.log("Oh! your 'Guess' is less than the desired Number.");
    }
    else {
        console.log("Sorry! your attempts expired.");
    }
}

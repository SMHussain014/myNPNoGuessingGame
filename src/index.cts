import PromptSync from "prompt-sync";
import { measureMemory } from "vm";
// declare a constant for prompt function
const prompt = PromptSync();
// displaying Welcome message
console.log(`Respected User! let us play a 'Game':
Specify a Range so that Computer may generate a Number!
Now, 'Guess' that Random Number in three attempts.\n`);
// take the desireable range from the user
let input: boolean = true;
while (input) {
    let minInput: number = parseInt(prompt("Please Enter Minimum Number: "));
    if (typeof minInput !== "number") {
        console.log("Invalid Value")
    }
    else {
        console.log("Input Accepted");
        break;
    }
};
while (true) {
    let maxInput: number = parseInt(prompt("Please Enter Maximum Number: "));
    if (typeof maxInput !== "number") {
        console.log("Invalid Value")
    }
    else {
        console.log("Input Accepted");
        break;
    }
};
// define the desired functionality for the computer
let randomNumber: number = Math.floor(Math.random() * 10 + 1);

// let randomNumber: number = Math.floor(Math.random() * (maxInput - minInput) + minInput);

// make a loop to guess the correct number
let guess: boolean = false;
while (!guess) {
    let userInput: number = parseInt(prompt("\nPlease Enter Your Guessed Number: "));
    if (randomNumber == userInput) {
        guess = true;
        console.log("Great! your 'Guess' is correct.")
        break;
    }
    else if (randomNumber < userInput) {
        console.log("Oh! your 'Guess' is greater than the desired Number.")
    }
    else if (randomNumber > userInput) {
        console.log("Oh! your 'Guess' is less than the desired Number.")
    }
    else {
        console.log("Sorry! your attempts expired.")
    }
}
var prompt = require("./tools/prompt-sync")();

var providedName = prompt("What\'s your name? ");
console.log( 'Hello '+ providedName + ' !');

var goesOnVacation = yn(prompt("Are you going on vacation? (y/n)? "));

if (goesOnVacation) {
  console.log("Hurray! Let\'s get you started!");
  else {
    console.log("Sorry to hear that. Maybe next year.");
  }
}
var prompt = require("./tools/prompt-sync")();

var astrologicalSign = prompt("What is your destination country? Please choose.");

let countryName = ["USA", "Japan", "France", "Italy", "Spain","Australia", "United Kingdom"];



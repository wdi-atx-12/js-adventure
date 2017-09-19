var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

// a few example inputs (delete these from your completed file)
// var booleanInput = yn(prompt('Is this first variable true (y/n)? '));
// var integerInput = parseInt(prompt('Enter a whole number: '),10);
// var stringInput = prompt('Enter any string: ');

//console.log();

// a few example outputs (delete these from your completed file)
// console.log('Your boolean = ' + booleanInput + '.');
// console.log('Your integer = ' + integerInput + '.');
// console.log('Your string  = ' + stringInput + '.');

console.log('\n');
var name = prompt("Rick: What.. how\'d you get in my garage... Well I lost my Morty. What\'s your name? ");
console.log('\n');
var ready = yn(prompt("Rick: Alright " + name + " Morty! Are you ready to go on your first adventure (Y/N)? "));
console.log('\n');

if (ready) {
  var chooseStuff = prompt("Rick: I *burp* need to go get stuff for experiments and.. stuff. Do you want to go look for Kalaxian Crystals, Mega Seeds, or Isotope-322 (K/M/I)? ");
  if (chooseStuff === "K") {
    var stuff = "Kalaxian Crystals";
  } else if (chooseStuff === "M") {
    var stuff = "Mega Seeds";
  } else if (chooseStuff === "I") {
    var stuff = "Isotope-322";
  } else {
    while (chooseStuff !== "K" || "M" || "I") {
    chooseStuff = prompt("NO, " + name + " Morty, pick K/M/I. ");
    }
  }
} else {
  while (!ready) {
  ready = yn(prompt("Ugh.. How about now (Y/N)? "));
  }
}

if (stuff === "K") {
  var portalGunEntry = parseInt(prompt("Rick: Well, it's your turn to use the Portal Gun, let's go get some Crystals!! (Enter even number greater than 4 digits to get to Planet Squanch. Enter odd number greater than 4 digits to get to Bird World. "));
  if (portalGunEntry > 1000 && portalGunEntry % 2 === 0) {
    var planet = "Planet Squanch";
    console.log("Rick: Oh no, " + name + " Morty. We're stranded on " + planet + ".. WE'RE GOING TO DIE HERE! Oh well. At least we have " + stuff + "!!! WOO!");
  } else (portalGunEntry > 1000 && portalGunEntry % 2 !== 0) {
    var planet = "Bird World";
    console.log("Rick: Oh no, " + name + " Morty. We're stranded on " + planet + ".. WE'RE GOING TO DIE HERE! Oh well. At least we have " + stuff + "!!! WOO!");
  }
}

if (stuff === "M") {
  var portalGunEntry = parseInt(prompt("Rick: Well, it's your turn to use the Spaceship, let's go get some Isotope-322!! (Enter ZORP to go to Gazorpazorp. Enter CRON to get to Cronenberg World. Enter SCRM to get to Screaming Sun Earth.) "));
  if (portalGunEntry == ZORP) {
    var planet = "Gazorpazorp";
    console.log("Rick: Oh no, " + name + " Morty. We're stranded on " + planet + ".. WE'RE GOING TO DIE HERE! Oh well. At least we have " + stuff + "!!! WOO!");
  } else if (portalGunEntry == CRON) {
    var planet = "Cronenberg";
    console.log("Rick: Oh no, " + name + " Morty. We're stranded on " + planet + ".. WE'RE GOING TO DIE HERE! Oh well. At least we have " + stuff + "!!! WOO!");
  } else if (portalGunEntry == SCRM) {
    var planet = "Screaming Sun Earth";
    console.log("Rick: Oh no, " + name + " Morty. We're stranded on " + planet + ".. WE'RE GOING TO DIE HERE! Oh well. At least we have " + stuff + "!!! WOO!");
  }
}

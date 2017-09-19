var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

var weapon = ['plunger', 'towel', 'toothpaste']

let directionOne = prompt("My eyes are not as good as they once were (and it's 2017),\n are you male, female, or neither, adventurer? m/f/n");

  if (directionOne != '') {
    numberChoice = prompt("Just kidding, it does not matter. Please choose a number;\n 1, 2, or 3.");

    if (numberChoice < 1 || numberChoice > 3) {
      numberChoice = prompt("Now, now... Enter a valid number, you fool. ");
    }
  }

  else {
    console.log("A shy one, I suppose, or just stupid. I will equip you with the best we have to offer.")
    numberChoice = 3;
  }

changeWeapon = prompt("You have chosen a " + weapon[numberChoice - 1] + "! If you are displeased, \nyou may relinquish your item for a gold star sticker. Enter y to accept this generous offer.");

if (changeWeapon == 'y') {
  fly = prompt("Your gold star sticker has transformed into a real star! Will you\n choose to ride it? y/n: ");
    if (fly == 'y') {
      console.log("After several days you have landed in...\n ...Smallville, Kansas. You forgot your wallet and must begin work at the Talon immediately. ");
    }
    else if (fly == 'n') {
      console.log("You have chosen to walk, carrying your " + weapon[numberChoice-1] + " \nproudly in hand. Unfortunately you're journey has ended... you've returned home, forgetting why you went to Walmart in the first place.");
    }
    else {
      console.log("The error of your ways is quite apparent. Natural selection has come for you... \nThe end is nigh!");
    }
}
else if (changeWeapon == 'n') {
  collapse = prompt("You carry your " + weapon[numberChoice-1] + " with deep regret, slowly coming \nto terms with your mistake. Will you collapse in despair? (y/n): ");
    if (collapse != 'y') {
        winning = prompt("After several minutes you arrive see a car parked, the driver side door \najar. Do you open it further? (y/n)");
      if (winning == 'y') {
        console.log("Congratulations! You have completed your trip to the store AND managed to find \nyour car which you foolishly left unlocked. Please, just get in before anything (else) goes wrong.");
      }
      else {
        console.log("You have reached the end of your journey. Hunger and thirst have taken their \ntoll on you, apparent in the fact that you couldn't even recognize your own car. Charles Darwin was right about you.");
      }
    }
    else {
      console.log("The error of your ways is quite apparent. Natural selection has come for you... \nThe end is nigh!");
    }
}
else {
  console.log("The error of your ways is quite apparent. Natural selection has come for you... \nThe end is nigh!");
}


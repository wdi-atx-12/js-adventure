var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');


var bdayActivities = ["Dinner", "Drinks", "Concert", "Nothing"];

console.log("Happy Birthday!")

console.log("Here's what we can do for your birthday:");

for (var i = 0; i < bdayActivities.length; i++) {
  console.log(bdayActivities[i]);
}

var question = (prompt("Please enter what you'd like to do for your birthday."));

  if (question) === "Dinner" {
    console.log("We could go somewhere casual or fancy")
    var casualOrFancy = prompt("What would you like? casual or fancy?")
    if (casualOrFancy) === "casual"  {
      console.log("I know the perfect Thai restaurant.");
    } else {
      console.log("We can go to Ruth's Chris.")
      }
      var age = yn(prompt("Are you over 21? (y/n)?"));
        if (age) {
          console.log("We'll start with a glass of wine");
        }
    }

  if (question) === "Drinks" {
    console.log("what's your drink of choice?");
    var drinkChoice = prompt("Liquor or Beer?")
      if drinkChoice === ("Liquor");
      console.log("Let's get fancy cocktails")
    } else {
      console.log("We'll go to the brewery district");
    }
  }

  if (question) === "Concert" {
    console.log("Music would be fun!");
    var musicChoice = prompt("What kind of music do you want to hear? rock, electronic, hip-hop?")
    if (musicChoice)  === "rock" {
      console.log("nah, no good shows. Pick something else.")
    } else if musicChoice === ("electronic || hip-hop") {
      console.log("Awesome choice!");
    }
  }

  if (question) === "Nothing" {
    var checkOnYou = yn(prompt("But it's your special day, are you feeling well? (y/n)?"))
  } if (checkOnYou) {
    console.log("that's cool, you're beautiful, let's stay in.");
  } else {
    console.log("Don't worry, the year will get better.")
  }
}





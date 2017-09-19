var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');
//
// // a few example inputs (delete these from your completed file)
// var booleanInput = yn(prompt('Is this first variable true (y/n)? '));
// var integerInput = parseInt(prompt('Enter a whole number: '),10);
// var stringInput = prompt('Enter any string: ');
//
// console.log();
//
// // a few example outputs (delete these from your completed file)
// console.log('Your boolean = ' + booleanInput + '.');
// console.log('Your integer = ' + integerInput + '.');
// console.log('Your string  = ' + stringInput + '.');

var hungry = yn(prompt("Are you hungry (y/n)? "));

if (hungry == true){
  console.log("Yeah me too");
  var foodKind = prompt("What do you wanna get? Hamburger, hot dog or pizza? ");

  //TYPE OF FOOD
  switch (foodKind) {
    case "hamburger":
      message = "Nice, I\'m in for a cheeseburger.";
      break;
    case "hot dog":
      message = "Ok I\'ll get 2.";
      break;
    case "pizza":
      message = "Let\'s get a whole pie then."
      break;
    default:
      message = "Not interested, go get food by yourself dude."
      break;
  }
  console.log(message);

  //IF THE USER DOESNT WANT ANY OF THE THREE OPTIONS
  if (message !=="Not interested, go get food by yourself dude."){

  //HOW MUCH $ U GOT GOES HERE
  var moneyAvailable = parseInt(prompt("How much money do you wanna spend? "), 10);

  //RESTAURANT OPTIONS ACCORDING TO BUDGET
  if (foodKind === "hamburger"){
    if (moneyAvailable < 10){
      console.log("Let\'s go to P. Terry\'s.")
    } else {
      console.log("Five Guys it is!");
    }
  }

  if (foodKind === "hot dog"){
    if (moneyAvailable < 10){
      console.log("Sucks to be poor, let\'s just walk to the 7-11.");
    } else {
      console.log("Let\'s get one of those big ass german hot dogs.");
    }
  }

  if (foodKind === "pizza"){
    if (moneyAvailable < 10){
      console.log("Let\'s go to Homeslice.");
    } else {
      console.log("This isn\'t a date dude!");
    }
  }
}

} else {  //NOT HUNGRY AT ALL
    console.log("Let\'s fucking starve to death then.")
}

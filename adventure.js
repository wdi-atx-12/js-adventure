//var prompt = require('./tools/prompt-sync')();
//var yn = require('./tools/yn');

// a few example inputs (delete these from your completed file)
//var booleanInput = yn(prompt('Is this first variable true (y/n)? '));
//var integerInput = parseInt(prompt('Enter a whole number: '),10);
//var stringInput = prompt('Enter any string: ');

//console.log();

// a few example outputs (delete these from your completed file)
//console.log('Your boolean = ' + booleanInput + '.');
//console.log('Your integer = ' + integerInput + '.');
//console.log('Your string  = ' + stringInput + '.');

var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

var restaurants =[
{
name: "Koriente",
cost: 10,
kind: "korean",
},
{
name: "Chilanto",
cost: 11,
kind: "korean",
},
{
name: "Maiko",
cost: 11,
kind: "japanese",
},
{
name: "Daruma",
cost: 11,
kind: "japanese",
},
]

//OPTION 1

// var areYouHungry = yn(prompt('Are you hungry (y/n)? '));

// if (areYouHungry) {

//   var preference = prompt("Perfect! What kind of food are you in the mood for?");

//   if(preference === "korean"){
//       console.log("Your choices are " + restaurants[0].name + " or " + restaurants[1].name);
//       var cost = prompt("How much money would you like to spend?");
//         if(cost <= 10){
//           console.log("You should go to " + restaurants[0].name + " then! YUM!");
//         }
//         else if(cost > 10){
//           console.log("Dang! high roller! You should check out " + restaurants[1].name + " then!");
//         }
//     }
//     else if(preference === "japanese"){
//       console.log("Your choices are " + restaurants[2].name + " or " + restaurants[3].name);
//       var cost = prompt("How much money would you like to spend?");
//        if(cost <= 10){
//           console.log("You should go to " + restaurants[3].name + " then! YUM!");
//         }
//         else if(cost > 10){
//           console.log("Dang! high roller! You should check out " + restaurants[2].name + " then!");
//         }
//     }
//     else{
//       console.log("Sorry, I don't have that in my files. Try something else!");
//     }
// }

// else{
//   console.log("uuhhh...this game isn't for you then! BYE!");
// };

//OPTION: 2

var areYouHungry = yn(prompt('Are you hungry (y/n)? '));

if(areYouHungry) {
  var preference = prompt("Perfect! What kind of food are you in the mood for?");
  x=0;
  for (i=0; i<restaurants.length; i++){
    if(preference === restaurants[i].kind){
      console.log("Your choices are: " + restaurants[i].name);
      x=i;;
    }
}
  var prefCost = prompt("How much money would you like to spend?");
   if(prefCost <= restaurants[x].cost){
          console.log("You should go to " + restaurants[x].name + " then! YUM!");
        }
        else if(prefCost >= restaurants[x].cost){
          console.log("Dang! high roller! You should check out " + restaurants[x].name + " then!");
        }

}
else {
  console.log("uuhhh...this game isn't for you then! BYE!");
}



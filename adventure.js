/*var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn'*/

// a few example inputs (delete these from your completed file)
/*var booleanInput = yn(prompt('Is this first variable true (y/n)? '));
var integerInput = parseInt(prompt('Enter a whole number: '),10);
var stringInput = prompt('Enter any string: ');

console.log();

// a few example outputs (delete these from your completed file)
/*console.log('Your boolean = ' + booleanInput + '.');
console.log('Your integer = ' + integerInput + '.');
console.log('Your string  = ' + stringInput + '.');*/

var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

var wantToPlayGame = yn(prompt('Do You Want to Play a game? (y/n)? '));

/*var door1 = wantToPlayGame
var door2 = wantToPlayGame
var door3 = wantToPlayGame
var door = [
  'door-1',
  'door-2',
  'door-3',
];*/

if (wantToPlayGame){
  console.log('Enter house! Let the horror begin! ');
} else {
  console.log("Do Not Enter,Ya wussie!");

process.exit();
}
var chooseDoor = prompt("Choose a door: door-1, door-2, door-3: ");

var doorOne = ('Evil Elves on the loose');
var doorTwo = ('Killer Bats');
var doorThree = ('Giant Possums');




var evilElves = yn(prompt("Evil Elves need to be smashed with a bat before they escape and cause havoc, Do you want to fight them (y/n)? "));


if (doorOne) {
  console.log ("Congrats, you mananaged to wipe out all the evil elves and get evil blood on your clothes!");
} else{
  console.log (" wow, you are now captured and it isn\'t looking good for you. Hope you escape...");
process.exit();

}
var killerBats = yn(prompt( "killer bats are hungry! do you shoot them (y/n)?"));

if (killerBats){
  console.log("Grab the shotgun on the wall and fire off! ");
}
else{
  consol.log("scared eh? You quickly lock the door and continue on.");
}

var clown = yn(prompt("Upon defeating the evil bats the closet door swings open and an evil clown pops out: Now we must play a game!  (y/n)"));

var closetDoor = parseInt(prompt("Choose a number between 1 - 10?"), 5);

var willLive = closetDoor <= 5;
console.log ("you live")

var willNotLive = closetDoor >= 6;
console.log ("you die!")

if (willLive <= 5){
  console.log("Lucky guess, you live to see another door!");
}
else{
  console.log("muah ha ha ha, head has been decapitated!");

}










/*console.log( 'Choose a door: ' );
console.log(door.join(', ') );
console.log('\n');



/*var door = [
  'door-1',
  'door-2',
  'door-3',
];*/

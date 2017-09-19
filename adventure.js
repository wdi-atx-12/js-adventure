var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

console.log('***************************** \n WELCOME TO ZOMBIEAPOCALYPSE \n***************************** \n\n');

// GLOBAL VARS
var weapon;
var start;
var lifeStatus = "alive";

//GET USER
var strUser = prompt('Enter a username: ');
console.log("\nWelcome to the Zombie Apocalypse, " + strUser +"! You are currently " + lifeStatus +".  \n");

//START AREAS
function startFn(x){
  if (x===1){ start = " The Library";
  } else if(x===2) {start = " The Mall";
  } else if(x===3) {start = " The Bar";
  } else if(x===4) {start = " The Bank";
  } else {
    start = " The Cemetery";
    lifeStatus = "Totes Dead"}
}

//Question 1) choose starting area
console.log("Pick a starting area.");
console.log("-----------------------------");
console.log("enter (1) for The Library");
console.log("enter (2) for The Mall");
console.log("enter (3) for The Bar");
console.log("enter (4) for The Bank");
console.log("-----------------------------");
var StartArea = parseInt(prompt('Enter a number 1, 2, 3, or 4 for your choice: '),10);
console.log('You picked: ' + StartArea + '\n\n');

startFn(StartArea);
console.log(strUser + " has chosen" + start + "\n\n");

//WEAPONS
function weaponFn(y){
      if(y===1) {weapon= "Axe";
      } else if(y===2) {weapon = "Baseball Bat";
      } else if(y===3) {weapon = "Crowbar";
      } else {weapon = "no weapon";
      }
}

if (start !== "Cemetery"){
          //Question 2) CHOOSE A WEAPON
          console.log("Pick a weapon by selecting a number.");
          console.log("-----------------------------");
          console.log("enter (1) for an Axe");
          console.log("enter (2) for a Baseball Bat");
          console.log("enter (3) for a Crowbar");
          console.log("-----------------------------");
          var weaponInput = parseInt(prompt('Enter 1, 2, or 3 for your weapon choice: '),10);
          console.log('You picked: ' + weaponInput + '\n\n');
          weaponFn(weaponInput);
          console.log(strUser + " has chosen" + ' ' + weapon + "\n\n");
     } else {
      console.log("GAME OVER! You woke up in the cemetery without a weapon and were eaten by zombies. You are " + lifeStatus + " in " + start);
      die
     }

//Determine Fate

//IF CHOSE BAD WEAPON DIE
if (weapon === "no weapon") {
  lifeStatus = "Totes Dead";
  console.log("GAME OVER! You did not have a weapon and were attacked by zombies. Your life status is " + lifeStatus + " in " + start);
}

//IF CHOSE LIBRARY AND GOOD WEAPON
else if (StartArea === 1 && weapon !== "no weapon"){
  console.log("You have woken up in THE LIBRARY.");
  console.log("You hear a grumbling noise coming from the bathroom.");
  console.log("-------------------------------------------------------");

  console.log("MAKE A CHOICE: ");
  console.log("enter (1) Open the door and attack the zombie.");
  console.log("enter (2) Run out into the back alley. Fight zombie dogs and go to the Grocery Store");
  console.log("enter (3) Run out the front door to the Morgue.")
  //MAKE FINAL CHOICE IN LIBRARY
  var libraryChoice = parseInt(prompt('Enter a number 1, 2, 3 for your choice: '),10);
  console.log("You have chosen: " + libraryChoice);

    if (libraryChoice===1) {
       lifeStatus = "Totes Dead"
       console.log("GAME OVER! Your puny " + weapon + " was no match for the Zombies. " + strUser + " is " + lifeStatus + " in " + start);
      } else if (libraryChoice===2) {
       start = "The Grocery Store"
       console.log("YOU WIN! Your awesome " + weapon + " defeated all the Zombie dogs and you found beer! " + strUser + " is " + lifeStatus + " in " + start);
      } else if (libraryChoice===3) {
       start = "The Morgue"
       console.log("GAME OVER! You opened the church door and were attacked by Zombies! Your puny " + weapon + " broke." + strUser + " is " + lifeStatus + " in " + start);
    }   else {
       lifeStatus = "Totes Dead"
       console.log("GAME OVER! You did nothing and therefore have been attacked and are now " + strUser + " is " + lifeStatus + " in " + start);
    }

}

//IF CHOSE MALL WITH A GOOD WEAPON
 else if (StartArea === 2 && weapon !== "no weapon"){
  console.log("You have woken up in THE MALL.");
  console.log("You hear a grumbling noise coming from the Juicy Juice Bar.");
  console.log("-------------------------------------------------------");
  console.log("MAKE A CHOICE: ");
  console.log("enter (1) Go to the Juicy Juice Bar and attack the zombie.");
  console.log("enter (2) Run out into the Mall Parking Lot");
  console.log("enter (3) Search the sports store for a better weapon.");
 //MAKE FINAL CHOICE IN THE MALL
  var mallChoice = parseInt(prompt('Enter a number 1, 2, 3 for your choice: '),10);
  console.log("You have chosen: " + libraryChoice);

    if (mallChoice===1) {
      start = "Juicy Juice Bar";
       console.log("YOU WIN!!!! Your awesome " + weapon + " defeated the Zombie and you leveled up on Juicy Juice!" + strUser + " is " + lifeStatus + " in " + start);
      } else if (mallChoice===2) {
       start = "Parking Lot";
       lifeStatus = "Totes Dead";
       console.log("GAME OVER! Your puny " + weapon + " could not defeat the zombies in the parking lot all the Zombie dogs and you found beer! " + strUser + " is " + lifeStatus + " in " + start);
      } else if (mallChoice===3) {
       start = "The Morgue"
       console.log("GAME OVER! You opened the church door and were attacked by Zombies! Your puny " + weapon + " broke." + strUser + " is " + lifeStatus + " in " + start);
    }   else {
       lifeStatus = "Totes Dead"
       console.log("GAME OVER! You did nothing and therefore have been attacked and are now a zombie." + strUser + " is " + lifeStatus + " in " + start);
    }

//IF CHOSE BAR
} else if (StartArea === 3 && weapon !== "no weapon") {

  console.log("You have woken up in THE BAR! This is a great place to be, you should stay here. By staying here you will win the game.");
  var stayInBar = yn(prompt('Stay in the bar? type y for yes or n for no. (y/n)? '));

  //DIE If you leave the bar
  if (stayInBar === "y") {console.log('YOU WIN! the zombies ignore you and you have a month supply of free beer.')}
    else {
      lifeStatus = "Totes Dead"
      start = "The Morgue"
      console.log("You have died from leaving the bar. Kind patrons took your corpse to THE MORGUE. ")}
}

//IF CHOSE BANK AND GOOD WEAPON
else if(StartArea === 4 && weapon !== "no weapon"){
    console.log("You have woken up in THE BANK. You're probably safe here, especially in the Safe.");
   var stayInBank = yn(prompt('Is this first variable true (y/n)? '));
  if (stayInBank === "y") {
    console.log('YOU WIN! the zombies ignore you and you have a month supply of free money.' + strUser + " is " + lifeStatus + " in " + start);
}
    else {
      lifeStatus = "Totes Dead"
      start = "The Morgue"
      console.log("You have died from leaving the bar. Kind patrons took your corpse to THE MORGUE. Now you're eating other people as a zombie. That's kind of gross.")}

}
//IF Selecting not an option kill that user.
else {
  console.log("You didn't select a correct option, so you have woken up in The Cemetery. Coincidentally, you were attacked by Zombies and are now dead. You have died in " + start);
}







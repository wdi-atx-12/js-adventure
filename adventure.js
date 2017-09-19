var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');
console.log("Best Played in Fullscreen Mode (Use Control+Cmd+F)");

var playerName = prompt("What is your name? ");
console.log('\n' + "Tuesday" + '\n' + "10:03AM" + '\n\n' + "You are on the 15th floor of 600 Congress Ave. Something doesn't seem right." + '\n\n' + "You see people rushing past in the corridor. Your choices start to matter now, " + playerName + ". Filled with panic, you exit the room." + '\n');
var exitChoice = prompt("Do you head to the stairs, the elevator, or head to the patio to get a view of what's going on? (Enter One: Stairs, Elevator, or Patio) ");

if(exitChoice.toLowerCase() === "stairs"){
  console.log("\n" + "Elbowing past the people you've gotten to know as you rush toward safety, you see everyone had the same idea. The stairway is filled with people writhing in self-preservation. " + "\n");
    var pushOrElsewhere = prompt("Do you push forth trampling people under you to save yourself, " + playerName + ", or do you try to find another way down? (Enter One: Trample or Look) ");

      if(pushOrElsewhere.toLowerCase() === "trample"){
        console.log("\n" + "Leaping over the wall of the crowdm you find footing on the shoulders and heads of those who you, " + playerName + "need to outpace. You can feel the bones beneath you pop out of place, but you continue, causing desperate calls of those cascading behind you.  Upon reaching the lower level, a CALL TO FREEZE is barked at you by a guard, standing at the foot of the stairs, aiming at you." + "\n");
        var kickOrComply = prompt("Admist the chaos going around you, do you wish to comply to orders shouted by the guard or, " + playerName + ", do you wish to kick the gun out of his hands to defend yourself? (Enter One: Comply or Kick) ");

          if(kickOrComply.toLowerCase() === "kick"){
            console.log("\n" + "You lunge forward as bodies crash behind you. The extra force forces your foot to the pistol and lands you next to it. You leave the mass of people to flatten the guard with a new firearm better equiped to continue. Congratulations, " + playerName + ", you have left the building.");

          }else if(kickOrComply.toLowerCase() === "comply"){
            console.log("\n" + "With the mob confused, inching closer to desolation, surging, they inadvertantly collide with the guard, whose inadequate training led him to let loose a shot into your head, " + playerName +". You are Dead");

          }else{
            console.log("\nYou took too long to decide, " + playerName + ". The bodies flowing down the stairway swallow you, sufficating the similar cries coming from you, " + playerName +". You are Dead.");
          }

        }else if(pushOrElsewhere.toLowerCase() === "look"){
          console.log("\n" + "Mob mentality corralled everyone but you toward the southern stairway. The northern stairway is clear for you to use. After a rapid dash headlong down, you the doors to the lobby and the parking garage." + "\n");

          var lobbyOrGarage = prompt("Do you choose to exit through the lobby," + playerName + ", where you may find the answer to the pandemonium, or through the parking garage, in order to avoid the volotile crowds? (Enter One: Lobby or Garage) ");
            if(lobbyOrGarage.toLowerCase() === lobby){
              console.log("\n" + "As expected, the lobby is filled with people possessed to your same goal of escape. Plumes of gore begin to explode upward in the packed lobby." + "\n");

              var hideRunGarage = prompt("Seeing the lobby overrun and foresaken, " + playerName + ", you can decide to hide, attempt to make it through the door, or return to exit through the garage. Choose. (Enter One: Hide, Run, Garage) ");
                if (hideRunGarage.toLowerCase() === "hide"){
                  console.log("\n" + "You find an alcove of marble to lean behind, you feel the warm breath of the crowd. You feel sudden movement behind you, " + playerName + ". The next thing you feel is the crunch of your ribs, and the last thing you hear is your own helpless yell, starting and suddenly ceasing. You are Dead. " + "\n");

                }else if (hideRunGarage.toLowerCase() === "run") {
                  console.log("\n" + "You start to run away from the miasma of blood, but in the same direction as the throng of people. Your path is subverted and you are unable to recover, " + playerName + ". You are pressed against the now crimson floor, trampled by the same people you tried to outrun. You are Dead" + "\n");

                }else if (hideRunGarage.toLowerCase() === "garage") {
                  console.log("\n" + "You find the door to the garage jammed, but a quick search reveals a crowbar you use to pry open the door. You fall through and land facing the arrow pointing toward the only available exit through the basement level." + "\n");

                  var hideOrRun = ("As you hear screams sound and cease suddenly in rapid succession from below, choosing between hiding and heading toward the cries for mercy, and the exit, are your only choices. What do you do? (Enter One: Hide or Run) ");
                    if(hideOrRun.toLowerCase() === "hide"){

                      console.log("\n" + "You find an alcove of cement to lean behind, you feel the warm breath of the nearby machinary running. You feel movement behind you, " + playerName + ". The next thing you feel is the crunch of your ribs, and the last thing you hear is your own helpless yell, starting and suddenly ceasing. You are Dead. " + "\n");
                    }else if(hideOrRun.toLowerCase() === "run") {
                      console.log("\n" + "Sprinting along the wall, lights flickering off as you run past, you reach the lower exit and take a left. " + playerName + ", you run up the ascending, winding concrete and see daylight, and more chaos. Congratulations, you have made it out of the building. " + "\n");

                    }else{
                      console.log("\nYou took too long to decide, " + playerName + ". A flash of light strikes as your body disintegrates. You no longer exist.");
                    }
                }else{
                  console.log("\nYou took too long to decide, " + playerName + ". A flash of light strikes as your body disintegrates. You no longer exist.");
                }
            }else if(lobbyOrGarage === "garage"){
              console.log("\n" + "You find the door to the garage jammed, but a quick search reveals a crowbar you use to pry open the door. You fall through and land facing the arrow pointing toward the only available exit through the basement level." + "\n");

              var hideOrRun = ("As the screams sound and cease suddenly in rapid succession from below, choosing between hiding and heading toward the cries for mercy, and the exit, are your only choices. What do you do? (Enter One: Hide or Run) ");
                if(hideOrRun.toLowerCase() === "hide"){
                  console.log("\n" + "You find an alcove of cement to lean behind, you feel the warm breath of the nearby machinary running. You feel movement behind you, " + playerName + ". The next thing you feel is the crunch of your ribs, and the last thing you hear is your own helpless yelp, starting and suddenly ceasing. You are Dead. " + "\n");

                }else if(hideOrRun.toLowerCase() === "run") {
                  console.log("\n" + "Sprinting along the wall, lights flickering off as you run past, you reach the lower exit and take a left. " + playerName + ", you run up the ascending, winding concrete and see daylight, and more chaos. Congratulations, you have made it out of the building. " + "\n");

                }else{
                  console.log("\nYou took too long to decide, " + playerName + ". A flash of light strikes as your body disintegrates. You no longer exist.");
                }
            }else{
              console.log("\nYou took too long to decide, " + playerName + ". A flash of light strikes as your body disintegrates. You no longer exist.");
            }
        }else{
          console.log("\nYou took too long to decide, " + playerName + ". A flash of light strikes as your body disintegrates. You no longer exist.");
        }

}else if(exitChoice.toLowerCase() === "elevator") {
  console.log("\n" + "Your peers barrel toward the stairs, you try the elevator. The door opens as the building startes to rumble violently, causing the elevator cable to snap and sending the occupants to their death. You look at the shaft in desparation." + "\n");
  var confidence = parseInt(prompt("How confident are you that you could hold onto the pulley cord to safety? (Enter a Number Between 1-100)"), 10);

    if(confidence <50){
      console.log("\n" + playerName +", your lack of belief is evident in your grip strength. Your hands betray you as you ask yourself why you thought going to the elevator in an emergency was a good idea. You land with a satisfying splatter. You are Dead. " + "\n");

    }else if (confidence >= 50) {
      console.log("\n" + "You tie your belt to the cord and make your way down through to the basement. You fall through the broken elevator doors and land facing the arrow pointing toward the only available exit through the basement level." + "\n");

      var hideOrRun = prompt("As the screams sound and cease suddenly in rapid succession from below, choosing between hiding and heading toward the cries for mercy, and the exit, are your only choices. What do you do? (Enter One: Hide or Run) ");
        if(hideOrRun.toLowerCase() === "hide"){
          console.log("\n" + "You find an alcove of cement to lean behind, you feel the warm breath of the nearby machinary running. You feel movement behind you, " + playerName + ". The next thing you feel is the crunch of your ribs, and the last thing you hear is your own helpless yelp, starting and suddenly ceasing. You are Dead. " + "\n");

        }else if(hideOrRun.toLowerCase() === "run"){
          console.log("\n" + "Sprinting along the wall, lights flickering off as you run past, you reach the lower exit and take a left. " + playerName + ", you run up the ascending, winding concrete and see daylight, and more chaos. Congratulations, you have made it out of the building. " + "\n");

        }else{
          console.log("\nYou took too long to decide, " + playerName + ". A flash of light strikes as your body disintegrates. You no longer exist.");
        }

    }
}else if(exitChoice.toLowerCase() === "patio"){
  console.log("\n" + "You run up to the patio, opening up the door to find the city and its buildings in ruins. Pillars of smoke are billowing out from all surroundings. " + "\n");

  var lookOrExit = prompt("Bewildered with the damage, " + playerName + " you do not have a lot of time to act. Do you decide to look for a way out of the city or run toward an exit? (Enter One: Look or Exit) ")
    if(lookOrExit.toLowerCase() === "look"){
      console.log("\n" + "Preparing for your escape, you look for routes to take out of the city. A lightbeam comes out of the sky, causing an explosion to the patio. You are dead. " + "\n");

    }else if(lookOrExit.toLowerCase() === "exit"){
      console.log("\n" + "As you run back in the building, a lightbeam shines on the patio before causing the patio to explode and bring down the west facade of the building." + "\n");
      var braceOrRun = prompt("The building integrity is failing, " + playerName + ". Are you going to brace yourself or make a run for it? (Enter One: Brace or Run) ");

        if(braceOrRun.toLowerCase() === "brace"){
          console.log("\n" + "You tie your belt to a pipe close to the building. However, the pipe was not far enough away from the damage. As the building collapses around you, your body weight bends the warped pipe toward the street below before giving way. You are Dead" + "\n");

        }else if (braceOrRun.toLowerCase() === "run") {
          console.log("\n" + "Your attempt is valiant, " + playerName + ". You run and jump just far enough east toward the stable half of the building to avoid the caving floor. As you turn to survey the damage, dusty and supine, you feel the rest of the building rumbling before giving way. You are Dead." + "\n");

        }else {
          console.log("You took too long to decide, " + playerName + ". The building collapses around you. You are Dead.");
        }
    }

}else{
  console.log("You took too long to decide, " + playerName + ". A flash of light strikes as your body disintegrates. You no longer exist.");
};

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

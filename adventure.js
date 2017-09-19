var yn = require('yn');
var firstname = prompt('What is your first name? ');
console.log('Hello ' + firstname + '.  You find yourself in a dark room.');
var lighton = yn(prompt('Will you turn on the light (y/n)?'));
if (lighton) {
  console.log('You see doors to your left, right and in front of you');
  var doorchoice = prompt('Which door will you enter? L/R/F ');
  if (doorchoice === 'L' || doorchoice === 'l') {
    console.log('You fall into a pit of lava.  You die.');
  }
  else if (doorchoice === 'R' || doorchoice === 'r') {
    console.log('You see a red button, a blue button, and a green button.');
    var buttonchoice = prompt('Which button will you press? R/G/B');
      if (buttonchoice === 'r' || buttonchoice === 'R') {
        console.log('Toby Keith appears and kills you with a song about freedom.');
      }
      else if (buttonchoice === 'g' || buttonchoice === 'G') {
        console.log('Toby Keith appears and makes weed references until you die of boredom.');
      }
      else if (buttonchoice === 'b' || buttonchoice === 'B') {
        console.log('Primus starts playing through a small speaker in the corner of the room.  The floor opens up and you drop into a room full of mirrors.');
        var mirroraction = prompt('You see your own image before you.  Will you smash the mirror or try to find a way out? smash/escape ');
        if (mirroraction === 'smash') {
          console.log('You have ascended into the right hand of the father and have discovered eternal life.  Goodbye.');
        }
        else if (mirroraction === 'escape') {
          console.log('You try to escape the room.  The voice of Alan Watts comes into your mind in a loud, clear voice and say "you should have known that if you see the Buddha you should kill the Buddha."  You are engulfed in toxic radiation and die a slow, painful death.');
        }
        else {
            console.log('That doesn\'t make since.  You explode for no reason at all.');
          }
       
      }
    }
  
  else if (doorchoice === 'F' || doorchoice === 'f') {
    console.log('The door opens and you see George Carlin');
    var georgeaction = prompt('George asks you how many past lives you\'ve had. 0, 1, 9, or 111?');
      if (georgeaction === '0') {
        console.log('George congratulates you and reveals to you that life is a meaningless set of arbitrarily chosen decisions that can only lead toward one place.  Death.  But at least you figured it out.  Great job.  You are now free to live out the rest of your days in a dreary middle class suburban home, cranking out 2 or 3 clones of yourself for no reason.');
      }
      else {
        console.log('George looks at you as if you were a complete and utter knob.  1000 books relating to trickle down economics fall upon your stupid head and you die.  No one comes to your funeral.');
      }
  
    
  }
  

}
else {
  console.log('You feel a tap on your shoulder');
  var darkaction = prompt('Do you grab the finger and break it off, run away, or scream? breakoff/run/scream');
    if (darkaction === 'breakoff') {
      console.log('You break off the finger of the shadowy creature and you hear a gasp and then the lights turn on.  It\'s your grandmother back from the grave.  She says, "Why have you taken my finger?  WHY HAVE YOU TAKEN MY FINGER?!?!');
        var grannyaction = prompt('Do you apologize, call your dad, or go to church and pray? sorry/dad/pray');
          if (grannyaction === 'sorry') {
            console.log('Granny says, "that\'s ok, sonny.  Have a cookie!"  She hands you a cookie and the entire universe collapses upon you.');
          }
          else if (grannyaction === 'dad') {
            console.log('You pick up your cellphone and call your dad.  He tells you that Granny has been dead for 33 years.  The phone explodes.  You die from the explosion.  Granny laughs.  The end.');
          }
          
          else if (grannyaction === 'pray') {
            console.log('You pray to God.  Nothing happens of course.  Granny starts bleeding until the blood fills the room and then you drown.');
          }
          
          else {
            console.log('That doesn\'t make since.  You explode for no reason at all.');
          }
        }
    else if (darkaction === 'run') {
      console.log('You feel paralyzed.  You wake up from a dream.  You discover you\'re actually the king of the playground... because you\'re a 4th grader.')
    }
    
    else if (darkaction === 'scream') {
            console.log('You scream like a whimpering dog.  The police show up and serve you a citation for parking facing oncoming traffic outside on the street.  You walk out unscathed and take a long bath later.  No big deal.');
          }
}
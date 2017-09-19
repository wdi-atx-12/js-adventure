var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');



var time = 50;
var repeat = true;

while (repeat === true) {
  console.log('You wake up on an abandoned space station after ' + time + ' years in cryogenic sleep.\n What happened to the rest of the crew is a mystery. \n\n' );
  var destination = prompt('Do you want to go to the BRIDGE, the ESCAPE PODS, or BACK TO SLEEP? ');

  if (destination === 'BRIDGE') {
    console.log('On the bridge, you find a radio with a dial that goes from 1 to 200.');
    var radio_setting = parseInt(prompt('What do you set it to?      '),10);
    while (radio_setting <= 70 || radio_setting >= 130) {
      radio_setting = parseInt(prompt('All you can hear on that channel is static. What do you set it to?       '),10);
    }
    var radio_answer = yn(prompt('A human voice comes through on the radio. "Message recieved. Are there other survivors with you?" (Y/N)       '));
    if (radio_answer === true) {
      console.log('"A rescue crew is on the way. See you soon."');
      repeat = false;
    } else if (radio_answer === false) {
      console.log('"We cannot afford to send a rescue mission for one person. Good luck out there."');
      repeat = false;
    }
  }

  if (destination === 'ESCAPE PODS') {
    var escape_pod = prompt('Escape pod number 1 looks clean and shiny, while number 2 looks old and rusty. which one do you choose? (1 or 2)          ');
     if (escape_pod === 1) {
        console.log('The escape pod takes off safely.');
        var autopilot = yn(prompt('A voice comes over the speaker. "Would you like to activate the ships autopilot?" (Y/N)         '));
        if (autopilot === true) {
          console.log('Nothing left to do now but wait. Hopefully this autopilot works correctly.');
          repeat = false;
        } else {
          console.log('You choose to override the autopilot, but you have no idea how to use the controls. You will surely run out of fuel alone among the stars. How stupid of you.');
          repeat = false;
        }
     } else {
      console.log('Upon entering the rusty escape pod, you see a big green launch button.');
      var button_press = yn(prompt('Do you press it? (Y/N)        '));
      if (button_press === true) {
        console.log('The dilapidated escape pod shakes for a moment, then explodes in a gigantic fireball. How tragic.');
        repeat = false;
      } else {
        console.log('Having a change of heart, you decide to leave the pod. Unfortunately, the rusty door will not budge. Suddenly, the power in the pod dies. What seemed like your salvation is now your tomb.');
        repeat = false;
      }
     }
  }

  if (destination === 'BACK TO SLEEP') {
    time = parseInt(prompt('How many years do you want to sleep for?       ',10));
    if (time > 100) {
      console.log('The machine was not designed for this long of a sleep. You turn into a human popsicle.');
      repeat = false;
    } else {
      console.log('You enter a deep dark slumber...');
    }
  }
}

console.log('\n\nTHE END...');






var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

var useOfCarInput = prompt('If you buy a new car, what would you use it for? Daily driving or racing?');
var useOfCar = useOfCarInput.toLowerCase();

if (useOfCar === 'racing') {
  var raceOnly = yn(prompt('Would you only use it to race? (y/n)'));
  if (raceOnly) {
    var raceCarPrice = parseInt(prompt('How much do you want to spend? (no more than $100,000 omit "$" and ",")'),10);
    if (raceCarPrice > 0 && raceCarPrice <= 1000) {
      console.log("Maybe just buy a HotWheels....")
    }
    if (raceCarPrice > 1000 && raceCarPrice <= 20000) {
      console.log('You should probably get a prepped Miata')
    }
    if (raceCarPrice > 20000 && raceCarPrice <= 50000) {
      console.log('A prepped S2000 would probably be a good bet for you!')
    }
    if (raceCarPrice > 50000 && raceCarPrice <= 80000) {
      console.log('That is prepped STI territory!')
    }
    if (raceCarPrice > 80000 && raceCarPrice <= 100000) {
      console.log('Oh man, totally get a Stalker! Those are BAD ASS!!')
    }
    if (raceCarPrice > 100000) {
      console.log('Just get a Ferrari')
    }


} else {
  var notOnlyRacePrice = parseInt(prompt('How much do you want to spend on your combo daily driver/race car? (no more than $100,000 omit "$" and ",")'),10);
    if (notOnlyRacePrice > 0 && notOnlyRacePrice <= 1000) {
      console.log("A used Camery, maybe?")
    }
    if (notOnlyRacePrice > 1000 && notOnlyRacePrice <= 20000) {
      console.log('You should probably get a Civic')
    }
    if (notOnlyRacePrice > 20000 && notOnlyRacePrice <= 50000) {
      console.log('A VW Golf GTI or R seems about right!')
    }
    if (notOnlyRacePrice > 50000 && notOnlyRacePrice <= 80000) {
      console.log('That is STI territory!')
    }
    if (notOnlyRacePrice > 80000 && notOnlyRacePrice <= 100000) {
      console.log('A Porche Cayman S is in your future!')
    }
    if (notOnlyRacePrice > 100000) {
      console.log('Just get a Panamera')
    }
}
} else {
  var dailyDriver = yn(prompt('Are you SURE you do not want to race your new car? (y/n)'));
  if (dailyDriver) {
      var noRaceCar = prompt('Would you rather have a bicycle or a Prius?');
      // var noRaceCar = noRaceCarType.toLowerCase();

      if (noRaceCar === 'Prius') {
        console.log('Well, at least it is still a car....I guess....')
      } else{
        console.log('That would be great excersise!');

    }
}

  if (!dailyDriver) {
    console.log('REALLY!?!?!  You should take this survey again!')
  }
}

console.log('\n');

var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');


var again;

var gameOver = (again) => {
  console.log('\n*****************');
  console.log('****GAME OVER****');
  console.log('*****************\n');
  again = prompt('Play again? (Y/N) ');
  console.log('\n');
  if (again === 'Y' || again === 'y') {
    adventureGame();
  } else if (again === 'N' || again === 'n') {
    console.log('Thanks for playing!');
    return;
  }
  else {
    return;
  }
};

var adventureGame = () => {

  var name = prompt('What is your name? ');

  while(!isNaN(name)) {
      console.log('You have enter an invalid name or left empty, please try again.');
      var name = prompt('What is your name? ');
  }

  console.log(`Nice to meet you, ${name}.`);
  var year = prompt('What year would you like to go to? (YYYY) ');


  while (isNaN(year) || year.length < 4 || year.length > 4) {
    console.log('Error: Invalid character or invalid year');
    var year = prompt('What year would you like to go to? (YYYY) ');
  }

  if (year >= 2015) {
    console.log('I see you\'re a fan of Back to the Future 2. ');
    var res = prompt('Would you rather deal with Biff, or Griff? (B/G) ');
    if (res === 'b' || res === 'B') {
      console.log('Hmm, interesting. Biff is angry and has a cane. ');
      var fightOption = prompt('Do you stand and fight, or run away like a coword? (S/R) ');
      if (fightOption === 'S' || fightOption === 's') {
        console.log('Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.');
        gameOver();
      }
      else if (fightOption === 'R' || fightOption === 'r') {
        console.log('You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad\'s cowardice.');
        gameOver();
      }
    }
    else if (res === 'G' || res === 'g') {
      var fightOption = prompt('Griff is asking if you are in, or out. What do you say? (I/O) ');
      if (fightOption === 'I' || fightOption === 'i') {
        console.log('Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.');
        gameOver();
      }
      else if (fightOption === 'O' || fightOption === 'o') {
        console.log('Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.');
        gameOver();
      }
    }
  }

  else if (year >= 1985 && year <= 2014) {
    console.log('Doc has already destroyed the Time Machine at this point. I guess you\'ll have to wait around until 2015. ');
    var name = prompt('What name would you like to go by until then? ');
    while(!isNaN(name)) {
      console.log('You have enter an invalid name or left empty, please try again.');
      var name = prompt('What name would you like to go by until then? ');
    }
    console.log(`Welcome to the future, ${name}`);
    gameOver();
  }

  else if (year >= 1955 && year <= 1984) {
    console.log('I see you\'re a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. ');
    var res = prompt('What do you do? (Y/N/S)');
    if (res === 'Y' || res === 'y') {
      console.log('Creepy. I hope you have some backup plan in place to get out of this. Until then, you\'re stuck in 1955.');
      gameOver();
    }
    else if (res === 'N' || res === 'n') {
      console.log('Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.');
      gameOver();
    }
    else if (res === 'S' || res === 's') {
      console.log('Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.');
      gameOver();
    }
  }

  else if (year < 1955) {
    console.log('I see you\'re a fan of Back to the Future 3. You\'ve run out of nitroglycerin to get back to your own time. ');
    var res = prompt('How do you power the Time Machine? (H/M/T) ');
    if (res === 'H' || res === 'h') {
      console.log('Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain\'t gonna cut it.');
      gameOver();
    }
    else if (res === 'M' || res === 'm') {
      console.log('You\'d be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.');
      gameOver();
    }
    else if (res === 'T' || res === 't') {
      console.log('Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment.');
      var option = prompt('What do you do? (T/L) ');
      if (option === 'T' || option === 't') {
        console.log('Interesting choice. Unfortunately the Doc can\'t grab Clara and get back to the car in time. He ends up staying in 1855 with her.');
        gameOver();
      }
      else if (option === 'L' || option === 'l') {
        console.log('Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.');
        gameOver();
      }
    }
  }

  else {
    console.log('Invalid Year');
    gameOVer();
  }
};

adventureGame();










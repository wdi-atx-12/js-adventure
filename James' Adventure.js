var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

var name = prompt("What is your name? ");

if (name.toLowerCase() === "morty") {
  console.log( 'Great! My useless grandson is here! Let\'s go on a RICK AND MORTY ADVENTURE!!! ' );
} else {
  console.log( 'I don\'t know *burp* Are you sure you\'re not Morty? *Shoots and kills you* ' );
  process.exit();
}

var choosePlace = prompt('Choose where we go: Citadel of Ricks, Dimension C-137, or Atlantis: ');

if (choosePlace.toLowerCase() === "citadel of ricks") {
  console.log( '*grumble* I don\'t know why we have to go there *burp* they are just a bunch of tools but I guess this is your adventure ');
  var bombTheCitadel = yn(prompt('Do we want to blow up the Citadel(again) (y/n)? '));
  if (bombTheCitadel)
    console.log( 'WUBALADUBDUB WE BLEW UP THE CITADEL! ');
  else {
    console.log( 'Oh geeze Rick, we got captured by evil Morty.' );
    process.exit();
    }
  }
else if (choosePlace.toLowerCase() === "dimension c-137") {
  console.log( 'oh god you want to go back to the cronenburg universe? You miss your old family that much? I guess that\'s okay *burp* ');
  var bombSolve = prompt( 'QUICK MORTY! IF WE GUESS THIS NUMBER BETWEEN 1 AND 100 WE CAN CURE THE CRONENBURG UNIVERSE! Enter code: ');
  if (bombSolve > 30 && bombSolve < 60) {
    console.log( 'They all turned into bronenkurgs oh geeze Rick! ');
    process.exit();
    }
  else if (bombSolve <= 100 && bombSolve >= 1)
    console.log( 'OH GOD RICK WE SAVED OUR ORIGINAL UNIVERSE! ');
  else {
    console.log( 'OH GOD RICK HOW DID WE SCREW THIS UP AGAIN?! ');
    process.exit();
  }
}
else if (choosePlace.toLowerCase() === "atlantis") {
  console.log( 'THAT IS WHAT I AM TALKING ABOUT! GOING TO GET THE MERMAID BABESS! ');
  var fishTacos = prompt( 'How are the fish *burp* tacos Morty (Amazing/I\'ve had better)? ');
  if (fishTacos.toLowerCase() === "amazing")
    console.log( 'Aww geeze Rick, these are the best fish tacos I\'ve had in my life ');
  else {
    console.log( 'I miss Jessica.' );
    process.exit();
  }
}
else {
  console.log( 'I guess you have to choose another place *burp* ' );
}
console.log( 'Great job, let\'s leave '+choosePlace+'. *burp* I love you noob noob ');

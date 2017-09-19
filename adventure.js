var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

// // a few example inputs (delete these from your completed file)
// var booleanInput = yn(prompt('Is this first variable true (y/n)? '));
// var integerInput = parseInt(prompt('Enter a whole number: '),10);
// var stringInput = prompt('Enter any string: ');

// console.log();

// // a few example outputs (delete these from your completed file)
// console.log('Your boolean = ' + booleanInput + '.');
// console.log('Your integer = ' + integerInput + '.');
// console.log('Your string  = ' + stringInput + '.');

var country_obj ={
  'skyrim':{
      name : "Skyrim",
      neighbors : ["Morrowind", "Cyrodiil", "Highrock","Hammerfell"], 
      description: `
      Skyrim is a cold and harsh land, the home of the Nords.
      Half the time you can't tell if its the snow, or the rugged northerners that make your skin freeze.
      Nonetheless, the warm of its hearthfires after a long day of work make you feel at home.
      The bards, the mead and the simple lifestyle make you wonder if this is the place for you...
      `,
      exit:`
      No, the weather is simply not hospitable. Any wealth attained could be robbed by bandits, and 
      life is too short to lose it to a wild sabre cat.`
  },
  'morrowind':{
      name : "Morrowind",
      neighbors : ["Blackmarsh", "Cyrodiil", "Skyrim"], 
      description: `The land of the Dunmer, the most alien and inhospitable place known in Tamriel next to Blackmarsh.
     	You are not sure why you came here, but something about the Guar, the alien wildlife, and its breathtaking 
     	architecture call to you. The Dunmer don't trust outsiders, but there is much opportunity to be had here, should 
     	one rise to the challenge and earn the respect if the inhabitants.
     	Does this adversity phase you?
     	`,
      exit: `Even if you tried to settle, the Dunmer would probably kick you for being foreign. The xenophobia of House Telvanni
      	would surely see you exploited and enslaved. The Dunmer may have much interesting history, but hitting the books would
      	be safer.`
  },
  'blackmarsh':{
      name : "Blackmarsh",
      neighbors : ["Morrowind", "Cyrodiil", "Elsweyr"], 
      description: `The great swamp of Tamriel. You wonder if you can even make it near the center, were the Argonians-the 
        lizard people of Tamriel- make their home. The mystery behind the history of the hist trees would be enough to entertain
        the stay of any would-be adventurer, although the Wamasu and terrain would certainly devour the unweary.
        Is it in you? Do you crave the dungeon-delving, creature-hunting, and subsitance-living of the wildlands?
      `,
      exit: `Ofcourse not. It would be idiotic for a non-argonian to try living here. You decide to move on, in search of 
        greener pastures`
  },
  'cyrodiil':{
      name : "Cyrodiil",
      neighbors : ["Morrowind", "Skyrim","Hammerfell","Summerset Isles", "Valenwood", "Elsweyr", "Blackmarsh"], 
      description: `The cosmopolitan heartland of the Empire. The location of the defeat of Mehrunes Dagon. The seat of
      	the Dragon God of Time, home to the White-Gold tower and more markets and trade than any other place on the continent.
      	While boring to the thrill seeker, Cyrodiil is sure to hide much treasure, love, food and more mild adventure for 
      	the dedicated entrepenuer. Under a flagon of Colovian Brandy, you contemplate taking a rest from your travels.
      	`,
      exit: `You don't see yourself turning into a pompous nobleman, and reading books while dying of old age is boring,
      	right? After some thought, you recognize that while the idea of peace is attractive, you were born for adventure.
      	`
  },
  'elsweyr':{
      name : "Elsweyr",
      neighbors : ["Valenwood", "Cyrodiil", "Blackmarsh"], 
      description: `From Rawl'Kha to Dune to Senchal, nothing but fur and tails! You had heard of the cat folk
      	-the Khajiit- but to see such a diverse atmosphere filled with such little humans is strange to you.
      	Their good sense of humor and easy going yet honorable life has piqued your interest. Sure their culture
      	and way of thinking may be odd to you, but you are not of the same litter. They are welcoming, and the sun
      	kissed plains of Elsweyr would make a fine place to explore.
      	`,
      	exit: `The culture is too alien, as are... their ideas of property. Pickpockets are common and you almost lost half your gold to one.
      	who would want to live in a place where the un-caught thieve is deserving of their ill-gained goods? While you made some friends during
      	your stay, it is time to move on.
      	`
  },
  'valenwood':{
      name : "Valenwood",
      neighbors : ["Elsweyr", "Cyrodiil", "Summerset Isles"], 
      description: "Is this even gonna get checked? Takes a long time to write descriptions, you wanna live here or no? The programmer needs a break!",
      exit: "On with your adventure."
  },
  'summerset_isles':{
      name : "Summerset Isles",
      neighbors : ["Valenwood", "Cyrodiil"], 
      description: "Is this even gonna get checked? Takes a long time to write descriptions, you wanna live here or no? The programmer needs a break!",
      exit: "On with your adventure."
  },
  'hammerfell':{
      name : "Hammerfell",
      neighbors : ["Skyrim", "Cyrodiil", "Highrock"], 
      description: "Is this even gonna get checked? Takes a long time to write descriptions, you wanna live here or no? The programmer needs a break!",
      exit: "On with your adventure."
  },
  'highrock':{
      name : "Highrock",
      neighbors : ["Skyrim"], 
      description: "Is this even gonna get checked? Takes a long time to write descriptions, you wanna live here or no? The programmer needs a break!",
      exit: "On with your adventure."
  },
  'ghost':{
      name :"Sea of Ghosts",
      neighbors : ["Skyrim","Highrock","Morrowind"],
      description: "An ominous sea... you do not feel safe, but land is nearby. Best decide were you want to go.",
      exit: "On with your adventure."
  }
};

var has_settled = false;
var current = country_obj.ghost;

while(has_settled === false){
  console.log(`You are in ${current.name}.
    ${current.description}
    `);
  var settle_bool = prompt(`
    Would you like to settle?

    `).toLowerCase();
  if(settle_bool === "yes"){
    has_settled = true;
    break;
  }
  
  // determines country to move to 
  console.log(`You decide that ${current.name} is not for you.
    ${current.exit}
    `)
  var move_c = prompt(
    `Where would you like to explore next?
    ${current.neighbors}
    `);
  console.log("\n")
    
  switch(move_c){
    case 'Skyrim' :
      current = country_obj.skyrim;
      break;
    case 'Morrowind' :
      current = country_obj.morrowind;
      break;
    case 'Blackmarsh' :
      current = country_obj.blackmarsh;
      break;
    case 'Cyrodiil' :
      current = country_obj.cyrodiil;
      break;
    case 'Elsweyr':
      current = country_obj.elsweyr;
      break;
    case 'Valenwood':
      current = country_obj.valenwood;
      break;
    case 'Hammerfell':
      current = country_obj.hammerfell;
      break;
    case 'Highrock':
      current = country_obj.highrock;
      break;
    case 'Summerset Isles':
      var response = prompt("The trip to Summerset requires a hefty voyage, what will you pay?");
      //Checks gold ammount, only allows voyage if over 300 gold 
      if(isNaN(parseInt(response, 10))){
        console.log("That is no gold... come back later");
        continue;
      }else{
        if(parseInt(response, 10) >= 300){
          console.log("Ride on friend!");
          current = country_obj.summerset_isles;
          break;
        }else{
          console.log("You think I can sail with that?")
          continue;
        }
      }
      break;
    default : 
      console.log(`${move_c}? I do not know that location`);
      break;
  }
    
  
}

console.log(`Welcome to your new home, your old life must have been harsh, but rest easy I'm sure you will fit right in ${current.name}`);
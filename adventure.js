var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

/* a few example inputs (delete these from your completed file)
var booleanInput = yn(prompt('Is this first variable true (y/n)? '));
var integerInput = parseInt(prompt('Enter a whole number: '),10);
var stringInput = prompt('Enter any string: ');

console.log();

// a few example outputs (delete these from your completed file)
console.log('Your boolean = ' + booleanInput + '.');
console.log('Your integer = ' + integerInput + '.');
console.log('Your string  = ' + stringInput + '.');
*/
console.log("Fire Sprite: Welcome to hell, the interactive game that really brings out the coding ember from you.");
console.log("Fire Sprite: What was that? You're not supposed to be here? Nonsense! On your left, we have Sonic speeding by.")
console.log("Fire Sprite: Why is Sonic here? Well, he kept getting speeding tickets and was very disobedient in that regard "
+ "along with constantly making Amy cry and trying to beat a statue made out of eggs for some reason. He said the statue's name"
+ " was Eggman? I think he had too much ocean water to drink back in the days.");

console.log("You: How can I escape this ember prison?");
console.log("Fire Sprite: Well, did you go look for Bobert?");
console.log("You: Bobbert?");
console.log("Fire Sprite: Yes, Satan. Go on an adventure and bring Bobbert back to me. I'll set you free after like in a day " +
"or two. When I don't feel engulfed in flames or too lazy.");

var introPrompt = prompt("WAIT! DO YOU HAVE A NAME? (y/n)");

  if(introPrompt === 'y') {
    introPrompt = prompt("What is your name?");
      if(introPrompt.length > 2) {
        var name = "Uncle Sam";
        console.log("Gah! What a horrible name. You're name is Uncle Sam from now on from that awful game Techmo made. "
        + "Secret of The Stars.");
      } else {
         var name = "Bobby Bobaboy Bo Bobby Burnham Junior";
         console.log("That's not even a name. We'll just call you Bobby Bobaboy Bo Bobby Burnham Junior then.");
      }
  } else {
      var name = "Kool Aid Rowaden May Duran Tornado Junior";
      console.log("Alright Kool Aid Rowaden May Duran Tornado Junior, that's your new name.")
  }

console.log("Alright, " + name + ", are you ready to start your grand adventure to find Satan, also known as Bobbert?" );

let acceptQuest = prompt("Will you accept the quest? (y/n)");

  if(acceptQuest === 'y') {
    console.log("Okay, well, it's not like you had much of a choice anyways. Sonic has decided to be your partner-in-crime, " +
    "and Spitty Toons the Spittoon is now your horse because in hell, everyone uses magical spittoons for transportation. ");
    console.log("THIS IS A PROMOTIONAL MESSAGE BROUGHT TO YOU BY MARKIPLIER! IF YOU HAVE NOT PLAYED WEST OF LOATHING YET, DO LOOK INTO "
    + "IT! THAT IS ALL. *Poof* ");
  } else {
    console.log("Too bad! You're stuck with Sonic as your partner-in-crime and Spitty Toons the Spittoon as your horse.")
    console.log("THIS IS A PROMOTIONAL MESSAGE BROUGHT TO YOU BY MARKIPLIER! IF YOU HAVE NOT PLAYED WEST OF LOATHING YET, DO LOOK INTO "
    + "IT! THAT IS ALL. *Poof* ");
  }

let environment = prompt("Sonic: Nice weather we're having here, huh? What kind of nature environments do you like? (desert, forest, ocean)");

  switch(environment) {
    case 'desert':
      console.log("Sonic: I think Spitty Toons was raised in the desert. He keeps spilling his spittoon guts everywhere.");
      var opinion = prompt("Sonic: What do you think? (y/n)");
      case 'y':
        console.log("Sonic: Spitty, how much gum can you hold?");
        console.log("Spitty spits globs of gum out as you keep riding to your destination.");
        var broke = prompt("Sonic: I think I broke Spitty bruh. (true/false)");
          case true:
            console.log("Sonic: Well, hopefully Spitty lives so we don't have to walk to the Pentecostal Bus Station to get there.")
          break;
          case false:
            console.log("Sonic: I hope you fall on a slime guru like the one that just passed us.");
          break;
      break;
      case 'n':
        console.log("Sonic: You should know better than to not agree with me.");
    break;
    case 'forest':
      var eggman = prompt("Sonic: That's where we're headed right now to find Bobbert, right? Can we find Eggman too there? (true/false)");
        case true:
          var conquer = prompt("Sonic: Will you help me defeat the evil Eggman and take over Bobbert's domain? (y/n)");
            case 'y':
              var num = prompt("Sonic: What's your favorite number? You'll need it for the future fight. (Enter a number)")
                case (num >= 1):
                  console.log("Sonic: Pray with me to the number gods that we will win.");
                break;
                case (num === 0):
                  console.log("Sonic embraces the silence and Spitty stifles out tears.");
                break;
            break;
            case 'n':
              console.log("Sonic: We're doomed to die because of you.");
            break;
        case false:
          console.log("Sonic: Liar!!");
        break;
    break;
    case 'ocean':
      var trolol = prompt("Sonic: Are you purposely trying to troll me? I can troll back you know. (y/n)");
        case 'y':
          console.log("Sonic: Your name is a Lorem Ipsum because you have no flexbox to fit that flexing Ipsum- OHHHHHHHH");
          var joke = prompt("Sonic: I'm a pro, right? That joke made me a pro! (true/false)");
          case true:
            console.log("Sonic: I want to not ditch you now like I was planning. You know all the right things to say ;)");
          break;
          case false:
            console.log("Sonic: Are we almost there yet? Spitty and I can leave if you don't appreciate our fantasticness.");
          break;
        break;
        case 'n':
          console.log("Sonic: Good. You don't know what's comin to you.");
        break;
    break;
    default:
      var talk = prompt("Sonic: Not much of a talker, eh? (true/false)");
        case true:
          console.log("Spitty Toons neighs out uncomprehensible words in slobber and Sonic murmurs about how Spitty is a better talker than you.");
        break;
        case false:
          console.log("Sonic: Oh good. The less you talk the more suspicious I am of you, newbie.");
        break;
    break;
  }

console.log("Sonic and " + name + " are riding away into Flame Rod Woods on Spitty Toons when they come across 3 paths. ")

var path = prompt("Pick a number for which path you will take. (1-3)");
    path = Math.round(Math.random()) * 3;

  if(path >= 1 && path < 2) {
    path = path;
    console.log("Spitty ends up going to the wrong path! You are now on path 3.");
    var choice = prompt("On path 3, you encounter Bobbert, and Eggman! They run off in two different directions. Who will you chase first? (bobbert/eggman)");
      if(choice === 'bobbert') {
        console.log("Sonic leaves you to fight bobbert alone as he chases after the running Eggman statue. You can hear Bobbert screaming a mile away.");
          var chaseBob = prompt("Will you follow the sound? (y/n)");
            var why = prompt("Why? Why do you want to follow it? Do you not want him to disappear?");
              var whatever = prompt("Okay, Okay, Sure, I get it. Do you realize the mistake you're making? (y/n)");
            if(chaseBob === 'y' && whatever === 'y') {
              var fireWater = prompt("You follow Bobbert into a cave hidden by a secret waterfall made of fire! The only tools to get you through without "
               + "burning is holy water, a basketball, and Sora's Keyblade? Which do you choose? (holy water/ basketball/ keyblade)");
                 if(fireWater === 'keyblade') {
                   console.log("You take Sora's sword gracefully and let Sora's spirit pour into your mind. You dash for the waterfall and become a ghost!");
                   var ghost = prompt("It appears Bobbert is scared of ghosts and screams as he runs into a wall. He is now unconscious. What do you do? (drag to fire sprite/ slay)");
                     if(ghost === 'drag to fire sprite') {
                       var wish = prompt("You drag him all the way back to the Fire Sprite who thanks you gratefully. You are returned to whatever world you choose. Where will you live now as a mortal? (final fantasy/ kingdom hearts/ earth)");
                         if(wish === 'final fantasy') {
                           console.log("You wander around the sector 7 slums to find Cloud and Tifa talking. You walk up to them and start a conversation. You tell them everything about what will happen in the future. "
                           + " Cloud begins to get mad about you telling him he gets to dress as a girl to save a girl, and because prophets are shunned upon, Cloud takes his buster sword and slays you. ");
                           console.log("But hey, at least you got to meet them, and you finished the game!");
                         }
                         if(wish === 'kingdom hearts') {
                           console.log("You come across the Island that Sora and Riku used to live at. There's a funeral going on. You find the keyblade you fought with valiently in the coffin. "
                           + " The people at the funeral stare at you angrily and throw stones at you. They even manage to get a riot going inside a local church. As you try to escape, you "
                           + "hear laughter in the background. You turn and see Sora laughing manically covered in blood, and holding Riku's head. You already know where this is going.");
                           console.log("But hey, at least you got to meet them, and you finished the game!");
                         }
                         if(wish === 'earth') {
                           console.log("You quickly fall off the bed after opening your eyes. You wonder what happened to you to cause you to have such an awful nightmare " +
                           "and meet Sonic in hell. Luckily, you didn't get your fingers caught in the spittoon your roommate leave in your room every night for some odd reason. "
                           + "As you walk out of your room, you see a blue hedgehog sitting in front of your door. You scream. ")
                           console.log("Are you ready to go on another adventure, " + name + "?");
                           console.log("Oh god. You thought it wasn't real. You thought it was over! Why? Why is there a small talking hedgehog in front of you?! The world will never know.");
                           console.log("Congrats! You got the almost happiest ending! :)");
                         }
                     } else if (ghost === 'slay') {
                       console.log("You slay Bobbert and bring his corpse to the fire sprite who never specified that he wanted him alive or dead. The fire sprite stays silent, and you find yourself back on earth, in your bed, screaming.");
                       console.log("What a nightmare! It was almost as bad as getting a B.S. degree that applies everywhere you go to basically everything.");
                       console.log("Congrats. You finished the game.");
                     }
                 } else if (fireWater === 'holy water' || fireWater === 'basketball') {
                   console.log("You just had to pick the two most boring choices, didn't ya? Alright. You throw the basketball and it catches fire as Bobbert throws it back into you. "
                   + " You end up catching fire and attempt to use the holy water on yourself to stop the burning, but because you're in hell, you turn to ashes. Good fight bruh.");
                   console.log("OH NO! YOU FAILED YOUR QUEST! ahsghjasvhjasvuasvdj *drowns in tears of sorrow*");
                 }
            }
      } else if (choice === 'eggman') {
          console.log("Sonic and you chase after the running statue as it throws firecrackers to distract you.");
          console.log("Sonic and you lost him! Drats to the Dracula! Or did you?");
          var sneak = prompt("All of a sudden, the egg statue has Sonic in a choke hold! He tells you he'll give you a choice. Either leave Sonic with him, or die with sonic. Which do you choose?(leave/ die)");
            if(sneak === 'leave') {
              console.log("You leave Sonic and run off to pursue Bobbert before it's too late. On your way to find Bobbert, you fall in quick sand.");
              console.log("Sorry, you got the OK K.O ending. It's good and bad. At least you finished the game!");
            } else if (sneak === 'die') {
              console.log("You end up finding a way to trick Eggman, and Sonic tries to tear him apart. However, because he is a statue, Sonic's attempts failed." +
              " Suddenly, the idea comes to you- you grab a firecracker and throw it at Eggman, which also hits Sonic!");
              var wound = prompt("Sonic is wounded! What will you do? (save/ slay)");
                if(wound === 'save') {
                  console.log("You dash to Sonic, as he coughs up a ton of really gross stuff you should not touch. Sonic confesses he is your long lost brother, who has been stalking you since "
                  + "he met you, and would have liked to show you his world one day where he was abandoned by accident when he was put on a sheep that ran off with him and kidnapped him.");
                  console.log("You know this is the end. Sonic whispers a final goodbye, " + name + ". Eggman has escaped, and the whereabouts of Eggman is unknown. At least you found out some truth though.")
                  console.log("Congrats! You got the OK WOAAAAHHHH HEYYYYY THERE TRUTH ending. Nice!");
                } else if(wound === 'slay') {
                    console.log("You plunge towards Eggman, and destroy him using firecrackers. Out of rage for the hell you've been through in your adventure, you proceed to slay Sonic with the keyblade. "
                    + "He was sleeping, so he couldn't feel it thankfully. Luckily the firecracker knocked him unconscious. Before you know it, you hear a mysterious sound getting louder.");
                    console.log("You open your eyes, and besides you is Nelly, who wakes you up by singing 'It was only just a dream~' while your alarm clock blares in your ear.");
                    console.log("Congrats! You got the WHAAAT ending. Coolio.");
                }
            }
      }
  } else if(path >= 2 && path < 3) {
      path = path;
      console.log("Spitty snorts out a defiant 'No' and suddenly Meghan Trainor comes out singing her song 'No'. "
       + " Sonic and Spitty force you to dance with them as the path swallows you up.")
      console.log("OH NO! YOU FAILED YOUR QUEST! ahsghjasvhjasvuasvdj *drowns in tears of sorrow*");
  } else {
      path = path;
      console.log("Spitty sees a squirrel in path 3, and runs out into path 1 out of fear. You are now on path 1.");
  }

var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

prompt('What is your name? ');
prompt('Are you a boy or a girl? ');

var input = yn(prompt('The alarm  goes off. Do you sleep in (y/n)? '));

if(input) {
    console.log('You overslept. Professor Oak has no pokemon for you. You must choose a rebellious pikachu.');
    input = yn(prompt('Do you head for Pewter City (y/n)?'));
    if(input) {
        console.log('You are attacked by sparrow\’s on your way to pewter town and pikachu isn’t listening to you.');
        input = prompt('What do you do: Run, Protect, Attack? ');
        input.toLowerCase();
        switch (input) {
            case 'run':
                console.log('You leave pikachu to be attacked by Sparrows. It dies along with your dream to catch them all. You grow up to be a lawyer.');
                break;
            case 'protect':
                console.log('You throw yourself on top of pikachu to protect it from the Sparrows. You become fast friends and go on to win the pokemon league.');
                break;
            case 'attack':
                console.log('Both of you make it out and reach Pewter City safely.');
                break;
            default:
                console.log('Both of you make it out and reach Pewter City safely.');
                break;
        }
    } else {
        console.log('Your pikachu runs.');
        input = parseInt(prompt('Which route will you take: 1 or 21? '), 10);
        if(input === 1) {
            console.log('You find pikachu but are ambushed by Team Rocket. You lose your pokemon.');
        } else {
            console.log('Pikachu ran up route 1! You lose your pokemon.');
        }
    }
} else {
    console.log('You meet professor Oak and get to choose a pokemon! ');
    input = prompt('Which will you choose: Bulbasaur, Squirtle, Charmander?');
    input = input.toLowerCase();
    if(input === 'bulbasaur' || input === 'squirtle') {
        console.log('You make it to pewter town. ');
        input = yn(prompt('Do you challenge the gym (y/n)?'));
        if(input) {
            console.log('It’s an easy win with your type advantage! You win the stone badge!');
        } else {
            console.log('Team rocket ambushes you while you are training. You lose your pokemon.');
        }
    } else {
        console.log('You make it to pewter town and challenge the gym.');
        input = prompt('Which move will you use: Scratch, Ember, Dig, Growl? ');
        input.toLowerCase();
        switch (input) {
            case 'ember':
                console.log('It\’s an overwhelming loss because of your type disadvantage.');
                break;
            case 'scratch':
                console.log('Onyx\’s rock defenses are too much. It\’s an overwhelming loss because of your type disadvantage. ');
                break;
            case 'dig':
                console.log('It\’s super effective and you manage to land a critical strike! Despite your type disadvantage, you win!');
                break;
            default:
                console.log('The move is ineffective. Brock stops the battle and sends you home. You’re humiliated.');
                break;
        }
    }
}

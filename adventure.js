var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

// a few example inputs (delete these from your completed file)
var booleanInput = yn(prompt('Is this first variable true (y/n)? '));
var integerInput = parseInt(prompt('Enter a whole number: '),10);
var stringInput = prompt('Enter any string: ');

console.log();

// a few example outputs (delete these from your completed file)
console.log('Your boolean = ' + booleanInput + '.');
console.log('Your integer = ' + integerInput + '.');
console.log('Your string  = ' + stringInput + '.');

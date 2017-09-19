var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

// a few example inputs (delete these from your completed file)
var booleanInput = yn(prompt('Do you have money?(y/n)? '));

var gotToPark = 10
if(booleanInput===true){
  console.log(integerInput)
}
else  while (gotToPark>0){
  console.log('You are no fun!');
  gotToPark -=1;
  end()
}

var integerInput = parseInt(prompt('How much? '),10);
while (integerInput>25){
  console.log('Lets get a drink!');
  integerInput-=5;

}


var stringInput = prompt('What do you want to eat? ');



if (stringInput=== "pizza", "tacos", "hamburger", "bbq","smoothies", "fallafel"){
  integerInput-=5;
  console.log("All THA FOODS!");
}else
  if (stringInput==="steak", "pasta", "fancyfood"){
    integerInput-=20;
    console.log("ALL tha FANCY FOODS");
  }


while (integerInput>5){
  console.log("Have another Drink");
  integerInput-=5;
}
console.log("You are out of money! GO HOME you are drunk!");

if (stringInput==="pizza"){
  console.log("Finished at rainey");
}else if (stringInput==="tacos"){
  console.log("Finished in E6ht");
}else if (stringInput==="hamburger"){
  console.log("Finished at PTerrys");
}else if (stringInput==="bbq"){
  console.log("Finished in Terry Blacks");
}else if (stringInput==="smoothies"){
  console.log("Finished at Whole foods");
}else if (stringInput==="steak"){
  console.log("Finished in downtown");
}else if (stringInput==="fallafel"){
  console.log("Finished in W6ht");
}

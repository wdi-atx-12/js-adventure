var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');
/*
// a few example inputs (delete these from your completed file)
var booleanInput = yn(prompt('Is this first variable true (y/n)? '));
var integerInput = parseInt(prompt('Enter a whole number: '),10);
var stringInput = prompt('Enter any string: ');

console.log();

// a few example outputs (delete these from your completed file)
console.log('Your boolean = ' + booleanInput + '.');
console.log('Your integer = ' + integerInput + '.');
console.log('Your string  = ' + stringInput + '.');
*/

const WAITRESS_NAMES = ["Lucy", "Emi", "Luisa", "Ruby", "Isalia", "Denise"];

const MEXICAN_ENTREES = [
  {name:"Tacos", price: 3.00},
  {name:"Tortas", price: 4.00},
  {name:"Enchiladas", price: 5.00},
  {name:"Menudo", price: 7.00},
  {name:"Tamales", price: 8.00}];

const MEXICAN_SIDES = [
  {name:"Rice", price: 1.00},
  {name:"Beans", price: 1.00},
  {name:"Salad", price: 2.00}];

const CHINESE_ENTREES = [
  {name:"Comb. Lo Mein", price: 3.00},
  {name:"Jala. Chicken", price: 4.00},
  {name:"Crispy Tofu", price: 5.00},
  {name:"Sesame Beef", price: 7.00},
  {name:"Smoked Duck", price: 8.00}];

const CHINESE_SIDES = [
  {name:"Dumpling", price: 1.00},
  {name:"Egg Roll", price: 1.00},
  {name:"Wonton Soup", price: 2.00}];

const INDIAN_ENTREES = [
  {name:"Kashmiri Salad", price: 3.00},
  {name:"Malai Kofta", price: 4.00},
  {name:"Saag Paneer", price: 5.00},
  {name:"Dal Palak", price: 7.00},
  {name:"Chili Dosa", price: 8.00}];

const INDIAN_SIDES = [
  {name:"Samosa", price: 1.00},
  {name:"Idly", price: 1.00},
  {name:"Spinach Pakora", price: 2.00}];

const DRINKS = [
  {name:"Water", price: 0.00},
  {name:"Tea", price: 1.50},
  {name:"Soda", price: 1.00},
  {name:"Wine", price: 3.00}];

const BAD_EVENTS = [
  "Item was excellent.",
  "Item was great.",
  "Item was good.",
  "Waitress was rude.",
  "Item not served well.",
  "Item was bad.",
  "Item was terrible.",
  "Dirty!!"];

var InitializeRestaurant = function(restaurant, name, entrees, sides,drinks) {
  restaurant.entrees = entrees;
  restaurant.sides = sides;
  restaurant.drinks = drinks;
  restaurant.name = name;
}
var FindRestaurant = function(restaurant) {

  switch(restaurant.foodType = prompt("What type of food do you want to eat? ([M]exican, [C]hinese, [I]ndian, or E[X]it)"))
  {
    case 'M': InitializeRestaurant(restaurant,"Chuy's Mexican Restaurant",
                                    MEXICAN_ENTREES, MEXICAN_SIDES, DRINKS);
        break;
    case 'C': InitializeRestaurant(restaurant,"Szechuan House",
                                    CHINESE_ENTREES, CHINESE_SIDES, DRINKS);
        break;
    case 'I': InitializeRestaurant(restaurant,"Madras Pavilion",
                                    INDIAN_ENTREES, INDIAN_ENTREES, DRINKS);
        break;
    case 'X': console.log("Bye Bye! Have a great night!!"); break;
    default: console.log("Invalid Choice! Try again!!");
    return FindRestaurant(restaurant);
  }
  return restaurant.foodType;
}

var MainActions = function(restaurant, customer) {
  var action = "";
  console.log("What would you like?");
  console.log("[O]rder an item.");
  console.log("[C]heck the status of your order.");
  console.log("[G]et the check.");
  console.log("[T]ry to eat and run.");
  console.log("E[X]it to previous menu.");
  switch(action = prompt(": ").toUpperCase())
  {
  case 'O': customer = OrderItem(restaurant,customer); break;
  case 'C': console.log(PrintCustomerTab(customer.tab)); break;
  case 'G': break;
  case 'T': TryToEatForFree(); break;
  case 'X': break;
  default: return MainActions(restaurant, customer);
  }
return action;
}

var OrderItem = function(restaurant,customer) {
  var action = "";
  console.log(`${restaurant.waitress}: How about another [E]ntree, [S]ide, [D]rink, E[X]it? `);
  switch(action = prompt(": ").toUpperCase())
  {
  case 'E':  OrderMenuItem(customer,restaurant.entrees); break;
  case 'S':  OrderMenuItem(customer,restaurant.sides); break;
  case 'D':  OrderMenuItem(customer,restaurant.drinks); break;
  case 'X': break;
  default: return OrderItem(restaurant,customer);
  }
  return action;
}

var PrintMenu = function(arr) {
  var tmp = "";

  for(var i = 0;i < arr.length-1; i++)
    tmp+= '['+i+'] '+arr[i].name+' ($'+arr[i].price+')'+', ';
  if(i === arr.length-1)
    tmp += '['+i+'] '+arr[i].name+' ($'+arr[i].price+'): ';

  return tmp;
}

var PrintCustomerTab = function(arr){
  var tmp = "";
  var total = 0;
  for(var i = 0;i < arr.length-1; i++){
    tmp+= arr[i].name+'($'+arr[i].price+')'+' + ';
    total += arr[i].price;
    }
  if(i === arr.length-1){
    tmp += arr[i].name+'($'+arr[i].price+') ';
    total += arr[i].price;
    tmp += '= $'+ total;
  }

  return tmp;
}

var PrintStatus = function(restaurant) {
  console.log(restaurant.name+ " Menu: ");
  console.log("- Entrees: "+ PrintMenu(restaurant.entrees));
  console.log("- Sides: "+ PrintMenu(restaurant.sides));
  console.log("- Drinks: "+ PrintMenu(restaurant.drinks));
}

var OrderMenuItem = function(customer,menu) {
  console.log(`${restaurant.waitress}: What would you like to order?`);
  choice = prompt("- "+PrintMenu(menu));
  customer.tab.push(menu[choice]);
}

var TryToEatForFree = function() {
  switch(Math.floor((Math.random() *3)))
  {
    case 0: console.log("HOST: Stop! You have to pay! CALL THE POLICE!! [YOU LOSE]"); break;
    case 1: console.log("HOST: Hello? Are you ready to pay? [YOU'RE PUBLICLY SHAMED]"); break;
    case 2: console.log("HOST: Wait...were is that guy that sat in that table? [YOU WIN]"); break;
  }
}

var SelectWaitress = function(){
  return WAITRESS_NAMES[Math.floor((Math.random() * WAITRESS_NAMES.length))];
}

var MAIN = function() {
   var restaurant = {name:"",waitress:"",entrees:[],sides:[],drinks:[],foodType:""};
   customer = {name:"",budget:0,tab:{}};
    if(FindRestaurant(restaurant) !== 'X')
    {
      console.log(`HOST: Welcome to ${restaurant.name}! The finest restaurant in all of Lonelyville!`);

      //PrintStatus();
      customer.name = prompt("HOST: How would you like to be addressed? ");
      customer.budget = prompt(`HOST: How much do you have to spend at our fine establishment, ${customer.name}? `);

      console.log("HOST: Before we start, I will warn you that our establishment is not perfect, but we try.");

      //prompt("HOST: Are we ready to start?");
      restaurant.waitress = SelectWaitress().toUpperCase();
      console.log(`WAITRESS: Hello ${customer.name}, my name is ${restaurant.waitress}. Thank you for joining us today!`);

    var customer = MainActions(restaurant,customer);
      while(customer.lastAction !=='X')
        console.log(PrintCustomerTab(customer));

    }
}

MAIN();
console.log(restaurant);

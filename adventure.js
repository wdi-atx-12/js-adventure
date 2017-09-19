var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

let restaurants = [
  {
    name: 'Chipotle',
    distance: 0.1,
    category: 'tex-mex'
  },
  {
    name: 'Daruma',
    distance: 0.5,
    category: 'ramen'
  },
  {
    name: 'Gus\'s fried chicken',
    distance: 0.5,
    category: 'fried chicken'
  },
  {
    name: 'P Terry\'s',
    distance: 0,
    category: 'burgers'
  },
  {
    name: 'The Onion',
    distance: 0.1,
    category: 'pizza'
  },
  {
    name: 'Jimmy John\'s',
    distance: 0.0,
    category: 'sandwiches'
  },
  {
    name: 'Royal Blue Grocery',
    distance: 0.0,
    category: 'sandwiches'
  },
  {
    name: 'Chilantro',
    distance: 0.1,
    category: 'tex-mex'
  },
  {
    name: 'Burger Bar',
    distance: 0.3,
    category: 'burgers'
  }
];
let pick_again = false;
while(!pick_again) {
  // a few example inputs (delete these from your completed file)
  let distance_miles = parseFloat(prompt('How far are you willing to walk (miles)? '));

  let close_enough_restaurants = restaurants.filter(rest => rest.distance < distance_miles);

  console.log('The following food categories are within that distance:');
  for (let i = 0; i < close_enough_restaurants.length; i++) {
    console.log(close_enough_restaurants[i].category);
  }

  let remove_category = prompt('Should we remove any you don\'t like? Enter category or "none": ');
  let filtered_restaurants = close_enough_restaurants.filter(rest => rest.category !== remove_category);

  let select_category = prompt('Is there a category you prefer ("" or "none" if not)? ');

  if (select_category && select_category !== 'none') {
    filtered_restaurants = filtered_restaurants.filter(rest => rest.category === select_category)
  }

  let random_restaurant_index = Math.floor(Math.random() * filtered_restaurants.length);
  console.log(`We picked ${filtered_restaurants[random_restaurant_index].name}`)

  pick_again = yn(prompt('Do you like our suggested restaurant (y/n)? '));
}

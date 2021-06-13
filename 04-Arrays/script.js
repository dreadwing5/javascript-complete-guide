'use strict';
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //ES6 object literals
  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '22:00', address }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delecious Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const arr = [2, 3, 4];
// const [x, y, z] = arr;

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];

// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default Values
// const [p = 1, q = 1, r = 1] = [8, 5];
// console.log(p, q, r);
/* 
// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(resturantName, hours, tags);

//Default Value

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Anandpur, Sonepur , Saran',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Anandpur, Sonepur , Saran',
  starterIndex: 2,
});
 */

//////////////////////////////

//  The Spread Operator (...)

/* const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

//Join two arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

//Real World Example

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// restaurant.orderPasta(...ingredients);

//Objects

const newRestaurant = { foundedIn: 1989, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name); */

/* /////////////////////////
//1) Destructuring

//SPREAD , beacuse on the right side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFoods);

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Function

//pack the value
const add = function (...numbers) {
  let sum = 0;
  numbers.map(number => {
    sum += number;
  });
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [3, 54, 9];
//Unpack the value
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'oliver', 'capsicum');

restaurant.orderPizza('mushroom');
 */

/* ///////////////////////////////
//  Short Cricuiting

//Use Any dta type , return ANY data type,
// short - circuiting
console.log('------OR-------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

//Nullish Coalescing Operator
const guest3 = restaurant.numGuests ?? 10;
console.log(guest3);

console.log('-------AND-------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

//Practical example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach'); */

/////////////

/* // The for of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
} */

///////////////
// Optional Chaining

/* if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//With Optional chaining

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Method
console.log(restaurant.order?.(0, 1) ?? `Method doesn't Exist`);

//Arrays
const users = [{ name: 'Jonas', email: 'test123@gmail.com' }];

console.log(users[0]?.name ?? 'User array empty');

//Properties name
const properties = Object.keys(openingHours);
console.log(properties);

let OpenStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  OpenStr += `${day}, `;
}
console.log(OpenStr);

//Properties Values
const values = Object.values(openingHours);

console.log(values);

//Entire Object

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
} */

// ------------------------------------
// -------------Sets--------------------
/* 
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  'Pizza',
]);
console.log(orderSet);
console.log(new Set('Sachin'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');

//orderSet.clear();

console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size); */

// ------------------------------------
// -------------Maps--------------------

/* const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are Close :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 24;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
// rest.set([1, 2], 'Test'); will not work
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

console.log(rest.get(arr)); //undefined

//rest.clear();

const questions = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉 '],
  [false, 'Wrong 😥'],
]);
console.log(questions);

//Convert object to map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz App
// console.log(questions.get('question'));
// for (const [key, value] of questions) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }
// const answer = Number(prompt('Enter your Answer'));
// console.log(questions.get(answer === questions.get('correct')));

//Convert map to an array
console.log([...questions]);
// console.log(questions.entries);
console.log([...questions.keys()]);
console.log([...questions.values()]);
 */
 
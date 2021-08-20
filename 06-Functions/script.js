'use strict';
const bookings = []; /* 
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24367890009,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24367890009) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas); */

/* const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 1;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
 */

/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-roder function
const transformer = function (str, fn) {
  console.log(`Original String : ${str}`);
  console.log(`Transformed String : ${fn(str)}`);
  console.log(`Transformed By : ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👋 ');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
 */
/* 
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

// const greeterHey = greet('hey');
// greeterHey('jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

const greetArr = greeting => {
  return name => {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterHey = greetArr('hey');
greeterHey('jonas');
greeterHey('Steven');

greetArr('Hello')('Jonas'); */

/* const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book; */
//DOES NOT WORK

// const book = lufthansa.book; //Regular function call, this will be undefined

/* //Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');



book.call(swiss, '583', 'Mary Cooper');

//Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData); */

// Imp. The Bind Method
/* 
const bookEW = book.bind(eurowings);
const bookLufthansa = book.bind(lufthansa);
const bookSwiss = book.bind(swiss);
bookEW(23, 'Steven Williams');
bookSwiss(25, 'Mick Wazowski');
bookLufthansa(27, 'Mara');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas');
bookEW23('Maratha');
//With Event Listner

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); */

//Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// //addVat =value=>value+value * 0.23

// console.log(addVAT(100));

// const addTax = function (rate) {
//   return function addVAT(value) {
//     return value + value * rate;
//   };
// };

// const fixRate = addTax(0.23);
// console.log(fixRate(100));

/* //IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23; //Encaptulation
})();

// console.log(isPrivate); 
(() => console.log('This will ALSO never run again'))(); */

// Closures

/* const passengersCount = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} booked`);
  };
};

const book1 = passengersCount();
book1();
book1();

console.dir(book1); */
//Example 1

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 23);
  };
};

/* const h = function () {
  const b = 2;
  f = function () {
    console.log(b * 23);
  };
};
g();
f();
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Wiil start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);
 */

const cb = param => {
  console.log(`The result is ${param}`);
};
const divide = (x, y, callback) => {
  callback(x / y);
  callback(x % y);
};

divide(6, 8, cb);

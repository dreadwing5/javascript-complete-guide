'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName} is ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1991 && birthYear <= 1996) {
//       //Creating new variable with same name as outer scope's variable
//       const firstName = 'Steven'; //It will not perform variable lookup

//       //Reassigning outer variable

//       output = 'New Output';

//       var millenial = true; //ES5 function scopes

//       const str = `Ohh, and you are a millenial,${firstName}`; // block scope
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     console.log(output);

//     // console.log(str); //Reference error

//     // console.log(add(3, 2)); //Without strict mode it will give an error, function are block scoped

//     console.log(millenial);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Jonas'; //global variable
// calcAge(1991);

//Hoisting and TDZ

// console.log(me); //Undefined
// console.log(job); //Initilization err
// console.log(year);

/* var me = 'Jonas';

let job = 'teacher';
const year = 1991;

//Function

console.log(addDel(2, 3)); //No Error
console.log(addExpr); //Undefined
// console.log(addArrow(2, 3)); //Initilization Error

//Function Decleration
function addDel(a, b) {
  return a + b;
}

//Var
var addExpr = function (a, b) {
  return a + b;
};

//Function Expression

const addArrow = (a, b) => a + b;

//Example

if (!numProducts) deleteShopingCart(); //It will still execute
var numProducts = 10;

function deleteShopingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //true since var creates property in window object
console.log(y === window.y);
 */

//This Keyword

/* console.log(this); //window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //Undefined
};
calcAge(1991);

calcAge(1991);
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //Window Object
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calAge: function () {
    console.log(2037 - this.year); //Jonas Object
  },
};

// jonas.calAge();

const matilda = {
  year: 2017,
};

matilda.calAge = jonas.calAge; //method borrowing

matilda.calAge(); //This keyword will now point to matilda object

const f = jonas.calAge;
f(); //err : can't read year of undefined */

// var firstName = 'Matilda';
/* 
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calAge: function () {
    // console.log(this);

    console.log(2037 - this.year); //Jonas Object

    // Solution 1
    // const self = this; //self or that

    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial(); //Regular function

    //Solution 2

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996); //true
    };
    isMillenial(); //Regular function
  },

  greet: () => {
    console.log(`Hey ${this.firstName}!`); //undefined, not to use arrow fun in method
  },
};

// jonas.greet();
jonas.calAge();

//arguments keyword
const addExpr = function (a, b) {
  let sum = 0;
  console.log(arguments); //print an array of arguments
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }
  console.log(sum);

  return a + b;
};

addExpr(3, 4);
addExpr(2, 4, 5, 6); //completely legal */

// Primitives vs Objects
/* 
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(me.age);
console.log(friend.age); */

//Primitive Types

/* let lastName = 'William';

let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference Types

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: '27',
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage :', jessica);
console.log('After Marriage :', marriedJessica);

//Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: '27',
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //New object was created in the heap, shallow copy
jessicaCopy.lastName = 'Davis';

console.log('Before Marriage :', jessica2);
console.log('After Marriage :', jessicaCopy);
jessicaCopy.family.push('John');

console.log('Before Marriage :', jessica2);
console.log('After Marriage :', jessicaCopy); //Both will have same no. of family */

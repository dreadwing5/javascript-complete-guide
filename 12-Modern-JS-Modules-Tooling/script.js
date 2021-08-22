//Importing modules

// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// addToCart("bread", 1);
// console.log(price, tq);

// console.log("Importing module");

//Import everything as namespace
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 1);
// console.log(ShoppingCart.totalPrice);

// default imports, use 1 default import per module
import add, { cart } from "./shoppingCart.js"; //Bad example
add("pizza", 2);
add("bread", 5);
add("apples", 4);

// console.log(cart);

//Replaced by named imports

/* const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 5;

  const addToCart = function (product, quantity) {
    cart.push({
      product,
      quantity,
    });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("bread", 1);
ShoppingCart2.addToCart("pizza", 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); //undefined
// ShoppingCart2.orderStock("bread", 1); */

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import { cloneDeep } from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state); //just referenced is assigned
const stateDeepClone = cloneDeep(state); //shallow copy
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

//this will not cause page reload, i.e state will remain same( login,signup)
if (module.hot) {
  module.hot.accept();
}

console.log(cart.find((item) => item.product === "bread"));

Promise.resolve("hello").then((data) => console.log(data));

import "core-js/stable"; //pollyfill

//Pollyfilling async functions
import "regenerator-runtime/runtime";

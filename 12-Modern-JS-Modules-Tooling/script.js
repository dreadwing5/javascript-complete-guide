//Importing modules

// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// addToCart("bread", 1);
// console.log(price, tq);

console.log("Importing module");

//Import everything as namespace
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 1);
// console.log(ShoppingCart.totalPrice);

//default imports, use 1 default import per module
import add, { cart } from "./shoppingCart.js"; //Bad example
add("pizza", 2);
add("bread", 5);
add("apples", 4);

console.log(cart);

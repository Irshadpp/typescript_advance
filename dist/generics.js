"use strict";
const score = [];
const name2 = [];
function getIdentityOne(val) {
    return val;
}
function getIdentityTwo(val) {
    return val;
}
// function getIdentityThree<Type>(val: Type): Type{
//     return val
// }
function getIdentityThree(val) {
    return val;
}
getIdentityThree('3');
getIdentityThree({ brand: 'Rolex', type: 3432 }); //concept of reusability
function getSearchProducts(products) {
    // some database operation
    const index = 5;
    return products[index];
}
// arrow function example
const getMoreSearchProducts = (products) => {
    // some database operation
    const index = 5;
    return products[index];
};
function anotherFn(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo
    };
}
anotherFn(4, { connection: 'fda', username: 'dfasf', password: 'dfsaf' });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}

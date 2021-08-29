"use strict";

let items = [
    { name: "meat", price: 25 },
    { name: "vegetables", price : 17 } ,
    { name: "cake", price :20 },
    { name: "drinks", price: 38}
];

let priceList = items.map(function(item) {

  return item.price;

});

console.log("Price list after mapping : " + priceList); 

let total = 0;

for (let item of items) {

  total += item.price;

}

console.log("Total cost of items (for loop) : " + total);

let totalReducer = items.reduce((sum, item) => sum + item.price, 0);
console.log("Total cost of items (reducer) : " + totalReducer);   

let expensiveItems = items.filter(item => item.price >= 25);
console.log("The expensive items are: ", expensiveItems);

let costExpensiveItems = expensiveItems.reduce((sum, item) => sum + item.price, 0);
console.log("The total cost of the expensive items: ", costExpensiveItems);

const values = [3, 1, 3, 5, 2, 4, 4, 4];
const setOfValues = new Set(values);
const uniqueValues = [...setOfValues];

console.log("Unique elements of the array : " + uniqueValues);



































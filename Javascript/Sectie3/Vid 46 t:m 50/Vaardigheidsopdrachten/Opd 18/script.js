"use strict";

let arrayOne = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let arrayTwo = [];
for (let i = 0; i < arrayOne.length; i++) {
  arrayTwo[i] = arrayOne[i] * 2;
}

console.log(arrayTwo);

let arrayThree = [];
let arrayFour = [];

for (let i = 0; i < arrayOne.length; i++) {
  if (arrayOne[i] % 2 == 0) {
    arrayThree.push(arrayOne[i]);
  } else {
    arrayFour.push(arrayOne[i]);
  }
}

console.log(arrayThree);
console.log(arrayFour);


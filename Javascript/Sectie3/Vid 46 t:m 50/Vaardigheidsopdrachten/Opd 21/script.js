"use strict";
const arrayOne = [5, 2, 3, 45, 5, 7, "Koe"];
const arrayTwo = [7, "Dier", "tjes", "rt", 12, 5, 6];
const arrayThree = [];

for (let i = 0; i < arrayOne.length; i++) {
  for (let j = 0; j < arrayOne.length; j++) {
    let number = String(arrayOne[i] + String(arrayTwo[j]));
    arrayThree.push(number);
  }
}

console.log(arrayThree);

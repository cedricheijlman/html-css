"use strict";
let images = [
  "tijger1.jpeg",
  "tijger2.jpeg",
  "tijger3.jpeg",
  "tijger4.jpeg",
  "tijger5.jpeg",
  "tijger6.jpeg",
  "tijger7.jpeg",
  "tijger8.jpeg",
  "tijger9.jpeg",
  "tijger10.jpeg",
];

let randomNumber = 0;

console.log(randomNumber);

document.querySelector(".klik").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 10);
  document.querySelector(".foto").src = images[randomNumber];
});

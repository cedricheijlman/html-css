"use strict";

let arrayOne = [];

randomNummersArray();

function randomNummersArray() {
  for (let i = 0; i < 49; i++) {
    arrayOne[i] = Math.floor(Math.random() * 900 + 100);
  }
  console.log(arrayOne);
}

let container = document.querySelector(".container");
let nummers = 0;

document.querySelector(".button").addEventListener("click", function () {
  if (nummers < 49) {
    nummers++;
    let div = document.createElement("div");
    div.classList.add("container__item");
    div.innerHTML = nummers;
    container.appendChild(div);
  }
});

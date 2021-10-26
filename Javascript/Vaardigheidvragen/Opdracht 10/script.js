"use strict";

let arrayOne = [];

// Opdracht 10
let alldivs = document.getElementsByTagName("div");
randomNummersArray();

function randomNummersArray() {
  for (let i = 0; i < 50; i++) {
    arrayOne[i] = Math.floor(Math.random() * 1000 + 1);
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
    div.innerHTML = arrayOne[nummers];
    container.appendChild(div);
    console.log(alldivs);
  }
});

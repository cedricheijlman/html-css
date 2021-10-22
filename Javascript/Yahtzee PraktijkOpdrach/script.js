"use strict";

let images = [
  "dice-one.png",
  "dice-two.png",
  "dice-three.png",
  "dice-four.png",
  "dice-five.png",
  "dice-six.png",
];
let rollKnop = document.querySelector(".btn-Roll");
let playerTurn = 0;
let rounds = 0;
let dicesElement = document.querySelectorAll("img");
let rollsLeft = 3;
let diceHold = [false, false, false, false, false];
let rollsLeftElement = document.querySelector(".rollsLeft");
// Nummers  Dobbelstenen
let numbersDices = [0, 0, 0, 0, 0];

// Als dobbelsteen niet op hold staat nieuwe value - cijfer Wordt Displayed,
// animatie dobbelsteen wordt toegevoegd en afghaald
rollKnop.addEventListener("click", nieuweRoll);

function nieuweRoll() {
  for (let i = 0; i < dicesElement.length; i++) {
    if (diceHold[i] === false && rollsLeft > 0) {
      numbersDices[i] = Math.floor(Math.random() * 6);
      console.log(numbersDices);
      dobbelsteenDisplay(i);
      dobbelsteenAnimatie(i);
    }
  }
  nextDiceRoll();
}

function nextDiceRoll() {
  if (rollsLeft > 0) {
    rollsLeft--;
    rollsLeftElement.textContent = `Rolls left: ${rollsLeft}`;
  }
}

function dobbelsteenDisplay(i) {
  dicesElement[i].src = images[numbersDices[i]];
}

function dobbelsteenAnimatie(i) {
  dicesElement[i].classList.add("animation");

  setTimeout(() => {
    dicesElement[i].classList.remove("animation");
  }, 1000);
}

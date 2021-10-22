"use strict";
let images = [
  "dice-1.png",
  "dice-2.png",
  "dice-3.png",
  "dice-4.png",
  "dice-5.png",
  "dice-6.png",
];

let playerTurn = 0;

function diceRoll(i) {
  dices[i].src = images[numbersDices[i]];
}

const button = document.querySelector(".button");
let aces = [-1, 0];
let twos = [0, 0];
let dices = document.querySelectorAll("img");
let diceHold = [false, false, false, false, false];
let numbersDices = [0, 0, 0, 0, 0];
let rounds = 3;
button.addEventListener("click", function () {
  for (let i = 0; i < dices.length; i++) {
    if (diceHold[i] === false && rounds > 0) {
      numbersDices[i] = Math.floor(Math.random() * 6);
      diceRoll(i);
      dices[i].classList.add("animation");

      setTimeout(() => {
        dices[i].classList.remove("animation");
      }, 1000);
    }
  }
  acesCheck();
  twosCheck();
  rounds--;
  if (rounds >= 0) {
    document.querySelector(
      ".roundsLeft"
    ).textContent = `Rounds left: ${rounds}`;
  }
});

for (let i = 0; i < dices.length; i++) {
  dices[i].addEventListener("click", function () {
    if (rounds < 3 && rounds > 0) {
      if (diceHold[i] === false) {
        diceHold[i] = true;
        dices[i].classList.add("black");
      } else {
        diceHold[i] = false;
        dices[i].classList.remove("black");
      }
    }
  });
}

function acesCheck() {
  if (aces[playerTurn] >= 0) {
    aces[0] = 0;
    for (let i = 0; i < numbersDices.length; i++) {
      if (numbersDices[i] == 0) {
        aces[0] += 1;
        console.log(aces);
      }
    }
  }
}

function twosCheck() {
  if (playerTurn == 0) {
    twos[0] = 0;
    for (let i = 0; i < numbersDices.length; i++) {
      if (numbersDices[i] == 1) {
        twos[0] += 2;
        console.log(twos);
      }
    }
  }
}

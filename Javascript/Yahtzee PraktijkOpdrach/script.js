"use strict";

let images = [
  "dice-one.png",
  "dice-two.png",
  "dice-three.png",
  "dice-four.png",
  "dice-five.png",
  "dice-six.png",
];
let rollKnop = document.querySelector(".btn-roll");
let playerTurn = 0;
let rounds = 1;
let dicesElement = document.querySelectorAll("img");
let rollsLeftElement = document.querySelector(".rollsLeft");
let leftClick = document.querySelectorAll(".leftClick");
let rightClick = document.querySelectorAll(".rightClick");
let rollsLeft = 3;
let diceHold = [false, false, false, false, false];
let spelerEenHighElement = document.querySelector(".speler1");
let spelerTweeHigElement = document.querySelector(".speler2");
let roundsElement = document.querySelector(".roundDisplay");
let numbersDices = [0, 0, 0, 0, 0];
let UpperTotal = [0, 0];
let grandTotal = [0, 0];
let upperTotalElement = document.querySelectorAll(".upperTotal");
let grandTotalElement = document.querySelectorAll(".grandTotal");
// Game Start
holdFunctie();

// Als Roll knop wordt geklikt nieuweRoll Functie Uitvoeren
rollKnop.addEventListener("click", nieuweRoll);

// als 1 van de scores wordt geselecteerd
// leftClick = Speler1 scores
// rightClick = Speler2 scores

for (let i = 0; i < leftClick.length; i++) {
  leftClick[i].addEventListener("click", function () {
    if (
      playerTurn == 0 &&
      rollsLeft < 3 &&
      leftClick[i].classList.contains("checked") == false
    ) {
      leftClick[i].classList.add("checked");
      rollsReset();

      addToGrandTotal(i);
      removeLeftScore();
      highlightSpelerBeurt();
      removeHolds();
      switchPlayer();
    }
  });

  rightClick[i].addEventListener("click", function () {
    if (
      playerTurn == 1 &&
      rollsLeft < 3 &&
      rightClick[i].classList.contains("checked") == false
    ) {
      rightClick[i].classList.add("checked");
      rollsReset();

      addToGrandTotal(i);
      removeRightScore();
      highlightSpelerBeurt();
      removeHolds();
      switchPlayer();
      volgendeRondeDisplay();
    }
  });
}

// functies voor als een van de scores wordt geklikt

function rollsReset() {
  rollsLeft = 3;
  rollsLeftElement.textContent = `Rolls left: ${rollsLeft}`;
}

function removeLeftScore() {
  for (let i = 0; i < leftClick.length; i++) {
    if (leftClick[i].classList.contains("checked") == false) {
      leftClick[i].textContent = "-";
    }
  }
}

function removeRightScore() {
  for (let i = 0; i < rightClick.length; i++) {
    if (rightClick[i].classList.contains("checked") == false) {
      rightClick[i].textContent = "-";
    }
  }
}

function highlightSpelerBeurt() {
  if (playerTurn == 0) {
    spelerEenHighElement.classList.remove("spelerBeurt");
    spelerTweeHigElement.classList.add("spelerBeurt");
  } else {
    spelerEenHighElement.classList.add("spelerBeurt");
    spelerTweeHigElement.classList.remove("spelerBeurt");
  }
}

function removeHolds() {
  for (let i = 0; i < diceHold.length; i++) {
    diceHold[i] = false;
    dicesElement[i].classList.remove("hold");
  }
}

function volgendeRondeDisplay() {
  rounds++;
  roundsElement.textContent = `Ronde: ${rounds}`;
}

function addToGrandTotal(i) {
  if (playerTurn == 0) {
    grandTotal[playerTurn] += Number(leftClick[i].textContent);
    grandTotalElement[playerTurn].textContent = grandTotal[playerTurn];
  } else {
    grandTotal[playerTurn] += Number(rightClick[i].textContent);
    grandTotalElement[playerTurn].textContent = grandTotal[playerTurn];
  }
}

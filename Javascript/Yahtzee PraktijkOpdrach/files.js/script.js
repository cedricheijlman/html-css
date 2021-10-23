"use strict";

let images = [
  "dice-one.png",
  "dice-two.png",
  "dice-three.png",
  "dice-four.png",
  "dice-five.png",
  "dice-six.png",
];
let play = document.querySelector(".play");
let playAgain = document.querySelector(".playAgain");
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
let upperTotal = [0, 0];
let lowerTotal = [0, 0];
let grandTotal = [0, 0];
let upperTotalElement = document.querySelectorAll(".upperTotal");
let lowerTotalElement = document.querySelectorAll(".lowerTotal");
let grandTotalElement = document.querySelectorAll(".grandTotal");
let endScreenBackground = document.querySelector(".endScreen-Background");
let endScreen = document.querySelector(".endScreen");
let beginScreenBackground = document.querySelector(".beginScreen-Background");
let beginScreen = document.querySelector(".beginScreen");
let container = document.querySelector(".container");
let playerEenNaam = document.querySelector(".player1");
let playerTweeNaam = document.querySelector(".player2");
let spelerEen = document.querySelector(".speler1");
let spelerTwee = document.querySelector(".speler2");
// Game Start

gameStart();

// Start Game Functie
function gameStart() {
  holdFunctie();
  rollKnop.addEventListener("click", nieuweRoll);
  document.querySelector(".endGame").addEventListener("click", function () {
    resetGame();
    gameToBegin();
  });
  clickEventsScore();
}

// eind scherm / play again button
playAgain.addEventListener("click", function () {
  endScreenBackground.style.display = "none";
  endScreen.style.display = "none";
  container.style.display = "flex";
});

// begin scherm / play button
play.addEventListener("click", function () {
  spelerEen.textContent = playerEenNaam.value;
  spelerTwee.textContent = playerTweeNaam.value;
  if (spelerEen.textContent == "") {
    spelerEen.textContent = "Speler 1";
  }
  if (spelerTwee.textContent == "") {
    spelerTwee.textContent = "Speler 2";
  }

  beginScreenBackground.style.display = "none";
  beginScreen.style.display = "none";
  document.querySelector(".container").style.display = "flex";
});

// als 1 van de scores wordt geselecteerd events
// leftClick = Speler1 scores rightClick = Speler2 scores
function clickEventsScore() {
  for (let i = 0; i < leftClick.length; i++) {
    leftClick[i].addEventListener("click", function () {
      if (
        playerTurn == 0 &&
        rollsLeft < 3 &&
        leftClick[i].classList.contains("checked") == false
      ) {
        leftClick[i].classList.add("checked");
        rollsReset();

        subTotal(i);
        addToGrandTotal(i);
        bonusCheck();
        removeLeftScore();

        removeHolds();

        switchPlayer();
        highlightSpelerBeurt();
        console.log(grandTotal);
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
        subTotal(i);
        addToGrandTotal(i);
        bonusCheck();
        removeRightScore();

        removeHolds();
        switchPlayer();
        highlightSpelerBeurt();
        volgendeRondeDisplay();
        console.log(grandTotal);

        // Als einde game is - ronde 14 - eindscherm play again button en winnaar - resetgame
        if (rounds == 14) {
          if (grandTotal[0] == grandTotal[1]) {
            console.log("Its a tie");
            document.querySelector(
              ".wintext"
            ).textContent = `Het is gelijkspel! 
            met ${grandTotal[0]} punten`;
            endScreenDisplay();
            resetGame();
          } else if (grandTotal[0] > grandTotal[1]) {
            console.log("Player 1 Won");
            document.querySelector(
              ".wintext"
            ).textContent = `${spelerEen.textContent} wint! 
            met ${grandTotal[0]} punten`;
            endScreenDisplay();
            resetGame();
          } else {
            console.log("Player 2 Won");
            document.querySelector(
              ".wintext"
            ).textContent = `${spelerTwee.textContent} wint! 
             met ${grandTotal[1]} punten`;
            endScreenDisplay();
            resetGame();
          }
        }
      }
    });
  }
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
    spelerEenHighElement.classList.add("spelerBeurt");
    spelerTweeHigElement.classList.remove("spelerBeurt");
  } else {
    spelerEenHighElement.classList.remove("spelerBeurt");
    spelerTweeHigElement.classList.add("spelerBeurt");
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

function subTotal(i) {
  if (playerTurn == 0) {
    if (leftClick[i].classList.contains("subTotalUp")) {
      upperTotal[playerTurn] += Number(leftClick[i].textContent);
      upperTotalElement[playerTurn].textContent = upperTotal[playerTurn];
    } else {
      lowerTotal[playerTurn] += Number(leftClick[i].textContent);
      lowerTotalElement[playerTurn].textContent = lowerTotal[playerTurn];
    }
  } else {
    if (rightClick[i].classList.contains("subTotalUp")) {
      upperTotal[playerTurn] += Number(rightClick[i].textContent);
      upperTotalElement[playerTurn].textContent = upperTotal[playerTurn];
    } else {
      lowerTotal[playerTurn] += Number(rightClick[i].textContent);
      lowerTotalElement[playerTurn].textContent = lowerTotal[playerTurn];
    }
  }
}

// functies voor game reset

function resetGame() {
  playerTurn = 0;
  rondesReset();
  rollsReset();
  aces = [0, 0];
  twos = [0, 0];
  threes = [0, 0];
  fours = [0, 0];
  fives = [0, 0];
  sixes = [0, 0];
  threeOfKind = [0, 0];
  fourOfKind = [0, 0];
  fullHouse = [0, 0];
  smallStraight = [0, 0];
  largeStraight = [0, 0];
  change = [0, 0];
  yahtzee = [0, 0];
  sumOfDices = 0;

  removeHolds();
  removeBonus();
  upperTotal = [0, 0];
  lowerTotal = [0, 0];
  grandTotal = [0, 0];
  numbersDices = [0, 0, 0, 0, 0];
  removeScore();
  highlightSpelerBeurt();
  removeSubAndGrandTotal();
  dobbelsteenDisplayReset();
}

function dobbelsteenDisplayReset() {
  for (let i = 0; i < numbersDices.length; i++) {
    dicesElement[i].src = images[numbersDices[i]];
  }
}

function removeSubAndGrandTotal() {
  for (let i = 0; i < 2; i++) {
    upperTotalElement[i].textContent = upperTotal[i];
    lowerTotalElement[i].textContent = lowerTotal[i];
    grandTotalElement[i].textContent = grandTotal[i];
  }
}

function removeScore() {
  for (let i = 0; i < leftClick.length; i++) {
    leftClick[i].textContent = "-";
    leftClick[i].classList.remove("checked");
    rightClick[i].textContent = "-";
    rightClick[i].classList.remove("checked");
  }
}

function rondesReset() {
  rounds = 1;
  roundsElement.textContent = `Ronde: ${rounds}`;
}

function removeBonus() {
  for (let i = 0; i < bonus.length; i++) {
    bonus[i] = 0;
    bonusElement[i].textContent = "-";
    bonusElement[i].classList.remove("checked");
  }
}

function endScreenDisplay() {
  endScreenBackground.style.display = "flex";
  endScreen.style.display = "flex";
  document.querySelector(".container").style.display = "none";
}
// game screen naar begin screen
function gameToBegin() {
  playerEenNaam.value = "";
  playerTweeNaam.value = "";
  beginScreenBackground.style.display = "flex";
  beginScreen.style.display = "flex";
  container.style.display = "none";
}

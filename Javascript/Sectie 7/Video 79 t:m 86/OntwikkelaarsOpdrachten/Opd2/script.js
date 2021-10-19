"use strict";
let gridNummers = document.querySelectorAll(".grid-item");
let scoreNummers = document.querySelector(".nummerGame");
let nummers = [1, 2, 3, 4, 5, 6, 7, 8];
let totaal = [];
let totaalUser = 0;
let nummerScore;

const randomNumber = function () {
  return Math.trunc(Math.random() * 10 + 1);
};

const randomTotal = function () {
  return Math.trunc(Math.random() * 15 + 10);
};

const gameStart = function () {
  setTimeout(() => {
    scoreNummers.classList.remove("won");
  }, 900);
  totaal = [];
  totaalUser = 0;
  for (let i = 0; i < nummers.length; i++) {
    nummers[i] = randomNumber();
    gridNummers[i].textContent = nummers[i];
  }

  nummerScore = randomTotal();
  scoreNummers.textContent = nummerScore;
};

// selecteren getallen en veranderen met "-" , totaal in array toevoegen
for (let i = 0; i < gridNummers.length; i++) {
  gridNummers[i].addEventListener("click", function () {
    if (gridNummers[i].textContent !== "-") {
      gridNummers[i].textContent = "-";
      totaal.push(nummers[i]);
    }
  });
}

gameStart();

document.querySelector(".doneBtn").addEventListener("click", function () {
  for (let i = 0; i < totaal.length; i++) {
    totaalUser += Number(totaal[i]);
  }
  if (totaalUser == nummerScore) {
    scoreNummers.classList.add("won");
    gameStart();
  } else {
    scoreNummers.classList.add("lost");
    setTimeout(() => {
      scoreNummers.classList.remove("lost");
    }, 900);
    gameStart();
  }
});

document.querySelector(".cannot").addEventListener("click", function () {
  gameStart();
});

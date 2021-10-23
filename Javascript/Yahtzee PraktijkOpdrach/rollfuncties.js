// Als dobbelsteen niet op hold staat nieuwe cijfer dobbelsteen - cijfer Wordt Displayed,
// animatie dobbelsteen wordt toegevoegd en afghaald
// nextDiceRoll = RollNummer - 1.
// als rollNummer 0 is niet meer kunnen dobbelen en keuze moeten maken uit punten
function nieuweRoll() {
  for (let i = 0; i < dicesElement.length; i++) {
    if (diceHold[i] === false && rollsLeft > 0) {
      numbersDices[i] = Math.floor(Math.random() * 6); // random getal

      dobbelsteenDisplay(i);
      dobbelsteenAnimatie(i);
    }
  }
  nextDiceRoll();
  scoreChecker();
}

// Hold functie
// Als dobbelsteen nog niet op hold staat add class anders verwijder class
function holdFunctie() {
  for (let i = 0; i < dicesElement.length; i++) {
    dicesElement[i].addEventListener("click", function () {
      if (rollsLeft < 3 && rollsLeft > 0) {
        if (diceHold[i] == false) {
          dicesElement[i].classList.add("hold");
          diceHold[i] = true;
        } else {
          dicesElement[i].classList.remove("hold");
          diceHold[i] = false;
        }
      }
    });
  }
}

// volgende roll display; rollnummer - 1;
function nextDiceRoll() {
  if (rollsLeft > 0) {
    rollsLeft--;
    rollsLeftElement.textContent = `Rolls left: ${rollsLeft}`;
  }
}

// dobbelsteen display
function dobbelsteenDisplay(i) {
  dicesElement[i].src = images[numbersDices[i]];
}

// voegt dobbel animatie
function dobbelsteenAnimatie(i) {
  dicesElement[i].classList.add("animation");

  setTimeout(() => {
    dicesElement[i].classList.remove("animation");
  }, 1000);
}

// checkt scores
function scoreChecker() {
  acesCheck();
  twosCheck();
  threesCheck();
  foursCheck();
  fivesCheck();
  sixesCheck();
  threeOfKindCheck();
  fourOfKindCheck();
  fullHouseCheck();
  changeCheck();
  yahtzeeCheck();
  largeStraightCheck();
  smallStraightCheck();
}

// switch player
function switchPlayer() {
  if (playerTurn == 0) {
    playerTurn = 1;
  } else {
    playerTurn = 0;
  }
}

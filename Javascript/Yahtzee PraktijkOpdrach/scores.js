let acesElement = document.querySelectorAll(".ones");
let aces = [0, 0];
let twosElement = document.querySelectorAll(".twos");
let twos = [0, 0];
let threesElement = document.querySelectorAll(".threes");
let threes = [0, 0];
let foursElement = document.querySelectorAll(".fours");
let fours = [0, 0];
let fivesElement = document.querySelectorAll(".fives");
let fives = [0, 0];
let sixesElement = document.querySelectorAll(".sixes");
let sixes = [0, 0];
let threeOfKindElement = document.querySelectorAll(".threeKind");
let threeOfKind = [0, 0];

let bonus = [0, 0];
let upperTotal = [0, 0];

function acesCheck() {
  if (acesElement[playerTurn].classList.contains("checked") == false) {
    aces[playerTurn] = 0;
    for (let i = 0; i < dicesElement.length; i++) {
      if (numbersDices[i] == 0) {
        aces[playerTurn] += 1;
      }
    }
    acesElement[playerTurn].textContent = aces[playerTurn];
  }
}

function twosCheck() {
  if (twosElement[playerTurn].classList.contains("checked") == false) {
    twos[playerTurn] = 0;
    for (let i = 0; i < dicesElement.length; i++) {
      if (numbersDices[i] == 1) {
        twos[playerTurn] += 2;
      }
    }
    twosElement[playerTurn].textContent = twos[playerTurn];
  }
}

function threesCheck() {
  if (threesElement[playerTurn].classList.contains("checked") == false) {
    threes[playerTurn] = 0;
    for (let i = 0; i < dicesElement.length; i++) {
      if (numbersDices[i] == 2) {
        threes[playerTurn] += 3;
      }
    }
    threesElement[playerTurn].textContent = threes[playerTurn];
  }
}

function foursCheck() {
  if (foursElement[playerTurn].classList.contains("checked") == false) {
    fours[playerTurn] = 0;
    for (let i = 0; i < dicesElement.length; i++) {
      if (numbersDices[i] == 3) {
        fours[playerTurn] += 4;
      }
    }
    foursElement[playerTurn].textContent = fours[playerTurn];
  }
}

function fivesCheck() {
  if (fivesElement[playerTurn].classList.contains("checked") == false) {
    fives[playerTurn] = 0;
    for (let i = 0; i < dicesElement.length; i++) {
      if (numbersDices[i] == 4) {
        fives[playerTurn] += 5;
      }
    }
    fivesElement[playerTurn].textContent = fives[playerTurn];
  }
}

function sixesCheck() {
  if (sixesElement[playerTurn].classList.contains("checked") == false) {
    sixes[playerTurn] = 0;
    for (let i = 0; i < dicesElement.length; i++) {
      if (numbersDices[i] == 5) {
        sixes[playerTurn] += 6;
      }
    }
    sixesElement[playerTurn].textContent = sixes[playerTurn];
  }
}

// [0,1,0,0,5]

function threeOfKindCheck() {
  if (threeOfKindElement[playerTurn].classList.contains("checked") == false) {
    threeOfKind[playerTurn] = 0;
    let threeOfKindYes = false;
    for (let i = 0; i < dicesElement.length; i++) {
      let three = 0;
      for (let k = 0; i < dicesElement.length; i++) {
        numbersDices[i] == numbersDices[k];
        three++;
      }
      if (three == 3) {
        threeOfKindYes = true;
      }
    }
    if (threeOfKindYes == true) {
      for (let i = 0; i < numbersDices.length; i++) {
        threeOfKind[playerTurn] += numbersDices[i];
      }
      threeOfKindElement[playerTurn].textContent = threeOfKind[playerTurn];
    }
  }
}

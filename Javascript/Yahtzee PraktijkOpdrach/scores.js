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
let fourOfKindElement = document.querySelectorAll(".fourKind");
let fourOfKind = [0, 0];
let fullHouseElement = document.querySelectorAll(".fullHouse");
let fullHouse = [0, 0];
let smallStraightElement = document.querySelectorAll(".smallStraight");
let smallStraight = [0, 0];
let largeStraightElement = document.querySelectorAll(".largeStraight");
let largeStraight = [0, 0];
let changeElement = document.querySelectorAll(".change");
let change = [0, 0];
let yahtzeeElement = document.querySelectorAll(".yahtzee");
let yahtzee = [0, 0];

let sumOfDices = 0;
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

function threeOfKindCheck() {
  if (threeOfKindElement[playerTurn].classList.contains("checked") == false) {
    threeOfKind[playerTurn] = 0;
    sumOfDices = 0;

    let threeOfKindYes = false;
    let three = 0;
    for (let i = 0; i < dicesElement.length; i++) {
      three = 0;

      for (let k = 0; k < dicesElement.length; k++) {
        if (numbersDices[i] == numbersDices[k]) {
          three++;
        }
      }
      if (three == 3) {
        threeOfKindYes = true;
      }
    }
    if (threeOfKindYes == true) {
      sumOfAllDices();
      threeOfKind[playerTurn] = sumOfDices;
      threeOfKindElement[playerTurn].textContent = threeOfKind[playerTurn];
    } else {
      threeOfKindElement[playerTurn].textContent = threeOfKind[playerTurn];
    }
  }
}

function fourOfKindCheck() {
  if (fourOfKindElement[playerTurn].classList.contains("checked") == false) {
    fourOfKind[playerTurn] = 0;
    sumOfDices = 0;

    let fourOfKindYes = false;
    let four = 0;
    for (let i = 0; i < dicesElement.length; i++) {
      four = 0;

      for (let k = 0; k < dicesElement.length; k++) {
        if (numbersDices[i] == numbersDices[k]) {
          four++;
        }
      }
      if (four == 4) {
        fourOfKindYes = true;
      }
    }
    if (fourOfKindYes == true) {
      sumOfAllDices();
      fourOfKind[playerTurn] = sumOfDices;
      fourOfKindElement[playerTurn].textContent = fourOfKind[playerTurn];
    } else {
      fourOfKindElement[playerTurn].textContent = fourOfKind[playerTurn];
    }
  }
}

function fullHouseCheck() {
  if (fullHouseElement[playerTurn].classList.contains("checked") == false) {
    fullHouse[playerTurn] = 0;
    let threeOfKindYes = false;
    let twoOfKindYes = false;
    let two = 0;
    let three = 0;

    for (let i = 0; i < dicesElement.length; i++) {
      three = 0;
      two = 0;
      for (let k = 0; k < dicesElement.length; k++) {
        if (numbersDices[i] == numbersDices[k]) {
          three++;
        }
      }
      if (three == 3) {
        threeOfKindYes = true;
      }

      for (let b = 0; b < dicesElement.length; b++) {
        if (numbersDices[i] == numbersDices[b]) {
          two++;
        }
      }
      if (two == 2) {
        twoOfKindYes = true;
      }
    }

    if (threeOfKindYes == true && twoOfKindYes == true) {
      fullHouse[playerTurn] = 25;
      fullHouseElement[playerTurn].textContent = fullHouse[playerTurn];
    } else {
      fullHouseElement[playerTurn].textContent = fullHouse[playerTurn];
    }
  }
}

function changeCheck() {
  if (changeElement[playerTurn].classList.contains("checked") == false) {
    sumOfDices = 0;
    sumOfAllDices();
    change[playerTurn] = sumOfDices;
    changeElement[playerTurn].textContent = change[playerTurn];
  }
}

function yahtzeeCheck() {
  if (yahtzeeElement[playerTurn].classList.contains("checked") == false) {
    let yahtzeeYes = false;
    let sameDice = 0;
    for (let i = 0; i < numbersDices.length; i++) {
      sameDice = 0;
      for (let k = 0; k < numbersDices.length; k++) {
        if (numbersDices[i] == numbersDices[k]) {
          sameDice++;
        }
      }
      if (sameDice == 5) {
        yahtzeeYes = true;
      }
    }

    if (yahtzeeYes == true) {
      yahtzee[playerTurn] = 50;
      yahtzeeElement[playerTurn].textContent = yahtzee[playerTurn];
    } else {
      yahtzeeElement[playerTurn].textContent = yahtzee[playerTurn];
    }
  }
}

function largeStraightCheck() {
  if (largeStraightElement[playerTurn].classList.contains("checked") == false) {
    let sortArray = [];
    for (let i = 0; i < numbersDices.length; i++) {
      sortArray[i] = numbersDices[i];
    }
    sortArray.sort(function (a, b) {
      return a - b;
    });

    if (
      (sortArray[0] == 0 &&
        sortArray[1] == 1 &&
        sortArray[2] == 2 &&
        sortArray[3] == 3 &&
        sortArray[4] == 4) ||
      (sortArray[0] == 1 &&
        sortArray[1] == 2 &&
        sortArray[2] == 3 &&
        sortArray[3] == 4 &&
        sortArray[4] == 5)
    ) {
      largeStraight[playerTurn] = 40;
      largeStraightElement[playerTurn].textContent = largeStraight[playerTurn];
    } else {
      largeStraightElement[playerTurn].textContent = largeStraight[playerTurn];
    }
  }
}

function sumOfAllDices() {
  for (let b = 0; b < numbersDices.length; b++) {
    if (numbersDices[b] == 0) {
      sumOfDices += 1;
    } else if (numbersDices[b] == 1) {
      sumOfDices += 2;
    } else if (numbersDices[b] == 2) {
      sumOfDices += 3;
    } else if (numbersDices[b] == 3) {
      sumOfDices += 4;
    } else if (numbersDices[b] == 4) {
      sumOfDices += 5;
    } else {
      sumOfDices += 6;
    }
  }
}

// 0 1 2 3
// 1 2 3 4
// 2 3 4 5

function smallStraightCheck() {
  if (smallStraightElement[playerTurn].classList.contains("checked") == false) {
    smallStraight[playerTurn] = 0;
    let eenCheck = numbersDices.includes(0);
    let tweeCheck = numbersDices.includes(1);
    let drieCheck = numbersDices.includes(2);
    let vierCheck = numbersDices.includes(3);
    let vijfCheck = numbersDices.includes(4);
    let zesCheck = numbersDices.includes(5);

    if (
      (eenCheck == true &&
        tweeCheck == true &&
        drieCheck == true &&
        vierCheck == true) ||
      (tweeCheck == true &&
        drieCheck == true &&
        vierCheck == true &&
        vijfCheck == true) ||
      (drieCheck == true &&
        vierCheck == true &&
        vijfCheck == true &&
        zesCheck == true)
    ) {
      smallStraight[playerTurn] = 30;
      smallStraightElement[playerTurn].textContent = smallStraight[playerTurn];
    } else {
      smallStraightElement[playerTurn].textContent = smallStraight[playerTurn];
    }
  }
}

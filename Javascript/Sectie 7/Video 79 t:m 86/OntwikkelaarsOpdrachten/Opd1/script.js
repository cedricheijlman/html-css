"use strict";

let scoreElement = document.querySelector(".scores");
let nummer1Element = document.querySelector(".nummer1");
let nummer2Element = document.querySelector(".nummer2");
let somElement = document.querySelector(".som");
let inputElement = document.querySelector(".antwoord");

let score = 0;

let nummer1, nummer2, som, userAnswer, answer;
let wrongAnswers = 0;

const plus = function () {
  answer = nummer1 + nummer2;
  return answer;
};

const min = function () {
  answer = nummer1 - nummer2;
  return answer;
};

const keer = function () {
  answer = nummer1 * nummer2;
  return answer;
};

const gedeeld = function () {
  answer = nummer1 / nummer2;
  return answer;
};

const gameStart = function () {
  scoreElement.textContent = score;

  som = Math.trunc(Math.random() * 4);

  if (som == 0) {
    nummer1 = Math.trunc(Math.random() * 100 + 1);
    nummer2 = Math.trunc(Math.random() * 100 + 1);
    nummer1Element.textContent = nummer1;
    nummer2Element.textContent = nummer2;
    somElement.textContent = "+";
    answer = plus();
  } else if (som == 1) {
    nummer1 = Math.trunc(Math.random() * 100 + 1);
    nummer2 = Math.trunc(Math.random() * nummer1 + 1);
    nummer1Element.textContent = nummer1;
    nummer2Element.textContent = nummer2;
    somElement.textContent = "-";
    answer = min();
  } else if (som == 2) {
    nummer1 = Math.trunc(Math.random() * 10 + 1);
    nummer2 = Math.trunc(Math.random() * 10 + 1);
    nummer1Element.textContent = nummer1;
    nummer2Element.textContent = nummer2;
    somElement.textContent = "*";
    answer = keer();
  } else {
    nummer1 = Math.trunc(Math.random() * 10 + 1);
    nummer2 = Math.trunc(Math.random() * 3 + 1);
    nummer1Element.textContent = nummer1;
    nummer2Element.textContent = nummer2;
    somElement.textContent = "/";
    answer = Math.round(gedeeld() * 10) / 10;
  }
};

gameStart();

const antwoordCheck = function () {
  userAnswer = Number(document.querySelector(".antwoord").value);
  if (userAnswer !== answer) {
    inputElement.classList.add("animationFout");
    wrongAnswers++;
    setTimeout(function () {
      inputElement.classList.remove("animationFout");
    }, 1000);
    inputElement.addEventListener("click", function () {
      inputElement.classList.remove("animationFout");
    });
  } else {
    if (score < 10) {
      inputElement.classList.add("animation");
      score++;

      scoreElement.textContent = score;
      inputElement.value = "";
      inputElement.classList.remove("animationFout");
      setTimeout(function () {
        inputElement.classList.remove("animation");
      }, 700);
      gameStart();
    } else {
      document.querySelector(".modalOverlay").classList.toggle("hidden");
      score++;
      scoreElement.textContent = score;

      document.querySelector(".fout").textContent = `- ${wrongAnswers} ${
        wrongAnswers === 1 ? "vraag fout beantwoord" : "vragen fout beantwoord"
      } `;
    }
  }
};

document.querySelector(".btn").addEventListener("click", antwoordCheck);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (score < 11) {
      antwoordCheck();
    }
  }
});

document.querySelector(".modalbtn").addEventListener("click", function () {
  score = 0;
  wrongAnswers = 0;
  document.querySelector(".modalOverlay").classList.add("hidden");
  inputElement.value = "";
  gameStart();
});

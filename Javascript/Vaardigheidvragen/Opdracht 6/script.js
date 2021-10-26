"use strict";

let container = document.querySelector(".container");
let nummers = 0;
document.querySelector(".button").addEventListener("click", function () {
  if (nummers < 49) {
    nummers++;
    let div = document.createElement("div");
    div.classList.add("container__item");
    div.innerHTML = nummers;
    container.appendChild(div);
  }
});

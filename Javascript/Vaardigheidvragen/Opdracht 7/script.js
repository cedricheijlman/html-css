"use strict";

let container = document.querySelector(".container");
let nummers = 0;
document.querySelector(".button").addEventListener("click", function () {
  if (nummers < 49) {
    for (let i = 0; i < 50; i++) {
      nummers = 49;
      let div = document.createElement("div");
      div.classList.add("container__item");
      div.innerHTML = i;
      container.appendChild(div);
    }
  }
});

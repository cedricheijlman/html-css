"use strict";

const itemA = document.querySelector(".item-a");

document.querySelector(".item-a").addEventListener("click", function () {
  document.querySelector(".item-a").classList.add("pink");
  itemA.style.width = itemA.clientWidth * 2;
});

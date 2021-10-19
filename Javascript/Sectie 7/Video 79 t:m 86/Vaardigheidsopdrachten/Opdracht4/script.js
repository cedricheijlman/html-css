"use strict";

let gridItems = document.querySelectorAll(".grid-item");

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("click", function () {
    console.log(gridItems[i].textContent);
  });
}

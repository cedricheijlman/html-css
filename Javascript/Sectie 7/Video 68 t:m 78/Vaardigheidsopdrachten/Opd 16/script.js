"use strict";
let dear = 1;
let newDear = 0;
document.querySelector(".box-1").addEventListener("click", function () {
  newDear = newDear + dear * dear;
  document.querySelector(".box-2").textContent = newDear;
  dear++;
});

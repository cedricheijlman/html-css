"use strict";

const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const item4 = document.querySelector(".item-4");
const item5 = document.querySelector(".item-5");
const item6 = document.querySelector(".item-6");
const item7 = document.querySelector(".item-7");
const allItems = document.querySelectorAll(".grid-container-item");
item1.style.backgroundColor = "Red";
item2.style.backgroundColor = "Blue";
item3.style.backgroundColor = "Green";
item4.style.backgroundColor = "Purple";
item5.style.backgroundColor = "Brown";
item6.style.backgroundColor = "Pink";
item7.style.backgroundColor = "Yellow";

console.log(allItems);
for (let i = 0; i < allItems.length; i++) {
  allItems[i].style.padding = "20px";
  allItems[i].style.textAlign = "Center";
  allItems[i].textContent = "Konijntjes";
}

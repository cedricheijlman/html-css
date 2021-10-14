"use strict";
const birthYears = [1988, 1982, 1988, 1988, 1922, 1990, 2000, 2020, 2033, 2001];

for (let i = 0; i < birthYears.length; i++) {
  let today = new Date();
  let years = today.getFullYear();
  let totalYear = years - birthYears[i];
  if (totalYear < 0) {
    console.log("Kan niet");
  } else {
    console.log(totalYear);
  }
}

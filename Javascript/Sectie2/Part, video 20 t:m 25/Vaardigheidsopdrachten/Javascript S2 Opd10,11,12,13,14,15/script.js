// Opdracht 10

const sofieEen = 9.4;
const sofieTwee = 3.8;
const sofieDrie = 2.7;
const sofieVier = 6.7;
const sofieVijf = 8.9;

const gemiddeldeCijferSofie =
  (sofieEen + sofieTwee + sofieDrie + sofieVier + sofieVijf) / 5;
console.log("Opdracht 10:", gemiddeldeCijferSofie);

// Opdracht 11
const sofieZes = 8.9;
const nieuwGemiddeldeCijferSofie =
  (sofieEen + sofieTwee + sofieDrie + sofieVier + sofieVijf + sofieZes) / 6;
console.log("Opdracht 11:", nieuwGemiddeldeCijferSofie);

// Opdracht 12
const sarahEen = 7.7;
const sarahTwee = 7.6;
const sarahDrie = 7.3;
const sarahVier = 5.8;
const sarahVijf = 6.9;

const gemiddeldeCijferSarah =
  (sarahEen + sarahTwee + sarahDrie + sarahVier + sarahVijf) / 5;
console.log("Opdracht 12:", gemiddeldeCijferSarah);

// Opdracht 13
if (sofieEen > sarahEen) {
  console.log("Opdracht 13: Sofie", sofieEen);
} else {
  console.log("Opdracht 13: Sarah", sarahEen);
}

// Opdracht 14
if (gemiddeldeCijferSarah > gemiddeldeCijferSofie) {
  console.log("Opdracht 14: Sarah", gemiddeldeCijferSarah);
} else {
  console.log("Opdracht 14: Sofie", gemiddeldeCijferSofie);
}

// Opdracht 15
if (
  gemiddeldeCijferSarah > gemiddeldeCijferSofie &&
  gemiddeldeCijferSarah > 7
) {
  console.log("Opdracht 15: Sarah", gemiddeldeCijferSarah);
  console.log("Goed Gedaan hoger dan een 7!");
} else if (gemiddeldeCijferSarah > gemiddeldeCijferSofie) {
  console.log("Opdracht 15: Sarah", gemiddeldeCijferSarah);
} else {
  console.log("Opdracht 15: Sofie", gemiddeldeCijferSofie);
}

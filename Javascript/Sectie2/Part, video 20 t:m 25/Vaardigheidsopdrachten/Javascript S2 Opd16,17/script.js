// Opdracht 16

const volgtStudie = true;
const leeftijd = 18;

if (leeftijd >= 18 && volgtStudie === true) {
  console.log("Opdracht 16: Whieee stufi!");
} else {
  console.log("Opdracht 16: Helaas geen studiefinanciering =(");
}

// Opdracht 17

const primaireVerzorgers = false;

if (primaireVerzorgers === true && leeftijd >= 18 && volgtStudie === true) {
  console.log("Opdracht 17: Whieee stufi!");
} else if (leeftijd >= 18 && volgtStudie === true) {
  console.log("Opdracht 17: Whieee veel stufi");
} else {
  console.log("Opdracht 17: Helaas geen studiefinanciering =(");
}

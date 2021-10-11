const regen = true;
const zon = false;
const dag = "Maandag";

// Opdracht 6
if (regen === true) {
  console.log("Opdracht 6: Ik neem een paraplu mee naar buiten.");
}

// Opdracht 7

if (regen === true) {
  console.log("Opdracht 7: Ik neem een paraplu mee naar buiten.");
} else if (zon === true) {
  console.log("Opdracht 7: Ik neem mijn zonnebril mee naar buiten");
} else {
  console.log("Ik neem mijn goede humeur mee naar buiten");
}

// Opdracht 8
if (regen === true) {
  console.log("Opdracht 8: Ik neem mijn paraplu mee naar buiten.");
} else if (zon === true) {
  console.log("Opdracht 8: Ik neem mijn zonnebril mee.");
}

// Opdracht 9
if (dag === "Maandag" || dag === "Dinsdag") {
  console.log("Opdracht 9: Ik ga kickboksen.");
} else if (dag === "Donderdag" || dag === "Vrijdag") {
  console.log("Opdracht 9: Ik ga BJJ'en. ");
} else {
  console.log("Opdracht 9: Ik ga patat halen thuis opeten.");
}

function functieNegen() {
  const result = "Ik ben een koe";
  return result;
}

const result = functieNegen();
console.log(result);

function functieNegenA(dier) {
  const result = `Ik ben een ${dier}`;
  return result;
}

const resultTwee = functieNegenA("Kip");
console.log(resultTwee);

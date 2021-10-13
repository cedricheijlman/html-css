function Functieleeftijd(jaar) {
  if (jaar > 10) {
    return true;
  } else {
    return false;
  }
}

function functieVoorOpleiding(opleiding) {
  if (opleiding === "vwo" || opleiding === "vmbo" || opleiding === "havo") {
    return true;
  } else {
    return false;
  }
}

function magStuderen(leeftijd, vooropleiding) {
  const voorwaardeEen = Functieleeftijd(leeftijd);
  const voorwaardeTwee = functieVoorOpleiding(vooropleiding);

  if (voorwaardeEen === true && voorwaardeTwee) {
    return true;
  } else {
    return false;
  }
}

const result = magStuderen(18, "vwo");
console.log(result);

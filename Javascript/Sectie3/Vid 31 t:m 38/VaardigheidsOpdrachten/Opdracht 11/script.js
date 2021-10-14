function numberEenBereken(nummerEen) {
  const result = nummerEen * 3;
  return result;
}

function numberTweeBereken(nummerTwee) {
  const result = nummerTwee * 4;
  return result;
}

function doMath(x, y) {
  const numberOne = numberEenBereken(x);
  const numberTwo = numberTweeBereken(y);
  return numberOne + numberTwo;
}

const result = doMath(50, 20);
console.log(result);

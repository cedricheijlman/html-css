let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let sum = 0;

for (i = 0; i <= arrayOne.length - 1; i++) {
  console.log(arrayOne[i]);
  sum = sum + i;
}

console.log(sum);

if (sum < 100) {
  sum = sum * 2;
  console.log(sum);
}

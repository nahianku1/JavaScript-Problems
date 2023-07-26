//Problem 2:

function sumOfPositiveNum(array) {
  let sum = 0;
  for (const num of array) {
    if (num >= 0) {
      sum += num;
    }
  }
  return sum;
}

let result = sumOfPositiveNum([2, -5, 10, -3, 7]);
console.log(result);

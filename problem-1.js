// Probloem 1:

function reversedString(str) {
  let reversedString = "";
  for (let index = str.length - 1; index >= 0; index--) {
    reversedString += str[index];
  }
  return reversedString;
}

let reversed = reversedString("hello world");
console.log(reversed);














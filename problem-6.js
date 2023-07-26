//Problem: 6

function generatePassword(length) {
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    let stringpervariants = Math.floor(length / 4);
  
    let uppercase = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let lowercase = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const specialCharacters = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "+",
      "=",
      "[",
      "]",
      "{",
      "}",
      "|",
      ";",
      ":",
      ",",
      ".",
      "<",
      ">",
      "/",
      "?",
      "`",
      "~",
      "'",
      '"',
    ];
    let i = 0;
    let password = [];
    while (i < stringpervariants) {
      password.push(uppercase[getRndInteger(0, uppercase.length - 1)]);
      password.push(lowercase[getRndInteger(0, lowercase.length - 1)]);
      password.push(
        specialCharacters[getRndInteger(0, specialCharacters.length - 1)]
      );
  
      i++;
    }
    let numlen = length - password.length;
    let j = 0;
    while (j < numlen) {
      password.push(getRndInteger(1, 9));
      j++;
    }
    return password.join("");
  }
  
  console.log(generatePassword(10));
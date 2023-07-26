//Problem 7:

function romanToInt(romanNumeral) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
    let perval = 0;
    for (let index = romanNumeral.length - 1; index >= 0; index--) {
      const currentchar = romanNumeral[index];
      let currentval = romanNumerals[currentchar];
      if (currentval >= perval) {
        result += currentval;
      } else {
        result -= currentval;
      }
      perval = currentval;
    }
    return result;
  }
  
  console.log(romanToInt("XC"));
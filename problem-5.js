//Problem: 5

function calculator(num1, num2, operator) {
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
    if (operator === "/") return num1 / num2;
  }
  
  console.log(calculator(5, 2, "+"));
let currentInput = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

// Handle number buttons
document.querySelectorAll(".number").forEach((button) => {
  button.addEventListener("click", function (e) {
    currentInput += e.target.value;
    document.getElementById("display").innerText = currentInput;
  });
});

// Handle operator buttons
document.querySelectorAll(".operator").forEach((button) => {
  button.addEventListener("click", function (e) {
    if (firstNumber === "") {
      firstNumber = currentInput;
      currentInput = "";
      document.getElementById("display").innerText = firstNumber;
    }
    operator = e.target.value;
  });
});

// Handle equals button
document.getElementById("equals").addEventListener("click", function () {
  if (firstNumber && currentInput && operator) {
    secondNumber = currentInput;
    let result = operate(
      operator,
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );
    document.getElementById("display").innerText = result;
    firstNumber = result;
    currentInput = "";
  }
});

// Handle clear button
document.getElementById("clear").addEventListener("click", function () {
  firstNumber = "";
  secondNumber = "";
  currentInput = "";
  operator = "";
  document.getElementById("display").innerText = "0";
});

// Handle backspace button
document.getElementById("backspace").addEventListener("click", function () {
  currentInput = currentInput.slice(0, -1);
  document.getElementById("display").innerText = currentInput || "0";
});

// Handle decimal button
document.getElementById("decimal").addEventListener("click", function () {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    document.getElementById("display").innerText = currentInput;
  }
});

// Operate function
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Cannot divide by zero!";
      }
      return a / b;
    default:
      return "Invalid operator";
  }
}

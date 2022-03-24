function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operand) {
    switch (operand) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1. num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

const calculator = document.querySelector(".calculator")
const display = document.querySelector("#display")

calculator.addEventListener('click', function(e){
    if (e.target.className === 'number') {
        display.textContent = e.target.textContent;
    }
})

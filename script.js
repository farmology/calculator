function add(a, b) {
    return +a + +b;
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

function operate(calculationArray) {
    switch (calculationArray[1]) {
        case '+':
            display.innerText = add(calculationArray[0], calculationArray[2]);
            break;
        case '-':
            display.innerText = subtract(calculationArray[0], calculationArray[2]);
            break;
        case '*':
            display.innerText = multiply(calculationArray[0], calculationArray[2]);
            break;
        case '/':
            if (calculationArray[2] === "0" || calculationArray.includes("fuck off")) {
                display.innerText = "fuck off"
            } else {
                display.innerText = divide(calculationArray[0], calculationArray[2]);
            break;
        } 
    }
}

const calculationArray = ["", "", ""];

function clearDisplay(){
    display.innerText = "";
    calculationArray[0] = "";
    calculationArray[1] = "";
    calculationArray[2] = "";
}

const calculator = document.querySelector(".calculator")
const display = document.querySelector("#display")
const clear = document.querySelector("#clear")
const operator = document.querySelector(".operator")

calculator.addEventListener('click', function(e){
    if (e.target.className === 'number') {
        if (calculationArray[2] === "") {
            if (display.innerText.length < 10) {
                display.innerText += e.target.innerText;
                display.innerText = +display.innerText;
        }
    }   else {
            display.innerText = e.target.innerText;
            calculationArray[0] = calculationArray[2];
            calculationArray[2] = "";
    }
}})


calculator.addEventListener('click', function(e){
    if (e.target.className === 'operator') {
        if (calculationArray[0] === ""){
            calculationArray[2] = display.innerText;
            calculationArray[1] = e.target.innerText;
        } else {
            calculationArray[2] = display.innerText;
            operate(calculationArray);
            calculationArray[2] = display.innerText;
            calculationArray[1] = e.target.innerText;
            calculationArray[0] = "";
   
        }
    }
console.log(calculationArray);
})

clear.addEventListener('click', clearDisplay)


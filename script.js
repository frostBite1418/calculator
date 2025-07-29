const display = document.querySelector(".display");

// buttons for digits
const buttonZero = document.querySelector(".zero");
const buttonOne = document.querySelector(".one");
const buttonTwo = document.querySelector(".two");
const buttonThree = document.querySelector(".three");
const buttonFour = document.querySelector(".four");
const buttonFive = document.querySelector(".five");
const buttonSix = document.querySelector(".six");
const buttonSeven = document.querySelector(".seven");
const buttonEight = document.querySelector(".eight");
const buttonNine = document.querySelector(".nine");

// Number and operator variables
let num1;
let num2;
let operator;
let displayNumber = "";

// update display when button is clicked
buttonZero.addEventListener("click", () => {
    displayNumber += "0";
    display.textContent += "0";

})

buttonOne.addEventListener("click", () => {
    displayNumber += "1";
    display.textContent += "1";

})

buttonTwo.addEventListener("click", () => {
    displayNumber += "2";
    display.textContent += "2";

})

buttonThree.addEventListener("click", () => {
    displayNumber += "3";
    display.textContent += "3";

})

buttonFour.addEventListener("click", () => {
    displayNumber += "4";
    display.textContent += "4";

})

buttonFive.addEventListener("click", () => {
    displayNumber += "5";
    display.textContent += "5";

})

buttonSix.addEventListener("click", () => {
    displayNumber += "6";
    display.textContent += "6";

})

buttonSeven.addEventListener("click", () => {
    displayNumber += "7";
    display.textContent += "7";

})

buttonEight.addEventListener("click", () => {
    displayNumber += "8";
    display.textContent += "8";

})

buttonNine.addEventListener("click", () => {
    displayNumber += "9";
    display.textContent += "9";

})


// evaluate the numbers and returns a total
function operate(operator, num1, num2) {
    let total = 0;
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "X":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
}

function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return +num1 - +num2;
}

function multiply(num1, num2) {
    return +num1 * +num2;
}

function divide(num1, num2) {
    return (+num1 / +num2).toFixed(1);
}
const display = document.querySelector(".display");

// buttons
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");
const buttonEquals = document.querySelector(".equals");
const buttonDot = document.querySelector(".dot");
const buttonClear = document.querySelector(".clear");
const buttonBackSpace = document.querySelector(".backspace");

// Number and operator variables
let num1 = "";
let num2 = "";
let operator = "";

// update display when button is clicked
buttonBackSpace.addEventListener("click", () => {
    // displayNumber.at(-1) = ""
    // display.textContent -= displayNumber;

})

buttonClear.addEventListener("click", () => {
    displayNumber = "";
    display.textContent = "";

})

buttonNumbers.forEach(button => {
    button.addEventListener("click", (e) => {
        if (operator === "") {
            num1 += e.target.innerText;
            display.textContent += e.target.innerText;
        } else {
            num2 += e.target.innerText;
            display.textContent += e.target.innerText;
        }
    })
})
    
buttonOperators.forEach(button => {
    button.addEventListener("click", (e) => {
        if (operator === "") {
            operator += e.target.innerText;
            display.textContent += e.target.innerText;
        }
    })
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
        case "x":
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
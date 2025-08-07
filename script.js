const display = document.querySelector(".display");

// buttons
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");
const buttonEquals = document.querySelector(".equals");
const buttonDot = document.querySelector(".dot");
const buttonClear = document.querySelector(".clear");
const buttonBackSpace = document.querySelector(".backspace");

// Number and operator variables
const numbers = "0123456789";
const operators = "+-x/";
const equals = "Enter";
let num1 = "";
let num2 = "";
let operator = "";
let total = "";
let attempt = 0;


// Events
buttonEquals.addEventListener("click", () => {
    if (display.textContent !== "") {
        display.textContent = operate(operator, num1, num2);
    }
    operator = "";
    num1 = operate(operator, num1, num2).toString();
    num2 = "";
    buttonDot.disabled = false;
})

buttonDot.addEventListener("click", (e) => {
    if (operator === "") {
        buttonDot.disabled = true;
        display.textContent += e.target.innerText;
        return num1 += e.target.innerText;
    } else {
        buttonDot.disabled = true;
        display.textContent += e.target.innerText;
        return num2 += e.target.innerText;
    }
})

// update display when button is clicked
buttonBackSpace.addEventListener("click", () => {
    if (operator === "") {
        num1 = num1.substring(0, num1.length - 1)
        display.textContent = num1;
    } else {
        num2 = num2.substring(0, num2.length - 1)
        display.textContent = num1 + operator + num2;
    }

})

buttonClear.addEventListener("click", () => {
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
    buttonDot.disabled = false;

})

buttonNumbers.forEach(button => {
    button.addEventListener("click", (e) => {
        if (operator === "") {
            display.textContent += e.target.innerText;
            return num1 += e.target.innerText;
        } else {
            display.textContent += e.target.innerText;
            return num2 += e.target.innerText;
        }
    })
})
    
buttonOperators.forEach(button => {
    button.addEventListener("click", (e) => {
        if (operator === "") {
            operator += e.target.innerText;
            display.textContent += e.target.innerText;
            buttonDot.disabled = false;
        } else {
            num1 = operate(operator, num1, num2).toString();
            operator = e.target.innerText;
            display.textContent = num1;
            num2 = "";
            display.textContent += operator;
        }
    })
})

// keyboard support for digits
document.addEventListener("keydown", (e) => {
    if (numbers.includes(e.key) == true) {
        if (operator === "") {
            display.textContent += e.key;
            return num1 += e.key;
        } else {
            display.textContent += e.key;
            return num2 += e.key;
        }
    }
});

// keyboard support for operators
document.addEventListener("keydown", (e) => {
    if (operators.includes(e.key) == true) {
        if (operator === "") {
            display.textContent += e.key;
            return operator = e.key;
        }
    }
})

// keyboard support for enter
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        if (display.textContent !== "") {
        display.textContent = operate(operator, num1, num2);
    }
        operator = "";
        num1 = operate(operator, num1, num2).toString();
        num2 = "";
        buttonDot.disabled = false;       
    }
})

// keyboard support for backspace
document.addEventListener("keydown", (e) => {
    if (e.key == "Backspace") {
        if (operator === "") {
            num1 = num1.substring(0, num1.length - 1)
            display.textContent = num1;
        } else {
            num2 = num2.substring(0, num2.length - 1)
            display.textContent = num1 + operator + num2;
        }
    }
})

//keyboard support for creating floating numbers
//buggy, how do you disable e.key after it has been pressed once (look at buttonDot);
document.addEventListener("keydown", (e) => {
    if (e.key == ".") {
        if (operator === "") {
            buttonDot.disabled = true;
            display.textContent += e.key;
            return num1 += e.key;
        } else {
            buttonDot.disabled = true;
            display.textContent += e.key;
            return num2 += e.key;
        }
    }
})

// evaluate the numbers and returns a total
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            total = add(+num1, +num2);
            break;
        case "-":
            total = subtract(+num1, +num2);
            break;
        case "x":
            total = multiply(+num1, +num2);
            break;
        case "/":
            total = divide(+num1, +num2);
            break;
    }
    return total;
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
    if (num2 == 0){
        alert("Do not divide by 0!");
        num2 = "";
        return;
    }
    return (+num1 / +num2).toFixed(1);
}
let lastInputIsDigit = false;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return;
    }
    return num1 / num2;
}

function operate(operator, num1, num2) {
    let result;
    switch(operator) {
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
    }
    return result;
}

function processInput(input) {
    
}
 
const displayScreen = document.querySelector("#screen");
const digitsButtons = document.querySelectorAll(".digits");
digitsButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", () => {
        if (!lastInputIsDigit) {
            displayScreen.textContent += " " + digitButton.textContent;
            lastInputIsDigit = true;
        }
        else {
            displayScreen.textContent += digitButton.textContent;
        }
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach( (operator) => {
    operator.addEventListener("click", () => {
        //@ts-ignore
        if (lastInputIsDigit) {
            displayScreen.textContent += " " + operator.textContent;
            lastInputIsDigit = false;
        }
    });
});

const clearButton = document.querySelector("#clear");
//@ts-ignore
clearButton.addEventListener("click", () => {
    //@ts-ignore
    displayScreen.textContent = "";
});

const evalButton = document.querySelector("#evalButton");
//@ts-ignore
evalButton.addEventListener("click", () => {
    //@ts-ignore
    let input = displayScreen.textContent;
    let result = processInput(input);
    //@ts-ignore
    displayScreen.textContent = result;
});
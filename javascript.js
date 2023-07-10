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

const displayScreen = document.querySelector("#screen");
const digitsButtons = document.querySelectorAll(".digits");
digitsButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", () => {
        //@ts-ignore
        displayScreen.textContent += digitButton.textContent;
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach( (operator) => {
    operator.addEventListener("click", () => {
        //@ts-ignore
        displayScreen.textContent += operator.textContent;
    });
});

const clearButton = document.querySelector("#clear");
//@ts-ignore
clearButton.addEventListener("click", () => {
    //@ts-ignore
    displayScreen.textContent = "";
});
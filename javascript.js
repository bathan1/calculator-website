let opRegEx = /[+\-x÷]/;
let digitsRegEx = /[0-9]/;

let lastInputIsDigit = true;
let resulted = false;
let hasDecimal = false;

function clearCalc() {
    //@ts-ignore
    displayScreen.textContent = "";
    lastInputIsDigit = true;
    hasDecimal = false;
    resulted = false;
}

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
        return "lol";
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
    let expressionArr = input.split(" ");
    if (expressionArr.length === 1) {
        return input;
    }
    let result = 0;
    if (expressionArr.length % 2 != 1) {
        return "invalid expression";
    }
    else {
        while (expressionArr.length != 0) {
            let num1 = Number(expressionArr[0]);
            let num2 = Number(expressionArr[2]);
            let operator = expressionArr[1];

            switch (operator) {
                case "+":
                    result = add(num1, num2);
                    break;
                case "-":
                    result = subtract(num1, num2);
                    break;
                case "x":
                    result = multiply(num1, num2);
                    break;
                case "÷":
                    result = divide(num1, num2);
                    break;
            }
            expressionArr.splice(0, 1);
            expressionArr.splice(0, 1);
            if (expressionArr.length === 1) {
                expressionArr.splice(0, 1);
            }
            else {
                expressionArr.splice(0, 1, result);
            }
        }
        return result;
    }
}
 
const displayScreen = document.querySelector("#screen");
const digitsButtons = document.querySelectorAll(".digits");
digitsButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", () => {
        if (resulted) {
            clearCalc();
            resulted = false;
        }

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
        if (lastInputIsDigit && displayScreen.textContent !== "") {
            displayScreen.textContent += " " + operator.textContent;
            lastInputIsDigit = false;
            hasDecimal = false;
        }
    });
});

const clearButton = document.querySelector("#clear");
//@ts-ignore
clearButton.addEventListener("click", clearCalc);

const evalButton = document.querySelector("#evalButton");
//@ts-ignore
evalButton.addEventListener("click", () => {
    if (resulted) {
        return;
    }
    //@ts-ignore
    let input = displayScreen.textContent;
    let result = processInput(input);
    //@ts-ignore
    if (result === input) {
        displayScreen.textContent = result;
        return;
    }
    result = Math.round(result * 10000) / 10000;
    displayScreen.textContent = result;
    hasDecimal = false;
    resulted = true;
});

const dotButton = document.querySelector("#decimal");
//@ts-ignore
dotButton.addEventListener("click", () => {
    if (resulted) {
        displayScreen.textContent = ".";
        resulted = false;
        hasDecimal = true;
        return;
    }
    if (!lastInputIsDigit) {
        displayScreen.textContent += " ."
        lastInputIsDigit = true;
        hasDecimal = true;
        return;
    }
    if (!hasDecimal) {
        displayScreen.textContent += ".";
        hasDecimal = true;
        return;
    }

});

const backspace = document.querySelector("#backspace");
backspace?.addEventListener("click", () => {
    let text = displayScreen?.textContent;
    if (text.length >= 1) {
        let deletedChar = text?.substring(text.length - 1);
        text = text?.substring(0, text.length - 1);
        if (opRegEx.test(deletedChar)) {
            text = text?.substring(0, text.length - 1);
            lastInputIsDigit = true;
        }
        else if (deletedChar === ".") {
            hasDecimal = false;
        }
    }
    displayScreen.textContent = text;
});
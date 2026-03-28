let operand1 = null;
let operand2 = null;
let operator = null;
let displayValue = "";

export function inputNumber(num) {
    displayValue += num;
    return displayValue;
}

export function setOperator(op) {
    if (displayValue === "") return;

    operand1 = Number(displayValue);
    operator = op;
    displayValue = "";
}

export function clearAll() {
    operand1 = null;
    operand2 = null;
    operator = null;
    displayValue = "";
    return "0";
}

export function calculate() {
    if (operand1 === null || displayValue === "") return;

    operand2 = Number(displayValue);

    if (operator === "/" && operand2 === 0) {
        clearAll();
        return "Eroare";
    }

    let result;

    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "X":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
    }

    clearAll();
    displayValue = result.toString();
    return displayValue;
}

export function getExpression() {
    return `${operand1 ?? ""} ${operator ?? ""} ${displayValue}`;
}
import {
    inputNumber,
    setOperator,
    calculate,
    clearAll,
    getExpression
} from "./model.js";

import { updateView } from "./view.js";

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        let result = "";

        if (!isNaN(value) || value === ".") {
            result = inputNumber(value);
        }
        else if (["+", "-", "X", "/"].includes(value)) {
            setOperator(value);
            result = "";
        }
        else if (value === "=") {
            result = calculate();
        }
        else if (value === "C") {
            result = clearAll();
        }

        updateView(getExpression(), result);
    });
});
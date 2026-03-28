const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");

export function updateView(expression, result) {
    expressionEl.textContent = expression;
    resultEl.textContent = result;
}
let currentInput = '';
// deno-lint-ignore no-unused-vars
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}
// deno-lint-ignore no-unused-vars
function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}
// deno-lint-ignore no-unused-vars
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}
// deno-lint-ignore no-unused-vars
function calculatePercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

// deno-lint-ignore no-unused-vars
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
// deno-lint-ignore no-unused-vars

window.appendNumber = appendNumber;
window.appendOperator = appendOperator;
window.calculate = calculate;
window.clearDisplay = clearDisplay;
window.calculatePercentage = calculatePercentage;
window.deleteLast = deleteLast;



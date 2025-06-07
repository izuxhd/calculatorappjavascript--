let currentInput = '';
// deno-lint-ignore no-unused-vars
function _appendNumber(number) {
    currentInput += number;
    updateDisplay();
}
// deno-lint-ignore no-unused-vars
function _appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}
// deno-lint-ignore no-unused-vars
function _calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function _clearDisplay() {
    currentInput = '';
    updateDisplay();
}
// deno-lint-ignore no-unused-vars
function _calculatePercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

// deno-lint-ignore no-unused-vars
function _deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
// deno-lint-ignore no-unused-vars

window.appendNumber = _appendNumber;
window.appendOperator = _appendOperator;
window.calculate = _calculate;
window.clearDisplay = _clearDisplay;
window.calculatePercentage = _calculatePercentage;
window.deleteLast = _deleteLast;



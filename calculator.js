let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}

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

function calculatePercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
// ... (previous JavaScript code)

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
window.appendNumber = appendNumber;
window.appendOperator = appendOperator;
window.calculate = calculate;
window.clearDisplay = clearDisplay;
window.calculatePercentage = calculatePercentage;
window.deleteLast = deleteLast;



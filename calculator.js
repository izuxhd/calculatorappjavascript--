let currentInput = '';

function _appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function _appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}

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

function _calculatePercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}


function _deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}


window.appendNumber = _appendNumber;
window.appendOperator = _appendOperator;
window.calculate = _calculate;
window.clearDisplay = _clearDisplay;
window.calculatePercentage = _calculatePercentage;
window.deleteLast = _deleteLast;



const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');
const deleteBtn = document.getElementById('delete');
const equalsBtn = document.querySelector('.ravno');
const plusMinusBtn = document.querySelector('.plus_minus');
const percentBtn = document.querySelector('.procent');
const backspaceBtn = document.querySelector('.back');
const maxInputLength = 12;

let firstOperand = '';
let secondOperand = '';
let operator = '';
let clickCount = 0;

function clearResult() {
    result.value = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    clickCount = 0;
    result.style.border = '1px solid black'
}

function calculate(op, x, y) {
    switch (op) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case 'x':
            return x * y;
        case '÷':
            return y !== 0 ? parseFloat((x / y).toFixed(2)) : null;
        default:
            return null;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('operator')) {
            if (result.value) {
                firstOperand = parseFloat(result.value);
                operator = button.textContent;
                result.value = '';
            }
        } else if (clickCount < maxInputLength) {
            if (button.textContent === '.' && result.value.includes('.')) return;
            result.value += button.textContent;
            clickCount++;
        }
        else {
            result.style.cssText = 'border: 2px solid red'
        }
    });
});

equalsBtn.addEventListener('click', () => {
    if (firstOperand && operator && result.value) {
        secondOperand = parseFloat(result.value);
        const calculationResult = calculate(operator, firstOperand, secondOperand);
        result.value = calculationResult !== null ? calculationResult : 'Error';
        firstOperand = calculationResult;
        secondOperand = '';
        operator = '';
        clickCount = result.value.length;
    }
});

deleteBtn.addEventListener('click', clearResult);

plusMinusBtn.addEventListener('click', () => {
    if (result.value) result.value = parseFloat(result.value) * -1;
});

percentBtn.addEventListener('click', () => {
    if (result.value) result.value = parseFloat(result.value) / 100;
});

backspaceBtn.addEventListener('click', () => {
    if (result.value.length > 0) {
        result.value = result.value.slice(0, -2);
        clickCount--;
    }
});


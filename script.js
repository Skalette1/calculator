var result = document.querySelector('.result');
var btn = document.querySelectorAll('.btn');
var del = document.getElementById('delete');
var ravno = document.querySelector('.ravno');
var plusMinus = document.querySelector('.plus_minus')
var procent = document.querySelector('.procent')
let clickCount = 0;
const maxCount = 12;
let x = ''
let y = ''
var operator = ''


    btn.forEach(element => {
    element.addEventListener('click', () => {
    if(clickCount < maxCount) {
     if(element.textContent === "." && result.value.includes('.')) {
        return
        }
        result.value += element.textContent;
        clickCount ++
    }
    else {
        btn.disabled = true
    }
  })
});

del.addEventListener('click', () => {
    result.value = ""
    clickCount = 0
    x = '';
    y = '';
    operator = '';
})

function add (x, y) {
    return x + y
}

function subtract (x, y) {
    return x - y
}

function multiply (x, y) {
    return x * y
}

function division (x, y) {
    if (y === 0) {
        return "Шутишь что ли?"
    }
    else {
        return (x / y).toFixed(2)
    }
}

function operate(op, x, y) {
    switch (op) {
        case '+': return add(x, y);
        case '-': return subtract(x, y);
        case 'x': return multiply(x, y);
        case '÷': return division(x, y);
        default: return null;
    }
}

ravno.addEventListener('click', () => {
if (x === '' && operator === '') {
    x = result.value
}
else if (x !== '' && operator !== '') {
    y = result.value

 const resultValue = operate(operator, parseFloat(x), parseFloat(y));
 result.value = resultValue
} 
});

btn.forEach(element => {
    if (['+', '-', 'x', '÷'].includes(element.textContent)) {
        element.addEventListener('click', ()=> {
            if (result.value !== '') {
                operator = element.textContent;
                x = result.value;
                result.value = ''
            }
        });
    }
})

plusMinus.addEventListener('click', () => {
    var current = parseFloat(result.value);
    result.value = current * -1

});

procent.addEventListener('click', () => {
    var current = parseFloat(result.value);
    result.value = current/100
})

result.style.cssText = 'color: #b88206';

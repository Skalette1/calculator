var result = document.querySelector('.result');
var btn = document.querySelectorAll('.btn');
var del = document.getElementById('delete');
var plus = document.querySelector('.plus');
var znak = document.querySelectorAll('.plus_minus');
var ravno = document.querySelector('.ravno');
var tochka = document.querySelectorAll('.desyt');
var operator = document.querySelectorAll('.znak')
var number = document.querySelectorAll('.number')
let clickCount = 0;
const maxCount = 12;
var summa = 0

    btn.forEach(element => {
    element.addEventListener('click', () => {
    if(clickCount <= maxCount) {
     if(element.textContent === "." && result.textContent.includes('.')) {
        }
        summa += parseInt(element.textContent);
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
    summa = 0
    result.style.color = 'black'
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
    return x / y
}

function operate (x, y, operator) {
        if (operator === '+') {
            return add
        }
        else if (operator === '-') {
            return subtract
        }
        else if (operator === '*') {
            return multiply
        }
        else if (operator === '/') {
            return division
        }
        else {
            return 'ERROR'
        }
    }

    ravno.addEventListener('click', () => {
        result.value += parseFloat(summa);
        result.style.cssText = 'color: #97680a'
})


 


// function ChangeZnak(znak, btn) {
//     znak.addEventListener('click', () => {
//         if(btn.getAttribute('class')) {
//             btn.setAttribute('class', '-' + btn.textContent);
//         } else {
//             btn.setAttribute('class', 'новое значение');
//         }
//     });
// }






//return text.content = const
// text.content = '';

// if (parseInt(result.textContent + element.textContent) <= 12) {
//     result.textContent += element.textContent
//     }else {
//         result.textContent = "Хьийз ма е и калькулятор"
//     }
//     clickCount ++
//     if(clickCount === maxCount) {
//         btn.disabled = true;
//         result.textContent += ''
//     }


// if(result.textContent <=10) {
//     alert = "ERROR"
// }

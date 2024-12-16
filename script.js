var result = document.querySelector('.result');
var btn = document.querySelectorAll('.btn');
var del = document.getElementById('delete');
let tochka = document.getElementsByClassName('desyt');

    btn.forEach(element => {
    element.addEventListener('click', () => {
    if (parseInt(result.textContent + element.textContent) <= 12) {
    result.textContent += element.textContent
    }else {
        result.textContent = "Хьийз ма е и калькулятор"
    }
    })
});




del.addEventListener('click', () => {
    result.textContent = ''
})



function sum (number) {

}

function subtract (number) {

}

function multiply (number) {

}

function division (number) {

}

function operate (num1, num2, operator) {
    
}






//return text.content = const
// text.content = '';

if (parseInt(result.textContent + element.textContent) <= 12) {
    result.textContent += element.textContent
    }else {
        result.textContent = "Хьийз ма е и калькулятор"
    }
var result = document.querySelector('.result');
var btn = document.querySelectorAll('.btn');
var del = document.getElementById('delete');
let tochka = document.getElementsByClassName('desyt');
let clickCount = 0;
const maxCount = 10;

    btn.forEach(element => {
    element.addEventListener('click', () => {
    if(clickCount <= maxCount) {
        if(element.textContent === "." && result.textContent.includes('.')) {
            return
        }
        result.textContent += element.textContent;
        clickCount ++
    }
    else {
        btn.disabled = true
    }
    })
});

del.addEventListener('click', () => {
    result.textContent = ''
    clickCount = 0
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

var result = document.querySelector('.result');
var btn = document.querySelectorAll('.btn');
var del = document.getElementById('delete');
var plus = document.querySelector('.plus');
var znak = document.querySelectorAll('.plus_minus');
var ravno = document.querySelector('.ravno');
var tochka = document.querySelectorAll('.desyt');
let clickCount = 0;
const maxCount = 14;

function sum (btn) {
    let sumBtn = btn + btn;
    return sumBtn;
}

plus.addEventListener('click', () => {
    let sumResult = sumBtn;
})

function operate () {
    ravno.addEventListener('click', () => {
    result.textContent = sumResult.textContent
    })
}

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
    result.textContent = '';
    clickCount = 0
})



function subtract (number) {

}

function multiply (number) {

}

function division (number) {

}


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

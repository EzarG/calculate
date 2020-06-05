const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitPressed));
function  digitPressed(even) {
   display.value += even.target.innerText;
}
document.querySelectorAll('.opers button')
    .forEach(button => button.addEventListener('click', opersPressed));
function  opersPressed(even) {
    display.value += even.target.innerText;

}
document.querySelector('.eq').addEventListener('click', eqPressed);
function eqPressed() {
    if (display.value === 'Infinity') {
        display.value = ('cannot be divided by zero')
    }else {
        display.value += eval(display.value);
    }
}
document.querySelector('.clear').addEventListener('click', clearAll);

function clearAll() {
    display.value = ' '
}

document.querySelector('back').addEventListener('click', backOneStep);










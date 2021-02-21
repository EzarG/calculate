const display = document.querySelector('.display');
document.querySelectorAll('.item')
    .forEach(item => item.addEventListener('click', digitPressed));
function digitPressed(even) {
    display.value += even.target.innerText;
}

document.querySelector('.eq').addEventListener('click', eqPressed);
function eqPressed() {
    if (display.value.endsWith("/0")) {
        document.getElementsByClassName('display').value = "";
        alert("cannot be divided by zero");
        display.value = ' '

    }else {
        display.value = eval(display.value);

    }
}
document.querySelector('.item-clear').addEventListener('click', clearAll);
function clearAll(){
    display.value = ' '
}

document.querySelector('.item-back').addEventListener('click',backOne)
function backOne() {
    display.value = display.value.slice(0, -1);
}


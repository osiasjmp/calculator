addListeners();


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(o, x, y) {
    if(o == '+') {
        return add(x, y);
    }
    else if(o == '-') {
        return subtract(x, y);
    }
    else if(o == '*') {
        return multiply(x, y);
    }
    else if(o == '/') {
        return divide(x, y);
    }
    else {
        return 'ERROR';
    }
}



function addListeners() {

    const buttonDigits = document.querySelectorAll('.digit');
    buttonDigits.forEach((button) => {
        button.addEventListener('click', (e) => {
            updateDisplayValue(e.target.textContent);
        });
    });

    const buttonOperators = document.querySelectorAll('.operator');
    buttonOperators.forEach((button) => {
        button.addEventListener('click', (e) => {
            updateDisplayValue(e.target.textContent);
        });
    });

    const buttonAC = document.getElementById('btn_ac');
    buttonAC.addEventListener('click', (e) => {
        display_value = '';
        updateDisplay();
    });

    const buttonCE = document.getElementById('btn_ce');
    buttonCE.addEventListener('click', (e) => {
        display_value = display_value.slice(0, -1);
        updateDisplay();
    });
}



let display_value = '';

function updateDisplay() {
    const text = document.getElementById('display_text');
    text.textContent = display_value;
}

function updateDisplayValue(i) {
    display_value += i;
    updateDisplay();
}
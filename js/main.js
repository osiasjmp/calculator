addListeners();


let display_value = '';
let actual_value = '';

let number_dot = true;

function updateDisplay() {
    const text = document.getElementById('display_text');
    text.innerHTML = display_value;
}

function appendDisplayValue(i) {
    display_value += i;
    updateDisplay();
}

function appendActualValue(i) {
    actual_value += i;
}

function isDisplayOperator() {
    return display_value.toString().charAt(display_value.length-1) == '>';
}

function isDisplayDot() {
    return display_value.toString().charAt(display_value.length-1) == '.';
}

function isDisplayEmpty() {
    return display_value.toString() == '';
}

function isDisplayNumber() {
    return !( isDisplayOperator() || isDisplayDot() || isDisplayEmpty() );
}

function isDisplayFull() {
    return actual_value.length > 13;
}



function addListeners() {

    const buttonDigits = document.querySelectorAll('.digit');
    buttonDigits.forEach((button) => {
        button.addEventListener('click', (e) => {
            if( !(isDisplayFull()) ) {
                appendDisplayValue(e.target.textContent);
                appendActualValue(e.target.textContent);
            }
        });
    });

    const buttonDot = document.querySelector('.dot');
    buttonDot.addEventListener('click', (e) => {
        if( !(isDisplayFull()) && isDisplayNumber() && number_dot ) {
            number_dot = false;
            appendDisplayValue(e.target.textContent);
            appendActualValue(e.target.textContent);
        }
    });

    const buttonOperators = document.querySelectorAll('.operator');
    buttonOperators.forEach((button) => {
        button.addEventListener('click', (e) => {
            if( !(isDisplayFull()) && isDisplayNumber() ) {
                number_dot = true;
                appendDisplayValue('<span class="accent"> ' + e.target.textContent + ' </span>');
                switch(e.target.textContent) {
                    case '+':
                        appendActualValue(' + ');
                        break;
                    case '-':
                        appendActualValue(' - ');
                        break;
                    case 'x':
                        appendActualValue(' * ');
                        break;
                    case '÷':
                        appendActualValue(' / ');
                        break;
                    default:
                        console.log('Something went wrong');
                }
            }
        });
    });

    const buttonAC = document.getElementById('btn_ac');
    buttonAC.addEventListener('click', (e) => {
        number_dot = true;
        display_value = '';
        actual_value = '';
        updateDisplay();
    });

    const buttonCE = document.getElementById('btn_ce');
    buttonCE.addEventListener('click', (e) => {
        if( isDisplayOperator() ) {
            number_dot = false;
            display_value = display_value.toString().slice(0, -31);
            if( isDisplayNumber() ) {
                number_dot = true;
            }
        } else if( isDisplayDot() ) {
            number_dot = true;
            display_value = display_value.toString().slice(0, -1);
        } else {
            display_value = display_value.toString().slice(0, -1);
        }
        actual_value = actual_value.toString().slice(0, -1);
        updateDisplay();
    });

    const buttonEquals = document.getElementById('btn_equals');
    buttonEquals.addEventListener('click', (e) => {
        actual_value = Math.round(eval(actual_value) * 100) / 100;
        display_value = actual_value;
        updateDisplay();
    });
}

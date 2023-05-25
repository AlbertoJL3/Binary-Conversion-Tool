const button = document.querySelector('.btn');
const resultEl = document.querySelector('.resultsCard');
const resultsText = document.querySelector('.results');

//gets text from selector
function getSelectorText() {
    const menuEl = document.querySelector('.selector');
    var selectedOption = menuEl.options[menuEl.selectedIndex];
    var optionText = selectedOption.text;
    console.log(optionText)
    return optionText
}

//gets text from input box
function getInput() {
    const inputEl = document.querySelector('[name="info"]');
    var inputValue = inputEl.value;
    console.log(inputValue)
    if (inputValue == '') {
        window.alert('please add an input!')
    }
    return inputValue
}

//Functions for tools/methods
function BinaryToDigit(input) {
    return parseInt(input, 2);
}

function DigitToBinary(input) {
    var number = parseInt(input)
    return number.toString(2);
}
function BinaryToHexadecimal(input) {
    var digit = BinaryToDigit(input);
    var hexadecimal = digit.toString(16).toUpperCase();
    return hexadecimal;
}

function HexadecimalToBinary(input) {
    var digit = parseInt(input, 16);
    var binary = DigitToBinary(digit);
    return binary;
}
//checks if the input is a valid binary number 
function isValidBinary(input) {
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char !== '0' && char !== '1') {
            return false
        }
    }
    return true
}

//checks if the input is a valid digit
function isValidDigit(digit) {
    return !isNaN(parseInt(digit, 10)) && parseInt(digit, 10) >= 0 && parseInt(digit, 10) <= 9;
}
//checks if its a valid hexadecimal
function isValidHex(character) {
    const hexRegex = /^[0-9A-Fa-f]$/;
    return hexRegex.test(character);
}

function methodToPage(method, input) {
    if (method == 'Binary to Digit') {
        if (isValidBinary(input)) {
            var result = BinaryToDigit(input);
        } else (
            window.alert('please input a valid binary number!')
        )
    }
    else if (method == 'Digit to Binary') {
        if (isValidDigit(input)) {
            var result = DigitToBinary(input);
        } else (
            window.alert('please input a valid digit!')
        )
    }
    else if (method == 'Binary to Hexadecimal') {
        if (isValidBinary(input)) {
            var result = BinaryToHexadecimal(input);
        } else (
            window.alert('please input a valid binary number!')
        )
    }
    else if (method == 'Hexadecimal to Binary') {
        if (isValidHex(input)) {
            var result = HexadecimalToBinary(input);
        } else (
            window.alert('please input a valid Hexadecimal!')
        )
    }
    else {
        window.alert('invalid')
    }

    //shows result box and adds to page
    var element = document.querySelector(".resultsCard");
    element.classList.remove("hide");
    var resultEl = document.querySelector('.results');
    resultEl.innerHTML = result;
}

function handleEvent() {
    var input = getInput();
    var method = getSelectorText();
    methodToPage(method, input);
}

button.addEventListener('click', function (event) {
    event.preventDefault();
    handleEvent();
});
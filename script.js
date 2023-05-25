const button = document.querySelector('.btn');
const resultEl = document.querySelector('.resultsCard');
const resultsText = document.querySelector('.results');

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

function BinaryInfo() {
    console.log('sucker!');
}

function showResults() {

}

function methodToPage(method, input) {
    if (method == 'Binary to Digit') {
        console.log('BtoD')
        var result = BinaryToDigit(input);
    }
    else if (method == 'Digit to Binary') {
        console.log('DtoB')
        var result = DigitToBinary(input);
    }
    else if (method == 'Binary to Hexadecimal') {
        console.log('BtoH')
        var result = BinaryToHexadecimal(input);
    }
    else if (method == 'Hexadecimal to Binary') {
        console.log('HtoB')
        var result = HexadecimalToBinary(input);
    }
    else if (method == 'Binary History') {
        var result = BinaryInfo();
    } else {
        window.alert('invalid')
    }

    var element = document.querySelector(".resultsCard");
    element.classList.remove("hide");
    var resultEl = document.querySelector('.results');
    resultEl.innerHTML = result;
}

function handleEvent() {
    var input = getInput();
    var method = getSelectorText();
    methodToPage(method, input);
    showResults();
}

button.addEventListener('click', function (event) {
    event.preventDefault();
    handleEvent();
});
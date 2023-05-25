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
//function for binary to text
function binaryToAscii(binaryString) {
    // Split the binary string into 8-bit chunks
    const binaryChunks = binaryString.match(/.{1,8}/g);

    // Convert each chunk to decimal and then to ASCII character
    const asciiChars = binaryChunks.map(chunk => String.fromCharCode(parseInt(chunk, 2)));

    // Join the ASCII characters into a string
    const asciiText = asciiChars.join('');

    return asciiText;
}
//Text to binary
function textToBinary(text) {
    let binaryString = '';
    for (let i = 0; i < text.length; i++) {
        // Get the ASCII code for each character
        const charCode = text.charCodeAt(i);
        // Convert the ASCII code to binary and pad with leading zeros if necessary
        const binary = charCode.toString(2).padStart(8, '0');
        binaryString += binary;
    }
    return binaryString;
}


function HexadecimalToBinary(input) {
    var digit = parseInt(input, 16);
    var binary = DigitToBinary(digit);
    return binary;
}

//VALIDATORS
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
    return /^\d+$/.test(digit);
}
//checks if its a valid hex string
function isValidHex(hexString) {
    const hexRegex = /^[0-9A-Fa-f]+$/;
    return hexRegex.test(hexString);
  }
  
function isValidText(text) {
    for (let i = 0; i < text.length; i++) {
        // Get the ASCII code for each character
        const charCode = text.charCodeAt(i);

        // Check if the ASCII code is outside the valid range (0-127)
        if (charCode < 0 || charCode > 127) {
            return false;
        }
    }
    return true;
}

//Produces results and appends to page
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
    else if (method == 'Text to Binary') {
        if (isValidText(input)) {
            var result = textToBinary(input);
        } else (
            window.alert('please input a valid String!')
        )
    }
    else if (method == 'Binary to Text') {
        if (isValidBinary(input)) {
            var result = binaryToAscii(input);
        } else (
            window.alert('please input a valid binary number!')
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

//handles event listener
function handleEvent() {
    var input = getInput();
    var method = getSelectorText();
    methodToPage(method, input);
}

//event listener for GO button
button.addEventListener('click', function (event) {
    event.preventDefault();
    handleEvent();
});
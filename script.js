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
    return inputValue
}

function BinaryToDigit(input) {
    return parseInt(input, 2);
}



button.addEventListener('click', function (event) {
    event.preventDefault();
    handleEvent();
});
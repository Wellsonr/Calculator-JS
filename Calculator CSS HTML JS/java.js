// document.getElementById('result') // \\ document == use to get the html or webpage that currently load at browser 
// .getElementById('--id you want to load') == to retrieve the id from the html code //
// const result == declare a variable called result and assign the id result to it //
const result = document.getElementById('result');
const buttons = document.querySelectorAll('.number, .operator');
// .querySelectorAll('.number, .operator') == is use for getting all the element that match the class name of ".number" and ".operator". You can use this for retrieve multiples element at once //
const equalsBtn = document.getElementById('equalsBtn');
const clearBtn = document.getElementById('clearBtn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result.value += button.textContent
    });
});
// .forEach((button) => {}) == use .forEach method to looping through all the element in the buttons variable // 
// (button) == is a parameter to store the each element that have been looped // 
// button.addEventListener('click', () =>{}); == when the each of the element in the button parameter is clicked then the function inside it will get executed // 
// result.value += button.textContent == When the button is clicked the value inside the button is being added into result value //
equalsBtn.addEventListener('click', () => {
    try {
        result.value = eval(result.value);
    } catch {
        result.value = 'error';
    };
});
// try and catch block == this allow you to handle the potential error that may occur during execution // 
// eval(result.value) == eval() this function use for evaluate the expression inside the result value and then after that its return the value that has been evaluate into the result value again //
// result.value = 'error' == and if the expression returned an error the result value will showed an error that we've been made //
clearBtn.addEventListener('click', () => {
    result.value = ''
});
// when the clear btn clicked the display in the calculator or the result value return to none or '' //
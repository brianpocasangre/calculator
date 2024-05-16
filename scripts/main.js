let num1 = '';
let num2 = '';
let operator = '';

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

const display = document.querySelector('.display');
const buttons = Array.from(document.querySelectorAll('.pad'));
const operators = Array.from(document.querySelectorAll('.operate'));

function populate(e) {
  if (num1 !== '' && operator !== '' && this.id !== 'equals') {
    num2 += this.id;
    display.innerHTML = num2;
  } else if (
    this.id !== 'add' &&
    this.id !== 'subtract' &&
    this.id !== 'multiply' &&
    this.id !== 'divide' &&
    this.id !== 'equals'
  ) {
    num1 += this.id;
    display.innerHTML = num1;
  } else if (
    this.id === 'add' ||
    this.id === 'subtract' ||
    this.id === 'multiply' ||
    this.id === 'divide'
  ) {
    operator = this.id;
    display.innerHTML = this.innerHTML;
  }

  if (this.id === 'equals') {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
      case 'add':
        display.innerHTML = add(num1, num2);
        break;
      case 'subtract':
        display.innerHTML = subtract(num1, num2);
        break;
      case 'multiply':
        display.innerHTML = multiply(num1, num2);
        break;
      case 'divide':
        display.innerHTML = divide(num1, num2);
        break;
      default:
        console.log('error');
    }
    num1 = '';
    num2 = '';
    operator = '';
  }
}

buttons.forEach((btn) => btn.addEventListener('click', populate));
operators.forEach((op) => op.addEventListener('click', populate));

let num1 = '';
let num2 = '';
let operator = '';
let result = '';

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
  if (
    num1 !== '' &&
    operator !== '' &&
    this.id !== 'equals' &&
    this.id !== 'add' &&
    this.id !== 'subtract' &&
    this.id !== 'multiply' &&
    this.id !== 'divide'
  ) {
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
    if (num1 !== '' && num2 !== '' && operator !== '') {
      num1 = Number(num1);
      num2 = Number(num2);
      switch (operator) {
        case 'add':
          result = add(num1, num2);
          display.innerHTML = Math.round(add(num1, num2));
          break;
        case 'subtract':
          result = subtract(num1, num2);
          display.innerHTML = Math.round(subtract(num1, num2));
          break;
        case 'multiply':
          result = multiply(num1, num2);
          display.innerHTML = Math.round(multiply(num1, num2));
          break;
        case 'divide':
          result = divide(num1, num2);
          display.innerHTML = Math.round(divide(num1, num2));
          break;
        default:
          console.log('error');
      }
      num1 = result;
      num2 = '';
      operator = this.id;
      display.innerHTML = result;
    } else {
      operator = this.id;
      display.innerHTML = this.innerHTML;
    }
  }

  if (this.id === 'equals') {
    if (num1 === '' || num2 === '' || operator === '') {
      display.innerHTML = 'Incomplete';
      num1 = '';
      num2 = '';
      operator = '';
    } else {
      num1 = Number(num1);
      num2 = Number(num2);
      switch (operator) {
        case 'add':
          display.innerHTML = Math.round(add(num1, num2));
          break;
        case 'subtract':
          display.innerHTML = Math.round(subtract(num1, num2));
          break;
        case 'multiply':
          display.innerHTML = Math.round(multiply(num1, num2));
          break;
        case 'divide':
          if (num1 === 0 || num2 === 0) {
            display.innerHTML = "Hey don't crash the calculator";
          } else {
            display.innerHTML = Math.round(divide(num1, num2));
          }

          break;
        default:
          console.log('error');
      }
      num1 = '';
      num2 = '';
      operator = '';
    }
  } else if (this.id === 'clear') {
    num1 = '';
    num2 = '';
    operator = '';
    display.innerHTML = '';
  }
}

buttons.forEach((btn) => btn.addEventListener('click', populate));
operators.forEach((op) => op.addEventListener('click', populate));

import { Counter } from './counter-class.js';
import { Spinner } from './spinner-class.js';

const buttons = document.querySelector('.buttons');
const valueElement = document.querySelector('[data-value]');

const createButton = (text, callback, parentNode, className) => {
    let button = document.createElement('button');
    button.textContent = text;
    button.classList.add(className);
    button.addEventListener('click', callback);
    parentNode.append(button);
};

const createDiv = (className) => {
    let div = document.createElement('div');
    div.classList.add(className);

    return div;
};

const operations = createDiv('operation-buttons');

// CLASS SELECTOR
const spinner = document.querySelector('.spinner');
const originalThick = document.querySelector('.spinner-thick');

// CLASSES
const spinnerClass = new Spinner(originalThick, spinner);
const counter = new Counter(valueElement);

// QUERY SELECTOR
const thicks = document.querySelectorAll('.spinner-thick');

// FUNCTION TO HANDLE ROTATION AND DISPLAY UPDATE
const updateCounterAndRotate = (operation) => {
    if (operation === 'add') {
        counter.increment();
        spinnerClass.rotate(thicks, 'add');
    } else if (operation === 'sub') {
        counter.decrement();
        spinnerClass.rotate(thicks, 'sub');
    } else if (operation === 'reset') {
        counter.reset();
    }
    counter.updateDisplay(valueElement);
};

createButton('R', () => updateCounterAndRotate('reset'), buttons, 'reset-btn');
buttons.append(operations);
createButton('-', () => updateCounterAndRotate('sub'), operations, 'sub-btn');
createButton('+', () => updateCounterAndRotate('add'), operations, 'add-btn');

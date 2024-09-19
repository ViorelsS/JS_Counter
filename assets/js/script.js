import { Counter } from './counter-class.js';

const addButton = document.querySelector('[data-add]');
const minusButton = document.querySelector('[data-subtract]');
const valueElement = document.querySelector('[data-value]');

const counter = new Counter(valueElement);

addButton.addEventListener('click', () => {
    counter.increment();
    counter.updateDisplay(valueElement);
});

minusButton.addEventListener('click', () => {
    counter.decrement();
    counter.updateDisplay(valueElement);
});

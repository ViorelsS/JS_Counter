import { Counter } from './counter-class.js';

const addButton = document.querySelector('[data-add]');
const minusButton = document.querySelector('[data-subtract]');
const valueElement = document.querySelector('[data-value]');

//TODO: classe SPINNER
const spinner = document.querySelector('.spinner');
const originalThick = document.querySelector('.spinner-thick');

// Clona e aggiungi gli elementi spinner-thick
for (let i = 1; i < 36; i++) {
    const clone = originalThick.cloneNode(true);
    clone.style.setProperty('--initial-rotation', `${i * 10}deg`);
    spinner.appendChild(clone);
}

// Imposta la rotazione iniziale per l'elemento originale
originalThick.style.setProperty('--initial-rotation', `0deg`);

const thicks = document.querySelectorAll('.spinner-thick');

const counter = new Counter(valueElement);

addButton.addEventListener('click', () => {
    // TODO: impostare font più piccolo quando supero le 7 cifre su display di 100px
    counter.increment();
    counter.updateDisplay(valueElement);

    thicks.forEach((thick) => {
        const currentRotation =
            parseFloat(
                getComputedStyle(thick).getPropertyValue('--rotation')
            ) || 0;
        thick.style.setProperty('--rotation', `${currentRotation + 10}deg`);
    });
});

minusButton.addEventListener('click', () => {
    counter.decrement();
    counter.updateDisplay(valueElement);

    if (counter.getValue() >= 0) {
        thicks.forEach((thick) => {
            const currentRotation =
                parseFloat(
                    getComputedStyle(thick).getPropertyValue('--rotation')
                ) || 0;
            thick.style.setProperty('--rotation', `${currentRotation - 10}deg`);
        });
    }
});

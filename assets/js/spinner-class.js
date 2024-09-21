export class Spinner {
    constructor(thickElement, spinner) {
        this.thicks = [];  // Array per tenere traccia dei thick
        this.createThicks(thickElement, spinner);
        this.rotation = 0;  // Manteniamo una rotazione globale
    }

    createThicks(thickElement, spinner) {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 11; i++) {
            const clone = thickElement.cloneNode(true);
            clone.style.setProperty('--initial-rotation', `${i * 30}deg`);
            fragment.appendChild(clone);
            this.thicks.push(clone);  // Salviamo i thick nel nostro array
        }
        spinner.appendChild(fragment);
    }

    rotate(direction) {
        const increment = direction === 'add' ? 10 : -10;
        this.rotation += increment;
        this.thicks.forEach((thick) => {
            thick.style.transform = `rotate(calc(var(--initial-rotation) + ${this.rotation}deg)) translateY(-25vh)`;
        });
    }
}
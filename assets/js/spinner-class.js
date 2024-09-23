export class Spinner {
    constructor(thickElement, spinner) {
        this.createThicks(thickElement, spinner);
        thickElement.style.setProperty('--initial-rotation', `0deg`);
    }

    createThicks(thickElement, spinner) {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 35; i++) {
            const clone = thickElement.cloneNode(true);
            clone.style.setProperty('--initial-rotation', `${(i + 1) * 10}deg`);
            fragment.appendChild(clone);
        }
        spinner.appendChild(fragment);
    }

    rotate(thicks, direction) {
        const increment = direction === 'add' ? 10 : -10;
        thicks.forEach((thick) => {
            const currentRotation =
                parseFloat(thick.style.getPropertyValue('--rotation')) || 0;
            thick.style.setProperty(
                '--rotation',
                `${currentRotation + increment}deg`
            );
        });
    }
}

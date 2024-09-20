export class Counter {
    constructor(element) {
        this.value = 0;
        element.innerText = this.value;
    }

    increment() {
        // this.value++;
        this.value = this.value + 1000;
        // FIXME: se ci sono più di tot caratteri, diminuire la dimensione
    }

    decrement() {
        if (this.value > 0) {
            this.value--;
        }
    }

    updateDisplay(element) {
        element.innerText = this.value;
    }

    getValue() {
        return this.value;
    }
}

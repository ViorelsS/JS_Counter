export class Counter {
    constructor(element) {
        this.value = 0;
        element.innerText = this.value;
    }

    increment() {
        this.value++;
    }

    decrement() {
        if (this.value > 0) {
            this.value--;
        }
    }

    updateDisplay(element) {
        element.innerText = this.value;
    }

    reset() {
        this.value = 0;
    }

    getValue() {
        return this.value;
    }
}

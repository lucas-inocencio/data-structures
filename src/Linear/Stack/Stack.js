class Stack {

    constructor() {
        this.items = [];
    }

    push(i) {
        this.items.push(i);
    }

    // Returns the last element of the list and remove it from stack
    pop() {
        if (this.items.length == 0) return "Is Empty";
        return this.items.pop();
    }
}
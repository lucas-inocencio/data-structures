class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(i) {
        this.items.push(i);
    }

    // Returns the first element of the list and remova it from the queue
    dequeue() {
        if (this.items.length == 0) return "Is Empty";
        return this.items.shift();
    }
}
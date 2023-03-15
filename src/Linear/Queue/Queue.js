class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(i) {
    this.items.push(i);
  }

  dequeue() {
    if (this.items.length == 0) return "Is Empty";
    return this.items.shift();
  }
}

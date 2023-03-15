class Stack {
  constructor() {
    this.items = [];
  }

  push(i) {
    this.items.push(i);
  }

  pop() {
    if (this.items.length == 0) return "Is Empty";
    return this.items.pop();
  }
}

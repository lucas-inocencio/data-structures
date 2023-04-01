/**
 * A class representing a stack data structure.
 */
class Stack {
  /**
   * Creates a new Stack instance.
   */
  constructor() {
    this.size = 0;
    this.elements = {};
  }

  /**
   * Adds an element to the top of the stack.
   * @param {*} element - The element to be added.
   */
  push(element) {
    this.elements[this.size] = element;
    this.size++;
  }

  /**
   * Removes and returns the element at the top of the stack.
   * @return {*} - The removed element.
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.size--;
    const result = this.elements[this.size];
    delete this.elements[this.size];
    return result;
  }

  /**
   * Returns the element at the top of the stack without removing it.
   * @return {*} - The element at the top of the stack.
   */
  getTop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements[this.size - 1];
  }

  /**
   * Checks if the stack is empty.
   * @return {boolean} - `true` if the stack is empty, `false` otherwise.
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Removes all elements from the stack.
   */
  deleteAll() {
    this.elements = {};
    this.size = 0;
  }

  /**
   * Returns a string representation of the stack.
   * @return {string} - The string representation of the stack.
   */
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.elements[0]}`;
    for (let i = 1; i < this.size; i++) {
      objString = `${objString},${this.elements[i]}`;
    }
    return objString;
  }
}

module.exports = { Stack };

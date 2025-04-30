/**
 * A queue data structure implemented using an object.
 */
class Queue {
  /**
   * Creates a new Queue instance.
   */
  constructor() {
    this.count = 0;
    this.frontIndex = 0;
    this.elements = {};
  }

  /**
   * Adds an element to the back of the queue.
   * @param {*} element - The element to be added.
   */
  enqueue(element) {
    this.elements[this.count] = element;
    this.count++;
  }

  /**
   * Removes and returns the front element of the queue.
   * @return {*} - The removed element.
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.elements[this.frontIndex];
    delete this.elements[this.frontIndex];
    this.frontIndex++;
    return result;
  }

  /**
   * Returns the front element of the queue without removing it.
   * @return {*} - The front element of the queue.
   */
  getFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements[this.frontIndex];
  }

  /**
   * Returns the number of elements in the queue.
   * @return {number} - The number of elements in the queue.
   */
  size() {
    return this.count - this.frontIndex;
  }

  /**
   * Checks if the queue is empty.
   * @return {boolean} - `true` if the queue is empty, `false` otherwise.
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Removes all elements from the queue.
   */
  deleteAll() {
    this.elements = {};
    this.count = 0;
    this.frontIndex = 0;
  }

  /**
   * Returns a string representation of the queue.
   * @return {string} - The string representation of the queue.
   */
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.elements[this.frontIndex]}`;
    for (let i = this.frontIndex + 1; i < this.count; i++) {
      const elementString = `${this.elements[i]}`;
      objString = `${objString}, ${elementString}`;
    }
    return objString;
  }
}

module.exports = { Queue };

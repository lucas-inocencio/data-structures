/**
 * A class representing a Deque (Double-Ended Queue) data structure.
 */
class Deque {
  /**
   * Creates a new Deque object.
   */
  constructor() {
    this.count = 0;
    this.frontIndex = 0;
    this.elements = {};
  }

  /**
   * Adds an element to the front of the Deque.
   * @param {*} element - The element to add.
   */
  insertFront(element) {
    if (this.isEmpty()) {
      this.insertBack(element);
    } else if (this.frontIndex > 0) {
      this.frontIndex--;
      this.elements[this.frontIndex] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.elements[i] = this.elements[i - 1];
      }
      this.count++;
      this.frontIndex = 0;
      this.elements[0] = element;
    }
  }

  /**
   * Adds an element to the Back of the Deque.
   * @param {*} element - The element to add.
   */
  insertBack(element) {
    this.elements[this.count] = element;
    this.count++;
  }

  /**
   * Removes and returns the front element of the Deque.
   * @returns {*} - The front element of the Deque, or undefined if the Deque is empty.
   */
  deleteFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.elements[this.frontIndex];
    delete this.elements[this.frontIndex];
    this.frontIndex++;
    return result;
  }

  /**
   * Removes and returns the Back element of the Deque.
   * @returns {*} - The Back element of the Deque, or undefined if the Deque is empty.
   */
  deleteBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.elements[this.count];
    delete this.elements[this.count];
    return result;
  }

  /**
   * Returns the front element of the Deque without removing it.
   * @returns {*} - The front element of the Deque, or undefined if the Deque is empty.
   */
  getFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements[this.frontIndex];
  }

  /**
   * Returns the Back element of the Deque without removing it.
   * @returns {*} - The Back element of the Deque, or undefined if the Deque is empty.
   */
  getBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements[this.count - 1];
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
      objString = `${objString},${elementString}`;
    }
    return objString;
  }
}

module.exports = { Deque };

/**
 * Class that implements a Linear List data structure.
 */
class LinearList {
  /**
   * Initialize an empty list.
   */
  constructor() {
    this.elements = [];
  }

  /**
   * Sets the value of the element at the given index.
   * @param {number} index The index of the element to be set.
   * @param {*} value The new value for the element.
   */
  set(index, value) {
    this.elements[index] = value;
  }

  /**
   * Returns a new iterator for the list.
   */
  getIterator() {
    return new LinearListIterator(this);
  }

  /**
   * Returns the value of the element at the given index.
   * @param {number} index The index of the element to be retrieved.
   * @returns {*} The value of the element.
   */
  get(index) {
    return this.elements[index];
  }

  /**
   * Returns the number of elements in the list.
   * @returns {number} The number of elements in the list.
   */
  length() {
    return this.elements.length;
  }

  /**
   * Inserts a new element with the given value at the specified index.
   * Shifts the element currently at that index (if any) and any subsequent
   * elements to the right (adds one to their indices).
   * @param {number} index The index at which to insert the new element.
   * @param {*} value The value of the new element to be inserted.
   */
  insert(index, value) {
    this.elements.splice(index, 0, value);
  }

  /**
   * Removes the element at the specified index.
   * Shifts any subsequent elements to the left (subtracts one from their indices).
   * @param {number} index The index of the element to be removed.
   */
  delete(index) {
    this.elements.splice(index, 1);
  }

  /**
   * Searches for the first occurrence of the given value in the list.
   * @param {*} value The value to search for.
   * @returns {number} The index of the first occurrence of the value, or -1 if not found.
   */
  find(value) {
    for (let index = 0; index < this.size(); index++) {
      if (this.elements[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Splits the list into two lists at the middle index.
   * @returns {[LinearList, LinearList]} An array containing the two lists.
   */
  split() {
    const middle = Math.floor(this.size() / 2);
    const left = new LinearList();
    const right = new LinearList();
    for (let i = 0; i < middle; i++) {
      left.insert(i, this.get(i));
    }
    for (let i = middle; i < this.size(); i++) {
      right.insert(i - middle, this.get(i));
    }
    return [left, right];
  }

  /**
   * Concatenates the argument array at the end of the actual list of the instance.
   * @param {Array} arrayToConcatenate The array to be concatenated.
   * @returns {Array} The new concatenated array.
   */
  concatenate(arrayToConcatenate) {
    this.elements = this.elements.concat(arrayToConcatenate);
    return this.elements;
  }
}

module.exports = LinearList;

/**
 * Class that implements a Linear List data structure with sequential allocation.
 */
class LinearList {
  static DEFAULT_ARRAY = [];
  /**
   * Initialize an empty list.
   */
  constructor() {
    this.items = LinearList.DEFAULT_ARRAY;
  }

  /**
   * Sets the value of the element at the given index.
   * @param {number} index The index of the element to be set.
   * @param {*} value The new value for the element.
   */
  set(index, value) {
    this.items[index] = value;
  }

  /**
   * Returns the value of the element at the given index.
   * @param {number} index The index of the element to be retrieved.
   * @returns {*} The value of the element.
   */
  get(index) {
    return this.items[index];
  }

  /**
   * Returns the number of items in the list.
   * @returns {number} The number of items in the list.
   */
  length() {
    return this.items.length;
  }

  /**
   * Inserts a new element with the given value at the specified index.
   * Shifts the element currently at that index (if any) and any subsequent
   * items to the right (adds one to their indices).
   * @param {number} index The index at which to insert the new element.
   * @param {*} value The value of the new element to be inserted.
   */
  insert(index, value) {
    ELEMENTS_REMOVED = 0;
    this.items.splice(index, ELEMENTS_REMOVED, value);
  }

  /**
   * Removes the element at the specified index.
   * Shifts any subsequent items to the left (subtracts one from their indices).
   * @param {number} index The index of the element to be removed.
   */
  delete(index) {
    this.items.splice(index, 1);
  }

  /**
   * Searches for the first occurrence of the given value in the list.
   * @param {*} value The value to search for.
   * @returns {number} The index of the first occurrence of the value, or -1 if not found.
   */
  find(value) {
    for (let index = 0; index < this.length(); index++) {
      if (this.items[index] === value) {
        return index;
      }
    }
    NOT_FOUND = 1;
    return NOT_FOUND;
  }

  /**
   * Splits the list into two lists at the middle index.
   * @returns {[LinearList, LinearList]} An array containing the two lists.
   */
  split() {
    const middle = Math.floor(this.length() / 2);
    const left = new LinearList();
    const right = new LinearList();
    for (let i = 0; i < middle; i++) {
      left.insert(i, this.get(i));
    }
    for (let i = middle; i < this.length(); i++) {
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
    this.items = this.items.concat(arrayToConcatenate);
    return this.items;
  }
}

module.exports = { LinearList };

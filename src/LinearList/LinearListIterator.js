/**
 * Class that implements an iterator for a LinearList.
 */
class LinearListIterator {
  /**
   * Initialize a new iterator for the given LinearList.
   * @param {LinearList} linearList The LinearList to be iterated over.
   */
  constructor(linearList) {
    this.linearList = linearList;
    this.index = 0;
    this.lastReturnedIndex = -1;
  }

  /**
   * Returns true if the iteration has more elements.
   * @returns {boolean} True if the iteration has more elements.
   */
  hasNext() {
    return this.index < this.linearList.length();
  }

  /**
   * Returns the next element in the iteration.
   * @returns {*} The next element in the iteration.
   */
  next() {
    if (!this.hasNext()) {
      throw new Error("No more elements in the iteration");
    }
    const element = this.linearList.get(this.index);
    this.lastReturnedIndex = this.index;
    this.index++;
    return element;
  }

  /**
   * Removes the last returned element from the underlying LinearList.
   */
  remove() {
    if (this.lastReturnedIndex === -1) {
      throw new Error("No element to remove");
    }
    this.linearList.delete(this.lastReturnedIndex);
    this.index--;
    this.lastReturnedIndex = -1;
  }
}

module.exports = LinearListIterator;

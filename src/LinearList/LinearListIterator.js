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
    const element = this.linearList.get(this.index);
    this.index++;
    return element;
  }
}

module.exports = LinearListIterator;

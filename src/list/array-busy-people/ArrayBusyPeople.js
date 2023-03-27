/**
 * Class that implements an Array for Busy People data structure.
 */
class ArrayBusyPeople {
  static DEFAULT_VALUE = -1;
  static MAX_LENGTH = 2 ** 8 - 1;

  /**
   * The constructor initializes the main array, index stack, and default value.
   * @param {*} [defaultValue=-1] The default value for each element in the main array.
   * @param {*} [maxLength=255] The maximum length of the main array.
   */
  constructor(
    defaultValue = ArrayBusyPeople.DEFAULT_VALUE,
    maxLength = ArrayBusyPeople.MAX_LENGTH
  ) {
    this.stack = [];
    this.defaultValue = defaultValue;
    this.mainArray = new Array(maxLength);
    this.indexStack = new Array(maxLength);
  }

  /**
   * Sets the value of an element in the main array.
   * @param {number} index The index of the element.
   * @param {*} value The new value for the element.
   */
  set(index, value) {
    if (this.isDefined(index)) {
      this.mainArray[index] = value;
    } else {
      const stackIndex = this.stack.length;
      this.indexStack[index] = stackIndex;
      this.stack.push(index);
      this.mainArray[index] = value;
    }
  }

  /**
   * Gets the value of an element in the main array.
   * @param {number} index The index of the element.
   * @returns The value of the element, or the default value if the element is undefined.
   */
  get(index) {
    return this.isDefined(index) ? this.mainArray[index] : this.defaultValue;
  }

  /**
   * Checks whether an element in the main array is defined.
   * @param {number} index The index of the element.
   * @returns {boolean} True if the element is defined, false otherwise.
   */
  isDefined(index) {
    const defined =
      index < this.mainArray.length &&
      0 <= this.indexStack[index] &&
      this.indexStack[index] <= this.stack.length &&
      this.stack[this.indexStack[index]] === index;

    return defined;
  }
}

module.exports = { ArrayBusyPeople };

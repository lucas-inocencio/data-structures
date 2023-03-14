const assert = require("assert");

/**
 * Provides a set of assertion methods for unit testing.
 */
class Expect {
  /**
   * Constructs an instance of the Expect class.
   * @param {*} valueToTest - The original value to be tested.
   */
  constructor(valueToTest) {
    this.valueToTest = valueToTest;
  }

  /**
   * Asserts that the valueToTest attribute is strictly equal to the expected value.
   * @param {*} expected - The value to compare to.
   */
  toBe(expected) {
    assert.strictEqual(this.valueToTest, expected);
  }

  /**
   * Asserts that the valueToTest value of attribute is equal to the argument.
   * @param {*} expected - The value to compare to.
   */
  toEqual(expected) {
    assert.deepStrictEqual(this.valueToTest, expected);
  }

  /**
   * Asserts that the valueToTest value of attribute is greater than the argument.
   * @param {*} expected - The value to compare to.
   */
  toBeGreaterThan(expected) {
    assert(this.valueToTest > expected);
  }

  /**
   * Asserts that the valueToTest value of attribute is less than the argument.
   * @param {*} expected - The value to compare to.
   */
  toBeLessThan(expected) {
    assert(this.valueToTest < expected);
  }

  /**
   * Asserts that the attribute is defined.
   */
  toBeDefined() {
    assert.notStrictEqual(this.valueToTest, undefined);
  }

  /**
   * Asserts that the attribute is defined.
   */
  toBeUndefined() {
    assert.strictEqual(this.valueToTest, undefined);
  }

  /**
   * Asserts that the function throw a error.
   */
  toThrow(expectedError) {
    try {
      func();
    } catch (error) {
      if (!expectedError) {
        return true;
      } else if (expectedError instanceof Error) {
        return error instanceof expectedError;
      } else if (typeof expectedError === "function") {
        return error instanceof expectedError;
      } else if (typeof expectedError === "string") {
        return error.message === expectedError;
      }
    }

    return false;
  }
}

module.exports = Expect;

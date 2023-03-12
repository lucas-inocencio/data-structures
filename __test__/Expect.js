const assert = require("assert");

/**
 * A class that provides a set of assertion methods for unit testing.
 */
class Expect {
  /**
   * Constructs an instance of the Expect class.
   * @param {*} actual - The original value to be tested.
   */
  constructor(actual) {
    this.actual = actual;
  }

  /**
   * Asserts that the actual attribute is strictly equal to the expected value.
   * @param {*} expected - The value to compare to.
   */
  toBe(expected) {
    assert.strictEqual(this.actual, expected);
  }

  /**
   * Asserts that the actual value of attribute is equal to the argument.
   * @param {*} expected - The value to compare to.
   */
  toEqual(expected) {
    assert.deepStrictEqual(this.actual, expected);
  }

  /**
   * Asserts that the actual value of attribute is greater than the argument.
   * @param {*} expected - The value to compare to.
   */
  toBeGreaterThan(expected) {
    assert(this.actual > expected);
  }

  /**
   * Asserts that the actual value of attribute is less than the argument.
   * @param {*} expected - The value to compare to.
   */
  toBeLessThan(expected) {
    assert(this.actual < expected);
  }

  /**
   * Asserts that the attribute is defined.
   */
  toBeDefined() {
    assert.notStrictEqual(this.actual, undefined);
  }
}

/**
 * Returns a new instance of the Expect class to be tested.
 * @param {*} actual - The value to be tested.
 * @returns {Expect} A new instance of the Expect class.
 */
function expect(actual) {
  return new Expect(actual);
}

/**
 * Describes a test suite.
 * @param {string} message - A description of the test suite.
 * @param {function} testFunc - A function that contains test cases to run.
 */
function describe(message, testFunc) {
  console.log("Describe: " + message);
  testFunc();
}

/**
 * Runs a single test case.
 * @param {string} testName - The name of the test case.
 * @param {function} testFunc - The function that contains the test case.
 */
function it(testName, testFunc) {
  try {
    testFunc();
    console.log(`✓ ${testName}`);
  } catch (error) {
    console.log(`✕ ${testName}: ${error}`);
  }
}

module.exports = { Expect, describe, beforeEach, it, expect};

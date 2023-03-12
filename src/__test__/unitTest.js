const Expect = require("./Expect.js");

/**
 * Returns a new instance of the Expect class to be tested.
 * @param {*} valueToTest - The value to be tested.
 * @returns {Expect} A new instance of the Expect class.
 */
function expect(valueToTest) {
  return new Expect(valueToTest);
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

module.exports = { expect, describe, it };

/**
 * 
 * Class that implements unit tests.
 * @class Expect
 */
class Expect {

    /**
     * Assigns the argument to a attribute.
     * @param {*} actual original value to be tested.
     */
    constructor(actual) {
        this.actual = actual;
    }

    /**
     * Compare the actual attribute object is same to the argument.
     * @param {*} expected Value to be compared.
     */
    toBe(expected) {
        return assert(this.actual === expected);
    }

    /**
     * Compare the actual value of attribute is equal to the argument.
     * @param {*} expected Value to be compared.
     */
    toEqual(expected) {
        return assert(deepEqual(this.actual, expected));
    }
    
    /**
     * Compare the actual value of attribute is greater than the argument.
     * @param {*} expected value to be compared.
     */
    toBeGreaterThan(expected) {
        return assert(this.actual > expected);
    }
  
    /**
     * Compare the actual value of attribute is less than the argument.
     * @param {*} expected value to be compared.
     */
    toBeLessThan(expected) {
        return assert(this.actual < expected);
    }
    
    /**
     * Verify if the attribute exist.
     * @returns {*} Return the object if exist.
     */
    toBeDefined() {
        return assert(typeof this.actual !== "undefined");
    }
}


/**
 * Return the an created instance of object of class Expect to be tested.
 * @param {*} expected value to be compared.
 * @returns {*} .
 */
function expect(actual) {
    return new Expect(actual);
}

/**
 * Describe the case test.
 * @param {string} message Just a place notations.
 * @param {function} testFunc Function or expression to be tested.
 */
function describe(message, testFunc) {
    console.log("Describe: " + message);
    testFunc();
}  

/**
 * The unit test itself.
 * @param {string} message Message to display if should do something.
 * @param {function} testFunc Function or expression to be tested.
 */
function it(message, testFunc) {
    try {
        testFunc();
        console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + message);
    } catch (error) {
        console.log('\n');
        console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + message);
        console.error(error);
    }
}

/**
 * Assert if expression is true or object exist throw an error to warning otherwise.
 * @param {boolean} isTrue
 */
function assert(isTrue) {
    if (isTrue) {
        return true
    } else if (!isTrue) {
        throw new Error();
    } 
}
/**
 * 
 * @param {*} actual
 * @param {*} expected
 * @returns 
 */
function deepEqual(actual, expected) {
    if (actual === expected) {
        return true;
    }
  
    if (actual === null || typeof actual !== "object" ||
        expected === null || typeof expected !== "object") {
        return false;
    }
  
    const keysActual = Object.keys(actual);
    const keysExpected = Object.keys(expected);
  
    if (keysActual.length !== keysExpected.length) {
        return false;
    }
  
    for (let i = 0; i < keysActual.length; i++) {
        const key = keysActual[i];
  
        if (!b.hasOwnProperty(key) || !deepEqual(actual[key], expected[key])) {
            return false;
        }
    }
  
    return true;
}

module.exports = {Expect, expect, it, assert, describe};

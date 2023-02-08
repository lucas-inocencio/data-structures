/**
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
     * Compare the actual value of attribute is equal to the argument.
     * @param {*} expected Value to be compared.
     */
    toBe(expected) {
        it('should pass', () => {
            assert(this.actual === expected);
        });
    }

    toEqual(expected) {
        it('should pass', () => {
            assert(this.actual == expected);
        });
    }
    
    /**
     * Compare the actual value of attribute is greater than the argument.
     * @param {*} expected value to be compared.
     */
    toBeGreaterThan(expected) {
        it('should pass', () => {
            assert(this.actual > expected);
        });
    }
  
    /**
     * Compare the actual value of attribute is less than the argument.
     * @param {*} expected value to be compared.
     */
    toBeLessThan(expected) {
        it('should pass', () => {
            assert(this.actual < expected);
        });
    }
    
    /**
     * Verify if the attribute exist.
     */
    toBeDefined() {
        it('should pass', () => {
            assert(typeof this.actual !== "undefined");
        });
        return this;
    }
}


/**
 * Return the an created instance of object of class Expect to be tested.
 * @param {*} expected value to be compared.
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

module.exports = {Expect, expect, it, assert, describe}

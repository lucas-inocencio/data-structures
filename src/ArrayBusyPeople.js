/**
 * Class that implements an Array for Busy People data structure.
 */

class ArrayBusyPeople {

    /**
     * The command saves the value and sets the stack empty.
     * @param {int} value The default value for the each element in the main_array.
     * @param {int} length The max length of the main_array.
     */
    constructor(value = -1, length = 2**8) {
        this.main_array = new Uint32Array(length);
        this.aux_array = new Uint32Array(length);
        this.stack = [];
        this.std_value = value;
    }

    /**
     * The command test whether main_array[index] is already defined.
     * If not, define it. If it was defined, set main_array[index] ← value.
     * @param {int} index Index of the element.
     * @param {int} value New value for the element.
     */
    set(index, value) {
        if (this.isDefined(index)) this.main_array[index] = value;
        else {
            this.aux_array[index] = this.stack.length;
            this.stack.push(index);
            this.main_array[index] = value;
        }
    }

    /**
     * The command test whether main_array[index] is defined.
     * @param {int} index Index of element to be returned. 
     * @returns If so, it returns the element. Otherwise it returns the default value.
     */
    get(index) {
        return (this.isDefined(index) ? this.main_array[index] : this.std_value);
    }

    /**
     * The command verify if element are defined.
     * @param {int} index Index of the element.
     * @returns True if defined, false otherwise.
     */
    isDefined(index) {
        let defined = (index < this.main_array.length) && 
        (0 <= this.aux_array[index]) && 
        (this.aux_array[index] <= this.stack.length) && 
        (this.stack[this.aux_array[index]] == index);

        return defined
    }
}

module.exports = ArrayBusyPeople

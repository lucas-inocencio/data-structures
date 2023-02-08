/**
 * Class that implements an Array for Busy People data structure.
 */

class ArrayBusyPeople {

    /**
     * The command saves the value and sets the stack empty.
     * @param {int} value the default value for the each element in the main_array.
     * @param {int} length the max length of the main_array.
     */
    constructor(value = -1, length = 2**8) {
        this.main_array = new Uint32Array(length);
        this.aux_array = new Uint32Array(length);
        this.stack = [];
        this.value = value;
    }

    /**
     * The command test whether main_array[position] is already defined.
     * If not, define it. If it was defined, set main_array[position] ← value.
     * @param {int} position position of the element.
     * @param {int} value new value for the element.
     */
    set(position, value) {
        if (this.isDefined(position)) this.main_array[position] = value;
        else {
            this.aux_array[position] = this.stack.length;
            this.stack.push(position);
            this.main_array[position] = value;
        }
    }

    /**
     * The command test whether main_array[position] is defined.
     * @param {int} position 
     * @returns If so, it returns the element. Otherwise it returns the default value.
     */
    get(position) {
        return (this.isDefined(position) ? this.main_array[position] : this.value);
    }

    /**
     * The command verify if element are defined.
     * @param {int} position position of the element.
     * @returns true if defined, false otherwise.
     */
    isDefined(position) {
        let defined = (position < this.main_array.length) && 
        (0 <= this.aux_array[position]) && 
        (this.aux_array[position] <= this.stack.length) && 
        (this.stack[this.aux_array[position]] == position);

        return defined
    }
}

module.exports = ArrayBusyPeople

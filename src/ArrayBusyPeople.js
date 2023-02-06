/**
 * Class that implements an Array for Busy People data structure.
 * @class ArrayBusyPeople
 */

class ArrayBusyPeople {

    /**
     * The command saves the value of std_value and sets the stack empty.
     * @constructor
     * @param {*} std_value the default value for the each element in the main_array.
     * @param {*} max_length the max length of the main_array.
     */
    constructor(std_value = -1, max_length = 2**8) {
        this.main_array = new Uint32Array(max_length);
        this.aux_array = new Uint32Array(max_length);
        this.stack = [];
        this.std_value = std_value;
    }

    /**
     * The command test whether main_array[position] is already defined.
     * If not, define it. If it was defined, set main_array[position] ← value.
     * @method set
     * @param {*} position position of the element.
     * @param {*} value new value for the element.
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
     * @param {*} position 
     * @returns If so, it returns the element. Otherwise it returns the default value.
     */
    get(position) {
        return (this.isDefined(position) ? this.main_array[position] : this.std_value);
    }

    /**
     * The command verify if element are defined.
     * @param {*} position position of the element.
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

module.export = {ArrayBusyPeople}

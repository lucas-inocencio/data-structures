/**
 * Class that implements a Linear List data structure.
 */

class LinearList {

    /**
     * Initialize an empty list.
     */
    constructor() {
        this.list = [];
    }

    /**
     * Sets the Ith element to x.
     * @param {int} index Index of the existed element to be replaced.
     * @param {*} value New value for the element.
     */
    set(index, value) {
        this.list[index] = value;
    }

    /**
     * Get the Ith elemnt.
     * @param {int} index Index of the element.
     * @returns {*} Returns element Ai.
     */
    get(index) {
        return this.list[index];
    }

    /**
     * Return the length of the list.
     * @returns {int} Return the length of the list.
     */
    length() {
        return this.list.length;
    }

    /**
     * Insert element x just prior to element Ai 
     * (causing the index of all subsequentitems to be increased by one).
     * @param {int} index index to be inserted before.
     * @param {*} value Value to be added to the list.
     */
    insert(index, value) {
        this.list.splice(index, 0, value);
    }

    /**
     * Delete the ith element 
     * (causing the indices of all subsequent elements to be decreased by 1).
     * @param {int} index Index of element to be removed.
     */
    delete(index) {
        delete this.list[index];
    }

    /**
     * Searching the list for an item.
     * @param {*} value Value to be finded.
     * @returns {int} Returns the index of the item, false otherwise.
     */
    find(value) {
        for (let index = 0; index < this.length(); index++) {
            if (this.list[index] == value) {
                return index
            }
        }

        return false
    }

    /**
     * Split the list in two based on middle.
     * @returns {Array} Returns the two list spliteds.
     */
    split() {
        const list_right = this.list.splice(this.length()/2, this.length());
        return (this.list, list_right)
    }

    /**
     * Concatenate the argument list at right of the actual list of the instance.
     * @param {Array} list Listed to be concatenated.
     */
    concatenate(list) {
        this.list.concat(list);
    }
}

module.exports = LinearList

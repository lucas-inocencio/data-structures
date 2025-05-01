/*
 * BinaryHeap class implementation
 * This class implements a binary heap data structure.
 * It supports insertion, extraction of the maximum element,
 * and other heap operations.   
 */
class BinaryHeap {
  constructor() {
    this.heap = [];
  }
    /*
   * Inserts a new value into the binary heap.
   * @param {number} value - The value to be inserted.
   */
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

    /*
     * Bubbles up the last element in the heap to maintain the heap property.
     */
  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element <= parent) break;

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = element;
  }
  /*
   * Extracts the maximum value from the binary heap.
   * @return {number} - The maximum value in the heap.
   */
  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return max;
  }

    /*
     * Sinks down the root element to maintain the heap property.
     */
sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let leftChild, rightChild;
    let swap = null;

    if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
        swap = leftChildIndex;
        }
    }

    if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
        (swap === null && rightChild > element) ||
        (swap !== null && rightChild > leftChild)
        ) {
        swap = rightChildIndex;
        }
    }

    if (swap === null) break;

    this.heap[index] = this.heap[swap];
    index = swap;
    }

    this.heap[index] = element;
}

    /*
     * Returns the number of elements in the binary heap.
        * @return {number} - The number of elements in the heap.
        * */
    size() {
        return this.heap.length;
    }

    /*
     * Returns the maximum value in the binary heap without removing it.
     * @return {number} - The maximum value in the heap.
     */
    isEmpty() {
        return this.heap.length === 0;
    }

    /*
     * Returns the maximum value in the binary heap without removing it.
     * @return {number} - The maximum value in the heap.
     */
    peek() {
        return this.isEmpty() ? undefined : this.heap[0];
    }

    /*
     * Returns the string representation of the binary heap.
     * @return {string} - The string representation of the heap.
     */
    clear() {
        this.heap = [];
    }

    /*
     * Returns the string representation of the binary heap.
     * @return {string} - The string representation of the heap.
     */
    toString() {
        return this.heap.join(", ");
    }
}

module.exports = { BinaryHeap };
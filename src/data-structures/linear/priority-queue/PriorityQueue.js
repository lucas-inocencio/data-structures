/*
 * A priority queue data structure implemented using a binary heap.
 * The priority queue allows elements to be added with a priority, and the 
 * element with the highest priority is removed first.
 * 
 * The implementation uses a binary heap to efficiently manage the elements.
 * The binary heap is a complete binary tree where each node is less than or equal to its children.
 * This ensures that the element with the highest priority is always at the root of the tree.
 * 
 * The priority queue supports the following operations:
 * - `enqueue`: Adds an element to the queue with a specified priority.
 * - `dequeue`: Removes and returns the element with the highest priority.
 * - `peek`: Returns the element with the highest priority without removing it.
 * - `isEmpty`: Checks if the queue is empty.
 * - `size`: Returns the number of elements in the queue.
 * - `clear`: Removes all elements from the queue.
 * - `toString`: Returns a string representation of the queue.
 * - `print`: Prints the elements of the queue.
 * 
 * The priority queue is implemented using a binary heap, which is a complete binary tree where each node is less than or equal to its children.
*/
class PriorityQueue {
  /*
    * Creates a new PriorityQueue instance.
    * The priority queue is implemented using a binary heap.
    * The elements are stored in an array, where the first element is at index 0.
    * The parent of an element at index i is at index Math.floor((i - 1) / 2).
    * The left child of an element at index i is at index 2 * i + 1.
    * The right child of an element at index i is at index 2 * i + 2.
  */
    constructor() {
    this.elements = [];
  }

    /**
     * Adds an element to the queue with a specified priority.
     * @param {*} element - The element to be added.
     * @param {number} priority - The priority of the element.
     */
        enqueue(element, priority) {
        const newNode = { element, priority };
        this.elements.push(newNode);
        this.bubbleUp(this.elements.length - 1);
        }
}
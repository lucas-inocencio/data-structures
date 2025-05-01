/*
 * PriorityQueue class implementation
 * This class implements a priority queue using an array.
 * Elements are stored in the queue based on their priority.
 * Lower priority numbers indicate higher priority.
 */
class PriorityQueue {
  /*
   * Creates a new PriorityQueue instance.
   */
  constructor() {
    this.items = [];
  }
  /*
   * Adds an element to the priority queue with a given priority.
   * @param {*} element - The element to be added.
   * @param {number} priority - The priority of the element.
   */
  enqueue(element, priority) {
    const queueElement = { element, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }
  /*
   * Removes and returns the element with the highest priority (lowest priority number).
   * @return {*} - The removed element.
   */
  dequeue() {
    return this.items.shift();
  }
  /*
   * Returns the front element of the priority queue without removing it.
   * @return {*} - The front element of the priority queue.
   */
  isEmpty() {
    return this.items.length === 0;
  }
  /*
   * Returns the number of elements in the priority queue.
   * @return {number} - The number of elements in the priority queue.
   */
  size() {
    return this.items.length;
  }
  /*
   * Returns the front element of the priority queue without removing it.
   * @return {*} - The front element of the priority queue.
   */
  front() {
    return this.isEmpty() ? undefined : this.items[0];
  }
}

module.exports = { PriorityQueue };
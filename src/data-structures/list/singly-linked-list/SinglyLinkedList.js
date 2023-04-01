const { SinglyLinkedListNode } = require("./SinglyLinkedListNode.js");

/**
 * Class that implement a singly linked list data structure.
 */
class SinglyLinkedList {
  /**
   * Initializa an empty singly linked list.
   */
  constructor() {
    this.count = 0;
    this.head = null;
  }

  /**
   * Get the element at the specified index.
   * @param {number} index - The index of the element to get.
   * @returns {SinglyLinkedList} The node at the index if exist, undefined otherwise.
   */
  get(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  /**
   * Set the value of the elemnent at the specified index.
   * @param {number} index - The index of the element to set.
   * @param {*} value - The new value to be assign.
   * @returns nothing.
   */
  set(index, value) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      node.value = value;
    }
  }

  /**
   * @returns The current size of this Linked List.
   */
  size() {
    return this.count;
  }

  /**
   * Insert a new node in the start of the linked list with specified value.
   * @param {number} value - The value of the new node.
   * @returns nothing.
   */
  insert(value) {
    const node = new SinglyLinkedListNode(value);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  /**
   * Delete a node in the specified index.
   * @param {number} index - The index of the node.
   * @returns nothing.
   */
  delete(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.count--;
    }
  }
}

module.exports = { SinglyLinkedList };

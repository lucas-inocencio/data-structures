const SinglyLinkedListNode = require("./SinglyLinkedListNode.js");

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
   * 
   */
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
    let node = this.head;
    for (let i = 0; i < index && node != null; i++) {
    node = node.next;
    }
    return node;
    }
    return undefined;
    }
    

  /**
   * 
   */
  set() {

  }

  /**
   * 
   */
  length() {

  }

  /**
   * 
   */
  push(element) {
    const node = new SinglyLinkedListNode(element);
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
   * 
   */
  removeAt(index) {
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
      return current.element;
    }
    return undefined;
  }
    

  /**
   * 
   */
  find() {

  }

  /**
   * 
   */
  () {

  }
}

module.exports = SinglyLinkedList;

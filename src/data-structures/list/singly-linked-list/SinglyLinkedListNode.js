/**
 * Class that implement a node of singly linked list data structure.
 */
class SinglyLinkedListNode {
  /**
   * Iniatializa an Node with specified value.
   * @param {*} value 
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = { SinglyLinkedListNode };

/**
 * Represents a node in a binary tree.
 * @class BinaryTreeNode
 */
class BinaryTreeNode {
  /**
   * Creates an instance of BinaryTreeNode.
   * @constructor
   * @param {*} value - The value stored in the node.
   * @param {BinaryTreeNode} [left=null] - The left child node.
   * @param {BinaryTreeNode} [right=null] - The right child node.
   */
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  /**
   * Returns a string representation of the node's value.
   * @returns {string} The string representation of the node's value.
   */
  toString() {
    if (typeof this.value === "string") {
      return this.value;
    } else {
      return this.value.toString();
    }
  }
}

module.exports = { BinaryTreeNode };

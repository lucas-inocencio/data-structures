const { BinaryTreeNode } = require("./BinaryTreeNode");

/**
 * Represents a binary tree data structure.
 *
 * @class BinaryTree
 */
class BinaryTree {
  /**
   * Creates an instance of BinaryTree.
   * @constructor
   * @param {BinaryTreeNode} [node=null] - The root node of the binary tree.
   */
  constructor(node = null) {
    this.root = node;
  }

  /**
   * Returns a generator that performs a preorder traversal of the binary tree.
   * @generator
   * @param {BinaryTreeNode} [node=this.root] - The node to start the traversal from.
   * @yields {*} The value of each visited node in preorder.
   */
  *preorder(node = this.root) {
    if (node) {
      yield node.value;
      yield* this.preorder(node.left);
      yield* this.preorder(node.right);
    }
  }

  /**
   * Returns a generator that performs an inorder traversal of the binary tree.
   * @generator
   * @param {BinaryTreeNode} [node=this.root] - The node to start the traversal from.
   * @yields {*} The value of each visited node in inorder.
   */
  *inorder(node = this.root) {
    if (node) {
      yield* this.inorder(node.left);
      yield node.value;
      yield* this.inorder(node.right);
    }
  }

  /**
   * Returns a generator that performs a postorder traversal of the binary tree.
   * @generator
   * @param {BinaryTreeNode} [node=this.root] - The node to start the traversal from.
   * @yields {*} The value of each visited node in postorder.
   */
  *postorder(node = this.root) {
    if (node) {
      yield* this.postorder(node.left);
      yield* this.postorder(node.right);
      yield node.value;
    }
  }
}

module.exports = { BinaryTree };

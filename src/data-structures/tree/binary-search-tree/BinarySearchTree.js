const { BinaryTree, BinaryTreeNode } = require("../binary-tree/BinaryTree");

class BinarySearchTreeNode extends BinaryTreeNode {
  constructor()
}

class BinarySearchTree extends BinaryTree {
  constructor(key, value, left = null, right = null) {
    this.key = key;
    this.value = value; // this node's data
    this.left = left; // left child reference
    this.right = right; // right child reference
  }

  insert(x, v) {
    let p = this;
    if (p == null)
      // fell out of the tree?
      p = new BinarySearchTree(x, v, null, null); // ... create new leaf here
    else if (x < p.key)
      if (p.left == null)
        // x is smaller?
        p.left = new BinarySearchTree(x, v, null, null);
      else p.left = p.left.insert(x, v);
    // ...insert left
    else if (x > p.key)
      if (p.right == null)
        // x is larger?
        p.right = new BinarySearchTree(x, v, null, null);
      else p.right = p.right.insert(x, v);
    // ...insert right
    else throw "Duplicate Key: " + x; // x is equal ...duplicate!
    return p; // ref to current node
  }

  findReplacement() {
    let r = p.right; // find p's replacement node
    while (r.left != null) r = r.left; // go to the leftmost node
    return r; // go to the leftmost node
  }

  delete(x) {
    let p = this;
    if (p == null)
      // fell out of tree?
      throw "not found: " + x; // ...error - no such key
    else {
      if (x < p.key)
        // look in left subtree
        p.left = p.left.delete(x);
      else if (x > p.key)
        // look in right subtree
        p.right = p.right.delete(x); // found it!
      else if (p.left == null || p.right == null) {
        // either child empty?
        if (p.left == null) return p.right; // return replacement node
        else return p.left;
      } else {
        // both children present
        r = p.findReplacement(); // find replacement node
        p = r; // copy its contents to p
        p.right = p.right.delete(r.key); // delete the replacement
      }
    }
    return p;
  }

  find(x) {
    let p = this;
    if (p == null) return null; // unsuccessful search
    else if (x < p.key)
      // x is smaller?
      return p.left.find(x); // ... search left
    else if (x > p.key)
      // x is larger?
      return p.right.find(x); // ... search right
    else return p.value; // successful search
  }
}

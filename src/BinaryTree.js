//
class BinaryTree {

    // Functions to be implemented
    // init()
    // push(i)
    // pop()

    //
    constructor(node = null) {
      this.node = node
    }

    //
    *preorder() {
      if (this.node) {
        yield this;
        yield* this.node.left.preorder();
        yield* this.node.right.preorder();
      }

    }

    //    
    *inorder() {
      if (this.node) {
        yield* this.node.left.inorder();
        yield this;
        yield* this.node.right.inorder();
      }

    }

    //
    *postorder() {
      if (this.node) {
        yield* this.node.left.postorder();
        yield* this.node.right.postorder();
        yield this;
      }

    }

}

//
function BT(...args) {
    if (args.length == 0) return new BinaryTree ()
    return new BinaryTree(new BinaryTreeNode(...args))
}

//
console.log(BT)
//
class BinaryTreeNode {

    // Functions to be implemented
    // init()
    // push(i)
    // pop()

    //
    constructor(entry,left,right) {
      [this.entry,this.left,this.right] = [entry,left,right]
    }

    //
    toString() {
      if (this.entry instanceof String) return this.entry;
      return this.entry.toString()
    }

}
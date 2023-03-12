class AVLTree {

    constructor(key, value, left = null, right = null, height) {
        this.key = key
        this.value = value  // this node's data
        this.left = left    // left child reference
        this.right = right   // right child reference
        this.height = height
    }

    rotateRight() {
        let p = this
        let q = p.left;
        p.left = q.right;
        q.right = p;
        return q;
    }

    rotateLeft() {
        let p = this
        let q = p.right;
        p.right = q.left;
        q.left = p;
        return q;
    }

    rotateLeftRight() {
        let p = this
        p.left = p.left.rotateLeft();
        return p.rotateRight();
    }

    rotateRightLeft() {
        let p = this
        p.right = p.right.rotateRight();
        return p.rotateLeft();
    }

    height() { // height of subtree (-1 if null)
        return (this == null ? -1 : this.height); 
    }

    updateHeight() { // update height from children
        this.height = 1 + Math.max((this.left == null ? -1 : this.left.height), (this.right == null ? -1 : this.right.height));
    }

    balanceFactor() { // compute balance factor
        return (this.right == null ? -1 : this.right.height) - (this.left == null ? -1 : this.left.height);
    }

    insert(x, v) {
        let p = this
        if (p == null) // fell out of tree; create node
            p = new AVLTree(x, v, null, null, 0);
        else if (x < p.key)  // x is smaller - insert left
            if (p.left == null) p.left = new AVLTree(x, v, null, null, 0)
            else p.left = p.left.insert(x, v); // ...insert left
        else if (x > p.key)  // x is larger - insert right
            if (p.right == null) p.right = new AVLTree(x, v, null, null, 0)
            else p.right = p.right.insert(x, v); // ...insert right
        else throw "Duplicate Key: " + x; // key already in the tree?
        return p.rebalance(); // rebalance if needed
    }

    rebalance() {
        let p = this
        if (p == null) return p; // null - nothing to do
        if (p.balanceFactor() < -1) { // too heavy on the left?
            if ((p.left.left == null ? -1 : p.left.left.height) >= (p.left.right == null ? -1 : p.left.right.height))  // left-left heavy?
                p = p.rotateRight(); // fix with single rotation
            else // left-right heavy?
                p = p.rotateLeftRight(); // fix with double rotation
        } 
        else if (p.balanceFactor() > +1) { // too heavy on the right?
            if ((p.right.right == null ? -1 : p.right.right.height) >= (p.right.left == null ? -1 : p.right.left.height))  // right-right?
                p = p.rotateLeft(); // fix with single rotation
            else // right-left heavy?
                p = p.rotateRightLeft(); // fix with double rotation
        }
        p.updateHeight(); // update p's height
        return p;
    }

    delete(x) {
        let p = this
        if (p == null) // fell out of tree?
            throw "not found: " + x; // ...error - no such key
        else {
            if (x < p.key) // look in left subtree
                p.left = p.left.delete(x);
            else if (x > p.key) // look in right subtree
                p.right = p.right.delete(x); // found it!
            else if (p.left == null || p.right == null) { // either child empty?
                if (p.left == null) return p.right; // return replacement node
                else return p.left;
            }
            else { // both children present
                r = p.findReplacement(); // find replacement node
                p = r; // copy its contents to p
                p.right = p.right.delete(r.key); // delete the replacement
            }
        }
        return p.rebalance();
    }
}
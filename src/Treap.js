class Treap {

    constructor(key, value, priority = Math.random(), left = null, right = null) {
        this.key = key
        this.priority = priority
        this.value = value  // this node's data
        this.left = left    // left child reference
        this.right = right   // right child reference
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

    insert(x, v) {
        let p = this
        if (p == null || p.key == null) // fell out of the tree?
            p = new Treap(x, v, Math.random()); // ... create new leaf here
        else if (x < p.key) // x is smaller?
            if (p.left == null) p.left = new Treap(x, v, Math.random())
            else {
                p.left = p.left.insert(x, v); // ...insert left
                if (p.left.priority < p.priority) p = p.rotateRight()
            }
        else if (x > p.key) // x is larger?
            if (p.right == null) p.right = new Treap(x, v, Math.random())
            else { 
                p.right = p.right.insert(x, v); // ...insert right
                if (p.right.priority < p.priority) p = p.rotateLeft()
            }
        else throw "Duplicate Key: " + x; // x is equal ...duplicate!
        return p // ref to current node
    }

    delete(x) {
        let p = this
        if (p == null) throw `Key ${x} doesn't exist`
        else if (p.key == x) {
            if (p.left && p.right) {
                if (p.left.priority < p.right.priority) {
                    p.rotateRight();
                    return p.right.delete(x);
                } 
                else {
                    p.rotateLeft();
                    return p.left.delete(x);
                }
            } 
            else {
                if (p.left) {
                    p.rotateRight();
                    return p.right.delete(x);
                } 
                else if (p.right) {
                    p.rotateLeft();
                    return p.left.delete(x);
                }
                else return p = null;
            }
        }
        else if (p.key > x) p.left.delete(x)
        else p.right.delete(x)
    }

    find(x) {
        let p = this;
        if (p == null) return null; // unsuccessful search
        else if (x < p.key) // x is smaller?
            return p.left.find(x); // ... search left
        else if (x > p.key) // x is larger?
            return p.right.find(x); // ... search right
        else return p.value; // successful search
    }
}
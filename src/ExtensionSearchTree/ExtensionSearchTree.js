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
            p = new ExtensionSearchTree(x, v, Math.random()); // ... create new leaf here
        else if (x < p.key) // x is smaller?
            if (p.left == null) p.left = new ExtensionSearchTree(x, v, Math.random())
            else {
                p.left = p.left.insert(x, v); // ...insert left
                if (p.left.priority < p.priority) p = p.rotateRight()
            }
        else if (x > p.key) // x is larger?
            if (p.right == null) p.right = new ExtensionSearchTree(x, v, Math.random())
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

class ExtensionSearchTree extends Treap {

    constructor (...args) {
        super(...args);
    }

    kthSmallest(k) {
        let val;
        function inorder(root) {
            if (root == null) return;
            inorder(root.left);
            k--;
            if (k == 0) {
                val = root.key;
                return;
            }
            inorder(root.right);
        }
        inorder(this);
        return val;
    }

    range(low, high) {
        if (this == null) return 0;
        let sum = (this.key >= low && this.key <= high ? this.key : 0);
        if (this.key >= low) sum += (this.left != null ? this.left.range(low, high) : 0)
        if (this.key <= high) sum += (this.right != null ? this.right.range(low, high) : 0)
        return sum
    }

    auxiliarSplit(x, t2 = null, t3 = null) {
        if (this == null) return
        else {
            if (x <= this.key) {
                if (t2 == null) t2 = new ExtensionSearchTree(this.key, this.value)
                else t2 = t2.insert(this.key, this.value)
            }
            else if (x > this.key) {
                if (t3 == null) t3 = new ExtensionSearchTree(this.key, this.value)
                else t3 = t3.insert(this.key, this.value)
            }
            if (this.left != null) return this.left.split(x, t2, t3)
            if (this.right != null) return this.right.split(x, t2, t3)
        }
        return [t2, t3]
    }

    split(x) {
        let t1 = this.auxiliarSplit(x)
        return t1
    }

    auxiliarMerge(t1, t2) {
        if (t2 == null) return
        else {
            if (t2.left != null) {
                t1 = t1.insert(t2.left.key, t2.left.value)
                t1.auxiliarMerge(t1, t2.left)
            }
            if (t2.right != null) {
                t1 = t1.insert(t2.right.key, t2.right.value)
                t1.auxiliarMerge(t1, t2.right)
            }
        }
    }

    merge(t1, t2) {
        if (t1 == null) return t2
        else t1.auxiliarMerge(t1, t2)
        return t1
    }
}

avl = new ExtensionSearchTree(5, "a")
avl = avl.insert(1, "d")
avl = avl.insert(4, "b")
avl = avl.insert(3, "e")
avl = avl.insert(2, "c")

abc = new ExtensionSearchTree(15, "a")
abc = abc.insert(11, "d")
abc = abc.insert(14, "b")
abc = abc.insert(13, "e")
abc = abc.insert(12, "c")

console.log(avl.split(3))
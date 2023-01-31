class SplayTree {

    constructor (key, value, left = null, right = null) {
        this.key = key
        this.value = value
        this.left = left
        this.right = right
    }

    zig() {
        let p = this;
        let q = p.left;
        p.left = q.right;
        q.right = p;
        return q
    }

    zag() {
        let p = this;
        let q = p.right;
        p.right = q.left;
        q.left = p;
        return q
    }

    // Let T be a splay tree. The operation T.splay(p) rotates a node p to the root
    splay(x) {
        let p = this;
        // Apply a standard tree descent to find 𝑥𝑥 in the tree
        // Let 𝑝 be the node containing 𝑥 (if present) or the last node visited before falling out
        if (p == null || x == p.key) return p;
        // Apply zig-zig, zig-zag rotations until almost to root
        else if (x < p.key) {
            if (p.left == null) return p;
            else if (x < p.left.key) {
                // Case 1: (Zig-zig) p is the left-left or right-right grandchild of some node
                if (p.left.left != null) {
                    p.left.left = p.left.left.splay(x);
                    p = p.zig();
                }
            }
            else if (x > p.left.key) {
                // Case 2: (Zig-zag) p is the left-right or right-left grandchild of some node
                if (p.left.rigt != null) 
                    p.left.right = p.left.right.splay(x);
                    p.left = p.zag();
            }
            // Case 3: (Zig) p is a child of the root
            return (p.left == null ? p : p.zig());
        }
        else {
            if (p.right == null) return p;
            else if (x < p.right.key) {
                if (p.right.left != null)
                    p.right.left = p.right.left.splay(x);
                    p.right = p.right.zig();
            }
            else if (x > p.right.key) {
                if (p.right.right != null) {
                    p.right.right = p.right.right.splay(x);
                    p = p.zag();
                }
            }
            // Case 4: (End) p is the root – We’re done
            // If needed, apply one final zig rotation to finish things off
            return (p.right == null ? p : p.zag());
        }
    }

    find(x) {
        return this.splay(x).value // T.splay(x). Check whether root contains key
    }

    insert (x, v) {
        let p = this
        if (p == null) p = new SplayTree(x, v)
        else {
            p.splay(x)
            if (p.key == x) throw `Key ${x} already exists`;
            else if (p.key < x) {
                let root = new SplayTree(x, v, p, p.right);
                p = root;
            }
            else {
                let root = new SplayTree(x, v, p.left, p);
                p = root
            }
        }
        return p
    }

    delete(x) {
        let p = this
        p.splay(x) // T.splay(x). Check that 𝑥 is at root (if not, key not found!)
        if (p == null || p.key != x) throw `Key ${x} not found`
        else {
            if (p.left == null) p = p.right // Let 𝐿 and 𝑅 be left and right subtrees. If either is null, return the other
            else if (p.right == null) p = p.left
            else {
                p.right.splay(x) // If both are non-null, do R.splay(x)
                p.right.left = p.left // New root 𝑦 is smallest key in R (so its left child is null)
                p = p.right // Relink trees as shown below
            }
        }
        return p
    }
}
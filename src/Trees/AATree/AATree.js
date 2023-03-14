class AATree {

    // BST init() + every node stores a level number
    constructor (key, level, left, right) {
        [this.key, this.left, this.right, this.level] = [key, left, right, level]
    }

    // BST find algorithm
    find(x) {
        let p = this;
        if (p == nil) throw "not found: " + x; // unsuccessful search
        else if (x < p.key) // x is smaller?
        return p.left.find(x); // ... search left
        else if (x > p.key) // x is larger?
        return p.right.find(x); // ... search right
        else return p; // successful search
    }

    // If p is black and has a red left child, rotate so that the red child is now on the right
    skew() {
        let p = this;
        if (p.left.level == p.level) { // red node to our left?
            let q = p.left; // do a right rotation at p
            p.left = q.right;
            q.right = p;
            return q; // return pointer to new upper node
        }
        else return p; // else, no change needed
    }

    // If p is black and has a right chain of two consecutive red nodes, split this triple, promoting p's right child to the next higher level
    split() {
        let p = this;
        if (p != nil && p.right.right.level == p.level) { // right-right red chain?
            let q = p.right; // do a left rotation at p
            p.right = q.left;
            q.left = p;
            q.level += 1; // promote q to next higher level
            return q; // return pointer to new upper node
        }
        else return p; // else, no change needed
    }

    // Search for the new key and note where we fall out of the tree
    // Insert a new (red) leaf node here (at level 1)
    insert(x) {
        let p = this;
        if (p == nil) // fell out of the tree?
            p = new AATree(x, 1, nil, nil); // ... create a new leaf node here
        else if (x < p.key) // x is smaller?
            p.left = p.left.insert(x); // ...insert left
        else if (x > p.key) // x is larger?
            p.right = p.right.insert(x); // ...insert right
        else
            throw "DuplicateKeyException: " + x; // duplicate key!
        return p.skew().split(); // restructure and return result
    }

    // update p's level
    updateLevel() {
        let p = this;
        let idealLevel = 1 + Math.min(p.left.level, p.right.level); 
        if (p.level > idealLevel) { // p's level is too high?
            p.level = idealLevel; // decrease its level
            if (p.right.level > idealLevel) // p's right child red?
                p.right.level = idealLevel; // ...fix its level as well
        }
        return p
    }

    // Work back towards the root and restructure along the way
    fixupAfterDelete() {
        let p = this;
        p = p.updateLevel(); // update p's level
        p = p.skew(); // skew p
        p.right = p.right.skew(); // ...and p's right child
        p.right.right = p.right.right.skew(); // ...and p's right-right grandchild
        p = p.split(); // split p
        p.right = p.right.split(); // ...and p's (new) right child
        return p;
    }

    // Do an inorder traversal of 𝑇R, visit 𝑟, do an inorder traversal of 𝑇L
    inorderSuccessor() { // find p's replacement node
        let p = this.right; // start in p's right subtree
        while (p.left != nil) p = p.left; // go to the leftmost node
        return p;
    }

    // Do an inorder traversal of 𝑇𝐿, visit 𝑟, do an inorder traversal of 𝑇𝑅
    inorderPredecessor() { // find p's replacement node
        let p = this.left; // start in p's left subtree
        while (p.right != nil) p = p.right; // go to the rightmost node
        return p;
    }

    // Find the node to delete
    // If it is not a leaf, find replacement at the leaf level and delete replacement
    delete(x) {
        let p = this;
        if (p == nil) // fell out of tree?
            throw "KeyNotFoundException: "+x; // ...error - no such key
        else {
            if (x < p.key) // look in left subtree
                p.left = p.left.delete(x);
            else if (x > p.key) // look in right subtree
                p.right = p.right.delete(x);
            else { // found it!
                if (p.left == nil && p.right == nil)// leaf node?
                    return nil; // just unlink the node
                else if (p.left == nil) { // no left child?
                    let r = p.inorderSuccessor(); // get replacement from right
                    p.key = r.key; // copy replacement contents here
                    p.right = p.right.delete(r.key);// delete replacement
                }
                else { // no right child?
                    let r = p.inorderPredecessor();// get replacement from left
                    p.key = r.key; // copy replacement contents here
                    p.left = p.left.delete(r.key); // delete replacement
                }
            }
        return p.fixupAfterDelete(); // fix structure after deletion 
        }
    }
}

var nil;
nil = new AATree('nil', 0, 0);
nil.left = nil.right = nil;

function AA (...keys) {
    let t = nil;
    for (let k of keys) t = t.insert(k)
    return t
}

function fun() {
    let aa = AA ();
    for (let key of [6, 5, 4, 3, 2, 1]) aa = aa.insert(key);
    //for (let key of [2,3,4,5,6]) aa = aa.delete(key);
    return aa
}

console.log(fun());
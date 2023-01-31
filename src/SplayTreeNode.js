class SplayTreeNode{

    
}

class SplayTree{

    constructor (key, value) {
        this.key = key
        this.value = value
        this.left = this.right = null
    }

    zig(){
        let p = this;
        let q = p.left;
        p.left = q.right;
        q.right = p;
    }

    zag(){
        let p = this;
        let q = p.right;
        p.right = q.left;
        q.left = p;
    }

    splay(x){
        let p = this;
        let finalNode = null
        if (p.node.left.key == x) return p.node.zig();
        else if (p.node.right.key == x) return p.node.zag();
        else if (p.node.key == x) return p.node;
        else if (p.node.key > x){
            if (p.node.left.node.left.node.key == x){
                finalNode = p.node.left.node.left
                q = p.node.left
                p.node.zig()
                q.node.zig()
                return finalNode
            }
            else if (p.node.left.node.right.node.key == x){
                finalNode = p.node.left.node.right
                p.node.left = p.node.left.node.zag();
                p.node.zig()
                return finalNode
            }
            else return p.node.left.node.splay(x);
        }
        else if (p.node.key < x){ 
            if (p.node.right.node.left.node.key == x){
                finalNode = p.node.right.node.left
                p.node.right = p.node.right.node.zig();
                p.node.zag()
                return finalNode
            }
            else if (p.node.right.node.right.node.key == x){
                finalNode = p.node.right.node.right
                q = p.node.right
                p.node.zag()
                q.node.zag()
                return finalNode
            } 
            else return p.node.right.node.splay(x);
        }
        else return finalNode;
    }

    find(x){
        return this.node.splay(x).node.value
    }

    insert(x, v){
        let p = this
        if (p == null) {
            p = new Node (x, v, 1, new SplayTree(), new SplayTree())
        }
        else {
            p.splay(x)
            if (p.key == x) {
                throw `Key ${x} already exists`;
            }
            if (p.key < x) {
                let root = new SplayTree (x, v, new SplayTree(p), p.right);
                p.right = new SplayTree()
                p = root;
            }
            else {
                let root = new SplayTree (x, v, p.left, new SplayTree(p));
                p.left = new SplayTree();
                p = root
            }
        }
    }

    delete(x){

    }
}


function fun(){
    let t = new SplayTree()
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < 10; i++) t.insert(i, alpha[i])
    return t
}

// zig test
//p = new SplayTreeNode("b", 2, "A", "C")
//root = new SplayTree("d", 4, p, "E")
//root.zig()
//console.log(p) // ["b", "A", ["d", "C", "E"]]
// console.log(p.splay("b"))

// zigZig test
//p = new SplayTree("b", "A", "C")
//q = new SplayTree("d", p, "E")
//r = new SplayTree("f", q, "G")
//r.zig()
//q.zig()
//console.log(r.splay("b"))
// console.log(p) // ["b", "A", ["d", "C", ["f", "E", "G"]]]

// zigZag test
//p = new SplayTree("d", "C", "E")
//q = new SplayTree("b", new SplayTree("A"), p)
//r = new SplayTree("f", q, new SplayTree("G"))
// r.left = q.zag()
// r.zig()
//console.log(r.find("z"))
// console.log(p) // ["d", ["b", "A", "C"], ["f", "E", "G"]]
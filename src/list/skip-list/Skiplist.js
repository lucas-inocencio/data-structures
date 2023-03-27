nil = { key: Infinity, value: null, forward: null };

class SkipListNode {
  constructor(key, value, level) {
    this.key = key;
    this.value = value;
    this.forward = new Array(level).fill(nil);
  }
}

class SkipList {
  constructor(max_level = 5, probability = 0.5) {
    this.level = 1;
    this.maxLevel = max_level;
    this.probability = probability;
    this.header = new SkipListNode(-Infinity, null, this.maxLevel);
  }

  insert(x, v) {
    let p = this;
    let update = new Array(p.maxLevel).fill(nil);
    let q = p.header;
    for (let i = p.level - 1; i >= 0; i--) {
      while (q.forward[i].key < x) q = q.forward[i]; // Walk through structure, as if doing find(x)
      update[i] = q;
    }
    q = q.forward[0];
    if (q.key == x) q.value = v;
    else {
      // When we find where to insert x at level 0, apply coin flipping to determine level
      let k = 0; // Each node at level 𝑖 tosses a coin
      while (k <= p.maxLevel && Math.random() < p.probability) k++; // If the coin comes up heads (probability = ½) extend this node to level 𝑖 + 1
      let new_level = k;
      if (new_level > p.level) {
        for (let i = p.level; i < new_level; i++) update[i] = p.header;
        p.level = new_level;
      }
      q = new SkipListNode(x, v, new_level); // Link this node into levels 0 through k
      for (let i = 0; i < new_level; i++) {
        q.forward[i] = update[i].forward[i];
        update[i].forward[i] = q;
      }
    }
  }

  find(x) {
    let p = this.header; // Start at the topmost level (i = maxLevel)
    for (let i = this.level; i >= 0; i--) {
      // else if i > 0, drop to next lower level (i = i-1)
      while (p.forward[i].key < x) {
        // Walk through level i until finding the rightmost node p such that p.key <= x
        if (p.key == x) return p.value; // if p.key == x, found it!
        else if (i <= 0) throw "not found"; // else not found
      }
      throw "not found";
    }
  }

  delete(x) {
    let p = this;
    let update = new Array(p.maxLevel).fill(nil);
    let q = p.header;
    for (let i = p.level - 1; i >= 0; i--) {
      while (q.forward[i].key < x) q = q.forward[i];
      update[i] = q;
    }
    q = q.forward[0];
    if (q.key === x) {
      for (let i = 0; i < p.level; i++) {
        if (update[i].forward[i] != q) break;
        else update[i].forward[i] = q.forward[i];
      }
      while (p.level > 0 && p.header.forward[p.level] === nil) p.level--;
    } else throw `Key Error: key '${x}' not found.`;
  }
}

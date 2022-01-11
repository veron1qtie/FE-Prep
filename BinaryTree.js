class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Btree {
  constructor() {
    this.head = null;
  }

  add(val) {
    const node = new Node(val);

    if (!this.head) return (this.head = node);

    let curNode = this.head;

    while (curNode) {
      if (curNode.value < val) {
        if (!curNode.right) {
          curNode.right = node;
          curNode = null;
        } else {
          curNode = curNode.right;
        }
      } else {
        if (!curNode.left) {
          curNode.left = node;
          curNode = null;
        } else curNode = curNode.left;
      }
    }
  }

  search(val) {
    let curNode = this.head;

    while (curNode) {
      if (curNode.value === val) return val;

      if (curNode.value > val) curNode = curNode.left;
      else curNode = curNode.right;
    }

    return false;
  }


  getDepth() {
    // using queue to store depth for each node
    let queue = [ [this.head, 0] ]; //default state of queue;
    let depth = 0;

    while (queue.length) {
        console.log(...queue);
        let [curNode, counter] = queue.pop() // gives 1 curNode and counter
        
        if(curNode.right !== null) { queue.unshift([curNode.right, counter+1]); }
        
        if(curNode.left !== null) { queue.unshift([curNode.left, counter+1]); }
        depth = Math.max(counter, depth);

    }
    return depth;
  }

}

const tree = new Btree();

tree.add(33);
tree.add(11);
tree.add(44);
tree.add(7);
tree.add(10);

console.log(tree.head);
console.log(tree.search(47));
console.log(tree.search(11));
console.log(tree.getDepth()); //3

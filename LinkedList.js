export class Node {
    constructor(data) {
        this.data = data || null;
        this.next = null;
    }
}

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addNode(val) {
        const node = new Node(val);

        if(this.size === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node; // adding node 
            this.tail = node; // reassigning the tail
        }
        this.size++;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }
    // we remove the head and there is no more memory link and garbage collector removes this
    clear() {
        let curHead = this.head;

        while( curHead !== null) {
            const next = curHead.next;
            curHead.next = null;
            curHead = next;
        }
        this.head = null;
        this.tail = null;
        this.size = 0;

        return this.head; //null
    }

    getSize() {
        return this.size;
    }
}

const ll = new LinkedList();
ll.addNode('first');
ll.addNode('second');
ll.addNode('third');

console.log(ll.getSize());
console.log(ll.getFirst());
console.log(ll.getLast());

ll.clear();

console.log(ll.getSize()); // 0
console.log(ll.getFirst()); // null 
console.log(ll.getLast()); // null

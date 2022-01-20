export class Node {
    constructor(data) {
        this.data = data || null;
        this.next = null;
    }
}

export default class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(val) {
        const node = new Node(val);

        if(this.head === null) {
            this.head = node;
        }
        else {
            let prevHead = this.head;
            this.head = node;
            node.next = prevHead;
        }
        return this.head;
    }


    addToTail(val) {
        const node = new Node(val);

        if(this.head === null) {
            this.head = node;
        }
        else {
            let curNode = this.head;
            while( curNode.next !== null) {
               curNode = curNode.next;
            }
            curNode.next = node;
        }

        return node;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(this.head === null) return this.head;
        let curNode = this.head;

        while(curNode.next !== null) {
            curNode = curNode.next;
        }
        return curNode;
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
    }

    getSize() {
        let size = 0;

        let curNode = this.head;

        while(curNode !== null) {
            curNode = curNode.next;
            size++;
        }

        return size;
    }

    printVals() {
        if(this.head === null) return null;

        let curNode = this.head;
        let values = [];

        while(curNode !== null) {
            values.push(curNode.data);
            curNode = curNode.next;
        }
        return values;
    }
}

const ll = new LinkedList();
ll.addToTail('first');
ll.addToTail('second');
ll.addToTail('third');

console.log('size of LL is', ll.getSize()); //3
console.log('firstEl of LL is', ll.getFirst()); //first
console.log('lastEl of LL is', ll.getLast()); //third

console.log(ll.printVals()); //should print all el

ll.clear();

console.log('this is new size after clear()', ll.getSize()); // 0
console.log(ll.getFirst()); // null 
console.log(ll.getLast()); // null

import LinkedList from "./LinkedList.js";
import { Node } from "./LinkedList.js";


// LIFO - push and pop ( add el in the end of arr and remove from the end)


class Stack extends LinkedList {
    constructor() {
        super();
    }
    //adds new el to the end of stack
    push(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
    }
    // removing last added 
    pop() {
        const prevHead = this.head;
        this.head = this.head.next;
        return prevHead;
    }
}

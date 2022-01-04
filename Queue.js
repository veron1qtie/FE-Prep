import LinkedList from "./LinkedList.js";

class Queue extends LinkedList {
    constructor() {
        super();
    }
    // add el to queue
    enQueue(val) {
        this.addNode(val);
    }

    //FIFO - removes head of LL
    deQueue() {
        if(this.size === 0) {
            return;
        }

        else {
            const newHead = this.head.next;
            // to save a reference to head that we will remove
            const prevHead = this.head;
            this.head = newHead;
            this.size--;

            // if we had only 0 el left after deQueue
            if(this.size === 0) this.tail = null;

            return prevHead;
        }
    }
}

const queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);


console.log('Last el', queue.getLast());
console.log('Front el of queue', queue.getFirst());
console.log('Dequeue', queue.deQueue());
console.log('New front el after deQueue', queue.getFirst());

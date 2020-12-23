const LinkedList = require('./LinkedList');

class Queue {
    constructor(maxSize = Infinity) {
    // Set initial data.
        this.queue = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0;
    }

    hasRoom() {
        return this.size < this.maxSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(data) {
    // Add some data to the queue.
        if (this.hasRoom()) {
            this.queue.addToTail(data);
            this.size++;
        } else {
            throw new Error('Queue is full!');
        }
    }

    dequeue() {
    // Remove some data from the queue.
        if (!this.isEmpty()) {
            return this.queue.head.data;
        } else {
            return null;
        }
    }

    show() {
    // Return the next item in the queue.
        if (!this.isEmpty()) {
            return this.queue.head.data;
        } else {
            return null;
        }
    }

    all() {
        // Return all items in the queue.
        let queueArray = [];
        if (!this.isEmpty()) {
            let currentNode = this.queue.head;
            while (currentNode) {
                queueArray.push(currentNode.data);
                currentNode = currentNode.next;
            }
            return queueArray;
        } else {
            return null;
        }
    }
}


module.exports = Queue;

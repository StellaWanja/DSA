// follows FIFO (first in first out)
// uses 2 operations: dequeue/polling and enqueue/adding/offering
// enqueue, dequeue, peeking - O(1)
// contains an element, remove an element - O(n)
//can use array or linked list (doubly or singly)

class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  peek() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }
}

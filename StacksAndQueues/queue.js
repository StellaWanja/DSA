// follows FIFO (first in first out)
// uses 2 operations: dequeue/polling and enqueue/adding/offering
// enqueue, dequeue, peeking - O(1)
// contains an element, remove an element - O(n)
//can use array or linked list (doubly or singly)
//array - push and shift which is O(n) or unshift and pop

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

//QUEUE LINKED LIST IMPLEMENTATION
// can either add from the back and remove the first or add from the front and remove from the back
class NodeQueue{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class QueueLinkedList{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    let newNode = new NodeQueue(val);
    if(this.first === null){
      this.first = this.last = newNode;
      this.size++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
    }
  }
  dequeue(){
    if(this.first === null) return null;
    if(this.first === this.last){
      return null;
    }
    let temp = this.first;
    this.first = temp.next;
    temp.next = null;
    this.size--;
  }
}

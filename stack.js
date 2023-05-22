// uses LIFO technique (last in first out) eg book stack
// has 2 operations, push and pop
// pushing, popping, peeking, size - O(1)
// searching - O(n)
class Stack {
  constructor() {
    //can use array or linked list (singly or doubly)
    this.stack = [];
  }

  push(element) {
    // push element into the items
    this.stack.push(element);
  }

  pop() { // remove head/ top element
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }

  peek(){ //returns the top most elements in the stack
    return this.items[this.items.length - 1];
  }
}

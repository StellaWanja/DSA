// uses LIFO technique (last in first out) eg book stack
// has 2 operations, push and pop (most efficient - O(1)) or shift and unshift
// pushing, popping, peeking, size - O(1)
// searching - O(n)
class StackArray {
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

//LINKED LIST IMPLEMENTATION OF A STACK
//push and pop methods should be O(1), not O(n) as in the case of pop in a linked list
class NodeStack{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
class StackLinkedList{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){ //push to head (linked list)
    let newNode = new NodeStack(val);
    if(this.first === null){
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
      this.size++;
    }
  }
  pop(){ //pop head (linked list)
    if(this.first === null) return null;
    if(this.first === this.last){
      this.last = null;
    }
    let temp = this.first;
    this.first = temp.next;
    temp.next = null;
    this.size--;
    return temp.val;
  }
}
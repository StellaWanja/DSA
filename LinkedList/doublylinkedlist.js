class Node{
    constructor(data, next=null, previous = null){
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //O(1)
    insertAtBeginning(data){
        let newNode = new Node(data);
        if(this.head === null && this.tail === null){
            this.head = this.tail = newNode;
            this.size++;
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
        }
    }

    //O(1)
    insertAtEnd(data){
        let newNode = new Node(data);
        if(this.head === null && this.tail === null){
            this.head = this.tail = newNode;
            this.size++;
        } else {
            let temp = this.head;
            while(temp.next !== null){
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.previous = temp;
            this.tail = newNode;
            this.size++;
        }
    }

    
    insertAtNthPosition(data, position){
        let newNode = new Node(data);
        if(position < 1 || position > this.size){
            console.log("Invalid position");
        }
        else if(position === 1 && this.head === null && this.tail === null){
            this.head = this.tail = newNode;
            this.size++;
        } else {
            let count = 0; 
            let currentNode = this.head;
            while(count < position - 1) {
                currentNode = currentNode.next;
                count++;
            }
            let prevNode = currentNode.previous;
            newNode.next = currentNode;
            prevNode.next = newNode;
            newNode.previous = prevNode;
            currentNode.previous = newNode;
            this.size++;
        }
    }

    //O(n)
    getAtIndex(index){
        let temp = this.head;
        let count = 0;
        while(temp !== null){
            if(index === count){
                console.log(`Data at index ${index} is ${temp.data}`)
            }
            count++;
            temp = temp.next;
        }
        return null;
    }

    //O(1)
    removeHead(){
        if(this.head === null){
            console.log("invalid");
        }
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.head.previous = null;
        this.size--
    }
    //O(1)
    removeTail(){
        if(this.head === null){
            console.log("invalid");
        }
        else if(this.head.next === null){
            this.head = null;
        } else {
            let temp = this.head;
            while(temp.next !== null){
                temp = temp.next;
            }
            let prevNode = temp.previous;
            temp.previous = null;
            prevNode.next = null;
            this.size--;
        }
    }

    //remove at position - 0(n)
    removeAtPosition(position){
        if(position < 1 || position > this.size){
            console.log("Invalid position");
        }
        else if(position === 1 && this.head === null && this.tail === null){
            let temp = this.head;
            this.head = temp.next;
            temp.next = null;
            this.head.previous = null;
            this.size--;
        } else {
            let currentNode = this.head;
            let count = 0;
            while(count < position - 1){
                currentNode = currentNode.next;
                count++;
            }
            let prevNode = currentNode.previous;
            let nextNode = currentNode.next;
            prevNode.next = nextNode;
            nextNode.previous = prevNode;
            this.size--;
        }
    }

    reverse(){
        let prevNode, currentNode, nextNode;
        prevNode = 0;
        currentNode = this.head;
        nextNode = this.head;
        while(nextNode !== null){
            nextNode = nextNode.next;
            prevNode = currentNode.previous;
            currentNode.next = prevNode;
            currentNode.previous = nextNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = prevNode;
    }

    printList(){
        let temp = this.head;
        while(temp !== null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insertAtBeginning(10);
doublyLinkedList.insertAtBeginning(20);
doublyLinkedList.insertAtEnd(30);
doublyLinkedList.insertAtEnd(40);
doublyLinkedList.insertAtNthPosition(25, 4);
doublyLinkedList.getAtIndex(2);
//doublyLinkedList.removeHead();
//doublyLinkedList.removeTail();
//doublyLinkedList.removeAtPosition(2);
doublyLinkedList.reverse();
doublyLinkedList.printList();

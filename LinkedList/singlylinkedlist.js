//node class - containsnode data and pointer
//constructor -  used to create new objects
class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

//singly linked lists class
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //insert first node - O(1)
    insertFirstNode(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            this.size++;
        } else {
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
            this.size++;
        }
    }

    //insert last node - o(1)
    insertLastNode(data){
        let newNode = new Node(data);
        let temp ;
        if(this.head === null){
            this.head = newNode;
            this.size++;
        } else {
            temp = this.head;
            while(temp.next !== null){
                temp = temp.next;
            }
            temp.next = newNode;
            this.size++;
        }
    } 

    //insert at nth index - O(1)
    //ask if position starts at 0 or 1
    insertAtNthPosition(data, index){
        let newNode = new Node(data);
        if(index < 0 || index > this.size){
            console.log("Invalid");
        }
        else if(index === 0 && this.head === null){
            this.head = newNode;
        } else {
            let temp = this.head;
            let count = 0;
            let previous;
            while(count < index){
                temp = temp.next;
                count++;
            }
            newNode.next = temp.next;
            temp.next = newNode;
        }
    }

    //get at index - O(n)
    getAtIndex(index){
        let temp = this.head;
        let count = 0;

        while(temp !== null){
            if(count === index){
                console.log("my data is " + temp.data);
            }
            count++;
            temp = temp.next;
        }
       return null;
    }

    //remove at start - O(1)
    removeAtStart(){
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
    }
    
    //remove at end - O(n)
    removeArEnd(){
        let temp = this.head;

        if(this.head === null){
            console.log("invalid");
        }
        else if(this.head.next === null){
            this.head = null;
        } else {
            while(temp.next.next !== null){
                temp = temp.next;
            }
            temp.next = null;
        }
    }

    //remove at index - 0(n)
    removeAtIndex(index){
        if(index < 0 || index > this.size){
            return null;
        }
        else if (index === 0 && this.head !== null){
            let del = this.head;
            this.head = del.next;
            del.next = null;
        } else {
            let temp = this.head;
            let count = 0;
            while(count <= index){
                count++;
                temp = temp.next;
            }
            temp.next = temp.next.next;
            // if (temp != null && temp.next != null)
            // {
            //     temp.next = temp.next.next;
            // }
            // else
            // {
            //     //5. Else the given node will be empty.
            //     console.log("\nThe node is already null.");
            // }
        }
    }

    //reverse a linked list
    reverse(){
        let previousNode, currentNode, nextNode;
        previousNode = null;
        currentNode = this.head;
        nextNode = this.head;
        while(nextNode !== null){
            nextNode = nextNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.head = previousNode
    }

    //print
    printList(){
        let temp = this.head;
        while(temp !== null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

const L1 = new LinkedList();
L1.insertFirstNode(10);
L1.insertFirstNode(20);
L1.insertLastNode(30);
L1.insertAtNthPosition(15, 1);
L1.getAtIndex(1);
//L1.removeAtStart();
//L1.removeArEnd();
//L1.removeAtIndex(2);
L1.reverse();
L1.printList();
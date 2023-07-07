//priority queue -> data structure where each element has a priority
// elements with a higher priority are served before elements with lower priorities
// can be implemented using arrays, lists -  not the best since you need to iterate over all elements
// best usage - binary heaps 
//use a min binary heap
//Big O of insertion and deletion -> O(log n)

class Node{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
    }    
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let lastIdx = this.values.length-1;
        let lastEl = this.values[lastIdx];
        while(lastIdx > 0){
            let parentIdx = Math.floor((lastIdx-1)/2);
            let parentEl = this.values[parentIdx];
            if(lastEl.priority < parentEl.priority){
                this.values[lastIdx] = parentEl;
                this.values[parentIdx] = lastEl;
                lastIdx = parentIdx;
            } else {
                break;
            }
        }
        console.log(this.values)
    }
    dequeue(){
        if(this.root === null) return;
        if(this.values.length > 0){
            let delEl = this.values[0];
            let lastEl = this.values.pop();
            this.values[0] = lastEl;
            this.sinkDown();
        }
    }
    sinkDown(){
        let leftChildIdx, rightChildIdx, leftChild, rightChild;
        let idx = 0;
        const length = this.values.length;
        let currentEl = this.values[idx];
        while(true){
            leftChildIdx = 2*idx+1;
            rightChildIdx = 2*idx+2;
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < currentEl.priority){
                    swap = leftChildIdx;
                }
            } 
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < currentEl.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIdx;
                }
            }
            
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = currentEl;
            idx = swap;
        }
        console.log(this.values);
    }
}

const pq = new PriorityQueue();
pq.enqueue("common cold", 5);
pq.enqueue("gunshot wound", 1);
pq.enqueue("high fever", 4);
pq.enqueue("broken arm", 2);
pq.enqueue("dehydration", 3);
pq.dequeue();
pq.dequeue();
pq.dequeue();

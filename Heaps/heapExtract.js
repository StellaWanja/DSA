//DELETION IN A MAX BINARY HEAP
//in removing, we remove the max element in a max binary heap, which would be the root
//or the min element in a min binary heap
//eg                70
//                /    \
//              67      65
//             /  \     /
//            45  58    31
//in a max binary heap, remove root and swap it with the last element
//eg                31
//                /    \
//              67      65
//             /  \     
//            45  58    
//then compare with the left and the right children and swap with the largest of the two
//eg                67
//                /    \
//              31      65
//             /  \     
//            45  58 
//then compare with the left and the right children and swap with the largest of the two
//eg                67
//                /    \
//              58      65
//             /  \     
//            45  31
class MinBinaryHeap{
    constructor(){
        this.values = [];
    }
    extractMax(){
        //store value of max(the root)
        const max = this.values[0];
        //store value of the last index
        const end = this.values.pop();
        if(this.values.length > 0){
            //swap and set root as the value at last index
            this.values[0] = end;
            this.sinkDown();
        }
        //return max value removed
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[idx];
        while(true){
            //find children of parent
            let leftChildIdx = 2*idx+1;
            let rightChildIdx = 2*idx+2;
            //variables declared since a parent might not necessarily have left or right child
            let leftChild, rightChild;
            //check if there was any swap done
            let swap = null;

            //check if a node has left child or right child to avoid running into out of bounds error
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                //compare if the leftchild is greater than the element to allow for swap
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                //1st -> if no swap had been done yet eg [33,25,41,10,11];
                //2nd -> swap was done and rightchild is greater than leftchild
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }

            //if there was no swap, break
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
} 
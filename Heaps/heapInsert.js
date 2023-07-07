//INSERTION IN MAX BINARY HEAP
// insert from the left going in horizontal manner
// eg    41
//      /  \
//     39   33
//    /  \  /
//   10  25 12
// while inserting 55, add it to the right of 33
// eg    41
//      /  \
//     39   33
//    /  \  /  \
//   10  25 12  55
//However, 55 is greater than 33, so compare and switch
// eg    41
//      /  \
//     39   55
//    /  \  /  \
//   10  25 12  33
// then compare 55 to 41 and switch
// eg    55
//      /  \
//     39   41
//    /  \  /  \
//   10  25 12  33
class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(val){
        //insert to last of array
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp(){
        //index of last item added
        let lastIndex = this.values.length-1;
        let element = this.values[lastIndex];
        //continue looping till correctly placed
        while(lastIndex > 0){
            //parent index of the last item added
            let parentIndex = Math.floor((lastIndex-1)/2);
            let parent = this.values[parentIndex];
            //break if new el is less than parent
            if(element <= parent) break;
            //else swap elements if new element is greater than parent
            this.values[parentIndex] = element;
            this.values[lastIndex] = parent;
            lastIndex = parentIndex; 
        }
    }
}

//in r

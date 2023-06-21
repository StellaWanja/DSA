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
}
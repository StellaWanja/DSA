//A binary heap -> left children filled out first (at most 2 child nodes)

//MaxBinaryHeap -> parent nodes are always larger than child nodes
//eg           41
//           /    \
//          39     33
//        /   \    /
//      18    27   12

//MinBinaryHeap -> parent nodes are always smaller than child nodes
//eg           5
//           /    \
//          10     9
//        /   \    /
//      17    19   30

//Binary heaps are used to implement PriorityQueues and in graph traversal algorithms

//For any index of n nodes, the left child node is stored at (2i+1) and the right child at (2i+2), i = index
//For any index of n nodes, to find the parent node -> Math.floor((i-1)/2), i = index
//eg           5
//           /    \
//          10     9
//        /   \    /
//      17    19   30
// will be stored in an array/list as [5,10,9,17,19,30]
// so left child of 10 -> (2*1+1)=3(17 in index 3)
// right child of 10 -> (2*1+2)=4(19 in index 4)
// parent of 30 -> ((5-1)/2)=2(9 in index 2)
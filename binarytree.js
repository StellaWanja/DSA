class BinaryTreeNode{
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

//DEPTH FIRST TRAVERSAL / INORDER TRAVERSAL
// Traverse from root to left node and all its children before moving to the right node
//1. Iteration method for depth first traversal
// uses stack data structure style to traverse - LIFO
//           A
//          /  \
//         B    C
//       /  \    \
//      D   E     F
// First A will be pushed to the stack and popped out
// Then B and C will be pushed to the stack in the order of C and B(right node then left node)
// B will be popped out, then traverse its children D and E
// E will be pushed to stack first then D, and pop out D then E respectively
// then go back to remaining C in the stack and pop it out
// then traverse to F and pop 
// So traversal in depth first = A,B,D,E,C,F
const depthFirstTraversal = (root) => {
    if(root === null) return [];

    const result = [];
    const stack = [root]; // the stack stores the values of a level, with push and pop based on whether its left or right
    while(stack.length > 0){
        const current = stack.pop(); //pop out current value
        result.push(current.data); //and push to result array

        //if node has children, push to stack right node first then left node
        // to allow for popping left node first before right node since stack will hold values of same level
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }
    return result;
}

//2. depth first traveral using recursion
const depthFirstTraversalRecursion = (root) => {
    if(root === null) return [];
    const leftValues = depthFirstTraversalRecursion(root.left);
    const rightValues = depthFirstTraversalRecursion(root.right);
    return [root.data, ...leftValues, ...rightValues];
}

//BREADTH FIRST TRAVERSAL
// Traverse across first before traversing to the children
//1. Iteration method for breadth first traversal
// uses queue data structure to traverse - FIFO
//           A
//          /  \
//         B    C
//       /  \    \
//      D   E     F
// add A to queue and remove
// then traverse and add B and C to the queue
// remove B and C from the queue respectively
// add D, E and F and remove them respectively
const breadthFirstTraversal = (root) => {
    if(root === null) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0){
        const current = queue.shift();
        result.push(current.data);
        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }
    return result;
}
//BFS has no recursion since recursion requires using a call stack (stack dsa)

//TREE INCLUDES
//check if a value exists in a tree
//eg find E
//           A
//          /  \
//         B    C
//       /  \    \
//      D   E     F
// using BFS iteratively -> handle BFS algo while checking if value exists as it exits the queue
const treeIncludesBFS = (root, target) => {
    if (root === null) return false;
    const queue = [root];
    while(queue.length > 0){
        const current = queue.shift();

        if(current.data === target) return true;
        //do not include false else statement here
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return false
}

const treeIncludesBFSRecursion = (root, target) => {
    if (root === null) return false;
    if(root.data === target) return true;
    return treeIncludesBFSRecursion(root.left, target) || treeIncludesBFSRecursion(root.right, target);
}




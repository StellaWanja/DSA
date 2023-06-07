class BinaryTreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

//A Tree Data Structure can be traversed in following ways:
//1. Depth First Search or DFS
//   a) Inorder Traversal
//   b) Preorder Traversal
//   c) Postorder Traversal
//2. Level Order Traversal or Breadth First Search or BFS
//3. Boundary Traversal
//4. Diagonal Traversal

//DEPTH FIRST TRAVERSAL
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
  if (root === null) return [];

  const result = [];
  const stack = [root]; // the stack stores the values of a level, with push and pop based on whether its left or right
  while (stack.length > 0) {
    const current = stack.pop(); //pop out current value
    result.push(current.data); //and push to result array

    //if node has children, push to stack right node first then left node
    // to allow for popping left node first before right node since stack will hold values of same level
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

//2. depth first traveral using recursion
const depthFirstTraversalRecursion = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstTraversalRecursion(root.left);
  const rightValues = depthFirstTraversalRecursion(root.right);
  return [root.data, ...leftValues, ...rightValues];
};

//INORDER TRAVERSAL (Left, Root, Right)
// Traverse from the left subtree to the root then to the right subtree
//           A
//          /  \
//         B    C
//       /  \  / \
//      D   E  F  G
//Traversal = D,B,E,A,F,C,G
//used to get nodes in non-decreasing order, can be reversed to get in non-increasing order
const inOrder = (root) => {
  if(root === null) return;
  inOrder(root.left);
  console.log(root.data);
  inOrder(root.right);
}


//PREORDER TRAVERSAL (Root, Left, Right) - similar to the DFS methods shown above
// Traverse from the root to the left subtree then to the right subtree
//           A
//          /  \
//         B    C
//       /  \  / \
//      D   E  F  G
//Traversal = A,B,D,E,C,F,G
//used to create a copy of the tree and to get prefix expressions on an expression tree
const preOrderTraversal = (root) => {
  if (root === null) return [];
  console.log(root.data);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
  //return [root.data, ...leftValues, ...rightValues];
};

//POSTORDER TRAVERSAL (Left, Right, Root)
// Traverse from the left subtree to the right subtree then to the root
//           A
//          /  \
//         B    C
//       /  \  / \
//      D   E  F  G
//Traversal = D,E,B,F,G,C,A
//used to delete the tree and to get the postfix expression of an expression tree
const postOrder = (root) => {
  if(root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.data);
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
// will be a,b,c,d,e,f
const breadthFirstTraversal = (root) => {
  if (root === null) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.data);
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return result;
};
//BFS has no recursion since recursion requires using a call stack (stack dsa)

//BOUNDARY TRAVERSAL
// Traverse in a clockwise or anticlockwise manner throughout the tree
// In an anticlockwise manner - start from root and traverse across all left then right
//            A
//          /  \
//         B    C
//       /  \    \
//      D   E     F
// will be anticlockwise - A,B,D,E,F,C,A
//anticlockwise : -start from left excluding leaf, then leaf nodes, then right in reverse excluding leaf
class BoundaryTraversal{
  //print leaf nodes
  printLeaves(root){ 
    if(root === null) return;
    printLeaves(root.left);
    // Print it if it is a leaf node
    if (root.left === null && root.right === null){
      console.log(root.data);
    }
    printLeaves(root.right);
  }

  //print all left boundary nodes except leaf node. - TOP BOTTOM
  printLeftBoundary(root){ 
    if(root === null) return;
    if(root.left !== null){
      console.log(root.data);
      printLeftBoundary(root.left);
    }
    else if(root.right !== null){
      console.log(root.data);
      printLeftBoundary(root.right);
    }
  }

  //print all right boundary nodes except leaf node - BOTTOM UP
  printRightBoundary(root){
    if(root === null) return;
    if(root.right !== null){
      //traverse first before calling
      printRightBoundary(root.right);
      console.log(root.data);
    } else if(root.left !== null){
      printRightBoundary(root.right);
      console.log(root.data);
    }
  }

  //handle boundary traversal
  printBoundary(root){
    if(root === null) return;
    console.log(root.data);
    //print left boundary in top down manner
    this.printLeftBoundary(root.left);
    //print leaves
    this.printLeaves(root.left);
    this.printLeaves(root.right);
    //print right boundary in bottom up manner
    this.printRightBoundary(root.right);
  }
}



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
  while (queue.length > 0) {
    const current = queue.shift();

    if (current.data === target) return true;
    //do not include false else statement here
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

const treeIncludesBFSRecursion = (root, target) => {
  if (root === null) return false;
  if (root.data === target) return true;
  return (
    treeIncludesBFSRecursion(root.left, target) ||
    treeIncludesBFSRecursion(root.right, target)
  );
};

//TREE SUM - BFS or DFS
const dfsSum = (root) => {
  if (root === null) return 0;

  let sum = 0;
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    sum += current.data;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return sum;
};

//Time and space complexity - O(n)
const dfsSumRecursive = (root) => {
  if (root === null) return 0;
  return root.data + dfsSumRecursive(root.left) + dfsSumRecursive(root.right);
};

const bfsSum = (root) => {
  if (root === null) return 0;

  let sum = 0;
  let queue = [root];
  while (stack.length > 0) {
    let current = queue.shift();
    sum += current.data;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return sum;
};

//TREE MIN VALUE
//Time - O(n), space - O(n) (callstack for recursion)
const dfsMinValue = (root) => {
  if (root === null) return 0;
  let minValue = Infinity;
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();

    if (current.data < minValue) {
      minValue = current.data;
    }

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return minValue;
};

const bfsMinValue = (root) => {
  if (root === null) return Infinity;
  let minValue = Infinity;
  let queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();

    if (current.data < minValue) {
      minValue = current.data;
    }

    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }
  return minValue;
};

const treeMinValueRecursive = (root) => {
  if (root === null) return Infinity;
  const leftMin = treeMinValueRecursive(root.left);
  const rightMin = treeMinValueRecursive(root.right);
  return Math.min(root.val, leftMin, rightMin);
};

//MAX ROOT TO LEAF PATH SUM
// Check sum of every path from root to leaf
//recursion is the best for path finding in trees
const maxPath = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.data;
  const maxChild = Math.max(maxPath(root.left), maxPath(root.right));
  return root.data + maxChild;
};

//BINARY SEARCH TREE INSERTION
//1. Create a node object that will store the data
//2. Check BST for a root node, if none exists set node as root
//3. Traverse node to put data value less than root node to left and the greater one to right
// The node should have nodes at the left less than the current node and at the right greater than the current node
//eg             11
//              /  \
//             7
//            / \
//           5   9
//              / \
//             8   10
class BSTInsertion {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    //insert node if tree is empty
    if (this.root === null) {
      this.root = newNode;
    } else {
        this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode){
    //insert to left
    if(newNode.data < root.data){
        //no left node exists
        if(root.left === null){
            root.left = newNode;
        } else {
            //recursively move to the next left node
            this.insertNode(root.left, newNode);
        }
    } else {
        //no right node exists
        if(root.right === null){
            root.right = newNode;
        } else {
            //recursively move to the next right node
            this.insertNode(root.right, newNode);
        }
    }
  }
}

// BINARY SEARCH TREE DELETION OF A NODE
// In deletion with a node that has 2 children: 2 methods
//Method 1: find min in the right subtree, copy the value in the targetted node and delete duplicate
//Method 2: find max in the left subtree, copy the value in the targetted node and delete duplicate
class BSTDeletion{
  removeNode(root, value){
    if (root === null) return null;
    else if(value < root.data){
      //value exists in the left subtree so traverse through the left subtree
      root.left = this.removeNode(root.left, value);
    }
    else if(value > root.data){
      //value exists in the right subtree so traverse through the right subtree
      root.right = this.removeNode(root.right, value);
    }
    else {
      //found node to be deleted
      //if there is no child - is a leaf node
      if(root.left === null && root.right === null){
        root = null;
      }
      //if there is one child
      else if (root.left === null){
        let temp = root;
        root = root.right;
        temp = null;
      }
      else if (root.right === null){
        let temp = root;
        root = root.left;
        temp = null;
      }
      //if has two children
      else{
        let temp = Math.min(root.right); //find the max number in the right subtree
        root.data = temp.data; //set root data to temp data
        root.right = this.removeNode(root.right, temp.data); //then remove the duplicate
      }
    }
    return root;
  }
}
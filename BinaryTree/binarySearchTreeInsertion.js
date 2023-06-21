class BinaryTreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

//A binary search tree(BST) is sorted
// so values on the left are less than root node
// while values on the right are greater than the root node
// and the same logic applies to the subtrees
// so while inserting, finding or deletion in a BST, the logic still applies in the same way

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

//iteratively
class BSTInsertIterate{
  constructor(){
    this.root = null;
  }
  insert(val){
    let newNode = new BinaryTreeNode(val);
    if(this.root === null){
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true){
        //check for duplicates as it would lead to infinite loop
        if(current.data === val) return undefined;
        //loop through left first
        if(val < current.data){
          //insert to the left side if there is no node
          if(current.left === null){
            current.left = newNode;
            return this;
          } else {
            //continue looping to the left
            current = current.left;
          }
          //loop through the right
        } else if(val > current.data){
          //insert to the right side if there is no node
          if(current.right === null){
            current.right = newNode;
             return this;
          } else {
            //continue looping to the right
            current = current.right;
          }
        }
      }
    }
  }
}

//using recursion
class BSTInsertionRecursion {
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

// BINARY SEARCH TREE DELETION OF A NODE
// In deletion with a node that has 2 children: 2 methods
//Method 1: find min in the right subtree, copy the value in the targetted node and delete duplicate
//Method 2: find max in the left subtree, copy the value in the targetted node and delete duplicate
class BSTDeletion{
  constructor() {
    this.root = null;
  }
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
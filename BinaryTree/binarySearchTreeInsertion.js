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
class BSTInsertIterate {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new BinaryTreeNode(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        //check for duplicates as it would lead to infinite loop
        if (current.data === val) return undefined;
        //loop through left first
        if (val < current.data) {
          //insert to the left side if there is no node
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            //continue looping to the left
            current = current.left;
          }
          //loop through the right
        } else if (val > current.data) {
          //insert to the right side if there is no node
          if (current.right === null) {
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
  insertNode(root, newNode) {
    //insert to left
    if (newNode.data < root.data) {
      //no left node exists
      if (root.left === null) {
        root.left = newNode;
      } else {
        //recursively move to the next left node
        this.insertNode(root.left, newNode);
      }
    } else {
      //no right node exists
      if (root.right === null) {
        root.right = newNode;
      } else {
        //recursively move to the next right node
        this.insertNode(root.right, newNode);
      }
    }
  }
}

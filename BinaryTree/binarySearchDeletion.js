// BINARY SEARCH TREE DELETION OF A NODE
// In deletion with a node that has 2 children: 2 methods
//Method 1: find min in the right subtree, copy the value in the targetted node and delete duplicate
//Method 2: find max in the left subtree, copy the value in the targetted node and delete duplicate
class BSTDeletion {
  constructor() {
    this.root = null;
  }
  remove(val){
    this.root = this.removeNode(this.root,val);
  }
  removeNode(root, value) {
    if (root === null) return root;
    else if (value < root.data) {
      //value exists in the left subtree so traverse through the left subtree
      root.left = this.removeNode(root.left, value);
    } else if (value > root.data) {
      //value exists in the right subtree so traverse through the right subtree
      root.right = this.removeNode(root.right, value);
    } else {
      //found node to be deleted
      //if there is no child - is a leaf node
      if (root.left === null && root.right === null) {
        root = null;
      }
      //if there is one child
      else if (root.left === null) {
        let temp = root;
        root = root.right;
        temp = null;
      } else if (root.right === null) {
        let temp = root;
        root = root.left;
        temp = null;
      }
      //if has two children
      //you replace root node with either 
      //a) inorder predecessor - largest number in the left subtree
      //b) inorder successor - smallest number in the right subtree
      else {
        let temp = Math.min(root.right); //find the min number in the right subtree
        root.data = temp.data; //set root data to temp data
        root.right = this.removeNode(root.right, temp.data); //then remove the duplicate
      }
    }
    return root;
  }
}

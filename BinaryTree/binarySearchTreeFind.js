class BinaryTreeNode {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
}

//N.B -> BST is already sorted so traverse left or right depending on whether less or greater than root

class BinarySearchTreeFind{
  constructor(){
    this.root = null;
  }
  find(val){
    if(this.root === null) return false;
    let current = this.root;
    let foundVal = false;
    //loop through while root is not null and foundVal has not been found
    while(current !== null && !foundVal){
      //loop through left
      if(val < current.data){
        current = current.left;
      //loop through right
      } else if(val > current.data){
        current = current.right;
        //found the value
      } else {
        foundVal = true;
      }
    }
    if(foundVal === false) return undefined;
    return current;
  }
}
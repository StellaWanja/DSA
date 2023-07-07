//worst case 
//insertion and deletion -> O(n) in one sided bst
//best case -> same as binary heaps

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insertion(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
     // console.log(this.root);
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (root.data === newNode.data) return undefined;
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      //  console.log(root);
      } else {
        root.left = this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
        //console.log(root);
      } else {
        root.right = this.insertNode(root.right, newNode);
      }
    }
    return root;
  }
  search(root, val) {
    if (root === null) return false;
    if (val < root.data) {
      return this.search(root.left, val);
    } else if (val > root.data) {
      return this.search(root.right, val);
    } else {
      return true;
    }
  }
  min(root) {
    if (root === null) return undefined;
    if (root.left === null) {
      console.log(root.data);
      return root.data;
    }
    return this.min(root.left);
  }
  max(root) {
    if (root === null) return undefined;
    if (root.right === null) {
      console.log(root.data);
      return root.data;
    }
    return this.max(root.right);
  }
  deletion(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
  BFS(root) {
    if (root === null) return undefined;
    const queue = [root];
    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current);
      
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
}

const bst = new BST();
bst.insertion(10);
bst.insertion(7);
bst.insertion(4);
bst.insertion(12);
bst.insertion(11);
bst.insertion(15);
// bst.min(bst.root);
// bst.max(bst.root);
//bst.BFS(bst.root);
bst.deletion(4);
bst.BFS(bst.root);

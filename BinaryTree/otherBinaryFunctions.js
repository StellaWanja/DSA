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

//best way to find min value and max value
// the min value is always the value at the left most node of the tree
//the max value is always the value at the right most node of the tree
const min = (root) => {
  if(root === null) return;
  if(root.left === null) return root.value;
  return this.min(root.left); //recursively traverse if it has other left nodes till we find the value
}
const max = (root) => {
  if(root === null) return;
  if(root.right === null) return root.value;
  return this.max(root.right);  //recursively traverse if it has other right nodes
}

//MAX ROOT TO LEAF PATH SUM
// Check sum of every path from root to leaf
//recursion is the best for path finding in trees
const maxPath = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.data;
  const maxChild = Math.max(maxPath(root.left), maxPath(root.right));
  return root.data + maxChild;
};

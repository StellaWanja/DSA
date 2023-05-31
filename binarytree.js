class BinaryTreeNode{
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

//depth first traveral / inorder traversal
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

//depth first traveral using recursion
const depthFirstTraversalRecursion = (root) => {
    if(root === null) return [];
    const leftValues = depthFirstTraversalRecursion(root.left);
    const rightValues = depthFirstTraversalRecursion(root.right);
    return [root.data, ...leftValues, ...rightValues];
}





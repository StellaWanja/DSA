//invoke same function with a different input until you reach the base case
// base case - the condition when the recursion ends
// essential parts of a recursion: base case and using different input
//always think about thee base case and the recursive case first
//uses a call stack(LIFO technique)
// call stack -> a stack that holds info about diffnt active functions, return address, local var etc

//ISSUES THAT COULD COME UP
// 1. No base case
// 2. Forgetting to return or returning the wrong thing
// 3. Stack overflow - recursion not stopping

//WHEN WRITING RECURSIVE FUNCTIONS, THINK ABOUT:
// 1. The way to divide prob into subprobs of the same type to find recursve cases
// 2. Conditions where recursion has to stop to find the base cases

//RECURSION TREE: 
// A tree where every node rep one subprob and the relation parent-child means that the parent called the child
// Draw the root(initial function call), new recursive call(draw a child)
//eg sum of bst ->   5
//                /    \
//               8       1
//             /   \    /  
//            3     4   9
//           /
//          7
// Recursion tree on left side:
//                  sum(5)
//                22 /
//              sum(8)
//              10/   \4
//             sum(3)   sum(4)
//             7/   \0
//            sum(7)  sum(null)
//            0/
//          sum(null)


//recursion is mainly used as a helper function
// a helper method recursion is a pattern with an outer function that's not recursive
// which calls an inner function which is recursive
function getAllOddValues(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) return;
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }

    helper(arr);
    return result;
}

getAllOddValues([1,2,3,4,5,6,7,8,9]);

//pure recursion
//PURE RECURSION TIPS:
//For arrays, use methods like slice, spread operator, and concat that make copies of arrays to avoid mutating them
// For string which are immutable, use methods like slice, substr, substring to make copies of strings
// for objects, use Object.assign() or spread operator to make copies of objects
function collectAllOddValues(arr){
    let newArr = [];
    if(arr.length === 0) return newArr;
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectAllOddValues(arr.slice(1)));
    return newArr;
}
collectAllOddValues([1,2,3,4,5,6,7,8,9]);



//invoke same function with a different input until you reach the base case
// base case - the condition when the recursion ends
// essential parts of a recursion: base case and using different input

//ISSUES THAT COULD COME UP
// 1. No base case
// 2. Forgetting to return or returning the wrong thing
// 3. Stack overflow - recursion not stopping
function countDown(num){
    //base case
    if(num <= 0){
        console.log("all done!");
        return; // stops iteration
    }
    console.log(num);
    num--;
    countDown(num);
}

function sumRange(num){
    if (num === 1) return 1;
    return num + sumRange(num-1);
}

function factorial(num){
    if (num === 1) return 1;
    return num * factorial(num-1);
}

factorial(4);

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

function fibonacci(num){
    //is too slow - O(2^n)
   // 0,1,1,2,3,5,8,13
   //num-1 + num-2
   if(num === 0) return 0;
   else if (num === 1) return 1;
   else return fibonacci(num-1) + fibonacci(num-2);
}

//efficient fibonacci
function fib(num){
    let fib = [0,1];
    for(let i=2; i<num; i++){
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
}

function sumOfDigits(num){
    //eg 142 => 1,4,2 => 7
    return (num % 10) + sumOfDigits((num%10 - 1));
}
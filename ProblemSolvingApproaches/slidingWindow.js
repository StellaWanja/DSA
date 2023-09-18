// This approach aims to reduce use of nested loops to using single loop
// involves taking a subset of data from a given array or string, expanding or shrinking that subset to satisfy certain conditions

/** HOW TO KNOW IF A PROBLEM SHOULD IMPLEMENT THE SLIDING WINDOW TECHNIQUE
    1. Used where items are being iterated over in a contiguous sequential manner eg [1,2,3,4,5] => [2,3,4]
    2. Used in arrays, strings, linked lists
    3. Used in questions such as in finding min and max of something, longest, shortest or largest thing, or if something is contained in a string/array
*/

/** HOW IT WORKS
    1. Initialize pointers left and right
    2. Expand the window -> move right pointer to right while ensuring the condition is still satisified
    3. Contract the window -> move left pointer to right if a condition is violated
 */

/** QUESTION VARIANTS
    1. Fixed length
        -> eg find the max sum of a subarray of size k
    2. Dynamic variant (moves like a caterpillar moving up a branch)
        -> eg find the smallest sum that is greater than or equal to some value x
    3. Dynamic variant with auxilliary data structure(eg a hashmap/additional array/hashset)
        -> eg find the longest substring with no more than K distint characters
        -> eg string permutation
*/

// QUESTIONS
// 1. Fixed length -> find the max subarray of a fixed size k
const maxSumSubarray = (arr,size) => {
    // the size of array must be greater than the size k
    if(arr.length < size) return -1;

    let maxValue = -Infinity;
    let currentRunningSum = 0;

    // find sum of first subarray and set as maxValue
    for(let i=0; i<size; i++){
        currentRunningSum += arr[i];
        maxValue = currentRunningSum;
    }

    // then sum of other subarrays and find the maximum sum
    for(let i=1; i<=arr.length-size; i++){
        currentRunningSum -= arr[i-1];
        currentRunningSum += arr[i+size-1];
        maxValue = Math.max(currentRunningSum, maxValue);
    }

    return maxValue;
}

console.log(maxSumSubarray([4,2,1,7,8,1,2,8,1,0], 3));

// Dynamic variant -> find the smallest sum that is greater than or equal to some value x
// expand the window until you reach or pass the target value
// once the target value has been found, contract the window from the left side while searching for a better value than what was found
// expand once a value less than target has been found
const smallestSubarray = (arr, target) => {
    //track min value
    let minWindowSize = Number.MAX_VALUE;
    //track current range and sum of sliding window
    let currentWindowSize = 0;
    let windowStart = 0;
    let windowEnd = 0;
    //extend window until the criteria is met
    while(windowEnd < arr.length){
        currentWindowSize += arr[windowEnd];
        // then contract window until the criteria is not met
        while(currentWindowSize >= target && windowStart < windowEnd){
            minWindowSize = Math.min(minWindowSize, windowEnd-windowStart+1);
            currentWindowSize -= arr[windowStart];
            //update min length
            windowStart++;
        }
    }

    return minWindowSize;
}

console.log(smallestSubarray([1,2,3,4,5,6], 7));

// Dynamic variant with auxilliary data structure -> longest substring length with k distinct characters





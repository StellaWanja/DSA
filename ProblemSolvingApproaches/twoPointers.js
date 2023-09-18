/** Involves creating pointers or values that correspond to an index or position
 *  and move towards the beginning, end or middle based on a certain condition
 - Very efficient for solving problems with minimal space complexity 
 - works in a sorted array
*/
/** COMMON PATTERNS IN THE TWO POINTER TECHNIQUE
    1. Two pointers, each starting from the beginning and the end until they both meet
     -> This variation is often used in scenarios where you need to find a pair of elements 
     -> that satisfy a certain condition eg finding two elements that sum up to a target value in a sorted array
    2. Two pointers moving in parallel.
     -> This variation is useful when you need to track elements based on some criteria while iterating through the array
    3. Two pointers with sorting
     -> first need to sort the array before applying the two-pointer technique
     ->  useful when searching for pairs or solving problems involving subarrays.
 */

/**
 * eg Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exis
 *
 */

// uses 2 pointers, starting at start and end
const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
        return [left,right];
    } else if(sum > 0){
        right--;
    } else {
        left++;
    }
  }
};

console.log(sumZero([-4, -3, -2, 1, 3, 10]));

const countUniqueValues = (arr) => {
    if(arr.length === 0) return 0;
    
    let i = 0;
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]; 
        }
    }
    return i+1;
}

console.log([1,1,2,3,3,4,4,5]);



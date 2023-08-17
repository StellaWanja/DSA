/** Involves creating pointers or values that correspond to an index or position
 *  and move towards the beginning, end or middle based on a certain condition
 - Very efficient for solving problems with minimal space complexity 
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



// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
// used when dealing with questions involving element counts, comparisons, and distributions

/** eg Write a function called same, which accepts two arrays. 
 * The function should return true if every value in the array has it's corresponding 
 * value squared in the second array. The frequency of values must be the same.
-- eg
 * same([1,2,3], [4,1,9]) // true
 * same([1,2,3], [1,9]) // false
 * same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

const same = (arr1, arr2) => {
  // check if both arrays have truthy values
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;

  const lookup = {};

  /**
   * (lookup[value * value] || 0): This part retrieves the current frequency associated with the squared
   * value. If the squared value does not exist in the lookup yet, it defaults to 0
   */

  for (let val of arr1) {
    //assign key to result of val squared
    //first checks if key and value exists, if not key defaults to 0 and adds 1 to create a new key
    //so lookup will be eg lookup = {4:2,9:1} -> key(squared value), value-> frequency of squared value found
    lookup[val * val] = (lookup[val * val] || 0) + 1;
  }
  for (val of arr2) {
    if (!lookup[val]) return false;
    lookup[val] -= 1;
  }
  return true;
};

console.log(same([1, 2, 4, 3], [9, 4, 1, 16]));

const anagram = (str1, str2) => {
  if (!str1 || !str2) return false;
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (let val1 of str1) {
    lookup[val1] = (lookup[val1] || 0)+1;
  }
  for(let val2 of str2){
    if(!lookup[val2]) return false;
    lookup[val2]--;
  }
  return true;
};

console.log(anagram("anagram", "nagaram"));
console.log(anagram("cat", "tag"));

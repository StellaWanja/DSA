// ADVANTAGES OF ARRAYS
// 1. Store multiple elements of the same type with one single variable name
// 2. Accessing elements is fast as long as you have the index, as opposed to linked lists where you have to traverse from the head.

// DISADVANTAGES OF ARRAYS
// 1. Addition and removal of elements at start and middle is slow O(n)
// 2. For certain languages where the array size is fixed, it cannot alter its size after initialization

// COMMON TERMS SEEN WHEN DOING PROBLEMS INVOLVING ARRAYS
// Subarray - A range of contiguous values within an array eg [1,2,3], [9,7,8]
// Subsequence - A sequence that can be derived from the given sequence by deleting 
//               some or no elements without changing the order of the remaining elements
//               eg [2, 3, 6, 1, 5, 4] => [3, 1, 5] is a subsequence

// TIME COMPLEXITY
// Accessing -> O(1)
// Searching -> O(n)
// Searching in a sorted array -> O(log n)
// Insertion at start and middle -> O(n) => will shift elements to the right
// Insertion at end -> O(1)
// Removal at start and middle -> O(n) => will shift elements to the left
// Removal at end -> O(1)

//THINGS TO LOOK OUT FOR DURING INTERVIEWS
// 1. Clarify if there are duplicate values in the array (how duplicate values would affect answer and solution)
// 2. When using an index to iterate through array elements, be careful not to go out of bounds
// 3. Be mindful about slicing or concatenating arrays in your code, since this uses O(n) time.
//    Instead, use start and end indices to demarcate a subarray/range where possible

// EDGE/ CORNER CASES
// 1. Empty array
// 2. Duplicate values in array
// 3. Array with only 1 or 2 elements
// 4. Array with repeated elements

// TECHNIQUES FOR ARRAY AND STRING PROBLEMS




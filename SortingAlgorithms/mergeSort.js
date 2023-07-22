//based on divide and conquer algorithm
//Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
//involves splitting, merging and sorting
// eg [8, 3, 5, 4, 7, 6, 1, 2]
// split into 2 arrays
// [8,3,5,4] [7,6,1,2]
// split once more into 4 arrays
// [8,3] [5,4] [7,6] [1,2]
// split until we get to 0 or 1 elements
// [8] [3] [5] [4] [7] [6] [1] [2]
// then start sorting while merging
// [3,8] [4,5] [6,7] [1,2]
// [3,4,5,8] [1,2,6,7]
// [1,2,3,4,5,6,7,8]

//Time complexity -> O(n log n)
//log n during splitting part, n when comparing the array elements to perform merging
//Space complexity -> O(n)

// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
//This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it. 

//merge function
function merge(arr1, arr2){
    let res = [];
    let arr1Idx = 0;
    let arr2Idx = 0;

    while(arr1Idx < arr1.length && arr2Idx < arr2Idx.length){
        if(arr2[arr2Idx] > arr1[arr1Idx]){
            res.push(arr1[arr1Idx]);
            arr1Idx++;
        } else {
            res.push(arr2[arr2Idx]);
            arr2Idx++;
        }
    }
    //if one array is completed, merge the other array since it is already sorted
    while(arr1Idx < arr1.length){
        res.push(arr1[arr1Idx]);
        arr1Idx++;
    }
    while(arr2Idx < arr2.length){
        res.push(arr2[arr2Idx]);
        arr2Idx++;
    }
    return res;
}

//split and sort function
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let leftArr = mergeSort(arr.slice(0,mid));
    let rightArr = mergeSort(arr.slice(mid));
    return merge(leftArr,rightArr);
}

console.log(mergeSort([1,5,3,4,2]))
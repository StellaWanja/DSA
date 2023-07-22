//based on divide and conquer algorithm
//Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
//Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

//pivot helper function -> pick a pivot and place it at its final and correct position

//Time(best and average) complexity -> O(n log n)
//Time complexity(worst case) -> O(n^2) eg in an already sorted array(which is fixed by picking a random or middle number)
//Space complexity -> O(log n)

function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  //pick pivot as first el of array
  let pivot = arr[startIdx];
  let swapIdx = startIdx;

  //compare pivot with other array elements
  for (let i = startIdx + 1; i < arr.length; i++) {
    //swap if less than pivot
    //eg [4,8,2,1,5,7,6,3]
    // 2 is lesser than pivot(4) so swap with 8 -> [4,2,8,1,5,7,6,3]
    // 1 is lesser than pivot(4) so swap with 8 ->[4,2,1,8,5,7,6,3]
    // 3 is lesser than pivot(4) so swap with 8 ->[4,2,1,3,5,7,6,8]
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  //swap pivot to the correct position -> idx 3 - > [2,1,3,4,5,7,6,8]
  swap(arr, startIdx, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){
        let pivotIdx = pivot(arr, left, right);
        //left part
        quickSort(arr,left,pivotIdx-1);
        //right part
        quickSort(arr,pivotIdx+1, right);
    }
    return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]));
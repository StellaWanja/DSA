// array is split into two: sorted and unsorted
//Value from the unsorted part is picked and placed at the correct position in the sorted part
// eg [5,3,4,1,2] -> unsorted
// take value after first index and store it as temp
// compare to el at previous index, if it is less than, swap

// worst case -> O(n^2) - sorting data that is in descending order eg [4,3,2,1]
// best case -> O(n) - sorting data that is in ascending order eg [1,2,3,4,-1]
//space complexity -> O(1)
//best used when new data keeps coming up and you need the data sorted

function insertionSort(arr) {
  //compare num to the one before it
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i-1;
    //loop through while comparing with the value before it/ sorted sublist
    while(j >= 0 && arr[j] > temp) {
        arr[j+1] = arr[j];
        j--;
    }
    //after we find the correct position of the value, insert
    arr[j+1] = temp;
  }
  return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2]));


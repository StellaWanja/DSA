// tends not to be used as it is not efficient compared to other sorting algos
// is built by bubbling up the largest values to the end
// eg [5,3,4,1,2]
// 1st swap -> [5,3,4,1,2], [3,5,4,1,2], [3,4,5,1,2], [3,4,1,5,2], [3,4,1,2,5]
// 2nd swap -> [3,4,1,2,5], [3,4,1,2,5], [3,1,4,2,5], [3,1,2,4,5]
// 3rd swap -> [3,1,2,4,5], [1,3,2,4,5], [1,2,3,4,5]
// 4th swap -> [1,2,3,4,5]

//best case -> O(n)
//worst case -> O(n^2)
// space complexity -> O(1)
//is stable

function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function bubbleSort(arr){
    //start with looping variable i from end to beginning to prevent unecessary checks
    //the unecessary checks -> the last value already bubbled up is already sorted
    let noSwaps; //noSwaps helps prevent extra iterations if the array was already sorted eg [8,1,2,3,4];
    for(let i=arr.length; i>0; i--){
        noSwaps = true;
        for(let j=0; j<i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1);
                noSwaps = false;
            }
        }
       if(noSwaps) break; //noSwaps breaks if no swaps were made thus making it slightly faster
    }
    return arr;
}

console.log(bubbleSort([5,3,4,1,2]));
//repeatedly selects the smallest/largest element from the unsorted portion of the list and moves it to the sorted portion of the list. 
// [5,3,4,1,2] -> 5 is the first min, compare it to 3, set 3 as new min
// continually loop through until you find the next minimum value, which is 1 and set it
// then swap new min(1) with 5
// so it will be -> [1,3,4,5,2]
//continue on but this time from the next value(3)

// best and Worst case -> O(n^2)
//space complexity -> O(1)
// not stable

function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let min = i;
        for(let j= i+1; j<arr.length; j++){
            if(arr[min] > arr[j]){
                min = j;                
            }
        }
        if(i !== min) swap(arr,min,i);
    }
    return arr;
}

console.log(selectionSort([5,3,4,1,2]));

// binary search only works on sorted array
// Big O worst & average case -> O(log n), best case -> O(1)


const binarySearch = (arr, val) => {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    let midPointer = Math.floor((rightPointer + leftPointer)/2);

    while(arr[midPointer] !== val && leftPointer <= rightPointer){
        if (val < arr[midPointer]){
            rightPointer = midPointer-1;
        } else{
            leftPointer = midPointer+1;
        } 
        midPointer = Math.floor((leftPointer+rightPointer)/2);
    }
    
    return arr[midPointer] === val ? midPointer : -1;
}

console.log(binarySearch([1,3,5,7,9,10,13,15,19,27], 11));


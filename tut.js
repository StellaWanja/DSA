function maxProfit(prices) {
    //have 2 loops
    //first loop -> starts at 0;
    //next loop -> starts at 0+1
    //check if there is a value greater than the one at start, if not, skip ahead
    //if there is, subtract and add to res
    //if another num comes up greater than res, replace
    let res = 0;
    for(let i=0; i<prices.length-1; i++){
        for(let j=i+1; j<prices.length; j++){
            res = Math.max(res, prices[j] - prices[i]);
       }
    }
    return res;
};

console.log(maxProfit([7,1,5,3,6,4]))

const reverseString = (str) => {
    let arr = str.split('');
    let left = 0;
    let right = arr.length-1;

    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr.join('');
}

console.log(reverseString("Hello"))

const mergeArr = (arr1, arr2) => {
    //create a results arr that will be output
    let res = [];
    //set idx of leftArr and rightArr at start of arrays
    let leftIdx = 0;
    let rightIdx = 0;
    //loop through as long as indexes do not go out of bounds
    while(leftIdx < arr1.length && rightIdx < arr2.length){
        //compare elements at leftArr and rightArr and if lower then add to results arr and adjust indexes accordingly
        if(arr1[leftIdx] < arr2[rightIdx]){
            res.push(arr1[leftIdx]);
            leftIdx++;
        } else{
            res.push(arr2[rightIdx]);
            rightIdx++;
        }
    }

    while(leftIdx < arr1.length){
        res.push(arr1[leftIdx]);
        leftIdx++;
    }
    while(rightIdx < arr2.length){
        res.push(arr2[rightIdx]);
        rightIdx++;
    }

    return res;
}   

console.log(mergeArr([0,3,4], [4,6,30]));

const firstRecurringNum = (arr) => {
    //create a map
    let map = new Map();
    //loop through arr items
    for(let i=0; i<arr.length; i++){
        //if el is already in map, return num
        if(map.has(arr[i])){
            return arr[i];
        } 
        // else add to map
        map.set(arr[i], i)
    }
    // return null if there is no recurring num
    return null;
}

console.log(firstRecurringNum([2,5,1,3,2,5,3]));

function merge(arr1,arr2){
    let res = [];
    let leftId = 0;
    let rightId = 0;

    while(leftId < arr1.length && rightId < arr2.length){
        if(arr1[leftId] < arr2[rightId]){
            res.push(arr1[leftId]);
            leftId++;
        } else {
            res.push(arr2[rightId]);
            rightId++;
        }
    }

    while(leftId < arr1.length){
        res.push(arr1[leftId]);
        leftId++;
    }
    while(rightId < arr2.length){
        res.push(arr2[rightId]);
        rightId++;
    }
    return res;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let leftArr = mergeSort(arr.slice(0,mid));
    let rightArr = mergeSort(arr.slice(mid));
    return merge(leftArr,rightArr);
}

console.log(mergeSort([4,8,2,1,5,7,6,3]));


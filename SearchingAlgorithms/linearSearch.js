// search methods that use linear search include:
// 1. indexOf()
// 2. includes()
// 3. find()
// 4. findIndex()

const linearSearch = (arr, val) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([3,12,100,5], 55));


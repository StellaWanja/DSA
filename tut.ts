function bubbleSort(arr: number[]){
    let noSwap: boolean;
    for(let i=arr.length; i>0; i--){
        noSwap = true;
        for(let j=0; j<i-1; j++){
            if(arr[j] < arr[j+1]){
                let temp=arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([10,2,5,9,6,8]));

function max(arr: number[]){
    let max = arr[0];
    let min = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }

    return {min, max};
}

console.log(max([10,2,5,9,6,8]));

function maxSubarraySum(arr: number[]){
    let maxSum: number = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            maxSum += arr[i];
        }
    }

    return maxSum;
}

console.log(maxSubarraySum([-4,5,7,-6,10,15,3])); //16
console.log(maxSubarraySum([5,7,6,10,3]));

function arrayLeaders(arr: number[]){
    let res: number[] = [];
    let max = arr[arr.length-1];
    res.push(max);

    for(let i=arr.length-2; i>=0; i--){
       if(max < arr[i]){
            max = arr[i];
            res.push(max);
       }
    }   

    return res;
}

console.log(arrayLeaders([16,17,4,3,5,2]));
console.log(arrayLeaders([6,5,4,3,2,1]));
console.log(arrayLeaders([1,2,3,4,5,6]));

function mountainArr(arr: number[]): Boolean{
    let bool: Boolean;
    let left = 0;
    let right = arr.length-1;

    while(left < arr.length-1 && arr[left] < arr[left+1]){
        left++;
    }
    while(right > 0 && arr[right] < arr[right-1]){
        right--;
    }

    if(left > 0 && left === right && right < arr.length) {
        bool = true;
    } else {
        bool = false;
    }
    return bool;
    // let climb = 0;

    // while(arr[climb] < arr[climb+1] && climb < arr.length-1){
    //     climb++;
    // }
    
    // if(climb === 0 || climb === arr.length-1){
    //     return false;
    // }

    // while(arr[climb] > arr[climb+1] && climb < arr.length-1){
    //     climb++;
    // }

    // if(climb === arr.length-1){
    //     return true;
    // } else {
    //     return false;
    // }
}

console.log(mountainArr([5,2,1,4]));
console.log(mountainArr([5,8,8]));
console.log(mountainArr([1,2,6,5,3]));

function romanChar(char: string) {
    if(char === "I") return 1;
    if(char === "V") return 5;
    if(char === "X") return 10;
    if(char === "L") return 50;
    if(char === "C") return 100;
    if(char === "D") return 500;
    if(char === "M") return 1000;
};

function RomanToNum(string: string): number{
    let output: number = 0;
    let cur, next;

    for(let i=0; i<string.length; i++){
        cur = romanChar(string[i]);
        next = romanChar(string[i+1]);
        if(i+1 < string.length){
            if(cur >= next){
                output = output + cur;
            }
            else{
                output = output + next - cur;
                i++;
            }
        } else {
            output = output + cur;
        }
    }

    return output;
}   

console.log(RomanToNum('XL'));
console.log(RomanToNum('LVIII'));
console.log(RomanToNum('MCMIV'));


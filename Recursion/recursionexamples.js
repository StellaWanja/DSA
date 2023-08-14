function countDown(num){
    //base case
    if(num <= 0){
        console.log("all done!");
        return; // stops iteration
    }
    console.log(num);
    num--;
    countDown(num);
}

function sumRange(num){
    if (num === 1) return 1;
    return num + sumRange(num-1);
}

function factorial(num){
    if (num === 1) return 1;
    return num * factorial(num-1);
}

factorial(4);

function fibonacci(num){
    //is too slow - O(2^n)
   // 0,1,1,2,3,5,8,13
   //num-1 + num-2
   if(num === 0) return 0;
   else if (num === 1) return 1;
   else return fibonacci(num-1) + fibonacci(num-2);
}

//efficient fibonacci
function fib(num){
    let fib = [0,1];
    for(let i=2; i<num; i++){
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
}

function sumOfDigits(num){
    //eg 142 => 1,4,2 => 7
    return (num % 10) + sumOfDigits((num%10 - 1));
}

/* INTRO
    -> works on lists of numbers
    -> never makes comparisons between elements
    -> rather it exploits the fact that info about the size of a number is encoded in the number of digits 
    -> ie, more numbers = more digits
    -> works by grouping digits in buckets
    -> so eg [10,125,85,32,39]
    -> will be first grouped by the first digits
    -> {0: 10} {1: } {2: 32} {3: } {4: } {5: 125,85} {6: } {7: } {8: } {9: 39}
    -> then proceed to next digit
    -> {0: } {1: 10} {2: 125} {3: 32,39} {4: } {5: } {6: } {7: } {8: 85} {9: }
    -> {0: 10,32,39,85} {1: 125} {2: } {3: } {4: } {5: } {6: } {7: } {8: } {9: }
*/

//function that gets the digit of the number
function getDigit(num, i){
  return Math.floor(Math.abs(num)/ Math.pow(10,i)) % 10;
}

//function to get the number of digits in a number
function getDigitCount(num){
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1; 
}

//function to get the number of digits in the largest numbers in a given array
//eg [1234, 5, 11] => 4
function mostDigits(nums){
  let maxDigits = 0;
  for(let i=0; i<nums.length; i++){
    maxDigits = Math.max(maxDigits, getDigitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr){
  let maxDigitCount = mostDigits(num); //max digits in a number, will be the number of times a loop will be done
  for(let k=0; ik<maxDigitCount; k++){
    let digitBuckets = Array.from({length:10}, () => []); //create 10 buckets from 0 to 9
    for(let i=0; i<arr.length; i++){
      let digit = getDigit(nums[i],k);
      digitBuckets[digit].push(nums[i]); //push num to respective bucket based on digit
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
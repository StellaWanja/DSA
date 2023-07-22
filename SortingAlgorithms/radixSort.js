// doesn't work on comarisons
// works on lists of numbers
// never makes comparisons on elements
// it exploits the fact that info about size of a number is encoded in the number of digits
// more digits = bigger number
// works by placing items in a bucket based on the order of elements
// eg [8682,1263,6017,2235,1505,7285,4632,4780,54,7185]
// place the items in buckets based first on the value of the first digit of a number
// 0-> [4780], 1-> [], 2-> [8682,4632], 3-> [1263], 4-> [54], 5-> [2235,1505,7285,7185], 6-> [], 7-> [6017], 8-> [], 9-> []
// so array will be -> [4780,8682,4832,1263,54,2235,1505,7285,7185,6017]
// then place the items in buckets based on the value of the second digit of a number
// 0-> [1505], 1-> [6017], 2-> [], 3-> [4632,2235], 4-> [], 5-> [54], 6-> [1263], 7-> [], 8-> [4780,8682,7285,7185], 9-> []
// so array will be -> [1505,6017,4632,2235,54,1263,4780,8682,7285,7185]
// then place the items in buckets based on the value of the third digit of a number
// 0-> [6017,54], 1-> [7185], 2-> [2235,1263,7285], 3-> [], 4-> [], 5-> [1505], 6-> [4632,8682], 7-> [4780], 8-> [], 9-> []
// so array will be -> [6017,54,7185,2235,1263,7285,1505,4632,8682,4780]
// then place the items in buckets based on the value of the fourth digit of a number
// 0-> [54], 1-> [1263,1505], 2-> [2235], 3-> [], 4-> [4632,4780], 5-> [], 6-> [6017], 7-> [7185,7285], 8-> [8682], 9-> []
// so array will be -> [54,1263,1505,2235,4632,4780,6017,7185,7285,8682]

// helper functions needed
// 1. getDigit(num, place) - returns the digit in num at the given place value eg getDigit(12345,0)=5
// 2. digitCount(num) - returns the number of digits in num eg digitCount(25)=2
// 3. mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

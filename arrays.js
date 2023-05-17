//create an array
var arr = []; //more efficient way to create an array
var arr1 = [1, 2, 3, 4, 5];
var arr2 = new Array();
var arr3 = new Array(1, 2, 3, 4, 5);
var arr4 = new Array(5); //creates array with length of 5
Array.isArray(arr1); //check if object is an array

//Creating Arrays from Strings
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");

//Searching for a Value
//1. using indexOf() - will always return the position of the first occurrence
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
//putstr("Enter a name to search for: ");
//var name = readline();
// var position = names.indexOf(name);
// if (position >= 0) {
//   print("Found " + name + " at position " + position);
// } else {
//   print(name + " not found in array.");
// }

//2. using lastIndexOf() - will return the position of the last occurrence of the argument in the array
var names = [
  "David",
  "Mike",
  "Cynthia",
  "Raymond",
  "Clayton",
  "Mike",
  "Jennifer",
];
// var name = "Mike";
// var firstPos = names.indexOf(name);
// print("First found " + name + " at position " + firstPos);
// var lastPos = names.lastIndexOf(name);
// print("Last found " + name + " at position " + lastPos);

//String Representations of Arrays
// using join() and toString() methods

//Creating New Arrays from Existing Arrays
// 1. concat() - allows you to put together two or more arrays to create a new array
// 2. splice() - allows you to create a new array from a subset of an existing array

//Putting Array Elements in Order
// 1. reverse()
// 2. sort() -  works well for strings not numbers
// to set sort() to sort numbers, add another function as such
function compare(num1, num2) {
  return num1 - num2;
}
var nums = [3, 1, 2, 100, 4, 200];
nums.sort(compare);

//Non–Array-Generating Iterator Functions - functions that do not generate another array
// 1. forEach()
// 2. every() - applies a Boolean function to an array and returns true if the function can return true for every element in the array.
// 3. some() - will take a Boolean function and return true if at least one of the elements in the array meets the criterion of the Boolean function
// 4. reduce() -

//Iterator Functions That Return a New Array
// 1. map()
// 2. filter()

//Two-Dimensional and Multidimensional Arrays
//Create 2d array
Array.matrix = function (numrows, numcols, initial) {
  var arr = [];
  for (var i = 0; i < numrows; ++i) {
    var columns = [];
    for (var j = 0; j < numcols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
};

//process elements of a 2d array
var grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
//  print("Student " + parseInt(row + 1) + " average: " + average.toFixed(2));
  total = 0;
  average = 0.0;
}

// Jagged Arrays - an array where the rows in the array may have a different number of elements
var grades = [
  [89, 77],
  [76, 82, 81],
  [91, 94, 89, 99],
];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  //print("Student " + parseInt(row + 1) + " average: " + average.toFixed(2));
  total = 0;
  average = 0.0;
}

// traverse an array
let array = []; 
array.push(10);
array.push(20);
array.push(30);
array.push(40);
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  //console.log(element);
}

//insert element at end of array - O(1)
let arraySize = array.length;
array[arraySize] = 50;
console.log(array);

//insert element at beginning of array
const startNum = 0;
for(let index = array.length; index>=0; index--){
  array[index] = array[index-1];
}
array[0] = startNum;
console.log(array);

//insert element at nth position
const pos = 2;
const addNum = 15;

if(pos <= 0 || pos > array.length){
  console.log("incorrect position");
}
else{
  for(let index = array.length; index>=pos; index--){
    array[index] = array[index-1];
  }
  array[pos] = addNum;
}
console.log(array);

//deletion
let arrayDeletion = [];
arrayDeletion.push(2);
arrayDeletion.push(3);
arrayDeletion.push(5);
arrayDeletion.push(7);
arrayDeletion.push(11);
arrayDeletion.push(13);
arrayDeletion.push(17);

//deletion at end
arrayDeletion.length = arrayDeletion.length-1;
console.log(arrayDeletion); 

//deletion at start
for(let index=1; index<= arrayDeletion.length-1; index++){
  arrayDeletion[index] = arrayDeletion[index+1];
}

console.log(arrayDeletion);

//deletion at nth position
if(pos < 0 || pos >= arrayDeletion.length){
  console.log("incorrect position");
}
else {
  for(let i=pos; i<=arrayDeletion.length-1; i++){
    arrayDeletion[i] = arrayDeletion[i+1];
  }
  console.log(arrayDeletion);
}


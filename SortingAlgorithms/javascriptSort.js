//JS Sort works based on the case
// eg in alphanumeric characters - will sort alphabetically
console.log(["Clap", "Sing", "Dance", "Sleep"].sort());

//however in numbers that is not always the case
console.log([6,10,52,5,8].sort()); //doesn't work as expected

//the sort function when working with numbers requires an optional comparator function
//use the comparator function to tell JavaScript how you want it to sort
//The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
// 1.If it returns a negative number, a should come before b
// 2.If it returns a positive number, a should come after b,
// 3.If it returns 0, a and b are the same as far as the sort is concerned
function comparatorFunction(num1, num2){
    return num1-num2;
}
console.log([6,10,52,5,8].sort(comparatorFunction));


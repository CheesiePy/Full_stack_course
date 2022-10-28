// arrays ! 
// array is a collection of values



const arr1 = [1, 2, 3, 5, 4];
const arr2 = [1, "2", 3, "4", 5];
const arr3 = [1, "2", 3, "4", 5, [1, 2, 3, 4, 5]];

console.log(arr3.sort()); 
//
// sort() sorts the array in place and returns the lexical sorted array
// use the compare function to sort the array numerically

function compare(a, b) {
    return a - b; // a - b returns a negative number if a < b 
} 


console.log(arr1.sort(compare)); // sort the array numerically
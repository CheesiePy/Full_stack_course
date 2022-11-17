// // variables and data types

// // variables
// var myVariable = 5; // old way Es5 and before

// let myVariable2 = 10; // new way Es6 and after
// const myVariable3 = 15; // new way Es6 and after

// // data types
// // string - text
// let myString = "this is a string";
// // number - integer, float
// let myNumber = 10;
// // boolean - true or false
// let myBoolean = true;
// // array - list of items
// let myArray = [1, 2, 3, 4, 5];
// // object - key value pairs
// let myObject = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3"
// };
// // undefined - variable that has not been assigned a value
// let myUndefined;
// // null - empty value
// let myNull = null;

// // operators - +, -, *, /, %, ++, --
// // assignment operator
// let myVariable4 = 10;


// // arithmetic operators
// let myVariable5 = 10 + 5;
// let myVariable6 = 10 - 5;
// let myVariable7 = 10 * 5;
// let myVariable8 = 10 / 5;
// let myVariable9 = 10 % 5;
// myVariable5++;
// myVariable6--;


// // comparison operators
// let myVariable10 = 10 > 5;
// let myVariable11 = 10 < 5;
// let myVariable12 = 10 >= 5;
// let myVariable13 = 10 <= 5;
// let myVariable14 = 10 == 5;
// let myVariable15 = 10 != 5;

// // logical operators
// let myVariable16 = 10 > 5 && 10 < 15;
// let myVariable17 = 10 > 5 || 10 > 15;
// let myVariable18 = !(10 > 5);

// // string operators
// let myVariable19 = "Hello" + "World";


// // conditional statements
// // if statement - if the condition is true, run the code
// if(10 > 5) {
//     console.log("10 is greater than 5");
// }

// // if else statement - if the condition is true, run the code, if the condition is false, run the code in the else statement
// if(10 > 5) {
//     console.log("10 is greater than 5");
// } else {    
//     console.log("10 is not greater than 5");
// }



// // if else if statement
// if(10 > 5) {
//     console.log("10 is greater than 5");
// }
// else if(10 < 5) {
//     console.log("10 is less than 5");
// }
// else {
//     console.log("10 is equal to 5");
// }


// // switch statement - used to perform different actions based on different conditions
// let myVariable20 = 10;


// switch(myVariable20) {
//     case 5:
//         console.log("myVariable20 is equal to 5");
//         break;
//     case 10:
//         console.log("myVariable20 is equal to 10");
//         break;
//     case 15:
//         console.log("myVariable20 is equal to 15");
//         break;
//     default:
//         console.log("myVariable20 is not equal to 5, 10 or 15");
// }

// // loops

// for loop - loops through a block of code a number of times
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // for in loop - loops through the properties of an object
// let myObject2 = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3"
// };

// for(let i in myObject2) {
//     console.log(i);
// }

// for(let i = 0;  i < Object.keys(myObject2).length; i++){
//     console.log(myObject2[Object.keys(myObject2)[i]])
// }





// // for of loop - loops through the values of an iterable object
// let myArray2 = [1, 2, 3, 4, 5, {name:"may"}];

// for(let value of myArray2) {
//     console.log(value);
// }



// // // forEach loop - loops through the items of an array

// let myArray3 = [1, 2, 3, 4, 5];

// myArray3.forEach(function(value) {
//      console.log(value*2);
// });


// // // while loop - loops through a block of code while a specified condition is true
// let i = 0;

// while(i < 10) {
//      console.log(i);
//      i++;
// }


// // do while loop - loops through a block of code once, and then repeats the loop while a specified condition is true

// let j = 0;

// do {
//     console.log(j);
//     j++;
// } while(j < 10);


// // // functions 

// // // function declaration
// function myFunction() {
//     console.log("this is my function");
// }

// myFunction();
// // // function expression
// const myFunction2 = function() {
//     console.log("this is my function");
// }

// myFunction2();
// // // arrow function
// const myFunction3 = () => {
//     console.log("this is my function");
// }

// // // function with parameters
// const myFunction4 = (param1, param2) => {
//     console.log(param1, param2);
// }

// // // function with default parameters
// const myFunction5 = (param1 = "default1", param2 = "default2") => {
//     console.log(param1, param2);
// }
// myFunction5();

// // // function with return
// const myFunction6 = (param1 = 1, param2 = 2) => {
//     return param1 + param2;
// }



// const f = () => {
//     console.log("f")
//     return 1;
// }

// const fun = () => {
//     console.log("fun");
//     return 5;
// }

// const g = (a, b) => {
//     console.log("g")
//     console.log(b() + a)
// }


// function func(){
//     console.log("v");
// }



// const x = () => {
//     console.log("w")
// }


 

// // function with return and default parameters

// const myFunction7 = (param1 = "default1", param2 = "default2") => {
//     return param1 + param2;
// }


// // anonymous function with IIFE
// (function() {
//     console.log("this is my function");
// })();

//anonymous function with IIFE and aerrow function

console.log(((a=1,b=2) => {return (a-b)**2;})(26,29));




// // objects
// // object literal
let myObject3 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

// // object constructor
let myObject4 = new Object();
// myObject4.key1 = "value1";
// myObject4.key2 = "value2";
// myObject4.key3 = "value3";


// // object methods
let myObject5 = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    myMethod: function() {
        console.log("this is my method");
    }
}
myObject5.myMethod();




// // arrays

// // array literal
// let myArray4 = [1, 2, 3, 4, 5];

// // array constructor
// let myArray5 = new Array();

// // array methods
// // push - add to the end of the array
// myArray4.push(6);

// // pop - remove from the end of the array
// myArray4.pop();

// // shift - remove from the beginning of the array
// myArray4.shift();

// // unshift - add to the beginning of the array
// myArray4.unshift(0);

// // splice - remove from the middle of the array
// myArray4.splice(2, 1);

// // slice - copy part of the array
// let myArray6 = myArray4.slice(2, 4);

// // concat - join two arrays
// let myArray7 = myArray4.concat(myArray6);

// // join - convert array to string
// let myArray8 = myArray4.join(" ");

// // sort - sort the array
// let myArray9 = myArray4.sort();

// // reverse - reverse the array
// let myArray10 = myArray4.reverse();














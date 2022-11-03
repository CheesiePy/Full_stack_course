// Random

let a = Math.random(); // returns a random number between 0 and 1 (floating point number)
// console.log(a);

let b = Math.floor(Math.random() * 10); // returns a random number between 0 and 9 (whole number)
// console.log(b);

let c = Math.random() * 10; // returns a random number between 1 and 10 (floating point number)
//console.log(c);

let d = Math.floor(Math.random() * 10) + 1; // returns a random number between 1 and 10 (whole number)
//console.log(d)

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }



let k = getRandomNumber(5, 55);
// console.log(k);

let max = 55, min= 5;
let m = 0;
// while (m <= 55){
//     m = Math.floor(Math.random() * (max - min + 1)) + min       // [0 ,54] -> [5, 59]   goal [5,55]
//     console.log(m)    
// }


// // Looping in JavaScript
// /*
// for
// for in
// for of
// while
// do while
// recursive loops (functions calling themselves)
// */

// for loop
// for (let i = 0; i < 10; i--) {
//     console.log(i);
// }

// // for in loop (for objects)
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// for (let i in obj) {
//     console.log(i);
// }

// // for of loop (for arrays)
let arr = [1, 2, "May", 4, 5, "Python"];

// for(let j =0; j < arr.length; j++){
//     console.log(arr[j])
// }

// for (let i of arr) {
    // console.log(typeof(i));
// }
// 

// // while loop
// let i = 10;
// while (i < 10) {
//     i++;
//     console.log(i);
// }


// // // do while loop
// let j = 100;
// do {
//      console.log(j);
//      j++;
// }
// while (j < 10);

// recursive loop
// function recursiveLoop(i) {
//     console.log(i);
//     if(i < 100){
//         recursiveLoop(i + 1);
//     }
// }
// recursiveLoop(0);

// let x = [];
// const arr2 = [100, 2, 5, 35, 1];

// function func(val){
//     x.push(val*5);
// }

// arr2.forEach(func);

// console.log(x);

function ml(){
    let x;
    while(x != "Quit"){
        x = prompt("enter a value:" );
    }
}

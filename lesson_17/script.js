// Math Object


// Math static objects 


// let x = Math.floor(7.7); // round down
// let y = Math.round(7.7); // round to nearest
// let z = Math.ceil(7.7); // round up
// let w = Math.trunc(7.7); // remove decimal



// console.log(x); // 7
// console.log(y); // 8
// console.log(z); // 8
// console.log(w); // 7


// // // find the largest number
// let a = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(a); // 10

// //find the smallest number
// let b = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(b); // 1

// let i;
// let arr = [];
// for(i = 0; i < 100; i++){
//     arr.push(Math.random()*i)
// }

// console.log(Math.max(...arr))


//find largest number in an array
let arr = [1, 2, 3, 4, 5, 16, 7, 8, 9, 10]
let c = Math.max(...arr); // the triple dots are the spread operator
console.log(c);


// // spread operator example
// let d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let a = [1,2]
// let b = [a,...a,...d]
// console.log(b);


// Boolean values

// let t = true;
// let f = false;

// let coin = t && f; // AND operator
// let coin2 = t || f; // OR operator
// let coin3 = !t; // NOT operator

// console.log(coin); // false
// console.log(coin2); // true
// console.log(coin3); // false

// if (!(coin2 && coin3)){ // true
//     console.log("im inside a conditinal")
// }
// if (coin || !coin3){ // true
//     console.log("im inside a conditinal")
// }
// if (! ( !(!coin3 && !coin) || !(coin || !coin3)  )){ // true
//     console.log("im inside a conditinal")
// }

// /**
//  *  |
//  *  |
//  *  |
//  *  |
//  * /|\
//  * 
//  * 
//  */

// if(10 < 11){
//     console.log(1)
// }
// else if(12 > 2){
//     console.log(2)
// }else{
//     console.log(3)
// }

// this is a clone!

// everythin with a value is true except for 0, null, undefined, NaN, false













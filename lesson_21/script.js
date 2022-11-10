// Number Methods 
// 1. Number() - converts a value to a number

let a = "10 hasdfasdfasd";
let an = Number(a);
console.log(an);

// //2. toFixed() - converts a number to a string, keeping a specified number of decimals

// let b = 10.123456789;
// let bn = b.toFixed(3);
// console.log(bn);

// // // 3. toPrecision() - converts a number to a string, keeping a specified number of digits

// let c = 100.123456789;
// let cn = c.toPrecision(4);
// console.log(cn);


// 4. toString() - converts a number to a string, using the specified base

// let d = 5;
// console.log(d.toString(2)); // 101
// console.log(d.toString(8)); // 5
// console.log(d.toString(10)); // 5
// console.log(d.toString(16)); // 5

// d2 = 17;
// console.log(d2.toString(2)); // 10001
// console.log(d2.toString(8)); // 21
// console.log(d2.toString(10)); // 17
// console.log(d2.toString(16)); // 11


//5. toExponential() - converts a number to a string, using exponential notation .. not relevant for us


// let e = 10.987654321;
// let en = e.toExponential(2);
// console.log(en);

// // 6. valueOf() - returns the primitive value of a number ... not relevant for us

// 7. isNaN() - checks if a value is Not-a-Number

// let f = "10";
// let fn = Number(f);
// console.log(isNaN(fn));

// let g = "10a";
// let gn = Number(g);
// console.log(isNaN(gn));

function isString(str){
    return (typeof(str) == typeof(""))
}


console.log(isString(5))


// 8. parseInt() - parses a string and returns an integer

let h = "10";
let hn = parseInt(h);
console.log(hn); // 10

let i = "10.123456789";
let inn = parseInt(i);
console.log(inn); // 10

let j = "1,000,000";
let jn = parseInt(j);
console.log(jn); // 1 ... because it stops at the first non-digit character

//9. parseFloat() - parses a string and returns a floating point number

let k = "10";
let kn = parseFloat(k);
console.log(kn); // 10

let l = "10.123456789 hello my friend at progeeks ";
let ln = parseFloat(l);
console.log(ln); // 10.123456789

// // 10. Number.MAX_VALUE - returns the largest number possible in JavaScript

console.log(Number.MAX_VALUE);


// 11. Number.MIN_VALUE - returns the smallest number possible in JavaScript

console.log(Number.MIN_VALUE);


// Promise in JavaScript

// Promise is an object that represents the eventual completion or failure of an asynchronous operation

const a = 3;
let promise = new Promise((resolve, reject) => {
    if (a == 3) {
        resolve("success");
    }
    else {
        reject("failed");
    }
}).then(result => {
    console.log(result)
    console.log(c.number);
}).catch(error => {
    console.log(error);
});

let c = new Object();
c.number = 5;


if (c.number == 10) {
    console.log("true");
} else {
    console.log("false");
}



// // async
// setTimeout(() => {
//     console.log("hey");
// }, 3000);

// setTimeout(() => {
//     setTimeout(() => {
//         console.log("hey");
//     }, 0);

// }, 2000);

// setTimeout(() => {
//     c.number = 10;
//         console.log(c);
// }, 1000);









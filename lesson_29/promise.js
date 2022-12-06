// Promise in JavaScript

// Promise is an object that represents the eventual completion or failure of an asynchronous operation

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
    
}).then(result => console.log(result));


// more examples







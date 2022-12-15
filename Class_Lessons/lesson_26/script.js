//let data_obj;

let json = fetch('user1.json') // fetch returns a promise
            .then(response => response.json())
            .then(data => console.log(data))


function print(a){
    console.log(a)
}


// for(let i = 0; i < 150; i++){
//     console.log(`im prited first${i}`, json);
// }

// for(let i = 0; i < 150; i++){
//     console.log(`im prited first${i}`, json);
// }


// promise in javascript
// let promise = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if(a == 2){
//         resolve('Success');
//     }else{
//         reject('Failed');
//     }
// });
// a promise is an object that represents the eventual completion or failure of an asynchronous operation
// a promise is in one of three possible states: fulfilled, rejected, or pending
// a promise is settled if it is either fulfilled or rejected
// a promise is fulfilled when the asynchronous operation completes successfully'
// a promise is rejected when the asynchronous operation fails
// a promise is pending when the asynchronous operation has not completed yet



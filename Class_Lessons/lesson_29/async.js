// Async Functions
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//         resolve('resolved');
//         }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//       }
//     // expected output: "resolved"
//   }
  
let asyncForLoop = async (stop,time=2000,start=0,jump=1) => {

    for (let i = start; i < stop; i+=jump) {
    console.log("hey");
        await new Promise((resolve, reject) => {
            setTimeout(() => {    
                resolve(i);
            }, time);
        }).then(
            r => { 
                console.log(r)
            })
    }
}


let asyncWhile = async (stop,time=2000,start=0,jump=1) => {
    let i = start;
    while (i < stop) {
    console.log("hey");
        await new Promise((resolve, reject) => {
            setTimeout(() => {    
                resolve(i+=jump);
            }, time);
        }).then(
            r => { 
                console.log(r)
            })
    }
}



let f = await asyncForLoop(10, 1000);
asyncWhile(10, 1000);
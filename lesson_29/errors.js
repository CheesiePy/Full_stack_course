// error handiling

// try {
//     // code to try
//     console.log('Start of try runs' , a);
// }catch(error){
//     // error handling
//     console.log('Error has occured', error);
// }

// try...catch...finally

// try {
//     // code to try
//     console.logg('Start of try runs');
// }catch(error){
//     // error handling
//     console.log('Error has occured');
// }finally{
//     // always runs
//     console.log('This is always run');
// }

// // throw

// let x;

// try {
//     x = Math.floor(Math.random() * 9);
//     // code to try
//     console.log('Start of try runs');
//     // throw new Error('Whoops!'); // this will throw an error and stop the code
//     if(x < 3){
//         throw "eat eggs for breakfast"
//     }   
// }catch(error){
//     // error handling
//     console.log(`${error} has occured`);
// }finally{
//     console.log(x);
// }

function f(a){
    if(a < 0)
        throw "inside the function error!";
    if(a < -100)
        throw "very small number";
}

function g(a){
    if(a < 0)
        return "inside the function error!";
    if(a < -100)
        return "very small number";
}

function h(a){
    if(a < 0)
        console.log("inside the function error!");
    if(a < -100)
        console.log("very small number");
}


console.log(f(-105))













// try{
//     f(-1);
// }catch(e){
//     console.log(` this is the error type: ${e}`)
// }


// let g = 5;

// if(g < 33){
//     let a;
//     a = 15;
//     console.log(a);
// }

// console.log(a);
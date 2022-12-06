// error handiling

try {
    // code to try
    console.log('Start of try runs' , a);
}catch(error){
    // error handling
    console.log('Error has occured', error);
}

// try...catch...finally

// try {
//     // code to try
//     console.log('Start of try runs');
// }catch(error){
//     // error handling
//     console.log('Error has occured');
// }finally{
//     // always runs
//     console.log('This is always run');
// }

// // throw

// try {
//     // code to try
//     console.log('Start of try runs');
//     throw new Error('Whoops!'); // this will throw an error and stop the code
    
// }catch(error){
//     // error handling
//     console.log(`${error} has occured`);
// }
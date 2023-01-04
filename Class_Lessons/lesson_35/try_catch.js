console.log("start!");
let x;

// function f(){
//     try{
//         x = func();
//     }catch{
//         throw "f didn't work";
//     }
    
// }


// try{
//     x = "1"
//     console.log(x);
//     x = "2"
//     f();
// }catch(error){
//     x = "an error happend"
//     console.log(error);
// }finally{
//     console.log(x);
//     console.log("done!");
// }

function div(amount, num_of_kins){
    return amount/num_of_kins;
}

function main(){
    let sum = 10000
    
    let num_of_kins = 5
    for(let i = 0; i < num_of_kins; i++){
        try{
            if(div(10000,i) > 10000){
                throw "Math Error";
            }
            console.log(div(10000,i));
        }catch(error){
            console.error(error);
        }
        
    }
    console.log("done")
        
}




main();


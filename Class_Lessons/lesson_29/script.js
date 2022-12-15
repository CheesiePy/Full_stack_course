// let x = 5

// setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//         console.log(x);
//     }
// }, 2);

// console.log("----------------------------------------------------------------")

// console.log(`im outside the timeout ${x}`);

// x = 20

// console.log(`im outside the timeout ${x}`);








setInterval(() => {
    try{
        b = x + a
        console.log(b)
    }catch(e){
        console.log("x and a are not defined yeat!")
    }

}, 2000)

let user_input = prompt("enter 2 number: ") 
// " 1 5"

try {
    let arr = user_input.split(" ")
    a = Number(arr[0])
    x = Number(arr[1])
}catch(e){
    console.log("wrong input");
    a = 5
    x = 6
}










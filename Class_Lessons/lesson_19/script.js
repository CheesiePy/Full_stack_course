
// // scope
let x = 5 // global scope 

function f(a){
    let x = 6 // local scope of f()
    function g(){
        let x = 7 // local scope of g()
        return x;
    }
    return g();
}







// // function f(a){
// //    return a + 2;
// // }

// // f(x)




// /// p


// x = 5
// y = 7
// console.log(x + y)



// if(x < 15){
//     f()
//     console.log(x);
// }




function f(x, y="$$$"){
    return y + x + y;
}

// console.log(f("shalom"))


function g(a=1,b,c,d){
    return d;
}


function form(a_,b_,c_){
    return `helle mr. ${b_} your new username is ${c_}, with regards ${a_}`;
}

email = "@progeeks.com"
boss="avivit"
students = ["hanan", "shalom", "itamar"]
for(let i = 0; i < students.length; i++){
    username = students[i] + email;
    console.log(form(boss,students[i],username));
}











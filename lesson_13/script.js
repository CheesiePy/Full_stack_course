let human = "John Doe", gender = "Male", age = 25, height = 5.8, weight = 65, married = false, profession = "Engineer";

console.log("Full Name: " + human); // string concation 


const person = {
    name: "John Doe",
    name: "Dou John",
    gender : "Male"
};

const user = {
    userName : "username@slowmail.com",
    password : "123456"
}

console.log(person.name);
console.log(person["name"]);


console.log(typeof(person));
console.log(typeof(human));    



// javascript arithmetic operators:
/*
    + addition
    - subtraction
    * multiplication
    / division
    % modulus
    ** exponentiation
    ++ increment
    -- decrement
*/
// let key = 19
// let stop = 30
// let start = 0
// let jump = 1 

function mod(key,start,stop,jump){
    for (let i = start; i <= stop; i+=jump) {
        if(i%key == 0){
            console.log(`${i} divisable by ${key}`);
        }
    }
}

mod(3,0,30,1)


mod(6,0,30,1)


mod(9,0,30,1)

x = 3;
x++;
console.log(x); // -> 4


// javascript assignment operators:
/*
    = assignment
    += addition assignment
    -= subtraction assignment
    *= multiplication assignment
    /= division assignment
    %= modulus assignment
    **= exponentiation assignment
*/

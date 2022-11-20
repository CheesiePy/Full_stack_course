// new js features in ES6

// using => to create a function

const myFunc = () => {
    const myVar = "value";
    return myVar;
    }
    
    
console.log(myFunc());

// using => to create a function with a parameter

const myFunc2 = (value) => {
    return value;
    }

console.log(myFunc2("otherValue"));

// using => to create a function with a parameter and a default value

const myFunc3 = (value = "default") => {
    return value;
    }

console.log(myFunc3());


//IIFE - Immediately Invoked Function Expression

// fist way (old way)
(function myFunc4() {
    console.log("will this run?");
    }());

// second way
(() => console.log("will this run too?"))();

// anuonymous functions

// first way (old way)
const myFunc5 = function() {
    console.log("will this run?");
    }

myFunc5();

// second way (new way)
const myFunc6 = () => {
    console.log("will this run too?");
    }
    
myFunc6();    



let x = 10;

console.log(x);


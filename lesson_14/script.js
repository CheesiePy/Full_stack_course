// // functions 

// // function can preform a task or return a value


// function my_function(parameter1="a", parameter2="b") {
//     // do something
//     console.log(parameter1 + parameter2);
// } // this function does not return a value


// // console.log("im out side the function: ", my_function());


// function my_function2(parameter1, parameter2) { // manipulator 
//     // do something
//     return parameter1 + parameter2;
// } // this function returns a value

// // call the function
// let argument1 = 1;
// let argument2 = 2;


// my_function(argument1, argument2);

// let result = my_function2(argument1, argument2);

// let s = my_function2(result, result);

// console.log(result);
// console.log(s);

// function stringDecorator(str , decorator="dec", str2="str"){
//     return decorator + str + decorator + str2;
// }

// console.log(stringDecorator("may", "$$$"));


// // get user input using the prompt function

// let mystring = "hello";
// let mystring2 = "lello";
// let mystring3 = "1";
// let mynum = 1;

// my_function(mystring, mystring2);
// my_function(mystring3,mystring3);
// my_function(mynum, mynum);



function calc(a ,b , choice){
    if(typeof(a) != typeof(Number) || typeof(b) != typeof(Number)){
        return 
    }
    return a + b;
}



function user_input() {
    let num1 = prompt("Enter a number: ");
    let num2 = prompt("Enter another number: ");
    let result = calc(num1,num2); // convert the string to a number also called type casting
    alert(result);
    alert(" this is the values you entered " + num1 + " + " + num2 + " = " + result); // string concatenation
    alert(`${num1} + ${num2} = ${result}`); // template literal (` is not the same as ' or ")
}






function rec_func(n){
    // recursive function - homework is just to google it ~! 
    if(n == 0){
        return 0;
    }
    console.log(n);
    return rec_func(n);
}


// arrays ! 
// array is a collection of values

function f(b){
    if(b){
        return "15";
    }else{
        return 15;
    }
}

const arr1 = [1, 2, 3, 5, 4, "15", true];


const arr2 = [1, "2", 3, "4", 5];


const arr3 = [2, 22, 1, 1000, -1525];

const myArray = ["Python", "java", 2,"javascript", [1,[2,3],3]]

const arr4 = ["a", "ba" , "ab", "aa" ,"aac"]

// iterable , איטרציה 

const element = myArray[2];

// console.log(element);


// console.log(arr4.sort()); 


// sort() sorts the array in place and returns the lexical sorted array
// use the compare function to sort the array numerically

function compare(a, b) {
    return a - b; // a - b returns a negative number if a < b 
} 
// + , 0 ,

// console.log(arr3.sort(compare)); // sort the array numerically




// let x = "Galit";
// console.log(x[0]);


// function char_at(index, str){
//     return str[index];
// }
// console.log(char_at(x, 0));

function print_at(param1, param2, param3){
    console.log(param3);
    console.log(param1);
    console.log(param2);
    
}

const arr = []

let x = " hello world"

// let x1 = arr.pop();
// console.log(x1);
// console.log(arr)
//let x2 = arr.push("shigi")
//console.log(x2)

// let l = arr.length;
// arr.push("1")
// console.log(x[x.length-1])

// print_at( "shalom", "samuel", "may");

function print(a){
    console.log(a);
}


function greet(name_arr){
    if(typeof(name_arr) != typeof(string)){
        return false
    }
    for(let index = 0; index < name_arr.length; index++){
        console.log(`hello ${name_arr[index]}`);
    }
}

a = [ "shalom", "samuel", "may"]
x = "shalom samuel may"

greet(a)




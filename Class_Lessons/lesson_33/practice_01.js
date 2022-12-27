let isValidCustomer = true;

// while (conditon){
//     if(number > 100){
//         if(number % 2 == 0){
//             console.log("even")
//         }else{
//             if(number % 11 == 0){
                
//                 console.log("may's number", number);
//                 while((number > 0 || conditon == false)) console.log(number--);
                
//                 conditon = false;
//             }
//         }
        
//     }
//     console.log(number++);
// }
// console.log("i'm out side the while loop:",number)



// for
// let x,y,z;
// y = ["asdf","asdf","Asdf","dasdf",["asdfasfd"],123, {"name":"may"}]
// x = ["JavaScript", "Python", "Java", "CPP", ["JavaScript"]];
// for (let i = 0; i < x.length; i++){
//     console.log(x[i]);

//     for(let j = 0; j < x[i].length; j++){
//         if(x[i][j] == "J"){
//             x[i][j] = "T";
//             continue;
//         }
//         if(x[i][j] == "JavaScript")
//             x[i][j] = "TypeScript";

//     }
    
// }
// console.log(x);


// code...

let mystr = "JavaScript";
let arr = []
for (let i=0; i < mystr.length; i++){
    arr.push(mystr[i]);

}

x = [5]
y = [6]
// function swap(a,b){
//     let temp = a;
//     a = b;
//     b = temp;
//     a.push(5)
// }
let arr1 = [x,y]
let arr2 = [5, x]

const selectionSort = (arr) => {
    // Loop through the array
    for (i = 0; i < arr.length - 1; i++) { 
        let minIndex = i;
        // Loop through the unsorted array
        for (j = i + 1; j < arr.length; j++){ 
            // If the value is smaller than the minimum, change the minimum
            if (arr[j] < arr[minIndex]) { 
                minIndex = j; 
            } 
        }
    // Swap the minimum with the first element of the unsorted array
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]] 
    } 
    return arr
 }




console.log(arr)



























// promise
// async await
// JSON
// while Loop 
// fetch
// try catch finally throw
// event listener
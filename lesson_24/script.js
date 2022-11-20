let matrix = [[0,0,0],[0,0,0],[0,0,0]]

/**
 * [0,0,0]
 * [0,0,0]
 * [0,0,0]
 * n x n 
 */

function matrixBuilder(size=3, val=0){
    let matrix = []
    for(let row = 0; row < size; row++){ // this for loop will run size times.
        let inner_arr = []
        for(let col = 0; col < size; col++){
            inner_arr.push(val);
        }
        matrix.push(inner_arr)
    }
    return matrix
}

let m = matrixBuilder()


function setIndex(i,j,val){

}// -> [[0,0,0],[0,1,0],[0,0,0]]

let arr = [0,0,0]
function f(i, val, arr){
    arr[i] = val;
    return arr;
}
f(1,2,arr)
console.log(arr)









// let size = 5
// for(let i = 0; i < size; i++){ // nested for loops // run size times
//     console.log(i)
//     for(let j = 0; j < size; j++){ // inner loop will run size x size times 
//         console.log("----------")
//     }
// }





let matrix = [[0,0,0],[0,0,0],[0,0,0]]

/**
 * [0,0,0]
 * [0,0,0]
 * [0,0,0]
 * n x n 
 */

function matrixBuilder(size, val=0){
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

let m = matrixBuilder(3)


function setIndex(i,j,val){

}

// -> [[0,0,0],[0,1,0],[0,0,0]]






// let size = 5
// for(let i = 0; i < size; i++){ // nested for loops // run size times
//     console.log(i)
//     for(let j = 0; j < size; j++){ // inner loop will run size x size times 
//         console.log("----------")
//     }
// }





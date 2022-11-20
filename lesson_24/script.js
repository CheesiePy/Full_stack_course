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

function setIndex(matrix,i,j,val){
    matrix[i][j] = val;
}

function printMat(m){
    /**
     * [0,0,0]
     * [0,0,0]
     * [0,0,0]
     */
}



// mutables and imutables




// let size = 5
// for(let i = 0; i < size; i++){ // nested for loops // run size times
//     console.log(i)
//     for(let j = 0; j < size; j++){ // inner loop will run size x size times 
//         console.log("----------")
//     }
// }





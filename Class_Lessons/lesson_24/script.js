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

function setIndex(matrix,i,j,val){
    matrix[i][j] = val;
}

function printMat(m){
    /**
     * [0,0,0]
     * [0,0,0]
     * [0,0,0]
     */
    for(let i = 0; i < m.length; i++){
        console.log(...m[i])
    }
}

function diagonal(m, val=1){
    /**
     *  [ val, 0, 0 ]
        [ 0, val, 0 ]
        [ 0, 0, val ] 
     *
     *  */ 
    for(let i = 0; i<m.length; i++ ){
        setIndex(m,i,i,1)
    }
}

function diagonalT(m){
    /**
     *  0 0 1  (0,2) i + j = m.lengh - 1
     *  0 1 0  (1,1) j = m.lengh - 1 - i
     *  1 0 0  (2,0)
     * 
     * 0 0 0 0 0 1 (0, 5)
     * 0 0 0 0 1 0 (1, 4)
     * 0 0 0 1 0 0 
     * 0 0 1 0 0 0
     * 0 1 0 0 0 0
     * 1 0 0 0 0 0 (5 ,0)
     * 
     * 
     * 
     * */
    // for(let i = 0; i < m.length; i++){
    //     setIndex(m, i, m.length-1-i, "X")
    // }

    for(let i = m.length; i>= 0; i--){
        setIndex(m, m.length-1-i,i,1)
    }

}

function box(m , val){
    /**
     * size = 3
     *  1 1 1
     *  1 0 1
     *  1 1 1
     * 
     * size = 6
     * (i, 0)
     * 1 1 1 1 1 1 (0, j)
     * 1 0 0 0 0 1
     * 1 0 0 0 0 1 
     * 1 0 0 0 0 1
     * 1 0 0 0 0 1
     * 1 1 1 1 1 1 (m.length - 1, j)
     *         (i, m.length -1)
     * */
    for(let i=0; i < m.length; i++){
        for(let j=0; j < m.length; j++){
            if( i == 0 || j == 0 || i == m.length -1 || j == m.length - 1){
                setIndex(m, i,j, 1)
            }
        }
    }



}


function matrixToArray(m){
    let arr = []
    for(let i = 0; i < m.length; i++){
        // arr.push(...m[i])
        for(let j = 0; j < m.length; j++){
            arr.push(m[i][j])
        }
    }
    return arr
    
    /** input
     *  1 1 1
     *  1 0 1
     *  1 1 1
     * 
     */
    // output:[1, 1, 1, 1, 0, 1, 1, 1, 1]
}


function ArrayToMatrix(arr, num) {
    // Convert an array to a matrix for easier mental math
    let matrix = [], i, k;
    // k is the number of columns
    // i is the number of rows

    for (i = 0, k = -1; i < arr.length; i++) { // i is the number of rows and k is the number of columns
        if (i % num == 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(arr[i]);
    }
    return matrix;
}


    /**
     * input: [1, 1, 1, 1, 0, 1, 1, 1, 1].lengh = size**2
     * 
     * output:
     *  1 1 1
     *  1 0 1
     *  1 1 1
     * 
     * 
     */


function indexC(i,j,size){
    /**
     * 
     * 
     *  input i = 1 , j = 2 , size = 3:
     *  (1,1) = center
     *  1  1  1
     *  1  0 (1)
     *  1  1  1
     * 
     * 
     * 
     * output = 5 index of the array that represent the matrix
     * [1,1,1,1,0,(1),1,1,1]
     */
}


function main(){
    let promp = "------\n------\n------"
    let m = matrixBuilder(6)
    printMat(m)
    console.log(promp)
    //diagonal(m)
    //printMat(m)
    console.log(promp)
    // diagonalT(m)
    // printMat(m)
    box(m)
    printMat(m)
    let q = [[1,2,3,0],[4,5,6,0],[7,8,9,0],[0,1,2,0]]
    let arr = matrixToArray(q);
    console.log(arr)
    let m2 = ArrayToMatrix(arr, Math.sqrt(arr.length))
    console.log(m2)
    printMat(m2)
// }


}
main()





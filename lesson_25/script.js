/**
 * I made a mistake in the last lesson and I'm fixing it here.
 * 
 * 
 * Pass By Value -> Primitive Types (Number, String, Boolean)
 *      - When you pass a primitive type to a function, you are passing a copy of the value      
 *
 * Pass By Reference -> Objects (Array, Object, Function)
 *      - When you pass an object to a function, you are passing a reference to the object
 * 
 * 
 */

// this will be the functions we use to build the game
function reset() {
    // Reset the game
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].textContent = "";
    }
    counter = 0;
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

 
function checkForWin(matrix, symbol) {
    // Check for a win
    // return true;
    let Rcounter, Ccounter, Acounter, TAcounter;
    
    for (let i = 0; i < matrix.length; i++){
        Rcounter = 0;
        Ccounter = 0;
        Acounter = 0;
        TAcounter = 0;

        for(let j = 0; j < matrix[i].length; j++){

            if(matrix[i][j].textContent == symbol){
                // check for row
                    Rcounter++;
            }

            if(matrix[j][i].textContent == symbol){
                // check coliu
                    Ccounter++;
            }
            if(matrix[j][j].textContent == symbol){
                Acounter++;
            }
            if(matrix[j][matrix.length - j - 1].textContent == symbol){
                TAcounter++;
            }
            
        }
        if(Rcounter == matrix.length || 
            Ccounter == matrix.length ||
            Acounter == matrix.length ||
            TAcounter == matrix.length){
            return true;
        }
    }
    return false;
}






function checkforTie(arg) {
    // Check for a tie
}



// Game Logic
let counter = 0; // Keep track of the number of turns

let buttonArray = document.querySelectorAll(".btn"); // Get all the buttons

let coArray = []; // Create an array to store the coordinates of the buttons
buttonArray.forEach((button) => {
    coArray.push(button); // Push the buttons to the array
});

let matrix = ArrayToMatrix(coArray, Math.sqrt(coArray)); // Convert the array to a matrix

console.log(matrix);


for (let i = 0; i < buttonArray.length; i++) { // Loop through the buttons and add an event listener to each one

    buttonArray[i].addEventListener("click", 
    function() {
        let symbol;
        if(counter % 2 == 0 && buttonArray[i].textContent == "") {
            buttonArray[i].textContent = "X";
            counter++;     
            symbol = 'X';
        }else if(counter % 2 != 0 && buttonArray[i].textContent == "") {
            buttonArray[i].textContent = "O";
            counter++;
            symbol = 'O';
        }else{
            alert("This button is already clicked!");
        }

        if(checkForWin(matrix, symbol)){
            alert(`${symbol} has won`)
            reset()
        }
        
    }
);
}

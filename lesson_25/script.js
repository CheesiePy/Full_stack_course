let conter = 0;


let buttonArray = document.querySelectorAll(".btn");

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", function() {
        if(conter % 2 == 0) {
        buttonArray[i].textContent = "X";
        conter++;
        } else {
            buttonArray[i].textContent = "O";
            conter++;
        }
    });
}
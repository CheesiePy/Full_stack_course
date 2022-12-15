// event listener
document.getElementById("demo").addEventListener("keypress", displayDate);

document.addEventListener("keypress", displayDate);

function f(){
    return displayDate;
}


function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}



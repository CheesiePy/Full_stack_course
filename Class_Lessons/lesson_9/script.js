function myFunctionIsTheBest(){
    const name = document.getElementById("fname").value;
    const last_name = document.getElementById("lname").value;
    
    localStorage.setItem("fname", name);
    localStorage.setItem("lname", last_name);
}
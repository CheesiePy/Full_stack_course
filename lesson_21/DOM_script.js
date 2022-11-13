// DOM - Document Object Model
// DOM is a tree structure of objects that represent the HTML document

// The document object is the root of the DOM tree
// The document object is the owner of all other objects in the DOM tree


function getUserInput() {
    let firstname = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let c_password = document.getElementById("confirm-password").value;

    if( password == c_password){
        alert(firstname + " " + lastname + "\n" + email + "\n" + password + "\n" + c_password);
        console.log(firstname + " " + lastname + "\n" + email + "\n" + password + "\n" + c_password)    
    }else{
        alert("password not match");
    }
}

//



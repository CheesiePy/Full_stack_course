/*
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
            crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
     crossorigin="anonymous"></script>

*/ 

let addclasses = (classes, element) => {
    let classlist = classes.split(" ")
    for(let i = 0; i < classlist.length; i++){
        element.classList.add(classlist[i]);
    }
}



// load bootstrap req
let blink = document.createElement("link")
blink.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css")
blink.setAttribute("rel", "stylesheet");
blink.setAttribute("integrity", "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65")
blink.setAttribute("crossorigin", "anonymous")

let bscript = document.createElement("script");
bscript.setAttribute("src", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
bscript.setAttribute("integrity", "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4");
bscript.setAttribute("crossorigin", "anonymous");

document.head.appendChild(blink);
document.head.appendChild(bscript);


let navbar = document.createElement("nav");
addclasses("navbar navbar-expand-lg bg-dark", navbar);

let navMaindiv = document.createElement("div");
addclasses("container-fluid", navMaindiv);


let navBrand = document.createElement("a");
addclasses("navbar-brand", navBrand);
navBrand.textContent = "MayWeb";

let navToggler = document.createElement("button");
addclasses("navbar-toggler", navToggler);


navMaindiv.appendChild(navBrand);
navbar.appendChild(navMaindiv);


document.getElementById("header").appendChild(navbar);


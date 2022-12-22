let logged_in = true; // true only for testing purposes

if (!logged_in) {
// disable navbar links
    let nav_links = document.getElementsByClassName("nav-link");
    for (let i = 0; i < nav_links.length; i++) {
        nav_links[i].classList.add("disabled");
    }

    // get the nav bar
    let nav_list = document.getElementById("nav-items");

    // create a new nav item 
    let nav_item = document.createElement("li");
    nav_item.classList.add("nav-item"); // add a class to the nav item 

    // create a new nav link
    let nav_link = document.createElement("a");
    nav_link.setAttribute("href", "../login/src/login.html"); // set the attributes
    nav_link.classList.add("nav-link"); // add a class to the nav link
    nav_link.textContent = "Login"; // set the inner HTML
    nav_link.style.color = "white"; // set the color of the text
    nav_item.appendChild(nav_link);

    nav_list.appendChild(nav_item);
}

function add_ttt(){
    let main = document.getElementById("main");
        main.style.width = "100%"
        main.style.height = "100vh"

    let div = document.createElement("div");
        div.style.width = "500px"
        div.style.height = "500px"
        div.style.backgroundColor = "gray"

    let table = document.createElement("table");
    let tr,td;
    for (let i=0; i < 3; i++){
        tr = document.createElement("tr");
        for(let j=0; j < 3; j++){
            td = document.createElement("td");
            td.classList.add("btn")
            btn = document.createElement("a");
            btn.setAttribute("href", "#");
            td.appendChild(btn);
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
    div.appendChild(table);
    main.appendChild(div);
    body.appendChild(main)
}

add_ttt();
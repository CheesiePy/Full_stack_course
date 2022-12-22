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


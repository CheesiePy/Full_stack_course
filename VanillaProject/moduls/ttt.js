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
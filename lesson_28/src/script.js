let Data_Base;


let json = fetch('../data_base.json')
            .then(r => r.json())
            .then(data => {
                Data_Base = data;
            });





let showUser = () =>{
    alert("username: " + Data_Base.test_user.username + " password: " + Data_Base.test_user.password);
}


function redirect(link) {
    location.assign(link);
}

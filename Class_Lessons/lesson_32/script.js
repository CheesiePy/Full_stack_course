
let f = () => {
    $("p").toggle();
    $("#h2").css("background-color", "blue").css("color", "white");
    $('[href*="www.google.com"]').css('color', 'red');

}


    // code goes here
$("button").click(f).keypress(f); // if we use defer in the script tag, we don't need this... but it's good practice to use it anyway

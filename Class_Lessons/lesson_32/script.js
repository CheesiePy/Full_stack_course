
let f = () => {
    $("p").toggle();
    $("#h2").css("background-color", "blue").css("color", "white");
    $('[href*="www.google.com"]').css('color', 'red');

}



$("button").click(f).keypress(f);



/// ex -s

// //1
// $(document).ready(function () {
//     $(".btn-hide").click(function () {
//         $(".hw").hide();
//     });
// });


// //2
// $(document).ready(function () {
//     $("p").click(function () {
//         $(this).hide();
//     });
// });


// //3
// $(document).ready(function () {
//     $(".btn-hide-first").click(function () {
//         $("p:first").hide();
//     });
// });
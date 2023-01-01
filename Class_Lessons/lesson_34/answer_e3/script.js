$(document).ready(function() {
    //1
    $('#btn-bef').click(function() {
        $('#hw').before("<mark> I am First</mark>");
    });

    //2
    $("#btn-add").click(function() {
        $("ul").append(`<li id="new-item">new item</li>`);
    });

    //3
    $("#btn-del").click(function(){
    $("li").remove();
    });
});
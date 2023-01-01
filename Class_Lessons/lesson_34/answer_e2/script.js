//1
$(document).ready(function() {
    $("#btn-click").click(function() {
        $("#hw").html(`<mark> Hello </mark>`)
    });

//2
    $("#btn-attr").click(function() {
        $("#hw").text($("#hw").attr("id"));
    });

//3
    $("#btn-show").click(function() {
        $("#hw").text($("#input").val());
    });

});
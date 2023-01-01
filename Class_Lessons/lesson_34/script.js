$(document).ready(function() {
    $('#box').click(function() {
        $(this).animate({
            right: '+=500px',
        }, 1000, function() {
          $(this).animate({top: '+=250px'}, 1000).fadeOut(1000); // we can chain animations!
        });
      });
    }); 


$(document).ready(function() {
        $("#btn-display").click(function() {
            $("#box2").fadeToggle("fast");
            $("#box").css("background-color", "#ff0000");
        })});




// "fliping cards" animation without animate
$(document).ready(function() { 
  $('#card').click(function() {
    $(this).toggleClass('flip');
  });
});

// "fliping cards" animation with animate



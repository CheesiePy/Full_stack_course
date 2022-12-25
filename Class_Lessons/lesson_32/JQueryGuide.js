// jQuery will make DOM manipulation easier

// we can use the $ sign to represent jQuery

$(document).ready(function() { // this is a function that will run when the page is ready
    // code goes here
    $("button").click(function() { // this is a function that will run when the button is clicked
        // code goes here
        $(".login").show(); // this will show the element with the class of login
    });

}); // if we use defer in the script tag, we don't need this... but it's good practice to use it anyway


// we can use jQuery to select elements

$('h1').css('color', 'red'); // this will select all h1 elements and change their color to red

$('h1').css('color', 'red').css('font-size', '50px'); // this will select all h1 elements and change their color to red and font size to 50px


// we can use jQuery to select elements by id

$('#myId').css('color', 'red'); // this will select the element with the id of myId and change its color to red

// we can use jQuery to select elements by class

$('.myClass').css('color', 'red'); // this will select all elements with the class of myClass and change their color to red


// we can use jQuery to select elements by attribute

$('[href="http://www.google.com"]').css('color', 'red'); // this will select all elements with the href attribute of http://www.google.com and change their color to red

// we can use jQuery to select elements by attribute value

$('[href*="google"]').css('color', 'red'); // this will select all elements with the href attribute that contains the word google and change their color to red

// we can use jQuery to select elements by attribute value

$('[href^="http"]').css('color', 'red'); // this will select all elements with the href attribute that starts with http and change their color to red

// we can use jQuery to select elements by attribute value

$('[href$=".com"]').css('color', 'red'); // this will select all elements with the href attribute that ends with .com and change their color to red

// summey of jQuery selectors 
// * = contains
// ^ = starts with
// $ = ends with
// = = equals


// we can use jQuery to manipulate elements

$('h1').hide(); // this will hide all h1 elements

$('h1').show(); // this will show all h1 elements

$('h1').toggle(); // this will toggle all h1 elements (hide or show)

$('h1').fadeOut(); // this will fade out all h1 elements

$('h1').fadeIn(); // this will fade in all h1 elements

$('h1').fadeToggle(); // this will fade toggle all h1 elements (fade in or out) 

$('h1').slideUp(); // this will slide up all h1 elements

$('h1').slideDown(); // this will slide down all h1 elements


// we can use jQuery to animate elements

$('h1').animate({opacity: 0.5}); // this will animate all h1 elements to have an opacity of 0.5

$('h1').animate({opacity: 0.5, marginLeft: '20px'}); // this will animate all h1 elements to have an opacity of 0.5 and a margin left of 20px


// we can use jQuery to add and remove classes

$('h1').addClass('big-title'); // this will add the class of big-title to all h1 elements

$('h1').removeClass('big-title'); // this will remove the class of big-title from all h1 elements

$('h1').toggleClass('big-title'); // this will toggle the class of big-title from all h1 elements (add or remove)

// we can use jQuery to add and remove elements

$('h1').before('<button>New</button>'); // this will add a button element before all h1 elements

$('h1').after('<button>New</button>'); // this will add a button element after all h1 elements

$('h1').prepend('<button>New</button>'); // this will add a button element inside all h1 elements before the text

$('h1').append('<button>New</button>'); // this will add a button element inside all h1 elements after the text

$('h1').remove(); // this will remove all h1 elements

$('h1').empty(); // this will remove the text inside all h1 elements

// add elements to the DOM

$(document).add('<button>New</button>'); // this will add a button element to the DOM


// we can use jQuery to get and set attributes

let src = $('img').attr('src'); // this will get the src attribute of all img elements

$('img').attr('src', 'resours'); // this will set the src attribute of all img elements to https://www.w3schools.com/jquery/pic_bulbon.gif


// we can use jQuery to get and set text

let text = $('h1').text(); // this will get the text of all h1 elements

$('h1').text('Bye'); // this will set the text of all h1 elements to Bye

// we can use jQuery to get and set html

let html = $('h1').html(); // this will get the html of all h1 elements

$('h1').html('<em>Bye</em>'); // this will set the html of all h1 elements to Bye


// add event listeners

$('h1').click(function() { // this will add a click event listener to all h1 elements
    $('h1').css('color', 'purple');
});

$('button').keydown(function(event) { // this will add a keydown event listener to all button elements
    console.log(event.key);
});




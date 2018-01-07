"use strict"

console.log("main.js");

// Check off specific todos
$('ul').on("click", "li", function() {

    $(this).toggleClass("completed");
    
});

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, () => {
        $(this).remove(); // refers to parent.
    });
    event.stopPropagation();
});

// Add event listener to input stuff
$("input[type='text']").keypress(function(event) {
    if (event.which === 13){
        console.log("Enter Pressed on input");
        var todoText = $(this).val();
        // create new li
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").slideToggle();
});
//check off todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//allows click on "X" to delete the toDo
$("ul").on("click","span",  function(event){
    //fading out then removing it
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    //stopping li event listener to fire
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing what was entered
        var newTask = $(this).val();
        //creating new li to add into our current ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newTask + "</li>");
        //clearing the typed text after entering it
        $(this).val("");
    }
});

//adding click listener to icon to toggle the input
$(".fa-pencil-alt").on("click", function(){
    $('input:text').fadeToggle();
});
//check off todos by clicking
$("li").on("click", function(){
    $(this).toggleClass("completed");
});

//allows click on "X" to delete the toDo
$("span").on("click", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    
    event.stopPropagation();
});
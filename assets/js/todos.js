//check off todos by clicking
$("li").on("click", function(){
    $(this).toggleClass("completed");
});
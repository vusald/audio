
$(document).ready(function(){
$(".kitab").click(function(){
$("div.explain").toggle({"bottom":"250px"});
});



$('.block').click(function() {

$('.headslide').toggle({"left":"200px"});


});

$('.searchslide').click(function () {

$('.search').toggle({"bottom":"200px"});

});

});
$(window).bind('resize', function()
{
    if($(window).width() <= 400){
        $('.kitab').css('margin-left', '70px');}
    else  {
        $('.kitab').css('margin-left', '0');
    }

});

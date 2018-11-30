$(document).ready(function(){
    // появление/затухание кнопки #back-top
    $(function (){
        // прячем кнопку #back-top
        $("#back-top").hide();

        $(window).scroll(function (){
            if ($(this).scrollTop() > 100){
                $("#back-top").fadeIn();
            } else{
                $("#back-top").fadeOut();
            }
        });

        // при клике на ссылку плавно поднимаемся вверх
        $("#back-top a").click(function (){
            $("body,html").animate({
                scrollTop:0
            }, 800);
            return false;
        });
    });
});

$(document).ready(function(){
var $menu = $("#menu");
var hHeight =$('.head-animation').outerHeight();
var body =$('body');

$(window).scroll(function(){
    if ( $(this).scrollTop() >  hHeight ){
        $menu.addClass("fixed");
    } else if($(this).scrollTop() <=  hHeight && $menu.hasClass("fixed")) {
        $menu.removeClass("fixed");
    }
});//scroll
});

$(document).ready(function(){
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 60 }, 800);
        return false;
    });

});
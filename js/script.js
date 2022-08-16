$(document).ready(function(){
    
    $(".sliderBig").slick({
        arrows:false,
        dots:false,
        asNavFor:".slider-description",
        fade:true,
        autoplay:true,
        autoplaySpeed:2000,



    });


    
    $(".slider-description").slick({
        arrows:false,
        dots:false,
        asNavFor:".sliderBig",


    });

    $('#1').click(function(event) {
        $('.sliderBig').slick('goTo', 0);
    });

    $('#2').click(function(event) {
        $('.sliderBig').slick('goTo', 1);
    });

    $('#3').click(function(event) {
        $('.sliderBig').slick('goTo', 2);
    });

    $('#4').click(function(event) {
        $('.sliderBig').slick('goTo', 3);
    });

    $('#5').click(function(event) {
        $('.sliderBig').slick('goTo', 4);
    });
    
});
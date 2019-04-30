/* Efecto normal show/hide */

$("#show-mobile").click(function(){
    $("#mobile-menu").toggle();
});

$("#hide-mobile").click(function(){
    $("#mobile-menu").toggle();
}); 

/* Efecto fade */

$("#show-mobile-fade").click(function(){
    $("#mobile-menu").fadeIn();
});

$("#hide-mobile-fade").click(function(){
    $("#mobile-menu").fadeOut();
});

/* Efecto slide */

$("#show-mobile-slide").click(function(){
    $("#mobile-menu").toggle('slide', {
        direction: 'right'
    }, 1000);
});

$("#hide-mobile-slide").click(function(){
    $("#mobile-menu").toggle('slide', {
        direction: 'right'
    }, 1000);
});
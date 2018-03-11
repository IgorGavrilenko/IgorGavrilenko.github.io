
(function($, undefined) {
    // placeholder
    $('input, textarea').placeholder();

    // mobile menu
    $('.openMenu').click(function(){
        $('.menu').slideToggle(250, 'swing');
    });

    // tabs
    $('.tabs-nav img').each(function(a){
        $(this).click(function(){
            $('.tabs-nav img').removeClass('active-item');
            $(this).addClass('active-item');
            $('.tabs-list li').removeClass('active-item').eq(a).addClass('active-item');
        });
    });

    // scroll
    $('.point-1').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.about').offset().top
        }, 500);
    });
    $('.point-2').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.method').offset().top
        }, 500);
    });
    $('.point-3').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.result').offset().top
        }, 500);
    });
    $('.point-4').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.footer').offset().top
        }, 500);
    });

})(jQuery);
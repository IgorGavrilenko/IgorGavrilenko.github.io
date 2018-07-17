$(function () {
    $(window).scroll(function (e) {
        /* add navbar-fixed-top */
        if (parseInt(document.getElementById("button").getBoundingClientRect().bottom) - 12 <= 0) {
            // $("body").css("padding-top","72px");
            $(".logo-small").addClass("visibility animated fadeInDown");
        } else {
            //$("body").css("padding-top","0px");
            $(".logo-small").removeClass("visibility animated fadeInDown");
        }
        /* add navbar-fixed-top END*/
    });
    //
});

$(document).ready(function () {
    $('header').mousewheel(function (event) {

        if (event.deltaY < 1) {
            $('html, body').stop().animate({
                scrollTop: $('#content').offset().top
            }, 1000);
            return false;
        }

    });


    $('.panel').on('hidden.bs.collapse', function (e) {
        /*$('html, body').stop().animate({
            scrollTop: $('#content').offset().top
        }, 1000);*/
    });

    $('a[aria-controls=collapse-5]').on('click', function (e) {
            $('html, body').stop().animate({
                scrollTop: $('#content').offset().top
            }, 1000);
    });

});
$(document).ready(function () {
    $('#button').mouseover(function (event) {

        
            $('html, body').stop().animate({
                scrollTop: $('#content').offset().top
            }, 1000);
        
        

    });


});


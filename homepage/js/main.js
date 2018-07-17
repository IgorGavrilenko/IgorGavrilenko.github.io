

    (function($, undefined){

    $(window).resize(function(){
        console.log('window resize');
        //alert('Размеры окна браузера изменены.');
    });
//TOGGLE_MENU

     $(".toggleMenu").click( function() {
             $(this).toggleClass("toggleMenu-active");
         }
    );
     $(".toggleMenu-1").click( function() {
             $(this).toggleClass("toggleMenu-active-1");
         }
    );

//  SLIDERS

    $('.slider-1').slick({
        dots: true,
        arrows: true,
        fade: true,
        cssEase: 'linear',
        speed: '600',
        autoplay: false,
        autoplaySpeed: 4000,
        adaptiveHeight: true
    });
    $('.featured-prod').slick({// ,.popular-prod , .related-prod

        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 872,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // SLIDER_PRODUCT

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
    centerMode: true,
  focusOnSelect: true,
  centerPadding: "0px"
});

// PROGRESSBAR
    $( "#progressbar-1" ).progressbar({
      value: 70
    });
    $( "#progressbar-2" ).progressbar({
      value: 30
    });
    $( "#progressbar-3" ).progressbar({
      value: 0
    });
    $( "#progressbar-4" ).progressbar({
      value: 0
    });
    $( "#progressbar-5" ).progressbar({
      value: 0
    });
// TABS
    $( "#tabs-1" ).tabs();
    $( "#tabs-2" ).tabs({

        create: function( event, ui ) {

            $(ui.panel).find(">div").slick({
                slidesToShow: 4,
                arrows: true,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1160,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 872,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 580,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        },
        activate: function( event, ui ) {

            $(ui.oldPanel).find(">div").slick('unslick');
            $(ui.newPanel).find(">div").slick({
                adaptiveHeight: true,
                slidesToShow: 4,
                arrows: true,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1160,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 872,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 580,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        }
    });
// SELECT
    $('#size').ddslick({
});
    $('#color').ddslick({
});
    $('#help-center').ddslick({
});
    $('#sort-price').ddslick({
    background: "transparent",
    selectText: "Price - low to high"
});
    $('#sel-c').ddslick({
});
    $('#sel-s').ddslick({
})
    $('#sel-c-1').ddslick({
});
    $('#sel-s-1').ddslick({
})
    $('#sel-c-2').ddslick({
});
    $('#sel-s-2').ddslick({
})
    $('#sel-c-3').ddslick({
});
    $('#sel-s-3').ddslick({
})
    $('#month').ddslick({
});
    $('#year').ddslick({
});
    $('#country').ddslick({
});
    $('#city').ddslick({
});
    $('#sh-method').ddslick({
});
// AMOUNT
$('.amount .plus').click(function(){
    var input_text = $(this).closest('.amount').find(':text');

    input_text.val( input_text.val() * 1 + 1 );

    return false;
});

$('.amount .minus').click(function(){
    var input_text = $(this).closest('.amount').find(':text');

    if( input_text.val() < 2 ){
        return false;
    }

    input_text.val( input_text.val() - 1 );

    return false;
});
// start checkbox custom
$('.checkbox').iCheck({

});



// SCROLL_JS


})(jQuery);


$(function() {
// tabs
$('.tabs__link-item').each(function(a){
    $(this).click(function(){
        $('.tabs__cont-item').removeClass('tabs__cont-item--active').eq(a).addClass('tabs__cont-item--active');
        $('.tabs__link-item').removeClass('tabs__link-item--active').eq(a).addClass('tabs__link-item--active');
    });
});

// fancybox
    $('.fancybox').fancybox();

// slick
     $('.slider-for-1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav-1',
      adaptiveHeight: true
    });
    $('.slider-nav-1').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for-1',
      focusOnSelect: true
    });
     $('.slider-for-2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav-2',
      adaptiveHeight: true
    });
    $('.slider-nav-2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for-2',
      focusOnSelect: true
    });
     $('.slider-for-3').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav-3',
      adaptiveHeight: true
    });
    $('.slider-nav-3').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for-3',
      focusOnSelect: true
    });
     $('.slider-for-4').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav-4',
      adaptiveHeight: true
    });
    $('.slider-nav-4').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for-4',
      focusOnSelect: true
    });

// mask
    $("input[name = tel]").mask("+7(999) 999 99 99");
});

// isMobile

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }

};

// ymap

ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [53.23010957, 50.22796950],
            zoom: 16,
            controls: ['zoomControl']
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Телефон: +7 (846) 250-15-15<br>Адрес: г. Самара, ул. Пролетная, д.14, офис 11'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/logo-map.png',
            iconImageSize: [90, 107],
            iconImageOffset: [-40, -105]
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
    if (isMobile.any()) {
        myMap.behaviors.disable('drag');
    }
});

// sticky

var menu_position = $('.nav').offset().top;
$(window).scroll(function(){
    if( $(this).scrollTop() > menu_position ){
        $('.nav').addClass('fixed');
    }
    else {
        $('.nav').removeClass('fixed');
    }
});

// slicknav

$('.nav-list').slicknav({
    label: '',
    closeOnClick: true
});

// scroll_to_element

function scrollToElement(toggle, anchor) {
    $(toggle).click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
    });
}
scrollToElement('.toggle-sect-1', '.sect-1');
scrollToElement('.toggle-sect-2', '.sect-2');
scrollToElement('.toggle-sect-3', '.sect-3');
scrollToElement('.toggle-sect-4', '.sect-4');
scrollToElement('.toggle-footer', '.footer');

// popup

$(function(){
var $popup = $('.popup');
var $body = $('body');
$popup.find('.box_popup').click(function(e){
    e.stopPropagation();
});
$popup.each(function(){
    if( $(this).css('display') == 'block' ){
        $body.css('overflow','hidden');
    }
    $(this).click(function(){
        $(this).fadeOut(200);
        $body.css('overflow','auto');
    });
    $(this).find('.close_popup').click(function(){
        $(this).closest('.popup').fadeOut(200);
        $body.css('overflow','auto');
    });
    $(this).find('.box_popup').click(function(e){
        e.stopPropagation();
    });
});
function show_popup(popup){
    $('.popup').fadeOut(0);
    if( popup.length > 0 ){
        var $popup = $(popup);
        var $body = $('body');
        $popup.fadeIn(200);
        $body.css('overflow','hidden');
    }
}
function popup_handler(button,popup){
    $(button).click(function(){
        show_popup(popup);
    });
}
    popup_handler('.js-popup-form','.popup-form');
    popup_handler('.confirm','.popup-confirm');
});






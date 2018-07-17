$(function() {
    if (window.matchMedia('(min-width: 992px)').matches) {
        $('#fullpage').fullpage({
            anchors: ['header0', 'intro1', 'services2', 'callback3', 'staff4', 'map5'],
            navigation: true,
            verticalCentered: false,
            navigationPosition: 'right',
            scrollOverflow: true,
            scrollOverflowReset: false,
            afterLoad: function(anchorLink, index) {
                var loadedSection = $(this);
                if (index == 2) {
                    $('.services__title').viewportChecker({
                        classToAdd: 'visible animated fadeInDown',
                        repeat: false,
                        offset: 100
                    });
                    $('.services__text').viewportChecker({
                        classToAdd: 'visible animated fadeInUp',
                        repeat: false,
                        offset: 100
                    });
                }
            }
        });
    $('.j-list__item, .thumbnail-exts__anim').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
       });
    }

    $('.intro__content').viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        repeat: false,
        offset: 100
    });
});

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

ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [53.19394657, 50.11413500],
            zoom: 16,
            controls: ['zoomControl']
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: "ООО «Бизнес-Диалог»<br>адрес: 443041, г. Самара,<br>ул. Братьев Коростелевых, дом 83<br>inbox@biznesdialog.ru<br>+7 846 000-00-00"
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/logo-map.png',
            iconImageSize: [116, 152],
            iconImageOffset: [-50, -160]
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
    if (isMobile.any()) {
        myMap.behaviors.disable('drag');
    }
});

setTimeout(function() {
    $('.intro__img').fadeIn("slow");
}, 1000);
setTimeout(function() {
    $('.intro__shadow').fadeIn("slow");
}, 1500);
setTimeout(function() {
    $('.main-header, .info-block--intro').slideDown("slow");
}, 2000);
setTimeout(function() {
    $('.link__intro').fadeIn("slow");
}, 2500);
// setTimeout(function() {
//     $('.js-header-page').fadeIn();
// }, 600);

$(function() {
    $('.unit-list__item').each(function(a){
            $(this).click(function(){
                $('.unit__img').removeClass('unit--active').eq(a).addClass('unit--active');
            });
            $(this).click(function(){
                $('.unit__caption').removeClass('unit--active').eq(a).addClass('unit--active');
            });
        });
});

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){
// /DOMContentLoaded
    'use strict';
    let scroller;
    gsap.registerPlugin(SplitText, ScrollTrigger);

    //LocomotiveScroll
    const pageContainer = document.querySelector('.smooth-scroll');
    scroller = new LocomotiveScroll({
        el: pageContainer,
        smooth: true,
        getDirection: true,
        reloadOnContextChange: true,
        multiplier: .45,
        mobile: {
            breakpoint: 0,
            smooth: true
        },
        tablet: {
            breakpoint: 0,
            smooth: true
        }
    });
    scroller.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy('.smooth-scroll', {
        scrollTop(value) {
            return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector('.smooth-scroll').style.transform ? 'transform' : 'fixed'
    });

    //scroller update on resize
    window.addEventListener('resize', function(event) {
        setTimeout(function (){
            scroller.update();
            scroller.on('scroll', ScrollTrigger.update);

        }, 1000);

    }, true);
    ScrollTrigger.addEventListener('refresh', () => scroller.update());
    ScrollTrigger.refresh();

    //Animate in all titles
    const splitTextOpt1 = {
        type: 'lines',
        linesClass: 'line line++'
    }

    // multipleSelect
    let select = function (selector, keepopen) {
        $(selector).multipleSelect({
            animate: 'fade',
            keepOpen: keepopen,
            onClick: function () {
                $(selector).next('.ms-parent').find('.ms-choice').addClass('is-active');
            },
            onOpen: function () {
                $(selector).next('.ms-parent').find('.ms-choice').addClass('is-open');
            },
            onClose: function () {
                $(selector).next('.ms-parent').find('.ms-choice').removeClass('is-open');
            }
        });
    };
    select('#select', false);

    // tlHeder
    const tlHeder = new TimelineMax({
        defaults: {
            duration: .2
        },
    });
    tlHeder
        .from('.header__logo-svg', {
            y: '200%',
            opacity: 0,
        })
        .from('.header__logo-text', {
            y: '200%',
            opacity: 0,
        })
        .from('.header__blog', {
            y: '200%',
            opacity: 0,
        })
        .from('.btn--header', {
            opacity: 0,
        })
        .from('.btn--header .btn__text', {
            opacity: 0,
            x: '20px',
        })
        .from('.btn--header .btn__icon', {
            opacity: 0,
            x: '50px',
        })


    // tlFback
    let tlFback = gsap.timeline({
        defaults: {
            duration: .2
        },
        scrollTrigger: {
            scroller: '.smooth-scroll',
            trigger: '.s-fback',
            toggleActions: 'play',
            start: '50% bottom',
        }
    });
    tlFback
        .from('.form--fback', {
            y: '8%',
            opacity: 0,
        })
        .from('.s-fback__img', {
            opacity: 0,
            duration: 1,
            delay: .2
        })
        .from(new SplitText('.s-fback__title.split-text', splitTextOpt1).lines, {
            yPercent: 100,
            ease: 'power4',
            duration: .4,
            onComplete: function () {
                $('.s-fback__title.split-text').addClass('split-text--complete')
            }
        }, '=-.8')
        .from(new SplitText('.s-fback__sub-title.split-text', splitTextOpt1).lines, {
            yPercent: 100,
            ease: 'power4',
            duration: .4,
            onComplete: function () {
                $('.s-fback__sub-title.split-text').addClass('split-text--complete')
            }
        }, '>')
        .staggerFrom('.s-fback__link .link', .1, {
            y: '135%'
        }, .05, '=-.4')
        .from('.form--fback .btn', {
            width:'0px',
            opacity: 0
        }, '=-.8')
        .from('.form--fback .btn .btn__text', {
            x: '150%',
        })
        .from('.form--fback .btn .btn__icon', {
            x: '50px',
        })
        .from('.s-marquee--2', {
            opacity: 0,
        }, '=-.2')
        .from('.s-marquee--2 .s-marquee__border--left', {
            height: '0%',
            duration: .1
        }, '=-.4')
        .from(['.s-marquee--2 .s-marquee__border--top', '.s-marquee--2 .s-marquee__border--bottom'], {
            width: '0%',
            duration: 1
        }, '>')
        .to('.s-marquee--2 .s-marquee__border--right-fill', {
            height: '0%',
            duration: .1
        }, '>')

    // splitTextLine
    const splitTextLine = $('.split-text .line');
    const lineWrapper = '<div class="line-wrapper">';
    if (splitTextLine) {
        splitTextLine.wrap(lineWrapper);
    };

    // tlFooter
    let tlFooter = gsap.timeline({
        defaults: {
            duration: .2
        },
        scrollTrigger: {
            scroller: ".smooth-scroll",
            trigger: ".footer",
            toggleActions: 'play',
            start: 'top 95%',
        }
    });
    tlFooter
        .from('.footer__logo svg', {
            opacity: 0,
            y: '200%'
        })
        .from('.footer__link', {
            opacity: 0,
            y: '200%'
        })
        .from('.footer__tag', {
            opacity: 0,
            y: '200%'
        })

    // marquee
    function marquee(selector) {
        gsap.defaults({
            overwrite: true
        });
        const target = document.querySelector(selector);
        const clone = target.cloneNode(true);
        target.after(clone);
        const tli = gsap.to(selector, { duration: 30, xPercent: -100, ease: 'none', repeat: -1 }).timeScale(0);
        gsap.to(tli, { timeScale: 1 });
    }
    marquee('.s-marquee__inner--2');



    // DOMContentLoaded
});
// /DOMContentLoaded

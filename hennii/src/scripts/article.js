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

    // splitLinesHero
    const splitLinesHero = new SplitText('.split-text-hero', {
        type: 'lines',
        linesClass: 'line line++'
    });
    $('.split-text-hero .line').wrap('<div class="line-wrapper">');

    function splitRevertHero() {
        splitLinesHero.revert();
    }

    // tlHero
    const tlHero = new TimelineMax();
    tlHero
        .from('.header__logo-svg', {
            y: '200%',
            opacity: 0,
            duration: .2
        })
        .from('.header__logo-text', {
            y: '200%',
            opacity: 0,
            duration: .2
        })
        .from('.btn--header', {
            opacity: 0,
            duration: .2
        })
        .from('.btn--header .btn__text', {
            opacity: 0,
            x: '20px',
            duration: .2
        })
        .from('.btn--header .btn__icon', {
            opacity: 0,
            x: '50px',
            duration: .2
        })
        .from('.pagin--header', {
            opacity: 0,
            duration: .2
        })
        .from('.tag-list--hero', {
            y: '100%',
            opacity: 0,
            duration: .2
        })
        .from(splitLinesHero.lines, {
            yPercent: 100,
            ease: 'power4',
            duration: .4,
            onComplete: splitRevertHero
        }, '=-.3')
        .from('.s-hero__img', {
            y: '20%',
            opacity: 0,
            duration: .5
        }, '=-.3')

    // tlFbackArticle
    let tlFbackArticle = gsap.timeline({
        defaults: {
            duration: .2
        },
        scrollTrigger: {
            scroller: '.smooth-scroll',
            trigger: '.b-fback--article',
            toggleActions: 'play',
            start: 'top 75%',
        }
    }, -2);

    tlFbackArticle
        .from('.b-fback--article', {
            duration: .4,
            y: '8%',
            opacity: 0,
            ease: "none",
        })
        .from('.b-fback__btn', {
            width:'0px',
            opacity: 0
        }, '=-.8')
        .from('.b-fback__btn .btn__text', {
            x: '150%',
        })
        .from('.b-fback__btn .btn__icon', {
            x: '50px',
        })
        .from('.s-marquee--2', {
            opacity: 0,
        }, '=-1.2')
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

    // tlFooterBlog
    let tlFooterBlog = gsap.timeline({
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
    tlFooterBlog
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

    // setupSplits
    function setupSplits() {
        const targets = gsap.utils.toArray('.s-article__body h2, .s-article__body h3, .s-article__body h4,' +
            ' .s-article__body h5, .s-article__body h6' +
            ' .b-fback--article .b-fback__title');
        targets.forEach((target) => {
            let SplitClient = new SplitText(target, {
                type: 'lines',
                linesClass: 'line line++'
            });
            function splitRevert() {
                SplitClient.revert();
            }
            let chars = SplitClient.lines;
            gsap.from(chars, {
                duration: .2,
                opacity: 0,
                y: '100%',
                ease: 'none',
                stagger: 0,
                onComplete: splitRevert,
                scrollTrigger: {
                    scroller: '.smooth-scroll',
                    trigger: target,
                    start: 'top 90%',
                    end: 'bottom center',
                    toggleActions: 'play',
                }
            });
        });
    }
    setupSplits();
    $('.split-text .line').wrap('<div class="line-wrapper">');

    //setupRevealsImg
    function setupRevealsImg() {
        const targets = gsap.utils.toArray('.s-article__body img');
        targets.forEach((target) => {
            gsap.from(target,{
                duration: .4,
                y: '8%',
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    scroller: '.smooth-scroll',
                    trigger: target,
                    start: 'top 90%',
                    end: 'bottom center',
                    toggleActions: 'play',
                }
            });
        });
    }
    setupRevealsImg();

    //setupRevealsText
    function setupRevealsText() {
        const targets = gsap.utils.toArray('.s-article__body p, .s-article__body table, .s-article__body li,' +
            ' .s-article__body blockquote, .b-share--article, #sidebar-stick');
        targets.forEach((target) => {
            gsap.from(target,{
                duration: .4,
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    scroller: '.smooth-scroll',
                    trigger: target,
                    start: 'top 90%',
                    end: 'bottom center',
                    toggleActions: 'play',
                }
            });
        });
    }
    setupRevealsText();

    setTimeout(function () {
        $('.s-article').css({
            opacity: 1,
            transition: 'opacity .2s ease-in'
        })
    }, 1500)

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
    (function (){
        const item = $('.sidebar-list__link'),
            ItemActiveClass = 'sidebar-list__item--active';
        item.each(function(a){
            $(this).on('click', function() {
                item.parent().removeClass(ItemActiveClass).eq(a).addClass(ItemActiveClass);
            });
        });
    }());

    // DOMContentLoaded
});
// /DOMContentLoaded

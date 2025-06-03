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
    const tlHero = new TimelineMax({
        defaults: {
            duration: .2
        },
    });
    tlHero
        .from(['.header__logo-svg', '.header__logo-text'], {
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
        .from(['.header__bottom', '.pagin--header'], {
            opacity: 0,
        })
        .from(splitLinesHero.lines, {
            yPercent: 100,
            ease: 'power4',
            onComplete: splitRevertHero
        })
        .from('.page-heading__line', {
            width: '0%'
        })

    // tlFbackBlog
    let tlFbackBlog = gsap.timeline({
        defaults: {
            duration: .2
        },
        scrollTrigger: {
            scroller: ".smooth-scroll",
            trigger: ".b-fback-carousel",
            toggleActions: 'play',
            start: 'top 75%',
        }
    }, -2);

    tlFbackBlog
        .from('.b-fback-carousel', {
            duration: .4,
            y: '8%',
            opacity: 0,
            ease: "none",
        })
        .from('.b-fback-decor', {
            opacity: 0
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
        const targets = gsap.utils.toArray(".split-text");
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
                ease: "none",
                stagger: 0,
                onComplete: splitRevert,
                scrollTrigger: {
                    scroller: '.smooth-scroll',
                    trigger: target,
                    start: "top 75%",
                    end: "bottom center",
                    toggleActions: 'play',
                }
            });
        });
    }
    // setupSplits();
    $('.split-text .line').wrap('<div class="line-wrapper">');

    //setupRevealsTag
    function setupRevealsTag() {
        const targets = gsap.utils.toArray(".tag-list");
        targets.forEach((target) => {
            gsap.from(target,{
                duration: .2,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    scroller: '.smooth-scroll',
                    trigger: target,
                    start: "top 80%",
                    end: "bottom center",
                    toggleActions: 'play',
                }
            });
        });
    }
    // setupRevealsTag();

    //setupRevealsImg
    function setupRevealsImg() {
        const targets = gsap.utils.toArray(".b-grid__body");
        targets.forEach((target) => {
            gsap.from(target,{
                duration: .4,
                y: '8%',
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    scroller: '.smooth-scroll',
                    trigger: target,
                    start: "top 80%",
                    end: "bottom center",
                    toggleActions: 'play',
                }
            });
        });
    }
    // setupRevealsImg();
    setTimeout(function () {
        $('.category-page .s-category').css({
            opacity: 1
        })
        setupRevealsImg()
        setupRevealsTag()
        setupSplits()
    }, 1500)

    // marquee
    function marquee(selector) {
        gsap.defaults({
            overwrite: true
        });
        const target = document.querySelector(selector);
        if (target) {
            const clone = target.cloneNode(true);
            target.after(clone);
            const tli = gsap.to(selector, { duration: 30, xPercent: -100, ease: 'none', repeat: -1 }).timeScale(0);
            gsap.to(tli, { timeScale: 1 });
        }
    }
    marquee('.s-marquee__inner--2');

    // swiper-header
    (function() {
        const carouselHeader = $('.carousel-header');
        carouselHeader.each(function() {
            const swiper = new Swiper(this, {
                spaceBetween: 16,
                freeMode: true,
                centeredSlides: false,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true,
                breakpoints: {
                    768: {
                        spaceBetween: 24,
                    }
                },
                navigation: {
                    nextEl: document.querySelector('.header-categories__inner .swiper-button-next'),
                    prevEl: document.querySelector('.header-categories__inner .swiper-button-prev'),
                },
                observer: true,
                observeParents: true,
                observeSlideChildren: true
            });
        });
    }());

    // swiper-header
    (function() {
        const carouselFback = $('.carousel-fback');
        carouselFback.each(function() {
            const swiper = new Swiper(this, {
                spaceBetween: 0,
                freeMode: false,
                centeredSlides: false,
                slidesPerView: 1,
                touchRatio: 0.2,
                slideToClickedSlide: true,
                navigation: {
                    nextEl: document.querySelector('.b-fback-carousel .swiper-button-next'),
                    prevEl: document.querySelector('.b-fback-carousel .swiper-button-prev'),
                },
                observer: true,
                observeParents: true,
                observeSlideChildren: true
            });
        });
    }());

    // header search
    (function() {
        const headerSearchMob = document.getElementById('header-search-mob');
        const headerSearchReset = document.getElementById('header-search-reset');
        const headerSearch = document.getElementById('header-search');
        const headerSearchInput = document.getElementById('header-search-input');
        const isOpen = 'header-search--open';
        const noEmpty = 'header-search__input--no-empty';
        headerSearchMob.addEventListener('click', () => {
            headerSearch.classList.add(isOpen);
        });
        headerSearchReset.addEventListener('click', () => {
            headerSearch.classList.remove(isOpen);
            headerSearchInput.classList.remove(noEmpty);
        });
        headerSearchInput.addEventListener('input', function(e){
            this.classList[ this.value?'add':'remove'](noEmpty);
        });
    }());

    // DOMContentLoaded
});
// /DOMContentLoaded

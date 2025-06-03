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
    select('#color-option', true);

    $('#color-option').change(function() {
        let value = $(this).find('option:selected').val();
        setTimeout(function(){$('[id^="d-card"]').removeClass('is-color-active')},500)
        setTimeout(function(){$('#d-card'+value).addClass('is-color-active')},500)
    });

    //Animate in all titles
    const splitTextOpt1 = {
        type: 'lines',
        linesClass: 'line line++'
    }
    const splitTextOpt2 = {
        yPercent: 100,
        ease: 'power4',
        duration: .4,
        onComplete: function () {
            $(this).addClass('this')
        }
    }

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
    .to('.s-intro-logo', 1, {
      opacity: 1
    })
    .staggerFrom('.s-intro-logo__bg', 1.5, {
        opacity: 0,
        ease: "linear",
    }, .15)
    .to('.s-intro-logo', .5, {
      opacity: 0
    })
    .to('.s-intro', .2, {
      y: '-100%'
    })
    .from('.header__logo-svg', {
        y: '100%',
        opacity: 0,
        duration: .2
    })
    .from('.btn--header', {
        width:"80%",
        opacity: 0,
        duration: .2
    }, '-.2')
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
        .from('.s-marquee--1', {
        opacity: 0,
        duration: .2,
    })
    .from('.s-hero-caption__top svg', {
        width:'0px',
        duration: .2
    })
    .from('.s-hero-caption__top span', {
        x: '100%',
        duration: .1
    }, '>')
    .from('.s-hero__img', {
        x: '100%',
        duration: .5
    }, '=-.5')
    .from(splitLinesHero.lines, {
        yPercent: 100,
        ease: 'power4',
        duration: .4,
        onComplete: splitRevertHero
    }, '=-.5')
    .from('.s-hero-caption__img', {
        opacity: 0,
        duration: .4,
    }, '=-.2')
    .from('.s-marquee--1 .s-marquee__border--left', {
        height: '0%',
        duration: .1,
    }, '=-1')
    .from(['.s-marquee--1 .s-marquee__border--top', '.s-marquee--1 .s-marquee__border--bottom'], {
        width: '0%',
        duration: 1,
    }, '>')
    .to('.s-marquee--1 .s-marquee__border--right-fill', {
        height: '0%',
        duration: .1,
    }, '>')
    .from('.s-hero-caption__bottom .btn', .2, {
        width:'0px',
        opacity: 0
    }, '=-1')
    .from('.s-hero-caption__bottom .btn .btn__text', {
        x: '150%',
        duration: .2
    }, '>')
    .from('.s-hero-caption__bottom .btn .btn__icon', {
        x: '50px',
        duration: .2
    }, '>')

    // tlAsk
    let tlAsk = gsap.timeline({
        defaults: {
            duration: .2
        },
        scrollTrigger: {
            scroller: '.smooth-scroll',
            trigger: '.s-ask',
            toggleActions: 'play',
            start: 'top 60%',
            toggleClass: "activeSection",
            endTrigger: ".selector"
        }
    });

    tlAsk
    .from(new SplitText('.s-ask .split-text', splitTextOpt1).lines, {
        yPercent: 100,
        ease: 'power4',
        duration: .4,
        onComplete: function () {
            $('.s-ask .split-text').addClass('split-text--complete')
        }
    })
    .to('.s-ask__img', {
        bottom: '12px'
    })
    .from('.s-ask__text--all .s-ask__line', {
        width:'0px'
    }, '=-.4')
    .from('.s-ask__text--all .s-ask__point', {
        opacity: 0
    }, '=-.2')
    .from('.s-ask__text--all:not(.s-ask__text--right) .s-ask__text-inner', {
        x: '100%'
    }, '=-.4')
    .from('.s-ask__text--right .s-ask__text-inner', {
        x: '-100%'
    }, '=-.4')
    .from('.s-ask__text--end .s-ask__line', {
        width:'0px'
    }, '=-.2')
    .from('.s-ask__text--end .s-ask__point', {
        opacity: 0
    })
    .from('.s-ask__text-bg', {
        y: '100%'
    }, '=-.2')

    // lottie
    const lottieAchieve1 = lottie.loadAnimation({
        container: document.querySelector('.s-achieve__icon--1'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'assets/img/answer-1.json'
    }),
    lottieAchieve2 = lottie.loadAnimation({
        container: document.querySelector('.s-achieve__icon--2'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'assets/img/answer-2.json'
    }),
    lottieAchieve3 = lottie.loadAnimation({
        container: document.querySelector('.s-achieve__icon--3'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'assets/img/answer-3.json'
    });
    lottie.inBrowser(true);
    lottieAchieve1.stop();
    lottieAchieve2.stop();
    lottieAchieve3.stop();

    // tlAchieve
    let tlAchieve = gsap.timeline({
        defaults: {
            duration: .2
        },
        scrollTrigger: {
            scroller: '.smooth-scroll',
            trigger: '.s-achieve',
            toggleActions: 'play',
            start: 'top 40%',
            toggleClass: "activeSection",
        }
      });
    tlAchieve
    .from(new SplitText('.s-achieve__title .split-text', splitTextOpt1).lines, {
        yPercent: 100,
        ease: 'power4',
        duration: .4,
        onComplete: function () {
            $('.s-achieve__title .split-text').addClass('split-text--complete')
        }
    },0)
    .staggerFrom(new SplitText('.s-achieve__sub-title.split-text', splitTextOpt1).lines, .2, {
        yPercent: 100,
        ease: 'power4',
        duration: .4,
        onComplete: function () {
            $('.s-achieve__sub-title.split-text').addClass('split-text--complete')
        }
    }, .05, '=-.4')
    .call(function(){
        lottieAchieve1.play()
    })
    .call(function(){
        lottieAchieve2.play()
    })
    .call(function(){
        lottieAchieve3.play()
    })
    .from('.grid--achieve-text .grid__item', {
        y: '50%',
        duration: .4
    })
    .from('.grid--achieve-text .grid__item', {
        opacity: 0,
        duration: .4
    }, '=-.2')
    .from('.img-achieve-2-d', {
        y: '30%',
        duration: 1
    }, '=-.8')
    .from('.img-achieve-2-d', {
        opacity: 0,
        duration: 1
    }, '=-.8');

    // tlValue
    let tlValue = gsap.timeline({
        defaults: {
            duration: .2
        },
        scrollTrigger: {
            scroller: '.smooth-scroll',
            trigger: '.s-value',
            toggleActions: 'play',
            start: 'top 40%',
        }
    });
    tlValue
    .from('.s-value__img-1', {
        opacity: 0,
        duration: .8
    })
    .from(new SplitText('.s-value .split-text', splitTextOpt1).lines, {
        yPercent: 100,
        ease: 'power4',
        duration: .4,
        onComplete: function () {
            $('.s-value .split-text').addClass('split-text--complete')
        }
    }, '=-.6')
    .from('.s-value__text', {
        y: '25%'
    })
    .from('.s-value__text', {
        opacity: 0
    })
    .from('.s-value__box .btn', {
        width:'0px',
        opacity: 0
    }, '=-.4')
    .from('.s-value__box .btn .btn__text', {
        x: '150%'
    }, '>')
    .from('.s-value__box .btn .btn__icon', {
        x: '50px'
    }, '>')

    let tlValueText = gsap.timeline({
        defaults: {
            duration: .2
        },
        scrollTrigger: {
            scroller: '.smooth-scroll',
            trigger: '.s-value',
            toggleActions: 'play',
            start: '90% bottom',
        }
    });
    tlValueText
    .staggerFrom('.grid--value .grid__item', .2, {
        opacity: 0,
        y: '50%',
    }, .05, '=-.2')

    // tlDesign
    let tlDesign = gsap.timeline({
        defaults: {
            duration: .2
        },
        scrollTrigger: {
            scroller: '.smooth-scroll',
            trigger: '.s-design',
            toggleActions: 'play',
            start: '40% bottom',
        }
    });
    tlDesign
    .from('.tabs__pane', {
        rotateY: '-30deg',
        duration: .8
    })
    .from(new SplitText('.s-design__title.split-text', splitTextOpt1).lines, {
        yPercent: 100,
        ease: 'power4',
        duration: .4,
        onComplete: function () {
            $('.s-design__title.split-text').addClass('split-text--complete')
        }
    }, '=-.4')
    .from(new SplitText('.s-design__sub-title.split-text', splitTextOpt1).lines, {
        yPercent: 100,
        ease: 'power4',
        duration: .4,
        onComplete: function () {
            $('.s-design__sub-title.split-text').addClass('split-text--complete')
        }
    }, '>')
    .from(new SplitText('.s-design__select-title.split-text', splitTextOpt1).lines, {
        yPercent: 100,
        ease: 'power4',
        duration: .4,
        onComplete: function () {
            $('.s-design__select-title.split-text').addClass('split-text--complete')
        }
    }, '>')
    .from('.tabs-nav', {
        opacity: 0
    })
    .from('.select-wrap .select-wrap__border--top', {
        width: 0,
        opacity: 0
    }, '=-.4')
    .from(['.select-wrap .select-wrap__border--left', '.select-wrap .select-wrap__border--right'], {
        height: 0
    }, '=-.05')
    .from('.select-wrap .select-wrap__border--bottom', {
        opacity: 0
    }, '=-.05')
    .to('.select-wrap .select-wrap__border--bottom-fill', {
        width: 0,
        duration: .3
    }, '=-.15')
    .from('.s-design .ms-wrap', {
        opacity: 0,
    })
    .from('.s-design .ms-choice span', {
        opacity: 0,
        y: '-100%'
    })
    .from('.s-design .ms-choice .icon-caret', {
        opacity: 0,
        height: '-100%',
    })
    .to('.s-design .select-wrap__fill', {
        background: '#fff',
        duration: 0
    })
    .staggerFrom('.tabs__btn', .1, {
        y: '25%',
        opacity: 0,
    }, .05, '=-1')

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
    .from('.s-fback__img', {
        opacity: 0,
        duration: 1,
        delay: .6
    })
    .from(new SplitText('.s-fback__title.split-text', splitTextOpt1).lines, {
        yPercent: 100,
        ease: 'power4',
        duration: .4,
        onComplete: function () {
            $('.s-fback__title.split-text').addClass('split-text--complete')
        }
    }, '=-1')
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

    // tlFooter
    let tlFooter = gsap.timeline({
        defaults: {
            duration: .2
        },
        scrollTrigger: {
            scroller: ".smooth-scroll",
            trigger: ".footer",
            toggleActions: 'play',
            start: 'top 90%',
        }
    }, -2);
    tlFooter
    .from('.footer__logo', {
        y: '100%'
    }, '=-.2')
    .from(new SplitText('.footer__tag.split-text', splitTextOpt1).lines, {
        yPercent: 100,
        ease: 'power4',
        duration: .4,
        onComplete: function () {
            $('.footer__tag.split-text').addClass('split-text--complete')
        }
    })
    .from(new SplitText('.footer__pp.split-text', splitTextOpt1).lines, {
        yPercent: 100,
        ease: 'power4',
        duration: .4,
        onComplete: function () {
            $('.footer__pp.split-text').addClass('split-text--complete')
        }
    })
    .from('.btn--footer', {
        width:"225px",
        opacity: 0
    })
    .from('.btn--footer .btn__text', {
        opacity: 0,
        x: '20px'
    })
    .from('.btn--footer .btn__icon', {
        opacity: 0,
        x: '20px'
    })

    // splitTextLine
    const splitTextLine = $('.split-text .line');
    const lineWrapper = '<div class="line-wrapper">';
    if (splitTextLine) {
        splitTextLine.wrap(lineWrapper);
    };




//////////////////////////////////////////////////
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
    marquee('.s-marquee__inner--1');
    marquee('.s-marquee__inner--2');

    // img parallax
    (function() {
        const o = $('.tabs__img');
        $('.tabs__img-wrap').on('mousemove', function (t) {
            let e = -($(window).innerWidth() / 2 - t.pageX) / 20,
                n = ($(window).innerHeight() / 2 - t.pageY) / 50;
            o.attr("style", "transform: perspective(1000px) rotateZ(-17deg) skewX(2deg) skewY(-1deg) rotateY(" + e + "deg) rotateX(" + n + "deg);-webkit-transform: perspective(1000px) rotateZ(-17deg) skewX(2deg) skewY(-1deg) rotateY(" + e + "deg) rotateX(" + n + "deg);-moz-transform: perspective(1000px) rotateZ(-17deg) skewX(2deg) skewY(-1deg) rotateY(" + e + "deg) rotateX(" + n + "deg)")
        });
    })();

    // outer tabs
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            setTimeout(function () {
                const target = document.querySelector(tab.dataset.tabTarget)
                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('is-color-active')
                })
                tabs.forEach(tab => {
                    tab.classList.remove('is-color-active')
                })
                tab.classList.add('is-color-active')
                target.classList.add('is-color-active')
            }, 500);
        })
    })

    // inner tabs
    const tab = document.querySelectorAll('.tabs');
    const toggleTab = function (element) {
    const tabBtn = element.querySelectorAll('.tabs__btn');
    const tabContent = element.querySelectorAll('.tabs__pane');
    tabBtn[0].classList.add('is-active');
    tabContent[0].classList.add('is-active');
    const removeTab = function (element) {
          for (const i of element) {
              setTimeout(function () {
                  i.classList.remove('is-active');
              }, 500);
          }
    };
    const openTab = function (index) {
        removeTab(tabBtn);
        removeTab(tabContent);
            setTimeout(function () {
                tabBtn[index].classList.add('is-active');
                tabContent[index].classList.add('is-active');
            }, 500);
        };
        tabBtn.forEach((el, i) => (el.onclick = () => openTab(i)));
    };
    [...tab].forEach((el) => toggleTab(el));

    // bounce anim design card
    const selectorAnim = $('.tabs__btn, .s-design .ms-drop ul > li.hide-radio input, .tabs-nav__btn');
    const tabsContent = $('.tabs__content');
    const animClass = 'bounce';
    selectorAnim.on('click', function (){
        tabsContent.addClass(animClass);
        setTimeout(function () {
            tabsContent.removeClass(animClass);
        }, 1000);
    });

    const query = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
    query.onchange = (evt) => {
          if(query.matches) {
            $('img').attr('loading', '');
            setTimeout(function () {
                ScrollTrigger.refresh();
            }, 1000);
          }
    };
    query.onchange();

// DOMContentLoaded
  });
// /DOMContentLoaded

var scroller;
gsap.registerPlugin(ScrollTrigger);
// mutation
var observeObject = function () {
    var _class = {
        init: function (selector, callback) {
            var element = document.querySelector(selector);

            try {
                var observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        callback(mutation.target, mutation.attributeName, mutation.oldValue);
                    });
                });
                observer.observe(element, {
                    attributes: true,
                    subtree: true,
                    attributeOldValue: true
                });
            } catch (z) {
                element.addEventListener('DOMAttrModified', function (e) {
                    callback(e.target, e.attrName, e.prevValue);
                }, false);
            }
        }
    };
    return _class;
}();

$(document).ready(function(){

    'use strict';

    // footerReadyEnd
    function footerReadyEnd() {
        const footerEndId = '#footer-end';
        const body = $('body');
        const footerReady = 'footer-ready';
        const footerEndClass = 'footer-end';
        const attrClass = 'class';
        observeObject.init(footerEndId, function (target, name, oldValue) {
            if (target.getAttribute(attrClass) == footerEndClass) {
                body.addClass(footerReady);
            } else {
                body.removeClass(footerReady);
            }
        });
    };
    footerReadyEnd();

    function footerReadyStart() {
        const checkbox = document.querySelector('.container--footer');
        if(checkbox){
            const options = {
            attributes: true
            }

            function callback(mutationList, observer1) {
            mutationList.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if($('.container--footer').hasClass('footer-start')) {
                        $('body').addClass('footer-ready-start');
                    }
                    else {
                        $('body').removeClass('footer-ready-start');
                    }
                }
            })
            }
            const observer1 = new MutationObserver(callback)
            observer1.observe(checkbox, options)
        };
    };
    footerReadyStart();

    // loader
    function loaderFunc() {
        let description = [];
        let arr = [];
        const introDataImg = $('.intro__data-img');
        const dataSrc = 'data-src';
        const introImg = $('.intro__img').find('img');
        const introImgAttr = 'src';
        introDataImg.each(function() {
            description.push($(this).attr(dataSrc));
        });
        $.each(description, function(i, el) {
            setTimeout(function() {
                arr.push(el);
                if (arr.length === description.length) {
                    introImg.attr(introImgAttr, function(i, src) {
                        return arr[i];
                    });
                };
            }, 1 + Math.floor(Math.random() * 10));
        });

        // intro
        setTimeout(function () {
            $("body").addClass("ready");
        }, 3500);
        setTimeout(function () {
            $(".projects").addClass("ready");
        }, 5000);
        setTimeout(function () {
            $(".intro").addClass("ready");
        }, 500);
        setTimeout(function () {
            Splitting();
        }, 4000);
    };

    observeObject.init('body', function (target, name, oldValue) {
        if (target.getAttribute('class') == 'contact-page') {
            setTimeout(function () {
            $('.contact-page').addClass('load');
        }, 500);
        }
    });

    function scriptLoad() {
        // LocomotiveScroll
        const pageContainer = document.querySelector(".main");
        scroller = new LocomotiveScroll({
            el: pageContainer,
            smooth: true,
            getDirection: true,
            reloadOnContextChange: true,
            mobile: {
                breakpoint: 0,
                smooth: true
            },
            tablet: {
                breakpoint: 0,
                smooth: true
            }
        });
        scroller.on("scroll", ScrollTrigger.update);


        // teamScroll
        scroller.on("scroll", function (t) {
        document.documentElement.setAttribute("data-direction", t.direction);
        });
        scroller.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(pageContainer, {
            scrollTop(value) {
                return arguments.length
                ? scroller.scrollTo(value, 0, 0)
                : scroller.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight
                };
            },
            pinType: pageContainer.style.transform ? "transform" : "fixed"
        });

        const scrollContainer = '[data-scroll-container]';
        const teamTrigger = '.team';
        const teamScroll = gsap.utils.toArray(".team__item");
        const start = 'left left';
        const end = '+=6000';
        if(teamScroll.length > 0){
            let scrollTeam = gsap.to(teamScroll, {
                xPercent: -100 * teamScroll.length,
                ease: "none",
                scrollTrigger: {
                    anticipatePin: true,
                    duration: 1,
                    scroller: scrollContainer,
                    trigger: teamTrigger,
                    pin: true,
                    scrub: true,
                    start: start,
                    end: end,
                    invalidateOnRefresh: true
                }
            });
            ScrollTrigger.addEventListener("refresh", () => scroller.update());
            ScrollTrigger.refresh();
        }

        // scroller update on resize
        window.addEventListener('resize', function(event) {
            setTimeout(function (){
                scroller.update();
                scroller.on("scroll", ScrollTrigger.update);

            }, 1000);

        }, true);

        // servicesScroll
        let servicesItem = gsap.utils.toArray(".services__item");
        if(servicesItem.length > 0){
            const services = document.querySelector(".services");
            const servicesImg = document.querySelector('.services-img');
            const activeClass = 'active';
            const sections = document.querySelectorAll('.services__item');
            const primerImg = document.querySelector('[data-panel="panel_1"]');
            const scrollContainer = '[data-scroll-container]';
            const start = 'left left';

            ScrollTrigger.matchMedia({
                '(min-width: 992px)': function () {
                    let active = [];
                    let changeFunc = function(active) {
                        servicesItem.forEach((e) => {
                            e.classList.remove(activeClass);
                        })
                        servicesItem[active].classList.add(activeClass);
                    }
                    let activeFunc = function(progress) {
                        let el = 1 / (servicesItem.length - 1)
                        let activeItem = Math.round(progress.toFixed(3) / el)
                        if (active != activeItem && servicesImg) {
                            active = activeItem;
                            changeFunc(active);
                        }
                    }
                    let servicesScroll = gsap.to(servicesItem, {
                        xPercent: -100 * (servicesItem.length - 1),
                        ease: "none",
                        scrollTrigger: {
                            scroller: scrollContainer,
                            scrub: 1,
                            trigger: services,
                            pin: services,
                            anticipatePin: true,
                            start: start,
                            duration: 2,
                            snap: {
                                snapTo: 1 / (servicesItem.length - 1),
                                duration: 0.5,
                            },
                            end: () => "+=" + (services.offsetWidth * 1.7),
                            onUpdate: ({progress, direction, isActive}) => activeFunc(progress),
                            invalidateOnRefresh: true
                        }
                    });
                    primerImg.classList.add(activeClass);
                    sections.forEach(section => {
                        let panel_id = section.id;
                        gsap.to(section, {
                            scrollTrigger: {
                            trigger: section,
                            start: 'left 35%',
                            end: 'right 35%',
                            containerAnimation: servicesScroll,
                            toggleClass: {targets: '[data-panel='+panel_id+']', className: activeClass},
                            }
                        });
                    });
                }
            });
        };

        //fixed header
        function fixedHeader() {
            const header = $('.header');
            const headerFixed = 'header--fixed';
            scroller.on('scroll', function(object){
                if (object.scroll.y >= 90) {
                    header.addClass(headerFixed);
                } else {
                    header.removeClass(headerFixed);
                };
            });
        };
        fixedHeader();

        // spoiler
        function spoilerFunc() {
            const $spoilerItem = $('.spoiler__item');
                const $spoilerHead = $('.spoiler__header');
                const $spoilerBody = $('.spoiler__body');
                const $one = 'one';
                const $isActive = 'is-active';
                $spoilerHead.on('click', function (event) {
                    setTimeout(function () {
                        scroller.update();
                    }, 500);
                if ($spoilerItem.hasClass($one)) {
                    $spoilerHead.not($(this).removeClass($isActive)).parent().removeClass($isActive);
                    $spoilerBody.not($(this).next()).slideUp(150);
                }

                $(this).toggleClass($isActive).next().slideToggle(150);
                $(this).parent().toggleClass($isActive);
                });
        };
        spoilerFunc();

        setTimeout(function () {
            scroller.update()
            ScrollTrigger.refresh();
        }, 3500);


        // cursor
        function cursorFunc() {
            const mXl = window.matchMedia('(min-width: 1200px)');
            let handleCursor = function (mXl) {
                if (mXl.matches) {
                    const cursor = document.querySelector(".cursor");
                    function getDimensions(e) {
                    cursor.style.top = `${e.clientY - 18}px`;
                    cursor.style.left = `${e.clientX - 9}px`;
                    }
                    window.addEventListener("mousemove", (e) => {
                    getDimensions(e);
                    });
                    const delay = 250;
                    function throttle(callback, limit) {
                    let wait = false
                    return function () {
                        if (!wait) {
                        callback.apply(null, arguments)
                        wait = true
                        setTimeout(function () {
                            wait = false
                        }, limit)
                        }
                    }
                    };
                    window.addEventListener("mousemove", (e) => {
                    throttle(getDimensions(e), delay);
                    });
                }
            };
            handleCursor(mXl);
            mXl.addListener(handleCursor);
        };
        cursorFunc();



        // image hover
        function imageRevealHover(){
            let scrollY = 0;
            scroller.on('scroll', (args) => {
                scrollY = args.delta.y;
            });
            const getMousePos = (e) => {
                let posx = 0;
                let posy = 0;
                if (!e) e = window.event;
                if (e.pageX || e.pageY) {
                    posx = e.pageX;
                    posy = e.pageY + scrollY;
                }
                else if (e.clientX || e.clientY) 	{
                    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;

                }
                return { x : posx, y : posy }
            }
            class HoverImgFx3 {
                constructor(el) {
                    this.DOM = {el: el};
                    this.DOM.reveal = document.createElement('div');
                    this.DOM.reveal.className = 'hover-reveal';
                    this.DOM.reveal.style.overflow = 'hidden';
                    let textAfterImg = this.DOM.el.dataset.text;
                    if (textAfterImg){
                        this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner">
                        <div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div>
                        <span class="hover-reveal__text">As soon as we can ;)</span>
                        </div><div class="hover-reveal__text">${this.DOM.el.dataset.text}</div>`;
                    } else{
                        this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner">
                        <div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div>
                        <span class="hover-reveal__text">As soon as we can ;)</span>
                        </div>`;
                    }
                    this.DOM.el.appendChild(this.DOM.reveal);
                    this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
                    this.DOM.revealInner.style.overflow = 'hidden';
                    this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
                    this.DOM.letters = [...this.DOM.el.querySelectorAll('span')];

                    this.initEvents();
                }
                initEvents() {
                    this.positionElement = (ev) => {
                        const mousePos = getMousePos(ev);
                        const docScrolls = {
                            left : document.body.scrollLeft + document.documentElement.scrollLeft,
                            top : document.body.scrollTop + document.documentElement.scrollTop
                        };
                        this.DOM.reveal.style.top = `${mousePos.y+20-docScrolls.top}px`;
                        this.DOM.reveal.style.left = `${mousePos.x+20-docScrolls.left}px`;
                    };
                    this.mouseenterFn = (ev) => {
                        this.positionElement(ev);
                        this.showImage();
                    };
                    this.mousemoveFn = ev => requestAnimationFrame(() => {
                        this.positionElement(ev);
                    });
                    this.mouseleaveFn = () => {
                        this.hideImage();
                    };

                    this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
                    this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
                    this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
                }
                showImage() {
                    TweenMax.killTweensOf(this.DOM.revealInner);
                    TweenMax.killTweensOf(this.DOM.revealImg);

                    this.tl = new TimelineMax({
                        onStart: () => {
                            this.DOM.reveal.style.opacity = 1;
                            TweenMax.set(this.DOM.el, {zIndex: 1000});
                        }
                    })
                        .add('begin')
                        .set([this.DOM.revealInner, this.DOM.revealImg], {transformOrigin: '50% 100%'})
                        .add(new TweenMax(this.DOM.revealInner, 0.4, {
                            ease: Expo.easeOut,
                            startAt: {x: '50%', y: '120%', rotation: 50},
                            x: '0%',
                            y: '0%',
                            rotation: 0
                        }), 'begin')
                        .add(new TweenMax(this.DOM.revealImg, 0.4, {
                            ease: Expo.easeOut,
                            startAt: {x: '-50%', y: '-120%', rotation: -50},
                            x: '0%',
                            y: '0%',
                            rotation: 0
                        }), 'begin')
                        .add(new TweenMax(this.DOM.revealImg, 0.7, {
                            ease: Expo.easeOut,
                            startAt: {scale: 2},
                            scale: 1
                        }), 'begin');
                }
                hideImage() {
                    TweenMax.killTweensOf(this.DOM.revealInner);
                    TweenMax.killTweensOf(this.DOM.revealImg);

                    this.tl = new TimelineMax({
                        onStart: () => {
                            TweenMax.set(this.DOM.el, {zIndex: 999});
                        },
                        onComplete: () => {
                            TweenMax.set(this.DOM.el, {zIndex: ''});
                            TweenMax.set(this.DOM.reveal, {opacity: 0});
                        }
                    })
                        .add('begin')
                        .add(new TweenMax(this.DOM.revealInner, 0.6, {
                            ease: Expo.easeOut,
                            y: '-120%',
                            rotation: -5
                        }), 'begin')
                        .add(new TweenMax(this.DOM.revealImg, 0.6, {
                            ease: Expo.easeOut,
                            y: '120%',
                            rotation: 5,
                            scale: 1.2
                        }), 'begin')
                }
            }
            [...document.querySelectorAll('[data-fx="3"] > .reveal-img__item, .reveal-img__item[data-fx="3"]')].forEach(link => new HoverImgFx3(link));
            const contentel = document.querySelector('.reveal-img');
            [...document.querySelectorAll('.reveal-img__item')].forEach((el) => {
                const imgsArr = el.dataset.img.split(',');
                for (let i = 0, len = imgsArr.length; i <= len-1; ++i ) {
                    const imgel = document.createElement('img');
                    imgel.style.visibility = 'hidden';
                    imgel.style.width = 0;
                    imgel.src = imgsArr[i];
                    imgel.className = 'preload';
                    contentel.appendChild(imgel);
                }
            });
            imagesLoaded(document.querySelectorAll('.preload'), () => document.body.classList.remove('loading'));
        };
        imageRevealHover();


        // validate
        function validate() {
            const contactForm = $('#contact-form');
            if(contactForm.length > 0){
                $.validator.setDefaults({
                    submitHandler: function() {
                        $(".contact").addClass('form-validate');
                        scroller.scrollTo('top', {
                            'offset': 0
                        });
                        setTimeout(function () {
                            scroller.update();
                        }, 500);
                    }
                });
                contactForm.validate({
                    rules: {
                        name: "required",
                        details: "required",
                        email: {
                            required: true,
                            email: true
                        }
                    },
                    messages: {
                        name: "Please enter your name",
                        email: "Please enter your email",
                        details: "Please enter your project details"
                    }
                });
            };

            // file input
            if($('#file').length > 0){
                $('#file').change(function(){
                    var value = $(this).val();
                    $('.add-file__text').text(value);
                    $('.add-file__btn').show();
                });
            };
            $('.add-file__btn').on('click', function() {
                $('#file').val('');
                $(this).hide();
                $('.add-file__text').text('');
            });
        };
        validate();

        function checkbox() {
            const checkbox = document.querySelector('#checkbox-1');
            if(checkbox){
                const options = {
                attributes: true
                }

                function callback(mutationList, observer1) {
                mutationList.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        if($('#checkbox-1').hasClass('error')) {
                            $('.form__checkbox').addClass('error-checkbox');
                        }
                        else {
                            $('.form__checkbox').removeClass('error-checkbox');
                        }
                    }
                })
                }
                const observer1 = new MutationObserver(callback)
                observer1.observe(checkbox, options)
            };
        };
        checkbox();

        function radio() {
            const radio = document.querySelector('#radio-1');
            if(radio){
                const options = {
                attributes: true
                }

                function callback(mutationList, observer2) {
                mutationList.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        if($('#radio-1').hasClass('error')) {
                            $('.form__radio').addClass('error-radio');
                        }
                        else {
                            $('.form__radio').removeClass('error-radio');
                        }
                    }
                })
                }
                const observer2 = new MutationObserver(callback)
                observer2.observe(radio, options)
            };
        };
        radio();

        // anim label
        function label() {
            const formInput = $('.form__t-input');
            const formGroup = '.js-form-group';
            const focused = 'focused';
            const filled = 'filled';
            formInput.focus(function(){
                $(this).parents(formGroup).addClass(focused);
            });
            formInput.blur(function(){
                let inputValue = $(this).val();
                if ( inputValue == "" ) {
                    $(this).removeClass(filled);
                    $(this).parents(formGroup).removeClass(focused);
                } else {
                    $(this).addClass(filled);
                };
            });
        };
        label();


        // cookie
        function cookieMsgInit(){
            const cookieMsg = $.cookie('cookieMsg');
            const cookiesPopup = $('.cookies');
            const cookiesBtn = $('.cookies__btn');
            if(cookieMsg =='true'){
                $('.cookies').hide(250);
                $('.intro').hide(0);
                Splitting();
                setTimeout(function () {
                    $(".projects").addClass("ready");
                }, 1500);
            } else {
                $('.cookies').show(250);
                loaderFunc();
            }
            cookiesBtn.on('click', function() {
                cookiesPopup.hide(250);
                $.cookie('cookieMsg', 'true', { expires: 1});
            });

        };
        cookieMsgInit();


        // spotlight
        function spotlight(){
            let xMouse = -500,
            yMouse = -500,
            lastScrolledLeft = 0,
            lastScrolledTop = 0;
            $(window).mousemove(function(e){
                updateSpotlight(e);
                MousePosition(e);
            });

                function updateSpotlight(e, x, y) {
                    if($('.spotlight').length > 0){
                        let w = $('.spotlight').innerWidth(),
                        h = $('.spotlight').innerHeight(),
                        t = e.pageY - $('.spotlight').offset().top,
                        l = e.pageX - $('.spotlight').offset().left;
                        x = x || l;
                        y = y || t;
                        $('.spotlight').css('background-image', 'radial-gradient(circle at '+ (x / w * 100) +'% '+ (y / h * 100) +'%, transparent 0, rgba(0, 0, 0, .7) 400px)');
                    }
                }
                function MousePosition(e){
                    if($('.spotlight').length > 0){
                    xMouse = e.pageX - $('.spotlight').offset().left;
                    yMouse = e.pageY - $('.spotlight').offset().top;
                }
                }
                $(window).scroll(function(e) {
                    if(lastScrolledLeft != $(document).scrollLeft()){
                        xMouse -= lastScrolledLeft;
                        lastScrolledLeft = $(document).scrollLeft();
                        xMouse += lastScrolledLeft;
                    }
                    if(lastScrolledTop != $(document).scrollTop()){
                        yMouse -= lastScrolledTop;
                        lastScrolledTop = $(document).scrollTop();
                        yMouse += lastScrolledTop;
                    }
                    updateSpotlight(e, xMouse, yMouse);
                });
        };
        spotlight();

    };
    scriptLoad();

    // awards counter
    function awardsFunc() {
        const odometer = $('.odometer');
        const awardsInfo = $('.awards__info');
        if(odometer.length > 0){
            const addNum = function() {
                odometer.each(function () {
                    $(this).text(parseFloat($(this).data('value')));
                });
            };
            scroller.on('call', func => {
                if (awardsInfo) {
                    addNum();
                };
            });
        };
    };
    awardsFunc();

    // btn ajax
    function btnPageFunc(btn, path) {
        $(document).on('click', btn, function(e) {
            e.preventDefault();
            ajaxLoadPage(path);
            if($.cookie('cookieMsg') =='true'){
                $('.intro').addClass('is-cookie');
            } else {
                $('.intro').removeClass('is-cookie');
            }
        });
    };

    btnPageFunc('.js-contact-page', 'contact.html');
    btnPageFunc('.js-home-page', 'index.html');

    /* On Back / Forward */
    window.onpopstate = function () {
        ajaxLoadPage(location.href, false);
    };
    function ajaxLoadPage(url) {
        if ($('.ajax_inner').length < 2) {
            var toHistory = true;
            $('body').addClass('page_loaded');
            var section = $('<div class="ajax_inner overflow-hidden"></div>').appendTo('.ajax_wrap');
            section.load(url + ' .ajax_inner > *', function () {
                setTimeout(function () {
                    section.prev('.active').removeClass('active').end().addClass('active').removeClass('overflow-hidden');
                    section.prev('.ajax_inner').remove();
                    scriptLoad();
                    footerReadyEnd();
                    footerReadyStart();
                    awardsFunc();

                    setTimeout(function () {
                        scroller.update();
                    }, 500);
                    $('.intro').removeClass('ready');
                    ScrollTrigger.addEventListener("refresh", () => scroller.update());
                    ScrollTrigger.refresh();

                    var ajax_title = $(".ajax_wrap_data").data('title');
                    var ajax_bodyclass = $(".ajax_wrap_data").data('bodyclass');
                    $('body').attr('class', ajax_bodyclass);
                    document.title = ajax_title;
                    if (toHistory) {
                        window.history.pushState({'dataurl': url}, ajax_title, url);
                    }
                }, 500);
            });
        };
    };
});

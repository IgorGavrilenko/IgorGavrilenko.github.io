window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    // fullHeightInit
    const fullHeightInit = () => {
        const calcFullHeight = () =>
            document.documentElement.style.setProperty('--vh', window.innerHeight / 100 + 'px');
        const calcFullHeightOrientation = () =>
            document.documentElement.style.setProperty('--vh', window.innerWidth / 100 + 'px');
        window.addEventListener('orientationchange', calcFullHeightOrientation);
        window.addEventListener('load', calcFullHeight);
    };

    fullHeightInit();

    // appHeight
    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight);
    window.addEventListener('orientationchange', appHeight);
    appHeight();

    // mobileMenuFunc
    function mobileMenuFunc() {
        const toggleMobileNav = document.querySelector('.header__toggle');
        const mobileNav = document.querySelector('.header__nav');
        const body = document.querySelector('body');
        const btnOrder = document.querySelector('.btn__order');
        const toggleMobileNavOpen = 'header__toggle--open';
        const bodyIsLocked = 'body-locked';
        const mobileNavOpen = 'header__nav--open';
        toggleMobileNav.addEventListener('click', function (e) {
            this.classList.toggle(toggleMobileNavOpen);
            mobileNav.classList.toggle(mobileNavOpen);
            body.classList.toggle(bodyIsLocked);
        });
        // mobileNav.append(btnOrder.cloneNode(true));
    }

    mobileMenuFunc();

    // mobileSubMenuFunc
    function mobileSubMenuFunc() {
        const dropdownToggle = document.querySelectorAll('.dropdown-toggle');
        dropdownToggle?.forEach(dropdownToggle => {
            dropdownToggle.href = '#';
            dropdownToggle.addEventListener('click', function () {
                dropdownToggle.classList.toggle('is-active');
            });
        });
    }

    // mobileSubMenuFunc();

    const query = window.matchMedia('(max-width: 1199px)');
    query.onchange = (evt) => {
        if (query.matches) {
            mobileSubMenuFunc();
        }
    };
    query.onchange();

    // stickyHeaderFunc
    function stickyHeaderFunc() {
        function appHeight() {
            document.documentElement.style.setProperty('--vh', window.innerHeight / 100 + 'px');
            document.documentElement.style.setProperty('--vw', window.innerWidth / 100 + 'px');
        }

        setTimeout(() => {
            appHeight();
        }, 500)

        window.addEventListener('orientationchange', function () {
            setTimeout(() => {
                appHeight();
            }, 500)
        });
    }

    stickyHeaderFunc();

    // scrollHeaderFunc
    function scrollHeaderFunc() {
        let header = document.querySelector('.header');
        let doc = document.documentElement;
        let w = window;
        let prevScroll = w.scrollY || doc.scrollTop;
        let curScroll;
        let direction = 0;
        let prevDirection = 0;
        let checkScroll = function checkScroll() {
            curScroll = w.scrollY || doc.scrollTop;
            if (curScroll > prevScroll) {
                direction = 2;
            } else if (curScroll < prevScroll) {
                direction = 1;
            }
            if (direction !== prevDirection) {
                toggleHeader(direction, curScroll);
            }
            prevScroll = curScroll;
        };
        let toggleHeader = function toggleHeader(direction, curScroll) {
            if (direction === 2 && curScroll > 52) {
                header.classList.add('out');
                prevDirection = direction;
            } else if (direction === 1) {
                header.classList.remove('out');
                prevDirection = direction;
            }
        };
        window.addEventListener('scroll', checkScroll);
    }

    scrollHeaderFunc();

    // bgHeaderFunc
    function bgHeaderFunc() {
        const sections = gsap.utils.toArray('.section--light');
        sections.forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top 1%',
                end: 'bottom',
                toggleClass: {
                    targets: '.header',
                    className: 'header--light'
                },
            })
        });
    }

    bgHeaderFunc();

    // bgHeaderFunc2
    function bgHeaderFunc2(sect, addClass) {
        if (sect) {
            const sections = gsap.utils.toArray(sect);
            sections.forEach(sections => {
                ScrollTrigger.create({
                    trigger: sections,
                    start: 'top 20%',
                    toggleClass: {
                        targets: '.header',
                        className: addClass
                    },
                })
            });
        }
    }

    bgHeaderFunc2('.section--hero-1', 'header--transparent');
    bgHeaderFunc2('.section--service-2', 'header--service-2');

    // loaderFunc
    function loaderFunc(selector) {
        gsap.to(selector, {
            width: 0,
            duration: 0,
            ease: 'none',
        });
    }

    loaderFunc('.loader-pattern');

    // countFunc
    function countFunc(selector) {
        if (selector) {
            const TIME_IN_SECONDS = 2;
            let counterItem = document.querySelector(selector);
            let counter = {
                val: 0,
            };
            gsap.to(counter, {
                duration: TIME_IN_SECONDS,
                val: 100,
                onUpdate() {
                    counterItem.textContent = `${Math.ceil(counter.val)}%`;
                },
                ease: 'none',
                repeat: 0,
                repeatDelay: 0,
            });
        }
    }

    countFunc('.loader-progress');

    // preLoaderFunc
    function headerFunc() {
        document.querySelector('.header').classList.add('is-transform-none');
    }

    function preLoaderFunc() {
        let childSplit = new SplitText('.split-text-hero', {
            type: 'lines',
            linesClass: 'line line++'
        });
        let wrap = (query, tag) => {
            document.querySelectorAll(query).forEach(elem => {
                const div = document.createElement(tag);
                elem.parentElement.insertBefore(div, elem);
                div.classList.add('line-wrapper')
                div.appendChild(elem);
            });
        };
        wrap('.line', 'div');

        // function splitRevert() {
        //     childSplit.revert();
        // }

        let tlLoad = gsap.timeline({
            defaults: {
                duration: 0,
            },
        });
        tlLoad
            .to('.loader-pattern', {
                width: 0,
            })
            .to('.loader-progress, .loader-logo', {
                autoAlpha: 0,
            })
            .to('.header', {
                autoAlpha: 1,
                duration: .5,
                yPercent: 104,
                onComplete: headerFunc,
            })
            .to('.scroller', {
                autoAlpha: 1,
                duration: 0,
            })
            .from(childSplit.lines, {
                duration: .5,
                yPercent: 200,
                ease: "power4",
                stagger: .2,
                // onComplete: splitRevert,
            })
            .to('.section--hero .section-title-small, .section--hero .section__sub-text', {
                duration: 2,
                autoAlpha: 1,
            })
            .to('.section--hero .btn-wrap', {
                xPercent: 200,
                duration: .5,
            }, "-=1")
            .to('.section--hero-1 .pattern', {
                autoAlpha: 1,
                duration: .5,
            }, "-=1")
            .to('.section--hero-1 .scroll-btn-wrap', {
                yPercent: -250,
                duration: 1,
            })
    }

    preLoaderFunc();


    // resizeMenuFunc
    function resizeMenuFunc() {
        const headerNav = document.querySelector('.header__nav');
        const headerToggle = document.querySelector('.header__toggle');
        const body = document.querySelector('body');
        const scroller = document.querySelector('.scroller');
        headerNav.classList.remove('header__nav--open');
        headerToggle.classList.remove('header__toggle--open');
        body.classList.remove('body-locked');
        scroller.classList.add('scroller--show');
    }

    document.querySelector('.header__toggle').addEventListener('click', function () {
        document.querySelector('.header__nav').classList.toggle('header__nav--hide');
    })
    // resizeMenuFunc();

    // resizeClassFunc
    function resizeClassFunc(selector, className) {
        const el = document.querySelector(selector);
        if (el) {
            el.classList.add(className);
        }
    }

    // resizeFunc
    function resizeFunc() {
        let oldWidth = window.innerWidth;
        window.onresize = function () {
            let newWidth = window.innerWidth;
            if (newWidth !== oldWidth) {
                oldWidth = newWidth;
                setTimeout(() => {
                    resizeClassFunc('.js-hero-btn', 'is-transform-none');
                    resizeClassFunc('.js-hero-scroll-btn', 'is-transform-none');
                    resizeClassFunc('.grid--feature-2', 'is-transform-none');
                    resizeClassFunc('.m-grid--service-4', 'is-transform-none');
                    resizeClassFunc('.section--service-4 .section__title', 'is-transform-none');
                    resizeMenuFunc();
                    preLoaderFunc();
                }, 200);
            }
        };
    }

    resizeFunc();

    // orientationchangeFunc
    function orientationchangeFunc() {
        window.addEventListener('orientationchange', function () {
            setTimeout(() => {
                headerFunc()
                resizeClassFunc('.js-hero-btn', 'is-transform-none');
                resizeClassFunc('.js-hero-scroll-btn', 'is-transform-none');
                resizeClassFunc('.grid--feature-2', 'is-transform-none');
                resizeClassFunc('.m-grid--service-4', 'is-transform-none');
                resizeClassFunc('.section--service-4 .section__title', 'is-transform-none');
                resizeMenuFunc();
                preLoaderFunc();
            }, 200);
        }, false);
    }

    orientationchangeFunc()

    // bodyLock
    function bodyLockFunc() {
        const body = document.querySelector('body');
        const bodyLockClass = 'body-lock';
        body.classList.add(bodyLockClass);
        setTimeout(() => {
            body.classList.remove(bodyLockClass);
        }, 6000);
    }

    bodyLockFunc();

    // arcAnimFunc
    function arcAnimFunc(el, rad) {
        $(el).arctext({
            radius: rad,
        })
    }

    // arcReverseAnimFunc
    function arcReverseAnimFunc() {
        setTimeout(() => {
            $('.arc-text').addClass('arc-text--reverse');
            $('.arc-text-wrapper').css({
                position: 'relative'
            });
        }, 500)
    }

    // arcReverseAnimFunc();


    // contactAnimate
    function contactAnimate() {
        let tl = gsap.timeline({
            defaults: {
                duration: 1,
            },
            scrollTrigger: {
                trigger: '.section--contact',
                toggleActions: 'play none none none',
                start: 'top 30%',
                onRefresh: self => self.progress && self.animation.progress(1),
            }
        });
        tl
            .add('contactAnimate1')
            .to('.arc-text-wrapper', {
                rotation: 0,
            }, 'contactAnimate1')
            .call(function () {
                arcReverseAnimFunc();
            })
            .to('.contact__media--general', {
                rotation: -90,
                autoAlpha: 0,
            }, 'contactAnimate1')
            .to('.section__post-text', {
                autoAlpha: 1,
                yPercent: -50,
                delay: 2,
            }, 'contactAnimate1')
            .to('.contact__media--3', {
                autoAlpha: 1,
                yPercent: -50,
            }, '>')
            .to('.grid__item--1 .contact-animate-d, .grid__item--3 .contact-animate-d', {
                autoAlpha: 1,
                yPercent: -50,
                stagger: .1,
            }, '>')

    }

    // sectionMobFunc
    function sectionMobFunc(sectAnim, yPerc) {
        const targets = gsap.utils.toArray(sectAnim);
        targets.forEach((target) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: target,
                    toggleActions: 'play none none none',
                    start: 'top 70%',
                    onRefresh: self => self.progress && self.animation.progress(1),
                }
            });
            tl.to(target, {
                yPercent: yPerc,
                duration: 1,
                autoAlpha: 1,
            })
        });
    }

    // contactAnimHeaderFunc
    function contactAnimHeaderFunc() {
        let contac = gsap.timeline({
            defaults: {
                duration: .5,
                stagger: .2,
                autoAlpha: 1,
            },
            scrollTrigger: {
                trigger: '.section--contact',
                toggleActions: 'play none none none',
                start: 'top 50%',
                onRefresh: self => self.progress && self.animation.progress(1),
            }
        });
        contac
            .to('.section--contact .section__title', {
                yPercent: -50,
                autoAlpha: 1,
            })
    }

    // gsapMatchMediaFunc
    let mm;

    function gsapMatchMediaFunc() {
        mm = gsap.matchMedia();
        let Smooth;
        mm.add('(min-width: 1200px)', () => {
            const scroller = '.scroller';
            const scrollerInner = '.scroller__inner';
            const Smooth = ScrollSmoother.create({
                wrapper: scroller,
                content: scrollerInner,
                smooth: 1,
                effects: true,
                smoothTouch: .05,
                normalizeScroll: true,
                ignoreMobileResize: true
            });
        });
    }

    gsapMatchMediaFunc()
    mm.add('(max-width: 991.98px)', () => {
        // mobile functions
        sectionMobFunc('.section--m-anim', -5);
        sectionMobFunc('.section--m-anim-fade', 0);
    });

    mm.add('(min-width: 992px)', () => {
        // desktop functions
        arcAnimFunc('.section--contact .arc-text', 400);
        contactAnimate();
    });

    // Fade Block

    const fadeBlocks = document.querySelectorAll('.fade-up');

    if (fadeBlocks) {
        function setupFade() {
            fadeBlocks.forEach((block) => {
                gsap.set(block, {
                    y: 60,
                    opacity: 0,
                });

                gsap.to(block, {
                    scrollTrigger: {
                        trigger: block,
                        toggleActions: 'restart pause resume reverse',
                        start: 'top 90%',
                    },
                    duration: 1,
                    opacity: 1,
                    y: 0,
                });

            });
        }

        setupFade();
    }


    const modalScroll = {
        _handler: e => {
            let node = e.target;
            while (node && node.scrollHeight <= node.clientHeight) node = node.parentNode;
            node && node !== document.body && node !== document.documentElement && e.stopPropagation();
        },
        enable: () => document.addEventListener("wheel", modalScroll._handler, {passive: true, capture: true}),
        disable: () => document.removeEventListener("wheel", modalScroll._handler)
    };

    // Modal

    const body = document.body;

    document.addEventListener('click', modalHandler);

    function modalHandler(evt) {

        const modalBtnOpen = evt.target.closest('.js-modal');
        if (modalBtnOpen) {
            evt.preventDefault();
            const modalSelector = modalBtnOpen.dataset.modal;
            showModal(document.querySelector(modalSelector));

            modalScroll.enable();
        }

        const modalBtnClose = evt.target.closest('.modal-close');
        if (modalBtnClose) {
            evt.preventDefault();
            hideModal(modalBtnClose.closest('.modal-window'));

            modalScroll.disable();
        }

        if (evt.target.matches('#modal-backdrop')) { // backdrop click
            hideModal(document.querySelector('.modal-window.show'));

            modalScroll.disable();
        }
    }

    function showModal(modalElem) {
        modalElem.classList.add('show');
        body.classList.add('modal-show');
    }

    function hideModal(modalElem) {
        modalElem.classList.remove('show');
        body.classList.remove('modal-show');
        if (modalElem.querySelector('.step-01')) {
            modalElem.querySelector('.step-01').classList.add('active');
        }
        if (modalElem.querySelector('.step-02')) {
            modalElem.querySelector('.step-02').classList.remove('active');
        }
        if (modalElem.querySelector('.step-03')) {
            modalElem.querySelector('.step-03').classList.remove('active');
        }
        const inputs = modalElem.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = '';
        });
    }

    // buttonAnimFunc
    function buttonAnimFunc(btnSelector) {
        const btn = document.querySelectorAll(btnSelector);
        if (btn) {
            btn.forEach((btn) => {
                let tl = gsap.timeline({
                    defaults: {
                        duration: 2,
                    }
                })
            });
        }
    }

    // buttonAnimFunc();

    // lottieAnimFunc
    function lottieAnimFunc(item) {
        const card = document.querySelectorAll(item);
        if (card) {
            card.forEach((card) => {
                card.addEventListener('mouseover', function (event) {

                });
            });
        }

        // setTimeout(() => {
        // }, 5000)
    }

    // lottieAnimFunc('.card--feature-1');


// DOMContentLoaded //
});
// DOMContentLoaded //

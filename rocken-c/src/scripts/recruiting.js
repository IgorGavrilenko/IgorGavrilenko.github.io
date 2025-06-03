window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollToPlugin);
    ScrollTrigger.normalizeScroll(true);


    // swiperScrollbarFunc

    function swiperScrollbarFunc(selector, scrollbarType, spaceMob, spaceDesk, slides) {
        let swiper;
        if (selector) {
            swiper = new Swiper(selector, {
                slidesPerView: slides,
                spaceBetween: spaceMob,
                freeMode: true,
                scrollbar: {
                    el: `${selector} .swiper-scrollbar`,
                    hide: scrollbarType,
                },
                navigation: {
                    nextEl: `${selector} .swiper-button-next`,
                    prevEl: `${selector} .swiper-button-prev`,
                },
                breakpoints: {
                    576: {
                        slidesPerView: 'auto',
                        spaceBetween: spaceDesk,
                    },
                },
                resistance: true,
                resistanceRatio: 0,
                autoHeight: false,
            });
        }

        const progressBar = document.querySelector(`${selector} .swiper-scroll__line`);
        if (progressBar) {
            swiper.on('slideChange', function () {
                updateProgressBar();
            });
            updateProgressBar();

            function updateProgressBar() {
                let activeIndex = swiper.activeIndex;
                let widthPerSlide = 100 / swiper.slides.length;
                progressBar.style.width = (widthPerSlide * (activeIndex + 1)) + '%';
            }
        }
    }

    swiperScrollbarFunc('.swiper-partner', false, 12, 21, 'auto');

    // service4Func
    function service4Func() {
        let service1 = gsap.timeline({
            defaults: {
                duration: .5,
            },
            scrollTrigger: {
                trigger: '.section--service-4',
                start: 'top 50%',
                scrub: true,
            }
        });
        service1
            .to('.section--service-4 .m-grid__item, .section--service-4 .section__title', {
                yPercent: -20,
            })
    }

    // service4Func()

    // service3Func
    function service3Func(item, percent, start) {
        const sectionItem = gsap.utils.toArray(item);
        sectionItem?.forEach((sectionItem) => {
            let tl = gsap.timeline({
                defaults: {
                    duration: .5,
                },
                scrollTrigger: {
                    trigger: sectionItem,
                    start: start,
                    scrub: true,
                }
            });
            tl
                .to(sectionItem, {
                    xPercent: percent,
                })
        });
    }

            // heroContentFunc
    function heroContentFunc() {
        let tl = gsap.timeline({
            defaults: {
                duration: .5,
            },
            scrollTrigger: {
                trigger: '.section--hero-page',
                toggleActions: 'play none none none',
                start: 'top 100%',
                onRefresh: self => self.progress && self.animation.progress(1),
            }
        });
        tl
            .to('.section--hero-page .section__content', {
                xPercent: -10,
                autoAlpha: 1,
            })
    }

    // heroContentFunc();

    // tLineMark
    function tLineMark(item, tlStart) {
        const point = gsap.utils.toArray(item);
        point?.forEach((point) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: point,
                    scrub: true,
                    start: tlStart,
                    end: 'bottom',
                    toggleClass: 'tl-point--active',
                }
            });
        });
    }

    tLineMark('.tl-point--hero-2', 'top 49%');
    tLineMark('.tl-point--service-3', 'top 50%');
    tLineMark('.tl-point--service-4', 'top 50%');

    // loadFunc
    function loadFunc() {
        const sectionLoader = document.querySelector('.section--loader');
        const timeLine = document.querySelector('.time-line');
        const sectionHide = 'section--hide';
        const timeLineHide = 'time-line--hide';
        setTimeout(() => {
            sectionLoader.classList.add(sectionHide);
        }, 3500);
        setTimeout(() => {
            timeLine.classList.remove(timeLineHide);
        }, 4700);
    }

    loadFunc();


    // resizeFuncRec
    function resizeFuncRec() {
        let oldWidth = window.innerWidth;
        window.onresize = function () {
            let newWidth = window.innerWidth;
            if (newWidth !== oldWidth) {
                oldWidth = newWidth;
                setTimeout(() => {
                    tLineMark('.tl-point--hero-2', 'top 49%');
                    tLineMark('.tl-point--service-3', 'top 50%');
                    tLineMark('.tl-point--service-4', 'top 50%');
                }, 200);
            }
        };
    }

    resizeFuncRec();

    // orientationchangeFuncRec
    function orientationchangeFuncRec() {
        window.addEventListener("orientationchange", function () {
            setTimeout(() => {
                    tLineMark('.tl-point--hero-2', 'top 49%');
                    tLineMark('.tl-point--service-3', 'top 50%');
                    tLineMark('.tl-point--service-4', 'top 50%');
            }, 200);
        }, false);
    }

    orientationchangeFuncRec()

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

    mm.add('(min-width: 768px)', () => {
        // tab - desktop functions
        service3Func('.m-grid--service-3 .m-grid__item:nth-child(odd) .card--service-3', 10, 'top 50%');
        service3Func('.m-grid--service-3 .m-grid__item:nth-child(even) .card--service-3', -10, 'top 50%');
        service4Func();
    });
    mm.add('(min-width: 1200px)', () => {
        // desktop functions
        setTimeout(() => {
            heroContentFunc();
        }, 4500);
    });

// DOMContentLoaded //
});
// DOMContentLoaded //

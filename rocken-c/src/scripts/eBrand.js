window.addEventListener("DOMContentLoaded", () => {
    ScrollTrigger.normalizeScroll(true);

    // heroContentFunc
    function heroContentFunc() {
        let tl = gsap.timeline({
            defaults: {
                duration: .5,
            },
            scrollTrigger: {
                trigger: '.section--hero-page',
                start: 'top 100%',
                toggleActions: 'play none none none',
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

    // service4Func
    function service4Func(trigger, target) {
        let service1 = gsap.timeline({
            defaults: {
                duration: .5,
            },
            scrollTrigger: {
                trigger: trigger,
                start: 'top 50%',
                toggleActions: 'play none none none',
                onRefresh: self => self.progress && self.animation.progress(1),
            }
        });
        service1
            .to(target, {
                yPercent: -20,
                autoAlpha: 1,
            })
    }

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

    swiperScrollbarFunc('.swiper-partner', false, 12, 20, 'auto');


    // cardFunc
    function cardFunc() {
        const stagger = 2;
        gsap.set('.card--effect', {
            y: (index) => 10 * index,
            zIndex: (index, target, targets) => targets.length - index,
            scale: (index) => 1 - (index * 0.01)
        })
        let tlc = gsap.timeline({
            defaults: {
                ease: 'none',
                duration: 1,
            },
            scrollTrigger: {
                trigger: '.section--effect',
                start: 'top',
                end: 'bottom',
                scrub: 1,
                pin: true,
                onRefresh: self => self.progress && self.animation.progress(1),
                invalidateOnRefresh: true,
            }
        });
        tlc.to('.card--effect', {
            scale: 1,
            stagger: stagger,
        })
        tlc.to('.card--effect', {
            yPercent: -300,
            opacity: .7,
            stagger: stagger,
            rotation: 20,
        }, stagger)

    }

    cardFunc();


    // loadFunc
    function loadFunc() {
        const sectionLoader = document.querySelector('.section--loader');
        const sectionHide = 'section--hide';
        const timeLineHide = 'time-line--hide';
        setTimeout(() => {
            sectionLoader.classList.add(sectionHide);
        }, 3500);
    }

    loadFunc();


    // resizeFuncBrand
    function resizeFuncBrand() {
        let oldWidth = window.innerWidth;
        window.onresize = function () {
            let newWidth = window.innerWidth;
            if (newWidth !== oldWidth) {
                oldWidth = newWidth;
                setTimeout(() => {

                }, 200);
            }
        };
    }

    resizeFuncBrand();

    // orientationchangeFuncBrand
    function orientationchangeFuncBrand() {
        window.addEventListener('orientationchange', function () {
            setTimeout(() => {


            }, 200);
        }, false);
    }

    orientationchangeFuncBrand()

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

    mm.add('(max-width: 1199.98px)', () => {
        // mobile functions

    });
    mm.add('(min-width: 768px)', () => {
        // tab - desktop functions
        service4Func('.section--effect', '.section--effect .section__title');
    });

    mm.add('(min-width: 1200px)', () => {
        // tab - desktop functions
        setTimeout(() => {
            heroContentFunc();
        }, 4500);
    });


// DOMContentLoaded //
});
// DOMContentLoaded //

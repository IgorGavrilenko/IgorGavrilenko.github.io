import {Modal} from "../../ui-library/components/modal/modal";

window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);


    var breadcrumbLastElement = document.querySelector('.breadcrumb_last');

    if (breadcrumbLastElement) {
        var parentSpan = breadcrumbLastElement.parentNode;

        parentSpan.classList.add('last__link__wrapper');
    }

    function heroContentFunc() {
        let tl = gsap.timeline({
            defaults: {
                duration: .5,
            },
            scrollTrigger: {
                trigger: '.blog-hero',
                toggleActions: 'play none none none',
                start: 'top 100%',
                onRefresh: self => self.progress && self.animation.progress(1),
            }
        });
        tl
            .to('.blog-hero #breadcrumbs', {
                duration: 1,
                autoAlpha: 1,
            })
            .to('.blog-hero .hor__card', {
                duration: 1,
                autoAlpha: 1,
            }, "-=.5")
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

    setTimeout(() => {
        heroContentFunc();
    }, 4500);




// DOMContentLoaded //
});
// DOMContentLoaded //

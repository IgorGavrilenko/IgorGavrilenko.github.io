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
                trigger: '.article-hero',
                toggleActions: 'play none none none',
                start: 'top 100%',
                onRefresh: self => self.progress && self.animation.progress(1),
            }
        });
        tl
            .to('.article-hero #breadcrumbs', {
                duration: 1,
                autoAlpha: 1,
            })
            .to('.section--hero .article__head', {
                duration: 1,
                autoAlpha: 1,
            }, "-=1")
            .to('.section--hero .article-hero__subtitle', {
                duration: 1,
                autoAlpha: 1,
            }, "-=1")
            .to('.section--hero .article__author-block', {
                duration: 1,
                autoAlpha: 1,
            }, "-=1")
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

    var contentEl = document.querySelectorAll(
        '.content p, .content h1, .content h2, .content h3, .content h4, .content h5, .content h6, .content figure, .content ul li, .content table, .content-anchor__title, .content-anchor__list '
    );

    contentEl.forEach(function (el) {
        el.classList.add('fade-up');
    });



    // CREATE NAV LIST

    const webDesignsDiv = document.querySelector(".content-anchor__list");

    if (webDesignsDiv) {
        const headings = document.querySelectorAll(".content-anchor h3");

        const anchorList = document.createElement("ul");
        let headingCounter = 1;

        headings.forEach((heading) => {
            const anchor = document.createElement("a");
            anchor.textContent = heading.textContent;
            anchor.setAttribute("data-scroll-to", `heading${headingCounter}`);

            const listItem = document.createElement("li");
            listItem.appendChild(anchor);

            anchorList.appendChild(listItem);

            heading.id = `heading${headingCounter}`;

            headingCounter++;
        });

        webDesignsDiv.appendChild(anchorList);
    }

    // Smooth Scroll

    const links = document.querySelectorAll('[data-scroll-to]');

    if (links) {
        links.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();

                const targetBlockId = link.dataset.scrollTo;
                const targetBlock = document.getElementById(targetBlockId);
                if (targetBlock) {
                    const topPosition = targetBlock.getBoundingClientRect().top;
                    window.scrollTo({
                        top: topPosition,
                        behavior: 'smooth',
                    });
                }
            });
        });
    }

    // marqueeFunc
    function marqueeFunc(selector, repeat, paused, speed) {
        const loop = horizontalLoop(`${selector} .marquee__item`, {
            repeat: repeat,
            paused: paused,
            speed: speed
        });
    }

    marqueeFunc('.marquee--feedback', -1, false, 2);





// DOMContentLoaded //
});
// DOMContentLoaded //

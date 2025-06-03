window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);


    function heroContentFunc() {
        let tl = gsap.timeline({
            defaults: {
                duration: .5,
            },
            scrollTrigger: {
                trigger: '.contact-hero',
                toggleActions: 'play none none none',
                start: 'top 100%',
                onRefresh: self => self.progress && self.animation.progress(1),
            }
        });
        tl
            .to('.contact-hero .section__tag', {
                duration: 1,
                autoAlpha: 1,
            })
            .to('.contact-hero .section__content', {
                duration: 1,
                autoAlpha: 1,
            }, "-=.5")
    }

    setTimeout(() => {
        heroContentFunc();
    }, 4500);


    // Accordion

    var accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(function (item) {
        var header = item.querySelector('.accordion-header');
        var content = item.querySelector('.accordion-content');
        header.addEventListener('click', function () {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                content.style.height = 0;
            } else {
                var activeItem = document.querySelector('.accordion-item.active');
                if (activeItem) {
                    activeItem.classList.remove('active');
                    var activeContent = activeItem.querySelector('.accordion-content');
                    activeContent.style.height = 0;
                }
                item.classList.add('active');
                content.style.height = content.scrollHeight + 'px';
            }
        });
    });


    function marqueeFunc(selector, repeat, paused, speed) {
        const loop = horizontalLoop(`${selector} .marquee__item`, {
            repeat: repeat,
            paused: paused,
            speed: speed
        });
    }

    marqueeFunc('.marquee--ticker', -1, false, 1);

    var tabLinks = document.querySelectorAll('.tabs a');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var target = link.dataset.target;
            openTab(target);

            var parentLi = link.parentElement;
            var allLi = document.querySelectorAll('.tabs li');
            allLi.forEach(function(li) {
                li.classList.remove('active');
            });
            parentLi.classList.add('active');
        });
    });

    var nestedTabLinks = document.querySelectorAll('.nested-tab-links a');
    nestedTabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var target = link.dataset.target;
            openNestedTab(target);

            var parentLi = link.parentElement;
            var allLi = document.querySelectorAll('.active .nested-tab-links li');
            allLi.forEach(function(li) {
                li.classList.remove('active');
            });
            parentLi.classList.add('active');
        });
    });





// DOMContentLoaded //
});
// DOMContentLoaded //
function openTab(tabName) {
    var tabContents = document.querySelectorAll('.tabs__wrapper > .tab-content');
    tabContents.forEach(function(tab) {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

function openNestedTab(tabName) {
    var tabContents = document.querySelectorAll('.tabs__wrapper > .tab-content.active > .tab-content');
    tabContents.forEach(function(tab) {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}
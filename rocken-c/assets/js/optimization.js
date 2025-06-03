/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/scripts/optimization.js ***!
  \*************************************/
window.addEventListener("DOMContentLoaded", function () {
  ScrollTrigger.normalizeScroll(true);

  // heroContentFunc
  function heroContentFunc() {
    var tl = gsap.timeline({
      defaults: {
        duration: .5
      },
      scrollTrigger: {
        trigger: '.section--hero-page',
        start: 'top 100%',
        toggleActions: 'play none none none',
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    tl.to('.section--hero-page .section__content', {
      xPercent: -10,
      autoAlpha: 1
    });
  }

  // heroContentFunc();

  // service4Func
  function service4Func(trigger, target) {
    var service1 = gsap.timeline({
      defaults: {
        duration: .5
      },
      scrollTrigger: {
        trigger: trigger,
        start: 'top 50%',
        toggleActions: 'play none none none',
        onRefresh: function onRefresh(self) {
          return self.progress && self.animation.progress(1);
        }
      }
    });
    service1.to(target, {
      yPercent: -20,
      autoAlpha: 1
    });
  }

  // tabFunc
  function tabFunc() {
    var items1 = gsap.utils.toArray(".b-tab .b-tab__item .card__body");
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section--case-2",
        start: "top top",
        end: "+=" + 100 * items1.length + "%",
        duration: 2,
        ease: "none",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true
      }
    });
    gsap.set(".b-tab__item:not(:first-child) .card__body", {
      width: '0'
    });
    items1.forEach(function (item1, i) {
      if (items1[i + 1]) {
        tl.to(items1[i + 1], {
          width: "800px"
        }).to(item1, {
          width: '0'
        }, "<");
      }
    });
  }
  tabFunc();
  function tabFunc1() {}
  tabFunc1();

  // roundFunc
  function roundFunc() {
    var point = gsap.utils.toArray('.b-schema-point');
    var circuit = document.querySelector('.b-schema__circuit');
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section--feature-4",
        start: 'top 20%',
        // end: "bottom bottom",
        ease: "none",
        pin: true,
        scrub: 0.2,
        end: '+=2000'
      }
    });
    tl.add('start').to('.section--feature-4 .section__intro', {
      autoAlpha: 1,
      duration: 2,
      yPercent: 20
    }, 'start').to('.section--feature-4 .pattern, .section--feature-4 .b-schema__pic', {
      autoAlpha: 1,
      duration: 2
    }, 'start').to('.b-schema__circuit', {
      autoAlpha: 1,
      duration: 2
    }).to('.b-schema-point__round', {
      autoAlpha: 1,
      duration: 2
    }).to('.b-schema-text__text', {
      autoAlpha: 1,
      duration: 2,
      yPercent: 100
    }).to(circuit, {
      rotation: 90,
      duration: 4
    });
  }
  roundFunc();

  // loadFunc
  function loadFunc() {
    var sectionLoader = document.querySelector('.section--loader');
    var sectionHide = 'section--hide';
    var timeLineHide = 'time-line--hide';
    setTimeout(function () {
      sectionLoader.classList.add(sectionHide);
    }, 3500);
  }
  loadFunc();

  // resizeFuncNetwork
  function resizeFuncNetwork() {
    var oldWidth = window.innerWidth;
    window.onresize = function () {
      var newWidth = window.innerWidth;
      if (newWidth !== oldWidth) {
        oldWidth = newWidth;
        setTimeout(function () {}, 200);
      }
    };
  }

  // resizeFuncNetwork();

  // orientationchangeFuncNetwork
  function orientationchangeFuncNetwork() {
    window.addEventListener("orientationchange", function () {
      setTimeout(function () {}, 200);
    }, false);
  }

  // orientationchangeFuncNetwork()

  // gsapMatchMediaFunc
  var mm;
  function gsapMatchMediaFunc() {
    mm = gsap.matchMedia();
    var Smooth;
    mm.add('(min-width: 1200px)', function () {
      var scroller = '.scroller';
      var scrollerInner = '.scroller__inner';
      var Smooth = ScrollSmoother.create({
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
  gsapMatchMediaFunc();
  mm.add('(max-width: 1199.98px)', function () {
    // mobile functions
  });
  mm.add('(min-width: 768px)', function () {
    // tab - desktop functions
    service4Func('.section--service-4', '.section--service-4 .m-grid__item, .section--service-4 .section__title');
    service4Func('.section--feature-4', '.section--feature-4 .section__title');
    service4Func('.section--case-2', '.section--case-2 .section__title');
  });
  mm.add('(min-width: 1200px)', function () {
    // tab - desktop functions
    setTimeout(function () {
      heroContentFunc();
    }, 6500);
  });

  // DOMContentLoaded //
});
// DOMContentLoaded //
/******/ })()
;